import { writeFileSync, mkdirSync } from 'fs';

const url = process.argv[2];
if (!url) {
  console.error('No URL provided');
  process.exit(1);
}

// Map known HN pages to their API endpoint
const HN_API = 'https://hacker-news.firebaseio.com/v0';

const PAGE_MAP = {
  '/news':     'topstories',
  '/newest':   'newstories',
  '/best':     'beststories',
  '/ask':      'askstories',
  '/show':     'showstories',
  '/jobs':     'jobstories',
};

function getEndpoint(url) {
  const path = new URL(url).pathname.replace(/\/$/, '') || '/news';
  return PAGE_MAP[path] ?? 'topstories';
}

async function fetchJSON(url) {
  const res = await fetch(url);
  return res.json();
}

async function main() {
  const endpoint = getEndpoint(url);
  console.log(`Fetching ${endpoint} from ${url}...`);

  const ids = await fetchJSON(`${HN_API}/${endpoint}.json`);
  const top = ids.slice(0, 30);

  const stories = await Promise.all(
    top.map(id => fetchJSON(`${HN_API}/item/${id}.json`))
  );
  const valid = stories.filter(s => s && s.title);

  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0].replace(/:/g, '');
  const label = endpoint.replace('stories', '');

  const lines = [
    `# HN ${label} — ${date}`,
    `> Source: ${url}`,
    `> Generated: ${now.toUTCString()}`,
    '',
    '---',
    '',
  ];

  for (const [i, story] of valid.entries()) {
    const link = story.url || `https://news.ycombinator.com/item?id=${story.id}`;
    const hn = `https://news.ycombinator.com/item?id=${story.id}`;
    lines.push(`### ${i + 1}. [${story.title}](${link})`);
    lines.push(`- **Score:** ${story.score ?? 0} | **By:** ${story.by} | **Comments:** [${story.descendants ?? 0}](${hn})`);
    lines.push('');
  }

  mkdirSync('reports', { recursive: true });
  const filename = `reports/manual-${label}-${date}-${time}.md`;
  writeFileSync(filename, lines.join('\n'));
  console.log(`✓ Written: ${filename}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
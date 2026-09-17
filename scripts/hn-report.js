import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';

const HN_API = 'https://hacker-news.firebaseio.com/v0';
const STATE_FILE = '.hn-state';

async function fetchJSON(url) {
  const res = await fetch(url);
  return res.json();
}

async function setOutput(key, value) {
  // GitHub Actions output
  const out = process.env.GITHUB_OUTPUT;
  if (out) {
    const { appendFileSync } = await import('fs');
    appendFileSync(out, `${key}=${value}\n`);
  }
}

async function main() {
  // 1. Load last known max item ID
  const lastMaxItem = existsSync(STATE_FILE)
    ? parseInt(readFileSync(STATE_FILE, 'utf8').trim(), 10)
    : 0;

  // 2. Check current max item
  const currentMaxItem = await fetchJSON(`${HN_API}/maxitem.json`);

  if (currentMaxItem <= lastMaxItem) {
    console.log(`No new posts. Max item still ${currentMaxItem}`);
    writeOutput('new_posts', 'false');
    return;
  }

  const newCount = currentMaxItem - lastMaxItem;
  console.log(`${newCount} new items since last check (${lastMaxItem} → ${currentMaxItem})`);

  // 3. Fetch new story IDs from /newstories — filter to only IDs > lastMaxItem
  const newStoryIds = await fetchJSON(`${HN_API}/newstories.json`);
  const freshIds = newStoryIds.filter(id => id > lastMaxItem).slice(0, 30);

  if (freshIds.length === 0) {
    console.log('New items were comments/edits, not stories. Skipping.');
    writeOutput('new_posts', 'false');
    return;
  }

  // 4. Fetch story details
  const stories = await Promise.all(
    freshIds.map(id => fetchJSON(`${HN_API}/item/${id}.json`))
  );
  const validStories = stories.filter(s => s && s.type === 'story');

  if (validStories.length === 0) {
    writeOutput('new_posts', 'false');
    return;
  }

  // 5. Write report
  const now = new Date();
  const date = now.toISOString().split('T')[0];
  const time = now.toTimeString().split(' ')[0];

  const lines = [
    `# HN New Posts — ${date} ${time} UTC`,
    `> ${validStories.length} new stories | Max item: ${currentMaxItem}`,
    '',
    '---',
    '',
  ];

  for (const [i, story] of validStories.entries()) {
    const url = story.url || `https://news.ycombinator.com/item?id=${story.id}`;
    const comments = `https://news.ycombinator.com/item?id=${story.id}`;
    lines.push(`### ${i + 1}. [${story.title}](${url})`);
    lines.push(`- **Score:** ${story.score ?? 0} | **By:** ${story.by} | **Comments:** [${story.descendants ?? 0}](${comments})`);
    lines.push('');
  }

  mkdirSync('reports', { recursive: true });
  const filename = `reports/hn-${date}-${time.replace(/:/g, '')}.md`;
  writeFileSync(filename, lines.join('\n'));
  console.log(`Report written: ${filename}`);

  // 6. Update state
  writeFileSync(STATE_FILE, String(currentMaxItem));

  // 7. Signal to workflow
  writeOutput('new_posts', 'true');
  writeOutput('new_count', String(validStories.length));
}

function writeOutput(key, value) {
  const out = process.env.GITHUB_OUTPUT;
  if (out) {
    const { appendFileSync } = require('fs');
    appendFileSync(out, `${key}=${value}\n`);
  }
  console.log(`OUTPUT: ${key}=${value}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
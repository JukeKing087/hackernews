import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';

const HN_API = 'https://hacker-news.firebaseio.com/v0';
const STATE_FILE = '.hn-state';

async function fetchJSON(url) {
  const res = await fetch(url);
  return res.json();
}

async function fetchArticlePreview(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: AbortSignal.timeout(8000),
    });
    const html = await res.text();
    return html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 1000);
  } catch {
    return '_Could not fetch article content._';
  }
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function writeOutput(key, value) {
  const out = process.env.GITHUB_OUTPUT;
  if (out) {
    import('fs').then(({ appendFileSync }) =>
      appendFileSync(out, `${key}=${value}\n`)
    );
  }
}

async function main() {
  const lastMaxItem = existsSync(STATE_FILE)
    ? parseInt(readFileSync(STATE_FILE, 'utf8').trim(), 10)
    : 0;

  const currentMaxItem = await fetchJSON(`${HN_API}/maxitem.json`);

  if (currentMaxItem <= lastMaxItem) {
    console.log(`No new posts. Max item: ${currentMaxItem}`);
    writeOutput('new_posts', 'false');
    return;
  }

  const newStoryIds = await fetchJSON(`${HN_API}/newstories.json`);
  const freshIds = newStoryIds.filter(id => id > lastMaxItem).slice(0, 10);

  const stories = await Promise.all(
    freshIds.map(id => fetchJSON(`${HN_API}/item/${id}.json`))
  );
  const validStories = stories.filter(s => s && s.type === 'story' && s.title);

  if (validStories.length === 0) {
    writeOutput('new_posts', 'false');
    return;
  }

  mkdirSync('reports', { recursive: true });

  for (const story of validStories) {
    const articleUrl = story.url || `https://news.ycombinator.com/item?id=${story.id}`;
    const hnUrl = `https://news.ycombinator.com/item?id=${story.id}`;
    const preview = story.url ? await fetchArticlePreview(story.url) : '_No external URL._';

    const content = `# ${story.title}

| Field | Value |
|---|---|
| **Score** | ${story.score ?? 0} |
| **Author** | [${story.by}](https://news.ycombinator.com/user?id=${story.by}) |
| **Comments** | [${story.descendants ?? 0}](${hnUrl}) |
| **Posted** | ${new Date(story.time * 1000).toUTCString()} |

## Link
${articleUrl}

## Article Preview
${preview}

---
_Auto-generated · ${new Date().toUTCString()}_
`;

    const filename = `reports/${slugify(story.title)}.md`;
    writeFileSync(filename, content);
    console.log(`✓ Written: ${filename}`);
  }

  writeFileSync(STATE_FILE, String(currentMaxItem));
  writeOutput('new_posts', 'true');
  writeOutput('new_count', String(validStories.length));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
import { defineCollection, defineConfig, s } from 'velite';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkEmoji from 'remark-emoji';

const getCommits = async (repo: string) => {
  let resp = await fetch(`https://api.github.com/repos/${repo}/commits?page=1&per_page=1000`, { // 1000 is a good enough limit for now
    method: 'GET',
    headers: {
      "Authorization": `Token ${process.env.GITHUB_ACCESS_TOKEN}`,
      "accept": "application/vnd.github+json"
    }
  });

  return await resp.json();
}

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/*.yml',
  schema: s
    .object({
      name: s.string(),
      tagline: s.string(),
      repo: s.string(),
      category: s.string(),
      tech: s.array(s.string())
    })
    .transform(async data => {
      const commits = await getCommits(data.repo);

      const latestCommitDate = commits[0].commit.committer.date;
      const initialCommit = commits.pop().commit.committer.date;

      return {
        ...data,
        url: `https://github.com/${data.repo}`,
        initialCommit,
        latestCommitDate,
      }
    })
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('posts'),
      description: s.excerpt(),
      category: s.enum(["guide", "programming"]),
      date: s.isodate(),
      cover: s.image().optional(),
      metadata: s.metadata(),
      toc: s.toc(),
      content: s.mdx({gfm: true}),
      draft: s.boolean().default(false)
    })
    .transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
});

export default defineConfig({
  collections: {
    posts,
    projects
  },
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, {
      theme: {
        "tokyo-night": "tokyo-night",
        "tokyo-night-light": "github-light",
        "gruvbox": "gruvbox-dark-hard",
        "catppuccin": "catppuccin-mocha",
        "github-dark": "github-dark",
        "hacker": "monokai",
      },
    }]],
    remarkPlugins: [remarkToc, remarkEmoji as any]
  }
})

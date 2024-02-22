import { defineCollection, defineConfig, s } from 'velite';

import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc from 'remark-toc';
import remarkEmoji from 'remark-emoji';
import remarkSlug from 'remark-slug';

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

      return {
        ...data,
        url: `https://github.com/${data.repo}`,
        initialCommit: commits.pop().commit.committer.date
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
      cover: s.image({ allowNonRelativePath: true  }).optional(),
      metadata: s.metadata(),
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
    rehypePlugins: [rehypePrettyCode],
    remarkPlugins: [remarkToc, remarkEmoji as any, remarkSlug]
  }
})

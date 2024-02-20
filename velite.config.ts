import { defineConfig, s } from 'velite';

import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('posts'),
          description: s.excerpt(),
          category: s.enum(["guide", "programming"]),
          date: s.isodate(),
          //cover: s.image().optional(),
          metadata: s.metadata(),
          content: s.mdx(),
          draft: s.boolean().default(false)
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
  },
  mdx: {
    rehypePlugins: [rehypePrettyCode]
  }
})

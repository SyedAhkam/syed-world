import { defineConfig, s } from 'velite';

import rehypePrettyCode from 'rehype-pretty-code';
import remarkToc from 'remark-toc';
import remarkEmoji from 'remark-emoji';
import remarkSlug from 'remark-slug';

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
          cover: s.image({ allowNonRelativePath: true  }).optional(),
          metadata: s.metadata(),
          content: s.mdx({gfm: true}),
          draft: s.boolean().default(false)
        })
        .transform(data => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
  },
  mdx: {
    rehypePlugins: [rehypePrettyCode],
    remarkPlugins: [remarkToc, remarkEmoji as any, remarkSlug]
  }
})

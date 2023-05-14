import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    slug: { type: "string", required: true },
    category: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {}, // TODO: reading time
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Post] });

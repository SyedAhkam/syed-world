import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
    date: { type: "date", required: true },
    cover: { type: "string", required: false },
  },
  computedFields: {
    readingTime: {
      type: "string",
      resolve: (doc) => readingTime(doc.body.raw).text,
    },
  },
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Post] });

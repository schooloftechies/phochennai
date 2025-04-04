import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Path to the "treatment" directory
const postsDirectory = path.join(process.cwd(), "treatment");

// Get all post IDs for dynamic routing
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""), // Remove the file extension
    },
  }));
}

// Get sorted posts data
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get post data by ID
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse the markdown file metadata and content
  const matterResult = matter(fileContents);

  // Convert markdown content to HTML (allow raw HTML)
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Allow raw HTML in markdown
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml, // Rendered HTML
    ...matterResult.data, // Metadata
  };
}

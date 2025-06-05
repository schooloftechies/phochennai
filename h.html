import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

const postsDirectory = path.join(process.cwd(), 'posts');

// Configure DOMPurify for server-side use
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const sanitizeOptions = {
  ALLOWED_TAGS: [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'strong', 'em', 'blockquote', 'code', 'pre',
    'ul', 'ol', 'li', 'a', 'img', 'div', 'span',
    'br', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td'
  ],
  ALLOWED_ATTR: [
    'href', 'src', 'alt', 'title', 'class', 'id',
    'width', 'height', 'frameborder', 'allowfullscreen'
  ],
  ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|ftp|tel):|#|[./]|data:image)/i
};


// Get sorted posts data from Markdown files
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const [day, month, year] = matterResult.data.date.split('-');
    const formattedDate = new Date(`${year}-${month}-${day}`);

    return {
      id,
      ...matterResult.data,
      date: formattedDate,
    };
  });

  return allPostsData.sort((a, b) => b.date - a.date);
}

// Get all post IDs
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Get post data by ID with HTML support
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { 
      allowDangerousHtml: true,
      sanitize: false
    })
    .process(matterResult.content);

  const rawHtml = processedContent.toString();
  const contentHtml = DOMPurify.sanitize(rawHtml, sanitizeOptions);

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// Optional: Get raw post content without processing (for editing purposes)
export function getRawPostContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
}
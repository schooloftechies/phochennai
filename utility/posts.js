import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Get sorted posts data from Markdown files
export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // Convert "DD-MM-YYYY" to a proper Date object
        const [day, month, year] = matterResult.data.date.split('-');
        const formattedDate = new Date(`${year}-${month}-${day}`); // Converts to "YYYY-MM-DD"

        return {
            id,
            ...matterResult.data,
            date: formattedDate, // Store it as a Date object
        };
    });

    // Sort posts by date in descending order (latest first)
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

// Get post data by ID
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

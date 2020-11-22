import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names
    const fileNames = fs.readdirSync(postDirectory);
    return fileNames.map(getPostDataFile).sort(postSorter);
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostDataById(id) {
    const filePath = path.join(postDirectory, `${id}.md`);
    const { content, data: { title, date } } = matter(fs.readFileSync(filePath, 'utf-8'));
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(content)
    return {
        id,
        title,
        date,
        contentHtml: processedContent.toString()
    };
}

function getId(filename) {
    return filename.replace(/\.md$/, '');
}

const getParams = (id) => {
    return {
        params: {
            id
        }
    };
}

function getPostDataFile(filename) {
    const id = filename.replace('/\.md$/', '');
    const fullpath = path.join(postDirectory, filename);
    const content = fs.readFileSync(fullpath, 'utf-8');
    const { data: { title, date } } = matter(content);

    return {
        id,
        title,
        date
    }
}

function postSorter(a, b) {
    if (a.date < b.date) {
        return 1
    } else {
        return -1
    }
}
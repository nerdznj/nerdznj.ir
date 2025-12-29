import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const notesDirectory = path.join(process.cwd(), 'content/notes');

export interface Note {
    slug: string;
    title: string;
    date: string;
    contentHtml: string;
    description?: string;
    tags?: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export function getAllNotes(): Omit<Note, 'contentHtml'>[] {
    if (!fs.existsSync(notesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(notesDirectory);
    const allNotesData = fileNames.
        filter(fileName => fileName.endsWith('.md')).
        map((fileName) => {
            // Remove ".md" from file name to get id
            const slug = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(notesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Handle date
            let date = matterResult.data.date;
            if (date instanceof Date) {
                date = date.toISOString();
            }

            // Combine the data with the id
            return {
                slug,
                title: matterResult.data.title || 'Untitled',
                date: date || new Date().toISOString(),
                description: matterResult.data.description || '',
                tags: matterResult.data.tags || [],
                ...matterResult.data,
            };
        });

    // Sort notes by date
    return allNotesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getNoteData(slug: string): Promise<Note> {
    const fullPath = path.join(notesDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error('Note not found');
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Handle date
    let date = matterResult.data.date;
    if (date instanceof Date) {
        date = date.toISOString();
    }

    // Combine the data with the id and contentHtml
    return {
        slug,
        contentHtml,
        title: matterResult.data.title || 'Untitled',
        date: date || new Date().toISOString(),
        ...matterResult.data,
    };
}

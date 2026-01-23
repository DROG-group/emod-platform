import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join('/home/fani/saufex-website/src/content/blog');
const OUTPUT_DIR = path.join(__dirname, '../lib');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'modules-data.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read all markdown files
const files = fs.readdirSync(SOURCE_DIR);
const moduleFiles = files.filter(file =>
  (file.startsWith('Module-') || file.includes('-Module-') || file.startsWith('FIMI-')) &&
  file.endsWith('.md') &&
  file !== 'EMOD-Template.md'
);

console.log(`Found ${moduleFiles.length} module files`);

const modules = [];

moduleFiles.forEach((file, index) => {
  const filePath = path.join(SOURCE_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  try {
    const { data, content } = matter(fileContent);

    const module = {
      id: data.slug || file.replace('.md', ''),
      title: data.title || file.replace('.md', '').replace(/-/g, ' '),
      slug: data.slug || file.replace('.md', ''),
      author: data.author || 'SAUFEX Consortium',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      learningPath: data.learningPath || 'General',
      moduleNumber: data.moduleNumber || index + 1,
      estimatedTime: data.estimatedTime || '8 minutes',
      content: content
    };

    modules.push(module);
    console.log(`Parsed: ${module.title}`);
  } catch (error) {
    console.error(`Error parsing ${file}:`, error.message);
  }
});

// Sort modules by module number
modules.sort((a, b) => {
  if (a.learningPath === b.learningPath) {
    return (a.moduleNumber || 0) - (b.moduleNumber || 0);
  }
  return a.learningPath.localeCompare(b.learningPath);
});

// Write to JSON file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(modules, null, 2));

console.log(`\nSuccessfully parsed ${modules.length} modules`);
console.log(`Output written to: ${OUTPUT_FILE}`);

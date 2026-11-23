import { readdirSync, readFileSync, statSync } from 'fs';
import { join, extname } from 'path';

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: node count_q.mjs <directory>');
  process.exit(1);
}

function countQuestions(path) {
  let count = 0;
  const files = readdirSync(path);
  for (const file of files) {
    const fullPath = join(path, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      count += countQuestions(fullPath);
    } else if (extname(file) === '.ts') {
      const content = readFileSync(fullPath, 'utf8');
      const matches = content.match(/id:\s*["'].*-q\d+["']/g);
      if (matches) count += matches.length;
    }
  }
  return count;
}

console.log(countQuestions(dir));

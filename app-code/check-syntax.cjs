const fs = require('fs');
const src = fs.readFileSync('scripts/data-us-g3-science.cjs', 'utf8');
let depth = 0;
let inString = false;
let stringChar = '';
let escape = false;
let lineNum = 1;
const lines = src.split('\n');
// Track depth at end of each line
const depths = [];
for (let i = 0; i < src.length; i++) {
  const ch = src[i];
  if (ch === '\n') { depths.push({line: lineNum, depth}); lineNum++; continue; }
  if (escape) { escape = false; continue; }
  if (ch === '\\') { escape = true; continue; }
  if (inString) {
    if (ch === stringChar) inString = false;
    continue;
  }
  if (ch === '"' || ch === "'" || ch === '`') { inString = true; stringChar = ch; continue; }
  if (ch === '(' || ch === '[' || ch === '{') depth++;
  if (ch === ')' || ch === ']' || ch === '}') depth--;
}
depths.push({line: lineNum, depth});
// Print depth changes
let prev = 0;
for (const d of depths) {
  if (d.depth !== prev) {
    console.log('Line', d.line, ': depth', prev, '->', d.depth, '|', (lines[d.line-1]||'').trim().slice(0,60));
    prev = d.depth;
  }
}
console.log('Final:', depth);

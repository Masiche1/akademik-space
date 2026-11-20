const fs=require('fs'),path=require('path');
const root=process.argv[2];
let bad=0,files=0;
function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);
if(fs.statSync(p).isDirectory()){walk(p);continue;}
if(!f.startsWith('lesson')||!f.endsWith('.ts'))continue;
files++;
const s=fs.readFileSync(p,'utf8');
const blocks=s.split(/\{\s*\n\s*id: "ciealpsy/u);
for(const q of blocks.slice(1)){
  const tm=q.match(/totalMarks: (\d+)/);if(!tm)continue;
  const steps=[...q.matchAll(/"marks": (\d+)/g)].reduce((a,m)=>a+ +m[1],0);
  if(steps!==+tm[1]){bad++;console.log(p,'total',tm[1],'steps',steps);}
}}}
walk(root);console.log('files',files,'bad',bad);

const fs = require("fs");
const targets = [
  ["src/content/courses/edx-ias-biology/unit-7/lesson-7-2.ts", ["ediasbio-u7-photo-q6", "ediasbio-u7-leaf-q6", "ediasbio-u7-lim-q6", "ediasbio-u7-prac-q6"]],
  ["src/content/courses/edx-ias-biology/unit-8/lesson-8-1.ts", ["ediasbio-u8-path-q6", "ediasbio-u8-trans-q6", "ediasbio-u8-barrier-q6", "ediasbio-u8-spec-q6", "ediasbio-u8-vac-q6", "ediasbio-u8-ctrl-q6"]],
];
for (const [fp, ids] of targets) {
  let t = fs.readFileSync(fp, "utf8");
  for (const id of ids) {
    const i = t.indexOf(`id: "${id}"`);
    if (i === -1) { console.log("MISS", id); continue; }
    // slice until next question id or end of questions array (next 'id: "' at question level ~ within 400 lines)
    const rest = t.slice(i);
    const nextQ = rest.slice(10).search(/\n\s*\{\s*\n\s*id: "/);
    const block = nextQ === -1 ? rest : rest.slice(0, nextQ + 10);
    // parts marks sum
    const partsBlock = /"parts"\s*:\s*\[([\s\S]*?)\n\s*\],/.exec(block);
    let partSum = null;
    if (partsBlock) {
      partSum = [...partsBlock[1].matchAll(/"marks":\s*(\d+)/g)].reduce((s, m) => s + +m[1], 0);
    }
    // steps marks sum (within markscheme steps array)
    const msBlock = /"steps"\s*:\s*\[([\s\S]*?)\n\s*\],/.exec(block);
    const stepSum = msBlock ? [...msBlock[1].matchAll(/"marks":\s*(\d+)/g)].reduce((s, m) => s + +m[1], 0) : null;
    const tm = /totalMarks":\s*(\d+)|totalMarks:\s*(\d+)/.exec(block);
    const cur = tm ? +(tm[1] ?? tm[2]) : null;
    console.log(id, "totalMarks=" + cur, "parts=" + partSum, "steps=" + stepSum);
    if (partSum != null && partSum === stepSum && partSum !== cur) {
      // replace totalMarks within this question only: find its position relative to i
      const tmIdx = t.indexOf("totalMarks", i);
      const tmStr = t.slice(tmIdx).match(/totalMarks"?:\s*\d+/)[0];
      t = t.slice(0, tmIdx) + tmStr.replace(/\d+/, String(partSum)) + t.slice(tmIdx + tmStr.length);
      console.log("  -> set totalMarks to", partSum);
    } else {
      console.log("  !! mismatch, manual check needed");
    }
  }
  fs.writeFileSync(fp, t);
}

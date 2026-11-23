const fs = require("fs");
const files = [
  "src/content/courses/edx-ias-biology/unit-7/lesson-7-2.ts",
  "src/content/courses/edx-ias-biology/unit-7/lesson-7-3.ts",
  "src/content/courses/edx-ias-biology/unit-8/lesson-8-1.ts",
  "src/content/courses/edx-ias-biology/unit-8/lesson-8-2.ts",
  "src/content/courses/edx-ias-biology/unit-8/lesson-8-3.ts",
];
const newTotal = {
  "ediasbio-u7-photo-q6": 11, "ediasbio-u7-leaf-q6": 11,
  "ediasbio-u7-lim-q6": 11, "ediasbio-u7-prac-q6": 12,
  "ediasbio-u8-path-q6": 12, "ediasbio-u8-trans-q6": 11,
  "ediasbio-u8-barrier-q6": 11, "ediasbio-u8-spec-q6": 11,
  "ediasbio-u8-vac-q6": 11, "ediasbio-u8-ctrl-q6": 11,
};
for (const fp of files) {
  let t = fs.readFileSync(fp, "utf8");
  for (const [id, val] of Object.entries(newTotal)) {
    const i = t.indexOf(`"${id}"`);
    const j = t.indexOf(`id: "${id}"`);
    const idx = i !== -1 ? i : j;
    if (idx === -1) continue;
    const tmIdx = t.indexOf("totalMarks", idx);
    const m = /totalMarks"?:\s*\d+/.exec(t.slice(tmIdx));
    const old = m[0];
    t = t.slice(0, tmIdx) + old.replace(/\d+/, String(val)) + t.slice(tmIdx + old.length);
    console.log(fp.split("/").pop(), id, old, "->", val);
  }
  fs.writeFileSync(fp, t);
}

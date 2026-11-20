const fs = require("fs");
const path = require("path");

const BASE = "src/content/courses";

// Additional substrand codes to append to lessons whose content already covers them
const EXTRA = {
  "cie-primary-maths": {
    "unit-1/lesson-1-7.ts": ["1Pt"],
    "unit-1/lesson-1-12.ts": ["1Pt"],
    "unit-1/lesson-1-4.ts": ["3Pt"],
    "unit-1/lesson-1-11.ts": ["3Pt"],
    "unit-2/lesson-2-1.ts": ["4Pt"],
    "unit-2/lesson-2-2.ts": ["5Nc"],
    "unit-2/lesson-2-3.ts": ["6Ma", "6Pt"],
    "unit-2/lesson-2-5.ts": ["5Ma", "5Ml"],
    "unit-2/lesson-2-8.ts": ["4Pt"],
    "unit-2/lesson-2-9.ts": ["5Pt"],
    "unit-2/lesson-2-13.ts": ["6Nn", "6Pt"],
    "unit-2/lesson-2-14.ts": ["2Pt"],
    "unit-2/lesson-2-18.ts": ["6Nc", "6Pt"],
  },
  "cie-primary-english": {
    "unit-1/lesson-1-3.ts": ["3Ws"],
    "unit-1/lesson-1-4.ts": ["3SLr"],
    "unit-1/lesson-1-6.ts": ["1SLr"],
    "unit-1/lesson-1-8.ts": ["2Rs"],
    "unit-1/lesson-1-9.ts": ["3Wv"],
    "unit-2/lesson-2-2.ts": ["5Wv"],
    "unit-2/lesson-2-5.ts": ["5Ws"],
    "unit-2/lesson-2-6.ts": ["4SLm", "4SLr"],
    "unit-2/lesson-2-9.ts": ["6SLr"],
    "unit-2/lesson-2-14.ts": ["4SLp"],
    "unit-2/lesson-2-16.ts": ["6SLg"],
  },
  "cie-primary-science": {
    "unit-1/lesson-1-7.ts": ["1Cp", "1ESp"],
    "unit-2/lesson-2-6.ts": ["4TWSm"],
    "unit-2/lesson-2-11.ts": ["6TWSm"],
    "unit-2/lesson-2-15.ts": ["6TWSc", "6TWSa"],
    "unit-2/lesson-2-18.ts": ["4TWSm"],
    "unit-2/lesson-2-19.ts": ["5TWSm"],
    "unit-2/lesson-2-20.ts": ["6TWSa"],
  },
};

let updated = 0;
for (const [course, lessons] of Object.entries(EXTRA)) {
  for (const [rel, codes] of Object.entries(lessons)) {
    const file = path.join(BASE, course, rel);
    let src = fs.readFileSync(file, "utf8");
    const tagRe = /(framework substrands: )([^\"]+)/;
    const m = src.match(tagRe);
    if (!m) { console.log("NO TAG", file); continue; }
    const existing = m[2].split(",").map(s => s.trim());
    const merged = [...new Set([...existing, ...codes])];
    src = src.replace(tagRe, `$1${merged.join(", ")}`);
    fs.writeFileSync(file, src);
    updated++;
  }
}
console.log("updated", updated);

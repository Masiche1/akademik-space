const fs = require("fs");
const path = require("path");

const BASE = "src/content/courses";

const MAP = {
  "cie-primary-maths": {
    "unit-1/lesson-1-1.ts": ["1Nn", "1Nc"],
    "unit-1/lesson-1-2.ts": ["2Nn", "2Nc"],
    "unit-1/lesson-1-3.ts": ["3Nn", "3Nc"],
    "unit-1/lesson-1-4.ts": ["3Gs", "3Gp", "3Dh"],
    "unit-1/lesson-1-5.ts": ["2Nc", "2Ml"],
    "unit-1/lesson-1-6.ts": ["1Nc", "1Gs"],
    "unit-1/lesson-1-7.ts": ["1Mm", "1Ml", "1Mt", "1Dh"],
    "unit-1/lesson-1-8.ts": ["2Gs", "2Gp", "2Dh"],
    "unit-1/lesson-1-9.ts": ["3Mm", "3Ml", "3Mt"],
    "unit-1/lesson-1-10.ts": ["2Nc", "2Nn"],
    "unit-1/lesson-1-11.ts": ["3Nc", "3Dh"],
    "unit-1/lesson-1-12.ts": ["1Nc", "1Nn"],
    "unit-2/lesson-2-1.ts": ["4Nc", "4Nn"],
    "unit-2/lesson-2-2.ts": ["5Nn"],
    "unit-2/lesson-2-3.ts": ["6Nn", "6Gs"],
    "unit-2/lesson-2-4.ts": ["6Gp", "6Dh"],
    "unit-2/lesson-2-5.ts": ["5Pt", "5Ps", "5Dh"],
    "unit-2/lesson-2-6.ts": ["4Ma", "4Mt", "4Dh"],
    "unit-2/lesson-2-7.ts": ["5Db", "5Nn"],
    "unit-2/lesson-2-8.ts": ["4Nn", "4Gs"],
    "unit-2/lesson-2-9.ts": ["5Gs", "5Ma"],
    "unit-2/lesson-2-10.ts": ["6Ml", "6Pt"],
    "unit-2/lesson-2-11.ts": ["4Nc", "4Nn", "4Pt"],
    "unit-2/lesson-2-12.ts": ["5Nn", "5Dh", "5Ps"],
    "unit-2/lesson-2-13.ts": ["6Gs", "6Dh"],
    "unit-2/lesson-2-14.ts": ["2Nn", "2Gp"],
    "unit-2/lesson-2-15.ts": ["3Nc", "3Nn", "3Mt"],
    "unit-2/lesson-2-16.ts": ["4Nn", "4Gs"],
    "unit-2/lesson-2-17.ts": ["5Gp", "5Nn"],
    "unit-2/lesson-2-18.ts": ["6Nn", "6Gp"],
  },
  "cie-primary-english": {
    "unit-1/lesson-1-1.ts": ["1Rw"],
    "unit-1/lesson-1-2.ts": ["2Rw", "2Ri", "2Wg"],
    "unit-1/lesson-1-3.ts": ["3Ri", "3Wc"],
    "unit-1/lesson-1-4.ts": ["3SLm", "3SLs", "3SLg", "3Wc"],
    "unit-1/lesson-1-5.ts": ["2Rw", "2Ww", "2Wg"],
    "unit-1/lesson-1-6.ts": ["1SLm", "1SLs", "1SLg", "1SLp", "1Wc"],
    "unit-1/lesson-1-7.ts": ["1Rw"],
    "unit-1/lesson-1-8.ts": ["2Ri", "2Ra"],
    "unit-1/lesson-1-9.ts": ["3Rg", "3Wg"],
    "unit-1/lesson-1-10.ts": ["2Ww", "2Wg"],
    "unit-1/lesson-1-11.ts": ["3Rg", "3Wg"],
    "unit-1/lesson-1-12.ts": ["1Rs", "1Ra", "1SLp", "1Rv"],
    "unit-2/lesson-2-1.ts": ["4Ri"],
    "unit-2/lesson-2-2.ts": ["5Wc", "5Ws"],
    "unit-2/lesson-2-3.ts": ["6Wc", "6Ws"],
    "unit-2/lesson-2-4.ts": ["6Rg", "6Wg", "6Ww"],
    "unit-2/lesson-2-5.ts": ["5Wc"],
    "unit-2/lesson-2-6.ts": ["4Ri", "4Ws", "4SLg"],
    "unit-2/lesson-2-7.ts": ["4Rs", "4Ri", "4Ra"],
    "unit-2/lesson-2-8.ts": ["5Wc", "5Wp"],
    "unit-2/lesson-2-9.ts": ["6Wc", "6SLg"],
    "unit-2/lesson-2-10.ts": ["4Rg", "4Wg"],
    "unit-2/lesson-2-11.ts": ["5Wc"],
    "unit-2/lesson-2-12.ts": ["6Ww", "6Wp"],
    "unit-2/lesson-2-13.ts": ["2Rv", "2Wg", "2Wc"],
    "unit-2/lesson-2-14.ts": ["4Rv", "4Ri", "4Rs"],
    "unit-2/lesson-2-15.ts": ["5Rg", "5Rv"],
    "unit-2/lesson-2-16.ts": ["6Rg", "6Wg", "6Wc"],
  },
  "cie-primary-science": {
    "unit-1/lesson-1-1.ts": ["1Bs", "1Bp"],
    "unit-1/lesson-1-2.ts": ["2Bs"],
    "unit-1/lesson-1-3.ts": ["3Bp", "3Be"],
    "unit-1/lesson-1-4.ts": ["3TWSm", "3TWSp", "3TWSc", "3TWSa"],
    "unit-1/lesson-1-5.ts": ["1Bp"],
    "unit-1/lesson-1-6.ts": ["2Be", "2Bp"],
    "unit-1/lesson-1-7.ts": ["1Cm", "1TWSc"],
    "unit-1/lesson-1-8.ts": ["2Bs"],
    "unit-1/lesson-1-9.ts": ["3Cm", "3Cp", "3Cc"],
    "unit-1/lesson-1-10.ts": ["2TWSp", "2TWSc", "2TWSa", "2TWSm"],
    "unit-1/lesson-1-11.ts": ["3Bp"],
    "unit-1/lesson-1-12.ts": ["1Pf", "1Pe", "1Ps"],
    "unit-2/lesson-2-1.ts": ["4Pf"],
    "unit-2/lesson-2-2.ts": ["5Cm", "5Cp"],
    "unit-2/lesson-2-3.ts": ["6ESp", "6ESc", "6ESs"],
    "unit-2/lesson-2-4.ts": ["6Ps", "6Pe"],
    "unit-2/lesson-2-5.ts": ["5Cc", "5Cm"],
    "unit-2/lesson-2-6.ts": ["4Cm", "4Cp", "4TWSp", "4TWSc", "4TWSa"],
    "unit-2/lesson-2-7.ts": ["4Ps"],
    "unit-2/lesson-2-8.ts": ["5Pf", "5Pe"],
    "unit-2/lesson-2-9.ts": ["5Bp"],
    "unit-2/lesson-2-10.ts": ["6ESp", "6ESc"],
    "unit-2/lesson-2-11.ts": ["6Be", "6Pf"],
    "unit-2/lesson-2-12.ts": ["4Bs", "4Be"],
    "unit-2/lesson-2-13.ts": ["5Ps"],
    "unit-2/lesson-2-14.ts": ["6Pf"],
    "unit-2/lesson-2-15.ts": ["6Cc", "6Cp"],
    "unit-2/lesson-2-16.ts": ["2Bs", "2Be", "2Pe"],
    "unit-2/lesson-2-17.ts": ["3Bs", "3Be", "3Pe"],
    "unit-2/lesson-2-18.ts": ["4Bs", "4Pf", "4ESs"],
    "unit-2/lesson-2-19.ts": ["5Bs", "5Be", "5ESc"],
    "unit-2/lesson-2-20.ts": ["6Bs", "6Bp", "6Cc", "6ESp"],
  },
};

const courseName = {
  "cie-primary-maths": "Mathematics",
  "cie-primary-english": "English",
  "cie-primary-science": "Science",
};
const courseCode = {
  "cie-primary-maths": "0096",
  "cie-primary-english": "0058",
  "cie-primary-science": "0097",
};

let updated = 0, skipped = 0;
for (const [course, lessons] of Object.entries(MAP)) {
  for (const [rel, codes] of Object.entries(lessons)) {
    const file = path.join(BASE, course, rel);
    let src = fs.readFileSync(file, "utf8");
    const tag = `Cambridge Primary ${courseName[course]} ${courseCode[course]} framework substrands: ${codes.join(", ")}`;
    if (src.includes("framework substrands:")) { skipped++; continue; }
    const re = /standards:\s*\[([^\]]*)\]/;
    const m = src.match(re);
    if (!m) { console.log("NO MATCH", file); continue; }
    const inner = m[1].trim();
    const addition = inner ? `,\n  ${JSON.stringify(tag)}` : `\n  ${JSON.stringify(tag)}`;
    const replacement = `standards: [${inner}${addition}]`;
    src = src.replace(re, replacement);
    fs.writeFileSync(file, src);
    updated++;
  }
}
console.log(`updated=${updated} skipped=${skipped}`);

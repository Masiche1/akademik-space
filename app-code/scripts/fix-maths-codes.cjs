const fs = require("fs");
const path = require("path");

const BASE = "src/content/courses/cie-primary-maths";

// Correct Cambridge Primary Mathematics 0096 substrand codes:
// Nc=counting/sequences, Ni=integers (+-x/, bonds, times tables), Nm=money,
// Np=place value/ordering/rounding, Nf=fractions/decimals/percentages/ratio,
// Gt=time, Gg=geometry+measurements(shapes,angles,area,volume,length,mass,capacity),
// Gp=position/transformation, Ss=statistics, Sp=probability
const MAP = {
  "unit-1/lesson-1-1.ts": ["1Nc", "1Ni"],
  "unit-1/lesson-1-2.ts": ["2Np", "2Ni"],
  "unit-1/lesson-1-3.ts": ["3Ni", "3Nf"],
  "unit-1/lesson-1-4.ts": ["3Gg", "3Gp", "3Ss"],
  "unit-1/lesson-1-5.ts": ["2Ni", "2Gg"],
  "unit-1/lesson-1-6.ts": ["1Ni", "1Gg"],
  "unit-1/lesson-1-7.ts": ["1Nm", "1Gg", "1Gt", "1Ss"],
  "unit-1/lesson-1-8.ts": ["2Gg", "2Gp", "2Ss"],
  "unit-1/lesson-1-9.ts": ["3Nm", "3Gt", "3Gg"],
  "unit-1/lesson-1-10.ts": ["2Ni", "2Nf"],
  "unit-1/lesson-1-11.ts": ["3Ni", "3Ss"],
  "unit-1/lesson-1-12.ts": ["1Nc", "1Ni", "1Nf"],
  "unit-1/lesson-1-13.ts": ["2Nm", "2Gt"],
  "unit-2/lesson-2-1.ts": ["4Ni", "4Nf"],
  "unit-2/lesson-2-2.ts": ["5Nf", "5Ss"],
  "unit-2/lesson-2-3.ts": ["6Nf", "6Gg"],
  "unit-2/lesson-2-4.ts": ["6Gp", "6Ss"],
  "unit-2/lesson-2-5.ts": ["5Gg", "5Ss"],
  "unit-2/lesson-2-6.ts": ["4Gg", "4Gt", "4Ss"],
  "unit-2/lesson-2-7.ts": ["5Sp", "5Nf"],
  "unit-2/lesson-2-8.ts": ["4Nf", "4Gg"],
  "unit-2/lesson-2-9.ts": ["5Gg", "5Nf"],
  "unit-2/lesson-2-10.ts": ["6Gg", "6Ni"],
  "unit-2/lesson-2-11.ts": ["4Nc", "4Ni"],
  "unit-2/lesson-2-12.ts": ["5Nf", "5Ss"],
  "unit-2/lesson-2-13.ts": ["6Gg", "6Ss", "6Ni"],
  "unit-2/lesson-2-14.ts": ["2Np", "2Nf", "2Gg"],
  "unit-2/lesson-2-15.ts": ["3Ni", "3Np", "3Gt"],
  "unit-2/lesson-2-16.ts": ["4Ni", "4Nf", "4Gg"],
  "unit-2/lesson-2-17.ts": ["5Gp", "5Np", "5Nf"],
  "unit-2/lesson-2-18.ts": ["6Ni", "6Nf", "6Gp"],
};

let updated = 0;
for (const [rel, codes] of Object.entries(MAP)) {
  const file = path.join(BASE, rel);
  let src = fs.readFileSync(file, "utf8");
  const tag = `Cambridge Primary Mathematics 0096 framework substrands: ${codes.join(", ")}`;
  const re = /framework substrands: [^"]+/;
  if (!re.test(src)) { console.log("NO TAG", rel); continue; }
  src = src.replace(re, `framework substrands: ${codes.join(", ")}`);
  fs.writeFileSync(file, src);
  updated++;
}
console.log("updated", updated);

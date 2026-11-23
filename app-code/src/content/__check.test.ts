import { describe, expect, it } from "vitest";
import { validateEnglishUnit, validateUnit } from "./validate.ts";
import { unit3 as aps3 } from "./courses/ap-statistics/unit-3/index.ts";
import { unit10 as edxch10 } from "./courses/edx-chemistry-y11/unit-10/index.ts";
import { unit9 as edxe9 } from "./courses/edx-englang-y10/unit-9/index.ts";
import { unit4 as edxe84 } from "./courses/edx-englang-y8/unit-4/index.ts";
import { unit5 as edxe85 } from "./courses/edx-englang-y8/unit-5/index.ts";
import { unit7 as iasbio7 } from "./courses/edx-ias-biology/unit-7/index.ts";
import { unit8 as iasbio8 } from "./courses/edx-ias-biology/unit-8/index.ts";
import { unit8 as edxm810 } from "./courses/edx-maths-y10/unit-8/index.ts";
import { unit4 as edxpm54 } from "./courses/edx-primary-maths-y5/unit-4/index.ts";
import { unit4 as edxpm64 } from "./courses/edx-primary-maths-y6/unit-4/index.ts";
import { unit5 as um57 } from "./courses/us-math-g7/unit-5/index.ts";
import { unit7 as um77 } from "./courses/us-math-g7/unit-7/index.ts";
import { unit8 as um78 } from "./courses/us-math-g7/unit-8/index.ts";
import { unit6 as um86 } from "./courses/us-math-g8/unit-6/index.ts";
import { unit7 as um87 } from "./courses/us-math-g8/unit-7/index.ts";
import { unit8 as um88 } from "./courses/us-math-g8/unit-8/index.ts";
import { unit1 as ape1 } from "./courses/ap-english-language/unit-1/index.ts";
import { unit2 as ape2 } from "./courses/ap-english-language/unit-2/index.ts";
import { unit3 as ape3 } from "./courses/ap-english-language/unit-3/index.ts";
import { unit4 as el114 } from "./courses/edx-englang-y11/unit-4/index.ts";
import { unit5 as el115 } from "./courses/edx-englang-y11/unit-5/index.ts";
import { unit6 as el116 } from "./courses/edx-englang-y11/unit-6/index.ts";
import { unit8 as el118 } from "./courses/edx-englang-y11/unit-8/index.ts";

const units: [string, any][] = [
  ["ap-stat-u3", aps3],
  ["edx-chem-y11-u10", edxch10],
  ["edx-englang-y10-u9", edxe9],
  ["edx-englang-y8-u4", edxe84],
  ["edx-englang-y8-u5", edxe85],
  ["edx-ias-bio-u7", iasbio7],
  ["edx-ias-bio-u8", iasbio8],
  ["edx-maths-y10-u8", edxm810],
  ["edx-pm-y5-u4", edxpm54],
  ["edx-pm-y6-u4", edxpm64],
  ["us-math-g7-u5", um57],
  ["us-math-g7-u7", um77],
  ["us-math-g7-u8", um78],
  ["us-math-g8-u6", um86],
  ["us-math-g8-u7", um87],
  ["us-math-g8-u8", um88],
  ["ap-engl-u1", ape1],
  ["ap-engl-u2", ape2],
  ["ap-engl-u3", ape3],
  ["edx-englang-y11-u4", el114],
  ["edx-englang-y11-u5", el115],
  ["edx-englang-y11-u6", el116],
  ["edx-englang-y11-u8", el118],
];

const english = new Set([
  "edx-englang-y10-u9",
  "edx-englang-y8-u4",
  "edx-englang-y8-u5",
  "ap-engl-u1",
  "ap-engl-u2",
  "ap-engl-u3",
  "edx-englang-y11-u4",
  "edx-englang-y11-u5",
  "edx-englang-y11-u6",
  "edx-englang-y11-u8",
]);

describe("check", () => {
  it.each(units)("%s", (name, u) => {
    const errs = validateUnit(u);
    if (english.has(name)) errs.push(...validateEnglishUnit(u));
    expect(errs).toEqual([]);
  });
});

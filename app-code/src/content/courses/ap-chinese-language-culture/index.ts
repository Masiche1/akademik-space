import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apChineseLanguageCulture: Course = {
  id: "ap-chinese-language-culture",
  title: "AP Chinese Language and Culture",
  shortTitle: "AP Chinese",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Chinese language proficiency — communication skills and cultural contexts for college credit.",
  units: [unit1],
  ap: { exam: "chinese-language-culture" },
};

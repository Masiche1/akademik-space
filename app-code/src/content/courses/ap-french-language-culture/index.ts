import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apFrenchLanguageCulture: Course = {
  id: "ap-french-language-culture",
  title: "AP French Language and Culture",
  shortTitle: "AP French",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "French language proficiency — communication skills and cultural contexts for college credit.",
  units: [unit1],
  ap: { exam: "french-language-culture" },
};

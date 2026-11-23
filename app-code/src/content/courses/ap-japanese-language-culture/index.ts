import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apJapaneseLanguageCulture: Course = {
  id: "ap-japanese-language-culture",
  title: "AP Japanese Language and Culture",
  shortTitle: "AP Japanese",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Japanese language proficiency — communication skills and cultural contexts.",
  units: [unit1],
  ap: { exam: "japanese-language-culture" },
};

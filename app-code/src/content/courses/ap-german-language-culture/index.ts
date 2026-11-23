import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apGermanLanguageCulture: Course = {
  id: "ap-german-language-culture",
  title: "AP German Language and Culture",
  shortTitle: "AP German",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "German language proficiency — communication skills and cultural contexts.",
  units: [unit1],
  ap: { exam: "german-language-culture" },
};

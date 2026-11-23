import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apLatinLanguageCulture: Course = {
  id: "ap-latin-language-culture",
  title: "AP Latin Language and Culture",
  shortTitle: "AP Latin",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Latin language proficiency — reading, translation, and cultural literacy for college credit.",
  units: [unit1],
  ap: { exam: "latin-language-culture" },
};

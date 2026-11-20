import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangLitY4: Course = {
  id: "myp-lang-lit-y4",
  title: "MYP 4 Language and Literature",
  shortTitle: "Lang & Lit MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme — Language and Literature",
  description:
    "Compare and evaluate texts across genres, analyse register, modality and persuasive techniques in depth, and create texts adapted for different audiences and purposes.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-lit", year: 4 },
};

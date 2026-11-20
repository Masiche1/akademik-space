import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangLitY5: Course = {
  id: "myp-lang-lit-y5",
  title: "MYP 5 Language and Literature",
  shortTitle: "Lang & Lit MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme — Language and Literature",
  description: "Advanced MYP Language and Literature: analyse complex literary and non-literary texts, examine how language constructs meaning, power and identity, and produce sophisticated texts across genres.",
  myp: { subject: "language-lit", year: 5 },
  units: [unit1, unit2, unit3],
};

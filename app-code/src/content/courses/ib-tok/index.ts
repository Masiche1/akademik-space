import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibTok: Course = {
  id: "ib-tok",
  title: "Theory of Knowledge",
  shortTitle: "TOK",
  grade: "DP Core",
  framework: "IB Diploma Programme",
  description:
    "An exploration of the nature of knowledge: the ways of knowing (sense perception, reason, language, emotion, faith, intuition and memory), the areas of knowledge (mathematics, natural and human sciences, history, ethics, the arts and religion), and the TOK assessment components — the essay, the exhibition and critical reflection.",
  units: [unit1, unit2, unit3],
  ib: { subject: "tok", level: "sl", year: 1 },
};

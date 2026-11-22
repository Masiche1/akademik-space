import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const cieIgcseHistory: Course = {
  id: "cie-igcse-history",
  title: "Cambridge IGCSE History 0470",
  shortTitle: "IGCSE History",
  grade: "igcse",
  framework: "Cambridge International Examinations",
  description:
    "Cambridge IGCSE History covering the Cold War, Vietnam War and decolonisation, social movements, and historical skills.",
  cie: {
    qualification: "igcse",
    subject: "history-0470",
  },
  units: [unit1, unit2, unit3, unit4, unit5],
};

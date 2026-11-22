import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieIgcseGeography: Course = {
  id: "cie-igcse-geography",
  title: "Cambridge IGCSE Geography 0460",
  shortTitle: "IGCSE Geography",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Comprehensive coverage of Cambridge IGCSE Geography 0460: physical geography, human geography and geographical skills.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: {
    qualification: "igcse",
    subject: "geography-0460",
  },
};

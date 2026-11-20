import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxIalChemistry: Course = {
  id: "edx-ial-chemistry",
  title: "Edexcel IAL Chemistry",
  shortTitle: "IAL Chemistry",
  grade: "International Advanced Level",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The full Edexcel International A Level in Chemistry: WCH11–WCH12 core chemistry, WCH13 Practical Skills in Chemistry I, WCH14 Rates, Equilibria and Further Organic Chemistry, WCH15 Transition Metals and Organic Nitrogen Chemistry, and WCH16 Practical Skills in Chemistry II.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "ial", subject: "chemistry", year: 2 },
};

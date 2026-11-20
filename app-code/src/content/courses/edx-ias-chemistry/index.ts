import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxIasChemistry: Course = {
  id: "edx-ias-chemistry",
  title: "Edexcel IAS Chemistry",
  shortTitle: "IAS Chemistry",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Chemistry: WCH11 Structure, Bonding and Introduction to Organic Chemistry; WCH12 Energetics, Group Chemistry, Halogenoalkanes and Alcohols; and WCH13 Practical Skills in Chemistry I.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "ias", subject: "chemistry", year: 1 },
};

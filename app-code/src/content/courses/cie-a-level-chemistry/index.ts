import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieALevelChemistry: Course = {
  id: "cie-a-level-chemistry",
  title: "Cambridge A Level Chemistry 9701",
  shortTitle: "A Level Chemistry",
  grade: "Cambridge A Level",
  framework: "Cambridge International Examinations — Chemistry 9701",
  description:
    "Cambridge A Level Chemistry 9701 covering stoichiometry, atomic structure and bonding, periodicity and group chemistry, energetics and electrochemistry, equilibria and acids/bases, and organic chemistry.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "a-level", subject: "chemistry-9701" },
};

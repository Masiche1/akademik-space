import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const cieIgcseMathsCore: Course = {
  id: "cie-igcse-maths-core",
  title: "Cambridge IGCSE Mathematics 0580 (Core)",
  shortTitle: "IGCSE Maths Core",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — Mathematics 0580, Core tier",
  description:
    "Cambridge IGCSE Mathematics 0580, Core tier: number, algebra, graphs, coordinate geometry, geometry, mensuration, trigonometry, probability and statistics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  cie: { qualification: "igcse", subject: "mathematics-0580", tier: "core" },
};

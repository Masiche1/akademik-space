import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const cieIgcseComputerScience: Course = {
  id: "cie-igcse-computer-science",
  title: "Cambridge IGCSE Computer Science 0478",
  shortTitle: "IGCSE CS",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — Computer Science 0478",
  description:
    "Cambridge IGCSE Computer Science 0478 covering data representation, communication and internet technologies, hardware, software, automatic systems, algorithm design, programming and databases.",
  units: [unit1, unit2, unit3, unit4],
  cie: { qualification: "igcse", subject: "computer-science-0478" },
};

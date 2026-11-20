import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const cieOLevelComputerScience: Course = {
  id: "cie-o-level-computer-science",
  title: "Cambridge O Level Computer Science 2210",
  shortTitle: "O Level Computer Science",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Computer Science 2210",
  description:
    "Cambridge O Level Computer Science 2210 covering data representation, data transmission, hardware, software, the internet and its uses, automated and emerging technologies, algorithm design, programming, databases and Boolean logic.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  cie: { qualification: "o-level", subject: "computer-science-2210" },
};

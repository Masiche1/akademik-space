import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const cieALevelComputerScience: Course = {
  id: "cie-a-level-computer-science",
  title: "Cambridge A Level Computer Science 9618",
  shortTitle: "A Level Computer Science",
  grade: "A Level",
  framework: "Cambridge International",
  description:
    "Comprehensive coverage of Cambridge A Level Computer Science 9618: data representation, hardware, software, algorithms, programming, internet technologies, databases and ethics.",
  units: [unit1, unit2, unit3, unit4, unit5],
  cie: {
    qualification: "a-level",
    subject: "Computer Science",
  },
};

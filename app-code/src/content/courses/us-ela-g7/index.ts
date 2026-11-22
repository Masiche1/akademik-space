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
import { unit11 } from "./unit-11/index.ts";
import { unit12 } from "./unit-12/index.ts";
import { unit13 } from "./unit-13/index.ts";
import { unit14 } from "./unit-14/index.ts";
import { unit15 } from "./unit-15/index.ts";

export const usElaG7: Course = {
  id: "us-ela-g7",
  title: "Grade 7 English Language Arts",
  shortTitle: "ELA G7",
  grade: "Grade 7",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "Citing evidence, theme and point of view in literature; central ideas, structure and argument in informational texts; and argument, informative and narrative writing with conventions.",
  units: [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
    unit7,
    unit8,
    unit9,
    unit10,
    unit11,
    unit12,
    unit13,
    unit14,
    unit15,
  ],
  us: { subject: "ela", grade: 7 },
};

import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxIasBiology: Course = {
  id: "edx-ias-biology",
  title: "Edexcel IAS Biology",
  shortTitle: "IAS Biology",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Biology: WBI11 Molecules, Diet, Transport and Health; WBI12 Cells, Development, Biodiversity and Conservation; and WBI13 Practical Skills in Biology I.",
  units: [ unit1, unit2, unit3, unit4, unit5, unit6,],
  edexcel: { stage: "ias", subject: "biology", year: 1 },
};

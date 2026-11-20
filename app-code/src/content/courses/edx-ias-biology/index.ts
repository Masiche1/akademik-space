import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxIasBiology: Course = {
  id: "edx-ias-biology",
  title: "Edexcel IAS Biology",
  shortTitle: "IAS Biology",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Biology: WBI11 Molecules, Diet, Transport and Health; WBI12 Cells, Development, Biodiversity and Conservation; and WBI13 Practical Skills in Biology I.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "ias", subject: "biology", year: 1 },
};

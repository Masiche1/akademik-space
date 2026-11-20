import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypBiologyY4: Course = {
  id: "myp-biology-y4",
  title: "MYP 4 Biology",
  shortTitle: "Biology MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Cell biology and classification, membrane transport, enzymes, cell division and levels of organization; organ systems, homeostasis and reproduction; photosynthesis, respiration, ecosystems, nutrient cycles and conservation.",
  units: [unit1, unit2, unit3],
  myp: { subject: "biology", year: 4 },
};

import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypBiologyY5: Course = {
  id: "myp-biology-y5",
  title: "MYP 5 Biology",
  shortTitle: "Biology MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Advanced cell biology and genetics: DNA structure and replication, protein synthesis, mitosis and meiosis, monohybrid inheritance and genetic engineering; physiology and homeostasis including the nervous and endocrine systems, kidneys, gas exchange, transport and reproduction; ecology and evolution including population dynamics, nutrient cycles, natural selection, biodiversity and conservation.",
  units: [unit1, unit2, unit3],
  myp: { subject: "biology", year: 5 },
};

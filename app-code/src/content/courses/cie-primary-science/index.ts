import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";

export const ciePrimaryScience: Course = {
  id: "cie-primary-science",
  title: "Cambridge Primary Science 0097",
  shortTitle: "Primary Science",
  grade: "Cambridge Primary Stages 1-6",
  framework: "Cambridge International Examinations — Science 0097",
  description:
    "Cambridge Primary Science 0097 covering living things, humans, materials, forces, energy, Earth and space across Stages 1-6.",
  units: [unit1, unit2],
  cie: { qualification: "primary", subject: "science-0097" },
};

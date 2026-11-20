import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const cieOLevelGeography: Course = {
  id: "cie-o-level-geography",
  title: "Cambridge O Level Geography 2217",
  shortTitle: "O Level Geography",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Geography 2217",
  description:
    "Cambridge O Level Geography 2217 covering rivers, coasts, weather and climate, population and settlement, development, changing economies, resource provision, tectonic hazards, ecosystems, climate change and geographical investigations.",
  units: [unit1, unit2, unit3, unit4],
  cie: { qualification: "o-level", subject: "geography-2217" },
};

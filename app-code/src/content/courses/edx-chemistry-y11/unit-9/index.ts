import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "ech11-u9",
  code: "9",
  title: "Titration and Volumetric Analysis",
  description:
    "Study titration technique and indicators, mole and concentration calculations, acid-base titration calculations, back titrations of insoluble samples and industrial uses of volumetric analysis.",
  lessons: [lesson91, lesson92, lesson93],
};

import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "edialpm-u7",
  code: "7",
  title: "Further Pure Mathematics 3",
  description:
    "WFM03 FP3: matrices and eigenvalues, vectors in three dimensions including the scalar triple product, and complex loci on Argand diagrams.",
  lessons: [lesson71, lesson72, lesson73],
};

import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edialfm-u3",
  code: "3",
  title: "Further Pure Mathematics 3",
  description:
    "WFM03 FP3: matrices and eigenvalues, vectors in three dimensions including the scalar triple product, and complex loci on Argand diagrams.",
  lessons: [lesson31, lesson32, lesson33],
};

import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edm11-u2",
  code: "2",
  title: "Vectors and Transformation Geometry",
  description: "Carry out and describe transformations, use column vectors and vector geometry in proofs, and apply similarity, area and volume scale factors, loci and constructions.",
  lessons: [lesson21, lesson22, lesson23],
};

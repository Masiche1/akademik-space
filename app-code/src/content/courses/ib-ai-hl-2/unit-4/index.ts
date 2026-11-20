import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "aihl-u4",
  code: "4",
  title: "Graph Theory",
  description: "Use degrees, adjacency matrices and transition matrices to analyse graphs; find minimum spanning trees and optimal inspection routes; and bound the travelling salesman problem.",
  lessons: [lesson41, lesson42, lesson43],
};

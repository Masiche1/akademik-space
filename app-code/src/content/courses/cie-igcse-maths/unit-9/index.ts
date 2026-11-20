import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "ciem-u9",
  code: "9",
  title: "Vectors",
  description:
    "Column vector notation, vector algebra, position vectors, parallel vectors, vector proofs and motion problems — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson91, lesson92, lesson93],
};

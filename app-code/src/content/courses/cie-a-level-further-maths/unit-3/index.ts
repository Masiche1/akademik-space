import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { lesson34 } from "./lesson-3-4.ts";

export const unit3: Unit = {
  id: "cialfm-u3",
  code: "3",
  title: "Polar Coordinates and Complex Numbers",
  description: "Argand diagrams, modulus-argument form, loci, De Moivre's theorem, complex exponentials and polar curves.",
  lessons: [lesson31, lesson32, lesson33, lesson34],
};

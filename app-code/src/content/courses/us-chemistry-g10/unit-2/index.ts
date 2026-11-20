import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "chem10-u2",
  code: "2",
  title: "Bonding and Properties of Matter",
  description: "Explain how atoms bond, predict the shapes and polarity of molecules, relate intermolecular forces to physical properties, interpret phase diagrams and heating curves, and solve gas law problems using kelvin temperatures.",
  lessons: [lesson21, lesson22, lesson23],
};

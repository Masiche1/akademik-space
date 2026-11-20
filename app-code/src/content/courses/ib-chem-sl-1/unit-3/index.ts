import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "chemsl-u3",
  code: "3",
  title: "Bonding and Structure",
  description: "Describe ionic, covalent and metallic bonding, giant covalent structures and intermolecular forces, and relate structure to physical properties, with an introduction to energetics, kinetics and equilibrium.",
  lessons: [lesson31, lesson32, lesson33],
};

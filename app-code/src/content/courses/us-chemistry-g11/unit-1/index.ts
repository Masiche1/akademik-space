import type { Unit } from "../../../types.ts";
import { lesson111 } from "./lesson-1-1.ts";
import { lesson112 } from "./lesson-1-2.ts";
import { lesson113 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "chem11-u1",
  code: "1",
  title: "Bonding and Molecular Structure",
  description: "Explore ionic, covalent and metallic bonding, draw Lewis structures, predict molecular shapes with VSEPR theory, and connect molecular polarity and intermolecular forces to physical properties.",
  lessons: [lesson111, lesson112, lesson113],
};

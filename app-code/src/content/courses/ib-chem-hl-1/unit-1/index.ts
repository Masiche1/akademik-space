import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "chemhl-u1",
  code: "1",
  title: "Atomic Structure and the Periodic Table — HL Extension",
  description:
    "Additional higher level detail of electrons in atoms, photoelectron spectroscopy, ionization energy and electron affinity trends, and the properties of d-block elements and their coloured complexes.",
  lessons: [lesson11, lesson12, lesson13],
};

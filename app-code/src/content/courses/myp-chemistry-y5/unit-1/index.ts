import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypc5-unit-1",
  number: 1,
  code: "1",
  title: "Atomic Structure and Bonding",
  description:
    "Electron configuration and shells, detailed periodic trends, ionic/covalent/metallic bonding and intermolecular forces with structure-property relationships.",
  lessons: [lesson11, lesson12, lesson13],
};

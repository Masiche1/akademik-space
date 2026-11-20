import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const pypArts: Course = {
  id: "pyp-arts",
  title: "PYP Arts",
  shortTitle: "PYP Arts",
  grade: "PYP",
  framework: "IB Primary Years Programme — Arts",
  description: "An inquiry into visual arts, music, drama, dance and media through creating, presenting, responding to and reflecting on artworks across ages 3-12.",
  units: [unit1, unit2, unit3],
  pyp: { subject: "arts" },
};

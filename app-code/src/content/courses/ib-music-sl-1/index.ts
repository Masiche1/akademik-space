import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibMusicSl1: Course = {
  id: "ib-music-sl-1",
  title: "Music SL: Year 1",
  shortTitle: "Music SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Music fundamentals and performance practice, contextual studies of Western traditions from Baroque to popular music, and composing and arranging skills for the DP music course.",
  units: [unit1, unit2, unit3],
  ib: {"subject":"music","level":"sl","year":1},
};

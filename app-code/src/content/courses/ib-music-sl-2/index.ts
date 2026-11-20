import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibMusicSl2: Course = {
  id: "ib-music-sl-2",
  title: "Music SL: Year 2",
  shortTitle: "Music SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Global music traditions beyond the Western canon, analytical listening and aural skills, and portfolio development with collaborative performance and reflective evaluation for the DP music course.",
  units: [unit4, unit5, unit6],
  ib: {"subject":"music","level":"sl","year":2},
};

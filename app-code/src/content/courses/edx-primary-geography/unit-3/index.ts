import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";
import { exam32 } from "./lesson-3-x2.ts";
import { exam33 } from "./lesson-3-x3.ts";
import { exam34 } from "./lesson-3-x4.ts";

export const unit3: Unit = {
  id: "edxpg-u3",
  code: "3",
  title: "The Wider World",
  description:
    "Y4-Y6: Continents and countries, oceans, latitude and longitude, weather and climate zones, physical features, biomes.",
  lessons: [lesson31, lesson32, lesson33, exam31, exam32, exam33, exam34],
};

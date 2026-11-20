import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edialchem-u6",
  code: "6",
  title: "Practical Skills in Chemistry II",
  description: "WCH16: advanced planning, measurement, data handling and evaluation for the Unit 4 and Unit 5 chemistry core practicals.",
  lessons: [lesson61, lesson62, lesson63],
};

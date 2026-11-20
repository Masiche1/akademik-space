import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "physhl-u6",
  code: "6",
  title: "Nuclear Physics — HL Extension",
  description:
    "Additional higher level detail of mass defect and nuclear binding energy, radioactive decay series and half-life applications, and nuclear fission and fusion.",
  lessons: [lesson61, lesson62, lesson63],
};

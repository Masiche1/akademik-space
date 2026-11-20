import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "psych-u6",
  code: "6",
  title: "Health, Stress and Forensic Psychology",
  description:
    "Stress models and coping; health behaviours and patient-practitioner interaction; forensic psychology including offender profiling, eyewitness testimony and criminal responsibility.",
  lessons: [lesson61, lesson62, lesson63],
};

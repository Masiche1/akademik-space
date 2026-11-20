import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "edxifm-u9",
  code: "9",
  title: "Statistics 3",
  description:
    "WST03 S3: chi-squared tests of goodness of fit and independence, correlation and regression inference, Poisson rate tests and t-tests for population means.",
  lessons: [lesson91, lesson92, lesson93],
};

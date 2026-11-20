import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "aisl-u4",
  code: "4",
  title: "Statistics",
  description: "Collect and describe data, analyse bivariate relationships with Pearson's and Spearman's coefficients, and test hypotheses with chi-squared and t-tests.",
  lessons: [lesson41, lesson42, lesson43],
};

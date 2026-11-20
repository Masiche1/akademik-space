import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "biohl-u5",
  code: "5",
  number: 5,
  title: "Ecology",
  description: "Model population growth with exponential and logistic equations, analyse limiting factors and community interactions including trophic structure, and quantify nutrient cycling and the processes of ecological succession.",
  lessons: [lesson51, lesson52, lesson53],
};

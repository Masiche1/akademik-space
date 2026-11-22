import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "ela11-u2",
  code: "2",
  title: "American Foundational and Rhetorical Texts",
  description:
    "Analyze founding documents and the reasoning behind them, study the style of great American speeches and the evolving meaning of key terms, and trace complex sequences of events and multiple sources.",
  lessons: [lesson21, lesson22, lesson23],
};

import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "chemhl-u6",
  code: "6",
  title: "Organic Chemistry — HL Extension",
  description:
    "Additional higher level detail of organic reaction types including nucleophilic substitution, addition and elimination mechanisms, multi-step synthetic routes, stereoisomerism including optical isomerism, and spectroscopic identification using IR, mass spectrometry and NMR.",
  lessons: [lesson61, lesson62, lesson63],
};

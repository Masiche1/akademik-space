import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "biosl-u6",
  code: "6",
  number: 6,
  title: "Genetics in Practice, Biotechnology and Conservation",
  description:
    "Reading pedigrees and non-Mendelian inheritance, genetic engineering and industrial biotechnology, and the impact of humans on ecosystems and efforts to conserve biodiversity.",
  lessons: [lesson61, lesson62, lesson63],
};

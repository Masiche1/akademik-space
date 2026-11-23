import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "ediasbio-u6",
  code: "6",
  title: "Inheritance, Ecology and Biotechnology",
  description:
    "WBI14/WBI16-style core: chromosomes, genes and Punnett inheritance, sex determination and mutations, ecosystems and populations, fermentation, genetic engineering and tissue culture.",
  lessons: [lesson61, lesson62, lesson63],
};

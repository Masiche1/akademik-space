import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ebi10-u10",
  code: "10",
  number: 10,
  title: "Biotechnology and Biological Resources",
  description:
    "Industrial fermentation and antibiotics; genetic engineering, cloning and tissue culture; and biogas, biofuels and biological pest control.",
  lessons: [lesson101, lesson102, lesson103],
};

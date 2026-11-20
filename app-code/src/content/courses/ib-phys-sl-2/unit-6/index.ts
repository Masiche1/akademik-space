import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "physsl-u6",
  code: "6",
  number: 6,
  title: "Nuclear and Quantum Physics",
  description:
    "The photoelectric effect and photons, atomic spectra and energy levels, radioactive decay and half-life, nuclear fission and fusion, and astrophysics including redshift and stellar evolution.",
  lessons: [lesson61, lesson62, lesson63],
};

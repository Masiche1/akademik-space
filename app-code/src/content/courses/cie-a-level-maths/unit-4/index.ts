import type { Unit } from "../../../types.ts";
import { lesson141 } from "./lesson-4-1.ts";
import { lesson142 } from "./lesson-4-2.ts";
import { lesson143 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "cial-m-unit-4",
  code: "4",
  title: "Integration",
  description:
    "Indefinite and definite integrals, areas between curves, substitution, partial fractions and volumes of revolution.",
  lessons: [lesson141, lesson142, lesson143],
};

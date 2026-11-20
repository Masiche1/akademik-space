import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "olep-unit-4",
  code: "4",
  title: "Social Psychology",
  description:
    "Conformity, obedience, prejudice, social learning, bystander effect and helping behaviour.",
  lessons: [lesson41, lesson42, lesson43],
};

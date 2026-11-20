import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "psych-u4",
  code: "4",
  title: "Social Psychology",
  description:
    "How individuals are influenced by groups: conformity, obedience and group behaviour; attribution and attitude change; prejudice and crowd behaviour.",
  lessons: [lesson41, lesson42, lesson43],
};

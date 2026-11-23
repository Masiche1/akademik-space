import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ebz10-u4",
  code: "4",
  number: 4,
  title: "Human Resources Management",
  description:
    "Recruitment and selection, training, motivation, performance management, employment contracts, pay, employee rights and industrial relations.",
  lessons: [lesson41, lesson42, lesson43],
};

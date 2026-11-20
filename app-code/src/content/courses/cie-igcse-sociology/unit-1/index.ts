import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cieisoc-u1",
  code: "1",
  title: "Sociology and Sociological Theory",
  description:
    "What sociology studies, social structure and agency, and the major theories — Cambridge IGCSE Sociology 0495.",
  lessons: [lesson11, lesson12, lesson13],
};

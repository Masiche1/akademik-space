import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "oleh-unit-4",
  code: "4",
  title: "The First World War",
  description:
    "Depth study of the First World War 1914–18 — causes, trench warfare, naval war, home fronts and the armistice.",
  lessons: [lesson41, lesson42, lesson43],
};

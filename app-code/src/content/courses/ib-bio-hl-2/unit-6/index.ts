import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "biohl-u6",
  code: "6",
  number: 6,
  title: "Advanced Physiology, Biotechnology and Sustainability",
  description:
    "Examine neuronal signalling and endocrine control in depth, quantify gas exchange transport and evaluate reproductive strategies and contraception, then assess immunological defences, biotechnology applications and conservation strategies.",
  lessons: [lesson61, lesson62, lesson63],
};

import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ebz10-u10",
  code: "10",
  number: 10,
  title: "Business Ethics and Sustainability",
  description:
    "Business ethics and CSR, environmental sustainability and green business, and the influence of pressure groups, law and government policy.",
  lessons: [lesson101, lesson102, lesson103],
};

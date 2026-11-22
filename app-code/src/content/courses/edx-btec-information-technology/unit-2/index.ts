import type { Unit } from "../../../types.ts";
import { lesson201 } from "./lesson-2-1.ts";
import { lesson202 } from "./lesson-2-2.ts";
import { lesson203 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edxbtecit-u2",
  code: "2",
  title: "Unit 2: Cyber Security and Incident Management",
  description:
    "Cyber threats and attacks, security controls (authentication, encryption, firewalls), legal and ethical issues, and incident management procedures.",
  lessons: [lesson201, lesson202, lesson203],
};

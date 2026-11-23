import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit10 } from "./unit-10/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const edxBtecHealthSocialCare: Course = {
  id: "edx-btec-health-social-care",
  title: "BTEC National Health and Social Care",
  shortTitle: "BTEC Health & Social Care",
  grade: "Level 3",
  framework: "Pearson BTEC Level 3 National (AAQ) Extended Certificate",
  description:
    "Applied health and social care study aligned to the Pearson BTEC National in Health and Social Care (Extended Certificate): human lifespan development, human biology and health, principles of care practice, and health, policy and wellbeing.",
  units: [ unit1, unit10, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "btec", subject: "health-social-care", year: 12 },
};

import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const cieLsEnglish: Course = {
  id: "cie-ls-english",
  title: "Cambridge Lower Secondary English 0861",
  shortTitle: "LS English",
  grade: "Cambridge Lower Secondary",
  framework: "Cambridge International Examinations — English 0861",
  description:
    "Cambridge Lower Secondary Checkpoint English 0861 covering reading comprehension, literary response, non-fiction and media analysis, narrative, expository, persuasive and transactional writing, grammar, punctuation, speaking, listening and exam skills.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  cie: { qualification: "lower-secondary", subject: "english-0861" },
};

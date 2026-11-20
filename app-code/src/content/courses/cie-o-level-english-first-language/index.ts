import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const cieOLEnglishFirstLanguage: Course = {
  id: "cie-o-level-english-first-language",
  title: "Cambridge O Level First Language English 1124",
  shortTitle: "O Level First Lang",
  grade: "Cambridge O Level",
  framework:
    "Cambridge International Examinations — First Language English 1124",
  description:
    "Cambridge O Level First Language English 1124 covering literature analysis across prose, poetry, drama and non-fiction, unseen text reading and comprehension, composition writing, grammar and language control, exam technique and practice.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  cie: { qualification: "o-level", subject: "english-first-language-1124" },
};

import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";

export const cieALevelEnglish: Course = {
  id: "cie-a-level-english",
  title: "Cambridge A Level English 9093",
  shortTitle: "A Level English",
  grade: "Cambridge A Level",
  framework: "Cambridge International Examinations — English 9093",
  description:
    "Cambridge A Level English 9093 covering critical reading of unseen texts, language analysis, composition, poetry, prose fiction, drama analysis, Literature in English (set texts, critical approaches) and exam technique.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
  cie: { qualification: "a-level", subject: "english-9093" },
};

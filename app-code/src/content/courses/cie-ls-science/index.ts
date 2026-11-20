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

export const cieLsScience: Course = {
  id: "cie-ls-science",
  title: "Cambridge Lower Secondary Science 0893",
  shortTitle: "LS Science",
  grade: "Cambridge Lower Secondary",
  framework: "Cambridge International Examinations — Science 0893",
  description:
    "Cambridge Lower Secondary Checkpoint Science 0893 covering working scientifically, biology (cells, plants, human body), chemistry (materials, energy, reactions), physics (forces, electricity, waves), Earth science and ecosystems.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  cie: { qualification: "lower-secondary", subject: "science-0893" },
};

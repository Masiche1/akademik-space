import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieLsComputing: Course = {
  id: "cie-ls-computing",
  title: "Cambridge Lower Secondary Computing 0860",
  shortTitle: "LS Computing",
  grade: "Cambridge Lower Secondary",
  framework: "Cambridge International Examinations — Computing 0860",
  description:
    "Cambridge Lower Secondary Computing 0860 covering computational thinking, programming, managing data, networks and digital communication, and computer systems across Stages 7-9.",
  units: [unit1, unit2, unit3],
  cie: { qualification: "lower-secondary", subject: "computing-0860" },
};

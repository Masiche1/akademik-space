import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";

export const ciePrimaryComputing: Course = {
  id: "cie-primary-computing",
  title: "Cambridge Primary Computing 0059",
  shortTitle: "Primary Computing",
  grade: "Cambridge Primary Stages 1-6",
  framework: "Cambridge International Examinations — Computing 0059",
  description:
    "Cambridge Primary Computing 0059 covering computational thinking, programming, managing data, networks and digital communication, and computer systems across Stages 1-6.",
  units: [unit1, unit2],
  cie: { qualification: "primary", subject: "computing-0059" },
};

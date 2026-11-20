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
import { unit11 } from "./unit-11/index.ts";

export const cieIgcsePhysics: Course = {
  id: "cie-igcse-physics",
  title: "Cambridge IGCSE Physics 0655",
  shortTitle: "IGCSE Physics 0655",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — Physics 0655",
  description:
    "Cambridge IGCSE Physics (0655): motion, forces, energy, waves, light, electricity and magnetism, radioactivity, thermal physics, states of matter and space.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11],
  cie: { qualification: "igcse", subject: "physics-0625" },
};

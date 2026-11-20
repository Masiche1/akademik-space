import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieOLevelICT: Course = {
  id: "cie-o-level-ict",
  title: "Cambridge O Level ICT 7014",
  shortTitle: "O Level ICT",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Information and Communication Technology 7014",
  description:
    "Cambridge O Level ICT 7014 covering types and components of ICT systems, input and output devices, storage, networks, network security, the internet and the World Wide Web, software applications, data handling and the effects of using ICT.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "o-level", subject: "ict-7014" },
};

import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibBioSl1: Course = {
  id: "ib-bio-sl-1",
  title: "Biology SL: Year 1",
  shortTitle: "Biology SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Cell biology, membrane transport, enzymes and mitosis; nucleic acids, DNA replication, protein synthesis, immunity, inheritance and biotechnology; and unity and diversity of life with ecology, evolution and human impacts — with Paper 1 and Paper 2 style questions.",
  units: [unit1, unit2, unit3],
  ib: { subject: "biology", level: "sl", year: 1 },
};

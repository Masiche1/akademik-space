import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibBioHl1: Course = {
  id: "ib-bio-hl-1",
  title: "Biology HL: Year 1",
  shortTitle: "Biology HL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension only: additional higher level content covering DNA replication mechanisms, transcription and translation detail, gene expression regulation, respiration and photosynthesis in depth, population genetics, and biotechnology including PCR and genetic modification.",
  units: [unit1, unit2, unit3],
  ib: { subject: "biology", level: "hl", year: 1, coreCourseIds: ["ib-bio-sl-1", "ib-bio-sl-2"] },
};

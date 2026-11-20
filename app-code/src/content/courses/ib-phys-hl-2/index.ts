import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibPhysHl2: Course = {
  id: "ib-phys-hl-2",
  title: "Physics HL: Year 2",
  shortTitle: "Physics HL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension only: additional higher level content covering electromagnetic induction and alternating current, transformers, the photoelectric effect and Einstein's equation, matter waves and de Broglie wavelength, atomic energy levels and emission spectra, nuclear binding energy, radioactive decay and fission and fusion — with Paper 1, Paper 2 and Paper 3 practice throughout.",
  units: [unit4, unit5, unit6],
  ib: {
    subject: "physics",
    level: "hl",
    year: 2,
    coreCourseIds: ["ib-phys-sl-1", "ib-phys-sl-2"],
  },
};

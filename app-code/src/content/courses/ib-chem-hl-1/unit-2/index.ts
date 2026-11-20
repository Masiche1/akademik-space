import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "chemhl-u2",
  code: "2",
  title: "Chemical Bonding — HL Extension",
  description:
    "Additional higher level detail of VSEPR molecular geometry, orbital hybridization and sigma/pi bonding, the bonding continuum between ionic, covalent and metallic models, and the structure and formation of polymers.",
  lessons: [lesson21, lesson22, lesson23],
};

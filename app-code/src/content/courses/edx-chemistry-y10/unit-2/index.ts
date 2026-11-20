import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "ech10-u2",
  code: "2",
  title: "Moles and Bonding",
  description: "Use the mole to calculate reacting masses, formulae, yields, concentrations, gas volumes and titrations, then explain ionic, covalent and metallic bonding and properties.",
  lessons: [lesson21, lesson22, lesson23],
};

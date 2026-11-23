import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ech11-u10",
  code: "10",
  title: "Reactivity Series and Corrosion",
  description:
    "Study the reactivity series and reactions of metals with oxygen, water and acids, displacement reactions, the uses of metals, rusting and methods of preventing corrosion.",
  lessons: [lesson101, lesson102, lesson103],
};

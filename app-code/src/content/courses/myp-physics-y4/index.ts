import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypPhysicsY4: Course = {
  id: "myp-physics-y4",
  title: "MYP 4 Physics",
  shortTitle: "Physics MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Kinematics, Newton's laws, momentum, pressure and moments; energy stores and transfers, thermal physics and waves; circuits, Ohm's law, electromagnetism and space physics.",
  units: [unit1, unit2, unit3],
  myp: { subject: "physics", year: 4 },
};

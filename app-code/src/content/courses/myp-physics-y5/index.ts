import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypPhysicsY5: Course = {
  id: "myp-physics-y5",
  title: "MYP 5 Physics",
  shortTitle: "Physics MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Advanced mechanics including momentum, energy with friction, circular motion and projectiles; gas laws, latent heat, wave phenomena and the Doppler effect; advanced circuits, electromagnetic induction, transformers, radioactivity and space physics.",
  units: [unit1, unit2, unit3],
  myp: { subject: "physics", year: 5 },
};

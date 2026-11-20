import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usScienceG7: Course = {
  id: "us-science-g7",
  title: "Grade 7 Science",
  shortTitle: "Science G7",
  grade: "Grade 7",
  framework: "Next Generation Science Standards (Middle School)",
  description:
    "Cells, body systems and ecosystems; atoms, density and chemical reactions; and Earth's rocks, plates, water, weather and resources.",
  units: [unit1, unit2, unit3],
  us: { subject: "science", grade: 7 },
};

import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "biohl-u3",
  code: "3",
  title: "Genetics and Biotechnology",
  description: "Additional higher level detail of chromosome behaviour in meiosis, non-Mendelian inheritance, population genetics and DNA technology including PCR, gel electrophoresis and genetic modification.",
  lessons: [lesson31, lesson32, lesson33],
};

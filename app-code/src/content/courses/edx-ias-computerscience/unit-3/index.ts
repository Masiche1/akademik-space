import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "eiascs-u3",
  code: "3",
  title: "Data Representation",
  description:
    "9CP01 Unit 3: Binary, hexadecimal, character encoding, Boolean logic, compression, encryption, file formats, validation.",
  lessons: [lesson31, lesson32, lesson33],
};

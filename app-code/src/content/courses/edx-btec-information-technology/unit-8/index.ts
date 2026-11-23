import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "edxbtecit-u8",
  code: "8",
  number: 8,
  title: "Unit 8: Computer Networks and Data Communication",
  description:
    "Network types, topologies and hardware, IP/MAC addressing, protocols and internet services, wireless networking, cloud computing and network security.",
  lessons: [lesson81, lesson82, lesson83],
};

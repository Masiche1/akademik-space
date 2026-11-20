import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olict-u2-lesson-2-2",
  code: "2-2",
  title: "Storage Devices",
  goal: "I CAN describe magnetic, optical and solid-state storage and their uses.",
  standards: ["7014 3.1"],
  vocabulary: [
    { term: "Primary storage", definition: "Fast storage inside the computer — RAM and ROM." },
    { term: "Secondary storage", definition: "Permanent storage outside the computer's memory." },
    { term: "Magnetic storage", definition: "Stores data as magnetic patterns — HDD." },
    { term: "Optical storage", definition: "Stores data as pits read by laser — CD, DVD, Blu-ray." },
    { term: "Solid-state storage", definition: "Flash memory with no moving parts — SSD, USB, memory cards." },
    { term: "HDD", definition: "Hard Disk Drive — magnetic platters for large-capacity storage." },
    { term: "SSD", definition: "Solid State Drive — flash-based, faster and more durable." },
  ],
  concepts: [
    {
      id: "olict-u2-storage-types",
      title: "Types of storage",
      skill: "Distinguish magnetic, optical and solid-state storage.",
      lesson: {
        sections: [
          { heading: "Magnetic", body: "**Hard disk drive (HDD)**: data stored as magnetic patterns on spinning platters. Large capacity, cheap per GB, but slow and fragile (moving parts)." },
          { heading: "Optical", body: "**CD, DVD, Blu-ray**: data stored as pits read by laser. Cheap distribution media, read-only mostly, being replaced by downloads." },
          { heading: "Solid-state", body: "**SSD, USB flash drive, memory cards**: data in flash memory cells — no moving parts. Fast, shock-resistant, more expensive per GB. Growing capacity." },
          { heading: "Primary vs secondary", body: "RAM/ROM are primary (inside computer, temporary or firmware). Everything else — HDD, SSD, USB, optical — is secondary (permanent, removable or internal)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why would a laptop manufacturer choose an SSD over an HDD?",
          solution: "SSD is faster, shock-resistant (no moving parts) and more durable — better for portable devices.",
        },
      },
      questions: [
        {
          id: "olict-u2-st-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An SSD stores data using…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Flash memory" }, { id: "b", text: "Magnetic platters" }, { id: "c", text: "Laser pits" }, { id: "d", text: "Paper tape" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "SSD", statement: "Flash-based storage." }], steps: [{ reasoning: "SSD = flash.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Flash memory" },
        },
        {
          id: "olict-u2-st-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish primary from secondary storage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Storage types", statement: "Inside vs outside memory." }], steps: [
            { reasoning: "Primary: RAM/ROM inside computer.", marks: 1, markCode: "M" },
            { reasoning: "Secondary: HDD/SSD/USB/optical.", marks: 1, markCode: "A" },
          ], finalAnswer: "Primary = RAM/ROM inside the computer; secondary = HDD, SSD, USB, optical media." },
        },
        {
          id: "olict-u2-st-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Compare magnetic and solid-state storage in two ways.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Storage comparison", statement: "Speed, durability, cost." }], steps: [
            { reasoning: "Magnetic: moving parts, slower.", marks: 1, markCode: "M" },
            { reasoning: "SSD: no moving parts, faster.", marks: 1, markCode: "M" },
            { reasoning: "HDD cheaper per GB; SSD durable.", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Magnetic (HDD): cheap, large, but slow/fragile. SSD: fast, durable, but pricier per GB." },
        },
        {
          id: "olict-u2-st-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Storage devices review.",
          parts: [
            { label: "a", prompt: "What is primary storage?", marks: 2 },
            { label: "b", prompt: "Name two optical media.", marks: 2 },
            { label: "c", prompt: "Why is an SSD more durable than an HDD?", marks: 2 },
            { label: "d", prompt: "Choose storage for backing up a school server's 2TB data and justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Storage", statement: "Primary/secondary, magnetic/optical/solid-state." },
          ], steps: [
            { part: "a", reasoning: "RAM/ROM inside computer.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "CD/DVD/Blu-ray.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "No moving parts.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Shock resistant.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "External HDD or large SSD.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Capacity justification.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reasonable choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) RAM/ROM (b) CD/DVD (c) no moving parts (d) large-capacity HDD/SSD" },
        },
      ],
    },
    {
      id: "olict-u2-choosing-media",
      title: "Choosing storage media",
      skill: "Select appropriate storage for given situations based on capacity, speed and portability.",
      lesson: {
        sections: [
          { heading: "Decision factors", body: "- **Capacity**: how much data?\n- **Speed**: how fast needed? (OS → SSD; archives → HDD)\n- **Portability**: USB/memory cards for moving data.\n- **Cost**: optical cheap for distribution; SSD pricey.\n- **Durability**: SSD for devices that move." },
          { heading: "Examples", body: "- School server → HDD/SSD (large, fast).\n- Student homework USB → flash drive (portable, cheap).\n- Software distribution → optical or download.\n- Phone photos → internal flash/SD card." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A photographer needs to carry 500GB of photos between studios. Best storage?",
          solution: "Portable SSD or high-capacity USB flash drive — large capacity and fast transfer.",
        },
      },
      questions: [
        {
          id: "olict-u2-cs-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For an operating system, the best storage is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "SSD" }, { id: "b", text: "CD" }, { id: "c", text: "DVD" }, { id: "d", text: "Paper tape" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Storage choice", statement: "Speed for OS." }], steps: [{ reasoning: "SSD fastest.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** SSD" },
        },
        {
          id: "olict-u2-cs-q2", difficulty: "core", totalMarks: 2,
          stem: "Suggest storage for distributing software to customers cheaply.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Storage choice", statement: "Cost for distribution." }], steps: [
            { reasoning: "Optical media (CD/DVD) or download.", marks: 1, markCode: "M" },
            { reasoning: "Justified: cheap per copy.", marks: 1, markCode: "A" },
          ], finalAnswer: "CD/DVD or online download — cheap distribution." },
        },
        {
          id: "olict-u2-cs-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a phone uses flash storage rather than a hard disk.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Mobile storage", statement: "Flash = durable+compact." }], steps: [
            { reasoning: "No moving parts — shock resistant.", marks: 1, markCode: "M" },
            { reasoning: "Compact and low power.", marks: 1, markCode: "M" },
            { reasoning: "Suitable for portable device.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Flash is durable (no moving parts), compact and low-power — ideal for phones." },
        },
        {
          id: "olict-u2-cs-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Storage selection review.",
          parts: [
            { label: "a", prompt: "Best storage for a laptop's main drive?", marks: 1 },
            { label: "b", prompt: "Best storage for carrying files between computers?", marks: 1 },
            { label: "c", prompt: "Best storage for archiving old documents long-term?", marks: 1 },
            { label: "d", prompt: "List three selection factors.", marks: 3 },
            { label: "e", prompt: "Why is optical storage declining?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Storage selection", statement: "Capacity, speed, portability, cost." },
          ], steps: [
            { part: "a", reasoning: "SSD.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "USB flash drive.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "HDD or optical (M-DISC).", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Capacity.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Speed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Portability/cost.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Limited capacity.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Downloads replaced discs.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) SSD (b) USB (c) HDD/optical (d) cap/speed/portability (e) downloads replaced" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u2-2-2-notes", title: "Storage devices — notes", summary: "Magnetic, optical, solid-state storage and selection factors.",
      sections: [
        { heading: "Types", body: "Magnetic (HDD), optical (CD/DVD/Blu-ray), solid-state (SSD/USB). Primary = RAM/ROM." },
        { heading: "Selection", body: "Choose by capacity, speed, portability, cost and durability." },
      ] },
  ],
};

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
            { id: "a", text: "Flash memory" },
            { id: "b", text: "Paper tape" },
            { id: "c", text: "Laser pits" },
            { id: "d", text: "Magnetic platters" },
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
        {
          id: "olict-u2-st-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A CD stores data as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printed text" },
            { id: "b", text: "Flash memory cells" },
            { id: "c", text: "Magnetic patterns on platters" },
            { id: "d", text: "Pits read by a laser" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Optical storage", statement: "Laser-read pits." }], steps: [{ reasoning: "Optical media use laser-read pits.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Pits read by a laser" },
        },
        {
          id: "olict-u2-st-q6", difficulty: "core", totalMarks: 1,
          stem: "Which storage device has no moving parts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CD drive" },
            { id: "b", text: "Tape drive" },
            { id: "c", text: "HDD" },
            { id: "d", text: "SSD" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "SSD", statement: "Solid-state, no moving parts." }], steps: [{ reasoning: "SSD uses flash — no moving parts.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** SSD" },
        },
        {
          id: "olict-u2-st-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A hard disk drive has a capacity of 2 TB. How many GB is that? (1 TB = 1024 GB)",
          response: { type: "numeric", parts: [{ label: "GB", answer: 2048, unit: "GB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Storage units", statement: "1 TB = 1024 GB." }], steps: [
            { reasoning: "2 × 1024.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 2048 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "2048 GB" },
        },
        {
          id: "olict-u2-st-q8", difficulty: "core", totalMarks: 2,
          stem: "Give one advantage and one disadvantage of a hard disk drive (HDD).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "HDD", statement: "Cheap, large, but fragile." }], steps: [
            { reasoning: "Advantage: large capacity / cheap per GB.", marks: 1, markCode: "M" },
            { reasoning: "Disadvantage: slow / fragile moving parts.", marks: 1, markCode: "A" },
          ], finalAnswer: "HDD: cheap and large capacity, but slower and fragile due to moving parts." },
        },
        {
          id: "olict-u2-st-q9", difficulty: "core", totalMarks: 2,
          stem: "A Blu-ray disc holds 25 GB. How many 5 GB files can it store?",
          response: { type: "numeric", parts: [{ label: "files", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capacity", statement: "Total ÷ file size." }], steps: [
            { reasoning: "25 ÷ 5.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 5 files.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 files" },
        },
        {
          id: "olict-u2-st-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why optical storage media such as CDs and DVDs are becoming less common.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Optical decline", statement: "Replaced by downloads/cloud." }], steps: [
            { reasoning: "Limited storage capacity.", marks: 1, markCode: "M" },
            { reasoning: "Downloads and cloud storage are more convenient.", marks: 1, markCode: "M" },
            { reasoning: "Devices without disc drives are common.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Small capacity and the rise of downloads/cloud storage have reduced demand for discs." },
        },
        {
          id: "olict-u2-st-q11", difficulty: "foundation", totalMarks: 1,
          stem: "RAM is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Optical storage" },
            { id: "b", text: "Primary storage" },
            { id: "c", text: "Removable media" },
            { id: "d", text: "Magnetic secondary storage" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Primary storage", statement: "RAM/ROM inside computer." }], steps: [{ reasoning: "RAM is primary storage.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Primary storage" },
        },
        {
          id: "olict-u2-st-q12", difficulty: "core", totalMarks: 1,
          stem: "Which of these is an example of optical storage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "RAM" },
            { id: "b", text: "Blu-ray disc" },
            { id: "c", text: "USB flash drive" },
            { id: "d", text: "SSD" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Optical storage", statement: "CD/DVD/Blu-ray." }], steps: [{ reasoning: "Blu-ray is optical media.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Blu-ray disc" },
        },
        {
          id: "olict-u2-st-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A school makes 3 backups, each 500 GB, stored on separate drives. How much storage space do the backups use in total?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 1500, unit: "GB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Backup capacity", statement: "Backups × size." }], steps: [
            { reasoning: "3 × 500.", marks: 1, markCode: "M" },
            { reasoning: "= 1500.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1500 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "1500 GB" },
        },
        {
          id: "olict-u2-st-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is secondary storage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ROM" },
            { id: "b", text: "RAM" },
            { id: "c", text: "Cache" },
            { id: "d", text: "USB flash drive" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Secondary storage", statement: "Outside main memory." }], steps: [{ reasoning: "USB is external permanent storage.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** USB flash drive" },
        },
        {
          id: "olict-u2-st-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A school must choose between an HDD and an SSD for its main server. Discuss the factors it should consider.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "HDD vs SSD", statement: "Capacity, cost, speed, durability." }], steps: [
            { reasoning: "HDD: cheaper, larger capacity.", marks: 1, markCode: "M" },
            { reasoning: "SSD: faster, more durable.", marks: 1, markCode: "M" },
            { reasoning: "Server needs speed and reliability.", marks: 1, markCode: "M" },
            { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "HDD offers more capacity per dollar; SSD gives faster access and durability — a server may use both." },
        },
        {
          id: "olict-u2-st-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Storage devices — extended review.",
          parts: [
            { label: "a", prompt: "What is primary storage?", marks: 1 },
            { label: "b", prompt: "Name one magnetic storage device.", marks: 1 },
            { label: "c", prompt: "Name two optical media.", marks: 1 },
            { label: "d", prompt: "Give three advantages of an SSD over an HDD.", marks: 3 },
            { label: "e", prompt: "Choose storage for a drone that must survive bumps and record video. Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Storage", statement: "Primary/secondary, magnetic/optical/solid-state." },
          ], steps: [
            { part: "a", reasoning: "RAM/ROM inside computer.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "HDD.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "CD/DVD/Blu-ray.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Faster.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "No moving parts/durable.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Lower power consumption.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "SD card / flash storage.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Shock resistant — no moving parts.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Compact, sufficient capacity/speed.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) RAM/ROM (b) HDD (c) CD/DVD (d) fast+durable+low power (e) SD card — shock resistant" },
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
            { id: "a", text: "DVD" },
            { id: "b", text: "CD" },
            { id: "c", text: "Paper tape" },
            { id: "d", text: "SSD" },
          ], correctChoiceId: "d" },
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
        {
          id: "olict-u2-cs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "To back up phone photos regularly, the most portable storage is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "USB flash drive" },
            { id: "b", text: "CD" },
            { id: "c", text: "Plotter" },
            { id: "d", text: "HDD" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Storage choice", statement: "Portability for transfers." }], steps: [{ reasoning: "USB is small and portable.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** USB flash drive" },
        },
        {
          id: "olict-u2-cs-q6", difficulty: "core", totalMarks: 1,
          stem: "For long-term archiving of a large collection of old documents, the best choice is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speaker" },
            { id: "b", text: "Large-capacity HDD" },
            { id: "c", text: "Memory card" },
            { id: "d", text: "Projector" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Storage choice", statement: "Capacity for archives." }], steps: [{ reasoning: "HDD gives large cheap capacity for archives.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Large-capacity HDD" },
        },
        {
          id: "olict-u2-cs-q7", difficulty: "foundation", totalMarks: 2,
          stem: "USB flash drives cost $12 each. How much do 25 drives cost in total?",
          response: { type: "numeric", parts: [{ label: "dollars", answer: 300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost calculation", statement: "Unit price × quantity." }], steps: [
            { reasoning: "12 × 25.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $300.", marks: 1, markCode: "A" },
          ], finalAnswer: "$300" },
        },
        {
          id: "olict-u2-cs-q8", difficulty: "core", totalMarks: 1,
          stem: "A student needs to carry homework files between home and school. The most suitable storage is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plotter" },
            { id: "b", text: "USB flash drive" },
            { id: "c", text: "Blu-ray disc" },
            { id: "d", text: "Server HDD" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Storage choice", statement: "Portable for small transfers." }], steps: [{ reasoning: "USB is portable and sufficient for homework.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** USB flash drive" },
        },
        {
          id: "olict-u2-cs-q9", difficulty: "core", totalMarks: 2,
          stem: "A video file is 4 GB and a USB drive has 16 GB free. How many copies of the file fit on the drive?",
          response: { type: "numeric", parts: [{ label: "copies", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capacity", statement: "Free space ÷ file size." }], steps: [
            { reasoning: "16 ÷ 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 4 copies.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 copies" },
        },
        {
          id: "olict-u2-cs-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why an operating system requires fast storage such as an SSD.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS storage", statement: "Speed critical for boot/programs." }], steps: [
            { reasoning: "OS loads constantly during use.", marks: 1, markCode: "M" },
            { reasoning: "Slow storage causes long boot times.", marks: 1, markCode: "M" },
            { reasoning: "SSD provides fast read/write speeds.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "The OS is accessed constantly, so fast SSD storage gives quick boot times and responsive programs." },
        },
        {
          id: "olict-u2-cs-q11", difficulty: "foundation", totalMarks: 1,
          stem: "The cheapest way to distribute software to thousands of customers is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plotter printouts" },
            { id: "b", text: "Online download" },
            { id: "c", text: "Paper manuals" },
            { id: "d", text: "3D printing discs" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Distribution", statement: "Downloads are cheap." }], steps: [{ reasoning: "Downloads cost almost nothing per copy.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Online download" },
        },
        {
          id: "olict-u2-cs-q12", difficulty: "core", totalMarks: 2,
          stem: "Compare an HDD and an SSD for use in a school server in two ways.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "HDD vs SSD", statement: "Cost/capacity vs speed/durability." }], steps: [
            { reasoning: "HDD: cheaper, larger capacity.", marks: 1, markCode: "M" },
            { reasoning: "SSD: faster, more durable.", marks: 1, markCode: "A" },
          ], finalAnswer: "HDD gives more storage per dollar; SSD gives faster access and better durability." },
        },
        {
          id: "olict-u2-cs-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A photographer has 800 GB of photos. A portable SSD has 1 TB capacity (1024 GB). How much free space remains after copying the photos?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 224, unit: "GB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Free space", statement: "Capacity − used." }], steps: [
            { reasoning: "1024 − 800.", marks: 1, markCode: "M" },
            { reasoning: "= 224.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 224 GB free.", marks: 1, markCode: "A" },
          ], finalAnswer: "224 GB" },
        },
        {
          id: "olict-u2-cs-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A sports camera needs small, shock-resistant storage for video. The best choice is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "HDD" },
            { id: "b", text: "Blu-ray disc" },
            { id: "c", text: "CD" },
            { id: "d", text: "Memory card (SD card)" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Mobile storage", statement: "Flash is compact and durable." }], steps: [{ reasoning: "SD card is compact, fast and shock-resistant.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Memory card (SD card)" },
        },
        {
          id: "olict-u2-cs-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A student must choose between a USB drive and cloud storage for backing up photos. Evaluate both options.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Backup options", statement: "USB vs cloud." }], steps: [
            { reasoning: "USB: cheap, fast, works offline.", marks: 1, markCode: "M" },
            { reasoning: "USB: can be lost or damaged.", marks: 1, markCode: "M" },
            { reasoning: "Cloud: accessible anywhere, automatic backup.", marks: 1, markCode: "M" },
            { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "USB is cheap and offline but risky if lost; cloud is automatic and accessible but needs internet — ideally use both." },
        },
        {
          id: "olict-u2-cs-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Storage selection — scenario review.",
          parts: [
            { label: "a", prompt: "Best storage for a laptop's main drive?", marks: 1 },
            { label: "b", prompt: "Best storage for a school's central file server?", marks: 1 },
            { label: "c", prompt: "Best storage for a student moving files between home and school?", marks: 1 },
            { label: "d", prompt: "List three factors to consider when choosing storage.", marks: 3 },
            { label: "e", prompt: "Why is flash storage suitable for a drone camera? Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Storage selection", statement: "Capacity, speed, portability, cost." },
          ], steps: [
            { part: "a", reasoning: "SSD.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "HDD/SSD large capacity.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "USB flash drive.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Capacity.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Speed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Portability/cost.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "SD card/flash storage.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Shock resistant, compact, light.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Fast enough for video.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) SSD (b) HDD/SSD (c) USB (d) cap/speed/portability (e) SD card — durable+light" },
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

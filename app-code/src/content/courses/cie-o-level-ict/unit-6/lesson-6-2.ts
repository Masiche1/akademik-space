import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olict-u6-lesson-6-2",
  code: "6-2",
  title: "Data Handling",
  goal: "I CAN describe data collection, storage, backup and retrieval in organisations.",
  standards: ["7014 10.1"],
  vocabulary: [
    { term: "Data collection", definition: "Gathering information via forms, sensors, online input." },
    { term: "Data processing", definition: "Sorting, calculating and analysing collected data." },
    { term: "Backup", definition: "Copy of data kept separately for recovery." },
    { term: "Data validation", definition: "Checking data meets rules before acceptance." },
    { term: "Data verification", definition: "Checking data was entered correctly (double entry)." },
    { term: "Archiving", definition: "Long-term storage of data no longer in daily use." },
    { term: "Data lifecycle", definition: "Stages: collection → processing → storage → retrieval → archiving → deletion." },
  ],
  concepts: [
    {
      id: "olict-u6-data",
      title: "Data lifecycle",
      skill: "Describe collection, processing, storage, retrieval and backup of data.",
      lesson: {
        sections: [
          { heading: "Collection and validation", body: "Data gathered via forms, sensors, scans or online input. **Validation** checks rules (age 0-120, email format) at entry; **verification** double-checks accuracy (re-enter or visual check)." },
          { heading: "Processing and storage", body: "Data sorted, calculated and analysed — in databases or spreadsheets. Stored on servers/disks; **archived** when no longer active; **deleted** when retention period ends." },
          { heading: "Backup and retrieval", body: "Regular **backups** to separate media protect against loss/theft/ransomware. **Retrieval** fetches data when needed — fast indexing matters for large databases." },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "Collect → process → store → retrieve → archive → delete" },
        ],
        workedExample: {
          problem: "A school collects student data. Describe the data lifecycle.",
          solution: "Collect via enrolment forms → validate (age range, ID format) → store in database → retrieve for reports → archive past years → delete after retention period.",
        },
      },
      questions: [
        {
          id: "olict-u6-dh-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Data validation checks…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Data meets set rules" }, { id: "b", text: "Data is backed up" }, { id: "c", text: "Data is encrypted" }, { id: "d", text: "Data is deleted" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Validation", statement: "Rule checking." }], steps: [{ reasoning: "Validation = rules.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Meets rules" },
        },
        {
          id: "olict-u6-dh-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish data validation from data verification.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Validation vs verification", statement: "Rules vs accuracy check." }], steps: [
            { reasoning: "Validation: checks against rules.", marks: 1, markCode: "M" },
            { reasoning: "Verification: checks entry accuracy.", marks: 1, markCode: "A" },
          ], finalAnswer: "Validation checks data meets rules; verification checks it was entered correctly." },
        },
        {
          id: "olict-u6-dh-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why regular backups are essential for an organisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Backups", statement: "Recovery from loss." }], steps: [
            { reasoning: "Protects against hardware failure.", marks: 1, markCode: "M" },
            { reasoning: "Protects against ransomware/theft.", marks: 1, markCode: "M" },
            { reasoning: "Protects against human error.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Backups allow recovery from hardware failure, ransomware, theft and accidental deletion." },
        },
        {
          id: "olict-u6-dh-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Data handling review.",
          parts: [
            { label: "a", prompt: "What is data validation?", marks: 2 },
            { label: "b", prompt: "What is data verification?", marks: 2 },
            { label: "c", prompt: "List the data lifecycle stages.", marks: 3 },
            { label: "d", prompt: "Why archive old data?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Data handling", statement: "Validation, verification, lifecycle, archive." },
          ], steps: [
            { part: "a", reasoning: "Checks data meets rules.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Checks entry accuracy.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Collect/process/store.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Retrieve/archive/delete.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "All stages.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Keeps data but offloads active systems.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Saves resources/complies with retention.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) rules check (b) accuracy check (c) collect→delete (d) long-term storage" },
        },
      ],
    },
    {
      id: "olict-u6-ethics",
      title: "ICT Ethics and Society",
      skill: "Discuss ethical issues: copyright, privacy, e-waste and digital responsibility.",
      lesson: {
        sections: [
          { heading: "Copyright and intellectual property", body: "Software, music, images and text are protected by copyright — copying without permission is piracy. Users must respect creators' rights." },
          { heading: "Privacy and surveillance", body: "CCTV, browsing tracking and data collection raise privacy concerns. Balance security/efficiency benefits against individual privacy rights." },
          { heading: "Environmental impact", body: "**E-waste**: discarded electronics contain toxic materials — recycle responsibly. Data centres consume huge energy." },
          { heading: "Digital responsibility", body: "Verify information before sharing (misinformation spreads fast); treat online communications respectfully; report abuse." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A student downloads a copyrighted film for free. Identify the issue.",
          solution: "Copyright infringement/piracy — illegal and harms creators; should use legal streaming instead.",
        },
      },
      questions: [
        {
          id: "olict-u6-et-q1", difficulty: "foundation", totalMarks: 1,
          stem: "E-waste refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Discarded electronic devices" }, { id: "b", text: "Email spam" }, { id: "c", text: "Online games" }, { id: "d", text: "A network type" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "E-waste", statement: "Electronic waste." }], steps: [{ reasoning: "E-waste = old electronics.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Discarded electronics" },
        },
        {
          id: "olict-u6-et-q2", difficulty: "core", totalMarks: 2,
          stem: "What is copyright?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Copyright", statement: "Protects creative works." }], steps: [
            { reasoning: "Legal protection for creative works.", marks: 1, markCode: "M" },
            { reasoning: "Copying without permission is illegal.", marks: 1, markCode: "A" },
          ], finalAnswer: "Legal protection giving creators exclusive rights over their work." },
        },
        {
          id: "olict-u6-et-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why e-waste is an environmental problem.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "E-waste", statement: "Toxic materials." }], steps: [
            { reasoning: "Electronics contain toxic substances.", marks: 1, markCode: "M" },
            { reasoning: "Improper disposal contaminates soil/water.", marks: 1, markCode: "M" },
            { reasoning: "Growing volume of discarded devices.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Toxic components leak into environment when devices are dumped; growing volume worsens it." },
        },
        {
          id: "olict-u6-et-q4", difficulty: "challenge", totalMarks: 9,
          stem: "ICT ethics review.",
          parts: [
            { label: "a", prompt: "Define copyright.", marks: 2 },
            { label: "b", prompt: "What is e-waste?", marks: 1 },
            { label: "c", prompt: "Give one privacy concern with ICT.", marks: 2 },
            { label: "d", prompt: "What is digital responsibility?", marks: 2 },
            { label: "e", prompt: "How should old electronics be disposed of?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "ICT ethics", statement: "Copyright, privacy, e-waste, responsibility." },
          ], steps: [
            { part: "a", reasoning: "Protects creative works.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Discarded electronics.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Data tracking/surveillance.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Personal data misuse.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Responsible online behaviour.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Verify info/respect others.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Recycle via certified facilities.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Don't landfill.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) protects works (b) old electronics (c) tracking/privacy (d) responsible use (e) recycle" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u6-6-2-notes", title: "Data handling — notes", summary: "Data lifecycle, validation/verification, backups and ethics.",
      sections: [
        { heading: "Data", body: "Lifecycle: collect→process→store→retrieve→archive→delete. Validation checks rules; verification checks accuracy." },
        { heading: "Ethics", body: "Copyright protects creators; e-waste harms environment; digital responsibility includes verifying information." },
      ] },
  ],
};

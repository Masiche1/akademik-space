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
            { id: "a", text: "Data meets set rules" },
            { id: "b", text: "Data is encrypted" },
            { id: "c", text: "Data is backed up" },
            { id: "d", text: "Data is deleted" },
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
        {
          id: "olict-u6-dh-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Data processing means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deleting all data" },
            { id: "b", text: "Buying hardware" },
            { id: "c", text: "Sorting, calculating and analysing data" },
            { id: "d", text: "Printing data" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Data processing", statement: "Sort/calculate/analyse." }], steps: [{ reasoning: "Processing analyses collected data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sort/calculate/analyse" },
        },
        {
          id: "olict-u6-dh-q6", difficulty: "core", totalMarks: 2,
          stem: "A database holds 1000 records and a backup copies all of them. How many records does the backup contain?",
          response: { type: "numeric", parts: [{ label: "records", answer: 1000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Backup", statement: "Full copy." }], steps: [
            { reasoning: "Backup copies every record.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1000 records.", marks: 1, markCode: "A" },
          ], finalAnswer: "1000 records" },
        },
        {
          id: "olict-u6-dh-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Archiving data means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Long-term storage of data no longer in daily use" },
            { id: "b", text: "Sorting files" },
            { id: "c", text: "Deleting data immediately" },
            { id: "d", text: "Encrypting passwords" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Archiving", statement: "Long-term storage." }], steps: [{ reasoning: "Archive = store inactive data long-term.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Long-term storage" },
        },
        {
          id: "olict-u6-dh-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Why is data validation important at the point of entry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It catches invalid data before it is stored" },
            { id: "b", text: "It removes the need for backups" },
            { id: "c", text: "It makes data faster" },
            { id: "d", text: "It prints reports" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Validation", statement: "Early error catching." }], steps: [{ reasoning: "Validation stops bad data early.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Catches invalid data early" },
        },
        {
          id: "olict-u6-dh-q9", difficulty: "core", totalMarks: 2,
          stem: "A sensor collects 50 records every day for 365 days. How many records are collected in a year?",
          response: { type: "numeric", parts: [{ label: "records", answer: 18250 }] },
          markscheme: { principles: [{ kind: "principle", name: "Data volume", statement: "Daily × days." }], steps: [
            { reasoning: "50 × 365 = 18 250.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 18 250 records.", marks: 1, markCode: "A" },
          ], finalAnswer: "18 250 records" },
        },
        {
          id: "olict-u6-dh-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between data validation and data verification, giving an example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Validation vs verification", statement: "Rules vs accuracy." }], steps: [
            { reasoning: "Validation checks data against rules, e.g. age must be 0-120.", marks: 1, markCode: "M" },
            { reasoning: "Invalid data is rejected at entry.", marks: 1, markCode: "M" },
            { reasoning: "Verification checks entry accuracy, e.g. re-typing or visual check.", marks: 1, markCode: "M" },
            { reasoning: "Both explained with examples.", marks: 1, markCode: "A" },
          ], finalAnswer: "Validation enforces rules (age range); verification double-checks correct entry." },
        },
        {
          id: "olict-u6-dh-q11", difficulty: "core", totalMarks: 1,
          stem: "Data retrieval means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Backing up data" },
            { id: "b", text: "Collecting new data" },
            { id: "c", text: "Fetching stored data when needed" },
            { id: "d", text: "Deleting old files" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Retrieval", statement: "Fetch data." }], steps: [{ reasoning: "Retrieval fetches stored data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fetching stored data" },
        },
        {
          id: "olict-u6-dh-q12", difficulty: "core", totalMarks: 2,
          stem: "A backup runs automatically every day. How many backups are made in 30 days?",
          response: { type: "numeric", parts: [{ label: "backups", answer: 30 }] },
          markscheme: { principles: [{ kind: "principle", name: "Backup frequency", statement: "Daily × days." }], steps: [
            { reasoning: "1 per day × 30 days = 30.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 30 backups.", marks: 1, markCode: "A" },
          ], finalAnswer: "30 backups" },
        },
        {
          id: "olict-u6-dh-q13", difficulty: "challenge", totalMarks: 4,
          stem: "List and briefly describe the stages of the data lifecycle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Data lifecycle", statement: "Collect to delete." }], steps: [
            { reasoning: "Collection: data gathered via forms, sensors, scans.", marks: 1, markCode: "M" },
            { reasoning: "Processing and storage: sorted, analysed, stored.", marks: 1, markCode: "M" },
            { reasoning: "Retrieval then archiving when inactive.", marks: 1, markCode: "M" },
            { reasoning: "Deletion after the retention period ends.", marks: 1, markCode: "A" },
          ], finalAnswer: "Collect → process → store → retrieve → archive → delete." },
        },
        {
          id: "olict-u6-dh-q14", difficulty: "core", totalMarks: 1,
          stem: "Data verification might be carried out by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Buying new hardware" },
            { id: "b", text: "Double entry or a visual check" },
            { id: "c", text: "Deleting files" },
            { id: "d", text: "Printing the screen" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Verification", statement: "Accuracy check." }], steps: [{ reasoning: "Verification re-checks entry accuracy.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Double entry or visual check" },
        },
        {
          id: "olict-u6-dh-q15", difficulty: "core", totalMarks: 2,
          stem: "A data entry form has 12 fields. Validation rules reject 3 invalid entries. How many fields contain valid data?",
          response: { type: "numeric", parts: [{ label: "fields", answer: 9 }] },
          markscheme: { principles: [{ kind: "principle", name: "Valid data", statement: "Total − invalid." }], steps: [
            { reasoning: "12 − 3 = 9.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 9 fields.", marks: 1, markCode: "A" },
          ], finalAnswer: "9 fields" },
        },
        {
          id: "olict-u6-dh-q16", difficulty: "challenge", totalMarks: 4,
          stem: "An organisation's main server fails completely. Explain how backups help it recover its data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Disaster recovery", statement: "Restore from backup." }], steps: [
            { reasoning: "Backups hold copies of data on separate media.", marks: 1, markCode: "M" },
            { reasoning: "The failed server's data can be restored from the latest backup.", marks: 1, markCode: "M" },
            { reasoning: "Only data changed since the backup may be lost.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of recovery.", marks: 1, markCode: "A" },
          ], finalAnswer: "Backups allow data to be restored onto new hardware after failure." },
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
            { id: "a", text: "Discarded electronic devices" },
            { id: "b", text: "A network type" },
            { id: "c", text: "Email spam" },
            { id: "d", text: "Online games" },
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
        {
          id: "olict-u6-et-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Copyright protects…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Computers from viruses" },
            { id: "b", text: "Creators' works from unauthorised copying" },
            { id: "c", text: "Files from deletion" },
            { id: "d", text: "Networks from hackers" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Copyright", statement: "Protects works." }], steps: [{ reasoning: "Copyright guards creative works.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Protects creators' works" },
        },
        {
          id: "olict-u6-et-q6", difficulty: "core", totalMarks: 2,
          stem: "An e-waste recycling plant processes 500 kg of electronics per year. How much does it process in 3 years?",
          response: { type: "numeric", parts: [{ label: "kg", answer: 1500, unit: "kg" }] },
          markscheme: { principles: [{ kind: "principle", name: "Recycling rate", statement: "Per year × years." }], steps: [
            { reasoning: "500 × 3 = 1500 kg.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1500 kg.", marks: 1, markCode: "A" },
          ], finalAnswer: "1500 kg" },
        },
        {
          id: "olict-u6-et-q7", difficulty: "core", totalMarks: 1,
          stem: "A privacy concern with CCTV cameras is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Better photos" },
            { id: "b", text: "Faster internet" },
            { id: "c", text: "Saving electricity" },
            { id: "d", text: "Constant surveillance of individuals" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Surveillance", statement: "Privacy invasion." }], steps: [{ reasoning: "CCTV raises surveillance concerns.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Constant surveillance" },
        },
        {
          id: "olict-u6-et-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Old electronic devices should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recycled at certified facilities" },
            { id: "b", text: "Thrown in normal rubbish" },
            { id: "c", text: "Kept forever" },
            { id: "d", text: "Burned openly" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "E-waste disposal", statement: "Recycle safely." }], steps: [{ reasoning: "E-waste needs certified recycling.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Recycled at certified facilities" },
        },
        {
          id: "olict-u6-et-q9", difficulty: "core", totalMarks: 2,
          stem: "An office discards 40 electronic devices per year and recycles 25% of them. How many devices are recycled?",
          response: { type: "numeric", parts: [{ label: "devices", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Recycling rate", statement: "Total × percentage." }], steps: [
            { reasoning: "25% of 40 = 10 devices.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 10 devices.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 devices" },
        },
        {
          id: "olict-u6-et-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why sharing unverified news on social media is irresponsible.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Digital responsibility", statement: "Verify before sharing." }], steps: [
            { reasoning: "Unverified news may be false or misleading.", marks: 1, markCode: "M" },
            { reasoning: "Sharing spreads misinformation to many people quickly.", marks: 1, markCode: "M" },
            { reasoning: "It can cause panic, harm reputations or mislead the public.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sharing unverified news spreads misinformation that can harm people." },
        },
        {
          id: "olict-u6-et-q11", difficulty: "core", totalMarks: 1,
          stem: "Intellectual property includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printers and scanners" },
            { id: "b", text: "Software, music, images and text" },
            { id: "c", text: "Computers and cables" },
            { id: "d", text: "Network routers" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Intellectual property", statement: "Creative works." }], steps: [{ reasoning: "Creative works are IP.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Software, music, images, text" },
        },
        {
          id: "olict-u6-et-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A data centre uses 1000 kWh of electricity per day. How much does it use in one week (7 days)?",
          response: { type: "numeric", parts: [{ label: "kWh", answer: 7000, unit: "kWh" }] },
          markscheme: { principles: [{ kind: "principle", name: "Energy use", statement: "Daily × 7." }], steps: [
            { reasoning: "1000 × 7 = 7000 kWh.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 7000 kWh.", marks: 1, markCode: "A" },
          ], finalAnswer: "7000 kWh" },
        },
        {
          id: "olict-u6-et-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss the balance between the benefits of security cameras and privacy concerns.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Surveillance balance", statement: "Security vs privacy." }], steps: [
            { reasoning: "Cameras deter crime and help solve incidents.", marks: 1, markCode: "M" },
            { reasoning: "They record people's movements continuously.", marks: 1, markCode: "M" },
            { reasoning: "This can invade privacy and require data protection.", marks: 1, markCode: "M" },
            { reasoning: "Balanced discussion.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cameras improve security but raise privacy issues needing regulation." },
        },
        {
          id: "olict-u6-et-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Downloading paid software without paying is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Copyright infringement (piracy)" },
            { id: "b", text: "Free software" },
            { id: "c", text: "A legal trial" },
            { id: "d", text: "An update" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Piracy", statement: "Copyright infringement." }], steps: [{ reasoning: "Unpaid download = piracy.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Copyright infringement" },
        },
        {
          id: "olict-u6-et-q15", difficulty: "core", totalMarks: 2,
          stem: "A school has 120 old devices and recycles 30 of them. What percentage is recycled?",
          response: { type: "numeric", parts: [{ label: "percent", answer: 25, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Recycling rate", statement: "Recycled / total × 100." }], steps: [
            { reasoning: "30 / 120 × 100 = 25%.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 25%.", marks: 1, markCode: "A" },
          ], finalAnswer: "25%" },
        },
        {
          id: "olict-u6-et-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Suggest three ways an individual can be a responsible ICT user.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Digital responsibility", statement: "Verify, respect, recycle." }], steps: [
            { reasoning: "Verify information before sharing it online.", marks: 1, markCode: "M" },
            { reasoning: "Respect copyright — don't pirate software or media.", marks: 1, markCode: "M" },
            { reasoning: "Protect privacy and recycle e-waste responsibly.", marks: 1, markCode: "M" },
            { reasoning: "Three valid responsibilities.", marks: 1, markCode: "A" },
          ], finalAnswer: "Verify information, respect copyright, protect privacy and recycle e-waste." },
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

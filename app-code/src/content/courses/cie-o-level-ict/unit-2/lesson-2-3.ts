import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olict-u2-lesson-2-3",
  code: "2-3",
  title: "Storage Capacity and Units",
  goal: "I CAN convert between storage units and estimate file sizes.",
  standards: ["7014 3.2"],
  vocabulary: [
    { term: "Bit", definition: "Smallest unit of data — 0 or 1." },
    { term: "Byte", definition: "8 bits — one character of text." },
    { term: "Kilobyte (KB)", definition: "1024 bytes (or ~1000)." },
    { term: "Megabyte (MB)", definition: "1024 KB — a small photo or song." },
    { term: "Gigabyte (GB)", definition: "1024 MB — a film or game." },
    { term: "Terabyte (TB)", definition: "1024 GB — large drives." },
  ],
  concepts: [
    {
      id: "olict-u2-units",
      title: "Data units and conversion",
      skill: "Convert between bits, bytes, KB, MB, GB and TB.",
      lesson: {
        sections: [
          { heading: "The ladder", body: "1 byte = 8 bits\n1 KB = 1024 bytes\n1 MB = 1024 KB\n1 GB = 1024 MB\n1 TB = 1024 GB\n\n(Multiply going up, divide going down.)" },
          { heading: "Estimation", body: "- Text page: ~2 KB\n- Photo: 2-5 MB\n- MP3 song: ~4 MB\n- Film: 1-2 GB\n- 1 hour HD video: ~4 GB" },
          { heading: "Capacity planning", body: "A 500 GB drive holds ~100,000 photos or ~500 hours of music — always leave ~10-20% free for performance." },
        ],
        keyFormulas: [
          { name: "Conversion", statement: "1 KB = 1024 B; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB" },
        ],
        workedExample: {
          problem: "Convert 2 GB to MB.",
          solution: "2 GB × 1024 = 2048 MB.",
        },
      },
      questions: [
        {
          id: "olict-u2-cu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "1 byte equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 bits" }, { id: "b", text: "1024 bits" }, { id: "c", text: "10 bits" }, { id: "d", text: "16 bits" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Byte", statement: "8 bits." }], steps: [{ reasoning: "Byte = 8 bits.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 8 bits" },
        },
        {
          id: "olict-u2-cu-q2", difficulty: "core", totalMarks: 2,
          stem: "Convert 4 MB to KB.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conversion", statement: "1 MB = 1024 KB." }], steps: [
            { reasoning: "$4 \\times 1024 = 4096$ KB.", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "4096 KB" },
        },
        {
          id: "olict-u2-cu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A phone stores 64 GB. Approximately how many 4 MB photos fit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Capacity", statement: "Total ÷ file size." }], steps: [
            { reasoning: "$64 \\times 1024 = 65536$ MB total.", marks: 1, markCode: "M" },
            { reasoning: "$65536 \\div 4 = 16384$ photos.", marks: 1, markCode: "M" },
            { reasoning: "Correct method.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "About 16,384 photos." },
        },
        {
          id: "olict-u2-cu-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Storage units review.",
          parts: [
            { label: "a", prompt: "Convert 1 TB to GB.", marks: 1 },
            { label: "b", prompt: "Convert 2048 KB to MB.", marks: 1 },
            { label: "c", prompt: "How many bits in 3 bytes?", marks: 1 },
            { label: "d", prompt: "Estimate the size of a 3-minute MP3 song.", marks: 2 },
            { label: "e", prompt: "A 1 TB drive is 60% full. How much free space in GB?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Units", statement: "1024-based conversion." },
          ], steps: [
            { part: "a", reasoning: "1024 GB.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "2 MB.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "24 bits.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "~4 MB per minute → ~12 MB.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reasonable estimate.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$1 \\times 1024 = 1024$ GB total.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "40% free.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "$0.4 \\times 1024 = 409.6$ GB.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 1024 (b) 2 (c) 24 (d) ~12MB (e) 409.6 GB" },
        },
      ],
    },
    {
      id: "olict-u2-estimation",
      title: "Estimating storage needs",
      skill: "Estimate file sizes and required storage capacity for scenarios.",
      lesson: {
        sections: [
          { heading: "Typical file sizes", body: "- Email/text: KB\n- Photo: 2-5 MB\n- Song (MP3): ~4 MB\n- Film/DVD quality: 1-2 GB\n- HD movie: 4-8 GB\n- Game: 20-100 GB" },
          { heading: "Working it out", body: "Multiply file size × number of files, add system/OS space (~50-100 GB for Windows), leave spare capacity." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A school wants to store 2000 student photos at 3 MB each plus a 60 GB video archive. What capacity is needed?",
          solution: "2000 × 3 MB = 6000 MB ≈ 6 GB; + 60 GB = 66 GB → choose 128 GB drive for headroom.",
        },
      },
      questions: [
        {
          id: "olict-u2-es-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A typical photo is about…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2-5 MB" }, { id: "b", text: "2-5 KB" }, { id: "c", text: "2-5 GB" }, { id: "d", text: "2-5 TB" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "File sizes", statement: "Photo ~MB." }], steps: [{ reasoning: "Photo ≈ MB.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 2-5 MB" },
        },
        {
          id: "olict-u2-es-q2", difficulty: "core", totalMarks: 2,
          stem: "Estimate storage for 500 photos at 4 MB each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Estimation", statement: "Size × count." }], steps: [
            { reasoning: "$500 \\times 4 = 2000$ MB.", marks: 1, markCode: "M" },
            { reasoning: "≈ 2 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "2000 MB ≈ 2 GB." },
        },
        {
          id: "olict-u2-es-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A company needs to store 10,000 documents averaging 500 KB, plus 50 GB of video. Recommend a capacity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Capacity planning", statement: "Total + headroom." }], steps: [
            { reasoning: "$10000 \\times 500 = 5,000,000$ KB ≈ 5 GB.", marks: 1, markCode: "M" },
            { reasoning: "$5 + 50 = 55$ GB needed.", marks: 1, markCode: "M" },
            { reasoning: "Recommend 128 GB+ for headroom.", marks: 1, markCode: "M" },
            { reasoning: "Sensible recommendation.", marks: 1, markCode: "A" },
          ], finalAnswer: "~55 GB needed; choose 128 GB for spare capacity." },
        },
        {
          id: "olict-u2-es-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Storage estimation review.",
          parts: [
            { label: "a", prompt: "Typical size of a song?", marks: 1 },
            { label: "b", prompt: "Typical size of a film?", marks: 1 },
            { label: "c", prompt: "Calculate: 1000 files × 2 MB = ? GB", marks: 2 },
            { label: "d", prompt: "Why leave spare capacity on a drive?", marks: 2 },
            { label: "e", prompt: "Estimate capacity for 300 students × 5 MB photos + 20 GB videos.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Estimation", statement: "Typical sizes + headroom." },
          ], steps: [
            { part: "a", reasoning: "~4 MB.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "1-2 GB.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$2000$ MB.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "≈ 2 GB.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Performance/deletes need space.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct reason.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$300 \\times 5 = 1500$ MB ≈ 1.5 GB.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "$1.5 + 20 = 21.5$ GB.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Recommend ~32-64 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 4MB (b) 1-2GB (c) 2GB (d) performance (e) ~22GB→64GB" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u2-2-3-notes", title: "Storage capacity — notes", summary: "Data units, conversions and capacity estimation.",
      sections: [
        { heading: "Units", body: "1 byte=8 bits; each step up ×1024. Photo≈MB, film≈GB." },
        { heading: "Estimating", body: "size × count + OS space + headroom = required capacity." },
      ] },
  ],
};

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
            { id: "a", text: "8 bits" },
            { id: "b", text: "1024 bits" },
            { id: "c", text: "16 bits" },
            { id: "d", text: "10 bits" },
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
        {
          id: "olict-u2-cu-q5", difficulty: "foundation", totalMarks: 2,
          stem: "Convert 2 GB to MB.",
          response: { type: "numeric", parts: [{ label: "MB", answer: 2048 }] },
          markscheme: { principles: [{ kind: "principle", name: "Conversion", statement: "1 GB = 1024 MB." }], steps: [
            { reasoning: "$2 \\times 1024 = 2048$ MB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "2048 MB" },
        },
        {
          id: "olict-u2-cu-q6", difficulty: "core", totalMarks: 1,
          stem: "1 KB equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1024 bits" },
            { id: "b", text: "8 bytes" },
            { id: "c", text: "1024 bytes" },
            { id: "d", text: "100 bytes" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Kilobyte", statement: "1024 bytes." }], steps: [{ reasoning: "1 KB = 1024 bytes.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 1024 bytes" },
        },
        {
          id: "olict-u2-cu-q7", difficulty: "core", totalMarks: 2,
          stem: "Convert 3072 KB to MB.",
          response: { type: "numeric", parts: [{ label: "MB", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Conversion", statement: "1 MB = 1024 KB." }], steps: [
            { reasoning: "$3072 \\div 1024 = 3$ MB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 MB" },
        },
        {
          id: "olict-u2-cu-q8", difficulty: "core", totalMarks: 2,
          stem: "Convert 1.5 GB to MB.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conversion", statement: "1 GB = 1024 MB." }], steps: [
            { reasoning: "$1.5 \\times 1024 = 1536$ MB.", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "1536 MB" },
        },
        {
          id: "olict-u2-cu-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A 500 GB drive is 25% full. How many GB are used?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 125 }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage", statement: "Percentage of capacity." }], steps: [
            { reasoning: "$0.25 \\times 500 = 125$ GB.", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "125 GB" },
        },
        {
          id: "olict-u2-cu-q10", difficulty: "challenge", totalMarks: 1,
          stem: "Which is the largest unit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Megabyte" },
            { id: "b", text: "Terabyte" },
            { id: "c", text: "Byte" },
            { id: "d", text: "Kilobyte" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Unit order", statement: "B < KB < MB < GB < TB." }], steps: [{ reasoning: "TB is the largest listed.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Terabyte" },
        },
        {
          id: "olict-u2-cu-q11", difficulty: "foundation", totalMarks: 2,
          stem: "How many bytes are in 4 KB?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conversion", statement: "1 KB = 1024 bytes." }], steps: [
            { reasoning: "$4 \\times 1024 = 4096$ bytes.", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "4096 bytes" },
        },
        {
          id: "olict-u2-cu-q12", difficulty: "core", totalMarks: 1,
          stem: "A text file is 500 KB. Approximately how many MB is that?",
          response: { type: "mcq", choices: [
            { id: "a", text: "500 MB" },
            { id: "b", text: "5 MB" },
            { id: "c", text: "50 MB" },
            { id: "d", text: "0.5 MB" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Conversion", statement: "1024 KB = 1 MB." }], steps: [{ reasoning: "$500 \\div 1024 \\approx 0.5$ MB.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 0.5 MB" },
        },
        {
          id: "olict-u2-cu-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A 2 TB drive is used to store files of 4 GB each. How many files fit on the drive? (1 TB = 1024 GB)",
          response: { type: "numeric", parts: [{ label: "files", answer: 512 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capacity", statement: "Total ÷ file size." }], steps: [
            { reasoning: "$2 \\times 1024 = 2048$ GB total.", marks: 1, markCode: "M" },
            { reasoning: "$2048 \\div 4 = 512$ files.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "512 files" },
        },
        {
          id: "olict-u2-cu-q14", difficulty: "challenge", totalMarks: 1,
          stem: "How many bits are in 5 bytes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 bits" },
            { id: "b", text: "40 bits" },
            { id: "c", text: "5 bits" },
            { id: "d", text: "45 bits" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Byte", statement: "1 byte = 8 bits." }], steps: [{ reasoning: "$5 \\times 8 = 40$ bits.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 40 bits" },
        },
        {
          id: "olict-u2-cu-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A drive is 80% full with 800 GB of data. What is the total capacity of the drive?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Percentage", statement: "Part = percentage × total." }], steps: [
            { reasoning: "$0.8 \\times \\text{total} = 800$.", marks: 1, markCode: "M" },
            { reasoning: "Total $= 800 \\div 0.8 = 1000$ GB.", marks: 1, markCode: "M" },
            { reasoning: "Correct method.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "1000 GB (1 TB)" },
        },
        {
          id: "olict-u2-cu-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Data units — extended review.",
          parts: [
            { label: "a", prompt: "How many bits are in one byte?", marks: 1 },
            { label: "b", prompt: "Convert 1 MB to KB.", marks: 1 },
            { label: "c", prompt: "Convert 3 GB to MB.", marks: 2 },
            { label: "d", prompt: "Estimate the size of a typical digital photo.", marks: 2 },
            { label: "e", prompt: "A 4 TB drive is half full. How much free space is there in GB?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Units", statement: "1024-based conversion." },
          ], steps: [
            { part: "a", reasoning: "8 bits.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "1024 KB.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$3 \\times 1024 = 3072$ MB.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct result.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "~2-5 MB.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reasonable estimate.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$4 \\times 1024 = 4096$ GB total.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Half free = 50%.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "$0.5 \\times 4096 = 2048$ GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 8 (b) 1024 (c) 3072 (d) 2-5MB (e) 2048 GB" },
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
            { id: "a", text: "2-5 KB" },
            { id: "b", text: "2-5 GB" },
            { id: "c", text: "2-5 TB" },
            { id: "d", text: "2-5 MB" },
          ], correctChoiceId: "d" },
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
        {
          id: "olict-u2-es-q5", difficulty: "foundation", totalMarks: 2,
          stem: "300 photos each average 3 MB. What is the total size in MB?",
          response: { type: "numeric", parts: [{ label: "MB", answer: 900 }] },
          markscheme: { principles: [{ kind: "principle", name: "Estimation", statement: "Size × count." }], steps: [
            { reasoning: "$300 \\times 3 = 900$ MB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "900 MB" },
        },
        {
          id: "olict-u2-es-q6", difficulty: "core", totalMarks: 1,
          stem: "A typical HD movie file is about…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4-8 MB" },
            { id: "b", text: "4-8 GB" },
            { id: "c", text: "4-8 KB" },
            { id: "d", text: "4-8 TB" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "File sizes", statement: "Film ≈ GB." }], steps: [{ reasoning: "HD movie ≈ several GB.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 4-8 GB" },
        },
        {
          id: "olict-u2-es-q7", difficulty: "core", totalMarks: 2,
          stem: "1000 songs each average 4 MB. What is the total size in MB?",
          response: { type: "numeric", parts: [{ label: "MB", answer: 4000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Estimation", statement: "Size × count." }], steps: [
            { reasoning: "$1000 \\times 4 = 4000$ MB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "4000 MB" },
        },
        {
          id: "olict-u2-es-q8", difficulty: "core", totalMarks: 2,
          stem: "Estimate the storage needed for 50 video files of 2 GB each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Estimation", statement: "Size × count." }], steps: [
            { reasoning: "$50 \\times 2 = 100$ GB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "100 GB" },
        },
        {
          id: "olict-u2-es-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A company will store 1500 photos at 4 MB each plus 40 GB of video. Estimate the minimum capacity needed in GB before allowing spare space. (1000 MB = 1 GB)",
          response: { type: "numeric", parts: [{ label: "GB", answer: 46, tolerance: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capacity planning", statement: "Total + headroom." }], steps: [
            { reasoning: "$1500 \\times 4 = 6000$ MB ≈ 6 GB.", marks: 1, markCode: "M" },
            { reasoning: "$6 + 40 = 46$ GB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈ 46 GB" },
        },
        {
          id: "olict-u2-es-q10", difficulty: "challenge", totalMarks: 1,
          stem: "Why should spare capacity be left on a storage drive?",
          response: { type: "mcq", choices: [
            { id: "a", text: "For performance and future files" },
            { id: "b", text: "It is not needed" },
            { id: "c", text: "To make files larger" },
            { id: "d", text: "To slow the computer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Headroom", statement: "Spare space aids performance." }], steps: [{ reasoning: "Spare space keeps the drive performing well.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** For performance and future files" },
        },
        {
          id: "olict-u2-es-q11", difficulty: "foundation", totalMarks: 2,
          stem: "500 emails each average 20 KB. What is the total size in KB?",
          response: { type: "numeric", parts: [{ label: "KB", answer: 10000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Estimation", statement: "Size × count." }], steps: [
            { reasoning: "$500 \\times 20 = 10\\,000$ KB.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 000 KB" },
        },
        {
          id: "olict-u2-es-q12", difficulty: "core", totalMarks: 3,
          stem: "A gamer needs storage for a 60 GB game plus 200 GB of media files. Recommend a suitable drive capacity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Capacity planning", statement: "Total + headroom." }], steps: [
            { reasoning: "$60 + 200 = 260$ GB needed.", marks: 1, markCode: "M" },
            { reasoning: "Recommend 320 GB or larger.", marks: 1, markCode: "M" },
            { reasoning: "Sensible recommendation.", marks: 1, markCode: "A" },
          ], finalAnswer: "260 GB needed — a 320 GB or 512 GB drive gives headroom." },
        },
        {
          id: "olict-u2-es-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Photos average 3.5 MB each. How many photos fit in a 7 GB drive? (1024 MB = 1 GB)",
          response: { type: "numeric", parts: [{ label: "photos", answer: 2048 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capacity", statement: "Total ÷ file size." }], steps: [
            { reasoning: "$7 \\times 1024 = 7168$ MB total.", marks: 1, markCode: "M" },
            { reasoning: "$7168 \\div 3.5 = 2048$ photos.", marks: 1, markCode: "M" },
            { reasoning: "Correct method.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "2048 photos" },
        },
        {
          id: "olict-u2-es-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which type of file typically needs the MOST storage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A computer game" },
            { id: "b", text: "A web page" },
            { id: "c", text: "A spreadsheet" },
            { id: "d", text: "A text email" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "File sizes", statement: "Games are large." }], steps: [{ reasoning: "Games are tens of GB; others are KB-MB.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A computer game" },
        },
        {
          id: "olict-u2-es-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A school archives 500 GB of CCTV footage each year. Estimate the storage needed for 10 years and recommend a solution.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Capacity planning", statement: "Annual × years." }], steps: [
            { reasoning: "$500 \\times 10 = 5000$ GB ≈ 5 TB.", marks: 1, markCode: "M" },
            { reasoning: "Recommend large-capacity HDD array.", marks: 1, markCode: "M" },
            { reasoning: "Headroom for growth considered.", marks: 1, markCode: "M" },
            { reasoning: "Sensible recommendation.", marks: 1, markCode: "A" },
          ], finalAnswer: "~5 TB needed; a multi-drive HDD storage system with spare capacity is suitable." },
        },
        {
          id: "olict-u2-es-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Storage estimation — extended review.",
          parts: [
            { label: "a", prompt: "Typical size of an MP3 song?", marks: 1 },
            { label: "b", prompt: "Typical size of a photo?", marks: 1 },
            { label: "c", prompt: "Calculate: 800 files × 2 MB = ? GB", marks: 2 },
            { label: "d", prompt: "Why leave spare capacity on a drive?", marks: 2 },
            { label: "e", prompt: "Estimate capacity for 400 students × 4 MB photos + 30 GB videos.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Estimation", statement: "Typical sizes + headroom." },
          ], steps: [
            { part: "a", reasoning: "~4 MB.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "~2-5 MB.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$1600$ MB.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "≈ 1.6 GB.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Performance/deletes need space.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct reason.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$400 \\times 4 = 1600$ MB ≈ 1.6 GB.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "$1.6 + 30 = 31.6$ GB.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Recommend ~64 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 4MB (b) 2-5MB (c) ~1.6GB (d) performance (e) ~32GB→64GB" },
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

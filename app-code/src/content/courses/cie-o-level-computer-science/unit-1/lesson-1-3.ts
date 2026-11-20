import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olcs-u1-lesson-1-3",
  code: "1-3",
  title: "Data Storage and Compression",
  goal: "I CAN use storage units correctly, calculate file sizes, and compare lossy and lossless compression.",
  standards: ["2210 1.3.1", "2210 1.3.2", "2210 1.3.4"],
  vocabulary: [
    { term: "Bit", definition: "Smallest unit of data — a single 0 or 1." },
    { term: "Byte", definition: "Group of 8 bits; the standard unit for file sizes." },
    { term: "Kilobyte / Megabyte / Gigabyte", definition: "Storage units: kB = 1024 bytes (or 1000 in some contexts), MB = 1024², GB = 1024³ bytes." },
    { term: "Lossy compression", definition: "Discards data the eye/ear is unlikely to notice; much smaller files, some quality loss." },
    { term: "Lossless compression", definition: "Rearranges data without losing any; file can be fully restored to the original." },
    { term: "Compression ratio", definition: "Original size ÷ compressed size; higher means better compression." },
  ],
  concepts: [
    {
      id: "olcs-u1-storage-units",
      title: "Measuring data storage",
      skill: "Convert between bits, bytes, kB, MB and GB and choose sensible units.",
      lesson: {
        sections: [
          { heading: "Units", body: "1 byte = 8 bits. In computing contexts:\n\n- 1 kB = $2^{10}=1024$ bytes\n- 1 MB = $1024^2\\approx1.05\\times10^6$ bytes\n- 1 GB = $1024^3\\approx1.07\\times10^9$ bytes\n- 1 TB = $1024^4$ bytes\n\n(Sometimes manufacturers use 1000-based units — always check the question.)" },
          { heading: "Choosing units", body: "A text file might be kB, a photo MB, a film GB, a data centre TB. Report answers in the unit asked for; convert step by step: bits → bytes → kB → MB." },
          { heading: "Bandwidth vs storage", body: "Don't confuse storage units with transmission speeds (Mbps = megabits per second). 1 MB = 8 Mb — a common exam trap." },
        ],
        keyFormulas: [
          { name: "Conversions", statement: "$1\\text{ byte}=8\\text{ bits}$; $1\\text{ kB}=1024\\text{ B}$" },
          { name: "MB in bits", statement: "$1\\text{ MB}=8\\times1024^2\\text{ bits}$" },
        ],
        workedExample: {
          problem: "A file is $5.2$ MB. Express it in bits and in kB.",
          solution: "Bits = $5.2\\times1024^2\\times8 = 43\\,654\\,400$ bits. kB = $5.2\\times1024 = 5324.8$ kB.",
        },
      },
      questions: [
        {
          id: "olcs-u1-su-q1", difficulty: "foundation", totalMarks: 1,
          stem: "How many bytes are in 3 kB (using 1024)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3072" }, { id: "b", text: "3000" }, { id: "c", text: "24" }, { id: "d", text: "1024" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "kB", statement: "1 kB = 1024 bytes." }], steps: [{ reasoning: "$3\\times1024=3072$.", working: "3072", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 3072" },
        },
        {
          id: "olcs-u1-su-q2", difficulty: "core", totalMarks: 2,
          stem: "Convert $2.5$ GB to MB.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GB", statement: "1 GB = 1024 MB." }], steps: [
            { reasoning: "Multiply by 1024.", working: "2.5\\times1024", marks: 1, markCode: "M" },
            { reasoning: "$2560$ MB.", working: "2560", marks: 1, markCode: "A" },
          ], finalAnswer: "2560 MB" },
        },
        {
          id: "olcs-u1-su-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A download of $800$ MB takes 40 seconds. Calculate the average download speed in megabits per second (Mbps).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Speed", statement: "Mbps = megabits ÷ seconds." }], steps: [
            { reasoning: "Convert MB to megabits: $800\\times8=6400$ Mb.", working: "6400", marks: 1, markCode: "M" },
            { reasoning: "Divide by time: $6400/40=160$.", working: "160", marks: 1, markCode: "M" },
            { reasoning: "State units correctly (Mb not MB).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 160 Mbps.", marks: 1, markCode: "A" },
          ], finalAnswer: "160 Mbps" },
        },
        {
          id: "olcs-u1-su-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Storage units and conversion review.",
          parts: [
            { label: "a", prompt: "How many bits are in 2 MB (1024-based)?", marks: 2 },
            { label: "b", prompt: "A text file is 450 kB. Express in bytes.", marks: 1 },
            { label: "c", prompt: "A video is 1.5 GB. Express in MB.", marks: 1 },
            { label: "d", prompt: "A 100 Mbps connection transfers a 250 MB file. Calculate the minimum transfer time in seconds.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "formula", name: "Transfer time", statement: "$t = \\text{size in Mb} / \\text{speed in Mbps}$" },
          ], steps: [
            { part: "a", reasoning: "$2\\times1024^2\\times8$ bits.", working: "16777216", marks: 1, markCode: "M" },
            { part: "a", reasoning: "= $16\\,777\\,216$ bits.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$450\\times1024=460\\,800$ bytes.", working: "460800", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$1.5\\times1024=1536$ MB.", working: "1536", marks: 1, markCode: "A" },
            { part: "d", reasoning: "250 MB = $2000$ Mb.", working: "2000", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Time = $2000/100=20$ s.", working: "20", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Convert MB→Mb correctly (×8).", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Divide by speed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Answer: 20 seconds.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 16 777 216 bits (b) 460800 bytes (c) 1536 MB (d) 20 s" },
        },
      ],
    },
    {
      id: "olcs-u1-compression",
      title: "Lossy and lossless compression",
      skill: "Compare compression methods and choose the right one for a file type.",
      lesson: {
        sections: [
          { heading: "Why compress?", body: "Smaller files mean faster downloads, less storage and cheaper transmission. **Compression ratio** = original ÷ compressed size; e.g. 10 MB → 2 MB gives ratio 5:1." },
          { heading: "Lossless", body: "Rebuilds the exact original — no data lost. Methods remove repetition (run-length encoding) or redundancy (Huffman, dictionary/LZ). Used for text, software, data files, PNG images. ZIP is lossless." },
          { heading: "Lossy", body: "Discards detail humans won't notice. JPEG removes high-frequency detail; MP3 removes sounds near/below hearing threshold. Much higher ratios (10:1–20:1) but quality degrades each re-save. Never use lossy for text or executables." },
          { heading: "Choosing", body: "Text/programs/data → lossless (must be exact). Photos/music/video for sharing → lossy (size matters more than perfect fidelity)." },
        ],
        keyFormulas: [
          { name: "Compression ratio", statement: "$\\text{original size} / \\text{compressed size}$" },
        ],
        workedExample: {
          problem: "A 12 MB photo is saved as a 1.5 MB JPEG. Find the compression ratio.",
          solution: "Ratio = $12/1.5 = 8:1$.",
        },
      },
      questions: [
        {
          id: "olcs-u1-comp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which file type is compressed losslessly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ZIP archive of a program" }, { id: "b", text: "JPEG photo" }, { id: "c", text: "MP3 song" }, { id: "d", text: "MPEG video" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Lossless", statement: "Exact restoration — needed for programs/data." }], steps: [{ reasoning: "Programs need exact bytes.", working: "\\text{ZIP}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** ZIP archive" },
        },
        {
          id: "olcs-u1-comp-q2", difficulty: "core", totalMarks: 2,
          stem: "A file shrinks from 20 MB to 4 MB. Calculate the compression ratio.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Ratio", statement: "original ÷ compressed." }], steps: [
            { reasoning: "Divide.", working: "20/4", marks: 1, markCode: "M" },
            { reasoning: "Ratio 5:1.", working: "5:1", marks: 1, markCode: "A" },
          ], finalAnswer: "5:1" },
        },
        {
          id: "olcs-u1-comp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why JPEG is unsuitable for compressing a bank's customer database.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Lossy risk", statement: "Lossy discards data permanently." }], steps: [
            { reasoning: "JPEG is lossy — discards data.", working: "\\text{lossy}", marks: 1, markCode: "M" },
            { reasoning: "Database values must be exact (names, balances).", working: "\\text{exact data}", marks: 1, markCode: "M" },
            { reasoning: "Any discarded detail corrupts records.", marks: 1, markCode: "M" },
            { reasoning: "Use lossless (ZIP) instead.", marks: 1, markCode: "A" },
          ], finalAnswer: "Lossy compression would corrupt exact records; use lossless." },
        },
        {
          id: "olcs-u1-comp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Compression review.",
          parts: [
            { label: "a", prompt: "Define lossy compression.", marks: 2 },
            { label: "b", prompt: "Define lossless compression.", marks: 2 },
            { label: "c", prompt: "A 50 MB video becomes 5 MB after compression. Find the ratio.", marks: 2 },
            { label: "d", prompt: "Recommend lossy or lossless for: (i) a text document, (ii) a music track for streaming, (iii) an executable program. Justify each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Lossy", statement: "Discards imperceptible detail; smaller, lossy." },
            { kind: "definition", name: "Lossless", statement: "No data lost; exact restore." },
          ], steps: [
            { part: "a", reasoning: "Discards data humans won't notice.", working: "\\text{discards detail}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Quality degrades on re-save.", working: "\\text{lossy}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "No data lost; fully reversible.", working: "\\text{exact restore}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$50/5=10$.", working: "10:1", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Ratio 10:1.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Text: lossless — exact characters needed.", working: "\\text{lossless}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Music: lossy — size matters, imperceptible loss OK.", working: "\\text{lossy}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Program: lossless — must run exactly.", working: "\\text{lossless}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) discards detail (b) exact restore (c) 10:1 (d) text=lossless, music=lossy, program=lossless" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u1-1-3-notes", title: "Storage and compression — notes", summary: "Units, conversions, bandwidth vs storage, lossy vs lossless.",
      sections: [
        { heading: "Units", body: "8 bits = 1 byte; 1024 B = 1 kB. Mbps uses megabits — multiply MB by 8 first." },
        { heading: "Compression", body: "Lossless = exact (ZIP, text, programs). Lossy = discards imperceptible detail (JPEG, MP3) — smaller but irreversible." },
      ] },
  ],
};

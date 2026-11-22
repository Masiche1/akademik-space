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
            { id: "a", text: "24" },
            { id: "b", text: "3000" },
            { id: "c", text: "1024" },
            { id: "d", text: "3072" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "kB", statement: "1 kB = 1024 bytes." }], steps: [{ reasoning: "$3\\times1024=3072$.", working: "3072", marks: 1, markCode: "B" }], finalAnswer: "**(d)** 3072" },
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
        {
          id: "olcs-u1-su-q5", difficulty: "foundation", totalMarks: 1,
          stem: "How many bytes are in 1 MB (1024-based)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8192" },
            { id: "b", text: "1 000 000" },
            { id: "c", text: "1 048 576" },
            { id: "d", text: "1024" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "MB", statement: "$1\\text{ MB}=1024^2$ bytes." }], steps: [{ reasoning: "$1024^2=1\\,048\\,576$.", working: "1048576", marks: 1, markCode: "B" }], finalAnswer: "**(c)** 1 048 576" },
        },
        {
          id: "olcs-u1-su-q6", difficulty: "core", totalMarks: 2,
          stem: "Convert 4 GB to MB.",
          response: { type: "numeric", parts: [{ label: "MB", answer: 4096 }] },
          markscheme: { principles: [{ kind: "definition", name: "GB", statement: "1 GB = 1024 MB." }], steps: [
            { reasoning: "$4\\times1024$.", working: "4\\times1024", marks: 1, markCode: "M" },
            { reasoning: "= 4096 MB.", working: "4096", marks: 1, markCode: "A" },
          ], finalAnswer: "4096 MB" },
        },
        {
          id: "olcs-u1-su-q7", difficulty: "foundation", totalMarks: 1,
          stem: "One byte consists of how many bits?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "16" },
            { id: "c", text: "4" },
            { id: "d", text: "1024" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Byte", statement: "8 bits." }], steps: [{ reasoning: "1 byte = 8 bits.", working: "8", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 8" },
        },
        {
          id: "olcs-u1-su-q8", difficulty: "core", totalMarks: 2,
          stem: "Convert 256 kB to bytes (1024-based).",
          response: { type: "numeric", parts: [{ label: "Bytes", answer: 262144 }] },
          markscheme: { principles: [{ kind: "definition", name: "kB", statement: "1 kB = 1024 bytes." }], steps: [
            { reasoning: "$256\\times1024$.", working: "256\\times1024", marks: 1, markCode: "M" },
            { reasoning: "= 262 144 bytes.", working: "262144", marks: 1, markCode: "A" },
          ], finalAnswer: "262 144 bytes" },
        },
        {
          id: "olcs-u1-su-q9", difficulty: "core", totalMarks: 2,
          stem: "Some manufacturers state file sizes using 1000-based units. Why is this worth checking?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unit ambiguity", statement: "1024 vs 1000 changes reported sizes." }], steps: [
            { reasoning: "1000-based units report smaller-looking sizes than 1024-based.", working: "\\text{1000 vs 1024}", marks: 1, markCode: "M" },
            { reasoning: "Answers in exams must use the base the question specifies.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reported sizes differ between 1000- and 1024-based units, so the base must be checked." },
        },
        {
          id: "olcs-u1-su-q10", difficulty: "core", totalMarks: 1,
          stem: "Which is the largest unit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "kB" },
            { id: "b", text: "TB" },
            { id: "c", text: "GB" },
            { id: "d", text: "MB" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Units", statement: "kB < MB < GB < TB." }], steps: [{ reasoning: "TB is biggest.", working: "\\text{TB}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** TB" },
        },
        {
          id: "olcs-u1-su-q11", difficulty: "core", totalMarks: 2,
          stem: "How many bits are in 64 MB (1024-based)?",
          response: { type: "numeric", parts: [{ label: "Bits", answer: 536870912 }] },
          markscheme: { principles: [{ kind: "formula", name: "MB in bits", statement: "$1\\text{ MB}=8\\times1024^2$ bits." }], steps: [
            { reasoning: "$64\\times8\\times1024^2$ bits.", working: "64\\times8\\times1024^2", marks: 1, markCode: "M" },
            { reasoning: "= 536 870 912 bits.", working: "536870912", marks: 1, markCode: "A" },
          ], finalAnswer: "536 870 912 bits" },
        },
        {
          id: "olcs-u1-su-q12", difficulty: "core", totalMarks: 1,
          stem: "Mbps as a unit measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Megabytes stored" },
            { id: "b", text: "Megabits per second" },
            { id: "c", text: "Million bytes per minute" },
            { id: "d", text: "Megabytes per second" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Mbps", statement: "Megabits per second — a speed." }], steps: [{ reasoning: "bps = bits per second.", working: "\\text{bits/s}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Megabits per second" },
        },
        {
          id: "olcs-u1-su-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a storage size (e.g. MB) and a transmission speed (e.g. Mbps), including how to convert between them.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Size vs speed", statement: "Bytes vs bits per second; $1\\text{ MB}=8\\text{ Mb}$." }], steps: [
            { reasoning: "Storage size = amount of data (bytes).", working: "\\text{bytes}", marks: 1, markCode: "M" },
            { reasoning: "Speed = data per unit time (bits/s).", working: "\\text{bits/s}", marks: 1, markCode: "M" },
            { reasoning: "Convert MB to Mb by multiplying by 8.", working: "\\times8", marks: 1, markCode: "M" },
            { reasoning: "Time = size in Mb $\\div$ speed in Mbps.", marks: 1, markCode: "A" },
          ], finalAnswer: "Storage is an amount (bytes); speed is a rate (bits/s). Multiply MB by 8 to get Mb for time calculations." },
        },
        {
          id: "olcs-u1-su-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is NOT a storage unit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "MB" },
            { id: "b", text: "Gbps" },
            { id: "c", text: "kB" },
            { id: "d", text: "TB" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Units", statement: "Gbps is a speed; kB/MB/TB are storage." }], steps: [{ reasoning: "Gbps = gigabits per second, a rate.", working: "\\text{Gbps}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Gbps" },
        },
        {
          id: "olcs-u1-su-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A 200 MB file is downloaded over a 50 Mbps connection. Calculate the minimum transfer time in seconds.",
          response: { type: "numeric", parts: [{ label: "Seconds", answer: 32 }] },
          markscheme: { principles: [{ kind: "formula", name: "Transfer time", statement: "$t=\\text{Mb}/\\text{Mbps}$ seconds." }], steps: [
            { reasoning: "200 MB = $200\\times8=1600$ Mb.", working: "1600", marks: 1, markCode: "M" },
            { reasoning: "Time = $1600/50$.", working: "1600\\div50", marks: 1, markCode: "M" },
            { reasoning: "= 32 seconds.", working: "32", marks: 1, markCode: "A" },
          ], finalAnswer: "32 s" },
        },
        {
          id: "olcs-u1-su-q16", difficulty: "foundation", totalMarks: 1,
          stem: "In computing, 1 kilobyte equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1024 bytes" },
            { id: "b", text: "8 bytes" },
            { id: "c", text: "1024 bits" },
            { id: "d", text: "1000 bytes" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "kB", statement: "$2^{10}=1024$ bytes." }], steps: [{ reasoning: "1024-based kB.", working: "1024", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 1024 bytes" },
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
            { id: "a", text: "MP3 song" },
            { id: "b", text: "ZIP archive of a program" },
            { id: "c", text: "MPEG video" },
            { id: "d", text: "JPEG photo" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Lossless", statement: "Exact restoration — needed for programs/data." }], steps: [{ reasoning: "Programs need exact bytes.", working: "\\text{ZIP}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** ZIP archive" },
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
        {
          id: "olcs-u1-comp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Lossy compression works by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Discarding data considered unimportant" },
            { id: "b", text: "Duplicating the data" },
            { id: "c", text: "Rearranging bits only" },
            { id: "d", text: "Encrypting the data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Lossy", statement: "Discards imperceptible detail." }], steps: [{ reasoning: "Lossy throws away detail.", working: "\\text{discard}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Discarding unimportant data" },
        },
        {
          id: "olcs-u1-comp-q6", difficulty: "core", totalMarks: 2,
          stem: "A file shrinks from 30 MB to 3 MB after compression. Calculate the compression ratio.",
          response: { type: "numeric", parts: [{ label: "Ratio", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Ratio", statement: "original $\\div$ compressed." }], steps: [
            { reasoning: "$30/3=10$.", working: "30\\div3", marks: 1, markCode: "M" },
            { reasoning: "Ratio 10:1.", working: "10", marks: 1, markCode: "A" },
          ], finalAnswer: "10:1" },
        },
        {
          id: "olcs-u1-comp-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Which format uses lossless compression?",
          response: { type: "mcq", choices: [
            { id: "a", text: "MP3 audio" },
            { id: "b", text: "JPEG photo" },
            { id: "c", text: "MPEG video" },
            { id: "d", text: "PNG image" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "PNG", statement: "Lossless image format." }], steps: [{ reasoning: "PNG restores exactly.", working: "\\text{PNG}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** PNG image" },
        },
        {
          id: "olcs-u1-comp-q8", difficulty: "core", totalMarks: 2,
          stem: "A file compresses with a ratio of 8:1. If the original was 64 MB, what is the compressed size?",
          response: { type: "numeric", parts: [{ label: "MB", answer: 8 }] },
          markscheme: { principles: [{ kind: "formula", name: "Ratio", statement: "compressed = original $\\div$ ratio." }], steps: [
            { reasoning: "$64/8=8$ MB.", working: "64\\div8", marks: 1, markCode: "M" },
            { reasoning: "Correct size.", working: "8", marks: 1, markCode: "A" },
          ], finalAnswer: "8 MB" },
        },
        {
          id: "olcs-u1-comp-q9", difficulty: "core", totalMarks: 2,
          stem: "Why must executable programs never be compressed with a lossy method?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Exact data", statement: "Programs must restore byte-perfect." }], steps: [
            { reasoning: "Lossy discards data permanently.", working: "\\text{data lost}", marks: 1, markCode: "M" },
            { reasoning: "Any changed byte can corrupt the program.", marks: 1, markCode: "A" },
          ], finalAnswer: "Lossy compression would permanently alter bytes, corrupting the program; lossless is required." },
        },
        {
          id: "olcs-u1-comp-q10", difficulty: "core", totalMarks: 1,
          stem: "Saving the same JPEG photo repeatedly causes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lossless restoration" },
            { id: "b", text: "Progressive quality loss" },
            { id: "c", text: "No change at all" },
            { id: "d", text: "The file to shrink forever" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Generation loss", statement: "Lossy re-saving degrades quality each time." }], steps: [{ reasoning: "Each lossy save loses more detail.", working: "\\text{generation loss}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Progressive quality loss" },
        },
        {
          id: "olcs-u1-comp-q11", difficulty: "core", totalMarks: 2,
          stem: "A 16 MB file compresses to 2 MB. What is the compression ratio (as a single number)?",
          response: { type: "numeric", parts: [{ label: "Ratio", answer: 8 }] },
          markscheme: { principles: [{ kind: "formula", name: "Ratio", statement: "original $\\div$ compressed = $16/2$." }], steps: [
            { reasoning: "$16/2=8$.", working: "16\\div2", marks: 1, markCode: "M" },
            { reasoning: "Ratio 8:1.", working: "8", marks: 1, markCode: "A" },
          ], finalAnswer: "8:1" },
        },
        {
          id: "olcs-u1-comp-q12", difficulty: "core", totalMarks: 2,
          stem: "MP3 compression mainly removes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The song's title" },
            { id: "b", text: "Sounds near or below the threshold of hearing" },
            { id: "c", text: "All high frequencies" },
            { id: "d", text: "The left channel only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "MP3", statement: "Removes imperceptible audio detail." }], steps: [{ reasoning: "Discarded parts are hard to hear.", working: "\\text{inaudible}", marks: 1, markCode: "M" }, { reasoning: "Result is lossy but small.", working: "\\text{lossy}", marks: 1, markCode: "A" }], finalAnswer: "**(b)** Sounds near/below hearing threshold" },
        },
        {
          id: "olcs-u1-comp-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A photographer wants to archive original photos long-term and also upload small versions to a website. Recommend compression for each and justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Compression choice", statement: "Archive needs fidelity; web needs small size." }], steps: [
            { reasoning: "Archive: lossless (PNG/TIFF/RAW-like) to preserve every detail.", working: "\\text{lossless}", marks: 1, markCode: "M" },
            { reasoning: "Justify: originals must not degrade over time.", working: "\\text{no loss}", marks: 1, markCode: "M" },
            { reasoning: "Web: lossy (JPEG) for small fast-loading files.", working: "\\text{lossy}", marks: 1, markCode: "M" },
            { reasoning: "Justify: imperceptible loss acceptable for sharing.", marks: 1, markCode: "A" },
          ], finalAnswer: "Archive lossless to preserve originals; website lossy JPEG for small size with acceptable quality loss." },
        },
        {
          id: "olcs-u1-comp-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A ZIP archive is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encryption" },
            { id: "b", text: "Lossless compression" },
            { id: "c", text: "Error detection" },
            { id: "d", text: "Lossy compression" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "ZIP", statement: "Lossless archive format." }], steps: [{ reasoning: "ZIP restores files exactly.", working: "\\text{lossless}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Lossless compression" },
        },
        {
          id: "olcs-u1-comp-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A 100 MB video compresses to 4 MB. Calculate the percentage reduction in file size.",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 96 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reduction", statement: "Reduction $= (1-\\text{compressed/original})\\times100\\%$." }], steps: [
            { reasoning: "Saved = $100-4=96$ MB.", working: "96", marks: 1, markCode: "M" },
            { reasoning: "$96/100\\times100=96\\%$.", working: "96\\%", marks: 1, markCode: "M" },
            { reasoning: "Correct percentage.", working: "96", marks: 1, markCode: "A" },
          ], finalAnswer: "96%" },
        },
        {
          id: "olcs-u1-comp-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Lossless compression can restore a file to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The exact original" },
            { id: "b", text: "A half-size copy" },
            { id: "c", text: "Its encrypted form" },
            { id: "d", text: "A smaller but different version" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Lossless", statement: "Fully reversible." }], steps: [{ reasoning: "No data is lost.", working: "\\text{exact}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** The exact original" },
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

import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "olcs-u9-lesson-9-3",
  code: "9-3",
  title: "Data Representation Revision",
  goal: "I CAN apply number system, character and media representation knowledge to exam-style questions.",
  standards: ["2210 9.1", "2210 9.2", "2210 9.3"],
  vocabulary: [
    { term: "Place value", definition: "Position-based value of a digit." },
    { term: "Nibble", definition: "4 bits = 1 hex digit." },
    { term: "Pixel", definition: "Smallest unit of a bitmap image." },
    { term: "Resolution", definition: "Number of pixels in an image." },
    { term: "Sampling", definition: "Measuring sound amplitude at intervals." },
  ],
  concepts: [
    {
      id: "olcs-u9-revision",
      title: "Data representation revision",
      skill: "Apply conversions, character codes and media concepts to questions.",
      lesson: {
        sections: [
          { heading: "Quick conversion check", body: "- Binary → denary: sum place values.\n- Denary → binary: divide by 2.\n- Binary → hex: group in 4s.\n- Hex → binary: expand each digit to 4 bits.\n\nPractise: 1011₂ = 11₁₀ = 0xB; 13₁₀ = 1101₂ = 0xD." },
          { heading: "Key facts to memorise", body: "- ASCII = 128 characters, 7 bits.\n- Unicode/UTF-8 = universal coverage.\n- Bitmap size = width × height × colour depth / 8.\n- Vector = shapes, scales perfectly.\n- Lossy = smaller but quality loss; lossless = exact." },
        ],
        keyFormulas: [
          { name: "Conversions", statement: "Denary↔binary↔hex fluently" },
        ],
        workedExample: {
          problem: "A 100×100 bitmap uses 8 bits per pixel. Calculate file size in bytes.",
          solution: "100 × 100 × 8 / 8 = 10,000 bytes ≈ 10 KB.",
        },
      },
      questions: [
        {
          id: "olcs-u9-rv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "How many bits in a byte?",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" },
            { id: "b", text: "8" },
            { id: "c", text: "4" },
            { id: "d", text: "16" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Byte", statement: "8 bits." }], steps: [{ reasoning: "Byte = 8 bits.", working: "8", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 8" },
        },
        {
          id: "olcs-u9-rv-q2", difficulty: "core", totalMarks: 2,
          stem: "Convert hexadecimal 0x9 to binary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hex→binary", statement: "4 bits per digit." }], steps: [
            { reasoning: "$9 = 1001$.", working: "1001", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "1001" },
        },
        {
          id: "olcs-u9-rv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two reasons Unicode replaced ASCII for modern systems.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unicode", statement: "Universal coverage." }], steps: [
            { reasoning: "ASCII limited to 128 English chars.", working: "\\text{128}", marks: 1, markCode: "M" },
            { reasoning: "Unicode covers world scripts and emoji.", working: "\\text{universal}", marks: 1, markCode: "M" },
            { reasoning: "Enables multilingual apps.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "ASCII too limited; Unicode covers all world scripts." },
        },
        {
          id: "olcs-u9-rv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Data representation exam review.",
          parts: [
            { label: "a", prompt: "Convert binary 10101 to denary.", marks: 2 },
            { label: "b", prompt: "Convert denary 20 to hexadecimal.", marks: 2 },
            { label: "c", prompt: "Why are vector images used for logos?", marks: 2 },
            { label: "d", prompt: "JPEG or PNG for a photograph? Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Data representation", statement: "Conversions + media choices." },
          ], steps: [
            { part: "a", reasoning: "$16+0+4+0+1=21$.", working: "21", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$20 = 0x14$.", working: "0x14", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Scales without pixelation.", working: "\\text{scale}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Small file size.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "JPEG: lossy, small.", working: "\\text{jpeg}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Good for photos.", working: "\\text{photos}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Justified choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 21 (b) 0x14 (c) scales perfectly (d) JPEG for photos" },
        },
        {
          id: "olcs-u9-rv-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Binary 1010 is equal to which denary number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "12" },
            { id: "c", text: "16" },
            { id: "d", text: "10" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Binary to denary", statement: "Sum place values." }], steps: [{ reasoning: "$8+0+2+0=10$.", working: "10", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 10" },
        },
        {
          id: "olcs-u9-rv-q6", difficulty: "core", totalMarks: 2,
          stem: "Convert binary 11011 to denary.",
          response: { type: "numeric", parts: [{ label: "a", answer: 27 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary to denary", statement: "Sum place values." }], steps: [
            { reasoning: "$16+8+0+2+1=27$.", working: "16+8+2+1=27", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "27" },
        },
        {
          id: "olcs-u9-rv-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Each hexadecimal digit represents how many bits?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "8" },
            { id: "c", text: "4" },
            { id: "d", text: "16" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Nibble", statement: "4 bits = 1 hex digit." }], steps: [{ reasoning: "$16=2^4$, so one hex digit = 4 bits.", working: "4", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 4" },
        },
        {
          id: "olcs-u9-rv-q8", difficulty: "core", totalMarks: 2,
          stem: "Add binary 110 + 011.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column method with carries." }], steps: [
            { reasoning: "$110 + 011 = 1001$.", working: "1001", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "1001" },
        },
        {
          id: "olcs-u9-rv-q9", difficulty: "core", totalMarks: 2,
          stem: "What is the denary value of hexadecimal 0x1A?",
          response: { type: "numeric", parts: [{ label: "a", answer: 26 }] },
          markscheme: { principles: [{ kind: "principle", name: "Hex to denary", statement: "Multiply by powers of 16." }], steps: [
            { reasoning: "$1\\times16 + 10\\times1 = 26$.", working: "16+10=26", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "26" },
        },
        {
          id: "olcs-u9-rv-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Which character encoding should be used for a website supporting many languages?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Binary" },
            { id: "b", text: "ASCII" },
            { id: "c", text: "UTF-8" },
            { id: "d", text: "Denary" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Unicode/UTF-8", statement: "Universal coverage." }], steps: [{ reasoning: "UTF-8 covers world scripts.", working: "\\text{utf8}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** UTF-8" },
        },
        {
          id: "olcs-u9-rv-q11", difficulty: "core", totalMarks: 2,
          stem: "A bitmap image is 50 × 50 pixels with 8 bits per pixel. Calculate the file size in bytes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Bitmap size", statement: "width × height × bpp / 8." }], steps: [
            { reasoning: "$50 \\times 50 \\times 8 / 8 = 2500$ bytes.", working: "2500", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "2500 bytes" },
        },
        {
          id: "olcs-u9-rv-q12", difficulty: "core", totalMarks: 2,
          stem: "A bitmap is 40 × 30 pixels and uses 8 bits per pixel. What is the file size in bytes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1200 }] },
          markscheme: { principles: [{ kind: "principle", name: "Bitmap size", statement: "width × height × bpp / 8." }], steps: [
            { reasoning: "$40 \\times 30 \\times 8 / 8 = 1200$ bytes.", working: "1200", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "1200 bytes" },
        },
        {
          id: "olcs-u9-rv-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these formats uses lossless compression?",
          response: { type: "mcq", choices: [
            { id: "a", text: "MP3" },
            { id: "b", text: "JPEG" },
            { id: "c", text: "PNG" },
            { id: "d", text: "MP4" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Lossless", statement: "Exact copy, no data discarded." }], steps: [{ reasoning: "PNG is lossless.", working: "\\text{png}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** PNG" },
        },
        {
          id: "olcs-u9-rv-q14", difficulty: "challenge", totalMarks: 3,
          stem: "Give two reasons why vector graphics are preferred for a company logo.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Vector", statement: "Scales perfectly, small files." }], steps: [
            { reasoning: "Vector images scale to any size without pixelation.", working: "\\text{scales}", marks: 1, markCode: "M" },
            { reasoning: "They have very small file sizes.", working: "\\text{small}", marks: 1, markCode: "M" },
            { reasoning: "Both reasons clearly stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Scales perfectly at any size and has a small file size." },
        },
        {
          id: "olcs-u9-rv-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Increasing the sample rate of a sound recording…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reduces the file size" },
            { id: "b", text: "Has no effect on quality" },
            { id: "c", text: "Removes background noise" },
            { id: "d", text: "Improves quality but increases the file size" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Sampling", statement: "Rate affects quality and size." }], steps: [{ reasoning: "Higher rate = more accurate but more data.", working: "\\text{rate}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Improves quality but increases file size" },
        },
        {
          id: "olcs-u9-rv-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Data representation exam practice.",
          parts: [
            { label: "a", prompt: "Convert binary 11100 to hexadecimal.", marks: 2 },
            { label: "b", prompt: "Convert denary 19 to binary.", marks: 2 },
            { label: "c", prompt: "Explain why Unicode is preferred to ASCII for modern applications.", marks: 2 },
            { label: "d", prompt: "A photograph must be stored online. Recommend JPEG or PNG and justify your choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Data representation", statement: "Conversions + representation choices." },
          ], steps: [
            { part: "a", reasoning: "$11100_2 = 28 = 0x1C$.", working: "0x1C", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$19 = 16+2+1 = 10011_2$.", working: "10011", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "ASCII limited to ~128 English characters.", working: "\\text{128}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Unicode covers world scripts and symbols.", working: "\\text{unicode}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "JPEG: lossy compression gives small files.", working: "\\text{jpeg}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Suitable for photographs.", working: "\\text{photos}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Justified choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 0x1C (b) 10011 (c) universal coverage (d) JPEG for photos" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u9-9-3-notes", title: "Data representation revision — notes", summary: "Conversion practice and key facts for exams.",
      sections: [
        { heading: "Conversions", body: "Practice binary↔denary↔hex until fluent — common exam questions." },
        { heading: "Key facts", body: "ASCII=128; Unicode=universal; bitmap size formula; vector=shapes; lossy vs lossless." },
      ] },
  ],
};

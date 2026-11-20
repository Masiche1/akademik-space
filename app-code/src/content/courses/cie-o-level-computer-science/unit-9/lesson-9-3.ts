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
            { id: "a", text: "8" }, { id: "b", text: "4" }, { id: "c", text: "16" }, { id: "d", text: "32" },
          ], correctChoiceId: "a" },
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

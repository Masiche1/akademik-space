import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "olcs-u9-lesson-9-1",
  code: "9-1",
  title: "Number Systems",
  goal: "I CAN convert between denary, binary and hexadecimal, and add binary numbers.",
  standards: ["2210 9.1", "2210 9.2"],
  vocabulary: [
    { term: "Denary", definition: "Base-10 number system (digits 0-9) — everyday numbers." },
    { term: "Binary", definition: "Base-2 system using only 0 and 1 — how computers store data." },
    { term: "Hexadecimal", definition: "Base-16 system using 0-9 and A-F — compact binary shorthand." },
    { term: "Bit", definition: "Single binary digit (0 or 1)." },
    { term: "Nibble", definition: "Group of 4 bits — equals one hexadecimal digit." },
    { term: "Place value", definition: "Each position's value = base raised to its position." },
  ],
  concepts: [
    {
      id: "olcs-u9-systems",
      title: "Denary, binary and hexadecimal",
      skill: "Convert numbers between bases and understand place values.",
      lesson: {
        sections: [
          { heading: "Place value", body: "Each digit's value depends on position: in denary, $10^0, 10^1, 10^2$... In binary: $2^0, 2^1, 2^2$...\n\nExample: binary `1011` = $1\\times8 + 0\\times4 + 1\\times2 + 1\\times1 = 11$ denary." },
          { heading: "Binary ↔ denary", body: "- **Binary → denary**: sum place values of 1s.\n- **Denary → binary**: repeatedly divide by 2, record remainders bottom-up.\n\nExample: 13 → 13/2=6 r1, 6/2=3 r0, 3/2=1 r1, 1/2=0 r1 → `1101`." },
          { heading: "Hexadecimal", body: "Base-16: digits 0-9 then A-F (10-15). Each hex digit = 4 bits (a nibble).\n\nConversions:\n- Binary → hex: group bits in 4s, convert each group.\n- Hex → denary: multiply each digit by $16^n$.\n\nExample: `0x2A` = $2\\times16 + 10 = 42$." },
        ],
        keyFormulas: [
          { name: "Binary value", statement: "Sum of $2^i$ for each 1 bit" },
          { name: "Hex digit", statement: "4 bits = 1 hex digit" },
        ],
        workedExample: {
          problem: "Convert binary 1101 to denary and hexadecimal.",
          solution: "Denary: 8+4+0+1 = 13. Hex: 1101 = 0xD (13).",
        },
      },
      questions: [
        {
          id: "olcs-u9-ns-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Binary uses which digits?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0 and 1" }, { id: "b", text: "0-9" }, { id: "c", text: "0-9 and A-F" }, { id: "d", text: "1 and 2" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Binary", statement: "Base-2, digits 0-1." }], steps: [{ reasoning: "Binary = 0/1.", working: "0,1", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 0 and 1" },
        },
        {
          id: "olcs-u9-ns-q2", difficulty: "core", totalMarks: 2,
          stem: "Convert binary 1010 to denary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary→denary", statement: "Sum place values." }], steps: [
            { reasoning: "$8+0+2+0=10$.", working: "8+2=10", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u9-ns-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Convert denary 26 to binary and hexadecimal.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conversions", statement: "Divide by 2; group by 4." }], steps: [
            { reasoning: "26 → 11010 binary.", working: "11010", marks: 1, markCode: "M" },
            { reasoning: "11010 → 0x1A hex.", working: "0x1A", marks: 1, markCode: "M" },
            { reasoning: "Correct methods.", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "Binary 11010; hexadecimal 0x1A." },
        },
        {
          id: "olcs-u9-ns-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Number systems review.",
          parts: [
            { label: "a", prompt: "Convert binary 1110 to denary.", marks: 2 },
            { label: "b", prompt: "Convert denary 9 to binary.", marks: 2 },
            { label: "c", prompt: "Convert binary 1011 to hexadecimal.", marks: 2 },
            { label: "d", prompt: "Why does one hex digit equal 4 bits?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Base conversion", statement: "Place values across bases." },
          ], steps: [
            { part: "a", reasoning: "$8+4+2+0=14$.", working: "14", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$9 = 8+1 = 1001$.", working: "1001", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$1011 = 0xB$.", working: "0xB", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$16=2^4$ so each hex digit covers 4 bits.", working: "16=2^4", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Place value explanation.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 14 (b) 1001 (c) 0xB (d) 16=2^4" },
        },
      ],
    },
    {
      id: "olcs-u9-binary-add",
      title: "Binary addition",
      skill: "Add binary numbers including carrying.",
      lesson: {
        sections: [
          { heading: "Binary addition rules", body: "Same as denary but base-2:\n- $0+0=0$, $0+1=1$, $1+0=1$, $1+1=10$ (write 0, carry 1).\n- $1+1+1=11$ (write 1, carry 1)." },
          { heading: "Column method", body: "Add right to left, carrying 1 when a column sums to 2 or more — identical method to denary addition, just different digits." },
          { heading: "Example", body: "```\n  1011\n+ 0110\n------\n 10001\n```\nRight column: 1+0=1. Next: 1+1=10 → write 0 carry 1. Next: 0+1+1=10 → write 0 carry 1. Last: 1+0+1=10 → write 0 carry 1 → final carry 1. Result: `10001` (=17)." },
        ],
        keyFormulas: [
          { name: "Binary add", statement: "1+1=10 (write 0, carry 1)" },
        ],
        workedExample: {
          problem: "Add binary 110 + 101.",
          solution: "110+101: right 0+1=1; middle 1+0=1; left 1+1=10 → write 0 carry 1 → result 1011 (=11).",
        },
      },
      questions: [
        {
          id: "olcs-u9-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In binary, 1+1 equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" }, { id: "b", text: "2" }, { id: "c", text: "11" }, { id: "d", text: "01" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "1+1=10 carry." }], steps: [{ reasoning: "Write 0 carry 1.", working: "10", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 10" },
        },
        {
          id: "olcs-u9-ba-q2", difficulty: "core", totalMarks: 2,
          stem: "Add binary 101 + 010.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary add", statement: "Column method." }], steps: [
            { reasoning: "$101+010=111$.", working: "111", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "111" },
        },
        {
          id: "olcs-u9-ba-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Add binary 111 + 001, showing carries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Carry", statement: "Carry when column sums ≥2." }], steps: [
            { reasoning: "Right: 1+1=10 → 0 carry 1.", working: "0 carry", marks: 1, markCode: "M" },
            { reasoning: "Middle: 1+0+1=10 → 0 carry 1.", working: "0 carry", marks: 1, markCode: "M" },
            { reasoning: "Left: 1+0+1=10 → 0 carry 1 → final 1.", working: "1000", marks: 1, markCode: "M" },
            { reasoning: "Result 1000.", marks: 1, markCode: "A" },
          ], finalAnswer: "1000" },
        },
        {
          id: "olcs-u9-ba-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Binary arithmetic review.",
          parts: [
            { label: "a", prompt: "State the rule for 1+1 in binary.", marks: 1 },
            { label: "b", prompt: "Add binary 10 + 11.", marks: 2 },
            { label: "c", prompt: "Add binary 101 + 111.", marks: 3 },
            { label: "d", prompt: "Why is binary addition similar to denary addition?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Binary addition", statement: "Column method with carries." },
          ], steps: [
            { part: "a", reasoning: "Write 0, carry 1.", working: "10", marks: 1, markCode: "B" },
            { part: "b", reasoning: "$10+11=101$.", working: "101", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$101+111=1100$.", working: "1100", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct carries.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct result.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Same column method.", working: "\\text{columns}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Carry when sum reaches base.", working: "\\text{carry}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) carry rule (b) 101 (c) 1100 (d) same column method" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u9-9-1-notes", title: "Number systems — notes", summary: "Denary/binary/hexadecimal conversion and binary addition.",
      sections: [
        { heading: "Conversion", body: "Binary→denary: sum place values. Denary→binary: divide by 2. Hex: 4 bits per digit." },
        { heading: "Addition", body: "Column method; 1+1=10 (carry). Same structure as denary." },
      ] },
  ],
};

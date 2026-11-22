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
            { id: "a", text: "0-9 and A-F" },
            { id: "b", text: "0 and 1" },
            { id: "c", text: "1 and 2" },
            { id: "d", text: "0-9" },
          ], correctChoiceId: "b" },
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
        {
          id: "olcs-u9-ns-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a 4-bit binary number, the place value of the leftmost bit is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "4" },
            { id: "d", text: "8" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Place value", statement: "Powers of 2 from right." }], steps: [{ reasoning: "Place values are $2^3, 2^2, 2^1, 2^0$; leftmost is $2^3=8$.", working: "2^3=8", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 8" },
        },
        {
          id: "olcs-u9-ns-q6", difficulty: "core", totalMarks: 2,
          stem: "Convert binary 11001 to denary.",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary to denary", statement: "Sum place values of 1 bits." }], steps: [
            { reasoning: "$16+0+0+2+1=25$.", working: "16+2+1=25", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "25" },
        },
        {
          id: "olcs-u9-ns-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The hexadecimal digit F represents which denary value?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "16" },
            { id: "c", text: "17" },
            { id: "d", text: "15" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Hex digits", statement: "0-9 then A-F = 10-15." }], steps: [{ reasoning: "A=10, B=11, C=12, D=13, E=14, F=15.", working: "F=15", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 15" },
        },
        {
          id: "olcs-u9-ns-q8", difficulty: "core", totalMarks: 1,
          stem: "Denary 7 is represented in binary as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "101" },
            { id: "b", text: "111" },
            { id: "c", text: "1000" },
            { id: "d", text: "110" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Denary to binary", statement: "Sum powers of 2." }], steps: [{ reasoning: "$7 = 4+2+1 = 111_2$.", working: "111", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 111" },
        },
        {
          id: "olcs-u9-ns-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Convert hexadecimal 0x5A to denary.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: { principles: [{ kind: "principle", name: "Hex to denary", statement: "Multiply each digit by power of 16." }], steps: [
            { reasoning: "$5\\times16 + 10\\times1$.", working: "5*16+10", marks: 1, markCode: "M" },
            { reasoning: "$80+10=90$.", working: "90", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "90" },
        },
        {
          id: "olcs-u9-ns-q10", difficulty: "core", totalMarks: 2,
          stem: "Convert binary 101010 to denary.",
          response: { type: "numeric", parts: [{ label: "a", answer: 42 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary to denary", statement: "Sum place values." }], steps: [
            { reasoning: "$32+0+8+0+2+0=42$.", working: "32+8+2=42", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "42" },
        },
        {
          id: "olcs-u9-ns-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Convert hexadecimal 0x3F into binary and then into denary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hex conversions", statement: "4 bits per hex digit." }], steps: [
            { reasoning: "$3 \\to 0011$ and $F \\to 1111$.", working: "0011 1111", marks: 1, markCode: "M" },
            { reasoning: "Combined binary: $00111111$.", working: "00111111", marks: 1, markCode: "M" },
            { reasoning: "Denary: $32+16+8+4+2+1=63$.", working: "63", marks: 1, markCode: "M" },
            { reasoning: "Both conversions correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "Binary 00111111; denary 63." },
        },
        {
          id: "olcs-u9-ns-q12", difficulty: "foundation", totalMarks: 1,
          stem: "A nibble is a group of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4 bits" },
            { id: "b", text: "2 bits" },
            { id: "c", text: "16 bits" },
            { id: "d", text: "8 bits" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Nibble", statement: "4 bits = 1 hex digit." }], steps: [{ reasoning: "Nibble = 4 bits.", working: "4", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 4 bits" },
        },
        {
          id: "olcs-u9-ns-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Binary 11111 is equal to which denary number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" },
            { id: "b", text: "30" },
            { id: "c", text: "15" },
            { id: "d", text: "31" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Binary to denary", statement: "Sum place values." }], steps: [{ reasoning: "$16+8+4+2+1=31$.", working: "31", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 31" },
        },
        {
          id: "olcs-u9-ns-q14", difficulty: "core", totalMarks: 1,
          stem: "Why is hexadecimal often used as a shorthand for binary?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It uses fewer digits than denary" },
            { id: "b", text: "It is more compact and less error-prone to read and write" },
            { id: "c", text: "Computers cannot read binary directly" },
            { id: "d", text: "It stores more data in the same space" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Hex purpose", statement: "Compact binary representation." }], steps: [{ reasoning: "Each hex digit replaces 4 binary digits.", working: "16=2^4", marks: 1, markCode: "B" }], finalAnswer: "**(a)** More compact and less error-prone" },
        },
        {
          id: "olcs-u9-ns-q15", difficulty: "core", totalMarks: 3,
          stem: "Convert denary 40 to hexadecimal, showing your working.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Denary to hex", statement: "Powers of 16." }], steps: [
            { reasoning: "$40 = 2\\times16 + 8$.", working: "2*16+8", marks: 1, markCode: "M" },
            { reasoning: "Digits: 2 and 8 → $0x28$.", working: "0x28", marks: 1, markCode: "M" },
            { reasoning: "Correct result.", marks: 1, markCode: "A" },
          ], finalAnswer: "0x28" },
        },
        {
          id: "olcs-u9-ns-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Number systems revision.",
          parts: [
            { label: "a", prompt: "Convert binary 10000 to denary.", marks: 2 },
            { label: "b", prompt: "Convert denary 30 to hexadecimal.", marks: 2 },
            { label: "c", prompt: "Convert binary 110010 to hexadecimal.", marks: 2 },
            { label: "d", prompt: "Explain one advantage of hexadecimal over binary for programmers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Base conversion", statement: "Fluent conversion across bases." },
          ], steps: [
            { part: "a", reasoning: "$10000_2 = 16$.", working: "16", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$30 = 16+14 = 0x1E$.", working: "0x1E", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$110010 \\to 0011\\,0010 \\to 0x32$.", working: "0x32", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct grouping.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Fewer digits — compact.", working: "\\text{compact}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Easier to read/write, fewer errors.", working: "\\text{readable}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 16 (b) 0x1E (c) 0x32 (d) compact, easier to read" },
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
            { id: "a", text: "11" },
            { id: "b", text: "01" },
            { id: "c", text: "2" },
            { id: "d", text: "10" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u9-ba-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In binary addition, 1 + 0 equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "0" },
            { id: "c", text: "11" },
            { id: "d", text: "10" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column rules." }], steps: [{ reasoning: "$1+0=1$.", working: "1", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 1" },
        },
        {
          id: "olcs-u9-ba-q6", difficulty: "core", totalMarks: 2,
          stem: "Add binary 1101 and 0110. What is the denary value of the result?",
          response: { type: "numeric", parts: [{ label: "a", answer: 19 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column method with carries." }], steps: [
            { reasoning: "$1101 + 0110 = 10011$.", working: "10011", marks: 1, markCode: "M" },
            { reasoning: "$10011_2 = 16+2+1 = 19$.", working: "19", marks: 1, markCode: "A" },
          ], finalAnswer: "19" },
        },
        {
          id: "olcs-u9-ba-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Binary 10 + 01 equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "01" },
            { id: "b", text: "100" },
            { id: "c", text: "10" },
            { id: "d", text: "11" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "No carries needed." }], steps: [{ reasoning: "$10+01=11$.", working: "11", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 11" },
        },
        {
          id: "olcs-u9-ba-q8", difficulty: "core", totalMarks: 1,
          stem: "Binary 1101 + 0110 equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "10101" },
            { id: "b", text: "10011" },
            { id: "c", text: "11011" },
            { id: "d", text: "10001" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column method with carries." }], steps: [{ reasoning: "Right-to-left carries give $10011$.", working: "10011", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 10011" },
        },
        {
          id: "olcs-u9-ba-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Add binary 1110 + 0011, showing each column.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Carry when column sums to 2 or more." }], steps: [
            { reasoning: "Right: $0+1=1$.", working: "1", marks: 1, markCode: "M" },
            { reasoning: "Next: $1+1=10$ → write 0, carry 1.", working: "0 c1", marks: 1, markCode: "M" },
            { reasoning: "Remaining columns carry through → $10001$.", working: "10001", marks: 1, markCode: "A" },
          ], finalAnswer: "10001" },
        },
        {
          id: "olcs-u9-ba-q10", difficulty: "foundation", totalMarks: 1,
          stem: "In binary addition, a column sum of 1 + 1 + 1 (digit plus carry) gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Write 1, carry 1 (result 11)" },
            { id: "b", text: "Write 1, no carry" },
            { id: "c", text: "Write 0, carry 1 (result 10)" },
            { id: "d", text: "Write 0, no carry" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "3 = 11 in binary." }], steps: [{ reasoning: "$1+1+1=11$: write 1, carry 1.", working: "11", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Write 1, carry 1" },
        },
        {
          id: "olcs-u9-ba-q11", difficulty: "core", totalMarks: 2,
          stem: "Add binary 101 + 101. Give the denary value of the sum.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column method." }], steps: [
            { reasoning: "$101 + 101 = 1010$.", working: "1010", marks: 1, markCode: "M" },
            { reasoning: "$1010_2 = 8+2 = 10$.", working: "10", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u9-ba-q12", difficulty: "foundation", totalMarks: 1,
          stem: "In binary column addition, a carry is needed when the column total is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exactly 0" },
            { id: "b", text: "Exactly 1" },
            { id: "c", text: "16" },
            { id: "d", text: "2 or more" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Carry rule", statement: "Carry when sum reaches the base." }], steps: [{ reasoning: "Base 2: sums of 2 or more need a carry.", working: "\\geq 2", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 2 or more" },
        },
        {
          id: "olcs-u9-ba-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Add binary 1001 + 1111, showing carries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column method with carries." }], steps: [
            { reasoning: "Right: $1+1=10$ → 0, carry 1.", working: "0 c1", marks: 1, markCode: "M" },
            { reasoning: "Next: $0+1+1=10$ → 0, carry 1.", working: "0 c1", marks: 1, markCode: "M" },
            { reasoning: "Next: $0+1+1=10$ → 0, carry 1.", working: "0 c1", marks: 1, markCode: "M" },
            { reasoning: "Left: $1+1+1=11$ → 1, carry 1 → $11000$.", working: "11000", marks: 1, markCode: "A" },
          ], finalAnswer: "11000" },
        },
        {
          id: "olcs-u9-ba-q14", difficulty: "core", totalMarks: 1,
          stem: "How many carries are needed when adding binary 1111 + 1111?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Carry count", statement: "Each column sums to 2." }], steps: [{ reasoning: "Every one of the 4 columns produces a carry: $1111+1111=11110$.", working: "4", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olcs-u9-ba-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Add binary 10101 + 01011, showing carries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary addition", statement: "Column method with carries." }], steps: [
            { reasoning: "Right: $1+1=10$ → 0, carry 1.", working: "0 c1", marks: 1, markCode: "M" },
            { reasoning: "Next: $0+1+1=10$ → 0, carry 1.", working: "0 c1", marks: 1, markCode: "M" },
            { reasoning: "Middle columns also produce carries.", working: "carries", marks: 1, markCode: "M" },
            { reasoning: "Final result $100000$.", working: "100000", marks: 1, markCode: "A" },
          ], finalAnswer: "100000" },
        },
        {
          id: "olcs-u9-ba-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Binary addition review.",
          parts: [
            { label: "a", prompt: "State the rule for adding 1 + 1 in binary.", marks: 1 },
            { label: "b", prompt: "Add binary 11 + 11.", marks: 2 },
            { label: "c", prompt: "Add binary 101 + 110.", marks: 3 },
            { label: "d", prompt: "Explain why binary addition uses the same method as denary addition.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Binary addition", statement: "Column method with carries." },
          ], steps: [
            { part: "a", reasoning: "Write 0, carry 1 (result 10).", working: "10", marks: 1, markCode: "B" },
            { part: "b", reasoning: "$11 + 11 = 100$.", working: "100", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$101 + 110 = 1011$.", working: "1011", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct carries.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct result.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Same column-by-column method.", working: "\\text{columns}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Carry when the sum reaches the base.", working: "\\text{carry}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) write 0 carry 1 (b) 100 (c) 1011 (d) same column method" },
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

import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olcs-u1-lesson-1-1",
  code: "1-1",
  title: "Number Systems",
  goal: "I CAN convert between denary, binary and hexadecimal, add binary integers, and explain shifts and two's complement.",
  standards: ["2210 1.1.1", "2210 1.1.2", "2210 1.1.4"],
  vocabulary: [
    { term: "Denary", definition: "Base-10 number system using digits 0-9; everyday counting system." },
    { term: "Binary", definition: "Base-2 system using only 0 and 1; the only system a computer processes directly." },
    { term: "Hexadecimal", definition: "Base-16 system using 0-9 and A-F; compact shorthand for binary." },
    { term: "Overflow", definition: "Error when a result exceeds the range a fixed number of bits can represent." },
    { term: "Two's complement", definition: "Method of representing negative numbers in binary using the place values of a fixed bit length." },
  ],
  concepts: [
    {
      id: "olcs-u1-number-systems",
      title: "Denary, binary and hexadecimal",
      skill: "Convert between number bases and perform binary addition.",
      lesson: {
        sections: [
          { heading: "Place values", body: "Denary: each column is a power of 10 (1, 10, 100...). Binary: powers of 2 (1, 2, 4, 8, 16...). Hexadecimal: powers of 16 (1, 16, 256...), with digits 0-9 then A=10, B=11, C=12, D=13, E=14, F=15.\n\nOne hex digit = exactly 4 bits, so hex is a compact way to write binary: 2 hex digits = 1 byte." },
          { heading: "Conversions", body: "Denary→binary: repeatedly divide by 2 and read remainders bottom-up. Denary→hex: divide by 16. Binary→denary: sum place values of 1-bits. Binary↔hex: group bits in 4s from the right and convert each group.\n\nWorked: $13_{10} = 1101_2 = D_{16}$." },
          { heading: "Binary addition and overflow", body: "Add column by column like denary, carrying when a column exceeds 1. With a fixed bit length (e.g. 8-bit), if the result needs more bits than available, the extra bits are lost — this is **overflow**. $11111111_2 + 1 = 100000000_2$ needs 9 bits, so in 8-bit arithmetic the result wraps to $00000000_2$." },
        ],
        keyFormulas: [
          { name: "Place values", statement: "Binary: $1,2,4,8,16,32...$; Hex: $1,16,256...$" },
          { name: "Overflow", statement: "Result bits > available bits → highest bits discarded" },
        ],
        workedExample: {
          problem: "Convert $45_{10}$ to binary and hexadecimal, then add $00101101_2 + 00001111_2$ in 8 bits.",
          solution: "$45 = 32+8+4+1 = 101101_2$. In hex: $45 = 2\\times16+13 = 2D_{16}$. Addition: $00101101 + 00001111 = 01001100_2$ — no carry out of bit 7, so no overflow.",
        },
      },
      questions: [
        {
          id: "olcs-u1-ns-q1", difficulty: "foundation", totalMarks: 1,
          stem: "What is the denary value of $1011_2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "12" },
            { id: "b", text: "13" },
            { id: "c", text: "11" },
            { id: "d", text: "14" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Binary place values", statement: "8+0+2+1=11." }], steps: [{ reasoning: "$8+2+1=11$.", working: "8+0+2+1=11", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 11" },
        },
        {
          id: "olcs-u1-ns-q2", difficulty: "core", totalMarks: 2,
          stem: "Convert $58_{10}$ to binary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Repeated division", statement: "Divide by 2, read remainders bottom-up." }], steps: [
            { reasoning: "Halve repeatedly: 58→29 r0, 29→14 r1, 14→7 r0, 7→3 r1, 3→1 r1, 1→0 r1.", working: "111010", marks: 1, markCode: "M" },
            { reasoning: "Read remainders bottom-up: $111010_2$.", working: "111010_2", marks: 1, markCode: "A" },
          ], finalAnswer: "$111010_2$" },
        },
        {
          id: "olcs-u1-ns-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Add $101101_2$ and $011011_2$ in 8-bit two's-complement style arithmetic and state whether overflow occurs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "law", name: "Binary addition", statement: "Carry when a column sums to 2 or more." }], steps: [
            { reasoning: "Pad to 8 bits: $00101101 + 00110110$.", working: "00101101+00110110", marks: 1, markCode: "M" },
            { reasoning: "Add columns right to left with carries.", working: "01100011", marks: 1, markCode: "M" },
            { reasoning: "No carry out of the most significant bit.", marks: 1, markCode: "M" },
            { reasoning: "Conclude: no overflow.", marks: 1, markCode: "A" },
          ], finalAnswer: "$01100011_2$; no overflow" },
        },
        {
          id: "olcs-u1-ns-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Number systems review.",
          parts: [
            { label: "a", prompt: "Convert $3A_{16}$ to binary.", marks: 2 },
            { label: "b", prompt: "Convert $110010_2$ to denary.", marks: 2 },
            { label: "c", prompt: "Convert $26_{10}$ to hexadecimal.", marks: 2 },
            { label: "d", prompt: "Explain why hexadecimal is used to represent binary data.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Hex-binary grouping", statement: "Each hex digit = 4 bits." },
          ], steps: [
            { part: "a", reasoning: "$3=0011$, $A=1010$.", working: "00111010", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Result $00111010_2$.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$32+8+2=42$.", working: "42", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Denary 42.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$26=1\\times16+10=1A_{16}$.", working: "1A", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Hex 1A.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "4 bits per hex digit → compact.", working: "\\text{4 bits/digit}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Easier for humans to read/write than long binary strings.", working: "\\text{compact, readable}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Used for memory addresses, colours, checksums.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $00111010_2$ (b) 42 (c) $1A_{16}$ (d) compact and readable" },
        },
        {
          id: "olcs-u1-ns-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What is the denary value of $11010_2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "28" },
            { id: "b", text: "26" },
            { id: "c", text: "20" },
            { id: "d", text: "24" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Binary place values", statement: "$16+8+0+2+0=26$." }], steps: [{ reasoning: "$16+8+2=26$.", working: "16+8+2=26", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 26" },
        },
        {
          id: "olcs-u1-ns-q6", difficulty: "core", totalMarks: 2,
          stem: "Convert $77_{10}$ to binary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Repeated division", statement: "Divide by 2, read remainders bottom-up." }], steps: [
            { reasoning: "Halve repeatedly: remainders are 1, 0, 1, 1, 0, 0, 1.", working: "1001101", marks: 1, markCode: "M" },
            { reasoning: "Read bottom-up: $1001101_2$.", working: "1001101_2", marks: 1, markCode: "A" },
          ], finalAnswer: "$1001101_2$" },
        },
        {
          id: "olcs-u1-ns-q7", difficulty: "core", totalMarks: 2,
          stem: "Convert $10110111_2$ to hexadecimal.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hex-binary grouping", statement: "Group bits in 4s from the right." }], steps: [
            { reasoning: "Group: $1011\\;0111$.", working: "1011 0111", marks: 1, markCode: "M" },
            { reasoning: "$1011=B$, $0111=7$ → $B7_{16}$.", working: "B7", marks: 1, markCode: "A" },
          ], finalAnswer: "$B7_{16}$" },
        },
        {
          id: "olcs-u1-ns-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The hexadecimal digit $F$ represents which denary value?",
          response: { type: "mcq", choices: [
            { id: "a", text: "13" },
            { id: "b", text: "10" },
            { id: "c", text: "16" },
            { id: "d", text: "15" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Hex digits", statement: "A=10 ... F=15." }], steps: [{ reasoning: "$F=15$.", working: "15", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 15" },
        },
        {
          id: "olcs-u1-ns-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Add $01111111_2$ and $00000001_2$ in 8-bit two's-complement arithmetic and state whether overflow occurs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "law", name: "Binary addition", statement: "Carry out of the sign bit signals overflow." }], steps: [
            { reasoning: "Both operands are already 8 bits.", working: "01111111+00000001", marks: 1, markCode: "M" },
            { reasoning: "Sum = $10000000_2$ with a carry out of bit 7.", working: "10000000", marks: 1, markCode: "M" },
            { reasoning: "Carry out of the sign bit means overflow.", marks: 1, markCode: "M" },
            { reasoning: "Conclude overflow; the result represents $-128$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10000000_2$; overflow occurs (represents $-128$)" },
        },
        {
          id: "olcs-u1-ns-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is a valid hexadecimal digit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$F$" },
            { id: "b", text: "$H$" },
            { id: "c", text: "$J$" },
            { id: "d", text: "$G$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Hex digits", statement: "Digits are 0-9 and A-F only." }], steps: [{ reasoning: "Only $F$ is in range $0$–$15$.", working: "F", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $F$" },
        },
        {
          id: "olcs-u1-ns-q11", difficulty: "core", totalMarks: 2,
          stem: "Convert $200_{10}$ to hexadecimal.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Denary to hex", statement: "Divide by 16, read remainders bottom-up." }], steps: [
            { reasoning: "$200 = 12\\times16 + 8$; $12=C$.", working: "C8", marks: 1, markCode: "M" },
            { reasoning: "Result $C8_{16}$.", working: "C8_{16}", marks: 1, markCode: "A" },
          ], finalAnswer: "$C8_{16}$" },
        },
        {
          id: "olcs-u1-ns-q12", difficulty: "challenge", totalMarks: 1,
          stem: "In 8-bit arithmetic, $11111111_2 + 00000001_2$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$11111110_2$" },
            { id: "b", text: "$00000000_2$" },
            { id: "c", text: "$100000000_2$" },
            { id: "d", text: "$100000001_2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Overflow wrap", statement: "Bits beyond the width are discarded." }], steps: [{ reasoning: "True sum needs 9 bits; the extra bit is lost → all zeros.", working: "00000000", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $00000000_2$" },
        },
        {
          id: "olcs-u1-ns-q13", difficulty: "core", totalMarks: 2,
          stem: "Convert $4E_{16}$ to denary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hex place values", statement: "Each hex digit is a power of 16." }], steps: [
            { reasoning: "Expand: $4\\times16 + 14$ ($E=14$).", working: "4\\times16+14", marks: 1, markCode: "M" },
            { reasoning: "= $78$.", working: "78", marks: 1, markCode: "A" },
          ], finalAnswer: "78" },
        },
        {
          id: "olcs-u1-ns-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Convert $3A7_{16}$ to binary, showing the 4-bit form of each hex digit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Hex to binary", statement: "Each hex digit = exactly 4 bits." }], steps: [
            { reasoning: "$3=0011$.", working: "0011", marks: 1, markCode: "M" },
            { reasoning: "$A=1010$ and $7=0111$.", working: "1010,0111", marks: 1, markCode: "M" },
            { reasoning: "Concatenate the three groups.", working: "0011 1010 0111", marks: 1, markCode: "M" },
            { reasoning: "Result $001110100111_2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$001110100111_2$" },
        },
        {
          id: "olcs-u1-ns-q15", difficulty: "core", totalMarks: 2,
          stem: "Convert $100011_2$ to denary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary to denary", statement: "Sum the place values of 1-bits." }], steps: [
            { reasoning: "$32+2+1$.", working: "32+2+1", marks: 1, markCode: "M" },
            { reasoning: "= $35$.", working: "35", marks: 1, markCode: "A" },
          ], finalAnswer: "35" },
        },
        {
          id: "olcs-u1-ns-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Number systems — further practice.",
          parts: [
            { label: "a", prompt: "Convert $5B_{16}$ to binary.", marks: 2 },
            { label: "b", prompt: "Convert $45_{10}$ to hexadecimal.", marks: 2 },
            { label: "c", prompt: "Add $00110101_2 + 00001011_2$ in 8 bits and state whether overflow occurs.", marks: 2 },
            { label: "d", prompt: "Explain why computers use binary rather than denary internally.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Binary suitability", statement: "Two stable states map to 0 and 1." },
          ], steps: [
            { part: "a", reasoning: "$5=0101$, $B=1011$.", working: "0101,1011", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Result $01011011_2$.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$45 = 2\\times16 + 13 = 2D_{16}$.", working: "2D", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Answer $2D_{16}$.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Sum = $01000000_2$.", working: "01000000", marks: 1, markCode: "M" },
            { part: "c", reasoning: "No carry out of bit 7 → no overflow.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Electronic components have two stable states (on/off).", working: "\\text{two states}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "0 and 1 map directly; large noise margins make errors rare.", working: "\\text{noise margin}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Denary would need ten reliably distinguishable voltage levels.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $01011011_2$ (b) $2D_{16}$ (c) $01000000_2$, no overflow (d) two-state circuits suit binary" },
        },
      ],
    },
    {
      id: "olcs-u1-bit-operations",
      title: "Shifts and two's complement",
      skill: "Explain logical shifts and represent negative numbers with two's complement.",
      lesson: {
        sections: [
          { heading: "Logical shifts", body: "A **logical shift** moves every bit one place left or right; the empty position is filled with 0 and the bit shifted out is discarded.\n\nLeft shift by 1 = multiply by 2; right shift by 1 = divide by 2 (integer division). $00101100_2 \\ll 1 = 01011000_2$ (44→88)." },
          { heading: "Two's complement", body: "To represent $-n$ in $k$ bits: write $n$ in binary, invert every bit (one's complement), then add 1.\n\nExample, $-5$ in 8 bits: $5=00000101_2$ → invert $11111010_2$ → add 1 → $11111011_2$. To decode, invert and add 1 again. The leftmost bit is the sign bit: 0 = positive, 1 = negative." },
          { heading: "Why it matters", body: "Two's complement lets one hardware adder handle both addition and subtraction: subtracting $b$ is the same as adding the two's-complement form of $-b$." },
        ],
        keyFormulas: [
          { name: "Two's complement", statement: "Invert all bits, then add 1" },
          { name: "Shift effect", statement: "Left 1 = ×2; right 1 = ÷2" },
        ],
        workedExample: {
          problem: "Represent $-13$ in 8-bit two's complement.",
          solution: "$13=00001101_2$ → invert $11110010_2$ → add 1 → $11110011_2$.",
        },
      },
      questions: [
        {
          id: "olcs-u1-bit-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A left logical shift of $00110110_2$ by 1 gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$01101100_2$" },
            { id: "b", text: "$01101101_2$" },
            { id: "c", text: "$10110110_2$" },
            { id: "d", text: "$00011011_2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Logical shift", statement: "Shift left, fill with 0, discard top bit." }], steps: [{ reasoning: "Move bits left, insert 0 at right.", working: "01101100", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $01101100_2$" },
        },
        {
          id: "olcs-u1-bit-q2", difficulty: "core", totalMarks: 2,
          stem: "Write $-7$ in 8-bit two's complement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement", statement: "Invert then add 1." }], steps: [
            { reasoning: "$7=00000111_2$ → invert $11111000_2$.", working: "11111000", marks: 1, markCode: "M" },
            { reasoning: "Add 1 → $11111001_2$.", working: "11111001_2", marks: 1, markCode: "A" },
          ], finalAnswer: "$11111001_2$" },
        },
        {
          id: "olcs-u1-bit-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Decode $11100101_2$ as an 8-bit two's-complement number, showing each step.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement decode", statement: "Invert and add 1 to recover magnitude." }], steps: [
            { reasoning: "Sign bit is 1 → negative.", marks: 1, markCode: "M" },
            { reasoning: "Invert: $00011010_2$.", working: "00011010", marks: 1, markCode: "M" },
            { reasoning: "Add 1 → $00011011_2 = 27$.", working: "27", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-27$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-27$" },
        },
        {
          id: "olcs-u1-bit-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Bits and shifts review.",
          parts: [
            { label: "a", prompt: "What is the denary effect of shifting $01001100_2$ left by 2?", marks: 2 },
            { label: "b", prompt: "Represent $-20$ in 8-bit two's complement.", marks: 3 },
            { label: "c", prompt: "State the range of values an 8-bit two's-complement number can hold.", marks: 2 },
            { label: "d", prompt: "Explain why two's complement is preferred over sign-magnitude for arithmetic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Shift = multiply", statement: "Left shift by n multiplies by $2^n$." },
          ], steps: [
            { part: "a", reasoning: "$01001100_2=76$; $76\\times4=304$.", working: "304", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Shift left 2 → ×4.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$20=00010100_2$ → invert $11101011_2$.", working: "11101011", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Add 1 → $11101100_2$.", working: "11101100_2", marks: 1, markCode: "M" },
            { part: "b", reasoning: "State the answer.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$-128$ to $+127$.", working: "-128\\ldots127", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Sign bit + 7 magnitude bits.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Single representation for zero; add/sub use same hardware.", working: "\\text{one adder}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "No separate sign handling needed.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) ×4 (b) $11101100_2$ (c) $-128$ to $+127$ (d) unified add/subtract hardware" },
        },
        {
          id: "olcs-u1-bit-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A right logical shift of $10110101_2$ by 1 gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$01011011_2$" },
            { id: "b", text: "$01011010_2$" },
            { id: "c", text: "$11011001_2$" },
            { id: "d", text: "$10110101_2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Logical shift", statement: "Shift right, fill with 0, discard bottom bit." }], steps: [{ reasoning: "Move bits right, insert 0 at left, drop the 1.", working: "01011010", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $01011010_2$" },
        },
        {
          id: "olcs-u1-bit-q6", difficulty: "core", totalMarks: 2,
          stem: "State the denary effect of a left logical shift by 3 on a binary number.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Shift effect", statement: "Each left shift doubles the value." }], steps: [
            { reasoning: "One left shift multiplies by 2.", working: "\\times 2", marks: 1, markCode: "M" },
            { reasoning: "Three shifts multiply by $2^3=8$.", working: "\\times 8", marks: 1, markCode: "A" },
          ], finalAnswer: "Multiplies by 8 ($2^3$)." },
        },
        {
          id: "olcs-u1-bit-q7", difficulty: "core", totalMarks: 2,
          stem: "Write $-9$ in 8-bit two's complement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement", statement: "Invert all bits, then add 1." }], steps: [
            { reasoning: "$9=00001001_2$ → invert $11110110_2$.", working: "11110110", marks: 1, markCode: "M" },
            { reasoning: "Add 1 → $11110111_2$.", working: "11110111_2", marks: 1, markCode: "A" },
          ], finalAnswer: "$11110111_2$" },
        },
        {
          id: "olcs-u1-bit-q8", difficulty: "foundation", totalMarks: 1,
          stem: "In an 8-bit two's-complement number, the sign is given by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The rightmost bit" },
            { id: "b", text: "The leftmost bit" },
            { id: "c", text: "The middle bit" },
            { id: "d", text: "A separate sign bit after the data" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Sign bit", statement: "Most significant bit: 0 positive, 1 negative." }], steps: [{ reasoning: "Leftmost bit is the sign bit.", working: "\\text{MSB}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** The leftmost bit" },
        },
        {
          id: "olcs-u1-bit-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Decode $11110101_2$ as an 8-bit two's-complement number, showing each step.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement decode", statement: "Invert and add 1 to recover magnitude." }], steps: [
            { reasoning: "Sign bit is 1 → negative.", marks: 1, markCode: "M" },
            { reasoning: "Invert: $00001010_2$.", working: "00001010", marks: 1, markCode: "M" },
            { reasoning: "Add 1 → $00001011_2 = 11$.", working: "11", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-11$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-11$" },
        },
        {
          id: "olcs-u1-bit-q10", difficulty: "foundation", totalMarks: 1,
          stem: "The range of values in a 4-bit two's-complement number is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0$ to $15$" },
            { id: "b", text: "$-16$ to $+15$" },
            { id: "c", text: "$-8$ to $+7$" },
            { id: "d", text: "$-7$ to $+8$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement range", statement: "$-2^{n-1}$ to $2^{n-1}-1$." }], steps: [{ reasoning: "$n=4$: $-8$ to $+7$.", working: "-8\\ldots7", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $-8$ to $+7$" },
        },
        {
          id: "olcs-u1-bit-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A right logical shift of $00111010_2$ by 1 gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$10011101_2$" },
            { id: "b", text: "$01110100_2$" },
            { id: "c", text: "$00011101_2$" },
            { id: "d", text: "$00111011_2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Logical shift", statement: "Shift right, fill with 0, discard bottom bit." }], steps: [{ reasoning: "Move bits right, insert 0 at left, drop the trailing 0.", working: "00011101", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $00011101_2$" },
        },
        {
          id: "olcs-u1-bit-q12", difficulty: "core", totalMarks: 2,
          stem: "Write $-12$ in 8-bit two's complement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement", statement: "Invert all bits, then add 1." }], steps: [
            { reasoning: "$12=00001100_2$ → invert $11110011_2$.", working: "11110011", marks: 1, markCode: "M" },
            { reasoning: "Add 1 → $11110100_2$.", working: "11110100_2", marks: 1, markCode: "A" },
          ], finalAnswer: "$11110100_2$" },
        },
        {
          id: "olcs-u1-bit-q13", difficulty: "challenge", totalMarks: 1,
          stem: "$11111010_2$ represents which value in 8-bit two's complement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "250" },
            { id: "b", text: "$+6$" },
            { id: "c", text: "$-5$" },
            { id: "d", text: "$-6$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement decode", statement: "Sign bit 1 → negative; invert and add 1 for magnitude." }], steps: [{ reasoning: "Invert $11111010_2$ → $00000101_2$, add 1 → $6$; sign bit set → $-6$.", working: "-6", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $-6$" },
        },
        {
          id: "olcs-u1-bit-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain the effect of a right logical shift by 1 on an 8-bit binary number.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Logical shift", statement: "Shift right, fill with 0, discard bottom bit." }], steps: [
            { reasoning: "Bits move one place right, a 0 is inserted at the left and the least significant bit is discarded.", marks: 1, markCode: "M" },
            { reasoning: "The value is halved (divided by 2, integer division).", working: "\\div 2", marks: 1, markCode: "A" },
          ], finalAnswer: "Halves the value; 0 fills the left, LSB discarded." },
        },
        {
          id: "olcs-u1-bit-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Using 8-bit two's complement, show that $5 - 9 = -4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Subtraction via two's complement", statement: "Add the two's-complement form of the subtrahend; discard any carry out." }], steps: [
            { reasoning: "Represent $-9$: $9=00001001_2$ → invert $11110110_2$ → add 1 → $11110111_2$.", working: "11110111", marks: 1, markCode: "M" },
            { reasoning: "Add: $00000101_2 + 11110111_2$.", working: "00000101+11110111", marks: 1, markCode: "M" },
            { reasoning: "Sum is $1\\;11111100_2$; discard the carry out of bit 7 → $11111100_2$.", working: "11111100", marks: 1, markCode: "M" },
            { reasoning: "Decode $11111100_2$: sign bit set, invert + 1 gives $4$, so the result is $-4$.", working: "-4", marks: 1, markCode: "A" },
          ], finalAnswer: "$5 - 9 = -4$ (result $11111100_2$)" },
        },
        {
          id: "olcs-u1-bit-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Represent $-25$ in 6-bit two's complement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Two's complement", statement: "Invert all bits, then add 1." }], steps: [
            { reasoning: "Write magnitude in 6 bits: $25 = 011001_2$.", working: "011001", marks: 1, markCode: "M" },
            { reasoning: "Invert → $100110_2$, add 1 → $100111_2$.", working: "100111", marks: 1, markCode: "M" },
            { reasoning: "Check: sign bit 1 and $-25$ lies within the 6-bit range $-32$ to $+31$; answer $100111_2$.", working: "100111_2", marks: 1, markCode: "A" },
          ], finalAnswer: "$100111_2$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u1-1-1-notes", title: "Number systems — notes", summary: "Bases, conversions, binary arithmetic, shifts and two's complement.",
      sections: [
        { heading: "Conversions", body: "Binary↔hex: group bits in 4s. Denary→binary: divide by 2. Denary→hex: divide by 16. Always show place values." },
        { heading: "Two's complement", body: "Invert all bits, add 1. Decode by inverting and adding 1. Leftmost bit = sign." },
        { heading: "Overflow", body: "Fixed bit length → result needing more bits wraps around; the carry out is discarded." },
      ] },
  ],
};

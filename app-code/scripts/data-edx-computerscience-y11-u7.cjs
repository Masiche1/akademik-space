module.exports = [
  {
    file: "lesson-7-1.ts",
    exportName: "lesson331",
    lesson: {
      id: "ecs11-u7-lesson-7-1",
      code: "7-1",
      title: "Number Systems",
      goal: "I CAN convert between denary, binary and hexadecimal and perform binary arithmetic.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — Data representation: number systems",
      ],
      vocabulary: [
        { term: "Denary", definition: "Base-10 number system using digits 0-9." },
        { term: "Binary", definition: "Base-2 number system using only digits 0 and 1." },
        { term: "Hexadecimal", definition: "Base-16 number system using digits 0-9 and letters A-F; each digit represents 4 bits." },
        { term: "Place value", definition: "The value of a digit depending on its position, equal to the base raised to a power." },
        { term: "Overflow", definition: "When a result is too large for the fixed number of bits available and wraps around." },
        { term: "Nibble", definition: "A group of 4 bits; exactly one hexadecimal digit." },
      ],
      concepts: [
        {
          id: "ecs11-u7-positional-systems",
          title: "Positional Number Systems",
          skill: "Convert between denary, binary and hexadecimal and explain place values.",
          sections: [
            {
              heading: "Place value in different bases",
              body: "Computers store data in **binary** (base 2), where each position is worth a power of 2: 1, 2, 4, 8, 16, 32 ... **Denary** (base 10) uses powers of 10. **Hexadecimal** (base 16) uses digits 0-9 and A-F, where A=10, B=11 ... F=15; each hex digit is worth a power of 16.\n\nA binary number is converted to denary by summing each digit multiplied by its place value: $1011_2 = 8+0+2+1 = 11$. Hexadecimal is compact because one hex digit equals one **nibble** (4 bits), so binary can be converted by grouping bits in fours: $1011\\,0101_2 = \\text{B}5_{16}$.",
            },
            {
              heading: "Why hexadecimal?",
              body: "Hexadecimal is used because it is far more compact than binary while remaining an exact representation — every hex digit maps cleanly to 4 bits with no rounding.\n\n**Applications**: memory addresses, colour codes (e.g. #FF0000 is red), MAC addresses and error codes. For example the byte 1111 1111₂ is 255 in denary but written FF in hex — two characters instead of eight.",
            },
          ],
          keyFormulas: [
            { name: "Binary to denary", statement: "Sum of (digit x 2^position), positions counted from the right starting at 0." },
            { name: "Hex to binary", statement: "Each hex digit expands to exactly 4 binary digits (one nibble)." },
            { name: "Hex to denary", statement: "Sum of (digit x 16^position)." },
          ],
          workedExample: {
            problem: "Convert 1011 0101₂ to hexadecimal and denary.",
            solution: "Split into nibbles: 1011 = B and 0101 = 5, so the value is B5₁₆. In denary: 128+0+32+16+0+4+0+1 = 181.",
          },
          questions: [
            {
              id: "ecs11-u7-positional-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the denary value of the binary number 1011?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "7" },
                  { id: "b", text: "9" },
                  { id: "c", text: "11" },
                  { id: "d", text: "13" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "method", name: "Binary to denary", statement: "Sum each bit times its power of 2." },
                ],
                steps: [
                  { reasoning: "1011₂ = 8+0+2+1 = 11.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** 11",
                commonErrors: ["Reading digits as denary digits (eleven vs one-zero-one-one)."],
              },
            },
            {
              id: "ecs11-u7-positional-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Convert the binary number 110110₂ to denary.",
              response: { type: "numeric", parts: [{ label: "Denary", answer: 54 }] },
              markscheme: {
                principles: [
                  { kind: "method", name: "Binary to denary", statement: "32+16+0+4+2+0 = 54." },
                ],
                steps: [
                  { reasoning: "Write out place values 32,16,8,4,2,1.", marks: 1, markCode: "AO2" },
                  { reasoning: "Add the values where bits are 1: 32+16+4+2 = 54.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "54",
                commonErrors: ["Missing the 8s place value and getting 62 or 46."],
              },
            },
            {
              id: "ecs11-u7-positional-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "How many bits are needed to store the denary value 300?",
              response: { type: "numeric", parts: [{ label: "Bits", answer: 9 }] },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Powers of two", statement: "n bits can store values 0 to 2^n - 1." },
                ],
                steps: [
                  { reasoning: "2^8 = 256 is too small; 2^9 = 512 is large enough.", marks: 1, markCode: "AO2" },
                  { reasoning: "300 lies between 256 and 512, so it needs 9 bits.", marks: 1, markCode: "AO2" },
                  { reasoning: "Check: 9 bits store 0-511, which includes 300.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "9 bits",
                commonErrors: ["Answering 8 because 300 is 'about 256'."],
              },
            },
            {
              id: "ecs11-u7-positional-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why hexadecimal is used to represent binary data, supporting your answer with an example.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Hexadecimal compactness", statement: "One hex digit represents exactly 4 bits (one nibble)." },
                  { kind: "comparison", name: "Hex vs binary", statement: "Hex is shorter than binary but still exact." },
                ],
                steps: [
                  { reasoning: "Each hex digit maps to exactly 4 binary digits, so conversion is exact.", marks: 1, markCode: "AO2" },
                  { reasoning: "Hex is more compact: 8 bits become 2 characters instead of 8.", marks: 1, markCode: "AO2" },
                  { reasoning: "Example: byte 1111 1111₂ = FF₁₆ = 255, far easier to read and type.", marks: 1, markCode: "AO2" },
                  { reasoning: "Less prone to human error when reading, writing and checking values.", marks: 1, markCode: "AO3" },
                  { reasoning: "Used in real systems: memory addresses, colour codes, MAC addresses.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Hex is compact and exact because each digit = 4 bits.",
                commonErrors: ["Saying hex is 'easier for the computer' — computers work in binary; hex helps humans."],
              },
            },
            {
              id: "ecs11-u7-positional-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A memory dump shows the byte 1010 1100₂.",
              parts: [
                { label: "a", prompt: "Convert the byte to hexadecimal.", marks: 3 },
                { label: "b", prompt: "Convert the hexadecimal value 3F₁₆ to binary and denary.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Nibble grouping", statement: "Group binary in 4s; each group is one hex digit." },
                ],
                steps: [
                  { reasoning: "(a) Split into nibbles: 1010 and 1100.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) 1010₂ = 10 = A; 1100₂ = 12 = C.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Result: AC₁₆.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) 3 = 0011₂ and F = 1111₂, so 3F₁₆ = 0011 1111₂.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Denary: 0011 1111₂ = 32+16+8+4+2+1 = 63.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Check: 3 x 16 + 15 = 63.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) AC₁₆  (b) 0011 1111₂ = 63",
                commonErrors: ["Grouping from the wrong end for odd-length binary.", "Reading F as 15 in binary instead of 1111."],
              },
            },
            {
              id: "ecs11-u7-positional-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A system stores integer values using binary.",
              parts: [
                { label: "a", prompt: "Show that denary 200 is stored as 11001000₂, using repeated division by 2.", marks: 4 },
                { label: "b", prompt: "Add the binary numbers 101101₂ and 110010₂, showing your carries.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Repeated division", statement: "Divide by 2 repeatedly; remainders read bottom-up give binary." },
                  { kind: "method", name: "Binary addition", statement: "Add column by column; 1+1 = 10 with a carry." },
                ],
                steps: [
                  { reasoning: "(a) 200/2=100 r0; 100/2=50 r0; 50/2=25 r0; 25/2=12 r1.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) 12/2=6 r0; 6/2=3 r0; 3/2=1 r1; 1/2=0 r1.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Remainders read upwards: 11001000₂.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Check: 128+64+8 = 200.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Align: 101101 + 110010; column sums give 1,1,1,1,1 with a carry into a new 7th bit.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) 1+1 in the top column produces 0 with carry 1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Result: 1011111₂.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Check: 45 + 50 = 95 = 1011111₂.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) 11001000₂  (b) 1011111₂ (= 95)",
                commonErrors: ["Reading remainders top-down instead of bottom-up.", "Forgetting the carry in the top column."],
              },
            },
          ],
        },
        {
          id: "ecs11-u7-binary-arithmetic",
          title: "Binary Arithmetic and Overflow",
          skill: "Add binary numbers, explain carries and identify overflow in fixed-width storage.",
          sections: [
            {
              heading: "Binary addition",
              body: "Binary addition follows the same column method as denary, but each column only produces 0 or 1 plus a carry:\n\n- 0 + 0 = 0\n- 0 + 1 = 1\n- 1 + 0 = 1\n- 1 + 1 = 10 (write 0, carry 1)\n- 1 + 1 + carry 1 = 11 (write 1, carry 1)\n\nExample: 1011₂ + 0110₂ = 10001₂ (11 + 6 = 17). Always align digits by place value before adding.",
            },
            {
              heading: "Overflow",
              body: "Computers store numbers in a **fixed number of bits**. An n-bit unsigned register holds values 0 to 2^n - 1 (e.g. 8 bits hold 0-255). If a result exceeds this range it **overflows**: the extra high bits are discarded and the stored value wraps around.\n\nExample: in 8 bits, 255 + 1 = 256, but 256 cannot be stored in 8 bits — the result wraps to 00000000 (0). Overflow can silently corrupt calculations, which is why programmers must check ranges.",
            },
          ],
          keyFormulas: [
            { name: "Column addition", statement: "Add each column; carry 1 whenever the column sum is 2 or more." },
            { name: "Unsigned range", statement: "n bits store values 0 to 2^n - 1." },
          ],
          workedExample: {
            problem: "Add 1101₂ + 1011₂ and state the denary result.",
            solution: "1101 + 1011 = 11000₂. Check: 13 + 11 = 24 = 11000₂.",
          },
          questions: [
            {
              id: "ecs11-u7-binary-arith-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is 1011₂ + 0110₂ in binary?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "1111₂" },
                  { id: "b", text: "10001₂" },
                  { id: "c", text: "10000₂" },
                  { id: "d", text: "11001₂" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "method", name: "Binary column addition", statement: "1+1 produces 0 with a carry of 1." },
                ],
                steps: [
                  { reasoning: "1011 + 0110 = 10001₂ (a carry is produced in the top column).", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** 10001₂",
                commonErrors: ["Dropping the carry and answering 1111."],
              },
            },
            {
              id: "ecs11-u7-binary-arith-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the denary value of 1011₂ + 0110₂?",
              response: { type: "numeric", parts: [{ label: "Denary", answer: 17 }] },
              markscheme: {
                principles: [
                  { kind: "method", name: "Convert then add", statement: "1011₂ = 11 and 0110₂ = 6, so the sum is 17." },
                ],
                steps: [
                  { reasoning: "Convert each operand: 1011₂ = 11, 0110₂ = 6.", marks: 1, markCode: "AO2" },
                  { reasoning: "11 + 6 = 17.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "17",
                commonErrors: ["Adding the binary strings as if they were denary numbers."],
              },
            },
            {
              id: "ecs11-u7-binary-arith-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Evaluate 1101₂ + 1011₂, giving your answer in denary.",
              response: { type: "numeric", parts: [{ label: "Denary", answer: 24 }] },
              markscheme: {
                principles: [
                  { kind: "method", name: "Binary addition", statement: "1101 + 1011 = 11000₂." },
                ],
                steps: [
                  { reasoning: "Align and add column by column with carries.", marks: 1, markCode: "AO2" },
                  { reasoning: "1101₂ + 1011₂ = 11000₂.", marks: 1, markCode: "AO2" },
                  { reasoning: "11000₂ = 16+8 = 24.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "24",
                commonErrors: ["Writing 11100₂ by misplacing the final carry."],
              },
            },
            {
              id: "ecs11-u7-binary-arith-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Calculate 1010₂ - 0110₂, explaining how you handle the borrowing.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Binary subtraction", statement: "Borrow 1 from the next higher column, which is worth 2 in the current column." },
                ],
                steps: [
                  { reasoning: "Align: 1010 - 0110; the units column needs a borrow because 0 < 0 is false but 0 - 0 requires borrowing through zeros.", marks: 1, markCode: "AO2" },
                  { reasoning: "Borrow propagates: the 8s column lends to the 4s column which lends to the 2s column.", marks: 1, markCode: "AO2" },
                  { reasoning: "Column results: 1010 - 0110 = 0100₂.", marks: 1, markCode: "AO2" },
                  { reasoning: "Check in denary: 10 - 6 = 4 = 0100₂.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear statement of the borrow rule used.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "0100₂ (= 4)",
                commonErrors: ["Borrowing only one column instead of propagating through the zero.", "Answering 0110 by ignoring place values."],
              },
            },
            {
              id: "ecs11-u7-binary-arith-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A 4-bit register stores unsigned binary values.",
              parts: [
                { label: "a", prompt: "Show what is stored after adding 1111₂ + 0001₂ to the register.", marks: 3 },
                { label: "b", prompt: "State the largest value the register can hold.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Fixed-width overflow", statement: "Results exceeding 2^n - 1 wrap around modulo 2^n." },
                ],
                steps: [
                  { reasoning: "(a) 1111 + 0001 = 10000₂, which needs 5 bits.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The 4-bit register cannot store the leading 1, so it is discarded.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Stored value: 0000₂ (= 0).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) 4 bits store values 0 to 2^4 - 1.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Largest value = 15 (1111₂).", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Adding 1 to 15 gives 16, which overflows — consistent with part (a).", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) 0000₂  (b) 15",
                commonErrors: ["Answering 16 for part (b) — that requires 5 bits."],
              },
            },
            {
              id: "ecs11-u7-binary-arith-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "An 8-bit system is used to add the denary values 200 and 100.",
              parts: [
                { label: "a", prompt: "Show whether overflow occurs and state the value actually stored.", marks: 4 },
                { label: "b", prompt: "Explain why the result is wrong and how many bits would be needed to store the true sum.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Overflow range", statement: "8 bits store 0-255; 200 + 100 = 300 exceeds this." },
                ],
                steps: [
                  { reasoning: "(a) True sum = 300, but 8 bits only hold up to 255.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) 300 - 256 = 44 is stored (the carry out of bit 7 is discarded).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Stored value = 44, which is incorrect.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Conclusion: overflow has occurred.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) The result is wrong because the true value 300 does not fit in 8 bits.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) 2^8 = 256 is too small; 2^9 = 512 is large enough.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) 9 bits are needed to store values up to 511.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Programmers detect overflow by checking the carry-out flag or using wider types.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Overflow; stores 44  (b) 9 bits needed",
                commonErrors: ["Saying the system stores 300 — impossible in 8 bits.", "Answering 8 bits are 'almost enough'."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u7-lesson-7-1-notes",
      title: "Number Systems Revision Notes",
      summary: "Binary, hexadecimal and denary conversions, binary addition and overflow.",
      sections: [
        {
          heading: "Conversion cheat sheet",
          body: "Binary to denary: sum digit x 2^position. Hexadecimal: each digit = 4 bits (one nibble). Denary to binary: repeated division by 2, remainders read bottom-up. Denary to hex: divide by 16, remainders 10-15 become A-F.",
        },
        {
          heading: "Binary arithmetic",
          body: "Add column by column from the right. 1+1 = 10 (write 0, carry 1). For subtraction, borrow propagates through zero columns. Always verify by converting back to denary.",
        },
        {
          heading: "Overflow",
          body: "An n-bit register holds 0 to 2^n - 1. Larger results wrap around modulo 2^n, giving silently wrong answers. Check the carry-out or use a wider type.",
        },
      ],
    },
  },
  {
    file: "lesson-7-2.ts",
    exportName: "lesson332",
    lesson: {
      id: "ecs11-u7-lesson-7-2",
      code: "7-2",
      title: "Boolean Logic",
      goal: "I CAN use Boolean operators, complete truth tables and write logic expressions.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — Boolean logic and truth tables",
      ],
      vocabulary: [
        { term: "Boolean", definition: "A data type with only two values: TRUE (1) and FALSE (0)." },
        { term: "NOT", definition: "Unary operator that reverses the input: NOT 1 = 0." },
        { term: "AND", definition: "Binary operator; output is 1 only when both inputs are 1." },
        { term: "OR", definition: "Binary operator; output is 1 when at least one input is 1." },
        { term: "XOR", definition: "Binary operator; output is 1 when exactly one input is 1 (inputs differ)." },
        { term: "Truth table", definition: "A table listing every possible input combination and the resulting output." },
        { term: "Logic expression", definition: "A symbolic statement combining inputs with operators, e.g. A AND NOT B." },
      ],
      concepts: [
        {
          id: "ecs11-u7-boolean-operators",
          title: "Boolean Operators and Truth Tables",
          skill: "Apply NOT, AND, OR and XOR and complete truth tables.",
          sections: [
            {
              heading: "The basic operators",
              body: "**NOT** has one input and reverses it: NOT 0 = 1, NOT 1 = 0. **AND** outputs 1 only when both inputs are 1. **OR** outputs 1 when at least one input is 1. **XOR** outputs 1 when the inputs are different (exactly one is 1).\n\nTwo-input operators have 4 possible input combinations, so their truth tables have 4 rows (or 8 rows for three inputs).",
            },
            {
              heading: "Reading truth tables",
              body: "Truth tables list inputs in binary counting order: 00, 01, 10, 11 for two inputs. The output column is the operator's result for each row.\n\n**Quick reference** — output is 1 for: AND only on row 11 (1 row); OR on rows 01, 10, 11 (3 rows); XOR on rows 01 and 10 (2 rows). Memorising these counts makes exam questions faster.",
            },
          ],
          keyFormulas: [
            { name: "NOT", statement: "NOT 0 = 1, NOT 1 = 0" },
            { name: "AND", statement: "1 only when both inputs are 1" },
            { name: "OR", statement: "1 when at least one input is 1" },
            { name: "XOR", statement: "1 when exactly one input is 1" },
          ],
          workedExample: {
            problem: "Complete the truth table for A AND NOT B.",
            solution: "Rows (A,B): 00 -> 0, 01 -> 0, 10 -> 1, 11 -> 0. The output is 1 only on row A=1, B=0.",
          },
          questions: [
            {
              id: "ecs11-u7-boolean-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the output of NOT 1?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "0" },
                  { id: "b", text: "1" },
                  { id: "c", text: "2" },
                  { id: "d", text: "undefined" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "NOT operator", statement: "Reverses its single input: NOT 1 = 0." },
                ],
                steps: [
                  { reasoning: "NOT inverts the input, so NOT 1 = 0.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(a)** 0",
                commonErrors: ["Thinking NOT returns the same value."],
              },
            },
            {
              id: "ecs11-u7-boolean-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "How many rows does the truth table for a logic circuit with 3 inputs have?",
              response: { type: "numeric", parts: [{ label: "Rows", answer: 8 }] },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Truth table size", statement: "n inputs produce 2^n rows." },
                ],
                steps: [
                  { reasoning: "Each input can be 0 or 1, so rows = 2^3.", marks: 1, markCode: "AO2" },
                  { reasoning: "2^3 = 8 rows.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "8",
                commonErrors: ["Answering 6 (counting combinations incorrectly)."],
              },
            },
            {
              id: "ecs11-u7-boolean-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Write the outputs of the OR operator for the input pairs 00, 01, 10 and 11.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "OR operator", statement: "Output is 1 when at least one input is 1." },
                ],
                steps: [
                  { reasoning: "00 -> 0 (neither input is 1).", marks: 1, markCode: "AO1" },
                  { reasoning: "01 -> 1 and 10 -> 1 (one input is 1).", marks: 1, markCode: "AO1" },
                  { reasoning: "11 -> 1 (both inputs are 1).", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "0, 1, 1, 1",
                commonErrors: ["Writing 0 for row 11, confusing OR with AND."],
              },
            },
            {
              id: "ecs11-u7-boolean-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Evaluate the expression (A AND B) OR NOT C when A = 1, B = 0 and C = 0.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Operator precedence", statement: "NOT is applied first, then AND, then OR." },
                ],
                steps: [
                  { reasoning: "Evaluate NOT C: NOT 0 = 1.", marks: 1, markCode: "AO2" },
                  { reasoning: "Evaluate A AND B: 1 AND 0 = 0.", marks: 1, markCode: "AO2" },
                  { reasoning: "Combine with OR: 0 OR 1 = 1.", marks: 1, markCode: "AO2" },
                  { reasoning: "Final result is 1 (TRUE).", marks: 1, markCode: "AO2" },
                  { reasoning: "Correct order of evaluation stated or implied.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "1 (TRUE)",
                commonErrors: ["Evaluating left-to-right and getting a different answer."],
              },
            },
            {
              id: "ecs11-u7-boolean-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Consider the logic expression E = A AND NOT B.",
              parts: [
                { label: "a", prompt: "Complete the truth table for E for inputs 00, 01, 10 and 11.", marks: 3 },
                { label: "b", prompt: "State on how many rows the output E is 1.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "AND with NOT", statement: "E = 1 only when A = 1 and B = 0." },
                ],
                steps: [
                  { reasoning: "(a) NOT B gives 1,0,1,0 for B = 0,0,1,1.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) A AND NOT B gives 0, 0, 1, 0.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) All four rows listed correctly.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Only row 10 produces output 1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Count = 1 row.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cross-checked against the completed table.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) 0, 0, 1, 0  (b) 1 row",
                commonErrors: ["Treating NOT B as applying to the whole expression.", "Counting 2 rows instead of 1."],
              },
            },
            {
              id: "ecs11-u7-boolean-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A security alarm sounds when motion is detected AND it is night-time. Let M = motion detected, N = night-time.",
              parts: [
                { label: "a", prompt: "Write a logic expression for the alarm output A.", marks: 4 },
                { label: "b", prompt: "Complete the truth table and state which input combination triggers the alarm.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "AND condition", statement: "Both conditions must be true, so the operator is AND." },
                ],
                steps: [
                  { reasoning: "(a) Both conditions must hold, so A = M AND N.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Expression correctly links the two named inputs.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Output labelled A (or equivalent).", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Truth table rows (M,N): 00->0, 01->0, 10->0, 11->1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) All four rows correct.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Alarm triggers only when M = 1 and N = 1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Interpretation matches the 'AND' requirement in words.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) A = M AND N  (b) triggers at M=1, N=1",
                commonErrors: ["Using OR, which would trigger the alarm in daytime too."],
              },
            },
          ],
        },
        {
          id: "ecs11-u7-logic-expressions",
          title: "Logic Expressions and Simplification",
          skill: "Write, evaluate and simplify logic expressions using Boolean identities.",
          sections: [
            {
              heading: "Writing expressions",
              body: "English conditions translate directly into logic:\n\n- 'A and B' -> A AND B\n- 'A or B' -> A OR B\n- 'not A' -> NOT A\n- 'A but not B' -> A AND NOT B\n- 'either A or B but not both' -> A XOR B\n\nPrecedence is NOT first, then AND, then OR. Brackets override this: (A OR B) AND C is different from A OR (B AND C).",
            },
            {
              heading: "Simplifying with identities",
              body: "Useful identities let expressions be shortened:\n\n- A AND 1 = A ; A AND 0 = 0\n- A OR 1 = 1 ; A OR 0 = A\n- A AND A = A ; A OR A = A\n- A AND NOT A = 0 ; A OR NOT A = 1\n\nExample: (A AND 1) OR (B AND 0) = A OR 0 = A. A truth table is the safest way to check a simplification — both forms must give identical outputs.",
            },
          ],
          keyFormulas: [
            { name: "Identity laws", statement: "A AND 1 = A, A OR 0 = A, A AND 0 = 0, A OR 1 = 1" },
            { name: "Complement laws", statement: "A AND NOT A = 0, A OR NOT A = 1" },
            { name: "Idempotent laws", statement: "A AND A = A, A OR A = A" },
          ],
          workedExample: {
            problem: "Simplify (A AND 1) OR (B AND 0).",
            solution: "A AND 1 = A and B AND 0 = 0, so the expression becomes A OR 0 = A.",
          },
          questions: [
            {
              id: "ecs11-u7-expressions-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the output of A OR B when A = 1 and B = 0?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "0" },
                  { id: "b", text: "1" },
                  { id: "c", text: "undefined" },
                  { id: "d", text: "2" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "OR operator", statement: "Output is 1 when at least one input is 1." },
                ],
                steps: [
                  { reasoning: "A = 1 is enough for OR to output 1.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** 1",
                commonErrors: ["Confusing OR with AND, which would give 0."],
              },
            },
            {
              id: "ecs11-u7-expressions-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "On how many of the four input rows is A AND B equal to 1?",
              response: { type: "numeric", parts: [{ label: "Rows", answer: 1 }] },
              markscheme: {
                principles: [
                  { kind: "definition", name: "AND truth table", statement: "Output is 1 only on row 11." },
                ],
                steps: [
                  { reasoning: "AND outputs 1 only when both inputs are 1.", marks: 1, markCode: "AO1" },
                  { reasoning: "Only row 11 qualifies, so the count is 1.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "1",
                commonErrors: ["Answering 3, which is the OR count."],
              },
            },
            {
              id: "ecs11-u7-expressions-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "On how many of the four input rows is A OR B equal to 1?",
              response: { type: "numeric", parts: [{ label: "Rows", answer: 3 }] },
              markscheme: {
                principles: [
                  { kind: "definition", name: "OR truth table", statement: "Output is 1 on rows 01, 10 and 11." },
                ],
                steps: [
                  { reasoning: "OR outputs 0 only on row 00.", marks: 1, markCode: "AO1" },
                  { reasoning: "Therefore 3 of the 4 rows output 1.", marks: 1, markCode: "AO2" },
                  { reasoning: "Check: rows 01, 10, 11 all contain at least one 1.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "3",
                commonErrors: ["Answering 1 by confusing OR with AND."],
              },
            },
            {
              id: "ecs11-u7-expressions-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Simplify the expression (A AND 1) OR (B AND 0), showing each identity you use.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Identity laws", statement: "A AND 1 = A; A AND 0 = 0; A OR 0 = A." },
                ],
                steps: [
                  { reasoning: "Apply A AND 1 = A to the first term.", marks: 1, markCode: "AO2" },
                  { reasoning: "Apply A AND 0 = 0 to the second term.", marks: 1, markCode: "AO2" },
                  { reasoning: "Expression reduces to A OR 0.", marks: 1, markCode: "AO2" },
                  { reasoning: "Apply A OR 0 = A.", marks: 1, markCode: "AO2" },
                  { reasoning: "Final simplified expression: A.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "A",
                commonErrors: ["Applying OR identities to AND terms.", "Stopping at A OR 0."],
              },
            },
            {
              id: "ecs11-u7-expressions-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Consider the expression E = NOT (A OR B).",
              parts: [
                { label: "a", prompt: "Evaluate E when A = 0 and B = 1.", marks: 3 },
                { label: "b", prompt: "Write the expression in words: 'it is not the case that A and B are both true'.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Nested evaluation", statement: "Evaluate inside brackets first, then apply NOT." },
                ],
                steps: [
                  { reasoning: "(a) A OR B = 0 OR 1 = 1.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) NOT 1 = 0.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) E = 0 (FALSE).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) 'Both true' means A AND B.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) 'Not the case that' means NOT applied to the whole expression.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Expression: NOT (A AND B).", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) 0  (b) NOT (A AND B)",
                commonErrors: ["Writing NOT A AND NOT B, which is a different expression."],
              },
            },
            {
              id: "ecs11-u7-expressions-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A truth table has inputs A and B and produces outputs 0, 1, 1, 0 for rows 00, 01, 10, 11.",
              parts: [
                { label: "a", prompt: "Write a logic expression that produces this output.", marks: 4 },
                { label: "b", prompt: "Verify your expression by evaluating it for A = 1 and B = 1.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "XOR pattern", statement: "Output 1 when exactly one input is 1 matches A XOR B." },
                ],
                steps: [
                  { reasoning: "(a) Output is 1 on rows 01 and 10 — the inputs differ.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(a) 'Inputs differ' is exactly the definition of XOR.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Expression: A XOR B.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Equivalent forms accepted, e.g. (A AND NOT B) OR (NOT A AND B).", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Substitute A = 1, B = 1 into A XOR B.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) 1 XOR 1 = 0 because the inputs are the same.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Row 11 in the table has output 0 — matches.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Verification confirms the expression is correct.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) A XOR B  (b) outputs 0, matching row 11",
                commonErrors: ["Writing A OR B, which outputs 1 on row 11."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u7-lesson-7-2-notes",
      title: "Boolean Logic Revision Notes",
      summary: "NOT, AND, OR and XOR operators, truth tables and logic expressions.",
      sections: [
        {
          heading: "Operator quick reference",
          body: "NOT: one input, reverses it. AND: 1 only when both inputs are 1 (1 row out of 4). OR: 1 when at least one input is 1 (3 rows). XOR: 1 when inputs differ (2 rows).",
        },
        {
          heading: "Precedence and brackets",
          body: "Evaluate NOT first, then AND, then OR. Brackets override precedence: (A OR B) AND C differs from A OR (B AND C). When in doubt, evaluate step by step.",
        },
        {
          heading: "Identities for simplification",
          body: "A AND 1 = A, A AND 0 = 0, A OR 0 = A, A OR 1 = 1, A AND A = A, A OR A = A, A AND NOT A = 0, A OR NOT A = 1. Always verify simplifications with a truth table.",
        },
      ],
    },
  },
  {
    file: "lesson-7-3.ts",
    exportName: "lesson333",
    lesson: {
      id: "ecs11-u7-lesson-7-3",
      code: "7-3",
      title: "Logic Gates and Circuits",
      goal: "I CAN identify logic gates, analyse circuits and design circuits from expressions.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — Logic gates and circuits",
      ],
      vocabulary: [
        { term: "Logic gate", definition: "A physical or simulated component implementing a Boolean operation on one or two inputs." },
        { term: "Logic circuit", definition: "A combination of logic gates connected so the output depends on the inputs." },
        { term: "AND gate", definition: "Gate outputting 1 only when both inputs are 1." },
        { term: "OR gate", definition: "Gate outputting 1 when at least one input is 1." },
        { term: "NOT gate", definition: "Gate with one input that outputs the inverse of its input." },
        { term: "XOR gate", definition: "Gate outputting 1 when exactly one input is 1." },
        { term: "Half adder", definition: "A circuit using XOR for the sum bit and AND for the carry bit when adding two binary digits." },
      ],
      concepts: [
        {
          id: "ecs11-u7-logic-gates",
          title: "Logic Gates",
          skill: "Identify gates from their truth tables and describe gate behaviour.",
          sections: [
            {
              heading: "Gate types",
              body: "Each logic gate implements one Boolean operator. **AND** and **OR** gates have two inputs; **NOT** (also called an inverter) has one input and one output; **XOR** has two inputs and outputs 1 when they differ.\n\nGates are drawn with standard symbols: AND is a D-shape, OR is curved, NOT is a triangle with a bubble, XOR is OR with an extra curved line.",
            },
            {
              heading: "Identifying a gate from its table",
              body: "To identify an unknown gate, write its truth table for inputs 00, 01, 10, 11 and compare with the known patterns:\n\n- AND: 0, 0, 0, 1\n- OR: 0, 1, 1, 1\n- XOR: 0, 1, 1, 0\n- NAND (NOT AND): 1, 1, 1, 0\n- NOR (NOT OR): 1, 0, 0, 0\n\nIf the output is inverted relative to a known gate, a NOT gate (bubble) is present.",
            },
          ],
          keyFormulas: [
            { name: "AND", statement: "0,0,0,1" },
            { name: "OR", statement: "0,1,1,1" },
            { name: "XOR", statement: "0,1,1,0" },
            { name: "NOT", statement: "Reverses the single input" },
          ],
          workedExample: {
            problem: "A gate has truth table outputs 0, 1, 1, 1 for inputs 00, 01, 10, 11. Which gate is it?",
            solution: "The pattern 0,1,1,1 matches the OR gate.",
          },
          questions: [
            {
              id: "ecs11-u7-gates-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which gate outputs 1 only when both of its inputs are 1?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "OR gate" },
                  { id: "b", text: "NOT gate" },
                  { id: "c", text: "AND gate" },
                  { id: "d", text: "XOR gate" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "AND gate", statement: "Output 1 only when both inputs are 1." },
                ],
                steps: [
                  { reasoning: "The AND gate is defined by the condition 'both inputs are 1'.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** AND gate",
                commonErrors: ["Confusing AND with OR."],
              },
            },
            {
              id: "ecs11-u7-gates-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "How many inputs does a NOT gate have?",
              response: { type: "numeric", parts: [{ label: "Inputs", answer: 1 }] },
              markscheme: {
                principles: [
                  { kind: "definition", name: "NOT gate", statement: "A single-input inverter." },
                ],
                steps: [
                  { reasoning: "NOT is a unary operator — it works on one input.", marks: 1, markCode: "AO1" },
                  { reasoning: "Therefore the answer is 1.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "1",
                commonErrors: ["Answering 2, confusing NOT with AND/OR."],
              },
            },
            {
              id: "ecs11-u7-gates-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe the behaviour of an XOR gate.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "XOR gate", statement: "Outputs 1 when exactly one input is 1." },
                ],
                steps: [
                  { reasoning: "XOR has two inputs and one output.", marks: 1, markCode: "AO1" },
                  { reasoning: "Output is 1 when the inputs are different (01 or 10).", marks: 1, markCode: "AO1" },
                  { reasoning: "Output is 0 when both inputs are equal (00 or 11).", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "1 when inputs differ, 0 when they match",
                commonErrors: ["Describing OR instead of XOR — OR also outputs 1 on row 11."],
              },
            },
            {
              id: "ecs11-u7-gates-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A logic gate produces outputs 0, 1, 1, 0 for input pairs 00, 01, 10 and 11. Identify the gate and justify your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Gate identification", statement: "Compare the output pattern with known gate tables." },
                ],
                steps: [
                  { reasoning: "The pattern 0,1,1,0 means output is 1 exactly on rows 01 and 10.", marks: 1, markCode: "AO2" },
                  { reasoning: "Output 1 on rows where inputs differ.", marks: 1, markCode: "AO2" },
                  { reasoning: "This matches the XOR gate definition.", marks: 1, markCode: "AO2" },
                  { reasoning: "Rule out OR (which also gives 1 on row 11) and AND (which gives 1 only on row 11).", marks: 1, markCode: "AO3" },
                  { reasoning: "Conclusion: the gate is XOR.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "XOR gate",
                commonErrors: ["Answering OR without checking row 11."],
              },
            },
            {
              id: "ecs11-u7-gates-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Consider the combined gate NAND (a NOT gate after an AND gate).",
              parts: [
                { label: "a", prompt: "Write the truth table for NAND for inputs 00, 01, 10 and 11.", marks: 3 },
                { label: "b", prompt: "State which single-input gate would invert a signal, and what it is called.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "NAND", statement: "NOT of AND: 1 unless both inputs are 1." },
                ],
                steps: [
                  { reasoning: "(a) AND outputs 0,0,0,1; NOT of that is 1,1,1,0.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) All four rows correct: 1, 1, 1, 0.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Table correctly ordered by input pair.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) The NOT gate inverts its input.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) It is also called an inverter.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Output is always the opposite of the input.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) 1,1,1,0  (b) NOT gate / inverter",
                commonErrors: ["Writing the AND table instead of its inverse."],
              },
            },
            {
              id: "ecs11-u7-gates-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "Two unknown gates G1 and G2 are tested.",
              parts: [
                { label: "a", prompt: "G1 outputs 0, 0, 0, 1 for inputs 00, 01, 10, 11. Identify G1.", marks: 4 },
                { label: "b", prompt: "G2 is an AND gate followed by a NOT gate. Describe the circuit and give its output for input 11.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Pattern matching", statement: "Match output rows to known gate truth tables." },
                ],
                steps: [
                  { reasoning: "(a) Output 1 appears only on row 11.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) This is the defining pattern of the AND gate.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) G1 = AND gate.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Justification references the truth table pattern.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) The circuit is a NAND gate: AND followed by NOT.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) For input 11, the AND stage outputs 1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) The NOT stage inverts it, so final output = 0.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Stated conclusion: output 0 for input 11.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) AND gate  (b) NAND circuit; output 0 for 11",
                commonErrors: ["Identifying G2 as AND without applying the NOT stage."],
              },
            },
          ],
        },
        {
          id: "ecs11-u7-logic-circuits",
          title: "Logic Circuits",
          skill: "Analyse combined circuits and design circuits from logic expressions.",
          sections: [
            {
              heading: "Analysing a circuit",
              body: "To find a circuit's output, work stage by stage from the inputs: evaluate each gate in order of dependency, using its truth table. Brackets in the equivalent expression show the grouping — e.g. A OR (B AND C) means the AND is evaluated before the OR.\n\nA circuit and its expression are interchangeable: the expression A AND (B OR C) describes exactly the circuit where B and C feed an OR gate whose output feeds an AND gate with A.",
            },
            {
              heading: "The half adder",
              body: "A **half adder** adds two binary digits A and B. It uses two gates: **sum = A XOR B** (the sum bit, 1 when inputs differ) and **carry = A AND B** (the carry bit, 1 only when both inputs are 1).\n\nFor A = 1, B = 1: sum = 0, carry = 1 — representing 1 + 1 = 10₂. Half adders are the building blocks of binary addition circuits in processors.",
            },
          ],
          keyFormulas: [
            { name: "Half adder", statement: "sum = A XOR B; carry = A AND B" },
            { name: "Circuit = expression", statement: "Each gate corresponds to one operator; nesting shows evaluation order." },
          ],
          workedExample: {
            problem: "For the expression A OR (B AND C), find the output when A = 0, B = 1, C = 1.",
            solution: "B AND C = 1 AND 1 = 1; then A OR 1 = 0 OR 1 = 1. Output = 1.",
          },
          questions: [
            {
              id: "ecs11-u7-circuits-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A circuit consists of a single AND gate with inputs A = 1 and B = 1. What is the output?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "0" },
                  { id: "b", text: "1" },
                  { id: "c", text: "undefined" },
                  { id: "d", text: "2" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "AND gate", statement: "Output 1 only when both inputs are 1." },
                ],
                steps: [
                  { reasoning: "Both inputs are 1, so AND outputs 1.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** 1",
                commonErrors: ["Answering 0 by confusing AND with OR."],
              },
            },
            {
              id: "ecs11-u7-circuits-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the output of an OR gate circuit with inputs 0 and 1?",
              response: { type: "numeric", parts: [{ label: "Output", answer: 1 }] },
              markscheme: {
                principles: [
                  { kind: "definition", name: "OR gate", statement: "Output 1 when at least one input is 1." },
                ],
                steps: [
                  { reasoning: "One input is 1, which is enough for OR.", marks: 1, markCode: "AO1" },
                  { reasoning: "Output = 1.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "1",
                commonErrors: ["Answering 0 by requiring both inputs to be 1."],
              },
            },
            {
              id: "ecs11-u7-circuits-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Describe the steps needed to analyse a multi-gate logic circuit.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Circuit analysis", statement: "Evaluate gates stage by stage from inputs to output." },
                ],
                steps: [
                  { reasoning: "Identify the input values for the circuit.", marks: 1, markCode: "AO1" },
                  { reasoning: "Evaluate each gate in dependency order using its truth table.", marks: 1, markCode: "AO2" },
                  { reasoning: "The final gate's output is the circuit output.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Inputs -> gate by gate -> output",
                commonErrors: ["Evaluating gates in drawing order rather than dependency order."],
              },
            },
            {
              id: "ecs11-u7-circuits-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A circuit implements the expression (A OR B) AND NOT C. Find the output when A = 1, B = 0 and C = 1.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Stepwise evaluation", statement: "Evaluate brackets, then NOT, then AND." },
                ],
                steps: [
                  { reasoning: "A OR B = 1 OR 0 = 1.", marks: 1, markCode: "AO2" },
                  { reasoning: "NOT C = NOT 1 = 0.", marks: 1, markCode: "AO2" },
                  { reasoning: "Final AND: 1 AND 0 = 0.", marks: 1, markCode: "AO2" },
                  { reasoning: "Output = 0.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both intermediate results shown correctly.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "0",
                commonErrors: ["Applying NOT to the whole expression instead of just C."],
              },
            },
            {
              id: "ecs11-u7-circuits-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A half adder adds two binary digits using sum = A XOR B and carry = A AND B.",
              parts: [
                { label: "a", prompt: "Find the sum and carry outputs when A = 1 and B = 1.", marks: 3 },
                { label: "b", prompt: "State which gate produces the carry bit and why.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Half adder", statement: "Sum uses XOR; carry uses AND." },
                ],
                steps: [
                  { reasoning: "(a) Sum = 1 XOR 1 = 0.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Carry = 1 AND 1 = 1.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Result represents 1 + 1 = 10₂.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) The carry bit is produced by an AND gate.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) AND outputs 1 only when both inputs are 1 — exactly when a carry is needed.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Clear link between gate behaviour and arithmetic requirement.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) sum = 0, carry = 1  (b) AND gate",
                commonErrors: ["Swapping the gates: using AND for sum and XOR for carry."],
              },
            },
            {
              id: "ecs11-u7-circuits-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A system needs an output that is 1 when input A is 1, OR when both B and C are 1.",
              parts: [
                { label: "a", prompt: "Write a logic expression for the output X.", marks: 4 },
                { label: "b", prompt: "Evaluate X for A = 0, B = 1 and C = 1, and state whether the condition is met.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Condition translation", statement: "'A or both B and C' = A OR (B AND C)." },
                ],
                steps: [
                  { reasoning: "(a) 'Both B and C' = B AND C.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) 'A or ...' = A OR (B AND C).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Brackets essential because AND has higher precedence than OR.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(a) Expression: X = A OR (B AND C).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) B AND C = 1 AND 1 = 1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) X = 0 OR 1 = 1.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Output = 1, so the condition is met.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Explanation notes that the second clause alone satisfied the OR.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) X = A OR (B AND C)  (b) X = 1, condition met",
                commonErrors: ["Writing A OR B AND C without brackets, which changes the meaning."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u7-lesson-7-3-notes",
      title: "Logic Gates and Circuits Revision Notes",
      summary: "Gate types, identifying gates from truth tables, analysing circuits and the half adder.",
      sections: [
        {
          heading: "Gate truth tables",
          body: "For inputs 00, 01, 10, 11: AND = 0,0,0,1; OR = 0,1,1,1; XOR = 0,1,1,0; NAND = 1,1,1,0; NOR = 1,0,0,0. NOT has one input and simply inverts it.",
        },
        {
          heading: "Circuit analysis",
          body: "Work from inputs to output, evaluating each gate in dependency order. The expression equivalent to a circuit uses brackets to show gate grouping; evaluate inner brackets first.",
        },
        {
          heading: "Half adder",
          body: "Sum bit = A XOR B; carry bit = A AND B. When A = B = 1 the result is sum 0, carry 1 — i.e. 1 + 1 = 10₂. Half adders are the basis of binary addition in CPUs.",
        },
      ],
    },
  },
];

import type { Lesson } from "../../../types.ts";

export const lesson331: Lesson = {
  id: "ecs11-u7-lesson-7-1",
  code: "7-1",
  title: "Number Systems",
  goal: "I CAN convert between denary, binary and hexadecimal and perform binary arithmetic.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data representation: number systems"],
  
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
      lesson: {
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
      },
      questions: [
        {
          id: "ecs11-u7-positional-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the denary value of the binary number 1011?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "11"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary to denary",
                              "statement": "Sum each bit times its power of 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1011₂ = 8+0+2+1 = 11.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** 11",
          "commonErrors": [
                    "Reading digits as denary digits (eleven vs one-zero-one-one)."
          ]
},
        },
        {
          id: "ecs11-u7-positional-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert the binary number 110110₂ to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Denary",
                              "answer": 54
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary to denary",
                              "statement": "32+16+0+4+2+0 = 54."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Write out place values 32,16,8,4,2,1.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Add the values where bits are 1: 32+16+4+2 = 54.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "54",
          "commonErrors": [
                    "Missing the 8s place value and getting 62 or 46."
          ]
},
        },
        {
          id: "ecs11-u7-positional-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many bits are needed to store the denary value 300?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Bits",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Powers of two",
                              "statement": "n bits can store values 0 to 2^n - 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2^8 = 256 is too small; 2^9 = 512 is large enough.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "300 lies between 256 and 512, so it needs 9 bits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Check: 9 bits store 0-511, which includes 300.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "9 bits",
          "commonErrors": [
                    "Answering 8 because 300 is 'about 256'."
          ]
},
        },
        {
          id: "ecs11-u7-positional-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why hexadecimal is used to represent binary data, supporting your answer with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Hexadecimal compactness",
                              "statement": "One hex digit represents exactly 4 bits (one nibble)."
                    },
                    {
                              "kind": "comparison",
                              "name": "Hex vs binary",
                              "statement": "Hex is shorter than binary but still exact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each hex digit maps to exactly 4 binary digits, so conversion is exact.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Hex is more compact: 8 bits become 2 characters instead of 8.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: byte 1111 1111₂ = FF₁₆ = 255, far easier to read and type.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Less prone to human error when reading, writing and checking values.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Used in real systems: memory addresses, colour codes, MAC addresses.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Hex is compact and exact because each digit = 4 bits.",
          "commonErrors": [
                    "Saying hex is 'easier for the computer' — computers work in binary; hex helps humans."
          ]
},
        },
        {
          id: "ecs11-u7-positional-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A memory dump shows the byte 1010 1100₂.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Convert the byte to hexadecimal.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Convert the hexadecimal value 3F₁₆ to binary and denary.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Nibble grouping",
                              "statement": "Group binary in 4s; each group is one hex digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Split into nibbles: 1010 and 1100.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 1010₂ = 10 = A; 1100₂ = 12 = C.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Result: AC₁₆.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 3 = 0011₂ and F = 1111₂, so 3F₁₆ = 0011 1111₂.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Denary: 0011 1111₂ = 32+16+8+4+2+1 = 63.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Check: 3 x 16 + 15 = 63.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) AC₁₆  (b) 0011 1111₂ = 63",
          "commonErrors": [
                    "Grouping from the wrong end for odd-length binary.",
                    "Reading F as 15 in binary instead of 1111."
          ]
},
        },
        {
          id: "ecs11-u7-positional-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A system stores integer values using binary.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Show that denary 200 is stored as 11001000₂, using repeated division by 2.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Add the binary numbers 101101₂ and 110010₂, showing your carries.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Repeated division",
                              "statement": "Divide by 2 repeatedly; remainders read bottom-up give binary."
                    },
                    {
                              "kind": "method",
                              "name": "Binary addition",
                              "statement": "Add column by column; 1+1 = 10 with a carry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 200/2=100 r0; 100/2=50 r0; 50/2=25 r0; 25/2=12 r1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 12/2=6 r0; 6/2=3 r0; 3/2=1 r1; 1/2=0 r1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Remainders read upwards: 11001000₂.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Check: 128+64+8 = 200.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Align: 101101 + 110010; column sums give 1,1,1,1,1 with a carry into a new 7th bit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) 1+1 in the top column produces 0 with carry 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Result: 1011111₂.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Check: 45 + 50 = 95 = 1011111₂.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 11001000₂  (b) 1011111₂ (= 95)",
          "commonErrors": [
                    "Reading remainders top-down instead of bottom-up.",
                    "Forgetting the carry in the top column."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u7-binary-arithmetic",
      title: "Binary Arithmetic and Overflow",
      skill: "Add binary numbers, explain carries and identify overflow in fixed-width storage.",
      lesson: {
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
      },
      questions: [
        {
          id: "ecs11-u7-binary-arith-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 1011₂ + 0110₂ in binary?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1111₂"
                    },
                    {
                              "id": "b",
                              "text": "10001₂"
                    },
                    {
                              "id": "c",
                              "text": "10000₂"
                    },
                    {
                              "id": "d",
                              "text": "11001₂"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary column addition",
                              "statement": "1+1 produces 0 with a carry of 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1011 + 0110 = 10001₂ (a carry is produced in the top column).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 10001₂",
          "commonErrors": [
                    "Dropping the carry and answering 1111."
          ]
},
        },
        {
          id: "ecs11-u7-binary-arith-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the denary value of 1011₂ + 0110₂?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Denary",
                              "answer": 17
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Convert then add",
                              "statement": "1011₂ = 11 and 0110₂ = 6, so the sum is 17."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convert each operand: 1011₂ = 11, 0110₂ = 6.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "11 + 6 = 17.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "17",
          "commonErrors": [
                    "Adding the binary strings as if they were denary numbers."
          ]
},
        },
        {
          id: "ecs11-u7-binary-arith-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 1101₂ + 1011₂, giving your answer in denary.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Denary",
                              "answer": 24
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary addition",
                              "statement": "1101 + 1011 = 11000₂."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Align and add column by column with carries.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "1101₂ + 1011₂ = 11000₂.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "11000₂ = 16+8 = 24.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "24",
          "commonErrors": [
                    "Writing 11100₂ by misplacing the final carry."
          ]
},
        },
        {
          id: "ecs11-u7-binary-arith-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Calculate 1010₂ - 0110₂, explaining how you handle the borrowing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary subtraction",
                              "statement": "Borrow 1 from the next higher column, which is worth 2 in the current column."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Align: 1010 - 0110; the units column needs a borrow because 0 < 0 is false but 0 - 0 requires borrowing through zeros.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Borrow propagates: the 8s column lends to the 4s column which lends to the 2s column.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Column results: 1010 - 0110 = 0100₂.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Check in denary: 10 - 6 = 4 = 0100₂.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear statement of the borrow rule used.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "0100₂ (= 4)",
          "commonErrors": [
                    "Borrowing only one column instead of propagating through the zero.",
                    "Answering 0110 by ignoring place values."
          ]
},
        },
        {
          id: "ecs11-u7-binary-arith-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A 4-bit register stores unsigned binary values.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Show what is stored after adding 1111₂ + 0001₂ to the register.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the largest value the register can hold.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fixed-width overflow",
                              "statement": "Results exceeding 2^n - 1 wrap around modulo 2^n."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 1111 + 0001 = 10000₂, which needs 5 bits.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The 4-bit register cannot store the leading 1, so it is discarded.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Stored value: 0000₂ (= 0).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 4 bits store values 0 to 2^4 - 1.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Largest value = 15 (1111₂).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Adding 1 to 15 gives 16, which overflows — consistent with part (a).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 0000₂  (b) 15",
          "commonErrors": [
                    "Answering 16 for part (b) — that requires 5 bits."
          ]
},
        },
        {
          id: "ecs11-u7-binary-arith-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An 8-bit system is used to add the denary values 200 and 100.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Show whether overflow occurs and state the value actually stored.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why the result is wrong and how many bits would be needed to store the true sum.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Overflow range",
                              "statement": "8 bits store 0-255; 200 + 100 = 300 exceeds this."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) True sum = 300, but 8 bits only hold up to 255.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 300 - 256 = 44 is stored (the carry out of bit 7 is discarded).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Stored value = 44, which is incorrect.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Conclusion: overflow has occurred.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The result is wrong because the true value 300 does not fit in 8 bits.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) 2^8 = 256 is too small; 2^9 = 512 is large enough.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) 9 bits are needed to store values up to 511.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Programmers detect overflow by checking the carry-out flag or using wider types.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Overflow; stores 44  (b) 9 bits needed",
          "commonErrors": [
                    "Saying the system stores 300 — impossible in 8 bits.",
                    "Answering 8 bits are 'almost enough'."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u7-lesson-7-1-notes",
      title: "Number Systems Revision Notes",
      summary: "Binary, hexadecimal and denary conversions, binary addition and overflow.",
      sections: [
        { heading: "Conversion cheat sheet", body: "Binary to denary: sum digit x 2^position. Hexadecimal: each digit = 4 bits (one nibble). Denary to binary: repeated division by 2, remainders read bottom-up. Denary to hex: divide by 16, remainders 10-15 become A-F." },
        { heading: "Binary arithmetic", body: "Add column by column from the right. 1+1 = 10 (write 0, carry 1). For subtraction, borrow propagates through zero columns. Always verify by converting back to denary." },
        { heading: "Overflow", body: "An n-bit register holds 0 to 2^n - 1. Larger results wrap around modulo 2^n, giving silently wrong answers. Check the carry-out or use a wider type." },
      ],
    },
  ],
};

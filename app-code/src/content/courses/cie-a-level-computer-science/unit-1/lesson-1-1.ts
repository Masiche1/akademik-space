import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "ciealc-u1-lesson-1-1",
  code: "1-1",
  title: "Data Representation: Number Systems",
  goal: "I CAN convert between binary, denary and hexadecimal and explain place values and overflow.",
  standards: ["Cambridge A Level Computer Science 9618: data representation", "9618 topic 1"],
  
  vocabulary: [
    { term: "Binary", definition: "Base-2 number system using digits 0 and 1." },
    { term: "Bit", definition: "Single binary digit — smallest unit of data." },
    { term: "Byte", definition: "Group of 8 bits." },
    { term: "Place value", definition: "Each digit's value determined by position." },
    { term: "Overflow", definition: "Value exceeding storage capacity — wraps or errors." },
    { term: "Hexadecimal", definition: "Base-16 system: 0-9, A-F; each hex digit = 4 bits." },
  ],
  concepts: [
    {
      id: "ciealc-u1-s1-num",
      title: "Number systems",
      skill: "Convert between binary, denary and hexadecimal at A Level.",
      lesson: {
        sections: [
          {
            heading: "Place values and conversions",
            body: "Binary place values double: 128 64 32 16 8 4 2 1. Denary→binary: halve repeatedly, record remainders bottom-up. Binary→denary: sum place values of 1-bits. Hex: group binary into nibbles (4 bits each).",
          },
          {
            heading: "Overflow and range",
            body: "n-bit values range 0 to 2^n−1. 8-bit: 0–255. Overflow when exceeding max — may wrap (modulo) or error. Signed representation uses two's complement for negatives.",
          },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Range", statement: "n bits → 0 to 2^n−1" },
          { name: "Hex", statement: "1 hex digit = 4 bits" },
        ],
        workedExample: {
          problem: "Convert 1011 0110 to denary and hex. What's the max 8-bit value?",
          solution: "Denary: 128+32+16+4+2=182. Hex: 1011=B, 0110=6 → 0xB6. Max 8-bit=255.",
        },
      },
      questions: [
        {
          id: "ciealc-u1-ns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits in a byte?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "16"
                    },
                    {
                              "id": "d",
                              "text": "32"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Byte",
                              "statement": "8 bits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Byte = 8 bits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8"
},
        },
        {
          id: "ciealc-u1-ns-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert 0110 1010 to denary.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary→denary",
                              "statement": "Sum place values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "64+32+8+2=106.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer 106.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "106"
},
        },
        {
          id: "ciealc-u1-ns-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 0x2F to binary and denary. Show working.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Hex conversion",
                              "statement": "Hex→binary→denary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2=0010, F=1111 → 0010 1111.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Denary: 32+8+4+2+1=47.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 47.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "47"
},
        },
        {
          id: "ciealc-u1-ns-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define binary, bit, byte, place value, overflow, hexadecimal. (b) What are byte place values? (c) Convert 1100 0011 to denary. (d) Convert 200 to 8-bit binary. (e) Convert 0xFF to binary and denary. (f) What is overflow? (g) Convert 0xA3 to binary. (h) How many values can 4 bits represent?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Number systems",
                              "statement": "Conversions, overflow, hex."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 128 64 32 16 8 4 2 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 128+64+2+1=195.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1100 1000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1111 1111 = 255.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Exceeds capacity → wraps/errors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 1010 0011.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) 16 (2^4).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Number system conversions and overflow."
},
        },
        {
          id: "ciealc-u1-ns-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the denary value of binary 1010?",
          response: {
          "type": "mcq",
          "choices": [
                    { "id": "a", "text": "10" },
                    { "id": "b", "text": "12" },
                    { "id": "c", "text": "8" },
                    { "id": "d", "text": "5" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Binary→denary", "statement": "Sum place values." }
          ],
          "steps": [
                    { "reasoning": "8+2=10.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "ciealc-u1-ns-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert binary 1100 1010 to denary. Give your answer as a number.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 202 }
          ]
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Binary→denary", "statement": "Sum place values." }
          ],
          "steps": [
                    { "part": "a", "reasoning": "128+64+8+2=202.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "202"
},
        },
        {
          id: "ciealc-u1-ns-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what is meant by overflow in an n-bit register, and give an example using 4-bit values.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    { "kind": "definition", "name": "Overflow", "statement": "Value exceeds capacity." }
          ],
          "steps": [
                    { "reasoning": "Overflow = result exceeds max storable value (2^n−1).", "marks": 1, "markCode": "M" },
                    { "reasoning": "E.g. 1111 + 1 = 10000 cannot fit in 4 bits → wraps to 0000.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Value exceeds 2^n−1; e.g. 4-bit 1111+1 wraps."
},
        },
        {
          id: "ciealc-u1-ns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which hexadecimal value represents the binary number 1010 1111?",
          response: {
          "type": "mcq",
          "choices": [
                    { "id": "a", "text": "0xAF" },
                    { "id": "b", "text": "0xFA" },
                    { "id": "c", "text": "0x5F" },
                    { "id": "d", "text": "0xA5" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Binary→hex", "statement": "Group into nibbles." }
          ],
          "steps": [
                    { "reasoning": "1010=A, 1111=F → 0xAF.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "0xAF"
},
        },
        {
          id: "ciealc-u1-ns-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Convert 0x3C to denary. (b) What is the maximum value storable in 6 bits? Give both answers as numbers.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 60 },
                    { "label": "b", "answer": 63 }
          ]
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Hex→denary and range", "statement": "2^n−1 max." }
          ],
          "steps": [
                    { "part": "a", "reasoning": "3×16+12=60.", "marks": 1, "markCode": "M" },
                    { "part": "b", "reasoning": "2^6−1=63.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "60 and 63"
},
        },
        {
          id: "ciealc-u1-ns-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is hexadecimal widely used to represent binary data in computing?",
          response: {
          "type": "mcq",
          "choices": [
                    { "id": "a", "text": "Each hex digit represents exactly 4 bits, making conversion compact" },
                    { "id": "b", "text": "Hexadecimal is faster for the CPU to process than binary" },
                    { "id": "c", "text": "Hexadecimal can store larger numbers than binary" },
                    { "id": "d", "text": "Hexadecimal uses fewer bits per digit than binary" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    { "kind": "definition", "name": "Hexadecimal", "statement": "1 digit = 4 bits." }
          ],
          "steps": [
                    { "reasoning": "Hex digits map 1:1 to nibbles — compact and unambiguous.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "1 hex digit = 4 bits"
},
        },
        {
          id: "ciealc-u1-ns-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert decimal 173 to binary, then convert that binary value to hexadecimal. Show all working.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Denary→binary→hex", "statement": "Halving / nibble grouping." }
          ],
          "steps": [
                    { "reasoning": "173 = 128+32+8+4+1 → 1010 1101.", "marks": 1, "markCode": "M" },
                    { "reasoning": "Group nibbles: 1010=A, 1101=D.", "marks": 1, "markCode": "M" },
                    { "reasoning": "Answer: 0xAD.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "1010 1101 = 0xAD"
},
        },
        {
          id: "ciealc-u1-ns-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different values can be represented using 5 bits? Give your answer as a number.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 32 }
          ]
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Range", "statement": "2^n values." }
          ],
          "steps": [
                    { "part": "a", "reasoning": "2^5 = 32.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "32"
},
        },
        {
          id: "ciealc-u1-ns-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An unsigned 4-bit register contains 1111. One is added to it. What value is stored afterwards, and why?",
          response: {
          "type": "mcq",
          "choices": [
                    { "id": "a", "text": "0000 — the value wraps around modulo 16" },
                    { "id": "b", "text": "10000 — the register expands to 5 bits" },
                    { "id": "c", "text": "1111 — the addition is ignored" },
                    { "id": "d", "text": "Error — no valid value exists" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    { "kind": "principle", "name": "Overflow wrap", "statement": "Unsigned overflow wraps modulo 2^n." }
          ],
          "steps": [
                    { "reasoning": "1111 + 1 = 16 = 10000₂, too large for 4 bits.", "marks": 1, "markCode": "M" },
                    { "reasoning": "Wraps to 0000 (16 mod 16 = 0).", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "0000 (wraps)"
},
        },
        {
          id: "ciealc-u1-ns-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Convert 1010 1100 to denary. (b) Convert 0x2A to denary. Give both answers as numbers.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 172 },
                    { "label": "b", "answer": 42 }
          ]
},
          markscheme: {
          "principles": [
                    { "kind": "skill", "name": "Conversions", "statement": "Binary/hex→denary." }
          ],
          "steps": [
                    { "part": "a", "reasoning": "128+32+8+4=172.", "marks": 1, "markCode": "M" },
                    { "part": "b", "reasoning": "2×16+10=42.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "172 and 42"
},
        },
        {
          id: "ciealc-u1-ns-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how two's complement represents negative numbers in binary, and show how -5 is stored in 4 bits.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    { "kind": "technique", "name": "Two's complement", "statement": "Invert and add 1." }
          ],
          "steps": [
                    { "reasoning": "MSB indicates sign; negatives stored as 2's complement.", "marks": 1, "markCode": "M" },
                    { "reasoning": "Method: write positive value, invert all bits, add 1.", "marks": 1, "markCode": "M" },
                    { "reasoning": "5 = 0101 → invert 1010 → +1 = 1011.", "marks": 1, "markCode": "M" },
                    { "reasoning": "1011 = −8+0+2+1 = −5.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Invert bits and add 1: -5 → 1011"
},
        },
        {
          id: "ciealc-u1-ns-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the place value of the leftmost bit in a single byte?",
          response: {
          "type": "mcq",
          "choices": [
                    { "id": "a", "text": "128" },
                    { "id": "b", "text": "64" },
                    { "id": "c", "text": "256" },
                    { "id": "d", "text": "1" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    { "kind": "definition", "name": "Place value", "statement": "128 64 32 16 8 4 2 1." }
          ],
          "steps": [
                    { "reasoning": "Leftmost of 8 bits = 2^7 = 128.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "128"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-ns-notes",
      title: "Number systems — notes",
      summary: "Binary=base2, hex=base16 (4 bits/digit), denary=base10. n bits → 0 to 2^n−1.",
      sections: [
        { heading: "Key idea", body: "Group binary into nibbles for hex conversion." },
        { heading: "Overflow", body: "Values exceeding 2^n−1 wrap or error." },
      ],
    },
  ],
};

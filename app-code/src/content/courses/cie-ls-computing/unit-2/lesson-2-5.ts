import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cils-c-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 8 — Binary and Number Systems",
  goal: "I CAN convert between binary, denary and hexadecimal and explain place values.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: computer systems", "Cambridge Lower Secondary Computing 0860 strand: Computer systems"],
  stage: 8,
  vocabulary: [
    { term: "Binary", definition: "Base-2: digits 0-1." },
    { term: "Hexadecimal", definition: "Base-16: digits 0-9, A-F." },
    { term: "Denary", definition: "Base-10: digits 0-9." },
    { term: "Place value", definition: "Each digit's value by position." },
    { term: "Bit", definition: "One binary digit." },
    { term: "Nibble", definition: "4 bits — one hex digit." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s5-binary",
      title: "Number systems",
      skill: "Convert binary↔denary↔hex at Stage 8 level.",
      lesson: {
        sections: [
          {
            heading: "Place values",
            body: "Binary place values double: 128 64 32 16 8 4 2 1. Hex uses 16 symbols (0-9,A-F) where each hex digit = 4 bits (a nibble). Hex is compact — programmers use it for colours (#FF0000=red) and memory addresses.",
          },
          {
            heading: "Converting",
            body: "Binary→denary: add place values of 1-bits. Denary→binary: halve repeatedly, record remainders. Binary→hex: group into nibbles (4 bits each), convert each. Hex→binary: expand each hex digit to 4 bits.",
          },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Hex", statement: "1 hex digit = 4 bits" },
          { name: "#RRGGBB", statement: "hex colour code" },
        ],
        workedExample: {
          problem: "Convert 1011 0110 to hex, then to denary.",
          solution: "Nibbles: 1011=11=B, 0110=6 → 0xB6. Denary: 128+32+16+4+2=182? Check: bits 7,5,4,2,1 = 128+32+16+4+2=182.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-bn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits does one hexadecimal digit represent?",
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
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "16"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hex digit",
                              "statement": "4 bits = nibble."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "16 hex values = 2^4 = 4 bits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4 bits"
},
        },
        {
          id: "cils-c-u2-bn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert 0101 to denary. Convert 12 to binary (4-bit).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conversions",
                              "statement": "Binary↔denary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0101 = 4+1 = 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "12 = 1100.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5 and 1100"
},
        },
        {
          id: "cils-c-u2-bn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 0x3F to binary then denary. Show working.",
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
                              "reasoning": "3=0011, F=1111 → 0011 1111.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Denary: 32+16+8+4+2+1=63.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 63.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "63"
},
        },
        {
          id: "cils-c-u2-bn-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define binary, hexadecimal, denary, place value, bit, nibble. (b) What are binary place values? (c) Convert 0110 1010 to denary. (d) Convert 200 to binary (8-bit). (e) Convert 0xFF to binary and denary. (f) Why use hex for colours? (g) Convert 0xA5 to binary. (h) How many colours can 24-bit depth show?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Number systems",
                              "statement": "Conversions, hex, colours."
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
                              "reasoning": "(c) 64+32+8+2=106.",
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
                              "reasoning": "(f) Compact: #FF0000 vs long binary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 1010 0101.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) 16.7 million (2^24).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Binary, hex, denary conversions."
},
        },
        {
          id: "cils-c-u2-bn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which digits are used in the binary number system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0 to 15"
                    },
                    {
                              "id": "b",
                              "text": "A to F"
                    },
                    {
                              "id": "c",
                              "text": "0 and 1"
                    },
                    {
                              "id": "d",
                              "text": "0 to 9"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Binary",
                              "statement": "Base-2: digits 0-1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary uses only two digits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0 and 1"
},
        },
        {
          id: "cils-c-u2-bn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 1010 to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 10 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary→denary",
                              "statement": "Sum place values of 1-bits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "8 + 2 = 10.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "cils-c-u2-bn-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert 1111 to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 15 }
          ]
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
                              "part": "a",
                              "reasoning": "8+4+2+1 = 15.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "15"
},
        },
        {
          id: "cils-c-u2-bn-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 26 to binary, showing your working (repeated halving).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Denary→binary",
                              "statement": "Halve, record remainders."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "26→13 r0, 13→6 r1, 6→3 r0, 3→1 r1, 1→0 r1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Remainders read bottom-up: 11010.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: 16+8+2 = 26. Correct.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "11010"
},
        },
        {
          id: "cils-c-u2-bn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In hexadecimal, what denary value does the digit 'A' represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12"
                    },
                    {
                              "id": "b",
                              "text": "11"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hex digits",
                              "statement": "A=10, B=11, ... F=15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hex A stands for 10.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "cils-c-u2-bn-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Convert 0x2A to denary.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 42 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Hex→denary",
                              "statement": "2×16 + 10×1."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2*16 + A(10)*1 = 32 + 10 = 42.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "42"
},
        },
        {
          id: "cils-c-u2-bn-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do programmers use hexadecimal for colour codes like #FF0000 instead of binary?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hex can store more colours than binary"
                    },
                    {
                              "id": "b",
                              "text": "Binary cannot represent colours"
                    },
                    {
                              "id": "c",
                              "text": "Computers cannot read binary"
                    },
                    {
                              "id": "d",
                              "text": "Hex is compact — each digit is 4 bits, so it's shorter and easier to read"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hex",
                              "statement": "Compact representation of binary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 hex digit = 4 bits → shorter, readable codes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Compact and readable"
},
        },
        {
          id: "cils-c-u2-bn-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define binary, hexadecimal, denary, place value, bit, nibble. (b) What are the 8 binary place values? (c) Convert 0110 1010 to denary. (d) Convert 200 to 8-bit binary. (e) Why is hex used for memory addresses?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Number systems",
                              "statement": "Conversions, hex."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 128 64 32 16 8 4 2 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 64+32+8+2 = 106.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1100 1000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Compact — fewer digits to read/write than binary.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Number systems and conversions."
},
        },
        {
          id: "cils-c-u2-bn-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'nibble'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8 bits"
                    },
                    {
                              "id": "b",
                              "text": "4 bits — equivalent to one hex digit"
                    },
                    {
                              "id": "c",
                              "text": "16 bits"
                    },
                    {
                              "id": "d",
                              "text": "1 bit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nibble",
                              "statement": "4 bits = 1 hex digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A nibble is half a byte — 4 bits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4 bits"
},
        },
        {
          id: "cils-c-u2-bn-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert the binary number 1100 to hexadecimal.",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary→hex",
                              "statement": "1100 = 8+4 = 12 = C."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "1100 binary = 12 denary = C hex.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12 (0xC)"
},
        },
        {
          id: "cils-c-u2-bn-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an 8-bit binary number, what is the place value of the leftmost bit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "64"
                    },
                    {
                              "id": "c",
                              "text": "128"
                    },
                    {
                              "id": "d",
                              "text": "256"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Place value",
                              "statement": "Values double leftward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Place values: 128 64 32 16 8 4 2 1 — leftmost is 128.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "128"
},
        },
        {
          id: "cils-c-u2-bn-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define denary, binary, hexadecimal, bit, place value. (b) Convert 0xF0 to binary. (c) Convert that binary to denary. (d) Convert 100 to binary. (e) Convert 1010 1111 to hex. (f) A colour is #00FF00 — which colour is it and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Number systems",
                              "statement": "Conversions, hex colours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) F=1111, 0=0000 → 1111 0000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 128+64+32+16 = 240.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1100 100.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1010=A, 1111=F → 0xAF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Green — G channel max, R and B zero.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Conversions and hex colours."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-bn-notes",
      title: "Number systems — notes",
      summary: "Binary=base2, hex=base16 (1 digit=4 bits), denary=base10. Hex compact for colours/addresses.",
      sections: [
        { heading: "Key idea", body: "Group binary into nibbles (4 bits) for hex conversion." },
        { heading: "Hex colours", body: "#RRGGBB — two hex digits per colour channel." },
      ],
    },
  ],
};

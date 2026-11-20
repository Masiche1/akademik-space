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
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "8"
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
          "correctChoiceId": "a"
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

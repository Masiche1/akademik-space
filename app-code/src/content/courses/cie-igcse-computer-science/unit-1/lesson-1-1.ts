import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciecs-u1-lesson-1-1",
  code: "1-1",
  title: "Number Systems and Binary",
  goal: "I CAN convert between binary, denary and hexadecimal and explain place values and overflow.",
  standards: ["Cambridge IGCSE Computer Science 0478: data representation", "0478 section 1: number systems"],
  
  vocabulary: [
    { term: "Binary", definition: "Base-2 number system using digits 0 and 1." },
    { term: "Bit", definition: "Single binary digit — smallest unit of data." },
    { term: "Byte", definition: "Group of 8 bits." },
    { term: "Place value", definition: "Each digit's value determined by position." },
    { term: "Overflow", definition: "When a value exceeds storage capacity and wraps/errors." },
    { term: "Hexadecimal", definition: "Base-16 system: digits 0-9 and A-F; each hex digit = 4 bits." },
  ],
  concepts: [
    {
      id: "ciecs-u1-s1-binary",
      title: "Number systems and binary",
      skill: "Convert between binary, denary and hexadecimal at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Place values",
            body: "Binary place values double left-to-right: 128 64 32 16 8 4 2 1. An 8-bit byte holds values 0–255. Add place values of '1' bits for denary conversion; halve repeatedly for denary→binary.",
          },
          {
            heading: "Hexadecimal and overflow",
            body: "Hex is compact: each hex digit = 4 bits (a nibble). Group binary into nibbles for hex. Overflow occurs when a value exceeds the maximum storable — e.g. 8-bit max is 255; 256 wraps to 0 or errors.",
          },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Hex", statement: "1 hex digit = 4 bits = 1 nibble" },
          { name: "8-bit range", statement: "0 to 255" },
        ],
        workedExample: {
          problem: "Convert 1011 0101 to denary and hex.",
          solution: "Denary: 128+32+16+4+1 = 181. Hex: 1011=B, 0101=5 → 0xB5.",
        },
      },
      questions: [
        {
          id: "ciecs-u1-bn-q1",
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
          id: "ciecs-u1-bn-q2",
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
                              "reasoning": "Bits: 64+32+8+2 = 106.",
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
          id: "ciecs-u1-bn-q3",
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
          id: "ciecs-u1-bn-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define binary, bit, byte, place value, overflow, hexadecimal. (b) What are the place values in a byte? (c) Convert 1100 0011 to denary. (d) Convert 200 to 8-bit binary. (e) Convert 0xFF to binary and denary. (f) What is overflow and when does it happen? (g) Convert 0xA3 to binary. (h) How many different values can 4 bits represent?",
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
                              "reasoning": "(f) Value exceeds capacity → wraps/errors.",
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
          id: "ciecs-u1-bn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the denary value of binary 1010?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "5" },
              { id: "c", text: "12" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Binary→denary", statement: "Sum place values of 1 bits." },
            ],
            steps: [
              { reasoning: "8+2 = 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 10",
          },
        },
        {
          id: "ciecs-u1-bn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different values can 3 bits represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "6" },
              { id: "c", text: "4" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bit combinations", statement: "n bits → 2^n values." },
            ],
            steps: [
              { reasoning: "2^3 = 8 values (000 to 111).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 8",
          },
        },
        {
          id: "ciecs-u1-bn-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which binary number is equal to denary 9?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1001" },
              { id: "b", text: "0110" },
              { id: "c", text: "1010" },
              { id: "d", text: "1100" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Denary→binary", statement: "8+1 = 9 → 1001." },
            ],
            steps: [
              { reasoning: "9 = 8+1 → bits 8 and 1 set → 1001.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 1001",
          },
        },
        {
          id: "ciecs-u1-bn-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits does one hexadecimal digit represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hex digit", statement: "1 hex digit = 1 nibble = 4 bits." },
            ],
            steps: [
              { reasoning: "16 hex values need 4 bits (2^4 = 16).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 4",
          },
        },
        {
          id: "ciecs-u1-bn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when a value exceeds the maximum an 8-bit register can store?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is stored correctly anyway" },
              { id: "b", text: "It wraps around or causes an error (overflow)" },
              { id: "c", text: "The register automatically doubles in size" },
              { id: "d", text: "It is rounded to the nearest value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Overflow", statement: "Value exceeds storage capacity → wraps or errors." },
            ],
            steps: [
              { reasoning: "Fixed-width storage cannot hold larger values → overflow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Wraps around or causes an error (overflow)",
          },
        },
        {
          id: "ciecs-u1-bn-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the maximum denary value an 8-bit byte can store?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "128" },
              { id: "b", text: "255" },
              { id: "c", text: "256" },
              { id: "d", text: "512" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "8-bit range", statement: "0 to 255 (2^8 - 1)." },
            ],
            steps: [
              { reasoning: "2^8 = 256 values, 0–255; max is 255.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 255",
          },
        },
        {
          id: "ciecs-u1-bn-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert binary 0101 1100 to denary.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 92 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Binary→denary", statement: "64+16+8+4 = 92." },
            ],
            steps: [
              { reasoning: "Bits set: 64,16,8,4 → 64+16+8+4 = 92.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "92",
          },
        },
        {
          id: "ciecs-u1-bn-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits are needed to represent the denary value 200?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bits needed", statement: "Smallest n where 2^n > value." },
            ],
            steps: [
              { reasoning: "2^7 = 128 < 200; 2^8 = 256 > 200 → 8 bits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciecs-u1-bn-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert each value to denary: (a) 0xC5, (b) binary 0011 0110.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 197 },
              { label: "b", answer: 54 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hex/binary→denary", statement: "0xC5 = 12×16+5 = 197; 0011 0110 = 32+16+4+2 = 54." },
            ],
            steps: [
              { reasoning: "(a) C=12, 5 → 12×16+5 = 197.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "(b) 32+16+4+2 = 54.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 197; (b) 54",
          },
        },
        {
          id: "ciecs-u1-bn-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the largest denary value a 6-bit register can store?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 63 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "n-bit range", statement: "0 to 2^n - 1." },
            ],
            steps: [
              { reasoning: "2^6 - 1 = 63.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "ciecs-u1-bn-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give three answers: (a) the number of bits needed to store 500, (b) the largest value a 4-bit nibble can hold, (c) the denary value of binary 1001 0111.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 15 },
              { label: "c", answer: 151 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Number systems", statement: "2^10 = 1024 > 500; 2^4 - 1 = 15; 128+16+4+2+1 = 151." },
            ],
            steps: [
              { reasoning: "(a) 2^9 = 512 > 500 → 10 bits.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "(b) 2^4 - 1 = 15.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "(c) 128+16+4+2+1 = 151.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 10; (b) 15; (c) 151",
          },
        },
        {
          id: "ciecs-u1-bn-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why overflow is a serious problem in real computer systems, and describe one way a system can detect or prevent it. Support your answer with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Overflow", statement: "Fixed-width storage wraps/errors; needs detection or wider storage." },
            ],
            steps: [
              { reasoning: "Overflow gives wrong values silently or crashes — e.g. 8-bit 255 + 1 wraps to 0.", marks: 1, markCode: "M" },
              { reasoning: "Consequences: corrupted data, wrong calculations, security issues.", marks: 1, markCode: "M" },
              { reasoning: "Prevention: use more bits, range-check inputs, or detect carry/flag.", marks: 1, markCode: "M" },
              { reasoning: "Valid example given (e.g. age field, sensor readings).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Silent wrong values/corruption; prevent via wider storage or range checks",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u1-bn-notes",
      title: "Number systems — notes",
      summary: "Binary=base2, hex=base16 (4 bits/digit), denary=base10. 8-bit byte = 0–255; overflow wraps.",
      sections: [
        { heading: "Key idea", body: "Group binary into nibbles for hex conversion." },
        { heading: "Overflow", body: "Values exceeding storage capacity wrap or error." },
      ],
    },
  ],
};

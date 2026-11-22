import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cipc-u2-lesson-2-12",
  code: "2-12",
  title: "Stage 6 — How Computers Store Data: Binary",
  goal: "I CAN explain binary representation and convert between binary and denary.",
  standards: ["Cambridge Primary Computing 0059 Stage 6: computer systems", "Cambridge Primary Computing 0059 framework strands: Computer systems"],
  stage: 6,
  vocabulary: [
    { term: "Binary", definition: "Base-2 number system using only 0 and 1." },
    { term: "Bit", definition: "One binary digit — 0 or 1." },
    { term: "Byte", definition: "8 bits grouped together." },
    { term: "Denary", definition: "Base-10 number system we normally use." },
    { term: "Place value", definition: "Each bit's value doubles: 128, 64, 32, 16, 8, 4, 2, 1." },
    { term: "Character encoding", definition: "Rules mapping characters to binary codes." },
  ],
  concepts: [
    {
      id: "cipc-u2-s6-binary",
      title: "Binary representation",
      skill: "Convert binary↔denary and explain why computers use binary at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Why binary?",
            body: "Computers use binary because electronic switches are either on (1) or off (0) — two states. Everything — numbers, text, images, sound — is encoded as patterns of 0s and 1s.",
          },
          {
            heading: "Converting",
            body: "Each bit has a place value doubling left to right: 128 64 32 16 8 4 2 1. To convert binary to denary, add the values of bits that are 1. Denary to binary: repeatedly halve and record remainders.",
          },
        ],
        keyFormulas: [
          { name: "Place values", statement: "128 64 32 16 8 4 2 1" },
          { name: "Conversion", statement: "add place values of 1-bits" },
        ],
        workedExample: {
          problem: "Convert 0101 1010 to denary.",
          solution: "64 + 8 + 2 = 74. (Bits at 64, 8, 2 are set.)",
        },
      },
      questions: [
        {
          id: "cipc-u2-bi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do computers use binary?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It's faster to type"
                    },
                    {
                              "id": "b",
                              "text": "No reason"
                    },
                    {
                              "id": "c",
                              "text": "Electronic switches have two states: on/off"
                    },
                    {
                              "id": "d",
                              "text": "It's smaller"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Binary",
                              "statement": "Two-state representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hardware is on/off — binary matches naturally.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "On/off states"
},
        },
        {
          id: "cipc-u2-bi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many bits in a byte? What are the place values of an 8-bit number?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bit and byte",
                              "statement": "8 bits = 1 byte."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "128 64 32 16 8 4 2 1.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8; 128→1"
},
        },
        {
          id: "cipc-u2-bi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 0011 0101 to denary. Show your working.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary conversion",
                              "statement": "Sum place values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set bits at 32, 16, 4, 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "32+16+4+1 = 53.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 53.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "53"
},
        },
        {
          id: "cipc-u2-bi-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Why binary? (b) What is a bit and byte? (c) Convert 0101 1111 to denary. (d) Convert 42 to binary (8-bit). (e) How is text stored in binary? (f) What is character encoding? (g) Why can't denary be used directly by computers? (h) How many values can 8 bits represent?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Binary",
                              "statement": "Conversions, encoding, limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two-state hardware.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Bit=1 digit; byte=8 bits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 64+8+4+2+1=79.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 0010 1010.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Each character → binary code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Mapping rules character↔binary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Hardware only has on/off states.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) 256 values (0-255).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Binary system, conversions, encoding, 256 values."
},
        },
        {
          id: "cipc-u2-bi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits are in 1 byte?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "16" },
            { id: "c", text: "2" },
            { id: "d", text: "4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Byte", statement: "8 bits." }],
            steps: [
              { reasoning: "1 byte = 8 bits.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** 8",
          },
        },
        {
          id: "cipc-u2-bi-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert binary 0101 to denary. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary to denary", statement: "Add place values of 1s." }],
            steps: [
              { reasoning: "Place values (4-bit): 8, 4, 2, 1 → 0101 = 0×8 + 1×4 + 0×2 + 1×1.", marks: 1, markCode: "M" },
              { reasoning: "= 4 + 1 = 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipc-u2-bi-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert binary 0010 1100 to denary.",
          response: { type: "numeric", parts: [{ label: "a", answer: 44 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary to denary", statement: "Sum place values of 1 bits." }],
            steps: [
              { reasoning: "0010 1100 = 32 + 8 + 4 = 44.", marks: 1, markCode: "M" },
              { reasoning: "Denary value is 44.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "44",
          },
        },
        {
          id: "cipc-u2-bi-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the denary value of binary 1000?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "16" },
            { id: "c", text: "8" },
            { id: "d", text: "4" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Powers of two", statement: "Leftmost bit = highest place." }],
            steps: [
              { reasoning: "1000 = 1×8 = 8.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** 8",
          },
        },
        {
          id: "cipc-u2-bi-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert denary 13 to binary (8-bit). Show each division step.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Denary to binary", statement: "Repeated halving / place values." }],
            steps: [
              { reasoning: "13 = 8 + 4 + 1 → bits at 8, 4, 1 places.", marks: 1, markCode: "M" },
              { reasoning: "8-bit: 0000 1101.", marks: 1, markCode: "M" },
              { reasoning: "Binary is 00001101.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0000 1101",
          },
        },
        {
          id: "cipc-u2-bi-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many different values can 4 bits represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "16" },
            { id: "c", text: "8" },
            { id: "d", text: "32" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Bit combinations", statement: "2^n values for n bits." }],
            steps: [
              { reasoning: "n bits give 2^n values: 2^4 = 16.", marks: 1, markCode: "M" },
              { reasoning: "4 bits → 16 values (0-15).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 16",
          },
        },
        {
          id: "cipc-u2-bi-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How is the letter 'A' stored in a computer? Explain character encoding in two sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Character encoding", statement: "Characters → binary codes." }],
            steps: [
              { reasoning: "Each character has a code number (e.g. ASCII/Unicode).", marks: 1, markCode: "M" },
              { reasoning: "That number is stored as binary bits in memory.", marks: 1, markCode: "M" },
              { reasoning: "The computer converts the binary back to the character for display.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Character → code number → binary storage.",
          },
        },
        {
          id: "cipc-u2-bi-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do computers use binary instead of denary?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Why binary", statement: "Two states = reliable electronics." }],
            steps: [
              { reasoning: "Electronic components have two reliable states: on/off (or high/low).", marks: 1, markCode: "M" },
              { reasoning: "Binary maps perfectly: 1 = on, 0 = off — denary needs 10 distinct voltages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two states are easy for electronics; binary matches on/off.",
          },
        },
        {
          id: "cipc-u2-bi-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert binary 0110 0011 to denary.",
          response: { type: "numeric", parts: [{ label: "a", answer: 99 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary to denary", statement: "Sum place values." }],
            steps: [
              { reasoning: "0110 0011 = 64 + 32 + 2 + 1 = 99.", marks: 1, markCode: "M" },
              { reasoning: "Denary value is 99.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "99",
          },
        },
        {
          id: "cipc-u2-bi-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert denary 200 to binary (8-bit).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Denary to binary", statement: "Place values 128,64,32,16,8,4,2,1." }],
            steps: [
              { reasoning: "200 = 128 + 64 + 8 = 1100 1000.", marks: 1, markCode: "M" },
              { reasoning: "Check: 128+64+8 = 200. ✓", marks: 1, markCode: "M" },
              { reasoning: "8-bit binary: 1100 1000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1100 1000",
          },
        },
        {
          id: "cipc-u2-bi-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many different values can 8 bits represent? What is the largest denary number 8 bits can hold?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "8-bit range", statement: "2^8 = 256 values, 0-255." }],
            steps: [
              { reasoning: "2^8 = 256 different values.", marks: 1, markCode: "M" },
              { reasoning: "Values run 0 to 255.", marks: 1, markCode: "M" },
              { reasoning: "Largest = 255 (all 1s).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "256 values; largest 255.",
          },
        },
        {
          id: "cipc-u2-bi-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Why binary? (b) What is a bit and byte? (c) Convert 0101 1111 to denary. (d) Convert 42 to binary (8-bit). (e) How is text stored in binary? (f) What is character encoding? (g) Why can't denary be used directly by computers? (h) How many values can 8 bits represent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binary", statement: "Bits, conversions, encoding, range." }],
            steps: [
              { reasoning: "(a) Two electronic states match 0/1.", marks: 1, markCode: "M" },
              { reasoning: "(b) Bit=one binary digit; byte=8 bits.", marks: 1, markCode: "M" },
              { reasoning: "(c) 0101 1111 = 64+16+8+4+2+1 = 95.", marks: 1, markCode: "M" },
              { reasoning: "(d) 42 = 32+8+2 = 0010 1010.", marks: 1, markCode: "M" },
              { reasoning: "(e) Each character → code number → binary.", marks: 1, markCode: "M" },
              { reasoning: "(f) System mapping characters to numbers.", marks: 1, markCode: "M" },
              { reasoning: "(g) Electronics reliably distinguish only two states.", marks: 1, markCode: "M" },
              { reasoning: "(h) 256 values (0-255).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binary reasons, bit/byte, conversions (95, 00101010), text encoding, denary limits, 256 values.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-bi-notes",
      title: "Binary — notes",
      summary: "Computers use 0/1 because hardware is on/off. 8 bits=1 byte; place values 128→1; 8 bits=256 values.",
      sections: [
        { heading: "Key idea", body: "Everything in computing is binary patterns at the lowest level." },
        { heading: "Convert", body: "Binary→denary: add place values of 1-bits." },
      ],
    },
  ],
};

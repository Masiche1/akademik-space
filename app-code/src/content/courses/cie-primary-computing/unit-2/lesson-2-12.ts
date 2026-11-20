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
                              "text": "Electronic switches have two states: on/off"
                    },
                    {
                              "id": "b",
                              "text": "It's faster to type"
                    },
                    {
                              "id": "c",
                              "text": "It's smaller"
                    },
                    {
                              "id": "d",
                              "text": "No reason"
                    }
          ],
          "correctChoiceId": "a"
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

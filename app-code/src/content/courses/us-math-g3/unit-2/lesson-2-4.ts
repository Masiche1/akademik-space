import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m3-u2-lesson-2-4",
  code: "2-4",
  title: "Multiplication Word Problems",
  goal: "I CAN solve multiplication word problems within 100.",
  standards: ["3.OA.A.3", "3.OA.B.5"],
  vocabulary: [
    { term: "Equal groups", definition: "Same number in each." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Total", definition: "The whole amount." },
    { term: "Equation", definition: "Number sentence." },
    { term: "Solve", definition: "Find the answer." },
    { term: "Each", definition: "Per group." },
    { term: "Groups", definition: "How many sets." },
    { term: "Product", definition: "Answer to multiply." },
  ],
  concepts: [
    {
      id: "m3-u2-multiply-word-problems",
      title: "Multiplication word problems",
      skill: "Identify equal groups or arrays and write multiplication equations.",
      lesson: {
        sections: [
          {
            heading: "Look for patterns",
            body: "Multiplication problems have **equal groups** (same number in each) or **arrays** (rows and columns). '4 boxes with 6 eggs each' = $4 \\times 6 = 24$.",
          },
          {
            heading: "Write the equation",
            body: "Identify **groups** and **size of each group**, then multiply: groups x size = total.",
          },
        ],
        keyFormulas: [
          { name: "Equal groups", statement: "groups x size = total." },
          { name: "Array", statement: "rows x columns = total." },
        ],
        workedExample: {
          problem: "A garden has 6 rows of carrots with 9 in each row. How many carrots?",
          solution: "Array: $6 \\times 9 = 54$ carrots.",
        },
      },
      questions: [
        {
          id: "m3-u2-multiply-word-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'3 bags hold 8 apples each. How many apples?' Which equation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8 / 3"
                    },
                    {
                              "id": "b",
                              "text": "3 x 8"
                    },
                    {
                              "id": "c",
                              "text": "3 + 8"
                    },
                    {
                              "id": "d",
                              "text": "8 - 3"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 groups of 8 = 3 x 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 groups of 8 = 3 x 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3 x 8",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has 5 rows of 7 tiles. How many tiles?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12"
                    },
                    {
                              "id": "b",
                              "text": "35"
                    },
                    {
                              "id": "c",
                              "text": "57"
                    },
                    {
                              "id": "d",
                              "text": "70"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 x 7 = 35."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 x 7 = 35.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "35",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A classroom has 8 tables with 4 chairs each. How many chairs?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 32
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "8 x 4 = 32."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "32",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "32",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 7 pages with 6 stickers each. How many stickers?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 42
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7 x 6 = 42."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "42",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "42",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write and solve: 'A farmer packs 36 eggs into cartons of 6. How many cartons?' Then write a related multiplication fact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word problems",
                              "statement": "36 / 6 = 6 cartons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves division.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Writes related multiplication.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**36/6=6 cartons; 6x6=36**",
          "commonErrors": [
                    "Wrong answer.",
                    "No related fact."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equal groups\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "b",
                              "text": "Same number in each."
                    },
                    {
                              "id": "c",
                              "text": "The whole amount."
                    },
                    {
                              "id": "d",
                              "text": "Number sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equal groups\" means Same number in each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equal groups\" means Same number in each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equal groups** = Same number in each.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Array\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The whole amount."
                    },
                    {
                              "id": "b",
                              "text": "Number sentence."
                    },
                    {
                              "id": "c",
                              "text": "Find the answer."
                    },
                    {
                              "id": "d",
                              "text": "Rows and columns."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Array\" means Rows and columns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Array\" means Rows and columns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Array** = Rows and columns.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number sentence."
                    },
                    {
                              "id": "b",
                              "text": "The whole amount."
                    },
                    {
                              "id": "c",
                              "text": "Find the answer."
                    },
                    {
                              "id": "d",
                              "text": "Per group."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Total\" means The whole amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Total\" means The whole amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Total** = The whole amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

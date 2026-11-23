import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m4-u4-lesson-4-3",
  code: "4-3",
  title: "Division Word Problems",
  goal: "I CAN solve word problems involving division.",
  standards: ["4.NBT.B.6"],
  vocabulary: [
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Divide", definition: "Split into equal parts." },
    { term: "Quotient", definition: "Answer." },
    { term: "Remainder", definition: "What's left over." },
    { term: "Interpret", definition: "What remainder means." },
    { term: "Equal groups", definition: "Same number each." },
    { term: "Share", definition: "Divide among." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m4-u4-divide-problems",
      title: "Division word problems",
      skill: "Solve word problems involving division.",
      lesson: {
        sections: [
          {
            heading: "When to divide",
            body: "Divide when you **share equally** or find **how many groups** of a certain size fit.",
          },
          {
            heading: "Interpret remainders",
            body: "Decide if you **round up** (need more buses) or **round down** (have enough) based on the problem.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Total / each = groups; or total / groups = each." },
        ],
        workedExample: {
          problem: "78 students need to be divided into groups of 8. How many groups?",
          solution: "$78 \\div 8 = 9$ remainder $6$. **9 full groups** with 6 left over.",
        },
      },
      questions: [
        {
          id: "m4-u4-divide-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "96 students need to be divided into groups of 8. How many groups?",
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
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "96 / 8 = 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "96 / 8 = 12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A farmer has 156 eggs. He packs them in cartons of 12. How many cartons?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "13"
                    },
                    {
                              "id": "b",
                              "text": "12"
                    },
                    {
                              "id": "c",
                              "text": "14"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "156 / 12 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "156 / 12 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "13",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve a division word problem with remainder interpretation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide problems",
                              "statement": "Quotient + remainder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds quotient.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interprets remainder.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., '78 / 8 = 9 r 6; 9 groups, 6 left over'**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No interpretation."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When dividing 100 by 8, the remainder is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "12"
                    },
                    {
                              "id": "c",
                              "text": "0"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "100 / 8 = 12 r 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 / 8 = 12 r 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong remainder."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A teacher has 145 students. She puts them in rows of 8. How many full rows and how many left over?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide problems",
                              "statement": "18 r 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds quotient.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds remainder.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**145 / 8 = 18 r 1; 18 rows, 1 left over**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No remainder."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split into equal parts."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Answer."
                    },
                    {
                              "id": "d",
                              "text": "What's left over."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word problem\" means Story with numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means Story with numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = Story with numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "What's left over."
                    },
                    {
                              "id": "c",
                              "text": "What remainder means."
                    },
                    {
                              "id": "d",
                              "text": "Split into equal parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into equal parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What's left over."
                    },
                    {
                              "id": "b",
                              "text": "Answer."
                    },
                    {
                              "id": "c",
                              "text": "What remainder means."
                    },
                    {
                              "id": "d",
                              "text": "Same number each."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

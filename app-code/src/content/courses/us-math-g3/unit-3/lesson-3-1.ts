import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m3-u3-lesson-3-1",
  code: "3-1",
  title: "Division Basics",
  goal: "I CAN divide within 100 using equal groups and sharing.",
  standards: ["3.OA.A.2", "3.OA.A.3"],
  vocabulary: [
    { term: "Divide", definition: "Split into equal groups." },
    { term: "Dividend", definition: "Number being divided." },
    { term: "Divisor", definition: "Number we divide by." },
    { term: "Quotient", definition: "Answer to division." },
    { term: "Equal groups", definition: "Same number in each." },
    { term: "Share", definition: "Split equally." },
    { term: "Remainder", definition: "What's left over." },
    { term: "Inverse", definition: "Opposite operation." },
  ],
  concepts: [
    {
      id: "m3-u3-divide-basics",
      title: "Division basics",
      skill: "Divide within 100 using equal groups and sharing.",
      lesson: {
        sections: [
          {
            heading: "What is division?",
            body: "**Division** splits a number into **equal groups** or **shares** equally. $12 \\div 3 = 4$ means 12 split into 3 groups gives 4 each.",
          },
          {
            heading: "Inverse of multiplication",
            body: "Division is the **inverse** of multiplication: $12 \\div 3 = 4$ because $3 \\times 4 = 12$. Use multiplication facts to solve division.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "$a \\div b = c$ means $b \\times c = a$." },
          { name: "Inverse", statement: "Division undoes multiplication." },
        ],
        workedExample: {
          problem: "Solve $56 \\div 8$.",
          solution: "$8 \\times 7 = 56$, so $56 \\div 8 = 7$.",
        },
      },
      questions: [
        {
          id: "m3-u3-divide-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$56 \\div 8$ equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "7"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "9"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 x 7 = 56."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 x 7 = 56.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Division is the inverse of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "addition"
                    },
                    {
                              "id": "b",
                              "text": "multiplication"
                    },
                    {
                              "id": "c",
                              "text": "subtraction"
                    },
                    {
                              "id": "d",
                              "text": "rounding"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Division undoes multiplication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Division undoes multiplication.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiplication",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $72 \\div 8$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "8 x 9 = 72."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $63 \\div 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7 x 9 = 63."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $48 \\div 6$ and $54 \\div 6$. What pattern do you notice?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "48/6=8, 54/6=9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves both.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Notices pattern (difference of 1).",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**8 and 9; quotients differ by 1**",
          "commonErrors": [
                    "Wrong answers.",
                    "No pattern noted."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number being divided."
                    },
                    {
                              "id": "b",
                              "text": "Split into equal groups."
                    },
                    {
                              "id": "c",
                              "text": "Number we divide by."
                    },
                    {
                              "id": "d",
                              "text": "Answer to division."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into equal groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into equal groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into equal groups.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dividend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number we divide by."
                    },
                    {
                              "id": "b",
                              "text": "Answer to division."
                    },
                    {
                              "id": "c",
                              "text": "Same number in each."
                    },
                    {
                              "id": "d",
                              "text": "Number being divided."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dividend\" means Number being divided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dividend\" means Number being divided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dividend** = Number being divided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divisor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to division."
                    },
                    {
                              "id": "b",
                              "text": "Number we divide by."
                    },
                    {
                              "id": "c",
                              "text": "Same number in each."
                    },
                    {
                              "id": "d",
                              "text": "Split equally."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divisor\" means Number we divide by."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divisor\" means Number we divide by.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divisor** = Number we divide by.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

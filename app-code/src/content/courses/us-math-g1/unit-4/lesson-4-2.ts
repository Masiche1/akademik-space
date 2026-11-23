import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m1-u4-lesson-4-2",
  code: "4-2",
  title: "Missing Numbers",
  goal: "I CAN find missing numbers in equations.",
  standards: ["1.OA.A.1", "1.OA.B.4", "1.OA.D.7"],
  vocabulary: [
    { term: "Missing number", definition: "The unknown in an equation." },
    { term: "Unknown", definition: "What we do not know." },
    { term: "Solve for", definition: "Find the missing." },
    { term: "Inverse", definition: "Reverse operation." },
    { term: "Check", definition: "Verify answer." },
    { term: "True", definition: "Correct." },
    { term: "False", definition: "Incorrect." },
    { term: "Balance", definition: "Both sides equal." },
  ],
  concepts: [
    {
      id: "m1-u4-missing-numbers",
      title: "Missing numbers",
      skill: "Find missing numbers in addition and subtraction equations.",
      lesson: {
        sections: [
          {
            heading: "Find the unknown",
            body: "Sometimes an equation has a **missing number** — the **unknown**. To find it, think about what operation reverses the known one.",
          },
          {
            heading: "Use inverse operations",
            body: "If $8 + ? = 13$, the missing is $13 - 8 = 5$. If $? - 4 = 9$, the missing is $9 + 4 = 13$. Use **inverse** operations to solve.",
          },
        ],
        keyFormulas: [
          { name: "Missing addend", statement: "a + ? = c -> ? = c - a" },
          { name: "Missing minuend", statement: "? - b = c -> ? = c + b" },
          { name: "Missing subtrahend", statement: "a - ? = c -> ? = a - c" },
        ],
        workedExample: {
          problem: "Find the missing number: $? - 6 = 8$.",
          solution: "Think $8 + 6 = 14$, so **missing = 14**.",
        },
      },
      questions: [
        {
          id: "m1-u4-missing-numbers-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find missing: $9 + ? = 17$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$17 - 9 = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$17 - 9 = 8$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(8)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find missing: $? - 5 = 11$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 16
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$11 + 5 = 16$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$11 + 5 = 16$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(16)**",
          "commonErrors": [
                    "Subtracts instead."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find missing: $14 - ? = 6$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$14 - 6 = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$14 - 6 = 8$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(8)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the missing number in $? + 7 = 15$ and explain how you found it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Missing addend",
                              "statement": "$15 - 7 = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds missing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains inverse operation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Wrong missing.",
                    "No explanation."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we do not know."
                    },
                    {
                              "id": "b",
                              "text": "The unknown in an equation."
                    },
                    {
                              "id": "c",
                              "text": "Find the missing."
                    },
                    {
                              "id": "d",
                              "text": "Reverse operation."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing number\" means The unknown in an equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing number\" means The unknown in an equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing number** = The unknown in an equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unknown\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find the missing."
                    },
                    {
                              "id": "b",
                              "text": "Reverse operation."
                    },
                    {
                              "id": "c",
                              "text": "Verify answer."
                    },
                    {
                              "id": "d",
                              "text": "What we do not know."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unknown\" means What we do not know."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unknown\" means What we do not know.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unknown** = What we do not know.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve for\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reverse operation."
                    },
                    {
                              "id": "b",
                              "text": "Find the missing."
                    },
                    {
                              "id": "c",
                              "text": "Verify answer."
                    },
                    {
                              "id": "d",
                              "text": "Correct."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solve for\" means Find the missing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solve for\" means Find the missing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solve for** = Find the missing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-missing-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inverse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Verify answer."
                    },
                    {
                              "id": "b",
                              "text": "Correct."
                    },
                    {
                              "id": "c",
                              "text": "Incorrect."
                    },
                    {
                              "id": "d",
                              "text": "Reverse operation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inverse\" means Reverse operation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inverse\" means Reverse operation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inverse** = Reverse operation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m2-u4-lesson-4-1",
  code: "4-1",
  title: "Mixed Addition and Subtraction",
  goal: "I CAN solve problems with both addition and subtraction.",
  standards: ["2.OA.A.1", "2.NBT.B.7"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts." },
    { term: "Subtract", definition: "Take away." },
    { term: "Mixed", definition: "Both operations." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Total", definition: "Sum of all." },
    { term: "Left", definition: "Remaining." },
    { term: "In all", definition: "Total amount." },
    { term: "How many more", definition: "Difference." },
  ],
  concepts: [
    {
      id: "m2-u4-add-sub-mixed",
      title: "Mixed addition and subtraction",
      skill: "Solve problems that require both adding and subtracting.",
      lesson: {
        sections: [
          {
            heading: "Know which operation",
            body: "**Add** when combining ('in all', 'total'), **subtract** when taking away ('left', 'remaining', 'how many more').",
          },
          {
            heading: "Two-step problems",
            body: "Some problems need **two operations**: add then subtract, or subtract then add.",
          },
        ],
        keyFormulas: [
          { name: "Mixed", statement: "Add for total, subtract for remaining/difference." },
        ],
        workedExample: {
          problem: "There are 345 students. 123 leave, then 56 arrive. How many now?",
          solution: "345 - 123 = 222; 222 + 56 = 278 students.",
        },
      },
      questions: [
        {
          id: "m2-u4-add-sub-mixed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'How many more' usually means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "subtract to find difference"
                    },
                    {
                              "id": "c",
                              "text": "multiply"
                    },
                    {
                              "id": "d",
                              "text": "divide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'More' = subtract for difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'More' = subtract for difference.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "subtract",
          "commonErrors": [
                    "Picks wrong operation."
          ]
},
        },
        {
          id: "m2-u4-add-sub-mixed-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "345 - 123 + 56 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "166"
                    },
                    {
                              "id": "b",
                              "text": "278"
                    },
                    {
                              "id": "c",
                              "text": "222"
                    },
                    {
                              "id": "d",
                              "text": "534"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "345 - 123 = 222; 222 + 56 = 278."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "345 - 123 = 222; 222 + 56 = 278.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "278",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m2-u4-add-sub-mixed-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: 'There are 456 apples. 123 are eaten. How many are left?' Then add 89 more. What's the final total?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "mixed",
                              "name": "Sub then add",
                              "statement": "Two operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "456 - 123 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "333 + 89 = 422.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "422",
          "commonErrors": "Wrong total."
},
        },
        {
          id: "m2-u4-add-sub-mixed-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "567 + 234 - 123 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 678
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "567 + 234 = 801; 801 - 123 = 678."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "678",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "678",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m2-u4-add-sub-mixed-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve a two-step problem: 'A store has 456 shirts. Sells 123, then receives 89 more. How many now?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "mixed",
                              "name": "Two-step",
                              "statement": "Sub then add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "456 - 123 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "333 + 89 = 422.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "422 shirts",
          "commonErrors": "Wrong total."
},
        },
        {
          id: "m2-u4-add-sub-mixed-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "c",
                              "text": "Both operations."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine amounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine amounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine amounts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-add-sub-mixed-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Both operations."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "Sum of all."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-add-sub-mixed-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Both operations."
                    },
                    {
                              "id": "c",
                              "text": "Sum of all."
                    },
                    {
                              "id": "d",
                              "text": "Remaining."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixed\" means Both operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixed\" means Both operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixed** = Both operations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

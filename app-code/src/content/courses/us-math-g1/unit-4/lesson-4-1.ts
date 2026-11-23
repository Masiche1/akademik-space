import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m1-u4-lesson-4-1",
  code: "4-1",
  title: "Adding and Subtracting",
  goal: "I CAN solve problems that mix addition and subtraction.",
  standards: ["1.OA.A.1", "1.OA.C.6"],
  vocabulary: [
    { term: "Add", definition: "Put together." },
    { term: "Subtract", definition: "Take away." },
    { term: "Mixed", definition: "Both operations." },
    { term: "Operation", definition: "Add or subtract." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Solve", definition: "Find the answer." },
    { term: "Check", definition: "Verify." },
    { term: "Within 20", definition: "Numbers up to 20." },
  ],
  concepts: [
    {
      id: "m1-u4-add-sub-mixed",
      title: "Mixed addition and subtraction",
      skill: "Solve problems that require both addition and subtraction within 20.",
      lesson: {
        sections: [
          {
            heading: "Know which operation",
            body: "Some problems need **addition** (put together), some need **subtraction** (take away). Read carefully to know which **operation** to use.",
          },
          {
            heading: "Solve step by step",
            body: "For mixed problems, solve each part: first add, then subtract (or vice versa). Check your answer.",
          },
        ],
        keyFormulas: [
          { name: "Mixed", statement: "Identify operation -> solve -> check." },
        ],
        workedExample: {
          problem: "Solve $8 + 5 - 3$. What is the answer?",
          solution: "First $8 + 5 = 13$, then $13 - 3 = 10$. **Answer: 10**.",
        },
      },
      questions: [
        {
          id: "m1-u4-add-sub-mixed-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $7 + 4 - 2$.",
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
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$7+4=11, 11-2=9$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7+4=11, 11-2=9$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m1-u4-add-sub-mixed-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $15 - 6 + 3$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$15-6=9, 9+3=12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$15-6=9, 9+3=12$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(12)**",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m1-u4-add-sub-mixed-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $10 - 4 + 2$, which operation do you do first?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add first"
                    },
                    {
                              "id": "b",
                              "text": "subtract first (left to right)"
                    },
                    {
                              "id": "c",
                              "text": "either way"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Left to right: subtract first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Left to right: subtract first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**subtract first**",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m1-u4-add-sub-mixed-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $12 + 5 - 7$ step by step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mixed ops",
                              "statement": "$12+5=17, 17-7=10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Does addition first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Does subtraction + gets 10.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Wrong order.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u4-add-sub-mixed-q5",
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
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Both operations."
                    },
                    {
                              "id": "d",
                              "text": "Add or subtract."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-add-sub-mixed-q6",
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
                              "text": "Add or subtract."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
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
          id: "m1-u4-add-sub-mixed-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Add or subtract."
                    },
                    {
                              "id": "b",
                              "text": "Both operations."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Find the answer."
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
        {
          id: "m1-u4-add-sub-mixed-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Operation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Find the answer."
                    },
                    {
                              "id": "c",
                              "text": "Verify."
                    },
                    {
                              "id": "d",
                              "text": "Add or subtract."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Operation\" means Add or subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Operation\" means Add or subtract.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Operation** = Add or subtract.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

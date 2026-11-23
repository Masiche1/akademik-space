import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m1-u4-lesson-4-3",
  code: "4-3",
  title: "True and False Equations",
  goal: "I CAN tell if equations are true or false.",
  standards: ["1.OA.D.7", "1.OA.A.1", "1.OA.B.4"],
  vocabulary: [
    { term: "True", definition: "Both sides equal." },
    { term: "False", definition: "Sides not equal." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Equal", definition: "Same value." },
    { term: "Check", definition: "Verify." },
    { term: "Balance", definition: "Both sides same." },
    { term: "Correct", definition: "Right answer." },
    { term: "Incorrect", definition: "Wrong answer." },
  ],
  concepts: [
    {
      id: "m1-u4-true-false-equations",
      title: "True and false equations",
      skill: "Determine if equations are true or false by checking both sides.",
      lesson: {
        sections: [
          {
            heading: "True vs false",
            body: "An equation is **true** if both sides are **equal**; **false** if they are not. $7 + 3 = 10$ is true; $7 + 3 = 11$ is false.",
          },
          {
            heading: "Check both sides",
            body: "To check, solve each side and compare. If they match, the equation is **true**; if not, it is **false**.",
          },
        ],
        keyFormulas: [
          { name: "True", statement: "Both sides equal" },
          { name: "False", statement: "Sides not equal" },
        ],
        workedExample: {
          problem: "Is $8 + 5 = 13$ true or false?",
          solution: "Solve: $8 + 5 = 13$. Both sides are 13 — **TRUE**.",
        },
      },
      questions: [
        {
          id: "m1-u4-true-false-equations-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is $9 + 4 = 13$ true or false?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "true"
                    },
                    {
                              "id": "b",
                              "text": "false"
                    },
                    {
                              "id": "c",
                              "text": "cannot tell"
                    },
                    {
                              "id": "d",
                              "text": "maybe"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$9+4=13$, both sides equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$9+4=13$, both sides equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**true**",
          "commonErrors": [
                    "Checks wrong."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is $12 - 5 = 8$ true or false?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "true"
                    },
                    {
                              "id": "b",
                              "text": "false"
                    },
                    {
                              "id": "c",
                              "text": "cannot tell"
                    },
                    {
                              "id": "d",
                              "text": "maybe"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$12-5=7$, not 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$12-5=7$, not 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**false**",
          "commonErrors": [
                    "Checks wrong."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is $? + 6 = 14$ true if missing is 8?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "true"
                    },
                    {
                              "id": "b",
                              "text": "false"
                    },
                    {
                              "id": "c",
                              "text": "cannot tell"
                    },
                    {
                              "id": "d",
                              "text": "maybe"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$8+6=14$, true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$8+6=14$, true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**true**",
          "commonErrors": [
                    "Checks wrong."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Check if $11 + 7 = 18$ is true. Show how you checked.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Check equation",
                              "statement": "Solve left: 11+7=18, compare to right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves left side.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares + says true/false.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**True — both sides are 18**",
          "commonErrors": [
                    "Wrong check.",
                    "Cannot check."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"True\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sides not equal."
                    },
                    {
                              "id": "b",
                              "text": "Both sides equal."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Same value."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"True\" means Both sides equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"True\" means Both sides equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**True** = Both sides equal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"False\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Same value."
                    },
                    {
                              "id": "c",
                              "text": "Verify."
                    },
                    {
                              "id": "d",
                              "text": "Sides not equal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"False\" means Sides not equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"False\" means Sides not equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**False** = Sides not equal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same value."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "Verify."
                    },
                    {
                              "id": "d",
                              "text": "Both sides same."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equation\" means Math sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equation\" means Math sentence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equation** = Math sentence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-true-false-equations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Verify."
                    },
                    {
                              "id": "b",
                              "text": "Both sides same."
                    },
                    {
                              "id": "c",
                              "text": "Right answer."
                    },
                    {
                              "id": "d",
                              "text": "Same value."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equal\" means Same value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equal\" means Same value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equal** = Same value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

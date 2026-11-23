import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m6-u3-lesson-3-2",
  code: "3-2",
  title: "One-Step Equations",
  goal: "I CAN solve one-step equations.",
  standards: ["6.EE.B.7"],
  vocabulary: [
    { term: "Equation", definition: "Math sentence with =." },
    { term: "Solve", definition: "Find value." },
    { term: "Inverse", definition: "Opposite operation." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m6-u3-one-step-equations",
      title: "One-step equations",
      skill: "Solve one-step equations using inverse operations.",
      lesson: {
        sections: [
          {
            heading: "Undo the operation",
            body: "To solve $x + 5 = 12$, **subtract 5** from both sides: $x = 7$. To solve $3x = 15$, **divide by 3**: $x = 5$.",
          },
          {
            heading: "Inverse operations",
            body: "Use the **opposite** operation: add<->subtract, multiply<->divide.",
          },
        ],
        keyFormulas: [
          { name: "Solve", statement: "Use inverse operation on both sides." },
        ],
        workedExample: {
          problem: "Solve x - 8 = 5 and 4x = 20.",
          solution: "x-8=5: add 8 -> x=13; 4x=20: divide by 4 -> x=5.",
        },
      },
      questions: [
        {
          id: "m6-u3-one-step-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: x + 7 = 15",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "22"
                    },
                    {
                              "id": "c",
                              "text": "7"
                    },
                    {
                              "id": "d",
                              "text": "15"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtract 7: x = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract 7: x = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 5x = 35",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "30"
                    },
                    {
                              "id": "c",
                              "text": "40"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Divide by 5: x = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide by 5: x = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve these one-step equations: x - 4 = 9; 6x = 42; x/3 = 5; y + 11 = 20.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "One-step",
                              "statement": "13, 7, 15, 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**x-4=9->x=13; 6x=42->x=7; x/3=5->x=15; y+11=20->y=9.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing equations."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The inverse of addition is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "addition"
                    },
                    {
                              "id": "b",
                              "text": "subtraction"
                    },
                    {
                              "id": "c",
                              "text": "multiplication"
                    },
                    {
                              "id": "d",
                              "text": "division"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "subtraction",
          "commonErrors": [
                    "Wrong inverse."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve an equation and explain which inverse operation you used and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "One-step",
                              "statement": "Solved + explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves equation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains inverse.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '2x = 14 -> x = 7; used division (inverse of multiplication).'**",
          "commonErrors": [
                    "Cannot solve.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find value."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence with =."
                    },
                    {
                              "id": "c",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equation\" means Math sentence with =."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equation\" means Math sentence with =.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equation** = Math sentence with =.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "b",
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Find value."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solve\" means Find value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solve\" means Find value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solve** = Find value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-one-step-equations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inverse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Repeated addition."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inverse\" means Opposite operation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inverse\" means Opposite operation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inverse** = Opposite operation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

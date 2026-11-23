import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m6-u3-lesson-3-3",
  code: "3-3",
  title: "Two-Step Equations",
  goal: "I CAN solve two-step equations.",
  standards: ["6.EE.B.7"],
  vocabulary: [
    { term: "Equation", definition: "Math sentence." },
    { term: "Two-step", definition: "Two operations." },
    { term: "Solve", definition: "Find value." },
    { term: "Inverse", definition: "Opposite operation." },
    { term: "Distribute", definition: "Multiply across." },
    { term: "Combine", definition: "Put together." },
    { term: "Check", definition: "Verify." },
    { term: "Variable", definition: "Unknown." },
  ],
  concepts: [
    {
      id: "m6-u3-two-step-equations",
      title: "Two-step equations",
      skill: "Solve equations requiring two inverse operations.",
      lesson: {
        sections: [
          {
            heading: "Two steps",
            body: "For $2x + 3 = 11$: **subtract 3** first ($2x = 8$), then **divide by 2** ($x = 4$). Order matters — undo addition/subtraction before multiplication/division.",
          },
          {
            heading: "Distributing",
            body: "For $2(x + 3) = 14$: distribute first $2x + 6 = 14$, then solve.",
          },
        ],
        keyFormulas: [
          { name: "Two-step", statement: "Undo + then x or / = solve." },
        ],
        workedExample: {
          problem: "Solve 3x - 5 = 16.",
          solution: "Add 5: 3x = 21; Divide by 3: **x = 7**.",
        },
      },
      questions: [
        {
          id: "m6-u3-two-step-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 2x + 3 = 11",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "7"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtract 3: 2x=8; divide: x=4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract 3: 2x=8; divide: x=4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u3-two-step-equations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 4x - 2 = 14",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Add 2: 4x=16; divide: x=4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add 2: 4x=16; divide: x=4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u3-two-step-equations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve these two-step equations: 3x + 5 = 20; 2(x + 4) = 18; 5x - 3 = 22.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Two-step",
                              "statement": "5, 5, 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3x+5=20->x=5; 2(x+4)=18->x=5; 5x-3=22->x=5.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing equations."
          ]
},
        },
        {
          id: "m6-u3-two-step-equations-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In two-step equations, you should usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divide first"
                    },
                    {
                              "id": "b",
                              "text": "undo addition/subtraction first"
                    },
                    {
                              "id": "c",
                              "text": "guess"
                    },
                    {
                              "id": "d",
                              "text": "multiply first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Undo +/- first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Undo +/- first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "undo addition/subtraction first",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m6-u3-two-step-equations-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve a two-step equation and explain the order of operations you used.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Two-step",
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
                              "reasoning": "Explains order.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '3x+5=20 -> subtract 5 -> 3x=15 -> divide 3 -> x=5; undo addition before division.'**",
          "commonErrors": [
                    "Cannot solve.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u3-two-step-equations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two operations."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "Find value."
                    },
                    {
                              "id": "d",
                              "text": "Opposite operation."
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
          id: "m6-u3-two-step-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Two-step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find value."
                    },
                    {
                              "id": "b",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "c",
                              "text": "Multiply across."
                    },
                    {
                              "id": "d",
                              "text": "Two operations."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Two-step\" means Two operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Two-step\" means Two operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Two-step** = Two operations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-two-step-equations-q8",
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
                              "text": "Find value."
                    },
                    {
                              "id": "c",
                              "text": "Multiply across."
                    },
                    {
                              "id": "d",
                              "text": "Put together."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};

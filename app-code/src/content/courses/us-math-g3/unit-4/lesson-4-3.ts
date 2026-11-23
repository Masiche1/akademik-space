import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m3-u4-lesson-4-3",
  code: "4-3",
  title: "Two-Step Word Problems",
  goal: "I CAN solve two-step word problems with multiplication and division.",
  standards: ["3.OA.A.3", "3.OA.B.5", "3.OA.B.6"],
  vocabulary: [
    { term: "Two-step", definition: "Two operations needed." },
    { term: "First step", definition: "What to do first." },
    { term: "Second step", definition: "What to do next." },
    { term: "Total", definition: "Final answer." },
    { term: "Intermediate", definition: "Middle answer." },
    { term: "Equation", definition: "Number sentence." },
    { term: "Solve", definition: "Find answer." },
    { term: "Check", definition: "Verify answer." },
  ],
  concepts: [
    {
      id: "m3-u4-two-step-problems",
      title: "Two-step word problems",
      skill: "Solve problems that need two operations.",
      lesson: {
        sections: [
          {
            heading: "Two steps",
            body: "Some problems need **two operations**: first multiply, then add; or first divide, then subtract. Break it into **steps**.",
          },
          {
            heading: "Example",
            body: "'4 boxes of 6 eggs each, plus 5 loose eggs. How many total?' First $4 \\times 6 = 24$, then $24 + 5 = 29$.",
          },
        ],
        keyFormulas: [
          { name: "Two-step", statement: "Step 1: operation 1. Step 2: operation 2." },
        ],
        workedExample: {
          problem: "4 boxes of 6 eggs each, plus 5 loose eggs. How many total?",
          solution: "Step 1: $4 \\times 6 = 24$. Step 2: $24 + 5 = 29$ eggs.",
        },
      },
      questions: [
        {
          id: "m3-u4-two-step-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'4 boxes of 6 eggs each, plus 5 loose eggs.' What is the first step?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 + 6"
                    },
                    {
                              "id": "b",
                              "text": "4 x 6"
                    },
                    {
                              "id": "c",
                              "text": "6 / 4"
                    },
                    {
                              "id": "d",
                              "text": "4 - 6"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "First multiply: 4 x 6 = 24."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First multiply: 4 x 6 = 24.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 x 6",
          "commonErrors": [
                    "Wrong first step."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After finding 4 x 6 = 24, the second step is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "24 x 4"
                    },
                    {
                              "id": "b",
                              "text": "24 + 5"
                    },
                    {
                              "id": "c",
                              "text": "24 - 5"
                    },
                    {
                              "id": "d",
                              "text": "24 / 5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Then add 5 loose eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Then add 5 loose eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "24 + 5",
          "commonErrors": [
                    "Wrong second step."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "4 boxes of 6 eggs each, plus 5 loose eggs. How many total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 29
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "4 x 6 = 24; 24 + 5 = 29."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "29",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "29",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "5 bags of 8 apples each, minus 3 eaten. How many left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 37
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "5 x 8 = 40; 40 - 3 = 37."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "37",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "37",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve: 'A store has 6 packs of 12 pencils. They sell 15 pencils. How many are left?' Show both steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Two-step",
                              "statement": "6 x 12 - 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Does first step (multiply).",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Does second step (subtract).",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**72 - 15 = 57 left**",
          "commonErrors": [
                    "Wrong steps.",
                    "Only one step."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Two-step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What to do first."
                    },
                    {
                              "id": "b",
                              "text": "Two operations needed."
                    },
                    {
                              "id": "c",
                              "text": "What to do next."
                    },
                    {
                              "id": "d",
                              "text": "Final answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Two-step\" means Two operations needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Two-step\" means Two operations needed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Two-step** = Two operations needed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What to do next."
                    },
                    {
                              "id": "b",
                              "text": "Final answer."
                    },
                    {
                              "id": "c",
                              "text": "Middle answer."
                    },
                    {
                              "id": "d",
                              "text": "What to do first."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"First step\" means What to do first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"First step\" means What to do first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**First step** = What to do first.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-two-step-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Second step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Final answer."
                    },
                    {
                              "id": "b",
                              "text": "What to do next."
                    },
                    {
                              "id": "c",
                              "text": "Middle answer."
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
                              "statement": "\"Second step\" means What to do next."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Second step\" means What to do next.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Second step** = What to do next.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

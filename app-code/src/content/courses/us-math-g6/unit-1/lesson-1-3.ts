import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m6-u1-lesson-1-3",
  code: "1-3",
  title: "Proportions",
  goal: "I CAN solve proportions using cross-multiplication.",
  standards: ["6.RP.A.3"],
  vocabulary: [
    { term: "Proportion", definition: "Equal ratios." },
    { term: "Cross-multiply", definition: "a/b = c/d -> ad = bc." },
    { term: "Solve", definition: "Find unknown." },
    { term: "Equivalent", definition: "Same ratio." },
    { term: "Scale", definition: "Multiply by same factor." },
    { term: "Ratio", definition: "Comparison." },
    { term: "Rate", definition: "Different units." },
    { term: "Check", definition: "Verify answer." },
  ],
  concepts: [
    {
      id: "m6-u1-proportions",
      title: "Proportions",
      skill: "Solve proportions using cross-multiplication.",
      lesson: {
        sections: [
          {
            heading: "Equal ratios",
            body: "A **proportion** says two ratios are equal: $\\frac{a}{b} = \\frac{c}{d}$. To solve for unknown, **cross-multiply**: $ad = bc$.",
          },
          {
            heading: "Example",
            body: "$\\frac{3}{4} = \\frac{x}{8}$: cross-multiply $3 \\times 8 = 4x$, so $24 = 4x$, $x = 6$.",
          },
        ],
        keyFormulas: [
          { name: "Proportion", statement: "a/b = c/d -> ad = bc." },
        ],
        workedExample: {
          problem: "Solve: 5/6 = x/18.",
          solution: "5 x 18 = 6x -> 90 = 6x -> **x = 15**.",
        },
      },
      questions: [
        {
          id: "m6-u1-proportions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 3/4 = x/8",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3x8=24; 4x=24; x=6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3x8=24; 4x=24; x=6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u1-proportions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To solve a proportion, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "cross-multiply"
                    },
                    {
                              "id": "c",
                              "text": "subtract"
                    },
                    {
                              "id": "d",
                              "text": "guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cross-multiply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cross-multiply.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cross-multiply",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u1-proportions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve these proportions: 2/5 = x/20 and 4/7 = 12/y.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proportion",
                              "statement": "x=8, y=21."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/5=x/20: 2x20=5x -> 40=5x -> x=8; 4/7=12/y: 4y=84 -> y=21.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing steps."
          ]
},
        },
        {
          id: "m6-u1-proportions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cross-multiplication works because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's random"
                    },
                    {
                              "id": "b",
                              "text": "if a/b = c/d then ad = bc"
                    },
                    {
                              "id": "c",
                              "text": "it adds"
                    },
                    {
                              "id": "d",
                              "text": "it subtracts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "ad = bc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ad = bc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "if a/b = c/d then ad = bc",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "m6-u1-proportions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve a proportion and explain each step of cross-multiplication.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proportion",
                              "statement": "Solved + explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves proportion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains steps.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '5/6 = x/18 -> 5x18 = 6x -> 90 = 6x -> x = 15.'**",
          "commonErrors": [
                    "Cannot solve.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u1-proportions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Proportion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a/b = c/d -> ad = bc."
                    },
                    {
                              "id": "b",
                              "text": "Equal ratios."
                    },
                    {
                              "id": "c",
                              "text": "Find unknown."
                    },
                    {
                              "id": "d",
                              "text": "Same ratio."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Proportion\" means Equal ratios."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Proportion\" means Equal ratios.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Proportion** = Equal ratios.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-proportions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cross-multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find unknown."
                    },
                    {
                              "id": "b",
                              "text": "Same ratio."
                    },
                    {
                              "id": "c",
                              "text": "Multiply by same factor."
                    },
                    {
                              "id": "d",
                              "text": "a/b = c/d -> ad = bc."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cross-multiply\" means a/b = c/d -> ad = bc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cross-multiply\" means a/b = c/d -> ad = bc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cross-multiply** = a/b = c/d -> ad = bc.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-proportions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same ratio."
                    },
                    {
                              "id": "b",
                              "text": "Find unknown."
                    },
                    {
                              "id": "c",
                              "text": "Multiply by same factor."
                    },
                    {
                              "id": "d",
                              "text": "Comparison."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solve\" means Find unknown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solve\" means Find unknown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solve** = Find unknown.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

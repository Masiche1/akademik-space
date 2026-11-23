import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m6-u7-lesson-7-1",
  code: "7-1",
  title: "Algebra Review",
  goal: "I CAN use all algebra skills.",
  standards: ["6.EE.A.2", "6.EE.B.7", "6.EE.B.8"],
  vocabulary: [
    { term: "Expression", definition: "Math phrase." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Inequality", definition: "Range." },
    { term: "Variable", definition: "Unknown." },
    { term: "Solve", definition: "Find value." },
    { term: "Evaluate", definition: "Find value." },
    { term: "Inverse", definition: "Opposite op." },
    { term: "Graph", definition: "Number line." },
  ],
  concepts: [
    {
      id: "m6-u7-algebra-review",
      title: "Algebra review",
      skill: "Combine expressions, equations and inequalities.",
      lesson: {
        sections: [
          {
            heading: "All algebra skills",
            body: "Write/evaluate **expressions**, solve **equations**, solve **inequalities**.",
          },
          {
            heading: "Put it together",
            body: "Use all algebra skills.",
          },
        ],
        keyFormulas: [
          { name: "Algebra", statement: "Expressions + equations + inequalities = all skills." },
        ],
        workedExample: {
          problem: "Use all algebra skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m6-u7-algebra-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Algebra skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only expressions"
                    },
                    {
                              "id": "b",
                              "text": "expressions, equations, inequalities"
                    },
                    {
                              "id": "c",
                              "text": "only equations"
                    },
                    {
                              "id": "d",
                              "text": "only inequalities"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "expressions, equations, inequalities",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u7-algebra-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an expression, evaluate it, solve an equation, and solve an inequality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All algebra",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All algebra",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Expr: 2x+3; Eval: x=4->11; Eq: 3x+5=20->x=5; Ineq: x+2>7->x>5.'**"
          ]
},
        },
        {
          id: "m6-u7-algebra-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Algebra is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's math"
                    },
                    {
                              "id": "b",
                              "text": "it describes relationships and solves problems"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
                    },
                    {
                              "id": "d",
                              "text": "it's easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Describes relationships/solves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes relationships/solves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it describes relationships and solves problems",
          "commonErrors": [
                    "Thinks it's just math."
          ]
},
        },
        {
          id: "m6-u7-algebra-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Expression\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Math phrase."
                    },
                    {
                              "id": "c",
                              "text": "Range."
                    },
                    {
                              "id": "d",
                              "text": "Unknown."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Expression\" means Math phrase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Expression\" means Math phrase.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Expression** = Math phrase.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-algebra-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Range."
                    },
                    {
                              "id": "b",
                              "text": "Unknown."
                    },
                    {
                              "id": "c",
                              "text": "Find value."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m6-u7-algebra-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inequality\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unknown."
                    },
                    {
                              "id": "b",
                              "text": "Range."
                    },
                    {
                              "id": "c",
                              "text": "Find value."
                    },
                    {
                              "id": "d",
                              "text": "Opposite op."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inequality\" means Range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inequality\" means Range.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inequality** = Range.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-algebra-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Variable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find value."
                    },
                    {
                              "id": "b",
                              "text": "Opposite op."
                    },
                    {
                              "id": "c",
                              "text": "Number line."
                    },
                    {
                              "id": "d",
                              "text": "Unknown."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Variable\" means Unknown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Variable\" means Unknown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variable** = Unknown.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-algebra-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite op."
                    },
                    {
                              "id": "b",
                              "text": "Find value."
                    },
                    {
                              "id": "c",
                              "text": "Number line."
                    },
                    {
                              "id": "d",
                              "text": "Math phrase."
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

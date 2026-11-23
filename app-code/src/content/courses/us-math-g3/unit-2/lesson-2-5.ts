import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m3-u2-lesson-2-5",
  code: "2-5",
  title: "Multiplication Review",
  goal: "I CAN use all multiplication skills.",
  standards: ["3.OA.A.1", "3.OA.A.2", "3.OA.C.7"],
  vocabulary: [
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Fact", definition: "Multiplication equation." },
    { term: "Product", definition: "Answer." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Strategy", definition: "Way to solve." },
    { term: "Commutative", definition: "Order doesn't matter." },
    { term: "Break apart", definition: "Split into parts." },
    { term: "Fluency", definition: "Fast recall." },
  ],
  concepts: [
    {
      id: "m3-u2-multiply-review",
      title: "Multiplication review",
      skill: "Combine facts, strategies and fluency.",
      lesson: {
        sections: [
          {
            heading: "All multiplication skills",
            body: "Multiply using **facts**, **arrays**, **skip counting**, **break-apart** and **distributive** strategies. Be **fluent** — fast and accurate.",
          },
          {
            heading: "Put it together",
            body: "Solve multiplication problems using any strategy.",
          },
        ],
        keyFormulas: [
          { name: "Multiply review", statement: "Facts + strategies + fluency = all skills." },
        ],
        workedExample: {
          problem: "Solve $8 \\times 7$ and $6 \\times 14$ using different strategies.",
          solution: "56 and 84 — using facts and break-apart.",
        },
      },
      questions: [
        {
          id: "m3-u2-multiply-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiplication skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "facts, arrays, strategies, fluency"
                    },
                    {
                              "id": "c",
                              "text": "only arrays"
                    },
                    {
                              "id": "d",
                              "text": "only strategies"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All multiplication skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All multiplication skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $7 \\times 8$, $9 \\times 6$, and $8 \\times 15$. Show strategy for at least one.",
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
                                                  "All multiply",
                                                  "Facts + strategies."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All multiply",
                                                  "Facts + strategies."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves all three.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Shows strategy.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**56, 54, 120**"
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$12 \\times 3$ can be solved by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12 + 3"
                    },
                    {
                              "id": "b",
                              "text": "10 x 3 + 2 x 3 = 36"
                    },
                    {
                              "id": "c",
                              "text": "12 x 3 = 15"
                    },
                    {
                              "id": "d",
                              "text": "3 x 12 = 36 only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Break apart: 30 + 6 = 36."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Break apart: 30 + 6 = 36.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "break apart",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Multiplication equation."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Answer."
                    },
                    {
                              "id": "d",
                              "text": "Rows and columns."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiply\" means Repeated addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiply\" means Repeated addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiply** = Repeated addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "c",
                              "text": "Way to solve."
                    },
                    {
                              "id": "d",
                              "text": "Multiplication equation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means Multiplication equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Multiplication equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = Multiplication equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "b",
                              "text": "Answer."
                    },
                    {
                              "id": "c",
                              "text": "Way to solve."
                    },
                    {
                              "id": "d",
                              "text": "Order doesn't matter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Product\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Product\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Product** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Array\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Way to solve."
                    },
                    {
                              "id": "b",
                              "text": "Order doesn't matter."
                    },
                    {
                              "id": "c",
                              "text": "Split into parts."
                    },
                    {
                              "id": "d",
                              "text": "Rows and columns."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Array\" means Rows and columns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Array\" means Rows and columns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Array** = Rows and columns.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Strategy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order doesn't matter."
                    },
                    {
                              "id": "b",
                              "text": "Way to solve."
                    },
                    {
                              "id": "c",
                              "text": "Split into parts."
                    },
                    {
                              "id": "d",
                              "text": "Fast recall."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Strategy\" means Way to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Strategy\" means Way to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Strategy** = Way to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

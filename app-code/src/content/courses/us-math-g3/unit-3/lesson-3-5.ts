import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "m3-u3-lesson-3-5",
  code: "3-5",
  title: "Division Review",
  goal: "I CAN use all division skills.",
  standards: ["3.OA.A.2", "3.OA.C.7"],
  vocabulary: [
    { term: "Divide", definition: "Split into equal groups." },
    { term: "Fact", definition: "Division equation." },
    { term: "Quotient", definition: "Answer." },
    { term: "Inverse", definition: "Opposite of multiply." },
    { term: "Strategy", definition: "Way to solve." },
    { term: "Break apart", definition: "Split into parts." },
    { term: "Fluency", definition: "Fast recall." },
    { term: "Check", definition: "Verify answer." },
  ],
  concepts: [
    {
      id: "m3-u3-divide-review",
      title: "Division review",
      skill: "Combine facts, strategies and fluency for division.",
      lesson: {
        sections: [
          {
            heading: "All division skills",
            body: "Divide using **facts**, **inverse multiplication**, **break-apart**, and **repeated subtraction**. Be **fluent** and always **check** your answer.",
          },
          {
            heading: "Put it together",
            body: "Solve division problems using any strategy.",
          },
        ],
        keyFormulas: [
          { name: "Divide review", statement: "Facts + strategies + fluency + check = all skills." },
        ],
        workedExample: {
          problem: "Solve $72 \\div 8$ and $96 \\div 8$ using different strategies.",
          solution: "9 and 12 — using facts and break-apart.",
        },
      },
      questions: [
        {
          id: "m3-u3-divide-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Division skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "facts, strategies, fluency, check"
                    },
                    {
                              "id": "c",
                              "text": "only strategies"
                    },
                    {
                              "id": "d",
                              "text": "only facts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All division skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All division skills.",
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
          id: "m3-u3-divide-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $56 \\div 7$, $84 \\div 7$, and $91 \\div 7$. Show strategy for at least one.",
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
                                                  "All divide",
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
                                                  "All divide",
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
                    "**8, 12, 13**"
          ]
},
        },
        {
          id: "m3-u3-divide-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$77 \\div 7$ equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "11"
                    },
                    {
                              "id": "c",
                              "text": "12"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 x 11 = 77."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 x 11 = 77.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "11",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Division equation."
                    },
                    {
                              "id": "b",
                              "text": "Split into equal groups."
                    },
                    {
                              "id": "c",
                              "text": "Answer."
                    },
                    {
                              "id": "d",
                              "text": "Opposite of multiply."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into equal groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into equal groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into equal groups.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-review-q5",
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
                              "text": "Opposite of multiply."
                    },
                    {
                              "id": "c",
                              "text": "Way to solve."
                    },
                    {
                              "id": "d",
                              "text": "Division equation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means Division equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Division equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = Division equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite of multiply."
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
                              "text": "Split into parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inverse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Way to solve."
                    },
                    {
                              "id": "b",
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Fast recall."
                    },
                    {
                              "id": "d",
                              "text": "Opposite of multiply."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inverse\" means Opposite of multiply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inverse\" means Opposite of multiply.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inverse** = Opposite of multiply.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Strategy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split into parts."
                    },
                    {
                              "id": "b",
                              "text": "Way to solve."
                    },
                    {
                              "id": "c",
                              "text": "Fast recall."
                    },
                    {
                              "id": "d",
                              "text": "Verify answer."
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

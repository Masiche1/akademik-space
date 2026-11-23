import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "m4-u3-lesson-3-5",
  code: "3-5",
  title: "Multiplication Review",
  goal: "I CAN multiply multi-digit numbers and solve word problems.",
  standards: ["4.NBT.B.5"],
  vocabulary: [
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Product", definition: "Answer." },
    { term: "Partial product", definition: "Part of answer." },
    { term: "Standard algorithm", definition: "Step-by-step." },
    { term: "Area model", definition: "Grid method." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m4-u3-multiply-review",
      title: "Multiplication review",
      skill: "Combine all multiplication skills.",
      lesson: {
        sections: [
          {
            heading: "All multiplication",
            body: "Multiply multi-digit numbers using **standard algorithm** or **area model**, solve **word problems**, and **estimate** to check.",
          },
          {
            heading: "Put it together",
            body: "Use all multiplication skills together.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Algorithm + area model + word problems + estimate = all skills." },
        ],
        workedExample: {
          problem: "Multiply, solve word problems, and estimate.",
          solution: "All multiplication skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u3-multiply-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiplication skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only 1-digit"
                    },
                    {
                              "id": "b",
                              "text": "algorithm, area model, word problems, estimate"
                    },
                    {
                              "id": "c",
                              "text": "only 2-digit"
                    },
                    {
                              "id": "d",
                              "text": "only estimating"
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
          "finalAnswer": "algorithm, area model, word problems, estimate",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u3-multiply-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $67 \\times 89$ and solve a word problem involving multiplication.",
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
                                                  "Product + word problem."
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
                                                  "Product + word problem."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Multiplies correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves word problem.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**67 x 89 = 5,963; word problem solved correctly**"
          ]
},
        },
        {
          id: "m4-u3-multiply-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'partial product' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the final answer"
                    },
                    {
                              "id": "b",
                              "text": "part of the multiplication answer"
                    },
                    {
                              "id": "c",
                              "text": "a factor"
                    },
                    {
                              "id": "d",
                              "text": "an estimate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Partial product = part of answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Partial product = part of answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "part of the multiplication answer",
          "commonErrors": [
                    "Thinks it's the final answer."
          ]
},
        },
        {
          id: "m4-u3-multiply-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Part of answer."
                    },
                    {
                              "id": "d",
                              "text": "Step-by-step."
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
          id: "m4-u3-multiply-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of answer."
                    },
                    {
                              "id": "b",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "c",
                              "text": "Grid method."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m4-u3-multiply-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Partial product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "b",
                              "text": "Part of answer."
                    },
                    {
                              "id": "c",
                              "text": "Grid method."
                    },
                    {
                              "id": "d",
                              "text": "Story with numbers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Partial product\" means Part of answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Partial product\" means Part of answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Partial product** = Part of answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Standard algorithm\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grid method."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "d",
                              "text": "Step-by-step."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Standard algorithm\" means Step-by-step."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Standard algorithm\" means Step-by-step.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Standard algorithm** = Step-by-step.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area model\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "b",
                              "text": "Grid method."
                    },
                    {
                              "id": "c",
                              "text": "Check reasonableness."
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
                              "statement": "\"Area model\" means Grid method."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area model\" means Grid method.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area model** = Grid method.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

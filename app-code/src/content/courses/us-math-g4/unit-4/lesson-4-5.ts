import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "m4-u4-lesson-4-5",
  code: "4-5",
  title: "Division Review",
  goal: "I CAN divide multi-digit numbers and solve word problems.",
  standards: ["4.NBT.B.6"],
  vocabulary: [
    { term: "Divide", definition: "Split into equal parts." },
    { term: "Quotient", definition: "Answer." },
    { term: "Remainder", definition: "What's left over." },
    { term: "Interpret", definition: "What remainder means." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Check", definition: "Multiply to verify." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m4-u4-divide-review",
      title: "Division review",
      skill: "Combine all division skills.",
      lesson: {
        sections: [
          {
            heading: "All division",
            body: "Divide multi-digit numbers, interpret **remainders**, solve **word problems**, and **check** by multiplying.",
          },
          {
            heading: "Put it together",
            body: "Use all division skills together.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Algorithm + remainder + word problems + check = all skills." },
        ],
        workedExample: {
          problem: "Divide, interpret remainders, and solve word problems.",
          solution: "All division skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u4-divide-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Division skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only dividing"
                    },
                    {
                              "id": "b",
                              "text": "algorithm, remainder, word problems, check"
                    },
                    {
                              "id": "c",
                              "text": "only remainders"
                    },
                    {
                              "id": "d",
                              "text": "only word problems"
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
          "finalAnswer": "algorithm, remainder, word problems, check",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u4-divide-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $567 \\div 9$ and solve a word problem involving division.",
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
                                                  "Quotient + word problem."
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
                                                  "Quotient + word problem."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Divides correctly.",
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
                    "**567 / 9 = 63; word problem solved correctly**"
          ]
},
        },
        {
          id: "m4-u4-divide-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To check a division problem, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "multiply quotient by divisor and add remainder"
                    },
                    {
                              "id": "c",
                              "text": "subtract"
                    },
                    {
                              "id": "d",
                              "text": "estimate only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Check by multiplying."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check by multiplying.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply quotient by divisor and add remainder",
          "commonErrors": [
                    "Thinks you add."
          ]
},
        },
        {
          id: "m4-u4-divide-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Split into equal parts."
                    },
                    {
                              "id": "c",
                              "text": "What's left over."
                    },
                    {
                              "id": "d",
                              "text": "What remainder means."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into equal parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What's left over."
                    },
                    {
                              "id": "b",
                              "text": "What remainder means."
                    },
                    {
                              "id": "c",
                              "text": "Story with numbers."
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
          id: "m4-u4-divide-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Remainder\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What remainder means."
                    },
                    {
                              "id": "b",
                              "text": "What's left over."
                    },
                    {
                              "id": "c",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "d",
                              "text": "Check reasonableness."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Remainder\" means What's left over."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Remainder\" means What's left over.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Remainder** = What's left over.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interpret\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "b",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "c",
                              "text": "Multiply to verify."
                    },
                    {
                              "id": "d",
                              "text": "What remainder means."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interpret\" means What remainder means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interpret\" means What remainder means.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interpret** = What remainder means.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Multiply to verify."
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
                              "statement": "\"Word problem\" means Story with numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means Story with numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = Story with numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

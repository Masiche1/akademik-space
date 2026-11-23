import type { Lesson } from "../../../types.ts";

export const lesson67: Lesson = {
  id: "m6-u6-lesson-6-7",
  code: "6-7",
  title: "Fractions/Decimals Review",
  goal: "I CAN use all fraction and decimal skills.",
  standards: ["6.NS.A.1", "6.NS.B.2", "6.NS.B.3"],
  vocabulary: [
    { term: "Fraction", definition: "Part/whole." },
    { term: "Decimal", definition: "Base-ten." },
    { term: "Divide", definition: "Split." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Improper", definition: "num > denom." },
    { term: "Reciprocal", definition: "Flip." },
    { term: "Fluency", definition: "Quick accuracy." },
  ],
  concepts: [
    {
      id: "m6-u6-fractions-decimals-review",
      title: "Fractions/decimals review",
      skill: "Combine fraction division, decimal operations and multi-digit fluency.",
      lesson: {
        sections: [
          {
            heading: "All fraction/decimal skills",
            body: "**Divide fractions** (including mixed numbers), perform **decimal operations**, and use **multi-digit fluency**.",
          },
          {
            heading: "Put it together",
            body: "Use all fraction and decimal skills.",
          },
        ],
        keyFormulas: [
          { name: "Fractions/decimals", statement: "Divide + decimal ops + fluency = all skills." },
        ],
        workedExample: {
          problem: "Use all fraction and decimal skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m6-u6-fractions-decimals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fraction/decimal skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only fractions"
                    },
                    {
                              "id": "b",
                              "text": "divide fractions, decimal ops, multi-digit"
                    },
                    {
                              "id": "c",
                              "text": "only decimals"
                    },
                    {
                              "id": "d",
                              "text": "only fluency"
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
          "finalAnswer": "divide fractions, decimal ops, multi-digit",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u6-fractions-decimals-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Divide two fractions, perform a decimal operation, and solve a multi-digit problem.",
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
                                                  "All frac/dec",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All frac/dec",
                                                  "All three skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '3/4/2/5=15/8; 4.2+3.75=7.95; 456+789=1245.'**"
          ]
},
        },
        {
          id: "m6-u6-fractions-decimals-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fractions and decimals are connected because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're different"
                    },
                    {
                              "id": "b",
                              "text": "decimals are base-ten fractions"
                    },
                    {
                              "id": "c",
                              "text": "decimals are bigger"
                    },
                    {
                              "id": "d",
                              "text": "fractions are decimals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Decimals are base-ten fractions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decimals are base-ten fractions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "decimals are base-ten fractions",
          "commonErrors": [
                    "Thinks they're unrelated."
          ]
},
        },
        {
          id: "m6-u6-fractions-decimals-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten."
                    },
                    {
                              "id": "b",
                              "text": "Part/whole."
                    },
                    {
                              "id": "c",
                              "text": "Split."
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
                              "statement": "\"Fraction\" means Part/whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part/whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part/whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-fractions-decimals-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "d",
                              "text": "Base-ten."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decimal\" means Base-ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decimal\" means Base-ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decimal** = Base-ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-fractions-decimals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "Split."
                    },
                    {
                              "id": "c",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "d",
                              "text": "num > denom."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-fractions-decimals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "b",
                              "text": "num > denom."
                    },
                    {
                              "id": "c",
                              "text": "Flip."
                    },
                    {
                              "id": "d",
                              "text": "Repeated addition."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m6-u6-fractions-decimals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "num > denom."
                    },
                    {
                              "id": "b",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "c",
                              "text": "Flip."
                    },
                    {
                              "id": "d",
                              "text": "Quick accuracy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixed number\" means Whole + fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixed number\" means Whole + fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixed number** = Whole + fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

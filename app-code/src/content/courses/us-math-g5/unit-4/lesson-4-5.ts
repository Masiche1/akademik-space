import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "m5-u4-lesson-4-5",
  code: "4-5",
  title: "Decimals Review",
  goal: "I CAN use all decimal skills.",
  standards: ["5.NBT.A.3", "5.NBT.B.7"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Place value", definition: "Position." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Point", definition: "Decimal point." },
    { term: "Estimate", definition: "Check." },
  ],
  concepts: [
    {
      id: "m5-u4-decimal-review",
      title: "Decimals review",
      skill: "Combine decimal place value and all operations.",
      lesson: {
        sections: [
          {
            heading: "All decimal skills",
            body: "Read/write/compare decimals to **thousandths**, **add/subtract** by aligning points, **multiply/divide** by whole numbers and powers of 10.",
          },
          {
            heading: "Put it together",
            body: "Use all decimal skills for complex problems.",
          },
        ],
        keyFormulas: [
          { name: "Decimals", statement: "Place value + add/sub + mult/div = all skills." },
        ],
        workedExample: {
          problem: "Use all decimal skills.",
          solution: "All skills = complete decimal understanding.",
        },
      },
      questions: [
        {
          id: "m5-u4-decimal-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decimal skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only place value"
                    },
                    {
                              "id": "b",
                              "text": "place value, add, subtract, multiply, divide"
                    },
                    {
                              "id": "c",
                              "text": "only add"
                    },
                    {
                              "id": "d",
                              "text": "only divide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All decimal skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All decimal skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "place value, add, subtract, multiply, divide",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a decimal in words, add two decimals, subtract two decimals, and multiply a decimal by a whole number.",
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
                                                  "All decimals",
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
                                                  "All decimals",
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
                    "**e.g., '0.345 in words; 3.4+2.7=6.1; 8.9-4.5=4.4; 1.5x4=6'**"
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Decimals are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're pretty"
                    },
                    {
                              "id": "b",
                              "text": "they represent precise measurements and money"
                    },
                    {
                              "id": "c",
                              "text": "they're math"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Precise measurement/money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Precise measurement/money.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they represent precise measurements and money",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Position."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Combine."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decimal\" means Base-ten fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decimal\" means Base-ten fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decimal** = Base-ten fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Position."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Split."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
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
                              "text": "Decimal point."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u4-decimal-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
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
                              "text": "Decimal point."
                    },
                    {
                              "id": "d",
                              "text": "Check."
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
      ],
    },
  ],
};

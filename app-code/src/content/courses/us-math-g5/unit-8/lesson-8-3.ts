import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m5-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Fractions and Decimals",
  goal: "I CAN use all fraction and decimal skills.",
  standards: ["5.NF.A.1", "5.NF.B.4", "5.NF.B.7", "5.NBT.B.7"],
  vocabulary: [
    { term: "Fraction", definition: "Part of whole." },
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Simplify", definition: "Reduce." },
  ],
  concepts: [
    {
      id: "m5-u8-review-fractions-decimals",
      title: "Fractions and decimals review",
      skill: "Combine all fraction and decimal operations.",
      lesson: {
        sections: [
          {
            heading: "All fraction/decimal skills",
            body: "Add/subtract/multiply/divide **fractions** (including **mixed numbers**) and **decimals**.",
          },
          {
            heading: "Put it together",
            body: "Use all fraction and decimal skills together.",
          },
        ],
        keyFormulas: [
          { name: "Fractions/decimals", statement: "All operations = all skills." },
        ],
        workedExample: {
          problem: "Use all fraction and decimal skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u8-review-fractions-decimals-q1",
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
                              "text": "all operations on fractions and decimals"
                    },
                    {
                              "id": "c",
                              "text": "only decimals"
                    },
                    {
                              "id": "d",
                              "text": "only adding"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "all operations on fractions and decimals",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u8-review-fractions-decimals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Add two fractions, multiply two fractions, divide two fractions, and add two decimals.",
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
                                                  "All operations."
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
                                                  "All operations."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all operations.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '2/3+1/4=11/12; 2/3x3/4=1/2; 1/2÷1/4=2; 3.4+2.7=6.1'**"
          ]
},
        },
        {
          id: "m5-u8-review-fractions-decimals-q3",
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
          id: "m5-u8-review-fractions-decimals-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "b",
                              "text": "Part of whole."
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
                              "statement": "\"Fraction\" means Part of whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-fractions-decimals-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
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
                              "text": "Base-ten fraction."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m5-u8-review-fractions-decimals-q6",
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
          id: "m5-u8-review-fractions-decimals-q7",
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
                              "text": "Whole + fraction."
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
          id: "m5-u8-review-fractions-decimals-q8",
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
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "d",
                              "text": "Reduce."
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

import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m5-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Operations",
  goal: "I CAN add, subtract, multiply and divide multi-digit numbers.",
  standards: ["5.NBT.B.5", "5.NBT.B.6", "5.NBT.B.7"],
  vocabulary: [
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Quotient", definition: "Division answer." },
    { term: "Product", definition: "Multiplication answer." },
    { term: "Regroup", definition: "Carry/borrow." },
  ],
  concepts: [
    {
      id: "m5-u8-review-operations",
      title: "Operations review",
      skill: "Combine all operations with multi-digit numbers and decimals.",
      lesson: {
        sections: [
          {
            heading: "All operations",
            body: "Add/subtract/multiply/divide **multi-digit** numbers and **decimals**, solve **word problems**.",
          },
          {
            heading: "Put it together",
            body: "Use all operations together.",
          },
        ],
        keyFormulas: [
          { name: "Operations", statement: "Add + subtract + multiply + divide = all skills." },
        ],
        workedExample: {
          problem: "Add, subtract, multiply and divide multi-digit numbers and decimals.",
          solution: "All operations = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u8-review-operations-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Operations include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only adding"
                    },
                    {
                              "id": "b",
                              "text": "add, subtract, multiply, divide"
                    },
                    {
                              "id": "c",
                              "text": "only multiplying"
                    },
                    {
                              "id": "d",
                              "text": "only dividing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All four operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All four operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "add, subtract, multiply, divide",
          "commonErrors": [
                    "Lists one operation."
          ]
},
        },
        {
          id: "m5-u8-review-operations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $4,567 + 3,289$, $9,876 - 5,432$, $34 \\times 25$, $156 \\div 4$, and $3.45 + 2.7$.",
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
                                                  "All operations",
                                                  "7,856 + 4,444 + 850 + 39 + 6.15."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All operations",
                                                  "7,856 + 4,444 + 850 + 39 + 6.15."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all five.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**7,856; 4,444; 850; 39; 6.15**"
          ]
},
        },
        {
          id: "m5-u8-review-operations-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The four operations are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add, subtract, multiply, divide"
                    },
                    {
                              "id": "b",
                              "text": "add, subtract, multiply, divide"
                    },
                    {
                              "id": "c",
                              "text": "add, subtract, multiply, divide"
                    },
                    {
                              "id": "d",
                              "text": "add, subtract, multiply, divide"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Add, subtract, multiply, divide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add, subtract, multiply, divide.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "add, subtract, multiply, divide",
          "commonErrors": [
                    "Wrong operations."
          ]
},
        },
        {
          id: "m5-u8-review-operations-q4",
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
          id: "m5-u8-review-operations-q5",
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
                              "text": "Base-ten fraction."
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
          id: "m5-u8-review-operations-q6",
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
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "d",
                              "text": "Division answer."
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
          id: "m5-u8-review-operations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "b",
                              "text": "Division answer."
                    },
                    {
                              "id": "c",
                              "text": "Multiplication answer."
                    },
                    {
                              "id": "d",
                              "text": "Split."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m5-u8-review-operations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Division answer."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Multiplication answer."
                    },
                    {
                              "id": "d",
                              "text": "Carry/borrow."
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
      ],
    },
  ],
};

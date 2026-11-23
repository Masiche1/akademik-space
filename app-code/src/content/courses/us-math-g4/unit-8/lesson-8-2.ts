import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m4-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Operations",
  goal: "I CAN add, subtract, multiply and divide multi-digit numbers.",
  standards: ["4.NBT.B.4", "4.NBT.B.5", "4.NBT.B.6"],
  vocabulary: [
    { term: "Add", definition: "Combine numbers." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split into parts." },
    { term: "Regroup", definition: "Carry or borrow." },
    { term: "Quotient", definition: "Answer to division." },
    { term: "Product", definition: "Answer to multiplication." },
    { term: "Remainder", definition: "What's left over." },
  ],
  concepts: [
    {
      id: "m4-u8-review-operations",
      title: "Operations review",
      skill: "Combine addition, subtraction, multiplication and division.",
      lesson: {
        sections: [
          {
            heading: "All operations",
            body: "Add and subtract with **regrouping**, multiply using **standard algorithm** or **area model**, and divide with **quotients** and **remainders**.",
          },
          {
            heading: "Put it together",
            body: "Use all four operations together.",
          },
        ],
        keyFormulas: [
          { name: "Operations", statement: "Add + subtract + multiply + divide = all skills." },
        ],
        workedExample: {
          problem: "Add, subtract, multiply and divide multi-digit numbers.",
          solution: "All operations = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u8-review-operations-q1",
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
          id: "m4-u8-review-operations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $4,567 + 3,289$, $9,876 - 5,432$, $34 \\times 25$, and $156 \\div 4$.",
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
                                                  "7,856 + 4,444 + 850 + 39."
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
                                                  "7,856 + 4,444 + 850 + 39."
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
                    "**7,856; 4,444; 850; 39**"
          ]
},
        },
        {
          id: "m4-u8-review-operations-q3",
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
          id: "m4-u8-review-operations-q4",
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
                              "text": "Combine numbers."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
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
                              "statement": "\"Add\" means Combine numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u8-review-operations-q5",
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
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Carry or borrow."
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
          id: "m4-u8-review-operations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split into parts."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "d",
                              "text": "Answer to division."
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
          id: "m4-u8-review-operations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "b",
                              "text": "Answer to division."
                    },
                    {
                              "id": "c",
                              "text": "Answer to multiplication."
                    },
                    {
                              "id": "d",
                              "text": "Split into parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u8-review-operations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to division."
                    },
                    {
                              "id": "b",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "c",
                              "text": "Answer to multiplication."
                    },
                    {
                              "id": "d",
                              "text": "What's left over."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Regroup\" means Carry or borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Regroup\" means Carry or borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Regroup** = Carry or borrow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

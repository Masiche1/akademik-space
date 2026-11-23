import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m6-u6-lesson-6-3",
  code: "6-3",
  title: "Decimal Operations",
  goal: "I CAN add, subtract, multiply and divide decimals.",
  standards: ["6.NS.B.3"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Place value", definition: "Tenths, hundredths." },
    { term: "Align", definition: "Line up." },
    { term: "Estimate", definition: "Approximate." },
  ],
  concepts: [
    {
      id: "m6-u6-decimal-operations",
      title: "Decimal operations",
      skill: "Perform all operations with decimals, paying attention to place value.",
      lesson: {
        sections: [
          {
            heading: "Align decimals",
            body: "For **add/subtract**, line up decimal points. For **multiply**, count decimal places in factors. For **divide**, use long division.",
          },
          {
            heading: "Examples",
            body: "$2.5 + 1.75 = 4.25$; $3.6 \\times 2 = 7.2$; $7.5 \\div 2.5 = 3$.",
          },
        ],
        keyFormulas: [
          { name: "Add/sub", statement: "Align decimal points." },
          { name: "Multiply", statement: "Count decimal places." },
          { name: "Divide", statement: "Long division." },
        ],
        workedExample: {
          problem: "Calculate 4.2 + 3.75 and 6.4 / 0.8.",
          solution: "4.2+3.75 = **7.95**; 6.4/0.8 = **8**.",
        },
      },
      questions: [
        {
          id: "m6-u6-decimal-operations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "2.5 + 1.3 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3.8"
                    },
                    {
                              "id": "b",
                              "text": "3.7"
                    },
                    {
                              "id": "c",
                              "text": "4.8"
                    },
                    {
                              "id": "d",
                              "text": "2.8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3.8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3.8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3.8",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m6-u6-decimal-operations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "6.4 / 0.8 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.8"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "64"
                    },
                    {
                              "id": "d",
                              "text": "80"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m6-u6-decimal-operations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: 3.6 + 2.45; 5.8 - 2.3; 1.5 x 4; 7.2 / 0.9.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimals",
                              "statement": "6.05, 3.5, 6, 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3.6+2.45=6.05; 5.8-2.3=3.5; 1.5x4=6; 7.2/0.9=8.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing operations."
          ]
},
        },
        {
          id: "m6-u6-decimal-operations-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When adding decimals, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add left to right"
                    },
                    {
                              "id": "b",
                              "text": "align decimal points"
                    },
                    {
                              "id": "c",
                              "text": "ignore decimals"
                    },
                    {
                              "id": "d",
                              "text": "multiply first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Align decimal points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Align decimal points.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "align decimal points",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u6-decimal-operations-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate 12.5 - 7.85 and explain how you aligned the decimals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimals",
                              "statement": "4.65."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains alignment.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**12.50 - 7.85 = 4.65; lined up decimal points and place values.**",
          "commonErrors": [
                    "Wrong answer.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u6-decimal-operations-q6",
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
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
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
          id: "m6-u6-decimal-operations-q7",
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
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Split."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m6-u6-decimal-operations-q8",
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
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Split."
                    },
                    {
                              "id": "d",
                              "text": "Tenths, hundredths."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};

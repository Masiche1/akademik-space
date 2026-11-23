import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m6-u6-lesson-6-4",
  code: "6-4",
  title: "Decimal Multiplication",
  goal: "I CAN multiply decimals.",
  standards: ["6.NS.B.3"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Place value", definition: "Tenths, hundredths." },
    { term: "Zeros", definition: "Placeholders." },
    { term: "Estimate", definition: "Approximate." },
    { term: "Count", definition: "Decimal places." },
    { term: "Product", definition: "Result." },
    { term: "Whole number", definition: "Integer." },
  ],
  concepts: [
    {
      id: "m6-u6-decimal-multiplication",
      title: "Decimal multiplication",
      skill: "Multiply decimals by counting decimal places.",
      lesson: {
        sections: [
          {
            heading: "Count places",
            body: "Multiply as whole numbers, then count total decimal places in factors and place decimal in product: $1.5 \\times 0.4 = 0.60$.",
          },
          {
            heading: "Estimate first",
            body: "Estimate to check: $1.5 \\times 0.4 ≈ 2 \\times 0.5 = 1$; actual 0.6 is reasonable.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Whole numbers then place decimal by counting places." },
        ],
        workedExample: {
          problem: "Calculate 2.4 x 1.3.",
          solution: "24 x 13 = 312; 2 decimal places -> **3.12**.",
        },
      },
      questions: [
        {
          id: "m6-u6-decimal-multiplication-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "1.5 x 0.4 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.6"
                    },
                    {
                              "id": "b",
                              "text": "0.06"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "0.004"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.6",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m6-u6-decimal-multiplication-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When multiplying decimals, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add decimals"
                    },
                    {
                              "id": "b",
                              "text": "count decimal places in product"
                    },
                    {
                              "id": "c",
                              "text": "ignore decimals"
                    },
                    {
                              "id": "d",
                              "text": "divide first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count decimal places."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count decimal places.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "count decimal places in product",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u6-decimal-multiplication-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: 0.5 x 0.6; 2.5 x 3; 1.2 x 1.5.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal mult",
                              "statement": "0.3, 7.5, 1.8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computes all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**0.5x0.6=0.3; 2.5x3=7.5; 1.2x1.5=1.8.**",
          "commonErrors": [
                    "Wrong products.",
                    "Missing problems."
          ]
},
        },
        {
          id: "m6-u6-decimal-multiplication-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "2.4 x 1.3 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3.12"
                    },
                    {
                              "id": "b",
                              "text": "31.2"
                    },
                    {
                              "id": "c",
                              "text": "0.312"
                    },
                    {
                              "id": "d",
                              "text": "312"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3.12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3.12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3.12",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m6-u6-decimal-multiplication-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Multiply 3.5 x 0.8 and explain how you determined the decimal places in your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal mult",
                              "statement": "2.8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains places.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**3.5 x 0.8 = 2.8; 1+1=2 decimal places in factors, so 2 in product.**",
          "commonErrors": [
                    "Wrong product.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u6-decimal-multiplication-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Tenths, hundredths."
                    },
                    {
                              "id": "d",
                              "text": "Placeholders."
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
          id: "m6-u6-decimal-multiplication-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tenths, hundredths."
                    },
                    {
                              "id": "b",
                              "text": "Placeholders."
                    },
                    {
                              "id": "c",
                              "text": "Approximate."
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
          id: "m6-u6-decimal-multiplication-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Placeholders."
                    },
                    {
                              "id": "b",
                              "text": "Tenths, hundredths."
                    },
                    {
                              "id": "c",
                              "text": "Approximate."
                    },
                    {
                              "id": "d",
                              "text": "Decimal places."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Tenths, hundredths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Tenths, hundredths.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Tenths, hundredths.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

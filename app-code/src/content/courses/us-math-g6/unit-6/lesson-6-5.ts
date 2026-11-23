import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m6-u6-lesson-6-5",
  code: "6-5",
  title: "Decimal Division",
  goal: "I CAN divide decimals.",
  standards: ["6.NS.B.3"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Divide", definition: "Split." },
    { term: "Long division", definition: "Standard method." },
    { term: "Move decimal", definition: "Shift point." },
    { term: "Estimate", definition: "Approximate." },
    { term: "Quotient", definition: "Result." },
    { term: "Divisor", definition: "What you divide by." },
    { term: "Dividend", definition: "What is divided." },
  ],
  concepts: [
    {
      id: "m6-u6-decimal-division",
      title: "Decimal division",
      skill: "Divide decimals by moving the decimal point.",
      lesson: {
        sections: [
          {
            heading: "Move decimal",
            body: "To divide by a decimal, **move the decimal point** in both numbers to make divisor a whole number: $6.4 \\div 0.8 = 64 \\div 8 = 8$.",
          },
          {
            heading: "Estimate",
            body: "Estimate first: $6.4 \\div 0.8 ≈ 6 \\div 1 = 6$; actual 8 is reasonable.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Move decimal to make divisor whole, then divide." },
        ],
        workedExample: {
          problem: "Calculate 7.5 / 0.5.",
          solution: "Move decimal: 75 / 5 = **15**.",
        },
      },
      questions: [
        {
          id: "m6-u6-decimal-division-q1",
          difficulty: "foundation",
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
          id: "m6-u6-decimal-division-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To divide by a decimal, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add decimals"
                    },
                    {
                              "id": "b",
                              "text": "move decimal to make divisor whole"
                    },
                    {
                              "id": "c",
                              "text": "ignore decimal"
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
                              "statement": "Move decimal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Move decimal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "move decimal to make divisor whole",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u6-decimal-division-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: 7.5 / 0.5; 4.8 / 1.2; 9.6 / 0.4.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal div",
                              "statement": "15, 4, 24."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**7.5/0.5=15; 4.8/1.2=4; 9.6/0.4=24.**",
          "commonErrors": [
                    "Wrong quotients.",
                    "Missing problems."
          ]
},
        },
        {
          id: "m6-u6-decimal-division-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "9.6 / 0.4 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.4"
                    },
                    {
                              "id": "b",
                              "text": "24"
                    },
                    {
                              "id": "c",
                              "text": "2.4"
                    },
                    {
                              "id": "d",
                              "text": "96"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "24."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "24.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "24",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m6-u6-decimal-division-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Divide 8.4 / 0.7 and explain how you moved the decimal point.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal div",
                              "statement": "12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains decimal move.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**8.4 / 0.7 = 84 / 7 = 12; moved decimal one place right in both.**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u6-decimal-division-q6",
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
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Standard method."
                    },
                    {
                              "id": "d",
                              "text": "Shift point."
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
          id: "m6-u6-decimal-division-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Standard method."
                    },
                    {
                              "id": "b",
                              "text": "Shift point."
                    },
                    {
                              "id": "c",
                              "text": "Approximate."
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
          id: "m6-u6-decimal-division-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Long division\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shift point."
                    },
                    {
                              "id": "b",
                              "text": "Standard method."
                    },
                    {
                              "id": "c",
                              "text": "Approximate."
                    },
                    {
                              "id": "d",
                              "text": "Result."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Long division\" means Standard method."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Long division\" means Standard method.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Long division** = Standard method.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

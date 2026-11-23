import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m5-u4-lesson-4-3",
  code: "4-3",
  title: "Decimal Multiplication and Division",
  goal: "I CAN multiply and divide decimals.",
  standards: ["5.NBT.B.7"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split into parts." },
    { term: "Point", definition: "Decimal point." },
    { term: "Estimate", definition: "Check." },
    { term: "Product", definition: "Multiplication answer." },
    { term: "Quotient", definition: "Division answer." },
    { term: "Power of 10", definition: "10, 100, 1000." },
  ],
  concepts: [
    {
      id: "m5-u4-decimal-mult-div",
      title: "Decimal multiplication and division",
      skill: "Multiply and divide decimals by whole numbers and powers of 10.",
      lesson: {
        sections: [
          {
            heading: "Multiply",
            body: "Multiply as whole numbers, then place the point: $1.5 \\times 3 = 4.5$. For powers of 10, **shift the point**: $1.5 \\times 10 = 15$, $1.5 \\times 100 = 150$.",
          },
          {
            heading: "Divide",
            body: "Divide as whole numbers, place point: $4.5 \\div 3 = 1.5$. For powers of 10, **shift the point left**: $45 \\div 10 = 4.5$.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Whole multiply -> place point." },
          { name: "Powers of 10", statement: "x10 = shift right; x100 = shift 2 right; ÷10 = shift left." },
        ],
        workedExample: {
          problem: "Calculate $2.4 \\times 5$ and $45 \\div 10$.",
          solution: "$2.4 \\times 5 = 12$; $45 \\div 10 = 4.5$.",
        },
      },
      questions: [
        {
          id: "m5-u4-decimal-mult-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $1.5 \\times 3$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4.5"
                    },
                    {
                              "id": "b",
                              "text": "5.5"
                    },
                    {
                              "id": "c",
                              "text": "3.5"
                    },
                    {
                              "id": "d",
                              "text": "45"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1.5 x 3 = 4.5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1.5 x 3 = 4.5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4.5",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u4-decimal-mult-div-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $45 \\div 10$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "450"
                    },
                    {
                              "id": "b",
                              "text": "4.5"
                    },
                    {
                              "id": "c",
                              "text": "0.45"
                    },
                    {
                              "id": "d",
                              "text": "5.4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45 ÷ 10 = 4.5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45 ÷ 10 = 4.5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4.5",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m5-u4-decimal-mult-div-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $3.2 \\times 4$, $7.5 \\div 5$, $2.4 \\times 10$, and $56 \\div 100$. Show work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal ops",
                              "statement": "12.8, 1.5, 24, 0.56."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3.2 x 4 = 12.8; 7.5 ÷ 5 = 1.5; 2.4 x 10 = 24; 56 ÷ 100 = 0.56**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing operations."
          ]
},
        },
        {
          id: "m5-u4-decimal-mult-div-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Multiplying by 10 shifts the decimal point...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "left"
                    },
                    {
                              "id": "b",
                              "text": "right"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "up"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "x10 = shift right 1 place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "x10 = shift right 1 place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "right",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "m5-u4-decimal-mult-div-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $4.5 \\times 6$ and $34.5 \\div 10$. Explain how powers of 10 affect decimals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decimal ops",
                              "statement": "27 and 3.45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains powers of 10.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**4.5 x 6 = 27; 34.5 ÷ 10 = 3.45; ÷10 shifts point left**",
          "commonErrors": [
                    "Wrong answers.",
                    "No explanation."
          ]
},
        },
        {
          id: "m5-u4-decimal-mult-div-q6",
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
                              "text": "Split into parts."
                    },
                    {
                              "id": "d",
                              "text": "Decimal point."
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
          id: "m5-u4-decimal-mult-div-q7",
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
                              "text": "Decimal point."
                    },
                    {
                              "id": "c",
                              "text": "Check."
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
          id: "m5-u4-decimal-mult-div-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decimal point."
                    },
                    {
                              "id": "b",
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Check."
                    },
                    {
                              "id": "d",
                              "text": "Multiplication answer."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};

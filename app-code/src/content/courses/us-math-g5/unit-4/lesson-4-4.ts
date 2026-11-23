import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m5-u4-lesson-4-4",
  code: "4-4",
  title: "Decimal Word Problems",
  goal: "I CAN solve word problems with decimals.",
  standards: ["5.NBT.B.7"],
  vocabulary: [
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Money", definition: "Dollars and cents." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Estimate", definition: "Check reasonableness." },
  ],
  concepts: [
    {
      id: "m5-u4-decimal-word-problems",
      title: "Decimal Word Problems",
      skill: "Solve word problems involving decimal operations.",
      lesson: {
        sections: [
          {
            heading: "Problems",
            body: "Identify operation -> solve -> check.",
          },
          {
            heading: "Decimals",
            body: "Align points for add/sub; multiply/divide normally.",
          },
        ],
        keyFormulas: [
          { name: "Problems", statement: "Add + subtract + multiply + divide decimals" },
        ],
        workedExample: {
          problem: "A shirt costs $24.99. You buy 3 shirts and pay with $100. How much change?",
          solution: "24.99 x 3 = 74.97; 100 - 74.97 = $25.03 change.",
        },
      },
      questions: [
        {
          id: "m5-u4-decimal-word-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A book costs $15.75. What is the cost with 7% tax?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$16.87"
                    },
                    {
                              "id": "b",
                              "text": "$15.82"
                    },
                    {
                              "id": "c",
                              "text": "$17.12"
                    },
                    {
                              "id": "d",
                              "text": "$16.25"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15.75 x 1.07 ≈ 16.85, so about $16.87."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15.75 x 1.07 ≈ 16.85, so about $16.87.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$16.87",
          "commonErrors": [
                    "Wrong calculation."
          ]
},
        },
        {
          id: "m5-u4-decimal-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "You buy 4 items at $12.50 each. Total cost?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$48.00"
                    },
                    {
                              "id": "b",
                              "text": "$50.00"
                    },
                    {
                              "id": "c",
                              "text": "$45.00"
                    },
                    {
                              "id": "d",
                              "text": "$52.00"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12.50 x 4 = 50.00."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12.50 x 4 = 50.00.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$50.00",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u4-decimal-word-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car uses 8.5 gallons per 100 miles. How much gas for 350 miles? If gas is $3.45/gallon, total cost?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problems",
                              "statement": "29.75 gallons, $102.64."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates gas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Calculates cost.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**8.5 x 3.5 = 29.75 gallons; 29.75 x 3.45 = $102.64**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing steps."
          ]
},
        },
        {
          id: "m5-u4-decimal-word-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When solving decimal word problems, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignore decimals"
                    },
                    {
                              "id": "b",
                              "text": "align decimal points for addition/subtraction"
                    },
                    {
                              "id": "c",
                              "text": "round everything"
                    },
                    {
                              "id": "d",
                              "text": "guess"
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
          "finalAnswer": "align decimal points for addition/subtraction",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u4-decimal-word-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A restaurant bill is $87.50. You add 20% tip and split it 4 ways. How much does each person pay?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problems",
                              "statement": "$26.25 each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates tip + total.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divides correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**87.50 x 1.20 = 105.00; 105.00 / 4 = $26.25 each**",
          "commonErrors": [
                    "Wrong amount.",
                    "Missing steps."
          ]
},
        },
        {
          id: "m5-u4-decimal-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Dollars and cents."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
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
          id: "m5-u4-decimal-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dollars and cents."
                    },
                    {
                              "id": "b",
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Story with numbers."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "m5-u4-decimal-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Money\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Dollars and cents."
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
                              "statement": "\"Money\" means Dollars and cents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Money\" means Dollars and cents.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Money** = Dollars and cents.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

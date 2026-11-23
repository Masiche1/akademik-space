import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m6-u1-lesson-1-2",
  code: "1-2",
  title: "Unit Rates",
  goal: "I CAN find and use unit rates.",
  standards: ["6.RP.A.2"],
  vocabulary: [
    { term: "Unit rate", definition: "Rate per one unit." },
    { term: "Divide", definition: "Split." },
    { term: "Per", definition: "For each." },
    { term: "Price", definition: "Cost." },
    { term: "Speed", definition: "Distance/time." },
    { term: "Compare", definition: "Which is better." },
    { term: "Best buy", definition: "Lowest unit price." },
    { term: "Constant", definition: "Same rate." },
  ],
  concepts: [
    {
      id: "m6-u1-unit-rates",
      title: "Unit rates",
      skill: "Find unit rates and use them to compare.",
      lesson: {
        sections: [
          {
            heading: "Rate per one",
            body: "A **unit rate** tells how much per **one** unit: $12 for 4 items = **$3 per item**. Divide total by quantity.",
          },
          {
            heading: "Comparing",
            body: "Use unit rates to find the **best buy**: compare price per unit, not total price.",
          },
        ],
        keyFormulas: [
          { name: "Unit rate", statement: "Total / quantity = rate per one." },
        ],
        workedExample: {
          problem: "Which is better: 6 for $4.50 or 8 for $6.00?",
          solution: "6/$4.50 = $0.75/item; 8/$6.00 = $0.75/item — **same unit rate**.",
        },
      },
      questions: [
        {
          id: "m6-u1-unit-rates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$15 for 5 notebooks is a unit rate of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5 each"
                    },
                    {
                              "id": "b",
                              "text": "$3 each"
                    },
                    {
                              "id": "c",
                              "text": "$10 each"
                    },
                    {
                              "id": "d",
                              "text": "$15 each"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15/5 = $3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15/5 = $3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3 each",
          "commonErrors": [
                    "Wrong division."
          ]
},
        },
        {
          id: "m6-u1-unit-rates-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find the best buy, you should compare...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "total prices"
                    },
                    {
                              "id": "b",
                              "text": "unit prices"
                    },
                    {
                              "id": "c",
                              "text": "sizes only"
                    },
                    {
                              "id": "d",
                              "text": "brands"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Unit prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unit prices.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "unit prices",
          "commonErrors": [
                    "Compares wrong thing."
          ]
},
        },
        {
          id: "m6-u1-unit-rates-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the unit price of: 12 pencils for $4.80 and 8 pencils for $3.20. Which is better?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Unit rate",
                              "statement": "0.40 vs 0.40 — same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds both rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**4.80/12 = $0.40; 3.20/8 = $0.40 — same unit price.**",
          "commonErrors": [
                    "Wrong rates.",
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m6-u1-unit-rates-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels 240 miles in 4 hours. Its speed is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 mph"
                    },
                    {
                              "id": "b",
                              "text": "80 mph"
                    },
                    {
                              "id": "c",
                              "text": "40 mph"
                    },
                    {
                              "id": "d",
                              "text": "100 mph"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "240/4 = 60 mph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "240/4 = 60 mph.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "60 mph",
          "commonErrors": [
                    "Wrong division."
          ]
},
        },
        {
          id: "m6-u1-unit-rates-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two deals using unit rates. Which gives more for your money?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Unit rate",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds unit rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Determines better.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Deal A: $0.75/item; Deal B: $0.80/item; A is better.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u1-unit-rates-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unit rate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split."
                    },
                    {
                              "id": "b",
                              "text": "Rate per one unit."
                    },
                    {
                              "id": "c",
                              "text": "For each."
                    },
                    {
                              "id": "d",
                              "text": "Cost."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unit rate\" means Rate per one unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unit rate\" means Rate per one unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unit rate** = Rate per one unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-unit-rates-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "For each."
                    },
                    {
                              "id": "b",
                              "text": "Cost."
                    },
                    {
                              "id": "c",
                              "text": "Distance/time."
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
          id: "m6-u1-unit-rates-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Per\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cost."
                    },
                    {
                              "id": "b",
                              "text": "For each."
                    },
                    {
                              "id": "c",
                              "text": "Distance/time."
                    },
                    {
                              "id": "d",
                              "text": "Which is better."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Per\" means For each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Per\" means For each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Per** = For each.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

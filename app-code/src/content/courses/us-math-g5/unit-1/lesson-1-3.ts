import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m5-u1-lesson-1-3",
  code: "1-3",
  title: "Multi-Digit Division",
  goal: "I CAN divide multi-digit numbers fluently.",
  standards: ["5.NBT.B.6"],
  vocabulary: [
    { term: "Divide", definition: "Split into parts." },
    { term: "Quotient", definition: "Answer." },
    { term: "Dividend", definition: "Number divided." },
    { term: "Divisor", definition: "Number divided by." },
    { term: "Remainder", definition: "Left over." },
    { term: "Algorithm", definition: "Step-by-step." },
    { term: "Estimate", definition: "Check." },
    { term: "Check", definition: "Multiply to verify." },
  ],
  concepts: [
    {
      id: "m5-u1-multi-digit-divide",
      title: "Multi-digit division",
      skill: "Divide multi-digit numbers using the standard algorithm.",
      lesson: {
        sections: [
          {
            heading: "Algorithm",
            body: "Divide one place at a time: **quotient** digit above dividend, **multiply**, **subtract**, **bring down** next digit, repeat.",
          },
          {
            heading: "Example",
            body: "$5,670 \\div 15$: 15 into 56 = 3, bring down; 15 into 17 = 1; 15 into 20 = 1 r5 -> **378 r5**.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Dividend / divisor = quotient + remainder." },
        ],
        workedExample: {
          problem: "Calculate $4,536 \\div 12$.",
          solution: "12 into 45 = 3 r9; bring down 3: 12 into 93 = 7 r9; bring down 6: 12 into 96 = 8. **Answer: 378.**",
        },
      },
      questions: [
        {
          id: "m5-u1-multi-digit-divide-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $4,536 \\div 12$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "378"
                    },
                    {
                              "id": "b",
                              "text": "378 r6"
                    },
                    {
                              "id": "c",
                              "text": "379"
                    },
                    {
                              "id": "d",
                              "text": "377"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4,536 / 12 = 378."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4,536 / 12 = 378.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "378",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-divide-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $6,789 \\div 15$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "452 r9"
                    },
                    {
                              "id": "b",
                              "text": "453"
                    },
                    {
                              "id": "c",
                              "text": "452"
                    },
                    {
                              "id": "d",
                              "text": "451 r14"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6,789 / 15 = 452 r 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6,789 / 15 = 452 r 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "452 r9",
          "commonErrors": [
                    "Wrong remainder."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-divide-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $8,976 \\div 24$ and $5,670 \\div 15$. Show work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "374 and 378."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**8,976 / 24 = 374; 5,670 / 15 = 378**",
          "commonErrors": [
                    "Wrong quotients.",
                    "Missing work."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-divide-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To check division, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "multiply quotient by divisor and add remainder"
                    },
                    {
                              "id": "c",
                              "text": "subtract"
                    },
                    {
                              "id": "d",
                              "text": "estimate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Multiply + add remainder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiply + add remainder.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply quotient by divisor and add remainder",
          "commonErrors": [
                    "Wrong check."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-divide-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Divide $12,345 \\div 25$. Show each step of the algorithm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "493 r20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**12,345 / 25 = 493 r 20**",
          "commonErrors": [
                    "Wrong quotient.",
                    "Missing steps."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-divide-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Number divided."
                    },
                    {
                              "id": "d",
                              "text": "Number divided by."
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
        {
          id: "m5-u1-multi-digit-divide-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number divided."
                    },
                    {
                              "id": "b",
                              "text": "Number divided by."
                    },
                    {
                              "id": "c",
                              "text": "Left over."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-divide-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dividend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number divided by."
                    },
                    {
                              "id": "b",
                              "text": "Number divided."
                    },
                    {
                              "id": "c",
                              "text": "Left over."
                    },
                    {
                              "id": "d",
                              "text": "Step-by-step."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dividend\" means Number divided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dividend\" means Number divided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dividend** = Number divided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

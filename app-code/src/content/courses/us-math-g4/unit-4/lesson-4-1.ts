import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m4-u4-lesson-4-1",
  code: "4-1",
  title: "Division Basics",
  goal: "I CAN divide multi-digit numbers using the standard algorithm.",
  standards: ["4.NBT.B.6"],
  vocabulary: [
    { term: "Divide", definition: "Split into equal parts." },
    { term: "Quotient", definition: "Answer to division." },
    { term: "Dividend", definition: "Number being divided." },
    { term: "Divisor", definition: "Number you divide by." },
    { term: "Remainder", definition: "What's left over." },
    { term: "Algorithm", definition: "Step-by-step method." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Partial quotient", definition: "Part of answer." },
  ],
  concepts: [
    {
      id: "m4-u4-divide-basics",
      title: "Division basics",
      skill: "Divide multi-digit numbers using the standard algorithm.",
      lesson: {
        sections: [
          {
            heading: "Standard algorithm",
            body: "To **divide**, find how many times the **divisor** goes into the **dividend**. Write the **quotient** and any **remainder**.",
          },
          {
            heading: "Example",
            body: "$96 \\div 4$: 4 goes into 9 two times (8), remainder 1; bring down 6, 4 goes into 16 four times. **Answer: 24.**",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Dividend / divisor = quotient + remainder." },
        ],
        workedExample: {
          problem: "Calculate $156 \\div 4$.",
          solution: "4 into 15 = 3 (12), remainder 3; bring down 6, 4 into 36 = 9. **Answer: 39.**",
        },
      },
      questions: [
        {
          id: "m4-u4-divide-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $156 \\div 4$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "39"
                    },
                    {
                              "id": "b",
                              "text": "38"
                    },
                    {
                              "id": "c",
                              "text": "40"
                    },
                    {
                              "id": "d",
                              "text": "37"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "156 / 4 = 39."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "156 / 4 = 39.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "39",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $245 \\div 5$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "49"
                    },
                    {
                              "id": "b",
                              "text": "48"
                    },
                    {
                              "id": "c",
                              "text": "50"
                    },
                    {
                              "id": "d",
                              "text": "47"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "245 / 5 = 49."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "245 / 5 = 49.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "49",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $368 \\div 8$ and $472 \\div 6$. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "46 and 78 r 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divides second.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**368 / 8 = 46; 472 / 6 = 78 r 4**",
          "commonErrors": [
                    "Wrong quotients.",
                    "Missing work."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate: $245 \\div 5$ is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "40"
                    },
                    {
                              "id": "b",
                              "text": "50"
                    },
                    {
                              "id": "c",
                              "text": "60"
                    },
                    {
                              "id": "d",
                              "text": "30"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "245 / 5 ≈ 250 / 5 = 50."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "245 / 5 ≈ 250 / 5 = 50.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "50",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $567 \\div 9$ and explain how you checked your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "63."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Checks by multiplying.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**567 / 9 = 63; check: 63 x 9 = 567**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No check."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to division."
                    },
                    {
                              "id": "b",
                              "text": "Split into equal parts."
                    },
                    {
                              "id": "c",
                              "text": "Number being divided."
                    },
                    {
                              "id": "d",
                              "text": "Number you divide by."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into equal parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into equal parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into equal parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number being divided."
                    },
                    {
                              "id": "b",
                              "text": "Number you divide by."
                    },
                    {
                              "id": "c",
                              "text": "What's left over."
                    },
                    {
                              "id": "d",
                              "text": "Answer to division."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer to division."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer to division.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer to division.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dividend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number you divide by."
                    },
                    {
                              "id": "b",
                              "text": "Number being divided."
                    },
                    {
                              "id": "c",
                              "text": "What's left over."
                    },
                    {
                              "id": "d",
                              "text": "Step-by-step method."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dividend\" means Number being divided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dividend\" means Number being divided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dividend** = Number being divided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m4-u4-lesson-4-4",
  code: "4-4",
  title: "Dividing 3-Digit Numbers",
  goal: "I CAN divide 3-digit numbers using the standard algorithm.",
  standards: ["4.NBT.B.6"],
  vocabulary: [
    { term: "Dividend", definition: "Number being divided." },
    { term: "Divisor", definition: "Number you divide by." },
    { term: "Quotient", definition: "Answer." },
    { term: "Remainder", definition: "What's left over." },
    { term: "Algorithm", definition: "Step-by-step method." },
    { term: "Bring down", definition: "Next digit." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Check", definition: "Multiply to verify." },
  ],
  concepts: [
    {
      id: "m4-u4-divide-3digit",
      title: "Dividing 3-digit numbers",
      skill: "Divide 3-digit numbers using the standard algorithm.",
      lesson: {
        sections: [
          {
            heading: "Standard algorithm",
            body: "To divide a **3-digit** number, divide one digit at a time: divide the hundreds, **bring down** the tens, divide, **bring down** the ones, divide.",
          },
          {
            heading: "Example",
            body: "$156 \\div 4$: 4 into 15 = 3 (write 3 above 5, since 1 is too small); bring down 6; 4 into 36 = 9. **Answer: 39.**",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Hundreds -> bring down tens -> divide -> bring down ones -> divide." },
        ],
        workedExample: {
          problem: "Calculate $234 \\div 6$.",
          solution: "6 into 23 = 3 (18), remainder 5; bring down 4, 6 into 54 = 9. **Answer: 39.**",
        },
      },
      questions: [
        {
          id: "m4-u4-divide-3digit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $234 \\div 6$?",
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
                              "statement": "234 / 6 = 39."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "234 / 6 = 39.",
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
          id: "m4-u4-divide-3digit-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $345 \\div 5$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "69"
                    },
                    {
                              "id": "b",
                              "text": "68"
                    },
                    {
                              "id": "c",
                              "text": "70"
                    },
                    {
                              "id": "d",
                              "text": "67"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "345 / 5 = 69."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "345 / 5 = 69.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "69",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m4-u4-divide-3digit-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $456 \\div 8$ and $567 \\div 9$. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide 3-digit",
                              "statement": "57 and 63."
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
          "finalAnswer": "**456 / 8 = 57; 567 / 9 = 63**",
          "commonErrors": [
                    "Wrong quotients.",
                    "Missing work."
          ]
},
        },
        {
          id: "m4-u4-divide-3digit-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When dividing $234 \\div 6$, you start by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dividing 6 into 2"
                    },
                    {
                              "id": "b",
                              "text": "dividing 6 into 23"
                    },
                    {
                              "id": "c",
                              "text": "dividing 6 into 234"
                    },
                    {
                              "id": "d",
                              "text": "dividing 6 into 4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 into 23 = 3, then bring down 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 into 23 = 3, then bring down 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "dividing 6 into 23",
          "commonErrors": [
                    "Starts wrong place."
          ]
},
        },
        {
          id: "m4-u4-divide-3digit-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $678 \\div 9$ and check your answer by multiplying.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide 3-digit",
                              "statement": "75 r 3."
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
          "finalAnswer": "**678 / 9 = 75 r 3; check: 75 x 9 = 675 + 3 = 678**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No check."
          ]
},
        },
        {
          id: "m4-u4-divide-3digit-q6",
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
                              "text": "Answer."
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
        {
          id: "m4-u4-divide-3digit-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divisor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "What's left over."
                    },
                    {
                              "id": "c",
                              "text": "Step-by-step method."
                    },
                    {
                              "id": "d",
                              "text": "Number you divide by."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divisor\" means Number you divide by."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divisor\" means Number you divide by.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divisor** = Number you divide by.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-3digit-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What's left over."
                    },
                    {
                              "id": "b",
                              "text": "Answer."
                    },
                    {
                              "id": "c",
                              "text": "Step-by-step method."
                    },
                    {
                              "id": "d",
                              "text": "Next digit."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};

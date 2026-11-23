import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m5-u1-lesson-1-2",
  code: "1-2",
  title: "Multi-Digit Multiplication",
  goal: "I CAN multiply multi-digit numbers fluently.",
  standards: ["5.NBT.B.5"],
  vocabulary: [
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Product", definition: "Answer." },
    { term: "Factor", definition: "Numbers multiplied." },
    { term: "Standard algorithm", definition: "Step-by-step." },
    { term: "Partial product", definition: "Part of answer." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Place value", definition: "Position." },
    { term: "Regroup", definition: "Carry." },
  ],
  concepts: [
    {
      id: "m5-u1-multi-digit-multiply",
      title: "Multi-digit multiplication",
      skill: "Multiply multi-digit numbers using the standard algorithm.",
      lesson: {
        sections: [
          {
            heading: "Algorithm",
            body: "Line up numbers, multiply each digit, **add partial products**. For 3-digit x 2-digit, multiply by ones, then tens, then hundreds.",
          },
          {
            heading: "Example",
            body: "$123 \\times 45$: 123x5=615, 123x40=4920, total **5,535**.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Partial products summed = product." },
        ],
        workedExample: {
          problem: "Calculate $234 \\times 56$.",
          solution: "234x6=1404, 234x50=11700, total **13,104**.",
        },
      },
      questions: [
        {
          id: "m5-u1-multi-digit-multiply-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $123 \\times 45$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5,535"
                    },
                    {
                              "id": "b",
                              "text": "5,435"
                    },
                    {
                              "id": "c",
                              "text": "5,635"
                    },
                    {
                              "id": "d",
                              "text": "4,535"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "123 x 45 = 5,535."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "123 x 45 = 5,535.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5,535",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-multiply-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $456 \\times 78$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "35,568"
                    },
                    {
                              "id": "b",
                              "text": "35,468"
                    },
                    {
                              "id": "c",
                              "text": "36,568"
                    },
                    {
                              "id": "d",
                              "text": "34,568"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "456 x 78 = 35,568."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "456 x 78 = 35,568.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "35,568",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-multiply-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate $789 \\times 23$ and $345 \\times 67$. Show partial products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "18,147 and 23,115."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**789 x 23 = 18,147; 345 x 67 = 23,115**",
          "commonErrors": [
                    "Wrong products.",
                    "Missing partials."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-multiply-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate: $567 \\times 89$ is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "40,000"
                    },
                    {
                              "id": "b",
                              "text": "50,000"
                    },
                    {
                              "id": "c",
                              "text": "60,000"
                    },
                    {
                              "id": "d",
                              "text": "45,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "600 x 90 = 54,000 ≈ 50,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "600 x 90 = 54,000 ≈ 50,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "50,000",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-multiply-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Multiply $456 \\times 789$ using the standard algorithm. Show all partial products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "359,784."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows partials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct product.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**456 x 789 = 359,784; partials: 4104 + 36480 + 319200 = 359,784**",
          "commonErrors": [
                    "Wrong product.",
                    "Missing partials."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-multiply-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Numbers multiplied."
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
          id: "m5-u1-multi-digit-multiply-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers multiplied."
                    },
                    {
                              "id": "b",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "c",
                              "text": "Part of answer."
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
                              "statement": "\"Product\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Product\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Product** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-multi-digit-multiply-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Factor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "b",
                              "text": "Numbers multiplied."
                    },
                    {
                              "id": "c",
                              "text": "Part of answer."
                    },
                    {
                              "id": "d",
                              "text": "Check reasonableness."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Factor\" means Numbers multiplied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Factor\" means Numbers multiplied.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Factor** = Numbers multiplied.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

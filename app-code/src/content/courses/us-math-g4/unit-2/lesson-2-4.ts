import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m4-u2-lesson-2-4",
  code: "2-4",
  title: "Multi-Step Problems",
  goal: "I CAN solve problems needing both addition and subtraction.",
  standards: ["4.NBT.B.4"],
  vocabulary: [
    { term: "Multi-step", definition: "More than one operation." },
    { term: "Add", definition: "Combine numbers." },
    { term: "Subtract", definition: "Take away." },
    { term: "Total", definition: "Sum of all." },
    { term: "Remaining", definition: "What's left." },
    { term: "Difference", definition: "How much more/less." },
    { term: "Solve", definition: "Find the answer." },
    { term: "Check", definition: "Verify answer." },
  ],
  concepts: [
    {
      id: "m4-u2-add-subtract-multi-step",
      title: "Multi-step problems",
      skill: "Solve problems that need both addition and subtraction.",
      lesson: {
        sections: [
          {
            heading: "Multiple steps",
            body: "Some problems need you to **add first, then subtract**, or find a **difference** then a **total**. Plan each step.",
          },
          {
            heading: "Example",
            body: "'A store has 5,678 items. It receives 2,345 more, then sells 1,567. How many left?' → $5,678 + 2,345 = 8,023$; $8,023 - 1,567 = 6,456$.",
          },
        ],
        keyFormulas: [
          { name: "Multi-step", statement: "Step 1: add; Step 2: subtract (or reverse)." },
        ],
        workedExample: {
          problem: "A school has 4,567 students. 1,234 graduate and 567 new students enroll. How many students?",
          solution: "$4,567 - 1,234 = 3,333$; $3,333 + 567 = 3,900$.",
        },
      },
      questions: [
        {
          id: "m4-u2-add-subtract-multi-step-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A store has 5,678 items. It receives 2,345 more, then sells 1,567. How many left?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6,456"
                    },
                    {
                              "id": "b",
                              "text": "6,356"
                    },
                    {
                              "id": "c",
                              "text": "7,456"
                    },
                    {
                              "id": "d",
                              "text": "5,456"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5,678+2,345=8,023; 8,023-1,567=6,456."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5,678+2,345=8,023; 8,023-1,567=6,456.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6,456",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A town has 12,345 people. 4,567 move away and 3,210 move in. How many now?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10,988"
                    },
                    {
                              "id": "b",
                              "text": "11,088"
                    },
                    {
                              "id": "c",
                              "text": "9,988"
                    },
                    {
                              "id": "d",
                              "text": "10,888"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12,345-4,567=7,778; +3,210=10,988."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12,345-4,567=7,778; +3,210=10,988.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "10,988",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: A farmer has 6,789 apples and 4,321 oranges. He sells 3,456 apples. How many fruits left?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multi-step",
                              "statement": "11,110 - 3,456 = 7,654."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds total first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subtracts correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**6,789+4,321=11,110; 11,110-3,456=7,654**",
          "commonErrors": [
                    "Wrong total.",
                    "Wrong remaining."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a multi-step problem, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do everything at once"
                    },
                    {
                              "id": "b",
                              "text": "break it into steps"
                    },
                    {
                              "id": "c",
                              "text": "guess"
                    },
                    {
                              "id": "d",
                              "text": "only add"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Break into steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Break into steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "break it into steps",
          "commonErrors": [
                    "Tries to do all at once."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A library has 7,654 books. It buys 3,210 new books and lends out 4,567. How many books does it have?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multi-step",
                              "statement": "7,654+3,210-4,567 = 6,297."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds new books.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subtracts lent books.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**7,654+3,210=10,864; 10,864-4,567=6,297**",
          "commonErrors": [
                    "Wrong answer.",
                    "Only one step."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multi-step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine numbers."
                    },
                    {
                              "id": "b",
                              "text": "More than one operation."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Sum of all."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multi-step\" means More than one operation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multi-step\" means More than one operation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multi-step** = More than one operation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q7",
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
                              "text": "Sum of all."
                    },
                    {
                              "id": "c",
                              "text": "What's left."
                    },
                    {
                              "id": "d",
                              "text": "Combine numbers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-multi-step-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of all."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "What's left."
                    },
                    {
                              "id": "d",
                              "text": "How much more/less."
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

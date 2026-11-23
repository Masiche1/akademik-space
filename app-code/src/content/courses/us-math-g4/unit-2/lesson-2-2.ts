import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m4-u2-lesson-2-2",
  code: "2-2",
  title: "Addition and Subtraction Word Problems",
  goal: "I CAN solve multi-step word problems with addition and subtraction.",
  standards: ["4.NBT.B.4"],
  vocabulary: [
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Multi-step", definition: "More than one operation." },
    { term: "Total", definition: "Sum of all." },
    { term: "Difference", definition: "How much more/less." },
    { term: "Remaining", definition: "What's left." },
    { term: "Change", definition: "Money back." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m4-u2-add-subtract-problems",
      title: "Addition and subtraction word problems",
      skill: "Solve multi-step word problems using addition and subtraction.",
      lesson: {
        sections: [
          {
            heading: "Read carefully",
            body: "Word problems may need **multiple steps**: add first, then subtract, or find a **difference** then a **total**.",
          },
          {
            heading: "Estimate first",
            body: "**Estimate** your answer before solving to check if it's reasonable.",
          },
        ],
        keyFormulas: [
          { name: "Word problems", statement: "Read -> identify operations -> solve -> check." },
        ],
        workedExample: {
          problem: "A school has 4,567 students. 2,345 are girls and the rest are boys. How many boys?",
          solution: "4,567 - 2,345 = 2,222 boys.",
        },
      },
      questions: [
        {
          id: "m4-u2-add-subtract-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A store has 5,678 items. It sells 2,345. How many left?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3,333"
                    },
                    {
                              "id": "b",
                              "text": "3,233"
                    },
                    {
                              "id": "c",
                              "text": "8,023"
                    },
                    {
                              "id": "d",
                              "text": "3,443"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5,678 - 2,345 = 3,333."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5,678 - 2,345 = 3,333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3,333",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-problems-q2",
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
                              "statement": "12,345 - 4,567 = 7,778; + 3,210 = 10,988."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12,345 - 4,567 = 7,778; + 3,210 = 10,988.",
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
          id: "m4-u2-add-subtract-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve a two-step problem: find the total, then find how many are left.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word problems",
                              "statement": "Total -> remaining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds total.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds remaining.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Total: 4,567+3,289=7,856; remaining: 7,856-2,156=5,700'**",
          "commonErrors": [
                    "Wrong answers.",
                    "Only one step."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best estimate for 4,567 - 2,345?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2,000"
                    },
                    {
                              "id": "b",
                              "text": "3,000"
                    },
                    {
                              "id": "c",
                              "text": "4,000"
                    },
                    {
                              "id": "d",
                              "text": "1,000"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5,000 - 2,000 = 3,000... actually 4,567-2,345 ≈ 2,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5,000 - 2,000 = 3,000... actually 4,567-2,345 ≈ 2,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2,000",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A farmer has 6,789 apples and 4,321 oranges. He sells 3,456 apples. How many fruits does he have left?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word problems",
                              "statement": "Total -> remaining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds total fruits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds remaining.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**6,789 + 4,321 = 11,110; 11,110 - 3,456 = 7,654**",
          "commonErrors": [
                    "Wrong answers.",
                    "Only one step."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More than one operation."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Sum of all."
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
          id: "m4-u2-add-subtract-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multi-step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of all."
                    },
                    {
                              "id": "b",
                              "text": "How much more/less."
                    },
                    {
                              "id": "c",
                              "text": "What's left."
                    },
                    {
                              "id": "d",
                              "text": "More than one operation."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m4-u2-add-subtract-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How much more/less."
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
                              "text": "Money back."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Total\" means Sum of all."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Total\" means Sum of all.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Total** = Sum of all.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

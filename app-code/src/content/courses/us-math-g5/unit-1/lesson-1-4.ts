import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m5-u1-lesson-1-4",
  code: "1-4",
  title: "Operations Word Problems",
  goal: "I CAN solve multi-step word problems with all operations.",
  standards: ["5.NBT.B.5", "5.NBT.B.6"],
  vocabulary: [
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Multi-step", definition: "Multiple operations." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Solve", definition: "Find answer." },
    { term: "Check", definition: "Verify." },
    { term: "Total", definition: "Sum." },
    { term: "Difference", definition: "How much." },
    { term: "Product", definition: "Multiplication answer." },
  ],
  concepts: [
    {
      id: "m5-u1-operations-problems",
      title: "Operations word problems",
      skill: "Solve multi-step word problems using all four operations.",
      lesson: {
        sections: [
          {
            heading: "Plan the steps",
            body: "Multi-step problems need **planning**: identify operations, estimate, solve, check. May need add + multiply, or subtract + divide.",
          },
          {
            heading: "Example",
            body: "'A store sells 45 boxes with 23 items each, then returns 156 items. How many left?' → $45 \\times 23 = 1,035$; $1,035 - 156 = 879$.",
          },
        ],
        keyFormulas: [
          { name: "Problems", statement: "Identify ops -> estimate -> solve -> check." },
        ],
        workedExample: {
          problem: "A theater has 45 rows with 23 seats. 156 seats are taken. How many empty?",
          solution: "$45 \\times 23 = 1,035$ seats; $1,035 - 156 = 879$ empty.",
        },
      },
      questions: [
        {
          id: "m5-u1-operations-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A store has 45 boxes with 23 items each. It sells 156 items. How many left?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "879"
                    },
                    {
                              "id": "b",
                              "text": "789"
                    },
                    {
                              "id": "c",
                              "text": "979"
                    },
                    {
                              "id": "d",
                              "text": "869"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45x23=1035; 1035-156=879."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45x23=1035; 1035-156=879.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "879",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "m5-u1-operations-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A school has 12 classes with 34 students. 45 students are absent. How many present?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "363"
                    },
                    {
                              "id": "b",
                              "text": "373"
                    },
                    {
                              "id": "c",
                              "text": "353"
                    },
                    {
                              "id": "d",
                              "text": "383"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12x34=408; 408-45=363."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12x34=408; 408-45=363.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "363",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m5-u1-operations-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: A farm has 67 fields with 45 rows of 12 plants each. How many plants total? Then 234 are harvested. How many left?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problems",
                              "statement": "36,180 - 234 = 35,946."
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
          "finalAnswer": "**67 x 45 x 12 = 36,180; 36,180 - 234 = 35,946**",
          "commonErrors": [
                    "Wrong answers.",
                    "Only one step."
          ]
},
        },
        {
          id: "m5-u1-operations-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In multi-step problems, you should first...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add everything"
                    },
                    {
                              "id": "b",
                              "text": "identify the operations needed"
                    },
                    {
                              "id": "c",
                              "text": "guess"
                    },
                    {
                              "id": "d",
                              "text": "multiply only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Identify operations first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify operations first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "identify the operations needed",
          "commonErrors": [
                    "No planning."
          ]
},
        },
        {
          id: "m5-u1-operations-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A library has 234 shelves with 45 books each. It lends out 1,234 books. How many books remain?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Problems",
                              "statement": "10,530 - 1,234 = 9,296."
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
          "finalAnswer": "**234 x 45 = 10,530; 10,530 - 1,234 = 9,296**",
          "commonErrors": [
                    "Wrong answer.",
                    "Only one step."
          ]
},
        },
        {
          id: "m5-u1-operations-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Multiple operations."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "d",
                              "text": "Find answer."
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
          id: "m5-u1-operations-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multi-step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "b",
                              "text": "Find answer."
                    },
                    {
                              "id": "c",
                              "text": "Verify."
                    },
                    {
                              "id": "d",
                              "text": "Multiple operations."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multi-step\" means Multiple operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multi-step\" means Multiple operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multi-step** = Multiple operations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-operations-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Estimate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find answer."
                    },
                    {
                              "id": "b",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "c",
                              "text": "Verify."
                    },
                    {
                              "id": "d",
                              "text": "Sum."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Estimate\" means Check reasonableness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Estimate\" means Check reasonableness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Estimate** = Check reasonableness.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

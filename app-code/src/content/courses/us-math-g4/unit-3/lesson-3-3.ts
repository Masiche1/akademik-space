import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m4-u3-lesson-3-3",
  code: "3-3",
  title: "Multiplication Word Problems",
  goal: "I CAN solve word problems involving multiplication.",
  standards: ["4.NBT.B.5"],
  vocabulary: [
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Total", definition: "Sum of all." },
    { term: "Groups", definition: "Sets of items." },
    { term: "Each", definition: "Per group." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m4-u3-multiply-problems",
      title: "Multiplication word problems",
      skill: "Solve word problems involving multiplication.",
      lesson: {
        sections: [
          {
            heading: "When to multiply",
            body: "Multiply when you have **equal groups** (4 boxes of 6 = 24) or **arrays** (3 rows of 5 = 15).",
          },
          {
            heading: "Estimate first",
            body: "**Estimate** before solving to check reasonableness.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "Groups x each = total; rows x columns = total." },
        ],
        workedExample: {
          problem: "A store has 24 boxes with 15 pencils each. How many pencils?",
          solution: "$24 \\times 15 = 360$ pencils.",
        },
      },
      questions: [
        {
          id: "m4-u3-multiply-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A store has 12 boxes with 15 pencils each. How many pencils?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "180"
                    },
                    {
                              "id": "b",
                              "text": "160"
                    },
                    {
                              "id": "c",
                              "text": "200"
                    },
                    {
                              "id": "d",
                              "text": "150"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12 x 15 = 180."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 x 15 = 180.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "180",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m4-u3-multiply-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A theater has 15 rows with 20 seats each. How many seats?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "300"
                    },
                    {
                              "id": "b",
                              "text": "350"
                    },
                    {
                              "id": "c",
                              "text": "250"
                    },
                    {
                              "id": "d",
                              "text": "400"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15 x 20 = 300."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15 x 20 = 300.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "300",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m4-u3-multiply-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve a multiplication word problem with estimation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply problems",
                              "statement": "Estimate + solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Estimates answer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., '24 x 15 ≈ 25 x 15 = 375; actual: 24 x 15 = 360'**",
          "commonErrors": [
                    "No estimate.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m4-u3-multiply-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best estimate for $23 \\times 45$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1,000"
                    },
                    {
                              "id": "b",
                              "text": "1,035"
                    },
                    {
                              "id": "c",
                              "text": "1,100"
                    },
                    {
                              "id": "d",
                              "text": "900"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "23 x 45 = 1,035."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "23 x 45 = 1,035.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1,035",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m4-u3-multiply-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A farmer has 15 fields with 24 rows of plants each and 12 plants per row. How many plants?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply problems",
                              "statement": "15 x 24 x 12 = 4,320."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gets correct total.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**15 x 24 x 12 = 4,320 plants**",
          "commonErrors": [
                    "Wrong total.",
                    "Missing steps."
          ]
},
        },
        {
          id: "m4-u3-multiply-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
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
                              "text": "Sets of items."
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
          id: "m4-u3-multiply-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of all."
                    },
                    {
                              "id": "b",
                              "text": "Sets of items."
                    },
                    {
                              "id": "c",
                              "text": "Per group."
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
          id: "m4-u3-multiply-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sets of items."
                    },
                    {
                              "id": "b",
                              "text": "Sum of all."
                    },
                    {
                              "id": "c",
                              "text": "Per group."
                    },
                    {
                              "id": "d",
                              "text": "Rows and columns."
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

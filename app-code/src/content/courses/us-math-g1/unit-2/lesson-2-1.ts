import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m1-u2-lesson-2-1",
  code: "2-1",
  title: "Adding within 20",
  goal: "I CAN add two numbers within 20.",
  standards: ["1.OA.A.1", "1.OA.C.5", "1.OA.C.6"],
  vocabulary: [
    { term: "Add", definition: "Put together to find total." },
    { term: "Sum", definition: "The answer to addition." },
    { term: "Plus", definition: "The + sign." },
    { term: "Total", definition: "The whole amount." },
    { term: "Count on", definition: "Start at first number, count up." },
    { term: "Equation", definition: "A math sentence with =." },
    { term: "Addend", definition: "A number being added." },
    { term: "Commutative", definition: "Order does not matter: 3+4=4+3." },
  ],
  concepts: [
    {
      id: "m1-u2-add-within-20",
      title: "Adding within 20",
      skill: "Add two numbers within 20 using counting on and other strategies.",
      lesson: {
        sections: [
          {
            heading: "What is addition?",
            body: "**Addition** puts two numbers together to find the **total** or **sum**. $3 + 4 = 7$ means 3 and 4 make 7.",
          },
          {
            heading: "Count on strategy",
            body: "To add, start at the first number and **count on** the second: for $8 + 3$, start at 8 and count 9, 10, 11 — the answer is 11.",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "a + b = sum (total)" },
          { name: "Count on", statement: "Start at a, count on b more." },
        ],
        workedExample: {
          problem: "Solve $9 + 4$ using count on.",
          solution: "Start at 9, count on 4: 10, 11, 12, 13 — **$9 + 4 = 13$**.",
        },
      },
      questions: [
        {
          id: "m1-u2-add-within-20-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $7 + 5$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 + 5 = 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 + 5 = 12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(12)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 + 6$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 + 6 = 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 6 = 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(14)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $9 + 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 16
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 + 7 = 16."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 + 7 = 16.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(16)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 6: 7, ..., 10. 6 + 4 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 6: 7, ..., 10. 6 + 4 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "11"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 6 + 4 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 6 + 4 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 2?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 11
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 9: 10, ..., 11. 9 + 2 = 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 9: 10, ..., 11. 9 + 2 = 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$11$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 2?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11"
                    },
                    {
                              "id": "b",
                              "text": "12"
                    },
                    {
                              "id": "c",
                              "text": "9"
                    },
                    {
                              "id": "d",
                              "text": "14"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 9 + 2 = 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 9 + 2 = 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**11**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $13 + 6$ two ways: count on and by making ten.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Two strategies",
                              "statement": "Count on + make ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counts on correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Makes ten correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**19**",
          "commonErrors": [
                    "Only one way.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The answer to addition."
                    },
                    {
                              "id": "b",
                              "text": "Put together to find total."
                    },
                    {
                              "id": "c",
                              "text": "The + sign."
                    },
                    {
                              "id": "d",
                              "text": "The whole amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Put together to find total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Put together to find total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Put together to find total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sum\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The + sign."
                    },
                    {
                              "id": "b",
                              "text": "The whole amount."
                    },
                    {
                              "id": "c",
                              "text": "Start at first number, count up."
                    },
                    {
                              "id": "d",
                              "text": "The answer to addition."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sum\" means The answer to addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sum\" means The answer to addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sum** = The answer to addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The whole amount."
                    },
                    {
                              "id": "b",
                              "text": "The + sign."
                    },
                    {
                              "id": "c",
                              "text": "Start at first number, count up."
                    },
                    {
                              "id": "d",
                              "text": "A math sentence with =."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plus\" means The + sign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plus\" means The + sign.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plus** = The + sign.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-within-20-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start at first number, count up."
                    },
                    {
                              "id": "b",
                              "text": "A math sentence with =."
                    },
                    {
                              "id": "c",
                              "text": "A number being added."
                    },
                    {
                              "id": "d",
                              "text": "The whole amount."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Total\" means The whole amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Total\" means The whole amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Total** = The whole amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

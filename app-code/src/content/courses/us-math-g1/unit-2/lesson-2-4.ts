import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m1-u2-lesson-2-4",
  code: "2-4",
  title: "Addition Word Problems",
  goal: "I CAN solve addition word problems within 20.",
  standards: ["1.OA.A.1", "1.OA.C.5"],
  vocabulary: [
    { term: "Word problem", definition: "A story problem with numbers." },
    { term: "Total", definition: "The whole amount." },
    { term: "Join", definition: "Put together." },
    { term: "Add", definition: "Find total." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Situation", definition: "The story setup." },
    { term: "Question", definition: "What is asked." },
    { term: "Answer", definition: "The result." },
  ],
  concepts: [
    {
      id: "m1-u2-add-word-problems",
      title: "Addition word problems",
      skill: "Solve addition word problems within 20.",
      lesson: {
        sections: [
          {
            heading: "Read the problem",
            body: "A **word problem** tells a story with numbers. Read carefully: what is being **joined** (put together)? What is the **question** asking?",
          },
          {
            heading: "Write the equation",
            body: "Turn the story into an **equation**: 'Sam has 5 apples and gets 3 more. How many total?' becomes $5 + 3 = ?$",
          },
        ],
        keyFormulas: [
          { name: "Word problem", statement: "Read story -> identify numbers -> write equation -> solve." },
        ],
        workedExample: {
          problem: "Mia has 6 stickers. She gets 4 more. How many stickers does she have now?",
          solution: "$6 + 4 = 10$ — **Mia has 10 stickers**.",
        },
      },
      questions: [
        {
          id: "m1-u2-add-word-problems-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sam has 7 marbles. He gets 5 more. How many total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$7 + 5 = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7 + 5 = 12$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(12)**",
          "commonErrors": [
                    "Subtracts instead."
          ]
},
        },
        {
          id: "m1-u2-add-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A class has 9 boys and 6 girls. How many students?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Students",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$9 + 6 = 15$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$9 + 6 = 15$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(15)**",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m1-u2-add-word-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "'How many total' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract"
                    },
                    {
                              "id": "b",
                              "text": "add to find the whole"
                    },
                    {
                              "id": "c",
                              "text": "count by 10s"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Total = add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total = add.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**add**",
          "commonErrors": [
                    "Confuses with subtract."
          ]
},
        },
        {
          id: "m1-u2-add-word-problems-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write and solve: 'There are 8 red balls and 7 blue balls. How many balls total?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Word problem",
                              "statement": "8 + 7 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes equation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**$8 + 7 = 15$**",
          "commonErrors": [
                    "Wrong equation.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u2-add-word-problems-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The whole amount."
                    },
                    {
                              "id": "b",
                              "text": "A story problem with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Put together."
                    },
                    {
                              "id": "d",
                              "text": "Find total."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word problem\" means A story problem with numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means A story problem with numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = A story problem with numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put together."
                    },
                    {
                              "id": "b",
                              "text": "Find total."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
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
        {
          id: "m1-u2-add-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Join\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find total."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "The story setup."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Join\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Join\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Join** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "The story setup."
                    },
                    {
                              "id": "c",
                              "text": "What is asked."
                    },
                    {
                              "id": "d",
                              "text": "Find total."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Find total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Find total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Find total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

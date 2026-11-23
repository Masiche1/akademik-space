import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m2-u2-lesson-2-4",
  code: "2-4",
  title: "Addition Word Problems",
  goal: "I CAN solve addition word problems within 1000.",
  standards: ["2.OA.A.1", "2.NBT.B.7"],
  vocabulary: [
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Add", definition: "Combine amounts." },
    { term: "Total", definition: "Sum of all." },
    { term: "How many more", definition: "Difference." },
    { term: "In all", definition: "Total amount." },
    { term: "Together", definition: "Combined." },
    { term: "Left", definition: "Remaining." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m2-u2-add-word-problems",
      title: "Addition word problems",
      skill: "Solve word problems by identifying when to add.",
      lesson: {
        sections: [
          {
            heading: "When to add",
            body: "Add when the problem asks for **total**, **in all**, **together**, or **how many more** (combining amounts).",
          },
          {
            heading: "Write equation",
            body: "Translate the story into an **equation**: 345 + 232 = ? Then solve.",
          },
        ],
        keyFormulas: [
          { name: "Word problem", statement: "Identify add situation -> write equation -> solve." },
        ],
        workedExample: {
          problem: "A store has 234 pencils and receives 145 more. How many in all?",
          solution: "234 + 145 = 379 pencils in all.",
        },
      },
      questions: [
        {
          id: "m2-u2-add-word-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'How many in all' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract"
                    },
                    {
                              "id": "b",
                              "text": "add to find total"
                    },
                    {
                              "id": "c",
                              "text": "compare"
                    },
                    {
                              "id": "d",
                              "text": "multiply"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'In all' = add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'In all' = add.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "add",
          "commonErrors": [
                    "Picks wrong operation."
          ]
},
        },
        {
          id: "m2-u2-add-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 156 red marbles and 234 blue marbles. How many in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "78"
                    },
                    {
                              "id": "b",
                              "text": "390"
                    },
                    {
                              "id": "c",
                              "text": "312"
                    },
                    {
                              "id": "d",
                              "text": "4680"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "156 + 234 = 390."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "156 + 234 = 390.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "390",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m2-u2-add-word-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write an addition equation for: 'There are 345 students in grade 2 and 267 in grade 3. How many students total?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "word",
                              "name": "Identify add",
                              "statement": "Total = add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "345 + 267 = ?",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "612",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "345 + 267 = 612",
          "commonErrors": "Wrong operation or sum."
},
        },
        {
          id: "m2-u2-add-word-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A box has 456 stickers. You add 234 more. How many total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 690
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "456 + 234 = 690."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "690",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "690",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u2-add-word-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve: 'A farmer has 567 apples and picks 234 more. How many does he have now?' Show equation and answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "word",
                              "name": "Solve",
                              "statement": "Equation + answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "567 + 234 = ?",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "801 apples.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "567 + 234 = 801",
          "commonErrors": "Wrong sum."
},
        },
        {
          id: "m2-u2-add-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine amounts."
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
                              "text": "Difference."
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
          id: "m2-u2-add-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of all."
                    },
                    {
                              "id": "b",
                              "text": "Difference."
                    },
                    {
                              "id": "c",
                              "text": "Total amount."
                    },
                    {
                              "id": "d",
                              "text": "Combine amounts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine amounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine amounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine amounts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u2-add-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Difference."
                    },
                    {
                              "id": "b",
                              "text": "Sum of all."
                    },
                    {
                              "id": "c",
                              "text": "Total amount."
                    },
                    {
                              "id": "d",
                              "text": "Combined."
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

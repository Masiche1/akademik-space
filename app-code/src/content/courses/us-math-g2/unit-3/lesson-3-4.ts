import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m2-u3-lesson-3-4",
  code: "3-4",
  title: "Subtraction Word Problems",
  goal: "I CAN solve subtraction word problems within 1000.",
  standards: ["2.OA.A.1", "2.NBT.B.7"],
  vocabulary: [
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Subtract", definition: "Take away." },
    { term: "Left", definition: "Remaining." },
    { term: "How many more", definition: "Difference." },
    { term: "Fewer", definition: "Less than." },
    { term: "Remaining", definition: "What's left." },
    { term: "Take away", definition: "Remove." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m2-u3-sub-word-problems",
      title: "Subtraction word problems",
      skill: "Solve word problems by identifying when to subtract.",
      lesson: {
        sections: [
          {
            heading: "When to subtract",
            body: "Subtract when the problem asks for **left**, **remaining**, **how many more** (difference), or **fewer** (taking away).",
          },
          {
            heading: "Write equation",
            body: "Translate the story into an **equation**: 500 - 234 = ? Then solve.",
          },
        ],
        keyFormulas: [
          { name: "Word problem", statement: "Identify subtract situation -> write equation -> solve." },
        ],
        workedExample: {
          problem: "There are 500 students. 234 leave. How many are left?",
          solution: "500 - 234 = 266 students left.",
        },
      },
      questions: [
        {
          id: "m2-u3-sub-word-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'How many are left' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "subtract to find remaining"
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
                              "statement": "'Left' = subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Left' = subtract.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "subtract",
          "commonErrors": [
                    "Picks wrong operation."
          ]
},
        },
        {
          id: "m2-u3-sub-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 500 cookies. 234 are eaten. How many left?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "734"
                    },
                    {
                              "id": "b",
                              "text": "266"
                    },
                    {
                              "id": "c",
                              "text": "234"
                    },
                    {
                              "id": "d",
                              "text": "5000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "500 - 234 = 266."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "500 - 234 = 266.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "266",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m2-u3-sub-word-problems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a subtraction equation for: 'A box has 567 crayons. 234 are used. How many are left?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "word",
                              "name": "Identify sub",
                              "statement": "Left = subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "567 - 234 = ?",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "333",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "567 - 234 = 333",
          "commonErrors": "Wrong operation or sum."
},
        },
        {
          id: "m2-u3-sub-word-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 800 marbles. 456 are taken. How many left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 344
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "800 - 456 = 344."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "344",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "344",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u3-sub-word-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve: 'A library has 900 books. 567 are checked out. How many are available?' Show equation and answer.",
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
                              "reasoning": "900 - 567 = ?",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "333 books available.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "900 - 567 = 333",
          "commonErrors": "Wrong difference."
},
        },
        {
          id: "m2-u3-sub-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Remaining."
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
          id: "m2-u3-sub-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remaining."
                    },
                    {
                              "id": "b",
                              "text": "Difference."
                    },
                    {
                              "id": "c",
                              "text": "Less than."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "m2-u3-sub-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Left\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Difference."
                    },
                    {
                              "id": "b",
                              "text": "Remaining."
                    },
                    {
                              "id": "c",
                              "text": "Less than."
                    },
                    {
                              "id": "d",
                              "text": "What's left."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Left\" means Remaining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Left\" means Remaining.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Left** = Remaining.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

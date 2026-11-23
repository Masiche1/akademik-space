import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m3-u2-lesson-2-1",
  code: "2-1",
  title: "Multiplication Basics",
  goal: "I CAN multiply within 100 using repeated addition and arrays.",
  standards: ["3.OA.A.1", "3.OA.A.2"],
  vocabulary: [
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Factor", definition: "Numbers being multiplied." },
    { term: "Product", definition: "Answer to multiplication." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Equal groups", definition: "Same number in each." },
    { term: "Skip count", definition: "Count by the factor." },
    { term: "Times", definition: "Multiplication symbol." },
    { term: "Commutative", definition: "Order doesn't matter." },
  ],
  concepts: [
    {
      id: "m3-u2-multiply-basics",
      title: "Multiplication basics",
      skill: "Multiply within 100 using repeated addition, arrays and skip counting.",
      lesson: {
        sections: [
          {
            heading: "What is multiplication?",
            body: "**Multiplication** is **repeated addition**: $4 \\times 3 = 4 + 4 + 4 = 12$. The **factors** are 4 and 3; the **product** is 12.",
          },
          {
            heading: "Arrays and skip counting",
            body: "An **array** shows rows and columns: 4 rows of 3 = $4 \\times 3 = 12$. **Skip counting** by 4s: 4, 8, 12 — same result.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "$a \\times b$ = repeated addition." },
          { name: "Array", statement: "Rows x columns = product." },
          { name: "Skip count", statement: "Count by factor = product." },
        ],
        workedExample: {
          problem: "Solve $6 \\times 7$ using repeated addition.",
          solution: "$6 \\times 7 = 7 + 7 + 7 + 7 + 7 + 7 = 42$.",
        },
      },
      questions: [
        {
          id: "m3-u2-multiply-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$6 \\times 7$ equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "36"
                    },
                    {
                              "id": "b",
                              "text": "42"
                    },
                    {
                              "id": "c",
                              "text": "48"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 x 7 = 42."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 x 7 = 42.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "42",
          "commonErrors": [
                    "Adds 6+7."
          ]
},
        },
        {
          id: "m3-u2-multiply-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An array with 4 rows of 5 shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 + 5"
                    },
                    {
                              "id": "b",
                              "text": "4 x 5 = 20"
                    },
                    {
                              "id": "c",
                              "text": "5 x 4 = 9"
                    },
                    {
                              "id": "d",
                              "text": "45"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 rows x 5 columns = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 rows x 5 columns = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 x 5 = 20",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m3-u2-multiply-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 \\times 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 56
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "8 x 7 = 56."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "56",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "56",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-basics-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $9 \\times 6$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 54
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "9 x 6 = 54."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "54",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "54",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $7 \\times 8$ two ways: repeated addition and skip counting.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply",
                              "statement": "7 x 8 = 56."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves with repeated addition.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Solves with skip counting.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**56 (both ways)**",
          "commonErrors": [
                    "Wrong answer.",
                    "Only one method."
          ]
},
        },
        {
          id: "m3-u2-multiply-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers being multiplied."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Answer to multiplication."
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
          id: "m3-u2-multiply-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Factor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to multiplication."
                    },
                    {
                              "id": "b",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "c",
                              "text": "Same number in each."
                    },
                    {
                              "id": "d",
                              "text": "Numbers being multiplied."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Factor\" means Numbers being multiplied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Factor\" means Numbers being multiplied.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Factor** = Numbers being multiplied.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u2-multiply-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "b",
                              "text": "Answer to multiplication."
                    },
                    {
                              "id": "c",
                              "text": "Same number in each."
                    },
                    {
                              "id": "d",
                              "text": "Count by the factor."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Product\" means Answer to multiplication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Product\" means Answer to multiplication.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Product** = Answer to multiplication.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

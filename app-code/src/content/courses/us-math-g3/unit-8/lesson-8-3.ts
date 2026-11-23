import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m3-u8-lesson-8-3",
  code: "8-3",
  title: "Perimeter",
  goal: "I CAN find the perimeter of rectangles.",
  standards: ["3.MD.D.8"],
  vocabulary: [
    { term: "Perimeter", definition: "Distance around shape." },
    { term: "Add", definition: "Sum of all sides." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Length", definition: "Long side." },
    { term: "Width", definition: "Short side." },
    { term: "Unit", definition: "Measurement unit." },
    { term: "Boundary", definition: "Outer edge." },
    { term: "Distance", definition: "How far around." },
  ],
  concepts: [
    {
      id: "m3-u8-perimeter",
      title: "Perimeter",
      skill: "Find the perimeter of rectangles by adding all sides.",
      lesson: {
        sections: [
          {
            heading: "What is perimeter?",
            body: "**Perimeter** is the distance **around** a shape — the sum of all its **sides**. For a rectangle, add length + width + length + width.",
          },
          {
            heading: "Formula",
            body: "Perimeter of rectangle = $2 \\times (length + width)$, or just add all four sides.",
          },
        ],
        keyFormulas: [
          { name: "Perimeter", statement: "Add all sides." },
          { name: "Rectangle", statement: "2 x (length + width)." },
        ],
        workedExample: {
          problem: "A rectangle has length 8 and width 5. What is its perimeter?",
          solution: "$8 + 5 + 8 + 5 = 26$ units (or $2 \\times (8+5) = 26$).",
        },
      },
      questions: [
        {
          id: "m3-u8-perimeter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perimeter is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the space inside"
                    },
                    {
                              "id": "b",
                              "text": "the distance around a shape"
                    },
                    {
                              "id": "c",
                              "text": "a side"
                    },
                    {
                              "id": "d",
                              "text": "an angle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Perimeter = around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perimeter = around.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "distance around",
          "commonErrors": [
                    "Confuses with area."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has length 8 and width 5. What is its perimeter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "13"
                    },
                    {
                              "id": "b",
                              "text": "26"
                    },
                    {
                              "id": "c",
                              "text": "40"
                    },
                    {
                              "id": "d",
                              "text": "85"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8+5+8+5 = 26."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8+5+8+5 = 26.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "26",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has length 10 and width 6. What is its perimeter? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 32
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "10+6+10+6 = 32."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "32",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "32",
          "commonErrors": [
                    "Wrong perimeter."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 7. What is its perimeter? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 28
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7+7+7+7 = 28."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "28",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "28",
          "commonErrors": [
                    "Wrong perimeter."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the perimeter of two rectangles: one 6x4 and one 9x3. Explain your method.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Perimeter",
                              "statement": "Add all sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds first perimeter.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds second perimeter.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**20 and 24 units**",
          "commonErrors": [
                    "Wrong perimeters.",
                    "Only one found."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Perimeter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of all sides."
                    },
                    {
                              "id": "b",
                              "text": "Distance around shape."
                    },
                    {
                              "id": "c",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "d",
                              "text": "Long side."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Perimeter\" means Distance around shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Perimeter\" means Distance around shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Perimeter** = Distance around shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "b",
                              "text": "Long side."
                    },
                    {
                              "id": "c",
                              "text": "Short side."
                    },
                    {
                              "id": "d",
                              "text": "Sum of all sides."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Sum of all sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Sum of all sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Sum of all sides.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-perimeter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Side\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Long side."
                    },
                    {
                              "id": "b",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "c",
                              "text": "Short side."
                    },
                    {
                              "id": "d",
                              "text": "Measurement unit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Side\" means Edge of shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Side\" means Edge of shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Side** = Edge of shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

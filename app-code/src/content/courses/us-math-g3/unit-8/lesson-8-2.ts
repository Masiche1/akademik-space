import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m3-u8-lesson-8-2",
  code: "8-2",
  title: "Area",
  goal: "I CAN find the area of rectangles by counting squares.",
  standards: ["3.MD.C.5", "3.MD.C.6", "3.MD.C.7"],
  vocabulary: [
    { term: "Area", definition: "Space inside shape." },
    { term: "Square unit", definition: "1x1 square." },
    { term: "Count", definition: "Number of squares." },
    { term: "Rows", definition: "Horizontal lines." },
    { term: "Columns", definition: "Vertical lines." },
    { term: "Multiply", definition: "Rows x columns." },
    { term: "Cover", definition: "Fill with squares." },
    { term: "Unit square", definition: "Standard measure." },
  ],
  concepts: [
    {
      id: "m3-u8-area",
      title: "Area",
      skill: "Find the area of rectangles by counting unit squares.",
      lesson: {
        sections: [
          {
            heading: "What is area?",
            body: "**Area** is the amount of space inside a shape, measured in **square units**. A rectangle's area = **rows x columns** of unit squares.",
          },
          {
            heading: "Counting squares",
            body: "A rectangle with 4 rows of 3 squares has area $4 \\times 3 = 12$ square units. You can also **count** all the squares.",
          },
        ],
        keyFormulas: [
          { name: "Area", statement: "rows x columns = square units." },
          { name: "Count", statement: "Count all unit squares." },
        ],
        workedExample: {
          problem: "A rectangle has 5 rows of 4 squares. What is its area?",
          solution: "$5 \\times 4 = 20$ square units.",
        },
      },
      questions: [
        {
          id: "m3-u8-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Area is measured in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "centimeters"
                    },
                    {
                              "id": "b",
                              "text": "square units"
                    },
                    {
                              "id": "c",
                              "text": "inches"
                    },
                    {
                              "id": "d",
                              "text": "meters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Area = square units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Area = square units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "square units",
          "commonErrors": [
                    "Confuses with length."
          ]
},
        },
        {
          id: "m3-u8-area-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle with 3 rows of 5 squares has area...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "53"
                    },
                    {
                              "id": "d",
                              "text": "35"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 x 5 = 15 square units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 x 5 = 15 square units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "15",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m3-u8-area-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has 6 rows of 4 squares. What is its area? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 24
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "6 x 4 = 24 square units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "24",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "24",
          "commonErrors": [
                    "Wrong area."
          ]
},
        },
        {
          id: "m3-u8-area-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has 5 rows of 5 squares. What is its area? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "5 x 5 = 25 square units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "25",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25",
          "commonErrors": [
                    "Wrong area."
          ]
},
        },
        {
          id: "m3-u8-area-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the area of two rectangles: one 4x3 and one 5x2. Explain how you found each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area",
                              "statement": "rows x columns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds first area.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds second area.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**12 and 10 square units**",
          "commonErrors": [
                    "Wrong areas.",
                    "Only one found."
          ]
},
        },
        {
          id: "m3-u8-area-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1x1 square."
                    },
                    {
                              "id": "b",
                              "text": "Space inside shape."
                    },
                    {
                              "id": "c",
                              "text": "Number of squares."
                    },
                    {
                              "id": "d",
                              "text": "Horizontal lines."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means Space inside shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-area-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number of squares."
                    },
                    {
                              "id": "b",
                              "text": "Horizontal lines."
                    },
                    {
                              "id": "c",
                              "text": "Vertical lines."
                    },
                    {
                              "id": "d",
                              "text": "1x1 square."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Square unit\" means 1x1 square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Square unit\" means 1x1 square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square unit** = 1x1 square.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-area-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Horizontal lines."
                    },
                    {
                              "id": "b",
                              "text": "Number of squares."
                    },
                    {
                              "id": "c",
                              "text": "Vertical lines."
                    },
                    {
                              "id": "d",
                              "text": "Rows x columns."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Number of squares."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Number of squares.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Number of squares.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

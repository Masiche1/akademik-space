import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m4-u6-lesson-6-3",
  code: "6-3",
  title: "Area",
  goal: "I CAN find the area of rectangles using multiplication.",
  standards: ["4.MD.A.3"],
  vocabulary: [
    { term: "Area", definition: "Space inside." },
    { term: "Rectangle", definition: "4-sided shape." },
    { term: "Length", definition: "How long." },
    { term: "Width", definition: "How wide." },
    { term: "Square unit", definition: "Unit of area." },
    { term: "Multiply", definition: "Length x width." },
    { term: "Formula", definition: "A = l x w." },
    { term: "Unit", definition: "Measurement unit." },
  ],
  concepts: [
    {
      id: "m4-u6-area",
      title: "Area",
      skill: "Find the area of rectangles using A = l x w.",
      lesson: {
        sections: [
          {
            heading: "What is area?",
            body: "**Area** is the amount of **space inside** a shape, measured in **square units** (cm², m²). For a rectangle: $A = l \\times w$.",
          },
          {
            heading: "Count squares",
            body: "You can also count the number of **unit squares** that fit inside the rectangle.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "A = l x w." },
          { name: "Square", statement: "A = s x s = s²." },
        ],
        workedExample: {
          problem: "A rectangle is 6 cm by 4 cm. What is its area?",
          solution: "$A = 6 \\times 4 = 24$ cm².",
        },
      },
      questions: [
        {
          id: "m4-u6-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a rectangle 6 cm by 4 cm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "24 cm²"
                    },
                    {
                              "id": "b",
                              "text": "20 cm²"
                    },
                    {
                              "id": "c",
                              "text": "10 cm²"
                    },
                    {
                              "id": "d",
                              "text": "48 cm²"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 x 4 = 24 cm²."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 x 4 = 24 cm².",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "24 cm²",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m4-u6-area-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has sides of 5 cm. What is its area?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "25 cm²"
                    },
                    {
                              "id": "b",
                              "text": "20 cm²"
                    },
                    {
                              "id": "c",
                              "text": "10 cm²"
                    },
                    {
                              "id": "d",
                              "text": "15 cm²"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 x 5 = 25 cm²."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 x 5 = 25 cm².",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25 cm²",
          "commonErrors": [
                    "Wrong area."
          ]
},
        },
        {
          id: "m4-u6-area-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a rectangle 7 m by 3 m AND a square with side 4 m.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area",
                              "statement": "21 m² and 16 m²."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds rectangle area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds square area.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Rectangle: 7 x 3 = 21 m²; Square: 4 x 4 = 16 m²**",
          "commonErrors": [
                    "Wrong areas.",
                    "Only one found."
          ]
},
        },
        {
          id: "m4-u6-area-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Area is measured in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "linear units"
                    },
                    {
                              "id": "b",
                              "text": "square units"
                    },
                    {
                              "id": "c",
                              "text": "cubic units"
                    },
                    {
                              "id": "d",
                              "text": "units"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Area = square units (cm², m²)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Area = square units (cm², m²).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "square units",
          "commonErrors": [
                    "Confuses with perimeter."
          ]
},
        },
        {
          id: "m4-u6-area-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the area of a rectangle 9 cm by 6 cm AND its perimeter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area",
                              "statement": "54 cm² and 30 cm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds perimeter.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Area: 9 x 6 = 54 cm²; Perimeter: 2(9+6) = 30 cm**",
          "commonErrors": [
                    "Wrong answers.",
                    "Only one found."
          ]
},
        },
        {
          id: "m4-u6-area-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "How long."
                    },
                    {
                              "id": "d",
                              "text": "How wide."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-area-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How long."
                    },
                    {
                              "id": "b",
                              "text": "How wide."
                    },
                    {
                              "id": "c",
                              "text": "Unit of area."
                    },
                    {
                              "id": "d",
                              "text": "4-sided shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means 4-sided shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means 4-sided shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = 4-sided shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-area-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How wide."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "Unit of area."
                    },
                    {
                              "id": "d",
                              "text": "Length x width."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

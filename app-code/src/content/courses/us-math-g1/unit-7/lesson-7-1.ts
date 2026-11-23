import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m1-u7-lesson-7-1",
  code: "7-1",
  title: "2D Shapes",
  goal: "I CAN identify and describe 2D shapes.",
  standards: ["1.G.A.1"],
  vocabulary: [
    { term: "2D shape", definition: "Flat shape with length and width." },
    { term: "Circle", definition: "Round shape, no corners." },
    { term: "Square", definition: "4 equal sides, 4 corners." },
    { term: "Rectangle", definition: "4 sides, opposite equal." },
    { term: "Triangle", definition: "3 sides, 3 corners." },
    { term: "Hexagon", definition: "6 sides." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Corner", definition: "Point where sides meet." },
  ],
  concepts: [
    {
      id: "m1-u7-2d-shapes",
      title: "2D shapes",
      skill: "Identify and describe 2D shapes by their sides and corners.",
      lesson: {
        sections: [
          {
            heading: "What are 2D shapes?",
            body: "**2D shapes** are flat shapes with **sides** and **corners**. A **circle** has no corners; a **square** has 4 equal sides; a **triangle** has 3 sides.",
          },
          {
            heading: "Describe shapes",
            body: "To describe a shape, count its **sides** and **corners**. A **rectangle** has 4 sides (opposite sides equal) and 4 corners.",
          },
        ],
        keyFormulas: [
          { name: "2D shapes", statement: "Circle (0 corners), Triangle (3), Square/Rectangle (4), Hexagon (6)." },
        ],
        workedExample: {
          problem: "How many sides and corners does a triangle have?",
          solution: "**3 sides, 3 corners**.",
        },
      },
      questions: [
        {
          id: "m1-u7-2d-shapes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sides",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangle = 3 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangle = 3 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(3)**",
          "commonErrors": [
                    "Counts corners wrong."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many corners does a square have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Corners",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Square = 4 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square = 4 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(4)**",
          "commonErrors": [
                    "Counts sides wrong."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which shape has no corners?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square"
                    },
                    {
                              "id": "b",
                              "text": "circle"
                    },
                    {
                              "id": "c",
                              "text": "triangle"
                    },
                    {
                              "id": "d",
                              "text": "rectangle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Circle has no corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circle has no corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**circle**",
          "commonErrors": [
                    "Picks shape with corners."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a hexagon. How many sides and corners does it have?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hexagon",
                              "statement": "6 sides, 6 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counts sides + corners.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**6 sides, 6 corners**",
          "commonErrors": [
                    "Wrong counts.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round shape, no corners."
                    },
                    {
                              "id": "b",
                              "text": "Flat shape with length and width."
                    },
                    {
                              "id": "c",
                              "text": "4 equal sides, 4 corners."
                    },
                    {
                              "id": "d",
                              "text": "4 sides, opposite equal."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"2D shape\" means Flat shape with length and width."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"2D shape\" means Flat shape with length and width.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D shape** = Flat shape with length and width.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Circle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 equal sides, 4 corners."
                    },
                    {
                              "id": "b",
                              "text": "4 sides, opposite equal."
                    },
                    {
                              "id": "c",
                              "text": "3 sides, 3 corners."
                    },
                    {
                              "id": "d",
                              "text": "Round shape, no corners."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Circle\" means Round shape, no corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Circle\" means Round shape, no corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle** = Round shape, no corners.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 sides, opposite equal."
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides, 4 corners."
                    },
                    {
                              "id": "c",
                              "text": "3 sides, 3 corners."
                    },
                    {
                              "id": "d",
                              "text": "6 sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Square\" means 4 equal sides, 4 corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Square\" means 4 equal sides, 4 corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square** = 4 equal sides, 4 corners.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-2d-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 sides, 3 corners."
                    },
                    {
                              "id": "b",
                              "text": "6 sides."
                    },
                    {
                              "id": "c",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "d",
                              "text": "4 sides, opposite equal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means 4 sides, opposite equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means 4 sides, opposite equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = 4 sides, opposite equal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

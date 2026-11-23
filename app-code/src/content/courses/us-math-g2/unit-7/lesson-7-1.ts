import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m2-u7-lesson-7-1",
  code: "7-1",
  title: "2D Shapes",
  goal: "I CAN identify and describe 2D shapes.",
  standards: ["2.G.A.1"],
  vocabulary: [
    { term: "Shape", definition: "Closed figure." },
    { term: "2D", definition: "Flat shape." },
    { term: "Circle", definition: "Round shape." },
    { term: "Square", definition: "4 equal sides." },
    { term: "Rectangle", definition: "4 sides, opposite equal." },
    { term: "Triangle", definition: "3 sides." },
    { term: "Hexagon", definition: "6 sides." },
    { term: "Vertex", definition: "Corner point." },
  ],
  concepts: [
    {
      id: "m2-u7-2d-shapes",
      title: "2D shapes",
      skill: "Identify and describe 2D shapes by sides and vertices.",
      lesson: {
        sections: [
          {
            heading: "Flat shapes",
            body: "**2D shapes** are flat. A **circle** has no sides; a **square** has 4 equal sides; a **rectangle** has 4 sides (opposite equal); a **triangle** has 3 sides; a **hexagon** has 6 sides.",
          },
          {
            heading: "Sides and vertices",
            body: "Count **sides** (edges) and **vertices** (corners). A triangle has 3 sides and 3 vertices; a square has 4 and 4.",
          },
        ],
        keyFormulas: [
          { name: "2D shapes", statement: "Circle=0 sides, Triangle=3, Square=4, Rectangle=4, Hexagon=6." },
        ],
        workedExample: {
          problem: "How many sides and vertices does a hexagon have?",
          solution: "**6 sides and 6 vertices.**",
        },
      },
      questions: [
        {
          id: "m2-u7-2d-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "b"
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
          "finalAnswer": "3",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "m2-u7-2d-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 sides"
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides"
                    },
                    {
                              "id": "c",
                              "text": "6 sides"
                    },
                    {
                              "id": "d",
                              "text": "0 sides"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Square = 4 equal sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square = 4 equal sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 equal sides",
          "commonErrors": [
                    "Picks wrong shape."
          ]
},
        },
        {
          id: "m2-u7-2d-shapes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the shape: 4 equal sides and 4 vertices. How many sides does a hexagon have?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "shape",
                              "name": "2D",
                              "statement": "Identify + count sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square (4 equal sides).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Hexagon: 6 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Square; hexagon has 6 sides",
          "commonErrors": "Wrong shape."
},
        },
        {
          id: "m2-u7-2d-shapes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many vertices does a rectangle have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Rectangle = 4 vertices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m2-u7-2d-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe three different 2D shapes. For each, name the shape and count sides and vertices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "shape",
                              "name": "2D shapes",
                              "statement": "3 shapes + sides + vertices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies 3 shapes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Counts sides + vertices for each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Triangle: 3 sides, 3 vertices; Square: 4, 4; Hexagon: 6, 6",
          "commonErrors": "Wrong counts."
},
        },
        {
          id: "m2-u7-2d-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat shape."
                    },
                    {
                              "id": "b",
                              "text": "Closed figure."
                    },
                    {
                              "id": "c",
                              "text": "Round shape."
                    },
                    {
                              "id": "d",
                              "text": "4 equal sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape\" means Closed figure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape\" means Closed figure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape** = Closed figure.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-2d-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round shape."
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "c",
                              "text": "4 sides, opposite equal."
                    },
                    {
                              "id": "d",
                              "text": "Flat shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"2D\" means Flat shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"2D\" means Flat shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D** = Flat shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-2d-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Circle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "b",
                              "text": "Round shape."
                    },
                    {
                              "id": "c",
                              "text": "4 sides, opposite equal."
                    },
                    {
                              "id": "d",
                              "text": "3 sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Circle\" means Round shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Circle\" means Round shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle** = Round shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

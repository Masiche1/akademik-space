import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m6-u4-lesson-4-4",
  code: "4-4",
  title: "Coordinate Geometry",
  goal: "I CAN use coordinates to solve geometry problems.",
  standards: ["6.G.A.3"],
  vocabulary: [
    { term: "Coordinate", definition: "Number pair." },
    { term: "Ordered pair", definition: "(x, y)." },
    { term: "Distance", definition: "How far." },
    { term: "Absolute value", definition: "Distance." },
    { term: "Plot", definition: "Mark point." },
    { term: "Polygon", definition: "Multi-sided." },
    { term: "Area", definition: "Space inside." },
    { term: "Vertex", definition: "Corner." },
  ],
  concepts: [
    {
      id: "m6-u4-coordinate-geometry",
      title: "Coordinate geometry",
      skill: "Use coordinates to find distances, areas and solve geometry problems.",
      lesson: {
        sections: [
          {
            heading: "Distance",
            body: "Distance between two points on same line: $|x_2 - x_1|$ or $|y_2 - y_1|$. On grid, count units.",
          },
          {
            heading: "Area",
            body: "For rectangles on grid: length x width. For other shapes, use **decomposition** or **surrounding rectangle**.",
          },
        ],
        keyFormulas: [
          { name: "Distance", statement: "|x2-x1| or |y2-y1|." },
          { name: "Area", statement: "Count squares or use formulas." },
        ],
        workedExample: {
          problem: "Find distance between (2,3) and (7,3).",
          solution: "Same y; distance = |7-2| = **5 units**.",
        },
      },
      questions: [
        {
          id: "m6-u4-coordinate-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Distance between (1,2) and (5,2) is...",
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
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "|5-1| = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "|5-1| = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong distance."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Distance between (3,1) and (3,6) is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "4"
                    },
                    {
                              "id": "d",
                              "text": "9"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "|6-1| = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "|6-1| = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Wrong distance."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the area of a rectangle with vertices (2,1), (6,1), (6,4), (2,4) on a coordinate grid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coordinate",
                              "statement": "Area = 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds area.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Length 4, width 3; Area = 4 x 3 = 12 sq units.**",
          "commonErrors": [
                    "Wrong area.",
                    "Missing work."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find distance on coordinate plane, you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add coordinates"
                    },
                    {
                              "id": "b",
                              "text": "subtract and take absolute value"
                    },
                    {
                              "id": "c",
                              "text": "multiply"
                    },
                    {
                              "id": "d",
                              "text": "guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtract + absolute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract + absolute.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "subtract and take absolute value",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plot a triangle on a coordinate grid and find its area using decomposition or surrounding rectangle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coordinate",
                              "statement": "Triangle + area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plots triangle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds area.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Vertices (0,0),(4,0),(0,3); Area = 1/2 x 4 x 3 = 6.'**",
          "commonErrors": [
                    "Cannot plot.",
                    "Cannot find area."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "(x, y)."
                    },
                    {
                              "id": "b",
                              "text": "Number pair."
                    },
                    {
                              "id": "c",
                              "text": "How far."
                    },
                    {
                              "id": "d",
                              "text": "Distance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coordinate\" means Number pair."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coordinate\" means Number pair.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coordinate** = Number pair.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ordered pair\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How far."
                    },
                    {
                              "id": "b",
                              "text": "Distance."
                    },
                    {
                              "id": "c",
                              "text": "Mark point."
                    },
                    {
                              "id": "d",
                              "text": "(x, y)."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ordered pair\" means (x, y)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ordered pair\" means (x, y).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ordered pair** = (x, y).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-coordinate-geometry-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Distance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance."
                    },
                    {
                              "id": "b",
                              "text": "How far."
                    },
                    {
                              "id": "c",
                              "text": "Mark point."
                    },
                    {
                              "id": "d",
                              "text": "Multi-sided."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Distance\" means How far."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Distance\" means How far.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Distance** = How far.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

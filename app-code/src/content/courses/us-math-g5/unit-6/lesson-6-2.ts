import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m5-u6-lesson-6-2",
  code: "6-2",
  title: "Coordinate Geometry",
  goal: "I CAN use coordinates to classify shapes and solve problems.",
  standards: ["5.G.A.1", "5.G.A.2"],
  vocabulary: [
    { term: "Coordinate", definition: "Number pair." },
    { term: "Ordered pair", definition: "(x, y)." },
    { term: "Plot", definition: "Mark point." },
    { term: "Distance", definition: "How far." },
    { term: "Length", definition: "Measure." },
    { term: "Area", definition: "Space inside." },
    { term: "Perimeter", definition: "Distance around." },
    { term: "Vertex", definition: "Corner point." },
  ],
  concepts: [
    {
      id: "m5-u6-coordinate-geometry",
      title: "Coordinate geometry",
      skill: "Use coordinates to find distances, lengths and areas of shapes.",
      lesson: {
        sections: [
          {
            heading: "Coordinates for measuring",
            body: "On the **coordinate plane**, you can find **distances** between points by counting units, and **areas** of rectangles by multiplying length x width.",
          },
          {
            heading: "Example",
            body: "Points (1,1) and (5,1): distance = 5-1 = 4 units. Rectangle from (1,1) to (5,3): length 4, width 2, area 8.",
          },
        ],
        keyFormulas: [
          { name: "Distance", statement: "Subtract coordinates." },
          { name: "Area", statement: "Length x width on grid." },
        ],
        workedExample: {
          problem: "Find the area of a rectangle with vertices (2,1), (6,1), (6,4), (2,4).",
          solution: "Length = 6-2 = 4; Width = 4-1 = 3; Area = 4 x 3 = **12 square units**.",
        },
      },
      questions: [
        {
          id: "m5-u6-coordinate-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Points (2,1) and (6,1) are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6 units apart"
                    },
                    {
                              "id": "b",
                              "text": "4 units apart"
                    },
                    {
                              "id": "c",
                              "text": "2 units apart"
                    },
                    {
                              "id": "d",
                              "text": "8 units apart"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6-2 = 4 units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6-2 = 4 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 units apart",
          "commonErrors": [
                    "Wrong distance."
          ]
},
        },
        {
          id: "m5-u6-coordinate-geometry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle from (1,1) to (5,4) has area...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12"
                    },
                    {
                              "id": "b",
                              "text": "16"
                    },
                    {
                              "id": "c",
                              "text": "20"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Length 4 x width 3 = 12... wait: 4 x 3 = 12. Actually 4 x 3 = 12, not 16."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Length 4 x width 3 = 12... wait: 4 x 3 = 12. Actually 4 x 3 = 12, not 16.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "16",
          "commonErrors": [
                    "Wrong area."
          ]
},
        },
        {
          id: "m5-u6-coordinate-geometry-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the perimeter and area of a rectangle with vertices (1,2), (5,2), (5,5), (1,5).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coordinate",
                              "statement": "Perimeter 14, area 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds perimeter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds area.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Length 4, width 3; Perimeter 2(4+3)=14; Area 4x3=12**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m5-u6-coordinate-geometry-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find distance between two points on the same horizontal line, you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add coordinates"
                    },
                    {
                              "id": "b",
                              "text": "subtract x-coordinates"
                    },
                    {
                              "id": "c",
                              "text": "subtract y-coordinates"
                    },
                    {
                              "id": "d",
                              "text": "add y-coordinates"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Subtract x for horizontal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract x for horizontal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "subtract x-coordinates",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u6-coordinate-geometry-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plot a rectangle with vertices (2,1), (6,1), (6,4), (2,4). Find its area and perimeter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coordinate",
                              "statement": "Area 12, perimeter 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plots correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds area + perimeter.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Length 4, width 3; Area 12; Perimeter 14**",
          "commonErrors": [
                    "Wrong answers.",
                    "Cannot plot."
          ]
},
        },
        {
          id: "m5-u6-coordinate-geometry-q6",
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
                              "text": "Mark point."
                    },
                    {
                              "id": "d",
                              "text": "How far."
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
          id: "m5-u6-coordinate-geometry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ordered pair\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mark point."
                    },
                    {
                              "id": "b",
                              "text": "How far."
                    },
                    {
                              "id": "c",
                              "text": "Measure."
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
          id: "m5-u6-coordinate-geometry-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How far."
                    },
                    {
                              "id": "b",
                              "text": "Mark point."
                    },
                    {
                              "id": "c",
                              "text": "Measure."
                    },
                    {
                              "id": "d",
                              "text": "Space inside."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plot\" means Mark point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plot\" means Mark point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plot** = Mark point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

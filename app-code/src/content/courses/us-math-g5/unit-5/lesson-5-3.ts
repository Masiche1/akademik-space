import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m5-u5-lesson-5-3",
  code: "5-3",
  title: "Coordinate Plane",
  goal: "I CAN graph and interpret points on the coordinate plane.",
  standards: ["5.G.A.1", "5.G.A.2"],
  vocabulary: [
    { term: "Coordinate plane", definition: "Grid with x and y axes." },
    { term: "X-axis", definition: "Horizontal axis." },
    { term: "Y-axis", definition: "Vertical axis." },
    { term: "Origin", definition: "(0,0) point." },
    { term: "Ordered pair", definition: "(x, y) coordinates." },
    { term: "Point", definition: "Location on plane." },
    { term: "Quadrant", definition: "One of four sections." },
    { term: "Plot", definition: "Mark a point." },
  ],
  concepts: [
    {
      id: "m5-u5-coordinate-plane",
      title: "Coordinate plane",
      skill: "Graph and interpret ordered pairs on the coordinate plane.",
      lesson: {
        sections: [
          {
            heading: "The grid",
            body: "The **coordinate plane** has **x-axis** (horizontal) and **y-axis** (vertical) meeting at **origin** (0,0). Points are **ordered pairs** (x, y): x first, then y.",
          },
          {
            heading: "Plotting",
            body: "To **plot** (3, 2): start at origin, move 3 right, 2 up. The plane has four **quadrants**.",
          },
        ],
        keyFormulas: [
          { name: "Coordinate", statement: "(x, y): x = horizontal, y = vertical." },
        ],
        workedExample: {
          problem: "Plot the point (4, -2).",
          solution: "Start at origin, move 4 right, 2 down (negative y = down).",
        },
      },
      questions: [
        {
          id: "m5-u5-coordinate-plane-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the ordered pair (3, 5), 3 represents...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "y-coordinate"
                    },
                    {
                              "id": "b",
                              "text": "x-coordinate"
                    },
                    {
                              "id": "c",
                              "text": "origin"
                    },
                    {
                              "id": "d",
                              "text": "quadrant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "First number = x."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First number = x.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "x-coordinate",
          "commonErrors": [
                    "Wrong coordinate."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point (0, 0) is called...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the axis"
                    },
                    {
                              "id": "b",
                              "text": "the origin"
                    },
                    {
                              "id": "c",
                              "text": "a quadrant"
                    },
                    {
                              "id": "d",
                              "text": "the intercept"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Origin = (0,0)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Origin = (0,0).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the origin",
          "commonErrors": [
                    "Wrong name."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plot these points: (2, 3), (-1, 4), (3, -2), (0, 0). Describe where each is.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coordinate",
                              "statement": "Four points plotted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plots all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(2,3): right 2 up 3; (-1,4): left 1 up 4; (3,-2): right 3 down 2; (0,0): origin.**",
          "commonErrors": [
                    "Wrong positions.",
                    "Missing points."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Negative y-values are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "above the x-axis"
                    },
                    {
                              "id": "b",
                              "text": "below the x-axis"
                    },
                    {
                              "id": "c",
                              "text": "on the y-axis"
                    },
                    {
                              "id": "d",
                              "text": "at origin"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Negative y = below."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative y = below.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "below the x-axis",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Plot a triangle with vertices (1,1), (4,1), (2,4). What type of triangle is it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Coordinate",
                              "statement": "Triangle + type."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plots vertices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies triangle type.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Vertices plotted; isosceles triangle (two equal sides).**",
          "commonErrors": [
                    "Cannot plot.",
                    "Wrong type."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate plane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Horizontal axis."
                    },
                    {
                              "id": "b",
                              "text": "Grid with x and y axes."
                    },
                    {
                              "id": "c",
                              "text": "Vertical axis."
                    },
                    {
                              "id": "d",
                              "text": "(0,0) point."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coordinate plane\" means Grid with x and y axes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coordinate plane\" means Grid with x and y axes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coordinate plane** = Grid with x and y axes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"X-axis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vertical axis."
                    },
                    {
                              "id": "b",
                              "text": "(0,0) point."
                    },
                    {
                              "id": "c",
                              "text": "(x, y) coordinates."
                    },
                    {
                              "id": "d",
                              "text": "Horizontal axis."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"X-axis\" means Horizontal axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"X-axis\" means Horizontal axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**X-axis** = Horizontal axis.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-coordinate-plane-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Y-axis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "(0,0) point."
                    },
                    {
                              "id": "b",
                              "text": "Vertical axis."
                    },
                    {
                              "id": "c",
                              "text": "(x, y) coordinates."
                    },
                    {
                              "id": "d",
                              "text": "Location on plane."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Y-axis\" means Vertical axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Y-axis\" means Vertical axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Y-axis** = Vertical axis.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

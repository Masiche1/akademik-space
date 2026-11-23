import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m0-u7-lesson-7-3",
  code: "7-3",
  title: "Shape Attributes",
  goal: "I CAN describe shapes by their sides, corners, faces and curves.",
  standards: ["K.G.A.1", "K.G.A.2"],
  vocabulary: [
    { term: "Attribute", definition: "A feature that describes a shape." },
    { term: "Side", definition: "An edge of a 2D shape." },
    { term: "Corner", definition: "Where two sides meet (2D)." },
    { term: "Face", definition: "A flat surface (3D)." },
    { term: "Curve", definition: "A round, bent line." },
    { term: "Straight", definition: "A line that does not bend." },
    { term: "Closed", definition: "A shape with no gaps." },
  ],
  concepts: [
    {
      id: "m0-u7-shape-attributes",
      title: "Shape attributes",
      skill: "Describe shapes by counting sides, corners, faces and curves.",
      lesson: {
        sections: [
          {
            heading: "What makes a shape",
            body: "Shapes are defined by their **attributes**: number of **sides**, **corners**, **faces**, and whether they have **curves** or only **straight** lines.",
          },
          {
            heading: "Count to describe",
            body: "Count carefully: a triangle has 3 sides and 3 corners; a circle has 0 sides and 1 curve; a cube has 6 faces. These attributes identify the shape.",
          },
        ],
        keyFormulas: [
          { name: "Attributes", statement: "Sides, corners, faces, curves, straight lines — describe any shape." },
        ],
        workedExample: {
          problem: "Describe a rectangle's attributes.",
          solution: "A rectangle has **4 sides** (2 long, 2 short), **4 corners**, and all **straight** sides.",
        },
      },
      questions: [
        {
          id: "m0-u7-shape-attributes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'curve' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a straight line"
                    },
                    {
                              "id": "b",
                              "text": "a round, bent line"
                    },
                    {
                              "id": "c",
                              "text": "a corner"
                    },
                    {
                              "id": "d",
                              "text": "a face"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Curve = round, bent line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Curve = round, bent line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**round bent line**",
          "commonErrors": [
                    "Confuses with straight."
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape with only straight sides and no curves is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a circle"
                    },
                    {
                              "id": "b",
                              "text": "a polygon"
                    },
                    {
                              "id": "c",
                              "text": "a sphere"
                    },
                    {
                              "id": "d",
                              "text": "a curve shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Only straight sides = polygon (triangle, square, etc.)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only straight sides = polygon (triangle, square, etc.).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**polygon**",
          "commonErrors": [
                    "Picks circle."
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a shape of your choice using at least two attributes (sides, corners, curves, faces).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "Shape attributes",
                                                  "Use sides/corners/curves/faces."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Shape attributes",
                                                  "Use sides/corners/curves/faces."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes shape with 2+ attributes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Triangle: 3 straight sides, 3 corners.'**"
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many corners does a square have?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "b"
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
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Picks wrong count."
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a triangle and a circle. List two attributes that are different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shape attributes",
                              "statement": "Triangle=straight sides+corners; circle=curve+no corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Lists triangle attributes.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Lists circle attributes + difference.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Triangle: 3 straight sides, 3 corners. Circle: 0 sides, 1 curve, 0 corners.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Cannot compare.",
                    "Wrong attributes."
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Attribute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An edge of a 2D shape."
                    },
                    {
                              "id": "b",
                              "text": "A feature that describes a shape."
                    },
                    {
                              "id": "c",
                              "text": "Where two sides meet (2D)."
                    },
                    {
                              "id": "d",
                              "text": "A flat surface (3D)."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Attribute\" means A feature that describes a shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Attribute\" means A feature that describes a shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Attribute** = A feature that describes a shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Side\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where two sides meet (2D)."
                    },
                    {
                              "id": "b",
                              "text": "A flat surface (3D)."
                    },
                    {
                              "id": "c",
                              "text": "A round, bent line."
                    },
                    {
                              "id": "d",
                              "text": "An edge of a 2D shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Side\" means An edge of a 2D shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Side\" means An edge of a 2D shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Side** = An edge of a 2D shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-shape-attributes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Corner\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A flat surface (3D)."
                    },
                    {
                              "id": "b",
                              "text": "Where two sides meet (2D)."
                    },
                    {
                              "id": "c",
                              "text": "A round, bent line."
                    },
                    {
                              "id": "d",
                              "text": "A line that does not bend."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Corner\" means Where two sides meet (2D)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Corner\" means Where two sides meet (2D).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Corner** = Where two sides meet (2D).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

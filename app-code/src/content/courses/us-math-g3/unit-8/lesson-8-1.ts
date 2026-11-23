import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m3-u8-lesson-8-1",
  code: "8-1",
  title: "Shape Attributes",
  goal: "I CAN describe shapes by their attributes.",
  standards: ["3.G.A.1"],
  vocabulary: [
    { term: "Attribute", definition: "Characteristic of shape." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Vertex", definition: "Corner point." },
    { term: "Angle", definition: "Where sides meet." },
    { term: "Quadrilateral", definition: "4-sided shape." },
    { term: "Polygon", definition: "Closed shape with sides." },
    { term: "Right angle", definition: "90-degree angle." },
    { term: "Parallel", definition: "Lines that never meet." },
  ],
  concepts: [
    {
      id: "m3-u8-shape-attributes",
      title: "Shape attributes",
      skill: "Describe shapes by their sides, angles and vertices.",
      lesson: {
        sections: [
          {
            heading: "Shape attributes",
            body: "Shapes have **attributes**: number of **sides**, **vertices** (corners), and **angles**. A **quadrilateral** has 4 sides; a **polygon** is any closed shape with straight sides.",
          },
          {
            heading: "Types of quadrilaterals",
            body: "**Rectangles** have 4 right angles; **squares** have 4 equal sides and right angles; **rhombuses** have 4 equal sides; **trapezoids** have 1 pair of parallel sides.",
          },
        ],
        keyFormulas: [
          { name: "Quadrilateral", statement: "4 sides." },
          { name: "Polygon", statement: "Closed shape with straight sides." },
          { name: "Right angle", statement: "90 degrees." },
        ],
        workedExample: {
          problem: "How many sides and vertices does a rectangle have?",
          solution: "**4 sides** and **4 vertices** (corners).",
        },
      },
      questions: [
        {
          id: "m3-u8-shape-attributes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'quadrilateral' has how many sides?",
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
                              "statement": "Quad = 4 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quad = 4 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong sides."
          ]
},
        },
        {
          id: "m3-u8-shape-attributes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'vertex' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a side"
                    },
                    {
                              "id": "b",
                              "text": "a corner point"
                    },
                    {
                              "id": "c",
                              "text": "an angle"
                    },
                    {
                              "id": "d",
                              "text": "a line"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Vertex = corner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vertex = corner.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a corner",
          "commonErrors": [
                    "Confuses with side."
          ]
},
        },
        {
          id: "m3-u8-shape-attributes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many vertices does a pentagon have? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Pentagon = 5 vertices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m3-u8-shape-attributes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a hexagon have? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Hexagon = 6 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m3-u8-shape-attributes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe a rectangle: sides, vertices, angles. Compare it to a square.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shape attributes",
                              "statement": "Rectangle vs square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes rectangle.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Compares to square.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**Rectangle: 4 sides, 4 right angles; square: 4 equal sides**",
          "commonErrors": [
                    "Wrong attributes.",
                    "No comparison."
          ]
},
        },
        {
          id: "m3-u8-shape-attributes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Attribute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "b",
                              "text": "Characteristic of shape."
                    },
                    {
                              "id": "c",
                              "text": "Corner point."
                    },
                    {
                              "id": "d",
                              "text": "Where sides meet."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Attribute\" means Characteristic of shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Attribute\" means Characteristic of shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Attribute** = Characteristic of shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-shape-attributes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Side\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Corner point."
                    },
                    {
                              "id": "b",
                              "text": "Where sides meet."
                    },
                    {
                              "id": "c",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "d",
                              "text": "Edge of shape."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "m3-u8-shape-attributes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vertex\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where sides meet."
                    },
                    {
                              "id": "b",
                              "text": "Corner point."
                    },
                    {
                              "id": "c",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "d",
                              "text": "Closed shape with sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vertex\" means Corner point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vertex\" means Corner point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vertex** = Corner point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

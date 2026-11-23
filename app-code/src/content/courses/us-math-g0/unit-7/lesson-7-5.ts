import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "m0-u7-lesson-7-5",
  code: "7-5",
  title: "Geometry Review",
  goal: "I CAN identify, describe, build and compose shapes.",
  standards: ["K.G.A.1", "K.G.A.2", "K.G.B.4"],
  vocabulary: [
    { term: "2D shape", definition: "Flat shape." },
    { term: "3D shape", definition: "Solid shape." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Corner", definition: "Where sides meet." },
    { term: "Face", definition: "Flat surface of 3D." },
    { term: "Compose", definition: "Put shapes together." },
    { term: "Attribute", definition: "Shape feature." },
  ],
  concepts: [
    {
      id: "m0-u7-geometry-review",
      title: "Geometry review",
      skill: "Combine 2D/3D shapes, attributes, and composition.",
      lesson: {
        sections: [
          {
            heading: "All of geometry",
            body: "Geometry includes **2D shapes** (flat: circle, square, triangle), **3D shapes** (solid: cube, sphere), **attributes** (sides, corners, faces), and **composing** shapes into new ones.",
          },
          {
            heading: "Put it together",
            body: "Name a shape, describe its attributes, and build something with shapes.",
          },
        ],
        keyFormulas: [
          { name: "Geometry review", statement: "2D + 3D + attributes + compose = geometry skills." },
        ],
        workedExample: {
          problem: "Name a 3D shape, describe it, and build something with 2D shapes.",
          solution: "Cube (6 faces) + build a house (square + triangle).",
        },
      },
      questions: [
        {
          id: "m0-u7-geometry-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Geometry in kindergarten includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only circles"
                    },
                    {
                              "id": "b",
                              "text": "2D shapes, 3D shapes, attributes, composing"
                    },
                    {
                              "id": "c",
                              "text": "only triangles"
                    },
                    {
                              "id": "d",
                              "text": "only counting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All geometry skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All geometry skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all geometry**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m0-u7-geometry-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name a 3D shape, describe its faces, then build a picture using 2D shapes.",
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
                                                  "Geometry",
                                                  "3D shape + faces + 2D build."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Geometry",
                                                  "3D shape + faces + 2D build."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Cube has 6 faces; built house from square+triangle.'**"
          ]
},
        },
        {
          id: "m0-u7-geometry-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a 3D shape?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "triangle"
                    },
                    {
                              "id": "b",
                              "text": "cube"
                    },
                    {
                              "id": "c",
                              "text": "circle"
                    },
                    {
                              "id": "d",
                              "text": "square"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cube is 3D (solid)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cube is 3D (solid).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**cube**",
          "commonErrors": [
                    "Picks 2D shape."
          ]
},
        },
        {
          id: "m0-u7-geometry-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid shape."
                    },
                    {
                              "id": "b",
                              "text": "Flat shape."
                    },
                    {
                              "id": "c",
                              "text": "Edge of shape."
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
                              "statement": "\"2D shape\" means Flat shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"2D shape\" means Flat shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D shape** = Flat shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-geometry-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "b",
                              "text": "Where sides meet."
                    },
                    {
                              "id": "c",
                              "text": "Flat surface of 3D."
                    },
                    {
                              "id": "d",
                              "text": "Solid shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"3D shape\" means Solid shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D shape\" means Solid shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D shape** = Solid shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-geometry-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Side\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where sides meet."
                    },
                    {
                              "id": "b",
                              "text": "Edge of shape."
                    },
                    {
                              "id": "c",
                              "text": "Flat surface of 3D."
                    },
                    {
                              "id": "d",
                              "text": "Put shapes together."
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
        {
          id: "m0-u7-geometry-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Corner\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat surface of 3D."
                    },
                    {
                              "id": "b",
                              "text": "Put shapes together."
                    },
                    {
                              "id": "c",
                              "text": "Shape feature."
                    },
                    {
                              "id": "d",
                              "text": "Where sides meet."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Corner\" means Where sides meet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Corner\" means Where sides meet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Corner** = Where sides meet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-geometry-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Face\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put shapes together."
                    },
                    {
                              "id": "b",
                              "text": "Flat surface of 3D."
                    },
                    {
                              "id": "c",
                              "text": "Shape feature."
                    },
                    {
                              "id": "d",
                              "text": "Flat shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Face\" means Flat surface of 3D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Face\" means Flat surface of 3D.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Face** = Flat surface of 3D.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

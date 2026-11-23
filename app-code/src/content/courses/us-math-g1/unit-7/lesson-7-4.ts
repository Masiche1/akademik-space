import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "m1-u7-lesson-7-4",
  code: "7-4",
  title: "Shape Attributes",
  goal: "I CAN describe shapes by their attributes.",
  standards: ["1.G.A.1"],
  vocabulary: [
    { term: "Attribute", definition: "A feature of a shape." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Corner", definition: "Point where sides meet." },
    { term: "Face", definition: "Flat surface of 3D shape." },
    { term: "Edge", definition: "Where faces meet." },
    { term: "Vertex", definition: "Corner of 3D shape." },
    { term: "Round", definition: "Curved, no corners." },
    { term: "Straight", definition: "Flat edge." },
  ],
  concepts: [
    {
      id: "m1-u7-shape-attributes",
      title: "Shape attributes",
      skill: "Describe shapes by their attributes: sides, corners, faces, edges, vertices.",
      lesson: {
        sections: [
          {
            heading: "What are attributes?",
            body: "An **attribute** is a feature of a shape — its **sides**, **corners**, **faces**, **edges**, or **vertices**. These help us identify and describe shapes.",
          },
          {
            heading: "2D vs 3D attributes",
            body: "2D shapes have **sides** and **corners**; 3D shapes have **faces**, **edges**, and **vertices**. A cube has 6 faces, 12 edges, 8 vertices.",
          },
        ],
        keyFormulas: [
          { name: "Attributes", statement: "2D: sides + corners; 3D: faces + edges + vertices." },
        ],
        workedExample: {
          problem: "Describe a triangle's attributes.",
          solution: "**3 sides, 3 corners** (vertices).",
        },
      },
      questions: [
        {
          id: "m1-u7-shape-attributes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many vertices does a triangle have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Vertices",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Triangle = 3 vertices (corners)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Triangle = 3 vertices (corners).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(3)**",
          "commonErrors": [
                    "Counts sides wrong."
          ]
},
        },
        {
          id: "m1-u7-shape-attributes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many edges does a cube have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Edges",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cube = 12 edges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cube = 12 edges.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(12)**",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m1-u7-shape-attributes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which attribute does a 2D shape NOT have?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sides"
                    },
                    {
                              "id": "b",
                              "text": "corners"
                    },
                    {
                              "id": "c",
                              "text": "faces"
                    },
                    {
                              "id": "d",
                              "text": "vertices"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2D shapes have sides/corners, not faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2D shapes have sides/corners, not faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**faces**",
          "commonErrors": [
                    "Thinks 2D has faces."
          ]
},
        },
        {
          id: "m1-u7-shape-attributes-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe a cube's attributes: faces, edges, vertices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "3D attributes",
                              "statement": "6 faces, 12 edges, 8 vertices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counts faces.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counts edges + vertices.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**6 faces, 12 edges, 8 vertices**",
          "commonErrors": [
                    "Wrong counts.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "m1-u7-shape-attributes-q5",
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
                              "text": "A feature of a shape."
                    },
                    {
                              "id": "c",
                              "text": "Point where sides meet."
                    },
                    {
                              "id": "d",
                              "text": "Flat surface of 3D shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Attribute\" means A feature of a shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Attribute\" means A feature of a shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Attribute** = A feature of a shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-shape-attributes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Side\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Point where sides meet."
                    },
                    {
                              "id": "b",
                              "text": "Flat surface of 3D shape."
                    },
                    {
                              "id": "c",
                              "text": "Where faces meet."
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
          id: "m1-u7-shape-attributes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Corner\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat surface of 3D shape."
                    },
                    {
                              "id": "b",
                              "text": "Point where sides meet."
                    },
                    {
                              "id": "c",
                              "text": "Where faces meet."
                    },
                    {
                              "id": "d",
                              "text": "Corner of 3D shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Corner\" means Point where sides meet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Corner\" means Point where sides meet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Corner** = Point where sides meet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-shape-attributes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Face\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where faces meet."
                    },
                    {
                              "id": "b",
                              "text": "Corner of 3D shape."
                    },
                    {
                              "id": "c",
                              "text": "Curved, no corners."
                    },
                    {
                              "id": "d",
                              "text": "Flat surface of 3D shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Face\" means Flat surface of 3D shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Face\" means Flat surface of 3D shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Face** = Flat surface of 3D shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

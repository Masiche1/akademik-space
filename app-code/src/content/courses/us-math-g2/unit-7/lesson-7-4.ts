import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "m2-u7-lesson-7-4",
  code: "7-4",
  title: "Shape Attributes",
  goal: "I CAN describe shapes by their attributes.",
  standards: ["2.G.A.1"],
  vocabulary: [
    { term: "Attribute", definition: "Feature of a shape." },
    { term: "Side", definition: "Edge of shape." },
    { term: "Vertex", definition: "Corner point." },
    { term: "Angle", definition: "Corner where sides meet." },
    { term: "Parallel", definition: "Sides that never meet." },
    { term: "Perpendicular", definition: "Sides that meet at right angle." },
    { term: "Symmetry", definition: "Same on both sides." },
    { term: "Describe", definition: "Tell what it is like." },
  ],
  concepts: [
    {
      id: "m2-u7-shape-attributes",
      title: "Shape attributes",
      skill: "Describe shapes by their attributes: sides, vertices, angles, symmetry.",
      lesson: {
        sections: [
          {
            heading: "Features of shapes",
            body: "**Attributes** are features of a shape: number of **sides**, **vertices** (corners), **angles**, **parallel** sides, and **symmetry** (same on both sides).",
          },
          {
            heading: "Describe shapes",
            body: "Use attributes to describe: 'A square has 4 equal sides, 4 vertices, 4 right angles, and symmetry.'",
          },
        ],
        keyFormulas: [
          { name: "Attributes", statement: "Sides + vertices + angles + symmetry = shape description." },
        ],
        workedExample: {
          problem: "Describe a rectangle using attributes.",
          solution: "Rectangle: 4 sides (opposite equal), 4 vertices, 4 right angles, 2 lines of symmetry.",
        },
      },
      questions: [
        {
          id: "m2-u7-shape-attributes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Attributes' of a shape are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "its color"
                    },
                    {
                              "id": "b",
                              "text": "its features like sides and vertices"
                    },
                    {
                              "id": "c",
                              "text": "its size only"
                    },
                    {
                              "id": "d",
                              "text": "its name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Attributes = shape features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attributes = shape features.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "shape features",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u7-shape-attributes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Symmetry' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all sides equal"
                    },
                    {
                              "id": "b",
                              "text": "same on both sides of a line"
                    },
                    {
                              "id": "c",
                              "text": "has corners"
                    },
                    {
                              "id": "d",
                              "text": "is round"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Symmetry = mirror image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Symmetry = mirror image.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "mirror image",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u7-shape-attributes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a triangle using at least 3 attributes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "shape",
                              "name": "Attributes",
                              "statement": "3+ attributes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3+ attributes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., 3 sides, 3 vertices, 3 angles",
          "commonErrors": "Fewer than 3 attributes."
},
        },
        {
          id: "m2-u7-shape-attributes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many vertices does a pentagon have?",
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
          id: "m2-u7-shape-attributes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a square and a rectangle. Name two attributes they share and one that is different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "shape",
                              "name": "Compare",
                              "statement": "Shared + different attributes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names shared attributes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Names a difference.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Both have 4 sides and 4 vertices; square has all equal sides",
          "commonErrors": "Cannot compare."
},
        },
        {
          id: "m2-u7-shape-attributes-q6",
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
                              "text": "Feature of a shape."
                    },
                    {
                              "id": "c",
                              "text": "Corner point."
                    },
                    {
                              "id": "d",
                              "text": "Corner where sides meet."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Attribute\" means Feature of a shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Attribute\" means Feature of a shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Attribute** = Feature of a shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-shape-attributes-q7",
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
                              "text": "Corner where sides meet."
                    },
                    {
                              "id": "c",
                              "text": "Sides that never meet."
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
          id: "m2-u7-shape-attributes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vertex\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Corner where sides meet."
                    },
                    {
                              "id": "b",
                              "text": "Corner point."
                    },
                    {
                              "id": "c",
                              "text": "Sides that never meet."
                    },
                    {
                              "id": "d",
                              "text": "Sides that meet at right angle."
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

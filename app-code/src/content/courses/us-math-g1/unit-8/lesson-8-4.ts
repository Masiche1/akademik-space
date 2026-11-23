import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "m1-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Geometry",
  goal: "I CAN identify 2D/3D shapes and compose/decompose them.",
  standards: ["1.G.A.1", "1.G.A.2"],
  vocabulary: [
    { term: "2D", definition: "Flat." },
    { term: "3D", definition: "Solid." },
    { term: "Circle", definition: "Round." },
    { term: "Square", definition: "4 equal sides." },
    { term: "Triangle", definition: "3 sides." },
    { term: "Cube", definition: "6 faces." },
    { term: "Compose", definition: "Together." },
    { term: "Decompose", definition: "Apart." },
  ],
  concepts: [
    {
      id: "m1-u8-review-geometry",
      title: "Geometry review",
      skill: "Combine all geometry skills.",
      lesson: {
        sections: [
          {
            heading: "All geometry",
            body: "We identify **2D/3D** shapes, count parts, and **compose/decompose** shapes.",
          },
          {
            heading: "Put it together",
            body: "Use all geometry skills.",
          },
        ],
        keyFormulas: [
          { name: "Geometry", statement: "2D + 3D + compose + decompose = geometry." },
        ],
        workedExample: {
          problem: "Identify shapes, count parts, compose/decompose.",
          solution: "All geometry skills.",
        },
      },
      questions: [
        {
          id: "m1-u8-review-geometry-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "2D/3D, compose, decompose"
                    },
                    {
                              "id": "c",
                              "text": "only adding"
                    },
                    {
                              "id": "d",
                              "text": "only time"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a 3D shape, count its faces/edges/vertices, and describe how to compose or decompose it.",
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
                                                  "method",
                                                  "All geometry",
                                                  "Identify + count + compose/decompose."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "All geometry",
                                                  "Identify + count + compose/decompose."
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
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Cube: 6 faces, 12 edges, 8 vertices; two cubes -> bigger'**"
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many faces does a cylinder have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Faces",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cylinder = 2 circles + 1 curved = 3 faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cylinder = 2 circles + 1 curved = 3 faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(3)**",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid."
                    },
                    {
                              "id": "b",
                              "text": "Flat."
                    },
                    {
                              "id": "c",
                              "text": "Round."
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
                              "statement": "\"2D\" means Flat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"2D\" means Flat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D** = Flat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round."
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "c",
                              "text": "3 sides."
                    },
                    {
                              "id": "d",
                              "text": "Solid."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"3D\" means Solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D\" means Solid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D** = Solid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q6",
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
                              "text": "Round."
                    },
                    {
                              "id": "c",
                              "text": "3 sides."
                    },
                    {
                              "id": "d",
                              "text": "6 faces."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Circle\" means Round."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Circle\" means Round.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle** = Round.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 sides."
                    },
                    {
                              "id": "b",
                              "text": "6 faces."
                    },
                    {
                              "id": "c",
                              "text": "Together."
                    },
                    {
                              "id": "d",
                              "text": "4 equal sides."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Square\" means 4 equal sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Square\" means 4 equal sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square** = 4 equal sides.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-geometry-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Triangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6 faces."
                    },
                    {
                              "id": "b",
                              "text": "3 sides."
                    },
                    {
                              "id": "c",
                              "text": "Together."
                    },
                    {
                              "id": "d",
                              "text": "Apart."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Triangle\" means 3 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Triangle\" means 3 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Triangle** = 3 sides.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

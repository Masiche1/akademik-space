import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "m1-u7-lesson-7-5",
  code: "7-5",
  title: "Geometry Review",
  goal: "I CAN identify 2D/3D shapes and compose/decompose them.",
  standards: ["1.G.A.1", "1.G.A.2"],
  vocabulary: [
    { term: "2D", definition: "Flat shape." },
    { term: "3D", definition: "Solid shape." },
    { term: "Circle", definition: "Round, no corners." },
    { term: "Square", definition: "4 equal sides." },
    { term: "Triangle", definition: "3 sides." },
    { term: "Cube", definition: "6 faces." },
    { term: "Compose", definition: "Put together." },
    { term: "Decompose", definition: "Break apart." },
  ],
  concepts: [
    {
      id: "m1-u7-geometry-review",
      title: "Geometry review",
      skill: "Combine 2D/3D shape identification and composition.",
      lesson: {
        sections: [
          {
            heading: "All geometry skills",
            body: "We can identify **2D** and **3D** shapes, count their **sides/faces/corners**, and **compose** or **decompose** shapes.",
          },
          {
            heading: "Put it together",
            body: "Use all geometry skills to work with shapes.",
          },
        ],
        keyFormulas: [
          { name: "Geometry", statement: "2D + 3D + compose + decompose = shape skills." },
        ],
        workedExample: {
          problem: "Identify a shape, count its parts, and compose or decompose it.",
          solution: "Square: 4 sides, 4 corners; two triangles -> square.",
        },
      },
      questions: [
        {
          id: "m1-u7-geometry-review-q1",
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
                              "text": "2D/3D shapes, compose, decompose"
                    },
                    {
                              "id": "c",
                              "text": "only addition"
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
          id: "m1-u7-geometry-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a shape. Identify it (2D or 3D), count its sides/faces/corners, and describe how you could compose or decompose it.",
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
                              "reasoning": "Identifies shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counts + describes compose/decompose.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Triangle: 3 sides; two triangles -> square'**"
          ]
},
        },
        {
          id: "m1-u7-geometry-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many vertices does a cube have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Vertices",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cube = 8 vertices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cube = 8 vertices.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(8)**",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m1-u7-geometry-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D\" mean?",
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
                              "text": "Round, no corners."
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
          id: "m1-u7-geometry-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round, no corners."
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
                              "statement": "\"3D\" means Solid shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D\" means Solid shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D** = Solid shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-geometry-review-q6",
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
                              "text": "Round, no corners."
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
                              "statement": "\"Circle\" means Round, no corners."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Circle\" means Round, no corners.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Circle** = Round, no corners.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-geometry-review-q7",
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
                              "text": "Put together."
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
          id: "m1-u7-geometry-review-q8",
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
                              "text": "Put together."
                    },
                    {
                              "id": "d",
                              "text": "Break apart."
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

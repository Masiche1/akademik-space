import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "m2-u7-lesson-7-5",
  code: "7-5",
  title: "Geometry Review",
  goal: "I CAN identify shapes, count sides/faces and partition shapes.",
  standards: ["2.G.A.1", "2.G.A.3"],
  vocabulary: [
    { term: "Shape", definition: "Closed figure." },
    { term: "2D", definition: "Flat shape." },
    { term: "3D", definition: "Solid shape." },
    { term: "Sides", definition: "Edges of 2D." },
    { term: "Faces", definition: "Surfaces of 3D." },
    { term: "Vertices", definition: "Corners." },
    { term: "Partition", definition: "Divide into parts." },
    { term: "Equal", definition: "Same size." },
  ],
  concepts: [
    {
      id: "m2-u7-geometry-review",
      title: "Geometry review",
      skill: "Combine 2D shapes, 3D shapes and partitioning.",
      lesson: {
        sections: [
          {
            heading: "All geometry",
            body: "We **identify** **2D** shapes (sides/vertices), **3D** shapes (faces), and **partition** shapes into equal parts.",
          },
          {
            heading: "Put it together",
            body: "Use all geometry skills.",
          },
        ],
        keyFormulas: [
          { name: "Geometry", statement: "2D + 3D + partition = geometry mastery." },
        ],
        workedExample: {
          problem: "Identify a 2D shape, a 3D shape, and partition a shape.",
          solution: "2D: triangle (3 sides); 3D: cube (6 faces); partition: halves/fourths.",
        },
      },
      questions: [
        {
          id: "m2-u7-geometry-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only 2D"
                    },
                    {
                              "id": "b",
                              "text": "2D shapes, 3D shapes, partitioning"
                    },
                    {
                              "id": "c",
                              "text": "only 3D"
                    },
                    {
                              "id": "d",
                              "text": "only measuring"
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
          "finalAnswer": "All geometry skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u7-geometry-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a 2D shape, a 3D shape, and partition a shape into equal parts.",
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
                                                  "geometry",
                                                  "All skills",
                                                  "2D + 3D + partition."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "geometry",
                                                  "All skills",
                                                  "2D + 3D + partition."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Identifies 2D + 3D.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Partitions correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "e.g., Triangle (3 sides); Cube (6 faces); 4 equal parts"
          ]
},
        },
        {
          id: "m2-u7-geometry-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hexagon has how many sides?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
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
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hexagon = 6 sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hexagon = 6 sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "m2-u7-geometry-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat shape."
                    },
                    {
                              "id": "b",
                              "text": "Closed figure."
                    },
                    {
                              "id": "c",
                              "text": "Solid shape."
                    },
                    {
                              "id": "d",
                              "text": "Edges of 2D."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape\" means Closed figure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape\" means Closed figure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape** = Closed figure.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-geometry-review-q5",
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
                              "text": "Edges of 2D."
                    },
                    {
                              "id": "c",
                              "text": "Surfaces of 3D."
                    },
                    {
                              "id": "d",
                              "text": "Flat shape."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m2-u7-geometry-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Edges of 2D."
                    },
                    {
                              "id": "b",
                              "text": "Solid shape."
                    },
                    {
                              "id": "c",
                              "text": "Surfaces of 3D."
                    },
                    {
                              "id": "d",
                              "text": "Corners."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m2-u7-geometry-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sides\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Surfaces of 3D."
                    },
                    {
                              "id": "b",
                              "text": "Corners."
                    },
                    {
                              "id": "c",
                              "text": "Divide into parts."
                    },
                    {
                              "id": "d",
                              "text": "Edges of 2D."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sides\" means Edges of 2D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sides\" means Edges of 2D.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sides** = Edges of 2D.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-geometry-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Faces\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Corners."
                    },
                    {
                              "id": "b",
                              "text": "Surfaces of 3D."
                    },
                    {
                              "id": "c",
                              "text": "Divide into parts."
                    },
                    {
                              "id": "d",
                              "text": "Same size."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Faces\" means Surfaces of 3D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Faces\" means Surfaces of 3D.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Faces** = Surfaces of 3D.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

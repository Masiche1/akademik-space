import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "m0-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Measurement and Geometry",
  goal: "I CAN measure, classify, collect data and identify shapes.",
  standards: ["K.MD.A.1", "K.MD.A.2", "K.MD.B.3", "K.G.A.1", "K.G.A.2"],
  vocabulary: [
    { term: "Length", definition: "How long." },
    { term: "Weight", definition: "How heavy." },
    { term: "Classify", definition: "Sort by feature." },
    { term: "Data", definition: "Collected info." },
    { term: "2D shape", definition: "Flat shape." },
    { term: "3D shape", definition: "Solid shape." },
    { term: "Side", definition: "Edge." },
    { term: "Face", definition: "Flat surface." },
  ],
  concepts: [
    {
      id: "m0-u8-review-measure-geometry",
      title: "Measurement and geometry review",
      skill: "Combine measuring, classifying, data and shapes.",
      lesson: {
        sections: [
          {
            heading: "Measure + shapes",
            body: "**Measurement** compares length/weight; **data** is counted categories; **geometry** identifies 2D/3D shapes by sides, corners and faces.",
          },
          {
            heading: "Put it together",
            body: "Compare objects, sort into groups, count data, and name shapes.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Measure + data + geometry = full kindergarten math." },
        ],
        workedExample: {
          problem: "Compare two objects by length, sort shapes into groups, count them.",
          solution: "Pencil longer; triangles=3, squares=2, total=5.",
        },
      },
      questions: [
        {
          id: "m0-u8-review-measure-geometry-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Kindergarten geometry includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only circles"
                    },
                    {
                              "id": "b",
                              "text": "2D and 3D shapes by attributes"
                    },
                    {
                              "id": "c",
                              "text": "only squares"
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
                              "statement": "2D + 3D shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2D + 3D shapes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D + 3D**",
          "commonErrors": [
                    "Lists one type."
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two objects by length AND weight. Then identify two shapes and their attributes.",
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
                                                  "Measure + geometry",
                                                  "Compare + shape attributes."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Measure + geometry",
                                                  "Compare + shape attributes."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all tasks.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Ruler longer, book heavier; triangle=3 sides, cube=6 faces.'**"
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'face' belongs to which type of shape?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2D"
                    },
                    {
                              "id": "b",
                              "text": "3D"
                    },
                    {
                              "id": "c",
                              "text": "both"
                    },
                    {
                              "id": "d",
                              "text": "neither"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Faces are on 3D shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Faces are on 3D shapes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D**",
          "commonErrors": [
                    "Confuses 2D/3D."
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How heavy."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "Sort by feature."
                    },
                    {
                              "id": "d",
                              "text": "Collected info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sort by feature."
                    },
                    {
                              "id": "b",
                              "text": "Collected info."
                    },
                    {
                              "id": "c",
                              "text": "Flat shape."
                    },
                    {
                              "id": "d",
                              "text": "How heavy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weight\" means How heavy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weight\" means How heavy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weight** = How heavy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Classify\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Collected info."
                    },
                    {
                              "id": "b",
                              "text": "Sort by feature."
                    },
                    {
                              "id": "c",
                              "text": "Flat shape."
                    },
                    {
                              "id": "d",
                              "text": "Solid shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Classify\" means Sort by feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Classify\" means Sort by feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Classify** = Sort by feature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat shape."
                    },
                    {
                              "id": "b",
                              "text": "Solid shape."
                    },
                    {
                              "id": "c",
                              "text": "Edge."
                    },
                    {
                              "id": "d",
                              "text": "Collected info."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Collected info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Collected info.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Collected info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-measure-geometry-q8",
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
                              "text": "Edge."
                    },
                    {
                              "id": "d",
                              "text": "Flat surface."
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
      ],
    },
  ],
};

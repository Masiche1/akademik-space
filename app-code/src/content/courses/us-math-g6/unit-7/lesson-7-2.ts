import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m6-u7-lesson-7-2",
  code: "7-2",
  title: "Geometry Review",
  goal: "I CAN use all geometry skills.",
  standards: ["6.G.A.1", "6.G.A.2", "6.G.A.3", "6.G.A.4"],
  vocabulary: [
    { term: "Area", definition: "2D space." },
    { term: "Surface area", definition: "3D outside." },
    { term: "Volume", definition: "3D inside." },
    { term: "Coordinate", definition: "Grid." },
    { term: "Distance", definition: "How far." },
    { term: "Prism", definition: "V=Bh." },
    { term: "Pyramid", definition: "V=1/3Bh." },
    { term: "Formula", definition: "Math rule." },
  ],
  concepts: [
    {
      id: "m6-u7-geometry-review-2",
      title: "Geometry review",
      skill: "Combine area, surface area, volume and coordinate geometry.",
      lesson: {
        sections: [
          {
            heading: "All geometry skills",
            body: "Find **area**, **surface area**, **volume**, and use **coordinates**.",
          },
          {
            heading: "Put it together",
            body: "Use all geometry skills.",
          },
        ],
        keyFormulas: [
          { name: "Geometry", statement: "Area + surface + volume + coordinates = all skills." },
        ],
        workedExample: {
          problem: "Use all geometry skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m6-u7-geometry-review-2-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only area"
                    },
                    {
                              "id": "b",
                              "text": "area, surface area, volume, coordinates"
                    },
                    {
                              "id": "c",
                              "text": "only volume"
                    },
                    {
                              "id": "d",
                              "text": "only coordinates"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "area, surface area, volume, coordinates",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find a 2D area, a 3D volume, a surface area, and a coordinate distance.",
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
                                                  "All geometry",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All geometry",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Triangle A=18; Prism V=60; Box SA=94; Distance=5.'**"
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Geometry is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's math"
                    },
                    {
                              "id": "b",
                              "text": "it describes and measures shapes and space"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
                    },
                    {
                              "id": "d",
                              "text": "it's easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Describes/measures space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes/measures space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it describes and measures shapes and space",
          "commonErrors": [
                    "Thinks it's just math."
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3D outside."
                    },
                    {
                              "id": "b",
                              "text": "2D space."
                    },
                    {
                              "id": "c",
                              "text": "3D inside."
                    },
                    {
                              "id": "d",
                              "text": "Grid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means 2D space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means 2D space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = 2D space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Surface area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3D inside."
                    },
                    {
                              "id": "b",
                              "text": "Grid."
                    },
                    {
                              "id": "c",
                              "text": "How far."
                    },
                    {
                              "id": "d",
                              "text": "3D outside."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Surface area\" means 3D outside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Surface area\" means 3D outside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Surface area** = 3D outside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grid."
                    },
                    {
                              "id": "b",
                              "text": "3D inside."
                    },
                    {
                              "id": "c",
                              "text": "How far."
                    },
                    {
                              "id": "d",
                              "text": "V=Bh."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Volume\" means 3D inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means 3D inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Volume** = 3D inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How far."
                    },
                    {
                              "id": "b",
                              "text": "V=Bh."
                    },
                    {
                              "id": "c",
                              "text": "V=1/3Bh."
                    },
                    {
                              "id": "d",
                              "text": "Grid."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coordinate\" means Grid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coordinate\" means Grid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coordinate** = Grid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u7-geometry-review-2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Distance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "V=Bh."
                    },
                    {
                              "id": "b",
                              "text": "How far."
                    },
                    {
                              "id": "c",
                              "text": "V=1/3Bh."
                    },
                    {
                              "id": "d",
                              "text": "Math rule."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Distance\" means How far."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Distance\" means How far.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Distance** = How far.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "m5-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Measurement and Geometry",
  goal: "I CAN use all measurement and geometry skills.",
  standards: ["5.MD.C.4", "5.MD.C.5", "5.G.A.1", "5.G.A.2", "5.G.B.3", "5.G.B.4"],
  vocabulary: [
    { term: "Volume", definition: "Space inside." },
    { term: "Cubic unit", definition: "3D unit." },
    { term: "Coordinate plane", definition: "Grid." },
    { term: "Plot", definition: "Mark point." },
    { term: "Symmetry", definition: "Mirror image." },
    { term: "Quadrilateral", definition: "4-sided." },
    { term: "Classify", definition: "Sort by properties." },
    { term: "Area", definition: "Space inside." },
  ],
  concepts: [
    {
      id: "m5-u8-review-measurement-geometry",
      title: "Measurement and geometry review",
      skill: "Combine volume, coordinate plane, symmetry and classification.",
      lesson: {
        sections: [
          {
            heading: "All measurement/geometry",
            body: "Find **volume**, convert units, **plot** points, identify **symmetry**, and **classify** shapes.",
          },
          {
            heading: "Put it together",
            body: "Use all measurement and geometry skills.",
          },
        ],
        keyFormulas: [
          { name: "Measurement/geometry", statement: "Volume + coordinate + symmetry + classify = all skills." },
        ],
        workedExample: {
          problem: "Use all measurement and geometry skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u8-review-measurement-geometry-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement/geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only volume"
                    },
                    {
                              "id": "b",
                              "text": "volume, coordinate, symmetry, classify"
                    },
                    {
                              "id": "c",
                              "text": "only symmetry"
                    },
                    {
                              "id": "d",
                              "text": "only classify"
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
          "finalAnswer": "volume, coordinate, symmetry, classify",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find a volume, convert units, plot points, identify symmetry, and classify a shape.",
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
                                                  "All meas/geo",
                                                  "All five skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All meas/geo",
                                                  "All five skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all five.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'V=30cm³; 2500cm³=2.5L; plot(2,3); square=4 symmetry lines; rectangle=parallelogram.'**"
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Geometry and measurement are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're math"
                    },
                    {
                              "id": "b",
                              "text": "they describe and measure the world"
                    },
                    {
                              "id": "c",
                              "text": "they're required"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Describe/measure world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describe/measure world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they describe and measure the world",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3D unit."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "Grid."
                    },
                    {
                              "id": "d",
                              "text": "Mark point."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Volume\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Volume** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cubic unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grid."
                    },
                    {
                              "id": "b",
                              "text": "Mark point."
                    },
                    {
                              "id": "c",
                              "text": "Mirror image."
                    },
                    {
                              "id": "d",
                              "text": "3D unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cubic unit\" means 3D unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cubic unit\" means 3D unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cubic unit** = 3D unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate plane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mark point."
                    },
                    {
                              "id": "b",
                              "text": "Grid."
                    },
                    {
                              "id": "c",
                              "text": "Mirror image."
                    },
                    {
                              "id": "d",
                              "text": "4-sided."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coordinate plane\" means Grid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coordinate plane\" means Grid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coordinate plane** = Grid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mirror image."
                    },
                    {
                              "id": "b",
                              "text": "4-sided."
                    },
                    {
                              "id": "c",
                              "text": "Sort by properties."
                    },
                    {
                              "id": "d",
                              "text": "Mark point."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plot\" means Mark point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plot\" means Mark point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plot** = Mark point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-measurement-geometry-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Symmetry\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4-sided."
                    },
                    {
                              "id": "b",
                              "text": "Mirror image."
                    },
                    {
                              "id": "c",
                              "text": "Sort by properties."
                    },
                    {
                              "id": "d",
                              "text": "Space inside."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Symmetry\" means Mirror image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Symmetry\" means Mirror image.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Symmetry** = Mirror image.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

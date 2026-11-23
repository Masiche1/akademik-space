import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m5-u6-lesson-6-5",
  code: "6-5",
  title: "Geometry Review",
  goal: "I CAN use all geometry skills.",
  standards: ["5.G.A.1", "5.G.A.2", "5.G.B.3", "5.G.B.4"],
  vocabulary: [
    { term: "Coordinate", definition: "Number pair." },
    { term: "Plot", definition: "Mark point." },
    { term: "Distance", definition: "How far." },
    { term: "Area", definition: "Space inside." },
    { term: "Symmetry", definition: "Mirror image." },
    { term: "Quadrilateral", definition: "4-sided." },
    { term: "Parallelogram", definition: "Parallel sides." },
    { term: "Rectangle", definition: "Right angles." },
  ],
  concepts: [
    {
      id: "m5-u6-geometry-review",
      title: "Geometry review",
      skill: "Combine coordinate geometry, classification and symmetry.",
      lesson: {
        sections: [
          {
            heading: "All geometry skills",
            body: "Use **coordinates** to measure, **classify** quadrilaterals, and identify **symmetry**.",
          },
          {
            heading: "Put it together",
            body: "Use all geometry skills for complex problems.",
          },
        ],
        keyFormulas: [
          { name: "Geometry", statement: "Coordinates + classify + symmetry = all skills." },
        ],
        workedExample: {
          problem: "Use all geometry skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u6-geometry-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only coordinates"
                    },
                    {
                              "id": "b",
                              "text": "coordinates, classify, symmetry"
                    },
                    {
                              "id": "c",
                              "text": "only classify"
                    },
                    {
                              "id": "d",
                              "text": "only symmetry"
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
          "finalAnswer": "coordinates, classify, symmetry",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u6-geometry-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plot points to form a shape, classify it, and identify its lines of symmetry.",
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
                                                  "All three skills."
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
                                                  "All three skills."
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
                    "**e.g., 'Plot rectangle; classify: rectangle; symmetry: 2 lines.'**"
          ]
},
        },
        {
          id: "m5-u6-geometry-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Geometry is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's shapes"
                    },
                    {
                              "id": "b",
                              "text": "it describes and measures the world"
                    },
                    {
                              "id": "c",
                              "text": "it's math only"
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
                              "statement": "Describes/measures world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes/measures world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it describes and measures the world",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "m5-u6-geometry-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mark point."
                    },
                    {
                              "id": "b",
                              "text": "Number pair."
                    },
                    {
                              "id": "c",
                              "text": "How far."
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
                              "statement": "\"Coordinate\" means Number pair."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coordinate\" means Number pair.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coordinate** = Number pair.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u6-geometry-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How far."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "Mirror image."
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
          id: "m5-u6-geometry-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Distance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Space inside."
                    },
                    {
                              "id": "b",
                              "text": "How far."
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
        {
          id: "m5-u6-geometry-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
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
                              "text": "Parallel sides."
                    },
                    {
                              "id": "d",
                              "text": "Space inside."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u6-geometry-review-q8",
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
                              "text": "Parallel sides."
                    },
                    {
                              "id": "d",
                              "text": "Right angles."
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

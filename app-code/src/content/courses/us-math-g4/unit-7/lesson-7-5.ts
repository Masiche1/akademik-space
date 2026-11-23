import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "m4-u7-lesson-7-5",
  code: "7-5",
  title: "Data and Geometry Review",
  goal: "I CAN use all data and geometry skills.",
  standards: ["4.MD.B.4", "4.G.A.1", "4.G.A.2"],
  vocabulary: [
    { term: "Line plot", definition: "Data on number line." },
    { term: "Angle", definition: "Two rays from point." },
    { term: "Acute", definition: "Less than 90." },
    { term: "Obtuse", definition: "More than 90." },
    { term: "Parallel", definition: "Never meet." },
    { term: "Perpendicular", definition: "Meet at 90°." },
    { term: "2D", definition: "Flat shape." },
    { term: "3D", definition: "Solid shape." },
  ],
  concepts: [
    {
      id: "m4-u7-data-geometry-review",
      title: "Data and geometry review",
      skill: "Combine line plots, angles, lines and shape classification.",
      lesson: {
        sections: [
          {
            heading: "All data/geometry",
            body: "Create **line plots**, identify **angles** (acute/right/obtuse), **lines** (parallel/perpendicular/intersecting), and classify **2D/3D shapes**.",
          },
          {
            heading: "Put it together",
            body: "Use all data and geometry skills together.",
          },
        ],
        keyFormulas: [
          { name: "Data/geometry", statement: "Line plot + angles + lines + shapes = all skills." },
        ],
        workedExample: {
          problem: "Use all data and geometry skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u7-data-geometry-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data/geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only line plots"
                    },
                    {
                              "id": "b",
                              "text": "line plots, angles, lines, shapes"
                    },
                    {
                              "id": "c",
                              "text": "only angles"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All data/geometry skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All data/geometry skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "line plots, angles, lines, shapes",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Create a line plot, identify an angle type, identify line types, and classify shapes.",
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
                                                  "All data/geo",
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
                                                  "All data/geo",
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
                    "**e.g., 'Line plot with marks; 45°=acute; parallel lines; cube=3D'**"
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q3",
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
                              "statement": "Geometry describes/measures the world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Geometry describes/measures the world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it describes and measures the world",
          "commonErrors": [
                    "Thinks geometry is useless."
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two rays from point."
                    },
                    {
                              "id": "b",
                              "text": "Data on number line."
                    },
                    {
                              "id": "c",
                              "text": "Less than 90."
                    },
                    {
                              "id": "d",
                              "text": "More than 90."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line plot\" means Data on number line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line plot\" means Data on number line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line plot** = Data on number line.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Angle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Less than 90."
                    },
                    {
                              "id": "b",
                              "text": "More than 90."
                    },
                    {
                              "id": "c",
                              "text": "Never meet."
                    },
                    {
                              "id": "d",
                              "text": "Two rays from point."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Angle\" means Two rays from point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Angle\" means Two rays from point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Angle** = Two rays from point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Acute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More than 90."
                    },
                    {
                              "id": "b",
                              "text": "Less than 90."
                    },
                    {
                              "id": "c",
                              "text": "Never meet."
                    },
                    {
                              "id": "d",
                              "text": "Meet at 90°."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Acute\" means Less than 90."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Acute\" means Less than 90.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Acute** = Less than 90.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Obtuse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Never meet."
                    },
                    {
                              "id": "b",
                              "text": "Meet at 90°."
                    },
                    {
                              "id": "c",
                              "text": "Flat shape."
                    },
                    {
                              "id": "d",
                              "text": "More than 90."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Obtuse\" means More than 90."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Obtuse\" means More than 90.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Obtuse** = More than 90.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-data-geometry-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Parallel\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Meet at 90°."
                    },
                    {
                              "id": "b",
                              "text": "Never meet."
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
                              "statement": "\"Parallel\" means Never meet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Parallel\" means Never meet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Parallel** = Never meet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

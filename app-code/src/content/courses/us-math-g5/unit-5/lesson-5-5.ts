import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m5-u5-lesson-5-5",
  code: "5-5",
  title: "Measurement Review",
  goal: "I CAN use all measurement skills: volume and coordinate plane.",
  standards: ["5.MD.C.4", "5.MD.C.5", "5.G.A.1", "5.G.A.2"],
  vocabulary: [
    { term: "Volume", definition: "Space inside." },
    { term: "Cubic unit", definition: "3D unit." },
    { term: "Convert", definition: "Change units." },
    { term: "Coordinate plane", definition: "Grid." },
    { term: "Ordered pair", definition: "(x,y)." },
    { term: "Plot", definition: "Mark point." },
    { term: "Formula", definition: "V = lwh." },
    { term: "Liter", definition: "Liquid volume." },
  ],
  concepts: [
    {
      id: "m5-u5-measurement-review",
      title: "Measurement review",
      skill: "Combine volume, unit conversion and coordinate plane.",
      lesson: {
        sections: [
          {
            heading: "All measurement skills",
            body: "Find **volume** (V = lwh), **convert** cubic units and liters, and **plot points** on the **coordinate plane**.",
          },
          {
            heading: "Put it together",
            body: "Use all measurement skills together.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Volume + convert + coordinate = all skills." },
        ],
        workedExample: {
          problem: "Use all measurement skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u5-measurement-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only volume"
                    },
                    {
                              "id": "b",
                              "text": "volume, convert, coordinate"
                    },
                    {
                              "id": "c",
                              "text": "only coordinate"
                    },
                    {
                              "id": "d",
                              "text": "only convert"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All measurement skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All measurement skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "volume, convert, coordinate",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u5-measurement-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the volume of a prism, convert cubic units to liters, and plot three points on a coordinate plane.",
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
                                                  "All measurement",
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
                                                  "All measurement",
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
                    "**e.g., 'V=30 cm³; 2,500 cm³=2.5 L; plot (2,3), (-1,4), (3,-2).'**"
          ]
},
        },
        {
          id: "m5-u5-measurement-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The coordinate plane is important for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "graphing and representing data"
                    },
                    {
                              "id": "c",
                              "text": "only art"
                    },
                    {
                              "id": "d",
                              "text": "only math"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Graphing/representing data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Graphing/representing data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "graphing and representing data",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "m5-u5-measurement-review-q4",
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
                              "text": "Change units."
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
          id: "m5-u5-measurement-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cubic unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change units."
                    },
                    {
                              "id": "b",
                              "text": "Grid."
                    },
                    {
                              "id": "c",
                              "text": "(x,y)."
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
          id: "m5-u5-measurement-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grid."
                    },
                    {
                              "id": "b",
                              "text": "Change units."
                    },
                    {
                              "id": "c",
                              "text": "(x,y)."
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
                              "statement": "\"Convert\" means Change units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convert\" means Change units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convert** = Change units.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-measurement-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate plane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "(x,y)."
                    },
                    {
                              "id": "b",
                              "text": "Mark point."
                    },
                    {
                              "id": "c",
                              "text": "V = lwh."
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
          id: "m5-u5-measurement-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ordered pair\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mark point."
                    },
                    {
                              "id": "b",
                              "text": "(x,y)."
                    },
                    {
                              "id": "c",
                              "text": "V = lwh."
                    },
                    {
                              "id": "d",
                              "text": "Liquid volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ordered pair\" means (x,y)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ordered pair\" means (x,y).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ordered pair** = (x,y).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

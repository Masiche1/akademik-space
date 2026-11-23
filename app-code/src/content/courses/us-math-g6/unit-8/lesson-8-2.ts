import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m6-u8-lesson-8-2",
  code: "8-2",
  title: "Final: Geometry and Statistics",
  goal: "I CAN combine geometry and statistics skills.",
  standards: ["6.G.A.1", "6.SP.A.1", "6.SP.A.3"],
  vocabulary: [
    { term: "Area", definition: "2D space." },
    { term: "Volume", definition: "3D inside." },
    { term: "Coordinate", definition: "Grid." },
    { term: "Data", definition: "Information." },
    { term: "Mean", definition: "Average." },
    { term: "Median", definition: "Middle." },
    { term: "Spread", definition: "Variability." },
    { term: "Probability", definition: "Likelihood." },
  ],
  concepts: [
    {
      id: "m6-u8-final-geometry-statistics",
      title: "Final: geometry and statistics",
      skill: "Combine geometry skills with statistics and probability.",
      lesson: {
        sections: [
          {
            heading: "Combined skills",
            body: "Use **geometry** (area, volume, coordinates) with **statistics** (displays, center, spread) and **probability**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills for data analysis and measurement.",
          },
        ],
        keyFormulas: [
          { name: "Combined", statement: "Geometry + statistics + probability = all skills." },
        ],
        workedExample: {
          problem: "Find the area of a triangle with base 8, height 5. Then find the mean of 3, 5, 7, 9, 11.",
          solution: "Area = 1/2 x 8 x 5 = **20**; Mean = 35/5 = **7**.",
        },
      },
      questions: [
        {
          id: "m6-u8-final-geometry-statistics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Area of triangle (b=8, h=5) is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20"
                    },
                    {
                              "id": "b",
                              "text": "40"
                    },
                    {
                              "id": "c",
                              "text": "13"
                    },
                    {
                              "id": "d",
                              "text": "80"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/2 x 8 x 5 = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/2 x 8 x 5 = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m6-u8-final-geometry-statistics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Mean of 2, 4, 6, 8, 10 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "7"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "30/5 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30/5 = 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong mean."
          ]
},
        },
        {
          id: "m6-u8-final-geometry-statistics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the volume of a prism (B=12, h=5). Find the median of 3, 7, 9, 12, 15. Calculate P(rolling even) on a die.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Geo+stats",
                              "statement": "60, 9, 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**V = 12x5 = 60; Median = 9; P(even) = 3/6 = 1/2.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m6-u8-final-geometry-statistics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Geometry and statistics are connected because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're different"
                    },
                    {
                              "id": "b",
                              "text": "we measure and analyze shapes and data"
                    },
                    {
                              "id": "c",
                              "text": "statistics is geometry"
                    },
                    {
                              "id": "d",
                              "text": "geometry is statistics"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Measure shapes + analyze data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measure shapes + analyze data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "we measure and analyze shapes and data",
          "commonErrors": [
                    "Thinks they're unrelated."
          ]
},
        },
        {
          id: "m6-u8-final-geometry-statistics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find an area and a probability, then explain how they relate to real-world problems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Geo+stats",
                              "statement": "Area + probability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains relation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Area = 20 sq ft; P = 1/4; used for floor tiling and game design.'**",
          "commonErrors": [
                    "Cannot find.",
                    "No relation."
          ]
},
        },
        {
          id: "m6-u8-final-geometry-statistics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3D inside."
                    },
                    {
                              "id": "b",
                              "text": "2D space."
                    },
                    {
                              "id": "c",
                              "text": "Grid."
                    },
                    {
                              "id": "d",
                              "text": "Information."
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
          id: "m6-u8-final-geometry-statistics-q7",
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
                              "text": "Information."
                    },
                    {
                              "id": "c",
                              "text": "Average."
                    },
                    {
                              "id": "d",
                              "text": "3D inside."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m6-u8-final-geometry-statistics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Information."
                    },
                    {
                              "id": "b",
                              "text": "Grid."
                    },
                    {
                              "id": "c",
                              "text": "Average."
                    },
                    {
                              "id": "d",
                              "text": "Middle."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};

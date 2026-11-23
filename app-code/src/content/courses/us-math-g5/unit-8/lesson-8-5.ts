import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "m5-u8-lesson-8-5",
  code: "8-5",
  title: "Review: Data Analysis",
  goal: "I CAN use all data analysis skills.",
  standards: ["5.MD.B.2", "5.G.A.1", "5.G.A.2"],
  vocabulary: [
    { term: "Line plot", definition: "Data on line." },
    { term: "Coordinate graph", definition: "Grid for data." },
    { term: "Interpret", definition: "Read meaning." },
    { term: "Trend", definition: "Pattern." },
    { term: "Frequency", definition: "How many times." },
    { term: "Compare", definition: "See differences." },
    { term: "Conclusion", definition: "What it shows." },
    { term: "Evidence", definition: "Supporting data." },
  ],
  concepts: [
    {
      id: "m5-u8-review-data",
      title: "Data analysis review",
      skill: "Combine line plots, coordinate graphs and interpretation.",
      lesson: {
        sections: [
          {
            heading: "All data skills",
            body: "Create **line plots** with fractions, plot on **coordinate graphs**, and **interpret** data.",
          },
          {
            heading: "Put it together",
            body: "Use all data skills for analysis.",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Line plots + graphs + interpret = all skills." },
        ],
        workedExample: {
          problem: "Use all data skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u8-review-data-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only line plots"
                    },
                    {
                              "id": "b",
                              "text": "line plots, graphs, interpret"
                    },
                    {
                              "id": "c",
                              "text": "only graphs"
                    },
                    {
                              "id": "d",
                              "text": "only interpret"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All data skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All data skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "line plots, graphs, interpret",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u8-review-data-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Create a line plot, plot points on a coordinate graph, and interpret what the data shows.",
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
                                                  "All data",
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
                                                  "All data",
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
                    "**e.g., 'Line plot with marks; graph points; trend: increasing.'**"
          ]
},
        },
        {
          id: "m5-u8-review-data-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Data analysis helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "understand patterns and make decisions"
                    },
                    {
                              "id": "c",
                              "text": "only math"
                    },
                    {
                              "id": "d",
                              "text": "only school"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Understand patterns/decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand patterns/decisions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand patterns and make decisions",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "m5-u8-review-data-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grid for data."
                    },
                    {
                              "id": "b",
                              "text": "Data on line."
                    },
                    {
                              "id": "c",
                              "text": "Read meaning."
                    },
                    {
                              "id": "d",
                              "text": "Pattern."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line plot\" means Data on line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line plot\" means Data on line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line plot** = Data on line.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-data-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Read meaning."
                    },
                    {
                              "id": "b",
                              "text": "Pattern."
                    },
                    {
                              "id": "c",
                              "text": "How many times."
                    },
                    {
                              "id": "d",
                              "text": "Grid for data."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coordinate graph\" means Grid for data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coordinate graph\" means Grid for data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coordinate graph** = Grid for data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-data-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interpret\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pattern."
                    },
                    {
                              "id": "b",
                              "text": "Read meaning."
                    },
                    {
                              "id": "c",
                              "text": "How many times."
                    },
                    {
                              "id": "d",
                              "text": "See differences."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interpret\" means Read meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interpret\" means Read meaning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interpret** = Read meaning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-data-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How many times."
                    },
                    {
                              "id": "b",
                              "text": "See differences."
                    },
                    {
                              "id": "c",
                              "text": "What it shows."
                    },
                    {
                              "id": "d",
                              "text": "Pattern."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Trend\" means Pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trend\" means Pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Trend** = Pattern.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-data-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Frequency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See differences."
                    },
                    {
                              "id": "b",
                              "text": "How many times."
                    },
                    {
                              "id": "c",
                              "text": "What it shows."
                    },
                    {
                              "id": "d",
                              "text": "Supporting data."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Frequency\" means How many times."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Frequency\" means How many times.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Frequency** = How many times.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

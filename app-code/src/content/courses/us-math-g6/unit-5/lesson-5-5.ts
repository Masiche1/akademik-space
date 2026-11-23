import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m6-u5-lesson-5-5",
  code: "5-5",
  title: "Statistics Review",
  goal: "I CAN use all statistics and probability skills.",
  standards: ["6.SP.A.1", "6.SP.A.3", "6.SP.A.4"],
  vocabulary: [
    { term: "Data", definition: "Information." },
    { term: "Display", definition: "Visual." },
    { term: "Mean", definition: "Average." },
    { term: "Median", definition: "Middle." },
    { term: "Mode", definition: "Most frequent." },
    { term: "Spread", definition: "Variability." },
    { term: "Range", definition: "Max-min." },
    { term: "Probability", definition: "Likelihood." },
  ],
  concepts: [
    {
      id: "m6-u5-statistics-review",
      title: "Statistics review",
      skill: "Combine data displays, measures of center/spread and probability.",
      lesson: {
        sections: [
          {
            heading: "All statistics skills",
            body: "Create **displays**, find **center** (mean/median/mode), **spread** (range/IQR), and **probability**.",
          },
          {
            heading: "Put it together",
            body: "Use all statistics skills to analyze data.",
          },
        ],
        keyFormulas: [
          { name: "Statistics", statement: "Displays + center + spread + probability = all skills." },
        ],
        workedExample: {
          problem: "Use all statistics skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m6-u5-statistics-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Statistics skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only displays"
                    },
                    {
                              "id": "b",
                              "text": "displays, center, spread, probability"
                    },
                    {
                              "id": "c",
                              "text": "only center"
                    },
                    {
                              "id": "d",
                              "text": "only probability"
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
          "finalAnswer": "displays, center, spread, probability",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Create a display, find mean/median/mode, find range/IQR, and calculate a probability.",
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
                                                  "All statistics",
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
                                                  "All statistics",
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
                    "**e.g., 'Dot plot; Mean=7, Median=7, Mode=5; Range=10, IQR=5; P=1/4.'**"
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Statistics helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand and interpret data"
                    },
                    {
                              "id": "c",
                              "text": "only test"
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
                              "statement": "Understand/interpret data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand/interpret data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand and interpret data",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visual."
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
                              "statement": "\"Data\" means Information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Display\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Average."
                    },
                    {
                              "id": "b",
                              "text": "Middle."
                    },
                    {
                              "id": "c",
                              "text": "Most frequent."
                    },
                    {
                              "id": "d",
                              "text": "Visual."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Display\" means Visual."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Display\" means Visual.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Display** = Visual.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mean\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Middle."
                    },
                    {
                              "id": "b",
                              "text": "Average."
                    },
                    {
                              "id": "c",
                              "text": "Most frequent."
                    },
                    {
                              "id": "d",
                              "text": "Variability."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mean\" means Average."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mean\" means Average.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mean** = Average.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Median\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Most frequent."
                    },
                    {
                              "id": "b",
                              "text": "Variability."
                    },
                    {
                              "id": "c",
                              "text": "Max-min."
                    },
                    {
                              "id": "d",
                              "text": "Middle."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Median\" means Middle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Median\" means Middle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Median** = Middle.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-statistics-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mode\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Variability."
                    },
                    {
                              "id": "b",
                              "text": "Most frequent."
                    },
                    {
                              "id": "c",
                              "text": "Max-min."
                    },
                    {
                              "id": "d",
                              "text": "Likelihood."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mode\" means Most frequent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mode\" means Most frequent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mode** = Most frequent.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

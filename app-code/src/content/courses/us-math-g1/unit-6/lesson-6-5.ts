import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m1-u6-lesson-6-5",
  code: "6-5",
  title: "Measurement Review",
  goal: "I CAN measure length, tell time, and work with data.",
  standards: ["1.MD.A.1", "1.MD.A.2", "1.MD.B.3", "1.MD.C.4"],
  vocabulary: [
    { term: "Length", definition: "How long." },
    { term: "Measure", definition: "Find size." },
    { term: "Time", definition: "What time." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Half hour", definition: "30 minutes." },
    { term: "Data", definition: "Collected info." },
    { term: "Graph", definition: "Picture of data." },
    { term: "Compare", definition: "More/less." },
  ],
  concepts: [
    {
      id: "m1-u6-measurement-review",
      title: "Measurement review",
      skill: "Combine length, time and data skills.",
      lesson: {
        sections: [
          {
            heading: "All measurement skills",
            body: "We **measure** **length**, tell **time** (hour/half hour), and work with **data** and **graphs**.",
          },
          {
            heading: "Put it together",
            body: "Use all measurement skills to solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Length + time + data = measurement skills." },
        ],
        workedExample: {
          problem: "Measure a pencil, tell the time on a clock, and compare two graph categories.",
          solution: "Pencil=6 inches; clock=3:30; graph: compare bars.",
        },
      },
      questions: [
        {
          id: "m1-u6-measurement-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only length"
                    },
                    {
                              "id": "b",
                              "text": "length, time, data/graphs"
                    },
                    {
                              "id": "c",
                              "text": "only time"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m1-u6-measurement-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measure an object, tell the time shown on a clock, and compare two categories in a graph.",
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
                                                  "method",
                                                  "All measurement",
                                                  "Length + time + graph comparison."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "All measurement",
                                                  "Length + time + graph comparison."
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
                    "**e.g., 'Pencil=5 in; time=2:30; graph: A>B'**"
          ]
},
        },
        {
          id: "m1-u6-measurement-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "If it is 4:30, where does the minute hand point?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Position",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Minute hand at 6 = half past."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute hand at 6 = half past.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(6)**",
          "commonErrors": [
                    "Points to 12."
          ]
},
        },
        {
          id: "m1-u6-measurement-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find size."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "What time."
                    },
                    {
                              "id": "d",
                              "text": "60 minutes."
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
          id: "m1-u6-measurement-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What time."
                    },
                    {
                              "id": "b",
                              "text": "60 minutes."
                    },
                    {
                              "id": "c",
                              "text": "30 minutes."
                    },
                    {
                              "id": "d",
                              "text": "Find size."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Find size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Find size.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Find size.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measurement-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Time\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 minutes."
                    },
                    {
                              "id": "b",
                              "text": "What time."
                    },
                    {
                              "id": "c",
                              "text": "30 minutes."
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
                              "statement": "\"Time\" means What time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Time\" means What time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Time** = What time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measurement-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "30 minutes."
                    },
                    {
                              "id": "b",
                              "text": "Collected info."
                    },
                    {
                              "id": "c",
                              "text": "Picture of data."
                    },
                    {
                              "id": "d",
                              "text": "60 minutes."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hour\" means 60 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hour\" means 60 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hour** = 60 minutes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measurement-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Half hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Collected info."
                    },
                    {
                              "id": "b",
                              "text": "30 minutes."
                    },
                    {
                              "id": "c",
                              "text": "Picture of data."
                    },
                    {
                              "id": "d",
                              "text": "More/less."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Half hour\" means 30 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Half hour\" means 30 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Half hour** = 30 minutes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

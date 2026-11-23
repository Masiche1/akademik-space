import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m1-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Measurement",
  goal: "I CAN measure length, tell time and work with data.",
  standards: ["1.MD.A.1", "1.MD.A.2", "1.MD.B.3", "1.MD.C.4"],
  vocabulary: [
    { term: "Length", definition: "How long." },
    { term: "Measure", definition: "Find size." },
    { term: "Time", definition: "What time." },
    { term: "Hour", definition: "60 min." },
    { term: "Half hour", definition: "30 min." },
    { term: "Data", definition: "Info." },
    { term: "Graph", definition: "Picture of data." },
    { term: "Compare", definition: "More/less." },
  ],
  concepts: [
    {
      id: "m1-u8-review-measurement",
      title: "Measurement review",
      skill: "Combine length, time and data skills.",
      lesson: {
        sections: [
          {
            heading: "All measurement",
            body: "We **measure** **length**, tell **time**, and work with **data** and **graphs**.",
          },
          {
            heading: "Put it together",
            body: "Use all measurement skills.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Length + time + data = measurement." },
        ],
        workedExample: {
          problem: "Measure an object, tell time, compare graph data.",
          solution: "Length + time + graph = all measurement.",
        },
      },
      questions: [
        {
          id: "m1-u8-review-measurement-q1",
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
                              "text": "length, time, data"
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
          id: "m1-u8-review-measurement-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measure an object with units, tell the time on a clock, and compare two graph categories.",
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
                                                  "Length + time + graph."
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
                                                  "Length + time + graph."
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
                    "**e.g., 'Pencil=6 in; time=3:30; graph: A>B'**"
          ]
},
        },
        {
          id: "m1-u8-review-measurement-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "If minute hand is at 6, what time is it (hour hand between 2 and 3)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Time",
                              "answer": 2.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Half past 2 = 2:30."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Half past 2 = 2:30.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(2.5)**",
          "commonErrors": [
                    "Reads wrong."
          ]
},
        },
        {
          id: "m1-u8-review-measurement-q4",
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
                              "text": "60 min."
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
          id: "m1-u8-review-measurement-q5",
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
                              "text": "60 min."
                    },
                    {
                              "id": "c",
                              "text": "30 min."
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
          id: "m1-u8-review-measurement-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Time\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 min."
                    },
                    {
                              "id": "b",
                              "text": "What time."
                    },
                    {
                              "id": "c",
                              "text": "30 min."
                    },
                    {
                              "id": "d",
                              "text": "Info."
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
          id: "m1-u8-review-measurement-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "30 min."
                    },
                    {
                              "id": "b",
                              "text": "Info."
                    },
                    {
                              "id": "c",
                              "text": "Picture of data."
                    },
                    {
                              "id": "d",
                              "text": "60 min."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hour\" means 60 min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hour\" means 60 min.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hour** = 60 min.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-measurement-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Half hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Info."
                    },
                    {
                              "id": "b",
                              "text": "30 min."
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
                              "statement": "\"Half hour\" means 30 min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Half hour\" means 30 min.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Half hour** = 30 min.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

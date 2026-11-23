import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "m3-u7-lesson-7-5",
  code: "7-5",
  title: "Data Review",
  goal: "I CAN collect, graph and interpret data.",
  standards: ["3.MD.B.3", "3.MD.B.4"],
  vocabulary: [
    { term: "Data", definition: "Collected information." },
    { term: "Survey", definition: "Ask questions." },
    { term: "Table", definition: "Organized data." },
    { term: "Bar graph", definition: "Graph using bars." },
    { term: "Interpret", definition: "Read graph." },
    { term: "Most", definition: "Highest bar." },
    { term: "Least", definition: "Lowest bar." },
    { term: "Total", definition: "Add all." },
  ],
  concepts: [
    {
      id: "m3-u7-data-review",
      title: "Data review",
      skill: "Combine collecting, graphing and interpreting data.",
      lesson: {
        sections: [
          {
            heading: "All data skills",
            body: "Collect data through **surveys**, organize in **tables**, make **bar graphs**, and **interpret** them to answer questions.",
          },
          {
            heading: "Put it together",
            body: "Do a complete data investigation.",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Collect + table + graph + interpret = all skills." },
        ],
        workedExample: {
          problem: "Do a complete data investigation: survey, table, graph, interpret.",
          solution: "All data skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m3-u7-data-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only surveys"
                    },
                    {
                              "id": "b",
                              "text": "collect, table, graph, interpret"
                    },
                    {
                              "id": "c",
                              "text": "only graphs"
                    },
                    {
                              "id": "d",
                              "text": "only tables"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m3-u7-data-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Survey classmates about favorite fruit, make a table, draw a bar graph, and answer two questions about the data.",
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
                                                  "Survey + table + graph + interpret."
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
                                                  "Survey + table + graph + interpret."
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
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**Complete data investigation**"
          ]
},
        },
        {
          id: "m3-u7-data-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The tallest bar on a graph shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the least"
                    },
                    {
                              "id": "b",
                              "text": "the most"
                    },
                    {
                              "id": "c",
                              "text": "the total"
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
                              "statement": "Tallest = most."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tallest = most.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the most",
          "commonErrors": [
                    "Picks wrong bar."
          ]
},
        },
        {
          id: "m3-u7-data-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask questions."
                    },
                    {
                              "id": "b",
                              "text": "Collected information."
                    },
                    {
                              "id": "c",
                              "text": "Organized data."
                    },
                    {
                              "id": "d",
                              "text": "Graph using bars."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Collected information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Collected information.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Collected information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-data-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Survey\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Organized data."
                    },
                    {
                              "id": "b",
                              "text": "Graph using bars."
                    },
                    {
                              "id": "c",
                              "text": "Read graph."
                    },
                    {
                              "id": "d",
                              "text": "Ask questions."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Survey\" means Ask questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Survey\" means Ask questions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Survey** = Ask questions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-data-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Table\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Graph using bars."
                    },
                    {
                              "id": "b",
                              "text": "Organized data."
                    },
                    {
                              "id": "c",
                              "text": "Read graph."
                    },
                    {
                              "id": "d",
                              "text": "Highest bar."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Table\" means Organized data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Table\" means Organized data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Table** = Organized data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-data-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Read graph."
                    },
                    {
                              "id": "b",
                              "text": "Highest bar."
                    },
                    {
                              "id": "c",
                              "text": "Lowest bar."
                    },
                    {
                              "id": "d",
                              "text": "Graph using bars."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar graph\" means Graph using bars."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar graph\" means Graph using bars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar graph** = Graph using bars.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-data-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interpret\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Highest bar."
                    },
                    {
                              "id": "b",
                              "text": "Read graph."
                    },
                    {
                              "id": "c",
                              "text": "Lowest bar."
                    },
                    {
                              "id": "d",
                              "text": "Add all."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interpret\" means Read graph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interpret\" means Read graph.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interpret** = Read graph.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

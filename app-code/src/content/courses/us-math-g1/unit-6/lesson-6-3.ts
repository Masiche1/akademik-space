import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m1-u6-lesson-6-3",
  code: "6-3",
  title: "Data and Graphs",
  goal: "I CAN collect data and make simple graphs.",
  standards: ["1.MD.C.4"],
  vocabulary: [
    { term: "Data", definition: "Information we collect." },
    { term: "Graph", definition: "A picture of data." },
    { term: "Pictograph", definition: "Graph using pictures." },
    { term: "Bar graph", definition: "Graph using bars." },
    { term: "Tally", definition: "Marks for counting." },
    { term: "Category", definition: "A group being counted." },
    { term: "Count", definition: "How many in each." },
    { term: "Compare", definition: "See which has more/less." },
  ],
  concepts: [
    {
      id: "m1-u6-data-graphs",
      title: "Data and graphs",
      skill: "Collect data, make pictographs/bar graphs, and compare categories.",
      lesson: {
        sections: [
          {
            heading: "Collecting data",
            body: "**Data** is information we collect by counting. We can organize it by **category** (like favorite fruit) and count how many in each.",
          },
          {
            heading: "Making graphs",
            body: "A **pictograph** uses pictures; a **bar graph** uses bars. Both show which category has the **most** or **least**. Compare the bars/pictures to answer questions.",
          },
        ],
        keyFormulas: [
          { name: "Graph", statement: "Count each category -> make pictograph/bar -> compare." },
        ],
        workedExample: {
          problem: "Favorite fruit: 5 chose apple, 3 chose banana, 7 chose orange. Which is most popular?",
          solution: "**Orange** — 7 is the most.",
        },
      },
      questions: [
        {
          id: "m1-u6-data-graphs-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'pictograph' uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bars"
                    },
                    {
                              "id": "b",
                              "text": "pictures to show data"
                    },
                    {
                              "id": "c",
                              "text": "numbers only"
                    },
                    {
                              "id": "d",
                              "text": "words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pictograph = pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pictograph = pictures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**pictures**",
          "commonErrors": [
                    "Confuses with bar graph."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a bar graph, the tallest bar shows...",
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
                              "text": "nothing"
                    },
                    {
                              "id": "d",
                              "text": "average"
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
          "finalAnswer": "**most**",
          "commonErrors": [
                    "Confuses with least."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Make a simple graph for this data: 4 students like cats, 6 like dogs, 2 like birds. Which animal is most popular?",
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
                                                  "Graph + compare",
                                                  "Dogs=6 most."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Graph + compare",
                                                  "Dogs=6 most."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Makes graph or describes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says dogs most popular.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**Dogs — 6 is the most**"
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Data' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a graph"
                    },
                    {
                              "id": "b",
                              "text": "information we collect"
                    },
                    {
                              "id": "c",
                              "text": "a category"
                    },
                    {
                              "id": "d",
                              "text": "a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Data = collected info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data = collected info.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**collected info**",
          "commonErrors": [
                    "Confuses with graph."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Collect data from your class on favorite color. Make a simple tally or pictograph. Which color won?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Collect + graph",
                              "statement": "Count each color, make graph, find winner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collects data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Makes graph + finds winner.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Blue won with 8 votes'**",
          "commonErrors": [
                    "No data.",
                    "No winner."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A picture of data."
                    },
                    {
                              "id": "b",
                              "text": "Information we collect."
                    },
                    {
                              "id": "c",
                              "text": "Graph using pictures."
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
                              "statement": "\"Data\" means Information we collect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information we collect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information we collect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Graph using pictures."
                    },
                    {
                              "id": "b",
                              "text": "Graph using bars."
                    },
                    {
                              "id": "c",
                              "text": "Marks for counting."
                    },
                    {
                              "id": "d",
                              "text": "A picture of data."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Graph\" means A picture of data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Graph\" means A picture of data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Graph** = A picture of data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pictograph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Graph using bars."
                    },
                    {
                              "id": "b",
                              "text": "Graph using pictures."
                    },
                    {
                              "id": "c",
                              "text": "Marks for counting."
                    },
                    {
                              "id": "d",
                              "text": "A group being counted."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pictograph\" means Graph using pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pictograph\" means Graph using pictures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pictograph** = Graph using pictures.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-data-graphs-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Marks for counting."
                    },
                    {
                              "id": "b",
                              "text": "A group being counted."
                    },
                    {
                              "id": "c",
                              "text": "How many in each."
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
      ],
    },
  ],
};

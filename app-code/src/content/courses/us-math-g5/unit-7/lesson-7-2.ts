import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m5-u7-lesson-7-2",
  code: "7-2",
  title: "Coordinate Graphs",
  goal: "I CAN plot and interpret data on coordinate graphs.",
  standards: ["5.G.A.1", "5.G.A.2"],
  vocabulary: [
    { term: "Coordinate graph", definition: "Grid for data." },
    { term: "X-axis", definition: "Horizontal." },
    { term: "Y-axis", definition: "Vertical." },
    { term: "Point", definition: "Data location." },
    { term: "Ordered pair", definition: "(x, y)." },
    { term: "Plot", definition: "Mark point." },
    { term: "Trend", definition: "Pattern." },
    { term: "Interpret", definition: "Read graph." },
  ],
  concepts: [
    {
      id: "m5-u7-coordinate-graphs",
      title: "Coordinate graphs",
      skill: "Plot data points and interpret patterns on coordinate graphs.",
      lesson: {
        sections: [
          {
            heading: "Graphing data",
            body: "A **coordinate graph** plots data as **points** (x, y). The **x-axis** often shows independent variable (e.g., time), **y-axis** shows dependent (e.g., temperature).",
          },
          {
            heading: "Interpreting",
            body: "Look for **trends**: increasing, decreasing, constant. Connect points to see patterns.",
          },
        ],
        keyFormulas: [
          { name: "Graph", statement: "(x, y) points on axes = data visualization." },
        ],
        workedExample: {
          problem: "A graph shows temperature rising from (1, 60) to (5, 80). What trend?",
          solution: "**Increasing** — temperature rises over time.",
        },
      },
      questions: [
        {
          id: "m5-u7-coordinate-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a coordinate graph, the x-axis usually shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dependent variable"
                    },
                    {
                              "id": "b",
                              "text": "independent variable"
                    },
                    {
                              "id": "c",
                              "text": "the answer"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "X = independent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "X = independent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "independent variable",
          "commonErrors": [
                    "Wrong axis."
          ]
},
        },
        {
          id: "m5-u7-coordinate-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'trend' on a graph is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a point"
                    },
                    {
                              "id": "b",
                              "text": "a pattern or direction"
                    },
                    {
                              "id": "c",
                              "text": "the axis"
                    },
                    {
                              "id": "d",
                              "text": "the grid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Trend = pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trend = pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a pattern or direction",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m5-u7-coordinate-graphs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Plot points (1,2), (2,4), (3,6), (4,8). What pattern do you see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Graph",
                              "statement": "Linear increasing pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plots points.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies pattern.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Points form a straight line going up; y = 2x pattern (increasing).**",
          "commonErrors": [
                    "Cannot plot.",
                    "No pattern."
          ]
},
        },
        {
          id: "m5-u7-coordinate-graphs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To interpret a graph, you should look for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only one point"
                    },
                    {
                              "id": "b",
                              "text": "trends and patterns"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "the colors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Trends/patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trends/patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "trends and patterns",
          "commonErrors": [
                    "Only looks at one point."
          ]
},
        },
        {
          id: "m5-u7-coordinate-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a simple coordinate graph for this data: (1, 10), (2, 15), (3, 20), (4, 25). What does the trend show?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Graph",
                              "statement": "Graph + trend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates graph.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interprets trend.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Points form increasing line; y increases by 5 each time (linear growth).**",
          "commonErrors": [
                    "Cannot create.",
                    "No interpretation."
          ]
},
        },
        {
          id: "m5-u7-coordinate-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coordinate graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Horizontal."
                    },
                    {
                              "id": "b",
                              "text": "Grid for data."
                    },
                    {
                              "id": "c",
                              "text": "Vertical."
                    },
                    {
                              "id": "d",
                              "text": "Data location."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m5-u7-coordinate-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"X-axis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vertical."
                    },
                    {
                              "id": "b",
                              "text": "Data location."
                    },
                    {
                              "id": "c",
                              "text": "(x, y)."
                    },
                    {
                              "id": "d",
                              "text": "Horizontal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"X-axis\" means Horizontal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"X-axis\" means Horizontal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**X-axis** = Horizontal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u7-coordinate-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Y-axis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data location."
                    },
                    {
                              "id": "b",
                              "text": "Vertical."
                    },
                    {
                              "id": "c",
                              "text": "(x, y)."
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
                              "statement": "\"Y-axis\" means Vertical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Y-axis\" means Vertical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Y-axis** = Vertical.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

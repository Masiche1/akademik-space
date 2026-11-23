import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m2-u6-lesson-6-3",
  code: "6-3",
  title: "Bar Graphs",
  goal: "I CAN read and make bar graphs.",
  standards: ["2.MD.D.10"],
  vocabulary: [
    { term: "Bar graph", definition: "Uses bars to show data." },
    { term: "Bar", definition: "Column showing amount." },
    { term: "Axis", definition: "Number line on graph." },
    { term: "Label", definition: "Names categories." },
    { term: "Scale", definition: "What each unit means." },
    { term: "Height", definition: "How tall bar is." },
    { term: "Compare", definition: "See which is more." },
    { term: "Data", definition: "Information shown." },
  ],
  concepts: [
    {
      id: "m2-u6-bar-graphs",
      title: "Bar graphs",
      skill: "Read and create bar graphs with labeled axes and scale.",
      lesson: {
        sections: [
          {
            heading: "Bar graphs",
            body: "A **bar graph** uses **bars** (columns) to show data. The **height** of each bar shows the amount. **Labels** name categories; the **axis** shows numbers.",
          },
          {
            heading: "Read the graph",
            body: "Find the **scale** (what each unit on the axis means), then read each bar's height to get the value.",
          },
        ],
        keyFormulas: [
          { name: "Bar graph", statement: "Bar height = amount; axis + labels = readable data." },
        ],
        workedExample: {
          problem: "A bar for 'Apples' reaches 8 on the axis. How many apples?",
          solution: "**8 apples** — the bar height shows the count.",
        },
      },
      questions: [
        {
          id: "m2-u6-bar-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a bar graph, bar height shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color"
                    },
                    {
                              "id": "b",
                              "text": "the amount"
                    },
                    {
                              "id": "c",
                              "text": "the name"
                    },
                    {
                              "id": "d",
                              "text": "the date"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Height = amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Height = amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "amount",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u6-bar-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'axis' on a graph is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a bar"
                    },
                    {
                              "id": "b",
                              "text": "the number line showing values"
                    },
                    {
                              "id": "c",
                              "text": "a label"
                    },
                    {
                              "id": "d",
                              "text": "a title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Axis = number line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Axis = number line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "number line",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "m2-u6-bar-graphs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Make a bar graph for: Red 6, Blue 9, Green 4. Label axes and show scale.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "graph",
                              "name": "Create",
                              "statement": "Bars + labels + scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates bars for each category.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Labels + scale included.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Red bar to 6, Blue to 9, Green to 4",
          "commonErrors": "Missing labels."
},
        },
        {
          id: "m2-u6-bar-graphs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "If each unit on the axis = 2 votes, and a bar reaches 5 units, how many votes?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "5 x 2 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Wrong multiplication."
          ]
},
        },
        {
          id: "m2-u6-bar-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read a bar graph: Apples bar = 7, Bananas = 4, Oranges = 9. Which has the most? How many more than the least?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "graph",
                              "name": "Read + compare",
                              "statement": "Find most + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oranges most (9).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "9 - 4 = 5 more than Bananas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Oranges most; 5 more",
          "commonErrors": "Wrong comparison."
},
        },
        {
          id: "m2-u6-bar-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Column showing amount."
                    },
                    {
                              "id": "b",
                              "text": "Uses bars to show data."
                    },
                    {
                              "id": "c",
                              "text": "Number line on graph."
                    },
                    {
                              "id": "d",
                              "text": "Names categories."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar graph\" means Uses bars to show data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar graph\" means Uses bars to show data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar graph** = Uses bars to show data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-bar-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number line on graph."
                    },
                    {
                              "id": "b",
                              "text": "Names categories."
                    },
                    {
                              "id": "c",
                              "text": "What each unit means."
                    },
                    {
                              "id": "d",
                              "text": "Column showing amount."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar\" means Column showing amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar\" means Column showing amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar** = Column showing amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-bar-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Axis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Names categories."
                    },
                    {
                              "id": "b",
                              "text": "Number line on graph."
                    },
                    {
                              "id": "c",
                              "text": "What each unit means."
                    },
                    {
                              "id": "d",
                              "text": "How tall bar is."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Axis\" means Number line on graph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Axis\" means Number line on graph.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Axis** = Number line on graph.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

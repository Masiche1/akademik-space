import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "m5-u7-lesson-7-4",
  code: "7-4",
  title: "Graph Reading",
  goal: "I CAN read and interpret various types of graphs.",
  standards: ["5.MD.B.2"],
  vocabulary: [
    { term: "Graph", definition: "Visual display of data." },
    { term: "Bar graph", definition: "Compare categories." },
    { term: "Line graph", definition: "Show change over time." },
    { term: "Picture graph", definition: "Use pictures for data." },
    { term: "Axis", definition: "Number line on graph." },
    { term: "Scale", definition: "What numbers mean." },
    { term: "Trend", definition: "Pattern over time." },
    { term: "Interpret", definition: "Read meaning." },
  ],
  concepts: [
    {
      id: "m5-u7-graph-reading",
      title: "Graph Reading",
      skill: "Read and interpret bar graphs, line graphs and picture graphs.",
      lesson: {
        sections: [
          {
            heading: "Graphs",
            body: "Bar = compare; Line = change; Picture = visual.",
          },
          {
            heading: "Interpreting",
            body: "Read values -> find patterns -> draw conclusions.",
          },
        ],
        keyFormulas: [
          { name: "Graphs", statement: "Bar + line + picture = all types" },
        ],
        workedExample: {
          problem: "A bar graph shows 5 categories with heights 3, 7, 4, 9, 6. Which is highest? Total?",
          solution: "Category 4 is highest (9). Total = 3+7+4+9+6 = 29.",
        },
      },
      questions: [
        {
          id: "m5-u7-graph-reading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bar graph is best for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "showing change over time"
                    },
                    {
                              "id": "b",
                              "text": "comparing categories"
                    },
                    {
                              "id": "c",
                              "text": "showing fractions"
                    },
                    {
                              "id": "d",
                              "text": "plotting points"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Bar graph compares categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bar graph compares categories.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "comparing categories",
          "commonErrors": [
                    "Wrong graph type."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A line graph is best for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "comparing categories"
                    },
                    {
                              "id": "b",
                              "text": "showing change over time"
                    },
                    {
                              "id": "c",
                              "text": "showing pictures"
                    },
                    {
                              "id": "d",
                              "text": "counting objects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Line graph shows change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line graph shows change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "showing change over time",
          "commonErrors": [
                    "Wrong graph type."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what a bar graph and a line graph would each show for monthly rainfall data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Graphs",
                              "statement": "Bar: compare months; Line: show trend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes bar graph.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes line graph.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Bar graph: compare rainfall each month. Line graph: show rainfall trend over the year.**",
          "commonErrors": [
                    "Cannot describe.",
                    "Confuses graph types."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The axis on a graph is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "the number line"
                    },
                    {
                              "id": "c",
                              "text": "the legend"
                    },
                    {
                              "id": "d",
                              "text": "the color"
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
          "finalAnswer": "the number line",
          "commonErrors": [
                    "Wrong part."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a simple bar graph for data: apples=8, oranges=5, bananas=12. Which fruit is most popular?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Graphs",
                              "statement": "Bananas most popular."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates graph.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies most popular.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Bananas (12) are most popular; apples (8) second; oranges (5) least.**",
          "commonErrors": [
                    "Cannot create.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Compare categories."
                    },
                    {
                              "id": "b",
                              "text": "Visual display of data."
                    },
                    {
                              "id": "c",
                              "text": "Show change over time."
                    },
                    {
                              "id": "d",
                              "text": "Use pictures for data."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Graph\" means Visual display of data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Graph\" means Visual display of data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Graph** = Visual display of data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Show change over time."
                    },
                    {
                              "id": "b",
                              "text": "Use pictures for data."
                    },
                    {
                              "id": "c",
                              "text": "Number line on graph."
                    },
                    {
                              "id": "d",
                              "text": "Compare categories."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar graph\" means Compare categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar graph\" means Compare categories.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar graph** = Compare categories.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u7-graph-reading-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use pictures for data."
                    },
                    {
                              "id": "b",
                              "text": "Show change over time."
                    },
                    {
                              "id": "c",
                              "text": "Number line on graph."
                    },
                    {
                              "id": "d",
                              "text": "What numbers mean."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line graph\" means Show change over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line graph\" means Show change over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line graph** = Show change over time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

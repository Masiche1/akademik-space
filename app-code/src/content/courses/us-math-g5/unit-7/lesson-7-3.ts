import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m5-u7-lesson-7-3",
  code: "7-3",
  title: "Data Interpretation",
  goal: "I CAN interpret data from graphs and tables.",
  standards: ["5.MD.B.2"],
  vocabulary: [
    { term: "Data", definition: "Information." },
    { term: "Graph", definition: "Visual display." },
    { term: "Table", definition: "Organized data." },
    { term: "Interpret", definition: "Read meaning." },
    { term: "Compare", definition: "See differences." },
    { term: "Analyze", definition: "Study carefully." },
    { term: "Conclusion", definition: "What it shows." },
    { term: "Evidence", definition: "Supporting data." },
  ],
  concepts: [
    {
      id: "m5-u7-data-interpretation",
      title: "Data interpretation",
      skill: "Interpret data from line plots, graphs and tables to draw conclusions.",
      lesson: {
        sections: [
          {
            heading: "Read the data",
            body: "**Interpret** means figuring out what the data **means** — not just reading numbers, but understanding **patterns**, **comparisons**, and **conclusions**.",
          },
          {
            heading: "Example",
            body: "A line plot shows most students scored 7/10 on a quiz; a few scored 10/10. Conclusion: most students did well but some need help.",
          },
        ],
        keyFormulas: [
          { name: "Interpret", statement: "Data -> patterns -> conclusions." },
        ],
        workedExample: {
          problem: "A graph shows sales increasing each month. What can you conclude?",
          solution: "Sales are **growing** — the business is improving.",
        },
      },
      questions: [
        {
          id: "m5-u7-data-interpretation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Interpreting data' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reading numbers"
                    },
                    {
                              "id": "b",
                              "text": "understanding what the data means"
                    },
                    {
                              "id": "c",
                              "text": "counting"
                    },
                    {
                              "id": "d",
                              "text": "drawing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Understand meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand meaning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understanding what the data means",
          "commonErrors": [
                    "Just reads numbers."
          ]
},
        },
        {
          id: "m5-u7-data-interpretation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'conclusion' from data is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a guess"
                    },
                    {
                              "id": "b",
                              "text": "what the data shows"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "an opinion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Conclusion = what data shows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conclusion = what data shows.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "what the data shows",
          "commonErrors": [
                    "Guesses instead."
          ]
},
        },
        {
          id: "m5-u7-data-interpretation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Look at a line plot or graph. State one conclusion and cite the data that supports it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interpret",
                              "statement": "Conclusion + data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites data.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Most students scored 8/10 (mode); few scored below 5 (outliers).'**",
          "commonErrors": [
                    "No conclusion.",
                    "No data."
          ]
},
        },
        {
          id: "m5-u7-data-interpretation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When interpreting data, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignore patterns"
                    },
                    {
                              "id": "b",
                              "text": "look for trends and comparisons"
                    },
                    {
                              "id": "c",
                              "text": "only read one point"
                    },
                    {
                              "id": "d",
                              "text": "guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Look for trends/comparisons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Look for trends/comparisons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "look for trends and comparisons",
          "commonErrors": [
                    "Ignores patterns."
          ]
},
        },
        {
          id: "m5-u7-data-interpretation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two data sets. Which shows more variation? Explain using specific values.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interpret",
                              "statement": "Comparison + variation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares data sets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains variation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Set A: 5,6,7,8,9 (low variation); Set B: 1,5,9,3,7 (high variation).'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No variation explanation."
          ]
},
        },
        {
          id: "m5-u7-data-interpretation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visual display."
                    },
                    {
                              "id": "b",
                              "text": "Information."
                    },
                    {
                              "id": "c",
                              "text": "Organized data."
                    },
                    {
                              "id": "d",
                              "text": "Read meaning."
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
          id: "m5-u7-data-interpretation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Organized data."
                    },
                    {
                              "id": "b",
                              "text": "Read meaning."
                    },
                    {
                              "id": "c",
                              "text": "See differences."
                    },
                    {
                              "id": "d",
                              "text": "Visual display."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Graph\" means Visual display."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Graph\" means Visual display.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Graph** = Visual display.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u7-data-interpretation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Table\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Read meaning."
                    },
                    {
                              "id": "b",
                              "text": "Organized data."
                    },
                    {
                              "id": "c",
                              "text": "See differences."
                    },
                    {
                              "id": "d",
                              "text": "Study carefully."
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
      ],
    },
  ],
};

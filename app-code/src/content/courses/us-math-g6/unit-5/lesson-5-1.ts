import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m6-u5-lesson-5-1",
  code: "5-1",
  title: "Data Displays",
  goal: "I CAN create and interpret data displays.",
  standards: ["6.SP.A.1"],
  vocabulary: [
    { term: "Data", definition: "Information." },
    { term: "Display", definition: "Visual representation." },
    { term: "Dot plot", definition: "Dots on line." },
    { term: "Histogram", definition: "Bars for ranges." },
    { term: "Box plot", definition: "Five-number summary." },
    { term: "Frequency", definition: "How many times." },
    { term: "Outlier", definition: "Unusual value." },
    { term: "Distribution", definition: "How data spreads." },
  ],
  concepts: [
    {
      id: "m6-u5-data-displays",
      title: "Data displays",
      skill: "Create and interpret dot plots, histograms and box plots.",
      lesson: {
        sections: [
          {
            heading: "Display types",
            body: "**Dot plot**: dots above number line. **Histogram**: bars for ranges. **Box plot**: shows median, quartiles, min/max.",
          },
          {
            heading: "Interpreting",
            body: "Look for **center** (where most data is), **spread** (how spread out), and **outliers** (unusual values).",
          },
        ],
        keyFormulas: [
          { name: "Displays", statement: "Dot + histogram + box = data visualization." },
        ],
        workedExample: {
          problem: "A dot plot shows most dots at 5-7. What does that tell you?",
          solution: "**Most data values are between 5 and 7 — data is clustered there.**",
        },
      },
      questions: [
        {
          id: "m6-u5-data-displays-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'dot plot' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bars"
                    },
                    {
                              "id": "b",
                              "text": "dots above a number line"
                    },
                    {
                              "id": "c",
                              "text": "boxes"
                    },
                    {
                              "id": "d",
                              "text": "pie slices"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dots on number line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dots on number line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "dots above a number line",
          "commonErrors": [
                    "Confuses with other displays."
          ]
},
        },
        {
          id: "m6-u5-data-displays-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'box plot' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only mean"
                    },
                    {
                              "id": "b",
                              "text": "median, quartiles, min/max"
                    },
                    {
                              "id": "c",
                              "text": "only dots"
                    },
                    {
                              "id": "d",
                              "text": "only bars"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Median, quartiles, min/max."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Median, quartiles, min/max.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "median, quartiles, min/max",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "m6-u5-data-displays-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Create a dot plot for data: 3, 5, 5, 7, 7, 7, 9. Describe the distribution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Data display",
                              "statement": "Plot + description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates plot.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes distribution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Dots at 3,5,7,9; most at 7; data clustered 5-7.**",
          "commonErrors": [
                    "Cannot create.",
                    "No description."
          ]
},
        },
        {
          id: "m6-u5-data-displays-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'outlier' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "typical value"
                    },
                    {
                              "id": "b",
                              "text": "unusual/extreme value"
                    },
                    {
                              "id": "c",
                              "text": "median"
                    },
                    {
                              "id": "d",
                              "text": "mean"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Unusual value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unusual value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "unusual/extreme value",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u5-data-displays-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a dot plot and histogram. When would you use each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Data display",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says when to use.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Dot plot: small data sets, exact values; Histogram: larger sets, ranges.**",
          "commonErrors": [
                    "Cannot compare.",
                    "No when-to-use."
          ]
},
        },
        {
          id: "m6-u5-data-displays-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visual representation."
                    },
                    {
                              "id": "b",
                              "text": "Information."
                    },
                    {
                              "id": "c",
                              "text": "Dots on line."
                    },
                    {
                              "id": "d",
                              "text": "Bars for ranges."
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
          id: "m6-u5-data-displays-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Display\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dots on line."
                    },
                    {
                              "id": "b",
                              "text": "Bars for ranges."
                    },
                    {
                              "id": "c",
                              "text": "Five-number summary."
                    },
                    {
                              "id": "d",
                              "text": "Visual representation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Display\" means Visual representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Display\" means Visual representation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Display** = Visual representation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-data-displays-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dot plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bars for ranges."
                    },
                    {
                              "id": "b",
                              "text": "Dots on line."
                    },
                    {
                              "id": "c",
                              "text": "Five-number summary."
                    },
                    {
                              "id": "d",
                              "text": "How many times."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dot plot\" means Dots on line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dot plot\" means Dots on line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dot plot** = Dots on line.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

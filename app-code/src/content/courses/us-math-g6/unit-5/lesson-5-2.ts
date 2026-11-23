import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m6-u5-lesson-5-2",
  code: "5-2",
  title: "Measures of Center",
  goal: "I CAN find mean, median and mode.",
  standards: ["6.SP.A.3"],
  vocabulary: [
    { term: "Mean", definition: "Average." },
    { term: "Median", definition: "Middle value." },
    { term: "Mode", definition: "Most frequent." },
    { term: "Center", definition: "Typical value." },
    { term: "Sum", definition: "Total." },
    { term: "Count", definition: "How many." },
    { term: "Sort", definition: "Order." },
    { term: "Outlier", definition: "Affects mean." },
  ],
  concepts: [
    {
      id: "m6-u5-measures-center",
      title: "Measures of center",
      skill: "Find mean, median and mode of data sets.",
      lesson: {
        sections: [
          {
            heading: "Three measures",
            body: "**Mean** = sum/count (average). **Median** = middle value when sorted. **Mode** = most frequent value.",
          },
          {
            heading: "Choosing",
            body: "Mean is affected by **outliers**; median is more resistant. Mode shows most common.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum / count." },
          { name: "Median", statement: "Middle value sorted." },
          { name: "Mode", statement: "Most frequent." },
        ],
        workedExample: {
          problem: "Find mean, median, mode of: 4, 7, 7, 9, 10.",
          solution: "Mean = 37/5 = 7.4; Median = 7; Mode = 7.",
        },
      },
      questions: [
        {
          id: "m6-u5-measures-center-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'mean' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "middle value"
                    },
                    {
                              "id": "b",
                              "text": "sum divided by count"
                    },
                    {
                              "id": "c",
                              "text": "most frequent"
                    },
                    {
                              "id": "d",
                              "text": "range"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sum/count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sum/count.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "sum divided by count",
          "commonErrors": [
                    "Confuses with median."
          ]
},
        },
        {
          id: "m6-u5-measures-center-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'median' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "average"
                    },
                    {
                              "id": "b",
                              "text": "middle value when sorted"
                    },
                    {
                              "id": "c",
                              "text": "most frequent"
                    },
                    {
                              "id": "d",
                              "text": "largest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Middle value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "middle value when sorted",
          "commonErrors": [
                    "Confuses with mean."
          ]
},
        },
        {
          id: "m6-u5-measures-center-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find mean, median and mode of: 2, 4, 4, 6, 8, 10, 10.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Center",
                              "statement": "Mean 6.29, median 6, mode 4&10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Mean = 44/7 ≈ 6.3; Median = 6; Mode = 4 and 10 (bimodal).**",
          "commonErrors": [
                    "Wrong values.",
                    "Missing measures."
          ]
},
        },
        {
          id: "m6-u5-measures-center-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'mode' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "average"
                    },
                    {
                              "id": "b",
                              "text": "most frequent value"
                    },
                    {
                              "id": "c",
                              "text": "middle"
                    },
                    {
                              "id": "d",
                              "text": "range"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Most frequent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most frequent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "most frequent value",
          "commonErrors": [
                    "Confuses with other measures."
          ]
},
        },
        {
          id: "m6-u5-measures-center-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how an outlier affects the mean but not the median. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Center",
                              "statement": "Outlier effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains mean effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains median resistance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Outlier pulls mean toward it; median stays middle — more resistant.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "m6-u5-measures-center-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mean\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Middle value."
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
                              "text": "Typical value."
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
          id: "m6-u5-measures-center-q7",
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
                              "text": "Typical value."
                    },
                    {
                              "id": "c",
                              "text": "Total."
                    },
                    {
                              "id": "d",
                              "text": "Middle value."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Median\" means Middle value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Median\" means Middle value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Median** = Middle value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-measures-center-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mode\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Typical value."
                    },
                    {
                              "id": "b",
                              "text": "Most frequent."
                    },
                    {
                              "id": "c",
                              "text": "Total."
                    },
                    {
                              "id": "d",
                              "text": "How many."
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

import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m6-u5-lesson-5-3",
  code: "5-3",
  title: "Measures of Spread",
  goal: "I CAN find range, IQR and interpret spread.",
  standards: ["6.SP.A.3"],
  vocabulary: [
    { term: "Spread", definition: "How data varies." },
    { term: "Range", definition: "Max - min." },
    { term: "IQR", definition: "Middle 50%." },
    { term: "Quartile", definition: "25% mark." },
    { term: "Min", definition: "Smallest." },
    { term: "Max", definition: "Largest." },
    { term: "Variability", definition: "How spread." },
    { term: "Interpret", definition: "What it means." },
  ],
  concepts: [
    {
      id: "m6-u5-measures-spread",
      title: "Measures of spread",
      skill: "Find range, IQR and interpret data spread.",
      lesson: {
        sections: [
          {
            heading: "Range",
            body: "**Range** = max - min. Simple but affected by outliers.",
          },
          {
            heading: "IQR",
            body: "**Interquartile range** = Q3 - Q1 (middle 50%). More resistant to outliers.",
          },
        ],
        keyFormulas: [
          { name: "Range", statement: "Max - min." },
          { name: "IQR", statement: "Q3 - Q1." },
        ],
        workedExample: {
          problem: "Find range and IQR of: 2, 4, 5, 7, 9, 12, 15.",
          solution: "Range = 15-2 = 13; Q1=4.5, Q3=12, IQR=7.5.",
        },
      },
      questions: [
        {
          id: "m6-u5-measures-spread-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'range' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "middle"
                    },
                    {
                              "id": "b",
                              "text": "max - min"
                    },
                    {
                              "id": "c",
                              "text": "average"
                    },
                    {
                              "id": "d",
                              "text": "mode"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Max - min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Max - min.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "max - min",
          "commonErrors": [
                    "Wrong measure."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'IQR' measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "total spread"
                    },
                    {
                              "id": "b",
                              "text": "middle 50% of data"
                    },
                    {
                              "id": "c",
                              "text": "mean"
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
                              "statement": "Middle 50%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle 50%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "middle 50% of data",
          "commonErrors": [
                    "Wrong measure."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find range and IQR of: 3, 5, 6, 8, 10, 12, 14, 16.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spread",
                              "statement": "Range 13, IQR ~7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds range.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds IQR.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Range = 16-3 = 13; Q1≈5.5, Q3≈13, IQR≈7.5.**",
          "commonErrors": [
                    "Wrong values.",
                    "Missing measures."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "IQR is better than range when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "always"
                    },
                    {
                              "id": "b",
                              "text": "data has outliers"
                    },
                    {
                              "id": "c",
                              "text": "never"
                    },
                    {
                              "id": "d",
                              "text": "data is small"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Data has outliers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data has outliers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "data has outliers",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain what spread tells you about a data set that center doesn't.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spread",
                              "statement": "Spread explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains spread.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares to center.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Spread shows variability — how much data differs; center only shows typical value.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No comparison."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spread\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Max - min."
                    },
                    {
                              "id": "b",
                              "text": "How data varies."
                    },
                    {
                              "id": "c",
                              "text": "Middle 50%."
                    },
                    {
                              "id": "d",
                              "text": "25% mark."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spread\" means How data varies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spread\" means How data varies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spread** = How data varies.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Range\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Middle 50%."
                    },
                    {
                              "id": "b",
                              "text": "25% mark."
                    },
                    {
                              "id": "c",
                              "text": "Smallest."
                    },
                    {
                              "id": "d",
                              "text": "Max - min."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Range\" means Max - min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Range\" means Max - min.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Range** = Max - min.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u5-measures-spread-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"IQR\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "25% mark."
                    },
                    {
                              "id": "b",
                              "text": "Middle 50%."
                    },
                    {
                              "id": "c",
                              "text": "Smallest."
                    },
                    {
                              "id": "d",
                              "text": "Largest."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"IQR\" means Middle 50%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"IQR\" means Middle 50%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**IQR** = Middle 50%.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "stats-u1-lesson-1-2",
  code: "1-2",
  title: "Measures of Center and Spread",
  goal: "I CAN calculate and compare mean, median, IQR and standard deviation.",
  standards: ["S-ID.A.2", "S-ID.A.3"],
  vocabulary: [
    { term: "Mean", definition: "Sum / count." },
    { term: "Median", definition: "Middle value." },
    { term: "IQR", definition: "Q3 - Q1." },
    { term: "Standard deviation", definition: "Typical distance from mean." },
    { term: "Five-number summary", definition: "Min, Q1, med, Q3, max." },
  ],
  concepts: [
    {
      id: "stats-u1-measures-center-spread",
      title: "Center and spread",
      skill: "Calculate and interpret measures of center and spread.",
      lesson: {
        sections: [
          {
            heading: "Measures of center",
            body: "Mean = sum/count (affected by outliers). Median = middle value when sorted (resistant to outliers). For skewed data, median is usually the better measure of center.",
          },
          {
            heading: "Measures of spread",
            body: "Range = max - min (sensitive to outliers). IQR = Q3 - Q1 (middle 50%, resistant). Standard deviation measures typical distance from mean — larger SD = more spread. Comparing datasets: look at both center and spread.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum/count." },
          { name: "Median", statement: "Middle." },
          { name: "IQR", statement: "Q3 - Q1." },
          { name: "SD", statement: "Typical distance." },
        ],
        workedExample: {
          problem: "Data: 2, 4, 5, 5, 6, 9. Find median and IQR.",
          solution: "Sorted: 2,4,5,5,6,9. Median = (5+5)/2 = 5. Q1 = 4, Q3 = 6, IQR = 2.",
        },
      },
      questions: [
        {
          id: "stats-u1-measures-center-spread-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The median is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sum/count"
                    },
                    {
                              "id": "b",
                              "text": "the middle value when sorted"
                    },
                    {
                              "id": "c",
                              "text": "the most frequent"
                    },
                    {
                              "id": "d",
                              "text": "max - min"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Median",
                              "statement": "Middle value when sorted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The median is the middle value when data is sorted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** the middle value when sorted",
          "commonErrors": [
                    "Confusing with mean."
          ]
},
        },
        {
          id: "stats-u1-measures-center-spread-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "IQR stands for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "interquartile range"
                    },
                    {
                              "id": "b",
                              "text": "internal rate"
                    },
                    {
                              "id": "c",
                              "text": "individual range"
                    },
                    {
                              "id": "d",
                              "text": "inverse ratio"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IQR",
                              "statement": "Q3 - Q1, middle 50%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IQR = interquartile range = Q3 - Q1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** interquartile range",
          "commonErrors": [
                    "Not knowing the acronym."
          ]
},
        },
        {
          id: "stats-u1-measures-center-spread-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data: 1, 3, 5, 7, 9. What is the median?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Median",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Median",
                              "statement": "Middle of 5 sorted values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Median = 5 (middle value).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Averaging all values."
          ]
},
        },
        {
          id: "stats-u1-measures-center-spread-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two datasets have the same mean but different standard deviations. What does that tell you about their spread?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SD",
                              "statement": "Typical distance from mean."
                    },
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Higher SD = more spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same mean = same average center. Higher SD means data points are typically farther from the mean — more spread out. Lower SD means clustered tighter around the mean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly interprets SD difference.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Higher SD = more spread, same center.**",
          "commonErrors": [
                    "Thinking SD affects the mean."
          ]
},
        },
      ],
    },
  ],
};

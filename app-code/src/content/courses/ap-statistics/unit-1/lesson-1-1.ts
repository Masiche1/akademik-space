import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apst-u1-lesson-1-1",
  code: "1-1",
  title: "Descriptive Statistics and Graphs",
  goal: "I CAN compute and interpret measures of center, spread, and shape.",
  standards: ["STAT-1"],
  vocabulary: [
    { term: "Mean", definition: "The arithmetic average: $\\bar{x} = \\frac{\\sum x}{n}$." },
    { term: "Median", definition: "The middle value when data are ordered — resistant to outliers." },
    { term: "Mode", definition: "The most frequent value." },
    { term: "Standard deviation", definition: "$s = \\sqrt{\\frac{\\sum(x - \\bar{x})^2}{n-1}}$ — typical distance from the mean." },
    { term: "Five-number summary", definition: "Minimum, Q1, median, Q3, maximum — basis of boxplots." },
  ],
  concepts: [
    {
      id: "apst-u1-descriptive-stats",
      title: "Describing distributions",
      skill: "Compute center, spread, and shape measures and choose appropriate graphs.",
      lesson: {
        sections: [
          {
            heading: "Center and spread",
            body: "The **mean** is the balancing point but is sensitive to outliers; the **median** is the middle value and resistant. **Standard deviation** measures typical deviation from the mean. A distribution's **shape** — symmetric, skewed left/right, unimodal/bimodal — determines which statistics best describe it.",
          },
          {
            heading: "Choosing displays",
            body: "Histograms show shape of quantitative data; boxplots compare groups and expose outliers via the $1.5 \\times IQR$ rule; scatterplots show association between two variables. Always note center, spread, shape, and outliers (SOCS) when describing data.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x_i}{n}$" },
          { name: "Standard deviation", statement: "$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$" },
          { name: "Outlier rule", statement: "Outside $[Q_1 - 1.5\\,IQR,\\; Q_3 + 1.5\\,IQR]$" },
        ],
        workedExample: {
          problem: "Data: $2, 4, 4, 7, 9$. Find mean and median.",
          solution: "Mean $= \\frac{2+4+4+7+9}{5} = \\frac{26}{5} = 5.2$. Ordered data's middle value is $4$ — median $= 4$.",
        },
      },
      questions: [
        {
          id: "apst-u1-descriptive-stats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which measure of center is resistant to outliers?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mean"
                    },
                    {
                              "id": "b",
                              "text": "Median"
                    },
                    {
                              "id": "c",
                              "text": "Mode"
                    },
                    {
                              "id": "d",
                              "text": "Range"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Resistance",
                              "statement": "Median depends only on position, not extreme values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The median ignores how extreme outliers are; the mean is pulled toward them.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Median",
          "commonErrors": [
                    "Thinking all averages respond equally to outliers."
          ]
},
        },
        {
          id: "apst-u1-descriptive-stats-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data: $3, 5, 5, 8, 12$. What is the median?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5$"
                    },
                    {
                              "id": "b",
                              "text": "$5.5$"
                    },
                    {
                              "id": "c",
                              "text": "$6.6$"
                    },
                    {
                              "id": "d",
                              "text": "$8$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Median",
                              "statement": "Middle value of ordered data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ordered: $3,5,5,8,12$ — the third value is $5$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Averaging the two middle values when $n$ is odd."
          ]
},
        },
        {
          id: "apst-u1-descriptive-stats-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For data $4, 6, 8, 10$, compute the mean. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Mean",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mean formula",
                              "statement": "$\\bar{x} = \\frac{4+6+8+10}{4}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\bar{x} = \\frac{28}{4} = 7$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mean $= 7$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Dividing by $n-1$ (that's for standard deviation)."
          ]
},
        },
        {
          id: "apst-u1-descriptive-stats-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A dataset has Q1 $= 10$, median $= 14$, Q3 $= 22$. (a) Compute the IQR. (b) State the outlier boundaries. (c) Is $35$ an outlier? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "IQR",
                              "statement": "$IQR = Q_3 - Q_1$."
                    },
                    {
                              "kind": "theorem",
                              "name": "Outlier rule",
                              "statement": "$1.5 \\times IQR$ fences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) $IQR = 22 - 10 = 12$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Fences: $10 - 18 = -8$ and $22 + 18 = 40$; acceptable range $[-8, 40]$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) $35 < 40$, so $35$ is NOT an outlier — it lies inside the upper fence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$IQR=12$, fences $-8$ to $40$, $35$ not an outlier",
          "commonErrors": [
                    "Comparing $35$ to Q3 instead of the upper fence."
          ]
},
        },
      ],
    },
  ],
};

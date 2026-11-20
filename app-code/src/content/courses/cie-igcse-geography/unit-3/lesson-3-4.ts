import type { Lesson } from "../../../types.ts";

export const lesson324: Lesson = {
  id: "cieigeo-u3-lesson-3-4",
  code: "3-4",
  title: "Geographical Skills: Graphical and Statistical Analysis",
  goal: "I CAN analyse geographical data using statistical techniques.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: statistical skills"],
  
  vocabulary: [
    { term: "Mean", definition: "Average value — sum ÷ count." },
    { term: "Median", definition: "Middle value when data ordered." },
    { term: "Mode", definition: "Most frequent value." },
    { term: "Range", definition: "Difference between highest and lowest." },
    { term: "Correlation", definition: "Relationship between two variables." },
    { term: "Scatter graph", definition: "Shows correlation between variables." },
  ],
  concepts: [
    {
      id: "cieigeo-u3-s4-stat",
      title: "Statistical analysis",
      skill: "Analyse geographical data statistically.",
      lesson: {
        sections: [
          {
            heading: "Central tendency",
            body: "Mean: sum ÷ count — affected by outliers. Median: middle value — resistant to outliers. Mode: most frequent — good for categorical data.",
          },
          {
            heading: "Spread",
            body: "Range: max - min. Shows variability. Standard deviation: more precise measure of spread.",
          },
          {
            heading: "Correlation",
            body: "Positive: both increase together. Negative: one increases, other decreases. No correlation: no relationship. Scatter graphs show patterns.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "sum ÷ count" },
          { name: "Median", statement: "middle value" },
          { name: "Range", statement: "max - min" },
          { name: "Correlation", statement: "variable relationship" },
        ],
        workedExample: {
          problem: "Data: 10, 15, 20, 25, 100. Calculate mean, median, range.",
          solution: "Mean = 170/5 = 34. Median = 20. Range = 100-10 = 90. Mean skewed by outlier (100).",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Average value — sum ÷ count"
                    },
                    {
                              "id": "b",
                              "text": "Middle value"
                    },
                    {
                              "id": "c",
                              "text": "Most frequent"
                    },
                    {
                              "id": "d",
                              "text": "Highest value"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mean",
                              "statement": "Average."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mean = sum ÷ count.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sum ÷ count"
},
        },
        {
          id: "cieigeo-u3-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between mean and median?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mean vs median",
                              "statement": "Average vs middle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mean = sum ÷ count; median = middle value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mean affected by outliers; median resistant.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Average vs middle value"
},
        },
        {
          id: "cieigeo-u3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is positive correlation? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Variable relationship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both variables increase together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: income and life expectancy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shown on scatter graph.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Both increase together"
},
        },
        {
          id: "cieigeo-u3-st-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define mean, median, mode, range, correlation, scatter graph. (b) What is mean? (c) What is median? (d) What is range? (e) What is positive correlation? Give example. (f) What is negative correlation? Give example. (g) Data: 5, 10, 15, 20, 25. Calculate mean, median, range. (h) Why might median be better than mean for skewed data?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Statistics",
                              "statement": "Analysis, calculation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Sum ÷ count.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Middle value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Max - min.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Both increase; e.g. income/life expectancy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) One increases, other decreases; e.g. price/demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Mean=15, median=15, range=20.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Median resistant to outliers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Statistical analysis of geographical data."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-st-notes",
      title: "Statistics — notes",
      summary: "Mean=average, median=middle, range=max-min. Correlation=variable relationship.",
      sections: [
        { heading: "Key idea", body: "Statistical measures summarise and reveal patterns in geographical data." },
        { heading: "Correlation", body: "Scatter graphs show relationships — positive, negative, or none." },
      ],
    },
  ],
};

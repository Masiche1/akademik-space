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
    {
      term: "Scatter graph",
      definition: "Shows correlation between variables.",
    },
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
          solution:
            "Mean = 170/5 = 34. Median = 20. Range = 100-10 = 90. Mean skewed by outlier (100).",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Most frequent",
              },
              {
                id: "b",
                text: "Average value — sum ÷ count",
              },
              {
                id: "c",
                text: "Middle value",
              },
              {
                id: "d",
                text: "Highest value",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mean",
                statement: "Average.",
              },
            ],
            steps: [
              {
                reasoning: "Mean = sum ÷ count.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sum ÷ count",
          },
        },
        {
          id: "cieigeo-u3-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between mean and median?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mean vs median",
                statement: "Average vs middle.",
              },
            ],
            steps: [
              {
                reasoning: "Mean = sum ÷ count; median = middle value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mean affected by outliers; median resistant.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Average vs middle value",
          },
        },
        {
          id: "cieigeo-u3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is positive correlation? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correlation",
                statement: "Variable relationship.",
              },
            ],
            steps: [
              {
                reasoning: "Both variables increase together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: income and life expectancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shown on scatter graph.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Both increase together",
          },
        },
        {
          id: "cieigeo-u3-st-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define mean, median, mode, range, correlation, scatter graph. (b) What is mean? (c) What is median? (d) What is range? (e) What is positive correlation? Give example. (f) What is negative correlation? Give example. (g) Data: 5, 10, 15, 20, 25. Calculate mean, median, range. (h) Why might median be better than mean for skewed data?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Statistics",
                statement: "Analysis, calculation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Sum ÷ count.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Middle value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Max - min.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Both increase; e.g. income/life expectancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) One increases, other decreases; e.g. price/demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Mean=15, median=15, range=20.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Median resistant to outliers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Statistical analysis of geographical data.",
          },
        },
        {
          id: "cieigeo-u3-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The mode is:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The most frequent value" },
              { "id": "b", "text": "The highest value" },
              { "id": "c", "text": "The middle value" },
              { "id": "d", "text": "The average value" }
            ],
            "correctChoiceId": "a"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Mode", "statement": "Most frequent value." }
            ],
            "steps": [
              { "reasoning": "Mode identifies the value appearing most often.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Most frequent value"
          }
        },
        {
          id: "cieigeo-u3-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the mean of 6, 9, 12, 15 and 18.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 12, "unit": "value" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Mean", "statement": "Sum ÷ count." }
            ],
            "steps": [
              { "reasoning": "60 ÷ 5 = 12.", "working": "60 / 5 = 12", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "12"
          }
        },
        {
          id: "cieigeo-u3-st-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between the mean and the range?",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Statistics", "statement": "Mean measures average; range measures spread." }
            ],
            "steps": [
              { "reasoning": "The mean is the sum divided by the count.", "marks": 1, "markCode": "M" },
              { "reasoning": "The range is the highest value minus the lowest value.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Average versus spread"
          }
        },
        {
          id: "cieigeo-u3-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of negative correlation?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "As rainfall rises, river discharge rises" },
              { "id": "b", "text": "As price rises, demand falls" },
              { "id": "c", "text": "As population rises, school numbers rise" },
              { "id": "d", "text": "As income rises, spending on food rises" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Negative correlation", "statement": "One variable increases while the other decreases." }
            ],
            "steps": [
              { "reasoning": "Price and demand move in opposite directions.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Price rises while demand falls"
          }
        },
        {
          id: "cieigeo-u3-st-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the values 8, 12, 15, 20 and 25: (a) Calculate the mean. (b) Calculate the range.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Mean", "answer": 16, "unit": "value" },
              { "label": "(b) Range", "answer": 17, "unit": "value" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Statistics", "statement": "Mean = sum ÷ count; range = max - min." }
            ],
            "steps": [
              { "reasoning": "(a) 80 ÷ 5 = 16.", "working": "80 / 5 = 16", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 25 - 8 = 17.", "working": "25 - 8 = 17", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 16 (b) 17"
          }
        },
        {
          id: "cieigeo-u3-st-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the median may be a better measure than the mean for skewed geographical data.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "principle", "name": "Central tendency", "statement": "Median resists outliers; mean is affected by them." }
            ],
            "steps": [
              { "reasoning": "The mean includes every value, so extreme values can distort it.", "marks": 1, "markCode": "M" },
              { "reasoning": "The median is the middle value and is less affected by outliers.", "marks": 1, "markCode": "M" },
              { "reasoning": "For skewed data such as income, the median better represents a typical case.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Median is resistant to outliers"
          }
        },
        {
          id: "cieigeo-u3-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Points rising from left to right on a scatter graph indicate:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "No correlation" },
              { "id": "b", "text": "Positive correlation" },
              { "id": "c", "text": "An outlier" },
              { "id": "d", "text": "Negative correlation" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Positive correlation", "statement": "Both variables increase together." }
            ],
            "steps": [
              { "reasoning": "An upward trend means both variables rise together.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Positive correlation"
          }
        },
        {
          id: "cieigeo-u3-st-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss the value of using both the mean and median when summarising geographical data.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Central tendency", "statement": "Mean and median reveal different features." }
            ],
            "steps": [
              { "reasoning": "The mean uses all values and is useful for evenly distributed data.", "marks": 1, "markCode": "M" },
              { "reasoning": "The median shows the typical middle value and resists outliers.", "marks": 1, "markCode": "M" },
              { "reasoning": "Comparing both can reveal skewness or unusual extreme values.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: using both gives a fuller picture of the data.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Mean and median together reveal distribution shape"
          }
        },
        {
          id: "cieigeo-u3-st-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For the values 10, 12, 14, 16 and 200: (a) Calculate the mean. (b) Calculate the median.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Mean", "answer": 50.4, "unit": "value", "tolerance": 0.01 },
              { "label": "(b) Median", "answer": 14, "unit": "value" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Statistics", "statement": "Mean = sum ÷ count; median = middle ordered value." }
            ],
            "steps": [
              { "reasoning": "(a) 252 ÷ 5 = 50.4.", "working": "252 / 5 = 50.4", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) Middle ordered value is 14.", "working": "10, 12, 14, 16, 200; median = 14", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 50.4 (b) 14"
          }
        },
        {
          id: "cieigeo-u3-st-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the range as a measure of data spread.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Data spread", "statement": "Range is simple but depends on extremes." }
            ],
            "steps": [
              { "reasoning": "Advantage: easy to calculate and understand.", "marks": 1, "markCode": "M" },
              { "reasoning": "Advantage: shows the full extent from lowest to highest.", "marks": 1, "markCode": "M" },
              { "reasoning": "Disadvantage: ignores all values except the two extremes.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: useful but standard deviation gives a fuller measure of spread.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Range is simple but affected by outliers"
          }
        },
        {
          id: "cieigeo-u3-st-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A scatter graph with points randomly scattered and no trend shows:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Strong negative correlation" },
              { "id": "b", "text": "No correlation" },
              { "id": "c", "text": "Strong positive correlation" },
              { "id": "d", "text": "An outlier only" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Correlation", "statement": "Patterned relationship between variables." }
            ],
            "steps": [
              { "reasoning": "Random scatter means no clear relationship.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "No correlation"
          }
        },
        {
          id: "cieigeo-u3-st-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define mean, median, mode and range. (b) Calculate the mean of 4, 8, 12, 16 and 20. (c) Calculate the median of 3, 5, 8, 9 and 15. (d) Calculate the range of 7, 11, 14, 18 and 22. (e) Explain positive correlation with an example. (f) Explain negative correlation with an example. (g) Explain why median may be better for skewed data. (h) Explain how a scatter graph shows correlation.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Statistics", "statement": "Measures and correlation." }
            ],
            "steps": [
              { "reasoning": "(a) Mean = average; median = middle; mode = most frequent; range = max - min.", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 60 ÷ 5 = 12.", "marks": 1, "markCode": "M" },
              { "reasoning": "(c) Middle value is 8.", "marks": 1, "markCode": "M" },
              { "reasoning": "(d) 22 - 7 = 15.", "marks": 1, "markCode": "M" },
              { "reasoning": "(e) Both increase, e.g. income and life expectancy.", "marks": 1, "markCode": "M" },
              { "reasoning": "(f) One increases while other decreases, e.g. price and demand.", "marks": 1, "markCode": "M" },
              { "reasoning": "(g) Median is less distorted by extreme values.", "marks": 1, "markCode": "M" },
              { "reasoning": "(h) Point pattern rises, falls or scatters according to relationship.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Statistical analysis of geographical data."
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-st-notes",
      title: "Statistics — notes",
      summary:
        "Mean=average, median=middle, range=max-min. Correlation=variable relationship.",
      sections: [
        {
          heading: "Key idea",
          body: "Statistical measures summarise and reveal patterns in geographical data.",
        },
        {
          heading: "Correlation",
          body: "Scatter graphs show relationships — positive, negative, or none.",
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "stats-u1-lesson-1-1",
  code: "1-1",
  title: "Data Displays",
  goal: "I CAN choose and interpret appropriate displays for data.",
  standards: ["S-ID.A.1"],
  vocabulary: [
    { term: "Dot plot", definition: "Points on number line." },
    { term: "Histogram", definition: "Bar chart for continuous data." },
    { term: "Box plot", definition: "Five-number summary." },
    { term: "Scatterplot", definition: "Two-variable relationship." },
    { term: "Distribution", definition: "Shape of data." },
    { term: "Outlier", definition: "Value far from rest." },
  ],
  concepts: [
    {
      id: "stats-u1-data-displays",
      title: "Data displays",
      skill: "Choose and interpret appropriate data displays.",
      lesson: {
        sections: [
          {
            heading: "Choosing displays",
            body: "Dot plots and histograms show distributions of one variable. Box plots summarize spread via quartiles. Scatterplots reveal relationships between two variables. The right display depends on the data type and the story you want to tell.",
          },
          {
            heading: "Reading distributions",
            body: "Shape (symmetric, skewed left/right, uniform), center (median/mean) and spread (IQR, range) describe a distribution. Skewed distributions have the tail on the skew side — mean gets pulled toward the tail, median stays central.",
          },
        ],
        keyFormulas: [
          { name: "Dot plot", statement: "Points on line." },
          { name: "Histogram", statement: "Continuous data." },
          { name: "Box plot", statement: "Quartiles." },
        ],
        workedExample: {
          problem: "A histogram of test scores shows most students at 80-90 with a few at 40-50. What does this tell you?",
          solution: "The distribution is left-skewed (tail on low end) — most students scored well, few scored poorly.",
        },
      },
      questions: [
        {
          id: "stats-u1-data-displays-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A box plot displays ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "every data point"
                    },
                    {
                              "id": "b",
                              "text": "the five-number summary"
                    },
                    {
                              "id": "c",
                              "text": "only the mean"
                    },
                    {
                              "id": "d",
                              "text": "relationships between variables"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Box plot",
                              "statement": "Min, Q1, median, Q3, max."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A box plot shows the five-number summary: min, Q1, median, Q3, max.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** the five-number summary",
          "commonErrors": [
                    "Thinking it shows all points."
          ]
},
        },
        {
          id: "stats-u1-data-displays-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A distribution with a long tail on the left is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "right-skewed"
                    },
                    {
                              "id": "b",
                              "text": "left-skewed"
                    },
                    {
                              "id": "c",
                              "text": "symmetric"
                    },
                    {
                              "id": "d",
                              "text": "uniform"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Skew",
                              "statement": "Tail direction = skew direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tail on the left = left-skewed; most data concentrated on the right.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** left-skewed",
          "commonErrors": [
                    "Reversing the skew."
          ]
},
        },
        {
          id: "stats-u1-data-displays-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scatterplot shows the relationship between two variables. How many variables?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Variables",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scatterplot",
                              "statement": "Two variables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 variables.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Saying one variable."
          ]
},
        },
        {
          id: "stats-u1-data-displays-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe what a right-skewed income distribution looks like and which measure (mean or median) is higher.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Skew",
                              "statement": "Tail pulls mean."
                    },
                    {
                              "kind": "skill",
                              "name": "Center",
                              "statement": "Mean > median in right skew."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Right-skewed: most incomes cluster at lower values with a long tail of high earners. The mean is higher than the median because the high-income tail pulls it up.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly describes shape and mean/median relationship.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Right-skewed; mean > median.**",
          "commonErrors": [
                    "Saying median > mean."
          ]
},
        },
      ],
    },
  ],
};

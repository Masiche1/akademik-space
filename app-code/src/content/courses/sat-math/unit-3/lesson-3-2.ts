import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "satm-u3-lesson-3-2",
  code: "3-2",
  title: "Statistics and Data Analysis",
  goal: "I CAN interpret and calculate measures of center and spread.",
  standards: ["SAT M 3.x"],
  vocabulary: [
    { term: "Mean", definition: "Average — sum divided by count." },
    { term: "Median", definition: "Middle value when sorted." },
    { term: "Mode", definition: "Most frequent value." },
    { term: "Range", definition: "Max - min." },
    { term: "Standard deviation", definition: "Typical distance from mean." },
    { term: "Outlier", definition: "Extreme value affecting mean more than median." },
  ],
  concepts: [
    {
      id: "satm-u3-statistics",
      title: "Statistics",
      skill: "Calculate and interpret measures of center and spread.",
      lesson: {
        sections: [
          {
            heading: "Measures of center",
            body: "**Mean** (average): sum all values ÷ count — sensitive to outliers. **Median**: middle value when sorted — resistant to outliers. **Mode**: most frequent. For even count, median = average of two middle values. Choose based on data shape — skewed data → median better represents 'typical'.",
          },
          {
            heading: "Spread and outliers",
            body: "**Range** = max - min (sensitive to outliers). **Standard deviation** measures typical distance from mean — larger = more spread. Outliers affect mean and range MORE than median — a single extreme value can shift mean significantly while median stays stable.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x_i}{n}$" },
          { name: "Median", statement: "Middle value (sorted); even n → avg of two middle" },
        ],
        workedExample: {
          problem: "Data: 2, 3, 3, 5, 100. Find mean and median.",
          solution: "Mean = $(2+3+3+5+100)/5 = 113/5 = 22.6$ — skewed by outlier 100. Median = 3 (middle value) — better represents typical. The outlier demonstrates why median is preferred for skewed data.",
        },
      },
      questions: [
        {
          id: "satm-u3-statistics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The median of a data set is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the average"
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
                              "text": "the range"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Median",
                              "statement": "Middle value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Median = middle value when data is sorted — for even count, average of two middle values.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Middle value",
          "commonErrors": [
                    "Confusing with mean."
          ]
},
        },
        {
          id: "satm-u3-statistics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which measure is most affected by outliers?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Median"
                    },
                    {
                              "id": "b",
                              "text": "Mode"
                    },
                    {
                              "id": "c",
                              "text": "Mean"
                    },
                    {
                              "id": "d",
                              "text": "None equally"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Outlier sensitivity",
                              "statement": "Mean uses all values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mean uses EVERY value — one extreme value shifts it significantly; median only uses position, mode uses frequency — both resist outliers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mean",
          "commonErrors": [
                    "Thinking all measures equally affected."
          ]
},
        },
        {
          id: "satm-u3-statistics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the median of: 4, 1, 7, 3, 9, 2. (Sort first.)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Median",
                              "answer": 3.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Sort then average middle",
                              "statement": "Sorted: 1,2,3,4,7,9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorted: 1, 2, 3, 4, 7, 9. Even count (6) → median = $(3+4)/2 = 3.5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 3.5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "3.5",
          "commonErrors": [
                    "Forgetting to sort or mishandling even count."
          ]
},
        },
        {
          id: "satm-u3-statistics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A data set has mean 50, median 45. What does this suggest about the distribution?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Mean > median = right skew",
                              "statement": "Tail pulls mean up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mean (50) > median (45) suggests RIGHT SKEW — a few high values pull the mean up while median stays central; typical of income distributions where most earn moderate but few earn very high.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The gap (5 units) indicates moderate skew — larger gap = stronger skew; median better represents 'typical' person.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Real example: household income — mean income is higher than median because billionaires pull it up.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Mean > median = right skew",
          "commonErrors": [
                    "Thinking mean and median always equal."
          ]
},
        },
      ],
    },
  ],
};

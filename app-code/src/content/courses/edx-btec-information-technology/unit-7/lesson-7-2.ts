import type { Lesson } from "../../../types.ts";

export const lesson702: Lesson = {
  id: "edxbtecit-u7-lesson-7-2",
  code: "7-2",
  title: "Data Analysis and Visualisation",
  goal: "I CAN calculate descriptive statistics, choose appropriate charts and interpret data responsibly.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Descriptive statistics, data visualisation and interpretation"],
  
  vocabulary: [
    { term: "Mean", definition: "Average calculated by summing values and dividing by count." },
    { term: "Median", definition: "Middle value when data is ordered." },
    { term: "Mode", definition: "Most frequent value in a dataset." },
    { term: "Range", definition: "Difference between largest and smallest values." },
    { term: "Correlation", definition: "Relationship between two variables; does not prove causation." },
    { term: "Dashboard", definition: "Display of key metrics and visuals for monitoring performance." },
  ],
  concepts: [
    {
      id: "edxbtecit-u7-l2-statistics",
      title: "Descriptive Statistics",
      skill: "Calculate and interpret mean, median, mode, range and spread.",
      lesson: {
        sections: [
          {
            heading: "Central tendency",
            body: "Mean is sensitive to outliers; median is the middle ordered value and resists outliers; mode is most frequent. For skewed data, median often represents typical values better than mean. Choosing the right measure depends on the distribution and question.",
          },
          {
            heading: "Spread and variability",
            body: "Range = maximum - minimum. Interquartile range measures spread of the middle 50%. Standard deviation measures average distance from the mean. Larger spread means values are more dispersed; small spread means values cluster closely.",
          },
          {
            heading: "Interpretation",
            body: "Statistics describe data but do not explain causes. Averages can hide important detail; always report spread and sample size. Percentages need clear denominators. Beware Simpson's paradox and misleading charts.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Mean = sum of values / number of values." },
          { name: "Median", statement: "Middle value of ordered data." },
          { name: "Range", statement: "Maximum - minimum." },
        ],
        workedExample: {
          problem: "Find mean, median and range for 4, 6, 6, 8, 10, 100.",
          solution: "Sum = 134, n = 6, mean = 22.33. Ordered middle values are 6 and 8, median = 7. Range = 100-4 = 96.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u7-l2-statistics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the mean of 4, 6, 8, 10 and 12?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "mean",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean",
                              "statement": "Sum values and divide by count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sum = 40.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mean = 40/5 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8"
},
        },
        {
          id: "edxbtecit-u7-l2-statistics-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Find the median of 2, 9, 4, 7 and 5.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Median",
                              "statement": "Order data and select the middle value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ordered values: 2, 4, 5, 7, 9.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Middle value is 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Median = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "edxbtecit-u7-l2-statistics-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the median may be more useful than the mean for house prices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Outlier resistance",
                              "statement": "Median is less affected by extreme values than mean."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A few very expensive houses raise the mean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Median remains at the middle typical price.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mean can overstate typical affordability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Median better represents typical buyer experience.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Median resists high-price outliers and better shows typical prices."
},
        },
        {
          id: "edxbtecit-u7-l2-statistics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two classes have the same mean test score but different spreads. Analyse what this means.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Variability",
                              "statement": "Spread shows how consistent results are; equal means can hide different distributions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same mean does not mean same performance distribution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Low spread means scores cluster near average.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High spread means some very high and very low scores.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Range/IQR or standard deviation would reveal the difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reporting only mean would be misleading.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Equal means can hide consistency differences; report spread too."
},
        },
        {
          id: "edxbtecit-u7-l2-statistics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "For the dataset 3, 5, 5, 8, 9, 20 calculate three statistics.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Mean.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Median.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Range.",
                    "marks": 2
          }
],
          response: {
          "type": "numeric",
          "unordered": true,
          "parts": [
                    {
                              "label": "a",
                              "answer": 8.333333,
                              "tolerance": 0.001
                    },
                    {
                              "label": "b",
                              "answer": 6.5
                    },
                    {
                              "label": "c",
                              "answer": 17
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Descriptive statistics",
                              "statement": "Mean, median and range summarise centre and spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sum = 50, n = 6, mean = 50/6 = 8.33.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Ordered middle values 5 and 8; median = 6.5.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Range = 20-3 = 17.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    }
          ],
          "finalAnswer": "mean 8.33, median 6.5, range 17"
},
        },
        {
          id: "edxbtecit-u7-l2-statistics-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A retailer reports average order value rose after a promotion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the mean alone may not prove the promotion worked.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two additional statistics to examine.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State one limitation of the analysis.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Statistical interpretation",
                              "statement": "Central tendency alone cannot establish cause or represent distribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mean can rise due to outliers or fewer small orders.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Other factors such as seasonality may explain change.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sample size and time period affect reliability.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Correlation/causation must be distinguished.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Median order value shows typical customer spend.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Range/IQR or conversion rate shows variability/impact.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Compare pre/post periods or control group.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Limitation: observational data cannot prove causation.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "External factors or data quality may confound results.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Mean alone insufficient; use median/spread/comparison and avoid causal claims."
},
        },
      ],
    },
    {
      id: "edxbtecit-u7-l2-visualisation",
      title: "Visualisation and Interpretation",
      skill: "Choose charts for data types and interpret visual insights responsibly.",
      lesson: {
        sections: [
          {
            heading: "Choosing charts",
            body: "Bar charts compare categories; line charts show trends over time; pie charts show parts of a whole but are poor for many categories; scatter plots show relationships between two variables; histograms show distributions. The chart must match the data type and the message.",
          },
          {
            heading: "Visual design",
            body: "Clear labels, consistent scales, honest axes and colour choices matter. Avoid truncated axes, 3D effects and excessive decoration that distort perception. Direct labelling can be clearer than legends. Accessibility requires sufficient contrast and text alternatives.",
          },
          {
            heading: "Interpretation and ethics",
            body: "Visualisations simplify complexity but can mislead through cherry-picked ranges, misleading scales or correlation presented as causation. Analysts should state data source, time period, sample size and uncertainty. Dashboards should highlight KPIs without overwhelming users.",
          },
        ],
        keyFormulas: [
          { name: "Chart choice", statement: "Categories→bar; time→line; parts→pie; relationship→scatter; distribution→histogram." },
          { name: "Axis honesty", statement: "Scales and ranges must not distort the data." },
          { name: "Correlation", statement: "Relationship between variables; not proof of causation." },
        ],
        workedExample: {
          problem: "Choose a chart to show monthly website visitors and the relationship between advertising spend and sales.",
          solution: "Use a line chart for monthly visitors over time and a scatter plot for spend versus sales.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u7-l2-visualisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which chart is best for showing change over time?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line chart"
                    },
                    {
                              "id": "b",
                              "text": "Pie chart"
                    },
                    {
                              "id": "c",
                              "text": "Org chart"
                    },
                    {
                              "id": "d",
                              "text": "Flowchart"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Chart choice",
                              "statement": "Time-series trends are best shown by line charts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line charts display change over continuous time.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Line chart"
},
        },
        {
          id: "edxbtecit-u7-l2-visualisation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three chart types and one suitable use for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Visualisation",
                              "statement": "Chart type should match data structure and message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bar chart compares categories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Line chart shows trends over time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Scatter plot shows relationship between two variables.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bar=categories, line=time, scatter=relationship."
},
        },
        {
          id: "edxbtecit-u7-l2-visualisation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a truncated y-axis can mislead readers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Axis honesty",
                              "statement": "Axis ranges affect perceived magnitude of differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Truncating axis exaggerates small differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bars may appear dramatically different when values are close.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Readers may draw false conclusions about size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Honest charts start at zero or explain exceptions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Truncated axes exaggerate differences; use honest scales."
},
        },
        {
          id: "edxbtecit-u7-l2-visualisation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why correlation does not prove causation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Correlation vs causation",
                              "statement": "Variables may move together due to a third factor or coincidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two variables can correlate without one causing the other.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A hidden third variable may influence both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Direction may be reversed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Random coincidence can produce apparent patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Causation needs stronger evidence such as controlled experiments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Correlation shows association only; causation needs controlled evidence."
},
        },
        {
          id: "edxbtecit-u7-l2-visualisation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design visuals for a quarterly sales dashboard.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose a chart for sales by product category.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Choose a chart for monthly revenue trend.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one KPI and one caution for interpretation.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dashboard design",
                              "statement": "Charts and KPIs should match the decision they support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bar chart for category comparison.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Line chart for monthly trend.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "KPI example: revenue growth or conversion rate.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Caution: seasonality or missing data may distort trend.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Bar for categories, line for trend; KPI plus contextual caution."
},
        },
        {
          id: "edxbtecit-u7-l2-visualisation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A report claims 'ice cream sales cause drowning'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the likely confounding variable.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two ways the visualisation could be improved.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State how the claim should be worded responsibly.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Responsible reporting",
                              "statement": "Correlation and confounding must be explained before causal claims."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hot weather increases both ice cream sales and swimming.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "More swimming increases drowning incidents.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Weather is the likely third variable.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Label axes, units and time period clearly.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Use honest scale and avoid implying causation.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Add context such as temperature or beach visits.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Report association, not cause.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Mention confounding and uncertainty.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "State data source and period.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Recommend further evidence before policy claims.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Weather confounds; honest labels/context; report correlation with uncertainty."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u7-l2-notes",
      title: "Analysis and visualisation — notes",
      summary: "Use mean/median/range to describe data; choose charts by data type; label honestly and avoid correlation-causation claims.",
      sections: [
        { heading: "Statistics", body: "Mean averages all values; median resists outliers; range/IQR show spread." },
        { heading: "Charts", body: "Bar=categories, line=time, scatter=relationship, histogram=distribution." },
        { heading: "Ethics", body: "Honest axes, context and careful wording prevent misleading insights." },
      ],
    },
  ],
};

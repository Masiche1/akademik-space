import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edm10-u7-lesson-7-1",
  code: "7-1",
  title: "Box Plots and Comparing Distributions",
  goal: "I CAN construct and interpret box plots, and compare two distributions using median, interquartile range and spread.",
  standards: ["4MA1 8.5H", "4MA1 8.6H"],
  
  vocabulary: [
    { term: "Five-number summary", definition: "Minimum, lower quartile, median, upper quartile and maximum of a data set." },
    { term: "Box plot", definition: "A diagram showing the five-number summary: a box from Q1 to Q3 with a line at the median and whiskers to the extremes." },
    { term: "Lower quartile (Q1)", definition: "The value below which 25% of the data lie." },
    { term: "Upper quartile (Q3)", definition: "The value below which 75% of the data lie." },
    { term: "Interquartile range", definition: "Q3 minus Q1; the spread of the middle half of the data." },
    { term: "Skew", definition: "Asymmetry of a distribution: a longer upper whisker suggests positive skew, a longer lower whisker negative skew." },
  ],
  concepts: [
    {
      id: "edm10-u7-box-plots",
      title: "Box plots",
      skill: "Find quartiles from ordered data and interpret box plots.",
      lesson: {
        sections: [
          {
            heading: "The five-number summary",
            body: "Order the data first. The median is the middle value (average of the two middle values for even $n$). The lower quartile is the median of the lower half and the upper quartile is the median of the upper half. The five-number summary is minimum, Q1, median, Q3, maximum.",
          },
          {
            heading: "Reading a box plot",
            body: "The box runs from Q1 to Q3 and contains the middle 50% of the data. The line inside the box is the median. The whiskers extend to the minimum and maximum (or to the most extreme values within $1.5\\times\\text{IQR}$ of the quartiles, with outliers plotted separately). The IQR is the width of the box.",
          },
          {
            heading: "Interpreting values",
            body: "The range is maximum minus minimum. Exactly 50% of values lie between Q1 and Q3, 25% below Q1 and 25% above Q3. A median closer to Q1 than Q3 suggests the data are skewed towards higher values within the middle half.",
          },
        ],
        keyFormulas: [
          { name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$" },
          { name: "Range", statement: "$\\text{Range}=\\text{max}-\\text{min}$" },
          { name: "Proportion in the box", statement: "$50\\%$ of values lie between Q1 and Q3" },
        ],
        workedExample: {
          problem: "For the data $3, 5, 7, 8, 9, 12, 15, 18, 20, 22$, find the median and IQR.",
          solution: "Median $=\\frac{9+12}{2}=10.5$. Lower half $3,5,7,8,9$ gives Q1 $=7$; upper half $12,15,18,20,22$ gives Q3 $=18$. IQR $=18-7=11$.",
        },
      },
      questions: [
        {
          id: "edm10-u7-boxplot-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 1,
          stem: "In a box plot, what does the box represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The range from minimum to maximum"
                    },
                    {
                              "id": "b",
                              "text": "The interquartile range, from the lower to the upper quartile"
                    },
                    {
                              "id": "c",
                              "text": "The mean and standard deviation"
                    },
                    {
                              "id": "d",
                              "text": "The middle two values only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Box plot",
                              "statement": "The box spans Q1 to Q3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The box edges are the quartiles.",
                              "working": "Q_1 \\text{ to } Q_3",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** The interquartile range",
          "commonErrors": [
                    "Confusing the box (IQR) with the whiskers (range)."
          ]
},
        },
        {
          id: "edm10-u7-boxplot-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "A data set has minimum $3$, lower quartile $7$, median $10$, upper quartile $15$ and maximum $22$. Calculate the interquartile range.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "IQR",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Interquartile range",
                              "statement": "$\\text{IQR}=Q_3-Q_1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract the quartiles.",
                              "working": "15-7",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "8",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Subtracting the median from the maximum instead."
          ]
},
        },
        {
          id: "edm10-u7-boxplot-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 5,
          stem: "The data $4, 6, 8, 10, 12, 14, 16, 18, 20, 24$ are recorded.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the median of the data.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the interquartile range of the data.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Median and quartiles",
                              "statement": "Median is the middle of the ordered data; quartiles are medians of the halves."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "There are 10 values, so the median is the average of the 5th and 6th.",
                              "working": "\\frac{12+14}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "13",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lower half $4,6,8,10,12$ has median 8; upper half $14,16,18,20,24$ has median 18.",
                              "working": "Q_1=8,\\ Q_3=18",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract for the IQR.",
                              "working": "18-8=10",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "10",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $13$ (b) IQR $=10$",
          "commonErrors": [
                    "Including the median in both halves when $n$ is even.",
                    "Using the range $24-4=20$ instead of the IQR."
          ]
},
        },
        {
          id: "edm10-u7-boxplot-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "A box plot for the times taken by 60 students to complete a puzzle shows: minimum $5$ minutes, lower quartile $10$, median $15$, upper quartile $22$, maximum $30$ minutes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the interquartile range.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the range.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "What percentage of students took between 10 and 22 minutes?",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "IQR and range",
                              "statement": "$\\text{IQR}=Q_3-Q_1$; $\\text{range}=\\text{max}-\\text{min}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Subtract the quartiles.",
                              "working": "22-10=12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "12\\text{ minutes}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract extremes.",
                              "working": "30-5=25",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The box contains the middle 50% of the data.",
                              "working": "50\\%",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the percentage.",
                              "working": "50\\%",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $12$ minutes (b) $25$ minutes (c) $50\\%$",
          "commonErrors": [
                    "In (c) answering 25% or 75% instead of the middle half."
          ]
},
        },
        {
          id: "edm10-u7-boxplot-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Two classes sat the same test. Their box plots are described below.\n\nClass A: minimum $20$, Q1 $30$, median $45$, Q3 $55$, maximum $70$.\nClass B: minimum $10$, Q1 $25$, median $40$, Q3 $60$, maximum $75$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Median",
                              "statement": "The median indicates the typical value."
                    },
                    {
                              "kind": "property",
                              "name": "IQR",
                              "statement": "The IQR measures consistency of the middle half."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare medians: Class A median 45 is higher than Class B median 40, so A performed better on average.",
                              "working": "45>40",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "IQR of A: $55-30=25$; IQR of B: $60-25=35$.",
                              "working": "\\text{IQR}_A=25,\\ \\text{IQR}_B=35",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A's smaller IQR means more consistent results.",
                              "working": "25<35",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Ranges: A $=50$, B $=65$, so B has the wider overall spread.",
                              "working": "\\text{range}_A=50,\\ \\text{range}_B=65",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conclude: A has higher typical scores and is more consistent.",
                              "working": "\\text{A higher median, smaller IQR}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Class A has the higher median (45 vs 40) and smaller IQR (25 vs 35), so A performed better and more consistently.",
          "commonErrors": [
                    "Comparing only the ranges.",
                    "Saying B is better because its maximum is higher."
          ]
},
        },
        {
          id: "edm10-u7-boxplot-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "The ordered data $3, 5, 6, 8, 9, 11, 13, 15, 17, 19, 21$ were collected from a survey.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the median, lower quartile and upper quartile of the data.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Calculate the interquartile range.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the range.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Describe how a box plot for this data would look.",
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
                              "name": "Quartiles",
                              "statement": "Median of the whole set; quartiles are medians of the lower and upper halves (excluding the median for odd $n$)."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "There are 11 values; the median is the 6th value.",
                              "working": "\\text{median}=11",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lower half $3,5,6,8,9$ has median 6; upper half $13,15,17,19,21$ has median 17.",
                              "working": "Q_1=6,\\ Q_3=17",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State all three.",
                              "working": "11,\\ 6,\\ 17",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract the quartiles.",
                              "working": "17-6=11",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the IQR.",
                              "working": "11",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Subtract extremes.",
                              "working": "21-3=18",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Box from 6 to 17, median line at 11, whiskers to 3 and 21.",
                              "working": "\\text{box }[6,17],\\ \\text{median }11,\\ \\text{whiskers }3,21",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "State the description.",
                              "working": "\\text{as described}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) median $11$, Q1 $6$, Q3 $17$ (b) IQR $11$ (c) range $18$ (d) box $6$–$17$, median line at $11$, whiskers to $3$ and $21$",
          "commonErrors": [
                    "Including the median 11 in both halves, giving Q1 $=8$ and Q3 $=15$."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u7-comparing-distributions",
      title: "Comparing distributions",
      skill: "Compare two data sets using medians, interquartile ranges, ranges and skew.",
      lesson: {
        sections: [
          {
            heading: "What to compare",
            body: "To compare two distributions, comment on: the median (typical value), the IQR (consistency of the middle half), the range (overall spread including extremes), and the skew (position of the median within the box and whisker lengths).",
          },
          {
            heading: "Interpreting skew",
            body: "If the median is closer to Q1, the middle half is skewed towards higher values. A long upper whisker suggests a few high outliers (positive skew); a long lower whisker suggests low outliers (negative skew).",
          },
          {
            heading: "Context matters",
            body: "Always relate the statistics back to the situation. 'Class A scored higher on average and more consistently' is a complete comparison; quoting numbers without interpretation loses marks.",
          },
        ],
        keyFormulas: [
          { name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$" },
          { name: "Range", statement: "$\\text{max}-\\text{min}$" },
          { name: "Comparison checklist", statement: "median, IQR, range, skew" },
        ],
        workedExample: {
          problem: "Set P: median 20, IQR 15. Set Q: median 25, IQR 8. Compare the sets.",
          solution: "Q has the higher median (25 vs 20) so higher typical values. Q's smaller IQR (8 vs 15) means Q is more consistent.",
        },
      },
      questions: [
        {
          id: "edm10-u7-compare-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 1,
          stem: "The interquartile range is best described as a measure of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the spread of the middle half of the data"
                    },
                    {
                              "id": "b",
                              "text": "the full spread of all the data"
                    },
                    {
                              "id": "c",
                              "text": "the average value"
                    },
                    {
                              "id": "d",
                              "text": "the number of data points"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interquartile range",
                              "statement": "$Q_3-Q_1$, the spread of the middle 50%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IQR measures the middle half.",
                              "working": "Q_3-Q_1",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** The spread of the middle half",
          "commonErrors": [
                    "Confusing IQR with range."
          ]
},
        },
        {
          id: "edm10-u7-compare-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "Give two reasons why the interquartile range is preferred to the range when comparing two distributions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "IQR vs range",
                              "statement": "IQR ignores extreme values and focuses on the middle 50%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The IQR is not affected by outliers/extreme values.",
                              "working": "\\text{unaffected by extremes}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "It measures the consistency of the middle half of the data.",
                              "working": "\\text{middle 50\\% consistency}",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "IQR is unaffected by outliers and measures the middle half.",
          "commonErrors": [
                    "Repeating the same point twice."
          ]
},
        },
        {
          id: "edm10-u7-compare-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Set P has five-number summary: min $10$, Q1 $15$, median $20$, Q3 $30$, max $45$. Set Q has: min $5$, Q1 $20$, median $25$, Q3 $28$, max $50$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the IQR of set P.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the IQR of set Q.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State which set is more consistent, giving a reason.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Interquartile range",
                              "statement": "$\\text{IQR}=Q_3-Q_1$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Subtract for P.",
                              "working": "30-15=15",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract for Q.",
                              "working": "28-20=8",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Q has the smaller IQR so is more consistent.",
                              "working": "8<15",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $15$ (b) $8$ (c) Set Q",
          "commonErrors": [
                    "Comparing ranges instead of IQRs."
          ]
},
        },
        {
          id: "edm10-u7-compare-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "Two classes took the same mathematics test. Class A: median $62$, IQR $10$. Class B: median $58$, IQR $18$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Median",
                              "statement": "Higher median = higher typical score."
                    },
                    {
                              "kind": "property",
                              "name": "IQR",
                              "statement": "Smaller IQR = more consistent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Class A's median of 62 is higher than B's 58, so A has the higher typical score.",
                              "working": "62>58",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Class A's IQR of 10 is smaller than B's 18, so A's middle half is more consistent.",
                              "working": "10<18",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "B has the wider spread, so more variable results including possibly more very high and very low scores.",
                              "working": "\\text{B wider spread}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Overall, A performed better and more consistently.",
                              "working": "\\text{A better and more consistent}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Link to context: the school might prefer A's consistency.",
                              "working": "\\text{contextual conclusion}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Class A has the higher median and smaller IQR, so A performed better and more consistently.",
          "commonErrors": [
                    "Ignoring the context and just listing numbers."
          ]
},
        },
        {
          id: "edm10-u7-compare-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "The five-number summaries for the daily wages (in dollars) of two groups of workers are given.\n\nGroup X: min $4$, Q1 $9$, median $14$, Q3 $20$, max $26$.\nGroup Y: min $6$, Q1 $12$, median $16$, Q3 $18$, max $24$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the IQR for each group.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Find the difference between the medians.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Interquartile range",
                              "statement": "$\\text{IQR}=Q_3-Q_1$; medians compared by subtraction."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "IQR of X.",
                              "working": "20-9=11",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "IQR of Y.",
                              "working": "18-12=6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State both.",
                              "working": "11 \\text{ and } 6",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Comment on consistency.",
                              "working": "\\text{Y more consistent}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract the medians.",
                              "working": "16-14=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the difference.",
                              "working": "2 \\text{ (dollars)}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) X: $11$, Y: $6$ — Y is more consistent (b) $2$",
          "commonErrors": [
                    "Dividing the medians instead of subtracting for the difference."
          ]
},
        },
        {
          id: "edm10-u7-compare-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "Two garden centres record their daily takings ($$1000$s) over a month.\n\nCentre P: min $2$, Q1 $4$, median $6$, Q3 $9$, max $15$.\nCentre Q: min $5$, Q1 $7$, median $8$, Q3 $10$, max $12$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Median",
                              "statement": "Typical daily takings."
                    },
                    {
                              "kind": "property",
                              "name": "IQR and range",
                              "statement": "Consistency and overall spread."
                    },
                    {
                              "kind": "property",
                              "name": "Skew",
                              "statement": "Whisker lengths and median position indicate skew."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Medians: Q has 8 vs P's 6, so Q has higher typical daily takings.",
                              "working": "8>6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "IQRs: P $=9-4=5$; Q $=10-7=3$.",
                              "working": "\\text{IQR}_P=5,\\ \\text{IQR}_Q=3",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Q's smaller IQR means more consistent takings.",
                              "working": "3<5",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Ranges: P $=15-2=13$; Q $=12-5=7$.",
                              "working": "\\text{range}_P=13,\\ \\text{range}_Q=7",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "P's range is much larger, driven by a high maximum of 15 — possible positive skew/outlier.",
                              "working": "15 \\text{ max},\\ \\text{long upper whisker}",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Conclude: Q is more reliable/profitable on a typical day; P occasionally does very well but is less predictable.",
                              "working": "\\text{Q typical higher; P more variable}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Reference the context of daily takings.",
                              "working": "\\text{garden centre context}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Centre Q has higher median takings ($8$ vs $6$) and is more consistent (IQR $3$ vs $5$, range $7$ vs $13$); P is more variable with a high outlier.",
          "commonErrors": [
                    "Claiming P is better because its maximum is higher.",
                    "Ignoring skew and outliers."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u7-distributions-notes",
      title: "Comparing distributions — notes",
      summary: "Box plots show the five-number summary; compare distributions by median, IQR, range and skew.",
      sections: [
        { heading: "Key idea", body: "The box spans Q1–Q3 (middle 50%); whiskers reach the extremes or $1.5\\times$IQR fences." },
        { heading: "Comparison", body: "Comment on median (typical), IQR (consistency), range (spread) and skew — always in context." },
        { heading: "Skew", body: "Median near Q1 suggests positive skew; long upper whisker suggests high outliers." },
      ],
    },
  ],
};

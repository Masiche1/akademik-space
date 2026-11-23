import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ecs10-u10-lesson-10-2",
  code: "10-2",
  title: "Cleaning Data and Statistical Measures",
  goal: "I CAN identify and clean data quality problems and calculate mean, median, mode and range.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data analysis"],
  
  vocabulary: [
    { term: "Data cleaning", definition: "Detecting and correcting errors, missing values and inconsistencies in data." },
    { term: "Outlier", definition: "A value that lies far outside the typical range of a dataset." },
    { term: "Mean", definition: "The average — sum of all values divided by the count." },
    { term: "Median", definition: "The middle value when data is arranged in order." },
    { term: "Mode", definition: "The most frequently occurring value." },
    { term: "Range", definition: "The difference between the largest and smallest values." },
  ],
  concepts: [
    {
      id: "ecs10-u10-data-cleaning",
      title: "Data cleaning and quality",
      skill: "Identify data quality problems such as missing, duplicate and outlier values and describe how to clean data.",
      lesson: {
        sections: [
          {
            heading: "Why clean data?",
            body: "Raw data is rarely perfect. **Missing values** leave gaps, **duplicates** inflate counts, **outliers** (values far outside the normal range, like a height of 250 cm) distort statistics, and **inconsistent formats** ('Year 10' vs 'year10' vs 'Y10') break grouping. Analysing dirty data produces confident but wrong conclusions — cleaning is essential before any statistics are calculated.",
          },
          {
            heading: "Cleaning steps",
            body: "A typical cleaning process: (1) **inspect** the data for problems, (2) **decide rules** — e.g. remove duplicates, correct formats, decide how to handle missing values (exclude, estimate or flag), (3) **apply** corrections consistently, (4) **verify** — re-check the cleaned data and document what was changed and why. Never silently delete data without recording it.",
          },
        ],
        keyFormulas: [
          { name: "Outlier", statement: "value far outside the typical range" },
          { name: "Cleaning", statement: "inspect → decide rules → apply → verify & document" },
        ],
        workedExample: {
          problem: "Dataset: 12, 14, 15, 13, 999, 14, 14. Identify problems and clean it.",
          solution: "999 is an outlier (likely a data-entry error, e.g. extra 9s). Remove or correct it; remaining values cluster around 12-15.",
        },
      },
      questions: [
        {
          id: "ecs10-u10-data-cleaning-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an outlier in a dataset?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The most common value"
                    },
                    {
                              "id": "b",
                              "text": "A value far outside the typical range"
                    },
                    {
                              "id": "c",
                              "text": "A missing value"
                    },
                    {
                              "id": "d",
                              "text": "The smallest value"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Outlier",
                              "statement": "Value far outside the typical range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An outlier lies unusually far from the rest of the data and can distort statistics.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Far outside typical range",
          "commonErrors": [
                    "Confusing outliers with the mode — they are extremes, not common values."
          ]
},
        },
        {
          id: "ecs10-u10-data-cleaning-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three common data quality problems that require cleaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data quality problems",
                              "statement": "Missing, duplicate, inconsistent, outliers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Missing values — blank entries or failed records.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Duplicates — the same record entered twice.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Inconsistent formats or outliers — 'Y10' vs 'Year 10', or impossible values.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Missing values, duplicates, inconsistent formats/outliers.",
          "commonErrors": [
                    "Listing only one type — cleaning covers several distinct problems."
          ]
},
        },
        {
          id: "ecs10-u10-data-cleaning-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why outliers are a problem when analysing data, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Effect of outliers",
                              "statement": "Skews mean and other statistics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Outliers sit far from typical values, often from errors or unusual cases.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: salaries 30k, 32k, 33k, 31k, 500k (the CEO) — the mean becomes ~125k.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The mean is pulled toward the outlier, misrepresenting the typical value.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cleaning or choosing robust measures (median) prevents misleading conclusions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Outliers skew statistics (e.g. mean salary inflated by CEO's 500k).",
          "commonErrors": [
                    "Deleting every outlier blindly — some are real extreme values, not errors."
          ]
},
        },
        {
          id: "ecs10-u10-data-cleaning-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A dataset of student heights in cm contains: 150, 152, 148, 151, 149, 320, 147, 153, 150, 151.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the outlier and explain why it is suspicious.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how you would clean this dataset.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Outlier detection",
                              "statement": "Value far from cluster = suspect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "320 is the outlier — all others cluster around 147-153.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "320 cm is implausible for a student — likely a data-entry error (e.g. extra digit).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It would badly distort the mean if kept.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Verify against source — check the original record before changing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If confirmed as an error, remove the value or correct it (e.g. 132?).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Record the change in a log so the cleaning is traceable.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) 320 — implausible, distorts mean (b) verify, remove/correct, document.",
          "commonErrors": [
                    "Automatically deleting without checking the source — it might be a real (if unusual) value."
          ]
},
        },
        {
          id: "ecs10-u10-data-cleaning-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A form collected exam scores: '72', '85', '', '91', '85', 'seven', '88', '85', '102'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the quality problem in each type of entry: the blank, 'seven', and '102'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the steps you would take to clean this data before analysis.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data cleaning process",
                              "statement": "Identify → decide → apply → verify."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Blank = missing value.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'seven' = non-numeric/invalid entry (text in a numeric field).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'102' = outlier/impossible value if max score is 100.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Inspect and list every problem found.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set rules: exclude missing, fix or exclude 'seven', flag/remove 102 after checking source.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Apply rules consistently across all records.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Verify cleaned data and document changes — do not silently alter records.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) missing / non-numeric / impossible value (b) inspect, rule, apply, verify, document.",
          "commonErrors": [
                    "Converting 'seven' to 7 automatically — it may not equal the intended score."
          ]
},
        },
        {
          id: "ecs10-u10-data-cleaning-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company analysed customer feedback without cleaning its database and reported that 'average satisfaction was 9.7 out of 5'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List four possible data quality problems that could explain this impossible result.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe the cleaning process the company should have followed.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the impact of publishing the uncleaned result.",
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
                              "name": "Data quality impact",
                              "statement": "Dirty data → wrong conclusions → bad decisions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Values outside the 1-5 scale (e.g. 10s, 99s) included in the average.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Duplicate responses counted multiple times.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Missing values coded as 0 or high numbers skews the mean.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Mixed scales combined — e.g. 1-10 and 1-5 scores averaged together.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Inspect data: check ranges, duplicates and formats.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Apply rules: remove invalid/out-of-range values, deduplicate, handle missing consistently.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Verify and document every change before calculating statistics.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Published result is impossible — destroys credibility of all their data work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decisions based on it (e.g. 'customers are delighted') could be completely wrong.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cleaning is cheap compared with the cost of acting on false conclusions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) out-of-range, duplicates, missing coded wrong, mixed scales (b) inspect-rule-apply-verify (c) false conclusions damage credibility and decisions.",
          "commonErrors": [
                    "Blaming the formula — the calculation was fine; the data was dirty."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u10-statistics",
      title: "Mean, median, mode and range",
      skill: "Calculate and interpret measures of central tendency and spread for a dataset.",
      lesson: {
        sections: [
          {
            heading: "Measures of central tendency",
            body: "**Mean** = sum ÷ count — uses every value but is sensitive to outliers. **Median** = middle value of ordered data — robust against outliers; for even counts, average the two middle values. **Mode** = most frequent value — useful for categories; a dataset can have no mode or several. Choose the measure that best represents the data: skewed data favours the median.",
          },
          {
            heading: "Spread",
            body: "The **range** = largest − smallest shows how spread out the data is, but it too is distorted by outliers — one extreme value inflates it completely. Comparing range alongside central tendency tells you both the typical value and how much values vary. For datasets like 4, 5, 5, 6, 100: mean ≈ 24 (misleading), median = 5, mode = 5, range = 96.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "sum of values ÷ number of values" },
          { name: "Median", statement: "middle value of ordered data (average two middles if even count)" },
          { name: "Mode", statement: "most frequent value" },
          { name: "Range", statement: "largest − smallest" },
        ],
        workedExample: {
          problem: "Find mean, median, mode and range of: 3, 7, 5, 7, 9.",
          solution: "Mean = 31 ÷ 5 = 6.2. Ordered: 3,5,7,7,9 → median = 7. Mode = 7. Range = 9 − 3 = 6.",
        },
      },
      questions: [
        {
          id: "ecs10-u10-statistics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the median of a dataset?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The sum divided by the count"
                    },
                    {
                              "id": "b",
                              "text": "The middle value when data is in order"
                    },
                    {
                              "id": "c",
                              "text": "The most frequent value"
                    },
                    {
                              "id": "d",
                              "text": "The largest minus smallest"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "The median is the central value after sorting the data into order.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Middle value when ordered",
          "commonErrors": [
                    "Confusing median with mean — median doesn't use all values in a calculation."
          ]
},
        },
        {
          id: "ecs10-u10-statistics-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Calculate the mean of: 4, 8, 6, 10, 12.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mean",
                              "statement": "sum ÷ count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sum = 4 + 8 + 6 + 10 + 12 = 40.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Count = 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mean = 40 ÷ 5 = 8.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Dividing by 4 instead of 5 — count the values carefully."
          ]
},
        },
        {
          id: "ecs10-u10-statistics-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between the mean and the median, and state one situation where the median is preferable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Mean vs median",
                              "statement": "Average vs middle value; median resists outliers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mean uses every value: sum ÷ count.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Median is the middle ordered value — half above, half below.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Median preferable when outliers exist — e.g. house prices where a mansion skews the mean.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "In that case the median better represents the typical price.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Mean=average of all; median=middle value; median better with outliers.",
          "commonErrors": [
                    "Saying median is 'more accurate' — it is more robust, not more accurate."
          ]
},
        },
        {
          id: "ecs10-u10-statistics-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The dataset is: 3, 5, 5, 7, 10, 20.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the median.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the mode and the range.",
                    "marks": 3
          }
],
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "median",
                              "answer": 6
                    },
                    {
                              "label": "mode",
                              "answer": 5
                    },
                    {
                              "label": "range",
                              "answer": 17
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Central tendency",
                              "statement": "Sort for median; count for mode; max−min for range."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ordered: 3, 5, 5, 7, 10, 20 — already sorted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Even count → average the two middle values: (5 + 7) ÷ 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Median = 6.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mode = 5 (appears twice, most frequent).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Range = largest − smallest = 20 − 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Range = 17.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "median 6, mode 5, range 17",
          "commonErrors": [
                    "Taking 5 or 7 as median — even counts need the average of both middles."
          ]
},
        },
        {
          id: "ecs10-u10-statistics-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company's weekly sales (in £1000s) for 8 weeks were: 12, 15, 14, 13, 80, 14, 15, 13.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean and the median.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which measure better represents typical weekly sales and why.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Robust statistics",
                              "statement": "Outlier 80 inflates mean; median stays typical."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum = 12+15+14+13+80+14+15+13 = 176.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Mean = 176 ÷ 8 = 22 (£1000s).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ordered: 12,13,13,14,14,15,15,80 → median = (14+14)÷2 = 14.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Median (14) better represents typical sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The 80 is an outlier — a one-off spike not typical of most weeks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mean = 22 is pulled up by the outlier, overstating typical sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Unless the spike is typical, median gives a more honest picture for planning.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) mean 22, median 14 (b) median — outlier skews mean upward.",
          "commonErrors": [
                    "Averaging without checking for outliers first."
          ]
},
        },
        {
          id: "ecs10-u10-statistics-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Reaction times (in seconds) for 9 participants: 0.20, 0.22, 0.21, 0.25, 0.19, 0.23, 0.22, 0.60, 0.24.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean, median, mode and range.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain which single measure best describes the typical reaction time.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how the outlier affects your statistics.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Full statistical summary",
                              "statement": "Mean, median, mode, range — then interpret."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum ≈ 2.36 → mean ≈ 0.262 s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ordered: 0.19,0.20,0.21,0.22,0.22,0.23,0.24,0.25,0.60 → median = 0.22 s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Mode = 0.22 (appears twice).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Range = 0.60 − 0.19 = 0.41 s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Median (0.22 s) best describes the typical reaction time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Eight of nine values cluster 0.19-0.25; the median sits inside that cluster.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mean (0.262) and range (0.41) are distorted by the slow outlier.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The 0.60 s outlier inflates the mean by roughly 0.04 s above the cluster centre.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It more than doubles the range, exaggerating the spread.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It should be checked — if an error, remove it; if real, report median alongside mean.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) mean≈0.262, median 0.22, mode 0.22, range 0.41 (b) median (c) outlier inflates mean and range.",
          "commonErrors": [
                    "Reporting mean alone — it hides the skew created by the outlier."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u10-statistics-notes",
      title: "Cleaning data and statistics — notes",
      summary: "Clean before analysing; mean/median/mode/range each answer different questions.",
      sections: [
        { heading: "Data cleaning", body: "Find missing, duplicate, inconsistent and outlier values; inspect → rule → apply → verify → document." },
        { heading: "Central tendency", body: "Mean = sum ÷ count (uses all values, outlier-sensitive). Median = middle ordered value (robust). Mode = most frequent." },
        { heading: "Spread", body: "Range = max − min; also outlier-sensitive. Report median with skewed data." },
      ],
    },
  ],
};

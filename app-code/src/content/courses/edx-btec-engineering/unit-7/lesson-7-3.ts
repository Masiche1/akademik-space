import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edxbteceng-u7-lesson-7-3",
  code: "7-3",
  title: "Engineering Statistics and Data Analysis",
  goal: "I CAN calculate measures of central tendency and spread, interpret scatter plots and correlation, and apply percentage change to engineering data.",
  standards: ["Pearson BTEC L3 National Engineering — Engineering mathematics", "Statistics: mean, median, mode, range, correlation, percentage change"],
  
  vocabulary: [
    { term: "Mean", definition: "The sum of all values divided by the number of values." },
    { term: "Median", definition: "The middle value when data is arranged in order." },
    { term: "Mode", definition: "The most frequently occurring value." },
    { term: "Range", definition: "The difference between the largest and smallest values." },
    { term: "Standard deviation", definition: "A measure of how spread out data values are from the mean." },
    { term: "Correlation", definition: "A relationship between two variables — positive, negative or none." },
    { term: "Percentage change", definition: "The change expressed as a percentage of the original value." },
  ],
  concepts: [
    {
      id: "edxbteceng-u7-3-stats",
      title: "Measures of central tendency and spread",
      skill: "Calculate mean, median, mode and range for engineering datasets, and interpret what each reveals about the data.",
      lesson: {
        sections: [
          {
            heading: "Central tendency",
            body: "- **Mean** $\\bar{x} = \\frac{\\sum x}{n}$ — the average; sensitive to extreme values.\n- **Median** — middle value when sorted; robust against outliers.\n- **Mode** — most frequent value; useful for categorical data.\n\nExample: measurements 10, 11, 12, 13, 14 mm → mean = 12 mm, median = 12 mm, mode = none, range = 4 mm.",
          },
          {
            heading: "Spread and variability",
            body: "The **range** = max − min gives a quick spread measure but ignores distribution. **Standard deviation** $s$ measures average distance from the mean:\n\n$$s = \\sqrt{\\frac{\\sum (x - \\bar{x})^2}{n}}$$\n\nA small standard deviation means data clusters tightly around the mean (consistent); a large one means wide scatter (inconsistent). For quality control, engineers track both mean and spread — a process can have the right average but too much variation.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x}{n}$" },
          { name: "Range", statement: "$\\text{range} = x_{max} - x_{min}$" },
          { name: "Standard deviation", statement: "$s = \\sqrt{\\frac{\\sum(x-\\bar{x})^2}{n}}$" },
        ],
        workedExample: {
          problem: "Five bolts have lengths 49.8, 50.1, 50.0, 49.9, 50.2 mm. Find the mean and range.",
          solution: "Mean = (49.8+50.1+50.0+49.9+50.2)/5 = 250.0/5 = 50.0 mm. Range = 50.2 − 49.8 = 0.4 mm.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u7-3-stats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of the values 4, 6, 8, 10?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "28"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean",
                              "statement": "$\\bar{x} = \\sum x / n$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(4+6+8+10)/4 = 28/4 = 7.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) 7"
},
        },
        {
          id: "edxbteceng-u7-3-stats-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the median of the data set: 3, 7, 5, 9, 4.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "median",
                              "answer": 5
                    }
          ]
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
                              "reasoning": "Sort: 3, 4, 5, 7, 9 — middle (3rd) value is 5.",
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
          id: "edxbteceng-u7-3-stats-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A machine produces shaft diameters (mm): 25.0, 25.1, 24.9, 25.0, 25.2, 24.8. Calculate the mean and range.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Mean",
                              "statement": "$\\bar{x} = \\sum x/n$"
                    },
                    {
                              "kind": "formula",
                              "name": "Range",
                              "statement": "$x_{max}-x_{min}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sum = 25.0+25.1+24.9+25.0+25.2+24.8 = 150.0; mean = 150/6 = 25.0 mm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Max = 25.2, min = 24.8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Range = 0.4 mm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mean = 25.0 mm, range = 0.4 mm"
},
        },
        {
          id: "edxbteceng-u7-3-stats-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two machines produce the same mean diameter of 50.0 mm. Machine A has range 0.2 mm; Machine B has range 1.5 mm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which machine produces more consistent parts and why.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why mean alone is insufficient for quality assessment.",
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
                              "name": "Variability",
                              "statement": "Smaller spread = more consistent."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Machine A — smaller range means parts cluster closer to the mean.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mean ignores spread — two datasets can share a mean but differ wildly in consistency.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Quality needs both accuracy (mean near target) and precision (low spread).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A process could be precise but inaccurate, or accurate but imprecise — need both measures.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Machine A (b) mean ignores variability — need spread too"
},
        },
        {
          id: "edxbteceng-u7-3-stats-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Test results for five samples of concrete strength (MPa): 32, 35, 28, 40, 30.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the median.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the range.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "State which measure is more affected by the high value of 40 MPa.",
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
                              "name": "Mean",
                              "statement": "$\\bar{x} = \\sum x/n$"
                    },
                    {
                              "kind": "definition",
                              "name": "Median",
                              "statement": "Middle sorted value."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum = 32+35+28+40+30 = 165; mean = 165/5 = 33 MPa.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sorted: 28, 30, 32, 35, 40 — median = 32 MPa.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Range = 40 − 28 = 12 MPa.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "The mean — it uses every value and is pulled up by the outlier.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 33 MPa (b) 32 MPa (c) 12 MPa (d) mean"
},
        },
        {
          id: "edxbteceng-u7-3-stats-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A quality engineer records the masses of 6 packaged products (g): 498, 502, 500, 499, 503, 498.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean mass.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the range.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Find the median.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State whether the process appears biased high or low relative to a 500 g target.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why both mean and range are reported in a quality report.",
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
                              "name": "Mean",
                              "statement": "$\\bar{x} = \\sum x/n$"
                    },
                    {
                              "kind": "formula",
                              "name": "Range",
                              "statement": "$x_{max}-x_{min}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum = 498+502+500+499+503+498 = 3000; mean = 3000/6 = 500 g.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Range = 503 − 498 = 5 g.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sorted: 498,498,499,500,502,503 — median = (499+500)/2 = 499.5 g.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Mean = 500 g = target → not biased on average.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Mean shows accuracy vs target; range shows consistency/spread.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Both needed for complete quality picture — accurate AND precise.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 500 g (b) 5 g (c) 499.5 g (d) unbiased (e) accuracy + precision"
},
        },
      ],
    },
    {
      id: "edxbteceng-u7-3-data",
      title: "Correlation, percentage change and data interpretation",
      skill: "Interpret scatter plots and correlation, calculate percentage change, and apply engineering data analysis to make decisions.",
      lesson: {
        sections: [
          {
            heading: "Correlation and scatter",
            body: "A **scatter diagram** plots paired data to reveal relationships:\n\n- **Positive correlation**: as one variable increases, the other tends to increase (e.g. temperature vs power demand).\n- **Negative correlation**: as one increases, the other decreases (e.g. insulation thickness vs heat loss).\n- **No correlation**: no clear pattern.\n\nCorrelation does NOT prove causation — both variables may be driven by a third factor. Engineers use scatter plots to identify which parameters affect performance.",
          },
          {
            heading: "Percentage change",
            body: "Percentage change compares a new value to an original:\n\n$$\\text{percentage change} = \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$$\n\nPositive = increase, negative = decrease. Engineering uses: material savings, efficiency gains, defect-rate reduction, cost changes.\n\nExample: a process improves from 12% defects to 8% defects — change = (8−12)/12 × 100 = −33.3% (a 33% reduction in defects).",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\frac{\\text{new}-\\text{original}}{\\text{original}} \\times 100\\%$" },
          { name: "Positive correlation", statement: "both variables increase together" },
          { name: "Negative correlation", statement: "one increases as the other decreases" },
        ],
        workedExample: {
          problem: "A factory reduces defects from 50 per 1000 to 30 per 1000 units. Calculate the percentage reduction.",
          solution: "Change = (30 − 50)/50 × 100 = −20/50 × 100 = −40% → a 40% reduction.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u7-3-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As engine speed increases, fuel consumption also increases. What type of correlation is this?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Positive correlation"
                    },
                    {
                              "id": "b",
                              "text": "Negative correlation"
                    },
                    {
                              "id": "c",
                              "text": "No correlation"
                    },
                    {
                              "id": "d",
                              "text": "Inverse correlation"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Both variables move in the same direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both increase together → positive correlation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) positive correlation"
},
        },
        {
          id: "edxbteceng-u7-3-data-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the percentage change when a value rises from 80 to 100.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "percentage change",
                              "answer": 25,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Percentage change",
                              "statement": "$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(100-80)/80 \\times 100 = 20/80 \\times 100$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$= 25\\%$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$25\\%$"
},
        },
        {
          id: "edxbteceng-u7-3-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A scatter plot shows a clear downward trend: as X increases, Y decreases. Describe the correlation and give a possible engineering example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Negative = one up, other down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "This is negative correlation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Valid example: insulation thickness vs heat loss; lubricant viscosity vs friction; alloying vs ductility.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The relationship suggests X affects Y, though correlation alone doesn't prove causation.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Negative correlation; e.g. insulation vs heat loss."
},
        },
        {
          id: "edxbteceng-u7-3-data-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company's energy use falls from 1200 kWh/month to 900 kWh/month after installing efficient motors.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the absolute saving in kWh.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the percentage reduction.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain whether correlation between motor efficiency and energy use could be claimed from this data alone.",
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
                              "name": "Percentage change",
                              "statement": "$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Saving = 1200 − 900 = 300 kWh.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$(900-1200)/1200 \\times 100 = -300/1200 \\times 100$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= -25\\%$ → 25% reduction.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Before/after shows association but not proof of causation.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Other factors (weather, production volume, tariffs) could also affect energy use.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 300 kWh (b) 25% reduction (c) correlation ≠ causation"
},
        },
        {
          id: "edxbteceng-u7-3-data-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A test measures tensile strength of 5 alloy samples: 410, 425, 418, 430, 422 MPa.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean tensile strength.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the range.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Calculate the percentage by which the strongest sample exceeds the weakest.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State whether the data suggests consistent quality.",
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
                              "name": "Mean",
                              "statement": "$\\bar{x}=\\sum x/n$"
                    },
                    {
                              "kind": "formula",
                              "name": "Percentage change",
                              "statement": "$\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum = 410+425+418+430+422 = 2105; mean = 2105/5 = 421 MPa.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Range = 430 − 410 = 20 MPa.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$(430-410)/410 \\times 100 = 20/410 \\times 100$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$\\approx 4.88\\%$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Range is small (~5%) relative to mean → reasonably consistent.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 421 MPa (b) 20 MPa (c) ~4.88% (d) consistent"
},
        },
        {
          id: "edxbteceng-u7-3-data-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A maintenance engineer compares two pumps. Pump A failed after 800, 1200, 950, 1100 hours. Pump B failed after 500, 600, 550, 700 hours.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mean time to failure for each pump.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the range for each pump.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State which pump is more reliable and justify using both statistics.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one limitation of using only 4 data points.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "State one additional statistic that would improve the comparison.",
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
                              "name": "Mean",
                              "statement": "$\\bar{x}=\\sum x/n$"
                    },
                    {
                              "kind": "formula",
                              "name": "Range",
                              "statement": "$x_{max}-x_{min}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pump A: (800+1200+950+1100)/4 = 4050/4 = 1012.5 h.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pump B: (500+600+550+700)/4 = 2350/4 = 587.5 h.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both means stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pump A range = 1200−800 = 400 h; Pump B range = 700−500 = 200 h.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pump A more reliable — nearly double mean life.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Though B is more consistent (smaller range), A's much higher average life dominates.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Small sample may not represent long-term performance — outliers dominate.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Standard deviation, median, or confidence interval / more samples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) A=1012.5h, B=587.5h (b) A=400h, B=200h (c) A (d) small sample (e) std dev/more data"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u7-stats-notes",
      title: "Engineering statistics — notes",
      summary: "Mean=Σx/n; median=middle sorted; range=max−min. Scatter shows correlation; % change=(new−old)/old×100.",
      sections: [
        { heading: "Key formulas", body: "Mean $\\bar{x}=\\sum x/n$; range $x_{max}-x_{min}$; % change $(\\text{new}-\\text{old})/\\text{old}\\times100\\%$." },
        { heading: "Accuracy vs precision", body: "Mean near target = accurate; small spread = precise. Quality needs both." },
        { heading: "Correlation caution", body: "Correlation shows association, not causation — a third factor may drive both." },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ecs10-u10-lesson-10-3",
  code: "10-3",
  title: "Visualising and Interpreting Data",
  goal: "I CAN choose appropriate charts for data, interpret graphs correctly and spot misleading presentations.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data analysis"],
  
  vocabulary: [
    { term: "Bar chart", definition: "Chart using bars to compare values across categories." },
    { term: "Line graph", definition: "Chart showing how a value changes over time or continuous variable." },
    { term: "Pie chart", definition: "Chart showing proportions of a whole as slices." },
    { term: "Scatter plot", definition: "Chart plotting paired values to reveal relationships between two variables." },
    { term: "Correlation", definition: "A relationship between two variables — not necessarily cause and effect." },
    { term: "Misleading graph", definition: "A chart designed or drawn to distort the true picture of the data." },
  ],
  concepts: [
    {
      id: "ecs10-u10-charts",
      title: "Choosing and constructing charts",
      skill: "Select the appropriate chart type for a dataset and describe what makes a chart clear and accurate.",
      lesson: {
        sections: [
          {
            heading: "Chart types",
            body: "**Bar charts** compare values across categories (e.g. sales by product). **Line graphs** show change over time or continuous variables (temperature over a day). **Pie charts** show parts of a whole as percentages — best with few categories. **Scatter plots** plot two numerical variables against each other to reveal correlation. **Histograms** group continuous data into intervals to show distribution shape.",
          },
          {
            heading: "Good chart practice",
            body: "A clear chart has: a descriptive **title**, labelled **axes with units**, an appropriate **scale starting at zero** (unless a broken axis is justified), a **legend** if multiple series, and honest proportions — bar widths equal, pie slices summing to 100%. The wrong chart type hides the story: a pie chart of 12 product categories is unreadable; a line graph of unrelated categories implies a false trend.",
          },
        ],
        keyFormulas: [
          { name: "Bar chart", statement: "compare categories" },
          { name: "Line graph", statement: "change over time / continuous variable" },
          { name: "Pie chart", statement: "parts of a whole, few categories" },
          { name: "Scatter plot", statement: "two numerical variables, correlation" },
        ],
        workedExample: {
          problem: "Which chart best shows how a shop's monthly revenue changed over two years?",
          solution: "A line graph — time on the x-axis shows the trend and seasonal pattern clearly.",
        },
      },
      questions: [
        {
          id: "ecs10-u10-charts-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which chart type is best for comparing the sales of five different products?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line graph"
                    },
                    {
                              "id": "b",
                              "text": "Pie chart"
                    },
                    {
                              "id": "c",
                              "text": "Bar chart"
                    },
                    {
                              "id": "d",
                              "text": "Scatter plot"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bar chart",
                              "statement": "Compares values across categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bar charts compare discrete categories directly — one bar per product.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(c) Bar chart",
          "commonErrors": [
                    "Choosing pie — with five products it can't show the comparison as clearly."
          ]
},
        },
        {
          id: "ecs10-u10-charts-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A pie chart shows transport choices: walking 25%, cycling 15%, bus 35%, car 25%. What percentage chose the car?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 25,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pie chart",
                              "statement": "Slices = percentage of whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each slice's percentage is read directly from the chart.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Car slice = 25%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: 25+15+35+25 = 100% — consistent.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "25%",
          "commonErrors": [
                    "Reading the angle instead of the percentage — always check the label."
          ]
},
        },
        {
          id: "ecs10-u10-charts-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain when a line graph is more appropriate than a bar chart, with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Line vs bar",
                              "statement": "Trend over continuous axis vs category comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line graphs suit data changing continuously — especially over time.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The connecting line shows trend, rate of change and patterns.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: temperature recorded every hour — line shows the daily curve.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Bar chart would be better for comparing unrelated categories like product sales.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Line for change over time/continuous data; bar for category comparison.",
          "commonErrors": [
                    "Using a line graph for unordered categories — it implies a false sequence."
          ]
},
        },
        {
          id: "ecs10-u10-charts-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student must present data on how 200 students travel to school: bus, walk, cycle, car, train.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Recommend the most appropriate chart type and justify your choice.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two features the chart must include to be clear and accurate.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Chart selection",
                              "statement": "Match chart to data type; label everything."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bar chart — categories (modes of transport) compared directly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Justification: discrete categories, not a time series or two variables.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "A pie chart could work for proportions but bars compare counts more clearly.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Labelled axes with units (students on y-axis; categories on x-axis).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Descriptive title stating what the data shows.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Y-axis starting at zero so bar heights are proportional.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) bar chart for category comparison (b) labels+units, title, zero-based axis.",
          "commonErrors": [
                    "Choosing a pie chart for 5 categories — slices become hard to compare."
          ]
},
        },
        {
          id: "ecs10-u10-charts-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A researcher plots students' weekly exercise hours against their resting heart rate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the appropriate chart type and describe how the data would appear on it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what a scatter plot can reveal that a bar chart cannot.",
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
                              "name": "Scatter plots",
                              "statement": "Two numerical variables → correlation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Scatter plot — both variables are numerical.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Exercise hours on one axis, heart rate on the other; each student = one point.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Points may show a pattern (e.g. more exercise → lower heart rate).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Scatter shows the relationship BETWEEN two variables for each individual.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bar chart can only compare totals per category — loses individual pairing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Scatter reveals correlation direction and strength at a glance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It also exposes outliers that averages would hide.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) scatter plot, points per student (b) shows variable relationships and outliers.",
          "commonErrors": [
                    "Forcing two numerical variables into a bar chart — it cannot show correlation."
          ]
},
        },
        {
          id: "ecs10-u10-charts-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A charity must present its annual report showing donations by region and the trend over five years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose a chart type for each of the two datasets and justify both choices.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe three features that would make these charts clear and honest.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether one combined chart could present both datasets.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiple chart selection",
                              "statement": "Different data → different charts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Donations by region: bar chart — compares categories.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Trend over 5 years: line graph — shows change over time.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Justification for bar: regions are unordered categories.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Justification for line: years form a continuous sequence where trend matters.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Titles stating exactly what each chart shows.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Labelled axes with units (currency, year).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Y-axis from zero with honest scale — no truncated axis exaggerating differences.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Possible: dual-axis or small-multiple charts could show both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "But combining risks clutter and confusing two different messages.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Separate charts are clearer — a report can present each message cleanly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) bar for regions, line for trend (b) titles, units, honest scale (c) possible but separate is clearer.",
          "commonErrors": [
                    "Using one chart type for both datasets out of convenience."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u10-interpreting",
      title: "Interpreting data and spotting misleading graphs",
      skill: "Read charts accurately, distinguish correlation from causation and identify misleading presentations.",
      lesson: {
        sections: [
          {
            heading: "Reading charts",
            body: "Interpretation means drawing correct conclusions: read values precisely, compare like with like, and note what the chart does NOT show. A chart of ice-cream sales and drowning incidents both rise in summer — they are **correlated** but neither causes the other (the hidden factor is hot weather). Correlation describes association; **causation** requires evidence that one variable drives the other.",
          },
          {
            heading: "Misleading graphs",
            body: "Graphs can distort without lying: a **truncated y-axis** (starting at 90 instead of 0) makes tiny differences look huge; **unequal bar widths** exaggerate categories; **cherry-picked ranges** hide inconvenient data; missing labels or units create false impressions; and 3D effects can distort perceived values. Always check the axis scale, units, time range and whether the visual proportions match the numbers.",
          },
        ],
        keyFormulas: [
          { name: "Correlation", statement: "association between variables — not proof of cause" },
          { name: "Causation", statement: "one variable actually drives the other" },
          { name: "Misleading tricks", statement: "truncated axis, unequal widths, cherry-picked range" },
        ],
        workedExample: {
          problem: "A graph shows company profits rising from £1.02m to £1.05m using a y-axis from £1.00m to £1.10m. Is the growth exaggerated?",
          solution: "Yes — a 3% rise fills 30% of the chart height because the axis is truncated. Starting at zero would show the true small change.",
        },
      },
      questions: [
        {
          id: "ecs10-u10-interpreting-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a truncated y-axis do to a graph's appearance?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes differences look smaller than they are"
                    },
                    {
                              "id": "b",
                              "text": "Makes differences look larger than they are"
                    },
                    {
                              "id": "c",
                              "text": "Has no effect on the data"
                    },
                    {
                              "id": "d",
                              "text": "Changes the units of measurement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Truncated axis",
                              "statement": "Axis not starting at zero exaggerates differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cutting off the lower part of the scale stretches small changes across the whole chart.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Exaggerates differences",
          "commonErrors": [
                    "Thinking truncation is just a formatting choice — it materially misleads."
          ]
},
        },
        {
          id: "ecs10-u10-interpreting-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one example showing that correlation does not prove causation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation vs causation",
                              "statement": "Association ≠ cause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid example: ice-cream sales and drowning both rise in summer.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They correlate but neither causes the other — hot weather drives both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Or: shoe size and reading ability correlate in children — age is the hidden factor.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. ice-cream sales vs drowning — both driven by summer, not each other.",
          "commonErrors": [
                    "Giving an example where one thing genuinely causes the other — that proves causation, not correlation."
          ]
},
        },
        {
          id: "ecs10-u10-interpreting-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'the data shows correlation' is weaker evidence than 'X causes Y' when drawing conclusions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Correlation vs causation",
                              "statement": "Association may have hidden causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correlation only shows two variables move together.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A third variable may drive both — the hidden factor problem.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Direction may even be reversed — B might cause A, not A cause B.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Causation needs controlled evidence; correlation alone cannot justify action.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Correlation = association (maybe coincidence/hidden factor); causation = proven driver.",
          "commonErrors": [
                    "Assuming the first variable mentioned is the cause — direction isn't guaranteed."
          ]
},
        },
        {
          id: "ecs10-u10-interpreting-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bar chart compares phone sales: bars for Brand A and Brand B have equal heights, but Brand A's bar is drawn twice as wide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the misleading feature and explain its effect.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State how the chart should be redrawn to represent the data honestly.",
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
                              "name": "Misleading graphs",
                              "statement": "Visual area must match data value."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Unequal bar widths — Brand A's bar has roughly double the visual area.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Viewers read area/size, so Brand A appears to sell more despite equal values.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The visual proportion contradicts the data — misleading.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Redraw with equal-width bars for all categories.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Let bar HEIGHT alone encode the value; keep equal spacing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Label axes and title; equal heights then correctly show equal sales.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) unequal widths exaggerate A (b) equal-width bars, height encodes value.",
          "commonErrors": [
                    "Thinking only the height matters — area perception is what misleads."
          ]
},
        },
        {
          id: "ecs10-u10-interpreting-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "An advert claims '9 out of 10 dentists recommend our toothpaste' using a chart of only the surveyed dentists' top-3 brands.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe two ways this presentation could mislead consumers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what additional information would be needed for a fair evaluation.",
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
                              "name": "Evaluating claims",
                              "statement": "Check sample, context, missing data."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cherry-picking: chart shows only top-3 — hides that many brands exist.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sample unknown: how many dentists, how selected, paid or sponsored?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "'Recommend' may mean 'listed as acceptable' not 'best choice'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sample size and selection method — random? representative? conflicts of interest?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Full ranking data including all brands, not just the favourable top 3.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The exact survey question and definition of 'recommend'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Independent replication — one self-commissioned survey proves little.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) cherry-picked brands, unknown/biased sample (b) sample details, full data, question wording, replication.",
          "commonErrors": [
                    "Accepting the headline statistic without questioning how it was produced."
          ]
},
        },
        {
          id: "ecs10-u10-interpreting-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A line graph shows a city's air pollution falling steadily from 2015 to 2024, but the y-axis starts at 40 (values were 42 down to 38).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Interpret what the graph appears to show versus what the data actually shows.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Identify the misleading feature and explain its effect.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how a journalist should report this data honestly.",
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
                              "name": "Critical graph reading",
                              "statement": "Check scale before trusting visual impression."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Graph appears to show pollution falling dramatically — line drops steeply across the frame.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Actually pollution fell only from 42 to 38 — a small 4-unit change.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The truncated axis (40-42 range) stretches that small change visually.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Honest reading: modest improvement, not a dramatic collapse.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Y-axis truncated — does not start at zero.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effect: a ~10% change occupies nearly the whole chart height.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Exaggerates the trend's size and can mislead policy decisions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Redraw with axis from zero (or clearly mark the break).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Report actual values and percentage change alongside the chart.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Context matters — a real 4-point fall may still be newsworthy if explained accurately.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) appears dramatic, actually 42→38 (b) truncated axis exaggerates (c) zero-based axis + report real values.",
          "commonErrors": [
                    "Describing the visual trend without checking the axis scale."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u10-visualisation-notes",
      title: "Visualising and interpreting data — notes",
      summary: "Match chart to data; label honestly; correlation ≠ causation; watch for truncated axes and cherry-picking.",
      sections: [
        { heading: "Chart choice", body: "Bar = categories; line = time/trend; pie = parts of whole (few); scatter = two numerical variables; histogram = distribution." },
        { heading: "Honest charts", body: "Title, labelled axes with units, zero-based scale, equal bar widths, accurate proportions." },
        { heading: "Critical reading", body: "Correlation ≠ causation; truncated axes, unequal widths and cherry-picked ranges mislead." },
      ],
    },
  ],
};

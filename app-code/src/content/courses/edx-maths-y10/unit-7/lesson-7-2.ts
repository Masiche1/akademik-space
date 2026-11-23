import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edm10-u7-lesson-7-2",
  code: "7-2",
  title: "Scatter Graphs and Correlation",
  goal: "I CAN describe correlation on scatter graphs, draw and use a line of best fit, and interpret its equation.",
  standards: ["4MA1 8.7", "4MA1 8.8"],
  
  vocabulary: [
    { term: "Scatter graph", definition: "A plot of paired data as points on a coordinate grid." },
    { term: "Correlation", definition: "The relationship between two variables: positive, negative or zero." },
    { term: "Line of best fit", definition: "A straight line drawn through the points to show the trend; balanced so points are evenly scattered either side." },
    { term: "Anomaly", definition: "A point that does not follow the general pattern of the data." },
    { term: "Extrapolation", definition: "Using the line of best fit to predict outside the range of the data — unreliable." },
    { term: "Interpolation", definition: "Predicting within the range of the data — more reliable." },
  ],
  concepts: [
    {
      id: "edm10-u7-correlation",
      title: "Scatter graphs and correlation",
      skill: "Describe the correlation in paired data and identify anomalies.",
      lesson: {
        sections: [
          {
            heading: "Types of correlation",
            body: "Positive correlation: as one variable increases, the other tends to increase (points rise left to right). Negative correlation: one increases as the other decreases (points fall). No correlation: points are scattered with no pattern.",
          },
          {
            heading: "Strength of correlation",
            body: "Correlation can be strong (points close to a line) or weak (points widely scattered). Describe both direction and strength: 'strong positive correlation'.",
          },
          {
            heading: "Anomalies and causation",
            body: "An anomaly is a point far from the trend — it may be a misrecord or genuinely unusual. Correlation does not prove causation: a lurking variable may drive both, e.g. ice-cream sales and drowning both rise in summer because of temperature.",
          },
        ],
        keyFormulas: [
          { name: "Correlation types", statement: "positive / negative / zero" },
          { name: "Strength", statement: "strong / moderate / weak" },
        ],
        workedExample: {
          problem: "A scatter graph of hours of revision against test score shows points rising from lower left to upper right, close to a straight line. Describe the correlation.",
          solution: "Strong positive correlation: more revision is associated with higher scores.",
        },
      },
      questions: [
        {
          id: "edm10-u7-scatter-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "On a scatter graph, points that rise from lower left to upper right show...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "positive correlation"
                    },
                    {
                              "id": "b",
                              "text": "negative correlation"
                    },
                    {
                              "id": "c",
                              "text": "no correlation"
                    },
                    {
                              "id": "d",
                              "text": "an anomaly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Positive correlation",
                              "statement": "Both variables increase together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rising left to right means both increase together.",
                              "working": "\\text{positive}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Positive correlation",
          "commonErrors": [
                    "Confusing rising with negative correlation."
          ]
},
        },
        {
          id: "edm10-u7-scatter-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "As the number of hours of revision increases, a student's test score tends to increase. What type of correlation is this?",
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
                              "text": "Inverse proportion"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Both variables increase together = positive correlation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both variables increase together.",
                              "working": "\\text{both increase}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Name the correlation.",
                              "working": "\\text{positive}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** Positive correlation",
          "commonErrors": [
                    "Saying 'direct proportion' — correlation is not necessarily proportional."
          ]
},
        },
        {
          id: "edm10-u7-scatter-q3",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A scatter graph of monthly ice-cream sales against average temperature shows a strong positive correlation. Explain what this means, and suggest one possible lurking variable that could affect both.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "As temperature rises, ice-cream sales tend to rise."
                    },
                    {
                              "kind": "principle",
                              "name": "Lurking variable",
                              "statement": "A third variable may drive both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interpret the correlation in context.",
                              "working": "\\text{warmer months have higher sales}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Note it does not prove causation.",
                              "working": "\\text{correlation} \\neq \\text{causation}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Suggest a lurking variable, e.g. holiday season or rainfall.",
                              "working": "\\text{e.g. school holidays}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Warmer months tend to have higher ice-cream sales; correlation does not prove temperature causes sales — a lurking variable (e.g. holidays) may be involved.",
          "commonErrors": [
                    "Claiming temperature definitely causes the sales."
          ]
},
        },
        {
          id: "edm10-u7-scatter-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A scatter graph of height (cm) against shoe size for 40 adults shows a strong positive correlation, with one point at $(150,\\ 4)$ far below the general trend.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Taller people tend to have larger shoe sizes."
                    },
                    {
                              "kind": "definition",
                              "name": "Anomaly",
                              "statement": "A point far from the trend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describe the correlation.",
                              "working": "\\text{strong positive}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interpret in context.",
                              "working": "\\text{height and shoe size increase together}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identify the anomaly.",
                              "working": "(150,\\ 4)\\text{ is an anomaly}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Suggest why it might occur, e.g. data entry error or unusual feet.",
                              "working": "\\text{error or unusual}",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Strong positive correlation; $(150,4)$ is an anomaly possibly due to error or unusual feet.",
          "commonErrors": [
                    "Ignoring the anomalous point."
          ]
},
        },
        {
          id: "edm10-u7-scatter-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "A class recorded hours of television watched per week and end-of-year exam grade for 30 students. The scatter graph shows a negative correlation, with one clear anomaly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the type of correlation shown.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain what the negative correlation means in this context.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "What should be done with the anomalous point when drawing the line of best fit?",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "A student claims 'watching more TV causes lower grades'. Explain why this conclusion may be too strong.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative correlation",
                              "statement": "One variable increases as the other decreases."
                    },
                    {
                              "kind": "principle",
                              "name": "Correlation vs causation",
                              "statement": "Correlation does not prove causation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "State the correlation.",
                              "working": "\\text{negative}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Interpret: more TV hours tend to go with lower grades.",
                              "working": "\\text{more TV} \\to \\text{lower grade}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add context: students who watch less TV tend to score higher.",
                              "working": "\\text{less TV} \\to \\text{higher grade}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "The anomaly should not be included when judging the line of best fit.",
                              "working": "\\text{ignore the anomaly}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "It may be a data error or genuinely unusual student.",
                              "working": "\\text{error or unusual}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Correlation is not causation — other factors (motivation, sleep) may explain it.",
                              "working": "\\text{lurking variables}",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Negative correlation; more TV tends to mean lower grades; ignore the anomaly for the LOBF; correlation does not prove causation.",
          "commonErrors": [
                    "Accepting the causal claim without qualification."
          ]
},
        },
        {
          id: "edm10-u7-scatter-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Two scatter graphs are described. Graph A plots hours of physical exercise per week against resting heart rate for 50 adults, showing a moderate negative correlation. Graph B plots hours of exercise per week against fitness-test score for the same adults, showing a strong positive correlation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Direction and strength of relationship."
                    },
                    {
                              "kind": "principle",
                              "name": "Lurking variables",
                              "statement": "Other factors may influence both variables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Graph A: more exercise is associated with lower resting heart rate — moderate negative correlation.",
                              "working": "\\text{A: moderate negative}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Graph B: more exercise is associated with higher fitness scores — strong positive correlation.",
                              "working": "\\text{B: strong positive}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compare strengths: B's correlation is stronger, so exercise predicts fitness score more reliably than resting heart rate.",
                              "working": "\\text{B stronger than A}",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Note that correlation does not prove exercise causes the changes — fitness level, age and diet are lurking variables.",
                              "working": "\\text{lurking variables}",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Suggest a sensible conclusion: regular exercise is associated with better fitness outcomes.",
                              "working": "\\text{associated, not proven causal}",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Conclude appropriately.",
                              "working": "\\text{qualified conclusion}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "A: moderate negative correlation; B: strong positive correlation. B is the stronger relationship, but correlation alone does not prove causation.",
          "commonErrors": [
                    "Declaring exercise 'causes' lower heart rate as fact."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u7-line-of-best-fit",
      title: "Line of best fit and prediction",
      skill: "Draw and interpret a line of best fit and its equation for prediction.",
      lesson: {
        sections: [
          {
            heading: "Drawing the line",
            body: "The line of best fit passes through the centre of the data — roughly through the mean point $(\\bar{x},\\bar{y})$ — with points balanced either side. Ignore anomalies when placing the line. It should follow the trend, not necessarily join any points.",
          },
          {
            heading: "Using the equation",
            body: "Read two convenient points on the line to find $m$ and $c$ in $y=mx+c$. The gradient describes the change in $y$ per unit increase in $x$; the intercept is the value of $y$ when $x=0$. Predictions inside the data range are interpolation (reliable); outside it is extrapolation (unreliable).",
          },
          {
            heading: "Interpreting the gradient",
            body: "For a line $y=mx+c$: if $x$ increases by 1, $y$ changes by $m$. E.g. a line relating price ($y$, in $\\pounds$) to weight ($x$, in kg) with gradient 4 means each extra kg costs $\\pounds4$. The intercept may or may not have real meaning.",
          },
        ],
        keyFormulas: [
          { name: "Line of best fit", statement: "$y=mx+c$ through the mean point" },
          { name: "Gradient from two points", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Prediction", statement: "Substitute the $x$-value into the equation" },
        ],
        workedExample: {
          problem: "The line of best fit for a scatter graph is $y=0.8x+12$, where $y$ is a score and $x$ is hours studied. Estimate the score for $x=40$ hours.",
          solution: "$y=0.8(40)+12=32+12=44$. If the data only went up to $x=20$, this is extrapolation and less reliable.",
        },
      },
      questions: [
        {
          id: "edm10-u7-lobf-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "When drawing a line of best fit, the line should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pass through every data point"
                    },
                    {
                              "id": "b",
                              "text": "pass through as many points as possible, ignoring anomalies"
                    },
                    {
                              "id": "c",
                              "text": "have points balanced on both sides, following the trend"
                    },
                    {
                              "id": "d",
                              "text": "always be horizontal"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Line of best fit",
                              "statement": "Follows the trend with points balanced either side."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The LOBF balances points either side and ignores anomalies.",
                              "working": "\\text{balanced points}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Points balanced on both sides",
          "commonErrors": [
                    "Forcing the line through every point."
          ]
},
        },
        {
          id: "edm10-u7-lobf-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "The line of best fit for some data is $y=2x+10$. Use it to estimate the value of $y$ when $x=15$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "y",
                              "answer": 40
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Using the equation",
                              "statement": "Substitute the $x$-value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $x=15$.",
                              "working": "y=2(15)+10",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "y=40",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$40$",
          "commonErrors": [
                    "Computing $2+15+10$ instead of $2(15)+10$."
          ]
},
        },
        {
          id: "edm10-u7-lobf-q3",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The line of best fit for a scatter graph passes through the points $(0,5)$ and $(10,15)$. Find the equation of the line and use it to estimate $y$ when $x=30$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "y at x=30",
                              "answer": 35
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Equation of a line",
                              "statement": "$m=\\frac{\\Delta y}{\\Delta x}$, $c$ from a point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the gradient.",
                              "working": "m=\\frac{15-5}{10-0}=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Find $c$: the line passes through $(0,5)$, so $c=5$; equation $y=x+5$.",
                              "working": "y=x+5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute $x=30$.",
                              "working": "y=30+5=35",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$y=35$ (equation $y=x+5$)",
          "commonErrors": [
                    "Using gradient $\\frac{10}{10}=1$ correctly but then forgetting $+5$."
          ]
},
        },
        {
          id: "edm10-u7-lobf-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A scatter graph of revision hours ($x$) against mock exam score ($y$, out of 100) has line of best fit $y=0.8x+12$. The data ranged from $x=0$ to $x=20$ hours.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Prediction",
                              "statement": "Substitute into $y=mx+c$."
                    },
                    {
                              "kind": "principle",
                              "name": "Extrapolation",
                              "statement": "Predictions outside the data range are unreliable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A student predicts the score for $x=40$ hours.",
                              "working": "x=40",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compute $y=0.8(40)+12=44$.",
                              "working": "y=44",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Comment on reliability: $x=40$ is far outside the data range $0\\le x\\le20$, so this is extrapolation.",
                              "working": "\\text{extrapolation}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Conclude the prediction is unreliable and may not reflect reality.",
                              "working": "\\text{unreliable}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$y=44$, but it is extrapolation beyond the data range so unreliable.",
          "commonErrors": [
                    "Giving 44 without commenting on reliability."
          ]
},
        },
        {
          id: "edm10-u7-lobf-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "The line of best fit for a scatter graph is $y=1.5x+20$, where $y$ is the monthly cost in $\\pounds$ and $x$ is the number of units produced.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Estimate the cost when $x=10$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the value of $x$ for which the cost is $\\pounds 50$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Interpret the gradient of the line in context.",
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
                              "name": "Using y = mx + c",
                              "statement": "Substitute or rearrange to find the unknown."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitute $x=10$.",
                              "working": "y=1.5(10)+20=35",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the cost.",
                              "working": "\\pounds 35",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set $1.5x+20=50$.",
                              "working": "1.5x=30",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Solve.",
                              "working": "x=20",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gradient 1.5 means each extra unit adds $\\pounds1.50$ to the cost.",
                              "working": "\\pounds1.50\\text{ per unit}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the interpretation.",
                              "working": "\\text{marginal cost per unit}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\pounds35$ (b) $x=20$ (c) each extra unit costs $\\pounds1.50$",
          "commonErrors": [
                    "In (c) interpreting the intercept 20 instead of the gradient."
          ]
},
        },
        {
          id: "edm10-u7-lobf-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A scatter graph shows the floor area ($x$ m$^2$) of houses against their price ($y$, in $\\pounds1000$s). The line of best fit passes through the points $(40,150)$ and $(120,390)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the gradient of the line of best fit.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the equation of the line of best fit.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Estimate the price of a house with floor area $100\\text{ m}^2$.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Estimate the floor area of a house priced at $\\pounds 300\\,000$.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Comment on the reliability of your answer to part (d).",
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
                              "name": "Equation of a line",
                              "statement": "$m=\\frac{\\Delta y}{\\Delta x}$, then $y=mx+c$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Compute the gradient.",
                              "working": "m=\\frac{390-150}{120-40}=\\frac{240}{80}=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the gradient.",
                              "working": "m=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $y-y_1=m(x-x_1)$ with $(40,150)$.",
                              "working": "y-150=3(x-40)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Expand.",
                              "working": "y=3x-120+150",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify.",
                              "working": "y=3x+30",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Substitute $x=100$.",
                              "working": "y=3(100)+30=330",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the price.",
                              "working": "\\pounds 330\\,000",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Set $3x+30=300$.",
                              "working": "3x=270",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Solve.",
                              "working": "x=90\\text{ m}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "$x=90$ lies within the data range ($40\\le x\\le120$), so the estimate is reasonably reliable.",
                              "working": "\\text{interpolation}",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $m=3$ (b) $y=3x+30$ (c) $\\pounds330\\,000$ (d) $90\\text{ m}^2$ (e) reliable — interpolation",
          "commonErrors": [
                    "In (d) giving $y$ instead of $x$.",
                    "Misreading $\\pounds1000$s units."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u7-scatter-notes",
      title: "Scatter graphs — notes",
      summary: "Correlation types and strength, anomalies, line of best fit, interpolation vs extrapolation.",
      sections: [
        { heading: "Key idea", body: "Correlation describes association, not causation; a lurking variable may drive both." },
        { heading: "LOBF", body: "Balanced points either side; find $m$ and $c$ from two points on the line." },
        { heading: "Prediction", body: "Inside the data range = interpolation (reliable); outside = extrapolation (unreliable)." },
      ],
    },
  ],
};

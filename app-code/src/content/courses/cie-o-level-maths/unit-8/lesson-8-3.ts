import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "olm-u8-lesson-8-3",
  code: "8-3",
  title: "Scatter Diagrams and Correlation",
  goal: "I CAN plot and interpret scatter diagrams and describe correlation.",
  standards: ["4024: statistics"],
  vocabulary: [
    { term: "Scatter diagram", definition: "Plot of paired data points showing relationship." },
    { term: "Correlation", definition: "Relationship between two variables." },
    { term: "Line of best fit", definition: "Line drawn through scatter points showing trend." },
    { term: "Anomaly", definition: "Point that doesn't fit the pattern." },
  ],
  concepts: [
    {
      id: "olm-u8-s3-scatter",
      title: "Plotting scatter diagrams",
      skill: "Plot and describe scatter diagrams at O Level.",
      lesson: {
        sections: [
          { heading: "Types of correlation", body: "Positive correlation: as x increases, y tends to increase (points slope upward). Negative: y decreases as x increases (downward slope). No correlation: points scattered with no pattern. Perfect correlation would be all points on a line — real data is never perfect. Describe strength as strong, moderate or weak." },
          { heading: "Line of best fit", body: "Draw a straight line through the points balancing those above and below — it should follow the general trend, not necessarily through every point. Exclude anomalies (outliers) when drawing. The line can then be used to estimate y for a given x (interpolation within range) or predict (extrapolation beyond range — risky)." },
        ],
        keyFormulas: [
          { name: "Correlation types", statement: "Positive, negative, none" },
        ],
        workedExample: { problem: "Data: (1,2), (2,4), (3,5), (4,8), (5,9). Describe correlation and draw line of best fit.", solution: "Points rise together → positive correlation, strong. Line of best fit roughly y=x+1.5." },
      },
      questions: [
        {
          id: "olm-u8-s3-sc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If y tends to increase as x increases, the correlation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Negative" },
            { id: "b", text: "Perfect" },
            { id: "c", text: "Zero" },
            { id: "d", text: "Positive" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Correlation", statement: "Direction of trend." }], steps: [{ reasoning: "Both increase → positive.", marks: 1, markCode: "A" }], finalAnswer: "Positive" },
        },
        {
          id: "olm-u8-s3-sc-q2", difficulty: "foundation", totalMarks: 2,
          stem: "What is an anomaly on a scatter diagram?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Anomaly", statement: "Point off the trend." }], steps: [
            { reasoning: "A point that doesn't fit the general pattern.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Point not fitting the pattern" },
        },
        {
          id: "olm-u8-s3-sc-q3", difficulty: "core", totalMarks: 3,
          stem: "Data shows y decreasing as x increases. What type of correlation?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Negative correlation", statement: "Opposite trends." }], steps: [
            { reasoning: "Negative correlation.", marks: 1, markCode: "M" },
            { reasoning: "Line of best fit slopes downward.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Negative" },
        },
        {
          id: "olm-u8-s3-sc-q4", difficulty: "core", totalMarks: 4,
          stem: "A scatter diagram of ice cream sales vs temperature shows positive correlation. Does this prove ice cream causes hot weather? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Correlation vs causation", statement: "Correlation ≠ causation." }], steps: [
            { reasoning: "No — correlation doesn't prove causation.", marks: 1, markCode: "M" },
            { reasoning: "Both may be caused by a third factor (summer season).", marks: 1, markCode: "M" },
            { reasoning: "Or sales affect temperature? unlikely — confounding variable.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no, correlation alone doesn't establish causation.", marks: 1, markCode: "A" },
          ], finalAnswer: "No" },
        },
        {
          id: "olm-u8-s3-sc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Negative correlation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No relationship exists" },
            { id: "b", text: "All points are identical" },
            { id: "c", text: "y increases as x increases" },
            { id: "d", text: "y tends to decrease as x increases" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Negative correlation", statement: "Opposite trends." }], steps: [{ reasoning: "Downward trend.", marks: 1, markCode: "A" }], finalAnswer: "y decreases as x increases" },
        },
        {
          id: "olm-u8-s3-sc-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Points (1,3), (2,5), (3,7) lie on a line. Find its gradient.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "$\\Delta y/\\Delta x$." }], steps: [
            { reasoning: "$\\frac{5-3}{2-1}=\\frac{7-5}{3-2}=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u8-s3-sc-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A line of best fit passes through (0,4) and (5,14). Estimate y when x = 2.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Read line", statement: "Gradient × x + intercept." }], steps: [
            { reasoning: "Gradient $=\\frac{14-4}{5}=2$; $y=4+2x$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=2$: $y=8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u8-s3-sc-q8", difficulty: "core", totalMarks: 2,
          stem: "A good line of best fit should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignore anomalies only" },
            { id: "b", text: "Pass through every point" },
            { id: "c", text: "Balance points above and below it" },
            { id: "d", text: "Be horizontal always" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Line of best fit", statement: "Balanced trend line." }], steps: [
            { reasoning: "Follows general trend, roughly equal points either side.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Balance points above and below" },
        },
        {
          id: "olm-u8-s3-sc-q9", difficulty: "core", totalMarks: 1,
          stem: "A scatter diagram shows points rising overall but widely scattered. The correlation is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Positive, weak" },
            { id: "b", text: "Positive, strong" },
            { id: "c", text: "No correlation" },
            { id: "d", text: "Negative, weak" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Correlation strength", statement: "Direction + spread." }], steps: [{ reasoning: "Upward trend but scattered → weak positive.", marks: 1, markCode: "A" }], finalAnswer: "Positive, weak" },
        },
        {
          id: "olm-u8-s3-sc-q10", difficulty: "core", totalMarks: 3,
          stem: "On a scatter diagram of (1,2), (2,4), (3,6), (4,8), one point (5,2) lies far below the trend. What should be done with it when drawing the line of best fit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Anomaly", statement: "Exclude from line." }], steps: [
            { reasoning: "(5,2) is an anomaly — off the trend.", marks: 1, markCode: "M" },
            { reasoning: "Exclude it; draw the line through the other four.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Exclude as anomaly" },
        },
        {
          id: "olm-u8-s3-sc-q11", difficulty: "core", totalMarks: 3,
          stem: "A line of best fit passes through (2,8) and (6,20). Find its gradient and y-intercept.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }, { label: "b", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "$y=mx+c$." }], steps: [
            { reasoning: "$m=\\frac{20-8}{6-2}=3$; $c=8-3\\times2=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $m=3$, $c=2$ ($y=3x+2$).", marks: 1, markCode: "M" },
            { reasoning: "Check: $3\\times6+2=20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$m=3$, $c=2$" },
        },
        {
          id: "olm-u8-s3-sc-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A strong positive correlation between two variables does NOT prove that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are related" },
            { id: "b", text: "The trend is upward" },
            { id: "c", text: "Data was collected" },
            { id: "d", text: "One causes the other" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Correlation vs causation", statement: "No proof of cause." }], steps: [
            { reasoning: "Correlation ≠ causation — confounding possible.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "One causes the other" },
        },
        {
          id: "olm-u8-s3-sc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A line of best fit passes through (0,20) and (10,60). Estimate y when x = 7, and find x when y = 50.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Read line", statement: "$y=4x+20$." }], steps: [
            { reasoning: "Gradient $=\\frac{60-20}{10}=4$; equation $y=4x+20$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=7$: $y=48$.", marks: 1, markCode: "M" },
            { reasoning: "For $y=50$: $x=\\frac{50-20}{4}=7.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: y ≈ 48, x = 7.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "y ≈ 48, x = 7.5" },
        },
        {
          id: "olm-u8-s3-sc-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why anomalies are excluded when drawing a line of best fit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Anomaly", statement: "Off-trend points distort line." }], steps: [
            { reasoning: "Anomalies don't follow the general pattern.", marks: 1, markCode: "M" },
            { reasoning: "Including them would pull the line away from the trend.", marks: 1, markCode: "M" },
            { reasoning: "They may be errors or special cases.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "They distort the trend" },
        },
        {
          id: "olm-u8-s3-sc-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A perfect negative correlation has line through (0,10) and (5,0). Estimate y when x = 2.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Read line", statement: "$y=10-2x$." }], steps: [
            { reasoning: "Gradient $=\\frac{0-10}{5}=-2$; $y=10-2x$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=2$: $y=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olm-u8-s3-sc-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Two scatter diagrams both show positive correlation. Diagram A's points lie very close to the line of best fit; diagram B's points are widely scattered. Which shows stronger correlation and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Correlation strength", statement: "Closeness to line." }], steps: [
            { reasoning: "Diagram A — points cluster tightly around the line.", marks: 1, markCode: "M" },
            { reasoning: "Diagram B's scatter shows weaker relationship.", marks: 1, markCode: "M" },
            { reasoning: "Strength = how well points fit a straight line.", marks: 1, markCode: "M" },
            { reasoning: "Answer: A is stronger.", marks: 1, markCode: "A" },
          ], finalAnswer: "Diagram A" },
        },
      ],
    },
    {
      id: "olm-u8-s3-interp",
      title: "Using scatter diagrams",
      skill: "Interpret scatter diagrams and lines of best fit at O Level.",
      lesson: {
        sections: [
          { heading: "Interpolation vs extrapolation", body: "Interpolation: estimating within the range of data — reasonably reliable. Extrapolation: predicting beyond the data range — unreliable because the trend may not continue. Always state which you're doing. The line of best fit gives a rough estimate, not an exact value." },
          { heading: "Reading values", body: "To estimate y for a given x: find x on horizontal axis, go up to the line, read across to y-axis. For reverse (find x given y): go across to line, down to x-axis. When drawing the line, balance points above and below; ignore anomalies. For exam questions, draw the line with a ruler through the middle of the point cluster." },
        ],
        keyFormulas: [
          { name: "Interpolation", statement: "Estimate within data range" },
          { name: "Extrapolation", statement: "Predict beyond range — unreliable" },
        ],
        workedExample: { problem: "Scatter of study hours vs test score. Line of best fit passes through (2,50) and (6,80). Estimate score for 4 hours.", solution: "Midpoint: $\\left(\\frac{2+6}{2},\\frac{50+80}{2}\\right)=(4,65)$ → ≈65." },
      },
      questions: [
        {
          id: "olm-u8-s3-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Interpolation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Finding the mean" },
            { id: "b", text: "Drawing the line" },
            { id: "c", text: "Estimating within the data range" },
            { id: "d", text: "Predicting beyond data" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Interpolation", statement: "Within range." }], steps: [{ reasoning: "Standard term.", marks: 1, markCode: "A" }], finalAnswer: "Estimating within range" },
        },
        {
          id: "olm-u8-s3-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Why is extrapolation less reliable than interpolation?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Extrapolation", statement: "Trend may not continue." }], steps: [
            { reasoning: "Beyond data range, the relationship may change.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Trend may not continue" },
        },
        {
          id: "olm-u8-s3-in-q3", difficulty: "core", totalMarks: 3,
          stem: "Line of best fit passes through (0,10) and (10,60). Estimate y when x=5.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Read from line", statement: "Linear interpolation." }], steps: [
            { reasoning: "Midpoint: $\\left(5,\\frac{10+60}{2}\\right)=(5,35)$.", marks: 1, markCode: "M" },
            { reasoning: "Or gradient $=\\frac{60-10}{10}=5$; at $x=5$: $y=10+5\\times5=35$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈35.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈35" },
        },
        {
          id: "olm-u8-s3-in-q4", difficulty: "core", totalMarks: 4,
          stem: "A scatter diagram shows shoe size vs height for students aged 10-15. Is it appropriate to use the line of best fit to predict height for a 40-year-old? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Extrapolation danger", statement: "Outside range invalid." }], steps: [
            { reasoning: "No — 40 is far outside the data range (10-15).", marks: 1, markCode: "M" },
            { reasoning: "The relationship likely changes with age.", marks: 1, markCode: "M" },
            { reasoning: "Extrapolation unreliable.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no, extrapolation too far beyond data.", marks: 1, markCode: "A" },
          ], finalAnswer: "No" },
        },
        {
          id: "olm-u8-s3-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Extrapolation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Drawing axes" },
            { id: "b", text: "Estimating within the data range" },
            { id: "c", text: "Predicting beyond the range of the data" },
            { id: "d", text: "Finding the mean" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Extrapolation", statement: "Beyond range." }], steps: [{ reasoning: "Standard term.", marks: 1, markCode: "A" }], finalAnswer: "Predicting beyond the data range" },
        },
        {
          id: "olm-u8-s3-in-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A line of best fit passes through (1,10) and (9,26). Estimate y when x = 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: { principles: [{ kind: "technique", name: "Read line", statement: "$y=2x+8$." }], steps: [
            { reasoning: "Gradient $=\\frac{26-10}{9-1}=2$; $y=2x+8$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=5$: $y=18$.", marks: 1, markCode: "A" },
          ], finalAnswer: "18" },
        },
        {
          id: "olm-u8-s3-in-q7", difficulty: "foundation", totalMarks: 2,
          stem: "For the line $y=2x+1$, find x when y = 11.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reverse read", statement: "Solve for x." }], steps: [
            { reasoning: "$11=2x+1$ → $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u8-s3-in-q8", difficulty: "core", totalMarks: 2,
          stem: "Interpolation is more reliable than extrapolation because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It gives exact values" },
            { id: "b", text: "It uses a calculator" },
            { id: "c", text: "The relationship is known to hold within the observed range" },
            { id: "d", text: "It is faster" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Interpolation", statement: "Within observed range." }], steps: [
            { reasoning: "Data supports the trend only inside its range.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Relationship holds within range" },
        },
        {
          id: "olm-u8-s3-in-q9", difficulty: "core", totalMarks: 3,
          stem: "A line of best fit passes through (3,7) and (7,15). Estimate y when x = 5, and x when y = 11.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Read line", statement: "$y=2x+1$." }], steps: [
            { reasoning: "Gradient $=\\frac{15-7}{7-3}=2$; equation $y=2x+1$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=5$: $y=11$; for $y=11$: $x=5$ (same point on line).", marks: 1, markCode: "M" },
            { reasoning: "Answer: y ≈ 11, x = 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "y ≈ 11, x = 5" },
        },
        {
          id: "olm-u8-s3-in-q10", difficulty: "core", totalMarks: 2,
          stem: "Values read from a line of best fit are best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exact measurements" },
            { id: "b", text: "Guaranteed predictions" },
            { id: "c", text: "Useless" },
            { id: "d", text: "Estimates, not exact values" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Line of best fit", statement: "Summary line ≠ data." }], steps: [
            { reasoning: "The line approximates the trend.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: estimates.", marks: 1, markCode: "A" },
          ], finalAnswer: "Estimates" },
        },
        {
          id: "olm-u8-s3-in-q11", difficulty: "core", totalMarks: 3,
          stem: "Find the gradient of the line through (3,7) and (9,19).",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "$\\Delta y/\\Delta x$." }], steps: [
            { reasoning: "$m=\\frac{19-7}{9-3}=\\frac{12}{6}=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "M" },
            { reasoning: "Check: consistent with both points.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u8-s3-in-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Predicting a value far beyond the data range is unreliable because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The line becomes curved" },
            { id: "b", text: "The relationship may change outside the observed range" },
            { id: "c", text: "The gradient becomes zero" },
            { id: "d", text: "The axes disappear" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Extrapolation", statement: "Trend may not continue." }], steps: [
            { reasoning: "No data supports the trend far outside range.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Relationship may change" },
        },
        {
          id: "olm-u8-s3-in-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A scatter diagram's data covers x = 10 to 20. The line of best fit gives y = 15 at x = 10 and y = 35 at x = 20. (a) Estimate y at x = 15. (b) Is estimating y at x = 35 reliable? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inter/extrapolation", statement: "Inside vs outside range." }], steps: [
            { reasoning: "(a) Gradient $=\\frac{35-15}{10}=2$; at $x=15$: $y=15+2\\times5=25$.", marks: 1, markCode: "M" },
            { reasoning: "(b) x = 35 is far outside 10–20 → extrapolation.", marks: 1, markCode: "M" },
            { reasoning: "Unreliable — trend may not continue.", marks: 1, markCode: "M" },
            { reasoning: "Answer: y ≈ 25; x=35 unreliable.", marks: 1, markCode: "A" },
          ], finalAnswer: "y ≈ 25; x=35 unreliable" },
        },
        {
          id: "olm-u8-s3-in-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the steps to estimate x when y = 40 from a scatter diagram with a line of best fit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse reading", statement: "Across then down." }], steps: [
            { reasoning: "Locate y = 40 on the vertical axis.", marks: 1, markCode: "M" },
            { reasoning: "Go horizontally to the line of best fit.", marks: 1, markCode: "M" },
            { reasoning: "Go vertically down to the x-axis and read the value.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Across to line, down to x-axis" },
        },
        {
          id: "olm-u8-s3-in-q15", difficulty: "challenge", totalMarks: 3,
          stem: "For the line $y=3x-4$, find x when y = 17.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reverse read", statement: "Solve for x." }], steps: [
            { reasoning: "$17=3x-4$ → $3x=21$ → $x=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "M" },
            { reasoning: "Check: $3\\times7-4=17$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u8-s3-in-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Data is collected for temperatures from 10°C to 30°C. A student uses the line of best fit to predict the value at 5°C and at 25°C. Which prediction is reliable and which is not? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Inter vs extrapolation", statement: "Inside vs outside range." }], steps: [
            { reasoning: "25°C is within 10–30 → interpolation, reasonably reliable.", marks: 1, markCode: "M" },
            { reasoning: "5°C is below the range → extrapolation, unreliable.", marks: 1, markCode: "M" },
            { reasoning: "Trend may not hold at 5°C.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 25 reliable, 5 not.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 reliable; 5 not" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u8-s3-scatter-notes", title: "Scatter diagrams — notes", summary: "Correlation and lines of best fit.",
      sections: [
        { heading: "Correlation", body: "Positive/negative/none; strength strong-moderate-weak; anomaly = off-trend point." },
        { heading: "Line of best fit", body: "Balance points; interpolation reliable, extrapolation risky; correlation ≠ causation." },
      ] },
  ],
};

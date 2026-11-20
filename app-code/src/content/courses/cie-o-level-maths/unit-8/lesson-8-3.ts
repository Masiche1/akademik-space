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
            { id: "a", text: "Positive" }, { id: "b", text: "Negative" }, { id: "c", text: "Zero" }, { id: "d", text: "Perfect" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Estimating within the data range" }, { id: "b", text: "Predicting beyond data" }, { id: "c", text: "Drawing the line" }, { id: "d", text: "Finding the mean" },
          ], correctChoiceId: "a" },
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

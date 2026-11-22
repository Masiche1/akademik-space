import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ciem-u10-lesson-10-3",
  code: "10-3",
  title: "Scatter Diagrams and Correlation",
  goal: "I CAN interpret scatter diagrams, correlation and lines of best fit.",
  standards: ["Cambridge IGCSE Mathematics 0580 Extended: statistics"],
  vocabulary: [
    { term: "Scatter diagram", definition: "Plot of paired (x, y) data." },
    { term: "Correlation", definition: "Relationship pattern: positive, negative or none." },
    { term: "Line of best fit", definition: "Trend line balancing points above and below." },
    { term: "Interpolation", definition: "Estimating within the data range." },
    { term: "Extrapolation", definition: "Estimating beyond the data range; less reliable." },
    { term: "Outlier", definition: "Point far from the general pattern." },
  ],
  concepts: [
    {
      id: "ciem-u10-s3-scatter",
      title: "Scatter diagrams and correlation",
      skill: "Interpret scatter diagrams and lines of best fit.",
      lesson: {
        sections: [
          {
            heading: "Types of correlation",
            body: "Positive: both variables increase together. Negative: one increases as the other decreases. No correlation: points show no trend. The strength of correlation is described as strong or weak depending on how tightly points cluster around a trend. Correlation does NOT prove causation — a third variable may drive both.",
          },
          {
            heading: "Line of best fit",
            body: "Draw a straight line through the points so roughly equal numbers lie above and below, ignoring outliers. Use it to estimate values: interpolation (inside the range) is reliable; extrapolation (outside) assumes the trend continues and is less trustworthy. The line need not pass through any data point.",
          },
        ],
        keyFormulas: [
          { name: "Correlation", statement: "Positive / negative / none" },
        ],
        workedExample: {
          problem: "Hours studied vs test score points rise left to right. Identify the correlation.",
          solution: "Positive correlation — scores tend to rise with hours studied.",
        },
      },
      questions: [
        {
          id: "ciem-u10-s3-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As temperature rises, ice cream sales rise. What correlation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Negative" },
            { id: "b", text: "Perfect negative" },
            { id: "c", text: "Positive" },
            { id: "d", text: "None" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "Both variables move together." }],
            steps: [{ reasoning: "Both increase together: positive correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "Positive",
          },
        },
        {
          id: "ciem-u10-s3-sc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A scatter diagram's points fall from left to right. Describe the correlation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "Negative: one up, other down." }],
            steps: [
              { reasoning: "As $x$ increases, $y$ decreases.", marks: 1, markCode: "M" },
              { reasoning: "Answer: negative correlation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Negative correlation",
          },
        },
        {
          id: "ciem-u10-s3-sc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line of best fit passes through (0, 2) and (10, 12). Estimate y when x = 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Read/interpolate on the line." }],
            steps: [
              { reasoning: "Gradient $= \\frac{12-2}{10} = 1$; $y = x + 2$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=5$: $y = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "ciem-u10-s3-sc-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Shoe size vs exam score shows no pattern. Describe the correlation, and explain why 'larger shoe size causes higher scores' is a flawed conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation vs causation", statement: "No pattern = no correlation; correlation ≠ cause." }],
            steps: [
              { reasoning: "No correlation — points show no trend.", marks: 1, markCode: "M" },
              { reasoning: "Even with correlation, a lurking variable (e.g. age) may drive both.", marks: 1, markCode: "M" },
              { reasoning: "Causation requires more than correlation.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No correlation; correlation does not prove causation",
          },
        },
        {
          id: "ciem-u10-s3-sc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As $x$ increases, $y$ decreases. What type of correlation is shown?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perfect positive" },
            { id: "b", text: "Negative" },
            { id: "c", text: "Positive" },
            { id: "d", text: "None" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "Negative: one variable up, the other down." }],
            steps: [{ reasoning: "One variable increases as the other decreases: negative correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Negative",
          },
        },
        {
          id: "ciem-u10-s3-sc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hours of TV watched and number of books read show no pattern when plotted together. What correlation is shown?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Negative" },
            { id: "b", text: "Strong positive" },
            { id: "c", text: "None" },
            { id: "d", text: "Positive" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "No pattern = no correlation." }],
            steps: [{ reasoning: "Points show no trend, so there is no correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** None",
          },
        },
        {
          id: "ciem-u10-s3-sc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line of best fit passes through (0, 1) and (4, 9). Estimate $y$ when $x = 3$.",
          response: { type: "numeric", parts: [{ label: "y", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Read/interpolate on the line." }],
            steps: [
              { reasoning: "Gradient $= \\frac{9-1}{4} = 2$; $y = 2x + 1$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=3$: $y = 2(3)+1 = 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "ciem-u10-s3-sc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why interpolation is more reliable than extrapolation when using a line of best fit.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Interpolation vs extrapolation", statement: "Interpolation stays within the data range; extrapolation goes beyond it." }],
            steps: [
              { reasoning: "Interpolation estimates values inside the range of observed data, where the trend is supported by points.", marks: 1, markCode: "M" },
              { reasoning: "Extrapolation assumes the trend continues beyond the data, which may not hold.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Interpolation is supported by the data; extrapolation is not",
          },
        },
        {
          id: "ciem-u10-s3-sc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "When drawing a line of best fit on a scatter diagram, you should:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Connect the first and last points" },
            { id: "b", text: "Always draw the line through the origin" },
            { id: "c", text: "Balance points above and below, ignoring outliers" },
            { id: "d", text: "Make the line pass through every point" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Roughly equal numbers of points above and below." }],
            steps: [{ reasoning: "The line follows the trend with balanced points, ignoring outliers.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Balance points above and below, ignoring outliers",
          },
        },
        {
          id: "ciem-u10-s3-sc-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line of best fit passes through (2, 5) and (6, 13). Estimate $x$ when $y = 15$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Find the equation, then read off $x$." }],
            steps: [
              { reasoning: "Gradient $= \\frac{13-5}{6-2} = 2$; $y = 2x + 1$.", marks: 1, markCode: "M" },
              { reasoning: "$15 = 2x + 1 \\Rightarrow x = 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "ciem-u10-s3-sc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ice cream sales and drowning incidents both rise in summer. Explain why claiming ice cream causes drowning is flawed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation vs causation", statement: "Correlation does not prove cause." }],
            steps: [
              { reasoning: "Both variables are linked to hot weather, a lurking variable.", marks: 1, markCode: "M" },
              { reasoning: "Correlation alone cannot establish that one variable causes the other.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A third variable (hot weather) drives both; correlation is not causation",
          },
        },
        {
          id: "ciem-u10-s3-sc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Positive correlation means that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "One variable increases as the other decreases" },
            { id: "b", text: "One variable causes the other" },
            { id: "c", text: "Both variables tend to increase together" },
            { id: "d", text: "There is no relationship" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Positive correlation", statement: "Both variables move in the same direction." }],
            steps: [{ reasoning: "Positive correlation: as $x$ rises, $y$ tends to rise.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Both variables tend to increase together",
          },
        },
        {
          id: "ciem-u10-s3-sc-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A line of best fit passes through (1, 4) and (5, 12). Estimate $y$ when $x = 9$, commenting on reliability.",
          response: { type: "numeric", parts: [{ label: "y", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Gradient $=$ rise/run; extrapolation is less reliable." }],
            steps: [
              { reasoning: "Gradient $= \\frac{12-4}{5-1} = 2$; $y = 2x + 2$, so at $x=9$: $y = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $20$; this is extrapolation beyond the data range, so it is less reliable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 (extrapolation, less reliable)",
          },
        },
        {
          id: "ciem-u10-s3-sc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Points on a scatter diagram rise from left to right and cluster tightly around a straight line. This is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Strong positive correlation" },
            { id: "b", text: "Weak positive correlation" },
            { id: "c", text: "No correlation" },
            { id: "d", text: "Negative correlation" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation strength", statement: "Tight clustering = strong correlation." }],
            steps: [{ reasoning: "Rising trend with tight clustering: strong positive correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Strong positive correlation",
          },
        },
        {
          id: "ciem-u10-s3-sc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter diagram shows hours of practice against race times, with a negative correlation. A coach claims more practice causes faster times. Discuss whether the data supports this conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation vs causation", statement: "Correlation does not prove cause." }],
            steps: [
              { reasoning: "The data shows negative correlation: more practice is associated with faster times.", marks: 1, markCode: "M" },
              { reasoning: "Correlation alone does not prove causation.", marks: 1, markCode: "M" },
              { reasoning: "Other factors (natural ability, coaching quality) could explain the pattern.", marks: 1, markCode: "M" },
              { reasoning: "Answer discussed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correlation supports an association but not necessarily causation",
          },
        },
        {
          id: "ciem-u10-s3-sc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line of best fit relating revision hours $x$ to test score $y$ is $y = 4x + 30$. The data range is $x = 2$ to $x = 15$. Estimate the score for $x = 12$ and comment on how reliable the estimate is.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Substitute into the line; check interpolation vs extrapolation." }],
            steps: [
              { reasoning: "$y = 4(12) + 30 = 78$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 12$ lies inside the data range $2 \\le x \\le 15$.", marks: 1, markCode: "M" },
              { reasoning: "This is interpolation, so the estimate is reasonably reliable.", marks: 1, markCode: "M" },
              { reasoning: "Answer: score $\\approx 78$, reliable estimate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "78; interpolation within the data range, so reliable",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u10-s3-scatter-notes",
      title: "Scatter diagrams — revision notes",
      summary: "Correlation types, line of best fit, interpolation vs extrapolation.",
      sections: [
        { heading: "Correlation", body: "Positive / negative / none. Correlation ≠ causation." },
        { heading: "Best fit", body: "Balance points above/below; ignore outliers; interpolate reliably, extrapolate cautiously." },
      ],
    },
  ],
};

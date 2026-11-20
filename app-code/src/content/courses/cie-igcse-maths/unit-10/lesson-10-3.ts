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
            { id: "a", text: "Positive" }, { id: "b", text: "Negative" }, { id: "c", text: "None" }, { id: "d", text: "Perfect negative" },
          ], correctChoiceId: "a" },
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

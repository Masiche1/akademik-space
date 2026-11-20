import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cimg-u8-lesson-8-2",
  code: "8-2",
  title: "Grouped Data, Cumulative Frequency and Scatter",
  goal: "I CAN handle grouped data, cumulative frequency graphs and scatter diagrams.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: statistics"],
  vocabulary: [
    { term: "Frequency density", definition: "Frequency ÷ class width; height of a histogram bar." },
    { term: "Cumulative frequency", definition: "Running total of frequencies up to each value." },
    { term: "Ogive", definition: "Cumulative frequency graph (S-shaped curve)." },
    { term: "Scatter diagram", definition: "Plot of paired data showing correlation." },
    { term: "Line of best fit", definition: "Trend line drawn through scatter points." },
  ],
  concepts: [
    {
      id: "cimg-u8-s2-grouped",
      title: "Grouped data and cumulative frequency",
      skill: "Estimate statistics from grouped and cumulative data.",
      lesson: {
        sections: [
          {
            heading: "Histograms and frequency density",
            body: "For grouped data with unequal class widths, histogram height $=$ frequency density $= \\frac{\\text{frequency}}{\\text{class width}}$. Area of each bar $=$ frequency. Reading a histogram gives estimates since exact values are unknown — use class midpoints.",
          },
          {
            heading: "Cumulative frequency",
            body: "Cumulative frequency adds each frequency to the running total; plot against upper class boundary for an ogive (S-shaped curve). Read medians, quartiles ($Q_1$, $Q_3$) and interquartile range from the graph: $\\text{IQR} = Q_3 - Q_1$. Estimate the median as the value at $\\frac{n}{2}$ cumulative frequency.",
          },
        ],
        keyFormulas: [
          { name: "Frequency density", statement: "$\\frac{f}{\\text{class width}}$" },
          { name: "Interquartile range", statement: "$Q_3 - Q_1$" },
        ],
        workedExample: {
          problem: "Classes 0–10, 10–20, 20–30 have frequencies 4, 6, 10. Find the frequency density of the 20–30 class.",
          solution: "Width $= 10$, frequency $= 10$, density $= \\frac{10}{10} = 1$.",
        },
      },
      questions: [
        {
          id: "cimg-u8-s2-gd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A class 20–30 has frequency 15. Find its frequency density.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "frequency ÷ class width." }],
            steps: [
              { reasoning: "Width $= 10$; density $= \\frac{15}{10} = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5",
          },
        },
        {
          id: "cimg-u8-s2-gd-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Frequencies for classes 0–5, 5–10, 10–15 are 3, 7, 10. Find the cumulative frequency at 15.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative frequency", statement: "Running total." }],
            steps: [
              { reasoning: "Cumulative: 3, 10, 20.", marks: 1, markCode: "M" },
              { reasoning: "At 15: $3+7+10 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cimg-u8-s2-gd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "From an ogive, $Q_1 = 12$, $Q_3 = 28$. Find the interquartile range.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "IQR", statement: "$Q_3 - Q_1$." }],
            steps: [
              { reasoning: "$\\text{IQR} = 28 - 12$.", marks: 1, markCode: "M" },
              { reasoning: "$= 16$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 16.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "cimg-u8-s2-gd-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Classes 0–10 and 10–20 have widths 10 and 10, frequencies 8 and 24. Find the frequency density of each class and state which is taller on a histogram.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Histogram heights", statement: "Density = f/width; taller = larger density." }],
            steps: [
              { reasoning: "Class 1: $\\frac{8}{10} = 0.8$.", marks: 1, markCode: "M" },
              { reasoning: "Class 2: $\\frac{24}{10} = 2.4$.", marks: 1, markCode: "M" },
              { reasoning: "Class 2 is taller (2.4 > 0.8).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.8 and 2.4; second class taller",
          },
        },
      ],
    },
    {
      id: "cimg-u8-s2-scatter",
      title: "Scatter diagrams and correlation",
      skill: "Interpret scatter diagrams and lines of best fit.",
      lesson: {
        sections: [
          {
            heading: "Correlation",
            body: "Scatter diagrams plot paired data $(x,y)$. Positive correlation: both rise together; negative: one rises as the other falls; no correlation: no pattern. Correlation does NOT prove causation — a lurking variable may drive both.",
          },
          {
            heading: "Line of best fit",
            body: "Draw a straight line through the points balancing them above and below, ignoring outliers. Use it to estimate $y$ for a given $x$ (interpolation) or beyond the data (extrapolation — less reliable). The line need not pass through any point exactly.",
          },
        ],
        keyFormulas: [
          { name: "Correlation types", statement: "Positive / negative / none" },
        ],
        workedExample: {
          problem: "Hours studied vs test score show points rising left to right. What correlation is this?",
          solution: "Positive correlation — as hours increase, scores tend to increase.",
        },
      },
      questions: [
        {
          id: "cimg-u8-s2-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As temperature rises, ice cream sales rise. What type of correlation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Positive" }, { id: "b", text: "Negative" }, { id: "c", text: "None" }, { id: "d", text: "Perfect" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "Both variables move together." }],
            steps: [{ reasoning: "Both increase together: positive correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "Positive",
          },
        },
        {
          id: "cimg-u8-s2-sc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A scatter diagram shows points falling left to right. Describe the correlation.",
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
          id: "cimg-u8-s2-sc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line of best fit passes through (0, 2) and (10, 12). Estimate y when x = 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Read/interpolate on the line." }],
            steps: [
              { reasoning: "Gradient $= \\frac{12-2}{10} = 1$; equation $y = x + 2$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=5$: $y = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cimg-u8-s2-sc-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A scatter diagram shows shoe size vs exam score with no pattern. Describe the correlation and whether shoe size causes scores.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation vs causation", statement: "No pattern = no correlation; correlation ≠ cause." }],
            steps: [
              { reasoning: "No correlation — points show no trend.", marks: 1, markCode: "M" },
              { reasoning: "Correlation (even if present) does not prove causation.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No correlation; no causal link",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u8-s2-grouped-notes",
      title: "Grouped data and scatter — revision notes",
      summary: "Frequency density, ogives, correlation.",
      sections: [
        { heading: "Grouped data", body: "Density = f/width. Ogive: cumulative frequency vs upper boundary; read $Q_1,Q_3$ for IQR." },
        { heading: "Scatter", body: "Positive/negative/no correlation; line of best fit; correlation ≠ causation." },
      ],
    },
  ],
};

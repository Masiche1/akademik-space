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
        {
          id: "cimg-u8-s2-gd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A class 0–20 has frequency 40. What is its frequency density?",
          response: { type: "mcq", choices: [
            { id: "a", text: "40" },
            { id: "b", text: "0.5" },
            { id: "c", text: "20" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "frequency ÷ class width." }],
            steps: [{ reasoning: "Density $= \\frac{40}{20} = 2$.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u8-s2-gd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Classes have frequencies 5, 8 and 7. Find the total frequency (final cumulative frequency).",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative frequency", statement: "Running total." }],
            steps: [
              { reasoning: "$5 + 8 + 7 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cimg-u8-s2-gd-q7",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Classes 0–10, 10–20 and 20–30 each have frequency 10, 20 and 10. Using class midpoints, estimate the mean.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimated mean", statement: "Use midpoints: $\\frac{\\sum fm}{\\sum f}$." }],
            steps: [
              { reasoning: "Midpoints 5, 15, 25: $\\sum fm = (10\\times5)+(20\\times15)+(10\\times25) = 50+300+250 = 600$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sum f = 40$; mean $= \\frac{600}{40} = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u8-s2-gd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a cumulative frequency (ogive) graph, cumulative frequency is plotted against what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Class midpoint" },
            { id: "b", text: "Frequency density" },
            { id: "c", text: "Upper class boundary" },
            { id: "d", text: "Class width" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ogive", statement: "Cumulative frequency vs upper class boundary." }],
            steps: [{ reasoning: "The ogive plots cumulative frequency against upper class boundaries.", marks: 1, markCode: "A" }],
            finalAnswer: "Upper class boundary",
          },
        },
        {
          id: "cimg-u8-s2-gd-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An ogive for 40 values gives $Q_1 = 14$ and $Q_3 = 26$. Find the interquartile range.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "IQR", statement: "$Q_3 - Q_1$." }],
            steps: [
              { reasoning: "$\\text{IQR} = 26 - 14$.", marks: 1, markCode: "M" },
              { reasoning: "$= 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u8-s2-gd-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "A histogram has class 0–5 with frequency 10 and class 5–20 with frequency 30. Find each frequency density and state whether the bars have equal height.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Histogram heights", statement: "Density = f/width." }],
            steps: [
              { reasoning: "Class 0–5: width 5, density $= \\frac{10}{5} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Class 5–20: width 15, density $= \\frac{30}{15} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Both densities are 2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: heights are equal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both densities 2; equal heights",
          },
        },
        {
          id: "cimg-u8-s2-gd-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Grouped data: classes 0–10, 10–20, 20–30 with frequencies 10, 20, 10 (total 40). Estimate the median.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimated median", statement: "Median position $= \\frac{n}{2}$ in cumulative frequency." }],
            steps: [
              { reasoning: "Median position $= \\frac{40}{2} = 20$; this lies in class 10–20.", marks: 1, markCode: "M" },
              { reasoning: "Estimated median $= 10 + \\frac{20-10}{20} \\times 10 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u8-s2-gd-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A histogram has class A: width 10, frequency 20; class B: width 5, frequency 15. Which class has the greater frequency density?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are equal" },
            { id: "b", text: "Class A" },
            { id: "c", text: "Class B" },
            { id: "d", text: "Cannot tell" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "frequency ÷ class width." }],
            steps: [{ reasoning: "A: $\\frac{20}{10} = 2$; B: $\\frac{15}{5} = 3$ — B is taller.", marks: 1, markCode: "A" }],
            finalAnswer: "Class B",
          },
        },
        {
          id: "cimg-u8-s2-gd-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An ogive for 40 values shows cumulative frequency 35 at value 25. Estimate how many values are greater than 25.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative frequency", statement: "Values above = total − cumulative." }],
            steps: [
              { reasoning: "Cumulative frequency at 25 is 35, meaning 35 values are ≤ 25.", marks: 1, markCode: "M" },
              { reasoning: "Values greater than 25 $= 40 - 35 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "M" },
              { reasoning: "Stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u8-s2-gd-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Classes 0–5 and 5–15 have frequencies 6 and 14. Using midpoints, estimate the mean.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7.75 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimated mean", statement: "Use midpoints: $\\frac{\\sum fm}{\\sum f}$." }],
            steps: [
              { reasoning: "Midpoints 2.5 and 10: $\\sum fm = (6\\times2.5)+(14\\times10) = 15+140 = 155$; $\\sum f = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{155}{20} = 7.75$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7.75",
          },
        },
        {
          id: "cimg-u8-s2-gd-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cumulative frequency table gives: at 10, cf = 8; at 20, cf = 26; at 30, cf = 40 (total 40). Estimate $Q_1$ and $Q_3$ and hence the IQR.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quartiles from ogive", statement: "$Q_1$ at $\\frac{n}{4}$, $Q_3$ at $\\frac{3n}{4}$." }],
            steps: [
              { reasoning: "$Q_1$ position $= 10$: in class 10–20; estimate $10 + \\frac{10-8}{18}\\times10 \\approx 11.1$.", marks: 1, markCode: "M" },
              { reasoning: "$Q_3$ position $= 30$: in class 20–30; estimate $20 + \\frac{30-26}{14}\\times10 \\approx 22.9$.", marks: 1, markCode: "M" },
              { reasoning: "IQR $\\approx 22.9 - 11.1 = 11.8$ (accept estimates near 12).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IQR approximately 12",
          },
        },
        {
          id: "cimg-u8-s2-gd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two classes have the same total frequency. Class X uses one wide class 0–40 with frequency 20; class Y uses four equal classes 0–10, 10–20, 20–30, 30–40 each with frequency 5. On histograms, which is taller and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Frequency density", statement: "Density = f/width; compare heights." }],
            steps: [
              { reasoning: "X: density $= \\frac{20}{40} = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "Y: each density $= \\frac{5}{10} = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "The heights are equal because density depends on f ÷ width, not frequency alone.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Equal heights; both densities 0.5",
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
            { id: "a", text: "Positive" },
            { id: "b", text: "Perfect" },
            { id: "c", text: "Negative" },
            { id: "d", text: "None" },
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
        {
          id: "cimg-u8-s2-sc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As a car gets older, its value tends to decrease. What type of correlation is this?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No correlation" },
            { id: "b", text: "Negative" },
            { id: "c", text: "Positive" },
            { id: "d", text: "Perfect correlation" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "One up, other down." }],
            steps: [{ reasoning: "As age increases, value decreases: negative correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "Negative",
          },
        },
        {
          id: "cimg-u8-s2-sc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A line of best fit passes through (0, 0) and (4, 8). Estimate y when x = 3.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Read/interpolate on the line." }],
            steps: [
              { reasoning: "Gradient $= \\frac{8-0}{4} = 2$; equation $y = 2x$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=3$: $y = 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u8-s2-sc-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A scatter diagram shows points rising from left to right. Describe the correlation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "Positive: both increase together." }],
            steps: [
              { reasoning: "As $x$ increases, $y$ tends to increase.", marks: 1, markCode: "M" },
              { reasoning: "Answer: positive correlation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive correlation",
          },
        },
        {
          id: "cimg-u8-s2-sc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How should a line of best fit be drawn on a scatter diagram?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Through the first and last points only" },
            { id: "b", text: "Horizontal always" },
            { id: "c", text: "Through every point" },
            { id: "d", text: "Balancing points above and below, ignoring outliers" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Trend line balancing points." }],
            steps: [{ reasoning: "The line balances points above and below and ignores outliers.", marks: 1, markCode: "A" }],
            finalAnswer: "Balancing points above and below",
          },
        },
        {
          id: "cimg-u8-s2-sc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line of best fit has equation $y = 2x + 1$. Estimate y when x = 7.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Substitute into the line's equation." }],
            steps: [
              { reasoning: "$y = 2(7) + 1 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "M" },
              { reasoning: "Stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u8-s2-sc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why using a line of best fit to estimate values far outside the range of the data is less reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Extrapolation", statement: "Estimates beyond data range are unreliable." }],
            steps: [
              { reasoning: "Extrapolation assumes the trend continues beyond observed data.", marks: 1, markCode: "M" },
              { reasoning: "The relationship may change outside the data range, so the estimate is less reliable.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Extrapolation is less reliable",
          },
        },
        {
          id: "cimg-u8-s2-sc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scatter diagram shows strong positive correlation between hours of exercise and fitness score. What can we conclude?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exercise definitely causes higher scores" },
            { id: "b", text: "Fitness score causes exercise" },
            { id: "c", text: "There is no relationship" },
            { id: "d", text: "There is a positive association, but causation is not proven" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation vs causation", statement: "Correlation does not prove cause." }],
            steps: [{ reasoning: "Correlation shows association only; other factors may be involved.", marks: 1, markCode: "A" }],
            finalAnswer: "Positive association; causation not proven",
          },
        },
        {
          id: "cimg-u8-s2-sc-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A scatter diagram of temperature (°C) against ice cream sales shows positive correlation. Describe what the diagram shows and explain one limitation of using it to predict sales for a new temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Scatter interpretation", statement: "Describe trend; note limits of prediction." }],
            steps: [
              { reasoning: "As temperature rises, sales tend to rise — positive correlation.", marks: 1, markCode: "M" },
              { reasoning: "A line of best fit could estimate sales at a given temperature.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: correlation does not prove causation, and extrapolation beyond data is unreliable.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive correlation; estimates limited",
          },
        },
        {
          id: "cimg-u8-s2-sc-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A line of best fit passes through (2, 5) and (6, 13). Estimate y when x = 8.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Find equation then substitute." }],
            steps: [
              { reasoning: "Gradient $= \\frac{13-5}{6-2} = 2$; using $(2,5)$: $y - 5 = 2(x-2)$, so $y = 2x+1$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=8$: $y = 2(8)+1 = 17$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u8-s2-sc-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "One point lies far from the other points on a scatter diagram. How should it be treated when drawing a line of best fit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is averaged with all points" },
            { id: "b", text: "It is ignored as an outlier" },
            { id: "c", text: "It defines the line alone" },
            { id: "d", text: "It must be included exactly" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Outliers", statement: "Outliers are ignored when drawing the line." }],
            steps: [{ reasoning: "A point far from the trend is treated as an outlier and ignored.", marks: 1, markCode: "A" }],
            finalAnswer: "Ignored as an outlier",
          },
        },
        {
          id: "cimg-u8-s2-sc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter diagram of weekly study hours (x) against test score (y) shows positive correlation with a line of best fit through (0, 20) and (10, 70). (a) Find the equation of the line. (b) Estimate the score for 6 hours of study. (c) State one reason the estimate might not be accurate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line of best fit", statement: "Gradient-intercept then interpolate; note reliability." }],
            steps: [
              { reasoning: "Gradient $= \\frac{70-20}{10} = 5$; $y = 5x + 20$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=6$: $y = 5(6)+20 = 50$.", marks: 1, markCode: "M" },
              { reasoning: "Estimates are approximate; correlation is not causation and scatter exists around the line.", marks: 1, markCode: "M" },
              { reasoning: "Answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=5x+20$; (b) 50; (c) estimate only",
          },
        },
        {
          id: "cimg-u8-s2-sc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter diagram plots number of cars in a city (x) against average journey time (y). Points rise from left to right. Discuss the correlation and explain why you cannot conclude that more cars cause longer journeys.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation vs causation", statement: "Association ≠ cause." }],
            steps: [
              { reasoning: "Points rise left to right: positive correlation — more cars, longer journeys tend to occur.", marks: 1, markCode: "M" },
              { reasoning: "Correlation shows association, not proof of causation.", marks: 1, markCode: "M" },
              { reasoning: "A lurking variable (e.g. city size, road congestion) may drive both.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive correlation; causation not proven",
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

import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "olm-u8-lesson-8-2",
  code: "8-2",
  title: "Grouped Data and Cumulative Frequency",
  goal: "I CAN handle grouped data, histograms and cumulative frequency graphs.",
  standards: ["4024: statistics"],
  vocabulary: [
    { term: "Grouped data", definition: "Data organised into class intervals." },
    { term: "Histogram", definition: "Bar chart with bars touching, area = frequency." },
    { term: "Ogive", definition: "Cumulative frequency curve (S-shaped)." },
    { term: "Class boundary", definition: "Midpoint between upper limit of one class and lower of next." },
  ],
  concepts: [
    {
      id: "olm-u8-s2-grouped",
      title: "Grouped data and histograms",
      skill: "Work with grouped data and histograms at O Level.",
      lesson: {
        sections: [
          { heading: "Class intervals", body: "Grouped data uses ranges like 10–20, 20–30. Class boundaries are the midpoints between intervals: for 10–20 and 20–30, the boundary is 20 (or technically 19.5–20.5 for discrete data). Midpoint of each class estimates the average value in that class. Frequency density = frequency ÷ class width — used for histograms where bars touch and area represents frequency." },
          { heading: "Histograms", body: "Unlike bar charts, histogram bars touch (continuous data). The height is frequency density, not frequency — so a wider class with same frequency has a shorter bar. To find frequency from a histogram: area of bar = frequency density × class width. This is essential for comparing distributions with unequal class widths." },
        ],
        keyFormulas: [
          { name: "Frequency density", statement: "$\\frac{\\text{frequency}}{\\text{class width}}$" },
          { name: "Class midpoint", statement: "$\\frac{\\text{lower}+\\text{upper}}{2}$" },
        ],
        workedExample: { problem: "Class 20–30 has frequency 15. Find frequency density.", solution: "Width = 10; density = $\\frac{15}{10}=1.5$." },
      },
      questions: [
        {
          id: "olm-u8-s2-gr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a histogram, bar height represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Frequency density" }, { id: "b", text: "Frequency" }, { id: "c", text: "Class width" }, { id: "d", text: "Midpoint" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Histogram", statement: "Height = density." }], steps: [{ reasoning: "Standard property.", marks: 1, markCode: "A" }], finalAnswer: "Frequency density" },
        },
        {
          id: "olm-u8-s2-gr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Class 30–40 has frequency 20. Find the frequency density.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$f/\\text{width}$." }], steps: [
            { reasoning: "$\\frac{20}{10}=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u8-s2-gr-q3", difficulty: "core", totalMarks: 3,
          stem: "A histogram bar spans 10–30 with height 3. Find the frequency.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Frequency from histogram", statement: "Area = density × width." }], steps: [
            { reasoning: "Width $=20$; frequency $=3\\times20=60$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 60.", marks: 1, markCode: "M" },
            { reasoning: "Check: density 3 × width 20 = 60 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "60" },
        },
        {
          id: "olm-u8-s2-gr-q4", difficulty: "core", totalMarks: 4,
          stem: "Grouped data: 0–10 (freq 5), 10–20 (freq 15), 20–40 (freq 10). Estimate the mean using class midpoints.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimated mean", statement: "Midpoints × frequencies." }], steps: [
            { reasoning: "Midpoints: 5, 15, 30; $\\sum fx=5\\times5+15\\times15+30\\times10=25+225+300=550$.", marks: 1, markCode: "M" },
            { reasoning: "$\\sum f=30$; mean $=\\frac{550}{30}=18.3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈18.3.", marks: 1, markCode: "M" },
            { reasoning: "Note: estimate only — true mean needs raw data.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈18.3" },
        },
      ],
    },
    {
      id: "olm-u8-s2-ogive",
      title: "Cumulative frequency and ogives",
      skill: "Read and interpret cumulative frequency graphs at O Level.",
      lesson: {
        sections: [
          { heading: "Building the ogive", body: "Cumulative frequency adds frequencies up: for each class, CF = running total. Plot CF against upper class boundary (not midpoint). The result is an S-shaped ogive. Always use upper boundaries — using midpoints is a common error." },
          { heading: "Reading the graph", body: "Median: read across at $\\frac{n}{2}$ cumulative frequency, down to the axis. Quartiles: at $\\frac{n}{4}$ and $\\frac{3n}{4}$. IQR = $Q_3-Q_1$ measures spread of middle 50%. For grouped data, interpolate within the relevant class — the graph gives estimates, not exact values." },
        ],
        keyFormulas: [
          { name: "Median", statement: "CF $=\\frac{n}{2}$ on ogive" },
          { name: "IQR", statement: "$Q_3-Q_1$ from ogive" },
        ],
        workedExample: { problem: "n=100. Median is at CF=50, Q1 at CF=25, Q3 at CF=75 on the ogive.", solution: "Read off corresponding x-values for each." },
      },
      questions: [
        {
          id: "olm-u8-s2-og-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An ogive plots…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cumulative frequency vs upper class boundary" }, { id: "b", text: "Frequency vs midpoint" }, { id: "c", text: "Frequency density vs width" }, { id: "d", text: "Mean vs median" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Ogive", statement: "CF vs upper boundary." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "CF vs upper class boundary" },
        },
        {
          id: "olm-u8-s2-og-q2", difficulty: "foundation", totalMarks: 2,
          stem: "For n=80, at what cumulative frequency is the median read?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Median position", statement: "$n/2$." }], steps: [
            { reasoning: "$80/2=40$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: CF = 40.", marks: 1, markCode: "A" },
          ], finalAnswer: "40" },
        },
        {
          id: "olm-u8-s2-og-q3", difficulty: "core", totalMarks: 3,
          stem: "On an ogive, Q1 is at x=15 and Q3 is at x=28. Find the IQR.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "IQR", statement: "$Q_3-Q_1$." }], steps: [
            { reasoning: "$IQR=28-15=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13.", marks: 1, markCode: "M" },
            { reasoning: "Smaller IQR = less spread in middle 50%.", marks: 1, markCode: "A" },
          ], finalAnswer: "13" },
        },
        {
          id: "olm-u8-s2-og-q4", difficulty: "core", totalMarks: 4,
          stem: "Grouped data: 0–10 (10), 10–20 (25), 20–30 (35), 30–40 (30). Find the median class.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Median class", statement: "CF reaches n/2." }], steps: [
            { reasoning: "Total n=100; median at CF=50.", marks: 1, markCode: "M" },
            { reasoning: "CF: 10, 35, 70, 100 → CF=50 falls in class 20–30.", marks: 1, markCode: "M" },
            { reasoning: "Median class: 20–30.", marks: 1, markCode: "M" },
            { reasoning: "Estimate median by interpolation within that class.", marks: 1, markCode: "A" },
          ], finalAnswer: "20–30" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u8-s2-group-notes", title: "Grouped data — notes", summary: "Histograms and cumulative frequency.",
      sections: [
        { heading: "Histogram", body: "Height = frequency density; area = frequency; bars touch." },
        { heading: "Ogive", body: "CF vs upper boundary; median at $n/2$; IQR = $Q_3-Q_1$." },
      ] },
  ],
};

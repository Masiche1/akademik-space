import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ciem-u10-lesson-10-2",
  code: "10-2",
  title: "Grouped Data and Cumulative Frequency",
  goal: "I CAN work with grouped data, histograms and ogives.",
  standards: ["Cambridge IGCSE Mathematics 0580 Extended: statistics"],
  vocabulary: [
    { term: "Frequency density", definition: "Frequency ÷ class width; histogram bar height." },
    { term: "Class midpoint", definition: "Average of class boundaries; used to estimate." },
    { term: "Cumulative frequency", definition: "Running total of frequencies." },
    { term: "Ogive", definition: "Cumulative frequency curve." },
    { term: "Quartile", definition: "Values splitting data into quarters." },
  ],
  concepts: [
    {
      id: "ciem-u10-s2-grouped",
      title: "Grouped data and cumulative frequency",
      skill: "Estimate statistics from grouped and cumulative data.",
      lesson: {
        sections: [
          {
            heading: "Histograms and frequency density",
            body: "Histogram height $=$ frequency density $= \\frac{\\text{frequency}}{\\text{class width}}$ — necessary when class widths differ, since bar AREA equals frequency. Grouped data only gives estimates: use class midpoints for mean calculations.",
          },
          {
            heading: "Cumulative frequency and ogives",
            body: "Cumulative frequency adds each class frequency to the running total. Plot against UPPER class boundaries to get an ogive (S-curve). From the ogive read the median (at $\\frac{n}{2}$), $Q_1$ (at $\\frac{n}{4}$), $Q_3$ (at $\\frac{3n}{4}$); IQR $= Q_3 - Q_1$. Percentiles work the same way.",
          },
        ],
        keyFormulas: [
          { name: "Frequency density", statement: "$\\frac{f}{\\text{width}}$" },
          { name: "IQR", statement: "$Q_3 - Q_1$" },
        ],
        workedExample: {
          problem: "Classes 0–10, 10–20 have frequencies 8 and 24 (width 10 each). Find the frequency densities.",
          solution: "Densities: $\\frac{8}{10} = 0.8$ and $\\frac{24}{10} = 2.4$ — the second bar is 3× taller.",
        },
      },
      questions: [
        {
          id: "ciem-u10-s2-gd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Class 20–30 has frequency 15. Find its frequency density.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "f ÷ width." }],
            steps: [
              { reasoning: "Width $= 10$; density $= \\frac{15}{10} = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5",
          },
        },
        {
          id: "ciem-u10-s2-gd-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Frequencies for 0–5, 5–10, 10–15 are 3, 7, 10. Find cumulative frequency at 15.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative frequency", statement: "Running total." }],
            steps: [
              { reasoning: "Cumulative: 3, 10, 20.", marks: 1, markCode: "M" },
              { reasoning: "$3+7+10 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "ciem-u10-s2-gd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classes 0–10 (f=8) and 10–20 (f=24). Estimate the mean using midpoints.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimated mean", statement: "Use class midpoints." }],
            steps: [
              { reasoning: "Midpoints 5 and 15: $\\sum fx = 5\\times8 + 15\\times24 = 40+360 = 400$; $\\sum f = 32$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{400}{32} = 12.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12.5",
          },
        },
        {
          id: "ciem-u10-s2-gd-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "An ogive has $n = 80$. At what cumulative frequency values do you read the median, $Q_1$ and $Q_3$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Quartile positions", statement: "$\\frac{n}{4}$, $\\frac{n}{2}$, $\\frac{3n}{4}$." }],
            steps: [
              { reasoning: "$Q_1$ at $\\frac{80}{4} = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Median at $\\frac{80}{2} = 40$.", marks: 1, markCode: "M" },
              { reasoning: "$Q_3$ at $\\frac{3\\times80}{4} = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20, 40, 60",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u10-s2-grouped-notes",
      title: "Grouped data — revision notes",
      summary: "Frequency density, ogives, quartiles.",
      sections: [
        { heading: "Histograms", body: "Height = f/width; area = frequency. Use midpoints for estimates." },
        { heading: "Ogives", body: "Cumulative frequency vs upper boundary. Read at n/4, n/2, 3n/4; IQR = $Q_3-Q_1$." },
      ],
    },
  ],
};

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
        {
          id: "ciem-u10-s2-gd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A class 10–20 has frequency 25. Find its frequency density.",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.4" },
            { id: "b", text: "2.5" },
            { id: "c", text: "25" },
            { id: "d", text: "10" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "f $\\div$ width." }],
            steps: [{ reasoning: "Density $= \\frac{25}{10} = 2.5$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** 2.5",
          },
        },
        {
          id: "ciem-u10-s2-gd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the class midpoint of the class 15–25.",
          response: { type: "numeric", parts: [{ label: "Midpoint", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Class midpoint", statement: "Average of class boundaries." }],
            steps: [
              { reasoning: "Midpoint $= \\frac{15+25}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Midpoint $= 20$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "ciem-u10-s2-gd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Frequencies for classes ending at 5, 10, 15 are 2, 5, 8. Find the cumulative frequency at 15.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative frequency", statement: "Running total." }],
            steps: [
              { reasoning: "Cumulative totals: $2$, $2+5=7$, $7+8=15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "ciem-u10-s2-gd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ogive is plotted with cumulative frequency against which quantity?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower class boundaries" },
            { id: "b", text: "Upper class boundaries" },
            { id: "c", text: "Class widths" },
            { id: "d", text: "Class midpoints" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Ogive", statement: "Cumulative frequency vs upper boundary." }],
            steps: [{ reasoning: "Points are plotted at the upper class boundary of each class.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Upper class boundaries",
          },
        },
        {
          id: "ciem-u10-s2-gd-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classes 0–10 (f=6) and 10–20 (f=14). Estimate the mean using class midpoints.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimated mean", statement: "Use class midpoints." }],
            steps: [
              { reasoning: "Midpoints 5 and 15: $\\sum fx = 5\\times6 + 15\\times14 = 30+210 = 240$; $\\sum f = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{240}{20} = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "ciem-u10-s2-gd-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "From an ogive, $Q_1 = 18$ and $Q_3 = 42$. Find the interquartile range.",
          response: { type: "numeric", parts: [{ label: "IQR", answer: 24 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "IQR", statement: "$Q_3 - Q_1$." }],
            steps: [
              { reasoning: "IQR $= 42 - 18 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "ciem-u10-s2-gd-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a histogram, the height of each bar represents:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cumulative frequency" },
            { id: "b", text: "Class width" },
            { id: "c", text: "Frequency" },
            { id: "d", text: "Frequency density" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Frequency density", statement: "Frequency $\\div$ class width; histogram bar height." }],
            steps: [{ reasoning: "Bar height $=$ frequency density so that bar area $=$ frequency.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Frequency density",
          },
        },
        {
          id: "ciem-u10-s2-gd-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a histogram uses frequency density rather than frequency as the bar height when class widths are not all equal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Histogram", statement: "Bar area must equal frequency." }],
            steps: [
              { reasoning: "With unequal widths, equal heights would misrepresent the data.", marks: 1, markCode: "M" },
              { reasoning: "Height $=$ frequency density $= \\frac{f}{\\text{width}}$ makes bar area $= \\frac{f}{\\text{width}} \\times \\text{width} = f$.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "So that bar area equals frequency",
          },
        },
        {
          id: "ciem-u10-s2-gd-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cumulative frequency table has values 10 at $x=20$ and 22 at $x=30$, with $n=40$ total values. Estimate the median.",
          response: { type: "numeric", parts: [{ label: "Median", answer: 28.33, tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Median from ogive", statement: "Read at $\\frac{n}{2}$ with interpolation." }],
            steps: [
              { reasoning: "Median position $= \\frac{40}{2} = 20$; it lies between cumulative frequencies 10 and 22.", marks: 1, markCode: "M" },
              { reasoning: "Interpolation: $x = 20 + \\frac{20-10}{22-10}\\times10 = 20 + \\frac{100}{12} \\approx 28.33$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $28.33$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28.33$",
          },
        },
        {
          id: "ciem-u10-s2-gd-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classes 0–20 (f=5), 20–40 (f=15), 40–60 (f=10). Estimate the mean using class midpoints.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimated mean", statement: "Use class midpoints." }],
            steps: [
              { reasoning: "Midpoints 10, 30, 50: $\\sum fx = 10\\times5 + 30\\times15 + 50\\times10 = 50+450+500 = 1000$; $\\sum f = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{1000}{30} \\approx 33.33$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $33.33$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$33.33$",
          },
        },
        {
          id: "ciem-u10-s2-gd-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A class has width 5 and frequency density 3. What is its frequency?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "1.67" },
            { id: "c", text: "8" },
            { id: "d", text: "15" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "density $= \\frac{f}{\\text{width}}$, so $f = \\text{density} \\times \\text{width}$." }],
            steps: [{ reasoning: "$f = 3 \\times 5 = 15$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** 15",
          },
        },
        {
          id: "ciem-u10-s2-gd-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a survey of 60 people, the cumulative frequency at age 25 is 18. Estimate the percentage of people under 25, explaining how this is found from an ogive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentile from ogive", statement: "Read cumulative frequency at the value, then $\\frac{\\text{cf}}{n}\\times100\\%$." }],
            steps: [
              { reasoning: "On the ogive, read the cumulative frequency at $x=25$: it is 18.", marks: 1, markCode: "M" },
              { reasoning: "Percentage $= \\frac{18}{60}\\times100 = 30\\%$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
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

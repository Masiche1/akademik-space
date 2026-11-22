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
            { id: "a", text: "Class width" },
            { id: "b", text: "Midpoint" },
            { id: "c", text: "Frequency" },
            { id: "d", text: "Frequency density" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u8-s2-gr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The midpoint of the class interval 15–25 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "25" },
            { id: "b", text: "15" },
            { id: "c", text: "10" },
            { id: "d", text: "20" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "$(a+b)/2$." }], steps: [{ reasoning: "$\\frac{15+25}{2}=20$.", marks: 1, markCode: "A" }], finalAnswer: "20" },
        },
        {
          id: "olm-u8-s2-gr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A class 0–8 has frequency 24. Find its frequency density.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "Frequency ÷ width." }], steps: [
            { reasoning: "$\\frac{24}{8}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u8-s2-gr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A class 40–60 has frequency 50. Find its frequency density.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "Frequency ÷ width." }], steps: [
            { reasoning: "Width $=20$; $\\frac{50}{20}=2.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "2.5" },
        },
        {
          id: "olm-u8-s2-gr-q8", difficulty: "core", totalMarks: 2,
          stem: "Histogram bars touch each other because the data is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ordered" },
            { id: "b", text: "Continuous" },
            { id: "c", text: "Categorical" },
            { id: "d", text: "Discrete" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Histogram", statement: "Continuous data." }], steps: [
            { reasoning: "Class intervals are continuous — no gaps.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: continuous.", marks: 1, markCode: "A" },
          ], finalAnswer: "Continuous" },
        },
        {
          id: "olm-u8-s2-gr-q9", difficulty: "core", totalMarks: 3,
          stem: "Estimate the mean of grouped data: 0–10 (freq 5), 10–20 (freq 10), 20–30 (freq 5).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimated mean", statement: "Midpoints × frequencies." }], steps: [
            { reasoning: "Midpoints 5, 15, 25; $\\sum fx=25+150+125=300$; $\\sum f=20$.", marks: 1, markCode: "M" },
            { reasoning: "Mean $=\\frac{300}{20}=15$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈15.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈15" },
        },
        {
          id: "olm-u8-s2-gr-q10", difficulty: "core", totalMarks: 2,
          stem: "Two classes of equal width have frequencies 8 and 12. Which has the higher frequency density?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are equal" },
            { id: "b", text: "The class with frequency 12" },
            { id: "c", text: "The class with frequency 8" },
            { id: "d", text: "Cannot tell" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$f/\\text{width}$ — same width." }], steps: [
            { reasoning: "Same width → density proportional to frequency.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: frequency 12 class.", marks: 1, markCode: "A" },
          ], finalAnswer: "Frequency 12 class" },
        },
        {
          id: "olm-u8-s2-gr-q11", difficulty: "core", totalMarks: 3,
          stem: "A histogram bar has frequency density 2.5 and class width 12. Find the frequency.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "technique", name: "Frequency from density", statement: "Area = density × width." }], steps: [
            { reasoning: "$f=2.5\\times12=30$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{30}{12}=2.5$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olm-u8-s2-gr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "When class widths are unequal, frequencies should be compared using…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Class midpoint" },
            { id: "b", text: "Frequency density" },
            { id: "c", text: "Upper boundary" },
            { id: "d", text: "Frequency alone" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Unequal widths", statement: "Density normalises." }], steps: [
            { reasoning: "Wider classes naturally hold more — density adjusts.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: frequency density.", marks: 1, markCode: "A" },
          ], finalAnswer: "Frequency density" },
        },
        {
          id: "olm-u8-s2-gr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Estimate the mean of grouped data: 0–20 (freq 10), 20–50 (freq 15), 50–60 (freq 5).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimated mean", statement: "Midpoints × frequencies." }], steps: [
            { reasoning: "Midpoints 10, 35, 55; $\\sum fx=100+525+275=900$; $\\sum f=30$.", marks: 1, markCode: "M" },
            { reasoning: "Mean $=\\frac{900}{30}=30$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30.", marks: 1, markCode: "M" },
            { reasoning: "Check arithmetic ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olm-u8-s2-gr-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A histogram has a bar from 10–20 with height 3 and a bar from 20–40 with height 1.5. Find the total frequency shown.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Histogram to frequency", statement: "Area of each bar." }], steps: [
            { reasoning: "First bar: $3\\times10=30$.", marks: 1, markCode: "M" },
            { reasoning: "Second bar: $1.5\\times20=30$.", marks: 1, markCode: "M" },
            { reasoning: "Total $=60$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 60.", marks: 1, markCode: "A" },
          ], finalAnswer: "60" },
        },
        {
          id: "olm-u8-s2-gr-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Grouped data: 5–15 (freq 4), 15–25 (freq 6). Estimate the mean.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimated mean", statement: "Midpoints 10 and 20." }], steps: [
            { reasoning: "$\\sum fx=4\\times10+6\\times20=160$; $\\sum f=10$.", marks: 1, markCode: "M" },
            { reasoning: "Mean $=\\frac{160}{10}=16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 16.", marks: 1, markCode: "A" },
          ], finalAnswer: "16" },
        },
        {
          id: "olm-u8-s2-gr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Estimate the mean of grouped data: 0–10 (freq 2), 10–20 (freq 8), 20–30 (freq 10), and explain why it is only an estimate.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimated mean", statement: "Midpoint assumption." }], steps: [
            { reasoning: "$\\sum fx=2\\times5+8\\times15+10\\times25=380$; $\\sum f=20$.", marks: 1, markCode: "M" },
            { reasoning: "Mean $=\\frac{380}{20}=19$.", marks: 1, markCode: "M" },
            { reasoning: "Assumes all values sit at midpoints — true mean needs raw data.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈19 (estimate).", marks: 1, markCode: "A" },
          ], finalAnswer: "≈19" },
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
            { id: "a", text: "Mean vs median" },
            { id: "b", text: "Frequency vs midpoint" },
            { id: "c", text: "Frequency density vs width" },
            { id: "d", text: "Cumulative frequency vs upper class boundary" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u8-s2-og-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Points on an ogive are plotted at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower class boundaries" },
            { id: "b", text: "Random x-values" },
            { id: "c", text: "Upper class boundaries" },
            { id: "d", text: "Class midpoints" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Ogive", statement: "CF vs upper boundary." }], steps: [{ reasoning: "Standard construction.", marks: 1, markCode: "A" }], finalAnswer: "Upper class boundaries" },
        },
        {
          id: "olm-u8-s2-og-q6", difficulty: "foundation", totalMarks: 1,
          stem: "For $n=60$, the median is read at cumulative frequency…",
          response: { type: "mcq", choices: [
            { id: "a", text: "60" },
            { id: "b", text: "45" },
            { id: "c", text: "15" },
            { id: "d", text: "30" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Median", statement: "$n/2$." }], steps: [
            { reasoning: "$60/2=30$.", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olm-u8-s2-og-q7", difficulty: "foundation", totalMarks: 2,
          stem: "For $n=100$, at what cumulative frequency is Q1 read?",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: { principles: [{ kind: "formula", name: "Q1", statement: "$n/4$." }], steps: [
            { reasoning: "$100/4=25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: CF = 25.", marks: 1, markCode: "A" },
          ], finalAnswer: "25" },
        },
        {
          id: "olm-u8-s2-og-q8", difficulty: "core", totalMarks: 2,
          stem: "An ogive has an S-shape because cumulative frequency…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Decreases after the median" },
            { id: "b", text: "Increases steeply in the middle classes and levels off at the ends" },
            { id: "c", text: "Is always linear" },
            { id: "d", text: "Is random" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Ogive shape", statement: "Reflects frequency distribution." }], steps: [
            { reasoning: "Steep sections = high-frequency classes.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Steep in middle, levels at ends" },
        },
        {
          id: "olm-u8-s2-og-q9", difficulty: "core", totalMarks: 3,
          stem: "Cumulative frequencies for classes 0–10, 10–20, 20–30, 30–40 are 6, 20, 30, 35 with $n=35$. Find the median class.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Median class", statement: "CF reaches n/2 = 17.5." }], steps: [
            { reasoning: "$n/2=17.5$ → falls between CF 6 and 20.", marks: 1, markCode: "M" },
            { reasoning: "Median class: 10–20.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10–20.", marks: 1, markCode: "A" },
          ], finalAnswer: "10–20" },
        },
        {
          id: "olm-u8-s2-og-q10", difficulty: "core", totalMarks: 3,
          stem: "In the class 10–20, cumulative frequency rises from 14 to 34. For $n=50$ (median at CF 25), estimate the median by interpolation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Interpolation", statement: "Linear within class." }], steps: [
            { reasoning: "Fraction $=\\frac{25-14}{34-14}=\\frac{11}{20}=0.55$.", marks: 1, markCode: "M" },
            { reasoning: "Median $=10+0.55\\times10=15.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈15.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈15.5" },
        },
        {
          id: "olm-u8-s2-og-q11", difficulty: "core", totalMarks: 3,
          stem: "On an ogive, Q1 is at value 8 and Q3 at value 22. Find the IQR.",
          response: { type: "numeric", parts: [{ label: "a", answer: 14 }] },
          markscheme: { principles: [{ kind: "formula", name: "IQR", statement: "$Q_3-Q_1$." }], steps: [
            { reasoning: "$IQR=22-8=14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 14.", marks: 1, markCode: "M" },
            { reasoning: "Spread of middle 50% ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "14" },
        },
        {
          id: "olm-u8-s2-og-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Interpolating within the median class of an ogive gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The exact median" },
            { id: "b", text: "The mean" },
            { id: "c", text: "The mode" },
            { id: "d", text: "An estimate, not an exact value" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Grouped estimate", statement: "Approximation." }], steps: [
            { reasoning: "Grouped data lacks exact values.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: estimate.", marks: 1, markCode: "A" },
          ], finalAnswer: "An estimate" },
        },
        {
          id: "olm-u8-s2-og-q13", difficulty: "challenge", totalMarks: 4,
          stem: "For $n=200$, the median is at CF 100. In class 30–40 the cumulative frequency rises from 90 to 130. Estimate the median.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Interpolation", statement: "Linear within class." }], steps: [
            { reasoning: "Fraction $=\\frac{100-90}{130-90}=\\frac{10}{40}=0.25$.", marks: 1, markCode: "M" },
            { reasoning: "Median $=30+0.25\\times10=32.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈32.5.", marks: 1, markCode: "M" },
            { reasoning: "Estimate from grouped data.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈32.5" },
        },
        {
          id: "olm-u8-s2-og-q14", difficulty: "challenge", totalMarks: 4,
          stem: "An ogive gives Q1 = 20 and Q3 = 45 for one dataset, and Q1 = 25, Q3 = 35 for another. Compare the spread of the middle 50% of each dataset.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "IQR comparison", statement: "Smaller IQR = more concentrated." }], steps: [
            { reasoning: "Dataset 1: IQR $=45-20=25$.", marks: 1, markCode: "M" },
            { reasoning: "Dataset 2: IQR $=35-25=10$.", marks: 1, markCode: "M" },
            { reasoning: "Dataset 2's middle 50% is more concentrated.", marks: 1, markCode: "M" },
            { reasoning: "Answer: dataset 2 less spread.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dataset 2 less spread" },
        },
        {
          id: "olm-u8-s2-og-q15", difficulty: "challenge", totalMarks: 3,
          stem: "For $n=80$, at what cumulative frequency is Q3 read?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: { principles: [{ kind: "formula", name: "Q3", statement: "$3n/4$." }], steps: [
            { reasoning: "$3\\times80/4=60$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: CF = 60.", marks: 1, markCode: "M" },
            { reasoning: "75th percentile ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "60" },
        },
        {
          id: "olm-u8-s2-og-q16", difficulty: "challenge", totalMarks: 3,
          stem: "For $n=50$, at what cumulative frequency is the 90th percentile read?",
          response: { type: "numeric", parts: [{ label: "a", answer: 45 }] },
          markscheme: { principles: [{ kind: "formula", name: "Percentile", statement: "$0.9n$." }], steps: [
            { reasoning: "$0.9\\times50=45$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: CF = 45.", marks: 1, markCode: "M" },
            { reasoning: "Read x-value at CF 45 on ogive.", marks: 1, markCode: "A" },
          ], finalAnswer: "45" },
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

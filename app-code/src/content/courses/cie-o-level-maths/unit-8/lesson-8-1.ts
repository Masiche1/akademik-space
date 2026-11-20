import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "olm-u8-lesson-8-1",
  code: "8-1",
  title: "Averages and Data Presentation",
  goal: "I CAN calculate and interpret measures of average and present data.",
  standards: ["4024: statistics"],
  vocabulary: [
    { term: "Mean", definition: "Sum of values ÷ number of values." },
    { term: "Median", definition: "Middle value when data is ordered." },
    { term: "Mode", definition: "Most frequent value." },
    { term: "Range", definition: "Largest minus smallest value." },
  ],
  concepts: [
    {
      id: "olm-u8-s1-averages",
      title: "Mean, median, mode and range",
      skill: "Calculate and compare averages at O Level.",
      lesson: {
        sections: [
          { heading: "The three averages", body: "Mean: add all values and divide by count — uses every value but is affected by outliers. Median: order the data and take the middle value (average of two middle values for even counts) — robust against outliers. Mode: most frequent value — can have multiple modes or none. Range: max − min, measures spread not centre." },
          { heading: "Choosing and comparing", body: "Use median when data has outliers (e.g. house prices, salaries). Use mean for symmetric data. Compare datasets by looking at both centre (median/mean) and spread (range/IQR). For grouped data, the median class is where cumulative frequency reaches half the total; estimate the median by interpolation within that class." },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x}=\\frac{\\sum x}{n}$" },
          { name: "Median", statement: "Middle value of ordered data" },
        ],
        workedExample: { problem: "Find mean, median, mode of 3, 7, 7, 9, 12, 15.", solution: "Mean $=\\frac{53}{6}\\approx8.83$; median $=\\frac{7+9}{2}=8$; mode $=7$; range $=15-3=12$." },
      },
      questions: [
        {
          id: "olm-u8-s1-av-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The median of 2, 5, 9, 12 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" }, { id: "b", text: "6.5" }, { id: "c", text: "9" }, { id: "d", text: "8" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Median", statement: "Average of two middles." }], steps: [{ reasoning: "$\\frac{5+9}{2}=7$.", marks: 1, markCode: "A" }], finalAnswer: "7" },
        },
        {
          id: "olm-u8-s1-av-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the mean of 4, 8, 15, 16, 22.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Mean", statement: "Sum/count." }], steps: [
            { reasoning: "$\\frac{4+8+15+16+22}{5}=\\frac{65}{5}=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
          ], finalAnswer: "13" },
        },
        {
          id: "olm-u8-s1-av-q3", difficulty: "core", totalMarks: 3,
          stem: "The mode of 3, 5, 5, 7, 7, 7, 9 is…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Mode", statement: "Most frequent." }], steps: [
            { reasoning: "7 appears three times — most frequent.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "M" },
            { reasoning: "Range: $9-3=6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u8-s1-av-q4", difficulty: "core", totalMarks: 4,
          stem: "Two sets of data have means 20 and 25, ranges 10 and 30. Which set is more consistent?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Consistency", statement: "Smaller range = more consistent." }], steps: [
            { reasoning: "Range 10 < range 30 → first set less spread.", marks: 1, markCode: "M" },
            { reasoning: "First set more consistent around its mean.", marks: 1, markCode: "M" },
            { reasoning: "Could also compare range/mean ratios: $0.5$ vs $1.2$ — same conclusion.", marks: 1, markCode: "M" },
            { reasoning: "Answer: first set (range 10).", marks: 1, markCode: "A" },
          ], finalAnswer: "First set" },
        },
      ],
    },
    {
      id: "olm-u8-s1-present",
      title: "Presenting and interpreting data",
      skill: "Interpret charts and cumulative frequency at O Level.",
      lesson: {
        sections: [
          { heading: "Charts and tables", body: "Bar charts compare categories; pie charts show proportions (angle = $\\frac{\\text{value}}{\\text{total}}\\times360°$); line graphs show trends over time. Frequency tables list counts; grouped tables use class intervals. Always check axis labels, scales and titles — misread scales cause most errors." },
          { heading: "Cumulative frequency", body: "Cumulative frequency adds up: 'how many ≤ this value'. Plotted against upper class boundaries gives an ogive (S-shaped curve). Read off: median = value at half total frequency; quartiles at $\\frac14$ and $\\frac34$ totals; IQR = $Q_3-Q_1$ measures spread. Interpolate within the median class for grouped data." },
        ],
        keyFormulas: [
          { name: "Pie chart", statement: "Angle $=\\frac{\\text{part}}{\\text{total}}\\times360°$" },
          { name: "Median (grouped)", statement: "Value at $\\frac{n}{2}$ cumulative frequency" },
        ],
        workedExample: { problem: "Data: 2,3,3,5,7,8,9. Find median and IQR.", solution: "Median = 5; $Q_1=3$, $Q_3=8$ → IQR = 5." },
      },
      questions: [
        {
          id: "olm-u8-s1-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Cumulative frequency means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Running total of frequencies" }, { id: "b", text: "Frequency of each value" }, { id: "c", text: "Total count" }, { id: "d", text: "Average" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Cumulative frequency", statement: "Running total." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "Running total" },
        },
        {
          id: "olm-u8-s1-pr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A pie chart sector represents 90° out of 360°. What fraction is this?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Pie chart", statement: "Angle/360." }], steps: [
            { reasoning: "$\\frac{90}{360}=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac14$ (25%).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u8-s1-pr-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the median of the cumulative frequencies: 5, 12, 20, 35, 50 (n=50).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Median from CF", statement: "Value at n/2." }], steps: [
            { reasoning: "$n/2=25$ → median is the value where cumulative frequency reaches 25.", marks: 1, markCode: "M" },
            { reasoning: "Between CF 20 and 35 — interpolate in that class.", marks: 1, markCode: "M" },
            { reasoning: "Answer: median lies in the class with CF 20–35.", marks: 1, markCode: "A" },
          ], finalAnswer: "Class containing CF 25" },
        },
        {
          id: "olm-u8-s1-pr-q4", difficulty: "core", totalMarks: 4,
          stem: "Data: 1, 2, 2, 3, 4, 4, 4, 5, 6. Find Q1, median, Q3 and IQR.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quartiles", statement: "Split data into quarters." }], steps: [
            { reasoning: "Ordered data has 9 values; median = 5th value = 4.", marks: 1, markCode: "M" },
            { reasoning: "Lower half (1,2,2,3): Q1 = median = 2; upper half (4,5,6) + median excluded: Q3 = 5.", marks: 1, markCode: "M" },
            { reasoning: "IQR = $5-2=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: Q1=2, median=4, Q3=5, IQR=3.", marks: 1, markCode: "A" },
          ], finalAnswer: "IQR = 3" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u8-s1-stat-notes", title: "Statistics — notes", summary: "Averages and data presentation.",
      sections: [
        { heading: "Averages", body: "Mean uses all values; median robust to outliers; mode most frequent; range = max−min." },
        { heading: "Presentation", body: "Pie: angle $=\\frac{\\text{part}}{\\text{total}}\\times360$; cumulative frequency → median at $n/2$." },
      ] },
  ],
};

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
            { id: "a", text: "8" },
            { id: "b", text: "9" },
            { id: "c", text: "6.5" },
            { id: "d", text: "7" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u8-s1-av-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The median of 1, 3, 5, 7, 9 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "5" },
            { id: "d", text: "7" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Median", statement: "Middle value." }], steps: [{ reasoning: "5 is the middle of five ordered values.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u8-s1-av-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the mean of 5, 9, 11, 15.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Mean", statement: "Sum/count." }], steps: [
            { reasoning: "$\\frac{5+9+11+15}{4}=\\frac{40}{4}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u8-s1-av-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The range of 3, 7, 12, 18 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "21" },
            { id: "c", text: "18" },
            { id: "d", text: "15" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Range", statement: "Max − min." }], steps: [
            { reasoning: "$18-3=15$.", marks: 1, markCode: "A" },
          ], finalAnswer: "15" },
        },
        {
          id: "olm-u8-s1-av-q8", difficulty: "core", totalMarks: 2,
          stem: "Which average is least affected by an extreme outlier?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Median" },
            { id: "b", text: "Mode" },
            { id: "c", text: "Mean" },
            { id: "d", text: "Range" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Robustness", statement: "Median resists outliers." }], steps: [
            { reasoning: "Median depends only on position, not extreme values.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: median.", marks: 1, markCode: "A" },
          ], finalAnswer: "Median" },
        },
        {
          id: "olm-u8-s1-av-q9", difficulty: "core", totalMarks: 3,
          stem: "For the data 2, 4, 4, 6, 8, 10, 20, find the mean and the median.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Outlier effect", statement: "Mean pulled by 20." }], steps: [
            { reasoning: "Mean $=\\frac{54}{7}\\approx7.71$; median $=6$.", marks: 1, markCode: "M" },
            { reasoning: "Mean > median — the outlier 20 pulls the mean up.", marks: 1, markCode: "M" },
            { reasoning: "Answer: mean ≈7.71, median 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mean ≈7.71, median 6" },
        },
        {
          id: "olm-u8-s1-av-q10", difficulty: "core", totalMarks: 3,
          stem: "For the data 1, 2, 2, 3, 3, 3, 4, find the mode and median.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Mode & median", statement: "Most frequent; middle value." }], steps: [
            { reasoning: "Mode = 3 (appears three times).", marks: 1, markCode: "M" },
            { reasoning: "Median = 4th value = 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer: mode 3, median 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mode 3, median 3" },
        },
        {
          id: "olm-u8-s1-av-q11", difficulty: "core", totalMarks: 3,
          stem: "Five numbers have mean 8. Four of them are 4, 6, 8 and 10. Find the fifth number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reverse mean", statement: "Total = mean × n." }], steps: [
            { reasoning: "Total $=8\\times5=40$; known sum $=28$.", marks: 1, markCode: "M" },
            { reasoning: "Fifth $=40-28=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u8-s1-av-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Every value in a data set is increased by 5. The effect on the mean and range is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mean unchanged, range +5" },
            { id: "b", text: "Both unchanged" },
            { id: "c", text: "Mean +5, range unchanged" },
            { id: "d", text: "Mean +5, range +10" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Shift effect", statement: "Shift changes centre not spread." }], steps: [
            { reasoning: "Adding a constant shifts all values equally.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: mean +5, range unchanged.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mean +5, range unchanged" },
        },
        {
          id: "olm-u8-s1-av-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Five test scores are 60, 65, 70, 75, 80. One student is given 10 extra marks for a corrected answer. Find the new mean.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Mean update", statement: "Add to total then divide." }], steps: [
            { reasoning: "Old total $=350$; new total $=360$.", marks: 1, markCode: "M" },
            { reasoning: "New mean $=\\frac{360}{5}=72$.", marks: 1, markCode: "M" },
            { reasoning: "Mean increases by $\\frac{10}{5}=2$ (from 70).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 72.", marks: 1, markCode: "A" },
          ], finalAnswer: "72" },
        },
        {
          id: "olm-u8-s1-av-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Salary data contains one extremely high value. Which average best represents a typical salary, and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Outlier robustness", statement: "Median preferred." }], steps: [
            { reasoning: "Median — the outlier barely affects it.", marks: 1, markCode: "M" },
            { reasoning: "Mean would be pulled up by the high salary.", marks: 1, markCode: "M" },
            { reasoning: "Median reflects the middle earner.", marks: 1, markCode: "M" },
            { reasoning: "Answer: median.", marks: 1, markCode: "A" },
          ], finalAnswer: "Median" },
        },
        {
          id: "olm-u8-s1-av-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find the median of 15, 17, 19, 21, 23, 27, 29, 31.",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: { principles: [{ kind: "formula", name: "Median", statement: "Average of two middles." }], steps: [
            { reasoning: "Middle values are 21 and 23 (positions 4 and 5).", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{21+23}{2}=22$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
          ], finalAnswer: "22" },
        },
        {
          id: "olm-u8-s1-av-q16", difficulty: "challenge", totalMarks: 3,
          stem: "For the data 5, 5, 8, 9, 11, 13, 20, find the mean and median (2 decimal places for the mean).",
          response: { type: "numeric", parts: [{ label: "a", answer: 10.14, tolerance: 0.01 }, { label: "b", answer: 9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Mean vs median", statement: "Outlier comparison." }], steps: [
            { reasoning: "Mean $=\\frac{71}{7}\\approx10.14$; median $=9$ (4th value).", marks: 1, markCode: "M" },
            { reasoning: "Mean > median due to outlier 20.", marks: 1, markCode: "M" },
            { reasoning: "Answer: mean ≈10.14, median 9.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mean ≈10.14, median 9" },
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
            { id: "a", text: "Frequency of each value" },
            { id: "b", text: "Running total of frequencies" },
            { id: "c", text: "Average" },
            { id: "d", text: "Total count" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u8-s1-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a pie chart, a sector's angle is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\text{total}}{\\text{part}}\\times360°$" },
            { id: "b", text: "$\\frac{\\text{part}}{\\text{total}}\\times360°$" },
            { id: "c", text: "$\\text{part}\\times360$" },
            { id: "d", text: "$\\frac{\\text{part}}{\\text{total}}\\times180°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Pie chart", statement: "Proportion of 360°." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\text{part}}{\\text{total}}\\times360°$" },
        },
        {
          id: "olm-u8-s1-pr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A pie chart sector of $90°$ represents what fraction of the whole?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac13$" },
            { id: "b", text: "$\\frac14$" },
            { id: "c", text: "$\\frac12$" },
            { id: "d", text: "$\\frac18$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Pie chart", statement: "Angle/360." }], steps: [
            { reasoning: "$\\frac{90}{360}=\\frac14$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u8-s1-pr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A data set has $n=20$ values. At what cumulative frequency is the median read from the ogive?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Median", statement: "$n/2$." }], steps: [
            { reasoning: "$20/2=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: CF = 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u8-s1-pr-q8", difficulty: "core", totalMarks: 2,
          stem: "An ogive should be plotted with cumulative frequency against…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Class widths" },
            { id: "b", text: "Class midpoints" },
            { id: "c", text: "Upper class boundaries" },
            { id: "d", text: "Lower class boundaries" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Ogive", statement: "CF vs upper boundary." }], steps: [
            { reasoning: "Cumulative frequency reaches the upper boundary.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Upper class boundaries" },
        },
        {
          id: "olm-u8-s1-pr-q9", difficulty: "core", totalMarks: 3,
          stem: "In a pie chart of 120 students, 30 walk to school. Find the angle of the 'walk' sector.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90, unit: "°" }] },
          markscheme: { principles: [{ kind: "formula", name: "Pie chart", statement: "Proportion × 360." }], steps: [
            { reasoning: "$\\frac{30}{120}\\times360=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 90°.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac14$ of 360 = 90 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "90°" },
        },
        {
          id: "olm-u8-s1-pr-q10", difficulty: "core", totalMarks: 3,
          stem: "For $n=60$, state the cumulative frequencies at which Q1 and Q3 are read from an ogive, and what they represent.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Quartiles", statement: "CF $=n/4$ and $3n/4$." }], steps: [
            { reasoning: "$Q_1$ at CF $=15$, $Q_3$ at CF $=45$.", marks: 1, markCode: "M" },
            { reasoning: "They mark the 25th and 75th percentiles of the data.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "CF 15 and 45" },
        },
        {
          id: "olm-u8-s1-pr-q11", difficulty: "core", totalMarks: 3,
          stem: "On an ogive, Q1 corresponds to value 12 and Q3 to value 20. Find the IQR.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "formula", name: "IQR", statement: "$Q_3-Q_1$." }], steps: [
            { reasoning: "$IQR=20-12=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "M" },
            { reasoning: "Measures spread of middle 50%.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u8-s1-pr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "An ogive uses upper class boundaries rather than midpoints because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Midpoints are harder to calculate" },
            { id: "b", text: "Cumulative frequency 'up to' a boundary includes all of that class" },
            { id: "c", text: "It makes the graph straight" },
            { id: "d", text: "It reduces the total frequency" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Ogive", statement: "Running total needs boundary." }], steps: [
            { reasoning: "CF at a boundary = all values ≤ that boundary.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Includes all of that class" },
        },
        {
          id: "olm-u8-s1-pr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Grouped data: class 20–30 has cumulative frequency rising from 30 to 50. For $n=80$ (median at CF 40), estimate the median by interpolation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Interpolation", statement: "Linear within class." }], steps: [
            { reasoning: "CF 40 is $\\frac{40-30}{50-30}=\\frac12$ through the class.", marks: 1, markCode: "M" },
            { reasoning: "Median $=20+\\frac12\\times10=25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈25.", marks: 1, markCode: "M" },
            { reasoning: "Estimate only — grouped data.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈25" },
        },
        {
          id: "olm-u8-s1-pr-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A pie chart has sectors of $60°$, $90°$, $120°$ and $90°$ representing 80 people in total. Find the frequency of each sector.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Pie chart reverse", statement: "Angle/360 × total." }], steps: [
            { reasoning: "Fractions: $\\frac16, \\frac14, \\frac13, \\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Frequencies: $80\\times\\frac16\\approx13.3$, $20$, $26.7$, $20$.", marks: 1, markCode: "M" },
            { reasoning: "Check sum: $13.3+20+26.7+20=80$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈13, 20, 27, 20 (accept rounding).", marks: 1, markCode: "A" },
          ], finalAnswer: "13.3, 20, 26.7, 20" },
        },
        {
          id: "olm-u8-s1-pr-q15", difficulty: "challenge", totalMarks: 3,
          stem: "For $n=120$, at what cumulative frequency is Q3 read?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: { principles: [{ kind: "formula", name: "Q3", statement: "$3n/4$." }], steps: [
            { reasoning: "$3\\times120/4=90$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: CF = 90.", marks: 1, markCode: "M" },
            { reasoning: "75th percentile ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "90" },
        },
        {
          id: "olm-u8-s1-pr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "When is a line graph more appropriate than a bar chart for presenting data? Give an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Chart choice", statement: "Time series → line." }], steps: [
            { reasoning: "Line graphs show change over time.", marks: 1, markCode: "M" },
            { reasoning: "Bar charts compare separate categories.", marks: 1, markCode: "M" },
            { reasoning: "Example: monthly temperatures → line; favourite colours → bar.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Line graphs for data over time" },
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

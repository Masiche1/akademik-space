import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ciem-u10-lesson-10-1",
  code: "10-1",
  title: "Averages and Data Presentation",
  goal: "I CAN calculate averages and present data.",
  standards: ["Cambridge IGCSE Mathematics 0580 Extended: statistics"],
  vocabulary: [
    { term: "Mean", definition: "Sum of values ÷ number of values." },
    { term: "Median", definition: "Middle value of ordered data." },
    { term: "Mode", definition: "Most frequent value." },
    { term: "Range", definition: "Max − min; a measure of spread." },
    { term: "Stem-and-leaf", definition: "Ordered display splitting tens and units." },
  ],
  concepts: [
    {
      id: "ciem-u10-s1-averages",
      title: "Averages and data presentation",
      skill: "Calculate and interpret summary statistics.",
      lesson: {
        sections: [
          {
            heading: "Mean, median, mode",
            body: "Mean $= \\frac{\\sum x}{n}$ — uses every value but is distorted by outliers. Median = middle of ordered data (average the two middle values for even $n$) — robust to outliers. Mode = most frequent; a set may have several modes or none. Range $=$ max $-$ min measures spread.",
          },
          {
            heading: "Presenting data",
            body: "Stem-and-leaf diagrams order data while preserving every value — the stem is the tens digit, leaves the units. Frequency tables compact repeated values; mean from a frequency table is $\\frac{\\sum fx}{\\sum f}$. Choose the average that best describes the situation: median for skewed data or outliers.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x}{n}$" },
          { name: "Frequency-table mean", statement: "$\\frac{\\sum fx}{\\sum f}$" },
        ],
        workedExample: {
          problem: "Find the mean of 12, 15, 18, 20, 25.",
          solution: "Sum $= 90$; mean $= \\frac{90}{5} = 18$.",
        },
      },
      questions: [
        {
          id: "ciem-u10-s1-av-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the median of 7, 3, 9, 5, 11.",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" }, { id: "b", text: "9" }, { id: "c", text: "5" }, { id: "d", text: "34" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Order then take middle." }],
            steps: [{ reasoning: "Ordered: 3,5,7,9,11; median = 7.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "ciem-u10-s1-av-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the mean of 6, 8, 10, 12, 14.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Sum ÷ n." }],
            steps: [
              { reasoning: "Sum $= 50$; mean $= \\frac{50}{5} = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "ciem-u10-s1-av-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Data: x=2 (f=3), x=4 (f=5), x=6 (f=2). Find the mean from the frequency table.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency mean", statement: "$\\sum fx / \\sum f$." }],
            steps: [
              { reasoning: "$\\sum fx = 2\\times3 + 4\\times5 + 6\\times2 = 6+20+12 = 38$; $\\sum f = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{38}{10} = 3.8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.8",
          },
        },
        {
          id: "ciem-u10-s1-av-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A data set is 4, 5, 5, 6, 100. Explain why the median (5) is a better summary than the mean.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Robustness", statement: "Median unaffected by outliers." }],
            steps: [
              { reasoning: "Mean $= \\frac{120}{5} = 24$, pulled up by the outlier 100.", marks: 1, markCode: "M" },
              { reasoning: "Median = 5, unaffected by extreme values.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Median is robust to the outlier",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u10-s1-av-notes",
      title: "Averages — revision notes",
      summary: "Mean/median/mode/range, frequency tables.",
      sections: [
        { heading: "Averages", body: "Mean uses all values but is outlier-sensitive; median robust; mode most frequent." },
        { heading: "Frequency tables", body: "Mean $=\\frac{\\sum fx}{\\sum f}$. Stem-and-leaf preserves all data ordered." },
      ],
    },
  ],
};

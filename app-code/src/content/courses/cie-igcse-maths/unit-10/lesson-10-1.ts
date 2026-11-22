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
            { id: "a", text: "34" },
            { id: "b", text: "7" },
            { id: "c", text: "9" },
            { id: "d", text: "5" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciem-u10-s1-av-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mode of 3, 7, 7, 9, 7, 2?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "2" },
            { id: "c", text: "9" },
            { id: "d", text: "7" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mode", statement: "Most frequent value." }],
            steps: [{ reasoning: "7 appears 3 times, more than any other value.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** 7",
          },
        },
        {
          id: "ciem-u10-s1-av-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the range of 14, 9, 22, 17, 30.",
          response: { type: "numeric", parts: [{ label: "a", answer: 21 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Range", statement: "Max $-$ min." }],
            steps: [
              { reasoning: "Maximum $= 30$ and minimum $= 9$.", marks: 1, markCode: "M" },
              { reasoning: "Range $= 30 - 9 = 21$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "21",
          },
        },
        {
          id: "ciem-u10-s1-av-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the median of 4, 8, 10, 12, 15, 20.",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "11" },
            { id: "c", text: "12" },
            { id: "d", text: "14" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Average the two middle values for even $n$." }],
            steps: [{ reasoning: "Ordered data already; middle two are 10 and 12, median $= \\frac{10+12}{2} = 11$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** 11",
          },
        },
        {
          id: "ciem-u10-s1-av-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of 5, 8, 12, 9, 16, 10.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Sum $\\div$ $n$." }],
            steps: [
              { reasoning: "Sum $= 5+8+12+9+16+10 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{60}{6} = 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "ciem-u10-s1-av-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Data: x=1 (f=4), x=3 (f=6), x=5 (f=2). Find the mean from the frequency table.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency mean", statement: "$\\sum fx / \\sum f$." }],
            steps: [
              { reasoning: "$\\sum fx = 1\\times4 + 3\\times6 + 5\\times2 = 4+18+10 = 32$; $\\sum f = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{32}{12} = \\frac{8}{3} \\approx 2.67$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2.67$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{8}{3}$ or $2.67$",
          },
        },
        {
          id: "ciem-u10-s1-av-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stem-and-leaf diagram has stem 4 with leaves 1, 3, 5. Which values does it represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "41, 43, 45" },
            { id: "b", text: "14, 34, 54" },
            { id: "c", text: "415" },
            { id: "d", text: "4, 1, 3, 5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Stem-and-leaf", statement: "Stem gives tens digit, leaves give units." }],
            steps: [{ reasoning: "Each leaf is appended to the stem: $41, 43, 45$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** 41, 43, 45",
          },
        },
        {
          id: "ciem-u10-s1-av-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The mean of four numbers is 9. Three of them are 6, 8 and 11. Find the fourth number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Sum $= \\bar{x} \\times n$." }],
            steps: [
              { reasoning: "Total $= 9 \\times 4 = 36$; known sum $= 6+8+11 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "Fourth number $= 36 - 25 = 11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "ciem-u10-s1-av-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company has many employees earning about $\\$30\\,000$ and one director earning $\\$500\\,000$. Which average best describes a typical employee's salary, and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Robustness", statement: "Median unaffected by outliers." }],
            steps: [
              { reasoning: "The $500\\,000$ salary is an outlier that pulls the mean upwards.", marks: 1, markCode: "M" },
              { reasoning: "The median reflects the middle employee and is not distorted.", marks: 1, markCode: "M" },
              { reasoning: "Answer: use the median.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The median",
          },
        },
        {
          id: "ciem-u10-s1-av-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class of 10 students has a mean score of 72. Another class of 20 students has a mean score of 80. Find the mean score of all 30 students.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 77.33, tolerance: 0.05 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Combined mean", statement: "Total sum $\\div$ total $n$." }],
            steps: [
              { reasoning: "Total $= 10\\times72 + 20\\times80 = 720 + 1600 = 2320$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{2320}{30} \\approx 77.33$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $77.33$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$77.33$",
          },
        },
        {
          id: "ciem-u10-s1-av-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which measure of average is unaffected by an extreme outlier?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mean" }, { id: "b", text: "Median" }, { id: "c", text: "Range" }, { id: "d", text: "None of these" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Robustness", statement: "Median unaffected by outliers." }],
            steps: [{ reasoning: "The median depends only on the middle position(s), so extreme values do not move it.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Median",
          },
        },
        {
          id: "ciem-u10-s1-av-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The mean of 5 numbers is 14. What is the total of the 5 numbers?",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" },
            { id: "b", text: "280" },
            { id: "c", text: "19" },
            { id: "d", text: "70" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Sum $= \\bar{x} \\times n$." }],
            steps: [{ reasoning: "Total $= 14 \\times 5 = 70$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** 70",
          },
        },
        {
          id: "ciem-u10-s1-av-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A data set has mean 12 but median 9. Explain what this suggests about the distribution of the data.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Skew", statement: "Mean $>$ median suggests a right tail of high values." }],
            steps: [
              { reasoning: "Mean $=$ 12 is greater than median $=$ 9.", marks: 1, markCode: "M" },
              { reasoning: "High values pull the mean up but do not move the median much.", marks: 1, markCode: "M" },
              { reasoning: "This suggests the data is skewed to the right (positive skew) with a few large values.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right-skewed: a few high values pull the mean above the median",
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

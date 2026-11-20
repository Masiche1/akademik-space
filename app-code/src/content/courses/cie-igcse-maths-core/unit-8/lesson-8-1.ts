import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cimg-u8-lesson-8-1",
  code: "8-1",
  title: "Averages and Data",
  goal: "I CAN calculate mean, median, mode and range.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: statistics"],
  vocabulary: [
    { term: "Mean", definition: "Average: sum of values ÷ number of values." },
    { term: "Median", definition: "Middle value when data is ordered." },
    { term: "Mode", definition: "Most frequent value." },
    { term: "Range", definition: "Difference between highest and lowest." },
  ],
  concepts: [
    {
      id: "cimg-u8-s1-averages",
      title: "Mean, median, mode and range",
      skill: "Calculate summary statistics at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Mean, median, mode",
            body: "Mean = sum ÷ count. Median = middle of ordered data (average of two middle values if even count). Mode = most frequent value — a data set can have more than one mode or none. Range = max − min measures spread, not centre.",
          },
          {
            heading: "Frequency tables",
            body: "Mean from frequency table: $\\frac{\\sum fx}{\\sum f}$ — multiply each value $x$ by its frequency $f$, sum, divide by total frequency. For grouped data use class midpoints as estimates.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x}{n}$" },
          { name: "Median", statement: "Middle value" },
        ],
        workedExample: {
          problem: "Find mean of 4, 7, 9, 10.",
          solution: "$(4+7+9+10) \\div 4 = 30 \\div 4 = 7.5$.",
        },
      },
      questions: [
        {
          id: "cimg-u8-s1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of 2, 4, 6, 8.",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "10" }, { id: "c", text: "20" }, { id: "d", text: "4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count." }],
            steps: [{ reasoning: "$20 \\div 4 = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cimg-u8-s1-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the median of 3, 1, 7, 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Order then middle." }],
            steps: [
              { reasoning: "Ordered: 1, 3, 5, 7; median $= \\frac{3+5}{2} = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cimg-u8-s1-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean of 5, 8, 12, 15, 20.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ n." }],
            steps: [
              { reasoning: "Sum $= 5+8+12+15+20 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= 60 \\div 5 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u8-s1-st-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the data 3, 5, 5, 8, 11, find the range and mode.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Range and mode", statement: "Max−min; most frequent." }],
            steps: [
              { reasoning: "Range $= 11 - 3 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Mode $= 5$ (appears twice).", marks: 1, markCode: "M" },
              { reasoning: "Answer: range 8, mode 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Range 8, mode 5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u8-s1-stat-notes",
      title: "Averages — revision notes",
      summary: "Mean, median, mode, range.",
      sections: [
        { heading: "Averages", body: "Mean = sum/n; median = middle ordered value; mode = most frequent; range = max−min." },
        { heading: "Frequency tables", body: "Mean $=\\frac{\\sum fx}{\\sum f}$." },
      ],
    },
  ],
};

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
            { id: "a", text: "20" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "10" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u8-s1-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mode of 2, 3, 3, 5.",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "2" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mode", statement: "Most frequent value." }],
            steps: [{ reasoning: "3 appears twice, more than any other value.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u8-s1-st-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the range of 12, 25, 8, 19.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Range", statement: "Max − min." }],
            steps: [
              { reasoning: "Max $= 25$, min $= 8$.", marks: 1, markCode: "M" },
              { reasoning: "Range $= 25 - 8 = 17$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u8-s1-st-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the median of 2, 4, 6, 8, 10.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Middle value of ordered data." }],
            steps: [
              { reasoning: "Already ordered; middle (3rd) value is 6.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u8-s1-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the mean of 10, 20, 30?",
          response: { type: "mcq", choices: [
            { id: "a", text: "60" },
            { id: "b", text: "30" },
            { id: "c", text: "20" },
            { id: "d", text: "15" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count." }],
            steps: [{ reasoning: "$60 \\div 3 = 20$.", marks: 1, markCode: "A" }],
            finalAnswer: "20",
          },
        },
        {
          id: "cimg-u8-s1-st-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The table shows frequency data: x = 1, 2, 3 with frequencies 2, 3, 5. Find the mean.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean from frequency table", statement: "$\\frac{\\sum fx}{\\sum f}$." }],
            steps: [
              { reasoning: "$\\sum fx = (1\\times2)+(2\\times3)+(3\\times5) = 2+6+15 = 23$; $\\sum f = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{23}{10} = 2.3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.3",
          },
        },
        {
          id: "cimg-u8-s1-st-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The mean of 4, 7, 9 and one missing value x is 8. Find x.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Work backwards from sum." }],
            steps: [
              { reasoning: "Total needed $= 8 \\times 4 = 32$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 32 - (4+7+9) = 32 - 20 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u8-s1-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which average is most affected by an extreme outlier?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mode" },
            { id: "b", text: "None of them" },
            { id: "c", text: "Median" },
            { id: "d", text: "Mean" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "Uses every value, so outliers pull it." }],
            steps: [{ reasoning: "The mean uses all values, so an outlier shifts it most.", marks: 1, markCode: "A" }],
            finalAnswer: "Mean",
          },
        },
        {
          id: "cimg-u8-s1-st-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "For the data 3, 4, 5, 8, 10, 12, find the mean, median and range.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Summary statistics", statement: "Mean = sum/n; median = middle; range = max−min." }],
            steps: [
              { reasoning: "Sum $= 42$, mean $= 42 \\div 6 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Median $= \\frac{5+8}{2} = 6.5$.", marks: 1, markCode: "M" },
              { reasoning: "Range $= 12 - 3 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: mean 7, median 6.5, range 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean 7, median 6.5, range 9",
          },
        },
        {
          id: "cimg-u8-s1-st-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The table shows frequency data: x = 0, 10, 20, 30 with frequencies 4, 6, 8, 2. Find the mean.",
          response: { type: "numeric", parts: [{ label: "a", answer: 14 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean from frequency table", statement: "$\\frac{\\sum fx}{\\sum f}$." }],
            steps: [
              { reasoning: "$\\sum fx = (0\\times4)+(10\\times6)+(20\\times8)+(30\\times2) = 0+60+160+60 = 280$; $\\sum f = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= \\frac{280}{20} = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 14.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cimg-u8-s1-st-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student scores 60, 70 and 80 in three tests. What score must they get on a fourth test to have a mean of 75?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Work backwards from required total." }],
            steps: [
              { reasoning: "Required total $= 75 \\times 4 = 300$.", marks: 1, markCode: "M" },
              { reasoning: "Current total $= 60+70+80 = 210$.", marks: 1, markCode: "M" },
              { reasoning: "Needed $= 300 - 210 = 90$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90",
          },
        },
        {
          id: "cimg-u8-s1-st-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which data set has the largest range?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1, 2, 3, 9" },
            { id: "b", text: "4, 5, 6, 7" },
            { id: "c", text: "5, 5, 5, 5" },
            { id: "d", text: "10, 12, 14, 16" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Range", statement: "Max − min." }],
            steps: [{ reasoning: "Ranges: 3, 8, 0, 6 — set (b) has the largest range 8.", marks: 1, markCode: "A" }],
            finalAnswer: "1, 2, 3, 9",
          },
        },
        {
          id: "cimg-u8-s1-st-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Class A has 20 students with mean score 70. Class B has 30 students with mean score 80. Find the overall mean score for all 50 students.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combined mean", statement: "Weight by frequency." }],
            steps: [
              { reasoning: "Total score $= (20 \\times 70) + (30 \\times 80) = 1400 + 2400 = 3800$.", marks: 1, markCode: "M" },
              { reasoning: "Overall mean $= \\frac{3800}{50}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 76$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 76.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "76",
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

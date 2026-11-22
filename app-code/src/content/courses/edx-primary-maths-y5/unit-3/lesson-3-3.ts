import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "edpm5-u3-lesson-3-3",
  code: "3-3",
  title: "Time, Roman Numerals and Statistics",
  goal: "I CAN solve time problems, read Roman numerals to 1000, and interpret pie charts.",
  standards: ["Year 5 Time, Roman numerals and statistics"],
  vocabulary: [
    { term: "Duration", definition: "The length of time between two events." },
    {
      term: "Roman numerals",
      definition: "Ancient system: I, V, X, L, C, D, M.",
    },
    {
      term: "Pie chart",
      definition: "A circular chart showing parts of a whole as sectors.",
    },
    {
      term: "Sector",
      definition: "A 'slice' of a pie chart representing a proportion.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u3-time-roman",
      title: "Time and Roman numerals",
      skill: "Calculate durations and read/write Roman numerals to 1000.",
      lesson: {
        sections: [
          {
            heading: "Time problems",
            body: "Duration = end time − start time. A journey 09:30 to 12:45 = 3 h 15 min. Timetables use 24-hour clock. Across midnight: 23:30 to 01:15 = 1 h 45 min (go through 24:00).",
          },
          {
            heading: "Roman numerals to 1000",
            body: "Add D=500, M=1000. Rules: only I, X, C, M repeat (max 3); only I, X, C subtract; subtractive pairs: IV, IX, XL, XC, CD, CM. 999 = CMXCIX; 2024 = MMXXIV.",
          },
        ],
        keyFormulas: [
          {
            name: "Duration",
            statement: "end − start; across midnight add 24h",
          },
          { name: "Roman", statement: "I=1 V=5 X=10 L=50 C=100 D=500 M=1000" },
        ],
        workedExample: {
          problem: "Write 1492 in Roman numerals.",
          solution: "1000=M, 400=CD, 90=XC, 2=II → MCDXCII.",
        },
      },
      questions: [
        {
          id: "edpm5-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A train leaves at 14:30 and arrives at 16:15. How long is the journey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 h 45 min" },
              { id: "b", text: "2 h 45 min" },
              { id: "c", text: "1 h 15 min" },
              { id: "d", text: "2 h 15 min" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Duration",
                statement: "14:30 → 16:30 = 2h; minus 15min → 1h45m.",
              },
            ],
            steps: [
              {
                reasoning: "16:15 − 14:30 = 1 h 45 min.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1 h 45 min",
            commonErrors: ["Answering 2h15m — miscounting minutes."],
          },
        },
        {
          id: "edpm5-u3-tr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write 89 in Roman numerals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman numerals",
                statement: "89 = 80 + 9 = LXXX + IX = LXXXIX.",
              },
            ],
            steps: [
              { reasoning: "80 = LXXX.", marks: 1, markCode: "M" },
              { reasoning: "9 = IX.", marks: 1, markCode: "M" },
              { reasoning: "Answer: LXXXIX.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "LXXXIX",
            commonErrors: ["Writing LXXXVIIII — 9 must be IX."],
          },
        },
        {
          id: "edpm5-u3-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What number is MCMXCIV?",
          response: {
            type: "numeric",
            parts: [{ label: "Number", answer: 1994, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Roman numerals",
                statement: "M=1000, CM=900, XC=90, IV=4 → 1994.",
              },
            ],
            steps: [
              { reasoning: "M = 1000.", marks: 1, markCode: "M" },
              {
                reasoning: "CM = 900, XC = 90, IV = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1000 + 900 + 90 + 4 = 1994.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1994",
            commonErrors: ["Reading CM as 1000+1000 — it's subtractive (900)."],
          },
        },
        {
          id: "edpm5-u3-tr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A film starts at 19:45 and ends at 22:10.",
          parts: [
            {
              label: "a",
              prompt: "Write the start time in 12-hour format.",
              marks: 2,
            },
            { label: "b", prompt: "How long is the film?", marks: 4 },
            {
              label: "c",
              prompt: "If it is 2024 AD, write the year in Roman numerals.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time and Roman numerals",
                statement: "19:45 = 7:45 pm; duration 2h25m; 2024 = MMXXIV.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "19:45 = 7:45 pm.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "19:45 → 22:10: 19:45 + 2h = 21:45; +25min = 22:10.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Duration = 2 h 25 min.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "2024 = 2000 + 24 = MM + XXIV.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "MM = 2000; XXIV = 24.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: MMXXIV.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7:45 pm; 2 h 25 min; MMXXIV",
            commonErrors: ["Writing MMXXIIII — 4 must be IV."],
          },
        },
      ],
    },
    {
      id: "edpm5-u3-pie",
      title: "Pie charts",
      skill: "Interpret pie charts showing parts of a whole.",
      lesson: {
        sections: [
          {
            heading: "Reading pie charts",
            body: "A **pie chart** shows parts of a whole as sectors (slices). The whole circle = 100% or the total. Bigger sector = bigger proportion. Labels or a key tell you what each sector represents.",
          },
          {
            heading: "Answering questions",
            body: "To find a value: fraction of total × total. If 1/4 of the pie is 'cats' and total is 80 pets, cats = 80 ÷ 4 = 20. Compare sectors to find most/least popular.",
          },
        ],
        keyFormulas: [
          { name: "Pie chart", statement: "Whole circle = 100% or total" },
          { name: "Sector value", statement: "fraction × total" },
        ],
        workedExample: {
          problem:
            "A pie chart shows 1/3 of children like football. If 90 children were surveyed, how many like football?",
          solution: "90 ÷ 3 = 30 children.",
        },
      },
      questions: [
        {
          id: "edpm5-u3-pie-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a pie chart, what does the whole circle represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100% of one item" },
              { id: "b", text: "One category" },
              { id: "c", text: "The whole/total" },
              { id: "d", text: "The average" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pie chart",
                statement: "Whole circle = total or 100%.",
              },
            ],
            steps: [
              {
                reasoning: "Circle represents the whole.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The whole/total",
            commonErrors: ["Thinking each slice is 100%."],
          },
        },
        {
          id: "edpm5-u3-pie-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pie chart shows 1/4 of children like swimming. If 60 children were asked, how many like swimming?",
          response: {
            type: "numeric",
            parts: [{ label: "Children", answer: 15, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pie chart fraction",
                statement: "60 ÷ 4 = 15.",
              },
            ],
            steps: [
              { reasoning: "Quarter of 60 = 15.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 children.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
            commonErrors: ["Multiplying 60 × 1/4 as 60 × 4."],
          },
        },
        {
          id: "edpm5-u3-pie-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pie chart shows: football 1/2, cricket 1/4, tennis 1/8, other 1/8. Which is the smallest category?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing sectors",
                statement: "Tennis and other both 1/8 — smallest.",
              },
            ],
            steps: [
              {
                reasoning: "Compare fractions: 1/8 < 1/4 < 1/2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tennis and 'other' tied at 1/8.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer: tennis and other (tied).",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both identified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Tennis and other (both 1/8)",
            commonErrors: [
              "Picking only tennis — forgetting 'other' is also 1/8.",
            ],
          },
        },
        {
          id: "edpm5-u3-pie-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A pie chart shows favourite school dinners for 120 children: pizza 1/3, pasta 1/4, salad 1/6, other 1/4.",
          parts: [
            { label: "a", prompt: "How many children chose pizza?", marks: 3 },
            {
              label: "b",
              prompt: "How many more chose pasta than salad?",
              marks: 4,
            },
            { label: "c", prompt: "Verify the fractions add to 1.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pie chart problems",
                statement:
                  "Pizza 40; pasta 30 vs salad 20 → 10 more; 1/3+1/4+1/6+1/4 = 1.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Pizza = 120 ÷ 3 = 40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 40 children.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Pasta = 120 ÷ 4 = 30; salad = 120 ÷ 6 = 20.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "30 − 20 = 10 more.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 10 more children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "1/3 + 1/4 + 1/6 + 1/4 = 4/12 + 3/12 + 2/12 + 3/12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "= 12/12 = 1. ✓",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Verified — fractions sum to whole.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "40; 10 more; fractions sum to 1 (12/12)",
            commonErrors: [
              "Adding fractions without common denominator for part (c).",
            ],
          },
        },
      ],
    },
  ],
};

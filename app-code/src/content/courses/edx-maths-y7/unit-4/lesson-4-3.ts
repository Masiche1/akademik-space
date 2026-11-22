import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edm7-u4-lesson-4-3",
  code: "4-3",
  title: "Statistics and Probability",
  goal: "I CAN calculate averages and range, represent data and find simple probabilities.",
  standards: ["Edexcel KS3 Maths — Statistics and Probability"],
  vocabulary: [
    {
      term: "Mean",
      definition:
        "The average found by summing all values and dividing by count.",
    },
    { term: "Median", definition: "The middle value when data is ordered." },
    { term: "Mode", definition: "The most frequent value." },
    {
      term: "Probability",
      definition:
        "The likelihood of an event — $\\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$.",
    },
  ],
  concepts: [
    {
      id: "edm7-u4-averages",
      title: "Averages and Range",
      skill: "Calculate mean, median, mode and range of data sets.",
      lesson: {
        sections: [
          {
            heading: "Three averages",
            body: "**Mean** = sum ÷ count — uses all data, affected by outliers. **Median** = middle value when ordered — unaffected by outliers. **Mode** = most frequent — can have multiple or none.\n\n**Range** = highest − lowest — measures spread. Data: $4, 7, 7, 9, 12$ → mean $= 39 \\div 5 = 7.8$, median $= 7$, mode $= 7$, range $= 12 - 4 = 8$.",
          },
          {
            heading: "Choosing the right average",
            body: "Mean best for symmetric data without outliers; median for skewed data or outliers; mode for categorical data. Salary data often uses median — one millionaire would distort the mean.\n\n**Comparing datasets**: compare averages AND range — two classes might have same mean but different spreads.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\frac{\\text{sum}}{\\text{count}}$." },
          { name: "Range", statement: "Highest − lowest." },
        ],
        workedExample: {
          problem: "Find mean, median, mode, range of $3, 5, 5, 7, 10$.",
          solution:
            "Mean $= 30 \\div 5 = 6$; median $= 5$; mode $= 5$; range $= 10 - 3 = 7$.",
        },
      },
      questions: [
        {
          id: "edm7-u4-averages-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the mean of $4, 6, 8, 10$?",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement:
                  "Sum ÷ count: $(4+6+8+10) \\div 4 = 28 \\div 4 = 7$.",
              },
            ],
            steps: [
              {
                reasoning: "$28 \\div 4 = 7$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Answering 28 — forgetting to divide."],
          },
        },
        {
          id: "edm7-u4-averages-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the median of $12, 3, 7, 9, 15$.",
          response: {
            type: "numeric",
            parts: [{ label: "Median", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Median",
                statement: "Order first: $3, 7, 9, 12, 15$ — middle is 9.",
              },
            ],
            steps: [
              {
                reasoning: "Order: $3, 7, 9, 12, 15$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Middle (3rd of 5) = 9.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Median = 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["Using unordered middle — 7."],
          },
        },
        {
          id: "edm7-u4-averages-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Data: $5, 8, 8, 12, 100$. Explain why the median might be better than the mean here.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Outliers",
                statement:
                  "Extreme values distort the mean; median is resistant.",
              },
            ],
            steps: [
              {
                reasoning: "Mean: $133 \\div 5 = 26.6$ — pulled up by 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Median: 8 — represents typical value better.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "100 is an outlier skewing the mean.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Median more representative here.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Median better — the outlier 100 inflates the mean to 26.6 while median stays 8.",
            commonErrors: ["No calculation.", "Not identifying outlier."],
          },
        },
        {
          id: "edm7-u4-averages-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two classes take the same test.",
          parts: [
            {
              label: "a",
              prompt: "Class A scores: $6, 7, 8, 9, 10$. Find mean and range.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Class B scores: $4, 8, 8, 8, 12$. Find mean and range.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Compare the classes' performance.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Comparing datasets",
                statement: "Compare both average and spread.",
              },
            ],
            steps: [
              {
                reasoning: "A: mean $= 40 \\div 5 = 8$; range $= 10 - 6 = 4$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct mean.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "B: mean $= 40 \\div 5 = 8$; range $= 12 - 4 = 8$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct mean.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Same mean, different range — A more consistent.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) mean 8, range 4 (b) mean 8, range 8 (c) same average, A more consistent",
            commonErrors: ["Only comparing means.", "Forgetting range."],
          },
        },
      ],
    },
    {
      id: "edm7-u4-probability",
      title: "Simple Probability",
      skill:
        "Calculate probabilities of single events and understand probability scale.",
      lesson: {
        sections: [
          {
            heading: "Probability basics",
            body: "Probability measures likelihood on a scale $0$ to $1$ (or $0\\%$ to $100\\%$): $0$ = impossible, $1$ = certain, $0.5$ = equally likely. **Formula**: $P(\\text{event}) = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$.\n\nA fair die: $P(6) = \\frac{1}{6}$, $P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$. A bag with 3 red, 2 blue: $P(\\text{red}) = \\frac{3}{5}$. Always assume equally likely outcomes unless stated.",
          },
          {
            heading: "Probability rules",
            body: "**Complement rule**: $P(\\text{not } A) = 1 - P(A)$. If $P(\\text{rain}) = 0.3$, $P(\\text{no rain}) = 0.7$. **Mutually exclusive**: can't happen together — $P(A \\text{ or } B) = P(A) + P(B)$.\n\n**Experimental vs theoretical**: theoretical uses logic ($\\frac{1}{6}$ for die); experimental uses trials — relative frequency approaches theoretical with more trials.",
          },
        ],
        keyFormulas: [
          {
            name: "Probability",
            statement:
              "$P = \\frac{\\text{favourable}}{\\text{total}}$ — between 0 and 1.",
          },
          { name: "Complement", statement: "$P(\\text{not } A) = 1 - P(A)$." },
        ],
        workedExample: {
          problem:
            "A spinner has 8 equal sections: 3 red, 5 blue. Find P(red) and P(not red).",
          solution:
            "$P(\\text{red}) = \\frac{3}{8}$; $P(\\text{not red}) = 1 - \\frac{3}{8} = \\frac{5}{8}$.",
        },
      },
      questions: [
        {
          id: "edm7-u4-probability-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fair coin is flipped. What is P(heads)?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement:
                  "$P = \\frac{\\text{favourable}}{\\text{total}} = \\frac{1}{2} = 0.5$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{2} = 0.5$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$0.5$ (or $\\frac{1}{2}$ or $50\\%$)",
            commonErrors: ["Answering 2 — inverting."],
          },
        },
        {
          id: "edm7-u4-probability-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bag has 4 red, 3 blue, 3 green balls. Find P(blue).",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement: "$P = \\frac{3}{10} = 0.3$.",
              },
            ],
            steps: [
              {
                reasoning: "Total balls = $4 + 3 + 3 = 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(\\text{blue}) = \\frac{3}{10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.3$ or $30\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{10} = 0.3$",
            commonErrors: ["Using 3 as total instead of 10."],
          },
        },
        {
          id: "edm7-u4-probability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "P(rain tomorrow) = 0.4. Find P(no rain).",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complement rule",
                statement: "$P(\\text{not } A) = 1 - P(A)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(\\text{no rain}) = 1 - 0.4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.6$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $0.4 + 0.6 = 1$ ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Answering 0.4 — not finding complement."],
          },
        },
        {
          id: "edm7-u4-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A fair die is rolled once.",
          parts: [
            { label: "a", prompt: "Find P(rolling a 6).", marks: 2 },
            { label: "b", prompt: "Find P(rolling an even number).", marks: 3 },
            {
              label: "c",
              prompt: "Find P(rolling a number greater than 4).",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement:
                  "$P = \\frac{\\text{favourable}}{6}$ for a fair die.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $P(6) = \\frac{1}{6}$.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "(b) Even: 2,4,6 → $\\frac{3}{6} = \\frac{1}{2}$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct simplification.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(c) >4: 5,6 → $\\frac{2}{6} = \\frac{1}{3}$.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Correct simplification.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) $\\frac{1}{6}$ (b) $\\frac{1}{2}$ (c) $\\frac{1}{3}$",
            commonErrors: ["Including wrong outcomes.", "Not simplifying."],
          },
        },
      ],
    },
  ],
};

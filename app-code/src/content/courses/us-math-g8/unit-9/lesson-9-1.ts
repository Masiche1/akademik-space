import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "m8-u9-lesson-9-1",
  code: "9-1",
  title: "Descriptive Statistics Deep Dive",
  goal: "I CAN calculate and interpret measures of center and spread, identify outliers, and compare data sets.",
  standards: ["8.SP.A.1", "8.SP.A.2", "8.SP.A.3", "8.SP.A.4"],
  vocabulary: [
    {
      term: "Mean",
      definition: "The average; sum of values divided by count.",
    },
    { term: "Median", definition: "The middle value when data is ordered." },
    { term: "Mode", definition: "The most frequent value." },
    { term: "Range", definition: "Maximum minus minimum." },
    { term: "Outlier", definition: "A value far from the rest of the data." },
    {
      term: "Interquartile range",
      definition: "The middle 50% of data: Q3 - Q1.",
    },
  ],
  concepts: [
    {
      id: "m8-u9-measures-center",
      title: "Measures of center",
      skill:
        "Calculate mean, median, and mode and understand when each is appropriate.",
      lesson: {
        sections: [
          {
            heading: "Mean",
            body: "Mean = sum of values / number of values. For $2, 4, 6, 8$: mean = $\\frac{20}{4} = 5$. Sensitive to outliers.",
          },
          {
            heading: "Median",
            body: "Median = middle value when ordered. For $2, 4, 6, 8$: median = $\\frac{4+6}{2} = 5$. For odd count: middle value. Less affected by outliers.",
          },
          {
            heading: "Mode",
            body: "Mode = most frequent value. For $2, 2, 3, 4, 4, 4, 5$: mode = $4$. Can have multiple modes or no mode.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\frac{\\text{sum}}{\\text{count}}$" },
          { name: "Median", statement: "Middle value (ordered)" },
          { name: "Mode", statement: "Most frequent value" },
        ],
        workedExample: {
          problem: "Find mean, median, mode of $3, 5, 5, 7, 9$.",
          solution: "Mean = $\\frac{29}{5} = 5.8$; median = $5$; mode = $5$.",
        },
      },
      questions: [
        {
          id: "m8-u9-measures-center-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of $2, 4, 6, 8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Sum / count." },
            ],
            steps: [
              {
                reasoning: "$\\frac{20}{4} = 5$.",
                evidence: "5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Dividing wrong sum."],
          },
        },
        {
          id: "m8-u9-measures-center-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the median of $1, 3, 5, 7, 9, 11$?",
          response: {
            type: "numeric",
            parts: [{ label: "Median", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Median",
                statement: "Middle value(s).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Even count: average of 3rd and 4th values: $\\frac{5+7}{2} = 6$.",
                working: "6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Not averaging middle values."],
          },
        },
        {
          id: "m8-u9-measures-center-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find mean, median, and mode for each data set.",
          parts: [
            { label: "a", prompt: "$2, 4, 4, 6, 8$", marks: 1 },
            { label: "b", prompt: "$1, 2, 3, 4, 5, 6$", marks: 1 },
            { label: "c", prompt: "$5, 5, 5, 10, 10$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Measures of center",
                statement: "Mean, median, mode.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mean = $4.8$; median = $4$; mode = $4$.",
                evidence: "4.8,4,4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Mean = $3.5$; median = $3.5$; no mode.",
                evidence: "3.5,3.5,none",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Mean = $7$; median = $5$; mode = $5$ and $10$ (bimodal).",
                evidence: "7,5,5&10",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Mean $4.8$, median $4$, mode $4$ (b) Mean $3.5$, median $3.5$, no mode (c) Mean $7$, median $5$, modes $5$ and $10$",
            commonErrors: ["In (c), not recognizing bimodal."],
          },
        },
        {
          id: "m8-u9-measures-center-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find mean, median, and mode for each data set.",
          parts: [
            { label: "a", prompt: "$3, 7, 7, 8, 12$", marks: 2 },
            { label: "b", prompt: "$0, 1, 2, 3, 4, 5, 6$", marks: 2 },
            { label: "c", prompt: "$10, 20, 20, 20, 30$", marks: 2 },
            { label: "d", prompt: "$2, 2, 4, 4, 6, 6$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Measures of center",
                statement: "Mean, median, mode.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mean = $7.4$; median = $7$; mode = $7$.",
                evidence: "7.4,7,7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Mean = $3$; median = $3$; no mode.",
                evidence: "3,3,none",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Mean = $20$; median = $20$; mode = $20$.",
                evidence: "20,20,20",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Mean = $4$; median = $4$; modes = $2, 4, 6$ (trimodal).",
                evidence: "4,4,2&4&6",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Mean $7.4$, median $7$, mode $7$ (b) Mean $3$, median $3$, no mode (c) Mean $20$, median $20$, mode $20$ (d) Mean $4$, median $4$, modes $2,4,6$",
            commonErrors: ["In (d), not recognizing multiple modes."],
          },
        },
      ],
    },
    {
      id: "m8-u9-measures-spread",
      title: "Measures of spread",
      skill: "Calculate range, interquartile range, and identify outliers.",
      lesson: {
        sections: [
          {
            heading: "Range",
            body: "Range = maximum - minimum. For $2, 5, 8, 12$: range = $12 - 2 = 10$. Simple but sensitive to outliers.",
          },
          {
            heading: "Quartiles and IQR",
            body: "Q1 = median of lower half, Q3 = median of upper half. IQR = Q3 - Q1. For $2, 5, 8, 12$: Q1 = $3.5$, Q3 = $10$, IQR = $6.5$.",
          },
          {
            heading: "Outliers",
            body: "Outliers are values more than $1.5 \\times$ IQR from Q1 or Q3. For IQR = $6.5$: lower bound = $3.5 - 9.75 = -6.25$; upper bound = $10 + 9.75 = 19.75$. Values outside are outliers.",
          },
        ],
        keyFormulas: [
          { name: "Range", statement: "Max - min" },
          { name: "IQR", statement: "Q3 - Q1" },
          {
            name: "Outlier",
            statement: "Beyond $1.5 \\times$ IQR from quartiles",
          },
        ],
        workedExample: {
          problem: "Find range and IQR for $4, 8, 10, 12, 15, 20$.",
          solution: "Range = $16$; Q1 = $9$, Q3 = $17.5$, IQR = $8.5$.",
        },
      },
      questions: [
        {
          id: "m8-u9-measures-spread-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the range of $3, 7, 9, 12, 15$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Range", statement: "Max - min." },
            ],
            steps: [
              {
                reasoning: "$15 - 3 = 12$.",
                evidence: "12",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $12$",
            commonErrors: ["Not subtracting correctly."],
          },
        },
        {
          id: "m8-u9-measures-spread-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the interquartile range of $2, 4, 6, 8, 10, 12$.",
          response: { type: "numeric", parts: [{ label: "IQR", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "IQR", statement: "Q3 - Q1." },
            ],
            steps: [
              {
                reasoning: "Q1 = $4$, Q3 = $10$; IQR = $10 - 4 = 6$.",
                working: "6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Not finding quartiles correctly."],
          },
        },
        {
          id: "m8-u9-measures-spread-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find range and IQR for each data set.",
          parts: [
            { label: "a", prompt: "$5, 10, 15, 20, 25$", marks: 1 },
            { label: "b", prompt: "$1, 3, 5, 7, 9, 11$", marks: 1 },
            { label: "c", prompt: "$2, 4, 6, 8, 10$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Range/IQR",
                statement: "Max-min and Q3-Q1.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Range = $20$; Q1 = $12.5$, Q3 = $22.5$, IQR = $10$.",
                evidence: "20,10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Range = $10$; Q1 = $4$, Q3 = $9$, IQR = $5$.",
                evidence: "10,5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Range = $8$; Q1 = $4$, Q3 = $8$, IQR = $4$.",
                evidence: "8,4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Range $20$, IQR $10$ (b) Range $10$, IQR $5$ (c) Range $8$, IQR $4$",
            commonErrors: ["In (a), not finding quartiles correctly."],
          },
        },
        {
          id: "m8-u9-measures-spread-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Find range, IQR, and identify outliers.",
          parts: [
            { label: "a", prompt: "$3, 5, 7, 9, 11, 13, 50$", marks: 2 },
            { label: "b", prompt: "$10, 12, 14, 16, 18, 20$", marks: 2 },
            { label: "c", prompt: "$2, 4, 6, 8, 10, 12, 100$", marks: 2 },
            { label: "d", prompt: "$5, 10, 15, 20, 25, 30$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Range/IQR",
                statement: "Max-min and Q3-Q1.",
              },
              {
                kind: "skill",
                name: "Outliers",
                statement: "Beyond $1.5 \\times$ IQR.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Range = $47$; Q1 = $6$, Q3 = $13$, IQR = $7$; upper bound = $13 + 10.5 = 23.5$; $50$ is outlier.",
                evidence: "47,7,50",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Range = $10$; Q1 = $13$, Q3 = $18$, IQR = $5$; no outliers.",
                evidence: "10,5,none",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Range = $98$; Q1 = $6$, Q3 = $11$, IQR = $5$; upper bound = $11 + 7.5 = 18.5$; $100$ is outlier.",
                evidence: "98,5,100",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Range = $25$; median of lower half $5,10,15$ = $10$; median of upper half $20,25,30$ = $25$; IQR = $15$; no outliers.",
                evidence: "25,15,none",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Range $47$, IQR $7$, outlier $50$ (b) Range $10$, IQR $5$, no outliers (c) Range $98$, IQR $5$, outlier $100$ (d) Range $25$, IQR $15$, no outliers",
            commonErrors: ["In (d), not finding quartiles correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u9-comparing-data",
      title: "Comparing data sets",
      skill: "Compare data sets using measures of center and spread.",
      lesson: {
        sections: [
          {
            heading: "Center comparison",
            body: "Compare means or medians to see which data set has higher typical values. Data set A: mean $10$; Data set B: mean $15$ → B is typically higher.",
          },
          {
            heading: "Spread comparison",
            body: "Compare IQR or range to see which data set is more consistent. Data set A: IQR $5$; Data set B: IQR $15$ → A is more consistent.",
          },
          {
            heading: "Outliers",
            body: "Outliers affect mean but not median. A data set with outliers may have mean ≠ median. Median is more robust.",
          },
        ],
        keyFormulas: [
          { name: "Center", statement: "Compare mean/median" },
          { name: "Spread", statement: "Compare IQR/range" },
          { name: "Outliers", statement: "Affect mean, not median" },
        ],
        workedExample: {
          problem:
            "Data set A: mean $20$, IQR $10$. Data set B: mean $18$, IQR $4$. Which is more consistent?",
          solution: "B is more consistent (smaller IQR).",
        },
      },
      questions: [
        {
          id: "m8-u9-comparing-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which measure is least affected by outliers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Median" },
              { id: "b", text: "Mean" },
              { id: "c", text: "Range" },
              { id: "d", text: "Mode" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Robustness",
                statement: "Median resists outliers.",
              },
            ],
            steps: [
              {
                reasoning: "Median is least affected by outliers.",
                evidence: "median",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Median",
            commonErrors: ["Thinking mean is robust."],
          },
        },
        {
          id: "m8-u9-comparing-data-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Data set A has mean $15$, data set B has mean $20$. Which has higher typical values?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Center",
                statement: "Compare means/medians.",
              },
            ],
            steps: [
              {
                reasoning: "B has higher mean → higher typical values.",
                evidence: "B",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "State answer.",
                evidence: "B",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Data set B",
            commonErrors: ["Not comparing correctly."],
          },
        },
        {
          id: "m8-u9-comparing-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the data sets.",
          parts: [
            {
              label: "a",
              prompt:
                "A: mean $10$, IQR $5$; B: mean $12$, IQR $15$ — which is more consistent?",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "C: mean $8$, IQR $20$; D: mean $9$, IQR $6$ — which has higher center?",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "E: mean $5$, median $5$; F: mean $10$, median $7$ — which has outliers?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparison",
                statement: "Center and spread.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A is more consistent (smaller IQR).",
                evidence: "A",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "D has higher center (mean $9$ vs $8$).",
                evidence: "D",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "F has outliers (mean $10$ ≠ median $7$).",
                evidence: "F",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) A (b) D (c) F",
            commonErrors: [
              "In (c), not recognizing mean ≠ median indicates outliers.",
            ],
          },
        },
        {
          id: "m8-u9-comparing-data-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare each pair of data sets.",
          parts: [
            {
              label: "a",
              prompt:
                "A: mean $20$, IQR $8$; B: mean $22$, IQR $15$ — consistency?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "C: mean $5$, median $5$; D: mean $8$, median $6$ — which has outliers?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "E: mean $15$, IQR $10$; F: mean $12$, IQR $4$ — center?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "G: mean $30$, IQR $20$; H: mean $25$, IQR $5$ — spread?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparison",
                statement: "Center and spread.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A is more consistent (IQR $8$ vs $15$).",
                evidence: "A",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "D has outliers (mean $8$ ≠ median $6$).",
                evidence: "D",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "E has higher center (mean $15$ vs $12$).",
                evidence: "E",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "H has smaller spread (IQR $5$ vs $20$).",
                evidence: "H",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) A more consistent (b) D has outliers (c) E higher center (d) H smaller spread",
            commonErrors: ["Not comparing correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u9-statistics-applications",
      title: "Statistics applications",
      skill:
        "Apply statistical analysis to real-world data and make informed decisions.",
      lesson: {
        sections: [
          {
            heading: "Real-world data",
            body: "Statistics is used in sports (player performance), business (sales data), science (experiment results), and everyday life (grades, budgets).",
          },
          {
            heading: "Choosing appropriate measures",
            body: "Use mean for symmetric data without outliers; median for skewed data or data with outliers; mode for categorical data.",
          },
          {
            heading: "Data interpretation",
            body: "Don't just calculate—interpret. A high mean with large IQR means inconsistent performance. A low median with small IQR means consistent but low performance.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Best for symmetric data" },
          { name: "Median", statement: "Best for skewed data" },
          { name: "Interpretation", statement: "Context matters" },
        ],
        workedExample: {
          problem:
            "Test scores: $60, 70, 80, 90, 100$. Which measure best represents typical performance?",
          solution: "Median = $80$ (robust, representative).",
        },
      },
      questions: [
        {
          id: "m8-u9-statistics-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When is median preferred over mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When data has outliers" },
              { id: "b", text: "When data is symmetric" },
              { id: "c", text: "When data is categorical" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Robustness",
                statement: "Median resists outliers.",
              },
            ],
            steps: [
              {
                reasoning: "Median preferred when data has outliers.",
                evidence: "outliers",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** When data has outliers",
            commonErrors: ["Not understanding robustness."],
          },
        },
        {
          id: "m8-u9-statistics-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A data set has mean $50$ and median $45$. What does this suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Skewness",
                statement: "Mean > median suggests right skew.",
              },
            ],
            steps: [
              {
                reasoning: "Mean > median → right-skewed distribution.",
                evidence: "right skew",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Higher values pull mean above median.",
                evidence: "higher values",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Right-skewed distribution",
            commonErrors: ["Not recognizing skewness."],
          },
        },
        {
          id: "m8-u9-statistics-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyze each scenario.",
          parts: [
            {
              label: "a",
              prompt: "Test scores: mean $75$, median $80$ — skewed?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Salary data: mean $50k$, median $40k$ — skewed?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Which measure is best for salary data?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Skewness",
                statement: "Mean vs median indicates skew.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mean < median → left skew.",
                evidence: "left",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Mean > median → right skew.",
                evidence: "right",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Median (robust to high-income outliers).",
                evidence: "median",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Left skew (b) Right skew (c) Median",
            commonErrors: ["In (a), confusing skew direction."],
          },
        },
        {
          id: "m8-u9-statistics-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Data: $10, 20, 30, 40, 100$. Which measure best represents typical value?",
              marks: 2,
            },
            { label: "b", prompt: "Why is median preferred here?", marks: 2 },
            {
              label: "c",
              prompt: "If outlier removed, how does mean change?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give example of categorical data.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Robustness",
                statement: "Median resists outliers.",
              },
              {
                kind: "skill",
                name: "Data interpretation",
                statement: "Context matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Median = $30$ (robust to outlier $100$).",
                evidence: "30",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Median unaffected by extreme value $100$.",
                evidence: "unaffected",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Mean decreases (outlier inflated it).",
                evidence: "decreases",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Example: eye color, favorite sport, blood type.",
                evidence: "categorical",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Median $30$ (b) Unaffected by outlier (c) Mean decreases (d) Eye color example",
            commonErrors: ["In (a), not recognizing outlier effect."],
          },
        },
      ],
    },
  ],
};

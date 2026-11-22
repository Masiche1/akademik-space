import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "eias-econ-u6-lesson-6-3",
  code: "6-3",
  title: "Quantitative Methods",
  goal: "I CAN use indices, statistical diagrams and correlation in economic analysis.",
  standards: [
    "Edexcel IAS Economics 9EC01 Unit 6 — Business Economics and Quantitative Methods",
  ],
  vocabulary: [
    {
      term: "Index number",
      definition: "Relative measure of change — base year = 100.",
    },
    { term: "CPI", definition: "Consumer Price Index — measures inflation." },
    {
      term: "Correlation",
      definition: "Statistical relationship between two variables.",
    },
    {
      term: "Scatter diagram",
      definition: "Graph showing relationship between two variables.",
    },
    { term: "Mean", definition: "Average of a set of values." },
    { term: "Median", definition: "Middle value when data sorted." },
  ],
  concepts: [
    {
      id: "eias-econ-u6-indices",
      title: "Index Numbers",
      skill: "Calculate and interpret index numbers.",
      lesson: {
        sections: [
          {
            heading: "Index calculation",
            body: "**Index** = (Current value ÷ Base value) × 100. Base year always 100. **Percentage change** = (Current index − Previous index) ÷ Previous index × 100.\n\n**Example**: CPI base 100 → current 110 → inflation 10%.",
          },
          {
            heading: "Applications",
            body: "**CPI**: measures inflation — basket of goods price change. **RPI**: retail price index — similar but different basket. **Index-linked bonds**: payments adjust with inflation index. **Real wages**: nominal wage ÷ price index — purchasing power.\n\n**Limitation**: index may not reflect individual consumption patterns.",
          },
        ],
        keyFormulas: [
          { name: "Index number", statement: "(Current ÷ base) × 100." },
          {
            name: "Percentage change",
            statement: "(Current index − previous) ÷ previous × 100.",
          },
        ],
        workedExample: {
          problem: "CPI: 2020=100, 2023=115. Inflation 2020-23?",
          solution: "15%.",
        },
      },
      questions: [
        {
          id: "eias-econ-u6-idx-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an index number of 110 mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10% increase from base" },
              { id: "b", text: "Absolute value" },
              { id: "c", text: "110% of population" },
              { id: "d", text: "10% decrease" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Index", statement: "Base=100." },
            ],
            steps: [
              {
                reasoning: "Index 110 = 10% above base.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 10% increase",
            commonErrors: ["Decrease confused."],
          },
        },
        {
          id: "eias-econ-u6-idx-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "CPI index: 2020=100, 2021=103, 2022=106. Calculate inflation 2021-22.",
          response: {
            type: "numeric",
            parts: [{ label: "inflation", answer: 2.9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation",
                statement: "% change in CPI.",
              },
            ],
            steps: [
              {
                reasoning: "(106 − 103) ÷ 103 × 100 = 2.9%.",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning: "Use previous year as base for % change.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "~2.9%",
            commonErrors: ["Wrong base.", "3% only."],
          },
        },
        {
          id: "eias-econ-u6-idx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two limitations of CPI as an inflation measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CPI limits",
                statement: "Basket issues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Basket may not reflect individual spending — substitution bias.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Quality improvements — same product may be better, overstates inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Excludes some items — housing costs underweighted in some measures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different groups experience different inflation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Basket, quality, coverage, groups.",
            commonErrors: ["Perfect measure.", "Only one."],
          },
        },
        {
          id: "eias-econ-u6-idx-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "CPI index: 2020=100, 2021=104, 2022=108, 2023=112.",
          parts: [
            { label: "a", prompt: "Calculate inflation each year.", marks: 4 },
            {
              label: "b",
              prompt: "Calculate total inflation 2020-23.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation calc",
                statement: "Year-on-year.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) 2021: (104−100)/100 = 4%; 2022: (108−104)/104 = 3.8%; 2023: (112−108)/108 = 3.7%.",
                marks: 4,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) (112−100)/100 = 12% total.",
                marks: 4,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 4%, 3.8%, 3.7% (b) 12%",
            commonErrors: ["Wrong base.", "Add %s."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u6-stats",
      title: "Statistical Analysis",
      skill:
        "Interpret correlation, scatter diagrams and statistical measures.",
      lesson: {
        sections: [
          {
            heading: "Correlation",
            body: "**Positive**: variables move together — ice cream sales & temperature. **Negative**: inverse — price & quantity. **Zero**: no relationship. **Correlation ≠ causation**: may be coincidental or third factor.\n\n**Scatter diagram**: plot points — upward slope = positive, downward = negative, random = no correlation.",
          },
          {
            heading: "Statistical measures",
            body: "**Mean**: average — sensitive to outliers. **Median**: middle value — robust to outliers. **Mode**: most frequent. **Range**: max − min — spread measure.\n\n**Standard deviation**: average deviation from mean — measures dispersion.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum of values ÷ number of values." },
          { name: "Median", statement: "Middle value when sorted." },
        ],
        workedExample: {
          problem: "Data: 2, 4, 4, 6, 8. Median?",
          solution: "4 (middle value).",
        },
      },
      questions: [
        {
          id: "eias-econ-u6-stats-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does positive correlation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variables move together" },
              { id: "b", text: "Causation" },
              { id: "c", text: "No relationship" },
              { id: "d", text: "Variables move oppositely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive correlation",
                statement: "Move together.",
              },
            ],
            steps: [
              {
                reasoning: "Positive = both rise/fall together.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Move together",
            commonErrors: ["Negative confused."],
          },
        },
        {
          id: "eias-econ-u6-stats-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Data: 10, 15, 20, 25, 30. Calculate mean and median.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean + median",
                statement: "Central tendency.",
              },
            ],
            steps: [
              {
                reasoning: "Mean = (10+15+20+25+30) ÷ 5 = 20.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Median = 20 (middle value).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both same here — symmetric data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Mean 20, median 20.",
            commonErrors: ["Wrong formula.", "Only one."],
          },
        },
        {
          id: "eias-econ-u6-stats-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why correlation doesn't imply causation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation vs causation",
                statement: "Third factors.",
              },
            ],
            steps: [
              {
                reasoning: "Two variables may correlate coincidentally.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Third variable may drive both — confounding.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reverse causation possible — effect causes cause.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: ice cream sales & drowning — both caused by heat.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Correlation ≠ causation — confounding possible.",
            commonErrors: ["Always causal.", "No example."],
          },
        },
        {
          id: "eias-econ-u6-stats-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A scatter diagram shows strong positive correlation between education and income.",
          parts: [
            { label: "a", prompt: "Interpret the correlation.", marks: 3 },
            {
              label: "b",
              prompt: "Explain why it doesn't prove causation.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correlation analysis",
                statement: "Interpret carefully.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Higher education → higher income (on average).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Positive correlation — both rise together.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) May be coincidence — other factors drive both.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Ability/aptitude may cause both — confounding variable.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Reverse causation — higher income enables more education.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) positive corr (b) confounding/reverse possible",
            commonErrors: ["Causal proof.", "No explanation."],
          },
        },
      ],
    },
  ],
};

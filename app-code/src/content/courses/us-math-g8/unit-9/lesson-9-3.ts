import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "m8-u9-lesson-9-3",
  code: "9-3",
  title: "Integrated Statistics and Probability Review",
  goal: "I CAN integrate statistical analysis and probability to solve comprehensive problems.",
  standards: [
    "8.SP.A.1",
    "8.SP.A.2",
    "8.SP.A.3",
    "8.SP.A.4",
    "8.SP.A.5",
    "8.SP.A.6",
    "8.SP.A.7",
    "8.SP.A.8",
  ],
  vocabulary: [
    { term: "Data set", definition: "A collection of related data points." },
    { term: "Distribution", definition: "The pattern of how data is spread." },
    { term: "Outlier", definition: "A value far from the rest of the data." },
    {
      term: "Probability",
      definition: "The likelihood of an event occurring.",
    },
    { term: "Expected value", definition: "Average outcome over many trials." },
    {
      term: "Conditional probability",
      definition: "Probability of an event given another event occurred.",
    },
  ],
  concepts: [
    {
      id: "m8-u9-integrated-stats",
      title: "Integrated statistical analysis",
      skill:
        "Combine measures of center, spread, and probability to analyze data comprehensively.",
      lesson: {
        sections: [
          {
            heading: "Complete analysis",
            body: "To analyze data thoroughly: calculate mean, median, mode (center); range, IQR (spread); identify outliers; interpret in context.",
          },
          {
            heading: "Statistical vs probability",
            body: "Statistics describes existing data; probability predicts future outcomes. Statistics: '50% of students scored above 80'. Probability: 'If you study, there's a 70% chance of scoring above 80'.",
          },
          {
            heading: "Real-world decision making",
            body: "Use statistics to understand data; use probability to make predictions. Combined: analyze historical data (statistics) to predict future outcomes (probability).",
          },
        ],
        keyFormulas: [
          { name: "Center", statement: "Mean, median, mode" },
          { name: "Spread", statement: "Range, IQR" },
          { name: "Probability", statement: "Likelihood of events" },
        ],
        workedExample: {
          problem:
            "Test scores: $60, 70, 80, 90, 100$. Analyze and predict probability of scoring above 80.",
          solution:
            "Mean = $80$, median = $80$; $P(>80) = \\frac{2}{5} = 0.4$.",
        },
      },
      questions: [
        {
          id: "m8-u9-integrated-stats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between statistics and probability?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Statistics describes data; probability predicts outcomes",
              },
              { id: "b", text: "They are the same" },
              { id: "c", text: "Statistics predicts; probability describes" },
              { id: "d", text: "Statistics is only for large data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Statistics vs probability",
                statement: "Describe vs predict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics describes existing data; probability predicts future outcomes.",
                evidence: "describe/predict",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** Statistics describes data; probability predicts outcomes",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "m8-u9-integrated-stats-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Test scores: $50, 60, 70, 80, 90, 100$. What is the probability of scoring above 75?",
          response: {
            type: "numeric",
            parts: [{ label: "Probability", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Above 75: $80, 90, 100$ → $\\frac{3}{6} = \\frac{1}{2}$.",
                working: "0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Counting wrong outcomes."],
          },
        },
        {
          id: "m8-u9-integrated-stats-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyze each data set.",
          parts: [
            {
              label: "a",
              prompt: "$20, 30, 40, 50, 60$: find mean and median",
              marks: 1,
            },
            {
              label: "b",
              prompt: "What is probability of value > 40?",
              marks: 1,
            },
            { label: "c", prompt: "Is there an outlier?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Measures of center",
                statement: "Mean, median.",
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
                reasoning: "Mean = $40$; median = $40$.",
                evidence: "40,40",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Above 40: $50, 60$ → $\\frac{2}{5} = 0.4$.",
                evidence: "0.4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Median = $40$; lower half $20,30$ → Q1 = $25$; upper half $50,60$ → Q3 = $55$; IQR = $30$; bounds: $25-45=-20$, $55+45=100$; no outliers.",
                evidence: "none",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Mean $40$, median $40$ (b) $0.4$ (c) No outliers",
            commonErrors: ["In (c), not checking bounds correctly."],
          },
        },
        {
          id: "m8-u9-integrated-stats-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each data set comprehensively.",
          parts: [
            {
              label: "a",
              prompt: "$10, 20, 30, 40, 50$: find mean, median, range",
              marks: 2,
            },
            { label: "b", prompt: "Probability of value > 30?", marks: 2 },
            {
              label: "c",
              prompt: "$5, 15, 25, 35, 45, 55$: find IQR",
              marks: 2,
            },
            { label: "d", prompt: "Are there outliers?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Measures of center/spread",
                statement: "Mean, median, range, IQR.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mean = $30$; median = $30$; range = $40$.",
                evidence: "30,30,40",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Above 30: $40, 50$ → $\\frac{2}{5} = 0.4$.",
                evidence: "0.4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Q1 = $15$, Q3 = $45$, IQR = $30$.",
                evidence: "30",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Bounds: $15-45=-30$, $45+45=90$; no outliers.",
                evidence: "none",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Mean $30$, median $30$, range $40$ (b) $0.4$ (c) IQR $30$ (d) No outliers",
            commonErrors: ["In (c), not finding quartiles correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u9-probability-statistics",
      title: "Probability and statistics combined",
      skill:
        "Use statistical data to calculate probabilities and make predictions.",
      lesson: {
        sections: [
          {
            heading: "Historical probability",
            body: "Use past data to estimate probability: if 30 out of 100 students scored above 80, $P(>80) \\approx 0.3$.",
          },
          {
            heading: "Conditional probability",
            body: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. Given 20 students studied and 15 scored above 80: $P(>80|\\text{studied}) = \\frac{15}{20} = 0.75$.",
          },
          {
            heading: "Predictions",
            body: "Use statistical patterns to predict future outcomes. If 60% of students prefer online learning, predict 60 out of 100 will prefer it.",
          },
        ],
        keyFormulas: [
          {
            name: "Historical",
            statement:
              "$P(E) \\approx \\frac{\\text{occurrences}}{\\text{trials}}$",
          },
          {
            name: "Conditional",
            statement: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$",
          },
          { name: "Prediction", statement: "Apply proportions to new data" },
        ],
        workedExample: {
          problem:
            "Of 50 students, 30 passed. If this continues, how many of 200 will pass?",
          solution:
            "$P(\\text{pass}) = \\frac{30}{50} = 0.6$; expected = $200 \\times 0.6 = 120$.",
        },
      },
      questions: [
        {
          id: "m8-u9-probability-statistics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If 40 out of 100 students scored above 80, what is the estimated probability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.4$" },
              { id: "b", text: "$0.6$" },
              { id: "c", text: "$40$" },
              { id: "d", text: "$0.04$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Historical probability",
                statement:
                  "$P(E) \\approx \\frac{\\text{occurrences}}{\\text{trials}}$",
              },
            ],
            steps: [
              {
                reasoning: "$P = \\frac{40}{100} = 0.4$.",
                evidence: "0.4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $0.4$",
            commonErrors: ["Not dividing correctly."],
          },
        },
        {
          id: "m8-u9-probability-statistics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 30 out of 50 students passed, how many of 200 will pass (assuming same rate)?",
          response: {
            type: "numeric",
            parts: [{ label: "Expected", answer: 120 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Prediction",
                statement: "Apply proportions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(\\text{pass}) = \\frac{30}{50} = 0.6$; expected = $200 \\times 0.6 = 120$.",
                working: "120",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$120$",
            commonErrors: ["Not applying proportion correctly."],
          },
        },
        {
          id: "m8-u9-probability-statistics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "If 25/100 students prefer online, probability?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "If this continues, how many of 400 prefer online?",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "If 15/20 studied students passed, $P(\\text{pass}|\\text{studied})$?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Historical probability",
                statement:
                  "$P(E) \\approx \\frac{\\text{occurrences}}{\\text{trials}}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P = \\frac{25}{100} = 0.25$.",
                evidence: "0.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$400 \\times 0.25 = 100$.",
                evidence: "100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$P(\\text{pass}|\\text{studied}) = \\frac{15}{20} = 0.75$.",
                evidence: "0.75",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $0.25$ (b) $100$ (c) $0.75$",
            commonErrors: ["In (c), not using conditional probability."],
          },
        },
        {
          id: "m8-u9-probability-statistics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "If 60/100 students prefer online, probability?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How many of 500 will prefer online?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If 45/60 preferred students also like math, $P(\\text{math}|\\text{online})$?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Is online preference associated with math preference?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Historical probability",
                statement:
                  "$P(E) \\approx \\frac{\\text{occurrences}}{\\text{trials}}$",
              },
              {
                kind: "skill",
                name: "Association",
                statement: "Compare conditional frequencies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P = \\frac{60}{100} = 0.6$.",
                evidence: "0.6",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$500 \\times 0.6 = 300$.",
                evidence: "300",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$P(\\text{math}|\\text{online}) = \\frac{45}{60} = 0.75$.",
                evidence: "0.75",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Need to compare with non-online group; cannot determine without more data.",
                evidence: "cannot determine",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) $0.6$ (b) $300$ (c) $0.75$ (d) Need more data",
            commonErrors: ["In (d), assuming association without comparison."],
          },
        },
      ],
    },
    {
      id: "m8-u9-final-review",
      title: "Final statistics and probability review",
      skill:
        "Integrate all statistics and probability concepts for comprehensive problem solving.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive analysis",
            body: "Combine all skills: calculate measures of center/spread, identify outliers, calculate probabilities, make predictions, and interpret results.",
          },
          {
            heading: "Problem-solving strategy",
            body: "1) Identify what type of problem (statistics or probability). 2) Choose appropriate formulas. 3) Calculate carefully. 4) Interpret in context.",
          },
          {
            heading: "Exam preparation",
            body: "Practice with mixed problems. Review formulas. Check units and reasonableness of answers. Show all work for partial credit.",
          },
        ],
        keyFormulas: [
          { name: "Statistics", statement: "Mean, median, mode, range, IQR" },
          { name: "Probability", statement: "Basic, compound, expected value" },
          {
            name: "Strategy",
            statement: "Identify, choose, calculate, interpret",
          },
        ],
        workedExample: {
          problem:
            "Analyze test scores and predict probability of high scores.",
          solution:
            "Calculate mean/median for center; IQR for spread; use proportions for probability.",
        },
      },
      questions: [
        {
          id: "m8-u9-final-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in solving a statistics problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify the type of problem" },
              { id: "b", text: "Calculate immediately" },
              { id: "c", text: "Guess the answer" },
              { id: "d", text: "Skip to interpretation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem-solving",
                statement: "Identify first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First identify the type of problem (statistics vs probability).",
                evidence: "identify",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Identify the type of problem",
            commonErrors: ["Jumping to calculation."],
          },
        },
        {
          id: "m8-u9-final-review-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Data: $5, 10, 15, 20, 25$. Find mean and probability of value > 15.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Sum / count." },
              {
                kind: "formula",
                name: "Probability",
                statement: "$P(E) = \\frac{\\text{favorable}}{\\text{total}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mean = $15$; above 15: $20, 25$ → $\\frac{2}{5} = 0.4$.",
                working: "15, 0.4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answers.",
                working: "15, 0.4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mean = $15$, $P(>15) = 0.4$",
            commonErrors: ["Not calculating both correctly."],
          },
        },
        {
          id: "m8-u9-final-review-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            { label: "a", prompt: "$1, 2, 3, 4, 5$: find median", marks: 1 },
            {
              label: "b",
              prompt: "Probability of rolling even on die",
              marks: 1,
            },
            { label: "c", prompt: "If $P(A) = 0.3$, find $P(A')$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Median", statement: "Middle value." },
              {
                kind: "formula",
                name: "Probability",
                statement: "Basic and complement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Median = $3$.",
                evidence: "3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P(\\text{even}) = \\frac{1}{2}$.",
                evidence: "1/2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$P(A') = 0.7$.",
                evidence: "0.7",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $3$ (b) $\\frac{1}{2}$ (c) $0.7$",
            commonErrors: ["In (c), not using complement."],
          },
        },
        {
          id: "m8-u9-final-review-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each comprehensive problem.",
          parts: [
            {
              label: "a",
              prompt: "Data: $10, 20, 30, 40, 50, 60$. Find mean and IQR.",
              marks: 2,
            },
            { label: "b", prompt: "Probability of value > 35?", marks: 2 },
            {
              label: "c",
              prompt: "If this continues, how many of 100 will be > 35?",
              marks: 2,
            },
            { label: "d", prompt: "Are there outliers?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Measures of center/spread",
                statement: "Mean, IQR.",
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
                reasoning: "Mean = $35$; Q1 = $20$, Q3 = $50$, IQR = $30$.",
                evidence: "35,30",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Above 35: $40, 50, 60$ → $\\frac{3}{6} = 0.5$.",
                evidence: "0.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$100 \\times 0.5 = 50$.",
                evidence: "50",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Bounds: $20-45=-25$, $50+45=95$; no outliers.",
                evidence: "none",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Mean $35$, IQR $30$ (b) $0.5$ (c) $50$ (d) No outliers",
            commonErrors: ["In (c), not applying proportion correctly."],
          },
        },
      ],
    },
  ],
};

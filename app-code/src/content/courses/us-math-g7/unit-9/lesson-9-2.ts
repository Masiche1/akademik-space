import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "m7-u9-lesson-9-2",
  code: "9-2",
  title: "Percent in Finance and Statistics",
  goal: "I CAN apply percent calculations to financial problems (interest, loans, savings) and statistical data analysis.",
  standards: ["7.RP.A.1", "7.RP.A.2", "7.RP.A.3"],
  vocabulary: [
    {
      term: "Principal",
      definition: "The initial amount of money borrowed or invested.",
    },
    {
      term: "Interest",
      definition:
        "The cost of borrowing money or the return on investment, expressed as a percent of principal.",
    },
    {
      term: "Simple interest",
      definition:
        "Interest calculated only on the principal: $I = P \\times r \\times t$.",
    },
    {
      term: "Compound interest",
      definition: "Interest calculated on principal and accumulated interest.",
    },
    {
      term: "Rate",
      definition:
        "The percent used to calculate interest or other percent-based changes.",
    },
    {
      term: "Percentile",
      definition: "A value below which a given percent of data falls.",
    },
  ],
  concepts: [
    {
      id: "m7-u9-simple-interest",
      title: "Simple interest",
      skill:
        "Calculate simple interest and total amounts for loans and savings.",
      lesson: {
        sections: [
          {
            heading: "Simple interest formula",
            body: "Simple interest: $I = P \\times r \\times t$ where $P$ = principal, $r$ = annual rate (as decimal), $t$ = time in years. For $\\$1000$ at $5\\%$ for $3$ years: $I = 1000 \\times 0.05 \\times 3 = \\$150$. Total = principal + interest = $\\$1150$.",
          },
          {
            heading: "Loans and savings",
            body: "Loans: you pay interest on borrowed money. Savings: you earn interest on deposited money. For a loan of $\\$5000$ at $6\\%$ for $2$ years: interest = $5000 \\times 0.06 \\times 2 = \\$600$; total repayment = $\\$5600$. For savings of $\\$2000$ at $4\\%$ for $5$ years: interest = $2000 \\times 0.04 \\times 5 = \\$400$; total = $\\$2400$.",
          },
          {
            heading: "Comparing options",
            body: "Compare interest rates and terms to find best deals. Lower rate = less interest. Longer time = more interest. For the same principal and rate, longer time means more total interest but also more time for savings to grow.",
          },
        ],
        keyFormulas: [
          { name: "Simple interest", statement: "$I = P \\times r \\times t$" },
          { name: "Total amount", statement: "$A = P + I = P(1 + rt)$" },
          {
            name: "Rate as decimal",
            statement: "$r = \\frac{\\text{percent}}{100}$",
          },
        ],
        workedExample: {
          problem:
            "What is the total amount after $4$ years on $\\$3000$ at $7\\%$ simple interest?",
          solution:
            "$I = 3000 \\times 0.07 \\times 4 = \\$840$; total = $3000 + 840 = \\$3840$.",
        },
      },
      questions: [
        {
          id: "m7-u9-simple-interest-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the simple interest on $\\$500$ at $8\\%$ for $2$ years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$80$" },
              { id: "b", text: "$\\$40$" },
              { id: "c", text: "$\\$8$" },
              { id: "d", text: "$\\$400$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Simple interest",
                statement: "$I = P \\times r \\times t$.",
              },
            ],
            steps: [
              {
                reasoning: "$I = 500 \\times 0.08 \\times 2 = \\$80$.",
                working: "\\$80",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\$80$",
            commonErrors: ["Using $8$ instead of $0.08$."],
          },
        },
        {
          id: "m7-u9-simple-interest-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the total amount after $3$ years on $\\$2000$ at $5\\%$ simple interest?",
          response: {
            type: "numeric",
            parts: [{ label: "Total ($)", answer: 2300 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Simple interest",
                statement: "$I = P \\times r \\times t$; $A = P + I$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$I = 2000 \\times 0.05 \\times 3 = \\$300$; total = $2000 + 300 = \\$2300$.",
                working: "\\$2300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$2300",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$2300$",
            commonErrors: ["Forgetting to add principal."],
          },
        },
        {
          id: "m7-u9-simple-interest-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A loan of $\\$4000$ at $6\\%$ simple interest is paid off after $5$ years. How much interest is paid?",
          response: {
            type: "numeric",
            parts: [{ label: "Interest ($)", answer: 1200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Simple interest",
                statement: "$I = P \\times r \\times t$.",
              },
            ],
            steps: [
              {
                reasoning: "$I = 4000 \\times 0.06 \\times 5 = \\$1200$.",
                working: "\\$1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $4000 \\times 0.30 = 1200$ ✓.",
                working: "1200",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$1200$",
            commonErrors: ["Using $6$ instead of $0.06$."],
          },
        },
        {
          id: "m7-u9-simple-interest-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "What is the simple interest on $\\$1500$ at $4\\%$ for $6$ years?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What is the total amount after $2$ years on $\\$3000$ at $7\\%$ simple interest?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A savings account earns $3\\%$ simple interest. How much interest on $\\$5000$ after $10$ years?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Which earns more interest: $\\$2000$ at $5\\%$ for $3$ years or $\\$3000$ at $4\\%$ for $2$ years?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Interest ($)", answer: 360 },
              { label: "(b) Total ($)", answer: 3420 },
              { label: "(c) Interest ($)", answer: 1500 },
              { label: "(d) More interest amount ($)", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Simple interest",
                statement: "$I = P \\times r \\times t$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$I = 1500 \\times 0.04 \\times 6 = \\$360$.",
                working: "\\$360",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$I = 3000 \\times 0.07 \\times 2 = \\$420$; total = $3000 + 420 = \\$3420$.",
                working: "\\$3420",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$I = 5000 \\times 0.03 \\times 10 = \\$1500$.",
                working: "\\$1500",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "First: $2000 \\times 0.05 \\times 3 = \\$300$; second: $3000 \\times 0.04 \\times 2 = \\$240$; first earns $\\$60$ more.",
                working: "\\$60",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\$360$ (b) $\\$3420$ (c) $\\$1500$ (d) First earns $\\$60$ more",
            commonErrors: ["In (d), arithmetic error."],
          },
        },
      ],
    },
    {
      id: "m7-u9-compound-interest",
      title: "Compound interest introduction",
      skill: "Understand compound interest and calculate simple examples.",
      lesson: {
        sections: [
          {
            heading: "Compound vs simple",
            body: "Compound interest calculates interest on principal AND accumulated interest. For $\\$1000$ at $10\\%$ compounded annually for $2$ years: Year 1: $1000 \\times 1.10 = \\$1100$; Year 2: $1100 \\times 1.10 = \\$1210$. Simple interest would give $1000 + 200 = \\$1200$. Compound gives more ($\\$1210$).",
          },
          {
            heading: "Compound interest formula",
            body: "Compound interest: $A = P(1 + r)^t$ where $A$ = amount, $P$ = principal, $r$ = annual rate, $t$ = years. For $\\$1000$ at $10\\%$ for $2$ years: $A = 1000(1.10)^2 = 1000 \\times 1.21 = \\$1210$. Interest = $A - P = \\$210$.",
          },
          {
            heading: "When compounding occurs",
            body: "Interest can compound annually, monthly, daily, or continuously. More frequent compounding = more interest. Annual compounding: once per year. Monthly: $12$ times per year. For Grade 7, focus on annual compounding.",
          },
        ],
        keyFormulas: [
          { name: "Compound interest", statement: "$A = P(1 + r)^t$" },
          { name: "Interest earned", statement: "$I = A - P$" },
          {
            name: "Annual compounding",
            statement: "Interest added once per year",
          },
        ],
        workedExample: {
          problem:
            "What is the amount after $3$ years on $\\$500$ at $20\\%$ compounded annually?",
          solution: "$A = 500(1.20)^3 = 500 \\times 1.728 = \\$864$.",
        },
      },
      questions: [
        {
          id: "m7-u9-compound-interest-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the compound interest formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A = P(1 + r)^t$" },
              { id: "b", text: "$A = P + rt$" },
              { id: "c", text: "$A = P(1 + rt)$" },
              { id: "d", text: "$A = P + r^t$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound interest",
                statement: "$A = P(1 + r)^t$.",
              },
            ],
            steps: [
              {
                reasoning: "Compound interest uses exponent $t$ on $(1 + r)$.",
                working: "P(1 + r)^t",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $A = P(1 + r)^t$",
            commonErrors: ["Confusing with simple interest formula."],
          },
        },
        {
          id: "m7-u9-compound-interest-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the amount after $2$ years on $\\$1000$ at $10\\%$ compounded annually?",
          response: {
            type: "numeric",
            parts: [{ label: "Amount ($)", answer: 1210 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound interest",
                statement: "$A = P(1 + r)^t$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = 1000(1.10)^2 = 1000 \\times 1.21 = \\$1210$.",
                working: "\\$1210",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$1210",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$1210$",
            commonErrors: ["Using simple interest formula."],
          },
        },
        {
          id: "m7-u9-compound-interest-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the interest earned after $3$ years on $\\$2000$ at $5\\%$ compounded annually?",
          response: {
            type: "numeric",
            parts: [{ label: "Interest ($)", answer: 315.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound interest",
                statement: "$A = P(1 + r)^t$; $I = A - P$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A = 2000(1.05)^3 = 2000 \\times 1.157625 = \\$2315.25$.",
                working: "\\$2315.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest = $2315.25 - 2000 = \\$315.25$.",
                working: "\\$315.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$315.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$315.25$",
            commonErrors: ["Reporting amount instead of interest."],
          },
        },
        {
          id: "m7-u9-compound-interest-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "What is the amount after $2$ years on $\\$1500$ at $8\\%$ compounded annually?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What is the interest after $3$ years on $\\$1000$ at $10\\%$ compounded annually?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Which earns more: $\\$1000$ at $10\\%$ compound for $2$ years or $\\$1000$ at $10\\%$ simple for $2$ years?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "What is the amount after $4$ years on $\\$500$ at $15\\%$ compounded annually?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Amount ($)", answer: 1749.6 },
              { label: "(b) Interest ($)", answer: 331 },
              { label: "(c) More earnings ($)", answer: 10 },
              { label: "(d) Amount ($)", answer: 874.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound interest",
                statement: "$A = P(1 + r)^t$.",
              },
              {
                kind: "skill",
                name: "Compound vs simple",
                statement: "Compound earns more due to interest on interest.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$A = 1500(1.08)^2 = 1500 \\times 1.1664 = \\$1749.60$.",
                working: "\\$1749.60",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$A = 1000(1.10)^3 = \\$1331$; interest = $1331 - 1000 = \\$331$.",
                working: "\\$331",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Compound: $1000(1.10)^2 = \\$1210$; simple: $1000 + 200 = \\$1200$; compound earns $\\$10$ more.",
                working: "\\$10",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$A = 500(1.15)^4 = 500 \\times 1.74900625 = \\$874.50$.",
                working: "\\$874.50",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\$1749.60$ (b) $\\$331$ (c) Compound earns $\\$10$ more (d) $\\$874.50$",
            commonErrors: ["In (d), arithmetic error in exponent."],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-statistics",
      title: "Percent in statistics",
      skill:
        "Apply percent calculations to statistical data analysis and interpretation.",
      lesson: {
        sections: [
          {
            heading: "Percent of data",
            body: "Percentages describe proportions in data sets. 'What percent of students scored above 80?' = (number above 80 / total) × 100%. 'What percent increase in sales?' = (new - old) / old × 100%.",
          },
          {
            heading: "Percentile interpretation",
            body: "The $p$th percentile is the value below which $p\\%$ of data falls. The 75th percentile (Q3) means 75% of data is below that value. Percentiles help understand data distribution and compare individual values to the group.",
          },
          {
            heading: "Percent change in data",
            body: "Percent change compares values over time or between groups. 'Sales increased 15%' = (new - old) / old × 100%. 'Group A scored 20% higher than Group B' = (A - B) / B × 100%. Always specify the base (denominator).",
          },
        ],
        keyFormulas: [
          {
            name: "Percent of data",
            statement: "$\\frac{\\text{count}}{\\text{total}} \\times 100\\%$",
          },
          {
            name: "Percentile",
            statement: "$p$th percentile: $p\\%$ of data below",
          },
          {
            name: "Percent change",
            statement:
              "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$",
          },
        ],
        workedExample: {
          problem:
            "In a class of $30$ students, $18$ scored above $80$. What percent scored above $80$?",
          solution: "$\\frac{18}{30} = 0.60 = 60\\%$.",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-statistics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a survey of $200$ people, $60$ preferred option A. What percent preferred A?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30\\%$" },
              { id: "b", text: "$60\\%$" },
              { id: "c", text: "$33.3\\%$" },
              { id: "d", text: "$140\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of data",
                statement: "$\\frac{60}{200} = 30\\%$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{60}{200} = 0.30 = 30\\%$.",
                working: "30\\%",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $30\\%$",
            commonErrors: ["Computing $\\frac{200}{60}$."],
          },
        },
        {
          id: "m7-u9-percent-statistics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sales increased from $\\$50,000$ to $\\$57,500$. What is the percent increase?",
          response: {
            type: "numeric",
            parts: [{ label: "Percent increase", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{57,500 - 50,000}{50,000} = \\frac{7,500}{50,000} = 15\\%$.",
                working: "15\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "15\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\%$",
            commonErrors: ["Dividing by new value."],
          },
        },
        {
          id: "m7-u9-percent-statistics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "If the 75th percentile of test scores is $85$, what does this mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Percentile",
                statement: "$p$th percentile: $p\\%$ of data below.",
              },
            ],
            steps: [
              {
                reasoning:
                  "75th percentile = 85 means 75% of scores are below 85.",
                working: "75\\% \\text{ below } 85",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equivalently, 25% of scores are above 85.",
                working: "25\\% \\text{ above}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State interpretation.",
                working: "75\\% \\text{ below } 85",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75% of test scores are below 85.",
            commonErrors: ["Thinking 75% scored exactly 85."],
          },
        },
        {
          id: "m7-u9-percent-statistics-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "In a class of $40$ students, $28$ passed. What percent passed?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Website traffic increased from $10,000$ to $12,500$. What is percent increase?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If the 90th percentile of salaries is $\\$75,000$, what percent earn less than that?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A product's market share decreased from $25\\%$ to $20\\%$. What is percent decrease?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percent passed", answer: 70 },
              { label: "(b) Percent increase", answer: 25 },
              { label: "(c) Percent earning less", answer: 90 },
              { label: "(d) Percent decrease", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of data",
                statement:
                  "$\\frac{\\text{count}}{\\text{total}} \\times 100\\%$.",
              },
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
              },
              {
                kind: "definition",
                name: "Percentile",
                statement: "$p$th percentile: $p\\%$ below.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{28}{40} = 0.70 = 70\\%$.",
                working: "70\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\frac{12,500 - 10,000}{10,000} = \\frac{2,500}{10,000} = 25\\%$.",
                working: "25\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "90th percentile = $90\\%$ earn less than $\\$75,000$.",
                working: "90\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{20 - 25}{25} = \\frac{-5}{25} = -20\\%$ (20% decrease).",
                working: "-20\\%",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $70\\%$ (b) $25\\%$ (c) $90\\%$ (d) $20\\%$ decrease",
            commonErrors: ["In (d), dividing by new value instead of old."],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-modeling",
      title: "Percent modeling",
      skill:
        "Use percent calculations to model real-world situations and make predictions.",
      lesson: {
        sections: [
          {
            heading: "Modeling approach",
            body: "To model with percents: (1) identify the base (whole), (2) determine the percent, (3) calculate the part, (4) interpret results. For 'what will price be after discount and tax?', model as successive percent changes: original × (1 - discount) × (1 + tax).",
          },
          {
            heading: "Projection and prediction",
            body: "Use percent change to project future values: 'If sales grow 10% per year, what will sales be in 3 years?' Apply percent change successively. For 'population grows 5% annually', model exponential growth (compound) for accurate projections.",
          },
          {
            heading: "Sensitivity analysis",
            body: "Test how changes in percent affect outcomes: 'What if discount is 25% instead of 20%?' 'What if interest rate is 6% instead of 5%?' Percent models help understand which variables have most impact.",
          },
        ],
        keyFormulas: [
          {
            name: "Model",
            statement: "Identify base, percent, calculate part",
          },
          {
            name: "Projection",
            statement: "Apply percent change successively",
          },
          { name: "Sensitivity", statement: "Test different percent values" },
        ],
        workedExample: {
          problem:
            "A $\\$1000$ investment grows $10\\%$ per year. What will it be worth after $2$ years (simple interest)?",
          solution:
            "Year 1: $1000 \\times 1.10 = \\$1100$; Year 2: $1100 \\times 1.10 = \\$1210$. (Compound interest gives same result for 2 years.)",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-modeling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in percent modeling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate the percent" },
              { id: "b", text: "Identify the base (whole)" },
              { id: "c", text: "Multiply by 100" },
              { id: "d", text: "Add the percent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Modeling approach",
                statement: "Identify base first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Must identify base (whole) before calculating part.",
                working: "base",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify the base (whole)",
            commonErrors: ["Starting with calculation without context."],
          },
        },
        {
          id: "m7-u9-percent-modeling-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a $\\$500$ item is discounted $20\\%$ then taxed $10\\%$, what is the final price?",
          response: {
            type: "numeric",
            parts: [{ label: "Final price ($)", answer: 440 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Successive percent changes",
                statement: "Multiply factors: $0.80 \\times 1.10 = 0.88$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "After discount: $500 \\times 0.80 = \\$400$; after tax: $400 \\times 1.10 = \\$440$.",
                working: "\\$440",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or directly: $500 \\times 0.88 = \\$440$.",
                working: "\\$440",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$440$",
            commonErrors: ["Adding $20\\%$ and $10\\%$ as $30\\%$ net change."],
          },
        },
        {
          id: "m7-u9-percent-modeling-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population of $10,000$ grows $5\\%$ per year. What will it be after $2$ years?",
          response: {
            type: "numeric",
            parts: [{ label: "Population", answer: 11025 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exponential growth",
                statement: "Apply percent change successively.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Year 1: $10,000 \\times 1.05 = 10,500$; Year 2: $10,500 \\times 1.05 = 11,025$.",
                working: "11,025",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Or: $10,000 \\times (1.05)^2 = 10,000 \\times 1.1025 = 11,025$.",
                working: "11,025",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "11,025",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$11,025$",
            commonErrors: [
              "Adding $5\\% + 5\\% = 10\\%$ instead of compounding.",
            ],
          },
        },
        {
          id: "m7-u9-percent-modeling-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Model and solve each scenario.",
          parts: [
            {
              label: "a",
              prompt:
                "A $\\$200$ item has $15\\%$ discount then $8\\%$ tax. Find final price.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A $\\$1000$ investment grows $10\\%$ per year for $2$ years. Find final amount.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If prices decrease $3\\%$ per year for $3$ years, what is total decrease?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A store offers $20\\%$ off or $\\$15$ off $\\$100$. Which is better?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Final price ($)", answer: 183.6 },
              { label: "(b) Final amount ($)", answer: 1210 },
              { label: "(c) Total decrease (%)", answer: 8.727 },
              { label: "(d) Better deal", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Successive percent changes",
                statement: "Multiply factors.",
              },
              {
                kind: "skill",
                name: "Percent comparison",
                statement: "Compute final prices.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$200 \\times 0.85 \\times 1.08 = 200 \\times 0.918 = \\$183.60$.",
                working: "\\$183.60",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$1000 \\times (1.10)^2 = \\$1210$.",
                working: "\\$1210",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$1 - (0.97)^3 = 1 - 0.912673 = 0.087327 = 8.73\\%$ decrease.",
                working: "8.73\\%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "8.73\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "First: $100 \\times 0.80 = \\$80$; second: $100 - 15 = \\$85$; first is better.",
                working: "first",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\$183.60$ (b) $\\$1210$ (c) $8.73\\%$ decrease (d) $20\\%$ off",
            commonErrors: [
              "In (d), comparing percent vs flat discount without computing.",
            ],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ebz11-u4-lesson-4-2",
  code: "4-2",
  title: "Financial Documents and Ratios",
  goal: "I CAN interpret financial statements and calculate key ratios.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance"],
  vocabulary: [
    {
      term: "Income statement",
      definition: "Shows revenue, costs and profit for a period.",
    },
    {
      term: "Balance sheet",
      definition: "Shows assets, liabilities and capital at a point in time.",
    },
    { term: "Gross profit", definition: "Revenue minus cost of sales." },
    {
      term: "Net profit",
      definition: "Gross profit minus all other expenses.",
    },
    {
      term: "Liquidity ratio",
      definition: "Ability to pay short-term debts — current ratio.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u4-statements",
      title: "Financial Statements",
      skill: "Read and interpret income statements and balance sheets.",
      lesson: {
        sections: [
          {
            heading: "Income statement",
            body: "Shows performance over a period: **Revenue** (sales income) − **Cost of sales** (raw materials, direct labour) = **Gross profit** − **Expenses** (rent, wages, marketing) = **Net profit** (before/after tax).\n\n**Gross profit margin** = gross profit ÷ revenue × 100 — shows pricing power. **Net profit margin** = net profit ÷ revenue × 100 — overall profitability.",
          },
          {
            heading: "Balance sheet",
            body: "Shows position at a point in time: **Assets** (what business owns — cash, stock, equipment, debtors) = **Liabilities** (what it owes — creditors, loans) + **Capital** (owner's equity).\n\n**Current assets**: cash, stock, money owed by customers — easily converted to cash. **Fixed assets**: property, equipment, vehicles — long-term. **Current liabilities**: short-term debts. **Long-term liabilities**: loans.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue − cost of sales." },
          { name: "Net profit", statement: "Gross profit − all expenses." },
          {
            name: "Gross margin",
            statement: "(Gross profit ÷ Revenue) × 100.",
          },
        ],
        workedExample: {
          problem:
            "Revenue £100,000, cost of sales £60,000, expenses £25,000. Gross and net profit?",
          solution: "Gross = £40,000. Net = £15,000.",
        },
      },
      questions: [
        {
          id: "ebz11-u4-statements-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an income statement show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assets and liabilities" },
              { id: "b", text: "Revenue, costs and profit over a period" },
              { id: "c", text: "Employee salaries" },
              { id: "d", text: "Cash flow only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Income statement",
                statement: "Revenue − costs = profit over time.",
              },
            ],
            steps: [
              {
                reasoning: "Income statement = performance over period.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Revenue, costs, profit",
            commonErrors: ["Balance sheet confused."],
          },
        },
        {
          id: "ebz11-u4-statements-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Revenue £80,000, cost of sales £48,000. Calculate gross profit and gross margin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gross profit/margin",
                statement: "GP = R − COS; margin = GP/R × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = £80,000 − £48,000 = £32,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Margin = 32,000 ÷ 80,000 × 100 = 40%.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct units and %.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£32,000 gross profit, 40% margin",
            commonErrors: ["Wrong formula.", "No %."],
          },
        },
        {
          id: "ebz11-u4-statements-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between gross profit and net profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profit types",
                statement: "Gross = after COGS; net = after all expenses.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = revenue − cost of sales only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net profit = gross profit − all other expenses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net is always ≤ gross.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Expenses include rent, wages, marketing.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Gross = after COGS; net = after all expenses — net ≤ gross.",
            commonErrors: ["Same thing.", "Wrong order."],
          },
        },
        {
          id: "ebz11-u4-statements-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business's income statement shows:",
          parts: [
            {
              label: "a",
              prompt:
                "Revenue £200,000, cost of sales £120,000, expenses £50,000. Calculate gross and net profit.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Calculate gross and net profit margins.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit calculations",
                statement:
                  "GP = R−COS; NP = GP−expenses; margin = profit/R×100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) GP = 200,000−120,000 = £80,000.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) NP = 80,000−50,000 = £30,000.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Gross margin = 80,000/200,000 = 40%.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Net margin = 30,000/200,000 = 15%.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "(a) £80k GP, £30k NP (b) 40% gross, 15% net",
            commonErrors: ["Wrong formula.", "No margins."],
          },
        },
      ],
    },
    {
      id: "ebz11-u4-ratios",
      title: "Financial Ratios",
      skill: "Calculate and interpret key financial ratios.",
      lesson: {
        sections: [
          {
            heading: "Liquidity ratios",
            body: "**Current ratio** = current assets ÷ current liabilities — measures ability to pay short-term debts. Healthy: >1.5. **Acid test** = (current assets − stock) ÷ current liabilities — stricter liquidity measure.\n\n**Interpretation**: too high = inefficient (excess cash/stock); too low = risk of insolvency.",
          },
          {
            heading: "Profitability and efficiency ratios",
            body: "**Return on capital employed (ROCE)** = net profit ÷ capital employed × 100 — measures how well capital generates profit. **Gross margin** = pricing power. **Net margin** = overall efficiency. **Asset turnover** = revenue ÷ total assets — efficiency of asset use.\n\n**Limitations**: ratios are snapshots — need trends and comparisons. Different industries have different norms.",
          },
        ],
        keyFormulas: [
          {
            name: "Current ratio",
            statement: "Current assets ÷ current liabilities.",
          },
          { name: "ROCE", statement: "Net profit ÷ capital employed × 100." },
        ],
        workedExample: {
          problem:
            "Current assets £150k, current liabilities £100k. Current ratio?",
          solution: "150,000 ÷ 100,000 = 1.5 — healthy liquidity.",
        },
      },
      questions: [
        {
          id: "ebz11-u4-ratios-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the current ratio measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth rate" },
              { id: "b", text: "Ability to pay short-term debts" },
              { id: "c", text: "Profitability" },
              { id: "d", text: "Market share" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current ratio",
                statement: "Current assets ÷ current liabilities — liquidity.",
              },
            ],
            steps: [
              {
                reasoning: "Current ratio = short-term liquidity.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Short-term liquidity",
            commonErrors: ["Profitability confused."],
          },
        },
        {
          id: "ebz11-u4-ratios-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Current assets £200,000, current liabilities £150,000. Calculate and interpret the current ratio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current ratio",
                statement: "CA ÷ CL = 200/150 = 1.33.",
              },
            ],
            steps: [
              {
                reasoning: "Ratio = 200,000 ÷ 150,000 = 1.33.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Above 1 — can cover short-term debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reasonable but not very strong.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "1.33 — adequate liquidity.",
            commonErrors: ["Wrong formula.", "No interpretation."],
          },
        },
        {
          id: "ebz11-u4-ratios-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might a very high current ratio be a problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio interpretation",
                statement: "Too high = inefficient resource use.",
              },
            ],
            steps: [
              {
                reasoning: "Excess cash/stock not working.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Capital tied up — could be invested elsewhere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May indicate poor inventory management.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Opportunity cost of idle resources.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Too high = inefficient — idle capital, could invest elsewhere.",
            commonErrors: ["Higher always better.", "No downside."],
          },
        },
        {
          id: "ebz11-u4-ratios-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company A: CA £300k, CL £150k. Company B: CA £200k, CL £180k.",
          parts: [
            {
              label: "a",
              prompt: "Calculate current ratio for both.",
              marks: 3,
            },
            { label: "b", prompt: "Which is more liquid? Explain.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest one action for Company B.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio comparison",
                statement: "Higher ratio = more liquid.",
              },
            ],
            steps: [
              {
                reasoning: "(a) A: 300/150 = 2.0. B: 200/180 = 1.11.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct calculations.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Company A more liquid — ratio 2.0 vs 1.11.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) B has less buffer for short-term debts.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Improve cash flow, collect debts faster, reduce stock.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) A=2.0, B=1.11 (b) A more liquid (c) improve cash flow",
            commonErrors: ["Wrong ratio.", "No comparison."],
          },
        },
      ],
    },
  ],
};

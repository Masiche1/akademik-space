import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "eiasbiz-u5-lesson-5-1",
  code: "5-1",
  title: "Financial Statements",
  goal: "I CAN interpret profit and loss accounts and balance sheets.",
  standards: ["Edexcel IAS Business WBP01 Unit 5 — Finance Management"],
  vocabulary: [
    {
      term: "Profit and loss account",
      definition: "Statement of revenue, costs and profit over a period.",
    },
    {
      term: "Balance sheet",
      definition:
        "Statement of assets, liabilities and equity at a point in time.",
    },
    { term: "Revenue", definition: "Income from sales of goods/services." },
    { term: "Gross profit", definition: "Revenue minus cost of goods sold." },
    {
      term: "Net profit",
      definition: "Gross profit minus all other expenses.",
    },
    { term: "Asset", definition: "Something the business owns with value." },
  ],
  concepts: [
    {
      id: "eiasbiz-u5-pl",
      title: "Profit and Loss Account",
      skill: "Calculate gross profit, net profit and interpret P&L.",
      lesson: {
        sections: [
          {
            heading: "P&L structure",
            body: "**Revenue**: sales income. **Cost of goods sold (COGS)**: direct costs — materials, labour. **Gross profit** = Revenue − COGS. **Expenses**: rent, wages, marketing, depreciation. **Net profit** = Gross profit − expenses.\n\n**Gross profit margin** = (Gross profit ÷ Revenue) × 100 — higher = efficient production. **Net profit margin** = (Net profit ÷ Revenue) × 100 — overall profitability.",
          },
          {
            heading: "Interpreting P&L",
            body: "Rising revenue with falling profit = costs rising faster than sales. Falling gross margin = production costs up or prices down. Expense control = management effectiveness.\n\n**Example**: Revenue £100k, COGS £60k → GP £40k. Expenses £25k → NP £15k.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue − Cost of goods sold." },
          { name: "Net profit", statement: "Gross profit − all expenses." },
          { name: "Profit margin", statement: "(Profit ÷ Revenue) × 100." },
        ],
        workedExample: {
          problem: "Revenue £80k, COGS £50k, expenses £20k. GP and NP?",
          solution: "GP = 80−50 = £30k; NP = 30−20 = £10k.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-pl-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is gross profit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revenue minus tax" },
              { id: "b", text: "Revenue minus cost of goods sold" },
              { id: "c", text: "Revenue minus all costs" },
              { id: "d", text: "Total income" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gross profit",
                statement: "Revenue − COGS.",
              },
            ],
            steps: [
              {
                reasoning: "GP = revenue − direct costs.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Revenue − COGS",
            commonErrors: ["Net confused."],
          },
        },
        {
          id: "eiasbiz-u5-pl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Revenue £50k, COGS £30k, expenses £12k. Calculate net profit.",
          response: {
            type: "numeric",
            parts: [{ label: "net profit", answer: 8000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net profit",
                statement: "GP − expenses.",
              },
            ],
            steps: [
              {
                reasoning: "GP = 50,000 − 30,000 = £20,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "NP = 20,000 − 12,000 = £8,000.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "£8,000",
            commonErrors: ["Wrong COGS.", "Forgot expenses."],
          },
        },
        {
          id: "eiasbiz-u5-pl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Revenue rose 10% but net profit fell. Explain two possible causes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "P&L analysis",
                statement: "Revenue ≠ profit.",
              },
            ],
            steps: [
              {
                reasoning: "Costs rose faster — COGS or expenses increased.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Discounts given to boost sales reduced margins.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "One-off costs — redundancy, restructuring.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Revenue growth from low-margin products.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Costs up, discounts, one-offs, mix shift.",
            commonErrors: ["Impossible.", "No cause."],
          },
        },
        {
          id: "eiasbiz-u5-pl-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company's P&L shows: Revenue £200k, COGS £120k, expenses £60k.",
          parts: [
            { label: "a", prompt: "Calculate gross and net profit.", marks: 4 },
            { label: "b", prompt: "Calculate gross profit margin.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "P&L calculations",
                statement: "GP, NP, margin.",
              },
            ],
            steps: [
              {
                reasoning: "(a) GP = 200 − 120 = £80k.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) NP = 80 − 60 = £20k.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) GPM = (80 ÷ 200) × 100 = 40%.",
                marks: 4,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) GP£80k NP£20k (b) 40%",
            commonErrors: ["Wrong formula.", "No units."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u5-balance",
      title: "Balance Sheet and Ratios",
      skill: "Interpret balance sheets and calculate key financial ratios.",
      lesson: {
        sections: [
          {
            heading: "Balance sheet",
            body: "**Assets**: what business owns — fixed (property, equipment), current (cash, stock, debtors). **Liabilities**: what it owes — long-term (loans), current (creditors, overdraft). **Equity** = Assets − Liabilities = owner's stake.\n\n**Accounting equation**: Assets = Liabilities + Equity — always balances.",
          },
          {
            heading: "Key ratios",
            body: "**Current ratio** = Current assets ÷ Current liabilities — >1 means liquid. **Gearing** = Long-term liabilities ÷ (liabilities + equity) — high gearing = risky. **ROCE** = Operating profit ÷ Capital employed × 100 — return on investment.\n\n**Liquidity**: ability to pay short-term debts — current ratio key indicator.",
          },
        ],
        keyFormulas: [
          {
            name: "Accounting equation",
            statement: "Assets = Liabilities + Equity.",
          },
          {
            name: "Current ratio",
            statement: "Current assets ÷ current liabilities.",
          },
        ],
        workedExample: {
          problem: "Assets £150k, liabilities £90k. Equity?",
          solution: "£60k.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-bs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the accounting equation state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assets = Liabilities + Equity" },
              { id: "b", text: "Profit = Revenue − Costs" },
              { id: "c", text: "Revenue = Price × Quantity" },
              { id: "d", text: "Cost = Price × Quantity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Accounting equation",
                statement: "A = L + E.",
              },
            ],
            steps: [
              {
                reasoning: "Assets = Liabilities + Equity.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A = L + E",
            commonErrors: ["P&L confused."],
          },
        },
        {
          id: "eiasbiz-u5-bs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Current assets £40k, current liabilities £20k. Current ratio?",
          response: {
            type: "numeric",
            parts: [{ label: "current ratio", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Current ratio", statement: "CA ÷ CL." },
            ],
            steps: [
              { reasoning: "40 ÷ 20 = 2.0.", marks: 2, markCode: "AO2" },
              {
                reasoning: "Ratio >1 means liquid — can pay short-term debts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "2.0",
            commonErrors: ["Inverted.", "No interpretation."],
          },
        },
        {
          id: "eiasbiz-u5-bs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what high gearing means for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gearing",
                statement: "Debt vs equity.",
              },
            ],
            steps: [
              {
                reasoning: "High gearing = mostly borrowed money.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Interest payments are fixed costs — risk in downturns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "If profits fall, interest still must be paid — distress risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Low gearing = safer but may miss growth opportunities.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "High debt = riskier, fixed interest burden.",
            commonErrors: ["Always bad.", "No risk."],
          },
        },
        {
          id: "eiasbiz-u5-bs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Balance sheet: Assets £200k (cash £30k, stock £20k, debtors £15k, fixed £135k), Liabilities £120k.",
          parts: [
            { label: "a", prompt: "Calculate equity.", marks: 3 },
            { label: "b", prompt: "Calculate current ratio.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Balance sheet",
                statement: "A = L + E.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Equity = 200 − 120 = £80k.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Current assets = 30 + 20 + 15 = £65k.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Assume current liabilities ~£50k → ratio 1.3 (liquid).",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £80k (b) ~1.3",
            commonErrors: ["Wrong equity.", "Fixed as current."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u5-budget",
      title: "Budgets and Cash Flow",
      skill: "Explain budgeting and cash flow forecasting.",
      lesson: {
        sections: [
          {
            heading: "Budgeting",
            body: "**Budget**: financial plan for a period — sales, costs, profit targets. **Types**: cash budget, sales budget, production budget, expenditure budget. **Variance**: actual vs budget — favourable (better) or adverse (worse).\n\n**Budgetary control**: monitor actual vs budget, take corrective action. **Participative budgeting**: staff involved in setting targets — more commitment.",
          },
          {
            heading: "Cash flow",
            body: "**Cash flow forecast**: predict cash in/out — prevents running out of cash despite profit. **Cash vs profit**: profit ≠ cash — credit sales increase profit but cash arrives later. **Timing gap**: sales on credit, pay suppliers now — cash shortage despite profitable P&L.\n\n**Cash flow problems**: late customer payments, overstocking, too-fast growth. **Solutions**: credit control, negotiate payment terms, invoice factoring.",
          },
        ],
        keyFormulas: [
          {
            name: "Cash flow",
            statement: "Cash inflows − cash outflows = net cash position.",
          },
        ],
        workedExample: {
          problem: "Profit £10k but cash fell £5k. Why?",
          solution: "Credit sales — profit booked but cash not yet received.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-bud-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a budget?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actual results" },
              { id: "b", text: "Tax return" },
              { id: "c", text: "Invoice" },
              { id: "d", text: "Financial plan for a period" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Budget",
                statement: "Financial plan.",
              },
            ],
            steps: [
              {
                reasoning: "Budget = planned targets.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Financial plan",
            commonErrors: ["Actual confused."],
          },
        },
        {
          id: "eiasbiz-u5-bud-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can a profitable business run out of cash?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash vs profit",
                statement: "Timing difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit sales — revenue booked, cash not yet received.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pay suppliers before customers pay.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overstocking ties up cash in inventory.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Credit timing, payment terms, overstocking.",
            commonErrors: ["Profit=cash.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u5-bud-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a favourable variance means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variance",
                statement: "Actual vs budget.",
              },
            ],
            steps: [
              {
                reasoning: "Favourable = actual better than budget.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Revenue above budget or costs below budget.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adverse = worse than budget — needs investigation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: sales budget £50k, actual £55k = favourable £5k.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Actual better than budget — investigate adverse.",
            commonErrors: ["Reversed.", "No example."],
          },
        },
        {
          id: "eiasbiz-u5-bud-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A growing business has strong profits but negative cash flow.",
          parts: [
            { label: "a", prompt: "Explain why this happens.", marks: 4 },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow management",
                statement: "Timing gap.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Credit sales — profit booked, cash delayed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Growth needs cash — stock, staff, premises before revenue arrives.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Improve credit control — chase late payments.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Short-term finance — overdraft, factoring.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) timing+growth (b) credit control+finance",
            commonErrors: ["Profit=cash.", "No solutions."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u5-finance",
      title: "Sources of Finance",
      skill: "Evaluate internal and external sources of business finance.",
      lesson: {
        sections: [
          {
            heading: "Internal sources",
            body: "**Retained profit**: reinvest profits — no interest, no dilution. **Owner's capital**: personal funds — risk own money. **Sale of assets**: sell unused equipment/property — one-off cash. **Working capital management**: faster debtor collection, slower creditor payment.\n\n**Advantages**: no interest, no loss of control. **Disadvantages**: limited funds, opportunity cost.",
          },
          {
            heading: "External sources",
            body: "**Bank loans/overdrafts**: repayable + interest — bank decides. **Share capital**: sell shares — dilute ownership, no repayment. **Leasing/hire purchase**: spread asset costs. **Trade credit**: buy now pay later from suppliers. **Crowdfunding**: raise small amounts from many people online.\n\n**Evaluation**: match source to need — long-term assets need long-term finance; short-term needs use short-term sources.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Startup needs £50k for equipment. Which sources?",
          solution: "Bank loan, leasing, or equity investment.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-fin-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is retained profit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bank loan" },
              { id: "b", text: "Supplier credit" },
              { id: "c", text: "Share issue" },
              { id: "d", text: "Profits reinvested in business" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retained profit",
                statement: "Reinvested earnings.",
              },
            ],
            steps: [
              {
                reasoning: "Retained = profits kept in business.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Reinvested earnings",
            commonErrors: ["Loan confused."],
          },
        },
        {
          id: "eiasbiz-u5-fin-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of internal finance over external finance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal finance",
                statement: "No cost, no dilution.",
              },
            ],
            steps: [
              {
                reasoning: "No interest payments — free source.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No loss of control — no new shareholders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Quick to access — profits already available.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "No interest, no dilution, fast.",
            commonErrors: ["External better.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u5-fin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business must match finance source to purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Finance matching",
                statement: "Term matching.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Long-term assets need long-term finance — property loans.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short-term needs use short-term finance — overdraft for stock.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Mismatched terms → repayment before asset pays back.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: buying machinery with 1-month overdraft fails.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Match term to asset life — avoid mismatch.",
            commonErrors: ["Any source.", "No reason."],
          },
        },
        {
          id: "eiasbiz-u5-fin-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A growing SME needs £200k for new machinery.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two internal and two external sources.",
              marks: 4,
            },
            { label: "b", prompt: "Recommend one and justify.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Finance choice",
                statement: "Long-term asset = long-term finance.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Internal: retained profit, asset sale.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) External: bank loan, share issue, leasing.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Bank loan or leasing — long-term finance matches asset life.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Leasing preserves cash flow; loan builds ownership.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 2+2 sources (b) loan/leasing justified",
            commonErrors: ["Overdraft.", "No justification."],
          },
        },
      ],
    },
  ],
};

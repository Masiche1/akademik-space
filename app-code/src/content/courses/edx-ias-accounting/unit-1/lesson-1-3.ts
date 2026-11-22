import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eiasacct-u1-lesson-1-3",
  code: "1-3",
  title: "Financial Statements",
  goal: "I CAN explain income statement and balance sheet.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 1 — Introduction to Accounting",
  ],
  vocabulary: [
    {
      term: "Income statement",
      definition: "Shows revenue, expenses, profit for period.",
    },
    {
      term: "Balance sheet",
      definition: "Shows assets, liabilities, equity at a point in time.",
    },
    { term: "Revenue", definition: "Income from sales — top line." },
    { term: "Gross profit", definition: "Revenue - cost of sales." },
    { term: "Net profit", definition: "Gross profit - all expenses." },
    {
      term: "Retained earnings",
      definition: "Accumulated profits kept in business.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u1-income",
      title: "Income Statement",
      skill: "Understand income statement structure and calculation.",
      lesson: {
        sections: [
          {
            heading: "Income statement structure",
            body: "**Revenue**: total sales. **Cost of sales**: direct costs — purchases, direct labour. **Gross profit**: revenue - cost of sales. **Expenses**: indirect costs — rent, wages, utilities. **Net profit**: gross profit - expenses.\n\n**Example**: Revenue £50,000, Cost of sales £30,000 → Gross profit £20,000. Expenses £8,000 → Net profit £12,000.",
          },
          {
            heading: "Profit types",
            body: "**Gross profit**: sales margin — covers expenses + profit. **Operating profit**: before interest/tax. **Net profit**: after all costs — bottom line. **Profit before tax**: operating profit - interest.\n\n**Analysis**: gross margin = gross profit/revenue; net margin = net profit/revenue.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue - Cost of sales" },
          { name: "Net profit", statement: "Gross profit - Expenses" },
          { name: "Gross margin", statement: "Gross profit / Revenue × 100" },
        ],
        workedExample: {
          problem:
            "Revenue £40,000, COS £25,000, expenses £10,000. Net profit?",
          solution: "Gross £15,000 - £10,000 = £5,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-inc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does income statement show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equity only" },
              { id: "b", text: "Assets and liabilities" },
              { id: "c", text: "Cash only" },
              { id: "d", text: "Revenue, expenses, profit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Income statement",
                statement: "Revenue+expenses+profit.",
              },
            ],
            steps: [
              {
                reasoning: "IS = revenue, expenses, profit.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Revenue+expenses+profit",
            commonErrors: ["Balance sheet confused."],
          },
        },
        {
          id: "eiasacct-u1-inc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate: Revenue £60,000, COS £35,000, expenses £15,000.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit calculation",
                statement: "GP=Rev-COS, NP=GP-Exp.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = 60,000 - 35,000 = £25,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net profit = 25,000 - 15,000 = £10,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Check: GP > expenses → profitable.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "GP £25,000, NP £10,000.",
            commonErrors: ["Wrong formula.", "No net profit."],
          },
        },
        {
          id: "eiasacct-u1-inc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain gross vs net profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Gross vs net",
                statement: "Before vs after expenses.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = revenue - direct costs only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net profit = gross profit - all expenses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Gross shows sales efficiency; net shows overall profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net is what owner actually earns.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "GP=direct costs, NP=all expenses.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u1-inc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business revenue increased but profit decreased.",
          parts: [
            { label: "a", prompt: "Possible reasons.", marks: 4 },
            { label: "b", prompt: "What to investigate.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit analysis",
                statement: "Costs vs revenue.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Cost of sales increased — margins squeezed.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Expenses increased — overheads up.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Revenue mix changed — lower margin products.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) One-off costs — unusual expenses.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Check cost of sales — supplier prices.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Review expenses — cut unnecessary costs.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) COS+expenses+mix+one-off (b) investigate costs",
            commonErrors: ["No reasons.", "No investigation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-balance",
      title: "Balance Sheet",
      skill: "Understand balance sheet structure and equation.",
      lesson: {
        sections: [
          {
            heading: "Balance sheet structure",
            body: "**Assets**: non-current (equipment, property) + current (cash, inventory, receivables). **Liabilities**: non-current (loans) + current (payables, overdraft). **Equity**: capital + retained earnings - drawings.\n\n**Equation**: Assets = Liabilities + Equity — always balances at any point in time.",
          },
          {
            heading: "Current vs non-current",
            body: "**Current assets**: convert to cash within 1 year — inventory, receivables, cash. **Non-current assets**: long-term — equipment, property, vehicles. **Current liabilities**: due within 1 year — payables, short-term loans. **Non-current liabilities**: long-term — mortgages, long-term loans.\n\n**Liquidity**: current ratio = current assets/current liabilities — ability to pay short-term debts.",
          },
        ],
        keyFormulas: [
          { name: "Balance sheet", statement: "Assets = Liabilities + Equity" },
          {
            name: "Current ratio",
            statement: "Current assets / Current liabilities",
          },
        ],
        workedExample: {
          problem:
            "Equipment £10,000, cash £5,000, payables £3,000, capital £12,000. Balance?",
          solution:
            "Assets £15,000 = Liabilities £3,000 + Equity £12,000. Balanced.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-bs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does balance sheet show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit for period" },
              {
                id: "b",
                text: "Assets, liabilities, equity at a point in time",
              },
              { id: "c", text: "Revenue only" },
              { id: "d", text: "Cash only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balance sheet",
                statement: "Point in time.",
              },
            ],
            steps: [
              { reasoning: "BS = point in time.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Point in time",
            commonErrors: ["Income statement confused."],
          },
        },
        {
          id: "eiasacct-u1-bs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two current assets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Current assets",
                statement: "Convert within 1 year.",
              },
            ],
            steps: [
              { reasoning: "Cash — money in bank.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Inventory — stock for sale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Receivables — money owed by customers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cash, inventory, receivables.",
            commonErrors: ["Only one.", "Non-current confused."],
          },
        },
        {
          id: "eiasacct-u1-bs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain current ratio and its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current ratio",
                statement: "Liquidity measure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current ratio = current assets / current liabilities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ratio > 1 = can pay short-term debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ratio < 1 = liquidity problems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Too high = inefficient — too much cash tied up.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Liquidity measure — >1 good.",
            commonErrors: ["Wrong formula.", "No meaning."],
          },
        },
        {
          id: "eiasacct-u1-bs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Balance sheet: Assets £50,000, Liabilities £20,000, Equity £30,000.",
          parts: [
            { label: "a", prompt: "Does it balance?", marks: 4 },
            {
              label: "b",
              prompt: "Calculate current ratio if CA £25,000, CL £10,000.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Balance + ratio",
                statement: "Check+calculate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 50,000 = 20,000 + 30,000 — balanced.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Equation holds — correct.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Current ratio = 25,000 / 10,000 = 2.5.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Ratio 2.5 — good liquidity, can pay debts.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) balanced (b) 2.5 — good",
            commonErrors: ["Unbalanced.", "Wrong ratio."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-cashflow",
      title: "Cash Flow Statement",
      skill: "Understand cash flow statement and its importance.",
      lesson: {
        sections: [
          {
            heading: "Cash flow statement",
            body: "**Purpose**: show cash movement — operating, investing, financing. **Operating**: day-to-day — sales receipts, payments. **Investing**: long-term — buying/selling assets. **Financing**: loans, capital, dividends.\n\n**Net cash flow**: total inflows - outflows — positive = cash increased.",
          },
          {
            heading: "Profit vs cash",
            body: "**Profit ≠ cash**: profit is accounting measure, cash is actual money. **Timing differences**: credit sales (profit now, cash later), depreciation (expense but no cash out).\n\n**Importance**: business can be profitable but fail if no cash — liquidity critical.",
          },
        ],
        keyFormulas: [
          { name: "Net cash flow", statement: "Inflows - Outflows" },
        ],
        workedExample: {
          problem: "Business profitable but can't pay bills. Issue?",
          solution: "Cash flow problem — profit ≠ cash.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-cf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does cash flow statement show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assets only" },
              { id: "b", text: "Cash movement — in and out" },
              { id: "c", text: "Liabilities only" },
              { id: "d", text: "Profit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow",
                statement: "Cash movement.",
              },
            ],
            steps: [
              { reasoning: "CF = cash in/out.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Cash movement",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u1-cf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two cash flow categories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow categories",
                statement: "Operating, investing, financing.",
              },
            ],
            steps: [
              {
                reasoning: "Operating — day-to-day activities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investing — buying/selling assets.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Financing — loans, capital, dividends.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Operating, investing, financing.",
            commonErrors: ["Only one.", "Wrong category."],
          },
        },
        {
          id: "eiasacct-u1-cf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why profitable business can fail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit vs cash",
                statement: "Timing differences.",
              },
            ],
            steps: [
              {
                reasoning: "Profit ≠ cash — accounting vs actual money.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Credit sales — profit recorded, cash not yet received.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Timing — must pay bills before customers pay.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Liquidity crisis — can't pay debts despite profit.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Profit≠cash — timing differences.",
            commonErrors: ["Always profitable.", "No timing."],
          },
        },
        {
          id: "eiasacct-u1-cf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business has £10,000 profit but £15,000 cash outflow.",
          parts: [
            { label: "a", prompt: "Possible reasons.", marks: 4 },
            { label: "b", prompt: "What to do?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow analysis",
                statement: "Profit vs cash.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Credit sales — customers haven't paid yet.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Asset purchases — equipment, inventory.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Loan repayments — financing costs.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Timing — expenses before revenue.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Improve credit control — collect faster.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Negotiate terms — delay payments, speed receipts.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) credit+assets+loans+timing (b) credit control",
            commonErrors: ["No reasons.", "No action."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-summary2",
      title: "Financial Statements Summary",
      skill: "Summarise financial statements.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Income statement**: revenue - expenses = profit (period). **Balance sheet**: assets = liabilities + equity (point in time). **Cash flow**: cash in/out — operating, investing, financing.\n\n**Key differences**: income statement shows performance over time; balance sheet shows position at a point; cash flow shows actual cash movement.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: calculate profits, prepare statements, interpret ratios. **Evaluate**: statement usefulness, limitations, user needs. **Analyse**: profit vs cash, liquidity, performance.\n\n**Key concepts**: gross/net profit, current ratio, cash flow categories, accruals vs cash.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue - COS" },
          { name: "Net profit", statement: "GP - Expenses" },
          { name: "Current ratio", statement: "CA / CL" },
        ],
        workedExample: {
          problem: "All three statements together show?",
          solution: "Complete financial picture.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of income statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show equity" },
              { id: "b", text: "Show cash" },
              { id: "c", text: "Show assets" },
              { id: "d", text: "Show profit for period" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Income statement",
                statement: "Profit.",
              },
            ],
            steps: [{ reasoning: "IS = profit.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(d)** Profit",
            commonErrors: ["Balance sheet confused."],
          },
        },
        {
          id: "eiasacct-u1-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between income statement and balance sheet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "IS vs BS",
                statement: "Period vs point.",
              },
            ],
            steps: [
              {
                reasoning: "Time: IS=period, BS=point in time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Content: IS=profit, BS=position.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Purpose: IS=performance, BS=financial position.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Period vs point, profit vs position.",
            commonErrors: ["Same.", "One difference."],
          },
        },
        {
          id: "eiasacct-u1-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why all three statements are needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complete picture",
                statement: "All three needed.",
              },
            ],
            steps: [
              {
                reasoning: "Income statement — profitability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balance sheet — financial position.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cash flow — liquidity, cash movement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Together — complete picture for decisions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Profit+position+cash = complete.",
            commonErrors: ["One enough.", "No reason."],
          },
        },
        {
          id: "eiasacct-u1-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate usefulness of financial statements.",
          parts: [
            { label: "a", prompt: "Identify benefits.", marks: 4 },
            { label: "b", prompt: "Identify limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statement evaluation",
                statement: "Benefits+limitations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Decision-making — inform stakeholders.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Accountability — show performance.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Comparison — benchmark over time/peers.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Compliance — meet legal requirements.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Historical — past data, not future.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Simplified — may not show detail.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) decisions+accountability+comparison+compliance (b) historical+simplified",
            commonErrors: ["Only benefits.", "Only limitations."],
          },
        },
      ],
    },
  ],
};

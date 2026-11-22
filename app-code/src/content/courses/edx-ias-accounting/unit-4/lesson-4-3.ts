import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eiasacct-u4-lesson-4-3",
  code: "4-3",
  title: "Cash Flow and Interpretation",
  goal: "I CAN prepare and interpret cash flow statements.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 4 — Partnerships in Depth"],
  vocabulary: [
    {
      term: "Cash flow statement",
      definition: "Shows cash movements over period.",
    },
    {
      term: "Operating activities",
      definition: "Cash from main business operations.",
    },
    {
      term: "Investing activities",
      definition: "Cash from buying/selling assets.",
    },
    { term: "Financing activities", definition: "Cash from owners/borrowers." },
    { term: "Net cash flow", definition: "Total cash increase/decrease." },
    {
      term: "Working capital",
      definition: "Current assets - current liabilities.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u4-cashflow",
      title: "Cash Flow Statement",
      skill: "Prepare cash flow statement.",
      lesson: {
        sections: [
          {
            heading: "Three sections",
            body: "**Operating**: cash from trading — profit adjusted for non-cash items, working capital changes. **Investing**: cash from buying/selling non-current assets. **Financing**: cash from owners (capital, dividends) and lenders (loans).\n\n**Total**: net cash flow = operating + investing + financing.",
          },
          {
            heading: "Operating activities",
            body: "**Start**: profit before tax. **Adjust**: add depreciation, deduct non-cash items. **Working capital**: inventory increase = cash outflow; receivables increase = outflow; payables increase = inflow.\n\n**Example**: Profit £50k, depreciation £10k, inventory up £5k → operating cash = 50k + 10k - 5k = £55k.",
          },
        ],
        keyFormulas: [
          {
            name: "Net cash flow",
            statement: "Operating + Investing + Financing",
          },
          {
            name: "Operating cash",
            statement: "PBT + depreciation - working capital increase",
          },
        ],
        workedExample: {
          problem:
            "PBT £40k, depreciation £8k, inventory up £4k, receivables up £2k, payables up £3k. Operating cash?",
          solution: "40k + 8k - 4k - 2k + 3k = £45k.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-cf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a cash flow statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit report" },
              { id: "b", text: "Tax return" },
              { id: "c", text: "Cash movements report" },
              { id: "d", text: "Balance sheet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow",
                statement: "Cash movements.",
              },
            ],
            steps: [
              { reasoning: "CF = cash movements.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Cash movements",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u4-cf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three cash flow sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow sections",
                statement: "Operating+investing+financing.",
              },
            ],
            steps: [
              {
                reasoning: "Operating — main business.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investing — asset purchases/sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Financing — capital/loans.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Operating, investing, financing.",
            commonErrors: ["Only one.", "Wrong section."],
          },
        },
        {
          id: "eiasacct-u4-cf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why depreciation is added back.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation add-back",
                statement: "Non-cash expense.",
              },
            ],
            steps: [
              {
                reasoning: "Depreciation is non-cash expense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Profit includes depreciation — reduces profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But no cash paid — add back.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows true cash generation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Non-cash expense+add back.",
            commonErrors: ["Don't add.", "Wrong reason."],
          },
        },
        {
          id: "eiasacct-u4-cf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "PBT £60k, depreciation £12k, inventory up £6k, receivables up £4k, payables up £5k.",
          parts: [
            { label: "a", prompt: "Calculate operating cash flow.", marks: 4 },
            {
              label: "b",
              prompt: "Explain working capital effects.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Operating cash",
                statement: "PBT+dep-WC.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 60k + 12k - 6k - 4k + 5k = £67k.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check calculation.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Inventory up = cash outflow; receivables up = outflow.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Payables up = cash inflow.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £67k (b) WC effects explained",
            commonErrors: ["Wrong calculation.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-interpret",
      title: "Interpreting Financial Statements",
      skill: "Interpret financial statements holistically.",
      lesson: {
        sections: [
          {
            heading: "Three statements",
            body: "**Income statement**: profitability — revenue, expenses, profit. **Balance sheet**: position — assets, liabilities, equity. **Cash flow**: liquidity — cash movements, survival.\n\n**Together**: complete picture — profitable but illiquid = risk; liquid but unprofitable = decline.",
          },
          {
            heading: "Key relationships",
            body: "**Profit vs cash**: profit ≠ cash — depreciation, working capital. **Assets vs equity**: assets funded by liabilities + equity. **Growth vs liquidity**: growth needs cash — balance needed.\n\n**Judgement**: statements inform, don't decide — use with context.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "High profit, negative cash flow. Interpretation?",
          solution: "Profitable but cash-strapped — risky.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-int-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three financial statements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "IS, BS, Tax" },
              { id: "b", text: "IS, CF, Tax" },
              { id: "c", text: "IS, BS, CF" },
              { id: "d", text: "BS, CF, Tax" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Three statements",
                statement: "IS+BS+CF.",
              },
            ],
            steps: [{ reasoning: "IS+BS+CF.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(c)** IS, BS, CF",
            commonErrors: ["Tax confused."],
          },
        },
        {
          id: "eiasacct-u4-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two key relationships.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Key relationships",
                statement: "Profit vs cash.",
              },
            ],
            steps: [
              {
                reasoning: "Profit ≠ cash — depreciation, WC.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Assets = liabilities + equity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Growth needs cash — balance needed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Profit vs cash, assets vs equity, growth vs liquidity.",
            commonErrors: ["Only one.", "Wrong relationship."],
          },
        },
        {
          id: "eiasacct-u4-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why profit and cash differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit vs cash",
                statement: "Timing+non-cash.",
              },
            ],
            steps: [
              {
                reasoning: "Profit is accrual — includes non-cash items.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Depreciation — expense but no cash.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Working capital — inventory/receivables affect cash.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cash is actual — what business has.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accrual+non-cash+WC.",
            commonErrors: ["Same.", "No reason."],
          },
        },
        {
          id: "eiasacct-u4-int-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business: profit £100k, cash flow -£20k, current ratio 0.8.",
          parts: [
            { label: "a", prompt: "Interpret the situation.", marks: 4 },
            { label: "b", prompt: "What to investigate?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretation",
                statement: "Balance factors.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profitable but cash-negative — risky.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Current ratio <1 — liquidity problems.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Working capital — inventory/receivables too high.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Debtors/creditors — collection/payment terms.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) risky+liquidity (b) WC+terms",
            commonErrors: ["Good overall.", "No investigation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-summary3",
      title: "Cash Flow and Interpretation Summary",
      skill: "Summarise cash flow and interpretation.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Cash flow**: operating + investing + financing — actual cash movements. **Operating**: PBT + depreciation - WC changes. **Interpretation**: three statements together — profit, position, liquidity. **Key**: profit ≠ cash — both matter.\n\n**Key idea**: cash flow shows survival; profit shows performance — need both.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: calculate operating cash flow, interpret statements. **Evaluate**: liquidity vs profitability, cash management. **Analyse**: trends, risks, recommendations.\n\n**Key concepts**: cash flow sections, working capital, profit vs cash, holistic interpretation.",
          },
        ],
        keyFormulas: [
          {
            name: "Net cash flow",
            statement: "Operating + Investing + Financing",
          },
          {
            name: "Operating cash",
            statement: "PBT + depreciation - WC increase",
          },
        ],
        workedExample: {
          problem: "All interpretation complete. Result?",
          solution: "Complete financial picture.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-sum3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does cash flow statement show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax" },
              { id: "b", text: "Assets" },
              { id: "c", text: "Profit" },
              { id: "d", text: "Cash movements" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow",
                statement: "Cash movements.",
              },
            ],
            steps: [
              { reasoning: "CF = cash movements.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Cash movements",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u4-sum3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two cash flow sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow sections",
                statement: "Operating+investing.",
              },
            ],
            steps: [
              {
                reasoning: "Operating — main business.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investing — asset purchases/sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Financing — capital/loans.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Operating, investing, financing.",
            commonErrors: ["Only one.", "Wrong section."],
          },
        },
        {
          id: "eiasacct-u4-sum3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why all three statements matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Three statements",
                statement: "Complete picture.",
              },
            ],
            steps: [
              {
                reasoning: "Income statement — profitability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balance sheet — position/solvency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cash flow — liquidity/survival.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Together — complete picture.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Profit+position+liquidity=complete.",
            commonErrors: ["One enough.", "No reason."],
          },
        },
        {
          id: "eiasacct-u4-sum3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate financial performance.",
          parts: [
            { label: "a", prompt: "What to analyse?", marks: 4 },
            { label: "b", prompt: "How to interpret?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance evaluation",
                statement: "Holistic view.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profitability — margins, ROCE.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Liquidity — current/acid test.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Cash flow — operating/investing/financing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Growth — trends over time.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Compare to benchmarks — industry/previous.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Consider context — size, industry, stage.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) profitability+liquidity+CF+growth (b) benchmark+context",
            commonErrors: ["One metric.", "No context."],
          },
        },
      ],
    },
  ],
};

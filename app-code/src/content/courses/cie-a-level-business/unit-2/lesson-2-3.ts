import type { Lesson } from "../../../types.ts";

export const lesson383: Lesson = {
  id: "ciealbus-u2-lesson-2-3",
  code: "2-3",
  title: "Finance and Accounting",
  goal: "I CAN explain financial statements, ratios and financial decisions.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: finance"],

  vocabulary: [
    {
      term: "Profit and loss account",
      definition: "Statement showing revenue, costs, profit.",
    },
    {
      term: "Balance sheet",
      definition: "Statement showing assets, liabilities, equity.",
    },
    { term: "Gross profit", definition: "Revenue minus cost of sales." },
    {
      term: "Net profit",
      definition: "Profit after all expenses including tax.",
    },
    {
      term: "Liquidity ratio",
      definition: "Ability to meet short-term debts.",
    },
    {
      term: "Profitability ratio",
      definition: "Return on sales/assets/equity.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s3-fin",
      title: "Finance and accounting",
      skill: "Analyse financial statements and ratios.",
      lesson: {
        sections: [
          {
            heading: "Financial statements",
            body: "Profit & loss: revenue → gross profit → operating profit → net profit. Balance sheet: assets = liabilities + equity. Cash flow: inflows vs outflows.",
          },
          {
            heading: "Financial ratios",
            body: "Liquidity: current ratio (current assets/current liabilities), acid test. Profitability: gross margin, net margin, ROCE. Gearing: debt vs equity.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "revenue - cost of sales" },
          { name: "Net profit", statement: "after all expenses" },
          { name: "Current ratio", statement: "current assets/liabilities" },
        ],
        workedExample: {
          problem:
            "A business has current assets £50,000 and current liabilities £25,000. Calculate current ratio.",
          solution:
            "Current ratio = £50,000/£25,000 = 2:1. Indicates good short-term liquidity.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is gross profit?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cash inflow",
              },
              {
                id: "b",
                text: "Revenue minus cost of sales",
              },
              {
                id: "c",
                text: "Assets minus liabilities",
              },
              {
                id: "d",
                text: "Revenue minus all expenses",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gross profit",
                statement: "Revenue - cost of sales.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = revenue - cost of sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Revenue - cost of sales",
          },
        },
        {
          id: "ciealbus-u2-fin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the current ratio?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current ratio",
                statement: "Liquidity measure.",
              },
            ],
            steps: [
              {
                reasoning: "Current assets / current liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measures short-term liquidity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Current assets/liabilities",
          },
        },
        {
          id: "ciealbus-u2-fin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between gross and net profit?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gross vs net",
                statement: "Profit levels.",
              },
            ],
            steps: [
              {
                reasoning: "Gross = revenue - cost of sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net = after all expenses including tax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net is final profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gross vs net profit",
          },
        },
        {
          id: "ciealbus-u2-fin-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define gross profit, net profit, balance sheet, liquidity ratio, profitability ratio, current ratio. (b) What is gross profit? (c) What is net profit? (d) What is current ratio? (e) How calculate current ratio? (f) What does low current ratio indicate? (g) What are financial statements? (h) Evaluate importance of financial analysis for business decisions.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Finance",
                statement: "Statements, ratios.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Revenue - cost of sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) After all expenses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Liquidity measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Current assets/liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Poor short-term liquidity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) P&L, balance sheet, cash flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Informs decisions, identifies problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Finance and accounting.",
          },
        },
        {
          id: "ciealbus-u2-fin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which financial statement shows assets, liabilities and equity at a point in time?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sales ledger",
              },
              {
                id: "b",
                text: "Cash flow statement",
              },
              {
                id: "c",
                text: "Balance sheet",
              },
              {
                id: "d",
                text: "Profit and loss account",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balance sheet",
                statement: "Assets = liabilities + equity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The balance sheet lists assets, liabilities and equity at a specific date; the others are flow statements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Balance sheet",
          },
        },
        {
          id: "ciealbus-u2-fin-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A business has revenue of $200,000, cost of sales of $140,000, other expenses of $35,000 and tax of $6,000. (a) Calculate gross profit. (b) Calculate net profit.",
          parts: [
            { label: "a", prompt: "Gross profit", marks: 1 },
            { label: "b", prompt: "Net profit", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60000, unit: "$" },
              { label: "b", answer: 19000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit calculation",
                statement:
                  "Gross = revenue - cost of sales; net = after all expenses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Gross profit = 200000 - 140000 = 60000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Net profit = 60000 - 35000 - 6000 = 19000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $60000; b = $19000",
          },
        },
        {
          id: "ciealbus-u2-fin-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the current ratio measure, and what does a ratio below 1 indicate?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current ratio",
                statement: "Liquidity measure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It measures short-term liquidity — current assets divided by current liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Below 1 means current liabilities exceed current assets, signalling possible difficulty paying short-term debts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Short-term liquidity; below 1 signals possible insolvency risk",
          },
        },
        {
          id: "ciealbus-u2-fin-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A firm has current assets of £40,000 and current liabilities of £50,000. Its current ratio is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "2 : 1",
              },
              {
                id: "b",
                text: "0.8 : 1",
              },
              {
                id: "c",
                text: "5 : 1",
              },
              {
                id: "d",
                text: "1.25 : 1",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Current ratio",
                statement: "Current assets / current liabilities.",
              },
            ],
            steps: [
              {
                reasoning: "40000 / 50000 = 0.8, so the ratio is 0.8 : 1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** 0.8 : 1",
          },
        },
        {
          id: "ciealbus-u2-fin-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business has revenue of $500,000, cost of sales of $300,000, expenses of $120,000 and tax of $20,000. (a) Calculate gross profit. (b) Calculate net profit. (c) Calculate the net profit margin as a percentage of revenue.",
          parts: [
            { label: "a", prompt: "Gross profit", marks: 1 },
            { label: "b", prompt: "Net profit", marks: 1 },
            { label: "c", prompt: "Net profit margin (%)", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200000, unit: "$" },
              { label: "b", answer: 60000, unit: "$" },
              { label: "c", answer: 12, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profitability ratios",
                statement: "Net margin = net profit / revenue × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Gross profit = 500000 - 300000 = 200000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Net profit = 200000 - 120000 - 20000 = 60000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Net margin = 60000 / 500000 × 100 = 12%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $200000; b = $60000; c = 12%",
          },
        },
        {
          id: "ciealbus-u2-fin-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways in which a high level of gearing might affect a business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Gearing",
                statement: "Debt versus equity risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High gearing means more debt than equity, so interest payments can be a heavy fixed burden, especially if profits fall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It raises financial risk — debt repayments must continue even in bad times, increasing the chance of insolvency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lenders and shareholders may see the firm as riskier, demanding higher returns or restricting further borrowing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Higher interest burden and greater financial risk",
          },
        },
        {
          id: "ciealbus-u2-fin-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which ratio is most useful for assessing a firm's ability to meet its short-term debts?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Gearing ratio",
              },
              {
                id: "b",
                text: "Return on capital employed",
              },
              {
                id: "c",
                text: "Current ratio",
              },
              {
                id: "d",
                text: "Net profit margin",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Liquidity ratios",
                statement:
                  "Current and acid test ratios measure short-term solvency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The current ratio compares current assets with current liabilities, directly indicating short-term liquidity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Current ratio",
          },
        },
        {
          id: "ciealbus-u2-fin-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A firm has revenue of $800,000, cost of sales of $480,000 and net profit of $64,000. (a) Calculate the net profit margin. (b) Calculate the gross profit margin. (c) State whether the gross margin exceeds the net margin, answering 1 for yes and 0 for no.",
          parts: [
            { label: "a", prompt: "Net profit margin (%)", marks: 1 },
            { label: "b", prompt: "Gross profit margin (%)", marks: 1 },
            {
              label: "c",
              prompt: "Does gross margin exceed net margin? (1 = yes, 0 = no)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 40, unit: "%" },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profitability ratios",
                statement: "Margins = profit / revenue × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Net margin = 64000 / 800000 × 100 = 8%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Gross profit = 800000 - 480000 = 320000; gross margin = 320000 / 800000 × 100 = 40%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "40% > 8%, so gross margin exceeds net margin — answer 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The gap shows operating expenses consume a large share of gross profit before tax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = 8%; b = 40%; c = 1",
          },
        },
        {
          id: "ciealbus-u2-fin-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Net profit is the profit remaining after deducting:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "only depreciation",
              },
              {
                id: "b",
                text: "only the cost of sales",
              },
              {
                id: "c",
                text: "only interest payments",
              },
              {
                id: "d",
                text: "all expenses, including tax",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Net profit",
                statement: "After all expenses including tax.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net profit deducts every expense — cost of sales, operating expenses, interest and tax.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** all expenses, including tax",
          },
        },
        {
          id: "ciealbus-u2-fin-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm's current assets are $75,000 and current liabilities are $50,000. Its inventory is $20,000. (a) Calculate the current ratio. (b) Calculate the acid test (quick) ratio.",
          parts: [
            { label: "a", prompt: "Current ratio", marks: 1 },
            { label: "b", prompt: "Acid test ratio", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, unit: ":1" },
              { label: "b", answer: 1.1, unit: ":1" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Liquidity ratios",
                statement: "Acid test excludes inventory from current assets.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Current ratio = 75000 / 50000 = 1.5 : 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Acid test = (75000 - 20000) / 50000 = 55000 / 50000 = 1.1 : 1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = 1.5 : 1; b = 1.1 : 1",
          },
        },
        {
          id: "ciealbus-u2-fin-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A firm's profits are rising, but its current ratio has fallen below 1. The most likely immediate concern is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "excessive gearing",
              },
              {
                id: "b",
                text: "falling consumer demand",
              },
              {
                id: "c",
                text: "inability to pay short-term debts",
              },
              {
                id: "d",
                text: "loss of market share",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Liquidity risk",
                statement:
                  "Current ratio below 1 threatens short-term solvency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A current ratio below 1 means current liabilities exceed current assets, so the firm may struggle to pay short-term debts even while profitable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** inability to pay short-term debts",
          },
        },
        {
          id: "ciealbus-u2-fin-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain two possible reasons why a firm's net profit margin might fall while revenue rises. (b) Distinguish between gross margin and net margin. (c) Identify two ratios a manager could use to investigate the problem. (d) Evaluate whether rising revenue necessarily indicates improved business performance.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Margin analysis",
                statement:
                  "Falling margins signal rising costs relative to revenue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Costs or expenses are rising faster than revenue — e.g. higher input prices, wages or rent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(a) Sales mix or pricing may be weaker — discounting, lower-margin products, or one-off charges.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Gross margin = gross profit / revenue; net margin = net profit / revenue after all expenses including tax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Any two valid ratios, e.g. gross margin, operating expense ratio, ROCE or net margin trend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Rising revenue alone is insufficient — profits, margins, cost control and sustainability matter more to performance.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: revenue growth is positive but must be weighed against profitability and competitiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Revenue growth without margin control can mask deteriorating performance",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-fin-notes",
      title: "Finance — notes",
      summary:
        "P&L: revenue→gross→net profit. Balance sheet: assets=liabilities+equity. Ratios measure performance.",
      sections: [
        {
          heading: "Key idea",
          body: "Financial statements and ratios inform business decisions.",
        },
        {
          heading: "Ratios",
          body: "Liquidity (current ratio), profitability (margins), gearing (debt/equity).",
        },
      ],
    },
  ],
};

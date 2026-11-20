import type { Lesson } from "../../../types.ts";

export const lesson383: Lesson = {
  id: "ciealbus-u2-lesson-2-3",
  code: "2-3",
  title: "Finance and Accounting",
  goal: "I CAN explain financial statements, ratios and financial decisions.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: finance"],
  
  vocabulary: [
    { term: "Profit and loss account", definition: "Statement showing revenue, costs, profit." },
    { term: "Balance sheet", definition: "Statement showing assets, liabilities, equity." },
    { term: "Gross profit", definition: "Revenue minus cost of sales." },
    { term: "Net profit", definition: "Profit after all expenses including tax." },
    { term: "Liquidity ratio", definition: "Ability to meet short-term debts." },
    { term: "Profitability ratio", definition: "Return on sales/assets/equity." },
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
          problem: "A business has current assets £50,000 and current liabilities £25,000. Calculate current ratio.",
          solution: "Current ratio = £50,000/£25,000 = 2:1. Indicates good short-term liquidity.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is gross profit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Revenue minus cost of sales"
                    },
                    {
                              "id": "b",
                              "text": "Revenue minus all expenses"
                    },
                    {
                              "id": "c",
                              "text": "Assets minus liabilities"
                    },
                    {
                              "id": "d",
                              "text": "Cash inflow"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gross profit",
                              "statement": "Revenue - cost of sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross profit = revenue - cost of sales.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Revenue - cost of sales"
},
        },
        {
          id: "ciealbus-u2-fin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the current ratio?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Current ratio",
                              "statement": "Liquidity measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Current assets / current liabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Measures short-term liquidity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Current assets/liabilities"
},
        },
        {
          id: "ciealbus-u2-fin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between gross and net profit?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gross vs net",
                              "statement": "Profit levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross = revenue - cost of sales.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net = after all expenses including tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net is final profit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Gross vs net profit"
},
        },
        {
          id: "ciealbus-u2-fin-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define gross profit, net profit, balance sheet, liquidity ratio, profitability ratio, current ratio. (b) What is gross profit? (c) What is net profit? (d) What is current ratio? (e) How calculate current ratio? (f) What does low current ratio indicate? (g) What are financial statements? (h) Evaluate importance of financial analysis for business decisions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Finance",
                              "statement": "Statements, ratios."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Revenue - cost of sales.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) After all expenses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Liquidity measure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Current assets/liabilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Poor short-term liquidity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) P&L, balance sheet, cash flow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Informs decisions, identifies problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Finance and accounting."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-fin-notes",
      title: "Finance — notes",
      summary: "P&L: revenue→gross→net profit. Balance sheet: assets=liabilities+equity. Ratios measure performance.",
      sections: [
        { heading: "Key idea", body: "Financial statements and ratios inform business decisions." },
        { heading: "Ratios", body: "Liquidity (current ratio), profitability (margins), gearing (debt/equity)." },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ebz10-u7-lesson-7-3",
  code: "7-3",
  title: "Financial Statements and Ratios",
  goal: "I CAN read financial statements and calculate key profitability and liquidity ratios.",
  standards: ["Edexcel IGCSE Business 4BS0 — Financial Information and Decisions"],
  
  vocabulary: [
    { term: "Income statement", definition: "Statement showing revenue, costs and profit over a period." },
    { term: "Balance sheet", definition: "Statement of assets, liabilities and capital at a point in time." },
    { term: "Gross profit margin", definition: "Gross profit as a percentage of revenue." },
    { term: "Net profit margin", definition: "Net profit as a percentage of revenue." },
    { term: "Current ratio", definition: "Current assets divided by current liabilities." },
    { term: "Liquidity", definition: "Ability to meet short-term debts." },
  ],
  concepts: [
    {
      id: "ebz10-u7-statements",
      title: "Financial Statements",
      skill: "Interpret the income statement and balance sheet.",
      lesson: {
        sections: [
          {
            heading: "Income statement",
            body: "Shows performance over a period: **revenue** at the top, then **cost of sales** giving **gross profit**, then other expenses giving **net profit**. It answers: how much did we sell, what did it cost, and did we make a profit?",
          },
          {
            heading: "Balance sheet",
            body: "Shows position at one moment: **assets** (what the business owns — cash, stock, equipment, money owed by customers), **liabilities** (what it owes — loans, money owed to suppliers) and **capital** (owner's stake = assets - liabilities). A healthy balance sheet has assets comfortably exceeding liabilities.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue - cost of sales" },
          { name: "Net profit", statement: "Gross profit - all other expenses" },
          { name: "Capital", statement: "Assets - liabilities" },
        ],
        workedExample: {
          problem: "Revenue £100 000, cost of sales £60 000, other expenses £25 000. Find gross and net profit.",
          solution: "Gross profit = £100 000 - £60 000 = £40 000. Net profit = £40 000 - £25 000 = £15 000.",
        },
      },
      questions: [
        {
          id: "ebz10-u7-fs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an income statement show?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Revenue, costs and profit over a period"
                    },
                    {
                              "id": "b",
                              "text": "Assets and liabilities at one date"
                    },
                    {
                              "id": "c",
                              "text": "Cash received and paid each day"
                    },
                    {
                              "id": "d",
                              "text": "Staff salaries only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Income statement",
                              "statement": "Revenue, costs and profit over a period."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It covers a time period, unlike the balance sheet.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Revenue, costs, profit over a period"
},
        },
        {
          id: "ebz10-u7-fs-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A business has assets of £80 000 and liabilities of £45 000. Calculate capital.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Capital",
                              "statement": "Assets - liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capital = assets - liabilities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "= £80 000 - £45 000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "= £35 000.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "£35 000"
},
        },
        {
          id: "ebz10-u7-fs-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between the income statement and the balance sheet.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Income statement vs balance sheet",
                              "statement": "Flow over time vs position at a date."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Income statement covers a period — revenue, costs, profit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Balance sheet is a snapshot at one date — assets, liabilities, capital.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Income statement shows performance; balance sheet shows financial position.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both are needed: profit alone does not show liquidity or debt levels.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Flow vs snapshot — performance vs position."
},
        },
        {
          id: "ebz10-u7-fs-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An income statement shows: revenue £250 000, cost of sales £150 000, other expenses £70 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate gross profit and net profit.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "A balance sheet lists cash £12 000, stock £25 000, equipment £60 000, debtors £18 000, creditors £20 000, loan £40 000. Calculate capital.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Statements",
                              "statement": "Gross = revenue - cost of sales; capital = assets - liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Gross profit = £250 000 - £150 000 = £100 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Net profit = £100 000 - £70 000 = £30 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Assets = £12 000 + £25 000 + £60 000 + £18 000 = £115 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Liabilities = £20 000 + £40 000 = £60 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Capital = £115 000 - £60 000 = £55 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Gross £100 000, net £30 000; capital £55 000."
},
        },
        {
          id: "ebz10-u7-fs-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two businesses each have revenue of £200 000. Business A: cost of sales £120 000, other expenses £50 000. Business B: cost of sales £140 000, other expenses £35 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate net profit for each business.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what the difference in gross profit suggests about each business.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Profit comparison",
                              "statement": "Compare gross and net profit between firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A: gross = £80 000, net = £30 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) B: gross = £60 000, net = £25 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Both figures for both businesses correct.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) A has higher gross profit — better buying prices or pricing power.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) B has lower other expenses — leaner overheads.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A's trading margin is stronger; B controls overheads better.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "A: net £30 000 (gross £80 000); B: net £25 000 (gross £60 000); A stronger trading margin."
},
        },
        {
          id: "ebz10-u7-fs-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A retailer's income statement: revenue £500 000, cost of sales £320 000, rent £60 000, wages £70 000, other expenses £30 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate gross profit and net profit.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Its balance sheet shows current assets £90 000 and current liabilities £55 000. Calculate the current ratio.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the retailer's financial position using your answers.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Statement analysis",
                              "statement": "Profitability and liquidity together give the picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Gross profit = £500 000 - £320 000 = £180 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Other expenses total = £60 000 + £70 000 + £30 000 = £160 000.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Net profit = £180 000 - £160 000 = £20 000.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Current ratio = £90 000 / £55 000 = 1.64 : 1.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Ratio stated correctly.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Profitable (£20 000 net) but thin margin; liquidity ratio above 1 suggests short-term debts are covered.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Evaluation: modest profit relative to revenue; monitor whether current assets are mostly cash/stock vs debtors.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Gross £180 000, net £20 000, current ratio 1.64:1 — profitable and liquid, but thin net margin."
},
        },
      ],
    },
    {
      id: "ebz10-u7-ratios",
      title: "Profitability and Liquidity Ratios",
      skill: "Calculate and interpret gross margin, net margin and current ratio.",
      lesson: {
        sections: [
          {
            heading: "Profitability ratios",
            body: "Ratios compare figures so businesses of different sizes can be compared and trends tracked. **Gross profit margin** = (gross profit / revenue) x 100 — measures trading efficiency. **Net profit margin** = (net profit / revenue) x 100 — measures overall profitability. Rising margins mean improving performance; falling margins warn of pricing or cost problems.",
          },
          {
            heading: "Liquidity ratios",
            body: "**Current ratio** = current assets / current liabilities. Above 1 means short-term assets exceed short-term debts; below 1 signals liquidity risk. **Acid test** excludes stock from current assets — a stricter check. Ratios must be compared over time and with competitors, not judged alone.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "(Gross profit / revenue) x 100" },
          { name: "Net margin", statement: "(Net profit / revenue) x 100" },
          { name: "Current ratio", statement: "Current assets / current liabilities" },
          { name: "Acid test", statement: "(Current assets - stock) / current liabilities" },
        ],
        workedExample: {
          problem: "Revenue £200 000, gross profit £80 000, net profit £25 000. Calculate both margins.",
          solution: "Gross margin = (£80 000 / £200 000) x 100 = 40%. Net margin = (£25 000 / £200 000) x 100 = 12.5%.",
        },
      },
      questions: [
        {
          id: "ebz10-u7-ratio-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a current ratio of 1.5 : 1 tell a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Short-term assets are 1.5 times short-term liabilities"
                    },
                    {
                              "id": "b",
                              "text": "The business made 1.5% profit"
                    },
                    {
                              "id": "c",
                              "text": "Sales grew by 50%"
                    },
                    {
                              "id": "d",
                              "text": "The business is insolvent"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Current ratio",
                              "statement": "Current assets / current liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1.5 means assets exceed liabilities by 50% — liquidity looks adequate.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Assets = 1.5x liabilities"
},
        },
        {
          id: "ebz10-u7-ratio-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Revenue £100 000, gross profit £35 000. Calculate the gross profit margin.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gross margin",
                              "statement": "(Gross profit / revenue) x 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Margin = gross profit / revenue x 100.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "= £35 000 / £100 000 x 100.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "= 35%.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "35%"
},
        },
        {
          id: "ebz10-u7-ratio-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business would calculate ratios rather than just looking at profit figures.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ratio analysis",
                              "statement": "Standardised comparison over time and vs competitors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ratios standardise figures so businesses of different sizes compare.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They reveal trends — is performance improving or declining?",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benchmarking against competitors shows relative position.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Profit alone hides efficiency — margins show how well costs are controlled.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Ratios enable comparison over time, across sizes and against rivals."
},
        },
        {
          id: "ebz10-u7-ratio-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Business X: revenue £400 000, gross profit £120 000, net profit £32 000. Current assets £100 000, current liabilities £80 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate gross margin, net margin and current ratio.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Interpret what these figures suggest about the business.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ratio calculation",
                              "statement": "Margins as % of revenue; current ratio assets/liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Gross margin = £120 000 / £400 000 x 100 = 30%.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Net margin = £32 000 / £400 000 x 100 = 8%; current ratio = £100 000 / £80 000 = 1.25.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reasonable trading margin; net margin is thin — overheads absorb much gross profit.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Current ratio above 1 — short-term debts covered, though not by a wide margin.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Gross 30%, net 8%, current 1.25 — profitable and liquid but thin net margin."
},
        },
        {
          id: "ebz10-u7-ratio-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Business Y's gross margin fell from 40% to 30% over two years while revenue grew 10%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two possible causes of the falling margin.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how management should respond and what ratios would help monitor the situation.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Margin decline",
                              "statement": "Price cuts, cost rises or product mix shifts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Selling prices cut to gain market share, or input costs rose.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Shift to lower-margin products or heavier discounting.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Inefficiency or wastage in production raising cost of sales.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Renegotiate supplier prices, review pricing, cut waste; track gross margin quarterly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Also monitor net margin and current ratio for overall health.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Revenue growth with falling margin may still be worthwhile if volume compensates — judge net profit.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) price cuts, cost rises, mix shift, inefficiency (b) control costs, monitor margins and net profit."
},
        },
        {
          id: "ebz10-u7-ratio-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two firms compete in the same market. Firm P: revenue £1 000 000, gross profit £300 000, net profit £90 000, current assets £250 000, current liabilities £200 000. Firm Q: revenue £800 000, gross profit £160 000, net profit £56 000, current assets £120 000, current liabilities £150 000.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate gross margin, net margin and current ratio for each firm.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Compare the firms' profitability.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which firm is in the stronger financial position overall.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative ratio analysis",
                              "statement": "Ratios allow fair comparison across different-sized firms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) P: gross 30%, net 9%, current 1.25.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Q: gross 20%, net 7%, current 0.8.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) P is more profitable on every margin — better pricing or cost control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Q's lower margins suggest weaker trading position.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) P stronger overall: higher margins AND current ratio above 1.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Q's current ratio below 1 signals liquidity risk — may struggle to pay short-term debts.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "P: 30%/9%/1.25; Q: 20%/7%/0.8 — P stronger on profitability and liquidity; Q faces liquidity risk."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u7-fin3-notes",
      title: "Statements and ratios — notes",
      summary: "Income statement = performance over time; balance sheet = position at a date. Ratios standardise comparison.",
      sections: [
        { heading: "Statements", body: "Gross profit = revenue - cost of sales; net profit deducts all expenses. Capital = assets - liabilities." },
        { heading: "Margins", body: "Gross margin and net margin = profit as % of revenue — compare over time and vs rivals." },
        { heading: "Liquidity", body: "Current ratio = current assets / current liabilities; below 1 warns of cash problems." },
      ],
    },
  ],
};

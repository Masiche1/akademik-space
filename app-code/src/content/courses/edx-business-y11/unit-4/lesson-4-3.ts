import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ebz11-u4-lesson-4-3",
  code: "4-3",
  title: "Cash Flow and Break-Even",
  goal: "I CAN analyse cash flow and break-even analysis.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance"],
  vocabulary: [
    {
      term: "Cash flow",
      definition: "Movement of cash in and out of a business.",
    },
    {
      term: "Break-even point",
      definition: "Level of sales where total revenue = total cost.",
    },
    {
      term: "Fixed costs",
      definition: "Costs that don't change with output — rent, salaries.",
    },
    {
      term: "Variable costs",
      definition: "Costs that change with output — materials, labour.",
    },
    {
      term: "Contribution",
      definition: "Selling price minus variable cost per unit.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u4-cashflow",
      title: "Cash Flow Management",
      skill: "Understand cash flow and its importance.",
      lesson: {
        sections: [
          {
            heading: "Cash flow vs profit",
            body: "**Profit** = revenue − costs (accounting measure). **Cash flow** = actual money in/out (cash measure). A business can be profitable but run out of cash — e.g., customers haven't paid yet, or stock bought but not sold.\n\n**Cash flow forecast**: predicts cash in/out over time — shows when cash might run short. **Positive cash flow**: more money in than out. **Negative**: more out than in — need to act.",
          },
          {
            heading: "Managing cash flow",
            body: "**Speed up inflows**: offer discounts for early payment, chase debtors, take deposits. **Slow down outflows**: negotiate longer payment terms with suppliers, delay non-essential spending. **Reserve**: keep cash buffer for emergencies.\n\n**Cash flow problems**: common cause of business failure — even profitable businesses fail if they can't pay bills on time.",
          },
        ],
        keyFormulas: [
          { name: "Cash flow", statement: "Cash in − cash out." },
          {
            name: "Net cash flow",
            statement: "Total inflows − total outflows.",
          },
        ],
        workedExample: {
          problem:
            "Business has £10,000 profit but customers owe £20,000 and it must pay £15,000 bills this month. Problem?",
          solution:
            "Negative cash flow — profit on paper but no cash to pay bills.",
        },
      },
      questions: [
        {
          id: "ebz11-u4-cashflow-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cash flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bank balance only" },
              { id: "b", text: "Profit over a year" },
              { id: "c", text: "Money coming in and out of business" },
              { id: "d", text: "Total revenue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow",
                statement: "Money in and out of business.",
              },
            ],
            steps: [
              {
                reasoning: "Cash flow = money movement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Money in/out",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "ebz11-u4-cashflow-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a business can be profitable but still fail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow vs profit",
                statement: "Profit ≠ cash — timing matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers haven't paid yet — revenue on paper only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bills due now but cash not received.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can't pay suppliers/staff → business fails.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Profit on paper but no cash for bills — timing problem.",
            commonErrors: ["Profit = cash assumed.", "No timing link."],
          },
        },
        {
          id: "ebz11-u4-cashflow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Suggest three ways a business can improve its cash flow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow improvement",
                statement: "Speed inflows, delay outflows.",
              },
            ],
            steps: [
              {
                reasoning: "Offer early payment discounts to customers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Chase overdue debtors faster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Negotiate longer payment terms with suppliers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduce unnecessary expenses.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Early payment discounts, chase debtors, negotiate terms.",
            commonErrors: ["Only one method.", "No inflow/outflow link."],
          },
        },
        {
          id: "ebz11-u4-cashflow-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business has a cash flow forecast showing negative cash in month 3.",
          parts: [
            {
              label: "a",
              prompt: "Explain what negative cash flow means.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two actions to prevent this.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why forecasting cash flow is important.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow forecasting",
                statement: "Predict problems before they happen.",
              },
            ],
            steps: [
              {
                reasoning: "(a) More money out than in — can't pay bills.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Risk of insolvency/failure.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Speed up customer payments / delay supplier payments.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Arrange overdraft/loan as buffer.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) See problems coming — act before crisis.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) can't pay bills (b) speed payments/buffer (c) predict problems early",
            commonErrors: ["No meaning.", "No action."],
          },
        },
      ],
    },
    {
      id: "ebz11-u4-breakeven",
      title: "Break-Even Analysis",
      skill: "Calculate break-even point and interpret results.",
      lesson: {
        sections: [
          {
            heading: "Break-even concept",
            body: "**Break-even point** = sales level where total revenue = total costs — no profit, no loss. Below = loss; above = profit.\n\n**Fixed costs**: don't change with output — rent, insurance, salaried staff. **Variable costs**: change with output — materials, hourly labour, packaging. **Contribution** = selling price − variable cost per unit — amount each unit contributes to fixed costs.",
          },
          {
            heading: "Calculations",
            body: "**Break-even units** = fixed costs ÷ contribution per unit. **Break-even revenue** = break-even units × selling price.\n\n**Margin of safety** = (actual sales − break-even sales) ÷ actual sales × 100 — how much sales can fall before loss. **Example**: fixed costs £10,000, price £50, variable cost £30 → contribution £20 → BEP = 10,000/20 = 500 units.",
          },
        ],
        keyFormulas: [
          {
            name: "Contribution",
            statement: "Selling price − variable cost per unit.",
          },
          { name: "BEP (units)", statement: "Fixed costs ÷ contribution." },
        ],
        workedExample: {
          problem: "FC £5,000, price £20, VC £12. BEP?",
          solution: "Contribution = £8. BEP = 5,000/8 = 625 units.",
        },
      },
      questions: [
        {
          id: "ebz11-u4-breakeven-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the break-even point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum profit" },
              { id: "b", text: "Total costs" },
              { id: "c", text: "Minimum sales" },
              { id: "d", text: "Sales where revenue = costs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Break-even",
                statement: "Revenue = total costs — no profit/loss.",
              },
            ],
            steps: [
              {
                reasoning: "BEP = revenue equals costs.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Revenue = costs",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "ebz11-u4-breakeven-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Price £30, variable cost £18. What is contribution per unit?",
          response: {
            type: "numeric",
            parts: [{ label: "Contribution (£)", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Contribution",
                statement: "Price − variable cost = £30−£18 = £12.",
              },
            ],
            steps: [{ reasoning: "£30 − £18 = £12.", marks: 3, markCode: "M" }],
            finalAnswer: "£12",
            commonErrors: ["Added instead of subtracted."],
          },
        },
        {
          id: "ebz11-u4-breakeven-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Fixed costs £8,000, contribution £16. Calculate break-even units and revenue at £40 price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BEP",
                statement:
                  "BEP units = FC/contribution; revenue = units × price.",
              },
            ],
            steps: [
              {
                reasoning: "BEP = 8,000/16 = 500 units.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Revenue = 500 × £40 = £20,000.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "500 units, £20,000 revenue",
            commonErrors: ["Wrong formula.", "No revenue."],
          },
        },
        {
          id: "ebz11-u4-breakeven-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business sells at £25/unit, variable cost £15, fixed costs £20,000.",
          parts: [
            {
              label: "a",
              prompt: "Calculate contribution and break-even units.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "If it sells 3,000 units, calculate profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BEP and profit",
                statement: "Profit = (units × contribution) − fixed costs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Contribution = £25−£15 = £10.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) BEP = 20,000/10 = 2,000 units.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct units.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Total contribution = 3,000 × £10 = £30,000.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Profit = £30,000 − £20,000 = £10,000.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "(a) £10 contrib, 2,000 BEP (b) £10,000 profit",
            commonErrors: ["Wrong formula.", "No profit calc."],
          },
        },
      ],
    },
  ],
};

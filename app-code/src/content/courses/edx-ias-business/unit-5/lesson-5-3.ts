import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "eiasbiz-u5-lesson-5-3",
  code: "5-3",
  title: "Investment Appraisal and Financial Planning",
  goal: "I CAN evaluate investment decisions and explain financial planning.",
  standards: ["Edexcel IAS Business WBP01 Unit 5 — Finance Management"],
  vocabulary: [
    {
      term: "Payback period",
      definition: "Time taken for investment to repay initial cost.",
    },
    {
      term: "ROI",
      definition: "Return on investment — profit as % of investment.",
    },
    {
      term: "NPV",
      definition:
        "Net present value — discounted future cash flows minus cost.",
    },
    {
      term: "Financial plan",
      definition: "Long-term financial strategy and projections.",
    },
    {
      term: "Working capital",
      definition: "Day-to-day funds — stock, debtors, creditors.",
    },
    {
      term: "Cash budget",
      definition: "Month-by-month cash inflow/outflow forecast.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u5-appraisal",
      title: "Investment Appraisal",
      skill: "Evaluate projects using payback, ROI and NPV.",
      lesson: {
        sections: [
          {
            heading: "Appraisal methods",
            body: "**Payback**: how long to recover investment — shorter = better, simple but ignores post-payback returns. **ROI**: (profit ÷ investment) × 100 — annual return percentage. **NPV**: sum of discounted future cash flows − investment — positive NPV = worthwhile (accounts for time value of money).\n\n**Time value**: £100 today worth more than £100 next year — discount rate reflects this.",
          },
          {
            heading: "Choosing method",
            body: "Payback = quick liquidity check. ROI = simple profitability. NPV = most accurate — considers timing and all cash flows. Businesses often combine methods.\n\n**Example**: Machine £50k, returns £15k/year → payback 3.3 years, ROI 30%.",
          },
        ],
        keyFormulas: [
          { name: "Payback", statement: "Investment ÷ annual cash flow." },
          { name: "ROI", statement: "(Annual profit ÷ investment) × 100." },
        ],
        workedExample: {
          problem: "Investment £100k, returns £25k/year. Payback?",
          solution: "100 ÷ 25 = 4 years.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-app-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is payback period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discount rate" },
              { id: "b", text: "Total profit" },
              { id: "c", text: "Annual return %" },
              { id: "d", text: "Time to recover initial investment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Payback",
                statement: "Recovery time.",
              },
            ],
            steps: [
              {
                reasoning: "Payback = time to recoup cost.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Recovery time",
            commonErrors: ["ROI confused."],
          },
        },
        {
          id: "eiasbiz-u5-app-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Investment £80k, annual returns £20k. Payback and ROI?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Payback + ROI",
                statement: "Recovery metrics.",
              },
            ],
            steps: [
              {
                reasoning: "Payback = 80 ÷ 20 = 4 years.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "ROI = (20 ÷ 80) × 100 = 25%.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both simple but ignore post-payback returns.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "4 years, 25% ROI.",
            commonErrors: ["Wrong formula.", "No limitation."],
          },
        },
        {
          id: "eiasbiz-u5-app-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why NPV is more accurate than payback for investment decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NPV advantage",
                statement: "Time value of money.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discounts future cash flows — accounts for time value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Considers ALL cash flows — not just payback period.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Positive NPV = project adds value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Payback ignores returns after recovery — could miss best project.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "NPV = discounted all flows; payback ignores tail.",
            commonErrors: ["Payback better.", "No reason."],
          },
        },
        {
          id: "eiasbiz-u5-app-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two projects: A costs £50k returns £15k/yr; B costs £80k returns £25k/yr.",
          parts: [
            { label: "a", prompt: "Calculate payback for each.", marks: 4 },
            {
              label: "b",
              prompt: "Recommend a project and justify.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Project appraisal",
                statement: "Compare metrics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) A: 50 ÷ 15 = 3.3 years; B: 80 ÷ 25 = 3.2 years.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Similar payback — need deeper analysis.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) B gives higher absolute returns (£25k vs £15k).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) But A has better capital efficiency — depends on available funds and NPV.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) A=3.3 B=3.2 (b) B higher returns, NPV decides",
            commonErrors: ["Payback only.", "No justification."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u5-planning",
      title: "Financial Planning",
      skill: "Explain financial planning, working capital and cash budgets.",
      lesson: {
        sections: [
          {
            heading: "Financial planning",
            body: "**Financial plan**: long-term strategy — projected income, costs, investment needs, funding sources. **Cash budget**: monthly inflow/outflow forecast — identifies shortfalls before they happen.\n\n**Working capital** = Current assets − Current liabilities — funds day-to-day operations. Positive working capital needed to pay bills before revenue arrives.",
          },
          {
            heading: "Managing cash",
            body: "**Cash flow forecast**: predict timing of receipts/payments — monthly or weekly. **Credit control**: invoice promptly, chase late payments, offer early payment discounts. **Negotiation**: extend supplier payment terms, shorter customer terms.\n\n**Warning signs**: rising debtors, shrinking cash balance, over-reliance on overdraft.",
          },
        ],
        keyFormulas: [
          {
            name: "Working capital",
            statement: "Current assets − current liabilities.",
          },
        ],
        workedExample: {
          problem:
            "Current assets £50k, current liabilities £35k. Working capital?",
          solution: "£15k — healthy buffer.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u5-plan-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is working capital?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total assets" },
              { id: "b", text: "Owner's equity" },
              { id: "c", text: "Current assets minus current liabilities" },
              { id: "d", text: "Annual profit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Working capital",
                statement: "CA − CL.",
              },
            ],
            steps: [
              {
                reasoning: "Working capital = day-to-day funds.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** CA − CL",
            commonErrors: ["Total assets confused."],
          },
        },
        {
          id: "eiasbiz-u5-plan-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of cash flow forecasting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash forecasting",
                statement: "Predict + prevent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies cash shortfalls before they happen — time to arrange finance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Helps plan spending — avoid commitments you can't fund.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Shows seasonal patterns — prepare for peaks/troughs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Predict shortfalls, plan spending, seasonal prep.",
            commonErrors: ["Profit confused.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u5-plan-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why negative working capital is dangerous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Working capital",
                statement: "Liquidity buffer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current liabilities exceed current assets — can't pay short-term debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Risk of insolvency — suppliers demand payment, no cash.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Forced borrowing at high cost — overdraft reliance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Even profitable businesses fail from liquidity crisis.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Can't pay short-term debts → insolvency risk.",
            commonErrors: ["Always bad.", "No mechanism."],
          },
        },
        {
          id: "eiasbiz-u5-plan-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business forecasts a cash shortfall in month 4.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two ways to improve cash flow.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain why forecasting matters even for profitable firms.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash management",
                statement: "Timing is critical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Speed up debtor collection — earlier customer payments.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Negotiate later supplier payments — extend credit terms.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Profit ≠ cash — credit sales delay receipts.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Forecast warns early — time to arrange finance before crisis.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) debtors+suppliers (b) profit≠cash",
            commonErrors: ["No solutions.", "Ignore forecast."],
          },
        },
      ],
    },
  ],
};

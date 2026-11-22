import type { Lesson } from "../../../types.ts";

export const lesson256: Lesson = {
  id: "cieibs-u1-lesson-1-6",
  code: "1-6",
  title: "Cash Flow and Cash Flow Forecasts",
  goal: "I CAN explain cash flow and interpret cash flow forecasts.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: cash flow"],

  vocabulary: [
    {
      term: "Cash flow",
      definition: "Movement of money in and out of business.",
    },
    { term: "Cash inflow", definition: "Money coming into business." },
    { term: "Cash outflow", definition: "Money going out of business." },
    {
      term: "Cash flow forecast",
      definition: "Prediction of future cash movements.",
    },
    {
      term: "Cash flow problem",
      definition: "Insufficient cash despite profit.",
    },
    {
      term: "Liquidity",
      definition: "Ability to meet short-term financial obligations.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u1-s6-cash",
      title: "Cash flow",
      skill: "Understand cash flow management.",
      lesson: {
        sections: [
          {
            heading: "Cash flow basics",
            body: "Cash inflow: sales receipts, loans, investments. Cash outflow: purchases, wages, rent, taxes. Net cash flow = inflows - outflows. Positive = surplus; negative = deficit.",
          },
          {
            heading: "Cash flow problems",
            body: "Profitable businesses can still fail if cash flow negative — customers pay late, inventory ties up cash. Solutions: credit control, inventory management, overdrafts, loans.",
          },
        ],
        keyFormulas: [
          { name: "Net cash flow", statement: "inflows - outflows" },
          { name: "Liquidity", statement: "short-term cash availability" },
        ],
        workedExample: {
          problem:
            "A business has $10,000 sales but $12,000 costs. Is it profitable? Explain cash flow implications.",
          solution:
            "If costs exceed revenue, it's loss-making. But even profitable businesses can have cash flow problems if customers pay late or inventory ties up cash.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-cf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cash flow?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Total profit",
              },
              {
                id: "b",
                text: "A marketing strategy",
              },
              {
                id: "c",
                text: "A type of tax",
              },
              {
                id: "d",
                text: "Movement of money in and out of business",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow",
                statement: "Money movement.",
              },
            ],
            steps: [
              {
                reasoning: "Cash flow = money in/out of business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Money movement",
          },
        },
        {
          id: "cieibs-u1-cf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a cash flow forecast?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow forecast",
                statement: "Future cash prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Prediction of future cash movements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps plan for cash needs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Future cash prediction",
          },
        },
        {
          id: "cieibs-u1-cf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can a profitable business have cash flow problems?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cash flow problems",
                statement: "Profit vs cash.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers pay late — revenue recognised but cash not received.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inventory ties up cash — bought but not sold.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Timing mismatch between income and expenses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Timing/cash vs profit mismatch",
          },
        },
        {
          id: "cieibs-u1-cf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cash flow, cash inflow, cash outflow, cash flow forecast, cash flow problem, liquidity. (b) What is cash flow? (c) What is a cash flow forecast? (d) Give 3 cash inflows. (e) Give 3 cash outflows. (f) What is net cash flow? (g) Why can profitable businesses fail? (h) How would you manage cash flow for a seasonal business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cash flow",
                statement: "Management, forecasting.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Money movement in/out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Future cash prediction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Three valid inflows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Three valid outflows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Inflows - outflows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Late payments, inventory, timing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid seasonal cash management.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cash flow management.",
          },
        },
        {
          id: "cieibs-u1-cf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a cash inflow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Payment of rent" },
              { id: "b", text: "Purchase of raw materials" },
              { id: "c", text: "Receipts from sales" },
              { id: "d", text: "Wages paid to staff" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash inflow",
                statement:
                  "Money coming into the business, e.g. sales receipts.",
              },
            ],
            steps: [
              {
                reasoning: "Sales receipts bring money into the business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Receipts from sales",
          },
        },
        {
          id: "cieibs-u1-cf-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Inflows of $12,000 and outflows of $9,500 — calculate net cash flow. (b) In a later month, inflows of $12,000 and outflows of $15,000 — calculate net cash flow.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2500, unit: "$" },
              { label: "b", answer: -3000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net cash flow",
                statement: "Net cash flow = inflows - outflows.",
              },
            ],
            steps: [
              {
                reasoning: "Net = 12000 - 9500 = $2,500 surplus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net = 12000 - 15000 = -$3,000 deficit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $2,500, b) -$3,000",
          },
        },
        {
          id: "cieibs-u1-cf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which situation most likely causes a cash flow problem even for a profitable business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing prices" },
              { id: "b", text: "Rising sales revenue" },
              { id: "c", text: "Customers paying invoices late" },
              { id: "d", text: "Cutting fixed costs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow problem",
                statement:
                  "Insufficient cash despite profit — often from late payments or tied-up inventory.",
              },
            ],
            steps: [
              {
                reasoning: "Late payment delays inflows, creating a deficit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Customers paying invoices late",
          },
        },
        {
          id: "cieibs-u1-cf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by liquidity and why it matters to a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity",
                statement: "Ability to meet short-term financial obligations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Liquidity means having enough cash to pay bills and debts as they fall due.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Poor liquidity can force a business to close even if it is profitable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Liquidity = ability to meet short-term obligations",
          },
        },
        {
          id: "cieibs-u1-cf-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A business starts January with $2,000 cash. January: inflows $8,000, outflows $9,000. February: inflows $10,000, outflows $8,500. (a) Calculate January's net cash flow. (b) Calculate February's net cash flow. (c) Calculate the closing cash balance at end of February.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -1000, unit: "$" },
              { label: "b", answer: 1500, unit: "$" },
              { label: "c", answer: 2500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cash flow forecast",
                statement: "Track monthly net flows and running balance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "January net = 8000 - 9000 = -$1,000; balance = 2000 - 1000 = $1,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "February net = 10000 - 8500 = $1,500; balance = 1000 + 1500 = $2,500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing balance = $2,500.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) -$1,000, b) $1,500, c) $2,500",
          },
        },
        {
          id: "cieibs-u1-cf-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a cash flow forecast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To hire new staff" },
              { id: "b", text: "To predict future cash inflows and outflows" },
              { id: "c", text: "To calculate annual profit" },
              { id: "d", text: "To set the selling price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow forecast",
                statement: "Prediction of future cash movements.",
              },
            ],
            steps: [
              {
                reasoning: "Forecasts anticipate timing of cash in and out.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Predict future cash movements",
          },
        },
        {
          id: "cieibs-u1-cf-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ways a business can solve a cash flow problem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cash flow management",
                statement:
                  "Credit control, inventory management, overdrafts, loans.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improve credit control — chase late-paying customers faster.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use an overdraft or loan, or reduce inventory tied up in cash.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Credit control; overdraft/loan or inventory management",
          },
        },
        {
          id: "cieibs-u1-cf-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business forecasts monthly inflows of $9,000 and outflows of $11,000. (a) Calculate the monthly net cash flow. (b) If it holds $5,000 opening cash, after how many months will the balance first go negative (round up)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -2000, unit: "$" },
              { label: "b", answer: 3, unit: "months" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cash forecasting",
                statement: "Running balance must stay positive.",
              },
            ],
            steps: [
              {
                reasoning: "Net = 9000 - 11000 = -$2,000 per month.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "5000 / 2000 = 2.5, so balance goes negative in month 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) -$2,000, b) 3 months",
          },
        },
        {
          id: "cieibs-u1-cf-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A negative net cash flow means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit is rising" },
              { id: "b", text: "The business is expanding" },
              { id: "c", text: "Sales are increasing" },
              { id: "d", text: "Cash outflows exceed cash inflows" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative cash flow",
                statement: "Outflows exceed inflows — a deficit.",
              },
            ],
            steps: [
              {
                reasoning: "More cash leaves than enters in the period.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Outflows exceed inflows",
          },
        },
        {
          id: "cieibs-u1-cf-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish between profit and cash flow, and explain how a business can be profitable yet short of cash.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Profit vs cash flow",
                statement: "Accrual profit vs actual cash movements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit = revenue minus costs over a period; cash flow = actual money in and out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sales on credit count as profit but cash arrives later.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inventory purchases and timing differences can drain cash despite profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Profit is earned; cash is received — timing differences cause shortfalls",
          },
        },
        {
          id: "cieibs-u1-cf-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A forecast shows quarter 1: inflows $30,000, outflows $36,000; quarter 2: inflows $45,000, outflows $38,000; opening balance $10,000. (a) Calculate Q1 net cash flow. (b) Calculate Q2 net cash flow. (c) Calculate the balance at end of quarter 2.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -6000, unit: "$" },
              { label: "b", answer: 7000, unit: "$" },
              { label: "c", answer: 11000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cash flow forecast",
                statement: "Net = inflows - outflows; track running balance.",
              },
            ],
            steps: [
              {
                reasoning: "Q1 net = 30000 - 36000 = -$6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Q2 net = 45000 - 38000 = $7,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balance = 10000 - 6000 + 7000 = $11,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) -$6,000, b) $7,000, c) $11,000",
          },
        },
        {
          id: "cieibs-u1-cf-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define cash flow, cash inflow, cash outflow, cash flow forecast, liquidity. (b) What is a cash inflow? Give two examples. (c) What is a cash outflow? Give two examples. (d) Calculate net cash flow when inflows are $15,000 and outflows are $18,000. (e) Explain why a profitable business can have negative cash flow. (f) Give two causes of cash flow problems. (g) Give two solutions. (h) Explain why cash flow forecasts are useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cash flow",
                statement: "Flows, forecast, liquidity, management.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All five definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Money coming in; e.g. sales receipts, loans.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Money going out; e.g. wages, purchases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Net = 15000 - 18000 = -$3,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Credit sales and payment timing — profit earned but cash not yet received.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Late payments, inventory build-up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Credit control, overdraft/loan.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Anticipates deficits and allows planning — reasoned answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cash flow concepts, calculation and management.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-cf-notes",
      title: "Cash flow — notes",
      summary:
        "Cash flow=money in/out; forecast=predict future; profitable≠cash positive. Manage timing and inventory.",
      sections: [
        {
          heading: "Key idea",
          body: "Cash flow problems kill businesses even when profitable.",
        },
        {
          heading: "Management",
          body: "Credit control, inventory management, overdrafts, loans.",
        },
      ],
    },
  ],
};

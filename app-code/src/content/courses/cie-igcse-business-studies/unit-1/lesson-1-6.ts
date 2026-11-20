import type { Lesson } from "../../../types.ts";

export const lesson256: Lesson = {
  id: "cieibs-u1-lesson-1-6",
  code: "1-6",
  title: "Cash Flow and Cash Flow Forecasts",
  goal: "I CAN explain cash flow and interpret cash flow forecasts.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: cash flow"],
  
  vocabulary: [
    { term: "Cash flow", definition: "Movement of money in and out of business." },
    { term: "Cash inflow", definition: "Money coming into business." },
    { term: "Cash outflow", definition: "Money going out of business." },
    { term: "Cash flow forecast", definition: "Prediction of future cash movements." },
    { term: "Cash flow problem", definition: "Insufficient cash despite profit." },
    { term: "Liquidity", definition: "Ability to meet short-term financial obligations." },
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
          problem: "A business has $10,000 sales but $12,000 costs. Is it profitable? Explain cash flow implications.",
          solution: "If costs exceed revenue, it's loss-making. But even profitable businesses can have cash flow problems if customers pay late or inventory ties up cash.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-cf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cash flow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement of money in and out of business"
                    },
                    {
                              "id": "b",
                              "text": "Total profit"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "A marketing strategy"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cash flow",
                              "statement": "Money movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cash flow = money in/out of business.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Money movement"
},
        },
        {
          id: "cieibs-u1-cf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a cash flow forecast?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cash flow forecast",
                              "statement": "Future cash prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Prediction of future cash movements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Helps plan for cash needs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Future cash prediction"
},
        },
        {
          id: "cieibs-u1-cf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can a profitable business have cash flow problems?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cash flow problems",
                              "statement": "Profit vs cash."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Customers pay late — revenue recognised but cash not received.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inventory ties up cash — bought but not sold.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Timing mismatch between income and expenses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Timing/cash vs profit mismatch"
},
        },
        {
          id: "cieibs-u1-cf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cash flow, cash inflow, cash outflow, cash flow forecast, cash flow problem, liquidity. (b) What is cash flow? (c) What is a cash flow forecast? (d) Give 3 cash inflows. (e) Give 3 cash outflows. (f) What is net cash flow? (g) Why can profitable businesses fail? (h) How would you manage cash flow for a seasonal business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cash flow",
                              "statement": "Management, forecasting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Money movement in/out.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Future cash prediction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three valid inflows.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid outflows.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Inflows - outflows.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Late payments, inventory, timing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid seasonal cash management.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cash flow management."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-cf-notes",
      title: "Cash flow — notes",
      summary: "Cash flow=money in/out; forecast=predict future; profitable≠cash positive. Manage timing and inventory.",
      sections: [
        { heading: "Key idea", body: "Cash flow problems kill businesses even when profitable." },
        { heading: "Management", body: "Credit control, inventory management, overdrafts, loans." },
      ],
    },
  ],
};

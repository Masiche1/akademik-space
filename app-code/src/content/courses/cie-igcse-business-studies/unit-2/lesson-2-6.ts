import type { Lesson } from "../../../types.ts";

export const lesson266: Lesson = {
  id: "cieibs-u2-lesson-2-6",
  code: "2-6",
  title: "Business Failure and Decline",
  goal: "I CAN identify causes of business failure and strategies for turnaround.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: business failure",
  ],

  vocabulary: [
    { term: "Business failure", definition: "Business ceasing operations." },
    { term: "Insolvency", definition: "Inability to pay debts." },
    { term: "Liquidation", definition: "Closing business and selling assets." },
    {
      term: "Administration",
      definition: "Protection from creditors while restructuring.",
    },
    { term: "Turnaround", definition: "Actions to rescue failing business." },
    { term: "Failure rate", definition: "Proportion of businesses that fail." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s6-fail",
      title: "Business failure",
      skill: "Understand causes and responses to failure.",
      lesson: {
        sections: [
          {
            heading: "Causes of failure",
            body: "Internal: poor management, inadequate capital, bad products, cash flow problems. External: competition, economic downturn, changing consumer preferences, regulation changes. Most failures in first 5 years.",
          },
          {
            heading: "Failure responses",
            body: "Liquidation: close and sell assets. Administration: protect while restructuring. Turnaround: cost cutting, new management, product changes. Prevention: planning, cash flow management, market research.",
          },
        ],
        keyFormulas: [
          { name: "Insolvency", statement: "can't pay debts" },
          { name: "Liquidation", statement: "close and sell assets" },
          { name: "Turnaround", statement: "rescue failing business" },
        ],
        workedExample: {
          problem:
            "A restaurant fails after 2 years. What are likely causes and what could have prevented it?",
          solution:
            "Causes: poor location, insufficient capital, competition, cash flow. Prevention: market research, better planning, adequate funding.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is business failure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Business growing",
              },
              {
                id: "b",
                text: "Business ceasing operations",
              },
              {
                id: "c",
                text: "Business expanding",
              },
              {
                id: "d",
                text: "Business merging",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business failure",
                statement: "Ceasing operations.",
              },
            ],
            steps: [
              {
                reasoning: "Failure = business stops operating.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ceasing operations",
          },
        },
        {
          id: "cieibs-u2-fl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is insolvency?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insolvency",
                statement: "Can't pay debts.",
              },
            ],
            steps: [
              {
                reasoning: "Inability to pay debts as they fall due.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Often leads to failure/liquidation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Can't pay debts",
          },
        },
        {
          id: "cieibs-u2-fl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are internal causes of business failure?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Failure causes",
                statement: "Internal vs external.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal: poor management, inadequate capital, bad products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cash flow problems, lack of planning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All internal factors identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Internal failure causes",
          },
        },
        {
          id: "cieibs-u2-fl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business failure, insolvency, liquidation, administration, turnaround, failure rate. (b) What is business failure? (c) What is insolvency? (d) What is liquidation? (e) Give 3 internal causes of failure. (f) Give 3 external causes of failure. (g) What is turnaround? (h) Design a prevention strategy for a new business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business failure",
                statement: "Causes, responses, prevention.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Ceasing operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Can't pay debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Close and sell assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Three valid internal causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Three valid external causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Actions to rescue business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid prevention strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business failure causes and prevention.",
          },
        },
        {
          id: "cieibs-u2-fl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is insolvency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A business making large profits" },
              { id: "b", text: "A type of business tax" },
              { id: "c", text: "Closing a business voluntarily" },
              { id: "d", text: "Inability to pay debts as they fall due" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insolvency",
                statement: "Inability to pay debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Insolvent businesses cannot meet their obligations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Inability to pay debts",
          },
        },
        {
          id: "cieibs-u2-fl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does liquidation involve?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Closing the business and selling its assets to pay creditors",
              },
              {
                id: "b",
                text: "Restructuring the business to continue trading",
              },
              { id: "c", text: "Selling shares to the public" },
              { id: "d", text: "Taking over a rival company" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidation",
                statement: "Closing business and selling assets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assets are sold to pay off creditors in liquidation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Close business and sell assets",
          },
        },
        {
          id: "cieibs-u2-fl-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A failing business has assets of $30,000 and liabilities of $50,000. (a) Calculate the shortfall. (b) Calculate the current ratio (current assets approximated by total assets).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20000, unit: "$" },
              { label: "b", answer: 0.6, unit: "ratio" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solvency ratios",
                statement:
                  "Current ratio = current assets / current liabilities.",
              },
            ],
            steps: [
              {
                reasoning: "Shortfall = 50000 - 30000 = $20,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Current ratio = 30000 / 50000 = 0.6 — below 1 signals liquidity risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $20,000, b) 0.6",
          },
        },
        {
          id: "cieibs-u2-fl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two internal causes of business failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal causes",
                statement: "Factors within the business's control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E.g. poor management decisions or inadequate capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g. bad products or cash flow problems.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Poor management; inadequate capital (or bad products, cash flow)",
          },
        },
        {
          id: "cieibs-u2-fl-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is administration in the context of business failure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hiring external managers permanently" },
              { id: "b", text: "Immediately selling all assets" },
              {
                id: "c",
                text: "Protection from creditors while the business restructures",
              },
              { id: "d", text: "A type of government grant" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Administration",
                statement: "Protection from creditors while restructuring.",
              },
            ],
            steps: [
              {
                reasoning: "Administration buys time to rescue the business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Protection from creditors while restructuring",
          },
        },
        {
          id: "cieibs-u2-fl-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business has assets of $45,000 and liabilities of $60,000. (a) Calculate the shortfall. (b) Calculate the current ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15000, unit: "$" },
              { label: "b", answer: 0.75, unit: "ratio" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solvency",
                statement:
                  "Shortfall = liabilities - assets; ratio = assets / liabilities.",
              },
            ],
            steps: [
              {
                reasoning: "Shortfall = 60000 - 45000 = $15,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio = 45000 / 60000 = 0.75.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $15,000, b) 0.75",
          },
        },
        {
          id: "cieibs-u2-fl-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three turnaround strategies a failing business could use to avoid liquidation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Turnaround",
                statement: "Cost cutting, new management, product changes.",
              },
            ],
            steps: [
              {
                reasoning: "Cut costs — reduce waste, renegotiate contracts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Change management or leadership to restore direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Revise products/pricing or seek new markets to boost revenue.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost cutting; new management; product/market changes",
          },
        },
        {
          id: "cieibs-u2-fl-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most common internal cause of small business failure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excess customer demand" },
              { id: "b", text: "Cash flow problems" },
              { id: "c", text: "Overqualified staff" },
              { id: "d", text: "Too much government regulation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Failure causes",
                statement: "Cash flow problems are a leading internal cause.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Running out of cash kills even profitable businesses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cash flow problems",
          },
        },
        {
          id: "cieibs-u2-fl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of 200 startups in a region, 130 survive after one year and 70 fail. (a) Calculate the one-year survival rate. (b) Calculate the failure rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 65, unit: "%" },
              { label: "b", answer: 35, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Failure rate",
                statement: "Survival + failure rates sum to 100%.",
              },
            ],
            steps: [
              {
                reasoning: "Survival = 130/200 x 100 = 65%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Failure = 70/200 x 100 = 35%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 65%, b) 35%",
          },
        },
        {
          id: "cieibs-u2-fl-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare liquidation and administration as responses to business failure, and evaluate which is preferable for a business with a viable product but cash problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Liquidation vs administration",
                statement: "Close permanently vs protect and restructure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Liquidation ends the business and sells assets — final.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Administration gives breathing space from creditors to restructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For a viable product with cash issues, administration allows rescue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified recommendation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Administration preferable if business is rescuable",
          },
        },
        {
          id: "cieibs-u2-fl-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which practice best helps prevent business failure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Taking on excessive debt" },
              { id: "b", text: "Avoiding market research" },
              { id: "c", text: "Ignoring cash flow forecasts" },
              { id: "d", text: "Careful cash flow management" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Failure prevention",
                statement: "Planning, cash flow management, market research.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Managing cash prevents insolvency — the main killer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Careful cash flow management",
          },
        },
        {
          id: "cieibs-u2-fl-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define business failure, insolvency, liquidation, administration, turnaround. (b) What is insolvency? (c) What is liquidation? (d) Give two internal causes of failure. (e) Give two external causes of failure. (f) A firm has assets of $25,000 and liabilities of $40,000 — calculate the shortfall and current ratio. (g) Explain two turnaround strategies. (h) Evaluate whether liquidation or administration is the better response for a failing but potentially viable business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business failure",
                statement: "Causes, responses, calculation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All five definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Inability to pay debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Close business and sell assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Poor management, inadequate capital, cash flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Competition, recession, changing preferences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Shortfall = $15,000; ratio = 25000/40000 = 0.625.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Cost cutting, new management, product changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Administration preferable for viable firms — justified judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Failure causes, responses and evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-fl-notes",
      title: "Business failure — notes",
      summary:
        "Failure causes: internal (management, capital) + external (competition, economy). Prevention: planning, cash flow, research.",
      sections: [
        {
          heading: "Key idea",
          body: "Most failures occur in first 5 years — planning and cash management critical.",
        },
        {
          heading: "Turnaround",
          body: "Rescue strategies: cost cutting, new management, product changes.",
        },
      ],
    },
  ],
};

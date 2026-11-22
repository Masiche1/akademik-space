import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eias-econ-u4-lesson-4-2",
  code: "4-2",
  title: "Monetary Policy",
  goal: "I CAN explain monetary policy tools and transmission mechanisms.",
  standards: [
    "Edexcel IAS Economics 9EC01 Unit 4 — Government Macroeconomic Policy",
  ],
  vocabulary: [
    {
      term: "Monetary policy",
      definition: "Central bank control of interest rates and money supply.",
    },
    {
      term: "Base rate",
      definition:
        "Interest rate set by central bank — benchmark for all rates.",
    },
    {
      term: "Contractionary monetary",
      definition: "Raise rates — reduce borrowing and AD.",
    },
    {
      term: "Expansionary monetary",
      definition: "Lower rates — increase borrowing and AD.",
    },
    {
      term: "Quantitative easing",
      definition: "Central bank buys assets to increase money supply.",
    },
    {
      term: "Transmission mechanism",
      definition: "How rate changes affect spending and inflation.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u4-monetary",
      title: "Monetary Policy Tools",
      skill: "Explain interest rates, QE and transmission.",
      lesson: {
        sections: [
          {
            heading: "Interest rate policy",
            body: "**Contractionary**: raise base rate → borrowing costs up → consumption/investment falls → AD falls → inflation controlled. **Expansionary**: lower rate → cheaper credit → spending rises → growth/jobs.\n\n**Transmission**: rate change → mortgage/loan costs → disposable income → consumption → AD → prices/output. Also affects exchange rate → exports/imports.",
          },
          {
            heading: "Quantitative easing",
            body: "When rates near zero: central bank buys government bonds/assets → injects money into economy → lowers long-term rates → encourages lending/investment.\n\n**Risks**: asset bubbles (money flows to stocks/property), inequality (asset owners gain), inflation if money supply grows too fast.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Central bank raises rates from 0.5% to 5%. Effect on mortgages?",
          solution: "Mortgage costs rise → consumption falls → AD decreases.",
        },
      },
      questions: [
        {
          id: "eias-econ-u4-mon-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is monetary policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax policy" },
              { id: "b", text: "Government spending" },
              { id: "c", text: "Trade policy" },
              {
                id: "d",
                text: "Central bank control of money and interest rates",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monetary policy",
                statement: "Money + rates.",
              },
            ],
            steps: [
              {
                reasoning: "Monetary = central bank tools.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Money + rates",
            commonErrors: ["Fiscal confused."],
          },
        },
        {
          id: "eias-econ-u4-mon-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how raising interest rates reduces inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate transmission",
                statement: "AD reduction.",
              },
            ],
            steps: [
              {
                reasoning: "Higher rates → borrowing costs rise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumption and investment fall → AD decreases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less demand → downward pressure on prices.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Rates↑ → borrowing↓ → AD↓ → inflation↓.",
            commonErrors: ["Opposite.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u4-mon-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain quantitative easing and when it's used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "QE", statement: "Asset purchases." },
            ],
            steps: [
              {
                reasoning:
                  "Central bank buys government bonds/assets from banks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Injects money into banking system — increases money supply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Lowers long-term interest rates — encourages lending.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Used when rates near zero — conventional policy exhausted.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Asset purchases → money supply↑ → rates↓.",
            commonErrors: ["Rate cut.", "No condition."],
          },
        },
        {
          id: "eias-econ-u4-mon-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Economy in deep recession, interest rates already at 0.25%.",
          parts: [
            {
              label: "a",
              prompt: "Explain why rate cuts won't help.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest alternative monetary policy.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Zero lower bound",
                statement: "QE needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Rates near zero — can't cut further (zero lower bound).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Banks won't lend negative rates — lending unprofitable.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Quantitative easing — buy assets, inject money.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Forward guidance — promise to keep rates low to shape expectations.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Negative interest rates — charge banks for reserves.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) zero bound (b) QE+guidance",
            commonErrors: ["Cut rates.", "No alternative."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u4-monetary-eval",
      title: "Monetary Policy Evaluation",
      skill: "Evaluate monetary policy effectiveness and limitations.",
      lesson: {
        sections: [
          {
            heading: "Strengths",
            body: "**Fast acting**: rate decisions quick — no legislation needed. **Independent**: central bank insulated from politics. **Flexible**: can adjust frequently. **Targets inflation**: single clear objective — price stability.\n\n**Credibility**: independent central bank with inflation target — anchors expectations.",
          },
          {
            heading: "Weaknesses",
            body: "**Distributional effects**: rate rises hurt borrowers (mortgages) vs savers gain. **Asset bubbles**: low rates → money flows to property/stocks → bubbles. **Inequality**: QE benefits asset owners — wealth gap widens. **Time lags**: monetary policy affects economy with delay — may overshoot.\n\n**Liquidity trap**: very low rates → people hoard cash → policy ineffective.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "QE pushes money into property market → prices soar. Problem?",
          solution: "Asset bubble + inequality.",
        },
      },
      questions: [
        {
          id: "eias-econ-u4-moneval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a liquidity trap?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bank failure" },
              { id: "b", text: "Currency crisis" },
              { id: "c", text: "High inflation" },
              { id: "d", text: "People hoard cash despite low rates" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity trap",
                statement: "Cash hoarding.",
              },
            ],
            steps: [
              {
                reasoning: "Liquidity trap = no lending despite low rates.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Cash hoarding",
            commonErrors: ["High inflation confused."],
          },
        },
        {
          id: "eias-econ-u4-moneval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of quantitative easing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "QE drawbacks",
                statement: "Bubbles + inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Asset bubbles — money flows to stocks/property.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inequality — asset owners gain, others don't.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inflation risk — excessive money supply.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Bubbles, inequality, inflation risk.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "eias-econ-u4-moneval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why independent central banks are preferred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Central bank independence",
                statement: "Credibility.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Insulated from political pressure — no election-driven rates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Credible inflation target — anchors expectations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Long-term focus — not swayed by short-term politics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: UK MPC independent from government.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Credibility + insulation from politics.",
            commonErrors: ["Government control.", "No reason."],
          },
        },
        {
          id: "eias-econ-u4-moneval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Central bank must choose between inflation and unemployment targets.",
          parts: [
            { label: "a", prompt: "Explain the trade-off.", marks: 4 },
            { label: "b", prompt: "Suggest how to balance.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy trade-off",
                statement: "Dual mandate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Tight policy → lower inflation but higher unemployment.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Loose policy → lower unemployment but higher inflation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Inflation targeting — prioritise price stability, let jobs follow.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or dual mandate — balance both objectives gradually.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) inflation vs jobs (b) targeting or balance",
            commonErrors: ["Single target.", "No balance."],
          },
        },
      ],
    },
  ],
};

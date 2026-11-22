import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "eiasacct-u5-lesson-5-1",
  code: "5-1",
  title: "Profitability Ratios",
  goal: "I CAN calculate and interpret profitability ratios.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 5 — Financial Analysis"],
  vocabulary: [
    { term: "Gross margin", definition: "GP / Revenue — sales efficiency." },
    { term: "Net margin", definition: "NP / Revenue — overall profitability." },
    {
      term: "Return on capital employed",
      definition: "Profit / Capital employed — return to owners.",
    },
    { term: "Profit margin", definition: "Same as net margin — NP / Revenue." },
    { term: "Mark-up", definition: "GP / Cost of sales — added to cost." },
    { term: "Turnover", definition: "Revenue in period." },
  ],
  concepts: [
    {
      id: "eiasacct-u5-profit",
      title: "Profitability Analysis",
      skill: "Calculate and interpret profitability ratios.",
      lesson: {
        sections: [
          {
            heading: "Margin ratios",
            body: "**Gross margin**: (Revenue - COS) / Revenue — sales efficiency, pricing power. **Net margin**: NP / Revenue — overall profitability after all costs. **Difference**: gross shows trading efficiency; net shows overall.\n\n**Interpretation**: higher = better, but compare to industry — some industries have lower margins.",
          },
          {
            heading: "Return ratios",
            body: "**ROCE**: PBT / Capital employed — return on investment. **Capital employed**: total assets - current liabilities. **Mark-up**: GP / COS — percentage added to cost.\n\n**Example**: Revenue £100k, COS £60k, expenses £25k, capital £150k. GM = 40%, NM = 15%, ROCE = 10%.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "(Revenue - COS) / Revenue" },
          { name: "Net margin", statement: "NP / Revenue" },
          { name: "ROCE", statement: "PBT / Capital employed" },
          { name: "Mark-up", statement: "GP / COS" },
        ],
        workedExample: {
          problem: "Revenue £80k, COS £48k, NP £16k. Margins?",
          solution: "GM = 40%, NM = 20%.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-profit-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does gross margin measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sales efficiency" },
              { id: "b", text: "Growth" },
              { id: "c", text: "Liquidity" },
              { id: "d", text: "Overall profit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gross margin",
                statement: "Sales efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "GM = sales efficiency.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sales efficiency",
            commonErrors: ["Net confused."],
          },
        },
        {
          id: "eiasacct-u5-profit-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two profitability ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profitability ratios",
                statement: "GM+NM+ROCE.",
              },
            ],
            steps: [
              {
                reasoning: "Gross margin — sales efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net margin — overall profitability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "ROCE — return to owners.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "GM, NM, ROCE.",
            commonErrors: ["Only one.", "Wrong ratio."],
          },
        },
        {
          id: "eiasacct-u5-profit-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain margin vs mark-up.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Margin vs mark-up",
                statement: "Base differs.",
              },
            ],
            steps: [
              {
                reasoning: "Margin = GP / Revenue — percentage of sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mark-up = GP / COS — percentage of cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same GP, different base — different %.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Margin always < mark-up for same GP.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Margin=of sales, mark-up=of cost.",
            commonErrors: ["Same.", "Wrong base."],
          },
        },
        {
          id: "eiasacct-u5-profit-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Revenue £120k, COS £72k, expenses £30k, capital employed £180k.",
          parts: [
            { label: "a", prompt: "Calculate GM, NM, ROCE.", marks: 4 },
            { label: "b", prompt: "Interpret results.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profitability",
                statement: "Calculate+interpret.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) GP = 120,000 - 72,000 = £48,000; GM = 48,000/120,000 = 40%.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) NP = 48,000 - 30,000 = £18,000; NM = 18,000/120,000 = 15%; ROCE = 18,000/180,000 = 10%.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) GM 40% — good sales efficiency.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) NM 15%, ROCE 10% — reasonable profitability.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) GM 40%, NM 15%, ROCE 10% (b) good+reasonable",
            commonErrors: ["Wrong ratios.", "No interpretation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-efficiency",
      title: "Efficiency Ratios",
      skill: "Calculate and interpret efficiency ratios.",
      lesson: {
        sections: [
          {
            heading: "Asset efficiency",
            body: "**Inventory turnover**: COS / average inventory — how fast stock sells. **Receivables turnover**: Revenue / average receivables — how fast customers pay. **Payables turnover**: COS / average payables — how fast we pay suppliers.\n\n**Higher turnover** = more efficient, but context matters — too high inventory may mean stockouts.",
          },
          {
            heading: "Days calculations",
            body: "**Days inventory**: 365 / inventory turnover. **Days receivables**: 365 / receivables turnover. **Days payables**: 365 / payables turnover.\n\n**Interpretation**: compare to industry — e.g., 30 days receivables = customers pay in 30 days.",
          },
        ],
        keyFormulas: [
          { name: "Inventory turnover", statement: "COS / Average inventory" },
          {
            name: "Receivables turnover",
            statement: "Revenue / Average receivables",
          },
          { name: "Days inventory", statement: "365 / Inventory turnover" },
        ],
        workedExample: {
          problem: "COS £60k, avg inventory £10k. Turnover?",
          solution: "6 times per year.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-eff-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does inventory turnover measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debt" },
              { id: "b", text: "Cash flow" },
              { id: "c", text: "Profit" },
              { id: "d", text: "Stock selling speed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory turnover",
                statement: "Stock speed.",
              },
            ],
            steps: [
              { reasoning: "IT = stock speed.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Stock speed",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u5-eff-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two efficiency ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency ratios",
                statement: "Inventory+receivables+payables.",
              },
            ],
            steps: [
              {
                reasoning: "Inventory turnover — stock speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Receivables turnover — customer payment speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Payables turnover — supplier payment speed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Inventory, receivables, payables turnover.",
            commonErrors: ["Only one.", "Wrong ratio."],
          },
        },
        {
          id: "eiasacct-u5-eff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why higher turnover isn't always better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Turnover limits",
                statement: "Context needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Too high inventory turnover — stockouts, lost sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Too high receivables — may indicate collection problems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compare to industry — benchmarks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balance needed — efficiency vs service.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stockouts+collection+benchmark+balance.",
            commonErrors: ["Always better.", "No limit."],
          },
        },
        {
          id: "eiasacct-u5-eff-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "COS £90k, avg inventory £15k, revenue £150k, avg receivables £25k.",
          parts: [
            { label: "a", prompt: "Calculate turnovers.", marks: 4 },
            { label: "b", prompt: "Interpret results.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "Calculate+interpret.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) IT = 90,000/15,000 = 6; RT = 150,000/25,000 = 6.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Days: 365/6 = 60.8 days each.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) 6 turns = efficient stock and collection.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) 60 days — compare to industry norms.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) IT=6, RT=6 (b) efficient, compare industry",
            commonErrors: ["Wrong calc.", "No interpretation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-liquidity",
      title: "Liquidity and Gearing",
      skill: "Calculate liquidity and gearing ratios.",
      lesson: {
        sections: [
          {
            heading: "Liquidity ratios",
            body: "**Current ratio**: CA / CL — short-term ability to pay. **Acid test**: (CA - inventory) / CL — immediate liquidity. **Cash ratio**: cash / CL — most conservative.\n\n**Interpretation**: >1 = good; <1 = risk; too high = inefficient — cash tied up.",
          },
          {
            heading: "Gearing ratios",
            body: "**Gearing**: debt / equity or debt / capital — proportion of borrowed funds. **Interest cover**: PBIT / interest — ability to pay interest.\n\n**High gearing** = higher risk but higher return potential; **low gearing** = safer but lower returns.",
          },
        ],
        keyFormulas: [
          { name: "Current ratio", statement: "CA / CL" },
          { name: "Acid test", statement: "(CA - Inventory) / CL" },
          { name: "Gearing", statement: "Debt / Equity" },
          { name: "Interest cover", statement: "PBIT / Interest" },
        ],
        workedExample: {
          problem:
            "CA £50k, CL £40k, inventory £20k, debt £60k, equity £40k. Ratios?",
          solution: "CR = 1.25, AT = 0.75, Gearing = 1.5.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-liq-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does current ratio measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Short-term liquidity" },
              { id: "b", text: "Profitability" },
              { id: "c", text: "Growth" },
              { id: "d", text: "Efficiency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Current ratio",
                statement: "Liquidity.",
              },
            ],
            steps: [
              { reasoning: "CR = liquidity.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Liquidity",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u5-liq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two gearing ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gearing ratios",
                statement: "Debt/equity+interest cover.",
              },
            ],
            steps: [
              {
                reasoning: "Gearing — debt/equity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interest cover — PBIT/interest.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Debt ratio — debt/capital.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Gearing, interest cover, debt ratio.",
            commonErrors: ["Only one.", "Wrong ratio."],
          },
        },
        {
          id: "eiasacct-u5-liq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain high vs low gearing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gearing",
                statement: "Risk vs return.",
              },
            ],
            steps: [
              {
                reasoning: "High gearing — more debt, higher risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "High gearing — higher return if profitable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low gearing — safer, lower returns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Optimal depends on business risk appetite.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Risk vs return+optimal.",
            commonErrors: ["Always bad.", "No trade-off."],
          },
        },
        {
          id: "eiasacct-u5-liq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "CA £60k, CL £45k, inventory £25k, debt £80k, equity £60k, PBIT £15k, interest £5k.",
          parts: [
            { label: "a", prompt: "Calculate ratios.", marks: 4 },
            { label: "b", prompt: "Interpret results.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity+gearing",
                statement: "Calculate+interpret.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) CR = 60,000/45,000 = 1.33; AT = (60,000-25,000)/45,000 = 0.78.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Gearing = 80,000/60,000 = 1.33; IC = 15,000/5,000 = 3.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) CR 1.33 — adequate; AT 0.78 — tight liquidity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Gearing 1.33 — moderate; IC 3 — can cover interest.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) CR 1.33, AT 0.78, G 1.33, IC 3 (b) adequate+tight+moderate",
            commonErrors: ["Wrong calc.", "No interpretation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-trend",
      title: "Trend and Benchmark Analysis",
      skill: "Analyse trends and benchmark performance.",
      lesson: {
        sections: [
          {
            heading: "Trend analysis",
            body: "**Year-on-year**: compare current vs previous — revenue growth, profit trends, margin changes. **Identify patterns**: improving, declining, stable. **Investigate causes**: why changes occurred.\n\n**Example**: Revenue up 10%, profit down 5% — sales grew but costs rose faster.",
          },
          {
            heading: "Benchmarking",
            body: "**Industry comparison**: compare to industry averages — competitive? **Peer comparison**: compare to similar businesses — strengths/weaknesses. **Historical**: compare to own past — improvement or decline.\n\n**Purpose**: identify opportunities, threats, best practices — inform strategy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "GM improved 30%→35%, NM fell 12%→10%. Interpretation?",
          solution: "Sales efficiency up, but expenses rose.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-trend-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is trend analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Industry comparison" },
              { id: "b", text: "Cash flow" },
              { id: "c", text: "Single year" },
              { id: "d", text: "Comparing over time" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trend analysis",
                statement: "Over time.",
              },
            ],
            steps: [
              { reasoning: "Trend = over time.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Over time",
            commonErrors: ["Single confused."],
          },
        },
        {
          id: "eiasacct-u5-trend-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two analysis methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis methods",
                statement: "Trend+benchmark.",
              },
            ],
            steps: [
              {
                reasoning: "Trend — compare over time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Benchmark — compare to industry/peers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ratio analysis — calculate measures.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Trend, benchmark, ratio.",
            commonErrors: ["Only one.", "Wrong method."],
          },
        },
        {
          id: "eiasacct-u5-trend-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why benchmarking matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benchmarking",
                statement: "Competitive position.",
              },
            ],
            steps: [
              {
                reasoning: "Compare to industry — are we competitive?",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify strengths — where we excel.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify weaknesses — where to improve.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Learn best practices — from leaders.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Competitive+strengths+weaknesses+practices.",
            commonErrors: ["Not useful.", "One reason."],
          },
        },
        {
          id: "eiasacct-u5-trend-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Revenue up 20%, profit down 10%, GM up 5% over 2 years.",
          parts: [
            { label: "a", prompt: "What does this indicate?", marks: 4 },
            { label: "b", prompt: "What to investigate?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trend interpretation",
                statement: "Pattern+causes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Sales growing, gross margin improving.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) But net profit falling — expenses rising.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Investigate expenses — overheads, wages.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check one-off costs — unusual items.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) sales up, profit down (b) expenses+one-offs",
            commonErrors: ["No interpretation.", "No investigation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-summary",
      title: "Financial Analysis Summary",
      skill: "Summarise financial ratio analysis.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Profitability**: GM, NM, ROCE — earning power. **Efficiency**: inventory, receivables, payables turnover — resource use. **Liquidity**: current, acid test — short-term survival. **Gearing**: debt/equity, interest cover — financial risk. **Trend/benchmark**: compare over time and to peers.\n\n**Key idea**: ratios inform, context decides — use all together.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: calculate ratios, interpret results. **Evaluate**: ratio limitations, context importance. **Analyse**: trends, benchmarks, recommendations.\n\n**Key concepts**: margins, turnover, liquidity, gearing, trend analysis.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "GP / Revenue" },
          { name: "Current ratio", statement: "CA / CL" },
          { name: "Gearing", statement: "Debt / Equity" },
        ],
        workedExample: {
          problem: "All ratios analysed. Result?",
          solution: "Complete performance picture.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of ratio analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prepare statements" },
              { id: "b", text: "Assess performance" },
              { id: "c", text: "Calculate tax" },
              { id: "d", text: "Record transactions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio purpose",
                statement: "Assess.",
              },
            ],
            steps: [
              { reasoning: "Ratios = assess.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Assess",
            commonErrors: ["Recording confused."],
          },
        },
        {
          id: "eiasacct-u5-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three ratio categories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio categories",
                statement: "Profit+liquidity+gearing.",
              },
            ],
            steps: [
              {
                reasoning: "Profitability — margins, ROCE.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Liquidity — current, acid test.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gearing — debt/equity, interest cover.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Profitability, liquidity, gearing.",
            commonErrors: ["Only one.", "Wrong category."],
          },
        },
        {
          id: "eiasacct-u5-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ratios need context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio context",
                statement: "Compare+interpret.",
              },
            ],
            steps: [
              {
                reasoning: "Ratios alone meaningless — need comparison.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compare to industry — benchmark.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compare to previous — trend.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consider business type — context matters.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Compare+trend+industry+context.",
            commonErrors: ["Absolute meaning.", "No context."],
          },
        },
        {
          id: "eiasacct-u5-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate business performance using ratios.",
          parts: [
            { label: "a", prompt: "Which ratios to use?", marks: 4 },
            { label: "b", prompt: "How to interpret?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance evaluation",
                statement: "Ratios+context.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profitability — GM, NM, ROCE.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Liquidity — current, acid test.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Efficiency — turnover ratios.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Gearing — debt/equity, interest cover.",
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
            finalAnswer: "(a) all ratio categories (b) benchmark+context",
            commonErrors: ["One ratio.", "No context."],
          },
        },
      ],
    },
  ],
};

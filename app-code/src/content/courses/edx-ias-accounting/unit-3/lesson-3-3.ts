import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eiasacct-u3-lesson-3-3",
  code: "3-3",
  title: "Interpretation of Accounts",
  goal: "I CAN interpret financial accounts using ratios and analysis.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 3 — Accounting for Sole Traders",
  ],
  vocabulary: [
    {
      term: "Ratio analysis",
      definition: "Using ratios to assess performance.",
    },
    { term: "Profitability", definition: "Ability to generate profit." },
    { term: "Liquidity", definition: "Ability to pay short-term debts." },
    { term: "Efficiency", definition: "How well resources are used." },
    { term: "Trend analysis", definition: "Comparing performance over time." },
    { term: "Benchmarking", definition: "Comparing to industry standards." },
  ],
  concepts: [
    {
      id: "eiasacct-u3-interpretation",
      title: "Using Ratios",
      skill: "Interpret financial performance using ratios.",
      lesson: {
        sections: [
          {
            heading: "Profitability ratios",
            body: "**Gross margin**: GP/revenue — sales efficiency. **Net margin**: NP/revenue — overall profitability. **Return on capital employed**: profit/capital — return to owners.\n\n**Interpretation**: higher = better, but compare to industry/previous years — context matters.",
          },
          {
            heading: "Liquidity ratios",
            body: "**Current ratio**: CA/CL — short-term ability to pay. **Acid test**: (CA - inventory)/CL — immediate liquidity. **Cash ratio**: cash/CL — most conservative.\n\n**Interpretation**: >1 = good; too high = inefficient; too low = risk of insolvency.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "GP / Revenue" },
          { name: "Net margin", statement: "NP / Revenue" },
          { name: "Current ratio", statement: "CA / CL" },
          { name: "Acid test", statement: "(CA - Inv) / CL" },
        ],
        workedExample: {
          problem: "Gross margin 40%, net margin 10%. Interpretation?",
          solution: "Good sales efficiency, but high expenses.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-int-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does net margin measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overall profitability" },
              { id: "b", text: "Efficiency" },
              { id: "c", text: "Liquidity" },
              { id: "d", text: "Sales efficiency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Net margin",
                statement: "Overall profit.",
              },
            ],
            steps: [
              { reasoning: "NM = overall profit.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Overall profit",
            commonErrors: ["Gross confused."],
          },
        },
        {
          id: "eiasacct-u3-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two liquidity ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liquidity ratios",
                statement: "Current+acid test.",
              },
            ],
            steps: [
              {
                reasoning: "Current ratio — CA/CL.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Acid test — (CA-inv)/CL.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Cash ratio — cash/CL.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Current, acid test, cash ratio.",
            commonErrors: ["Only one.", "Wrong ratio."],
          },
        },
        {
          id: "eiasacct-u3-int-q3",
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
                reasoning: "Compare to previous years — trend.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Consider business type — different industries differ.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Compare+trend+industry+context.",
            commonErrors: ["Absolute meaning.", "No context."],
          },
        },
        {
          id: "eiasacct-u3-int-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Gross margin 35%, net margin 8%, current ratio 1.2.",
          parts: [
            { label: "a", prompt: "Interpret each ratio.", marks: 4 },
            { label: "b", prompt: "Overall assessment.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio interpretation",
                statement: "Individual+overall.",
              },
            ],
            steps: [
              {
                reasoning: "(a) GM 35% — reasonable sales efficiency.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) NM 8% — decent profit, high expenses.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) CR 1.2 — adequate liquidity.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) All within acceptable range.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Overall — stable, profitable, liquid.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Could improve margins — reduce expenses.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) reasonable+decent+adequate (b) stable+improve margins",
            commonErrors: ["No interpretation.", "No assessment."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-trend",
      title: "Trend and Comparative Analysis",
      skill: "Analyse trends and compare performance.",
      lesson: {
        sections: [
          {
            heading: "Trend analysis",
            body: "**Compare over time**: year-on-year changes — revenue growth, profit trends, margin changes. **Identify patterns**: improving, declining, stable. **Causes**: investigate why changes occurred.\n\n**Example**: Revenue up 10%, profit down 5% — sales increased but costs rose faster.",
          },
          {
            heading: "Comparative analysis",
            body: "**Benchmarking**: compare to industry averages — are we competitive? **Peer comparison**: compare to similar businesses — strengths, weaknesses. **Historical**: compare to own past — improvement or decline.\n\n**Purpose**: identify strengths, weaknesses, opportunities — inform strategy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Revenue up 20%, profit down 10%. What to investigate?",
          solution: "Cost increases outpacing revenue growth.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-trend-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is trend analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing performance over time" },
              { id: "b", text: "Cash flow" },
              { id: "c", text: "Single year data" },
              { id: "d", text: "Industry comparison" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Over time",
            commonErrors: ["Single confused."],
          },
        },
        {
          id: "eiasacct-u3-trend-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two analysis methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis methods",
                statement: "Trend+comparative.",
              },
            ],
            steps: [
              {
                reasoning: "Trend — compare over time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comparative — compare to peers/industry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ratio analysis — calculate performance measures.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Trend, comparative, ratio analysis.",
            commonErrors: ["Only one.", "Wrong method."],
          },
        },
        {
          id: "eiasacct-u3-trend-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why benchmarking is useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benchmarking",
                statement: "Industry comparison.",
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
                reasoning: "Best practices — learn from others.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Competitive+strengths+weaknesses+practices.",
            commonErrors: ["Not useful.", "One reason."],
          },
        },
        {
          id: "eiasacct-u3-trend-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Revenue up 15%, profit down 8% over 2 years.",
          parts: [
            { label: "a", prompt: "What does this indicate?", marks: 4 },
            { label: "b", prompt: "What to investigate?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trend analysis",
                statement: "Interpret+investigate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Sales growing but profitability declining.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Costs rising faster than revenue — margin squeeze.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Cost of sales — supplier prices, efficiency.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Expenses — overheads, wage increases.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) sales up, profit down (b) investigate costs",
            commonErrors: ["No interpretation.", "No investigation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-evaluation",
      title: "Evaluating Performance",
      skill: "Evaluate business performance holistically.",
      lesson: {
        sections: [
          {
            heading: "Holistic evaluation",
            body: "**Profitability**: is business making profit? **Liquidity**: can it pay debts? **Efficiency**: how well are resources used? **Growth**: is it expanding? **Solvency**: long-term survival?\n\n**Balance**: all factors matter — profitable but illiquid = risk; liquid but unprofitable = decline.",
          },
          {
            heading: "Limitations",
            body: "**Historical**: past data — may not predict future. **Simplified**: ratios don't show everything. **Context**: industry, size, stage matter. **Manipulation**: accounting choices affect figures.\n\n**Judgement**: ratios inform, don't decide — use with other information.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "High profit but low liquidity. Overall assessment?",
          solution: "Risky — may not survive despite profit.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does holistic evaluation mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liquidity only" },
              { id: "b", text: "Profit only" },
              { id: "c", text: "Considering all factors" },
              { id: "d", text: "Growth only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Holistic",
                statement: "All factors.",
              },
            ],
            steps: [
              {
                reasoning: "Holistic = all factors.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** All factors",
            commonErrors: ["One factor."],
          },
        },
        {
          id: "eiasacct-u3-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two performance factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance factors",
                statement: "Profit+liquidity+growth.",
              },
            ],
            steps: [
              {
                reasoning: "Profitability — making profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Liquidity — paying debts.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Growth — expanding.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Profitability, liquidity, efficiency, growth.",
            commonErrors: ["Only one.", "Wrong factor."],
          },
        },
        {
          id: "eiasacct-u3-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ratios have limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio limitations",
                statement: "Context needed.",
              },
            ],
            steps: [
              {
                reasoning: "Historical — past data, not future.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Simplified — don't show everything.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Context — industry, size matter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Manipulation — accounting choices affect.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Historical+simplified+context+manipulation.",
            commonErrors: ["Perfect.", "No limitation."],
          },
        },
        {
          id: "eiasacct-u3-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business: high profit, low liquidity, declining growth.",
          parts: [
            { label: "a", prompt: "Overall assessment.", marks: 4 },
            { label: "b", prompt: "Recommendations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance evaluation",
                statement: "Balance factors.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profitable but risky — may not survive.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Low liquidity — can't pay debts.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Declining growth — losing market.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Improve liquidity — collect faster, delay payments.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Stimulate growth — new products, marketing.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) risky+declining (b) liquidity+growth",
            commonErrors: ["Good overall.", "No recommendations."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-summary3",
      title: "Interpretation Summary",
      skill: "Summarise account interpretation.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Ratios**: profitability (gross/net margin), liquidity (current/acid test), efficiency. **Trend**: compare over time — identify patterns. **Comparative**: benchmark to industry/peers. **Evaluation**: holistic — all factors matter, ratios have limitations.\n\n**Key idea**: interpretation turns numbers into insights — inform decisions.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: calculate ratios, interpret trends, benchmark. **Evaluate**: performance holistically, ratio limitations, context importance. **Analyse**: patterns, causes, recommendations.\n\n**Key concepts**: ratios, trend analysis, benchmarking, holistic evaluation, limitations.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "GP / Revenue" },
          { name: "Net margin", statement: "NP / Revenue" },
          { name: "Current ratio", statement: "CA / CL" },
        ],
        workedExample: {
          problem: "All analysis complete. Result?",
          solution: "Informed decisions possible.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-sum3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of ratio analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assess performance" },
              { id: "b", text: "Prepare statements" },
              { id: "c", text: "Calculate tax" },
              { id: "d", text: "Record transactions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio purpose",
                statement: "Assess performance.",
              },
            ],
            steps: [
              { reasoning: "Ratios = assess.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Assess",
            commonErrors: ["Recording confused."],
          },
        },
        {
          id: "eiasacct-u3-sum3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ratio categories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio categories",
                statement: "Profitability+liquidity.",
              },
            ],
            steps: [
              {
                reasoning: "Profitability — gross/net margin.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Liquidity — current/acid test.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Efficiency — asset turnover.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Profitability, liquidity, efficiency.",
            commonErrors: ["Only one.", "Wrong category."],
          },
        },
        {
          id: "eiasacct-u3-sum3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why holistic evaluation matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Holistic evaluation",
                statement: "All factors.",
              },
            ],
            steps: [
              {
                reasoning: "Single ratio misleading — need balance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Profit but illiquid — risky.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Liquid but unprofitable — decline.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "All factors together — complete picture.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Balance+complete picture.",
            commonErrors: ["One ratio enough.", "No reason."],
          },
        },
        {
          id: "eiasacct-u3-sum3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate performance using ratios and trends.",
          parts: [
            { label: "a", prompt: "What ratios to use?", marks: 4 },
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
                reasoning: "(a) Profitability — gross/net margin.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Liquidity — current/acid test.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Efficiency — asset turnover.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Growth — revenue/profit trends.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Compare to industry/previous — benchmark.",
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
            finalAnswer:
              "(a) profitability+liquidity+efficiency+growth (b) benchmark+context",
            commonErrors: ["One ratio.", "No context."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson36: Lesson = {
  id: "cieiacct-u3-lesson-3-6",
  code: "3-6",
  title: "Analysis of accounting information and cash flow",
  goal: "I CAN calculate and interpret profitability, liquidity and efficiency ratios, and prepare a simple cash flow statement.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Sections 10 and 11: Analysis and cash flow",
  ],
  vocabulary: [
    {
      term: "Gross profit margin",
      definition:
        "Gross profit as a percentage of sales — measures trading profitability.",
    },
    {
      term: "Profit margin",
      definition:
        "Net profit as a percentage of sales — measures overall profitability.",
    },
    {
      term: "Current ratio",
      definition:
        "Current assets ÷ current liabilities — measures short-term liquidity.",
    },
    {
      term: "Quick ratio",
      definition:
        "(Current assets − inventory) ÷ current liabilities — stricter liquidity measure.",
    },
    {
      term: "Gearing",
      definition:
        "The proportion of a business's capital that comes from fixed-interest sources (loans, debentures) rather than equity.",
    },
    {
      term: "Cash flow statement",
      definition:
        "A statement showing cash inflows and outflows classified as operating, investing and financing activities.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u3-ratios-profit",
      title: "Profitability ratios",
      skill:
        "Calculate and interpret gross profit margin, profit margin and ROCE.",
      lesson: {
        sections: [
          {
            heading: "Gross profit margin",
            body: "**Gross profit margin** = (gross profit ÷ sales) × 100. Measures how much profit is made on each dollar of sales before expenses. A rising margin suggests better buying or pricing.",
          },
          {
            heading: "Profit margin (net)",
            body: "**Profit margin** = (net profit ÷ sales) × 100. Measures overall profitability after all expenses. Compare with industry averages and prior years.",
          },
          {
            heading: "Return on capital employed (ROCE)",
            body: "**ROCE** = (profit before interest and tax ÷ capital employed) × 100. Measures how efficiently the business uses its capital. Capital employed = non-current assets + working capital (or equity + non-current liabilities).",
          },
        ],
        keyFormulas: [
          {
            name: "Gross profit margin",
            statement: "(Gross profit ÷ sales) × 100",
          },
          { name: "Profit margin", statement: "(Net profit ÷ sales) × 100" },
          {
            name: "ROCE",
            statement:
              "(Profit before interest and tax ÷ capital employed) × 100",
          },
        ],
        workedExample: {
          problem:
            "Sales \\$200,000; gross profit \\$60,000; net profit \\$30,000; capital employed \\$150,000. Calculate margins and ROCE.",
          solution:
            "GPM = 60,000/200,000 = 30%. PM = 30,000/200,000 = 15%. ROCE = 30,000/150,000 = 20%.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-ratios-profit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gross profit margin is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Gross profit ÷ cost of sales) × 100" },
              { id: "b", text: "(Gross profit ÷ sales) × 100" },
              { id: "c", text: "(Sales ÷ gross profit) × 100" },
              { id: "d", text: "(Net profit ÷ sales) × 100" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "GPM", statement: "GP ÷ sales × 100." },
            ],
            steps: [
              {
                reasoning: "GPM = gross profit as % of sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) (Gross profit ÷ sales) × 100.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Profit margin (net) is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Gross profit ÷ sales) × 100" },
              { id: "b", text: "(Net profit ÷ assets) × 100" },
              { id: "c", text: "(Net profit ÷ sales) × 100" },
              { id: "d", text: "(Sales ÷ net profit) × 100" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PM",
                statement: "Net profit ÷ sales × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Net margin = net profit as % of sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) (Net profit ÷ sales) × 100.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sales \\$150,000; gross profit \\$45,000. Calculate the gross profit margin.",
          response: {
            type: "numeric",
            parts: [{ label: "Gross profit margin", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "GPM", statement: "GP ÷ sales × 100." },
            ],
            steps: [
              {
                reasoning: "GPM = 45,000 ÷ 150,000 × 100.",
                working: "45000 / 150000 * 100 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "30%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30%",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sales \\$250,000; cost of sales \\$175,000; expenses \\$40,000. Calculate gross profit, net profit, gross profit margin and profit margin.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gross profit margin", answer: 30, unit: "%" },
              { label: "Profit margin", answer: 14, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margins",
                statement:
                  "GP = sales − CoS; NP = GP − expenses; margins = profit/sales.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GP = 250,000 − 175,000 = \\$75,000; GPM = 75,000/250,000 = 30%.",
                working: "75000; 30%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NP = 75,000 − 40,000 = \\$35,000; PM = 35,000/250,000 = 14%.",
                working: "35000; 14%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both margins.",
                working: "30% and 14%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GPM 30%; PM 14%",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Profit before interest and tax \\$45,000; capital employed \\$180,000. Calculate ROCE.",
          response: {
            type: "numeric",
            parts: [{ label: "ROCE", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ROCE",
                statement: "PBIT ÷ capital employed × 100.",
              },
            ],
            steps: [
              {
                reasoning: "ROCE = 45,000 ÷ 180,000 × 100.",
                working: "45000 / 180000 * 100 = 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "25%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "ROCE measures return on capital invested.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business's gross profit margin fell from 35% to 28% while sales rose. State two possible causes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio interpretation",
                statement:
                  "Falling margin = costs rising faster than prices or mix changing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cause 1: cost of sales increased — supplier prices rose or buying was less efficient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cause 2: selling prices were reduced to gain sales, or product mix shifted to lower-margin items.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investigate cost of sales and pricing to identify the cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two: rising costs, lower prices, or mix shift to low-margin products.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Sales \\$400,000; gross profit \\$120,000; net profit \\$60,000. Calculate gross profit margin and profit margin. If last year's margins were 32% and 17%, comment on performance.",
          response: {
            type: "numeric",
            parts: [
              { label: "GPM", answer: 30, unit: "%" },
              { label: "PM", answer: 15, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margins",
                statement: "GP/sales and NP/sales.",
              },
            ],
            steps: [
              {
                reasoning: "GPM = 120,000/400,000 = 30%.",
                working: "30%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "PM = 60,000/400,000 = 15%.",
                working: "15%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both margins fell vs last year (32%→30%, 17%→15%) — profitability declined despite higher sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State margins and comment.",
                working: "30% and 15% — both declined",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GPM 30%; PM 15% — both down from last year; profitability declined.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is ROCE considered a better measure of overall performance than profit margin alone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ROCE",
                statement:
                  "Measures return on capital employed — efficiency of capital use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit margin only shows profit per sales dollar — ignores how much capital was needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ROCE shows return on the capital invested — a business could have high margin but poor capital efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It allows comparison across businesses of different sizes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "ROCE measures capital efficiency; margin only measures per-sales profitability.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$300,000; gross profit \\$90,000; net profit \\$45,000; capital employed \\$150,000. Calculate GPM, PM and ROCE.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A competitor has GPM 35%, PM 18%, ROCE 22%. Compare performance and suggest one improvement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratios",
                statement: "Margins and ROCE as percentages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GPM = 90,000/300,000 = 30%; PM = 45,000/300,000 = 15%; ROCE = 45,000/150,000 = 30%.",
                working: "30%; 15%; 30%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State all three.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Business: GPM 30% < 35%, PM 15% < 18%, ROCE 30% > 22% — lower margins but higher capital efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Margins lag competitor — investigate cost of sales and expenses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Suggestion: negotiate better supplier prices or review expense control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GPM 30%, PM 15%, ROCE 30%. (b) Lower margins but higher ROCE; improve buying/pricing.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain what each of these ratios measures: gross profit margin, profit margin, ROCE.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Sales \\$500,000; gross profit \\$150,000; net profit \\$75,000; capital employed \\$250,000. Calculate all three ratios and comment on the business.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio meanings",
                statement:
                  "GPM = trading; PM = overall; ROCE = capital efficiency.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GPM: profit on sales before expenses — trading efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "PM: profit after all expenses — overall profitability.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "ROCE: return on capital employed — efficiency of capital use.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "GPM = 150,000/500,000 = 30%; PM = 75,000/500,000 = 15%; ROCE = 75,000/250,000 = 30%.",
                working: "30%; 15%; 30%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reasonable margins; ROCE of 30% is strong.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Comment on overall healthy performance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GPM = trading; PM = overall; ROCE = capital efficiency. (b) 30%, 15%, 30% — healthy performance.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The gross profit margin is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Gross profit ÷ sales) × 100" },
              { id: "b", text: "(Net profit ÷ sales) × 100" },
              { id: "c", text: "(Sales ÷ gross profit) × 100" },
              { id: "d", text: "(Gross profit ÷ cost of sales) × 100" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gross profit margin",
                statement: "(Gross profit ÷ sales) × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GPM measures profit on sales before expenses.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) (Gross profit ÷ sales) × 100.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sales are \\$100,000 and gross profit is \\$25,000. Calculate the gross profit margin.",
          response: {
            type: "numeric",
            parts: [{ label: "Gross profit margin", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gross profit margin",
                statement: "(GP ÷ sales) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "25,000 ÷ 100,000 × 100.",
                working: "25000 / 100000 × 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GPM = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Net profit is \\$12,000 and sales are \\$80,000. Calculate the profit margin.",
          response: {
            type: "numeric",
            parts: [{ label: "Profit margin", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit margin",
                statement: "(Net profit ÷ sales) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "12,000 ÷ 80,000 × 100.",
                working: "12000 / 80000 × 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit margin = 15%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15%",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the return on capital employed (ROCE) ratio measures and why it is useful to investors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ROCE",
                statement: "(Profit before interest and tax ÷ capital employed) × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ROCE measures how much profit the business generates for each unit of capital invested in it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It uses PBIT so that financing decisions don't distort the comparison of operating efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investors compare ROCE with other businesses or prior years to judge whether capital is being used efficiently.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "ROCE = PBIT ÷ capital employed × 100 — measures the return generated on the capital invested, useful for comparing efficiency.",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Profit before interest and tax is \\$30,000 and capital employed is \\$200,000. Calculate ROCE.",
          response: {
            type: "numeric",
            parts: [{ label: "ROCE", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ROCE",
                statement: "(PBIT ÷ capital employed) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "30,000 ÷ 200,000 × 100.",
                working: "30000 / 200000 × 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ROCE = 15%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ROCE = 15% — a reasonable return on capital.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15%",
          },
        },
        {
          id: "cieiacct-u3-ratios-profit-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$150,000; gross profit \\$45,000; net profit \\$22,500. Calculate the gross profit margin and profit margin.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Capital employed is \\$120,000 and PBIT equals net profit (no interest/tax adjustment needed). Calculate ROCE.",
              marks: 2,
            },
          ],
          stem: "A business calculates its profitability ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profitability ratios",
                statement:
                  "GPM = GP/sales; PM = NP/sales; ROCE = PBIT/CE.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GPM = 45,000 ÷ 150,000 = 30%; PM = 22,500 ÷ 150,000 = 15%.",
                working: "45000/150000 = 30%; 22500/150000 = 15%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "ROCE = 22,500 ÷ 120,000 = 18.75%.",
                working: "22500 / 120000 = 0.1875",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GPM 30%; PM 15%. (b) ROCE 18.75%.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-ratios-liquidity",
      title: "Liquidity ratios",
      skill: "Calculate and interpret current ratio and quick ratio.",
      lesson: {
        sections: [
          {
            heading: "Current ratio",
            body: "**Current ratio** = current assets ÷ current liabilities. Measures ability to pay short-term debts. A ratio above 1 means current assets exceed current liabilities. 'Healthy' varies by industry — typically 1.5:1 to 2:1.",
          },
          {
            heading: "Quick ratio (acid test)",
            body: "**Quick ratio** = (current assets − inventory) ÷ current liabilities. Excludes inventory because it may not convert to cash quickly. More conservative — typically should exceed 1:1.",
          },
          {
            heading: "Interpretation",
            body: "Too low = liquidity risk (can't pay debts). Too high = excess idle assets (inefficient — money could be invested). Compare with prior years and industry.",
          },
        ],
        keyFormulas: [
          {
            name: "Current ratio",
            statement: "Current assets ÷ current liabilities",
          },
          {
            name: "Quick ratio",
            statement: "(Current assets − inventory) ÷ current liabilities",
          },
        ],
        workedExample: {
          problem:
            "Current assets \\$80,000 (incl. inventory \\$30,000); current liabilities \\$40,000. Current ratio and quick ratio?",
          solution:
            "Current ratio = 80,000/40,000 = 2:1. Quick ratio = (80,000−30,000)/40,000 = 1.25:1.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-ratios-liquidity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Current ratio is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current liabilities ÷ current assets" },
              { id: "b", text: "Inventory ÷ current liabilities" },
              { id: "c", text: "Total assets ÷ total liabilities" },
              { id: "d", text: "Current assets ÷ current liabilities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Current ratio", statement: "CA ÷ CL." },
            ],
            steps: [
              {
                reasoning:
                  "Current ratio = current assets / current liabilities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Current assets ÷ current liabilities.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Quick ratio excludes inventory because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Inventory may not convert to cash quickly enough to pay short-term debts",
              },
              { id: "b", text: "Inventory is always worthless" },
              { id: "c", text: "Inventory is not an asset" },
              { id: "d", text: "Inventory is a liability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quick ratio",
                statement: "Excludes slow-moving inventory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inventory may be slow to sell — excluded for a stricter test.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Inventory may not convert to cash quickly.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Current assets \\$120,000; current liabilities \\$60,000. Calculate the current ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "Current ratio", answer: 2, unit: ":1" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Current ratio", statement: "CA ÷ CL." },
            ],
            steps: [
              {
                reasoning: "120,000 ÷ 60,000 = 2.",
                working: "120000 / 60000 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State as 2:1.",
                working: "2:1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2:1",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Current assets \\$100,000 (including inventory \\$40,000); current liabilities \\$50,000. Calculate current ratio and quick ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current ratio", answer: 2, unit: ":1" },
              { label: "Quick ratio", answer: 1.2, unit: ":1" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity ratios",
                statement: "CR = CA/CL; QR = (CA−inv)/CL.",
              },
            ],
            steps: [
              {
                reasoning: "Current ratio = 100,000/50,000 = 2:1.",
                working: "2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quick ratio = (100,000−40,000)/50,000 = 60,000/50,000 = 1.2:1.",
                working: "1.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both ratios.",
                working: "2:1 and 1.2:1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Current ratio 2:1; quick ratio 1.2:1",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business has a current ratio of 0.8:1. Explain what this means and the risk it poses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liquidity risk",
                statement:
                  "CR < 1 means current liabilities exceed current assets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current assets are less than current liabilities — the business may struggle to pay short-term debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk of insolvency if creditors demand payment and assets can't be converted quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Needs to improve liquidity — collect debtors faster, reduce inventory, or arrange overdraft.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "CR 0.8 means liabilities exceed assets — liquidity risk; may struggle to pay debts.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business has a current ratio of 3.5:1. Is this necessarily good? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "High ratio",
                statement:
                  "Too high = idle assets, inefficient use of capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "3.5:1 means current assets are 3.5× current liabilities — very liquid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it may indicate excessive cash/inventory — money not being invested productively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Could be inefficient — excess working capital earns no return; compare with industry norms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Not necessarily — very high ratio may mean idle assets and inefficiency.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Current assets \\$90,000 (inventory \\$35,000); current liabilities \\$45,000. Calculate current ratio and quick ratio, and comment on liquidity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current ratio", answer: 2, unit: ":1" },
              { label: "Quick ratio", answer: 1.22, unit: ":1" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity",
                statement: "CR = CA/CL; QR = (CA−inv)/CL.",
              },
            ],
            steps: [
              {
                reasoning: "CR = 90,000/45,000 = 2:1.",
                working: "2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "QR = (90,000−35,000)/45,000 = 55,000/45,000 = 1.22:1.",
                working: "1.22",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both above 1 — reasonable liquidity; quick ratio confirms ability to pay without selling inventory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State ratios and comment.",
                working: "2:1 and 1.22:1 — adequate liquidity",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CR 2:1; QR 1.22:1 — adequate liquidity.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a business with a high current ratio still face liquidity problems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liquidity limits",
                statement: "High CR doesn't guarantee cash availability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current assets may be mostly inventory or debtors — not instantly convertible to cash.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debtors may default; inventory may be slow to sell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quick ratio gives a better picture of immediate liquidity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assets may not convert to cash quickly — check quick ratio.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Current assets \\$150,000 (inventory \\$60,000, debtors \\$50,000, cash \\$40,000); current liabilities \\$75,000. Calculate current ratio and quick ratio.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Comment on the business's liquidity position.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity",
                statement: "CR = CA/CL; QR = (CA−inv)/CL.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "CR = 150,000/75,000 = 2:1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "QR = (150,000−60,000)/75,000 = 90,000/75,000 = 1.2:1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State both ratios.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "CR 2:1 is healthy; QR 1.2:1 shows adequate liquid assets excluding inventory.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Debtors of \\$50,000 represent 1/3 of current assets — some collection risk.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Overall liquidity is adequate but monitor debtor collection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) CR 2:1; QR 1.2:1. (b) Adequate liquidity; monitor debtors.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between the current ratio and the quick ratio.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Last year CR was 1.8:1, QR 0.9:1. This year CR is 2.2:1, QR 1.1:1. Comment on the change.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liquidity comparison",
                statement:
                  "CR includes inventory; QR excludes it — QR is stricter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Current ratio = all current assets ÷ current liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Quick ratio excludes inventory — only liquid assets (cash, debtors) counted.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "QR is more conservative — shows ability to pay without selling stock.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both ratios improved — liquidity strengthened.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "QR now above 1:1 — can cover liabilities with liquid assets alone.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Improvement suggests better debtor collection or reduced liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Positive trend — liquidity position strengthened.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) CR includes inventory; QR excludes it. (b) Both improved; QR above 1:1 — stronger liquidity.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The current ratio is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(Current assets − inventory) ÷ current liabilities" },
              { id: "b", text: "Net profit ÷ current assets" },
              { id: "c", text: "Current liabilities ÷ current assets" },
              { id: "d", text: "Current assets ÷ current liabilities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current ratio",
                statement: "Current assets ÷ current liabilities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It measures whether short-term assets cover short-term debts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Current assets ÷ current liabilities.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Current assets are \\$60,000 and current liabilities are \\$40,000. Calculate the current ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "Current ratio", answer: 1.5, unit: ":1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current ratio",
                statement: "Current assets ÷ current liabilities.",
              },
            ],
            steps: [
              {
                reasoning: "60,000 ÷ 40,000.",
                working: "60000 / 40000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Current ratio = 1.5:1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.5:1",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Current assets are \\$90,000 including inventory of \\$40,000; current liabilities are \\$30,000. Calculate the current ratio and the quick ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current ratio", answer: 3, unit: ":1" },
              { label: "Quick ratio", answer: 1.67, unit: ":1" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity ratios",
                statement:
                  "CR = CA ÷ CL; QR = (CA − inventory) ÷ CL.",
              },
            ],
            steps: [
              {
                reasoning: "CR = 90,000 ÷ 30,000 = 3:1.",
                working: "90000 / 30000 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "QR = (90,000 − 40,000) ÷ 30,000 = 50,000 ÷ 30,000 ≈ 1.67:1.",
                working: "50000 / 30000 = 1.67",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CR 3:1; QR ≈ 1.67:1.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the quick ratio excludes inventory from current assets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quick ratio",
                statement:
                  "Inventory may not convert to cash quickly enough to pay short-term debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inventory is the least liquid current asset — it must be sold before it becomes cash.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The quick ratio is a more conservative test of whether the business could meet short-term debts immediately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A quick ratio below 1:1 suggests potential liquidity problems even if the current ratio looks healthy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Inventory is excluded because it may not convert to cash quickly — the quick ratio tests immediate liquidity.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A current ratio that is very high (e.g. 4:1) may indicate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Certain insolvency" },
              { id: "b", text: "Excellent liquidity with no downside" },
              { id: "c", text: "Very high profitability" },
              {
                id: "d",
                text: "Excess idle assets — money not being used efficiently"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Liquidity interpretation",
                statement:
                  "Too high = idle resources; too low = liquidity risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Over-liquid assets earn little or nothing — capital could be better invested.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Excess idle assets.",
          },
        },
        {
          id: "cieiacct-u3-ratios-liquidity-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Current assets \\$75,000 (including inventory \\$25,000); current liabilities \\$50,000. Calculate the current and quick ratios.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Interpret whether the business has a liquidity problem.",
              marks: 2,
            },
          ],
          stem: "A business reviews its liquidity position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity ratios",
                statement:
                  "CR = CA ÷ CL; QR = (CA − inventory) ÷ CL.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "CR = 75,000 ÷ 50,000 = 1.5:1; QR = (75,000 − 25,000) ÷ 50,000 = 1:1.",
                working: "75000/50000 = 1.5; 50000/50000 = 1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "CR of 1.5:1 is acceptable but QR of exactly 1:1 is borderline — the business can only just cover short-term debts without selling inventory, so liquidity needs monitoring.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) CR 1.5:1; QR 1:1. (b) Borderline — QR at minimum acceptable level.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-ratios-efficiency",
      title: "Efficiency ratios and gearing",
      skill:
        "Calculate debtor days, creditor days, inventory days and gearing ratio.",
      lesson: {
        sections: [
          {
            heading: "Debtor days",
            body: "**Debtor days** = (trade receivables ÷ credit sales) × 365. Measures how long customers take to pay. Lower is better — less cash tied up.",
          },
          {
            heading: "Creditor days",
            body: "**Creditor days** = (trade payables ÷ credit purchases) × 365. Measures how long the business takes to pay suppliers. Higher means the business is using suppliers' money longer.",
          },
          {
            heading: "Inventory days",
            body: "**Inventory days** = (closing inventory ÷ cost of sales) × 365. Measures how long stock sits before selling. Lower is better.",
          },
          {
            heading: "Gearing",
            body: "**Gearing ratio** = (non-current liabilities ÷ capital employed) × 100 or (borrowed capital ÷ total capital). High gearing = more fixed-interest debt = higher financial risk but potentially higher returns for shareholders.",
          },
        ],
        keyFormulas: [
          {
            name: "Debtor days",
            statement: "(Trade receivables ÷ credit sales) × 365",
          },
          {
            name: "Creditor days",
            statement: "(Trade payables ÷ credit purchases) × 365",
          },
          {
            name: "Inventory days",
            statement: "(Closing inventory ÷ cost of sales) × 365",
          },
          {
            name: "Gearing",
            statement: "(Non-current liabilities ÷ capital employed) × 100",
          },
        ],
        workedExample: {
          problem:
            "Receivables \\$50,000; credit sales \\$400,000; payables \\$30,000; credit purchases \\$300,000; inventory \\$25,000; cost of sales \\$250,000. Calculate debtor days, creditor days, inventory days.",
          solution:
            "Debtor days = 50,000/400,000×365 = 45.6 days. Creditor days = 30,000/300,000×365 = 36.5 days. Inventory days = 25,000/250,000×365 = 36.5 days.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-ratios-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Debtor days measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How long the business takes to pay suppliers" },
              { id: "b", text: "The proportion of debt financing" },
              { id: "c", text: "How long inventory is held" },
              {
                id: "d",
                text: "How long customers take to pay — receivables ÷ credit sales × 365",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debtor days",
                statement: "Receivables/sales × 365.",
              },
            ],
            steps: [
              {
                reasoning: "Debtor days = how long debtors take to pay.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) How long customers take to pay.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Trade receivables \\$60,000; credit sales \\$360,000. Calculate debtor days.",
          response: {
            type: "numeric",
            parts: [{ label: "Debtor days", answer: 60.8, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debtor days",
                statement: "Receivables/credit sales × 365.",
              },
            ],
            steps: [
              {
                reasoning: "60,000/360,000 × 365.",
                working: "60000/360000*365 = 60.83",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer (≈61 days).",
                working: "60.8 days",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60.8 days (≈61)",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Trade payables \\$45,000; credit purchases \\$270,000. Calculate creditor days.",
          response: {
            type: "numeric",
            parts: [{ label: "Creditor days", answer: 60.8, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Creditor days",
                statement: "Payables/credit purchases × 365.",
              },
            ],
            steps: [
              {
                reasoning: "45,000/270,000 × 365.",
                working: "45000/270000*365 = 60.83",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "60.8 days",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60.8 days (≈61)",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Closing inventory \\$30,000; cost of sales \\$300,000. Calculate inventory days.",
          response: {
            type: "numeric",
            parts: [{ label: "Inventory days", answer: 36.5, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inventory days",
                statement: "Inventory/CoS × 365.",
              },
            ],
            steps: [
              {
                reasoning: "30,000/300,000 × 365.",
                working: "30000/300000*365 = 36.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "36.5 days",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Lower days = faster stock turnover.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36.5 days",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Debtor days increased from 40 to 65 over the year. Explain what this means and its effect on the business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debtor days trend",
                statement: "Rising debtor days = slower collection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers are taking longer to pay — cash is tied up in receivables.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reduces liquidity and may indicate weaker credit control or customer financial stress.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Could lead to bad debts if customers can't pay — investigate credit policy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Slower collection; cash tied up; liquidity risk and possible bad debts.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business has non-current liabilities \\$100,000 and capital employed \\$250,000. Calculate the gearing ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "Gearing ratio", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gearing",
                statement: "Non-current liabilities ÷ capital employed × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Gearing = 100,000/250,000 × 100 = 40%.",
                working: "100000/250000*100 = 40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "40%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "40% is moderate gearing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40%",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Trade receivables \\$80,000; credit sales \\$480,000; trade payables \\$40,000; credit purchases \\$320,000; inventory \\$24,000; cost of sales \\$280,000. Calculate debtor days, creditor days and inventory days.",
          response: {
            type: "numeric",
            parts: [
              { label: "Debtor days", answer: 60.8, unit: "days" },
              { label: "Creditor days", answer: 45.6, unit: "days" },
              { label: "Inventory days", answer: 31.3, unit: "days" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency ratios",
                statement:
                  "Each uses the relevant balance ÷ relevant flow × 365.",
              },
            ],
            steps: [
              {
                reasoning: "Debtor days = 80,000/480,000 × 365 = 60.8.",
                working: "60.83",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creditor days = 40,000/320,000 × 365 = 45.6.",
                working: "45.63",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inventory days = 24,000/280,000 × 365 = 31.3.",
                working: "31.29",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State all three.",
                working: "60.8; 45.6; 31.3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Debtor 60.8; creditor 45.6; inventory 31.3 days",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "High gearing means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The business has no debt" },
              {
                id: "b",
                text: "A large proportion of capital comes from fixed-interest debt — higher risk but potentially higher returns",
              },
              { id: "c", text: "The business has high profits" },
              { id: "d", text: "The business is very liquid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gearing",
                statement: "Proportion of debt in capital structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High gearing = more borrowed capital = higher financial risk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) High debt proportion — higher risk, potential higher returns.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Receivables \\$70,000; credit sales \\$420,000; payables \\$35,000; credit purchases \\$280,000. Calculate debtor days and creditor days.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The business takes 61 days to collect from debtors but pays suppliers in 36 days. Explain the cash flow implication.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency ratios",
                statement: "Days = balance/flow × 365.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Debtor days = 70,000/420,000 × 365 = 60.8; creditor days = 35,000/280,000 × 365 = 45.6.",
                working: "60.8; 45.6",
                marks: 2,
                markCode: "M",
              },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning:
                  "The business waits 61 days for customer money but pays suppliers in 36 days — a 25-day gap.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This ties up cash in receivables — the business funds the gap itself.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Could improve by negotiating longer supplier terms or faster customer payment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Debtor 60.8; creditor 45.6 days. (b) 25-day cash gap — business funds it; improve terms.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain what gearing measures and why high gearing is risky.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "A company has equity \\$300,000 and debentures \\$100,000 (non-current liabilities). Calculate gearing and comment.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gearing",
                statement:
                  "Proportion of fixed-interest debt in capital structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Gearing = proportion of capital from fixed-interest sources (debt) vs equity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "High gearing = more debt = higher fixed interest payments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If profits fall, interest still must be paid — risk of inability to meet obligations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "But if profits are high, returns to shareholders are magnified (gearing effect).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Capital employed = 300,000 + 100,000 = \\$400,000.",
                working: "400000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Gearing = 100,000/400,000 × 100 = 25%.",
                working: "25%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "25% is low/moderate gearing — relatively low financial risk.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State ratio and comment.",
                working: "25% — low gearing",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Debt proportion; high gearing = higher risk but magnified returns. (b) 25% — low gearing, low risk.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Debtor days measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How long inventory is held before sale" },
              {
                id: "b",
                text: "How long customers take to pay their debts"
              },
              { id: "c", text: "How much debt the company has borrowed" },
              { id: "d", text: "How long the business takes to pay suppliers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debtor days",
                statement:
                  "(Trade receivables ÷ credit sales) × 365 — the average collection period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It shows how quickly credit customers settle their accounts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) How long customers take to pay.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trade receivables are \\$30,000 and credit sales are \\$365,000. Calculate debtor days.",
          response: {
            type: "numeric",
            parts: [{ label: "Debtor days", answer: 30, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debtor days",
                statement: "(Trade receivables ÷ credit sales) × 365.",
              },
            ],
            steps: [
              {
                reasoning: "30,000 ÷ 365,000 × 365.",
                working: "30000 / 365000 × 365",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Debtor days = 30 days.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30 days",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Closing inventory is \\$30,000 and cost of sales is \\$300,000. Calculate inventory days.",
          response: {
            type: "numeric",
            parts: [{ label: "Inventory days", answer: 36.5, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inventory days",
                statement: "(Closing inventory ÷ cost of sales) × 365.",
              },
            ],
            steps: [
              {
                reasoning: "30,000 ÷ 300,000 × 365.",
                working: "30000 / 300000 × 365",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inventory days = 36.5 days.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36.5 days",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the risks and potential benefits of high gearing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gearing",
                statement:
                  "High gearing = more debt financing — magnifies both profits and losses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Risk: fixed interest must be paid even in poor years, increasing the chance of financial difficulty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: if profits exceed the interest cost, returns to shareholders are magnified (gearing effect).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High gearing is risky for volatile businesses; low gearing is safer but may limit growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High gearing magnifies returns but increases financial risk — interest must be paid regardless of profit.",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Non-current liabilities are \\$50,000 and capital employed is \\$200,000. Calculate the gearing ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "Gearing ratio", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gearing",
                statement: "(Non-current liabilities ÷ capital employed) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "50,000 ÷ 200,000 × 100.",
                working: "50000 / 200000 × 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gearing = 25%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "25% gearing is relatively low — the business relies mostly on equity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cieiacct-u3-ratios-efficiency-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Trade payables are \\$20,000 and credit purchases are \\$200,000. Calculate creditor days.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain what a rising creditor days figure might indicate about the business.",
              marks: 2,
            },
          ],
          stem: "A business analyses its efficiency ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Creditor days",
                statement: "(Trade payables ÷ credit purchases) × 365.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Creditor days = 20,000 ÷ 200,000 × 365 = 36.5 days.",
                working: "20000 / 200000 × 365 = 36.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Rising creditor days means the business is taking longer to pay suppliers — it is using suppliers' money longer, which may indicate cash flow pressure or good negotiating.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 36.5 days. (b) Business is paying suppliers more slowly — using their funds longer, possibly a sign of cash pressure.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-cashflow",
      title: "Cash flow statements",
      skill: "Prepare and interpret a simple cash flow statement.",
      lesson: {
        sections: [
          {
            heading: "Purpose",
            body: "A **cash flow statement** shows how cash moved during the period — where it came from and where it went. Profit doesn't equal cash flow because of non-cash items (depreciation), timing differences (accruals/prepayments) and capital items.",
          },
          {
            heading: "Three sections",
            body: "**Operating activities**: cash from day-to-day trading (receipts from customers, payments to suppliers/employees). **Investing activities**: buying/selling non-current assets. **Financing activities**: issuing shares, borrowing, repaying loans, dividends paid.",
          },
          {
            heading: "Preparation",
            body: "Start with opening cash, add net cash from operating, investing and financing activities, arrive at closing cash. Depreciation is added back (non-cash). Changes in working capital adjust operating cash flow.",
          },
        ],
        keyFormulas: [
          {
            name: "Closing cash",
            statement:
              "Opening cash + net operating + net investing + net financing",
          },
          {
            name: "Operating cash flow",
            statement:
              "Profit adjusted for non-cash items and working capital changes",
          },
        ],
        workedExample: {
          problem:
            "Opening cash \\$10,000; operating inflow \\$50,000, outflow \\$35,000; bought equipment \\$20,000; borrowed \\$15,000; paid dividends \\$5,000. Closing cash?",
          solution:
            "Operating +15,000; investing −20,000; financing +10,000 (15,000−5,000). Closing = 10,000+15,000−20,000+10,000 = \\$15,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-cashflow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cash flow statement shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All transactions including non-cash" },
              { id: "b", text: "Profit for the year only" },
              {
                id: "c",
                text: "Cash inflows and outflows classified by activity type",
              },
              { id: "d", text: "Only bank transactions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow statement",
                statement: "Cash movements by activity.",
              },
            ],
            steps: [
              {
                reasoning: "Cash flow = cash movements classified.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cash inflows/outflows by activity.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an INVESTING activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying wages" },
              { id: "b", text: "Receiving cash from customers" },
              { id: "c", text: "Issuing shares" },
              { id: "d", text: "Buying a non-current asset" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Investing",
                statement: "Non-current asset transactions.",
              },
            ],
            steps: [
              {
                reasoning: "Buying non-current assets = investing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Buying a non-current asset.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a FINANCING activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Receiving payment from a debtor" },
              { id: "b", text: "Buying inventory" },
              { id: "c", text: "Paying rent" },
              { id: "d", text: "Paying dividends to shareholders" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Financing",
                statement: "Capital structure transactions.",
              },
            ],
            steps: [
              {
                reasoning: "Dividends = financing (distribution to owners).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Paying dividends.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Depreciation is added back in the cash flow statement because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases profit" },
              {
                id: "b",
                text: "It's a non-cash expense — no cash actually left the business",
              },
              { id: "c", text: "It's a liability" },
              { id: "d", text: "It's an asset" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-cash items",
                statement: "Depreciation reduces profit but no cash flows.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depreciation is non-cash — added back to profit to get cash flow.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Non-cash expense.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening cash \\$15,000; net operating inflow \\$40,000; bought equipment \\$25,000; borrowed \\$10,000; paid dividends \\$8,000. Calculate closing cash.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing cash", answer: 32000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing cash",
                statement: "Opening + operating + investing + financing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Operating +40,000; investing −25,000; financing +10,000−8,000 = +2,000.",
                working: "40000 - 25000 + 2000 = 37000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing = 15,000 + 40,000 − 25,000 + 2,000.",
                working:
                  "15000 + 37000 = 52000... recompute: 15000 + 40000 - 25000 + 10000 - 8000 = 32000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$32,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$32,000",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Net profit \\$50,000 includes depreciation of \\$8,000. Calculate operating cash flow before working capital changes.",
          response: {
            type: "numeric",
            parts: [{ label: "Operating cash flow", answer: 58000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Operating CF",
                statement: "Net profit + depreciation (non-cash add-back).",
              },
            ],
            steps: [
              {
                reasoning: "Add back depreciation: 50,000 + 8,000.",
                working: "50000 + 8000 = 58000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$58,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Working capital changes would adjust further.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$58,000 (before working capital adjustments)",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "A business has net profit \\$60,000, depreciation \\$10,000, increase in receivables \\$5,000, decrease in payables \\$3,000. Calculate operating cash flow.",
          response: {
            type: "numeric",
            parts: [{ label: "Operating cash flow", answer: 62000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Operating CF",
                statement:
                  "NP + depreciation − increase in receivables + decrease in payables... careful: increase in receivables reduces cash; decrease in payables reduces cash.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Start: NP + depreciation = 60,000 + 10,000 = \\$70,000.",
                working: "70000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increase in receivables \\$5,000 = cash not yet received — subtract.",
                working: "-5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Decrease in payables \\$3,000 = paid suppliers faster — subtract.",
                working: "-3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Operating CF = 70,000 − 5,000 − 3,000 = \\$62,000.",
                working: "70000 - 8000 = 62000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$62,000",
            commonErrors: ["Wrong direction on working capital adjustments."],
          },
        },
        {
          id: "cieiacct-u3-cashflow-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a cash flow statement important even when the business shows a profit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit vs cash",
                statement:
                  "Profit ≠ cash — accruals, depreciation and capital items differ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit includes non-cash items (depreciation) and accruals — cash flow shows actual cash movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A profitable business can still run out of cash if sales are on credit or it invests heavily.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cash flow shows whether the business can meet its obligations and fund growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Profit ≠ cash; cash flow shows actual liquidity and ability to pay debts.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Classify each as operating, investing or financing: (i) cash received from customers, (ii) purchase of machinery, (iii) issue of shares, (iv) payment of interest on debentures.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain why depreciation is added back in operating cash flow.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow classification",
                statement:
                  "Operating = trading; investing = non-current assets; financing = capital structure.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "(i) Operating; (ii) Investing; (iii) Financing; (iv) Operating (interest is a trading/financing cost — typically operating or financing depending on convention; IGCSE usually treats interest paid as operating or financing — accept either with justification).",
                marks: 4,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Depreciation reduces profit but involves no cash outflow — it's an allocation of past cost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Adding it back converts profit to cash generated from operations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Operating, investing, financing, operating/financing. (b) Non-cash expense — added back.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Opening cash \\$20,000. Operating: receipts \\$150,000, payments \\$120,000. Investing: bought machinery \\$30,000, sold old equipment \\$8,000. Financing: borrowed \\$20,000, paid dividends \\$10,000. Prepare the cash flow statement and calculate closing cash.",
              marks: 6,
            },
            {
              label: "b",
              prompt: "Comment on the business's cash position.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cash flow",
                statement:
                  "Closing = opening + net operating + net investing + net financing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Net operating = 150,000 − 120,000 = \\$30,000 inflow.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Net investing = 8,000 − 30,000 = −\\$22,000 outflow.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Net financing = 20,000 − 10,000 = \\$10,000 inflow.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Closing = 20,000 + 30,000 − 22,000 + 10,000 = \\$38,000.",
                working: "20000 + 30000 - 22000 + 10000 = 38000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State closing cash.",
                working: "\\$38,000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Show the three sections clearly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Cash increased from \\$20,000 to \\$38,000 — positive cash generation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Operating inflow \\$30,000 is healthy; investing outflow funded partly by borrowing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Operating +\\$30,000; investing −\\$22,000; financing +\\$10,000; closing cash \\$38,000. (b) Cash grew — healthy position.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The three sections of a cash flow statement are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income, expenses and profit" },
              { id: "b", text: "Trading, administration and distribution" },
              {
                id: "c",
                text: "Operating, investing and financing activities"
              },
              { id: "d", text: "Assets, liabilities and capital" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash flow statement",
                statement:
                  "Shows cash movements in operating, investing and financing activities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "These three sections classify all cash movements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Operating, investing and financing.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Opening cash \\$8,000; net cash from operating \\$12,000; net cash from investing −\\$5,000; net cash from financing \\$3,000. Calculate closing cash.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing cash", answer: 18000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing cash",
                statement:
                  "Opening cash + net operating + net investing + net financing.",
              },
            ],
            steps: [
              {
                reasoning: "8,000 + 12,000 − 5,000 + 3,000.",
                working: "8000 + 12000 - 5000 + 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing cash = \\$18,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$18,000",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a profitable business may still have poor cash flow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit vs cash",
                statement:
                  "Profit is calculated on accruals; cash flow tracks actual money received and paid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit sales increase profit before cash is received — receivables may build up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-cash expenses like depreciation reduce profit but involve no cash outflow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Timing differences (prepayments, accruals) and capital spending can make cash flow differ from profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Profit ≠ cash because of credit sales, non-cash expenses, timing differences and capital spending — cash flow measures actual cash movement.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Depreciation is added back when calculating operating cash flow because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Part of investing activities" },
              { id: "b", text: "A cash payment to suppliers" },
              { id: "c", text: "A non-cash expense" },
              { id: "d", text: "A financing outflow" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation",
                statement:
                  "Non-cash expense — deducted in profit but no cash leaves the business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Since no cash was paid for depreciation, it is added back to profit to find cash generated.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A non-cash expense.",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Opening cash \\$20,000; net cash from operating \\$25,000; net cash from investing −\\$30,000; net cash from financing \\$15,000. Calculate closing cash.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing cash", answer: 30000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing cash",
                statement:
                  "Opening cash + net operating + net investing + net financing.",
              },
            ],
            steps: [
              {
                reasoning: "20,000 + 25,000 − 30,000 + 15,000.",
                working: "20000 + 25000 - 30000 + 15000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net change = +\\$10,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing cash = \\$30,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$30,000",
          },
        },
        {
          id: "cieiacct-u3-cashflow-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Classify each item as operating, investing or financing: (i) cash received from customers; (ii) purchase of a delivery van; (iii) repayment of a bank loan; (iv) payment of dividends.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why dividends paid appear in financing activities rather than operating activities.",
              marks: 2,
            },
          ],
          stem: "A business prepares its cash flow statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash flow sections",
                statement:
                  "Operating = trading; investing = non-current assets; financing = capital and loans.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "(i) Operating; (ii) Investing; (iii) Financing; (iv) Financing.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Dividends are distributions to owners — a return on capital, not a cost of trading, so they belong in financing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Like loan repayments and share issues, dividends relate to how the business is financed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Op, Inv, Fin, Fin. (b) Dividends are returns to owners — financing, not trading.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-ratios-exam",
      title: "Ratio analysis exam practice",
      skill: "Apply ratio analysis to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "Ratio questions give you figures and ask you to calculate specific ratios. Show the formula, substitute, calculate, then interpret. Always express ratios correctly (as %, :1, or days).",
          },
          {
            heading: "Common ratios",
            body: "GPM = GP/sales; PM = NP/sales; ROCE = PBIT/capital employed; CR = CA/CL; QR = (CA−inv)/CL; debtor days = receivables/credit sales × 365; gearing = non-current liabilities/capital employed.",
          },
        ],
        keyFormulas: [
          {
            name: "All ratios",
            statement: "Apply formula → substitute → calculate → interpret",
          },
        ],
        workedExample: {
          problem:
            "Sales \\$200k, GP \\$50k, NP \\$20k, CA \\$80k, CL \\$40k, receivables \\$30k, credit sales \\$180k, NCL \\$60k, CE \\$200k. Calculate key ratios.",
          solution: "GPM 25%; PM 10%; CR 2:1; debtor days 60.8; gearing 30%.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-ratios-exam-q1",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$250,000; gross profit \\$75,000; net profit \\$37,500; capital employed \\$150,000. Calculate GPM, PM and ROCE.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratios",
                statement: "Margins and ROCE.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "GPM = 75,000/250,000 = 30%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "PM = 37,500/250,000 = 15%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "ROCE = 37,500/150,000 = 25%.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "GPM 30%; PM 15%; ROCE 25%",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q2",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Current assets \\$100,000 (inventory \\$40,000); current liabilities \\$50,000. Calculate current ratio and quick ratio.",
              marks: 4,
            },
            { label: "b", prompt: "Comment on liquidity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity",
                statement: "CR = CA/CL; QR = (CA−inv)/CL.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "CR = 100,000/50,000 = 2:1.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "QR = (100,000−40,000)/50,000 = 60,000/50,000 = 1.2:1.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both above 1 — adequate liquidity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "QR 1.2 shows liquid assets cover liabilities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) CR 2:1; QR 1.2:1. (b) Adequate liquidity.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q3",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Receivables \\$50,000; credit sales \\$300,000. Calculate debtor days.",
              marks: 2,
            },
            { label: "b", prompt: "Interpret the result.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debtor days",
                statement: "Receivables/credit sales × 365.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "50,000/300,000 × 365 = 60.8 days.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Customers take ~61 days to pay — moderate collection period.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Could be improved with tighter credit control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 60.8 days. (b) ~61-day collection period — moderate.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q4",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt: "Equity \\$200,000; debentures \\$50,000. Calculate gearing.",
              marks: 2,
            },
            { label: "b", prompt: "Comment on the financial risk.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gearing", statement: "NCL/CE × 100." },
            ],
            steps: [
              {
                part: "a",
                reasoning: "CE = 250,000; gearing = 50,000/250,000 = 20%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "20% is low gearing — relatively low financial risk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Most capital is equity — safer but lower potential return magnification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 20%. (b) Low gearing — low financial risk.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q5",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Opening cash \\$10,000; operating inflow \\$60,000, outflow \\$45,000; bought equipment \\$15,000; issued shares \\$20,000; paid dividends \\$5,000. Calculate closing cash.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "State which activities each item belongs to.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cash flow",
                statement:
                  "Closing = opening + operating + investing + financing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Operating +15,000; investing −15,000; financing +20,000−5,000 = +15,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Closing = 10,000 + 15,000 − 15,000 + 15,000 = \\$25,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State closing cash.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Operating = trading; investing = equipment; financing = shares + dividends.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) \\$25,000. (b) Operating/investing/financing as classified.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q6",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "A business has: sales \\$400k, GP \\$100k, NP \\$40k, CA \\$160k, CL \\$80k, inventory \\$50k, receivables \\$60k, credit sales \\$360k, NCL \\$80k, CE \\$300k. Calculate GPM, PM, ROCE, CR, QR, debtor days and gearing.",
              marks: 6,
            },
            {
              label: "b",
              prompt: "Comment on the overall financial position.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "All ratios",
                statement: "Apply each formula correctly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GPM = 100/400 = 25%; PM = 40/400 = 10%; ROCE = 40/300 = 13.3%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "CR = 160/80 = 2:1; QR = (160−50)/80 = 1.375:1.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Debtor days = 60/360×365 = 60.8; gearing = 80/300 = 26.7%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Margins are modest; liquidity adequate; gearing moderate — balanced position.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "ROCE of 13.3% could be improved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GPM 25%, PM 10%, ROCE 13.3%, CR 2:1, QR 1.375:1, debtor 60.8 days, gearing 26.7%. (b) Balanced but ROCE could improve.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q7",
          difficulty: "core",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$150,000; gross profit \\$45,000. Calculate the gross profit margin.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Net profit is \\$22,500. Calculate the profit margin.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Current assets \\$70,000; current liabilities \\$50,000. Calculate the current ratio.",
              marks: 2,
            },
          ],
          stem: "A business calculates its key ratios for the year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio formulas",
                statement:
                  "GPM = GP/sales; PM = NP/sales; CR = CA/CL.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "GPM = 45,000 ÷ 150,000 = 30%.",
                working: "45000 / 150000 = 30%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "PM = 22,500 ÷ 150,000 = 15%.",
                working: "22500 / 150000 = 15%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "CR = 70,000 ÷ 50,000 = 1.4:1.",
                working: "70000 / 50000 = 1.4",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "GPM 30%; PM 15%; CR 1.4:1.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q8",
          difficulty: "core",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Trade receivables \\$25,000; credit sales \\$250,000. Calculate debtor days.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Trade payables \\$15,000; credit purchases \\$150,000. Calculate creditor days.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Closing inventory \\$20,000; cost of sales \\$200,000. Calculate inventory days.",
              marks: 2,
            },
          ],
          stem: "A business calculates its operating cycle ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Days ratios",
                statement:
                  "Days = balance ÷ annual flow × 365.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Debtor days = 25,000 ÷ 250,000 × 365 = 36.5 days.",
                working: "25000 / 250000 × 365 = 36.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Creditor days = 15,000 ÷ 150,000 × 365 = 36.5 days.",
                working: "15000 / 150000 × 365 = 36.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Inventory days = 20,000 ÷ 200,000 × 365 = 36.5 days.",
                working: "20000 / 200000 × 365 = 36.5",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Debtor 36.5; creditor 36.5; inventory 36.5 days.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Non-current liabilities are \\$45,000 and capital employed is \\$150,000. Calculate the gearing ratio and comment on the level of gearing.",
          response: {
            type: "numeric",
            parts: [{ label: "Gearing ratio", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gearing",
                statement: "(Non-current liabilities ÷ capital employed) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "45,000 ÷ 150,000 × 100.",
                working: "45000 / 150000 × 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gearing = 30% — moderate gearing; a reasonable level of debt financing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "30% — moderate, neither very high nor very low.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30% — moderate gearing.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q10",
          difficulty: "core",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "Profit before interest and tax is \\$40,000 and capital employed is \\$250,000. Calculate ROCE.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Current assets \\$90,000; current liabilities \\$60,000. Calculate the current ratio.",
              marks: 2,
            },
          ],
          stem: "A business calculates ROCE and the current ratio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ROCE and CR",
                statement: "ROCE = PBIT ÷ CE; CR = CA ÷ CL.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "ROCE = 40,000 ÷ 250,000 × 100 = 16%.",
                working: "40000 / 250000 × 100 = 16",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "CR = 90,000 ÷ 60,000 = 1.5:1.",
                working: "90000 / 60000 = 1.5",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "ROCE 16%; CR 1.5:1.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q11",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$200,000; gross profit \\$50,000; net profit \\$24,000. Calculate the gross profit margin and profit margin.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Current assets \\$80,000 including inventory \\$20,000; current liabilities \\$40,000. Calculate the current ratio and quick ratio.",
              marks: 3,
            },
          ],
          stem: "A business analyses its profitability and liquidity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio formulas",
                statement:
                  "GPM = GP/sales; PM = NP/sales; CR = CA/CL; QR = (CA−inv)/CL.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GPM = 50,000 ÷ 200,000 = 25%; PM = 24,000 ÷ 200,000 = 12%.",
                working: "50000/200000 = 25%; 24000/200000 = 12%",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "CR = 80,000 ÷ 40,000 = 2:1; QR = (80,000 − 20,000) ÷ 40,000 = 1.5:1.",
                working: "80000/40000 = 2; 60000/40000 = 1.5",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GPM 25%; PM 12%. (b) CR 2:1; QR 1.5:1.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Trade receivables are \\$36,000 and credit sales are \\$180,000. Calculate debtor days.",
          response: {
            type: "numeric",
            parts: [{ label: "Debtor days", answer: 73, unit: "days" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debtor days",
                statement: "(Trade receivables ÷ credit sales) × 365.",
              },
            ],
            steps: [
              {
                reasoning: "36,000 ÷ 180,000 × 365.",
                working: "36000 / 180000 × 365",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.2 × 365 = 73 days.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Debtor days = 73 days.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "73 days",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q13",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Sales are \\$250,000 and the gross profit margin is 28%. Calculate gross profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The profit margin is 12%. Calculate net profit.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State what a rising gross profit margin suggests about the business.",
              marks: 2,
            },
          ],
          stem: "A business works backwards from its ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio reversal",
                statement:
                  "GP = GPM% × sales; NP = PM% × sales.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GP = 28% × 250,000 = \\$70,000.",
                working: "0.28 × 250000 = 70000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "NP = 12% × 250,000 = \\$30,000.",
                working: "0.12 × 250000 = 30000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Better buying prices, improved pricing policy or a shift to higher-margin products — trading profitability is improving.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GP \\$70,000. (b) NP \\$30,000. (c) Trading profitability improving — better buying or pricing.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Current assets are \\$50,000 including inventory of \\$10,000; current liabilities are \\$25,000. Calculate the current ratio and quick ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current ratio", answer: 2, unit: ":1" },
              { label: "Quick ratio", answer: 1.6, unit: ":1" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Liquidity ratios",
                statement: "CR = CA ÷ CL; QR = (CA − inventory) ÷ CL.",
              },
            ],
            steps: [
              {
                reasoning: "CR = 50,000 ÷ 25,000 = 2:1.",
                working: "50000 / 25000 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "QR = (50,000 − 10,000) ÷ 25,000 = 40,000 ÷ 25,000 = 1.6:1.",
                working: "40000 / 25000 = 1.6",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Both ratios stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CR 2:1; QR 1.6:1.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q15",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Opening cash \\$15,000. Cash received from customers \\$60,000 and paid to suppliers and expenses \\$45,000. Calculate net cash from operating activities.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A van was bought for \\$25,000, a loan of \\$20,000 was received and dividends of \\$8,000 were paid. Calculate net cash from financing activities.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the closing cash balance.",
              marks: 2,
            },
          ],
          stem: "A business prepares a simple cash flow statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cash flow",
                statement:
                  "Closing cash = opening + net operating + net investing + net financing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Net operating = 60,000 − 45,000 = \\$15,000.",
                working: "60000 - 45000 = 15000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Net financing = 20,000 − 8,000 = \\$12,000 (van purchase is investing).",
                working: "20000 - 8000 = 12000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Closing = 15,000 + 15,000 − 25,000 + 12,000 = \\$17,000.",
                working: "15000 + 15000 - 25000 + 12000 = 17000",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) \\$15,000. (b) \\$12,000. (c) Closing cash \\$17,000.",
          },
        },
        {
          id: "cieiacct-u3-ratios-exam-q16",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$300,000; gross profit \\$90,000. Calculate the gross profit margin.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Net profit \\$45,000 and capital employed \\$300,000. Calculate the profit margin and ROCE.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Current assets \\$120,000 including inventory \\$40,000; current liabilities \\$60,000. Calculate the current and quick ratios.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Trade receivables \\$30,000; credit sales \\$270,000; non-current liabilities \\$90,000; capital employed \\$300,000. Calculate debtor days and gearing.",
              marks: 2,
            },
          ],
          stem: "A business calculates all its key ratios for the exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "All ratios",
                statement:
                  "Apply formula → substitute → calculate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "GPM = 90,000 ÷ 300,000 = 30%.",
                working: "90000 / 300000 = 30%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "PM = 45,000 ÷ 300,000 = 15%; ROCE = 45,000 ÷ 300,000 = 15%.",
                working: "45000 / 300000 = 15%",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "CR = 120,000 ÷ 60,000 = 2:1; QR = (120,000 − 40,000) ÷ 60,000 = 1.33:1.",
                working: "120000/60000 = 2; 80000/60000 = 1.33",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Debtor days = 30,000 ÷ 270,000 × 365 ≈ 40.6 days; gearing = 90,000 ÷ 300,000 = 30%.",
                working: "30000/270000 × 365 = 40.6; 90000/300000 = 30%",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GPM 30%. (b) PM 15%; ROCE 15%. (c) CR 2:1; QR 1.33:1. (d) Debtor ≈40.6 days; gearing 30%.",
          },
        },
      ],
    },
  ],
};

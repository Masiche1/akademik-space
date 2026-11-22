import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cieibs-u3-lesson-3-4",
  code: "3-4",
  title: "Financial Ratios and Interpretation",
  goal: "I CAN calculate and interpret profitability and liquidity ratios.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Finance: ratio analysis",
  ],
  vocabulary: [
    {
      term: "Profitability ratio",
      definition:
        "Measure of how much profit is earned relative to sales or assets.",
    },
    {
      term: "Gross profit margin",
      definition: "Gross profit as a percentage of revenue.",
    },
    {
      term: "Net profit margin",
      definition: "Net profit as a percentage of revenue.",
    },
    {
      term: "Liquidity ratio",
      definition: "Measure of a firm's ability to pay short-term debts.",
    },
    {
      term: "Current ratio",
      definition: "Current assets divided by current liabilities.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u3-s4-ratios",
      title: "Financial ratio analysis",
      skill: "Calculate and interpret profitability and liquidity ratios.",
      lesson: {
        sections: [
          {
            heading: "Profitability ratios",
            body: "Gross profit margin = gross profit / revenue × 100 — shows how much is left after direct costs. Net profit margin = net profit / revenue × 100 — shows overall efficiency after all costs. Higher margins mean better performance, but compare against industry averages.",
          },
          {
            heading: "Liquidity ratios",
            body: "Current ratio = current assets / current liabilities — above 1 means short-term debts can be covered; below 1 signals liquidity risk. Ratios matter more than raw profit figures because they show performance relative to size.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "gross profit / revenue × 100" },
          { name: "Net margin", statement: "net profit / revenue × 100" },
          {
            name: "Current ratio",
            statement: "current assets / current liabilities",
          },
        ],
        workedExample: {
          problem:
            "Revenue $100,000; gross profit $40,000; net profit $10,000; current assets $25,000; current liabilities $20,000. Calculate margins and current ratio.",
          solution:
            "Gross margin = 40%; net margin = 10%; current ratio = 25/20 = 1.25.",
        },
      },
      questions: [
        {
          id: "cieibs-u3-rat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Revenue is $50,000 and net profit is $5,000. What is the net profit margin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5%" },
              { id: "b", text: "10%" },
              { id: "c", text: "95%" },
              { id: "d", text: "50%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Net margin",
                statement: "Net profit / revenue × 100.",
              },
            ],
            steps: [
              {
                reasoning: "$5000 / $50000 × 100 = 10\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10%",
          },
        },
        {
          id: "cieibs-u3-rat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Current assets are $30,000 and current liabilities are $15,000. Calculate and interpret the current ratio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Current ratio",
                statement: "Current assets / current liabilities.",
              },
            ],
            steps: [
              { reasoning: "$30000 / $15000 = 2$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Ratio of 2 means short-term debts are covered twice over — healthy liquidity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 — comfortably able to pay short-term debts",
          },
        },
        {
          id: "cieibs-u3-rat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Firm A has net profit margin of 12%; Firm B has 4%. Both have similar revenue. What does this tell you, and what could explain the difference?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio interpretation",
                statement: "Higher margin = more profit per dollar of sales.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Firm A keeps 12 cents profit per dollar of sales; Firm B only 4 cents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible causes: lower costs, higher prices, better efficiency, or different product mix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Margins must be compared within the same industry for fairness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A is more profitable per sale — likely lower costs or premium pricing",
          },
        },
        {
          id: "cieibs-u3-rat-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A business has rising profits but its current ratio has fallen from 1.8 to 0.9 over two years. Explain why this combination is worrying.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio analysis",
                statement:
                  "Profitability and liquidity measure different risks.",
              },
            ],
            steps: [
              {
                reasoning: "Profits are rising — the business is earning well.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Current ratio below 1 means current liabilities exceed current assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The firm may struggle to pay short-term debts despite being profitable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Worrying because illiquidity can force borrowing or collapse even with profits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Profitable but illiquid — cannot reliably pay short-term debts, risking failure",
          },
        },
        {
          id: "cieibs-u3-rat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the current ratio formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current assets / current liabilities" },
              { id: "b", text: "Net profit / total assets" },
              { id: "c", text: "Gross profit / revenue x 100" },
              { id: "d", text: "Revenue / number of employees" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current ratio",
                statement: "Current assets / current liabilities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current ratio measures short-term liquidity coverage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Current assets / current liabilities",
          },
        },
        {
          id: "cieibs-u3-rat-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gross profit margin measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sales growth year on year" },
              { id: "b", text: "Profit after all costs as % of revenue" },
              { id: "c", text: "Profit after direct costs as % of revenue" },
              { id: "d", text: "Total assets / total liabilities" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gross margin",
                statement:
                  "Gross profit / revenue x 100 — after direct costs only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gross margin isolates performance before indirect costs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Profit after direct costs as % of revenue",
          },
        },
        {
          id: "cieibs-u3-rat-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Revenue is $80,000, gross profit is $32,000 and net profit is $8,000. (a) Calculate the gross profit margin. (b) Calculate the net profit margin.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "%" },
              { label: "b", answer: 10, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margins",
                statement: "Margin = profit / revenue x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Gross margin = 32000/80000 x 100 = 40%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net margin = 8000/80000 x 100 = 10%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 40%, b) 10%",
          },
        },
        {
          id: "cieibs-u3-rat-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm has a current ratio of 1.4. Explain what this indicates about its liquidity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio interpretation",
                statement:
                  "Current ratio above 1 means short-term debts are covered.",
              },
            ],
            steps: [
              {
                reasoning: "Current assets exceed current liabilities by 40%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The firm can comfortably meet short-term obligations — healthy liquidity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ratio 1.4 = healthy liquidity, debts easily covered",
          },
        },
        {
          id: "cieibs-u3-rat-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The net profit margin is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Net profit / revenue x 100" },
              { id: "b", text: "Gross profit / total costs" },
              { id: "c", text: "Net profit / total assets" },
              { id: "d", text: "Revenue / net profit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net margin",
                statement: "Net profit / revenue x 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net margin shows overall efficiency after all costs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Net profit / revenue x 100",
          },
        },
        {
          id: "cieibs-u3-rat-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Current assets are $60,000 and current liabilities are $40,000. (a) Calculate the current ratio. (b) If current assets fall to $30,000 while liabilities stay at $40,000, recalculate the ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, unit: "ratio" },
              { label: "b", answer: 0.75, unit: "ratio" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current ratio",
                statement: "Current assets / current liabilities.",
              },
            ],
            steps: [
              {
                reasoning: "Ratio = 60000/40000 = 1.5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New ratio = 30000/40000 = 0.75 — below 1, liquidity risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1.5, b) 0.75",
          },
        },
        {
          id: "cieibs-u3-rat-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why businesses should compare their ratios against industry averages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benchmarking",
                statement:
                  "Ratios matter relative to competitors and industry norms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A margin that looks good alone may be poor versus rivals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Industry averages reveal whether performance is competitive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Comparison shows true competitive position",
          },
        },
        {
          id: "cieibs-u3-rat-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A current ratio below 1 indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No need for working capital" },
              { id: "b", text: "Excellent liquidity" },
              { id: "c", text: "Maximum profitability" },
              {
                id: "d",
                text: "Potential liquidity problems — short-term debts may not be covered",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity risk",
                statement:
                  "Current ratio below 1 signals inability to cover short-term debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assets below liabilities means debts may go unpaid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Potential liquidity problems",
          },
        },
        {
          id: "cieibs-u3-rat-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Revenue is $250,000; cost of goods sold is $150,000; other expenses are $60,000. (a) Calculate the gross profit margin. (b) Calculate the net profit margin.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "%" },
              { label: "b", answer: 16, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margins",
                statement:
                  "Gross margin = GP/revenue; net margin = NP/revenue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gross profit = 250000 - 150000 = 100000; gross margin = 100000/250000 = 40%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Net profit = 100000 - 60000 = 40000; net margin = 40000/250000 = 16%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 40%, b) 16%",
          },
        },
        {
          id: "cieibs-u3-rat-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A business has a current ratio of 0.8 and a net margin of 4%. Evaluate its financial position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio evaluation",
                statement: "Interpret ratios together for a full picture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Current ratio 0.8 means current liabilities exceed assets — liquidity risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Net margin 4% is thin — small buffer against shocks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combined: weak liquidity plus low profitability is a dangerous position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justified conclusion recommending action, e.g. improve cash collection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Weak liquidity and thin margin — poor financial health",
          },
        },
        {
          id: "cieibs-u3-rat-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ratio best measures profitability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stock turnover" },
              { id: "b", text: "Current ratio" },
              { id: "c", text: "Gross profit margin" },
              { id: "d", text: "Debt ratio" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profitability ratios",
                statement: "Gross margin and net margin measure profitability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Margins express profit as % of revenue — profitability measures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Gross profit margin",
          },
        },
        {
          id: "cieibs-u3-rat-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define gross profit margin, net profit margin, current ratio. (b) What is gross profit margin? (c) What is the current ratio? (d) What does a current ratio above 1 mean? (e) Revenue $120,000, gross profit $48,000 — calculate gross margin. (f) Net profit $12,000 — calculate net margin. (g) Current assets $35,000, liabilities $28,000 — calculate current ratio. (h) Evaluate the firm's performance using all three ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio analysis",
                statement: "Calculate and interpret all three ratios.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All three definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Gross profit / revenue x 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Current assets / current liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Short-term debts are covered — healthy liquidity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Gross margin = 48000/120000 = 40%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Net margin = 12000/120000 = 10%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Current ratio = 35000/28000 = 1.25.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Good margins and healthy liquidity — strong overall performance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ratio calculations and evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u3-rat-notes",
      title: "Financial ratios — revision notes",
      summary: "Gross/net margins, current ratio, interpretation vs industry.",
      sections: [
        {
          heading: "Key skills",
          body: "Memorise the three formulas; always interpret with 'compared to what?' — industry averages or previous years.",
        },
        {
          heading: "Exam tips",
          body: "Show the calculation then one sentence of interpretation. A number without meaning loses marks.",
        },
      ],
    },
  ],
};

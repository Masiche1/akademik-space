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
              { id: "c", text: "50%" },
              { id: "d", text: "95%" },
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

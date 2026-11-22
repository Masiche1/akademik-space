import type { Lesson } from "../../../types.ts";

export const lesson267: Lesson = {
  id: "cieibs-u2-lesson-2-7",
  code: "2-7",
  title: "Economic Environment and Business Cycle",
  goal: "I CAN explain economic indicators and how business cycle affects business.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: economic environment",
  ],

  vocabulary: [
    {
      term: "Economic environment",
      definition: "Overall economic conditions.",
    },
    {
      term: "Business cycle",
      definition: "Fluctuations in economic activity.",
    },
    { term: "Inflation", definition: "Rising general price level." },
    { term: "Interest rate", definition: "Cost of borrowing money." },
    { term: "Exchange rate", definition: "Value of one currency in another." },
    { term: "Economic growth", definition: "Increase in economic output." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s7-econ",
      title: "Economic environment",
      skill: "Understand economic indicators and business cycle.",
      lesson: {
        sections: [
          {
            heading: "Economic indicators",
            body: "Inflation: rising prices reduce purchasing power. Interest rates: cost of borrowing — high rates discourage investment/consumer spending. Exchange rates: affect import/export costs. Economic growth: expansion creates opportunities; recession creates challenges.",
          },
          {
            heading: "Business cycle",
            body: "Boom: high growth, high demand, rising prices. Recession: low growth, falling demand, unemployment. Recovery: gradual improvement. Businesses must adapt to different phases.",
          },
        ],
        keyFormulas: [
          { name: "Inflation", statement: "rising price level" },
          { name: "Interest rate", statement: "cost of borrowing" },
          { name: "Business cycle", statement: "boom→recession→recovery" },
        ],
        workedExample: {
          problem: "How does high inflation affect a supermarket?",
          solution:
            "Rising costs, reduced consumer purchasing power, pressure on margins — must manage costs and pricing carefully.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is inflation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Falling prices",
              },
              {
                id: "b",
                text: "Rising general price level",
              },
              {
                id: "c",
                text: "Economic growth",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation",
                statement: "Rising prices.",
              },
            ],
            steps: [
              {
                reasoning: "Inflation = general rise in price level.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Rising price level",
          },
        },
        {
          id: "cieibs-u2-ec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the business cycle?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business cycle",
                statement: "Economic fluctuations.",
              },
            ],
            steps: [
              {
                reasoning: "Fluctuations in economic activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Boom→recession→recovery phases.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Economic fluctuations",
          },
        },
        {
          id: "cieibs-u2-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do interest rates affect business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Interest rates",
                statement: "Rate impact on business.",
              },
            ],
            steps: [
              {
                reasoning: "High rates = higher borrowing costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces investment and consumer spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Low rates encourage borrowing/growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Borrowing cost impact",
          },
        },
        {
          id: "cieibs-u2-ec-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define economic environment, business cycle, inflation, interest rate, exchange rate, economic growth. (b) What is inflation? (c) What is the business cycle? (d) What is an interest rate? (e) How does inflation affect business? (f) How do interest rates affect business? (g) How does exchange rate affect business? (h) Analyse how a business should respond to economic downturn.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Economic environment",
                statement: "Indicators, business cycle.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Rising price level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Economic fluctuations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Cost of borrowing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Reduces purchasing power, raises costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) High rates discourage borrowing/spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Affects import/export costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid downturn response.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Economic environment and business cycle.",
          },
        },
        {
          id: "cieibs-u2-ec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fall in unemployment" },
              { id: "b", text: "An increase in interest rates" },
              { id: "c", text: "A rise in the general price level" },
              { id: "d", text: "A fall in the general price level" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation",
                statement:
                  "Rising general price level — reduces purchasing power.",
              },
            ],
            steps: [
              {
                reasoning: "Inflation means prices rise over time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Rise in general price level",
          },
        },
        {
          id: "cieibs-u2-ec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What characterises a recession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full employment and rising prices" },
              { id: "b", text: "Rapid economic growth" },
              {
                id: "c",
                text: "Low growth, falling demand and rising unemployment",
              },
              { id: "d", text: "Record high profits for all firms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recession",
                statement:
                  "Period of low growth, falling demand and unemployment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recession is the downturn phase of the business cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Low growth, falling demand, unemployment",
          },
        },
        {
          id: "cieibs-u2-ec-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A basket of goods costs $1,000 and inflation is 6%. (a) Calculate next year's cost. (b) A $10,000 loan charges 5% annual interest — calculate the interest paid.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1060, unit: "$" },
              { label: "b", answer: 500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inflation and interest",
                statement:
                  "Price x (1 + inflation); interest = principal x rate.",
              },
            ],
            steps: [
              { reasoning: "1000 x 1.06 = $1,060.", marks: 1, markCode: "M" },
              {
                reasoning: "Interest = 10000 x 0.05 = $500.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $1,060, b) $500",
          },
        },
        {
          id: "cieibs-u2-ec-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two ways high interest rates affect a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interest rates",
                statement:
                  "Cost of borrowing — affects investment and spending.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Borrowing becomes more expensive, discouraging investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consumers spend less on credit, reducing demand for the business.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Costlier borrowing; lower consumer spending",
          },
        },
        {
          id: "cieibs-u2-ec-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If a country's currency appreciates (rises in value), what happens to its exports?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They become more expensive for foreign buyers",
              },
              { id: "b", text: "They are unaffected" },
              { id: "c", text: "They are banned" },
              { id: "d", text: "They become cheaper for foreign buyers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exchange rate",
                statement: "Currency value affects export competitiveness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A stronger currency makes exports cost more abroad.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Exports become more expensive",
          },
        },
        {
          id: "cieibs-u2-ec-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The exchange rate is $1 = 1.20 euros. (a) Convert $5,000 into euros. (b) If the rate changes to $1 = 1.00 euro, recalculate the euro value.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6000, unit: "euros" },
              { label: "b", answer: 5000, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exchange conversion",
                statement: "Foreign value = dollars x rate.",
              },
            ],
            steps: [
              {
                reasoning: "5000 x 1.20 = 6,000 euros.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "5000 x 1.00 = 5,000 euros.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 6,000 euros, b) 5,000 euros",
          },
        },
        {
          id: "cieibs-u2-ec-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the four phases of the business cycle in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business cycle",
                statement: "Boom -> recession -> recovery -> (repeat).",
              },
            ],
            steps: [
              {
                reasoning: "Boom: high growth, demand and prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recession: low growth, falling demand; recovery: gradual improvement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Boom, recession, recovery",
          },
        },
        {
          id: "cieibs-u2-ec-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following characterises a boom in the business cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High growth, high demand and rising prices" },
              { id: "b", text: "Businesses closing rapidly" },
              { id: "c", text: "Falling demand and high unemployment" },
              { id: "d", text: "Negative economic growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Boom",
                statement: "Peak phase: high growth, demand, prices.",
              },
            ],
            steps: [
              {
                reasoning: "Boom is the expansion peak of the cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "High growth, demand and prices",
          },
        },
        {
          id: "cieibs-u2-ec-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A price index was 100 in year 1, 108 in year 2 and 116.64 in year 3. (a) Calculate inflation in year 2. (b) Calculate inflation in year 3.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 8, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inflation rate",
                statement: "Inflation = (index - previous) / previous x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Year 2: (108 - 100)/100 x 100 = 8%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Year 3: (116.64 - 108)/108 x 100 = 8%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 8%, b) 8%",
          },
        },
        {
          id: "cieibs-u2-ec-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate how a recession affects different types of businesses (e.g. luxury goods vs discount retailers).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cycle impact",
                statement:
                  "Different sectors respond differently to recession.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Luxury/discretionary businesses suffer as consumers cut spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Essential goods and discount retailers may gain from trading down.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All face tighter credit and weaker demand overall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced conclusion on sector differences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sector-dependent impacts — justified evaluation",
          },
        },
        {
          id: "cieibs-u2-ec-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does economic growth measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The population increase" },
              { id: "b", text: "The rise in share prices" },
              { id: "c", text: "The increase in economic output" },
              { id: "d", text: "The number of new businesses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economic growth",
                statement: "Increase in economic output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth means rising total production of goods and services.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Increase in economic output",
          },
        },
        {
          id: "cieibs-u2-ec-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define economic environment, business cycle, inflation, interest rate, exchange rate, economic growth. (b) What is inflation? (c) What is the business cycle? (d) Give one effect of high interest rates. (e) Prices rise from $200 to $216 — calculate inflation. (f) Interest is 4% on a $25,000 loan — calculate the annual interest. (g) Explain how exchange rates affect exports. (h) Evaluate how a business should adapt during a recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Economic environment",
                statement: "Indicators, cycle, adaptation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Rising general price level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Fluctuations in economic activity: boom, recession, recovery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Costlier borrowing or reduced consumer spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Inflation = (216-200)/200 x 100 = 8%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Interest = 25000 x 0.04 = $1,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Currency value changes export prices and competitiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Cost control, focus on essentials, careful investment — justified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Economic indicators and recession adaptation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-ec-notes",
      title: "Economic environment — notes",
      summary:
        "Economic indicators: inflation, interest rates, exchange rates, growth. Business cycle: boom→recession→recovery.",
      sections: [
        {
          heading: "Key idea",
          body: "Economic conditions significantly impact business performance and strategy.",
        },
        {
          heading: "Business cycle",
          body: "Businesses must adapt to different economic phases.",
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson267: Lesson = {
  id: "cieibs-u2-lesson-2-7",
  code: "2-7",
  title: "Economic Environment and Business Cycle",
  goal: "I CAN explain economic indicators and how business cycle affects business.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: economic environment"],
  
  vocabulary: [
    { term: "Economic environment", definition: "Overall economic conditions." },
    { term: "Business cycle", definition: "Fluctuations in economic activity." },
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
          solution: "Rising costs, reduced consumer purchasing power, pressure on margins — must manage costs and pricing carefully.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is inflation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rising general price level"
                    },
                    {
                              "id": "b",
                              "text": "Falling prices"
                    },
                    {
                              "id": "c",
                              "text": "Economic growth"
                    },
                    {
                              "id": "d",
                              "text": "A type of tax"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inflation",
                              "statement": "Rising prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inflation = general rise in price level.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Rising price level"
},
        },
        {
          id: "cieibs-u2-ec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the business cycle?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business cycle",
                              "statement": "Economic fluctuations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fluctuations in economic activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Boom→recession→recovery phases.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Economic fluctuations"
},
        },
        {
          id: "cieibs-u2-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do interest rates affect business?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interest rates",
                              "statement": "Rate impact on business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High rates = higher borrowing costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces investment and consumer spending.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Low rates encourage borrowing/growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Borrowing cost impact"
},
        },
        {
          id: "cieibs-u2-ec-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define economic environment, business cycle, inflation, interest rate, exchange rate, economic growth. (b) What is inflation? (c) What is the business cycle? (d) What is an interest rate? (e) How does inflation affect business? (f) How do interest rates affect business? (g) How does exchange rate affect business? (h) Analyse how a business should respond to economic downturn.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Economic environment",
                              "statement": "Indicators, business cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Rising price level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Economic fluctuations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Cost of borrowing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Reduces purchasing power, raises costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) High rates discourage borrowing/spending.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Affects import/export costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid downturn response.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic environment and business cycle."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-ec-notes",
      title: "Economic environment — notes",
      summary: "Economic indicators: inflation, interest rates, exchange rates, growth. Business cycle: boom→recession→recovery.",
      sections: [
        { heading: "Key idea", body: "Economic conditions significantly impact business performance and strategy." },
        { heading: "Business cycle", body: "Businesses must adapt to different economic phases." },
      ],
    },
  ],
};

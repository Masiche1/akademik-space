import type { Lesson } from "../../../types.ts";

export const lesson421: Lesson = {
  id: "ciealecon-u2-lesson-2-1",
  code: "2-1",
  title: "National Income and Economic Growth",
  goal: "I CAN explain GDP, national income measures and economic growth.",
  standards: ["Cambridge A Level Economics 9708", "Paper 2: macroeconomics"],
  
  vocabulary: [
    { term: "GDP", definition: "Gross Domestic Product — total output in economy." },
    { term: "Nominal GDP", definition: "GDP at current prices." },
    { term: "Real GDP", definition: "GDP adjusted for inflation." },
    { term: "GDP per capita", definition: "GDP divided by population." },
    { term: "Economic growth", definition: "Increase in real GDP over time." },
    { term: "Circular flow", definition: "Model of income/expenditure flows." },
  ],
  concepts: [
    {
      id: "ciealecon-u2-s1-gdp",
      title: "National income",
      skill: "Understand GDP measurement and growth.",
      lesson: {
        sections: [
          {
            heading: "GDP measures",
            body: "Output method: sum of value added. Income method: sum of factor incomes. Expenditure method: C+I+G+(X-M). Nominal vs real GDP — real adjusts for inflation.",
          },
          {
            heading: "Circular flow",
            body: "Households provide factors of production → firms produce goods → households consume. Leakages (saving, taxes, imports) and injections (investment, government spending, exports).",
          },
          {
            heading: "Growth",
            body: "Sustained increase in real GDP. Benefits: higher living standards, employment. Costs: environmental damage, inequality, resource depletion.",
          },
        ],
        keyFormulas: [
          { name: "GDP", statement: "total output" },
          { name: "Real GDP", statement: "inflation-adjusted" },
          { name: "Growth", statement: "increase in real GDP" },
        ],
        workedExample: {
          problem: "Country A GDP £100bn, population 50m. Country B GDP £200bn, population 200m. Which has higher living standards?",
          solution: "A: £2,000 per capita. B: £1,000 per capita. A has higher GDP per capita → higher living standards.",
        },
      },
      questions: [
        {
          id: "ciealecon-u2-gdp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GDP?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gross Domestic Product — total output"
                    },
                    {
                              "id": "b",
                              "text": "Total income"
                    },
                    {
                              "id": "c",
                              "text": "Total spending"
                    },
                    {
                              "id": "d",
                              "text": "Population"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GDP",
                              "statement": "Total output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GDP = total output in economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Total output"
},
        },
        {
          id: "ciealecon-u2-gdp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between nominal and real GDP?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nominal vs real",
                              "statement": "Current vs adjusted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nominal: current prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Real: adjusted for inflation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Current vs inflation-adjusted"
},
        },
        {
          id: "ciealecon-u2-gdp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are leakages and injections in circular flow?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Leakages/injections",
                              "statement": "Circular flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leakages: saving, taxes, imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Injections: investment, government, exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balance determines income level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Leakages vs injections"
},
        },
        {
          id: "ciealecon-u2-gdp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GDP, nominal GDP, real GDP, GDP per capita, economic growth, circular flow. (b) What is GDP? (c) What is real GDP? (d) What is GDP per capita? (e) What are leakages? (f) What are injections? (g) What is economic growth? (h) Evaluate whether GDP is a good measure of living standards.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "National income",
                              "statement": "Measurement, growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Total output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Inflation-adjusted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) GDP/population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Saving, taxes, imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Investment, government, exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Increase in real GDP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Ignores inequality, environment, wellbeing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "National income analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u2-gdp-notes",
      title: "National income — notes",
      summary: "GDP measures total output. Real GDP adjusts for inflation. Circular flow shows income/expenditure.",
      sections: [
        { heading: "Key idea", body: "GDP is useful but incomplete measure of economic wellbeing." },
        { heading: "Growth", body: "Sustained real GDP growth raises living standards but may have costs." },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson293: Lesson = {
  id: "cieiec-u3-lesson-3-3",
  code: "3-3",
  title: "Development and Emerging Economies",
  goal: "I CAN explain development indicators and challenges facing developing economies.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 6: development"],
  
  vocabulary: [
    { term: "Developing economy", definition: "Economy with low income/industrialisation." },
    { term: "Developed economy", definition: "High income, industrialised economy." },
    { term: "GDP per capita", definition: "Economic output per person." },
    { term: "Human Development Index (HDI)", definition: "Measure of development beyond income." },
    { term: "Poverty", definition: "Lack of basic necessities." },
    { term: "Debt burden", definition: "Heavy foreign debt obligations." },
  ],
  concepts: [
    {
      id: "cieiec-u3-s3-dev",
      title: "Development",
      skill: "Understand development indicators and challenges.",
      lesson: {
        sections: [
          {
            heading: "Development indicators",
            body: "GDP per capita: income measure. HDI: combines income, education, life expectancy. Other indicators: literacy rate, infant mortality, access to clean water, electricity.",
          },
          {
            heading: "Challenges",
            body: "Poverty, debt burden, poor infrastructure, corruption, political instability, dependence on primary products, population growth.",
          },
          {
            heading: "Development strategies",
            body: "Trade liberalisation, foreign investment, aid, education, infrastructure, microfinance.",
          },
        ],
        keyFormulas: [
          { name: "GDP per capita", statement: "output per person" },
          { name: "HDI", statement: "income+education+health" },
        ],
        workedExample: {
          problem: "Country A has high GDP but low HDI. What does this mean?",
          solution: "High income but poor education/health — development is imbalanced. HDI reveals inequality that GDP hides.",
        },
      },
      questions: [
        {
          id: "cieiec-u3-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GDP per capita?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Economic output per person"
                    },
                    {
                              "id": "b",
                              "text": "Total GDP"
                    },
                    {
                              "id": "c",
                              "text": "Population size"
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
                              "name": "GDP per capita",
                              "statement": "Output per person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GDP per capita = economic output per person.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Output per person"
},
        },
        {
          id: "cieiec-u3-dv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Human Development Index?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HDI",
                              "statement": "Development measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combines income, education, life expectancy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Broader than GDP alone.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Income+education+health"
},
        },
        {
          id: "cieiec-u3-dv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are challenges facing developing economies?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Development challenges",
                              "statement": "Obstacles to growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poverty, debt burden, poor infrastructure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Corruption, political instability, dependence on primary products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Population growth pressures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Poverty, debt, infrastructure, instability"
},
        },
        {
          id: "cieiec-u3-dv-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define developing economy, developed economy, GDP per capita, HDI, poverty, debt burden. (b) What is GDP per capita? (c) What is HDI? (d) What is a developing economy? (e) What challenges do developing economies face? (f) How can countries develop? (g) Why is GDP alone insufficient? (h) Evaluate aid vs trade for development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development",
                              "statement": "Indicators, challenges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Output per person.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Income+education+health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Low income/industrialisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid challenges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Trade, investment, aid, education.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Ignores inequality, health, education.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Development indicators and challenges."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u3-dv-notes",
      title: "Development — notes",
      summary: "GDP per capita=income measure; HDI=broader development. Challenges: poverty, debt, infrastructure.",
      sections: [
        { heading: "Key idea", body: "Development requires more than income — education, health, opportunity." },
        { heading: "Strategies", body: "Trade, investment, aid, education, infrastructure development." },
      ],
    },
  ],
};

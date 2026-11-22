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
                              "text": "A type of tax"
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
                              "text": "Economic output per person"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "cieiec-u3-dv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDP per capita is best defined as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number of employed people"
                    },
                    {
                              "id": "b",
                              "text": "Economic output per person"
                    },
                    {
                              "id": "c",
                              "text": "Total government spending"
                    },
                    {
                              "id": "d",
                              "text": "Average export earnings"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "GDP per capita = GDP / population.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Economic output per person"
},
        },
        {
          id: "cieiec-u3-dv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Human Development Index (HDI) combines income with:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government spending and taxes"
                    },
                    {
                              "id": "b",
                              "text": "Exports and imports"
                    },
                    {
                              "id": "c",
                              "text": "Education and life expectancy"
                    },
                    {
                              "id": "d",
                              "text": "Population growth only"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HDI",
                              "statement": "Income + education + health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HDI = income, education, life expectancy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Education and life expectancy"
},
        },
        {
          id: "cieiec-u3-dv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country has high GDP per capita but a low HDI. This suggests:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "GDP is measured incorrectly"
                    },
                    {
                              "id": "b",
                              "text": "The population is very small"
                    },
                    {
                              "id": "c",
                              "text": "Income is high but education and health outcomes are poor"
                    },
                    {
                              "id": "d",
                              "text": "The country is fully developed"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "HDI",
                              "statement": "Broader than income."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HDI reveals poor health/education behind high income.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "High income, poor social outcomes"
},
        },
        {
          id: "cieiec-u3-dv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a major challenge facing many developing economies?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A heavy burden of foreign debt"
                    },
                    {
                              "id": "b",
                              "text": "Too many doctors per person"
                    },
                    {
                              "id": "c",
                              "text": "Excess industrial capacity"
                    },
                    {
                              "id": "d",
                              "text": "Too much foreign aid"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Development challenges",
                              "statement": "Debt, poverty, infrastructure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Debt burden is a classic developing-economy challenge.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Heavy foreign debt"
},
        },
        {
          id: "cieiec-u3-dv-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Country A has a GDP of $600 billion and a population of 60 million. Calculate GDP per capita in dollars.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 10000,
                              "unit": "$"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GDP per capita",
                              "statement": "GDP / population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "600000 / 60 = 10000 (in millions of dollars per million people).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "GDP per capita = $10,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$10,000"
},
        },
        {
          id: "cieiec-u3-dv-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The three components of a simple HDI calculation are income index 0.6, education index 0.5 and health index 0.7. What is the simple average?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 0.6,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HDI",
                              "statement": "Income + education + health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(0.6 + 0.5 + 0.7) / 3 = 1.8 / 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Average = 0.6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.6"
},
        },
        {
          id: "cieiec-u3-dv-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country's literacy rate rises from 60% to 75%. By how many percentage points does it rise?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 15,
                              "unit": "percentage points"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Literacy rate",
                              "statement": "Development indicator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "75 - 60 = 15 percentage points.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "15 percentage points"
},
        },
        {
          id: "cieiec-u3-dv-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define GDP per capita and state one limitation of using it alone to measure development.",
          response: {
          "type": "open"
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
                              "reasoning": "GDP divided by population — income measure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ignores inequality, health, education, environment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Output/person; ignores social factors"
},
        },
        {
          id: "cieiec-u3-dv-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the HDI may be a better measure of development than GDP per capita alone.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "HDI",
                              "statement": "Broader development measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes education and health, not just income.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reveals inequality and poor outcomes hidden by high GDP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Better reflects people's actual living standards.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Captures income, education, health"
},
        },
        {
          id: "cieiec-u3-dv-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two challenges facing developing economies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Development challenges",
                              "statement": "Poverty, debt, infrastructure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poverty and lack of basic necessities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heavy foreign debt burden limiting investment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Poor infrastructure, corruption or dependence on primary products.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Poverty and debt burden"
},
        },
        {
          id: "cieiec-u3-dv-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how foreign direct investment can help a developing economy grow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Development strategies",
                              "statement": "FDI benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Brings capital, technology and skills.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Creates jobs and raises output/exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "May be repatriated and could exploit resources.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Capital, jobs, technology"
},
        },
        {
          id: "cieiec-u3-dv-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate aid versus trade as strategies for promoting development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development strategies",
                              "statement": "Aid vs trade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aid: provides resources for infrastructure and services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade: creates jobs, earns foreign exchange, encourages efficiency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Aid risks: dependency, corruption, unsustainable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade risks: unequal gains, dependency on primary products.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: both have roles — context determines mix.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Both useful; context matters"
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

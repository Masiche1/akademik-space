import type { Lesson } from "../../../types.ts";

export const lesson441: Lesson = {
  id: "ciealecon-u4-lesson-4-1",
  code: "4-1",
  title: "Economic Development and Measurement",
  goal: "I CAN explain development indicators and challenges.",
  standards: ["Cambridge A Level Economics 9708", "Paper 4: development"],
  
  vocabulary: [
    { term: "Development", definition: "Improvement in living standards and wellbeing." },
    { term: "GDP per capita", definition: "GDP divided by population." },
    { term: "HDI", definition: "Human Development Index — health, education, income." },
    { term: "Poverty", definition: "Lack of basic necessities." },
    { term: "Absolute poverty", definition: "Below minimum subsistence level." },
    { term: "Relative poverty", definition: "Below average income in society." },
  ],
  concepts: [
    {
      id: "ciealecon-u4-s1-dev",
      title: "Development measurement",
      skill: "Analyse development indicators.",
      lesson: {
        sections: [
          {
            heading: "Development measures",
            body: "GDP per capita: income level. HDI: combines health (life expectancy), education (literacy), income. Other: poverty rates, infant mortality, access to services.",
          },
          {
            heading: "Development challenges",
            body: "Low income, poor infrastructure, corruption, disease, conflict, inequality. Development is multidimensional — not just income.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "health+education+income" },
          { name: "GDP per capita", statement: "income measure" },
          { name: "Poverty", statement: "below subsistence" },
        ],
        workedExample: {
          problem: "Country A: high GDP but low HDI. What does this indicate?",
          solution: "Income concentrated among few, poor health/education access. Development requires more than GDP growth.",
        },
      },
      questions: [
        {
          id: "ciealecon-u4-dev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is HDI?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Human Development Index — health, education, income"
                    },
                    {
                              "id": "b",
                              "text": "Population"
                    },
                    {
                              "id": "c",
                              "text": "GDP measure"
                    },
                    {
                              "id": "d",
                              "text": "Poverty rate"
                    }
          ],
          "correctChoiceId": "a"
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
                              "reasoning": "HDI = health+education+income.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Health+education+income"
},
        },
        {
          id: "ciealecon-u4-dev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between absolute and relative poverty?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Poverty types",
                              "statement": "Absolute vs relative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute: below subsistence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Relative: below average.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Subsistence vs average"
},
        },
        {
          id: "ciealecon-u4-dev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is GDP per capita insufficient for measuring development?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Development",
                              "statement": "Measurement limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Doesn't capture inequality/distribution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ignores health, education, environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Development is multidimensional.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Multidimensional development"
},
        },
        {
          id: "ciealecon-u4-dev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define development, GDP per capita, HDI, poverty, absolute poverty, relative poverty. (b) What is development? (c) What is HDI? (d) What is absolute poverty? (e) Why is GDP insufficient? (f) What are development challenges? (g) What is relative poverty? (h) Evaluate whether HDI is better than GDP for measuring development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development",
                              "statement": "Measurement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Improved living standards.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Health+education+income.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Below subsistence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Ignores inequality, wellbeing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Low income, disease, conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Below average.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) More comprehensive but still limited.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Development measurement."
},
        },
        {
          id: "ciealecon-u4-dev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDP per capita is calculated by dividing",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP by population" },
              { id: "b", text: "population by GDP" },
              { id: "c", text: "exports by imports" },
              { id: "d", text: "GNI by land area" }
            ],
            correctChoiceId: "a"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "GDP per capita", statement: "GDP / population." } ],
            steps: [ { reasoning: "GDP per capita measures average income per person: total output divided by population.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** GDP by population"
          }
        },
        {
          id: "ciealecon-u4-dev-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which three dimensions does the HDI combine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population, area and climate" },
              { id: "b", text: "Exports, imports and aid" },
              { id: "c", text: "Health, education and income" },
              { id: "d", text: "GDP, inflation and unemployment" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "HDI", statement: "Health + education + income." } ],
            steps: [ { reasoning: "The Human Development Index combines indicators of health (life expectancy), education (literacy/schooling) and income (GNI per capita).", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** Health, education and income"
          }
        },
        {
          id: "ciealecon-u4-dev-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which indicator is most suitable for measuring income inequality within a country?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infant mortality rate" },
              { id: "b", text: "HDI" },
              { id: "c", text: "GDP per capita" },
              { id: "d", text: "Gini coefficient" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Gini coefficient", statement: "Measure of income inequality." } ],
            steps: [ { reasoning: "The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality); GDP per capita, HDI and infant mortality do not directly measure distribution.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** Gini coefficient"
          }
        },
        {
          id: "ciealecon-u4-dev-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A country records strong GDP growth but its HDI rises only slightly. The most likely explanation is that",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP per capita is being measured incorrectly" },
              { id: "b", text: "income gains are concentrated among a small group while health and education improve slowly" },
              { id: "c", text: "the country's population is falling" },
              { id: "d", text: "the HDI excludes income entirely" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [ { kind: "skill", name: "Development", statement: "HDI vs GDP divergence." } ],
            steps: [ { reasoning: "GDP growth can coexist with slow HDI improvement when income is unequally distributed and health/education outcomes lag — development is multidimensional.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(b)** income concentrated, health/education lag"
          }
        },
        {
          id: "ciealecon-u4-dev-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Country X has a GDP of $1.5 trillion and a population of 50 million. Calculate GDP per capita.",
          response: { type: "numeric", parts: [ { label: "a", answer: 30000, unit: "dollars" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "GDP per capita", statement: "GDP / population." } ],
            steps: [ { reasoning: "GDP per capita = $1.5 trillion / 50 million = $30,000.", working: "1.5e12 / 5e7 = 30000", marks: 1, markCode: "M" } ],
            finalAnswer: "GDP per capita = $30,000"
          }
        },
        {
          id: "ciealecon-u4-dev-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "GDP per capita in Country Y rose from $20,000 to $25,000 in one year. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "a", answer: 25, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Percentage change", statement: "(new - old) / old x 100." } ],
            steps: [ { reasoning: "Increase = ($25,000 - $20,000) / $20,000 x 100 = 25%.", working: "5000 / 20000 x 100 = 25", marks: 1, markCode: "M" } ],
            finalAnswer: "25%"
          }
        },
        {
          id: "ciealecon-u4-dev-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country's health index is 0.9, its education index is 0.6 and its income index is 0.9. Assuming HDI is approximated by the simple average of the three indices, calculate the HDI.",
          response: { type: "numeric", parts: [ { label: "a", answer: 0.8 } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "HDI", statement: "Average of health, education and income indices." } ],
            steps: [ { reasoning: "HDI = (0.9 + 0.6 + 0.9) / 3 = 2.4 / 3 = 0.8.", working: "(0.9 + 0.6 + 0.9) / 3 = 0.8", marks: 1, markCode: "M" } ],
            finalAnswer: "HDI = 0.8"
          }
        },
        {
          id: "ciealecon-u4-dev-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The infant mortality rate in a developing country fell from 80 to 40 deaths per 1,000 live births. Calculate the percentage fall.",
          response: { type: "numeric", parts: [ { label: "a", answer: 50, unit: "%" } ] },
          markscheme: {
            principles: [ { kind: "formula", name: "Percentage change", statement: "(old - new) / old x 100." } ],
            steps: [ { reasoning: "Fall = (80 - 40) / 80 x 100 = 50%. Lower infant mortality indicates improving health and development.", working: "40 / 80 x 100 = 50", marks: 1, markCode: "M" } ],
            finalAnswer: "50%"
          }
        },
        {
          id: "ciealecon-u4-dev-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Country A has a GDP of $800 billion and a population of 40 million. Country B has a GDP of $600 billion and a population of 60 million.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20000, unit: "dollars" },
              { label: "b", answer: 10000, unit: "dollars" }
            ]
          },
          markscheme: {
            principles: [ { kind: "formula", name: "GDP per capita", statement: "GDP / population." } ],
            steps: [
              { reasoning: "Country A: $800 billion / 40 million = $20,000 per person.", working: "8e11 / 4e7 = 20000", marks: 1, markCode: "M" },
              { reasoning: "Country B: $600 billion / 60 million = $10,000 per person — lower despite similar total GDP because of its larger population.", working: "6e11 / 6e7 = 10000", marks: 1, markCode: "M" }
            ],
            finalAnswer: "A = $20,000; B = $10,000"
          }
        },
        {
          id: "ciealecon-u4-dev-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a country with a high GDP per capita can still have a low level of development.",
          response: { type: "open" },
          markscheme: {
            principles: [ { kind: "skill", name: "Development", statement: "Measurement limits." } ],
            steps: [
              { reasoning: "GDP per capita is an average: income may be concentrated among a small wealthy group, leaving most people poor.", marks: 1, markCode: "M" },
              { reasoning: "High income does not guarantee access to healthcare, education, clean water or sanitation for all.", marks: 1, markCode: "M" },
              { reasoning: "Development is multidimensional — HDI and other indicators capture health, education and inequality that GDP misses.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "High income does not equal development"
          }
        },
        {
          id: "ciealecon-u4-dev-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pair of indicators together gives the broadest picture of a country's development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP and the inflation rate" },
              { id: "b", text: "Exports and population size" },
              { id: "c", text: "HDI and the poverty rate" },
              { id: "d", text: "Interest rates and tax revenue" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [ { kind: "skill", name: "Development", statement: "Indicator choice." } ],
            steps: [ { reasoning: "HDI captures health, education and income while the poverty rate shows how many are left behind — together they approximate the multidimensional nature of development.", marks: 1, markCode: "A" } ],
            finalAnswer: "**(c)** HDI and the poverty rate"
          }
        },
        {
          id: "ciealecon-u4-dev-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Average incomes in a country rise, but the real incomes of the poorest households remain unchanged. Which measure of poverty is most directly affected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absolute poverty" },
              { id: "b", text: "HDI" },
              { id: "c", text: "GDP per capita" },
              { id: "d", text: "Relative poverty" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [ { kind: "definition", name: "Relative poverty", statement: "Below the average income of society." } ],
            steps: [ { reasoning: "Relative poverty is measured against the average income of society, so it rises when average incomes rise but the poorest are left behind; absolute poverty depends on subsistence needs, not the average.", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** Relative poverty"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u4-dev-notes",
      title: "Development — notes",
      summary: "HDI=health+education+income. GDP insufficient — development multidimensional.",
      sections: [
        { heading: "Key idea", body: "Development requires more than income growth — health, education, equality." },
        { heading: "Challenges", body: "Poverty, disease, conflict, inequality, weak institutions." },
      ],
    },
  ],
};

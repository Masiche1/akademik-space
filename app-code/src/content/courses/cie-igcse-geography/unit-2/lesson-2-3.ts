import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "cieigeo-u2-lesson-2-3",
  code: "2-3",
  title: "Development and Inequality",
  goal: "I CAN measure development and explain global inequalities.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: development"],

  vocabulary: [
    {
      term: "Development",
      definition: "Improvement in living standards/wellbeing.",
    },
    {
      term: "Developed country",
      definition: "High income, industrialised economy.",
    },
    {
      term: "Developing country",
      definition: "Low income, less industrialised.",
    },
    {
      term: "Human Development Index (HDI)",
      definition: "Composite measure of development.",
    },
    {
      term: "North-South divide",
      definition: "Economic divide between developed/developing.",
    },
    {
      term: "Inequality",
      definition: "Unequal distribution of resources/opportunities.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s3-dev",
      title: "Development and inequality",
      skill: "Measure and explain development differences.",
      lesson: {
        sections: [
          {
            heading: "Measuring development",
            body: "HDI: income, education, life expectancy. Other indicators: literacy, infant mortality, access to clean water, electricity. GDP per capita: income only.",
          },
          {
            heading: "Inequalities",
            body: "North-South divide: developed countries (north) vs developing (south). Within-country inequality: urban/rural, rich/poor. Causes: colonial history, trade patterns, corruption, geography.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "income+education+health" },
          { name: "North-South", statement: "developed vs developing" },
        ],
        workedExample: {
          problem: "Why is HDI better than GDP for measuring development?",
          solution:
            "HDI includes education and health — captures wellbeing beyond income. GDP can be high despite poor living conditions.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Human Development Index?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of migration",
              },
              {
                id: "b",
                text: "Composite measure of development",
              },
              {
                id: "c",
                text: "GDP measure",
              },
              {
                id: "d",
                text: "Population density",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Development measure.",
              },
            ],
            steps: [
              {
                reasoning: "HDI combines income, education, health.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Composite development measure",
          },
        },
        {
          id: "cieigeo-u2-dv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the North-South divide?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "North-South",
                statement: "Development divide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economic divide between developed/developing countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Named for geographic distribution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Developed vs developing divide",
          },
        },
        {
          id: "cieigeo-u2-dv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What causes global inequality?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality causes",
                statement: "Development gaps.",
              },
            ],
            steps: [
              {
                reasoning: "Colonial history, trade patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corruption, political instability, geography.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Access to resources/education.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "History, trade, governance, geography",
          },
        },
        {
          id: "cieigeo-u2-dv-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define development, developed country, developing country, HDI, North-South divide, inequality. (b) What is development? (c) What is HDI? (d) What is the North-South divide? (e) What causes global inequality? (f) How is HDI calculated? (g) What are indicators of development? (h) Evaluate whether development can be measured accurately.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Development",
                statement: "Measurement, inequality.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Improvement in living standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Income+education+health measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Developed vs developing divide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) History, trade, governance, geography.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Composite of three indicators.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Literacy, infant mortality, clean water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Development and inequality.",
          },
        },
        {
          id: "cieigeo-u2-dv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Human Development Index combines measures of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade, tourism and industry" },
              { id: "b", text: "Income, education and health" },
              { id: "c", text: "Population, area and climate" },
              { id: "d", text: "Birth rate, death rate and migration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Composite of income, education and health.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HDI includes economic and social wellbeing measures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Income, education and health",
          },
        },
        {
          id: "cieigeo-u2-dv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country has 36 million literate people out of a total population of 45 million. Calculate the literacy rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Literacy rate",
                statement: "Literate population ÷ total population x 100.",
              },
            ],
            steps: [
              {
                reasoning: "36 ÷ 45 x 100 = 80%.",
                working: "36 / 45 \\times 100 = 80",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80%",
          },
        },
        {
          id: "cieigeo-u2-dv-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two social indicators of development other than HDI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Development indicators",
                statement: "Measures of living standards and wellbeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid indicators, e.g. literacy, infant mortality, clean water or life expectancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both are social or health indicators rather than only income measures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. literacy rate and infant mortality",
          },
        },
        {
          id: "cieigeo-u2-dv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is HDI considered a better measure of development than GDP per capita alone?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It includes education and health as well as income",
              },
              { id: "b", text: "It can only be calculated for cities" },
              { id: "c", text: "It measures only the richest people" },
              { id: "d", text: "It ignores population size completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "HDI vs GDP",
                statement: "HDI captures wellbeing beyond income.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GDP can rise while health or education remain poor.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "HDI includes education and health",
          },
        },
        {
          id: "cieigeo-u2-dv-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Four countries have HDI scores of 0.55, 0.62, 0.83 and 0.70. (a) Calculate the mean HDI. (b) Calculate the range of the scores.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Mean HDI", answer: 0.675, unit: "HDI" },
              { label: "(b) Range of scores", answer: 0.28, unit: "HDI" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Statistics",
                statement: "Mean = sum ÷ count; range = maximum - minimum.",
              },
            ],
            steps: [
              {
                reasoning: "(a) (0.55 + 0.62 + 0.83 + 0.70) ÷ 4 = 0.675.",
                working: "2.70 / 4 = 0.675",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 0.83 - 0.55 = 0.28.",
                working: "0.83 - 0.55 = 0.28",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 0.675 (b) 0.28",
          },
        },
        {
          id: "cieigeo-u2-dv-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three causes of the North-South divide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality causes",
                statement:
                  "Historical and economic factors create development gaps.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colonial history affected institutions, boundaries and resource extraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade patterns can favour wealthy countries through prices and market access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Governance problems, corruption or instability can limit investment and services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "History, trade and governance cause inequality",
          },
        },
        {
          id: "cieigeo-u2-dv-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a social indicator of development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Export volume" },
              { id: "b", text: "Currency exchange rate" },
              { id: "c", text: "Factory output" },
              { id: "d", text: "Literacy rate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Development indicator",
                statement: "Measure of wellbeing such as literacy or health.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Literacy reflects education and social development.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Literacy rate",
          },
        },
        {
          id: "cieigeo-u2-dv-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how inequality within a country can differ from inequality between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Inequality scales",
                statement:
                  "Global and national inequalities have different causes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Between-country inequality compares developed and developing nations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Within-country inequality may contrast urban and rural or rich and poor groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Global causes include trade, history and governance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "National causes may include regional policy, land ownership and service provision.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Global and within-country inequalities operate at different scales",
          },
        },
        {
          id: "cieigeo-u2-dv-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a country of 60 million people, 18 million live below the poverty line. A programme reduces this to 12 million. (a) Calculate the original percentage below the poverty line. (b) Calculate the new percentage.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Original percentage (%)", answer: 30, unit: "%" },
              { label: "(b) New percentage (%)", answer: 20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Part ÷ whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 18 ÷ 60 x 100 = 30%.",
                working: "18 / 60 \\times 100 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 12 ÷ 60 x 100 = 20%.",
                working: "12 / 60 \\times 100 = 20",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 30% (b) 20%",
          },
        },
        {
          id: "cieigeo-u2-dv-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether GDP per capita is sufficient for measuring development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Development measures",
                statement: "Income alone misses social wellbeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GDP per capita is useful because it measures average economic output and income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can hide inequality because a few wealthy people may raise the average.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It ignores health, education, life expectancy and environmental quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: useful but should be combined with HDI and other indicators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GDP is useful but incomplete without social measures",
          },
        },
        {
          id: "cieigeo-u2-dv-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains how colonial history contributes to global inequality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removed all political boundaries" },
              { id: "b", text: "It made every country equally industrialised" },
              {
                id: "c",
                text: "It guaranteed equal incomes for all countries",
              },
              {
                id: "d",
                text: "It shaped institutions, trade links and resource extraction patterns",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Colonial legacy",
                statement:
                  "Past extraction and institutions affect development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colonial systems influenced trade, governance and infrastructure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Colonial systems shaped trade and institutions",
          },
        },
        {
          id: "cieigeo-u2-dv-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define development and HDI. (b) Name three components of HDI. (c) Name three other development indicators. (d) Calculate HDI range for scores 0.48 and 0.86. (e) Explain the North-South divide. (f) Give two causes of global inequality. (g) Explain one within-country inequality. (h) Evaluate whether development can be measured accurately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Development",
                statement: "Measurement and inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Development = improved living standards; HDI = composite development index.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Income, education and health/life expectancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) e.g. literacy, infant mortality and access to clean water.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "(d) 0.86 - 0.48 = 0.38.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "(e) Economic divide between developed and developing countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) e.g. colonial history, trade patterns, governance or geography.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) e.g. urban-rural differences in income and services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Measures are useful but incomplete; combine several indicators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Development measurement and inequality.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-dv-notes",
      title: "Development — notes",
      summary:
        "HDI=income+education+health. North-South divide=global inequality. Causes: history, trade, governance.",
      sections: [
        {
          heading: "Key idea",
          body: "Development is multidimensional — income alone insufficient.",
        },
        {
          heading: "Inequality",
          body: "Global and within-country inequalities persist due to structural factors.",
        },
      ],
    },
  ],
};

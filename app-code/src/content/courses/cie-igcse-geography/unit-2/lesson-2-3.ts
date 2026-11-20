import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "cieigeo-u2-lesson-2-3",
  code: "2-3",
  title: "Development and Inequality",
  goal: "I CAN measure development and explain global inequalities.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: development"],
  
  vocabulary: [
    { term: "Development", definition: "Improvement in living standards/wellbeing." },
    { term: "Developed country", definition: "High income, industrialised economy." },
    { term: "Developing country", definition: "Low income, less industrialised." },
    { term: "Human Development Index (HDI)", definition: "Composite measure of development." },
    { term: "North-South divide", definition: "Economic divide between developed/developing." },
    { term: "Inequality", definition: "Unequal distribution of resources/opportunities." },
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
          solution: "HDI includes education and health — captures wellbeing beyond income. GDP can be high despite poor living conditions.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Human Development Index?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Composite measure of development"
                    },
                    {
                              "id": "b",
                              "text": "GDP measure"
                    },
                    {
                              "id": "c",
                              "text": "Population density"
                    },
                    {
                              "id": "d",
                              "text": "A type of migration"
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
                              "reasoning": "HDI combines income, education, health.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Composite development measure"
},
        },
        {
          id: "cieigeo-u2-dv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the North-South divide?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "North-South",
                              "statement": "Development divide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Economic divide between developed/developing countries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Named for geographic distribution.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Developed vs developing divide"
},
        },
        {
          id: "cieigeo-u2-dv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What causes global inequality?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Inequality causes",
                              "statement": "Development gaps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Colonial history, trade patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Corruption, political instability, geography.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Access to resources/education.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "History, trade, governance, geography"
},
        },
        {
          id: "cieigeo-u2-dv-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define development, developed country, developing country, HDI, North-South divide, inequality. (b) What is development? (c) What is HDI? (d) What is the North-South divide? (e) What causes global inequality? (f) How is HDI calculated? (g) What are indicators of development? (h) Evaluate whether development can be measured accurately.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development",
                              "statement": "Measurement, inequality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Improvement in living standards.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Income+education+health measure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Developed vs developing divide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) History, trade, governance, geography.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Composite of three indicators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Literacy, infant mortality, clean water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Development and inequality."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-dv-notes",
      title: "Development — notes",
      summary: "HDI=income+education+health. North-South divide=global inequality. Causes: history, trade, governance.",
      sections: [
        { heading: "Key idea", body: "Development is multidimensional — income alone insufficient." },
        { heading: "Inequality", body: "Global and within-country inequalities persist due to structural factors." },
      ],
    },
  ],
};

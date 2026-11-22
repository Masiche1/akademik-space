import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "cieigeo-u2-lesson-2-1",
  code: "2-1",
  title: "Population: Distribution and Change",
  goal: "I CAN describe population distribution, density and change over time.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: human geography"],

  vocabulary: [
    {
      term: "Population distribution",
      definition: "Pattern of where people live.",
    },
    {
      term: "Population density",
      definition: "Number of people per unit area.",
    },
    {
      term: "Birth rate",
      definition: "Live births per 1000 population per year.",
    },
    { term: "Death rate", definition: "Deaths per 1000 population per year." },
    { term: "Natural increase", definition: "Birth rate minus death rate." },
    { term: "Migration", definition: "Movement of people between areas." },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s1-pop",
      title: "Population",
      skill: "Understand population patterns and change.",
      lesson: {
        sections: [
          {
            heading: "Population distribution",
            body: "Uneven — concentrated in urban areas, fertile land, coastal regions. Sparse in deserts, mountains, cold climates. Density = population/area.",
          },
          {
            heading: "Population change",
            body: "Birth rate, death rate, migration determine change. Natural increase = births - deaths. Developed countries: low birth/death rates, aging population. Developing: high birth rates, young population.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "population ÷ area" },
          { name: "Natural increase", statement: "birth rate - death rate" },
          {
            name: "Population change",
            statement: "natural increase + migration",
          },
        ],
        workedExample: {
          problem:
            "Country A: birth rate 15, death rate 10, migration +50,000. Calculate natural increase and population change.",
          solution:
            "Natural increase = 15-10 = 5 per 1000. Population change = natural increase + migration.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-pd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is population density?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Total population",
              },
              {
                id: "b",
                text: "Population growth rate",
              },
              {
                id: "c",
                text: "Number of people per unit area",
              },
              {
                id: "d",
                text: "A type of migration",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Density",
                statement: "People per area.",
              },
            ],
            steps: [
              {
                reasoning: "Density = population ÷ area.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "People per unit area",
          },
        },
        {
          id: "cieigeo-u2-pd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is natural increase?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural increase",
                statement: "Births - deaths.",
              },
            ],
            steps: [
              {
                reasoning: "Birth rate minus death rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Excludes migration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Births minus deaths",
          },
        },
        {
          id: "cieigeo-u2-pd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is population distribution uneven?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population distribution",
                statement: "Factors affecting distribution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "People cluster where resources/opportunities exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoid harsh environments (deserts, mountains).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Urban areas offer jobs/services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Resources, climate, opportunities",
          },
        },
        {
          id: "cieigeo-u2-pd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define population distribution, population density, birth rate, death rate, natural increase, migration. (b) What is population density? (c) What is natural increase? (d) Why is population distribution uneven? (e) What factors affect population change? (f) How does migration affect population? (g) Compare population patterns in developed vs developing countries. (h) Explain how population change affects development.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Population",
                statement: "Distribution, change.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) People per unit area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Births minus deaths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Resources, climate, opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Births, deaths, migration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Increases/decreases population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Developed: aging, low growth; developing: young, high growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid development impact explanation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Population distribution and change.",
          },
        },
        {
          id: "cieigeo-u2-pd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula is used to calculate population density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Area ÷ population" },
              { id: "b", text: "Population ÷ area" },
              { id: "c", text: "Population x area" },
              { id: "d", text: "Birth rate - death rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Density",
                statement: "Population divided by land area.",
              },
            ],
            steps: [
              {
                reasoning: "Density measures people per unit area.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Population ÷ area",
          },
        },
        {
          id: "cieigeo-u2-pd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A town has a population of 48 000 and an area of 600 km². Calculate its population density.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "people/km^2" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Density",
                statement: "Population ÷ area.",
              },
            ],
            steps: [
              {
                reasoning: "Divide population by area.",
                working: "48000 / 600 = 80",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "80 people/km²",
          },
        },
        {
          id: "cieigeo-u2-pd-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two factors that cause uneven population distribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Distribution",
                statement:
                  "People concentrate where opportunities and resources exist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid factors, e.g. jobs, fertile land, climate or water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both factors are linked to population concentration or avoidance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. urban jobs and fertile farmland",
          },
        },
        {
          id: "cieigeo-u2-pd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country has a birth rate of 18 per 1 000 and a death rate of 12 per 1 000. What is its natural increase rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18 per 1 000" },
              { id: "b", text: "12 per 1 000" },
              { id: "c", text: "6 per 1 000" },
              { id: "d", text: "30 per 1 000" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Natural increase",
                statement: "Birth rate - death rate.",
              },
            ],
            steps: [
              { reasoning: "18 - 12 = 6 per 1 000.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "6 per 1 000",
          },
        },
        {
          id: "cieigeo-u2-pd-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has a population of 100 000, a birth rate of 15 per 1 000, a death rate of 10 per 1 000 and net immigration of 200. (a) Calculate the natural increase in people. (b) Calculate the total population change.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Natural increase (people)",
                answer: 500,
                unit: "people",
              },
              {
                label: "(b) Total population change (people)",
                answer: 700,
                unit: "people",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Population change",
                statement: "Natural increase + net migration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) (15 - 10) per 1 000 of 100 000 = 500.",
                working: "5 \\times 100 = 500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 500 + 200 = 700 people.",
                working: "500 + 200 = 700",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 500 (b) 700",
          },
        },
        {
          id: "cieigeo-u2-pd-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why many developing countries have a young population structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population structure",
                statement: "Birth and death rates shape age structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Birth rates are often high in developing countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Death rates, especially infant mortality, may remain relatively high.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A large number of births creates a broad base of young people.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High birth rates produce many young people",
          },
        },
        {
          id: "cieigeo-u2-pd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which measure best indicates whether a country's population is growing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population density alone" },
              { id: "b", text: "Total land area" },
              { id: "c", text: "Birth rate alone" },
              { id: "d", text: "Natural increase plus net migration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population change",
                statement: "Natural increase plus migration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Population change depends on births, deaths and migration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Natural increase plus net migration",
          },
        },
        {
          id: "cieigeo-u2-pd-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how population distribution can affect a country's development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Population and development",
                statement: "Distribution affects services, jobs and land use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dense urban areas can concentrate jobs, services and economic activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rapid concentration may overload housing, transport and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sparse rural areas may have limited access to services and markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Balanced conclusion: distribution affects both opportunities and pressures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Distribution creates opportunities and pressures for development",
          },
        },
        {
          id: "cieigeo-u2-pd-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A city grows from 250 000 to 400 000 people. (a) Calculate the absolute increase. (b) Calculate the percentage increase.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Absolute increase (people)",
                answer: 150000,
                unit: "people",
              },
              { label: "(b) Percentage increase (%)", answer: 60, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Growth",
                statement: "Increase = new - old; % = increase ÷ old x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 400 000 - 250 000 = 150 000 people.",
                working: "400000 - 250000 = 150000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 150 000 ÷ 250 000 x 100 = 60%.",
                working: "150000 / 250000 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 150 000 people (b) 60%",
          },
        },
        {
          id: "cieigeo-u2-pd-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an ageing population can affect a country's economy and public services.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ageing population",
                statement: "Lower birth and death rates change age structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A smaller working-age population may reduce labour supply and tax revenue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pension and healthcare demand rises with more older people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Governments may need to raise taxes or reduce other spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Migration or higher retirement ages may be needed to support services.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ageing populations increase demand for care and pensions",
          },
        },
        {
          id: "cieigeo-u2-pd-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best compares developed and developing countries' population change?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "All countries have identical birth and death rates",
              },
              {
                id: "b",
                text: "Developed countries usually have low growth and ageing populations; developing countries often have higher birth rates and younger populations",
              },
              {
                id: "c",
                text: "Developing countries always have declining populations",
              },
              { id: "d", text: "Migration has no effect on population change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Population change",
                statement:
                  "Development stage affects birth, death and age structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The comparison reflects differences in fertility, mortality and migration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Developed countries age; developing countries tend to be younger",
          },
        },
        {
          id: "cieigeo-u2-pd-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define population density and natural increase. (b) Calculate density for 90 000 people in 750 km². (c) Calculate natural increase from birth rate 20 and death rate 14 per 1 000. (d) Explain two reasons for uneven population distribution. (e) Explain how migration affects population change. (f) Describe the population structure of a developing country. (g) Describe the population structure of a developed country. (h) Explain how population change can influence development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Population",
                statement: "Distribution, change and development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Density = population ÷ area; natural increase = birth rate - death rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 90 000 ÷ 750 = 120 people/km².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 20 - 14 = 6 per 1 000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) e.g. jobs/urban opportunities and fertile land or water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Immigration increases and emigration decreases population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) High birth rates create a large young population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Low birth and death rates create an ageing population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Growth or decline affects labour, services, demand and development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Population distribution and change.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-pd-notes",
      title: "Population — notes",
      summary:
        "Density=pop/area. Natural increase=births-deaths. Distribution uneven — urban concentration.",
      sections: [
        {
          heading: "Key idea",
          body: "Population patterns reflect economic opportunities and environmental constraints.",
        },
        {
          heading: "Change",
          body: "Births, deaths, migration determine population dynamics.",
        },
      ],
    },
  ],
};

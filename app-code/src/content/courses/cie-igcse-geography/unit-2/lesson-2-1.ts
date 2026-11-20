import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "cieigeo-u2-lesson-2-1",
  code: "2-1",
  title: "Population: Distribution and Change",
  goal: "I CAN describe population distribution, density and change over time.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: human geography"],
  
  vocabulary: [
    { term: "Population distribution", definition: "Pattern of where people live." },
    { term: "Population density", definition: "Number of people per unit area." },
    { term: "Birth rate", definition: "Live births per 1000 population per year." },
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
          { name: "Population change", statement: "natural increase + migration" },
        ],
        workedExample: {
          problem: "Country A: birth rate 15, death rate 10, migration +50,000. Calculate natural increase and population change.",
          solution: "Natural increase = 15-10 = 5 per 1000. Population change = natural increase + migration.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-pd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is population density?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number of people per unit area"
                    },
                    {
                              "id": "b",
                              "text": "Total population"
                    },
                    {
                              "id": "c",
                              "text": "Population growth rate"
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
                              "name": "Density",
                              "statement": "People per area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Density = population ÷ area.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "People per unit area"
},
        },
        {
          id: "cieigeo-u2-pd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is natural increase?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Natural increase",
                              "statement": "Births - deaths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birth rate minus death rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Excludes migration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Births minus deaths"
},
        },
        {
          id: "cieigeo-u2-pd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is population distribution uneven?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Population distribution",
                              "statement": "Factors affecting distribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "People cluster where resources/opportunities exist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Avoid harsh environments (deserts, mountains).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Urban areas offer jobs/services.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Resources, climate, opportunities"
},
        },
        {
          id: "cieigeo-u2-pd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define population distribution, population density, birth rate, death rate, natural increase, migration. (b) What is population density? (c) What is natural increase? (d) Why is population distribution uneven? (e) What factors affect population change? (f) How does migration affect population? (g) Compare population patterns in developed vs developing countries. (h) Explain how population change affects development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Population",
                              "statement": "Distribution, change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) People per unit area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Births minus deaths.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Resources, climate, opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Births, deaths, migration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Increases/decreases population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Developed: aging, low growth; developing: young, high growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid development impact explanation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Population distribution and change."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-pd-notes",
      title: "Population — notes",
      summary: "Density=pop/area. Natural increase=births-deaths. Distribution uneven — urban concentration.",
      sections: [
        { heading: "Key idea", body: "Population patterns reflect economic opportunities and environmental constraints." },
        { heading: "Change", body: "Births, deaths, migration determine population dynamics." },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson521: Lesson = {
  id: "ciealgeo-u2-lesson-2-1",
  code: "2-1",
  title: "Development and Inequality",
  goal: "I CAN explain development indicators, inequality and development theories.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: human"],
  
  vocabulary: [
    { term: "Development", definition: "Improvement in living standards and wellbeing." },
    { term: "HDI", definition: "Human Development Index." },
    { term: "Gini coefficient", definition: "Measure of income inequality." },
    { term: "Core-periphery model", definition: "Developed core exploits developing periphery." },
    { term: "Dependency theory", definition: "Developing countries dependent on developed." },
    { term: "Modernisation theory", definition: "Development through economic growth." },
  ],
  concepts: [
    {
      id: "ciealgeo-u2-s1-dev",
      title: "Development",
      skill: "Analyse development and inequality.",
      lesson: {
        sections: [
          {
            heading: "Development measures",
            body: "GDP per capita, HDI, poverty rates, infant mortality, access to services. Development is multidimensional.",
          },
          {
            heading: "Inequality",
            body: "Gini coefficient measures income distribution. Spatial inequality: urban vs rural, core vs periphery. Within-country inequality increasing.",
          },
          {
            heading: "Development theories",
            body: "Modernisation: linear progression through stages. Dependency: underdevelopment caused by exploitation. World systems: core, semi-periphery, periphery.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "health+education+income" },
          { name: "Gini", statement: "inequality measure" },
          { name: "Core-periphery", statement: "exploitation model" },
        ],
        workedExample: {
          problem: "Why do some countries remain poor despite resources?",
          solution: "Dependency theory: colonial exploitation, unequal trade, debt burden → structural underdevelopment.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-dev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is HDI?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Human Development Index"
                    },
                    {
                              "id": "b",
                              "text": "GDP measure"
                    },
                    {
                              "id": "c",
                              "text": "Population"
                    },
                    {
                              "id": "d",
                              "text": "Inequality measure"
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
          "finalAnswer": "Development measure"
},
        },
        {
          id: "ciealgeo-u2-dev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Gini coefficient?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gini",
                              "statement": "Inequality measure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measures income inequality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "0 = perfect equality, 1 = perfect inequality.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inequality measure"
},
        },
        {
          id: "ciealgeo-u2-dev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is dependency theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dependency",
                              "statement": "Underdevelopment cause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Developing countries dependent on developed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unequal trade, debt, exploitation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Structural underdevelopment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Dependency model"
},
        },
        {
          id: "ciealgeo-u2-dev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define development, HDI, Gini coefficient, core-periphery, dependency theory, modernisation. (b) What is HDI? (c) What is Gini? (d) What is dependency theory? (e) What is core-periphery? (f) What are development indicators? (g) What causes inequality? (h) Evaluate whether development theories explain global inequality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Development",
                              "statement": "Inequality, theories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Health+education+income.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Inequality measure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Developing reliance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Exploitation model.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) GDP, HDI, poverty, health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Colonialism, trade, institutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Theories partial — multiple factors.",
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
      id: "ciealgeo-u2-dev-notes",
      title: "Development — notes",
      summary: "HDI, Gini measure development/inequality. Dependency theory explains underdevelopment.",
      sections: [
        { heading: "Key idea", body: "Development is multidimensional — not just income." },
        { heading: "Inequality", body: "Spatial and income inequality persist despite global growth." },
      ],
    },
  ],
};

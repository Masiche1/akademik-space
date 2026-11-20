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
                              "text": "GDP measure"
                    },
                    {
                              "id": "c",
                              "text": "Poverty rate"
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

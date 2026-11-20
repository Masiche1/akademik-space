import type { Lesson } from "../../../types.ts";

export const lesson322: Lesson = {
  id: "cieigeo-u3-lesson-3-2",
  code: "3-2",
  title: "Geographical Skills: Data Interpretation and Presentation",
  goal: "I CAN interpret and present geographical data using appropriate techniques.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 4: data skills"],
  
  vocabulary: [
    { term: "Data presentation", definition: "Visual representation of data." },
    { term: "Graph", definition: "Visual display of numerical data." },
    { term: "Table", definition: "Organised data in rows/columns." },
    { term: "Map", definition: "Visual representation of spatial data." },
    { term: "Scatter graph", definition: "Shows relationship between two variables." },
    { term: "Bar chart", definition: "Compares categories using bars." },
  ],
  concepts: [
    {
      id: "cieigeo-u3-s2-data",
      title: "Data interpretation",
      skill: "Interpret and present geographical data.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "Quantitative: numbers (measurements). Qualitative: descriptions (observations). Choose presentation based on data type and purpose.",
          },
          {
            heading: "Presentation methods",
            body: "Bar charts: compare categories. Line graphs: show trends over time. Scatter graphs: show correlations. Pie charts: show proportions. Maps: show spatial patterns. Tables: detailed data.",
          },
        ],
        keyFormulas: [
          { name: "Bar chart", statement: "compare categories" },
          { name: "Line graph", statement: "show trends" },
          { name: "Scatter graph", statement: "show correlation" },
        ],
        workedExample: {
          problem: "You have data on rainfall in 12 months. How should you present it?",
          solution: "Line graph — shows trend over time. Bar chart also possible for monthly comparison.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a scatter graph used for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Showing relationship between two variables"
                    },
                    {
                              "id": "b",
                              "text": "Comparing categories"
                    },
                    {
                              "id": "c",
                              "text": "Showing proportions"
                    },
                    {
                              "id": "d",
                              "text": "Showing trends over time"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scatter graph",
                              "statement": "Correlation display."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scatter graph shows variable relationship.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Variable relationship"
},
        },
        {
          id: "cieigeo-u3-di-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When should you use a bar chart?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Data presentation",
                              "statement": "Chart selection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For comparing categories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. population by city.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Comparing categories"
},
        },
        {
          id: "cieigeo-u3-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between quantitative and qualitative data?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data types",
                              "statement": "Numbers vs descriptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quantitative = numerical measurements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Qualitative = descriptive observations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Choose presentation accordingly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Numbers vs descriptions"
},
        },
        {
          id: "cieigeo-u3-di-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define data presentation, graph, table, map, scatter graph, bar chart. (b) What is data presentation? (c) When use a bar chart? (d) When use a line graph? (e) When use a scatter graph? (f) What is quantitative data? (g) What is qualitative data? (h) Choose appropriate presentation for: (i) monthly rainfall, (ii) population by city, (iii) relationship between income and life expectancy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data skills",
                              "statement": "Interpretation, presentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Visual data representation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Comparing categories.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Showing trends over time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Showing correlations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Numerical measurements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Descriptive observations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Correct chart choices.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data interpretation and presentation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-di-notes",
      title: "Data skills — notes",
      summary: "Bar=compare, line=trend, scatter=correlation, pie=proportion. Choose based on data type/purpose.",
      sections: [
        { heading: "Key idea", body: "Effective data presentation makes patterns clear and accessible." },
        { heading: "Maps", body: "Show spatial patterns — choropleth, isoline, proportional symbols." },
      ],
    },
  ],
};

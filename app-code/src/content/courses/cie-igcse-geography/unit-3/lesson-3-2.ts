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
    {
      term: "Scatter graph",
      definition: "Shows relationship between two variables.",
    },
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
          problem:
            "You have data on rainfall in 12 months. How should you present it?",
          solution:
            "Line graph — shows trend over time. Bar chart also possible for monthly comparison.",
        },
      },
      questions: [
        {
          id: "cieigeo-u3-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a scatter graph used for?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Showing proportions",
              },
              {
                id: "b",
                text: "Showing relationship between two variables",
              },
              {
                id: "c",
                text: "Showing trends over time",
              },
              {
                id: "d",
                text: "Comparing categories",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Scatter graph",
                statement: "Correlation display.",
              },
            ],
            steps: [
              {
                reasoning: "Scatter graph shows variable relationship.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Variable relationship",
          },
        },
        {
          id: "cieigeo-u3-di-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When should you use a bar chart?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data presentation",
                statement: "Chart selection.",
              },
            ],
            steps: [
              {
                reasoning: "For comparing categories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. population by city.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Comparing categories",
          },
        },
        {
          id: "cieigeo-u3-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between quantitative and qualitative data?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data types",
                statement: "Numbers vs descriptions.",
              },
            ],
            steps: [
              {
                reasoning: "Quantitative = numerical measurements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Qualitative = descriptive observations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choose presentation accordingly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Numbers vs descriptions",
          },
        },
        {
          id: "cieigeo-u3-di-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define data presentation, graph, table, map, scatter graph, bar chart. (b) What is data presentation? (c) When use a bar chart? (d) When use a line graph? (e) When use a scatter graph? (f) What is quantitative data? (g) What is qualitative data? (h) Choose appropriate presentation for: (i) monthly rainfall, (ii) population by city, (iii) relationship between income and life expectancy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data skills",
                statement: "Interpretation, presentation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Visual data representation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Comparing categories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Showing trends over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Showing correlations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Numerical measurements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Descriptive observations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Correct chart choices.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Data interpretation and presentation.",
          },
        },
        {
          id: "cieigeo-u3-di-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bar chart is most appropriate for:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Showing exact map locations" },
              { "id": "b", "text": "Showing continuous change over time" },
              { "id": "c", "text": "Showing correlation between two variables" },
              { "id": "d", "text": "Comparing categories such as population by city" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Bar chart", "statement": "Compares separate categories." }
            ],
            "steps": [
              { "reasoning": "Bars make category comparisons easy to see.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Comparing categories"
          }
        },
        {
          id: "cieigeo-u3-di-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the mean of the values 4, 8, 12 and 16.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 10, "unit": "value" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Mean", "statement": "Sum ÷ count." }
            ],
            "steps": [
              { "reasoning": "(4 + 8 + 12 + 16) ÷ 4 = 10.", "working": "40 / 4 = 10", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "10"
          }
        },
        {
          id: "cieigeo-u3-di-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When should a line graph be used instead of a pie chart?",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Chart choice", "statement": "Line graphs show trends; pie charts show proportions." }
            ],
            "steps": [
              { "reasoning": "Use a line graph when data changes continuously over time.", "marks": 1, "markCode": "M" },
              { "reasoning": "Use a pie chart when showing shares of a whole at one time.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Line for trends; pie for proportions"
          }
        },
        {
          id: "cieigeo-u3-di-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scatter graph is used to show:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The relationship between two numerical variables" },
              { "id": "b", "text": "Only qualitative descriptions" },
              { "id": "c", "text": "The proportion of categories in a total" },
              { "id": "d", "text": "Exact values without axes" }
            ],
            "correctChoiceId": "a"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Scatter graph", "statement": "Displays correlation between variables." }
            ],
            "steps": [
              { "reasoning": "Each point represents a pair of numerical values.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Relationship between two variables"
          }
        },
        {
          id: "cieigeo-u3-di-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the data set 4, 7, 7, 9, 13: (a) Calculate the median. (b) Calculate the range.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Median", "answer": 7, "unit": "value" },
              { "label": "(b) Range", "answer": 9, "unit": "value" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Statistics", "statement": "Median = middle ordered value; range = max - min." }
            ],
            "steps": [
              { "reasoning": "(a) Ordered middle value is 7.", "working": "4, 7, 7, 9, 13; median = 7", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 13 - 4 = 9.", "working": "13 - 4 = 9", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 7 (b) 9"
          }
        },
        {
          id: "cieigeo-u3-di-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to choose an appropriate presentation for quantitative and qualitative geographical data.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Data presentation", "statement": "Match method to data type and purpose." }
            ],
            "steps": [
              { "reasoning": "Quantitative data are numbers and suit graphs, charts and maps.", "marks": 1, "markCode": "M" },
              { "reasoning": "Qualitative data are descriptions and may need categories or annotated maps.", "marks": 1, "markCode": "M" },
              { "reasoning": "Choose according to whether the aim is comparison, trend or correlation.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Choose by data type and purpose"
          }
        },
        {
          id: "cieigeo-u3-di-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of qualitative data?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Temperature recorded in °C" },
              { "id": "b", "text": "Notes describing land use in a field" },
              { "id": "c", "text": "Population counted in thousands" },
              { "id": "d", "text": "Rainfall measured in millimetres" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Qualitative data", "statement": "Descriptive rather than numerical." }
            ],
            "steps": [
              { "reasoning": "Descriptions of land use are qualitative observations.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Descriptive land-use notes"
          }
        },
        {
          id: "cieigeo-u3-di-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to interpret a scatter graph showing a positive, negative or absent correlation.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Scatter interpretation", "statement": "Point pattern reveals variable relationship." }
            ],
            "steps": [
              { "reasoning": "Positive correlation: points rise from left to right as both variables increase.", "marks": 1, "markCode": "M" },
              { "reasoning": "Negative correlation: points fall from left to right as one variable increases.", "marks": 1, "markCode": "M" },
              { "reasoning": "No correlation: points are scattered with no clear pattern.", "marks": 1, "markCode": "M" },
              { "reasoning": "Interpret cautiously because correlation does not prove causation.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Point direction shows correlation; causation is not proven"
          }
        },
        {
          id: "cieigeo-u3-di-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Annual rainfall at a station is 620 mm, 780 mm, 540 mm and 860 mm. (a) Calculate the mean. (b) Calculate the range.",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "(a) Mean rainfall (mm)", "answer": 700, "unit": "mm" },
              { "label": "(b) Range (mm)", "answer": 340, "unit": "mm" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "formula", "name": "Statistics", "statement": "Mean = sum ÷ count; range = max - min." }
            ],
            "steps": [
              { "reasoning": "(a) 2 800 ÷ 4 = 700 mm.", "working": "2800 / 4 = 700", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) 860 - 540 = 320 mm.", "working": "860 - 540 = 320", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "(a) 700 mm (b) 320 mm"
          }
        },
        {
          id: "cieigeo-u3-di-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the strengths and weaknesses of using a pie chart for geographical data.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "comparison", "name": "Presentation choice", "statement": "Each graph has strengths and limits." }
            ],
            "steps": [
              { "reasoning": "Strength: clearly shows proportions of a whole at one time.", "marks": 1, "markCode": "M" },
              { "reasoning": "Strength: simple for readers to understand.", "marks": 1, "markCode": "M" },
              { "reasoning": "Weakness: poor for showing change over time or precise comparison.", "marks": 1, "markCode": "M" },
              { "reasoning": "Conclusion: best for shares of a total, not trends.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Pie charts show proportions but not trends"
          }
        },
        {
          id: "cieigeo-u3-di-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which presentation is least suitable for showing how rainfall changes over 12 months?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A bar chart of monthly rainfall" },
              { "id": "b", "text": "A line graph of monthly rainfall" },
              { "id": "c", "text": "A pie chart of total annual rainfall" },
              { "id": "d", "text": "A table of monthly values" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Chart choice", "statement": "Trends need time-series presentation." }
            ],
            "steps": [
              { "reasoning": "A pie chart cannot display monthly change over time.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Pie chart"
          }
        },
        {
          id: "cieigeo-u3-di-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define quantitative and qualitative data. (b) State when to use a bar chart. (c) State when to use a line graph. (d) State when to use a scatter graph. (e) State when to use a pie chart. (f) Calculate the mean of 5, 10, 15 and 20. (g) Calculate the range of 12, 18, 7 and 23. (h) Choose presentations for monthly temperature and population by city.",
          response: { "type": "open" },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "Data skills", "statement": "Interpretation and presentation." }
            ],
            "steps": [
              { "reasoning": "(a) Quantitative = numbers; qualitative = descriptions.", "marks": 1, "markCode": "M" },
              { "reasoning": "(b) Comparing separate categories.", "marks": 1, "markCode": "M" },
              { "reasoning": "(c) Showing trends over time.", "marks": 1, "markCode": "M" },
              { "reasoning": "(d) Showing correlation between two variables.", "marks": 1, "markCode": "M" },
              { "reasoning": "(e) Showing proportions of a whole.", "marks": 1, "markCode": "M" },
              { "reasoning": "(f) 50 ÷ 4 = 12.5.", "marks": 1, "markCode": "M" },
              { "reasoning": "(g) 23 - 7 = 16.", "marks": 1, "markCode": "M" },
              { "reasoning": "(h) Line graph for temperature trend; bar chart for city populations.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "Data interpretation and presentation."
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u3-di-notes",
      title: "Data skills — notes",
      summary:
        "Bar=compare, line=trend, scatter=correlation, pie=proportion. Choose based on data type/purpose.",
      sections: [
        {
          heading: "Key idea",
          body: "Effective data presentation makes patterns clear and accessible.",
        },
        {
          heading: "Maps",
          body: "Show spatial patterns — choropleth, isoline, proportional symbols.",
        },
      ],
    },
  ],
};

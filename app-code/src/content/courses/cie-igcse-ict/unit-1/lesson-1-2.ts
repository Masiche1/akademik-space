import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cieict-u1-lesson-1-2",
  code: "1-2",
  title: "Spreadsheets",
  goal: "I CAN use formulas, functions and data analysis tools in spreadsheets.",
  standards: ["Cambridge IGCSE ICT 0417: spreadsheets", "0417 section 3: spreadsheets"],
  
  vocabulary: [
    { term: "Spreadsheet", definition: "Grid of cells for calculations and data analysis." },
    { term: "Formula", definition: "Equation starting with = performing calculations." },
    { term: "Function", definition: "Built-in formula — SUM, AVERAGE, VLOOKUP." },
    { term: "Cell reference", definition: "Address of a cell — A1, B2." },
    { term: "What-if analysis", definition: "Testing how changes affect results." },
    { term: "Chart", definition: "Graphical display of spreadsheet data." },
  ],
  concepts: [
    {
      id: "cieict-u1-s2-sheets",
      title: "Spreadsheet skills",
      skill: "Use formulas, functions and charts at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Formulas and functions",
            body: "Formulas start with =: =A1+B2. Functions: SUM(range), AVERAGE(range), COUNT, MAX, MIN, VLOOKUP for lookups. Relative vs absolute references ($A$1) for copying formulas.",
          },
          {
            heading: "Analysis and visualisation",
            body: "Charts (bar, line, pie) visualise data. What-if analysis tests scenarios by changing inputs. Sorting/filtering organises data. Conditional formatting highlights patterns.",
          },
        ],
        keyFormulas: [
          { name: "=SUM(A1:A10)", statement: "sum range" },
          { name: "=AVERAGE(B2:B20)", statement: "average range" },
          { name: "$A$1", statement: "absolute reference" },
        ],
        workedExample: {
          problem: "Calculate total sales and average for a range of products.",
          solution: "=SUM(C2:C10) for total; =AVERAGE(C2:C10) for average; chart for visual comparison.",
        },
      },
      questions: [
        {
          id: "cieict-u1-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a formula start with in a spreadsheet?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "="
                    },
                    {
                              "id": "b",
                              "text": "+"
                    },
                    {
                              "id": "c",
                              "text": "@"
                    },
                    {
                              "id": "d",
                              "text": "#"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Formula",
                              "statement": "Starts with =."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Formulas begin with =.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "="
},
        },
        {
          id: "cieict-u1-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three common spreadsheet functions and what they do.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Functions",
                              "statement": "Built-in calculations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SUM, AVERAGE, COUNT/MAX/MIN.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each correctly described.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "SUM/AVERAGE/COUNT etc."
},
        },
        {
          id: "cieict-u1-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a relative and absolute cell reference? When use absolute?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cell references",
                              "statement": "Relative vs absolute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relative changes when copied; absolute ($A$1) doesn't.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Absolute for fixed values (tax rates, constants).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Relative vs absolute + use case"
},
        },
        {
          id: "cieict-u1-sp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define spreadsheet, formula, function, cell reference, what-if analysis, chart. (b) What does =SUM(A1:A10) do? (c) What does =AVERAGE do? (d) What is VLOOKUP for? (e) What is what-if analysis? (f) When use a pie chart vs bar chart? (g) What is conditional formatting? (h) Design a spreadsheet for a school tuck shop budget.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Spreadsheets",
                              "statement": "Formulas, functions, charts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Sums range A1:A10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Mean of range.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Looks up value in table.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Test scenarios by changing inputs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Pie=proportions; bar=comparison.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Highlights cells by condition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid tuck shop spreadsheet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Spreadsheet formulas, functions and analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-sp-notes",
      title: "Spreadsheets — notes",
      summary: "Formulas start with =; SUM/AVERAGE/COUNT functions; absolute refs $A$1 for constants.",
      sections: [
        { heading: "Key idea", body: "Spreadsheets turn data into calculations, analysis and charts." },
        { heading: "What-if", body: "Change inputs to see how outputs change." },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cieict-u1-lesson-1-2",
  code: "1-2",
  title: "Spreadsheets",
  goal: "I CAN use formulas, functions and data analysis tools in spreadsheets.",
  standards: [
    "Cambridge IGCSE ICT 0417: spreadsheets",
    "0417 section 3: spreadsheets",
  ],

  vocabulary: [
    {
      term: "Spreadsheet",
      definition: "Grid of cells for calculations and data analysis.",
    },
    {
      term: "Formula",
      definition: "Equation starting with = performing calculations.",
    },
    {
      term: "Function",
      definition: "Built-in formula — SUM, AVERAGE, VLOOKUP.",
    },
    { term: "Cell reference", definition: "Address of a cell — A1, B2." },
    {
      term: "What-if analysis",
      definition: "Testing how changes affect results.",
    },
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
          solution:
            "=SUM(C2:C10) for total; =AVERAGE(C2:C10) for average; chart for visual comparison.",
        },
      },
      questions: [
        {
          id: "cieict-u1-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a formula start with in a spreadsheet?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "+",
              },
              {
                id: "b",
                text: "=",
              },
              {
                id: "c",
                text: "@",
              },
              {
                id: "d",
                text: "#",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formula",
                statement: "Starts with =.",
              },
            ],
            steps: [
              {
                reasoning: "Formulas begin with =.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "=",
          },
        },
        {
          id: "cieict-u1-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three common spreadsheet functions and what they do.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functions",
                statement: "Built-in calculations.",
              },
            ],
            steps: [
              {
                reasoning: "SUM, AVERAGE, COUNT/MAX/MIN.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each correctly described.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "SUM/AVERAGE/COUNT etc.",
          },
        },
        {
          id: "cieict-u1-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a relative and absolute cell reference? When use absolute?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell references",
                statement: "Relative vs absolute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relative changes when copied; absolute ($A$1) doesn't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Absolute for fixed values (tax rates, constants).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Relative vs absolute + use case",
          },
        },
        {
          id: "cieict-u1-sp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define spreadsheet, formula, function, cell reference, what-if analysis, chart. (b) What does =SUM(A1:A10) do? (c) What does =AVERAGE do? (d) What is VLOOKUP for? (e) What is what-if analysis? (f) When use a pie chart vs bar chart? (g) What is conditional formatting? (h) Design a spreadsheet for a school tuck shop budget.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Spreadsheets",
                statement: "Formulas, functions, charts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Sums range A1:A10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Mean of range.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Looks up value in table.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Test scenarios by changing inputs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Pie=proportions; bar=comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Highlights cells by condition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid tuck shop spreadsheet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Spreadsheet formulas, functions and analysis.",
          },
        },
        {
          id: "cieict-u1-sp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the function =COUNT(A1:A10) return?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of numeric values in the range" },
              { id: "b", text: "The largest value in the range" },
              { id: "c", text: "The sum of the range" },
              { id: "d", text: "The average of the range" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "COUNT",
                statement: "Counts numeric values.",
              },
            ],
            steps: [
              {
                reasoning: "COUNT counts numeric entries in a range.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Count of numeric values",
          },
        },
        {
          id: "cieict-u1-sp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How is an absolute cell reference written?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A$1 only" },
              { id: "b", text: "@A1" },
              { id: "c", text: "A1" },
              { id: "d", text: "$A$1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute reference",
                statement: "$A$1 stays fixed when copied.",
              },
            ],
            steps: [
              {
                reasoning: "Absolute references use $ before column and row.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$A$1",
          },
        },
        {
          id: "cieict-u1-sp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which chart type best shows the proportion of each category within a whole?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pie chart" },
              { id: "b", text: "Line chart" },
              { id: "c", text: "Scatter plot" },
              { id: "d", text: "Bar chart" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pie chart",
                statement: "Proportions of a whole.",
              },
            ],
            steps: [
              {
                reasoning: "Pie charts show parts of a whole.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Pie chart",
          },
        },
        {
          id: "cieict-u1-sp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'what-if analysis' in a spreadsheet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Printing the sheet" },
              { id: "b", text: "Deleting unused cells" },
              { id: "c", text: "Sorting data alphabetically" },
              {
                id: "d",
                text: "Testing how changes to inputs affect calculated results",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "What-if analysis",
                statement: "Scenario testing via inputs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "What-if analysis changes inputs to see output changes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Changing inputs to test outcomes",
          },
        },
        {
          id: "cieict-u1-sp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spreadsheet column contains the values 10, 20, 30 and 40. What does =SUM of these cells return?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SUM function",
                statement: "Adding a range.",
              },
            ],
            steps: [
              {
                reasoning: "10 + 20 + 30 + 40 = 100.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "cieict-u1-sp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Test scores in cells B1:B3 are 80, 90 and 100. What is =AVERAGE(B1:B3)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "AVERAGE function",
                statement: "Mean of a range.",
              },
            ],
            steps: [
              {
                reasoning: "(80 + 90 + 100) / 3 = 270 / 3 = 90.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "90",
          },
        },
        {
          id: "cieict-u1-sp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An item costs 25 and a 20% discount is applied. What is the discount amount, and what is the final price?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage calculation",
                statement: "Discount and final price.",
              },
            ],
            steps: [
              {
                reasoning: "Discount = 20% of 25 = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final price = 25 - 5 = 20.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Discount 5, price 20",
          },
        },
        {
          id: "cieict-u1-sp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A formula range B2:B9 is entered. How many cells does the range contain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Range count",
                statement: "Inclusive row count.",
              },
            ],
            steps: [
              {
                reasoning: "Rows 2 to 9 inclusive = 8 cells.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "8 cells",
          },
        },
        {
          id: "cieict-u1-sp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should an absolute reference ($A$1) be used for a tax rate when copying a formula down a column of prices?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Absolute references",
                statement: "$A$1 keeps constant values fixed.",
              },
            ],
            steps: [
              {
                reasoning: "The tax rate cell must stay fixed for every row.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A relative reference would change the rate per row and give wrong results.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fixed rate via absolute reference",
          },
        },
        {
          id: "cieict-u1-sp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would turn a column of monthly sales figures into a chart that compares them visually.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chart creation",
                statement: "Data selection to labelled chart.",
              },
            ],
            steps: [
              {
                reasoning: "Select the cells containing the sales data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Insert a chart (e.g. bar or line) choosing an appropriate type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Label axes/title so the comparison is clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Select data, insert chart, label",
          },
        },
        {
          id: "cieict-u1-sp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A formula shows the error #DIV/0!. What caused it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A missing = sign" },
              { id: "b", text: "A division by zero" },
              { id: "c", text: "The range is empty" },
              { id: "d", text: "Too many columns" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formula errors",
                statement: "Error codes indicate fault type.",
              },
            ],
            steps: [
              {
                reasoning: "#DIV/0! means division by zero.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Division by zero",
          },
        },
        {
          id: "cieict-u1-sp-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of sorting and filtering data in a spreadsheet?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To organise and view specific records more easily",
              },
              { id: "b", text: "To print faster" },
              { id: "c", text: "To change the data values" },
              { id: "d", text: "To merge cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sort/filter",
                statement: "Organising data views.",
              },
            ],
            steps: [
              {
                reasoning: "Sorting/filtering organises and isolates records.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Organise and isolate records",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-sp-notes",
      title: "Spreadsheets — notes",
      summary:
        "Formulas start with =; SUM/AVERAGE/COUNT functions; absolute refs $A$1 for constants.",
      sections: [
        {
          heading: "Key idea",
          body: "Spreadsheets turn data into calculations, analysis and charts.",
        },
        {
          heading: "What-if",
          body: "Change inputs to see how outputs change.",
        },
      ],
    },
  ],
};

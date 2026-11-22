import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cieigcseict-u5-lesson-5-1",
  code: "5-1",
  title: "Spreadsheets: Formulae, Functions and Modelling",
  goal: "I CAN create complex formulae, apply functions and evaluate spreadsheet models.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 5: ICT applications in depth"],
  vocabulary: [
    { term: "Cell reference", definition: "Address of a cell (e.g. B3)." },
    {
      term: "Formula",
      definition: "Calculation starting with = (e.g. =B2*C2).",
    },
    {
      term: "Function",
      definition: "Built-in calculation (SUM, IF, VLOOKUP).",
    },
    {
      term: "Absolute reference",
      definition: "$B$2 — fixed reference when copied.",
    },
    {
      term: "What-if analysis",
      definition: "Testing model with different inputs.",
    },
    {
      term: "Spreadsheet model",
      definition: "System of formulae linking data.",
    },
  ],
  concepts: [
    {
      id: "cieigcseict-u5l1-c1-formulae",
      title: "Formulae and functions",
      skill: "Write and evaluate spreadsheet formulae and functions.",
      lesson: {
        sections: [
          {
            heading: "Formulae and references",
            body: 'Formulae start with `=` and use operators `+ - * / ^`. Cell references like `B2` are **relative** (change when copied); `$B$2` is **absolute** (fixed). Mixed `$B2` locks column only. Functions: `SUM(A1:A10)`, `AVERAGE`, `MAX`, `MIN`, `COUNT`. Nested functions work: `=IF(A1>50,"Pass","Fail")`.',
          },
          {
            heading: "Advanced functions and modelling",
            body: "`VLOOKUP` searches first column, returns matching value — useful for tables. `IF` makes conditional decisions. `COUNTIF`/`SUMIF` count/sum conditionally. **Modelling**: build linked formulae so changing one input updates whole model — used for budgets, forecasts, break-even analysis.",
          },
        ],
        keyFormulas: [
          { name: "SUM", statement: "=SUM(A1:A10) totals range" },
          { name: "IF", statement: "=IF(condition, true, false)" },
          { name: "VLOOKUP", statement: "=VLOOKUP(lookup, table, col, FALSE)" },
        ],
        workedExample: {
          problem:
            "If price is in B1, quantity in C1, total in D1 — write the formula for total including 15% VAT.",
          solution:
            "=B1*C1*1.15 — or =B1*C1*(1+0.15). When copied down, relative references adjust automatically.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A formula in Excel must start with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "@" },
              { id: "b", text: "*" },
              { id: "c", text: "+" },
              { id: "d", text: "=" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Formula start", statement: "=" },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** `=`",
            commonErrors: ["Wrong symbol."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does `$B$2` mean in a spreadsheet?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute ref", statement: "$B$2" },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Absolute cell reference — column B and row 2 stay fixed when formula copied; used for constants like tax rates.",
            commonErrors: ["Relative ref."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between relative and absolute references.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ref types",
                statement: "Relative vs absolute.",
              },
            ],
            steps: [
              { reasoning: "Relative.", marks: 1, markCode: "M" },
              { reasoning: "Absolute.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Relative `B2` changes when copied (B3, B4...); absolute `$B$2` stays fixed — use relative for data rows, absolute for constants like exchange rates.",
            commonErrors: ["No difference."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a formula to find the average of cells B2 to B20.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "AVERAGE", statement: "=AVERAGE(B2:B20)" },
            ],
            steps: [
              { reasoning: "Correct syntax.", marks: 2, markCode: "M" },
              { reasoning: "Range explained.", marks: 1, markCode: "M" },
              { reasoning: "Alternative.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "=AVERAGE(B2:B20) — or =SUM(B2:B20)/COUNT(B2:B20) as alternative; range specifies cells included.",
            commonErrors: ["Wrong syntax."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design a formula for commission: 5% on sales up to 10000, 8% above.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IF nested",
                statement: "Conditional commission.",
              },
            ],
            steps: [
              { reasoning: "IF structure.", marks: 2, markCode: "M" },
              { reasoning: "Threshold logic.", marks: 1, markCode: "M" },
              { reasoning: "Correct math.", marks: 1, markCode: "M" },
              { reasoning: "Explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "=IF(A1<=10000, A1*0.05, 10000*0.05+(A1-10000)*0.08) — applies 5% to first 10000, 8% to excess; or use VLOOKUP with commission table.",
            commonErrors: ["Single rate only."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does `VLOOKUP` do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "VLOOKUP",
                statement: "Table lookup.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Arguments.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Vertical lookup — searches first column of table for value, returns corresponding value from specified column; needs lookup value, table range, column index, exact match flag.",
            commonErrors: ["Sorts data."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which function adds up a range of cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ADD" },
              { id: "b", text: "SUM" },
              { id: "c", text: "TOTAL" },
              { id: "d", text: "COUNT" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "SUM", statement: "Addition." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** SUM",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of using absolute references.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Absolute refs", statement: "Constants." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. keeps constant references fixed when copied (tax rate, exchange rate) and prevents formula errors when filling ranges — avoids accidental reference drift.",
            commonErrors: ["No advantages."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'what-if analysis' in spreadsheets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "What-if",
                statement: "Scenario testing.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Changing input values to see effect on outputs — e.g. 'what if sales drop 10%?' Tests model robustness, supports decision-making; all linked formulae recalculate automatically.",
            commonErrors: ["Delete data."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of spreadsheets for business decision-making.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spreadsheet eval",
                statement: "Powerful but limited.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fast calculation, automatic updates, scenario testing — but prone to formula errors, limited for complex relational data, requires spreadsheet skills; best for numerical models not databases.",
            commonErrors: ["Perfect tool."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a spreadsheet formula, the `^` symbol is used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculating a percentage" },
              { id: "b", text: "Division" },
              { id: "c", text: "Raising a number to a power" },
              { id: "d", text: "Multiplication" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Operators", statement: "+ - * / ^." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Power/exponent",
            commonErrors: ["Wrong operator."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Cell B2 contains 200 and cell C2 contains the formula =B2*1.15. Calculate the value displayed in cell C2.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 230 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Formula evaluation",
                statement: "=B2*1.15 applies a 15% increase.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply 200 by 1.15 to apply the 15% increase.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "200 × 1.15 = 230 is displayed.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "230",
            commonErrors: ["Adds 15 instead of multiplying."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which function counts how many cells in range A1:A20 contain values greater than 50?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "COUNT" },
              { id: "b", text: "COUNTIF" },
              { id: "c", text: "SUM" },
              { id: "d", text: "MAX" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "COUNTIF", statement: "Conditional count." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** COUNTIF",
            commonErrors: ["COUNT ignores the condition."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the purpose of each argument in the formula =VLOOKUP(E2,A2:D10,3,FALSE).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "VLOOKUP args",
                statement: "Lookup, table, column, match type.",
              },
            ],
            steps: [
              { reasoning: "E2 = lookup value.", marks: 1, markCode: "M" },
              { reasoning: "A2:D10 = table range.", marks: 1, markCode: "M" },
              { reasoning: "3 = return 3rd column.", marks: 1, markCode: "M" },
              { reasoning: "FALSE = exact match required.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "E2 is the value to find in the first column of A2:D10; the function returns the value from column 3 of the matching row; FALSE requires an exact match (TRUE allows approximate).",
            commonErrors: ["Arguments confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A spreadsheet calculates an invoice total in cell B5 using the formula =B2*B3*1.2, where B2 holds the quantity 30 and B3 holds the unit price £45. Calculate the value displayed in B5.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1620, unit: "£" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multi-step formula",
                statement: "Quantity × price × 1.2 VAT.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply quantity and unit price: 30 × 45 = 1350 (subtotal before VAT).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Apply the 20% VAT factor: 1350 × 1.2.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "1350 × 1.2 = 1620.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "£1620",
            commonErrors: ["Forgets the VAT factor."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A school wants a spreadsheet to award 'Distinction' for marks of 70 or above, 'Pass' for marks from 40 to 69, and 'Fail' below 40. Design a formula for cell C2 (with the student's mark in B2) and evaluate one limitation of using nested IF functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nested IF",
                statement: "Chained conditions.",
              },
            ],
            steps: [
              { reasoning: "IF structure correct.", marks: 1, markCode: "M" },
              { reasoning: "Thresholds correct.", marks: 1, markCode: "M" },
              { reasoning: "Valid formula given.", marks: 1, markCode: "A" },
              { reasoning: "Limitation identified.", marks: 1, markCode: "A" },
              { reasoning: "Justified / alternative.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "=IF(B2>=70,\"Distinction\",IF(B2>=40,\"Pass\",\"Fail\")) — limitation: nesting becomes hard to read/audit with many categories and is error-prone; a VLOOKUP against a grade table is clearer and easier to update.",
            commonErrors: ["Wrong thresholds."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u5l1-c2-modelling",
      title: "Spreadsheet modelling and data analysis",
      skill: "Build and evaluate spreadsheet models for real scenarios.",
      lesson: {
        sections: [
          {
            heading: "Building models",
            body: "Effective models: **separate inputs** (raw data, assumptions) from **calculations** (formulae) and **outputs** (charts, summaries). Use named ranges, consistent formatting, input validation. Common models: budgets, break-even, loan repayment, forecast — link cells so changing assumptions updates everything.",
          },
          {
            heading: "Charts and data analysis",
            body: "Select data → Insert Chart. Types: column (comparison), line (trends over time), pie (proportions — avoid >5 slices), scatter (correlation). Format: titles, labels, legend, axis scales. Analysis: sort, filter, conditional formatting (highlight cells meeting criteria), pivot tables for summarising large datasets.",
          },
        ],
        keyFormulas: [
          {
            name: "Break-even",
            statement: "Fixed costs / (price - variable cost)",
          },
          { name: "Pivot table", statement: "Summarise large data" },
          { name: "Conditional formatting", statement: "Highlight by rule" },
        ],
        workedExample: {
          problem:
            "A business has £5000 fixed costs, £10 price, £6 variable cost per unit. Break-even?",
          solution:
            "BE = Fixed / (Price - Variable) = 5000 / (10-6) = 5000/4 = 1250 units — spreadsheet model can test different price/cost scenarios.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chart type shows trends over time best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scatter" },
              { id: "b", text: "Line chart" },
              { id: "c", text: "Column chart" },
              { id: "d", text: "Pie chart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Line chart", statement: "Trends." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Line",
            commonErrors: ["Pie chart."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'conditional formatting'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cond format",
                statement: "Highlight rules.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Automatically formats cells based on rules — e.g. highlight cells >100 red, or show data bars; makes patterns/errors visible quickly.",
            commonErrors: ["Delete data."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the break-even formula and what it shows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Break-even", statement: "FC/(P-V)" },
            ],
            steps: [
              { reasoning: "Formula.", marks: 1, markCode: "M" },
              { reasoning: "Meaning.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "BE = Fixed Costs / (Price - Variable Cost) — units needed to cover all costs, zero profit; above = profit, below = loss; key business planning tool.",
            commonErrors: ["Revenue only."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give three best practices for building a spreadsheet model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model best practice",
                statement: "Structure.",
              },
            ],
            steps: [
              { reasoning: "Three valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. separate inputs/calculations/outputs clearly, use consistent formatting and labels, add input validation and documentation — makes model understandable, maintainable, error-free.",
            commonErrors: ["No structure."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the advantages and limitations of using spreadsheets for financial forecasting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forecast eval",
                statement: "Powerful but assumptions.",
              },
            ],
            steps: [
              { reasoning: "Advantages.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fast recalculation, scenario testing, visualisation — but 'garbage in garbage out': forecasts only as good as assumptions; complex models hard to audit; needs complementary methods.",
            commonErrors: ["Perfect forecast."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'pivot table'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pivot", statement: "Summarise." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Interactive summary tool — drag fields to rows/columns/values to summarise large datasets (sums, counts, averages); updates automatically when source data changes.",
            commonErrors: ["Chart type."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should you use a pie chart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Showing proportions of a whole" },
              { id: "b", text: "Showing trends over time" },
              { id: "c", text: "Correlation analysis" },
              { id: "d", text: "Comparing many categories" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Pie chart", statement: "Proportions." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Proportions",
            commonErrors: ["Trends."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of separating inputs from calculations in a model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Input separation", statement: "Clarity." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. makes model easier to understand and audit, and changing assumptions automatically updates all outputs — improves reliability and what-if testing.",
            commonErrors: ["No benefit."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'garbage in, garbage out' in spreadsheet modelling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "GIGO", statement: "Input quality." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "M" },
              { reasoning: "Mitigation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Output quality depends on input quality — inaccurate data or wrong assumptions produce wrong results despite correct formulae; mitigate with data validation, checking, documentation.",
            commonErrors: ["Formula fixes all."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the suitability of spreadsheets versus databases for managing business data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sheet vs DB",
                statement: "Flat vs relational.",
              },
            ],
            steps: [
              { reasoning: "Spreadsheet strengths.", marks: 1, markCode: "M" },
              { reasoning: "Database strengths.", marks: 1, markCode: "M" },
              { reasoning: "When each.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Spreadsheets: numerical analysis, models, quick calculations — poor for large relational data, prone to errors. Databases: structured storage, complex queries, multi-user — overkill for simple calculations; choose by data complexity.",
            commonErrors: ["One always better."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which spreadsheet feature automatically highlights cells that meet a set rule, such as values above a target?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sorting" },
              { id: "b", text: "Pivot table" },
              { id: "c", text: "Conditional formatting" },
              { id: "d", text: "Filtering" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cond formatting",
                statement: "Rule-based highlighting.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Conditional formatting",
            commonErrors: ["Pivot table."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business has fixed costs of £8000, sells each unit for £25 and has a variable cost of £15 per unit. Calculate the break-even number of units.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 800, unit: "units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Break-even",
                statement: "Fixed costs / (price - variable cost)",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find contribution per unit: 25 - 15 = 10, then divide fixed costs by contribution.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "8000 / 10 = 800 units.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "800 units",
            commonErrors: ["Divides by price only."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scatter chart is most appropriate for showing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single total value" },
              { id: "b", text: "Steps in a process" },
              { id: "c", text: "The relationship between two variables" },
              { id: "d", text: "Proportions of a whole" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Scatter", statement: "Correlation." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Relationship between variables",
            commonErrors: ["Pie chart."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company sold 120 units in January, 150 units in February and 180 units in March. Calculate the percentage increase in sales from January to March.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage change",
                statement: "(New - Old) / Old × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Find the increase: 180 - 120 = 60 units.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Divide by the January figure: 60 / 120 = 0.5.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Convert to a percentage: 0.5 × 100 = 50%.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "50%",
            commonErrors: ["Uses February as base."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Contribution per unit equals selling price minus variable cost, and the break-even point equals fixed costs divided by contribution. A product sells for £65, has a variable cost of £40 per unit and the business has fixed costs of £5000. Calculate the contribution per unit and the break-even point in units.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25, unit: "£" },
              { label: "b", answer: 200, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Contribution & BE",
                statement: "P - V; FC / (P - V).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contribution = 65 - 40 = 25 per unit.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Contribution is £25.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Break-even = fixed costs / contribution = 5000 / 25.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "5000 / 25 = 200 units.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "£25 contribution; 200 units break-even",
            commonErrors: ["Divides by selling price."],
          },
        },
        {
          id: "cieigcseict-q-u5l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of a spreadsheet model for a small business planning its first year of trading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model eval",
                statement: "Planning tool.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fast 'what-if' testing of prices, costs and sales forecasts, automatic recalculation and charts — but forecasts depend on uncertain assumptions ('garbage in, garbage out') and models need care to avoid formula errors; valuable alongside other planning methods.",
            commonErrors: ["Guarantees success."],
          },
        },
      ],
    },
  ],
};

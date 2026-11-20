import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olbus-u5-lesson-5-2",
  code: "5-2",
  title: "Break-Even Analysis",
  goal: "I CAN calculate break-even point and interpret break-even charts.",
  standards: ["7100 5.2"],
  vocabulary: [
    { term: "Break-even point", definition: "Level of sales where total revenue equals total cost." },
    { term: "Fixed costs", definition: "Costs that don't change with output (rent, salaries)." },
    { term: "Variable costs", definition: "Costs that vary with output (materials, labour per unit)." },
    { term: "Contribution", definition: "Selling price minus variable cost per unit." },
    { term: "Margin of safety", definition: "Difference between actual sales and break-even sales." },
    { term: "Total revenue", definition: "Total income from sales." },
  ],
  concepts: [
    {
      id: "olbus-u5-breakeven",
      title: "Break-even calculation",
      skill: "Calculate break-even point in units and value.",
      lesson: {
        sections: [
          { heading: "Key concepts", body: "- **Fixed costs**: don't change with output (rent, insurance).\n- **Variable costs**: change with output (materials per unit).\n- **Contribution**: selling price - variable cost per unit.\n- **Break-even**: where total revenue = total cost." },
          { heading: "Formulas", body: "Break-even units = Fixed costs / Contribution per unit.\nBreak-even value = Break-even units × Selling price.\nProfit = (Actual sales - Break-even sales) × Contribution." },
          { heading: "Interpretation", body: "Above break-even = profit; below = loss. Margin of safety shows how much sales can fall before loss." },
        ],
        keyFormulas: [
          { name: "BE units", statement: "Fixed costs / Contribution per unit" },
          { name: "BE value", statement: "BE units × Selling price" },
        ],
        workedExample: {
          problem: "Fixed costs $10,000, selling price $50, variable cost $30/unit. Find break-even.",
          solution: "Contribution = 50-30 = $20. BE units = 10000/20 = 500 units. BE value = 500×50 = $25,000.",
        },
      },
      questions: [
        {
          id: "olbus-u5-be-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Break-even point is where…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total revenue equals total cost" }, { id: "b", text: "Profit is maximum" }, { id: "c", text: "Sales are highest" }, { id: "d", text: "Costs are lowest" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Break-even", statement: "TR = TC." }], steps: [{ reasoning: "No profit/no loss.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-be-q2", difficulty: "core", totalMarks: 2,
          stem: "Fixed costs $5,000, SP $40, VC $25. Contribution per unit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Contribution", statement: "SP - VC." }], steps: [
            { reasoning: "$40 - $25 = $15.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$15" },
        },
        {
          id: "olbus-u5-be-q3", difficulty: "challenge", totalMarks: 4,
          stem: "FC $8,000, SP $60, VC $40. Find break-even units and value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Break-even", statement: "FC/contribution." }], steps: [
            { reasoning: "Contribution = $20.", marks: 1, markCode: "AO2" },
            { reasoning: "BE units = 8000/20 = 400.", marks: 1, markCode: "AO2" },
            { reasoning: "BE value = 400×60 = $24,000.", marks: 1, markCode: "AO2" },
            { reasoning: "Both correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "400 units; $24,000" },
        },
        {
          id: "olbus-u5-be-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Break-even review.",
          parts: [
            { label: "a", prompt: "Define fixed costs.", marks: 1 },
            { label: "b", prompt: "Define variable costs.", marks: 1 },
            { label: "c", prompt: "Define contribution.", marks: 1 },
            { label: "d", prompt: "FC $6000, SP $50, VC $30. BE units?", marks: 2 },
            { label: "e", prompt: "If actual sales 500 units, profit?", marks: 2 },
            { label: "f", prompt: "What is margin of safety?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Break-even", statement: "Costs, calculation, interpretation." },
          ], steps: [
            { part: "a", reasoning: "Don't change with output.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Change with output.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "SP - VC per unit.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Contrib $20; BE = 6000/20 = 300.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "(500-300)×20 = $4,000.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Sales above break-even — safety margin.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Clear definition.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fixed (b) variable (c) contrib (d) 300 (e) 4000 (f) safety margin" },
        },
      ],
    },
    {
      id: "olbus-u5-be-chart",
      title: "Break-Even Charts",
      skill: "Interpret break-even charts and understand their limitations.",
      lesson: {
        sections: [
          { heading: "Reading the chart", body: "X-axis = output/units; Y-axis = revenue/costs. Fixed costs line is horizontal; total cost line slopes up; total revenue line slopes up. Break-even where TR = TC." },
          { heading: "Interpretation", body: "Above break-even point = profit area; below = loss area. Steeper TR slope = higher contribution per unit." },
          { heading: "Limitations", body: "Assumes linear costs/revenue, single product, constant prices — real world is more complex. Still useful for quick analysis." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "On a break-even chart, TR line crosses TC line at 500 units. What does this show?",
          solution: "Break-even point is 500 units — below this is loss, above is profit.",
        },
      },
      questions: [
        {
          id: "olbus-u5-bec-q1", difficulty: "foundation", totalMarks: 1,
          stem: "On a break-even chart, the fixed cost line is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Horizontal" }, { id: "b", text: "Vertical" }, { id: "c", text: "Diagonal" }, { id: "d", text: "Curved" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart", statement: "Fixed costs constant." }], steps: [{ reasoning: "Fixed = constant = horizontal.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bec-q2", difficulty: "core", totalMarks: 2,
          stem: "What does the area above break-even on the chart represent?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart", statement: "Profit/loss areas." }], steps: [
            { reasoning: "Profit (revenue > costs).", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Profit area — where total revenue exceeds total cost." },
        },
        {
          id: "olbus-u5-bec-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two limitations of break-even analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "BE limitations", statement: "Assumptions." }], steps: [
            { reasoning: "Assumes linear costs/revenue.", marks: 1, markCode: "AO2" },
            { reasoning: "Single product, constant prices assumption.", marks: 1, markCode: "AO2" },
            { reasoning: "Ignores real-world complexity.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Linear assumptions and single-product focus limit accuracy." },
        },
        {
          id: "olbus-u5-bec-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Break-even chart review.",
          parts: [
            { label: "a", prompt: "What does TR line show?", marks: 1 },
            { label: "b", prompt: "What does TC line show?", marks: 1 },
            { label: "c", prompt: "Where is break-even on chart?", marks: 1 },
            { label: "d", prompt: "Profit area location?", marks: 1 },
            { label: "e", prompt: "Two limitations?", marks: 2 },
            { label: "f", prompt: "Why still useful?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "BE chart", statement: "Lines, areas, limitations." },
          ], steps: [
            { part: "a", reasoning: "Total revenue vs output.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Total cost vs output.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Where TR = TC.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Above break-even point.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Linear assumption; single product.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Second limitation.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Quick visual analysis.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Shows profit/loss zones.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Simple decision tool.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) TR line (b) TC line (c) TR=TC (d) above BE (e) 2 limits (f) quick analysis" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u5-5-2-notes", title: "Break-even — notes", summary: "Break-even calculation and chart interpretation.",
      sections: [
        { heading: "Calculation", body: "BE units = Fixed costs / Contribution; BE value = units × price. Above BE = profit." },
        { heading: "Chart", body: "TR and TC lines; BE where they cross; above = profit. Assumes linearity — useful but simplified." },
      ] },
  ],
};

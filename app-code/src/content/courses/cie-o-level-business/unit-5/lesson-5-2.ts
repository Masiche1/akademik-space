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
            { id: "a", text: "Costs are lowest" },
            { id: "b", text: "Sales are highest" },
            { id: "c", text: "Profit is maximum" },
            { id: "d", text: "Total revenue equals total cost" },
          ], correctChoiceId: "d" },
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
        {
          id: "olbus-u5-be-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Contribution per unit is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Selling price minus variable cost per unit" },
            { id: "b", text: "Total cost minus fixed cost" },
            { id: "c", text: "Total revenue minus profit" },
            { id: "d", text: "Fixed costs divided by output" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Contribution", statement: "SP - VC." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-be-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Fixed costs are costs that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are paid to shareholders" },
            { id: "b", text: "Change with every unit produced" },
            { id: "c", text: "Only occur when sales rise" },
            { id: "d", text: "Do not change with the level of output" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Fixed costs", statement: "Constant with output." }], steps: [{ reasoning: "Fixed = unchanged by output.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-be-q7", difficulty: "core", totalMarks: 1,
          stem: "Which change would increase the break-even level of output?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Higher selling price with unchanged variable cost" },
            { id: "b", text: "Lower fixed costs" },
            { id: "c", text: "Higher fixed costs" },
            { id: "d", text: "Higher contribution per unit" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "BE drivers", statement: "FC/contribution." }], steps: [{ reasoning: "Higher FC raises BE units.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-be-q8", difficulty: "core", totalMarks: 1,
          stem: "If actual sales are above the break-even level, the business makes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A profit" },
            { id: "b", text: "Zero profit" },
            { id: "c", text: "A loss" },
            { id: "d", text: "No revenue" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "BE interpretation", statement: "Above BE = profit." }], steps: [{ reasoning: "Above break-even = profit.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-be-q9", difficulty: "core", totalMarks: 1,
          stem: "The margin of safety shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The maximum profit possible" },
            { id: "b", text: "The total fixed costs" },
            { id: "c", text: "The price competitors charge" },
            { id: "d", text: "How far sales can fall before the business makes a loss" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Margin of safety", statement: "Buffer above BE." }], steps: [{ reasoning: "Safety margin = cushion before loss.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-be-q10", difficulty: "core", totalMarks: 2,
          stem: "Fixed costs $6,000, selling price $30, variable cost $18 per unit. Calculate the break-even level of output in units.",
          response: { type: "numeric", parts: [{ label: "a", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Break-even", statement: "FC/contribution." }], steps: [
            { part: "a", reasoning: "Contribution = 30 - 18 = $12; BE = 6000/12 = 500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Break-even = 500 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 500" },
        },
        {
          id: "olbus-u5-be-q11", difficulty: "core", totalMarks: 2,
          stem: "Fixed costs $9,000, selling price $40, variable cost $25 per unit. Calculate the break-even value (in $).",
          response: { type: "numeric", parts: [{ label: "a", answer: 24000 }] },
          markscheme: { principles: [{ kind: "principle", name: "BE value", statement: "BE units x price." }], steps: [
            { part: "a", reasoning: "Contribution = 15; BE units = 600; value = 600 x 40 = 24000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Break-even value = 24000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 24000" },
        },
        {
          id: "olbus-u5-be-q12", difficulty: "core", totalMarks: 2,
          stem: "A business sells 400 units; its break-even level is 300 units and contribution per unit is $20. Calculate the profit.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit calc", statement: "(Sales - BE) x contribution." }], steps: [
            { part: "a", reasoning: "Profit = (400 - 300) x 20 = 2000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Profit = 2000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 2000" },
        },
        {
          id: "olbus-u5-be-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Fixed costs $12,000, selling price $80, variable cost $50 per unit. Calculate the break-even level of output in units.",
          response: { type: "numeric", parts: [{ label: "a", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Break-even", statement: "FC/contribution." }], steps: [
            { part: "a", reasoning: "Contribution = 30; BE = 12000/30 = 400.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Break-even = 400 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 400" },
        },
        {
          id: "olbus-u5-be-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain what the margin of safety tells a business manager.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Margin of safety", statement: "Risk buffer." }], steps: [
            { reasoning: "Shows how far sales can fall before losses occur.", marks: 1, markCode: "AO2" },
            { reasoning: "Larger margin = safer position.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "It measures the cushion between actual and break-even sales." },
        },
        {
          id: "olbus-u5-be-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A business has fixed costs of $8,000, a selling price of $50 and a variable cost of $30 per unit. It plans to sell 500 units. Calculate the profit and state whether the business is above or below break-even.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit and BE", statement: "Full calculation." }], steps: [
            { reasoning: "Contribution = 50 - 30 = $20.", marks: 1, markCode: "AO2" },
            { reasoning: "BE units = 8000/20 = 400.", marks: 1, markCode: "AO2" },
            { reasoning: "Profit = (500 - 400) x 20 = $2,000.", marks: 1, markCode: "AO2" },
            { reasoning: "500 > 400 so above break-even; clear conclusion.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Profit $2,000; above break-even (BE = 400 units)." },
        },
        {
          id: "olbus-u5-be-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Break-even calculations review.",
          parts: [
            { label: "a", prompt: "Define variable costs.", marks: 1 },
            { label: "b", prompt: "State the break-even units formula.", marks: 1 },
            { label: "c", prompt: "FC $5,000, SP $45, VC $25. Contribution?", marks: 1 },
            { label: "d", prompt: "Using the same figures, find break-even units.", marks: 2 },
            { label: "e", prompt: "If actual sales are 400 units, find profit.", marks: 2 },
            { label: "f", prompt: "What is the margin of safety in units?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Break-even", statement: "Costs, calculation, interpretation." },
          ], steps: [
            { part: "a", reasoning: "Costs that change with output.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "FC / contribution per unit.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Contribution = 45 - 25 = $20.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "BE units = 5000/20 = 250.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Profit = (400 - 250) x 20 = $3,000.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Margin of safety = 400 - 250 = 150 units.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) variable def (b) formula (c) 20 (d) 250 (e) 3000 (f) 150 units" },
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
            { id: "a", text: "Diagonal" },
            { id: "b", text: "Horizontal" },
            { id: "c", text: "Vertical" },
            { id: "d", text: "Curved" },
          ], correctChoiceId: "b" },
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
        {
          id: "olbus-u5-bec-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The total cost line on a break-even chart…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is horizontal" },
            { id: "b", text: "Slopes upward starting from the fixed cost level" },
            { id: "c", text: "Is vertical" },
            { id: "d", text: "Slopes downward" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart", statement: "TC = FC + VC." }], steps: [{ reasoning: "TC rises with output from FC level.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bec-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The break-even point on a chart is where…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Profit is at its maximum" },
            { id: "b", text: "The total revenue line crosses the total cost line" },
            { id: "c", text: "The fixed cost line ends" },
            { id: "d", text: "Sales reach their highest level" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "BE point", statement: "TR = TC." }], steps: [{ reasoning: "Intersection of TR and TC.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bec-q7", difficulty: "core", totalMarks: 1,
          stem: "A steeper total revenue line on a break-even chart indicates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Higher fixed costs" },
            { id: "b", text: "Lower selling price" },
            { id: "c", text: "A higher contribution per unit" },
            { id: "d", text: "A loss-making business" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart", statement: "Slope = contribution." }], steps: [{ reasoning: "TR slope reflects contribution per unit.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bec-q8", difficulty: "core", totalMarks: 1,
          stem: "The area below the break-even point on the chart represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Loss" },
            { id: "b", text: "Fixed costs only" },
            { id: "c", text: "Profit" },
            { id: "d", text: "Break-even sales" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart", statement: "Loss/profit zones." }], steps: [{ reasoning: "Below BE = costs exceed revenue = loss.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bec-q9", difficulty: "core", totalMarks: 1,
          stem: "Which assumption does standard break-even analysis make?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The business sells many different products" },
            { id: "b", text: "Costs and revenue are linear and prices are constant" },
            { id: "c", text: "Demand rises every year" },
            { id: "d", text: "All costs are variable" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "BE assumptions", statement: "Linearity." }], steps: [{ reasoning: "Linear cost/revenue assumption.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bec-q10", difficulty: "core", totalMarks: 2,
          stem: "A product has a selling price of $30, a variable cost of $12 and fixed costs of $9,000. Calculate the break-even level of output in units.",
          response: { type: "numeric", parts: [{ label: "a", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Break-even", statement: "FC/contribution." }], steps: [
            { part: "a", reasoning: "Contribution = 30 - 12 = 18; BE = 9000/18 = 500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Break-even = 500 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 500" },
        },
        {
          id: "olbus-u5-bec-q11", difficulty: "core", totalMarks: 2,
          stem: "A break-even chart shows the break-even point at 400 units and the selling price is $50. Calculate the break-even value.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20000 }] },
          markscheme: { principles: [{ kind: "principle", name: "BE value", statement: "BE units x price." }], steps: [
            { part: "a", reasoning: "BE value = 400 x 50 = 20000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Break-even value = 20000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 20000" },
        },
        {
          id: "olbus-u5-bec-q12", difficulty: "core", totalMarks: 2,
          stem: "Fixed costs are $4,800, selling price is $40 and variable cost is $28 per unit. Calculate the break-even level of output in units.",
          response: { type: "numeric", parts: [{ label: "a", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Break-even", statement: "FC/contribution." }], steps: [
            { part: "a", reasoning: "Contribution = 40 - 28 = 12; BE = 4800/12 = 400.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Break-even = 400 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 400" },
        },
        {
          id: "olbus-u5-bec-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A chart shows break-even at 250 units, contribution of $20 per unit and actual sales of 350 units. Calculate the profit.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Profit calc", statement: "(Sales - BE) x contribution." }], steps: [
            { part: "a", reasoning: "Profit = (350 - 250) x 20 = 2000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Profit = 2000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 2000" },
        },
        {
          id: "olbus-u5-bec-q14", difficulty: "core", totalMarks: 2,
          stem: "Describe how the fixed cost line appears on a break-even chart and explain why.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart", statement: "Fixed cost line." }], steps: [
            { reasoning: "Horizontal line because fixed costs do not change with output.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Horizontal — fixed costs are constant." },
        },
        {
          id: "olbus-u5-bec-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a break-even chart helps a business make decisions, and state one limitation of the analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "BE chart use", statement: "Decision tool." }], steps: [
            { reasoning: "Shows required sales level to avoid loss.", marks: 1, markCode: "AO2" },
            { reasoning: "Identifies profit/loss areas visually for planning.", marks: 1, markCode: "AO2" },
            { reasoning: "Limitation: assumes linear costs/revenue and constant prices.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Visual decision tool; limited by simplifying assumptions." },
        },
        {
          id: "olbus-u5-bec-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Break-even chart review.",
          parts: [
            { label: "a", prompt: "What does the fixed cost line show?", marks: 1 },
            { label: "b", prompt: "What does the total revenue line show?", marks: 1 },
            { label: "c", prompt: "Where is the break-even point on the chart?", marks: 1 },
            { label: "d", prompt: "What does a steeper TR line indicate?", marks: 1 },
            { label: "e", prompt: "Name two limitations of break-even analysis.", marks: 2 },
            { label: "f", prompt: "Why is the chart still useful to a business?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "BE chart", statement: "Lines, points, limitations, use." },
          ], steps: [
            { part: "a", reasoning: "Fixed costs — constant at all output levels.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Total revenue rising with sales/output.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Where TR line crosses TC line.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Higher contribution per unit.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Linear assumption; single product/constant prices — any two.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Second limitation named.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Quick visual analysis of profit/loss zones.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Shows required sales to break even.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Simple tool for decision-making.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) FC line (b) TR line (c) TR=TC (d) steeper=contrib (e) 2 limits (f) useful" },
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

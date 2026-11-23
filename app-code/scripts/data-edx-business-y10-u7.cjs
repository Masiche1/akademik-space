module.exports = [
  {
    file: "lesson-7-1.ts", exportName: "lesson71",
    lesson: {
      id: "ebz10-u7-lesson-7-1", code: "7-1",
      title: "Revenue, Costs and Profit",
      goal: "I CAN calculate revenue, costs and profit and explain fixed and variable costs.",
      standards: ["Edexcel IGCSE Business 4BS0 — Financial Information and Decisions"],
      vocabulary: [
        { term: "Revenue", definition: "Total income from sales of goods or services." },
        { term: "Fixed costs", definition: "Costs that do not change with output, e.g. rent." },
        { term: "Variable costs", definition: "Costs that change with output, e.g. raw materials." },
        { term: "Total cost", definition: "Fixed costs plus variable costs." },
        { term: "Profit", definition: "Revenue minus total costs." },
        { term: "Gross profit", definition: "Revenue minus cost of sales." },
      ],
      concepts: [
        {
          id: "ebz10-u7-revenue-costs", title: "Revenue, Costs and Profit",
          skill: "Calculate revenue, total cost and profit and classify costs.",
          sections: [
            { heading: "Revenue and costs", body: "**Revenue** = price per unit x quantity sold. **Fixed costs** stay the same whatever the output (rent, salaries, insurance). **Variable costs** rise and fall with output (materials, packaging, hourly wages). **Total cost** = fixed costs + variable costs. **Profit** = revenue - total cost; a business trading at a loss has costs greater than revenue. **Gross profit** = revenue - cost of sales; **net profit** deducts all other expenses too." },
            { heading: "Using the numbers", body: "Managers use these calculations to set prices, judge whether to expand, and check performance against targets. If variable costs rise, either prices must rise or profit per unit falls. Break-even and profit calculations build directly on revenue and cost data." },
          ],
          keyFormulas: [
            { name: "Revenue", statement: "Revenue = price per unit x quantity sold" },
            { name: "Total cost", statement: "Total cost = fixed costs + variable costs" },
            { name: "Profit", statement: "Profit = revenue - total cost" },
            { name: "Gross profit", statement: "Gross profit = revenue - cost of sales" },
          ],
          workedExample: {
            problem: "A business sells 500 units at £12 each. Fixed costs are £1 500 and variable costs are £6 per unit. Calculate profit.",
            solution: "Revenue = 500 x £12 = £6 000. Variable costs = 500 x £6 = £3 000. Total cost = £1 500 + £3 000 = £4 500. Profit = £6 000 - £4 500 = £1 500.",
          },
          questions: [
            {
              id: "ebz10-u7-revcost-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of these is a variable cost?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Monthly rent on the factory" },
                { id: "b", text: "Raw materials used in production" },
                { id: "c", text: "Annual insurance premium" },
                { id: "d", text: "Salaries of permanent managers" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Variable cost", statement: "Cost that changes with the level of output." }],
                steps: [{ reasoning: "Raw materials are used per unit produced, so they vary with output.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Raw materials",
                commonErrors: ["Rent and insurance confused with variable costs."],
              },
            },
            {
              id: "ebz10-u7-revcost-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A café sells 400 cups of coffee at £2.50 each. Its fixed costs are £800 and variable costs are £0.80 per cup. Calculate total cost.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Total cost", statement: "Total cost = fixed costs + variable costs." }],
                steps: [
                  { reasoning: "Variable costs = 400 x £0.80 = £320.", marks: 1, markCode: "AO2" },
                  { reasoning: "Total cost = fixed + variable = £800 + £320.", marks: 1, markCode: "AO2" },
                  { reasoning: "Total cost = £1 120.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "£1 120",
                commonErrors: ["Forgetting to multiply variable cost by quantity."],
              },
            },
            {
              id: "ebz10-u7-revcost-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between gross profit and net profit.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Gross vs net profit", statement: "Revenue minus cost of sales vs revenue minus all costs." }],
                steps: [
                  { reasoning: "Gross profit = revenue - cost of sales only.", marks: 1, markCode: "AO1" },
                  { reasoning: "Net profit = revenue - all costs including expenses, interest, tax.", marks: 1, markCode: "AO1" },
                  { reasoning: "Gross profit shows trading performance before overheads.", marks: 1, markCode: "AO2" },
                  { reasoning: "Net profit is the final figure after every deduction.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Gross = revenue minus cost of sales; net = after all expenses.",
              },
            },
            {
              id: "ebz10-u7-revcost-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A toy maker sells 2 000 units a year at £15 each. Fixed costs are £30 000 and variable costs are £9 per unit.",
              parts: [
                { label: "a", prompt: "Calculate revenue, total cost and profit.", marks: 3 },
                { label: "b", prompt: "Explain one way the business could increase profit.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Profit calculation", statement: "Revenue - total cost." }],
                steps: [
                  { reasoning: "(a) Revenue = 2 000 x £15 = £30 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Total cost = £30 000 + (2 000 x £9) = £48 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Profit = £30 000 - £48 000 = -£18 000 (a loss).", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Raise price or cut variable/fixed costs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Or increase sales volume if contribution is positive.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Revenue £30 000, total cost £48 000, loss £18 000; raise price/cut costs or grow sales.",
                commonErrors: ["Variable costs not multiplied by output.", "Sign of loss ignored."],
              },
            },
            {
              id: "ebz10-u7-revcost-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A company currently sells 1 000 units at £20 each. Fixed costs are £12 000 and variable costs are £11 per unit.",
              parts: [
                { label: "a", prompt: "Calculate current profit.", marks: 3 },
                { label: "b", prompt: "If the price rises to £22 with the same costs and sales, calculate the new profit and explain the change.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Profit sensitivity", statement: "A £2 price rise adds £2 per unit to profit." }],
                steps: [
                  { reasoning: "(a) Revenue = 1 000 x £20 = £20 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Total cost = £12 000 + £11 000 = £23 000; profit = -£3 000 (loss).", marks: 2, markCode: "AO3", part: "a" },
                  { reasoning: "(b) New revenue = 1 000 x £22 = £22 000; costs unchanged at £23 000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) New profit = -£1 000; loss falls by £2 000 (assuming demand unchanged).", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) -£3 000 (b) -£1 000 — loss reduced by £2 000",
              },
            },
            {
              id: "ebz10-u7-revcost-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A shoe business sells 5 000 pairs a year at £40 each. Fixed costs are £60 000 and variable costs are £24 per pair.",
              parts: [
                { label: "a", prompt: "Calculate revenue, total cost and profit.", marks: 3 },
                { label: "b", prompt: "Calculate gross profit if cost of sales is £90 000 and explain what other costs net profit must deduct.", marks: 3 },
                { label: "c", prompt: "Evaluate whether the business should try to double output to 10 000 pairs.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Profit analysis", statement: "Revenue - costs; gross vs net; contribution per unit." }],
                steps: [
                  { reasoning: "(a) Revenue = 5 000 x £40 = £200 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Variable = 5 000 x £24 = £120 000; total cost = £180 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Profit = £200 000 - £180 000 = £20 000.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Gross profit = £200 000 - £90 000 = £110 000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Net profit deducts all other costs: fixed costs, expenses, interest, tax.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Contribution per pair = £40 - £24 = £16; doubling adds £80 000 contribution.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Evaluation: profitable only if demand exists and fixed costs do not rise disproportionately; capacity and market limits apply.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Revenue £200 000, cost £180 000, profit £20 000; gross £110 000; doubling adds £16 x 5 000 = £80 000 contribution if feasible.",
              },
            },
          ],
        },
        {
          id: "ebz10-u7-breakeven", title: "Break-even Analysis",
          skill: "Calculate the break-even point in units and revenue.",
          sections: [
            { heading: "Contribution and break-even", body: "**Contribution per unit** = selling price - variable cost per unit; it is the amount each unit contributes towards covering fixed costs and making profit. **Break-even point** = fixed costs / contribution per unit — the output at which total revenue equals total cost. Below break-even the business makes a loss; above it, profit. In revenue terms, break-even revenue = fixed costs x (price / variable cost), or break-even units x price." },
            { heading: "Why it matters", body: "Break-even tells managers the minimum sales needed to survive — useful for pricing decisions, launching products and judging whether a plan is viable. A lower fixed cost or higher contribution lowers the break-even point, making the business safer. It assumes price and costs stay constant." },
          ],
          keyFormulas: [
            { name: "Contribution", statement: "Contribution per unit = selling price - variable cost per unit" },
            { name: "Break-even units", statement: "Fixed costs / contribution per unit" },
            { name: "Break-even revenue", statement: "Break-even units x selling price" },
          ],
          workedExample: {
            problem: "Fixed costs £20 000, price £50, variable cost £30 per unit. Find break-even.",
            solution: "Contribution = £50 - £30 = £20. Break-even units = £20 000 / £20 = 1 000 units. Break-even revenue = 1 000 x £50 = £50 000.",
          },
          questions: [
            {
              id: "ebz10-u7-bep-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the contribution per unit if price is £25 and variable cost is £15?",
              response: { type: "mcq", choices: [
                { id: "a", text: "£10" }, { id: "b", text: "£40" }, { id: "c", text: "£15" }, { id: "d", text: "£25" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "formula", name: "Contribution", statement: "Price - variable cost per unit." }],
                steps: [{ reasoning: "£25 - £15 = £10.", marks: 2, markCode: "AO2" }],
                finalAnswer: "**(a)** £10",
              },
            },
            {
              id: "ebz10-u7-bep-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A business has fixed costs of £10 000 and contribution of £5 per unit. How many units must it sell to break even?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even", statement: "Fixed costs / contribution per unit." }],
                steps: [
                  { reasoning: "Break-even = fixed costs / contribution.", marks: 1, markCode: "AO2" },
                  { reasoning: "= £10 000 / £5.", marks: 1, markCode: "AO2" },
                  { reasoning: "= 2 000 units.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "2 000 units",
              },
            },
            {
              id: "ebz10-u7-bep-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain what happens to the break-even point if fixed costs rise but price and variable cost stay the same.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Break-even drivers", statement: "Break-even rises with fixed costs, falls with contribution." }],
                steps: [
                  { reasoning: "Contribution per unit is unchanged (price - variable cost).", marks: 1, markCode: "AO2" },
                  { reasoning: "Break-even = fixed costs / contribution, so higher fixed costs raise the point.", marks: 1, markCode: "AO2" },
                  { reasoning: "The business must sell more units just to cover costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Risk increases — more vulnerable to low demand.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Break-even point rises — more units needed to cover higher fixed costs.",
              },
            },
            {
              id: "ebz10-u7-bep-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Fixed costs are £45 000. The selling price is £60 and variable cost is £36 per unit.",
              parts: [
                { label: "a", prompt: "Calculate contribution per unit and break-even output.", marks: 3 },
                { label: "b", prompt: "Calculate break-even revenue and profit at 2 000 units sold.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even", statement: "FC / (P - VC); BE revenue = BE units x price." }],
                steps: [
                  { reasoning: "(a) Contribution = £60 - £36 = £24.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Break-even units = £45 000 / £24.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) = 1 875 units.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Break-even revenue = 1 875 x £60 = £112 500.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Profit at 2 000 units = (2 000 - 1 875) x £24 = £3 000.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Contribution £24; break-even 1 875 units / £112 500; profit at 2 000 units = £3 000.",
              },
            },
            {
              id: "ebz10-u7-bep-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business sells a product at £30 with variable cost £18 and fixed costs £24 000.",
              parts: [
                { label: "a", prompt: "Calculate the break-even output in units and in revenue.", marks: 3 },
                { label: "b", prompt: "A new machine would cut variable cost to £15 but add £6 000 fixed costs. Recalculate break-even and comment on the change.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Break-even comparison", statement: "Compare break-even before and after the change." }],
                steps: [
                  { reasoning: "(a) Contribution = £30 - £18 = £12; BE units = £24 000 / £12 = 2 000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) BE revenue = 2 000 x £30 = £60 000.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) New contribution = £30 - £15 = £15; new fixed = £30 000; BE = 2 000 units.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Break-even unchanged at 2 000 units — the machine only pays off above break-even.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) 2 000 units / £60 000 (b) still 2 000 units — benefit only above break-even",
              },
            },
            {
              id: "ebz10-u7-bep-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A publisher plans a new textbook selling at £25 with variable cost £10 per copy. Fixed costs for the project are £60 000.",
              parts: [
                { label: "a", prompt: "Calculate contribution, break-even units and break-even revenue.", marks: 4 },
                { label: "b", prompt: "If expected sales are 6 000 copies, calculate profit and the margin of safety in units.", marks: 3 },
                { label: "c", prompt: "Evaluate whether the project should go ahead if a competitor may force the price down to £22.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Break-even evaluation", statement: "BE point, margin of safety, sensitivity to price." }],
                steps: [
                  { reasoning: "(a) Contribution = £25 - £10 = £15.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Break-even units = £60 000 / £15 = 4 000 copies.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Break-even revenue = 4 000 x £25 = £100 000.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(a) Contribution stated correctly.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Profit = (6 000 - 4 000) x £15 = £30 000; margin of safety = 2 000 units.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Margin of safety stated as 6 000 - 4 000 = 2 000.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) At £22 contribution falls to £12; break-even rises to 5 000 copies — still below expected 6 000 but safety is thin.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Judgement: viable only if sales forecast is reliable; risk of loss if demand disappoints.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "BE 4 000 copies / £100 000; profit £30 000; margin of safety 2 000; at £22 BE = 5 000 — riskier.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u7-fin1-notes", title: "Revenue, costs and break-even — notes",
      summary: "Revenue = price x quantity; profit = revenue - total cost; break-even = fixed costs / contribution.",
      sections: [
        { heading: "Key formulas", body: "Revenue = P x Q. Total cost = fixed + variable. Profit = revenue - total cost. Contribution = P - VC. Break-even units = FC / contribution." },
        { heading: "Fixed vs variable", body: "Fixed costs do not change with output (rent, salaries). Variable costs do (materials, packaging)." },
        { heading: "Break-even use", body: "Minimum output to avoid loss. Higher fixed costs or lower contribution raise the break-even point." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts", exportName: "lesson72",
    lesson: {
      id: "ebz10-u7-lesson-7-2", code: "7-2",
      title: "Cash Flow and Budgets",
      goal: "I CAN forecast cash flow, identify cash-flow gaps and use budgets for control.",
      standards: ["Edexcel IGCSE Business 4BS0 — Financial Information and Decisions"],
      vocabulary: [
        { term: "Cash flow", definition: "Movement of cash into and out of a business over time." },
        { term: "Cash-flow forecast", definition: "Prediction of future cash inflows and outflows." },
        { term: "Cash-flow gap", definition: "Period when outflows exceed inflows." },
        { term: "Budget", definition: "Financial plan for a future period." },
        { term: "Variance", definition: "Difference between budgeted and actual figures." },
        { term: "Liquidity", definition: "Ability to pay short-term debts." },
      ],
      concepts: [
        {
          id: "ebz10-u7-cashflow", title: "Cash Flow Forecasting",
          skill: "Interpret a cash-flow forecast and manage cash-flow gaps.",
          sections: [
            { heading: "Why cash flow matters", body: "Profit and cash are different: a profitable business can fail if it cannot pay bills on time. **Cash inflows** come from customers paying; **outflows** go to suppliers, wages, rent and loans. **Net cash flow** = inflows - outflows. A **cash-flow gap** is when outflows exceed inflows in a period — dangerous even for profitable firms." },
            { heading: "Managing gaps", body: "A forecast shows future gaps before they happen. Remedies: delay payments, speed up collections (offer early-payment discounts), arrange an overdraft or loan, reduce spending, or build up reserves in good months. Regular forecasting is essential for survival." },
          ],
          keyFormulas: [
            { name: "Net cash flow", statement: "Total inflows - total outflows" },
            { name: "Closing balance", statement: "Opening balance + net cash flow" },
          ],
          workedExample: {
            problem: "Opening balance £5 000. Inflows £20 000, outflows £24 000. What is the closing balance and is there a gap?",
            solution: "Net cash flow = £20 000 - £24 000 = -£4 000. Closing balance = £5 000 - £4 000 = £1 000. There is a gap of £4 000 but reserves prevent insolvency.",
          },
          questions: [
            {
              id: "ebz10-u7-cf-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a cash-flow gap?",
              response: { type: "mcq", choices: [
                { id: "a", text: "When outflows exceed inflows in a period" },
                { id: "b", text: "When a business makes a loss" },
                { id: "c", text: "When sales are lower than expected" },
                { id: "d", text: "When stock runs out" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cash-flow gap", statement: "Period where outflows exceed inflows." }],
                steps: [{ reasoning: "A gap is a timing problem of cash, not necessarily a loss.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Outflows exceed inflows",
              },
            },
            {
              id: "ebz10-u7-cf-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Why can a profitable business still run out of cash? Give two reasons.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Profit vs cash", statement: "Profit is earned; cash is received — timing differs." }],
                steps: [
                  { reasoning: "Sales on credit mean revenue is earned before cash arrives.", marks: 1, markCode: "AO2" },
                  { reasoning: "Large one-off payments (tax, equipment) can drain cash.", marks: 1, markCode: "AO2" },
                  { reasoning: "Stockpiling inventory ties up cash without immediate return.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Credit sales delay cash; large payments and stock tie up cash.",
              },
            },
            {
              id: "ebz10-u7-cf-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways a business can reduce a forecast cash-flow gap.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Gap management", statement: "Bring forward inflows, delay outflows, or borrow." }],
                steps: [
                  { reasoning: "Speed up collections — offer discounts for early payment or chase debtors.", marks: 1, markCode: "AO2" },
                  { reasoning: "Delay outflows — negotiate later payment terms with suppliers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Arrange an overdraft or short-term loan to cover the gap.", marks: 1, markCode: "AO2" },
                  { reasoning: "Reduce discretionary spending in the gap period.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Collect faster, pay later, borrow, or cut spending.",
              },
            },
            {
              id: "ebz10-u7-cf-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A business forecasts: Month 1 opening balance £8 000, inflows £15 000, outflows £19 000. Month 2 opening balance £4 000, inflows £22 000, outflows £17 000.",
              parts: [
                { label: "a", prompt: "Calculate net cash flow and closing balance for each month.", marks: 3 },
                { label: "b", prompt: "Explain whether the business faces a liquidity problem.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Cash-flow forecast", statement: "Closing balance = opening + net cash flow." }],
                steps: [
                  { reasoning: "(a) Month 1 net = £15 000 - £19 000 = -£4 000; closing = £8 000 - £4 000 = £4 000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Month 2 net = £22 000 - £17 000 = +£5 000; closing = £4 000 + £5 000 = £9 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Month 1 shows a £4 000 gap but reserves cover it.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) No immediate liquidity crisis, but thin reserves increase risk if outflows rise.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "M1: -£4 000 / £4 000 closing; M2: +£5 000 / £9 000 closing; manageable but watch reserves.",
              },
            },
            {
              id: "ebz10-u7-cf-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A retailer expects seasonal sales: high inflows in December, low in January. Fixed outflows of £30 000 occur monthly.",
              parts: [
                { label: "a", prompt: "Explain why a cash-flow forecast is especially important for seasonal businesses.", marks: 3 },
                { label: "b", prompt: "Suggest two strategies the retailer could use in the low-cash month.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Seasonality", statement: "Uneven inflows create predictable gaps." }],
                steps: [
                  { reasoning: "(a) Inflows fluctuate while fixed costs continue every month.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Forecasting identifies the gap months in advance.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Allows planning reserves or finance before the gap.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Build cash reserves in peak months to cover January.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Arrange an overdraft or invoice factoring for the quiet period.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Reduce stock purchases or offer promotions to lift January sales.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Fixed costs vs seasonal inflows — forecast reveals gap timing (b) reserves, overdraft, promotions.",
              },
            },
            {
              id: "ebz10-u7-cf-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A growing café forecasts opening balance £2 000, monthly inflows £12 000, outflows £13 500 in months 1-3, then inflows rising to £16 000 from month 4 while outflows stay £13 500.",
              parts: [
                { label: "a", prompt: "Calculate the closing balance at the end of month 3.", marks: 3 },
                { label: "b", prompt: "Calculate the monthly net cash flow from month 4 onwards.", marks: 2 },
                { label: "c", prompt: "Evaluate the café's cash position and recommend two actions.", marks: 5 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Cash-flow analysis", statement: "Track balances across periods and evaluate risk." }],
                steps: [
                  { reasoning: "(a) Monthly net = £12 000 - £13 500 = -£1 500.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) After 3 months: £2 000 - (3 x £1 500) = £2 000 - £4 500.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Closing balance = -£2 500 — overdraft needed.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) From month 4: £16 000 - £13 500 = +£2 500 per month.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Position: cash-negative by month 3 despite growth in sales — forecast unreliability or slow collections likely.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Actions: arrange overdraft/short-term finance; improve collections or raise prices; delay equipment purchases.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) Longer term, growth turns cash-positive from month 4, so short-term finance bridges the gap.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "End month 3: -£2 500; month 4+ net +£2 500; needs short-term finance until growth pays off.",
              },
            },
          ],
        },
        {
          id: "ebz10-u7-budgets", title: "Budgets and Variance",
          skill: "Explain budgets and use variances to control performance.",
          sections: [
            { heading: "What budgets do", body: "A **budget** is a financial plan for a future period — sales, production, cash or expenditure budgets. Budgets set targets, coordinate departments and provide a benchmark for control. **Adverse variance** = actual worse than budget (overspend or undersell); **favourable variance** = actual better than budget." },
            { heading: "Variance analysis", body: "Managers compare actual results with budget to find problems early. Causes of adverse variance include rising input prices, inefficiency, or unrealistic targets; favourable variance may mean underspending that harms quality. Variances should trigger investigation, not blame — some are outside management control." },
          ],
          keyFormulas: [
            { name: "Variance", statement: "Actual result - budgeted result" },
            { name: "Adverse/favourable", statement: "Negative difference = adverse; positive = favourable" },
          ],
          workedExample: {
            problem: "Budgeted sales £50 000, actual £46 000. What is the variance and what does it mean?",
            solution: "Variance = £46 000 - £50 000 = -£4 000 — an adverse variance of £4 000; sales were below target.",
          },
          questions: [
            {
              id: "ebz10-u7-budget-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a budget?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A financial plan for a future period" },
                { id: "b", text: "A record of past sales" },
                { id: "c", text: "A type of loan" },
                { id: "d", text: "A tax return" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Budget", statement: "Financial plan for a future period." }],
                steps: [{ reasoning: "Budgets plan ahead and set targets.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Financial plan",
              },
            },
            {
              id: "ebz10-u7-budget-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two purposes of budgeting in a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Budget purposes", statement: "Planning, coordination, control." }],
                steps: [
                  { reasoning: "Planning — sets targets and coordinates resources.", marks: 1, markCode: "AO2" },
                  { reasoning: "Control — provides a benchmark to compare actual results.", marks: 1, markCode: "AO2" },
                  { reasoning: "Motivation — gives staff clear objectives to work towards.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Planning, coordination, control and motivation.",
              },
            },
            {
              id: "ebz10-u7-budget-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between an adverse variance and a favourable variance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Variances", statement: "Actual vs budget." }],
                steps: [
                  { reasoning: "Variance = actual result - budgeted result.", marks: 1, markCode: "AO1" },
                  { reasoning: "Adverse = actual worse than budget (overspend or undersell).", marks: 1, markCode: "AO2" },
                  { reasoning: "Favourable = actual better than budget.", marks: 1, markCode: "AO2" },
                  { reasoning: "Sign depends on the item — for costs, underspend is favourable.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Adverse = worse than budget; favourable = better than budget.",
              },
            },
            {
              id: "ebz10-u7-budget-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A department budgets £20 000 spending but actually spends £23 500. Revenue was budgeted at £60 000 but achieved £58 000.",
              parts: [
                { label: "a", prompt: "Calculate both variances.", marks: 2 },
                { label: "b", prompt: "Explain two possible causes and what management should do.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Variance calculation", statement: "Actual - budget; sign shows direction." }],
                steps: [
                  { reasoning: "(a) Cost variance = £23 500 - £20 000 = +£3 500 adverse.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Revenue variance = £58 000 - £60 000 = -£2 000 adverse.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Causes: input prices rose, inefficiency, or weaker demand than forecast.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Investigate causes; some may be external (price rises) beyond control.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Revise future budgets or take corrective action such as cost control.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Costs +£3 500 adverse, revenue -£2 000 adverse; investigate causes and correct.",
              },
            },
            {
              id: "ebz10-u7-budget-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business sets a sales budget of £120 000 but achieves only £105 000.",
              parts: [
                { label: "a", prompt: "Calculate the variance and state whether it is adverse or favourable.", marks: 2 },
                { label: "b", prompt: "Give three possible reasons for the shortfall.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Sales variance", statement: "Actual sales - budgeted sales." }],
                steps: [
                  { reasoning: "(a) Variance = £105 000 - £120 000 = -£15 000 — adverse.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Lower demand due to economic downturn or competitor action.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Poor marketing or weaker promotion than planned.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Production or stock problems limiting supply.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Budget was unrealistic — set without market research.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "-£15 000 adverse; causes include weak demand, marketing, supply problems or bad forecasting.",
              },
            },
            {
              id: "ebz10-u7-budget-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A café budgets monthly revenue of £18 000 and costs of £15 000. Actual results: revenue £16 500, costs £14 200.",
              parts: [
                { label: "a", prompt: "Calculate budgeted profit and actual profit.", marks: 3 },
                { label: "b", prompt: "Calculate the revenue and cost variances and classify each.", marks: 3 },
                { label: "c", prompt: "Evaluate the café's performance and recommend two improvements to budgeting.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Budget control", statement: "Compare actual with budget; investigate variances." }],
                steps: [
                  { reasoning: "(a) Budgeted profit = £18 000 - £15 000 = £3 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Actual profit = £16 500 - £14 200 = £2 300.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Profit £700 below budget — both variances negative for revenue.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Revenue variance = -£1 500 adverse; cost variance = -£800 favourable (underspend).", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Classify both correctly.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Performance: profitable but below plan; cost underspend may mean lower quality or less stock.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Improvements: investigate revenue shortfall causes; use rolling budgets; involve managers in setting targets.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Budgeted £3 000, actual £2 300; revenue -£1 500 adverse, costs -£800 favourable; investigate revenue and check quality of underspend.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u7-fin2-notes", title: "Cash flow and budgets — notes",
      summary: "Profit is not cash; forecast gaps early. Budgets set targets; variances trigger control.",
      sections: [
        { heading: "Cash flow", body: "Net cash flow = inflows - outflows; closing balance = opening + net. Gaps need finance or timing fixes." },
        { heading: "Budgets", body: "Plan ahead, set targets, compare actual vs budget. Adverse variance = worse than plan." },
        { heading: "Control", body: "Investigate variances, distinguish controllable from external causes, update budgets." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts", exportName: "lesson73",
    lesson: {
      id: "ebz10-u7-lesson-7-3", code: "7-3",
      title: "Financial Statements and Ratios",
      goal: "I CAN read financial statements and calculate key profitability and liquidity ratios.",
      standards: ["Edexcel IGCSE Business 4BS0 — Financial Information and Decisions"],
      vocabulary: [
        { term: "Income statement", definition: "Statement showing revenue, costs and profit over a period." },
        { term: "Balance sheet", definition: "Statement of assets, liabilities and capital at a point in time." },
        { term: "Gross profit margin", definition: "Gross profit as a percentage of revenue." },
        { term: "Net profit margin", definition: "Net profit as a percentage of revenue." },
        { term: "Current ratio", definition: "Current assets divided by current liabilities." },
        { term: "Liquidity", definition: "Ability to meet short-term debts." },
      ],
      concepts: [
        {
          id: "ebz10-u7-statements", title: "Financial Statements",
          skill: "Interpret the income statement and balance sheet.",
          sections: [
            { heading: "Income statement", body: "Shows performance over a period: **revenue** at the top, then **cost of sales** giving **gross profit**, then other expenses giving **net profit**. It answers: how much did we sell, what did it cost, and did we make a profit?" },
            { heading: "Balance sheet", body: "Shows position at one moment: **assets** (what the business owns — cash, stock, equipment, money owed by customers), **liabilities** (what it owes — loans, money owed to suppliers) and **capital** (owner's stake = assets - liabilities). A healthy balance sheet has assets comfortably exceeding liabilities." },
          ],
          keyFormulas: [
            { name: "Gross profit", statement: "Revenue - cost of sales" },
            { name: "Net profit", statement: "Gross profit - all other expenses" },
            { name: "Capital", statement: "Assets - liabilities" },
          ],
          workedExample: {
            problem: "Revenue £100 000, cost of sales £60 000, other expenses £25 000. Find gross and net profit.",
            solution: "Gross profit = £100 000 - £60 000 = £40 000. Net profit = £40 000 - £25 000 = £15 000.",
          },
          questions: [
            {
              id: "ebz10-u7-fs-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does an income statement show?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Revenue, costs and profit over a period" },
                { id: "b", text: "Assets and liabilities at one date" },
                { id: "c", text: "Cash received and paid each day" },
                { id: "d", text: "Staff salaries only" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Income statement", statement: "Revenue, costs and profit over a period." }],
                steps: [{ reasoning: "It covers a time period, unlike the balance sheet.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Revenue, costs, profit over a period",
              },
            },
            {
              id: "ebz10-u7-fs-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A business has assets of £80 000 and liabilities of £45 000. Calculate capital.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Capital", statement: "Assets - liabilities." }],
                steps: [
                  { reasoning: "Capital = assets - liabilities.", marks: 1, markCode: "AO2" },
                  { reasoning: "= £80 000 - £45 000.", marks: 1, markCode: "AO2" },
                  { reasoning: "= £35 000.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "£35 000",
              },
            },
            {
              id: "ebz10-u7-fs-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between the income statement and the balance sheet.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Income statement vs balance sheet", statement: "Flow over time vs position at a date." }],
                steps: [
                  { reasoning: "Income statement covers a period — revenue, costs, profit.", marks: 1, markCode: "AO1" },
                  { reasoning: "Balance sheet is a snapshot at one date — assets, liabilities, capital.", marks: 1, markCode: "AO1" },
                  { reasoning: "Income statement shows performance; balance sheet shows financial position.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both are needed: profit alone does not show liquidity or debt levels.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Flow vs snapshot — performance vs position.",
              },
            },
            {
              id: "ebz10-u7-fs-q4", difficulty: "challenge", totalMarks: 5,
              stem: "An income statement shows: revenue £250 000, cost of sales £150 000, other expenses £70 000.",
              parts: [
                { label: "a", prompt: "Calculate gross profit and net profit.", marks: 2 },
                { label: "b", prompt: "A balance sheet lists cash £12 000, stock £25 000, equipment £60 000, debtors £18 000, creditors £20 000, loan £40 000. Calculate capital.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Statements", statement: "Gross = revenue - cost of sales; capital = assets - liabilities." }],
                steps: [
                  { reasoning: "(a) Gross profit = £250 000 - £150 000 = £100 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Net profit = £100 000 - £70 000 = £30 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Assets = £12 000 + £25 000 + £60 000 + £18 000 = £115 000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Liabilities = £20 000 + £40 000 = £60 000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Capital = £115 000 - £60 000 = £55 000.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Gross £100 000, net £30 000; capital £55 000.",
              },
            },
            {
              id: "ebz10-u7-fs-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two businesses each have revenue of £200 000. Business A: cost of sales £120 000, other expenses £50 000. Business B: cost of sales £140 000, other expenses £35 000.",
              parts: [
                { label: "a", prompt: "Calculate net profit for each business.", marks: 3 },
                { label: "b", prompt: "Explain what the difference in gross profit suggests about each business.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Profit comparison", statement: "Compare gross and net profit between firms." }],
                steps: [
                  { reasoning: "(a) A: gross = £80 000, net = £30 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) B: gross = £60 000, net = £25 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Both figures for both businesses correct.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) A has higher gross profit — better buying prices or pricing power.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) B has lower other expenses — leaner overheads.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) A's trading margin is stronger; B controls overheads better.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "A: net £30 000 (gross £80 000); B: net £25 000 (gross £60 000); A stronger trading margin.",
              },
            },
            {
              id: "ebz10-u7-fs-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A retailer's income statement: revenue £500 000, cost of sales £320 000, rent £60 000, wages £70 000, other expenses £30 000.",
              parts: [
                { label: "a", prompt: "Calculate gross profit and net profit.", marks: 3 },
                { label: "b", prompt: "Its balance sheet shows current assets £90 000 and current liabilities £55 000. Calculate the current ratio.", marks: 3 },
                { label: "c", prompt: "Evaluate the retailer's financial position using your answers.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Statement analysis", statement: "Profitability and liquidity together give the picture." }],
                steps: [
                  { reasoning: "(a) Gross profit = £500 000 - £320 000 = £180 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Other expenses total = £60 000 + £70 000 + £30 000 = £160 000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Net profit = £180 000 - £160 000 = £20 000.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Current ratio = £90 000 / £55 000 = 1.64 : 1.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Ratio stated correctly.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) Profitable (£20 000 net) but thin margin; liquidity ratio above 1 suggests short-term debts are covered.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Evaluation: modest profit relative to revenue; monitor whether current assets are mostly cash/stock vs debtors.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Gross £180 000, net £20 000, current ratio 1.64:1 — profitable and liquid, but thin net margin.",
              },
            },
          ],
        },
        {
          id: "ebz10-u7-ratios", title: "Profitability and Liquidity Ratios",
          skill: "Calculate and interpret gross margin, net margin and current ratio.",
          sections: [
            { heading: "Profitability ratios", body: "Ratios compare figures so businesses of different sizes can be compared and trends tracked. **Gross profit margin** = (gross profit / revenue) x 100 — measures trading efficiency. **Net profit margin** = (net profit / revenue) x 100 — measures overall profitability. Rising margins mean improving performance; falling margins warn of pricing or cost problems." },
            { heading: "Liquidity ratios", body: "**Current ratio** = current assets / current liabilities. Above 1 means short-term assets exceed short-term debts; below 1 signals liquidity risk. **Acid test** excludes stock from current assets — a stricter check. Ratios must be compared over time and with competitors, not judged alone." },
          ],
          keyFormulas: [
            { name: "Gross margin", statement: "(Gross profit / revenue) x 100" },
            { name: "Net margin", statement: "(Net profit / revenue) x 100" },
            { name: "Current ratio", statement: "Current assets / current liabilities" },
            { name: "Acid test", statement: "(Current assets - stock) / current liabilities" },
          ],
          workedExample: {
            problem: "Revenue £200 000, gross profit £80 000, net profit £25 000. Calculate both margins.",
            solution: "Gross margin = (£80 000 / £200 000) x 100 = 40%. Net margin = (£25 000 / £200 000) x 100 = 12.5%.",
          },
          questions: [
            {
              id: "ebz10-u7-ratio-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does a current ratio of 1.5 : 1 tell a business?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Short-term assets are 1.5 times short-term liabilities" },
                { id: "b", text: "The business made 1.5% profit" },
                { id: "c", text: "Sales grew by 50%" },
                { id: "d", text: "The business is insolvent" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Current ratio", statement: "Current assets / current liabilities." }],
                steps: [{ reasoning: "1.5 means assets exceed liabilities by 50% — liquidity looks adequate.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Assets = 1.5x liabilities",
              },
            },
            {
              id: "ebz10-u7-ratio-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Revenue £100 000, gross profit £35 000. Calculate the gross profit margin.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Gross margin", statement: "(Gross profit / revenue) x 100." }],
                steps: [
                  { reasoning: "Margin = gross profit / revenue x 100.", marks: 1, markCode: "AO2" },
                  { reasoning: "= £35 000 / £100 000 x 100.", marks: 1, markCode: "AO2" },
                  { reasoning: "= 35%.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "35%",
              },
            },
            {
              id: "ebz10-u7-ratio-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a business would calculate ratios rather than just looking at profit figures.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Ratio analysis", statement: "Standardised comparison over time and vs competitors." }],
                steps: [
                  { reasoning: "Ratios standardise figures so businesses of different sizes compare.", marks: 1, markCode: "AO2" },
                  { reasoning: "They reveal trends — is performance improving or declining?", marks: 1, markCode: "AO2" },
                  { reasoning: "Benchmarking against competitors shows relative position.", marks: 1, markCode: "AO2" },
                  { reasoning: "Profit alone hides efficiency — margins show how well costs are controlled.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Ratios enable comparison over time, across sizes and against rivals.",
              },
            },
            {
              id: "ebz10-u7-ratio-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Business X: revenue £400 000, gross profit £120 000, net profit £32 000. Current assets £100 000, current liabilities £80 000.",
              parts: [
                { label: "a", prompt: "Calculate gross margin, net margin and current ratio.", marks: 3 },
                { label: "b", prompt: "Interpret what these figures suggest about the business.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Ratio calculation", statement: "Margins as % of revenue; current ratio assets/liabilities." }],
                steps: [
                  { reasoning: "(a) Gross margin = £120 000 / £400 000 x 100 = 30%.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Net margin = £32 000 / £400 000 x 100 = 8%; current ratio = £100 000 / £80 000 = 1.25.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Reasonable trading margin; net margin is thin — overheads absorb much gross profit.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Current ratio above 1 — short-term debts covered, though not by a wide margin.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Gross 30%, net 8%, current 1.25 — profitable and liquid but thin net margin.",
              },
            },
            {
              id: "ebz10-u7-ratio-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Business Y's gross margin fell from 40% to 30% over two years while revenue grew 10%.",
              parts: [
                { label: "a", prompt: "Explain two possible causes of the falling margin.", marks: 3 },
                { label: "b", prompt: "Explain how management should respond and what ratios would help monitor the situation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Margin decline", statement: "Price cuts, cost rises or product mix shifts." }],
                steps: [
                  { reasoning: "(a) Selling prices cut to gain market share, or input costs rose.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Shift to lower-margin products or heavier discounting.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Inefficiency or wastage in production raising cost of sales.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Renegotiate supplier prices, review pricing, cut waste; track gross margin quarterly.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Also monitor net margin and current ratio for overall health.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Revenue growth with falling margin may still be worthwhile if volume compensates — judge net profit.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) price cuts, cost rises, mix shift, inefficiency (b) control costs, monitor margins and net profit.",
              },
            },
            {
              id: "ebz10-u7-ratio-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Two firms compete in the same market. Firm P: revenue £1 000 000, gross profit £300 000, net profit £90 000, current assets £250 000, current liabilities £200 000. Firm Q: revenue £800 000, gross profit £160 000, net profit £56 000, current assets £120 000, current liabilities £150 000.",
              parts: [
                { label: "a", prompt: "Calculate gross margin, net margin and current ratio for each firm.", marks: 4 },
                { label: "b", prompt: "Compare the firms' profitability.", marks: 3 },
                { label: "c", prompt: "Evaluate which firm is in the stronger financial position overall.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparative ratio analysis", statement: "Ratios allow fair comparison across different-sized firms." }],
                steps: [
                  { reasoning: "(a) P: gross 30%, net 9%, current 1.25.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Q: gross 20%, net 7%, current 0.8.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) P is more profitable on every margin — better pricing or cost control.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Q's lower margins suggest weaker trading position.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(c) P stronger overall: higher margins AND current ratio above 1.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Q's current ratio below 1 signals liquidity risk — may struggle to pay short-term debts.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "P: 30%/9%/1.25; Q: 20%/7%/0.8 — P stronger on profitability and liquidity; Q faces liquidity risk.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u7-fin3-notes", title: "Statements and ratios — notes",
      summary: "Income statement = performance over time; balance sheet = position at a date. Ratios standardise comparison.",
      sections: [
        { heading: "Statements", body: "Gross profit = revenue - cost of sales; net profit deducts all expenses. Capital = assets - liabilities." },
        { heading: "Margins", body: "Gross margin and net margin = profit as % of revenue — compare over time and vs rivals." },
        { heading: "Liquidity", body: "Current ratio = current assets / current liabilities; below 1 warns of cash problems." },
      ],
    },
  },
];

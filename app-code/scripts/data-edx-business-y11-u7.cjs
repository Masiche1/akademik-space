module.exports = [
  {
    file: "lesson-7-1.ts", exportName: "lesson71",
    lesson: {
      id: "ebz11-u7-lesson-7-1", code: "7-1",
      title: "Budgets and Financial Planning",
      goal: "I CAN explain the purpose and types of budgets and use budgets to monitor and control performance.",
      standards: ["Edexcel IGCSE Business 4BS0 — Finance: budgeting and financial planning"],
      vocabulary: [
        { term: "Budget", definition: "A plan expressed in financial terms showing expected income and expenditure over a period." },
        { term: "Cash budget", definition: "Budget forecasting expected cash inflows and outflows period by period." },
        { term: "Sales budget", definition: "Budget estimating expected sales revenue for a period." },
        { term: "Expenditure budget", definition: "Budget setting planned spending on costs such as materials, wages and overheads." },
        { term: "Budgetary control", definition: "Comparing actual results with the budget and taking corrective action on variances." },
        { term: "Adverse variance", definition: "When actual results are worse than budgeted (higher costs or lower revenue than planned)." },
        { term: "Favourable variance", definition: "When actual results are better than budgeted (lower costs or higher revenue than planned)." },
      ],
      concepts: [
        {
          id: "ebz11-u7-budgets", title: "Budgets and Their Purpose",
          skill: "Identify budget types and explain why businesses prepare budgets.",
          sections: [
            { heading: "What budgets are for", body: "A **budget** is a financial plan for a future period. Budgets force managers to think ahead, coordinate departments (sales plans drive production plans), set targets and provide a benchmark for measuring performance. Without budgets, businesses cannot tell whether they are spending too much or earning enough." },
            { heading: "Types of budget", body: "**Sales budget** — forecast revenue; drives all other budgets. **Production/materials budget** — quantities needed to meet sales. **Expenditure/cost budget** — planned spending on wages, raw materials, rent, advertising. **Cash budget** — timing of cash in and out; predicts shortages or surpluses. **Master budget** — combines all budgets into an overall plan including profit." },
            { heading: "Advantages and disadvantages", body: "**Advantages**: better planning and coordination; clear targets for managers; early warning of cash problems; basis for performance appraisal. **Disadvantages**: based on estimates — can be inaccurate; rigid, may discourage spending that would benefit the business; time-consuming to prepare; demotivating if targets are unrealistic." },
          ],
          keyFormulas: [
            { name: "Budget", statement: "planned income − planned expenditure for a period" },
            { name: "Variance", statement: "actual result − budgeted result" },
          ],
          workedExample: {
            problem: "A business budgets sales of £80,000 and costs of £65,000. Actual sales are £85,000 and actual costs are £70,000. Calculate budgeted profit and actual profit, and the variance.",
            solution: "Budgeted profit = 80,000 − 65,000 = £15,000. Actual profit = 85,000 − 70,000 = £15,000. Profit variance = 15,000 − 15,000 = £0 — sales and costs were both £5,000 above budget, so profit matched the plan.",
          },
          questions: [
            {
              id: "ebz11-u7-budgets-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which statement best defines a budget?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A record of past sales" },
                { id: "b", text: "A financial plan of expected income and expenditure" },
                { id: "c", text: "A bank loan agreement" },
                { id: "d", text: "A list of employees" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Budget", statement: "A financial plan for a future period." }],
                steps: [{ reasoning: "A budget plans expected income and spending.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** A financial plan of expected income and expenditure",
              },
            },
            {
              id: "ebz11-u7-budgets-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three types of budget and state the purpose of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Budget types", statement: "Sales, production, expenditure, cash, master." }],
                steps: [
                  { reasoning: "Sales budget — forecast revenue for the period.", marks: 1, markCode: "AO1" },
                  { reasoning: "Production/expenditure budget — planned output and costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Cash budget — forecast timing of cash in and out.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Sales, production/expenditure and cash budgets each with a correct purpose.",
                commonErrors: ["Listing types without purposes.", "Confusing budget with forecast only."],
              },
            },
            {
              id: "ebz11-u7-budgets-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two advantages and one disadvantage of using budgets in a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Budgeting", statement: "Planning tool with coordination benefits and rigidity costs." }],
                steps: [
                  { reasoning: "Advantage 1: improves planning and coordinates departments (e.g. sales drives production).", marks: 1, markCode: "AO2" },
                  { reasoning: "Advantage 2: sets targets and enables performance measurement/early cash warnings.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage: based on estimates — can be inaccurate or demotivating if unrealistic.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Two advantages (planning/coordination, targets/control) and one valid disadvantage (estimates/rigidity).",
                commonErrors: ["Only advantages or only disadvantages.", "Vague points without explanation."],
              },
            },
            {
              id: "ebz11-u7-budgets-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A café prepares a monthly budget.",
              parts: [
                { label: "a", prompt: "State which budget would cover expected takings from customers.", marks: 2 },
                { label: "b", prompt: "Explain one reason why the café might produce a cash budget as well as a sales budget.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Applying budgets", statement: "Match budget type to purpose; cash timing matters." }],
                steps: [
                  { reasoning: "(a) Sales budget — it forecasts expected revenue/takings.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Sales budget shows revenue but not when cash arrives.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cash budget reveals timing gaps (e.g. slow card payments vs rent due).", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Helps avoid cash shortages even when sales look healthy.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Sales budget. (b) Cash timing differs from sales — cash budget prevents shortages.",
                commonErrors: ["Choosing cash budget for (a).", "No link between timing and shortage."],
              },
            },
            {
              id: "ebz11-u7-budgets-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business budgets costs of £50,000 for a quarter but actual costs are £58,000.",
              parts: [
                { label: "a", prompt: "Calculate the cost variance and state whether it is favourable or adverse.", marks: 3 },
                { label: "b", prompt: "Give two possible reasons for this variance.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Variance", statement: "actual − budget; higher cost = adverse." }],
                steps: [
                  { reasoning: "(a) Variance = 58,000 − 50,000 = £8,000 over budget.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Costs above budget = adverse variance.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Possible cause: prices of materials rose unexpectedly.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Possible cause: higher output/overstaffing or waste.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) £8,000 adverse. (b) e.g. material price rises, higher output or waste.",
                commonErrors: ["Wrong direction (calling it favourable).", "No calculation shown."],
              },
            },
            {
              id: "ebz11-u7-budgets-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A growing business wants to improve its financial planning.",
              parts: [
                { label: "a", prompt: "Define the term budget.", marks: 2 },
                { label: "b", prompt: "Name four types of budget a business might prepare.", marks: 2 },
                { label: "c", prompt: "Explain two advantages of budgeting for this business.", marks: 3 },
                { label: "d", prompt: "Explain two disadvantages of budgeting that managers should be aware of.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Budgeting evaluation", statement: "Budgets plan and control, but rely on estimates." }],
                steps: [
                  { reasoning: "(a) Financial plan of expected income/expenditure for a period.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Any four of: sales, production/materials, expenditure/cost, cash, master.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Advantage: forces forward planning and coordinates departments.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Advantage: sets targets and gives early warning of cash problems.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Disadvantage: based on estimates — can be inaccurate/unrealistic.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Disadvantage: rigid — may discourage beneficial spending; time-consuming.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "Budgets = financial plans; types, advantages (planning/control) and disadvantages (estimates/rigidity) explained.",
                commonErrors: ["Missing a part.", "Advantages and disadvantages swapped."],
              },
            },
          ],
        },
        {
          id: "ebz11-u7-budget-control", title: "Budgetary Control and Financial Planning",
          skill: "Use variances to monitor performance and link budgets to financial plans.",
          sections: [
            { heading: "Variance analysis", body: "**Variance = actual result − budgeted result**. For revenue, actual above budget = **favourable**; for costs, actual below budget = **favourable**. Adverse variances signal a problem needing investigation — e.g. sales below target or costs above plan. Managers compare each budget line, identify causes and take corrective action (budgetary control)." },
            { heading: "Financial planning", body: "Budgets are part of wider **financial planning**: forecasting sales, costs and cash needs for the year ahead. Businesses use forecasts (based on past data and market trends) to set the master budget, decide on investment and arrange finance. Planning reduces surprises — e.g. knowing a cash gap is coming lets the business arrange an overdraft before it is needed." },
          ],
          keyFormulas: [
            { name: "Variance", statement: "actual − budget (sign interpreted by cost vs revenue)" },
            { name: "Budgeted profit", statement: "budgeted revenue − budgeted costs" },
          ],
          workedExample: {
            problem: "Budgeted sales £120,000; actual sales £105,000. Budgeted costs £90,000; actual costs £88,000. Find the sales variance, cost variance and profit variance.",
            solution: "Sales variance = 105,000 − 120,000 = −£15,000 (adverse). Cost variance = 88,000 − 90,000 = −£2,000 actual vs budget — costs £2,000 below budget = favourable £2,000. Budgeted profit £30,000; actual profit 105,000 − 88,000 = £17,000; profit variance = £13,000 adverse.",
          },
          questions: [
            {
              id: "ebz11-u7-budget-control-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does a favourable cost variance mean?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Costs were higher than budget" },
                { id: "b", text: "Costs were lower than budget" },
                { id: "c", text: "Sales were higher than budget" },
                { id: "d", text: "The budget was cancelled" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Favourable variance", statement: "Actual better than budget." }],
                steps: [{ reasoning: "Favourable for costs = spent less than planned.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Costs were lower than budget",
              },
            },
            {
              id: "ebz11-u7-budget-control-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Budgeted sales are £100,000 and actual sales are £112,000. Calculate the sales variance and state whether it is favourable or adverse.",
              response: { type: "numeric", parts: [
                { label: "variance (£)", answer: 12000 },
                { label: "favourable? (1 = yes, 0 = no)", answer: 1 },
              ] },
              markscheme: {
                principles: [{ kind: "formula", name: "Variance", statement: "actual − budget; revenue above budget = favourable." }],
                steps: [
                  { reasoning: "Variance = 112,000 − 100,000 = £12,000.", marks: 2, markCode: "AO2" },
                  { reasoning: "Sales above budget = favourable.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "£12,000 favourable",
                commonErrors: ["Wrong sign.", "Wrong favourable/adverse label."],
              },
            },
            {
              id: "ebz11-u7-budget-control-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain what budgetary control involves and why businesses use it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Budgetary control", statement: "Compare actual vs budget; act on variances." }],
                steps: [
                  { reasoning: "Compare actual results with each budget line at intervals.", marks: 1, markCode: "AO2" },
                  { reasoning: "Calculate variances and identify adverse ones needing attention.", marks: 1, markCode: "AO2" },
                  { reasoning: "Investigate causes of variances — price changes, waste, demand shifts.", marks: 1, markCode: "AO2" },
                  { reasoning: "Take corrective action so year-end results stay on plan.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Monitor actual vs budget, investigate variances, take corrective action.",
                commonErrors: ["Only describing variance calculation.", "No mention of corrective action."],
              },
            },
            {
              id: "ebz11-u7-budget-control-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A retailer's sales budget for December was £200,000. Actual sales were £175,000.",
              parts: [
                { label: "a", prompt: "Calculate the sales variance and state whether it is favourable or adverse.", marks: 2 },
                { label: "b", prompt: "Give two possible reasons for this variance.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Revenue variance", statement: "actual − budget; below budget = adverse." }],
                steps: [
                  { reasoning: "(a) Variance = 175,000 − 200,000 = −£25,000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Sales below budget = £25,000 adverse.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Possible cause: weaker consumer demand or competitor promotion.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Possible cause: stock shortages, poor staff or bad weather reducing footfall.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) £25,000 adverse. (b) e.g. lower demand, competitor promotion, stock issues.",
                commonErrors: ["Sign error.", "Labelling adverse as favourable."],
              },
            },
            {
              id: "ebz11-u7-budget-control-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business is preparing its financial plan for next year.",
              parts: [
                { label: "a", prompt: "Explain why the sales budget is usually prepared before other budgets.", marks: 3 },
                { label: "b", prompt: "Explain how a cash budget differs from a sales budget.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Budget hierarchy", statement: "Sales forecast drives production, expenditure and cash budgets." }],
                steps: [
                  { reasoning: "(a) Expected sales determine how much must be produced and bought.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Production and materials budgets depend on sales volume.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Expenditure budgets are built on the costs of meeting sales.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Sales budget = expected revenue; cash budget = timing of inflows/outflows.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Sales may be credit — cash arrives later; cash budget captures this gap.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Sales drives all other budgets. (b) Sales=volume; cash=timing of payments.",
                commonErrors: ["Treating cash and sales budgets as identical.", "No dependency explained."],
              },
            },
            {
              id: "ebz11-u7-budget-control-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A business prepared budgets but year-end results differ significantly from plan.",
              parts: [
                { label: "a", prompt: "Define variance and state how a favourable cost variance is identified.", marks: 3 },
                { label: "b", prompt: "Budgeted profit was £40,000; actual profit was £28,000. Calculate the profit variance and state whether it is favourable or adverse.", marks: 3 },
                { label: "c", prompt: "Explain two reasons why actual results may differ from budgets.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Budget control", statement: "Variance = actual − budget; investigate and correct." }],
                steps: [
                  { reasoning: "(a) Variance = actual result − budgeted result.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Favourable cost variance = actual costs below budget.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Variance = 28,000 − 40,000 = −£12,000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Profit below budget = £12,000 adverse.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Reason: budgets are estimates — demand, prices or costs changed unexpectedly.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Reason: poor budgetary control during the year — variances not acted on early.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) variance=actual−budget; (b) £12,000 adverse; (c) estimates wrong / weak control.",
                commonErrors: ["Missing calculation.", "Reasons that repeat the same point."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u7-budgets-notes", title: "Budgets — revision notes",
      summary: "Budgets = financial plans. Types: sales, production, expenditure, cash, master. Variance = actual − budget; favourable = better than plan. Budgets coordinate, target and warn; they rely on estimates.",
      sections: [
        { heading: "Key idea", body: "Sales budget drives production, expenditure and cash budgets — prepare it first." },
        { heading: "Variance", body: "Revenue above budget or costs below budget = favourable; the reverse = adverse." },
        { heading: "Evaluation", body: "Budgets improve planning and control but are only as good as their forecasts." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts", exportName: "lesson72",
    lesson: {
      id: "ebz11-u7-lesson-7-2", code: "7-2",
      title: "Investment Appraisal",
      goal: "I CAN calculate payback period and return on investment and evaluate investment decisions.",
      standards: ["Edexcel IGCSE Business 4BS0 — Finance: investment appraisal"],
      vocabulary: [
        { term: "Investment appraisal", definition: "Techniques used to decide whether a project or asset is worth investing in." },
        { term: "Payback period", definition: "Time taken for cumulative cash inflows to cover the initial investment." },
        { term: "Return on investment (ROI)", definition: "Profit as a percentage of the amount invested." },
        { term: "Average annual profit", definition: "Total profit over the project life divided by the number of years." },
        { term: "Non-financial factors", definition: "Considerations that cannot be measured in money, e.g. environmental impact or staff morale." },
      ],
      concepts: [
        {
          id: "ebz11-u7-appraisal", title: "Payback and Return on Investment",
          skill: "Calculate and interpret payback period and ROI for investment projects.",
          sections: [
            { heading: "Payback period", body: "**Payback period = time for cumulative net cash inflows to equal the initial investment.** Shorter payback = less risk, capital recovered quickly. Where annual returns are equal, **payback = initial investment ÷ annual net cash inflow**. If returns differ by year, add inflows year by year until the investment is recovered." },
            { heading: "Return on investment", body: "**ROI = average annual profit ÷ initial investment × 100%**. It measures profitability of the investment as a percentage. Compare ROI across projects or against alternatives (e.g. bank interest). **Average annual profit = total profit ÷ number of years**. Note: ROI ignores the time value of money and is based on profit, not cash flow." },
          ],
          keyFormulas: [
            { name: "Payback", statement: "initial investment ÷ annual net cash inflow (years)" },
            { name: "ROI", statement: "(average annual profit ÷ initial investment) × 100" },
            { name: "Average annual profit", statement: "total profit ÷ project life in years" },
          ],
          workedExample: {
            problem: "A machine costs £60,000 and generates net cash inflows of £20,000, £25,000, £15,000, £10,000 over four years. Find the payback period.",
            solution: "Cumulative inflows: year 1 = 20,000; year 2 = 45,000; year 3 = 60,000. The investment is fully recovered during year 3, so payback = 3 years (reached at the end of year 3).",
          },
          questions: [
            {
              id: "ebz11-u7-appraisal-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does the payback period measure?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Total profit of a project" },
                { id: "b", text: "Time taken to recover the initial investment" },
                { id: "c", text: "Annual interest earned" },
                { id: "d", text: "Number of employees needed" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Payback period", statement: "Time to recover the initial investment." }],
                steps: [{ reasoning: "Payback = time until cumulative inflows cover the cost.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Time to recover the investment",
              },
            },
            {
              id: "ebz11-u7-appraisal-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A project costs £40,000 and is expected to generate net cash inflows of £10,000 per year. Calculate the payback period.",
              response: { type: "numeric", parts: [{ label: "payback (years)", answer: 4, tolerance: 0 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Payback", statement: "investment ÷ annual inflow." }],
                steps: [
                  { reasoning: "Payback = 40,000 ÷ 10,000 = 4 years.", marks: 3, markCode: "AO2" },
                ],
                finalAnswer: "4 years",
                commonErrors: ["Dividing by the wrong figure.", "Answering in months without converting."],
              },
            },
            {
              id: "ebz11-u7-appraisal-q3", difficulty: "core", totalMarks: 4,
              stem: "A project costs £50,000 and makes an average annual profit of £8,000 over 5 years. Calculate the return on investment.",
              response: { type: "numeric", parts: [{ label: "ROI (%)", answer: 16, tolerance: 0.01 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "ROI", statement: "(average annual profit ÷ investment) × 100." }],
                steps: [
                  { reasoning: "ROI = (8,000 ÷ 50,000) × 100.", marks: 2, markCode: "AO2" },
                  { reasoning: "ROI = 0.16 × 100 = 16%.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "16%",
                commonErrors: ["Forgetting ×100 (answering 0.16).", "Using total profit instead of average annual."],
              },
            },
            {
              id: "ebz11-u7-appraisal-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A business compares two machines.",
              parts: [
                { label: "a", prompt: "Machine A costs £30,000 with annual net cash inflow £7,500. Calculate its payback period.", marks: 2 },
                { label: "b", prompt: "Machine B costs £45,000 with annual net cash inflow £9,000. Calculate its payback period and state which machine has the shorter payback.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Payback comparison", statement: "investment ÷ annual inflow; shorter is preferable." }],
                steps: [
                  { reasoning: "(a) Payback A = 30,000 ÷ 7,500 = 4 years.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Payback B = 45,000 ÷ 9,000 = 5 years.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Machine A has the shorter payback (4 < 5 years).", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) 4 years. (b) 5 years — Machine A shorter.",
                commonErrors: ["Calculation errors.", "Comparing costs instead of payback."],
              },
            },
            {
              id: "ebz11-u7-appraisal-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A project costs £80,000. Expected annual profits are £12,000 for years 1-3 and £20,000 for years 4-5.",
              parts: [
                { label: "a", prompt: "Calculate total profit over the five years.", marks: 2 },
                { label: "b", prompt: "Calculate the average annual profit.", marks: 1 },
                { label: "c", prompt: "Calculate the ROI and state what it means.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "ROI calculation", statement: "avg annual profit ÷ investment × 100." }],
                steps: [
                  { reasoning: "(a) Total profit = (12,000 × 3) + (20,000 × 2) = 36,000 + 40,000 = £76,000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Average annual profit = 76,000 ÷ 5 = £15,200.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) ROI = (15,200 ÷ 80,000) × 100 = 19%.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) ROI 19% means the investment earns 19p profit per £1 invested per year on average.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) £76,000. (b) £15,200. (c) 19%.",
                commonErrors: ["Using total instead of average profit.", "Forgetting ×100."],
              },
            },
            {
              id: "ebz11-u7-appraisal-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A firm must choose between investing £50,000 in Project X or Project Y.",
              parts: [
                { label: "a", prompt: "Define payback period.", marks: 2 },
                { label: "b", prompt: "Project X: annual net cash inflow £12,500. Calculate the payback period.", marks: 2 },
                { label: "c", prompt: "Project Y: net cash inflows £10,000 (year 1), £15,000 (year 2), £25,000 (year 3). Calculate the payback period.", marks: 3 },
                { label: "d", prompt: "Explain one limitation of the payback method when comparing projects.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Investment appraisal", statement: "Payback measures speed of return; ignores later years and profit levels." }],
                steps: [
                  { reasoning: "(a) Time for cumulative cash inflows to recover the initial investment.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Payback X = 50,000 ÷ 12,500 = 4 years.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Cumulative: 10,000; 25,000; 50,000 — recovered during year 3.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Payback Y = 3 years.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Limitation: ignores cash flows after payback — a project with later high returns may be rejected.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) time to recover investment; (b) 4 yrs; (c) 3 yrs; (d) ignores later cash flows.",
                commonErrors: ["Wrong cumulative calculation for Y.", "Limitation that applies to ROI not payback."],
              },
            },
          ],
        },
        {
          id: "ebz11-u7-appraisal-eval", title: "Evaluating Investment Decisions",
          skill: "Assess strengths and weaknesses of appraisal methods and non-financial factors.",
          sections: [
            { heading: "Strengths and limitations", body: "**Payback**: simple, quick, focuses on risk and cash recovery — but ignores total profit and cash flows after payback, and treats all projects with the same payback as equal. **ROI**: shows profitability as a percentage, easy to compare — but based on profit (not cash), ignores timing of returns, and average annual profit can hide uneven returns. Neither method considers the **time value of money** (a £1 received next year is worth more than £1 in five years)." },
            { heading: "Non-financial factors", body: "Appraisal methods only measure money. Decisions also depend on factors that cannot be easily quantified: environmental impact, staff training needs, reputation, legal requirements, whether the project fits the firm's strategy, and staff morale or safety. A project with a good payback may still be rejected if it damages the firm's image or breaches environmental rules — and a project with a modest return may be chosen for strategic reasons." },
          ],
          keyFormulas: [
            { name: "Decision rule", statement: "shorter payback / higher ROI generally preferred, subject to non-financial factors" },
          ],
          workedExample: {
            problem: "Project A pays back in 2 years with ROI 12%; Project B pays back in 5 years with ROI 25%. Which should the business choose? Justify.",
            solution: "Depends on priorities. If cash flow and low risk matter (e.g. limited funds), choose A — capital recovered quickly. If long-term profitability matters and the firm can afford the wait, B gives a higher return. Also consider non-financial factors: market growth, strategic fit, environmental impact.",
          },
          questions: [
            {
              id: "ebz11-u7-appraisal-eval-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which is an advantage of the payback method?",
              response: { type: "mcq", choices: [
                { id: "a", text: "It measures total profit over the project life" },
                { id: "b", text: "It is simple and shows how quickly capital is recovered" },
                { id: "c", text: "It accounts for the time value of money" },
                { id: "d", text: "It includes non-financial factors" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Payback strengths", statement: "Simple; focuses on capital recovery and risk." }],
                steps: [{ reasoning: "Payback is simple and highlights liquidity/risk.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Simple; shows speed of capital recovery",
              },
            },
            {
              id: "ebz11-u7-appraisal-eval-q2", difficulty: "foundation", totalMarks: 3,
              stem: "State one limitation of using ROI to compare investment projects.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "ROI limitations", statement: "Profit-based; ignores timing and cash flow." }],
                steps: [
                  { reasoning: "ROI uses profit not cash flow, and ignores when returns occur.", marks: 1, markCode: "AO2" },
                  { reasoning: "Two projects with the same ROI can have very different risk profiles.", marks: 1, markCode: "AO2" },
                  { reasoning: "Averaging can hide uneven or back-loaded returns.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Any valid limitation: profit-based, ignores timing/risk, averaging hides uneven returns.",
                commonErrors: ["Repeating a strength as a limitation."],
              },
            },
            {
              id: "ebz11-u7-appraisal-eval-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a business should consider non-financial factors when appraising an investment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Non-financial factors", statement: "Appraisal methods only measure money." }],
                steps: [
                  { reasoning: "Payback and ROI only capture financial returns.", marks: 1, markCode: "AO2" },
                  { reasoning: "Projects may affect environment, staff morale, reputation or legal compliance.", marks: 1, markCode: "AO2" },
                  { reasoning: "Strategic fit matters — a project may support long-term goals beyond this year's profit.", marks: 1, markCode: "AO2" },
                  { reasoning: "Ignoring these can lead to decisions that are profitable but harmful or illegal.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Appraisal methods measure only money; environment, strategy, morale and legal factors can change the decision.",
                commonErrors: ["Only listing factors without explaining why they matter."],
              },
            },
            {
              id: "ebz11-u7-appraisal-eval-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Project P pays back in 3 years with ROI of 14%. The firm could instead leave money in a savings account earning 5% interest.",
              parts: [
                { label: "a", prompt: "Explain how the business should use the savings-account comparison in its decision.", marks: 2 },
                { label: "b", prompt: "Give two non-financial factors the business should also consider.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Opportunity cost", statement: "Investment must beat the best alternative use of funds." }],
                steps: [
                  { reasoning: "(a) Compare ROI 14% with 5% — the project earns more, so it is financially attractive.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Valid factor: environmental impact of the project.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Valid factor: effect on staff training/morale or strategic fit with firm goals.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) ROI 14% > 5% interest so project beats the alternative. (b) e.g. environment, morale, strategy.",
                commonErrors: ["Ignoring the alternative return.", "Repeating financial factors in (b)."],
              },
            },
            {
              id: "ebz11-u7-appraisal-eval-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two projects both have a payback period of 4 years.",
              parts: [
                { label: "a", prompt: "Explain why payback alone cannot decide between them.", marks: 3 },
                { label: "b", prompt: "State two other pieces of information the business should gather before deciding.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Limits of payback", statement: "Same payback can hide very different total returns." }],
                steps: [
                  { reasoning: "(a) Payback ignores cash flows after year 4 — one project may earn far more later.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Same payback does not mean same total profit or risk profile.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Information: total expected profit / ROI for each project.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Information: non-financial factors — strategy fit, environmental impact, staffing needs.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Payback ignores post-payback returns and total profit. (b) ROI/total profit and non-financial factors.",
                commonErrors: ["Saying payback is useless.", "Gathering only financial data."],
              },
            },
            {
              id: "ebz11-u7-appraisal-eval-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A business is deciding whether to invest £100,000 in new machinery.",
              parts: [
                { label: "a", prompt: "State the formula for payback period and for ROI.", marks: 2 },
                { label: "b", prompt: "The machinery gives net cash inflows of £25,000 per year for 4 years. Calculate the payback period.", marks: 2 },
                { label: "c", prompt: "Total profit over 4 years is £60,000. Calculate the ROI.", marks: 3 },
                { label: "d", prompt: "Evaluate whether the business should go ahead, considering at least one limitation of the methods used.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Appraisal decision", statement: "Use methods plus judgement; methods have limits." }],
                steps: [
                  { reasoning: "(a) Payback = investment ÷ annual inflow; ROI = (avg annual profit ÷ investment) × 100.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Payback = 100,000 ÷ 25,000 = 4 years.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Average annual profit = 60,000 ÷ 4 = £15,000.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) ROI = (15,000 ÷ 100,000) × 100 = 15%.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Payback 4 years is relatively long; ROI 15% may or may not beat alternatives.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Limitation: methods ignore non-financial factors and cash-flow timing; decision needs judgement.", marks: 1, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) formulas; (b) 4 yrs; (c) 15%; (d) evaluate with limitation.",
                commonErrors: ["Wrong ROI denominator.", "No evaluation, just numbers."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u7-appraisal-notes", title: "Investment appraisal — revision notes",
      summary: "Payback = investment ÷ annual inflow (shorter = safer). ROI = avg annual profit ÷ investment × 100 (higher = more profitable). Both ignore non-financial factors and the time value of money.",
      sections: [
        { heading: "Key idea", body: "Payback measures speed of return; ROI measures profitability. Use both, plus non-financial factors." },
        { heading: "Common errors", body: "Using total instead of average profit for ROI; forgetting ×100; ignoring cash flows after payback." },
        { heading: "Evaluation", body: "Compare against the best alternative use of funds, e.g. interest earned elsewhere." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts", exportName: "lesson73",
    lesson: {
      id: "ebz11-u7-lesson-7-3", code: "7-3",
      title: "Working Capital and Credit Control",
      goal: "I CAN explain working capital, manage it effectively and operate a credit control system.",
      standards: ["Edexcel IGCSE Business 4BS0 — Finance: working capital and credit control"],
      vocabulary: [
        { term: "Working capital", definition: "Current assets minus current liabilities — the funds available for day-to-day operations." },
        { term: "Current assets", definition: "Assets convertible to cash within one year: cash, debtors, inventory." },
        { term: "Current liabilities", definition: "Amounts owed within one year: creditors, overdrafts, wages due." },
        { term: "Trade credit", definition: "Buying goods now and paying the supplier later, e.g. 30 days." },
        { term: "Credit control", definition: "System for checking customers' ability to pay and collecting debts on time." },
        { term: "Bad debt", definition: "A debt that cannot be collected and must be written off as a loss." },
        { term: "Cash conversion cycle", definition: "Time taken to convert resources into cash through operations." },
      ],
      concepts: [
        {
          id: "ebz11-u7-working-capital", title: "Working Capital Management",
          skill: "Calculate working capital and explain how to manage its components.",
          sections: [
            { heading: "What working capital is", body: "**Working capital = current assets − current liabilities**. It is the money tied up in day-to-day trading — stock, money owed by customers, cash — minus short-term debts like supplier invoices and overdrafts. **Too little** working capital means the business cannot pay bills on time (illiquidity, possible failure). **Too much** means cash sits idle earning nothing — it could be invested or used to reduce borrowing." },
            { heading: "Managing the components", body: "Manage three current assets: **inventory** — hold enough stock to meet demand but not so much it ties up cash or risks obsolescence; use just-in-time ordering. **Debtors** — control credit given to customers so cash is collected quickly. **Cash** — reconcile bank accounts and forecast cash needs. Manage **creditors** — take full credit periods offered by suppliers (paying early wastes cash), but do not damage supplier relationships." },
          ],
          keyFormulas: [
            { name: "Working capital", statement: "current assets − current liabilities" },
            { name: "Liquidity test", statement: "positive working capital needed for day-to-day payments" },
          ],
          workedExample: {
            problem: "A business has current assets of £95,000 (cash £15,000, debtors £40,000, inventory £40,000) and current liabilities of £60,000. Calculate working capital and comment.",
            solution: "Working capital = 95,000 − 60,000 = £35,000 positive — the business can cover short-term debts. However, £40,000 is tied up in inventory and £40,000 in debtors, so there is room to improve collection speed and stock levels.",
          },
          questions: [
            {
              id: "ebz11-u7-working-capital-q1", difficulty: "foundation", totalMarks: 2,
              stem: "How is working capital calculated?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Current liabilities − current assets" },
                { id: "b", text: "Current assets − current liabilities" },
                { id: "c", text: "Total assets − total liabilities" },
                { id: "d", text: "Revenue − costs" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "formula", name: "Working capital", statement: "current assets − current liabilities." }],
                steps: [{ reasoning: "Working capital = current assets minus current liabilities.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Current assets − current liabilities",
              },
            },
            {
              id: "ebz11-u7-working-capital-q2", difficulty: "foundation", totalMarks: 3,
              stem: "A business has current assets of £120,000 and current liabilities of £85,000. Calculate its working capital.",
              response: { type: "numeric", parts: [{ label: "working capital (£)", answer: 35000, tolerance: 0 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Working capital", statement: "CA − CL." }],
                steps: [
                  { reasoning: "Working capital = 120,000 − 85,000 = £35,000.", marks: 3, markCode: "AO2" },
                ],
                finalAnswer: "£35,000",
                commonErrors: ["Subtracting in the wrong direction."],
              },
            },
            {
              id: "ebz11-u7-working-capital-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why both too little and too much working capital can be a problem for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Working capital balance", statement: "Too little = illiquid; too much = idle funds." }],
                steps: [
                  { reasoning: "Too little: cannot pay short-term debts — risk of illiquidity or failure.", marks: 2, markCode: "AO2" },
                  { reasoning: "Too much: cash sits idle earning nothing while borrowing costs continue.", marks: 1, markCode: "AO2" },
                  { reasoning: "Ideal level funds operations without waste — balance needed.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Too little = cannot pay bills; too much = wasted earning potential. Balance required.",
                commonErrors: ["Only one side explained.", "Confusing working capital with profit."],
              },
            },
            {
              id: "ebz11-u7-working-capital-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A retailer finds £50,000 of its working capital is tied up in slow-moving stock.",
              parts: [
                { label: "a", prompt: "Explain one problem caused by holding excessive inventory.", marks: 2 },
                { label: "b", prompt: "Suggest two ways the retailer could reduce inventory levels safely.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Inventory management", statement: "Excess stock ties up cash and risks obsolescence." }],
                steps: [
                  { reasoning: "(a) Cash tied up in stock cannot be used elsewhere; risk of stock becoming obsolete or damaged.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Method: order stock just-in-time / more frequently in smaller quantities.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Method: run promotions or discounts to clear slow lines; improve demand forecasting.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) ties up cash/obsolescence risk. (b) JIT ordering, promotions, better forecasting.",
                commonErrors: ["Suggesting buying even more stock.", "No link to working capital."],
              },
            },
            {
              id: "ebz11-u7-working-capital-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business wants to improve its working capital position without harming customer or supplier relationships.",
              parts: [
                { label: "a", prompt: "Explain how faster collection of debts from customers would affect working capital.", marks: 3 },
                { label: "b", prompt: "Explain how taking the full credit period offered by suppliers would affect working capital.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "WC components", statement: "Faster debtors and slower creditors both raise working capital." }],
                steps: [
                  { reasoning: "(a) Faster collection converts debtors to cash sooner — improves liquidity even though the WC total is unchanged.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Reduces the time cash is tied up and lowers bad-debt risk.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Paying at the end of the credit period keeps cash longer — reduces cash outflow timing.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Within agreed terms it does not damage supplier relationships.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Improves liquidity without extra cost (unlike early-payment discounts which cost money).", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) faster debtor collection improves cash flow/liquidity. (b) full credit terms keep cash longer, improving liquidity at no cost.",
                commonErrors: ["Saying WC must rise — liquidity vs WC level confusion.", "Ignoring the 'without harming relationships' condition."],
              },
            },
            {
              id: "ebz11-u7-working-capital-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A business has current assets of £150,000 and current liabilities of £110,000.",
              parts: [
                { label: "a", prompt: "Define working capital.", marks: 2 },
                { label: "b", prompt: "Calculate the working capital and state whether the business is likely to have liquidity problems.", marks: 3 },
                { label: "c", prompt: "List the three main components of current assets that businesses manage.", marks: 2 },
                { label: "d", prompt: "Explain one way the business could improve its working capital management.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Working capital evaluation", statement: "WC = CA − CL; manage cash, debtors, inventory, creditors." }],
                steps: [
                  { reasoning: "(a) Working capital = current assets − current liabilities.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) WC = 150,000 − 110,000 = £40,000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Positive WC means short-term debts are covered — liquidity problems unlikely but £40,000 margin is modest.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Cash, debtors (receivables) and inventory (stock).", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) e.g. tighten credit control to collect debts faster, reduce slow stock, or use supplier credit terms fully.", marks: 3, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) CA−CL; (b) £40,000, covered but modest; (c) cash, debtors, inventory; (d) improve collections/stock/creditors.",
                commonErrors: ["Wrong formula.", "Claiming liquidity problems with positive WC."],
              },
            },
          ],
        },
        {
          id: "ebz11-u7-credit-control", title: "Credit Control",
          skill: "Explain how businesses grant credit safely and collect debts effectively.",
          sections: [
            { heading: "Granting credit safely", body: "Most businesses sell on **trade credit** — customers pay later (e.g. 30 days). Credit boosts sales but risks **bad debts**. A **credit control** system manages this risk: check new customers' creditworthiness (references, credit agency reports, financial history); set **credit limits** per customer; issue invoices promptly with clear payment terms; send reminders before and after the due date; stop supply to customers who exceed limits or pay late; consider **factoring** — selling debts to a finance company for immediate cash at a discount." },
            { heading: "Collecting debts", body: "Effective collection starts early: invoices must be accurate and sent immediately. Use a **creditors/debtors ledger** to track who owes what and for how long. Phone or write to overdue accounts politely but firmly; charge interest or late fees where contract allows. For persistent non-payers, use debt collection agencies or legal action as a last resort. Persistent late payers may be moved to cash-only terms. Bad debts should be provided for in accounts and written off when unrecoverable — prevention is far cheaper than recovery." },
          ],
          keyFormulas: [
            { name: "Credit terms", statement: "e.g. payment due within 30 days of invoice" },
            { name: "Factoring", statement: "selling trade debts to a factor for immediate cash minus a fee" },
          ],
          workedExample: {
            problem: "A firm sells £10,000 of goods on 30-day credit. It uses a factoring company charging 3% of invoice value. How much cash does it receive immediately, and what does it give up?",
            solution: "Cash received = 10,000 × (1 − 0.03) = £9,700 immediately. The firm gives up £300 (the factor's fee) and the factor takes on the risk and effort of collecting the debt.",
          },
          questions: [
            {
              id: "ebz11-u7-credit-control-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is trade credit?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A bank overdraft" },
                { id: "b", text: "Buying now and paying the supplier later" },
                { id: "c", text: "A type of insurance" },
                { id: "d", text: "A government loan" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Trade credit", statement: "Deferred payment for goods purchased." }],
                steps: [{ reasoning: "Trade credit = buy now, pay later (e.g. 30 days).", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Buy now, pay later",
              },
            },
            {
              id: "ebz11-u7-credit-control-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three steps a business can take when setting up credit control for new customers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Credit control steps", statement: "Check, limit, monitor." }],
                steps: [
                  { reasoning: "Check creditworthiness — references, credit reports, past payment history.", marks: 1, markCode: "AO2" },
                  { reasoning: "Set a credit limit appropriate to the customer's size and risk.", marks: 1, markCode: "AO2" },
                  { reasoning: "Monitor the account — track payments, send reminders, stop supply if overdue.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Check creditworthiness, set limits, monitor and enforce terms.",
                commonErrors: ["Only listing collection actions after debt exists."],
              },
            },
            {
              id: "ebz11-u7-credit-control-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why offering too much credit to customers can be dangerous for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Credit risk", statement: "Credit sales raise revenue but risk bad debts and cash shortages." }],
                steps: [
                  { reasoning: "Customers may pay late or not at all — creating bad debts.", marks: 1, markCode: "AO2" },
                  { reasoning: "Cash is tied up in debtors instead of being available for wages and bills.", marks: 1, markCode: "AO2" },
                  { reasoning: "Bad debts reduce profit and may require write-offs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Severe cases cause liquidity problems — profitable sales but no cash to survive.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Late/non-payment → bad debts, tied-up cash, possible liquidity crisis.",
                commonErrors: ["Ignoring the cash-flow effect.", "Only mentioning lost sales if credit refused."],
              },
            },
            {
              id: "ebz11-u7-credit-control-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A customer exceeds its credit limit and an invoice is now 60 days overdue.",
              parts: [
                { label: "a", prompt: "State two actions the business should take immediately.", marks: 2 },
                { label: "b", prompt: "Explain why the business should act now rather than wait.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Debt collection", statement: "Early, firm action protects cash flow." }],
                steps: [
                  { reasoning: "(a) Action: contact the customer to request payment / send a formal reminder.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Action: stop further credit — move to cash-only terms or suspend supply.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Older debts are less likely to be paid — the longer it waits, the higher the bad-debt risk.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Continued supply on credit increases the amount at risk.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Prompt action signals seriousness and often prompts payment without escalation.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) chase payment, restrict further credit. (b) older debts risk becoming bad debts; limit exposure.",
                commonErrors: ["Waiting passively.", "Actions that damage the relationship without cause."],
              },
            },
            {
              id: "ebz11-u7-credit-control-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business is owed £20,000 by customers and needs cash urgently for wages.",
              parts: [
                { label: "a", prompt: "Explain what factoring is.", marks: 3 },
                { label: "b", prompt: "Explain one benefit and one drawback of using a factor in this situation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Factoring", statement: "Selling trade debts to a finance company for immediate cash." }],
                steps: [
                  { reasoning: "(a) Business sells its trade debts (invoices owed) to a factor.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Factor pays most of the invoice value immediately, minus a fee/discount.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Factor then collects the debts from customers and bears the non-payment risk.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Benefit: instant cash flow to cover wages/bills.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Drawback: cost — fees reduce the amount received; also loses control over customer relationships.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) sell debts for immediate cash less fee. (b) benefit: instant liquidity; drawback: cost and lost control.",
                commonErrors: ["Confusing factoring with a loan.", "No cost mentioned."],
              },
            },
            {
              id: "ebz11-u7-credit-control-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A wholesaler sells goods on 30-day credit and is experiencing rising bad debts.",
              parts: [
                { label: "a", prompt: "Define bad debt.", marks: 2 },
                { label: "b", prompt: "Explain two ways bad debts harm a business.", marks: 3 },
                { label: "c", prompt: "Describe three steps the wholesaler could take to improve credit control.", marks: 5 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Credit control system", statement: "Prevent bad debts through checks, limits, monitoring and firm collection." }],
                steps: [
                  { reasoning: "(a) A debt that cannot be collected and must be written off as a loss.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Harm 1: reduces profit — revenue was recorded but cash never arrives.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Harm 2: cash tied up in debtors — liquidity problems, less cash for operations.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Step 1: check creditworthiness of new customers before granting credit.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Step 2: set and enforce credit limits per customer.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Step 3: monitor the debtors ledger, send reminders, stop supply to late payers.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Step 4 (bonus within 5): use collection agencies/factoring for persistent debts.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) uncollectable debt written off. (b) profit loss + cash tied up. (c) check, limit, monitor/collect.",
                commonErrors: ["Treating bad debt as recoverable later.", "Steps that do not address credit granting."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u7-working-capital-notes", title: "Working capital and credit control — revision notes",
      summary: "Working capital = current assets − current liabilities. Manage cash, debtors, inventory, creditors. Credit control = check customers, set limits, monitor, collect firmly; bad debts hurt profit and liquidity.",
      sections: [
        { heading: "Key idea", body: "Too little WC = cannot pay bills; too much = wasted earning potential." },
        { heading: "Credit control", body: "Prevent bad debts: check creditworthiness, set limits, chase payments early, restrict credit to late payers." },
        { heading: "Factoring", body: "Sell trade debts for immediate cash less a fee — improves liquidity at a cost." },
      ],
    },
  },
];

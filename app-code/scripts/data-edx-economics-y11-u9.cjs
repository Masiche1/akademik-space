module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "ecn11-u9-lesson-9-1", code: "9-1",
      title: "Business Finance",
      goal: "I CAN distinguish sources of finance and explain cash flow and profit.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Sources of finance", definition: "The ways a business raises money: internal (retained profit) and external (loans, shares, overdrafts)." },
        { term: "Retained profit", definition: "Profit kept back by the business instead of paid out to owners." },
        { term: "Loan", definition: "Money borrowed that must be repaid with interest over an agreed period." },
        { term: "Share capital", definition: "Money raised by selling shares in a company to shareholders." },
        { term: "Overdraft", definition: "A short-term bank facility allowing a business to spend more than it has in its account." },
        { term: "Cash flow", definition: "The movement of cash into and out of a business over a period." },
        { term: "Profit", definition: "Total revenue minus total cost — the reward for enterprise." },
      ],
      concepts: [
        {
          id: "ecn11-u9-sources", title: "Sources of Finance",
          skill: "Distinguish internal and external sources of finance and match them to business needs.",
          sections: [
            { heading: "Internal and external sources", body: "**Internal sources** come from inside the business: **retained profit** (most common — free of interest but limited by past profits) and **selling assets**. **External sources**: **owner's capital** (sole traders/partnerships), **bank loans** (repayable with interest, suits long-term needs), **overdrafts** (short-term, flexible, for cash-flow gaps), **share capital** (companies — permanent but gives away ownership), **hire purchase/leasing** (spreading asset costs), **trade credit** (buy now, pay suppliers later)." },
            { heading: "Choosing finance", body: "The right source depends on **amount needed**, **time period**, **cost** and **risk**. Long-term expansion suits loans or share capital; short-term gaps suit overdrafts or trade credit. Loans must be repaid even if profits fall; share capital never has to be repaid but dilutes control." },
          ],
          keyFormulas: [
            { name: "Profit", statement: "total revenue − total cost" },
          ],
          workedExample: {
            problem: "A café needs £5,000 to buy a new oven (lasting 5 years) but also faces a £500 seasonal cash gap. Suggest finance for each need.",
            solution: "Oven: bank loan or hire purchase — long-term asset, spread cost. Cash gap: overdraft — short-term, flexible, only for the temporary shortfall.",
          },
          questions: [
            {
              id: "ecn11-u9-sources-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is an internal source of finance?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Bank loan" },
                { id: "b", text: "Retained profit" },
                { id: "c", text: "Share issue" },
                { id: "d", text: "Overdraft" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal finance", statement: "Money from inside the business, e.g. retained profit." }],
                steps: [{ reasoning: "Retained profit comes from the business itself — internal source.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Retained profit",
                commonErrors: ["Confusing internal with external."],
              },
            },
            {
              id: "ecn11-u9-sources-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three external sources of finance for a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "External finance", statement: "Money from outside: loans, shares, overdrafts, credit." }],
                steps: [
                  { reasoning: "Bank loan.", marks: 1, markCode: "AO1" },
                  { reasoning: "Share capital (selling shares).", marks: 1, markCode: "AO1" },
                  { reasoning: "Overdraft, hire purchase, trade credit or owner's capital.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: loan, shares, overdraft, hire purchase, trade credit.",
                commonErrors: ["Listing internal sources."],
              },
            },
            {
              id: "ecn11-u9-sources-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two advantages and two disadvantages of using retained profit as a source of finance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Retained profit", statement: "Free of interest but limited by past profits." }],
                steps: [
                  { reasoning: "Advantage: no interest to pay and no loss of control.", marks: 1, markCode: "AO2" },
                  { reasoning: "Advantage: no repayment schedule — flexible.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage: limited by how much profit was actually made.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage: owners may want dividends — keeping profit back can cause conflict.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Advantages: free, flexible. Disadvantages: limited amount, dividend conflict.",
                commonErrors: ["Only one side."],
              },
            },
            {
              id: "ecn11-u9-sources-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A clothing shop needs £20,000 to renovate and extend its premises.",
              parts: [
                { label: "a", prompt: "Suggest two suitable sources of finance and explain why each fits.", marks: 3 },
                { label: "b", prompt: "Explain why an overdraft would be unsuitable for this need.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Matching finance to need", statement: "Long-term, large needs suit loans/shares; short-term gaps suit overdrafts." }],
                steps: [
                  { reasoning: "(a) Bank loan — large amount, long-term, repayable over time.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Share capital/hire purchase — shares give permanent finance; hire purchase spreads cost.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Overdrafts are short-term and small — unsuitable for a £20,000 long-term project.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Loan or shares/hire purchase. (b) Overdraft = short-term only.",
                commonErrors: ["Suggesting overdraft for (a).", "No reason linked to time period."],
              },
            },
            {
              id: "ecn11-u9-sources-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A start-up tech firm needs £200,000 to develop a product but is unsure whether to borrow or sell shares.",
              parts: [
                { label: "a", prompt: "Explain two advantages of borrowing the money.", marks: 3 },
                { label: "b", prompt: "Explain two disadvantages of selling shares to raise the money.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Debt vs equity", statement: "Loans keep ownership but must be repaid; shares dilute control." }],
                steps: [
                  { reasoning: "(a) Keep full ownership and control; interest is a known cost.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) If profitable, owners keep all the gains.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Shares never have to be repaid; selling them gives up some ownership and control.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) New shareholders may demand dividends or a say in decisions.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Keep control, known cost. (b) Lose control, dividends demanded.",
                commonErrors: ["Confusing shares with loans.", "One side only."],
              },
            },
            {
              id: "ecn11-u9-sources-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A small manufacturer must raise £100,000 to buy machinery that will last 10 years.",
              parts: [
                { label: "a", prompt: "Define the term retained profit.", marks: 2 },
                { label: "b", prompt: "Name three external sources of finance the firm could use.", marks: 2 },
                { label: "c", prompt: "Explain why a bank loan might suit this purchase better than an overdraft.", marks: 3 },
                { label: "d", prompt: "Evaluate whether the firm should use retained profit instead of borrowing.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sources of finance", statement: "Match source to amount, term, cost and risk." }],
                steps: [
                  { reasoning: "(a) Profit kept back by the business rather than paid to owners.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Any three: bank loan, share issue, hire purchase, overdraft.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Loan = long-term, large, fixed repayments matching the machine's life.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Overdraft is short-term and for small gaps — wrong tool for £100,000.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Retained profit avoids interest and keeps control — good if enough profit exists; but it may be insufficient and reduces dividends.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) kept-back profit; (b) three sources; (c) loan suits long-term asset; (d) balanced judgement.",
                commonErrors: ["Retained profit treated as external.", "One-sided evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn11-u9-cashflow", title: "Cash Flow and Profit",
          skill: "Distinguish profit from cash flow and explain why cash flow matters.",
          sections: [
            { heading: "Profit vs cash flow", body: "**Profit** = total revenue − total cost, measured over a period (often a year). **Cash flow** = actual money moving in and out — timing matters. A business can be **profitable but short of cash**: e.g. it sells goods on credit — profit is earned but cash arrives later, while rent and wages must be paid now. Conversely a business can have cash but no profit if it sells assets or borrows." },
            { heading: "Managing cash flow", body: "Poor cash flow is a leading cause of business failure — 'cash is king'. Firms manage it through **cash-flow forecasts**, **credit control** (chasing late payments), **stock control**, **agreed payment terms** and **overdrafts** as a buffer. A healthy business keeps enough liquid cash to meet short-term obligations." },
          ],
          keyFormulas: [
            { name: "Profit", statement: "total revenue − total cost" },
          ],
          workedExample: {
            problem: "A firm earns £10,000 profit but £8,000 of sales are unpaid credit. It must pay £9,000 in wages this month. Is it safe?",
            solution: "No — profit is £10,000 but cash received is only £2,000 (10,000 − 8,000). It cannot pay £9,000 wages — it needs an overdraft or faster collections despite being profitable.",
          },
          questions: [
            {
              id: "ecn11-u9-cashflow-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is cash flow?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Total profit earned in a year" },
                { id: "b", text: "The movement of cash into and out of a business" },
                { id: "c", text: "The value of a firm's assets" },
                { id: "d", text: "Money borrowed from a bank" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cash flow", statement: "Cash moving in and out over time." }],
                steps: [{ reasoning: "Cash flow tracks actual money movements, not just profit.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Cash movements in and out",
                commonErrors: ["Confusing cash flow with profit."],
              },
            },
            {
              id: "ecn11-u9-cashflow-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain how a business can be profitable but still run out of cash.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Profit vs cash", statement: "Credit sales create profit before cash arrives." }],
                steps: [
                  { reasoning: "Sales on credit count as revenue/profit immediately but cash arrives later.", marks: 1, markCode: "AO2" },
                  { reasoning: "Costs like wages and rent must be paid now — cash gap opens.", marks: 1, markCode: "AO2" },
                  { reasoning: "If too much cash is tied up in unpaid invoices or stock, bills can't be paid.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Credit sales delay cash while costs are paid immediately.",
                commonErrors: ["Saying profit and cash are the same."],
              },
            },
            {
              id: "ecn11-u9-cashflow-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways a business can improve its cash flow.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Improving cash flow", statement: "Collect faster, pay slower, forecast, control stock." }],
                steps: [
                  { reasoning: "Improve credit control — chase late payments, offer early-payment discounts.", marks: 1, markCode: "AO2" },
                  { reasoning: "Negotiate longer payment terms with suppliers — pay later.", marks: 1, markCode: "AO2" },
                  { reasoning: "Produce cash-flow forecasts to spot gaps early.", marks: 1, markCode: "AO2" },
                  { reasoning: "Reduce stock levels or use an overdraft as a buffer.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Faster collections, later payments, forecasting, stock control, overdraft.",
                commonErrors: ["Only one method."],
              },
            },
            {
              id: "ecn11-u9-cashflow-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A retailer has annual revenue of £120,000 and total costs of £95,000, all sales are for cash except £20,000 sold on credit still unpaid.",
              parts: [
                { label: "a", prompt: "Calculate the firm's profit and cash received from sales.", marks: 3 },
                { label: "b", prompt: "Explain why the cash position matters even though profit is positive.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Profit and cash", statement: "Profit = revenue − cost; credit sales delay cash." }],
                steps: [
                  { reasoning: "(a) Profit = 120,000 − 95,000 = £25,000.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(a) Cash received = 120,000 − 20,000 = £100,000.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) Bills must be paid in cash — £25,000 credit is still owed to the firm.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Profit £25,000; cash £100,000. (b) Costs need cash now; credit is only a promise.",
                commonErrors: ["Confusing profit with cash received."],
              },
            },
            {
              id: "ecn11-u9-cashflow-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A builder wins a £50,000 contract paid in three instalments, but must pay £30,000 in materials upfront.",
              parts: [
                { label: "a", prompt: "Explain the cash-flow problem the builder faces.", marks: 3 },
                { label: "b", prompt: "Suggest two ways the builder could solve it.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cash-flow timing", statement: "Costs paid before income arrives create a gap." }],
                steps: [
                  { reasoning: "(a) £30,000 must be paid now but only part of the £50,000 arrives later.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Without enough cash the builder cannot buy materials or pay wages.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Renegotiate instalments — get an upfront payment; or use an overdraft/loan to bridge the gap.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Costs precede income — cash gap. (b) Advance payment or overdraft.",
                commonErrors: ["Treating contract value as available cash.", "No solution offered."],
              },
            },
            {
              id: "ecn11-u9-cashflow-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A profitable café has revenue of £8,000 a month and costs of £6,500, but £3,000 of sales are unpaid credit.",
              parts: [
                { label: "a", prompt: "Calculate monthly profit and cash received.", marks: 3 },
                { label: "b", prompt: "Explain why cash flow can be a bigger problem than profit for a small business.", marks: 3 },
                { label: "c", prompt: "Suggest two ways the café could improve its cash flow.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cash flow management", statement: "Profit ≠ cash; timing gaps kill businesses." }],
                steps: [
                  { reasoning: "(a) Profit = 8,000 − 6,500 = £1,500.", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(a) Cash received = 8,000 − 3,000 = £5,000 — less than the £6,500 costs.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) Bills are paid in cash — a cash shortfall means failure even if profitable.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Small firms have little reserve — one bad month can be fatal.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Chase credit customers faster; encourage cash/card payments; negotiate supplier terms.", marks: 4, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) profit £1,500; cash £5,000 < costs £6,500. (b) cash gaps are fatal. (c) faster collections, cash incentives, supplier terms.",
                commonErrors: ["Wrong subtraction.", "Treating profit as cash."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u9-finance-notes", title: "Business finance — revision notes",
      summary: "Internal finance = retained profit; external = loans, shares, overdrafts, credit. Match source to need. Cash flow = money in/out — profit can exist without cash (credit sales).",
      sections: [
        { heading: "Sources", body: "Retained profit = free but limited. Loans = repayable. Shares = permanent but dilute control. Overdrafts = short-term." },
        { heading: "Profit vs cash", body: "Credit sales create profit before cash — a profitable firm can still fail on cash flow." },
        { heading: "Managing cash", body: "Forecast, collect faster, negotiate terms, use overdraft buffer." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "ecn11-u9-lesson-9-2", code: "9-2",
      title: "Costs, Revenue and Break-even",
      goal: "I CAN distinguish fixed and variable costs and calculate break-even output.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "Fixed costs", definition: "Costs that do not change with output, e.g. rent, insurance, salaried managers." },
        { term: "Variable costs", definition: "Costs that change directly with output, e.g. raw materials, hourly wages, packaging." },
        { term: "Total cost", definition: "Fixed costs plus variable costs." },
        { term: "Average cost", definition: "Total cost divided by output." },
        { term: "Revenue", definition: "Total money received from sales (price × quantity)." },
        { term: "Contribution", definition: "Revenue per unit minus variable cost per unit — what each unit contributes to fixed costs." },
        { term: "Break-even", definition: "The output level where total revenue equals total cost — no profit or loss." },
      ],
      concepts: [
        {
          id: "ecn11-u9-costs", title: "Costs and Revenue",
          skill: "Distinguish fixed and variable costs and calculate revenue, cost and profit.",
          sections: [
            { heading: "Fixed and variable costs", body: "**Fixed costs (FC)** stay the same whatever the output — rent, insurance, salaried staff. **Variable costs (VC)** change with output — raw materials, hourly wages, packaging. **Total cost (TC) = FC + VC**. **Average cost (AC) = TC ÷ output**. **Total revenue (TR) = price × quantity**. **Profit = TR − TC**. At low output, fixed costs dominate and average cost is high; as output rises, fixed costs spread over more units and average cost falls." },
            { heading: "Contribution", body: "**Contribution per unit = price − variable cost per unit** — the amount each unit sold contributes towards covering fixed costs. Once fixed costs are covered, contribution becomes profit. Contribution is what matters for decisions about whether to keep producing." },
          ],
          keyFormulas: [
            { name: "Total cost", statement: "fixed costs + variable costs" },
            { name: "Average cost", statement: "total cost ÷ output" },
            { name: "Revenue", statement: "price × quantity" },
            { name: "Contribution", statement: "price − variable cost per unit" },
            { name: "Profit", statement: "total revenue − total cost" },
          ],
          workedExample: {
            problem: "A firm sells 500 units at £10 each. Fixed costs £2,000; variable cost £6 per unit. Calculate revenue, total cost, contribution and profit.",
            solution: "Revenue = 500 × 10 = £5,000. VC = 500 × 6 = £3,000; TC = 2,000 + 3,000 = £5,000. Contribution = 10 − 6 = £4 per unit. Profit = 5,000 − 5,000 = £0 — this is break-even.",
          },
          questions: [
            {
              id: "ecn11-u9-costs-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is a fixed cost?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Raw materials" },
                { id: "b", text: "Rent" },
                { id: "c", text: "Packaging" },
                { id: "d", text: "Hourly wages" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Fixed costs", statement: "Costs unchanged by output, e.g. rent." }],
                steps: [{ reasoning: "Rent is paid regardless of output — a fixed cost.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Rent",
                commonErrors: ["Confusing fixed and variable."],
              },
            },
            {
              id: "ecn11-u9-costs-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between fixed costs and variable costs, giving one example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Fixed vs variable costs", statement: "Output-independent vs output-dependent." }],
                steps: [
                  { reasoning: "Fixed costs do not change with output — e.g. rent.", marks: 1, markCode: "AO1" },
                  { reasoning: "Variable costs change directly with output — e.g. raw materials.", marks: 1, markCode: "AO1" },
                  { reasoning: "Second example acceptable for either type.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Fixed = rent/insurance; variable = materials/wages per unit.",
                commonErrors: ["No examples."],
              },
            },
            {
              id: "ecn11-u9-costs-q3", difficulty: "core", totalMarks: 4,
              stem: "A firm sells 200 units at £15 each. Fixed costs are £1,500 and variable cost is £8 per unit. Calculate profit.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Profit", statement: "revenue − total cost; TC = FC + VC." }],
                steps: [
                  { reasoning: "Revenue = 200 × 15 = £3,000.", marks: 1, markCode: "M" },
                  { reasoning: "Variable cost = 200 × 8 = £1,600; total cost = 1,500 + 1,600 = £3,100.", marks: 2, markCode: "M" },
                  { reasoning: "Profit = 3,000 − 3,100 = −£100 (a loss).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Loss of £100",
                commonErrors: ["Forgot to add fixed costs.", "Sign error on profit."],
              },
            },
            {
              id: "ecn11-u9-costs-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A bakery sells loaves at £4 each. Variable cost is £1.80 per loaf and fixed costs are £660 per week.",
              parts: [
                { label: "a", prompt: "Calculate the contribution per loaf.", marks: 2 },
                { label: "b", prompt: "Calculate the profit if the bakery sells 500 loaves in a week.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Contribution and profit", statement: "contribution = price − VC; profit = TR − TC." }],
                steps: [
                  { reasoning: "(a) Contribution = 4.00 − 1.80 = £2.20 per loaf.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) Revenue = 500 × 4 = £2,000.", marks: 1, markCode: "M", part: "b" },
                  { reasoning: "(b) VC = 500 × 1.80 = £900; TC = 660 + 900 = £1,560.", marks: 1, markCode: "M", part: "b" },
                  { reasoning: "(b) Profit = 2,000 − 1,560 = £440.", marks: 1, markCode: "A", part: "b" },
                ],
                finalAnswer: "(a) £2.20. (b) £440 profit.",
                commonErrors: ["Contribution confused with profit.", "Fixed costs omitted."],
              },
            },
            {
              id: "ecn11-u9-costs-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A firm produces 1,000 units at total cost £8,000 and 2,000 units at total cost £13,000. Price is £10 per unit.",
              parts: [
                { label: "a", prompt: "Calculate average cost at each output level.", marks: 2 },
                { label: "b", prompt: "Calculate profit at 2,000 units.", marks: 2 },
                { label: "c", prompt: "Explain why average cost fell as output rose.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Average cost", statement: "TC ÷ output; fixed costs spread over more units." }],
                steps: [
                  { reasoning: "(a) AC at 1,000 = 8,000 ÷ 1,000 = £8; at 2,000 = 13,000 ÷ 2,000 = £6.50.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) Revenue = 2,000 × 10 = £20,000; profit = 20,000 − 13,000 = £7,000.", marks: 2, markCode: "M", part: "b" },
                  { reasoning: "(c) Fixed costs spread over more units — economies of scale.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) £8 and £6.50. (b) £7,000. (c) Fixed costs spread — economies of scale.",
                commonErrors: ["Dividing wrong figures.", "No link to fixed costs."],
              },
            },
            {
              id: "ecn11-u9-costs-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A publisher sells books at £12 each. Fixed costs are £24,000 per year; variable cost is £7 per book.",
              parts: [
                { label: "a", prompt: "Define fixed costs and variable costs.", marks: 4 },
                { label: "b", prompt: "Calculate revenue, total cost and profit if 4,000 books are sold.", marks: 3 },
                { label: "c", prompt: "Calculate the contribution per book.", marks: 1 },
                { label: "d", prompt: "Explain what contribution tells the publisher about each book sold.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Costs and revenue", statement: "TR = P×Q; TC = FC+VC; contribution = P−VC." }],
                steps: [
                  { reasoning: "(a) Fixed = unchanged by output (e.g. rent); variable = changes with output (e.g. paper/printing).", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Revenue = 4,000 × 12 = £48,000; VC = 4,000 × 7 = £28,000; TC = 52,000; profit = 48,000 − 52,000 = −£4,000 loss.", marks: 3, markCode: "M", part: "b" },
                  { reasoning: "(c) Contribution = 12 − 7 = £5 per book.", marks: 1, markCode: "M", part: "c" },
                  { reasoning: "(d) Each book contributes £5 towards fixed costs; above break-even it becomes profit.", marks: 2, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definitions; (b) loss £4,000; (c) £5; (d) contribution covers fixed costs then profit.",
                commonErrors: ["Contribution used as profit.", "Arithmetic slips."],
              },
            },
          ],
        },
        {
          id: "ecn11-u9-breakeven", title: "Break-even Analysis",
          skill: "Calculate break-even output and revenue and interpret the results.",
          sections: [
            { heading: "Break-even", body: "**Break-even** is where total revenue = total cost — no profit or loss. **Break-even output = fixed costs ÷ contribution per unit**. **Break-even revenue = break-even output × price** (or fixed costs ÷ contribution margin %). Below break-even the firm makes a loss; above it makes a profit. The **margin of safety** = actual output − break-even output — the cushion before losses begin." },
            { heading: "Using break-even", body: "Break-even helps firms set prices, plan output and assess risk. If break-even output is very high, the firm needs large sales to survive. Raising price or cutting variable costs increases contribution and lowers break-even; higher fixed costs raise it. Break-even ignores external factors like competition and assumes price and costs stay constant." },
          ],
          keyFormulas: [
            { name: "Break-even output", statement: "fixed costs ÷ contribution per unit" },
            { name: "Break-even revenue", statement: "break-even output × price" },
            { name: "Contribution", statement: "price − variable cost per unit" },
          ],
          workedExample: {
            problem: "Fixed costs £12,000; price £10; variable cost £6 per unit. Find break-even output and revenue.",
            solution: "Contribution = 10 − 6 = £4. BEP output = 12,000 ÷ 4 = 3,000 units. BEP revenue = 3,000 × 10 = £30,000.",
          },
          questions: [
            {
              id: "ecn11-u9-breakeven-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does break-even mean for a business?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Maximum profit is earned" },
                { id: "b", text: "Total revenue equals total cost — no profit or loss" },
                { id: "c", text: "All debts are repaid" },
                { id: "d", text: "The business closes down" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Break-even", statement: "Revenue = cost; zero profit." }],
                steps: [{ reasoning: "At break-even revenue exactly covers all costs.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Revenue = cost",
                commonErrors: ["Confusing with profit."],
              },
            },
            {
              id: "ecn11-u9-breakeven-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain the formula for break-even output in words.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even output", statement: "fixed costs ÷ contribution per unit." }],
                steps: [
                  { reasoning: "Each unit sold contributes (price − variable cost) towards fixed costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Break-even output = how many units are needed to cover all fixed costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Formula: fixed costs ÷ contribution per unit.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Fixed costs ÷ contribution per unit.",
                commonErrors: ["Using price instead of contribution."],
              },
            },
            {
              id: "ecn11-u9-breakeven-q3", difficulty: "core", totalMarks: 4,
              stem: "Fixed costs £9,000; price £15; variable cost £9 per unit. Calculate the break-even output.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even", statement: "FC ÷ (P − VC)." }],
                steps: [
                  { reasoning: "Contribution = 15 − 9 = £6 per unit.", marks: 1, markCode: "M" },
                  { reasoning: "BEP output = 9,000 ÷ 6 = 1,500 units.", marks: 3, markCode: "M" },
                ],
                finalAnswer: "1,500 units",
                commonErrors: ["Dividing by price instead of contribution."],
              },
            },
            {
              id: "ecn11-u9-breakeven-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A stall has fixed costs of £200 per week. It sells cakes at £5 each with variable cost £2 per cake.",
              parts: [
                { label: "a", prompt: "Calculate the break-even output and break-even revenue per week.", marks: 3 },
                { label: "b", prompt: "Explain what happens to profit if the stall sells 100 cakes.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even", statement: "FC ÷ contribution; BEP revenue = BEP × price." }],
                steps: [
                  { reasoning: "(a) Contribution = 5 − 2 = £3; BEP = 200 ÷ 3 = 66.7 → 67 cakes.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(a) BEP revenue = 67 × 5 ≈ £335 (or 66.7 × 5 = £333.33).", marks: 1, markCode: "M", part: "a" },
                  { reasoning: "(b) Above break-even — profit = (100 − 66.7) × 3 ≈ £100 profit.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) ~67 cakes / ~£335. (b) Profit ~£100.",
                commonErrors: ["Forgetting revenue step.", "Wrong direction on profit."],
              },
            },
            {
              id: "ecn11-u9-breakeven-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A gym has fixed costs of £12,000 per month. Membership costs £30 per month and variable cost is £10 per member.",
              parts: [
                { label: "a", prompt: "Calculate the break-even number of members.", marks: 2 },
                { label: "b", prompt: "If the gym has 700 members, calculate the monthly profit.", marks: 2 },
                { label: "c", prompt: "Explain one way the gym could lower its break-even point.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even", statement: "FC ÷ contribution per unit." }],
                steps: [
                  { reasoning: "(a) Contribution = 30 − 10 = £20; BEP = 12,000 ÷ 20 = 600 members.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) Profit = (700 − 600) × 20 = £2,000 (or TR 21,000 − TC 19,000).", marks: 2, markCode: "M", part: "b" },
                  { reasoning: "(c) Cut fixed costs, raise price, or reduce variable cost — all raise contribution or lower FC.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) 600 members. (b) £2,000 profit. (c) cut FC / raise price / cut VC.",
                commonErrors: ["Contribution miscalculated.", "Profit formula wrong."],
              },
            },
            {
              id: "ecn11-u9-breakeven-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A publisher considers printing a book. Fixed costs £10,000; variable cost £4 per book; planned price £9.",
              parts: [
                { label: "a", prompt: "Calculate contribution per book.", marks: 2 },
                { label: "b", prompt: "Calculate break-even output and break-even revenue.", marks: 3 },
                { label: "c", prompt: "Calculate profit if 3,000 books are sold.", marks: 2 },
                { label: "d", prompt: "Evaluate two assumptions break-even analysis makes that may not hold in reality.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even analysis", statement: "BEP = FC ÷ contribution; assumes constant price and costs." }],
                steps: [
                  { reasoning: "(a) Contribution = 9 − 4 = £5.", marks: 2, markCode: "M", part: "a" },
                  { reasoning: "(b) BEP output = 10,000 ÷ 5 = 2,000 books.", marks: 2, markCode: "M", part: "b" },
                  { reasoning: "(b) BEP revenue = 2,000 × 9 = £18,000.", marks: 1, markCode: "M", part: "b" },
                  { reasoning: "(c) Profit = 3,000 × 5 − 10,000 = £5,000.", marks: 2, markCode: "M", part: "c" },
                  { reasoning: "(d) Assumes price and costs stay constant — demand may fall, prices may need discounting.", marks: 2, markCode: "AO3", part: "d" },
                  { reasoning: "(d) Ignores competition and non-financial factors like reputation.", marks: 1, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) £5. (b) 2,000 books / £18,000. (c) £5,000. (d) constant price/costs, ignores competition.",
                commonErrors: ["Using price not contribution.", "No evaluation of assumptions."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u9-breakeven-notes", title: "Costs, revenue and break-even — revision notes",
      summary: "Fixed costs unchanged by output; variable costs change with it. Contribution = price − VC. Break-even output = FC ÷ contribution; BEP revenue = BEP × price.",
      sections: [
        { heading: "Costs", body: "TC = FC + VC; AC = TC ÷ output; TR = price × quantity; profit = TR − TC." },
        { heading: "Break-even", body: "BEP output = FC ÷ contribution per unit; BEP revenue = BEP × price." },
        { heading: "Limitations", body: "Assumes constant price/costs; ignores demand shifts and competition." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "ecn11-u9-lesson-9-3", code: "9-3",
      title: "External Influences on Business",
      goal: "I CAN explain economic, social, technological, environmental, political and legal influences on business.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
      vocabulary: [
        { term: "External influences", definition: "Factors outside a business that affect it: economic, social, technological, environmental, political, legal." },
        { term: "Economic influences", definition: "Business cycle, inflation, interest rates and exchange rates affecting demand and costs." },
        { term: "Social influences", definition: "Demographics, lifestyle trends and consumer attitudes affecting demand." },
        { term: "Technological influences", definition: "New technologies changing production, products and competition." },
        { term: "Environmental influences", definition: "Pressure to reduce pollution and use resources sustainably." },
        { term: "Government support", definition: "Grants, subsidies, training schemes and advice provided to businesses." },
        { term: "Legal controls", definition: "Laws businesses must obey, e.g. employment law, health and safety, consumer protection." },
      ],
      concepts: [
        {
          id: "ecn11-u9-influences", title: "Economic, Social and Technological Influences",
          skill: "Explain how economic, social and technological changes affect businesses.",
          sections: [
            { heading: "Economic influences", body: "The **business cycle** affects demand — recessions cut sales of luxuries; booms raise them. **Inflation** raises costs. **Interest rates** affect borrowing costs and consumer spending. **Exchange rates** affect import costs and export competitiveness. Firms must monitor the economy and adapt — e.g. cut costs in a recession, expand in a boom." },
            { heading: "Social and technological influences", body: "**Social influences**: ageing populations, health trends, ethical consumerism — e.g. demand for vegan products or older-friendly services. **Technological influences**: the internet, automation, new materials — technology can cut costs and open markets but also create competition (e.g. e-commerce threatening shops) and require new skills. Businesses that adapt technology gain advantage; those that ignore it decline." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A high-street shoe shop faces rising online competition. Identify two external influences and suggest responses.",
            solution: "Technological: e-commerce — respond by selling online too. Social: demand for convenience — offer click-and-collect and home delivery.",
          },
          questions: [
            {
              id: "ecn11-u9-influences-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which of the following is an economic influence on business?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A new invention" },
                { id: "b", text: "Rising interest rates" },
                { id: "c", text: "A change in fashion" },
                { id: "d", text: "A new environmental law" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Economic influences", statement: "Business cycle, inflation, interest rates, exchange rates." }],
                steps: [{ reasoning: "Interest rates are an economic factor affecting borrowing and spending.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Rising interest rates",
                commonErrors: ["Confusing economic with technological."],
              },
            },
            {
              id: "ecn11-u9-influences-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three examples of external influences on a business.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "External influences", statement: "Economic, social, technological, environmental, political, legal." }],
                steps: [
                  { reasoning: "Economic — e.g. interest rates or recession.", marks: 1, markCode: "AO1" },
                  { reasoning: "Social — e.g. health trends or demographics.", marks: 1, markCode: "AO1" },
                  { reasoning: "Technological/environmental/political/legal — e.g. new technology, pollution rules, government policy.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three across the categories.",
                commonErrors: ["Only internal factors listed."],
              },
            },
            {
              id: "ecn11-u9-influences-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a recession could affect a business that sells luxury holidays.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Business cycle", statement: "Recessions cut demand for discretionary/luxury goods." }],
                steps: [
                  { reasoning: "In a recession incomes fall and confidence drops.", marks: 1, markCode: "AO2" },
                  { reasoning: "Consumers cut discretionary spending — holidays are postponed.", marks: 1, markCode: "AO2" },
                  { reasoning: "Demand for luxury holidays falls sharply — revenue drops.", marks: 1, markCode: "AO2" },
                  { reasoning: "The firm may cut prices, reduce costs or target budget travellers.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Falling incomes → lower demand for luxury holidays → adapt prices/costs.",
                commonErrors: ["No link to demand."],
              },
            },
            {
              id: "ecn11-u9-influences-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A local bookstore faces competition from online retailers.",
              parts: [
                { label: "a", prompt: "Identify two external influences causing this competition.", marks: 2 },
                { label: "b", prompt: "Suggest two ways the bookstore could respond.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "External influences", statement: "Technology and consumer habits change markets." }],
                steps: [
                  { reasoning: "(a) Technological — internet/e-commerce; social — preference for convenience/price comparison.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Sell online itself; or differentiate — events, personalised service, local community focus.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Technology + consumer habits. (b) Go online or differentiate via service/community.",
                commonErrors: ["Only one influence.", "Response unrelated to causes."],
              },
            },
            {
              id: "ecn11-u9-influences-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Demand for electric vehicles is rising rapidly.",
              parts: [
                { label: "a", prompt: "Explain two external influences driving this rise in demand.", marks: 3 },
                { label: "b", prompt: "Suggest two ways a car manufacturer could respond to this trend.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Responding to trends", statement: "Firms adapt products and strategy to external changes." }],
                steps: [
                  { reasoning: "(a) Environmental — concern about emissions/climate; political/legal — subsidies and bans on petrol cars.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Technological — improving battery range and charging.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Invest in EV production/research; or partner with charging networks.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) environmental + policy + technology. (b) EV investment, charging partnerships.",
                commonErrors: ["Influences not explained.", "Vague response."],
              },
            },
            {
              id: "ecn11-u9-influences-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A high-street retailer is reviewing the external environment in which it operates.",
              parts: [
                { label: "a", prompt: "Define the term external influences.", marks: 2 },
                { label: "b", prompt: "Name three types of external influence and give an example of each.", marks: 3 },
                { label: "c", prompt: "Explain how a rise in interest rates could affect the retailer.", marks: 2 },
                { label: "d", prompt: "Evaluate whether the retailer can control these external influences.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "External environment", statement: "Outside factors businesses must adapt to but cannot fully control." }],
                steps: [
                  { reasoning: "(a) Factors outside the business affecting its operation — economic, social, technological, environmental, political, legal.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) e.g. economic (inflation), social (health trends), technological (e-commerce) — with examples.", marks: 3, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Higher rates → costlier borrowing, less consumer spending → lower sales.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Businesses cannot control them but can adapt — monitor, diversify, innovate; some influence via lobbying.", marks: 3, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) three types + examples; (c) rates → costs/spending; (d) can't control but can adapt.",
                commonErrors: ["Types without examples.", "Claiming full control."],
              },
            },
          ],
        },
        {
          id: "ecn11-u9-government", title: "Environmental, Political and Legal Influences and Government Support",
          skill: "Explain environmental, political and legal influences and government support for business.",
          sections: [
            { heading: "Environmental, political and legal influences", body: "**Environmental**: pressure to reduce pollution, waste and carbon — firms may need eco-friendly processes or face boycotts. **Political**: government policy — tax rates, subsidies, trade deals — shapes the business environment. **Legal**: laws businesses must obey — employment law (minimum wage, discrimination), health and safety, consumer protection, planning permission. Breaking laws brings fines or closure." },
            { heading: "Government support", body: "Governments support business through **grants** (money not repaid), **subsidies** (payments to reduce costs), **training schemes**, **advice services** and **tax breaks**. Support aims to create jobs, growth and regional balance — but costs taxpayers money and can prop up inefficient firms. Businesses must weigh support against the taxes that fund it." },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A factory is told it must fit pollution filters costing £50,000 to meet new emissions law. Identify the influence and a response.",
            solution: "Legal/environmental influence — the firm must comply or face fines/closure. Response: install filters, apply for a government grant, or raise prices to cover the cost.",
          },
          questions: [
            {
              id: "ecn11-u9-government-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a subsidy?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A tax on business profits" },
                { id: "b", text: "A payment by government to reduce a firm's costs" },
                { id: "c", text: "A fine for breaking the law" },
                { id: "d", text: "A loan that must be repaid with interest" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Subsidy", statement: "Government payment reducing business costs." }],
                steps: [{ reasoning: "Subsidies are payments to support businesses and lower their costs.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Government payment to cut costs",
                commonErrors: ["Confusing subsidy with tax or loan."],
              },
            },
            {
              id: "ecn11-u9-government-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three ways a government can support businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Government support", statement: "Grants, subsidies, training, advice, tax breaks." }],
                steps: [
                  { reasoning: "Grants — money given that need not be repaid.", marks: 1, markCode: "AO1" },
                  { reasoning: "Subsidies — payments that reduce costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Training schemes, advice services or tax breaks.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Grants, subsidies, training/advice, tax breaks.",
                commonErrors: ["Listing legal controls instead."],
              },
            },
            {
              id: "ecn11-u9-government-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a business might have to change its practices because of a new environmental law.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Environmental/legal influence", statement: "Laws force changes to reduce environmental harm." }],
                steps: [
                  { reasoning: "The law sets limits — e.g. emissions, waste disposal.", marks: 1, markCode: "AO1" },
                  { reasoning: "The firm must invest in cleaner technology or processes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Non-compliance brings fines or closure.", marks: 1, markCode: "AO2" },
                  { reasoning: "There may be costs — but also reputation benefits and possible grants.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Legal limits force cleaner practices; costs vs fines/reputation trade-off.",
                commonErrors: ["No consequence mentioned."],
              },
            },
            {
              id: "ecn11-u9-government-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A small bakery is offered a government grant to buy energy-efficient ovens.",
              parts: [
                { label: "a", prompt: "Explain two benefits the bakery gains from the grant.", marks: 3 },
                { label: "b", prompt: "Explain one reason why taxpayers might question this grant.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Government support", statement: "Grants cut costs; funded by taxpayers." }],
                steps: [
                  { reasoning: "(a) Lower upfront cost of efficient ovens; reduced energy bills long-term.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Environmental benefit — less carbon — plus possible reputation gain.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Grants cost taxpayers money — some argue it should fund schools/health instead.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) cheaper investment, lower bills, greener. (b) opportunity cost of public money.",
                commonErrors: ["Only business view in (b)."],
              },
            },
            {
              id: "ecn11-u9-government-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A clothing factory is accused of polluting a local river and faces a new emissions law.",
              parts: [
                { label: "a", prompt: "Identify the type of external influence the law represents and explain it.", marks: 3 },
                { label: "b", prompt: "Suggest two ways the factory could respond to reduce pollution.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Legal/environmental pressure", statement: "Laws and public pressure force cleaner operations." }],
                steps: [
                  { reasoning: "(a) Legal and environmental influence — government rule plus public concern.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Breaking it risks fines, prosecution and reputational damage.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Install treatment filters; switch to cleaner production methods or renewable energy.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) legal/environmental — fines and reputation at stake. (b) filters, cleaner methods.",
                commonErrors: ["Only one influence type.", "Response unrelated to pollution."],
              },
            },
            {
              id: "ecn11-u9-government-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A government wants to support small businesses while also protecting the environment.",
              parts: [
                { label: "a", prompt: "Name three forms of government support for business.", marks: 3 },
                { label: "b", prompt: "Explain one advantage and one disadvantage of government grants for businesses.", marks: 4 },
                { label: "c", prompt: "Explain why environmental laws can benefit businesses in the long run.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Government and business", statement: "Support helps firms; laws shape behaviour for long-term benefit." }],
                steps: [
                  { reasoning: "(a) Grants, subsidies, training schemes, advice, tax breaks — any three.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Advantage: reduces costs/investment burden, encourages growth.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Disadvantage: funded by taxpayers; may support inefficient firms or distort markets.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Cleaner production cuts waste and future costs; reputation improves; avoids stricter future rules.", marks: 3, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) three supports; (b) advantage + disadvantage; (c) long-run cost/reputation benefits.",
                commonErrors: ["Only one side of grants.", "No long-run link for (c)."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn11-u9-external-notes", title: "External influences — revision notes",
      summary: "Economic (cycle, rates), social (trends), technological (innovation), environmental (pollution), political (policy) and legal (laws) influences shape business. Government supports via grants/subsidies; laws force cleaner, safer practice.",
      sections: [
        { heading: "Influences", body: "Economic, social, technological, environmental, political, legal — businesses must monitor and adapt." },
        { heading: "Government support", body: "Grants, subsidies, training, advice, tax breaks — help growth but cost taxpayers." },
        { heading: "Laws", body: "Employment, health and safety, consumer protection, environmental limits — breaking them brings fines." },
      ],
    },
  },
];

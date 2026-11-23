module.exports = [
  {
    file: "lesson-10-1.ts",
    exportName: "lesson161",
    lesson: {
      id: "ecn10-u10-lesson-10-1",
      code: "10-1",
      title: "Sources of Finance",
      goal: "I CAN explain internal and external sources of finance and evaluate their costs and risks.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Business finance"],
      vocabulary: [
        { term: "Retained profit", definition: "Profit kept back by the firm instead of paid out as dividends." },
        { term: "Overdraft", definition: "Short-term borrowing up to an agreed limit on a current account." },
        { term: "Shares", definition: "Units of ownership in a company sold to raise capital." },
        { term: "Loan", definition: "Borrowed money repaid with interest over an agreed period." },
        { term: "Leasing", definition: "Renting equipment or premises from a finance company instead of buying." },
        { term: "Grant", definition: "Money given by government or an agency, usually not repayable." },
      ],
      concepts: [
        {
          id: "ecn10-u10-fin-sources",
          title: "Internal and External Sources of Finance",
          skill: "Identify and describe internal and external sources of finance for a business.",
          sections: [
            {
              heading: "Internal sources",
              body: "**Internal sources** come from inside the business: **retained profit** (profit reinvested rather than paid as dividends), **depreciation funds**, **selling assets** and, for sole traders, **owner's capital**. Advantages: no interest or dividends to outsiders, no loss of control. Disadvantages: limited in amount and may slow growth if profit is small.",
            },
            {
              heading: "External sources",
              body: "**External sources** come from outside: **bank loans and overdrafts**, **share issues** (selling ownership), **leasing**, **trade credit** (paying suppliers later), **factoring** and **government grants**. Each has a cost: interest, dividends, hire charges or lost control. Grants are rare but cost nothing to repay; share issues raise large sums but dilute ownership.",
            },
          ],
          keyFormulas: [
            { name: "Internal vs external", statement: "Internal = own funds (retained profit, asset sales); external = other people's money (loans, shares, grants)" },
          ],
          workedExample: {
            problem: "A profitable café wants £15,000 for a second branch. It has £9,000 of retained profit. Name one internal and two external sources it could combine.",
            solution: "Internal: retained profit (£9,000). External: a bank loan or overdraft for the £6,000 gap, or a small share issue if it is a limited company.",
          },
          questions: [
            {
              id: "ecn10-u10-src-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which of the following is an internal source of finance?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Retained profit" },
                  { id: "b", text: "A bank loan" },
                  { id: "c", text: "Issuing shares" },
                  { id: "d", text: "A government grant" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Internal source", statement: "Finance raised from within the business — e.g., retained profit." },
                ],
                steps: [
                  { reasoning: "Retained profit is the firm's own money; loans, shares and grants all come from outside.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(a)** Retained profit",
                commonErrors: ["Confusing sources of finance with revenue."],
              },
            },
            {
              id: "ecn10-u10-src-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "State three external sources of finance available to a business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "External source", statement: "Finance from outside the business — loans, shares, grants." },
                ],
                steps: [
                  { reasoning: "Bank loan or overdraft — borrowed money repaid with interest.", marks: 1, markCode: "AO1" },
                  { reasoning: "Share issue — selling ownership to raise capital.", marks: 1, markCode: "AO1" },
                  { reasoning: "Government grant, leasing or trade credit — other external options.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: bank loan, overdraft, share issue, leasing, trade credit, grant.",
                commonErrors: ["Listing internal sources such as retained profit."],
              },
            },
            {
              id: "ecn10-u10-src-q3",
              difficulty: "foundation",
              totalMarks: 4,
              stem: "A firm needs £90,000 for new equipment. It has £10,000 of retained profit and issues 400,000 shares at 20p each.",
              parts: [
                { label: "a", prompt: "Calculate the capital raised by the share issue.", marks: 2 },
                { label: "b", prompt: "Calculate the total finance the firm now has available.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Share capital raised", statement: "Number of shares × price per share" },
                ],
                steps: [
                  { reasoning: "(a) Share capital = 400,000 × £0.20.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Share capital = £80,000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Total finance = £80,000 + £10,000 retained profit.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Total = £90,000 — exactly meets the need.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) £80,000 (b) £90,000",
                commonErrors: ["Using £20 per share instead of 20p."],
              },
            },
            {
              id: "ecn10-u10-src-q4",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two advantages and two disadvantages of using retained profit as a source of finance.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Retained profit", statement: "Own funds — no interest, but limited and reduces dividends." },
                ],
                steps: [
                  { reasoning: "Advantage 1: no interest payments or dividends owed to outsiders.", marks: 1, markCode: "AO2" },
                  { reasoning: "Advantage 2: no loss of ownership or control; simple to arrange.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage 1: limited by how much profit the firm makes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage 2: shareholders may be unhappy if dividends are cut to fund investment.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Cheap and control-preserving but limited and may disappoint shareholders.",
                commonErrors: ["Only advantages or only disadvantages given."],
              },
            },
            {
              id: "ecn10-u10-src-q5",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why a growing firm might prefer a bank loan to issuing shares.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Loan vs shares", statement: "Debt keeps control but requires repayment; equity dilutes ownership." },
                ],
                steps: [
                  { reasoning: "A loan must be repaid with interest but does not dilute the owners' share of the business.", marks: 2, markCode: "AO2" },
                  { reasoning: "Issuing shares gives away part-ownership — new shareholders gain voting rights and a claim on dividends.", marks: 2, markCode: "AO2" },
                  { reasoning: "Control is valuable to founders/managers, so avoiding dilution can be decisive for a growing firm.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Loans preserve control and ownership at the cost of interest; shares dilute control.",
                commonErrors: ["Ignoring the control/dilution issue."],
              },
            },
            {
              id: "ecn10-u10-src-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess whether a business should rely mainly on internal sources of finance.",
              parts: [
                { label: "a", prompt: "Explain two advantages of internal finance.", marks: 4 },
                { label: "b", prompt: "Explain two limitations of internal finance.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Internal finance", statement: "Own funds avoid outside costs but are limited by profitability." },
                ],
                steps: [
                  { reasoning: "(a) Advantage 1: no interest or dividend payments to outsiders — lower cost of capital.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Advantage 2: no loss of control or ownership; decisions stay with existing owners.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Limitation 1: amount is capped by retained profit — cannot fund rapid or large expansion.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Limitation 2: opportunity cost — profit reinvested is not paid out as dividends to shareholders.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: internal finance is cheap and safe but too limited for growth; a mix matched to needs is best.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Internal finance is low-cost but limited — best as part of a mixed funding strategy.",
                commonErrors: ["One-sided argument without a conclusion."],
              },
            },
          ],
        },
        {
          id: "ecn10-u10-fin-choice",
          title: "Costs and Risks of Different Finance",
          skill: "Evaluate the cost, repayment terms and risk of different sources of finance.",
          sections: [
            {
              heading: "Short-term vs long-term finance",
              body: "**Short-term finance** (overdrafts, trade credit, short loans) is quick but must be repaid soon and interest rates can rise. **Long-term finance** (mortgages, long loans, shares, retained profit) costs less per year but ties up assets or ownership for years. Match the source to the asset's life — do not fund a long-term machine with a 90-day overdraft.",
            },
            {
              heading: "Costs and risk",
              body: "Every source has a **cost of finance**: interest on loans and overdrafts, dividends on shares, hire charges on leasing. **Risk** also differs — loans create fixed repayments that can threaten survival in a bad year; shares have no fixed repayment but dilute control; overdrafts can be withdrawn. A firm with volatile cash flow should prefer flexible finance.",
            },
          ],
          keyFormulas: [
            { name: "Interest cost", statement: "Interest = principal borrowed × annual interest rate" },
            { name: "Total repayment", statement: "Total repaid = principal + interest" },
          ],
          workedExample: {
            problem: "A firm borrows £50,000 at 8% interest for one year. Calculate the interest and total repayment.",
            solution: "Interest = 50,000 × 0.08 = £4,000. Total repayment = 50,000 + 4,000 = £54,000.",
          },
          questions: [
            {
              id: "ecn10-u10-fin-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "An overdraft is best described as:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A long-term mortgage on the business premises" },
                  { id: "b", text: "Short-term borrowing up to an agreed limit" },
                  { id: "c", text: "Selling shares to raise capital" },
                  { id: "d", text: "Money given by the government" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Overdraft", statement: "Short-term credit on a current account up to an agreed limit." },
                ],
                steps: [
                  { reasoning: "An overdraft lets the firm spend more than its balance, up to a limit, usually for the short term.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Short-term borrowing up to an agreed limit",
                commonErrors: ["Confusing an overdraft with a term loan."],
              },
            },
            {
              id: "ecn10-u10-fin-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "State three factors a business should consider when choosing a source of finance.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Choosing finance", statement: "Match cost, terms and risk to the purpose of the funds." },
                ],
                steps: [
                  { reasoning: "Cost of finance — interest, dividends or hire charges.", marks: 1, markCode: "AO1" },
                  { reasoning: "Repayment terms — how soon and how flexibly the money must be repaid.", marks: 1, markCode: "AO1" },
                  { reasoning: "Amount needed, timescale and effect on control/ownership.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: cost, repayment terms, amount/timescale, risk, control.",
                commonErrors: ["Listing sources instead of decision factors."],
              },
            },
            {
              id: "ecn10-u10-fin-q3",
              difficulty: "foundation",
              totalMarks: 4,
              stem: "A business borrows £50,000 at 8% annual interest for one year.",
              response: { type: "numeric", parts: [
                { label: "Interest paid", answer: 4000, unit: "£" },
                { label: "Total repayment", answer: 54000, unit: "£" },
              ] },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Interest", statement: "Interest = principal × rate = 50,000 × 0.08" },
                ],
                steps: [
                  { reasoning: "Interest = 50,000 × 0.08 = £4,000.", marks: 2, markCode: "AO2" },
                  { reasoning: "Total repayment = 50,000 + 4,000 = £54,000.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Interest £4,000; total repayment £54,000",
                commonErrors: ["Forgetting to add the principal back for total repayment."],
              },
            },
            {
              id: "ecn10-u10-fin-q4",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two advantages and two disadvantages of leasing equipment instead of buying it.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Leasing", statement: "Renting assets — preserves cash but costs more long-run." },
                ],
                steps: [
                  { reasoning: "Advantage 1: preserves cash flow — no large upfront payment.", marks: 1, markCode: "AO2" },
                  { reasoning: "Advantage 2: payments spread over time; often includes maintenance; easy to upgrade.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage 1: higher total cost than buying outright over the asset's life.", marks: 1, markCode: "AO2" },
                  { reasoning: "Disadvantage 2: the firm never owns the asset and may face penalties for early return.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Leasing saves cash and spreads cost but is dearer and gives no ownership.",
                commonErrors: ["Only one side evaluated."],
              },
            },
            {
              id: "ecn10-u10-fin-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A small retailer needs £20,000 to renovate its shop and expects strong sales next year.",
              parts: [
                { label: "a", prompt: "Recommend a suitable source of finance and justify your choice.", marks: 3 },
                { label: "b", prompt: "Explain one risk of your chosen source.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Matching finance", statement: "Small, short-term need with predictable sales suits flexible debt." },
                ],
                steps: [
                  { reasoning: "(a) A bank loan or overdraft — moderate amount, short/medium term, firm is trading so banks will lend.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Strong expected sales make repayment feasible — debt is affordable.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Risk: fixed repayments — if sales disappoint, the firm may struggle to meet interest and repayments.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Overdrafts specifically can be withdrawn or their limit cut if the bank loses confidence.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) bank loan/overdraft — affordable given expected sales (b) fixed repayments risk if sales fall",
                commonErrors: ["Recommending shares for a small private retailer without justification."],
              },
            },
            {
              id: "ecn10-u10-fin-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess the view that a business should always use internal finance before seeking external finance.",
              parts: [
                { label: "a", prompt: "Explain two advantages of prioritising internal finance.", marks: 4 },
                { label: "b", prompt: "Explain two situations where external finance may be necessary or better.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Internal first?", statement: "Cheap and safe but limited — external finance unlocks growth." },
                ],
                steps: [
                  { reasoning: "(a) Advantage 1: no interest or dividends owed — cheaper source of funds.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Advantage 2: no dilution of ownership or control; no lender pressure.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Situation 1: large expansion needs more than retained profit can supply — internal funds are capped.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Situation 2: start-ups with no profit history must use external finance; timing matters — waiting for profit may miss opportunities.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: internal finance should be used where sufficient, but 'always first' is wrong — match the source to the need and timing.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Internal finance is preferred when adequate, but growth often requires external sources.",
                commonErrors: ["One-sided answer without evaluation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u10-lesson-10-1-notes",
      title: "Sources of Finance — notes",
      summary: "Internal sources (retained profit) vs external sources (loans, overdrafts, shares, leasing, grants) and how to weigh cost, terms and risk.",
      sections: [
        { heading: "Key idea", body: "Businesses raise finance internally (own funds) or externally (other people's money) — each with different costs and risks." },
        { heading: "Internal", body: "Retained profit and asset sales: cheap, no loss of control, but limited by profitability." },
        { heading: "External", body: "Loans and overdrafts must be repaid with interest; shares dilute ownership but have no fixed repayment; leasing spreads asset cost." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts",
    exportName: "lesson162",
    lesson: {
      id: "ecn10-u10-lesson-10-2",
      code: "10-2",
      title: "Business Accounts and Cash Flow",
      goal: "I CAN read an income statement, explain profit versus cash flow and use cash-flow forecasts.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Business finance"],
      vocabulary: [
        { term: "Revenue", definition: "Total income from sales before costs." },
        { term: "Cost of sales", definition: "Direct costs of producing goods sold — materials and labour." },
        { term: "Gross profit", definition: "Revenue minus cost of sales." },
        { term: "Net profit", definition: "Profit remaining after all costs, interest and tax." },
        { term: "Cash flow", definition: "Movement of money into and out of the business." },
        { term: "Cash-flow forecast", definition: "Prediction of expected receipts and payments over time." },
      ],
      concepts: [
        {
          id: "ecn10-u10-acc",
          title: "Income Statements and Profit",
          skill: "Calculate and interpret gross profit, operating profit and net profit.",
          sections: [
            {
              heading: "The income statement",
              body: "An **income statement** shows performance over a period. **Revenue** (sales) minus **cost of sales** gives **gross profit**. Subtract other expenses — wages, rent, marketing — to get **operating profit**. Deduct **interest** to get **profit before tax**; deduct **tax** to get **net profit** (profit after tax).",
            },
            {
              heading: "Profit is not cash",
              body: "**Accrual accounting** records sales when made, not when paid — so revenue can include unpaid credit sales. Costs like **depreciation** are non-cash charges spread over an asset's life. A firm can be profitable yet short of cash because money is tied up in stock, owed by debtors, or spent on equipment.",
            },
          ],
          keyFormulas: [
            { name: "Gross profit", statement: "Gross profit = revenue − cost of sales" },
            { name: "Net profit", statement: "Net profit = revenue − all costs including interest and tax" },
          ],
          workedExample: {
            problem: "Revenue £50,000, cost of sales £30,000, other expenses £8,000, tax £2,000. Calculate gross, operating and net profit.",
            solution: "Gross profit = 50,000 − 30,000 = £20,000. Operating profit = 20,000 − 8,000 = £12,000. Net profit = 12,000 − 2,000 = £10,000.",
          },
          questions: [
            {
              id: "ecn10-u10-acc-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Gross profit is calculated as:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Revenue minus all costs including tax" },
                  { id: "b", text: "Revenue minus cost of sales" },
                  { id: "c", text: "Cost of sales minus revenue" },
                  { id: "d", text: "Revenue minus interest only" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Gross profit", statement: "Revenue − cost of sales." },
                ],
                steps: [
                  { reasoning: "Gross profit strips out only the direct costs of producing what was sold; other expenses come later.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Revenue minus cost of sales",
                commonErrors: ["Confusing gross profit with net profit."],
              },
            },
            {
              id: "ecn10-u10-acc-q2",
              difficulty: "foundation",
              totalMarks: 4,
              stem: "A business records revenue of £50,000, cost of sales of £30,000, other expenses of £8,000 and tax of £2,000.",
              response: { type: "numeric", parts: [
                { label: "Gross profit", answer: 20000, unit: "£" },
                { label: "Profit before tax", answer: 12000, unit: "£" },
                { label: "Net profit", answer: 10000, unit: "£" },
              ] },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Profit steps", statement: "GP = revenue − cost of sales; PBT = GP − other expenses; NP = PBT − tax" },
                ],
                steps: [
                  { reasoning: "Gross profit = 50,000 − 30,000 = £20,000.", marks: 2, markCode: "AO2" },
                  { reasoning: "Profit before tax = 20,000 − 8,000 = £12,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Net profit = 12,000 − 2,000 = £10,000.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "GP £20,000; PBT £12,000; NP £10,000",
                commonErrors: ["Deducting tax before expenses or skipping a step."],
              },
            },
            {
              id: "ecn10-u10-acc-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the difference between profit and cash flow.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Profit vs cash flow", statement: "Profit measures performance; cash flow measures money in and out." },
                ],
                steps: [
                  { reasoning: "Profit is revenue minus costs over a period, including non-cash items like depreciation.", marks: 2, markCode: "AO1" },
                  { reasoning: "Cash flow tracks actual money received and paid — credit sales count as revenue but not yet as cash.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Profit = earned minus spent on paper; cash flow = money actually moving in and out.",
                commonErrors: ["Treating them as identical concepts."],
              },
            },
            {
              id: "ecn10-u10-acc-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A firm's net profit rose by £15,000 this year, yet its bank balance fell by £9,000. Explain two reasons why this can happen.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Profit vs cash", statement: "Timing differences between earning profit and receiving/spending cash." },
                ],
                steps: [
                  { reasoning: "Credit sales: revenue counted in profit may not have been collected in cash yet — debtors owe money.", marks: 2, markCode: "AO2" },
                  { reasoning: "Cash spent on long-term assets or stock build-up reduces the bank balance without appearing as an expense in the same period.", marks: 2, markCode: "AO2" },
                  { reasoning: "Non-cash items such as depreciation reduce profit but never touched the bank account.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Profit is earned on credit and accruals; the bank balance reflects actual cash timing.",
                commonErrors: ["Saying the accounts must be wrong without timing explanation."],
              },
            },
            {
              id: "ecn10-u10-acc-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A business records: sales revenue £120,000; cost of sales £78,000; wages £20,000; rent £8,000; interest £4,000; tax £3,000.",
              parts: [
                { label: "a", prompt: "Calculate the gross profit and the operating profit.", marks: 3 },
                { label: "b", prompt: "Calculate the profit before tax and the net profit.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Income statement", statement: "GP = revenue − cost of sales; NP = GP − expenses − interest − tax" },
                ],
                steps: [
                  { reasoning: "(a) Gross profit = 120,000 − 78,000 = £42,000.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Operating profit = 42,000 − 20,000 − 8,000 = £14,000.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Profit before tax = 14,000 − 4,000 = £10,000.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Net profit = 10,000 − 3,000 = £7,000.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) GP £42,000; operating profit £14,000 (b) PBT £10,000; NP £7,000",
                commonErrors: ["Deducting interest from gross profit or forgetting tax."],
              },
            },
            {
              id: "ecn10-u10-acc-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A company's income statement shows a healthy profit. Assess whether this proves the business is financially healthy.",
              parts: [
                { label: "a", prompt: "Explain what an income statement does show about a business.", marks: 4 },
                { label: "b", prompt: "Explain two things an income statement does not reveal about financial health.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Limits of accounts", statement: "Income statements show performance, not liquidity or solvency." },
                ],
                steps: [
                  { reasoning: "(a) It shows whether revenue exceeds costs — profitability over the period.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(a) It allows comparison of gross, operating and net margins — efficiency and cost control.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) It ignores cash timing — a profitable firm can still face cash shortages from credit sales or asset purchases.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) It says nothing about liquidity, debt levels or whether the firm can pay its bills — that needs the balance sheet and cash-flow forecast.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: profit is necessary but not sufficient — health also requires cash, liquidity and sustainable debt.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Profit alone does not prove financial health — cash flow, liquidity and debt matter too.",
                commonErrors: ["One-sided answer without mentioning cash or balance sheet."],
              },
            },
          ],
        },
        {
          id: "ecn10-u10-cash",
          title: "Cash-Flow Forecasts and Survival",
          skill: "Use a cash-flow forecast and explain why profitable firms can fail.",
          sections: [
            {
              heading: "Building a cash-flow forecast",
              body: "A **cash-flow forecast** lists expected **cash receipts** (sales paid in cash, debtors paying) and **cash payments** (suppliers, wages, rent, loan repayments, tax) month by month. **Net cash flow = receipts − payments**; the **closing balance = opening balance + net cash flow**. Negative balances signal when the firm may need an overdraft.",
            },
            {
              heading: "Why profitable firms fail",
              body: "Profits can rise while cash runs out: credit sales delay receipts; buying stock or equipment drains cash; loan and dividend payments are fixed. **Liquidity** — the ability to pay short-term debts — matters more for survival than paper profit. Firms manage this by chasing debtors, delaying supplier payments, arranging overdrafts and keeping cash reserves.",
            },
          ],
          keyFormulas: [
            { name: "Net cash flow", statement: "Net cash flow = cash receipts − cash payments" },
            { name: "Closing balance", statement: "Closing balance = opening balance + net cash flow" },
          ],
          workedExample: {
            problem: "Opening balance £10,000. Receipts £45,000; payments £40,000. Find net cash flow and closing balance.",
            solution: "Net cash flow = 45,000 − 40,000 = £5,000. Closing balance = 10,000 + 5,000 = £15,000.",
          },
          questions: [
            {
              id: "ecn10-u10-cf-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "The main purpose of a cash-flow forecast is to:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Calculate the firm's annual profit" },
                  { id: "b", text: "Predict when cash may run short" },
                  { id: "c", text: "Pay the firm's tax bill" },
                  { id: "d", text: "Set the price of products" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Cash-flow forecast", statement: "Predicted receipts and payments used to spot cash shortages." },
                ],
                steps: [
                  { reasoning: "By projecting receipts and payments, the firm sees future balances and can plan finance before cash runs out.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Predict when cash may run short",
                commonErrors: ["Confusing cash-flow forecasting with profit calculation."],
              },
            },
            {
              id: "ecn10-u10-cf-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "State three items that would appear in a firm's cash-flow forecast.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Cash-flow forecast items", statement: "Expected receipts and payments over time." },
                ],
                steps: [
                  { reasoning: "Expected sales receipts — cash and credit customers paying.", marks: 1, markCode: "AO1" },
                  { reasoning: "Payments to suppliers and for wages and rent.", marks: 1, markCode: "AO1" },
                  { reasoning: "Loan repayments, tax payments or capital spending.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: sales receipts, supplier payments, wages, rent, loan repayments, tax.",
                commonErrors: ["Listing non-cash items such as depreciation."],
              },
            },
            {
              id: "ecn10-u10-cf-q3",
              difficulty: "foundation",
              totalMarks: 4,
              stem: "A firm's cash-flow forecast shows: opening balance £10,000; expected receipts £45,000; payments to suppliers £20,000, wages £15,000, rent £3,000 and a loan repayment £2,000.",
              response: { type: "numeric", parts: [
                { label: "Net cash flow", answer: 5000, unit: "£" },
                { label: "Closing balance", answer: 15000, unit: "£" },
              ] },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cash flow", statement: "Net flow = receipts − payments; closing = opening + net" },
                ],
                steps: [
                  { reasoning: "Total payments = 20,000 + 15,000 + 3,000 + 2,000 = £40,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Net cash flow = 45,000 − 40,000 = £5,000; closing = 10,000 + 5,000 = £15,000.", marks: 3, markCode: "AO2" },
                ],
                finalAnswer: "Net cash flow £5,000; closing balance £15,000",
                commonErrors: ["Forgetting the loan repayment in total payments."],
              },
            },
            {
              id: "ecn10-u10-cf-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why a profitable business can still run out of cash.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Cash vs profit", statement: "Profit is earned on credit; cash arrives later or is spent on assets." },
                ],
                steps: [
                  { reasoning: "Sales on credit count as revenue/profit but cash arrives weeks or months later — debtors must pay.", marks: 2, markCode: "AO2" },
                  { reasoning: "Cash spent buying stock, equipment or paying dividends is not an expense in the same period — it drains the bank.", marks: 2, markCode: "AO2" },
                  { reasoning: "Fixed obligations — loan repayments, rent, wages — must be paid even when receipts are delayed.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Timing gaps between earning profit and receiving/paying cash can bankrupt a profitable firm.",
                commonErrors: ["Saying profit equals cash — the core misconception."],
              },
            },
            {
              id: "ecn10-u10-cf-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A firm's cash-flow forecast shows a negative balance of £5,000 in month 3.",
              parts: [
                { label: "a", prompt: "Explain what the negative balance means and one likely cause.", marks: 3 },
                { label: "b", prompt: "Suggest two ways the firm could avoid the cash shortage.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Cash shortage", statement: "Forecast warnings allow action before insolvency." },
                ],
                steps: [
                  { reasoning: "(a) Negative balance means payments exceed receipts — the firm cannot cover its bills in month 3.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Likely cause: seasonal sales dip or a large payment (e.g., tax or equipment) falling in that month.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Arrange an overdraft or short-term loan to cover the gap.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Speed up receipts — chase debtors, offer early-payment discounts; or delay payments to suppliers.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) cannot pay bills — seasonal dip or big payment (b) overdraft; faster receipts or delayed payments",
                commonErrors: ["Suggesting 'raise prices' without addressing the timing problem."],
              },
            },
            {
              id: "ecn10-u10-cf-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess the view that managing cash flow matters more than making a profit.",
              parts: [
                { label: "a", prompt: "Explain two reasons why cash flow is vital for survival.", marks: 4 },
                { label: "b", prompt: "Explain two reasons why profit still matters.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Cash vs profit", statement: "Cash keeps the firm alive; profit determines long-run viability." },
                ],
                steps: [
                  { reasoning: "(a) Reason 1: bills, wages and loan repayments need actual cash — no cash means insolvency.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Reason 2: cash flow warnings let firms plan finance before crisis — survival tool.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Reason 1: sustained losses mean the business model fails — cash flow alone cannot fix that.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Reason 2: profit funds growth, rewards owners and shows efficiency — the long-run objective.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: cash flow is more urgent short-term but profit matters long-term — a firm needs both.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Cash flow ensures survival now; profit ensures viability later — neither alone is sufficient.",
                commonErrors: ["One-sided claim that one measure is everything."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u10-lesson-10-2-notes",
      title: "Business Accounts and Cash Flow — notes",
      summary: "Income statement structure, profit versus cash, cash-flow forecasts and why profitable firms can fail.",
      sections: [
        { heading: "Key idea", body: "Accounts measure performance (profit); cash flow measures survival — they answer different questions." },
        { heading: "Income statement", body: "Revenue − cost of sales = gross profit; − expenses = operating profit; − interest − tax = net profit." },
        { heading: "Cash flow", body: "Forecast receipts minus payments each month; negative balances need overdrafts, faster debtor collection or delayed payments." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts",
    exportName: "lesson163",
    lesson: {
      id: "ecn10-u10-lesson-10-3",
      code: "10-3",
      title: "Financial Analysis and Planning",
      goal: "I CAN calculate and interpret profitability ratios, liquidity ratios, break-even and budgets.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Business finance"],
      vocabulary: [
        { term: "Gross profit margin", definition: "Gross profit as a percentage of sales." },
        { term: "Net profit margin", definition: "Net profit as a percentage of sales." },
        { term: "Break-even", definition: "Level of output where total revenue equals total cost." },
        { term: "Margin of safety", definition: "How far sales exceed break-even sales." },
        { term: "Current ratio", definition: "Current assets divided by current liabilities." },
        { term: "Budget", definition: "A financial plan compared against actual results." },
      ],
      concepts: [
        {
          id: "ecn10-u10-rat",
          title: "Profitability Ratios and Break-even",
          skill: "Calculate gross and net profit margins, break-even output and margin of safety.",
          sections: [
            {
              heading: "Profitability ratios",
              body: "**Gross profit margin** = (gross profit ÷ sales) × 100 — shows pricing power over direct costs. **Net profit margin** = (net profit ÷ sales) × 100 — shows overall efficiency after all costs. Compare margins over time and with rivals; a falling margin signals rising costs or weaker pricing.",
            },
            {
              heading: "Break-even analysis",
              body: "Each unit sold earns a **contribution** = price − variable cost per unit. **Break-even output** = fixed costs ÷ contribution. **Margin of safety** = actual sales − break-even sales (or as a % of actual sales) — the buffer before losses begin. A small margin of safety means the firm is vulnerable to falling demand.",
            },
          ],
          keyFormulas: [
            { name: "Gross profit margin", statement: "GPM = (gross profit ÷ sales) × 100" },
            { name: "Net profit margin", statement: "NPM = (net profit ÷ sales) × 100" },
            { name: "Break-even output", statement: "BEP = fixed costs ÷ contribution per unit" },
            { name: "Margin of safety", statement: "MoS = actual sales − break-even sales" },
          ],
          workedExample: {
            problem: "Price £25, variable cost £15, fixed costs £30,000. Sales are £80,000. Find contribution, break-even output and margin of safety.",
            solution: "Contribution = 25 − 15 = £10. Break-even = 30,000 ÷ 10 = 3,000 units (£75,000 sales). Actual sales 80,000 → 8,000 units. Margin of safety = 8,000 − 3,000 = 5,000 units (or £80,000 − £75,000 = £5,000).",
          },
          questions: [
            {
              id: "ecn10-u10-rat-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "The gross profit margin is calculated as:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "(Net profit ÷ sales) × 100" },
                  { id: "b", text: "(Gross profit ÷ sales) × 100" },
                  { id: "c", text: "(Sales ÷ gross profit) × 100" },
                  { id: "d", text: "(Cost of sales ÷ sales) × 100" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Gross profit margin", statement: "Gross profit ÷ sales × 100." },
                ],
                steps: [
                  { reasoning: "Gross margin uses gross profit over revenue; net margin uses net profit — do not confuse them.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** (Gross profit ÷ sales) × 100",
                commonErrors: ["Using net profit in the gross margin formula."],
              },
            },
            {
              id: "ecn10-u10-rat-q2",
              difficulty: "foundation",
              totalMarks: 4,
              stem: "A firm has sales of £120,000, cost of sales of £78,000 and net profit of £15,000.",
              response: { type: "numeric", parts: [
                { label: "Gross profit margin", answer: 35, unit: "%" },
                { label: "Net profit margin", answer: 12.5, unit: "%" },
              ] },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Margins", statement: "GPM = GP ÷ sales × 100; NPM = NP ÷ sales × 100" },
                ],
                steps: [
                  { reasoning: "Gross profit = 120,000 − 78,000 = £42,000; GPM = 42,000 ÷ 120,000 × 100 = 35%.", marks: 2, markCode: "AO2" },
                  { reasoning: "NPM = 15,000 ÷ 120,000 × 100 = 12.5%.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "GPM 35%; NPM 12.5%",
                commonErrors: ["Forgetting to multiply by 100 or using cost of sales in net margin."],
              },
            },
            {
              id: "ecn10-u10-rat-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A product sells at £25 with a variable cost of £15 per unit. Fixed costs are £30,000.",
              response: { type: "numeric", parts: [
                { label: "Contribution per unit", answer: 10, unit: "£" },
                { label: "Break-even output", answer: 3000, unit: "units" },
                { label: "Break-even revenue", answer: 75000, unit: "£" },
              ] },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Break-even", statement: "Contribution = P − AVC; BEP = FC ÷ contribution" },
                ],
                steps: [
                  { reasoning: "Contribution = 25 − 15 = £10 per unit.", marks: 1, markCode: "AO2" },
                  { reasoning: "Break-even output = 30,000 ÷ 10 = 3,000 units; revenue = 3,000 × 25 = £75,000.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Contribution £10; BEP 3,000 units / £75,000",
                commonErrors: ["Using price instead of contribution in the BEP formula."],
              },
            },
            {
              id: "ecn10-u10-rat-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A firm sells 8,000 units; its break-even output is 6,000 units.",
              parts: [
                { label: "a", prompt: "Calculate the margin of safety in units and as a percentage of actual sales.", marks: 2 },
                { label: "b", prompt: "Explain what the margin of safety tells a manager about risk.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Margin of safety", statement: "MoS = actual output − break-even output" },
                ],
                steps: [
                  { reasoning: "(a) Margin of safety = 8,000 − 6,000 = 2,000 units; as % of actual = 2,000 ÷ 8,000 × 100 = 25%.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Sales can fall by 25% before the firm makes a loss — the buffer shows how much demand can drop safely.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) A small margin of safety means rising risk from falling demand, new competition or cost increases.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) 2,000 units / 25% (b) sales can fall 25% before losses begin",
                commonErrors: ["Expressing margin of safety as a % of break-even rather than actual sales."],
              },
            },
            {
              id: "ecn10-u10-rat-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Firm A has a gross profit margin of 40% while its rival Firm B has 25%.",
              parts: [
                { label: "a", prompt: "Explain what a higher gross margin suggests about a firm.", marks: 3 },
                { label: "b", prompt: "Explain why Firm B might still be the more profitable business overall.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Margin interpretation", statement: "Gross margin covers direct costs only; other costs and scale matter too." },
                ],
                steps: [
                  { reasoning: "(a) Higher gross margin suggests stronger pricing power or lower direct costs — more left over from each sale to cover expenses.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) It may reflect differentiation, brand strength or efficient production.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Firm B may have much higher sales volume, lower overheads, or a better net margin — gross margin ignores other expenses and scale.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Net profit margin and total profit are the real measures of overall performance.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) stronger pricing/lower direct costs (b) scale, overheads and net margin can reverse the picture",
                commonErrors: ["Assuming higher gross margin always means more profitable."],
              },
            },
            {
              id: "ecn10-u10-rat-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess the usefulness of break-even analysis to a business planning a new product.",
              parts: [
                { label: "a", prompt: "Explain two ways break-even analysis helps planning.", marks: 4 },
                { label: "b", prompt: "Explain two limitations of break-even analysis.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Break-even analysis", statement: "Shows required output but assumes simple cost and demand patterns." },
                ],
                steps: [
                  { reasoning: "(a) Benefit 1: shows the minimum output needed to avoid losses — a viability test before launch.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit 2: helps set prices — raising price increases contribution but may reduce demand; margin of safety shows risk buffer.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Limitation 1: assumes fixed and variable costs are constant — in reality costs and demand change with output.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Limitation 2: ignores uncertainty in sales forecasts, competitor reactions and seasonal swings.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: break-even is a useful planning tool but its assumptions must be treated with caution.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Break-even guides pricing and viability but relies on simplifying assumptions.",
                commonErrors: ["One-sided 'useful' or 'useless' answer without evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn10-u10-liq",
          title: "Liquidity, Budgets and Financial Decisions",
          skill: "Interpret liquidity ratios and budgets to support financial decisions.",
          sections: [
            {
              heading: "Liquidity ratios",
              body: "**Liquidity** is the ability to pay short-term debts. The **current ratio** = current assets ÷ current liabilities — compares short-term resources with short-term debts; above 1.5 is often comfortable. The **acid test ratio** excludes stock: (current assets − inventory) ÷ current liabilities — a stricter check of immediate liquidity.",
            },
            {
              heading: "Budgets and decisions",
              body: "A **budget** sets financial targets for revenue, costs and profit. Comparing **actual** results with budget reveals **variances** — e.g., sales £5,000 below budget. Adverse variances prompt investigation: was it price, volume, costs or external factors? Budgets and ratios together support decisions on pricing, spending, borrowing and investment.",
            },
          ],
          keyFormulas: [
            { name: "Current ratio", statement: "Current ratio = current assets ÷ current liabilities" },
            { name: "Acid test", statement: "Acid test = (current assets − inventory) ÷ current liabilities" },
            { name: "Budget variance", statement: "Variance = actual − budgeted (negative = adverse for revenue)" },
          ],
          workedExample: {
            problem: "Current assets £90,000, current liabilities £60,000, inventory £30,000. Calculate the current and acid-test ratios.",
            solution: "Current ratio = 90,000 ÷ 60,000 = 1.5. Acid test = (90,000 − 30,000) ÷ 60,000 = 60,000 ÷ 60,000 = 1.0.",
          },
          questions: [
            {
              id: "ecn10-u10-liq-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "The current ratio measures:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Profit as a percentage of sales" },
                  { id: "b", text: "Current assets relative to current liabilities" },
                  { id: "c", text: "Total assets relative to total debts" },
                  { id: "d", text: "Sales relative to costs" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Current ratio", statement: "Current assets ÷ current liabilities — a liquidity measure." },
                ],
                steps: [
                  { reasoning: "The current ratio compares short-term assets with short-term liabilities — it says nothing about profit.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Current assets relative to current liabilities",
                commonErrors: ["Confusing liquidity ratios with profitability ratios."],
              },
            },
            {
              id: "ecn10-u10-liq-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "A firm has current assets of £90,000 and current liabilities of £60,000.",
              response: { type: "numeric", parts: [{ label: "Current ratio", answer: 1.5 }] },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Current ratio", statement: "CA ÷ CL = 90,000 ÷ 60,000" },
                ],
                steps: [
                  { reasoning: "Current ratio = 90,000 ÷ 60,000.", marks: 1, markCode: "AO1" },
                  { reasoning: "Current ratio = 1.5 — the firm has £1.50 of short-term assets per £1 of short-term debts.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Current ratio = 1.5",
                commonErrors: ["Inverting the ratio (liabilities ÷ assets)."],
              },
            },
            {
              id: "ecn10-u10-liq-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "A firm has a current ratio of 0.8. Explain what this indicates about its liquidity and the risk it faces.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Liquidity risk", statement: "Ratio below 1 means short-term debts exceed short-term assets." },
                ],
                steps: [
                  { reasoning: "A current ratio of 0.8 means current liabilities exceed current assets — the firm cannot cover all short-term debts from short-term resources.", marks: 2, markCode: "AO2" },
                  { reasoning: "Risk: it may struggle to pay suppliers, wages or loan repayments on time — raising the danger of insolvency or damaged credit.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Ratio < 1 signals liquidity strain — short-term bills may go unpaid.",
                commonErrors: ["Saying a low ratio is 'efficient' — it signals risk."],
              },
            },
            {
              id: "ecn10-u10-liq-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A firm's budgeted sales were £50,000 but actual sales were £45,000.",
              parts: [
                { label: "a", prompt: "Calculate the sales variance and express it as a percentage of budget.", marks: 2 },
                { label: "b", prompt: "Explain two possible causes of this adverse variance.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Budget variance", statement: "Variance = actual − budget = 45,000 − 50,000 = −£5,000" },
                ],
                steps: [
                  { reasoning: "(a) Variance = 45,000 − 50,000 = −£5,000; as % of budget = 5,000 ÷ 50,000 × 100 = 10% adverse.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Cause 1: weaker demand — fewer customers bought or prices had to be cut.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Cause 2: supply problems, competitor action or an economic downturn reduced sales.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) −£5,000 / −10% (b) weak demand or external shocks",
                commonErrors: ["Quoting +£5,000 — sales below budget is adverse (negative)."],
              },
            },
            {
              id: "ecn10-u10-liq-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A firm has current assets of £120,000 (including stock of £40,000) and current liabilities of £80,000.",
              parts: [
                { label: "a", prompt: "Calculate the current ratio and the acid-test ratio.", marks: 3 },
                { label: "b", prompt: "Explain why the acid-test ratio gives a stricter test of liquidity.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Liquidity ratios", statement: "CR = CA ÷ CL; acid test = (CA − inventory) ÷ CL" },
                ],
                steps: [
                  { reasoning: "(a) Current ratio = 120,000 ÷ 80,000 = 1.5.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Acid test = (120,000 − 40,000) ÷ 80,000 = 80,000 ÷ 80,000 = 1.0.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Stock may take time to sell and convert to cash — excluding it shows whether the firm could pay debts without selling inventory.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Acid test of 1.0 is borderline — immediate liquidity is weaker than the current ratio suggests.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) CR 1.5; acid test 1.0 (b) stock is illiquid — acid test reveals tighter liquidity",
                commonErrors: ["Forgetting to subtract inventory in the acid test."],
              },
            },
            {
              id: "ecn10-u10-liq-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess whether a business's accounts alone are enough to guide its financial decisions.",
              parts: [
                { label: "a", prompt: "Explain two things accounts and ratios do reveal.", marks: 4 },
                { label: "b", prompt: "Explain two things accounts alone cannot reveal.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Financial decision-making", statement: "Accounts inform but do not replace judgement and forecasts." },
                ],
                steps: [
                  { reasoning: "(a) They reveal profitability — margins, profit trends and cost control.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) They reveal liquidity and solvency through ratios — whether bills can be paid.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) They are backward-looking — past accounts cannot predict future demand, competitor moves or economic change.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) They omit non-financial factors — staff morale, market opportunities, regulation, reputation.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: accounts are essential evidence but decisions also need forecasts, cash-flow planning and judgement.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Accounts are necessary but not sufficient — combine with forecasts and qualitative judgement.",
                commonErrors: ["One-sided answer without acknowledging both strengths and limits."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u10-lesson-10-3-notes",
      title: "Financial Analysis and Planning — notes",
      summary: "Profitability margins, break-even and margin of safety, liquidity ratios, budgets and variances.",
      sections: [
        { heading: "Key idea", body: "Ratios turn accounts into comparable measures — margins for profitability, current/acid-test ratios for liquidity." },
        { heading: "Break-even", body: "Contribution = price − variable cost; BEP = fixed costs ÷ contribution; margin of safety buffers against falling sales." },
        { heading: "Planning", body: "Budgets set targets; variances highlight problems; combine ratios, cash-flow forecasts and judgement for decisions." },
      ],
    },
  },
];

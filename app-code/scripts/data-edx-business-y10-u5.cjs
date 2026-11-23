module.exports = [
  {
    file: "lesson-5-1.ts",
    exportName: "lesson51",
    lesson: {
      id: "ebz10-u5-lesson-5-1",
      code: "5-1",
      title: "Business Finance Needs and Sources",
      goal: "I CAN explain finance needs, working capital and sources of business finance.",
      standards: ["Edexcel IGCSE Business 4BS0 — Finance and Accounting"],
      vocabulary: [
        { term: "Finance", definition: "Money needed to start and run a business." },
        { term: "Fixed capital", definition: "Long-term assets such as buildings, machinery and vehicles." },
        { term: "Working capital", definition: "Current assets minus current liabilities used in day-to-day operations." },
        { term: "Cash flow", definition: "Movement of money into and out of a business." },
        { term: "Retained profit", definition: "Profit kept by the business instead of paid to owners." },
        { term: "Source of finance", definition: "Internal or external way a business obtains money." }
      ],
      concepts: [
        {
          id: "ebz10-u5-finance-needs-working-capital",
          title: "Finance Needs and Working Capital",
          skill: "Distinguish fixed and working capital and explain cash-flow needs.",
          sections: [
            {
              heading: "Why businesses need finance",
              body: "Businesses need finance to start up, buy equipment, expand, pay wages and manage day-to-day costs. Finance can come from owners, retained profit, loans, share issues or grants. The right source depends on amount, duration, cost and risk."
            },
            {
              heading: "Fixed capital and working capital",
              body: "**Fixed capital** buys long-term assets such as premises, machinery and vehicles. **Working capital** funds short-term needs such as stock, wages and bills. Working capital = current assets − current liabilities. Too little working capital causes cash-flow problems; too much ties up money unnecessarily."
            },
            {
              heading: "Cash flow",
              body: "A business can be profitable but still fail if it cannot pay bills on time. Cash-flow forecasts track expected receipts and payments to identify shortages. Timing differences between sales, purchases and payments are a common cause of cash-flow pressure."
            }
          ],
          keyFormulas: [
            { name: "Working capital", statement: "Current assets − current liabilities" }
          ],
          workedExample: {
            problem: "A business has current assets of £45,000 and current liabilities of £30,000. Calculate working capital and interpret it.",
            solution: "Working capital = £45,000 − £30,000 = £15,000. The positive figure means the business can cover short-term debts."
          },
          questions: [
            {
              id: "ebz10-u5-need-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which statement defines working capital?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Money invested in long-term assets" },
                  { id: "b", text: "Current assets minus current liabilities" },
                  { id: "c", text: "Total sales for one year" },
                  { id: "d", text: "Profit after tax" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Working capital", statement: "Current assets − current liabilities." }],
                steps: [{ reasoning: "Working capital measures short-term resources available after short-term debts.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Current assets minus current liabilities",
                commonErrors: ["Confusing working capital with fixed capital or profit."]
              }
            },
            {
              id: "ebz10-u5-need-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "A business has current assets of £45,000 and current liabilities of £30,000. Calculate working capital.",
              response: {
                type: "numeric",
                parts: [{ label: "Working capital", answer: 15000, unit: "£" }]
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Working capital", statement: "Current assets − current liabilities." }],
                steps: [
                  { reasoning: "Identify the correct figures: current assets £45,000 and current liabilities £30,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Subtract liabilities from assets: £45,000 − £30,000 = £15,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "State the positive working capital figure: £15,000.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "£15,000",
                commonErrors: ["Adding instead of subtracting.", "Using total assets rather than current assets."]
              }
            },
            {
              id: "ebz10-u5-need-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the difference between fixed capital and working capital, giving one example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Fixed vs working capital", statement: "Long-term assets versus short-term operating funds." }],
                steps: [
                  { reasoning: "Fixed capital is used to buy long-term assets.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: machinery, vehicles or premises.", marks: 1, markCode: "AO1" },
                  { reasoning: "Working capital funds day-to-day operations.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: stock, wages or payment of supplier bills.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Fixed capital buys long-term assets; working capital funds daily operations.",
                commonErrors: ["Examples swapped.", "No clear distinction."]
              }
            },
            {
              id: "ebz10-u5-need-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A bakery plans to buy a new oven and increase its stock of flour and ingredients.",
              parts: [
                { label: "a", prompt: "Identify which purchase is fixed capital and which is working capital.", marks: 3 },
                { label: "b", prompt: "Explain one cash-flow problem the bakery might face.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Capital classification", statement: "Match each finance need to fixed or working capital." }],
                steps: [
                  { part: "a", reasoning: "The oven is a long-term asset, so it is fixed capital.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Flour and ingredients are short-term operating needs, so they are working capital.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "The bakery may pay for ingredients before selling the finished products.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "If sales are delayed, it may struggle to pay wages or suppliers despite future demand.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Oven = fixed capital; ingredients = working capital; timing of receipts and payments can cause cash-flow pressure.",
                commonErrors: ["Wrong classification.", "No timing explanation."]
              }
            },
            {
              id: "ebz10-u5-need-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A retailer must decide how much working capital to keep.",
              parts: [
                { label: "a", prompt: "Explain two problems of holding too little working capital.", marks: 4 },
                { label: "b", prompt: "Explain one problem of holding too much working capital.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Working capital balance", statement: "Too little causes shortages; too much ties up resources." }],
                steps: [
                  { part: "a", reasoning: "The business may be unable to pay suppliers, wages or bills on time.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "It may miss discounts, damage supplier relationships or lose stock opportunities.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Excess cash or stock earns little return and may become obsolete or damaged.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Money tied up in stock cannot be used for investment or emergencies.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Too little risks unpaid bills and shortages; too much wastes resources and opportunity.",
                commonErrors: ["Only one side.", "No business consequence."]
              }
            },
            {
              id: "ebz10-u5-need-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A furniture maker receives payment 60 days after delivery but must pay suppliers monthly.",
              parts: [
                { label: "a", prompt: "Explain why this creates a cash-flow gap.", marks: 3 },
                { label: "b", prompt: "Describe two ways the business could manage the gap.", marks: 3 },
                { label: "c", prompt: "Explain the role of a cash-flow forecast.", marks: 2 },
                { label: "d", prompt: "Recommend one short-term finance source and justify it.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cash-flow management", statement: "Timing differences require forecasting and appropriate finance." }],
                steps: [
                  { part: "a", reasoning: "Costs are paid before customer payments arrive.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "The 60-day delay creates a period when expenses exceed receipts.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Negotiate shorter customer payment terms or deposits to improve timing.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Use an overdraft or invoice financing to bridge the gap.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "A cash-flow forecast predicts receipts and payments, identifying future shortages.", marks: 2, markCode: "AO1" },
                  { part: "d", reasoning: "Recommend a bank overdraft because it is flexible short-term finance.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Manage the timing gap with better payment terms, short-term finance and cash-flow forecasting.",
                commonErrors: ["Profit confused with cash flow.", "No short-term source recommended."]
              }
            }
          ]
        },
        {
          id: "ebz10-u5-sources-finance",
          title: "Internal and External Sources of Finance",
          skill: "Evaluate appropriate sources of finance for business needs.",
          sections: [
            {
              heading: "Internal sources",
              body: "Internal finance comes from the business itself: owners' capital, retained profit, selling assets and reducing costs. It avoids interest and loss of control but may be limited, especially for new or growing businesses."
            },
            {
              heading: "External sources",
              body: "External finance includes bank overdrafts and loans, share issues, hire purchase, leasing, trade credit, government grants, crowdfunding and business angels. Short-term sources suit working capital; long-term sources suit expansion and major assets."
            },
            {
              heading: "Choosing finance",
              body: "Businesses consider amount needed, repayment period, interest cost, security required, ownership dilution and risk. Grants and retained profit may be cheaper but are limited; loans provide larger sums but create repayment obligations."
            }
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A startup needs £50,000 for equipment but has no profit yet. Which sources are most suitable?",
            solution: "Consider owner investment, a bank loan, angel investment or asset finance such as hire purchase, depending on risk and repayment ability."
          },
          questions: [
            {
              id: "ebz10-u5-source-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is an internal source of finance?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Bank loan" },
                  { id: "b", text: "Retained profit" },
                  { id: "c", text: "Share issue" },
                  { id: "d", text: "Crowdfunding" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal finance", statement: "Finance generated within the business." }],
                steps: [{ reasoning: "Retained profit comes from the business's own earnings rather than outside providers.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Retained profit",
                commonErrors: ["Confusing internal finance with external borrowing or investment."]
              }
            },
            {
              id: "ebz10-u5-source-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give three internal sources of finance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Internal sources", statement: "Funds generated by the business itself." }],
                steps: [
                  { reasoning: "Owners can invest additional capital.", marks: 1, markCode: "AO1" },
                  { reasoning: "The business can retain profit rather than distribute it.", marks: 1, markCode: "AO1" },
                  { reasoning: "It can sell unused assets or reduce operating costs.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Owners' capital, retained profit, asset sales and cost reduction.",
                commonErrors: ["Only one source.", "External sources listed."]
              }
            },
            {
              id: "ebz10-u5-source-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Compare a bank loan and issuing shares as sources of finance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Loan vs shares", statement: "Debt finance versus equity finance." }],
                steps: [
                  { reasoning: "A bank loan must be repaid with interest over an agreed period.", marks: 1, markCode: "AO1" },
                  { reasoning: "It does not dilute ownership but creates repayment risk.", marks: 1, markCode: "AO2" },
                  { reasoning: "Issuing shares raises capital without repayment but gives investors ownership.", marks: 1, markCode: "AO1" },
                  { reasoning: "It may dilute control and is only suitable for limited companies or partnerships with share capital.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Loans require repayment and interest; shares avoid repayment but dilute ownership.",
                commonErrors: ["No repayment difference.", "Ownership impact ignored."]
              }
            },
            {
              id: "ebz10-u5-source-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A retailer needs £5,000 to cover a temporary stock shortage and £80,000 to open a new store.",
              parts: [
                { label: "a", prompt: "Suggest a suitable source for the £5,000 shortage.", marks: 3 },
                { label: "b", prompt: "Suggest a suitable source for the £80,000 expansion and justify it.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Matching finance to need", statement: "Short-term needs need flexible finance; expansion needs longer-term capital." }],
                steps: [
                  { part: "a", reasoning: "Use a bank overdraft or trade credit for the short-term stock shortage.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "This is flexible, quick and repaid when sales recover.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use a long-term bank loan, retained profit or share issue for the store.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "The asset has a long life, so long-term finance matches its repayment period.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Overdraft/trade credit for short-term; long-term loan, retained profit or shares for expansion.",
                commonErrors: ["Long-term loan for a small temporary gap.", "No justification."]
              }
            },
            {
              id: "ebz10-u5-source-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A start-up wants to raise £100,000 through crowdfunding.",
              parts: [
                { label: "a", prompt: "Explain two advantages of crowdfunding.", marks: 4 },
                { label: "b", prompt: "Explain two risks or disadvantages.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Crowdfunding evaluation", statement: "Accessible capital versus uncertainty and obligations." }],
                steps: [
                  { part: "a", reasoning: "It can reach many small investors quickly without a bank loan.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "It may also provide market validation and publicity for the product.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The campaign may fail to raise the target amount.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Depending on the model, it may create rewards, equity obligations or ongoing communication duties.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Crowdfunding is accessible and promotional but uncertain and may create obligations.",
                commonErrors: ["Only advantages or only disadvantages.", "No link to start-up context."]
              }
            },
            {
              id: "ebz10-u5-source-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A new app developer needs £20,000 for development and may need £200,000 later for expansion.",
              parts: [
                { label: "a", prompt: "Recommend a source for the initial £20,000 and justify it.", marks: 3 },
                { label: "b", prompt: "Recommend a source for the later £200,000 and justify it.", marks: 3 },
                { label: "c", prompt: "Explain why retained profit may become useful later.", marks: 2 },
                { label: "d", prompt: "Evaluate whether taking investment is better than a loan for expansion.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Finance strategy", statement: "Use different sources as the business grows." }],
                steps: [
                  { part: "a", reasoning: "Use savings, a small bank loan, crowdfunding or an angel investor for development.", marks: 2, markCode: "AO3" },
                  { part: "a", reasoning: "The amount is modest and proof of concept may be limited.", marks: 1, markCode: "AO3" },
                  { part: "b", reasoning: "Use retained profit, bank finance, venture capital or share issue for expansion.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "The larger amount and growth stage justify more substantial finance.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "If the app succeeds, profit can fund expansion without interest or dilution.", marks: 2, markCode: "AO2" },
                  { part: "d", reasoning: "Investment avoids repayment but dilutes ownership; loans preserve ownership but require repayment.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Use small flexible finance first, then retained profit or larger investment/loan as the business proves itself.",
                commonErrors: ["One source for both stages.", "No evaluation of ownership versus repayment."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u5-finance-sources-notes",
      title: "Finance needs and sources — notes",
      summary: "Businesses need fixed capital for assets and working capital for operations; choose finance by amount, duration, cost and ownership impact.",
      sections: [
        { heading: "Needs", body: "Fixed capital = long-term assets; working capital = current assets − current liabilities." },
        { heading: "Cash flow", body: "Profitable businesses can still fail if payments are mistimed." },
        { heading: "Internal", body: "Owners' capital, retained profit, asset sales and cost savings." },
        { heading: "External", body: "Overdrafts, loans, shares, hire purchase, grants, crowdfunding and investors." }
      ]
    }
  },
  {
    file: "lesson-5-2.ts",
    exportName: "lesson52",
    lesson: {
      id: "ebz10-u5-lesson-5-2",
      code: "5-2",
      title: "Bookkeeping and Financial Statements",
      goal: "I CAN explain bookkeeping records and interpret income statements and balance sheets.",
      standards: ["Edexcel IGCSE Business 4BS0 — Finance and Accounting"],
      vocabulary: [
        { term: "Bookkeeping", definition: "Recording financial transactions systematically." },
        { term: "Source document", definition: "Evidence of a transaction such as an invoice or receipt." },
        { term: "Trial balance", definition: "Check that total debits equal total credits." },
        { term: "Income statement", definition: "Statement showing revenue, costs and profit over a period." },
        { term: "Balance sheet", definition: "Statement of assets, liabilities and equity at a point in time." },
        { term: "Gross profit", definition: "Revenue minus cost of sales." },
        { term: "Net profit", definition: "Profit remaining after all expenses, interest and tax." }
      ],
      concepts: [
        {
          id: "ebz10-u5-bookkeeping-records",
          title: "Bookkeeping and Financial Records",
          skill: "Use source documents and double-entry principles to maintain accurate records.",
          sections: [
            {
              heading: "Source documents",
              body: "Transactions are supported by documents such as invoices, receipts, cheques and bank statements. Accurate records begin by recording each transaction in the correct book, such as a sales day book, purchases day book or cash book."
            },
            {
              heading: "Double-entry bookkeeping",
              body: "Double entry records each transaction twice: a debit and a credit. Assets and expenses increase with debits; liabilities, equity and income increase with credits. Ledgers collect transactions for each account."
            },
            {
              heading: "Trial balance",
              body: "A trial balance lists all ledger balances to check that debits equal credits. It can reveal errors but does not prove accounts are completely correct because some errors, such as omissions or compensating mistakes, may still occur."
            }
          ],
          keyFormulas: [
            { name: "Double entry", statement: "Every transaction has equal debit and credit entries" },
            { name: "Trial balance", statement: "Total debits = total credits" }
          ],
          workedExample: {
            problem: "A business buys £500 of stock on credit. What is the double-entry effect?",
            solution: "Debit stock/purchases £500 and credit trade payables £500, because the business gains stock and owes the supplier."
          },
          questions: [
            {
              id: "ebz10-u5-book-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "In double-entry bookkeeping, what must be true for every transaction?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Only one account is affected" },
                  { id: "b", text: "Total debits equal total credits" },
                  { id: "c", text: "Every entry is a credit" },
                  { id: "d", text: "The transaction is recorded monthly" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "principle", name: "Double entry", statement: "Every transaction has equal debit and credit entries." }],
                steps: [{ reasoning: "Double-entry bookkeeping requires debits and credits to balance.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Total debits equal total credits",
                commonErrors: ["Confusing double entry with single entry or trial balance."]
              }
            },
            {
              id: "ebz10-u5-book-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain the purpose of a trial balance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Trial balance", statement: "Check that ledger debits and credits agree." }],
                steps: [
                  { reasoning: "It lists all ledger account balances.", marks: 1, markCode: "AO1" },
                  { reasoning: "It checks that total debits equal total credits.", marks: 1, markCode: "AO1" },
                  { reasoning: "It helps detect errors, though it does not guarantee all records are correct.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "A trial balance checks that debits equal credits and helps find errors.",
                commonErrors: ["Saying it proves all accounts are correct.", "Only one function given."]
              }
            },
            {
              id: "ebz10-u5-book-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain why businesses keep source documents for transactions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Source documents", statement: "Documents provide evidence for bookkeeping and disputes." }],
                steps: [
                  { reasoning: "Source documents prove that a transaction occurred.", marks: 1, markCode: "AO1" },
                  { reasoning: "They provide details needed to record amount, date and parties.", marks: 1, markCode: "AO1" },
                  { reasoning: "They support VAT or tax records and audits.", marks: 1, markCode: "AO2" },
                  { reasoning: "They help resolve disputes with customers or suppliers.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Source documents provide evidence, details and legal support for transactions.",
                commonErrors: ["Only saying records are needed.", "No audit or dispute link."]
              }
            },
            {
              id: "ebz10-u5-book-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A shop receives an invoice for stock, pays a supplier by cheque and sells goods for cash.",
              parts: [
                { label: "a", prompt: "Identify the source document for each transaction.", marks: 3 },
                { label: "b", prompt: "Suggest which book or account should record each transaction.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Recording transactions", statement: "Use documents as evidence and record in appropriate books." }],
                steps: [
                  { part: "a", reasoning: "Invoice for the stock purchase.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Cheque or bank statement for the supplier payment.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Till roll or cash receipt for the cash sale.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Record purchases in purchases book and payment in cash book or bank account.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Record the sale in sales day book and cash received in cash book.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Invoice, cheque and till roll evidence purchases, payment and sales respectively.",
                commonErrors: ["Documents mismatched.", "No book or account identified."]
              }
            },
            {
              id: "ebz10-u5-book-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A business finds that its trial balance does not balance.",
              parts: [
                { label: "a", prompt: "Explain two possible causes.", marks: 4 },
                { label: "b", prompt: "Suggest two ways to locate the error.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Trial balance errors", statement: "Unequal totals reveal recording or calculation errors." }],
                steps: [
                  { part: "a", reasoning: "A transaction may have been omitted or entered twice.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "An amount may have been entered on the wrong side or transposed digits.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Check recent entries against source documents and ledger totals.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Use suspense account or halve the difference to test likely errors.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Errors may be omissions, wrong sides or transpositions; check documents, ledgers and totals.",
                commonErrors: ["Assuming trial balance proves no errors.", "No method to find the error."]
              }
            },
            {
              id: "ebz10-u5-book-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A café records cash sales, pays rent and buys coffee beans on credit.",
              parts: [
                { label: "a", prompt: "List the source document likely used for each event.", marks: 3 },
                { label: "b", prompt: "Explain the double-entry effect of buying coffee beans on credit.", marks: 3 },
                { label: "c", prompt: "Explain what the trial balance would check at month end.", marks: 2 },
                { label: "d", prompt: "Explain why the café still needs an income statement after bookkeeping.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Complete bookkeeping cycle", statement: "Documents → books → ledger → trial balance → financial statements." }],
                steps: [
                  { part: "a", reasoning: "Till roll for cash sales.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Receipt or bank statement for rent payment.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Supplier invoice for coffee beans bought on credit.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Debit purchases/stock because the café receives beans.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Credit trade payables because it owes the supplier.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "It checks total debits equal total credits across all ledger accounts.", marks: 2, markCode: "AO1" },
                  { part: "d", reasoning: "Bookkeeping records transactions; the income statement summarises revenue, costs and profit.", marks: 2, markCode: "AO2" }
                ],
                finalAnswer: "Documents support entries; double entry records credit purchases; trial balance checks totals; income statement shows performance.",
                commonErrors: ["Only bookkeeping described.", "No link to financial statements."]
              }
            }
          ]
        },
        {
          id: "ebz10-u5-financial-statements",
          title: "Income Statement and Balance Sheet",
          skill: "Calculate and interpret basic financial statements.",
          sections: [
            {
              heading: "Income statement",
              body: "An income statement covers a period and shows revenue, cost of sales, gross profit, operating expenses, operating profit, interest, tax and net profit. Gross profit = revenue − cost of sales; operating profit = gross profit − operating expenses."
            },
            {
              heading: "Balance sheet",
              body: "A balance sheet shows the financial position at a point in time. It lists assets, liabilities and owner's equity. Assets = liabilities + equity. Current assets include cash and stock; fixed assets include premises and equipment; liabilities include loans and payables."
            },
            {
              heading: "Interpreting statements",
              body: "A strong gross profit margin suggests good control of production costs. A healthy current ratio suggests short-term liquidity. Rising liabilities or falling equity may signal financial risk. Statements should be compared over time or with competitors."
            }
          ],
          keyFormulas: [
            { name: "Gross profit", statement: "Revenue − cost of sales" },
            { name: "Operating profit", statement: "Gross profit − operating expenses" },
            { name: "Balance sheet equation", statement: "Assets = liabilities + equity" }
          ],
          workedExample: {
            problem: "Revenue £120,000, cost of sales £70,000, expenses £25,000. Calculate gross and operating profit.",
            solution: "Gross profit = £120,000 − £70,000 = £50,000. Operating profit = £50,000 − £25,000 = £25,000."
          },
          questions: [
            {
              id: "ebz10-u5-statement-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What does an income statement show?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Assets and liabilities at one date" },
                  { id: "b", text: "Revenue, costs and profit over a period" },
                  { id: "c", text: "Cash paid to suppliers only" },
                  { id: "d", text: "Employee attendance records" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Income statement", statement: "Shows financial performance over a period." }],
                steps: [{ reasoning: "The income statement summarises revenue, expenses and profit for a period.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Revenue, costs and profit over a period",
                commonErrors: ["Confusing income statement with balance sheet."]
              }
            },
            {
              id: "ebz10-u5-statement-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Revenue is £120,000, cost of sales is £70,000 and expenses are £25,000. Calculate gross profit and operating profit.",
              response: {
                type: "numeric",
                parts: [
                  { label: "Gross profit", answer: 50000, unit: "£" },
                  { label: "Operating profit", answer: 25000, unit: "£" }
                ]
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Profit calculation", statement: "Gross profit = revenue − cost of sales; operating profit = gross profit − expenses." }],
                steps: [
                  { reasoning: "Calculate gross profit: £120,000 − £70,000 = £50,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "Subtract operating expenses: £50,000 − £25,000 = £25,000.", marks: 1, markCode: "AO2" },
                  { reasoning: "State both results: gross profit £50,000 and operating profit £25,000.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Gross profit £50,000; operating profit £25,000.",
                commonErrors: ["Subtracting expenses from revenue for gross profit.", "Using cost of sales as operating expenses."]
              }
            },
            {
              id: "ebz10-u5-statement-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the difference between gross profit and net profit.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Gross vs net profit", statement: "Gross profit is before operating expenses; net profit is after all deductions." }],
                steps: [
                  { reasoning: "Gross profit = revenue − cost of sales only.", marks: 1, markCode: "AO1" },
                  { reasoning: "It shows profit before overheads such as rent and wages.", marks: 1, markCode: "AO2" },
                  { reasoning: "Net profit deducts all expenses, interest and tax.", marks: 1, markCode: "AO1" },
                  { reasoning: "It shows the final profit available to owners or shareholders.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Gross profit is sales margin; net profit is after all costs and deductions.",
                commonErrors: ["Same figure assumed.", "Operating expenses omitted."]
              }
            },
            {
              id: "ebz10-u5-statement-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A business lists the following items: cash, stock, delivery van, bank loan, owner's capital, rent expense and sales revenue.",
              parts: [
                { label: "a", prompt: "Classify each item as an asset, liability, equity, income or expense.", marks: 3 },
                { label: "b", prompt: "Explain which items appear on the balance sheet.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Statement classification", statement: "Separate performance items from financial position items." }],
                steps: [
                  { part: "a", reasoning: "Cash, stock and van are assets; bank loan is a liability; owner's capital is equity.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Rent is an expense and sales revenue is income.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Assets, liabilities and equity appear on the balance sheet.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Revenue and expenses appear on the income statement.", marks: 1, markCode: "AO1" }
                ],
                finalAnswer: "Assets/liabilities/equity on balance sheet; income/expenses on income statement.",
                commonErrors: ["Revenue treated as an asset.", "Liability confused with equity."]
              }
            },
            {
              id: "ebz10-u5-statement-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A company's income statement shows falling gross profit margin but rising net profit margin.",
              parts: [
                { label: "a", prompt: "Explain two possible reasons for this pattern.", marks: 4 },
                { label: "b", prompt: "Suggest two actions management could take.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Statement interpretation", statement: "Margins reveal different cost and pricing pressures." }],
                steps: [
                  { part: "a", reasoning: "Cost of sales may have risen faster than revenue.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Overheads or other expenses may have fallen, improving net margin.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Review suppliers, production efficiency or pricing to improve gross margin.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Continue controlling overheads but check they do not harm quality or growth.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Rising costs may hurt gross margin while lower overheads help net margin; review costs and efficiency.",
                commonErrors: ["Only one margin explained.", "No action suggested."]
              }
            },
            {
              id: "ebz10-u5-statement-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A business has assets of £180,000 and liabilities of £70,000 at the start of the year. During the year it earns a net profit of £25,000 and distributes £5,000 to owners.",
              parts: [
                { label: "a", prompt: "Calculate owner's equity at the start of the year.", marks: 3 },
                { label: "b", prompt: "Calculate owner's equity after profit and distribution.", marks: 3 },
                { label: "c", prompt: "Explain the balance-sheet equation.", marks: 2 },
                { label: "d", prompt: "Explain one limitation of using only one year's figures.", marks: 2 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Equity calculation", statement: "Equity = assets − liabilities; retained profit increases equity." }],
                steps: [
                  { part: "a", reasoning: "Use assets − liabilities: £180,000 − £70,000 = £110,000.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "This is equity before current-year profit and distribution.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Profit retained in the business increases owner's equity.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Add net profit and subtract drawings: £110,000 + £25,000 − £5,000 = £130,000.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "State final equity: £130,000.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Assets must equal liabilities plus equity at any date.", marks: 2, markCode: "AO1" },
                  { part: "d", reasoning: "One year may be unusual; trends and comparison improve interpretation.", marks: 2, markCode: "AO3" }
                ],
                finalAnswer: "Equity at the start £110,000; equity at year end £130,000; compare over time for better judgement.",
                commonErrors: ["Forgetting to subtract drawings.", "Treating liabilities as reducing assets directly."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u5-accounting-notes",
      title: "Bookkeeping and financial statements — notes",
      summary: "Source documents support double-entry records; the trial balance checks totals; income statements show performance and balance sheets show position.",
      sections: [
        { heading: "Records", body: "Documents → day books → ledgers → trial balance." },
        { heading: "Income statement", body: "Revenue − cost of sales = gross profit; minus expenses = operating profit; minus interest/tax = net profit." },
        { heading: "Balance sheet", body: "Assets = liabilities + equity at a point in time." },
        { heading: "Interpretation", body: "Compare margins, liquidity and equity over time." }
      ]
    }
  },
  {
    file: "lesson-5-3.ts",
    exportName: "lesson53",
    lesson: {
      id: "ebz10-u5-lesson-5-3",
      code: "5-3",
      title: "Financial Ratios and Break-Even Analysis",
      goal: "I CAN calculate financial ratios and break-even figures to support decisions.",
      standards: ["Edexcel IGCSE Business 4BS0 — Finance and Accounting"],
      vocabulary: [
        { term: "Liquidity", definition: "Ability to pay short-term debts." },
        { term: "Profitability", definition: "Ability to earn profit from revenue." },
        { term: "Current ratio", definition: "Current assets divided by current liabilities." },
        { term: "Gross profit margin", definition: "Gross profit as a percentage of revenue." },
        { term: "Fixed cost", definition: "Cost that does not change with output in the short term." },
        { term: "Variable cost", definition: "Cost that changes with output." },
        { term: "Contribution", definition: "Selling price minus variable cost per unit." },
        { term: "Break-even", definition: "Level of output where total revenue equals total costs." }
      ],
      concepts: [
        {
          id: "ebz10-u5-financial-ratios",
          title: "Liquidity and Profitability Ratios",
          skill: "Calculate and interpret basic financial ratios.",
          sections: [
            {
              heading: "Liquidity ratios",
              body: "The **current ratio** = current assets ÷ current liabilities. A ratio above 1 suggests the business can cover short-term debts, but too high may mean idle resources. The **acid test ratio** excludes stock for a stricter liquidity check."
            },
            {
              heading: "Profitability ratios",
              body: "Gross profit margin = gross profit ÷ revenue × 100. Net profit margin = net profit ÷ revenue × 100. Higher margins indicate better pricing or cost control, but must be compared with industry norms and trends."
            },
            {
              heading: "Using ratios",
              body: "Ratios turn figures into meaningful comparisons. They help identify strengths such as strong liquidity or weaknesses such as falling margins. Ratios should be interpreted alongside context, not alone."
            }
          ],
          keyFormulas: [
            { name: "Current ratio", statement: "Current assets ÷ current liabilities" },
            { name: "Gross profit margin", statement: "(Gross profit ÷ revenue) × 100" },
            { name: "Net profit margin", statement: "(Net profit ÷ revenue) × 100" }
          ],
          workedExample: {
            problem: "Current assets £60,000, current liabilities £40,000, revenue £200,000 and gross profit £80,000. Calculate current ratio and gross margin.",
            solution: "Current ratio = £60,000 ÷ £40,000 = 1.5. Gross margin = (£80,000 ÷ £200,000) × 100 = 40%."
          },
          questions: [
            {
              id: "ebz10-u5-ratio-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "How is the current ratio calculated?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Current liabilities ÷ current assets" },
                  { id: "b", text: "Current assets ÷ current liabilities" },
                  { id: "c", text: "Revenue ÷ net profit" },
                  { id: "d", text: "Gross profit ÷ cost of sales" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Current ratio", statement: "Current assets ÷ current liabilities." }],
                steps: [{ reasoning: "The current ratio measures short-term assets against short-term liabilities.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Current assets ÷ current liabilities",
                commonErrors: ["Inverting the formula.", "Using total assets instead of current assets."]
              }
            },
            {
              id: "ebz10-u5-ratio-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Current assets are £60,000 and current liabilities are £40,000. Calculate the current ratio.",
              response: {
                type: "numeric",
                parts: [{ label: "Current ratio", answer: 1.5 }]
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Current ratio", statement: "Current assets ÷ current liabilities." }],
                steps: [
                  { reasoning: "Divide current assets by current liabilities: £60,000 ÷ £40,000 = 1.5.", marks: 1, markCode: "AO2" },
                  { reasoning: "State the ratio as 1.5 : 1.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "1.5",
                commonErrors: ["Reversing the formula.", "Multiplying instead of dividing."]
              }
            },
            {
              id: "ebz10-u5-ratio-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain what gross profit margin and current ratio each tell a manager.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Ratio interpretation", statement: "Margins show profitability; liquidity ratios show short-term security." }],
                steps: [
                  { reasoning: "Gross margin shows how much gross profit is earned per £1 of sales.", marks: 1, markCode: "AO1" },
                  { reasoning: "It indicates pricing power and control of direct costs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Current ratio shows whether short-term assets cover short-term debts.", marks: 1, markCode: "AO1" },
                  { reasoning: "A higher ratio suggests better liquidity but may indicate inefficient asset use.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Gross margin measures sales profitability; current ratio measures short-term liquidity.",
                commonErrors: ["Same purpose assumed.", "No interpretation."]
              }
            },
            {
              id: "ebz10-u5-ratio-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A business has revenue of £200,000, gross profit of £80,000 and net profit of £40,000.",
              parts: [
                { label: "a", prompt: "Calculate the gross profit margin.", marks: 3 },
                { label: "b", prompt: "Calculate the net profit margin.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Profitability ratios", statement: "Margin = profit ÷ revenue × 100." }],
                steps: [
                  { part: "a", reasoning: "Use gross profit divided by revenue: (£80,000 ÷ £200,000) × 100.", marks: 1, markCode: "AO2" },
                  { part: "a", reasoning: "Calculate the percentage: 0.4 × 100 = 40%.", marks: 1, markCode: "AO2" },
                  { part: "a", reasoning: "State the gross margin: 40%.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Use net profit divided by revenue: (£40,000 ÷ £200,000) × 100.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "Calculate the percentage: 0.2 × 100 = 20%.", marks: 1, markCode: "AO2" },
                  { part: "b", reasoning: "State the net margin: 20%.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Gross margin 40%; net margin 20%.",
                commonErrors: ["Using costs instead of profit.", "Forgetting to multiply by 100."]
              }
            },
            {
              id: "ebz10-u5-ratio-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A manager calculates ratios but is unsure how useful they are.",
              parts: [
                { label: "a", prompt: "Explain two limitations of financial ratios.", marks: 4 },
                { label: "b", prompt: "Suggest two ways to make ratio analysis more useful.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Ratio limitations", statement: "Ratios need context, trends and comparison." }],
                steps: [
                  { part: "a", reasoning: "A single ratio does not show why performance changed.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Different accounting methods or one-off events can distort figures.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Compare ratios over several years or with competitors.", marks: 2, markCode: "AO3" },
                  { part: "b", reasoning: "Use ratios alongside other information such as cash flow and market conditions.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Ratios need trends, benchmarks and context to be meaningful.",
                commonErrors: ["Only limitations or only improvements.", "No comparison suggested."]
              }
            },
            {
              id: "ebz10-u5-ratio-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A business reports revenue £500,000, gross profit £200,000, net profit £90,000, current assets £80,000 and current liabilities £50,000.",
              parts: [
                { label: "a", prompt: "Calculate the gross profit margin.", marks: 2 },
                { label: "b", prompt: "Calculate the net profit margin.", marks: 2 },
                { label: "c", prompt: "Calculate the current ratio.", marks: 2 },
                { label: "d", prompt: "Interpret the liquidity and profitability results.", marks: 4 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Ratio analysis", statement: "Margins measure profit; current ratio measures liquidity." }],
                steps: [
                  { part: "a", reasoning: "Gross margin = (£200,000 ÷ £500,000) × 100 = 40%.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Net margin = (£90,000 ÷ £500,000) × 100 = 18%.", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Current ratio = £80,000 ÷ £50,000 = 1.6.", marks: 2, markCode: "AO2" },
                  { part: "d", reasoning: "A 40% gross margin suggests strong control of direct costs.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "An 18% net margin indicates reasonable overall profitability after expenses.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "A current ratio of 1.6 suggests current assets comfortably cover short-term debts.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "Compare with previous years and competitors before final judgement.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Gross margin 40%, net margin 18%, current ratio 1.6; generally profitable and liquid.",
                commonErrors: ["Calculation errors.", "No interpretation or comparison."]
              }
            }
          ]
        },
        {
          id: "ebz10-u5-break-even-cvp",
          title: "Break-Even and Cost-Volume-Profit",
          skill: "Calculate contribution, break-even and margin of safety.",
          sections: [
            {
              heading: "Costs and contribution",
              body: "**Fixed costs** do not change with output, such as rent. **Variable costs** change with output, such as materials. Contribution = selling price − variable cost per unit; it shows how much each unit contributes to fixed costs and profit."
            },
            {
              heading: "Break-even",
              body: "Break-even occurs when total revenue equals total costs. Break-even units = fixed costs ÷ contribution per unit. Break-even revenue = break-even units × selling price, or fixed costs ÷ contribution margin ratio."
            },
            {
              heading: "Using break-even",
              body: "Businesses use break-even to assess whether expected sales cover costs and to set targets. The **margin of safety** = actual or expected sales − break-even sales; a larger margin means more protection against losses. Assumptions include constant prices and costs per unit."
            }
          ],
          keyFormulas: [
            { name: "Contribution", statement: "Selling price − variable cost per unit" },
            { name: "Break-even units", statement: "Fixed costs ÷ contribution per unit" },
            { name: "Break-even revenue", statement: "Break-even units × selling price" },
            { name: "Margin of safety", statement: "Expected sales − break-even sales" }
          ],
          workedExample: {
            problem: "Selling price £20, variable cost £12, fixed costs £16,000. Find contribution and break-even units.",
            solution: "Contribution = £20 − £12 = £8. Break-even units = £16,000 ÷ £8 = 2,000 units."
          },
          questions: [
            {
              id: "ebz10-u5-breakeven-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is contribution per unit?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Selling price + variable cost" },
                  { id: "b", text: "Selling price − variable cost" },
                  { id: "c", text: "Fixed costs ÷ sales" },
                  { id: "d", text: "Revenue − profit" }
                ],
                correctChoiceId: "b"
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Contribution", statement: "Selling price minus variable cost per unit." }],
                steps: [{ reasoning: "Contribution is the amount each unit contributes after variable costs.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Selling price − variable cost",
                commonErrors: ["Adding costs instead of subtracting.", "Using fixed costs."]
              }
            },
            {
              id: "ebz10-u5-breakeven-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Selling price is £20, variable cost is £12 and fixed costs are £16,000. Calculate contribution and break-even units.",
              response: {
                type: "numeric",
                parts: [
                  { label: "Contribution", answer: 8, unit: "£" },
                  { label: "Break-even units", answer: 2000, unit: "units" }
                ]
              },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even", statement: "Contribution = price − variable cost; break-even units = fixed costs ÷ contribution." }],
                steps: [
                  { reasoning: "Calculate contribution per unit: £20 − £12 = £8.", marks: 1, markCode: "AO2" },
                  { reasoning: "Divide fixed costs by contribution: £16,000 ÷ £8 = 2,000 units.", marks: 1, markCode: "AO2" },
                  { reasoning: "State both answers: contribution £8 and break-even 2,000 units.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Contribution £8; break-even 2,000 units.",
                commonErrors: ["Using fixed costs as variable costs.", "Forgetting units."]
              }
            },
            {
              id: "ebz10-u5-breakeven-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain what margin of safety means and why it matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Margin of safety", statement: "Difference between expected sales and break-even sales." }],
                steps: [
                  { reasoning: "It measures how far sales can fall before losses begin.", marks: 1, markCode: "AO1" },
                  { reasoning: "Margin of safety = expected sales − break-even sales.", marks: 1, markCode: "AO1" },
                  { reasoning: "A larger margin gives more protection against demand changes.", marks: 1, markCode: "AO2" },
                  { reasoning: "A small margin means the business is vulnerable to lower sales.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Margin of safety shows how much sales can fall before break-even is breached.",
                commonErrors: ["Confused with profit.", "No risk link."]
              }
            },
            {
              id: "ebz10-u5-breakeven-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A new product has a selling price of £30, variable cost of £18 and fixed costs of £24,000.",
              parts: [
                { label: "a", prompt: "Calculate the break-even units.", marks: 3 },
                { label: "b", prompt: "Calculate the break-even revenue.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even calculation", statement: "Units = fixed costs ÷ contribution; revenue = units × price." }],
                steps: [
                  { part: "a", reasoning: "Find contribution per unit: £30 − £18 = £12.", marks: 1, markCode: "AO2" },
                  { part: "a", reasoning: "Divide fixed costs by contribution: £24,000 ÷ £12 = 2,000 units.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Multiply break-even units by selling price: 2,000 × £30 = £60,000.", marks: 3, markCode: "AO2" }
                ],
                finalAnswer: "Break-even = 2,000 units or £60,000 revenue.",
                commonErrors: ["Using price instead of contribution.", "Revenue calculated as units × variable cost."]
              }
            },
            {
              id: "ebz10-u5-breakeven-q5",
              difficulty: "challenge",
              totalMarks: 7,
              stem: "A manager uses break-even analysis to decide whether to launch a new product.",
              parts: [
                { label: "a", prompt: "Explain two assumptions behind break-even analysis.", marks: 4 },
                { label: "b", prompt: "Suggest two limitations of relying on break-even alone.", marks: 3 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Break-even limitations", statement: "Simple model assumes stable costs, prices and demand." }],
                steps: [
                  { part: "a", reasoning: "It assumes selling price and variable cost per unit remain constant.", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "It assumes all output is sold and fixed costs stay unchanged.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Real demand may be lower than expected or change with price.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "It ignores cash-flow timing, quality, competition and capacity limits.", marks: 1, markCode: "AO2" }
                ],
                finalAnswer: "Break-even assumes constant costs and sales; it ignores demand risk and cash-flow timing.",
                commonErrors: ["Assumptions repeated as limitations.", "No real-world limitation."]
              }
            },
            {
              id: "ebz10-u5-breakeven-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A café considers selling a new cake at £6 with variable cost £2 and expects fixed costs of £1,200 per month. Expected sales are 400 cakes.",
              parts: [
                { label: "a", prompt: "Calculate contribution per cake.", marks: 2 },
                { label: "b", prompt: "Calculate monthly break-even units.", marks: 2 },
                { label: "c", prompt: "Calculate monthly break-even revenue.", marks: 2 },
                { label: "d", prompt: "Calculate margin of safety in units and evaluate the decision.", marks: 4 }
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Break-even decision", statement: "Compare expected sales with break-even before launching." }],
                steps: [
                  { part: "a", reasoning: "Contribution = £6 − £2 = £4 per cake.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Break-even units = £1,200 ÷ £4 = 300 cakes.", marks: 2, markCode: "AO2" },
                  { part: "c", reasoning: "Break-even revenue = 300 × £6 = £1,800.", marks: 2, markCode: "AO2" },
                  { part: "d", reasoning: "Margin of safety = 400 − 300 = 100 cakes.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Expected sales exceed break-even, so the product should cover fixed costs.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "But demand uncertainty and quality/cash-flow factors should also be checked.", marks: 1, markCode: "AO3" },
                  { part: "d", reasoning: "A 100-cake buffer gives some protection but not unlimited safety.", marks: 1, markCode: "AO3" }
                ],
                finalAnswer: "Contribution £4; break-even 300 cakes/£1,800; margin of safety 100 cakes; launch looks viable but test demand.",
                commonErrors: ["Break-even revenue using variable cost.", "No margin or evaluation."]
              }
            }
          ]
        }
      ]
    },
    notes: {
      id: "ebz10-u5-finance-analysis-notes",
      title: "Financial ratios and break-even — notes",
      summary: "Ratios compare liquidity and profitability; break-even shows the sales needed to cover costs; both need context and trends.",
      sections: [
        { heading: "Liquidity", body: "Current ratio = current assets ÷ current liabilities." },
        { heading: "Profitability", body: "Margins = profit ÷ revenue × 100." },
        { heading: "Break-even", body: "Contribution = price − variable cost; break-even units = fixed costs ÷ contribution." },
        { heading: "Use", body: "Compare over time, with competitors and with cash-flow forecasts." }
      ]
    }
  }
];

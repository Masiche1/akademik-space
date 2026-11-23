module.exports = [
  {
    file: "lesson-9-1.ts",
    exportName: "lesson151",
    lesson: {
      id: "ecn10-u9-lesson-9-1",
      code: "9-1",
      title: "Functions and Forms of Money",
      goal: "I CAN explain the functions of money, the problems of barter and the main forms of money.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Money and banking"],
      vocabulary: [
        { term: "Money", definition: "Anything generally accepted as a medium of exchange." },
        { term: "Barter", definition: "Exchange of goods/services directly without money." },
        { term: "Medium of exchange", definition: "Money's role in making payment for goods and services." },
        { term: "Store of value", definition: "Money's ability to hold purchasing power over time." },
        { term: "Unit of account", definition: "Money's role as a common measure of value." },
        { term: "Fiat money", definition: "Money whose value comes from government decree and acceptance." },
        { term: "Near money", definition: "Assets easily converted into money, such as savings deposits." },
      ],
      concepts: [
        {
          id: "ecn10-u9-money-functions",
          title: "Functions of Money",
          skill: "Explain the functions of money and why barter is inefficient.",
          sections: [
            {
              heading: "The functions of money",
              body: "Money solves the problems of **barter** — direct exchange of goods. Its key functions are: **medium of exchange** (accepted in payment for goods and services), **store of value** (holds purchasing power over time), **unit of account** (a common measure so prices can be compared) and **standard of deferred payment** (debts can be denominated and repaid later).",
            },
            {
              heading: "When money's functions weaken",
              body: "Barter requires a **double coincidence of wants**, divisibility, portability and durability — hard to achieve with most goods. Money removes these frictions, but its functions can be undermined: **very high inflation** erodes the store of value, so people may spend immediately, hoard foreign currency or return to barter. Even then money often remains the unit of account, though prices become unstable.",
            },
          ],
          keyFormulas: [
            { name: "Functions of money", statement: "Medium of exchange, store of value, unit of account, standard of deferred payment" },
          ],
          workedExample: {
            problem: "A farmer has eggs but wants shoes; the shoemaker wants wheat. Why is barter difficult here?",
            solution: "There is no double coincidence of wants — the shoemaker does not want eggs. With money the farmer can sell the eggs for cash, then buy shoes in two separate transactions.",
          },
          questions: [
            {
              id: "ecn10-u9-functions-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which of the following is NOT a function of money?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Unit of account" },
                  { id: "b", text: "Medium of exchange" },
                  { id: "c", text: "Setting interest rates" },
                  { id: "d", text: "Store of value" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Functions of money", statement: "Medium of exchange, store of value, unit of account, standard of deferred payment." },
                ],
                steps: [
                  { reasoning: "Interest rates are set by the central bank, not a function of money itself.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** Setting interest rates",
                commonErrors: ["Confusing money with monetary policy tools."],
              },
            },
            {
              id: "ecn10-u9-functions-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain two problems of a barter economy.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Barter limitations", statement: "Double coincidence of wants and divisibility problems." },
                ],
                steps: [
                  { reasoning: "Double coincidence of wants — each party must want what the other has at the same time.", marks: 2, markCode: "AO2" },
                  { reasoning: "Divisibility and portability — large or indivisible goods are hard to trade for small items.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Double coincidence of wants; indivisible/immovable goods.",
                commonErrors: ["Listing money's functions instead of barter's problems."],
              },
            },
            {
              id: "ecn10-u9-functions-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain how money acts as a store of value and a unit of account.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Store of value", statement: "Money holds purchasing power over time." },
                  { kind: "definition", name: "Unit of account", statement: "Money is a common measure of value." },
                ],
                steps: [
                  { reasoning: "Store of value: money can be saved and spent later without losing value (unless inflation is high).", marks: 2, markCode: "AO2" },
                  { reasoning: "Unit of account: all prices are quoted in money, so values can be compared across goods.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Store of value = keeps purchasing power; unit of account = common price measure.",
                commonErrors: ["Confusing store of value with medium of exchange."],
              },
            },
            {
              id: "ecn10-u9-functions-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain how very high inflation can reduce the usefulness of money.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Inflation and money", statement: "Rising prices erode money's purchasing power." },
                ],
                steps: [
                  { reasoning: "Store of value weakened — money buys less over time, so saving in money loses value.", marks: 2, markCode: "AO2" },
                  { reasoning: "People spend immediately or hoard goods/foreign currency instead of saving in domestic money.", marks: 1, markCode: "AO2" },
                  { reasoning: "Lending and credit become risky because future repayments lose real value.", marks: 1, markCode: "AO2" },
                  { reasoning: "Prices become unstable, undermining money as a reliable unit of account.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "High inflation erodes purchasing power, discourages saving/lending and destabilises prices.",
                commonErrors: ["Saying money stops being used entirely — it often remains the unit of account."],
              },
            },
            {
              id: "ecn10-u9-functions-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "In Country X most payments are made by mobile phone using digital balances.",
              parts: [
                { label: "a", prompt: "Explain how digital money can still act as a medium of exchange.", marks: 3 },
                { label: "b", prompt: "Discuss one advantage and one disadvantage of digital money as a store of value.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Digital money", statement: "E-money performs money's functions electronically." },
                ],
                steps: [
                  { reasoning: "(a) Digital balances are widely accepted in payment for goods and services — they are a medium of exchange.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) They are transferable between users and settle transactions instantly.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Advantage: balances can be held securely and earn interest, so value is stored over time.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Disadvantage: dependence on technology, fraud risk or system failure can destroy access to stored value.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) digital balances are accepted payment (b) secure storage vs technology/fraud risk",
                commonErrors: ["Claiming digital money is not money at all without justification."],
              },
            },
            {
              id: "ecn10-u9-functions-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess whether money is essential for a modern economy.",
              parts: [
                { label: "a", prompt: "State the four functions of money.", marks: 4 },
                { label: "b", prompt: "Explain how each function solves a problem of barter.", marks: 4 },
                { label: "c", prompt: "Evaluate the claim that a small community could manage without money.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Functions of money", statement: "Medium of exchange, store of value, unit of account, standard of deferred payment." },
                  { kind: "principle", name: "Money vs barter", statement: "Money removes barter's frictions and enables specialisation." },
                ],
                steps: [
                  { reasoning: "(a) Medium of exchange.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Store of value.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Unit of account.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Standard of deferred payment.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Medium of exchange removes the double coincidence of wants.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Store of value allows saving and delayed exchange.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Unit of account allows prices to be compared across goods.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Standard of deferred payment enables credit and borrowing.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) A very small, self-sufficient community might barter, but specialisation, trade and investment all require money — so it is effectively essential.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Money is effectively essential — barter cannot support specialisation, credit or large-scale trade.",
                commonErrors: ["Missing one function in part (a).", "No evaluation in part (c)."],
              },
            },
          ],
        },
        {
          id: "ecn10-u9-money-types",
          title: "Types and Forms of Money",
          skill: "Distinguish commodity, fiat, deposit and electronic money.",
          sections: [
            {
              heading: "Commodity, fiat and deposit money",
              body: "**Commodity money** has intrinsic value — gold, silver, salt. **Fiat money** has value by government decree and universal acceptance — banknotes and coins. **Checkable deposits** (current accounts) count as money because they can be spent by card or transfer. **Near money** — savings and time deposits — converts to cash quickly but is not instantly spendable.",
            },
            {
              heading: "E-money and measuring the money supply",
              body: "**E-money** — digital balances on cards, phones and apps — functions like checkable deposits. **Cryptocurrencies** are decentralised digital assets whose status as money is debated. The **money supply** is measured narrowly (cash + checkable deposits) or broadly (plus near money); the classification affects statistics and policy.",
            },
          ],
          keyFormulas: [
            { name: "Money types", statement: "Commodity → fiat → deposit/e-money; near money sits just outside narrow measures" },
          ],
          workedExample: {
            problem: "Is a savings account 'money'?",
            solution: "It is near money — not instantly spendable, but it converts to cash quickly, so it is included in broad money measures but not narrow ones.",
          },
          questions: [
            {
              id: "ecn10-u9-types-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Fiat money gets its value from:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Its intrinsic value as a commodity" },
                  { id: "b", text: "Government decree and general acceptance" },
                  { id: "c", text: "Its gold backing" },
                  { id: "d", text: "Foreign exchange reserves" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Fiat money", statement: "Value by decree and acceptance, not intrinsic worth." },
                ],
                steps: [
                  { reasoning: "Fiat money is accepted because the government declares it legal tender and people trust it.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Government decree and acceptance",
                commonErrors: ["Confusing fiat with commodity money."],
              },
            },
            {
              id: "ecn10-u9-types-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Distinguish between commodity money and fiat money.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Commodity vs fiat", statement: "Intrinsic value vs decree value." },
                ],
                steps: [
                  { reasoning: "Commodity money has intrinsic value — gold, silver, salt are valuable in themselves.", marks: 2, markCode: "AO1" },
                  { reasoning: "Fiat money has no intrinsic value; it is accepted by decree and trust.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Commodity = intrinsic value; fiat = decree/acceptance.",
                commonErrors: ["No example of each type."],
              },
            },
            {
              id: "ecn10-u9-types-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain why checkable deposits are classed as money.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Checkable deposits", statement: "Bank deposits usable for immediate payment." },
                ],
                steps: [
                  { reasoning: "Current account balances can be spent immediately by cheque, card or bank transfer.", marks: 2, markCode: "AO2" },
                  { reasoning: "They are counted in narrow measures of the money supply alongside cash.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Checkable deposits are instantly spendable, so they count as money.",
                commonErrors: ["Saying all bank deposits are money — savings deposits are only near money."],
              },
            },
            {
              id: "ecn10-u9-types-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A small shop accepts only cash. Explain two disadvantages for customers compared with card or mobile payments.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Payment methods", statement: "Cash vs electronic payment trade-offs." },
                ],
                steps: [
                  { reasoning: "Customers must carry cash, risking loss or theft, and cannot pay when they have no cash on them.", marks: 2, markCode: "AO2" },
                  { reasoning: "Cash payments leave no record — no spending history for credit scores and no easy budgeting.", marks: 1, markCode: "AO2" },
                  { reasoning: "Cash earns no interest and may be inconvenient for larger purchases or online shopping.", marks: 1, markCode: "AO2" },
                  { reasoning: "Foreign customers or those paid electronically face exchange and withdrawal hassle.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "No record of spending, security/carrying risk, no interest, inconvenience for large/online payments.",
                commonErrors: ["Listing advantages of cash instead of disadvantages."],
              },
            },
            {
              id: "ecn10-u9-types-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "In a country, people increasingly pay by phone instead of carrying cash.",
              parts: [
                { label: "a", prompt: "Explain how this change affects the narrow money supply.", marks: 3 },
                { label: "b", prompt: "Discuss whether e-money balances should be included in money supply measures.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Narrow money", statement: "Cash plus instantly spendable deposits." },
                ],
                steps: [
                  { reasoning: "(a) Mobile balances behave like checkable deposits — instantly spendable — so they count in narrow money.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Cash in circulation falls but total narrow money can be unchanged if balances are included.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) For: e-money is widely accepted and spendable, so excluding it would understate the money supply.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Against: some balances are savings-like or held on unregulated platforms, so broad measures may be more appropriate — a justified view is needed.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) e-money counts in narrow money if instantly spendable (b) include if functions like deposits — judgement required",
                commonErrors: ["Assuming digital money is automatically excluded from money supply."],
              },
            },
            {
              id: "ecn10-u9-types-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Evaluate whether cryptocurrencies should be treated as money.",
              parts: [
                { label: "a", prompt: "State two functions that money must perform.", marks: 2 },
                { label: "b", prompt: "Explain two features of cryptocurrencies.", marks: 2 },
                { label: "c", prompt: "Discuss whether cryptocurrencies perform the functions of money.", marks: 4 },
                { label: "d", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Money functions", statement: "Medium of exchange, store of value, unit of account." },
                  { kind: "principle", name: "Cryptocurrency", statement: "Decentralised digital asset with volatile value." },
                ],
                steps: [
                  { reasoning: "(a) Medium of exchange and store of value (or unit of account).", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Decentralised — no central bank control; value is highly volatile.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Limited acceptance as payment — few shops take them.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) As a medium of exchange acceptance is weak compared with fiat money.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) As a store of value extreme volatility makes it unreliable; as a unit of account it is rarely used for pricing.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Conclusion: cryptocurrencies are not yet money for most purposes, though they may develop some functions.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "Not yet full money — weak acceptance, volatile value; may evolve.",
                commonErrors: ["Treating 'crypto' as automatically money without testing the functions."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u9-lesson-9-1-notes",
      title: "Functions and Forms of Money — notes",
      summary: "Money's four functions, barter's problems, and the main types of money from commodity to e-money.",
      sections: [
        { heading: "Key idea", body: "Money is whatever is generally accepted as a medium of exchange; its other functions (store of value, unit of account, standard of deferred payment) make modern economies possible." },
        { heading: "Barter", body: "Barter needs a double coincidence of wants plus divisibility, portability and durability — the main reasons money evolved." },
        { heading: "Types of money", body: "Commodity money has intrinsic value; fiat money has decree value; checkable deposits and e-money are money; savings deposits are near money." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts",
    exportName: "lesson152",
    lesson: {
      id: "ecn10-u9-lesson-9-2",
      code: "9-2",
      title: "Banks and the Money Supply",
      goal: "I CAN explain the role of commercial banks and the central bank, and how money is created.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Money and banking"],
      vocabulary: [
        { term: "Commercial bank", definition: "Bank providing deposit and lending services to the public." },
        { term: "Current account", definition: "Instant-access bank account for everyday payments." },
        { term: "Interest margin", definition: "Difference between lending and deposit interest rates." },
        { term: "Reserve ratio", definition: "Proportion of deposits banks must keep as cash." },
        { term: "Lender of last resort", definition: "Central bank support for banks facing liquidity crises." },
        { term: "Narrow money", definition: "Cash plus instantly spendable deposits." },
        { term: "Broad money", definition: "Narrow money plus near-money assets such as savings deposits." },
      ],
      concepts: [
        {
          id: "ecn10-u9-commercial-banks",
          title: "Commercial Banks",
          skill: "Explain how banks take deposits, make loans and create money.",
          sections: [
            {
              heading: "What commercial banks do",
              body: "Banks accept **deposits** — **current accounts** for instant payments and **savings accounts** that pay interest. They make **loans**, overdrafts and mortgages to households and businesses, earning profit from the **interest margin** (lending rate minus deposit rate) plus fees for payment services.",
            },
            {
              heading: "Money creation and bank runs",
              body: "Bank lending **creates money**: a loan appears as a new deposit in the borrower's account, which can be spent and re-lent — expanding the money supply by roughly 1/reserve ratio. Banks keep **reserves** to meet withdrawals. If confidence collapses, a **bank run** can make an illiquid bank fail; deposit insurance and the central bank as lender of last resort reduce this risk.",
            },
          ],
          keyFormulas: [
            { name: "Interest margin", statement: "Lending rate − deposit rate = bank profit per unit lent" },
            { name: "Money creation", statement: "Loans create deposits — each lending round expands the money supply" },
          ],
          workedExample: {
            problem: "A bank receives a £100 deposit, keeps 10% as reserve and lends the rest. How much new money is created in one round?",
            solution: "It lends £90, creating a £90 deposit — £90 of new money. With repeated lending the money supply can expand by up to 1/0.10 = 10 times the initial deposit.",
          },
          questions: [
            {
              id: "ecn10-u9-banks-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which of the following is a liability of a commercial bank?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Loans made to customers" },
                  { id: "b", text: "Cash reserves held" },
                  { id: "c", text: "Customer deposits" },
                  { id: "d", text: "Bank buildings and equipment" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Bank liability", statement: "What the bank owes — deposits are liabilities." },
                ],
                steps: [
                  { reasoning: "Customer deposits are money the bank owes back — a liability. Loans and buildings are assets.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** Customer deposits",
                commonErrors: ["Confusing assets with liabilities."],
              },
            },
            {
              id: "ecn10-u9-banks-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Explain two ways in which commercial banks make profit.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Bank profit", statement: "Interest margin plus service fees." },
                ],
                steps: [
                  { reasoning: "Interest margin — banks charge more interest on loans than they pay on deposits.", marks: 2, markCode: "AO1" },
                  { reasoning: "Fees and charges for payment services, overdrafts, foreign exchange and other services.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Interest margin and service fees.",
                commonErrors: ["Saying banks profit only from interest — fees also count."],
              },
            },
            {
              id: "ecn10-u9-banks-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain how bank lending creates money.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Money creation", statement: "Loans create deposits in borrowers' accounts." },
                ],
                steps: [
                  { reasoning: "When a bank makes a loan it credits the borrower's account — a new deposit that did not exist before.", marks: 2, markCode: "AO2" },
                  { reasoning: "The borrower spends the deposit, and the recipient's bank can lend it out again, expanding the money supply.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Loans create new deposits; repeated lending expands the money supply.",
                commonErrors: ["Thinking banks only lend out existing deposits — lending itself creates money."],
              },
            },
            {
              id: "ecn10-u9-banks-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why banks keep cash reserves and what can happen if reserves are too low.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Bank reserves", statement: "Cash kept to meet withdrawal demands and regulation." },
                ],
                steps: [
                  { reasoning: "Banks keep reserves to meet everyday withdrawal and payment demands from depositors.", marks: 2, markCode: "AO2" },
                  { reasoning: "Central banks set minimum reserve requirements as a regulatory rule.", marks: 1, markCode: "AO1" },
                  { reasoning: "If reserves are too low the bank may be unable to meet withdrawals, triggering a bank run, illiquidity or failure.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Reserves meet withdrawals and satisfy rules; too few cause illiquidity and possible failure.",
                commonErrors: ["Confusing reserves with profit — reserves are cash backing deposits."],
              },
            },
            {
              id: "ecn10-u9-banks-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A bank has £1,000 in deposits and must keep 10% of deposits as reserves.",
              parts: [
                { label: "a", prompt: "Calculate the maximum amount the bank can lend.", marks: 2 },
                { label: "b", prompt: "Explain one limitation of using the simple money multiplier to predict money supply growth.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Reserve requirement", statement: "Lendable funds = deposits × (1 − reserve ratio)" },
                ],
                steps: [
                  { reasoning: "(a) Reserves required: 10% of £1,000 = £100; maximum lending = £1,000 − £100 = £900.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) In reality people may hold more cash, banks may hold excess reserves, and borrowers may repay loans early.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) The multiplier assumes every deposit is re-lent, which rarely happens perfectly.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) £900 (b) real-world leaks — cash holdings, excess reserves, early repayment",
                commonErrors: ["Lending the full £1,000 — forgetting the reserve must be kept."],
              },
            },
            {
              id: "ecn10-u9-banks-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess the view that commercial banks should be tightly regulated.",
              parts: [
                { label: "a", prompt: "Explain two risks that commercial banks face.", marks: 4 },
                { label: "b", prompt: "Explain two benefits of regulating banks.", marks: 4 },
                { label: "c", prompt: "Evaluate whether regulation eliminates banking risk.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Bank regulation", statement: "Rules protecting depositors and the financial system." },
                ],
                steps: [
                  { reasoning: "(a) Risk 1: bank runs and illiquidity if withdrawals exceed reserves.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Risk 2: bad debts when borrowers default on loans.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Benefit 1: deposit insurance protects savers and maintains confidence.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit 2: capital and liquidity rules prevent excessive risk-taking.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Regulation reduces but cannot eliminate risk — risks can migrate or rules can be gamed; a justified balanced conclusion is needed.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Regulation protects depositors and stability but cannot remove all risk.",
                commonErrors: ["Only describing benefits without evaluating."],
              },
            },
          ],
        },
        {
          id: "ecn10-u9-central-bank",
          title: "The Central Bank and the Money Supply",
          skill: "Explain the functions of the central bank and money supply measures.",
          sections: [
            {
              heading: "Functions of the central bank",
              body: "The **central bank** (e.g., Bank of England) performs key roles: **banker to the government** (manages public accounts), **note and coin issuer** (monopoly on currency), **lender of last resort** (supports banks in liquidity crises), **bank supervisor** (sets rules on capital and liquidity) and **manager of foreign exchange reserves**.",
            },
            {
              heading: "Measuring the money supply",
              body: "**Narrow money** (M0/M1) = cash plus checkable deposits — the most liquid assets. **Broad money** adds near money such as savings and time deposits. The central bank influences money growth through reserve requirements and open market operations; interest-rate policy is covered separately. Too rapid money growth relative to output tends to cause inflation; too slow growth can cause recession.",
            },
          ],
          keyFormulas: [
            { name: "Money supply", statement: "Narrow = cash + checkable deposits; broad = + near money" },
          ],
          workedExample: {
            problem: "Why is a savings account included in broad money but not narrow money?",
            solution: "It is near money — easily converted to cash but not instantly spendable, so it counts in broad but not narrow measures.",
          },
          questions: [
            {
              id: "ecn10-u9-central-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Who acts as the lender of last resort?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Commercial banks" },
                  { id: "b", text: "The central bank" },
                  { id: "c", text: "Insurance companies" },
                  { id: "d", text: "The stock exchange" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Lender of last resort", statement: "Central bank support for banks in liquidity crises." },
                ],
                steps: [
                  { reasoning: "The central bank provides emergency lending to banks that cannot meet withdrawal demands.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** The central bank",
                commonErrors: ["Confusing lender of last resort with deposit insurance."],
              },
            },
            {
              id: "ecn10-u9-central-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "State three functions of the central bank.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Central bank functions", statement: "Banker to government, note issuer, lender of last resort, supervisor, reserve manager." },
                ],
                steps: [
                  { reasoning: "Banker to the government — manages government accounts and payments.", marks: 1, markCode: "AO1" },
                  { reasoning: "Note and coin issuer — has the monopoly on producing currency.", marks: 1, markCode: "AO1" },
                  { reasoning: "Lender of last resort — supports banks facing liquidity crises.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: banker to government, note issuer, lender of last resort, bank supervisor, reserve manager.",
                commonErrors: ["Listing commercial bank functions instead of central bank functions."],
              },
            },
            {
              id: "ecn10-u9-central-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Distinguish between narrow and broad measures of the money supply.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Narrow vs broad money", statement: "Most liquid assets vs plus near money." },
                ],
                steps: [
                  { reasoning: "Narrow money = cash plus checkable deposits — instantly spendable.", marks: 2, markCode: "AO1" },
                  { reasoning: "Broad money = narrow money plus near money such as savings and time deposits.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Narrow = most liquid; broad = narrow + savings/time deposits.",
                commonErrors: ["Including savings accounts in narrow money."],
              },
            },
            {
              id: "ecn10-u9-central-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain how a sharp fall in bank reserves could lead to a credit crunch.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Credit crunch", statement: "Falling reserves reduce lending capacity." },
                ],
                steps: [
                  { reasoning: "Banks must hold reserves against deposits, so falling reserves directly limit how much they can lend.", marks: 2, markCode: "AO2" },
                  { reasoning: "Less lending means households and firms find it harder or more expensive to borrow.", marks: 2, markCode: "AO2" },
                  { reasoning: "Falling consumption and investment can slow or push the economy into recession.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Fewer reserves → less lending → less spending/investment → slowdown.",
                commonErrors: ["Stopping at 'banks lend less' without the knock-on effects."],
              },
            },
            {
              id: "ecn10-u9-central-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A country's broad money supply is growing rapidly while real output grows only slowly.",
              parts: [
                { label: "a", prompt: "Explain what this pattern suggests about inflation.", marks: 3 },
                { label: "b", prompt: "Discuss the effects on borrowers and savers.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Money growth and inflation", statement: "Money growing faster than output → demand-pull inflation." },
                ],
                steps: [
                  { reasoning: "(a) More money chasing relatively few goods pushes up aggregate demand faster than supply can respond.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) This is demand-pull inflation — prices rise, especially if wages and expectations adjust.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Borrowers gain — they repay debts in money that buys less, reducing the real burden of fixed repayments.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Savers lose — the real value of deposits and fixed incomes falls with rising prices.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) demand-pull inflation risk (b) borrowers gain, savers lose",
                commonErrors: ["Assuming money growth is always bad — it depends on output growth."],
              },
            },
            {
              id: "ecn10-u9-central-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess whether the central bank should be independent of government.",
              parts: [
                { label: "a", prompt: "Explain two reasons for central bank independence.", marks: 4 },
                { label: "b", prompt: "Explain two arguments against independence.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Central bank independence", statement: "Insulation from short-term political pressure." },
                ],
                steps: [
                  { reasoning: "(a) Independence lets the bank keep inflation low without pressure to cut rates before elections.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Credibility — markets trust an independent bank to act against inflation.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Against: an unelected body makes powerful decisions without democratic accountability.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Against: governments may prefer growth or employment over low inflation, so a democratic mandate matters.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) A justified conclusion — e.g., independence is generally valued for credibility, though some democratic oversight may be appropriate.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Independence supports price stability and credibility but raises accountability concerns.",
                commonErrors: ["One-sided argument with no conclusion."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u9-lesson-9-2-notes",
      title: "Banks and the Money Supply — notes",
      summary: "Commercial banks create money through lending; the central bank issues currency, supports banks and manages reserves.",
      sections: [
        { heading: "Key idea", body: "Bank lending creates new deposits — the money supply grows through the banking system, not just through the central bank." },
        { heading: "Reserves", body: "Banks keep cash reserves to meet withdrawals and satisfy reserve requirements; too few reserves cause illiquidity." },
        { heading: "Money measures", body: "Narrow money = cash + checkable deposits; broad money adds savings and time deposits." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts",
    exportName: "lesson153",
    lesson: {
      id: "ecn10-u9-lesson-9-3",
      code: "9-3",
      title: "Financial Markets and Saving",
      goal: "I CAN explain financial markets, shares and bonds, and the role of saving in the economy.",
      standards: ["Edexcel IGCSE Economics 4EC1 — Money and banking"],
      vocabulary: [
        { term: "Money market", definition: "Market for short-term borrowing and lending." },
        { term: "Capital market", definition: "Market for long-term finance — shares, bonds, mortgages." },
        { term: "Stock exchange", definition: "Organised market where company shares are bought and sold." },
        { term: "Share", definition: "Part-ownership of a company with variable dividends." },
        { term: "Bond", definition: "Loan to a government or company paying fixed interest." },
        { term: "Financial inclusion", definition: "Access to bank accounts, credit and insurance." },
        { term: "Financial exclusion", definition: "Lack of access to mainstream financial services." },
      ],
      concepts: [
        {
          id: "ecn10-u9-financial-markets",
          title: "Financial Markets and Institutions",
          skill: "Explain money and capital markets, shares, bonds and financial intermediaries.",
          sections: [
            {
              heading: "Types of financial market",
              body: "The **money market** handles short-term borrowing and lending — Treasury bills, commercial paper, interbank loans. The **capital market** provides long-term finance — shares, bonds, mortgages. The **stock exchange** is the organised market where shares change hands; prices reflect expected company performance. **Financial intermediaries** — banks, pension funds, insurance companies — channel savers' money to borrowers.",
            },
            {
              heading: "Shares versus bonds",
              body: "**Shares** give part-ownership: dividends vary with profit and the share price can rise or fall — higher risk, higher potential return. **Bonds** are loans: fixed interest (coupon) and repayment of face value; lower risk, lower return. Government bonds are called **gilts**. When interest rates rise, existing bond prices fall because new bonds offer better returns.",
            },
          ],
          keyFormulas: [
            { name: "Share vs bond", statement: "Share = ownership + variable dividend; bond = loan + fixed interest" },
          ],
          workedExample: {
            problem: "Why might a pension fund prefer government bonds to shares?",
            solution: "Bonds pay fixed interest and are lower risk — suitable for retirement savings that need certainty of income.",
          },
          questions: [
            {
              id: "ecn10-u9-markets-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A share represents:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A loan to the company" },
                  { id: "b", text: "Part-ownership of the company" },
                  { id: "c", text: "A fixed-interest investment" },
                  { id: "d", text: "A savings account" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Share", statement: "Part-ownership with variable dividends." },
                ],
                steps: [
                  { reasoning: "Shares confer ownership rights — voting and dividends — unlike bonds which are loans.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Part-ownership",
                commonErrors: ["Confusing shares with bonds."],
              },
            },
            {
              id: "ecn10-u9-markets-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Distinguish between the money market and the capital market.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Money vs capital market", statement: "Short-term vs long-term finance." },
                ],
                steps: [
                  { reasoning: "Money market: short-term borrowing and lending — Treasury bills, interbank loans.", marks: 2, markCode: "AO1" },
                  { reasoning: "Capital market: long-term finance — shares, bonds, mortgages.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Money market = short-term; capital market = long-term.",
                commonErrors: ["Reversing the time horizons."],
              },
            },
            {
              id: "ecn10-u9-markets-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the role of financial intermediaries in the economy.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Financial intermediaries", statement: "Channel saving into investment." },
                ],
                steps: [
                  { reasoning: "They collect savings from households and channel them to firms and governments that need finance.", marks: 2, markCode: "AO2" },
                  { reasoning: "They reduce risk and information problems — savers lack the knowledge to assess borrowers directly.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Intermediaries channel saving to investment and reduce risk/information gaps.",
                commonErrors: ["Saying intermediaries create money — that is banks' lending function, a related but distinct point."],
              },
            },
            {
              id: "ecn10-u9-markets-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why the prices of existing bonds fall when interest rates rise.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Bond prices and interest rates", statement: "Inverse relationship between bond prices and rates." },
                ],
                steps: [
                  { reasoning: "Newly issued bonds now offer higher coupons, making existing bonds with lower fixed interest less attractive.", marks: 2, markCode: "AO2" },
                  { reasoning: "To offer the same yield as new bonds, the price of existing bonds must fall.", marks: 2, markCode: "AO2" },
                  { reasoning: "Bond prices therefore move inversely to interest rates.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Higher rates make old low-coupon bonds less attractive, so their prices fall.",
                commonErrors: ["Asserting prices rise with rates — the relationship is inverse."],
              },
            },
            {
              id: "ecn10-u9-markets-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A growing company wants to raise £10 million for expansion.",
              parts: [
                { label: "a", prompt: "Compare raising funds through issuing shares versus issuing bonds.", marks: 3 },
                { label: "b", prompt: "Explain one advantage of each method to the company.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Shares vs bonds for raising finance", statement: "Ownership/dividends vs loan/fixed interest." },
                ],
                steps: [
                  { reasoning: "(a) Shares: investors gain part-ownership; dividends vary with profit; no repayment obligation.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Bonds: investors are lenders; the company pays fixed interest and must repay the loan.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Shares advantage: no fixed repayment — interest/dividends depend on performance.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Bonds advantage: no loss of ownership or control for existing shareholders.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) shares=ownership+variable dividends; bonds=loan+fixed interest (b) no repayment vs no dilution of control",
                commonErrors: ["Ignoring that bondholders must be repaid regardless of profit."],
              },
            },
            {
              id: "ecn10-u9-markets-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess the importance of stock markets to an economy.",
              parts: [
                { label: "a", prompt: "Explain two functions of the stock exchange.", marks: 4 },
                { label: "b", prompt: "Explain two benefits to businesses of being listed on the stock exchange.", marks: 4 },
                { label: "c", prompt: "Evaluate one drawback of relying on share prices as a measure of company performance.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Stock exchange", statement: "Market for buying and selling company shares." },
                ],
                steps: [
                  { reasoning: "(a) Function 1: enables companies to raise capital by selling shares to the public.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Function 2: provides a market where investors can buy and sell shares, giving liquidity.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Benefit 1: access to large-scale finance for expansion.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit 2: raised profile and prestige; shares can be used for acquisitions.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Drawback: share prices reflect expectations and sentiment, not just current performance — they can be volatile and misleading.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Stock markets raise capital and provide liquidity, though prices can be volatile.",
                commonErrors: ["Listing functions without explaining them."],
              },
            },
          ],
        },
        {
          id: "ecn10-u9-saving-investment",
          title: "Saving, Investment and Financial Inclusion",
          skill: "Explain saving, investment, financial intermediaries and inclusion.",
          sections: [
            {
              heading: "Saving and investment",
              body: "**Saving** is income not spent — by households, firms and government. **Investment** is spending on capital goods — factories, machinery, technology. Financial markets and intermediaries channel saving into investment; investment raises productivity and long-run growth. Interest rates influence the saving–spending balance.",
            },
            {
              heading: "Financial inclusion and exclusion",
              body: "**Financial inclusion** means access to bank accounts, credit, insurance and payments. **Financial exclusion** leaves people relying on cash and high-cost credit (payday loans), vulnerable to shocks. Causes include low income, poor financial literacy and geographic isolation. Policies include basic bank accounts, financial education and community credit unions.",
            },
          ],
          keyFormulas: [
            { name: "Saving vs investment", statement: "Saving = unspent income; investment = spending on capital goods" },
          ],
          workedExample: {
            problem: "Why do banks matter for economic growth?",
            solution: "They collect savings and lend or invest them in capital, raising productivity and output — channeling saving into investment.",
          },
          questions: [
            {
              id: "ecn10-u9-saving-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "In economics, investment means:",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Putting money in a savings account" },
                  { id: "b", text: "Buying shares for personal gain" },
                  { id: "c", text: "Spending on capital goods such as machinery" },
                  { id: "d", text: "Paying taxes to the government" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Investment", statement: "Spending on capital goods that raise future output." },
                ],
                steps: [
                  { reasoning: "Investment is capital spending — factories, machinery, technology — not personal saving or tax payments.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** Spending on capital goods",
                commonErrors: ["Confusing everyday 'investing' (shares) with economic investment."],
              },
            },
            {
              id: "ecn10-u9-saving-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Define saving and investment.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Saving and investment", statement: "Unspent income vs capital spending." },
                ],
                steps: [
                  { reasoning: "Saving: income that is not spent on consumption.", marks: 1, markCode: "AO1" },
                  { reasoning: "Investment: spending on capital goods that increase future productive capacity.", marks: 1, markCode: "AO1" },
                  { reasoning: "The difference between the two concepts — saving is a flow of unspent income, investment is capital expenditure.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Saving = unspent income; investment = spending on capital goods.",
                commonErrors: ["Using 'investment' to mean buying shares — that is financial investment."],
              },
            },
            {
              id: "ecn10-u9-saving-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain how financial markets channel saving into investment.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Saving-investment channel", statement: "Savers' deposits fund borrowers' capital spending." },
                ],
                steps: [
                  { reasoning: "Households deposit savings with banks and pension funds — financial intermediaries.", marks: 1, markCode: "AO2" },
                  { reasoning: "Intermediaries lend the funds or buy shares and bonds issued by firms and governments.", marks: 1, markCode: "AO2" },
                  { reasoning: "Firms use the finance to buy capital goods, raising productivity and output — economic growth.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Saving → intermediaries → finance for capital spending → growth.",
                commonErrors: ["Stopping at 'banks lend money' without linking to capital and growth."],
              },
            },
            {
              id: "ecn10-u9-saving-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain two reasons why some people remain financially excluded.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Financial exclusion", statement: "Barriers to accessing mainstream finance." },
                ],
                steps: [
                  { reasoning: "Low or irregular income and no credit history make banks unwilling to offer accounts or loans.", marks: 2, markCode: "AO2" },
                  { reasoning: "Lack of financial literacy, language barriers or geographic isolation prevent people using services.", marks: 2, markCode: "AO2" },
                  { reasoning: "Consequence: reliance on cash and high-cost credit such as payday loans, leaving people vulnerable.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Low income/no credit history; literacy and access barriers — leading to costly credit.",
                commonErrors: ["Describing consequences without explaining causes."],
              },
            },
            {
              id: "ecn10-u9-saving-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A government wants to increase financial inclusion in its country.",
              parts: [
                { label: "a", prompt: "Suggest two policies the government could use.", marks: 3 },
                { label: "b", prompt: "Discuss one benefit and one limitation of these policies.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Financial inclusion policy", statement: "Expanding access to banking and credit." },
                ],
                steps: [
                  { reasoning: "(a) Require banks to offer basic bank accounts with no or low fees.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Fund financial education programmes or support community credit unions.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Use mobile/agent banking to reach remote areas.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Benefit: wider access to safe saving, credit and insurance reduces vulnerability.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Limitation: costs for banks may be passed on, and excluded groups may still lack income or literacy to use services.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) basic accounts, financial education, agent banking (b) inclusion benefit vs cost/usage limits",
                commonErrors: ["Suggesting policies without any evaluation."],
              },
            },
            {
              id: "ecn10-u9-saving-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Assess the view that saving is always good for the economy.",
              parts: [
                { label: "a", prompt: "Explain two benefits of high saving.", marks: 4 },
                { label: "b", prompt: "Explain two drawbacks of high saving.", marks: 4 },
                { label: "c", prompt: "Reach a justified conclusion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Saving and the economy", statement: "Saving funds investment but may reduce demand." },
                ],
                steps: [
                  { reasoning: "(a) Benefit 1: provides funds for investment in capital, raising long-run growth.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit 2: finances government and corporate borrowing through bond markets.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Drawback 1: high saving means low consumption — aggregate demand falls, risking unemployment.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Drawback 2: if saving exceeds investment, spare funds may sit idle or flow abroad.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Conclusion: saving is beneficial when it funds productive investment, but harmful if it simply reduces demand — balance is needed.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Saving funds investment but can reduce demand — beneficial only when matched by investment.",
                commonErrors: ["One-sided argument; no conclusion linking to investment."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u9-lesson-9-3-notes",
      title: "Financial Markets and Saving — notes",
      summary: "Money vs capital markets, shares vs bonds, intermediaries channelling saving into investment, and financial inclusion.",
      sections: [
        { heading: "Key idea", body: "Financial intermediaries channel household saving into business and government investment — a key driver of growth." },
        { heading: "Shares vs bonds", body: "Shares = ownership with variable returns and higher risk; bonds = loans with fixed interest and lower risk." },
        { heading: "Inclusion", body: "Financial exclusion leaves people dependent on cash and high-cost credit; policy can widen access." },
      ],
    },
  },
];

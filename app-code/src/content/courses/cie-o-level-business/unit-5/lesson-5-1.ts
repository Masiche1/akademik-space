import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olbus-u5-lesson-5-1",
  code: "5-1",
  title: "Sources of Finance",
  goal: "I CAN distinguish between internal and external sources of finance.",
  standards: ["7100 5.1"],
  vocabulary: [
    { term: "Internal finance", definition: "Money from within the business." },
    { term: "External finance", definition: "Money from outside the business." },
    { term: "Retained profit", definition: "Profit kept in the business rather than distributed." },
    { term: "Bank loan", definition: "Borrowed money from a bank, repaid with interest." },
    { term: "Share capital", definition: "Money raised by selling shares in a company." },
    { term: "Overdraft", definition: "Short-term borrowing from bank up to a limit." },
    { term: "Leasing", definition: "Renting equipment/assets instead of buying." },
  ],
  concepts: [
    {
      id: "olbus-u5-sources",
      title: "Internal and external finance",
      skill: "Identify sources of finance and their characteristics.",
      lesson: {
        sections: [
          { heading: "Internal sources", body: "- **Retained profit**: profit reinvested — no interest, no dilution.\n- **Sale of assets**: selling equipment/property.\n- **Owner's investment**: additional capital from owner(s)." },
          { heading: "External sources", body: "- **Bank loans/overdrafts**: borrowed money with interest.\n- **Share capital**: selling shares (companies only).\n- **Leasing/hire purchase**: renting equipment.\n- **Trade credit**: supplier allows delayed payment.\n- **Grants**: government support for specific purposes." },
          { heading: "Choosing", body: "Short-term needs → overdraft/trade credit; long-term → loans/share capital; expansion → retained profit or shares." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A business needs $5,000 for 3 months to cover cash flow gap. Best source?",
          solution: "Bank overdraft or trade credit — short-term, flexible, quick.",
        },
      },
      questions: [
        {
          id: "olbus-u5-sf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Internal sources of finance include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leasing" },
            { id: "b", text: "Bank loans" },
            { id: "c", text: "Retained profit" },
            { id: "d", text: "Share capital" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Internal finance", statement: "From within." }], steps: [{ reasoning: "Retained profit is internal.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-sf-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two external sources of finance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "External finance", statement: "From outside." }], steps: [
            { reasoning: "Bank loans, overdrafts, share capital, leasing, trade credit, grants — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: bank loans, overdrafts, share capital, leasing, trade credit." },
        },
        {
          id: "olbus-u5-sf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Compare retained profit and bank loan as sources of finance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Finance comparison", statement: "Internal vs external." }], steps: [
            { reasoning: "Retained profit: no interest, no dilution, but limited amount.", marks: 1, markCode: "AO1" },
            { reasoning: "Bank loan: larger amounts available, but interest + repayment obligation.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Retained profit = free but limited; loan = more capital but costly." },
        },
        {
          id: "olbus-u5-sf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Sources of finance review.",
          parts: [
            { label: "a", prompt: "Name two internal sources.", marks: 2 },
            { label: "b", prompt: "Name three external sources.", marks: 3 },
            { label: "c", prompt: "When is retained profit best?", marks: 2 },
            { label: "d", prompt: "When is share capital appropriate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Sources of finance", statement: "Types and selection." },
          ], steps: [
            { part: "a", reasoning: "Retained profit, asset sales, owner investment — any two.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Bank loans, overdrafts, shares, leasing, trade credit — any three.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Second source.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Third source.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Small needs, established profitable business.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Large expansion needing permanent capital (companies).", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 internal (b) 3 external (c) small/profitable (d) large expansion" },
        },
        {
          id: "olbus-u5-sf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is an internal source of finance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leasing" },
            { id: "b", text: "Sale of assets" },
            { id: "c", text: "Bank loan" },
            { id: "d", text: "Share capital" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Internal finance", statement: "From within the business." }], steps: [{ reasoning: "Selling assets is internal.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-sf-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Trade credit is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A supplier allowing delayed payment" },
            { id: "b", text: "Money raised by selling shares" },
            { id: "c", text: "A government grant" },
            { id: "d", text: "An interest-free bank loan" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Trade credit", statement: "Supplier financing." }], steps: [{ reasoning: "Delayed payment to supplier.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-sf-q7", difficulty: "core", totalMarks: 1,
          stem: "A limited company planning a major expansion needs large permanent capital without giving up ownership. The most suitable source is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Share capital" },
            { id: "b", text: "Owner's short-term savings" },
            { id: "c", text: "Overdraft" },
            { id: "d", text: "Trade credit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Choosing finance", statement: "Match source to need." }], steps: [{ reasoning: "Large permanent capital = share capital.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-sf-q8", difficulty: "core", totalMarks: 1,
          stem: "An overdraft is most suitable for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Long-term expansion plans" },
            { id: "b", text: "Short-term cash needs" },
            { id: "c", text: "Buying a factory outright" },
            { id: "d", text: "Paying dividends to shareholders" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Overdraft", statement: "Short-term flexible borrowing." }], steps: [{ reasoning: "Overdrafts are short-term.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-sf-q9", difficulty: "core", totalMarks: 1,
          stem: "Leasing means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keeping all profits in the business" },
            { id: "b", text: "Selling shares to raise capital" },
            { id: "c", text: "Borrowing money from a bank" },
            { id: "d", text: "Renting equipment instead of buying it" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Leasing", statement: "Renting assets." }], steps: [{ reasoning: "Lease = rent assets.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-sf-q10", difficulty: "core", totalMarks: 2,
          stem: "A business raises $8,000 from retained profit and $12,000 from a bank loan. Calculate the amount of internal finance.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Internal vs external", statement: "Retained profit is internal." }], steps: [
            { part: "a", reasoning: "Internal = retained profit = $8,000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Internal finance = 8000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 8000" },
        },
        {
          id: "olbus-u5-sf-q11", difficulty: "core", totalMarks: 2,
          stem: "A business needs $25,000 in total finance. It uses $10,000 of retained profit. Calculate how much must come from external sources.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Finance gap", statement: "Total minus internal." }], steps: [
            { part: "a", reasoning: "External = 25000 - 10000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "External = 15000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 15000" },
        },
        {
          id: "olbus-u5-sf-q12", difficulty: "core", totalMarks: 2,
          stem: "State one advantage and one disadvantage of using retained profit as a source of finance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Retained profit", statement: "No cost but limited." }], steps: [
            { reasoning: "Advantage: no interest, no dilution of ownership.", marks: 1, markCode: "AO2" },
            { reasoning: "Disadvantage: limited amount; profit not distributed.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Free finance but limited in amount." },
        },
        {
          id: "olbus-u5-sf-q13", difficulty: "core", totalMarks: 2,
          stem: "Explain why a business with a temporary cash shortfall might prefer an overdraft to a long-term bank loan.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Overdraft vs loan", statement: "Short-term flexibility." }], steps: [
            { reasoning: "Overdraft is flexible and quick for short-term needs.", marks: 1, markCode: "AO2" },
            { reasoning: "Long-term loan creates repayment burden beyond the shortfall period.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Overdraft suits temporary gaps; loans suit long-term needs." },
        },
        {
          id: "olbus-u5-sf-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Compare trade credit and leasing as sources of finance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Finance comparison", statement: "Different mechanisms." }], steps: [
            { reasoning: "Trade credit: supplier allows delayed payment for purchases.", marks: 1, markCode: "AO1" },
            { reasoning: "Leasing: renting equipment/assets over time with regular payments.", marks: 1, markCode: "AO1" },
            { reasoning: "Trade credit is interest-free short-term; leasing spreads asset cost.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Trade credit delays payment; leasing rents assets." },
        },
        {
          id: "olbus-u5-sf-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A business needs $30,000 for new equipment. It uses $10,000 of retained profit and borrows the rest from a bank. (a) Calculate the external finance needed. (b) If the loan costs $1,800 interest per year, state the annual cost of borrowing.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20000 }, { label: "b", answer: 1800 }] },
          markscheme: { principles: [{ kind: "principle", name: "Finance mix", statement: "Internal plus external." }], steps: [
            { part: "a", reasoning: "External = 30000 - 10000 = 20000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "External finance = 20000.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Annual interest cost = $1,800.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "**(a)** 20000 **(b)** 1800" },
        },
        {
          id: "olbus-u5-sf-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Sources of finance case study.",
          parts: [
            { label: "a", prompt: "Name two internal sources of finance.", marks: 1 },
            { label: "b", prompt: "Name two external sources suitable for short-term needs.", marks: 2 },
            { label: "c", prompt: "A profitable business wants to buy a $50,000 machine without giving up ownership. Suggest two suitable sources and justify your choice.", marks: 3 },
            { label: "d", prompt: "Why might a business wish to avoid issuing shares?", marks: 1 },
            { label: "e", prompt: "Evaluate retained profit versus a bank loan for a growing business.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Sources of finance", statement: "Types, selection and evaluation." },
          ], steps: [
            { part: "a", reasoning: "Retained profit, asset sales, owner's investment — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Overdraft or trade credit — short-term sources.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Second short-term source named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Retained profit (if sufficient) or bank loan/leasing — suitable for equipment.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Second suitable source named.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Justification linked to keeping ownership/long-term cost.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Dilutes ownership/control; dividends expected.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Retained profit: free but limited; loan: more capital but interest + repayment.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear evaluation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 internal (b) overdraft+trade credit (c) loan/leasing justified (d) dilution (e) evaluated" },
        },
      ],
    },
    {
      id: "olbus-u5-cashflow",
      title: "Cash Flow",
      skill: "Explain the importance of cash flow and prepare simple cash flow forecasts.",
      lesson: {
        sections: [
          { heading: "Cash flow vs profit", body: "Profit is accounting figure; cash flow is actual money in/out. A business can be profitable but fail if it runs out of cash." },
          { heading: "Cash flow forecast", body: "Predicts cash inflows (sales, loans) and outflows (expenses, purchases) over time. Identifies when cash might run short." },
          { heading: "Managing cash flow", body: "Delay payments to suppliers, speed up customer collections, arrange overdraft facilities, avoid over-investing in stock." },
        ],
        keyFormulas: [
          { name: "Net cash flow", statement: "Cash inflows - Cash outflows" },
        ],
        workedExample: {
          problem: "A business has $10,000 opening cash, expects $15,000 inflows and $18,000 outflows. Net cash flow?",
          solution: "Net cash flow = $15,000 - $18,000 = -$3,000. Closing cash = $10,000 - $3,000 = $7,000.",
        },
      },
      questions: [
        {
          id: "olbus-u5-cf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Cash flow is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total assets" },
            { id: "b", text: "Accounting profit" },
            { id: "c", text: "Actual money coming in and going out" },
            { id: "d", text: "Sales revenue" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Cash flow", statement: "Money in/out." }], steps: [{ reasoning: "Real cash movements.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-cf-q2", difficulty: "core", totalMarks: 2,
          stem: "Why can a profitable business still fail?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash flow", statement: "Profit ≠ cash." }], steps: [
            { reasoning: "Profit is accounting measure; cash might not be available when needed.", marks: 1, markCode: "AO2" },
            { reasoning: "Can run out of cash despite profits.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Profit ≠ cash; business needs actual cash to pay bills." },
        },
        {
          id: "olbus-u5-cf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Opening cash $5,000, inflows $12,000, outflows $10,000. Calculate closing cash.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash flow calc", statement: "In - out + opening." }], steps: [
            { reasoning: "Net flow = 12000 - 10000 = $2000.", marks: 1, markCode: "AO2" },
            { reasoning: "Closing = 5000 + 2000 = $7000.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct method.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$7,000" },
        },
        {
          id: "olbus-u5-cf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Cash flow review.",
          parts: [
            { label: "a", prompt: "Cash flow vs profit?", marks: 2 },
            { label: "b", prompt: "Purpose of cash flow forecast?", marks: 2 },
            { label: "c", prompt: "Opening $8k, inflow $20k, outflow $25k. Closing?", marks: 2 },
            { label: "d", prompt: "Two ways to improve cash flow?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Cash flow", statement: "Concept, forecast, management." },
          ], steps: [
            { part: "a", reasoning: "Cash = actual money; profit = accounting measure.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Predict cash position, identify shortfalls.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear purpose.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "8000 + 20000 - 25000 = $3000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Speed collections; delay payments / reduce stock / arrange overdraft.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Second method.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear methods.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) cash≠profit (b) predict position (c) 3000 (d) collections+payments" },
        },
        {
          id: "olbus-u5-cf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a cash inflow?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchase of stock" },
            { id: "b", text: "Rent paid" },
            { id: "c", text: "Wages paid" },
            { id: "d", text: "Cash received from sales" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Cash inflow", statement: "Money coming in." }], steps: [{ reasoning: "Sales receipts are inflows.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-cf-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The purpose of a cash flow forecast is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Predict future cash inflows and outflows" },
            { id: "b", text: "List business assets" },
            { id: "c", text: "Calculate annual profit" },
            { id: "d", text: "Set product prices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Cash flow forecast", statement: "Predicts position." }], steps: [{ reasoning: "Forecasts cash movements.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-cf-q7", difficulty: "core", totalMarks: 1,
          stem: "Net cash flow equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash inflows minus cash outflows" },
            { id: "b", text: "Assets minus liabilities" },
            { id: "c", text: "Sales minus costs" },
            { id: "d", text: "Cash outflows minus cash inflows" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Net cash flow", statement: "Inflows - outflows." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-cf-q8", difficulty: "core", totalMarks: 1,
          stem: "Which action would most directly improve a business's cash flow?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speeding up collection of money owed by customers" },
            { id: "b", text: "Increasing advertising spend" },
            { id: "c", text: "Hiring more staff" },
            { id: "d", text: "Buying more stock" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Improving cash flow", statement: "Speed up inflows." }], steps: [{ reasoning: "Faster collections = quicker inflows.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-cf-q9", difficulty: "core", totalMarks: 1,
          stem: "Why might a business keep a cash reserve?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To pay dividends to shareholders" },
            { id: "b", text: "To increase profits" },
            { id: "c", text: "To reduce tax payments" },
            { id: "d", text: "To cover unexpected cash shortfalls" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Cash reserve", statement: "Buffer against shortfalls." }], steps: [{ reasoning: "Reserve covers emergencies.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-cf-q10", difficulty: "core", totalMarks: 2,
          stem: "A business has opening cash of $12,000, expected inflows of $25,000 and outflows of $30,000. Calculate the closing cash balance.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cash flow calc", statement: "Opening + inflows - outflows." }], steps: [
            { part: "a", reasoning: "Closing = 12000 + 25000 - 30000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Closing = 7000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 7000" },
        },
        {
          id: "olbus-u5-cf-q11", difficulty: "core", totalMarks: 2,
          stem: "In one month a business receives $18,000 in cash and pays out $15,000. Calculate the net cash flow.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net cash flow", statement: "Inflows - outflows." }], steps: [
            { part: "a", reasoning: "Net = 18000 - 15000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net = 3000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 3000" },
        },
        {
          id: "olbus-u5-cf-q12", difficulty: "core", totalMarks: 2,
          stem: "Give two ways a business can improve its cash flow position.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash flow management", statement: "Inflow/outflow control." }], steps: [
            { reasoning: "Speed up collections / offer early-payment discounts.", marks: 1, markCode: "AO2" },
            { reasoning: "Delay supplier payments / reduce stock / arrange overdraft.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Faster collections and slower payments." },
        },
        {
          id: "olbus-u5-cf-q13", difficulty: "core", totalMarks: 2,
          stem: "Explain how delaying payment to suppliers can help a business manage its cash flow.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trade credit", statement: "Delaying outflows." }], steps: [
            { reasoning: "Keeps cash in the business longer before paying.", marks: 1, markCode: "AO2" },
            { reasoning: "Improves cash position without new borrowing.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Keeps cash longer, improving the cash position." },
        },
        {
          id: "olbus-u5-cf-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A cash flow forecast shows that a business will run out of cash in the third month. Suggest three actions the business could take and explain why each helps.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash shortfall", statement: "Corrective actions." }], steps: [
            { reasoning: "Speed up customer collections / offer discounts for early payment.", marks: 1, markCode: "AO2" },
            { reasoning: "Delay payments to suppliers / negotiate longer credit terms.", marks: 1, markCode: "AO2" },
            { reasoning: "Arrange an overdraft or bank loan for the gap.", marks: 1, markCode: "AO2" },
            { reasoning: "Each action clearly linked to bridging the shortfall.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Collections, delayed payments, or overdraft bridge the gap." },
        },
        {
          id: "olbus-u5-cf-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Month 1 closing cash is $9,000. In month 2 the business expects inflows of $14,000 and outflows of $11,000. (a) Calculate the net cash flow for month 2. (b) Calculate the closing cash balance for month 2.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3000 }, { label: "b", answer: 12000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cash flow calc", statement: "Month-by-month position." }], steps: [
            { part: "a", reasoning: "Net = 14000 - 11000 = 3000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net cash flow = 3000.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Closing = 9000 + 3000 = 12000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Closing cash = 12000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 3000 **(b)** 12000" },
        },
        {
          id: "olbus-u5-cf-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Cash flow review.",
          parts: [
            { label: "a", prompt: "Distinguish between cash flow and profit.", marks: 2 },
            { label: "b", prompt: "State the purpose of a cash flow forecast.", marks: 1 },
            { label: "c", prompt: "Opening cash $6,000; inflows $20,000; outflows $19,000. Calculate closing cash.", marks: 2 },
            { label: "d", prompt: "Give two examples of cash inflows and two of cash outflows.", marks: 2 },
            { label: "e", prompt: "Explain why a profitable business can still fail.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Cash flow", statement: "Concept, forecast and management." },
          ], steps: [
            { part: "a", reasoning: "Cash flow = actual money in/out; profit = accounting measure.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Predict cash position and identify shortfalls.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Closing = 6000 + 20000 - 19000 = 7000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Inflows: sales receipts, loans. Outflows: wages, rent, purchases — two each.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Correct examples.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Profit is not cash; bills still need paying.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) cash≠profit (b) predict (c) 7000 (d) examples (e) cash needed" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u5-5-1-notes", title: "Business finance — notes", summary: "Sources of finance and cash flow management.",
      sections: [
        { heading: "Sources", body: "Internal: retained profit, asset sales. External: loans, shares, leasing, trade credit." },
        { heading: "Cash flow", body: "Profit ≠ cash; forecast inflows/outflows to avoid shortfalls." },
      ] },
  ],
};

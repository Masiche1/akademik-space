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
            { id: "a", text: "Retained profit" }, { id: "b", text: "Bank loans" }, { id: "c", text: "Share capital" }, { id: "d", text: "Leasing" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Actual money coming in and going out" }, { id: "b", text: "Accounting profit" }, { id: "c", text: "Total assets" }, { id: "d", text: "Sales revenue" },
          ], correctChoiceId: "a" },
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

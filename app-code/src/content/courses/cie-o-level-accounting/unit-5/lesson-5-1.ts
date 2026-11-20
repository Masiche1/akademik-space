import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olacc-u5-lesson-5-1",
  code: "5-1",
  title: "Introduction to Incomplete Records",
  goal: "I CAN identify incomplete records and the information needed to reconstruct them.",
  standards: ["7706 5.1"],
  vocabulary: [
    { term: "Incomplete records", definition: "Accounting system lacking full double-entry bookkeeping." },
    { term: "Mark-up", definition: "Profit added to cost price — percentage on cost." },
    { term: "Margin", definition: "Profit as percentage of selling price." },
    { term: "Opening capital", definition: "Capital at start of period." },
    { term: "Closing capital", definition: "Capital at end of period." },
    { term: "Capital introduced", definition: "Additional investment during period." },
    { term: "Drawings", definition: "Owner's withdrawals for personal use." },
  ],
  concepts: [
    {
      id: "olacc-u5-intro",
      title: "What are incomplete records?",
      skill: "Identify incomplete records and the data needed for reconstruction.",
      lesson: {
        sections: [
          { heading: "Definition", body: "Some businesses don't keep full double-entry books — maybe only a cash book, or just sales/purchase totals. **Incomplete records** means we must work backwards from partial information to find missing figures." },
          { heading: "Key relationships", body: "- **Capital introduced** = closing capital - opening capital + drawings - profit (or profit = closing - opening + drawings - introduced).\n- **Sales** = cost of sales + gross profit.\n- **Gross profit** = sales - cost of sales." },
          { heading: "Common questions", body: "Given opening/closing capital, drawings, introduced capital → find profit. Given mark-up/margin → find cost of sales or sales. Given totals → find missing figures." },
        ],
        keyFormulas: [
          { name: "Profit", statement: "Closing capital - Opening capital + Drawings - Capital introduced" },
          { name: "Mark-up", statement: "Profit / Cost price × 100" },
          { name: "Margin", statement: "Profit / Selling price × 100" },
        ],
        workedExample: {
          problem: "Opening capital $5000, closing capital $8000, drawings $1000, capital introduced $500. Find profit.",
          solution: "Profit = 8000 - 5000 + 1000 - 500 = $3500.",
        },
      },
      questions: [
        {
          id: "olacc-u5-ir-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Incomplete records means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Not all transactions are fully recorded" }, { id: "b", text: "No records exist" }, { id: "c", text: "Only bank records" }, { id: "d", text: "Computerised records" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Incomplete records", statement: "Partial records." }], steps: [{ reasoning: "Partial recording.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Partial records" },
        },
        {
          id: "olacc-u5-ir-q2", difficulty: "core", totalMarks: 2,
          stem: "Formula for profit from capital accounts?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit formula", statement: "CC - OC + D - CI." }], steps: [
            { reasoning: "Closing capital - opening + drawings - introduced.", marks: 1, markCode: "M" },
            { reasoning: "Correct formula.", marks: 1, markCode: "A" },
          ], finalAnswer: "Profit = Closing capital - Opening capital + Drawings - Capital introduced." },
        },
        {
          id: "olacc-u5-ir-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Opening capital $3000, closing $6000, drawings $800, introduced $200. Find profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit calc", statement: "CC-OC+D-CI." }], steps: [
            { reasoning: "$6000 - $3000 + $800 - $200.", marks: 1, markCode: "M" },
            { reasoning: "$3600.", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,600" },
        },
        {
          id: "olacc-u5-ir-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Incomplete records intro review.",
          parts: [
            { label: "a", prompt: "What are incomplete records?", marks: 2 },
            { label: "b", prompt: "Profit formula?", marks: 2 },
            { label: "c", prompt: "OC $2000, CC $4500, D $500, CI $300. Profit?", marks: 2 },
            { label: "d", prompt: "What is mark-up?", marks: 1 },
            { label: "e", prompt: "Distinguish mark-up from margin.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Incomplete records", statement: "Concepts and formulas." },
          ], steps: [
            { part: "a", reasoning: "Partial transaction records.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "CC - OC + D - CI.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$2700.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Profit % on cost.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Mark-up on cost; margin on selling price.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) partial records (b) CC-OC+D-CI (c) 2700 (d) %on cost (e) cost vs selling" },
        },
      ],
    },
    {
      id: "olacc-u5-markup",
      title: "Mark-up and margin",
      skill: "Calculate sales, cost of sales and profit using mark-up and margin percentages.",
      lesson: {
        sections: [
          { heading: "Mark-up", body: "Profit as % of COST: selling price = cost × (1 + mark-up%). E.g. cost $100, mark-up 25% → selling price $125, profit $25." },
          { heading: "Margin", body: "Profit as % of SELLING price: profit = selling price × margin%. E.g. selling $200, margin 20% → profit $40, cost $160." },
          { heading: "Conversions", body: "Mark-up 25% = margin 20% (since margin = mark-up/(100+mark-up)). Mark-up 50% = margin 33.3%." },
        ],
        keyFormulas: [
          { name: "Mark-up", statement: "Selling = Cost × (1 + MU/100)" },
          { name: "Margin", statement: "Profit = Sales × Margin/100" },
        ],
        workedExample: {
          problem: "Goods cost $80, sold with 25% mark-up. Find selling price and profit.",
          solution: "SP = 80 × 1.25 = $100. Profit = $20.",
        },
      },
      questions: [
        {
          id: "olacc-u5-mu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Mark-up is calculated on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cost price" }, { id: "b", text: "Selling price" }, { id: "c", text: "Profit" }, { id: "d", text: "Revenue" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Mark-up", statement: "On cost." }], steps: [{ reasoning: "On cost price.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cost price" },
        },
        {
          id: "olacc-u5-mu-q2", difficulty: "core", totalMarks: 2,
          stem: "Cost $200, mark-up 30%. Find selling price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Mark-up", statement: "Cost × (1+MU)." }], steps: [
            { reasoning: "$200 × 1.3 = $260.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$260" },
        },
        {
          id: "olacc-u5-mu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Sales $5000, margin 20%. Find profit and cost of sales.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Margin", statement: "Profit = Sales × M%." }], steps: [
            { reasoning: "Profit = $5000 × 20% = $1000.", marks: 1, markCode: "M" },
            { reasoning: "CoS = $5000 - $1000 = $4000.", marks: 1, markCode: "M" },
            { reasoning: "Correct profit.", marks: 1, markCode: "M" },
            { reasoning: "Correct CoS.", marks: 1, markCode: "A" },
          ], finalAnswer: "Profit $1000; cost of sales $4000." },
        },
        {
          id: "olacc-u5-mu-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Mark-up/margin review.",
          parts: [
            { label: "a", prompt: "Define mark-up.", marks: 1 },
            { label: "b", prompt: "Define margin.", marks: 1 },
            { label: "c", prompt: "Cost $150, MU 40%. SP?", marks: 2 },
            { label: "d", prompt: "Sales $800, margin 25%. Profit?", marks: 2 },
            { label: "e", prompt: "Relate MU 50% to margin.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Mark-up/margin", statement: "Definitions, calcs, conversion." },
          ], steps: [
            { part: "a", reasoning: "Profit % on cost.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Profit % on selling price.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$210.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$200.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Margin = MU/(100+MU).", marks: 1, markCode: "M" },
            { part: "e", reasoning: "$50/150 = 33.3%$.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct conversion.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) %on cost (b) %on SP (c) 210 (d) 200 (e) 33.3%" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u5-5-1-notes", title: "Incomplete records — notes", summary: "Profit from capital accounts and mark-up/margin calculations.",
      sections: [
        { heading: "Profit", body: "CC - OC + drawings - capital introduced = profit." },
        { heading: "Mark-up/margin", body: "Mark-up on cost; margin on selling price; margin = MU/(100+MU)." },
      ] },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olacc-u5-lesson-5-3",
  code: "5-3",
  title: "Stock valuation and adjustments",
  goal: "I CAN value stock and adjust figures for drawings, returns and expenses in incomplete records.",
  standards: ["7706 5.3"],
  vocabulary: [
    { term: "Stock valuation", definition: "Valuing inventory at cost or net realisable value." },
    { term: "FIFO", definition: "First in, first out — oldest stock sold first." },
    { term: "AVCO", definition: "Average cost — weighted average of purchases." },
    { term: "NRV", definition: "Net realisable value — expected selling price less costs to sell." },
    { term: "Private expenses", definition: "Owner's personal expenses paid from business." },
  ],
  concepts: [
    {
      id: "olacc-u5-stock",
      title: "Stock valuation methods",
      skill: "Value closing stock using cost, FIFO or AVCO methods.",
      lesson: {
        sections: [
          { heading: "Cost basis", body: "Stock valued at cost of purchase plus costs to bring it to present location/condition. If NRV < cost, value at NRV (lower of cost and NRV)." },
          { heading: "FIFO", body: "First items purchased are first sold. Closing stock = most recent purchases. Useful when prices rise." },
          { heading: "AVCO", body: "Average cost = total cost of goods available / total quantity. Closing stock valued at this average." },
        ],
        keyFormulas: [
          { name: "AVCO", statement: "Average cost = Total cost / Total quantity" },
          { name: "Lower of", statement: "Stock valued at lower of cost and NRV" },
        ],
        workedExample: {
          problem: "Bought 10 @ $5, then 10 @ $7. 15 sold. Find closing stock under FIFO.",
          solution: "FIFO: 10 @ $5 sold first, then 5 @ $7. Closing = 5 @ $7 = $35.",
        },
      },
      questions: [
        {
          id: "olacc-u5-sv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Stock should be valued at the lower of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cost and NRV" }, { id: "b", text: "Cost and selling price" }, { id: "c", text: "NRV and profit" }, { id: "d", text: "Cost and margin" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Stock valuation", statement: "Lower of cost/NRV." }], steps: [{ reasoning: "Prudence principle.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cost and NRV" },
        },
        {
          id: "olacc-u5-sv-q2", difficulty: "core", totalMarks: 2,
          stem: "Bought 20 @ $4 and 20 @ $6. 25 sold. Closing stock under FIFO?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "FIFO", statement: "Oldest sold first." }], steps: [
            { reasoning: "15 units @ $6 remain.", marks: 1, markCode: "M" },
            { reasoning: "$90.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90 (15 × $6)" },
        },
        {
          id: "olacc-u5-sv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "10 @ $5 + 10 @ $7 = 20 units, total $120. 15 sold. Find AVCO closing stock.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "AVCO", statement: "Average × remaining." }], steps: [
            { reasoning: "AVCO = $120/20 = $6.", marks: 1, markCode: "M" },
            { reasoning: "5 units remain × $6 = $30.", marks: 1, markCode: "M" },
            { reasoning: "Correct method.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30" },
        },
        {
          id: "olacc-u5-sv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Stock valuation review.",
          parts: [
            { label: "a", prompt: "Lower of cost and what?", marks: 1 },
            { label: "b", prompt: "What does FIFO assume?", marks: 1 },
            { label: "c", prompt: "10@5 + 10@7, 15 sold. FIFO stock?", marks: 2 },
            { label: "d", prompt: "Same data. AVCO stock?", marks: 2 },
            { label: "e", prompt: "Why value at lower of cost/NRV?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Stock valuation", statement: "Methods and prudence." },
          ], steps: [
            { part: "a", reasoning: "NRV.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Oldest sold first.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "5 @ $7 = $35.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "AVCO $6 × 5 = $30.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Avoid overstating assets.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Prudence/conservatism.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) NRV (b) oldest first (c) 35 (d) 30 (e) prudence" },
        },
      ],
    },
    {
      id: "olacc-u5-adjust",
      title: "Adjustments in incomplete records",
      skill: "Adjust profit for private expenses, returns and other items.",
      lesson: {
        sections: [
          { heading: "Private expenses", body: "Owner's personal expenses paid by business (e.g. groceries, rent) must be added back to profit — they are drawings, not business expenses." },
          { heading: "Other adjustments", body: "Goods taken for personal use = drawings at cost (added back if expensed). Discounts, returns and accrued/prepaid expenses also adjust figures." },
          { heading: "Calculation order", body: "1. Find profit from capital accounts. 2. Add back private expenses/drawings treated as expenses. 3. Deduct business expenses not yet recorded." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Profit from capital accounts $5000. Private expenses $800 were paid from business account and included in expenses. Adjusted profit?",
          solution: "Adjusted profit = 5000 + 800 = $5800.",
        },
      },
      questions: [
        {
          id: "olacc-u5-adj-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Private expenses paid by the business should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Added back to profit" }, { id: "b", text: "Deducted from profit" }, { id: "c", text: "Ignored" }, { id: "d", text: "Recorded as revenue" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Private expenses", statement: "Add back." }], steps: [{ reasoning: "They are drawings not expenses.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Added back" },
        },
        {
          id: "olacc-u5-adj-q2", difficulty: "core", totalMarks: 2,
          stem: "Profit $4000, private expenses $600. Adjusted profit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Adjustment", statement: "Add back private." }], steps: [
            { reasoning: "$4000 + $600 = $4600.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4,600" },
        },
        {
          id: "olacc-u5-adj-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Profit $7000. Business paid owner's rent $1200 (in expenses) and owner's groceries $400. Adjusted profit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Adjustments", statement: "Add back all private." }], steps: [
            { reasoning: "Add back $1600.", marks: 1, markCode: "M" },
            { reasoning: "$7000 + $1600 = $8600.", marks: 1, markCode: "M" },
            { reasoning: "Correct items.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$8,600" },
        },
        {
          id: "olacc-u5-adj-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Adjustments review.",
          parts: [
            { label: "a", prompt: "Define private expenses.", marks: 1 },
            { label: "b", prompt: "How are they treated?", marks: 1 },
            { label: "c", prompt: "Profit $5000, private exp $700. Adjusted?", marks: 1 },
            { label: "d", prompt: "Goods taken for own use are…", marks: 1 },
            { label: "e", prompt: "Profit $6000, private $500, unrecorded business exp $300. Adjusted?", marks: 2 },
            { label: "f", prompt: "Why adjust at all?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Adjustments", statement: "Private items and accuracy." },
          ], steps: [
            { part: "a", reasoning: "Owner's personal costs paid by business.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Added back to profit (drawings).", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$5700.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Drawings at cost.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$6200.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Reflect true business performance.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Separate personal from business.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) personal costs (b) add back (c) 5700 (d) drawings (e) 6200 (f) true profit" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u5-5-3-notes", title: "Stock and adjustments — notes", summary: "FIFO/AVCO valuation and adjusting profit for private items.",
      sections: [
        { heading: "Stock", body: "Lower of cost and NRV; FIFO = oldest sold first; AVCO = average cost." },
        { heading: "Adjustments", body: "Add back private expenses and drawings treated as expenses; deduct unrecorded business costs." },
      ] },
  ],
};

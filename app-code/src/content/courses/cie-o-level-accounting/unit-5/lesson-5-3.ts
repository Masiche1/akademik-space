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
            { id: "a", text: "Cost and selling price" },
            { id: "b", text: "Cost and margin" },
            { id: "c", text: "Cost and NRV" },
            { id: "d", text: "NRV and profit" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Stock valuation", statement: "Lower of cost/NRV." }], steps: [{ reasoning: "Prudence principle.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Cost and NRV" },
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
        {
          id: "olacc-u5-sv-q5", difficulty: "foundation", totalMarks: 1,
          stem: "FIFO assumes that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The oldest stock is sold first" },
            { id: "b", text: "Stock is valued at NRV" },
            { id: "c", text: "All stock is sold at average cost" },
            { id: "d", text: "Newest stock is sold first" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "FIFO", statement: "First in, first out." }], steps: [{ reasoning: "Oldest purchases leave stock first.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Oldest sold first" },
        },
        {
          id: "olacc-u5-sv-q6", difficulty: "core", totalMarks: 2,
          stem: "Bought 10 units @ $5 then 10 units @ $7; 15 units sold. Enter the FIFO closing stock value.",
          response: { type: "numeric", parts: [{ label: "Closing stock ($)", answer: 35 }] },
          markscheme: { principles: [{ kind: "method", name: "FIFO", statement: "Oldest sold first." }], steps: [
            { reasoning: "Remaining 5 units @ $7 = $35$.", working: "5*7", marks: 1, markCode: "M" },
            { reasoning: "Closing stock is $35.", marks: 1, markCode: "A" },
          ], finalAnswer: "$35" },
        },
        {
          id: "olacc-u5-sv-q7", difficulty: "core", totalMarks: 2,
          stem: "Bought 10 @ $5 and 10 @ $7 (total $120); 15 sold. Enter the AVCO closing stock value.",
          response: { type: "numeric", parts: [{ label: "Closing stock ($)", answer: 30 }] },
          markscheme: { principles: [{ kind: "method", name: "AVCO", statement: "Average × remaining." }], steps: [
            { reasoning: "AVCO = $120/20 = $6$; 5 remain → $30$.", working: "120/20*5", marks: 1, markCode: "M" },
            { reasoning: "Closing stock is $30.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30" },
        },
        {
          id: "olacc-u5-sv-q8", difficulty: "core", totalMarks: 1,
          stem: "Under AVCO, closing stock is valued at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The most recent purchase price" },
            { id: "b", text: "Net realisable value" },
            { id: "c", text: "The oldest purchase price" },
            { id: "d", text: "The weighted average cost of all purchases" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "method", name: "AVCO", statement: "Average cost." }], steps: [{ reasoning: "AVCO uses average cost per unit.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Average cost" },
        },
        {
          id: "olacc-u5-sv-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Stock costing $500 has an NRV of $420. Enter the value at which it must appear in the statement of financial position.",
          response: { type: "numeric", parts: [{ label: "Stock value ($)", answer: 420 }] },
          markscheme: { principles: [{ kind: "principle", name: "Lower of cost/NRV", statement: "Prudence valuation." }], steps: [
            { reasoning: "NRV $420 < cost $500 → value at $420.", working: "min(500,420)", marks: 1, markCode: "M" },
            { reasoning: "Stock is valued at $420.", marks: 1, markCode: "A" },
          ], finalAnswer: "$420" },
        },
        {
          id: "olacc-u5-sv-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain why FIFO is often preferred when purchase prices are rising.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "FIFO", statement: "Oldest cost leaves stock." }], steps: [
            { reasoning: "FIFO values closing stock at recent (higher) prices.", marks: 1, markCode: "M" },
            { reasoning: "This gives a more realistic current value of assets.", marks: 1, markCode: "A" },
          ], finalAnswer: "Closing stock reflects recent higher prices — more realistic asset value." },
        },
        {
          id: "olacc-u5-sv-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Bought 5 units @ $4 and 5 units @ $8; 6 units sold. Enter (a) FIFO closing stock and (b) AVCO closing stock.",
          response: { type: "numeric", parts: [
            { label: "(a) FIFO stock ($)", answer: 32 },
            { label: "(b) AVCO stock ($)", answer: 24 },
          ] },
          markscheme: { principles: [{ kind: "method", name: "FIFO/AVCO", statement: "Both methods." }], steps: [
            { reasoning: "FIFO: 4 @ $8 remain = $32$.", working: "4*8", marks: 1, markCode: "M" },
            { reasoning: "AVCO = $60/10 = $6$; 4 remain = $24$.", working: "(5*4+5*8)/10*4", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $32 (b) $24" },
        },
        {
          id: "olacc-u5-sv-q12", difficulty: "challenge", totalMarks: 1,
          stem: "When purchase prices are rising, which method gives the higher closing stock value?",
          response: { type: "mcq", choices: [
            { id: "a", text: "FIFO" },
            { id: "b", text: "Both give the same value" },
            { id: "c", text: "AVCO" },
            { id: "d", text: "Neither — NRV is used" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "comparison", name: "FIFO vs AVCO", statement: "Rising prices effect." }], steps: [{ reasoning: "FIFO keeps recent high-cost units in stock.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** FIFO" },
        },
        {
          id: "olacc-u5-sv-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Bought 20 units @ $6 and 10 units @ $9; 25 units sold. Enter (a) average cost per unit and (b) AVCO closing stock value.",
          response: { type: "numeric", parts: [
            { label: "(a) Average cost ($)", answer: 7 },
            { label: "(b) Closing stock ($)", answer: 35 },
          ] },
          markscheme: { principles: [{ kind: "method", name: "AVCO", statement: "Total cost / total qty." }], steps: [
            { reasoning: "AVCO = $210/30 = $7$.", working: "(20*6+10*9)/30", marks: 1, markCode: "M" },
            { reasoning: "5 units × $7 = $35$.", working: "5*7", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $7 (b) $35" },
        },
        {
          id: "olacc-u5-sv-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the 'lower of cost and NRV' rule for stock valuation, with an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Prudence", statement: "Don't overstate assets." }], steps: [
            { reasoning: "Stock valued at cost unless NRV is lower.", marks: 1, markCode: "M" },
            { reasoning: "NRV = expected selling price less costs to sell.", marks: 1, markCode: "M" },
            { reasoning: "Example: cost $100, NRV $80 → value at $80.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Value at lower of cost and NRV — e.g. cost $100, NRV $80 → $80." },
        },
        {
          id: "olacc-u5-sv-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Which cost is included when valuing stock at cost?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Office rent" },
            { id: "b", text: "The owner's drawings" },
            { id: "c", text: "Transport costs bringing stock to the store" },
            { id: "d", text: "Advertising costs" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Cost of stock", statement: "Cost to present location/condition." }], steps: [{ reasoning: "Costs to bring stock to condition are included.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Transport costs" },
        },
        {
          id: "olacc-u5-sv-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Stock valuation — extended review.",
          parts: [
            { label: "a", prompt: "Define NRV.", marks: 1 },
            { label: "b", prompt: "What does FIFO stand for?", marks: 1 },
            { label: "c", prompt: "5 @ $3 and 5 @ $5; 7 sold. FIFO stock?", marks: 2 },
            { label: "d", prompt: "Same data. AVCO stock?", marks: 2 },
            { label: "e", prompt: "Cost $200, NRV $150. Statement value?", marks: 1 },
            { label: "f", prompt: "Why use lower of cost and NRV?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "method", name: "Stock valuation", statement: "NRV, FIFO, AVCO, prudence." },
          ], steps: [
            { part: "a", reasoning: "Net realisable value.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "First in, first out.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "3 @ $5 = $15$.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "AVCO $4 × 3 = $12$.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$150$.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Prudence — don't overstate assets.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) NRV (b) FIFO (c) 15 (d) 12 (e) 150 (f) prudence" },
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
            { id: "a", text: "Recorded as revenue" },
            { id: "b", text: "Ignored" },
            { id: "c", text: "Deducted from profit" },
            { id: "d", text: "Added back to profit" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Private expenses", statement: "Add back." }], steps: [{ reasoning: "They are drawings not expenses.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Added back" },
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
        {
          id: "olacc-u5-adj-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Goods taken by the owner for personal use are treated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales" },
            { id: "b", text: "Purchases" },
            { id: "c", text: "Drawings" },
            { id: "d", text: "A business expense" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Drawings", statement: "Owner's withdrawals." }], steps: [{ reasoning: "Personal use of goods is drawings at cost.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Drawings" },
        },
        {
          id: "olacc-u5-adj-q6", difficulty: "core", totalMarks: 2,
          stem: "Profit $4,000, private expenses $600 paid from the business. Enter the adjusted profit.",
          response: { type: "numeric", parts: [{ label: "Adjusted profit ($)", answer: 4600 }] },
          markscheme: { principles: [{ kind: "principle", name: "Private expenses", statement: "Add back to profit." }], steps: [
            { reasoning: "$4000 + $600 = $4600$.", working: "4000+600", marks: 1, markCode: "M" },
            { reasoning: "Adjusted profit is $4,600.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4,600" },
        },
        {
          id: "olacc-u5-adj-q7", difficulty: "core", totalMarks: 2,
          stem: "Profit $5,000; private rent $900 and private groceries $300 were paid from the business; an unrecorded business expense of $400 exists. Enter (a) total private items and (b) adjusted profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Private items ($)", answer: 1200 },
            { label: "(b) Adjusted profit ($)", answer: 5800 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Adjustments", statement: "+ private, - unrecorded." }], steps: [
            { reasoning: "Private items = $900 + $300 = $1200$.", working: "900+300", marks: 1, markCode: "M" },
            { reasoning: "Adjusted profit = $5000 + $1200 - $400 = $5800$.", working: "5000+1200-400", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,200 (b) $5,800" },
        },
        {
          id: "olacc-u5-adj-q8", difficulty: "core", totalMarks: 1,
          stem: "Private expenses are added back to profit because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The owner requires it" },
            { id: "b", text: "They increase sales" },
            { id: "c", text: "They are always tax-deductible" },
            { id: "d", text: "They are drawings, not business costs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Private expenses", statement: "Drawings not expenses." }], steps: [{ reasoning: "Personal costs wrongly reduced profit.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Drawings not business costs" },
        },
        {
          id: "olacc-u5-adj-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Profit $7,000, private expenses $1,200, unrecorded business expenses $300. Enter the adjusted profit.",
          response: { type: "numeric", parts: [{ label: "Adjusted profit ($)", answer: 7900 }] },
          markscheme: { principles: [{ kind: "principle", name: "Adjustments", statement: "+ private, - unrecorded." }], steps: [
            { reasoning: "$7000 + $1200 - $300 = $7900$.", working: "7000+1200-300", marks: 1, markCode: "M" },
            { reasoning: "Adjusted profit is $7,900.", marks: 1, markCode: "A" },
          ], finalAnswer: "$7,900" },
        },
        {
          id: "olacc-u5-adj-q10", difficulty: "core", totalMarks: 2,
          stem: "List three items that may need adjustment when calculating profit in incomplete records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "Adjustments", statement: "Private items and omissions." }], steps: [
            { reasoning: "Private expenses/drawings paid by business; goods taken for own use; unrecorded business expenses.", marks: 1, markCode: "M" },
            { reasoning: "Three items listed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Private expenses; goods for own use; unrecorded expenses (or similar)." },
        },
        {
          id: "olacc-u5-adj-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The owner's drawings should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignored in all calculations" },
            { id: "b", text: "Treated as purchases" },
            { id: "c", text: "Added back if wrongly included in expenses" },
            { id: "d", text: "Always deducted from sales" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Drawings", statement: "Not business expenses." }], steps: [{ reasoning: "Drawings are the owner's, not the business's.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Added back if in expenses" },
        },
        {
          id: "olacc-u5-adj-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Profit from capital accounts $6,000; private items $800; missing business expense $200. Enter (a) net adjustment and (b) adjusted profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Net adjustment ($)", answer: 600 },
            { label: "(b) Adjusted profit ($)", answer: 6600 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Adjustments", statement: "Net effect on profit." }], steps: [
            { reasoning: "Net adjustment = $800 - $200 = $600$.", working: "800-200", marks: 1, markCode: "M" },
            { reasoning: "Adjusted profit = $6000 + $600 = $6600$.", working: "6000+600", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $600 (b) $6,600" },
        },
        {
          id: "olacc-u5-adj-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the correct order of steps when calculating adjusted profit in incomplete records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "Adjustment order", statement: "Sequence of steps." }], steps: [
            { reasoning: "First find profit from capital accounts.", marks: 1, markCode: "M" },
            { reasoning: "Then add back private expenses and drawings treated as expenses.", marks: 1, markCode: "M" },
            { reasoning: "Then deduct business expenses not yet recorded.", marks: 1, markCode: "M" },
            { reasoning: "Clear sequence.", marks: 1, markCode: "A" },
          ], finalAnswer: "Capital profit → add private items → deduct unrecorded expenses." },
        },
        {
          id: "olacc-u5-adj-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Rent paid by the business for the owner's house is classified as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A private expense (drawings)" },
            { id: "b", text: "Sales revenue" },
            { id: "c", text: "A purchase" },
            { id: "d", text: "A business expense" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Private expenses", statement: "Personal costs." }], steps: [{ reasoning: "Owner's housing is personal.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Private expense" },
        },
        {
          id: "olacc-u5-adj-q15", difficulty: "core", totalMarks: 2,
          stem: "Profit $3,500, private expenses $450. Enter the adjusted profit.",
          response: { type: "numeric", parts: [{ label: "Adjusted profit ($)", answer: 3950 }] },
          markscheme: { principles: [{ kind: "principle", name: "Private expenses", statement: "Add back." }], steps: [
            { reasoning: "$3500 + $450 = $3950$.", working: "3500+450", marks: 1, markCode: "M" },
            { reasoning: "Adjusted profit is $3,950.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,950" },
        },
        {
          id: "olacc-u5-adj-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Adjustments — extended review.",
          parts: [
            { label: "a", prompt: "Define private expenses.", marks: 1 },
            { label: "b", prompt: "How are private expenses treated in profit?", marks: 1 },
            { label: "c", prompt: "Profit $8,000, private items $1,000, unrecorded expense $500. Adjusted profit?", marks: 2 },
            { label: "d", prompt: "Goods taken for own use are valued at…", marks: 1 },
            { label: "e", prompt: "Why deduct unrecorded business expenses?", marks: 1 },
            { label: "f", prompt: "Profit $9,000, private $700, unrecorded $300, drawings in expenses $200. Adjusted profit?", marks: 2 },
            { label: "g", prompt: "What is the purpose of these adjustments?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Adjustments", statement: "Private items and true profit." },
          ], steps: [
            { part: "a", reasoning: "Owner's personal costs paid by business.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Added back to profit.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$8500$.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Cost.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "They reduce true profit.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "$9600$.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Show true business profit.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) personal costs (b) add back (c) 8500 (d) cost (e) reduce profit (f) 9600 (g) true profit" },
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

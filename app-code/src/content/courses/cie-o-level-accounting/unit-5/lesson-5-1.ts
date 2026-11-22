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
            { id: "a", text: "Only bank records" },
            { id: "b", text: "Not all transactions are fully recorded" },
            { id: "c", text: "Computerised records" },
            { id: "d", text: "No records exist" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Incomplete records", statement: "Partial records." }], steps: [{ reasoning: "Partial recording.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Partial records" },
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
        {
          id: "olacc-u5-ir-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which information is needed to calculate profit in incomplete records?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only total sales" },
            { id: "b", text: "The bank statement only" },
            { id: "c", text: "Supplier invoices only" },
            { id: "d", text: "Opening capital, closing capital, drawings and capital introduced" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Incomplete records data", statement: "Capital account items needed." }], steps: [{ reasoning: "Profit is derived from capital movements.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Capital items" },
        },
        {
          id: "olacc-u5-ir-q6", difficulty: "core", totalMarks: 2,
          stem: "Opening capital $4,000, closing capital $7,500, drawings $900, capital introduced $600. Enter the profit.",
          response: { type: "numeric", parts: [{ label: "Profit ($)", answer: 2900 }] },
          markscheme: { principles: [{ kind: "formula", name: "Profit", statement: "CC - OC + D - CI." }], steps: [
            { reasoning: "$7500 - $4000 + $900 - $600 = $2900$.", working: "7500-4000+900-600", marks: 1, markCode: "M" },
            { reasoning: "Profit is $2,900.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2,900" },
        },
        {
          id: "olacc-u5-ir-q7", difficulty: "core", totalMarks: 2,
          stem: "Opening capital $2,000, drawings $500, capital introduced $100 and profit $2,200. Enter the closing capital.",
          response: { type: "numeric", parts: [{ label: "Closing capital ($)", answer: 3800 }] },
          markscheme: { principles: [{ kind: "formula", name: "Closing capital", statement: "OC + profit - drawings + introduced." }], steps: [
            { reasoning: "CC = 2000 + 2200 - 500 + 100 = $3800$.", working: "2000+2200-500+100", marks: 1, markCode: "M" },
            { reasoning: "Closing capital is $3,800.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,800" },
        },
        {
          id: "olacc-u5-ir-q8", difficulty: "core", totalMarks: 1,
          stem: "In the profit formula, drawings are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Subtracted when calculating profit" },
            { id: "b", text: "Only deducted from closing capital" },
            { id: "c", text: "Ignored entirely" },
            { id: "d", text: "Added when calculating profit" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Profit formula", statement: "CC - OC + D - CI." }], steps: [{ reasoning: "Drawings increase the profit figure.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Added" },
        },
        {
          id: "olacc-u5-ir-q9", difficulty: "core", totalMarks: 2,
          stem: "State the formula used to find capital introduced in incomplete records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Capital introduced", statement: "Rearranged profit formula." }], steps: [
            { reasoning: "CI = CC - OC + D - profit.", marks: 1, markCode: "M" },
            { reasoning: "Correct rearrangement.", marks: 1, markCode: "A" },
          ], finalAnswer: "Capital introduced = Closing capital - Opening capital + Drawings - Profit." },
        },
        {
          id: "olacc-u5-ir-q10", difficulty: "challenge", totalMarks: 1,
          stem: "A trader keeps only a summary of total sales and purchases with no ledger accounts. This is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A trial balance" },
            { id: "b", text: "Double-entry bookkeeping" },
            { id: "c", text: "Incomplete records" },
            { id: "d", text: "A bank reconciliation" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Incomplete records", statement: "Partial records." }], steps: [{ reasoning: "Only summaries kept — records are incomplete.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Incomplete records" },
        },
        {
          id: "olacc-u5-ir-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Opening capital $5,000, profit $3,000, drawings $700, capital introduced $0. (a) Enter closing capital. (b) Enter closing capital if drawings had been nil.",
          response: { type: "numeric", parts: [
            { label: "(a) Closing capital ($)", answer: 7300 },
            { label: "(b) Closing capital, nil drawings ($)", answer: 8000 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Closing capital", statement: "OC + profit - D + CI." }], steps: [
            { reasoning: "CC = 5000 + 3000 - 700 = $7300$.", working: "5000+3000-700", marks: 1, markCode: "M" },
            { reasoning: "With nil drawings CC = 5000 + 3000 = $8000$.", working: "5000+3000", marks: 1, markCode: "M" },
            { reasoning: "Both figures correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $7,300 (b) $8,000" },
        },
        {
          id: "olacc-u5-ir-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why businesses keeping incomplete records must reconstruct figures such as profit from capital accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reconstruction", statement: "Partial data used." }], steps: [
            { reasoning: "Records are incomplete — key figures missing.", marks: 1, markCode: "M" },
            { reasoning: "Capital changes reflect profit, drawings and introduced capital.", marks: 1, markCode: "M" },
            { reasoning: "Formula rearranges to isolate profit.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Profit is reconstructed because capital movements reveal the missing figure." },
        },
        {
          id: "olacc-u5-ir-q13", difficulty: "core", totalMarks: 1,
          stem: "Capital introduced during the year…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increases closing capital but is not profit" },
            { id: "b", text: "Is a business expense" },
            { id: "c", text: "Is part of gross profit" },
            { id: "d", text: "Reduces drawings" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Capital introduced", statement: "Additional investment." }], steps: [{ reasoning: "Investment raises capital without being profit.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Not profit" },
        },
        {
          id: "olacc-u5-ir-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Opening capital $6,000, closing capital $9,000, drawings $500, capital introduced $200. Enter the profit.",
          response: { type: "numeric", parts: [{ label: "Profit ($)", answer: 3300 }] },
          markscheme: { principles: [{ kind: "formula", name: "Profit", statement: "CC - OC + D - CI." }], steps: [
            { reasoning: "$9000 - $6000 + $500 - $200 = $3300$.", working: "9000-6000+500-200", marks: 1, markCode: "M" },
            { reasoning: "Profit is $3,300.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,300" },
        },
        {
          id: "olacc-u5-ir-q15", difficulty: "challenge", totalMarks: 1,
          stem: "Which item is NOT needed when calculating profit from capital accounts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Subtract closing stock" },
            { id: "b", text: "Subtract opening capital" },
            { id: "c", text: "Add drawings" },
            { id: "d", text: "Subtract capital introduced" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Profit formula", statement: "CC - OC + D - CI." }], steps: [{ reasoning: "Stock is irrelevant to the capital formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Closing stock" },
        },
        {
          id: "olacc-u5-ir-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Incomplete records — extended review.",
          parts: [
            { label: "a", prompt: "State the profit formula.", marks: 2 },
            { label: "b", prompt: "OC $3,000, CC $8,000, D $600, CI $400. Profit?", marks: 2 },
            { label: "c", prompt: "What do drawings represent?", marks: 1 },
            { label: "d", prompt: "Effect of $500 capital introduced on calculated profit?", marks: 2 },
            { label: "e", prompt: "Why are the records called 'incomplete'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "formula", name: "Incomplete records", statement: "Formula, calc, concepts." },
          ], steps: [
            { part: "a", reasoning: "CC - OC + D - CI.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$4700.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Owner's withdrawals for personal use.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Profit reduced by $500.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct direction.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Not all transactions fully recorded.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) CC-OC+D-CI (b) 4700 (c) withdrawals (d) reduces by 500 (e) partial records" },
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
            { id: "a", text: "Profit" },
            { id: "b", text: "Selling price" },
            { id: "c", text: "Cost price" },
            { id: "d", text: "Revenue" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Mark-up", statement: "On cost." }], steps: [{ reasoning: "On cost price.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Cost price" },
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
        {
          id: "olacc-u5-mu-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Margin is calculated as a percentage of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Capital employed" },
            { id: "b", text: "Profit" },
            { id: "c", text: "Cost price" },
            { id: "d", text: "Selling price" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Margin", statement: "On selling price." }], steps: [{ reasoning: "Margin uses selling price.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Selling price" },
        },
        {
          id: "olacc-u5-mu-q6", difficulty: "core", totalMarks: 2,
          stem: "Cost $120, mark-up 25%. Enter the selling price.",
          response: { type: "numeric", parts: [{ label: "Selling price ($)", answer: 150 }] },
          markscheme: { principles: [{ kind: "formula", name: "Mark-up", statement: "SP = cost × (1 + MU/100)." }], steps: [
            { reasoning: "$120 × 1.25 = $150$.", working: "120*1.25", marks: 1, markCode: "M" },
            { reasoning: "Selling price is $150.", marks: 1, markCode: "A" },
          ], finalAnswer: "$150" },
        },
        {
          id: "olacc-u5-mu-q7", difficulty: "core", totalMarks: 2,
          stem: "Sales $6,000, margin 15%. Enter (a) profit and (b) cost of sales.",
          response: { type: "numeric", parts: [
            { label: "(a) Profit ($)", answer: 900 },
            { label: "(b) Cost of sales ($)", answer: 5100 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Margin", statement: "Profit = sales × margin." }], steps: [
            { reasoning: "Profit = $6000 × 15% = $900$.", working: "6000*0.15", marks: 1, markCode: "M" },
            { reasoning: "CoS = $6000 - $900 = $5100$.", working: "6000-900", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $900 (b) $5,100" },
        },
        {
          id: "olacc-u5-mu-q8", difficulty: "core", totalMarks: 1,
          stem: "A mark-up of 50% is equivalent to a margin of approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "66.7%" },
            { id: "b", text: "20%" },
            { id: "c", text: "33.3%" },
            { id: "d", text: "50%" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Conversion", statement: "Margin = MU/(100+MU)." }], steps: [{ reasoning: "$50/150 = 33.3%$.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** 33.3%" },
        },
        {
          id: "olacc-u5-mu-q9", difficulty: "core", totalMarks: 2,
          stem: "Selling price $250, margin 20%. Enter the cost of sales.",
          response: { type: "numeric", parts: [{ label: "Cost of sales ($)", answer: 200 }] },
          markscheme: { principles: [{ kind: "formula", name: "Margin", statement: "CoS = sales × (1 - margin)." }], steps: [
            { reasoning: "CoS = $250 × 80% = $200$.", working: "250*0.8", marks: 1, markCode: "M" },
            { reasoning: "Cost of sales is $200.", marks: 1, markCode: "A" },
          ], finalAnswer: "$200" },
        },
        {
          id: "olacc-u5-mu-q10", difficulty: "core", totalMarks: 2,
          stem: "Derive the relationship between mark-up and margin.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Conversion", statement: "Margin = MU/(100+MU)." }], steps: [
            { reasoning: "Profit = cost × MU/100 and also profit = sales × margin/100.", marks: 1, markCode: "M" },
            { reasoning: "Since sales = cost × (1 + MU/100), margin = MU/(100+MU).", marks: 1, markCode: "A" },
          ], finalAnswer: "Margin = Mark-up / (100 + mark-up)." },
        },
        {
          id: "olacc-u5-mu-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Two traders sell identical goods for $100 each. Trader A uses a 25% mark-up; Trader B uses a 20% margin. Whose profit is higher?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot be determined" },
            { id: "b", text: "They earn equal profit" },
            { id: "c", text: "Trader B" },
            { id: "d", text: "Trader A" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "comparison", name: "Mark-up vs margin", statement: "25% MU = 20% margin." }], steps: [{ reasoning: "Both give profit of $20 on $100 sales.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Equal" },
        },
        {
          id: "olacc-u5-mu-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Cost $80, mark-up 60%. Enter (a) selling price and (b) profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Selling price ($)", answer: 128 },
            { label: "(b) Profit ($)", answer: 48 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Mark-up", statement: "SP = cost × 1.6." }], steps: [
            { reasoning: "SP = $80 × 1.6 = $128$.", working: "80*1.6", marks: 1, markCode: "M" },
            { reasoning: "Profit = $128 - $80 = $48$.", working: "128-80", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $128 (b) $48" },
        },
        {
          id: "olacc-u5-mu-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain, with an example, the difference between mark-up and margin.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Mark-up vs margin", statement: "Cost vs selling price base." }], steps: [
            { reasoning: "Mark-up is profit as % of cost price.", marks: 1, markCode: "M" },
            { reasoning: "Margin is profit as % of selling price.", marks: 1, markCode: "M" },
            { reasoning: "Example: cost $80, SP $100 → mark-up 25%, margin 20%.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mark-up on cost; margin on selling price — e.g. $20 profit on $80 cost = 25% mark-up, on $100 sales = 20% margin." },
        },
        {
          id: "olacc-u5-mu-q14", difficulty: "core", totalMarks: 2,
          stem: "Sales $4,000, margin 12.5%. Enter the profit.",
          response: { type: "numeric", parts: [{ label: "Profit ($)", answer: 500 }] },
          markscheme: { principles: [{ kind: "formula", name: "Margin", statement: "Profit = sales × margin." }], steps: [
            { reasoning: "$4000 × 12.5% = $500$.", working: "4000*0.125", marks: 1, markCode: "M" },
            { reasoning: "Profit is $500.", marks: 1, markCode: "A" },
          ], finalAnswer: "$500" },
        },
        {
          id: "olacc-u5-mu-q15", difficulty: "challenge", totalMarks: 1,
          stem: "A 20% margin is equivalent to which mark-up?",
          response: { type: "mcq", choices: [
            { id: "a", text: "20%" },
            { id: "b", text: "16.7%" },
            { id: "c", text: "25%" },
            { id: "d", text: "24%" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Conversion", statement: "MU = margin/(100-margin)." }], steps: [{ reasoning: "$20/80 = 25%$.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** 25%" },
        },
        {
          id: "olacc-u5-mu-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Mark-up and margin — extended review.",
          parts: [
            { label: "a", prompt: "Define mark-up.", marks: 1 },
            { label: "b", prompt: "Define margin.", marks: 1 },
            { label: "c", prompt: "Cost $200, mark-up 30%. Selling price?", marks: 2 },
            { label: "d", prompt: "Sales $1,000, margin 10%. Profit and cost of sales?", marks: 2 },
            { label: "e", prompt: "Convert a 40% mark-up to a margin.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Mark-up/margin", statement: "Definitions, calcs, conversion." },
          ], steps: [
            { part: "a", reasoning: "Profit as % of cost.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Profit as % of selling price.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$260.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Profit $100; CoS $900.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Margin = 40/(100+40).", marks: 1, markCode: "M" },
            { part: "e", reasoning: "$40/140 = 28.6%$.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct conversion.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) %on cost (b) %on SP (c) 260 (d) 100/900 (e) 28.6%" },
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

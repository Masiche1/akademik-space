import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olacc-u3-lesson-3-1",
  code: "3-1",
  title: "The Income Statement",
  goal: "I CAN prepare an income statement showing gross profit and net profit.",
  standards: ["7706 3.1"],
  vocabulary: [
    { term: "Income statement", definition: "Statement showing revenue, costs and profit for a period." },
    { term: "Revenue/Sales", definition: "Income from selling goods or services." },
    { term: "Cost of sales", definition: "Direct costs of goods sold — opening stock + purchases - closing stock." },
    { term: "Gross profit", definition: "Sales - cost of sales." },
    { term: "Expenses", definition: "Running costs — rent, wages, utilities." },
    { term: "Net profit", definition: "Gross profit - expenses." },
    { term: "Trading account", definition: "First part of income statement calculating gross profit." },
  ],
  concepts: [
    {
      id: "olacc-u3-income",
      title: "Preparing an income statement",
      skill: "Calculate cost of sales, gross profit and net profit.",
      lesson: {
        sections: [
          { heading: "Structure", body: "```\nSales revenue\n  less: Cost of sales\n        = Gross profit\n  less: Expenses\n        = Net profit\n```\nCost of sales = opening stock + purchases - closing stock + carriage inward." },
          { heading: "Key figures", body: "- **Gross profit**: sales minus direct costs of goods sold — shows trading efficiency.\n- **Net profit**: after ALL expenses — the real bottom line." },
          { heading: "Adjustments", body: "Returns reduce sales/purchases; carriage inward adds to cost; carriage outward adds to expenses." },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Sales - Cost of sales" },
          { name: "Net profit", statement: "Gross profit - Expenses" },
          { name: "Cost of sales", statement: "Opening stock + Purchases - Closing stock" },
        ],
        workedExample: {
          problem: "Sales $10,000; opening stock $500; purchases $6,000; closing stock $800; expenses $1,500. Find gross and net profit.",
          solution: "CoS = 500+6000-800 = 5700. GP = 10000-5700 = 4300. NP = 4300-1500 = 2800.",
        },
      },
      questions: [
        {
          id: "olacc-u3-is-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Gross profit equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales - cost of sales" },
            { id: "b", text: "Assets - liabilities" },
            { id: "c", text: "Sales - expenses" },
            { id: "d", text: "Revenue - tax" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Gross profit", statement: "Sales - CoS." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sales - CoS" },
        },
        {
          id: "olacc-u3-is-q2", difficulty: "core", totalMarks: 2,
          stem: "Calculate cost of sales: opening stock $400, purchases $5,000, closing stock $600.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CoS", statement: "OS + P - CS." }], steps: [
            { reasoning: "$400 + $5,000 - $600 = $4,800.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4,800" },
        },
        {
          id: "olacc-u3-is-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between gross profit and net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GP vs NP", statement: "Trading vs final profit." }], steps: [
            { reasoning: "GP = sales - direct costs only.", marks: 1, markCode: "M" },
            { reasoning: "NP = GP - all expenses.", marks: 1, markCode: "M" },
            { reasoning: "NP is the true bottom line.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Gross profit measures trading efficiency; net profit is after all expenses — the real result." },
        },
        {
          id: "olacc-u3-is-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Income statement review.",
          parts: [
            { label: "a", prompt: "State the income statement structure.", marks: 3 },
            { label: "b", prompt: "Cost of sales formula?", marks: 2 },
            { label: "c", prompt: "Sales $8000, CoS $5000, expenses $1500. GP and NP?", marks: 2 },
            { label: "d", prompt: "What does carriage inward add to?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Income statement", statement: "Structure and calculations." },
          ], steps: [
            { part: "a", reasoning: "Sales - CoS = GP - expenses = NP.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct structure.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "All steps.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "OS + Purchases - CS.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "GP = 3000.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "NP = 1500.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Cost of sales.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sales→GP→NP (b) OS+P-CS (c) 3000/1500 (d) CoS" },
        },
        {
          id: "olacc-u3-is-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Net profit equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assets - liabilities" },
            { id: "b", text: "Sales - purchases" },
            { id: "c", text: "Sales - cost of sales" },
            { id: "d", text: "Gross profit - expenses" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Net profit", statement: "GP - expenses." }], steps: [{ reasoning: "Net profit is gross profit minus all expenses.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Gross profit - expenses" },
        },
        {
          id: "olacc-u3-is-q6", difficulty: "core", totalMarks: 1,
          stem: "Carriage inward (cost of transporting goods to the business) is added to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Other income" },
            { id: "b", text: "Capital" },
            { id: "c", text: "Expenses" },
            { id: "d", text: "Cost of sales" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Carriage inward", statement: "Part of CoS." }], steps: [{ reasoning: "Carriage inward is a cost of bringing stock in, so it increases cost of sales.", marks: 1, markCode: "M" }], finalAnswer: "**(d)** Cost of sales" },
        },
        {
          id: "olacc-u3-is-q7", difficulty: "challenge", totalMarks: 3,
          stem: "Sales $20,000, opening stock $1,000, purchases $12,000, closing stock $1,500, expenses $3,000. Enter (a) cost of sales, (b) gross profit, (c) net profit.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 11500 }, { label: "(b)", answer: 8500 }, { label: "(c)", answer: 5500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Income statement", statement: "CoS → GP → NP." }], steps: [
            { reasoning: "CoS = $1,000 + $12,000 - $1,500 = $11,500.", marks: 1, markCode: "M" },
            { reasoning: "GP = $20,000 - $11,500 = $8,500.", marks: 1, markCode: "M" },
            { reasoning: "NP = $8,500 - $3,000 = $5,500.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $11,500 (b) $8,500 (c) $5,500" },
        },
        {
          id: "olacc-u3-is-q8", difficulty: "core", totalMarks: 2,
          stem: "What does the trading account section of the income statement show?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Trading account", statement: "Gross profit calculation." }], steps: [
            { reasoning: "It compares sales revenue with the cost of sales.", marks: 1, markCode: "M" },
            { reasoning: "The result is gross profit, showing trading efficiency.", marks: 1, markCode: "A" },
          ], finalAnswer: "It calculates gross profit — sales minus cost of sales — measuring trading performance." },
        },
        {
          id: "olacc-u3-is-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Which item is NOT included in cost of sales?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases" },
            { id: "b", text: "Carriage inward" },
            { id: "c", text: "Carriage outward" },
            { id: "d", text: "Opening stock" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Cost of sales", statement: "Direct costs only." }], steps: [{ reasoning: "Carriage outward is a selling/distribution cost treated as an expense, not cost of sales.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Carriage outward" },
        },
        {
          id: "olacc-u3-is-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a healthy gross profit alone is not enough to judge a business's performance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "GP vs NP", statement: "Expenses matter too." }], steps: [
            { reasoning: "Gross profit only covers direct trading costs.", marks: 1, markCode: "M" },
            { reasoning: "Expenses such as rent, wages and utilities are deducted afterwards.", marks: 1, markCode: "M" },
            { reasoning: "A business can have good GP but be unprofitable if expenses are high.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Gross profit ignores expenses — only net profit after all expenses shows the true result." },
        },
        {
          id: "olacc-u3-is-q11", difficulty: "core", totalMarks: 2,
          stem: "Sales $15,000, cost of sales $9,000, other income $500, expenses $2,500. Enter (a) gross profit, (b) net profit.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 6000 }, { label: "(b)", answer: 4000 }] },
          markscheme: { principles: [{ kind: "principle", name: "GP and NP", statement: "GP = S - CoS; NP = GP + other income - expenses." }], steps: [
            { reasoning: "GP = $15,000 - $9,000 = $6,000.", marks: 1, markCode: "M" },
            { reasoning: "NP = $6,000 + $500 - $2,500 = $4,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $6,000 (b) $4,000" },
        },
        {
          id: "olacc-u3-is-q12", difficulty: "core", totalMarks: 2,
          stem: "Why is opening stock added and closing stock deducted when calculating cost of sales?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Stock adjustment", statement: "Match costs to sales." }], steps: [
            { reasoning: "Opening stock was available for sale, so it is part of goods sold.", marks: 1, markCode: "M" },
            { reasoning: "Closing stock was not sold, so it is deducted to leave only the cost of goods actually sold.", marks: 1, markCode: "A" },
          ], finalAnswer: "Opening stock was available to sell (add); closing stock remains unsold (deduct) — leaving the cost of goods sold." },
        },
        {
          id: "olacc-u3-is-q13", difficulty: "foundation", totalMarks: 1,
          stem: "The income statement reports results for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the first month" },
            { id: "b", text: "The whole life of the business" },
            { id: "c", text: "A single point in time" },
            { id: "d", text: "A period of time" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Income statement", statement: "Covers a period." }], steps: [{ reasoning: "It shows income and expenses over a period, unlike the balance sheet which is at a date.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** A period of time" },
        },
        {
          id: "olacc-u3-is-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how carriage inward and carriage outward are treated differently in the income statement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Carriage", statement: "Inward → CoS; outward → expense." }], steps: [
            { reasoning: "Carriage inward brings goods into the business — a cost of purchase.", marks: 1, markCode: "M" },
            { reasoning: "It is added to cost of sales, reducing gross profit.", marks: 1, markCode: "M" },
            { reasoning: "Carriage outward delivers goods to customers — a selling cost.", marks: 1, markCode: "M" },
            { reasoning: "It is charged as an expense, reducing net profit only.", marks: 1, markCode: "A" },
          ], finalAnswer: "Carriage inward adds to cost of sales (affects gross profit); carriage outward is an expense (affects net profit only)." },
        },
        {
          id: "olacc-u3-is-q15", difficulty: "foundation", totalMarks: 2,
          stem: "Opening stock is $800, purchases are $5,400 and closing stock is $1,100; sales are $9,800. Enter (a) cost of sales, (b) gross profit.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 5100 }, { label: "(b)", answer: 4700 }] },
          markscheme: { principles: [{ kind: "principle", name: "CoS and GP", statement: "OS + P - CS; S - CoS." }], steps: [
            { reasoning: "CoS = $800 + $5,400 - $1,100 = $5,100.", marks: 1, markCode: "M" },
            { reasoning: "GP = $9,800 - $5,100 = $4,700.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,100 (b) $4,700" },
        },
        {
          id: "olacc-u3-is-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Income statement review.",
          parts: [
            { label: "a", prompt: "State the structure of the income statement.", marks: 2 },
            { label: "b", prompt: "Give the cost of sales formula.", marks: 2 },
            { label: "c", prompt: "Sales $12,000, cost of sales $7,500. Gross profit?", marks: 2 },
            { label: "d", prompt: "Expenses are $2,000. Net profit?", marks: 1 },
            { label: "e", prompt: "How are carriage inward and carriage outward treated?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Income statement", statement: "Structure, formulas, calculations." },
          ], steps: [
            { part: "a", reasoning: "Sales - CoS = GP - expenses = NP.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct structure.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "OS + Purchases - CS (+ carriage inward).", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "GP = $4,500.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "NP = $2,500.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Inward → CoS; outward → expense.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sales→GP→NP (b) OS+P-CS (c) 4500 (d) 2500 (e) CoS vs expense" },
        },
      ],
    },
    {
      id: "olacc-u3-adjustments",
      title: "Adjustments and other income",
      skill: "Include returns, discounts, other income and accruals/prepayments in the income statement.",
      lesson: {
        sections: [
          { heading: "Returns and discounts", body: "- **Sales returns**: deducted from sales revenue.\n- **Purchases returns**: deducted from purchases (reduces CoS).\n- **Trade discount**: not recorded at all (it's just a reduced price).\n- **Cash discount**: recorded as discount received/allowed expense." },
          { heading: "Other income", body: "Income not from main trading — rent received, interest earned, commission received. Added below gross profit." },
          { heading: "Accruals and prepayments", body: "- **Accrued expense** (e.g. wages owed): add to expenses.\n- **Prepaid expense**: only the used portion counts as expense.\n- **Accrued income/prepaid income**: adjust other income similarly." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sales $10,000, sales returns $500, rent received $300. Show the adjusted sales figure.",
          solution: "Net sales = 10,000 - 500 = 9,500. Rent received $300 goes in other income.",
        },
      },
      questions: [
        {
          id: "olacc-u3-adj-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Sales returns are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deducted from sales revenue" },
            { id: "b", text: "Ignored" },
            { id: "c", text: "Added to sales" },
            { id: "d", text: "Added to expenses" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sales returns", statement: "Reduce sales." }], steps: [{ reasoning: "Deducted from sales.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Deducted from sales" },
        },
        {
          id: "olacc-u3-adj-q2", difficulty: "core", totalMarks: 2,
          stem: "What is other income in an income statement?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Other income", statement: "Non-trading income." }], steps: [
            { reasoning: "Income not from main sales — rent, interest.", marks: 1, markCode: "M" },
            { reasoning: "Shown below gross profit.", marks: 1, markCode: "A" },
          ], finalAnswer: "Non-trading income (rent received, interest) shown below gross profit." },
        },
        {
          id: "olacc-u3-adj-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between trade discount and cash discount.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Discounts", statement: "Trade vs cash." }], steps: [
            { reasoning: "Trade discount: deducted before invoice — not recorded.", marks: 1, markCode: "M" },
            { reasoning: "Cash discount: for prompt payment — recorded as expense/income.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "M" },
            { reasoning: "Complete answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "Trade discount reduces the invoice price (never recorded); cash discount rewards early payment (recorded)." },
        },
        {
          id: "olacc-u3-adj-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Adjustments review.",
          parts: [
            { label: "a", prompt: "How are sales returns treated?", marks: 1 },
            { label: "b", prompt: "What is other income? Give two examples.", marks: 2 },
            { label: "c", prompt: "Distinguish trade from cash discount.", marks: 2 },
            { label: "d", prompt: "What is an accrued expense?", marks: 2 },
            { label: "e", prompt: "Why adjust for prepayments?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Adjustments", statement: "Returns, income, discounts, accruals." },
          ], steps: [
            { part: "a", reasoning: "Deducted from sales.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Non-trading income.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Rent/interest examples.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Trade: not recorded.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Cash: recorded discount.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Expense owed but not yet paid.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Added to expenses.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Only used portion is expense.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Matches to correct period.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) deduct (b) non-trade inc (c) unrecorded vs recorded (d) owed expense (e) period matching" },
        },
        {
          id: "olacc-u3-adj-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Purchases returns are treated in the income statement as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Other income" },
            { id: "b", text: "An addition to purchases" },
            { id: "c", text: "A deduction from purchases, reducing cost of sales" },
            { id: "d", text: "An expense" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Purchases returns", statement: "Reduce purchases." }], steps: [{ reasoning: "Purchases returns reduce the purchases figure in cost of sales.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Deducted from purchases" },
        },
        {
          id: "olacc-u3-adj-q6", difficulty: "core", totalMarks: 1,
          stem: "Rent received from a tenant is recorded in the income statement as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales revenue" },
            { id: "b", text: "Other income" },
            { id: "c", text: "Cost of sales" },
            { id: "d", text: "An expense" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Other income", statement: "Non-trading income." }], steps: [{ reasoning: "Rent received is income not from main trading — other income.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Other income" },
        },
        {
          id: "olacc-u3-adj-q7", difficulty: "core", totalMarks: 2,
          stem: "Sales are $10,000, sales returns are $400, purchases are $6,000 and purchases returns are $300. Enter (a) net sales, (b) net purchases.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 9600 }, { label: "(b)", answer: 5700 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net figures", statement: "Gross minus returns." }], steps: [
            { reasoning: "$10,000 - $400 = $9,600 net sales.", marks: 1, markCode: "M" },
            { reasoning: "$6,000 - $300 = $5,700 net purchases.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $9,600 (b) $5,700" },
        },
        {
          id: "olacc-u3-adj-q8", difficulty: "core", totalMarks: 2,
          stem: "What is an accrued expense? Give one example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Accrued expense", statement: "Owed but not yet paid." }], steps: [
            { reasoning: "An expense that has been incurred but not yet paid or recorded.", marks: 1, markCode: "M" },
            { reasoning: "Example: wages owed at year end, or electricity used but not billed.", marks: 1, markCode: "A" },
          ], finalAnswer: "An expense owed but not yet paid — e.g. accrued wages — added to expenses in the income statement." },
        },
        {
          id: "olacc-u3-adj-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Trade discount is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recorded as other income" },
            { id: "b", text: "Recorded as an expense" },
            { id: "c", text: "Added to purchases" },
            { id: "d", text: "Not recorded in the books at all" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Trade discount", statement: "Never recorded." }], steps: [{ reasoning: "Trade discount reduces the invoice price before recording, so it never enters the books.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Not recorded" },
        },
        {
          id: "olacc-u3-adj-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how accruals and prepayments are adjusted in the income statement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Accruals/prepayments", statement: "Match to period." }], steps: [
            { reasoning: "Accrued expenses are added to expenses — costs incurred but not yet paid.", marks: 1, markCode: "M" },
            { reasoning: "Prepaid expenses are reduced to the portion used in the period.", marks: 1, markCode: "M" },
            { reasoning: "Accrued income is added to other income; prepaid income is reduced accordingly.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Accruals increase the relevant figure; prepayments are limited to the portion relating to the current period." },
        },
        {
          id: "olacc-u3-adj-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Rent paid during the year was $1,200, of which $200 relates to next year (prepaid). Wages paid were $2,000 with $300 owed at year end (accrued). Enter (a) rent expense for the year, (b) wages expense for the year, (c) the combined total of these two expenses.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1000 }, { label: "(b)", answer: 2300 }, { label: "(c)", answer: 3300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Adjustments", statement: "Prepaid reduces; accrued increases." }], steps: [
            { reasoning: "Rent expense = $1,200 - $200 prepaid = $1,000.", marks: 1, markCode: "M" },
            { reasoning: "Wages expense = $2,000 + $300 accrued = $2,300.", marks: 1, markCode: "M" },
            { reasoning: "Total = $1,000 + $2,300 = $3,300.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,000 (b) $2,300 (c) $3,300" },
        },
        {
          id: "olacc-u3-adj-q12", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between accrued income and prepaid income.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Income adjustments", statement: "Accrued vs prepaid." }], steps: [
            { reasoning: "Accrued income is earned but not yet received — added to other income.", marks: 1, markCode: "M" },
            { reasoning: "Prepaid income is received in advance — only the earned portion counts as income.", marks: 1, markCode: "A" },
          ], finalAnswer: "Accrued income is earned but unpaid (add it); prepaid income is received early (recognise only the earned part)." },
        },
        {
          id: "olacc-u3-adj-q13", difficulty: "core", totalMarks: 1,
          stem: "Discount received from suppliers appears in the income statement as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Other income" },
            { id: "b", text: "An expense" },
            { id: "c", text: "A deduction from purchases" },
            { id: "d", text: "Cost of sales" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Discount received", statement: "Non-trading income." }], steps: [{ reasoning: "Discount received is recorded as other income below gross profit.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Other income" },
        },
        {
          id: "olacc-u3-adj-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why cash discount is recorded in the books but trade discount is not.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Discounts", statement: "Trade unrecorded, cash recorded." }], steps: [
            { reasoning: "Trade discount is deducted before the invoice is raised — the reduced price is simply recorded.", marks: 1, markCode: "M" },
            { reasoning: "Cash discount is given for prompt payment after the invoice — a real transaction.", marks: 1, markCode: "M" },
            { reasoning: "It must be recorded: discount allowed as expense, discount received as income.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Trade discount never enters the books (reduced price only); cash discount is an actual transaction recorded as expense or income." },
        },
        {
          id: "olacc-u3-adj-q15", difficulty: "core", totalMarks: 2,
          stem: "Sales are $8,000, sales returns are $250 and interest received is $150. Enter (a) net sales, (b) total income before expenses (net sales plus other income).",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 7750 }, { label: "(b)", answer: 7900 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net sales + other income", statement: "Returns deducted; other income added." }], steps: [
            { reasoning: "Net sales = $8,000 - $250 = $7,750.", marks: 1, markCode: "M" },
            { reasoning: "$7,750 + $150 = $7,900.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $7,750 (b) $7,900" },
        },
        {
          id: "olacc-u3-adj-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Adjustments review.",
          parts: [
            { label: "a", prompt: "How are sales returns treated?", marks: 1 },
            { label: "b", prompt: "What is other income? Give two examples.", marks: 2 },
            { label: "c", prompt: "Distinguish trade discount from cash discount.", marks: 2 },
            { label: "d", prompt: "How are accrued and prepaid expenses treated?", marks: 2 },
            { label: "e", prompt: "How are accrued and prepaid income treated?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Adjustments", statement: "Returns, income, discounts, accruals." },
          ], steps: [
            { part: "a", reasoning: "Deducted from sales.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Non-trading income.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Rent/interest examples.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Trade: not recorded; cash: recorded discount.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Accrued added; prepaid limited to used portion.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Accrued income added; prepaid income limited to earned portion.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) deduct (b) non-trade inc (c) unrecorded vs recorded (d) acc+/pre- (e) acc+/pre-" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u3-3-1-notes", title: "Income statement — notes", summary: "Structure, cost of sales, gross/net profit and adjustments.",
      sections: [
        { heading: "Statement", body: "Sales - CoS = GP - expenses = NP. CoS = OS + purchases - CS." },
        { heading: "Adjustments", body: "Returns reduce sales; other income below GP; accruals/prepayments match expenses to period." },
      ] },
  ],
};

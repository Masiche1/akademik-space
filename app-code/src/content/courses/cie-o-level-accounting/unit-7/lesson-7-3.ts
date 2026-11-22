import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "olacc-u7-lesson-7-3",
  code: "7-3",
  title: "Accounting Principles and Exam Technique",
  goal: "I CAN apply accounting principles and use exam strategies effectively.",
  standards: ["7706 7.3"],
  vocabulary: [
    { term: "Business entity", definition: "Business treated separately from owner." },
    { term: "Going concern", definition: "Business will continue operating indefinitely." },
    { term: "Consistency", definition: "Same methods applied year to year." },
    { term: "Prudence", definition: "Don't overstate assets or profits." },
    { term: "Matching", definition: "Match expenses to revenue earned in period." },
    { term: "Materiality", definition: "Only record items significant enough to affect decisions." },
  ],
  concepts: [
    {
      id: "olacc-u7-principles",
      title: "Accounting principles",
      skill: "Apply fundamental accounting principles to practical situations.",
      lesson: {
        sections: [
          { heading: "Core principles", body: "- **Business entity**: separate business from owner (drawings not expenses).\n- **Going concern**: assume business continues (no forced-sale valuations).\n- **Consistency**: same treatment year to year (comparability).\n- **Prudence**: anticipate losses, don't anticipate profits (lower of cost/NRV).\n- **Matching**: expenses matched to related revenue (accruals/prepayments).\n- **Materiality**: ignore insignificant items." },
          { heading: "Application", body: "Questions test whether you can identify which principle applies: valuing stock at NRV = prudence; treating owner withdrawals as drawings = business entity; accruing unpaid expenses = matching." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Stock that cost $100 now sells for $80. Under which principle is it valued at $80?",
          solution: "Prudence — anticipate the loss rather than overstate assets.",
        },
      },
      questions: [
        {
          id: "olacc-u7-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Valuing stock at lower of cost and NRV applies which principle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Going concern" },
            { id: "b", text: "Prudence" },
            { id: "c", text: "Materiality" },
            { id: "d", text: "Consistency" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Prudence", statement: "Anticipate losses." }], steps: [{ reasoning: "Prudence principle.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Prudence" },
        },
        {
          id: "olacc-u7-pr-q2", difficulty: "core", totalMarks: 2,
          stem: "Which principle requires expenses to be matched with related revenue?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Matching", statement: "Expenses ↔ revenue." }], steps: [
            { reasoning: "Matching (accruals) principle.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "Matching principle." },
        },
        {
          id: "olacc-u7-pr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how business entity and prudence principles apply to a business owner.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Principles", statement: "Entity + prudence." }], steps: [
            { reasoning: "Entity: owner's personal transactions excluded; drawings separate.", marks: 1, markCode: "M" },
            { reasoning: "Prudence: don't overstate assets/profits; provide for losses.", marks: 1, markCode: "M" },
            { reasoning: "Clear application.", marks: 1, markCode: "M" },
            { reasoning: "Correct explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Entity separates owner from business; prudence avoids overstating position." },
        },
        {
          id: "olacc-u7-pr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Accounting principles review.",
          parts: [
            { label: "a", prompt: "Define business entity.", marks: 1 },
            { label: "b", prompt: "Define prudence.", marks: 1 },
            { label: "c", prompt: "Define matching.", marks: 1 },
            { label: "d", prompt: "Owner takes stock for personal use. Which principle?", marks: 1 },
            { label: "e", prompt: "Stock NRV < cost. Which principle?", marks: 1 },
            { label: "f", prompt: "Unpaid wages at year end. Which principle?", marks: 1 },
            { label: "g", prompt: "Same depreciation method yearly. Which principle?", marks: 1 },
            { label: "h", prompt: "Ignore $2 stationery. Which principle?", marks: 1 },
            { label: "i", prompt: "Business assumed to continue. Which principle?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Principles", statement: "All GAAP concepts." },
          ], steps: [
            { part: "a", reasoning: "Business separate from owner.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Don't overstate; anticipate losses.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Match expenses to revenue.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Business entity.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Prudence.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Matching (accruals).", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Consistency.", marks: 1, markCode: "A" },
            { part: "h", reasoning: "Materiality.", marks: 1, markCode: "A" },
            { part: "i", reasoning: "Going concern.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) entity (b) prudence (c) matching (d) entity (e) prudence (f) matching (g) consistency (h) materiality (i) going concern" },
        },
        {
          id: "olacc-u7-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The business entity principle requires that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All profits are shared equally" },
            { id: "b", text: "The business must be a company" },
            { id: "c", text: "Owners cannot withdraw money" },
            { id: "d", text: "The business is treated separately from its owner" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Business entity", statement: "Separate from owner." }], steps: [{ reasoning: "Owner and business are distinct.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Separate entity" },
        },
        {
          id: "olacc-u7-pr-q6", difficulty: "core", totalMarks: 2,
          stem: "Stock costing $100 has NRV of $80. Enter the write-down required under prudence.",
          response: { type: "numeric", parts: [{ label: "Write-down ($)", answer: 20 }] },
          markscheme: { principles: [{ kind: "principle", name: "Prudence", statement: "Lower of cost/NRV." }], steps: [
            { reasoning: "$100 - $80 = $20$.", working: "100-80", marks: 1, markCode: "M" },
            { reasoning: "Write-down is $20.", marks: 1, markCode: "A" },
          ], finalAnswer: "$20" },
        },
        {
          id: "olacc-u7-pr-q7", difficulty: "core", totalMarks: 2,
          stem: "Revenue $10,000 and matching expenses $4,000. Enter the gross profit under the matching principle.",
          response: { type: "numeric", parts: [{ label: "Gross profit ($)", answer: 6000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Matching", statement: "Expenses matched to revenue." }], steps: [
            { reasoning: "$10000 - $4000 = $6000$.", working: "10000-4000", marks: 1, markCode: "M" },
            { reasoning: "Gross profit is $6,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6,000" },
        },
        {
          id: "olacc-u7-pr-q8", difficulty: "core", totalMarks: 1,
          stem: "The consistency principle requires…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stock to be valued at NRV" },
            { id: "b", text: "All items to be recorded" },
            { id: "c", text: "Profits to be maximised" },
            { id: "d", text: "The same accounting methods be used year to year" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Consistency", statement: "Same methods." }], steps: [{ reasoning: "Consistency aids comparability.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Same methods" },
        },
        {
          id: "olacc-u7-pr-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Rent prepaid $2,400 covers 12 months. After 4 months, enter (a) the expense for the period and (b) the prepaid balance.",
          response: { type: "numeric", parts: [
            { label: "(a) Expense ($)", answer: 800 },
            { label: "(b) Prepaid balance ($)", answer: 1600 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Matching", statement: "Match expense to period." }], steps: [
            { reasoning: "$2400/12 × 4 = $800$; balance = $1600$.", working: "2400/12*4; 2400-800", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $800 (b) $1,600" },
        },
        {
          id: "olacc-u7-pr-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain the going concern principle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Going concern", statement: "Continue operating." }], steps: [
            { reasoning: "Assumes the business will continue indefinitely.", marks: 1, markCode: "M" },
            { reasoning: "Assets valued on going-concern basis, not forced-sale.", marks: 1, markCode: "A" },
          ], finalAnswer: "Business assumed to keep trading — no liquidation valuations." },
        },
        {
          id: "olacc-u7-pr-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Stock cost $60, NRV $45. Enter (a) the write-down and (b) the statement value.",
          response: { type: "numeric", parts: [
            { label: "(a) Write-down ($)", answer: 15 },
            { label: "(b) Statement value ($)", answer: 45 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Prudence", statement: "Lower of cost/NRV." }], steps: [
            { reasoning: "Write-down = $60 - $45 = $15$.", working: "60-45", marks: 1, markCode: "M" },
            { reasoning: "Stock valued at $45$ (lower of cost and NRV).", working: "min(60,45)", marks: 1, markCode: "M" },
            { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $15 (b) $45" },
        },
        {
          id: "olacc-u7-pr-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Ignoring a $3 stationery expense illustrates which principle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Consistency" },
            { id: "b", text: "Materiality" },
            { id: "c", text: "Prudence" },
            { id: "d", text: "Going concern" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Materiality", statement: "Ignore insignificant." }], steps: [{ reasoning: "$3 is immaterial.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Materiality" },
        },
        {
          id: "olacc-u7-pr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the business entity and matching principles apply to a small business owner.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Principles", statement: "Entity + matching." }], steps: [
            { reasoning: "Entity: owner's personal spending excluded; drawings separate.", marks: 1, markCode: "M" },
            { reasoning: "Matching: expenses recorded in period revenue earned.", marks: 1, markCode: "M" },
            { reasoning: "Clear application to scenario.", marks: 1, markCode: "M" },
            { reasoning: "Correct explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Entity separates owner; matching aligns expenses with revenue." },
        },
        {
          id: "olacc-u7-pr-q14", difficulty: "core", totalMarks: 2,
          stem: "Goods costing $150 have NRV of $120. Enter the write-down and the value in the statement.",
          response: { type: "numeric", parts: [
            { label: "Write-down ($)", answer: 30 },
            { label: "Statement value ($)", answer: 120 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Prudence", statement: "Lower of cost/NRV." }], steps: [
            { reasoning: "Write-down = $30$; value = $120$.", working: "150-120; 120", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $30 (b) $120" },
        },
        {
          id: "olacc-u7-pr-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Accruing unpaid wages at year end applies which principle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Prudence" },
            { id: "b", text: "Matching" },
            { id: "c", text: "Consistency" },
            { id: "d", text: "Materiality" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Matching", statement: "Expenses ↔ revenue." }], steps: [{ reasoning: "Wages matched to the period's work.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Matching" },
        },
        {
          id: "olacc-u7-pr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Accounting principles — extended review.",
          parts: [
            { label: "a", prompt: "Define business entity.", marks: 1 },
            { label: "b", prompt: "Define going concern.", marks: 1 },
            { label: "c", prompt: "Define prudence.", marks: 1 },
            { label: "d", prompt: "Owner pays personal bill from business. Which principle?", marks: 1 },
            { label: "e", prompt: "Prepaid insurance at year end. Which principle?", marks: 1 },
            { label: "f", prompt: "Same depreciation method used yearly. Which principle?", marks: 1 },
            { label: "g", prompt: "NRV below cost for stock. Write-down on $200 cost, $160 NRV?", marks: 2 },
            { label: "h", prompt: "Ignore $1 rounding difference. Which principle?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Principles", statement: "All GAAP concepts." },
          ], steps: [
            { part: "a", reasoning: "Business separate from owner.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Continue operating indefinitely.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Don't overstate; anticipate losses.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Business entity.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Matching.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Consistency.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "$40$.", marks: 1, markCode: "M" },
            { part: "g", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "h", reasoning: "Materiality.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) entity (b) going concern (c) prudence (d) entity (e) matching (f) consistency (g) 40 (h) materiality" },
        },
      ],
    },
    {
      id: "olacc-u7-exam",
      title: "Exam technique for Accounting",
      skill: "Apply effective strategies for Accounting exam questions.",
      lesson: {
        sections: [
          { heading: "Question types", body: "- Knowledge: define terms, state rules.\n- Application: prepare ledger accounts, statements, reconciliations.\n- Analysis: interpret figures, explain discrepancies, suggest improvements." },
          { heading: "Common pitfalls", body: "- Forgetting debit/credit sides.\n- Mixing up mark-up vs margin.\n- Not adjusting for private expenses in incomplete records.\n- Wrong side in bank reconciliation (add vs deduct)." },
          { heading: "Strategy", body: "Read questions carefully for required format (ledger account vs statement vs calculation). Show all workings — marks are often for method, not just answers. Check totals and balances before finishing." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A question asks to 'prepare a debtors control account'. What format should you use?",
          solution: "T-account format with debit/credit columns, all items listed, and closing balance brought down.",
        },
      },
      questions: [
        {
          id: "olacc-u7-ex-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In Accounting exams, marks are often awarded for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Using calculators" },
            { id: "b", text: "Only final answers" },
            { id: "c", text: "Neat handwriting" },
            { id: "d", text: "Showing correct workings and method" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Exam marks", statement: "Method matters." }], steps: [{ reasoning: "Workings earn marks.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Workings/method" },
        },
        {
          id: "olacc-u7-ex-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two common Accounting exam pitfalls.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Pitfalls", statement: "Common errors." }], steps: [
            { reasoning: "Mixing mark-up/margin; forgetting debit/credit sides.", marks: 1, markCode: "M" },
            { reasoning: "Two named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mark-up vs margin; debit/credit confusion (or other valid pairs)." },
        },
        {
          id: "olacc-u7-ex-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why showing workings is important in calculation questions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Workings", statement: "Partial credit." }], steps: [
            { reasoning: "Method earns marks even if final answer wrong.", marks: 1, markCode: "M" },
            { reasoning: "Shows understanding of process.", marks: 1, markCode: "M" },
            { reasoning: "Allows examiner to award partial credit.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Workings earn partial credit and demonstrate understanding." },
        },
        {
          id: "olacc-u7-ex-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Exam technique review.",
          parts: [
            { label: "a", prompt: "Three question types?", marks: 2 },
            { label: "b", prompt: "Two common pitfalls?", marks: 2 },
            { label: "c", prompt: "Why show workings?", marks: 2 },
            { label: "d", prompt: "What format for a ledger account?", marks: 1 },
            { label: "e", prompt: "What to check before finishing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "skill", name: "Exam technique", statement: "Types, pitfalls, strategy." },
          ], steps: [
            { part: "a", reasoning: "Knowledge, application, analysis.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Mark-up/margin; debit/credit (or others).", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Partial credit for method.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "T-account with debit/credit columns.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Totals, balances, sides.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct checks.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 types (b) 2 pitfalls (c) partial credit (d) T-account (e) totals/balances" },
        },
        {
          id: "olacc-u7-ex-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Before answering an Accounting question, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Read it carefully to identify the required format" },
            { id: "b", text: "Use only the formula sheet" },
            { id: "c", text: "Answer parts in any order" },
            { id: "d", text: "Start writing immediately" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Exam technique", statement: "Read requirements." }], steps: [{ reasoning: "Format determines the answer style.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Read carefully" },
        },
        {
          id: "olacc-u7-ex-q6", difficulty: "core", totalMarks: 2,
          stem: "A 6-mark calculation question typically awards about half its marks for method/workings. Enter the marks available for workings.",
          response: { type: "numeric", parts: [{ label: "Workings marks", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Mark allocation", statement: "Method earns marks." }], steps: [
            { reasoning: "$6/2 = 3$ marks.", working: "6/2", marks: 1, markCode: "M" },
            { reasoning: "Three marks for workings.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 marks" },
        },
        {
          id: "olacc-u7-ex-q7", difficulty: "core", totalMarks: 2,
          stem: "A 2-hour exam paper carries 80 marks. Enter the number of minutes available per mark.",
          response: { type: "numeric", parts: [{ label: "Minutes per mark", answer: 1.5 }] },
          markscheme: { principles: [{ kind: "skill", name: "Time management", statement: "Marks vs time." }], steps: [
            { reasoning: "$120/80 = 1.5$ minutes per mark.", working: "120/80", marks: 1, markCode: "M" },
            { reasoning: "1.5 minutes per mark.", marks: 1, markCode: "A" },
          ], finalAnswer: "1.5" },
        },
        {
          id: "olacc-u7-ex-q8", difficulty: "core", totalMarks: 1,
          stem: "A frequent Accounting exam pitfall is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reading the question" },
            { id: "b", text: "Showing workings" },
            { id: "c", text: "Checking totals" },
            { id: "d", text: "Mixing up mark-up and margin" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Pitfalls", statement: "Common errors." }], steps: [{ reasoning: "Mark-up/margin confusion costs marks.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Mark-up vs margin" },
        },
        {
          id: "olacc-u7-ex-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A 4-mark part asks for a definition and an application. Enter (a) marks for the definition and (b) marks for the application.",
          response: { type: "numeric", parts: [
            { label: "(a) Definition marks", answer: 1 },
            { label: "(b) Application marks", answer: 3 },
          ] },
          markscheme: { principles: [{ kind: "skill", name: "Mark scheme", statement: "Marks per part." }], steps: [
            { reasoning: "Typical split: 1 mark definition, 3 marks application.", working: "1; 3", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 1 (b) 3" },
        },
        {
          id: "olacc-u7-ex-q10", difficulty: "core", totalMarks: 2,
          stem: "Why should you check totals and balances before finishing an Accounting exam?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Checking", statement: "Accuracy." }], steps: [
            { reasoning: "Errors in totals cascade through later parts.", marks: 1, markCode: "M" },
            { reasoning: "Checking catches mistakes and secures accuracy marks.", marks: 1, markCode: "A" },
          ], finalAnswer: "To catch errors and ensure balances/totals agree." },
        },
        {
          id: "olacc-u7-ex-q11", difficulty: "challenge", totalMarks: 3,
          stem: "A 90-minute exam has questions worth 10, 20 and 30 marks. Enter (a) minutes for the 10-mark question, (b) for the 20-mark and (c) for the 30-mark question (1.5 min per mark).",
          response: { type: "numeric", parts: [
            { label: "(a) 10-mark question (min)", answer: 15 },
            { label: "(b) 20-mark question (min)", answer: 30 },
            { label: "(c) 30-mark question (min)", answer: 45 },
          ] },
          markscheme: { principles: [{ kind: "skill", name: "Time management", statement: "Allocate by marks." }], steps: [
            { reasoning: "$10 × 1.5 = 15$; $20 × 1.5 = 30$; $30 × 1.5 = 45$.", working: "10*1.5; 20*1.5; 30*1.5", marks: 1, markCode: "M" },
            { reasoning: "All three correct.", marks: 1, markCode: "M" },
            { reasoning: "Answers correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 15 (b) 30 (c) 45" },
        },
        {
          id: "olacc-u7-ex-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which practice most reliably earns marks in Accounting calculations?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rushing to finish early" },
            { id: "b", text: "Writing only the final answer" },
            { id: "c", text: "Showing clear method and workings" },
            { id: "d", text: "Skipping definitions" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Exam marks", statement: "Method matters." }], steps: [{ reasoning: "Workings earn method marks.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Show workings" },
        },
        {
          id: "olacc-u7-ex-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the best approach to a question asking you to 'prepare a debtors control account'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Question approach", statement: "Format and content." }], steps: [
            { reasoning: "Use T-account format with debit and credit columns.", marks: 1, markCode: "M" },
            { reasoning: "List all items on the correct sides.", marks: 1, markCode: "M" },
            { reasoning: "Total each side and insert closing balance.", marks: 1, markCode: "M" },
            { reasoning: "Check balance agrees with list of balances.", marks: 1, markCode: "A" },
          ], finalAnswer: "T-account, correct sides, totals, closing balance, check." },
        },
        {
          id: "olacc-u7-ex-q14", difficulty: "core", totalMarks: 2,
          stem: "A structured question has parts worth 2, 3, 4 and 1 marks. Enter the total marks.",
          response: { type: "numeric", parts: [{ label: "Total marks", answer: 10 }] },
          markscheme: { principles: [{ kind: "skill", name: "Mark totals", statement: "Sum of parts." }], steps: [
            { reasoning: "$2 + 3 + 4 + 1 = 10$.", working: "2+3+4+1", marks: 1, markCode: "M" },
            { reasoning: "Total is 10 marks.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olacc-u7-ex-q15", difficulty: "foundation", totalMarks: 1,
          stem: "A ledger account in an exam answer should be drawn as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A paragraph of text" },
            { id: "b", text: "A pie chart" },
            { id: "c", text: "A T-account with debit and credit columns" },
            { id: "d", text: "A single column of figures" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Format", statement: "T-account." }], steps: [{ reasoning: "Standard ledger format required.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** T-account" },
        },
        {
          id: "olacc-u7-ex-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Exam technique — extended review.",
          parts: [
            { label: "a", prompt: "Three question types in Accounting?", marks: 2 },
            { label: "b", prompt: "Two common pitfalls?", marks: 2 },
            { label: "c", prompt: "Why show workings?", marks: 2 },
            { label: "d", prompt: "Correct format for a ledger account?", marks: 1 },
            { label: "e", prompt: "What to check before finishing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "skill", name: "Exam technique", statement: "Types, pitfalls, strategy." },
          ], steps: [
            { part: "a", reasoning: "Knowledge, application, analysis.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Mark-up/margin; debit/credit (or others).", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Partial credit for method.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "T-account with debit/credit columns.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Totals, balances, sides.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct checks.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 types (b) 2 pitfalls (c) partial credit (d) T-account (e) totals/balances" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u7-7-3-notes", title: "Principles and exam technique — notes", summary: "GAAP concepts and exam strategies.",
      sections: [
        { heading: "Principles", body: "Entity, going concern, consistency, prudence, matching, materiality — know which applies to each scenario." },
        { heading: "Exam", body: "Show workings; use correct formats; check totals and balances." },
      ] },
  ],
};

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
            { id: "a", text: "Prudence" }, { id: "b", text: "Consistency" }, { id: "c", text: "Going concern" }, { id: "d", text: "Materiality" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Prudence", statement: "Anticipate losses." }], steps: [{ reasoning: "Prudence principle.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Prudence" },
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
            { id: "a", text: "Showing correct workings and method" }, { id: "b", text: "Only final answers" }, { id: "c", text: "Neat handwriting" }, { id: "d", text: "Using calculators" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Exam marks", statement: "Method matters." }], steps: [{ reasoning: "Workings earn marks.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Workings/method" },
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

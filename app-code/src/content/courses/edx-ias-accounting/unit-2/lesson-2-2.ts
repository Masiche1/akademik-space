import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eiasacct-u2-lesson-2-2",
  code: "2-2",
  title: "Inventory, Depreciation and Bad Debts",
  goal: "I CAN account for inventory, depreciation and bad debts.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 2 — Sources and Recording of Data",
  ],
  vocabulary: [
    { term: "Inventory", definition: "Stock held for resale — current asset." },
    {
      term: "Cost of sales",
      definition:
        "Direct costs — opening inventory + purchases - closing inventory.",
    },
    {
      term: "Depreciation",
      definition: "Allocation of asset cost over useful life.",
    },
    {
      term: "Accumulated depreciation",
      definition: "Total depreciation charged to date.",
    },
    { term: "Net book value", definition: "Cost - accumulated depreciation." },
    { term: "Bad debt", definition: "Uncollectable receivable — written off." },
  ],
  concepts: [
    {
      id: "eiasacct-u2-inventory",
      title: "Inventory Valuation",
      skill: "Calculate cost of sales and closing inventory.",
      lesson: {
        sections: [
          {
            heading: "Cost of sales",
            body: "**Formula**: Opening inventory + Purchases - Closing inventory = Cost of sales. **Opening inventory**: stock at start of period. **Purchases**: stock bought during period. **Closing inventory**: stock at end of period.\n\n**Example**: Opening £5,000 + Purchases £20,000 - Closing £7,000 = COS £18,000.",
          },
          {
            heading: "Inventory valuation",
            body: "**Lower of cost or NRV**: value at lower of cost or net realizable value — prudence. **NRV**: selling price - costs to sell. **FIFO**: first in, first out — oldest costs first. **AVCO**: average cost — weighted average.\n\n**Physical count**: verify actual stock matches records — stocktake.",
          },
        ],
        keyFormulas: [
          {
            name: "Cost of sales",
            statement: "Opening inv + Purchases - Closing inv",
          },
          { name: "Gross profit", statement: "Revenue - Cost of sales" },
        ],
        workedExample: {
          problem: "Opening £3,000, purchases £15,000, closing £4,000. COS?",
          solution: "3,000 + 15,000 - 4,000 = £14,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-inv-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cost of sales?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expenses" },
              { id: "b", text: "Revenue" },
              { id: "c", text: "Opening + purchases - closing inventory" },
              { id: "d", text: "Total purchases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "COS", statement: "OI+P-CI." },
            ],
            steps: [{ reasoning: "COS = OI+P-CI.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(c)** OI+P-CI",
            commonErrors: ["Purchases only."],
          },
        },
        {
          id: "eiasacct-u2-inv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate: Opening £4,000, purchases £18,000, closing £6,000.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "COS calculation",
                statement: "OI+P-CI.",
              },
            ],
            steps: [
              {
                reasoning: "4,000 + 18,000 = £22,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "22,000 - 6,000 = £16,000 COS.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Check: COS < purchases — correct.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "£16,000.",
            commonErrors: ["Wrong formula.", "No closing."],
          },
        },
        {
          id: "eiasacct-u2-inv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain lower of cost or NRV principle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inventory valuation",
                statement: "Lower of cost/NRV.",
              },
            ],
            steps: [
              {
                reasoning: "Value at lower of cost or NRV — prudence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "NRV = selling price - costs to sell.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "If NRV < cost — write down to NRV.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents overstating assets — realistic value.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Lower of cost/NRV — prudence.",
            commonErrors: ["Cost only.", "NRV only."],
          },
        },
        {
          id: "eiasacct-u2-inv-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Revenue £50,000, opening inv £5,000, purchases £30,000, closing inv £8,000.",
          parts: [
            { label: "a", prompt: "Calculate COS and gross profit.", marks: 4 },
            { label: "b", prompt: "Calculate gross margin.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "COS+margin",
                statement: "Calculate+ratio.",
              },
            ],
            steps: [
              {
                reasoning: "(a) COS = 5,000 + 30,000 - 8,000 = £27,000.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Gross profit = 50,000 - 27,000 = £23,000.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Gross margin = 23,000 / 50,000 × 100 = 46%.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Margin 46% — healthy sales efficiency.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) COS £27k, GP £23k (b) 46%",
            commonErrors: ["Wrong COS.", "Wrong margin."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-depreciation",
      title: "Depreciation",
      skill: "Calculate depreciation using straight-line method.",
      lesson: {
        sections: [
          {
            heading: "Depreciation concept",
            body: "**Purpose**: allocate asset cost over useful life — match expense to usage. **Methods**: straight-line (equal annual), reducing balance (percentage of NBV), units of production (usage-based).\n\n**Straight-line**: (Cost - Residual value) / Useful life = annual depreciation. **Residual value**: estimated value at end of life.",
          },
          {
            heading: "Depreciation entries",
            body: "**Annual charge**: debit depreciation expense, credit accumulated depreciation. **NBV**: cost - accumulated depreciation = net book value. **Disposal**: remove cost and accumulated depreciation — profit/loss on disposal.\n\n**Example**: Equipment £10,000, residual £1,000, life 5 years → annual depreciation = (10,000-1,000)/5 = £1,800.",
          },
        ],
        keyFormulas: [
          {
            name: "Straight-line depreciation",
            statement: "(Cost - Residual) / Life",
          },
          {
            name: "Net book value",
            statement: "Cost - Accumulated depreciation",
          },
        ],
        workedExample: {
          problem:
            "Asset £8,000, residual £800, life 4 years. Annual depreciation?",
          solution: "(8,000-800)/4 = £1,800.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-dep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is depreciation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asset purchase" },
              { id: "b", text: "Allocation of asset cost over useful life" },
              { id: "c", text: "Cash payment" },
              { id: "d", text: "Asset sale" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Depreciation",
                statement: "Cost allocation.",
              },
            ],
            steps: [
              {
                reasoning: "Depreciation = cost allocation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Cost allocation",
            commonErrors: ["Purchase confused."],
          },
        },
        {
          id: "eiasacct-u2-dep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate: Cost £12,000, residual £2,000, life 5 years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Straight-line",
                statement: "(C-RV)/Life.",
              },
            ],
            steps: [
              {
                reasoning: "Depreciable amount = 12,000 - 2,000 = £10,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Annual = 10,000 / 5 = £2,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Check: 5 × 2,000 = 10,000 = depreciable amount.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "£2,000 per year.",
            commonErrors: ["Wrong formula.", "No residual."],
          },
        },
        {
          id: "eiasacct-u2-dep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why depreciation is charged.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation purpose",
                statement: "Match cost to usage.",
              },
            ],
            steps: [
              {
                reasoning: "Match expense to period of use.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reflect wear and tear — asset loses value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accruals — expense when used, not when bought.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "NBV shows realistic asset value.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Match+wear+accruals+realistic.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u2-dep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Equipment £20,000, residual £4,000, life 4 years. After 2 years:",
          parts: [
            { label: "a", prompt: "Calculate annual depreciation.", marks: 4 },
            { label: "b", prompt: "Calculate NBV.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Depreciation+NBV",
                statement: "Calculate+value.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Annual = (20,000 - 4,000) / 4 = £4,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: 4 × 4,000 = 16,000 = depreciable.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Accumulated depreciation = 4,000 × 2 = £8,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) NBV = 20,000 - 8,000 = £12,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £4,000/year (b) NBV £12,000",
            commonErrors: ["Wrong depreciation.", "Wrong NBV."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-baddebt",
      title: "Bad Debts and Doubtful Debts",
      skill: "Account for bad debts and doubtful debts.",
      lesson: {
        sections: [
          {
            heading: "Bad debts",
            body: "**Bad debt**: receivable uncollectable — written off. **Entry**: debit bad debts expense, credit receivables. **Doubtful debts**: receivables at risk — provide for them. **Provision**: estimate uncollectable portion — debit doubtful debts expense, credit provision for doubtful debts.\n\n**Recovery**: if bad debt later paid — debit cash, credit bad debts recovered.",
          },
          {
            heading: "Impact",
            body: "**Bad debts**: reduce profit — expense. **Doubtful debts**: reduce asset value — provision. **Conservative**: prudence — anticipate losses. **Provision adjustment**: increase/decrease based on experience.\n\n**Example**: Receivables £10,000, estimate 5% doubtful → provision £500.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Customer won't pay £300. Treatment?",
          solution: "Bad debt — write off.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-bd-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a bad debt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discount" },
              { id: "b", text: "Late payment" },
              { id: "c", text: "Credit sale" },
              { id: "d", text: "Uncollectable receivable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bad debt",
                statement: "Uncollectable.",
              },
            ],
            steps: [
              {
                reasoning: "Bad debt = uncollectable.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Uncollectable",
            commonErrors: ["Late confused."],
          },
        },
        {
          id: "eiasacct-u2-bd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two debt-related accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt accounts",
                statement: "Bad+doubtful.",
              },
            ],
            steps: [
              {
                reasoning: "Bad debts — uncollectable written off.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Doubtful debts — provision for risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Provision for doubtful debts — contra-asset.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Bad debts, doubtful debts, provision.",
            commonErrors: ["Only one.", "Wrong account."],
          },
        },
        {
          id: "eiasacct-u2-bd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain difference between bad debt and doubtful debt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Bad vs doubtful",
                statement: "Certain vs risk.",
              },
            ],
            steps: [
              {
                reasoning: "Bad debt — definitely uncollectable — write off.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Doubtful debt — might not be collected — provide.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bad debt removes asset; doubtful reduces value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prudence — anticipate losses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Certain vs risk.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u2-bd-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Receivables £20,000, 5% expected bad.",
          parts: [
            { label: "a", prompt: "Calculate provision needed.", marks: 4 },
            { label: "b", prompt: "Show adjusting entry.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Provision",
                statement: "Estimate+adjust.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Provision = 20,000 × 5% = £1,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Net receivables = 20,000 - 1,000 = £19,000.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Debit Doubtful Debts Expense £1,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Credit Provision for Doubtful Debts £1,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £1,000 provision (b) Dr expense, Cr provision",
            commonErrors: ["Wrong %.", "Wrong entry."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-control",
      title: "Control Accounts",
      skill: "Use control accounts to monitor receivables and payables.",
      lesson: {
        sections: [
          {
            heading: "Control accounts",
            body: "**Purpose**: summary account — monitor total owed by customers (sales ledger control) or to suppliers (purchase ledger control). **Sales ledger control**: debit balance = total receivables. **Purchase ledger control**: credit balance = total payables.\n\n**Check**: control account total should match sum of individual accounts — finds errors, omissions.",
          },
          {
            heading: "Bank reconciliation",
            body: "**Purpose**: match cash book to bank statement — identify differences. **Timing**: deposits in transit, unpresented cheques. **Errors**: bank charges, direct debits, standing orders.\n\n**Process**: update cash book → compare to statement → identify differences → adjust → reconcile.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Control account shows £5,000 owed by customers. Meaning?",
          solution: "Total receivables = £5,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-ctrl-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a control account?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expense account" },
              { id: "b", text: "Bank account" },
              { id: "c", text: "Individual account" },
              { id: "d", text: "Summary account monitoring totals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Control account",
                statement: "Summary.",
              },
            ],
            steps: [
              { reasoning: "Control = summary.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Summary",
            commonErrors: ["Individual confused."],
          },
        },
        {
          id: "eiasacct-u2-ctrl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of control accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control types",
                statement: "Sales+purchase.",
              },
            ],
            steps: [
              {
                reasoning: "Sales ledger control — receivables.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Purchase ledger control — payables.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Monitor totals — find errors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sales ledger control, purchase ledger control.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiasacct-u2-ctrl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain purpose of bank reconciliation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank rec",
                statement: "Match records.",
              },
            ],
            steps: [
              {
                reasoning: "Match cash book to bank statement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify differences — timing, errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ensure accuracy — both records correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Detect fraud — unauthorised transactions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Match+identify+accuracy+fraud.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u2-ctrl-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Cash book shows £10,000, bank statement shows £9,500.",
          parts: [
            {
              label: "a",
              prompt: "Possible reasons for difference.",
              marks: 4,
            },
            { label: "b", prompt: "How to reconcile?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank reconciliation",
                statement: "Timing+errors.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Deposits in transit — not yet on statement.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Unpresented cheques — not yet cleared.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Bank charges — not in cash book.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Errors — either record wrong.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Update cash book — add missing items.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Compare — should match after adjustments.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) timing+charges+errors (b) update+compare",
            commonErrors: ["No reasons.", "No process."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-summary2",
      title: "Inventory, Depreciation, Debts Summary",
      skill: "Summarise asset and debt accounting.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Inventory**: COS = OI+P-CI; value at lower of cost/NRV. **Depreciation**: allocate cost over life — straight-line method. **Bad debts**: write off uncollectable; doubtful debts — provide for risk. **Control accounts**: monitor receivables/payables totals.\n\n**Key idea**: accurate asset and debt accounting → reliable statements.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: calculate COS, depreciation, provisions. **Evaluate**: valuation methods, debt risk, control effectiveness. **Analyse**: asset values, debt exposure, error detection.\n\n**Key concepts**: COS formula, straight-line, NBV, bad/doubtful debts, control accounts.",
          },
        ],
        keyFormulas: [
          { name: "COS", statement: "OI + P - CI" },
          { name: "Depreciation", statement: "(Cost - RV) / Life" },
          { name: "NBV", statement: "Cost - Accumulated depreciation" },
        ],
        workedExample: {
          problem: "All assets and debts accounted correctly. Result?",
          solution: "Accurate balance sheet.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is net book value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost - accumulated depreciation" },
              { id: "b", text: "Purchase cost" },
              { id: "c", text: "Residual value" },
              { id: "d", text: "Selling price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NBV", statement: "Cost-accum dep." },
            ],
            steps: [
              {
                reasoning: "NBV = cost - accum dep.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Cost-accum dep",
            commonErrors: ["Cost confused."],
          },
        },
        {
          id: "eiasacct-u2-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two inventory valuation methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Valuation methods",
                statement: "FIFO, AVCO, LIFO.",
              },
            ],
            steps: [
              {
                reasoning: "FIFO — first in, first out.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "AVCO — average cost.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Lower of cost or NRV — prudence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "FIFO, AVCO, lower of cost/NRV.",
            commonErrors: ["Only one.", "Wrong method."],
          },
        },
        {
          id: "eiasacct-u2-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why depreciation uses straight-line method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Straight-line",
                statement: "Equal charges.",
              },
            ],
            steps: [
              {
                reasoning: "Equal annual charge — simple, consistent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Matches usage — steady benefit each year.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easy to calculate — (cost-RV)/life.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conservative — doesn't front-load expense.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Simple+consistent+match+easy.",
            commonErrors: ["Wrong method.", "No reason."],
          },
        },
        {
          id: "eiasacct-u2-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate bad debt provision.",
          parts: [
            { label: "a", prompt: "Purpose of provision.", marks: 4 },
            { label: "b", prompt: "Impact on statements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Provision",
                statement: "Anticipate losses.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Anticipate uncollectable debts — prudence.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Match expense to period — not when written off.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Reduces receivables — net value shown.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Reduces profit — expense charged.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) anticipate+match (b) reduce assets+profit",
            commonErrors: ["No purpose.", "No impact."],
          },
        },
      ],
    },
  ],
};

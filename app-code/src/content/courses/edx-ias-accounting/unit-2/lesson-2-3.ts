import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eiasacct-u2-lesson-2-3",
  code: "2-3",
  title: "Bank Reconciliation and Analysis",
  goal: "I CAN reconcile bank accounts and analyse ledger balances.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 2 — Sources and Recording of Data",
  ],
  vocabulary: [
    {
      term: "Bank reconciliation",
      definition: "Statement matching cash book to bank statement.",
    },
    {
      term: "Unpresented cheques",
      definition: "Cheques issued but not yet cleared.",
    },
    {
      term: "Deposits in transit",
      definition: "Deposits made but not yet on statement.",
    },
    { term: "Bank charges", definition: "Fees deducted by bank." },
    { term: "Standing order", definition: "Regular automatic payment." },
    {
      term: "Direct debit",
      definition: "Regular automatic payment from account.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u2-bankrec",
      title: "Bank Reconciliation",
      skill: "Prepare bank reconciliation statement.",
      lesson: {
        sections: [
          {
            heading: "Reconciliation process",
            body: "**Step 1**: update cash book — add bank charges, direct debits, standing orders, interest. **Step 2**: compare balances — cash book vs bank statement. **Step 3**: identify differences — timing items, errors. **Step 4**: adjust — add unpresented cheques, deduct deposits in transit.\n\n**Result**: reconciled balance should match on both sides.",
          },
          {
            heading: "Timing differences",
            body: "**Unpresented cheques**: issued but not cleared — deduct from bank balance. **Deposits in transit**: paid in but not credited — add to bank balance. **Bank charges**: deducted by bank — add to cash book. **Direct debits/standing orders**: regular payments — add to cash book.\n\n**Example**: Cash book £5,000, bank £4,800. Difference £200 = unpresented cheques £300 - deposits in transit £100.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Cash book £3,000, bank £2,700, unpresented cheques £500, deposits £200. Reconciled?",
          solution: "3,000 - 500 + 200 = £2,700 — matches bank.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-br-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is bank reconciliation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loan application" },
              { id: "b", text: "Closing account" },
              { id: "c", text: "Matching cash book to bank statement" },
              { id: "d", text: "Opening bank account" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bank rec",
                statement: "Match records.",
              },
            ],
            steps: [
              { reasoning: "Bank rec = match.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Match records",
            commonErrors: ["Opening confused."],
          },
        },
        {
          id: "eiasacct-u2-br-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two timing differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timing differences",
                statement: "Cheques+deposits.",
              },
            ],
            steps: [
              {
                reasoning: "Unpresented cheques — issued, not cleared.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deposits in transit — paid in, not credited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both are timing — will resolve.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Unpresented cheques, deposits in transit.",
            commonErrors: ["Only one.", "Wrong item."],
          },
        },
        {
          id: "eiasacct-u2-br-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why bank statement and cash book differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Differences",
                statement: "Timing+errors.",
              },
            ],
            steps: [
              {
                reasoning: "Timing — cheques/deposits in transit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bank items — charges, interest, direct debits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Errors — either record wrong.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reconciliation identifies and resolves.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Timing+bank items+errors.",
            commonErrors: ["Same.", "No reason."],
          },
        },
        {
          id: "eiasacct-u2-br-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Cash book £8,000, bank statement £7,600.",
          parts: [
            { label: "a", prompt: "Identify possible differences.", marks: 4 },
            { label: "b", prompt: "How to reconcile?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank reconciliation",
                statement: "Find+adjust.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Unpresented cheques — issued, not cleared.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Deposits in transit — paid in, not credited.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Bank charges — deducted by bank.",
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
                reasoning: "(b) Update cash book — add bank items.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Adjust bank balance — timing items.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) timing+charges+errors (b) update+adjust",
            commonErrors: ["No differences.", "No process."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-analysis",
      title: "Ledger Analysis",
      skill: "Analyse ledger balances and account movements.",
      lesson: {
        sections: [
          {
            heading: "Account analysis",
            body: "**Debit balance**: assets, expenses — normal. **Credit balance**: liabilities, equity, income — normal. **Abnormal**: asset with credit balance or vice versa — investigate.\n\n**Analysis**: compare balances — trends, ratios, anomalies. **Control**: totals should match supporting records — receivables, payables.",
          },
          {
            heading: "Ratio analysis",
            body: "**Current ratio**: current assets/liabilities — liquidity. **Gross margin**: gross profit/revenue — sales efficiency. **Net margin**: net profit/revenue — overall profitability. **Return on capital**: profit/equity — return to owners.\n\n**Interpretation**: ratios show performance — compare to industry, previous years.",
          },
        ],
        keyFormulas: [
          { name: "Current ratio", statement: "CA / CL" },
          { name: "Gross margin", statement: "GP / Revenue" },
          { name: "Net margin", statement: "NP / Revenue" },
        ],
        workedExample: {
          problem: "Receivables account has credit balance. Meaning?",
          solution: "Abnormal — investigate (overpaid customers or errors).",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-ana-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a normal balance for assets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debit" },
              { id: "b", text: "Credit" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Either" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Normal balance",
                statement: "Assets debit.",
              },
            ],
            steps: [
              { reasoning: "Assets = debit.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Debit",
            commonErrors: ["Credit confused."],
          },
        },
        {
          id: "eiasacct-u2-ana-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two financial ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratios",
                statement: "Liquidity+profitability.",
              },
            ],
            steps: [
              {
                reasoning: "Current ratio — liquidity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gross margin — sales efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net margin — overall profitability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Current, gross margin, net margin, ROE.",
            commonErrors: ["Only one.", "Wrong ratio."],
          },
        },
        {
          id: "eiasacct-u2-ana-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why abnormal balances need investigation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Abnormal balances",
                statement: "Error indicator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Assets should have debit balance — credit abnormal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Indicates errors — wrong postings, omissions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Or unusual transactions — overpayments, refunds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investigate — correct or explain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Error indicator — investigate.",
            commonErrors: ["Ignore.", "No reason."],
          },
        },
        {
          id: "eiasacct-u2-ana-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Revenue £100,000, GP £40,000, NP £15,000.",
          parts: [
            { label: "a", prompt: "Calculate margins.", marks: 4 },
            { label: "b", prompt: "Interpret results.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margins",
                statement: "Calculate+interpret.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Gross margin = 40,000 / 100,000 = 40%.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Net margin = 15,000 / 100,000 = 15%.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Gross margin 40% — good sales efficiency.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Net margin 15% — expenses take 25% of revenue.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 40%, 15% (b) good GP, high expenses",
            commonErrors: ["Wrong margin.", "No interpretation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-summary3",
      title: "Recording and Analysis Summary",
      skill: "Summarise recording and analysis concepts.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Source documents**: evidence for transactions. **Recording**: verify, classify, record, post. **Adjustments**: accruals, prepayments, depreciation. **Control**: bank reconciliation, control accounts. **Analysis**: ratios, abnormal balances.\n\n**Key idea**: accurate recording + analysis = reliable information for decisions.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: reconcile bank, analyse accounts, calculate ratios. **Evaluate**: reconciliation accuracy, control effectiveness, ratio interpretation. **Analyse**: errors, differences, performance indicators.\n\n**Key concepts**: bank reconciliation, control accounts, ratios, abnormal balances.",
          },
        ],
        keyFormulas: [
          { name: "Current ratio", statement: "CA / CL" },
          { name: "Gross margin", statement: "GP / Revenue" },
          { name: "Net margin", statement: "NP / Revenue" },
        ],
        workedExample: {
          problem: "All records reconciled and analysed. Result?",
          solution: "Reliable financial information.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-sum3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of bank reconciliation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Match cash book to bank statement" },
              { id: "b", text: "Get loan" },
              { id: "c", text: "Close account" },
              { id: "d", text: "Open account" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank rec",
                statement: "Match records.",
              },
            ],
            steps: [
              { reasoning: "Bank rec = match.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Match",
            commonErrors: ["Open confused."],
          },
        },
        {
          id: "eiasacct-u2-sum3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two control accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control accounts",
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
          id: "eiasacct-u2-sum3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ratios are useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio usefulness",
                statement: "Performance.",
              },
            ],
            steps: [
              {
                reasoning: "Summarise performance — easy to understand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compare — over time, between companies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify problems — liquidity, profitability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Support decisions — investment, lending.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Summarise+compare+identify+decisions.",
            commonErrors: ["Not useful.", "One reason."],
          },
        },
        {
          id: "eiasacct-u2-sum3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate importance of accurate records.",
          parts: [
            { label: "a", prompt: "Benefits of accuracy.", marks: 4 },
            { label: "b", prompt: "Consequences of errors.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Record accuracy",
                statement: "Foundation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Reliable statements — accurate data.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Good decisions — based on truth.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Compliance — legal requirements.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Trust — stakeholders rely on it.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Wrong decisions — misleading data.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Legal issues — tax, audit problems.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) reliable+decisions+compliance+trust (b) wrong decisions+legal",
            commonErrors: ["No benefits.", "No consequences."],
          },
        },
      ],
    },
  ],
};

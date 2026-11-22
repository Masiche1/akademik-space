import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eiasacct-u3-lesson-3-1",
  code: "3-1",
  title: "Sole Trader Accounts",
  goal: "I CAN prepare financial statements for sole traders.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 3 — Accounting for Sole Traders",
  ],
  vocabulary: [
    {
      term: "Sole trader",
      definition: "Business owned by one person — unlimited liability.",
    },
    {
      term: "Final accounts",
      definition:
        "Financial statements at year-end — income statement + balance sheet.",
    },
    {
      term: "Capital",
      definition: "Owner's investment + retained profits - drawings.",
    },
    { term: "Drawings", definition: "Owner's withdrawals for personal use." },
    {
      term: "Accruals",
      definition: "Expenses incurred but not paid — adjust at year-end.",
    },
    {
      term: "Prepayments",
      definition: "Expenses paid in advance — adjust at year-end.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u3-sole",
      title: "Sole Trader Business",
      skill: "Understand sole trader structure and accounts.",
      lesson: {
        sections: [
          {
            heading: "Sole trader characteristics",
            body: "**Ownership**: one person owns and controls. **Liability**: unlimited — personal assets at risk. **Tax**: profits taxed as personal income. **Accounts**: income statement + balance sheet annually.\n\n**Advantages**: simple to set up, full control, keep all profits. **Disadvantages**: unlimited liability, limited capital, no continuity if owner exits.",
          },
          {
            heading: "Capital account",
            body: "**Opening capital**: owner's investment at start. **Add**: additional investments during year. **Subtract**: drawings — personal withdrawals. **Profit**: added to capital at year-end.\n\n**Closing capital**: opening capital + additional capital - drawings + net profit = closing capital.",
          },
        ],
        keyFormulas: [
          {
            name: "Closing capital",
            statement: "Opening capital + additional - drawings + profit",
          },
        ],
        workedExample: {
          problem:
            "Opening capital £10,000, drawings £3,000, profit £5,000. Closing capital?",
          solution: "10,000 - 3,000 + 5,000 = £12,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-sole-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a sole trader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Franchise" },
              { id: "b", text: "Company" },
              { id: "c", text: "Business owned by one person" },
              { id: "d", text: "Partnership" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sole trader",
                statement: "One owner.",
              },
            ],
            steps: [
              {
                reasoning: "Sole trader = one owner.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** One owner",
            commonErrors: ["Partnership confused."],
          },
        },
        {
          id: "eiasacct-u3-sole-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of sole trader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sole trader advantages",
                statement: "Control+profit.",
              },
            ],
            steps: [
              {
                reasoning: "Full control — owner makes all decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Keep all profits — no sharing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Simple setup — easy to start.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Control, all profits, simple, flexible.",
            commonErrors: ["Only one.", "Wrong advantage."],
          },
        },
        {
          id: "eiasacct-u3-sole-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain unlimited liability risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unlimited liability",
                statement: "Personal risk.",
              },
            ],
            steps: [
              {
                reasoning: "Owner personally liable for debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Personal assets at risk — house, savings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Business failure = personal financial loss.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Main disadvantage of sole trader.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Personal assets at risk.",
            commonErrors: ["Limited liability.", "No risk."],
          },
        },
        {
          id: "eiasacct-u3-sole-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Calculate closing capital.",
          parts: [
            {
              label: "a",
              prompt:
                "Given: opening £15,000, additional £5,000, drawings £8,000, profit £12,000.",
              marks: 4,
            },
            { label: "b", prompt: "Explain formula.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing capital",
                statement: "Formula.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 15,000 + 5,000 - 8,000 + 12,000 = £24,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Check: capital increased by profit net of drawings.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Opening + additional - drawings + profit.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Drawings reduce capital; profit increases.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £24,000 (b) formula explained",
            commonErrors: ["Wrong formula.", "Wrong calculation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-adjustments",
      title: "Year-End Adjustments",
      skill: "Make year-end adjustments for final accounts.",
      lesson: {
        sections: [
          {
            heading: "Adjustments needed",
            body: "**Accrued expenses**: wages owed, interest accrued — debit expense, credit accrued liability. **Prepaid expenses**: insurance, rent paid in advance — debit prepaid asset, credit expense. **Depreciation**: allocate asset cost — debit expense, credit accumulated depreciation. **Bad debts**: uncollectable — debit expense, credit receivables.\n\n**Purpose**: match revenues and expenses to correct period — accruals basis.",
          },
          {
            heading: "Adjustment process",
            body: "**Identify**: transactions affecting current period but not recorded. **Calculate**: amount to adjust — portion used/owed. **Record**: journal entry — debit and credit. **Post**: update ledger — adjust balances.\n\n**Example**: Insurance £1,200 paid, 6 months used → expense £600, prepaid £600.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Wages £2,000 owed at year-end. Adjustment?",
          solution: "Debit Wages £2,000, Credit Accrued Wages £2,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-adj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an accrued expense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asset purchase" },
              { id: "b", text: "Incurred but not paid" },
              { id: "c", text: "Paid in advance" },
              { id: "d", text: "Revenue earned" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accrued expense",
                statement: "Incurred not paid.",
              },
            ],
            steps: [
              { reasoning: "Accrued = incurred.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Incurred not paid",
            commonErrors: ["Prepayment confused."],
          },
        },
        {
          id: "eiasacct-u3-adj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two year-end adjustments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Year-end adjustments",
                statement: "Accruals+prepayments+depreciation.",
              },
            ],
            steps: [
              {
                reasoning: "Accrued expenses — wages owed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prepaid expenses — insurance advance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Depreciation — asset cost allocation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accruals, prepayments, depreciation, bad debts.",
            commonErrors: ["Only one.", "Wrong adjustment."],
          },
        },
        {
          id: "eiasacct-u3-adj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why adjustments are needed for final accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjustment purpose",
                statement: "Accurate profit.",
              },
            ],
            steps: [
              {
                reasoning: "Match revenues and expenses to period.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accruals basis — not cash basis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate profit — true and fair view.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Correct tax — pay right amount.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Match+accruals+accurate+tax.",
            commonErrors: ["Not needed.", "Cash basis."],
          },
        },
        {
          id: "eiasacct-u3-adj-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Insurance £1,800 paid, 9 months used.",
          parts: [
            { label: "a", prompt: "Calculate expense and prepaid.", marks: 4 },
            { label: "b", prompt: "Show adjusting entry.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Prepayment", statement: "Split cost." },
            ],
            steps: [
              {
                reasoning:
                  "(a) Used 9/12 = £1,350 expense; prepaid 3/12 = £450.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Expense this period = £1,350 only.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Debit Prepaid Insurance £450, Credit Insurance Expense £450.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Moves unused portion to asset.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) £1,350 exp, £450 prepaid (b) Dr prepaid, Cr expense",
            commonErrors: ["All expense.", "Wrong entry."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-finalaccounts",
      title: "Preparing Final Accounts",
      skill: "Prepare income statement and balance sheet for sole trader.",
      lesson: {
        sections: [
          {
            heading: "Income statement preparation",
            body: "**Revenue**: total sales. **Cost of sales**: opening inv + purchases - closing inv. **Gross profit**: revenue - COS. **Expenses**: all indirect costs. **Net profit**: GP - expenses.\n\n**Adjustments**: include accrued expenses, exclude prepaid portions, include depreciation, deduct bad debts.",
          },
          {
            heading: "Balance sheet preparation",
            body: "**Assets**: non-current (equipment NBV) + current (cash, inventory, receivables net of provision, prepaid). **Liabilities**: non-current (loans) + current (payables, accrued expenses, bank overdraft). **Equity**: capital (opening + additional - drawings + profit).\n\n**Check**: assets = liabilities + equity — must balance.",
          },
        ],
        keyFormulas: [
          { name: "Net profit", statement: "Revenue - COS - Expenses" },
          { name: "Balance sheet", statement: "Assets = Liabilities + Equity" },
        ],
        workedExample: {
          problem:
            "Prepare income statement. Revenue £80,000, COS £50,000, expenses £20,000.",
          solution: "GP £30,000, NP £10,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-fa-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are final accounts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax returns" },
              { id: "b", text: "Monthly reports" },
              { id: "c", text: "Year-end financial statements" },
              { id: "d", text: "Bank statements" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Final accounts",
                statement: "Year-end statements.",
              },
            ],
            steps: [
              { reasoning: "Final = year-end.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Year-end",
            commonErrors: ["Monthly confused."],
          },
        },
        {
          id: "eiasacct-u3-fa-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two components of income statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Income statement",
                statement: "Revenue+expenses+profit.",
              },
            ],
            steps: [
              {
                reasoning: "Revenue — total sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cost of sales — direct costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Expenses — indirect costs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Revenue, COS, gross profit, expenses, net profit.",
            commonErrors: ["Only one.", "Wrong component."],
          },
        },
        {
          id: "eiasacct-u3-fa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why balance sheet must balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balance sheet balance",
                statement: "Equation.",
              },
            ],
            steps: [
              {
                reasoning: "Assets = Liabilities + Equity — equation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Every transaction affects two sides.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balance proves accuracy — double-entry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Imbalance = error somewhere.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Equation must balance.",
            commonErrors: ["No reason.", "One reason."],
          },
        },
        {
          id: "eiasacct-u3-fa-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare balance sheet summary.",
          parts: [
            { label: "a", prompt: "List asset categories.", marks: 4 },
            {
              label: "b",
              prompt: "List liability and equity categories.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balance sheet",
                statement: "Structure.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Non-current assets — equipment, property.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Current assets — cash, inventory, receivables, prepaid.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Non-current liabilities — long-term loans.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Current liabilities — payables, accrued, overdraft.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Equity — capital.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check: assets = liabilities + equity.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) non-current+current (b) liabilities+equity",
            commonErrors: ["Missing categories.", "No check."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-analysis",
      title: "Analysing Sole Trader Accounts",
      skill: "Analyse sole trader performance using ratios.",
      lesson: {
        sections: [
          {
            heading: "Profitability ratios",
            body: "**Gross margin**: GP/revenue — sales efficiency. **Net margin**: NP/revenue — overall profitability. **Return on capital**: NP/equity — return to owner.\n\n**Interpretation**: compare to previous years, industry averages — identify trends, problems.",
          },
          {
            heading: "Liquidity ratios",
            body: "**Current ratio**: current assets/current liabilities — short-term ability to pay. **Acid test**: (current assets - inventory)/current liabilities — immediate liquidity.\n\n**Interpretation**: ratio > 1 = good liquidity; too high = inefficient; too low = risk.",
          },
        ],
        keyFormulas: [
          { name: "Gross margin", statement: "GP / Revenue" },
          { name: "Net margin", statement: "NP / Revenue" },
          { name: "Current ratio", statement: "CA / CL" },
        ],
        workedExample: {
          problem: "Revenue £100k, GP £35k, NP £10k. Margins?",
          solution: "Gross 35%, net 10%.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-ana-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does gross margin measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liquidity" },
              { id: "b", text: "Debt level" },
              { id: "c", text: "Overall profit" },
              { id: "d", text: "Sales efficiency" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gross margin",
                statement: "Sales efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "GM = sales efficiency.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Sales efficiency",
            commonErrors: ["Net confused."],
          },
        },
        {
          id: "eiasacct-u3-ana-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two profitability ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profitability ratios",
                statement: "Gross+net+ROCE.",
              },
            ],
            steps: [
              {
                reasoning: "Gross margin — sales efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Net margin — overall profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Return on capital — return to owner.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Gross margin, net margin, ROCE.",
            commonErrors: ["Only one.", "Wrong ratio."],
          },
        },
        {
          id: "eiasacct-u3-ana-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what current ratio tells us.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Current ratio",
                statement: "Liquidity.",
              },
            ],
            steps: [
              {
                reasoning: "Current ratio = CA/CL — liquidity measure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ratio > 1 = can pay short-term debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ratio < 1 = liquidity problems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Too high = inefficient — too much cash tied up.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Liquidity — >1 good.",
            commonErrors: ["Wrong meaning.", "No interpretation."],
          },
        },
        {
          id: "eiasacct-u3-ana-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Revenue £120k, COS £70k, expenses £35k, CA £40k, CL £25k.",
          parts: [
            {
              label: "a",
              prompt: "Calculate margins and current ratio.",
              marks: 4,
            },
            { label: "b", prompt: "Interpret performance.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratios",
                statement: "Calculate+interpret.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) GP = 120,000 - 70,000 = £50,000; GM = 50,000/120,000 = 41.7%.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) NP = 50,000 - 35,000 = £15,000; NM = 15,000/120,000 = 12.5%; CR = 40,000/25,000 = 1.6.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) GM 41.7% — good sales efficiency.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) NM 12.5% — decent profit; CR 1.6 — good liquidity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) GM 41.7%, NM 12.5%, CR 1.6 (b) good performance",
            commonErrors: ["Wrong ratios.", "No interpretation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-summary",
      title: "Sole Trader Accounts Summary",
      skill: "Summarise sole trader accounting.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Sole trader**: one owner, unlimited liability. **Accounts**: income statement + balance sheet annually. **Adjustments**: accruals, prepayments, depreciation, bad debts. **Capital**: opening + additional - drawings + profit. **Analysis**: profitability and liquidity ratios.\n\n**Key idea**: sole trader accounts show performance and position — inform owner decisions.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: prepare final accounts, calculate capital, make adjustments. **Evaluate**: sole trader suitability, ratio performance, adjustment impact. **Analyse**: profit trends, liquidity, capital changes.\n\n**Key concepts**: final accounts, capital account, adjustments, ratios, unlimited liability.",
          },
        ],
        keyFormulas: [
          {
            name: "Closing capital",
            statement: "Opening + additional - drawings + profit",
          },
          { name: "Net profit", statement: "Revenue - COS - Expenses" },
          { name: "Current ratio", statement: "CA / CL" },
        ],
        workedExample: {
          problem: "All accounts prepared and analysed. Result?",
          solution: "Complete financial picture for owner.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main disadvantage of sole trader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complex setup" },
              { id: "b", text: "Too many owners" },
              { id: "c", text: "Too much control" },
              { id: "d", text: "Unlimited liability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sole trader disadvantage",
                statement: "Unlimited liability.",
              },
            ],
            steps: [
              {
                reasoning: "Disadvantage = unlimited liability.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Unlimited liability",
            commonErrors: ["Control confused."],
          },
        },
        {
          id: "eiasacct-u3-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two year-end adjustments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjustments",
                statement: "Accruals+prepayments.",
              },
            ],
            steps: [
              {
                reasoning: "Accrued expenses — wages owed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prepaid expenses — insurance advance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Depreciation — asset cost allocation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accruals, prepayments, depreciation, bad debts.",
            commonErrors: ["Only one.", "Wrong adjustment."],
          },
        },
        {
          id: "eiasacct-u3-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why final accounts are needed annually.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Final accounts",
                statement: "Annual reporting.",
              },
            ],
            steps: [
              {
                reasoning: "Tax compliance — annual tax return.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Performance review — assess year.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Legal requirement — must keep accounts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decision-making — inform future plans.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Tax+review+legal+decisions.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u3-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate sole trader vs partnership.",
          parts: [
            { label: "a", prompt: "Compare structures.", marks: 4 },
            { label: "b", prompt: "Recommend for business.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Business structure",
                statement: "Sole vs partnership.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sole trader — one owner, unlimited liability; partnership — multiple, shared liability.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Sole — simple, full control; partnership — more capital, shared decisions.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Small business — sole trader sufficient.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Growing business — partnership for capital+skills.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) sole simple, partnership shared (b) context-dependent",
            commonErrors: ["One always better.", "No comparison."],
          },
        },
      ],
    },
  ],
};

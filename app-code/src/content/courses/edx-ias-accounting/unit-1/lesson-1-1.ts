import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eiasacct-u1-lesson-1-1",
  code: "1-1",
  title: "Introduction to Accounting",
  goal: "I CAN define accounting and explain its purpose.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 1 — Introduction to Accounting",
  ],
  vocabulary: [
    {
      term: "Accounting",
      definition:
        "Systematic recording, analysing and reporting of financial transactions.",
    },
    {
      term: "Bookkeeping",
      definition: "Recording financial transactions — part of accounting.",
    },
    {
      term: "Accounting equation",
      definition: "Assets = Liabilities + Owner's Equity.",
    },
    {
      term: "Assets",
      definition: "Resources owned — cash, equipment, receivables.",
    },
    { term: "Liabilities", definition: "Amounts owed — payables, loans." },
    {
      term: "Owner's equity",
      definition: "Owner's stake — capital + retained earnings.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u1-intro",
      title: "What is Accounting?",
      skill: "Define accounting and its role in business.",
      lesson: {
        sections: [
          {
            heading: "Definition and purpose",
            body: "**Accounting**: systematic recording, classifying, summarising and reporting financial transactions. **Purpose**: provide financial information for decision-making — stakeholders need data to assess performance.\n\n**Functions**: record transactions (bookkeeping), classify (sorting into accounts), summarise (financial statements), analyse (ratios, trends), report (statements to users).",
          },
          {
            heading: "Users of accounting information",
            body: "**Internal**: management, employees — need data for decisions. **External**: shareholders, creditors, government, public — need to assess performance, tax, investment.\n\n**Information needs differ**: management wants detailed operational data; shareholders want overall performance; government wants tax compliance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Who needs accounting information? Give two examples.",
          solution: "Management (decisions) and shareholders (performance).",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-intro-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax filing" },
              { id: "b", text: "Recording only" },
              { id: "c", text: "Making payments" },
              {
                id: "d",
                text: "Systematic recording and reporting of financial transactions",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accounting",
                statement: "Systematic recording+reporting.",
              },
            ],
            steps: [
              {
                reasoning: "Accounting = record, classify, summarise, report.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Systematic recording+reporting",
            commonErrors: ["Bookkeeping only."],
          },
        },
        {
          id: "eiasacct-u1-intro-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functions of accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting functions",
                statement: "Record+report.",
              },
            ],
            steps: [
              {
                reasoning: "Record transactions — bookkeeping.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Summarise — financial statements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Analyse — ratios, trends.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Record, classify, summarise, analyse, report.",
            commonErrors: ["Only one.", "Wrong function."],
          },
        },
        {
          id: "eiasacct-u1-intro-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why different users need different accounting information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "User needs",
                statement: "Different purposes.",
              },
            ],
            steps: [
              {
                reasoning: "Management — detailed operational data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shareholders — overall performance, dividends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Government — tax compliance, statistics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Different needs → different reports/levels of detail.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Different users → different needs.",
            commonErrors: ["Same info.", "One user."],
          },
        },
        {
          id: "eiasacct-u1-intro-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business owner wants to know if business is profitable.",
          parts: [
            { label: "a", prompt: "What information needed?", marks: 4 },
            { label: "b", prompt: "Who else might need this?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Information needs",
                statement: "Performance data.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Revenue, expenses, profit — income statement.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Cash flow — can we pay bills?",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Shareholders — assess investment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Bank — assess loan risk.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) revenue+expenses+profit+cash flow (b) shareholders+bank",
            commonErrors: ["No info.", "One user."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-equation",
      title: "The Accounting Equation",
      skill: "Apply the accounting equation to transactions.",
      lesson: {
        sections: [
          {
            heading: "Accounting equation",
            body: "**Assets = Liabilities + Owner's Equity**. **Assets**: resources owned — cash, inventory, equipment, receivables. **Liabilities**: amounts owed — payables, loans. **Owner's Equity**: owner's stake — capital + retained earnings - drawings.\n\n**Equation always balances**: every transaction affects two or more accounts — debits equal credits.",
          },
          {
            heading: "Transaction effects",
            body: "**Buy equipment for cash**: asset swap — cash decreases, equipment increases — equation unchanged. **Buy on credit**: asset increases, liability increases — equation balances. **Owner invests**: asset increases, equity increases.\n\n**Example**: start with £10,000 capital → Assets £10,000 = Equity £10,000. Buy stock £4,000 credit → Assets £14,000 = Liabilities £4,000 + Equity £10,000.",
          },
        ],
        keyFormulas: [
          {
            name: "Accounting equation",
            statement: "Assets = Liabilities + Owner's Equity",
          },
        ],
        workedExample: {
          problem: "Owner invests £5,000 cash. Effect on equation?",
          solution: "Assets +£5,000, Equity +£5,000 — equation balances.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-eq-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the accounting equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income = Expenses + Profit" },
              { id: "b", text: "Assets = Liabilities + Owner's Equity" },
              { id: "c", text: "Cash = Sales - Purchases" },
              { id: "d", text: "Profit = Revenue - Expenses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Accounting equation",
                statement: "A = L + OE.",
              },
            ],
            steps: [
              {
                reasoning: "Equation: Assets = Liabilities + Equity.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** A=L+OE",
            commonErrors: ["Profit formula confused."],
          },
        },
        {
          id: "eiasacct-u1-eq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of assets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Assets",
                statement: "Resources owned.",
              },
            ],
            steps: [
              { reasoning: "Cash — money in bank.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Inventory — stock for sale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Equipment — computers, vehicles.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cash, inventory, equipment, receivables.",
            commonErrors: ["Only one.", "Wrong asset."],
          },
        },
        {
          id: "eiasacct-u1-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how buying equipment on credit affects the equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transaction effect",
                statement: "Asset+liability.",
              },
            ],
            steps: [
              {
                reasoning: "Equipment (asset) increases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Payable (liability) increases — owe supplier.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both sides increase equally — equation balances.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No immediate cash outflow — credit purchase.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Asset+liability increase equally.",
            commonErrors: ["Equation unbalances.", "Cash decreases."],
          },
        },
        {
          id: "eiasacct-u1-eq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business has £20,000 assets, £8,000 liabilities.",
          parts: [
            { label: "a", prompt: "Calculate owner's equity.", marks: 4 },
            {
              label: "b",
              prompt: "Owner invests £5,000 more. New equity?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Equity calculation",
                statement: "A - L = OE.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Equity = Assets - Liabilities = 20,000 - 8,000 = £12,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: 20,000 = 8,000 + 12,000. Correct.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Assets +£5,000, Equity +£5,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) New equity = 12,000 + 5,000 = £17,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £12,000 (b) £17,000",
            commonErrors: ["Wrong formula.", "Wrong calculation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-types",
      title: "Types of Accounting",
      skill: "Distinguish between financial and management accounting.",
      lesson: {
        sections: [
          {
            heading: "Financial accounting",
            body: "**Purpose**: report to external users — shareholders, creditors, government. **Focus**: past performance — historical data. **Reports**: income statement, balance sheet, cash flow. **Standards**: follows accounting standards — consistency, comparability.\n\n**Frequency**: annual (or quarterly) — formal reports.",
          },
          {
            heading: "Management accounting",
            body: "**Purpose**: help internal management make decisions. **Focus**: future planning — budgets, forecasts. **Reports**: budgets, variance analysis, performance reports. **Flexibility**: no strict standards — tailored to needs.\n\n**Frequency**: ongoing — as needed for decisions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Budget for next year's sales. Type of accounting?",
          solution: "Management accounting.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is financial accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Budget preparation" },
              { id: "b", text: "Internal decision-making" },
              { id: "c", text: "Tax planning" },
              { id: "d", text: "Reporting to external users" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Financial accounting",
                statement: "External reporting.",
              },
            ],
            steps: [
              {
                reasoning: "Financial = external users.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** External reporting",
            commonErrors: ["Management confused."],
          },
        },
        {
          id: "eiasacct-u1-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between financial and management accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Financial vs management",
                statement: "External vs internal.",
              },
            ],
            steps: [
              {
                reasoning: "Users: financial=external, management=internal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Focus: financial=past, management=future.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Standards: financial=strict, management=flexible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "External vs internal, past vs future, strict vs flexible.",
            commonErrors: ["Same.", "One difference."],
          },
        },
        {
          id: "eiasacct-u1-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why management accounting is more flexible than financial accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flexibility",
                statement: "No strict standards.",
              },
            ],
            steps: [
              {
                reasoning: "No external users — tailored to management needs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can use any format — whatever helps decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Real-time data — not waiting for year-end.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Focus on future — budgets, forecasts, scenarios.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Internal+flexible+real-time+future.",
            commonErrors: ["Same standards.", "No flexibility."],
          },
        },
        {
          id: "eiasacct-u1-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company preparing annual reports and monthly budgets.",
          parts: [
            { label: "a", prompt: "Identify accounting types.", marks: 4 },
            { label: "b", prompt: "Explain purposes.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting types",
                statement: "Financial+management.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Annual reports — financial accounting.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Monthly budgets — management accounting.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Financial — report to shareholders, creditors.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Management — help internal decisions.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) financial+management (b) external+internal",
            commonErrors: ["One type.", "Wrong purpose."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-standards",
      title: "Accounting Standards and Principles",
      skill: "Explain accounting standards and qualitative characteristics.",
      lesson: {
        sections: [
          {
            heading: "Accounting standards",
            body: "**Purpose**: consistent, comparable financial reporting — GAAP, IFRS. **Key standards**: going concern, accruals, prudence, consistency, materiality, matching.\n\n**Going concern**: assume business will continue — don't value assets at liquidation. **Accruals**: record when earned/incurred, not when cash received/paid. **Prudence**: don't overstate profits — anticipate losses. **Consistency**: same methods year-to-year. **Materiality**: only report items that matter. **Matching**: match revenues with expenses.",
          },
          {
            heading: "Qualitative characteristics",
            body: "**Understandability**: clear, not too complex. **Relevance**: useful for decisions. **Reliability**: accurate, verifiable. **Comparability**: consistent over time and between companies.\n\n**Fundamental principle**: true and fair view — accounts should show reality.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Business records revenue when earned, not when cash received. Principle?",
          solution: "Accruals.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-std-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the accruals principle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Record when earned/incurred" },
              { id: "b", text: "Record when cash received" },
              { id: "c", text: "Record at year-end" },
              { id: "d", text: "Record when paid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accruals",
                statement: "Earned/incurred.",
              },
            ],
            steps: [
              {
                reasoning: "Accruals = earned/incurred.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Earned/incurred",
            commonErrors: ["Cash basis confused."],
          },
        },
        {
          id: "eiasacct-u1-std-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two accounting principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting principles",
                statement: "Accruals, prudence, consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Accruals — record when earned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prudence — don't overstate profits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistency — same methods.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Accruals, prudence, consistency, materiality, matching.",
            commonErrors: ["Only one.", "Wrong principle."],
          },
        },
        {
          id: "eiasacct-u1-std-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the prudence principle with example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prudence",
                statement: "Don't overstate.",
              },
            ],
            steps: [
              {
                reasoning: "Don't overstate profits — anticipate losses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: doubtful debtors — provide for bad debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: inventory — value at lower of cost or NRV.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Purpose — conservative, realistic figures.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Don't overstate — anticipate losses.",
            commonErrors: ["Overstate profits.", "No example."],
          },
        },
        {
          id: "eiasacct-u1-std-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company changes depreciation method mid-year.",
          parts: [
            { label: "a", prompt: "Identify principle violated.", marks: 4 },
            { label: "b", prompt: "Explain impact.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consistency",
                statement: "Same methods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Consistency principle — same methods year-to-year.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Changing method makes comparison difficult.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Profit figures not comparable — misleading.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Should disclose change and adjust prior figures.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) consistency (b) comparison+disclose",
            commonErrors: ["No principle.", "No impact."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieiacct-u1-lesson-1-2",
  code: "1-2",
  title: "Users of accounting information",
  goal: "I CAN identify the different stakeholders in a business and explain what each needs from the accounts.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 1: The purpose of accounting",
  ],
  vocabulary: [
    {
      term: "Stakeholder",
      definition:
        "Any individual or group affected by or affecting the business.",
    },
    {
      term: "Internal user",
      definition: "Someone inside the business — owner, manager, employee.",
    },
    {
      term: "External user",
      definition:
        "Someone outside the business — bank, government, supplier, customer.",
    },
    {
      term: "Profit",
      definition: "The surplus of income over expenses for a period.",
    },
    {
      term: "Liquidity",
      definition: "The ability to pay short-term debts as they fall due.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u1-users",
      title: "Stakeholders and their needs",
      skill: "Match each user of accounts to the information they require.",
      lesson: {
        sections: [
          {
            heading: "Internal users",
            body: "**Owners/shareholders** want to know if the business is profitable and whether their investment is secure — they read the income statement and statement of financial position. **Managers** need detailed figures to plan, control costs and measure performance. **Employees** are interested in job security, wage levels and whether the firm can afford pay rises.",
          },
          {
            heading: "External users",
            body: "**Lenders (banks)** assess whether loans can be repaid — they focus on profit, liquidity and security. **Suppliers** want to know the customer can pay its debts before granting credit. The **government** uses accounts for tax assessment and economic statistics. **Customers** may check viability before entering contracts. **Competitors** may study published accounts to compare performance.",
          },
          {
            heading: "Different questions, same records",
            body: "One set of accounts answers many questions: 'Is it profitable?' (owners), 'Can it pay me?' (suppliers), 'Is it safe to lend?' (banks), 'How much tax?' (government). This is why accounting follows standard rules — comparability between businesses and periods.",
          },
        ],
        keyFormulas: [
          {
            name: "Internal vs external",
            statement:
              "Internal: owner, manager, employee. External: bank, supplier, government, customer.",
          },
          {
            name: "Core questions",
            statement: "Profitability? Liquidity? Position? Performance?",
          },
        ],
        workedExample: {
          problem:
            "A supplier is deciding whether to give a shop three months' credit. What will the supplier look for in the accounts?",
          solution:
            "The supplier will check liquidity (current assets vs current liabilities) and past payment behaviour, to judge whether the shop can pay within three months.",
        },
      },
      questions: [
        {
          id: "cieiacct-u1-usr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an EXTERNAL user of accounting information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The owner" },
              { id: "b", text: "The business manager" },
              { id: "c", text: "An employee" },
              { id: "d", text: "A bank that lent money to the business" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External user",
                statement:
                  "Outside the business — e.g. bank, supplier, government.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A bank is outside the business; manager, employee and owner are internal users.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) A bank that lent money.",
            commonErrors: [
              "Confusing shareholders (internal owners) with external investors.",
            ],
          },
        },
        {
          id: "cieiacct-u1-usr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three external users of a company's accounting information and what each wants to know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "External users",
                statement:
                  "Each external user has a specific interest in the accounts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lenders/banks: whether the business can repay loans — profit, liquidity, security.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suppliers: whether the customer can pay its debts before granting credit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Government: taxable profit and economic statistics; customers/competitors may also use the accounts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Bank (repayment ability), supplier (creditworthiness), government (tax and statistics).",
            commonErrors: ["Listing users without stating what each needs."],
          },
        },
        {
          id: "cieiacct-u1-usr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why employees are interested in their employer's accounting information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Employee interests",
                statement:
                  "Job security, wages and firm viability depend on financial health.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Employees want job security — a profitable, solvent business is less likely to close or cut jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accounts show whether the firm can afford wage rises or bonuses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weak financial results may signal future redundancies or business failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Employees use the accounts to judge job security and the firm's ability to pay wages.",
            commonErrors: [
              "Saying employees only care about salaries without linking to business performance.",
            ],
          },
        },
        {
          id: "cieiacct-u1-usr-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that published accounting information is equally useful to all stakeholders.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two reasons why different stakeholders need different information.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Discuss whether one set of accounts can serve all users.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "User diversity",
                statement:
                  "Different decisions require different detail, timeliness and format.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Different questions: owners ask 'is it profitable?', suppliers ask 'can it pay?', managers need operational detail.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Different access: internal users see detailed records; external users see published statements only.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Different time horizons: suppliers need monthly payment ability; owners need long-term performance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For: standard financial statements are designed to serve multiple users comparably.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: managers may need cost-centre detail, banks need security detail and forecasts that published accounts lack.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: core statements serve most users, but additional reports are often produced for specific stakeholders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Different questions, access and time horizons. (b) Core accounts serve broadly, but tailored reports are often needed.",
            commonErrors: [
              "Arguing one-sidedly for or against without weighing both.",
            ],
          },
        },
        {
          id: "cieiacct-u1-usr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an INTERNAL user of accounting information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A bank" },
              { id: "b", text: "A supplier" },
              { id: "c", text: "A business manager" },
              { id: "d", text: "The government" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal user",
                statement: "Someone inside the business — owner, manager, employee.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A manager works inside the business; suppliers, government and banks are external.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) A business manager.",
            commonErrors: ["Classifying lenders or suppliers as internal users."],
          },
        },
        {
          id: "cieiacct-u1-usr-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a supplier would look for in a customer's accounts before granting three months' credit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Supplier needs",
                statement:
                  "Credit decisions depend on liquidity and payment history.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Liquidity: compare current assets with current liabilities to judge whether the customer can pay short-term debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Profitability and cash generation show whether the business is trading successfully enough to stay solvent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The supplier may also check payment history and the level of existing credit before deciding terms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The supplier checks liquidity, profitability and payment history to judge creditworthiness.",
            commonErrors: ["Focusing only on profit and ignoring liquidity."],
          },
        },
        {
          id: "cieiacct-u1-usr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two pieces of information a manager needs that an external user such as a bank would not normally receive in published accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Access differences",
                statement:
                  "Internal users see detailed operational records; external users see published summaries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Managers see cost-centre detail, budgets and day-to-day figures that published accounts omit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They also see non-financial operational data — staffing, stock levels, production output — used for control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Detailed internal reports — budgets, cost-centre figures and operational data — are not in published accounts.",
            commonErrors: ["Listing items external users also see."],
          },
        },
        {
          id: "cieiacct-u1-usr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A customer considering a large long-term contract with a firm is most likely to check the accounts for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The manager's salary" },
              { id: "b", text: "The owner's home address" },
              { id: "c", text: "Daily cash takings" },
              {
                id: "d",
                text: "Whether the business is financially viable and likely to survive",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Customer needs",
                statement:
                  "Customers check viability before committing to long-term arrangements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A customer wants assurance the supplier will still exist to fulfil the contract — hence viability and stability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Whether the business is viable and stable.",
            commonErrors: ["Thinking customers only care about prices."],
          },
        },
        {
          id: "cieiacct-u1-usr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why employees, though internal users, may have different interests in the accounts from the owners.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Internal diversity",
                statement:
                  "Different roles inside the business ask different questions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Owners focus on profit, return on investment and growth — the financial return to their capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Employees focus on job security, wage levels and whether the firm can afford pay rises or bonuses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Managers focus on operational control and performance measurement rather than personal return.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Owners want returns, employees want security and pay, managers want control — same accounts, different questions.",
            commonErrors: ["Assuming all internal users share one interest."],
          },
        },
        {
          id: "cieiacct-u1-usr-q10",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that the government should have unrestricted access to every business's detailed accounts.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two reasons why the government needs business accounting information.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether unrestricted access to detailed accounts is justified.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Government access",
                statement:
                  "Tax and statistics need data, but privacy and proportionality also matter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Taxation: the government must know taxable profit to collect tax fairly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Economic statistics: national data on output, employment and investment relies on business accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Regulation and policy: accurate figures help the government monitor economic conditions and plan policy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For: without access, tax evasion and unreliable statistics would be impossible to prevent.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: unrestricted access could expose commercially sensitive detail and deter honest record-keeping.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: access is justified for tax and statistics, but should be proportionate — typically via tax returns and audits, not open-ended access.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Tax, statistics, policy. (b) Justified for tax/statistics but should be proportionate, not unrestricted.",
            commonErrors: ["One-sided arguments ignoring confidentiality."],
          },
        },
        {
          id: "cieiacct-u1-usr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT an internal user of accounting information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The owner" },
              { id: "b", text: "A bank lender" },
              { id: "c", text: "An employee" },
              { id: "d", text: "A manager" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal vs external",
                statement:
                  "Internal users are inside the business; external users are outside it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A bank is outside the business — an external user. Owner, manager and employee are internal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(d) A bank lender.",
            commonErrors: ["Misreading 'NOT' in the stem."],
          },
        },
        {
          id: "cieiacct-u1-usr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why lenders focus on liquidity as well as profit when assessing a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Lender assessment",
                statement:
                  "A profitable business can still fail to pay debts if it lacks liquid assets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit shows long-term earning power but says nothing about whether cash is available to meet repayments when due.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Liquidity (current assets vs current liabilities) shows whether the business can convert assets to cash quickly enough to pay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A lender needs both: profit to service interest long-term, liquidity to collect each repayment on time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lenders need profit for long-term serviceability and liquidity for short-term repayment ability.",
            commonErrors: ["Arguing profit alone is sufficient."],
          },
        },
        {
          id: "cieiacct-u1-usr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A competitor reading a firm's published accounts is most likely to use them to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set the firm's wages" },
              { id: "b", text: "Verify the firm's daily cash receipts" },
              {
                id: "c",
                text: "Compare the firm's profitability and performance with its own",
              },
              { id: "d", text: "Calculate the firm's tax bill" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Competitor use",
                statement:
                  "Published accounts allow rivals to benchmark performance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Competitors use published figures to benchmark profit, margins and position against their own results.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Compare profitability and performance.",
            commonErrors: ["Thinking competitors have no legitimate use for published accounts."],
          },
        },
        {
          id: "cieiacct-u1-usr-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how accounting information helps employees make decisions about their own situation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Employee decisions",
                statement:
                  "Job security, pay and career choices depend on firm performance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Job security: profitable, solvent firms are less likely to close or make redundancies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pay expectations: accounts show whether the firm can afford wage rises or bonuses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Career decisions: weak results may signal risk, helping employees decide whether to stay or seek other work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Employees use accounts to judge job security, pay prospects and whether to stay with the firm.",
            commonErrors: ["Limiting the answer to salary levels only."],
          },
        },
        {
          id: "cieiacct-u1-usr-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss whether small businesses should be required to publish their accounting information like large companies.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two reasons why large companies publish their accounts.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether the same requirement should apply to small businesses.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Disclosure debate",
                statement:
                  "Public accountability vs commercial confidentiality.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Shareholders who are not managers need accounts to check how their investment is performing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Lenders, suppliers and the public need assurance before committing money or trade.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Regulation and market confidence depend on comparable published figures.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For: even small firms have stakeholders — banks, suppliers, tax authorities — who need information.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: full public disclosure could expose commercially sensitive detail and impose disproportionate costs on small firms.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: some disclosure or tax filing is needed, but full public accounts may be excessive for very small businesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Shareholder accountability, stakeholder assurance, regulation. (b) Some disclosure needed but full publication may be disproportionate.",
            commonErrors: ["Ignoring the cost and confidentiality arguments."],
          },
        },
        {
          id: "cieiacct-u1-usr-q16",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two differences between internal and external users of accounting information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal vs external",
                statement:
                  "Internal users are inside the business; external users are outside it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Location: internal users (owner, manager, employee) work inside; external users (bank, supplier, government) are outside.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Access: internal users see detailed records; external users usually see only published statements or specific returns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Internal users are inside the business with full access; external users are outside with limited access.",
            commonErrors: ["Listing users instead of differences."],
          },
        },
      ],
    },
  ],
};

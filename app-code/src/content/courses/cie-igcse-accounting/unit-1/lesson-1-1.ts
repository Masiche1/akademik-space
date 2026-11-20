import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieiacct-u1-lesson-1-1",
  code: "1-1",
  title: "The purpose of accounting",
  goal: "I CAN explain why accounting information is needed and distinguish bookkeeping from accounting.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 1: The purpose of accounting",
  ],
  vocabulary: [
    {
      term: "Accounting",
      definition:
        "The recording, summarising, analysing and reporting of financial information.",
    },
    {
      term: "Bookkeeping",
      definition:
        "The first stage of accounting — recording day-to-day transactions in books of prime entry.",
    },
    {
      term: "Stakeholder",
      definition:
        "A person or group with an interest in a business, e.g. owners, managers, lenders, government.",
    },
    {
      term: "Financial statements",
      definition:
        "Formal reports — income statement and statement of financial position — showing performance and position.",
    },
    {
      term: "Decision-making",
      definition:
        "Using accounting information to choose between courses of action.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u1-role",
      title: "Why businesses keep accounts",
      skill:
        "Explain the purposes of accounting information for different users.",
      lesson: {
        sections: [
          {
            heading: "From bookkeeping to accounting",
            body: "**Bookkeeping** is the mechanical recording of transactions — writing them in day books and ledgers. **Accounting** goes further: it classifies, summarises and analyses those records into financial statements that answer questions like 'Is the business profitable?' and 'Can it pay its debts?'",
          },
          {
            heading: "Purposes of accounting",
            body: "Accounting serves several purposes: (1) **recording** transactions systematically; (2) **measuring** profit or loss; (3) **reporting** results to stakeholders; (4) **controlling** the business by comparing actual with planned figures; and (5) **planning** future decisions such as pricing, expansion or borrowing.",
          },
          {
            heading: "Users of accounting information",
            body: "Different stakeholders need different information: **owners** want profit and return on investment; **managers** need data to run operations; **lenders and suppliers** want to know the business can repay debts; **employees** want job security and wage levels; the **government** needs information for tax and economic policy; **customers** may want to know a firm is viable.",
          },
        ],
        keyFormulas: [
          {
            name: "Accounting chain",
            statement:
              "record → classify → summarise → analyse → report → decide",
          },
          {
            name: "User need",
            statement:
              "Each stakeholder asks a different question of the same records",
          },
        ],
        workedExample: {
          problem:
            "State two reasons why a sole trader keeps accounting records.",
          solution:
            "To measure whether the business is making a profit, and to provide evidence of financial position for tax returns and any loans.",
        },
      },
      questions: [
        {
          id: "cieiacct-u1-role-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bookkeeping differs from accounting because bookkeeping is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Only the recording stage; accounting also analyses and reports",
              },
              { id: "b", text: "A more advanced computer system" },
              { id: "c", text: "Done only by accountants" },
              { id: "d", text: "Illegal without a licence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bookkeeping vs accounting",
                statement:
                  "Bookkeeping records; accounting records, summarises, analyses and reports.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bookkeeping is the recording stage only; accounting includes analysis and reporting for decisions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Bookkeeping is only the recording stage.",
            commonErrors: ["Treating the two terms as interchangeable."],
          },
        },
        {
          id: "cieiacct-u1-role-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three purposes of keeping accounting records in a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Purposes of accounting",
                statement:
                  "Recording, measuring profit, reporting, control and planning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "To record transactions systematically so nothing is forgotten.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "To measure profit or loss for the period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "To provide information for decision-making, control and planning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Recording transactions, measuring profit, and providing information for control and decisions.",
            commonErrors: ["Listing stakeholders instead of purposes."],
          },
        },
        {
          id: "cieiacct-u1-role-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a bank lending to a business would want to see its accounting information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "User needs",
                statement:
                  "Lenders assess the ability to repay — profit, liquidity and security.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The bank needs to judge whether the business can repay the loan and interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accounting information shows profit earned and the financial position (assets vs liabilities).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It helps the bank decide whether lending is safe and on what terms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The bank uses the accounts to assess repayment ability and lending risk.",
            commonErrors: [
              "Saying the bank wants the information 'to help the business grow' — the bank's interest is security.",
            ],
          },
        },
        {
          id: "cieiacct-u1-role-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss how accounting information helps a business owner make better decisions.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways accounting information supports decisions.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate one limitation of relying on accounting information alone.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decision support",
                statement:
                  "Information reduces uncertainty but is backward-looking and may be manipulated.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Planning: comparing actual results with budgets shows where costs or sales deviate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Pricing and investment: profit figures per product or project guide expansion and pricing choices.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Control: financial statements reveal problems such as falling liquidity before they become crises.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Limitation: accounts are historic — they report what happened, not what will happen.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "They may omit non-financial factors (staff morale, reputation) and can be distorted by estimates or fraud.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: accounts are essential but should be combined with judgement and other information.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Planning, pricing and control. (b) Historic, incomplete and potentially biased — use alongside judgement.",
            commonErrors: ["One-sided answers ignoring limitations."],
          },
        },
        {
          id: "cieiacct-u1-role-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which user of accounting information is most concerned with whether the business can repay a loan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The business owner" },
              { id: "b", text: "A bank that has lent money to the business" },
              { id: "c", text: "A competing business" },
              { id: "d", text: "A customer buying goods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "User needs",
                statement:
                  "Each stakeholder uses the accounts to answer its own question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A lender's main question is repayment ability, so it focuses on profit, liquidity and security.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) A bank that has lent money to the business.",
            commonErrors: ["Choosing the owner — owners focus on profit, not loan security."],
          },
        },
        {
          id: "cieiacct-u1-role-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways accounting information helps a manager control the running of a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Control through accounts",
                statement:
                  "Comparing actual figures with plans reveals deviations early.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Budget comparison: actual income and expenses are compared with planned figures to spot overspending or shortfalls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Performance measurement: figures per department or product show which parts of the business are performing well.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Early warning: trends in liquidity or rising costs alert the manager before problems become serious.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Budget comparison and performance measurement let managers detect and correct deviations.",
            commonErrors: ["Describing recording rather than control uses."],
          },
        },
        {
          id: "cieiacct-u1-role-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of decisions a business owner might make using accounting information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Decision-making",
                statement:
                  "Accounts inform choices such as pricing, expansion and borrowing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pricing: profit figures per product show which prices are profitable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Expansion or borrowing: the statement of financial position shows whether the business can fund growth or service a loan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two valid decisions, e.g. pricing, expansion, borrowing or cost control.",
            commonErrors: ["Repeating 'to know the profit' without a decision."],
          },
        },
        {
          id: "cieiacct-u1-role-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The government mainly uses a business's accounting information to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set the prices the business may charge" },
              {
                id: "b",
                text: "Assess tax liabilities and compile economic statistics",
              },
              { id: "c", text: "Choose the firm's advertising" },
              { id: "d", text: "Decide which supplier the firm uses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Government user",
                statement:
                  "Tax assessment and economic statistics are the government's main uses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The government needs taxable profit figures and national economic data from business accounts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Assess tax liabilities and compile statistics.",
            commonErrors: ["Thinking the government regulates prices directly from accounts."],
          },
        },
        {
          id: "cieiacct-u1-role-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a business owner needs both the income statement and the statement of financial position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Two statements",
                statement:
                  "Income statement shows performance; statement of financial position shows position at a date.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The income statement shows whether the business made a profit or loss during the period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The statement of financial position shows assets, liabilities and capital at the year end — whether the business is solvent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they answer 'is it profitable?' and 'can it pay its debts?' — neither alone is enough.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The income statement measures performance; the statement of financial position measures financial position — both are needed.",
            commonErrors: ["Treating the two statements as interchangeable."],
          },
        },
        {
          id: "cieiacct-u1-role-q10",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the view that a very small business does not need proper accounting records.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two reasons why even a small business benefits from accounting records.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate the argument that informal records are sufficient for a tiny business.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Records at any size",
                statement:
                  "Scale reduces detail but not the need to know profit and position.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Profit measurement: without records the owner cannot tell whether the business is actually making money.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Legal and tax needs: tax returns and any loan application require proper records.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Control: records reveal theft, errors and rising costs early.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For the view: a one-person business with few transactions may cope with informal notes at first.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Against: memory is unreliable, errors compound and disputes with suppliers, customers or the tax authority become unanswerable.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: records may be simple but they cannot be omitted entirely.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Profit measurement, legal/tax needs, control. (b) Informal records may suffice briefly but cannot replace proper records.",
            commonErrors: ["One-sided answers that never weigh the counter-argument."],
          },
        },
        {
          id: "cieiacct-u1-role-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bookkeeping is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The systematic recording of financial transactions in books of prime entry",
              },
              { id: "b", text: "Analysing accounts to help decisions" },
              { id: "c", text: "Preparing the income statement" },
              { id: "d", text: "Checking another firm's accounts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bookkeeping",
                statement:
                  "Bookkeeping is the recording stage of accounting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bookkeeping records transactions in day books and ledgers; analysis and reporting belong to accounting.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Systematic recording of transactions.",
            commonErrors: ["Confusing bookkeeping with the full accounting process."],
          },
        },
        {
          id: "cieiacct-u1-role-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A competing business studies a firm's published accounts. Explain what the competitor might learn and why this matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Competitors as users",
                statement:
                  "Published accounts are public information that rivals can analyse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The competitor can see the firm's sales, costs, profit level and financial position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reveals strengths and weaknesses — e.g. pricing power, cost control or expansion capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can inform the competitor's own pricing, product and investment decisions — a reason some firms prefer minimal disclosure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Competitors learn sales, profit and position, which can shape their own competitive strategy.",
            commonErrors: ["Assuming accounts are confidential to the owner only."],
          },
        },
        {
          id: "cieiacct-u1-role-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of using accounting information for planning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying a supplier's invoice" },
              {
                id: "b",
                text: "Preparing a budget for next year's expansion",
              },
              { id: "c", text: "Submitting a tax return" },
              { id: "d", text: "Paying the weekly wages" },
              { id: "e", text: "Recording a cash sale" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Planning",
                statement:
                  "Planning uses accounts to shape future decisions, not just record the past.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Budgeting for expansion is a forward-looking decision use of accounting information.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Preparing a budget for expansion.",
            commonErrors: ["Confusing routine recording or payment with planning."],
          },
        },
        {
          id: "cieiacct-u1-role-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how accounting information can help a business respond to financial difficulty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem response",
                statement:
                  "Accounts reveal where money is being lost or owed before a crisis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They identify the problem: which costs are rising, which customers are not paying, or where cash is short.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They support action: cutting costs, chasing debts or renegotiating terms can be targeted using the figures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They help external help: banks or lenders need accounts before agreeing support or restructuring.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Accounts diagnose the difficulty, guide corrective action and support negotiations with lenders.",
            commonErrors: ["Saying only 'it shows the business is losing money' without the response."],
          },
        },
        {
          id: "cieiacct-u1-role-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the statement: 'Accounting information is only useful to the owner of a business.'",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two ways accounting information is useful to external users.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether the statement is a fair description of accounting's usefulness.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple users",
                statement:
                  "One set of accounts serves many stakeholders with different questions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lenders use it to judge whether to lend and on what terms — profit, liquidity and security matter to them.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Suppliers use it to decide whether to grant credit; the government uses it for tax and statistics.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Employees use it to judge job security and the firm's ability to pay wages.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The statement is partly right: owners are the primary users because they bear the risk and make investment decisions.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "But it is wrong overall: banks, suppliers, government and employees all rely on the same accounts.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: the statement is unfair — accounting serves many stakeholders, not just the owner.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Lenders, suppliers, government and employees all use the accounts. (b) Unfair — accounting serves many stakeholders.",
            commonErrors: ["Accepting the statement without evaluating it."],
          },
        },
        {
          id: "cieiacct-u1-role-q16",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State one reason why businesses follow standard accounting rules and conventions rather than each keeping their own methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparability",
                statement:
                  "Standard rules make figures comparable between businesses and periods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Standard rules make businesses' figures comparable, so users can benchmark and make decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They also make accounts objective and verifiable, giving stakeholders confidence in the numbers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Standard rules give comparability and objectivity, which users need for decisions.",
            commonErrors: ["Saying 'it is the law' without the comparability reason."],
          },
        },
      ],
    },
  ],
};

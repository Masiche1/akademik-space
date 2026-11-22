import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eiasacct-u3-lesson-3-2",
  code: "3-2",
  title: "Partnership Accounts",
  goal: "I CAN prepare accounts for partnerships.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 3 — Accounting for Sole Traders",
  ],
  vocabulary: [
    {
      term: "Partnership",
      definition: "Business owned by 2+ people — shared profits/losses.",
    },
    {
      term: "Partnership agreement",
      definition: "Contract defining partners' rights and obligations.",
    },
    {
      term: "Appropriation account",
      definition: "Shows how profit is shared among partners.",
    },
    {
      term: "Interest on capital",
      definition: "Payment to partners for capital invested.",
    },
    {
      term: "Interest on drawings",
      definition: "Charge to partners for withdrawals.",
    },
    {
      term: "Salaries to partners",
      definition: "Fixed payments for partner work.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u3-partnership",
      title: "Partnership Structure",
      skill: "Understand partnership accounts and profit sharing.",
      lesson: {
        sections: [
          {
            heading: "Partnership basics",
            body: "**Partners**: 2+ owners — share profits/losses per agreement. **Unlimited liability**: partners personally liable — except LLPs. **Partnership agreement**: defines profit share, salaries, interest, drawings.\n\n**Accounts**: appropriation account — shows how profit distributed; balance sheet — partners' capital accounts.",
          },
          {
            heading: "Profit sharing",
            body: "**Appropriation order**: interest on capital → salaries → remaining profit shared per agreement. **Interest on drawings**: charged to partners — reduces drawings. **Current accounts**: track each partner's transactions — drawings, salaries, interest.\n\n**Example**: Profit £30,000. Interest on capital £2,000 each, salaries £5,000 each → remaining £16,000 shared 50/50 = £8,000 each.",
          },
        ],
        keyFormulas: [
          {
            name: "Appropriation",
            statement: "Interest + salaries + shared profit",
          },
        ],
        workedExample: {
          problem:
            "Two partners share profits 50/50. Profit £20,000. Share each?",
          solution: "£10,000 each (if no other appropriations).",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-part-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a partnership?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One owner" },
              { id: "b", text: "Public company" },
              { id: "c", text: "Franchise" },
              { id: "d", text: "Business owned by 2+ people" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partnership",
                statement: "2+ owners.",
              },
            ],
            steps: [
              {
                reasoning: "Partnership = 2+ owners.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** 2+ owners",
            commonErrors: ["Sole confused."],
          },
        },
        {
          id: "eiasacct-u3-part-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two features of partnership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership features",
                statement: "Shared+liability.",
              },
            ],
            steps: [
              {
                reasoning: "Shared profits/losses — per agreement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unlimited liability — personal risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More capital — combined resources.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Shared profits, unlimited liability, more capital.",
            commonErrors: ["Only one.", "Wrong feature."],
          },
        },
        {
          id: "eiasacct-u3-part-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain appropriation account purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation",
                statement: "Profit distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Shows how profit shared among partners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interest on capital — reward for investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Salaries — reward for work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Remaining profit — shared per agreement.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Shows profit distribution.",
            commonErrors: ["No purpose.", "Wrong purpose."],
          },
        },
        {
          id: "eiasacct-u3-part-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Partnership profit £40,000. Interest on capital 5% on £20,000 each. Salaries £6,000 each. Remaining shared 50/50.",
          parts: [
            { label: "a", prompt: "Calculate appropriations.", marks: 4 },
            {
              label: "b",
              prompt: "Calculate total each partner receives.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Appropriation",
                statement: "Calculate shares.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Interest = 20,000 × 5% = £1,000 each = £2,000 total.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Salaries = £6,000 each = £12,000 total.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Remaining = 40,000 - 2,000 - 12,000 = £26,000.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Each partner: 1,000 + 6,000 + 13,000 = £20,000.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check: 2 × 20,000 = £40,000 — correct.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) £2k interest, £12k salaries, £26k shared (b) £20k each",
            commonErrors: ["Wrong calculation.", "No check."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-appropriation",
      title: "Appropriation Account",
      skill: "Prepare appropriation account for partnerships.",
      lesson: {
        sections: [
          {
            heading: "Appropriation account structure",
            body: "**Profit side**: net profit from income statement + interest on drawings. **Appropriation side**: interest on capital, salaries to partners, shared profit/loss.\n\n**Interest on drawings**: partners charged for withdrawals — credited to appropriation. **Interest on capital**: paid to partners for capital invested — debited to appropriation.",
          },
          {
            heading: "Partner current accounts",
            body: "**Current account**: tracks each partner's transactions — drawings, salaries, interest, profit share. **Balance**: debit = owes partnership; credit = owed by partnership. **Capital account**: fixed — only changes for capital adjustments.\n\n**Transfer**: profit share credited to current account; drawings debited.",
          },
        ],
        keyFormulas: [
          {
            name: "Appropriation",
            statement: "Profit - appropriations = shared",
          },
        ],
        workedExample: {
          problem:
            "Partner draws £5,000, earns £8,000 profit share. Current account?",
          solution: "Credit £3,000 (8,000 - 5,000).",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-app-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is appropriation account?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balance sheet" },
              { id: "b", text: "Cash book" },
              { id: "c", text: "Shows profit distribution" },
              { id: "d", text: "Income statement" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appropriation",
                statement: "Profit distribution.",
              },
            ],
            steps: [
              {
                reasoning: "App = profit distribution.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Profit distribution",
            commonErrors: ["IS confused."],
          },
        },
        {
          id: "eiasacct-u3-app-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two items in appropriation account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation items",
                statement: "Interest+salaries+profit.",
              },
            ],
            steps: [
              {
                reasoning: "Interest on capital — reward for investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Salaries — reward for work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shared profit — remaining after deductions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Interest, salaries, shared profit, interest on drawings.",
            commonErrors: ["Only one.", "Wrong item."],
          },
        },
        {
          id: "eiasacct-u3-app-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain current vs capital account for partners.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Current vs capital",
                statement: "Transactions vs fixed.",
              },
            ],
            steps: [
              {
                reasoning: "Capital account — fixed, only capital adjustments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Current account — transactions: drawings, salaries, profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Current account balance — what's owed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Capital account — long-term investment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Current=transactions, capital=fixed.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u3-app-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare appropriation account summary.",
          parts: [
            { label: "a", prompt: "List profit side items.", marks: 4 },
            { label: "b", prompt: "List appropriation side items.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation structure",
                statement: "Profit+appropriations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Net profit from income statement.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Interest on drawings — credited.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Interest on capital — debited.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Salaries to partners — debited.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shared profit — remaining debited.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check: profit side = appropriation side.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) profit+interest drawings (b) interest+salaries+shared",
            commonErrors: ["Wrong sides.", "No check."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-company",
      title: "Company Accounts Introduction",
      skill: "Understand company accounts and key differences.",
      lesson: {
        sections: [
          {
            heading: "Company types",
            body: "**Private limited**: shares not traded publicly — limited liability. **Public limited**: shares traded on stock exchange — PLC. **Limited liability**: shareholders risk only their investment.\n\n**Accounts**: income statement, balance sheet, cash flow — similar to sole trader but with company-specific items.",
          },
          {
            heading: "Key differences",
            body: "**Share capital**: divided into shares — owned by shareholders. **Dividends**: profit distributed to shareholders. **Directors**: manage company — not necessarily owners. **Corporation tax**: company pays tax on profits — separate from shareholders.\n\n**Accounts**: appropriation of profit — dividends, retained earnings, tax.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Company profit £100k, dividends £30k, tax £20k. Retained?",
          solution: "£50k retained.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is limited liability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No liability" },
              { id: "b", text: "Risk limited to investment" },
              { id: "c", text: "Unlimited liability" },
              { id: "d", text: "Shared liability" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement: "Risk limited.",
              },
            ],
            steps: [
              {
                reasoning: "Limited = investment only.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Investment only",
            commonErrors: ["Unlimited confused."],
          },
        },
        {
          id: "eiasacct-u3-comp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between partnership and company.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Partnership vs company",
                statement: "Liability+ownership.",
              },
            ],
            steps: [
              {
                reasoning: "Liability: partnership unlimited, company limited.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Ownership: partnership=partners, company=shareholders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tax: partnership=personal, company=corporation tax.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Liability, ownership, tax differences.",
            commonErrors: ["Same.", "One difference."],
          },
        },
        {
          id: "eiasacct-u3-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain share capital and dividends.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share capital",
                statement: "Ownership+dividends.",
              },
            ],
            steps: [
              {
                reasoning: "Share capital — divided into shares.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shareholders own shares — voting rights.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dividends — profit distributed to shareholders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Retained earnings — profit kept in company.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Shares=ownership, dividends=profit share.",
            commonErrors: ["No shares.", "No dividends."],
          },
        },
        {
          id: "eiasacct-u3-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company profit £150k, corporation tax £30k, dividends £40k.",
          parts: [
            { label: "a", prompt: "Calculate retained earnings.", marks: 4 },
            { label: "b", prompt: "Explain appropriation.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Retained earnings",
                statement: "Profit-tax-dividends.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Retained = 150,000 - 30,000 - 40,000 = £80,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: 30k + 40k + 80k = £150k.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Profit after tax — dividends to shareholders.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Retained earnings — kept for growth.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £80,000 (b) dividends+retained",
            commonErrors: ["Wrong calculation.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u3-summary2",
      title: "Business Structures Summary",
      skill: "Summarise sole trader, partnership, company accounts.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Sole trader**: one owner, unlimited liability, simple accounts. **Partnership**: 2+ owners, shared profits, appropriation account. **Company**: shareholders, limited liability, dividends, corporation tax.\n\n**Key differences**: liability, ownership, profit distribution, tax treatment.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: prepare accounts for each structure, calculate appropriations. **Evaluate**: structure suitability, liability, profit sharing. **Analyse**: compare structures, assess impacts.\n\n**Key concepts**: appropriation account, share capital, dividends, limited liability, unlimited liability.",
          },
        ],
        keyFormulas: [
          {
            name: "Appropriation",
            statement: "Interest + salaries + shared profit",
          },
          { name: "Retained earnings", statement: "Profit - tax - dividends" },
        ],
        workedExample: {
          problem: "All structures understood. Result?",
          solution: "Can prepare appropriate accounts.",
        },
      },
      questions: [
        {
          id: "eiasacct-u3-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of company structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full control" },
              { id: "b", text: "Unlimited liability" },
              { id: "c", text: "Limited liability" },
              { id: "d", text: "Simple setup" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Company advantage",
                statement: "Limited liability.",
              },
            ],
            steps: [
              {
                reasoning: "Advantage = limited liability.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Limited liability",
            commonErrors: ["Unlimited confused."],
          },
        },
        {
          id: "eiasacct-u3-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two partnership account items.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partnership items",
                statement: "Interest+salaries+profit.",
              },
            ],
            steps: [
              {
                reasoning: "Interest on capital — reward for investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Salaries — reward for work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shared profit — remaining profit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Interest, salaries, shared profit, interest on drawings.",
            commonErrors: ["Only one.", "Wrong item."],
          },
        },
        {
          id: "eiasacct-u3-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why partnerships need appropriation accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriation purpose",
                statement: "Fair distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple owners — need clear distribution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different contributions — capital, work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Agreement defines shares — must follow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transparency — partners see how profit shared.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Multiple owners+contributions+agreement+transparency.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u3-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate business structure choice.",
          parts: [
            { label: "a", prompt: "Compare structures.", marks: 4 },
            { label: "b", prompt: "Recommend for growing business.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure choice",
                statement: "Need+growth.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sole — simple, unlimited liability; partnership — shared, unlimited; company — limited, complex.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Growth needs — capital, liability protection.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Growing business — company for limited liability.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Or partnership — more capital, shared skills.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) compare structures (b) company/partnership for growth",
            commonErrors: ["One always better.", "No comparison."],
          },
        },
      ],
    },
  ],
};

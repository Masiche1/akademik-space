import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "eiasacct-u5-lesson-5-3",
  code: "5-3",
  title: "Accounting for Clubs and Non-Profit Organisations",
  goal: "I CAN prepare accounts for clubs and non-profit organisations.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 5 — Financial Analysis"],
  vocabulary: [
    {
      term: "Non-profit organisation",
      definition: "Organisation not run for profit — clubs, charities.",
    },
    {
      term: "Accumulated fund",
      definition: "Equivalent of capital for non-profits.",
    },
    { term: "Subscription", definition: "Regular payment by members." },
    { term: "Donation", definition: "Voluntary contribution to organisation." },
    {
      term: "Receipts and payments account",
      definition: "Cash book summary for non-profits.",
    },
    {
      term: "Income and expenditure account",
      definition: "Accruals-based equivalent of income statement.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u5-nonprofit",
      title: "Non-Profit Accounting",
      skill: "Understand non-profit organisation accounts.",
      lesson: {
        sections: [
          {
            heading: "Key differences",
            body: "**No profit motive**: surplus/deficit instead of profit/loss. **Accumulated fund**: equivalent of capital — reserves. **Income sources**: subscriptions, donations, fundraising, grants. **Expenses**: running costs, events.\n\n**Accounts**: receipts and payments (cash basis) → income and expenditure (accruals basis) → balance sheet.",
          },
          {
            heading: "Accumulated fund",
            body: "**Opening balance**: accumulated fund at start. **Add**: surplus for year. **Subtract**: deficit for year. **Closing**: accumulated fund at end.\n\n**Example**: Opening £10,000, surplus £3,000 → closing £13,000.",
          },
        ],
        keyFormulas: [
          {
            name: "Accumulated fund",
            statement: "Opening + surplus - deficit",
          },
        ],
        workedExample: {
          problem: "Club has £5,000 opening fund, £2,000 surplus. Closing?",
          solution: "£7,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-np-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a non-profit organisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not run for profit" },
              { id: "b", text: "Profit-making" },
              { id: "c", text: "Public company" },
              { id: "d", text: "Government body" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-profit",
                statement: "Not for profit.",
              },
            ],
            steps: [
              {
                reasoning: "Non-profit = not for profit.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Not for profit",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u5-np-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two income sources for non-profits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-profit income",
                statement: "Subscriptions+donations.",
              },
            ],
            steps: [
              {
                reasoning: "Subscriptions — member payments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Donations — voluntary contributions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fundraising — events, sales.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Subscriptions, donations, fundraising, grants.",
            commonErrors: ["Only one.", "Wrong source."],
          },
        },
        {
          id: "eiasacct-u5-np-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain accumulated fund.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accumulated fund",
                statement: "Capital equivalent.",
              },
            ],
            steps: [
              {
                reasoning: "Equivalent of capital — reserves.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Opening + surplus - deficit = closing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows financial position — like equity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Not distributed — kept for future.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Capital+reserves+position.",
            commonErrors: ["Profit.", "No fund."],
          },
        },
        {
          id: "eiasacct-u5-np-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Club: opening fund £8,000, subscriptions £12,000, donations £3,000, expenses £10,000.",
          parts: [
            { label: "a", prompt: "Calculate surplus/deficit.", marks: 4 },
            { label: "b", prompt: "Calculate closing fund.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Non-profit accounts",
                statement: "Income-expenses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Income = 12,000 + 3,000 = £15,000; expenses £10,000; surplus = £5,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Surplus not profit — kept in fund.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Closing = 8,000 + 5,000 = £13,000.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check: fund increased by surplus.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £5,000 surplus (b) £13,000",
            commonErrors: ["Wrong calculation.", "Profit confused."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-incomplete",
      title: "Incomplete Records",
      skill: "Prepare accounts from incomplete records.",
      lesson: {
        sections: [
          {
            heading: "What are incomplete records?",
            body: "**Definition**: business doesn't keep full double-entry books — only cash book, invoices, some records. **Common**: small businesses, sole traders. **Challenge**: must calculate missing figures.\n\n**Sources**: cash book, sales invoices, purchases invoices, bank statements, stock counts.",
          },
          {
            heading: "Key calculations",
            body: "**Gross profit**: sales - cost of sales. **Cost of sales**: opening stock + purchases - closing stock. **Closing stock**: opening + purchases - COS. **Net profit**: GP - expenses.\n\n**Mark-up/margin**: use to calculate missing figures — e.g., if know margin, can find COS.",
          },
        ],
        keyFormulas: [
          {
            name: "Cost of sales",
            statement: "Opening stock + Purchases - Closing stock",
          },
          { name: "Gross profit", statement: "Sales - Cost of sales" },
          { name: "Net profit", statement: "GP - Expenses" },
        ],
        workedExample: {
          problem:
            "Sales £50k, opening stock £5k, purchases £30k, closing stock £8k. GP?",
          solution: "COS = 5+30-8 = £27k; GP = 50-27 = £23k.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-inc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are incomplete records?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Partial records only" },
              { id: "b", text: "Digital records" },
              { id: "c", text: "Full double-entry" },
              { id: "d", text: "No records" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete records",
                statement: "Partial records.",
              },
            ],
            steps: [
              { reasoning: "Incomplete = partial.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Partial records",
            commonErrors: ["Full confused."],
          },
        },
        {
          id: "eiasacct-u5-inc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two sources for incomplete records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Record sources",
                statement: "Cash book+invoices.",
              },
            ],
            steps: [
              {
                reasoning: "Cash book — cash transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sales/purchase invoices — credit transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bank statements — verify cash book.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Cash book, invoices, bank statements, stock counts.",
            commonErrors: ["Only one.", "Wrong source."],
          },
        },
        {
          id: "eiasacct-u5-inc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why incomplete records are challenging.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incomplete challenge",
                statement: "Missing figures.",
              },
            ],
            steps: [
              {
                reasoning: "Missing transactions — incomplete picture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Must calculate missing figures — reverse engineering.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Errors hard to detect — no trial balance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tax risk — incomplete records may trigger investigation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Missing+calculate+errors+tax.",
            commonErrors: ["Easy.", "No challenge."],
          },
        },
        {
          id: "eiasacct-u5-inc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business: sales £80k, opening stock £10k, purchases £50k, closing stock £12k, expenses £15k.",
          parts: [
            { label: "a", prompt: "Calculate GP and NP.", marks: 4 },
            { label: "b", prompt: "Explain calculation method.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Incomplete records",
                statement: "Calculate figures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) COS = 10,000 + 50,000 - 12,000 = £48,000; GP = 80,000 - 48,000 = £32,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) NP = 32,000 - 15,000 = £17,000.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) COS formula — opening + purchases - closing.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) GP = sales - COS; NP = GP - expenses.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) GP £32k, NP £17k (b) formulas explained",
            commonErrors: ["Wrong formula.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-specialised",
      title: "Specialised Accounting Topics",
      skill: "Understand specialised accounting areas.",
      lesson: {
        sections: [
          {
            heading: "Branch accounts",
            body: "**Branch**: separate location of same business — not separate entity. **Accounts**: branch account in head office books — shows branch profit/loss. **Transfers**: goods sent to branch — recorded at cost.\n\n**Key**: branch is part of business — not separate company.",
          },
          {
            heading: "Franchise accounts",
            body: "**Franchise**: business operating under another's brand — pays fees. **Franchisor**: owns brand — receives fees. **Franchisee**: operates locally — pays royalties.\n\n**Accounts**: franchise fees as expense (franchisee) or income (franchisor).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Franchisee pays £5,000 royalty. Treatment?",
          solution: "Expense in franchisee's accounts.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-spec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a branch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Part of same business" },
              { id: "b", text: "Separate company" },
              { id: "c", text: "Independent business" },
              { id: "d", text: "Subsidiary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Branch",
                statement: "Part of business.",
              },
            ],
            steps: [
              {
                reasoning: "Branch = part of business.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Part of business",
            commonErrors: ["Separate confused."],
          },
        },
        {
          id: "eiasacct-u5-spec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two specialised accounting areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialised areas",
                statement: "Branch+franchise.",
              },
            ],
            steps: [
              {
                reasoning: "Branch accounts — separate location.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Franchise accounts — brand licensing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clubs/non-profits — accumulated fund.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Branch, franchise, clubs, incomplete records.",
            commonErrors: ["Only one.", "Wrong area."],
          },
        },
        {
          id: "eiasacct-u5-spec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain franchise accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Franchise",
                statement: "Fees+royalties.",
              },
            ],
            steps: [
              {
                reasoning: "Franchisee pays fees/royalties — expense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Franchisor receives fees — income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Franchisee uses brand — not owner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Separate businesses — different accounts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Fees+royalties+separate.",
            commonErrors: ["Same business.", "No fees."],
          },
        },
        {
          id: "eiasacct-u5-spec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate specialised accounting needs.",
          parts: [
            { label: "a", prompt: "When are they needed?", marks: 4 },
            { label: "b", prompt: "Challenges?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialised accounting",
                statement: "Complexity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Branches — multi-location businesses.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Franchises — brand licensing.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Complexity — more accounts to maintain.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Inter-branch transactions — elimination needed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) branches+franchises (b) complexity+elimination",
            commonErrors: ["Not needed.", "No challenges."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-summary3",
      title: "Specialised Topics Summary",
      skill: "Summarise specialised accounting.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Non-profits**: accumulated fund, subscriptions, donations. **Incomplete records**: partial books — calculate missing figures. **Specialised**: branch accounts, franchise accounting, clubs.\n\n**Key idea**: accounting adapts to business type — same principles, different applications.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: prepare non-profit accounts, incomplete records, branch/franchise. **Evaluate**: appropriateness, challenges, limitations. **Analyse**: patterns, implications.\n\n**Key concepts**: accumulated fund, incomplete records, branch accounts, franchise.",
          },
        ],
        keyFormulas: [
          { name: "COS", statement: "Opening + Purchases - Closing" },
          {
            name: "Accumulated fund",
            statement: "Opening + surplus - deficit",
          },
        ],
        workedExample: {
          problem: "All specialised topics covered. Result?",
          solution: "Ready for any accounting scenario.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-sum3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main feature of non-profit accounts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accumulated fund" },
              { id: "b", text: "Share capital" },
              { id: "c", text: "Profit" },
              { id: "d", text: "Dividends" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-profit feature",
                statement: "Accumulated fund.",
              },
            ],
            steps: [
              {
                reasoning: "Feature = accumulated fund.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Accumulated fund",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u5-sum3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two specialised accounting areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialised areas",
                statement: "Branch+franchise+clubs.",
              },
            ],
            steps: [
              {
                reasoning: "Branch accounts — multi-location.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Franchise — brand licensing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clubs/non-profits — accumulated fund.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Branch, franchise, clubs, incomplete records.",
            commonErrors: ["Only one.", "Wrong area."],
          },
        },
        {
          id: "eiasacct-u5-sum3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why accounting adapts to business type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting adapts",
                statement: "Same principles.",
              },
            ],
            steps: [
              {
                reasoning: "Different structures — need different accounts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same principles — double-entry, accruals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different applications — profit vs surplus.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Flexibility — accounting serves all.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Structures+principles+applications.",
            commonErrors: ["Same accounts.", "No adaptation."],
          },
        },
        {
          id: "eiasacct-u5-sum3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate specialised accounting challenges.",
          parts: [
            { label: "a", prompt: "What challenges exist?", marks: 4 },
            { label: "b", prompt: "How to overcome?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialised challenges",
                statement: "Complexity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Complexity — more accounts to maintain.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Inter-branch — elimination needed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Use software — automate calculations.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Professional help — accountants for complex cases.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) complexity+elimination (b) software+help",
            commonErrors: ["No challenges.", "No solutions."],
          },
        },
      ],
    },
  ],
};

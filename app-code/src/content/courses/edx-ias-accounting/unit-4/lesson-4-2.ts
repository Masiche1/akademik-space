import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eiasacct-u4-lesson-4-2",
  code: "4-2",
  title: "Limited Companies",
  goal: "I CAN prepare accounts for limited companies.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 4 — Partnerships in Depth"],
  vocabulary: [
    {
      term: "Limited company",
      definition: "Separate legal entity — limited liability.",
    },
    {
      term: "Share capital",
      definition: "Capital divided into shares — owned by shareholders.",
    },
    {
      term: "Ordinary shares",
      definition: "Shares with voting rights and dividends.",
    },
    {
      term: "Preference shares",
      definition: "Shares with fixed dividend, no voting.",
    },
    { term: "Dividends", definition: "Profit distributed to shareholders." },
    {
      term: "Retained earnings",
      definition: "Profits kept in company for growth.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u4-company",
      title: "Company Structure",
      skill: "Understand limited company accounts.",
      lesson: {
        sections: [
          {
            heading: "Company basics",
            body: "**Separate entity**: company is legal person — owns assets, owes debts. **Limited liability**: shareholders risk only investment. **Share capital**: divided into shares — issued to shareholders.\n\n**Types**: private limited (Ltd) — shares not public; public limited (PLC) — shares traded on exchange.",
          },
          {
            heading: "Ownership and control",
            body: "**Shareholders**: own shares — vote at AGM. **Directors**: appointed to manage — may or may not be shareholders. **Company secretary**: ensures legal compliance.\n\n**Accounts**: income statement, balance sheet, appropriation — dividends, retained earnings, tax.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Company profit £100k, tax £20k, dividends £30k. Retained?",
          solution: "£50k retained.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is limited liability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Risk limited to investment" },
              { id: "b", text: "Unlimited liability" },
              { id: "c", text: "Shared liability" },
              { id: "d", text: "No liability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement: "Investment only.",
              },
            ],
            steps: [
              {
                reasoning: "Limited = investment only.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Investment only",
            commonErrors: ["Unlimited confused."],
          },
        },
        {
          id: "eiasacct-u4-comp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of limited company.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Company types",
                statement: "Ltd+PLC.",
              },
            ],
            steps: [
              {
                reasoning: "Private limited (Ltd) — shares not public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Public limited (PLC) — shares traded.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both have limited liability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Ltd, PLC.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiasacct-u4-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain separate legal entity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Separate entity",
                statement: "Legal person.",
              },
            ],
            steps: [
              {
                reasoning: "Company is legal person — owns assets.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Company owes debts — not shareholders personally.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Company can sue and be sued.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Continues if shareholders change.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Legal person+owns+owes+continues.",
            commonErrors: ["Same as owner.", "No entity."],
          },
        },
        {
          id: "eiasacct-u4-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company profit £200k, corporation tax £40k, dividends £50k.",
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
                  "(a) Retained = 200,000 - 40,000 - 50,000 = £110,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: 40k + 50k + 110k = £200k.",
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
            finalAnswer: "(a) £110,000 (b) dividends+retained",
            commonErrors: ["Wrong calculation.", "No explanation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-sharecapital",
      title: "Share Capital and Dividends",
      skill: "Account for share capital and dividends.",
      lesson: {
        sections: [
          {
            heading: "Share types",
            body: "**Ordinary shares**: voting rights, variable dividends. **Preference shares**: fixed dividend, no voting (usually). **Issued vs authorised**: issued = sold to shareholders; authorised = maximum allowed.\n\n**Share premium**: amount above par value — recorded separately.",
          },
          {
            heading: "Dividends",
            body: "**Interim**: paid during year — not in appropriation. **Final**: proposed at AGM, paid after — in appropriation. **Calculation**: dividend per share × shares held.\n\n**Journal**: Dr dividends (appropriation), Cr dividends payable → bank.",
          },
        ],
        keyFormulas: [
          { name: "Dividend", statement: "Dividend per share × shares held" },
        ],
        workedExample: {
          problem:
            "Dividend £0.50/share, shareholder has 10,000 shares. Dividend?",
          solution: "£5,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-shares-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is share capital?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit distribution" },
              { id: "b", text: "Capital divided into shares" },
              { id: "c", text: "Company debt" },
              { id: "d", text: "Tax payment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Share capital",
                statement: "Divided capital.",
              },
            ],
            steps: [
              {
                reasoning: "Share capital = divided.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Divided capital",
            commonErrors: ["Debt confused."],
          },
        },
        {
          id: "eiasacct-u4-shares-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two share types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share types",
                statement: "Ordinary+preference.",
              },
            ],
            steps: [
              {
                reasoning: "Ordinary — voting, variable dividends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Preference — fixed dividend, no voting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both are share capital.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Ordinary, preference.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiasacct-u4-shares-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain interim vs final dividends.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Dividend types",
                statement: "Timing+approval.",
              },
            ],
            steps: [
              {
                reasoning: "Interim — paid during year, directors decide.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Final — proposed at AGM, paid after year-end.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Interim in income statement; final in appropriation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Final needs shareholder approval.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Interim=directors, final=AGM.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u4-shares-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company has 100,000 ordinary shares. Dividend £0.40/share proposed.",
          parts: [
            { label: "a", prompt: "Calculate total dividend.", marks: 4 },
            { label: "b", prompt: "Explain dividend process.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend calculation",
                statement: "Per share × shares.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Total = 0.40 × 100,000 = £40,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: reasonable vs profit.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Proposed by directors — approved at AGM.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Paid to shareholders — reduces retained earnings.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £40,000 (b) proposed+approved+paid",
            commonErrors: ["Wrong calculation.", "No process."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-corpaccounts",
      title: "Company Accounts",
      skill: "Prepare company financial statements.",
      lesson: {
        sections: [
          {
            heading: "Income statement",
            body: "**Revenue**: sales. **Cost of sales**: direct costs. **Gross profit**: revenue - COS. **Expenses**: admin, selling, finance. **Profit before tax**: GP - expenses. **Corporation tax**: tax on profit. **Profit after tax**: PAT — available for dividends/retained.\n\n**Difference from sole trader**: corporation tax line; dividends not expenses.",
          },
          {
            heading: "Balance sheet",
            body: "**Non-current assets**: property, equipment (NBV). **Current assets**: inventory, receivables, cash. **Non-current liabilities**: long-term loans. **Current liabilities**: payables, tax, dividends payable. **Equity**: share capital + share premium + retained earnings.\n\n**Check**: assets = liabilities + equity.",
          },
        ],
        keyFormulas: [
          { name: "Profit after tax", statement: "PBT - Corporation tax" },
          { name: "Balance sheet", statement: "Assets = Liabilities + Equity" },
        ],
        workedExample: {
          problem: "Revenue £500k, COS £300k, expenses £100k, tax £20k. PAT?",
          solution: "PAT = 500-300-100-20 = £80,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-ca-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is profit after tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gross profit" },
              { id: "b", text: "Before tax" },
              { id: "c", text: "After corporation tax" },
              { id: "d", text: "Revenue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PAT", statement: "After tax." },
            ],
            steps: [
              { reasoning: "PAT = after tax.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** After tax",
            commonErrors: ["PBT confused."],
          },
        },
        {
          id: "eiasacct-u4-ca-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two equity components.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equity components",
                statement: "Share capital+retained.",
              },
            ],
            steps: [
              {
                reasoning: "Share capital — issued shares.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Share premium — above par value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Retained earnings — accumulated profits.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Share capital, premium, retained earnings.",
            commonErrors: ["Only one.", "Wrong component."],
          },
        },
        {
          id: "eiasacct-u4-ca-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why dividends aren't expenses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dividends not expenses",
                statement: "Distribution not cost.",
              },
            ],
            steps: [
              {
                reasoning: "Dividends = distribution of profit, not cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Expenses reduce profit; dividends use profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dividends in appropriation account.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tax calculated before dividends — on PBT.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Distribution not cost.",
            commonErrors: ["Expense.", "Wrong treatment."],
          },
        },
        {
          id: "eiasacct-u4-ca-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company: Revenue £800k, COS £500k, expenses £150k, tax £30k.",
          parts: [
            { label: "a", prompt: "Calculate PAT.", marks: 4 },
            { label: "b", prompt: "Explain appropriation options.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "PAT", statement: "PBT - tax." },
            ],
            steps: [
              {
                reasoning:
                  "(a) PBT = 800,000 - 500,000 - 150,000 = £150,000; PAT = 150,000 - 30,000 = £120,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check calculations.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Dividends — distribute to shareholders.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Retained earnings — keep for growth.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £120,000 (b) dividends+retained",
            commonErrors: ["Wrong calculation.", "No options."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-summary2",
      title: "Limited Companies Summary",
      skill: "Summarise company accounting.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Limited company**: separate entity, limited liability, share capital. **Shares**: ordinary (voting) + preference (fixed). **Dividends**: profit distribution — interim/final. **Accounts**: income statement (with corporation tax), balance sheet (share capital + retained earnings).\n\n**Key difference**: company pays corporation tax; dividends not expenses.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: calculate PAT, dividends, retained earnings. **Evaluate**: company vs partnership vs sole trader. **Analyse**: share structure, dividend policy.\n\n**Key concepts**: share capital, dividends, corporation tax, retained earnings, separate entity.",
          },
        ],
        keyFormulas: [
          { name: "PAT", statement: "PBT - Corporation tax" },
          { name: "Dividend", statement: "Dividend per share × shares" },
        ],
        workedExample: {
          problem: "All company accounts understood. Result?",
          solution: "Can prepare company financial statements.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of limited company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Limited liability" },
              { id: "b", text: "Unlimited liability" },
              { id: "c", text: "Simple setup" },
              { id: "d", text: "Full control" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Limited liability",
            commonErrors: ["Unlimited confused."],
          },
        },
        {
          id: "eiasacct-u4-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two share types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share types",
                statement: "Ordinary+preference.",
              },
            ],
            steps: [
              {
                reasoning: "Ordinary — voting, variable dividends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Preference — fixed dividend, no voting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both are share capital.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Ordinary, preference.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiasacct-u4-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why corporation tax matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corporation tax",
                statement: "Company tax.",
              },
            ],
            steps: [
              {
                reasoning: "Company pays tax on profits — separate entity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces profit after tax — less for dividends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Shareholders don't pay tax on company profits (until dividends).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Double taxation — company tax + dividend tax.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Company tax+reduces PAT+double taxation.",
            commonErrors: ["No tax.", "One reason."],
          },
        },
        {
          id: "eiasacct-u4-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate company structure.",
          parts: [
            { label: "a", prompt: "Advantages.", marks: 4 },
            { label: "b", prompt: "Disadvantages.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Company evaluation",
                statement: "Pros+cons.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Limited liability — shareholders protected.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Easy to raise capital — sell shares.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Perpetual existence — continues.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Professional management — directors.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Complex accounts — more requirements.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Double taxation — company + dividend tax.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) limited+capital+perpetual+management (b) complex+double tax",
            commonErrors: ["Only advantages.", "No evaluation."],
          },
        },
      ],
    },
  ],
};

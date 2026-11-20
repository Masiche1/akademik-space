import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cieiacct-u3-lesson-3-5",
  code: "3-5",
  title: "Limited company accounts",
  goal: "I CAN record share capital, dividends, debentures and prepare company financial statements.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 8: Limited company accounts",
  ],
  vocabulary: [
    {
      term: "Limited company",
      definition:
        "A business owned by shareholders whose liability is limited to their investment.",
    },
    {
      term: "Share capital",
      definition:
        "The capital raised by issuing shares — the owners' investment in the company.",
    },
    {
      term: "Ordinary share",
      definition:
        "A share carrying voting rights and a share of residual profit after dividends.",
    },
    {
      term: "Preference share",
      definition:
        "A share paying a fixed dividend before ordinary shareholders, usually without voting rights.",
    },
    {
      term: "Dividend",
      definition:
        "A distribution of profit to shareholders, usually expressed as so many cents per share or a percentage.",
    },
    {
      term: "Debenture",
      definition:
        "A long-term loan to the company, secured on assets, paying fixed interest — NOT a share.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u3-co-basics",
      title: "Company basics — shares, dividends and debentures",
      skill:
        "Understand share capital, dividends and debentures in company accounts.",
      lesson: {
        sections: [
          {
            heading: "Limited liability",
            body: "Shareholders' liability is limited to their investment — unlike partners who face unlimited liability. The company is a separate legal entity from its owners.",
          },
          {
            heading: "Share capital",
            body: "Companies raise capital by issuing **shares**. **Ordinary shares** carry voting rights and share in residual profit. **Preference shares** pay a fixed dividend first and usually have no voting rights. Share capital appears as a non-current liability (or equity) on the balance sheet — it is NOT an expense.",
          },
          {
            heading: "Dividends and debentures",
            body: "**Dividends** are distributions of profit to shareholders — an appropriation, NOT an expense (deducted from profit after tax). **Debentures** are loans — the company pays fixed interest (an expense) and must repay the loan. Interest on debentures IS an expense; dividends are NOT.",
          },
        ],
        keyFormulas: [
          {
            name: "Dividend per share",
            statement: "Total dividend ÷ number of shares",
          },
          {
            name: "Dividend %",
            statement:
              "Dividend per share ÷ share price (or nominal value) × 100",
          },
          {
            name: "Debenture interest",
            statement: "Debenture loan × interest rate — an expense",
          },
        ],
        workedExample: {
          problem:
            "A company has 100,000 ordinary shares of \\$1 each. It declares a dividend of 10 cents per share. Total dividend?",
          solution: "100,000 × \\$0.10 = \\$10,000 total dividend.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-co-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Shareholders in a limited company have:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Limited liability — they can only lose their investment",
              },
              { id: "b", text: "Unlimited liability for all debts" },
              { id: "c", text: "No liability at all" },
              { id: "d", text: "Liability only for their share of profit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement: "Shareholders risk only their investment.",
              },
            ],
            steps: [
              {
                reasoning: "Limited liability = risk limited to investment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Limited to their investment.",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ordinary shares carry:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voting rights and a share of residual profit" },
              { id: "b", text: "A fixed dividend only" },
              { id: "c", text: "No rights at all" },
              { id: "d", text: "A guaranteed repayment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ordinary shares",
                statement: "Voting + residual profit share.",
              },
            ],
            steps: [
              {
                reasoning: "Ordinary shares = voting rights + residual profit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Voting rights and residual profit.",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Preference shares pay:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A fixed dividend before ordinary shareholders, usually without voting rights",
              },
              { id: "b", text: "A share of all profits equally" },
              { id: "c", text: "Interest like a loan" },
              { id: "d", text: "Nothing until ordinary shareholders are paid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Preference shares",
                statement: "Fixed dividend first, usually non-voting.",
              },
            ],
            steps: [
              {
                reasoning: "Preference shares = fixed dividend priority.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Fixed dividend before ordinary, usually non-voting.",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dividend is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A distribution of profit to shareholders — an appropriation, not an expense",
              },
              { id: "b", text: "An expense in the profit and loss account" },
              { id: "c", text: "Interest paid on a loan" },
              { id: "d", text: "A payment to employees" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dividend",
                statement:
                  "Profit distribution to shareholders — appropriation.",
              },
            ],
            steps: [
              {
                reasoning: "Dividend = appropriation of profit, not expense.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Profit distribution — appropriation, not expense.",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company has 50,000 ordinary shares of \\$1 each and declares a dividend of 12 cents per share. Calculate the total dividend.",
          response: {
            type: "numeric",
            parts: [{ label: "Total dividend", answer: 6000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend",
                statement: "Total dividend = shares × dividend per share.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 50,000 × \\$0.12.",
                working: "50000 * 0.12 = 6000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$6,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Dividend is appropriated from profit, not expensed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$6,000",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company issues 10,000 ordinary shares of \\$2 each. Calculate the total share capital raised.",
          response: {
            type: "numeric",
            parts: [{ label: "Share capital", answer: 20000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Share capital",
                statement: "Shares × nominal value per share.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 10,000 × \\$2 = \\$20,000.",
                working: "10000 * 2 = 20000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$20,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Share capital is a liability/equity, not an expense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$20,000",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company has \\$100,000 of 8% debentures. Calculate the annual interest expense and state how it's treated in the accounts.",
          response: {
            type: "numeric",
            parts: [{ label: "Annual interest", answer: 8000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debenture interest",
                statement: "Loan × rate; interest IS an expense.",
              },
            ],
            steps: [
              {
                reasoning: "Interest = 100,000 × 8% = \\$8,000.",
                working: "100000 * 0.08 = 8000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debenture interest is an expense in the P&L (unlike dividends).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State amount and treatment.",
                working: "\\$8,000 expense",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$8,000 per year — an expense",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish between a dividend and debenture interest — state two differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dividend vs interest",
                statement:
                  "Dividend = profit appropriation; debenture interest = loan expense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dividend: paid to shareholders out of profit — NOT an expense, only paid if profit allows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debenture interest: paid to debenture holders (lenders) — IS an expense, must be paid regardless of profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dividends are discretionary; debenture interest is a contractual obligation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debentures are loans (liability); shares are ownership capital.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dividend = appropriation to owners (not expense); debenture interest = loan expense (must be paid).",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between ordinary shares and preference shares.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A company has 20,000 preference shares entitled to a 7% dividend and 80,000 ordinary shares. Profit available for distribution is \\$50,000. Preference dividend is paid first. Calculate the preference dividend and state what remains for ordinary shareholders.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share types",
                statement:
                  "Ordinary = voting + residual; preference = fixed dividend first.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ordinary shares: voting rights, share in residual profit after preference dividends.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Preference shares: fixed dividend paid before ordinary, usually no voting rights.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Preference shareholders have priority on dividends but less upside.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Preference dividend = 7% × (20,000 × \\$1 nominal) = 7% × 20,000 = \\$1,400.",
                working: "20000 * 0.07 = 1400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Remaining for ordinary = 50,000 − 1,400 = \\$48,600 (assuming sufficient profit).",
                working: "50000 - 1400 = 48600",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State preference dividend and remainder.",
                working: "\\$1,400; \\$48,600 remains",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Ordinary = voting/residual; preference = fixed first. (b) Pref dividend \\$1,400; \\$48,600 for ordinary.",
          },
        },
        {
          id: "cieiacct-u3-co-basics-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why dividends are NOT treated as an expense in the company's profit and loss account.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A company's profit before tax is \\$80,000; tax \\$16,000; it declares dividends of \\$0.15 per share on 200,000 shares. Calculate profit after tax and total dividends.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dividends",
                statement:
                  "Distribution of profit to owners — appropriation after tax.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Dividends are a distribution OF profit TO owners — they're part of profit allocation, not a cost of earning it.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The P&L measures performance before distributing to owners.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Dividends appear in the appropriation/reserves section, after profit after tax.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Profit after tax = 80,000 − 16,000 = \\$64,000.",
                working: "80000 - 16000 = 64000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total dividends = 200,000 × \\$0.15 = \\$30,000.",
                working: "200000 * 0.15 = 30000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Retained profit = 64,000 − 30,000 = \\$34,000.",
                working: "64000 - 30000 = 34000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State PAT, dividends and retained profit.",
                working: "\\$64,000; \\$30,000; \\$34,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Distribution of profit, not expense. (b) PAT \\$64,000; dividends \\$30,000; retained \\$34,000.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-co-dividends",
      title: "Dividends — calculation and treatment",
      skill:
        "Calculate dividends per share, total dividends and dividend percentages.",
      lesson: {
        sections: [
          {
            heading: "Types of dividend",
            body: "Dividends can be declared as a fixed amount **per share** (e.g. 10 cents per share) or as a **percentage** of nominal value (e.g. 10% dividend = \\$0.10 per \\$1 share). Interim dividends are paid during the year; final dividends after year end.",
          },
          {
            heading: "Calculation",
            body: "Dividend per share = total dividend ÷ number of shares. Total dividend = dividend per share × number of shares. Dividend % = (dividend per share ÷ nominal value) × 100.",
          },
          {
            heading: "Accounting treatment",
            body: "When declared: Dr dividends (appropriation), Cr dividends payable (liability). When paid: Dr dividends payable, Cr bank. Dividends are NOT expenses — they reduce retained profit/reserves.",
          },
        ],
        keyFormulas: [
          { name: "Dividend per share", statement: "Total dividend ÷ shares" },
          { name: "Total dividend", statement: "Dividend per share × shares" },
          {
            name: "Dividend %",
            statement: "(Dividend per share ÷ nominal value) × 100",
          },
        ],
        workedExample: {
          problem:
            "Company has 80,000 shares of \\$1 each. A 15% dividend is declared. Calculate dividend per share and total dividend.",
          solution:
            "Dividend per share = 15% × \\$1 = \\$0.15. Total = 80,000 × 0.15 = \\$12,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-co-dividends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 10% dividend on shares with \\$1 nominal value means each share receives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\\$0.10" },
              { id: "b", text: "\\$1.00" },
              { id: "c", text: "\\$10.00" },
              { id: "d", text: "\\$0.01" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend %",
                statement: "10% of \\$1 = \\$0.10 per share.",
              },
            ],
            steps: [
              {
                reasoning: "10% × \\$1 = \\$0.10 per share.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) \\$0.10",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A company declares a dividend of 8 cents per share on 60,000 shares. Calculate the total dividend.",
          response: {
            type: "numeric",
            parts: [{ label: "Total dividend", answer: 4800, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total dividend",
                statement: "Per share × shares.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 60,000 × \\$0.08.",
                working: "60000 * 0.08 = 4800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$4,800",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$4,800",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a dividend is declared, the journal entry is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Dr dividends (appropriation), Cr dividends payable",
              },
              { id: "b", text: "Dr bank, Cr dividends" },
              { id: "c", text: "Dr expenses, Cr bank" },
              { id: "d", text: "Dr share capital, Cr bank" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dividend entry",
                statement:
                  "Declare: Dr dividends, Cr payable. Pay: Dr payable, Cr bank.",
              },
            ],
            steps: [
              {
                reasoning: "Declaration creates a liability to shareholders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Dr dividends, Cr dividends payable.",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company has 40,000 ordinary shares of \\$2 each. It declares a dividend of 20% on nominal value. Calculate dividend per share and total dividend.",
          response: {
            type: "numeric",
            parts: [
              { label: "Dividend per share", answer: 0.4, unit: "$" },
              { label: "Total dividend", answer: 16000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend",
                statement: "% × nominal = per share; × shares = total.",
              },
            ],
            steps: [
              {
                reasoning: "Per share = 20% × \\$2 = \\$0.40.",
                working: "0.20 * 2 = 0.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total = 40,000 × \\$0.40 = \\$16,000.",
                working: "40000 * 0.4 = 16000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both figures.",
                working: "\\$0.40 and \\$16,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$0.40 per share; \\$16,000 total",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Total dividends paid are \\$9,000 on 45,000 shares. Calculate the dividend per share.",
          response: {
            type: "numeric",
            parts: [{ label: "Dividend per share", answer: 0.2, unit: "$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "DPS", statement: "Total ÷ shares." },
            ],
            steps: [
              {
                reasoning: "DPS = 9,000 ÷ 45,000 = \\$0.20.",
                working: "9000 / 45000 = 0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$0.20",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: 45,000 × 0.20 = 9,000 ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$0.20 per share",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company pays an interim dividend of \\$0.05 per share and a final dividend of \\$0.10 per share on 100,000 shares. Calculate the total dividends for the year.",
          response: {
            type: "numeric",
            parts: [{ label: "Total dividends", answer: 15000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total dividend",
                statement: "(Interim + final) × shares.",
              },
            ],
            steps: [
              {
                reasoning: "Total per share = 0.05 + 0.10 = \\$0.15.",
                working: "0.05 + 0.10 = 0.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total = 100,000 × \\$0.15 = \\$15,000.",
                working: "100000 * 0.15 = 15000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$15,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$15,000",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Profit after tax is \\$50,000. The company declares dividends of \\$0.20 per share on 150,000 shares. Calculate retained profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total dividends", answer: 30000, unit: "$" },
              { label: "Retained profit", answer: 20000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Retained profit",
                statement: "PAT − dividends = retained profit.",
              },
            ],
            steps: [
              {
                reasoning: "Total dividends = 150,000 × \\$0.20 = \\$30,000.",
                working: "150000 * 0.20 = 30000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Retained = 50,000 − 30,000 = \\$20,000.",
                working: "50000 - 30000 = 20000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both figures.",
                working: "\\$30,000 and \\$20,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Retained profit is added to reserves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dividends \\$30,000; retained profit \\$20,000",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between an interim dividend and a final dividend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dividend types",
                statement: "Interim = during year; final = after year end.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interim dividend: paid during the financial year, before final accounts are prepared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Final dividend: declared after year end, based on the year's profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are appropriations of profit, not expenses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Interim = during year; final = after year end.",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "A company has 120,000 ordinary shares of \\$1 and 30,000 preference shares of \\$1 entitled to 6%. Profit available for distribution is \\$40,000. Calculate the preference dividend and the dividend per ordinary share if all remaining profit is distributed.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State the journal entries when the total dividend is paid.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend priority",
                statement: "Preference first, then ordinary.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Preference dividend = 6% × 30,000 = \\$1,800.",
                working: "30000 * 0.06 = 1800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Remaining for ordinary = 40,000 − 1,800 = \\$38,200.",
                working: "40000 - 1800 = 38200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Ordinary DPS = 38,200 ÷ 120,000 = \\$0.3183 (approx \\$0.32).",
                working: "38200 / 120000 = 0.3183",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "On declaration: Dr dividends \\$40,000, Cr dividends payable \\$40,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "On payment: Dr dividends payable \\$40,000, Cr bank \\$40,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both entries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Pref \\$1,800; ordinary DPS ≈ \\$0.32. (b) Dr dividends/Cr payable on declaration; Dr payable/Cr bank on payment.",
          },
        },
        {
          id: "cieiacct-u3-co-dividends-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a company might retain profit rather than pay dividends.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Profit after tax \\$70,000; dividends declared \\$0.25 per share on 180,000 shares. Calculate retained profit and state two uses for retained profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retained profit",
                statement:
                  "Profit kept for expansion, reserves or future dividends.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Retaining profit funds growth — new assets, expansion, R&D without borrowing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "It builds reserves as a cushion against losses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It may be needed to maintain gearing or meet loan covenants.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Shareholders may prefer capital growth over immediate dividends.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Total dividends = 180,000 × \\$0.25 = \\$45,000.",
                working: "180000 * 0.25 = 45000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Retained profit = 70,000 − 45,000 = \\$25,000.",
                working: "70000 - 45000 = 25000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Uses: expand the business, build reserves, repay debt, fund future dividends.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Funds growth and reserves. (b) Retained \\$25,000; uses: expansion, reserves, debt repayment, future dividends.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-co-journal",
      title: "Company journal entries — shares and dividends",
      skill: "Record the issue of shares and dividend transactions.",
      lesson: {
        sections: [
          {
            heading: "Issue of shares",
            body: "When shares are issued for cash: Dr bank, Cr share capital (nominal value). If issued at a premium (above nominal), the excess is credited to a **share premium** account. Shares can also be issued for non-cash consideration (e.g. assets) or as bonus shares from reserves.",
          },
          {
            heading: "Dividend entries",
            body: "Declaration: Dr dividends (appropriation), Cr dividends payable. Payment: Dr dividends payable, Cr bank. If dividend is paid directly without declaration period, entries may be combined.",
          },
          {
            heading: "Bonus shares",
            body: "Bonus shares are issued from retained profit/reserves to existing shareholders — no cash changes hands. Dr retained profit/reserves, Cr share capital (+ share premium if above nominal).",
          },
        ],
        keyFormulas: [
          {
            name: "Share issue",
            statement:
              "Dr bank/assets, Cr share capital (nominal) + share premium (excess)",
          },
          {
            name: "Dividend",
            statement:
              "Dr dividends/Cr payable on declaration; Dr payable/Cr bank on payment",
          },
        ],
        workedExample: {
          problem:
            "Company issues 50,000 shares of \\$1 at \\$1.50 each for cash. Journal entries?",
          solution:
            "Dr bank \\$75,000; Cr share capital \\$50,000; Cr share premium \\$25,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-co-journal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A company issues 20,000 shares of \\$1 each for cash. State the journal entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share issue",
                statement: "Dr bank, Cr share capital.",
              },
            ],
            steps: [
              {
                reasoning: "Dr bank \\$20,000 (cash received).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cr share capital \\$20,000 (nominal value).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dr bank \\$20,000, Cr share capital \\$20,000.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Shares issued at a premium means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Issued above their nominal (face) value — excess credited to share premium",
              },
              { id: "b", text: "Issued below nominal value" },
              { id: "c", text: "Issued for free" },
              { id: "d", text: "Issued as a bonus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Share premium",
                statement: "Issue price above nominal value.",
              },
            ],
            steps: [
              {
                reasoning: "Premium = above nominal; discount = below nominal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Above nominal value.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company issues 30,000 shares of \\$1 each at \\$1.40 per share for cash. State the journal entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Premium issue",
                statement:
                  "Dr bank total; Cr share capital nominal; Cr share premium excess.",
              },
            ],
            steps: [
              {
                reasoning: "Total received = 30,000 × \\$1.40 = \\$42,000.",
                working: "30000 * 1.4 = 42000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dr bank \\$42,000; Cr share capital \\$30,000; Cr share premium \\$12,000.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State the full entry.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dr bank \\$42,000; Cr share capital \\$30,000; Cr share premium \\$12,000.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company declares dividends of \\$8,000 and pays them the same day. State both journal entries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dividend entries",
                statement:
                  "Declare: Dr dividends/Cr payable. Pay: Dr payable/Cr bank.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Declaration: Dr dividends \\$8,000, Cr dividends payable \\$8,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Payment: Dr dividends payable \\$8,000, Cr bank \\$8,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If declared and paid same day, both entries still made (or combined).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr dividends \\$8,000/Cr payable \\$8,000; Dr payable \\$8,000/Cr bank \\$8,000.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Bonus shares of \\$5,000 (nominal value) are issued to existing shareholders from retained profit. State the journal entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonus shares",
                statement: "Issued from reserves — no cash changes hands.",
              },
            ],
            steps: [
              {
                reasoning: "Dr retained profit/reserves \\$5,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cr share capital \\$5,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No bank entry — shares issued as a distribution of reserves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dr retained profit \\$5,000, Cr share capital \\$5,000.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "A company issues 25,000 shares of \\$2 each at \\$2.50 for cash. State the journal entry and the share premium per share.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Premium issue",
                statement:
                  "Dr bank total; Cr capital nominal; Cr premium excess.",
              },
            ],
            steps: [
              {
                reasoning: "Total received = 25,000 × \\$2.50 = \\$62,500.",
                working: "25000 * 2.5 = 62500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Share capital = 25,000 × \\$2 = \\$50,000.",
                working: "25000 * 2 = 50000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Share premium = 62,500 − 50,000 = \\$12,500.",
                working: "62500 - 50000 = 12500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Entry: Dr bank \\$62,500; Cr share capital \\$50,000; Cr share premium \\$12,500. Premium per share = \\$0.50.",
                working: "\\$0.50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr bank \\$62,500; Cr share capital \\$50,000; Cr share premium \\$12,500 (\\$0.50 per share).",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company receives \\$15,000 from issuing shares but the nominal value is only \\$12,000. State the journal entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Premium",
                statement: "Excess over nominal → share premium.",
              },
            ],
            steps: [
              { reasoning: "Dr bank \\$15,000.", marks: 1, markCode: "M" },
              {
                reasoning: "Cr share capital \\$12,000; Cr share premium \\$3,000.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State full entry.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dr bank \\$15,000; Cr share capital \\$12,000; Cr share premium \\$3,000.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is share capital shown as a liability (or equity) rather than an expense?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share capital",
                statement:
                  "It's owners' investment — a claim on the business, not a cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Share capital represents money invested by shareholders — it's owed TO them (equity/liability).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It's not a cost of earning profit — it's the source of capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repayment of share capital only happens on liquidation or share buy-back.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It's owners' investment — equity/liability, not an expense.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q9",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "A company issues 40,000 shares of \\$1.50 each at \\$2.00 for cash. State the journal entry.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The same company declares a dividend of \\$6,000 and pays it the following month. State both journal entries.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Company entries",
                statement:
                  "Shares: Dr bank/Cr capital+premium. Dividends: Dr dividends/Cr payable then Dr payable/Cr bank.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Total received = 40,000 × \\$2.00 = \\$80,000; share capital = 40,000 × \\$1.50 = \\$60,000; premium = \\$20,000.",
                working: "80000; 60000; 20000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Dr bank \\$80,000; Cr share capital \\$60,000; Cr share premium \\$20,000.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "State entry.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning:
                  "Declaration: Dr dividends \\$6,000, Cr dividends payable \\$6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Payment: Dr dividends payable \\$6,000, Cr bank \\$6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both entries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dr bank \\$80,000; Cr share capital \\$60,000; Cr share premium \\$20,000. (b) Dr dividends/Cr payable; then Dr payable/Cr bank.",
          },
        },
        {
          id: "cieiacct-u3-co-journal-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between shares issued at par, at a premium and at a discount.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "A company issues 10,000 shares of \\$2 each at \\$1.80 for cash. State the journal entry.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Issue prices",
                statement: "Par = nominal; premium = above; discount = below.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "At par: issued at nominal value — bank = share capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "At premium: issued above nominal — excess to share premium account.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "At discount: issued below nominal — discount deducted from share capital (or shown separately).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Premium is a reserve; discount reduces the capital raised.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Total received = 10,000 × \\$1.80 = \\$18,000.",
                working: "10000 * 1.8 = 18000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Share capital nominal = 10,000 × \\$2 = \\$20,000.",
                working: "20000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Discount = 20,000 − 18,000 = \\$2,000.",
                working: "2000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Entry: Dr bank \\$18,000, Dr discount on issue \\$2,000; Cr share capital \\$20,000 (or Cr share capital \\$18,000 net — state clearly).",
                working:
                  "Dr bank 18000 + Dr discount 2000 / Cr share capital 20000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Par = nominal; premium = above (to premium account); discount = below (reduces capital). (b) Dr bank \\$18,000 + Dr discount \\$2,000; Cr share capital \\$20,000.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-co-debentures",
      title: "Debentures and company loans",
      skill: "Account for debentures and distinguish them from shares.",
      lesson: {
        sections: [
          {
            heading: "What a debenture is",
            body: "A **debenture** is a long-term loan to the company — the company borrows money and pays fixed interest. Unlike shares, debentures do NOT carry ownership or voting rights. The debenture holder is a CREDITOR, not an owner.",
          },
          {
            heading: "Accounting treatment",
            body: "When issued: Dr bank, Cr debentures (non-current liability). Interest is an EXPENSE: Dr debenture interest, Cr bank/accrued interest. Unlike dividends, interest must be paid regardless of profit.",
          },
          {
            heading: "Shares vs debentures",
            body: "Shares = ownership, variable return (dividends), limited liability for holders, no repayment obligation. Debentures = loan, fixed return (interest), company owes repayment, interest is an expense.",
          },
        ],
        keyFormulas: [
          {
            name: "Debenture interest",
            statement: "Debenture loan × interest rate — expense",
          },
          {
            name: "Debentures",
            statement: "Non-current liability on balance sheet",
          },
        ],
        workedExample: {
          problem:
            "Company issues \\$50,000 of 10% debentures. Journal entries for issue and annual interest?",
          solution:
            "Issue: Dr bank \\$50,000, Cr debentures \\$50,000. Interest: Dr debenture interest \\$5,000, Cr bank \\$5,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-co-debentures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A debenture is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A long-term loan to the company paying fixed interest",
              },
              { id: "b", text: "A share in the company" },
              { id: "c", text: "A dividend payment" },
              { id: "d", text: "A type of expense" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debenture",
                statement: "Long-term loan paying fixed interest.",
              },
            ],
            steps: [
              {
                reasoning: "Debenture = loan, not share.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Long-term loan paying fixed interest.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Debenture holders are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creditors of the company, not owners" },
              { id: "b", text: "Owners of the company" },
              { id: "c", text: "Employees" },
              { id: "d", text: "Directors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debenture holder",
                statement: "Lender, not owner.",
              },
            ],
            steps: [
              {
                reasoning: "Debenture holders lend money — they're creditors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Creditors, not owners.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interest on debentures is treated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An expense in the profit and loss account" },
              { id: "b", text: "An appropriation of profit" },
              { id: "c", text: "A dividend" },
              { id: "d", text: "A distribution to shareholders" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debenture interest",
                statement: "Loan interest = expense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Debenture interest is an expense (unlike dividends).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) An expense.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company issues \\$75,000 of 6% debentures. Calculate the annual interest and state the journal entry for interest payment.",
          response: {
            type: "numeric",
            parts: [{ label: "Annual interest", answer: 4500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debenture interest",
                statement: "Loan × rate; Dr interest/Cr bank.",
              },
            ],
            steps: [
              {
                reasoning: "Interest = 75,000 × 6% = \\$4,500.",
                working: "75000 * 0.06 = 4500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Entry: Dr debenture interest \\$4,500, Cr bank \\$4,500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State amount and entry.",
                working: "\\$4,500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$4,500 — Dr interest, Cr bank.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two differences between shares and debentures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shares vs debentures",
                statement: "Ownership vs loan.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shares = ownership with voting rights; debentures = loan with no ownership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shares pay dividends (appropriation); debentures pay interest (expense).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shares have no repayment obligation; debentures must be repaid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two: ownership vs loan; dividends vs interest; no repayment vs must repay.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "A company has \\$200,000 share capital and \\$50,000 debentures. State which appears as equity/liability and explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital structure",
                statement:
                  "Shares = equity; debentures = non-current liability.",
              },
            ],
            steps: [
              {
                reasoning: "Share capital \\$200,000 = equity (owners' stake).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debentures \\$50,000 = non-current liability (money owed to lenders).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shareholders own the company; debenture holders are owed money.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This affects gearing — more debentures = higher financial risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shares = equity \\$200,000; debentures = liability \\$50,000.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why must debenture interest be paid even if the company makes a loss?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest obligation",
                statement:
                  "Loan interest is contractual — must be paid regardless of profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Debentures are loans — the company has a legal obligation to pay interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike dividends (discretionary), interest cannot be skipped.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Failure to pay could lead to the debenture holders enforcing their security.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Contractual obligation — must be paid regardless of profit.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "A company issues \\$100,000 of 8% debentures and \\$60,000 of 5% preference shares (nominal \\$1). Calculate annual debenture interest and preference dividend.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State which is an expense and which is an appropriation, and why.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debenture vs preference",
                statement:
                  "Debenture = loan interest expense; preference = dividend appropriation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Debenture interest = 100,000 × 8% = \\$8,000.",
                working: "8000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Preference dividend = 5% × 60,000 = \\$3,000.",
                working: "3000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State both amounts.",
                working: "\\$8,000 and \\$3,000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Debenture interest \\$8,000 is an expense — cost of borrowing, deducted before profit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Preference dividend \\$3,000 is an appropriation — distribution of profit to shareholders.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Interest must be paid; dividend only if profit allows.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Interest \\$8,000; preference dividend \\$3,000. (b) Interest = expense; dividend = appropriation.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the journal entries for issuing \\$40,000 of debentures and paying half-yearly interest of \\$1,600.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debenture entries",
                statement:
                  "Issue: Dr bank/Cr debentures. Interest: Dr interest/Cr bank.",
              },
            ],
            steps: [
              {
                reasoning: "Issue: Dr bank \\$40,000, Cr debentures \\$40,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interest: Dr debenture interest \\$1,600, Cr bank \\$1,600.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both entries.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dr bank/Cr debentures \\$40,000; Dr interest/Cr bank \\$1,600.",
          },
        },
        {
          id: "cieiacct-u3-co-debentures-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a company might issue debentures rather than ordinary shares to raise capital.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "A company has profit before tax \\$60,000, debenture interest \\$4,000 (8% on \\$50,000), tax 20% on profit before tax. Calculate profit after tax.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debentures vs shares",
                statement: "Debentures = fixed cost but no ownership dilution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Debentures don't dilute ownership — existing shareholders keep control.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Interest is tax-deductible, reducing the cost of borrowing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Fixed interest may be cheaper than dividends if profits are stable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "But it increases gearing and financial risk — interest must be paid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Profit before tax = 60,000 − 4,000 = \\$56,000.",
                working: "60000 - 4000 = 56000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Tax = 20% × 56,000 = \\$11,200.",
                working: "56000 * 0.2 = 11200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "PAT = 56,000 − 11,200 = \\$44,800.",
                working: "56000 - 11200 = 44800",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State PAT.",
                working: "\\$44,800",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) No dilution, tax-deductible interest, but higher gearing. (b) PAT \\$44,800.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-co-exam",
      title: "Company accounts exam practice",
      skill: "Apply company accounting to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "Company questions test: share capital calculations, dividend per share and total, preference vs ordinary dividends, debenture interest, and the distinction between expenses and appropriations. Always check whether an item is an expense (P&L) or appropriation (after profit).",
          },
          {
            heading: "Key distinctions",
            body: "Dividends = appropriation (not expense). Debenture interest = expense. Share capital = equity/liability (not expense). Retained profit = PAT − dividends.",
          },
        ],
        keyFormulas: [
          { name: "DPS", statement: "Total dividend ÷ shares" },
          { name: "PAT", statement: "Profit before tax − tax" },
          { name: "Retained", statement: "PAT − dividends" },
        ],
        workedExample: {
          problem:
            "PBT \\$90,000; tax 25%; dividends \\$0.30/share on 100,000 shares. PAT? Dividends? Retained?",
          solution:
            "Tax = 22,500; PAT = 67,500. Dividends = 30,000. Retained = 37,500.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-co-exam-q1",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Profit before tax \\$100,000; tax 30%. Calculate profit after tax.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The company declares a dividend of \\$0.40 per share on 120,000 shares. Calculate total dividends and retained profit.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PAT & retained",
                statement: "PAT = PBT − tax; retained = PAT − dividends.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Tax = 100,000 × 30% = \\$30,000; PAT = 100,000 − 30,000 = \\$70,000.",
                working: "70000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Dividends = 120,000 × \\$0.40 = \\$48,000; retained = 70,000 − 48,000 = \\$22,000.",
                working: "48000; 22000",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) PAT \\$70,000. (b) Dividends \\$48,000; retained \\$22,000.",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q2",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "A company has 80,000 ordinary shares of \\$1 and declares a 12% dividend. Calculate dividend per share and total dividend.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the journal entry for declaring the dividend.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend",
                statement: "% × nominal = per share; × shares = total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "DPS = 12% × \\$1 = \\$0.12; total = 80,000 × 0.12 = \\$9,600.",
                working: "0.12; 9600",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Dr dividends \\$9,600, Cr dividends payable \\$9,600.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) \\$0.12 per share; \\$9,600 total. (b) Dr dividends/Cr payable \\$9,600.",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q3",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "A company issues 50,000 shares of \\$2 each at \\$2.50 for cash. State the journal entry.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the share premium per share.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Premium issue",
                statement:
                  "Dr bank total; Cr capital nominal; Cr premium excess.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Total = 50,000 × 2.50 = \\$125,000; capital = 50,000 × 2 = \\$100,000; premium = \\$25,000. Dr bank \\$125,000; Cr share capital \\$100,000; Cr share premium \\$25,000.",
                working: "125000; 100000; 25000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Premium per share = \\$2.50 − \\$2.00 = \\$0.50.",
                working: "0.50",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Dr bank \\$125,000; Cr share capital \\$100,000; Cr share premium \\$25,000. (b) \\$0.50 per share.",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q4",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "A company has \\$80,000 of 7% debentures. Calculate annual interest and state the journal entry.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why this interest is an expense while dividends are not.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debenture interest",
                statement: "Loan interest = expense; dividend = appropriation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Interest = 80,000 × 7% = \\$5,600. Dr debenture interest \\$5,600, Cr bank \\$5,600.",
                working: "5600",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Interest is a cost of borrowing — a real expense reducing profit. Dividends are a distribution OF profit to owners — not a cost.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) \\$5,600; Dr interest/Cr bank. (b) Interest = borrowing cost; dividend = profit distribution.",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company has 60,000 ordinary shares and 20,000 preference shares of \\$1 each entitled to 5%. Profit available for distribution is \\$35,000. Calculate preference dividend and remaining for ordinary shareholders.",
          response: {
            type: "numeric",
            parts: [
              { label: "Preference dividend", answer: 1000, unit: "$" },
              { label: "Remaining for ordinary", answer: 34000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dividend priority",
                statement: "Preference first, then ordinary.",
              },
            ],
            steps: [
              {
                reasoning: "Preference dividend = 5% × 20,000 = \\$1,000.",
                working: "20000 * 0.05 = 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remaining = 35,000 − 1,000 = \\$34,000.",
                working: "35000 - 1000 = 34000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both figures.",
                working: "\\$1,000 and \\$34,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Preference \\$1,000; ordinary \\$34,000",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the journal entries for a company that declares \\$12,000 dividends and pays them the following month.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dividend entries",
                statement:
                  "Declare: Dr dividends/Cr payable. Pay: Dr payable/Cr bank.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Declaration: Dr dividends \\$12,000, Cr dividends payable \\$12,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Payment: Dr dividends payable \\$12,000, Cr bank \\$12,000.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both entries.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dr dividends/Cr payable \\$12,000; Dr payable/Cr bank \\$12,000.",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q7",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between share capital and retained profit.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A company's retained profit is \\$45,000 and it issues bonus shares of \\$10,000 nominal value. State the journal entry and explain the effect on retained profit and share capital.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital vs reserves",
                statement:
                  "Share capital = investment; retained profit = accumulated profit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Share capital: money invested by shareholders — shown as equity, permanent unless shares redeemed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Retained profit: profit kept after dividends — accumulated reserves, can be distributed as dividends or bonus shares.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Share capital is the original investment; retained profit is earned over time.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Dr retained profit \\$10,000, Cr share capital \\$10,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Retained profit falls to \\$35,000; share capital rises by \\$10,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "No cash changes hands — it's a conversion of reserves to capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State entry and effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Share capital = investment; retained = accumulated profit. (b) Dr retained/Cr share capital \\$10,000; retained → \\$35,000, capital +\\$10,000.",
          },
        },
        {
          id: "cieiacct-u3-co-exam-q8",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "A company has 100,000 ordinary shares of \\$1, 20,000 preference shares of \\$1 entitled to 6%, and \\$40,000 of 8% debentures. Profit before tax is \\$90,000; tax is 25%. Calculate profit after tax.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "State which items are expenses vs appropriations in arriving at profit after tax.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PAT",
                statement:
                  "PAT = PBT − tax; debenture interest is expense, dividends are appropriation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Debenture interest = 40,000 × 8% = \\$3,200 (expense).",
                working: "3200",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "PBT is given as \\$90,000 — assume debenture interest already deducted or add it: PBT before interest = 90,000 + 3,200 = 93,200? Use given PBT: if \\$90,000 is after interest, PAT = 90,000 × 0.75 = \\$67,500.",
                working: "90000 * 0.75 = 67500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Alternatively if PBT is before debenture interest: taxable = 90,000 − 3,200 = 86,800; tax = 21,700; PAT = 65,100. State assumption clearly.",
                working: "86800 * 0.75 = 65100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State PAT with clear assumption.",
                working:
                  "PAT \\$67,500 (if PBT after interest) or \\$65,100 (if before)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Expenses (P&L): debenture interest, all operating expenses, tax.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Appropriations (after PAT): preference dividend, ordinary dividend.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Share capital and retained profit are balance sheet items, not P&L items.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State classification clearly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) PAT \\$67,500 (assuming PBT after interest). (b) Interest/tax = expenses; dividends = appropriations.",
          },
        },
      ],
    },
  ],
};

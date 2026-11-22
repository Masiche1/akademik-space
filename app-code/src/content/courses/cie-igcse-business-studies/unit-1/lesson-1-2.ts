import type { Lesson } from "../../../types.ts";

export const lesson252: Lesson = {
  id: "cieibs-u1-lesson-1-2",
  code: "1-2",
  title: "Types of Business Organisation",
  goal: "I CAN compare sole traders, partnerships, private and public limited companies.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 1: types of business",
  ],

  vocabulary: [
    {
      term: "Sole trader",
      definition: "Business owned and run by one person.",
    },
    {
      term: "Partnership",
      definition: "Business owned by 2+ people sharing profits.",
    },
    {
      term: "Private limited company",
      definition: "Company with limited liability, shares not publicly traded.",
    },
    {
      term: "Public limited company",
      definition: "Company selling shares to public on stock exchange.",
    },
    {
      term: "Limited liability",
      definition: "Owners' personal assets protected from business debts.",
    },
    { term: "Shareholder", definition: "Owner of company shares." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s2-org",
      title: "Business organisation types",
      skill: "Compare business structures at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Unincorporated businesses",
            body: "Sole trader: one owner, unlimited liability, easy to set up, keeps all profit. Partnership: 2+ owners, shared profits/liabilities, more capital, shared decisions.",
          },
          {
            heading: "Incorporated companies",
            body: "Private limited (Ltd): limited liability, shares not sold publicly, easier to raise capital than sole trader. Public limited (PLC): sells shares publicly, limited liability, can raise large capital, more regulations.",
          },
        ],
        keyFormulas: [
          { name: "Sole trader", statement: "1 owner, unlimited liability" },
          { name: "Partnership", statement: "2+ owners, shared liability" },
          { name: "Ltd/PLC", statement: "limited liability, shares" },
        ],
        workedExample: {
          problem:
            "Why might a growing business convert from sole trader to Ltd?",
          solution:
            "Limited liability protects personal assets; can issue shares to raise capital; more credibility with customers/suppliers.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a sole trader?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Government business",
              },
              {
                id: "b",
                text: "Business owned and run by one person",
              },
              {
                id: "c",
                text: "Company with shareholders",
              },
              {
                id: "d",
                text: "Partnership of two people",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sole trader",
                statement: "One-person business.",
              },
            ],
            steps: [
              {
                reasoning: "Sole trader = one owner, unlimited liability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One-person business",
          },
        },
        {
          id: "cieibs-u1-org-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is limited liability?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement: "Protected personal assets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Owners' personal assets protected from business debts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Applies to companies (Ltd/PLC).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Protected personal assets",
          },
        },
        {
          id: "cieibs-u1-org-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare sole trader and private limited company.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Business comparison",
                statement: "Structure comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sole trader: unlimited liability, easy setup, keeps all profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ltd: limited liability, can raise capital via shares.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ltd more complex to set up.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sole trader vs Ltd comparison",
          },
        },
        {
          id: "cieibs-u1-org-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sole trader, partnership, private limited company, public limited company, limited liability, shareholder. (b) What is a sole trader? (c) What is a partnership? (d) What is a private limited company? (e) What is a public limited company? (f) What is limited liability? (g) Why convert to Ltd? (h) Choose the best structure for a small bakery.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business structures",
                statement: "Comparison and selection.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) One-person business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Shared ownership business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Limited liability, private shares.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Public shares on stock exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Protected personal assets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Liability protection, capital raising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid structure choice with reasoning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business organisation types.",
          },
        },
        {
          id: "cieibs-u1-org-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a partnership?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A business owned by the government" },
              {
                id: "b",
                text: "A business owned by two or more people who share profits",
              },
              { id: "c", text: "A business owned and run by one person" },
              { id: "d", text: "A company that sells shares publicly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partnership",
                statement:
                  "Two or more owners sharing profits and liabilities.",
              },
            ],
            steps: [
              {
                reasoning: "A partnership has 2+ owners sharing profits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** A business owned by two or more people who share profits",
          },
        },
        {
          id: "cieibs-u1-org-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of business organisation offers limited liability to its owners?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Co-operative" },
              { id: "b", text: "Private limited company" },
              { id: "c", text: "Sole trader" },
              { id: "d", text: "Partnership" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limited liability",
                statement:
                  "Owners' personal assets protected from business debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Companies (Ltd/PLC) have limited liability; sole traders and partnerships do not.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Private limited company",
          },
        },
        {
          id: "cieibs-u1-org-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A partnership of 4 partners shares a profit of 8000 dollars equally. How much profit does each partner receive?",
          response: {
            type: "numeric",
            parts: [{ label: "each partner", answer: 2000, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit sharing",
                statement:
                  "Equal shares = total profit divided by number of partners.",
              },
            ],
            steps: [
              {
                reasoning: "Each partner's share = 8000 / 4.",
                working: "8000 / 4 = 2000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each partner receives 2000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2000 dollars",
          },
        },
        {
          id: "cieibs-u1-org-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two advantages of operating as a sole trader.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sole trader",
                statement: "One owner, unlimited liability, simple setup.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Easy and cheap to set up and run; owner keeps all profits and makes all decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second valid advantage, e.g. privacy — no need to publish accounts or consult partners.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Easy setup and full control; keeps all profits",
          },
        },
        {
          id: "cieibs-u1-org-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A public limited company (PLC) differs from a private limited company (Ltd) mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is owned by only one person" },
              {
                id: "b",
                text: "Sells shares to the public on a stock exchange",
              },
              { id: "c", text: "Has unlimited liability" },
              { id: "d", text: "Cannot issue shares" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLC",
                statement:
                  "Company selling shares publicly on a stock exchange.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A PLC sells shares to the general public; a Ltd does not.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** Sells shares to the public on a stock exchange",
          },
        },
        {
          id: "cieibs-u1-org-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A private limited company issues 2000 shares at 2.50 dollars each. Calculate the total capital raised.",
          response: {
            type: "numeric",
            parts: [{ label: "capital raised", answer: 5000, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Share capital",
                statement: "Capital raised = number of shares x issue price.",
              },
            ],
            steps: [
              {
                reasoning: "Capital raised = 2000 x 2.50.",
                working: "2000 x 2.50 = 5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total capital raised = 5000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5000 dollars",
          },
        },
        {
          id: "cieibs-u1-org-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a partnership, Partner A owns 60% and Partner B owns 40%. Annual profit is 10,000 dollars. Calculate each partner's share of profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6000, unit: "dollars" },
              { label: "b", answer: 4000, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit sharing",
                statement:
                  "Share of profit = ownership percentage x total profit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Partner A: 60% of 10,000 = 6000 dollars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Partner B: 40% of 10,000 = 4000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 6000 dollars, (b) 4000 dollars",
          },
        },
        {
          id: "cieibs-u1-org-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An investor buys 250 shares in a company at 3 dollars per share. Calculate the total cost of the investment.",
          response: {
            type: "numeric",
            parts: [{ label: "cost", answer: 750, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Share purchase",
                statement: "Cost = number of shares x price per share.",
              },
            ],
            steps: [
              {
                reasoning: "Cost = 250 x 3.",
                working: "250 x 3 = 750",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total cost = 750 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "750 dollars",
          },
        },
        {
          id: "cieibs-u1-org-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might a growing business convert from a sole trader to a private limited company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To remove the need for accounts" },
              { id: "b", text: "To make the business easier to close down" },
              { id: "c", text: "To avoid paying any tax" },
              {
                id: "d",
                text: "To gain limited liability and raise capital by issuing shares",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Changing structure",
                statement: "Ltd gives limited liability and share capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A Ltd protects personal assets and can raise capital through shares.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** To gain limited liability and raise capital by issuing shares",
          },
        },
        {
          id: "cieibs-u1-org-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a disadvantage of operating as a public limited company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No need to publish financial information" },
              { id: "b", text: "It is very easy to set up" },
              { id: "c", text: "Owners keep all the profit" },
              {
                id: "d",
                text: "More regulations and accountability to shareholders",
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLC",
                statement: "Public shares bring regulation and accountability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PLC status means more regulation and accountability to shareholders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** More regulations and accountability to shareholders",
          },
        },
        {
          id: "cieibs-u1-org-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A high-risk business taking on large loans is choosing a structure. Which choice is most appropriate and why?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Limited company, because limited liability protects owners' personal assets",
              },
              {
                id: "b",
                text: "Sole trader, because unlimited liability protects personal assets",
              },
              { id: "c", text: "Franchise, because it removes all risk" },
              {
                id: "d",
                text: "Partnership, because partners never lose money",
              },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure choice",
                statement: "Match liability and capital needs to structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High risk favours limited liability to protect personal assets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Limited company, because limited liability protects owners' personal assets",
          },
        },
        {
          id: "cieibs-u1-org-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A PLC has 1,000,000 shares each priced at 2 dollars. The company issues 100,000 new shares at the same price. Calculate (a) the original market value and (b) the new market value.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2000000, unit: "dollars" },
              { label: "b", answer: 2200000, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market value",
                statement: "Market value = shares x price per share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Original market value = 1,000,000 x 2 = 2,000,000 dollars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New shares = 1,100,000 total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) New market value = 1,100,000 x 2 = 2,200,000 dollars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2,000,000 dollars, (b) 2,200,000 dollars",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-org-notes",
      title: "Business structures — notes",
      summary:
        "Sole trader=1 owner; partnership=shared; Ltd/PLC=limited liability+shares. Choose by size/risk/capital needs.",
      sections: [
        {
          heading: "Key idea",
          body: "Liability protection vs simplicity — trade-off in business structure choice.",
        },
        {
          heading: "PLC",
          body: "Public shares enable large capital raising but more regulation.",
        },
      ],
    },
  ],
};

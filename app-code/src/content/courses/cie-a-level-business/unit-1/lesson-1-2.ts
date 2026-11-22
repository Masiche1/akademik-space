import type { Lesson } from "../../../types.ts";

export const lesson372: Lesson = {
  id: "ciealbus-u1-lesson-1-2",
  code: "1-2",
  title: "Business Ownership and Legal Forms",
  goal: "I CAN compare different forms of business ownership and their implications.",
  standards: ["Cambridge A Level Business 9707", "Paper 1: business activity"],

  vocabulary: [
    { term: "Sole trader", definition: "Business owned by one person." },
    {
      term: "Partnership",
      definition: "Business owned by two or more people.",
    },
    {
      term: "Private limited company (Ltd)",
      definition: "Company with limited liability, shares not publicly traded.",
    },
    {
      term: "Public limited company (PLC)",
      definition: "Company with shares traded on stock exchange.",
    },
    {
      term: "Limited liability",
      definition: "Owners' personal assets protected from business debts.",
    },
    {
      term: "Unlimited liability",
      definition: "Owners personally responsible for business debts.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u1-s2-own",
      title: "Business ownership",
      skill: "Compare legal forms of business.",
      lesson: {
        sections: [
          {
            heading: "Sole trader",
            body: "One owner, unlimited liability, easy setup, owner keeps all profit but bears all risk. Limited capital raising ability.",
          },
          {
            heading: "Partnership",
            body: "Two+ owners share profits/liabilities. Unlimited liability unless LLP. Shared expertise but potential for disputes.",
          },
          {
            heading: "Limited companies",
            body: "Ltd: private shares, limited liability, easier capital raising. PLC: public shares, limited liability, can raise large capital but must disclose information and answer to shareholders.",
          },
        ],
        keyFormulas: [
          { name: "Sole trader", statement: "one owner, unlimited liability" },
          { name: "Partnership", statement: "shared ownership" },
          { name: "Ltd/PLC", statement: "limited liability companies" },
        ],
        workedExample: {
          problem:
            "Why might a growing business convert from sole trader to Ltd?",
          solution:
            "Limited liability protects personal assets, easier to raise capital by selling shares, more credibility with customers/suppliers.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-own-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a sole trader?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Business owned by one person",
              },
              {
                id: "b",
                text: "Public company",
              },
              {
                id: "c",
                text: "Two or more owners",
              },
              {
                id: "d",
                text: "Non-profit",
              },
            ],
            correctChoiceId: "a",
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
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One owner",
          },
        },
        {
          id: "ciealbus-u1-own-q2",
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
                statement: "Assets protected.",
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
                reasoning: "Applies to limited companies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Assets protected",
          },
        },
        {
          id: "ciealbus-u1-own-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare sole trader and partnership.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ownership comparison",
                statement: "Sole trader vs partnership.",
              },
            ],
            steps: [
              {
                reasoning: "Sole trader: one owner, unlimited liability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Partnership: shared ownership, shared profits/liabilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both easier setup than companies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ownership comparison",
          },
        },
        {
          id: "ciealbus-u1-own-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sole trader, partnership, Ltd, PLC, limited liability, unlimited liability. (b) What is a sole trader? (c) What is limited liability? (d) Compare sole trader and partnership. (e) Compare Ltd and PLC. (f) Why convert to limited company? (g) What are advantages of PLC? (h) Evaluate best ownership form for different business sizes.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ownership",
                statement: "Comparison, implications.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) One owner.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Assets protected.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Sole trader vs partnership.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Ltd private vs PLC public.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Liability protection, capital raising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Large capital, credibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Context-dependent evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business ownership forms.",
          },
        },
        {
          id: "ciealbus-u1-own-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which form of business ownership gives owners limited liability?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sole trader" },
              { id: "b", text: "Sole proprietorship" },
              { id: "c", text: "Ordinary partnership" },
              { id: "d", text: "Private limited company (Ltd)" },
            ],
            correctChoiceId: "d",
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
                  "Ltd and PLC companies offer limited liability; sole traders and partnerships have unlimited liability.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Private limited company (Ltd)",
          },
        },
        {
          id: "ciealbus-u1-own-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A business owned and run by two or more people who share profits and liabilities is a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "partnership" },
              { id: "b", text: "franchise" },
              { id: "c", text: "sole trader" },
              { id: "d", text: "public limited company" },
            ],
            correctChoiceId: "a",
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
                reasoning:
                  "A partnership has two or more owners who share profits and liabilities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Partnership",
          },
        },
        {
          id: "ciealbus-u1-own-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an advantage of converting a business to a public limited company (PLC)?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It does not have to publish any financial information",
              },
              {
                id: "b",
                text: "It can raise very large amounts of capital by selling shares publicly",
              },
              {
                id: "c",
                text: "It is simpler and cheaper to set up than a sole trader",
              },
              {
                id: "d",
                text: "Owners keep complete control without answering to shareholders",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLC",
                statement:
                  "Shares traded publicly; can raise large capital but must disclose information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A PLC can raise large capital through public share sales, though it must disclose information and answer to shareholders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Can raise very large capital through public share sales",
          },
        },
        {
          id: "ciealbus-u1-own-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main disadvantage of operating as a sole trader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is difficult to set up and register" },
              {
                id: "b",
                text: "Unlimited liability — personal assets can be seized to pay business debts",
              },
              {
                id: "c",
                text: "The business must publish its accounts publicly",
              },
              {
                id: "d",
                text: "The owner must share all profits with partners",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unlimited liability",
                statement: "Owner personally responsible for business debts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sole traders have unlimited liability — personal assets are at risk if the business fails.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unlimited liability — personal assets at risk",
          },
        },
        {
          id: "ciealbus-u1-own-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sole trader has revenue of £60,000 and total costs of £45,000. (a) Calculate its profit. (b) If revenue rises to £75,000 with costs unchanged, calculate the new profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15000, unit: "£" },
              { label: "b", answer: 30000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit = revenue - costs.",
                working: "60000 - 45000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Same formula with new revenue.",
                working: "75000 - 45000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£15,000 and £30,000",
          },
        },
        {
          id: "ciealbus-u1-own-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A PLC issues 10 million shares at a price of £2 each. (a) Calculate the maximum capital that could be raised. (b) If only 3 million shares are sold at issue, calculate the capital actually raised.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20000000, unit: "£" },
              { label: "b", answer: 6000000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Share capital",
                statement: "Capital raised = number of shares x issue price.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Capital = shares x price.",
                working: "10000000 \\times 2",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Same formula with shares actually sold.",
                working: "3000000 \\times 2",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£20,000,000 and £6,000,000",
          },
        },
        {
          id: "ciealbus-u1-own-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain one advantage of operating as a partnership rather than a sole trader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partnership advantage",
                statement:
                  "Shared ownership brings shared expertise and capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partners can pool capital and skills, and share the workload.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Losses and liabilities are shared rather than borne alone.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shared capital, expertise and liabilities.",
          },
        },
        {
          id: "ciealbus-u1-own-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare a private limited company (Ltd) with a public limited company (PLC).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Ltd vs PLC",
                statement:
                  "Both limited liability; differ in share trading and capital access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both have limited liability and separate legal identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ltd shares are private and cannot be sold on a stock exchange; PLC shares are publicly traded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "PLC can raise larger capital but must disclose more information and answer to shareholders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both limited liability; PLC trades publicly and raises more capital but discloses more.",
          },
        },
        {
          id: "ciealbus-u1-own-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might a successful sole trader decide to convert the business into a limited company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To avoid paying any tax on profits" },
              { id: "b", text: "To remove the need for any record keeping" },
              {
                id: "c",
                text: "To gain limited liability and make it easier to raise capital",
              },
              {
                id: "d",
                text: "To make the business exempt from all regulations",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ownership conversion",
                statement:
                  "Sole trader to company protects assets and aids capital raising.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conversion gives limited liability and easier access to capital, improving credibility.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Limited liability and easier capital raising",
          },
        },
        {
          id: "ciealbus-u1-own-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate whether a partnership is the best form of ownership for a small professional services firm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ownership evaluation",
                statement: "Match ownership form to business needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partnerships suit firms wanting shared expertise — common in accountancy and law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But unlimited liability exposes partners' personal assets to business risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An LLP or Ltd may be safer; judgement depends on risk and growth plans.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Suitable for shared expertise but liability risk may favour LLP/Ltd.",
          },
        },
        {
          id: "ciealbus-u1-own-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A Ltd company has revenue of £180,000 and total costs of £140,000. (a) Calculate its profit. (b) Calculate its profit margin as a percentage of revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40000, unit: "£" },
              { label: "b", answer: 22.22, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Profit = revenue - total costs.",
              },
              {
                kind: "formula",
                name: "Profit margin",
                statement: "Profit margin = profit / revenue x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit = revenue - costs.",
                working: "180000 - 140000",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Profit margin = profit / revenue.",
                working: "\\frac{40000}{180000} \\times 100 = 22.22",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£40,000 and 22.22%",
          },
        },
        {
          id: "ciealbus-u1-own-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using examples, evaluate whether becoming a PLC is the best way for a growing business to raise capital.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement:
                  "Weigh capital benefits against loss of control and disclosure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PLC status allows large-scale capital raising through public share sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But founders lose control to shareholders and must disclose sensitive information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A Ltd or retained earnings may raise sufficient funds with less dilution of control.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: PLC suits very large expansion needs; context determines best route.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "PLC maximises capital access but costs control and disclosure — depends on scale of needs.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-own-notes",
      title: "Ownership — notes",
      summary:
        "Sole trader→partnership→Ltd→PLC. Liability and capital raising drive choices.",
      sections: [
        {
          heading: "Key idea",
          body: "Ownership form affects liability, capital access, control, and credibility.",
        },
        {
          heading: "Growth path",
          body: "Businesses often start as sole traders and convert to companies as they grow.",
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ebz11-u1-lesson-4-1",
  code: "4-1",
  title: "Sources of Finance",
  goal: "I CAN compare internal and external sources of business finance.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance"],
  vocabulary: [
    {
      term: "Internal finance",
      definition:
        "Money from inside the business — retained profit, owner capital.",
    },
    {
      term: "External finance",
      definition: "Money from outside — loans, shares, grants.",
    },
    {
      term: "Share capital",
      definition: "Money raised by selling shares to investors.",
    },
    {
      term: "Retained profit",
      definition: "Profit kept in the business rather than distributed.",
    },
    {
      term: "Crowdfunding",
      definition: "Raising small amounts from many people online.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u1-internal",
      title: "Internal Sources of Finance",
      skill: "Understand retained profit and owner investment.",
      lesson: {
        sections: [
          {
            heading: "Retained profit",
            body: "**Retained profit** = profit kept in business instead of paid to owners. **Benefits**: no interest to pay, no dilution of ownership, demonstrates profitability. **Drawbacks**: limited amount, reduces dividend payouts, may not be enough for big projects.\n\n**Owner capital**: owners invest personal money — shares (companies) or additional capital (sole traders). **Benefits**: no interest, no repayment obligation. **Drawbacks**: limited by owner's wealth, may dilute ownership.",
          },
          {
            heading: "When to use internal finance",
            body: "Best for: small projects, steady businesses with consistent profits, avoiding debt. **Risk**: if profits are low or inconsistent, may not provide enough. **Opportunity cost**: money used internally can't be invested elsewhere or paid as dividends.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A profitable café wants to buy new equipment. Should it use retained profit?",
          solution:
            "Yes if profit is sufficient — no interest, no dilution, simple.",
        },
      },
      questions: [
        {
          id: "ebz11-u1-internal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is retained profit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revenue from sales" },
              { id: "b", text: "Money borrowed from a bank" },
              { id: "c", text: "Profit kept in the business" },
              { id: "d", text: "Profit paid to shareholders" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retained profit",
                statement: "Profit kept in business rather than distributed.",
              },
            ],
            steps: [
              {
                reasoning: "Retained = kept in business.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Kept in business",
            commonErrors: ["Dividends confused."],
          },
        },
        {
          id: "ebz11-u1-internal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of using retained profit for finance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retained profit",
                statement: "No interest, no dilution.",
              },
            ],
            steps: [
              {
                reasoning: "No interest payments — cheaper than loans.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No dilution of ownership/control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Demonstrates business profitability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "No interest, no dilution, shows profitability.",
            commonErrors: ["Only one advantage.", "No comparison."],
          },
        },
        {
          id: "ebz11-u1-internal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business with low profits might struggle to use retained profit for expansion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal finance limits",
                statement: "Depends on profit levels.",
              },
            ],
            steps: [
              {
                reasoning: "Retained profit = leftover after costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low profit → little left over.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May not cover expansion costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Need external finance instead.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Low profit = little retained — insufficient for expansion.",
            commonErrors: ["Unlimited assumed.", "No profit link."],
          },
        },
        {
          id: "ebz11-u1-internal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A successful bakery wants to open a second location.",
          parts: [
            {
              label: "a",
              prompt: "Explain why retained profit might be suitable.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain one reason it might not be sufficient.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest an alternative source of finance.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Finance choice",
                statement: "Match source to amount needed and risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Profitable business has retained profit available.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) No interest or dilution.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Proven track record.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Second location is expensive — may exceed profit.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Uses all profit — no buffer for existing business.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Bank loan or share issue.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) profit available/no interest (b) may not cover cost (c) loan/shares",
            commonErrors: ["Only one side.", "No alternative."],
          },
        },
      ],
    },
    {
      id: "ebz11-u1-external",
      title: "External Sources of Finance",
      skill: "Compare loans, shares, overdrafts and grants.",
      lesson: {
        sections: [
          {
            heading: "Debt finance",
            body: "**Bank loan**: fixed amount, fixed term, interest — must repay regardless of profit. Good for long-term projects. **Overdraft**: borrow up to limit, pay interest only on amount used — flexible for short-term needs. **Hire purchase/leasing**: spread cost of equipment — own at end or return.\n\n**Trade credit**: suppliers allow payment later (e.g., 30 days) — interest-free short-term finance.",
          },
          {
            heading: "Equity finance",
            body: "**Share issue**: sell shares to investors — no repayment, no interest, but dilutes ownership and investors expect dividends. **Crowdfunding**: many small investors online — good for innovative projects, but lots of effort. **Venture capital**: investors provide capital for high-growth businesses — they take equity and expect returns.\n\n**Grants**: free money from government — no repayment, but competitive and restricted use. **Factoring**: sell invoices to get cash quickly — costs percentage.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A startup needs £50,000 for 2 years with no collateral. Best source?",
          solution:
            "Crowdfunding or venture capital — no collateral needed, equity-based.",
        },
      },
      questions: [
        {
          id: "ebz11-u1-external-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the key difference between debt and equity finance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Debt must be repaid; equity doesn't" },
              { id: "c", text: "Debt is always cheaper" },
              { id: "d", text: "Equity is always better" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt vs equity",
                statement: "Debt = repay+interest; equity = sell ownership.",
              },
            ],
            steps: [
              {
                reasoning: "Debt repaid; equity not repaid.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Debt repaid, equity not",
            commonErrors: ["Cost confused."],
          },
        },
        {
          id: "ebz11-u1-external-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of a bank overdraft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Overdraft",
                statement: "Flexible, pay only for amount used.",
              },
            ],
            steps: [
              {
                reasoning: "Flexible — borrow up to limit as needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Interest only on amount actually used.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Good for short-term cash flow gaps.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Flexible, interest only on used amount, short-term.",
            commonErrors: ["Loan confused.", "Only one advantage."],
          },
        },
        {
          id: "ebz11-u1-external-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the downside of raising finance through a share issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Share issue",
                statement: "Dilutes ownership, investors expect returns.",
              },
            ],
            steps: [
              {
                reasoning: "Existing owners' shareholding diluted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less control over business decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investors expect dividends/profit share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Public companies face more regulation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Dilution, less control, dividend expectations, regulation.",
            commonErrors: ["Only benefits.", "No ownership link."],
          },
        },
        {
          id: "ebz11-u1-external-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business needs £100,000 to expand but has no assets for collateral.",
          parts: [
            {
              label: "a",
              prompt: "Explain why a bank loan might be difficult.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two alternative sources of finance.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate one of your suggestions.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Finance matching",
                statement: "Match source to business circumstances.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Banks require collateral/security.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) No assets = higher risk for bank.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) May refuse loan or charge high interest.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Crowdfunding or venture capital.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Angel investor or business grant.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Equity-based — no repayment but dilution.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) no collateral=high risk (b) crowdfunding/VC/grant (c) equity=dilution",
            commonErrors: ["Loan assumed easy.", "No evaluation."],
          },
        },
      ],
    },
  ],
};

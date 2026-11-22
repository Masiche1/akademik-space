import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "eiasacct-u5-lesson-5-2",
  code: "5-2",
  title: "Interpreting Financial Statements",
  goal: "I CAN interpret financial statements for decision-making.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 5 — Financial Analysis"],
  vocabulary: [
    { term: "Income statement", definition: "Shows profit/loss for period." },
    {
      term: "Balance sheet",
      definition: "Shows assets, liabilities, equity at date.",
    },
    {
      term: "Cash flow statement",
      definition: "Shows cash movements over period.",
    },
    {
      term: "Stakeholder",
      definition:
        "Person/group interested in business — owner, lender, employee.",
    },
    {
      term: "Decision-making",
      definition: "Using information to choose actions.",
    },
    { term: "Performance", definition: "How well business is doing." },
  ],
  concepts: [
    {
      id: "eiasacct-u5-stakeholders",
      title: "Stakeholder Perspectives",
      skill: "Interpret accounts for different stakeholders.",
      lesson: {
        sections: [
          {
            heading: "Owner perspective",
            body: "**Focus**: profitability, growth, return on investment. **Ratios**: ROCE, net margin, growth trends. **Concerns**: is business profitable? Is capital growing?\n\n**Questions**: Can I withdraw more? Should I reinvest? Is business sustainable?",
          },
          {
            heading: "Lender perspective",
            body: "**Focus**: ability to repay — liquidity, gearing, interest cover. **Ratios**: current ratio, acid test, gearing, interest cover. **Concerns**: will loan be repaid? Is business stable?\n\n**Questions**: Can business service debt? Is there security? What's the risk?",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Bank assessing loan application. What ratios?",
          solution: "Current ratio, gearing, interest cover, cash flow.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-stake-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a stakeholder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Person interested in business" },
              { id: "b", text: "Only owner" },
              { id: "c", text: "Only lenders" },
              { id: "d", text: "Only employees" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder",
                statement: "Interested party.",
              },
            ],
            steps: [
              {
                reasoning: "Stakeholder = interested party.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Interested party",
            commonErrors: ["Owner only."],
          },
        },
        {
          id: "eiasacct-u5-stake-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two stakeholder perspectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder perspectives",
                statement: "Owner+lender.",
              },
            ],
            steps: [
              {
                reasoning: "Owner — profitability, growth, return.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lender — liquidity, gearing, repayment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Employee — job security, wages.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Owner, lender, employee, customer, supplier.",
            commonErrors: ["Only one.", "Wrong perspective."],
          },
        },
        {
          id: "eiasacct-u5-stake-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why different stakeholders need different ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Different ratios",
                statement: "Different concerns.",
              },
            ],
            steps: [
              {
                reasoning: "Owner cares about profit — ROCE, margins.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lender cares about repayment — liquidity, gearing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Employee cares about security — stability, growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same statements, different interpretation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Different concerns=different ratios.",
            commonErrors: ["Same ratios.", "No reason."],
          },
        },
        {
          id: "eiasacct-u5-stake-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business: high profit, high gearing, low liquidity.",
          parts: [
            { label: "a", prompt: "How would owner view this?", marks: 4 },
            { label: "b", prompt: "How would lender view this?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder views",
                statement: "Different perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Owner — profitable, good returns, but risky.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Owner — high gearing = higher returns but risk.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Lender — high risk, may not repay.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Lender — low liquidity = can't service debt.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) profitable+risky (b) high risk",
            commonErrors: ["Same view.", "No perspective."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-decisions",
      title: "Using Accounts for Decisions",
      skill: "Use financial information for business decisions.",
      lesson: {
        sections: [
          {
            heading: "Decision types",
            body: "**Investment**: buy assets, expand — use ROCE, cash flow. **Financing**: raise capital, repay debt — use gearing, liquidity. **Pricing**: set prices — use margins, costs. **Operations**: manage inventory, credit — use turnover ratios.\n\n**Information**: accounts provide data — analysis turns into insight.",
          },
          {
            heading: "Limitations",
            body: "**Historical**: past data — may not predict future. **Simplified**: ratios don't capture everything. **Context**: industry, size, stage matter. **Judgement**: accounts inform, don't decide.\n\n**Best practice**: use multiple sources — accounts + market + experience.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Should business expand? What to check?",
          solution: "Cash flow, ROCE, market demand, funding.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-dec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is decision-making?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using information to choose" },
              { id: "b", text: "Avoiding choices" },
              { id: "c", text: "Guessing" },
              { id: "d", text: "Following rules" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decision-making",
                statement: "Informed choice.",
              },
            ],
            steps: [
              { reasoning: "DM = informed choice.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Informed choice",
            commonErrors: ["Guessing."],
          },
        },
        {
          id: "eiasacct-u5-dec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two decision types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decision types",
                statement: "Investment+financing.",
              },
            ],
            steps: [
              {
                reasoning: "Investment — buy assets, expand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Financing — raise capital, repay debt.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Pricing — set prices.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Investment, financing, pricing, operations.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiasacct-u5-dec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why accounts have limitations for decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Account limitations",
                statement: "Historical+simplified.",
              },
            ],
            steps: [
              {
                reasoning: "Historical — past data, not future.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Simplified — don't capture everything.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Context — industry, size matter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Judgement needed — accounts inform, don't decide.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Historical+simplified+context+judgement.",
            commonErrors: ["Perfect.", "No limitation."],
          },
        },
        {
          id: "eiasacct-u5-dec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business considering expansion. Accounts show strong profit, positive cash flow, low gearing.",
          parts: [
            { label: "a", prompt: "What does this suggest?", marks: 4 },
            { label: "b", prompt: "What else to consider?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expansion decision",
                statement: "Accounts+context.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Financially healthy — can fund expansion.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Low gearing — capacity to borrow more.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Market demand — is there room to grow?",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Competition — can we compete?",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) healthy+funding (b) demand+competition",
            commonErrors: ["Accounts enough.", "No context."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-quality",
      title: "Quality of Financial Information",
      skill: "Evaluate quality of financial information.",
      lesson: {
        sections: [
          {
            heading: "Qualitative characteristics",
            body: "**Reliability**: accurate, verifiable — can we trust it? **Relevance**: useful for decisions — does it matter? **Understandability**: clear, accessible — can users understand? **Comparability**: consistent over time — can we compare?\n\n**Trade-offs**: reliability vs timeliness — accurate but late vs quick but less accurate.",
          },
          {
            heading: "Limitations",
            body: "**Historical cost**: assets at purchase price — not current value. **Estimates**: depreciation, bad debts — judgement calls. **Inflation**: ignores price changes — distorts comparisons. **Off-balance sheet**: some items not recorded.\n\n**Improvement**: use notes, supplementary info, current values where possible.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Asset bought £10k, now worth £15k. BS shows?",
          solution: "£10k (historical cost) — not current value.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-qual-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is reliability in accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cheap" },
              { id: "b", text: "Fast" },
              { id: "c", text: "Accurate and verifiable" },
              { id: "d", text: "Simple" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reliability",
                statement: "Accurate+verifiable.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability = accurate.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Accurate",
            commonErrors: ["Fast confused."],
          },
        },
        {
          id: "eiasacct-u5-qual-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two qualitative characteristics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Qualitative characteristics",
                statement: "Reliability+relevance.",
              },
            ],
            steps: [
              {
                reasoning: "Reliability — accurate, verifiable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Relevance — useful for decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Understandability — clear, accessible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Reliability, relevance, understandability, comparability.",
            commonErrors: ["Only one.", "Wrong characteristic."],
          },
        },
        {
          id: "eiasacct-u5-qual-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain historical cost limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical cost",
                statement: "Purchase price.",
              },
            ],
            steps: [
              {
                reasoning: "Assets recorded at purchase price.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Not updated for current value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inflation distorts — asset worth more now.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balance sheet may understate assets.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Purchase price+not current+inflation.",
            commonErrors: ["Current value.", "No limitation."],
          },
        },
        {
          id: "eiasacct-u5-qual-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate financial information quality.",
          parts: [
            { label: "a", prompt: "What makes info reliable?", marks: 4 },
            { label: "b", prompt: "What are limitations?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Info quality",
                statement: "Characteristics+limits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Accurate — verifiable transactions.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Consistent — same methods over time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Historical cost — not current value.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Estimates — depreciation, bad debts.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) accurate+consistent (b) historical+estimates",
            commonErrors: ["Perfect info.", "No limitations."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u5-summary2",
      title: "Interpretation Summary",
      skill: "Summarise financial statement interpretation.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Stakeholders**: owner (profit), lender (repayment), employee (security). **Decisions**: investment, financing, pricing — use accounts. **Quality**: reliability, relevance, understandability, comparability. **Limitations**: historical, estimates, context needed.\n\n**Key idea**: accounts inform decisions — but need judgement and context.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: interpret for stakeholders, use for decisions. **Evaluate**: information quality, limitations, context. **Analyse**: patterns, implications, recommendations.\n\n**Key concepts**: stakeholders, decisions, qualitative characteristics, limitations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "All interpretation complete. Result?",
          solution: "Informed decisions possible.",
        },
      },
      questions: [
        {
          id: "eiasacct-u5-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of interpreting accounts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Record transactions" },
              { id: "b", text: "Prepare statements" },
              { id: "c", text: "Calculate tax" },
              { id: "d", text: "Inform decisions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretation purpose",
                statement: "Inform decisions.",
              },
            ],
            steps: [
              { reasoning: "Interpret = inform.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Inform decisions",
            commonErrors: ["Recording confused."],
          },
        },
        {
          id: "eiasacct-u5-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two stakeholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholders",
                statement: "Owner+lender+employee.",
              },
            ],
            steps: [
              {
                reasoning: "Owner — profitability, growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lender — liquidity, repayment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Employee — job security.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Owner, lender, employee, customer, supplier.",
            commonErrors: ["Only one.", "Wrong stakeholder."],
          },
        },
        {
          id: "eiasacct-u5-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why accounts inform but don't decide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounts inform",
                statement: "Need judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Accounts provide data — facts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decisions need judgement — context.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Future uncertain — past may not repeat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Multiple factors — market, competition, etc.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Data+judgement+uncertainty+factors.",
            commonErrors: ["Decide alone.", "No reason."],
          },
        },
        {
          id: "eiasacct-u5-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate financial information for decision-making.",
          parts: [
            { label: "a", prompt: "Strengths of accounts.", marks: 4 },
            { label: "b", prompt: "Limitations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Info evaluation",
                statement: "Strengths+limits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Comprehensive — all transactions recorded.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Standardised — comparable over time.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Historical — may not predict future.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Simplified — don't capture everything.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) comprehensive+standardised (b) historical+simplified",
            commonErrors: ["Perfect info.", "No limitations."],
          },
        },
      ],
    },
  ],
};

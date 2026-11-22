import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "eiasacct-u6-lesson-6-2",
  code: "6-2",
  title: "International Accounting",
  goal: "I CAN understand international accounting differences.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 6 — Professional Context"],
  vocabulary: [
    {
      term: "IFRS",
      definition: "International Financial Reporting Standards — global rules.",
    },
    {
      term: "GAAP",
      definition: "Generally Accepted Accounting Principles — national rules.",
    },
    {
      term: "Harmonisation",
      definition: "Making accounting standards similar globally.",
    },
    {
      term: "Multinational",
      definition: "Company operating in multiple countries.",
    },
    { term: "Exchange rate", definition: "Rate for converting currencies." },
    {
      term: "Consolidated accounts",
      definition: "Group accounts combining parent and subsidiaries.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u6-ifrs",
      title: "IFRS vs GAAP",
      skill: "Compare international and national accounting standards.",
      lesson: {
        sections: [
          {
            heading: "IFRS",
            body: "**Global standards**: used in 140+ countries. **Principles-based**: focus on substance over form. **More judgment**: allows professional judgement. **Convergence**: many countries adopting IFRS.\n\n**Examples**: IAS 16 (property), IFRS 15 (revenue), IFRS 9 (financial instruments).",
          },
          {
            heading: "GAAP differences",
            body: "**National standards**: US GAAP, UK GAAP — country-specific. **Rules-based**: more detailed, prescriptive. **Differences**: inventory valuation, revenue recognition, lease accounting.\n\n**Impact**: same transaction may be recorded differently — affects comparability.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do IFRS and GAAP differ?",
          solution: "Different approaches — principles vs rules.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-ifrs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is IFRS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "International standards" },
              { id: "b", text: "Banking rules" },
              { id: "c", text: "Tax rules" },
              { id: "d", text: "National standards" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IFRS", statement: "International." },
            ],
            steps: [
              { reasoning: "IFRS = international.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** International",
            commonErrors: ["National confused."],
          },
        },
        {
          id: "eiasacct-u6-ifrs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two IFRS characteristics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IFRS characteristics",
                statement: "Global+principles.",
              },
            ],
            steps: [
              {
                reasoning: "Global — used in 140+ countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Principles-based — substance over form.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More judgement — professional discretion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Global, principles-based, judgement.",
            commonErrors: ["Only one.", "Wrong characteristic."],
          },
        },
        {
          id: "eiasacct-u6-ifrs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why IFRS and GAAP differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Standard differences",
                statement: "Approach differs.",
              },
            ],
            steps: [
              {
                reasoning: "IFRS — principles-based, global.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "GAAP — rules-based, national.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different approaches — substance vs rules.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Historical development — different paths.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Principles vs rules+history.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u6-ifrs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Multinational operates in UK and US.",
          parts: [
            { label: "a", prompt: "Which standards to use?", marks: 4 },
            { label: "b", prompt: "Challenges?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "International standards",
                statement: "IFRS+GAAP.",
              },
            ],
            steps: [
              {
                reasoning: "(a) UK — IFRS (UK adopted IFRS).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) US — US GAAP (different standards).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Different rules — reconciliation needed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Complexity — dual reporting.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) IFRS+GAAP (b) reconciliation+complexity",
            commonErrors: ["Same standards.", "No challenges."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-multinational",
      title: "Multinational Accounting",
      skill: "Understand multinational company accounting.",
      lesson: {
        sections: [
          {
            heading: "Multinational challenges",
            body: "**Multiple currencies**: transactions in different currencies — exchange rate risk. **Different standards**: IFRS vs GAAP — reconciliation needed. **Transfer pricing**: internal transactions between subsidiaries — tax implications.\n\n**Consolidation**: combine parent + subsidiary accounts — eliminate inter-company transactions.",
          },
          {
            heading: "Consolidated accounts",
            body: "**Parent**: controlling company — owns >50% subsidiary. **Subsidiary**: controlled by parent — separate legal entity. **Consolidation**: combine accounts — show group as single entity.\n\n**Eliminations**: inter-company sales, loans, dividends — removed to avoid double-counting.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Parent owns 60% of subsidiary. Consolidate?",
          solution: "Yes — control exists.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-multi-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multinational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple countries" },
              { id: "b", text: "Single country" },
              { id: "c", text: "Local company" },
              { id: "d", text: "Small business" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multinational",
                statement: "Multiple countries.",
              },
            ],
            steps: [
              { reasoning: "Multi = multiple.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Multiple",
            commonErrors: ["Single confused."],
          },
        },
        {
          id: "eiasacct-u6-multi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two multinational challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multinational challenges",
                statement: "Currency+standards.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple currencies — exchange rate risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different standards — IFRS vs GAAP.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transfer pricing — tax implications.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Currency, standards, transfer pricing.",
            commonErrors: ["Only one.", "Wrong challenge."],
          },
        },
        {
          id: "eiasacct-u6-multi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain consolidated accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consolidated accounts",
                statement: "Group view.",
              },
            ],
            steps: [
              {
                reasoning: "Combine parent + subsidiary accounts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Show group as single entity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Eliminate inter-company transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gives complete group picture.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Combine+eliminate+group view.",
            commonErrors: ["Separate.", "No elimination."],
          },
        },
        {
          id: "eiasacct-u6-multi-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Parent sells £100k to subsidiary. Subsidiary sells all to external customers.",
          parts: [
            { label: "a", prompt: "How to consolidate?", marks: 4 },
            { label: "b", prompt: "What to eliminate?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consolidation",
                statement: "Eliminate inter-company.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Combine parent + subsidiary accounts.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Show group as single entity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Eliminate £100k inter-company sale — remove from both.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) External sales remain — £100k to customers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) combine+group view (b) eliminate inter-company",
            commonErrors: ["No elimination.", "Wrong treatment."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-tax",
      title: "Taxation in Accounting",
      skill: "Understand tax implications in accounting.",
      lesson: {
        sections: [
          {
            heading: "Corporate tax",
            body: "**Corporation tax**: tax on company profits — separate from shareholders. **Rate**: varies by profit level — small profits vs main rate. **Timing**: paid 9 months after year-end.\n\n**Accounts**: tax expense in income statement — reduces profit after tax.",
          },
          {
            heading: "Tax vs accounting profit",
            body: "**Accounting profit**: per accounting standards — accruals basis. **Taxable profit**: per tax rules — may differ. **Differences**: depreciation vs capital allowances, entertaining expenses, provisions.\n\n**Deferred tax**: timing differences — tax payable later.",
          },
        ],
        keyFormulas: [{ name: "PAT", statement: "PBT - Corporation tax" }],
        workedExample: {
          problem: "PBT £100k, tax £20k. PAT?",
          solution: "£80,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-tax-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is corporation tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax on company profits" },
              { id: "b", text: "Personal income tax" },
              { id: "c", text: "Payroll tax" },
              { id: "d", text: "VAT" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corporation tax",
                statement: "Company profits.",
              },
            ],
            steps: [
              { reasoning: "CT = company profits.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Company profits",
            commonErrors: ["Personal confused."],
          },
        },
        {
          id: "eiasacct-u6-tax-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two tax vs accounting differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tax vs accounting",
                statement: "Timing+rules.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depreciation vs capital allowances — different rates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Entertaining expenses — disallowable for tax.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Provisions — tax timing differs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Depreciation, entertaining, provisions.",
            commonErrors: ["Only one.", "Wrong difference."],
          },
        },
        {
          id: "eiasacct-u6-tax-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain deferred tax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deferred tax",
                statement: "Timing difference.",
              },
            ],
            steps: [
              {
                reasoning: "Timing differences — tax paid later.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accounting profit now, tax later.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deferred tax liability — future tax.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Smooths tax expense over time.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Timing+future tax+smooth.",
            commonErrors: ["Immediate.", "No deferral."],
          },
        },
        {
          id: "eiasacct-u6-tax-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company: accounting profit £150k, tax adjustments reduce taxable profit to £120k.",
          parts: [
            { label: "a", prompt: "Calculate current tax.", marks: 4 },
            { label: "b", prompt: "Explain deferred tax.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Tax calculation",
                statement: "Taxable vs accounting.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Current tax = 120,000 × 19% = £22,800.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Taxable profit differs from accounting.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Deferred tax — timing differences.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Future tax payable — recognise now.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £22,800 (b) deferred tax explained",
            commonErrors: ["Wrong profit.", "No deferral."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-summary2",
      title: "International Accounting Summary",
      skill: "Summarise international accounting.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**IFRS vs GAAP**: principles vs rules — different approaches. **Multinational**: multiple currencies, standards, consolidation. **Tax**: corporation tax, deferred tax, accounting vs taxable profit.\n\n**Key idea**: accounting is global — standards harmonise but differences remain.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: compare IFRS/GAAP, consolidate accounts, calculate tax. **Evaluate**: standard differences, multinational challenges. **Analyse**: implications, trends, recommendations.\n\n**Key concepts**: IFRS, GAAP, consolidation, corporation tax, deferred tax.",
          },
        ],
        keyFormulas: [{ name: "PAT", statement: "PBT - Corporation tax" }],
        workedExample: {
          problem: "All international topics covered. Result?",
          solution: "Ready for global accounting.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-sum2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main difference between IFRS and GAAP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different countries" },
              { id: "b", text: "Same" },
              { id: "c", text: "No difference" },
              { id: "d", text: "Principles vs rules" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IFRS vs GAAP",
                statement: "Principles vs rules.",
              },
            ],
            steps: [
              {
                reasoning: "Difference = approach.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Principles vs rules",
            commonErrors: ["Same."],
          },
        },
        {
          id: "eiasacct-u6-sum2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two multinational challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multinational challenges",
                statement: "Currency+standards.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple currencies — exchange rate risk.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Different standards — IFRS vs GAAP.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Transfer pricing — tax implications.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Currency, standards, transfer pricing.",
            commonErrors: ["Only one.", "Wrong challenge."],
          },
        },
        {
          id: "eiasacct-u6-sum2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why accounting standards harmonise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Harmonisation",
                statement: "Global consistency.",
              },
            ],
            steps: [
              {
                reasoning: "Global business — need common language.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comparability — compare companies globally.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investment — attract foreign capital.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "IFRS adoption — convergence effort.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Common language+comparability+investment.",
            commonErrors: ["No harmonisation.", "One reason."],
          },
        },
        {
          id: "eiasacct-u6-sum2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate international accounting challenges.",
          parts: [
            { label: "a", prompt: "What challenges exist?", marks: 4 },
            { label: "b", prompt: "How to overcome?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "International challenges",
                statement: "Complexity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Different standards — reconciliation needed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Multiple currencies — exchange rate risk.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Use IFRS — global standard.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Hedge currency risk — financial instruments.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) standards+currency (b) IFRS+hedging",
            commonErrors: ["No challenges.", "No solutions."],
          },
        },
      ],
    },
  ],
};

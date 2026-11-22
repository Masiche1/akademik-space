import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eiasacct-u4-lesson-4-1",
  code: "4-1",
  title: "Partnership Changes",
  goal: "I CAN account for partnership changes: new partners, retirement, dissolution.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 4 — Partnerships in Depth"],
  vocabulary: [
    {
      term: "Admission of partner",
      definition: "New partner joins — shares goodwill and capital.",
    },
    {
      term: "Retirement of partner",
      definition: "Partner leaves — paid out from capital.",
    },
    {
      term: "Dissolution",
      definition: "Partnership ends — assets sold, liabilities paid.",
    },
    {
      term: "Goodwill",
      definition: "Value of business reputation — shared on changes.",
    },
    {
      term: "Revaluation",
      definition: "Adjust assets/liabilities to current values.",
    },
    {
      term: "Realisation account",
      definition: "Shows profit/loss on selling assets at dissolution.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u4-admission",
      title: "Admitting a New Partner",
      skill: "Account for admission of new partner.",
      lesson: {
        sections: [
          {
            heading: "Admission process",
            body: "**Steps**: revalue assets/liabilities → record goodwill → adjust capital accounts → share goodwill among old partners → new partner pays premium into capital.\n\n**Goodwill**: old partners created the value — new partner pays for share. **Capital**: new partner's capital set by agreement — often includes premium paid.",
          },
          {
            heading: "Journal entries",
            body: "**Revaluation**: Dr/Cr assets and liabilities to fair value. **Goodwill**: Dr goodwill, Cr old partners' capital accounts. **New partner premium**: Dr bank/capital account, Cr goodwill (if goodwill written off).\n\n**Example**: Old partners share 2:1, goodwill £30,000 → Dr goodwill £30k, Cr A £20k, Cr B £10k. New partner C pays £15k premium for 1/4 share.",
          },
        ],
        keyFormulas: [
          {
            name: "Goodwill sharing",
            statement: "Old partners share goodwill pre-admission",
          },
        ],
        workedExample: {
          problem:
            "Two partners share profits equally. Goodwill £20,000. New partner admitted. Journal?",
          solution: "Dr Goodwill £20,000, Cr A £10,000, Cr B £10,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-adm-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when a partner is admitted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Partnership dissolves" },
              { id: "b", text: "Only capital added" },
              { id: "c", text: "Assets revalued, goodwill shared" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Admission",
                statement: "Revalue+goodwill.",
              },
            ],
            steps: [
              {
                reasoning: "Admission = revalue + share goodwill.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Revalue+goodwill",
            commonErrors: ["Nothing confused."],
          },
        },
        {
          id: "eiasacct-u4-adm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two steps in admitting a partner.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Admission steps",
                statement: "Revalue+goodwill+capital.",
              },
            ],
            steps: [
              {
                reasoning: "Revalue assets/liabilities to fair value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Share goodwill among old partners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Set new partner's capital including premium.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Revalue, goodwill, capital.",
            commonErrors: ["Only one.", "Wrong step."],
          },
        },
        {
          id: "eiasacct-u4-adm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why goodwill is shared on admission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill on admission",
                statement: "Old partners' value.",
              },
            ],
            steps: [
              {
                reasoning: "Old partners built the business reputation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "New partner benefits from existing goodwill.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "New partner pays premium for share of goodwill.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fair — old partners compensated for value created.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Old partners created value.",
            commonErrors: ["No reason.", "Wrong reason."],
          },
        },
        {
          id: "eiasacct-u4-adm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Partners A and B share profits 3:2. Goodwill £50,000. New partner C admitted.",
          parts: [
            {
              label: "a",
              prompt: "Share goodwill among old partners.",
              marks: 4,
            },
            { label: "b", prompt: "Journal entry for goodwill.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Goodwill sharing",
                statement: "3:2 ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) A: 50,000 × 3/5 = £30,000; B: 50,000 × 2/5 = £20,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: 30,000 + 20,000 = £50,000.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Dr Goodwill £50,000, Cr A £30,000, Cr B £20,000.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) C gets no goodwill share — pays premium.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) A £30k, B £20k (b) Dr GW, Cr A/B",
            commonErrors: ["Wrong ratio.", "C gets share."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-retirement",
      title: "Retirement of Partner",
      skill: "Account for partner retirement.",
      lesson: {
        sections: [
          {
            heading: "Retirement process",
            body: "**Steps**: revalue assets → share goodwill → adjust capital → calculate retiring partner's entitlement → pay out or leave in current account.\n\n**Goodwill on retirement**: retiring partner gets share of goodwill — written off against remaining partners' capital.",
          },
          {
            heading: "Calculation",
            body: "**Retiring partner's entitlement**: capital account balance + share of goodwill + share of revaluation. **Payment**: cash, assets, or credit balance. **Remaining partners**: share goodwill write-off — reduces their capital.\n\n**Example**: Partner retires with £25,000 capital + £5,000 goodwill share = £30,000 entitlement.",
          },
        ],
        keyFormulas: [
          {
            name: "Retirement payout",
            statement: "Capital + goodwill share + revaluation share",
          },
        ],
        workedExample: {
          problem:
            "Partner has £20,000 capital, shares goodwill 1/4 of £40,000 = £10,000. Payout?",
          solution: "£30,000 (20,000 + 10,000).",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-ret-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when a partner retires?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "Only drawings stop" },
              { id: "c", text: "Partnership dissolves" },
              { id: "d", text: "Paid out from capital and goodwill" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retirement",
                statement: "Paid out.",
              },
            ],
            steps: [
              { reasoning: "Retirement = payout.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Paid out",
            commonErrors: ["Nothing confused."],
          },
        },
        {
          id: "eiasacct-u4-ret-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two steps in partner retirement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retirement steps",
                statement: "Revalue+goodwill+payout.",
              },
            ],
            steps: [
              {
                reasoning: "Revalue assets/liabilities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Share goodwill — retiring gets share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Calculate and pay out entitlement.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Revalue, goodwill, payout.",
            commonErrors: ["Only one.", "Wrong step."],
          },
        },
        {
          id: "eiasacct-u4-ret-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain goodwill treatment on retirement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill on retirement",
                statement: "Share+write-off.",
              },
            ],
            steps: [
              {
                reasoning: "Retiring partner gets share of goodwill.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Goodwill written off — reduces remaining partners' capital.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Remaining partners absorb retiring partner's share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fair — retiring partner compensated for value.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Share+write-off+fair.",
            commonErrors: ["No goodwill.", "Wrong treatment."],
          },
        },
        {
          id: "eiasacct-u4-ret-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Partner A retires. Capital £30,000, goodwill £24,000 shared 2:1:1, revaluation profit £12,000 shared 2:1:1.",
          parts: [
            { label: "a", prompt: "Calculate A's entitlement.", marks: 4 },
            { label: "b", prompt: "Show goodwill journal.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Retirement calculation",
                statement: "Capital+shares.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Goodwill share: 24,000 × 1/4 = £6,000; revaluation: 12,000 × 1/4 = £3,000.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Entitlement = 30,000 + 6,000 + 3,000 = £39,000.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Dr Goodwill £24,000, Cr A £6,000, Cr B £12,000, Cr C £6,000.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Then Cr A capital £39,000, Dr bank £39,000 (payment).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £39,000 (b) goodwill+payment entries",
            commonErrors: ["Wrong ratio.", "No payment."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-dissolution",
      title: "Dissolution of Partnership",
      skill: "Account for partnership dissolution.",
      lesson: {
        sections: [
          {
            heading: "Dissolution process",
            body: "**Steps**: stop trading → realise assets → pay liabilities → distribute remaining to partners. **Realisation account**: records sale of assets, payment of liabilities — shows realisation profit/loss.\n\n**Order**: bank → secured creditors → preferential creditors → ordinary creditors → partners' loans → partners' capital.",
          },
          {
            heading: "Realisation account",
            body: "**Debits**: assets sold (at book value transferred), expenses of realisation. **Credits**: cash received, liabilities paid. **Balance**: realisation profit/loss — shared among partners.\n\n**Example**: Assets sold £50,000, liabilities paid £30,000, expenses £2,000 → £18,000 distributed to partners.",
          },
        ],
        keyFormulas: [
          {
            name: "Realisation result",
            statement: "Assets sold - liabilities - expenses",
          },
        ],
        workedExample: {
          problem: "Assets £60k, liabilities £35k, expenses £3k. Distribution?",
          solution: "£22,000 to partners.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-diss-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is dissolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit sharing" },
              { id: "b", text: "New partner joins" },
              { id: "c", text: "Partnership ends" },
              { id: "d", text: "Partner retires" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dissolution",
                statement: "Partnership ends.",
              },
            ],
            steps: [
              { reasoning: "Dissolution = end.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Partnership ends",
            commonErrors: ["Retirement confused."],
          },
        },
        {
          id: "eiasacct-u4-diss-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two steps in dissolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissolution steps",
                statement: "Realise+pay+distribute.",
              },
            ],
            steps: [
              {
                reasoning: "Realise assets — sell everything.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pay liabilities — creditors first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Distribute remaining to partners.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Realise, pay, distribute.",
            commonErrors: ["Only one.", "Wrong step."],
          },
        },
        {
          id: "eiasacct-u4-diss-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain realisation account purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Realisation account",
                statement: "Asset sales.",
              },
            ],
            steps: [
              {
                reasoning: "Records sale of assets at dissolution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Records payment of liabilities.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows realisation profit/loss on sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Determines amount distributed to partners.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Records sales+liabilities+profit/loss.",
            commonErrors: ["No purpose.", "Wrong purpose."],
          },
        },
        {
          id: "eiasacct-u4-diss-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Partnership dissolves. Assets sold £80,000, liabilities £45,000, realisation expenses £4,000, partners' loans £10,000.",
          parts: [
            { label: "a", prompt: "Calculate amount for partners.", marks: 4 },
            { label: "b", prompt: "Explain distribution order.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dissolution distribution",
                statement: "Order of payment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) 80,000 - 45,000 - 4,000 - 10,000 = £21,000 for capital.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Check: total distributed = £80,000.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Order: expenses → creditors → partners' loans → capital.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Partners' loans repaid before capital.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £21,000 (b) order explained",
            commonErrors: ["Wrong order.", "No calculation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u4-summary",
      title: "Partnership Changes Summary",
      skill: "Summarise partnership change accounting.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Admission**: revalue, share goodwill, set capital. **Retirement**: revalue, share goodwill, pay out. **Dissolution**: realise assets, pay liabilities, distribute. **Goodwill**: shared on changes — compensates old partners.\n\n**Key principle**: fair treatment — each partner gets share of value they helped create.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: journal entries for admission/retirement/dissolution. **Evaluate**: fairness of goodwill sharing, impact on remaining partners. **Analyse**: capital changes, realisation results.\n\n**Key concepts**: goodwill, revaluation, realisation account, distribution order.",
          },
        ],
        keyFormulas: [
          {
            name: "Goodwill sharing",
            statement: "Old partners share pre-change",
          },
          { name: "Realisation", statement: "Assets - liabilities - expenses" },
        ],
        workedExample: {
          problem: "All changes understood. Result?",
          solution: "Can account for any partnership change.",
        },
      },
      questions: [
        {
          id: "eiasacct-u4-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the common feature of admission and retirement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No goodwill" },
              { id: "b", text: "Assets not revalued" },
              { id: "c", text: "Goodwill is shared" },
              { id: "d", text: "Capital unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common feature",
                statement: "Goodwill shared.",
              },
            ],
            steps: [
              { reasoning: "Both share goodwill.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Goodwill shared",
            commonErrors: ["No goodwill."],
          },
        },
        {
          id: "eiasacct-u4-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two dissolution steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissolution steps",
                statement: "Realise+pay+distribute.",
              },
            ],
            steps: [
              {
                reasoning: "Realise assets — sell everything.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pay liabilities — creditors first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Distribute remaining to partners.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Realise, pay, distribute.",
            commonErrors: ["Only one.", "Wrong step."],
          },
        },
        {
          id: "eiasacct-u4-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why goodwill matters on partnership changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Goodwill importance",
                statement: "Fair compensation.",
              },
            ],
            steps: [
              {
                reasoning: "Partners built business value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Changes transfer value — must compensate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "New partner pays for goodwill share.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Retiring partner receives goodwill share.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Compensation for value created.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiasacct-u4-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate partnership change accounting.",
          parts: [
            { label: "a", prompt: "What makes it fair?", marks: 4 },
            { label: "b", prompt: "What could go wrong?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fairness",
                statement: "Balance interests.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Goodwill shared — old partners compensated.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Revaluation — assets at fair value.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Wrong goodwill value — disputes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Poor revaluation — unfair capital.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) goodwill+revaluation (b) valuation errors",
            commonErrors: ["Always fair.", "No risks."],
          },
        },
      ],
    },
  ],
};

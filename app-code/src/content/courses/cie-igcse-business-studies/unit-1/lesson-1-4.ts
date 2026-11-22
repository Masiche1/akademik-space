import type { Lesson } from "../../../types.ts";

export const lesson254: Lesson = {
  id: "cieibs-u1-lesson-1-4",
  code: "1-4",
  title: "Business Growth and Size",
  goal: "I CAN explain internal and external growth and measure business size.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 1: growth and size",
  ],

  vocabulary: [
    {
      term: "Internal growth",
      definition: "Business expands using its own resources.",
    },
    {
      term: "External growth",
      definition: "Business grows by merging with or acquiring others.",
    },
    { term: "Merger", definition: "Two businesses combine into one." },
    { term: "Takeover", definition: "One business buys control of another." },
    {
      term: "Economies of scale",
      definition: "Cost advantages from increased size.",
    },
    { term: "Turnover", definition: "Total revenue from sales." },
  ],
  concepts: [
    {
      id: "cieibs-u1-s4-grow",
      title: "Business growth",
      skill: "Understand growth strategies and measurement.",
      lesson: {
        sections: [
          {
            heading: "Growth methods",
            body: "Internal: organic growth through reinvested profits, new products, markets. External: merger (combine equals), takeover (acquire control), franchise (license business model).",
          },
          {
            heading: "Measuring size",
            body: "Turnover (revenue), number of employees, market share, profit. Economies of scale: bulk buying discounts, spreading fixed costs, specialisation — larger businesses can be more efficient.",
          },
        ],
        keyFormulas: [
          { name: "Internal growth", statement: "organic expansion" },
          { name: "External growth", statement: "merger/takeover/franchise" },
          {
            name: "Size measures",
            statement: "turnover, employees, market share, profit",
          },
        ],
        workedExample: {
          problem:
            "A small bakery opens a second location using profits. What type of growth?",
          solution:
            "Internal growth — expanding using own resources without merging with another business.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is internal growth?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Business expands using its own resources",
              },
              {
                id: "b",
                text: "Business is sold",
              },
              {
                id: "c",
                text: "Business merges with another",
              },
              {
                id: "d",
                text: "Business closes",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal growth",
                statement: "Organic expansion.",
              },
            ],
            steps: [
              {
                reasoning: "Internal = organic growth using own resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Organic expansion",
          },
        },
        {
          id: "cieibs-u1-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a merger?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merger",
                statement: "Two businesses combine.",
              },
            ],
            steps: [
              {
                reasoning: "Two businesses combine into one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Typically similar-sized companies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Two businesses combine",
          },
        },
        {
          id: "cieibs-u1-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are economies of scale? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economies of scale",
                statement: "Cost advantages from size.",
              },
            ],
            steps: [
              {
                reasoning: "Cost advantages from increased size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: bulk buying discounts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Larger firms can be more efficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost advantages from size",
          },
        },
        {
          id: "cieibs-u1-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define internal growth, external growth, merger, takeover, economies of scale, turnover. (b) What is internal growth? (c) What is external growth? (d) What is a merger? (e) What is a takeover? (f) What are economies of scale? (g) How measure business size? (h) Evaluate merger vs organic growth for a small business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business growth",
                statement: "Methods, measurement.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Organic expansion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Mergers/takeovers/franchises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Two businesses combine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) One buys control of another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Cost advantages from size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Turnover, employees, market share, profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation with reasoning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Business growth methods and measurement.",
          },
        },
        {
          id: "cieibs-u1-gr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a takeover?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A business is nationalised" },
              { id: "b", text: "One business buys control of another" },
              { id: "c", text: "A business opens a new shop" },
              { id: "d", text: "Two equal businesses combine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Takeover",
                statement: "One business acquires control of another.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A takeover is external growth where one firm buys control of another.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One business buys control of another",
          },
        },
        {
          id: "cieibs-u1-gr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a form of external growth?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Opening a second outlet funded by retained earnings",
              },
              {
                id: "b",
                text: "A franchise agreement to use another firm's business model",
              },
              { id: "c", text: "Hiring more staff organically" },
              { id: "d", text: "Reinvesting profits in a new product" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External growth",
                statement:
                  "Growth involving another business: merger, takeover or franchise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Franchising involves an external agreement, unlike organic expansion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Franchise agreement",
          },
        },
        {
          id: "cieibs-u1-gr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm has annual sales of $40,000 in a market worth $200,000 total. It employs 250 of the industry's 1,000 workers. (a) Calculate its market share. (b) Calculate its share of industry employment.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "%" },
              { label: "b", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Size measurement",
                statement:
                  "Market share = firm's sales / total market sales x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Market share = 40000 / 200000 x 100 = 20%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Employment share = 250 / 1000 x 100 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 20%, b) 25%",
          },
        },
        {
          id: "cieibs-u1-gr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two economies of scale that a large business can achieve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economies of scale",
                statement: "Cost advantages from increased size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bulk buying discounts — large firms negotiate lower input prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Spreading fixed costs or specialisation lowers unit costs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Bulk buying discounts; spreading fixed costs or specialisation",
          },
        },
        {
          id: "cieibs-u1-gr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most direct measure of a business's sales size?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turnover" },
              { id: "b", text: "Number of shareholders" },
              { id: "c", text: "Years in operation" },
              { id: "d", text: "Office floor area" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Turnover",
                statement: "Total revenue from sales — a key measure of size.",
              },
            ],
            steps: [
              {
                reasoning: "Turnover measures total sales revenue.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Turnover",
          },
        },
        {
          id: "cieibs-u1-gr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business has revenue of $20,000 and total costs of $14,000. (a) Calculate its profit. (b) If it grew by acquiring a rival whose sales were $8,000, calculate its new turnover.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6000, unit: "$" },
              { label: "b", answer: 28000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit and turnover",
                statement:
                  "Profit = revenue - total costs; turnover combines after acquisition.",
              },
            ],
            steps: [
              {
                reasoning: "Profit = 20000 - 14000 = $6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New turnover = 20000 + 8000 = $28,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $6,000, b) $28,000",
          },
        },
        {
          id: "cieibs-u1-gr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a merger and a takeover.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Merger vs takeover",
                statement: "Combine equals vs acquire control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Merger: two businesses combine into one, usually similar in size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Takeover: one business buys control of another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both are forms of external growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Merger = equal combination; takeover = one buys control",
          },
        },
        {
          id: "cieibs-u1-gr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a franchise allow a business to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid all taxes" },
              { id: "b", text: "Borrow money interest-free" },
              {
                id: "c",
                text: "License another firm's proven business model to operate locally",
              },
              { id: "d", text: "Sell its shares to the public" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Franchise",
                statement:
                  "Licensing a proven business model for local operation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Franchising lets a business use an established brand and model.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "License a proven business model",
          },
        },
        {
          id: "cieibs-u1-gr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm's workforce grew from 200 to 260 employees. (a) Calculate the percentage increase in employees. (b) If its market share rose from 10% to 13%, state the change in percentage points.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "%" },
              { label: "b", answer: 3, unit: "percentage points" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Growth measurement",
                statement: "Percentage increase = (new - old) / old x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = (260 - 200) / 200 x 100 = 30%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Change in market share = 13 - 10 = 3 percentage points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 30%, b) 3 percentage points",
          },
        },
        {
          id: "cieibs-u1-gr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether a small business should grow through internal expansion or an acquisition. Use reasons and reach a judgement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Growth evaluation",
                statement:
                  "Weigh control and risk vs speed and economies of scale.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Internal growth: retains control, lower risk, builds on own resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Internal growth is slower and may miss market opportunities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acquisition: fast growth, immediate market share, economies of scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But high cost, integration risks, loss of control — justified judgement required.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Balanced evaluation: internal = safer/slower; acquisition = faster/costlier",
          },
        },
        {
          id: "cieibs-u1-gr-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statistic best indicates that one business is larger than another?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Larger market share" },
              { id: "b", text: "Higher profit margin" },
              { id: "c", text: "Fewer competitors" },
              { id: "d", text: "Older premises" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market share",
                statement: "Proportion of total market sales — a size measure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Market share directly compares sales position relative to rivals.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Larger market share",
          },
        },
        {
          id: "cieibs-u1-gr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define internal growth, external growth, merger, takeover, economies of scale, turnover. (b) What is internal growth? (c) What is a takeover? (d) Give two measures of business size. (e) What are economies of scale? (f) A firm has sales of $60,000 in a $300,000 market with 400 of 2,000 industry workers. Calculate its market share and employment share. (g) Explain one advantage of economies of scale. (h) Evaluate merger versus organic growth for a growing SME.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Business growth",
                statement: "Methods, measurement, evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Organic expansion using own resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) One business buys control of another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Any two of turnover, employees, market share, profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Cost advantages from increased size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Market share = 60000/300000 = 20%; employment share = 400/2000 = 20%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) E.g. bulk buying discounts lower unit costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced evaluation with a justified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Growth methods, size measurement and evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-gr-notes",
      title: "Growth — notes",
      summary:
        "Internal=organic; external=merger/takeover. Size measured by turnover, employees, market share. Economies of scale reduce costs.",
      sections: [
        {
          heading: "Key idea",
          body: "Growth strategies depend on business goals, resources and market conditions.",
        },
        {
          heading: "Economies of scale",
          body: "Larger businesses achieve lower unit costs through efficiency.",
        },
      ],
    },
  ],
};

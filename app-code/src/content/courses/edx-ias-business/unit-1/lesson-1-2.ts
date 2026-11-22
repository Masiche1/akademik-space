import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eiasbiz-u1-lesson-1-2",
  code: "1-2",
  title: "Enterprise and Business Plans",
  goal: "I CAN explain enterprise characteristics and business plan components.",
  standards: ["Edexcel IAS Business WBP01 Unit 1 — Business Activity"],
  vocabulary: [
    {
      term: "Entrepreneur",
      definition:
        "Person who starts and runs a business, taking financial risk.",
    },
    {
      term: "Enterprise",
      definition: "The activity of creating and growing a business.",
    },
    {
      term: "Business plan",
      definition:
        "Document describing the business idea, strategy and finances.",
    },
    {
      term: "Market research",
      definition:
        "Gathering information about customers, competitors and markets.",
    },
    {
      term: "Break-even",
      definition:
        "Point where total revenue equals total costs — no profit or loss.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u1-enterprise",
      title: "Enterprise and Entrepreneurship",
      skill: "Identify entrepreneurial characteristics and enterprise support.",
      lesson: {
        sections: [
          {
            heading: "Entrepreneurial characteristics",
            body: "**Risk-taking**: willing to invest money/time with uncertain returns. **Innovation**: new ideas, products, processes. **Vision**: see opportunities others miss. **Determination**: persist through setbacks. **Leadership**: motivate and direct others.\n\n**Enterprise support**: government schemes, business incubators, enterprise agencies, mentoring, start-up loans, networking.",
          },
          {
            heading: "Types of enterprise",
            body: "**Social enterprise**: profit used for social/environmental goals — e.g., fair-trade companies. **Franchise**: licence to operate proven business model — fast growth, less risk, fees paid. **Intrapreneurship**: employees innovate within existing company.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A chef opens a restaurant risking savings. What characteristics shown?",
          solution: "Risk-taking, innovation, determination.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-ent-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an entrepreneur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A bank manager" },
              {
                id: "b",
                text: "Person who starts and runs a business taking risk",
              },
              { id: "c", text: "A customer" },
              { id: "d", text: "A government official" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entrepreneur",
                statement: "Starts business, takes risk.",
              },
            ],
            steps: [
              {
                reasoning: "Entrepreneur = risk-taking founder.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Risk-taking founder",
            commonErrors: ["Manager confused."],
          },
        },
        {
          id: "eiasbiz-u1-ent-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two characteristics of successful entrepreneurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entrepreneur traits",
                statement: "Risk, innovation, vision.",
              },
            ],
            steps: [
              {
                reasoning: "Risk-taking — invest with uncertainty.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Innovation — new ideas/products.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Determination/leadership — persist, motivate.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Risk-taking, innovation, determination.",
            commonErrors: ["Only one.", "Not traits."],
          },
        },
        {
          id: "eiasbiz-u1-ent-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a business plan should contain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business plan",
                statement: "Idea, strategy, finances.",
              },
            ],
            steps: [
              {
                reasoning: "Business idea and objectives.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Market analysis — customers, competitors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marketing and operations strategy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Financial forecasts — costs, revenue, break-even.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Idea, market, strategy, financials.",
            commonErrors: ["Only one section.", "No finances."],
          },
        },
        {
          id: "eiasbiz-u1-ent-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the advantages of starting a franchise versus an independent business.",
          parts: [
            { label: "a", prompt: "Give two franchise advantages.", marks: 4 },
            {
              label: "b",
              prompt: "Give two franchise disadvantages.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Franchise vs independent",
                statement: "Proven model vs freedom.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Proven business model — lower risk.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Brand recognition, training, support.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Ongoing fees/royalties reduce profit.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Less independence — rules, limited innovation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) proven+support (b) fees+limited freedom",
            commonErrors: ["One side.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-performance",
      title: "Measuring Business Performance",
      skill: "Calculate and interpret revenue, profit and market share.",
      lesson: {
        sections: [
          {
            heading: "Key measures",
            body: "**Revenue (turnover)**: total income from sales — price × quantity. **Gross profit**: revenue − cost of sales. **Operating profit**: gross profit − overheads. **Net profit**: after all costs including tax/interest. **Profit margin**: profit ÷ revenue × 100.\n\n**Market share**: firm's sales ÷ total market sales × 100.",
          },
          {
            heading: "Interpretation",
            body: "Rising revenue may hide falling profits (costs rising faster). **Gross vs net margin**: gross shows production efficiency; net shows overall performance. **Benchmarking**: compare with competitors/industry averages.\n\nExample: revenue £1m, costs £800k → gross profit £200k, 20% margin.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue − cost of sales." },
          { name: "Profit margin", statement: "(Profit ÷ Revenue) × 100." },
          {
            name: "Market share",
            statement: "(Firm sales ÷ Market sales) × 100.",
          },
        ],
        workedExample: {
          problem: "Revenue £500k, costs £400k. Gross profit and margin?",
          solution: "£100k profit; 20% margin.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-perf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is revenue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total costs" },
              { id: "b", text: "Profit after tax" },
              { id: "c", text: "Total income from sales" },
              { id: "d", text: "Number of customers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revenue",
                statement: "Total sales income.",
              },
            ],
            steps: [
              {
                reasoning: "Revenue = sales income.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Sales income",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasbiz-u1-perf-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Revenue £800k, cost of sales £500k, overheads £200k. Calculate gross and operating profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "gross", answer: 300000 },
              { label: "operating", answer: 100000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Revenue − costs.",
              },
            ],
            steps: [
              {
                reasoning: "Gross = 800−500 = £300k.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Operating = 300−200 = £100k.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "Gross £300k, operating £100k",
            commonErrors: ["Wrong cost deducted."],
          },
        },
        {
          id: "eiasbiz-u1-perf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why rising revenue doesn't guarantee rising profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revenue vs profit",
                statement: "Costs may rise faster.",
              },
            ],
            steps: [
              {
                reasoning: "Costs may increase faster than revenue.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Price cuts to gain sales reduce margin.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overheads (rent, wages) may rise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: revenue up 10%, costs up 15% → profit falls.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Costs can outpace revenue growth.",
            commonErrors: ["Always linked.", "No mechanism."],
          },
        },
        {
          id: "eiasbiz-u1-perf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Firm A: revenue £2m, profit £200k. Firm B: revenue £1m, profit £300k. Market total £10m.",
          parts: [
            {
              label: "a",
              prompt: "Calculate profit margins for both.",
              marks: 3,
            },
            { label: "b", prompt: "Calculate market shares.", marks: 3 },
            {
              label: "c",
              prompt: "Which is more profitable? Explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margin & share",
                statement: "Ratio measures.",
              },
            ],
            steps: [
              {
                reasoning: "(a) A: 200/2000=10%; B: 300/1000=30%.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct percentages.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) A: 20%; B: 10%.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Correct shares.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "(c) B more profitable per £ — higher margin despite lower share.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer: "(a) A=10%,B=30% (b) A=20%,B=10% (c) B more efficient",
            commonErrors: ["Confused measures.", "Wrong calc."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u1-growth",
      title: "Business Growth",
      skill: "Distinguish internal and external growth strategies.",
      lesson: {
        sections: [
          {
            heading: "Growth strategies",
            body: "**Internal (organic)**: grow from own resources — new products, new markets, more efficient production. **External**: growth through others — mergers, takeovers, joint ventures, franchises.\n\n**Mergers**: two firms combine — horizontal (competitors), vertical (supplier/customer), conglomerate (unrelated). **Takeover**: one firm buys control of another.",
          },
          {
            heading: "Evaluating growth",
            body: "**Benefits**: economies of scale, market power, risk spreading, synergies. **Risks**: integration problems, culture clash, debt from acquisition, diseconomies of scale.\n\n**Economies of scale**: costs fall per unit as output rises — purchasing, technical, marketing, financial.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Two supermarket chains merge. Type of merger?",
          solution: "Horizontal — same industry competitors.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u1-growth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is internal growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Merging with competitor" },
              { id: "b", text: "Franchising" },
              { id: "c", text: "Buying another company" },
              { id: "d", text: "Growing from own resources" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal growth",
                statement: "Organic growth.",
              },
            ],
            steps: [
              {
                reasoning: "Internal = own resources.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Own resources",
            commonErrors: ["External confused."],
          },
        },
        {
          id: "eiasbiz-u1-growth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of merger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merger types",
                statement: "Horizontal, vertical, conglomerate.",
              },
            ],
            steps: [
              {
                reasoning: "Horizontal — competitors in same market.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Vertical — supplier/customer combine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conglomerate — unrelated businesses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Horizontal, vertical, conglomerate.",
            commonErrors: ["Only one.", "Wrong types."],
          },
        },
        {
          id: "eiasbiz-u1-growth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two benefits of economies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economies of scale",
                statement: "Costs fall per unit.",
              },
            ],
            steps: [
              {
                reasoning: "Purchasing economies — bulk buying discounts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technical economies — specialised machinery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marketing economies — shared advertising.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Result: lower average cost per unit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Bulk discounts, specialisation, shared marketing.",
            commonErrors: ["Higher costs.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u1-growth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small bakery considers taking over a rival.",
          parts: [
            {
              label: "a",
              prompt: "Give two benefits of the takeover.",
              marks: 3,
            },
            { label: "b", prompt: "Give two risks.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest an alternative growth strategy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Takeover evaluation",
                statement: "Synergies vs integration.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Market share — eliminate competitor.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Economies of scale — combined purchasing/production.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Integration problems — systems, staff.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Debt — acquisition may need borrowing.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Internal growth — new products, delivery, online.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) share+scale (b) integration+debt (c) organic growth",
            commonErrors: ["Only benefits.", "No alternative."],
          },
        },
      ],
    },
  ],
};

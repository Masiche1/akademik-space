import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "cieibs-u4-lesson-4-5",
  code: "4-5",
  title: "Strategy and Growth: Competitive Advantage and Expansion",
  goal: "I CAN apply Ansoff's matrix, Porter's generic strategies and evaluate growth options.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Strategy section"],
  vocabulary: [
    {
      term: "Ansoff's matrix",
      definition:
        "Framework for growth: market penetration, product development, market development, diversification.",
    },
    {
      term: "Cost leadership",
      definition: "Competing by being the lowest-cost producer.",
    },
    {
      term: "Differentiation",
      definition: "Competing by offering unique, valued products.",
    },
    {
      term: "Niche strategy",
      definition: "Focusing on a small specialised market segment.",
    },
    {
      term: "Competitive advantage",
      definition: "What a firm does better than rivals.",
    },
    {
      term: "Diversification",
      definition:
        "Entering new markets or product areas unrelated to existing business.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u4-s5-strategy",
      title: "Growth strategies and competitive advantage",
      skill: "Apply growth frameworks and assess strategic choices.",
      lesson: {
        sections: [
          {
            heading: "Ansoff's matrix",
            body: "Ansoff's matrix shows four growth routes. Market penetration sells more of existing products to existing markets — lowest risk. Product development launches new products to existing markets — medium risk. Market development sells existing products to new markets/geographies — medium risk. Diversification enters new markets with new products — highest risk but greatest potential.",
          },
          {
            heading: "Porter's generic strategies",
            body: "Michael Porter identifies three competitive strategies. Cost leadership — produce at lowest cost, serve broad market (e.g., budget airlines). Differentiation — offer unique valued features, charge premium (e.g., Apple). Focus/niche — serve a narrow segment with either cost or differentiation advantage (e.g., specialist camera shops). Trying to be all three at once risks being stuck in the middle.",
          },
          {
            heading: "Competitive advantage and growth methods",
            body: "Competitive advantage comes from lower costs, unique products, better service or stronger brand. Growth can be internal (expanding existing operations) or external (mergers, takeovers, joint ventures). Franchising and licensing allow growth without full investment.",
          },
        ],
      },
      questions: [
    {
      id: "cieibs-u4-st-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What are the four growth strategies in Ansoff's matrix?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Ansoff's matrix",
            statement: "Four growth routes.",
          },
        ],
        steps: [
          {
            reasoning:
              "Market penetration, product development, market development and diversification.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Market penetration, product development, market development, diversification",
      },
    },
    {
      id: "cieibs-u4-st-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'cost leadership'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Offering unique features" },
          { id: "b", text: "Charging the highest prices" },
          { id: "c", text: "Selling only to a niche market" },
          { id: "d", text: "Competing by being the lowest-cost producer" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Cost leadership",
            statement: "Lowest-cost producer.",
          },
        ],
        steps: [
          {
            reasoning:
              "Cost leadership competes by producing at the lowest cost and serving a broad market at low prices.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(d)** Competing by being the lowest-cost producer",
      },
    },
    {
      id: "cieibs-u4-st-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does 'differentiation' mean in Porter's framework?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Offering unique, valued products that customers prefer",
          },
          { id: "b", text: "Competing on price" },
          { id: "c", text: "Serving only a small market" },
          { id: "d", text: "Buying out competitors" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Differentiation",
            statement: "Unique valued product.",
          },
        ],
        steps: [
          {
            reasoning:
              "Differentiation competes by offering unique features customers value enough to pay premium prices.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** Offering unique, valued products that customers prefer",
      },
    },
    {
      id: "cieibs-u4-st-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many growth strategies does Ansoff's matrix identify?",
      response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Ansoff", statement: "Four strategies." },
        ],
        steps: [
          {
            reasoning: "Ansoff's matrix identifies four growth strategies.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "4",
      },
    },
    {
      id: "cieibs-u4-st-q5",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Define 'competitive advantage' and 'niche market'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Competitive advantage",
            statement: "Edge over rivals.",
          },
          {
            kind: "definition",
            name: "Niche market",
            statement: "Small specialised segment.",
          },
        ],
        steps: [
          {
            reasoning:
              "Competitive advantage is what a firm does better than rivals — lower cost, unique product, better service.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A niche market is a small, specialised segment of the total market.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Competitive advantage = edge over rivals; niche = specialised segment.",
      },
    },
    {
      id: "cieibs-u4-st-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain market penetration as a growth strategy.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Market penetration",
            statement: "More of same product to same market.",
          },
        ],
        steps: [
          {
            reasoning:
              "Market penetration means selling more of the existing product to the existing market.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It is the lowest-risk Ansoff strategy because it uses known products and known customers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Methods include price cuts, more promotion, wider distribution or taking customers from rivals.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Grow sales of existing product in existing market — lowest risk.",
        commonErrors: ["Confusing it with diversification."],
      },
    },
    {
      id: "cieibs-u4-st-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the risks of diversification.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Diversification risk",
            statement: "Highest Ansoff risk.",
          },
        ],
        steps: [
          {
            reasoning:
              "Diversification enters new markets with new products — the firm lacks knowledge of both.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It requires significant investment and may face established competitors.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It is the highest-risk Ansoff strategy but offers the greatest potential for growth and reduced dependence on one market.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Highest risk — new market and product — but greatest growth potential.",
        commonErrors: ["Claiming diversification is low risk."],
      },
    },
    {
      id: "cieibs-u4-st-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare cost leadership and differentiation strategies.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Cost leadership",
            statement: "Lowest cost, low price.",
          },
          {
            kind: "definition",
            name: "Differentiation",
            statement: "Unique features, premium price.",
          },
        ],
        steps: [
          {
            reasoning:
              "Cost leadership competes on low prices through efficient production; it requires scale and tight cost control.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Differentiation competes on unique features customers value; it requires innovation, quality and brand building.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Both target the broad market but win differently — cost vs uniqueness.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Cost = low price via efficiency; differentiation = premium via uniqueness.",
        commonErrors: ["Confusing the two strategies."],
      },
    },
    {
      id: "cieibs-u4-st-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why Porter warns against 'stuck in the middle'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Stuck in the middle",
            statement: "No clear advantage.",
          },
        ],
        steps: [
          {
            reasoning:
              "A firm that tries to be both low-cost and differentiated without excelling at either lacks a clear competitive advantage.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It cannot match cost leaders on price nor differentiators on uniqueness.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Such firms are vulnerable to focused competitors who serve specific segments better.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "No clear advantage leaves the firm vulnerable.",
        commonErrors: ["Thinking mediocrity is safe."],
      },
    },
    {
      id: "cieibs-u4-st-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which growth strategy has the LOWEST risk?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Market penetration" },
          { id: "b", text: "Product development" },
          { id: "c", text: "Diversification" },
          { id: "d", text: "Market development" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Risk ranking",
            statement: "Penetration lowest.",
          },
        ],
        steps: [
          {
            reasoning:
              "Market penetration uses known products and customers — the lowest-risk Ansoff strategy.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(a)** Market penetration",
      },
    },
    {
      id: "cieibs-u4-st-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) What is a merger? (b) What is a takeover?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Merger",
            statement: "Firms combine equally.",
          },
          {
            kind: "definition",
            name: "Takeover",
            statement: "One firm buys another.",
          },
        ],
        steps: [
          {
            reasoning:
              "A merger combines two firms into a new entity, usually as equals.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A takeover is when one firm buys and absorbs another against its wishes or through share purchase.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Merger = combine as equals; takeover = one buys another.",
      },
    },
    {
      id: "cieibs-u4-st-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two benefits of market development as a growth strategy.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Market development",
            statement: "Existing product, new market.",
          },
        ],
        steps: [
          {
            reasoning:
              "It leverages an existing product — no new product development costs — reducing risk.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It opens new revenue streams: new regions, new customer segments or export markets.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Success in one market proves the product, making expansion more viable.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Reuse proven product in new markets — lower risk than new products.",
        commonErrors: ["Confusing with product development."],
      },
    },
    {
      id: "cieibs-u4-st-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A budget airline competes on price. Assess whether this cost-leadership strategy is sustainable.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Sustainability of strategy.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: cost leadership can be sustainable but requires constant cost vigilance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: economies of scale, efficient operations, standardised service and no-frills model sustain low costs; competitors struggle to match.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: rivals can copy the model, fuel costs fluctuate, and customers may demand more service — eroding the cost advantage.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: sustainable only if the firm maintains operational efficiency better than rivals over time.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Sustainable only with continuous cost discipline.",
        commonErrors: ["Assuming cost leadership is permanent."],
      },
    },
    {
      id: "cieibs-u4-st-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether a small business should attempt diversification.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Diversification for small firms.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: diversification is risky for small businesses with limited resources.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Risks: high investment, unfamiliar markets/products, management stretched thin, potential distraction from core business.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Potential benefits: reduces dependence on one market, new revenue streams, spreads risk if core market declines.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: small firms should first maximise penetration and product development before considering diversification.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Too risky for most small firms; focus on lower-risk strategies first.",
        commonErrors: [
          "Recommending diversification without resource analysis.",
        ],
      },
    },
    {
      id: "cieibs-u4-st-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether mergers always benefit the businesses involved.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Merger outcomes.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: mergers can create value but often fail to deliver expected benefits.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Potential benefits: economies of scale, market power, wider product range, cost savings, stronger competitiveness.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Risks: integration difficulties, culture clashes, loss of focus, job losses, regulatory barriers, overpayment.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: mergers benefit only when synergies are real and integration is managed well.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Benefits are possible but not guaranteed; integration is key.",
        commonErrors: ["Assuming mergers automatically succeed."],
      },
    },
    {
      id: "cieibs-u4-st-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the view that differentiation is always better than cost leadership.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Strategy comparison.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: neither strategy is universally better — it depends on the market and firm capabilities.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Differentiation suits markets where customers value unique features and pay premium prices; it builds brand loyalty.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Cost leadership suits price-sensitive mass markets and requires operational efficiency; it can be more defensible at scale.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: the best strategy matches market needs and firm strengths — no universal winner.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Context-dependent; match strategy to market and capabilities.",
        commonErrors: ["Declaring one strategy universally superior."],
      },
    },
    {
      id: "cieibs-u4-st-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'franchising'?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "A business allowing others to use its brand and model for a fee",
          },
          { id: "b", text: "A business selling its assets" },
          { id: "c", text: "A business merging with a rival" },
          { id: "d", text: "A government tax on businesses" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Franchising",
            statement: "Brand licensing.",
          },
        ],
        steps: [
          {
            reasoning:
              "Franchising lets a firm license its brand, model and support to franchisees for fees — growth without full investment.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** A business allowing others to use its brand and model for a fee",
      },
    },
    {
      id: "cieibs-u4-st-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how a firm can build competitive advantage.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Building advantage",
            statement: "Cost, uniqueness, service, brand.",
          },
        ],
        steps: [
          {
            reasoning:
              "Lower costs through efficient production, scale economies or better technology.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Unique products or features through innovation, design or quality.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Better service, stronger brand or location advantages that rivals cannot easily copy.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Cost efficiency, uniqueness, service, brand — sustained over time.",
      },
    },
    {
      id: "cieibs-u4-st-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe two ways a business can grow internally.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Internal growth",
            statement: "Expand existing operations.",
          },
        ],
        steps: [
          {
            reasoning:
              "Expand production capacity — buy more machinery, open new factories or increase output.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Grow the customer base — new markets, new products or better marketing to existing customers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Internal growth keeps control but is slower and limited by the firm's own resources.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Expand capacity and markets using own resources.",
      },
    },
    {
      id: "cieibs-u4-st-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the view that growth is always good for a business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Growth trade-offs.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: growth brings benefits but also risks and costs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: economies of scale, market power, diversification, higher profits, competitive strength.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Risks: overextension, loss of control, integration problems, increased bureaucracy, financial strain if growth is funded by debt.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: sustainable growth is good; uncontrolled growth can destroy value.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Growth helps when sustainable and managed.",
        commonErrors: ["Assuming bigger is always better."],
      },
    },
      ],
    },
  ],
};

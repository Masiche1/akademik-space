import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cieibs-u4-lesson-4-1",
  code: "4-1",
  title: "Marketing in Depth: The Marketing Mix",
  goal: "I CAN analyse the four Ps, pricing strategies and promotion decisions.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Marketing section"],
  vocabulary: [
    {
      term: "Marketing mix",
      definition:
        "The four controllable elements: product, price, place, promotion.",
    },
    {
      term: "Price skimming",
      definition: "Launching at a high price to target early adopters.",
    },
    {
      term: "Penetration pricing",
      definition: "Launching at a low price to gain market share quickly.",
    },
    {
      term: "Market share",
      definition: "A firm's sales as a percentage of total market sales.",
    },
    {
      term: "Brand loyalty",
      definition: "Customers' preference for a firm's product over rivals.",
    },
    {
      term: "Target market",
      definition: "The specific group of consumers a product is designed for.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u4-s1-mix",
      title: "The marketing mix",
      skill: "Analyse product, price, place and promotion decisions.",
      lesson: {
        sections: [
          {
            heading: "The four Ps",
            body: "The marketing mix is the set of controllable tools a firm uses to meet customer needs. Product covers design, quality, packaging and branding. Price determines revenue and position — premium prices signal quality, low prices attract volume. Place covers distribution channels — direct sales, retailers, e-commerce. Promotion covers advertising, sales promotion, personal selling and public relations.",
          },
          {
            heading: "Pricing strategies",
            body: "Cost-plus pricing adds a percentage profit margin to cost. Competitive pricing matches rivals' prices. Price skimming launches high to maximise early profit from willing buyers; penetration pricing launches low to build market share fast. Psychological pricing uses prices like $9.99 to seem cheaper. Price discrimination charges different prices to different customer groups.",
          },
          {
            heading: "Promotion and place",
            body: "Advertising reaches mass audiences; sales promotion (discounts, samples) gives short-term boosts; personal selling suits expensive or complex products; PR builds goodwill. Place decisions involve choosing between intensive (everywhere), selective (chosen outlets) and exclusive (one outlet) distribution.",
          },
        ],
      },
      questions: [
    {
      id: "cieibs-u4-mk-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What are the four elements of the marketing mix?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Marketing mix",
            statement: "Product, price, place, promotion.",
          },
        ],
        steps: [
          {
            reasoning:
              "The marketing mix consists of product, price, place and promotion.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Product, price, place and promotion",
      },
    },
    {
      id: "cieibs-u4-mk-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'price skimming'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Setting a low price to gain market share quickly" },
          {
            id: "b",
            text: "Launching at a high price to target early adopters",
          },
          { id: "c", text: "Charging different prices to different groups" },
          { id: "d", text: "Matching competitors' prices exactly" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Price skimming",
            statement: "High launch price.",
          },
        ],
        steps: [
          {
            reasoning:
              "Price skimming launches a product at a high price to extract maximum profit from early adopters before lowering it.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Launching at a high price to target early adopters",
      },
    },
    {
      id: "cieibs-u4-mk-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'penetration pricing'?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Launching at a low price to gain market share quickly",
          },
          { id: "b", text: "Charging the same as rivals" },
          { id: "c", text: "Free samples for one week" },
          { id: "d", text: "Launching at a high price" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Penetration pricing",
            statement: "Low launch price.",
          },
        ],
        steps: [
          {
            reasoning:
              "Penetration pricing sets a low initial price to attract customers and build market share fast.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(a)** Launching at a low price to gain market share quickly",
      },
    },
    {
      id: "cieibs-u4-mk-q4",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Define 'target market' and 'brand loyalty'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Target market",
            statement: "Specific consumer group.",
          },
          {
            kind: "definition",
            name: "Brand loyalty",
            statement: "Customer preference for a brand.",
          },
        ],
        steps: [
          {
            reasoning:
              "A target market is the specific group of consumers a product is designed for.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Brand loyalty is customers' preference for a firm's product over rivals, reducing price sensitivity.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Target market: intended consumer group; brand loyalty: preference for a brand.",
      },
    },
    {
      id: "cieibs-u4-mk-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "How many elements make up the marketing mix?",
      response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Marketing mix", statement: "Four Ps." },
        ],
        steps: [
          {
            reasoning:
              "The marketing mix has four elements: product, price, place, promotion.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "4",
      },
    },
    {
      id: "cieibs-u4-mk-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two advantages of price skimming for a firm launching a new product.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Skimming advantages",
            statement: "High early profit, image.",
          },
        ],
        steps: [
          {
            reasoning:
              "A high launch price extracts maximum profit from early adopters who are willing to pay, recovering development costs quickly.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A premium price signals quality and can build a strong brand image.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The firm can later lower the price to reach the mass market, capturing both segments.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Early profit recovery and premium brand image.",
        commonErrors: ["Claiming skimming always maximises total revenue."],
      },
    },
    {
      id: "cieibs-u4-mk-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why a firm might choose penetration pricing.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Penetration pricing",
            statement: "Low price for share.",
          },
        ],
        steps: [
          {
            reasoning:
              "A low launch price attracts customers quickly and builds market share before rivals react.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "High volume can reduce unit costs through economies of scale.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Once established, the firm can raise prices or use the customer base for other products.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "To gain market share fast and benefit from scale economies.",
        commonErrors: ["Ignoring the risk of low initial profit."],
      },
    },
    {
      id: "cieibs-u4-mk-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare intensive and exclusive distribution.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Intensive distribution",
            statement: "Product everywhere.",
          },
          {
            kind: "definition",
            name: "Exclusive distribution",
            statement: "Limited outlets.",
          },
        ],
        steps: [
          {
            reasoning:
              "Intensive distribution places products in as many outlets as possible, maximising availability for convenience goods.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Exclusive distribution limits outlets to chosen retailers, preserving prestige and control for luxury goods.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The choice depends on product type: convenience goods need intensive; luxury goods suit exclusive.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Intensive = wide availability; exclusive = limited, controlled outlets.",
        commonErrors: ["Confusing the two strategies."],
      },
    },
    {
      id: "cieibs-u4-mk-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how advertising and sales promotion differ.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Advertising",
            statement: "Paid mass communication.",
          },
          {
            kind: "definition",
            name: "Sales promotion",
            statement: "Short-term incentives.",
          },
        ],
        steps: [
          {
            reasoning:
              "Advertising is paid, non-personal mass communication through media to build image and inform.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Sales promotion uses short-term incentives — discounts, coupons, samples — to stimulate immediate purchases.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advertising builds long-term brand; promotion drives short-term sales but can train customers to wait for deals.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Advertising builds brand over time; sales promotion stimulates immediate buying.",
        commonErrors: ["Treating them as identical."],
      },
    },
    {
      id: "cieibs-u4-mk-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is 'market share'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The firm's profit margin" },
          {
            id: "b",
            text: "A firm's sales as a percentage of total market sales",
          },
          { id: "c", text: "Total market revenue" },
          { id: "d", text: "The number of competitors" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Market share",
            statement: "Percentage of market sales.",
          },
        ],
        steps: [
          {
            reasoning:
              "Market share is a firm's sales as a percentage of total sales in the market.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** A firm's sales as a percentage of total market sales",
      },
    },
    {
      id: "cieibs-u4-mk-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) Name the four promotion methods. (b) Which promotion method suits an expensive, complex product?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Promotion methods",
            statement: "Advertising, sales promotion, personal selling, PR.",
          },
          {
            kind: "definition",
            name: "Personal selling",
            statement: "Direct sales contact.",
          },
        ],
        steps: [
          {
            reasoning:
              "The four promotion methods are advertising, sales promotion, personal selling and public relations.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Personal selling suits expensive, complex products because it allows detailed explanation and relationship building.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "a) Advertising, sales promotion, personal selling, PR; b) Personal selling",
      },
    },
    {
      id: "cieibs-u4-mk-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why a firm might raise its price even if sales fall.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Price rise logic",
            statement: "Margin vs volume.",
          },
        ],
        steps: [
          {
            reasoning:
              "A higher price increases profit per unit, which can offset lower sales volume.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "If demand is price-inelastic, total revenue rises despite fewer sales.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Higher prices can also signal quality and improve brand image.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Higher margins and inelastic demand can make a price rise profitable.",
        commonErrors: ["Assuming lower sales always mean lower profit."],
      },
    },
    {
      id: "cieibs-u4-mk-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether a small firm should use penetration or skimming pricing for a new product.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Context-dependent judgement.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: the choice depends on market, product and firm objectives.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence for penetration: low price builds share fast, useful against established rivals; but risks low profit and quality perception.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence for skimming: recovers costs early and signals quality; but risks limited initial sales and attracting competitors.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: a small firm with limited resources often benefits from penetration to establish a customer base quickly.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Context-dependent; small firms often favour penetration for rapid share.",
        commonErrors: ["Recommending one strategy without justification."],
      },
    },
    {
      id: "cieibs-u4-mk-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the view that promotion is more important than product quality for business success.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Marketing mix balance.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: promotion drives awareness but cannot compensate for a poor product.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: strong promotion can launch products, build brands and generate initial sales even for average products.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: without quality, repeat purchases fail, reputation suffers and promotion spending is wasted.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: quality underpins long-term success; promotion amplifies a good product but cannot save a bad one.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Quality is fundamental; promotion supports but cannot replace it.",
        commonErrors: ["One-sided argument."],
      },
    },
    {
      id: "cieibs-u4-mk-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how the four elements of the marketing mix must work together.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Marketing mix integration",
            statement: "Elements must be consistent.",
          },
        ],
        steps: [
          {
            reasoning:
              "Product, price, place and promotion must be consistent — a premium product needs premium pricing and selective distribution.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Inconsistency confuses customers: a luxury product sold cheaply in every supermarket sends mixed signals.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The mix should target the same customer group — promotion aimed at young buyers requires a product and price they can afford.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Integrated marketing maximises effectiveness and builds a coherent brand image.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "The four Ps must be consistent and aligned with the target market.",
        commonErrors: ["Treating each P in isolation."],
      },
    },
    {
      id: "cieibs-u4-mk-q16",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which pricing strategy charges different prices to different customer groups?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Penetration pricing" },
          { id: "b", text: "Cost-plus pricing" },
          { id: "c", text: "Price discrimination" },
          { id: "d", text: "Psychological pricing" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Price discrimination",
            statement: "Different prices for different groups.",
          },
        ],
        steps: [
          {
            reasoning:
              "Price discrimination charges different customers different prices for the same product.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Price discrimination",
      },
    },
    {
      id: "cieibs-u4-mk-q17",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two benefits of building brand loyalty.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Brand loyalty benefits",
            statement: "Repeat sales, pricing power.",
          },
        ],
        steps: [
          {
            reasoning:
              "Loyal customers provide repeat purchases, reducing the need for constant marketing spend.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Loyalty gives the firm pricing power — customers accept higher prices for brands they trust.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A strong brand can also attract new customers through reputation and word of mouth.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Repeat sales, pricing power and reputation.",
        commonErrors: ["Confusing brand loyalty with market share."],
      },
    },
    {
      id: "cieibs-u4-mk-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how a firm could use market research to improve its marketing mix.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "skill",
            name: "Market research",
            statement: "Informs the mix.",
          },
        ],
        steps: [
          {
            reasoning:
              "Surveys and interviews reveal customer preferences for product features, price points and promotion channels.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The firm can then adjust the product design, set prices within willingness to pay, choose effective distribution and target promotion at the right audience.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Continuous research allows the mix to adapt as customer needs change.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Research identifies customer needs, guiding all four marketing decisions.",
        commonErrors: ["Listing research methods without linking to the mix."],
      },
    },
    {
      id: "cieibs-u4-mk-q19",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether small firms can compete with large firms in marketing.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Small vs large marketing.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: small firms face budget disadvantages but can use targeted, niche strategies.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence for small firms: local knowledge, personal service, niche products and social media allow low-cost targeted marketing.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: large firms have bigger budgets, established brands and mass media access that small firms cannot match.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: small firms compete best by focusing on niches and personal relationships rather than mass marketing.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Small firms can compete through niche focus and personal service.",
        commonErrors: [
          "Assuming budget size determines marketing success alone.",
        ],
      },
    },
    {
      id: "cieibs-u4-mk-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the view that e-commerce has made 'place' less important in the marketing mix.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Place in digital age.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: e-commerce changes place from physical location to online availability and delivery.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: online shops reach global customers 24/7 without physical stores, and delivery networks replace shop location.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: place still matters — delivery speed, returns, warehouses and the customer experience depend on logistics location.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: e-commerce transforms place rather than eliminating it — logistics and digital presence become the new 'place'.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Place transforms into logistics and online presence, not disappears.",
        commonErrors: ["Claiming place is irrelevant online."],
      },
    },
      ],
    },
  ],
};

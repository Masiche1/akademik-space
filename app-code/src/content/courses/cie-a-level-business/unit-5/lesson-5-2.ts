import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciealbus-u5-lesson-5-2",
  code: "5-2",
  title: "Porter's Five Forces and Growth Strategies",
  goal: "I CAN analyse industry competition and evaluate growth strategies.",
  standards: [
    "Cambridge A Level Business 9707",
    "Unit 5: strategic analysis tools",
  ],
  vocabulary: [
    {
      term: "Porter's Five Forces",
      definition: "Framework analysing industry competition.",
    },
    {
      term: "Bargaining power",
      definition: "Ability to influence terms of trade.",
    },
    {
      term: "Threat of substitutes",
      definition: "Alternative products satisfying same need.",
    },
    {
      term: "Ansoff matrix",
      definition: "Product-market growth strategy grid.",
    },
    {
      term: "Boston matrix",
      definition: "Product portfolio classification tool.",
    },
    {
      term: "Market penetration",
      definition: "Selling more of existing product in existing market.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u5l2-c1-porter",
      title: "Porter's Five Forces",
      skill: "Analyse industry competitiveness using Porter's framework.",
      lesson: {
        sections: [
          {
            heading: "The five forces",
            body: "**1. Threat of new entrants**: barriers to entry (capital, brand, regulation) — high barriers protect incumbents. **2. Bargaining power of suppliers**: few suppliers = they can raise prices. **3. Bargaining power of buyers**: many buyers = they can demand lower prices. **4. Threat of substitutes**: alternative products (e.g. tea vs coffee) — high threat limits pricing power. **5. Competitive rivalry**: intensity of competition among existing firms — high rivalry = price wars, low profits.",
          },
          {
            heading: "Using the analysis",
            body: "Five forces determine **industry attractiveness** — high rivalry, powerful suppliers/buyers, many substitutes = unattractive (low profits). Low threat of entrants, weak substitutes, fragmented rivals = attractive. Firms choose strategies to reduce competitive pressure — differentiate, build barriers, secure supply chains.",
          },
        ],
        keyFormulas: [
          { name: "Force 1", statement: "New entrants" },
          { name: "Force 4", statement: "Substitutes" },
          {
            name: "Attractive industry",
            statement: "Low rivalry + weak forces",
          },
        ],
        workedExample: {
          problem: "Apply Porter's to smartphone industry.",
          solution:
            "New entrants: hard (huge capital, patents). Suppliers: moderate (chip suppliers powerful). Buyers: high power (many choices). Substitutes: moderate (feature phones). Rivalry: intense (Apple/Samsung price war) — attractive but hyper-competitive.",
        },
      },
      questions: [
        {
          id: "ciealbus-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Porter's Five Forces analyse:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Financial ratios" },
              { id: "b", text: "Industry competitiveness" },
              { id: "c", text: "Employee motivation" },
              { id: "d", text: "Customer service" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Porter", statement: "Industry analysis." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Industry competitiveness",
            commonErrors: ["Internal analysis."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two of Porter's Five Forces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Porter forces", statement: "Five." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. threat of new entrants (barriers to entry) and bargaining power of buyers (customers' ability to negotiate prices) — also suppliers, substitutes, rivalry.",
            commonErrors: ["Wrong framework."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'barriers to entry' affect industry attractiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Barriers", statement: "Protection." },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "High barriers.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High barriers (capital requirements, patents, brand loyalty, regulation) deter new entrants — protects incumbents' profits; low barriers invite competition — erodes profits; key determinant of industry attractiveness.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply Porter's Five Forces to the airline industry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Porter app", statement: "Applied." },
            ],
            steps: [
              { reasoning: "Entrants.", marks: 1, markCode: "M" },
              { reasoning: "Suppliers/buyers.", marks: 1, markCode: "M" },
              { reasoning: "Substitutes/rivalry.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Entrants: moderate barriers (slots, capital). Suppliers: aircraft makers powerful. Buyers: high power (price comparison). Substitutes: trains/cars moderate. Rivalry: intense price competition — unattractive, thin margins despite huge demand.",
            commonErrors: ["Attractive."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the usefulness of Porter's Five Forces for strategic analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Porter eval",
                statement: "Framework value.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Systematic industry analysis, identifies competitive pressures, guides strategy — but assumes static industry, ignores firm-specific factors, may miss emerging threats (disruption); best combined with SWOT and other tools for complete picture.",
            commonErrors: ["Perfect tool."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'threat of substitutes'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Substitutes",
                statement: "Alternatives.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Alternative products satisfying same customer need — e.g. tea substitutes for coffee, video calls substitute for business travel; high threat limits pricing power and market share.",
            commonErrors: ["Competitors only."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "High bargaining power of buyers means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Customers can demand lower prices" },
              { id: "b", text: "No competition" },
              { id: "c", text: "Guaranteed profits" },
              { id: "d", text: "Suppliers control prices" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Buyer power",
                statement: "Price pressure.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Lower prices",
            commonErrors: ["Supplier power."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that give suppliers bargaining power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Supplier power",
                statement: "Concentration.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. few suppliers dominate market (oligopoly — e.g. aircraft manufacturers) and suppliers offer unique/differentiated inputs hard to replace — both increase suppliers' ability to raise prices.",
            commonErrors: ["Many suppliers."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'competitive rivalry' and its effect on profits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rivalry", statement: "Competition." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "High rivalry.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Intensity of competition among existing firms — high rivalry leads to price wars, advertising battles, innovation races; erodes profit margins as firms compete away profits; low rivalry allows higher margins.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a firm can reduce the threat of new entrants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entry barriers",
                statement: "Protection.",
              },
            ],
            steps: [
              { reasoning: "Method 1.", marks: 1, markCode: "M" },
              { reasoning: "Method 2.", marks: 1, markCode: "M" },
              { reasoning: "Method 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Build brand loyalty (switching costs), achieve economies of scale (cost advantage), secure patents/technology, create high capital requirements — raises barriers making entry unattractive; but must balance with innovation needs.",
            commonErrors: ["Can't reduce."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Porter force analyses competition from alternative products?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Threat of substitutes" },
              { id: "b", text: "Bargaining power of suppliers" },
              { id: "c", text: "Competitive rivalry" },
              { id: "d", text: "Threat of new entrants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Substitutes",
                statement: "Alternative products.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Threat of substitutes",
            commonErrors: ["New entrants."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that give buyers bargaining power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Buyer power",
                statement: "Customer leverage.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. many buyers available (fragmented market lets customers switch easily) and low switching costs (standardised products) — both let buyers demand lower prices and better terms.",
            commonErrors: ["Few buyers."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which Porter force is strengthened by high capital requirements and patents?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bargaining power of suppliers" },
              { id: "b", text: "Bargaining power of buyers" },
              { id: "c", text: "Threat of substitutes" },
              { id: "d", text: "Threat of new entrants" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Barriers", statement: "Protect incumbents." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Threat of new entrants",
            commonErrors: ["Substitutes."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply Porter's Five Forces to the coffee shop industry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Porter app", statement: "Applied." },
            ],
            steps: [
              { reasoning: "Entrants.", marks: 1, markCode: "M" },
              { reasoning: "Suppliers/buyers.", marks: 1, markCode: "M" },
              { reasoning: "Substitutes/rivalry.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Entrants: low barriers (easy to open). Suppliers: coffee bean prices volatile. Buyers: moderate power (many choices). Substitutes: tea, energy drinks high threat. Rivalry: intense local competition — unattractive unless differentiated.",
            commonErrors: ["Attractive."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a firm can reduce the bargaining power of its buyers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Buyer power reduction",
                statement: "Strategy.",
              },
            ],
            steps: [
              { reasoning: "Method 1.", marks: 1, markCode: "M" },
              { reasoning: "Method 2.", marks: 1, markCode: "M" },
              { reasoning: "Method 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Differentiate product (reduce substitutability), build brand loyalty/switching costs, lock in buyers via contracts or loyalty programmes — weakens buyers' ability to bargain for lower prices.",
            commonErrors: ["Can't reduce."],
          },
        },
        {
          id: "ciealbus-q-u5l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the limitations of Porter's Five Forces in industries undergoing rapid technological change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Porter limits",
                statement: "Dynamic industries.",
              },
            ],
            steps: [
              { reasoning: "Limit 1.", marks: 1, markCode: "M" },
              { reasoning: "Limit 2.", marks: 1, markCode: "M" },
              { reasoning: "Limit 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Assumes relatively stable industry structure — new technologies can instantly create entrants or substitutes the analysis misses; forces may shift rapidly making conclusions outdated; needs updating and supplementary tools (PESTLE, SWOT).",
            commonErrors: ["Perfect tool."],
          },
        },
      ],
    },
    {
      id: "ciealbus-u5l2-c2-growth",
      title: "Growth strategies: Ansoff and Boston matrices",
      skill: "Apply growth matrices to evaluate business expansion options.",
      lesson: {
        sections: [
          {
            heading: "Ansoff matrix",
            body: "Four growth strategies: **Market penetration** (existing product, existing market — e.g. more sales to current customers), **Market development** (existing product, new market — e.g. sell abroad), **Product development** (new product, existing market — e.g. new flavour), **Diversification** (new product, new market — e.g. unrelated business). Risk increases from penetration → diversification.",
          },
          {
            heading: "Boston matrix",
            body: "Classifies products by **market share** and **market growth**: **Stars** (high share, high growth — need investment), **Cash cows** (high share, low growth — generate cash), **Question marks** (low share, high growth — need investment or divest), **Dogs** (low share, low growth — consider divesting). Balances portfolio for sustainable growth.",
          },
        ],
        keyFormulas: [
          { name: "Ansoff", statement: "Product × Market" },
          { name: "Star", statement: "High share+growth" },
          { name: "Cash cow", statement: "High share+low growth" },
        ],
        workedExample: {
          problem:
            "Classify products: established brand in growing market, legacy product in declining market.",
          solution:
            "Established brand in growing market = Star (invest to maintain). Legacy product in declining market = Dog (divest or maintain for cash).",
        },
      },
      questions: [
        {
          id: "ciealbus-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Ansoff matrix analyses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Customer complaints" },
              { id: "b", text: "Financial ratios" },
              { id: "c", text: "Employee performance" },
              { id: "d", text: "Product and market growth options" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ansoff", statement: "Growth strategies." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Growth options",
            commonErrors: ["HR analysis."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'market penetration' mean in Ansoff?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Penetration",
                statement: "Existing+existing.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Selling more of existing product to existing market — e.g. increasing market share through promotion, better distribution, loyalty schemes; lowest risk Ansoff strategy.",
            commonErrors: ["New market."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'market development' and 'product development'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Mkt vs prod dev",
                statement: "New market vs new product.",
              },
            ],
            steps: [
              { reasoning: "Market dev.", marks: 1, markCode: "M" },
              { reasoning: "Product dev.", marks: 1, markCode: "M" },
              { reasoning: "Example each.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Market development: existing product → new market (sell abroad). Product development: new product → existing market (new flavour for current customers); both medium risk vs penetration.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the Boston matrix categories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Boston", statement: "Share+growth." },
            ],
            steps: [
              { reasoning: "Star.", marks: 1, markCode: "M" },
              { reasoning: "Cash cow.", marks: 1, markCode: "M" },
              { reasoning: "Question mark+dog.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stars: high share+high growth (invest). Cash cows: high share+low growth (harvest). Question marks: low share+high growth (invest or divest). Dogs: low share+low growth (divest); balances portfolio.",
            commonErrors: ["Only two types."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate diversification as a growth strategy in the Ansoff matrix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diversification",
                statement: "Highest risk.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "New product+new market — highest risk/reward; reduces dependence on one market, spreads risk — but unfamiliar territory, no existing expertise/brand; best when core business mature or declining.",
            commonErrors: ["Always best."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'cash cow' in the Boston matrix?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cash cow",
                statement: "High share+low growth.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Product with high market share in low-growth market — generates steady cash flow to fund other products; maintain position, harvest profits rather than invest heavily.",
            commonErrors: ["Star."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Ansoff, 'diversification' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "New product in new market" },
              { id: "b", text: "Existing product in new market" },
              { id: "c", text: "Existing product in existing market" },
              { id: "d", text: "New product in existing market" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Diversification", statement: "New+new." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** New+new",
            commonErrors: ["Penetration."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of using the Boston matrix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Boston benefits",
                statement: "Portfolio view.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. balances portfolio (cash cows fund stars/question marks) and guides investment decisions (which products need funding vs divestment) — helps allocate resources strategically.",
            commonErrors: ["No benefits."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'market development' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Market dev",
                statement: "Existing product→new market.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Selling existing product in new market — e.g. domestic company exports abroad, or targets new customer segment; leverages existing product knowledge but requires market research; medium risk.",
            commonErrors: ["New product."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the limitations of the Boston matrix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boston limits",
                statement: "Oversimplification.",
              },
            ],
            steps: [
              { reasoning: "Limit 1.", marks: 1, markCode: "M" },
              { reasoning: "Limit 2.", marks: 1, markCode: "M" },
              { reasoning: "Limit 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oversimplifies — market share/growth are crude measures, ignores synergies between products, static snapshot, may wrongly label products needing investment; useful guide but needs supplementary analysis.",
            commonErrors: ["Perfect tool."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Ansoff strategy carries the highest risk?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diversification" },
              { id: "b", text: "Market penetration" },
              { id: "c", text: "Product development" },
              { id: "d", text: "Market development" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Diversification", statement: "Highest risk." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Diversification",
            commonErrors: ["Penetration."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a 'question mark' product is in the Boston matrix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Question mark",
                statement: "Low share+high growth.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Dilemma.", marks: 1, markCode: "M" },
              { reasoning: "Strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Low market share in high-growth market — consumes cash but has growth potential; either invest heavily to become a star or divest if prospects look weak.",
            commonErrors: ["Cash cow."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which Boston matrix category describes a product with high market share in a low-growth market?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dog" },
              { id: "b", text: "Question mark" },
              { id: "c", text: "Cash cow" },
              { id: "d", text: "Star" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Cash cow", statement: "Share+growth axes." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cash cow",
            commonErrors: ["Star."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Apply the Ansoff matrix to a sportswear company considering expansion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ansoff app", statement: "Applied." },
            ],
            steps: [
              { reasoning: "Penetration/dev.", marks: 1, markCode: "M" },
              { reasoning: "Market/product dev.", marks: 1, markCode: "M" },
              { reasoning: "Diversification.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Penetration: sell more trainers to existing customers via promotions. Market development: export to new countries. Product development: launch new product line (e.g. yoga wear). Diversification: enter unrelated market (e.g. fitness equipment) — highest risk.",
            commonErrors: ["Only one option."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of the Boston matrix for managing a product portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boston eval",
                statement: "Tool value.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Clear visual portfolio classification, guides investment/divestment, balances cash flow — but ignores synergies, uses crude metrics, static snapshot, may misclassify products; useful guide needing supplementary analysis.",
            commonErrors: ["Perfect tool."],
          },
        },
        {
          id: "ciealbus-q-u5l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a firm should choose between market development and diversification in the Ansoff matrix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ansoff choice",
                statement: "Strategy selection.",
              },
            ],
            steps: [
              { reasoning: "Market dev explained.", marks: 1, markCode: "M" },
              { reasoning: "Diversification explained.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Market development: same product, new market — leverages existing expertise, medium risk; diversification: new product+market — highest risk but spreads risk and enables entry when core market saturated; choice depends on resources and market conditions.",
            commonErrors: ["Same risk."],
          },
        },
      ],
    },
  ],
};

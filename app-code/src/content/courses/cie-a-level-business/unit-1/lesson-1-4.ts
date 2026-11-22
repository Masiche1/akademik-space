import type { Lesson } from "../../../types.ts";

export const lesson374: Lesson = {
  id: "ciealbus-u1-lesson-1-4",
  code: "1-4",
  title: "Marketing and Operations Management",
  goal: "I CAN explain marketing functions and operations management.",
  standards: ["Cambridge A Level Business 9707", "Paper 1: business functions"],

  vocabulary: [
    {
      term: "Marketing mix (4Ps)",
      definition: "Product, Price, Place, Promotion.",
    },
    {
      term: "Operations management",
      definition: "Managing production of goods/services.",
    },
    {
      term: "Product life cycle",
      definition: "Stages: introduction, growth, maturity, decline.",
    },
    {
      term: "Quality control",
      definition: "Ensuring products meet standards.",
    },
    { term: "Lean production", definition: "Minimising waste in production." },
    {
      term: "Supply chain",
      definition: "Network from raw materials to customer.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u1-s4-mkt",
      title: "Marketing and operations",
      skill: "Understand business functions.",
      lesson: {
        sections: [
          {
            heading: "Marketing mix",
            body: "Product: design/features. Price: cost-plus, penetration, skimming. Place: distribution channels. Promotion: advertising, sales promotion, public relations.",
          },
          {
            heading: "Operations management",
            body: "Production methods: job, batch, flow. Quality management: TQM, ISO standards. Lean production: reduce waste, just-in-time inventory. Supply chain management: efficiency, reliability.",
          },
        ],
        keyFormulas: [
          { name: "4Ps", statement: "Product, Price, Place, Promotion" },
          { name: "Operations", statement: "production management" },
        ],
        workedExample: {
          problem:
            "A company wants to launch a new product. What marketing mix decisions needed?",
          solution:
            "Product design/features, pricing strategy (penetration vs skimming), distribution channels, promotion methods.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-mk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the 4Ps of marketing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Purchase, Payment, Place, Price",
              },
              {
                id: "b",
                text: "Product, Price, Place, Promotion",
              },
              {
                id: "c",
                text: "People, Process, Physical, Price",
              },
              {
                id: "d",
                text: "Production, Profit, Planning, Promotion",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "4Ps",
                statement: "Marketing mix.",
              },
            ],
            steps: [
              {
                reasoning: "4Ps = Product, Price, Place, Promotion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Product, Price, Place, Promotion",
          },
        },
        {
          id: "ciealbus-u1-mk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is operations management?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operations",
                statement: "Production management.",
              },
            ],
            steps: [
              {
                reasoning: "Managing production of goods/services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Includes quality, efficiency, supply chain.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Production management",
          },
        },
        {
          id: "ciealbus-u1-mk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is lean production?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lean production",
                statement: "Waste reduction.",
              },
            ],
            steps: [
              {
                reasoning: "Minimising waste in production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Just-in-time inventory, continuous improvement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases efficiency, reduces costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Waste reduction method",
          },
        },
        {
          id: "ciealbus-u1-mk-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define 4Ps, operations management, product life cycle, quality control, lean production, supply chain. (b) What are 4Ps? (c) What is operations management? (d) What is product life cycle? (e) What is quality control? (f) What is lean production? (g) What is supply chain? (h) Evaluate importance of marketing vs operations in business success.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Functions",
                statement: "Marketing, operations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Product, Price, Place, Promotion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Production management.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Life cycle stages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Quality standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Waste reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Raw materials to customer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation — both essential.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Marketing and operations.",
          },
        },
        {
          id: "ciealbus-u1-mk-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A new firm launches a product at a low price to gain customers quickly. This pricing strategy is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "price skimming" },
              { id: "b", text: "cost-plus pricing" },
              { id: "c", text: "predatory pricing" },
              { id: "d", text: "penetration pricing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Penetration pricing",
                statement: "Low launch price to gain market share quickly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Penetration pricing uses a low price to win customers and build market share fast.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Penetration pricing",
          },
        },
        {
          id: "ciealbus-u1-mk-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A carpenter builds a unique handmade table to a customer's specification. This is an example of which production method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "job production" },
              { id: "b", text: "batch production" },
              { id: "c", text: "flow production" },
              { id: "d", text: "mass production" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Job production",
                statement: "One-off production of customised goods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One-off customised products are made using job production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Job production",
          },
        },
        {
          id: "ciealbus-u1-mk-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the product life cycle, sales and profits typically reach their peak during which stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decline" },
              { id: "b", text: "Maturity" },
              { id: "c", text: "Growth" },
              { id: "d", text: "Introduction" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Product life cycle",
                statement: "Introduction, growth, maturity, decline.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sales and profits peak in the maturity stage before eventual decline.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Maturity",
          },
        },
        {
          id: "ciealbus-u1-mk-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A manufacturer achieves ISO 9001 certification for its quality management system. This relates to which 'P' of the marketing mix?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Place — it concerns distribution" },
              { id: "b", text: "Price — it determines the selling price" },
              { id: "c", text: "Promotion — it is a form of advertising" },
              { id: "d", text: "Product — quality is a product feature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quality management",
                statement: "Quality standards are part of the product offer.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quality is a feature of the product, so quality management supports the Product element.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Product",
          },
        },
        {
          id: "ciealbus-u1-mk-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A product costs £40 to make. (a) Using cost-plus pricing with a 25% markup on cost, calculate the selling price. (b) If the firm sells 2,000 units at this price, calculate total revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, unit: "£" },
              { label: "b", answer: 100000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost-plus pricing",
                statement: "Price = cost + markup.",
              },
              {
                kind: "formula",
                name: "Revenue",
                statement: "Revenue = price x quantity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Price = cost + 25% of cost.",
                working: "40 + (0.25 \\times 40)",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Revenue = price x quantity.",
                working: "50 \\times 2000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£50 and £100,000",
          },
        },
        {
          id: "ciealbus-u1-mk-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm has fixed costs of £30,000 and a contribution of £5 per unit; each unit sells for £12. (a) Calculate the break-even output. (b) Calculate the revenue needed to break even.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6000, unit: "units" },
              { label: "b", answer: 72000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Break-even",
                statement:
                  "Break-even output = fixed costs / contribution per unit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Break-even = fixed costs / contribution.",
                working: "30000 \\div 5",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "(b) Revenue at break-even = price x break-even output.",
                working: "12 \\times 6000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "6,000 units and £72,000",
          },
        },
        {
          id: "ciealbus-u1-mk-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two elements of the marketing mix and give an example decision for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marketing mix",
                statement: "Product, Price, Place, Promotion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two Ps named correctly, e.g. Product and Price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example decisions: product features/design; pricing method; distribution channel; promotion activity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Two Ps with example decisions.",
          },
        },
        {
          id: "ciealbus-u1-mk-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare job production, batch production and flow production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Production methods",
                statement: "Job, batch and flow suit different volumes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Job: one-off customised products; high cost per unit; flexible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Batch: groups of identical items; medium volume; some flexibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flow: continuous high-volume standardised production; lowest unit cost but least flexible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Job = custom/low volume; batch = medium; flow = high-volume continuous.",
          },
        },
        {
          id: "ciealbus-u1-mk-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main risk of using just-in-time (JIT) inventory management?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It forces the business to hold large amounts of stock",
              },
              {
                id: "b",
                text: "Any supply disruption can halt production because stocks are minimal",
              },
              { id: "c", text: "It always increases the cost of storage" },
              {
                id: "d",
                text: "It prevents the firm from selling to overseas markets",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Just-in-time",
                statement: "Minimal stock; vulnerable to supply failures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "JIT keeps little stock, so a supplier failure can stop production entirely.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Supply disruption can halt production",
          },
        },
        {
          id: "ciealbus-u1-mk-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate the view that marketing is more important than operations management for business success.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement:
                  "Marketing creates demand; operations delivers efficiently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marketing is vital — without demand there are no sales, and it shapes the product offered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But poor operations means quality failures, delays and high costs that undermine marketing promises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: both are essential; success depends on how well they work together.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both essential — marketing drives demand, operations must deliver efficiently.",
          },
        },
        {
          id: "ciealbus-u1-mk-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The total market is worth £50 million and a firm has sales of £15 million. (a) Calculate its market share. (b) Calculate the sales it would need for a 40% market share.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "%" },
              { label: "b", answer: 20000000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Market share",
                statement:
                  "Market share = firm sales / total market sales x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Market share = firm sales / total market.",
                working: "\\frac{15}{50} \\times 100",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 40% of £50m.",
                working: "0.4 \\times 50000000",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "30% and £20,000,000",
          },
        },
        {
          id: "ciealbus-u1-mk-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using examples, evaluate the benefits and drawbacks of adopting lean production methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weigh efficiency gains against JIT vulnerability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: lower waste, reduced inventory costs, higher efficiency and competitiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drawbacks: JIT makes firms vulnerable to supply failures; staff may resist change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quality must be high — defects discovered late are costly to fix.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: lean suits stable supply chains; risky where supplies are uncertain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Efficiency gains vs supply-chain vulnerability — context determines suitability.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-mk-notes",
      title: "Functions — notes",
      summary:
        "4Ps marketing mix. Operations: production methods, quality, lean, supply chain.",
      sections: [
        {
          heading: "Key idea",
          body: "Marketing drives demand; operations delivers product efficiently.",
        },
        {
          heading: "Integration",
          body: "Functions must work together for business success.",
        },
      ],
    },
  ],
};

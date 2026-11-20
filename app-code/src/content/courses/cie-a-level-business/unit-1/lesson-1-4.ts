import type { Lesson } from "../../../types.ts";

export const lesson374: Lesson = {
  id: "ciealbus-u1-lesson-1-4",
  code: "1-4",
  title: "Marketing and Operations Management",
  goal: "I CAN explain marketing functions and operations management.",
  standards: ["Cambridge A Level Business 9707", "Paper 1: business functions"],
  
  vocabulary: [
    { term: "Marketing mix (4Ps)", definition: "Product, Price, Place, Promotion." },
    { term: "Operations management", definition: "Managing production of goods/services." },
    { term: "Product life cycle", definition: "Stages: introduction, growth, maturity, decline." },
    { term: "Quality control", definition: "Ensuring products meet standards." },
    { term: "Lean production", definition: "Minimising waste in production." },
    { term: "Supply chain", definition: "Network from raw materials to customer." },
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
          problem: "A company wants to launch a new product. What marketing mix decisions needed?",
          solution: "Product design/features, pricing strategy (penetration vs skimming), distribution channels, promotion methods.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-mk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the 4Ps of marketing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Product, Price, Place, Promotion"
                    },
                    {
                              "id": "b",
                              "text": "People, Process, Physical, Price"
                    },
                    {
                              "id": "c",
                              "text": "Production, Profit, Planning, Promotion"
                    },
                    {
                              "id": "d",
                              "text": "Purchase, Payment, Place, Price"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "4Ps",
                              "statement": "Marketing mix."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4Ps = Product, Price, Place, Promotion.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Product, Price, Place, Promotion"
},
        },
        {
          id: "ciealbus-u1-mk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is operations management?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operations",
                              "statement": "Production management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Managing production of goods/services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes quality, efficiency, supply chain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Production management"
},
        },
        {
          id: "ciealbus-u1-mk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is lean production?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lean production",
                              "statement": "Waste reduction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minimising waste in production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Just-in-time inventory, continuous improvement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases efficiency, reduces costs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Waste reduction method"
},
        },
        {
          id: "ciealbus-u1-mk-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define 4Ps, operations management, product life cycle, quality control, lean production, supply chain. (b) What are 4Ps? (c) What is operations management? (d) What is product life cycle? (e) What is quality control? (f) What is lean production? (g) What is supply chain? (h) Evaluate importance of marketing vs operations in business success.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Functions",
                              "statement": "Marketing, operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Product, Price, Place, Promotion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Production management.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Life cycle stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Quality standards.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Waste reduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Raw materials to customer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation — both essential.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Marketing and operations."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-mk-notes",
      title: "Functions — notes",
      summary: "4Ps marketing mix. Operations: production methods, quality, lean, supply chain.",
      sections: [
        { heading: "Key idea", body: "Marketing drives demand; operations delivers product efficiently." },
        { heading: "Integration", body: "Functions must work together for business success." },
      ],
    },
  ],
};

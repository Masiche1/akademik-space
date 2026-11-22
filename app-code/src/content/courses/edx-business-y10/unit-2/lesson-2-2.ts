import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ebz10-u2-lesson-2-2",
  code: "2-2",
  title: "The Marketing Mix",
  goal: "I CAN apply the 4Ps of the marketing mix to business decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — Marketing"],
  vocabulary: [
    {
      term: "Product",
      definition: "What the business sells — goods or services.",
    },
    {
      term: "Price",
      definition: "Amount customers pay — affects profit and demand.",
    },
    {
      term: "Place",
      definition: "Where/how products are sold — distribution channels.",
    },
    {
      term: "Promotion",
      definition: "Communicating with customers — advertising, PR, sales.",
    },
    {
      term: "Product life cycle",
      definition: "Stages a product goes through — introduction to decline.",
    },
  ],
  concepts: [
    {
      id: "ebz10-u2-4ps",
      title: "The Four Ps",
      skill:
        "Understand and apply product, price, place and promotion decisions.",
      lesson: {
        sections: [
          {
            heading: "Product and price",
            body: "**Product**: design, quality, features, branding, packaging — must meet customer needs. **Product life cycle**: introduction (low sales, high costs) → growth → maturity (peak sales) → decline (falling sales).\n\n**Price**: cost-plus (cost + margin), competitive (match rivals), penetration (low to gain share), skimming (high for new products), psychological (£9.99). Price affects demand — higher price usually means lower quantity demanded.",
          },
          {
            heading: "Place and promotion",
            body: "**Place**: direct (own shops, online) or indirect (retailers, wholesalers). Distribution channels — how product reaches customer. **Promotion**: advertising (TV, online, print), public relations, sales promotions (discounts, competitions), personal selling.\n\n**Integration**: all 4Ps must work together — luxury product needs high price, exclusive places, premium promotion.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A new energy drink wants to sell to teenagers. Suggest 4Ps decisions.",
          solution:
            "Product: colourful cans, bold flavours. Price: £2.50 (competitive). Place: supermarkets, vending machines. Promotion: social media, sponsorship.",
        },
      },
      questions: [
        {
          id: "ebz10-u2-4ps-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'place' in the marketing mix refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How/where products are sold" },
              { id: "b", text: "Where the factory is" },
              { id: "c", text: "The product's colour" },
              { id: "d", text: "The company's office" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place",
                statement: "Distribution — how/where product reaches customer.",
              },
            ],
            steps: [
              {
                reasoning: "Place = distribution channels.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** How/where sold",
            commonErrors: ["Factory location confused."],
          },
        },
        {
          id: "ebz10-u2-4ps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four stages of the product life cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Product life cycle",
                statement: "Introduction → growth → maturity → decline.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction and growth.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Maturity and decline.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Sales pattern over time.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Introduction, growth, maturity, decline.",
            commonErrors: ["Missing stage.", "Wrong order."],
          },
        },
        {
          id: "ebz10-u2-4ps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might use penetration pricing for a new product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Penetration pricing",
                statement: "Low price to gain market share quickly.",
              },
            ],
            steps: [
              {
                reasoning: "Low price attracts many customers fast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gains market share before competitors react.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds customer base for future profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Risk: low profit initially, may signal low quality.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Low price gains share fast — risk of low profit/quality perception.",
            commonErrors: ["Only benefits.", "No risk."],
          },
        },
        {
          id: "ebz10-u2-4ps-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company launches a luxury watch brand.",
          parts: [
            {
              label: "a",
              prompt: "Suggest a suitable price strategy and explain why.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two appropriate promotion methods.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why 'place' matters for luxury goods.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing mix integration",
                statement:
                  "Luxury needs premium price, exclusive place, targeted promotion.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Skimming/high price — luxury image.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) High price signals quality/exclusivity.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Celebrity endorsement / luxury magazine ads.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Exclusive events / VIP experiences.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Exclusive boutiques maintain luxury image.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) skimming/high price (b) celebrity/VIP (c) exclusive boutiques",
            commonErrors: ["Cheap price.", "Mass promotion."],
          },
        },
      ],
    },
    {
      id: "ebz10-u2-segmentation",
      title: "Market Segmentation and Targeting",
      skill: "Segment markets and identify target customers.",
      lesson: {
        sections: [
          {
            heading: "Segmentation bases",
            body: "**Demographic**: age, gender, income, occupation. **Geographic**: location, climate, urban/rural. **Psychographic**: lifestyle, values, personality. **Behavioural**: usage rate, brand loyalty, benefits sought.\n\n**Why segment**: markets are diverse — one product can't satisfy everyone. Segmentation allows targeted marketing, better resource use, stronger customer relationships.",
          },
          {
            heading: "Targeting and positioning",
            body: "**Target market**: the specific segment chosen to serve. **Positioning**: how the product is perceived vs competitors — e.g., 'luxury', 'value', 'eco-friendly'.\n\n**Undifferentiated**: same product for all (e.g., salt). **Differentiated**: different products for different segments (e.g., cars from budget to luxury). **Concentrated**: focus on one niche segment.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A gym wants to attract young professionals. Which segmentation base?",
          solution:
            "Demographic (age, occupation) + psychographic (lifestyle, health-conscious).",
        },
      },
      questions: [
        {
          id: "ebz10-u2-segmentation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is market segmentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closing stores" },
              { id: "b", text: "Reducing prices" },
              { id: "c", text: "Selling to everyone" },
              { id: "d", text: "Dividing the market into distinct groups" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Segmentation",
                statement: "Dividing market into groups with similar needs.",
              },
            ],
            steps: [
              {
                reasoning: "Segmentation = dividing market into groups.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Dividing into groups",
            commonErrors: ["Mass marketing confused."],
          },
        },
        {
          id: "ebz10-u2-segmentation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three bases for segmenting a market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Segmentation bases",
                statement:
                  "Demographic, geographic, psychographic, behavioural.",
              },
            ],
            steps: [
              {
                reasoning: "Demographic and geographic.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Psychographic and behavioural.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Any three valid bases.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Demographic, geographic, psychographic, behavioural.",
            commonErrors: ["Only one base.", "Wrong terms."],
          },
        },
        {
          id: "ebz10-u2-segmentation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a business might choose concentrated targeting over undifferentiated marketing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Targeting strategies",
                statement: "Niche focus vs mass market.",
              },
            ],
            steps: [
              {
                reasoning: "Concentrated = focus resources on one segment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can tailor product precisely to segment needs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less competition in niche, higher loyalty.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Risk: small market, dependent on one segment.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Focus on niche = tailored product, less competition — risk of small market.",
            commonErrors: ["No comparison.", "No risk."],
          },
        },
        {
          id: "ebz10-u2-segmentation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A coffee shop chain wants to launch a new product.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two ways to segment the coffee market.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Choose one segment and explain why it's attractive.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Segmentation application",
                statement: "Segment by needs, then target the most attractive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) By age (students vs professionals) or by occasion (breakfast vs afternoon).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) By price sensitivity or by location.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Chosen segment clearly identified.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Justified: size, growth, less competition, fit with product.",
                marks: 3,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) age/occasion/price/location (b) chosen segment+justification",
            commonErrors: ["No segmentation.", "No justification."],
          },
        },
      ],
    },
  ],
};

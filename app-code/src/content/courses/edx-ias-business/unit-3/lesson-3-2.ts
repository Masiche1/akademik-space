import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eiasbiz-u3-lesson-3-2",
  code: "3-2",
  title: "Product, Branding and Packaging",
  goal: "I CAN explain product development, branding and packaging decisions.",
  standards: ["Edexcel IAS Business WBP01 Unit 3 — Marketing"],
  vocabulary: [
    {
      term: "Product life cycle",
      definition: "Stages: introduction, growth, maturity, decline.",
    },
    {
      term: "Branding",
      definition: "Name, logo, design identifying a product/company.",
    },
    {
      term: "Brand loyalty",
      definition: "Customer preference for a specific brand.",
    },
    {
      term: "Packaging",
      definition: "Container protecting and promoting product.",
    },
    {
      term: "Product differentiation",
      definition: "Making product distinct from competitors.",
    },
    {
      term: "Extension strategy",
      definition: "Using existing brand for new products.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u3-product",
      title: "Product Development and Life Cycle",
      skill: "Analyse product life cycle stages and development strategies.",
      lesson: {
        sections: [
          {
            heading: "Product life cycle",
            body: "**Introduction**: launch — high costs, low sales, promotion heavy. **Growth**: sales rise rapidly, competitors enter. **Maturity**: sales peak/stabilise — competition intense, focus on differentiation. **Decline**: sales fall — harvest, divest, or innovate.\n\n**Strategies per stage**: intro=build awareness; growth=expand distribution; maturity=defend share; decline=reduce costs or exit.",
          },
          {
            heading: "Product development",
            body: "**New product development**: idea generation → screening → business analysis → development → testing → launch. **Diversification**: new products for new markets — high risk/reward. **Extension**: new products in existing market. **Modification**: improve existing product.\n\n**Differentiation**: unique features, quality, service, design — reduce price competition.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Smartphone sales peak then slowly decline as market saturates. Stage?",
          solution: "Maturity→decline.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-prod-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the stages of the product life cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction, growth, maturity, decline" },
              { id: "b", text: "Low, medium, high, peak" },
              { id: "c", text: "Research, test, launch, profit" },
              { id: "d", text: "Design, make, sell, stop" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PLC", statement: "Four stages." },
            ],
            steps: [
              { reasoning: "PLC = 4 stages.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Intro→decline",
            commonErrors: ["Wrong stages."],
          },
        },
        {
          id: "eiasbiz-u3-prod-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What strategy fits the maturity stage?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maturity strategy",
                statement: "Defend share.",
              },
            ],
            steps: [
              {
                reasoning: "Defend market share — heavy promotion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Differentiate — improve features, service.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Price competition or innovation to extend life.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Defend share, differentiate, innovate.",
            commonErrors: ["Introduction strategy.", "Decline strategy."],
          },
        },
        {
          id: "eiasbiz-u3-prod-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two benefits of product differentiation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Differentiation",
                statement: "Unique vs competitors.",
              },
            ],
            steps: [
              {
                reasoning: "Reduces price competition — can charge premium.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Builds brand loyalty — customers prefer product.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates entry barriers — harder to copy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: Apple design vs generic phones.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Premium pricing, loyalty, barriers.",
            commonErrors: ["Commodity.", "No benefit."],
          },
        },
        {
          id: "eiasbiz-u3-prod-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company's flagship product is in decline.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two strategies for the decline stage.",
              marks: 4,
            },
            { label: "b", prompt: "Explain one risk of each.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decline strategy",
                statement: "Harvest, innovate, exit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Harvest — reduce costs, keep loyal customers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Innovate — new version, new market.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Harvest risk: market shrinks anyway.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Innovation risk: may fail, costs money.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) harvest+innovate (b) shrink+failure risk",
            commonErrors: ["Ignore decline.", "No risk."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-branding",
      title: "Branding and Packaging",
      skill: "Evaluate branding value and packaging functions.",
      lesson: {
        sections: [
          {
            heading: "Brand value",
            body: "**Brand recognition**: customers identify product instantly. **Brand loyalty**: repeat purchases, less price-sensitive. **Brand equity**: financial value of brand — premium pricing power.\n\n**Brand extensions**: use existing brand for new products — Virgin (airlines→music→finance). Risk: if new product fails, damages main brand. **Brand positioning**: how brand perceived — luxury, value, innovative, reliable.",
          },
          {
            heading: "Packaging functions",
            body: "**Protection**: prevent damage, spoilage, tampering. **Information**: ingredients, instructions, warnings. **Promotion**: attract attention, differentiate on shelf. **Convenience**: easy to open, store, use. **Legal**: meet regulations — ingredients, warnings.\n\n**Evaluation**: cost vs benefit — expensive packaging must add value.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Cereal box with cartoon character attracts children. Packaging function?",
          solution: "Promotion.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-brand-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is brand loyalty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brand advertising" },
              { id: "b", text: "Loyal customers" },
              { id: "c", text: "Customer preference for specific brand" },
              { id: "d", text: "Brand recognition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brand loyalty",
                statement: "Repeat preference.",
              },
            ],
            steps: [
              {
                reasoning: "Loyalty = repeat preference.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Repeat preference",
            commonErrors: ["Recognition confused."],
          },
        },
        {
          id: "eiasbiz-u3-brand-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functions of packaging.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Packaging",
                statement: "Protect, inform, promote.",
              },
            ],
            steps: [
              {
                reasoning: "Protection — prevent damage/spoilage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Information — ingredients, instructions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Promotion — attract attention, differentiate.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Protect, inform, promote, convenience.",
            commonErrors: ["Only one.", "Not function."],
          },
        },
        {
          id: "eiasbiz-u3-brand-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the risk of brand extension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brand extension",
                statement: "Leverage vs dilution.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: leverage existing brand recognition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Risk: new product failure damages main brand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Risk: brand dilution — loses clear identity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: brand in unrelated market may confuse customers.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Leverage vs brand damage/dilution.",
            commonErrors: ["Only benefit.", "No risk."],
          },
        },
        {
          id: "eiasbiz-u3-brand-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A coffee brand considers launching branded mugs and clothing.",
          parts: [
            {
              label: "a",
              prompt: "Give two benefits of brand extension.",
              marks: 4,
            },
            { label: "b", prompt: "Give two risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brand extension",
                statement: "Synergy vs dilution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Leverage brand recognition — instant awareness.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) New revenue streams from loyal customers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Product failure damages coffee brand reputation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Dilution — brand loses focus/identity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) awareness+revenue (b) damage+dilution",
            commonErrors: ["Only benefits.", "No risks."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-international",
      title: "International Marketing",
      skill: "Explain standardisation vs adaptation in global markets.",
      lesson: {
        sections: [
          {
            heading: "Global marketing strategies",
            body: "**Standardisation**: same product/promotion worldwide — economies of scale, consistent brand. Examples: Coca-Cola, McDonald's core products. **Adaptation**: modify for local markets — language, culture, regulations, preferences.\n\n**Glocalisation**: global brand, local adaptation — think global, act local. McDonald's menus vary by country.",
          },
          {
            heading: "Factors requiring adaptation",
            body: "**Language**: translate names, slogans — avoid embarrassing translations. **Culture**: colours, symbols, imagery differ — red = luck in China, danger in West. **Legal**: advertising regulations, product standards. **Consumer preferences**: tastes, sizes, habits differ.\n\n**Evaluation**: standardisation = cheaper, consistent; adaptation = better fit, higher costs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Fast food chain adapts menu for vegetarian India. Strategy?",
          solution: "Adaptation/glocalisation.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-intl-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is marketing standardisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same product/promotion worldwide" },
              { id: "b", text: "Local advertising only" },
              { id: "c", text: "Changing product per country" },
              { id: "d", text: "Different prices" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standardisation",
                statement: "Same worldwide.",
              },
            ],
            steps: [
              {
                reasoning: "Standardisation = uniform global.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Same worldwide",
            commonErrors: ["Adaptation confused."],
          },
        },
        {
          id: "eiasbiz-u3-intl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons businesses adapt products for local markets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adaptation",
                statement: "Culture, language, law.",
              },
            ],
            steps: [
              {
                reasoning: "Language — slogans/names must translate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Culture — colours, imagery, preferences differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Legal — regulations differ by country.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Language, culture, legal requirements.",
            commonErrors: ["Only one.", "Not reason."],
          },
        },
        {
          id: "eiasbiz-u3-intl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the advantages and disadvantages of standardisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Standardisation",
                statement: "Scale vs fit.",
              },
            ],
            steps: [
              {
                reasoning: "Advantages: economies of scale, consistent brand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Advantages: simpler management, global recognition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: may not fit local preferences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Disadvantages: ignores cultural/legal differences.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Scale/consistency vs local fit.",
            commonErrors: ["Only benefits.", "Only drawbacks."],
          },
        },
        {
          id: "eiasbiz-u3-intl-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A UK food company wants to sell in Japan.",
          parts: [
            { label: "a", prompt: "Suggest two adaptations needed.", marks: 4 },
            { label: "b", prompt: "Explain glocalisation strategy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glocalisation",
                statement: "Global brand, local fit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Language — Japanese packaging/marketing.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Taste — adjust flavours for Japanese palate.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Keep global brand identity but adapt product details.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Think global, act local — consistent brand, local product.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) language+taste (b) global brand+local product",
            commonErrors: ["Pure standardisation.", "No glocalisation."],
          },
        },
      ],
    },
  ],
};

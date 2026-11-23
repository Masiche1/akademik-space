module.exports = [
  {
    file: "lesson-11-1.ts", exportName: "lesson111",
    lesson: {
      id: "ebz11-u11-lesson-11-1", code: "11-1",
      title: "Pricing Strategies",
      goal: "I CAN compare cost-based, competition-based and demand-based pricing methods and evaluate which suits a given business.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Marketing",
        "4BS0: pricing in the marketing mix",
      ],
      vocabulary: [
        { term: "Cost-plus pricing", definition: "Setting price = total cost per unit plus a percentage markup." },
        { term: "Penetration pricing", definition: "Launching at a low price to gain market share quickly." },
        { term: "Skimming", definition: "Launching at a high price to recover costs from early adopters." },
        { term: "Promotional pricing", definition: "Temporary price cuts to stimulate short-term sales." },
        { term: "Competition-based pricing", definition: "Setting price by reference to what rivals charge." },
        { term: "Psychological pricing", definition: "Pricing just below a round number, e.g. £9.99, to seem cheaper." },
      ],
      concepts: [
        {
          id: "ebz11-u11-costpricing",
          title: "Cost-Based and Competition-Based Pricing",
          skill: "Calculate cost-plus prices and explain how competition-based pricing works.",
          sections: [
            {
              heading: "Cost-plus pricing",
              body: "**Cost-plus pricing** sets price by adding a percentage markup to cost: **price = cost per unit × (1 + markup%)** or **price = cost + markup amount**. Simple and guarantees each sale covers costs plus profit — but ignores what customers are willing to pay and what rivals charge.\n\nExample: unit cost £8, 25% markup → price = £8 × 1.25 = £10.",
            },
            {
              heading: "Competition-based pricing",
              body: "**Competition-based pricing** sets price by looking at rivals — matching their price, slightly undercutting to win share, or pricing above to signal quality. Works well in markets with many similar products (e.g. petrol, groceries) where customers compare prices easily.\n\n**Psychological pricing** (£9.99 instead of £10) is often combined with these methods to make prices seem lower. Risk: a price war can push all firms' profits down.",
            },
          ],
          keyFormulas: [
            { name: "Cost-plus price", statement: "Unit cost × (1 + markup%) or cost + markup" },
          ],
          workedExample: {
            problem: "A mug costs £4 to make. The business wants a 50% markup. What price should it charge?",
            solution: "Price = £4 × (1 + 0.50) = £4 × 1.5 = £6.",
          },
          questions: [
            {
              id: "ebz11-u11-costpricing-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is cost-plus pricing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Pricing below rivals to gain share" },
                  { id: "b", text: "Setting price = cost plus a percentage markup" },
                  { id: "c", text: "Charging the highest price the market will bear" },
                  { id: "d", text: "Discounting temporarily to boost sales" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Cost-plus pricing", statement: "Cost per unit plus a percentage markup." },
                ],
                steps: [
                  { reasoning: "Cost-plus = cost + markup.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Cost plus markup",
                commonErrors: ["Confusing with penetration pricing."],
              },
            },
            {
              id: "ebz11-u11-costpricing-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Unit cost is £12 and the markup is 25%. Calculate the selling price.",
              response: {
                type: "numeric",
                parts: [{ label: "Price (£)", answer: 15 }],
              },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cost-plus price", statement: "£12 × 1.25 = £15." },
                ],
                steps: [
                  { reasoning: "Markup = 25% × £12 = £3; price = £12 + £3 = £15.", marks: 3, markCode: "AO1" },
                ],
                finalAnswer: "£15",
                commonErrors: ["Added 25 to the price instead of 25%."],
              },
            },
            {
              id: "ebz11-u11-costpricing-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give one advantage and one disadvantage of cost-plus pricing.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Cost-plus evaluation", statement: "Simple and covers costs; but ignores demand and rivals." },
                ],
                steps: [
                  { reasoning: "Advantage: simple, guarantees costs covered plus profit margin.", marks: 2, markCode: "AO2" },
                  { reasoning: "Disadvantage: ignores customer willingness to pay and competitor prices — may over/underprice.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Simple/covers costs; but ignores demand and competition.",
                commonErrors: ["Only one side evaluated."],
              },
            },
            {
              id: "ebz11-u11-costpricing-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A bakery makes cakes at £3 each and wants a 60% markup. Rivals sell similar cakes at £4.50.",
              parts: [
                { label: "a", prompt: "Calculate the cost-plus price.", marks: 3 },
                { label: "b", prompt: "Explain why the bakery might not use this price.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Price vs competition", statement: "Cost-plus price £4.80 is above rivals' £4.50 — may lose sales." },
                ],
                steps: [
                  { reasoning: "(a) £3 × 1.60 = £4.80.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) £4.80 > rivals' £4.50 → customers may switch; need competition-based pricing or differentiation.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "£4.80 cost-plus, but rivals charge £4.50 — risky to charge more without differentiation.",
                commonErrors: ["Calculating markup wrong; not linking to rivals in (b)."],
              },
            },
            {
              id: "ebz11-u11-costpricing-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Compare cost-plus pricing and competition-based pricing for a supermarket selling bread.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Pricing methods", statement: "Cost-plus ignores rivals; competition-based tracks them." },
                ],
                steps: [
                  { reasoning: "Cost-plus: simple, ensures margin, but bread is a price-sensitive commodity — cost-plus may overprice.", marks: 3, markCode: "AO2" },
                  { reasoning: "Competition-based: matches/undercuts rival prices — essential in a crowded market where customers compare prices.", marks: 3, markCode: "AO2" },
                ],
                finalAnswer: "Bread needs competition-based pricing; cost-plus risks losing sales.",
                commonErrors: ["No comparison — describing only one method."],
              },
            },
            {
              id: "ebz11-u11-costpricing-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A furniture maker has unit costs of £200 and currently prices at cost-plus 40%. A new rival enters at £260.",
              parts: [
                { label: "a", prompt: "Calculate the current price.", marks: 3 },
                { label: "b", prompt: "Explain the effect of the new rival and suggest a pricing response.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the maker should switch fully to competition-based pricing.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Pricing under competition", statement: "Cost-plus sets £280 vs rival £260; response depends on differentiation and costs." },
                ],
                steps: [
                  { reasoning: "(a) £200 × 1.40 = £280.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Rival at £260 undercuts; maker may match, differentiate (quality/design), or hold price if brand strong.", marks: 4, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Pure competition pricing risks margin erosion; hybrid (track rivals + cost floor) usually best — judgement.", marks: 3, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "£280; respond by matching/differentiating; pure competition pricing not always best.",
                commonErrors: ["No judgement in (c).", "Wrong percentage calculation."],
              },
            },
          ],
        },
        {
          id: "ebz11-u11-demandpricing",
          title: "Demand-Based Pricing",
          skill: "Distinguish penetration, skimming and promotional pricing and judge when each is appropriate.",
          sections: [
            {
              heading: "Penetration and skimming",
              body: "**Penetration pricing**: launch at a LOW price to win market share fast, then raise prices once established. Best when the market is price-sensitive and economies of scale reward high volume. Risk: early losses; customers may resist later price rises.\n\n**Skimming**: launch at a HIGH price to recover development costs quickly from customers willing to pay (early adopters), then gradually reduce. Best for innovative, unique products with little competition. Risk: attracts competitors if margins look attractive.",
            },
            {
              heading: "Promotional pricing",
              body: "**Promotional pricing** = temporary price reductions — sales, multi-buys, seasonal discounts — to stimulate short-term demand. Useful for clearing stock, attracting new customers and responding to rivals' offers. Risks: customers may wait for discounts (training them to buy only on promotion), reduced profit margins, and the perception of a 'normal' high price.\n\n**Choosing between them**: penetration for mass markets and price-sensitive products; skimming for innovative premium products; promotional pricing as a tactic within either strategy.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A new smartphone app has no rivals. Should the developer use skimming or penetration pricing? Justify.",
            solution: "Skimming — no competition means early adopters will pay a high price, recovering development costs before rivals enter and prices fall.",
          },
          questions: [
            {
              id: "ebz11-u11-demandpricing-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is penetration pricing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Launching at a high price then reducing" },
                  { id: "b", text: "Launching at a low price to gain market share" },
                  { id: "c", text: "Setting price equal to rivals" },
                  { id: "d", text: "Temporary discount for a sale" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Penetration pricing", statement: "Low launch price to win share, raised later." },
                ],
                steps: [
                  { reasoning: "Penetration = low entry price for market share.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Low price to gain share",
                commonErrors: ["Confusing with skimming."],
              },
            },
            {
              id: "ebz11-u11-demandpricing-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "What is skimming pricing and when is it most suitable?",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Skimming", statement: "High launch price for innovative products with little competition." },
                ],
                steps: [
                  { reasoning: "Definition: high launch price to recover costs from early adopters.", marks: 2, markCode: "AO1" },
                  { reasoning: "Suitable for innovative/unique products with little competition.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "High launch price; best for innovative products.",
                commonErrors: ["Describing penetration instead."],
              },
            },
            {
              id: "ebz11-u11-demandpricing-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give one advantage and one disadvantage of penetration pricing.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Penetration evaluation", statement: "Gains share fast but early profits are low and price rises may be resisted." },
                ],
                steps: [
                  { reasoning: "Advantage: wins market share quickly; economies of scale as volume grows.", marks: 2, markCode: "AO2" },
                  { reasoning: "Disadvantage: low early margins; customers may resist later price increases.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Fast share gain; but low margins and resistance to later rises.",
                commonErrors: ["One side only."],
              },
            },
            {
              id: "ebz11-u11-demandpricing-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A new energy drink competes with five established brands. Recommend a launch pricing strategy.",
              parts: [
                { label: "a", prompt: "Recommend either penetration or skimming pricing.", marks: 3 },
                { label: "b", prompt: "Justify your recommendation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Launch pricing choice", statement: "Crowded market → penetration; unique innovation → skimming." },
                ],
                steps: [
                  { reasoning: "(a) Penetration pricing — crowded market with price-sensitive consumers.", marks: 3, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Low price wins share quickly; skimming would fail since rivals offer alternatives.", marks: 3, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Penetration — must win share in a crowded market.",
                commonErrors: ["Choosing skimming without justification."],
              },
            },
            {
              id: "ebz11-u11-demandpricing-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain three drawbacks of relying heavily on promotional pricing.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Promotional pricing risks", statement: "Margin erosion, trained bargain-hunting, brand devaluation." },
                ],
                steps: [
                  { reasoning: "Lower margins on every discounted sale reduce overall profit.", marks: 2, markCode: "AO2" },
                  { reasoning: "Customers learn to wait for sales — normal-price sales fall.", marks: 2, markCode: "AO2" },
                  { reasoning: "Frequent discounts can damage the brand's premium image.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Margin loss, bargain-hunting customers, brand damage.",
                commonErrors: ["Only one drawback."],
              },
            },
            {
              id: "ebz11-u11-demandpricing-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A tech firm launches a revolutionary headset with no direct competitors, then plans its pricing over three years.",
              parts: [
                { label: "a", prompt: "Define skimming and penetration pricing.", marks: 4 },
                { label: "b", prompt: "Recommend a launch price strategy and justify it.", marks: 4 },
                { label: "c", prompt: "Explain how the firm should change prices as competitors enter.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Product life and pricing", statement: "Skim early while unique; shift to competition-based as rivals enter." },
                ],
                steps: [
                  { reasoning: "(a) Skimming = high launch price, lowered later; penetration = low launch price, raised later.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Skimming — no competitors, early adopters pay premium, recover R&D costs.", marks: 4, markCode: "AO2", part: "b" },
                  { reasoning: "(c) As rivals enter, reduce prices toward competition-based levels to defend share.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Skim at launch (unique), then move to competitive pricing.",
                commonErrors: ["Static pricing plan — not adjusting to competition."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u11-pricing-notes", title: "Pricing strategies — notes",
      summary: "Cost-plus covers costs; competition-based tracks rivals; penetration wins share with low prices; skimming maximises early profit on innovations; promotional pricing is temporary.",
      sections: [
        { heading: "Key idea", body: "Match the method to the market: cost-plus for simple coverage, competition-based for crowded markets, penetration for share, skimming for innovations." },
        { heading: "Formula", body: "Cost-plus price = unit cost × (1 + markup%)." },
        { heading: "Risk", body: "Promotional pricing trains customers to wait for discounts and cuts margins." },
      ],
    },
  },
  {
    file: "lesson-11-2.ts", exportName: "lesson112",
    lesson: {
      id: "ebz11-u11-lesson-11-2", code: "11-2",
      title: "Product Development and the Product Life Cycle",
      goal: "I CAN describe new product development and the stages of the product life cycle, and link strategies to each stage.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Marketing",
        "4BS0: product in the marketing mix",
      ],
      vocabulary: [
        { term: "New product development", definition: "The process of creating and launching a new product." },
        { term: "Product life cycle", definition: "Stages a product passes through: introduction, growth, maturity, decline." },
        { term: "Introduction stage", definition: "Launch phase — low sales, high costs and promotional spending." },
        { term: "Maturity stage", definition: "Peak sales — market saturated, competition intense." },
        { term: "Decline stage", definition: "Falling sales as demand shifts or better products appear." },
        { term: "Product differentiation", definition: "Making a product distinct from rivals through features, branding or quality." },
      ],
      concepts: [
        {
          id: "ebz11-u11-npd",
          title: "New Product Development",
          skill: "Explain the stages of developing a new product and the risks involved.",
          sections: [
            {
              heading: "Stages of development",
              body: "1. **Idea generation** — suggestions from staff, customers, rivals and research. 2. **Research and development (R&D)** — feasibility studies, design and prototypes. 3. **Testing** — market tests and trials to check demand and flaws. 4. **Launch** — production, distribution, promotion and pricing.\n\nDevelopment keeps businesses competitive — markets change and products eventually decline. Many firms invest heavily in R&D to stay ahead.",
            },
            {
              heading: "Risks and costs",
              body: "Most new products fail — estimates suggest the majority never become profitable. Costs include R&D spending, testing, launch marketing and production setup, all before revenue is certain. **Risk reduction**: market research, test marketing, phased launches. **Rewards**: first-mover advantage, higher margins on new products, extension of the product range.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A snack company wants a new flavour. Outline the development steps in order.",
            solution: "Idea (customer feedback) → R&D recipe and cost checks → taste-test with a sample → launch with promotion and distribution.",
          },
          questions: [
            {
              id: "ebz11-u11-npd-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which is the correct order of new product development?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Launch → testing → R&D → idea" },
                  { id: "b", text: "Idea → R&D → testing → launch" },
                  { id: "c", text: "R&D → launch → idea → testing" },
                  { id: "d", text: "Testing → idea → launch → R&D" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "convention", name: "NPD sequence", statement: "Idea → R&D → testing → launch." },
                ],
                steps: [
                  { reasoning: "Development runs idea → R&D → testing → launch.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Idea → R&D → testing → launch",
                commonErrors: ["Putting launch before testing."],
              },
            },
            {
              id: "ebz11-u11-npd-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give two reasons why businesses develop new products.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "NPD motives", statement: "Stay competitive, grow sales, extend product range." },
                ],
                steps: [
                  { reasoning: "Keep pace with changing customer tastes and rival products.", marks: 2, markCode: "AO2" },
                  { reasoning: "Grow sales/profit and reduce dependence on declining products.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Stay competitive + grow sales.",
                commonErrors: ["Repeating the definition rather than reasons."],
              },
            },
            {
              id: "ebz11-u11-npd-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two risks a business faces when developing a new product.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "NPD risks", statement: "High failure rate and heavy upfront costs." },
                ],
                steps: [
                  { reasoning: "Most new products fail — demand may be lower than expected.", marks: 2, markCode: "AO2" },
                  { reasoning: "R&D, testing and launch costs are incurred before any revenue is certain.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Failure risk + heavy upfront costs.",
                commonErrors: ["Listing benefits as risks."],
              },
            },
            {
              id: "ebz11-u11-npd-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A dairy firm is developing a plant-based milk product.",
              parts: [
                { label: "a", prompt: "Describe two stages of development it should complete before launch.", marks: 4 },
                { label: "b", prompt: "Explain one way it can reduce the risk of failure.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "NPD stages and risk reduction", statement: "R&D and testing before launch; market research reduces failure risk." },
                ],
                steps: [
                  { reasoning: "(a) R&D: recipe formulation, cost and shelf-life checks.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Testing: taste trials and test marketing to check demand.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Market research / test marketing with real customers before full launch.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "R&D + testing; reduce risk via market research/test marketing.",
                commonErrors: ["Skipping testing stage."],
              },
            },
            {
              id: "ebz11-u11-npd-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Evaluate whether a small bakery should invest in developing a new product range.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "NPD decision", statement: "Innovation drives growth but is costly and risky for small firms." },
                ],
                steps: [
                  { reasoning: "Pros: new products can grow sales, meet changing tastes, and reduce reliance on declining lines.", marks: 3, markCode: "AO2" },
                  { reasoning: "Cons: limited funds make failures damaging; a small test range is lower risk than full-scale development.", marks: 3, markCode: "AO3" },
                ],
                finalAnswer: "Worth it if demand exists — start small to limit risk.",
                commonErrors: ["One-sided answer."],
              },
            },
            {
              id: "ebz11-u11-npd-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A phone maker spends £2m on R&D for a folding phone, then test-markets it in three cities before a national launch.",
              parts: [
                { label: "a", prompt: "Identify the development stages shown and their purpose.", marks: 4 },
                { label: "b", prompt: "Explain why test marketing reduces risk.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the £2m R&D spend was justified if the launch succeeds.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "NPD investment judgement", statement: "R&D + test marketing reduce risk; payoff depends on launch success." },
                ],
                steps: [
                  { reasoning: "(a) R&D = design/development; test marketing = trial with real customers before full launch.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Reveals demand, flaws and pricing issues cheaply before full-scale investment.", marks: 4, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Justified if profits from sales exceed £2m+launch costs — depends on market size; judgement needed.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "R&D + testing cut risk; R&D justified if launch profits cover costs.",
                commonErrors: ["No cost-benefit judgement in (c)."],
              },
            },
          ],
        },
        {
          id: "ebz11-u11-plc",
          title: "The Product Life Cycle",
          skill: "Identify the stages of the product life cycle and recommend strategies for each stage.",
          sections: [
            {
              heading: "The four stages",
              body: "**Introduction**: product launched — sales low, costs high (development, promotion), little competition; profits negative or small. **Growth**: sales rise rapidly as awareness spreads; profits begin; competitors start entering. **Maturity**: sales peak and level off; market saturated; competition intense; profits may still be high but growth slows. **Decline**: sales fall as tastes change or better products appear; firms harvest profits or withdraw.",
            },
            {
              heading: "Strategies per stage",
              body: "**Introduction**: high price (skimming) or low price (penetration); heavy promotion to build awareness. **Growth**: widen distribution, improve product, defend share against entrants. **Maturity**: differentiate (brand, features, service), cut costs, find new markets — longest and most competitive stage. **Decline**: reduce spending, harvest remaining profits, or discontinue. Not all products follow the curve exactly — some decline slowly, some revive.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A console game's sales have peaked and rival games are taking share. Which life-cycle stage is it in and what should the maker do?",
            solution: "Maturity — differentiate with updates/add-ons and cut costs to defend share; plan a successor product before decline.",
          },
          questions: [
            {
              id: "ebz11-u11-plc-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What are the four stages of the product life cycle in order?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Maturity → growth → introduction → decline" },
                  { id: "b", text: "Introduction → growth → maturity → decline" },
                  { id: "c", text: "Growth → introduction → decline → maturity" },
                  { id: "d", text: "Introduction → maturity → growth → decline" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "convention", name: "PLC stages", statement: "Introduction → growth → maturity → decline." },
                ],
                steps: [
                  { reasoning: "Correct sequence is intro, growth, maturity, decline.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Introduction → growth → maturity → decline",
                commonErrors: ["Wrong order of maturity and growth."],
              },
            },
            {
              id: "ebz11-u11-plc-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Describe what happens to sales and profits during the introduction stage.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Introduction stage", statement: "Low sales, high costs, heavy promotion; profits low or negative." },
                ],
                steps: [
                  { reasoning: "Sales are low as customers are still learning about the product.", marks: 2, markCode: "AO1" },
                  { reasoning: "Costs high (R&D, promotion); profits low or negative.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Low sales, high costs, weak profits.",
                commonErrors: ["Describing maturity instead."],
              },
            },
            {
              id: "ebz11-u11-plc-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two strategies a firm might use during the maturity stage.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Maturity strategies", statement: "Differentiate, cut costs, find new markets." },
                ],
                steps: [
                  { reasoning: "Differentiate via branding, features, quality or service to defend share.", marks: 2, markCode: "AO2" },
                  { reasoning: "Reduce costs for efficiency and/or enter new markets or segments.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Differentiate and cut costs / find new markets.",
                commonErrors: ["Strategies belonging to other stages."],
              },
            },
            {
              id: "ebz11-u11-plc-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Sales of a firm's product are rising fast and profits are growing, but two competitors have just launched similar products.",
              parts: [
                { label: "a", prompt: "Identify the likely life-cycle stage.", marks: 2 },
                { label: "b", prompt: "Suggest two strategies to respond to the new competitors.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Growth-stage response", statement: "Rising sales + new entrants = growth stage; defend share." },
                ],
                steps: [
                  { reasoning: "(a) Growth stage — sales rising fast, profits growing.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Improve/differentiate the product to stay ahead of rivals.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Increase promotion or widen distribution to lock in market share.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "Growth stage; differentiate and promote to defend share.",
                commonErrors: ["Identifying wrong stage."],
              },
            },
            {
              id: "ebz11-u11-plc-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain why businesses need to plan for the decline stage before it arrives.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Decline planning", statement: "Early planning allows harvest, replacement or exit before losses." },
                ],
                steps: [
                  { reasoning: "Decline is inevitable for most products — waiting means sudden losses.", marks: 3, markCode: "AO2" },
                  { reasoning: "Early planning allows harvesting profits, developing successors, or orderly withdrawal.", marks: 3, markCode: "AO3" },
                ],
                finalAnswer: "Plan early to harvest profits, launch successors or exit cleanly.",
                commonErrors: ["No mention of planning ahead."],
              },
            },
            {
              id: "ebz11-u11-plc-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A firm's smartphone has passed maturity and sales are now falling as newer models arrive.",
              parts: [
                { label: "a", prompt: "Define the product life cycle and name the current stage.", marks: 4 },
                { label: "b", prompt: "Suggest two strategies for the declining product.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the firm should discontinue it immediately.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Decline-stage decision", statement: "Harvest or withdraw — but immediate discontinuation may waste remaining profit." },
                ],
                steps: [
                  { reasoning: "(a) PLC = stages a product passes through; current stage = decline.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Harvest: cut costs, reduce promotion, sell at lower price to loyal customers.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Redirect resources to the successor model or niche markets.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Not necessarily — remaining sales may still profit; judge by margin, not just falling sales.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Decline stage; harvest or pivot; immediate discontinuation not always best.",
                commonErrors: ["Automatic discontinuation answer without judgement."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u11-plc-notes", title: "Product development and life cycle — notes",
      summary: "NPD runs idea → R&D → testing → launch and most products fail. The life cycle runs introduction → growth → maturity → decline, each needing different strategies.",
      sections: [
        { heading: "Key idea", body: "Develop products to stay competitive, but expect most launches to fail — test first." },
        { heading: "Life cycle", body: "Introduction (low sales, high cost) → growth (rising sales) → maturity (peak, intense competition) → decline (falling sales)." },
        { heading: "Strategy link", body: "Skim/promote at launch; defend share in growth; differentiate in maturity; harvest or exit in decline." },
      ],
    },
  },
  {
    file: "lesson-11-3.ts", exportName: "lesson113",
    lesson: {
      id: "ebz11-u11-lesson-11-3", code: "11-3",
      title: "Distribution and Customer Service",
      goal: "I CAN explain channels of distribution and evaluate how customer service builds loyalty and competitive advantage.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Marketing",
        "4BS0: place and customer service in the marketing mix",
      ],
      vocabulary: [
        { term: "Channel of distribution", definition: "The route a product takes from producer to consumer." },
        { term: "Wholesaler", definition: "Intermediary that buys in bulk from producers and sells smaller quantities to retailers." },
        { term: "Retailer", definition: "Business that sells directly to final consumers." },
        { term: "Direct distribution", definition: "Producer sells straight to the consumer with no intermediaries." },
        { term: "After-sales service", definition: "Support given after purchase — repairs, returns, warranties." },
        { term: "Customer loyalty", definition: "Repeat purchasing driven by satisfaction with product and service." },
      ],
      concepts: [
        {
          id: "ebz11-u11-channels",
          title: "Channels of Distribution",
          skill: "Compare direct and indirect distribution and justify channel choices.",
          sections: [
            {
              heading: "Direct vs indirect",
              body: "**Direct distribution**: producer → consumer (own shops, website, mail order). Keeps control, keeps all profit margin, gives direct customer contact — but requires capital for shops/storage and limits reach.\n\n**Indirect distribution**: producer → wholesaler → retailer → consumer. Widens reach massively and shares storage/selling costs — but adds margins (higher consumer prices), reduces control over presentation and service, and intermediaries may push rival brands.",
            },
            {
              heading: "Choosing a channel",
              body: "Factors: **product type** (perishable goods need short channels; bulky goods use wholesalers), **market** (geography, customer habits), **cost** (margins vs own logistics costs), **control needed** (brand image may require direct sales), and **business size** (small firms often rely on retailers). Many businesses use a **mix** — e.g. own website plus stockists.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A small bakery sells cakes. Should it sell only through its own shop or also supply local cafés? Compare channels.",
            solution: "Own shop = direct, higher margin, control; supplying cafés = indirect, wider reach but lower margin per cake.",
          },
          questions: [
            {
              id: "ebz11-u11-channels-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a channel of distribution?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The way a product is advertised" },
                  { id: "b", text: "The route a product takes from producer to consumer" },
                  { id: "c", text: "The price charged to retailers" },
                  { id: "d", text: "A type of customer service" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Channel of distribution", statement: "Route from producer to consumer." },
                ],
                steps: [
                  { reasoning: "Channel = the path product travels to reach buyers.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Route from producer to consumer",
                commonErrors: ["Confusing with promotion."],
              },
            },
            {
              id: "ebz11-u11-channels-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give one advantage of direct distribution over using intermediaries.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Direct distribution", statement: "Keeps margin and control; needs capital and limits reach." },
                ],
                steps: [
                  { reasoning: "Producer keeps full margin — no wholesaler/retailer cut.", marks: 2, markCode: "AO2" },
                  { reasoning: "Full control over presentation, pricing and customer contact.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Higher margin and full control.",
                commonErrors: ["Listing a disadvantage."],
              },
            },
            {
              id: "ebz11-u11-channels-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two disadvantages of selling through intermediaries (wholesalers and retailers).",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Indirect distribution costs", statement: "Margins, reduced control, rival brands at point of sale." },
                ],
                steps: [
                  { reasoning: "Each intermediary adds a margin — consumer price higher or producer margin squeezed.", marks: 2, markCode: "AO2" },
                  { reasoning: "Less control over display, service and stock; retailers may push rival products.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Higher prices/margins lost + reduced control.",
                commonErrors: ["Repeating advantages."],
              },
            },
            {
              id: "ebz11-u11-channels-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A handmade jewellery maker currently sells only at craft fairs.",
              parts: [
                { label: "a", prompt: "Suggest two additional channels of distribution.", marks: 4 },
                { label: "b", prompt: "Explain one advantage of each suggestion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Channel expansion", statement: "Online store and stockists widen reach while fairs remain." },
                ],
                steps: [
                  { reasoning: "(a) Online store/website — reach national/global customers.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Supply local boutiques/stockists — intermediary reach.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Online: low cost, 24/7 sales; stockists: wider local reach.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Online store + stockists for wider reach.",
                commonErrors: ["Channels without advantage explanation."],
              },
            },
            {
              id: "ebz11-u11-channels-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Compare direct and indirect distribution for a perishable food producer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Channel choice by product", statement: "Perishables need short, fast channels — direct or local." },
                ],
                steps: [
                  { reasoning: "Direct/local: short chain keeps product fresh, full margin, control — but limited reach and capital needed.", marks: 3, markCode: "AO2" },
                  { reasoning: "Indirect via distant wholesalers risks delays and spoilage — long chains unsuitable for perishables.", marks: 3, markCode: "AO3" },
                ],
                finalAnswer: "Perishables suit short direct channels; long indirect chains risk spoilage.",
                commonErrors: ["Generic comparison ignoring perishability."],
              },
            },
            {
              id: "ebz11-u11-channels-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A smartphone maker sells through its own website and 500 retail stores worldwide.",
              parts: [
                { label: "a", prompt: "Identify the channel used by the website and by the stores.", marks: 4 },
                { label: "b", prompt: "Explain one advantage and one disadvantage of each channel.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the maker should keep both channels.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Multi-channel strategy", statement: "Direct site = margin/control; retail stores = reach/try-before-buy." },
                ],
                steps: [
                  { reasoning: "(a) Website = direct distribution; stores = indirect via retailers.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Direct: keeps margin and data; stores: huge reach and customers can handle the product.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Direct: less chance to try; stores: margins shared, less control.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Keep both — they serve different needs; judgement on balance of margin vs reach.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Direct + indirect complement each other; keeping both is justified.",
                commonErrors: ["No evaluation in (c)."],
              },
            },
          ],
        },
        {
          id: "ebz11-u11-customerservice",
          title: "Customer Service and Loyalty",
          skill: "Explain the role of customer service at each stage of purchase and evaluate its impact on loyalty.",
          sections: [
            {
              heading: "Stages of service",
              body: "**Pre-sale**: accurate information, helpful staff, easy browsing. **At sale**: efficient checkout, friendly service, correct pricing. **After-sales**: returns and refunds, repairs and warranties, complaints handling, follow-up.\n\nGood service at every stage builds **customer satisfaction**, which drives **repeat purchases**, positive word-of-mouth and **customer loyalty** — cheaper to keep customers than to win new ones.",
            },
            {
              heading: "Service as competitive advantage",
              body: "When products are similar, service differentiates — e.g. same phone, better returns policy wins the sale. Methods: training staff, clear returns policies, loyalty schemes, complaint resolution, online support. **Costs vs benefits**: service costs money but loyal customers spend more over time and recommend the business. Poor service loses customers quickly — one bad experience can outweigh many good ones via reviews and social media.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Two cafés sell identical coffee at the same price. Café A has slow service; Café B remembers regulars' orders. Which wins repeat customers and why?",
            solution: "Café B — better service builds satisfaction and loyalty; customers return despite identical product and price.",
          },
          questions: [
            {
              id: "ebz11-u11-customerservice-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is after-sales service?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Advertising before purchase" },
                  { id: "b", text: "Support given after the customer buys" },
                  { id: "c", text: "Discounts at checkout" },
                  { id: "d", text: "Training new staff" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "After-sales service", statement: "Post-purchase support — returns, repairs, warranties." },
                ],
                steps: [
                  { reasoning: "After-sales = support after the purchase.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Support after purchase",
                commonErrors: ["Confusing with pre-sale."],
              },
            },
            {
              id: "ebz11-u11-customerservice-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give two examples of after-sales service.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "After-sales examples", statement: "Returns, repairs, warranties, complaint handling." },
                ],
                steps: [
                  { reasoning: "Returns/refunds policy for faulty or unwanted goods.", marks: 2, markCode: "AO1" },
                  { reasoning: "Repairs, warranties or helplines after purchase.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Returns policy + repairs/warranty.",
                commonErrors: ["Listing pre-sale activities."],
              },
            },
            {
              id: "ebz11-u11-customerservice-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two ways good customer service benefits a business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Service benefits", statement: "Loyalty, repeat sales, positive reputation." },
                ],
                steps: [
                  { reasoning: "Satisfied customers return and spend more — loyalty is cheaper than acquiring new customers.", marks: 2, markCode: "AO2" },
                  { reasoning: "Positive word-of-mouth and reviews attract new customers; service differentiates similar products.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Repeat sales/loyalty + reputation and differentiation.",
                commonErrors: ["Only one benefit."],
              },
            },
            {
              id: "ebz11-u11-customerservice-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "An online clothing shop has rising returns. Suggest three service improvements.",
              parts: [
                { label: "a", prompt: "Suggest two improvements to reduce returns.", marks: 4 },
                { label: "b", prompt: "Suggest one improvement to handle returns that do occur.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Service improvement", statement: "Better information/fit reduces returns; smooth process handles them." },
                ],
                steps: [
                  { reasoning: "(a) Detailed size guides and customer reviews/photos to set expectations.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Accurate product descriptions and fabric information.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Easy, fast refunds/exchanges to keep customers loyal despite returns.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Better product info to prevent returns; easy refunds to retain customers.",
                commonErrors: ["Only handling returns, not preventing them."],
              },
            },
            {
              id: "ebz11-u11-customerservice-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A restaurant wants to improve customer service. Evaluate investing in staff training versus a loyalty app.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Service investment", statement: "Training improves the core experience; loyalty app rewards repeat visits." },
                ],
                steps: [
                  { reasoning: "Staff training directly improves service quality — the core driver of satisfaction; higher upfront cost.", marks: 3, markCode: "AO2" },
                  { reasoning: "Loyalty app encourages repeat visits cheaply but can't fix poor service — best combined with training.", marks: 3, markCode: "AO3" },
                ],
                finalAnswer: "Training is fundamental; loyalty app complements it — ideally both.",
                commonErrors: ["One-sided comparison."],
              },
            },
            {
              id: "ebz11-u11-customerservice-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Two rival phone shops sell identical phones at identical prices. Shop A offers free returns and a loyalty discount; Shop B offers neither but has slightly faster checkout.",
              parts: [
                { label: "a", prompt: "Define customer service and customer loyalty.", marks: 4 },
                { label: "b", prompt: "Explain how Shop A's policies could build loyalty.", marks: 4 },
                { label: "c", prompt: "Evaluate which shop is likely to win more repeat customers.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Service and loyalty", statement: "Service policies reduce risk and reward repeats — key when products are identical." },
                ],
                steps: [
                  { reasoning: "(a) Customer service = support before/during/after sale; loyalty = repeat buying from satisfaction.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Free returns reduce purchase risk; loyalty discount rewards repeat business — both raise satisfaction.", marks: 4, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Shop A likely wins — risk reduction and rewards outweigh slightly slower checkout; judgement on balance.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Shop A's service policies build loyalty; likely wins repeat customers.",
                commonErrors: ["Ignoring the identical-product context in (c)."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u11-service-notes", title: "Distribution and customer service — notes",
      summary: "Channels move products producer→consumer: direct keeps margin/control, indirect adds reach but costs margin. Great service builds loyalty — cheaper than winning new customers.",
      sections: [
        { heading: "Key idea", body: "Direct = own shops/websites (margin, control); indirect = wholesalers/retailers (reach, shared costs)." },
        { heading: "Channel choice", body: "Match channel to product, market, cost and control needs; many firms use a mix." },
        { heading: "Service", body: "Pre-sale, at-sale and after-sales service drive satisfaction → loyalty → repeat sales." },
      ],
    },
  },
];

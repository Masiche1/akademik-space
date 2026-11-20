import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "bus-u2-lesson-2-1",
  code: "2-1",
  title: "The marketing mix (4Ps)",
  goal: "I CAN explain the four elements of the marketing mix — product, price, place and promotion — and describe pricing strategies.",
  standards: ["Paper 1", "Paper 2", "Topic 2.1"],
  vocabulary: [
    {
      term: "Marketing mix",
      definition:
        "The set of controllable decisions — product, price, place, promotion — used to satisfy customers.",
    },
    {
      term: "Product",
      definition:
        "The goods or services offered, including quality, design, branding and packaging.",
    },
    {
      term: "Price",
      definition:
        "The amount customers pay; the only mix element that generates revenue.",
    },
    {
      term: "Place",
      definition:
        "The distribution channels used to get the product to customers.",
    },
    {
      term: "Promotion",
      definition:
        "Communication activities — advertising, sales promotion, public relations, personal selling.",
    },
    {
      term: "Penetration pricing",
      definition: "Setting a low launch price to gain market share quickly.",
    },
    {
      term: "Skimming",
      definition:
        "Setting a high launch price to recover costs from early adopters.",
    },
  ],
  concepts: [
    {
      id: "bus-u2-product-price",
      title: "Product and price",
      skill:
        "Explain product decisions (quality, branding, packaging, product life cycle) and pricing strategies.",
      lesson: {
        sections: [
          {
            heading: "The product element",
            body: "The **product** decision covers quality, design, features, branding, packaging and after-sales service. Products move through a **product life cycle**: introduction (slow growth, high costs), growth (rapid sales rise), maturity (peak sales, competition) and decline (falling sales). Strategies differ at each stage — heavy promotion at introduction, cost control at maturity.",
          },
          {
            heading: "Pricing strategies",
            body: "**Cost-plus pricing** adds a markup to unit costs; **competition-based pricing** matches rivals; **value-based pricing** reflects perceived customer value. Launch strategies include **penetration pricing** (low price to gain share fast) and **skimming** (high price to recover costs from early adopters). Price must also cover costs and achieve objectives.",
          },
          {
            heading: "Linking product and price",
            body: "Price signals quality: premium prices suit differentiated products, low prices suit mass markets. The two must be consistent — a luxury brand cannot use penetration pricing without damaging its image. Exam answers should connect the 4Ps: e.g. a differentiated product justifies higher prices and selective promotion.",
          },
        ],
        keyFormulas: [
          {
            name: "Cost-plus price",
            statement: "Price = unit cost + percentage markup",
          },
          {
            name: "Product life cycle",
            statement: "Introduction → growth → maturity → decline",
          },
          {
            name: "Launch pricing",
            statement:
              "Penetration = low price for share; Skimming = high price for margin",
          },
        ],
        workedExample: {
          problem:
            "A new smartphone has strong features but little brand recognition. Recommend a launch pricing strategy and justify it.",
          solution:
            "Penetration pricing: a low introductory price attracts early adopters quickly, builds installed base and reviews before raising prices once the brand is established.",
        },
      },
      questions: [
        {
          id: "bus-u2-pp-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A business sets a very high price at launch to recover development costs quickly. This is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penetration pricing" },
              { id: "b", text: "Skimming" },
              { id: "c", text: "Cost-plus pricing" },
              { id: "d", text: "Predatory pricing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Skimming",
                statement:
                  "High launch price aimed at early adopters to recover costs.",
              },
            ],
            steps: [
              {
                reasoning: "High launch price to recover costs is skimming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Skimming",
            commonErrors: ["Reversing skimming and penetration pricing."],
          },
        },
        {
          id: "bus-u2-pp-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's unit cost is $8$ and it adds a $2$ markup. Calculate the selling price.",
          response: {
            type: "numeric",
            parts: [{ label: "Selling price", answer: 10, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost-plus pricing",
                statement: "Price = unit cost + markup",
              },
            ],
            steps: [
              {
                reasoning: "Apply the cost-plus formula.",
                working: "8+2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the figures.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the price.",
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Adding as a percentage instead of a fixed amount."],
          },
        },
        {
          id: "bus-u2-pp-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the product life cycle stage affects marketing decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Product life cycle",
                statement:
                  "Introduction, growth, maturity, decline each demand different strategies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Introduction: heavy promotion and possibly high prices to create awareness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Growth/maturity: competition rises, so pricing tightens and promotion shifts to differentiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Decline: costs cut, possibly rebrand or withdraw the product.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: mix decisions must match the life-cycle stage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each stage requires different price, promotion and product strategies.",
            commonErrors: [
              "Describing the stages without linking to marketing decisions.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A coffee shop chain wants to launch a premium iced-coffee range aimed at young professionals.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two product decisions the chain must make for this new product.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a pricing strategy and justify it with reference to the target segment.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether premium pricing will succeed in this market.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing mix consistency",
                statement:
                  "Product, price, place and promotion must match the target segment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Quality/ingredients and branding/packaging suited to premium positioning.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Any two valid product decisions clearly stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Skimming or premium pricing: young professionals value convenience and quality and can pay more.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Justified by perceived value rather than cost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Recognises competition from cheaper alternatives as a limit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: differentiated product and target segment support premium price. Against: price-sensitive rivals may undercut.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on success likelihood.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Quality/branding decisions. (b) Premium pricing matched to segment values. (c) Plausible if differentiation is real.",
            commonErrors: [
              "Choosing a price without linking it to the target segment.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which element of the marketing mix is the only one that generates revenue for the business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Product" },
              { id: "b", text: "Place" },
              { id: "c", text: "Promotion" },
              { id: "d", text: "Price" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Price",
                statement:
                  "The amount customers pay; the only mix element that generates revenue.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Product, place and promotion are costs; only price brings money in.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (d) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Price",
            commonErrors: [
              "Thinking product creates revenue — it creates value but price captures it.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which sequence shows the correct order of the product life cycle stages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maturity, growth, introduction, decline" },
              { id: "b", text: "Introduction, growth, maturity, decline" },
              { id: "c", text: "Growth, introduction, decline, maturity" },
              { id: "d", text: "Introduction, maturity, growth, decline" },
            ],
            correctChoiceId: "b",
          },
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
                reasoning:
                  "Products launch, grow, peak then decline in that order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Introduction, growth, maturity, decline",
            commonErrors: [
              "Putting maturity before growth — maturity is the peak after growth.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A product has a unit cost of $12$ and the firm adds a $25\\%$ markup. The selling price is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$30$" },
              { id: "d", text: "$37$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost-plus pricing",
                statement: "Price = unit cost + markup",
              },
            ],
            steps: [
              {
                reasoning: "Markup = 25% of 12 = 3, so price = 12 + 3 = 15.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $15$",
            commonErrors: ["Adding 25 to the cost instead of 25% of the cost."],
          },
        },
        {
          id: "bus-u2-pp-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A new phone brand sets its launch price just below the market leader's to attract customers quickly. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penetration pricing" },
              { id: "b", text: "Skimming" },
              { id: "c", text: "Cost-plus pricing" },
              { id: "d", text: "Value-based pricing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Penetration pricing",
                statement:
                  "A low launch price used to gain market share quickly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low price aimed at winning share fast is penetration pricing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Penetration pricing",
            commonErrors: [
              "Confusing it with skimming, which uses a high launch price.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A firm sets prices based on what customers believe the product is worth rather than on its costs. This is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competition-based pricing" },
              { id: "b", text: "Cost-plus pricing" },
              { id: "c", text: "Value-based pricing" },
              { id: "d", text: "Predatory pricing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Value-based pricing",
                statement:
                  "Price reflects perceived customer value rather than cost.",
              },
            ],
            steps: [
              {
                reasoning: "Pricing on perceived worth is value-based pricing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Value-based pricing",
            commonErrors: [
              "Confusing value-based with cost-plus, which starts from costs.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A small firm is launching a new range of handmade candles aimed at home decorators.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Product decisions",
                statement:
                  "Quality, design, branding and packaging must match the target segment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quality and design: scents, burn time and appearance suited to home decor customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Branding and packaging: attractive, gift-ready packaging that signals the intended image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Decisions should be consistent with the chosen price, place and promotion.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: product choices must reinforce the overall marketing mix.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Quality/design plus branding/packaging decisions consistent with the target segment and the rest of the mix.",
            commonErrors: [
              "Listing product features without linking them to the target customer.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how penetration pricing can help a new entrant gain market share, and one situation where it may be unsuitable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Penetration pricing",
                statement:
                  "A low launch price used to gain market share quickly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The low price attracts trial purchases and builds a customer base quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Share can later be defended by raising prices once the brand is established.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unsuitable where production costs are high or the brand image is premium or luxury.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: effective for share-seeking entrants in price-sensitive markets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Low price wins trial and share fast; risky for high-cost or premium-positioned products.",
            commonErrors: [
              "Describing penetration pricing without saying when it fails.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two ways a business can extend the life of a product that has reached maturity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extending the PLC",
                statement:
                  "Product development, repositioning and new markets can revive a mature product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Product development: launch new versions, features or packaging to refresh interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repositioning: target new segments or enter new geographic markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Price or promotion changes, or planned replacement by a next-generation product.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: extension strategies buy time but must be funded before decline deepens.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Product development and repositioning or new markets extend a mature product's life.",
            commonErrors: [
              "Suggesting only price cuts, which can accelerate decline.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's unit cost is 20 dollars and it applies a 15% markup. Calculate the selling price.",
          response: {
            type: "numeric",
            parts: [{ label: "Selling price", answer: 23, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost-plus pricing",
                statement: "Price = unit cost + percentage markup",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the markup amount.",
                working: "0.15 \\times 20 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the markup to the unit cost.",
                working: "20 + 3 = 23",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the selling price.",
                working: "23",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$23$",
            commonErrors: [
              "Computing 15% of the wrong base or adding 15 instead of 15%.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A product sells for 65 dollars and costs 50 dollars to make. Calculate the percentage markup on cost.",
          response: {
            type: "numeric",
            parts: [{ label: "Markup percentage", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage markup",
                statement: "Markup % = (price - cost) / cost x 100",
              },
            ],
            steps: [
              {
                reasoning: "Find the markup amount.",
                working: "65 - 50 = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by cost and multiply by 100.",
                working: "\\frac{15}{50} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the percentage.",
                working: "30\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Dividing by price instead of cost."],
          },
        },
        {
          id: "bus-u2-pp-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A firm sells 100 units at 12 dollars each. Variable cost is 8 dollars per unit and there are no fixed costs. Calculate total profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Total profit", answer: 400, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit",
                statement: "Profit = total revenue - total cost",
              },
            ],
            steps: [
              {
                reasoning: "Total revenue = 100 x 12.",
                working: "100 \\times 12 = 1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total cost = 100 x 8 = 800; profit = revenue - cost.",
                working: "1200 - 800 = 400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State total profit.",
                working: "400",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$400$",
            commonErrors: [
              "Using price minus cost per unit then forgetting to multiply by quantity.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A cosmetics firm plans a premium skincare range aimed at wealthy professionals.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two product decisions the firm must make for this range.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a pricing strategy and justify it with reference to the target segment.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether a premium positioning will succeed in this market.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing mix consistency",
                statement:
                  "Product, price, place and promotion must match the target segment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Quality/ingredients and branding/packaging suited to premium positioning.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Any two valid product decisions clearly stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Skimming or premium pricing: wealthy professionals value quality and exclusivity and can pay more.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Justified by perceived value rather than cost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Recognises competition from cheaper alternatives as a limit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: differentiated product and affluent segment support premium price. Against: price-sensitive rivals and counterfeits may limit demand.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on success likelihood.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Quality/branding decisions. (b) Premium pricing matched to segment values. (c) Plausible if differentiation is real.",
            commonErrors: [
              "Choosing a price without linking it to the target segment.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A product's sales rise rapidly after launch and competitors begin to enter the market. This describes which stage of the product life cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction" },
              { id: "b", text: "Growth" },
              { id: "c", text: "Maturity" },
              { id: "d", text: "Decline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Product life cycle",
                statement:
                  "Introduction, growth, maturity and decline each have distinct sales patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rapidly rising sales with new competitors entering is the growth stage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Growth",
            commonErrors: [
              "Confusing growth with maturity — maturity is when sales peak and stabilise.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q18",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Under cost-plus pricing, the selling price is calculated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subtracting fixed costs from the unit cost" },
              { id: "b", text: "Adding a percentage markup to the unit cost" },
              { id: "c", text: "Matching the lowest rival's price" },
              { id: "d", text: "Adding the promotion budget to the price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost-plus pricing",
                statement: "Price = unit cost + percentage markup",
              },
            ],
            steps: [
              {
                reasoning: "Cost-plus starts from unit cost and adds a markup.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Adding a percentage markup to the unit cost",
            commonErrors: [
              "Confusing cost-plus with competition-based or value-based pricing.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q19",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "During the maturity stage of the product life cycle, a firm is most likely to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Run heavy launch promotion to build awareness",
              },
              { id: "b", text: "Focus on cost control and differentiation" },
              { id: "c", text: "Raise prices sharply to exploit peak demand" },
              { id: "d", text: "Withdraw all marketing support" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLC stage strategies",
                statement:
                  "Maturity brings peak sales and intense competition, so firms focus on costs and differentiation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At maturity competition is strongest, so efficiency and differentiation matter most.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Focus on cost control and differentiation",
            commonErrors: [
              "Applying introduction-stage heavy promotion to maturity.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Value-based pricing is most appropriate when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The product is undifferentiated and sold in bulk",
              },
              {
                id: "b",
                text: "Customers strongly value unique features or the brand",
              },
              { id: "c", text: "The firm wants to recover costs quickly" },
              { id: "d", text: "Rivals are pricing below cost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Value-based pricing",
                statement:
                  "Price reflects perceived customer value rather than cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Value-based pricing works when customers perceive high worth — differentiation or brand strength.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Customers strongly value unique features or the brand",
            commonErrors: [
              "Using value-based pricing for commodity products with no perceived difference.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q21",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A luxury perfume brand launches with heavy discounts and buy-one-get-one-free offers. The main marketing mix problem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too much promotion overall" },
              {
                id: "b",
                text: "The pricing contradicts the premium positioning",
              },
              { id: "c", text: "The place is too selective" },
              { id: "d", text: "The product quality is too low" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mix consistency",
                statement:
                  "Price must match the product's positioning; discounting damages luxury image.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deep discounts signal low value, clashing with a luxury brand's premium price image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The pricing contradicts the premium positioning",
            commonErrors: [
              "Blaming promotion when the inconsistency is in price.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q22",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Penetration pricing is most likely to succeed when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The product is a highly differentiated luxury good",
              },
              {
                id: "b",
                text: "The market is crowded and customers are price-sensitive",
              },
              {
                id: "c",
                text: "The firm has enormous spare production capacity",
              },
              { id: "d", text: "There are no rival products at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Penetration pricing",
                statement:
                  "A low launch price gains share fast in price-sensitive, competitive markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low prices attract customers only where price matters and rivals compete for share.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The market is crowded and customers are price-sensitive",
            commonErrors: [
              "Assuming penetration pricing suits luxury or differentiated products.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q23",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two product decisions a business must make when developing a new product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Product decisions",
                statement:
                  "Quality, design, features, branding, packaging and after-sales service.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quality and features: decide the standard and functionality that meet customer needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Branding and packaging: create an image and presentation consistent with the target segment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Decisions must be consistent with the chosen price, place and promotion.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: product choices are part of an integrated marketing mix.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Quality/features plus branding/packaging, consistent with the rest of the mix.",
            commonErrors: [
              "Listing product features without linking them to the target customer.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q24",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain when skimming is an appropriate launch pricing strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Skimming",
                statement:
                  "A high launch price that recovers costs from early adopters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appropriate when the product is innovative or differentiated and early adopters value it highly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Works when demand is price-inelastic at launch and competitors have not yet entered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prices can be lowered later to reach the mass market — recovers development costs first.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: skimming suits innovative products with willing early adopters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Skimming suits innovative, differentiated products where early adopters will pay a premium.",
            commonErrors: [
              "Describing skimming without explaining the conditions that make it work.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q25",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A small firm plans to launch a range of reusable coffee cups aimed at office workers.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two product decisions the firm must make for this new range.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a pricing strategy and justify it with reference to the target segment.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether the chosen pricing strategy will succeed in this market.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing mix consistency",
                statement:
                  "Product, price, place and promotion must match the target segment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Quality/materials (e.g. durability, leak-proofing) suited to daily office use.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Branding/packaging that appeals to environmentally conscious professionals — two required.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Value-based or premium pricing: office workers may pay more for durable, eco-friendly products.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by perceived value and environmental benefits rather than cost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Recognises cheap rivals and disposable-cup convenience as limits on price.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: differentiation supports premium price. Against: price-sensitive buyers may stick with cheaper disposables.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement on whether premium pricing will succeed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Quality/materials and branding decisions. (b) Premium or value-based pricing matched to segment values. (c) Plausible if differentiation is real.",
            commonErrors: [
              "Choosing a price without linking it to the target segment.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q26",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A software firm must choose between penetration and skimming pricing for a new app subscription.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between penetration pricing and skimming.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend one strategy for a crowded market of similar apps and justify your choice.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the risks of the strategy you recommended.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Launch pricing strategies",
                statement:
                  "Penetration = low price for fast share; skimming = high price for early-adopter margin.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Penetration sets a low launch price to win market share quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Skimming sets a high launch price to recover costs from early adopters.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Penetration is likely better in a crowded market — low price attracts users from rivals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by price-sensitive customers comparing many similar apps.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any reasonable recommendation clearly justified against the scenario earns the mark.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk of penetration: thin margins, may attract disloyal price-switchers, hard to raise prices later.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risk of skimming (if chosen): high price limits adoption in a crowded market.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — strategy must match differentiation and competitive conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Low price for share vs high price for margin. (b) Penetration fits a crowded, price-sensitive app market. (c) Thin margins and difficulty raising prices later.",
            commonErrors: [
              "Recommending a strategy without linking it to competition and customer sensitivity.",
            ],
          },
        },
        {
          id: "bus-u2-pp-q27",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A product has a unit cost of $15$ and the firm adds a $60\\%$ markup. Calculate the selling price.",
          response: {
            type: "numeric",
            parts: [{ label: "Selling price", answer: 24, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost-plus pricing",
                statement: "Price = unit cost + percentage markup",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the markup amount.",
                working: "0.60 x 15 = 9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the markup to the unit cost.",
                working: "15 + 9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the selling price.",
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$24$",
            commonErrors: ["Adding 60 to the cost instead of 60% of the cost."],
          },
        },
        {
          id: "bus-u2-pp-q28",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A product sells for $50$ and costs $35$ per unit to make. Calculate the profit margin as a percentage of the selling price.",
          response: {
            type: "numeric",
            parts: [{ label: "Profit margin (%)", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit margin",
                statement: "Margin = (price - cost) / price x 100",
              },
            ],
            steps: [
              {
                reasoning: "Calculate profit per unit.",
                working: "50 - 35 = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide profit by the selling price and convert to a percentage.",
                working: "15 / 50 x 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the margin.",
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Dividing by cost instead of selling price."],
          },
        },
      ],
    },
    {
      id: "bus-u2-place-promo",
      title: "Place and promotion",
      skill:
        "Explain distribution channels and the elements of promotion, and evaluate how the 4Ps work together.",
      lesson: {
        sections: [
          {
            heading: "Place: getting the product to customers",
            body: "**Place** covers distribution channels: direct sales (own shops, website), indirect channels (retailers, wholesalers) and increasingly e-commerce. The choice depends on the product, customers and costs — luxury goods need selective outlets; convenience goods need wide availability. Logistics — storage, transport and inventory — sits behind place decisions.",
          },
          {
            heading: "Promotion: communicating value",
            body: "**Promotion** includes **advertising** (TV, online, print), **sales promotion** (discounts, coupons, free samples), **public relations** (press coverage, sponsorship) and **personal selling** (sales staff). The mix must fit the product and budget — personal selling suits high-value industrial goods; mass advertising suits consumer goods.",
          },
          {
            heading: "Integrating the 4Ps",
            body: "The **marketing mix** only works when the four Ps reinforce each other: a premium product needs premium pricing, selective place and image-building promotion. IB questions often present a scenario and ask you to recommend consistent mix decisions or spot an inconsistency (e.g. cheap product with luxury branding).",
          },
        ],
        keyFormulas: [
          { name: "The 4Ps", statement: "Product, Price, Place, Promotion" },
          {
            name: "Promotion tools",
            statement:
              "Advertising, sales promotion, public relations, personal selling",
          },
          {
            name: "Distribution",
            statement:
              "Direct (own outlets) vs indirect (retailers/wholesalers) channels",
          },
        ],
        workedExample: {
          problem:
            "A new energy drink targets gym-goers via social media. Suggest consistent place and promotion decisions.",
          solution:
            "Place: online sales plus gyms and sports shops (selective, where the segment shops). Promotion: social media advertising and influencer partnerships aimed at fitness audiences, plus point-of-sale sampling.",
        },
      },
      questions: [
        {
          id: "bus-u2-plac-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which promotion method involves paying for media space to reach a mass audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal selling" },
              { id: "b", text: "Public relations" },
              { id: "c", text: "Advertising" },
              { id: "d", text: "Sales promotion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Advertising",
                statement:
                  "Paid mass communication through media to promote products.",
              },
            ],
            steps: [
              {
                reasoning: "Paid media space for mass reach is advertising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Advertising",
            commonErrors: [
              "Confusing public relations (unpaid coverage) with advertising (paid).",
            ],
          },
        },
        {
          id: "bus-u2-plac-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State three factors that influence a business's choice of distribution channel.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distribution choice",
                statement:
                  "Product type, customer location, costs and control needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nature of the product — bulky goods need different channels from digital ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Where and how customers prefer to buy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Costs and desired control over how the product is sold — any valid factor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Product type, customer preferences, cost, control.",
            commonErrors: [
              "Listing channels rather than factors influencing the choice.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A manufacturer sells through many small retailers. Explain two problems this 'place' decision could create.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect distribution problems",
                statement:
                  "Less control, margin sharing, stock inconsistency, weak customer data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Manufacturer loses control over display, pricing and customer service at point of sale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Margins are shared with intermediaries, reducing profit per unit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stock levels and promotion can vary between retailers, weakening the brand.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: wide distribution trades control and margin for reach.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Loss of control and shared margins; inconsistent stock and service.",
            commonErrors: [
              "Listing advantages of indirect channels instead of problems.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A small bakery currently sells only from its own shop. Sales are falling as customers prefer convenience.",
          parts: [
            {
              label: "a",
              prompt: "Explain what 'place' means in the marketing mix.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Recommend two place strategies the bakery could adopt.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether adding online sales is the best solution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place",
                statement:
                  "The distribution channels used to make the product available to customers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Place is how and where the product reaches the customer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Covers channels, logistics and availability.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Online ordering/collection for convenience.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Supply local cafes or supermarkets (indirect channels).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Any two valid place strategies clearly described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: matches convenience demand, low setup cost. Against: delivery logistics, packaging and competition may outweigh benefits.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on the best option.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Distribution channels and availability. (b) Online ordering, supplying retailers. (c) Attractive but must weigh logistics costs.",
            commonErrors: ["Confusing place with promotion."],
          },
        },
        {
          id: "bus-u2-plac-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a direct distribution channel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A wholesaler" },
              { id: "b", text: "A retailer" },
              { id: "c", text: "The firm's own website" },
              { id: "d", text: "A supermarket chain" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct distribution",
                statement:
                  "Selling straight to customers through own outlets or websites, without intermediaries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The firm's own website sells directly to customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The firm's own website",
            commonErrors: [
              "Confusing retailers and wholesalers (indirect) with direct channels.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which promotion method relies on unpaid media coverage such as press articles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advertising" },
              { id: "b", text: "Sales promotion" },
              { id: "c", text: "Public relations" },
              { id: "d", text: "Personal selling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public relations",
                statement:
                  "Unpaid media coverage and communication that builds goodwill.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Press articles and sponsorship are unpaid — that is public relations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Public relations",
            commonErrors: [
              "Confusing public relations (unpaid) with advertising (paid).",
            ],
          },
        },
        {
          id: "bus-u2-plac-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A supermarket offers 'buy one, get one free' on breakfast cereal. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advertising" },
              { id: "b", text: "Sales promotion" },
              { id: "c", text: "Public relations" },
              { id: "d", text: "Personal selling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sales promotion",
                statement:
                  "Short-term incentives such as discounts, coupons and free samples.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Buy-one-get-one-free is a short-term price incentive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Sales promotion",
            commonErrors: [
              "Calling every in-store offer advertising — advertising is paid media.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Convenience goods such as bottled water typically need:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Selective distribution through a few exclusive outlets",
              },
              { id: "b", text: "Wide availability through many outlets" },
              { id: "c", text: "No distribution at all" },
              { id: "d", text: "Online-only sales" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distribution intensity",
                statement:
                  "Convenience goods need wide availability; luxury goods need selective outlets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers buy convenience goods frequently and nearby, so wide distribution is needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Wide availability through many outlets",
            commonErrors: [
              "Applying luxury-goods selective distribution to everyday products.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A luxury watch brand begins selling through discount supermarkets. The main marketing mix inconsistency is in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The product" },
              { id: "b", text: "The price" },
              { id: "c", text: "The place" },
              { id: "d", text: "The promotion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mix consistency",
                statement:
                  "A premium product needs selective place; discount channels contradict luxury positioning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selling through discount supermarkets is a place decision that clashes with luxury image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The place",
            commonErrors: [
              "Spotting a price or promotion issue when the inconsistency is the channel.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of selling directly to customers rather than through intermediaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Direct distribution benefits",
                statement:
                  "Full margin, control over presentation and direct customer relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No intermediary margin is lost, so profit per unit is higher.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The firm controls display, pricing and customer service at the point of sale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Direct contact builds customer data, feedback and loyalty.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: direct channels trade reach for margin and control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher margins and greater control, plus direct customer relationships.",
            commonErrors: [
              "Listing advantages of intermediaries instead of direct sales.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain when personal selling is most appropriate, and give one example of a product where it suits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personal selling",
                statement:
                  "Face-to-face selling suits high-value, complex or customised products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Best for expensive, complex or customised goods that need explanation and demonstration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Builds relationships and closes large orders through negotiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: industrial machinery, cars or bespoke services.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: unsuitable for low-value convenience goods sold in bulk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High-value, complex products such as machinery; builds relationships and closes large sales.",
            commonErrors: [
              "Suggesting personal selling for everyday low-price goods.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A small producer relies on one large supermarket for 80% of its sales. Explain two risks of this place strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Channel dependence",
                statement:
                  "Relying on one intermediary creates bargaining and continuity risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The supermarket holds bargaining power — it can impose lower prices or harsher terms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If the supermarket delists the product, most sales disappear at once.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The producer loses control over presentation, pricing and customer contact.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: dependence on one channel is a serious business risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Loss of bargaining power and the risk of losing most sales if delisted.",
            commonErrors: [
              "Describing advantages of the arrangement rather than risks.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A manufacturer supplies a wholesaler at 10 dollars per unit; the wholesaler resells at 15 dollars. Calculate the wholesaler's margin per unit.",
          response: {
            type: "numeric",
            parts: [{ label: "Margin per unit", answer: 5, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Channel margin",
                statement:
                  "Intermediary margin = resale price - purchase price",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the purchase price from the resale price.",
                working: "15 - 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the difference.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the margin per unit.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ per unit",
            commonErrors: [
              "Dividing instead of subtracting — margin per unit is a difference.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An advertising campaign costs 200,000 dollars and reaches 4 million people. Calculate the cost per thousand people reached.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per thousand", answer: 50, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost per thousand",
                statement: "CPM = campaign cost / (reach in thousands)",
              },
            ],
            steps: [
              {
                reasoning: "Convert reach to thousands.",
                working: "4000000 \\div 1000 = 4000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide cost by thousands reached.",
                working: "200000 \\div 4000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the cost per thousand.",
                working: "50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$50$ per thousand reached",
            commonErrors: ["Dividing by 4 million instead of 4 thousand."],
          },
        },
        {
          id: "bus-u2-plac-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A jacket priced at 40 dollars is discounted by 15% in a sales promotion. Calculate the sale price.",
          response: {
            type: "numeric",
            parts: [{ label: "Sale price", answer: 34, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage discount",
                statement:
                  "Sale price = original price - (discount % x original price)",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the discount amount.",
                working: "0.15 \\times 40 = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the discount from the original price.",
                working: "40 - 6 = 34",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the sale price.",
                working: "34",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$34$",
            commonErrors: ["Multiplying by 15 instead of 0.15."],
          },
        },
        {
          id: "bus-u2-plac-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "An independent bookstore currently sells only from its single shop and wants to grow.",
          parts: [
            {
              label: "a",
              prompt:
                "Recommend two place strategies the bookstore could adopt.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two promotion methods and justify each for this business.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether moving entirely online is a sensible strategy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing mix consistency",
                statement:
                  "Place and promotion choices must fit the product, customers and budget.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Online store or click-and-collect for convenience.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Any second valid channel, e.g. supplying other shops or hosting events — two required.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Social media promotion to reach local readers cheaply.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justification: book buyers respond to recommendations and community content.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any second valid promotion method with justification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Online-only loses the browsing experience and community feel that books rely on, but cuts costs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — a hybrid click-and-mortar approach may be best.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Online store, click-and-collect or supplying other shops. (b) Social media plus events, justified. (c) Hybrid likely best.",
            commonErrors: [
              "Recommending channels without linking them to the bookstore's customers.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q17",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an indirect distribution channel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The firm's own shop" },
              { id: "b", text: "The firm's own website" },
              { id: "c", text: "A wholesaler" },
              { id: "d", text: "A direct mail-order catalogue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indirect distribution",
                statement:
                  "Selling through intermediaries such as wholesalers and retailers.",
              },
            ],
            steps: [
              {
                reasoning: "A wholesaler sits between producer and customer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A wholesaler",
            commonErrors: [
              "Confusing the firm's own outlets (direct) with intermediaries (indirect).",
            ],
          },
        },
        {
          id: "bus-u2-plac-q18",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A retailer gives customers a coupon worth $5 off their next purchase. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advertising" },
              { id: "b", text: "Sales promotion" },
              { id: "c", text: "Public relations" },
              { id: "d", text: "Personal selling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sales promotion",
                statement:
                  "Short-term incentives such as discounts, coupons and free samples.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A money-off coupon is a short-term sales incentive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Sales promotion",
            commonErrors: [
              "Calling every customer offer advertising — advertising is paid media.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q19",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Personal selling is most appropriate for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bottled water" },
              { id: "b", text: "Breakfast cereal" },
              { id: "c", text: "Industrial machinery" },
              { id: "d", text: "Newspapers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personal selling",
                statement:
                  "Face-to-face selling suits high-value, complex or customised products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Industrial machinery is expensive and complex — needs explanation and negotiation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Industrial machinery",
            commonErrors: [
              "Choosing low-value convenience goods where personal selling is uneconomic.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A local newspaper runs a free article about a new restaurant opening. For the restaurant this is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advertising" },
              { id: "b", text: "Sales promotion" },
              { id: "c", text: "Public relations" },
              { id: "d", text: "Personal selling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public relations",
                statement:
                  "Unpaid media coverage and communication that builds goodwill.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A free press article is unpaid coverage — public relations, not paid advertising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Public relations",
            commonErrors: [
              "Confusing unpaid press coverage (PR) with paid advertising.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q21",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A company selling everyday shampoo distributes only through one small boutique in the city centre. The main marketing mix weakness is in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The product" },
              { id: "b", text: "The price" },
              { id: "c", text: "The place" },
              { id: "d", text: "The promotion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distribution intensity",
                statement:
                  "Convenience goods need wide availability; one outlet limits reach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selling a convenience good through a single outlet is a place decision that limits availability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The place",
            commonErrors: [
              "Identifying a promotion or price problem when the issue is availability.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q22",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two advantages of using intermediaries such as wholesalers and retailers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect distribution benefits",
                statement:
                  "Intermediaries extend reach, handle logistics and share selling effort.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intermediaries give access to many outlets and wider geographic reach without the producer building its own network.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They handle storage, transport and local selling knowledge, freeing the producer to focus on production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade-off: the producer shares margin and loses some control over presentation and pricing.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: intermediaries suit producers needing wide reach at low cost.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wider reach and outsourced logistics/selling, at the cost of shared margin and less control.",
            commonErrors: [
              "Listing advantages of direct selling instead of intermediaries.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q23",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two disadvantages of relying on personal selling for a low-value consumer product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personal selling limits",
                statement:
                  "Face-to-face selling is costly per contact — uneconomic for cheap goods.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The cost of employing sales staff is high relative to the low price and thin margin of the product.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sales staff can only reach a limited number of customers, so coverage is poor for mass-market goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customers buying cheap items do not expect or need a sales demonstration.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: personal selling suits high-value complex goods, not low-price items.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High cost relative to price and limited customer reach make it unsuitable for cheap goods.",
            commonErrors: [
              "Describing advantages of personal selling instead of disadvantages.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q24",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "An independent coffee roaster currently sells only at its own café.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two factors that should influence its choice of distribution channel.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend two promotion methods and justify each for this business.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate whether the roaster should also sell online.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Channel and promotion fit",
                statement:
                  "Distribution and promotion must match the product, customers and budget.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nature of the product — perishable coffee needs fast, frequent delivery.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Where customers shop and the cost/control trade-off of each channel — any two valid factors.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Social media advertising — cheap and reaches local coffee drinkers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justification: coffee buyers respond to origin stories and community content.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any second valid promotion method with justification, e.g. loyalty scheme or local events.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For: reaches customers beyond footfall, subscription sales. Against: perishable delivery costs and packaging may erode margins.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced judgement on the online option.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Product perishability and customer location/cost. (b) Social media plus loyalty/events, justified. (c) Viable but delivery costs must be managed.",
            commonErrors: [
              "Recommending channels without linking them to coffee's perishability.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q25",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A mid-priced clothing manufacturer must decide between selling direct to customers and selling through retailers.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between direct and indirect distribution.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Recommend a channel strategy for this brand and justify it.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the risks of the strategy you recommended.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Direct vs indirect distribution",
                statement:
                  "Direct sells straight to customers; indirect uses intermediaries.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Direct: own shops/websites — full margin and control but limited reach.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Indirect: retailers/wholesalers — wider reach but shared margin and less control.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A hybrid or selective indirect approach fits a mid-priced brand — reach without full luxury overheads.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Justified by needing both reach (retailers) and brand control (own online store).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any coherent recommendation clearly justified earns the mark.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Risk of indirect: retailers may discount the brand or give poor display, weakening image.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risk of direct: high setup costs and limited reach compared with established stores.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement — channel choice must match brand position and resources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Direct = own channels, full margin; indirect = intermediaries, wider reach. (b) Hybrid selective distribution. (c) Control vs reach trade-off.",
            commonErrors: [
              "Recommending a channel without linking it to the brand's price position.",
            ],
          },
        },
        {
          id: "bus-u2-plac-q26",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An online campaign costs 90,000 dollars and reaches 3 million people. Calculate the cost per thousand people reached.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost per thousand", answer: 30, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost per thousand (CPM)",
                statement: "CPM = campaign cost / reach in thousands",
              },
            ],
            steps: [
              {
                reasoning: "Convert reach to thousands.",
                working: "3000000 / 1000 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide cost by thousands reached.",
                working: "90000 / 3000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the cost per thousand.",
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30$ per thousand reached",
            commonErrors: ["Dividing by 3 million instead of 3 thousand."],
          },
        },
        {
          id: "bus-u2-plac-q27",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A trainers brand priced at $120$ offers a $25\\%$ launch discount. Calculate the promotional price.",
          response: {
            type: "numeric",
            parts: [{ label: "Promotional price", answer: 90, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage discount",
                statement:
                  "Sale price = original price - (discount % x original price)",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the discount amount.",
                working: "0.25 x 120 = 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the discount from the original price.",
                working: "120 - 30 = 90",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the promotional price.",
                working: "90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$90$",
            commonErrors: ["Multiplying by 25 instead of 0.25."],
          },
        },
        {
          id: "bus-u2-plac-q28",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A producer sells widgets to a retailer at 7 dollars each; the retailer sells them at 11 dollars. Calculate the retailer's total margin on 400 units.",
          response: {
            type: "numeric",
            parts: [{ label: "Total margin", answer: 1600, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Channel margin",
                statement:
                  "Total margin = (resale price - purchase price) x quantity",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the margin per unit.",
                working: "11 - 7 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply the per-unit margin by quantity.",
                working: "4 x 400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the total margin.",
                working: "1600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1600$",
            commonErrors: [
              "Stopping at the per-unit margin instead of multiplying by 400 units.",
            ],
          },
        },
      ],
    },
  ],
};

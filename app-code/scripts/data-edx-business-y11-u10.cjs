module.exports = [
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "ebz11-u10-lesson-10-1", code: "10-1",
      title: "Internal and External Business Growth",
      goal: "I CAN distinguish organic (internal) growth from external growth methods and evaluate mergers, takeovers, joint ventures and franchising.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — Business activity and influences on business",
        "4BS0: growth strategies and business expansion",
      ],
      vocabulary: [
        { term: "Organic growth", definition: "Growth achieved from within the business — more sales, new products, new markets." },
        { term: "External growth", definition: "Growth achieved by joining with or taking over another business." },
        { term: "Merger", definition: "Two businesses combine to form one new, larger business." },
        { term: "Takeover", definition: "One business buys control of another, which may be hostile." },
        { term: "Joint venture", definition: "Two or more businesses set up a new shared business, sharing risks and profits." },
        { term: "Franchise", definition: "A business buys the right to trade under an established brand and business model." },
      ],
      concepts: [
        {
          id: "ebz11-u10-organic",
          title: "Organic (Internal) Growth",
          skill: "Explain how a business grows internally and evaluate its advantages and limitations.",
          sections: [
            {
              heading: "What organic growth means",
              body: "**Organic growth** is expansion achieved from inside the existing business — no outside firm is bought or merged with. Typical routes: increasing sales of existing products, developing new products, entering new markets or export markets, hiring more staff, and improving marketing. **Growth rate** = (new sales − old sales) ÷ old sales × 100%.\n\n**Benefits**: the owners keep full control; growth is gradual and financed from retained profits or normal borrowing; the business builds on strengths it already has; less risky than big takeovers.\n\n**Drawbacks**: usually slower than external growth; limited by the firm's own resources, skills and finance; may be outpaced by rivals who grow externally.",
            },
            {
              heading: "When organic growth works",
              body: "Best for small and medium businesses that cannot afford acquisitions, businesses in stable markets, and owners who want to keep control. Success depends on reinvesting profit, effective marketing and good financial planning. A business can combine organic growth with external methods — for example, growing sales organically before considering a merger.",
            },
          ],
          keyFormulas: [
            { name: "Growth rate", statement: "(New sales − old sales) ÷ old sales × 100%" },
          ],
          workedExample: {
            problem: "A bakery's sales rise from £180,000 to £216,000 in one year. Calculate its growth rate.",
            solution: "Growth = (216,000 − 180,000) ÷ 180,000 × 100% = 36,000 ÷ 180,000 × 100% = 20%.",
          },
          questions: [
            {
              id: "ebz11-u10-organic-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is organic (internal) growth?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Buying another business outright" },
                  { id: "b", text: "Growth achieved from within the existing business" },
                  { id: "c", text: "Setting up a joint venture abroad" },
                  { id: "d", text: "Selling shares to raise finance" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Organic growth", statement: "Growth from within — more sales, products, markets." },
                ],
                steps: [
                  { reasoning: "Organic = internal expansion of the same business.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** From within the business",
                commonErrors: ["Confused with external growth."],
              },
            },
            {
              id: "ebz11-u10-organic-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "A firm's sales rise from £120,000 to £150,000. Calculate the percentage growth rate.",
              response: {
                type: "numeric",
                parts: [{ label: "Growth rate (%)", answer: 25 }],
              },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Growth rate", statement: "(150,000 − 120,000) ÷ 120,000 × 100% = 25%." },
                ],
                steps: [
                  { reasoning: "Increase = £30,000; 30,000 ÷ 120,000 × 100% = 25%.", marks: 3, markCode: "AO1" },
                ],
                finalAnswer: "25%",
                commonErrors: ["Divided by new sales instead of old sales."],
              },
            },
            {
              id: "ebz11-u10-organic-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give two advantages and one disadvantage of organic growth for a small business.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Organic growth", statement: "Control retained but growth is slower and resource-limited." },
                ],
                steps: [
                  { reasoning: "Owners keep full control — no outside shareholders.", marks: 2, markCode: "AO2" },
                  { reasoning: "Growth is gradual and lower risk, funded from retained profit.", marks: 1, markCode: "AO2" },
                  { reasoning: "Slower than external growth; limited by own resources and finance.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Control + lower risk; slower, resource-limited growth.",
                commonErrors: ["Vague answers with no business link."],
              },
            },
            {
              id: "ebz11-u10-organic-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A local coffee shop wants to grow organically.",
              parts: [
                { label: "a", prompt: "Suggest two ways it could grow organically.", marks: 4 },
                { label: "b", prompt: "Explain one limitation of organic growth for this business.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Organic growth routes", statement: "More sales, new products, new markets." },
                ],
                steps: [
                  { reasoning: "(a) Raise sales of existing products — longer hours, more bookings, better marketing.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Develop new products (e.g. food) or open a second site / sell online to widen reach.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Growth limited by its own profit and cash flow — cannot expand as fast as a takeover could.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) More sales, new products/markets (b) limited by own resources",
                commonErrors: ["Suggestions that are actually external growth."],
              },
            },
            {
              id: "ebz11-u10-organic-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain why a growing business might prefer organic growth over buying another firm.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Growth choice", statement: "Control, risk and speed differ between organic and external growth." },
                ],
                steps: [
                  { reasoning: "Keeps full ownership and control — no new shareholders or hostile takeover.", marks: 2, markCode: "AO2" },
                  { reasoning: "Lower financial risk — no large acquisition cost or debt.", marks: 2, markCode: "AO2" },
                  { reasoning: "Builds on existing strengths and customer base gradually.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Control, lower risk, builds on existing strengths.",
                commonErrors: ["One-sided answer ignoring speed of external growth."],
              },
            },
            {
              id: "ebz11-u10-organic-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A profitable family restaurant has grown sales by 30% organically over two years and is considering its next step.",
              parts: [
                { label: "a", prompt: "Define organic growth and give two ways this restaurant could continue it.", marks: 4 },
                { label: "b", prompt: "Explain two reasons organic growth may suit a family-owned business.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the restaurant should switch to external growth.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Organic growth evaluation", statement: "Internal routes, control benefits, and judgement on external options." },
                ],
                steps: [
                  { reasoning: "(a) Growth from within the existing business.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Two routes: new dishes/catering, second site, online ordering, longer hours.", marks: 3, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Family keeps full control and ownership of decisions.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Lower risk; profits reinvested, no takeover debt or culture clash.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Balanced judgement — external growth gives speed but risks control/loss of identity.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Organic = internal growth; control and lower risk; external only if speed needed.",
                commonErrors: ["No evaluation in (c).", "Confusing organic with external growth."],
              },
            },
          ],
        },
        {
          id: "ebz11-u10-external",
          title: "External Growth Methods",
          skill: "Compare mergers, takeovers, joint ventures and franchising as routes to external growth.",
          sections: [
            {
              heading: "Mergers, takeovers and joint ventures",
              body: "**Merger**: two businesses combine into one new firm — usually friendly and agreed. **Takeover** (acquisition): one firm buys a controlling stake in another; may be hostile if unwanted. **Joint venture**: firms create a new shared business, sharing costs, risks, skills and profits — common for entering foreign markets.\n\n**Benefits of external growth**: fast — instant market share, customers, skills and distribution; economies of scale; removes a competitor; buys technology or brands.\n\n**Drawbacks**: expensive (may need large loans); loss of control for the acquired firm; culture clashes and integration problems; higher risk of failure; possible job losses.",
            },
            {
              heading: "Franchising",
              body: "A **franchise** lets a business (franchisee) buy the right to trade under an established brand and use its proven business model, often with training and support. The franchisee pays an initial fee plus ongoing royalties.\n\n**Benefits**: established brand and systems reduce risk; proven model; ongoing support; faster than building from scratch. **Drawbacks**: ongoing royalty payments; limited freedom to change the business; dependence on the franchisor's reputation; franchise failure hurts both parties.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Firm A (sales £1m) merges with Firm B (sales £2m). What is the combined sales figure and what does the merger achieve?",
            solution: "Combined sales = £3m. The new firm instantly has larger scale, more customers and possibly market power — faster growth than either could achieve alone.",
          },
          questions: [
            {
              id: "ebz11-u10-external-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is the difference between a merger and a takeover?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Both are identical — buying shares" },
                  { id: "b", text: "Merger = combine into new firm; takeover = one buys control of another" },
                  { id: "c", text: "Merger is hostile; takeover is friendly" },
                  { id: "d", text: "Takeover is always smaller than merger" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Merger vs takeover", statement: "Merger creates a new combined firm; takeover buys control." },
                ],
                steps: [
                  { reasoning: "Merger = new firm formed; takeover = one firm acquires control.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Merger combines; takeover buys control",
                commonErrors: ["Thinking hostile/friendly is the main distinction."],
              },
            },
            {
              id: "ebz11-u10-external-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Define a joint venture and state one benefit for the businesses involved.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Joint venture", statement: "Shared new business — shared costs, risks, skills and profits." },
                ],
                steps: [
                  { reasoning: "Definition: two+ firms set up a new shared business.", marks: 2, markCode: "AO1" },
                  { reasoning: "Benefit: share costs/risks or access new markets and skills.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Shared new business; shares costs, risks and skills.",
                commonErrors: ["Describing a merger instead."],
              },
            },
            {
              id: "ebz11-u10-external-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give two benefits and two drawbacks of a takeover for the business being acquired.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Takeover effects", statement: "Fast growth but loss of control and integration risk." },
                ],
                steps: [
                  { reasoning: "Benefit: instant access to new markets, customers and resources.", marks: 2, markCode: "AO2" },
                  { reasoning: "Benefit: economies of scale and stronger market position.", marks: 1, markCode: "AO2" },
                  { reasoning: "Drawback: loss of independence — decisions now made by new owners.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Faster growth/resources; but loss of control.",
                commonErrors: ["Listing only benefits or only drawbacks."],
              },
            },
            {
              id: "ebz11-u10-external-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A small UK software firm wants to enter the Indian market quickly.",
              parts: [
                { label: "a", prompt: "Suggest and explain one external growth method it could use.", marks: 4 },
                { label: "b", prompt: "Explain one drawback of that method.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "External growth choice", statement: "Joint venture suits foreign entry — shared risk and local knowledge." },
                ],
                steps: [
                  { reasoning: "(a) Joint venture with an Indian firm — shares costs and gives local market knowledge.", marks: 4, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Shared profits / loss of full control / partner may become competitor.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Joint venture — local knowledge, shared risk; but shared profits/control.",
                commonErrors: ["Unjustified method choice."],
              },
            },
            {
              id: "ebz11-u10-external-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Compare franchising and setting up a new business from scratch as ways to expand.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Franchise vs start-up", statement: "Franchise = proven brand, fees, less freedom; start-up = full control, more risk." },
                ],
                steps: [
                  { reasoning: "Franchise: proven brand and systems reduce risk; ongoing royalties and limited freedom.", marks: 3, markCode: "AO2" },
                  { reasoning: "Start-up: full control and keep all profit; but slow, risky, must build brand from zero.", marks: 3, markCode: "AO2" },
                ],
                finalAnswer: "Franchise = lower risk/less control; start-up = full control/more risk.",
                commonErrors: ["One-sided comparison."],
              },
            },
            {
              id: "ebz11-u10-external-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A national bakery chain with 40 shops is offered a takeover by a large food company.",
              parts: [
                { label: "a", prompt: "Define merger and takeover and explain why this is a takeover.", marks: 4 },
                { label: "b", prompt: "Explain two benefits the bakery might gain from the takeover.", marks: 4 },
                { label: "c", prompt: "Evaluate whether the bakery should accept the takeover.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Takeover evaluation", statement: "Fast growth and resources vs loss of control and integration risk." },
                ],
                steps: [
                  { reasoning: "(a) Merger = two firms combine into a new firm; takeover = one buys control of another.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(a) It is a takeover because the food company buys control — bakery becomes part of a bigger group.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Access to national distribution, finance and bulk-buying power.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Brand recognition and economies of scale.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Balanced judgement — accept if growth/resources outweigh loss of independence; reject if owners value control.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Takeover = bought control; gains scale/resources; judge against loss of control.",
                commonErrors: ["No evaluation in (c).", "Confusing merger with takeover."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u10-growth-notes", title: "Business growth — notes",
      summary: "Organic growth is internal and keeps control; external growth (mergers, takeovers, JVs, franchises) is faster but riskier and costs control.",
      sections: [
        { heading: "Key idea", body: "Organic = from within (sales, products, markets); external = joining or buying another firm." },
        { heading: "External methods", body: "Merger combines into a new firm; takeover buys control; joint venture shares a new business; franchise buys a proven brand model." },
        { heading: "Trade-off", body: "External growth is fast and gives scale but is expensive and risks loss of control, culture clashes and debt." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "ebz11-u10-lesson-10-2", code: "10-2",
      title: "Globalisation and Multinational Corporations",
      goal: "I CAN explain globalisation and the role of multinational corporations, and evaluate the benefits and drawbacks for businesses and stakeholders.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — External influences on business",
        "4BS0: globalisation and international business",
      ],
      vocabulary: [
        { term: "Globalisation", definition: "The growing integration of world markets — trade, investment and flows of people and information across borders." },
        { term: "Multinational corporation (MNC)", definition: "A large business that operates in many countries, e.g. through subsidiaries." },
        { term: "Offshoring", definition: "Moving production or services to another country, usually to cut costs." },
        { term: "Foreign direct investment (FDI)", definition: "A firm investing in building or buying operations in another country." },
        { term: "Economies of scale", definition: "Lower average costs achieved by producing on a larger scale." },
      ],
      concepts: [
        {
          id: "ebz11-u10-global",
          title: "Globalisation and MNCs",
          skill: "Explain what globalisation is, how MNCs operate internationally and why firms go global.",
          sections: [
            {
              heading: "What globalisation is",
              body: "**Globalisation** is the increasing interconnectedness of the world's economies — goods, services, capital, technology and people move across borders more freely. Drivers: falling transport and communication costs, trade agreements, containerisation, the internet, and multinational investment.\n\n**Multinational corporations (MNCs)** are firms operating in many countries — e.g. through overseas subsidiaries, factories or sales offices. They spread production and sales globally to reach more customers and cut costs.",
            },
            {
              heading: "Why businesses go global",
              body: "**Reasons**: access to new and larger markets; cheaper labour, materials or land abroad; access to raw materials and skills; spread risk across countries; benefit from economies of scale; follow customers or competitors overseas. **Risks**: exchange rate changes, different laws and cultures, political instability, complex management and logistics.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A shoe manufacturer opens factories in Vietnam and Vietnam-free sales offices in Germany. Explain two ways it benefits.",
            solution: "Lower labour costs in Vietnam reduce unit costs; German sales offices give direct access to a large European market — both are globalisation strategies.",
          },
          questions: [
            {
              id: "ebz11-u10-global-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is globalisation?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A business selling only in its home country" },
                  { id: "b", text: "The increasing integration of world markets and economies" },
                  { id: "c", text: "A government tax on imports" },
                  { id: "d", text: "A type of business merger" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Globalisation", statement: "Growing integration of world trade, investment and flows." },
                ],
                steps: [
                  { reasoning: "Globalisation = world markets becoming more interconnected.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Integration of world markets",
                commonErrors: ["Confusing with a single firm's exports."],
              },
            },
            {
              id: "ebz11-u10-global-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Define a multinational corporation (MNC) and give one example of how it operates abroad.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "MNC", statement: "Firm operating in many countries via subsidiaries, factories or offices." },
                ],
                steps: [
                  { reasoning: "Definition: large business operating in many countries.", marks: 2, markCode: "AO1" },
                  { reasoning: "Example: overseas factory, sales subsidiary or joint venture abroad.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Firm operating in many countries; e.g. foreign factories/sales offices.",
                commonErrors: ["Defining as just 'a big company'."],
              },
            },
            {
              id: "ebz11-u10-global-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Give two reasons why a business might become multinational.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Reasons to go global", statement: "New markets, lower costs, resources, risk spreading." },
                ],
                steps: [
                  { reasoning: "Access to new/larger markets and more customers.", marks: 2, markCode: "AO2" },
                  { reasoning: "Lower costs — cheaper labour/materials or access to raw materials abroad.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "New markets + lower costs/resources.",
                commonErrors: ["Only one reason."],
              },
            },
            {
              id: "ebz11-u10-global-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A UK phone maker is deciding whether to build a factory in India.",
              parts: [
                { label: "a", prompt: "Explain two benefits of this international expansion.", marks: 4 },
                { label: "b", prompt: "Explain one risk it faces.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "International expansion", statement: "Market access and cost savings vs exchange, legal and cultural risks." },
                ],
                steps: [
                  { reasoning: "(a) Access to India's huge market and cheaper labour reduces costs.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Economies of scale from larger production.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Exchange rate risk / different laws and culture / political instability.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Market access + cost savings; risk = exchange rates/laws/culture.",
                commonErrors: ["No risk identified in (b)."],
              },
            },
            {
              id: "ebz11-u10-global-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain two ways globalisation has made it easier for small businesses to trade internationally.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Globalisation enablers", statement: "Technology, cheaper transport and trade agreements." },
                ],
                steps: [
                  { reasoning: "Internet/e-commerce lets small firms sell online worldwide at low cost.", marks: 3, markCode: "AO2" },
                  { reasoning: "Cheaper transport and trade agreements/blocs reduce barriers to exporting.", marks: 3, markCode: "AO2" },
                ],
                finalAnswer: "E-commerce/internet + cheaper transport and trade agreements.",
                commonErrors: ["Vague answers not linked to small firms."],
              },
            },
            {
              id: "ebz11-u10-global-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A multinational corporation plans to move production from its home country to a low-cost country.",
              parts: [
                { label: "a", prompt: "Define globalisation and explain what makes a firm an MNC.", marks: 4 },
                { label: "b", prompt: "Explain two benefits the MNC gains from moving production abroad.", marks: 4 },
                { label: "c", prompt: "Evaluate the impact of this decision on the home country's workers.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Offshoring evaluation", statement: "Cost savings and scale vs job losses at home." },
                ],
                steps: [
                  { reasoning: "(a) Globalisation = increasing integration of world markets and economies.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(a) MNC = operates in many countries via subsidiaries, factories or offices.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Lower labour/material costs raise profit margins.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Access to new markets and economies of scale.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Job losses and wage pressure at home vs possible retraining/new roles — balanced judgement.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "MNC goes global for markets and cost savings; offshoring hurts home jobs.",
                commonErrors: ["Ignoring home-country impact in (c)."],
              },
            },
          ],
        },
        {
          id: "ebz11-u10-mnc-effects",
          title: "Benefits and Drawbacks of Globalisation",
          skill: "Evaluate the effects of globalisation and MNC activity on businesses, workers and countries.",
          sections: [
            {
              heading: "Benefits of globalisation",
              body: "**For businesses**: bigger markets and customers; lower costs through cheaper inputs; economies of scale; access to ideas, technology and skills; ability to spread risk across countries.\n\n**For countries/workers**: MNC investment creates jobs and tax revenue in poorer countries; consumers get cheaper, more varied goods; knowledge and technology transfer.",
            },
            {
              heading: "Drawbacks and criticism",
              body: "**For businesses**: intense global competition; exchange rate and political risks; complex management and logistics; supply chain dependence.\n\n**For stakeholders**: MNCs may exploit cheap labour and weak environmental rules abroad; jobs can be lost in the home country; profits may leave the host country; small local firms can be driven out. **Verdict**: globalisation creates winners and losers — exam answers should weigh benefits against costs for specific stakeholders.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "A clothing MNC shifts production to Bangladesh where wages are low. List one benefit and one drawback for each of: the MNC, Bangladeshi workers, UK consumers.",
            solution: "MNC: lower costs, higher profit. Workers: new jobs but low pay/long hours. UK consumers: cheaper clothes but possible job losses at home.",
          },
          questions: [
            {
              id: "ebz11-u10-mnc-effects-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which of these is a benefit of globalisation for a business?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Access to larger markets and cheaper inputs" },
                  { id: "b", text: "Guaranteed profits every year" },
                  { id: "c", text: "No competition from abroad" },
                  { id: "d", text: "Freedom from all government rules" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Globalisation benefits", statement: "Bigger markets, lower costs, scale, spread risk." },
                ],
                steps: [
                  { reasoning: "Larger markets and cheaper inputs are genuine benefits.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(a)** Larger markets and cheaper inputs",
                commonErrors: ["Choosing 'guaranteed profits' — too absolute."],
              },
            },
            {
              id: "ebz11-u10-mnc-effects-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Give one benefit and one drawback of globalisation for workers in a developing country.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Globalisation and workers", statement: "Jobs and income vs exploitation and job insecurity." },
                ],
                steps: [
                  { reasoning: "Benefit: new jobs and income from MNC investment.", marks: 2, markCode: "AO2" },
                  { reasoning: "Drawback: low wages, poor conditions or jobs lost to offshoring elsewhere.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Benefit = jobs; drawback = low pay/exploitation risk.",
                commonErrors: ["Only one side covered."],
              },
            },
            {
              id: "ebz11-u10-mnc-effects-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two drawbacks of globalisation for a business that stays small and local.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Globalisation pressures", statement: "Global competition and cheap imports squeeze local firms." },
                ],
                steps: [
                  { reasoning: "Faces competition from cheaper imported goods and global brands.", marks: 2, markCode: "AO2" },
                  { reasoning: "Customers can buy online from anywhere, reducing local loyalty; also may lose skilled staff to MNCs.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Global competition and loss of customers/staff to bigger firms.",
                commonErrors: ["Repeating business benefits instead of drawbacks."],
              },
            },
            {
              id: "ebz11-u10-mnc-effects-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "An MNC wants to build a factory in a country with weak labour laws.",
              parts: [
                { label: "a", prompt: "Explain two reasons the MNC might choose this location.", marks: 4 },
                { label: "b", prompt: "Explain one ethical issue this raises.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Offshore location choice", statement: "Low costs vs ethical/reputational risk." },
                ],
                steps: [
                  { reasoning: "(a) Very low wages and weak regulation cut production costs.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Government incentives/tax breaks and access to new markets.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Exploiting workers — poor conditions, child labour risk, damage to reputation if exposed.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Low costs/incentives chosen; ethical issue = worker exploitation.",
                commonErrors: ["No ethical point in (b)."],
              },
            },
            {
              id: "ebz11-u10-mnc-effects-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Evaluate whether globalisation is good for a country's economy overall.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Globalisation verdict", statement: "Weigh growth and investment against inequality, dependency and job losses." },
                ],
                steps: [
                  { reasoning: "Positives: FDI creates jobs, tax revenue and technology transfer; cheaper goods for consumers.", marks: 3, markCode: "AO2" },
                  { reasoning: "Negatives: profits repatriated, local firms outcompeted, inequality and environmental costs.", marks: 3, markCode: "AO3" },
                ],
                finalAnswer: "Balanced: growth and jobs vs inequality/dependency — judgement depends on country.",
                commonErrors: ["One-sided answer with no evaluation."],
              },
            },
            {
              id: "ebz11-u10-mnc-effects-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A government in a developing country is deciding whether to welcome a large MNC.",
              parts: [
                { label: "a", prompt: "Explain two benefits the country could gain from the MNC.", marks: 4 },
                { label: "b", prompt: "Explain two potential drawbacks for the country.", marks: 4 },
                { label: "c", prompt: "Make a justified recommendation on whether to welcome it.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "MNC impact on host country", statement: "Jobs/investment vs exploitation/dependency." },
                ],
                steps: [
                  { reasoning: "(a) Jobs and training for local workers.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Tax revenue and infrastructure development; technology transfer.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Profits may leave the country (repatriation) limiting local gain.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Local firms may be outcompeted; possible exploitation of weak labour/environmental laws.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Recommend welcome with conditions (tax, labour standards) — balanced judgement.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Jobs/tax vs profit leakage and exploitation risk — welcome with safeguards.",
                commonErrors: ["No recommendation in (c)."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u10-global-notes", title: "Globalisation and MNCs — notes",
      summary: "Globalisation integrates world markets; MNCs operate in many countries. Benefits: markets, costs, scale. Drawbacks: risk, exploitation, job losses.",
      sections: [
        { heading: "Key idea", body: "MNCs go global for new markets, cheaper inputs and economies of scale." },
        { heading: "Benefits", body: "Businesses gain customers and lower costs; countries gain jobs, tax and technology." },
        { heading: "Drawbacks", body: "Exchange/political risk for firms; exploitation, dependency and home job losses for stakeholders." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "ebz11-u10-lesson-10-3", code: "10-3",
      title: "International Trade",
      goal: "I CAN explain exports, imports, exchange rates and trade barriers, and evaluate their effects on businesses.",
      standards: [
        "Edexcel IGCSE Business 4BS0 — External influences on business",
        "4BS0: international trade and exchange rates",
      ],
      vocabulary: [
        { term: "Export", definition: "Goods or services sold to buyers in another country." },
        { term: "Import", definition: "Goods or services bought from another country." },
        { term: "Exchange rate", definition: "The price of one currency in terms of another." },
        { term: "Appreciation", definition: "A rise in a currency's value against other currencies." },
        { term: "Depreciation", definition: "A fall in a currency's value against other currencies." },
        { term: "Tariff", definition: "A tax on imported goods." },
        { term: "Quota", definition: "A limit on the quantity of a good that can be imported." },
        { term: "Trade bloc", definition: "Group of countries that agree to reduce or remove trade barriers between them." },
      ],
      concepts: [
        {
          id: "ebz11-u10-exchange",
          title: "Exports, Imports and Exchange Rates",
          skill: "Explain how exchange rate changes affect exporters and importers.",
          sections: [
            {
              heading: "Trade flows",
              body: "**Exports** earn foreign currency for the home economy; **imports** spend it. A business that sells abroad is an exporter; one buying foreign inputs or goods is an importer. Trade can be affected by trade agreements, transport costs, tariffs and consumer tastes.",
            },
            {
              heading: "Exchange rates",
              body: "An **exchange rate** is the price of one currency in another (e.g. £1 = USD 1.50).\n\n**Depreciation** (currency falls, e.g. £1 = USD 1.20): exports become cheaper abroad → exports rise; imports become more expensive → imports fall. **Appreciation** (currency rises, e.g. £1 = USD 1.80): exports become pricier → exports may fall; imports cheaper → imports may rise.\n\n**Example**: a UK exporter selling a £100 product earns USD 150 at £1=USD 1.50. If sterling appreciates to £1=USD 1.80, the same product earns USD 180 — but a US rival's price may now look cheaper, so competitiveness can fall.",
            },
          ],
          keyFormulas: [
            { name: "Exchange rate effect", statement: "Depreciation ↑ exports, ↓ imports; appreciation ↓ exports, ↑ imports." },
          ],
          workedExample: {
            problem: "A UK importer buys components priced at USD 60 each. Calculate the sterling cost when £1 = USD 1.50 and when £1 = USD 2.00.",
            solution: "At USD 1.50: USD 60 ÷ 1.50 = £40. At USD 2.00: USD 60 ÷ 2.00 = £30 — depreciation of sterling raised the cost from £30 to £40.",
          },
          questions: [
            {
              id: "ebz11-u10-exchange-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is an exchange rate?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A tax on imported goods" },
                  { id: "b", text: "The price of one currency in terms of another" },
                  { id: "c", text: "The total value of exports" },
                  { id: "d", text: "A limit on imports" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Exchange rate", statement: "Price of one currency expressed in another." },
                ],
                steps: [
                  { reasoning: "Exchange rate = relative price of currencies.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Price of one currency in another",
                commonErrors: ["Confusing with tariffs/quotas."],
              },
            },
            {
              id: "ebz11-u10-exchange-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "A UK importer buys goods priced at USD 90 each. The exchange rate is £1 = USD 1.50. What is the cost in pounds?",
              response: {
                type: "numeric",
                parts: [{ label: "Cost (£)", answer: 60 }],
              },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Currency conversion", statement: "USD 90 ÷ 1.50 = £60." },
                ],
                steps: [
                  { reasoning: "Divide dollars by the rate: 90 ÷ 1.5 = 60.", marks: 3, markCode: "AO1" },
                ],
                finalAnswer: "£60",
                commonErrors: ["Multiplied instead of divided."],
              },
            },
            {
              id: "ebz11-u10-exchange-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain the effect of a depreciation of sterling on UK exporters and importers.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Exchange rate effects", statement: "Depreciation makes exports cheaper abroad and imports dearer at home." },
                ],
                steps: [
                  { reasoning: "Exports cheaper for foreign buyers → exports likely rise.", marks: 2, markCode: "AO2" },
                  { reasoning: "Imports more expensive in sterling → imports likely fall.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Exports ↑, imports ↓ after depreciation.",
                commonErrors: ["Reversing the effects."],
              },
            },
            {
              id: "ebz11-u10-exchange-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A UK exporter sells bikes for £500 each to customers in the eurozone.",
              parts: [
                { label: "a", prompt: "Explain what happens to its competitiveness if sterling depreciates.", marks: 4 },
                { label: "b", prompt: "Explain one drawback if sterling appreciates instead.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Exchange rate and competitiveness", statement: "Weaker currency = cheaper exports; stronger = dearer exports." },
                ],
                steps: [
                  { reasoning: "(a) Depreciation makes £500 cheaper in euros → exports more competitive, demand rises.", marks: 4, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Appreciation makes bikes dearer in euros → demand may fall.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Depreciation helps exports; appreciation hurts them.",
                commonErrors: ["Confusing exporter and importer effects."],
              },
            },
            {
              id: "ebz11-u10-exchange-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A UK supermarket imports 40% of its fresh produce. Analyse the impact on it if sterling depreciates sharply.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Importer exposure", statement: "Depreciation raises import costs — prices up or margins squeezed." },
                ],
                steps: [
                  { reasoning: "Imported produce becomes more expensive in sterling → costs rise.", marks: 2, markCode: "AO2" },
                  { reasoning: "Supermarket must raise prices (risk losing customers) or accept lower margins.", marks: 2, markCode: "AO2" },
                  { reasoning: "Could switch to more UK suppliers — but availability/price may be worse.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "Higher import costs → price rises or margin squeeze; may switch suppliers.",
                commonErrors: ["Only stating 'costs rise' with no consequence."],
              },
            },
            {
              id: "ebz11-u10-exchange-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "A UK car manufacturer exports to the USA and imports steel priced in dollars.",
              parts: [
                { label: "a", prompt: "Define export and import and identify which activity is which for this firm.", marks: 4 },
                { label: "b", prompt: "Explain the effect on the firm if sterling depreciates against both the dollar and the euro.", marks: 4 },
                { label: "c", prompt: "Evaluate the overall impact on the firm's profits.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Mixed trade exposure", statement: "Depreciation helps exports but hurts import-dependent costs — net effect needs judgement." },
                ],
                steps: [
                  { reasoning: "(a) Export = sold abroad (cars to USA); import = bought abroad (dollar-priced steel).", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Exports cheaper abroad → car sales/competitiveness may rise.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Imported steel costs more in sterling → production costs rise.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Net effect depends on whether export gains outweigh cost rises — justified judgement.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Depreciation boosts exports but raises import costs — net profit effect depends on balance.",
                commonErrors: ["Ignoring one side of the trade in (b).", "No judgement in (c)."],
              },
            },
          ],
        },
        {
          id: "ebz11-u10-barriers",
          title: "Trade Barriers and Trade Blocs",
          skill: "Explain tariffs, quotas and embargoes and evaluate the effects of trade blocs on businesses.",
          sections: [
            {
              heading: "Types of trade barrier",
              body: "**Tariff**: a tax on imports — raises the price of foreign goods, protecting domestic producers but raising prices for consumers. **Quota**: a physical limit on import volumes — same protective aim. **Embargo**: a total ban on trade with a country, usually for political reasons. **Non-tariff barriers**: rules, standards and red tape that make importing harder.\n\nGovernments use barriers to protect domestic jobs and industries, raise revenue, or respond to unfair practices or political disputes.",
            },
            {
              heading: "Trade blocs",
              body: "A **trade bloc** is a group of countries agreeing to reduce or remove barriers between members — e.g. the EU single market, USMCA (US-Mexico-Canada), ASEAN. **Benefits for member businesses**: free movement of goods, services, capital and often labour; bigger markets; economies of scale; lower prices via competition. **Drawbacks**: common external tariffs on non-members; rules may not suit every member; dependence on bloc decisions. Businesses outside blocs face tariffs and quotas when selling in.",
            },
          ],
          keyFormulas: [],
          workedExample: {
            problem: "Country X imposes a 20% tariff on imported cars. A foreign car costs USD 20,000 before duty. What is the duty and the new price?",
            solution: "Duty = 20% × USD 20,000 = USD 4,000. New price = USD 24,000 — less competitive against domestic cars.",
          },
          questions: [
            {
              id: "ebz11-u10-barriers-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a tariff?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A limit on the quantity of imports" },
                  { id: "b", text: "A tax on imported goods" },
                  { id: "c", text: "A total ban on trade" },
                  { id: "d", text: "A free-trade agreement" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Tariff", statement: "Tax on imports that raises their price." },
                ],
                steps: [
                  { reasoning: "Tariff = tax on imports.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** A tax on imported goods",
                commonErrors: ["Confusing tariff with quota."],
              },
            },
            {
              id: "ebz11-u10-barriers-q2",
              difficulty: "foundation",
              totalMarks: 3,
              stem: "Define a quota and give one reason governments use trade barriers.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Quota", statement: "Limit on quantity of imports." },
                  { kind: "context", name: "Barriers rationale", statement: "Protect domestic jobs/industries." },
                ],
                steps: [
                  { reasoning: "Quota = limit on the volume of a good that can be imported.", marks: 2, markCode: "AO1" },
                  { reasoning: "Reason: protect domestic industries/jobs or raise revenue.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Quantity limit; used to protect domestic industry.",
                commonErrors: ["Defining quota as a tax."],
              },
            },
            {
              id: "ebz11-u10-barriers-q3",
              difficulty: "core",
              totalMarks: 4,
              stem: "Explain two ways a tariff affects an exporting business selling into the taxing country.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Tariff effects", statement: "Import price rises — exporter must absorb cost or lose sales." },
                ],
                steps: [
                  { reasoning: "Foreign price rises by the tariff amount → product less competitive vs domestic rivals.", marks: 2, markCode: "AO2" },
                  { reasoning: "Exporter must cut its own price/margin, find tariff-free routes, or lose customers.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Higher landed price → lower competitiveness; must cut margin or lose sales.",
                commonErrors: ["Thinking tariff only affects the importing government."],
              },
            },
            {
              id: "ebz11-u10-barriers-q4",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A UK fashion brand wants to sell in two markets: Country A (EU member) and Country B (non-member with 15% tariff on clothing).",
              parts: [
                { label: "a", prompt: "Explain the advantage of selling in Country A.", marks: 4 },
                { label: "b", prompt: "Explain the disadvantage of selling in Country B.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Trade bloc vs tariff", statement: "Bloc membership removes internal barriers; non-members face tariffs." },
                ],
                steps: [
                  { reasoning: "(a) EU single market: no tariffs on UK goods, free movement, huge customer base.", marks: 4, markCode: "AO2", part: "a" },
                  { reasoning: "(b) 15% tariff raises prices → less competitive unless brand absorbs cost.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "A = free trade access; B = 15% tariff reduces competitiveness.",
                commonErrors: ["Not linking the tariff to price/competitiveness."],
              },
            },
            {
              id: "ebz11-u10-barriers-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Evaluate the use of tariffs by a government to protect its domestic car industry.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Tariff evaluation", statement: "Protects jobs/prices but raises consumer costs and invites retaliation." },
                ],
                steps: [
                  { reasoning: "Pros: protects domestic jobs and firms; keeps money in the economy; may build an infant industry.", marks: 3, markCode: "AO2" },
                  { reasoning: "Cons: consumers pay higher prices; less competition reduces efficiency; trading partners may retaliate.", marks: 3, markCode: "AO3" },
                ],
                finalAnswer: "Protects jobs but raises prices and risks retaliation — balanced judgement needed.",
                commonErrors: ["One-sided evaluation."],
              },
            },
            {
              id: "ebz11-u10-barriers-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Two countries sign a trade agreement removing tariffs between them. Country C is not a member.",
              parts: [
                { label: "a", prompt: "Define trade bloc and tariff and explain how they differ.", marks: 4 },
                { label: "b", prompt: "Explain two benefits member businesses gain from the agreement.", marks: 4 },
                { label: "c", prompt: "Evaluate the impact on an exporter in Country C selling to the bloc.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Trade bloc effects", statement: "Members trade freely internally; outsiders face barriers." },
                ],
                steps: [
                  { reasoning: "(a) Trade bloc = group removing barriers internally; tariff = tax on imports.", marks: 4, markCode: "AO1", part: "a" },
                  { reasoning: "(b) No tariffs between members → cheaper cross-border sales and bigger market.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Easier access to partner inputs/suppliers and economies of scale.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Country C exporter faces tariffs/quotas at bloc border → less competitive; may need local production or price cuts.", marks: 2, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "Bloc = free internal trade; members gain access, outsiders face barriers.",
                commonErrors: ["Ignoring Country C in (c)."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u10-trade-notes", title: "International trade — notes",
      summary: "Exchange rates swing trade flows: depreciation helps exporters, hurts importers. Tariffs, quotas and embargoes protect domestic industry; trade blocs remove barriers internally.",
      sections: [
        { heading: "Key idea", body: "Depreciation ↑ exports and ↓ imports; appreciation does the reverse." },
        { heading: "Barriers", body: "Tariff = tax, quota = quantity limit, embargo = ban; used to protect domestic industry." },
        { heading: "Trade blocs", body: "Members trade freely internally; non-members face tariffs and quotas." },
      ],
    },
  },
];

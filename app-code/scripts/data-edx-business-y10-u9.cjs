module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "ebz10-u9-lesson-9-1", code: "9-1",
      title: "Why Businesses Go Global",
      goal: "I CAN explain why businesses expand internationally and identify the barriers they face.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences: globalisation and international business"],
      vocabulary: [
        { term: "Globalisation", definition: "The increasing interconnectedness of world economies through trade, investment and communication." },
        { term: "International trade", definition: "The exchange of goods and services between countries." },
        { term: "Market saturation", definition: "When demand for a product in a market is fully met and growth stalls." },
        { term: "Economies of scale", definition: "Lower average costs achieved by producing on a larger scale." },
        { term: "Trade barrier", definition: "A restriction, such as a tariff or quota, on international trade." },
      ],
      concepts: [
        {
          id: "ebz10-u9-global-drivers",
          title: "Drivers of Globalisation",
          skill: "Explain why businesses expand into foreign markets and the barriers they face.",
          sections: [
            {
              heading: "What is globalisation?",
              body: "**Globalisation** is the process by which economies, markets and cultures become increasingly interconnected. Falling transport and communication costs, trade agreements and multinational companies have made it easier for businesses to sell abroad.\n\nFor a business, going global means selling products or services in other countries — through exports, licensing, joint ventures or setting up subsidiaries.",
            },
            {
              heading: "Why businesses go global",
              body: "**Market reasons**: the home market may be **saturated** — demand is met and growth has stalled — so new customers must be found abroad. Larger markets also allow **economies of scale**, lowering average costs.\n\n**Competitive and financial reasons**: rivals may already be trading internationally, so the firm must follow or lose share. A stronger currency at home makes exports cheaper for foreign buyers. Businesses also spread risk by not depending on one market, and may access cheaper labour or raw materials overseas.",
            },
            {
              heading: "Barriers to going global",
              body: "**Trade barriers**: tariffs (taxes on imports), quotas (limits on quantities) and embargoes restrict trade. **Costs**: transport, packaging and insurance raise prices. **Other barriers**: different languages and cultures require adaptation; exchange-rate movements can wipe out profits; foreign laws, regulations and payment risks differ from home; protectionist governments may favour local firms.",
            },
          ],
          keyFormulas: [
            { name: "Market saturation", statement: "Home demand fully met → growth requires new markets" },
            { name: "Economies of scale", statement: "Higher output → lower average cost per unit" },
          ],
          workedExample: {
            problem: "A UK bakery sells out every day and cannot expand its shop. Its main rival now sells online to France. What pressures push the bakery to go global?",
            solution: "Home market is saturated (no room to grow) and the rival's international sales threaten its position — so exporting or selling online abroad offers new customers, economies of scale and protection against losing share.",
          },
          questions: [
            {
              id: "ebz10-u9-drivers-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which statement best defines globalisation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A tax charged on goods imported into a country" },
                { id: "b", text: "A limit on the quantity of goods a country may import" },
                { id: "c", text: "Increasing interconnectedness of world economies through trade and investment" },
                { id: "d", text: "A merger between two companies in the same country" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Globalisation", statement: "Increasing interconnectedness of world economies." }],
                steps: [{ reasoning: "Globalisation = interconnected world trade and investment, not tariffs, quotas or mergers.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Interconnectedness of world economies",
                commonErrors: ["Confused with a trade barrier."],
              },
            },
            {
              id: "ebz10-u9-drivers-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three reasons why a successful domestic business might expand into foreign markets.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Motives for international expansion", statement: "New markets, scale, competition, cost advantages." }],
                steps: [
                  { reasoning: "Home market saturated — needs new customers.", marks: 1, markCode: "AO1" },
                  { reasoning: "Larger markets give economies of scale / lower costs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Follows competitors or spreads risk / cheaper resources.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "New markets, economies of scale, competitive pressure/risk spreading.",
                commonErrors: ["Only one reason.", "Vague answers without business link."],
              },
            },
            {
              id: "ebz10-u9-drivers-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how increased competition can push a business to trade internationally.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Competition as a driver", statement: "Rivals' global reach forces a firm to expand or lose share." }],
                steps: [
                  { reasoning: "Competitors begin selling abroad and gain new customers.", marks: 1, markCode: "AO2" },
                  { reasoning: "The firm risks losing market share at home and abroad.", marks: 1, markCode: "AO2" },
                  { reasoning: "To defend position it must match rivals' reach.", marks: 1, markCode: "AO2" },
                  { reasoning: "International sales can also bring cost/scale advantages.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Rivals going global threatens market share, so the firm must follow to compete and gain scale.",
                commonErrors: ["No link between competition and expansion."],
              },
            },
            {
              id: "ebz10-u9-drivers-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A small furniture maker wants to export to another country.",
              parts: [
                { label: "a", prompt: "State two trade barriers the firm may face.", marks: 2 },
                { label: "b", prompt: "Explain how each barrier could reduce the firm's export sales.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Trade barriers", statement: "Tariffs, quotas, transport costs, cultural and legal differences." }],
                steps: [
                  { reasoning: "(a) Tariffs or quotas on imported goods.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) High transport costs or cultural/language differences.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Tariffs raise the foreign price, cutting demand for exports.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) High transport costs make the product uncompetitive abroad.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Language/cultural differences reduce appeal or cause marketing errors.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) tariffs/quotas, transport or cultural barriers (b) higher prices and weaker demand abroad",
                commonErrors: ["Barriers not linked to sales effect."],
              },
            },
            {
              id: "ebz10-u9-drivers-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A profitable national coffee chain is considering opening stores in two neighbouring countries.",
              parts: [
                { label: "a", prompt: "Explain two reasons why the chain might seek new markets abroad.", marks: 2 },
                { label: "b", prompt: "Evaluate one advantage and one disadvantage for the chain of going global.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "International expansion evaluation", statement: "Growth and scale versus risk and adaptation costs." }],
                steps: [
                  { reasoning: "(a) Home market saturated — new countries offer growth.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Larger scale lowers costs and counters competitors.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Advantage: access to new customers and revenue streams.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Disadvantage: barriers such as tariffs, language and exchange-rate risk raise costs.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) growth beyond home market, economies of scale (b) new customers vs tariffs/cultural/exchange risks",
                commonErrors: ["Only one side evaluated in (b)."],
              },
            },
            {
              id: "ebz10-u9-drivers-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A clothing firm currently sells only in its home country and is debating whether to expand abroad.",
              parts: [
                { label: "a", prompt: "Define globalisation.", marks: 2 },
                { label: "b", prompt: "Give two reasons why the firm might expand internationally.", marks: 2 },
                { label: "c", prompt: "Identify two barriers to international expansion.", marks: 2 },
                { label: "d", prompt: "Explain one benefit and one cost of globalisation for the firm's home country.", marks: 2 },
                { label: "e", prompt: "Reach a justified conclusion on whether the firm should expand.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation decision-making", statement: "Weigh growth and scale against barriers and risks." }],
                steps: [
                  { reasoning: "(a) Increasing interconnectedness of world economies via trade and investment.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Home market saturated / economies of scale / competitive pressure.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Tariffs and quotas, or transport costs and cultural differences.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Benefit: jobs and export earnings; cost: competition may hurt local firms or jobs move abroad.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement weighing growth benefits against barriers and risks.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Globalisation defined; expansion weighed against barriers; justified conclusion.",
                commonErrors: ["No judgement in (e).", "Benefits and costs not explained."],
              },
            },
          ],
        },
        {
          id: "ebz10-u9-expand-methods",
          title: "Methods of International Expansion",
          skill: "Compare exporting, licensing, joint ventures and wholly-owned subsidiaries.",
          sections: [
            {
              heading: "Low-control methods: exporting and licensing",
              body: "**Exporting**: selling goods produced at home to foreign customers — lowest risk and cost, but the firm has little control over marketing abroad and transport costs can be high.\n\n**Licensing and franchising**: a foreign firm pays for the right to make or sell the product under agreed terms. The licensor earns royalties with little investment, but risks losing control of quality and creating a future competitor. Franchising is licensing of a whole business format (e.g. fast-food chains).",
            },
            {
              heading: "Higher-control methods: joint ventures and subsidiaries",
              body: "**Joint venture**: two firms from different countries set up a new business together, sharing costs, risks and local knowledge — but profits and control are shared.\n\n**Wholly-owned subsidiary**: the firm sets up or buys a business it fully owns abroad. Maximum control and potential profit, but requires the most investment and bears all the risk. Larger, experienced firms usually choose this route.",
            },
            {
              heading: "Choosing a method",
              body: "Small firms with limited funds usually start with **exporting** or **licensing** — low risk, low investment. Firms wanting local market knowledge without full risk may use **joint ventures**. Large multinationals with abundant capital often go for **wholly-owned subsidiaries** to keep full control. The choice depends on size, resources, risk appetite and how much control the firm wants over quality and branding.",
            },
          ],
          keyFormulas: [
            { name: "Risk–control trade-off", statement: "Exporting = low risk, low control; subsidiary = high risk, high control" },
            { name: "Licensing", statement: "Foreign firm pays royalties for production/selling rights" },
          ],
          workedExample: {
            problem: "A small UK crisp brand wants to sell in Japan but cannot afford a factory there. Which method fits best and why?",
            solution: "Licensing or franchising — a Japanese firm pays royalties to make and sell the crisps, giving market access without the capital cost or risk of building a subsidiary.",
          },
          questions: [
            {
              id: "ebz10-u9-methods-q1", difficulty: "foundation", totalMarks: 2,
              stem: "A foreign company pays a UK firm royalties for the right to manufacture its product abroad. What is this method called?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Exporting" },
                { id: "b", text: "A joint venture" },
                { id: "c", text: "Licensing" },
                { id: "d", text: "A wholly-owned subsidiary" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Licensing", statement: "Selling rights to a foreign firm for royalties." }],
                steps: [{ reasoning: "Paying royalties for rights to make/sell = licensing.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Licensing",
                commonErrors: ["Confused with franchising a whole format or exporting finished goods."],
              },
            },
            {
              id: "ebz10-u9-methods-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three methods a business can use to enter a foreign market.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Market entry methods", statement: "Exporting, licensing/franchising, joint ventures, subsidiaries." }],
                steps: [
                  { reasoning: "Exporting goods produced at home.", marks: 1, markCode: "AO1" },
                  { reasoning: "Licensing or franchising rights to a foreign firm.", marks: 1, markCode: "AO1" },
                  { reasoning: "Joint venture or wholly-owned subsidiary.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Exporting, licensing/franchising, joint venture, subsidiary.",
                commonErrors: ["Only one method.", "Methods confused."],
              },
            },
            {
              id: "ebz10-u9-methods-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between exporting and licensing as ways of entering foreign markets.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Exporting vs licensing", statement: "Sell finished goods vs sell rights; control and risk differ." }],
                steps: [
                  { reasoning: "Exporting: the firm sells its own goods abroad — keeps control of production.", marks: 1, markCode: "AO2" },
                  { reasoning: "Exporting bears transport costs and has less control over foreign marketing.", marks: 1, markCode: "AO2" },
                  { reasoning: "Licensing: a foreign firm makes/sells the product and pays royalties.", marks: 1, markCode: "AO2" },
                  { reasoning: "Licensing needs little investment but risks loss of quality control and future competition.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Exporting = sell own goods abroad; licensing = sell rights for royalties — different control/risk profiles.",
                commonErrors: ["No comparison, only one method described."],
              },
            },
            {
              id: "ebz10-u9-methods-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A small craft-jewellery business wants to sell overseas for the first time.",
              parts: [
                { label: "a", prompt: "State two low-risk methods of entering foreign markets.", marks: 2 },
                { label: "b", prompt: "Explain why the business might choose exporting.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Entry method choice", statement: "Limited funds favour low-investment, low-risk methods." }],
                steps: [
                  { reasoning: "(a) Exporting and licensing/franchising.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Or joint ventures as a moderate-risk option.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) No need to build foreign factories — low capital required.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Keeps full control of the product and brand.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Easy to test demand before committing more resources.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) exporting, licensing/franchising (b) low cost, keeps control, tests demand",
                commonErrors: ["High-investment method suggested for a small firm."],
              },
            },
            {
              id: "ebz10-u9-methods-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A UK electronics firm is choosing between forming a joint venture with a Brazilian company and setting up a wholly-owned subsidiary.",
              parts: [
                { label: "a", prompt: "Describe what a joint venture is.", marks: 2 },
                { label: "b", prompt: "Compare the joint venture with a wholly-owned subsidiary in terms of control and risk.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Joint venture vs subsidiary", statement: "Shared ownership vs full ownership — control, risk, profit." }],
                steps: [
                  { reasoning: "(a) Two firms from different countries set up a new business together.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Joint venture: control and profits are shared between partners.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Joint venture: costs and risks are shared, and local knowledge helps.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Subsidiary: full control and all profits kept by the UK firm.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Subsidiary: bears all costs and risks — needs the most investment.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) shared new business (b) JV shares control/risk/profit; subsidiary keeps all control but bears all risk",
                commonErrors: ["Control and risk not both compared."],
              },
            },
            {
              id: "ebz10-u9-methods-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An established UK food company wants maximum control over its brand in Asia.",
              parts: [
                { label: "a", prompt: "Define exporting.", marks: 2 },
                { label: "b", prompt: "Define licensing.", marks: 2 },
                { label: "c", prompt: "Describe a joint venture.", marks: 2 },
                { label: "d", prompt: "Describe a wholly-owned subsidiary.", marks: 2 },
                { label: "e", prompt: "Recommend and justify the best method for this company.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Market entry methods", statement: "Control rises from exporting to subsidiaries; risk rises too." }],
                steps: [
                  { reasoning: "(a) Selling goods produced at home to foreign customers.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Allowing a foreign firm to make/sell the product for royalties.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Two firms jointly set up a new business abroad, sharing ownership.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) A foreign business fully owned and controlled by the firm.", marks: 2, markCode: "AO1", part: "d" },
                  { reasoning: "(e) Wholly-owned subsidiary justified by the need for maximum brand control and resources to fund it.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Four methods defined; subsidiary recommended for control.",
                commonErrors: ["Recommendation without justification.", "Definitions inaccurate."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u9-91-notes", title: "Why businesses go global — notes",
      summary: "Globalisation = interconnected world economies. Firms expand for new markets, scale and competition; entry methods range from exporting to subsidiaries.",
      sections: [
        { heading: "Drivers", body: "Saturated home markets, economies of scale, competitive pressure, cheaper resources and risk spreading push firms abroad." },
        { heading: "Barriers", body: "Tariffs, quotas, transport costs, language/culture differences, exchange-rate risk and foreign laws." },
        { heading: "Entry methods", body: "Exporting (low risk, low control) → licensing/franchising → joint ventures → wholly-owned subsidiaries (high risk, high control). Small firms start low; multinationals go high." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "ebz10-u9-lesson-9-2", code: "9-2",
      title: "International Trade and Exchange Rates",
      goal: "I CAN explain free trade, protectionism and the effect of exchange-rate changes on businesses.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences: trade and exchange rates"],
      vocabulary: [
        { term: "Free trade", definition: "Trade between countries without tariffs, quotas or other restrictions." },
        { term: "Protectionism", definition: "Government policies restricting imports to protect domestic industries." },
        { term: "Tariff", definition: "A tax on imported goods." },
        { term: "Quota", definition: "A limit on the quantity of a good that may be imported." },
        { term: "Exchange rate", definition: "The price of one currency in terms of another." },
        { term: "Appreciation", definition: "A rise in the value of a currency relative to others." },
      ],
      concepts: [
        {
          id: "ebz10-u9-trade-protection",
          title: "Free Trade and Protectionism",
          skill: "Compare free trade and protectionist policies and their effects on business.",
          sections: [
            {
              heading: "Free trade",
              body: "**Free trade** removes tariffs, quotas and other barriers, letting goods flow at world prices. It encourages **specialisation** (countries produce what they do best), gives consumers lower prices and more choice, and lets efficient firms reach larger markets. Trade agreements such as free-trade areas reduce barriers between member countries.",
            },
            {
              heading: "Protectionist methods",
              body: "**Tariffs** tax imports, raising their price. **Quotas** cap the quantity imported. **Subsidies** give domestic producers financial help so they can charge lower prices. **Embargoes** ban trade with a country entirely, often for political reasons. **Administrative barriers** (complex paperwork, product standards) can also slow imports.",
            },
            {
              heading: "Arguments for and against protectionism",
              body: "**For**: protects new or vulnerable industries ('infant industries'), saves jobs in declining sectors, blocks unfairly cheap imports, can be used as leverage in negotiations, protects strategic industries. **Against**: raises prices for consumers, invites retaliation (trade wars), protects inefficient firms, reduces competition and choice, can cost jobs in export industries.",
            },
          ],
          keyFormulas: [
            { name: "Tariff", statement: "Import tax → higher import price, protects domestic sales" },
            { name: "Quota", statement: "Quantity limit on imports" },
            { name: "Subsidy", statement: "Government support lowering domestic firms' costs" },
          ],
          workedExample: {
            problem: "A government imposes a 20% tariff on imported steel. What happens to domestic steel prices and imports?",
            solution: "Imported steel becomes 20% more expensive, so domestic steel looks cheaper by comparison — imports fall and domestic producers gain sales, but buyers pay higher prices.",
          },
          questions: [
            {
              id: "ebz10-u9-trade-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a tariff?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A limit on the quantity of imports" },
                { id: "b", text: "A tax on imported goods" },
                { id: "c", text: "Government money given to domestic firms" },
                { id: "d", text: "A complete ban on trade with a country" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Tariff", statement: "Tax on imported goods." }],
                steps: [{ reasoning: "Tariff = import tax; quota = quantity limit; subsidy = support; embargo = ban.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Tax on imported goods",
                commonErrors: ["Confused with quota or subsidy."],
              },
            },
            {
              id: "ebz10-u9-trade-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three methods of protectionism a government might use.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Protectionist methods", statement: "Tariffs, quotas, subsidies, embargoes, red tape." }],
                steps: [
                  { reasoning: "Tariffs — taxes on imports.", marks: 1, markCode: "AO1" },
                  { reasoning: "Quotas — limits on import quantities.", marks: 1, markCode: "AO1" },
                  { reasoning: "Subsidies or embargoes / administrative barriers.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Tariffs, quotas, subsidies, embargoes, administrative barriers.",
                commonErrors: ["Only tariffs named.", "Free-trade measures listed."],
              },
            },
            {
              id: "ebz10-u9-trade-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a tariff affects domestic consumers and domestic producers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Tariff effects", statement: "Higher import prices protect domestic firms but raise consumer prices." }],
                steps: [
                  { reasoning: "Tariff raises the price of imported goods.", marks: 1, markCode: "AO2" },
                  { reasoning: "Consumers face higher prices and less choice.", marks: 1, markCode: "AO2" },
                  { reasoning: "Imports become less competitive — domestic producers gain sales.", marks: 1, markCode: "AO2" },
                  { reasoning: "Domestic jobs may be protected but at higher cost to buyers.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Consumers pay more; domestic producers gain protected sales.",
                commonErrors: ["Only one group affected mentioned."],
              },
            },
            {
              id: "ebz10-u9-trade-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Two neighbouring countries remove all tariffs between them but keep tariffs on imports from elsewhere.",
              parts: [
                { label: "a", prompt: "Name this type of trade arrangement.", marks: 1 },
                { label: "b", prompt: "Give one benefit of free trade between the two countries.", marks: 2 },
                { label: "c", prompt: "Explain one cost of free trade for workers in inefficient industries.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Free trade effects", statement: "Efficiency and choice rise; uncompetitive jobs are at risk." }],
                steps: [
                  { reasoning: "(a) A free-trade area / customs union.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Lower prices and more choice for consumers / specialisation gains.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Cheap imports undercut inefficient firms, threatening jobs.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) free-trade area (b) lower prices/choice or efficiency (c) job losses in uncompetitive industries",
                commonErrors: ["Arrangement misnamed.", "Costs ignored."],
              },
            },
            {
              id: "ebz10-u9-trade-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A government is considering whether to protect its domestic car industry with tariffs and subsidies.",
              parts: [
                { label: "a", prompt: "Explain two arguments in favour of protecting the car industry.", marks: 3 },
                { label: "b", prompt: "Evaluate one argument against protectionism.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Protectionism debate", statement: "Protects jobs/infant industries but raises prices and invites retaliation." }],
                steps: [
                  { reasoning: "(a) Protects domestic jobs in the car industry.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Gives an infant industry time to develop and compete.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Strategic/security or anti-dumping argument.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Consumers pay higher prices for cars — costs outweigh benefits.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Retaliation risk and protection of inefficient firms weaken the economy.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) jobs, infant-industry, strategic (b) higher consumer prices / retaliation",
                commonErrors: ["One-sided answer.", "No evaluation of the argument."],
              },
            },
            {
              id: "ebz10-u9-trade-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A developing country must decide whether to protect its new textile industry from cheap imports.",
              parts: [
                { label: "a", prompt: "Define free trade.", marks: 2 },
                { label: "b", prompt: "Define protectionism and name two of its methods.", marks: 2 },
                { label: "c", prompt: "Explain two benefits of free trade for consumers.", marks: 2 },
                { label: "d", prompt: "Explain two arguments for protecting a new industry.", marks: 2 },
                { label: "e", prompt: "Reach a justified conclusion on whether to protect the textile industry.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Trade policy evaluation", statement: "Free trade lowers prices; protection may nurture infant industries at consumer cost." }],
                steps: [
                  { reasoning: "(a) Trade without tariffs, quotas or other barriers.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Policies restricting imports to protect domestic firms — tariffs and quotas (or subsidies).", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Lower prices from competition and greater choice of goods.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Infant industry needs time to grow; protects jobs from cheap imports.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement — e.g. temporary protection justified, permanent protection not.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Free trade vs protectionism defined; effects explained; justified conclusion.",
                commonErrors: ["No judgement.", "Methods of protectionism missing."],
              },
            },
          ],
        },
        {
          id: "ebz10-u9-exchange-rates",
          title: "Exchange Rates and Their Impact",
          skill: "Explain how exchange-rate changes affect exporters, importers and the economy.",
          sections: [
            {
              heading: "What exchange rates are",
              body: "An **exchange rate** is the price of one currency in terms of another — e.g. £1 = 1.30 dollars. Rates move constantly on foreign-exchange markets, driven by demand for currencies, interest rates, inflation, economic growth and speculation.\n\nWhen a currency **appreciates**, its value rises (more foreign currency per unit). When it **depreciates**, its value falls (fewer foreign currency per unit).",
            },
            {
              heading: "Effects of a stronger currency",
              body: "**Appreciation** makes exports more expensive abroad (foreign buyers pay more) → export volumes and revenue may fall; importers benefit because foreign goods become cheaper → import prices fall, helping reduce inflation. However, exporters' profits can shrink and jobs in export industries may be threatened.",
            },
            {
              heading: "Effects of a weaker currency",
              body: "**Depreciation** makes exports cheaper abroad → exporters gain competitiveness, volumes and jobs. Imports become more expensive → import prices and inflation rise, hitting consumers and firms that rely on imported raw materials. Depreciation can also reduce the real value of foreign earnings when converted back.",
            },
          ],
          keyFormulas: [
            { name: "Appreciation", statement: "Currency value rises → exports dearer, imports cheaper" },
            { name: "Depreciation", statement: "Currency value falls → exports cheaper, imports dearer" },
            { name: "% change", statement: "(New rate − Old rate) ÷ Old rate × 100" },
          ],
          workedExample: {
            problem: "The pound rises from 1.20 to 1.26 dollars per pound. Calculate the percentage change and state the effect on UK exporters.",
            solution: "Change = (1.26 − 1.20) ÷ 1.20 × 100 = 5% appreciation. UK goods become 5% more expensive in dollar terms, so US demand for UK exports likely falls.",
          },
          questions: [
            {
              id: "ebz10-u9-fx-q1", difficulty: "foundation", totalMarks: 2,
              stem: "The exchange rate changes from £1 = 1.20 dollars to £1 = 1.26 dollars. Calculate the percentage increase in the value of the pound.",
              response: { type: "numeric", parts: [ { label: "Percentage increase", answer: 5 } ] },
              markscheme: {
                principles: [{ kind: "formula", name: "Percentage change", statement: "(New − Old) ÷ Old × 100." }],
                steps: [
                  { reasoning: "(1.26 − 1.20) ÷ 1.20 × 100 = 0.06 ÷ 1.20 × 100 = 5%.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "5%",
                commonErrors: ["Dividing by the new rate instead of the old."],
              },
            },
            {
              id: "ebz10-u9-fx-q2", difficulty: "foundation", totalMarks: 3,
              stem: "What is an exchange rate, and what does it mean if a currency appreciates?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Exchange rate", statement: "Price of one currency in terms of another; appreciation = rise in value." }],
                steps: [
                  { reasoning: "Exchange rate = price of one currency in another.", marks: 1, markCode: "AO1" },
                  { reasoning: "Appreciation = the currency's value rises against others.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: more dollars/euros per pound.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Price of one currency in another; appreciation = value rises.",
                commonErrors: ["Appreciation confused with depreciation."],
              },
            },
            {
              id: "ebz10-u9-fx-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a depreciation of the pound affects UK importers and UK consumers.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Depreciation effects", statement: "Imports become dearer; export prices fall." }],
                steps: [
                  { reasoning: "Weaker pound means foreign currency buys more pounds — imports cost more.", marks: 1, markCode: "AO2" },
                  { reasoning: "Importers pay more for foreign goods and materials.", marks: 1, markCode: "AO2" },
                  { reasoning: "Higher import prices feed through to consumers via prices.", marks: 1, markCode: "AO2" },
                  { reasoning: "Inflation may rise, reducing consumers' purchasing power.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Imports dearer → higher prices and inflation for consumers.",
                commonErrors: ["Effects on exporters given instead of importers."],
              },
            },
            {
              id: "ebz10-u9-fx-q4", difficulty: "challenge", totalMarks: 5,
              stem: "The value of the pound falls from €1.15 to €1.05 against the euro.",
              parts: [
                { label: "a", prompt: "State whether this is an appreciation or depreciation, and define that term.", marks: 2 },
                { label: "b", prompt: "Explain the effect on a UK company that exports to Germany.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Depreciation and exporters", statement: "Weaker currency makes exports cheaper abroad → more competitive." }],
                steps: [
                  { reasoning: "(a) Depreciation — the pound's value fell against the euro.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Depreciation = currency buys less foreign currency.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) UK goods become cheaper for German buyers in euro terms.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Export demand and volumes likely rise.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Exporter gains competitiveness — though imported inputs may cost more.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) depreciation (b) exports cheaper → more competitive, higher demand",
                commonErrors: ["Wrong direction of effect."],
              },
            },
            {
              id: "ebz10-u9-fx-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A UK fashion retailer imports most of its clothes and also sells online to customers in the USA.",
              parts: [
                { label: "a", prompt: "Explain two factors that influence exchange rates.", marks: 3 },
                { label: "b", prompt: "Evaluate the impact on this retailer if the pound depreciates.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exchange-rate impacts", statement: "Depreciation helps exports but hurts importers' costs." }],
                steps: [
                  { reasoning: "(a) Interest rates / inflation differentials between countries.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Economic growth and demand for the currency.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Speculation and government intervention.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) US sales become cheaper for Americans → online exports rise.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Imported clothing costs more in pounds → margins squeezed.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Net effect depends on balance of export gains vs import cost rises.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) interest rates, growth, speculation (b) exports gain, imports cost more — net effect judged",
                commonErrors: ["Only one side of impact considered."],
              },
            },
            {
              id: "ebz10-u9-fx-q6", difficulty: "challenge", totalMarks: 10,
              stem: "The pound appreciates against the dollar and the euro over one year.",
              parts: [
                { label: "a", prompt: "Define exchange rate.", marks: 2 },
                { label: "b", prompt: "Define appreciation.", marks: 2 },
                { label: "c", prompt: "Explain two effects of appreciation on UK exporters.", marks: 2 },
                { label: "d", prompt: "Explain two effects of appreciation on UK importers and consumers.", marks: 2 },
                { label: "e", prompt: "Evaluate whether appreciation is good or bad for the UK economy overall.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Appreciation evaluation", statement: "Exports suffer, imports cheapen — winners and losers depend on the economy's structure." }],
                steps: [
                  { reasoning: "(a) Price of one currency expressed in another.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) A rise in the value of a currency against others.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Exports become dearer abroad → demand and revenue fall; export jobs at risk.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Imports cheaper → lower prices/inflation; consumers benefit.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement — depends on export vs import share of the economy.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definitions given; exporters lose, importers/consumers gain; justified overall judgement.",
                commonErrors: ["Effects reversed.", "No overall judgement."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u9-92-notes", title: "Trade and exchange rates — notes",
      summary: "Free trade lowers prices; protectionism (tariffs, quotas, subsidies, embargoes) shields domestic firms at consumer cost. Exchange-rate moves shift export/import competitiveness.",
      sections: [
        { heading: "Free trade vs protectionism", body: "Free trade → specialisation, lower prices, more choice. Protectionism → protects jobs/infant industries but raises prices and risks retaliation." },
        { heading: "Protectionist tools", body: "Tariffs (tax), quotas (quantity cap), subsidies (support), embargoes (ban), red tape (barriers)." },
        { heading: "Exchange rates", body: "Appreciation: exports dearer, imports cheaper. Depreciation: exports cheaper, imports dearen. % change = (new − old) ÷ old × 100." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "ebz10-u9-lesson-9-3", code: "9-3",
      title: "Multinationals and Globalisation Impacts",
      goal: "I CAN describe multinationals and evaluate the benefits and costs of globalisation.",
      standards: ["Edexcel IGCSE Business 4BS0 — External Influences: globalisation impacts"],
      vocabulary: [
        { term: "Multinational corporation (MNC)", definition: "A company operating in more than one country." },
        { term: "Foreign direct investment (FDI)", definition: "Investment by a firm in business operations in another country." },
        { term: "Profit repatriation", definition: "Sending profits earned abroad back to the home country." },
        { term: "Offshoring", definition: "Moving production or services to another country, usually for lower costs." },
        { term: "Economies of scale", definition: "Lower average costs from producing on a larger scale." },
      ],
      concepts: [
        {
          id: "ebz10-u9-mncs",
          title: "Multinational Corporations",
          skill: "Describe MNCs and evaluate their effects on host and home countries.",
          sections: [
            {
              heading: "What is an MNC?",
              body: "A **multinational corporation (MNC)** is a business that owns or controls operations in more than one country — e.g. McDonald's, Nike, Toyota. MNCs enter foreign markets through **foreign direct investment (FDI)**: building factories, buying local firms, or setting up subsidiaries.",
            },
            {
              heading: "Advantages of MNCs for the host country",
              body: "MNCs bring **jobs**, training and skills; **investment** in infrastructure and facilities; **tax revenue**; access to **new technologies and products**; and often better pay and conditions than local alternatives. Their presence can also stimulate local suppliers and competition.",
            },
            {
              heading: "Criticisms of MNCs",
              body: "**Profit repatriation**: most profits are sent home, limiting local benefit. MNCs may **exploit** cheap labour with poor conditions; **outcompete** local small firms; move to cheaper countries when costs rise ('footloose'); and cause **environmental damage** with weak enforcement. Their size gives them power to influence governments and evade taxes through transfer pricing.",
            },
          ],
          keyFormulas: [
            { name: "MNC", statement: "Operates in 2+ countries via FDI" },
            { name: "Profit repatriation", statement: "Profits sent to home country, not reinvested locally" },
          ],
          workedExample: {
            problem: "A US phone company builds a factory in Vietnam. List one benefit and one criticism for Vietnam.",
            solution: "Benefit: jobs, skills and tax revenue. Criticism: profits are repatriated to the US, so local economic gains may be limited.",
          },
          questions: [
            {
              id: "ebz10-u9-mnc-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a multinational corporation (MNC)?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A company exporting goods to one foreign country" },
                { id: "b", text: "A company operating in more than one country" },
                { id: "c", text: "A government agency promoting trade" },
                { id: "d", text: "A small family business" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "MNC", statement: "Company operating in more than one country." }],
                steps: [{ reasoning: "MNC = multi-country operations, usually via FDI.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Operates in more than one country",
                commonErrors: ["Confused with simple exporting."],
              },
            },
            {
              id: "ebz10-u9-mnc-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three benefits MNCs can bring to a host (receiving) country.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MNC benefits", statement: "Jobs, investment, tax revenue, technology, skills." }],
                steps: [
                  { reasoning: "Creates jobs and employment.", marks: 1, markCode: "AO1" },
                  { reasoning: "Brings investment (FDI) and infrastructure.", marks: 1, markCode: "AO1" },
                  { reasoning: "Pays taxes and transfers technology/skills.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Jobs, investment, tax revenue, technology transfer.",
                commonErrors: ["Only one benefit.", "Benefit to home country given instead."],
              },
            },
            {
              id: "ebz10-u9-mnc-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain what is meant by profit repatriation and why it is criticised.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Profit repatriation", statement: "Profits sent from host country to the MNC's home country." }],
                steps: [
                  { reasoning: "MNC earns profits in the host country.", marks: 1, markCode: "AO2" },
                  { reasoning: "Profits are sent back ('repatriated') to headquarters.", marks: 1, markCode: "AO2" },
                  { reasoning: "Criticism: little money stays to benefit the local economy.", marks: 1, markCode: "AO2" },
                  { reasoning: "Criticism: host country bears costs (jobs, environment) without full gains.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Profits sent home; criticised because local economies keep little of the gain.",
                commonErrors: ["Definition missing — only criticism given."],
              },
            },
            {
              id: "ebz10-u9-mnc-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A multinational garment company opens factories in a low-wage country.",
              parts: [
                { label: "a", prompt: "Explain two ways the MNC might exploit workers there.", marks: 3 },
                { label: "b", prompt: "Explain one way the host country still benefits.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MNC exploitation vs benefit", statement: "Weak labour laws allow poor conditions; jobs still transfer income." }],
                steps: [
                  { reasoning: "(a) Pays very low wages below a living standard.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Long hours, unsafe conditions or child labour due to weak enforcement.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Threatens to move production if workers demand better pay.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Workers gain jobs and income that would otherwise not exist.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) low wages, poor conditions, footloose threats (b) jobs and income for locals",
                commonErrors: ["No benefit acknowledged in (b)."],
              },
            },
            {
              id: "ebz10-u9-mnc-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A government wants to attract a major MNC to build an electronics plant in its country.",
              parts: [
                { label: "a", prompt: "Explain two benefits the government hopes to gain.", marks: 3 },
                { label: "b", prompt: "Evaluate one risk the government faces if the MNC later moves production elsewhere.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "FDI attraction and risk", statement: "Jobs and tax revenue vs dependence on a footloose investor." }],
                steps: [
                  { reasoning: "(a) New jobs and skills for local workers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Tax revenue and infrastructure investment.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Technology transfer and export earnings.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Jobs and investment can vanish quickly if costs rise elsewhere — 'footloose' risk.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Local suppliers and workers become dependent on one firm.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) jobs, tax/investment, technology (b) footloose risk — jobs can leave",
                commonErrors: ["Risk not linked to the scenario."],
              },
            },
            {
              id: "ebz10-u9-mnc-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A developing country is deciding whether to welcome a large foreign supermarket chain.",
              parts: [
                { label: "a", prompt: "Define an MNC.", marks: 2 },
                { label: "b", prompt: "Define FDI.", marks: 2 },
                { label: "c", prompt: "Explain two benefits the chain could bring to the country.", marks: 2 },
                { label: "d", prompt: "Explain two criticisms of allowing the chain to operate.", marks: 2 },
                { label: "e", prompt: "Reach a justified conclusion on whether to welcome the chain.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "MNC impact evaluation", statement: "Weigh jobs/investment against repatriation, exploitation and local firm damage." }],
                steps: [
                  { reasoning: "(a) Company operating in more than one country.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Investment by a firm in operations in another country.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Jobs, investment, tax revenue, lower prices for consumers.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Profit repatriation; outcompeting local shops; possible poor labour conditions.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement — e.g. welcome with conditions/regulation.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definitions; benefits vs criticisms weighed; justified conclusion.",
                commonErrors: ["One-sided judgement.", "Definitions missing."],
              },
            },
          ],
        },
        {
          id: "ebz10-u9-gbl-impact",
          title: "Benefits and Costs of Globalisation",
          skill: "Evaluate globalisation's effects on businesses, consumers and countries.",
          sections: [
            {
              heading: "Benefits of globalisation",
              body: "**For businesses**: access to huge new markets; **economies of scale** from global production; cheaper raw materials and labour; international sourcing of components; spread of risk across countries.\n\n**For consumers and countries**: lower prices and greater choice from competition; higher-quality goods; more jobs via exports and FDI; faster technology transfer; developing countries can industrialise through export-led growth.",
            },
            {
              heading: "Costs and risks of globalisation",
              body: "**For businesses**: foreign competitors can undercut home firms; exchange-rate and political risks abroad; supply chains can be disrupted by distant events.\n\n**For countries and workers**: jobs move to low-cost countries (offshoring); wage inequality grows as unskilled jobs decline; over-dependence on a few exports or foreign investors; environmental damage from long-distance trade; cultural homogenisation and loss of local industries.",
            },
            {
              heading: "Balancing the debate",
              body: "Globalisation is not simply 'good' or 'bad' — outcomes depend on how countries manage it. **Winners** are typically skilled workers, exporters and consumers; **losers** are workers in uncompetitive industries and regions dependent on declining sectors. Policies such as retraining, trade adjustment support and labour/environmental standards can spread the gains more fairly.",
            },
          ],
          keyFormulas: [
            { name: "Economies of scale", statement: "Global output lowers average cost per unit" },
            { name: "Offshoring", statement: "Moving jobs abroad for lower costs" },
          ],
          workedExample: {
            problem: "A car maker sources parts globally and sells in 40 countries. Give one benefit and one risk of this globalised strategy.",
            solution: "Benefit: cheaper parts and huge market reach raise profits. Risk: exchange-rate swings or supply disruption in one country can raise costs or halt production.",
          },
          questions: [
            {
              id: "ebz10-u9-impact-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which is a benefit of globalisation for consumers?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Fewer goods to choose from" },
                { id: "b", text: "Lower prices and greater choice" },
                { id: "c", text: "Higher prices due to transport costs" },
                { id: "d", text: "Less competition in markets" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Consumer benefits", statement: "Competition lowers prices and widens choice." }],
                steps: [{ reasoning: "Global competition → lower prices and more choice.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Lower prices and greater choice",
                commonErrors: ["Cost/negative option chosen."],
              },
            },
            {
              id: "ebz10-u9-impact-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three benefits of globalisation for businesses.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Business benefits", statement: "New markets, scale, cheaper inputs, risk spreading." }],
                steps: [
                  { reasoning: "Access to larger foreign markets.", marks: 1, markCode: "AO1" },
                  { reasoning: "Economies of scale / cheaper labour and materials.", marks: 1, markCode: "AO1" },
                  { reasoning: "Spread of risk across countries / technology access.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "New markets, economies of scale, cheaper inputs, risk spreading.",
                commonErrors: ["Consumer benefits listed instead."],
              },
            },
            {
              id: "ebz10-u9-impact-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how globalisation can cause job losses in developed countries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Offshoring and job losses", statement: "Firms move production to lower-cost countries." }],
                steps: [
                  { reasoning: "Firms can produce more cheaply abroad.", marks: 1, markCode: "AO2" },
                  { reasoning: "Production is offshored to low-wage countries.", marks: 1, markCode: "AO2" },
                  { reasoning: "Home factories close and workers lose jobs.", marks: 1, markCode: "AO2" },
                  { reasoning: "Regions dependent on those industries suffer decline.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Offshoring to low-cost countries closes home jobs and hurts dependent regions.",
                commonErrors: ["Imports blamed without mechanism."],
              },
            },
            {
              id: "ebz10-u9-impact-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A small town's main employer, a clothing factory, moves production to a low-cost country.",
              parts: [
                { label: "a", prompt: "Explain two costs of globalisation for the town.", marks: 3 },
                { label: "b", prompt: "Explain one benefit the firm gained by moving.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation winners and losers", statement: "Firm gains efficiency; the town bears concentrated job losses." }],
                steps: [
                  { reasoning: "(a) Mass unemployment as the factory closes.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Local shops and services lose income and customers.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Long-term decline of skills and community investment.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Lower labour costs raise profit margins for the firm.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) unemployment, lost local spending, decline (b) lower costs → higher profit",
                commonErrors: ["Benefit not credited to the firm."],
              },
            },
            {
              id: "ebz10-u9-impact-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A developing country opens its economy fully to international trade.",
              parts: [
                { label: "a", prompt: "Explain two benefits the country may gain.", marks: 3 },
                { label: "b", prompt: "Evaluate one risk of full openness for the country's new industries.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Openness evaluation", statement: "Export-led growth vs vulnerability of infant industries." }],
                steps: [
                  { reasoning: "(a) Export markets and foreign investment create jobs.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Technology transfer and higher incomes over time.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Consumers gain lower prices and choice.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Cheap imports can wipe out new domestic industries before they grow.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Economy becomes dependent on a few exports or foreign capital.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) jobs/investment, technology, choice (b) infant-industry risk and dependence",
                commonErrors: ["Risks not evaluated, just listed."],
              },
            },
            {
              id: "ebz10-u9-impact-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A country is debating whether to reduce barriers to international trade and investment.",
              parts: [
                { label: "a", prompt: "Define globalisation.", marks: 2 },
                { label: "b", prompt: "Give two benefits of globalisation for the country's consumers.", marks: 2 },
                { label: "c", prompt: "Give two benefits of globalisation for the country's businesses.", marks: 2 },
                { label: "d", prompt: "Explain two costs of globalisation for workers and the environment.", marks: 2 },
                { label: "e", prompt: "Reach a justified conclusion on reducing trade barriers.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Globalisation evaluation", statement: "Weigh consumer/business gains against job losses, inequality and environmental costs." }],
                steps: [
                  { reasoning: "(a) Increasing interconnectedness of world economies.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Lower prices and greater product choice.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) New export markets and economies of scale.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(d) Job losses via offshoring; pollution from long-distance production and transport.", marks: 2, markCode: "AO2", part: "d" },
                  { reasoning: "(e) Balanced judgement — e.g. reduce barriers with support for affected workers.", marks: 2, markCode: "AO3", part: "e" },
                ],
                finalAnswer: "Definition; benefits to consumers and businesses; costs to workers/environment; justified conclusion.",
                commonErrors: ["No conclusion.", "Costs ignored."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz10-u9-93-notes", title: "MNCs and globalisation impacts — notes",
      summary: "MNCs invest abroad (FDI) bringing jobs and tax but repatriating profits. Globalisation helps consumers and exporters; it can cost jobs, equality and the environment.",
      sections: [
        { heading: "MNCs", body: "Operate in 2+ countries. Benefits: jobs, FDI, technology. Criticisms: profit repatriation, exploitation, footloose relocation." },
        { heading: "Benefits", body: "Businesses: new markets, scale, cheaper inputs. Consumers: lower prices, choice. Countries: jobs, investment, growth." },
        { heading: "Costs", body: "Offshored jobs, wage inequality, environmental damage, dependence on foreign investors and few exports." },
      ],
    },
  },
];

module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson41",
    lesson: {
      id: "ecn10-u4-lesson-4-1", code: "4-1",
      title: "Exchange Rates",
      goal: "I CAN explain how exchange rates are determined and the effects of exchange rate changes.",
      standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: exchange rates"],
      vocabulary: [
        { term: "Exchange rate", definition: "The price of one currency expressed in terms of another currency." },
        { term: "Appreciation", definition: "A rise in the value of a currency against other currencies." },
        { term: "Depreciation", definition: "A fall in the value of a currency against other currencies." },
        { term: "Floating exchange rate", definition: "A rate determined by demand and supply in foreign exchange markets." },
        { term: "Foreign exchange market", definition: "The market where currencies are bought and sold." },
      ],
      concepts: [
        {
          id: "ecn10-u4-fxr",
          title: "How Exchange Rates Are Determined",
          skill: "Explain the demand and supply forces that set a floating exchange rate.",
          sections: [
            {
              heading: "What an exchange rate is",
              body: "An **exchange rate** is the price of one currency in terms of another, e.g. £1 = $1.50. It is quoted as the domestic currency per unit of foreign currency (or vice versa — always check the quote). Exchange rates are mainly determined in the **foreign exchange market** by the demand for and supply of each currency.",
            },
            {
              heading: "Demand and supply for a currency",
              body: "**Demand** for a currency rises when foreigners want to buy the country's exports, invest in its assets, or send money home — they must buy its currency to do so. **Supply** of a currency rises when domestic residents buy imports, invest abroad, or send money overseas — they sell their currency to get foreign currency. Higher demand or lower supply makes the currency **appreciate**; lower demand or higher supply makes it **depreciate**.",
            },
            {
              heading: "Factors that shift demand and supply",
              body: "**Appreciation pressures**: rising export demand, higher interest rates attracting capital inflows, strong economic growth, speculation that the currency will rise. **Depreciation pressures**: rising import demand, lower interest rates, trade deficits, inflation eroding competitiveness, speculation that the currency will fall.",
            },
          ],
          keyFormulas: [
            { name: "Exchange rate quote", statement: "Domestic currency per 1 unit of foreign currency" },
            { name: "Appreciation", statement: "Demand for currency rises or supply falls → currency value rises" },
            { name: "Depreciation", statement: "Demand for currency falls or supply rises → currency value falls" },
          ],
          workedExample: {
            problem: "Interest rates in Country A rise above those in Country B. What happens to A's exchange rate and why?",
            solution: "Capital flows into A to earn higher returns → demand for A's currency rises → A's currency appreciates.",
          },
          questions: [
            {
              id: "ecn10-u4-fxr-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is an exchange rate?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The total value of a country's exports" },
                { id: "b", text: "The price of one currency in terms of another currency" },
                { id: "c", text: "A tax on foreign goods" },
                { id: "d", text: "The interest rate set by the central bank" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Exchange rate", statement: "Price of one currency in terms of another." }],
                steps: [{ reasoning: "Exchange rate = relative price of currencies.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Price of one currency in terms of another",
                commonErrors: ["Confused with interest rate or trade balance."],
              },
            },
            {
              id: "ecn10-u4-fxr-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three factors that increase demand for a country's currency.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Currency demand", statement: "Demand rises when foreigners buy exports, invest, or receive income." }],
                steps: [
                  { reasoning: "Rising demand for the country's exports.", marks: 1, markCode: "AO2" },
                  { reasoning: "Foreign investment inflows into the country's assets.", marks: 1, markCode: "AO2" },
                  { reasoning: "Higher interest rates attracting capital inflows.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Export demand, investment inflows, higher interest rates.",
                commonErrors: ["Listing supply factors instead of demand."],
              },
            },
            {
              id: "ecn10-u4-fxr-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how a floating exchange rate is determined in the foreign exchange market.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Floating rate", statement: "Set by demand and supply of the currency." }],
                steps: [
                  { reasoning: "Currencies are bought and sold in the foreign exchange market.", marks: 1, markCode: "AO2" },
                  { reasoning: "Demand comes from exports, investment and income flows into the country.", marks: 1, markCode: "AO2" },
                  { reasoning: "Supply comes from imports and investment abroad.", marks: 1, markCode: "AO2" },
                  { reasoning: "The rate settles where demand equals supply — no intervention needed.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Demand and supply of the currency set the rate where they are equal.",
                commonErrors: ["Saying the government sets it — that is a fixed rate."],
              },
            },
            {
              id: "ecn10-u4-fxr-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country's currency has depreciated by 10% against the US dollar.",
              parts: [
                { label: "a", prompt: "Define depreciation of a currency.", marks: 3 },
                { label: "b", prompt: "Give two reasons why the currency might depreciate.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Depreciation", statement: "Fall in a currency's value against others." }],
                steps: [
                  { reasoning: "(a) Depreciation = fall in the value of a currency against other currencies.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) E.g. £1 falls from $1.50 to $1.35.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Rising import demand increases supply of the currency.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Lower interest rates cause capital outflows.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Trade deficits or speculative selling also cause depreciation.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) currency value falls (b) imports, low interest rates, deficits, speculation",
                commonErrors: ["Confusing depreciation with devaluation (a deliberate policy)."],
              },
            },
            {
              id: "ecn10-u4-fxr-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Speculators expect the pound to fall against the dollar.",
              parts: [
                { label: "a", prompt: "Explain how speculation affects the exchange rate.", marks: 4 },
                { label: "b", prompt: "Explain how this could become a self-fulfilling expectation.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Speculation", statement: "Expected currency movements change demand and supply today." }],
                steps: [
                  { reasoning: "(a) Speculators sell pounds now expecting to buy them back cheaper later.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Increased supply of pounds lowers the exchange rate immediately.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Other traders follow the selling, amplifying the fall.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) The actual fall makes the expectation come true.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) More sellers join, pushing the rate down further.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Confidence effects can then feed into the real economy.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) selling pounds now → rate falls (b) fall validates the expectation → more selling",
                commonErrors: ["Ignoring that expectations themselves move the rate."],
              },
            },
            {
              id: "ecn10-u4-fxr-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An economy has rising export demand and rising inflation at the same time.",
              parts: [
                { label: "a", prompt: "Explain the effect of rising export demand on the exchange rate.", marks: 4 },
                { label: "b", prompt: "Explain the effect of high inflation on the exchange rate.", marks: 3 },
                { label: "c", prompt: "Evaluate which force is likely to dominate and why.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exchange rate determinants", statement: "Exports raise demand for currency; inflation lowers competitiveness." }],
                steps: [
                  { reasoning: "(a) Foreigners need the domestic currency to buy exports.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Demand for the currency rises → appreciation pressure.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Higher exchange rate makes exports more expensive abroad.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) High inflation makes exports less competitive → export demand falls.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Imports become relatively cheaper → more currency supplied.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Both forces push the currency down → depreciation pressure.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Depends on relative strength; often inflation dominates in the long run.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) Interest rates and speculation can also intervene.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) appreciation pressure (b) depreciation pressure (c) judgement — inflation often dominates long run",
                commonErrors: ["Assuming one force always wins without evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn10-u4-fxre",
          title: "Effects of Exchange Rate Changes",
          skill: "Analyse how appreciation and depreciation affect trade, prices, growth and employment.",
          sections: [
            {
              heading: "Effects of depreciation",
              body: "When a currency **depreciates**, exports become cheaper abroad → export volumes rise; imports become more expensive → import volumes fall. Effects: **improved trade balance** (if demand is price-sensitive), **lower unemployment** in export sectors, **higher growth**. Costs: **imported inflation** (cost-push), higher prices for consumers, possible retaliation.",
            },
            {
              heading: "Effects of appreciation",
              body: "When a currency **appreciates**, exports become more expensive → export volumes fall; imports become cheaper → import volumes rise. Effects: **worse trade balance**, **higher unemployment** in export industries, **lower inflation** (cheaper imports). Benefits: cheaper imports raise living standards, stronger currency attracts investment.",
            },
            {
              heading: "Winners and losers",
              body: "**Depreciation winners**: exporters, domestic producers competing with imports, the tourism industry. **Depreciation losers**: importers, consumers of imported goods, firms needing imported inputs, holders of foreign debt. **Appreciation** reverses these groups. The overall effect depends on the size of the change and price elasticity of demand.",
            },
          ],
          keyFormulas: [
            { name: "Depreciation", statement: "Exports cheaper abroad, imports dearer at home" },
            { name: "Appreciation", statement: "Exports dearer abroad, imports cheaper at home" },
          ],
          workedExample: {
            problem: "The pound depreciates from $1.50 to $1.20 per £1. What happens to a UK exporter charging £100 and a UK importer buying goods priced at $150?",
            solution: "Exporter: foreign buyer now pays $120 instead of $150 — exports cheaper and more competitive. Importer: the $150 goods now cost £125 instead of £100 — imports dearer.",
          },
          questions: [
            {
              id: "ecn10-u4-fxre-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What happens to a country's export prices (in foreign currency) when its currency depreciates?",
              response: { type: "mcq", choices: [
                { id: "a", text: "They rise" },
                { id: "b", text: "They fall" },
                { id: "c", text: "They stay the same" },
                { id: "d", text: "They become zero" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Depreciation", statement: "Exports become cheaper abroad." }],
                steps: [{ reasoning: "Depreciation lowers the foreign-currency price of exports.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** They fall",
                commonErrors: ["Reversing the effect."],
              },
            },
            {
              id: "ecn10-u4-fxre-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain how currency depreciation can cause inflation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Imported inflation", statement: "Depreciation raises import prices." }],
                steps: [
                  { reasoning: "Imports become more expensive in domestic currency.", marks: 1, markCode: "AO2" },
                  { reasoning: "Firms pass higher import costs on to consumers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Also domestic producers face less import competition and may raise prices.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Dearer imports → higher costs → higher prices = imported inflation.",
                commonErrors: ["Saying depreciation always lowers inflation."],
              },
            },
            {
              id: "ecn10-u4-fxre-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how depreciation can reduce unemployment.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Competitiveness", statement: "Cheaper exports raise demand for domestic output." }],
                steps: [
                  { reasoning: "Depreciation makes exports cheaper for foreign buyers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Export demand rises → firms expand output.", marks: 1, markCode: "AO2" },
                  { reasoning: "Expanding firms hire more workers.", marks: 1, markCode: "AO2" },
                  { reasoning: "Import-competing domestic firms also gain protection from cheaper rivals.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Cheaper exports → more demand → more output → more jobs.",
                commonErrors: ["Ignoring the demand mechanism."],
              },
            },
            {
              id: "ecn10-u4-fxre-q4", difficulty: "challenge", totalMarks: 6,
              stem: "The pound has depreciated by 15%.",
              parts: [
                { label: "a", prompt: "Identify two groups that gain from depreciation.", marks: 3 },
                { label: "b", prompt: "Identify two groups that lose from depreciation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Winners and losers", statement: "Depreciation helps sellers of exports, hurts buyers of imports." }],
                steps: [
                  { reasoning: "(a) Exporters gain — foreign buyers pay less in their currency.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Tourism and domestic import-competing firms also gain.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Importers and consumers of imported goods face higher prices.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Firms needing imported raw materials face higher costs.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) exporters, tourism (b) importers, consumers of imports",
                commonErrors: ["Listing only one side of the effect."],
              },
            },
            {
              id: "ecn10-u4-fxre-q5", difficulty: "challenge", totalMarks: 8,
              stem: "An economy with a persistent trade deficit decides to let its currency depreciate.",
              parts: [
                { label: "a", prompt: "Explain two ways depreciation could reduce the trade deficit.", marks: 4 },
                { label: "b", prompt: "Explain one reason the deficit might not improve.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Trade balance", statement: "Cheaper exports and dearer imports improve the balance if demand is responsive." }],
                steps: [
                  { reasoning: "(a) Exports become cheaper abroad → export volumes rise.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Imports become dearer at home → import volumes fall.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) If PED for imports is low (necessities), import spending may not fall.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Foreign retaliation or inelastic export demand can offset gains.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) exports up, imports down (b) low price sensitivity can prevent improvement",
                commonErrors: ["Assuming depreciation always fixes the deficit."],
              },
            },
            {
              id: "ecn10-u4-fxre-q6", difficulty: "challenge", totalMarks: 10,
              stem: "The yen depreciates sharply against the dollar over one year.",
              parts: [
                { label: "a", prompt: "Explain the likely effect on Japanese exporters.", marks: 4 },
                { label: "b", prompt: "Explain the likely effect on Japanese consumers and firms importing goods.", marks: 3 },
                { label: "c", prompt: "Evaluate the overall impact on the Japanese economy.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exchange rate effects", statement: "Depreciation boosts exports, raises import prices." }],
                steps: [
                  { reasoning: "(a) Japanese goods become cheaper for US buyers in dollar terms.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Export volumes and revenue rise → output and jobs expand.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Imported goods become dearer in yen → consumer prices rise.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Firms importing components face higher costs.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Likely positive for growth and employment via exports.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) But imported inflation may force tighter monetary policy — a judgement is needed.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) exports up (b) import prices up (c) growth positive, inflation risk — overall depends on magnitude",
                commonErrors: ["No evaluation; one-sided answer."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u4-fxr-notes", title: "Exchange rates — notes",
      summary: "Exchange rate = price of a currency; demand/supply determine floating rates; depreciation boosts exports but raises import prices.",
      sections: [
        { heading: "Key idea", body: "Demand for a currency comes from exports, investment and income flows; supply comes from imports and outward investment." },
        { heading: "Depreciation", body: "Exports cheaper, imports dearer: helps trade balance, growth and jobs; risks imported inflation." },
        { heading: "Appreciation", body: "Exports dearer, imports cheaper: hurts exporters and jobs; helps inflation and living standards." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson42",
    lesson: {
      id: "ecn10-u4-lesson-4-2", code: "4-2",
      title: "The Balance of Payments",
      goal: "I CAN explain the components of the balance of payments and analyse deficits and surpluses.",
      standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: balance of payments"],
      vocabulary: [
        { term: "Balance of payments", definition: "A record of all economic transactions between a country and the rest of the world." },
        { term: "Current account", definition: "Record of trade in goods, services, income and transfers." },
        { term: "Trade balance", definition: "Exports of goods minus imports of goods." },
        { term: "Capital account", definition: "Record of transfers of assets such as debt forgiveness and migrants' assets." },
        { term: "Financial account", definition: "Record of investment flows — direct and portfolio investment." },
        { term: "Balance of payments deficit", definition: "When outflows exceed inflows on the current account." },
      ],
      concepts: [
        {
          id: "ecn10-u4-bop",
          title: "Components of the Balance of Payments",
          skill: "Identify and explain the parts of the balance of payments accounts.",
          sections: [
            {
              heading: "Current account",
              body: "The **current account** records trade in **goods** (visible trade — exports minus imports of physical products), trade in **services** (invisible trade — tourism, banking, insurance), **income** flows (wages, profits, interest earned abroad minus paid abroad), and **current transfers** (foreign aid, remittances, gifts).",
            },
            {
              heading: "Capital and financial accounts",
              body: "The **capital account** records transfers of assets — e.g. debt forgiveness, migrants' assets. The **financial account** records investment flows: **foreign direct investment** (building factories abroad) and **portfolio investment** (buying shares and bonds). Together they record how the current account is financed.",
            },
            {
              heading: "Overall balance",
              body: "The **balance of payments** must balance overall — a **current account deficit** must be financed by a **financial account surplus** (net inflows of investment) or reserve changes. Exam questions usually focus on the **current account balance**: exports minus imports of goods and services, plus income and transfers.",
            },
          ],
          keyFormulas: [
            { name: "Current account", statement: "Trade in goods + services + income + current transfers" },
            { name: "Trade balance", statement: "Visible exports − visible imports" },
            { name: "Overall BOP", statement: "Current account + capital account + financial account = 0 (balanced overall)" },
          ],
          workedExample: {
            problem: "A country exports £500bn of goods, imports £450bn, earns £30bn income from abroad, pays £20bn, and receives £10bn in transfers. What is its current account balance?",
            solution: "Trade balance = 500−450 = +50. Income = 30−20 = +10. Transfers = +10. Current account = +70 (surplus).",
          },
          questions: [
            {
              id: "ecn10-u4-bop-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does the current account of the balance of payments record?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Only trade in goods" },
                { id: "b", text: "Only investment flows" },
                { id: "c", text: "Trade in goods, services, income and transfers" },
                { id: "d", text: "Government spending and taxation" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Current account", statement: "Goods, services, income and transfers." }],
                steps: [{ reasoning: "Current account covers all four components.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(c)** Goods, services, income and transfers",
                commonErrors: ["Confusing with the financial account."],
              },
            },
            {
              id: "ecn10-u4-bop-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between visible and invisible trade.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Visible vs invisible trade", statement: "Goods are visible; services, income and transfers are invisible." }],
                steps: [
                  { reasoning: "Visible trade = physical goods — cars, food, machinery.", marks: 1, markCode: "AO1" },
                  { reasoning: "Invisible trade = services — tourism, banking, insurance.", marks: 1, markCode: "AO1" },
                  { reasoning: "Also includes income and transfer flows.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Visible = goods; invisible = services, income, transfers.",
                commonErrors: ["Thinking services are visible trade."],
              },
            },
            {
              id: "ecn10-u4-bop-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain what the financial account of the balance of payments records.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Financial account", statement: "Records investment flows between countries." }],
                steps: [
                  { reasoning: "Records flows of investment assets across borders.", marks: 1, markCode: "AO2" },
                  { reasoning: "Foreign direct investment — firms building/owning assets abroad.", marks: 1, markCode: "AO2" },
                  { reasoning: "Portfolio investment — buying shares, bonds, other financial assets.", marks: 1, markCode: "AO2" },
                  { reasoning: "Inward investment creates a surplus; outward creates a deficit on this account.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Investment flows: FDI and portfolio investment.",
                commonErrors: ["Confusing with the current account's trade flows."],
              },
            },
            {
              id: "ecn10-u4-bop-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country records a current account deficit of £20bn.",
              parts: [
                { label: "a", prompt: "What is a current account deficit?", marks: 3 },
                { label: "b", prompt: "How can this deficit be financed?", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Current account deficit", statement: "Outflows exceed inflows on the current account." }],
                steps: [
                  { reasoning: "(a) Imports of goods/services/income exceed exports and receipts.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The country is spending more abroad than it earns.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Borrowing from abroad or selling assets to foreigners.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Inflows on the financial account must match the deficit.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) spending > earnings abroad (b) foreign borrowing or asset sales",
                commonErrors: ["Saying the deficit must equal zero immediately — it is financed over time."],
              },
            },
            {
              id: "ecn10-u4-bop-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A country's exports of services grow strongly while goods imports rise.",
              parts: [
                { label: "a", prompt: "Explain how each flow affects the current account.", marks: 4 },
                { label: "b", prompt: "Explain why the overall current account balance might still improve.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Current account", statement: "All components together determine the balance." }],
                steps: [
                  { reasoning: "(a) Rising service exports increase receipts on the current account.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Rising goods imports increase payments on the current account.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) If service export growth exceeds goods import growth, the balance improves.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Income and transfer flows may also contribute positively.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) services up = receipts up; goods imports up = payments up (b) net effect depends on relative sizes",
                commonErrors: ["Looking at only one component of the account."],
              },
            },
            {
              id: "ecn10-u4-bop-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Country X has a large and persistent current account deficit.",
              parts: [
                { label: "a", prompt: "Explain two possible causes of a persistent current account deficit.", marks: 4 },
                { label: "b", prompt: "Explain two possible consequences of the deficit.", marks: 3 },
                { label: "c", prompt: "Evaluate whether the deficit is necessarily a problem.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "BOP deficit", statement: "Persistent deficits may signal uncompetitiveness or may finance investment." }],
                steps: [
                  { reasoning: "(a) Loss of competitiveness — high prices or low quality exports.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Strong domestic demand pulling in imports.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Rising foreign debt as the deficit must be financed.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Pressure on the exchange rate and possible depreciation.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) If financed by investment inflows it can support growth — not always bad.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) But persistent deficits risk debt burdens and loss of confidence — judgement needed.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) uncompetitiveness, import demand (b) debt, exchange rate pressure (c) depends on financing and persistence",
                commonErrors: ["Declaring all deficits bad without evaluation."],
              },
            },
          ],
        },
        {
          id: "ecn10-u4-bopd",
          title: "Balance of Payments Problems",
          skill: "Analyse causes and consequences of BOP deficits and surpluses and possible responses.",
          sections: [
            {
              heading: "Causes of a deficit",
              body: "A **current account deficit** arises when spending abroad exceeds earnings: **loss of competitiveness** (high wages, inflation, poor quality), **strong domestic demand** sucking in imports, **recession abroad** cutting export demand, or **currency appreciation** making exports dear. A **surplus** has the opposite causes.",
            },
            {
              heading: "Consequences of a deficit",
              body: "Must be financed by **borrowing** or **selling assets** → rising foreign debt and interest payments. Can cause **exchange rate depreciation** as confidence falls. Can be acceptable if it funds **investment** that later boosts exports. Surpluses can cause **currency appreciation**, hurting exporters, and trade tensions from partners.",
            },
            {
              heading: "Policy responses",
              body: "Governments may **devalue** the currency (under fixed rates), pursue **contractionary policy** to cut import demand, use **protectionism** (tariffs, quotas), or pursue **supply-side policies** to raise competitiveness. Central banks may raise **interest rates** to attract capital inflows.",
            },
          ],
          keyFormulas: [
            { name: "Deficit financing", statement: "Current account deficit = financial account surplus (borrowing/investment inflows)" },
            { name: "Competitiveness", statement: "Low prices or high quality → export demand" },
          ],
          workedExample: {
            problem: "A country runs persistent current account deficits and its currency is under downward pressure. Explain one chain of consequences.",
            solution: "Deficit → need for capital inflows → if inflows slow, currency depreciates → imports dearer → inflation; exports cheaper → eventual improvement possible.",
          },
          questions: [
            {
              id: "ecn10-u4-bopd-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What must happen on the financial account when there is a current account deficit?",
              response: { type: "mcq", choices: [
                { id: "a", text: "It must also be in deficit" },
                { id: "b", text: "It must be in surplus" },
                { id: "c", text: "It must be zero" },
                { id: "d", text: "Nothing — the accounts are unrelated" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "BOP identity", statement: "Overall balance is zero; accounts offset each other." }],
                steps: [{ reasoning: "A current account deficit is financed by a financial account surplus.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** It must be in surplus",
                commonErrors: ["Thinking deficits are impossible."],
              },
            },
            {
              id: "ecn10-u4-bopd-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give three causes of a current account deficit.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Deficit causes", statement: "Uncompetitiveness, import demand, exchange rate." }],
                steps: [
                  { reasoning: "Loss of export competitiveness — high prices or low quality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Strong domestic demand increasing imports.", marks: 1, markCode: "AO2" },
                  { reasoning: "Currency appreciation making exports dearer.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Uncompetitiveness, strong import demand, appreciation.",
                commonErrors: ["Repeating the definition as a cause."],
              },
            },
            {
              id: "ecn10-u4-bopd-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why a current account deficit can lead to a rising foreign debt.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Deficit financing", statement: "Deficits must be financed by borrowing or asset sales." }],
                steps: [
                  { reasoning: "The country spends more abroad than it earns.", marks: 1, markCode: "AO2" },
                  { reasoning: "The gap must be financed — borrowing from abroad.", marks: 1, markCode: "AO2" },
                  { reasoning: "Repeated borrowing accumulates into foreign debt.", marks: 1, markCode: "AO2" },
                  { reasoning: "Interest and debt repayments then worsen future current accounts.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Deficit → foreign borrowing → accumulating debt → future repayment burden.",
                commonErrors: ["Ignoring the financing requirement."],
              },
            },
            {
              id: "ecn10-u4-bopd-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A government wants to reduce a persistent current account deficit.",
              parts: [
                { label: "a", prompt: "Explain two demand-side policies that could reduce the deficit.", marks: 3 },
                { label: "b", prompt: "Explain one supply-side policy that could reduce the deficit.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Deficit policies", statement: "Cut import demand or raise export competitiveness." }],
                steps: [
                  { reasoning: "(a) Contractionary fiscal/monetary policy cuts domestic demand and imports.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Depreciation or protectionism makes imports dearer.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Education and training raise labour productivity and export quality.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Infrastructure investment lowers business costs, improving competitiveness.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) demand reduction, dearer imports (b) supply-side competitiveness",
                commonErrors: ["Proposing policies with no link to the trade balance."],
              },
            },
            {
              id: "ecn10-u4-bopd-q5", difficulty: "challenge", totalMarks: 8,
              stem: "A current account surplus has persisted for five years in an export-driven economy.",
              parts: [
                { label: "a", prompt: "Explain two consequences of a large current account surplus for the economy.", marks: 4 },
                { label: "b", prompt: "Explain one consequence for the country's trading partners.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Surplus effects", statement: "Surpluses can appreciate the currency and create trade tensions." }],
                steps: [
                  { reasoning: "(a) Sustained inflows may appreciate the currency, hurting exporters.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Reserve accumulation or lending abroad can create risks.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Partners face deficits and may retaliate with protectionism.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Currency appreciation pressures their own exporters.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) appreciation pressure, reserve/lending risks (b) partner deficits and retaliation",
                commonErrors: ["Assuming surpluses are always beneficial."],
              },
            },
            {
              id: "ecn10-u4-bopd-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Country Y records a current account deficit equal to 4% of GDP.",
              parts: [
                { label: "a", prompt: "Explain what a deficit of this size suggests about the economy.", marks: 3 },
                { label: "b", prompt: "Explain two ways the deficit could be reduced.", marks: 4 },
                { label: "c", prompt: "Evaluate whether reducing the deficit should be a policy priority.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Deficit evaluation", statement: "Size, financing and causes determine whether action is needed." }],
                steps: [
                  { reasoning: "(a) Spending abroad exceeds earnings by a significant share of output.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Suggests uncompetitiveness or strong import demand.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Depreciation makes exports cheaper and imports dearer.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Supply-side policies raise competitiveness over time.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) If it finances productive investment, reducing it may harm growth.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) But if persistent and debt-financed, it threatens stability — judgement required.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) large external imbalance (b) depreciation, supply-side (c) depends on financing and causes",
                commonErrors: ["No evaluation of context."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u4-bop-notes", title: "Balance of payments — notes",
      summary: "Current account = goods + services + income + transfers; deficits are financed by financial account surpluses.",
      sections: [
        { heading: "Key idea", body: "The balance of payments must balance overall — a current account deficit is paid for by borrowing or selling assets." },
        { heading: "Deficits", body: "Causes: uncompetitiveness, strong import demand, appreciation. Risks: rising foreign debt, currency pressure." },
        { heading: "Responses", body: "Depreciation, contractionary demand policies, protectionism, or supply-side competitiveness policies." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson43",
    lesson: {
      id: "ecn10-u4-lesson-4-3", code: "4-3",
      title: "Exchange Rate Policy and Competitiveness",
      goal: "I CAN compare exchange rate systems and evaluate how exchange rates affect competitiveness.",
      standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: exchange rate policy"],
      vocabulary: [
        { term: "Fixed exchange rate", definition: "A rate maintained by the central bank at a set level." },
        { term: "Managed float", definition: "A floating rate where the central bank intervenes occasionally." },
        { term: "Devaluation", definition: "A deliberate reduction in the value of a fixed exchange rate." },
        { term: "Revaluation", definition: "A deliberate increase in the value of a fixed exchange rate." },
        { term: "Price competitiveness", definition: "Competing through lower prices." },
        { term: "Non-price competitiveness", definition: "Competing through quality, design, service or branding." },
      ],
      concepts: [
        {
          id: "ecn10-u4-fxsys",
          title: "Exchange Rate Systems and Policy",
          skill: "Compare fixed, floating and managed exchange rate systems and their policy tools.",
          sections: [
            {
              heading: "Exchange rate systems",
              body: "**Floating**: rate set by market demand and supply — automatic adjustment, no intervention needed, but can be volatile. **Fixed**: central bank commits to a set rate, buying or selling currency reserves to hold it — certainty for traders, but reserves can run out. **Managed float (dirty float)**: floating rate with occasional central bank intervention to steer it.",
            },
            {
              heading: "Devaluation and revaluation",
              body: "Under a **fixed** system, the central bank may **devalue** (lower the rate) to boost exports and cut imports — costs: imported inflation, loss of confidence. **Revaluation** (raise the rate) does the opposite — helps control inflation, hurts exporters. Under a float, a fall is called **depreciation** — the market does it, not the government.",
            },
            {
              heading: "Policy trade-offs",
              body: "Floating rates give automatic adjustment to trade imbalances but expose the economy to speculation and volatility. Fixed rates give stability and discipline on inflation but require large reserves and may need periodic painful devaluations. Most modern economies use some form of **managed float**.",
            },
          ],
          keyFormulas: [
            { name: "Devaluation", statement: "Deliberate cut in a fixed rate → cheaper exports, dearer imports" },
            { name: "Revaluation", statement: "Deliberate rise in a fixed rate → dearer exports, cheaper imports" },
            { name: "Managed float", statement: "Market rate with occasional central bank intervention" },
          ],
          workedExample: {
            problem: "A country on a fixed exchange rate wants to reduce its trade deficit. What can it do and what is the main cost?",
            solution: "Devalue the currency — exports become cheaper and imports dearer. Cost: imported inflation and possible loss of confidence.",
          },
          questions: [
            {
              id: "ecn10-u4-fxsys-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a fixed exchange rate?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A rate set by supply and demand" },
                { id: "b", text: "A rate maintained by the central bank at a set level" },
                { id: "c", text: "A rate that changes every day" },
                { id: "d", text: "A tax on currency exchange" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Fixed rate", statement: "Central bank holds the rate at a set level." }],
                steps: [{ reasoning: "Fixed = government/central bank commitment.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Maintained by the central bank",
                commonErrors: ["Confusing with floating."],
              },
            },
            {
              id: "ecn10-u4-fxsys-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between depreciation and devaluation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Depreciation vs devaluation", statement: "Depreciation = market fall; devaluation = deliberate cut in fixed rate." }],
                steps: [
                  { reasoning: "Depreciation happens under a floating rate via market forces.", marks: 1, markCode: "AO1" },
                  { reasoning: "Devaluation is a deliberate policy under a fixed rate.", marks: 1, markCode: "AO1" },
                  { reasoning: "Both lower the currency's value and have similar effects on trade.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Depreciation = market; devaluation = policy choice.",
                commonErrors: ["Using the terms interchangeably."],
              },
            },
            {
              id: "ecn10-u4-fxsys-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two advantages of a floating exchange rate system.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Floating rates", statement: "Automatic adjustment without reserve use." }],
                steps: [
                  { reasoning: "The rate adjusts automatically to trade imbalances.", marks: 1, markCode: "AO2" },
                  { reasoning: "No need to hold large foreign currency reserves.", marks: 1, markCode: "AO2" },
                  { reasoning: "Monetary policy is free — no need to defend a rate.", marks: 1, markCode: "AO2" },
                  { reasoning: "The market sets the rate, reducing political interference.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Automatic adjustment, no reserve burden, free monetary policy.",
                commonErrors: ["Listing disadvantages instead."],
              },
            },
            {
              id: "ecn10-u4-fxsys-q4", difficulty: "challenge", totalMarks: 6,
              stem: "A country operates a fixed exchange rate and runs out of foreign currency reserves.",
              parts: [
                { label: "a", prompt: "Explain why reserves are needed to maintain a fixed rate.", marks: 3 },
                { label: "b", prompt: "Explain what the country must do if reserves run out.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Fixed rate defence", statement: "Reserves are used to buy the currency when it weakens." }],
                steps: [
                  { reasoning: "(a) When the currency weakens, the central bank buys it using reserves.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) This supports demand and holds the rate at the fixed level.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) It must devalue — let the rate fall to a new fixed level.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Or abandon the fixed rate and float the currency.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) reserves buy the currency to defend the rate (b) devalue or float",
                commonErrors: ["Saying reserves are irrelevant to fixed rates."],
              },
            },
            {
              id: "ecn10-u4-fxsys-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Two countries, P and Q, have identical economies but P has a fixed rate and Q floats.",
              parts: [
                { label: "a", prompt: "Explain how each country's exchange rate would respond to a fall in export demand.", marks: 4 },
                { label: "b", prompt: "Evaluate which system gives more stability for exporters.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Rate systems", statement: "Fixed rates resist change until reserves fail; floats adjust continuously." }],
                steps: [
                  { reasoning: "(a) P's central bank uses reserves to defend the fixed rate — delayed adjustment.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Eventually P may be forced to devalue sharply.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Q's rate depreciates smoothly via market forces — no defence needed.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Fixed gives short-term certainty but risks a sudden devaluation.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Floating is volatile but avoids the risk of abrupt collapse — judgement needed.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) P defends then devalues; Q adjusts smoothly (b) fixed = certainty then risk; float = volatility",
                commonErrors: ["Ignoring the risk of a forced devaluation."],
              },
            },
            {
              id: "ecn10-u4-fxsys-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Country R, with a fixed exchange rate, faces a large trade deficit and falling reserves.",
              parts: [
                { label: "a", prompt: "Explain two policies R could use to defend the fixed rate.", marks: 4 },
                { label: "b", prompt: "Explain two costs of defending the rate.", marks: 3 },
                { label: "c", prompt: "Evaluate whether R should devalue the currency.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Rate defence", statement: "Reserves, interest rates and capital controls can defend a fixed rate." }],
                steps: [
                  { reasoning: "(a) Sell foreign currency reserves to buy domestic currency.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Raise interest rates to attract capital inflows.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Reserves are finite — defence may only delay the fall.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) High interest rates slow growth and raise unemployment.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Devaluation could restore competitiveness and save reserves.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) But it causes imported inflation and may hurt confidence — judgement needed.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) reserves, interest rates (b) finite reserves, slower growth (c) devalue if fundamentals weak — evaluate",
                commonErrors: ["No evaluation of the trade-off."],
              },
            },
          ],
        },
        {
          id: "ecn10-u4-comp",
          title: "Exchange Rates and Competitiveness",
          skill: "Evaluate how exchange rates affect price and non-price competitiveness.",
          sections: [
            {
              heading: "Price vs non-price competitiveness",
              body: "**Price competitiveness** = ability to compete on low prices — driven by low costs, exchange rates and productivity. **Non-price competitiveness** = quality, design, reliability, branding, after-sales service — lets firms charge premium prices. A strong currency hurts price competitiveness but may reflect non-price strength.",
            },
            {
              heading: "Exchange rates and competitiveness",
              body: "A **weaker currency** makes exports cheaper → boosts price competitiveness but raises import costs. A **stronger currency** does the reverse. However, non-price factors can outweigh price: German cars remain competitive despite a strong euro because of quality and brand.",
            },
            {
              heading: "Policy links",
              body: "Governments cannot sustainably rely on a weak currency — it causes imported inflation and may not fix underlying inefficiency. **Supply-side policies** (education, infrastructure, innovation) build **non-price competitiveness** — a more durable advantage. Exchange rate policy is one tool among many.",
            },
          ],
          keyFormulas: [
            { name: "Price competitiveness", statement: "Low prices via low costs, weak currency, high productivity" },
            { name: "Non-price competitiveness", statement: "Quality, design, service, brand — sustainable advantage" },
          ],
          workedExample: {
            problem: "Country S has a weak currency but poor product quality. Will depreciation alone make it competitive?",
            solution: "Only partly — cheaper prices help, but low quality limits demand; supply-side improvement is needed for lasting competitiveness.",
          },
          questions: [
            {
              id: "ecn10-u4-comp-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is non-price competitiveness?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Competing only on low prices" },
                { id: "b", text: "Competing through quality, design, service or branding" },
                { id: "c", text: "Setting prices below cost" },
                { id: "d", text: "Competing on exchange rates" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Non-price competitiveness", statement: "Quality, design, service, brand." }],
                steps: [{ reasoning: "Non-price = competing on factors other than price.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Quality, design, service or branding",
                commonErrors: ["Confusing with price competitiveness."],
              },
            },
            {
              id: "ecn10-u4-comp-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Explain two ways a weaker currency can improve a country's competitiveness.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Weak currency", statement: "Exports cheaper abroad → more competitive." }],
                steps: [
                  { reasoning: "Exports become cheaper for foreign buyers → higher demand.", marks: 1, markCode: "AO2" },
                  { reasoning: "Imports become dearer → domestic firms gain protection.", marks: 1, markCode: "AO2" },
                  { reasoning: "Tourism and services also become cheaper for foreigners.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Cheaper exports, protected domestic market, cheaper tourism.",
                commonErrors: ["Claiming a weaker currency always helps competitiveness."],
              },
            },
            {
              id: "ecn10-u4-comp-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why non-price competitiveness may be more sustainable than price competitiveness.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sustainable competitiveness", statement: "Quality advantages are harder to copy than low prices." }],
                steps: [
                  { reasoning: "Low prices can be matched by rivals cutting costs too.", marks: 1, markCode: "AO2" },
                  { reasoning: "Price advantages erode as wages and exchange rates change.", marks: 1, markCode: "AO2" },
                  { reasoning: "Quality and brand build customer loyalty over time.", marks: 1, markCode: "AO2" },
                  { reasoning: "Non-price advantages usually mean higher profit margins.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Non-price advantages are harder to replicate and more profitable long term.",
                commonErrors: ["Assuming price always wins."],
              },
            },
            {
              id: "ecn10-u4-comp-q4", difficulty: "challenge", totalMarks: 6,
              stem: "Country T's currency has appreciated by 20% over two years.",
              parts: [
                { label: "a", prompt: "Explain the effect on T's price competitiveness.", marks: 3 },
                { label: "b", prompt: "Explain how non-price competitiveness could reduce the damage.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Appreciation", statement: "Strong currency raises export prices." }],
                steps: [
                  { reasoning: "(a) Exports become 20% more expensive for foreign buyers.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Export demand falls unless quality offsets the price rise.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Superior quality, design or service can justify higher prices.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Brand loyalty keeps customers despite dearer prices.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) exports dearer, demand falls (b) quality/brand can offset",
                commonErrors: ["Ignoring non-price factors."],
              },
            },
            {
              id: "ecn10-u4-comp-q5", difficulty: "challenge", totalMarks: 8,
              stem: "Two firms compete in the same export market: Firm A has low prices, Firm B has high quality.",
              parts: [
                { label: "a", prompt: "Explain the price competitiveness of each firm.", marks: 4 },
                { label: "b", prompt: "Explain which firm is likely to be more resilient to a currency appreciation.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Price vs non-price", statement: "A competes on price; B competes on quality." }],
                steps: [
                  { reasoning: "(a) A's low prices attract price-sensitive customers.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) B's quality attracts customers willing to pay more.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) B is more resilient — quality justifies higher prices after appreciation.", marks: 2, markCode: "AO3", part: "b" },
                  { reasoning: "(b) A's thin margins cannot absorb the higher foreign price.", marks: 2, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) A price-led, B quality-led (b) B — quality buffers currency shocks",
                commonErrors: ["Assuming low prices always win."],
              },
            },
            {
              id: "ecn10-u4-comp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A developing country wants to improve its export competitiveness.",
              parts: [
                { label: "a", prompt: "Explain two price-based ways to improve competitiveness.", marks: 4 },
                { label: "b", prompt: "Explain two non-price ways to improve competitiveness.", marks: 3 },
                { label: "c", prompt: "Evaluate which approach is likely to be more successful long term.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Competitiveness policy", statement: "Price and non-price strategies both matter; non-price is more durable." }],
                steps: [
                  { reasoning: "(a) Depreciation or lower production costs reduce export prices.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Productivity gains lower unit labour costs.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Investment in education and training raises product quality.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Innovation, design and branding build customer loyalty.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Reliable infrastructure and service standards help too.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Non-price advantage is more sustainable but takes longer to build.", marks: 2, markCode: "AO3", part: "c" },
                  { reasoning: "(c) Price strategies give quick wins — best combined over time.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) depreciation, cost cuts (b) quality, innovation, infrastructure (c) non-price more durable; combine both",
                commonErrors: ["No evaluation or one-sided strategy."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecn10-u4-fxsys-notes", title: "Exchange rate policy — notes",
      summary: "Fixed vs floating vs managed rates; devaluation vs depreciation; price vs non-price competitiveness.",
      sections: [
        { heading: "Key idea", body: "Fixed rates need reserves and risk devaluation; floats adjust automatically but are volatile." },
        { heading: "Devaluation", body: "Deliberate cut in a fixed rate — cheaper exports but imported inflation." },
        { heading: "Competitiveness", body: "Price advantages are fragile; quality and innovation give durable advantage." },
      ],
    },
  },
];

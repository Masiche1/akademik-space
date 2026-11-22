import type { Lesson } from "../../../types.ts";

export const lesson66: Lesson = {
  id: "cieige-u6-lesson-6-6",
  code: "6-6",
  title: "International Trade and Comparative Advantage",
  goal: "I CAN explain comparative advantage, trade gains, protectionism and trade blocs.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Unit 6: international economics",
  ],
  vocabulary: [
    {
      term: "Comparative advantage",
      definition: "Ability to produce at lower opportunity cost than others.",
    },
    {
      term: "Absolute advantage",
      definition: "Ability to produce more of a good with same resources.",
    },
    {
      term: "Terms of trade",
      definition: "Ratio of export prices to import prices.",
    },
    {
      term: "Protectionism",
      definition: "Policies restricting trade — tariffs, quotas, subsidies.",
    },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Physical limit on quantity of imports." },
  ],
  concepts: [
    {
      id: "cieige-u6l6-c1-trade",
      title: "Comparative advantage and trade gains",
      skill:
        "Explain comparative advantage, gains from trade and terms of trade.",
      lesson: {
        sections: [
          {
            heading: "Comparative advantage",
            body: "A country has **comparative advantage** in producing a good if it can do so at **lower opportunity cost** than trading partners — even if it has absolute advantage in both. Specialisation and trade let both countries consume beyond their production possibilities.",
          },
          {
            heading: "Gains from trade",
            body: "Trade benefits via: **specialisation** (efficiency), **wider choice**, **lower prices** (competition), and **economies of scale**. **Terms of trade** = export prices ÷ import prices — improvement means exports buy more imports. Risks: structural unemployment in declining industries, dependence on volatile markets.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparative advantage",
            statement: "Lower opportunity cost",
          },
          {
            name: "Terms of trade",
            statement: "Export price index ÷ import price index",
          },
          {
            name: "Gains",
            statement: "Specialisation + choice + lower prices",
          },
        ],
        workedExample: {
          problem:
            "Country A: 1 worker makes 10 cars OR 20 computers. Country B: 1 worker makes 8 cars OR 12 computers. Who has comparative advantage in computers?",
          solution:
            "A's opportunity cost of 1 computer = 0.5 car; B's = 0.67 car. A has comparative advantage in computers; B in cars (check: A car = 2 computers, B car = 1.5 computers — B lower cost of cars).",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l6c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Comparative advantage means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher productivity" },
              { id: "b", text: "Lower opportunity cost of production" },
              { id: "c", text: "Produce more of everything" },
              { id: "d", text: "Lower absolute cost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Lower opportunity cost.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Lower opportunity cost",
            commonErrors: ["Confusing with absolute advantage."],
          },
        },
        {
          id: "cieige-q-u6l6c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish absolute from comparative advantage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute vs comparative",
                statement: "More output vs lower opportunity cost.",
              },
            ],
            steps: [
              { reasoning: "Absolute defined.", marks: 1, markCode: "M" },
              { reasoning: "Comparative defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Absolute: produce more with same resources. Comparative: lower opportunity cost — a country can have absolute advantage in both goods yet still gain from trade via comparative advantage.",
            commonErrors: ["Treating them as same."],
          },
        },
        {
          id: "cieige-q-u6l6c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do both countries gain from trade even if one has absolute advantage in everything?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade gains",
                statement: "Comparative advantage allows mutual benefit.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Specialisation benefit.", marks: 1, markCode: "M" },
              { reasoning: "Consumption beyond PPF.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each specialises in its lower-opportunity-cost good; combined output rises, allowing both to consume more than autarky — gains come from comparative, not absolute, advantage.",
            commonErrors: ["Thinking absolute advantage needed."],
          },
        },
        {
          id: "cieige-q-u6l6c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Country X: 1 worker = 6 wine OR 3 cloth. Country Y: 1 worker = 8 wine OR 4 cloth. Determine comparative advantage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Opportunity cost",
                statement: "Compute OC of each good.",
              },
            ],
            steps: [
              {
                reasoning: "X's OC: wine=0.5 cloth, cloth=2 wine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Y's OC: wine=0.5 cloth, cloth=2 wine.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identical OCs → no comparative advantage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Y has absolute advantage in both.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "X: wine OC = 3/6 = 0.5 cloth; cloth OC = 6/3 = 2 wine. Y: wine OC = 4/8 = 0.5 cloth; cloth OC = 8/4 = 2 wine. Identical opportunity costs — no comparative advantage; Y has absolute advantage in both.",
            commonErrors: ["Arithmetic errors."],
          },
        },
        {
          id: "cieige-q-u6l6c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that free trade always benefits all participants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free trade debate",
                statement: "Aggregate gains vs distributional losses.",
              },
            ],
            steps: [
              { reasoning: "Aggregate gains.", marks: 1, markCode: "M" },
              { reasoning: "Distributional losses.", marks: 1, markCode: "M" },
              { reasoning: "Conditions for gains.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Free trade raises aggregate welfare but creates losers (import-competing industries, workers) — gains are real but unevenly distributed, requiring adjustment policies.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l6c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'terms of trade'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "Export prices ÷ import prices.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Improvement meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ratio of export prices to import prices — improvement means exports buy more imports; deterioration means exports buy fewer.",
            commonErrors: ["Reversing ratio."],
          },
        },
        {
          id: "cieige-q-u6l6c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gains from trade come mainly from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Currency devaluation" },
              { id: "b", text: "Higher tariffs" },
              { id: "c", text: "Government subsidies" },
              {
                id: "d",
                text: "Specialisation according to comparative advantage",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Trade gains",
                statement: "Specialisation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Specialisation",
            commonErrors: ["Wrong source."],
          },
        },
        {
          id: "cieige-q-u6l6c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of international trade for consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade benefits",
                statement: "Choice, prices, variety.",
              },
            ],
            steps: [
              { reasoning: "Two valid benefits.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. wider product choice (imports) and lower prices (competition + comparative advantage) — consumers access goods they couldn't produce domestically.",
            commonErrors: ["Producer-only benefits."],
          },
        },
        {
          id: "cieige-q-u6l6c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might terms of trade deteriorate for developing countries?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ToT deterioration",
                statement: "Primary products vs manufactures price trends.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Prebisch-Singer idea.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Developing countries export primary products (volatile, falling prices) and import manufactures (rising prices) — long-term price trends deteriorate their terms of trade.",
            commonErrors: ["Thinking ToT is static."],
          },
        },
        {
          id: "cieige-q-u6l6c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse who loses from free trade and how policy can help them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade losers",
                statement: "Import-competing industries/workers.",
              },
            ],
            steps: [
              { reasoning: "Who loses.", marks: 1, markCode: "M" },
              { reasoning: "Why.", marks: 1, markCode: "M" },
              { reasoning: "Policy responses.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Workers in import-competing industries lose jobs as cheaper imports arrive — retraining, unemployment benefits and gradual adjustment policies can ease transition costs.",
            commonErrors: ["Ignoring distributional effects."],
          },
        },
        {
          id: "cieige-q-u6l6c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country has comparative advantage in a good when it can produce it at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower opportunity cost than trading partners" },
              { id: "b", text: "Lower absolute cost" },
              { id: "c", text: "Lower wages" },
              { id: "d", text: "Higher productivity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Lower opportunity cost.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Lower opportunity cost",
            commonErrors: ["Confusing with absolute advantage."],
          },
        },
        {
          id: "cieige-q-u6l6c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Country A: 1 worker = 12 cars OR 6 computers. Country B: 1 worker = 8 cars OR 8 computers. Who has comparative advantage in computers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither country" },
              { id: "b", text: "Both countries" },
              { id: "c", text: "Country B" },
              { id: "d", text: "Country A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Opportunity cost",
                statement: "OC of computer: A=2 cars, B=1 car.",
              },
            ],
            steps: [
              { reasoning: "OC computed correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Country B (OC = 1 car < A's 2 cars)",
            commonErrors: ["Comparing output not opportunity cost."],
          },
        },
        {
          id: "cieige-q-u6l6c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An improvement in a country's terms of trade means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exports fall" },
              { id: "b", text: "Currency depreciates" },
              { id: "c", text: "Export prices rise relative to import prices" },
              { id: "d", text: "Imports become cheaper" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "Export prices ÷ import prices.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Export prices rise relative to import prices",
            commonErrors: ["Reversing ratio."],
          },
        },
        {
          id: "cieige-q-u6l6c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways in which international trade benefits producers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Trade benefits",
                statement: "Larger markets, scale economies.",
              },
            ],
            steps: [
              { reasoning: "Two valid benefits.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. access to larger export markets increasing sales, and economies of scale from producing for a bigger market — lowering average costs.",
            commonErrors: ["Consumer-only benefits."],
          },
        },
        {
          id: "cieige-q-u6l6c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how increased international trade can cause structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade unemployment",
                statement: "Import competition displaces workers.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Why structural not frictional.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cheaper imports undercut domestic industries → firms close or downsize → workers lose jobs in declining sectors; skills don't match new industries, so unemployment persists — structural, not just frictional.",
            commonErrors: ["No mechanism."],
          },
        },
        {
          id: "cieige-q-u6l6c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether a country should always specialise according to comparative advantage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialisation debate",
                statement: "Efficiency vs vulnerability/interdependence.",
              },
            ],
            steps: [
              { reasoning: "Efficiency case.", marks: 1, markCode: "M" },
              { reasoning: "Vulnerability case.", marks: 1, markCode: "M" },
              { reasoning: "Strategic considerations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Specialisation maximises efficiency but creates dependence on trade partners and vulnerability to shocks (e.g. food, energy, key inputs) — some diversification may be prudent despite lower efficiency.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l6-c2-protection",
      title: "Protectionism and trade blocs",
      skill: "Evaluate tariffs, quotas and trade agreements.",
      lesson: {
        sections: [
          {
            heading: "Protectionist measures",
            body: "**Tariffs** — tax on imports, raises price, reduces quantity. **Quotas** — physical limit on imports. **Subsidies** — support domestic producers. **Non-tariff barriers** — regulations, standards, bureaucracy. Arguments: protect infant industries, save jobs, national security, prevent dumping. Costs: higher prices, retaliation, inefficiency.",
          },
          {
            heading: "Trade blocs and agreements",
            body: "**Free trade areas** (NAFTA/USMCA) remove internal barriers. **Customs unions** add common external tariff. **Single market** (EU) adds free movement of factors. **WTO** promotes multilateral free trade. Blocs can be trade-creating or trade-diverting.",
          },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "Tax on imports → price↑, Q↓" },
          { name: "Quota", statement: "Physical limit on imports" },
          {
            name: "Trade bloc types",
            statement: "FTA, customs union, single market",
          },
        ],
        workedExample: {
          problem: "A 20% tariff on imported steel. Effects?",
          solution:
            "Import price rises 20% → quantity demanded falls → domestic steel producers gain, consumers pay more, government gains revenue — but possible retaliation.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l6c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tariff is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subsidy" },
              { id: "b", text: "A free trade agreement" },
              { id: "c", text: "A physical limit on imports" },
              { id: "d", text: "A tax on imported goods" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tariff", statement: "Import tax." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Import tax",
            commonErrors: ["Confusing with quota."],
          },
        },
        {
          id: "cieige-q-u6l6c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two arguments for protectionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Protection arguments",
                statement: "Jobs, infant industry, security.",
              },
            ],
            steps: [
              { reasoning: "Two valid arguments.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. protect domestic jobs from cheaper imports and nurture 'infant industries' until competitive — though costs are higher prices and inefficiency.",
            commonErrors: ["Only listing without explanation."],
          },
        },
        {
          id: "cieige-q-u6l6c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a tariff affect domestic consumers and producers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tariff effects",
                statement: "Consumers lose, producers gain.",
              },
            ],
            steps: [
              { reasoning: "Consumer effect.", marks: 1, markCode: "M" },
              { reasoning: "Producer effect.", marks: 1, markCode: "M" },
              { reasoning: "Government effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consumers pay higher prices and buy less; domestic producers gain (protected from competition); government gains tariff revenue — net welfare usually falls.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l6c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish a free trade area from a customs union.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FTA vs CU",
                statement: "Internal free vs common external tariff.",
              },
            ],
            steps: [
              { reasoning: "FTA defined.", marks: 1, markCode: "M" },
              { reasoning: "CU defined.", marks: 1, markCode: "M" },
              { reasoning: "Example each.", marks: 1, markCode: "M" },
              { reasoning: "Difference clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "FTA: members remove internal tariffs but keep own external tariffs (USMCA). Customs union: FTA + common external tariff (EU customs union) — deeper integration.",
            commonErrors: ["Treating as same."],
          },
        },
        {
          id: "cieige-q-u6l6c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether trade blocs promote or hinder global free trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade blocs",
                statement: "Regional integration vs global fragmentation.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: efficiency, scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: trade diversion, exclusion.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "WTO role.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Blocs can be stepping stones to global free trade or stumbling blocks creating exclusionary preferences — evidence mixed; WTO rules limit harmful discrimination.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l6c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dumping'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dumping",
                statement: "Selling below cost abroad.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why anti-dumping.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Selling goods abroad below cost price — predatory pricing to gain market share; anti-dumping duties justify protection.",
            commonErrors: ["Confusing with normal export."],
          },
        },
        {
          id: "cieige-q-u6l6c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quota differs from a tariff because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is a tax" },
              {
                id: "b",
                text: "Limits quantity directly rather than via price",
              },
              { id: "c", text: "Subsidises exports" },
              { id: "d", text: "Is voluntary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quota",
                statement: "Quantity limit.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Limits quantity",
            commonErrors: ["Confusing with tariff."],
          },
        },
        {
          id: "cieige-q-u6l6c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a government subsidise its exporters?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Export subsidy",
                statement: "Boost competitiveness.",
              },
            ],
            steps: [
              { reasoning: "Rationale.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "WTO rules.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Subsidies lower export prices, boosting competitiveness — but cost taxpayers, distort trade and are often WTO-illegal if they harm competitors.",
            commonErrors: ["No costs."],
          },
        },
        {
          id: "cieige-q-u6l6c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the 'WTO'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WTO",
                statement: "Multilateral trade rules body.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Functions.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "World Trade Organization — sets rules for international trade, resolves disputes, promotes liberalisation; limited by national sovereignty and enforcement difficulties.",
            commonErrors: ["Confusing with IMF/World Bank."],
          },
        },
        {
          id: "cieige-q-u6l6c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should developing countries protect their industries from foreign competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrial policy",
                statement: "Infant industry vs efficiency.",
              },
            ],
            steps: [
              { reasoning: "Case for protection.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Temporary protection can nurture infant industries (East Asian model) but becomes permanent rent-seeking if no exit strategy — needs clear criteria and sunset clauses.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l6c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quota is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A free trade agreement" },
              { id: "b", text: "A tax on imported goods" },
              { id: "c", text: "A physical limit on the quantity of imports" },
              { id: "d", text: "A subsidy to exporters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quota", statement: "Quantity limit." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Physical limit on imports",
            commonErrors: ["Confusing with tariff."],
          },
        },
        {
          id: "cieige-q-u6l6c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tariff on imported steel most directly benefits:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Domestic consumers" },
              { id: "b", text: "Domestic steel producers" },
              { id: "c", text: "Foreign exporters" },
              { id: "d", text: "The steel-importing country only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tariff effects",
                statement: "Protects domestic producers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Domestic steel producers",
            commonErrors: ["Missing distributional effect."],
          },
        },
        {
          id: "cieige-q-u6l6c2-13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "'Trade diversion' within a trade bloc occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tariffs are removed globally" },
              { id: "b", text: "Members stop trading entirely" },
              {
                id: "c",
                text: "Members buy from each other despite cheaper outside suppliers",
              },
              { id: "d", text: "Imports rise without limit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade diversion",
                statement: "Trade shifts to higher-cost bloc members.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Trade shifts to bloc members",
            commonErrors: ["Confusing with trade creation."],
          },
        },
        {
          id: "cieige-q-u6l6c2-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two non-tariff barriers to trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Non-tariff barriers",
                statement: "Regulations, quotas, bureaucracy, standards.",
              },
            ],
            steps: [
              { reasoning: "Two valid barriers.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. strict product safety/quality standards that imports must meet, and bureaucratic customs procedures or quotas — all restricting trade without a tax.",
            commonErrors: ["Listing tariffs."],
          },
        },
        {
          id: "cieige-q-u6l6c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a tariff and a quota differ in their effects on government revenue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Tariff vs quota revenue",
                statement: "Tariff raises revenue; quota may not.",
              },
            ],
            steps: [
              { reasoning: "Tariff revenue effect.", marks: 1, markCode: "M" },
              { reasoning: "Quota revenue effect.", marks: 1, markCode: "M" },
              { reasoning: "Who gains quota rents.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A tariff generates revenue for government on each unit imported; a quota limits quantity but generates no revenue unless licences are sold — quota rents may go to import licence holders instead.",
            commonErrors: ["Thinking quota always raises revenue."],
          },
        },
        {
          id: "cieige-q-u6l6c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'infant industry' argument for protection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infant industry",
                statement: "Temporary protection to build competitiveness.",
              },
            ],
            steps: [
              { reasoning: "Argument explained.", marks: 1, markCode: "M" },
              { reasoning: "Evidence/examples.", marks: 1, markCode: "M" },
              { reasoning: "Difficulties.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "New industries may need temporary protection to achieve scale and learning before facing competition — but protection often becomes permanent (rent-seeking), so success needs clear criteria and an exit strategy.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson46: Lesson = {
  id: "ciegp-u4-lesson-4-6",
  code: "4-6",
  title: "Globalisation, Trade, Aid and Debt",
  goal: "I CAN analyse globalisation, trade structures, aid effectiveness and debt burdens for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: global issues",
  ],
  vocabulary: [
    {
      term: "Globalisation",
      definition:
        "Increasing interconnectedness of economies, societies and cultures.",
    },
    {
      term: "Comparative advantage",
      definition:
        "Producing what you can make most efficiently relative to others.",
    },
    {
      term: "Protectionism",
      definition:
        "Policies shielding domestic industries from foreign competition.",
    },
    {
      term: " tied aid",
      definition: "Aid requiring purchase of donor-country goods/services.",
    },
    {
      term: "Debt trap",
      definition: "Cycle where borrowing to repay debt deepens indebtedness.",
    },
    {
      term: "Washington Consensus",
      definition:
        "Market-oriented reform package promoted for developing countries.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l6-c1-trade",
      title: "Globalisation and trade",
      skill: "Analyse trade benefits, protectionism and uneven globalisation.",
      lesson: {
        sections: [
          {
            heading: "Globalisation's uneven gains",
            body: "Globalisation integrates markets, spreads technology and raises aggregate incomes — but gains are **uneven**. **Comparative advantage** theory says all benefit from trade, yet in practice protectionism, unequal bargaining power and 'race to the bottom' labour standards mean losers exist. Winners: consumers, export sectors, skilled workers. Losers: import-competing industries, unskilled workers in rich countries, environments bearing pollution.",
          },
          {
            heading: "Protectionism and trade disputes",
            body: "**Protectionism** — tariffs, quotas, subsidies — shields domestic industries but raises consumer prices and invites retaliation. Arguments for: infant industries, national security, saving jobs. Arguments against: deadweight loss, trade wars, higher prices. Free-trade agreements (WTO, regional blocs) aim to reduce barriers but face criticism for favouring capital over labour and constraining developing-country policy space.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparative advantage",
            statement: "Specialise where relative efficiency is highest",
          },
          {
            name: "Protectionism",
            statement: "Tariffs/quotas/subsidies shielding domestic firms",
          },
          {
            name: "Race to the bottom",
            statement: "Competing on low wages/standards to attract investment",
          },
        ],
        workedExample: {
          problem: "Why might free trade harm a developing country's workers?",
          solution:
            "Competition from efficient producers can destroy local industries faster than new jobs appear; weak labour protections mean 'race to the bottom' on wages rather than upgrading.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l6c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'globalisation'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing interconnectedness of economies, societies and cultures",
              },
              { id: "b", text: "The internet" },
              { id: "c", text: "Only international trade" },
              { id: "d", text: "Colonial expansion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "Economic, social, cultural interconnectedness.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increasing interconnectedness",
            commonErrors: ["Reducing it to trade only."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'comparative advantage'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Produce where relative efficiency is greatest.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Trade implication noted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Producing goods where your relative efficiency is highest — even if you're less efficient overall, specialisation and trade benefit all parties.",
            commonErrors: ["Confusing with absolute advantage."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two winners and two losers from globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation distribution",
                statement: "Gains concentrated; losses real.",
              },
            ],
            steps: [
              { reasoning: "Two winners.", marks: 1, markCode: "M" },
              { reasoning: "Two losers.", marks: 1, markCode: "M" },
              { reasoning: "Valid examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Winners: consumers (cheaper goods), export sectors/skilled workers. Losers: import-competing industries, unskilled workers, environments bearing pollution.",
            commonErrors: ["Only winners or only losers."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the case for protectionism in a developing country.",
          parts: [
            { label: "a", prompt: "Arguments for protectionism", marks: 2 },
            { label: "b", prompt: "Arguments against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protectionism debate",
                statement: "Shield infant industries vs costs and retaliation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. protect infant industries, save jobs, national security.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Valid reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. higher consumer prices, inefficiency, trade war risk.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Valid reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Temporary, targeted protection may help; permanent broad protection usually harmful.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Temporary targeted protection of infant industries can work, but broad permanent protection raises prices and invites retaliation — use cautiously and temporarily.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'race to the bottom' in globalisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Race to the bottom",
                statement: "Competing on low wages/standards for investment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Countries competing for investment by cutting wages and labour/environmental standards — lowering conditions globally rather than upgrading.",
            commonErrors: ["Confusing with price competition generally."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why free trade agreements can be controversial for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FTA critique",
                statement: "Constrain policy space; asymmetrical power.",
              },
            ],
            steps: [
              {
                reasoning: "Policy space constraint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Asymmetric negotiating power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Labour/environment standards issue.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "They can restrict subsidies and industrial policy needed for development, and negotiating power is asymmetric — rich countries set terms favouring their interests.",
            commonErrors: ["Only citing sovereignty concerns."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'protectionism'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Policies shielding domestic industries from foreign competition",
              },
              { id: "b", text: "Importing goods" },
              { id: "c", text: "International free trade" },
              { id: "d", text: "Removing all trade barriers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protectionism",
                statement: "Tariffs, quotas, subsidies.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Shielding domestic industries",
            commonErrors: ["Confusing with free trade."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse the claim: 'Free trade lifts all boats.'",
          parts: [
            { label: "a", prompt: "Evidence supporting it", marks: 2 },
            { label: "b", prompt: "Evidence/qualifications against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
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
              {
                part: "a",
                reasoning:
                  "e.g. post-war growth, poverty reduction in East Asia.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Consumer gains.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "e.g. job losses, inequality rise, 'Dutch disease'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Adjustment costs fall unevenly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Trade benefits most but needs adjustment policies for losers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Free trade raises aggregate incomes but 'all boats' overstates it — gains concentrate while adjustment costs fall on specific groups, requiring compensating policies.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'tariff'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement: "Tax on imported goods.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A tax on imported goods — makes imports more expensive, protecting domestic producers but raising consumer prices.",
            commonErrors: ["Confusing with quota."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do some argue globalisation threatens cultural diversity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural globalisation",
                statement:
                  "Dominant cultures spread, marginalising local ones.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Nuance: also enables exchange.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Global media and brands spread dominant (often Western) culture, potentially homogenising local traditions — though exchange can also enrich cultures.",
            commonErrors: ["One-sided without nuance."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'comparative advantage' mean in trade theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being the best at everything" },
              { id: "b", text: "Producing goods cheapest in absolute terms" },
              { id: "c", text: "Winning trade disputes" },
              {
                id: "d",
                text: "Specialising where your relative efficiency is highest, even if another country is better at everything",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Relative efficiency determines gains.",
              },
            ],
            steps: [
              { reasoning: "Relative, not absolute, efficiency drives trade gains.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Specialise where relative efficiency is highest",
            commonErrors: ["Confusing with absolute advantage."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a tariff, and what is its intended effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement: "Tax on imports to shield domestic industry.",
              },
            ],
            steps: [
              {
                reasoning: "Defines tariff as import tax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Intended: protect domestic jobs/firms; side effect: higher consumer prices.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A tax on imported goods meant to protect domestic industry — at the cost of higher prices for consumers.",
            commonErrors: ["Confusing tariff with quota."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country imposes a 25% tariff on $80 million of imports. How much tariff revenue does it raise?",
          response: {
            type: "numeric",
            parts: [{ label: "Tariff revenue ($m)", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tariff calculation",
                statement: "Rate x import value.",
              },
            ],
            steps: [
              { reasoning: "0.25 x 80 = $20m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20 million",
            commonErrors: ["Applying tariff to domestic production instead."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quota allows 1,000 units of an imported good but demand is 1,500 units. What percentage of demand is blocked?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage blocked", answer: 33.3, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quota effect",
                statement: "Unmet demand / total demand.",
              },
            ],
            steps: [
              { reasoning: "(1500-1000)/1500 x 100 = 33.3%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "33.3%",
            commonErrors: ["Dividing by the quota instead of demand."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'race to the bottom' argument about labour standards and globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Race to the bottom",
                statement: "Competition pressures countries to cut labour/environmental standards.",
              },
            ],
            steps: [
              {
                reasoning: "Firms relocate to lowest-cost, weakest-regulation locations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Countries compete by lowering wages/safety/environment rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: worker exploitation and environmental harm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Global competition for investment pressures countries to weaken labour and environmental standards to attract firms.",
            commonErrors: ["Presenting it as inevitable rather than a policy choice."],
          },
        },
        {
          id: "ciegp-q-u4l6c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'free trade benefits all countries equally'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Uneven trade gains",
                statement: "Aggregate gains mask distributional losers.",
              },
            ],
            steps: [
              {
                reasoning: "Theory: comparative advantage suggests mutual gains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reality: losers exist — import-competing industries, unskilled workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unequal bargaining power and protectionism distort outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: gains are real but uneven — 'all equally' is false.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Free trade raises aggregate welfare but gains are unevenly distributed; 'benefits all equally' is not supported by evidence.",
            commonErrors: ["Accepting theory without examining distribution."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l6-c2-aid",
      title: "Aid and debt",
      skill: "Evaluate aid effectiveness, tied aid and debt sustainability.",
      lesson: {
        sections: [
          {
            heading: "Aid debates",
            body: "**Official development assistance (ODA)** aims to reduce poverty and promote development. Debates: does aid work? Evidence is mixed — aid can fund infrastructure, health, education, but can also foster dependency, fund corrupt regimes, or be poorly targeted. **Tied aid** (requiring purchase of donor goods) reduces effectiveness. **Humanitarian vs development aid** differ: emergency relief vs long-term capacity building.",
          },
          {
            heading: "Debt burdens",
            body: "Many developing countries face **debt crises** — borrowing for development, then struggling to repay as interest compounds. **Debt traps** occur when new loans fund repayment of old ones. Responses: **debt relief** (HIPC initiative, debt cancellation), restructuring, and conditionality (IMF/World Bank structural adjustment). Debate: does relief enable development or reward bad governance? Conditionality critics argue it imposes harmful policies (austerity, privatisation).",
          },
        ],
        keyFormulas: [
          {
            name: "Tied aid",
            statement: "Aid requiring purchase of donor-country goods",
          },
          {
            name: "Debt trap",
            statement: "Borrowing to repay debt deepens indebtedness",
          },
          {
            name: "Conditionality",
            statement: "Policy requirements attached to loans/relief",
          },
        ],
        workedExample: {
          problem: "Why might debt relief be controversial?",
          solution:
            "Critics argue it rewards poor governance and reduces future borrowing discipline; supporters say unsustainable debt makes development impossible regardless of governance.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l6c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'tied aid'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aid given as loans" },
              {
                id: "b",
                text: "Aid requiring the recipient to spend it on donor-country goods/services",
              },
              { id: "c", text: "Emergency relief" },
              { id: "d", text: "Private charity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tied aid",
                statement: "Conditional on donor procurement.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Aid tied to donor goods",
            commonErrors: ["Confusing with loan aid."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'official development assistance'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ODA",
                statement: "Government aid to promote development.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Government-funded aid (grants/loans) aimed at reducing poverty and promoting development in poorer countries.",
            commonErrors: ["Confusing with private charity."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two arguments that aid works and two that it fails.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid effectiveness",
                statement: "Mixed evidence both ways.",
              },
            ],
            steps: [
              { reasoning: "Two 'works' arguments.", marks: 1, markCode: "M" },
              { reasoning: "Two 'fails' arguments.", marks: 1, markCode: "M" },
              { reasoning: "Valid examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Works: funds health/education infrastructure; reduces poverty in well-governed states. Fails: dependency, corruption, poor targeting, tied aid inefficiency.",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Debt relief is the fairest way to help poor countries.'",
          parts: [
            {
              label: "a",
              prompt: "Arguments supporting debt relief",
              marks: 2,
            },
            { label: "b", prompt: "Arguments against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt relief debate",
                statement: "Moral case vs moral hazard.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. unsustainable debt blocks all development; historical injustice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Valid reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. rewards bad governance; moral hazard for future borrowing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Valid reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Relief justified for unsustainable debt but should be conditional.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Debt relief is justified when debt is genuinely unsustainable, but unconditional relief risks moral hazard — conditional relief tied to governance reforms is fairer.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'debt trap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt trap",
                statement: "Borrowing to repay debt deepens indebtedness.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A cycle where new borrowing is needed just to service old debt, so debt grows faster than the economy — eventually requiring relief or default.",
            commonErrors: ["Confusing with poverty generally."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'conditionality' in IMF/World Bank lending?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conditionality",
                statement: "Policy requirements attached to loans.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Typical conditions named.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Critique noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policy requirements (austerity, privatisation, liberalisation) attached to loans — critics argue they impose harmful 'Washington Consensus' policies regardless of local context.",
            commonErrors: ["Only defining without critique."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'humanitarian aid'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long-term development loans" },
              {
                id: "b",
                text: "Emergency relief for immediate needs like food, shelter, medical care",
              },
              { id: "c", text: "Military assistance" },
              { id: "d", text: "Trade subsidies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Humanitarian aid",
                statement: "Emergency relief, not development.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Emergency relief",
            commonErrors: ["Confusing with development aid."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim: 'Aid creates dependency and should be abolished.'",
          parts: [
            { label: "a", prompt: "Evidence supporting the claim", marks: 2 },
            { label: "b", prompt: "Evidence against", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid dependency",
                statement: "Risk real but aid also essential in crises.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. Dutch disease, corruption, reduced local incentives.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Valid reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "e.g. saves lives in crises; funds essential services.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Valid reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reform aid (untied, conditional) rather than abolish.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dependency is a real risk, but aid remains essential for crises and basic services — better to reform (untie, condition) than abolish.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might 'untied' aid be more effective than 'tied' aid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Untied vs tied aid",
                statement: "Recipient chooses how to spend → more efficient.",
              },
            ],
            steps: [
              {
                reasoning: "Tied aid forces donor goods at higher prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Untied lets recipients buy locally/efficiently.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tied aid forces recipients to buy donor goods (often overpriced); untied aid lets them spend on what they actually need, usually locally and more efficiently.",
            commonErrors: ["Only noting donor benefit, not efficiency."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'debt sustainability'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt sustainability",
                statement:
                  "Ability to service debt without compromising development.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Indicator noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Whether a country can repay debts while still funding essential development — measured by debt-to-GDP and debt-service-to-revenue ratios.",
            commonErrors: ["Confusing with ability to repay at all costs."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'debt trap'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Borrowing new loans to repay old ones, deepening indebtedness",
              },
              { id: "b", text: "A type of aid grant" },
              { id: "c", text: "A tax on borrowing" },
              { id: "d", text: "A country with no debts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt trap",
                statement: "Rolling over debt to service debt.",
              },
            ],
            steps: [
              { reasoning: "New borrowing services old debt — cycle deepens.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Borrowing to repay old loans",
            commonErrors: ["Confusing with ordinary borrowing."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'conditionality' in development lending?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conditionality",
                statement: "Policy requirements attached to loans or relief.",
              },
            ],
            steps: [
              {
                reasoning: "Defines policy conditions on lending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Critics: imposes austerity/privatisation; supporters: ensures repayment discipline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Policy requirements attached to loans/relief — e.g. IMF structural adjustment — debated for imposing harmful policies.",
            commonErrors: ["Confusing with interest rates."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country owes $50 billion and has a GDP of $200 billion. What is its debt-to-GDP ratio?",
          response: {
            type: "numeric",
            parts: [{ label: "Debt-to-GDP (%)", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Debt ratio",
                statement: "Debt/GDP x 100.",
              },
            ],
            steps: [
              { reasoning: "50/200 x 100 = 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A donor gives $10 billion in aid, of which 30% is tied to donor goods. How much is untied?",
          response: {
            type: "numeric",
            parts: [{ label: "Untied aid ($bn)", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tied aid",
                statement: "Untied = total - tied portion.",
              },
            ],
            steps: [
              { reasoning: "10 x 0.70 = $7bn untied.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7 billion",
            commonErrors: ["Reporting the tied portion instead."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does tied aid reduce the effectiveness of development assistance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tied aid",
                statement: "Forced purchases reduce value for money.",
              },
            ],
            steps: [
              {
                reasoning: "Recipient must buy donor goods, often overpriced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limits choice — goods may not match local needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less aid value reaches actual development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tied aid forces purchases of donor goods — often overpriced and mismatched to needs — reducing real development value.",
            commonErrors: ["Assuming tied aid is more accountable therefore better."],
          },
        },
        {
          id: "ciegp-q-u4l6c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the argument that 'debt relief rewards bad governance and reduces future borrowing discipline'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debt relief debate",
                statement: "Moral hazard vs unsustainable debt.",
              },
            ],
            steps: [
              {
                reasoning: "For the argument: relief can reduce incentive to reform and borrow wisely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: unsustainable debt makes development impossible regardless of governance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: many debts stem from shocks/odious debt, not just bad governance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: relief justified when paired with governance conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Relief risks moral hazard but unsustainable debt blocks development; best paired with governance reforms rather than granted unconditionally.",
            commonErrors: ["Ignoring that debt burdens often predate current governments."],
          },
        },
      ],
    },
  ],
};

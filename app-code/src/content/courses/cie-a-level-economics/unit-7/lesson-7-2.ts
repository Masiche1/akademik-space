import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cieale-u7-lesson-7-2",
  code: "7-2",
  title: "International Trade and Protectionism",
  goal: "I CAN analyse gains from trade, compare protectionist instruments and evaluate their costs and benefits.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 7: trade and protectionism",
  ],
  vocabulary: [
    {
      term: "Comparative advantage",
      definition: "Lower opportunity cost of production.",
    },
    {
      term: "Absolute advantage",
      definition: "Higher productivity/lower cost.",
    },
    { term: "Tariff", definition: "Tax on imports." },
    { term: "Quota", definition: "Physical limit on imports." },
    {
      term: "Subsidy",
      definition: "Government support to domestic producers.",
    },
    {
      term: "Trade creation vs diversion",
      definition: "Efficiency gains vs inefficient sourcing.",
    },
  ],
  concepts: [
    {
      id: "cieale-u7l2-c1-gains",
      title: "Gains from trade",
      skill: "Explain comparative advantage and terms of trade gains.",
      lesson: {
        sections: [
          {
            heading: "Comparative advantage",
            body: "Countries gain from trade when each specialises in goods where it has **comparative advantage** — lower opportunity cost, NOT necessarily absolute advantage. Even if one country is better at everything, both gain by specialising where opportunity cost is lowest. Terms of trade between opportunity costs determine distribution of gains.",
          },
          {
            heading: "Sources of gains",
            body: "**Consumption gains**: access to more variety, lower prices. **Production gains**: specialisation → economies of scale, learning by doing. **Dynamic gains**: competition forces innovation. **Terms of trade gains**: exporting dear, importing cheap improves real income.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparative advantage",
            statement: "Lower opportunity cost",
          },
          { name: "Terms of trade", statement: "Px/Pm" },
          { name: "Trade gain", statement: "Specialisation + exchange" },
        ],
        workedExample: {
          problem:
            "Country A produces both goods at lower cost than B. Can trade still benefit both?",
          solution:
            "Yes — if A has comparative advantage in one good (lower opportunity cost), both specialise; B imports what it produces at highest opportunity cost, freeing resources for its comparative advantage good.",
        },
      },
      questions: [
        {
          id: "cieale-q-u7l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Comparative advantage is based on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absolute productivity" },
              { id: "b", text: "Wealth" },
              { id: "c", text: "Size of economy" },
              { id: "d", text: "Opportunity cost" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Opportunity cost.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Opportunity cost",
            commonErrors: ["Confusing absolute."],
          },
        },
        {
          id: "cieale-q-u7l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish absolute from comparative advantage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Advantage types",
                statement: "Productivity vs opportunity cost.",
              },
            ],
            steps: [
              { reasoning: "Absolute defined.", marks: 1, markCode: "M" },
              { reasoning: "Comparative defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Absolute: produce more efficiently (lower cost). Comparative: lower opportunity cost — basis for mutually beneficial trade even without absolute advantage.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u7l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does trade benefit both countries even if one has absolute advantage in all goods?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade gains",
                statement: "Specialisation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example logic.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each has comparative advantage somewhere (lower opportunity cost in one good) → specialisation increases total output → exchange makes both better off.",
            commonErrors: ["Trade only if equal."],
          },
        },
        {
          id: "cieale-q-u7l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain 'terms of trade' and who gains from their movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "Export/import price ratio.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Improvement effect.", marks: 1, markCode: "M" },
              { reasoning: "Distribution.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ratio of export to import prices — improvement means more imports per export → real income rises; gains distributed between countries depend on bargaining power.",
            commonErrors: ["Uniform benefit assumed."],
          },
        },
        {
          id: "cieale-q-u7l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the assumptions behind comparative advantage theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CA assumptions",
                statement: "Static, no costs.",
              },
            ],
            steps: [
              { reasoning: "Assumptions listed.", marks: 1, markCode: "M" },
              { reasoning: "Reality gaps.", marks: 1, markCode: "M" },
              { reasoning: "Dynamic issues.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Assumes constant costs, full employment, no transport costs, static advantage — reality has increasing costs, unemployment, transport, and dynamic learning → gains smaller/different.",
            commonErrors: ["Perfect theory."],
          },
        },
        {
          id: "cieale-q-u7l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'dynamic gains' from trade?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic gains",
                statement: "Long-run improvements.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Long-term benefits: competition drives innovation, economies of scale, technology transfer, human capital development — beyond static efficiency gains.",
            commonErrors: ["Static gains only."],
          },
        },
        {
          id: "cieale-q-u7l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Specialisation based on comparative advantage:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only works with tariffs" },
              { id: "b", text: "Increases total output" },
              { id: "c", text: "Decreases welfare" },
              { id: "d", text: "Requires equal productivity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specialisation",
                statement: "Efficiency.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Output up",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u7l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two costs of trade that limit its benefits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Trade costs",
                statement: "Transport, adjustment, distribution.",
              },
            ],
            steps: [
              { reasoning: "Two valid costs.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. transport costs reduce gains; structural unemployment during adjustment; gains may be unequally distributed — winners gain more than losers lose.",
            commonErrors: ["Only benefits."],
          },
        },
        {
          id: "cieale-q-u7l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'intra-industry trade' occur between similar countries?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intra-industry",
                statement: "Product differentiation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Countries export/import similar goods (cars, electronics) due to product differentiation, economies of scale, consumer variety — gains differ from inter-industry trade.",
            commonErrors: ["Only comparative advantage."],
          },
        },
        {
          id: "cieale-q-u7l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether free trade is always beneficial for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free trade",
                statement: "Benefits vs costs.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs to developing.", marks: 1, markCode: "M" },
              {
                reasoning: "Infant industry argument.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Free trade can exploit comparative advantage but may destroy infant industries before they mature; developing countries may need temporary protection — 'strategic' trade policy.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u7l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Comparative advantage is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "producing more output than any competitor" },
              { id: "b", text: "receiving government support" },
              { id: "c", text: "having the lowest absolute production cost" },
              { id: "d", text: "the ability to produce a good at a lower opportunity cost than another producer" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Lower opportunity cost",
            commonErrors: ["Confusing with absolute advantage."],
          },
        },
        {
          id: "cieale-q-u7l2c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Country A, one unit of labour can produce either 6 units of wheat or 3 units of cloth. Calculate the opportunity cost of one unit of cloth in terms of wheat.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "units of wheat" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Opportunity cost",
                statement: "Units of wheat forgone per unit of cloth.",
              },
            ],
            steps: [
              {
                reasoning: "OC of cloth = 6/3 = 2 units of wheat.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Opportunity cost = 2 units of wheat",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "cieale-q-u7l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If one country has an absolute advantage in producing every good:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only the advanced country gains" },
              { id: "b", text: "autarky is the optimal outcome" },
              { id: "c", text: "both countries can still gain from trade through comparative advantage" },
              { id: "d", text: "trade cannot benefit anyone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gains from trade",
                statement: "Comparative, not absolute.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Both still gain",
            commonErrors: ["Thinking absolute advantage blocks trade."],
          },
        },
        {
          id: "cieale-q-u7l2c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The terms of trade are measured as Px/Pm. Export prices rise from 100 to 120 while import prices stay at 100; later export prices fall to 110.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.2 },
              { label: "b", answer: -8.3, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Terms of trade",
                statement: "Px/Pm and its % change.",
              },
            ],
            steps: [
              {
                reasoning: "Initial ToT = 120/100 = 1.2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New ToT = 110/100 = 1.1; % change = (1.1−1.2)/1.2 = −8.3%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "ToT = 1.2 → 1.1 (−8.3%)",
            commonErrors: ["Comparing price levels instead of the ratio."],
          },
        },
        {
          id: "cieale-q-u7l2c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Consumption gains' from trade refer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "higher profits for domestic firms" },
              { id: "b", text: "access to a greater variety of goods and lower prices" },
              { id: "c", text: "increased government revenue" },
              { id: "d", text: "lower wages for workers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consumption gains",
                statement: "Variety + lower prices.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Variety and lower prices",
            commonErrors: ["Confusing with production gains."],
          },
        },
        {
          id: "cieale-q-u7l2c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Before trade, two countries together produce 200 units of output. With specialisation and trade they produce 260 units. Calculate the gain in total output.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trade gain",
                statement: "Post-trade output − pre-trade output.",
              },
            ],
            steps: [
              {
                reasoning: "Gain = 260 − 200 = 60 units.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Gain = 60 units of output",
            commonErrors: ["Reporting 260 as the gain."],
          },
        },
      ],
    },
    {
      id: "cieale-u7l2-c2-protection",
      title: "Protectionism: instruments and evaluation",
      skill:
        "Compare tariffs, quotas and subsidies and evaluate protectionist arguments.",
      lesson: {
        sections: [
          {
            heading: "Protectionist instruments",
            body: "**Tariff**: tax on imports → raises price, reduces quantity, creates deadweight loss + government revenue. **Quota**: physical limit → similar effect but no revenue (quota rents to license holders). **Subsidy**: support domestic producers → cheaper domestic goods, but costs taxpayers, may provoke retaliation.",
          },
          {
            heading: "Arguments for and against",
            body: "**For**: protect infant industries, safeguard employment, national security, prevent dumping, improve terms of trade (large country). **Against**: deadweight loss, higher consumer prices, retaliation, hides inefficiency, reduces competition. **Strategic**: temporary protection for learning, but capture risk.",
          },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "Import tax → P↑ Q↓" },
          { name: "Quota", statement: "Physical limit" },
          { name: "DWL", statement: "Tariff/quota deadweight loss" },
        ],
        workedExample: {
          problem:
            "Why does a tariff create deadweight loss while a quota may not create revenue?",
          solution:
            "Tariff: government gets revenue but consumers pay more, imports fall → DWL. Quota: same quantity restriction but no tax → no revenue, quota rents go to license holders instead.",
        },
      },
      questions: [
        {
          id: "cieale-q-u7l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tariff is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A ban" },
              { id: "b", text: "A tax on imports" },
              { id: "c", text: "A physical limit" },
              { id: "d", text: "A subsidy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tariff", statement: "Import tax." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Import tax",
            commonErrors: ["Confusing quota."],
          },
        },
        {
          id: "cieale-q-u7l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'deadweight loss' from a tariff?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DWL",
                statement: "Lost gains from trade.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lost consumer surplus from reduced imports + inefficient domestic production — resources misallocated because protection distorts comparative advantage.",
            commonErrors: ["Confusing with revenue."],
          },
        },
        {
          id: "cieale-q-u7l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'infant industry' argument for protection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infant industry",
                statement: "Temporary protection.",
              },
            ],
            steps: [
              { reasoning: "Argument.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "New industries need protection until they achieve economies of scale/competitiveness — but may never mature, become permanent protection, or be captured.",
            commonErrors: ["Guaranteed success."],
          },
        },
        {
          id: "cieale-q-u7l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare tariff and quota effects on government revenue and consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tariff vs quota",
                statement: "Revenue vs rents.",
              },
            ],
            steps: [
              { reasoning: "Tariff effect.", marks: 1, markCode: "M" },
              { reasoning: "Quota effect.", marks: 1, markCode: "M" },
              { reasoning: "Consumer impact.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both raise price/reduce imports. Tariff: government gets revenue. Quota: no revenue — rents go to license holders; consumers pay same higher price either way.",
            commonErrors: ["Same revenue."],
          },
        },
        {
          id: "cieale-q-u7l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'strategic trade policy' as a case for protectionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strategic trade",
                statement: "Game theory argument.",
              },
            ],
            steps: [
              { reasoning: "Argument.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "In oligopolistic markets, government support can shift profits to domestic firms — but requires picking winners (capture risk), retaliation, and perfect information — rarely works.",
            commonErrors: ["Guaranteed success."],
          },
        },
        {
          id: "cieale-q-u7l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'dumping'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dumping",
                statement: "Below-cost exports.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why illegal.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Selling exports below cost/home price to gain market share — unfair competition, can destroy domestic industry; anti-dumping duties allowed under WTO.",
            commonErrors: ["Confusing with normal exports."],
          },
        },
        {
          id: "cieale-q-u7l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quota differs from a tariff because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only applies to services" },
              { id: "b", text: "It generates revenue" },
              { id: "c", text: "It's voluntary" },
              { id: "d", text: "It limits quantity not price" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Quantity limit",
            commonErrors: ["Same as tariff."],
          },
        },
        {
          id: "cieale-q-u7l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two arguments FOR protectionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Protection arguments",
                statement: "Jobs, security, infant.",
              },
            ],
            steps: [
              { reasoning: "Two valid arguments.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. protect employment in declining industries and safeguard national security industries — or infant industry development.",
            commonErrors: ["Arguments against."],
          },
        },
        {
          id: "cieale-q-u7l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does protectionism risk retaliation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retaliation",
                statement: "Trade war.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Other countries impose their own barriers → trade volumes fall → both sides lose gains from trade — trade wars can escalate to broader conflict.",
            commonErrors: ["No retaliation expected."],
          },
        },
        {
          id: "cieale-q-u7l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether trade agreements like WTO promote or restrict trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "WTO",
                statement: "Rules-based system.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Criticisms.", marks: 1, markCode: "M" },
              { reasoning: "Balance.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "WTO reduces tariffs via negotiation and dispute settlement but rules can favour developed countries; 'fair' trade requires addressing developing country needs — mixed record.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u7l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tariff is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a tax imposed on imported goods" },
              { id: "b", text: "a restriction on exports" },
              { id: "c", text: "a physical limit on imports" },
              { id: "d", text: "a subsidy paid to exporters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement: "Tax on imports.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Tax on imports",
            commonErrors: ["Confusing with quota."],
          },
        },
        {
          id: "cieale-q-u7l2c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The world price of a good is $100 and a 20% ad valorem tariff is imposed. Calculate the domestic price.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Tariff",
                statement: "Domestic price = world price × (1 + tariff rate).",
              },
            ],
            steps: [
              {
                reasoning: "Price = 100 × 1.20 = $120.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Domestic price = $120",
            commonErrors: ["Adding 20% of a different base."],
          },
        },
        {
          id: "cieale-q-u7l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compared with a tariff, a quota:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is itself a tax on imports" },
              { id: "b", text: "raises government revenue" },
              { id: "c", text: "limits quantity directly and generates no government revenue" },
              { id: "d", text: "always costs consumers less" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Quota vs tariff",
                statement: "Quantity limit, no revenue.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Quantity limit, no revenue",
            commonErrors: ["Thinking quotas raise revenue."],
          },
        },
        {
          id: "cieale-q-u7l2c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A tariff of $5 per unit is applied while imports are 1,000 units per year. Imports later fall to 800 units per year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5000, unit: "dollars" },
              { label: "b", answer: 4000, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Tariff revenue",
                statement: "Tariff per unit × quantity imported.",
              },
            ],
            steps: [
              {
                reasoning: "Initial revenue = 1000 × 5 = $5,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New revenue = 800 × 5 = $4,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Revenue falls from $5,000 to $4,000",
            commonErrors: ["Assuming revenue is unchanged when imports fall."],
          },
        },
        {
          id: "cieale-q-u7l2c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A subsidy to domestic producers tends to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "benefit only foreign consumers" },
              { id: "b", text: "raise world prices for imports" },
              { id: "c", text: "reduce competition in the market" },
              { id: "d", text: "lower their costs and make imports relatively more expensive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsidy",
                statement: "Government support to producers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Lowers costs, protects from imports",
            commonErrors: ["Confusing with a tariff."],
          },
        },
        {
          id: "cieale-q-u7l2c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quota allows 500 units of imports. The world price is $10 but the domestic price rises to $14. Calculate the annual quota rent.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000, unit: "dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Quota rent",
                statement: "(Domestic − world price) × quota quantity.",
              },
            ],
            steps: [
              {
                reasoning: "Rent per unit = 14 − 10 = $4; total = 500 × 4 = $2,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Quota rent = $2,000 per year",
            commonErrors: ["Using the full domestic price as the rent."],
          },
        },
      ],
    },
  ],
};

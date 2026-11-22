import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "econ-u4-lesson-6-3",
  code: "6-3",
  title: "Globalisation",
  goal: "I CAN explain the benefits and costs of globalisation, the role of multinational corporations, and evaluate protectionist policies.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Globalisation", definition: "The increasing integration of national economies through trade, investment, technology and cultural exchange." },
    { term: "Multinational corporation (MNC)", definition: "A company operating in multiple countries — e.g. Apple, Toyota, Shell." },
    { term: "Comparative advantage", definition: "A country can produce a good at a lower opportunity cost than another country." },
    { term: "Tariff", definition: "A tax on imported goods." },
    { term: "Quota", definition: "A physical limit on the quantity of imports allowed." },
    { term: "Protectionism", definition: "Policies restricting free trade to protect domestic industries — tariffs, quotas, subsidies." },
  ],
  concepts: [
    {
      id: "econ-u6-globalisation-benefits",
      title: "Globalisation: Benefits and Drivers",
      skill: "Explain the drivers of globalisation and its benefits for trade, growth, consumers and developing countries.",
      lesson: {
        sections: [
          {
            heading: "Drivers of globalisation",
            body: "Globalisation is driven by: **trade liberalisation** (reduced tariffs/quotas via WTO, regional trade agreements), **technological advances** (transport, communication, internet), **capital mobility** (foreign direct investment, financial flows), and **MNC expansion**. Containerisation, air travel and digital technology have dramatically reduced the costs of international trade.",
          },
          {
            heading: "Benefits of globalisation",
            body: "**Consumers**: cheaper, more varied goods. **Producers**: larger markets, economies of scale, access to resources/labour. **Countries**: trade gains via **comparative advantage** — specialise where opportunity cost is lowest. **Developing countries**: access to investment, technology, jobs (export manufacturing). **Poverty reduction**: globalisation has lifted millions out of poverty (China, Vietnam, Bangladesh).",
          },
          {
            heading: "Multinational corporations",
            body: "**MNCs** operate across borders, bringing investment, jobs, technology and tax revenue to host countries. **Benefits**: FDI, employment, skills transfer, infrastructure. **Costs**: profit repatriation, tax avoidance, exploitation of weak labour/environmental standards, crowding out local firms, political influence. Host countries must balance attracting MNCs against protecting domestic interests.",
          },
        ],
        keyFormulas: [
          { name: "Comparative advantage", statement: "Lower opportunity cost of production → specialisation → trade gains" },
          { name: "Globalisation drivers", statement: "Trade liberalisation + technology + capital mobility + MNCs" },
        ],
        workedExample: {
          problem: "Country A can produce 100 cars or 50 computers; Country B can produce 50 cars or 100 computers. Who has comparative advantage in cars?",
          solution: "Country A: 1 car costs 0.5 computers. Country B: 1 car costs 2 computers. A has lower opportunity cost → comparative advantage in cars; B in computers.",
        },
      },
      questions: [
        {
          id: "econ-u6-l63c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Comparative advantage means a country can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce everything more cheaply than others" },
              { id: "b", text: "Have the largest economy" },
              { id: "c", text: "Export more than it imports" },
              { id: "d", text: "Produce a good at a lower opportunity cost than another country" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comparative advantage", statement: "Lower opportunity cost of producing a good than trading partners." },
            ],
            steps: [
              { reasoning: "Comparative advantage = lower opportunity cost, not necessarily absolute advantage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Produce a good at a lower opportunity cost than another country",
            commonErrors: ["Confusing comparative advantage with absolute advantage."],
          },
        },
        {
          id: "econ-u6-l63c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain two benefits of globalisation for consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalisation benefits", statement: "Cheaper goods, more variety, better quality via competition." },
            ],
            steps: [
              { reasoning: "Cheaper goods: imports from low-cost producers reduce prices.", marks: 1, markCode: "M" },
              { reasoning: "More variety: access to foreign products expands choice.", marks: 1, markCode: "M" },
              { reasoning: "Better quality: international competition forces firms to improve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consumers gain from cheaper prices, greater variety and improved quality.",
            commonErrors: ["Listing producer benefits instead of consumer benefits."],
          },
        },
        {
          id: "econ-u6-l63c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how multinational corporations can benefit a developing host country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "MNC benefits", statement: "FDI, jobs, technology transfer, tax revenue." },
            ],
            steps: [
              { reasoning: "Foreign direct investment brings capital that domestic savings cannot provide.", marks: 1, markCode: "M" },
              { reasoning: "MNCs create jobs — direct employment and in supplier industries.", marks: 1, markCode: "M" },
              { reasoning: "Technology and skills transfer raise productivity of local workers and firms.", marks: 1, markCode: "R" },
              { reasoning: "Tax revenue and infrastructure improvements benefit the wider economy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MNCs bring investment, jobs, technology transfer and tax revenue to host countries.",
            commonErrors: ["Ignoring that benefits depend on host country policies and conditions."],
          },
        },
        {
          id: "econ-u6-l63c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the benefits of globalisation for developing countries.",
          parts: [
            { label: "a", prompt: "Explain two ways globalisation helps developing countries.", marks: 3 },
            { label: "b", prompt: "Explain how trade based on comparative advantage benefits all countries.", marks: 3 },
            { label: "c", prompt: "Evaluate whether globalisation is net beneficial for the poorest countries.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalisation and development", statement: "FDI, market access, technology transfer vs exploitation and dependency." },
            ],
            steps: [
              { part: "a", reasoning: "FDI and MNCs bring capital, jobs and technology.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Access to export markets lets them sell to rich countries.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Remittances and knowledge spillovers support development.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Specialisation by comparative advantage increases total world output.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Trade allows countries to consume beyond their PPF — gains from trade.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All countries benefit even if one has absolute advantage in everything.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evidence shows globalisation reduced poverty in many countries (China, Vietnam).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But benefits are uneven — some countries/regions left behind; depends on institutions and policies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) FDI/jobs + market access + remittances. (b) Specialisation → gains from trade for all. (c) Net positive but uneven — depends on institutions.",
            commonErrors: ["Claiming only rich countries benefit — evidence shows developing countries gained too."],
          },
        },
        {
          id: "econ-u6-l63c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a driver of globalisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduced foreign direct investment" },
              { id: "b", text: "Strict capital controls" },
              { id: "c", text: "Higher tariffs on imports" },
              { id: "d", text: "Technological advances in transport and communication" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drivers of globalisation", statement: "Trade liberalisation, technology, capital mobility and MNC expansion." },
            ],
            steps: [
              { reasoning: "Cheaper transport, communication and internet have slashed the cost of international trade.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Technological advances in transport and communication",
            commonErrors: ["Confusing protectionism (tariffs, controls) with the drivers of globalisation."],
          },
        },
        {
          id: "econ-u6-l63c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Trade based on comparative advantage leads countries to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop trading with each other" },
              { id: "b", text: "Produce everything domestically" },
              { id: "c", text: "Only trade goods they cannot produce at all" },
              { id: "d", text: "Specialise in goods where their opportunity cost is lowest, creating gains from trade" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative advantage", statement: "Specialising where opportunity cost is lowest increases total output and benefits all trading partners." },
            ],
            steps: [
              { reasoning: "Each country specialises in goods with the lowest opportunity cost.", marks: 1, markCode: "M" },
              { reasoning: "Trade then allows consumption beyond each country's PPF — mutual gains.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Specialise in goods where their opportunity cost is lowest, creating gains from trade",
            commonErrors: ["Thinking trade only benefits the stronger economy — comparative advantage gives gains to all."],
          },
        },
        {
          id: "econ-u6-l63c1q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A multinational corporation (MNC) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A government trade agency" },
              { id: "b", text: "A company that operates in only one country" },
              { id: "c", text: "A company operating in multiple countries" },
              { id: "d", text: "An international bank" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MNC", statement: "A firm with production or operations in more than one country." },
            ],
            steps: [
              { reasoning: "MNCs operate across borders — e.g. Apple, Toyota, Shell.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A company operating in multiple countries",
            commonErrors: ["Confusing an MNC with a domestic firm or a government body."],
          },
        },
        {
          id: "econ-u6-l63c1q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement best evaluates the claim that 'globalisation benefits all countries equally'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "True — all countries gain the same amount from trade" },
              { id: "b", text: "True — comparative advantage guarantees equal gains" },
              { id: "c", text: "False — gains are real but unevenly distributed between and within countries" },
              { id: "d", text: "False — globalisation harms every country" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Uneven gains", statement: "Globalisation creates winners and losers — gains depend on institutions, policies and position in the value chain." },
            ],
            steps: [
              { reasoning: "Trade creates net gains, but their size varies with a country's resources and institutions.", marks: 1, markCode: "R" },
              { reasoning: "Within countries, gains may concentrate among capital owners and skilled workers.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is the best evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** False — gains are real but unevenly distributed between and within countries",
            commonErrors: ["Claiming globalisation benefits everyone equally or harms everyone — it is uneven."],
          },
        },
        {
          id: "econ-u6-l63c1q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Absolute advantage means a country can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have the lowest prices for all goods" },
              { id: "b", text: "Export more than it imports" },
              { id: "c", text: "Produce a good at a lower opportunity cost than another country" },
              { id: "d", text: "Produce more of a good than another country using the same resources" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute advantage", statement: "Producing more output than a trading partner with the same inputs." },
            ],
            steps: [
              { reasoning: "Absolute advantage is about productivity levels, unlike comparative advantage which is about opportunity cost.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Produce more of a good than another country using the same resources",
            commonErrors: ["Confusing absolute advantage (productivity) with comparative advantage (opportunity cost)."],
          },
        },
        {
          id: "econ-u6-l63c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Country A can produce 100 cars or 50 computers. Country B can produce 50 cars or 100 computers. Calculate the opportunity cost of one car for each country and identify which has comparative advantage in cars.",
          response: {
            type: "numeric",
            parts: [
              { label: "Country A OC of 1 car (computers)", answer: 0.5 },
              { label: "Country B OC of 1 car (computers)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Opportunity cost", statement: "OC = quantity of next-best alternative forgone" },
            ],
            steps: [
              { reasoning: "A: 100 cars ↔ 50 computers, so 1 car costs 50/100 = 0.5 computers.", working: "\\frac{50}{100} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "B: 50 cars ↔ 100 computers, so 1 car costs 100/50 = 2 computers.", working: "\\frac{100}{50} = 2", marks: 1, markCode: "M" },
              { reasoning: "A's opportunity cost of cars (0.5) is lower than B's (2), so A has comparative advantage in cars.", marks: 1, markCode: "A" },
              { reasoning: "Conversely B has comparative advantage in computers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A: 0.5 computers per car; B: 2 computers per car — A has comparative advantage in cars.",
            commonErrors: ["Inverting the ratio — divide the forgone good by the chosen good."],
          },
        },
        {
          id: "econ-u6-l63c1q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Country X can produce 200 phones or 100 tablets; Country Y can produce 100 phones or 200 tablets. Calculate the opportunity cost of one tablet for each country and identify which has comparative advantage in tablets.",
          response: {
            type: "numeric",
            parts: [
              { label: "Country X OC of 1 tablet (phones)", answer: 2 },
              { label: "Country Y OC of 1 tablet (phones)", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Opportunity cost", statement: "OC = quantity of next-best alternative forgone" },
            ],
            steps: [
              { reasoning: "X: 200 phones ↔ 100 tablets, so 1 tablet costs 200/100 = 2 phones.", working: "\\frac{200}{100} = 2", marks: 1, markCode: "M" },
              { reasoning: "Y: 100 phones ↔ 200 tablets, so 1 tablet costs 100/200 = 0.5 phones.", working: "\\frac{100}{200} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Y's opportunity cost of tablets (0.5) is lower than X's (2), so Y has comparative advantage in tablets.", marks: 1, markCode: "A" },
              { reasoning: "X has comparative advantage in phones — each country specialises in its lower-OC good.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "X: 2 phones per tablet; Y: 0.5 phones per tablet — Y has comparative advantage in tablets.",
            commonErrors: ["Dividing the wrong way — the opportunity cost of tablets is phones forgone per tablet."],
          },
        },
        {
          id: "econ-u6-l63c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An imported good has a world price of $80. The government imposes a tariff of 25%. Calculate the tariff amount and the new domestic price of the import.",
          response: {
            type: "numeric",
            parts: [
              { label: "Tariff amount per unit ($)", answer: 20 },
              { label: "New domestic price ($)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tariff", statement: "Domestic price = world price + tariff" },
            ],
            steps: [
              { reasoning: "Tariff = 25% × $80 = $20.", working: "0.25 \\times 80 = 20", marks: 1, markCode: "M" },
              { reasoning: "New price = 80 + 20 = $100.", working: "80 + 20 = 100", marks: 1, markCode: "M" },
              { reasoning: "The tariff is $20 per unit.", marks: 1, markCode: "A" },
              { reasoning: "The new domestic price is $100 — a 25% rise makes imports less competitive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tariff = $20; new price = $100.",
            commonErrors: ["Applying the tariff to the new price instead of the world price."],
          },
        },
        {
          id: "econ-u6-l63c1q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A country imports 1,000 units of a good at $50 each. A tariff of $10 per unit is imposed, reducing import demand by 20%. Calculate the new quantity of imports and the government's tariff revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "New quantity of imports", answer: 800 },
              { label: "Tariff revenue ($)", answer: 8000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tariff revenue", statement: "Revenue = tariff per unit × new quantity of imports" },
            ],
            steps: [
              { reasoning: "New quantity = 1,000 × 0.80 = 800 units.", working: "1000 \\times 0.80 = 800", marks: 1, markCode: "M" },
              { reasoning: "Revenue = 800 × $10 = $8,000.", working: "800 \\times 10 = 8000", marks: 1, markCode: "M" },
              { reasoning: "New imports = 800 units.", marks: 1, markCode: "A" },
              { reasoning: "Tariff revenue = $8,000 — the government gains revenue but consumers pay more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New imports = 800 units; tariff revenue = $8,000.",
            commonErrors: ["Using the original 1,000 units for revenue — the tariff reduces quantity."],
          },
        },
        {
          id: "econ-u6-l63c1q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Country A can produce 60 cars or 30 computers; Country B can produce 40 cars or 80 computers. Calculate the opportunity cost of one computer for each country and identify which has comparative advantage in computers.",
          response: {
            type: "numeric",
            parts: [
              { label: "Country A OC of 1 computer (cars)", answer: 2 },
              { label: "Country B OC of 1 computer (cars)", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Opportunity cost", statement: "OC = quantity of next-best alternative forgone" },
            ],
            steps: [
              { reasoning: "A: 60 cars ↔ 30 computers, so 1 computer costs 60/30 = 2 cars.", working: "\\frac{60}{30} = 2", marks: 1, markCode: "M" },
              { reasoning: "B: 40 cars ↔ 80 computers, so 1 computer costs 40/80 = 0.5 cars.", working: "\\frac{40}{80} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "B's opportunity cost of computers (0.5) is lower than A's (2), so B has comparative advantage in computers.", marks: 1, markCode: "A" },
              { reasoning: "A has comparative advantage in cars — specialisation benefits both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A: 2 cars per computer; B: 0.5 cars per computer — B has comparative advantage in computers.",
            commonErrors: ["Dividing by the wrong output — OC of computers is cars forgone per computer."],
          },
        },
        {
          id: "econ-u6-l63c1q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country's exports are $100bn and imports are $90bn. Over the next year exports rise to $130bn and imports rise to $117bn. Calculate the trade balance (exports − imports) in each year.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial trade balance ($bn)", answer: 10 },
              { label: "New trade balance ($bn)", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trade balance", statement: "Trade balance = exports − imports" },
            ],
            steps: [
              { reasoning: "Initial balance = 100 − 90 = $10bn surplus.", working: "100 - 90 = 10", marks: 1, markCode: "M" },
              { reasoning: "New balance = 130 − 117 = $13bn surplus.", working: "130 - 117 = 13", marks: 1, markCode: "M" },
              { reasoning: "Initial trade balance is $10bn (surplus).", marks: 1, markCode: "A" },
              { reasoning: "New trade balance is $13bn — the surplus widened even though both flows grew.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initial = $10bn surplus; new = $13bn surplus.",
            commonErrors: ["Adding imports instead of subtracting them when calculating the balance."],
          },
        },
        {
          id: "econ-u6-l63c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the drivers of globalisation and evaluate their impact on international trade.",
          parts: [
            { label: "a", prompt: "Explain two drivers of globalisation.", marks: 2 },
            { label: "b", prompt: "Explain how globalisation affects the volume and pattern of world trade.", marks: 3 },
            { label: "c", prompt: "Evaluate whether globalisation's drivers are net beneficial for the world economy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drivers of globalisation", statement: "Trade liberalisation, technology, capital mobility and MNC expansion integrate national economies." },
            ],
            steps: [
              { part: "a", reasoning: "Trade liberalisation: reduced tariffs and quotas via WTO and regional agreements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Technology: cheaper transport, communication and digital platforms cut trade costs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lower trade costs and barriers raise the volume of international trade.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Countries specialise by comparative advantage — trade patterns reflect relative opportunity costs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "MNCs organise production across borders, creating global value chains.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Drivers have raised world output and lifted millions out of poverty — evidence from China, Vietnam.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But gains are uneven and trade shocks can hurt uncompetitive sectors and regions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: drivers are net beneficial but require adjustment policies for losers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Liberalisation + technology. (b) More trade volume, specialisation, global value chains. (c) Net beneficial with uneven gains needing adjustment support.",
            commonErrors: ["Ignoring distributional effects — aggregate gains coexist with concentrated losses."],
          },
        },
      ],
    },
    {
      id: "econ-u6-globalisation-costs-protectionism",
      title: "Costs of Globalisation and Protectionism",
      skill: "Explain the costs of globalisation including job losses and inequality, and evaluate protectionist policies like tariffs and quotas.",
      lesson: {
        sections: [
          {
            heading: "Costs of globalisation",
            body: "Globalisation creates winners and losers. **Job losses**: manufacturing jobs move to low-wage countries (offshoring). **Wage suppression**: competition from cheap imports forces domestic firms to cut wages or close. **Environmental damage**: production shifts to countries with weaker regulations. **Cultural homogenisation**: global brands displace local cultures. **Income inequality**: gains may concentrate among capital owners and skilled workers.",
          },
          {
            heading: "Protectionist policies",
            body: "Governments use **tariffs** (tax on imports), **quotas** (physical limits on import quantity), **subsidies** for domestic producers, and **non-tariff barriers** (regulations, standards) to protect domestic industries. **Arguments for**: protect jobs, infant industries, national security, prevent dumping. **Arguments against**: raises prices for consumers, reduces efficiency, invites retaliation (trade wars), costs more than the jobs saved.",
          },
          {
            heading: "WTO and trade agreements",
            body: "The **World Trade Organization** promotes free trade by reducing tariffs and resolving disputes. **Regional trade agreements** (EU, USMCA, RCEP) create free-trade zones. **Trade wars** occur when countries impose protectionist measures against each other — e.g. US-China tariff disputes. The trend is toward more protectionism amid concerns about jobs, security and supply chains.",
          },
        ],
        keyFormulas: [
          { name: "Protectionism tools", statement: "Tariffs + quotas + subsidies + non-tariff barriers" },
          { name: "Trade-off", statement: "Protect jobs vs higher prices/inefficiency/retaliation" },
        ],
        workedExample: {
          problem: "A government imposes a 20% tariff on imported steel. Explain the intended effect and one unintended consequence.",
          solution: "Intended: domestic steel becomes cheaper relative to imports → protects steel jobs. Unintended: steel-using industries (cars, construction) face higher costs → higher prices for consumers and possible job losses downstream.",
        },
      },
      questions: [
        {
          id: "econ-u6-l63c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A tariff is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tax on imported goods" },
              { id: "b", text: "A physical limit on imports" },
              { id: "c", text: "A free trade agreement" },
              { id: "d", text: "A subsidy to exporters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tariff", statement: "A tax on imported goods." },
            ],
            steps: [
              { reasoning: "A tariff is a tax levied on imports, raising their price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A tax on imported goods",
            commonErrors: ["Confusing tariff (tax) with quota (quantity limit)."],
          },
        },
        {
          id: "econ-u6-l63c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain two costs of globalisation for developed countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalisation costs", statement: "Job losses, wage suppression, inequality, environmental damage." },
            ],
            steps: [
              { reasoning: "Job losses: manufacturing moves to low-wage countries (offshoring).", marks: 1, markCode: "M" },
              { reasoning: "Wage suppression: cheap imports force domestic firms to cut wages or close.", marks: 1, markCode: "M" },
              { reasoning: "Also: income inequality as gains concentrate among capital owners/skilled workers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Job losses, wage suppression, rising inequality — concentrated on unskilled workers.",
            commonErrors: ["Listing benefits instead of costs."],
          },
        },
        {
          id: "econ-u6-l63c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how a tariff affects the price and quantity of imported goods, and the domestic market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tariff effects", statement: "Tariff raises import price → imports fall → domestic production rises." },
            ],
            steps: [
              { reasoning: "Tariff adds to the cost of imports → import price rises.", marks: 1, markCode: "M" },
              { reasoning: "Higher import price → quantity demanded of imports falls.", marks: 1, markCode: "M" },
              { reasoning: "Domestic producers gain a price advantage → domestic output rises.", marks: 1, markCode: "R" },
              { reasoning: "Consumers face higher prices and less choice — efficiency loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tariff → import price up → imports down → domestic output up; consumers pay more.",
            commonErrors: ["Ignoring the consumer cost — tariffs protect producers at consumers' expense."],
          },
        },
        {
          id: "econ-u6-l63c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the case for and against protectionism in response to globalisation.",
          parts: [
            { label: "a", prompt: "Explain two arguments for protectionism.", marks: 2 },
            { label: "b", prompt: "Explain two arguments against protectionism.", marks: 2 },
            { label: "c", prompt: "Evaluate whether protectionism is justified in the modern global economy.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Protectionism debate", statement: "For: jobs, infant industries, security. Against: efficiency, prices, retaliation." },
            ],
            steps: [
              { part: "a", reasoning: "Protect domestic jobs from cheap imports; protect infant industries until competitive.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Raises consumer prices, reduces efficiency, invites retaliation (trade wars).", marks: 2, markCode: "M" },
              { part: "c", reasoning: "For: limited protection for national security, strategic industries or temporary infant-industry support can be justified.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Against: long-term protection makes industries uncompetitive and raises prices for consumers.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evidence suggests most protectionist measures fail to save jobs long-term and invite retaliation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: temporary, sector-specific protection can work; permanent blanket tariffs usually fail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Jobs + infant industries. (b) Prices + efficiency + retaliation. (c) Limited/targeted protection OK; broad protectionism harmful.",
            commonErrors: ["Arguing for or against without nuance — context and duration matter."],
          },
        },
        {
          id: "econ-u6-l63c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A quota is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subsidy paid to exporters" },
              { id: "b", text: "A physical limit on the quantity of imports allowed" },
              { id: "c", text: "A regional trade agreement" },
              { id: "d", text: "A tax on imported goods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quota", statement: "A quantitative restriction limiting the volume of imports." },
            ],
            steps: [
              { reasoning: "A quota caps the quantity of imports directly, unlike a tariff which raises price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A physical limit on the quantity of imports allowed",
            commonErrors: ["Confusing quota (quantity limit) with tariff (price tax)."],
          },
        },
        {
          id: "econ-u6-l63c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For workers in developed countries, a cost of globalisation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guaranteed wage growth in all sectors" },
              { id: "b", text: "Falling consumer prices with no downside" },
              { id: "c", text: "Complete job security" },
              { id: "d", text: "Job losses as production moves to lower-wage countries (offshoring)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Costs of globalisation", statement: "Offshoring costs jobs, cheap imports suppress wages, and gains concentrate unevenly." },
            ],
            steps: [
              { reasoning: "Firms relocate production to lower-wage economies, displacing domestic workers.", marks: 1, markCode: "M" },
              { reasoning: "Competition from imports forces domestic firms to cut wages or close.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Job losses as production moves to lower-wage countries (offshoring)",
            commonErrors: ["Listing benefits (cheap goods) as costs — the question asks for costs to workers."],
          },
        },
        {
          id: "econ-u6-l63c2q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The World Trade Organization (WTO) primarily aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Promote free trade by reducing tariffs and resolving trade disputes" },
              { id: "b", text: "Impose tariffs on member countries" },
              { id: "c", text: "Protect infant industries" },
              { id: "d", text: "Set quotas on agricultural imports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "WTO", statement: "International body promoting freer trade through tariff reduction and dispute settlement." },
            ],
            steps: [
              { reasoning: "The WTO's mandate is trade liberalisation — lowering barriers and settling disputes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Promote free trade by reducing tariffs and resolving trade disputes",
            commonErrors: ["Confusing the WTO's free-trade role with protectionist policy."],
          },
        },
        {
          id: "econ-u6-l63c2q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement best evaluates the use of tariffs to protect domestic jobs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tariffs protect some jobs but raise consumer prices, reduce efficiency and may provoke retaliation" },
              { id: "b", text: "Tariffs always save jobs with no downside" },
              { id: "c", text: "Tariffs have no effect on domestic employment" },
              { id: "d", text: "Tariffs always reduce employment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tariff evaluation", statement: "Tariffs protect producers at the cost of higher prices, efficiency losses and possible retaliation." },
            ],
            steps: [
              { reasoning: "Tariffs can save jobs in protected industries — that is their intended effect.", marks: 1, markCode: "R" },
              { reasoning: "But consumers pay more, protected industries may become uncompetitive, and trading partners retaliate.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is the best evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tariffs protect some jobs but raise consumer prices, reduce efficiency and may provoke retaliation",
            commonErrors: ["Ignoring the consumer cost and retaliation risk when evaluating tariffs."],
          },
        },
        {
          id: "econ-u6-l63c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Dumping' in international trade refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing surplus goods in warehouses" },
              { id: "b", text: "Selling goods abroad at below their cost of production" },
              { id: "c", text: "Exporting goods at world prices" },
              { id: "d", text: "Giving foreign aid to poor countries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dumping", statement: "Selling exports below cost or below domestic prices to gain market share or harm competitors." },
            ],
            steps: [
              { reasoning: "Dumping is below-cost selling abroad — a rationale for anti-dumping tariffs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Selling goods abroad at below their cost of production",
            commonErrors: ["Confusing dumping (below-cost exports) with normal exporting."],
          },
        },
        {
          id: "econ-u6-l63c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An imported good has a world price of $120. A tariff of 15% is imposed. Calculate the tariff amount and the new price paid by domestic consumers.",
          response: {
            type: "numeric",
            parts: [
              { label: "Tariff amount per unit ($)", answer: 18 },
              { label: "New consumer price ($)", answer: 138 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tariff", statement: "Consumer price = world price + tariff" },
            ],
            steps: [
              { reasoning: "Tariff = 15% × $120 = $18.", working: "0.15 \\times 120 = 18", marks: 1, markCode: "M" },
              { reasoning: "New price = 120 + 18 = $138.", working: "120 + 18 = 138", marks: 1, markCode: "M" },
              { reasoning: "The tariff is $18 per unit.", marks: 1, markCode: "A" },
              { reasoning: "Consumers pay $138 — a 15% increase over the world price.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tariff = $18; new price = $138.",
            commonErrors: ["Calculating 15% of the new price instead of the world price."],
          },
        },
        {
          id: "econ-u6-l63c2q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A quota restricts imports so that the domestic price of a good rises from $40 to $44. A domestic producer sells 5,000 units at the domestic price. Calculate the extra revenue the producer gains per unit and in total compared with selling at the old price.",
          response: {
            type: "numeric",
            parts: [
              { label: "Extra revenue per unit ($)", answer: 4 },
              { label: "Total extra revenue ($)", answer: 20000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Producer gain", statement: "Extra revenue = price increase × quantity sold" },
            ],
            steps: [
              { reasoning: "Price increase = 44 − 40 = $4 per unit.", working: "44 - 40 = 4", marks: 1, markCode: "M" },
              { reasoning: "Total extra revenue = 4 × 5,000 = $20,000.", working: "4 \\times 5000 = 20000", marks: 1, markCode: "M" },
              { reasoning: "Extra revenue per unit is $4.", marks: 1, markCode: "A" },
              { reasoning: "Total gain is $20,000 — the flip side is consumers paying $4 more per unit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4 per unit; $20,000 total extra revenue for the producer.",
            commonErrors: ["Forgetting that consumers bear the same $4 increase — gains to producers are losses to consumers."],
          },
        },
        {
          id: "econ-u6-l63c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country initially imports 2,000 units of steel per year. A tariff of $15 per unit reduces import demand by 25%. Calculate the new quantity of imports and the government's tariff revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "New quantity of imports", answer: 1500 },
              { label: "Tariff revenue ($)", answer: 22500 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tariff revenue", statement: "Revenue = tariff per unit × post-tariff import quantity" },
            ],
            steps: [
              { reasoning: "New quantity = 2,000 × 0.75 = 1,500 units.", working: "2000 \\times 0.75 = 1500", marks: 1, markCode: "M" },
              { reasoning: "Revenue = 1,500 × $15 = $22,500.", working: "1500 \\times 15 = 22500", marks: 1, markCode: "M" },
              { reasoning: "New imports = 1,500 units.", marks: 1, markCode: "A" },
              { reasoning: "Tariff revenue = $22,500.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New imports = 1,500 units; tariff revenue = $22,500.",
            commonErrors: ["Using the original 2,000 units — the tariff shrinks import demand."],
          },
        },
        {
          id: "econ-u6-l63c2q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Country A's exports to Country B are $50bn. B imposes a tariff, reducing A's exports by 30%. B then retaliates, cutting A's remaining exports by a further 20%. Calculate A's exports after the first tariff and after retaliation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Exports after first tariff ($bn)", answer: 35 },
              { label: "Exports after retaliation ($bn)", answer: 28 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Successive percentage changes", statement: "Each change applies to the remaining quantity — effects compound." },
            ],
            steps: [
              { reasoning: "After first tariff: 50 × 0.70 = $35bn.", working: "50 \\times 0.70 = 35", marks: 1, markCode: "M" },
              { reasoning: "After retaliation: 35 × 0.80 = $28bn.", working: "35 \\times 0.80 = 28", marks: 1, markCode: "M" },
              { reasoning: "Exports after the first tariff are $35bn.", marks: 1, markCode: "A" },
              { reasoning: "Exports after retaliation are $28bn — a 44% total fall, illustrating trade-war escalation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35bn after first tariff; $28bn after retaliation.",
            commonErrors: ["Adding 30% + 20% = 50% — successive percentage changes compound on the reduced base."],
          },
        },
        {
          id: "econ-u6-l63c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A government pays a subsidy of $5 per unit to a domestic industry. Before the subsidy the industry sells 10,000 units; the subsidy raises output by 10% (1,000 extra units), so 11,000 units are sold in total and the subsidy is paid on every unit. Calculate the total subsidy cost and the cost per extra unit of output.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total subsidy cost ($)", answer: 55000 },
              { label: "Cost per extra unit ($)", answer: 55 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Subsidy cost per extra unit", statement: "Cost per extra unit = total subsidy / additional output" },
            ],
            steps: [
              { reasoning: "Total subsidy = $5 × 11,000 units = $55,000.", working: "5 \\times 11000 = 55000", marks: 1, markCode: "M" },
              { reasoning: "Cost per extra unit = 55,000 / 1,000 = $55.", working: "55000 \\div 1000 = 55", marks: 1, markCode: "M" },
              { reasoning: "Total subsidy cost is $55,000.", marks: 1, markCode: "A" },
              { reasoning: "Each extra unit costs $55 — the subsidy also pays for the 10,000 units that would have been produced anyway, showing its inefficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total subsidy = $55,000; cost per extra unit = $55.",
            commonErrors: ["Only counting the subsidy on the 1,000 extra units — it is paid on all 11,000 units."],
          },
        },
        {
          id: "econ-u6-l63c2q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Protectionist policies cost consumers an extra $500m per year and protect 2,000 manufacturing jobs. Calculate the annual consumer cost per job protected.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost per job protected ($)", answer: 250000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cost per job", statement: "Cost per protected job = total consumer cost / jobs protected" },
            ],
            steps: [
              { reasoning: "Cost per job = 500,000,000 / 2,000.", working: "500000000 \\div 2000 = 250000", marks: 1, markCode: "M" },
              { reasoning: "Cost per job = $250,000.", working: "= 250000", marks: 1, markCode: "M" },
              { reasoning: "Each protected job costs consumers $250,000 per year.", marks: 1, markCode: "A" },
              { reasoning: "This illustrates the inefficiency of protection — high cost per job saved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250,000 per protected job per year.",
            commonErrors: ["Comparing total cost to total jobs without dividing — the ratio is the key measure."],
          },
        },
        {
          id: "econ-u6-l63c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of protectionist policies in response to globalisation and job losses.",
          parts: [
            { label: "a", prompt: "Explain two arguments for protectionism.", marks: 2 },
            { label: "b", prompt: "Explain two costs of protectionism.", marks: 2 },
            { label: "c", prompt: "Evaluate whether protectionism is justified for strategic or infant industries.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Protectionism evaluation", statement: "Temporary, targeted protection can help; blanket permanent protection usually fails." },
            ],
            steps: [
              { part: "a", reasoning: "Protect domestic jobs from cheap imports and wage suppression.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Protect infant industries until they become competitive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Raises consumer prices and reduces allocative efficiency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Invites retaliation — trade wars that hurt exporters.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Strategic sectors (defence, energy) may justify protection for national security.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Infant-industry argument is valid only if protection is temporary and performance-conditioned.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Permanent protection breeds uncompetitive industries — evidence shows most protected sectors never wean off support.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: limited, time-bound protection is defensible; broad protectionism is harmful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Jobs + infant industries. (b) Prices + retaliation. (c) Justified only when temporary, targeted and conditional — not as blanket policy.",
            commonErrors: ["Arguing protectionism is always right or always wrong — duration and targeting determine the case."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cieids-u3-lesson-3-4",
  code: "3-4",
  title: "Development strategies: trade, aid and industrialisation",
  goal: "I CAN evaluate trade, aid, industrialisation and tourism as development strategies.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 4: Development strategies",
  ],
  vocabulary: [
    {
      term: "Free trade",
      definition:
        "Trade without tariffs or quotas — countries specialise in what they produce best.",
    },
    {
      term: "Protectionism",
      definition:
        "Protecting domestic industries with tariffs, quotas or subsidies.",
    },
    {
      term: "Tariff",
      definition: "Tax on imported goods.",
    },
    {
      term: "Quota",
      definition: "Limit on quantity of imports.",
    },
    {
      term: "Aid",
      definition:
        "Money, goods or services given to developing countries — bilateral or multilateral.",
    },
    {
      term: "Bilateral aid",
      definition: "Aid from one country to another.",
    },
    {
      term: "Multilateral aid",
      definition: "Aid through organisations like World Bank, UN.",
    },
    {
      term: "Tied aid",
      definition:
        "Aid requiring recipient to spend it on donor country's goods/services.",
    },
    {
      term: "Industrialisation",
      definition:
        "Shift from agriculture to manufacturing — key development strategy.",
    },
    {
      term: "Import substitution",
      definition:
        "Producing goods domestically instead of importing — protected by tariffs.",
    },
    {
      term: "Export-led growth",
      definition:
        "Growth driven by exports — manufacturing for foreign markets.",
    },
    {
      term: "Tourism",
      definition:
        "Visitors from other countries — potential source of income and jobs.",
    },
  ],
  concepts: [
    {
      id: "cieids-u3-trade-aid",
      title: "Trade and aid strategies",
      skill:
        "Evaluate free trade, protectionism, aid types and their development impacts.",
      lesson: {
        sections: [
          {
            heading: "Free trade vs protectionism",
            body: "**Free trade**: no tariffs/quotas — countries specialise in comparative advantage. Benefits: efficiency, lower prices, growth. Problems: developing countries struggle to compete with subsidised developed-country producers; may lose domestic industries. **Protectionism**: tariffs, quotas, subsidies protect domestic industries — helps new industries grow but raises prices and can be inefficient. **Tariff** = tax on imports; **quota** = limit on import quantity.",
          },
          {
            heading: "Types of aid",
            body: "**Bilateral aid**: one country to another (e.g. USAID). **Multilateral aid**: through organisations (World Bank, UN, IMF). **Tied aid**: must be spent on donor's goods — benefits donor's exporters but limits recipient's choice. Aid can fund infrastructure, education, healthcare — but can create dependency and be misused by corrupt governments.",
          },
          {
            heading: "Evaluating trade and aid",
            body: "Free trade theory (Ricardo) says specialisation benefits all — but reality shows developing countries often lose out. Fair trade attempts to ensure producers get fair prices. Aid effectiveness depends on governance — aid to corrupt governments may be wasted. Debt relief (e.g. HIPCs) can free resources for development.",
          },
        ],
        keyFormulas: [
          {
            name: "Free trade",
            statement: "No tariffs/quotas — specialisation",
          },
          {
            name: "Protectionism",
            statement: "Tariffs/quotas/subsidies — protect domestic",
          },
          {
            name: "Aid types",
            statement: "Bilateral · multilateral · tied",
          },
        ],
        workedExample: {
          problem: "Why might free trade hurt a developing country?",
          solution:
            "Developed countries subsidise their farmers; developing farmers can't compete on price → local agriculture collapses.",
        },
      },
      questions: [
        {
          id: "cieids-u3-ta-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Free trade means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade without tariffs or quotas" },
              { id: "b", text: "Trade with restrictions" },
              { id: "c", text: "No trade" },
              { id: "d", text: "Only exports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free trade",
                statement: "Trade without tariffs/quotas.",
              },
            ],
            steps: [
              {
                reasoning: "Free trade = no restrictions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Trade without tariffs or quotas.",
          },
        },
        {
          id: "cieids-u3-ta-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Protectionism involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Tariffs, quotas or subsidies to protect domestic industries",
              },
              { id: "b", text: "Free trade" },
              { id: "c", text: "No trade" },
              { id: "d", text: "Only imports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protectionism",
                statement: "Tariffs/quotas/subsidies protecting domestic.",
              },
            ],
            steps: [
              {
                reasoning: "Protectionism = restrictions to protect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Tariffs, quotas, subsidies.",
          },
        },
        {
          id: "cieids-u3-ta-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tariff is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tax on imported goods" },
              { id: "b", text: "A limit on imports" },
              { id: "c", text: "A subsidy" },
              { id: "d", text: "A quota" },
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
            steps: [
              {
                reasoning: "Tariff = import tax.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A tax on imported goods.",
          },
        },
        {
          id: "cieids-u3-ta-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quota is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A limit on quantity of imports" },
              { id: "b", text: "A tax on imports" },
              { id: "c", text: "A subsidy" },
              { id: "d", text: "A tariff" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quota",
                statement: "Limit on import quantity.",
              },
            ],
            steps: [
              {
                reasoning: "Quota = import quantity limit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Limit on quantity of imports.",
          },
        },
        {
          id: "cieids-u3-ta-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bilateral aid is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aid from one country to another" },
              { id: "b", text: "Aid through organisations" },
              { id: "c", text: "Tied aid" },
              { id: "d", text: "No aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bilateral aid",
                statement: "One country to another.",
              },
            ],
            steps: [
              {
                reasoning: "Bilateral = country to country.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Aid from one country to another.",
          },
        },
        {
          id: "cieids-u3-ta-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multilateral aid is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Aid through organisations like World Bank or UN",
              },
              { id: "b", text: "Aid from one country" },
              { id: "c", text: "Tied aid" },
              { id: "d", text: "No aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multilateral aid",
                statement: "Through organisations.",
              },
            ],
            steps: [
              {
                reasoning: "Multilateral = via organisations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Aid through organisations.",
          },
        },
        {
          id: "cieids-u3-ta-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tied aid requires recipients to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spend it on donor country's goods/services" },
              { id: "b", text: "Repay immediately" },
              { id: "c", text: "Give it back" },
              { id: "d", text: "Share equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tied aid",
                statement: "Must spend on donor's goods.",
              },
            ],
            steps: [
              {
                reasoning: "Tied = spend on donor's goods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Spend on donor country's goods.",
          },
        },
        {
          id: "cieids-u3-ta-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Industrialisation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift from agriculture to manufacturing" },
              { id: "b", text: "More farming" },
              { id: "c", text: "More services" },
              { id: "d", text: "Less production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Industrialisation",
                statement: "Agriculture → manufacturing.",
              },
            ],
            steps: [
              {
                reasoning: "Industrialisation = shift to manufacturing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Agriculture to manufacturing.",
          },
        },
        {
          id: "cieids-u3-ta-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Import substitution means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Producing goods domestically instead of importing",
              },
              { id: "b", text: "Importing more" },
              { id: "c", text: "Exporting more" },
              { id: "d", text: "No production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Import substitution",
                statement: "Produce domestically instead of import.",
              },
            ],
            steps: [
              {
                reasoning: "Import substitution = domestic production.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Produce domestically.",
          },
        },
        {
          id: "cieids-u3-ta-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between free trade and protectionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade approaches",
                statement: "Open vs protected markets.",
              },
            ],
            steps: [
              {
                reasoning: "Free trade: no tariffs/quotas — specialisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protectionism: tariffs/quotas/subsidies protect domestic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Free = open; protectionism = restricted.",
          },
        },
        {
          id: "cieids-u3-ta-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two types of aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid types",
                statement: "Bilateral, multilateral, tied.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bilateral — one country to another; multilateral — via organisations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tied — must spend on donor's goods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bilateral, multilateral, tied.",
          },
        },
        {
          id: "cieids-u3-ta-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why free trade may not benefit developing countries equally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free trade inequality",
                statement: "Developed countries have advantages.",
              },
            ],
            steps: [
              {
                reasoning: "Developed countries subsidise their producers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Developing countries can't compete on price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Local industries collapse — inequality grows.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Developed subsidies → developing can't compete → industries collapse.",
          },
        },
        {
          id: "cieids-u3-ta-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A developing country wants to industrialise. Compare import substitution vs export-led growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Industrialisation strategies",
                statement: "Domestic vs export focus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Import substitution: produce domestically, protect with tariffs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: builds domestic industry; risk: inefficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Export-led: produce for foreign markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: earns foreign exchange; risk: dependent on foreign demand.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Import substitution = domestic protection; export-led = foreign markets.",
          },
        },
        {
          id: "cieids-u3-ta-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Comparative advantage means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Producing what you can produce most efficiently",
              },
              { id: "b", text: "Producing everything" },
              { id: "c", text: "Importing everything" },
              { id: "d", text: "No trade" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Produce most efficiently.",
              },
            ],
            steps: [
              {
                reasoning: "Comparative = most efficient.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Producing most efficiently.",
          },
        },
        {
          id: "cieids-u3-ta-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the problems with tied aid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tied aid problems",
                statement: "Limits recipient choice, benefits donor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Must spend on donor's goods — not what recipient needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Benefits donor's exporters — less effective aid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Limits choice; benefits donor not recipient.",
          },
        },
        {
          id: "cieids-u3-ta-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Export-led growth means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth driven by exports" },
              { id: "b", text: "Growth from imports" },
              { id: "c", text: "No exports" },
              { id: "d", text: "Domestic only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Export-led growth",
                statement: "Growth driven by exports.",
              },
            ],
            steps: [
              {
                reasoning: "Export-led = exports drive growth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Growth driven by exports.",
          },
        },
        {
          id: "cieids-u3-ta-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does tourism contribute to development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tourism benefits",
                statement: "Income, jobs, foreign exchange.",
              },
            ],
            steps: [
              {
                reasoning: "Tourism brings foreign income and jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can develop infrastructure and preserve culture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Income, jobs, foreign exchange, infrastructure.",
          },
        },
        {
          id: "cieids-u3-ta-q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate aid as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid evaluation",
                statement: "Helps but can create dependency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: provides capital for development projects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: emergency relief for crises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: can create dependency on donors.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: may be wasted through corruption.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Provides capital but can create dependency and be misused.",
          },
        },
        {
          id: "cieids-u3-ta-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare bilateral and multilateral aid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid comparison",
                statement: "Country-to-country vs via organisations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bilateral: one country to another — direct, faster.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multilateral: via organisations — coordinated, larger scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bilateral may have political motives; multilateral more neutral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multilateral often more efficient but slower.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Bilateral = direct but political; multilateral = coordinated but slower.",
          },
        },
        {
          id: "cieids-u3-ta-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a form of protectionism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tariff" },
              { id: "b", text: "Free trade" },
              { id: "c", text: "Comparative advantage" },
              { id: "d", text: "Export-led growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protectionism forms",
                statement: "Tariffs, quotas, subsidies.",
              },
            ],
            steps: [
              {
                reasoning: "Tariff = protectionism.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Tariff.",
          },
        },
        {
          id: "cieids-u3-ta-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'fair trade'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fair trade",
                statement: "Ensuring producers get fair prices.",
              },
            ],
            steps: [
              {
                reasoning: "Trading system ensuring fair prices for producers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Particularly helps small farmers in developing countries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ensuring producers get fair prices — helps small farmers.",
          },
        },
        {
          id: "cieids-u3-ta-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how tourism can contribute to development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tourism benefits",
                statement: "Income, jobs, foreign exchange.",
              },
            ],
            steps: [
              {
                reasoning: "Brings foreign income and foreign exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates jobs in hotels, restaurants, transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can develop infrastructure and preserve culture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Income, jobs, foreign exchange, infrastructure development.",
          },
        },
        {
          id: "cieids-u3-ta-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate tourism as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tourism evaluation",
                statement: "Income source but can cause problems.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: brings foreign income and jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: develops infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: seasonal — income unstable.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: can cause environmental/cultural damage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Brings income/jobs but seasonal and can cause environmental damage.",
          },
        },
        {
          id: "cieids-u3-ta-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a form of aid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free trade" },
              { id: "b", text: "Bilateral aid" },
              { id: "c", text: "Multilateral aid" },
              { id: "d", text: "Tied aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid forms",
                statement: "Bilateral, multilateral, tied.",
              },
            ],
            steps: [
              {
                reasoning: "Free trade not aid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Free trade.",
          },
        },
        {
          id: "cieids-u3-ta-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'debt relief'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debt relief",
                statement: "Reducing/eliminating debt repayments.",
              },
            ],
            steps: [
              {
                reasoning: "Reducing or eliminating debt repayments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Frees resources for development spending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reducing debt repayments — frees resources for development.",
          },
        },
        {
          id: "cieids-u3-ta-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how protectionism can help developing industries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protectionism benefit",
                statement: "Protects new industries from competition.",
              },
            ],
            steps: [
              {
                reasoning: "Tariffs make imports more expensive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Domestic industries can grow without foreign competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Once established, may become competitive internationally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Protects new industries until competitive.",
          },
        },
        {
          id: "cieids-u3-ta-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a benefit of free trade?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower prices for consumers" },
              { id: "b", text: "Higher prices" },
              { id: "c", text: "Less choice" },
              { id: "d", text: "No competition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free trade benefits",
                statement: "Lower prices, more choice.",
              },
            ],
            steps: [
              {
                reasoning: "Free trade → lower prices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lower prices.",
          },
        },
        {
          id: "cieids-u3-ta-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might aid create dependency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aid dependency",
                statement: "Reliance on external funds.",
              },
            ],
            steps: [
              {
                reasoning: "Countries become reliant on aid flows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "May not develop own capacity to generate resources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reliance on aid → doesn't build own capacity.",
          },
        },
        {
          id: "cieids-u3-ta-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate import substitution industrialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ISI evaluation",
                statement: "Builds industry but inefficient.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: builds domestic industrial capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: reduces import dependence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: protected industries may be inefficient.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: higher prices for consumers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Builds industry but may create inefficient protected industries.",
          },
        },
        {
          id: "cieids-u3-ta-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a developing country choose protectionism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protectionism rationale",
                statement: "Protect new industries.",
              },
            ],
            steps: [
              {
                reasoning: "Protect new industries from foreign competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allow time to develop competitiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Protect new industries until competitive.",
          },
        },
      ],
    },
    {
      id: "cieids-u3-industry",
      title: "Industrialisation and appropriate technology",
      skill:
        "Explain industrialisation strategies and evaluate appropriate vs capital-intensive technology.",
      lesson: {
        sections: [
          {
            heading: "Industrialisation strategies",
            body: "**Import substitution**: produce domestically instead of importing — protected by tariffs. **Export-led growth**: produce for foreign markets — earns foreign exchange. **Foreign direct investment (FDI)**: multinational companies invest in developing countries — brings capital and jobs but may repatriate profits. **EPZs (Export Processing Zones)**: special zones with tax breaks to attract FDI.",
          },
          {
            heading: "Appropriate technology",
            body: "**Appropriate technology**: technology suited to local conditions — labour-intensive, uses local resources, easy to maintain. vs **capital-intensive**: machines replacing labour — efficient but costly and creates few jobs. Developing countries often need appropriate technology because capital is scarce and unemployment high. Example: treadle pumps vs diesel pumps.",
          },
          {
            heading: "Evaluating strategies",
            body: "Industrialisation can drive development but may create urban-rural divides, environmental damage, and dependence on foreign technology. Success depends on: market access, infrastructure, skilled labour, stable governance. Many countries combine strategies — some protectionism early, export-led later.",
          },
        ],
        keyFormulas: [
          {
            name: "Industrialisation",
            statement: "Import substitution · export-led · FDI · EPZs",
          },
          {
            name: "Appropriate technology",
            statement: "Labour-intensive, local resources, easy maintenance",
          },
        ],
        workedExample: {
          problem:
            "Why might a developing country prefer labour-intensive technology?",
          solution:
            "High unemployment — labour-intensive creates jobs; capital-intensive would be efficient but create few jobs and require scarce capital.",
        },
      },
      questions: [
        {
          id: "cieids-u3-ind-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Foreign direct investment (FDI) is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Multinational companies investing in developing countries",
              },
              { id: "b", text: "Government investment" },
              { id: "c", text: "Domestic investment only" },
              { id: "d", text: "Aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDI",
                statement: "Multinational investment in developing countries.",
              },
            ],
            steps: [
              {
                reasoning: "FDI = multinational investment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Multinational investment.",
          },
        },
        {
          id: "cieids-u3-ind-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Export Processing Zones (EPZs) are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Special zones with tax breaks to attract FDI" },
              { id: "b", text: "Free trade zones" },
              { id: "c", text: "Agricultural zones" },
              { id: "d", text: "Residential zones" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "EPZs",
                statement: "Tax-break zones attracting FDI.",
              },
            ],
            steps: [
              {
                reasoning: "EPZs = tax-break zones.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Tax-break zones for FDI.",
          },
        },
        {
          id: "cieids-u3-ind-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Appropriate technology is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Technology suited to local conditions — labour-intensive, uses local resources",
              },
              { id: "b", text: "Most advanced technology" },
              { id: "c", text: "Capital-intensive" },
              { id: "d", text: "Imported technology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appropriate technology",
                statement: "Suited to local conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Appropriate = local conditions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Suited to local conditions.",
          },
        },
        {
          id: "cieids-u3-ind-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Capital-intensive technology means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Machines replacing labour — efficient but costly",
              },
              { id: "b", text: "Labour-intensive" },
              { id: "c", text: "Free technology" },
              { id: "d", text: "Simple tools" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capital-intensive",
                statement: "Machines replacing labour.",
              },
            ],
            steps: [
              {
                reasoning: "Capital-intensive = machines.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Machines replacing labour.",
          },
        },
        {
          id: "cieids-u3-ind-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Labour-intensive technology means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using lots of labour rather than machines" },
              { id: "b", text: "Machines only" },
              { id: "c", text: "No labour" },
              { id: "d", text: "Capital only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Labour-intensive",
                statement: "Uses lots of labour.",
              },
            ],
            steps: [
              {
                reasoning: "Labour-intensive = lots of labour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Using lots of labour.",
          },
        },
        {
          id: "cieids-u3-ind-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A benefit of FDI is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brings capital and jobs" },
              { id: "b", text: "Takes away jobs" },
              { id: "c", text: "Reduces exports" },
              { id: "d", text: "Increases debt" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI benefit",
                statement: "Capital and jobs.",
              },
            ],
            steps: [
              {
                reasoning: "FDI brings capital/jobs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Brings capital and jobs.",
          },
        },
        {
          id: "cieids-u3-ind-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A problem with FDI is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profits may be repatriated to home country" },
              { id: "b", text: "No jobs created" },
              { id: "c", text: "No capital" },
              { id: "d", text: "Too much investment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI problem",
                statement: "Profit repatriation.",
              },
            ],
            steps: [
              {
                reasoning: "FDI profits may leave country.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Profits repatriated.",
          },
        },
        {
          id: "cieids-u3-ind-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might developing countries prefer labour-intensive technology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High unemployment — creates jobs" },
              { id: "b", text: "It's more efficient" },
              { id: "c", text: "It's cheaper" },
              { id: "d", text: "It's modern" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour-intensive rationale",
                statement: "Creates jobs for unemployed.",
              },
            ],
            steps: [
              {
                reasoning: "Labour-intensive creates jobs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) High unemployment — creates jobs.",
          },
        },
        {
          id: "cieids-u3-ind-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "EPZs are used to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Attract foreign investment through tax breaks",
              },
              { id: "b", text: "Reduce exports" },
              { id: "c", text: "Increase taxes" },
              { id: "d", text: "Reduce investment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EPZ purpose",
                statement: "Attract FDI.",
              },
            ],
            steps: [
              {
                reasoning: "EPZs attract investment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Attract foreign investment.",
          },
        },
        {
          id: "cieids-u3-ind-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between appropriate and capital-intensive technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology types",
                statement: "Local vs machine-based.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appropriate: labour-intensive, local resources, easy maintenance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Capital-intensive: machines replacing labour — efficient but costly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Appropriate = local/labour; capital-intensive = machines.",
          },
        },
        {
          id: "cieids-u3-ind-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two benefits of FDI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI benefits",
                statement: "Capital, jobs, technology transfer.",
              },
            ],
            steps: [
              {
                reasoning: "Brings capital and creates jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transfers technology and skills.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Capital, jobs, technology transfer.",
          },
        },
        {
          id: "cieids-u3-ind-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why developing countries often need appropriate technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriate technology need",
                statement: "Capital scarce, unemployment high.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Capital is scarce — can't afford expensive machines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unemployment high — labour-intensive creates jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Local conditions — technology must suit local resources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Capital scarce, unemployment high, local conditions.",
          },
        },
        {
          id: "cieids-u3-ind-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare import substitution and export-led industrialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrialisation comparison",
                statement: "Domestic vs export focus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Import substitution: produce domestically, protect with tariffs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: builds domestic industry; risk: inefficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Export-led: produce for foreign markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: earns foreign exchange; risk: dependent on foreign demand.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Import substitution = domestic; export-led = foreign markets.",
          },
        },
        {
          id: "cieids-u3-ind-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "EPZs typically offer:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax breaks and relaxed regulations" },
              { id: "b", text: "Higher taxes" },
              { id: "c", text: "More regulations" },
              { id: "d", text: "No incentives" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EPZ incentives",
                statement: "Tax breaks, relaxed regulations.",
              },
            ],
            steps: [
              {
                reasoning: "EPZs = tax breaks.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Tax breaks and relaxed regulations.",
          },
        },
        {
          id: "cieids-u3-ind-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'technology transfer'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Technology transfer",
                statement: "Sharing technology/skills between countries.",
              },
            ],
            steps: [
              {
                reasoning: "Sharing technology and skills between countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "FDI often brings technology transfer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sharing technology/skills — FDI often transfers.",
          },
        },
        {
          id: "cieids-u3-ind-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a benefit of industrialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increased agricultural output" },
              { id: "b", text: "Economic growth" },
              { id: "c", text: "More jobs" },
              { id: "d", text: "Higher incomes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrialisation effects",
                statement: "Growth, jobs, incomes — not agriculture.",
              },
            ],
            steps: [
              {
                reasoning: "Agriculture not industrialisation benefit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Increased agricultural output.",
          },
        },
        {
          id: "cieids-u3-ind-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does industrialisation affect employment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrialisation employment",
                statement: "Shifts from agriculture to industry.",
              },
            ],
            steps: [
              {
                reasoning: "Shifts workers from agriculture to manufacturing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates jobs but may displace rural workers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shifts agriculture → industry; creates jobs but displaces rural.",
          },
        },
        {
          id: "cieids-u3-ind-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how appropriate technology differs from capital-intensive technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology comparison",
                statement: "Labour vs machine intensive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appropriate: labour-intensive, uses local resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Capital-intensive: machines replacing labour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Appropriate suits poor countries — creates jobs, affordable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Appropriate = labour/local; capital-intensive = machines.",
          },
        },
        {
          id: "cieids-u3-ind-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A developing country wants to industrialise. Design a strategy using appropriate technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strategy design",
                statement: "Appropriate technology + skills.",
              },
            ],
            steps: [
              {
                reasoning: "Use labour-intensive technology to create jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Invest in skills training for workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Build infrastructure to support industry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gradually upgrade technology as skills/capital grow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Labour-intensive + skills training + infrastructure + gradual upgrade.",
          },
        },
        {
          id: "cieids-u3-ind-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Appropriate technology is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labour-intensive, uses local resources" },
              { id: "b", text: "Capital-intensive" },
              { id: "c", text: "Imported" },
              { id: "d", text: "Advanced" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriate tech",
                statement: "Labour/local resources.",
              },
            ],
            steps: [
              {
                reasoning: "Appropriate = labour/local.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Labour-intensive, local resources.",
          },
        },
        {
          id: "cieids-u3-ind-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an Export Processing Zone (EPZ)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "EPZ",
                statement: "Zone with tax breaks to attract FDI.",
              },
            ],
            steps: [
              {
                reasoning: "Special zone with tax breaks/relaxed regulations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Attracts foreign companies for export production.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tax-break zone attracting FDI for exports.",
          },
        },
        {
          id: "cieids-u3-ind-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how FDI can benefit developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI benefits",
                statement: "Capital, jobs, technology, exports.",
              },
            ],
            steps: [
              {
                reasoning: "Brings capital investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates jobs and transfers technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases exports and foreign exchange.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Capital, jobs, technology, exports.",
          },
        },
        {
          id: "cieids-u3-ind-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate FDI as a development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDI evaluation",
                statement: "Benefits but dependency risk.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: brings capital, jobs, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: increases exports and foreign exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: profits repatriated — limited local benefit.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: may create dependency on foreign companies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Brings capital/jobs but profits leave and creates dependency.",
          },
        },
        {
          id: "cieids-u3-ind-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT an industrialisation strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food aid" },
              { id: "b", text: "Import substitution" },
              { id: "c", text: "Export-led growth" },
              { id: "d", text: "FDI" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrialisation strategies",
                statement: "Import substitution, export-led, FDI.",
              },
            ],
            steps: [
              {
                reasoning: "Food aid not industrialisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Food aid.",
          },
        },
        {
          id: "cieids-u3-ind-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'export processing' in EPZs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Export processing",
                statement: "Producing goods for export in special zones.",
              },
            ],
            steps: [
              {
                reasoning: "Producing goods specifically for export markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In special zones with tax breaks to attract FDI.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Producing for export in tax-break zones.",
          },
        },
        {
          id: "cieids-u3-ind-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how appropriate technology creates employment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appropriate tech employment",
                statement: "Labour-intensive creates jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Labour-intensive uses more workers than machines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Creates jobs for unemployed in developing countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Capital-intensive would create few jobs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Labour-intensive creates jobs; capital-intensive doesn't.",
          },
        },
        {
          id: "cieids-u3-ind-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which technology creates more jobs in developing countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labour-intensive" },
              { id: "b", text: "Capital-intensive" },
              { id: "c", text: "Automated" },
              { id: "d", text: "Computerised" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Job creation",
                statement: "Labour-intensive creates more jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Labour-intensive = more jobs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Labour-intensive.",
          },
        },
        {
          id: "cieids-u3-ind-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'skill transfer' in development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Skill transfer",
                statement: "Learning skills from foreign companies/aid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Learning skills from foreign companies or training.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Builds local capacity for development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Learning skills — builds local capacity.",
          },
        },
        {
          id: "cieids-u3-ind-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate capital-intensive vs appropriate technology for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology evaluation",
                statement: "Appropriate better for poor countries.",
              },
            ],
            steps: [
              {
                reasoning: "Capital-intensive: efficient but costly, few jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Appropriate: labour-intensive, creates jobs, affordable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Developing countries have high unemployment — labour-intensive better.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "But capital-intensive may be needed for competitiveness long-term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Appropriate better initially (jobs, affordability); capital-intensive for long-term competitiveness.",
          },
        },
        {
          id: "cieids-u3-ind-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might industrialisation fail in developing countries?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Industrialisation failure",
                statement: "Lack capital, skills, infrastructure, markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lack capital, skills, infrastructure, market access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weak governance and corruption deter investment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lack capital/skills/infrastructure/markets; weak governance.",
          },
        },
      ],
    },
  ],
};

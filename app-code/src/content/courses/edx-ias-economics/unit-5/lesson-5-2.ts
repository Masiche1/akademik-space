import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "eias-econ-u5-lesson-5-2",
  code: "5-2",
  title: "Exchange Rates",
  goal: "I CAN explain exchange rate determination and effects on trade.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 5 — The International Economy"],
  vocabulary: [
    {
      term: "Exchange rate",
      definition: "Price of one currency in terms of another.",
    },
    {
      term: "Appreciation",
      definition: "Currency value rises against others.",
    },
    {
      term: "Depreciation",
      definition: "Currency value falls against others.",
    },
    {
      term: "Floating rate",
      definition: "Exchange rate determined by market supply/demand.",
    },
    {
      term: "Fixed rate",
      definition: "Exchange rate pegged to another currency/gold.",
    },
    {
      term: "Devaluation",
      definition: "Deliberate lowering of fixed exchange rate.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u5-exchange",
      title: "Exchange Rate Determination",
      skill: "Explain demand/supply for currency and rate changes.",
      lesson: {
        sections: [
          {
            heading: "Floating rates",
            body: "**Demand for currency**: exports, foreign investment, tourism. **Supply of currency**: imports, foreign travel, capital outflows. Rate = where demand = supply.\n\n**Appreciation**: demand > supply → currency strengthens. **Depreciation**: supply > demand → currency weakens. Factors: interest rates, inflation, economic growth, political stability.",
          },
          {
            heading: "Fixed rates",
            body: "Central bank maintains peg — buys/sells own currency to keep rate. **Advantages**: stability for trade/investment. **Disadvantages**: requires reserves, may need interest rate changes to defend, speculators can attack.\n\n**Devaluation**: government lowers fixed rate deliberately — makes exports cheaper, imports dearer.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "UK interest rates rise above US rates. Pound effect?",
          solution: "Appreciation — attracts capital inflows.",
        },
      },
      questions: [
        {
          id: "eias-econ-u5-ex-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes currency appreciation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower interest rates" },
              { id: "b", text: "More imports" },
              { id: "c", text: "Higher inflation" },
              { id: "d", text: "More demand for the currency" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appreciation",
                statement: "Demand > supply.",
              },
            ],
            steps: [
              {
                reasoning: "Appreciation = high demand for currency.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** High demand",
            commonErrors: ["Depreciation confused."],
          },
        },
        {
          id: "eias-econ-u5-ex-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors that cause currency depreciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation causes",
                statement: "Supply > demand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher inflation — currency loses purchasing power.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Lower interest rates — less attractive to investors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Political instability — capital flight.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Inflation, rates, instability.",
            commonErrors: ["Appreciation.", "Only one."],
          },
        },
        {
          id: "eias-econ-u5-ex-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between floating and fixed exchange rates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Rate systems",
                statement: "Market vs pegged.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Floating: market determines — flexible but volatile.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fixed: central bank maintains peg — stable but requires intervention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Floating adjusts automatically; fixed needs reserves/defence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Floating can overshoot; fixed can be attacked by speculators.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Floating=market; fixed=pegged.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "eias-econ-u5-ex-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country's currency depreciates by 20%.",
          parts: [
            { label: "a", prompt: "Explain two effects on exports.", marks: 4 },
            { label: "b", prompt: "Explain two effects on imports.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation effects",
                statement: "Trade impact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Exports cheaper abroad — foreign buyers pay less.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Export demand rises — competitiveness improves.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Imports more expensive — foreign goods cost more.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Import demand falls — but inflation rises for consumers.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) exports cheaper+demand↑ (b) imports dearer+inflation",
            commonErrors: ["Opposite.", "No effect."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u5-global",
      title: "Globalisation and Economic Integration",
      skill: "Explain globalisation impacts and trade agreements.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "**Drivers**: free trade agreements, technology, transport, multinational companies. **Effects**: increased trade/investment, cultural exchange, economic interdependence, job shifts.\n\n**Benefits**: access to markets, cheaper inputs, technology transfer, higher growth. **Costs**: job losses to low-cost countries, inequality, environmental damage, economic vulnerability.",
          },
          {
            heading: "Economic integration",
            body: "**Free trade area**: no tariffs between members. **Customs union**: FTA + common external tariff. **Common market**: customs union + free movement of labour/capital. **Economic union**: common market + common currency/policy — e.g., EU.\n\n**Trade agreements**: bilateral, regional (NAFTA, EU), multilateral (WTO).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "EU members have free trade + common market + some common policies. Integration level?",
          solution: "Economic union.",
        },
      },
      questions: [
        {
          id: "eias-econ-u5-glob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing interconnectedness of world economies",
              },
              { id: "b", text: "International travel" },
              { id: "c", text: "Currency exchange" },
              { id: "d", text: "Company size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "Interconnected economies.",
              },
            ],
            steps: [
              {
                reasoning: "Globalisation = world economy integration.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Interconnected",
            commonErrors: ["Travel confused."],
          },
        },
        {
          id: "eias-econ-u5-glob-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two stages of economic integration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integration stages",
                statement: "Progressive.",
              },
            ],
            steps: [
              {
                reasoning: "Free trade area — no internal tariffs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Customs union — FTA + common external tariff.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Common market — free movement of factors.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "FTA, customs union, common market.",
            commonErrors: ["Only one.", "Wrong stage."],
          },
        },
        {
          id: "eias-econ-u5-glob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two benefits and two costs of globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation",
                statement: "For and against.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: access to global markets, cheaper inputs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Benefits: technology transfer, higher growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Costs: job losses to low-wage countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Costs: inequality, environmental damage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Markets+technology vs jobs+inequality.",
            commonErrors: ["Only benefits.", "Only costs."],
          },
        },
        {
          id: "eias-econ-u5-glob-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country joins a free trade agreement with developed nations.",
          parts: [
            { label: "a", prompt: "Give two potential benefits.", marks: 4 },
            { label: "b", prompt: "Give two potential risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade agreement",
                statement: "Access vs competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Access to larger markets — export opportunities.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Foreign investment — technology, jobs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Competition — local industries may be destroyed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Dependency — reliant on foreign markets/investment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) markets+investment (b) competition+dependency",
            commonErrors: ["Only benefits.", "Only risks."],
          },
        },
      ],
    },
  ],
};

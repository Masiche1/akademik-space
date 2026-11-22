import type { Lesson } from "../../../types.ts";

export const lesson115: Lesson = {
  id: "ecn11-u3-lesson-6-2",
  code: "6-2",
  title: "Economic Integration",
  goal: "I CAN explain trade blocs, customs unions and monetary unions.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "Free trade area",
      definition: "Members remove internal tariffs, keep external.",
    },
    { term: "Customs union", definition: "FTA + common external tariff." },
    {
      term: "Common market",
      definition: "Customs union + free movement of labour/capital.",
    },
    { term: "Monetary union", definition: "Common currency + central bank." },
    {
      term: "Trade bloc",
      definition: "Group of countries with trade agreements.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u3-blocs",
      title: "Types of Economic Integration",
      skill: "Distinguish free trade areas, customs unions and common markets.",
      lesson: {
        sections: [
          {
            heading: "Integration levels",
            body: "**Free trade area**: members remove tariffs between themselves — keep own external tariffs. Example: NAFTA/USMCA, ASEAN FTA. **Customs union**: FTA + common external tariff — goods move freely inside, same tariff outside. Example: Mercosur, SACU.\n\n**Common market**: customs union + free movement of labour and capital — deeper integration. Example: EU before euro. **Monetary union**: common currency + shared central bank — deepest integration. Example: Eurozone.",
          },
          {
            heading: "Benefits and costs",
            body: "**Benefits**: larger markets, economies of scale, more competition, efficiency, consumer choice. **Costs**: loss of sovereignty, unequal benefits, adjustment costs, job losses in uncompetitive sectors.\n\n**EU example**: single market + euro — benefits of scale but issues with unequal growth, migration, sovereignty.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "UK and France both in EU. What level of integration?",
          solution:
            "Common market + monetary union (euro for France; UK opted out).",
        },
      },
      questions: [
        {
          id: "ecn11-u3-blocs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a free trade area and customs union?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "FTA is deeper" },
              { id: "c", text: "Customs union has no internal tariffs" },
              {
                id: "d",
                text: "Customs union has common external tariff; FTA doesn't",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FTA vs CU",
                statement: "Common external tariff.",
              },
            ],
            steps: [
              {
                reasoning: "CU adds common external tariff.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Common external tariff",
            commonErrors: ["Same confused."],
          },
        },
        {
          id: "ecn11-u3-blocs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of economic integration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integration benefits",
                statement: "Scale, competition, efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Larger market — economies of scale.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More competition — lower prices, efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "More consumer choice.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Scale, competition, choice.",
            commonErrors: ["Only costs.", "Only one."],
          },
        },
        {
          id: "ecn11-u3-blocs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one cost of economic integration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integration costs",
                statement: "Sovereignty, adjustment, inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Loss of sovereignty — can't set own policies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unequal benefits — some regions win, others lose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Adjustment costs — job losses in uncompetitive sectors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dependency on bloc decisions.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sovereignty loss, unequal benefits, adjustment costs.",
            commonErrors: ["Only benefits.", "No cost."],
          },
        },
        {
          id: "ecn11-u3-blocs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country considering joining a customs union.",
          parts: [
            { label: "a", prompt: "Explain two potential benefits.", marks: 4 },
            { label: "b", prompt: "Explain two potential costs.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CU evaluation",
                statement: "Market access vs sovereignty loss.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Access to larger market — more exports.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Economies of scale — cheaper production.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Must adopt common external tariff — lose policy freedom.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Domestic industries face competition — job losses.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) market access+scale (b) policy loss+competition",
            commonErrors: ["One side.", "No balance."],
          },
        },
      ],
    },
    {
      id: "ecn11-u3-eu",
      title: "The European Union",
      skill: "Understand EU structure, benefits and challenges.",
      lesson: {
        sections: [
          {
            heading: "EU structure",
            body: "**European Commission**: proposes laws, enforces rules. **European Parliament**: elected representatives, approves laws. **Council of Ministers**: member state governments. **European Court of Justice**: interprets EU law.\n\n**Key features**: single market (free movement of goods, services, capital, labour), common policies (agriculture, trade), euro for some members.",
          },
          {
            heading: "EU challenges",
            body: "**Sovereignty vs integration**: member states lose some control. **Unequal growth**: richer vs poorer members. **Migration**: free movement vs border control debates. **Budget disputes**: who pays, who benefits.\n\n**Brexit example**: UK voted to leave — sovereignty concerns vs economic benefits.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Polish worker moves to Germany freely. What EU feature?",
          solution: "Free movement of labour — single market.",
        },
      },
      questions: [
        {
          id: "ecn11-u3-eu-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the single market?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single government" },
              { id: "b", text: "Common currency only" },
              { id: "c", text: "Common army" },
              {
                id: "d",
                text: "Free movement of goods, services, capital, labour",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Single market",
                statement: "Four freedoms.",
              },
            ],
            steps: [
              {
                reasoning: "Single market = free movement.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Free movement of factors",
            commonErrors: ["Currency confused."],
          },
        },
        {
          id: "ecn11-u3-eu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of EU membership.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EU benefits",
                statement: "Market access, scale, stability.",
              },
            ],
            steps: [
              {
                reasoning: "Access to large single market — more trade.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Economies of scale — bigger customer base.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Political stability, cooperation, influence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Market access, scale, stability.",
            commonErrors: ["Only costs.", "Only one."],
          },
        },
        {
          id: "ecn11-u3-eu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one challenge facing the EU.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EU challenges",
                statement: "Sovereignty, inequality, migration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sovereignty vs integration — national control lost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unequal growth — rich vs poor members.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Migration tensions — free movement vs borders.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Budget disputes — contributions vs benefits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Sovereignty, inequality, migration, budget.",
            commonErrors: ["No challenge.", "Only one."],
          },
        },
        {
          id: "ecn11-u3-eu-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country debating EU membership.",
          parts: [
            { label: "a", prompt: "Give two arguments for joining.", marks: 4 },
            { label: "b", prompt: "Give two arguments against.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EU membership",
                statement: "Benefits vs sovereignty.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Access to single market — more trade/investment.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Economic stability, influence, cooperation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Loss of sovereignty — can't set own policies.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Must contribute to budget, follow rules.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) market+stability (b) sovereignty+budget",
            commonErrors: ["One side.", "No balance."],
          },
        },
      ],
    },
  ],
};

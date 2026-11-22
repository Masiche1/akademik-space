import type { Lesson } from "../../../types.ts";

export const lesson534: Lesson = {
  id: "ciealgeo-u3-lesson-3-4",
  code: "3-4",
  title: "Global Trade and Economic Integration",
  goal: "I CAN explain trade patterns, economic blocs and globalisation impacts.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: trade"],

  vocabulary: [
    {
      term: "Trade bloc",
      definition: "Group of countries with preferential trade.",
    },
    { term: "FTA", definition: "Free trade agreement." },
    { term: "Customs union", definition: "FTA + common external tariff." },
    { term: "Single market", definition: "FTA + free movement of factors." },
    {
      term: "Globalisation",
      definition: "Increasing economic interconnectedness.",
    },
    {
      term: "Offshoring",
      definition: "Moving production to lower-cost countries.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s4-trade",
      title: "Global trade",
      skill: "Analyse trade patterns and integration.",
      lesson: {
        sections: [
          {
            heading: "Trade blocs",
            body: "FTA: reduce tariffs. Customs union: + common external tariff. Single market: + free movement of goods/services/capital/labour. EU most advanced.",
          },
          {
            heading: "Globalisation impacts",
            body: "Benefits: efficiency, growth, market access. Costs: job losses, inequality, environmental damage, loss of sovereignty.",
          },
        ],
        keyFormulas: [
          { name: "FTA", statement: "tariff reduction" },
          { name: "Customs union", statement: "+common tariff" },
          { name: "Single market", statement: "+free movement" },
        ],
        workedExample: {
          problem: "How does EU single market benefit businesses?",
          solution:
            "Free movement of goods, services, capital, labour — no tariffs, wider market access, economies of scale.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a free trade agreement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A business structure",
              },
              {
                id: "b",
                text: "A trade barrier",
              },
              {
                id: "c",
                text: "A type of tax",
              },
              {
                id: "d",
                text: "Agreement to reduce/eliminate tariffs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FTA",
                statement: "Tariff reduction.",
              },
            ],
            steps: [
              {
                reasoning: "FTA = tariff reduction agreement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Tariff reduction",
          },
        },
        {
          id: "ciealgeo-u3-tr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between FTA and single market?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FTA vs single market",
                statement: "Integration levels.",
              },
            ],
            steps: [
              {
                reasoning: "FTA: reduce tariffs on goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Single market: + free movement of services/capital/labour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "FTA vs single market",
          },
        },
        {
          id: "ciealgeo-u3-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the impacts of globalisation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Globalisation",
                statement: "Impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: efficiency, growth, access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: jobs, inequality, environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complex trade-offs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Benefits vs costs",
          },
        },
        {
          id: "ciealgeo-u3-tr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define trade bloc, FTA, customs union, single market, globalisation, offshoring. (b) What is FTA? (c) What is single market? (d) What are trade blocs? (e) What are globalisation impacts? (f) What is offshoring? (g) What are benefits of trade agreements? (h) Evaluate whether globalisation benefits or harms developing countries.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Global trade",
                statement: "Analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Tariff reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Free movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Trade groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Efficiency vs inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Production abroad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Market access, efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Winners/losers — not equal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Global trade analysis.",
          },
        },
        {
          id: "ciealgeo-u3-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A trade bloc is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single multinational company" },
              { id: "b", text: "A type of currency" },
              { id: "c", text: "A national tax system" },
              { id: "d", text: "A group of countries with preferential trade arrangements" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trade bloc", statement: "Countries grouped through trade agreements." },
            ],
            steps: [{ reasoning: "Trade blocs coordinate tariffs and market access among members.", marks: 1, markCode: "M" }],
            finalAnswer: "A group of countries with preferential trade.",
          },
        },
        {
          id: "ciealgeo-u3-tr-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the increasing levels of economic integration from FTA to customs union to single market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trade integration", statement: "Each stage removes more barriers and coordinates more policies." },
            ],
            steps: [
              { reasoning: "An FTA reduces tariffs among members.", marks: 1, markCode: "M" },
              { reasoning: "A customs union adds a common external tariff.", marks: 1, markCode: "M" },
              { reasoning: "A single market also frees movement of services, capital and labour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Integration deepens from tariff reduction to common external policy and free factor movement.",
            commonErrors: ["Confusing FTA and customs union."],
          },
        },
        {
          id: "ciealgeo-u3-tr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A customs union differs from an FTA because it also has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single national government" },
              { id: "b", text: "Only one export product" },
              { id: "c", text: "No member countries" },
              { id: "d", text: "A common external tariff" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Customs union", statement: "FTA plus common external tariff." },
            ],
            steps: [{ reasoning: "Members share internal free trade and external tariffs.", marks: 1, markCode: "M" }],
            finalAnswer: "A common external tariff.",
          },
        },
        {
          id: "ciealgeo-u3-tr-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the likely effects of globalisation on a low-income developing country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Globalisation impacts", statement: "Global integration can create opportunities and vulnerabilities." },
            ],
            steps: [
              { reasoning: "Access to export markets and investment can raise incomes.", marks: 1, markCode: "M" },
              { reasoning: "Competition can harm infant industries and local producers.", marks: 1, markCode: "M" },
              { reasoning: "Dependence on volatile global markets can increase vulnerability.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion recognises both opportunities and risks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Globalisation can open markets but may also expose weak economies to competition and volatility.",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "ciealgeo-u3-tr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The EU single market allows free movement of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only tourists" },
              { id: "b", text: "Goods, services, capital and labour" },
              { id: "c", text: "Only goods" },
              { id: "d", text: "Only financial capital" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Single market", statement: "Free movement of goods, services, capital and labour." },
            ],
            steps: [{ reasoning: "The single market integrates multiple factor and product markets.", marks: 1, markCode: "M" }],
            finalAnswer: "Goods, services, capital and labour.",
          },
        },
        {
          id: "ciealgeo-u3-tr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $100 product faces a 20% tariff. (a) What is the tariff-inclusive price? (b) If an FTA removes the tariff, how much does the consumer price fall?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120, unit: "USD" },
              { label: "b", answer: 20, unit: "USD" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tariff calculation", statement: "Tariff price = base price + tariff; removal lowers price by tariff amount." },
            ],
            steps: [
              { part: "a", reasoning: "100 + (0.20 x 100) = 120 USD.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "120 - 100 = 20 USD reduction.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 120 USD; b) 20 USD",
            commonErrors: ["Applying 20% twice."],
          },
        },
        {
          id: "ciealgeo-u3-tr-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether protectionism or free trade is better for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Trade policy", statement: "Protection can shield infant industries but raises prices and invites retaliation." },
            ],
            steps: [
              { reasoning: "Protection may help infant industries develop.", marks: 1, markCode: "M" },
              { reasoning: "It can raise consumer prices and reduce competition.", marks: 1, markCode: "M" },
              { reasoning: "Free trade improves efficiency and market access.", marks: 1, markCode: "M" },
              { reasoning: "Developing countries may lack capacity to compete freely.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion favours context-specific policy rather than a universal rule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neither policy is universally superior; protection may help short-term development while free trade supports long-term efficiency.",
            commonErrors: ["Treating trade policy as one-size-fits-all."],
          },
        },
        {
          id: "ciealgeo-u3-tr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Offshoring means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closing borders" },
              { id: "b", text: "Increasing domestic tariffs" },
              { id: "c", text: "Moving production to lower-cost countries" },
              { id: "d", text: "Stopping all exports" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Offshoring", statement: "Relocating production abroad to reduce costs." },
            ],
            steps: [{ reasoning: "Offshoring shifts manufacturing or services to other countries.", marks: 1, markCode: "M" }],
            finalAnswer: "Moving production abroad.",
          },
        },
        {
          id: "ciealgeo-u3-tr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country exports $45 billion and imports $30 billion. (a) What is the trade balance? (b) What percentage of exports do imports represent?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15000000000, unit: "USD" },
              { label: "b", answer: 66.66666666666667, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Trade balance", statement: "Trade balance = exports - imports; import share = imports / exports x 100." },
            ],
            steps: [
              { part: "a", reasoning: "45000000000 - 30000000000 = 15000000000 USD surplus.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "30000000000 / 45000000000 x 100 = 66.7%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 15000000000 USD surplus; b) 66.67%",
            commonErrors: ["Using imports minus exports for balance."],
          },
        },
        {
          id: "ciealgeo-u3-tr-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a benefit of trade agreements for member countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No need for transport" },
              { id: "b", text: "Elimination of all taxes" },
              { id: "c", text: "Improved market access and lower trade barriers" },
              { id: "d", text: "Guaranteed equal incomes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trade agreements", statement: "They expand market access and reduce barriers." },
            ],
            steps: [{ reasoning: "Lower tariffs can increase exports and efficiency.", marks: 1, markCode: "M" }],
            finalAnswer: "Improved market access.",
          },
        },
        {
          id: "ciealgeo-u3-tr-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm produces 10,000 units at $8 per unit in Country A and can produce them at $5 per unit in Country B. (a) What is the saving per unit? (b) What is the total saving for 10,000 units?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "USD" },
              { label: "b", answer: 30000, unit: "USD" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Offshoring cost", statement: "Unit saving = cost A - cost B; total saving = unit saving x output." },
            ],
            steps: [
              { part: "a", reasoning: "8 - 5 = 3 USD per unit.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "3 x 10000 = 30000 USD.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 3 USD; b) 30000 USD",
            commonErrors: ["Ignoring output volume."],
          },
        },
        {
          id: "ciealgeo-u3-tr-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain one way globalisation can increase inequality between countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalisation inequality", statement: "Integration rewards countries with skills, infrastructure and capital." },
            ],
            steps: [
              { reasoning: "Wealthier countries attract investment and high-value industries.", marks: 1, markCode: "M" },
              { reasoning: "Poorer countries may supply low-value goods or labour.", marks: 1, markCode: "M" },
              { reasoning: "Unequal bargaining power can widen development gaps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Globalisation can favour countries already possessing capital, skills and market power.",
            commonErrors: ["Claiming globalisation always reduces inequality."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-tr-notes",
      title: "Global trade — notes",
      summary:
        "FTA→customs union→single market increasing integration. Globalisation complex.",
      sections: [
        {
          heading: "Key idea",
          body: "Trade agreements reduce barriers but create winners/losers.",
        },
        {
          heading: "Globalisation",
          body: "Integrates economies but inequality and environmental costs.",
        },
      ],
    },
  ],
};

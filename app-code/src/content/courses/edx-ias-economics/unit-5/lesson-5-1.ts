import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "eias-econ-u5-lesson-5-1",
  code: "5-1",
  title: "International Trade",
  goal: "I CAN explain gains from trade, trade policy and protectionism.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 5 — The International Economy"],
  vocabulary: [
    {
      term: "Comparative advantage",
      definition: "Producing at lower opportunity cost than others.",
    },
    {
      term: "Absolute advantage",
      definition: "Producing more output with same inputs.",
    },
    { term: "Free trade", definition: "No barriers to international trade." },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Physical limit on imports." },
    {
      term: "Protectionism",
      definition: "Policies restricting imports to protect domestic industry.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u5-trade",
      title: "Gains from Trade",
      skill: "Explain comparative advantage and trade benefits.",
      lesson: {
        sections: [
          {
            heading: "Comparative advantage",
            body: "Country should specialise in goods where it has lowest opportunity cost — even if it has absolute advantage in all. **Example**: Country A produces both cars and wine more efficiently, but opportunity cost of cars is lower → specialise in cars, import wine.\n\n**Gains**: higher total output, lower prices, consumer choice, efficiency through specialisation.",
          },
          {
            heading: "Trade theory",
            body: "**Ricardian model**: comparative advantage from productivity differences. **Heckscher-Ohlin**: trade based on factor endowments — capital-rich exports capital-intensive goods. **New trade theory**: economies of scale, imperfect competition.\n\n**Trade creation**: free trade expands trade between members. **Trade diversion**: trade shifts from efficient non-member to less efficient member.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Country A: 1 car = 2 wine; Country B: 1 car = 4 wine. Who should produce cars?",
          solution: "A — lower opportunity cost (2 < 4).",
        },
      },
      questions: [
        {
          id: "eias-econ-u5-tr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is comparative advantage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producing at lowest opportunity cost" },
              { id: "b", text: "Most efficient" },
              { id: "c", text: "Producing more with same inputs" },
              { id: "d", text: "Lowest price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Lowest opportunity cost.",
              },
            ],
            steps: [
              {
                reasoning: "Comparative = opportunity cost.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Lowest opportunity cost",
            commonErrors: ["Absolute confused."],
          },
        },
        {
          id: "eias-econ-u5-tr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two gains from international trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade gains",
                statement: "Efficiency + choice.",
              },
            ],
            steps: [
              {
                reasoning: "Specialisation → higher total output.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower prices — competition and efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumer choice — wider variety of goods.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Output, prices, choice.",
            commonErrors: ["Only one.", "Losses."],
          },
        },
        {
          id: "eias-econ-u5-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a country with absolute advantage in all goods still benefits from trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative advantage",
                statement: "Opportunity cost.",
              },
            ],
            steps: [
              {
                reasoning: "Absolute advantage ≠ comparative advantage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Specialise in lowest opportunity cost goods — even if efficient at all.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trade frees resources for higher-value production.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both countries gain — total output increases.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Opportunity cost matters more than absolute.",
            commonErrors: ["No trade.", "Absolute only."],
          },
        },
        {
          id: "eias-econ-u5-tr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two countries: A produces cars cheaply, B produces wine cheaply.",
          parts: [
            {
              label: "a",
              prompt: "Explain how trade benefits both.",
              marks: 4,
            },
            { label: "b", prompt: "Identify who gains most.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutual gains",
                statement: "Specialisation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) A specialises in cars — efficient production.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) B specialises in wine — efficient production.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Consumers in both gain — lower prices, more choice.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Workers in specialised industries gain — higher productivity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) specialise+trade (b) consumers+workers gain",
            commonErrors: ["One-sided.", "No gains."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u5-protection",
      title: "Trade Policy and Protectionism",
      skill: "Evaluate tariffs, quotas and other protectionist measures.",
      lesson: {
        sections: [
          {
            heading: "Protectionist measures",
            body: "**Tariffs**: tax on imports — raises import prices, protects domestic industry. **Quotas**: limit import quantities — direct quantity control. **Subsidies**: support domestic producers — make them competitive. **Non-tariff barriers**: regulations, standards — disguised protection.\n\n**Arguments for**: protect infant industries, safeguard jobs, national security, prevent dumping.",
          },
          {
            heading: "Costs of protectionism",
            body: "**Higher prices**: consumers pay more. **Inefficiency**: resources to protected industries not best use. **Retaliation**: other countries impose own barriers — trade war. **Deadweight loss**: net welfare loss to economy.\n\n**Free trade vs protection**: free trade maximises efficiency; protection may be justified for strategic/national interest reasons.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government imposes 50% tariff on imported steel. Effect on domestic steel prices?",
          solution: "Rises — domestic steel less competition.",
        },
      },
      questions: [
        {
          id: "eias-econ-u5-prot-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a tariff?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Import quota" },
              { id: "b", text: "Export subsidy" },
              { id: "c", text: "Free trade" },
              { id: "d", text: "Tax on imported goods" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tariff", statement: "Import tax." },
            ],
            steps: [
              {
                reasoning: "Tariff = tax on imports.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Import tax",
            commonErrors: ["Quota confused."],
          },
        },
        {
          id: "eias-econ-u5-prot-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two arguments for protectionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protection arguments",
                statement: "Jobs + industry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protect domestic jobs — prevent imports destroying industry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Infant industry — protect until competitive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "National security — essential industries (steel, defence).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Jobs, infant industry, security.",
            commonErrors: ["Free trade.", "Only one."],
          },
        },
        {
          id: "eias-econ-u5-prot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two costs of protectionism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protection costs",
                statement: "Efficiency loss.",
              },
            ],
            steps: [
              {
                reasoning: "Higher prices — consumers pay more for imports.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inefficiency — resources to protected industry not best use.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Retaliation — other countries impose barriers → trade war.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deadweight loss — net welfare loss.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Prices, inefficiency, retaliation, DWL.",
            commonErrors: ["Only benefits.", "No cost."],
          },
        },
        {
          id: "eias-econ-u5-prot-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government considers protecting domestic car industry with tariffs.",
          parts: [
            { label: "a", prompt: "Give two arguments for.", marks: 4 },
            { label: "b", prompt: "Give two arguments against.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protection evaluation",
                statement: "For vs against.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Protect jobs — car manufacturing employs many workers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Strategic industry — cars important for economy.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Higher car prices — consumers pay more.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Retaliation — other countries may tariff UK exports.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) jobs+strategic (b) prices+retaliation",
            commonErrors: ["Only for.", "Only against."],
          },
        },
      ],
    },
  ],
};

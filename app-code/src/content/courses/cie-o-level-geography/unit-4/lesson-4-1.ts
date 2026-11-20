import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "oleg-u4-lesson-4-1",
  code: "4-1",
  title: "Changing Economies",
  goal: "I CAN describe economic sectors, trade and how economies change over time.",
  standards: ["2217: Changing economies"],
  vocabulary: [
    {
      term: "Primary sector",
      definition:
        "Economy extracting raw materials (farming, mining, fishing).",
    },
    {
      term: "Secondary sector",
      definition: "Economy manufacturing/processing goods.",
    },
    { term: "Tertiary sector", definition: "Economy providing services." },
    {
      term: "Quaternary sector",
      definition: "Economy based on knowledge/information services.",
    },
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies.",
    },
    {
      term: "Transnational corporation",
      definition: "Company operating in multiple countries.",
    },
  ],
  concepts: [
    {
      id: "oleg-u4-sectors",
      title: "Economic sectors and structural change",
      skill: "Describe the four economic sectors and how economies change.",
      lesson: {
        sections: [
          {
            heading: "The four sectors",
            body: "Primary: extract raw materials — farming, fishing, mining, forestry. Secondary: manufacture/process — factories, construction. Tertiary: services — retail, transport, education, health. Quaternary: knowledge/information — IT, research, finance.",
          },
          {
            heading: "Structural change",
            body: "As countries develop, employment shifts from primary → secondary → tertiary/quaternary (Clark-Fisher model). LEDCs depend on primary sector; MEDCs/LEDCs on tertiary. Deindustrialisation: loss of manufacturing jobs in developed economies.",
          },
          {
            heading: "Why economies change",
            body: "Technology reduces primary/secondary jobs; rising incomes increase demand for services; globalisation moves manufacturing to cheaper countries.",
          },
        ],
        keyFormulas: [
          {
            name: "Sectors",
            statement:
              "Primary=extract; Secondary=manufacture; Tertiary=services; Quaternary=knowledge.",
          },
        ],
        workedExample: {
          problem: "Why do developing countries rely on the primary sector?",
          solution:
            "Limited capital/technology for industry; agriculture and extraction provide most employment and exports.",
        },
      },
      questions: [
        {
          id: "oleg-u4-sx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sector includes farming and mining?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary" },
              { id: "b", text: "Secondary" },
              { id: "c", text: "Tertiary" },
              { id: "d", text: "Quaternary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary sector",
                statement: "Raw material extraction.",
              },
            ],
            steps: [
              {
                reasoning: "Farming/mining = primary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Primary",
            commonErrors: ["Confusing with secondary."],
          },
        },
        {
          id: "oleg-u4-sx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is deindustrialisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindustrialisation",
                statement: "Loss of manufacturing jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Manufacturing declines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Jobs shift to services.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Decline of manufacturing sector with jobs moving to services.",
            commonErrors: ["Saying industry grows."],
          },
        },
        {
          id: "oleg-u4-sx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how employment changes as a country develops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural change",
                statement: "Primary→secondary→tertiary shift.",
              },
            ],
            steps: [
              {
                reasoning: "Starts primary-dominated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shifts to secondary then tertiary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reasons: tech, incomes, globalisation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Employment shifts primary→secondary→tertiary as economies develop.",
            commonErrors: ["No sequence given."],
          },
        },
        {
          id: "oleg-u4-sx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Economic sectors.",
          parts: [
            { label: "a", prompt: "Define all four sectors.", marks: 4 },
            { label: "b", prompt: "Structural change?", marks: 2 },
            { label: "c", prompt: "Deindustrialisation?", marks: 1 },
            { label: "d", prompt: "Why does change happen?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sectors",
                statement: "Four sectors+change+causes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Primary correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Secondary correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Tertiary correct.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Quaternary correct.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Primary→tertiary shift.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "With development.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Manufacturing declines.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Tech/incomes/globalisation.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) sectors (b) change (c) deindustrialisation (d) causes",
          },
        },
      ],
    },
    {
      id: "oleg-u4-trade",
      title: "Trade and Globalisation",
      skill: "Describe international trade, TNCs and effects of globalisation.",
      lesson: {
        sections: [
          {
            heading: "International trade",
            body: "Countries export goods they produce efficiently and import what they lack. Trade agreements reduce barriers. Terms of trade: export prices vs import prices — deteriorating terms hurt primary-product exporters.",
          },
          {
            heading: "Transnational corporations",
            body: "TNCs operate in many countries — extract resources, manufacture cheaply, sell globally. Benefits: jobs, investment, technology. Costs: profits repatriated, environmental damage, exploitation of cheap labour.",
          },
          {
            heading: "Globalisation effects",
            body: "Gains: economic growth, spread of technology/ideas, cheaper goods. Losses: cultural homogenisation, job losses in developed countries, environmental costs, inequality between winners and losers.",
          },
        ],
        keyFormulas: [
          {
            name: "Trade/globalisation",
            statement:
              "Trade=exports/imports; TNCs=jobs vs exploitation; globalisation=mixed.",
          },
        ],
        workedExample: {
          problem: "How can a TNC harm a host country?",
          solution:
            "Profits go to home country, weak labour/environmental standards exploited, local firms undercut.",
        },
      },
      questions: [
        {
          id: "oleg-u4-tg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a transnational corporation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company operating in multiple countries" },
              { id: "b", text: "Government trade body" },
              { id: "c", text: "Small local business" },
              { id: "d", text: "International bank" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC",
                statement: "Multi-country company.",
              },
            ],
            steps: [
              { reasoning: "TNC = multinational.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Company operating in multiple countries",
            commonErrors: ["Confusing with NGO."],
          },
        },
        {
          id: "oleg-u4-tg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one benefit and one cost of TNCs for host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC effects",
                statement: "Jobs/investment vs exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: jobs/investment/technology.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: exploitation/profit loss.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Benefit: jobs/investment. Cost: profit repatriation, labour exploitation.",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "oleg-u4-tg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the impact of globalisation on developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation",
                statement: "Growth vs inequality/cultural loss.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: market access/growth.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cost: inequality/exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cultural homogenisation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Mixed — growth opportunities but inequality and cultural loss are concerns.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "oleg-u4-tg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trade and globalisation.",
          parts: [
            { label: "a", prompt: "Define TNC.", marks: 1 },
            { label: "b", prompt: "TNC benefits?", marks: 2 },
            { label: "c", prompt: "TNC costs?", marks: 2 },
            { label: "d", prompt: "Globalisation evaluation?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade",
                statement: "TNC+benefits+costs+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multi-country company.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Jobs/investment/tech.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Example.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Profit loss/exploitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Environmental damage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Gains: growth/access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Losses: inequality/culture.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Weigh both sides.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "d", reasoning: "Judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) TNC (b) benefits (c) costs (d) evaluation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u4-4-1-notes",
      title: "Changing economies — notes",
      summary: "Four sectors, structural change, trade, TNCs, globalisation.",
      sections: [
        {
          heading: "Sectors/change",
          body: "Primary→secondary→tertiary→quaternary shift with development; deindustrialisation in MEDCs.",
        },
        {
          heading: "Trade/globalisation",
          body: "TNCs bring jobs/investment but exploit; globalisation mixed — growth vs inequality/cultural loss.",
        },
      ],
    },
  ],
};

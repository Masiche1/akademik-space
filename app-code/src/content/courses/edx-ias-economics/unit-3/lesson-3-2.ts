import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "eias-econ-u3-lesson-3-2",
  code: "3-2",
  title: "Balance of Payments and Living Standards",
  goal: "I CAN explain the balance of payments and measures of living standards.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 3 — Macroeconomic Performance"],
  vocabulary: [
    {
      term: "Balance of payments",
      definition: "Record of all transactions with other countries.",
    },
    {
      term: "Current account",
      definition: "Trade in goods/services + income + transfers.",
    },
    { term: "Trade balance", definition: "Exports minus imports of goods." },
    {
      term: "Capital account",
      definition: "Financial flows — investment, loans.",
    },
    {
      term: "HDI",
      definition: "Human Development Index — income, health, education.",
    },
    {
      term: "GDP per capita",
      definition: "GDP divided by population — average output per person.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u3-bop",
      title: "Balance of Payments",
      skill: "Interpret current account components and imbalances.",
      lesson: {
        sections: [
          {
            heading: "BoP structure",
            body: "**Current account**: goods (physical), services (intangibles), primary income (wages, profits), secondary income (transfers). **Capital/financial account**: investment flows, loans, reserves.\n\n**Current account deficit**: imports > exports — country borrows from abroad. **Surplus**: exports > imports — lends abroad. Must balance overall.",
          },
          {
            heading: "Implications",
            body: "Persistent deficit → rising debt, currency depreciation pressure. Surplus → currency appreciation, savings invested abroad.\n\n**Example**: UK current account deficit ~3-5% GDP — financed by capital inflows.",
          },
        ],
        keyFormulas: [
          {
            name: "Current account",
            statement: "Goods + services + income + transfers balance.",
          },
        ],
        workedExample: {
          problem: "Exports £500bn, imports £550bn. Trade balance?",
          solution: "−£50bn deficit.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-bop-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a current account deficit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exports > imports" },
              { id: "b", text: "Zero trade" },
              { id: "c", text: "Capital surplus" },
              { id: "d", text: "Imports > exports" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CA deficit",
                statement: "Imports exceed.",
              },
            ],
            steps: [
              {
                reasoning: "Deficit = more outflows than inflows.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Imports > exports",
            commonErrors: ["Surplus confused."],
          },
        },
        {
          id: "eias-econ-u3-bop-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two components of the current account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current account",
                statement: "Trade + income + transfers.",
              },
            ],
            steps: [
              {
                reasoning: "Trade in goods — physical exports/imports.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trade in services — tourism, banking, insurance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Income and transfers — wages, profits, aid.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Goods, services, income, transfers.",
            commonErrors: ["Only one.", "Capital account."],
          },
        },
        {
          id: "eias-econ-u3-bop-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a persistent current account deficit may be unsustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CA deficit",
                statement: "Financed by borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Must be financed — sell assets or borrow abroad.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rising foreign debt — interest payments grow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Currency depreciation pressure — imports become costly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Eventually requires adjustment — painful correction.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Borrowing → debt → depreciation → adjustment.",
            commonErrors: ["Always fine.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u3-bop-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country has a large and growing current account deficit.",
          parts: [
            { label: "a", prompt: "Explain two causes.", marks: 4 },
            { label: "b", prompt: "Suggest two policy responses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CA adjustment",
                statement: "Competitiveness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Weak competitiveness — high prices, poor quality.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Strong domestic demand — imports surge.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Depreciate currency — exports cheaper, imports dearer.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Supply-side policies — improve competitiveness.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) competitiveness+demand (b) depreciation+supply",
            commonErrors: ["No cause.", "No policy."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u3-living",
      title: "Living Standards and Development",
      skill: "Compare GDP per capita with HDI and development measures.",
      lesson: {
        sections: [
          {
            heading: "Measuring living standards",
            body: "**GDP per capita**: average income — doesn't capture distribution or non-market activities. **HDI**: combines income, life expectancy, education — broader welfare measure. **Other indicators**: poverty rates, inequality (Gini), happiness indices.\n\n**Limitations of GDP**: ignores informal economy, environmental damage, leisure time, distribution. Two countries same GDP/capita can have very different living standards.",
          },
          {
            heading: "Development vs growth",
            body: "**Growth**: increase in output. **Development**: improvement in living standards, health, education, freedoms. Growth necessary but not sufficient for development.\n\n**Example**: oil-rich states — high GDP/capita but poor HDI if income concentrated or services weak.",
          },
        ],
        keyFormulas: [
          { name: "GDP per capita", statement: "GDP ÷ population." },
        ],
        workedExample: {
          problem:
            "Country A: GDP/capita $40k, HDI 0.7. Country B: GDP/capita $35k, HDI 0.95. Which has better living standards?",
          solution: "B — higher HDI despite lower income.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-liv-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does HDI measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income, health and education" },
              { id: "b", text: "Only income" },
              { id: "c", text: "Population" },
              { id: "d", text: "GDP only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Multi-dimensional.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = income + health + education.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Income+health+education",
            commonErrors: ["GDP confused."],
          },
        },
        {
          id: "eias-econ-u3-liv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of GDP per capita as a living standards measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement: "Incomplete measure.",
              },
            ],
            steps: [
              {
                reasoning: "Ignores distribution — average hides inequality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Excludes non-market activity — unpaid work, informal economy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ignores environmental costs and leisure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Distribution, informal economy, environment.",
            commonErrors: ["Perfect measure.", "Only one."],
          },
        },
        {
          id: "eias-econ-u3-liv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why economic growth doesn't guarantee development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs development",
                statement: "Output vs welfare.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth may benefit only wealthy — inequality worsens.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Growth may damage environment — unsustainable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Growth doesn't improve health/education automatically.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Development requires investments in people — health, education.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Growth ≠ development — welfare needs more.",
            commonErrors: ["Same thing.", "Growth sufficient."],
          },
        },
        {
          id: "eias-econ-u3-liv-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two countries have similar GDP per capita but very different HDI scores.",
          parts: [
            { label: "a", prompt: "Explain possible reasons.", marks: 4 },
            {
              label: "b",
              prompt: "Evaluate which measure is better for policy.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development measurement",
                statement: "Multi-dimensional.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Different income distribution — one more equal.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Different health/education spending — HDI captures this.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) HDI better for development policy — captures welfare.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) But GDP/capita simpler for economic performance — use both.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) distribution+services (b) HDI for welfare, GDP for output",
            commonErrors: ["GDP enough.", "No reason."],
          },
        },
      ],
    },
  ],
};

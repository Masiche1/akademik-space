import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieids-u1-lesson-1-2",
  code: "1-2",
  title: "Causes of underdevelopment",
  goal: "I CAN explain the physical, economic and social causes of underdevelopment.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 1: Development and underdevelopment",
  ],
  vocabulary: [
    {
      term: "Colonialism",
      definition:
        "Historical rule by foreign powers that extracted resources and disrupted local economies.",
    },
    {
      term: "Debt",
      definition:
        "Money owed by a country — often to foreign lenders or institutions — consuming resources needed for development.",
    },
    {
      term: "Dependency",
      definition:
        "The idea that poor countries are kept poor by their dependence on rich countries and unfair trade.",
    },
    {
      term: "Population pressure",
      definition:
        "Rapid population growth outpacing economic growth, straining resources.",
    },
    {
      term: "Infrastructure",
      definition:
        "Basic systems — roads, electricity, water, schools — needed for economic activity.",
    },
    {
      term: "Terms of trade",
      definition:
        "The ratio of export prices to import prices — declining terms hurt exporters.",
    },
  ],
  concepts: [
    {
      id: "cieids-u1-causes",
      title: "Why countries remain underdeveloped",
      skill:
        "Explain the range of causes of underdevelopment and evaluate dependency theory.",
      lesson: {
        sections: [
          {
            heading: "Physical and economic causes",
            body: "Some countries face **physical barriers** — drought, poor soils, landlocked position, natural disasters. **Economic causes** include weak infrastructure, dependence on a few primary exports (low-value raw materials), **declining terms of trade** (exports worth less than imports), and heavy **debt burdens** diverting funds from development to interest payments.",
          },
          {
            heading: "Social and historical causes",
            body: "**Colonialism** disrupted traditional economies and created export-dependent structures. **Rapid population growth** outpaces job creation. **Corruption and weak governance** divert resources. **Conflict and instability** destroy infrastructure and deter investment. **Low education and health** limit human capital — the skills needed for development.",
          },
          {
            heading: "Dependency theory",
            body: "Dependency theorists argue underdevelopment is not 'natural' but produced by the global system: **core** (rich) countries exploit **peripheral** (poor) countries through unequal trade, debt and investment. Poverty is maintained, not accidental — breaking free requires reducing dependence and building self-reliant economies.",
          },
        ],
        keyFormulas: [
          {
            name: "Cause clusters",
            statement:
              "Physical + economic + social + historical + global-system",
          },
          {
            name: "Dependency logic",
            statement:
              "Unequal trade + debt + investment → peripheral countries stay poor",
          },
        ],
        workedExample: {
          problem:
            "A country exports only coffee and pays huge debt interest. Explain its underdevelopment using dependency ideas.",
          solution:
            "Reliance on one low-value export means volatile prices and little diversification; debt payments drain resources; both reflect dependence on the global system rather than internal failure alone.",
        },
      },
      questions: [
        {
          id: "cieids-u1-cau-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dependency theory argues that poor countries are kept poor mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their own lack of effort" },
              { id: "b", text: "Unequal relationships with richer countries" },
              { id: "c", text: "Lack of natural resources" },
              { id: "d", text: "Overpopulation alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency theory",
                statement:
                  "Underdevelopment produced by unequal global relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependency theory blames the global system — unequal trade, debt and investment — not just internal factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unequal relationships with richer countries.",
            commonErrors: [
              "Thinking dependency theory says poor countries are 'lazy' or 'backward'.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two economic causes of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Economic causes",
                statement:
                  "Weak infrastructure, primary dependence, debt and declining terms of trade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dependence on primary products: exporting raw materials earns little and prices fluctuate wildly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debt burden: interest payments consume resources that could fund health, education and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Declining terms of trade or weak infrastructure also trap economies in low productivity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Primary-product dependence and debt burdens drain resources needed for development.",
            commonErrors: [
              "Listing causes without explaining their economic mechanism.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how colonialism contributed to underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Colonial legacy",
                statement:
                  "Resource extraction and disrupted economies created lasting dependence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Colonial powers extracted resources and labour, building economies around export of raw materials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Local industries and skills were suppressed; infrastructure built served extraction, not local development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After independence, countries inherited export-dependent structures and weak institutions — a lasting dependency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Colonialism created export-dependent economies and suppressed local development — a legacy persisting after independence.",
            commonErrors: [
              "Treating colonialism as purely historical without linking to present structures.",
            ],
          },
        },
        {
          id: "cieids-u1-cau-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate dependency theory as an explanation of underdevelopment.",
          parts: [
            {
              label: "a",
              prompt: "Explain dependency theory's argument.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate its strengths and weaknesses.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dependency theory",
                statement:
                  "Global system produces underdevelopment vs internal factors also matter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Dependency theory: rich 'core' countries exploit poor 'periphery' through unequal trade, debt and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Poverty is structurally produced — not a natural state — and maintained by the global system.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Solution: reduce dependence, diversify and build self-reliant economies.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Strength: explains why some resource-rich countries remain poor — the system, not just resources, matters.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Weakness: ignores internal factors — corruption, poor governance, conflict — that also cause underdevelopment.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: valuable for highlighting global inequality but incomplete alone — domestic policy matters too.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Global exploitation keeps periphery poor. (b) Explains structural poverty but ignores domestic governance failures.",
            commonErrors: [
              "Accepting or rejecting dependency theory without weighing internal vs external causes.",
            ],
          },
        },
      ],
    },
  ],
};

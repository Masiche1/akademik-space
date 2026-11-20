import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cieids-u2-lesson-2-3",
  code: "2-3",
  title: "Sustainable development",
  goal: "I CAN explain sustainable development and evaluate strategies for achieving it.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 2: Development strategies",
  ],
  vocabulary: [
    {
      term: "Sustainable development",
      definition:
        "Development meeting present needs without compromising future generations.",
    },
    {
      term: "Renewable resources",
      definition:
        "Resources that replenish naturally — solar, wind, water, forests.",
    },
    {
      term: "Non-renewable resources",
      definition:
        "Resources that cannot be replaced once used — fossil fuels, minerals.",
    },
    {
      term: "Carbon footprint",
      definition:
        "The total greenhouse gas emissions caused by an individual, organisation or activity.",
    },
    {
      term: "Ecological footprint",
      definition: "The land and resources needed to sustain a lifestyle.",
    },
    {
      term: "Intergenerational equity",
      definition:
        "Fairness between present and future generations in resource use.",
    },
  ],
  concepts: [
    {
      id: "cieids-u2-sust",
      title: "Sustainable development",
      skill:
        "Explain sustainability concepts and evaluate development strategies for environmental impact.",
      lesson: {
        sections: [
          {
            heading: "What is sustainable development?",
            body: "The Brundtland definition: meeting **present needs** without compromising the ability of **future generations** to meet theirs. It balances three pillars: **economic** (growth), **social** (equity) and **environmental** (resource protection). Development that exhausts forests, pollutes water or emits carbon is unsustainable even if GDP rises.",
          },
          {
            heading: "Environmental challenges",
            body: "Developing countries face a dilemma: they need growth but often rely on **non-renewable resources** (fossil fuels, minerals) and face pressure to industrialise quickly. **Deforestation**, **pollution**, **climate change** and **water scarcity** are worsened by unsustainable practices. Poor countries are often hit hardest by climate impacts despite contributing least to emissions.",
          },
          {
            heading: "Strategies for sustainability",
            body: "Strategies include **renewable energy** (solar, wind replacing fossil fuels), **sustainable agriculture** (avoiding soil depletion), **reforestation**, **waste reduction** and **green technologies**. International agreements (Paris Agreement) aim to limit emissions. Sustainable development argues poverty reduction and environmental protection are compatible — green growth is possible.",
          },
        ],
        keyFormulas: [
          {
            name: "Three pillars",
            statement: "Economic + social + environmental balance",
          },
          {
            name: "Sustainability test",
            statement:
              "Can future generations meet their needs if we continue?",
          },
        ],
        workedExample: {
          problem:
            "A country cuts forests for farmland, increasing food production but causing soil erosion. Is this sustainable?",
          solution:
            "No — short-term food gains are offset by long-term soil loss, reduced biodiversity and climate impacts. Sustainable farming would protect soils and forests while feeding people.",
        },
      },
      questions: [
        {
          id: "cieids-u2-sus-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sustainable development is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Development that stops all economic growth" },
              {
                id: "b",
                text: "Meeting present needs without compromising future generations",
              },
              { id: "c", text: "Development only for rich countries" },
              { id: "d", text: "Using only renewable resources immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable development",
                statement: "Present needs met without harming future capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Brundtland definition balances present and future needs — it does not mean stopping growth.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Meeting present needs without compromising future generations.",
            commonErrors: [
              "Thinking sustainability means no development at all.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'three pillars' of sustainable development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Three pillars",
                statement:
                  "Economic growth + social equity + environmental protection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Economic: development must generate income and jobs — growth is needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social: benefits must be shared fairly — reducing poverty and inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Environmental: resources must be used within ecological limits — protecting ecosystems for the future.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Economic growth, social equity and environmental protection must all be balanced.",
            commonErrors: ["Listing only the environmental pillar."],
          },
        },
        {
          id: "cieids-u2-sus-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why developing countries face a particular challenge in achieving sustainable development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sustainability dilemma",
                statement:
                  "Need for growth vs limited resources and climate vulnerability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They need rapid growth to reduce poverty but have limited capital to invest in green technologies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Often dependent on non-renewable exports (oil, minerals) that fund development but cause emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Climate change hits them hardest — droughts, floods and sea-level rise threaten development gains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth needs vs resource limits, fossil-fuel dependence and vulnerability to climate impacts.",
            commonErrors: [
              "Saying developing countries 'don't care' about sustainability — they face structural constraints.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate strategies for achieving sustainable development in poor countries.",
          parts: [
            {
              label: "a",
              prompt: "Describe two sustainable development strategies.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the challenges of implementing them.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sustainability strategies",
                statement:
                  "Green growth possible but needs investment, technology and governance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Renewable energy: solar and wind replace fossil fuels, reducing emissions and energy poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Sustainable agriculture/forestry: protects soils and biodiversity while maintaining food production.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Green technology and waste reduction improve efficiency and reduce pollution.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Cost: green technologies are often more expensive upfront — poor countries lack capital.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Technology transfer and governance needed — weak institutions may not enforce environmental rules.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: sustainability requires international support (finance, technology) alongside local commitment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Renewables, sustainable agriculture, green tech. (b) Cost and capacity constraints — needs international support.",
            commonErrors: [
              "Listing strategies without evaluating feasibility.",
            ],
          },
        },
      ],
    },
  ],
};

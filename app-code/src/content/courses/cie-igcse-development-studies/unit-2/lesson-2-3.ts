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
              { id: "b", text: "Development only for rich countries" },
              { id: "c", text: "Using only renewable resources immediately" },
              {
                id: "d",
                text: "Meeting present needs without compromising future generations",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "cieids-u2-sus-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Intergenerational equity refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal wages for all workers" },
              { id: "b", text: "Fairness between rich and poor countries" },
              { id: "c", text: "Fair prices paid to farmers under fair trade" },
              {
                id: "d",
                text: "Fairness between present and future generations in resource use",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intergenerational equity",
                statement:
                  "Fairness between present and future generations in resource use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainable development requires that today's resource use does not deprive future generations of what they need.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Fairness between present and future generations in resource use.",
            commonErrors: [
              "Confusing intergenerational equity (across time) with equity between countries or income groups today.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's total greenhouse gas emissions are $600$ million tonnes. Of this, $150$ million tonnes come from transport. Calculate transport's share of emissions.",
          response: {
            type: "numeric",
            parts: [{ label: "Transport share", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Emissions share",
                statement: "Sector share = sector emissions ÷ total emissions × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide transport emissions by total emissions: $150 / 600 = 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert to a percentage: $0.25 \\times 100 = 25$%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Dividing total emissions by transport emissions instead."],
          },
        },
        {
          id: "cieids-u2-sus-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what is meant by 'carbon footprint'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon footprint",
                statement:
                  "The total greenhouse gas emissions caused by an individual, organisation or activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A carbon footprint measures the greenhouse gases — mainly carbon dioxide — produced directly and indirectly by a person, firm or activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is used to compare the environmental impact of lifestyles, products or economies and to identify ways to reduce emissions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The total greenhouse gas emissions caused by an individual, organisation or activity.",
            commonErrors: [
              "Confusing carbon footprint (emissions) with ecological footprint (land and resources needed).",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fossil fuels are described as non-renewable resources because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are only found in importing countries" },
              { id: "b", text: "They cannot be replaced once they are used up" },
              { id: "c", text: "They cause air pollution when burned" },
              { id: "d", text: "They are very expensive to extract" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-renewable resources",
                statement:
                  "Resources that cannot be replaced once used — e.g. fossil fuels and minerals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-renewable means the resource forms over millions of years, so once consumed it is effectively gone.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(c) They cannot be replaced once they are used up.",
            commonErrors: [
              "Confusing 'non-renewable' (cannot be replaced) with 'polluting' (emits emissions when used).",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country generates $20$% of its electricity from renewable sources. Total electricity generation is $500$ terawatt-hours. Calculate renewable electricity generation.",
          response: {
            type: "numeric",
            parts: [{ label: "Renewable generation", answer: 100, unit: "TWh" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Renewable share",
                statement: "Renewable output = total generation × renewable share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert the renewable share to a decimal: $20$% = $0.20$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiply by total generation: $500 \\times 0.20 = 100$ TWh.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100 TWh",
            commonErrors: ["Calculating the non-renewable share ($80$%) instead of renewables."],
          },
        },
        {
          id: "cieids-u2-sus-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate the claim that economic growth and environmental protection are incompatible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Green growth debate",
                statement:
                  "Growth can degrade the environment, but green growth may reconcile both.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth can be incompatible with protection when it relies on deforestation, fossil fuels and pollution that exhaust resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "However, green growth — renewable energy, efficiency and sustainable agriculture — can raise incomes while reducing environmental harm.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: the two are not inherently incompatible, but compatibility depends on how growth is achieved and at what cost.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Not inherently incompatible — dirty growth conflicts with protection, but green growth can achieve both.",
            commonErrors: [
              "Arguing one side only without evaluating the green-growth alternative.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are developing countries often hardest hit by climate change despite contributing least to emissions?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They lack resources to adapt and depend on climate-sensitive sectors such as farming",
              },
              {
                id: "b",
                text: "They emit more greenhouse gases per person than rich countries",
              },
              { id: "c", text: "They refuse to join international climate agreements" },
              { id: "d", text: "Their emissions are higher than those of all other countries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Climate vulnerability",
                statement:
                  "Low historical emissions but high exposure and low adaptive capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poor countries have contributed little to emissions but depend on agriculture and lack finance and infrastructure to adapt to droughts, floods and sea-level rise.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(b) They lack resources to adapt and depend on climate-sensitive sectors such as farming.",
            commonErrors: [
              "Assuming the countries most affected must be the biggest emitters.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A household's carbon footprint is $12$ tonnes per year. A community of $250000$ people has the same average footprint. Calculate the community's total annual emissions.",
          response: {
            type: "numeric",
            parts: [{ label: "Total emissions", answer: 3000000, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total emissions",
                statement: "Total = per-person footprint × population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply footprint per person by population: $12 \\times 250000$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate: $12 \\times 250000 = 3000000$ tonnes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3000000 tonnes",
            commonErrors: [
              "Multiplying by $25000$ instead of $250000$ (misreading the population).",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how sustainable agriculture differs from intensive farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sustainable agriculture",
                statement:
                  "Maintains soil fertility and ecosystems while producing food long-term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainable agriculture protects soils through crop rotation, reduced chemical inputs and water conservation so land stays productive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It maintains biodiversity and ecosystems, whereas intensive farming often depletes soil, pollutes water and reduces biodiversity for short-term yields.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The goal is long-term food security without exhausting the natural resources future generations will need.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sustainable farming protects soils, water and biodiversity for long-term production, while intensive farming maximises short-term yields at environmental cost.",
            commonErrors: [
              "Saying sustainable agriculture always produces lower yields without noting its long-term benefits.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main aim of the Paris Agreement is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protect rainforests only, without touching energy use" },
              { id: "b", text: "Provide financial aid to poor countries" },
              {
                id: "c",
                text: "Limit global greenhouse gas emissions to tackle climate change",
              },
              { id: "d", text: "Ban all fossil fuels immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Paris Agreement",
                statement:
                  "International agreement to limit emissions and hold warming well below 2°C.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Paris Agreement commits countries to nationally determined emission targets to limit global warming and its impacts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Limit global greenhouse gas emissions to tackle climate change.",
            commonErrors: [
              "Confusing the Paris Agreement (emissions targets) with development aid agreements.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether green growth can allow developing countries to develop sustainably.",
          parts: [
            {
              label: "a",
              prompt: "Explain two green-growth strategies a developing country could use.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate the obstacles to adopting them and reach a judgement.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Green growth",
                statement:
                  "Growth that is environmentally sustainable — possible but constrained by cost and capacity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Renewable energy: solar and wind replace fossil fuels, cutting emissions while expanding energy access.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Sustainable agriculture and reforestation protect soils and forests while maintaining food and income.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Green technology and waste reduction improve efficiency and create new environmentally friendly industries.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Obstacles: green technologies are expensive upfront and poor countries lack capital and technical capacity.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Weak governance and cheap fossil fuels make dirty growth attractive in the short term.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: green growth is possible but requires international finance, technology transfer and strong institutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Renewables, sustainable agriculture, green tech. (b) Cost and capacity constraints — achievable with international support and governance.",
            commonErrors: [
              "Assuming green growth is impossible without evaluating the strategies and conditions.",
            ],
          },
        },
        {
          id: "cieids-u2-sus-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ecological footprint measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the water used by a country" },
              { id: "b", text: "GDP per person" },
              { id: "c", text: "Only the carbon emissions of a household" },
              {
                id: "d",
                text: "The land and resources needed to sustain a lifestyle",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecological footprint",
                statement:
                  "The land and resources needed to sustain a lifestyle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The ecological footprint captures the total area of productive land and water needed to supply resources and absorb wastes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) The land and resources needed to sustain a lifestyle.",
            commonErrors: [
              "Confusing ecological footprint (land/resources) with carbon footprint (emissions only).",
            ],
          },
        },
      ],
    },
  ],
};

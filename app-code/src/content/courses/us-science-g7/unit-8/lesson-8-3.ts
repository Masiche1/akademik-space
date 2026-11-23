import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "s7-u8-lesson-8-3",
  code: "8-3",
  title: "Earth and Human Activity",
  goal: "I CAN describe how human activities affect Earth's systems, identify natural resources and their uses, and evaluate sustainable practices.",
  standards: [
    "MS-ESS3-1",
    "MS-ESS3-2",
    "MS-ESS3-3",
    "MS-ESS3-4",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Natural resource",
      definition:
        "A material or energy source found in nature that humans use.",
    },
    {
      term: "Renewable resource",
      definition:
        "A resource that can be replenished naturally, such as sunlight, wind and water.",
    },
    {
      term: "Nonrenewable resource",
      definition:
        "A resource that cannot be replenished on human timescales, such as fossil fuels and minerals.",
    },
    {
      term: "Sustainability",
      definition:
        "Using resources in a way that meets present needs without compromising future generations.",
    },
    {
      term: "Pollution",
      definition:
        "The introduction of harmful substances into the environment.",
    },
    {
      term: "Ecosystem service",
      definition:
        "A benefit humans receive from ecosystems, such as clean water or pollination.",
    },
    {
      term: "Carbon footprint",
      definition:
        "The amount of greenhouse gases produced by human activities.",
    },
  ],
  concepts: [
    {
      id: "s7-u8-resources",
      title: "Natural resources",
      skill:
        "Classify resources as renewable or nonrenewable and describe their uses.",
      lesson: {
        sections: [
          {
            heading: "Types of resources",
            body: "**Natural resources** provide materials and energy for human use:\n\n- **Renewable**: sunlight, wind, water, forests (if managed sustainably), geothermal energy. These can be replenished naturally.\n- **Nonrenewable**: fossil fuels (coal, oil, natural gas), minerals, metals. These take millions of years to form and cannot be replaced on human timescales.",
          },
          {
            heading: "Uses of resources",
            body: "- **Energy**: fossil fuels, solar, wind, hydroelectric, nuclear.\n- **Materials**: metals (construction), wood (building), plastics (from oil).\n- **Food**: agriculture, fishing, livestock.\n- **Water**: drinking, irrigation, industry.\n\nOveruse of nonrenewable resources and pollution from their use are major environmental challenges.",
          },
        ],
        keyFormulas: [
          {
            name: "Renewable",
            statement:
              "Can be replenished naturally: solar, wind, water, forests.",
          },
          {
            name: "Nonrenewable",
            statement: "Cannot be replenished: fossil fuels, minerals, metals.",
          },
          {
            name: "Sustainability",
            statement:
              "Meet present needs without compromising future generations.",
          },
        ],
        workedExample: {
          problem: "Classify: coal, solar energy, iron ore, wind.",
          solution:
            "Coal = nonrenewable; solar = renewable; iron ore = nonrenewable; wind = renewable.",
        },
      },
      questions: [
        {
          id: "s7-u8-resources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable resource?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coal" },
              { id: "b", text: "Natural gas" },
              { id: "c", text: "Solar energy" },
              { id: "d", text: "Iron ore" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable resource",
                statement: "Can be replenished naturally.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solar energy is renewable; coal, natural gas and iron ore are nonrenewable.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Solar energy.",
            commonErrors: ["Choosing (a): coal is nonrenewable."],
          },
        },
        {
          id: "s7-u8-resources-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between renewable and nonrenewable resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable vs nonrenewable",
                statement: "Replenishable vs finite.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Renewable: can be replenished naturally on human timescales (solar, wind, water).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Nonrenewable: cannot be replenished (fossil fuels, minerals).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Renewable resources are sustainable if managed properly; nonrenewable will eventually run out.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Renewable = replenishable; nonrenewable = finite.",
            commonErrors: ["Saying all resources are renewable."],
          },
        },
        {
          id: "s7-u8-resources-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why forests are considered renewable but can still be depleted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sustainable forestry",
                statement: "Forests can regrow if harvested sustainably.",
              },
            ],
            steps: [
              {
                reasoning: "Trees regrow naturally, making forests renewable.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "But if cut faster than they regrow, forests can be depleted.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Deforestation for agriculture or development can destroy forests permanently.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Sustainable management (replanting, selective cutting) keeps forests renewable.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Forests are renewable if managed sustainably; overharvesting can deplete them.",
            commonErrors: ["Saying forests are nonrenewable."],
          },
        },
        {
          id: "s7-u8-resources-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city relies heavily on coal for electricity.",
          parts: [
            {
              label: "a",
              prompt: "Is coal renewable or nonrenewable?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What are two environmental impacts of burning coal?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Name two renewable alternatives.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why is switching to renewables important?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy resources",
                statement: "Coal = nonrenewable; renewables = sustainable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Nonrenewable — formed over millions of years.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "CO2 emissions (climate change); air pollution (health).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Solar, wind, hydroelectric, geothermal.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Renewables don't run out and produce less pollution.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Nonrenewable (b) CO2, air pollution (c) Solar, wind (d) Sustainable, cleaner.",
            commonErrors: ["Saying coal is renewable."],
          },
        },
      ],
    },
    {
      id: "s7-u8-human-impact",
      title: "Human Impact on Earth's Systems",
      skill:
        "Describe how human activities affect the geosphere, hydrosphere, atmosphere and biosphere.",
      lesson: {
        sections: [
          {
            heading: "Atmosphere impacts",
            body: "Human activities affect the atmosphere through:\n\n- **Burning fossil fuels**: releases CO2 and pollutants, enhancing greenhouse effect.\n- **Industrial emissions**: sulfur dioxide, nitrogen oxides cause acid rain.\n- **Ozone depletion**: CFCs damage the ozone layer.\n- **Air pollution**: particulates and gases harm health and ecosystems.",
          },
          {
            heading: "Hydrosphere impacts",
            body: "Water resources are affected by:\n\n- **Pollution**: industrial waste, agricultural runoff (fertilizers → algal blooms), oil spills.\n- **Overuse**: groundwater depletion, dam construction altering flows.\n- **Climate change**: sea level rise, changing precipitation patterns.",
          },
          {
            heading: "Biosphere and geosphere impacts",
            body: "- **Deforestation**: habitat loss, soil erosion, reduced biodiversity.\n- **Overfishing**: depleted fish populations.\n- **Mining**: landscape destruction, water contamination.\n- **Urbanization**: habitat fragmentation, heat islands.",
          },
        ],
        keyFormulas: [
          {
            name: "Atmosphere impact",
            statement: "Fossil fuels, pollution, ozone depletion.",
          },
          {
            name: "Hydrosphere impact",
            statement: "Pollution, overuse, climate change.",
          },
          {
            name: "Biosphere/geosphere impact",
            statement: "Deforestation, overfishing, mining, urbanization.",
          },
        ],
        workedExample: {
          problem: "How does agricultural runoff affect the hydrosphere?",
          solution:
            "Fertilizers enter waterways, causing eutrophication — excess nutrients lead to algal blooms that deplete oxygen and kill aquatic life.",
        },
      },
      questions: [
        {
          id: "s7-u8-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes acid rain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Sulfur dioxide and nitrogen oxides" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Water vapor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Acid rain",
                statement: "SO2 and NOx react with water to form acids.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sulfur dioxide and nitrogen oxides from burning fossil fuels react with water to form sulfuric and nitric acids.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Sulfur dioxide and nitrogen oxides.",
            commonErrors: [
              "Choosing (a): CO2 causes climate change, not acid rain.",
            ],
          },
        },
        {
          id: "s7-u8-impact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how burning fossil fuels affects the atmosphere.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fossil fuel impacts",
                statement:
                  "Releases CO2, pollutants, enhances greenhouse effect.",
              },
            ],
            steps: [
              {
                reasoning: "Releases CO2, a greenhouse gas that traps heat.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Releases pollutants (SO2, NOx, particulates) causing acid rain and smog.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Enhances greenhouse effect, contributing to climate change.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Releases CO2 (climate change) and pollutants (acid rain, smog).",
            commonErrors: ["Saying fossil fuels don't affect the atmosphere."],
          },
        },
        {
          id: "s7-u8-impact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how agricultural pollution affects aquatic ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eutrophication",
                statement:
                  "Nutrient pollution causes algal blooms that deplete oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fertilizers and animal waste run off into waterways.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Excess nitrogen and phosphorus cause rapid algal growth (algal bloom).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Algae die and decompose, consuming oxygen in the water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Low oxygen (hypoxia) kills fish and other aquatic organisms.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fertilizer runoff → algal blooms → decomposition consumes oxygen → fish kills.",
            commonErrors: ["Saying fertilizers directly kill fish."],
          },
        },
        {
          id: "s7-u8-impact-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A coastal city is experiencing sea level rise and coral reef bleaching.",
          parts: [
            { label: "a", prompt: "What causes sea level rise?", marks: 2 },
            { label: "b", prompt: "What causes coral bleaching?", marks: 2 },
            {
              label: "c",
              prompt: "How do these affect the hydrosphere?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What can be done to reduce these impacts?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate impacts",
                statement:
                  "Sea level rise from warming; bleaching from warm water.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Melting ice caps and thermal expansion of warming oceans.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Warm water causes corals to expel symbiotic algae, losing color and food source.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Sea level rise floods coastal areas; warming changes ocean chemistry.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Reduce greenhouse gas emissions; protect reefs; coastal planning.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Melting ice, thermal expansion (b) Warm water expels algae (c) Flooding, chemistry changes (d) Reduce emissions, protect reefs.",
            commonErrors: ["Saying sea level rise is only from melting ice."],
          },
        },
      ],
    },
    {
      id: "s7-u8-sustainability",
      title: "Sustainability and Solutions",
      skill:
        "Evaluate sustainable practices and propose solutions to environmental problems.",
      lesson: {
        sections: [
          {
            heading: "Sustainable practices",
            body: "Sustainability means meeting present needs without compromising future generations:\n\n- **Energy**: solar, wind, geothermal instead of fossil fuels.\n- **Agriculture**: crop rotation, organic farming, reduced pesticides.\n- **Forestry**: reforestation, selective cutting, certification.\n- **Water**: conservation, recycling, pollution prevention.\n- **Waste**: reduce, reuse, recycle.",
          },
          {
            heading: "Solutions to environmental problems",
            body: "- **Climate change**: reduce emissions, renewable energy, carbon capture.\n- **Pollution**: cleaner technologies, regulations, waste treatment.\n- **Biodiversity loss**: protected areas, habitat restoration, sustainable practices.\n- **Resource depletion**: efficiency, recycling, renewable alternatives.",
          },
          {
            heading: "Individual and collective action",
            body: "Both individuals and governments play roles:\n\n- **Individuals**: conserve energy, reduce waste, choose sustainable products.\n- **Governments**: regulations, incentives, international agreements.\n- **Businesses**: green technologies, sustainable supply chains.",
          },
        ],
        keyFormulas: [
          {
            name: "Sustainability",
            statement:
              "Meet present needs without compromising future generations.",
          },
          {
            name: "Solutions",
            statement:
              "Renewable energy, conservation, pollution prevention, habitat protection.",
          },
          {
            name: "Action levels",
            statement:
              "Individual choices + government policy + business practices.",
          },
        ],
        workedExample: {
          problem: "Suggest three ways to reduce a city's carbon footprint.",
          solution:
            "Switch to renewable energy, improve public transportation, promote energy-efficient buildings.",
        },
      },
      questions: [
        {
          id: "s7-u8-sustain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does sustainability mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using all resources as fast as possible" },
              {
                id: "b",
                text: "Meeting present needs without compromising future generations",
              },
              { id: "c", text: "Stopping all human activity" },
              { id: "d", text: "Only using renewable resources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement:
                  "Meet present needs without compromising future generations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainability balances present needs with future availability.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Meeting present needs without compromising future generations.",
            commonErrors: ["Thinking sustainability means no resource use."],
          },
        },
        {
          id: "s7-u8-sustain-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three sustainable practices for energy use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sustainable energy",
                statement: "Renewables, efficiency, conservation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use renewable energy (solar, wind) instead of fossil fuels.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Improve energy efficiency (LED lights, efficient appliances).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Conserve energy (turn off unused lights, reduce heating/cooling).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Renewable energy, efficiency, conservation.",
            commonErrors: ["Listing only one practice."],
          },
        },
        {
          id: "s7-u8-sustain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why solving environmental problems requires both individual and collective action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Environmental action",
                statement: "Individuals + governments + businesses all needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Individual choices (conservation, recycling) reduce personal impact.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Government policies (regulations, incentives) create systemic change.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Business practices (clean tech, sustainable supply chains) scale solutions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "All three levels are needed for effective solutions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Individual choices + government policy + business practices all needed for solutions.",
            commonErrors: [
              "Saying only individuals or only governments can solve problems.",
            ],
          },
        },
        {
          id: "s7-u8-sustain-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a sustainable community that addresses environmental challenges.",
          parts: [
            {
              label: "a",
              prompt: "How would you handle energy needs?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How would you manage water resources?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How would you preserve biodiversity?",
              marks: 2,
            },
            { label: "d", prompt: "How would you reduce waste?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sustainable community",
                statement:
                  "Renewable energy, water conservation, habitat protection, waste reduction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Solar panels, wind turbines, energy-efficient buildings.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Rainwater collection, water-efficient fixtures, pollution prevention.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Protected areas, native plantings, wildlife corridors.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Recycling, composting, reduced packaging, reuse programs.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Renewables (b) Conservation (c) Protected areas (d) Reduce/reuse/recycle.",
            commonErrors: ["Not addressing all four areas."],
          },
        },
      ],
    },
  ],
};

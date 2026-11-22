import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciealegeo-u6-lesson-6-1",
  code: "6-1",
  title: "Megacities and Urban Challenges",
  goal: "I CAN analyse megacity growth, urban challenges and management strategies in different development contexts.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 6: human geography in depth",
  ],
  vocabulary: [
    { term: "Megacity", definition: "City with >10 million population." },
    { term: "Urban primacy", definition: "Dominance of one city over others." },
    {
      term: "Informal settlements",
      definition: "Unplanned housing without services.",
    },
    { term: "Urban sprawl", definition: "Low-density outward expansion." },
    {
      term: "Gentrification",
      definition: "Wealthy reinvestment displacing poor.",
    },
    { term: "Smart city", definition: "Technology-enabled urban management." },
  ],
  concepts: [
    {
      id: "ciealegeo-u6l1-c1-growth",
      title: "Megacity growth and patterns",
      skill: "Explain megacity growth drivers and urban spatial patterns.",
      lesson: {
        sections: [
          {
            heading: "Megacity growth drivers",
            body: "Rural-urban migration (push: rural poverty; pull: jobs, services), natural increase, reclassification. Most megacities now in developing countries (Africa, Asia) — rapid unplanned growth → informal settlements, infrastructure strain. 'Urban primacy' — one dominant city absorbs resources.",
          },
          {
            heading: "Urban spatial patterns",
            body: "**Burgess concentric zone model**: CBD → transition → working-class → suburban → commuter. **Hoyt sector model**: sectors along transport routes. **Multiple nuclei**: several centres. Modern cities show polycentric development, edge cities, suburbanisation.",
          },
        ],
        keyFormulas: [
          { name: "Megacity", statement: ">10 million population" },
          { name: "Urban primacy", statement: "One city dominates" },
          { name: "Burgess model", statement: "Concentric zones" },
        ],
        workedExample: {
          problem: "Why are most new megacities in developing countries?",
          solution:
            "Rapid rural-urban migration + high birth rates + economic concentration → explosive growth without planning capacity → informal settlements dominate.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A megacity has population:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Over 1 million" },
              { id: "b", text: "Over 100 million" },
              { id: "c", text: "Any size" },
              { id: "d", text: "Over 10 million" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Megacity", statement: "10m+." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** >10m",
            commonErrors: ["Wrong threshold."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two push factors for rural-urban migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Push factors",
                statement: "Rural pressures.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. rural poverty/unemployment and land degradation/landlessness — drive people to seek urban opportunities.",
            commonErrors: ["Pull factors."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'urban primacy' and its consequences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urban primacy",
                statement: "Dominance.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "One city dominates national urban system — absorbs investment, services, migrants → regional cities neglected, congestion, inequality between regions.",
            commonErrors: ["Multiple equal cities."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe Burgess's concentric zone model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Burgess model", statement: "Zones." },
            ],
            steps: [
              { reasoning: "Model described.", marks: 1, markCode: "M" },
              { reasoning: "Zones listed.", marks: 1, markCode: "M" },
              { reasoning: "Assumptions/limits.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "CBD centre → transition zone → working-class → suburban → commuter — assumes isotropic plain, invasion-succession; limited by transport corridors and modern polycentricity.",
            commonErrors: ["Modern model."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the challenges of managing rapid megacity growth in developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Megacity challenges",
                statement: "Planning vs growth.",
              },
            ],
            steps: [
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Informal settlements, infrastructure deficit, traffic, pollution, crime — growth outpaces planning/fiscal capacity; need integrated planning, land tenure, service provision — difficult but essential.",
            commonErrors: ["Easy to manage."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'informal settlement'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal settlement",
                statement: "Unplanned housing.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Characteristics.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unplanned housing without legal tenure or services — no water, sanitation, electricity; often on marginal land (slopes, floodplains); home to urban poor.",
            commonErrors: ["Planned housing."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Urban primacy refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple equal cities" },
              { id: "b", text: "Suburban growth" },
              { id: "c", text: "One city dominating the urban system" },
              { id: "d", text: "Rural dominance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Primacy", statement: "Dominance." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Dominance",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two pull factors attracting migrants to cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Pull factors",
                statement: "Jobs, services.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. employment opportunities (formal + informal) and access to services (health, education, entertainment) — plus higher incomes potential.",
            commonErrors: ["Push factors."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do informal settlements often grow on marginal land?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marginal land",
                statement: "No value to developers.",
              },
            ],
            steps: [
              { reasoning: "Reason.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Marginal land (steep slopes, floodplains, contaminated sites) has no commercial value → squatters settle → high risk of landslides, flooding, pollution exposure.",
            commonErrors: ["Prime land."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'smart city' approaches to urban management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Smart city",
                statement: "Technology + management.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Equity issues.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sensors/IoT improve efficiency (traffic, waste, energy) but risk 'digital divide' — benefits accrue to connected/wealthy; needs inclusive design + governance, not just technology.",
            commonErrors: ["Technology solves all."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Burgess's concentric zone model assumes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linear development along rivers" },
              { id: "b", text: "No social zoning" },
              { id: "c", text: "Multiple equal-sized centres" },
              { id: "d", text: "An isotropic plain with the CBD at the centre" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Burgess assumptions", statement: "Uniform plain." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Isotropic plain",
            commonErrors: ["Sector model confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'edge city'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Edge city",
                statement: "Suburban employment centre.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Context.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Large commercial centre on the urban fringe — offices, retail, leisure — part of polycentric decentralisation away from the CBD; evidence of suburbanisation.",
            commonErrors: ["CBD confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does 'natural increase' contribute to city growth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Natural increase",
                statement: "Births minus deaths.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "City context.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Births exceeding deaths within the city adds population independent of migration — historically important, now secondary to migration in most megacities.",
            commonErrors: ["Migration confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe Hoyt's sector model of urban structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Hoyt model", statement: "Sectors." },
            ],
            steps: [
              { reasoning: "Model described.", marks: 1, markCode: "M" },
              { reasoning: "Sector logic.", marks: 1, markCode: "M" },
              { reasoning: "Contrast Burgess.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Land uses extend in sectors from CBD along transport routes — industry/working-class along railways, high-status residential in other sectors; more realistic than Burgess but still limited by polycentric reality.",
            commonErrors: ["Concentric zones."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate polycentric urban development as an alternative to urban primacy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polycentricity",
                statement: "Multiple centres.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Distributing growth to secondary cities reduces congestion/inequality and regional imbalance; but requires investment, transport links, governance coordination — primacy persists where regional cities lack capacity.",
            commonErrors: ["Primacy is always bad."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does informal settlement growth challenge conventional urban planning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning challenge",
                statement: "Informal vs formal.",
              },
            ],
            steps: [
              { reasoning: "Scale.", marks: 1, markCode: "M" },
              { reasoning: "Informality.", marks: 1, markCode: "M" },
              { reasoning: "Response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth outpaces planning capacity; settlements are extralegal, unplanned, on marginal land — plans can't map/control them; requires upgrading, tenure regularisation, participatory approaches.",
            commonErrors: ["Easy to plan."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u6l1-c2-challenges",
      title: "Urban challenges: inequality, environment and services",
      skill:
        "Analyse urban inequality, environmental problems and service delivery challenges.",
      lesson: {
        sections: [
          {
            heading: "Urban inequality",
            body: "Spatial segregation by income (gated communities vs informal settlements), unequal service access, gentrification displacing poor. 'Dual city' — formal vs informal economies, formal vs informal housing, serviced vs unserviced areas.",
          },
          {
            heading: "Environmental and service challenges",
            body: "Air/water pollution, waste management, traffic congestion, urban heat island. Service challenges: water, sanitation, electricity, transport, healthcare, education — informal settlements systematically underserved. Cities consume ~75% of energy, produce ~60-70% of emissions.",
          },
        ],
        keyFormulas: [
          {
            name: "Urban heat island",
            statement: "Cities warmer than surroundings",
          },
          { name: "Dual city", statement: "Formal vs informal" },
          { name: "Service deficit", statement: "Informal areas underserved" },
        ],
        workedExample: {
          problem:
            "Why do informal settlements have worse environmental outcomes?",
          solution:
            "No waste collection → dumping; no sanitation → contamination; overcrowding → disease spread; marginal land → hazard exposure; lack of services compounds vulnerability.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'urban heat island' effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Global warming" },
              { id: "b", text: "Rural heating" },
              { id: "c", text: "Cities warmer than surrounding rural areas" },
              { id: "d", text: "Urban cooling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heat island",
                statement: "Urban warmth.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Warmer cities",
            commonErrors: ["Global warming."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'gentrification'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gentrification",
                statement: "Wealthy reinvestment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Wealthy residents/businesses move into poorer areas → property values rise → original residents displaced by costs — regeneration with social cost.",
            commonErrors: ["Only positive."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'dual city' concept.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dual city",
                statement: "Two parallel systems.",
              },
            ],
            steps: [
              { reasoning: "Dimensions.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Formal vs informal economies, serviced vs unserviced areas, legal vs extralegal — parallel systems with different access to opportunities and services.",
            commonErrors: ["Single system."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give three environmental challenges of large cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Urban environment",
                statement: "Pollution, waste, heat.",
              },
            ],
            steps: [
              { reasoning: "Three valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. air pollution (vehicles/industry), waste management crisis (informal dumping), urban heat island effect — plus water pollution, noise.",
            commonErrors: ["Less than three."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate strategies for improving urban service delivery in developing cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Service delivery",
                statement: "Formal vs informal solutions.",
              },
            ],
            steps: [
              { reasoning: "Formal approaches.", marks: 1, markCode: "M" },
              { reasoning: "Informal/community.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Public provision often fails to reach informal areas → community-based solutions, public-private partnerships, incremental upgrading show promise; need tenure regularisation first.",
            commonErrors: ["One approach."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes 'urban sprawl'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Sprawl causes",
                statement: "Car ownership, cheap land.",
              },
            ],
            steps: [
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Car ownership, cheap peripheral land, preference for space → low-density outward expansion → traffic, farmland loss, infrastructure costs.",
            commonErrors: ["Compact growth."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which best describes 'informal economy' in cities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multinational corporations" },
              { id: "b", text: "Unregulated small-scale work" },
              { id: "c", text: "Government employment" },
              { id: "d", text: "Export manufacturing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal economy",
                statement: "Unregulated work.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Unregulated",
            commonErrors: ["Formal confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits and two costs of urbanisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Urbanisation balance",
                statement: "Opportunities vs problems.",
              },
            ],
            steps: [
              { reasoning: "Two benefits.", marks: 1, markCode: "M" },
              { reasoning: "Two costs.", marks: 1, markCode: "M" },
              { reasoning: "Balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Benefits: jobs, services, economies of scale. Costs: congestion, pollution, inequality, housing shortages — net depends on management.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is waste management a critical urban challenge?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Waste",
                statement: "Collection + disposal.",
              },
            ],
            steps: [
              { reasoning: "Challenge.", marks: 1, markCode: "M" },
              { reasoning: "Health impact.", marks: 1, markCode: "M" },
              { reasoning: "Scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cities generate huge waste volumes; informal settlements lack collection → open dumping → disease vectors, water contamination, flooding from blocked drains.",
            commonErrors: ["Minor issue."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'compact city' vs 'sprawling city' development models.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urban form",
                statement: "Density vs space.",
              },
            ],
            steps: [
              { reasoning: "Compact benefits.", marks: 1, markCode: "M" },
              { reasoning: "Sprawl benefits.", marks: 1, markCode: "M" },
              { reasoning: "Trade-offs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Compact: efficient services, less car dependence, preserves land — but crowded, higher land costs. Sprawl: space, privacy — but infrastructure costs, car dependence, farmland loss; context determines optimum.",
            commonErrors: ["One model."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'dual city' concept refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two separate cities" },
              { id: "b", text: "Rich and poor neighbourhoods only" },
              { id: "c", text: "Parallel formal and informal urban systems" },
              { id: "d", text: "Day and night populations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dual city",
                statement: "Two parallel systems.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Formal vs informal",
            commonErrors: ["Wealth split only."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'gated community'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gated community",
                statement: "Enclosed residential area.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Residential area enclosed by walls/fences with controlled access — provides security/services for wealthy residents but exemplifies urban segregation and exclusion.",
            commonErrors: ["Public housing."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'spatial segregation' in cities?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spatial segregation",
                statement: "Income-based separation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Separation of population groups by income/ethnicity into distinct areas — caused by housing costs, discrimination, planning — reinforces inequality in service access.",
            commonErrors: ["Random distribution."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the urban heat island effect forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heat island",
                statement: "Urban energy balance.",
              },
            ],
            steps: [
              { reasoning: "Surfaces.", marks: 1, markCode: "M" },
              { reasoning: "Waste heat.", marks: 1, markCode: "M" },
              { reasoning: "Reduced vegetation.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dark impermeable surfaces absorb heat; buildings block wind; waste heat from vehicles/industry; less vegetation/evapotranspiration → cities 1-7°C warmer, raising cooling demand and pollution.",
            commonErrors: ["Global warming confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'green infrastructure' as a response to urban environmental challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Green infrastructure",
                statement: "Nature-based solutions.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Parks, green roofs, urban forests cool cities, absorb floodwater, improve air quality, wellbeing; but requires land/maintenance, benefits unevenly distributed — complements rather than replaces grey infrastructure.",
            commonErrors: ["Solves all problems."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c2-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do cities consume disproportionate amounts of energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urban energy",
                statement: "Density + activity.",
              },
            ],
            steps: [
              { reasoning: "Reasons.", marks: 1, markCode: "M" },
              { reasoning: "Sectors.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Concentrated population, industry, transport, buildings → ~75% of global energy use and ~60-70% of emissions; density also enables efficiency gains (public transport, district heating).",
            commonErrors: ["Same as rural."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u6l1-c3-management",
      title: "Urban management strategies",
      skill: "Evaluate urban renewal, transport and governance strategies.",
      lesson: {
        sections: [
          {
            heading: "Urban renewal and housing",
            body: "**Slum upgrading**: in-situ improvements (water, sanitation, tenure) — cheaper than relocation, preserves communities. **Relocation**: move to new housing — risky (breaks social networks, may return). **Public housing**: state provision — often poorly maintained. **Self-help housing**: residents build with support.",
          },
          {
            heading: "Transport and governance",
            body: "**Public transport**: buses, BRT, rail — reduces congestion/emissions if efficient. **Non-motorised**: cycling, walking — cheap, healthy, space-efficient. **Governance**: metropolitan authorities, participatory budgeting, public-private partnerships — coordination challenges across jurisdictions.",
          },
        ],
        keyFormulas: [
          { name: "Slum upgrading", statement: "In-situ improvement" },
          { name: "BRT", statement: "Bus rapid transit" },
          {
            name: "Participatory budgeting",
            statement: "Community decision-making",
          },
        ],
        workedExample: {
          problem: "Why is slum upgrading often preferred to relocation?",
          solution:
            "Preserves social networks, cheaper, avoids displacement to worse conditions; but requires secure tenure and community participation to succeed.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l1c3-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Slum upgrading involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demolishing slums" },
              { id: "b", text: "Moving residents to new housing" },
              {
                id: "c",
                text: "Improving existing informal settlements in place",
              },
              { id: "d", text: "Building gated communities" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Upgrading", statement: "In-situ." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** In-situ",
            commonErrors: ["Relocation."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'BRT'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "BRT",
                statement: "Bus rapid transit.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Features.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bus Rapid Transit — dedicated lanes, priority at junctions, level boarding — combines bus flexibility with rail-like speed/capacity.",
            commonErrors: ["Regular bus."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'participatory budgeting' in urban governance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Participatory budgeting",
                statement: "Community input.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Residents propose/vote on budget priorities — increases accountability, targets real needs; but may be slow, exclude vulnerable groups, limited by legal frameworks.",
            commonErrors: ["Top-down only."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare 'relocation' vs 'upgrading' for informal settlements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Housing strategies",
                statement: "Move vs improve.",
              },
            ],
            steps: [
              { reasoning: "Relocation pros/cons.", marks: 1, markCode: "M" },
              { reasoning: "Upgrading pros/cons.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Relocation: frees land for development but breaks communities, may fail. Upgrading: preserves communities, cheaper but keeps residents on marginal/hazardous land.",
            commonErrors: ["Same approach."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate public transport investment for megacity sustainability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Public transport",
                statement: "Efficiency vs cost.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Efficient public transport reduces congestion/emissions but requires huge capital, maintenance, integrated land-use planning — success depends on complementary policies (zoning, fares, last-mile).",
            commonErrors: ["Always good."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'self-help housing'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-help",
                statement: "Resident-built.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Support needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Residents build/improve own housing with access to land, credit, materials — needs government support (tenure, finance, technical assistance) to succeed.",
            commonErrors: ["Government-built."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Non-motorised transport includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trains" },
              { id: "b", text: "Cycling and walking" },
              { id: "c", text: "Motorcycles" },
              { id: "d", text: "Cars" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NMT", statement: "Human power." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Cycling/walking",
            commonErrors: ["Motorised."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two challenges of metropolitan governance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Governance challenges",
                statement: "Fragmentation.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. fragmented authority across municipalities → coordination failure; unequal fiscal capacity → service disparities between rich/poor areas.",
            commonErrors: ["Unified governance."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'public-private partnerships' improve urban services?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PPP",
                statement: "Efficiency + investment.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Private efficiency + public oversight → better services/faster delivery; but risk of profit focus over equity, contract complexity, accountability issues — needs strong regulation.",
            commonErrors: ["Always better."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'informal' vs 'formal' approaches to urban management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Informal management",
                statement: "Reality vs planning.",
              },
            ],
            steps: [
              { reasoning: "Formal approach.", marks: 1, markCode: "M" },
              { reasoning: "Informal reality.", marks: 1, markCode: "M" },
              { reasoning: "Integration need.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Formal planning often ignores informal reality → fails to reach majority; successful cities integrate informal systems (recognise tenure, work with communities) while building formal capacity.",
            commonErrors: ["Formal only."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "BRT stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bicycle Rapid Transit" },
              { id: "b", text: "Bus Recovery Team" },
              { id: "c", text: "Bus Rapid Transit" },
              { id: "d", text: "British Rail Transport" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "BRT", statement: "Bus rapid transit." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Bus Rapid Transit",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'metropolitan governance'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metropolitan governance",
                statement: "City-region authority.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Coordinated governance across a metropolitan area spanning multiple municipalities — manages shared services (transport, water, planning) that cross administrative boundaries.",
            commonErrors: ["Single council."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'public housing'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public housing",
                statement: "State-provided housing.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Issue.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Housing built/managed by the state for low-income residents — often poorly maintained due to underfunding and high demand; one approach to housing shortage.",
            commonErrors: ["Private sector."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate cycling infrastructure as an urban transport policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cycling policy",
                statement: "Cheap, healthy, space-efficient.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Conditions for success.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Low cost, zero emissions, health benefits, space-efficient; but limited range, weather/culture barriers, needs safe segregated lanes and complementary land-use planning to succeed.",
            commonErrors: ["Always sufficient."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'satellite towns' or 'new towns' as a megacity management strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Satellite towns",
                statement: "Decentralisation.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Challenges.", marks: 1, markCode: "M" },
              { reasoning: "Examples/context.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Relieves pressure on primate city, provides planned housing/jobs, green belts preserved; but requires massive investment and transport links, commuters may still strain the core — effectiveness varies with planning quality.",
            commonErrors: ["Always effective."],
          },
        },
        {
          id: "ciealegeo-q-u6l1c3-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how insecure land tenure affects informal settlement upgrading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tenure & upgrading",
                statement: "Security enables investment.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "M" },
              { reasoning: "Solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Without secure tenure residents won't invest in improvements (fear of eviction) and authorities won't provide services → tenure regularisation is prerequisite for successful upgrading.",
            commonErrors: ["Tenure irrelevant."],
          },
        },
      ],
    },
  ],
};

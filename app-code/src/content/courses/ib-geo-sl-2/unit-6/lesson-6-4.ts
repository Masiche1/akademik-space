import type { Lesson } from "../../../types.ts";
import { extraQuestions } from "./extra-questions.ts";

export const lesson64: Lesson = {
  id: "geo-u6-lesson-6-4",
  code: "6-4",
  title: "Global Change: Population, Climate and Resources",
  goal: "I CAN describe global population change and evaluate the impacts of climate change and the security of water, energy and food resources.",
  standards: ["Paper 1", "Paper 2", "Core"],
  vocabulary: [
    { term: "Demographic transition", definition: "The shift from high birth and death rates to low birth and death rates as a country develops." },
    { term: "Population pyramid", definition: "Graph of age and sex structure showing cohorts; shape indicates stage of demographic transition." },
    { term: "Population ageing", definition: "Rising share of elderly people as life expectancy increases and fertility falls." },
    { term: "Climate vulnerability", definition: "Degree to which a system is susceptible to climate change harm, shaped by exposure, sensitivity and adaptive capacity." },
    { term: "Resource security", definition: "Reliable access to sufficient water, energy and food for populations, now and in future." },
    { term: "Sustainable consumption", definition: "Using resources at rates that meet present needs without compromising future generations." },
  ],
  concepts: [
    {
      id: "geo-u6-population-change",
      title: "Population distribution and change",
      skill: "Explain demographic transition, population pyramids, megacity growth, ageing populations and migration patterns.",
      lesson: {
        sections: [
          {
            heading: "Demographic transition and pyramids",
            body: "The **demographic transition** has five stages: high birth/death rates → falling death rates (population boom) → falling birth rates → low birth/death rates → possibly decline. **Population pyramids** visualise age structure: broad-based pyramids indicate young, growing populations (many LIDCs); constricted top-heavy pyramids indicate ageing populations (Japan, Europe). Global population passed 8 billion in 2022 and is projected to plateau around 10–11 billion by 2100.",
          },
          {
            heading: "Distribution, megacities and ageing",
            body: "People cluster in **megacities** (10M+), mid-latitude fertile regions and coasts, while deserts, mountains and polar zones remain sparsely populated. **Ageing populations** strain pensions and healthcare — Japan and Italy have >28% over-65s — while youthful populations in Africa create pressure for jobs and education. Migration redistributes people: rural–urban, international labour flows and forced displacement.",
          },
          {
            heading: "Migration and its consequences",
            body: "Migration responds to **push factors** (poverty, conflict, climate stress) and **pull factors** (jobs, services, safety). It remixes populations: diaspora networks send billions in remittances, but brain drain harms origin countries and ageing destinations face integration challenges. Climate migration — people displaced by sea-level rise and desertification — is a growing concern.",
          },
        ],
        keyFormulas: [
          { name: "Demographic transition", statement: "High rates → falling deaths → falling births → low rates/decline" },
          { name: "Pyramid shapes", statement: "Broad base = young/growing; top-heavy = ageing" },
          { name: "Population distribution", statement: "Clustered in megacities, mid-latitudes, coasts; sparse in extreme environments" },
        ],
        workedExample: {
          problem: "Interpret a population pyramid that is broad at the base and narrow at the top.",
          solution: "This indicates Stage 2–3 of demographic transition: high birth rates still exceed falling death rates, so the population is young and growing rapidly. It suggests pressure for education and jobs, a youthful dependency burden, and future population momentum even if fertility later falls.",
        },
      },
      questions: [
        {
          id: "geo-u6-popq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the demographic transition model, the 'population boom' typically occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both birth and death rates are high" },
              { id: "b", text: "Birth rates fall below death rates" },
              { id: "c", text: "Death rates fall while birth rates remain high" },
              { id: "d", text: "Both birth and death rates are low" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Demographic transition", statement: "Rapid population growth peaks when mortality declines before fertility, widening the gap between births and deaths." },
            ],
            steps: [
              { reasoning: "Boom = deaths falling faster than births.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Death rates fall while birth rates remain high",
            commonErrors: ["Reversing the order — mortality falls before fertility in the transition."],
          },
        },
        {
          id: "geo-u6-popq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two consequences of population ageing for a country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Ageing impacts", statement: "Older dependency ratios rise, straining pensions, healthcare and labour supply." },
            ],
            steps: [
              { reasoning: "Fiscal strain: pensions and healthcare costs rise while the working-age tax base shrinks.", marks: 1, markCode: "M" },
              { reasoning: "Labour shortages and slower economic growth as fewer workers support more retirees.", marks: 1, markCode: "M" },
              { reasoning: "Housing and care-demand shifts — more elderly care facilities, different service needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pension/healthcare strain, labour shortages, changing service demand.",
            commonErrors: ["Describing only fiscal effects — demographic structure reshapes the whole economy."],
          },
        },
        {
          id: "geo-u6-popq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the push and pull factors driving international migration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Migration drivers", statement: "Push factors repel from origin (poverty, conflict, climate stress); pull factors attract to destination (jobs, services, safety)." },
            ],
            steps: [
              { reasoning: "Push: poverty, unemployment, conflict and environmental degradation in origin countries.", marks: 1, markCode: "M" },
              { reasoning: "Pull: higher wages, employment, education and healthcare in destination countries.", marks: 1, markCode: "M" },
              { reasoning: "Networks and policy (family ties, visa regimes) mediate between push and pull.", marks: 1, markCode: "M" },
              { reasoning: "Migration decisions reflect the balance of forces across both ends.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Push (poverty/conflict/climate) vs pull (jobs/services) drive migration flows.",
            commonErrors: ["Listing one-sided factors — both origins and destinations matter."],
          },
        },
        {
          id: "geo-u6-popq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine population challenges facing a named country or region.",
          parts: [
            { label: "a", prompt: "Identify the named country/region and its demographic stage.", marks: 2 },
            { label: "b", prompt: "Explain two population-related challenges it faces.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies used to manage them.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Population challenges", statement: "Rapid growth, ageing, urban concentration and migration each demand distinct policy responses." },
            ],
            steps: [
              { part: "a", reasoning: "Named country/region (e.g. Nigeria, Japan, Bangladesh) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Demographic stage correctly placed on transition model.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Challenge 1: youth bulge/pressure on jobs and education OR ageing dependency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Challenge 2: urban concentration/megacity strain or emigration/brain drain.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Challenges linked to the country's specific demography.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: family planning/education OR pension reform/immigration OR urban planning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cultural, fiscal or political constraints on implementation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named country + stage. (b) Two challenges. (c) Strategies evaluated.",
            commonErrors: ["Choosing a country without matching challenges to its demographic stage."],
          },
        },
        ...(extraQuestions["geo-u6-popq"] ?? []),
      ],
    },
    {
      id: "geo-u6-resource-security",
      title: "Global climate and resource security",
      skill: "Describe climate change impacts, vulnerability and resilience, and evaluate water, energy and food resource security and sustainable consumption.",
      lesson: {
        sections: [
          {
            heading: "Climate change impacts and vulnerability",
            body: "Global mean temperature has risen ~1.2°C since pre-industrial times. Impacts include sea-level rise, more frequent extreme weather, shifting rainfall patterns and ecosystem loss. **Vulnerability** depends on exposure, sensitivity and adaptive capacity — low-lying island states and subsistence farmers face disproportionate risk, while wealthy nations have resources to adapt. **Resilience** is the ability to absorb shocks and recover.",
          },
          {
            heading: "Resource security: water, energy, food",
            body: "**Water security** is threatened by pollution, over-abstraction and glacier loss — ~2 billion people lack safe drinking water. **Energy security** faces pressure from fossil-fuel dependence and the transition to renewables. **Food security** combines availability, access, utilisation and stability — climate change reduces yields in tropical regions while population growth raises demand. These resources are interlinked: water scarcity cuts food production; energy choices drive emissions.",
          },
          {
            heading: "Sustainable consumption and governance",
            body: "**Sustainable consumption** means meeting needs within ecological limits — challenges include overconsumption in high-income countries and rising demand in emerging economies. Responses include the circular economy, renewable energy, water-efficient agriculture and international frameworks (Paris Agreement, SDGs). Equity remains central: the poorest contribute least to emissions yet suffer most from resource insecurity.",
          },
        ],
        keyFormulas: [
          { name: "Vulnerability", statement: "Exposure × sensitivity − adaptive capacity" },
          { name: "Resource security pillars", statement: "Availability + access + utilisation + stability" },
          { name: "Climate equity", statement: "Lowest emitters often face highest vulnerability" },
        ],
        workedExample: {
          problem: "Explain why climate vulnerability is higher in low-income countries despite lower emissions.",
          solution: "Vulnerability = exposure × sensitivity − adaptive capacity. Low-income countries often sit in climate-exposed regions (tropics, deltas, drylands), depend on climate-sensitive agriculture, and lack finance, infrastructure and technology for adaptation. Their low emissions mean they suffer disproportionately — a key equity issue.",
        },
      },
      questions: [
        {
          id: "geo-u6-rcq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Climate vulnerability is primarily determined by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population size alone" },
              { id: "b", text: "A country's total CO2 emissions" },
              { id: "c", text: "The country's latitude alone" },
              { id: "d", text: "Exposure, sensitivity and adaptive capacity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vulnerability", statement: "Susceptibility to climate harm = exposure + sensitivity − adaptive capacity." },
            ],
            steps: [
              { reasoning: "Vulnerability combines exposure, sensitivity and adaptive capacity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Exposure, sensitivity and adaptive capacity",
            commonErrors: ["Equating vulnerability with emissions — emitters and victims are often different groups."],
          },
        },
        {
          id: "geo-u6-rcq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two threats to global water security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Water security threats", statement: "Pollution, over-abstraction, climate change reducing supply, and unequal access." },
            ],
            steps: [
              { reasoning: "Pollution: agricultural runoff, industrial waste and plastics degrade freshwater quality.", marks: 1, markCode: "M" },
              { reasoning: "Over-abstraction and climate change: groundwater depletion and glacier loss reduce renewable supply.", marks: 1, markCode: "M" },
              { reasoning: "Inequality: ~2 billion lack safe drinking water despite global abundance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollution, over-abstraction/climate stress, and unequal access.",
            commonErrors: ["Confusing scarcity with availability — access and quality matter too."],
          },
        },
        {
          id: "geo-u6-rcq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the interconnections between water, energy and food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resource nexus", statement: "Water, energy and food are interdependent: each requires the others to be produced and delivered." },
            ],
            steps: [
              { reasoning: "Energy needs water: power generation (thermal, hydro) and cooling consume large volumes.", marks: 1, markCode: "M" },
              { reasoning: "Food needs water and energy: irrigation and fertiliser/pumping depend on both.", marks: 1, markCode: "M" },
              { reasoning: "Water needs energy: pumping, treatment and desalination are energy-intensive.", marks: 1, markCode: "M" },
              { reasoning: "Climate change and population growth intensify all three simultaneously — the 'nexus'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water–energy–food nexus: each resource depends on the others; stress compounds.",
            commonErrors: ["Treating resources separately — security must be managed jointly."],
          },
        },
        {
          id: "geo-u6-rcq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate strategies for achieving sustainable consumption of resources.",
          parts: [
            { label: "a", prompt: "Identify two drivers of unsustainable consumption.", marks: 2 },
            { label: "b", prompt: "Explain two strategies for sustainable consumption.", marks: 3 },
            { label: "c", prompt: "Evaluate the challenges of implementing these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable consumption", statement: "Meeting needs within ecological limits requires efficiency, circularity and equity across income levels." },
            ],
            steps: [
              { part: "a", reasoning: "Driver 1: population growth and rising incomes increasing demand.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Driver 2: overconsumption in high-income countries + wasteful production systems.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: circular economy — reuse, recycling, product longevity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: renewable energy + resource-efficient agriculture/industry.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies explain how they reduce throughput within limits.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Challenge: economic costs, consumer behaviour, rebound effects, equity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Challenge: governance difficulty across borders and sectors.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on feasibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Demand growth + overconsumption. (b) Circular economy + renewables/efficiency. (c) Cost, behaviour, governance challenges.",
            commonErrors: ["Confusing efficiency with sufficiency — reduced consumption may also be needed."],
          },
        },
        ...(extraQuestions["geo-u6-rcq"] ?? []),
      ],
    },
  ],
};

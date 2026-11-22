import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "geo-u4-lesson-4-4",
  code: "4-4",
  title: "Urban Environments",
  goal: "I CAN describe urbanisation processes and challenges and evaluate strategies for managing urban environments sustainably.",
  standards: ["Paper 1", "Paper 2", "Option G"],
  vocabulary: [
    { term: "Urbanisation", definition: "The increasing proportion of a population living in urban areas, driven by rural–urban migration and natural increase." },
    { term: "Megacity", definition: "A metropolitan area with over 10 million inhabitants, e.g. Tokyo, Delhi, Lagos." },
    { term: "Informal settlement", definition: "Unplanned housing (favelas, shantytowns, bidonvilles) lacking services, security of tenure and infrastructure." },
    { term: "Urban heat island (UHI)", definition: "Higher temperatures in urban areas than surrounding rural land due to surfaces, buildings and reduced vegetation." },
    { term: "Green infrastructure", definition: "Network of natural and semi-natural spaces (parks, green roofs, wetlands) providing ecosystem services in cities." },
    { term: "Smart city", definition: "City using digital technology and data to optimise services, transport and resource use." },
  ],
  concepts: [
    {
      id: "geo-u4-urban-processes",
      title: "Urban processes and challenges",
      skill: "Explain the drivers of urbanisation, megacity growth, informal settlements, urban heat islands, and transport and waste challenges.",
      lesson: {
        sections: [
          {
            heading: "Urbanisation drivers and megacities",
            body: "Cities grow through **rural–urban migration** (jobs, services, education), natural increase and reclassification of rural land. Most urban growth now occurs in **low- and middle-income countries** — Lagos, Kinshasa, Dhaka. **Megacities** (10M+ people) concentrate economic opportunity but strain housing, water, transport and governance.",
          },
          {
            heading: "Informal settlements and the urban heat island",
            body: "Where formal housing is unaffordable, **informal settlements** house a large share of urban populations — often 30–70% in African and Asian cities — lacking tenure, water and sanitation. **Urban heat islands** arise from dark surfaces, buildings and lost vegetation, raising temperatures several degrees above surroundings and worsening heat stress and energy demand.",
          },
          {
            heading: "Transport and waste challenges",
            body: "Rapid growth outpaces infrastructure: congested roads, air pollution and long commutes result. **Waste** management lags too — open dumps and plastic pollution contaminate land and waterways; the world generates ~2 billion tonnes of municipal solid waste annually. Informal waste-pickers provide a partial recycling service but face health risks.",
          },
        ],
        keyFormulas: [
          { name: "Megacity", statement: ">10 million inhabitants" },
          { name: "Urbanisation drivers", statement: "Rural–urban migration + natural increase + reclassification" },
          { name: "UHI cause", statement: "Dark surfaces + buildings + lost vegetation → heat retention" },
        ],
        workedExample: {
          problem: "Explain why informal settlements often grow faster than formal housing in rapidly urbanising cities.",
          solution: "Formal housing costs exceed the incomes of most migrants, while land is controlled by markets that price out the poor. Informal builders can respond quickly on vacant or marginal land, offering cheap shelter near jobs. Lack of planning enforcement and weak land tenure let settlements expand faster than serviced housing can be built.",
        },
      },
      questions: [
        {
          id: "geo-u4-uq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A megacity is defined as a metropolitan area with a population over:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 million" },
              { id: "b", text: "50 million" },
              { id: "c", text: "1 million" },
              { id: "d", text: "5 million" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Megacity", statement: "A metropolitan area with more than 10 million inhabitants." },
            ],
            steps: [
              { reasoning: "The megacity threshold is 10 million people.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 10 million",
            commonErrors: ["Confusing megacity (10M) with large city thresholds (1M)."],
          },
        },
        {
          id: "geo-u4-uq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two causes of urbanisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Urbanisation drivers", statement: "Rural–urban migration (jobs, services), natural increase, reclassification of rural land." },
            ],
            steps: [
              { reasoning: "Rural–urban migration: people move for jobs, education and services concentrated in cities.", marks: 1, markCode: "M" },
              { reasoning: "Natural increase: urban birth rates can exceed death rates, adding to growth.", marks: 1, markCode: "M" },
              { reasoning: "Reclassification: expanding city boundaries convert rural land to urban use.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rural–urban migration, natural increase, and land reclassification.",
            commonErrors: ["Listing only migration — natural increase and reclassification also drive urbanisation."],
          },
        },
        {
          id: "geo-u4-uq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how urban heat islands form and their consequences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Urban heat island", statement: "Built surfaces and reduced vegetation replace natural land cover, trapping heat and raising urban temperatures." },
            ],
            steps: [
              { reasoning: "Dark, impermeable surfaces (asphalt, concrete) absorb solar radiation and release it slowly at night.", marks: 1, markCode: "M" },
              { reasoning: "Reduced vegetation and green space limit evapotranspiration cooling; buildings trap heat.", marks: 1, markCode: "M" },
              { reasoning: "Waste heat from vehicles, industry and air conditioning adds to the effect.", marks: 1, markCode: "M" },
              { reasoning: "Consequences: heat stress, higher energy demand, worse air quality and health impacts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Surfaces + lost vegetation + waste heat → higher temperatures and health/energy costs.",
            commonErrors: ["Attributing UHI only to climate change — it is a local land-use effect."],
          },
        },
        {
          id: "geo-u4-uq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the challenges of rapid urbanisation in a named city or region.",
          parts: [
            { label: "a", prompt: "Identify the named city/region and its growth context.", marks: 2 },
            { label: "b", prompt: "Explain two challenges it faces.", marks: 3 },
            { label: "c", prompt: "Evaluate strategies being used to address them.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rapid urbanisation challenges", statement: "Growth outpacing housing, services and infrastructure produces informal settlements, congestion and pollution." },
            ],
            steps: [
              { part: "a", reasoning: "Named city/region (e.g. Lagos, Dhaka, Kinshasa) with growth context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Relevant statistic or driver (migration rate, megacity status).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Challenge 1: housing deficit → informal settlements, poor services.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Challenge 2: transport/waste/health infrastructure lagging behind population.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Challenges linked to the named city's specific conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy evaluation: slum upgrading, bus rapid transit, waste schemes, planning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: funding, enforcement, scale of need.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named city + growth context. (b) Two challenges. (c) Strategies evaluated.",
            commonErrors: ["Generic challenge lists without place-specific evidence."],
          },
        },
        {
          id: "geo-u4-uq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A megacity is defined as an urban area with a population exceeding:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 million" },
              { id: "b", text: "1 million" },
              { id: "c", text: "10 million" },
              { id: "d", text: "50 million" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Megacity", statement: "An urban area with more than 10 million inhabitants." },
            ],
            steps: [
              { reasoning: "The megacity threshold is 10 million people.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 10 million",
            commonErrors: ["Confusing megacity (10M+) with metropolis or large city thresholds."],
          },
        },
        {
          id: "geo-u4-uq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The urban heat island effect is primarily caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increased rainfall in cities" },
              { id: "b", text: "Higher wind speeds over urban areas" },
              { id: "c", text: "Dark surfaces, buildings and lost vegetation retaining heat" },
              { id: "d", text: "Reduced human activity at night" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "UHI causes", statement: "Dark surfaces, concrete buildings and vegetation loss absorb and retain heat, raising urban temperatures." },
            ],
            steps: [
              { reasoning: "Built surfaces and lost vegetation trap heat — the core UHI mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Dark surfaces + buildings + lost vegetation",
            commonErrors: ["Attributing UHI to weather patterns rather than surface properties."],
          },
        },
        {
          id: "geo-u4-uq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Informal settlements typically lack which of the following?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proximity to employment" },
              { id: "b", text: "Any form of housing structure" },
              { id: "c", text: "Any economic activity" },
              { id: "d", text: "Legal land tenure, piped water and sanitation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informal settlement", statement: "Housing area lacking legal tenure, formal services (water, sanitation) and planning approval." },
            ],
            steps: [
              { reasoning: "The defining deficits are tenure and basic services, not housing or jobs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Tenure, water and sanitation",
            commonErrors: ["Thinking informal settlements have no housing at all."],
          },
        },
        {
          id: "geo-u4-uq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Most contemporary urban growth occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only coastal megacities" },
              { id: "b", text: "Low- and middle-income countries" },
              { id: "c", text: "High-income countries of Europe and North America" },
              { id: "d", text: "Declining industrial regions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Urban growth geography", statement: "Urbanisation is now fastest in low- and middle-income countries (Lagos, Dhaka, Kinshasa)." },
            ],
            steps: [
              { reasoning: "The urban growth frontier has shifted to LMICs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low- and middle-income countries",
            commonErrors: ["Assuming urban growth is still concentrated in HICs."],
          },
        },
        {
          id: "geo-u4-uq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does urbanisation in LMICs strain infrastructure more severely than historical urbanisation in Europe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Migration in LMICs is always voluntary" },
              { id: "b", text: "European cities never faced infrastructure strain" },
              { id: "c", text: "Cities grow far faster than services can be funded and built" },
              { id: "d", text: "LMIC cities always have smaller populations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Infrastructure lag", statement: "Rapid population growth outpaces the fiscal and physical capacity to provide housing, water, transport and waste services." },
            ],
            steps: [
              { reasoning: "Growth rates exceed the speed of infrastructure provision and funding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Growth outpaces infrastructure capacity",
            commonErrors: ["Comparing absolute city size rather than growth rates."],
          },
        },
        {
          id: "geo-u4-uq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A city records an average summer temperature of $32$°C versus $26$°C in surrounding rural areas. What is the urban heat island intensity (in °C)?",
          response: { type: "numeric", parts: [{ label: "UHI intensity (°C)", answer: 6, tolerance: 0, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "UHI intensity", statement: "$\\text{UHI} = T_{urban} - T_{rural}$." },
            ],
            steps: [
              { reasoning: "Subtract rural temperature from urban temperature.", working: "32 - 26", marks: 1, markCode: "M" },
              { reasoning: "UHI intensity $= 6$°C.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$°C",
            commonErrors: ["Dividing instead of subtracting the two temperatures."],
          },
        },
        {
          id: "geo-u4-uq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A city of 5 million people generates 2 million tonnes of municipal solid waste per year. What is the waste generation per capita per year (in kg)?",
          response: { type: "numeric", parts: [{ label: "Waste per capita (kg/year)", answer: 400, tolerance: 0, unit: "kg" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Per capita waste", statement: "Per capita $= \\frac{\\text{total waste}}{\\text{population}}$, converted to kg." },
            ],
            steps: [
              { reasoning: "Convert 2 million tonnes to kg: $2 \\times 10^9$ kg.", working: "2 \\times 10^9 \\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Divide by 5 million people.", working: "\\frac{2 \\times 10^9}{5 \\times 10^6}", marks: 1, markCode: "M" },
              { reasoning: "Per capita $= 400$ kg per year.", working: "400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$400$ kg per person per year",
            commonErrors: ["Forgetting to convert tonnes to kilograms."],
          },
        },
        {
          id: "geo-u4-uq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately how many people live in informal settlements in many African and Asian cities (as a share of urban population)?",
          response: { type: "numeric", parts: [{ label: "Typical share of urban population (%)", answer: 50, tolerance: 20, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Informal settlement share", statement: "Informal settlements house ~30–70% of urban populations in many African and Asian cities." },
            ],
            steps: [
              { reasoning: "The cited range is roughly 30–70%.", working: "30\\text{--}70\\%", marks: 1, markCode: "M" },
              { reasoning: "Midpoint $\\approx 50\\%$.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 30$–$70\\%$ (midpoint $50\\%$)",
            commonErrors: ["Quoting a single figure without acknowledging the wide range."],
          },
        },
        {
          id: "geo-u4-uq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A city's population grows from 8 million to 11 million in 10 years. What is its average annual growth rate (in %, using simple division by years)?",
          response: { type: "numeric", parts: [{ label: "Total growth (%)", answer: 37.5, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Growth rate", statement: "Total growth $= \\frac{P_2 - P_1}{P_1} \\times 100$; annual $=$ total $\\div$ years." },
            ],
            steps: [
              { reasoning: "Growth $= (11 - 8)/8 = 0.375$.", working: "\\frac{11 - 8}{8} = 0.375", marks: 1, markCode: "M" },
              { reasoning: "Total growth $= 37.5\\%$ over 10 years.", working: "37.5\\%", marks: 1, markCode: "M" },
              { reasoning: "Average annual rate $\\approx 3.75\\%$; total growth $= 37.5\\%$.", working: "3.75\\% \\text{ per year}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$37.5\\%$ total ($\\approx 3.75\\%$ per year)",
            commonErrors: ["Dividing by the final population instead of the initial one."],
          },
        },
        {
          id: "geo-u4-uq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a direct consequence of urban heat islands?",
          response: { type: "numeric", parts: [{ label: "Consequence code (1=heat stress/energy demand, 2=colder winters, 3=less air pollution, 4=more rainfall)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "UHI consequences", statement: "Higher temperatures worsen heat stress, increase cooling energy demand and can intensify smog." },
            ],
            steps: [
              { reasoning: "UHI raises temperatures, increasing heat stress and energy use for cooling.", working: "heat stress", marks: 1, markCode: "M" },
              { reasoning: "Consequence code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heat stress and increased energy demand (1)",
            commonErrors: ["Selecting a benefit rather than a consequence of higher urban temperatures."],
          },
        },
        {
          id: "geo-u4-uq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A city has 2.4 million households and only 1.8 million formal housing units. What is the housing deficit as a percentage of households?",
          response: { type: "numeric", parts: [{ label: "Housing deficit (%)", answer: 25, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Housing deficit", statement: "Deficit $= \\frac{\\text{households} - \\text{units}}{\\text{households}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Deficit $= 2.4 - 1.8 = 0.6$ million units.", working: "0.6", marks: 1, markCode: "M" },
              { reasoning: "Share $= 0.6 / 2.4 = 0.25$.", working: "\\frac{0.6}{2.4} = 0.25", marks: 1, markCode: "M" },
              { reasoning: "Deficit $= 25\\%$ of households.", working: "25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Expressing the deficit relative to units rather than households."],
          },
        },
        {
          id: "geo-u4-uq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the urban challenges facing a rapidly growing megacity.",
          parts: [
            { label: "a", prompt: "Identify the megacity and describe its growth drivers.", marks: 2 },
            { label: "b", prompt: "Explain two specific challenges (housing, transport, waste or health).", marks: 3 },
            { label: "c", prompt: "Evaluate one management response to these challenges.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Megacity challenges", statement: "Rapid growth in LMIC megacities outpaces housing, transport, waste and health infrastructure." },
            ],
            steps: [
              { part: "a", reasoning: "Named megacity identified (e.g. Lagos, Dhaka).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Growth drivers (migration, natural increase) described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Challenge 1 explained with mechanism (e.g. informal housing growth).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Challenge 2 explained with mechanism (e.g. congestion/air pollution).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Challenges linked to the specific city.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Management response described (BRT, upgrading, waste scheme).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation or cost of the response identified.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Megacity + drivers. (b) Two challenges. (c) Response evaluated.",
            commonErrors: ["Listing challenges without explaining mechanisms or place-specific detail."],
          },
        },
      ],
    },
    {
      id: "geo-u4-urban-management",
      title: "Managing urban environments for the future",
      skill: "Evaluate sustainable urban planning, smart cities, green infrastructure and urban governance approaches.",
      lesson: {
        sections: [
          {
            heading: "Sustainable urban planning",
            body: "**Compact city** planning concentrates development along transit corridors, reducing sprawl and car dependence. Land-use zoning, affordable housing quotas and informal-settlement upgrading (e.g. Brazil's Favela Bairro) integrate excluded areas. **New towns** and satellite cities redistribute growth — e.g. China's Zhengdong or Brazil's Brasília — though they can create dormitory districts.",
          },
          {
            heading: "Smart cities and green infrastructure",
            body: "**Smart city** technology uses sensors and data for traffic management, energy grids and waste collection — Singapore and Barcelona are leaders, but digital divides and surveillance raise equity concerns. **Green infrastructure** — parks, green roofs, urban wetlands, street trees — cools cities, manages stormwater and improves wellbeing; Copenhagen and Singapore invest heavily.",
          },
          {
            heading: "Urban governance and sustainability",
            body: "Effective urban management requires **multi-level governance**: national frameworks, municipal capacity and community participation. Decentralisation (e.g. India's 74th Amendment) empowers cities but uneven finances limit it. Sustainable Development Goal 11 calls for inclusive, safe, resilient and sustainable cities — integrating climate adaptation into planning is now essential.",
          },
        ],
        keyFormulas: [
          { name: "Compact city", statement: "Dense, transit-oriented development reduces sprawl and emissions" },
          { name: "Green infrastructure services", statement: "Cooling, stormwater management, air quality, wellbeing" },
          { name: "Smart city caveat", statement: "Efficiency gains vs digital divide and privacy concerns" },
        ],
        workedExample: {
          problem: "Suggest two green infrastructure strategies a city could use to reduce urban heat and manage stormwater.",
          solution: "Plant street trees and create parks to increase evapotranspiration and shade. Install green roofs and bioswales/urban wetlands to absorb rainfall, reduce runoff and cool surfaces through evaporation.",
        },
      },
      questions: [
        {
          id: "geo-u4-umq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Green infrastructure is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Waste-to-energy plants" },
              { id: "b", text: "Recycling facilities in cities" },
              { id: "c", text: "Network of natural spaces providing ecosystem services" },
              { id: "d", text: "Solar panels on buildings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green infrastructure", statement: "Natural and semi-natural spaces (parks, green roofs, wetlands) delivering ecosystem services within cities." },
            ],
            steps: [
              { reasoning: "Green infrastructure = natural urban spaces providing services.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Natural spaces providing ecosystem services",
            commonErrors: ["Confusing green infrastructure with grey/engineered infrastructure."],
          },
        },
        {
          id: "geo-u4-umq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two benefits of compact city planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Compact city", statement: "Dense transit-oriented development reduces sprawl, car use and infrastructure costs." },
            ],
            steps: [
              { reasoning: "Reduced sprawl preserves farmland and natural areas at the urban fringe.", marks: 1, markCode: "M" },
              { reasoning: "Higher density supports efficient public transport and shorter commutes, cutting emissions.", marks: 1, markCode: "M" },
              { reasoning: "Shared infrastructure (water, energy, services) lowers per-capita cost and enables services access.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Less sprawl, efficient transit, lower infrastructure costs.",
            commonErrors: ["Ignoring trade-offs — density also raises congestion and housing costs."],
          },
        },
        {
          id: "geo-u4-umq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the challenges of implementing smart city technology in low-income cities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Smart city limits", statement: "Smart cities need capital, data infrastructure and digital literacy — uneven access can deepen inequality." },
            ],
            steps: [
              { reasoning: "High upfront costs for sensors, networks and platforms exceed municipal budgets in poorer cities.", marks: 1, markCode: "M" },
              { reasoning: "Digital divide: uneven internet and smartphone access excludes informal-settlement residents.", marks: 1, markCode: "M" },
              { reasoning: "Data governance risks: surveillance and privacy concerns without regulation.", marks: 1, markCode: "M" },
              { reasoning: "Result: smart solutions may serve only formal, wealthier districts — 'smart slums' persist.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cost, digital divide and governance gaps limit smart-city benefits for the poor.",
            commonErrors: ["Assuming technology automatically reduces inequality."],
          },
        },
        {
          id: "geo-u4-umq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine strategies for managing urban environments sustainably in a named city.",
          parts: [
            { label: "a", prompt: "Identify the named city and its main urban challenge.", marks: 2 },
            { label: "b", prompt: "Explain two sustainability strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable urban management", statement: "Green infrastructure, compact planning, public transport and inclusive governance balance growth with liveability." },
            ],
            steps: [
              { part: "a", reasoning: "Named city (e.g. Copenhagen, Singapore, Curitiba) and challenge identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Challenge specified (heat, flooding, congestion, housing).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: green infrastructure / cycling / transit (with detail).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: compact planning / waste scheme / climate adaptation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the named challenge.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: measurable improvements in liveability, emissions or resilience.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cost, equity gaps, scale or political constraints.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named city + challenge. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Listing strategies without linking them to the city's specific challenge."],
          },
        },
        {
          id: "geo-u4-umq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The compact city model aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximise car dependence for convenience" },
              { id: "b", text: "Concentrate development along transit corridors to reduce sprawl" },
              { id: "c", text: "Spread development evenly across rural areas" },
              { id: "d", text: "Eliminate all green space in cities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compact city", statement: "Dense, transit-oriented development that reduces sprawl, car dependence and emissions." },
            ],
            steps: [
              { reasoning: "Compact cities concentrate development around transit, cutting sprawl.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Concentrate development along transit",
            commonErrors: ["Confusing compact city with suburban sprawl."],
          },
        },
        {
          id: "geo-u4-umq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Green roofs and street trees are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Green infrastructure" },
              { id: "b", text: "Smart city technology" },
              { id: "c", text: "Urban sprawl" },
              { id: "d", text: "Grey infrastructure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Green infrastructure", statement: "Natural or nature-based urban features — parks, green roofs, wetlands, street trees — providing cooling and stormwater services." },
            ],
            steps: [
              { reasoning: "Vegetation-based urban features are green infrastructure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Green infrastructure",
            commonErrors: ["Classifying green roofs as grey (engineered) infrastructure."],
          },
        },
        {
          id: "geo-u4-umq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A key criticism of smart city technology is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only works in small towns" },
              { id: "b", text: "It eliminates the need for urban planning" },
              { id: "c", text: "It can deepen the digital divide and raise surveillance/privacy concerns" },
              { id: "d", text: "It is always too expensive for any city" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Smart city critique", statement: "Sensor/data systems improve efficiency but may exclude the digitally unconnected and enable surveillance." },
            ],
            steps: [
              { reasoning: "Equity and privacy are the principal critiques of smart cities.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Digital divide + privacy concerns",
            commonErrors: ["Focusing only on cost rather than equity and governance issues."],
          },
        },
        {
          id: "geo-u4-umq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Slum upgrading programmes (e.g. Brazil's Favela Bairro) differ from eviction-based clearance because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remove residents to distant locations" },
              { id: "b", text: "Ignore infrastructure entirely" },
              { id: "c", text: "Are only funded by international NGOs" },
              { id: "d", text: "Improve existing settlements in place with services and tenure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Slum upgrading", statement: "In-situ improvement of informal settlements — water, sanitation, tenure, services — rather than eviction." },
            ],
            steps: [
              { reasoning: "Upgrading improves settlements where people already live.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Improve in place with services",
            commonErrors: ["Confusing upgrading with clearance and relocation."],
          },
        },
        {
          id: "geo-u4-umq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why can new towns and satellite cities create 'dormitory districts'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They prohibit all commercial activity" },
              { id: "b", text: "They are too small to house people" },
              { id: "c", text: "They are always located in rural areas" },
              { id: "d", text: "They lack employment, services and amenities, so residents commute elsewhere" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dormitory district", statement: "Residential zones lacking jobs/services where residents must commute — a failure of balanced planning." },
            ],
            steps: [
              { reasoning: "Housing without employment creates dormitory function and long commutes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Lack of jobs/services forces commuting",
            commonErrors: ["Assuming new towns always fail rather than identifying the specific planning gap."],
          },
        },
        {
          id: "geo-u4-umq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "SDG 11 calls for cities that are inclusive, safe, resilient and:",
          response: { type: "numeric", parts: [{ label: "Missing adjective (1=sustainable, 2=sprawling, 3=exclusive, 4=temporary)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "SDG 11", statement: "Make cities and human settlements inclusive, safe, resilient and sustainable." },
            ],
            steps: [
              { reasoning: "SDG 11's fourth descriptor is 'sustainable'.", working: "sustainable", marks: 1, markCode: "M" },
              { reasoning: "Option = sustainable (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sustainable (1)",
            commonErrors: ["Misremembering the SDG 11 wording."],
          },
        },
        {
          id: "geo-u4-umq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A city plans 500 new affordable housing units but has demand for 800. What percentage of demand is met?",
          response: { type: "numeric", parts: [{ label: "Demand met (%)", answer: 62.5, tolerance: 0.1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Demand met", statement: "Met $= \\frac{\\text{supply}}{\\text{demand}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "\\frac{500}{800}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 0.625$.", working: "0.625", marks: 1, markCode: "M" },
              { reasoning: "Demand met $= 62.5\\%$.", working: "62.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$62.5\\%$",
            commonErrors: ["Computing the shortfall (37.5%) instead of the share met."],
          },
        },
        {
          id: "geo-u4-umq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which city is widely cited as a leader in smart city technology and green infrastructure?",
          response: { type: "numeric", parts: [{ label: "Leader city code (1=Singapore, 2=London, 3=Paris, 4=Moscow)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Smart city leaders", statement: "Singapore and Barcelona lead in smart city technology; Singapore and Copenhagen in green infrastructure." },
            ],
            steps: [
              { reasoning: "Singapore is the most frequently cited exemplar.", working: "Singapore", marks: 1, markCode: "M" },
              { reasoning: "Code = Singapore (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Singapore (1)",
            commonErrors: ["Choosing a city known for planning history rather than smart technology."],
          },
        },
        {
          id: "geo-u4-umq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A BRT system costs $\\$2.5$ million per km to build. A 24 km corridor is planned. What is the total construction cost (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Total construction cost ($ million)", answer: 60, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Infrastructure cost", statement: "Total cost $=$ cost per km $\\times$ corridor length." },
            ],
            steps: [
              { reasoning: "Multiply cost per km by length.", working: "2.5 \\times 24", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$60$ million.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Construction cost is $\\$60$ million.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$60$ million",
            commonErrors: ["Forgetting that the rate is already in millions — reporting $60{,}000$ million."],
          },
        },
        {
          id: "geo-u4-umq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Multi-level governance in urban management refers to:",
          response: { type: "numeric", parts: [{ label: "Number of governance levels typically involved (1=one, 2=two, 3=three+, 4=none)", answer: 3, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Multi-level governance", statement: "Coordination across national, regional/state and municipal/local levels of government." },
            ],
            steps: [
              { reasoning: "Multi-level means national + subnational + local — at least three levels.", working: "3+", marks: 1, markCode: "M" },
              { reasoning: "Levels = three or more (3).", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Three or more levels (3)",
            commonErrors: ["Thinking only municipal government is involved."],
          },
        },
        {
          id: "geo-u4-umq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A city reduces its average commute from 45 to 30 minutes after transit investment, saving 15 minutes per trip. With 2 million daily commuters making 2 trips, how many commuter-hours are saved per day?",
          response: { type: "numeric", parts: [{ label: "Daily commuter-hours saved", answer: 1000000, tolerance: 0, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time saving", statement: "Hours saved $= \\frac{\\text{minutes saved} \\times \\text{commuters} \\times \\text{trips}}{60}$." },
            ],
            steps: [
              { reasoning: "Total minutes saved $= 15 \\times 2{,}000{,}000 \\times 2$.", working: "15 \\times 4{,}000{,}000 = 6 \\times 10^7", marks: 1, markCode: "M" },
              { reasoning: "Convert minutes to hours: $6 \\times 10^7 / 60$.", working: "\\frac{6 \\times 10^7}{60}", marks: 1, markCode: "M" },
              { reasoning: "Hours saved $= 1{,}000{,}000$ per day.", working: "10^6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1{,}000{,}000$ commuter-hours per day",
            commonErrors: ["Forgetting to convert minutes to hours or omitting the two trips."],
          },
        },
        {
          id: "geo-u4-umq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate sustainable urban management strategies in a named city.",
          parts: [
            { label: "a", prompt: "Identify the city and one urban challenge it faces.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies being used (planning, green infrastructure, smart tech or governance).", marks: 3 },
            { label: "c", prompt: "Evaluate the overall effectiveness and equity of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable urban management", statement: "Effective strategies combine compact planning, green infrastructure, smart technology and multi-level governance while addressing equity." },
            ],
            steps: [
              { part: "a", reasoning: "Named city identified with a specific challenge.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Challenge accurately described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1 explained (e.g. green roofs, BRT, zoning).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2 explained (e.g. smart sensors, community participation).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the named challenge.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: measurable sustainability or liveability gains.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: equity gaps, cost or scale issues identified.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) City + challenge. (b) Two strategies. (c) Effectiveness + equity evaluated.",
            commonErrors: ["Listing strategies without evaluating outcomes or equity."],
          },
        },
      ],
    },
  ],
};

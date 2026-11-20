import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "geo-u1-lesson-1-2",
  code: "1-2",
  title: "Freshwater Systems and Their Management",
  goal: "I CAN describe the characteristics of rivers, lakes and wetlands and evaluate strategies for managing freshwater systems sustainably.",
  standards: ["Paper 1", "Paper 2", "Freshwater"],
  vocabulary: [
    { term: "Drainage basin", definition: "The area of land drained by a river and its tributaries, bounded by a watershed." },
    { term: "Watershed", definition: "The high ground (divide) separating one drainage basin from another." },
    { term: "Wetland", definition: "Land saturated with water — marshes, swamps, fens — supporting distinctive ecosystems." },
    { term: "Eutrophication", definition: "Excess nutrients (nitrogen, phosphorus) causing algal blooms, deoxygenation and fish kills." },
    { term: "River regime", definition: "The pattern of a river's discharge over time — seasonal variation in flow." },
    { term: "Floodplain", definition: "Flat land beside a river periodically inundated during floods, often fertile." },
  ],
  concepts: [
    {
      id: "geo-u1-freshwater-systems",
      title: "Rivers, lakes and wetlands",
      skill: "Describe the physical and ecological characteristics of rivers, lakes and wetlands and explain their importance.",
      lesson: {
        sections: [
          {
            heading: "River systems",
            body: "Rivers are flowing channels that drain **drainage basins** — from mountain headwaters through upland gorges to lowland floodplains and estuaries. Their **regime** varies: snowmelt-fed rivers peak in spring, tropical rivers respond to monsoon rains. Rivers provide water, transport, food and floodplain fertility but also flood risk.",
          },
          {
            heading: "Lakes and wetlands",
            body: "**Lakes** form in glacial troughs (Great Lakes), tectonic rifts (Lake Tanganyika, Baikal), volcanic craters and floodplain oxbows. They store and regulate water, support fisheries and biodiversity hotspots. **Wetlands** (marshes, swamps, peat bogs) act as natural sponges and nurseries — the Pantanal and the Everglades are globally important examples.",
          },
          {
            heading: "Ecological and human value",
            body: "Freshwater ecosystems cover under 1% of Earth's surface but support ~10% of known species. They provide drinking water, irrigation, hydropower, transport and recreation. Threats include pollution, abstraction, damming and invasive species — many large rivers (Colorado, Yellow) now fail to reach the sea year-round.",
          },
        ],
        keyFormulas: [
          { name: "Drainage basin", statement: "Area drained by a river, bounded by watershed divides" },
          { name: "Wetland functions", statement: "Flood storage, water filtration, habitat, carbon storage (peat)" },
          { name: "Freshwater value", statement: "<1% of surface, ~10% of species, most human water needs" },
        ],
        workedExample: {
          problem: "Explain why wetlands are considered valuable ecosystems.",
          solution: "Wetlands store floodwater and release it slowly, filter pollutants from water, provide nursery habitat for fish and birds, and peat bogs lock away carbon. Draining wetlands therefore increases flood risk, reduces water quality and destroys biodiversity.",
        },
      },
      questions: [
        {
          id: "geo-u1-fvq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A watershed is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The divide separating adjacent drainage basins" },
              { id: "b", text: "A lake formed in a glacial trough" },
              { id: "c", text: "The lowest point of a river" },
              { id: "d", text: "A type of wetland" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Watershed", statement: "The high ground dividing one drainage basin from another." },
            ],
            steps: [
              { reasoning: "A watershed (divide) is the boundary between drainage basins.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The divide between drainage basins",
            commonErrors: ["Confusing watershed with river channel or floodplain."],
          },
        },
        {
          id: "geo-u1-fvq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways in which wetlands benefit the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Wetland benefits", statement: "Flood attenuation, water filtration, habitat, carbon storage." },
            ],
            steps: [
              { reasoning: "Wetlands store and slowly release floodwater, reducing downstream flood peaks.", marks: 1, markCode: "M" },
              { reasoning: "Vegetation and sediment trap pollutants, improving water quality.", marks: 1, markCode: "M" },
              { reasoning: "They support high biodiversity and peat stores carbon, a climate benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flood storage/attenuation, water filtration, biodiversity habitat, carbon storage.",
            commonErrors: ["Only listing benefits without explaining the mechanism."],
          },
        },
        {
          id: "geo-u1-fvq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how human activities threaten freshwater ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Freshwater threats", statement: "Pollution, over-abstraction, damming, land-use change and invasive species degrade quantity and quality." },
            ],
            steps: [
              { reasoning: "Pollution: agricultural runoff, sewage and industrial effluent cause eutrophication and toxicity.", marks: 1, markCode: "M" },
              { reasoning: "Abstraction and dams alter flow regimes, fragment habitats and trap sediment.", marks: 1, markCode: "M" },
              { reasoning: "Land drainage and wetland conversion remove natural storage and habitat.", marks: 1, markCode: "R" },
              { reasoning: "Result: declining water quality, blocked fish migration and reduced resilience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollution, abstraction/damming, drainage and invasive species reduce quality and habitat.",
            commonErrors: ["Only naming threats without explaining the impact mechanism."],
          },
        },
        {
          id: "geo-u1-fvq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the value of a named freshwater ecosystem (river, lake or wetland).",
          parts: [
            { label: "a", prompt: "Describe the physical characteristics of the named system.", marks: 2 },
            { label: "b", prompt: "Explain its ecological and human value.", marks: 3 },
            { label: "c", prompt: "Evaluate threats to the system and possible protection measures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Freshwater value", statement: "Systems provide water, food, flood regulation, transport and biodiversity; threats include pollution and abstraction." },
            ],
            steps: [
              { part: "a", reasoning: "Named system with accurate physical description (e.g. Amazon, Great Lakes, Pantanal).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Details: size, regime, origin or surrounding land use.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ecological value: biodiversity, nursery habitat, nutrient cycling.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Human value: water supply, irrigation, hydropower, transport, recreation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Links value to people and economy with specific uses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Threat identified (pollution, damming, drainage) with mechanism.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Protection measure ( Ramsar site, regulation, restoration) proposed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced judgement on threat severity and protection effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named system + physical detail. (b) Ecological + human value. (c) Threat + protection + judgement.",
            commonErrors: ["Choosing a system without naming it or giving specific detail."],
          },
        },
        {
          id: "geo-u1-fvq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A drainage basin is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The high ground separating adjacent basins" },
              { id: "b", text: "The area of land drained by a river and its tributaries" },
              { id: "c", text: "A lake formed by glacial erosion" },
              { id: "d", text: "The tidal limit of an estuary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Drainage basin", statement: "The area of land drained by a river and its tributaries, bounded by a watershed." },
            ],
            steps: [
              { reasoning: "A drainage basin collects all runoff into one river system.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Land drained by a river and its tributaries",
            commonErrors: ["Confusing the basin (the area) with the watershed (its boundary)."],
          },
        },
        {
          id: "geo-u1-fvq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A river's regime is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of its water" },
              { id: "b", text: "The pattern of discharge over time" },
              { id: "c", text: "The speed of its fastest flood" },
              { id: "d", text: "The depth of its channel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "River regime", statement: "The pattern of a river's discharge over time, including seasonal variation in flow." },
            ],
            steps: [
              { reasoning: "Regime describes how flow varies through the year, e.g. snowmelt or monsoon peaks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The pattern of discharge over time",
            commonErrors: ["Confusing regime with channel depth or water colour."],
          },
        },
        {
          id: "geo-u1-fvq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Eutrophication of a lake is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excess nitrogen and phosphorus triggering algal blooms" },
              { id: "b", text: "Acid rain lowering the water's pH" },
              { id: "c", text: "Excessive dam construction upstream" },
              { id: "d", text: "Invasive fish species feeding on algae" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eutrophication", statement: "Nutrient enrichment (N and P) causing algal blooms, deoxygenation and fish kills." },
            ],
            steps: [
              { reasoning: "Eutrophication is nutrient-driven; the bloom–decompose–deoxygenate sequence follows.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Excess nitrogen and phosphorus triggering algal blooms",
            commonErrors: ["Confusing eutrophication with acidification — different chemical processes."],
          },
        },
        {
          id: "geo-u1-fvq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Lake Tanganyika occupies a basin formed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glacial erosion" },
              { id: "b", text: "A volcanic crater" },
              { id: "c", text: "A tectonic rift" },
              { id: "d", text: "A meander cutoff" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Lake origins", statement: "Lakes form in glacial troughs, tectonic rifts (Tanganyika, Baikal), volcanic craters and oxbows." },
            ],
            steps: [
              { reasoning: "Tanganyika lies in the East African Rift Valley — a tectonic origin.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A tectonic rift",
            commonErrors: ["Choosing glacial erosion — that describes the Great Lakes."],
          },
        },
        {
          id: "geo-u1-fvq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why do rivers such as the Colorado and Yellow River frequently fail to reach the sea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their channels are blocked by log jams" },
              { id: "b", text: "Excessive abstraction and flow regulation consume the discharge" },
              { id: "c", text: "They freeze solid each winter" },
              { id: "d", text: "Their deltas have been mined away" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "River depletion", statement: "Over-abstraction for irrigation and urban use plus dams can consume an entire river's flow before the sea." },
            ],
            steps: [
              { reasoning: "Human demand along arid basins removes discharge upstream of the mouth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Abstraction and regulation consume the flow",
            commonErrors: ["Attributing it to natural causes — the cause is human water use."],
          },
        },
        {
          id: "geo-u1-fvq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A river channel has a cross-sectional area of $20 \\text{ m}^2$ and water flows at $1.5 \\text{ m/s}$. Calculate the discharge.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, tolerance: 0.01, unit: "m^3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discharge", statement: "$Q = A \\times v$ — cross-sectional area times velocity." },
            ],
            steps: [
              { reasoning: "Multiply channel area by flow velocity.", working: "20 \\times 1.5 = 30", marks: 1, markCode: "M" },
              { reasoning: "Discharge is $30 \\text{ m}^3/\\text{s}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30 \\text{ m}^3/\\text{s}$",
            commonErrors: ["Adding area and velocity instead of multiplying."],
          },
        },
        {
          id: "geo-u1-fvq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A basin of $8{,}000 \\text{ km}^2$ produces $4 \\text{ km}^3$ of annual runoff. Calculate the equivalent runoff depth in millimetres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500, tolerance: 0.5, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Runoff depth", statement: "$\\text{depth} = \\dfrac{\\text{volume}}{\\text{area}}$, with $1 \\text{ km}^3$ over $1 \\text{ km}^2 = 1 \\text{ km} = 1{,}000 \\text{ mm}$." },
            ],
            steps: [
              { reasoning: "Divide volume by area.", working: "4 \\div 8{,}000 = 0.0005 \\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Convert kilometres to millimetres.", working: "0.0005 \\times 1{,}000{,}000 = 500", marks: 1, markCode: "M" },
              { reasoning: "Equivalent runoff depth is $500 \\text{ mm}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500 \\text{ mm}$",
            commonErrors: ["Leaving the answer in kilometres or forgetting the $\\text{km}$ to $\\text{mm}$ conversion."],
          },
        },
        {
          id: "geo-u1-fvq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A river drops $400 \\text{ m}$ over a distance of $25 \\text{ km}$. Calculate its average gradient as a percentage.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.6, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$\\text{gradient} = \\dfrac{\\text{vertical drop}}{\\text{horizontal distance}} \\times 100$ for a percentage." },
            ],
            steps: [
              { reasoning: "Divide the drop by the distance (both in metres or consistent units).", working: "400 \\div 25{,}000 \\times 100 = 1.6", marks: 1, markCode: "M" },
              { reasoning: "The average gradient is $1.6\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.6\\%$",
            commonErrors: ["Using $25 \\text{ km}$ directly against $400 \\text{ m}$ — convert units first."],
          },
        },
        {
          id: "geo-u1-fvq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A lake receives $20 \\text{ km}^3$ of inflow per year but loses $15 \\text{ km}^3$ through outflow and evaporation. Calculate the net annual change in lake storage.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, tolerance: 0.01, unit: "km^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Storage change", statement: "$\\Delta S = \\text{inputs} - \\text{outputs}$" },
            ],
            steps: [
              { reasoning: "Subtract total outputs from inputs.", working: "20 - 15 = 5", marks: 1, markCode: "M" },
              { reasoning: "Storage increases by $5 \\text{ km}^3$ per year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+5 \\text{ km}^3$ per year",
            commonErrors: ["Subtracting inflow from outflow — inputs minus outputs gives the sign."],
          },
        },
        {
          id: "geo-u1-fvq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A drainage basin covers $6{,}000 \\text{ km}^2$ and has a population of 12 million. Calculate the population density.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2000, tolerance: 1, unit: "persons/km^2" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population density", statement: "$\\text{density} = \\dfrac{\\text{population}}{\\text{area}}$" },
            ],
            steps: [
              { reasoning: "Divide population by basin area.", working: "12{,}000{,}000 \\div 6{,}000 = 2{,}000", marks: 1, markCode: "M" },
              { reasoning: "Population density is $2{,}000$ persons per $\\text{km}^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2{,}000$ persons per $\\text{km}^2$",
            commonErrors: ["Dividing area by population instead of population by area."],
          },
        },
        {
          id: "geo-u1-fvq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A wetland covers $150 \\text{ km}^2$ and stores water to an average depth of $0.8 \\text{ m}$. Calculate the total stored water volume in million cubic metres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120, tolerance: 0.5, unit: "million m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Water storage volume", statement: "$V = \\text{area} \\times \\text{depth}$; $1 \\text{ km}^2 = 10^6 \\text{ m}^2$." },
            ],
            steps: [
              { reasoning: "Convert the wetland area to square metres.", working: "150 \\times 10^6 = 1.5 \\times 10^8 \\text{ m}^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply by mean depth.", working: "1.5 \\times 10^8 \\times 0.8 = 1.2 \\times 10^8 \\text{ m}^3", marks: 1, markCode: "M" },
              { reasoning: "The wetland stores $120$ million $\\text{m}^3$ of water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$ million $\\text{m}^3$",
            commonErrors: ["Mixing $\\text{km}^2$ with metres without conversion."],
          },
        },
        {
          id: "geo-u1-fvq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the ecological and human value of a named wetland.",
          parts: [
            { label: "a", prompt: "Describe the physical characteristics of the named wetland.", marks: 2 },
            { label: "b", prompt: "Explain its ecological functions.", marks: 3 },
            { label: "c", prompt: "Evaluate human pressures on the wetland and possible protection measures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wetland value", statement: "Wetlands store floodwater, filter pollutants, support biodiversity and store carbon; pressures include drainage, pollution and abstraction." },
            ],
            steps: [
              { part: "a", reasoning: "Named wetland (e.g. Pantanal, Everglades, Camargue) correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Physical detail: size, water regime, vegetation or location.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Flood storage and attenuation function explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Water filtration or nursery habitat / biodiversity function explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Functions linked to the named wetland's ecology.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pressure identified (drainage, pollution, development) with mechanism.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Protection measure proposed (Ramsar listing, restoration, zoning).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on the balance of value and threat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named wetland + physical detail. (b) Ecological functions. (c) Pressure + protection + judgement.",
            commonErrors: ["Listing benefits without explaining the ecological mechanism."],
          },
        },
      ],
    },
    {
      id: "geo-u1-freshwater-management",
      title: "Managing freshwater systems",
      skill: "Evaluate approaches to managing rivers, lakes and wetlands, including integrated basin management and sustainable practices.",
      lesson: {
        sections: [
          {
            heading: "Integrated water resources management",
            body: "**IWRM** coordinates development and management of water, land and related resources to maximise economic and social welfare without compromising ecosystem sustainability. Basin-scale planning recognises that upstream actions affect downstream users — applied in the Murray-Darling Basin (Australia) and the Rhine.",
          },
          {
            heading: "Engineering and ecological approaches",
            body: "Hard engineering — dams, levees, channelisation — controls floods and stores water but disrupts ecosystems and sediment flows. **Soft engineering** — floodplain restoration, wetland creation, afforestation — works with natural processes. Modern management increasingly combines both.",
          },
          {
            heading: "Sustainable practices",
            body: "Demand management (pricing, efficiency), pollution control (wastewater treatment), riparian buffer strips, environmental flow requirements for dams, and community participation. The **Ramsar Convention** protects internationally important wetlands; the EU Water Framework Directive sets 'good ecological status' targets.",
          },
        ],
        keyFormulas: [
          { name: "IWRM", statement: "Integrated Water Resources Management — basin-scale coordination" },
          { name: "Hard vs soft", statement: "Hard = structures resist; soft = natural processes absorb" },
          { name: "Environmental flows", statement: "Minimum river flow reserved for ecosystem health" },
        ],
        workedExample: {
          problem: "Compare hard and soft engineering approaches to flood management on a river.",
          solution: "Hard engineering (levees, channelisation) gives predictable protection for property but is costly, can increase downstream flood risk and damages habitat. Soft engineering (wetland restoration, floodplain reconnection) is cheaper long-term and improves biodiversity but needs more land and may be less reliable for dense urban areas.",
        },
      },
      questions: [
        {
          id: "geo-u1-mq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Integrated Water Resources Management (IWRM) emphasises:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building more dams on every river" },
              { id: "b", text: "Coordinating water use across a whole basin" },
              { id: "c", text: "Privatising all water supplies" },
              { id: "d", text: "Ignoring environmental flows" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IWRM", statement: "Coordinated development and management of water, land and related resources at basin scale." },
            ],
            steps: [
              { reasoning: "IWRM is basin-scale integrated management, not single-purpose engineering.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Basin-scale coordinated management",
            commonErrors: ["Equating IWRM with dam building — it is a governance approach."],
          },
        },
        {
          id: "geo-u1-mq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two soft engineering methods of flood management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Soft engineering", statement: "Floodplain restoration, wetland creation, afforestation, river restoration — work with natural processes." },
            ],
            steps: [
              { reasoning: "Floodplain reconnection: allowing rivers to spread onto natural floodplains reduces peak flows.", marks: 1, markCode: "M" },
              { reasoning: "Wetland creation stores water and slows runoff before it reaches channels.", marks: 1, markCode: "M" },
              { reasoning: "Afforestation increases interception and infiltration in the basin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Floodplain restoration, wetland creation, afforestation or river restoration.",
            commonErrors: ["Describing levees or dams — those are hard engineering."],
          },
        },
        {
          id: "geo-u1-mq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the concept of environmental flow and why it matters for river management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Environmental flow", statement: "The quantity, timing and quality of water required to sustain freshwater and estuarine ecosystems." },
            ],
            steps: [
              { reasoning: "Dams and abstraction can reduce flows below levels needed for fish migration and wetland flooding.", marks: 1, markCode: "M" },
              { reasoning: "Environmental flow reserves a minimum discharge for ecosystem function.", marks: 1, markCode: "M" },
              { reasoning: "Without it, rivers lose ecological health even if human supply needs are met.", marks: 1, markCode: "R" },
              { reasoning: "It balances human water use against ecosystem sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Environmental flow reserves minimum discharge for ecosystems; it protects river health alongside human use.",
            commonErrors: ["Treating all water as available for human use — ecosystems need flows too."],
          },
        },
        {
          id: "geo-u1-mq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the effectiveness of integrated basin management for a named river system.",
          parts: [
            { label: "a", prompt: "Describe the river system and its management challenges.", marks: 2 },
            { label: "b", prompt: "Explain how integrated management is applied there.", marks: 3 },
            { label: "c", prompt: "Evaluate the outcomes of this approach.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Basin management", statement: "IWRM coordinates competing upstream-downstream uses; success depends on governance, funding and enforcement." },
            ],
            steps: [
              { part: "a", reasoning: "Named basin (e.g. Murray-Darling, Rhine, Mekong) with real challenges: drought, pollution, competing uses.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific detail on scale, riparian states or water stress.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Identifies IWRM institution (basin commission, treaty) coordinating users.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains mechanisms: water allocation plans, pollution controls, environmental flows.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Links mechanisms to the basin's specific challenges.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Positive outcome: reduced conflict, improved quality or ecosystem recovery.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: funding gaps, enforcement difficulty, political resistance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named basin + challenges. (b) IWRM mechanisms applied. (c) Outcomes weighed both ways.",
            commonErrors: ["Describing a single dam project rather than basin-scale governance."],
          },
        },
        {
          id: "geo-u1-mq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Hard engineering methods of flood management include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Levees and channelisation" },
              { id: "b", text: "Wetland restoration" },
              { id: "c", text: "Floodplain reconnection" },
              { id: "d", text: "Afforestation of the basin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hard engineering", statement: "Structural interventions — dams, levees, channelisation — that resist or redirect floodwater." },
            ],
            steps: [
              { reasoning: "Levees and channelisation are structures that control flow; the others are soft engineering.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Levees and channelisation",
            commonErrors: ["Choosing wetland restoration — that is soft engineering."],
          },
        },
        {
          id: "geo-u1-mq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "IWRM stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "International Water Reuse Management" },
              { id: "b", text: "Integrated Water Resources Management" },
              { id: "c", text: "Irrigation and Wetland Restoration Method" },
              { id: "d", text: "Inland Water Retention Measure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IWRM", statement: "Integrated Water Resources Management — coordinated basin-scale management of water, land and related resources." },
            ],
            steps: [
              { reasoning: "IWRM coordinates development and management across a whole basin.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Integrated Water Resources Management",
            commonErrors: ["Confusing IWRM with a single technique — it is a governance framework."],
          },
        },
        {
          id: "geo-u1-mq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Ramsar Convention is concerned with protecting:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rare desert mammals" },
              { id: "b", text: "Internationally important wetlands" },
              { id: "c", text: "Coral reefs exclusively" },
              { id: "d", text: "Migratory bird species only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ramsar Convention", statement: "An international treaty for the conservation and wise use of wetlands of international importance." },
            ],
            steps: [
              { reasoning: "Ramsar designates and protects significant wetlands worldwide.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Internationally important wetlands",
            commonErrors: ["Thinking Ramsar covers all ecosystems — it is specifically about wetlands."],
          },
        },
        {
          id: "geo-u1-mq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An environmental flow requirement specifies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The minimum discharge needed to sustain freshwater ecosystems" },
              { id: "b", text: "The maximum flood the channel can contain" },
              { id: "c", text: "The flow required to fill a reservoir" },
              { id: "d", text: "The irrigation demand of a basin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Environmental flow", statement: "The quantity, timing and quality of water required to sustain freshwater and estuarine ecosystems." },
            ],
            steps: [
              { reasoning: "Environmental flows reserve discharge for ecosystem health, not human supply targets.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Minimum discharge for ecosystem health",
            commonErrors: ["Confusing it with flood capacity or reservoir filling."],
          },
        },
        {
          id: "geo-u1-mq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A major limitation of river channelisation for flood control is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is too cheap to maintain" },
              { id: "b", text: "Reduces habitat diversity and can increase flood risk downstream" },
              { id: "c", text: "Requires no maintenance at all" },
              { id: "d", text: "Only works in tropical climates" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Channelisation impacts", statement: "Straightening and lining channels destroys habitat and can accelerate flow, transferring flood risk downstream." },
            ],
            steps: [
              { reasoning: "Channelisation removes natural channels and floodplain storage, speeding water downstream.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Habitat loss and downstream flood risk",
            commonErrors: ["Ignoring that hard engineering can worsen flooding elsewhere."],
          },
        },
        {
          id: "geo-u1-mq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A levee is built $8 \\text{ m}$ high while the design flood level is $6.5 \\text{ m}$. Calculate the freeboard.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, tolerance: 0.01, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Freeboard", statement: "The vertical distance between the design flood level and the top of the defence." },
            ],
            steps: [
              { reasoning: "Freeboard equals levee height minus design flood level.", working: "8 - 6.5 = 1.5", marks: 1, markCode: "M" },
              { reasoning: "The freeboard is $1.5 \\text{ m}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5 \\text{ m}$",
            commonErrors: ["Adding the heights instead of subtracting."],
          },
        },
        {
          id: "geo-u1-mq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A flood defence costing $2.4 \\text{ million}$ protects property valued at $8 \\text{ million}$. Calculate the benefit-cost ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.33, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Benefit-cost ratio", statement: "$BCR = \\dfrac{\\text{benefits}}{\\text{costs}}$; a ratio above 1 indicates value for money." },
            ],
            steps: [
              { reasoning: "Divide the protected value by the scheme cost.", working: "8 \\div 2.4 = 3.33", marks: 1, markCode: "M" },
              { reasoning: "The benefit-cost ratio is approximately $3.3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$BCR \\approx 3.3$",
            commonErrors: ["Inverting the ratio — benefits over costs, not costs over benefits."],
          },
        },
        {
          id: "geo-u1-mq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A basin has a population of 5 million and wastewater treatment covers 80% of it. Calculate the population not receiving treatment.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, tolerance: 0.01, unit: "million" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Coverage gap", statement: "$\\text{untreated} = \\text{population} \\times (1 - \\text{coverage})$" },
            ],
            steps: [
              { reasoning: "20% of the population is untreated.", working: "5 \\times (1 - 0.8) = 1", marks: 1, markCode: "M" },
              { reasoning: "$1$ million people lack treatment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ million people",
            commonErrors: ["Multiplying by 80% instead of the untreated 20%."],
          },
        },
        {
          id: "geo-u1-mq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A river channel has a capacity of $120 \\text{ m}^3/\\text{s}$ but peak flow reaches $180 \\text{ m}^3/\\text{s}$ for 3 hours. Calculate the volume of water exceeding channel capacity.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 648000, tolerance: 1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Excess volume", statement: "$V = \\text{excess discharge} \\times \\text{time}$; convert hours to seconds." },
            ],
            steps: [
              { reasoning: "Excess discharge is $180 - 120 = 60 \\text{ m}^3/\\text{s}$ over $3 \\times 3{,}600 = 10{,}800 \\text{ s}$.", working: "60 \\times 10{,}800 = 648{,}000", marks: 1, markCode: "M" },
              { reasoning: "Check the time conversion and multiplication.", working: "3 \\times 3600 = 10{,}800", marks: 1, markCode: "M" },
              { reasoning: "The overflow volume is $648{,}000 \\text{ m}^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$648{,}000 \\text{ m}^3$",
            commonErrors: ["Forgetting to convert hours to seconds before multiplying by discharge."],
          },
        },
        {
          id: "geo-u1-mq14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Upstream reforestation reduces a river's peak discharge by 15%. If the original peak was $400 \\text{ m}^3/\\text{s}$, calculate the new peak discharge.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 340, tolerance: 0.1, unit: "m^3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{new value} = \\text{original} \\times (1 - \\text{reduction})$" },
            ],
            steps: [
              { reasoning: "Reduce the peak by 15%.", working: "400 \\times 0.85 = 340", marks: 1, markCode: "M" },
              { reasoning: "The new peak discharge is $340 \\text{ m}^3/\\text{s}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$340 \\text{ m}^3/\\text{s}$",
            commonErrors: ["Subtracting 15 from 400 instead of 15%."],
          },
        },
        {
          id: "geo-u1-mq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Drip irrigation uses $5{,}000 \\text{ litres}$ per hectare per day versus $12{,}000 \\text{ litres}$ for flood irrigation. Calculate the water saved by switching to drip irrigation on 10 hectares over 30 days, in cubic metres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2100, tolerance: 1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Water saving", statement: "$\\text{saved} = (\\text{flood} - \\text{drip}) \\times \\text{area} \\times \\text{days}$; $1 \\text{ m}^3 = 1{,}000 \\text{ litres}$." },
            ],
            steps: [
              { reasoning: "Daily saving per hectare is $12{,}000 - 5{,}000 = 7{,}000 \\text{ litres}$.", working: "12{,}000 - 5{,}000 = 7{,}000", marks: 1, markCode: "M" },
              { reasoning: "Scale up to 10 hectares over 30 days.", working: "7{,}000 \\times 10 \\times 30 = 2{,}100{,}000 \\text{ litres}", marks: 1, markCode: "M" },
              { reasoning: "Convert litres to cubic metres.", working: "2{,}100{,}000 \\div 1{,}000 = 2{,}100", marks: 1, markCode: "M" },
              { reasoning: "Water saved is $2{,}100 \\text{ m}^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2{,}100 \\text{ m}^3$",
            commonErrors: ["Leaving the answer in litres — the question asks for cubic metres."],
          },
        },
        {
          id: "geo-u1-mq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the relative merits of hard and soft engineering for managing flood risk on a named river.",
          parts: [
            { label: "a", prompt: "Identify the named river and describe its flood problem.", marks: 2 },
            { label: "b", prompt: "Explain one hard engineering and one soft engineering approach used or proposed there.", marks: 3 },
            { label: "c", prompt: "Evaluate which approach is more sustainable for that river.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Hard vs soft engineering", statement: "Hard structures resist flow predictably but are costly and can transfer risk; soft measures work with natural processes but need space and may be less reliable." },
            ],
            steps: [
              { part: "a", reasoning: "Named river (e.g. Rhine, Mississippi, Yangtze) with a real flood context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Flood problem described — settlement, recurrence or damage.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hard approach: levee, dam, channelisation or diversion — explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Soft approach: floodplain restoration, wetland creation or afforestation — explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both approaches linked to the named river's situation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weighs costs, reliability, environmental impact and land requirements.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Considers downstream effects and long-term maintenance.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on which is more sustainable and why.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named river + flood context. (b) One hard + one soft approach. (c) Sustainability judgement.",
            commonErrors: ["Describing only one approach without comparing."],
          },
        },
      ],
    },
  ],
};

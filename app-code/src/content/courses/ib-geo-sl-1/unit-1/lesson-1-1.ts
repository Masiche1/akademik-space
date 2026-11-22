import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "geo-u1-lesson-1-1",
  code: "1-1",
  title: "The Hydrological Cycle and Global Water Distribution",
  goal: "I CAN explain the stores and flows of the hydrological cycle and assess the global pattern and causes of water scarcity.",
  standards: ["Paper 1", "Paper 2", "Freshwater"],
  vocabulary: [
    { term: "Hydrological cycle", definition: "The continuous movement of water between stores (oceans, atmosphere, land) through evaporation, condensation, precipitation and runoff." },
    { term: "Evapotranspiration", definition: "Combined loss of water to the atmosphere through evaporation from surfaces and transpiration from plants." },
    { term: "Precipitation", definition: "Water falling to Earth's surface as rain, snow, sleet or hail." },
    { term: "Runoff", definition: "Water flowing over the land surface into rivers and lakes, including infiltration and percolation." },
    { term: "Water scarcity", definition: "A situation where demand for freshwater exceeds available supply, physical or economic." },
    { term: "Virtual water", definition: "The volume of freshwater used to produce a traded good, e.g. ~15,000 litres per kg of beef." },
  ],
  concepts: [
    {
      id: "geo-u1-hydrological-cycle",
      title: "The hydrological cycle",
      skill: "Describe the stores and fluxes of the hydrological cycle and explain how energy drives transfers between them.",
      lesson: {
        sections: [
          {
            heading: "Stores and fluxes",
            body: "The cycle moves water between **stores** — oceans (97% of all water), ice caps and glaciers (2%), groundwater and surface water — through **fluxes**: evaporation, transpiration, condensation, precipitation, infiltration and runoff. The oceans dominate both storage and flux, supplying most atmospheric moisture.",
          },
          {
            heading: "Energy drivers",
            body: "Solar energy powers **evaporation** and **evapotranspiration**, converting liquid water to vapour. Latent heat release during **condensation** drives weather systems. **Gravity** pulls precipitation and runoff downhill. Human activity has altered fluxes through land-use change, groundwater abstraction and river regulation.",
          },
          {
            heading: "Freshwater distribution",
            body: "Only about **3% of water is fresh**, and two-thirds of that is locked in ice. The accessible supply — rivers, lakes and shallow groundwater — is under **1% of the total**, and its distribution is uneven: the Amazon basin alone carries ~15% of global river discharge while many arid regions have almost none.",
          },
        ],
        keyFormulas: [
          { name: "Water distribution", statement: "97% saline (oceans) : 2% frozen : <1% accessible fresh" },
          { name: "Cycle drivers", statement: "Solar energy (evaporation) + gravity (runoff)" },
          { name: "Freshwater share", statement: "~3% of all water; ~1% of surface water is usable" },
        ],
        workedExample: {
          problem: "Explain why freshwater is described as an unevenly distributed resource.",
          solution: "Only about 3% of Earth's water is fresh and most is frozen in ice sheets. Of the remainder, rivers, lakes and shallow groundwater supply drinking, irrigation and industry — but these are concentrated in humid mid-latitudes and tropical river basins, while arid and semi-arid regions hold little renewable supply, creating spatial scarcity.",
        },
      },
      questions: [
        {
          id: "geo-u1-hcq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process returns water vapour from plants to the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transpiration" },
              { id: "b", text: "Infiltration" },
              { id: "c", text: "Condensation" },
              { id: "d", text: "Runoff" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration", statement: "Loss of water vapour from plant leaves to the atmosphere." },
            ],
            steps: [
              { reasoning: "Transpiration is the plant component of evapotranspiration.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Transpiration",
            commonErrors: ["Confusing evapotranspiration with precipitation — one releases vapour, the other returns water."],
          },
        },
        {
          id: "geo-u1-hcq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe three stores of water in the hydrological cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrological stores", statement: "Oceans, ice caps/glaciers, groundwater, lakes, rivers, atmosphere, soil moisture and living organisms." },
            ],
            steps: [
              { reasoning: "Oceans: ~97% of all water, the largest store.", marks: 1, markCode: "M" },
              { reasoning: "Ice caps and glaciers: ~2%, mostly Antarctic and Greenland ice sheets.", marks: 1, markCode: "M" },
              { reasoning: "Freshwater stores: rivers, lakes and groundwater hold the accessible minority.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oceans, ice caps/glaciers, and freshwater stores (rivers, lakes, groundwater).",
            commonErrors: ["Listing fluxes (evaporation) as stores — stores hold water, fluxes move it."],
          },
        },
        {
          id: "geo-u1-hcq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how solar energy and gravity drive the hydrological cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cycle energy", statement: "Solar energy powers evaporation; latent heat release powers atmospheric motion; gravity drives precipitation and runoff." },
            ],
            steps: [
              { reasoning: "Solar radiation supplies the energy for evaporation and evapotranspiration.", marks: 1, markCode: "M" },
              { reasoning: "Condensation releases latent heat, energising storms and atmospheric circulation.", marks: 1, markCode: "M" },
              { reasoning: "Gravity pulls water back to the surface as precipitation and directs runoff downhill.", marks: 1, markCode: "M" },
              { reasoning: "Together they maintain a closed system in which water is continuously recycled.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solar energy lifts water into the atmosphere; gravity returns it via precipitation and runoff.",
            commonErrors: ["Saying gravity causes evaporation — the roles are reversed."],
          },
        },
        {
          id: "geo-u1-hcq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of global freshwater scarcity.",
          parts: [
            { label: "a", prompt: "Identify two natural causes of uneven water distribution.", marks: 2 },
            { label: "b", prompt: "Explain how human activity increases water demand and reduces supply.", marks: 3 },
            { label: "c", prompt: "Evaluate the impact of water scarcity on food production and human development.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water scarcity causes", statement: "Physical scarcity (arid climates, uneven distribution) plus human pressure (population, irrigation, pollution, virtual water trade)." },
            ],
            steps: [
              { part: "a", reasoning: "Uneven precipitation: humid tropics/subtropics vs arid belts (e.g. Sahara, interior Australia).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accessibility: most fresh water is ice-locked or deep groundwater; rivers concentrate in a few basins.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Demand: population growth and rising living standards increase domestic and industrial use.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Irrigation for agriculture consumes ~70% of withdrawals; inefficient systems waste water.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pollution and over-abstraction degrade supply; virtual water exports transfer scarcity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Scarcity cuts crop yields, raises food prices and drives rural-urban migration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs impacts across regions — severe in arid LIDCs, managed in high-income states.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on severity and uneven human development consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Uneven precipitation and accessibility. (b) Population, irrigation, pollution, virtual water. (c) Yield loss, food insecurity, uneven development impact.",
            commonErrors: ["Confusing water scarcity with drought — scarcity is structural, drought is a temporary event."],
          },
        },
        {
          id: "geo-u1-hcq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which store contains about 97% of all water on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Groundwater" },
              { id: "b", text: "Ice caps and glaciers" },
              { id: "c", text: "The oceans" },
              { id: "d", text: "Rivers and lakes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water distribution", statement: "97% of Earth's water is saline in the oceans; ice holds ~2%; accessible fresh water is under 1%." },
            ],
            steps: [
              { reasoning: "The oceans are by far the largest store of water.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The oceans",
            commonErrors: ["Choosing ice caps — they hold ~2%, far less than the oceans."],
          },
        },
        {
          id: "geo-u1-hcq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evapotranspiration is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The combined loss of water vapour through evaporation and plant transpiration" },
              { id: "b", text: "The movement of water through pores in rock" },
              { id: "c", text: "Surface runoff flowing into rivers" },
              { id: "d", text: "Water falling to the surface as rain or snow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evapotranspiration", statement: "The combined process of evaporation from surfaces and transpiration from plants releasing water vapour to the atmosphere." },
            ],
            steps: [
              { reasoning: "Evapotranspiration merges evaporation and transpiration into one flux.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Combined evaporation and plant transpiration",
            commonErrors: ["Confusing evapotranspiration with precipitation — one releases vapour, the other returns water."],
          },
        },
        {
          id: "geo-u1-hcq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which flux of the hydrological cycle is powered mainly by solar energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Runoff" },
              { id: "c", text: "Infiltration" },
              { id: "d", text: "Precipitation" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cycle energy", statement: "Solar energy powers evaporation and evapotranspiration; gravity drives precipitation and runoff." },
            ],
            steps: [
              { reasoning: "Solar radiation supplies the latent heat needed to turn liquid water into vapour.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Evaporation",
            commonErrors: ["Choosing runoff — runoff is driven by gravity, not solar energy."],
          },
        },
        {
          id: "geo-u1-hcq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what percentage of all water on Earth is fresh?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 3%" },
              { id: "b", text: "About 30%" },
              { id: "c", text: "About 10%" },
              { id: "d", text: "About 25%" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Freshwater share", statement: "Only ~3% of Earth's water is fresh, and two-thirds of that is frozen in ice." },
            ],
            steps: [
              { reasoning: "About 97% is saline, leaving roughly 3% fresh.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** About 3%",
            commonErrors: ["Assuming freshwater is common — it is a tiny minority of total water."],
          },
        },
        {
          id: "geo-u1-hcq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The Amazon basin carries roughly what share of global river discharge to the oceans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 50%" },
              { id: "b", text: "About 15%" },
              { id: "c", text: "About 35%" },
              { id: "d", text: "About 5%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "River discharge distribution", statement: "A few large tropical basins — especially the Amazon — dominate global river discharge." },
            ],
            steps: [
              { reasoning: "The Amazon alone discharges roughly 15% of the water entering the oceans.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** About 15%",
            commonErrors: ["Underestimating the dominance of a single basin in global discharge."],
          },
        },
        {
          id: "geo-u1-hcq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "About 3% of Earth's water is fresh and about 2% of all water is locked in ice. Calculate the approximate percentage of all water that is unfrozen fresh water.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, tolerance: 0.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Freshwater availability", statement: "Unfrozen fresh water ≈ 3% fresh − 2% frozen ≈ 1% of all water." },
            ],
            steps: [
              { reasoning: "Subtract the ice-locked share from the total fresh share.", working: "3 - 2 = 1", marks: 1, markCode: "M" },
              { reasoning: "Unfrozen fresh water is about 1% of all water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About **$1\\%$** of all water is unfrozen fresh water.",
            commonErrors: ["Answering 3% — that includes the ice-locked portion."],
          },
        },
        {
          id: "geo-u1-hcq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A catchment receives $800 \\text{ mm}$ of precipitation in a year and $500 \\text{ mm}$ leaves as runoff. Calculate the runoff coefficient.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.625, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Runoff coefficient", statement: "$C = \\dfrac{\\text{runoff}}{\\text{precipitation}}$ — the fraction of rainfall that becomes runoff." },
            ],
            steps: [
              { reasoning: "Runoff coefficient equals runoff divided by precipitation.", working: "500 \\div 800 = 0.625", marks: 1, markCode: "M" },
              { reasoning: "The coefficient is dimensionless; 0.625 means 62.5% of rain runs off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Runoff coefficient $= 0.625$",
            commonErrors: ["Inverting the ratio — precipitation divided by runoff gives 1.6, which is impossible for a coefficient."],
          },
        },
        {
          id: "geo-u1-hcq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A lake has a surface area of $250 \\text{ km}^2$ and an average depth of $40 \\text{ m}$. Calculate its volume in cubic kilometres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, tolerance: 0.01, unit: "km^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lake volume", statement: "$V = \\text{area} \\times \\text{mean depth}$ — units must be consistent." },
            ],
            steps: [
              { reasoning: "Convert the depth from metres to kilometres for consistent units.", working: "40 \\div 1000 = 0.04 \\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Multiply area by mean depth.", working: "250 \\times 0.04 = 10", marks: 1, markCode: "M" },
              { reasoning: "The lake volume is $10 \\text{ km}^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10 \\text{ km}^3$",
            commonErrors: ["Forgetting the unit conversion — $250 \\times 40$ gives square-metre-kilometre mix-ups."],
          },
        },
        {
          id: "geo-u1-hcq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country of 2 million people has renewable freshwater resources of $400 \\text{ million m}^3$ per year. Calculate the per capita annual availability in cubic metres and comment on its significance.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, tolerance: 1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Per capita water availability", statement: "$\\text{availability} = \\dfrac{\\text{renewable resource}}{\\text{population}}$" },
              { kind: "context", name: "Water stress threshold", statement: "Below roughly $1{,}700 \\text{ m}^3$ per person per year a country is considered water-stressed." },
            ],
            steps: [
              { reasoning: "Divide total renewable resources by population.", working: "400{,}000{,}000 \\div 2{,}000{,}000", marks: 1, markCode: "M" },
              { reasoning: "This gives $200 \\text{ m}^3$ per person per year.", marks: 1, markCode: "M" },
              { reasoning: "The figure is far below the $\\sim 1{,}700 \\text{ m}^3$ water-stress benchmark.", marks: 1, markCode: "R" },
              { reasoning: "The country faces severe physical water scarcity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200 \\text{ m}^3$ per person per year — severe water stress.",
            commonErrors: ["Dividing population by resources instead of resources by population."],
          },
        },
        {
          id: "geo-u1-hcq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A snowmelt-fed river has a mean monthly discharge of $120 \\text{ m}^3/\\text{s}$ in winter and $480 \\text{ m}^3/\\text{s}$ in spring. Calculate the mean discharge over the two seasons.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300, tolerance: 0.1, unit: "m^3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean discharge", statement: "$\\bar{Q} = \\dfrac{Q_1 + Q_2}{2}$ for two equal periods." },
            ],
            steps: [
              { reasoning: "Average the two seasonal discharges.", working: "(120 + 480) \\div 2 = 300", marks: 1, markCode: "M" },
              { reasoning: "Mean discharge is $300 \\text{ m}^3/\\text{s}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300 \\text{ m}^3/\\text{s}$",
            commonErrors: ["Averaging incorrectly by adding without dividing."],
          },
        },
        {
          id: "geo-u1-hcq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A drainage basin of $5{,}000 \\text{ km}^2$ receives $600 \\text{ mm}$ of rainfall in a year, and $80\\%$ of this becomes runoff. Calculate the annual runoff volume in cubic kilometres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.4, tolerance: 0.01, unit: "km^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rainfall volume", statement: "$V = \\text{area} \\times \\text{depth}$, with $1 \\text{ mm}$ over $1 \\text{ km}^2 = 1{,}000 \\text{ m}^3$" },
            ],
            steps: [
              { reasoning: "Convert rainfall depth to kilometres.", working: "600 \\text{ mm} = 0.0006 \\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Total rainfall volume over the basin.", working: "5{,}000 \\times 0.0006 = 3 \\text{ km}^3", marks: 1, markCode: "M" },
              { reasoning: "Take 80% as runoff.", working: "0.8 \\times 3 = 2.4", marks: 1, markCode: "M" },
              { reasoning: "Annual runoff volume is $2.4 \\text{ km}^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.4 \\text{ km}^3$ per year",
            commonErrors: ["Forgetting to multiply by 80% or mixing millimetres with kilometres."],
          },
        },
        {
          id: "geo-u1-hcq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how human activities have altered the fluxes of the hydrological cycle.",
          parts: [
            { label: "a", prompt: "Identify two human activities that alter the water cycle.", marks: 2 },
            { label: "b", prompt: "Explain the mechanism by which each alters a flux or store.", marks: 3 },
            { label: "c", prompt: "Evaluate whether human alteration has made global water supply more or less secure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human alteration", statement: "Deforestation, urbanisation, groundwater abstraction, dams and irrigation redistribute water between stores and change flux magnitudes." },
            ],
            steps: [
              { part: "a", reasoning: "Activity 1: e.g. deforestation, urbanisation, dam building or groundwater abstraction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Activity 2: a second distinct human activity affecting the cycle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mechanism 1: reduced evapotranspiration/groundwater recharge or altered runoff timing (e.g. deforestation raises runoff, lowers ET).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanism 2: abstraction depletes groundwater stores; dams trap sediment and alter downstream flows.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanisms correctly linked to named fluxes or stores.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Assessment: storage infrastructure can improve reliability in some regions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Counterpoint: depletion, pollution and reduced ecosystem flows make supply less secure overall for many regions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on net effect for water security.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two named activities. (b) Mechanisms for each. (c) Weighed judgement on water security.",
            commonErrors: ["Describing natural cycle processes instead of human alterations."],
          },
        },
      ],
    },
    {
      id: "geo-u1-water-scarcity",
      title: "Water scarcity and its management",
      skill: "Distinguish physical and economic water scarcity and evaluate strategies for managing demand and supply.",
      lesson: {
        sections: [
          {
            heading: "Types of scarcity",
            body: "**Physical scarcity** occurs where demand exceeds available supply — common in arid regions such as the Middle East and North Africa. **Economic scarcity** occurs where infrastructure and finance are lacking, even if water exists — common in parts of sub-Saharan Africa. Many countries face both simultaneously.",
          },
          {
            heading: "Supply-side strategies",
            body: "Dams and reservoirs store water for dry seasons (e.g. Three Gorges Dam, China). **Desalination** converts seawater to fresh water but is energy-intensive — common in the Gulf states. **Groundwater abstraction** via boreholes helps but can cause depletion and saline intrusion in coastal aquifers.",
          },
          {
            heading: "Demand-side and institutional strategies",
            body: "Irrigation efficiency (drip systems), water pricing, wastewater recycling and public education reduce demand. **Transboundary cooperation** through river basin organisations manages shared rivers — e.g. the Nile Basin Initiative among ten riparian states.",
          },
        ],
        keyFormulas: [
          { name: "Physical scarcity", statement: "Demand > renewable supply (arid climates)" },
          { name: "Economic scarcity", statement: "Supply exists but access infrastructure/finance lacking" },
          { name: "Desalination trade-off", statement: "Abundant supply, high energy cost" },
        ],
        workedExample: {
          problem: "A coastal city faces economic water scarcity. Suggest two sustainable strategies and one limitation.",
          solution: "Strategies: invest in piped supply and wastewater recycling to raise access; use drip irrigation to cut agricultural demand. Limitation: desalination could add supply but raises energy costs and carbon emissions; alternatively aquifer overuse risks saline intrusion.",
        },
      },
      questions: [
        {
          id: "geo-u1-fsq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Economic water scarcity is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollution of all rivers in a region" },
              { id: "b", text: "Lack of infrastructure and finance to access available water" },
              { id: "c", text: "A drought in an arid climate" },
              { id: "d", text: "Over-abstraction of groundwater" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Economic scarcity", statement: "Water exists but people cannot access it because of missing infrastructure, technology or finance." },
            ],
            steps: [
              { reasoning: "Economic scarcity concerns access failure, not physical absence of water.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lack of access infrastructure and finance",
            commonErrors: ["Confusing economic scarcity with physical scarcity — physical means supply itself is insufficient."],
          },
        },
        {
          id: "geo-u1-fsq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two supply-side strategies for managing water scarcity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Supply strategies", statement: "Dams/reservoirs, desalination, groundwater abstraction, inter-basin transfer." },
            ],
            steps: [
              { reasoning: "Dams and reservoirs store seasonal surplus for dry periods (e.g. Three Gorges Dam).", marks: 1, markCode: "M" },
              { reasoning: "Desalination provides unlimited coastal supply at high energy cost (Gulf states).", marks: 1, markCode: "M" },
              { reasoning: "Groundwater abstraction via boreholes supplements surface water but risks depletion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dams/reservoirs and desalination (or groundwater abstraction / inter-basin transfer).",
            commonErrors: ["Describing demand-side measures like pricing as supply-side."],
          },
        },
        {
          id: "geo-u1-fsq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why managing shared (transboundary) rivers is politically difficult.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transboundary water", statement: "Upstream states control flow; downstream states depend on it — conflict over allocation is common." },
            ],
            steps: [
              { reasoning: "Geographic asymmetry: upstream riparians can dam or divert water, affecting downstream neighbours.", marks: 1, markCode: "M" },
              { reasoning: "Competing uses: irrigation, hydropower and domestic supply create conflicting national priorities.", marks: 1, markCode: "M" },
              { reasoning: "No single authority: cooperation depends on treaties (e.g. Nile Basin Initiative) which are hard to enforce.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: water scarcity intensifies upstream-downstream power imbalance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Upstream control, competing demands and weak enforcement make allocation contested.",
            commonErrors: ["Ignoring the power asymmetry between upstream and downstream states."],
          },
        },
        {
          id: "geo-u1-fsq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine strategies for managing water scarcity in a named region.",
          parts: [
            { label: "a", prompt: "Identify the type of water scarcity in your chosen region.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies used or proposed there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water management evaluation", statement: "Strategies must match scarcity type; effectiveness judged on sustainability, cost and equity." },
            ],
            steps: [
              { part: "a", reasoning: "Correctly identifies physical or economic scarcity with a named place (e.g. Saudi Arabia, Sahel, Cape Town).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear statement of scarcity type and location.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: supply-side (dam, desalination, aquifer) or demand-side (pricing, drip irrigation).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: a second distinct strategy with place-specific detail.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both strategies explained in relation to the region's scarcity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluates at least one strength (e.g. reliability, cost savings).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluates a limitation (cost, energy use, equity, environmental damage).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + scarcity type. (b) Two strategies with detail. (c) Balanced judgement on effectiveness.",
            commonErrors: ["Generic strategies without place-specific evidence."],
          },
        },
        {
          id: "geo-u1-fsq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Physical water scarcity occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand for water exceeds the renewable supply available" },
              { id: "b", text: "Water exists but infrastructure is missing to reach it" },
              { id: "c", text: "A region experiences a single dry year" },
              { id: "d", text: "Rivers are polluted by industrial waste" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical scarcity", statement: "Demand exceeds the renewable freshwater supply, typical of arid climates." },
            ],
            steps: [
              { reasoning: "Physical scarcity is a supply shortfall relative to demand, not an access or pollution problem.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demand exceeds renewable supply",
            commonErrors: ["Confusing physical scarcity with economic scarcity — economic means water exists but cannot be accessed."],
          },
        },
        {
          id: "geo-u1-fsq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is a demand-side water management strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constructing a desalination plant" },
              { id: "b", text: "Building a large reservoir" },
              { id: "c", text: "Drilling new boreholes" },
              { id: "d", text: "Pricing water to encourage conservation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Demand-side management", statement: "Measures that reduce water consumption: pricing, efficiency, education, recycling." },
            ],
            steps: [
              { reasoning: "Pricing reduces demand by making users pay for consumption; the others increase supply.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pricing water to encourage conservation",
            commonErrors: ["Choosing dams or desalination — those are supply-side strategies."],
          },
        },
        {
          id: "geo-u1-fsq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Desalination of seawater is most widely used in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Amazon basin" },
              { id: "b", text: "Northern Europe" },
              { id: "c", text: "The Sahel" },
              { id: "d", text: "The Gulf states" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Desalination geography", statement: "Energy-rich, water-scarce Gulf states rely heavily on desalination." },
            ],
            steps: [
              { reasoning: "The Gulf states combine extreme aridity with the wealth to fund energy-intensive desalination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The Gulf states",
            commonErrors: ["Choosing the Sahel — it has scarcity but lacks the capital and energy for large-scale desalination."],
          },
        },
        {
          id: "geo-u1-fsq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Virtual water is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of freshwater used to produce a traded good" },
              { id: "b", text: "Water stored in underground aquifers" },
              { id: "c", text: "Evaporation from irrigated fields" },
              { id: "d", text: "Water lost through leaking pipes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Virtual water", statement: "The hidden volume of freshwater embedded in the production of a traded product, e.g. ~15,000 litres per kg of beef." },
            ],
            steps: [
              { reasoning: "Virtual water tracks water use through trade in goods, not direct water flows.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Water used to produce a traded good",
            commonErrors: ["Confusing virtual water with groundwater or leakage losses."],
          },
        },
        {
          id: "geo-u1-fsq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which factor most increases conflict over shared (transboundary) rivers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Upstream states controlling flow that downstream states depend on" },
              { id: "b", text: "Strong enforcement of international water treaties" },
              { id: "c", text: "Uniform rainfall across the whole basin" },
              { id: "d", text: "Equal populations in all riparian states" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transboundary water", statement: "Upstream riparians control flow; downstream riparians depend on it — a structural power asymmetry." },
            ],
            steps: [
              { reasoning: "The upstream-downstream power imbalance is the core driver of transboundary conflict.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Upstream control of flow depended on downstream",
            commonErrors: ["Focusing on rainfall patterns rather than the political geography of control."],
          },
        },
        {
          id: "geo-u1-fsq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A country with 50 million people has renewable freshwater resources of $100 \\text{ km}^3$ per year. Calculate the per capita annual availability in cubic metres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2000, tolerance: 1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Per capita water availability", statement: "$\\text{availability} = \\dfrac{\\text{renewable resource}}{\\text{population}}$, with $1 \\text{ km}^3 = 10^9 \\text{ m}^3$." },
            ],
            steps: [
              { reasoning: "Convert $100 \\text{ km}^3$ to cubic metres and divide by population.", working: "(100 \\times 10^9) \\div (50 \\times 10^6) = 2{,}000", marks: 1, markCode: "M" },
              { reasoning: "Per capita availability is $2{,}000 \\text{ m}^3$ per year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2{,}000 \\text{ m}^3$ per person per year",
            commonErrors: ["Forgetting the $\\text{km}^3$ to $\\text{m}^3$ conversion factor of $10^9$."],
          },
        },
        {
          id: "geo-u1-fsq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Flood irrigation uses $1{,}000 \\text{ litres}$ of water per kilogram of wheat while drip irrigation uses $600 \\text{ litres}$. Calculate the percentage saving achieved by drip irrigation.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, tolerance: 0.1, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage saving", statement: "$\\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Saving is the reduction divided by the original use.", working: "(1000 - 600) \\div 1000 \\times 100 = 40", marks: 1, markCode: "M" },
              { reasoning: "Drip irrigation saves $40\\%$ of water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$ saving",
            commonErrors: ["Dividing by the new value instead of the original — the saving is relative to flood irrigation."],
          },
        },
        {
          id: "geo-u1-fsq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A reservoir stores $1{,}200$ million $\\text{m}^3$ of water and releases $300$ million $\\text{m}^3$ per year with no inflow. Calculate how many years the supply will last.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, tolerance: 0.01, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Storage duration", statement: "$\\text{years} = \\dfrac{\\text{storage}}{\\text{annual release}}$" },
            ],
            steps: [
              { reasoning: "Divide stored volume by annual release rate.", working: "1{,}200 \\div 300 = 4", marks: 1, markCode: "M" },
              { reasoning: "The supply lasts $4$ years.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ years",
            commonErrors: ["Mixing million $\\text{m}^3$ with cubic kilometres — keep units consistent."],
          },
        },
        {
          id: "geo-u1-fsq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A semi-arid basin of $20{,}000 \\text{ km}^2$ receives $400 \\text{ mm}$ of rain per year. Calculate the total annual rainfall volume over the basin in cubic kilometres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, tolerance: 0.01, unit: "km^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rainfall volume", statement: "$V = \\text{area} \\times \\text{depth}$; $1 \\text{ mm}$ over $1 \\text{ km}^2 = 1{,}000 \\text{ m}^3$." },
            ],
            steps: [
              { reasoning: "Convert the rainfall depth to kilometres.", working: "400 \\text{ mm} = 0.0004 \\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Multiply basin area by depth.", working: "20{,}000 \\times 0.0004 = 8", marks: 1, markCode: "M" },
              { reasoning: "Total annual rainfall volume is $8 \\text{ km}^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8 \\text{ km}^3$ per year",
            commonErrors: ["Using $400$ directly as kilometres — the depth must be in km."],
          },
        },
        {
          id: "geo-u1-fsq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "When the price of water rises by $25\\%$, demand falls from 100 to 85 units. Calculate the price elasticity of demand and state what it indicates.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.6, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Price elasticity of demand", statement: "$PED = \\dfrac{\\%\\Delta Q}{\\%\\Delta P}$; $|PED| < 1$ is inelastic." },
            ],
            steps: [
              { reasoning: "Percentage change in quantity is $15\\%$; price change is $25\\%$.", working: "(100 - 85) \\div 100 \\times 100 = 15", marks: 1, markCode: "M" },
              { reasoning: "Divide the percentage changes.", working: "15 \\div 25 = 0.6", marks: 1, markCode: "M" },
              { reasoning: "$PED = 0.6 < 1$ — demand is price inelastic, so price rises reduce consumption only modestly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$PED = 0.6$ — demand is inelastic",
            commonErrors: ["Inverting the ratio — elasticity is % change in quantity over % change in price."],
          },
        },
        {
          id: "geo-u1-fsq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A desalination plant produces $300{,}000 \\text{ m}^3$ of fresh water per day using $3.5 \\text{ kWh}$ of energy per cubic metre. Calculate the plant's daily energy use in megawatt-hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1050, tolerance: 1, unit: "MWh" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy use", statement: "$E = \\text{volume} \\times \\text{energy intensity}$; $1 \\text{ MWh} = 1{,}000 \\text{ kWh}$." },
            ],
            steps: [
              { reasoning: "Multiply daily output by the energy intensity.", working: "300{,}000 \\times 3.5 = 1{,}050{,}000 \\text{ kWh}", marks: 1, markCode: "M" },
              { reasoning: "Convert kilowatt-hours to megawatt-hours.", working: "1{,}050{,}000 \\div 1{,}000 = 1{,}050", marks: 1, markCode: "M" },
              { reasoning: "The plant uses about $1{,}050 \\text{ MWh}$ per day.", marks: 1, markCode: "A" },
              { reasoning: "This high energy demand explains why desalination is costly and carbon-intensive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$1{,}050 \\text{ MWh}$ per day",
            commonErrors: ["Forgetting the $\\text{kWh}$ to $\\text{MWh}$ conversion (divide by 1,000)."],
          },
        },
        {
          id: "geo-u1-fsq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the effectiveness of demand-side strategies for managing water scarcity in a named region.",
          parts: [
            { label: "a", prompt: "Identify a named region facing water scarcity and two demand-side strategies used or proposed there.", marks: 2 },
            { label: "b", prompt: "Explain how each strategy reduces water demand.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness and limitations of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Demand management", statement: "Pricing, drip irrigation, efficiency standards and public education cut consumption; effectiveness depends on enforcement and affordability." },
            ],
            steps: [
              { part: "a", reasoning: "Named region with water scarcity (e.g. Cape Town, California, Jordan) correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two demand-side strategies named for that place.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1 explained: e.g. tiered pricing raises the cost of excess use and rewards conservation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2 explained: e.g. drip irrigation or leak repair reduces losses in supply or use.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanisms clearly linked to reduced demand.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: demand measures are cheap relative to new supply infrastructure and act quickly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: regressive pricing, behavioural resistance or infrastructure costs reduce effectiveness.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on effectiveness for the named region.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + two demand-side strategies. (b) Mechanisms. (c) Balanced evaluation.",
            commonErrors: ["Describing supply-side projects (dams, desalination) instead of demand-side strategies."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "geo-u3-lesson-3-2",
  code: "3-2",
  title: "Atmospheric and Climate-Related Hazards",
  goal: "I CAN describe storms, droughts and floods as atmospheric hazards and evaluate climate change's role in increasing hazard risk.",
  standards: ["Paper 1", "Paper 2", "Hazards"],
  vocabulary: [
    { term: "Tropical cyclone", definition: "An intense rotating storm system forming over warm tropical oceans — hurricanes, typhoons, cyclones." },
    { term: "Storm surge", definition: "An abnormal rise in sea level driven by storm winds and low pressure, causing coastal flooding." },
    { term: "Drought", definition: "A prolonged period of abnormally low precipitation causing water shortage and crop failure." },
    { term: "Flash flood", definition: "A rapid flood from intense rain in a short time, often in urban or steep catchments." },
    { term: "Heatwave", definition: "An extended period of unusually high temperatures, increasingly common with climate change." },
    { term: "Climate change", definition: "Long-term shifts in climate patterns, intensifying many atmospheric hazards." },
  ],
  concepts: [
    {
      id: "geo-u3-storms-floods",
      title: "Storms and floods",
      skill: "Describe tropical cyclones, storm surges and floods as atmospheric hazards and their impacts.",
      lesson: {
        sections: [
          {
            heading: "Tropical cyclones",
            body: "Cyclones form over warm ocean water (>26.5°C) where evaporation fuels convection. They bring destructive winds, torrential rain and **storm surges** — the deadliest hazard, as in Cyclone Nargis (Myanmar 2008, ~138,000 deaths) and Hurricane Katrina (2005). Cyclone tracks follow steering currents toward landfall.",
          },
          {
            heading: "Floods and flash floods",
            body: "River floods result from prolonged rain or snowmelt exceeding channel capacity. **Flash floods** from intense localised storms strike with little warning — especially dangerous in urban areas with impermeable surfaces. Coastal flooding combines storm surge with high tides, as in the 1953 North Sea flood.",
          },
          {
            heading: "Impacts and vulnerability",
            body: "Atmospheric hazards kill and displace millions, especially in low-lying coastal and delta regions of LICs. Storm surges devastate densely populated deltas (Ganges-Brahmaputra, Mekong). Vulnerability is highest where warning systems, infrastructure and insurance are weakest — explaining why similar storms kill far more in Bangladesh than in the USA.",
          },
        ],
        keyFormulas: [
          { name: "Cyclone fuel", statement: "Warm ocean water >26.5°C powers evaporation and convection" },
          { name: "Storm surge", statement: "Wind + low pressure drive sea level rise above normal tide" },
          { name: "Flash flood", statement: "Intense rain + impermeable surfaces + steep catchment = rapid flooding" },
        ],
        workedExample: {
          problem: "Explain why storm surges are the deadliest cyclone hazard.",
          solution: "Storm surges push a wall of seawater inland, inundating low-lying coastal and delta areas where most people live. Unlike wind damage which is visible and localised, surges flood vast areas quickly, contaminate freshwater and collapse buildings — as in Nargis 2008 where most deaths were from drowning.",
        },
      },
      questions: [
        {
          id: "geo-u3-stq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Tropical cyclones require which condition to form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cold ocean water below 10°C" },
              { id: "b", text: "Warm ocean water above 26.5°C" },
              { id: "c", text: "High altitude and low pressure" },
              { id: "d", text: "Proximity to the equator only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cyclone formation", statement: "Tropical cyclones need sea surface temperatures above ~26.5°C to fuel convection." },
            ],
            steps: [
              { reasoning: "Warm ocean water provides the latent heat that powers cyclones.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Warm water >26.5°C",
            commonErrors: ["Thinking cyclones form over cold water — they need tropical warmth."],
          },
        },
        {
          id: "geo-u3-stq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two impacts of tropical cyclones on coastal communities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cyclone impacts", statement: "Storm surge flooding, wind damage, torrential rain, infrastructure destruction, displacement." },
            ],
            steps: [
              { reasoning: "Storm surge inundates coastal land, destroying homes and contaminating freshwater.", marks: 1, markCode: "M" },
              { reasoning: "Extreme winds damage or destroy buildings, power lines and crops.", marks: 1, markCode: "M" },
              { reasoning: "Heavy rain causes flooding and landslides; communities are displaced and livelihoods lost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Storm surge flooding, wind damage, flooding/landslides, displacement.",
            commonErrors: ["Listing only wind damage — storm surge is often deadlier."],
          },
        },
        {
          id: "geo-u3-stq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why flash floods are particularly dangerous in urban areas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Urban flash floods", statement: "Impermeable surfaces + storm drains + dense population = rapid, deadly flooding." },
            ],
            steps: [
              { reasoning: "Roads and buildings prevent infiltration, converting rain directly to runoff.", marks: 1, markCode: "M" },
              { reasoning: "Drainage systems can be overwhelmed, causing rapid water accumulation in streets and basements.", marks: 1, markCode: "M" },
              { reasoning: "Dense population means many people are exposed; underground spaces trap victims.", marks: 1, markCode: "R" },
              { reasoning: "Warning time is minimal — floods arrive within minutes of intense rain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Impermeable surfaces, overwhelmed drains and dense exposure make urban flash floods rapid and deadly.",
            commonErrors: ["Treating urban flash floods like slow river floods — speed is the danger."],
          },
        },
        {
          id: "geo-u3-stq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impacts of a named tropical cyclone or flood event.",
          parts: [
            { label: "a", prompt: "Identify the named event and its meteorological cause.", marks: 2 },
            { label: "b", prompt: "Explain the primary and secondary impacts.", marks: 3 },
            { label: "c", prompt: "Evaluate the response and recovery.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hazard case study", statement: "Atmospheric hazards combine meteorological forcing with human vulnerability to determine impact." },
            ],
            steps: [
              { part: "a", reasoning: "Named event (e.g. Katrina, Nargis, Typhoon Haiyan) with correct cause.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate date, location and meteorological mechanism.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Primary impact: wind/storm surge/flood damage with figures.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Secondary impact: disease, displacement, economic loss, infrastructure failure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts accurately attributed to the event.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Response: early warning, evacuation, aid delivery.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: effectiveness, failures, long-term recovery challenges.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named event + cause. (b) Primary + secondary impacts. (c) Response evaluated.",
            commonErrors: ["Describing impacts without distinguishing primary from secondary."],
          },
        },
        {
          id: "geo-u3-stq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A storm surge is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A wall of water driven inland by storm winds and low pressure" },
              { id: "b", text: "A tidal wave generated by an undersea earthquake" },
              { id: "c", text: "A sudden rise in river level from snowmelt" },
              { id: "d", text: "A column of rain produced by a thunderstorm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Storm surge", statement: "An abnormal rise in sea level driven by cyclone winds and low pressure, causing coastal flooding." },
            ],
            steps: [
              { reasoning: "Storm surge is wind- and pressure-driven sea-level rise, not a tsunami.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Wind- and pressure-driven rise in sea level",
            commonErrors: ["Confusing storm surge with tsunami — surge is meteorological, tsunami is seismic."],
          },
        },
        {
          id: "geo-u3-stq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the minimum sea surface temperature in °C generally needed for tropical cyclone formation; (b) the year of Cyclone Nargis; (c) the year of Hurricane Katrina.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Minimum SST (°C)", answer: 26.5, tolerance: 0.3, unit: "°C" },
              { label: "(b) Nargis year", answer: 2008 },
              { label: "(c) Katrina year", answer: 2005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cyclone formation and events", statement: "Cyclones need sea surface temperatures above ~26.5 °C; Nargis struck Myanmar in 2008 and Katrina the USA in 2005." },
            ],
            steps: [
              { reasoning: "The threshold is about 26.5 °C for sustained convection.", working: "26.5^{\\circ}\\text{C}", marks: 1, markCode: "A" },
              { reasoning: "Nargis struck Myanmar in May 2008.", working: "2008", marks: 1, markCode: "A" },
              { reasoning: "Katrina struck the US Gulf Coast in August 2005.", working: "2005", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $26.5^{\\circ}\\text{C}$ (b) $2008$ (c) $2005$",
            commonErrors: ["Quoting 25 °C or 30 °C instead of the ~26.5 °C threshold."],
          },
        },
        {
          id: "geo-u3-stq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The deadliest hazard associated with tropical cyclones is usually:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the high winds at the storm's centre" },
              { id: "b", text: "the storm surge" },
              { id: "c", text: "lightning strikes" },
              { id: "d", text: "tornadoes spawned offshore" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Storm surge lethality", statement: "Storm surges flood vast low-lying areas quickly, contaminating water and collapsing buildings — most cyclone deaths are drownings." },
            ],
            steps: [
              { reasoning: "Surges inundate densely populated deltas faster than people can escape.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The storm surge",
            commonErrors: ["Assuming wind is the deadliest hazard — surge flooding kills more people."],
          },
        },
        {
          id: "geo-u3-stq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the approximate number of deaths caused by Cyclone Nargis; (b) the year of the North Sea flood that prompted the Delta Works; (c) the number of main hazards produced by a tropical cyclone (winds, rain, storm surge).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Nargis deaths", answer: 138000, tolerance: 20000 },
              { label: "(b) North Sea flood year", answer: 1953 },
              { label: "(c) Main cyclone hazards", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Flood events and cyclone hazards", statement: "Nargis killed ~138,000 in 2008; the 1953 North Sea flood reshaped Dutch coastal management." },
            ],
            steps: [
              { reasoning: "Nargis caused approximately 138,000 deaths.", working: "\\approx 138{,}000", marks: 1, markCode: "A" },
              { reasoning: "The North Sea flood occurred in February 1953.", working: "1953", marks: 1, markCode: "A" },
              { reasoning: "Winds, torrential rain and storm surge give three main hazards.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 138{,}000$ (b) $1953$ (c) $3$",
            commonErrors: ["Giving the year of the Delta Works completion instead of the 1953 flood."],
          },
        },
        {
          id: "geo-u3-stq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Flash floods are particularly dangerous in urban areas mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "impermeable surfaces rapidly convert rain into runoff that overwhelms drainage" },
              { id: "b", text: "cities are always built on steep mountains" },
              { id: "c", text: "urban areas have no rainfall" },
              { id: "d", text: "rivers flow faster through cities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Urban flash flooding", statement: "Impermeable surfaces prevent infiltration, producing rapid runoff that exceeds drainage capacity within minutes." },
            ],
            steps: [
              { reasoning: "Rain on roads and roofs becomes immediate runoff, faster than drains can cope.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Impermeable surfaces → rapid runoff",
            commonErrors: ["Treating urban flash floods like slow river floods — speed is the danger."],
          },
        },
        {
          id: "geo-u3-stq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Give approximate figures: (a) the number of deaths caused by Cyclone Nargis in Myanmar; (b) the year of Hurricane Katrina.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Nargis deaths", answer: 138000, tolerance: 20000 },
              { label: "(b) Katrina year", answer: 2005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cyclone death tolls", statement: "Nargis (~138,000 deaths, 2008) was far deadlier than Katrina (~1,800 deaths, 2005) due to vulnerability differences." },
            ],
            steps: [
              { reasoning: "Nargis killed approximately 138,000 people.", working: "\\approx 138{,}000", marks: 1, markCode: "A" },
              { reasoning: "Katrina struck in August 2005.", working: "2005", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 138{,}000$ (b) $2005$",
            commonErrors: ["Swapping the two events' death tolls or dates."],
          },
        },
        {
          id: "geo-u3-stq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Similar storms kill far more people in Bangladesh than in the USA mainly because Bangladesh has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "stronger buildings and better warning systems" },
              { id: "b", text: "greater vulnerability — weaker infrastructure, denser low-lying exposure and less protection" },
              { id: "c", text: "more frequent but weaker storms" },
              { id: "d", text: "no coastal population at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vulnerability and cyclone risk", statement: "Risk = hazard × exposure × vulnerability; delta regions with weak infrastructure suffer far higher losses." },
            ],
            steps: [
              { reasoning: "Higher vulnerability and exposure in low-lying deltas raise losses despite similar hazards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Greater vulnerability and exposure",
            commonErrors: ["Claiming the storms themselves are stronger — hazard strength is similar; vulnerability differs."],
          },
        },
        {
          id: "geo-u3-stq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the minimum sea surface temperature in °C for tropical cyclone formation; (b) the year of the North Sea flood; (c) the approximate number of deaths caused by Cyclone Nargis.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) SST threshold (°C)", answer: 26.5, tolerance: 0.3, unit: "°C" },
              { label: "(b) North Sea flood year", answer: 1953 },
              { label: "(c) Nargis deaths", answer: 138000, tolerance: 20000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cyclone thresholds and floods", statement: "Cyclones require SST > ~26.5 °C; the 1953 North Sea flood killed over 1,800 in the Netherlands and UK." },
            ],
            steps: [
              { reasoning: "The SST threshold is about 26.5 °C.", working: "26.5^{\\circ}\\text{C}", marks: 1, markCode: "A" },
              { reasoning: "The North Sea flood occurred in 1953.", working: "1953", marks: 1, markCode: "A" },
              { reasoning: "Nargis killed approximately 138,000 people.", working: "\\approx 138{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $26.5^{\\circ}\\text{C}$ (b) $1953$ (c) $\\approx 138{,}000$",
            commonErrors: ["Using 25 °C or forgetting the unit of the temperature answer."],
          },
        },
        {
          id: "geo-u3-stq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine strategies for managing coastal storm surge risk.",
          parts: [
            { label: "a", prompt: "Identify two strategies used to manage storm surge risk.", marks: 2 },
            { label: "b", prompt: "Explain how each strategy reduces surge impacts.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of surge management for a named coast.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Storm surge management", statement: "Engineered barriers, mangrove buffers, early warning and land-use planning reduce surge risk." },
            ],
            steps: [
              { part: "a", reasoning: "Two strategies named, e.g. surge barriers and mangrove restoration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly classified (engineering vs sustainable).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Barriers physically block or divert surge water from cities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mangroves absorb wave energy and trap sediment, reducing surge height.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanisms correctly linked to surge physics.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Named coast (e.g. Netherlands, Bangladesh, Gulf Coast USA) with evidence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: protection level, cost, failure risk, residual exposure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two strategies. (b) Mechanisms explained. (c) Named-coast evaluation.",
            commonErrors: ["Describing strategies without explaining how they reduce surge specifically."],
          },
        },
        {
          id: "geo-u3-stq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine flood management strategies for river and urban flooding.",
          parts: [
            { label: "a", prompt: "Identify one engineering and one sustainable flood management measure.", marks: 2 },
            { label: "b", prompt: "Explain how each measure reduces flood risk.", marks: 3 },
            { label: "c", prompt: "Evaluate the combined approach for a named river basin or city.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Flood management approaches", statement: "Dams, levees and channels resist floods structurally; floodplain restoration, wetlands and sustainable drainage work with natural systems." },
            ],
            steps: [
              { part: "a", reasoning: "One engineering measure (dam, levee, channel) and one sustainable measure (wetland, floodplain, SuDS).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly classified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Engineering measure explained: storage, diversion or confinement of floodwater.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sustainable measure explained: infiltration, storage or slow release in natural systems.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanisms accurately described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Named basin/city (e.g. Mississippi, Rhine, Dhaka) with contextual detail.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, co-benefits, failure risk, climate change pressures.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Engineering + sustainable measure. (b) Mechanisms. (c) Basin-level evaluation.",
            commonErrors: ["Recommending only engineering measures without acknowledging sustainable options."],
          },
        },
        {
          id: "geo-u3-stq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Urban areas experience dangerous flash floods rapidly mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rivers always overflow their banks in cities" },
              { id: "b", text: "impermeable surfaces convert rain to runoff faster than drainage systems can cope" },
              { id: "c", text: "cyclones only strike urban areas" },
              { id: "d", text: "cities are always located at high altitude" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Runoff in urban areas", statement: "Paved surfaces prevent infiltration; runoff exceeds drain capacity within minutes of intense rain." },
            ],
            steps: [
              { reasoning: "Impermeable surfaces plus overwhelmed drains produce rapid urban flooding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Runoff exceeds drainage capacity",
            commonErrors: ["Attributing flash floods to river flooding — they are localised, rapid events."],
          },
        },
        {
          id: "geo-u3-stq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the minimum sea surface temperature in °C for tropical cyclone formation; (b) the approximate number of deaths caused by Cyclone Nargis.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) SST threshold (°C)", answer: 26.5, tolerance: 0.3, unit: "°C" },
              { label: "(b) Nargis deaths", answer: 138000, tolerance: 20000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cyclone basics", statement: "Cyclones need SST above ~26.5 °C; Nargis killed ~138,000 people in Myanmar in 2008." },
            ],
            steps: [
              { reasoning: "The SST threshold is about 26.5 °C.", working: "26.5^{\\circ}\\text{C}", marks: 1, markCode: "A" },
              { reasoning: "Nargis caused approximately 138,000 deaths.", working: "\\approx 138{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $26.5^{\\circ}\\text{C}$ (b) $\\approx 138{,}000$",
            commonErrors: ["Writing 26 or 27 °C — the accepted threshold is ~26.5 °C."],
          },
        },
      ],
    },
    {
      id: "geo-u3-drought-climate",
      title: "Drought, Climate Change and Hazard Risk",
      skill: "Describe drought as a slow-onset hazard and evaluate how climate change is intensifying atmospheric hazards.",
      lesson: {
        sections: [
          {
            heading: "Drought",
            body: "Drought is a **slow-onset hazard** — prolonged rainfall deficit causing water shortage, crop failure, food insecurity and water conflict. Types: **meteorological** (low rain), **agricultural** (soil moisture deficit), **hydrological** (low river/lake levels). The Sahel droughts (1970s–80s) displaced millions; California's 2012–16 drought cost billions.",
          },
          {
            heading: "Climate change intensification",
            body: "Climate change increases hazard frequency and severity: warmer oceans fuel **stronger cyclones**; higher temperatures intensify **heatwaves** and **droughts**; more atmospheric moisture produces **heavier rainfall** and flash floods; sea-level rise worsens **storm surge**. Attribution science now links specific events to climate change.",
          },
          {
            heading: "Risk and adaptation",
            body: "Hazard risk is rising fastest where vulnerability is highest — low-income coastal and arid regions. Adaptation includes early warning, drought-resistant crops, water harvesting, mangrove restoration for surge protection and climate-resilient infrastructure. Mitigation (emissions cuts) addresses the root cause.",
          },
        ],
        keyFormulas: [
          { name: "Drought types", statement: "Meteorological → agricultural → hydrological (progressive)" },
          { name: "Climate links", statement: "Warmer oceans → stronger cyclones; more moisture → heavier rain; warming → droughts/heatwaves" },
          { name: "Slow-onset hazard", statement: "Drought develops over months/years — harder to warn than sudden events" },
        ],
        workedExample: {
          problem: "Explain why drought is called a 'slow-onset' hazard and why that makes it dangerous.",
          solution: "Drought develops gradually over months or years as rainfall deficits accumulate, unlike sudden events like earthquakes. This makes it harder to trigger emergency responses — impacts (crop failure, food insecurity, water conflict) build slowly and are often only recognised when severe, by which time recovery is costly.",
        },
      },
      questions: [
        {
          id: "geo-u3-dq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Drought is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sudden flood from intense rain" },
              { id: "b", text: "A prolonged period of abnormally low precipitation" },
              { id: "c", text: "A volcanic eruption releasing ash" },
              { id: "d", text: "A storm surge flooding coasts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Drought", statement: "Prolonged abnormally low precipitation causing water shortage and environmental stress." },
            ],
            steps: [
              { reasoning: "Drought is defined by prolonged rainfall deficit, not a sudden event.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Prolonged low precipitation",
            commonErrors: ["Confusing drought (rain deficit) with desert (arid climate)."],
          },
        },
        {
          id: "geo-u3-dq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways climate change intensifies atmospheric hazards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Climate-hazard links", statement: "Warmer oceans strengthen cyclones; more moisture increases rainfall extremes; warming worsens droughts and heatwaves." },
            ],
            steps: [
              { reasoning: "Warmer sea surface temperatures provide more energy for stronger tropical cyclones.", marks: 1, markCode: "M" },
              { reasoning: "A warmer atmosphere holds more moisture, producing heavier rainfall and flash floods.", marks: 1, markCode: "M" },
              { reasoning: "Higher temperatures intensify heatwaves and evaporative drought stress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stronger cyclones, heavier rainfall/floods, intensified droughts and heatwaves.",
            commonErrors: ["Claiming climate change causes all hazards — it intensifies existing ones."],
          },
        },
        {
          id: "geo-u3-dq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why drought is considered a 'slow-onset' hazard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slow-onset hazard", statement: "Develops gradually over months/years; impacts accumulate before recognition, delaying response." },
            ],
            steps: [
              { reasoning: "Rainfall deficits accumulate gradually — there is no single triggering event.", marks: 1, markCode: "M" },
              { reasoning: "Impacts (crop failure, water shortage) build slowly, often unnoticed until severe.", marks: 1, markCode: "M" },
              { reasoning: "Emergency systems designed for sudden events respond late to drought.", marks: 1, markCode: "R" },
              { reasoning: "Recovery is prolonged — aquifers and soils take years to recover.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradual development, cumulative impacts and delayed recognition make drought slow-onset and hard to manage.",
            commonErrors: ["Treating drought as a sudden disaster like a flood."],
          },
        },
        {
          id: "geo-u3-dq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the challenges of managing drought risk in a named region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its drought risk.", marks: 2 },
            { label: "b", prompt: "Explain two physical and one human factor causing drought there.", marks: 3 },
            { label: "c", prompt: "Evaluate drought management strategies for that region.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drought management", statement: "Water storage, demand management, drought-resistant crops and early warning reduce risk; effectiveness depends on governance and resources." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Sahel, California, Australia) with drought history.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific drought events or climatic vulnerability identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical factor: low rainfall, high evaporation, climate variability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Physical factor 2: soil type, vegetation loss or water storage limits.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Human factor: over-abstraction, population pressure or poor water governance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: water harvesting, storage, pricing or crop adaptation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, equity, sustainability, climate uncertainty.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + risk. (b) Two physical + one human factor. (c) Strategies evaluated.",
            commonErrors: ["Describing drought impacts without management strategies."],
          },
        },
        {
          id: "geo-u3-dq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Agricultural drought is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A deficit of soil moisture that reduces crop yields" },
              { id: "b", text: "A sudden flood that destroys farmland" },
              { id: "c", text: "A volcanic eruption covering fields in ash" },
              { id: "d", text: "An earthquake that damages irrigation systems" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Agricultural drought", statement: "A soil-moisture deficit that reduces crop growth and yields, following meteorological drought." },
            ],
            steps: [
              { reasoning: "Agricultural drought concerns soil moisture and crop stress, not floods or eruptions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Soil-moisture deficit reducing crop yields",
            commonErrors: ["Confusing agricultural drought with meteorological drought — the former affects soil and crops."],
          },
        },
        {
          id: "geo-u3-dq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of drought types named in the lesson; (b) the year the California drought began; (c) the year it ended.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Drought types", answer: 3 },
              { label: "(b) California drought start", answer: 2012 },
              { label: "(c) California drought end", answer: 2016 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Drought types and events", statement: "Meteorological, agricultural and hydrological droughts; California's drought ran roughly 2012–2016." },
            ],
            steps: [
              { reasoning: "The three types are meteorological, agricultural and hydrological.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "California's drought began around 2012.", working: "2012", marks: 1, markCode: "A" },
              { reasoning: "It ended around 2016.", working: "2016", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $2012$ (c) $2016$",
            commonErrors: ["Counting only two drought types or misdating the California event."],
          },
        },
        {
          id: "geo-u3-dq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Hydrological drought is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low rainfall during a single storm" },
              { id: "b", text: "Reduced river, lake and groundwater levels after prolonged rainfall deficit" },
              { id: "c", text: "A sudden drop in reservoir temperature" },
              { id: "d", text: "The immediate wilting of crops after one dry day" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrological drought", statement: "A period of abnormally low water levels in rivers, lakes, reservoirs and aquifers, following meteorological and agricultural drought." },
            ],
            steps: [
              { reasoning: "Hydrological drought affects stored and flowing water bodies after sustained deficit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low river, lake and groundwater levels",
            commonErrors: ["Confusing hydrological drought (water bodies) with agricultural drought (soil moisture)."],
          },
        },
        {
          id: "geo-u3-dq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of drought types named in the lesson; (b) the approximate year the Sahel droughts began; (c) the approximate duration of California's 2012–2016 drought in years.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Drought types", answer: 3 },
              { label: "(b) Sahel drought onset", answer: 1970, tolerance: 5 },
              { label: "(c) California drought duration (years)", answer: 4, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Drought history", statement: "Sahel droughts began in the early 1970s; California's drought lasted about four years." },
            ],
            steps: [
              { reasoning: "Three drought types are named.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "The Sahel droughts began around 1970 and persisted into the 1980s.", working: "\\approx 1970", marks: 1, markCode: "A" },
              { reasoning: "2012 to 2016 is about four years.", working: "2016 - 2012 = 4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $3$ (b) $\\approx 1970$ (c) $4$ years",
            commonErrors: ["Dating the Sahel droughts to the 1990s or 2000s."],
          },
        },
        {
          id: "geo-u3-dq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Climate change intensifies flash floods mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a warmer atmosphere holds more moisture, producing heavier rainfall events" },
              { id: "b", text: "warmer air always prevents all rainfall" },
              { id: "c", text: "climate change makes rivers flow uphill" },
              { id: "d", text: "droughts directly cause instant flooding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Atmospheric moisture capacity", statement: "Warmer air holds roughly 7% more moisture per °C, intensifying rainfall extremes." },
            ],
            steps: [
              { reasoning: "Higher temperatures increase atmospheric moisture capacity, fuelling heavier bursts of rain.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Warmer air holds more moisture → heavier rain",
            commonErrors: ["Claiming climate change reduces rainfall — it makes extremes heavier, not absent."],
          },
        },
        {
          id: "geo-u3-dq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the number of drought types named in the lesson; (b) the approximate year the Sahel droughts began.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Drought types", answer: 3 },
              { label: "(b) Sahel onset", answer: 1970, tolerance: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Drought types and Sahel", statement: "Meteorological, agricultural and hydrological drought; Sahel droughts began in the early 1970s." },
            ],
            steps: [
              { reasoning: "Three drought types are named.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "The Sahel droughts began around 1970.", working: "\\approx 1970", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $\\approx 1970$",
            commonErrors: ["Giving the peak years (mid-1970s to 1980s) instead of onset."],
          },
        },
        {
          id: "geo-u3-dq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Drought is harder to manage than sudden hazards like earthquakes mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it never causes any damage" },
              { id: "b", text: "its slow onset delays recognition, so impacts accumulate before emergency responses begin" },
              { id: "c", text: "it only affects desert regions" },
              { id: "d", text: "it cannot be monitored at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Slow-onset hazards", statement: "Drought develops gradually; cumulative impacts are recognised late, delaying costly emergency responses." },
            ],
            steps: [
              { reasoning: "Gradual onset means impacts build before systems trigger responses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Slow onset delays recognition and response",
            commonErrors: ["Assuming slow-onset hazards are easier to manage — they are harder to trigger responses for."],
          },
        },
        {
          id: "geo-u3-dq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the approximate duration in years of California's 2012–2016 drought; (b) the approximate year the Sahel droughts began; (c) the number of drought types named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) California drought duration (years)", answer: 4, tolerance: 1 },
              { label: "(b) Sahel onset", answer: 1970, tolerance: 5 },
              { label: "(c) Drought types", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Drought chronology", statement: "California's drought lasted about four years; Sahel droughts began around 1970." },
            ],
            steps: [
              { reasoning: "2012–2016 is about four years.", working: "2016 - 2012 = 4", marks: 1, markCode: "M" },
              { reasoning: "The Sahel droughts began around 1970.", working: "\\approx 1970", marks: 1, markCode: "A" },
              { reasoning: "Three drought types are named.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ years (b) $\\approx 1970$ (c) $3$",
            commonErrors: ["Giving calendar years instead of the duration in part (a)."],
          },
        },
        {
          id: "geo-u3-dq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine drought adaptation strategies in a named region.",
          parts: [
            { label: "a", prompt: "Identify the named region and describe its drought risk.", marks: 2 },
            { label: "b", prompt: "Explain two drought adaptation strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Drought adaptation", statement: "Water harvesting, storage, drought-resistant crops, pricing and early warning reduce drought risk." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Sahel, California, Australia) with drought history.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific drought events or climatic vulnerability identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: physical measure (water harvesting, storage, irrigation efficiency).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: agricultural or governance measure (crop varieties, pricing, early warning).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the region's specific drought risk.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: reduced losses, improved preparedness, lower costs than crisis response.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: cost, equity, climate uncertainty, governance capacity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + risk. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Proposing strategies unrelated to the named region's conditions."],
          },
        },
        {
          id: "geo-u3-dq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how climate change is intensifying atmospheric hazards.",
          parts: [
            { label: "a", prompt: "Describe two mechanisms linking climate change to stronger hazards.", marks: 2 },
            { label: "b", prompt: "Give a named example for each mechanism.", marks: 3 },
            { label: "c", prompt: "Evaluate the evidence for attributing specific events to climate change.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Climate intensification", statement: "Warmer oceans strengthen cyclones; more moisture increases rainfall; warming worsens droughts, heatwaves and storm surge via sea-level rise." },
            ],
            steps: [
              { part: "a", reasoning: "Mechanism 1: warmer oceans provide more cyclone energy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mechanism 2: more atmospheric moisture → heavier rain; or warming → drought/heatwave.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Named example 1 (e.g. stronger cyclones, Hurricane Harvey rainfall).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Named example 2 (e.g. California drought, European heatwaves).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Examples accurately matched to mechanisms.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Attribution science now quantifies climate contribution to specific events.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: certainty varies by event type; some links remain probabilistic.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two mechanisms. (b) Named examples. (c) Attribution evidence evaluated.",
            commonErrors: ["Claiming climate change causes hazards — it intensifies existing hazard processes."],
          },
        },
        {
          id: "geo-u3-dq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Drought is harder to manage than sudden hazards mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it never causes significant damage" },
              { id: "b", text: "its slow onset delays recognition, so impacts accumulate before responses begin" },
              { id: "c", text: "it affects only uninhabited deserts" },
              { id: "d", text: "it is impossible to monitor rainfall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Slow-onset hazard management", statement: "Drought's gradual development means emergency systems respond late; impacts accumulate over months or years." },
            ],
            steps: [
              { reasoning: "Slow development delays recognition and triggers for emergency response.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Delayed recognition due to slow onset",
            commonErrors: ["Assuming slow-onset hazards are easier to handle than sudden ones."],
          },
        },
        {
          id: "geo-u3-dq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the number of drought types named in the lesson; (b) the year the California drought ended.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Drought types", answer: 3 },
              { label: "(b) California drought end", answer: 2016 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Drought basics", statement: "Meteorological, agricultural and hydrological drought; California's drought ended around 2016." },
            ],
            steps: [
              { reasoning: "Three drought types are named.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "The California drought ended around 2016.", working: "2016", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $2016$",
            commonErrors: ["Giving 2012 (the start year) for the end year."],
          },
        },
      ],
    },
  ],
};

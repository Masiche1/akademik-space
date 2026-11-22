import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "geo-u1-lesson-1-3",
  code: "1-3",
  title: "Coastal Environments: Processes, Ecosystems and Human Uses",
  goal: "I CAN explain coastal processes, describe coastal ecosystems and evaluate human uses of coastal environments.",
  standards: ["Paper 1", "Paper 2", "Coasts"],
  vocabulary: [
    { term: "Coastal zone", definition: "The area where land meets the sea, including beaches, dunes, cliffs, estuaries and nearshore waters." },
    { term: "Longshore drift", definition: "The movement of sediment along the coast by waves approaching at an angle." },
    { term: "Tidal range", definition: "The vertical difference between high and low tide; large in macrotidal coasts." },
    { term: "Estuary", definition: "A semi-enclosed coastal water body where river fresh water mixes with sea water." },
    { term: "Salt marsh", definition: "Coastal wetland of grasses tolerant of salt water, flooded at high tide." },
    { term: "Coastal squeeze", definition: "Loss of intertidal habitat between rising sea levels and hard defences." },
  ],
  concepts: [
    {
      id: "geo-u1-coastal-processes",
      title: "Coastal processes",
      skill: "Describe the processes of erosion, transportation and deposition that shape coasts.",
      lesson: {
        sections: [
          {
            heading: "Erosion processes",
            body: "Coasts are eroded by **hydraulic action** (wave force compressing air into cracks), **abrasion/corrasion** (sediment grinding rock), **attrition** (particles colliding and rounding) and **solution** (dissolution of soluble rock). Wave energy depends on fetch, wind and tide; storm waves do most erosional work.",
          },
          {
            heading: "Transport and deposition",
            body: "Waves transport sediment by **traction**, **saltation**, **suspension** and **solution**. When wave energy falls — in sheltered bays or where longshore drift deposits sediment — material is **deposited**, building beaches, spits and bars. Tides and currents redistribute sediment alongshore.",
          },
          {
            heading: "Coastal systems",
            body: "Inputs (rivers, cliff erosion, longshore drift) and outputs (deposition, offshore loss) determine coastal form. Equilibrium is dynamic: storms erode, fair-weather waves rebuild. Human interference (groynes, breakwaters) interrupts sediment budgets, starving beaches downdrift.",
          },
        ],
        keyFormulas: [
          { name: "Erosion types", statement: "Hydraulic action, abrasion, attrition, solution" },
          { name: "Transport modes", statement: "Traction, saltation, suspension, solution" },
          { name: "Longshore drift", statement: "Angled wave approach moves sediment along the coast" },
        ],
        workedExample: {
          problem: "Explain how longshore drift creates a spit.",
          solution: "Waves approaching at an angle move sediment along the shore. Where the coast changes direction (e.g. across a bay mouth), the drift continues past the corner and deposits sediment into deeper water, building a narrow ridge — a spit — that may eventually enclose a lagoon.",
        },
      },
      questions: [
        {
          id: "geo-u1-coq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which erosion process involves waves compressing air into rock cracks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydraulic action" },
              { id: "b", text: "Abrasion" },
              { id: "c", text: "Solution" },
              { id: "d", text: "Attrition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydraulic action", statement: "Force of water compressing air into cracks, which expands and breaks rock." },
            ],
            steps: [
              { reasoning: "Hydraulic action is the compression of air in cracks by wave force.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hydraulic action",
            commonErrors: ["Confusing hydraulic action with abrasion — abrasion is sediment grinding rock."],
          },
        },
        {
          id: "geo-u1-coq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways in which waves transport sediment along a coast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Coastal transport", statement: "Longshore drift moves sediment alongshore; tides and currents redistribute it offshore/onshore." },
            ],
            steps: [
              { reasoning: "Longshore drift: waves arriving at an angle transport sediment along the beach face.", marks: 1, markCode: "M" },
              { reasoning: "Tidal and current action moves sediment onshore/offshore between beach and seabed.", marks: 1, markCode: "M" },
              { reasoning: "Suspension and saltation carry finer particles within the water column.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Longshore drift alongshore, plus tidal/current onshore-offshore movement.",
            commonErrors: ["Only mentioning one transport mode."],
          },
        },
        {
          id: "geo-u1-coq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why coasts are dynamic systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Coastal dynamism", statement: "Coasts respond continuously to variable energy inputs (waves, tides, storms) and sediment supply." },
            ],
            steps: [
              { reasoning: "Wave energy varies with weather: storms erode, calm periods deposit.", marks: 1, markCode: "M" },
              { reasoning: "Sediment inputs fluctuate — rivers, cliff erosion, longshore drift feed the system.", marks: 1, markCode: "M" },
              { reasoning: "Feedbacks: erosion creates sediment for deposition elsewhere — no fixed equilibrium.", marks: 1, markCode: "R" },
              { reasoning: "Human structures interrupt inputs/outputs, forcing rapid adjustment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coasts constantly adjust to variable wave energy, tides and sediment supply.",
            commonErrors: ["Describing coasts as static or stable over time."],
          },
        },
        {
          id: "geo-u1-coq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors controlling the rate of coastal erosion at a named location.",
          parts: [
            { label: "a", prompt: "Identify the named coastal location and its rock type.", marks: 2 },
            { label: "b", prompt: "Explain two physical factors affecting erosion there.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of human factors in coastal erosion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Erosion controls", statement: "Rate depends on rock resistance, wave energy, fetch, and human interference with sediment supply." },
            ],
            steps: [
              { part: "a", reasoning: "Named coast (e.g. Holderness, chalk cliffs of Dover) with correct rock type.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate location identification and lithology.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical factor 1: rock type/jointing controls resistance to erosion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Physical factor 2: wave energy, fetch or storm frequency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both linked to the named location's conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Human factor: coastal defences or sediment starvation accelerating erosion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs human vs natural control of erosion rate.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on relative importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named location + rock. (b) Two physical factors. (c) Human influence weighed against natural.",
            commonErrors: ["Listing erosion processes instead of controlling factors."],
          },
        },
        {
          id: "geo-u1-coq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Longshore drift is the movement of sediment:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From the seabed directly to the dunes" },
              { id: "b", text: "Along the coast, driven by waves approaching at an angle" },
              { id: "c", text: "Inland through river channels" },
              { id: "d", text: "Perpendicular to the coastline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Longshore drift", statement: "The alongshore movement of sediment caused by waves breaking at an oblique angle to the coast." },
            ],
            steps: [
              { reasoning: "Angled wave approach pushes sediment along the shore — this is longshore drift.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Along the coast from angled wave approach",
            commonErrors: ["Confusing it with onshore-offshore transport by tides."],
          },
        },
        {
          id: "geo-u1-coq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Attrition is the coastal erosion process in which:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air is compressed into rock cracks" },
              { id: "b", text: "Sediment particles collide and become rounded" },
              { id: "c", text: "Rock dissolves in seawater" },
              { id: "d", text: "Waves grind rock using sediment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attrition", statement: "Erosion by particles colliding with each other, rounding and reducing their size." },
            ],
            steps: [
              { reasoning: "Attrition rounds sediment through particle-on-particle collision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Particles collide and become rounded",
            commonErrors: ["Confusing attrition with abrasion — abrasion is sediment grinding rock."],
          },
        },
        {
          id: "geo-u1-coq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A spit forms when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A glacier melts directly into the sea" },
              { id: "b", text: "Wind blows sand inland to form dunes" },
              { id: "c", text: "Longshore drift carries sediment past a change in coast direction" },
              { id: "d", text: "A river deposits sediment into a lake" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spit formation", statement: "Where the coast bends, longshore drift continues and deposits sediment into deeper water, building a narrow ridge." },
            ],
            steps: [
              { reasoning: "Spits grow where drift deposits sediment beyond a coastal corner.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Drift deposits sediment past a coast bend",
            commonErrors: ["Confusing a spit (deposition at a bend) with a tombolo or barrier island."],
          },
        },
        {
          id: "geo-u1-coq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Fetch is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tidal range of a coast" },
              { id: "b", text: "The height of storm waves" },
              { id: "c", text: "The distance wind blows over open water" },
              { id: "d", text: "The steepness of a beach face" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fetch", statement: "The distance over which wind blows across open water — longer fetch produces larger waves." },
            ],
            steps: [
              { reasoning: "Fetch controls wave size: longer fetch means more energy transfer to water.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Distance wind blows over open water",
            commonErrors: ["Confusing fetch with wave height — fetch is the distance, height is the result."],
          },
        },
        {
          id: "geo-u1-coq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Groynes can cause erosion on downdrift beaches because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raise local sea level" },
              { id: "b", text: "Block all river sediment entirely" },
              { id: "c", text: "Trap sediment that would otherwise feed downdrift beaches" },
              { id: "d", text: "Increase wave energy locally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sediment budget", statement: "Interrupting longshore drift starves downdrift areas of sediment, accelerating erosion there." },
            ],
            steps: [
              { reasoning: "Groynes hold sediment updrift; downdrift beaches lose their supply.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Sediment starvation downdrift",
            commonErrors: ["Thinking groynes protect the whole coast — they shift erosion downdrift."],
          },
        },
        {
          id: "geo-u1-coq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A beach face drops $4 \\text{ m}$ vertically over a horizontal distance of $200 \\text{ m}$. Calculate the beach gradient as a percentage.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$\\text{gradient} = \\dfrac{\\text{vertical}}{\\text{horizontal}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Divide vertical drop by horizontal distance and convert to a percentage.", working: "4 \\div 200 \\times 100 = 2", marks: 1, markCode: "M" },
              { reasoning: "The beach gradient is $2\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\%$",
            commonErrors: ["Inverting the ratio — gradient is rise over run, not run over rise."],
          },
        },
        {
          id: "geo-u1-coq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "At a coastal station, high tide reaches $4.2 \\text{ m}$ and low tide falls to $0.8 \\text{ m}$. Calculate the tidal range.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.4, tolerance: 0.01, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tidal range", statement: "The vertical difference between high and low tide." },
            ],
            steps: [
              { reasoning: "Subtract low tide level from high tide level.", working: "4.2 - 0.8 = 3.4", marks: 1, markCode: "M" },
              { reasoning: "The tidal range is $3.4 \\text{ m}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.4 \\text{ m}$",
            commonErrors: ["Adding the two levels instead of subtracting."],
          },
        },
        {
          id: "geo-u1-coq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Longshore drift moves $500{,}000 \\text{ m}^3$ of sediment along a coast each year. A newly built groyne traps 30% of this drift. Calculate the volume trapped per year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 150000, tolerance: 1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sediment trapping", statement: "$\\text{trapped} = \\text{drift} \\times \\text{trap efficiency}$" },
            ],
            steps: [
              { reasoning: "Take 30% of the annual drift.", working: "0.30 \\times 500{,}000 = 150{,}000", marks: 1, markCode: "M" },
              { reasoning: "$150{,}000 \\text{ m}^3$ is trapped each year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150{,}000 \\text{ m}^3$ per year",
            commonErrors: ["Using 30 instead of 0.30 — a percentage must be converted to a decimal."],
          },
        },
        {
          id: "geo-u1-coq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Ocean waves travel at $12 \\text{ m/s}$ with a period of $8 \\text{ s}$. Calculate the wavelength.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 96, tolerance: 0.1, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "$L = c \\times T$ — wave speed times period." },
            ],
            steps: [
              { reasoning: "Multiply wave speed by period.", working: "12 \\times 8 = 96", marks: 1, markCode: "M" },
              { reasoning: "The wavelength is $96 \\text{ m}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96 \\text{ m}$",
            commonErrors: ["Dividing speed by period instead of multiplying."],
          },
        },
        {
          id: "geo-u1-coq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A cliffed coast retreats $2.4 \\text{ m}$ per year and the cliffs are $30 \\text{ m}$ high. Calculate the volume of sediment supplied to the coast per metre of shoreline each year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 72, tolerance: 0.1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cliff sediment supply", statement: "$V = \\text{retreat rate} \\times \\text{cliff height}$ per metre of shoreline." },
            ],
            steps: [
              { reasoning: "Multiply annual retreat by cliff height for a 1 m strip.", working: "2.4 \\times 30 = 72", marks: 1, markCode: "M" },
              { reasoning: "Each metre of shoreline yields $72 \\text{ m}^3$ of sediment per year.", marks: 1, markCode: "A" },
              { reasoning: "This cliff erosion is a major natural input to the coastal sediment budget.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$72 \\text{ m}^3$ per metre of shoreline per year",
            commonErrors: ["Multiplying by shoreline length when the question asks per metre."],
          },
        },
        {
          id: "geo-u1-coq15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Sea level is rising at $3.2 \\text{ mm}$ per year. Calculate the total rise over 50 years in centimetres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16, tolerance: 0.1, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sea-level rise", statement: "$\\text{rise} = \\text{rate} \\times \\text{time}$; $10 \\text{ mm} = 1 \\text{ cm}$." },
            ],
            steps: [
              { reasoning: "Multiply the rate by the period, then convert to centimetres.", working: "3.2 \\times 50 = 160 \\text{ mm} = 16 \\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "The total rise is $16 \\text{ cm}$ over 50 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16 \\text{ cm}$ in 50 years",
            commonErrors: ["Answering 160 — that is millimetres, not centimetres."],
          },
        },
        {
          id: "geo-u1-coq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors controlling coastal deposition at a named location.",
          parts: [
            { label: "a", prompt: "Identify the named location and its dominant depositional feature.", marks: 2 },
            { label: "b", prompt: "Explain two factors that promote deposition there.", marks: 3 },
            { label: "c", prompt: "Evaluate how human activity may alter deposition at the site.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deposition controls", statement: "Deposition occurs where wave energy falls — sheltered bays, sediment supply from drift/rivers, and structures like breakwaters all matter." },
            ],
            steps: [
              { part: "a", reasoning: "Named coast (e.g. Holderness-to-Spurn, Dungeness, a named bay) with correct depositional feature (spit, bar, beach).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Feature and location accurately identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factor 1: reduced wave energy in a sheltered location or at a coast bend.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor 2: abundant sediment supply via longshore drift or river input.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both factors linked to the named site.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Human factor: groynes/breakwaters trap sediment or interrupt drift.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs benefit (accretion, protection) against downdrift erosion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on net effect on deposition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named site + feature. (b) Two deposition factors. (c) Human influence evaluated.",
            commonErrors: ["Describing erosion controls rather than deposition controls."],
          },
        },
      ],
    },
    {
      id: "geo-u1-coastal-ecosystems",
      title: "Coastal ecosystems and human uses",
      skill: "Describe coastal ecosystems and evaluate the sustainability of human uses of coastal environments.",
      lesson: {
        sections: [
          {
            heading: "Coastal ecosystems",
            body: "Coastal zones support zoned habitats: rocky shore communities, sandy beaches, **salt marshes** and **mangrove** forests (tropical nurseries), **seagrass** meadows, estuaries and coral reefs. Each provides services: nurseries for fish, coastal defence, carbon storage and recreation. Many are threatened by development, pollution and sea-level rise.",
          },
          {
            heading: "Human uses",
            body: "Coasts concentrate settlement and industry — ports, fishing, tourism, aquaculture, offshore energy (wind, oil, gas) and residential development. Over 40% of the world population lives within 100 km of the coast. High-value uses conflict with fragile ecosystems: dredging destroys seabeds, tourism degrades dunes, and coastal squeeze eliminates intertidal habitat.",
          },
          {
            heading: "Sustainable management",
            body: "Managed retreat, setback zones, marine protected areas, mangrove restoration and Integrated Coastal Zone Management (ICZM) balance use and conservation. Examples include the Netherlands' Room for the River and Mangrove Action Project restoration in Asia and the Caribbean.",
          },
        ],
        keyFormulas: [
          { name: "Coastal habitats", statement: "Beaches, dunes, salt marsh, mangroves, seagrass, estuaries, reefs" },
          { name: "Coastal population", statement: "~40% of people live within 100 km of coast" },
          { name: "ICZM", statement: "Integrated Coastal Zone Management — coordinated sustainable use" },
        ],
        workedExample: {
          problem: "Explain how mangrove forests benefit coastal areas.",
          solution: "Mangroves act as nurseries for fish and crustaceans, trap sediment stabilising shorelines, buffer storm surges and waves, and store large amounts of carbon ('blue carbon'). Clearing them for shrimp farms removes these services and accelerates erosion.",
        },
      },
      questions: [
        {
          id: "geo-u1-eoq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Mangrove forests are important because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce most of the world's oil" },
              { id: "b", text: "Provide timber for construction" },
              { id: "c", text: "Nursery fish habitat and stabilise shorelines" },
              { id: "d", text: "Are found only in temperate zones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Mangrove services", statement: "Fish nurseries, sediment trapping, storm buffering, blue carbon storage." },
            ],
            steps: [
              { reasoning: "Mangroves provide nursery habitat and shoreline stabilisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Nursery habitat and shoreline stabilisation",
            commonErrors: ["Confusing mangroves with salt marshes or seagrass — similar services, different zones."],
          },
        },
        {
          id: "geo-u1-eoq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two conflicts between human uses and coastal ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Coastal conflicts", statement: "Tourism vs dunes, port development vs seagrass, aquaculture vs mangroves, urbanisation vs intertidal habitat." },
            ],
            steps: [
              { reasoning: "Tourism development tramples dunes and increases coastal erosion pressure.", marks: 1, markCode: "M" },
              { reasoning: "Port construction and dredging destroy seabed habitats like seagrass and coral.", marks: 1, markCode: "M" },
              { reasoning: "Shrimp farming clears mangroves, removing nursery and storm-buffer functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tourism-dune conflict, port-dredging vs seagrass, aquaculture vs mangroves.",
            commonErrors: ["Describing uses without identifying the ecosystem conflict."],
          },
        },
        {
          id: "geo-u1-eoq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the concept of coastal squeeze.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coastal squeeze", statement: "Loss of intertidal habitat trapped between rising sea levels and fixed hard defences." },
            ],
            steps: [
              { reasoning: "Sea-level rise pushes the shoreline landward.", marks: 1, markCode: "M" },
              { reasoning: "Hard defences (seawalls, embankments) prevent the intertidal zone migrating inland.", marks: 1, markCode: "M" },
              { reasoning: "The habitat is 'squeezed' into a narrowing strip until it disappears.", marks: 1, markCode: "R" },
              { reasoning: "Salt marshes and mudflats — vital nurseries — are lost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fixed defences + rising seas eliminate intertidal habitat between them.",
            commonErrors: ["Thinking coastal squeeze is about erosion only — it is habitat loss from fixed boundaries."],
          },
        },
        {
          id: "geo-u1-eoq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the sustainability of human uses of a named coastal area.",
          parts: [
            { label: "a", prompt: "Identify the named coastal area and its main human uses.", marks: 2 },
            { label: "b", prompt: "Explain the environmental impacts of these uses.", marks: 3 },
            { label: "c", prompt: "Evaluate management strategies for sustainability there.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Coastal sustainability", statement: "Uses (tourism, ports, fishing) generate income but degrade ecosystems; ICZM and protected areas seek balance." },
            ],
            steps: [
              { part: "a", reasoning: "Named coast (e.g. Mediterranean, Great Barrier Reef, Dutch coast) with uses identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Uses specific to the place (tourism, port, aquaculture).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impact 1: habitat destruction or pollution with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impact 2: erosion, overfishing or waste with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the named uses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Management: protected area, zoning, ICZM or restoration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, enforcement, economic trade-offs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named area + uses. (b) Impacts with mechanisms. (c) Management evaluated.",
            commonErrors: ["Generic coastal discussion without place-specific evidence."],
          },
        },
        {
          id: "geo-u1-eoq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Salt marshes are coastal wetlands that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exist only around coral reefs" },
              { id: "b", text: "Are flooded by tides and dominated by salt-tolerant grasses" },
              { id: "c", text: "Are permanently submerged below the seabed" },
              { id: "d", text: "Contain no vegetation at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salt marsh", statement: "A coastal wetland of salt-tolerant grasses flooded at high tide." },
            ],
            steps: [
              { reasoning: "Salt marshes occupy the intertidal zone and tolerate salt water.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tidal, salt-tolerant grass wetlands",
            commonErrors: ["Confusing salt marshes with mangroves — mangroves are woody and tropical."],
          },
        },
        {
          id: "geo-u1-eoq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An estuary is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sandy beach above the high-tide line" },
              { id: "b", text: "A deep ocean trench" },
              { id: "c", text: "An offshore coral reef" },
              { id: "d", text: "A semi-enclosed water body where river fresh water mixes with sea water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Estuary", statement: "A semi-enclosed coastal water body where river fresh water mixes with sea water." },
            ],
            steps: [
              { reasoning: "Estuaries are the mixing zone at river mouths.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Semi-enclosed river–sea mixing zone",
            commonErrors: ["Confusing an estuary with a delta — a delta is the depositional landform at its mouth."],
          },
        },
        {
          id: "geo-u1-eoq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Seagrass meadows are ecologically important because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce most of the world's oxygen" },
              { id: "b", text: "Are a major source of crude oil" },
              { id: "c", text: "Provide nursery habitat and store carbon ('blue carbon')" },
              { id: "d", text: "Block all coastal erosion permanently" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Seagrass services", statement: "Seagrass meadows are fish nurseries, sediment stabilisers and significant carbon stores." },
            ],
            steps: [
              { reasoning: "Seagrass supports fisheries and locks away 'blue carbon'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Nursery habitat and blue carbon storage",
            commonErrors: ["Confusing seagrass with phytoplankton — the oxygen claim belongs to marine algae."],
          },
        },
        {
          id: "geo-u1-eoq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Coastal squeeze occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mangroves expand inland" },
              { id: "b", text: "Waves erode an exposed cliff face" },
              { id: "c", text: "A spit grows across a bay mouth" },
              { id: "d", text: "Intertidal habitat is lost between rising sea levels and fixed hard defences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coastal squeeze", statement: "Loss of intertidal habitat trapped between rising sea levels and immovable hard defences." },
            ],
            steps: [
              { reasoning: "Fixed defences plus sea-level rise squeeze the intertidal zone out of existence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Habitat lost between rising seas and hard defences",
            commonErrors: ["Confusing coastal squeeze with simple erosion — it is habitat loss from fixed boundaries."],
          },
        },
        {
          id: "geo-u1-eoq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Clearing mangroves for shrimp farms is problematic mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lowers sea level" },
              { id: "b", text: "Creates new coral reefs" },
              { id: "c", text: "Destroys nursery habitat, storm protection and carbon storage" },
              { id: "d", text: "Increases local rainfall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Mangrove services", statement: "Mangroves provide fish nurseries, sediment trapping, storm buffering and 'blue carbon' storage." },
            ],
            steps: [
              { reasoning: "Mangrove removal strips multiple ecosystem services at once.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Loss of nursery, protection and carbon services",
            commonErrors: ["Thinking only of timber or scenic value — the losses are ecological services."],
          },
        },
        {
          id: "geo-u1-eoq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "About 40% of the world's population lives within 100 km of the coast. Given a global population of 8 billion, calculate how many people this represents.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.2, tolerance: 0.01, unit: "billion" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Coastal population", statement: "Roughly 40% of people live within 100 km of the coast." },
            ],
            steps: [
              { reasoning: "Take 40% of 8 billion.", working: "0.40 \\times 8 = 3.2", marks: 1, markCode: "M" },
              { reasoning: "About $3.2$ billion people live near the coast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.2$ billion people",
            commonErrors: ["Answering 40 — that is a percentage, not a population count."],
          },
        },
        {
          id: "geo-u1-eoq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An intertidal flat slopes at 1:100 (vertical:horizontal) and sea level rises $5 \\text{ mm}$ per year. Calculate the horizontal retreat of the shoreline per year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, tolerance: 0.01, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Shoreline retreat", statement: "$\\text{horizontal retreat} = \\text{sea-level rise} \\times \\text{slope ratio}$; a 1:100 slope means 100 units horizontal per 1 unit vertical." },
            ],
            steps: [
              { reasoning: "Apply the slope ratio: 5 mm vertical implies 500 mm horizontal.", working: "5 \\times 100 = 500 \\text{ mm}", marks: 1, markCode: "M" },
              { reasoning: "Convert millimetres to metres.", working: "500 \\text{ mm} = 0.5 \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "The shoreline retreats $0.5 \\text{ m}$ per year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5 \\text{ m}$ per year",
            commonErrors: ["Dividing by 100 instead of multiplying — a gentle slope amplifies horizontal retreat."],
          },
        },
        {
          id: "geo-u1-eoq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A coastal resort receives 2 million visitors per year, each generating 3 kg of waste per day for an average 3-day stay. Calculate the total annual waste in million tonnes.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.018, tolerance: 0.001, unit: "million tonnes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Waste generation", statement: "$\\text{waste} = \\text{visitors} \\times \\text{kg/day} \\times \\text{days}$; $1 \\text{ tonne} = 1{,}000 \\text{ kg}$." },
            ],
            steps: [
              { reasoning: "Total waste is $2 \\times 10^6 \\times 3 \\times 3 = 1.8 \\times 10^7 \\text{ kg}$.", working: "2 \\times 10^6 \\times 3 \\times 3 = 1.8 \\times 10^7 \\text{ kg}", marks: 1, markCode: "M" },
              { reasoning: "Convert to tonnes then to million tonnes: $18{,}000 \\text{ tonnes} = 0.018 \\text{ million tonnes}$.", working: "1.8 \\times 10^7 \\div 10^9 = 0.018", marks: 1, markCode: "M" },
              { reasoning: "Annual waste is $0.018$ million tonnes ($18{,}000$ tonnes).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.018$ million tonnes ($18{,}000$ tonnes)",
            commonErrors: ["Forgetting the kg-to-tonne conversion or the tonne-to-million-tonne step."],
          },
        },
        {
          id: "geo-u1-eoq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A coastal dune ridge is $800 \\text{ m}$ long with an average cross-sectional area of $250 \\text{ m}^2$. Calculate its approximate volume.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200000, tolerance: 1, unit: "m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume", statement: "$V = \\text{length} \\times \\text{cross-sectional area}$" },
            ],
            steps: [
              { reasoning: "Multiply length by average cross-section.", working: "800 \\times 250 = 200{,}000", marks: 1, markCode: "M" },
              { reasoning: "The dune ridge volume is $200{,}000 \\text{ m}^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200{,}000 \\text{ m}^3$",
            commonErrors: ["Multiplying length by height only — area already combines height and width."],
          },
        },
        {
          id: "geo-u1-eoq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A port authority dredges $1.5 \\text{ million m}^3$ of sediment each year for disposal at sea. Calculate the total volume dredged over 20 years.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, tolerance: 0.01, unit: "million m^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cumulative dredging", statement: "$\\text{total} = \\text{annual rate} \\times \\text{years}$" },
            ],
            steps: [
              { reasoning: "Multiply the annual dredged volume by 20.", working: "1.5 \\times 20 = 30", marks: 1, markCode: "M" },
              { reasoning: "$30$ million $\\text{m}^3$ is dredged over 20 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ million $\\text{m}^3$",
            commonErrors: ["Answering $1.5$ — the question asks for the 20-year total."],
          },
        },
        {
          id: "geo-u1-eoq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A coral reef tourist site earns $50$ per visitor and receives $800{,}000$ visitors per year. Calculate the annual revenue in millions of US dollars.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, tolerance: 0.01, unit: "million USD" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tourism revenue", statement: "$\\text{revenue} = \\text{visitors} \\times \\text{spend per visitor}$; $10^6$ dollars = 1 million USD." },
            ],
            steps: [
              { reasoning: "Multiply visitors by spend per visitor.", working: "800{,}000 \\times 50 = 4 \\times 10^7", marks: 1, markCode: "M" },
              { reasoning: "Convert dollars to millions: $40{,}000{,}000 = 40$ million USD.", working: "4 \\times 10^7 \\div 10^6 = 40", marks: 1, markCode: "M" },
              { reasoning: "Annual revenue is $40$ million USD.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ million USD per year",
            commonErrors: ["Answering $40{,}000{,}000$ — the question asks in millions."],
          },
        },
        {
          id: "geo-u1-eoq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the sustainability of tourism as a human use of a named coastal area.",
          parts: [
            { label: "a", prompt: "Identify the named coastal area and its main tourism activities.", marks: 2 },
            { label: "b", prompt: "Explain two environmental impacts of tourism there.", marks: 3 },
            { label: "c", prompt: "Evaluate management strategies that could make tourism more sustainable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Coastal tourism sustainability", statement: "Tourism generates income but degrades dunes, reefs and habitats; ICZM, zoning and protected areas seek balance." },
            ],
            steps: [
              { part: "a", reasoning: "Named coastal area (e.g. Mediterranean resort, Great Barrier Reef, Bali) correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Main tourism activities specified for that place.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impact 1: habitat damage or pollution with mechanism (trampling, sewage, boat anchors).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impact 2: erosion, water stress or waste with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the named tourism activities.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strategy: protected area, visitor limits, setback zones or ICZM — proposed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: costs, enforcement, economic trade-offs weighed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on sustainability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named area + tourism activities. (b) Two impacts. (c) Management evaluated.",
            commonErrors: ["Generic tourism discussion without place-specific evidence."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "geo-u3-lesson-3-4",
  code: "3-4",
  title: "Extreme Environments",
  goal: "I CAN describe the processes shaping extreme environments and evaluate management strategies for their peoples, resources and futures.",
  standards: ["Paper 1", "Paper 2", "Option C"],
  vocabulary: [
    { term: "Periglaciation", definition: "Freeze–thaw processes in cold non-glacial environments that shape terrain (patterned ground, pingos, solifluction)." },
    { term: "Desertification", definition: "Degradation of dryland ecosystems into desert-like conditions through climate variability and human pressure." },
    { term: "Arid environment", definition: "Region receiving less than ~250 mm annual rainfall — hot deserts and semi-arid steppes." },
    { term: "High-altitude environment", definition: "Mountain zones above the treeline with low temperatures, thin soils and specialised adaptation." },
    { term: "Indigenous peoples", definition: "Original inhabitants with traditional knowledge and land rights, e.g. Inuit, Sámi, Aboriginal Australians." },
    { term: "Carrying capacity", definition: "Maximum visitor or resource use an environment can sustain without degradation." },
  ],
  concepts: [
    {
      id: "geo-u3-extreme-processes",
      title: "Characteristics and processes of extreme environments",
      skill: "Describe the physical processes of polar, arid, high-altitude and rainforest environments and explain desertification.",
      lesson: {
        sections: [
          {
            heading: "Polar and periglacial environments",
            body: "**Polar environments** (Antarctica, Arctic) are defined by extreme cold, ice cover and seasonal darkness. In **periglacial** zones, repeated **freeze–thaw** cycles fracture rock, sort stones into patterns, and drive **solifluction** — slow soil flow over frozen ground. Thawing permafrost releases stored carbon and destabilises infrastructure.",
          },
          {
            heading: "Arid environments and desertification",
            body: "**Arid** regions (Sahara, Gobi, interior Australia) have sparse, erratic rainfall and high evaporation; processes include **aeolian erosion**, flash floods and salt weathering. **Desertification** is the spread of desert-like conditions into drylands, driven by drought, overgrazing, deforestation and poor irrigation — affecting the Sahel and Central Asia.",
          },
          {
            heading: "High-altitude and tropical rainforest extremes",
            body: "Above the treeline, **high-altitude** environments combine low temperature, intense UV and thin soils — plants and animals show dwarfing and specialisation. **Tropical rainforests** are extreme in biodiversity and moisture: year-round heat and rain drive rapid nutrient cycling, but soils are often poor; clearing for agriculture is a major threat.",
          },
        ],
        keyFormulas: [
          { name: "Aridity", statement: "Annual precipitation < ~250 mm = arid" },
          { name: "Periglacial processes", statement: "Freeze–thaw → patterned ground; solifluction moves soil" },
          { name: "Desertification causes", statement: "Climate variability + overgrazing + deforestation + poor land use" },
        ],
        workedExample: {
          problem: "Explain why tropical rainforest soils are often poor despite lush vegetation.",
          solution: "High temperature and rainfall accelerate decomposition and nutrient leaching; most nutrients are stored in living biomass rather than soil. Rapid uptake by plants and microbial turnover recycle nutrients quickly — so once forest is cleared, the soil quickly loses fertility and erodes.",
        },
      },
      questions: [
        {
          id: "geo-u3-xq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Desertification is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Irrigation of arid farmland" },
              { id: "b", text: "Degradation of drylands into desert-like conditions" },
              { id: "c", text: "The natural expansion of sand dunes" },
              { id: "d", text: "Formation of permafrost in cold regions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Desertification", statement: "Land degradation in drylands leading to loss of productivity and desert-like conditions." },
            ],
            steps: [
              { reasoning: "Desertification is degradation of dryland, not natural dune movement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Degradation of drylands into desert-like conditions",
            commonErrors: ["Confusing desertification with desert formation — deserts are natural; desertification is human/climate-driven degradation."],
          },
        },
        {
          id: "geo-u3-xq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two physical processes that shape periglacial environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Periglacial processes", statement: "Freeze–thaw weathering, frost heave, patterned ground, solifluction, pingos." },
            ],
            steps: [
              { reasoning: "Freeze–thaw cycles fracture rock and sort stones into patterns or stripes.", marks: 1, markCode: "M" },
              { reasoning: "Solifluction — saturated soil slowly flowing over permafrost — smooths slopes.", marks: 1, markCode: "M" },
              { reasoning: "Ice lens growth creates pingos and ground heave; frost shattering produces angular debris.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Freeze–thaw weathering/patterned ground and solifluction (or pingos).",
            commonErrors: ["Describing glacial processes — periglacial areas are non-glacial."],
          },
        },
        {
          id: "geo-u3-xq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why high-altitude environments are considered extreme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "High-altitude stress", statement: "Temperature falls ~6.5°C per km altitude, oxygen thin, UV intense, soils thin — only specialised life survives." },
            ],
            steps: [
              { reasoning: "Temperature decreases with altitude (lapse rate), creating cold stress and short growing seasons.", marks: 1, markCode: "M" },
              { reasoning: "Thin air reduces oxygen and atmospheric pressure, limiting human and animal activity.", marks: 1, markCode: "M" },
              { reasoning: "Intense UV, wind and thin infertile soils constrain plant growth above the treeline.", marks: 1, markCode: "M" },
              { reasoning: "Survival requires adaptation: dwarfing, cushion plants, specialised fauna (e.g. snow leopards).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cold, hypoxia, UV and poor soils make high-altitude zones physiologically extreme.",
            commonErrors: ["Confusing altitude with latitude — mountain extremes occur at any latitude."],
          },
        },
        {
          id: "geo-u3-xq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes and consequences of desertification in a named dryland region.",
          parts: [
            { label: "a", prompt: "Identify the named region and its climate characteristics.", marks: 2 },
            { label: "b", prompt: "Explain two causes of desertification there.", marks: 3 },
            { label: "c", prompt: "Evaluate the human and environmental consequences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Desertification", statement: "Desertification arises from the interaction of climate variability and unsustainable land use, producing land degradation, food insecurity and migration." },
            ],
            steps: [
              { part: "a", reasoning: "Named dryland (e.g. Sahel, Central Asia, Australian interior) with aridity context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Climate characteristics: low, variable rainfall; drought cycles.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cause 1: human pressure — overgrazing, deforestation, poor irrigation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cause 2: climate variability — droughts reduce vegetation cover, exposing soil to erosion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Causes linked to the named region's specific conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Human consequences: crop failure, food insecurity, poverty and migration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Environmental consequences: soil erosion, biodiversity loss, dust storms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on severity and reversibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named dryland + climate. (b) Human + climate causes. (c) Food insecurity, migration, land degradation.",
            commonErrors: ["Attributing desertification solely to drought — human land use is a key driver."],
          },
        },
        {
          id: "geo-u3-xq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Periglaciation refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The formation of sand dunes in deserts" },
              { id: "b", text: "Freeze–thaw processes in cold environments adjacent to, but outside, ice sheets" },
              { id: "c", text: "Volcanic eruptions in polar regions" },
              { id: "d", text: "Glacial erosion beneath moving ice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Periglaciation", statement: "Freeze–thaw and related cold-climate processes that shape terrain outside glaciated areas." },
            ],
            steps: [
              { reasoning: "Periglacial zones are cold but non-glacial; freeze–thaw dominates.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Freeze–thaw processes in cold non-glacial areas",
            commonErrors: ["Confusing periglacial with glacial processes — periglacial areas lack moving ice."],
          },
        },
        {
          id: "geo-u3-xq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the approximate annual rainfall in mm below which a region is classed as arid; (b) the environmental lapse rate in °C per km; (c) the year the Antarctic Treaty was signed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Aridity threshold (mm)", answer: 250, tolerance: 20, unit: "mm" },
              { label: "(b) Lapse rate (°C/km)", answer: 6.5, tolerance: 0.3, unit: "°C/km" },
              { label: "(c) Antarctic Treaty year", answer: 1959 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Extreme environment thresholds", statement: "Arid regions receive < ~250 mm annual rain; temperature falls ~6.5 °C per km; Antarctic Treaty signed 1959." },
            ],
            steps: [
              { reasoning: "The aridity threshold is about 250 mm of annual precipitation.", working: "\\approx 250\\ \\text{mm}", marks: 1, markCode: "A" },
              { reasoning: "The environmental lapse rate is about 6.5 °C per kilometre.", working: "6.5^{\\circ}\\text{C/km}", marks: 1, markCode: "A" },
              { reasoning: "The Antarctic Treaty was signed in 1959.", working: "1959", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 250$ mm (b) $6.5^{\\circ}\\text{C/km}$ (c) $1959$",
            commonErrors: ["Using 100 mm or 500 mm as the aridity threshold."],
          },
        },
        {
          id: "geo-u3-xq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solifluction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The chemical weathering of limestone" },
              { id: "b", text: "The rapid flow of meltwater down a glacier" },
              { id: "c", text: "The wind erosion of desert sand" },
              { id: "d", text: "The slow flow of saturated soil over frozen ground" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solifluction", statement: "Slow downslope flow of water-saturated soil over impermeable frozen ground in periglacial areas." },
            ],
            steps: [
              { reasoning: "Solifluction is gradual soil flow lubricated by meltwater above permafrost.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Slow flow of saturated soil over frozen ground",
            commonErrors: ["Confusing solifluction with glacial flow or landslides."],
          },
        },
        {
          id: "geo-u3-xq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the approximate aridity threshold in mm of annual rainfall; (b) the environmental lapse rate in °C per km; (c) the number of extreme environment types covered in the lesson (polar, arid, high-altitude, rainforest).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Aridity threshold (mm)", answer: 250, tolerance: 20, unit: "mm" },
              { label: "(b) Lapse rate (°C/km)", answer: 6.5, tolerance: 0.3, unit: "°C/km" },
              { label: "(c) Environment types", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Extreme environment basics", statement: "Arid = < ~250 mm rain; lapse rate ~6.5 °C/km; four environment types studied." },
            ],
            steps: [
              { reasoning: "Aridity threshold is about 250 mm.", working: "\\approx 250\\ \\text{mm}", marks: 1, markCode: "A" },
              { reasoning: "Lapse rate is about 6.5 °C per km.", working: "6.5^{\\circ}\\text{C/km}", marks: 1, markCode: "A" },
              { reasoning: "Four types: polar, arid, high-altitude, rainforest.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 250$ mm (b) $6.5^{\\circ}\\text{C/km}$ (c) $4$",
            commonErrors: ["Using 10 °C/km (the dry adiabatic rate) instead of the environmental lapse rate."],
          },
        },
        {
          id: "geo-u3-xq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Which is a major human driver of desertification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planting more trees and shrubs" },
              { id: "b", text: "Reducing livestock numbers" },
              { id: "c", text: "Building reservoirs for irrigation" },
              { id: "d", text: "Overgrazing, deforestation and poor irrigation practices" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Desertification drivers", statement: "Human pressure — overgrazing, deforestation, poor irrigation — combines with climate variability to degrade drylands." },
            ],
            steps: [
              { reasoning: "Overgrazing, deforestation and bad irrigation remove vegetation cover and degrade soil.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Overgrazing, deforestation, poor irrigation",
            commonErrors: ["Attributing desertification only to climate — human land use is a key driver."],
          },
        },
        {
          id: "geo-u3-xq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the approximate aridity threshold in mm of annual rainfall; (b) the environmental lapse rate in °C per km.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Aridity threshold (mm)", answer: 250, tolerance: 20, unit: "mm" },
              { label: "(b) Lapse rate (°C/km)", answer: 6.5, tolerance: 0.3, unit: "°C/km" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aridity and lapse rate", statement: "Arid = < ~250 mm annual rain; temperature falls ~6.5 °C per km altitude." },
            ],
            steps: [
              { reasoning: "Aridity threshold is about 250 mm.", working: "\\approx 250\\ \\text{mm}", marks: 1, markCode: "A" },
              { reasoning: "Lapse rate is about 6.5 °C/km.", working: "6.5^{\\circ}\\text{C/km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 250$ mm (b) $6.5^{\\circ}\\text{C/km}$",
            commonErrors: ["Giving the dry adiabatic rate instead of the environmental lapse rate."],
          },
        },
        {
          id: "geo-u3-xq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Tropical rainforest soils are often poor despite lush vegetation mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rainforests receive no rainfall" },
              { id: "b", text: "the soil is permanently frozen" },
              { id: "c", text: "all nutrients are in the bedrock only" },
              { id: "d", text: "nutrients are stored in living biomass while heavy rain leaches them from the soil" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rainforest soil fertility", statement: "Rapid decomposition and leaching keep nutrients in biomass; cleared soil quickly loses fertility." },
            ],
            steps: [
              { reasoning: "Nutrients cycle through biomass; soil itself holds few stored nutrients.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Nutrients in biomass; leaching impoverishes soil",
            commonErrors: ["Assuming lush vegetation implies fertile soil — the opposite is often true."],
          },
        },
        {
          id: "geo-u3-xq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the environmental lapse rate in °C per km; (b) the approximate aridity threshold in mm; (c) the number of extreme environment types covered in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Lapse rate (°C/km)", answer: 6.5, tolerance: 0.3, unit: "°C/km" },
              { label: "(b) Aridity threshold (mm)", answer: 250, tolerance: 20, unit: "mm" },
              { label: "(c) Environment types", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Extreme environment facts", statement: "Lapse rate ~6.5 °C/km; aridity < ~250 mm; four environment types studied." },
            ],
            steps: [
              { reasoning: "Lapse rate is about 6.5 °C/km.", working: "6.5^{\\circ}\\text{C/km}", marks: 1, markCode: "A" },
              { reasoning: "Aridity threshold is about 250 mm.", working: "\\approx 250\\ \\text{mm}", marks: 1, markCode: "A" },
              { reasoning: "Four types: polar, arid, high-altitude, rainforest.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.5^{\\circ}\\text{C/km}$ (b) $\\approx 250$ mm (c) $4$",
            commonErrors: ["Swapping the lapse rate and aridity values."],
          },
        },
        {
          id: "geo-u3-xq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the processes and consequences of desertification.",
          parts: [
            { label: "a", prompt: "Explain two causes of desertification.", marks: 2 },
            { label: "b", prompt: "Describe two environmental consequences of desertification.", marks: 3 },
            { label: "c", prompt: "Evaluate desertification as a slow-onset hazard.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Desertification", statement: "Climate variability plus unsustainable land use degrades drylands, causing erosion, biodiversity loss and livelihood collapse." },
            ],
            steps: [
              { part: "a", reasoning: "Cause 1: human pressure — overgrazing, deforestation, poor irrigation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cause 2: climate variability — droughts reduce vegetation cover.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consequence 1: soil erosion and loss of fertility.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consequence 2: biodiversity loss, dust storms, altered hydrology.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consequences accurately described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Slow-onset nature: gradual degradation delays recognition and response.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: reversibility possible with sustainable land management; otherwise progressive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Human + climate causes. (b) Erosion + biodiversity loss. (c) Slow-onset evaluation.",
            commonErrors: ["Attributing desertification solely to drought — human land use is central."],
          },
        },
        {
          id: "geo-u3-xq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine periglacial processes and the impacts of permafrost thaw.",
          parts: [
            { label: "a", prompt: "Describe two processes that shape periglacial terrain.", marks: 2 },
            { label: "b", prompt: "Explain two consequences of permafrost thaw.", marks: 3 },
            { label: "c", prompt: "Evaluate the management challenges in periglacial regions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Periglacial environments", statement: "Freeze–thaw weathering, solifluction and patterned ground shape terrain; thawing permafrost destabilises land and releases carbon." },
            ],
            steps: [
              { part: "a", reasoning: "Process 1: freeze–thaw weathering producing patterned ground.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Process 2: solifluction or frost heave/pingos.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consequence 1: ground destabilisation damaging buildings and roads.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consequence 2: release of stored carbon/methane amplifying climate change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consequences correctly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Challenge: vast remote areas, limited resources, engineering difficulties.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: adaptation (thermosyphons, design) vs mitigation (emissions cuts).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Freeze–thaw + solifluction. (b) Instability + carbon release. (c) Management evaluated.",
            commonErrors: ["Describing glacial processes — periglacial zones are non-glacial."],
          },
        },
        {
          id: "geo-u3-xq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Aeolian erosion in arid environments is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "volcanic lava flows" },
              { id: "b", text: "glacial ice scraping bedrock" },
              { id: "c", text: "running water carving valleys" },
              { id: "d", text: "the wind eroding, transporting and depositing sediment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aeolian processes", statement: "Wind-driven erosion, transport and deposition — dominant in arid environments lacking vegetation cover." },
            ],
            steps: [
              { reasoning: "Aeolian = wind processes; aridity and sparse vegetation allow wind to move sediment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Wind erosion, transport and deposition",
            commonErrors: ["Confusing aeolian (wind) with fluvial (water) processes."],
          },
        },
        {
          id: "geo-u3-xq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the approximate aridity threshold in mm of annual rainfall; (b) the environmental lapse rate in °C per km.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Aridity threshold (mm)", answer: 250, tolerance: 20, unit: "mm" },
              { label: "(b) Lapse rate (°C/km)", answer: 6.5, tolerance: 0.3, unit: "°C/km" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aridity and lapse rate", statement: "Arid regions receive < ~250 mm rain; temperature decreases ~6.5 °C per km." },
            ],
            steps: [
              { reasoning: "Aridity threshold is about 250 mm.", working: "\\approx 250\\ \\text{mm}", marks: 1, markCode: "A" },
              { reasoning: "Lapse rate is about 6.5 °C/km.", working: "6.5^{\\circ}\\text{C/km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\approx 250$ mm (b) $6.5^{\\circ}\\text{C/km}$",
            commonErrors: ["Giving 9.8 °C/km (gravity) or 10 °C/km (dry adiabatic) instead of 6.5 °C/km."],
          },
        },
      ],
    },
    {
      id: "geo-u3-extreme-management",
      title: "Managing extreme environments and their futures",
      skill: "Evaluate how indigenous peoples, tourism, resource extraction and climate change affect extreme environments and their management.",
      lesson: {
        sections: [
          {
            heading: "Indigenous peoples and traditional management",
            body: "Indigenous groups — **Inuit** in the Arctic, **Sámi** in Scandinavia, **Aboriginal Australians** — have adapted to extreme environments over millennia. Their **traditional ecological knowledge** supports sustainable use (e.g. Inuit hunting quotas, fire management in Australia). Land rights and co-management partnerships increasingly recognise this knowledge, though resource extraction and climate change threaten it.",
          },
          {
            heading: "Tourism, resource extraction and vulnerability",
            body: "Tourism brings income but can exceed **carrying capacity** — Antarctic cruises, Himalayan treks and desert safaris all strain fragile ecosystems. **Resource extraction** (oil in Alaska, minerals in the Andes, rare earths in the Arctic) brings jobs but risks spills and cultural disruption. All extreme environments face amplified **climate change** impacts: ice melt, permafrost thaw, desertification and species loss.",
          },
          {
            heading: "Adaptation and future management",
            body: "Adaptation strategies include protected-area designations (Antarctic Treaty System), community-based tourism limits, climate-resilient infrastructure and **mitigation** to slow warming. Managing extreme environments requires balancing economic opportunity, indigenous rights and ecological fragility — decisions that affect both local communities and global systems.",
          },
        ],
        keyFormulas: [
          { name: "Carrying capacity", statement: "Max sustainable visitor/resource use before degradation" },
          { name: "Traditional knowledge", statement: "Indigenous adaptive management + land rights" },
          { name: "Climate vulnerability", statement: "Extreme environments amplify warming impacts — ice, permafrost, drylands" },
        ],
        workedExample: {
          problem: "Suggest two ways tourism in an extreme environment could be managed sustainably.",
          solution: "Limit visitor numbers to carrying capacity (e.g. capped Antarctic landings); require guides and designated routes to minimise trampling. Revenue-sharing with local/indigenous communities and strict waste-management rules further reduce impacts while supporting livelihoods.",
        },
      },
      questions: [
        {
          id: "geo-u3-xmq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Traditional ecological knowledge refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Commercial fishing techniques" },
              { id: "b", text: "Modern scientific monitoring of ecosystems" },
              { id: "c", text: "Satellite data on climate change" },
              { id: "d", text: "Indigenous understanding of environments built over generations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Traditional ecological knowledge", statement: "Knowledge of species, seasons and sustainable practices held by indigenous peoples through long observation." },
            ],
            steps: [
              { reasoning: "TEK is indigenous, intergenerational environmental knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Indigenous intergenerational environmental knowledge",
            commonErrors: ["Confusing TEK with modern science — it is place-based and culturally transmitted."],
          },
        },
        {
          id: "geo-u3-xmq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two impacts of tourism in extreme environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Tourism impacts", statement: "Erosion/trampling, waste, wildlife disturbance, infrastructure pressure vs income and conservation funding." },
            ],
            steps: [
              { reasoning: "Physical damage: footpath erosion, soil compaction and disturbance of fragile vegetation (tundra, alpine meadows).", marks: 1, markCode: "M" },
              { reasoning: "Wildlife stress and waste pollution affect species adapted to pristine conditions.", marks: 1, markCode: "M" },
              { reasoning: "Benefits exist — income and conservation funding — but must be balanced against impacts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Erosion/trampling, wildlife disturbance and waste vs income benefits.",
            commonErrors: ["Listing only benefits or only costs — evaluate both."],
          },
        },
        {
          id: "geo-u3-xmq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why extreme environments are especially vulnerable to climate change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polar amplification", statement: "Arctic warms ~2–3× faster than global average; permafrost, ice sheets and drylands respond non-linearly to warming." },
            ],
            steps: [
              { reasoning: "Ice–albedo feedback: melting ice exposes dark surfaces that absorb more heat, accelerating warming.", marks: 1, markCode: "M" },
              { reasoning: "Permafrost thaw releases stored carbon and methane, amplifying warming further.", marks: 1, markCode: "M" },
              { reasoning: "Species and human communities are narrowly adapted — small changes exceed tolerance.", marks: 1, markCode: "M" },
              { reasoning: "Consequences: sea-level rise, ecosystem collapse, threats to indigenous livelihoods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Feedback loops, narrow ecological tolerance and permafrost carbon make extremes highly vulnerable.",
            commonErrors: ["Ignoring feedback mechanisms — albedo and permafrost carbon amplify change."],
          },
        },
        {
          id: "geo-u3-xmq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the management of an extreme environment in a named place.",
          parts: [
            { label: "a", prompt: "Identify the named environment and its extreme characteristics.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extreme environment management", statement: "Protection regimes, visitor limits and community involvement balance fragility with use." },
            ],
            steps: [
              { part: "a", reasoning: "Named environment (e.g. Antarctica, Arctic Alaska, Sahara, Himalayas).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Extreme characteristics stated (cold/dry/altitude).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: protected status / visitor caps / permitted access (Antarctic Treaty).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: community co-management or sustainable tourism rules.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the environment's fragility and pressures.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: limits damage, preserves ecosystems, builds local support.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: enforcement difficulty, climate pressures, economic trade-offs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named environment + characteristics. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Choosing an environment without specific management detail."],
          },
        },
        {
          id: "geo-u3-xmq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Carrying capacity in the context of extreme environment tourism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The maximum number of visitors or resource use an environment can sustain without degradation" },
              { id: "b", text: "The total weight a helicopter can carry" },
              { id: "c", text: "The maximum speed of a cruise ship" },
              { id: "d", text: "The number of tourists a hotel can sleep" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrying capacity", statement: "Maximum visitor or resource use an environment can sustain without degradation." },
            ],
            steps: [
              { reasoning: "Carrying capacity is an ecological limit on use, not a physical transport limit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Max sustainable use before degradation",
            commonErrors: ["Interpreting carrying capacity as a physical load limit rather than ecological."],
          },
        },
        {
          id: "geo-u3-xmq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the year the Antarctic Treaty was signed; (b) the number of indigenous groups named in the lesson; (c) the number of climate-change impacts on extreme environments listed (ice melt, permafrost thaw, desertification, species loss).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Antarctic Treaty year", answer: 1959 },
              { label: "(b) Indigenous groups", answer: 3 },
              { label: "(c) Climate impacts listed", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Extreme environment facts", statement: "Antarctic Treaty 1959; Inuit, Sámi and Aboriginal Australians named; four climate impacts listed." },
            ],
            steps: [
              { reasoning: "The Antarctic Treaty was signed in 1959.", working: "1959", marks: 1, markCode: "A" },
              { reasoning: "Three groups named: Inuit, Sámi, Aboriginal Australians.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Four impacts: ice melt, permafrost thaw, desertification, species loss.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1959$ (b) $3$ (c) $4$",
            commonErrors: ["Counting more than three named indigenous groups."],
          },
        },
        {
          id: "geo-u3-xmq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Antarctic Treaty System is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tourism marketing campaign" },
              { id: "b", text: "A commercial fishing quota scheme" },
              { id: "c", text: "A military defence pact" },
              { id: "d", text: "An international agreement designating Antarctica for peaceful, non-military scientific use and environmental protection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Antarctic Treaty System", statement: "International regime reserving Antarctica for science and environmental protection, banning military activity and mining." },
            ],
            steps: [
              { reasoning: "The treaty system protects Antarctica through scientific and environmental provisions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Peaceful scientific use and environmental protection",
            commonErrors: ["Describing it as a tourism or fishing scheme — it is a conservation regime."],
          },
        },
        {
          id: "geo-u3-xmq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Complete the following: (a) the year the Antarctic Treaty was signed; (b) the number of indigenous groups named in the lesson; (c) the number of climate-change impacts on extreme environments listed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Antarctic Treaty year", answer: 1959 },
              { label: "(b) Indigenous groups", answer: 3 },
              { label: "(c) Climate impacts", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Extreme environment management facts", statement: "Antarctic Treaty 1959; three indigenous groups; four climate impacts listed." },
            ],
            steps: [
              { reasoning: "The Antarctic Treaty dates from 1959.", working: "1959", marks: 1, markCode: "A" },
              { reasoning: "Inuit, Sámi and Aboriginal Australians give three groups.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Ice melt, permafrost thaw, desertification, species loss give four impacts.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1959$ (b) $3$ (c) $4$",
            commonErrors: ["Including Antarctica's treaty parties as 'indigenous groups'."],
          },
        },
        {
          id: "geo-u3-xmq9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "When tourism in an extreme environment exceeds its carrying capacity, the typical result is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "increased carrying capacity" },
              { id: "b", text: "no change because environments are resilient" },
              { id: "c", text: "improved ecosystem health" },
              { id: "d", text: "degradation of fragile ecosystems through erosion, waste and wildlife disturbance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carrying capacity exceedance", statement: "Beyond carrying capacity, fragile ecosystems degrade through trampling, waste and wildlife stress." },
            ],
            steps: [
              { reasoning: "Exceeding capacity causes physical damage and ecological stress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Degradation of fragile ecosystems",
            commonErrors: ["Assuming extreme environments can absorb unlimited visitors."],
          },
        },
        {
          id: "geo-u3-xmq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the year the Antarctic Treaty was signed; (b) the number of indigenous groups named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Antarctic Treaty year", answer: 1959 },
              { label: "(b) Indigenous groups", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Extreme environment facts", statement: "Antarctic Treaty 1959; Inuit, Sámi, Aboriginal Australians." },
            ],
            steps: [
              { reasoning: "The Antarctic Treaty was signed in 1959.", working: "1959", marks: 1, markCode: "A" },
              { reasoning: "Three indigenous groups are named.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1959$ (b) $3$",
            commonErrors: ["Giving 1957 or 1961 — the treaty was signed in 1959."],
          },
        },
        {
          id: "geo-u3-xmq11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Resource extraction in extreme environments (e.g. oil in Alaska, minerals in the Andes) primarily risks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the complete elimination of all hazards" },
              { id: "b", text: "spills, environmental damage and disruption of indigenous cultures, alongside economic benefits" },
              { id: "c", text: "nothing — extraction has no impacts" },
              { id: "d", text: "immediate permanent benefit with no risks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resource extraction trade-offs", statement: "Extraction brings jobs and income but risks spills, ecosystem damage and cultural disruption." },
            ],
            steps: [
              { reasoning: "Extraction involves both economic benefits and serious environmental/cultural risks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spills, damage and cultural disruption vs economic benefits",
            commonErrors: ["Listing only benefits or only costs — both must be weighed."],
          },
        },
        {
          id: "geo-u3-xmq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Complete the following: (a) the number of adaptation strategies named in the lesson (protected areas, visitor limits, climate-resilient infrastructure, mitigation); (b) the year the Antarctic Treaty was signed; (c) the number of indigenous groups named.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Adaptation strategies", answer: 4 },
              { label: "(b) Antarctic Treaty year", answer: 1959 },
              { label: "(c) Indigenous groups", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Adaptation strategies", statement: "Four strategies: protected areas, visitor limits, resilient infrastructure, mitigation; Antarctic Treaty 1959; three indigenous groups." },
            ],
            steps: [
              { reasoning: "Four adaptation strategies are listed.", working: "4", marks: 1, markCode: "A" },
              { reasoning: "The Antarctic Treaty dates from 1959.", working: "1959", marks: 1, markCode: "A" },
              { reasoning: "Three indigenous groups are named.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ (b) $1959$ (c) $3$",
            commonErrors: ["Counting mitigation as adaptation — it addresses the cause, not the impacts."],
          },
        },
        {
          id: "geo-u3-xmq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine indigenous land rights and co-management in extreme environments.",
          parts: [
            { label: "a", prompt: "Explain the value of traditional ecological knowledge for managing extreme environments.", marks: 2 },
            { label: "b", prompt: "Describe an example of indigenous co-management or land rights in practice.", marks: 3 },
            { label: "c", prompt: "Evaluate the benefits and limitations of indigenous involvement in management.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Indigenous management", statement: "Traditional ecological knowledge supports sustainable use; land rights and co-management recognise indigenous authority." },
            ],
            steps: [
              { part: "a", reasoning: "TEK provides place-based knowledge of species, seasons and sustainable practices.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Value: complements science, supports sustainable harvest and fire/ecosystem management.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example named: Inuit hunting quotas, Sámi reindeer herding, Aboriginal fire management.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Co-management or land-rights mechanism described.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example accurately linked to an extreme environment.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefit: sustainable use, cultural preservation, local legitimacy.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: resource extraction pressures, climate change, power imbalances.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) TEK value. (b) Co-management example. (c) Benefits vs limitations.",
            commonErrors: ["Describing indigenous involvement only as a problem rather than a resource."],
          },
        },
        {
          id: "geo-u3-xmq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine climate change adaptation in extreme environments.",
          parts: [
            { label: "a", prompt: "Explain why extreme environments are especially vulnerable to climate change.", marks: 2 },
            { label: "b", prompt: "Describe two adaptation strategies used in extreme environments.", marks: 3 },
            { label: "c", prompt: "Evaluate the relative importance of adaptation versus mitigation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extreme environment vulnerability", statement: "Polar amplification, permafrost carbon feedback and narrow ecological tolerance make extremes highly climate-sensitive." },
            ],
            steps: [
              { part: "a", reasoning: "Feedbacks: ice–albedo and permafrost carbon amplify warming.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Narrow species and community tolerance to change.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: protected areas or visitor limits preserving ecosystems.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: climate-resilient infrastructure or assisted migration/species monitoring.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies suited to extreme conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Argument: mitigation addresses root cause; adaptation buys time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: both needed; mitigation benefits global, adaptation protects local communities.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Amplified vulnerability. (b) Two adaptation strategies. (c) Adaptation vs mitigation judgement.",
            commonErrors: ["Treating adaptation and mitigation as interchangeable."],
          },
        },
        {
          id: "geo-u3-xmq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The most sustainable approach to managing tourism in an extreme environment is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "build the largest possible hotels" },
              { id: "b", text: "cap visitor numbers at carrying capacity and share revenue with local communities" },
              { id: "c", text: "ban all research and tourism permanently" },
              { id: "d", text: "allow unlimited visitors to maximise income" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Sustainable tourism management", statement: "Visitor caps at carrying capacity, designated routes and revenue-sharing balance use with conservation." },
            ],
            steps: [
              { reasoning: "Caps plus benefit-sharing protect ecosystems while supporting livelihoods.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cap visitors + revenue sharing",
            commonErrors: ["Assuming bans or unlimited access are the only options."],
          },
        },
        {
          id: "geo-u3-xmq16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Complete the following: (a) the year the Antarctic Treaty was signed; (b) the number of adaptation strategies named in the lesson.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Antarctic Treaty year", answer: 1959 },
              { label: "(b) Adaptation strategies", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Extreme environment management", statement: "Antarctic Treaty 1959; four adaptation strategies listed." },
            ],
            steps: [
              { reasoning: "The Antarctic Treaty was signed in 1959.", working: "1959", marks: 1, markCode: "A" },
              { reasoning: "Four strategies: protected areas, visitor limits, resilient infrastructure, mitigation.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1959$ (b) $4$",
            commonErrors: ["Counting mitigation as a fifth strategy or omitting it from the four."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olbio-u4-lesson-4-2",
  code: "4-2",
  title: "Transpiration and Translocation",
  goal: "I CAN explain transpiration, the transpiration stream, and translocation of organic substances in phloem.",
  standards: ["5090 4.3", "5090 4.4"],
  vocabulary: [
    { term: "Transpiration", definition: "Loss of water vapour from leaves through stomata." },
    { term: "Transpiration stream", definition: "Continuous column of water moving up xylem from roots to leaves." },
    { term: "Xylem", definition: "Vascular tissue transporting water and dissolved minerals upward." },
    { term: "Phloem", definition: "Vascular tissue transporting organic substances (sugars/amino acids) both directions." },
    { term: "Translocation", definition: "Transport of organic nutrients in phloem from sources to sinks." },
    { term: "Source", definition: "Where organic substances are produced/loaded into phloem (e.g. leaves)." },
    { term: "Sink", definition: "Where organic substances are used/stored (e.g. roots, fruits, growing tissues)." },
    { term: "Potometer", definition: "Apparatus measuring water uptake by a plant shoot as a proxy for transpiration." },
  ],
  concepts: [
    {
      id: "olbio-u4-transpiration",
      title: "Transpiration",
      skill: "Explain transpiration, the transpiration stream, and factors affecting its rate.",
      lesson: {
        sections: [
          {
            heading: "What and why",
            body: "Water evaporates from mesophyll cells into air spaces and diffuses out through stomata. This loss is not just wasted — it creates the pull that draws water up the xylem (transpiration stream) and keeps leaves cool.",
          },
          {
            heading: "The transpiration stream",
            body: "Cohesion (water molecules stick) + adhesion (water sticks to xylem walls) allow a continuous column of water to be pulled upward — no pump needed. Minerals dissolve and travel with it.",
          },
          {
            heading: "Factors affecting rate",
            body: "- **Light**: stomata open → faster.\n- **Temperature**: faster evaporation.\n- **Humidity**: drier air → faster.\n- **Wind**: removes moist air → faster.\n- **Soil water**: less available → slower.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does wilting occur on a hot, windy day?",
          solution: "Transpiration rate exceeds water uptake; cells lose turgor and the plant wilts.",
        },
      },
      questions: [
        {
          id: "olbio-u4-transpiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Through which structures does most water vapour leave a leaf?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem vessels" },
              { id: "b", text: "Stomata" },
              { id: "c", text: "Root hairs" },
              { id: "d", text: "Phloem tubes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration", statement: "Water vapour exits through stomata." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{stomata}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Stomata",
            commonErrors: ["Choosing xylem — xylem transports water up, not out of the leaf."],
          },
        },
        {
          id: "olbio-u4-transpiration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors that increase the rate of transpiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration factors", statement: "Light, temperature, wind, low humidity increase rate." },
            ],
            steps: [
              { reasoning: "Give two valid factors.", working: "\\text{light/temp/wind/humidity}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher light intensity, higher temperature, wind, or lower humidity (any two).",
            commonErrors: ["Saying 'more water in soil' increases rate — it does the opposite."],
          },
        },
        {
          id: "olbio-u4-transpiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how transpiration helps a plant absorb water and minerals from the soil.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration stream", statement: "Water loss at leaves pulls water column up xylem; cohesion/adhesion maintain continuity." },
            ],
            steps: [
              { reasoning: "Water evaporates from leaves.", working: "\\text{evaporation}", marks: 1, markCode: "M" },
              { reasoning: "Creates tension/pull on water column.", working: "\\text{pull/tension}", marks: 1, markCode: "M" },
              { reasoning: "Cohesion/adhesion keeps column continuous.", working: "\\text{cohesion/adhesion}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: water + dissolved minerals drawn up from roots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water loss through stomata creates tension that pulls the continuous water column up the xylem (cohesion/adhesion), drawing water and dissolved minerals from the soil.",
            commonErrors: ["Saying 'osmosis pushes water up' — it's transpiration pull."],
          },
        },
        {
          id: "olbio-u4-transpiration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures transpiration using a potometer under different conditions.",
          parts: [
            { label: "a", prompt: "Explain why water uptake by the shoot is used as a measure of transpiration.", marks: 2 },
            { label: "b", prompt: "Predict the effect of placing the potometer near a fan on the reading.", marks: 2 },
            { label: "c", prompt: "Explain the physiological reason for the effect in (b).", marks: 3 },
            { label: "d", prompt: "State one limitation of using a potometer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Potometer", statement: "Water uptake ≈ transpiration loss (approximately)." },
              { kind: "property", name: "Wind effect", statement: "Wind removes humid air → steeper gradient → faster transpiration." },
            ],
            steps: [
              { part: "a", reasoning: "Water lost from leaves is replaced by uptake.", working: "\\text{uptake = loss}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the assumption.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reading increases (faster uptake).", working: "\\text{increases}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State prediction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Wind removes moist air around leaf.", working: "\\text{removes moist air}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Steeper water potential gradient → faster diffusion.", working: "\\text{steeper gradient}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: transpiration rate increases.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Measures uptake, not actual evaporation (approximation).", working: "\\text{approximation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Or: gutted shoot has no roots/photosynthesis effects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) uptake replaces transpiration loss (b) increases (c) wind removes moist air → steeper gradient (d) measures uptake not evaporation directly",
            commonErrors: ["In (d) saying 'it is inaccurate' without specifying why."],
          },
        },
        {
          id: "olbio-u4-transpiration-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transpiration is the loss of water vapour from a plant through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem tubes" },
              { id: "b", text: "Stomata" },
              { id: "c", text: "Xylem vessels" },
              { id: "d", text: "Root hairs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration", statement: "Water vapour exits leaves through stomata." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{stomata}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Stomata",
            commonErrors: ["Choosing xylem — that transports water up, not out of the leaf."],
          },
        },
        {
          id: "olbio-u4-transpiration-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The transpiration stream moves through which tissue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem" },
              { id: "b", text: "Epidermis" },
              { id: "c", text: "Mesophyll" },
              { id: "d", text: "Phloem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration stream", statement: "Water column moves up xylem from roots to leaves." },
            ],
            steps: [
              { reasoning: "Match tissue to transport.", working: "\\text{xylem}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Xylem",
            commonErrors: ["Choosing phloem — that carries sucrose, not water up."],
          },
        },
        {
          id: "olbio-u4-transpiration-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does wind increase the rate of transpiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes moist air around the leaf, steepening the water potential gradient" },
              { id: "b", text: "It increases photosynthesis" },
              { id: "c", text: "It opens the stomata directly" },
              { id: "d", text: "It cools the leaf" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Wind effect", statement: "Wind removes humid boundary layer → steeper gradient → faster transpiration." },
            ],
            steps: [
              { reasoning: "Identify the mechanism.", working: "\\text{removes moist air}", marks: 1, markCode: "M" },
              { reasoning: "Link to gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It removes moist air around the leaf, steepening the water potential gradient",
            commonErrors: ["Saying wind 'pushes water out' — it increases the gradient."],
          },
        },
        {
          id: "olbio-u4-transpiration-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a potometer, the bubble moves 4 mm in 10 minutes. Calculate the rate of water uptake in mm min$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, unit: "mm min^{-1}", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = distance / time." },
            ],
            steps: [
              { reasoning: "Divide distance by time.", working: "\\frac{4}{10} = 0.4", marks: 1, markCode: "M" },
              { reasoning: "State the rate.", working: "0.4 \\text{ mm min}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.4 mm min$^{-1}$",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olbio-u4-transpiration-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A potometer bubble moves 5 mm in 10 minutes. (a) Calculate the rate of water uptake. (b) Calculate how far the bubble would move in 30 minutes at the same rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mm min^{-1}", tolerance: 0.01 },
              { label: "b", answer: 15, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = distance / time; distance = rate x time." },
            ],
            steps: [
              { reasoning: "(a) 5 / 10 = 0.5 mm min$^{-1}$.", working: "\\frac{5}{10} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "(b) 0.5 x 30 = 15 mm.", working: "0.5 \\times 30 = 15", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5 mm min$^{-1}$; (b) 15 mm",
            commonErrors: ["In (b) using 5 mm directly instead of scaling by rate."],
          },
        },
        {
          id: "olbio-u4-transpiration-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A potometer bubble moves 6 mm in 15 minutes. Calculate the rate of water uptake in mm min$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4, unit: "mm min^{-1}", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = distance / time." },
            ],
            steps: [
              { reasoning: "Divide distance by time.", working: "\\frac{6}{15} = 0.4", marks: 1, markCode: "M" },
              { reasoning: "State the rate.", working: "0.4 \\text{ mm min}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.4 mm min$^{-1}$",
            commonErrors: ["Dividing time by distance — check the formula."],
          },
        },
        {
          id: "olbio-u4-transpiration-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which condition would DECREASE the rate of transpiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bright light" },
              { id: "b", text: "High temperature" },
              { id: "c", text: "High humidity" },
              { id: "d", text: "Strong wind" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration factors", statement: "High humidity reduces the water potential gradient → slower transpiration." },
            ],
            steps: [
              { reasoning: "Identify the decreasing factor.", working: "\\text{high humidity}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** High humidity",
            commonErrors: ["Choosing wind — wind increases transpiration."],
          },
        },
        {
          id: "olbio-u4-transpiration-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'transpiration'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration", statement: "Loss of water vapour from leaves through stomata." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{water vapour loss}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The loss of water vapour from the leaves of a plant through the stomata.",
            commonErrors: ["Saying 'water loss from roots' — transpiration is from leaves."],
          },
        },
        {
          id: "olbio-u4-transpiration-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how transpiration pulls water up the xylem from roots to leaves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration pull", statement: "Water loss creates tension; cohesion/adhesion maintain continuous column." },
            ],
            steps: [
              { reasoning: "Water evaporates from leaf mesophyll and exits stomata.", working: "\\text{evaporation}", marks: 1, markCode: "M" },
              { reasoning: "Creates tension/pull on the water column.", working: "\\text{tension}", marks: 1, markCode: "M" },
              { reasoning: "Cohesion/adhesion keep the column continuous to roots.", working: "\\text{cohesion/adhesion}", marks: 1, markCode: "M" },
              { reasoning: "Water and dissolved minerals drawn up from soil.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water loss through stomata creates tension that pulls the continuous water column up the xylem (held together by cohesion and adhesion), drawing water and minerals from the soil.",
            commonErrors: ["Saying 'roots push water up' — transpiration pull is the main force."],
          },
        },
        {
          id: "olbio-u4-transpiration-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plant wilts on a hot, windy day because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata close permanently" },
              { id: "b", text: "Transpiration exceeds water uptake and cells lose turgor" },
              { id: "c", text: "The plant stops photosynthesising" },
              { id: "d", text: "Roots die" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Wilting", statement: "Water loss > uptake → loss of turgor → wilting." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{turgor loss}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Transpiration exceeds water uptake and cells lose turgor",
            commonErrors: ["Saying stomata close permanently — they may close but wilting is water deficit."],
          },
        },
        {
          id: "olbio-u4-transpiration-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the factors affecting the rate of transpiration.",
          parts: [
            { label: "a", prompt: "Name three factors that increase transpiration rate.", marks: 3 },
            { label: "b", prompt: "Explain the effect of one of these factors.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration factors", statement: "Light, temperature, wind, low humidity increase rate; soil water decreases it." },
            ],
            steps: [
              { part: "a", reasoning: "Any three of: light, temperature, wind, low humidity.", working: "\\text{light/temp/wind/humidity}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State three correctly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Choose one and describe effect.", working: "\\text{e.g. wind}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain mechanism (e.g. removes moist air).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light, temperature, wind, low humidity (any three) (b) e.g. wind removes moist air → faster evaporation",
            commonErrors: ["Listing factors without explaining any mechanism in (b)."],
          },
        },
        {
          id: "olbio-u4-transpiration-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student uses a potometer to compare transpiration of a shoot in three conditions: still air, under a fan, and in bright light.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict the effect of the fan on the bubble movement and explain why.", marks: 3 },
            { label: "c", prompt: "Predict the effect of bright light on the bubble movement and explain why.", marks: 3 },
            { label: "d", prompt: "State one control variable and why it matters.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Potometer", statement: "Bubble movement = water uptake ≈ transpiration." },
              { kind: "property", name: "Factors", statement: "Wind and light increase transpiration rate." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: environmental condition (wind/light).", working: "\\text{condition}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent: bubble movement / water uptake rate.", working: "\\text{bubble rate}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bubble moves faster.", working: "\\text{faster}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wind removes moist air → steeper gradient.", working: "\\text{gradient}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faster transpiration → faster uptake.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bubble moves faster.", working: "\\text{faster}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Light opens stomata / warms leaf.", working: "\\text{stomata open}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Faster transpiration.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control: temperature (or same shoot/time).", working: "\\text{temperature}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) condition / bubble rate (b) faster — wind steepens gradient (c) faster — light opens stomata (d) temperature constant",
            commonErrors: ["In (c) forgetting light also opens stomata via guard cells."],
          },
        },
      ],
    },
    {
      id: "olbio-u4-translocation",
      title: "Translocation",
      skill: "Describe translocation in phloem and explain source–sink relationships.",
      lesson: {
        sections: [
          {
            heading: "What moves",
            body: "Phloem transports **sucrose** (and amino acids) dissolved in water — products of photosynthesis — from **sources** (leaves) to **sinks** (roots, fruits, growing points).",
          },
          {
            heading: "Mechanism",
            body: "- Sucrose is **actively loaded** into phloem at sources (needs ATP).\n- High solute concentration → water enters by osmosis → high pressure.\n- Sap flows to sinks where sucrose is unloaded; pressure drops.\n- Water returns via xylem. (Pressure-flow hypothesis.)",
          },
          {
            heading: "Xylem vs phloem",
            body: "| Feature | Xylem | Phloem |\n|---|---|---|\n| Substance | water + minerals | sucrose/amino acids |\n| Direction | up only | both ways |\n| Driving force | transpiration pull | pressure gradient |\n| Living cells? | dead vessels | living sieve tubes |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do ring-barked trees die above the ring?",
          solution: "Removing phloem stops translocation of sugars downward — roots starve; also removes transport to roots.",
        },
      },
      questions: [
        {
          id: "olbio-u4-translocation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue transports sucrose in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem" },
              { id: "b", text: "Xylem" },
              { id: "c", text: "Cuticle" },
              { id: "d", text: "Mesophyll" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem", statement: "Transports sucrose/amino acids." },
            ],
            steps: [
              { reasoning: "Match tissue to cargo.", working: "\\text{phloem} \\to \\text{sucrose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Phloem",
            commonErrors: ["Choosing xylem — that's water/minerals."],
          },
        },
        {
          id: "olbio-u4-translocation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'source' and 'sink' in translocation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source/sink", statement: "Source: produces/loads sugars (leaves). Sink: uses/stores them (roots, fruits)." },
            ],
            steps: [
              { reasoning: "Define source.", working: "\\text{source = leaves}", marks: 1, markCode: "M" },
              { reasoning: "Define sink.", working: "\\text{sink = roots/fruits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Source: where organic substances are produced/loaded (e.g. leaves); sink: where they are used or stored (e.g. roots, fruits, growing tissues).",
            commonErrors: ["Reversing the terms."],
          },
        },
        {
          id: "olbio-u4-translocation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sucrose moves from a leaf (source) to a root (sink) in phloem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pressure-flow", statement: "Active loading → osmosis → high pressure at source → flow to sink." },
            ],
            steps: [
              { reasoning: "Sucrose actively loaded into phloem.", working: "\\text{active loading}", marks: 1, markCode: "M" },
              { reasoning: "Water enters by osmosis → pressure builds.", working: "\\text{osmosis/pressure}", marks: 1, markCode: "M" },
              { reasoning: "Sap flows down pressure gradient to sink.", working: "\\text{pressure gradient}", marks: 1, markCode: "M" },
              { reasoning: "Sucrose unloaded at sink; water returns via xylem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sucrose is actively loaded into phloem at the leaf; water enters by osmosis creating high pressure; sap flows to the sink where sucrose is unloaded and water returns via xylem.",
            commonErrors: ["Saying 'diffusion down a gradient' — it's pressure-driven bulk flow."],
          },
        },
        {
          id: "olbio-u4-translocation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the transport of substances in xylem and phloem.",
          parts: [
            { label: "a", prompt: "State what each tissue transports.", marks: 2 },
            { label: "b", prompt: "State the direction of flow in each.", marks: 2 },
            { label: "c", prompt: "Explain the driving force for each.", marks: 3 },
            { label: "d", prompt: "State one structural difference between the tissues.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Xylem vs phloem", statement: "Xylem: water/minerals, up, transpiration pull, dead vessels. Phloem: sucrose/AA, both ways, pressure gradient, living sieve tubes." },
            ],
            steps: [
              { part: "a", reasoning: "Xylem cargo.", working: "\\text{water + minerals}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Phloem cargo.", working: "\\text{sucrose/AA}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Xylem direction.", working: "\\text{up only}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Phloem direction.", working: "\\text{both ways}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Xylem force: transpiration pull.", working: "\\text{transpiration pull}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Phloem force: pressure gradient from active loading.", working: "\\text{pressure gradient}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete both explanations.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Xylem vessels dead/hollow; phloem sieve tubes living.", working: "\\text{dead vs living}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) xylem water/minerals, phloem sucrose/AA (b) xylem up, phloem both ways (c) transpiration pull vs pressure gradient (d) dead vessels vs living sieve tubes",
            commonErrors: ["In (c) saying phloem uses transpiration — it uses pressure flow."],
          },
        },
        {
          id: "olbio-u4-translocation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Phloem mainly transports which substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sucrose and amino acids" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Water and minerals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem cargo", statement: "Sucrose and amino acids — products of photosynthesis." },
            ],
            steps: [
              { reasoning: "Recall the cargo.", working: "\\text{sucrose/AA}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sucrose and amino acids",
            commonErrors: ["Choosing water/minerals — that is xylem."],
          },
        },
        {
          id: "olbio-u4-translocation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In translocation, a 'source' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where sucrose is produced and loaded into phloem" },
              { id: "b", text: "Where sucrose is used or stored" },
              { id: "c", text: "The roots only" },
              { id: "d", text: "The xylem vessels" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source", statement: "Where organic substances are produced/loaded — e.g. leaves." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{produces/loads}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Where sucrose is produced and loaded into phloem",
            commonErrors: ["Confusing with sink — sink uses/stores."],
          },
        },
        {
          id: "olbio-u4-translocation-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Translocation in phloem can move in which direction(s)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It does not move" },
              { id: "b", text: "Only upward" },
              { id: "c", text: "Both directions, from source to sink" },
              { id: "d", text: "Only downward" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem direction", statement: "Phloem transports both ways — source to sink." },
            ],
            steps: [
              { reasoning: "Recall direction.", working: "\\text{both ways}", marks: 1, markCode: "M" },
              { reasoning: "State source-to-sink.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Both directions, from source to sink",
            commonErrors: ["Saying 'up only' — that's xylem."],
          },
        },
        {
          id: "olbio-u4-translocation-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Phloem sap flows 10 cm along a stem in 2 hours. Calculate the speed of translocation in cm h$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "cm h^{-1}" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "Speed = distance / time." },
            ],
            steps: [
              { reasoning: "Divide distance by time.", working: "\\frac{10}{2} = 5", marks: 1, markCode: "M" },
              { reasoning: "State the speed.", working: "5 \\text{ cm h}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 cm h$^{-1}$",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olbio-u4-translocation-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Phloem sap flows at 5 cm h$^{-1}$ along a stem. (a) Calculate the distance it travels in 3 hours. (b) Calculate the distance it travels in 5 hours.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15, unit: "cm" },
              { label: "b", answer: 25, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "Distance = speed x time." },
            ],
            steps: [
              { reasoning: "(a) 5 x 3 = 15 cm.", working: "5 \\times 3 = 15", marks: 1, markCode: "M" },
              { reasoning: "(b) 5 x 5 = 25 cm.", working: "5 \\times 5 = 25", marks: 1, markCode: "M" },
              { reasoning: "State both distances.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15 cm; (b) 25 cm",
            commonErrors: ["Dividing by time instead of multiplying."],
          },
        },
        {
          id: "olbio-u4-translocation-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "At a sink, 50 sucrose molecules are unloaded from the phloem and 30 remain in the sap. Calculate the percentage of sucrose unloaded at the sink.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 62.5, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = unloaded / total x 100." },
            ],
            steps: [
              { reasoning: "Total = 50 + 30 = 80; percentage = 50/80 x 100.", working: "\\frac{50}{80} \\times 100 = 62.5\\%", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", working: "62.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62.5%",
            commonErrors: ["Using 50/30 or forgetting to add the remaining 30 to total."],
          },
        },
        {
          id: "olbio-u4-translocation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens if a ring of bark (containing phloem) is removed from a tree trunk?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translocation of sugars is disrupted and the tree may die above the ring" },
              { id: "b", text: "Water transport stops" },
              { id: "c", text: "Nothing happens" },
              { id: "d", text: "Photosynthesis stops immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ring-barking", statement: "Removing phloem stops sugar transport to roots — tree starves." },
            ],
            steps: [
              { reasoning: "Recall the effect.", working: "\\text{phloem removed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Translocation of sugars is disrupted and the tree may die above the ring",
            commonErrors: ["Saying water transport stops — xylem is deeper and unaffected."],
          },
        },
        {
          id: "olbio-u4-translocation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'translocation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translocation", statement: "Transport of organic nutrients in phloem from sources to sinks." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{phloem, source→sink}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The transport of organic substances such as sucrose and amino acids in the phloem from sources to sinks.",
            commonErrors: ["Confusing with transpiration — translocation is in phloem, not water loss."],
          },
        },
        {
          id: "olbio-u4-translocation-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the pressure-flow mechanism of translocation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pressure flow", statement: "Active loading → high solute → water enters → pressure gradient → flow to sink." },
            ],
            steps: [
              { reasoning: "Sucrose actively loaded into phloem at source.", working: "\\text{active loading}", marks: 1, markCode: "M" },
              { reasoning: "High solute lowers water potential → water enters by osmosis.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { reasoning: "High pressure at source pushes sap toward sink.", working: "\\text{pressure gradient}", marks: 1, markCode: "M" },
              { reasoning: "Sucrose unloaded at sink; pressure drops; water returns via xylem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sucrose is actively loaded into phloem at the source, lowering water potential so water enters by osmosis; the resulting high pressure drives sap flow to the sink where sucrose is unloaded and water returns via xylem.",
            commonErrors: ["Saying 'diffusion' — it is bulk flow driven by pressure."],
          },
        },
        {
          id: "olbio-u4-translocation-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a 'sink' in translocation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The phloem itself" },
              { id: "b", text: "A mature leaf in sunlight" },
              { id: "c", text: "A developing fruit" },
              { id: "d", text: "A photosynthesising leaf" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sink", statement: "Where organic substances are used or stored — fruits, roots, growing tissues." },
            ],
            steps: [
              { reasoning: "Identify the sink.", working: "\\text{fruit = sink}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A developing fruit",
            commonErrors: ["Choosing leaf — leaves are sources."],
          },
        },
        {
          id: "olbio-u4-translocation-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare sources and sinks in translocation.",
          parts: [
            { label: "a", prompt: "Define 'source' and 'sink'.", marks: 2 },
            { label: "b", prompt: "Give two examples of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Source vs sink", statement: "Source produces/loads sugars (leaves); sink uses/stores (roots, fruits, growing points)." },
            ],
            steps: [
              { part: "a", reasoning: "Source: produces/loads into phloem.", working: "\\text{source}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sink: uses/stores.", working: "\\text{sink}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Source examples: leaves, photosynthesising tissue.", working: "\\text{leaves}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sink examples: roots, fruits, seeds, growing tips.", working: "\\text{roots/fruits}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Give two of each.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) source produces/loads, sink uses/stores (b) sources: leaves; sinks: roots, fruits",
            commonErrors: ["Reversing the definitions."],
          },
        },
        {
          id: "olbio-u4-translocation-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student compares transport in xylem and phloem.",
          parts: [
            { label: "a", prompt: "State what each tissue transports.", marks: 2 },
            { label: "b", prompt: "State the direction of flow in each tissue.", marks: 2 },
            { label: "c", prompt: "Explain the driving force for each tissue.", marks: 3 },
            { label: "d", prompt: "State whether the cells of each tissue are alive or dead.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Xylem vs phloem", statement: "Xylem: water/minerals up, transpiration pull, dead vessels. Phloem: sucrose/AA both ways, pressure flow, living sieve tubes." },
            ],
            steps: [
              { part: "a", reasoning: "Xylem: water + dissolved minerals.", working: "\\text{xylem cargo}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Phloem: sucrose/amino acids.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Xylem: upward only.", working: "\\text{up}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Phloem: both directions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Xylem: transpiration pull.", working: "\\text{transpiration}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Phloem: pressure gradient from active loading.", working: "\\text{pressure}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete both explanations.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Xylem vessels: dead/hollow.", working: "\\text{dead}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Phloem sieve tubes: living.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) xylem water/minerals, phloem sucrose/AA (b) xylem up, phloem both ways (c) transpiration pull vs pressure flow (d) xylem dead, phloem living",
            commonErrors: ["In (c) saying phloem uses transpiration pull — it uses pressure flow."],
          },
        },
      ],
    },
    {
      id: "olbio-u4-guard-cells",
      title: "Guard cells and stomatal control",
      skill: "Explain how guard cells open and close stomata and their effect on transpiration and gas exchange.",
      lesson: {
        sections: [
          {
            heading: "Guard cells",
            body: "Two **kidney-shaped guard cells** surround each stoma. They contain chloroplasts (can photosynthesise) and control the pore's opening by changing shape.",
          },
          {
            heading: "Opening mechanism",
            body: "- Light → guard cells photosynthesise → produce sugars → **K⁺ ions** actively pumped in → water enters by osmosis → guard cells become **turgid** → bow apart → **stoma opens**.\n- Dark → K⁺ leaves → water leaves → guard cells flaccid → **stoma closes**.",
          },
          {
            heading: "Trade-off",
            body: "Open stomata allow CO₂ entry for photosynthesis but lose water. Plants balance gas exchange vs water conservation — e.g. CAM plants open stomata at night.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do stomata open during the day?",
          solution: "Light triggers guard cells to accumulate K⁺ and water, becoming turgid and opening the pore for CO₂ uptake — needed for photosynthesis.",
        },
      },
      questions: [
        {
          id: "olbio-u4-guard-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What controls the opening and closing of stomata?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem vessels" },
              { id: "b", text: "Phloem tubes" },
              { id: "c", text: "Guard cells" },
              { id: "d", text: "Root hairs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cells", statement: "Control stomatal opening via turgor." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{guard cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Guard cells",
            commonErrors: ["Choosing xylem — that's water transport, not pore control."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what happens to guard cells when a stoma opens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal opening", statement: "K⁺ uptake → water enters → turgid → pore opens." },
            ],
            steps: [
              { reasoning: "K⁺ and water enter.", working: "\\text{K}^+ + \\text{water}", marks: 1, markCode: "M" },
              { reasoning: "Guard cells become turgid → open.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Potassium ions are pumped in, water follows by osmosis, guard cells become turgid and bow apart, opening the stoma.",
            commonErrors: ["Saying 'stoma opens itself' — guard cells actively control it."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the trade-off plants face with stomatal opening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal trade-off", statement: "Open = CO₂ in but water lost; closed = save water but no photosynthesis." },
            ],
            steps: [
              { reasoning: "Open stomata allow CO₂ entry.", working: "\\text{CO}_2 \\text{ in}", marks: 1, markCode: "M" },
              { reasoning: "But water vapour lost (transpiration).", working: "\\text{water lost}", marks: 1, markCode: "M" },
              { reasoning: "Closed = water saved but no CO₂.", working: "\\text{closed}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: balance needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Open stomata let CO₂ in for photosynthesis but lose water vapour; closing them conserves water but stops CO₂ uptake — plants must balance gas exchange against water loss.",
            commonErrors: ["Only mentioning water loss — include the CO₂/photosynthesis benefit."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how guard cells control transpiration rate.",
          parts: [
            { label: "a", prompt: "Describe the structure of guard cells.", marks: 2 },
            { label: "b", prompt: "Explain how light causes stomata to open.", marks: 4 },
            { label: "c", prompt: "Explain how darkness causes stomata to close.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cells", statement: "Kidney-shaped, chloroplasts; K⁺/water → turgor → open/close." },
            ],
            steps: [
              { part: "a", reasoning: "Two kidney-shaped cells around stoma.", working: "\\text{kidney-shaped}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Contain chloroplasts.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Light → photosynthesis in guard cells.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "K⁺ pumped in actively.", working: "\\text{K}^+", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Water enters by osmosis → turgid.", working: "\\text{turgid}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cells bow apart → stoma opens.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No light → no photosynthesis.", working: "\\text{no light}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "K⁺ leaves → water leaves → flaccid.", working: "\\text{flaccid}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Guard cells collapse → stoma closes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) kidney-shaped cells with chloroplasts (b) light→photosynthesis→K⁺→water→turgid→open (c) dark→K⁺/water leave→flaccid→closed",
            commonErrors: ["In (b) forgetting K⁺ ions are actively pumped — it's not just photosynthesis."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Guard cells are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long cells in the leaf vein" },
              { id: "b", text: "Round cells surrounding each stoma" },
              { id: "c", text: "Two kidney-shaped cells surrounding each stoma" },
              { id: "d", text: "Cells in the root" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cells", statement: "Two kidney-shaped cells around each stoma; contain chloroplasts." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{kidney-shaped}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Two kidney-shaped cells surrounding each stoma",
            commonErrors: ["Choosing round — they are kidney-shaped."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A stoma opens when guard cells become:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dead" },
              { id: "b", text: "Turgid" },
              { id: "c", text: "Colourless" },
              { id: "d", text: "Flaccid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal opening", statement: "K⁺ + water enter → turgid → bow apart → open." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{turgid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Turgid",
            commonErrors: ["Choosing flaccid — that closes the stoma."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What happens to stomata at night and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They open wider to release oxygen" },
              { id: "b", text: "They stay the same" },
              { id: "c", text: "They close to absorb more CO₂" },
              { id: "d", text: "They close to conserve water when photosynthesis stops" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal rhythm", statement: "Dark → no photosynthesis in guard cells → K⁺/water leave → flaccid → closed." },
            ],
            steps: [
              { reasoning: "Recall night response.", working: "\\text{close}", marks: 1, markCode: "M" },
              { reasoning: "Link to water conservation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** They close to conserve water when photosynthesis stops",
            commonErrors: ["Saying they open at night — no light → guard cells flaccid → closed."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A leaf has 200 stomata. If 60% are open, calculate the number of open stomata.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120, unit: "stomata" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x total." },
            ],
            steps: [
              { reasoning: "Calculate 60% of 200.", working: "0.60 \\times 200 = 120", marks: 1, markCode: "M" },
              { reasoning: "State the number.", working: "120 \\text{ stomata}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120 open stomata",
            commonErrors: ["Multiplying by 60 instead of 0.60."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A leaf has 300 stomata. At midday 70% are open; at night all are closed. (a) Calculate the number open at midday. (b) Calculate the number closed at midday.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 210, unit: "stomata" },
              { label: "b", answer: 90, unit: "stomata" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x total; closed = total - open." },
            ],
            steps: [
              { reasoning: "(a) 0.70 x 300 = 210 open.", working: "0.70 \\times 300 = 210", marks: 1, markCode: "M" },
              { reasoning: "(b) 300 - 210 = 90 closed.", working: "300 - 210 = 90", marks: 1, markCode: "M" },
              { reasoning: "State both numbers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 210 open; (b) 90 closed",
            commonErrors: ["In (b) calculating 30% wrongly — 30% of 300 = 90."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Guard cells take up 500 K⁺ ions and lose 200 K⁺ ions during opening. Calculate the net gain of K⁺ ions.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "ions" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Net change", statement: "Net = uptake - loss." },
            ],
            steps: [
              { reasoning: "Subtract loss from uptake.", working: "500 - 200 = 300", marks: 1, markCode: "M" },
              { reasoning: "State the net gain.", working: "300 \\text{ ions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 ions",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Some desert plants (CAM plants) open their stomata at night. This is an adaptation to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Store water in leaves" },
              { id: "b", text: "Absorb more light" },
              { id: "c", text: "Increase photosynthesis at night" },
              { id: "d", text: "Reduce water loss while still taking in CO₂" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "CAM plants", statement: "Open stomata at night to reduce water loss in arid conditions." },
            ],
            steps: [
              { reasoning: "Recall the adaptation.", working: "\\text{night opening}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Reduce water loss while still taking in CO₂",
            commonErrors: ["Saying 'to photosynthesise at night' — photosynthesis needs light."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'guard cells'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Guard cells", statement: "Two kidney-shaped cells surrounding a stoma that control its opening." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{control stoma}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two kidney-shaped cells that surround each stoma and control its opening by changing turgor.",
            commonErrors: ["Saying they 'are the stoma' — they surround and control it."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the mechanism by which light causes a stoma to open.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal opening", statement: "Light → photosynthesis → K⁺ uptake → water enters → turgid → open." },
            ],
            steps: [
              { reasoning: "Light triggers photosynthesis in guard cells.", working: "\\text{light/photosynthesis}", marks: 1, markCode: "M" },
              { reasoning: "K⁺ ions actively pumped in.", working: "\\text{K}^+", marks: 1, markCode: "M" },
              { reasoning: "Water follows by osmosis → cells become turgid.", working: "\\text{turgid}", marks: 1, markCode: "M" },
              { reasoning: "Turgid cells bow apart → stoma opens.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light triggers photosynthesis in guard cells; K⁺ ions are pumped in, water follows by osmosis, cells become turgid and bow apart, opening the stoma.",
            commonErrors: ["Forgetting K⁺ — osmosis alone doesn't explain the ion uptake."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Guard cells contain which organelle that helps them respond to light?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chloroplasts" },
              { id: "b", text: "Mitochondria only" },
              { id: "c", text: "Nucleus only" },
              { id: "d", text: "Vacuoles only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell chloroplasts", statement: "Guard cells photosynthesise to produce sugars/K⁺ for opening." },
            ],
            steps: [
              { reasoning: "Recall the organelle.", working: "\\text{chloroplasts}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chloroplasts",
            commonErrors: ["Choosing mitochondria — chloroplasts are the light-responsive ones."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the trade-off plants face in controlling their stomata.",
          parts: [
            { label: "a", prompt: "State the benefit of open stomata.", marks: 2 },
            { label: "b", prompt: "State the cost of open stomata.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal trade-off", statement: "Open = CO₂ in for photosynthesis but water lost; closed = save water but no CO₂." },
            ],
            steps: [
              { part: "a", reasoning: "CO₂ enters for photosynthesis.", working: "\\text{CO}_2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Allows glucose production/growth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water vapour lost by transpiration.", working: "\\text{water loss}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk of wilting/drought stress.", working: "\\text{wilting}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plants must balance gas exchange vs water conservation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CO₂ entry for photosynthesis (b) water loss via transpiration — balance needed",
            commonErrors: ["Only mentioning water loss — include the CO₂/photosynthesis benefit."],
          },
        },
        {
          id: "olbio-u4-guard-cells-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates how light and dark affect stomatal opening using a leaf peel under a microscope.",
          parts: [
            { label: "a", prompt: "Describe what the student would observe in light vs dark.", marks: 3 },
            { label: "b", prompt: "Explain the mechanism behind the light observation.", marks: 3 },
            { label: "c", prompt: "Explain the mechanism behind the dark observation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal control", statement: "Light → K⁺/water in → turgid → open; dark → K⁺/water out → flaccid → closed." },
            ],
            steps: [
              { part: "a", reasoning: "Light: stomata open.", working: "\\text{open}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dark: stomata closed.", working: "\\text{closed}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both observations.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Light → guard cell photosynthesis.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "K⁺ pumped in → water follows → turgid.", working: "\\text{K}^+ \\to \\text{turgid}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cells bow apart → pore opens.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No light → no photosynthesis.", working: "\\text{no light}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "K⁺ and water leave → flaccid.", working: "\\text{flaccid}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cells collapse → pore closes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) open in light, closed in dark (b) light→photosynthesis→K⁺→turgid→open (c) dark→K⁺/water leave→flaccid→closed",
            commonErrors: ["In (b) omitting K⁺ uptake — photosynthesis alone doesn't open the pore."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u4-transport-notes",
      title: "Transpiration and translocation — revision notes",
      summary: "Transpiration stream, factors, and translocation in phloem.",
      sections: [
        {
          heading: "Transpiration",
          body: "Water vapour exits via stomata; creates pull drawing water up xylem (cohesion/adhesion). Rate ↑ with light, temperature, wind, low humidity.",
        },
        {
          heading: "Translocation",
          body: "Phloem carries sucrose from sources (leaves) to sinks (roots/fruits) via pressure-flow: active loading → osmosis → pressure gradient.",
        },
        {
          heading: "Exam technique",
          body: "- Xylem = water/minerals, up, transpiration pull. Phloem = sucrose, both ways, pressure flow.\n- Transpiration pull needs cohesion (water-water) and adhesion (water-xylem).",
        },
      ],
    },
  ],
};

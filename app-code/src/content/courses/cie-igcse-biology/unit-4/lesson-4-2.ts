import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieb-u4-lesson-4-2",
  code: "4-2",
  title: "Transpiration and Translocation",
  goal: "I CAN explain transpiration, the transpiration stream, and translocation of organic substances in phloem.",
  standards: ["0653 4.3", "0653 4.4"],
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
      id: "cieb-u4-transpiration",
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
          id: "cieb-u4-transpiration-q1",
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
          id: "cieb-u4-transpiration-q2",
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
          id: "cieb-u4-transpiration-q3",
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
          id: "cieb-u4-transpiration-q4",
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
          id: "cieb-u4-transpiration-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Transpiration is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transport of sugars in phloem" },
              { id: "b", text: "Loss of water vapour from leaves through stomata" },
              { id: "c", text: "Uptake of minerals by active transport" },
              { id: "d", text: "Absorption of water by root hairs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transpiration", statement: "Water vapour loss from aerial parts via stomata." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{water vapour out via stomata}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Loss of water vapour from leaves through stomata",
            commonErrors: ["Confusing with root water uptake or phloem transport."],
          },
        },
        {
          id: "cieb-u4-transpiration-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which condition would DECREASE the rate of transpiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High humidity" },
              { id: "b", text: "High temperature" },
              { id: "c", text: "Strong wind" },
              { id: "d", text: "Bright light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration factors", statement: "High humidity reduces the water potential gradient → slower transpiration." },
            ],
            steps: [
              { reasoning: "Identify the factor that slows evaporation.", working: "\\text{high humidity}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** High humidity",
            commonErrors: ["Choosing wind/light — those increase the rate."],
          },
        },
        {
          id: "cieb-u4-transpiration-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "One important benefit of transpiration for a plant is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loads sucrose into phloem" },
              { id: "b", text: "Creates the pull that draws water up the xylem" },
              { id: "c", text: "Produces glucose directly" },
              { id: "d", text: "Opens the stomata" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration stream", statement: "Water loss pulls the xylem column upward." },
            ],
            steps: [
              { reasoning: "Link transpiration to water transport.", working: "\\text{pull} \\to \\text{xylem}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Creates the pull that draws water up the xylem",
            commonErrors: ["Choosing 'produces glucose' — transpiration moves water, not synthesise food."],
          },
        },
        {
          id: "cieb-u4-transpiration-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A potometer reading rises by 3 mm in 10 minutes. Calculate the rate of water uptake in mm per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3, unit: "mm/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{change}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide change by time.", working: "\\frac{3}{10}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "0.3\\,\\text{mm/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3 mm/min",
            commonErrors: ["Inverting (10/3) or forgetting units."],
          },
        },
        {
          id: "cieb-u4-transpiration-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant shoot takes up 45 cm³ of water in 15 minutes. Calculate the rate of water uptake in cm³ per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "cm³/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{volume}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide volume by time.", working: "\\frac{45}{15}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "3\\,\\text{cm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 cm³/min",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "cieb-u4-transpiration-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At 25 °C the transpiration rate is 20 units. At 35 °C it is 30 units. Calculate the increase in rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Change", statement: "$30 - 20 = 10$" },
            ],
            steps: [
              { reasoning: "Subtract the two rates.", working: "30 - 20 = 10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10 units",
            commonErrors: ["Giving the percentage (50%) instead of the absolute increase."],
          },
        },
        {
          id: "cieb-u4-transpiration-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Placing a plant near a fan increases its transpiration rate from 30 to 45 units. Calculate the percentage increase and name the factor responsible.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ increase} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{45 - 30}{30} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "50\\%", marks: 1, markCode: "M" },
              { reasoning: "Name the factor: wind.", working: "\\text{wind}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50% increase — caused by wind.",
            commonErrors: ["Dividing by 45 instead of 30 (the original value)."],
          },
        },
        {
          id: "cieb-u4-transpiration-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two benefits of transpiration for a plant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Benefits of transpiration", statement: "Drives water uptake; cools leaves." },
            ],
            steps: [
              { reasoning: "Give two benefits.", working: "\\text{water uptake; cooling}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transpiration pulls water and dissolved minerals up the xylem from the roots, and the evaporation of water helps cool the leaves.",
            commonErrors: ["Saying transpiration is 'just water loss' — it has transport and cooling functions."],
          },
        },
        {
          id: "cieb-u4-transpiration-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A plant wilts on a hot, windy day mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata open wider" },
              { id: "b", text: "Photosynthesis stops completely" },
              { id: "c", text: "Roots absorb extra water" },
              { id: "d", text: "Water loss by transpiration exceeds uptake, so cells lose turgor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Wilting", statement: "Transpiration > uptake → loss of turgor → wilt." },
            ],
            steps: [
              { reasoning: "Link heat/wind to water deficit.", working: "\\text{loss} > \\text{uptake} \\to \\text{wilt}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Water loss by transpiration exceeds uptake, so cells lose turgor",
            commonErrors: ["Choosing 'photosynthesis stops' — wilting is a water/turgor problem."],
          },
        },
        {
          id: "cieb-u4-transpiration-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which plant tissue carries water from the roots up to the leaves?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem" },
              { id: "b", text: "Epidermis" },
              { id: "c", text: "Phloem" },
              { id: "d", text: "Mesophyll" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Xylem", statement: "Transports water and minerals upward." },
            ],
            steps: [
              { reasoning: "Match tissue to cargo.", working: "\\text{xylem} \\to \\text{water up}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Xylem",
            commonErrors: ["Choosing phloem — that carries sugars, not water."],
          },
        },
        {
          id: "cieb-u4-transpiration-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the transpiration stream, 'cohesion' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules sticking to xylem walls" },
              { id: "b", text: "Roots absorbing minerals" },
              { id: "c", text: "Sugars moving through phloem" },
              { id: "d", text: "Water molecules sticking to each other" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cohesion", statement: "Water-water attraction keeping the column continuous." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{cohesion} = \\text{water-water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Water molecules sticking to each other",
            commonErrors: ["Confusing with adhesion (water sticking to xylem walls)."],
          },
        },
        {
          id: "cieb-u4-transpiration-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how wind and low humidity each increase the rate of transpiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration factors", statement: "Wind and low humidity steepen the water potential gradient at the leaf surface." },
            ],
            steps: [
              { reasoning: "Wind removes moist air around the leaf.", working: "\\text{wind removes moist air}", marks: 1, markCode: "M" },
              { reasoning: "Low humidity means drier surrounding air.", working: "\\text{dry air}", marks: 1, markCode: "M" },
              { reasoning: "Both steepen the water potential gradient → faster evaporation/diffusion.", working: "\\text{steeper gradient}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: transpiration rate increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wind blows away the humid air layer around the leaf and low humidity means drier air; both steepen the water potential gradient so water evaporates and diffuses out of stomata faster.",
            commonErrors: ["Saying wind 'pushes water out' — it removes humid air, increasing the gradient."],
          },
        },
      ],
    },
    {
      id: "cieb-u4-translocation",
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
          id: "cieb-u4-translocation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue transports sucrose in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phloem" },
              { id: "b", text: "Cuticle" },
              { id: "c", text: "Mesophyll" },
              { id: "d", text: "Xylem" },
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
          id: "cieb-u4-translocation-q2",
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
          id: "cieb-u4-translocation-q3",
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
          id: "cieb-u4-translocation-q4",
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
          id: "cieb-u4-translocation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Phloem transports organic substances:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only upward from roots" },
              { id: "b", text: "Randomly through the plant" },
              { id: "c", text: "From sources to sinks, in either direction" },
              { id: "d", text: "Only downward to roots" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem direction", statement: "Both directions — sources to sinks." },
            ],
            steps: [
              { reasoning: "Recall phloem transport pattern.", working: "\\text{source} \\to \\text{sink}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** From sources to sinks, in either direction",
            commonErrors: ["Saying 'up only' — that is xylem."],
          },
        },
        {
          id: "cieb-u4-translocation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main carbohydrate transported in phloem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sucrose" },
              { id: "b", text: "Cellulose" },
              { id: "c", text: "Glucose only" },
              { id: "d", text: "Starch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem cargo", statement: "Sucrose (and amino acids) dissolved in water." },
            ],
            steps: [
              { reasoning: "Recall the transported sugar.", working: "\\text{sucrose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sucrose",
            commonErrors: ["Choosing glucose — sucrose is the transport form."],
          },
        },
        {
          id: "cieb-u4-translocation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In translocation, a 'sink' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of root hair" },
              { id: "b", text: "The source of water" },
              { id: "c", text: "Where photosynthesis occurs" },
              { id: "d", text: "A part of the plant where sugars are used or stored, e.g. roots" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sink", statement: "Where organic substances are used/stored (roots, fruits, growing tissues)." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{sink} = \\text{use/store}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A part of the plant where sugars are used or stored, e.g. roots",
            commonErrors: ["Reversing with 'source' — source produces/loads sugars."],
          },
        },
        {
          id: "cieb-u4-translocation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A phloem sieve tube transports 12 g of sucrose in 4 hours. Calculate the rate of transport in g per hour.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "g/h" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{amount}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide amount by time.", working: "\\frac{12}{4}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "3\\,\\text{g/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 g/h",
            commonErrors: ["Multiplying instead of dividing, or omitting units."],
          },
        },
        {
          id: "cieb-u4-translocation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A leaf produces 60 mg of sugar. Of this, 45 mg is transported to the roots. Calculate the percentage of sugar transported.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\% = \\dfrac{45}{60} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{45}{60} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Using 15 mg (the remainder) as the numerator."],
          },
        },
        {
          id: "cieb-u4-translocation-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In how many directions can phloem transport substances (compared with xylem)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "directions" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem direction", statement: "Phloem transports both ways; xylem only upward." },
            ],
            steps: [
              { reasoning: "Recall phloem's bidirectional flow.", working: "\\text{both ways} = 2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 (both directions)",
            commonErrors: ["Answering 1 — confusing with xylem's upward-only flow."],
          },
        },
        {
          id: "cieb-u4-translocation-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Phloem sap flows at 5 mm per minute from a leaf to a root 250 mm away. Calculate the time taken for the sap to reach the root.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}}$" },
            ],
            steps: [
              { reasoning: "Divide distance by speed.", working: "\\frac{250}{5}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "50\\,\\text{min}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 minutes",
            commonErrors: ["Multiplying 250 × 5 instead of dividing."],
          },
        },
        {
          id: "cieb-u4-translocation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between transport in xylem and transport in phloem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Xylem vs phloem", statement: "Xylem: water/minerals, up only. Phloem: sucrose/AA, both ways." },
            ],
            steps: [
              { reasoning: "Give two valid differences.", working: "\\text{substance; direction}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Xylem transports water and minerals upward only; phloem transports sucrose and amino acids in both directions between sources and sinks.",
            commonErrors: ["Saying phloem carries water — that is xylem."],
          },
        },
        {
          id: "cieb-u4-translocation-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A tree that has been 'ringed' (a band of bark/phloem removed) will die because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata stop working" },
              { id: "b", text: "Sugars can no longer be transported down to the roots" },
              { id: "c", text: "Water cannot move up the xylem" },
              { id: "d", text: "Roots stop absorbing water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ring barking", statement: "Removing phloem blocks translocation of sugars to roots." },
            ],
            steps: [
              { reasoning: "Link phloem removal to starvation of roots.", working: "\\text{no phloem} \\to \\text{no sugars to roots}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sugars can no longer be transported down to the roots",
            commonErrors: ["Saying 'water can't move' — xylem is unaffected by ringing."],
          },
        },
        {
          id: "cieb-u4-translocation-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Loading sucrose into phloem at a source requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only diffusion" },
              { id: "b", text: "Energy (ATP) via active transport" },
              { id: "c", text: "Sunlight directly" },
              { id: "d", text: "No energy at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phloem loading", statement: "Active transport of sucrose needs ATP." },
            ],
            steps: [
              { reasoning: "Recall the loading mechanism.", working: "\\text{active transport} + \\text{ATP}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Energy (ATP) via active transport",
            commonErrors: ["Saying 'only diffusion' — loading is against the gradient and needs energy."],
          },
        },
        {
          id: "cieb-u4-translocation-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Translocation of organic substances in plants occurs in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cuticle" },
              { id: "b", text: "Xylem" },
              { id: "c", text: "Epidermis" },
              { id: "d", text: "Phloem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Translocation tissue", statement: "Phloem sieve tubes carry the sap." },
            ],
            steps: [
              { reasoning: "Recall the tissue.", working: "\\text{phloem}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Phloem",
            commonErrors: ["Choosing xylem — that is for water/minerals."],
          },
        },
        {
          id: "cieb-u4-translocation-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the pressure-flow mechanism that moves sugars from a leaf (source) to a root (sink) in phloem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pressure-flow hypothesis", statement: "Active loading → osmosis → high pressure at source → flow to sink." },
            ],
            steps: [
              { reasoning: "Sucrose is actively loaded into sieve tubes at the source.", working: "\\text{active loading}", marks: 1, markCode: "M" },
              { reasoning: "Water enters by osmosis → high turgor pressure at source.", working: "\\text{high pressure}", marks: 1, markCode: "M" },
              { reasoning: "Sap flows along the pressure gradient to the sink.", working: "\\text{pressure gradient}", marks: 1, markCode: "M" },
              { reasoning: "Sucrose is unloaded at sink; water returns via xylem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sucrose is actively loaded into phloem at the leaf; water follows by osmosis creating high pressure; sap flows down the pressure gradient to the sink where sucrose is unloaded and water returns through the xylem.",
            commonErrors: ["Describing simple diffusion — translocation is bulk flow driven by pressure."],
          },
        },
      ],
    },
    {
      id: "cieb-u4-guard-cells",
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
          id: "cieb-u4-guard-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What controls the opening and closing of stomata?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem vessels" },
              { id: "b", text: "Guard cells" },
              { id: "c", text: "Root hairs" },
              { id: "d", text: "Phloem tubes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cells", statement: "Control stomatal opening via turgor." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{guard cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Guard cells",
            commonErrors: ["Choosing xylem — that's water transport, not pore control."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q2",
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
          id: "cieb-u4-guard-cells-q3",
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
          id: "cieb-u4-guard-cells-q4",
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
          id: "cieb-u4-guard-cells-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Guard cells are typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Round and flat" },
              { id: "b", text: "Kidney-shaped" },
              { id: "c", text: "Long and thin like xylem" },
              { id: "d", text: "Irregular and spiky" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell shape", statement: "Two kidney-shaped cells flanking each stoma." },
            ],
            steps: [
              { reasoning: "Recall the shape.", working: "\\text{kidney-shaped}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Kidney-shaped",
            commonErrors: ["Describing a generic cell shape — guard cells are specifically kidney-shaped."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ion is actively pumped into guard cells to help open the stoma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calcium (Ca²⁺)" },
              { id: "b", text: "Chloride only" },
              { id: "c", text: "Sodium (Na⁺)" },
              { id: "d", text: "Potassium (K⁺)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell opening", statement: "K⁺ uptake lowers water potential → water enters → turgid." },
            ],
            steps: [
              { reasoning: "Recall the ion involved.", working: "\\text{K}^+", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Potassium (K⁺)",
            commonErrors: ["Choosing sodium — the key ion is potassium."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Guard cells contain which organelle that lets them photosynthesise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus only" },
              { id: "b", text: "Mitochondria only" },
              { id: "c", text: "Vacuoles only" },
              { id: "d", text: "Chloroplasts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell organelles", statement: "Chloroplasts enable photosynthesis in guard cells." },
            ],
            steps: [
              { reasoning: "Recall the organelle.", working: "\\text{chloroplasts}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Chloroplasts",
            commonErrors: ["Choosing mitochondria — those respire, not photosynthesise."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Stomata open at 06:00 and close at 18:00. Calculate how many hours the stomata are open.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Duration", statement: "$18 - 6 = 12$" },
            ],
            steps: [
              { reasoning: "Subtract opening from closing time.", working: "18 - 6", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "12\\,\\text{h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 hours",
            commonErrors: ["Counting inclusively as 13 hours."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A stoma's aperture increases from 2 µm to 8 µm. Calculate the percentage increase in aperture.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\% = \\dfrac{8 - 2}{2} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{8 - 2}{2} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "300\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300%",
            commonErrors: ["Dividing by 8 instead of the original 2."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many guard cells surround each stoma?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "cells" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell pair", statement: "Each stoma is flanked by two guard cells." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "2\\,\\text{guard cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — each pore has a pair."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A leaf's stomata are 25% open at dawn and 75% open at midday. Calculate the percentage increase in opening.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\% = \\dfrac{75 - 25}{25} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{75 - 25}{25} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "200\\%", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200%",
            commonErrors: ["Subtracting to get 50 percentage points instead of a percentage increase."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors that cause stomata to open.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal opening", statement: "Light and water availability trigger opening via turgor." },
            ],
            steps: [
              { reasoning: "Give two factors.", working: "\\text{light; water}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light (triggering K⁺ uptake and photosynthesis in guard cells) and adequate water supply.",
            commonErrors: ["Saying 'darkness opens them' — darkness closes stomata."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Stomata tend to close at night mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Store extra oxygen" },
              { id: "b", text: "Allow more light in" },
              { id: "c", text: "Conserve water, since photosynthesis (and CO₂ need) is not occurring" },
              { id: "d", text: "Increase transpiration" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal closure at night", statement: "No light → no CO₂ needed → close to save water." },
            ],
            steps: [
              { reasoning: "Link night closure to water conservation.", working: "\\text{no photosynthesis} \\to \\text{close} \\to \\text{save water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Conserve water, since photosynthesis (and CO₂ need) is not occurring",
            commonErrors: ["Saying 'to let more light in' — closed pores do the opposite."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When guard cells become flaccid, the stoma:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays unchanged" },
              { id: "b", text: "Disappears" },
              { id: "c", text: "Closes" },
              { id: "d", text: "Opens wider" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell turgor", statement: "Turgid → open; flaccid → closed." },
            ],
            steps: [
              { reasoning: "Recall the turgor link.", working: "\\text{flaccid} \\to \\text{closed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Closes",
            commonErrors: ["Reversing — turgidity opens the pore."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Guard cells change shape and open the stoma because of a change in their:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water content / turgor" },
              { id: "b", text: "Cell wall thickness" },
              { id: "c", text: "Colour" },
              { id: "d", text: "Number of cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cell mechanism", statement: "Water entry → turgid → bow apart → open." },
            ],
            steps: [
              { reasoning: "Recall the driving change.", working: "\\text{turgor}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water content / turgor",
            commonErrors: ["Thinking the pore opens by 'muscle contraction' — it is turgor-driven."],
          },
        },
        {
          id: "cieb-u4-guard-cells-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the mechanism by which light causes a stoma to open.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Light-induced opening", statement: "Light → guard cell photosynthesis → K⁺ uptake → water enters → turgid → open." },
            ],
            steps: [
              { reasoning: "Light triggers photosynthesis in guard cells.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { reasoning: "K⁺ ions are actively pumped into the guard cells.", working: "\\text{K}^+", marks: 1, markCode: "M" },
              { reasoning: "Water follows by osmosis → cells become turgid and bow apart.", working: "\\text{turgid}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: stoma opens for CO₂ uptake.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light makes guard cells photosynthesise; potassium ions are actively pumped in, water enters by osmosis, the cells become turgid and bow apart, opening the stoma to allow CO₂ entry for photosynthesis.",
            commonErrors: ["Omitting the K⁺ step — water entry depends on the ion uptake first."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u4-transport-notes",
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

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
              { id: "a", text: "Stomata" },
              { id: "b", text: "Xylem vessels" },
              { id: "c", text: "Phloem tubes" },
              { id: "d", text: "Root hairs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transpiration", statement: "Water vapour exits through stomata." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{stomata}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stomata",
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
              { id: "b", text: "Xylem" },
              { id: "c", text: "Mesophyll" },
              { id: "d", text: "Cuticle" },
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
              { id: "a", text: "Guard cells" },
              { id: "b", text: "Xylem vessels" },
              { id: "c", text: "Root hairs" },
              { id: "d", text: "Phloem tubes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Guard cells", statement: "Control stomatal opening via turgor." },
            ],
            steps: [
              { reasoning: "Recall the structure.", working: "\\text{guard cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Guard cells",
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

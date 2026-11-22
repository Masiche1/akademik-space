import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieb-u3-lesson-3-1",
  code: "3-1",
  title: "Photosynthesis and Plant Nutrition",
  goal: "I CAN describe photosynthesis, the leaf structure that supports it, limiting factors, and mineral requirements of plants.",
  standards: ["0653 3.1", "0653 3.2", "0653 3.3"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Process by which green plants use light energy to make glucose from CO₂ and water." },
    { term: "Chlorophyll", definition: "Green pigment in chloroplasts that absorbs light energy." },
    { term: "Stoma (pl. stomata)", definition: "Pore in leaf epidermis for gas exchange, controlled by guard cells." },
    { term: "Limiting factor", definition: "Factor that limits the rate of a reaction when in short supply: light, CO₂, temperature." },
    { term: "Nitrate ions", definition: "Mineral ions needed for amino acids/protein; deficiency causes stunted growth." },
    { term: "Magnesium ions", definition: "Needed to make chlorophyll; deficiency causes yellowing leaves." },
  ],
  concepts: [
    {
      id: "cieb-u3-photosynthesis",
      title: "Photosynthesis",
      skill: "Write the photosynthesis equation, describe leaf adaptations, and explain limiting factors.",
      lesson: {
        sections: [
          {
            heading: "Equation and site",
            body: "\n**6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂** (light energy, chlorophyll)\n\nOccurs in **chloroplasts**. Light energy trapped by chlorophyll is used to convert carbon dioxide and water into glucose; oxygen is released as a waste product.",
          },
          {
            heading: "Leaf adaptations",
            body: "- **Broad, thin** → large surface area for light absorption.\n- **Chloroplasts** concentrated in palisade mesophyll near upper surface.\n- **Stomata** on lower surface → gas exchange with less water loss.\n- **Veins** → transport of water/glucose.\n- **Waxy cuticle** → reduces water loss.",
          },
          {
            heading: "Limiting factors",
            body: "Rate increases with light intensity and CO₂ concentration up to a maximum, then plateaus. Temperature increases rate until enzymes denature (~45°C+). One factor in short supply limits the whole rate.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does the rate of photosynthesis plateau at high light intensity?",
          solution: "Light is no longer limiting — another factor (CO₂ or temperature) is now in short supply and limits the rate.",
        },
      },
      questions: [
        {
          id: "cieb-u3-photosynthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is released during photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Photosynthesis products", statement: "Glucose produced; oxygen released." },
            ],
            steps: [
              { reasoning: "Recall the equation.", working: "\\text{O}_2 \\text{ released}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Choosing carbon dioxide — that's a reactant."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the equation for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis equation", statement: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll)." },
            ],
            steps: [
              { reasoning: "Give reactants and products.", working: "\\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{glucose} + \\text{O}_2", marks: 1, markCode: "M" },
              { reasoning: "Include balanced coefficients or conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (using light energy and chlorophyll).",
            commonErrors: ["Forgetting oxygen as a product or writing it on the wrong side."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of a leaf is adapted for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Leaf adaptations", statement: "Broad/thin for light; stomata for gas exchange; veins for transport; chloroplasts in palisade." },
            ],
            steps: [
              { reasoning: "Surface area adaptation.", working: "\\text{broad/thin}", marks: 1, markCode: "M" },
              { reasoning: "Gas exchange adaptation.", working: "\\text{stomata}", marks: 1, markCode: "M" },
              { reasoning: "Distribution of chloroplasts.", working: "\\text{palisade layer}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation with link to function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Broad thin leaf maximises light absorption; stomata allow CO₂ entry/O₂ exit; palisade cells packed with chloroplasts; veins transport raw materials and products.",
            commonErrors: ["Listing features without linking to photosynthesis."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of light intensity on photosynthesis using pondweed and counting oxygen bubbles.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe two control variables and why they matter.", marks: 3 },
            { label: "c", prompt: "Explain why sodium hydrogencarbonate is added to the water.", marks: 2 },
            { label: "d", prompt: "Describe the expected graph of bubble rate against light intensity and explain its shape.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pondweed experiment", statement: "Vary light; count O₂ bubbles as proxy for photosynthesis rate." },
              { kind: "property", name: "Limiting factors", statement: "Rate rises then plateaus when light stops being limiting." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: light intensity. Dependent: rate of O₂ bubbles.", working: "\\text{light vs bubbles}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Control: temperature (affects enzyme rate).", working: "\\text{temperature}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Control: CO₂ concentration / distance of lamp consistency.", working: "\\text{CO}_2/\\text{distance}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain: prevents other factors confounding results.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Provides CO₂ (reactant) for photosynthesis.", working: "\\text{CO}_2 \\text{ source}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Without it photosynthesis would be CO₂-limited.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Linear rise then plateau.", working: "\\text{rise then plateau}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Plateau: another factor becomes limiting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light intensity / bubble rate (b) temperature, CO₂ (c) supplies CO₂ reactant (d) linear rise then plateau — light no longer limiting",
            commonErrors: ["In (d) expecting a curve that keeps rising."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pigment absorbs light energy during photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Haemoglobin" },
              { id: "b", text: "Melanin" },
              { id: "c", text: "Chlorophyll" },
              { id: "d", text: "Keratin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Chlorophyll", statement: "Green pigment in chloroplasts that traps light energy." },
            ],
            steps: [
              { reasoning: "Recall the pigment.", working: "\\text{chlorophyll}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chlorophyll",
            commonErrors: ["Choosing haemoglobin — that carries oxygen in blood."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which cell structure does photosynthesis mainly occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondrion" },
              { id: "b", text: "Vacuole" },
              { id: "c", text: "Chloroplast" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Site of photosynthesis", statement: "Chloroplasts contain chlorophyll." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{chloroplast}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chloroplast",
            commonErrors: ["Choosing mitochondrion — that's the site of respiration."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The rate of photosynthesis levels off at high light intensity because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The leaf stops absorbing light" },
              { id: "b", text: "Oxygen production stops the reaction" },
              { id: "c", text: "Chlorophyll is destroyed" },
              { id: "d", text: "Another factor, such as CO₂ or temperature, has become limiting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Limiting factors", statement: "The factor in shortest supply limits the whole rate." },
            ],
            steps: [
              { reasoning: "Recall the plateau explanation.", working: "\\text{another factor limiting}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Another factor, such as CO₂ or temperature, has become limiting",
            commonErrors: ["Saying 'light stops working' — light is still available, it just isn't limiting anymore."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which leaf feature most reduces water loss by evaporation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata" },
              { id: "b", text: "Palisade layer" },
              { id: "c", text: "Veins" },
              { id: "d", text: "Waxy cuticle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Waxy cuticle", statement: "Waterproof layer reducing evaporation." },
            ],
            steps: [
              { reasoning: "Match feature to water loss.", working: "\\text{waxy cuticle}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Waxy cuticle",
            commonErrors: ["Choosing stomata — they are pores that actually allow water vapour out."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are most stomata found on the lower surface of a leaf?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To absorb more sunlight" },
              { id: "b", text: "To anchor the leaf to the stem" },
              { id: "c", text: "To allow gas exchange while reducing water loss" },
              { id: "d", text: "To store glucose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal position", statement: "Lower surface is shaded and less exposed to drying." },
            ],
            steps: [
              { reasoning: "Link position to function.", working: "\\text{gas exchange + less water loss}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To allow gas exchange while reducing water loss",
            commonErrors: ["Saying 'to absorb light' — stomata do not absorb light."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light intensity is inversely proportional to the square of the distance from a lamp. At 1 m the photosynthesis rate is 60 bubbles per minute. Calculate the expected rate at 2 m.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "bubbles/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse square law", statement: "$I \\propto \\dfrac{1}{d^{2}}$" },
            ],
            steps: [
              { reasoning: "Doubling distance quarters the intensity.", working: "60 \\times \\frac{1}{2^{2}} = 60 \\times \\frac{1}{4}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "15 bubbles per minute",
            commonErrors: ["Halving the rate instead of quartering it."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pondweed releases 24 cm³ of oxygen in 3 minutes. Calculate the rate of photosynthesis in cm³ per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "cm³/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{volume}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide volume by time.", working: "\\frac{24}{3}", marks: 1, markCode: "M" },
              { reasoning: "Give the answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 cm³/min",
            commonErrors: ["Giving 24/3 = 8 without units, or multiplying instead of dividing."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "For every molecule of glucose produced, how many molecules of oxygen are released?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Photosynthesis stoichiometry", statement: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂." },
            ],
            steps: [
              { reasoning: "Read the equation.", working: "6\\,\\text{O}_2 \\text{ per glucose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 1 — forgetting the balanced coefficients."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "At 50% light intensity the bubble rate is 40 per minute. At 100% it is 80 per minute. Calculate the percentage increase.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ change} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{80 - 40}{40} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "100\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100%",
            commonErrors: ["Dividing by the new value (80) instead of the original (40)."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the two products of photosynthesis and give one use of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Photosynthesis products", statement: "Glucose (energy/storage) and oxygen (respiration)." },
            ],
            steps: [
              { reasoning: "Name both products.", working: "\\text{glucose and O}_2", marks: 1, markCode: "M" },
              { reasoning: "Give a use for each.", working: "\\text{energy/store; respiration}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucose — used for energy or stored as starch; oxygen — used in aerobic respiration.",
            commonErrors: ["Saying oxygen is 'wasted' — it is essential for respiration."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing the CO₂ concentration around a plant increases the rate of photosynthesis, but only up to a limit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "CO₂ as limiting factor", statement: "More CO₂ → more substrate → faster rate until another factor limits." },
            ],
            steps: [
              { reasoning: "CO₂ is a reactant in photosynthesis.", working: "\\text{CO}_2 \\text{ reactant}", marks: 1, markCode: "M" },
              { reasoning: "More CO₂ means more substrate available.", marks: 1, markCode: "M" },
              { reasoning: "Rate rises until light or temperature becomes limiting.", marks: 1, markCode: "M" },
              { reasoning: "Conclude: CO₂ then stops being the limiting factor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO₂ is a reactant, so more of it allows faster photosynthesis; once light or temperature is in short supply the rate plateaus because that factor becomes limiting.",
            commonErrors: ["Saying CO₂ 'speeds up' enzymes — it is a substrate, not an enzyme activator."],
          },
        },
        {
          id: "cieb-u3-photosynthesis-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A greenhouse grower wants to maximise tomato yield using lamps, CO₂ enrichment and heating.",
          parts: [
            { label: "a", prompt: "State the three limiting factors being manipulated.", marks: 2 },
            { label: "b", prompt: "Predict the effect on photosynthesis rate of raising light intensity from low to very high.", marks: 2 },
            { label: "c", prompt: "Explain what happens if the temperature is raised too high.", marks: 2 },
            { label: "d", prompt: "State one other condition the grower must keep constant to ensure a fair comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Limiting factors", statement: "Light, CO₂ and temperature control the rate; enzymes denature at high temperature." },
            ],
            steps: [
              { part: "a", reasoning: "Light intensity.", working: "\\text{light}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "CO₂ concentration and temperature.", working: "\\text{CO}_2, \\text{temperature}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rate rises linearly then plateaus.", working: "\\text{rise then plateau}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plateau = another factor limiting.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Enzymes denature at high temperature.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rate falls / photosynthesis stops.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any valid control variable (water, same plant species, distance of lamp).", working: "\\text{control variable}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain it must be constant for comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light, CO₂, temperature (b) rises then plateaus — light stops being limiting (c) enzymes denature, rate falls (d) e.g. water supply kept constant",
            commonErrors: ["In (c) saying rate keeps increasing — excessive heat denatures enzymes."],
          },
        },
      ],
    },
    {
      id: "cieb-u3-plant-minerals",
      title: "Mineral requirements of plants",
      skill: "Describe the functions of nitrate and magnesium ions and their deficiency symptoms.",
      lesson: {
        sections: [
          {
            heading: "Nitrate ions (NO₃⁻)",
            body: "Needed to make **amino acids → proteins**. Deficiency: **stunted growth**, yellow older leaves (nitrogen is mobile — older leaves affected first).",
          },
          {
            heading: "Magnesium ions (Mg²⁺)",
            body: "Needed to make **chlorophyll**. Deficiency: **yellowing between veins** of leaves (interveinal chlorosis), reduced photosynthesis.",
          },
          {
            heading: "Other minerals",
            body: "Phosphate (ATP/DNA), potassium (enzyme function/osmosis), calcium (cell walls).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A plant has yellow leaves but normal growth. Which mineral is likely deficient?",
          solution: "Magnesium — needed for chlorophyll; deficiency causes chlorosis (yellowing).",
        },
      },
      questions: [
        {
          id: "cieb-u3-plant-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral ion is needed to make chlorophyll?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrate" },
              { id: "b", text: "Potassium" },
              { id: "c", text: "Magnesium" },
              { id: "d", text: "Calcium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnesium", statement: "Component of chlorophyll." },
            ],
            steps: [
              { reasoning: "Recall the link.", working: "\\text{Mg}^{2+} \\to \\text{chlorophyll}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Magnesium",
            commonErrors: ["Choosing nitrate — that's for amino acids/protein."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the deficiency symptom of nitrate in plants and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate deficiency", statement: "Stunted growth/yellow older leaves — needed for protein synthesis." },
            ],
            steps: [
              { reasoning: "State the symptom.", working: "\\text{stunted/yellow leaves}", marks: 1, markCode: "M" },
              { reasoning: "Link to function (amino acids/protein).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stunted growth and yellowing of older leaves, because nitrate is needed to make amino acids and proteins.",
            commonErrors: ["Saying 'no photosynthesis' — that's magnesium's role."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A farmer notices his crop has yellowing between the leaf veins. Diagnose the likely deficiency and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnesium deficiency", statement: "Interveinal chlorosis — Mg needed for chlorophyll." },
            ],
            steps: [
              { reasoning: "Identify symptom as interveinal chlorosis.", working: "\\text{yellow between veins}", marks: 1, markCode: "M" },
              { reasoning: "Link to magnesium deficiency.", working: "\\text{Mg}^{2+}", marks: 1, markCode: "M" },
              { reasoning: "Explain: less chlorophyll → less photosynthesis.", working: "\\text{less chlorophyll}", marks: 1, markCode: "M" },
              { reasoning: "Suggest remedy (Mg fertiliser).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnesium deficiency — Mg is needed for chlorophyll, so its lack causes interveinal yellowing and reduces photosynthesis. Apply Mg fertiliser.",
            commonErrors: ["Diagnosing nitrate deficiency — that affects older leaves first and causes general yellowing."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student grows two sets of plants: one in complete fertiliser and one lacking magnesium.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict two differences between the plants after several weeks.", marks: 3 },
            { label: "c", prompt: "Explain the physiological reason for each difference.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mg deficiency", statement: "No chlorophyll → chlorosis → reduced photosynthesis → stunted growth." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: presence/absence of Mg. Dependent: growth/chlorophyll content.", working: "\\text{Mg vs growth}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Prediction 1: yellowing leaves (chlorosis).", working: "\\text{chlorosis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prediction 2: slower/stunted growth.", working: "\\text{stunted}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both predictions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mg needed for chlorophyll → less green pigment.", working: "\\text{less chlorophyll}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less chlorophyll → less photosynthesis → less glucose.", working: "\\text{less photosynthesis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less glucose → less energy/biomass → stunted growth.", working: "\\text{less biomass}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg presence / growth (b) chlorosis + stunting (c) Mg→chlorophyll→photosynthesis→growth chain",
            commonErrors: ["Predicting identical plants — the whole point is the deficiency effect."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral ion is needed to make amino acids and proteins in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Potassium" },
              { id: "b", text: "Magnesium" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Nitrate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate function", statement: "Needed to make amino acids and proteins." },
            ],
            steps: [
              { reasoning: "Match mineral to function.", working: "\\text{nitrate} \\to \\text{amino acids/protein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Nitrate",
            commonErrors: ["Choosing magnesium — that is for chlorophyll."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Yellowing between the leaf veins (interveinal chlorosis) is a symptom of deficiency of which ion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnesium" },
              { id: "b", text: "Nitrate" },
              { id: "c", text: "Potassium" },
              { id: "d", text: "Phosphate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Interveinal chlorosis", statement: "Classic magnesium deficiency symptom." },
            ],
            steps: [
              { reasoning: "Link symptom to mineral.", working: "\\text{interveinal chlorosis} \\to \\text{Mg}^{2+}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Magnesium",
            commonErrors: ["Choosing nitrate — nitrate deficiency yellows older leaves generally, not between veins."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nitrate deficiency causes yellowing of OLDER leaves first because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnesium is concentrated in old leaves" },
              { id: "b", text: "Older leaves absorb more light" },
              { id: "c", text: "Roots cannot absorb nitrate" },
              { id: "d", text: "Nitrogen is mobile and is moved from older to younger leaves" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen mobility", statement: "Nitrate is mobile; remobilised to new growth, starving old leaves." },
            ],
            steps: [
              { reasoning: "Recall mobility of nitrogen.", working: "\\text{mobile} \\to \\text{older leaves first}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Nitrogen is mobile and is moved from older to younger leaves",
            commonErrors: ["Saying 'roots cannot absorb it' — the plant lacks nitrate in the soil/fertiliser, not uptake ability."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fertiliser contains 15 g of material, of which 20% is nitrate ions by mass. Calculate the mass of nitrate ions present.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage composition", statement: "$\\text{mass of part} = \\text{total} \\times \\dfrac{\\%}{100}$" },
            ],
            steps: [
              { reasoning: "Multiply total mass by percentage.", working: "15 \\times \\frac{20}{100}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "3\\,\\text{g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 g",
            commonErrors: ["Multiplying by 20 instead of 0.20."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A healthy leaf has a chlorophyll content of 80%. A magnesium-deficient leaf has 56%. Calculate the percentage decrease in chlorophyll.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ change} = \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{80 - 56}{80} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Dividing by 56 (the new value) instead of 80 (the original)."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A plant's height increases from 6 cm to 9 cm after fertiliser is added. Calculate the increase in height.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Change", statement: "$\\text{change} = \\text{final} - \\text{initial}$" },
            ],
            steps: [
              { reasoning: "Subtract initial from final.", working: "9 - 6 = 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 cm",
            commonErrors: ["Giving the final height (9 cm) instead of the increase."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pot contains 2 dm³ of soil solution with a nitrate concentration of 0.4 g/dm³. Calculate the total mass of nitrate ions in the pot.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "$\\text{mass} = \\text{concentration} \\times \\text{volume}$" },
            ],
            steps: [
              { reasoning: "Multiply concentration by volume.", working: "0.4 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Compute the product.", working: "0.8\\,\\text{g}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.8 g",
            commonErrors: ["Dividing instead of multiplying, or forgetting the units match (g/dm³ × dm³ = g)."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of magnesium ions in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnesium function", statement: "Needed to make chlorophyll; supports photosynthesis." },
            ],
            steps: [
              { reasoning: "State the functions.", working: "\\text{chlorophyll formation; photosynthesis}", marks: 1, markCode: "M" },
              { reasoning: "Link to chlorophyll explicitly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnesium is needed to make chlorophyll (the green pigment that traps light) and so supports photosynthesis.",
            commonErrors: ["Saying magnesium 'makes protein' — that is nitrate's role."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Magnesium deficiency reduces the rate of photosynthesis mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less chlorophyll is produced, so less light energy is absorbed" },
              { id: "b", text: "Glucose cannot be stored as starch" },
              { id: "c", text: "Roots stop absorbing water" },
              { id: "d", text: "Stomata close completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mg and photosynthesis", statement: "Mg → chlorophyll → light absorption → photosynthesis rate." },
            ],
            steps: [
              { reasoning: "Trace the causal chain.", working: "\\text{less Mg} \\to \\text{less chlorophyll} \\to \\text{less light absorbed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Less chlorophyll is produced, so less light energy is absorbed",
            commonErrors: ["Saying 'photosynthesis stops' — it slows because less light is trapped."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Phosphate ions are needed in plants mainly for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making ATP and DNA" },
              { id: "b", text: "Strengthening cell walls only" },
              { id: "c", text: "Opening and closing stomata" },
              { id: "d", text: "Making chlorophyll" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Phosphate function", statement: "Needed for ATP and DNA production." },
            ],
            steps: [
              { reasoning: "Match mineral to role.", working: "\\text{phosphate} \\to \\text{ATP/DNA}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Making ATP and DNA",
            commonErrors: ["Choosing 'cell walls' — that is calcium's role."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calcium ions are required by plants for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making amino acids" },
              { id: "b", text: "Enzyme activation only" },
              { id: "c", text: "Formation of cell walls" },
              { id: "d", text: "Making chlorophyll" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Calcium function", statement: "Needed for cell wall formation." },
            ],
            steps: [
              { reasoning: "Match mineral to role.", working: "\\text{calcium} \\to \\text{cell walls}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Formation of cell walls",
            commonErrors: ["Choosing chlorophyll — that is magnesium."],
          },
        },
        {
          id: "cieb-u3-plant-minerals-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a plant grown without nitrate shows stunted growth and yellowing of its older leaves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate deficiency", statement: "Nitrate → amino acids/protein; deficiency → poor growth and chlorosis of old leaves." },
            ],
            steps: [
              { reasoning: "Nitrate is needed to make amino acids and proteins.", working: "\\text{nitrate} \\to \\text{protein}", marks: 1, markCode: "M" },
              { reasoning: "Less protein → less growth (stunted).", working: "\\text{stunted growth}", marks: 1, markCode: "M" },
              { reasoning: "Nitrate is mobile, so it moves to new leaves; old leaves lose protein/chlorophyll.", working: "\\text{mobile N}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: yellowing of older leaves explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Without nitrate the plant cannot make amino acids/proteins, so growth is stunted; because nitrogen is mobile it is moved to young leaves, so older leaves lose chlorophyll and yellow first.",
            commonErrors: ["Attributing yellowing to magnesium — nitrate deficiency causes general yellowing of older leaves, not interveinal chlorosis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u3-plant-nutrition-notes",
      title: "Photosynthesis and plant nutrition — revision notes",
      summary: "Photosynthesis equation, leaf adaptations, limiting factors, and mineral deficiencies.",
      sections: [
        {
          heading: "Photosynthesis",
          body: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll). Leaf adaptations: broad/thin, stomata, palisade chloroplasts, veins. Limiting factors: light, CO₂, temperature.",
        },
        {
          heading: "Minerals",
          body: "Nitrate → amino acids/protein (deficiency: stunted growth, yellow older leaves). Magnesium → chlorophyll (deficiency: interveinal chlorosis). Phosphate → ATP/DNA.",
        },
        {
          heading: "Exam technique",
          body: "- Always include conditions (light energy, chlorophyll) in the equation.\n- Link mineral deficiency to its function: Mg → chlorophyll; nitrate → protein.\n- For experiments: count bubbles = rate proxy; state controls for confounding variables.",
        },
      ],
    },
  ],
};

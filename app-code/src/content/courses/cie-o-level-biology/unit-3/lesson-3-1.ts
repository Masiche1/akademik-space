import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olbio-u3-lesson-3-1",
  code: "3-1",
  title: "Photosynthesis and Plant Nutrition",
  goal: "I CAN describe photosynthesis, the leaf structure that supports it, limiting factors, and mineral requirements of plants.",
  standards: ["5090 3.1", "5090 3.2", "5090 3.3"],
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
      id: "olbio-u3-photosynthesis",
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
          id: "olbio-u3-photosynthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is released during photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "a",
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
          id: "olbio-u3-photosynthesis-q2",
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
          id: "olbio-u3-photosynthesis-q3",
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
          id: "olbio-u3-photosynthesis-q4",
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
      ],
    },
    {
      id: "olbio-u3-plant-minerals",
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
          id: "olbio-u3-plant-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mineral ion is needed to make chlorophyll?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnesium" },
              { id: "b", text: "Nitrate" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Potassium" },
            ],
            correctChoiceId: "a",
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
          id: "olbio-u3-plant-minerals-q2",
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
          id: "olbio-u3-plant-minerals-q3",
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
          id: "olbio-u3-plant-minerals-q4",
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
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u3-plant-nutrition-notes",
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

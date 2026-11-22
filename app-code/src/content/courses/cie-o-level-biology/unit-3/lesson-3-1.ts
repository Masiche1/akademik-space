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
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olbio-u3-photosynthesis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis takes place in which cell structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Mitochondria" },
              { id: "c", text: "Chloroplasts" },
              { id: "d", text: "Cell wall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Photosynthesis site", statement: "Occurs in chloroplasts containing chlorophyll." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{chloroplasts}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chloroplasts",
            commonErrors: ["Choosing mitochondria — that is respiration."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which are the reactants of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide and water" },
              { id: "b", text: "Oxygen and water" },
              { id: "c", text: "Glucose and oxygen" },
              { id: "d", text: "Glucose and carbon dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis equation", statement: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂." },
            ],
            steps: [
              { reasoning: "Recall the reactants.", working: "\\text{CO}_2 + \\text{H}_2\\text{O}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide and water",
            commonErrors: ["Choosing glucose/oxygen — those are the products."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A limiting factor is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The factor that makes the reaction fastest" },
              { id: "b", text: "The factor in shortest supply that limits the rate of a reaction" },
              { id: "c", text: "Any factor affecting the reaction" },
              { id: "d", text: "The product of the reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factor", statement: "The factor in shortest supply that limits the rate when increased others cannot help." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{shortest supply}", marks: 1, markCode: "M" },
              { reasoning: "Complete: limits the rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The factor in shortest supply that limits the rate of a reaction",
            commonErrors: ["Choosing 'any factor' — only the one in shortest supply limits."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Using the equation $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$, calculate how many carbon dioxide molecules are needed to make one glucose molecule.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis equation", statement: "6 CO₂ per glucose." },
            ],
            steps: [
              { reasoning: "Read the coefficient of CO₂.", working: "6 \\text{ CO}_2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6 \\text{ molecules}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 molecules",
            commonErrors: ["Counting atoms instead of molecules — the coefficient is 6."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A leaf absorbs 12 carbon dioxide molecules during photosynthesis. (a) Calculate how many glucose molecules can be produced. (b) Calculate how many oxygen molecules are released.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "molecules" },
              { label: "b", answer: 12, unit: "molecules" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis equation", statement: "6 CO₂ → 1 glucose + 6 O₂." },
            ],
            steps: [
              { reasoning: "Glucose = 12 / 6 = 2 molecules.", working: "\\frac{12}{6} = 2", marks: 1, markCode: "M" },
              { reasoning: "Oxygen = 6 per glucose × 2 = 12 molecules.", working: "6 \\times 2 = 12", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 glucose; (b) 12 oxygen",
            commonErrors: ["In (b) answering 2 — oxygen molecules equal CO₂ molecules used."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the linear region of a light-intensity graph, the rate of photosynthesis is 20 units per minute at light intensity 20 and 40 units per minute at intensity 40. Predict the rate at light intensity 60 if the linear relationship continues.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "units min^{-1}" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Limiting factor graph", statement: "In the linear region rate is proportional to light intensity." },
            ],
            steps: [
              { reasoning: "Rate = light intensity (20→20, 40→40, so 60→60).", working: "\\text{rate} = \\text{intensity}", marks: 1, markCode: "M" },
              { reasoning: "State the prediction.", working: "60 \\text{ units min}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 units min$^{-1}$",
            commonErrors: ["Assuming the plateau has been reached — the question states the linear region continues."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gas must enter the leaf for photosynthesis to occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Photosynthesis reactants", statement: "CO₂ enters through stomata; O₂ is released." },
            ],
            steps: [
              { reasoning: "Recall the reactant.", working: "\\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide",
            commonErrors: ["Choosing oxygen — that is the product released."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'limiting factor'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factor", statement: "Factor in shortest supply that limits the rate of a reaction." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{shortest supply}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A factor that is in shortest supply and so limits the rate of a reaction — light, CO₂ or temperature for photosynthesis.",
            commonErrors: ["Saying any factor can be limiting — only the one in shortest supply."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why most stomata are found on the lower surface of a leaf.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stomatal distribution", statement: "Lower surface = gas exchange with less water loss (upper surface gets more sun/heat)." },
            ],
            steps: [
              { reasoning: "Stomata allow CO₂ entry for photosynthesis.", working: "\\text{gas exchange}", marks: 1, markCode: "M" },
              { reasoning: "Lower surface is more shaded/cooler.", working: "\\text{less sun}", marks: 1, markCode: "M" },
              { reasoning: "Less evaporation → less water loss.", working: "\\text{less water loss}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: gas exchange balanced against water conservation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stomata on the lower surface allow CO₂ entry while being more shaded, reducing water loss through evaporation compared to the sunlit upper surface.",
            commonErrors: ["Saying 'to let light in' — stomata are for gases, not light."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to the rate of photosynthesis as carbon dioxide concentration increases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases" },
              { id: "b", text: "It stays the same" },
              { id: "c", text: "It increases steadily forever" },
              { id: "d", text: "It increases then plateaus when another factor becomes limiting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Limiting factors", statement: "Rate rises with CO₂ then plateaus when light or temperature limits." },
            ],
            steps: [
              { reasoning: "Recall the limiting factor pattern.", working: "\\text{rise then plateau}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It increases then plateaus when another factor becomes limiting",
            commonErrors: ["Expecting indefinite increase — a plateau always occurs."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the three limiting factors of photosynthesis.",
          parts: [
            { label: "a", prompt: "Name the three limiting factors.", marks: 2 },
            { label: "b", prompt: "Explain why the rate plateaus when one factor is no longer limiting.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Limiting factors", statement: "Light, CO₂, temperature; rate limited by whichever is in shortest supply." },
            ],
            steps: [
              { part: "a", reasoning: "Light intensity, CO₂ concentration, temperature.", working: "\\text{light/CO}_2/\\text{temp}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Increasing one factor helps only until it is sufficient.", working: "\\text{sufficient}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Another factor in short supply then limits the rate.", working: "\\text{next limiting}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rate plateaus until that factor is also increased.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light, CO₂, temperature (b) once a factor is sufficient, the next-shortest factor limits the rate → plateau",
            commonErrors: ["Listing factors without explaining the plateau mechanism."],
          },
        },
        {
          id: "olbio-u3-photosynthesis-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of carbon dioxide concentration on photosynthesis using pondweed and counting oxygen bubbles.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe two control variables and why they matter.", marks: 2 },
            { label: "c", prompt: "Describe the expected graph of bubble rate against CO₂ concentration.", marks: 2 },
            { label: "d", prompt: "Explain the shape of the graph using limiting factors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "CO₂ experiment", statement: "Vary CO₂ (e.g. NaHCO₃); count O₂ bubbles as rate proxy." },
              { kind: "property", name: "Limiting factors", statement: "Rise then plateau as CO₂ stops being limiting." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: CO₂ concentration.", working: "\\text{CO}_2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent: bubble rate / photosynthesis rate.", working: "\\text{bubble rate}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Controls: light intensity and temperature.", working: "\\text{light/temp}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They prevent other factors confounding results.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Linear rise then plateau.", working: "\\text{rise then plateau}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Describe the shape correctly.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Rise: more CO₂ → more glucose made.", working: "\\text{more CO}_2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Plateau: light or temperature becomes limiting.", working: "\\text{other factor}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CO₂ conc / bubble rate (b) light, temperature constant (c) rise then plateau (d) CO₂ stops being limiting",
            commonErrors: ["In (d) saying rate keeps rising with CO₂."],
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
        {
          id: "olbio-u3-plant-minerals-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nitrate ions are needed by plants mainly to make:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorophyll" },
              { id: "b", text: "Cellulose" },
              { id: "c", text: "Amino acids and proteins" },
              { id: "d", text: "Starch" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate function", statement: "Needed for amino acid/protein synthesis." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{amino acids}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Amino acids and proteins",
            commonErrors: ["Choosing chlorophyll — that is magnesium's role."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Magnesium ions are needed to make which molecule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorophyll" },
              { id: "b", text: "Proteins" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "DNA only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnesium function", statement: "Component of chlorophyll." },
            ],
            steps: [
              { reasoning: "Recall the link.", working: "\\text{Mg} \\to \\text{chlorophyll}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Chlorophyll",
            commonErrors: ["Choosing proteins — that is nitrate."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A plant shows yellowing between the veins of its leaves. Which mineral deficiency is most likely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calcium" },
              { id: "b", text: "Phosphate" },
              { id: "c", text: "Nitrate" },
              { id: "d", text: "Magnesium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnesium deficiency", statement: "Interveinal chlorosis — Mg needed for chlorophyll." },
            ],
            steps: [
              { reasoning: "Identify the symptom.", working: "\\text{interveinal chlorosis}", marks: 1, markCode: "M" },
              { reasoning: "Link to magnesium deficiency.", working: "\\text{Mg}^{2+}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Magnesium",
            commonErrors: ["Choosing nitrate — that causes stunted growth/yellowing of older leaves generally."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fertiliser contains 15% nitrogen by mass. Calculate the mass of nitrogen in 200 g of fertiliser.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x whole." },
            ],
            steps: [
              { reasoning: "Calculate 15% of 200.", working: "0.15 \\times 200 = 30", marks: 1, markCode: "M" },
              { reasoning: "State the mass.", working: "30 \\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 g",
            commonErrors: ["Multiplying by 15 instead of 0.15."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Fertiliser X contains 20% nitrogen and fertiliser Y contains 10% magnesium. (a) Calculate the mass of nitrogen in 100 g of fertiliser X. (b) Calculate the mass of magnesium in 50 g of fertiliser Y.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "g" },
              { label: "b", answer: 5, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x mass." },
            ],
            steps: [
              { reasoning: "N: 0.20 x 100 = 20 g.", working: "0.20 \\times 100 = 20", marks: 1, markCode: "M" },
              { reasoning: "Mg: 0.10 x 50 = 5 g.", working: "0.10 \\times 50 = 5", marks: 1, markCode: "M" },
              { reasoning: "State both masses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 g nitrogen; (b) 5 g magnesium",
            commonErrors: ["Using percentage as a whole number multiplier."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A crop requires 5 g of nitrate ions. A fertiliser contains 10% nitrate by mass. Calculate the mass of fertiliser needed to supply this amount.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Whole = part / (percentage / 100)." },
            ],
            steps: [
              { reasoning: "Divide required nitrate by the fraction.", working: "\\frac{5}{0.10} = 50", marks: 1, markCode: "M" },
              { reasoning: "State the mass.", working: "50 \\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 g",
            commonErrors: ["Multiplying by 0.10 — that gives 0.5 g, the wrong direction."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which mineral deficiency most commonly causes stunted growth in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrate" },
              { id: "b", text: "Water" },
              { id: "c", text: "Magnesium" },
              { id: "d", text: "Calcium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate deficiency", statement: "Stunted growth — needed for protein synthesis." },
            ],
            steps: [
              { reasoning: "Match deficiency to symptom.", working: "\\text{NO}_3^- \\to \\text{stunted}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nitrate",
            commonErrors: ["Choosing magnesium — that causes chlorosis, not mainly stunting."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of nitrate ions in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate function", statement: "Used to make amino acids → proteins." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{amino acids/protein}", marks: 1, markCode: "M" },
              { reasoning: "State it clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nitrate ions are needed to make amino acids, which are used to build proteins for growth.",
            commonErrors: ["Saying it makes chlorophyll — that is magnesium."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the chain of events from magnesium deficiency to reduced plant growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mg deficiency chain", statement: "No Mg → less chlorophyll → less photosynthesis → less glucose → stunted growth." },
            ],
            steps: [
              { reasoning: "Mg needed for chlorophyll production.", working: "\\text{less chlorophyll}", marks: 1, markCode: "M" },
              { reasoning: "Less chlorophyll → less light absorbed.", working: "\\text{less light}", marks: 1, markCode: "M" },
              { reasoning: "Less photosynthesis → less glucose produced.", working: "\\text{less glucose}", marks: 1, markCode: "M" },
              { reasoning: "Less energy/biomass → stunted growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnesium deficiency reduces chlorophyll production → less light absorption → less photosynthesis → less glucose → reduced growth.",
            commonErrors: ["Stopping at 'yellow leaves' without linking to reduced growth."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nitrate deficiency typically causes yellowing of which leaves first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Youngest leaves" },
              { id: "b", text: "Roots" },
              { id: "c", text: "All leaves equally" },
              { id: "d", text: "Oldest leaves" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate mobility", statement: "Nitrogen is mobile — deficiency shows in older leaves first." },
            ],
            steps: [
              { reasoning: "Recall nitrogen mobility.", working: "\\text{mobile} \\to \\text{old leaves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oldest leaves",
            commonErrors: ["Choosing youngest — that's typical of immobile nutrients like calcium."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare nitrate and magnesium deficiencies in plants.",
          parts: [
            { label: "a", prompt: "State the function of each ion.", marks: 2 },
            { label: "b", prompt: "Describe the symptoms of each deficiency.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Mineral deficiencies", statement: "Nitrate → protein (stunted, older leaves yellow); Mg → chlorophyll (interveinal chlorosis)." },
            ],
            steps: [
              { part: "a", reasoning: "Nitrate: amino acids/proteins.", working: "\\text{NO}_3^- \\to \\text{protein}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Magnesium: chlorophyll.", working: "\\text{Mg}^{2+} \\to \\text{chlorophyll}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nitrate deficiency: stunted growth, yellow older leaves.", working: "\\text{stunted/yellow}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Magnesium deficiency: yellowing between veins (interveinal chlorosis).", working: "\\text{interveinal}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both symptom sets distinctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nitrate → protein; magnesium → chlorophyll (b) nitrate: stunted growth/yellow older leaves; magnesium: interveinal chlorosis",
            commonErrors: ["Swapping the deficiency symptoms."],
          },
        },
        {
          id: "olbio-u3-plant-minerals-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student grows two sets of cress plants: one in complete mineral solution and one lacking nitrate ions.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Predict two differences between the plants after several weeks.", marks: 2 },
            { label: "c", prompt: "Explain the physiological reason for each difference.", marks: 3 },
            { label: "d", prompt: "Suggest how a farmer could correct the deficiency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrate deficiency", statement: "No nitrate → less protein → stunted growth, yellow older leaves." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: presence/absence of nitrate.", working: "\\text{nitrate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent: growth/leaf colour.", working: "\\text{growth}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Prediction 1: slower/stunted growth.", working: "\\text{stunted}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prediction 2: yellowing of older leaves.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No nitrate → less amino acids/protein → less growth.", working: "\\text{less protein}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Nitrogen mobile → moved from old leaves → chlorosis.", working: "\\text{mobile N}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation for both.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add nitrate-containing fertiliser.", working: "\\text{N fertiliser}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Restores protein synthesis and growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nitrate presence / growth (b) stunted growth + yellow older leaves (c) less protein; N mobile from old leaves (d) apply nitrate fertiliser",
            commonErrors: ["In (c) linking to chlorophyll — that is magnesium, not nitrate."],
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

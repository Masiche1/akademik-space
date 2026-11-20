import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cils-u3-lesson-3-1",
  code: "3-1",
  title: "Photosynthesis",
  goal: "I CAN describe photosynthesis, its word equation, and the factors affecting its rate.",
  standards: ["0893 Biology: photosynthesis"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Process where plants make glucose using light, carbon dioxide and water." },
    { term: "Chlorophyll", definition: "Green pigment in chloroplasts that absorbs light energy." },
    { term: "Glucose", definition: "Sugar produced by photosynthesis — used for energy and growth." },
    { term: "Stomata", definition: "Tiny pores on leaf surfaces for gas exchange." },
    { term: "Limiting factor", definition: "Factor that restricts the rate — light, CO₂ or temperature." },
    { term: "Oxygen", definition: "Gas released as waste product of photosynthesis." },
  ],
  concepts: [
    {
      id: "cils-u3-photosynthesis",
      title: "The photosynthesis process",
      skill: "Write the word equation and explain where each reactant comes from and product goes.",
      lesson: {
        sections: [
          {
            heading: "Word equation",
            body: "carbon dioxide + water $\\xrightarrow{\\text{light}}$ glucose + oxygen\n\n$6CO_2 + 6H_2O \\xrightarrow{\\text{chlorophyll, light}} C_6H_{12}O_6 + 6O_2$",
          },
          {
            heading: "Where it happens",
            body: "In chloroplasts of plant cells — mainly in leaves. Chlorophyll absorbs light energy to drive the reaction.",
          },
          {
            heading: "Inputs and outputs",
            body: "- **CO₂**: enters through stomata\n- **Water**: absorbed by roots, transported via xylem\n- **Light**: absorbed by chlorophyll\n- **Glucose**: used for respiration, growth, storage\n- **Oxygen**: released through stomata",
          },
        ],
        keyFormulas: [
          { name: "Word equation", statement: "carbon dioxide + water →(light, chlorophyll) glucose + oxygen" },
        ],
        workedExample: {
          problem: "Write the word equation for photosynthesis and identify two reactants.",
          solution: "carbon dioxide + water →(light) glucose + oxygen. Reactants: carbon dioxide and water.",
        },
      },
      questions: [
        {
          id: "cils-u3-photo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas do plants absorb for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "CO₂ is a reactant; oxygen is released." },
            ],
            steps: [
              { reasoning: "Plants take in CO₂ through stomata for photosynthesis.", working: "CO₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide",
            commonErrors: ["Choosing (b) — oxygen is released, not absorbed."],
          },
        },
        {
          id: "cils-u3-photo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the word equation for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word equation", statement: "carbon dioxide + water →(light, chlorophyll) glucose + oxygen" },
            ],
            steps: [
              { reasoning: "Reactants: carbon dioxide + water; products: glucose + oxygen.", working: "CO₂+H₂O→glucose+O₂", marks: 1, markCode: "M" },
              { reasoning: "Correct with arrow and conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "carbon dioxide + water →(light, chlorophyll) glucose + oxygen",
            commonErrors: ["Swapping reactants/products — glucose is produced, not consumed."],
          },
        },
        {
          id: "cils-u3-photo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why leaves are the main site of photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Leaf structure", statement: "Broad, thin, many chloroplasts, stomata for gas exchange." },
            ],
            steps: [
              { reasoning: "Leaves contain most chloroplasts — chlorophyll for light absorption.", working: "chloroplasts", marks: 1, markCode: "M" },
              { reasoning: "Broad thin shape = large surface area for light capture.", working: "surface area", marks: 1, markCode: "M" },
              { reasoning: "Stomata allow CO₂ in and O₂ out.", working: "stomata", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Leaves have chloroplasts, large surface area for light, and stomata for gas exchange.",
            commonErrors: ["Saying 'because they're green' — need structural reasons."],
          },
        },
        {
          id: "cils-u3-photo-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design an experiment to test the effect of light intensity on photosynthesis rate.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "List three variables to control.", marks: 3 },
            { label: "c", prompt: "Describe how you'd measure photosynthesis rate.", marks: 2 },
            { label: "d", prompt: "Predict the expected result and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Photosynthesis experiment", statement: "Light intensity varied; others controlled; measure bubbles/O₂ or starch." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: light intensity; dependent: rate of photosynthesis (bubbles/min).", working: "variables", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂ concentration, temperature, same plant/species, water supply.", working: "controls", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Three valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Count oxygen bubbles per minute from aquatic plant (e.g. pondweed).", working: "bubbles", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid method.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Higher light → faster rate (up to limiting point); more light energy = faster reaction.", working: "positive correlation", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned prediction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light→rate (b) CO₂/temp/plant type controlled (c) count O₂ bubbles/min (d) more light = faster rate",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Variables correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "2-3", descriptor: "Controls good.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Method valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Prediction reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Not controlling temperature — affects enzyme activity."],
          },
        },
      ],
    },
    {
      id: "cils-u3-limiting",
      title: "Limiting factors",
      skill: "Explain how light, CO₂ and temperature limit photosynthesis rate.",
      lesson: {
        sections: [
          {
            heading: "Three limiting factors",
            body: "- **Light intensity**: more light = faster (until saturated)\n- **CO₂ concentration**: more CO₂ = faster (until saturated)\n- **Temperature**: affects enzyme rate — too hot denatures enzymes",
          },
          {
            heading: "The limiting factor",
            body: "Rate is set by whichever factor is in shortest supply. If light is low, adding CO₂ won't help — light is limiting.",
          },
          {
            heading: "Greenhouse effect",
            body: "Greenhouses raise CO₂ and temperature to boost photosynthesis — farmers increase crop yields this way.",
          },
        ],
        keyFormulas: [
          { name: "Limiting factor", statement: "Rate limited by scarcest factor: light, CO₂, or temperature." },
        ],
        workedExample: {
          problem: "A plant in low light gets extra CO₂. Will photosynthesis increase?",
          solution: "No — light is the limiting factor; extra CO₂ can't compensate for insufficient light.",
        },
      },
      questions: [
        {
          id: "cils-u3-lim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a limiting factor for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil pH" },
              { id: "b", text: "Light intensity" },
              { id: "c", text: "CO₂ concentration" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factors", statement: "Light, CO₂, temperature only." },
            ],
            steps: [
              { reasoning: "Soil pH affects minerals, not directly photosynthesis rate.", working: "pH not factor", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Soil pH",
            commonErrors: ["Choosing a real factor — only three exist."],
          },
        },
        {
          id: "cils-u3-lim-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what 'limiting factor' means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factor", statement: "The factor in shortest supply that caps the rate." },
            ],
            steps: [
              { reasoning: "Rate can't exceed what the scarcest factor allows.", working: "scarcest", marks: 1, markCode: "M" },
              { reasoning: "Example: low light limits even with plenty of CO₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The factor in shortest supply — it determines the maximum possible rate.",
            commonErrors: ["Saying 'any factor' — specifically the limiting one."],
          },
        },
        {
          id: "cils-u3-lim-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A greenhouse farmer wants faster plant growth. Suggest two methods and explain the science.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application", statement: "Increase light, CO₂, or optimise temperature — all boost photosynthesis." },
            ],
            steps: [
              { reasoning: "Add artificial lighting — more light energy for photosynthesis.", working: "lighting", marks: 1, markCode: "M" },
              { reasoning: "Enrich CO₂ — more reactant available.", working: "CO₂", marks: 1, markCode: "M" },
              { reasoning: "Maintain warm temperature — enzymes work faster (not too hot).", working: "temperature", marks: 1, markCode: "M" },
              { reasoning: "Two methods with reasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add lights (more light) and enrich CO₂ — both increase photosynthesis rate.",
            commonErrors: ["Suggesting fertiliser — that's minerals, not photosynthesis directly."],
          },
        },
        {
          id: "cils-u3-lim-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Graph shows photosynthesis rate vs light intensity: rises steeply then plateaus.",
          parts: [
            { label: "a", prompt: "Explain why the rate plateaus at high light.", marks: 3 },
            { label: "b", prompt: "What becomes the limiting factor at the plateau?", marks: 2 },
            { label: "c", prompt: "How would adding CO₂ change the graph?", marks: 2 },
            { label: "d", prompt: "Explain the effect of very high temperature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Limiting factors graph", statement: "Plateau = another factor becomes limiting; CO₂ increase shifts plateau up." },
            ],
            steps: [
              { part: "a", reasoning: "At high light, another factor (CO₂ or temperature) is in shortest supply — can't go faster.", working: "other factor", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂ or temperature becomes limiting.", working: "CO₂/temp", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher plateau — more CO₂ allows faster rate at each light level.", working: "higher plateau", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct prediction.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Very high temp denatures enzymes — rate drops sharply.", working: "denatures", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) another factor limits (b) CO₂ or temperature (c) plateau rises (d) enzymes denature, rate drops",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (a) saying 'plants can't photosynthesise faster' — it's factor limitation."],
          },
        },
      ],
    },
    {
      id: "cils-u3-leaf",
      title: "Leaf structure and transport",
      skill: "Relate leaf anatomy to photosynthesis and describe water/mineral transport.",
      lesson: {
        sections: [
          {
            heading: "Leaf anatomy",
            body: "- **Upper epidermis**: protective layer\n- **Palisade mesophyll**: main photosynthesis site — many chloroplasts\n- **Spongy mesophyll**: air spaces for gas exchange\n- **Stomata**: pores controlled by guard cells\n- **Veins**: xylem (water in) + phloem (sugar out)",
          },
          {
            heading: "Gas exchange",
            body: "CO₂ enters, O₂ exits through stomata. Guard cells open/close pores — open for photosynthesis, close to reduce water loss.",
          },
          {
            heading: "Transport",
            body: "Xylem carries water + minerals root→leaf. Phloem carries glucose leaf→rest of plant. Transpiration pulls water up.",
          },
        ],
        keyFormulas: [
          { name: "Leaf structure", statement: "Palisade=photosynthesis; stomata=gas exchange; xylem=water up; phloem=sugar down." },
        ],
        workedExample: {
          problem: "Why do guard cells close stomata at night?",
          solution: "No light = no photosynthesis, so no need for CO₂; closing prevents water loss by transpiration.",
        },
      },
      questions: [
        {
          id: "cils-u3-leaf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which leaf tissue contains the most chloroplasts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Palisade mesophyll" },
              { id: "b", text: "Upper epidermis" },
              { id: "c", text: "Spongy mesophyll" },
              { id: "d", text: "Veins" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Palisade", statement: "Column-shaped cells packed with chloroplasts — main photosynthesis site." },
            ],
            steps: [
              { reasoning: "Palisade mesophyll cells are elongated and dense with chloroplasts.", working: "palisade", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Palisade mesophyll",
            commonErrors: ["Choosing (c) — spongy has fewer chloroplasts, more air spaces."],
          },
        },
        {
          id: "cils-u3-leaf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of stomata?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stomata", statement: "Pores for gas exchange — CO₂ in, O₂ out." },
            ],
            steps: [
              { reasoning: "Allow CO₂ entry and O₂ exit for photosynthesis/respiration.", working: "gas exchange", marks: 1, markCode: "M" },
              { reasoning: "Guard cells control opening/closing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tiny pores for gas exchange, controlled by guard cells.",
            commonErrors: ["Saying 'for breathing' — plants exchange gases, not breathe."],
          },
        },
        {
          id: "cils-u3-leaf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the roles of xylem and phloem in a leaf.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transport tissues", statement: "Xylem: water+minerals up; phloem: glucose down." },
            ],
            steps: [
              { reasoning: "Xylem transports water and dissolved minerals from roots to leaves.", working: "xylem", marks: 1, markCode: "M" },
              { reasoning: "Phloem transports glucose produced in photosynthesis to other parts.", working: "phloem", marks: 1, markCode: "M" },
              { reasoning: "Both found in leaf veins.", working: "veins", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Xylem carries water/minerals up; phloem carries glucose down — both in veins.",
            commonErrors: ["Swapping them — xylem goes UP, phloem goes DOWN."],
          },
        },
        {
          id: "cils-u3-leaf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare upper and lower leaf surfaces.",
          parts: [
            { label: "a", prompt: "Where are most stomata located?", marks: 2 },
            { label: "b", prompt: "Why is this advantageous?", marks: 3 },
            { label: "c", prompt: "Explain the role of the waxy cuticle.", marks: 2 },
            { label: "d", prompt: "How does leaf structure maximise photosynthesis?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Leaf adaptation", statement: "Stomata mostly lower = less water loss; cuticle reduces evaporation." },
            ],
            steps: [
              { part: "a", reasoning: "Lower surface — more stomata underneath.", working: "lower", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lower surface shaded → less direct sunlight → less water loss through stomata.", working: "shaded", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear advantage.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Waxy cuticle waterproofs leaf — reduces water loss.", working: "cuticle", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Palisade for light capture, stomata for gas, thin for diffusion, veins for transport.", working: "adaptations", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lower surface (b) less direct sun → less water loss (c) waterproofing (d) multiple adaptations for photosynthesis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Comprehensive.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) saying 'to get more light' — lower surface gets LESS light, that's the point."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u3-photosynthesis-notes",
      title: "Photosynthesis — revision notes",
      summary: "Word equation, leaf structure, limiting factors, transport.",
      sections: [
        {
          heading: "Photosynthesis",
          body: "CO₂ + water →(light, chlorophyll) glucose + oxygen. In chloroplasts of leaves. Rate limited by light, CO₂, temperature.",
        },
        {
          heading: "Leaf",
          body: "Palisade=photosynthesis; stomata=gas exchange; xylem=water up; phloem=sugar down. Stomata mostly lower surface = less water loss.",
        },
      ],
    },
  ],
};

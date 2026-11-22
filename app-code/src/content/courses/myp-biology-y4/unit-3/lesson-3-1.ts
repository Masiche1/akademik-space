import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypb4-u3-lesson-3-1",
  code: "3-1",
  title: "Photosynthesis and Cellular Respiration",
  goal: "I CAN describe photosynthesis and cellular respiration, write their equations, and explain how they are interdependent.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Photosynthesis", definition: "Process by which green plants convert light energy into chemical energy stored in glucose." },
    { term: "Chlorophyll", definition: "Green pigment in chloroplasts that absorbs light energy for photosynthesis." },
    { term: "Stomata", definition: "Tiny pores on leaf underside allowing CO₂ in and O₂/water vapour out." },
    { term: "Cellular respiration", definition: "Process releasing energy from glucose for cell activities; occurs in mitochondria." },
    { term: "Aerobic respiration", definition: "Respiration using oxygen: glucose + oxygen → CO₂ + water + ATP." },
    { term: "Anaerobic respiration", definition: "Respiration without oxygen producing lactic acid (muscles) or ethanol + CO₂ (yeast)." },
  ],
  concepts: [
    {
      id: "mypb4-u3-photosynthesis",
      title: "Photosynthesis",
      skill: "Describe the inputs, outputs and site of photosynthesis and factors affecting its rate.",
      lesson: {
        sections: [
          {
            heading: "The process",
            body: "**6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂**. Occurs in **chloroplasts** (grana = light reactions, stroma = Calvin cycle). Chlorophyll absorbs light; light energy splits water releasing O₂; CO₂ fixed into glucose.",
          },
          {
            heading: "Leaf adaptations",
            body: "Broad flat leaves maximise light capture; thin for short diffusion; **stomata** allow gas exchange; **veins** transport water/xylem and sugars/phloem; upper epidermis transparent protects; palisade mesophyll packed with chloroplasts.",
          },
          {
            heading: "Factors affecting rate",
            body: "Light intensity, CO₂ concentration, temperature — each increases rate until another factor becomes limiting. Experiments test one variable at a time.",
          },
        ],
        keyFormulas: [
          { name: "Equation", statement: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂" },
          { name: "Site", statement: "Chloroplasts (grana + stroma)" },
          { name: "Factors", statement: "Light, CO₂, temperature" },
        ],
        workedExample: {
          problem: "Why do plants release oxygen during photosynthesis?",
          solution: "Light energy splits water molecules (photolysis) releasing O₂ as byproduct.",
        },
      },
      questions: [
        {
          id: "mypb4-u3-photo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose and oxygen" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Starch and protein" },
              { id: "d", text: "Oxygen only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis products", statement: "Glucose + oxygen released." },
            ],
            steps: [
              { reasoning: "Glucose stored, O₂ released as byproduct.", working: "C_6H_{12}O_6+O_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glucose and oxygen",
            commonErrors: ["Confusing reactants and products."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-photo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of chlorophyll?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorbs light energy to drive photosynthesis" },
              { id: "b", text: "Stores glucose" },
              { id: "c", text: "Protects leaf from insects" },
              { id: "d", text: "Transports water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chlorophyll", statement: "Green pigment absorbing light for photosynthesis." },
            ],
            steps: [
              { reasoning: "Chlorophyll absorbs light energy.", working: "\\text{light absorption}", marks: 1, markCode: "M" },
              { reasoning: "State the role.", working: "\\text{chlorophyll}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Absorbs light energy",
            commonErrors: ["Saying chlorophyll produces glucose directly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a leaf is thin and broad.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thin = more chlorophyll" },
              { id: "b", text: "Broad = large surface area to capture light; thin = short diffusion distance for gases" },
              { id: "c", text: "Broad leaves are heavier" },
              { id: "d", text: "Thin leaves use less water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Leaf adaptations", statement: "Shape optimizes light capture and gas diffusion." },
            ],
            steps: [
              { reasoning: "Broad surface maximizes light interception.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Thin = short diffusion path for CO₂ to chloroplasts.", working: "\\text{thin}", marks: 1, markCode: "M" },
              { reasoning: "State the adaptations.", working: "\\text{light+diffusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Broad for light, thin for gas diffusion",
            commonErrors: ["Only mentioning light capture."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating photosynthesis rate with light intensity.",
          parts: [
            { label: "a", prompt: "Describe how you would set up the experiment.", marks: 3 },
            { label: "b", prompt: "Name the independent, dependent and two controlled variables.", marks: 3 },
            { label: "c", prompt: "Describe the expected graph shape and explain it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Photosynthesis experiment", statement: "Vary light, measure oxygen/bubbles or weight change." },
            ],
            steps: [
              { part: "a", reasoning: "Pondweed in sodium hydrogencarbonate solution; vary lamp distance; count bubbles/minute.", working: "\\text{pondweed}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Control temperature, CO₂, same plant.", working: "\\text{controls}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Count bubbles at each distance.", working: "\\text{measure}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent: light intensity; dependent: rate (bubbles/min).", working: "\\text{IV,DV}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Controlled: temperature, CO₂ concentration.", working: "\\text{CVs}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All variables identified.", working: "\\text{variables}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate rises linearly then plateaus — other factors become limiting.", working: "\\text{plateau}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain limiting factor.", working: "\\text{limiting}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pondweed, vary distance, count bubbles (b) IV=light, DV=rate; CV=temp, CO₂ (c) rises then plateaus — limiting factors",
            commonErrors: ["Forgetting to control temperature."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypb4-u3-photo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does photosynthesis take place in plant cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell wall" },
              { id: "b", text: "Mitochondria" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Chloroplasts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis site", statement: "Chloroplasts contain chlorophyll — grana for light reactions, stroma for Calvin cycle." },
            ],
            steps: [
              { reasoning: "Chloroplasts are the site of photosynthesis.", working: "\\text{chloroplast}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Chloroplasts",
            commonErrors: ["Choosing mitochondria — that's respiration."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypb4-u3-photo-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which are the reactants of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and water" },
              { id: "b", text: "Carbon dioxide, water and light energy" },
              { id: "c", text: "Glucose and oxygen" },
              { id: "d", text: "Glucose and carbon dioxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis equation", statement: "$6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2$." },
            ],
            steps: [
              { reasoning: "CO₂ and water are the raw materials; light provides energy.", working: "CO_2+H_2O", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{reactants}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carbon dioxide, water and light energy",
            commonErrors: ["Listing products as reactants."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do plants release oxygen during photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants absorb CO₂ and release O₂ to balance air" },
              { id: "b", text: "Light energy splits water molecules (photolysis), releasing O₂ as a byproduct" },
              { id: "c", text: "Oxygen is a waste product of respiration" },
              { id: "d", text: "Oxygen is stored in chlorophyll" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photolysis", statement: "Light splits H₂O → O₂ released + H⁺/electrons used in reactions." },
            ],
            steps: [
              { reasoning: "Light energy breaks water molecules apart.", working: "H_2O\\text{ split}", marks: 1, markCode: "M" },
              { reasoning: "Oxygen atoms combine and are released as O₂.", working: "O_2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Photolysis of water releases O₂",
            commonErrors: ["Saying O₂ comes from CO₂."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the equation $6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2$: (a) What is the coefficient of CO₂? (b) What is the coefficient of O₂?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis equation", statement: "6 CO₂ + 6 H₂O → glucose + 6 O₂." },
            ],
            steps: [
              { reasoning: "CO₂ coefficient is 6.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "O₂ coefficient is 6.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 6, b) 6",
            commonErrors: ["Reading the subscript as coefficient."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "One glucose molecule $C_6H_{12}O_6$ is produced by photosynthesis. (a) How many carbon atoms does it contain? (b) How many oxygen atoms? (c) How many hydrogen atoms?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 6 },
              { label: "c", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glucose formula", statement: "$C_6H_{12}O_6$: 6 C, 12 H, 6 O." },
            ],
            steps: [
              { reasoning: "Subscript 6 after C → 6 carbon atoms.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Subscript 6 after O → 6 oxygen atoms.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Subscript 12 after H → 12 hydrogen atoms.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 6, b) 6, c) 12",
            commonErrors: ["Reading subscripts incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Photosynthesis needs 6 CO₂ per glucose. (a) How many CO₂ molecules are needed for 5 glucose molecules? (b) How many glucose molecules can be made from 60 CO₂? (c) How many O₂ molecules are released with 60 CO₂? (d) How many water molecules are required for 60 CO₂?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
              { label: "b", answer: 10 },
              { label: "c", answer: 60 },
              { label: "d", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis stoichiometry", statement: "6 CO₂ : 6 H₂O : 1 glucose : 6 O₂." },
            ],
            steps: [
              { reasoning: "CO₂ needed $= 6 \\times 5 = 30$.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "Glucose $= 60 / 6 = 10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "O₂ released $= 6 \\times 10 = 60$.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "H₂O needed $= 6 \\times 10 = 60$.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 30, b) 10, c) 60, d) 60",
            commonErrors: ["In (b), multiplying instead of dividing."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main factors limit the rate of photosynthesis?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factors", statement: "Light intensity, CO₂ concentration and temperature." },
            ],
            steps: [
              { reasoning: "Three named limiting factors.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 (light, CO₂, temperature)",
            commonErrors: ["Counting water or soil pH as limiting factors."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u3-photo-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A leaf has a surface area of 10 cm² and a stomatal density of 50 stomata per mm². (a) How many stomata does the leaf have? (b) If 20% of stomata are open at a given time, how many are open?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5000 },
              { label: "b", answer: 1000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stomatal count", statement: "Total stomata = area x density; open = %/100 x total." },
            ],
            steps: [
              { reasoning: "$10\\ \\text{cm}^2 = 1000\\ \\text{mm}^2$; $1000 \\times 50 = 5000$ stomata.", working: "5000", marks: 1, markCode: "M" },
              { reasoning: "Open $= 0.20 \\times 5000 = 1000$.", working: "1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 5000, b) 1000",
            commonErrors: ["Forgetting cm² to mm² conversion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Photosynthesis rate doubles with each doubling of light intensity until saturation. At 100 lux the rate is 3 units/min. (a) What is the rate at 200 lux? (b) What is the rate at 400 lux? (c) At 800 lux the rate is only 15 units/min — what does this show?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 12 },
              { label: "c", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factor", statement: "Rate rises until another factor (e.g. CO₂ or enzymes) becomes limiting → plateau." },
            ],
            steps: [
              { reasoning: "At 200 lux: $3 \\times 2 = 6$.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "At 400 lux: $6 \\times 2 = 12$.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "Rate plateaus at 15 — light no longer limiting; another factor is.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 6, b) 12, c) another factor becomes limiting",
            commonErrors: ["Expecting 24 at 800 lux — saturation occurs."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-photo-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following photosynthesis terms.",
          parts: [
            { label: "a", prompt: "Photosynthesis", marks: 1 },
            { label: "b", prompt: "Chlorophyll", marks: 1 },
            { label: "c", prompt: "Stomata", marks: 1 },
            { label: "d", prompt: "Limiting factor", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis terms", statement: "Process making glucose; pigment absorbing light; pores for gas exchange; factor capping rate." },
            ],
            steps: [
              { part: "a", reasoning: "Conversion of light energy to chemical energy in glucose.", working: "\\text{glucose}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Green pigment absorbing light energy.", working: "\\text{pigment}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pores allowing CO₂ in and O₂/water vapour out.", working: "\\text{pores}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Factor that caps the rate when in shortest supply.", working: "\\text{caps rate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photosynthesis=glucose production; chlorophyll=light pigment; stomata=gas pores; limiting factor=caps rate",
            commonErrors: ["Defining stomata as breathing holes in animals."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-photo-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how leaf structure is adapted for photosynthesis.",
          parts: [
            { label: "a", prompt: "Why is the leaf broad and flat?", marks: 1 },
            { label: "b", prompt: "Why is the leaf thin?", marks: 1 },
            { label: "c", prompt: "What is the role of stomata?", marks: 1 },
            { label: "d", prompt: "What is the role of veins?", marks: 1 },
            { label: "e", prompt: "Where are most chloroplasts concentrated?", marks: 1 },
            { label: "f", prompt: "Why is the upper epidermis transparent?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Leaf adaptations", statement: "Leaf shape maximises light capture and minimises diffusion distance; tissues transport and protect." },
            ],
            steps: [
              { part: "a", reasoning: "Large surface area to intercept more light.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Short diffusion distance for CO₂ to reach chloroplasts.", working: "\\text{thin}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Allow CO₂ entry and O₂/water vapour exit (gas exchange).", working: "\\text{gas exchange}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Xylem brings water; phloem removes sugars.", working: "\\text{transport}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Palisade mesophyll — packed with chloroplasts near top.", working: "\\text{palisade}", marks: 1, markCode: "A" },
              { part: "f", reasoning: "Allows light to reach photosynthetic cells below.", working: "\\text{transparent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) light capture (b) short diffusion (c) gas exchange (d) transport (e) palisade (f) light transmission",
            commonErrors: ["Describing leaf parts without linking to photosynthesis."],
            examinerNote: "M1 for (a), M1 for (b), A1 for each remaining part.",
          },
        },
        {
          id: "mypb4-u3-photo-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In an experiment, increasing light intensity beyond a certain point does not increase photosynthesis rate. Explain why.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorophyll is used up" },
              { id: "b", text: "Leaves close their stomata permanently" },
              { id: "c", text: "Another factor (CO₂ concentration, temperature or enzyme availability) becomes limiting" },
              { id: "d", text: "Glucose inhibits the reaction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factors", statement: "Rate limited by the factor in shortest supply; plateau when light is no longer limiting." },
            ],
            steps: [
              { reasoning: "Rate rises while light is limiting.", working: "\\text{light}", marks: 1, markCode: "M" },
              { reasoning: "At plateau another factor (CO₂, temp, enzymes) caps the rate.", working: "\\text{other factor}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Another factor becomes limiting",
            commonErrors: ["Saying chlorophyll is consumed."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u3-respiration",
      title: "Cellular Respiration",
      skill: "Distinguish aerobic and anaerobic respiration, write equations, and explain energy release.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (energy)**. Occurs in **mitochondria**. Complete breakdown of glucose → large ATP yield (~36-38 ATP). Requires oxygen. Used by all cells for energy.",
          },
          {
            heading: "Anaerobic respiration",
            body: "Without oxygen: **muscle cells**: glucose → lactic acid + small ATP (causes fatigue/cramp); **yeast**: glucose → ethanol + CO₂ + small ATP (used in baking/brewing). Much less ATP than aerobic.",
          },
          {
            heading: "Photosynthesis-respiration link",
            body: "Photosynthesis produces glucose + O₂; respiration uses glucose + O₂ → CO₂ + H₂O + energy. Nearly opposite equations — plants photosynthesize in light, respire always. Animals only respire. Together they cycle carbon and oxygen.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic", statement: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP" },
          { name: "Anaerobic muscle", statement: "Glucose → lactic acid + ATP" },
          { name: "Anaerobic yeast", statement: "Glucose → ethanol + CO₂ + ATP" },
        ],
        workedExample: {
          problem: "Why do sprinters breathe heavily after a race?",
          solution: "Oxygen debt — anaerobic respiration produced lactic acid; extra oxygen needed to break it down and restore aerobic respiration.",
        },
      },
      questions: [
        {
          id: "mypb4-u3-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does aerobic respiration occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondria" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Chloroplast" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Respiration site", statement: "Mitochondria — 'powerhouse of cell'." },
            ],
            steps: [
              { reasoning: "Aerobic respiration occurs in mitochondria.", working: "\\text{mitochondria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mitochondria",
            commonErrors: ["Choosing chloroplast — that's photosynthesis."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-resp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products of anaerobic respiration in yeast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactic acid" },
              { id: "b", text: "Ethanol and carbon dioxide" },
              { id: "c", text: "Water and oxygen" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Yeast fermentation", statement: "Glucose → ethanol + CO₂ + ATP." },
            ],
            steps: [
              { reasoning: "Yeast produces ethanol and CO₂ (used in bread rising).", working: "\\text{ethanol+CO\\_2}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{fermentation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethanol and carbon dioxide",
            commonErrors: ["Saying lactic acid — that's muscle cells."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare aerobic and anaerobic respiration in terms of oxygen use, ATP yield, and products.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aerobic: uses O₂, ~36 ATP, CO₂+water; anaerobic: no O₂, ~2 ATP, lactic acid or ethanol+CO₂" },
              { id: "b", text: "Both are identical" },
              { id: "c", text: "Aerobic produces lactic acid" },
              { id: "d", text: "Anaerobic produces more ATP" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Respiration comparison", statement: "Aerobic = efficient complete oxidation; anaerobic = partial, low yield." },
            ],
            steps: [
              { reasoning: "Aerobic uses O₂, complete breakdown → high ATP.", working: "\\text{aerobic}", marks: 1, markCode: "M" },
              { reasoning: "Anaerobic no O₂, incomplete → low ATP, different products.", working: "\\text{anaerobic}", marks: 1, markCode: "M" },
              { reasoning: "State comparison.", working: "\\text{comparison}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aerobic high ATP + O₂; anaerobic low ATP, no O₂",
            commonErrors: ["Reversing which produces more ATP."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Yeast is used in bread-making and brewing.",
          parts: [
            { label: "a", prompt: "Write the word equation for anaerobic respiration in yeast.", marks: 1 },
            { label: "b", prompt: "Explain why bread rises during baking.", marks: 2 },
            { label: "c", prompt: "Explain why alcoholic drinks contain ethanol.", marks: 2 },
            { label: "d", prompt: "Compare yeast respiration to human muscle anaerobic respiration.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fermentation", statement: "Yeast anaerobic respiration → ethanol + CO₂ used industrially." },
            ],
            steps: [
              { part: "a", reasoning: "Glucose → ethanol + carbon dioxide + ATP.", working: "\\text{equation}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂ gas produced → trapped in dough → bubbles → bread rises.", working: "\\text{CO\\_2 bubbles}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Yeast respiration produces the gas.", working: "\\text{yeast}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethanol is the alcohol product of fermentation.", working: "\\text{ethanol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Brewed over time → ethanol accumulates.", working: "\\text{fermentation}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Yeast → ethanol+CO₂; muscle → lactic acid (no CO₂/ethanol).", working: "\\text{products differ}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both anaerobic, low ATP, no O₂.", working: "\\text{similarities}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State differences and similarities.", working: "\\text{comparison}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) glucose→ethanol+CO₂+ATP (b) CO₂ bubbles (c) ethanol product (d) yeast=ethanol+CO₂, muscle=lactic acid",
            commonErrors: ["In (d), saying muscle produces CO₂."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u3-resp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main useful product of cellular respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ATP (energy)" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Glucose" },
              { id: "d", text: "Starch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Respiration purpose", statement: "Respiration releases energy stored in glucose as ATP for cell activities." },
            ],
            steps: [
              { reasoning: "ATP is the usable energy currency released.", working: "ATP", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** ATP",
            commonErrors: ["Naming CO₂ or water — those are waste products."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-resp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products of anaerobic respiration in yeast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose" },
              { id: "b", text: "Lactic acid only" },
              { id: "c", text: "Water and oxygen" },
              { id: "d", text: "Ethanol and carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Yeast fermentation", statement: "Glucose → ethanol + CO₂ + small ATP (no oxygen)." },
            ],
            steps: [
              { reasoning: "Yeast produces ethanol and CO₂.", working: "\\text{ethanol+CO\\_2}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{yeast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethanol and carbon dioxide",
            commonErrors: ["Saying lactic acid — that's muscle cells."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are the equations for photosynthesis and aerobic respiration described as 'almost opposites'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis uses CO₂ + H₂O to make glucose + O₂; respiration uses glucose + O₂ to make CO₂ + H₂O + energy" },
              { id: "b", text: "They both need light" },
              { id: "c", text: "They occur in the same organelle" },
              { id: "d", text: "They produce identical products" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photosynthesis-respiration link", statement: "Reactants of one are products of the other — carbon and oxygen cycle." },
            ],
            steps: [
              { reasoning: "Photosynthesis: CO₂ + H₂O → glucose + O₂.", working: "\\text{photo}", marks: 1, markCode: "M" },
              { reasoning: "Respiration: glucose + O₂ → CO₂ + H₂O + ATP.", working: "\\text{resp}", marks: 1, markCode: "M" },
              { reasoning: "State the relationship.", working: "\\text{opposite}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reactants/products are swapped",
            commonErrors: ["Saying they are identical processes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Aerobic respiration yields about 36 ATP per glucose; anaerobic yields about 2 ATP. (a) What is the difference in ATP yield? (b) What is the ratio of aerobic to anaerobic ATP yield?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 34 },
              { label: "b", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ATP yield comparison", statement: "Aerobic ~36 ATP vs anaerobic ~2 ATP; ratio = 36/2 = 18." },
            ],
            steps: [
              { reasoning: "Difference $= 36 - 2 = 34$ ATP.", working: "34", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 36 / 2 = 18$.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 34 ATP, b) 18",
            commonErrors: ["In (b), subtracting instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Muscle cells respire anaerobically producing 2 ATP per glucose. (a) If 10 glucose molecules are respired, how much ATP is produced? (b) If 25 glucose molecules are respired, how much ATP? (c) How many glucose molecules are needed to produce 100 ATP?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 50 },
              { label: "c", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ATP calculation", statement: "ATP = glucose x 2; glucose needed = ATP / 2." },
            ],
            steps: [
              { reasoning: "$10 \\times 2 = 20$ ATP.", working: "20", marks: 1, markCode: "M" },
              { reasoning: "$25 \\times 2 = 50$ ATP.", working: "50", marks: 1, markCode: "M" },
              { reasoning: "$100 / 2 = 50$ glucose.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 20, b) 50, c) 50",
            commonErrors: ["In (c), multiplying by 2 instead of dividing."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare ATP production: aerobic = 36 ATP/glucose, anaerobic = 2 ATP/glucose. For 100 glucose molecules: (a) ATP from aerobic respiration? (b) ATP from anaerobic? (c) How many times more ATP does aerobic produce? (d) What is the ATP difference?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3600 },
              { label: "b", answer: 200 },
              { label: "c", answer: 18 },
              { label: "d", answer: 3400 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ATP totals", statement: "Total ATP = yield x glucose count; ratio stays 18 regardless of glucose amount." },
            ],
            steps: [
              { reasoning: "Aerobic $= 36 \\times 100 = 3600$.", working: "3600", marks: 1, markCode: "M" },
              { reasoning: "Anaerobic $= 2 \\times 100 = 200$.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 3600/200 = 18$.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "Difference $= 3600 - 200 = 3400$.", working: "3400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3600, b) 200, c) 18x, d) 3400",
            commonErrors: ["In (c), using difference instead of ratio."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many reactants (starting substances) are named in aerobic respiration: glucose and oxygen?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration", statement: "Glucose + oxygen → CO₂ + water + ATP." },
            ],
            steps: [
              { reasoning: "Glucose and oxygen = 2 reactants.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting ATP as a reactant."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u3-resp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Aerobic respiration uses 6 O₂ per glucose molecule. (a) How much O₂ is needed for 4 glucose molecules? (b) How much O₂ is needed for 10 glucose molecules?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24 },
              { label: "b", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Oxygen stoichiometry", statement: "O₂ needed = 6 x glucose count." },
            ],
            steps: [
              { reasoning: "$6 \\times 4 = 24$ O₂.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "$6 \\times 10 = 60$ O₂.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 24, b) 60",
            commonErrors: ["Using 6 as molecules rather than coefficient."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "After sprinting, the body has an 'oxygen debt' of 3 litres of O₂ needed to break down lactic acid. If the body takes up oxygen at 0.25 litres per minute during recovery: (a) How long does recovery take? (b) If the debt were 6 litres at the same rate, how long? (c) How much lactic acid could be cleared in 10 minutes at this rate (assuming 1 L O₂ per unit)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 24 },
              { label: "c", answer: 2.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Oxygen debt", statement: "Time = debt / uptake rate; O₂ in time = rate x time." },
            ],
            steps: [
              { reasoning: "$3 / 0.25 = 12$ minutes.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "$6 / 0.25 = 24$ minutes.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "$0.25 \\times 10 = 2.5$ L O₂ → 2.5 units cleared.", working: "2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 12 min, b) 24 min, c) 2.5 units",
            commonErrors: ["In (a), multiplying instead of dividing."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-resp-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following respiration terms.",
          parts: [
            { label: "a", prompt: "Aerobic respiration", marks: 1 },
            { label: "b", prompt: "Anaerobic respiration", marks: 1 },
            { label: "c", prompt: "ATP", marks: 1 },
            { label: "d", prompt: "Oxygen debt", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Respiration terms", statement: "Aerobic=with O₂; anaerobic=without; ATP=energy currency; oxygen debt=extra O₂ needed post-exercise." },
            ],
            steps: [
              { part: "a", reasoning: "Respiration using oxygen → CO₂ + water + ATP.", working: "\\text{O\\_2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Respiration without oxygen → lactic acid or ethanol + CO₂.", working: "\\text{no O\\_2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy-carrying molecule used by cells.", working: "\\text{energy}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Extra oxygen needed to oxidise lactic acid after exercise.", working: "\\text{lactic acid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aerobic=with O₂; anaerobic=without; ATP=energy; oxygen debt=post-exercise O₂ need",
            commonErrors: ["Defining anaerobic as 'no respiration'."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-resp-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Compare aerobic and anaerobic respiration.",
          parts: [
            { label: "a", prompt: "Oxygen requirement", marks: 1 },
            { label: "b", prompt: "ATP yield", marks: 1 },
            { label: "c", prompt: "Products in muscle cells", marks: 1 },
            { label: "d", prompt: "Products in yeast", marks: 1 },
            { label: "e", prompt: "Where each occurs", marks: 1 },
            { label: "f", prompt: "Which is more efficient and why", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Respiration comparison", statement: "Aerobic = complete oxidation, high ATP; anaerobic = partial, low ATP, organism-specific products." },
            ],
            steps: [
              { part: "a", reasoning: "Aerobic needs O₂; anaerobic does not.", working: "\\text{O\\_2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Aerobic ~36 ATP; anaerobic ~2 ATP.", working: "36\\text{ vs }2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscle: lactic acid.", working: "\\text{lactic acid}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Yeast: ethanol + CO₂.", working: "\\text{ethanol+CO\\_2}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Aerobic: mitochondria (all cells); anaerobic: cytoplasm.", working: "\\text{sites}", marks: 1, markCode: "A" },
              { part: "f", reasoning: "Aerobic — glucose fully oxidised releasing far more energy.", working: "\\text{complete oxidation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aerobic: O₂, 36 ATP, CO₂+H₂O, mitochondria; anaerobic: no O₂, 2 ATP, lactic acid/ethanol+CO₂, cytoplasm",
            commonErrors: ["Saying anaerobic produces CO₂ in muscles."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-resp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Plants photosynthesize in light but also respire all the time, including at night. Explain why plants cannot 'stop' respiring in the dark.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Respiration is optional for plants" },
              { id: "b", text: "Darkness triggers respiration" },
              { id: "c", text: "Respiration occurs in mitochondria continuously to release ATP needed for cell maintenance, growth and repair — it does not need light" },
              { id: "d", text: "Plants respire only when photosynthesis stops" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Continuous respiration", statement: "All living cells respire constantly — ATP needed for life processes regardless of light." },
            ],
            steps: [
              { reasoning: "Cells need ATP continuously for maintenance/growth.", working: "\\text{ATP need}", marks: 1, markCode: "M" },
              { reasoning: "Respiration in mitochondria does not require light — happens day and night.", working: "\\text{mitochondria}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Respiration is continuous — ATP always needed",
            commonErrors: ["Thinking respiration only happens in animals."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};

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
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "Oxygen" },
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
        {
          id: "cils-u3-photo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is released as a product of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Photosynthesis", statement: "Oxygen is released as a product." }],
            steps: [{ reasoning: "Photosynthesis releases oxygen.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Oxygen",
          },
        },
        {
          id: "cils-u3-photo-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The balanced equation uses 6 CO₂ per glucose. Enter the number of CO₂ molecules needed for 2 glucose molecules.",
          response: { type: "numeric", parts: [{ label: "CO₂ molecules", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Photosynthesis equation", statement: "6CO₂ produces one glucose molecule." }],
            steps: [{ reasoning: "$6\\times 2 = 12$ CO₂ molecules.", marks: 1, markCode: "A" }],
            finalAnswer: "12",
          },
        },
        {
          id: "cils-u3-photo-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State where carbon dioxide and water enter a plant for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Photosynthesis inputs", statement: "CO₂ enters leaves through stomata; water is absorbed by roots." }],
            steps: [
              { reasoning: "Carbon dioxide enters through stomata in leaves.", marks: 1, markCode: "M" },
              { reasoning: "Water is absorbed by root hairs and transported upward.", marks: 1, markCode: "A" }],
            finalAnswer: "CO₂ enters through stomata; water is absorbed by roots.",
          },
        },
        {
          id: "cils-u3-photo-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is chlorophyll mainly found in plant cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Cell wall" },
              { id: "c", text: "Vacuole" },
              { id: "d", text: "Chloroplasts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Chlorophyll", statement: "Chlorophyll is the green pigment in chloroplasts." }],
            steps: [{ reasoning: "Chloroplasts contain chlorophyll.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Chloroplasts",
          },
        },
        {
          id: "cils-u3-photo-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The equation has carbon dioxide and water as reactants and glucose and oxygen as products. Enter the total number of substances in the equation.",
          response: { type: "numeric", parts: [{ label: "Substances", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Word equation", statement: "Two reactants and two products are named." }],
            steps: [{ reasoning: "$2+2 = 4$ substances.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u3-photo-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain two uses of the glucose produced by photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Glucose uses", statement: "Glucose is used for respiration, growth and storage." }],
            steps: [
              { reasoning: "Glucose is respired to release energy for cell processes.", marks: 1, markCode: "M" },
              { reasoning: "It is used to make cellulose for growth and starch for storage.", marks: 1, markCode: "M" },
              { reasoning: "It provides materials and energy for the plant.", marks: 1, markCode: "A" }],
            finalAnswer: "Glucose provides energy through respiration and materials for growth and storage.",
          },
        },
        {
          id: "cils-u3-photo-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Through which leaf structures does carbon dioxide mainly enter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata" },
              { id: "b", text: "Guard cells only" },
              { id: "c", text: "Root hairs" },
              { id: "d", text: "Xylem vessels" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stomata", statement: "Stomata are pores allowing gas exchange." }],
            steps: [{ reasoning: "CO₂ diffuses into leaves through stomata.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Stomata",
          },
        },
        {
          id: "cils-u3-photo-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Photosynthesis requires light and chlorophyll as conditions. Enter the number of named conditions.",
          response: { type: "numeric", parts: [{ label: "Conditions", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Photosynthesis conditions", statement: "Light and chlorophyll are required conditions." }],
            steps: [{ reasoning: "Two conditions are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u3-photo-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What provides the energy for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity" },
              { id: "b", text: "Light energy absorbed by chlorophyll" },
              { id: "c", text: "Heat from the soil only" },
              { id: "d", text: "Wind energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Photosynthesis", statement: "Light energy drives the reaction." }],
            steps: [{ reasoning: "Chlorophyll absorbs light energy.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Light energy absorbed by chlorophyll",
          },
        },
        {
          id: "cils-u3-photo-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "One glucose molecule corresponds to 6 O₂ molecules. Enter the number of O₂ molecules produced from 3 glucose molecules.",
          response: { type: "numeric", parts: [{ label: "O₂ molecules", answer: 18 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Photosynthesis equation", statement: "6O₂ is produced per glucose molecule." }],
            steps: [{ reasoning: "$6\\times 3 = 18$ O₂ molecules.", marks: 1, markCode: "A" }],
            finalAnswer: "18",
          },
        },
        {
          id: "cils-u3-photo-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why oxygen is released during photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Photosynthesis products", statement: "Oxygen is a waste product released through stomata." }],
            steps: [
              { reasoning: "Water molecules are split during the reaction.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen is released as a by-product.", marks: 1, markCode: "M" },
              { reasoning: "It leaves the leaf through stomata.", marks: 1, markCode: "A" }],
            finalAnswer: "Oxygen is released as a by-product and exits through stomata.",
          },
        },
        {
          id: "cils-u3-photo-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do root cells usually lack chloroplasts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roots contain no water" },
              { id: "b", text: "Roots have no nuclei" },
              { id: "c", text: "Roots are underground and receive little light" },
              { id: "d", text: "Roots cannot respire" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Plant cells", statement: "Chloroplasts are needed only where light is available." }],
            steps: [{ reasoning: "Underground roots receive little or no light for photosynthesis.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Roots are underground and receive little light",
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
              { id: "a", text: "CO₂ concentration" },
              { id: "b", text: "Temperature" },
              { id: "c", text: "Light intensity" },
              { id: "d", text: "Soil pH" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factors", statement: "Light, CO₂, temperature only." },
            ],
            steps: [
              { reasoning: "Soil pH affects minerals, not directly photosynthesis rate.", working: "pH not factor", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Soil pH",
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
        {
          id: "cils-u3-lim-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The most expensive factor" },
              { id: "b", text: "Any factor that increases growth" },
              { id: "c", text: "The factor in shortest supply that caps the rate" },
              { id: "d", text: "A factor with no effect" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Limiting factor", statement: "The scarcest factor determines the maximum rate." }],
            steps: [{ reasoning: "The limiting factor restricts how fast the process can go.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** The factor in shortest supply that caps the rate",
          },
        },
        {
          id: "cils-u3-lim-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main limiting factors for photosynthesis are listed: light, CO₂ and temperature? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Factors", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Limiting factors", statement: "Light, CO₂ and temperature are the three factors." }],
            steps: [{ reasoning: "Three factors are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u3-lim-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why adding CO₂ will not increase photosynthesis when light is very low.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Limiting factor", statement: "Only increasing the limiting factor can raise the rate." }],
            steps: [
              { reasoning: "Light is in shortest supply and therefore limits the rate.", marks: 1, markCode: "M" },
              { reasoning: "Extra CO₂ cannot compensate for insufficient light energy.", marks: 1, markCode: "A" }],
            finalAnswer: "Light is limiting, so extra CO₂ cannot increase the rate.",
          },
        },
        {
          id: "cils-u3-lim-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At high light intensity, the rate graph levels off. What usually becomes limiting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaf colour" },
              { id: "b", text: "Soil texture" },
              { id: "c", text: "Root length" },
              { id: "d", text: "CO₂ concentration or temperature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Limiting factors", statement: "Another factor becomes limiting when light is abundant." }],
            steps: [{ reasoning: "CO₂ or temperature may then be in shortest supply.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** CO₂ concentration or temperature",
          },
        },
        {
          id: "cils-u3-lim-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Photosynthesis rate rises from 4 to 8 bubbles/min when temperature increases. Enter the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 100, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage change", statement: "Percentage increase = change divided by original × 100." }],
            steps: [{ reasoning: "$(8-4)\\div 4 \\times 100 = 100\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$100\\%$",
          },
        },
        {
          id: "cils-u3-lim-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Suggest two greenhouse methods that can increase photosynthesis rate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Greenhouse", statement: "Greenhouses can increase light, CO₂ and suitable temperature." }],
            steps: [
              { reasoning: "Add artificial lighting or improve light availability.", marks: 1, markCode: "M" },
              { reasoning: "Enrich CO₂ or maintain warm temperatures for enzyme activity.", marks: 1, markCode: "M" },
              { reasoning: "Both methods target limiting factors.", marks: 1, markCode: "A" }],
            finalAnswer: "Increase light and CO₂ or maintain an optimum temperature.",
          },
        },
        {
          id: "cils-u3-lim-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to photosynthesis enzymes at very high temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They work faster forever" },
              { id: "b", text: "They denature and the rate falls" },
              { id: "c", text: "They become chlorophyll" },
              { id: "d", text: "They stop all respiration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enzymes", statement: "High temperature can denature enzymes." }],
            steps: [{ reasoning: "Denatured enzymes cannot catalyse reactions effectively.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** They denature and the rate falls",
          },
        },
        {
          id: "cils-u3-lim-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plant photosynthesises at 10 bubbles/min at 20 °C and 20 bubbles/min at 30 °C. Enter the increase in bubbles per minute.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 10, unit: "bubbles/min" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Rate change", statement: "Increase = final rate minus initial rate." }],
            steps: [{ reasoning: "$20-10 = 10$ bubbles/min.", marks: 1, markCode: "A" }],
            finalAnswer: "$10$ bubbles/min",
          },
        },
        {
          id: "cils-u3-lim-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a plateau on a rate-versus-light graph indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis has stopped" },
              { id: "b", text: "Another factor has become limiting" },
              { id: "c", text: "Light has no effect" },
              { id: "d", text: "The plant has died" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Limiting factor", statement: "A plateau shows that another factor limits the rate." }],
            steps: [{ reasoning: "Increasing light no longer raises the rate.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Another factor has become limiting",
          },
        },
        {
          id: "cils-u3-lim-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "From these factors — light, CO₂, temperature, soil pH — enter the number that are NOT limiting factors for photosynthesis.",
          response: { type: "numeric", parts: [{ label: "Non-limiting", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Limiting factors", statement: "Only light, CO₂ and temperature directly limit photosynthesis rate." }],
            steps: [{ reasoning: "Soil pH is the only non-limiting factor listed.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cils-u3-lim-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Interpret a graph where photosynthesis rate rises then levels off as light increases.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Graph interpretation", statement: "Initial rise shows light limitation; plateau shows another factor limits." }],
            steps: [
              { reasoning: "At low light, light is the limiting factor.", marks: 1, markCode: "M" },
              { reasoning: "At high light, CO₂ or temperature becomes limiting.", marks: 1, markCode: "M" },
              { reasoning: "The plateau therefore does not mean the maximum possible rate is fixed forever.", marks: 1, markCode: "A" }],
            finalAnswer: "The rise shows light limitation; the plateau shows another factor is limiting.",
          },
        },
        {
          id: "cils-u3-lim-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does photosynthesis rate fall at very high temperatures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorophyll increases" },
              { id: "b", text: "CO₂ disappears" },
              { id: "c", text: "Enzymes denature" },
              { id: "d", text: "Roots stop absorbing minerals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enzymes", statement: "Very high temperatures denature enzymes." }],
            steps: [{ reasoning: "Denatured enzymes cannot catalyse photosynthesis efficiently.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Enzymes denature",
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
              { id: "a", text: "Upper epidermis" },
              { id: "b", text: "Palisade mesophyll" },
              { id: "c", text: "Spongy mesophyll" },
              { id: "d", text: "Veins" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Palisade", statement: "Column-shaped cells packed with chloroplasts — main photosynthesis site." },
            ],
            steps: [
              { reasoning: "Palisade mesophyll cells are elongated and dense with chloroplasts.", working: "palisade", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Palisade mesophyll",
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
        {
          id: "cils-u3-leaf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main role of the upper epidermis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas exchange" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Water transport" },
              { id: "d", text: "Protection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Epidermis", statement: "The epidermis is a protective outer layer." }],
            steps: [{ reasoning: "Upper epidermis protects the leaf.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Protection",
          },
        },
        {
          id: "cils-u3-leaf-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "About 80% of stomata are on the lower leaf surface. Enter the percentage on the lower surface.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Stomata", statement: "Most stomata are on the lower surface." }],
            steps: [{ reasoning: "The stated lower-surface percentage is 80%.", marks: 1, markCode: "A" }],
            finalAnswer: "$80\\%$",
          },
        },
        {
          id: "cils-u3-leaf-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why palisade mesophyll is important for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Palisade mesophyll", statement: "Palisade cells are packed with chloroplasts for light capture." }],
            steps: [
              { reasoning: "Palisade cells contain many chloroplasts.", marks: 1, markCode: "M" },
              { reasoning: "Their position near the upper surface helps absorb light.", marks: 1, markCode: "A" }],
            finalAnswer: "Palisade mesophyll contains many chloroplasts positioned to absorb light.",
          },
        },
        {
          id: "cils-u3-leaf-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do leaf veins contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Xylem and phloem" },
              { id: "b", text: "Only chloroplasts" },
              { id: "c", text: "Only root hairs" },
              { id: "d", text: "Only stomata" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Leaf veins", statement: "Veins contain xylem and phloem." }],
            steps: [{ reasoning: "Veins transport water and sugars.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Xylem and phloem",
          },
        },
        {
          id: "cils-u3-leaf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A leaf has upper epidermis, palisade mesophyll, spongy mesophyll, lower epidermis and veins. Enter the number of layers/features listed.",
          response: { type: "numeric", parts: [{ label: "Features", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Leaf structure", statement: "Five major features are listed." }],
            steps: [{ reasoning: "Five features are named.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u3-leaf-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how guard cells control gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Guard cells", statement: "Guard cells change shape to open or close stomata." }],
            steps: [
              { reasoning: "Guard cells swell or shrink to change pore size.", marks: 1, markCode: "M" },
              { reasoning: "Open stomata allow CO₂ in and O₂ out.", marks: 1, markCode: "M" },
              { reasoning: "Closing stomata reduces water loss.", marks: 1, markCode: "A" }],
            finalAnswer: "Guard cells open stomata for gas exchange and close them to reduce water loss.",
          },
        },
        {
          id: "cils-u3-leaf-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main role of air spaces in spongy mesophyll?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Store water" },
              { id: "b", text: "Allow gas diffusion" },
              { id: "c", text: "Produce pollen" },
              { id: "d", text: "Anchor roots" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Spongy mesophyll", statement: "Air spaces help gases diffuse through the leaf." }],
            steps: [{ reasoning: "Air spaces provide pathways for gas exchange.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Allow gas diffusion",
          },
        },
        {
          id: "cils-u3-leaf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Stomata allow carbon dioxide in, oxygen out and water vapour out. Enter the number of substances exchanged.",
          response: { type: "numeric", parts: [{ label: "Substances", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Stomata", statement: "Stomata exchange gases and lose water vapour." }],
            steps: [{ reasoning: "Three substances are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u3-leaf-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the waxy cuticle mainly reduce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light absorption" },
              { id: "b", text: "Water loss" },
              { id: "c", text: "Root growth" },
              { id: "d", text: "Mineral uptake" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cuticle", statement: "The waxy cuticle reduces evaporation from the leaf." }],
            steps: [{ reasoning: "The cuticle waterproofs the leaf surface.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Water loss",
          },
        },
        {
          id: "cils-u3-leaf-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If 90% of stomata are below and 10% above, enter the difference between lower and upper percentages.",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage difference", statement: "Difference = lower percentage minus upper percentage." }],
            steps: [{ reasoning: "$90-10 = 80\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$80\\%$",
          },
        },
        {
          id: "cils-u3-leaf-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how leaf structure is adapted for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Leaf adaptation", statement: "Leaf structure supports light capture, gas exchange and transport." }],
            steps: [
              { reasoning: "Palisade cells contain many chloroplasts to absorb light.", marks: 1, markCode: "M" },
              { reasoning: "Stomata and air spaces allow gas exchange.", marks: 1, markCode: "M" },
              { reasoning: "Veins transport water and sugars, and thinness aids diffusion.", marks: 1, markCode: "A" }],
            finalAnswer: "Leaf structure supports light capture, gas exchange and transport for photosynthesis.",
          },
        },
        {
          id: "cils-u3-leaf-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which leaf tissue is the main site of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Upper epidermis" },
              { id: "b", text: "Palisade mesophyll" },
              { id: "c", text: "Veins" },
              { id: "d", text: "Lower epidermis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Palisade mesophyll", statement: "Palisade cells are the main photosynthetic tissue." }],
            steps: [{ reasoning: "Palisade cells contain most chloroplasts.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Palisade mesophyll",
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

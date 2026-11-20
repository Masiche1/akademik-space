import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "myps3-u2-lesson-2-2",
  code: "2-2",
  title: "Photosynthesis and Respiration",
  goal: "I CAN write equations for photosynthesis and aerobic respiration, compare them, and explain gas exchange and limiting factors.",
  standards: [
    "Key concept: Relationships",
    "MYP Sciences: Living things",
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
  ],
  vocabulary: [
    { term: "Photosynthesis", definition: "The process by which plants use light energy to convert carbon dioxide and water into glucose and oxygen." },
    { term: "Aerobic respiration", definition: "The process by which cells release energy from glucose using oxygen, producing carbon dioxide and water." },
    { term: "Chlorophyll", definition: "The green pigment in chloroplasts that absorbs light energy for photosynthesis." },
    { term: "Limiting factor", definition: "A factor that limits the rate of a process when it is in shortest supply, e.g. light, temperature, CO₂." },
    { term: "Gas exchange", definition: "The movement of gases (O₂ and CO₂) between an organism and its environment." },
    { term: "Stomata", definition: "Tiny pores on leaf surfaces that allow gas exchange." },
  ],
  concepts: [
    {
      id: "myps3-u2-photosynthesis",
      title: "Photosynthesis",
      skill: "Describe photosynthesis, its equation, inputs and outputs, and limiting factors.",
      lesson: {
        sections: [
          {
            heading: "The process",
            body: "Photosynthesis occurs in **chloroplasts** using **chlorophyll**. Plants take in carbon dioxide through **stomata** and water through roots. Light energy is used to convert these into glucose and oxygen.",
          },
          {
            heading: "The equation",
            body: "$$\\text{carbon dioxide}+\\text{water}\\xrightarrow{\\text{light}}\\text{glucose}+\\text{oxygen}$$\n\nIn symbols: $6CO_2+6H_2O\\to C_6H_{12}O_6+6O_2$ (simplified for MYP: $CO_2+H_2O\\to glucose+O_2$).",
          },
          {
            heading: "Limiting factors",
            body: "The rate of photosynthesis is limited by the factor in shortest supply: **light intensity**, **temperature**, or **carbon dioxide concentration**. Increasing any one factor only increases the rate until another factor becomes limiting.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis equation", statement: "$CO_2+H_2O\\xrightarrow{\\text{light}}\\text{glucose}+O_2$" },
          { name: "Limiting factors", statement: "Light, temperature and CO₂ concentration limit the rate" },
        ],
        workedExample: {
          problem: "A plant is kept in bright light but low CO₂. If CO₂ is increased, will photosynthesis rate increase? Explain.",
          solution: "Yes — CO₂ was the limiting factor. Increasing it will increase the rate until light or temperature becomes limiting.",
        },
      },
      questions: [
        {
          id: "myps3-u2-photosynthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the raw materials for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and glucose" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Nitrogen and water" },
              { id: "d", text: "Oxygen and water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Uses CO₂ and water to make glucose and oxygen." },
            ],
            steps: [
              { reasoning: "Reactants are carbon dioxide and water.", working: "CO_2+H_2O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide and water",
            commonErrors: ["Choosing oxygen — that's a product."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the green pigment that absorbs light for photosynthesis, and state where photosynthesis mainly occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chlorophyll", statement: "Green pigment in chloroplasts that absorbs light." },
              { kind: "definition", name: "Chloroplast", statement: "Organelle where photosynthesis occurs." },
            ],
            steps: [
              { reasoning: "Chlorophyll absorbs light energy.", working: "\\text{chlorophyll}", marks: 1, markCode: "M" },
              { reasoning: "Photosynthesis occurs in chloroplasts (mainly in leaves).",
                working: "\\text{chloroplasts}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chlorophyll; chloroplasts",
            commonErrors: ["Saying mitochondria."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the concept of a limiting factor using light intensity as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factor", statement: "The factor in shortest supply limits the rate." },
            ],
            steps: [
              { reasoning: "Define limiting factor.", working: "\\text{factor in shortest supply}", marks: 1, markCode: "M" },
              { reasoning: "Apply to light: at low light, increasing light increases rate.", working: "\\text{low light}\\to\\text{increasing light helps}", marks: 1, markCode: "M" },
              { reasoning: "At high light, another factor (CO₂ or temperature) becomes limiting.",
                working: "\\text{plateau when another factor limits}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A limiting factor is the one in shortest supply; increasing light only helps until another factor limits",
            commonErrors: ["Saying light always increases the rate."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how light intensity affects the rate of photosynthesis in pondweed.",
          parts: [
            { label: "a", prompt: "Identify the independent, dependent and control variables.", marks: 3 },
            { label: "b", prompt: "Describe how the student would measure the rate of photosynthesis.", marks: 2 },
            { label: "c", prompt: "Predict and explain the shape of the graph of rate vs light intensity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test variables", statement: "Independent: what you change; Dependent: what you measure; Control: what you keep constant." },
              { kind: "principle", name: "Limiting factors", statement: "Rate increases then plateaus when another factor limits." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: light intensity. Dependent: rate of photosynthesis.", working: "\\text{independent: light; dependent: rate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controls: CO₂ concentration, temperature, water depth, plant species.", working: "\\text{controls: CO}_2\\text{, temp, depth, species}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", working: "\\text{independent, dependent, controls}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Count bubbles of oxygen per minute, or measure mass change.", working: "\\text{count bubbles/min or mass change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeat for each light intensity and plot graph.", working: "\\text{repeat and plot}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Graph rises steeply at low light, then levels off.", working: "\\text{rises then plateaus}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain: at low light, light is limiting; at high light, CO₂ or temperature becomes limiting.", working: "\\text{limiting factor changes}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude plateau.", working: "\\text{plateau}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) independent: light intensity; dependent: rate; controls: CO₂, temperature, depth, species (b) count bubbles/min (c) rises then plateaus as another factor becomes limiting",
            commonErrors: ["Not identifying control variables.", "Expecting a straight line."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 R1 A1 for (c).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide and water" },
              { id: "b", text: "Glucose and oxygen" },
              { id: "c", text: "Oxygen and water" },
              { id: "d", text: "Glucose and carbon dioxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Uses CO₂ and water to make glucose and oxygen." },
            ],
            steps: [
              { reasoning: "Products are glucose (food) and oxygen.", working: "\\text{glucose}+O_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Glucose and oxygen",
            commonErrors: ["Choosing reactants — CO₂ and water are inputs."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Through which structures does a leaf mainly take in carbon dioxide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Root hairs" },
              { id: "b", text: "Stomata" },
              { id: "c", text: "Chloroplasts" },
              { id: "d", text: "Xylem vessels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stomata", statement: "Tiny pores on leaf surfaces that allow gas exchange." },
            ],
            steps: [
              { reasoning: "CO₂ enters through stomata; water enters through roots.", working: "\\text{stomata}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Stomata",
            commonErrors: ["Choosing root hairs — those absorb water, not CO₂."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A limiting factor is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The factor that is always in shortest supply everywhere" },
              { id: "b", text: "The factor in shortest supply that limits the rate of the process" },
              { id: "c", text: "Any factor that affects the reaction" },
              { id: "d", text: "The factor that is present in largest amount" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factor", statement: "The factor in shortest supply limits the rate of the process." },
            ],
            steps: [
              { reasoning: "Only the scarcest factor restricts the rate.", working: "\\text{shortest supply}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The factor in shortest supply that limits the rate",
            commonErrors: ["Thinking every factor limits the rate equally."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation $6CO_2+6H_2O\\to C_6H_{12}O_6+6O_2$, how many carbon dioxide molecules are needed to produce one glucose molecule?",
          response: { type: "numeric", parts: [{ label: "CO₂ molecules", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient", statement: "The number in front of a formula gives the number of molecules." },
            ],
            steps: [
              { reasoning: "The coefficient before $CO_2$ is 6; one glucose has coefficient 1.", working: "6CO_2\\to C_6H_{12}O_6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\text{ molecules}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ molecules",
            commonErrors: ["Counting carbon atoms (6) instead of molecules — coincidentally the same here, but the reasoning differs."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pondweed produces 15 bubbles per minute at low light intensity and 45 bubbles per minute at high light intensity. Calculate the percentage increase in the rate.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 200, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase = (new − old) ÷ old × 100" },
            ],
            steps: [
              { reasoning: "Increase = 45 − 15 = 30 bubbles per minute.", working: "45-15=30", marks: 1, markCode: "M" },
              { reasoning: "Percentage increase = $\\frac{30}{15}\\times100=200\\%$.", working: "\\frac{30}{15}\\times100=200\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200\\%$",
            commonErrors: ["Dividing by the new value (45) instead of the original (15)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation $6CO_2+6H_2O\\to C_6H_{12}O_6+6O_2$, how many water molecules are needed to produce one glucose molecule?",
          response: { type: "numeric", parts: [{ label: "Water molecules", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Carbon dioxide + water → glucose + oxygen, using light energy." },
            ],
            steps: [
              { reasoning: "One $C_6H_{12}O_6$ molecule contains 6 carbon atoms, so 6 $CO_2$ are needed.", working: "C_6\\Rightarrow 6CO_2", marks: 1, markCode: "M" },
              { reasoning: "Balancing hydrogen needs 6 $H_2O$ molecules on the left.", working: "6H_2O", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ water molecules",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is NOT a limiting factor for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light intensity" },
              { id: "b", text: "Temperature" },
              { id: "c", text: "Carbon dioxide concentration" },
              { id: "d", text: "Wind speed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factors", statement: "Light, temperature and CO₂ concentration limit the rate of photosynthesis." },
            ],
            steps: [
              { reasoning: "Wind speed is not one of the three limiting factors.", working: "\\text{wind}\\notin\\{\\text{light, temp, }CO_2\\}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Wind speed",
            commonErrors: ["Thinking any environmental factor is a limiting factor."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The white parts of a variegated leaf do not photosynthesise. What is the most likely reason?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They receive no water" },
              { id: "b", text: "They lack chlorophyll" },
              { id: "c", text: "They are dead tissue" },
              { id: "d", text: "They block out the light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chlorophyll", statement: "The green pigment that absorbs light energy for photosynthesis." },
            ],
            steps: [
              { reasoning: "White areas have no chlorophyll, so they cannot absorb light energy.", working: "\\text{no chlorophyll}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They lack chlorophyll",
            commonErrors: ["Saying the white parts are dead — they are living but lack pigment."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A plant has plenty of light and water but is in a closed container with low carbon dioxide. Explain what happens to the rate of photosynthesis if the CO₂ concentration is increased, referring to limiting factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factor", statement: "The rate is limited by the factor in shortest supply." },
            ],
            steps: [
              { reasoning: "With low CO₂, carbon dioxide is the limiting factor.", working: "CO_2\\text{ limiting}", marks: 1, markCode: "M" },
              { reasoning: "Increasing CO₂ removes this restriction, so the rate increases.", working: "\\text{rate increases}", marks: 1, markCode: "R" },
              { reasoning: "The increase continues only until light or temperature becomes the new limiting factor.", working: "\\text{plateau when another factor limits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rate increases because CO₂ was limiting; it plateaus when light or temperature becomes limiting",
            commonErrors: ["Saying the rate increases without limit."],
            examinerNote: "M1 R1 A1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant produces oxygen at a rate of 12 cm³ per minute. How much oxygen is produced in 5 minutes?",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 60, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Total = rate × time" },
            ],
            steps: [
              { reasoning: "Multiply rate by time.", working: "12\\times5=60", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "60\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$ cm³",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of chlorophyll in photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It absorbs light energy to drive the reaction" },
              { id: "b", text: "It stores glucose" },
              { id: "c", text: "It absorbs carbon dioxide" },
              { id: "d", text: "It releases oxygen directly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chlorophyll", statement: "Green pigment in chloroplasts that absorbs light energy." },
            ],
            steps: [
              { reasoning: "Chlorophyll absorbs light energy, which powers the conversion of CO₂ and water into glucose and oxygen.", working: "\\text{absorbs light}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It absorbs light energy to drive the reaction",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u2-photosynthesis-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A plant's photosynthesis rate is 20 units at 20 °C and 36 units at 25 °C. Calculate the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase = (new − old) ÷ old × 100" },
            ],
            steps: [
              { reasoning: "Increase = 36 − 20 = 16 units; percentage increase = $\\frac{16}{20}\\times100$.", working: "\\frac{16}{20}\\times100", marks: 1, markCode: "M" },
              { reasoning: "The rate increases by 80% as temperature rises — until enzymes denature at very high temperatures.", working: "0.8\\times100=80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\%$",
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u2-respiration",
      title: "Aerobic respiration and gas exchange",
      skill: "Describe aerobic respiration, compare it with photosynthesis, and explain gas exchange in plants and humans.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "Cells release energy from glucose using oxygen:\n\n$$\\text{glucose}+\\text{oxygen}\\to\\text{carbon dioxide}+\\text{water}+\\text{energy}$$\n\nThis occurs in **mitochondria**. It is the opposite of photosynthesis in terms of reactants and products.",
          },
          {
            heading: "Comparing the two processes",
            body: "| | Photosynthesis | Aerobic respiration |\n|---|---|---|\n| Occurs in | Chloroplasts (plants) | Mitochondria (all cells) |\n| Reactants | CO₂ + H₂O | Glucose + O₂ |\n| Products | Glucose + O₂ | CO₂ + H₂O + energy |\n| Energy | Stores energy (needs light) | Releases energy |",
          },
          {
            heading: "Gas exchange",
            body: "Plants exchange gases through **stomata** (CO₂ in, O₂ out during day). Humans exchange gases in **alveoli** (O₂ in, CO₂ out). Gas exchange relies on **diffusion** — gases move from high to low concentration.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "$\\text{glucose}+O_2\\to CO_2+H_2O+\\text{energy}$" },
          { name: "Gas exchange", statement: "Diffusion of gases across surfaces (stomata, alveoli)" },
        ],
        workedExample: {
          problem: "Compare the equations of photosynthesis and aerobic respiration.",
          solution: "They are opposites: photosynthesis uses CO₂ + H₂O to make glucose + O₂ (stores energy); respiration uses glucose + O₂ to make CO₂ + H₂O + energy (releases energy).",
        },
      },
      questions: [
        {
          id: "myps3-u2-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose and oxygen" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Carbon dioxide, water and energy" },
              { id: "d", text: "Oxygen and energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration", statement: "Glucose + O₂ → CO₂ + H₂O + energy." },
            ],
            steps: [
              { reasoning: "Products include CO₂, water and energy.", working: "CO_2+H_2O+energy", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon dioxide, water and energy",
            commonErrors: ["Forgetting energy is a product."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-respiration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does aerobic respiration mainly occur in cells?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitochondria", statement: "Organelle where aerobic respiration occurs." },
            ],
            steps: [
              { reasoning: "State the organelle.", working: "\\text{mitochondria}", marks: 1, markCode: "M" },
              { reasoning: "Mention it's where energy is released.", working: "\\text{energy release}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitochondria",
            commonErrors: ["Saying chloroplasts."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-respiration-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how gas exchange occurs in the alveoli of human lungs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Gases move from high to low concentration." },
              { kind: "principle", name: "Alveoli structure", statement: "Thin walls, large surface area, moist lining." },
            ],
            steps: [
              { reasoning: "O₂ diffuses from alveoli (high) into blood (low); CO₂ diffuses out.", working: "\\text{diffusion down gradient}", marks: 1, markCode: "M" },
              { reasoning: "Alveoli have thin walls and large surface area for efficient exchange.", working: "\\text{thin walls, large area}", marks: 1, markCode: "M" },
              { reasoning: "Conclude efficient gas exchange.", working: "\\text{efficient exchange}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Gases diffuse across thin alveolar walls from high to low concentration; large surface area maximises exchange",
            commonErrors: ["Saying gases move against the gradient."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u2-respiration-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A plant is placed in a sealed container with a CO₂ sensor.",
          parts: [
            { label: "a", prompt: "Predict what happens to CO₂ levels in the dark, and explain why.", marks: 2 },
            { label: "b", prompt: "Predict what happens to CO₂ levels in bright light, and explain why.", marks: 2 },
            { label: "c", prompt: "Explain why CO₂ levels might rise again after a period of bright light.", marks: 2 },
            { label: "d", prompt: "Discuss how this experiment shows the balance between photosynthesis and respiration.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photosynthesis vs respiration", statement: "Photosynthesis uses CO₂; respiration produces CO₂." },
            ],
            steps: [
              { part: "a", reasoning: "In dark, no photosynthesis; respiration produces CO₂.", working: "\\text{CO}_2\\text{ rises}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explain: only respiration occurs.", working: "\\text{respiration only}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "In bright light, photosynthesis uses CO₂ faster than respiration produces it.", working: "\\text{CO}_2\\text{ falls}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain: photosynthesis rate exceeds respiration.", working: "\\text{photosynthesis dominates}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "When light decreases, photosynthesis slows but respiration continues.", working: "\\text{photosynthesis slows}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "CO₂ production by respiration exceeds use by photosynthesis.", working: "\\text{respiration dominates}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The experiment shows both processes occur simultaneously.", working: "\\text{both occur}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Net CO₂ change depends on which process is faster.", working: "\\text{net depends on rates}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CO₂ rises — respiration only (b) CO₂ falls — photosynthesis exceeds respiration (c) CO₂ rises — photosynthesis slows, respiration continues (d) shows balance between the two processes",
            commonErrors: ["Thinking plants only photosynthesise."],
            examinerNote: "M1 R1 per part; R1 A1 for (d).",
          },
        },
        {
          id: "myps3-u2-respiration-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the reactants of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose and oxygen" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Oxygen and carbon dioxide" },
              { id: "d", text: "Glucose and carbon dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration", statement: "Glucose + oxygen → carbon dioxide + water + energy." },
            ],
            steps: [
              { reasoning: "Glucose is the fuel and oxygen is required for aerobic respiration.", working: "\\text{glucose}+O_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glucose and oxygen",
            commonErrors: ["Choosing the products — CO₂ and water are outputs."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u2-respiration-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which organelle does aerobic respiration mainly occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Chloroplast" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitochondria", statement: "Organelles where aerobic respiration releases energy." },
            ],
            steps: [
              { reasoning: "Respiration occurs in mitochondria; chloroplasts are for photosynthesis.", working: "\\text{mitochondria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Mitochondrion",
            commonErrors: ["Choosing chloroplast — that is photosynthesis."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-respiration-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gas is a waste product of aerobic respiration?",
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
              { kind: "definition", name: "Aerobic respiration", statement: "Produces carbon dioxide, water and energy." },
            ],
            steps: [
              { reasoning: "CO₂ is excreted as a waste gas; oxygen is a reactant.", working: "CO_2\\text{ waste}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon dioxide",
            commonErrors: ["Choosing oxygen — it is used up, not produced."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-respiration-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation $C_6H_{12}O_6+6O_2\\to6CO_2+6H_2O$, how many oxygen molecules are needed per glucose molecule?",
          response: { type: "numeric", parts: [{ label: "O₂ molecules", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient", statement: "The number in front of a formula gives the number of molecules." },
            ],
            steps: [
              { reasoning: "The coefficient before $O_2$ is 6; glucose has coefficient 1.", working: "6O_2\\to C_6H_{12}O_6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\text{ molecules}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ molecules",
            commonErrors: ["Counting oxygen atoms instead of molecules."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-respiration-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation $C_6H_{12}O_6+6O_2\\to6CO_2+6H_2O$, how many water molecules are produced per glucose molecule respired?",
          response: { type: "numeric", parts: [{ label: "Water molecules", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration", statement: "Glucose + oxygen → carbon dioxide + water + energy." },
            ],
            steps: [
              { reasoning: "The 6 hydrogen atoms in glucose form water — each $H_2O$ needs 2 H, so 6 waters form.", working: "6H\\to 6H_2O", marks: 1, markCode: "M" },
              { reasoning: "The coefficient before $H_2O$ is 6, matching the 6 oxygens left after $6CO_2$.", working: "6H_2O", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ water molecules",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-respiration-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Diffusion is the movement of particles:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Against the concentration gradient, using energy" },
              { id: "b", text: "From a high concentration to a low concentration" },
              { id: "c", text: "Only through solids" },
              { id: "d", text: "From low concentration to high concentration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diffusion", statement: "Net movement of particles from high to low concentration." },
            ],
            steps: [
              { reasoning: "Diffusion occurs down the concentration gradient without energy.", working: "\\text{high}\\to\\text{low}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** From a high concentration to a low concentration",
            commonErrors: ["Reversing the direction of movement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-respiration-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are the alveoli in human lungs efficient for gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are thick-walled and small" },
              { id: "b", text: "They have thin walls, a large surface area and a moist lining" },
              { id: "c", text: "They produce oxygen directly" },
              { id: "d", text: "They are filled with blood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Alveoli structure", statement: "Thin walls, large surface area and moist lining maximise diffusion." },
            ],
            steps: [
              { reasoning: "These features maximise the rate of diffusion of gases.", working: "\\text{thin walls, large area, moist}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Thin walls, large surface area and a moist lining",
            commonErrors: ["Saying alveoli produce oxygen — they only exchange gases."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-respiration-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An athlete's breathing rate increases from 15 to 25 breaths per minute during exercise. Calculate the increase in breathing rate.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 10, unit: "breaths/min" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate change", statement: "Increase = final value − initial value" },
            ],
            steps: [
              { reasoning: "Subtract the resting rate from the exercise rate.", working: "25-15=10", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "10\\text{ breaths/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ breaths per minute",
            commonErrors: ["Calculating a percentage instead of the absolute increase."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-respiration-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare photosynthesis and aerobic respiration in terms of where they occur, their reactants, their products and their energy effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Photosynthesis vs respiration", statement: "Photosynthesis stores energy in chloroplasts; respiration releases energy in mitochondria." },
            ],
            steps: [
              { reasoning: "Location: photosynthesis in chloroplasts (plants); respiration in mitochondria (all cells).", working: "\\text{chloroplasts vs mitochondria}", marks: 1, markCode: "R" },
              { reasoning: "Reactants/products are reversed: photosynthesis uses CO₂ + H₂O → glucose + O₂; respiration uses glucose + O₂ → CO₂ + H₂O.", working: "\\text{reactants/products reversed}", marks: 1, markCode: "R" },
              { reasoning: "Energy: photosynthesis stores energy using light; respiration releases energy for the cell.", working: "\\text{stores vs releases energy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photosynthesis: chloroplasts, CO₂+H₂O→glucose+O₂, stores energy. Respiration: mitochondria, glucose+O₂→CO₂+H₂O, releases energy",
            commonErrors: ["Saying plants do not respire."],
            examinerNote: "R1 R1 A1.",
          },
        },
        {
          id: "myps3-u2-respiration-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A leaf absorbs carbon dioxide at a rate of 0.4 cm³ per minute through its stomata. How much carbon dioxide is absorbed in 10 minutes?",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 4, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas exchange in leaves", statement: "CO₂ diffuses in through stomata for photosynthesis." },
            ],
            steps: [
              { reasoning: "Total = rate × time.", working: "0.4\\times10", marks: 1, markCode: "M" },
              { reasoning: "0.4 × 10 = 4 cm³ of CO₂ absorbed.", working: "0.4\\times10=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ cm³",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-respiration-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about plants and respiration is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants only photosynthesise and never respire" },
              { id: "b", text: "Plants respire only at night" },
              { id: "c", text: "Plants carry out both photosynthesis and respiration" },
              { id: "d", text: "Plants do not need oxygen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant respiration", statement: "Plant cells respire continuously to release energy." },
            ],
            steps: [
              { reasoning: "All living cells respire; plants also photosynthesise in daylight.", working: "\\text{both processes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Plants carry out both photosynthesis and respiration",
            commonErrors: ["Thinking plants only photosynthesise."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-respiration-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Aerobic respiration is described as the 'opposite' of photosynthesis because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their reactants and products are reversed" },
              { id: "b", text: "Both release energy" },
              { id: "c", text: "They occur in the same organelle" },
              { id: "d", text: "They only occur in animals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Photosynthesis vs respiration", statement: "The two processes reverse each other's reactants and products." },
            ],
            steps: [
              { reasoning: "Photosynthesis uses CO₂ + H₂O → glucose + O₂; respiration reverses this, and energy flow is opposite too.", working: "\\text{reactants/products swapped}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Their reactants and products are reversed",
            examinerNote: "B1 for (a).",
          },
        },
      ],
    },
  ],
};

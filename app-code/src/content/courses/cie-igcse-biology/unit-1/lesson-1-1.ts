import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieb-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Structure",
  goal: "I CAN identify and describe the structure and function of plant and animal cells, including specialised cells.",
  standards: ["0653 1.1", "0653 1.2"],
  vocabulary: [
    { term: "Cell", definition: "The basic structural and functional unit of all living organisms." },
    { term: "Nucleus", definition: "Contains genetic material (DNA) and controls cell activities." },
    { term: "Cell membrane", definition: "Partially permeable barrier controlling what enters and leaves the cell." },
    { term: "Cytoplasm", definition: "Site of many metabolic reactions; contains organelles." },
    { term: "Chloroplast", definition: "Contains chlorophyll; site of photosynthesis (plant cells only)." },
    { term: "Vacuole", definition: "Large fluid-filled sac in plant cells containing cell sap; maintains turgor." },
    { term: "Mitochondrion", definition: "Site of aerobic respiration; releases energy as ATP." },
    { term: "Ribosome", definition: "Site of protein synthesis." },
    { term: "Cell wall", definition: "Rigid cellulose layer outside the membrane in plant cells; provides support." },
  ],
  concepts: [
    {
      id: "cieb-u1-cell-structure",
      title: "Eukaryotic cell structure",
      skill: "Label and describe the organelles of plant and animal cells and link structure to function.",
      lesson: {
        sections: [
          {
            heading: "Animal cell organelles",
            body: "- **Nucleus**: DNA/control centre; has a nuclear envelope with pores.\n- **Cell membrane**: partially permeable phospholipid bilayer.\n- **Cytoplasm**: gel-like matrix where reactions occur.\n- **Mitochondria**: folded inner membrane (cristae) for aerobic respiration.\n- **Ribosomes**: tiny protein factories, free or on rough ER.\n- **Vesicles**: membrane-bound transport packages.",
          },
          {
            heading: "Plant cell extras",
            body: "Plant cells additionally have:\n\n- **Cell wall**: cellulose, outside the membrane — support and shape.\n- **Chloroplasts**: contain chlorophyll for photosynthesis.\n- **Large permanent vacuole**: cell sap, maintains turgor pressure.",
          },
          {
            heading: "Prokaryotic cells",
            body: "Bacteria are prokaryotic: no nucleus (DNA in a nucleoid), no membrane-bound organelles, smaller. Have a cell wall, cell membrane, cytoplasm, ribosomes, and often plasmids and flagella.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do plant cells maintain turgor while animal cells do not?",
          solution: "The large permanent vacuole pushes the cell membrane against the rigid cell wall, creating turgor. Animal cells lack a cell wall and large vacuole.",
        },
      },
      questions: [
        {
          id: "cieb-u1-cell-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is found in plant cells but NOT in animal cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell wall" },
              { id: "b", text: "Cell membrane" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Mitochondrion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant vs animal", statement: "Plant cells have cell wall, chloroplasts, large vacuole; animal cells do not." },
            ],
            steps: [
              { reasoning: "Recall the differences.", working: "\\text{cell wall}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cell wall",
            commonErrors: ["Choosing chloroplast — also correct but not listed; cell wall is the standard answer."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the nucleus in a cell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nucleus", statement: "Contains DNA/genetic material; controls cell activities." },
            ],
            steps: [
              { reasoning: "Give the primary function.", working: "\\text{contains DNA / controls cell}", marks: 1, markCode: "M" },
              { reasoning: "Complete the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contains the cell's DNA/genetic material and controls cell activities.",
            commonErrors: ["Saying 'stores food' — that's the vacuole."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student observes a cell under a microscope and sees: a cell wall, chloroplasts, and a large central vacuole. Identify the cell type and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell features", statement: "Cell wall + chloroplasts + large vacuole = plant cell." },
            ],
            steps: [
              { reasoning: "Identify the diagnostic features.", working: "\\text{wall, chloroplasts, vacuole}", marks: 1, markCode: "M" },
              { reasoning: "Conclude plant cell.", working: "\\text{plant cell}", marks: 1, markCode: "M" },
              { reasoning: "Justify: these are absent in animal cells.", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plant cell — it has a cell wall, chloroplasts and a large permanent vacuole.",
            commonErrors: ["Ignoring the vacuole and only citing chloroplasts."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The table lists cell structures: nucleus, cell membrane, cytoplasm, mitochondria, ribosomes, chloroplasts, cell wall, vacuole.",
          parts: [
            { label: "a", prompt: "Which three are found ONLY in plant cells?", marks: 2 },
            { label: "b", prompt: "State the function of mitochondria.", marks: 2 },
            { label: "c", prompt: "A red blood cell has no nucleus. Suggest one advantage of this adaptation.", marks: 3 },
            { label: "d", prompt: "Explain why prokaryotic cells are generally smaller than eukaryotic cells.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant-only structures", statement: "Chloroplasts, cell wall, (large) vacuole." },
              { kind: "property", name: "Mitochondria", statement: "Aerobic respiration → ATP." },
              { kind: "property", name: "Prokaryote size", statement: "No membrane-bound organelles; DNA not packaged in nucleus." },
            ],
            steps: [
              { part: "a", reasoning: "Identify plant-only structures.", working: "\\text{chloroplasts, cell wall, vacuole}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "List all three.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the function.", working: "\\text{aerobic respiration / energy release}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete: produces ATP for cell activities.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Without a nucleus, more room for haemoglobin.", working: "\\text{more haemoglobin / oxygen capacity}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Also: no cell division needed — mature cell.", working: "\\text{no division}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Link to function: carries more O2.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Prokaryotes lack membrane-bound organelles, so less compartmentalisation needed.", working: "\\text{no organelles}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chloroplasts, cell wall, vacuole (b) aerobic respiration/ATP production (c) more haemoglobin → greater oxygen-carrying capacity (d) no membrane-bound organelles",
            commonErrors: ["In (c) saying 'to make more cells' — RBCs don't divide."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the site of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chloroplast" },
              { id: "b", text: "Mitochondrion" },
              { id: "c", text: "Ribosome" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Chloroplast", statement: "Contains chlorophyll; site of photosynthesis." },
            ],
            steps: [
              { reasoning: "Recall the site of photosynthesis.", working: "\\text{chloroplast}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chloroplast",
            commonErrors: ["Choosing mitochondrion — that is the site of respiration."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure forms a partially permeable barrier around the cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell membrane" },
              { id: "b", text: "Cell wall" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Cytoplasm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cell membrane", statement: "Partially permeable barrier controlling entry/exit of substances." },
            ],
            steps: [
              { reasoning: "Recall the barrier structure.", working: "\\text{cell membrane}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cell membrane",
            commonErrors: ["Choosing cell wall — it is fully permeable to water and only in plant cells."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organelle is found in BOTH plant and animal cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosome" },
              { id: "b", text: "Chloroplast" },
              { id: "c", text: "Cell wall" },
              { id: "d", text: "Large permanent vacuole" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Shared organelles", statement: "Nucleus, membrane, cytoplasm, mitochondria and ribosomes occur in both cell types." },
            ],
            steps: [
              { reasoning: "Identify the shared organelle.", working: "\\text{ribosome}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ribosome",
            commonErrors: ["Choosing chloroplast — plant cells only."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How do prokaryotic cells differ from eukaryotic cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have no membrane-bound nucleus or organelles" },
              { id: "b", text: "They are always larger" },
              { id: "c", text: "They contain chloroplasts" },
              { id: "d", text: "They are always multicellular" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Prokaryote", statement: "DNA in a nucleoid; no membrane-bound organelles." },
            ],
            steps: [
              { reasoning: "Recall the key difference.", working: "\\text{no membrane-bound nucleus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They have no membrane-bound nucleus or organelles",
            commonErrors: ["Thinking prokaryotes are larger — they are generally smaller."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the main role of the large permanent vacuole in plant cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maintaining turgor pressure" },
              { id: "b", text: "Site of aerobic respiration" },
              { id: "c", text: "Protein synthesis" },
              { id: "d", text: "Storage of DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vacuole", statement: "Cell sap pushes membrane against cell wall → turgor." },
            ],
            steps: [
              { reasoning: "Link vacuole to turgor.", working: "\\text{turgor}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Maintaining turgor pressure",
            commonErrors: ["Choosing respiration — that is the mitochondrion."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Where in the cell does protein synthesis take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosomes" },
              { id: "b", text: "Lysosomes" },
              { id: "c", text: "Vacuoles" },
              { id: "d", text: "Cell walls" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ribosomes", statement: "Site of protein synthesis." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{ribosomes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ribosomes",
            commonErrors: ["Choosing nucleus — it holds DNA but does not synthesise protein directly."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A red blood cell is about 8 μm in diameter. Express this diameter in millimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.008, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cell size units", statement: "1 mm = 1000 μm, so divide μm by 1000 to get mm." },
            ],
            steps: [
              { reasoning: "Convert μm to mm.", working: "8 \\mu\\text{m} \\div 1000", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "0.008 \\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.008 mm",
            commonErrors: ["Multiplying by 1000 instead of dividing — μm is the smaller unit."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A typical plant cell is about 0.1 mm wide and a typical bacterium about 0.002 mm wide. How many times wider is the plant cell than the bacterium?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cell size comparison", statement: "Divide larger size by smaller size to get the ratio." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "\\frac{0.1}{0.002}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 times wider",
            commonErrors: ["Dividing the wrong way round — plant cell is larger."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A nucleus measures 0.01 mm across and the whole cell measures 0.05 mm across. What percentage of the cell's width is the nucleus?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage calculation", statement: "Percentage = part / whole × 100." },
            ],
            steps: [
              { reasoning: "Apply the percentage formula.", working: "\\frac{0.01}{0.05} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 20\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20%",
            commonErrors: ["Inverting the ratio — nucleus is the part, cell is the whole."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A chloroplast is 4 μm long. On a micrograph it measures 8 mm. Calculate the magnification of the micrograph.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnification", statement: "M = image size / actual size; convert units so they match." },
            ],
            steps: [
              { reasoning: "Convert actual size to mm: 4 μm = 0.004 mm, then apply formula.", working: "\\frac{8}{0.004}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 2000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "×2000",
            commonErrors: ["Forgetting to convert μm to mm — units must match."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the cell membrane is described as 'partially permeable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Partially permeable", statement: "Allows some substances through but not others." },
            ],
            steps: [
              { reasoning: "Small molecules (water, O2, glucose) can pass.", working: "\\text{small molecules pass}", marks: 1, markCode: "M" },
              { reasoning: "Large molecules (proteins) are blocked.", working: "\\text{large molecules blocked}", marks: 1, markCode: "M" },
              { reasoning: "This selectivity controls the cell's internal environment.", working: "\\text{controls contents}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: it is selectively permeable, not fully open or fully closed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It allows small molecules like water and oxygen through but blocks larger ones like proteins, so the cell controls what enters and leaves.",
            commonErrors: ["Saying 'fully permeable' — the word 'partially' is essential."],
          },
        },
        {
          id: "cieb-u1-cell-structure-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Plant cells maintain their shape even in hypotonic solutions while animal cells do not.",
          parts: [
            { label: "a", prompt: "State the three structures found only in plant cells.", marks: 3 },
            { label: "b", prompt: "Explain how turgor is produced in a plant cell.", marks: 3 },
            { label: "c", prompt: "Explain why an animal cell placed in distilled water bursts.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant-only structures", statement: "Cell wall, chloroplasts, large permanent vacuole." },
              { kind: "property", name: "Turgor vs lysis", statement: "Rigid wall resists pressure; animal cells lack a wall." },
            ],
            steps: [
              { part: "a", reasoning: "Cell wall.", working: "\\text{cell wall}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Chloroplasts.", working: "\\text{chloroplasts}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Large permanent vacuole.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water enters by osmosis → vacuole expands.", working: "\\text{water enters}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cell sap pushes membrane against wall.", working: "\\text{pressure on wall}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wall prevents bursting → turgid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Water enters by osmosis (distilled water is hypotonic).", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Animal cell has no rigid wall to resist.", working: "\\text{no cell wall}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cell swells and bursts (haemolysis for RBCs).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cell wall, chloroplasts, large vacuole (b) water enters by osmosis, vacuole expands and pushes membrane against rigid wall → turgor (c) water enters by osmosis but no cell wall resists → cell bursts",
            commonErrors: ["In (c) saying 'the cell shrivels' — that happens in hypertonic solution."],
          },
        },
      ],
    },
    {
      id: "cieb-u1-specialised-cells",
      title: "Specialised cells",
      skill: "Describe how specialised cells (nerve, muscle, red blood, sperm, egg, root hair, xylem) are adapted to their function.",
      lesson: {
        sections: [
          {
            heading: "Animal specialisations",
            body: "- **Red blood cell**: no nucleus, biconcave → max surface area for O2 transport.\n- **Nerve cell (neuron)**: long axon, dendrites → transmit impulses over distance.\n- **Sperm**: flagellum for swimming, acrosome enzymes, many mitochondria.\n- **Egg (ovum)**: large cytoplasm for embryo nutrients, jelly coat.",
          },
          {
            heading: "Plant specialisations",
            body: "- **Root hair cell**: hair-like extension → huge surface area for water/mineral absorption.\n- **Xylem vessel**: dead, hollow tubes → transport water; lignin strengthens.\n- **Guard cell**: kidney-shaped, chloroplasts → control stomatal opening.",
          },
          {
            heading: "Structure–function link",
            body: "Always connect the feature to the job: surface area ↔ absorption, length ↔ transmission, hollow ↔ transport.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a root hair cell have a hair-like extension?",
          solution: "It greatly increases surface area for absorbing water and mineral ions from soil.",
        },
      },
      questions: [
        {
          id: "cieb-u1-specialised-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature of a red blood cell maximises oxygen transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No nucleus" },
              { id: "b", text: "Large nucleus" },
              { id: "c", text: "Cell wall" },
              { id: "d", text: "Flagellum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RBC adaptation", statement: "No nucleus → more haemoglobin." },
            ],
            steps: [
              { reasoning: "Recall the adaptation.", working: "\\text{no nucleus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No nucleus",
            commonErrors: ["Choosing biconcave shape — also correct but not listed."],
          },
        },
        {
          id: "cieb-u1-specialised-cells-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one adaptation of a sperm cell for fertilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sperm adaptations", statement: "Flagellum (swim), acrosome enzymes (penetrate), mitochondria (energy)." },
            ],
            steps: [
              { reasoning: "Give one valid adaptation.", working: "\\text{flagellum/acrosome/mitochondria}", marks: 1, markCode: "M" },
              { reasoning: "Link to function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flagellum for swimming / acrosome enzymes to penetrate the egg / many mitochondria for energy.",
            commonErrors: ["Listing a plant cell feature."],
          },
        },
        {
          id: "cieb-u1-specialised-cells-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of a root hair cell is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Root hair", statement: "Hair extension → surface area for absorption." },
            ],
            steps: [
              { reasoning: "Identify the structure.", working: "\\text{hair-like extension}", marks: 1, markCode: "M" },
              { reasoning: "State the function.", working: "\\text{absorb water/minerals}", marks: 1, markCode: "M" },
              { reasoning: "Link structure to function.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The hair-like extension massively increases surface area for absorbing water and mineral ions from the soil.",
            commonErrors: ["Saying 'to store water' — it's for absorption."],
          },
        },
        {
          id: "cieb-u1-specialised-cells-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the adaptations of a nerve cell and a red blood cell.",
          parts: [
            { label: "a", prompt: "State two adaptations of a nerve cell.", marks: 2 },
            { label: "b", prompt: "State two adaptations of a red blood cell.", marks: 2 },
            { label: "c", prompt: "Explain how each adaptation relates to the cell's function.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nerve cell", statement: "Long axon, dendrites, myelin sheath." },
              { kind: "property", name: "RBC", statement: "No nucleus, biconcave disc." },
            ],
            steps: [
              { part: "a", reasoning: "List nerve adaptations.", working: "\\text{long axon, dendrites}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State them.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "List RBC adaptations.", working: "\\text{no nucleus, biconcave}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State them.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nerve: long axon → transmit over distance.", working: "\\text{distance}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Nerve: dendrites → receive signals from many sources.", working: "\\text{receive signals}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "RBC: no nucleus → more haemoglobin → more O2.", working: "\\text{O2 capacity}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "RBC: biconcave → max surface area for gas exchange.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete the explanations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) long axon, dendrites/myelin (b) no nucleus, biconcave (c) explained links",
            commonErrors: ["Describing structure without linking to function."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u1-cell-biology-notes",
      title: "Cell biology — revision notes",
      summary: "Cell structure, plant vs animal differences, specialised cells and structure–function links.",
      sections: [
        {
          heading: "Key organelles",
          body: "Nucleus (DNA/control), membrane (permeable barrier), mitochondria (respiration/ATP), ribosomes (protein), chloroplasts (photosynthesis, plant only), cell wall + vacuole (plant only).",
        },
        {
          heading: "Specialised cells",
          body: "RBC: no nucleus → more haemoglobin. Root hair: surface area → absorption. Xylem: hollow dead tubes → water transport. Nerve: long axon → transmission.",
        },
        {
          heading: "Exam technique",
          body: "Always link structure to function: 'surface area → absorption', 'hollow → transport', 'no nucleus → more haemoglobin'.",
        },
      ],
    },
  ],
};

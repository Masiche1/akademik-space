import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cils-u2-lesson-2-2",
  code: "2-2",
  title: "Cells: structure and function",
  goal: "I CAN identify cell structures and explain their functions in plant and animal cells.",
  standards: ["0893 Biology: cells"],
  vocabulary: [
    { term: "Cell", definition: "The basic unit of all living organisms." },
    { term: "Nucleus", definition: "Control centre containing DNA — controls cell activities." },
    { term: "Cytoplasm", definition: "Jelly-like substance where chemical reactions occur." },
    { term: "Cell membrane", definition: "Outer boundary controlling what enters and leaves." },
    { term: "Cell wall", definition: "Rigid outer layer in plant cells — provides support." },
    { term: "Chloroplast", definition: "Contains chlorophyll for photosynthesis — plant cells only." },
    { term: "Vacuole", definition: "Stores water and nutrients — large in plant cells." },
  ],
  concepts: [
    {
      id: "cils-u2-cells",
      title: "Cell structures",
      skill: "Identify organelles and match them to their functions in plant and animal cells.",
      lesson: {
        sections: [
          {
            heading: "Common structures",
            body: "- **Nucleus**: contains DNA, controls cell\n- **Cytoplasm**: site of reactions\n- **Cell membrane**: controls entry/exit\n- **Mitochondria**: release energy (respiration)",
          },
          {
            heading: "Plant-only structures",
            body: "- **Cell wall**: rigid support (cellulose)\n- **Chloroplasts**: photosynthesis\n- **Large vacuole**: storage/turgor",
          },
          {
            heading: "Animal-only structures",
            body: "Animal cells lack cell wall, chloroplasts and large vacuole. They have small temporary vacuoles.",
          },
        ],
        keyFormulas: [
          { name: "Cell structures", statement: "Nucleus=control; membrane=boundary; mitochondria=energy; chloroplasts=photosynthesis; wall=support; vacuole=storage." },
        ],
        workedExample: {
          problem: "Why can't animal cells perform photosynthesis?",
          solution: "No chloroplasts — the organelles containing chlorophyll needed to capture light energy.",
        },
      },
      questions: [
        {
          id: "cils-u2-cell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure controls what enters and leaves the cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell membrane" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Cell wall" },
              { id: "d", text: "Cytoplasm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cell membrane", statement: " selectively permeable boundary." },
            ],
            steps: [
              { reasoning: "Cell membrane controls substance movement.", working: "membrane", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cell membrane",
            commonErrors: ["Choosing (d) — cell wall is rigid support, not selective."],
          },
        },
        {
          id: "cils-u2-cell-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two structures found in plant cells but NOT in animal cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant-only", statement: "Cell wall, chloroplasts, large vacuole." },
            ],
            steps: [
              { reasoning: "Any two of: cell wall, chloroplasts, large permanent vacuole.", working: "wall/chloro/vacuole", marks: 1, markCode: "M" },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell wall and chloroplasts (or large vacuole)",
            commonErrors: ["Listing mitochondria — present in both."],
          },
        },
        {
          id: "cils-u2-cell-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant cell is placed in strong salt solution and shrinks. Explain which structure is involved and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Osmosis", statement: "Water leaves cell by osmosis; vacuole shrinks → cell loses turgor." },
            ],
            steps: [
              { reasoning: "Salt solution is hypertonic — water moves out of cell.", working: "hypertonic", marks: 1, markCode: "M" },
              { reasoning: "Vacuole loses water → cell membrane pulls away from cell wall (plasmolysis).", working: "plasmolysis", marks: 1, markCode: "M" },
              { reasoning: "Cell wall stays rigid but contents shrink.", working: "wall rigid", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water leaves by osmosis; vacuole shrinks and membrane pulls from wall — plasmolysis.",
            commonErrors: ["Saying cell wall shrinks — it's rigid cellulose, doesn't shrink."],
          },
        },
        {
          id: "cils-u2-cell-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare plant and animal cells.",
          parts: [
            { label: "a", prompt: "List three structures common to both.", marks: 2 },
            { label: "b", prompt: "List three plant-only structures.", marks: 2 },
            { label: "c", prompt: "Explain why plant cells need a cell wall.", marks: 2 },
            { label: "d", prompt: "Explain why chloroplasts are absent in root cells.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cell comparison", statement: "Shared: nucleus, membrane, cytoplasm, mitochondria. Plant adds: wall, chloroplasts, vacuole." },
            ],
            steps: [
              { part: "a", reasoning: "Nucleus, cell membrane, cytoplasm, mitochondria (any three).", working: "common", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cell wall, chloroplasts, large vacuole.", working: "plant only", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rigid support — plants can't move to find support; maintains shape against gravity.", working: "support", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Roots underground — no light for photosynthesis; chlorophyll useless.", working: "no light", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) nucleus/membrane/cytoplasm/mitochondria (b) wall/chloroplasts/vacuole (c) rigid support (d) no light underground",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying roots don't need chloroplasts — explain WHY (no light)."],
          },
        },
        {
          id: "cils-u2-cell-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell structure releases energy during respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondrion" },
              { id: "b", text: "Vacuole" },
              { id: "c", text: "Cell wall" },
              { id: "d", text: "Chloroplast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mitochondria", statement: "Mitochondria release energy through respiration." }],
            steps: [{ reasoning: "Mitochondria are the site of energy release.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mitochondrion",
          },
        },
        {
          id: "cils-u2-cell-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many plant-only structures are listed: cell wall, chloroplasts and large vacuole? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Structures", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Plant cells", statement: "Plant cells have three structures absent from typical animal cells." }],
            steps: [{ reasoning: "Cell wall, chloroplasts and large vacuole make three.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u2-cell-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the role of the cell membrane.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cell membrane", statement: "The membrane controls movement of substances into and out of the cell." }],
            steps: [
              { reasoning: "It forms the outer boundary of the cell.", marks: 1, markCode: "M" },
              { reasoning: "It selectively controls which substances enter or leave.", marks: 1, markCode: "A" }],
            finalAnswer: "The cell membrane controls what enters and leaves the cell.",
          },
        },
        {
          id: "cils-u2-cell-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do most chemical reactions in a cell take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytoplasm" },
              { id: "b", text: "Nucleus only" },
              { id: "c", text: "Vacuole only" },
              { id: "d", text: "Cell wall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cytoplasm", statement: "Cytoplasm is the site of many cell reactions." }],
            steps: [{ reasoning: "Most reactions occur in the cytoplasm.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cytoplasm",
          },
        },
        {
          id: "cils-u2-cell-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nucleus, cytoplasm, cell membrane and mitochondria are common to plant and animal cells. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Structures", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Cell structures", statement: "These four structures occur in both cell types." }],
            steps: [{ reasoning: "Four common structures are listed.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u2-cell-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why chloroplasts are important to plant cells.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chloroplasts", statement: "Chloroplasts contain chlorophyll and are the site of photosynthesis." }],
            steps: [
              { reasoning: "Chloroplasts contain chlorophyll that absorbs light energy.", marks: 1, markCode: "M" },
              { reasoning: "They are the site where photosynthesis produces glucose.", marks: 1, markCode: "M" },
              { reasoning: "This allows plants to make their own food.", marks: 1, markCode: "A" }],
            finalAnswer: "Chloroplasts contain chlorophyll and carry out photosynthesis to produce food.",
          },
        },
        {
          id: "cils-u2-cell-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main function of the large vacuole in a plant cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producing energy" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Controlling the nucleus" },
              { id: "d", text: "Storage and maintaining turgor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Vacuole", statement: "The vacuole stores substances and helps maintain turgor pressure." }],
            steps: [{ reasoning: "The vacuole stores water and maintains plant cell shape.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Storage and maintaining turgor",
          },
        },
        {
          id: "cils-u2-cell-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A typical plant cell has four common structures plus three plant-only structures. Enter the total number of distinct structures.",
          response: { type: "numeric", parts: [{ label: "Total", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Cell structures", statement: "Add common and plant-only structures." }],
            steps: [{ reasoning: "$4+3 = 7$ structures.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cils-u2-cell-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell structure contains DNA and controls cell activities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vacuole" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Cell membrane" },
              { id: "d", text: "Cytoplasm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nucleus", statement: "The nucleus contains DNA and controls cell activities." }],
            steps: [{ reasoning: "DNA in the nucleus controls cell functions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Nucleus",
          },
        },
        {
          id: "cils-u2-cell-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "From this list — nucleus, chloroplasts, cell wall, mitochondria, large vacuole — enter the number found only in plant cells.",
          response: { type: "numeric", parts: [{ label: "Count", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Plant-only structures", statement: "Chloroplasts, cell wall and large vacuole are plant-specific." }],
            steps: [{ reasoning: "Three listed structures are plant-only.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u2-cell-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare plant and animal cells in terms of three structures.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Plant vs animal cells", statement: "Both share nucleus, membrane, cytoplasm and mitochondria; plants add wall, chloroplasts and large vacuole." }],
            steps: [
              { reasoning: "Both have nucleus, cytoplasm, cell membrane and mitochondria.", marks: 1, markCode: "M" },
              { reasoning: "Plant cells also have a cell wall, chloroplasts and a large vacuole.", marks: 1, markCode: "M" },
              { reasoning: "Animal cells lack those plant-only structures.", marks: 1, markCode: "A" }],
            finalAnswer: "Both share four structures; plant cells add cell wall, chloroplasts and a large vacuole.",
          },
        },
        {
          id: "cils-u2-cell-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when a plant cell is placed in a very concentrated salt solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chloroplasts multiply" },
              { id: "b", text: "The nucleus disappears" },
              { id: "c", text: "The cell wall dissolves" },
              { id: "d", text: "Water leaves the cell and it may plasmolyse" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Osmosis", statement: "Water moves out of the cell into a more concentrated solution." }],
            steps: [{ reasoning: "Water loss can cause plasmolysis in plant cells.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Water leaves the cell and it may plasmolyse",
          },
        },
      ],
    },
    {
      id: "cils-u2-specialisation",
      title: "Specialised cells",
      skill: "Relate cell structure to function in specialised cells (nerve, muscle, red blood, root hair, xylem).",
      lesson: {
        sections: [
          {
            heading: "Structure fits function",
            body: "Specialised cells have adaptations for their job:\n- **Red blood cells**: no nucleus, haemoglobin — carry oxygen\n- **Nerve cells**: long axons — transmit signals fast\n- **Muscle cells**: many mitochondria — release lots of energy",
          },
          {
            heading: "Plant examples",
            body: "- **Root hair cells**: huge surface area — absorb water\n- **Xylem**: hollow tubes — transport water\n- **Guard cells**: control stomata — gas exchange",
          },
          {
            heading: "Why specialise?",
            body: "Multicellular organisms divide labour — specialised cells do specific jobs better than general cells.",
          },
        ],
        keyFormulas: [
          { name: "Specialisation", statement: "Cell structure adapts to function — e.g. root hair surface area for absorption." },
        ],
        workedExample: {
          problem: "Why do red blood cells have no nucleus?",
          solution: "More space for haemoglobin — the protein that carries oxygen.",
        },
      },
      questions: [
        {
          id: "cils-u2-spec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell is specialised for carrying oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Muscle cell" },
              { id: "b", text: "Root hair cell" },
              { id: "c", text: "Red blood cell" },
              { id: "d", text: "Nerve cell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "RBC", statement: "Haemoglobin carries oxygen." },
            ],
            steps: [
              { reasoning: "Red blood cells contain haemoglobin for oxygen transport.", working: "haemoglobin", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Red blood cell",
            commonErrors: ["Choosing nerve — signal transmission, not oxygen."],
          },
        },
        {
          id: "cils-u2-spec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do root hair cells have a large surface area?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure-function", statement: "Large SA = faster absorption of water/minerals." },
            ],
            steps: [
              { reasoning: "Root hairs absorb water and minerals from soil.", working: "absorb", marks: 1, markCode: "M" },
              { reasoning: "Large surface area increases absorption rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To maximise water/mineral absorption — larger surface area = faster uptake.",
            commonErrors: ["Saying 'to anchor plant' — that's root function, not hair cell."],
          },
        },
        {
          id: "cils-u2-spec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a nerve cell's structure helps it transmit signals quickly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Nerve cell", statement: "Long axon + myelin sheath = fast signal transmission." },
            ],
            steps: [
              { reasoning: "Axon is very long — connects distant body parts.", working: "long axon", marks: 1, markCode: "M" },
              { reasoning: "Myelin sheath insulates — speeds up electrical signals.", working: "myelin", marks: 1, markCode: "M" },
              { reasoning: "Dendrites receive signals from many sources.", working: "dendrites", marks: 1, markCode: "M" },
              { reasoning: "Structure-function link clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Long axon reaches far; myelin speeds signals; dendrites gather input — all for fast communication.",
            commonErrors: ["Generic 'nerve cells are important' — need structure-function link."],
          },
        },
        {
          id: "cils-u2-spec-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Match cells to functions: red blood cell, xylem vessel, guard cell, muscle cell.",
          parts: [
            { label: "a", prompt: "Red blood cell — function?", marks: 2 },
            { label: "b", prompt: "Xylem vessel — function?", marks: 2 },
            { label: "c", prompt: "Guard cell — function?", marks: 2 },
            { label: "d", prompt: "Muscle cell — function?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cell-function matching", statement: "Each specialised cell has structure adapted to its role." },
            ],
            steps: [
              { part: "a", reasoning: "Carry oxygen via haemoglobin.", working: "oxygen", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Transport water up plant.", working: "water transport", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Control stomata opening — regulate gas exchange/water loss.", working: "stomata", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Contract for movement; many mitochondria for energy; can be striated or smooth.", working: "contraction", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Function explained.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Adaptation noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) oxygen transport (b) water transport (c) stomatal control (d) contraction for movement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Detailed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Guard cells — control pores, not photosynthesis."],
          },
        },
        {
          id: "cils-u2-spec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main function of xylem vessels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carry oxygen in blood" },
              { id: "b", text: "Transport water through the plant" },
              { id: "c", text: "Store starch" },
              { id: "d", text: "Produce pollen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Xylem", statement: "Xylem transports water and dissolved minerals." }],
            steps: [{ reasoning: "Xylem carries water from roots to leaves.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Transport water through the plant",
          },
        },
        {
          id: "cils-u2-spec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many specialised cell types are named in the lesson: red blood cell, nerve cell, muscle cell, root hair cell, xylem vessel and guard cell? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Specialised cells", statement: "Six examples are listed." }],
            steps: [{ reasoning: "Six cell types are named.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cils-u2-spec-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why muscle cells contain many mitochondria.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Structure-function", statement: "Many mitochondria supply energy for contraction." }],
            steps: [
              { reasoning: "Muscle contraction requires a large amount of energy.", marks: 1, markCode: "M" },
              { reasoning: "Many mitochondria release more energy through respiration.", marks: 1, markCode: "A" }],
            finalAnswer: "Many mitochondria provide the energy needed for muscle contraction.",
          },
        },
        {
          id: "cils-u2-spec-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do guard cells control?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening and closing of stomata" },
              { id: "b", text: "Flower colour" },
              { id: "c", text: "Seed dispersal" },
              { id: "d", text: "Root hair growth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Guard cells", statement: "Guard cells control stomatal opening for gas exchange." }],
            steps: [{ reasoning: "Guard cells regulate the pores on leaves.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Opening and closing of stomata",
          },
        },
        {
          id: "cils-u2-spec-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A red blood cell has two special adaptations for oxygen transport. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Adaptations", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "RBC adaptations", statement: "No nucleus and haemoglobin are two key adaptations." }],
            steps: [{ reasoning: "Haemoglobin carries oxygen and lack of nucleus increases space.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-spec-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a root hair cell's structure helps it absorb water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Root hair", statement: "Large surface area and thin wall increase absorption." }],
            steps: [
              { reasoning: "The long extension greatly increases surface area.", marks: 1, markCode: "M" },
              { reasoning: "A thin cell wall shortens the diffusion distance for water.", marks: 1, markCode: "M" },
              { reasoning: "These adaptations increase the rate of water uptake.", marks: 1, markCode: "A" }],
            finalAnswer: "Large surface area and thin walls make root hair cells efficient at absorbing water.",
          },
        },
        {
          id: "cils-u2-spec-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature helps nerve cells transmit signals quickly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large vacuole" },
              { id: "b", text: "Chloroplasts" },
              { id: "c", text: "Cell wall" },
              { id: "d", text: "Long axon with myelin sheath" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nerve cell", statement: "Long axons and myelin speed signal transmission." }],
            steps: [{ reasoning: "Myelin insulates the axon and speeds impulses.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Long axon with myelin sheath",
          },
        },
        {
          id: "cils-u2-spec-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which named structures transport materials: red blood cells carrying oxygen and xylem vessels carrying water? Enter the number of examples.",
          response: { type: "numeric", parts: [{ label: "Examples", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Transport", statement: "Specialised structures transport substances." }],
            steps: [{ reasoning: "Two examples of transport are given.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-spec-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do multicellular organisms need specialised cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stops reproduction" },
              { id: "b", text: "All cells must be identical" },
              { id: "c", text: "Different cells can perform different jobs efficiently" },
              { id: "d", text: "It prevents growth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Specialisation", statement: "Specialised cells perform specific functions more efficiently." }],
            steps: [{ reasoning: "Division of labour improves efficiency.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Different cells can perform different jobs efficiently",
          },
        },
        {
          id: "cils-u2-spec-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "From root hair cells, xylem vessels and guard cells, enter the number that are plant specialisations.",
          response: { type: "numeric", parts: [{ label: "Cells", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Plant specialisations", statement: "All three examples are plant structures." }],
            steps: [{ reasoning: "All three are specialised plant cells or tissues.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u2-spec-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the link between cell structure and function using one example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Structure-function", statement: "Adaptations in a cell support its specific role." }],
            steps: [
              { reasoning: "Choose an example such as root hair cells or red blood cells.", marks: 1, markCode: "M" },
              { reasoning: "Describe a structural adaptation, such as large surface area or haemoglobin.", marks: 1, markCode: "M" },
              { reasoning: "Link the adaptation to the function it improves.", marks: 1, markCode: "A" }],
            finalAnswer: "Structure is adapted to function; e.g. root hairs have large surface area for absorption.",
          },
        },
        {
          id: "cils-u2-spec-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which specialised cell is adapted for transmitting electrical signals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guard cell" },
              { id: "b", text: "Root hair cell" },
              { id: "c", text: "Nerve cell" },
              { id: "d", text: "Xylem vessel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nerve cell", statement: "Nerve cells transmit electrical impulses." }],
            steps: [{ reasoning: "Nerve cells are specialised for signal transmission.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Nerve cell",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u2-cells-notes",
      title: "Cells — revision notes",
      summary: "Cell structures, plant vs animal, specialised cells.",
      sections: [
        {
          heading: "Structures",
          body: "Nucleus=control; membrane=boundary; cytoplasm=reactions; mitochondria=energy; chloroplasts=photosynthesis; wall=support; vacuole=storage.",
        },
        {
          heading: "Specialisation",
          body: "RBC=oxygen; nerve=signals; muscle=movement; root hair=absorption; xylem=water; guard=stomata. Structure fits function.",
        },
      ],
    },
  ],
};

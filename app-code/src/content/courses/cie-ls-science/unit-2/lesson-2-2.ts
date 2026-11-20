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
              { id: "c", text: "Cytoplasm" },
              { id: "d", text: "Cell wall" },
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
              { id: "a", text: "Red blood cell" },
              { id: "b", text: "Nerve cell" },
              { id: "c", text: "Muscle cell" },
              { id: "d", text: "Root hair cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "RBC", statement: "Haemoglobin carries oxygen." },
            ],
            steps: [
              { reasoning: "Red blood cells contain haemoglobin for oxygen transport.", working: "haemoglobin", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red blood cell",
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

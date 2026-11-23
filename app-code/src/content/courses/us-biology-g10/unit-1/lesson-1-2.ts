import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "bio10-u1-lesson-1-2",
  code: "1-2",
  title: "Membrane Transport",
  goal: "I CAN distinguish passive and active transport mechanisms, explain osmosis, and predict how cells respond to different environments.",
  standards: ["HS-LS1-2"],
  vocabulary: [
    { term: "Passive transport", definition: "Movement of substances across the membrane without energy input, down their gradient." },
    { term: "Active transport", definition: "Movement of substances against their gradient, requiring energy (ATP) and carrier proteins." },
    { term: "Diffusion", definition: "Net movement of particles from high to low concentration." },
    { term: "Osmosis", definition: "Diffusion of water across a selectively permeable membrane from low to high solute concentration." },
    { term: "Hypertonic", definition: "A solution with higher solute concentration than the cell's interior." },
    { term: "Hypotonic", definition: "A solution with lower solute concentration than the cell's interior." },
    { term: "Isotonic", definition: "A solution with equal solute concentration to the cell's interior." },
  ],
  concepts: [
    {
      id: "bio10-u1-passive-active",
      title: "Passive and active transport",
      skill: "Distinguish diffusion, osmosis, facilitated diffusion and active transport by mechanism and energy requirement.",
      lesson: {
        sections: [
          {
            heading: "Passive transport",
            body: "**Passive transport** moves substances across the membrane WITHOUT energy, down their concentration gradient:\n\n- **Simple diffusion**: small nonpolar molecules (O2, CO2) pass directly through the phospholipid bilayer.\n- **Facilitated diffusion**: polar/charged molecules (glucose, ions) pass through **channel proteins** or **carrier proteins** — still down gradient, no ATP needed.\n- **Osmosis**: water moves through aquaporins toward higher solute concentration.",
          },
          {
            heading: "Active transport",
            body: "**Active transport** moves substances AGAINST their gradient, requiring ATP:\n\n- **Protein pumps**: e.g., sodium-potassium pump (Na+/K+ ATPase) uses ATP to pump 3 Na+ out and 2 K+ in per cycle.\n- **Endocytosis**: membrane engulfs material into vesicle (phagocytosis = cell eating, pinocytosis = cell drinking).\n- **Exocytosis**: vesicle fuses with membrane to release contents.",
          },
          {
            heading: "Why active transport matters",
            body: "Cells need to maintain concentration gradients for nerve impulses, nutrient uptake, and pH regulation. Active transport is expensive — the Na+/K+ pump can consume up to 30% of a neuron's ATP. Without it, cells couldn't function against unfavorable gradients.",
          },
        ],
        keyFormulas: [
          { name: "Na+/K+ pump", statement: "3 Na+ out, 2 K+ in per ATP hydrolyzed" },
          { name: "Transport types", statement: "Passive: diffusion, facilitated, osmosis (no ATP); Active: pumps, endo/exocytosis (ATP)" },
        ],
        workedExample: {
          problem: "Glucose enters a cell through a carrier protein from high to low concentration. Is this passive or active?",
          solution: "Facilitated diffusion — passive because it moves down the concentration gradient without ATP, but uses a carrier protein because glucose is polar.",
        },
      },
      questions: [
        {
          id: "bio10-u1-passive-active-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process requires ATP to move substances against their concentration gradient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diffusion" },
              { id: "b", text: "Osmosis" },
              { id: "c", text: "Active transport" },
              { id: "d", text: "Facilitated diffusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Active transport", statement: "Requires ATP, moves against gradient." }],
            steps: [{ reasoning: "Only active transport uses ATP and moves substances against their gradient.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Active transport",
            commonErrors: ["Confusing facilitated diffusion with active transport."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio10-u1-passive-active-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between simple diffusion and facilitated diffusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simple diffusion", statement: "Direct through membrane, small nonpolar molecules." },
              { kind: "definition", name: "Facilitated diffusion", statement: "Via channel/carrier protein, polar molecules, still passive." },
            ],
            steps: [
              { reasoning: "Simple diffusion: small nonpolar molecules pass directly through phospholipid bilayer.", marks: 1, markCode: "B" },
              { reasoning: "Facilitated diffusion: polar/charged molecules use channel or carrier proteins.", marks: 1, markCode: "B" },
              { reasoning: "Both are passive (down gradient, no ATP), but facilitated requires protein assistance.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Simple: direct through bilayer (nonpolar); facilitated: via proteins (polar), both passive.",
            commonErrors: ["Thinking facilitated diffusion needs energy."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u1-passive-active-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the sodium-potassium pump is essential for nerve function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Na+/K+ pump", statement: "Maintains ion gradients essential for membrane potential." },
              { kind: "principle", name: "Nerve impulses", statement: "Ion gradients drive action potentials." },
            ],
            steps: [
              { reasoning: "The pump maintains high Na+ outside and high K+ inside the cell.", marks: 1, markCode: "B" },
              { reasoning: "These gradients create the resting membrane potential (~-70 mV).", marks: 1, markCode: "R" },
              { reasoning: "When ion channels open, ions flow down their gradients generating action potentials.", marks: 1, markCode: "B" },
              { reasoning: "Without the pump, gradients dissipate and nerves can't transmit signals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pump maintains ion gradients that drive nerve impulses.",
            commonErrors: ["Thinking pump creates the impulse directly."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u1-passive-active-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A cell is placed in three solutions: A (0.9% NaCl), B (0.1% NaCl), C (3.0% NaCl). The cell's interior is equivalent to 0.9% NaCl.",
          parts: [
            { label: "a", prompt: "Classify each solution as hypotonic, isotonic or hypertonic relative to the cell.", marks: 3 },
            { label: "b", prompt: "Predict what happens to the cell in solution B (water movement and cell appearance).", marks: 3 },
            { label: "c", prompt: "Predict what happens to the cell in solution C.", marks: 2 },
            { label: "d", prompt: "Explain why the cell doesn't burst in solution B despite water entering.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tonicity", statement: "Compare solute concentrations: hypotonic < isotonic < hypertonic." },
              { kind: "principle", name: "Osmosis", statement: "Water moves toward higher solute concentration." },
            ],
            steps: [
              { reasoning: "A (0.9%) = isotonic; B (0.1%) = hypotonic; C (3.0%) = hypertonic.", marks: 3, markCode: "B", part: "a" },
              { reasoning: "In hypotonic B, water enters the cell by osmosis.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Cell swells; animal cells may burst (lyse), plant cells become turgid.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Water moves in because B has lower solute concentration than cell interior.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "In hypertonic C, water leaves the cell.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Cell shrivels (crenates if animal, plasmolyzes if plant).", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Animal cells have no cell wall to resist swelling, but they lyse only if membrane can't stretch; in moderate hypotonic solutions they swell without necessarily bursting.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "The membrane has some elasticity; bursting requires extreme hypotonic conditions.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) A isotonic, B hypotonic, C hypertonic (b) water enters, cell swells (c) water leaves, cell shrivels (d) membrane elasticity resists bursting.",
            commonErrors: ["Reversing hypotonic/hypertonic."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u1-osmosis-tonicity",
      title: "Osmosis and tonicity",
      skill: "Apply osmosis principles to predict cell behavior in different solutions.",
      lesson: {
        sections: [
          {
            heading: "Osmosis details",
            body: "Osmosis is the diffusion of water across a selectively permeable membrane. Water moves from where solute concentration is LOW (more water) to where it's HIGH (less water).\n\n- **Hypotonic** (lower solute): water enters cell\n- **Hypertonic** (higher solute): water leaves cell\n- **Isotonic** (equal): no net water movement",
          },
          {
            heading: "Cell responses",
            body: "- **Animal cells**: lyse (burst) in hypotonic, crenate (shrink) in hypertonic\n- **Plant cells**: become turgid in hypotonic (cell wall prevents bursting), plasmolyze in hypertonic\n- **Protists**: contractile vacuoles pump out excess water in hypotonic environments",
          },
          {
            heading: "Medical applications",
            body: "IV fluids must be isotonic (0.9% NaCl) to avoid damaging blood cells. Hemolysis (red blood cell bursting) occurs in hypotonic solutions; crenation in hypertonic. Dialysis uses membranes to filter waste while keeping blood cells.",
          },
        ],
        keyFormulas: [
          { name: "Osmosis", statement: "Water → higher solute concentration" },
          { name: "Tonicity", statement: "Hypotonic: water in; Hypertonic: water out; Isotonic: no net movement" },
        ],
        workedExample: {
          problem: "A red blood cell is placed in distilled water. What happens and why?",
          solution: "Distilled water is hypotonic (no solute). Water rushes into the cell by osmosis. The RBC has no cell wall, so it swells and bursts (hemolysis).",
        },
      },
      questions: [
        {
          id: "bio10-u1-osmosis-tonicity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which solution would a plant cell become plasmolyzed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hypotonic" },
              { id: "b", text: "Isotonic" },
              { id: "c", text: "Hypertonic" },
              { id: "d", text: "Distilled water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Plasmolysis", statement: "Plant cell shrinks in hypertonic solution as water leaves." }],
            steps: [{ reasoning: "Hypertonic solution draws water out of the cell, causing plasmolysis.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Hypertonic",
            commonErrors: ["Confusing plasmolysis with turgor."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio10-u1-osmosis-tonicity-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why don't plant cells burst in hypotonic solutions like animal cells do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cell wall", statement: "Rigid wall resists expansion." }],
            steps: [
              { reasoning: "Water enters plant cells in hypotonic solutions by osmosis.", marks: 1, markCode: "B" },
              { reasoning: "The rigid cell wall prevents the cell from expanding beyond a limit.", marks: 1, markCode: "B" },
              { reasoning: "Cell becomes turgid (firm) instead of bursting; this provides structural support.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Cell wall prevents bursting; cell becomes turgid.",
            commonErrors: ["Thinking plant cells don't absorb water."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u1-osmosis-tonicity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why intravenous (IV) solutions must be isotonic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Isotonic IV", statement: "Matches blood solute concentration to prevent osmotic damage." }],
            steps: [
              { reasoning: "If IV were hypotonic, water would enter blood cells by osmosis, causing them to swell and burst (hemolysis).", marks: 1, markCode: "R" },
              { reasoning: "If IV were hypertonic, water would leave blood cells, causing them to shrivel (crenation).", marks: 1, markCode: "R" },
              { reasoning: "Isotonic solution (0.9% NaCl) matches plasma concentration, so no net water movement occurs.", marks: 1, markCode: "B" },
              { reasoning: "This keeps blood cells functioning normally during treatment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isotonic prevents hemolysis or crenation of blood cells.",
            commonErrors: ["Thinking any fluid works for IV."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "bio10-u1-osmosis-tonicity-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student places three identical plant cells in solutions of different solute concentrations and observes them after 30 minutes.",
          parts: [
            { label: "a", prompt: "Cell A is flaccid (limp), Cell B is turgid (firm), Cell C is plasmolyzed (shriveled). Match each to hypotonic, isotonic, or hypertonic solution.", marks: 3 },
            { label: "b", prompt: "Explain the water movement in each case.", marks: 3 },
            { label: "c", prompt: "If the student now places Cell B in the solution that plasmolyzed Cell C, predict what happens.", marks: 2 },
            { label: "d", prompt: "Explain why turgor pressure is important for non-woody plants.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Turgor", statement: "Water in hypotonic → turgid; water out in hypertonic → plasmolyzed." },
              { kind: "principle", name: "Osmosis", statement: "Water moves toward higher solute concentration." },
            ],
            steps: [
              { reasoning: "A flaccid = isotonic (no net water movement); B turgid = hypotonic (water in); C plasmolyzed = hypertonic (water out).", marks: 3, markCode: "B", part: "a" },
              { reasoning: "Hypotonic: water enters, cell swells against wall → turgid.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Isotonic: no net movement → flaccid/normal.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Hypertonic: water leaves, membrane pulls from wall → plasmolyzed.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Cell B (turgid) placed in hypertonic solution loses water and becomes plasmolyzed.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Water moves out because external solution has higher solute concentration.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Turgor pressure (water pressing against cell wall) provides structural support to non-woody plants.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Without turgor, herbaceous plants would wilt.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) A isotonic, B hypotonic, C hypertonic (b) water in/out explains each (c) becomes plasmolyzed (d) turgor supports plant.",
            commonErrors: ["Reversing tonicity terms."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};

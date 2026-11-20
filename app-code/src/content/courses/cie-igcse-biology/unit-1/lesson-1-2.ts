import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieb-u1-lesson-1-2",
  code: "1-2",
  title: "Cell Transport",
  goal: "I CAN explain diffusion, osmosis and active transport, and relate them to water potential and turgor in plant cells.",
  standards: ["0653 1.3"],
  vocabulary: [
    { term: "Diffusion", definition: "Net movement of particles from high to low concentration down a concentration gradient." },
    { term: "Osmosis", definition: "Net movement of water across a partially permeable membrane from high to low water potential." },
    { term: "Active transport", definition: "Movement of particles against a concentration gradient, requiring energy (ATP) and carrier proteins." },
    { term: "Partially permeable membrane", definition: "Allows small molecules (e.g. water) through but not large ones." },
    { term: "Water potential", definition: "Measure of tendency of water to move; pure water = 0, solutes lower it." },
    { term: "Turgor", definition: "Pressure of cell contents against the cell wall when vacuole is full." },
    { term: "Plasmolysis", definition: "Cell membrane pulls away from the wall when water leaves a plant cell." },
  ],
  concepts: [
    {
      id: "cieb-u1-diffusion-osmosis",
      title: "Diffusion and osmosis",
      skill: "Explain passive transport down gradients and predict effects on plant and animal cells.",
      lesson: {
        sections: [
          {
            heading: "Diffusion",
            body: "Particles move randomly and spread from high to low concentration until evenly distributed. No energy needed. Faster with higher temperature, bigger surface area, steeper gradient.",
          },
          {
            heading: "Osmosis",
            body: "Water moves across a partially permeable membrane from high to low **water potential** (effectively from dilute to concentrated solution). Three cases for a cell in solution:\n\n- **Hypotonic** (dilute): water enters → animal cell swells/lyses, plant cell becomes turgid.\n- **Hypertonic** (concentrated): water leaves → animal cell shrivels (crenates), plant cell plasmolyses.\n- **Isotonic**: no net movement.",
          },
          {
            heading: "Factors affecting rate",
            body: "Temperature, concentration gradient, surface area, and for osmosis the water potential difference.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A plant cell is placed in concentrated salt solution. Describe and explain what happens.",
          solution: "Water leaves by osmosis (solution has lower water potential). Vacuole shrinks, membrane pulls away from wall → plasmolysis.",
        },
      },
      questions: [
        {
          id: "cieb-u1-diffusion-osmosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Diffusion is the net movement of particles from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High to low concentration" },
              { id: "b", text: "Low to high concentration" },
              { id: "c", text: "High to low water potential only" },
              { id: "d", text: "Anywhere randomly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diffusion", statement: "High → low concentration gradient." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{high to low}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** High to low concentration",
            commonErrors: ["Confusing with active transport."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define osmosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Water movement across partially permeable membrane, high to low water potential." },
            ],
            steps: [
              { reasoning: "Give the key elements.", working: "\\text{water + PPM + water potential}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Net movement of water across a partially permeable membrane from high to low water potential.",
            commonErrors: ["Saying 'solute moves' — water moves, solute stays."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A red blood cell is placed in distilled water. Describe and explain the result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Hypotonic solution", statement: "Distilled water has higher water potential than cell contents." },
            ],
            steps: [
              { reasoning: "Identify water potential relationship.", working: "\\text{water enters}", marks: 1, markCode: "M" },
              { reasoning: "Describe the effect.", working: "\\text{cell swells/lysos}", marks: 1, markCode: "M" },
              { reasoning: "Explain: no cell wall to resist.", working: "\\text{no wall}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: haemolysis/lysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters by osmosis; the RBC swells and bursts (haemolysis) because it has no cell wall.",
            commonErrors: ["Saying it shrivels — that's hypertonic."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Potato cylinders are placed in solutions of different sucrose concentrations. After 30 minutes the mass changes are measured.",
          parts: [
            { label: "a", prompt: "Explain how you would determine the water potential of potato cells from this experiment.", marks: 3 },
            { label: "b", prompt: "Predict the result for a cylinder in distilled water vs concentrated sucrose.", marks: 2 },
            { label: "c", prompt: "Explain why a plant cell becomes plasmolysed but does not burst in concentrated solution.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Potato experiment", statement: "Mass change indicates water movement; isotonic point = cell water potential." },
              { kind: "property", name: "Plasmolysis", statement: "Membrane pulls from wall; wall prevents bursting." },
            ],
            steps: [
              { part: "a", reasoning: "Measure mass change for each concentration.", working: "\\text{mass change}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Plot % mass change vs concentration; find where change = 0.", working: "\\text{zero change point}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "That concentration is isotonic → equals cell water potential.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Distilled: water enters, cylinder gains mass/turgid. Concentrated: water leaves, loses mass/plasmolysed.", working: "\\text{gain vs lose}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both predictions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Water leaves → vacuole shrinks → membrane pulls away.", working: "\\text{membrane shrinks}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cell wall is rigid and prevents collapse.", working: "\\text{rigid wall}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cell does not burst because wall holds shape.", working: "\\text{no burst}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: plasmolysis is reversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) find isotonic concentration (zero mass change) (b) distilled: gains mass/turgid; concentrated: loses mass/plasmolysed (c) rigid cell wall prevents bursting",
            commonErrors: ["In (a) using length instead of mass — both acceptable but mass is standard."],
          },
        },
      ],
    },
    {
      id: "cieb-u1-active-transport",
      title: "Active transport",
      skill: "Explain active transport and distinguish it from diffusion and osmosis.",
      lesson: {
        sections: [
          {
            heading: "Definition",
            body: "Movement of particles **against** a concentration gradient — from low to high concentration. Requires energy (ATP) and specific carrier proteins. Example: root hair cells absorbing mineral ions from dilute soil solution.",
          },
          {
            heading: "Comparison table",
            body: "| Feature | Diffusion | Osmosis | Active transport |\n|---|---|---|---|\n| Direction | down gradient | down water potential | against gradient |\n| Energy | no | no | yes (ATP) |\n| Membrane | not required | partially permeable | carrier proteins |",
          },
          {
            heading: "Why needed?",
            body: "Cells must accumulate substances that are scarce outside (e.g. mineral ions for plants, glucose in gut lining). Passive transport can't do this.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Root hair cells absorb nitrate ions from soil where nitrate is dilute. How?",
          solution: "Active transport — ions move against their concentration gradient using ATP and carrier proteins.",
        },
      },
      questions: [
        {
          id: "cieb-u1-active-transport-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active transport moves particles:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Against the concentration gradient" },
              { id: "b", text: "Down the concentration gradient" },
              { id: "c", text: "Only water" },
              { id: "d", text: "Randomly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Against gradient, needs ATP." },
            ],
            steps: [
              { reasoning: "Recall the direction.", working: "\\text{against}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Against the gradient",
            commonErrors: ["Confusing with diffusion."],
          },
        },
        {
          id: "cieb-u1-active-transport-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two features of active transport that distinguish it from diffusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport", statement: "Against gradient; requires ATP/energy; uses carrier proteins." },
            ],
            steps: [
              { reasoning: "Give direction difference.", working: "\\text{against gradient}", marks: 1, markCode: "M" },
              { reasoning: "Give energy/carrier difference.", working: "\\text{ATP/carriers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moves against the concentration gradient and requires energy (ATP) with carrier proteins.",
            commonErrors: ["Only stating one feature."],
          },
        },
        {
          id: "cieb-u1-active-transport-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why root hair cells use active transport to absorb mineral ions even when the soil solution is dilute.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport need", statement: "Ions must move against gradient from dilute soil." },
            ],
            steps: [
              { reasoning: "Identify the gradient problem.", working: "\\text{dilute soil, concentrated cell}", marks: 1, markCode: "M" },
              { reasoning: "Explain passive can't work.", working: "\\text{diffusion goes wrong way}", marks: 1, markCode: "M" },
              { reasoning: "Describe active transport solution.", working: "\\text{ATP + carriers}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soil is dilute so ions must move against their gradient into the concentrated root hair cell; active transport uses ATP and carrier proteins to do this.",
            commonErrors: ["Saying 'diffusion is too slow' — it's direction, not speed."],
          },
        },
        {
          id: "cieb-u1-active-transport-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates osmosis using potato cylinders in different sucrose solutions.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how you would measure the dependent variable.", marks: 2 },
            { label: "c", prompt: "Explain how to find the isotonic concentration.", marks: 3 },
            { label: "d", prompt: "Suggest one control variable and why it matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Experimental design", statement: "Control all variables except the one tested." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: sucrose concentration. Dependent: mass/length change.", working: "\\text{conc vs mass}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weigh cylinders before and after; calculate % change.", working: "\\text{weigh before/after}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Describe the measurement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Plot % mass change against concentration.", working: "\\text{graph}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find concentration where change = 0 (or interpolate).", working: "\\text{zero point}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "That is the isotonic concentration = cell water potential.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control: temperature (affects osmosis rate) or cylinder size.", working: "\\text{temperature/size}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain why: keeps comparison fair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) conc / mass change (b) weigh before and after (c) find zero-change concentration (d) e.g. temperature",
            commonErrors: ["In (d) naming a variable that IS the independent one."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u1-cell-transport-notes",
      title: "Cell transport — revision notes",
      summary: "Diffusion, osmosis, active transport and water potential.",
      sections: [
        {
          heading: "The three processes",
          body: "Diffusion: particles down gradient, no energy. Osmosis: water across PPM down water potential. Active: particles against gradient, needs ATP + carriers.",
        },
        {
          heading: "Osmosis in cells",
          body: "Hypotonic → water in (turgid/lysed); hypertonic → water out (plasmolysed/crenated); isotonic → no net movement.",
        },
        {
          heading: "Exam technique",
          body: "- Always specify 'partially permeable membrane' for osmosis.\n- Water potential: pure water = 0, solutes lower it.\n- Active transport needs BOTH 'against gradient' AND 'ATP/carrier proteins'.",
        },
      ],
    },
  ],
};

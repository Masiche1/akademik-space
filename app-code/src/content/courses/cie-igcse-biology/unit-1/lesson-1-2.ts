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
              { id: "c", text: "Anywhere randomly" },
              { id: "d", text: "High to low water potential only" },
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
        {
          id: "cieb-u1-diffusion-osmosis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which solution has the highest water potential?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distilled water" },
              { id: "b", text: "Concentrated sucrose solution" },
              { id: "c", text: "Starch suspension" },
              { id: "d", text: "Salt water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water potential", statement: "Pure water has water potential 0; dissolved solutes lower it." },
            ],
            steps: [
              { reasoning: "Recall that pure water has the highest water potential.", working: "\\text{pure water} = 0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Distilled water",
            commonErrors: ["Choosing concentrated sucrose — solutes lower water potential."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During osmosis, water moves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From high to low water potential" },
              { id: "b", text: "From low to high water potential" },
              { id: "c", text: "From concentrated to dilute solution" },
              { id: "d", text: "Only when the solution is heated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Water moves across a partially permeable membrane from high to low water potential." },
            ],
            steps: [
              { reasoning: "Recall the direction of water movement.", working: "\\text{high} \\to \\text{low water potential}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** From high to low water potential",
            commonErrors: ["Choosing (d) — water actually moves from dilute to concentrated solution."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plant cell placed in a hypertonic solution will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasmolyse" },
              { id: "b", text: "Divide by mitosis" },
              { id: "c", text: "Burst" },
              { id: "d", text: "Become turgid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hypertonic solution", statement: "Water leaves the cell → vacuole shrinks → membrane pulls from wall (plasmolysis)." },
            ],
            steps: [
              { reasoning: "Match hypertonic conditions to the result.", working: "\\text{plasmolysis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Plasmolyse",
            commonErrors: ["Choosing turgid — that is the hypotonic result."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which factor does NOT affect the rate of diffusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Colour of the particles" },
              { id: "c", text: "Surface area" },
              { id: "d", text: "Concentration gradient" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Diffusion rate", statement: "Rate increases with temperature, steeper gradient and larger surface area." },
            ],
            steps: [
              { reasoning: "Identify the factor that is irrelevant.", working: "\\text{colour}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Colour of the particles",
            commonErrors: ["Choosing surface area — it does affect rate."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A potato cylinder has an initial mass of 20 g. After 1 hour in a sucrose solution its mass is 23 g. Calculate the percentage change in mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage mass change", statement: "Percentage change = (final − initial) / initial × 100." },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{23 - 20}{20} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15% (mass gain)",
            commonErrors: ["Dividing by the final mass instead of the initial mass."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The water potential of solution A is −200 kPa and that of solution B is −500 kPa. By how much higher is the water potential of A than that of B?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "kPa" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water potential difference", statement: "Subtract the two water potentials to find the gradient." },
            ],
            steps: [
              { reasoning: "Subtract B from A.", working: "-200 - (-500)", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 300 \\text{ kPa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 kPa",
            commonErrors: ["Subtracting in the wrong order and giving −300 kPa."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A potato cylinder weighing 30 g loses 3 g after being placed in a sucrose solution. Calculate the percentage mass change.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage mass change", statement: "Percentage change = (final − initial) / initial × 100; negative means mass loss." },
            ],
            steps: [
              { reasoning: "Final mass is 27 g; apply the formula.", working: "\\frac{27 - 30}{30} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= -10\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "−10%",
            commonErrors: ["Giving +10% — a mass loss gives a negative change."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why diffusion does not require a supply of energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diffusion", statement: "Net movement of particles down a concentration gradient using random motion." },
            ],
            steps: [
              { reasoning: "Particles move randomly due to their kinetic energy.", working: "\\text{random motion}", marks: 1, markCode: "M" },
              { reasoning: "Movement is down the gradient, so no work is done against it.", working: "\\text{down gradient}", marks: 1, markCode: "M" },
              { reasoning: "Conclude it is a passive process.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diffusion relies on random particle motion and moves down the concentration gradient, so no ATP or energy input is needed.",
            commonErrors: ["Saying particles 'want' to spread — it is random motion, not purpose."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A plant cell is placed in a solution with exactly the same water potential as its cell contents. Describe what happens to the cell and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Isotonic solution", statement: "Equal water potentials → no net movement of water." },
            ],
            steps: [
              { reasoning: "Equal water potentials make the solution isotonic.", working: "\\text{isotonic}", marks: 1, markCode: "M" },
              { reasoning: "Water still moves both ways but at equal rates.", working: "\\text{equal rates}", marks: 1, markCode: "M" },
              { reasoning: "No net water movement → cell neither swells nor shrinks.", working: "\\text{no net movement}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the cell remains unchanged (flaccid if it was).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The solution is isotonic; water moves in and out at equal rates so there is no net movement and the cell stays unchanged.",
            commonErrors: ["Claiming the cell becomes turgid — turgor requires net water entry."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about osmosis is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can only occur in animal cells" },
              { id: "b", text: "Solute particles move down their concentration gradient" },
              { id: "c", text: "It requires ATP to take place" },
              { id: "d", text: "Only water molecules move across the partially permeable membrane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Osmosis", statement: "Only water crosses the partially permeable membrane; solutes are usually too large." },
            ],
            steps: [
              { reasoning: "Recall which molecules cross during osmosis.", working: "\\text{water only}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Only water molecules move across the partially permeable membrane",
            commonErrors: ["Choosing (b) — that describes diffusion of solutes."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Onion epidermal cells are first placed in distilled water and then transferred to concentrated salt solution.",
          parts: [
            { label: "a", prompt: "Predict and explain the effect of the distilled water on the cells.", marks: 3 },
            { label: "b", prompt: "Predict and explain the effect of the concentrated salt solution.", marks: 3 },
            { label: "c", prompt: "Explain why these plant cells do not burst in distilled water.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell osmosis", statement: "Hypotonic → turgid; hypertonic → plasmolysed; cell wall prevents bursting." },
            ],
            steps: [
              { part: "a", reasoning: "Distilled water has higher water potential → water enters by osmosis.", working: "\\text{water enters}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vacuole expands → cell becomes turgid.", working: "\\text{turgid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cell wall prevents bursting.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Salt solution has lower water potential → water leaves.", working: "\\text{water leaves}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vacuole shrinks, membrane pulls from wall → plasmolysis.", working: "\\text{plasmolysis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cell wall keeps the overall shape.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rigid cellulose cell wall resists the internal pressure.", working: "\\text{rigid wall}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Membrane stays pressed against the wall (turgor).", working: "\\text{turgor}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: unlike animal cells, plant cells cannot lyse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) water enters → cell becomes turgid (b) water leaves → plasmolysis (c) rigid cell wall prevents bursting",
            commonErrors: ["In (b) saying the cell bursts — the wall prevents it."],
          },
        },
        {
          id: "cieb-u1-diffusion-osmosis-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Osmosis is defined as the movement of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gases through the air" },
              { id: "b", text: "Water across a partially permeable membrane" },
              { id: "c", text: "Particles against a concentration gradient" },
              { id: "d", text: "Solutes down a concentration gradient" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Net movement of water across a partially permeable membrane." },
            ],
            steps: [
              { reasoning: "Recall the definition of osmosis.", working: "\\text{water + PPM}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water across a partially permeable membrane",
            commonErrors: ["Confusing osmosis with diffusion of solutes."],
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
              { id: "b", text: "Randomly" },
              { id: "c", text: "Down the concentration gradient" },
              { id: "d", text: "Only water" },
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
        {
          id: "cieb-u1-active-transport-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process requires a supply of energy (ATP)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Osmosis" },
              { id: "b", text: "Active transport" },
              { id: "c", text: "All of these" },
              { id: "d", text: "Diffusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Movement against the gradient requiring ATP." },
            ],
            steps: [
              { reasoning: "Recall which process needs energy.", working: "\\text{active transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Active transport",
            commonErrors: ["Choosing diffusion — it is passive."],
          },
        },
        {
          id: "cieb-u1-active-transport-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active transport across a cell membrane uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carrier proteins" },
              { id: "b", text: "A cell wall" },
              { id: "c", text: "Chloroplasts" },
              { id: "d", text: "Flagella" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport", statement: "Uses specific carrier proteins plus ATP." },
            ],
            steps: [
              { reasoning: "Recall the membrane structures involved.", working: "\\text{carrier proteins}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carrier proteins",
            commonErrors: ["Choosing cell wall — it is not involved in transport across the membrane."],
          },
        },
        {
          id: "cieb-u1-active-transport-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Mineral ions such as nitrate are absorbed by root hair cells by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Osmosis" },
              { id: "c", text: "Diffusion down the concentration gradient" },
              { id: "d", text: "Active transport" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Root hair absorption", statement: "Ions move against their gradient from dilute soil → active transport." },
            ],
            steps: [
              { reasoning: "Recall how minerals enter root hairs.", working: "\\text{active transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Active transport",
            commonErrors: ["Choosing diffusion — soil is too dilute for net inward diffusion of ions."],
          },
        },
        {
          id: "cieb-u1-active-transport-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about active transport is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It moves only water molecules" },
              { id: "b", text: "It occurs only in plant cells" },
              { id: "c", text: "It needs no energy input" },
              { id: "d", text: "It moves substances from a low to a high concentration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Against the gradient, needs ATP and carrier proteins; occurs in all cells." },
            ],
            steps: [
              { reasoning: "Recall the direction of movement.", working: "\\text{low} \\to \\text{high}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It moves substances from a low to a high concentration",
            commonErrors: ["Choosing (b) — active transport always needs energy."],
          },
        },
        {
          id: "cieb-u1-active-transport-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A root hair cell absorbs nitrate ions at a rate of 0.8 mg per minute. Calculate the mass of nitrate absorbed in 15 minutes.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "mg" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rate calculation", statement: "Total = rate × time." },
            ],
            steps: [
              { reasoning: "Multiply rate by time.", working: "0.8 \\times 15", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "= 12 \\text{ mg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 mg",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cieb-u1-active-transport-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student measures that a cell absorbs 18 mg of a mineral ion in 20 minutes. Calculate the rate of absorption in mg per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.9, unit: "mg/min" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rate calculation", statement: "Rate = total amount / time." },
            ],
            steps: [
              { reasoning: "Divide total mass by time.", working: "\\frac{18}{20}", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "= 0.9 \\text{ mg/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9 mg per minute",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "cieb-u1-active-transport-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A carrier protein transports 750 ions per minute against the concentration gradient. Calculate how many ions it moves in 4 hours.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 180000, unit: "ions" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rate calculation", statement: "Convert hours to minutes, then multiply by the rate." },
            ],
            steps: [
              { reasoning: "4 hours = 240 minutes; multiply by rate.", working: "750 \\times 240", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 180000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "180 000 ions",
            commonErrors: ["Forgetting to convert hours to minutes."],
          },
        },
        {
          id: "cieb-u1-active-transport-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of active transport in living organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport examples", statement: "Mineral ions in root hairs; glucose/amino acids in small intestine; ions in kidney." },
            ],
            steps: [
              { reasoning: "Give one valid example.", working: "\\text{e.g. root hair ions}", marks: 1, markCode: "M" },
              { reasoning: "Give a second distinct example.", working: "\\text{e.g. glucose in intestine}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mineral ion uptake by root hair cells; absorption of glucose/amino acids in the small intestine (also ions in the kidney).",
            commonErrors: ["Listing diffusion examples such as oxygen uptake."],
          },
        },
        {
          id: "cieb-u1-active-transport-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why carrier proteins and ATP are both needed for active transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport mechanism", statement: "Carrier proteins bind specific substances; ATP supplies energy to pump them against the gradient." },
            ],
            steps: [
              { reasoning: "Carrier proteins provide a specific binding site for the substance.", working: "\\text{carrier protein}", marks: 1, markCode: "M" },
              { reasoning: "ATP provides the energy to move the substance against its gradient.", working: "\\text{ATP energy}", marks: 1, markCode: "M" },
              { reasoning: "Conclude both are essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carrier proteins bind and transport specific substances across the membrane, while ATP supplies the energy needed to move them against the concentration gradient.",
            commonErrors: ["Saying the carrier protein itself provides energy."],
          },
        },
        {
          id: "cieb-u1-active-transport-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which substance is absorbed from the small intestine mainly by active transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Glucose" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Intestinal absorption", statement: "Glucose and amino acids are absorbed against gradients by active transport." },
            ],
            steps: [
              { reasoning: "Recall the actively transported nutrient.", working: "\\text{glucose}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glucose",
            commonErrors: ["Choosing water — water moves by osmosis."],
          },
        },
        {
          id: "cieb-u1-active-transport-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare diffusion and active transport.",
          parts: [
            { label: "a", prompt: "State the direction of movement for each process.", marks: 2 },
            { label: "b", prompt: "State whether each process requires energy.", marks: 2 },
            { label: "c", prompt: "Give one example of each process.", marks: 2 },
            { label: "d", prompt: "Explain why mineral ions must be absorbed by active transport in plant roots.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Diffusion vs active transport", statement: "Diffusion: down gradient, no energy. Active: against gradient, ATP + carriers." },
            ],
            steps: [
              { part: "a", reasoning: "Diffusion: high to low concentration.", working: "\\text{high} \\to \\text{low}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Active transport: low to high concentration.", working: "\\text{low} \\to \\text{high}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diffusion needs no energy.", working: "\\text{no ATP}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Active transport needs ATP and carrier proteins.", working: "\\text{ATP + carriers}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Diffusion example, e.g. oxygen into cells.", working: "\\text{e.g. O\\_2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Active transport example, e.g. root hair mineral ions.", working: "\\text{e.g. nitrate}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Soil solution is dilute but root cells are concentrated in ions.", working: "\\text{dilute soil}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Ions must move against their concentration gradient.", working: "\\text{against gradient}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only active transport can move substances against a gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) diffusion high→low; active transport low→high (b) diffusion no energy; active needs ATP/carriers (c) diffusion e.g. oxygen; active e.g. mineral ions in roots (d) soil is dilute so ions must move against the gradient — only active transport can do this",
            commonErrors: ["Claiming active transport also occurs down the gradient."],
          },
        },
        {
          id: "cieb-u1-active-transport-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process moves substances from a low to a high concentration using energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diffusion" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Active transport" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Against the gradient with energy input." },
            ],
            steps: [
              { reasoning: "Match the description to the process.", working: "\\text{active transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Active transport",
            commonErrors: ["Choosing osmosis — it concerns water movement only."],
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

import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olbio-u1-lesson-1-2",
  code: "1-2",
  title: "Cell Transport",
  goal: "I CAN explain diffusion, osmosis and active transport, and relate them to water potential and turgor in plant cells.",
  standards: ["5090 1.3"],
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
      id: "olbio-u1-diffusion-osmosis",
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
          id: "olbio-u1-diffusion-osmosis-q1",
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
          id: "olbio-u1-diffusion-osmosis-q2",
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
          id: "olbio-u1-diffusion-osmosis-q3",
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
          id: "olbio-u1-diffusion-osmosis-q4",
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
          id: "olbio-u1-diffusion-osmosis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor does NOT affect the rate of diffusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surface area" },
              { id: "b", text: "Colour of the particles" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Concentration gradient" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Diffusion factors", statement: "Rate depends on temperature, surface area, gradient and distance." },
            ],
            steps: [
              { reasoning: "Colour has no effect on particle movement.", working: "\\text{colour irrelevant}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Colour of the particles",
            commonErrors: ["Thinking colour affects rate — only movement-related factors matter."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Osmosis is the net movement of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen into the blood" },
              { id: "b", text: "Solute molecules down a gradient" },
              { id: "c", text: "Ions by active transport" },
              { id: "d", text: "Water across a partially permeable membrane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Water movement across a partially permeable membrane, high to low water potential." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{water + PPM}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water across a partially permeable membrane",
            commonErrors: ["Choosing solute movement — the solute does not move in osmosis."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A plant cell is placed in a solution with a higher water potential than its cell contents. What happens to the cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It loses water" },
              { id: "b", text: "It bursts" },
              { id: "c", text: "It becomes turgid" },
              { id: "d", text: "It plasmolyses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hypotonic solution", statement: "Higher external water potential → water enters plant cell → turgid." },
            ],
            steps: [
              { reasoning: "Identify the solution as hypotonic.", working: "\\text{water enters}", marks: 1, markCode: "M" },
              { reasoning: "Cell wall prevents bursting; cell becomes turgid.", working: "\\text{turgid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It becomes turgid",
            commonErrors: ["Choosing plasmolysis — that is water leaving in a hypertonic solution."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A potato cylinder has a mass of 4.0 g before immersion in sucrose solution and 4.6 g after 30 minutes. Calculate the percentage change in mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage mass change", statement: "Percentage change = (final - initial) / initial x 100." },
            ],
            steps: [
              { reasoning: "Apply the percentage change formula.", working: "\\frac{4.6 - 4.0}{4.0} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15% gain in mass",
            commonErrors: ["Dividing by the final mass instead of the initial mass."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two identical potato cylinders each start at 5.0 g. After osmosis cylinder P has mass 5.4 g and cylinder Q has mass 4.5 g. Calculate the percentage mass change for each cylinder.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: -10, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage mass change", statement: "Percentage change = (final - initial) / initial x 100." },
            ],
            steps: [
              { reasoning: "Calculate P: (5.4 - 5.0)/5.0 x 100.", working: "\\frac{0.4}{5.0} \\times 100 = 8\\%", marks: 1, markCode: "M" },
              { reasoning: "Calculate Q: (4.5 - 5.0)/5.0 x 100.", working: "\\frac{-0.5}{5.0} \\times 100 = -10\\%", marks: 1, markCode: "M" },
              { reasoning: "Interpret the signs: P gained water, Q lost water.", working: "+ = gain, - = loss", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) +8%; (b) -10%",
            commonErrors: ["Forgetting the negative sign for the cylinder that lost mass."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A plant cell has a water potential of $-650$ kPa and the surrounding soil solution has a water potential of $-150$ kPa. Calculate the difference in water potential between the cell and the soil solution.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 500, unit: "kPa" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water potential", statement: "Difference = higher value minus lower value; water moves down the gradient." },
            ],
            steps: [
              { reasoning: "Subtract the cell water potential from the soil water potential.", working: "-150 - (-650) = 500 \\text{ kPa}", marks: 1, markCode: "M" },
              { reasoning: "State the magnitude of the gradient.", working: "500 \\text{ kPa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 kPa",
            commonErrors: ["Subtracting in the wrong order and giving -500 kPa for a magnitude question."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The water potential of pure water is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same as blood" },
              { id: "b", text: "$+1000$ kPa" },
              { id: "c", text: "$0$ kPa" },
              { id: "d", text: "$-1000$ kPa" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water potential scale", statement: "Pure water = 0 kPa; dissolved solutes make water potential negative." },
            ],
            steps: [
              { reasoning: "Recall the reference value.", working: "\\Psi = 0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0$ kPa",
            commonErrors: ["Choosing a negative value — pure water is the reference at zero."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by turgor in a plant cell and why it is important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Turgor", statement: "Pressure of cell contents against the cell wall when the vacuole is full of water." },
            ],
            steps: [
              { reasoning: "Water enters by osmosis, filling the vacuole.", working: "\\text{water in by osmosis}", marks: 1, markCode: "M" },
              { reasoning: "Cell contents press against the cell wall.", working: "\\text{pressure on wall}", marks: 1, markCode: "M" },
              { reasoning: "This turgor pressure keeps the cell firm and rigid.", working: "\\text{firm/rigid}", marks: 1, markCode: "M" },
              { reasoning: "It supports the plant and allows growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Turgor is the pressure exerted by cell contents against the cell wall when water fills the vacuole; it keeps cells firm, supporting the plant and enabling growth.",
            commonErrors: ["Saying turgor means the cell is about to burst — the wall resists it."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe plasmolysis in a plant cell and explain why it is reversible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plasmolysis", statement: "Water loss in hypertonic solution pulls the membrane away from the wall; reversible if water returns." },
            ],
            steps: [
              { reasoning: "Water leaves by osmosis in a hypertonic solution.", working: "\\text{water out}", marks: 1, markCode: "M" },
              { reasoning: "Vacuole shrinks and the cell membrane pulls away from the wall.", working: "\\text{membrane pulls away}", marks: 1, markCode: "M" },
              { reasoning: "The rigid wall prevents the cell collapsing or bursting.", working: "\\text{rigid wall}", marks: 1, markCode: "M" },
              { reasoning: "In a hypotonic solution water re-enters and the cell becomes turgid again.", working: "\\text{reversible}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plasmolysis is the pulling away of the cell membrane from the cell wall as water leaves by osmosis in a hypertonic solution; it is reversible because water re-enters when the cell is placed in a hypotonic solution.",
            commonErrors: ["Saying the cell dies — plasmolysis is reversible."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about osmosis is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It moves water across a partially permeable membrane from high to low water potential" },
              { id: "b", text: "It requires ATP" },
              { id: "c", text: "It moves dissolved solute molecules" },
              { id: "d", text: "It only occurs in animal cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Passive movement of water down a water potential gradient across a partially permeable membrane." },
            ],
            steps: [
              { reasoning: "Identify the correct description.", working: "\\text{water, PPM, water potential}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It moves water across a partially permeable membrane from high to low water potential",
            commonErrors: ["Choosing ATP — osmosis is passive and needs no energy."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how increasing temperature affects the rate of diffusion.",
          parts: [
            { label: "a", prompt: "Describe the effect of temperature on diffusion rate.", marks: 2 },
            { label: "b", prompt: "Explain this effect in terms of particle movement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Temperature and diffusion", statement: "Higher temperature gives particles more kinetic energy → faster random movement and more frequent collisions." },
            ],
            steps: [
              { part: "a", reasoning: "Rate increases as temperature rises.", working: "\\text{faster}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the relationship clearly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Particles gain kinetic energy at higher temperature.", working: "\\text{more KE}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They move faster and collide more often.", working: "\\text{more collisions}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faster net movement down the gradient → higher diffusion rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Diffusion rate increases with temperature. (b) Particles have more kinetic energy, move faster and collide more frequently, so diffusion is faster.",
            commonErrors: ["Saying temperature 'creates' the gradient — it only speeds up movement."],
          },
        },
        {
          id: "olbio-u1-diffusion-osmosis-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student places identical potato cylinders in sucrose solutions of different concentrations and measures the percentage change in mass after 30 minutes.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how the dependent variable is measured.", marks: 2 },
            { label: "c", prompt: "Explain how the isotonic concentration is identified from the results.", marks: 3 },
            { label: "d", prompt: "Suggest one control variable and explain why it must be controlled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Osmosis experiment", statement: "Vary sucrose concentration; measure % mass change; zero change = isotonic." },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: sucrose concentration.", working: "\\text{sucrose conc}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent variable: percentage mass change.", working: "\\text{\\% mass change}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weigh each cylinder before and after immersion.", working: "\\text{weigh before/after}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Calculate percentage mass change for each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Plot % mass change against sucrose concentration.", working: "\\text{graph}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find the concentration where mass change equals zero.", working: "\\text{zero change}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "That concentration is isotonic and equals the cell water potential.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control: temperature (or cylinder size / immersion time).", working: "\\text{temperature}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "It must be constant so only concentration affects the result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sucrose concentration / % mass change (b) weigh before and after (c) zero-change concentration is isotonic (d) e.g. temperature kept constant",
            commonErrors: ["In (c) choosing the concentration with the largest gain rather than zero change."],
          },
        },
      ],
    },
    {
      id: "olbio-u1-active-transport",
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
          id: "olbio-u1-active-transport-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active transport moves particles:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Randomly" },
              { id: "b", text: "Only water" },
              { id: "c", text: "Against the concentration gradient" },
              { id: "d", text: "Down the concentration gradient" },
            ],
            correctChoiceId: "c",
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
          id: "olbio-u1-active-transport-q2",
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
          id: "olbio-u1-active-transport-q3",
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
          id: "olbio-u1-active-transport-q4",
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
          id: "olbio-u1-active-transport-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active transport requires which of the following?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ATP and carrier proteins" },
              { id: "b", text: "No energy at all" },
              { id: "c", text: "A partially permeable membrane alone" },
              { id: "d", text: "Only a concentration gradient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport", statement: "Movement against a gradient using ATP and carrier proteins." },
            ],
            steps: [
              { reasoning: "Recall the requirements.", working: "\\text{ATP + carriers}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** ATP and carrier proteins",
            commonErrors: ["Thinking a gradient alone is enough — the gradient is what must be overcome."],
          },
        },
        {
          id: "olbio-u1-active-transport-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of active transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mineral ions absorbed by root hair cells" },
              { id: "b", text: "Oxygen diffusing into the blood" },
              { id: "c", text: "Carbon dioxide leaving a leaf" },
              { id: "d", text: "Water entering a cell by osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport example", statement: "Root hairs absorb dilute mineral ions against the gradient." },
            ],
            steps: [
              { reasoning: "Match the example to the process.", working: "\\text{ions against gradient}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mineral ions absorbed by root hair cells",
            commonErrors: ["Choosing osmosis or diffusion — those are passive."],
          },
        },
        {
          id: "olbio-u1-active-transport-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why must nitrate ions be taken up by active transport in root hair cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To maintain turgor pressure" },
              { id: "b", text: "Because the soil solution is dilute, so ions move against their concentration gradient" },
              { id: "c", text: "To release oxygen for respiration" },
              { id: "d", text: "Because they are too large to cross the membrane" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport need", statement: "Ions must accumulate inside the cell from a dilute external solution — against the gradient." },
            ],
            steps: [
              { reasoning: "Identify the gradient direction.", working: "\\text{dilute outside, concentrated inside}", marks: 1, markCode: "M" },
              { reasoning: "Passive transport cannot move ions this way; active transport can.", working: "\\text{against gradient}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because the soil solution is dilute, so ions move against their concentration gradient",
            commonErrors: ["Saying diffusion is 'too slow' — the issue is direction, not speed."],
          },
        },
        {
          id: "olbio-u1-active-transport-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Inside a root hair cell the potassium ion concentration is $20$ mmol dm$^{-3}$ and in the soil solution it is $2$ mmol dm$^{-3}$. Calculate how many times greater the concentration inside the cell is.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration ratio", statement: "Ratio = inside concentration / outside concentration." },
            ],
            steps: [
              { reasoning: "Divide the inside concentration by the outside concentration.", working: "\\frac{20}{2} = 10", marks: 1, markCode: "M" },
              { reasoning: "State the ratio.", working: "10 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 times greater",
            commonErrors: ["Subtracting the concentrations instead of finding the ratio."],
          },
        },
        {
          id: "olbio-u1-active-transport-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two plant cells are absorbing mineral ions by active transport. Cell A maintains an internal concentration $8$ times the external concentration; cell B maintains $5$ times the external concentration. For cell A the external concentration is $5$ mmol dm$^{-3}$ and for cell B it is $6$ mmol dm$^{-3}$. Calculate the internal concentration of the ion in each cell.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "mmol dm^{-3}" },
              { label: "b", answer: 30, unit: "mmol dm^{-3}" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Internal concentration", statement: "Internal = external x concentration ratio." },
            ],
            steps: [
              { reasoning: "Cell A: multiply external by ratio.", working: "5 \\times 8 = 40", marks: 1, markCode: "M" },
              { reasoning: "Cell B: multiply external by ratio.", working: "6 \\times 5 = 30", marks: 1, markCode: "M" },
              { reasoning: "State both answers with units.", working: "40 \\text{ and } 30 \\text{ mmol dm}^{-3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 mmol dm$^{-3}$; (b) 30 mmol dm$^{-3}$",
            commonErrors: ["Dividing instead of multiplying by the ratio."],
          },
        },
        {
          id: "olbio-u1-active-transport-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cell absorbs glucose by active transport. The external glucose concentration is $4$ mmol dm$^{-3}$ and the internal concentration reaches $36$ mmol dm$^{-3}$. Calculate the concentration gradient the cell works against.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32, unit: "mmol dm^{-3}" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gradient against which transport occurs", statement: "Gradient = internal concentration minus external concentration." },
            ],
            steps: [
              { reasoning: "Subtract the external concentration from the internal concentration.", working: "36 - 4 = 32 \\text{ mmol dm}^{-3}", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "32 \\text{ mmol dm}^{-3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32 mmol dm$^{-3}$",
            commonErrors: ["Giving the ratio (9 times) when the question asks for the difference."],
          },
        },
        {
          id: "olbio-u1-active-transport-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The energy needed for active transport is released by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ATP" },
              { id: "b", text: "Heat from the surroundings" },
              { id: "c", text: "Light energy trapped by chlorophyll" },
              { id: "d", text: "The concentration gradient itself" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport energy", statement: "ATP hydrolysis powers carrier proteins." },
            ],
            steps: [
              { reasoning: "Recall the energy source.", working: "\\text{ATP}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** ATP",
            commonErrors: ["Choosing light energy — that powers photosynthesis, not active transport."],
          },
        },
        {
          id: "olbio-u1-active-transport-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define active transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Movement of particles against a concentration gradient using energy (ATP) and carrier proteins." },
            ],
            steps: [
              { reasoning: "Give direction and energy requirement.", working: "\\text{against gradient + ATP}", marks: 1, markCode: "M" },
              { reasoning: "Complete the definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The movement of particles against their concentration gradient, using energy from ATP and specific carrier proteins.",
            commonErrors: ["Omitting 'against the concentration gradient' or 'ATP'."],
          },
        },
        {
          id: "olbio-u1-active-transport-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why root hair cells use active transport to absorb mineral ions even when the soil solution is dilute.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Active transport in roots", statement: "Ions must move from a dilute external solution into a more concentrated cell — against the gradient." },
            ],
            steps: [
              { reasoning: "Identify the gradient: ions are dilute outside, concentrated inside.", working: "\\text{against gradient}", marks: 1, markCode: "M" },
              { reasoning: "Diffusion cannot achieve this — it moves down the gradient only.", working: "\\text{diffusion fails}", marks: 1, markCode: "M" },
              { reasoning: "Active transport uses ATP and carrier proteins to pump ions in.", working: "\\text{ATP + carriers}", marks: 1, markCode: "M" },
              { reasoning: "This lets the plant accumulate essential minerals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soil is dilute so ions must move against their concentration gradient into the concentrated root hair cell; active transport uses ATP and carrier proteins to do this, allowing the plant to accumulate essential minerals.",
            commonErrors: ["Saying 'diffusion is too slow' — diffusion cannot move ions against the gradient at all."],
          },
        },
        {
          id: "olbio-u1-active-transport-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement correctly compares diffusion and active transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transport needs no carrier proteins" },
              { id: "b", text: "Both move particles against the gradient" },
              { id: "c", text: "Both require ATP" },
              { id: "d", text: "Diffusion moves down the gradient without energy; active transport moves against it using ATP" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Diffusion vs active transport", statement: "Diffusion: down gradient, no energy. Active: against gradient, ATP + carriers." },
            ],
            steps: [
              { reasoning: "Recall the comparison table.", working: "\\text{down vs against}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Diffusion moves down the gradient without energy; active transport moves against it using ATP",
            commonErrors: ["Saying both need energy — diffusion is passive."],
          },
        },
        {
          id: "olbio-u1-active-transport-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the role of carrier proteins in active transport.",
          parts: [
            { label: "a", prompt: "Describe how carrier proteins move substances across the membrane.", marks: 2 },
            { label: "b", prompt: "Explain why carrier proteins make active transport specific.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Carrier proteins", statement: "Specific proteins bind a substance on one side, change shape using ATP, and release it on the other side." },
            ],
            steps: [
              { part: "a", reasoning: "Substance binds to the carrier protein.", working: "\\text{bind}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "ATP powers a shape change releasing the substance on the other side.", working: "\\text{shape change}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each carrier has a binding site shaped for one substance.", working: "\\text{specific site}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only matching molecules can bind and be transported.", working: "\\text{complementary}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This gives the cell control over which substances enter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Carrier proteins bind the substance, use ATP to change shape, and release it on the other side. (b) Each carrier has a specific binding site so only certain substances are transported.",
            commonErrors: ["Describing carriers as pores — they change shape rather than forming a fixed channel."],
          },
        },
        {
          id: "olbio-u1-active-transport-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates how temperature affects the rate of active transport of nitrate ions into root hair cells.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how the rate of nitrate uptake could be measured.", marks: 2 },
            { label: "c", prompt: "Predict and explain the effect of increasing temperature on the rate.", marks: 3 },
            { label: "d", prompt: "Suggest one control variable and explain why it must be controlled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Active transport experiment", statement: "Vary temperature; measure ion uptake; rate rises with temperature until enzymes/proteins denature." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: temperature.", working: "\\text{temperature}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependent: rate of nitrate ion uptake.", working: "\\text{uptake rate}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measure nitrate concentration inside cells or in solution over time.", working: "\\text{measure ions}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Calculate rate as change in concentration per unit time.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate increases with temperature up to a point.", working: "\\text{rate rises}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More kinetic energy → faster carrier protein activity/ATP release.", working: "\\text{more KE}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At very high temperature carrier proteins denature and rate falls.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control: nitrate concentration outside (or pH).", working: "\\text{nitrate conc}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Keeps the gradient constant so only temperature affects uptake.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temperature / uptake rate (b) measure ion concentration change over time (c) rises then falls as carriers denature (d) e.g. external nitrate concentration kept constant",
            commonErrors: ["In (c) predicting a linear increase forever — high temperature denatures carrier proteins."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u1-cell-transport-notes",
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

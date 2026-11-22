import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edialbio-u2-lesson-2-1",
  code: "2-1",
  title: "Diffusion, Osmosis and Active Transport",
  goal: "I CAN explain diffusion, osmosis and active transport and predict water movement in cells.",
  standards: ["IB2 Transport", "Membrane transport"],
  vocabulary: [
    { term: "Diffusion", definition: "Net movement of particles from high to low concentration down a concentration gradient (passive)." },
    { term: "Osmosis", definition: "Net movement of water across a partially permeable membrane from dilute to concentrated solution." },
    { term: "Active transport", definition: "Movement of substances against a concentration gradient using energy from ATP." },
    { term: "Turgid / plasmolysed", definition: "Plant cell swollen with water, firm / cell membrane pulled away from wall." },
  ],
  concepts: [
    {
      id: "edialbio-u2-passive",
      title: "Diffusion and osmosis",
      skill: "Explain passive transport mechanisms and predict osmosis outcomes in cells.",
      lesson: {
        sections: [
          {
            heading: "Diffusion",
            body: "Particles move randomly; net movement is from high to low concentration until equilibrium. Rate increases with temperature, concentration gradient and surface area. Gas exchange and absorption of food molecules rely on diffusion.",
          },
          {
            heading: "Osmosis",
            body: "Water moves across a partially permeable membrane from dilute (high water potential) to concentrated (low water potential) solution. In animal cells: hypotonic → cell swells/bursts; hypertonic → shrinks (crenation); isotonic → no net change. In plant cells: hypotonic → turgid (wall prevents bursting); hypertonic → plasmolysed.",
          },
          {
            heading: "Factors",
            body: "Osmosis rate depends on concentration gradient, membrane surface area and temperature. Water potential ψ = ψs + ψp; pure water ψ = 0, solutions negative.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "ψ = ψs + ψp" },
          { name: "Key formula", statement: "Water moves high → low water potential" },
        ],
        workedExample: {
          problem: "A plant cell is placed in a concentrated salt solution. What happens?",
          solution: "Water leaves by osmosis (lower water potential inside); vacuole shrinks; membrane pulls away from wall → plasmolysis; cell becomes flaccid.",
        },
      },
      questions: [
        {
          id: "edialbio-osm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Water moves by osmosis from which solution to which?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Against the gradient" },
              { id: "b", text: "High solute → low solute only" },
              { id: "c", text: "Dilute → concentrated" },
              { id: "d", text: "Concentrated → dilute" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Osmosis", statement: "Water moves down its water potential gradient." }],
            steps: [{ reasoning: "Water moves toward higher solute concentration (lower water potential).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Dilute → concentrated",
          },
        },
        {
          id: "edialbio-osm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens to an animal cell placed in a hypotonic solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Hypotonic", statement: "Outside water potential higher → water enters." }],
            steps: [
              { reasoning: "Water enters cell by osmosis (outside is more dilute).", marks: 1, markCode: "M" },
              { reasoning: "Cell swells as vacuole/cytoplasm expands.", marks: 1, markCode: "A" },
              { reasoning: "No cell wall → cell bursts (haemolysis in red blood cells).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters → cell swells and may burst",
            commonErrors: ["Confusing hypotonic/hypertonic."],
          },
        },
        {
          id: "edialbio-osm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a plant cell becomes turgid rather than bursting in a hypotonic solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cell wall", statement: "Rigid wall resists expansion." }],
            steps: [
              { reasoning: "Water enters by osmosis as outside solution is dilute.", marks: 1, markCode: "M" },
              { reasoning: "Vacuole and cytoplasm swell, pushing membrane against cell wall.", marks: 1, markCode: "M" },
              { reasoning: "Cell wall is rigid and fully permeable — cannot burst.", marks: 1, markCode: "A" },
              { reasoning: "Result: turgid cell supporting plant tissues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell wall prevents bursting → turgor",
            commonErrors: ["Saying wall is impermeable."],
          },
        },
        {
          id: "edialbio-osm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare diffusion and osmosis.",
          parts: [
            { label: "a", prompt: "Define each process.", marks: 3 },
            { label: "b", prompt: "Compare direction and membrane requirements.", marks: 3 },
            { label: "c", prompt: "Give one biological example of each.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffusion vs osmosis", statement: "Solute vs solvent movement." }],
            steps: [
              { part: "a", reasoning: "Diffusion: net movement of solute particles down concentration gradient.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Osmosis: net movement of water across partially permeable membrane down water potential gradient.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both passive, no energy required.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diffusion can occur in open space or across membranes; osmosis requires partially permeable membrane.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Osmosis moves solvent (water); diffusion usually solute.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both down gradients.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Diffusion example: gas exchange in lungs / absorption of glucose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Osmosis example: water uptake by root hairs / kidney tubule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second valid example each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Diffusion: solute; osmosis: water across PPM",
            commonErrors: ["Saying osmosis needs a membrane for diffusion too."],
          },
        },
      ],
    },
    {
      id: "edialbio-u2-active",
      title: "Active transport and bulk transport",
      skill: "Explain active transport and endo/exocytosis and their roles in cells.",
      lesson: {
        sections: [
          {
            heading: "Active transport",
            body: "Movement of substances against their concentration gradient, powered by ATP via carrier proteins. Example: sodium-potassium pump in nerve cells; root hair cells absorb mineral ions from soil where they are less concentrated than inside the cell.",
          },
          {
            heading: "Bulk transport",
            body: "Endocytosis: membrane invaginates to engulf particles — phagocytosis (solids, e.g. white blood cells engulfing pathogens) and pinocytosis (fluids). Exocytosis: vesicles fuse with membrane to secrete substances (e.g. digestive enzymes, neurotransmitters).",
          },
          {
            heading: "Facilitated diffusion",
            body: "Large/polar molecules (glucose, ions) cross membranes via channel or carrier proteins down their gradient — no ATP needed, still 'downhill'.",
          },
        ],
        keyFormulas: [
          { name: "Active transport", statement: "ATP → ADP + Pi powers carriers" },
        ],
        workedExample: {
          problem: "Why must root hair cells use active transport for some mineral ions?",
          solution: "Ions may be less concentrated in soil water than in the cell sap; moving them in requires energy against the gradient — ATP-powered carriers do this.",
        },
      },
      questions: [
        {
          id: "edialbio-active-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active transport moves substances in which direction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only gases" },
              { id: "b", text: "Down the gradient" },
              { id: "c", text: "Against the gradient" },
              { id: "d", text: "Only water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Active transport", statement: "Against gradient, requires ATP." }],
            steps: [{ reasoning: "Requires energy from ATP.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Against the gradient",
          },
        },
        {
          id: "edialbio-active-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between phagocytosis and pinocytosis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Endocytosis", statement: "Engulfing material by membrane invagination." }],
            steps: [
              { reasoning: "Phagocytosis: engulfs solid particles (e.g. pathogens by white blood cells).", marks: 1, markCode: "A" },
              { reasoning: "Pinocytosis: engulfs droplets of extracellular fluid.", marks: 1, markCode: "A" },
              { reasoning: "Both are forms of endocytosis forming vesicles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phagocytosis: solids; pinocytosis: fluids",
            commonErrors: ["Reversing the two."],
          },
        },
        {
          id: "edialbio-active-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why carrier proteins are needed for facilitated diffusion of glucose.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Facilitated diffusion", statement: "Polar/large molecules need protein channels." }],
            steps: [
              { reasoning: "Glucose is polar and too large to cross the hydrophobic membrane core by simple diffusion.", marks: 1, markCode: "M" },
              { reasoning: "Carrier/channel proteins provide a hydrophilic pathway.", marks: 1, markCode: "M" },
              { reasoning: "Movement is still down the concentration gradient — no ATP needed.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucose needs protein pathway; still passive",
            commonErrors: ["Calling it active transport."],
          },
        },
        {
          id: "edialbio-active-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare active transport with facilitated diffusion.",
          parts: [
            { label: "a", prompt: "Define both processes.", marks: 3 },
            { label: "b", prompt: "Compare energy requirement and direction.", marks: 3 },
            { label: "c", prompt: "Give one example of each in the human body.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "AT vs facilitated", statement: "ATP vs no ATP; up vs down gradient." }],
            steps: [
              { part: "a", reasoning: "Active transport: movement against gradient via ATP-powered carriers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Facilitated diffusion: movement down gradient via channel/carrier proteins.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both use membrane proteins.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Active transport requires ATP; facilitated does not.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "AT goes against gradient; FD down gradient.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consequence: FD saturates at high rate limit; AT can concentrate substances.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "AT example: Na⁺/K⁺ pump in neurons; root hair mineral uptake.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "FD example: glucose uptake by cells via GLUT carriers.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Second valid example each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "AT: ATP + against gradient; FD: no ATP + down gradient",
            commonErrors: ["Saying FD needs energy."],
          },
        },
      ],
    },
  ],
};

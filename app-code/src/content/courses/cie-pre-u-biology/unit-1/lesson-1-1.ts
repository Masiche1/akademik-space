import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipub-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Structure and Membrane Transport",
  goal: "I CAN describe cell ultrastructure and explain membrane transport mechanisms at Pre-U standard.",
  standards: ["Cambridge Pre-U Biology 9769", "Cells: structure and transport"],
  vocabulary: [
    { term: "Ultrastructure", definition: "Fine detail of cell structure visible only under an electron microscope." },
    { term: "Fluid mosaic model", definition: "Model of membrane structure: phospholipid bilayer with embedded proteins." },
    { term: "Facilitated diffusion", definition: "Passive transport of molecules across a membrane via channel or carrier proteins." },
    { term: "Active transport", definition: "Movement of substances against their concentration gradient using ATP." },
    { term: "Osmosis", definition: "Diffusion of water across a partially permeable membrane from high to low water potential." },
    { term: "Water potential", definition: "Measure of the tendency of water to move — pure water = 0, solutes lower it." },
  ],
  concepts: [
    {
      id: "cipub-u1-s1-cells",
      title: "Cells and membranes",
      skill: "Relate cell ultrastructure to function; explain diffusion, osmosis, facilitated diffusion and active transport.",
      lesson: {
        sections: [
          {
            heading: "Eukaryotic ultrastructure",
            body: "Nucleus contains DNA and controls activities via transcription. Mitochondria have a double membrane — inner folded into cristae to increase surface area for the electron transport chain. Rough ER (ribosome-studded) processes and transports proteins; smooth ER synthesises lipids. Golgi modifies, sorts and packages proteins into vesicles. Lysosomes contain hydrolytic enzymes. Ribosomes are the site of translation. Prokaryotes lack membrane-bound organelles but have a nucleoid, plasmids and a cell wall of peptidoglycan.",
          },
          {
            heading: "Membrane transport",
            body: "The fluid mosaic model: a phospholipid bilayer with proteins, cholesterol and glycoproteins. **Simple diffusion** moves down a concentration gradient through the bilayer (small non-polar molecules). **Facilitated diffusion** uses channel/carrier proteins — still passive. **Osmosis** is water diffusion across a partially permeable membrane towards lower water potential (higher solute concentration). **Active transport** moves substances against the gradient using ATP-powered pumps (e.g. Na⁺/K⁺ pump).",
          },
          {
            heading: "Water potential and osmosis",
            body: "Water potential Ψ = Ψs + Ψp (solute potential + pressure potential). Pure water has Ψ = 0; adding solute makes Ψs negative. Water moves from higher to lower Ψ. In plant cells, the cell wall prevents bursting — a turgid cell has high pressure potential. In animal cells, water entry causes haemolysis; water loss causes crenation.",
          },
        ],
        keyFormulas: [
          {
            name: "Water potential",
            statement: "$\\Psi = \\Psi_s + \\Psi_p$; water moves high → low $\\Psi$",
          },
          {
            name: "Fluid mosaic model",
            statement: "phospholipid bilayer + membrane proteins + cholesterol",
          },
        ],
        workedExample: {
          problem: "A red blood cell is placed in distilled water. Explain what happens.",
          solution:
            "Distilled water has higher water potential than the cell cytoplasm, so water enters by osmosis. Animal cells lack a cell wall, so the cell swells and bursts (haemolysis).",
        },
      },
      questions: [
        {
          id: "cipub-u1-cel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the site of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondrion" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Golgi apparatus" },
              { id: "d", text: "Lysosome" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitochondria",
                statement: "Site of aerobic respiration; cristae increase surface area.",
              },
            ],
            steps: [
              { reasoning: "Mitochondria carry out aerobic respiration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitochondrion",
          },
        },
        {
          id: "cipub-u1-cel-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between facilitated diffusion and active transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transport types",
                statement: "Facilitated diffusion is passive via proteins; active transport needs ATP and goes against the gradient.",
              },
            ],
            steps: [
              {
                reasoning: "Facilitated diffusion: down gradient, via channel/carrier protein, no ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Active transport: against gradient, uses ATP-powered pumps.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Facilitated = passive, protein-assisted; active = ATP, against gradient.",
          },
        },
        {
          id: "cipub-u1-cel-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a plant cell placed in a concentrated sucrose solution becomes plasmolysed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Osmosis",
                statement: "Water moves from high to low water potential across a partially permeable membrane.",
              },
            ],
            steps: [
              {
                reasoning: "Concentrated sucrose has lower water potential than cell sap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water leaves the cell by osmosis through the partially permeable membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vacuole shrinks, cytoplasm pulls away from the wall — plasmolysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Water leaves → vacuole shrinks → plasmolysis.",
          },
        },
        {
          id: "cipub-u1-cel-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the structure and function of rough ER and Golgi apparatus in protein secretion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secretory pathway",
                statement: "RER synthesises proteins; Golgi modifies, sorts and packages them into vesicles.",
              },
            ],
            steps: [
              {
                reasoning: "RER: studded with ribosomes, synthesises secretory proteins into its lumen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Proteins transported in vesicles to the Golgi.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Golgi: modifies (e.g. glycosylation), sorts and packages into secretory vesicles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vesicles fuse with plasma membrane to release proteins — comparison complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "RER synthesises → vesicles → Golgi modifies/sorts → secretion.",
          },
        },
        {
          id: "cipub-u1-cel-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle modifies, sorts and packages proteins into vesicles for secretion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lysosome" },
              { id: "b", text: "Golgi apparatus" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Golgi apparatus",
                statement: "Modifies, sorts and packages proteins into secretory vesicles.",
              },
            ],
            steps: [{ reasoning: "The Golgi apparatus performs this packaging role.", marks: 1, markCode: "A" }],
            finalAnswer: "Golgi apparatus",
          },
        },
        {
          id: "cipub-u1-cel-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between simple diffusion and facilitated diffusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffusion types",
                statement: "Simple diffusion passes through the bilayer; facilitated diffusion uses membrane proteins. Both are passive.",
              },
            ],
            steps: [
              {
                reasoning: "Simple diffusion: small non-polar molecules move directly through the phospholipid bilayer down their gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Facilitated diffusion: polar/charged molecules use channel or carrier proteins — still down the gradient, no ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Direct through bilayer vs protein-assisted; both passive.",
          },
        },
        {
          id: "cipub-u1-cel-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A plant cell has a solute potential of -0.9 MPa and a pressure potential of +0.4 MPa. It is placed in a solution of water potential -0.3 MPa. Calculate the cell's water potential and predict the direction of net water movement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Water potential",
                statement: "\\Psi = \\Psi_s + \\Psi_p; water moves from higher to lower water potential.",
              },
            ],
            steps: [
              {
                reasoning: "Cell water potential = solute + pressure potential.",
                working: "\\Psi = -0.9 + 0.4 = -0.5\\ \\text{MPa}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cell \\Psi (-0.5 MPa) is lower than the solution \\Psi (-0.3 MPa).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water moves from higher to lower water potential — into the cell by osmosis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\Psi = -0.5 MPa; water enters the cell.",
          },
        },
        {
          id: "cipub-u1-cel-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about osmosis is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water moves from low to high water potential" },
              { id: "b", text: "Osmosis requires ATP" },
              { id: "c", text: "Osmosis occurs only in plant cells" },
              { id: "d", text: "Water moves from high to low water potential across a partially permeable membrane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmosis",
                statement: "Diffusion of water across a partially permeable membrane towards lower water potential — passive, no ATP.",
              },
            ],
            steps: [{ reasoning: "Water moves high → low water potential; occurs in all cells with membranes.", marks: 1, markCode: "A" }],
            finalAnswer: "High to low water potential across a partially permeable membrane",
          },
        },
        {
          id: "cipub-u1-cel-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a plant cell placed in distilled water becomes turgid but does not burst.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Turgor",
                statement: "The cellulose cell wall resists expansion; pressure potential rises and opposes further water entry.",
              },
            ],
            steps: [
              {
                reasoning: "Distilled water has higher water potential than cell sap, so water enters by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The vacuole expands and the cytoplasm presses against the cell wall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The rigid wall exerts an opposing pressure (pressure potential) — equilibrium reached, cell becomes turgid rather than bursting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Water enters → wall resists → turgid, not burst.",
          },
        },
        {
          id: "cipub-u1-cel-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between rough endoplasmic reticulum (RER) and smooth endoplasmic reticulum (SER).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ER types",
                statement: "RER is studded with ribosomes and synthesises proteins; SER lacks ribosomes and synthesises lipids/detoxifies.",
              },
            ],
            steps: [
              {
                reasoning: "RER has ribosomes attached and synthesises/transports proteins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "SER has no ribosomes; synthesises lipids and is involved in detoxification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "RER = ribosomes + proteins; SER = no ribosomes + lipids/detox.",
          },
        },
        {
          id: "cipub-u1-cel-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best describes the fluid mosaic model of membrane structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A phospholipid bilayer contains proteins that can move laterally within the membrane" },
              { id: "b", text: "Cholesterol stops all movement of membrane components" },
              { id: "c", text: "Proteins are fixed rigidly in a solid bilayer" },
              { id: "d", text: "The membrane is a solid layer of protein" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fluid mosaic model",
                statement: "Phospholipid bilayer with embedded proteins that drift laterally — 'fluid' and 'mosaic'.",
              },
            ],
            steps: [{ reasoning: "The model describes a fluid bilayer with mobile proteins.", marks: 1, markCode: "A" }],
            finalAnswer: "Fluid phospholipid bilayer with laterally mobile proteins",
          },
        },
        {
          id: "cipub-u1-cel-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the effect on an animal cell of placing it in (i) a hypertonic, (ii) an isotonic and (iii) a hypotonic solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Osmosis in animal cells",
                statement: "Water moves towards lower water potential; animal cells lack a wall, so they shrink or burst.",
              },
            ],
            steps: [
              {
                reasoning: "Hypertonic: water leaves by osmosis → cell shrinks and crenates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Isotonic: no net water movement → cell volume unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hypotonic: water enters → cell swells and may burst (haemolysis in red blood cells).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Crenation / no change / haemolysis.",
          },
        },
        {
          id: "cipub-u1-cel-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cell has a solute potential of -1.0 MPa and a pressure potential of +0.6 MPa. What is its water potential in MPa?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -0.4, unit: "MPa" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Water potential",
                statement: "\\Psi = \\Psi_s + \\Psi_p",
              },
            ],
            steps: [
              {
                reasoning: "Water potential is the sum of solute and pressure potentials.",
                working: "\\Psi = -1.0 + 0.6 = -0.4\\ \\text{MPa}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "-0.4 MPa",
          },
        },
        {
          id: "cipub-u1-cel-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the fluid mosaic structure of the plasma membrane gives rise to selective permeability and allows a cell to control its internal environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Membrane selectivity",
                statement: "The hydrophobic bilayer blocks polar/charged molecules; membrane proteins provide controlled pathways.",
              },
            ],
            steps: [
              {
                reasoning: "The phospholipid bilayer's hydrophobic core is impermeable to ions and polar molecules — selective barrier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Channel and carrier proteins allow specific substances to cross (facilitated diffusion and active transport).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pump proteins (e.g. Na+/K+ pump) use ATP to move substances against gradients — active control of internal conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Glycoproteins and cholesterol modulate recognition, fluidity and stability — overall regulation of cell environment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Biline barrier + transport proteins + pumps = selective control.",
          },
        },
        {
          id: "cipub-u1-cel-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process moves substances against their concentration gradient across a membrane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transport" },
              { id: "b", text: "Simple diffusion" },
              { id: "c", text: "Facilitated diffusion" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active transport",
                statement: "Movement against the concentration gradient using ATP-powered pumps.",
              },
            ],
            steps: [{ reasoning: "Only active transport goes against the gradient.", marks: 1, markCode: "A" }],
            finalAnswer: "Active transport",
          },
        },
        {
          id: "cipub-u1-cel-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the effects of a hypotonic solution on a plant cell and an animal cell, explaining the structural reasons for the difference in outcome.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Plant vs animal osmosis",
                statement: "Both gain water by osmosis; the cellulose wall prevents bursting in plants.",
              },
            ],
            steps: [
              {
                reasoning: "In both cell types water enters by osmosis because the hypotonic solution has higher water potential.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plant cell: vacuole expands and presses cytoplasm against the rigid cellulose wall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Animal cell: membrane stretches and the cell swells — without a wall it may burst (haemolysis).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The cell wall generates pressure potential that opposes further water entry — plant becomes turgid; animal cell has no such limit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Both gain water; plant wall → turgid, animal cell → haemolysis.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipub-u1-cells-notes",
      title: "Cells and membranes — revision notes",
      summary: "Organelle functions, fluid mosaic model, transport mechanisms, water potential.",
      sections: [
        {
          heading: "Key skills",
          body: "Link each organelle's structure to its function (cristae ↔ respiration, RER ↔ protein synthesis). For osmosis questions, always argue via water potential, not just 'salt water'.",
        },
        {
          heading: "Exam tips",
          body: "Distinguish the four transport types precisely: simple diffusion, facilitated diffusion, osmosis, active transport. Know which need ATP and which need proteins.",
        },
      ],
    },
  ],
};

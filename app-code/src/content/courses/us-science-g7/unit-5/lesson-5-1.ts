import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "s7-u5-lesson-5-1",
  code: "5-1",
  title: "Cell Membranes and Transport",
  goal: "I CAN describe the structure of the cell membrane, explain diffusion, osmosis and active transport, and predict how cells respond to different solute concentrations.",
  standards: [
    "MS-LS1-2",
    "MS-LS1-3",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Cell membrane",
      definition:
        "A selectively permeable barrier made mainly of a phospholipid bilayer that controls what enters and leaves the cell.",
    },
    {
      term: "Diffusion",
      definition:
        "The net movement of particles from a region of higher concentration to a region of lower concentration.",
    },
    {
      term: "Osmosis",
      definition:
        "The diffusion of water across a selectively permeable membrane from a region of higher water concentration to lower water concentration.",
    },
    {
      term: "Active transport",
      definition:
        "Movement of particles against the concentration gradient, requiring energy.",
    },
    {
      term: "Hypertonic",
      definition:
        "A solution with a higher solute concentration than the cell's cytoplasm.",
    },
    {
      term: "Hypotonic",
      definition:
        "A solution with a lower solute concentration than the cell's cytoplasm.",
    },
    {
      term: "Isotonic",
      definition:
        "A solution with the same solute concentration as the cell's cytoplasm.",
    },
  ],
  concepts: [
    {
      id: "s7-u5-membrane-structure",
      title: "Membrane structure and selective permeability",
      skill:
        "Describe how the phospholipid bilayer and proteins make the membrane selectively permeable.",
      lesson: {
        sections: [
          {
            heading: "The phospholipid bilayer",
            body: "The **cell membrane** is a **phospholipid bilayer**: two layers of phospholipid molecules. Each phospholipid has a hydrophilic (water-loving) phosphate head and two hydrophobic (water-fearing) fatty acid tails. In water, the heads face outward toward water and the tails face inward, away from water. This arrangement forms a barrier that small nonpolar molecules (such as oxygen) can cross but ions and large molecules cannot.",
          },
          {
            heading: "Membrane proteins",
            body: "Embedded in the bilayer are **proteins** that give the membrane its selective permeability.\n\n- **Channel proteins** form pores that allow specific molecules (such as water or ions) to pass through.\n- **Carrier proteins** bind to specific molecules and change shape to move them across.\n- **Receptor proteins** receive signals from outside the cell.\n\nWithout these proteins, the membrane would be a simple barrier; with them, it controls exactly which substances enter and leave.",
          },
        ],
        keyFormulas: [
          {
            name: "Phospholipid bilayer",
            statement:
              "Hydrophilic heads outward, hydrophobic tails inward — forms the membrane's basic structure.",
          },
          {
            name: "Selectively permeable",
            statement:
              "Allows some substances through but not others, controlled by proteins.",
          },
          {
            name: "Channel proteins",
            statement:
              "Form pores for specific molecules such as water or ions.",
          },
        ],
        workedExample: {
          problem:
            "Why can oxygen cross the cell membrane directly but glucose cannot?",
          solution:
            "Oxygen is a small nonpolar molecule that can pass through the hydrophobic interior of the phospholipid bilayer. Glucose is large and polar, so it needs a carrier protein to cross.",
        },
      },
      questions: [
        {
          id: "s7-u5-membrane-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a phospholipid molecule is hydrophilic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fatty acid tails" },
              { id: "b", text: "The phosphate head" },
              { id: "c", text: "The entire molecule" },
              { id: "d", text: "Neither part" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement:
                  "Has a hydrophilic phosphate head and hydrophobic fatty acid tails.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The phosphate head is water-loving (hydrophilic); the tails are water-fearing (hydrophobic).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The phosphate head.",
            commonErrors: [
              "Choosing (a): the tails are hydrophobic, not hydrophilic.",
            ],
          },
        },
        {
          id: "s7-u5-membrane-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the cell membrane is called 'selectively permeable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selective permeability",
                statement:
                  "The membrane allows some substances to pass through but blocks others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The phospholipid bilayer blocks large and charged molecules.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Membrane proteins (channels and carriers) allow specific substances through, so the membrane controls what enters and leaves.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "The membrane allows some substances (small nonpolar molecules, water through channels) but blocks others (ions, large molecules), controlled by membrane proteins.",
            commonErrors: [
              "Saying the membrane is completely impermeable or completely permeable.",
            ],
          },
        },
        {
          id: "s7-u5-membrane-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student says 'The cell membrane is just a wall that keeps everything out.' Evaluate this statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Membrane function",
                statement:
                  "Controls what enters and leaves — not a complete barrier.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The statement is partly correct: the membrane does act as a barrier.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "But it is wrong to say it keeps 'everything' out: small molecules like oxygen diffuse through, and proteins transport specific substances.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The membrane is selectively permeable, not impermeable — it carefully controls what crosses.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Partly correct — the membrane is a barrier, but it is selectively permeable: small molecules pass freely and proteins transport specific substances.",
            commonErrors: [
              "Agreeing entirely with the statement without qualification.",
            ],
          },
        },
        {
          id: "s7-u5-membrane-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cell is placed in a solution. Predict and explain what happens to each substance.",
          parts: [
            {
              label: "a",
              prompt:
                "Oxygen molecules outside the cell at higher concentration than inside",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Glucose molecules outside at higher concentration than inside",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Sodium ions outside at much higher concentration than inside",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Why does the cell need membrane proteins even though small molecules can diffuse?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffusion",
                statement: "Net movement from higher to lower concentration.",
              },
              {
                kind: "definition",
                name: "Membrane proteins",
                statement:
                  "Channels and carriers transport specific substances.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Oxygen diffuses into the cell from higher to lower concentration.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Glucose cannot diffuse through the bilayer; it needs a carrier protein (possibly with energy if against gradient).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Sodium ions are charged and cannot cross the hydrophobic bilayer; they need channel or carrier proteins.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Membrane proteins allow specific large or charged molecules to cross that diffusion cannot handle.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Oxygen diffuses in (b) Glucose needs carrier protein (c) Sodium ions need channel/carrier proteins (d) Proteins transport molecules that cannot diffuse.",
            commonErrors: [
              "Saying all substances diffuse through the membrane.",
            ],
          },
        },
      ],
    },
    {
      id: "s7-u5-diffusion-osmosis",
      title: "Diffusion, osmosis, and tonicity",
      skill:
        "Explain diffusion and osmosis and predict cell behavior in hypotonic, isotonic and hypertonic solutions.",
      lesson: {
        sections: [
          {
            heading: "Diffusion",
            body: "**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration, driven by random particle motion. It does not require energy. Examples: oxygen entering blood from the lungs, perfume spreading through a room. Diffusion continues until concentrations are equal (dynamic equilibrium).",
          },
          {
            heading: "Osmosis",
            body: "**Osmosis** is the diffusion of water across a selectively permeable membrane. Water moves from a region of higher water concentration (lower solute concentration) to a region of lower water concentration (higher solute concentration).\n\n- In a **hypotonic** solution (less solute), water enters the cell and it may swell or burst.\n- In an **isotonic** solution (equal solute), water moves equally in and out; the cell stays the same size.\n- In a **hypertonic** solution (more solute), water leaves the cell and it shrinks (crenates).",
          },
        ],
        keyFormulas: [
          {
            name: "Diffusion direction",
            statement:
              "High concentration → low concentration, no energy required.",
          },
          {
            name: "Osmosis",
            statement: "Water diffuses toward higher solute concentration.",
          },
          {
            name: "Tonicity effects",
            statement:
              "Hypotonic: water in, cell swells. Isotonic: balanced. Hypertonic: water out, cell shrinks.",
          },
        ],
        workedExample: {
          problem:
            "A red blood cell is placed in distilled water. What happens and why?",
          solution:
            "Distilled water is hypotonic (no solute). Water enters the cell by osmosis, and the cell swells and may burst (hemolyze) because animal cells lack a cell wall.",
        },
      },
      questions: [
        {
          id: "s7-u5-osmosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is osmosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Movement of solutes through a membrane" },
              {
                id: "b",
                text: "Diffusion of water across a selectively permeable membrane",
              },
              { id: "c", text: "Movement against a concentration gradient" },
              { id: "d", text: "Active transport of ions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmosis",
                statement:
                  "Diffusion of water across a selectively permeable membrane.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Osmosis specifically refers to water movement across a membrane.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Diffusion of water across a selectively permeable membrane.",
            commonErrors: ["Confusing osmosis with diffusion of solutes."],
          },
        },
        {
          id: "s7-u5-osmosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A plant cell and an animal cell are each placed in a hypertonic solution. Describe what happens to each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypertonic",
                statement: "Higher solute concentration than the cell.",
              },
              {
                kind: "property",
                name: "Cell wall",
                statement:
                  "Plant cells have a rigid cell wall; animal cells do not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In a hypertonic solution, water leaves both cells by osmosis.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The animal cell shrinks (crenates) because it has no cell wall.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The plant cell loses water but the cell wall prevents collapse; the membrane pulls away from the wall (plasmolysis).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Both lose water by osmosis. Animal cell shrinks; plant cell's cell wall prevents collapse but membrane pulls away (plasmolysis).",
            commonErrors: [
              "Saying the plant cell bursts in hypertonic solution; it shrinks, not bursts.",
            ],
          },
        },
        {
          id: "s7-u5-osmosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a freshwater fish cannot survive in the ocean.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmosis",
                statement: "Water moves toward higher solute concentration.",
              },
              {
                kind: "property",
                name: "Osmoregulation",
                statement:
                  "Organisms must balance water and solute concentrations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ocean water is hypertonic compared to a freshwater fish's body fluids.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Water leaves the fish's cells by osmosis toward the saltier ocean water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The fish loses too much water and becomes dehydrated; its cells shrink.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Freshwater fish have adaptations (drinking little, excreting dilute urine) that fail in salt water.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Ocean water is hypertonic; water leaves the fish's cells by osmosis, dehydrating and killing the fish.",
            commonErrors: [
              "Saying the fish 'drinks too much salt'; the main problem is water loss by osmosis.",
            ],
          },
        },
        {
          id: "s7-u5-osmosis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three cells are placed in solutions A, B and C. Cell A swells, Cell B stays the same size, and Cell C shrinks.",
          parts: [
            {
              label: "a",
              prompt: "Identify the tonicity of each solution.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain the water movement in each case.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Which solution would a marine alga prefer? Explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tonicity",
                statement:
                  "Hypotonic, isotonic, hypertonic describe relative solute concentrations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A is hypotonic, B is isotonic, C is hypertonic.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "In A, water enters the cell (hypotonic → cell swells).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "In B, water moves equally in and out (isotonic → no net change).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "In C, water leaves the cell (hypertonic → cell shrinks).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "A marine alga lives in seawater (hypertonic), so it would prefer solution C.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) A hypotonic, B isotonic, C hypertonic (b) Water enters A, balanced in B, leaves C (c) Marine alga prefers C (seawater is hypertonic).",
            commonErrors: ["Reversing hypotonic and hypertonic."],
          },
        },
      ],
    },
    {
      id: "s7-u5-active-transport",
      title: "Active transport and cell specialization",
      skill:
        "Explain active transport and how specialized cells use transport mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Active transport",
            body: "**Active transport** moves particles against their concentration gradient — from low to high concentration — using energy from ATP. The classic example is the **sodium-potassium pump** in nerve and muscle cells, which moves sodium out and potassium in to maintain electrical gradients needed for nerve impulses.",
          },
          {
            heading: "Cell specialization",
            body: "Cells become **specialized** when they develop structures suited to a specific job.\n\n- **Root hair cells** have long extensions that increase surface area for absorbing water and minerals.\n- **Red blood cells** have no nucleus, leaving more room for hemoglobin to carry oxygen.\n- **Neurons** have long axons to transmit signals over distances.\n- **Epithelial cells** have tight junctions to form barriers.\n\nSpecialization allows multicellular organisms to be efficient: each cell type does one job very well.",
          },
        ],
        keyFormulas: [
          {
            name: "Active transport",
            statement: "Moves particles against gradient; requires ATP energy.",
          },
          {
            name: "Sodium-potassium pump",
            statement: "Moves Na+ out and K+ in; essential for nerve function.",
          },
          {
            name: "Cell specialization",
            statement:
              "Cells develop structures for specific functions, increasing efficiency.",
          },
        ],
        workedExample: {
          problem: "Why do root hair cells have long extensions?",
          solution:
            "The extensions increase surface area, allowing more water and minerals to be absorbed by osmosis and active transport.",
        },
      },
      questions: [
        {
          id: "s7-u5-active-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What distinguishes active transport from diffusion?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Active transport requires energy; diffusion does not",
              },
              {
                id: "b",
                text: "Active transport moves water; diffusion moves solutes",
              },
              {
                id: "c",
                text: "Active transport is slower; diffusion is faster",
              },
              { id: "d", text: "They are the same process" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active transport",
                statement: "Moves particles against gradient using ATP energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Active transport requires energy (ATP); diffusion is passive and needs no energy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** Active transport requires energy; diffusion does not.",
            commonErrors: ["Thinking both processes require energy."],
          },
        },
        {
          id: "s7-u5-active-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways cells are specialized and explain the advantage of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell specialization",
                statement: "Cells develop structures for specific functions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Root hair cells have long extensions that increase surface area for absorbing water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Red blood cells lack a nucleus, leaving more room for hemoglobin to carry oxygen.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Specialization increases efficiency: each cell type performs its function better than a generalist cell could.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Root hair cells: more surface area for absorption. Red blood cells: more hemoglobin for oxygen transport. Specialization increases efficiency.",
            commonErrors: [
              "Listing structures without explaining the advantage.",
            ],
          },
        },
        {
          id: "s7-u5-active-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why nerve cells need the sodium-potassium pump.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sodium-potassium pump",
                statement: "Moves Na+ out and K+ in using ATP.",
              },
              {
                kind: "property",
                name: "Nerve impulses",
                statement:
                  "Electrical gradients across the membrane generate nerve signals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The pump maintains high Na+ outside and high K+ inside the cell.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This creates an electrical gradient across the membrane.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The gradient is essential for generating nerve impulses.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without the pump, the gradient would collapse and nerve signals would fail.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "The pump maintains ion gradients needed for nerve impulses; without it, nerve signaling fails.",
            commonErrors: [
              "Saying the pump produces energy; it uses ATP to move ions.",
            ],
          },
        },
        {
          id: "s7-u5-active-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A unicellular organism must carry out all life functions in one cell. A multicellular organism has specialized cells.",
          parts: [
            {
              label: "a",
              prompt:
                "Give one advantage of specialization in multicellular organisms.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Give one disadvantage or challenge of being unicellular.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain how a root hair cell's structure relates to its function.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Predict what would happen to a plant if root hair cells lost their extensions.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specialization",
                statement: "Cells develop structures for specific functions.",
              },
              {
                kind: "definition",
                name: "Unicellular",
                statement: "Single cell carries out all functions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Specialization increases efficiency — each cell type does one job very well.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "A unicellular organism must do everything in one cell, which limits its size and complexity.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Long extensions increase surface area, allowing more water and minerals to be absorbed.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Less surface area means less water and mineral absorption; the plant would grow poorly or wilt.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Efficiency (b) Limited size/complexity (c) Extensions increase absorption area (d) Reduced absorption, poor growth.",
            commonErrors: ["Not linking structure to function."],
          },
        },
      ],
    },
  ],
};

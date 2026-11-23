import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "bio9-u6-lesson-6-1",
  code: "6-1",
  title: "Prokaryotic and Eukaryotic Cells",
  goal: "I CAN compare prokaryotic and eukaryotic cells, describe organelle structure and function, and explain endosymbiotic theory.",
  standards: [
    "HS-LS1-1",
    "HS-LS1-2",
    "CCC: Structure and Function",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    {
      term: "Prokaryote",
      definition:
        "Cell without a membrane-bound nucleus; includes bacteria and archaea.",
    },
    {
      term: "Eukaryote",
      definition:
        "Cell with membrane-bound organelles including a nucleus; includes protists, fungi, plants, animals.",
    },
    {
      term: "Organelle",
      definition:
        "Specialized structure inside a cell that performs a function.",
    },
    {
      term: "Nucleus",
      definition:
        "Membrane-bound organelle containing DNA that controls cell activities.",
    },
    { term: "Ribosome", definition: "Site of protein synthesis." },
    {
      term: "Endosymbiotic theory",
      definition:
        "Theory that mitochondria and chloroplasts evolved from free-living bacteria engulfed by larger cells.",
    },
    {
      term: "Plasma membrane",
      definition:
        "Selective barrier controlling what enters and leaves the cell.",
    },
  ],
  concepts: [
    {
      id: "bio9-u6-prokaryote-eukaryote",
      title: "Comparing cell types",
      skill:
        "Distinguish prokaryotic and eukaryotic cells and identify their components.",
      lesson: {
        sections: [
          {
            heading: "Two fundamental cell types",
            body: "**Prokaryotic cells** (bacteria, archaea): no nucleus, DNA in a nucleoid region, few organelles, smaller and simpler. They have a cell wall, plasma membrane, ribosomes, and sometimes flagella or pili.\n\n**Eukaryotic cells** (protists, fungi, plants, animals): membrane-bound nucleus and organelles — mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes (in animals), chloroplasts (in plants). Larger and more complex.",
          },
          {
            heading: "Shared features",
            body: "Both cell types share:\n- Plasma membrane (selective barrier)\n- Cytoplasm\n- Ribosomes (protein synthesis)\n- DNA carrying genetic information\n- Cell wall in most cases (not animal cells)",
          },
        ],
        keyFormulas: [
          {
            name: "Prokaryote",
            statement: "No nucleus; DNA in nucleoid; few organelles.",
          },
          {
            name: "Eukaryote",
            statement: "Membrane-bound nucleus and organelles.",
          },
          {
            name: "Shared",
            statement: "Plasma membrane, cytoplasm, ribosomes, DNA.",
          },
        ],
        workedExample: {
          problem:
            "A cell has no nucleus but contains ribosomes and a cell wall. What type of cell is it?",
          solution: "Prokaryotic — no nucleus, DNA in nucleoid region.",
        },
      },
      questions: [
        {
          id: "bio9-u6-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature distinguishes eukaryotic from prokaryotic cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Presence of ribosomes" },
              { id: "b", text: "Membrane-bound nucleus" },
              { id: "c", text: "Presence of DNA" },
              { id: "d", text: "Plasma membrane" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eukaryote",
                statement: "Has membrane-bound nucleus; prokaryotes do not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The nucleus is the defining feature of eukaryotes; all cells share ribosomes, DNA and plasma membrane.",
                evidence: "nucleus",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Membrane-bound nucleus.",
            commonErrors: ["Choosing (a): both cell types have ribosomes."],
          },
        },
        {
          id: "bio9-u6-comp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three organelles found in eukaryotic but not prokaryotic cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Eukaryotic organelles",
                statement:
                  "Nucleus, mitochondria, ER, Golgi — membrane-bound structures absent in prokaryotes.",
              },
            ],
            steps: [
              {
                reasoning: "Nucleus contains DNA.",
                evidence: "nucleus",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Mitochondria produce ATP.",
                evidence: "mitochondria",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Endoplasmic reticulum and Golgi process proteins.",
                evidence: "ER/Golgi",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Nucleus, mitochondria, ER/Golgi (any three).",
            commonErrors: ["Listing ribosomes, which are universal."],
          },
        },
        {
          id: "bio9-u6-comp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how endosymbiotic theory accounts for mitochondria and chloroplasts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Endosymbiotic theory",
                statement: "Organelles descended from engulfed bacteria.",
              },
            ],
            steps: [
              {
                reasoning: "Both have their own circular DNA like bacteria.",
                evidence: "DNA",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "They reproduce independently by binary fission.",
                evidence: "fission",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They have double membranes consistent with engulfment.",
                evidence: "membranes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ribosomes inside resemble bacterial ribosomes.",
                evidence: "ribosomes",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "They descend from engulfed bacteria — own DNA, binary fission, double membranes.",
            commonErrors: ["Saying organelles were always part of the cell."],
          },
        },
        {
          id: "bio9-u6-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare a bacterial cell and a plant cell across five features.",
          parts: [
            { label: "a", prompt: "Nucleus?", marks: 1 },
            { label: "b", prompt: "Cell wall?", marks: 1 },
            { label: "c", prompt: "Chloroplasts?", marks: 1 },
            { label: "d", prompt: "Mitochondria?", marks: 1 },
            { label: "e", prompt: "Size?", marks: 1 },
            { label: "f", prompt: "DNA location?", marks: 1 },
            { label: "g", prompt: "Ribosomes?", marks: 1 },
            { label: "h", prompt: "Overall complexity?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cell comparison",
                statement:
                  "Bacteria are small and simple; plant cells are large with organelles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Bacterium: no nucleus (nucleoid). Plant: nucleus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Both have cell walls (bacteria: peptidoglycan; plant: cellulose).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Bacterium: none. Plant: chloroplasts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Bacterium: none (plasma membrane only). Plant: mitochondria.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Bacterium ~1–5 µm; plant cell ~10–100 µm.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "f",
                reasoning:
                  "Bacterium: circular DNA in nucleoid. Plant: linear chromosomes in nucleus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "g",
                reasoning:
                  "Both have ribosomes (bacterial 70S vs eukaryotic 80S).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "h",
                reasoning:
                  "Plant cell far more complex with compartmentalization.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Bacterium: no nucleus, no organelles, small, nucleoid DNA. Plant: nucleus, organelles, large, chromosomal DNA.",
            commonErrors: ["Claiming bacteria have mitochondria."],
          },
        },
      ],
    },
    {
      id: "bio9-u6-organelles",
      title: "Organelle Structure and Function",
      skill:
        "Describe the structure and function of major eukaryotic organelles.",
      lesson: {
        sections: [
          {
            heading: "Energy and protein organelles",
            body: "- **Mitochondria**: double membrane; inner membrane folded into cristae. Site of cellular respiration → ATP.\n- **Chloroplasts**: double membrane + thylakoid stacks (grana). Site of photosynthesis → glucose.\n- **Ribosomes**: protein synthesis; free in cytoplasm or bound to ER.\n- **Endoplasmic reticulum**: rough ER (with ribosomes) folds/processes proteins; smooth ER makes lipids and detoxifies.\n- **Golgi apparatus**: modifies, sorts and packages proteins into vesicles.",
          },
          {
            heading: "Storage, digestion and support",
            body: "- **Lysosomes**: contain hydrolytic enzymes; digest waste and pathogens.\n- **Vacuoles**: large in plants; store water, ions, waste (turgor pressure).\n- **Peroxisomes**: break down fatty acids and detoxify.\n- **Cytoskeleton**: microtubules, microfilaments, intermediate filaments — maintains shape and enables transport/division.",
          },
        ],
        keyFormulas: [
          {
            name: "Mitochondria",
            statement:
              "Cellular respiration → ATP; cristae increase surface area.",
          },
          {
            name: "Chloroplasts",
            statement:
              "Photosynthesis → glucose; thylakoids contain chlorophyll.",
          },
          {
            name: "Endomembrane system",
            statement: "ER → Golgi → vesicles → plasma membrane or lysosomes.",
          },
          {
            name: "Lysosome",
            statement: "Hydrolytic enzymes digest macromolecules.",
          },
        ],
        workedExample: {
          problem:
            "A secreted protein is made on ribosomes. Trace its path through the cell.",
          solution:
            "Ribosome → rough ER (folding) → Golgi (modification/packaging) → vesicle → plasma membrane → secretion.",
        },
      },
      questions: [
        {
          id: "bio9-u6-organelles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle produces most of a cell's ATP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Golgi apparatus" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Lysosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitochondria",
                statement: "Site of cellular respiration producing ATP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mitochondria produce ATP via oxidative phosphorylation on the inner membrane.",
                evidence: "mitochondria",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Mitochondrion.",
            commonErrors: ["Choosing (a): nucleus stores DNA."],
          },
        },
        {
          id: "bio9-u6-organelles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the endomembrane pathway for a secreted protein.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Endomembrane system",
                statement: "ER → Golgi → vesicle → membrane.",
              },
            ],
            steps: [
              {
                reasoning: "Synthesized on ribosomes bound to rough ER.",
                evidence: "rER",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Folded/modified in ER lumen, then transported to Golgi.",
                evidence: "ER→Golgi",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Golgi modifies, sorts, packages into vesicle that fuses with plasma membrane.",
                evidence: "Golgi→vesicle",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Ribosome → rough ER → Golgi → vesicle → plasma membrane.",
            commonErrors: ["Skipping the Golgi step."],
          },
        },
        {
          id: "bio9-u6-organelles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why mitochondria have a double membrane and folded inner membrane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitochondrial structure",
                statement: "Cristae maximize surface area for ATP production.",
              },
            ],
            steps: [
              {
                reasoning: "Outer membrane is permeable to small molecules.",
                evidence: "outer",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Inner membrane is impermeable, hosts electron transport chain.",
                evidence: "inner",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cristae folds dramatically increase surface area.",
                evidence: "cristae",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "More surface area = more ATP synthase and ETC complexes = more ATP.",
                evidence: "ATP",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Double membrane compartments reactions; cristae maximize ATP-producing surface area.",
            commonErrors: ["Not connecting structure to function."],
          },
        },
        {
          id: "bio9-u6-organelles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Match each organelle to its function and identify which are unique to plants.",
          parts: [
            {
              label: "a",
              prompt: "Chloroplast — function? Plant-only?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Lysosome — function? Plant-only?",
              marks: 2,
            },
            { label: "c", prompt: "Vacuole — function? Plant-only?", marks: 2 },
            {
              label: "d",
              prompt: "Cell wall — function? Plant-only?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Organelle functions",
                statement: "Each organelle has a specialized role.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Photosynthesis; yes, plant-specific (also algae).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Digestion via hydrolytic enzymes; animal cells mainly.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Storage, turgor pressure; large central vacuole is plant-specific.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Support and protection (cellulose); plant-specific.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Photosynthesis, yes (b) Digestion, animal (c) Storage/turgor, plant (d) Support, plant.",
            commonErrors: ["Assigning plant-only status to lysosomes."],
          },
        },
      ],
    },
    {
      id: "bio9-u6-membrane-transport",
      title: "Membrane Transport and Cell Communication",
      skill:
        "Explain passive and active transport mechanisms and how cells communicate.",
      lesson: {
        sections: [
          {
            heading: "Transport across membranes",
            body: "The plasma membrane is a **phospholipid bilayer** with embedded proteins.\n\n**Passive transport** (no energy):\n- **Diffusion**: molecules move down concentration gradient.\n- **Osmosis**: water diffusion across membrane.\n- **Facilitated diffusion**: channel/carrier proteins assist.\n\n**Active transport** (requires ATP):\n- **Sodium-potassium pump**: moves Na⁺ out, K⁺ in against gradients.\n- **Endocytosis/exocytosis**: bulk transport via vesicles.",
          },
          {
            heading: "Cell communication",
            body: "Cells communicate via **signaling molecules** (hormones, neurotransmitters) that bind to **receptors**. This triggers a **signal transduction** cascade inside the cell — often involving second messengers like cAMP or calcium ions — leading to a cellular response.",
          },
        ],
        keyFormulas: [
          {
            name: "Passive vs active",
            statement:
              "Passive = down gradient, no ATP; active = against gradient, ATP.",
          },
          {
            name: "Osmosis",
            statement: "Water moves toward higher solute concentration.",
          },
          {
            name: "Signal transduction",
            statement: "Ligand → receptor → cascade → response.",
          },
        ],
        workedExample: {
          problem:
            "A red blood cell is placed in distilled water. What happens?",
          solution:
            "Water enters by osmosis; cell swells and may burst (hemolysis) — hypotonic solution.",
        },
      },
      questions: [
        {
          id: "bio9-u6-transport-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process requires ATP?",
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
            principles: [
              {
                kind: "definition",
                name: "Active transport",
                statement: "Moves solutes against gradient using ATP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Active transport requires ATP; all others are passive.",
                evidence: "ATP",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Active transport.",
            commonErrors: ["Choosing (d): facilitated diffusion is passive."],
          },
        },
        {
          id: "bio9-u6-transport-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to an animal cell in a hypertonic solution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Osmosis",
                statement: "Water moves toward higher solute concentration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hypertonic = higher solute outside than inside cell.",
                evidence: "hypertonic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Water leaves cell by osmosis.",
                evidence: "water out",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Cell shrivels (crenation in animals; plasmolysis in plants).",
                evidence: "shrink",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Water leaves → cell shrivels (crenation).",
            commonErrors: ["Saying water enters the cell."],
          },
        },
        {
          id: "bio9-u6-transport-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the sodium-potassium pump maintains cell function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Na⁺/K⁺ pump",
                statement:
                  "Maintains electrochemical gradients essential for nerve impulses.",
              },
            ],
            steps: [
              {
                reasoning: "Pumps 3 Na⁺ out and 2 K⁺ in per ATP.",
                evidence: "3:2",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Creates steep Na⁺ gradient outside cell.",
                evidence: "gradient",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Establishes resting membrane potential.",
                evidence: "potential",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Essential for nerve impulse transmission and nutrient uptake.",
                evidence: "nerve",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Pumps Na⁺ out/K⁺ in → maintains gradients for nerve signals and transport.",
            commonErrors: ["Getting the ion directions reversed."],
          },
        },
        {
          id: "bio9-u6-transport-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A hormone binds to a receptor on a liver cell.",
          parts: [
            {
              label: "a",
              prompt: "What type of molecule is the hormone?",
              marks: 1,
            },
            { label: "b", prompt: "What happens at the receptor?", marks: 2 },
            { label: "c", prompt: "What is signal transduction?", marks: 2 },
            {
              label: "d",
              prompt: "What is a possible cellular response?",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Why doesn't the hormone enter the cell?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cell signaling",
                statement:
                  "Ligand–receptor binding triggers intracellular cascade.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A signaling molecule (hormone).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Binds to specific receptor → shape change activates it.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Cascade of intracellular events amplifying the signal (second messengers).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "e.g., glycogen breakdown, enzyme activation, gene expression change.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning:
                  "Most hormones are too large/polar to cross the membrane; receptors relay the message.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Hormone (b) Receptor activation (c) Intracellular cascade (d) Metabolic response (e) Too large to cross.",
            commonErrors: ["Saying all hormones enter cells."],
          },
        },
      ],
    },
  ],
};

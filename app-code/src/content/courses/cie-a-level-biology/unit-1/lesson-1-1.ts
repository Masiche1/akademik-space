import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cial-b-u1-lesson-1-1",
  code: "1-1",
  title: "Cell structure: prokaryotes and eukaryotes",
  goal: "I CAN compare prokaryotic and eukaryotic cells and identify cell structures and their functions.",
  standards: ["9700 Unit 1: cell structure"],
  vocabulary: [
    {
      term: "Prokaryote",
      definition: "Cell without a membrane-bound nucleus, e.g. bacteria.",
    },
    {
      term: "Eukaryote",
      definition:
        "Cell with a membrane-bound nucleus, e.g. plant and animal cells.",
    },
    {
      term: "Organelle",
      definition:
        "Specialised structure inside a eukaryotic cell with a specific function.",
    },
    {
      term: "Cell membrane",
      definition:
        "Phospholipid bilayer controlling what enters and leaves the cell.",
    },
    {
      term: "Cell wall",
      definition:
        "Rigid layer outside the membrane; cellulose in plants, peptidoglycan in bacteria.",
    },
    {
      term: "Nucleoid",
      definition:
        "Region in prokaryotes containing the circular DNA, not membrane-bound.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u1-cell-types",
      title: "Prokaryotic vs eukaryotic cells",
      skill: "Distinguish cell types and identify key structures.",
      lesson: {
        sections: [
          {
            heading: "The fundamental difference",
            body: "Prokaryotes (bacteria, archaea) lack a nucleus — DNA floats in the nucleoid. Eukaryotes (plants, animals, fungi, protists) have membrane-bound organelles including a nucleus. Size differs too: prokaryotes ~1-5 μm, eukaryotes ~10-100 μm.",
          },
          {
            heading: "Shared features",
            body: "Both have: cell membrane (phospholipid bilayer), cytoplasm, ribosomes, DNA, and carry out metabolism. Differences: eukaryotes have nucleus, mitochondria, ER, Golgi, lysosomes (animals) or chloroplasts/cell wall/vacuole (plants).",
          },
          {
            heading: "Plant vs animal cells",
            body: "Plant cells additionally have: cell wall (cellulose), chloroplasts (photosynthesis), large permanent vacuole. Animal cells have centrioles and lysosomes; lack wall, chloroplasts and large vacuole.",
          },
        ],
        keyFormulas: [
          {
            name: "Cell comparison",
            statement:
              "Prokaryote=no nucleus; eukaryote=nucleus+organelles; plant=+wall/chloroplasts/vacuole.",
          },
        ],
        workedExample: {
          problem:
            "A cell has a nucleus, mitochondria and a cellulose wall. What type is it?",
          solution:
            "Eukaryotic plant cell — nucleus and mitochondria indicate eukaryote; cellulose wall indicates plant.",
        },
      },
      questions: [
        {
          id: "cial-b-u1-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What distinguishes a prokaryotic cell from a eukaryotic cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absence of a membrane-bound nucleus" },
              { id: "b", text: "Absence of a cell membrane" },
              { id: "c", text: "Absence of DNA" },
              { id: "d", text: "Smaller size only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prokaryote",
                statement: "No membrane-bound nucleus; DNA in nucleoid.",
              },
            ],
            steps: [
              {
                reasoning: "The nucleus is the defining difference.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** No membrane-bound nucleus",
            commonErrors: [
              "Thinking prokaryotes lack a cell membrane — they have one.",
            ],
          },
        },
        {
          id: "cial-b-u1-ct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two structures found in plant cells but not animal cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plant cell",
                statement:
                  "Cell wall, chloroplasts, large vacuole distinguish plant cells.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two of cell wall, chloroplasts, large permanent vacuole.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell wall, chloroplasts or large vacuole.",
            commonErrors: ["Naming mitochondria — present in both."],
          },
        },
        {
          id: "cial-b-u1-ct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the nucleus is described as 'membrane-bound' and why this matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleus",
                statement:
                  "Double-membrane organelle containing DNA; separates genetic material from cytoplasm.",
              },
            ],
            steps: [
              {
                reasoning: "Double membrane (nuclear envelope) with pores.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Separates DNA from cytoplasmic reactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows controlled transport via pores.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Membrane-bound nucleus separates and protects DNA, enabling compartmentalisation.",
            commonErrors: ["Saying prokaryotes have no DNA."],
          },
        },
        {
          id: "cial-b-u1-ct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cell types.",
          parts: [
            { label: "a", prompt: "Define prokaryote.", marks: 1 },
            { label: "b", prompt: "Define eukaryote.", marks: 1 },
            { label: "c", prompt: "Name two plant-only structures.", marks: 2 },
            {
              label: "d",
              prompt: "Compare prokaryotic and eukaryotic cells.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell types",
                statement:
                  "Prokaryote=no nucleus; eukaryote=nucleus+organelles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "No membrane-bound nucleus.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Has membrane-bound nucleus and organelles.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Any two of wall, chloroplasts, vacuole.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Size difference noted.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Nucleus vs nucleoid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Organelles vs none.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Shared features noted.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) no nucleus (b) nucleus+organelles (c) wall/chloroplasts (d) size+nucleus+organelles+shared",
          },
        },
        {
          id: "cial-b-u1-ct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about cell size is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prokaryotes are typically 1-5 $\\mu$m; eukaryotes 10-100 $\\mu$m" },
              { id: "b", text: "Prokaryotes are typically larger than eukaryotes" },
              { id: "c", text: "Both cell types are the same size" },
              { id: "d", text: "Eukaryotes are invisible to light microscopes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell size",
                statement: "Prokaryotes ~1-5 $\\mu$m; eukaryotes ~10-100 $\\mu$m.",
              },
            ],
            steps: [
              {
                reasoning: "Prokaryotes are smaller than eukaryotes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Prokaryotes 1-5 $\\mu$m; eukaryotes 10-100 $\\mu$m",
            commonErrors: ["Reversing the size relationship."],
          },
        },
        {
          id: "cial-b-u1-ct-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structure is found in BOTH prokaryotic and eukaryotic cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Mitochondria" },
              { id: "c", text: "Ribosomes" },
              { id: "d", text: "Chloroplasts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shared features",
                statement: "Both cell types have membrane, cytoplasm, ribosomes, DNA.",
              },
            ],
            steps: [
              {
                reasoning: "Ribosomes are present in both cell types.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Ribosomes",
            commonErrors: ["Naming a eukaryotic-only organelle."],
          },
        },
        {
          id: "cial-b-u1-ct-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bacterium is 2 $\\mu$m long and is drawn 40 mm long. Calculate the magnification of the drawing.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20000, unit: "x" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification",
                statement: "Magnification = image size / actual size (same units).",
              },
            ],
            steps: [
              {
                reasoning: "Convert image size to micrometres: $40 \\text{ mm} = 40\\,000 \\mu\\text{m}$.",
                working: "40000 \\mu\\text{m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide image by actual size: $40000 / 2 = 20000$.",
                working: "40000 \\div 2 = 20000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20000×",
            commonErrors: ["Forgetting to convert mm to $\\mu$m before dividing."],
          },
        },
        {
          id: "cial-b-u1-ct-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A eukaryotic cell is 20 $\\mu$m across and a prokaryotic cell is 2 $\\mu$m across. How many times larger is the eukaryotic cell?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "times" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Size ratio",
                statement: "Ratio = larger size / smaller size.",
              },
            ],
            steps: [
              {
                reasoning: "Divide eukaryote size by prokaryote size: $20 / 2$.",
                working: "20 \\div 2 = 10",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 times larger",
          },
        },
        {
          id: "cial-b-u1-ct-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three structures or features found in BOTH prokaryotic and eukaryotic cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shared features",
                statement: "Cell membrane, cytoplasm, ribosomes, DNA.",
              },
            ],
            steps: [
              { reasoning: "Any three of membrane, cytoplasm, ribosomes, DNA.", marks: 1, markCode: "M" },
              { reasoning: "Second correct feature.", marks: 1, markCode: "M" },
              { reasoning: "Third correct feature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell membrane, cytoplasm, ribosomes, DNA (any three).",
            commonErrors: ["Naming mitochondria or nucleus — eukaryotic only."],
          },
        },
        {
          id: "cial-b-u1-ct-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how prokaryotes carry out all the processes of life without membrane-bound organelles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prokaryote metabolism",
                statement: "No organelles, but DNA in nucleoid, ribosomes and enzymes in cytoplasm.",
              },
            ],
            steps: [
              {
                reasoning: "DNA in nucleoid still controls cell activities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ribosomes in cytoplasm carry out protein synthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enzymes and reactions occur directly in cytoplasm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Small size means short diffusion distances.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reactions occur in cytoplasm; ribosomes synthesise proteins; small size allows efficient diffusion.",
            commonErrors: ["Claiming prokaryotes cannot respire or reproduce."],
          },
        },
        {
          id: "cial-b-u1-ct-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about cell walls is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bacterial walls contain peptidoglycan; plant walls cellulose; fungal walls chitin" },
              { id: "b", text: "All cell walls are made of cellulose" },
              { id: "c", text: "Animal cells have a peptidoglycan wall" },
              { id: "d", text: "Cell walls are present inside the cell membrane" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Cell walls",
                statement: "Bacteria=peptidoglycan; plants=cellulose; fungi=chitin.",
              },
            ],
            steps: [
              { reasoning: "Each wall type has a different polymer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Peptidoglycan, cellulose and chitin respectively",
            commonErrors: ["Assuming all walls are cellulose."],
          },
        },
        {
          id: "cial-b-u1-ct-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A eukaryotic cell is modelled as a cube of side 2 $\\mu$m. Calculate its surface area : volume ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "$\\mu$m$^{-1}$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SA:V ratio",
                statement: "SA = $6s^2$; V = $s^3$; ratio = $6/s$ for a cube.",
              },
            ],
            steps: [
              {
                reasoning: "Surface area $= 6 \\times 2^2 = 24\\ \\mu\\text{m}^2$; volume $= 2^3 = 8\\ \\mu\\text{m}^3$.",
                working: "SA = 24,\\ V = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio $= 24 / 8$.",
                working: "24 \\div 8 = 3",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct ratio with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 $\\mu$m$^{-1}$",
            commonErrors: ["Reporting SA or V alone instead of the ratio."],
          },
        },
        {
          id: "cial-b-u1-ct-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the cell walls of bacterial, plant and fungal cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Cell walls",
                statement: "Bacteria=peptidoglycan; plants=cellulose; fungi=chitin.",
              },
            ],
            steps: [
              { reasoning: "Bacterial wall = peptidoglycan.", marks: 1, markCode: "M" },
              { reasoning: "Plant wall = cellulose.", marks: 1, markCode: "M" },
              { reasoning: "Fungal wall = chitin.", marks: 1, markCode: "M" },
              { reasoning: "All three compared accurately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bacteria=peptidoglycan, plants=cellulose, fungi=chitin.",
            commonErrors: ["Saying all walls are cellulose."],
          },
        },
        {
          id: "cial-b-u1-ct-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell component is NOT surrounded by a membrane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Mitochondrion" },
              { id: "c", text: "Nucleoid" },
              { id: "d", text: "Lysosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleoid",
                statement: "Region of DNA in prokaryotes; not membrane-bound.",
              },
            ],
            steps: [
              {
                reasoning: "The nucleoid is not membrane-bound.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Nucleoid",
            commonErrors: ["Thinking the nucleoid has a membrane like the nucleus."],
          },
        },
        {
          id: "cial-b-u1-ct-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the nucleoid of a prokaryotic cell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleoid",
                statement: "Region containing circular DNA; not membrane-bound.",
              },
            ],
            steps: [
              {
                reasoning: "Region of cytoplasm containing the DNA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not surrounded by a membrane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Nucleoid = DNA region in cytoplasm, not membrane-bound.",
            commonErrors: ["Calling it a nucleus."],
          },
        },
        {
          id: "cial-b-u1-ct-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cell types.",
          parts: [
            { label: "a", prompt: "Give the typical size of a prokaryote and a eukaryote.", marks: 1 },
            { label: "b", prompt: "Name two structures found only in eukaryotes.", marks: 2 },
            { label: "c", prompt: "Name two structures found only in plant cells.", marks: 2 },
            { label: "d", prompt: "Compare how genetic material is stored in prokaryotes and eukaryotes.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Cell types",
                statement: "Size+nucleus vs nucleoid+organelles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Prokaryote ~1-5 $\\mu$m; eukaryote ~10-100 $\\mu$m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Any two of nucleus, mitochondria, ER, Golgi.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Any two of cell wall, chloroplasts, large vacuole.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Prokaryote: circular DNA in nucleoid, no membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Eukaryote: linear DNA inside membrane-bound nucleus.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both still contain DNA controlling the cell.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 1-5 vs 10-100 $\\mu$m (b) nucleus/mitochondria (c) wall/chloroplasts (d) nucleoid vs nucleus",
          },
        },
      ],
    },
    {
      id: "cial-b-u1-organelles",
      title: "Eukaryotic organelles",
      skill: "Identify organelles and link structure to function.",
      lesson: {
        sections: [
          {
            heading: "Energy and synthesis",
            body: "Mitochondria: aerobic respiration, ATP production — double membrane, own DNA. Ribosomes: protein synthesis — free or on rough ER. Chloroplasts (plants): photosynthesis — double membrane, thylakoids, own DNA.",
          },
          {
            heading: "Processing and transport",
            body: "Rough ER: protein synthesis and folding (ribosomes studded). Smooth ER: lipid synthesis, detoxification. Golgi apparatus: modifies, packages and ships proteins in vesicles. Lysosomes: digestive enzymes break down waste.",
          },
          {
            heading: "Support and control",
            body: "Nucleus: DNA storage and control. Cytoskeleton: microtubules/microfilaments for shape and transport. Centrioles (animals): cell division. Cell membrane: selective barrier — phospholipid bilayer with proteins.",
          },
        ],
        keyFormulas: [
          {
            name: "Organelles",
            statement:
              "Structure=function: mitochondria=respiration, ribosomes=protein, Golgi=packaging.",
          },
        ],
        workedExample: {
          problem: "A cell has many mitochondria. What does this suggest?",
          solution:
            "High energy demand — e.g. muscle cell needing ATP for contraction.",
        },
      },
      questions: [
        {
          id: "cial-b-u1-og-q1",
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
                statement: "Site of aerobic respiration and ATP production.",
              },
            ],
            steps: [
              {
                reasoning: "Mitochondria = respiration.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Mitochondrion",
            commonErrors: ["Confusing with chloroplasts (photosynthesis)."],
          },
        },
        {
          id: "cial-b-u1-og-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of the Golgi apparatus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Golgi",
                statement: "Modifies, packages and ships proteins in vesicles.",
              },
            ],
            steps: [
              {
                reasoning: "Modifies and packages proteins.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ships them in vesicles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Modifies, packages and transports proteins.",
            commonErrors: ["Saying it makes proteins — that's ribosomes/ER."],
          },
        },
        {
          id: "cial-b-u1-og-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the relationship between rough ER, ribosomes and the Golgi apparatus in protein secretion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secretory pathway",
                statement: "Ribosomes→rough ER→Golgi→vesicles→membrane.",
              },
            ],
            steps: [
              {
                reasoning: "Ribosomes synthesise protein on rough ER.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ER folds and transports to Golgi.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Golgi modifies and packages in vesicles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vesicles fuse with membrane for secretion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ribosomes→ER→Golgi→vesicles: synthesis, folding, packaging, secretion.",
            commonErrors: ["Describing organelles in isolation."],
          },
        },
        {
          id: "cial-b-u1-og-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Organelles.",
          parts: [
            { label: "a", prompt: "Function of mitochondria?", marks: 1 },
            { label: "b", prompt: "Function of ribosomes?", marks: 1 },
            { label: "c", prompt: "Function of lysosomes?", marks: 2 },
            {
              label: "d",
              prompt: "Trace protein secretion pathway.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organelles",
                statement:
                  "Mitochondria=respiration; ribosomes=protein; lysosomes=digestion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Aerobic respiration, ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Protein synthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Digestive enzymes break down waste.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Lysosomes correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Ribosomes synthesise.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Rough ER folds/transports.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Golgi packages.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vesicles secrete.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Pathway complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) respiration (b) protein (c) digestion (d) ribo→ER→Golgi→vesicle",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u1-cell-structure-notes",
      title: "Cell structure — revision notes",
      summary:
        "Prokaryotic vs eukaryotic cells and the functions of major cell structures.",
      sections: [
        {
          heading: "Prokaryotic vs eukaryotic",
          body: "Prokaryotes (bacteria): no nucleus, DNA in a nucleoid, no membrane-bound organelles, smaller ribosomes (70S). Eukaryotes (animals, plants, fungi, protists): membrane-bound nucleus and organelles, larger ribosomes (80S).",
        },
        {
          heading: "Key structures",
          body: "Nucleus — stores DNA, controls cell. Mitochondria — aerobic respiration, site of ATP production. Ribosomes — protein synthesis. Rough ER — studded with ribosomes, modifies proteins; smooth ER — lipid synthesis. Golgi — packaging and secretion. Lysosomes — hydrolytic enzymes. Chloroplasts (plants) — photosynthesis. Cell wall (plants/fungi) — support; cellulose in plants, chitin in fungi. Vacuole — turgor in plants.",
        },
        {
          heading: "Exam checklist",
          body: "Compare, don't just list: prokaryotes lack a nucleus and membrane-bound organelles. When describing a structure, always state its function — marks are for structure–function links.",
        },
      ],
    },
  ],
};

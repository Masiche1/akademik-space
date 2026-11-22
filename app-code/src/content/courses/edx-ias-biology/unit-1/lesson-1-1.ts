import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ediasbio-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Structure and Organisation",
  goal: "I CAN describe the structure and function of eukaryotic and prokaryotic cells, and explain how cell structure relates to function.",
  standards: ["IB1 Cell biology", "Cell ultrastructure"],
  vocabulary: [
    { term: "Eukaryote", definition: "Organism whose cells contain a membrane-bound nucleus and other organelles." },
    { term: "Prokaryote", definition: "Single-celled organism lacking a nucleus; DNA is free in the cytoplasm (e.g. bacteria)." },
    { term: "Organelle", definition: "Specialised membrane-bound structure inside a cell performing a specific function." },
    { term: "Cell theory", definition: "All living things are made of cells; the cell is the basic unit of life; cells arise from existing cells." },
  ],
  concepts: [
    {
      id: "ediasbio-u1-cell-types",
      title: "Prokaryotic and eukaryotic cells",
      skill: "Compare prokaryotic and eukaryotic cell structure and identify cell types from micrographs and descriptions.",
      lesson: {
        sections: [
          {
            heading: "Prokaryotic cells",
            body: "Bacteria are prokaryotes: no nucleus, DNA is a single circular chromosome in the nucleoid; ribosomes are smaller (70S); may have plasmids, flagella, pili and a cell wall of peptidoglycan. No membrane-bound organelles.",
          },
          {
            heading: "Eukaryotic cells",
            body: "Contain a nucleus enclosing DNA, plus organelles: mitochondria (respiration), ribosomes (protein synthesis), rough and smooth endoplasmic reticulum, Golgi apparatus, lysosomes, and in plants a cell wall, chloroplasts and large permanent vacuole.",
          },
          {
            heading: "Specialised cells",
            body: "Cell structure matches function: ciliated epithelial cells move mucus; root hair cells maximise surface area for absorption; sperm cells have a flagellum and many mitochondria; palisade mesophyll cells packed with chloroplasts.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain why a bacterial cell cannot carry out photosynthesis even though it has DNA.",
          solution: "Photosynthesis requires chloroplasts containing chlorophyll; prokaryotes lack membrane-bound organelles including chloroplasts.",
        },
      },
      questions: [
        {
          id: "ediasbio-cell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is found in prokaryotic but not eukaryotic cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Golgi apparatus" },
              { id: "b", text: "Plasmid" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Mitochondrion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Prokaryote", statement: "No nucleus; DNA free in nucleoid; plasmids common." }],
            steps: [{ reasoning: "Plasmids are small circular DNA in bacteria; nucleus/organelles are eukaryotic.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Plasmid",
          },
        },
        {
          id: "ediasbio-cell-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two differences between prokaryotic and eukaryotic cells.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cell types", statement: "Nucleus presence; organelles." }],
            steps: [
              { reasoning: "Prokaryotes lack a nucleus (DNA in nucleoid); eukaryotes have one.", marks: 1, markCode: "A" },
              { reasoning: "Prokaryotes lack membrane-bound organelles; eukaryotes have mitochondria, ER, Golgi etc.", marks: 1, markCode: "A" },
              { reasoning: "Prokaryotic ribosomes are smaller (70S vs 80S).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two valid differences",
            commonErrors: ["Saying bacteria have no DNA."],
          },
        },
        {
          id: "ediasbio-cell-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A root hair cell has a long thin extension. Explain how this structure is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Structure-function", statement: "Adaptations increase efficiency of function." }],
            steps: [
              { reasoning: "Large surface area to volume ratio.", marks: 1, markCode: "M" },
              { reasoning: "Increases rate of absorption of water and minerals by osmosis/diffusion/active transport.", marks: 1, markCode: "M" },
              { reasoning: "Thin wall keeps diffusion distance short.", marks: 1, markCode: "A" },
              { reasoning: "Position in soil maximises contact with water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Large SA:V increases absorption rate",
            commonErrors: ["Describing structure without linking to function."],
          },
        },
        {
          id: "ediasbio-cell-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare the structure of a prokaryotic cell and an animal cell.",
          parts: [
            { label: "a", prompt: "Describe the genetic material in each.", marks: 3 },
            { label: "b", prompt: "Compare organelles present.", marks: 4 },
            { label: "c", prompt: "Explain one functional consequence of the differences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cell comparison", statement: "Nucleus vs nucleoid; membrane-bound organelles." }],
            steps: [
              { part: "a", reasoning: "Prokaryote: single circular chromosome in nucleoid, no nuclear membrane; may have plasmids.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Eukaryote: linear chromosomes within nucleus, nuclear pores, histones.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Prokaryote: ribosomes only (70S), no mitochondria/ER/Golgi/lysosomes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Eukaryote: full set of membrane-bound organelles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prokaryote has cell wall (peptidoglycan), flagella/pili; animal cell lacks wall.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State comparison.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consequence: eukaryotes compartmentalise metabolism (e.g. respiration in mitochondria) enabling greater complexity; prokaryotes rely on cytoplasm.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or: smaller size → faster diffusion, rapid reproduction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Prokaryote: nucleoid, no organelles; eukaryote: nucleus + organelles",
            commonErrors: ["Unstructured comparison."],
          },
        },
      ],
    },
    {
      id: "ediasbio-u1-organelles",
      title: "Organelles and their functions",
      skill: "Relate the structure of major organelles to their functions in protein secretion and cell processes.",
      lesson: {
        sections: [
          {
            heading: "Endomembrane system",
            body: "Rough ER (ribosome-studded) synthesises proteins; smooth ER makes lipids and detoxifies; Golgi modifies, sorts and packages proteins into vesicles; lysosomes contain hydrolytic enzymes for digestion.",
          },
          {
            heading: "Energy and support",
            body: "Mitochondria carry out aerobic respiration with folded inner membrane (cristae) increasing surface area. Ribosomes read mRNA to build proteins. The cytoskeleton (microtubules, microfilaments) maintains shape and moves organelles.",
          },
          {
            heading: "Pathway of protein secretion",
            body: "Proteins destined for export are made on rough ER → transported to Golgi in vesicles → modified and packaged → secreted by exocytosis. This explains why secretory cells have abundant RER and Golgi.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do pancreatic cells that secrete digestive enzymes have extensive rough ER?",
          solution: "RER is the site of protein synthesis; high secretory demand requires many ribosomes on ER to produce large quantities of enzyme protein.",
        },
      },
      questions: [
        {
          id: "ediasbio-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the site of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lysosome" },
              { id: "b", text: "Golgi apparatus" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mitochondrion", statement: "Site of aerobic respiration (ATP production)." }],
            steps: [{ reasoning: "Direct fact.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Mitochondrion",
          },
        },
        {
          id: "ediasbio-org-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the functions of the Golgi apparatus and lysosomes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Organelles", statement: "Golgi: modify/package; lysosomes: digestion." }],
            steps: [
              { reasoning: "Golgi modifies, sorts and packages proteins into vesicles for secretion or other destinations.", marks: 1, markCode: "A" },
              { reasoning: "Lysosomes contain hydrolytic enzymes that break down worn organelles, pathogens and food particles.", marks: 1, markCode: "A" },
              { reasoning: "Both are membrane-bound.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Golgi packages/modifies; lysosomes digest",
            commonErrors: ["Confusing ER and Golgi roles."],
          },
        },
        {
          id: "ediasbio-org-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the inner membrane of mitochondria is folded into cristae.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Surface area", statement: "Folding increases surface area for reactions." }],
            steps: [
              { reasoning: "Cristae greatly increase inner membrane surface area.", marks: 1, markCode: "M" },
              { reasoning: "More surface area for electron transport chain enzymes and ATP synthase → greater rate of ATP production.", marks: 1, markCode: "M" },
              { reasoning: "Link to high energy demand of cell.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cristae increase SA for ATP synthesis",
            commonErrors: ["Not linking structure to function."],
          },
        },
        {
          id: "ediasbio-org-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the pathway of a protein that is secreted from a cell.",
          parts: [
            { label: "a", prompt: "Where is the protein first synthesised?", marks: 2 },
            { label: "b", prompt: "Trace its route to secretion.", marks: 4 },
            { label: "c", prompt: "Explain why cells with high secretion rates have many ribosomes.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Secretory pathway", statement: "RER → Golgi → vesicle → exocytosis." }],
            steps: [
              { part: "a", reasoning: "On ribosomes attached to rough endoplasmic reticulum.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State site.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Entered into RER lumen; transported in vesicles to Golgi.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Golgi modifies and packages into secretory vesicles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vesicle fuses with plasma membrane; protein released by exocytosis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State full pathway.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ribosomes are the site of protein synthesis.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "High secretion requires large protein output → many ribosomes needed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ribosomes may be free or bound to RER depending on destination.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "RER → Golgi → vesicle → exocytosis",
            commonErrors: ["Wrong order; missing Golgi."],
          },
        },
      ],
    },
  ],
};

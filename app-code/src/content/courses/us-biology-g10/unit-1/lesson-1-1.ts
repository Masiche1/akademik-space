import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "bio10-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Types and Organelles",
  goal: "I CAN compare prokaryotic and eukaryotic cells, identify major organelles, and explain how cell structure relates to function.",
  standards: ["HS-LS1-1", "HS-LS1-2"],
  vocabulary: [
    { term: "Prokaryote", definition: "A cell lacking a membrane-bound nucleus; includes bacteria and archaea." },
    { term: "Eukaryote", definition: "A cell with a membrane-bound nucleus and organelles; includes protists, fungi, plants, animals." },
    { term: "Organelle", definition: "A specialized structure inside a eukaryotic cell with a specific function." },
    { term: "Nucleus", definition: "The organelle containing DNA, enclosed by a double membrane (nuclear envelope)." },
    { term: "Mitochondrion", definition: "Organelle that produces ATP through cellular respiration; called the powerhouse of the cell." },
    { term: "Ribosome", definition: "Tiny structure that assembles proteins from amino acids." },
    { term: "Cell membrane", definition: "The phospholipid bilayer that encloses the cell and controls what enters and exits." },
  ],
  concepts: [
    {
      id: "bio10-u1-cell-types",
      title: "Prokaryotic vs eukaryotic cells",
      skill: "Distinguish the two fundamental cell types and explain their structural differences.",
      lesson: {
        sections: [
          {
            heading: "Two domains of life",
            body: "All living cells are either **prokaryotic** or **eukaryotic**:\n\n- **Prokaryotes** (bacteria, archaea): no nucleus, no membrane-bound organelles, DNA floats in the cytoplasm as a nucleoid. Much smaller (1-5 μm), simpler, reproduce by binary fission.\n- **Eukaryotes** (protists, fungi, plants, animals): have a nucleus and organelles. Larger (10-100 μm), more complex, divide by mitosis/meiosis.",
          },
          {
            heading: "Why the nucleus matters",
            body: "The nuclear envelope separates DNA from the cytoplasm. This allows eukaryotes to regulate gene expression, process RNA (splicing) before it reaches the cytoplasm, and protect DNA. Prokaryotes transcribe and translate simultaneously because there's no separation.",
          },
          {
            heading: "Size and complexity",
            body: "Eukaryotic cells are typically 10-100 times larger than prokaryotic cells. This larger size allows compartmentalization: different reactions happen in different organelles, increasing efficiency. The nucleus, mitochondria, endoplasmic reticulum, Golgi apparatus, lysosomes, and chloroplasts (plants) are all eukaryotic features.",
          },
        ],
        keyFormulas: [
          { name: "Cell types", statement: "Prokaryote: no nucleus; Eukaryote: membrane-bound nucleus" },
          { name: "Size", statement: "Prokaryotes ~1-5 μm; Eukaryotes ~10-100 μm" },
        ],
        workedExample: {
          problem: "A cell has a nucleus, mitochondria and a cell wall but no chloroplasts. What type of cell is it and what organism might it be?",
          solution: "The nucleus and organelles make it eukaryotic. The cell wall without chloroplasts suggests a fungus (e.g., yeast or mushroom) — plant cells have cell walls AND chloroplasts.",
        },
      },
      questions: [
        {
          id: "bio10-u1-cell-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature is found ONLY in eukaryotic cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell membrane" },
              { id: "b", text: "DNA" },
              { id: "c", text: "Membrane-bound nucleus" },
              { id: "d", text: "Cytoplasm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Eukaryote", statement: "Eukaryotes have a membrane-bound nucleus; prokaryotes do not." }],
            steps: [{ reasoning: "Only eukaryotic cells have a membrane-bound nucleus; all cells have DNA, membrane and cytoplasm.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Membrane-bound nucleus",
            commonErrors: ["Thinking bacteria lack DNA."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio10-u1-cell-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A researcher finds a single-celled organism with no nucleus but with ribosomes and a cell wall. Is it prokaryotic or eukaryotic? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prokaryote", statement: "No nucleus, no membrane-bound organelles." }],
            steps: [
              { reasoning: "The absence of a nucleus makes it prokaryotic.", marks: 1, markCode: "B" },
              { reasoning: "Ribosomes and cell wall are found in both cell types; they don't distinguish.", marks: 1, markCode: "R" },
              { reasoning: "It is likely a bacterium (or archaeon).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prokaryotic — no nucleus; likely a bacterium.",
            commonErrors: ["Thinking all single-celled organisms are prokaryotes (protists are eukaryotes)."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u1-cell-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two advantages of compartmentalization in eukaryotic cells compared to prokaryotic cells.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Compartmentalization", statement: "Organelles allow specialized, efficient reactions." }],
            steps: [
              { reasoning: "Different reactions can occur simultaneously in different organelles without interfering (e.g., respiration in mitochondria, photosynthesis in chloroplasts).", marks: 1, markCode: "R" },
              { reasoning: "Concentrating enzymes and reactants in a small volume increases reaction rates.", marks: 1, markCode: "B" },
              { reasoning: "The nucleus protects DNA and allows regulated gene expression (RNA processing before translation).", marks: 1, markCode: "B" },
              { reasoning: "Wastes can be isolated in lysosomes, protecting the rest of the cell.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compartmentalization allows simultaneous reactions, concentrated enzymes, DNA protection, and waste isolation.",
            commonErrors: ["Listing organelles without explaining the advantage."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u1-cell-types-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The diagram describes three cells found in a pond sample:",
          parts: [
            { label: "a", prompt: "Cell 1: 3 μm, no nucleus, DNA in nucleoid, has flagellum. Identify the cell type and likely organism.", marks: 2 },
            { label: "b", prompt: "Cell 2: 50 μm, has nucleus, chloroplasts, large vacuole, cell wall. Identify the cell type and likely organism.", marks: 2 },
            { label: "c", prompt: "Cell 3: 20 μm, has nucleus, mitochondria, no cell wall or chloroplasts. Identify the cell type and likely organism.", marks: 2 },
            { label: "d", prompt: "Explain why Cells 2 and 3 cannot be prokaryotes.", marks: 2 },
            { label: "e", prompt: "Predict which cell would be killed by an antibiotic that targets bacterial ribosomes, and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cell type", statement: "Nucleus + organelles = eukaryote; no nucleus = prokaryote." },
              { kind: "principle", name: "Antibiotic target", statement: "Bacterial ribosomes differ from eukaryotic ribosomes." },
            ],
            steps: [
              { reasoning: "Cell 1 is prokaryotic (no nucleus, nucleoid, small); likely a bacterium.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Flagellum and size consistent with bacterium.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Cell 2 is eukaryotic (nucleus, chloroplasts, vacuole); likely a plant cell or algal protist.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Chloroplasts + large vacuole + cell wall = photosynthetic eukaryote (alga or plant).", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Cell 3 is eukaryotic (nucleus, mitochondria, no wall/chloroplasts); likely an animal cell or animal-like protist.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Mitochondria + no chloroplasts/wall = heterotrophic eukaryote.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Cells 2 and 3 both have membrane-bound nuclei and organelles — defining features of eukaryotes.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Prokaryotes lack nuclei and membrane-bound organelles.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Cell 1 (bacterium) would be killed; its ribosomes are the antibiotic target.", marks: 1, markCode: "R", part: "e" },
              { reasoning: "Eukaryotic ribosomes (Cells 2, 3) differ in structure and are unaffected.", marks: 1, markCode: "B", part: "e" },
            ],
            finalAnswer: "(a) prokaryote/bacterium (b) eukaryote/plant or alga (c) eukaryote/animal-like (d) both have nuclei+organelles (e) Cell 1 killed.",
            commonErrors: ["Confusing protists with prokaryotes.", "Thinking antibiotics affect all cells."],
            examinerNote: "2+2+2+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u1-organelles",
      title: "Organelles and their functions",
      skill: "Identify the function of each major organelle and relate structure to function.",
      lesson: {
        sections: [
          {
            heading: "The endomembrane system",
            body: "Several organelles work together to make, modify and ship proteins:\n\n- **Nucleus**: stores DNA, makes RNA\n- **Ribosomes**: build proteins (free in cytoplasm or bound to ER)\n- **Endoplasmic reticulum (ER)**: rough ER (with ribosomes) folds and modifies proteins; smooth ER makes lipids and detoxifies\n- **Golgi apparatus**: packages, modifies and ships proteins in vesicles\n- **Lysosomes**: contain digestive enzymes to break down waste and old organelles\n- **Vesicles**: transport materials between organelles",
          },
          {
            heading: "Energy organelles",
            body: "- **Mitochondria**: cellular respiration → ATP. Have their own DNA and double membrane (endosymbiotic origin).\n- **Chloroplasts** (plants/algae): photosynthesis → glucose. Also have own DNA and double membrane.",
          },
          {
            heading: "Structural organelles",
            body: "- **Cell membrane**: phospholipid bilayer, controls transport\n- **Cell wall** (plants, fungi, bacteria): provides support and protection\n- **Cytoskeleton**: microtubules, microfilaments, intermediate filaments — maintains shape, enables movement\n- **Centrioles**: organize microtubules for cell division (animal cells)\n- **Vacuoles**: storage; large central vacuole in plants maintains turgor pressure",
          },
        ],
        keyFormulas: [
          { name: "Protein pathway", statement: "Ribosome → ER → Golgi → vesicle → destination" },
          { name: "Endosymbiosis", statement: "Mitochondria and chloroplasts evolved from engulfed bacteria" },
        ],
        workedExample: {
          problem: "A protein is synthesized on a ribosome bound to the rough ER. Trace its path to secretion outside the cell.",
          solution: "Ribosome on rough ER → protein enters ER lumen for folding/modification → transported in vesicle to Golgi → Golgi packages and modifies → secretory vesicle fuses with cell membrane → protein released outside.",
        },
      },
      questions: [
        {
          id: "bio10-u1-organelles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle produces ATP through cellular respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Golgi apparatus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mitochondrion", statement: "Produces ATP via cellular respiration." }],
            steps: [{ reasoning: "Mitochondria are the site of cellular respiration and ATP production.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Mitochondrion",
            commonErrors: ["Confusing chloroplasts with mitochondria."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio10-u1-organelles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the path of a secreted protein from synthesis to release outside the cell.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Secretory pathway", statement: "Ribosome → ER → Golgi → vesicle → membrane." }],
            steps: [
              { reasoning: "Protein synthesized on ribosome bound to rough ER.", marks: 1, markCode: "B" },
              { reasoning: "Enters ER lumen for folding/modification; transported to Golgi in vesicle.", marks: 1, markCode: "B" },
              { reasoning: "Golgi packages protein; secretory vesicle fuses with cell membrane releasing protein.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ribosome → rough ER → Golgi → vesicle → cell membrane → released.",
            commonErrors: ["Skipping Golgi or ER."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "bio10-u1-organelles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do mitochondria and chloroplasts contain their own DNA and reproduce independently?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endosymbiosis", statement: "These organelles evolved from engulfed prokaryotes." },
              { kind: "principle", name: "Evidence", statement: "Double membrane, own DNA, own ribosomes." },
            ],
            steps: [
              { reasoning: "Mitochondria and chloroplasts are thought to be engulfed bacteria that formed symbiotic relationships with ancestral eukaryotes.", marks: 1, markCode: "R" },
              { reasoning: "They retain their own circular DNA (similar to bacterial DNA), ribosomes (70S like bacteria), and reproduce by binary fission.", marks: 1, markCode: "B" },
              { reasoning: "Their double membrane reflects the original bacterial membrane plus host vesicle membrane.", marks: 1, markCode: "B" },
              { reasoning: "This endosymbiotic theory explains their semi-autonomous nature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Endosymbiotic origin: they were once free-living bacteria, retaining DNA and reproduction.",
            commonErrors: ["Thinking all organelles have DNA."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u1-organelles-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A liver cell is actively detoxifying alcohol and producing digestive enzymes for export.",
          parts: [
            { label: "a", prompt: "Which organelle is primarily responsible for detoxification? Explain.", marks: 2 },
            { label: "b", prompt: "Which organelles are involved in producing and exporting digestive enzymes? List them in order.", marks: 3 },
            { label: "c", prompt: "Which organelle provides the ATP needed for these processes?", marks: 1 },
            { label: "d", prompt: "What happens to worn-out organelles in this cell? Which organelle handles this?", marks: 2 },
            { label: "e", prompt: "Explain why the cell has extensive rough ER.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Organelle function", statement: "Each organelle specializes in specific tasks." },
              { kind: "principle", name: "Protein secretion", statement: "Ribosome → ER → Golgi → vesicle → membrane." },
            ],
            steps: [
              { reasoning: "Smooth ER detoxifies harmful substances like alcohol.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "It contains enzymes (cytochrome P450) that break down toxins.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Ribosomes (bound to rough ER) synthesize the enzymes.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Rough ER folds and modifies proteins; vesicles transport to Golgi.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Golgi packages and ships via secretory vesicles to cell membrane for export.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Mitochondria produce ATP for all these energy-requiring processes.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Lysosomes digest worn-out organelles and cellular waste.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "They contain hydrolytic enzymes that break down old organelles (autophagy).", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Rough ER is extensive because the cell produces large amounts of protein for export.", marks: 1, markCode: "R", part: "e" },
              { reasoning: "Bound ribosomes on rough ER synthesize secreted proteins.", marks: 1, markCode: "B", part: "e" },
            ],
            finalAnswer: "(a) smooth ER detoxifies (b) ribosome→ER→Golgi→vesicle (c) mitochondria (d) lysosomes (e) high protein export demand.",
            commonErrors: ["Confusing smooth vs rough ER functions."],
            examinerNote: "2+3+1+2+2 = 10.",
          },
        },
      ],
    },
  ],
};

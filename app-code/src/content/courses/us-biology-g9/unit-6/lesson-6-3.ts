import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "bio9-u6-lesson-6-3",
  code: "6-3",
  title: "Cell Specialization and Differentiation",
  goal: "I CAN explain how cells differentiate, describe stem cells, and relate cell structure to function in multicellular organisms.",
  standards: [
    "HS-LS1-1",
    "HS-LS1-2",
    "HS-LS1-5",
    "CCC: Structure and Function",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Differentiation",
      definition:
        "Process by which cells become specialized for particular functions.",
    },
    {
      term: "Stem cell",
      definition: "Undifferentiated cell capable of becoming many cell types.",
    },
    {
      term: "Totipotent",
      definition: "Can become any cell type including extraembryonic tissues.",
    },
    {
      term: "Pluripotent",
      definition:
        "Can become any cell of the three germ layers but not extraembryonic.",
    },
    {
      term: "Multipotent",
      definition: "Can become a limited range of related cell types.",
    },
    {
      term: "Gene expression",
      definition:
        "Which genes are turned on or off in a cell, determining its type.",
    },
    { term: "Tissue", definition: "Group of similar cells working together." },
    {
      term: "Organ",
      definition: "Structure of two or more tissues performing a function.",
    },
  ],
  concepts: [
    {
      id: "bio9-u6-differentiation",
      title: "Cell differentiation",
      skill: "Explain how identical cells develop into specialized cell types.",
      lesson: {
        sections: [
          {
            heading: "Differentiation",
            body: "All cells in a multicellular organism contain the same DNA, but **differentiation** produces different cell types by selectively expressing genes.\n\n- Different genes are turned on/off in different cells.\n- Epigenetic modifications (methylation, histone changes) regulate access to DNA.\n- Result: same genome, different proteomes → different structures and functions.",
          },
          {
            heading: "Examples",
            body: "- **Neurons**: long axons, many ion channels — transmit signals.\n- **Muscle cells**: abundant mitochondria and contractile proteins — generate force.\n- **Red blood cells**: no nucleus, full of hemoglobin — carry oxygen.\n- **Epithelial cells**: tightly packed, polarized — form barriers.",
          },
        ],
        keyFormulas: [
          {
            name: "Differentiation",
            statement:
              "Same DNA, different gene expression → different cell types.",
          },
          {
            name: "Structure-function",
            statement: "Cell shape reflects its specialized function.",
          },
          {
            name: "Epigenetics",
            statement:
              "Regulation of gene access without changing DNA sequence.",
          },
        ],
        workedExample: {
          problem:
            "Why do muscle cells have many mitochondria but red blood cells have none?",
          solution:
            "Muscle cells need lots of ATP for contraction; RBCs use no oxygen (they carry it) so mitochondria would waste space needed for hemoglobin.",
        },
      },
      questions: [
        {
          id: "bio9-u6-diff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes cells to differentiate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different DNA" },
              { id: "b", text: "Different gene expression" },
              { id: "c", text: "Different chromosomes" },
              { id: "d", text: "Mutation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Differentiation",
                statement: "Selective gene expression creates cell types.",
              },
            ],
            steps: [
              {
                reasoning:
                  "All cells share the same DNA; differentiation results from different genes being expressed.",
                evidence: "expression",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Different gene expression.",
            commonErrors: ["Choosing (a): all cells have same DNA."],
          },
        },
        {
          id: "bio9-u6-diff-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a red blood cell's structure relates to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "RBC specialization",
                statement:
                  "No nucleus + hemoglobin → maximum O₂ carrying capacity.",
              },
            ],
            steps: [
              {
                reasoning: "RBCs lack a nucleus, freeing space for hemoglobin.",
                evidence: "no nucleus",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Biconcave shape increases surface area for gas exchange.",
                evidence: "shape",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Hemoglobin binds O₂ in lungs and releases it in tissues.",
                evidence: "hemoglobin",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "No nucleus + biconcave shape + hemoglobin → efficient O₂ transport.",
            commonErrors: ["Not linking structure to function."],
          },
        },
        {
          id: "bio9-u6-diff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do epigenetic changes affect differentiation without altering DNA sequence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Epigenetics",
                statement: "Chemical marks control gene accessibility.",
              },
            ],
            steps: [
              {
                reasoning: "DNA methylation typically silences genes.",
                evidence: "methylation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Histone modifications alter chromatin packaging.",
                evidence: "histones",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "These marks determine which genes can be transcribed.",
                evidence: "access",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Same genome, different epigenome → different cell types.",
                evidence: "epigenome",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Methylation/histone marks control gene access → cell-type-specific expression.",
            commonErrors: ["Saying DNA sequence changes."],
          },
        },
        {
          id: "bio9-u6-diff-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare neurons and muscle cells across structure and function.",
          parts: [
            { label: "a", prompt: "Shape?", marks: 1 },
            { label: "b", prompt: "Key organelles?", marks: 2 },
            { label: "c", prompt: "Primary function?", marks: 2 },
            { label: "d", prompt: "Why these adaptations?", marks: 2 },
            {
              label: "e",
              prompt: "What genes would be highly expressed?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cell specialization",
                statement: "Structure reflects function.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Neuron: long branching processes. Muscle: elongated fibers.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Neuron: many ion channels, synaptic vesicles. Muscle: abundant mitochondria, myofibrils.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Neuron: transmit electrical signals. Muscle: contract for movement.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Neuron shape maximizes signal reach; muscle mitochondria fuel contraction.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning:
                  "Neuron: ion channel genes. Muscle: contractile protein genes (actin/myosin).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Processes vs fibers (b) Channels/vesicles vs mitochondria/myofibrils (c) Signals vs contraction (d) Structure→function (e) Channel vs contractile genes.",
            commonErrors: ["Not connecting structure to function."],
          },
        },
      ],
    },
    {
      id: "bio9-u6-stem-cells",
      title: "Stem Cells and Regeneration",
      skill: "Describe stem cell types, potency, and medical applications.",
      lesson: {
        sections: [
          {
            heading: "Stem cell potency",
            body: "Stem cell **potency** = range of cell types it can become:\n\n- **Totipotent**: any cell including placenta (early embryo cells).\n- **Pluripotent**: any of the three germ layers (embryonic stem cells).\n- **Multipotent**: limited range (adult stem cells, e.g., blood stem cells → all blood types).\n- **Unipotent**: one cell type only.",
          },
          {
            heading: "Applications",
            body: "- **Bone marrow transplant**: hematopoietic stem cells treat leukemia.\n- **Regenerative medicine**: potential to grow tissues/organs.\n- **Research**: disease modeling, drug testing.\n- **Ethical considerations**: embryonic stem cell research debates.",
          },
        ],
        keyFormulas: [
          {
            name: "Potency scale",
            statement: "Totipotent > pluripotent > multipotent > unipotent.",
          },
          {
            name: "Adult stem cells",
            statement: "Multipotent; found in tissues like bone marrow.",
          },
          {
            name: "Applications",
            statement: "Transplants, regenerative medicine, research.",
          },
        ],
        workedExample: {
          problem: "A bone marrow transplant uses which stem cell type?",
          solution:
            "Hematopoietic (blood) stem cells — multipotent, can form all blood cell types.",
        },
      },
      questions: [
        {
          id: "bio9-u6-stem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stem cell type can become any cell of the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unipotent" },
              { id: "b", text: "Multipotent" },
              { id: "c", text: "Pluripotent" },
              { id: "d", text: "Totipotent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Totipotent",
                statement: "Can become any cell type including extraembryonic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Totipotent cells can form all cell types plus extraembryonic tissues.",
                evidence: "totipotent",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Totipotent.",
            commonErrors: ["Choosing (c): pluripotent can't form placenta."],
          },
        },
        {
          id: "bio9-u6-stem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between pluripotent and multipotent stem cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Potency levels",
                statement:
                  "Pluripotent = any germ layer; multipotent = limited range.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pluripotent: can become any of three germ layers (ectoderm, mesoderm, endoderm).",
                evidence: "pluripotent",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Multipotent: limited to related cell types (e.g., blood stem cells).",
                evidence: "multipotent",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Embryonic stem cells are pluripotent; adult stem cells are multipotent.",
                evidence: "examples",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Pluripotent = any germ layer; multipotent = limited range.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "bio9-u6-stem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how hematopoietic stem cells are used medically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hematopoietic stem cells",
                statement: "Multipotent cells forming all blood types.",
              },
            ],
            steps: [
              {
                reasoning: "Found in bone marrow.",
                evidence: "marrow",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Can differentiate into RBCs, WBCs, platelets.",
                evidence: "blood types",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Used in bone marrow transplants to treat leukemia/lymphoma.",
                evidence: "transplant",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Donor cells repopulate patient's blood system.",
                evidence: "repopulate",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Bone marrow transplant: donor stem cells repopulate blood system.",
            commonErrors: ["Saying they can become any cell type."],
          },
        },
        {
          id: "bio9-u6-stem-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the potential and limitations of stem cell therapy.",
          parts: [
            {
              label: "a",
              prompt: "What diseases could stem cells treat?",
              marks: 2,
            },
            { label: "b", prompt: "What is the main advantage?", marks: 2 },
            { label: "c", prompt: "What are key challenges?", marks: 2 },
            { label: "d", prompt: "What ethical concerns exist?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Stem cell therapy",
                statement:
                  "Potential for regeneration but technical/ethical challenges.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Parkinson's, diabetes, spinal cord injury, heart disease, leukemia.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Can replace damaged cells; potentially cure diseases.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Controlling differentiation, immune rejection, tumor formation.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Embryonic stem cell source; destruction of embryos debate.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Neurodegenerative, diabetes, injury (b) Regeneration (c) Differentiation control, rejection, tumors (d) Embryo ethics.",
            commonErrors: ["Ignoring limitations."],
          },
        },
      ],
    },
    {
      id: "bio9-u6-cell-cycle",
      title: "Cell Cycle and Division Overview",
      skill:
        "Describe the cell cycle phases and introduce mitosis and meiosis.",
      lesson: {
        sections: [
          {
            heading: "Cell cycle phases",
            body: "The **cell cycle** has two main phases:\n\n- **Interphase** (~90% of cycle): G1 (growth), S (DNA synthesis/replication), G2 (preparation for division).\n- **Mitotic phase (M)**: mitosis (nuclear division) + cytokinesis (cytoplasmic division).",
          },
          {
            heading: "Mitosis vs meiosis",
            body: "- **Mitosis**: one division → 2 identical diploid daughter cells; for growth and repair.\n- **Meiosis**: two divisions → 4 different haploid gametes; for reproduction; involves crossing over.",
          },
        ],
        keyFormulas: [
          {
            name: "Cell cycle",
            statement: "Interphase (G1, S, G2) → M phase.",
          },
          {
            name: "Mitosis",
            statement: "One division → 2 identical diploid cells.",
          },
          {
            name: "Meiosis",
            statement: "Two divisions → 4 varied haploid gametes.",
          },
        ],
        workedExample: {
          problem:
            "A cell has 46 chromosomes. How many do daughter cells have after mitosis?",
          solution: "46 — mitosis produces identical diploid cells.",
        },
      },
      questions: [
        {
          id: "bio9-u6-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During which phase is DNA replicated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "G1" },
              { id: "b", text: "S phase" },
              { id: "c", text: "G2" },
              { id: "d", text: "M phase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "S phase",
                statement: "DNA synthesis/replication occurs in S phase.",
              },
            ],
            steps: [
              {
                reasoning:
                  "S = synthesis; DNA is replicated during S phase of interphase.",
                evidence: "S phase",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** S phase.",
            commonErrors: ["Choosing (a): G1 is growth before replication."],
          },
        },
        {
          id: "bio9-u6-cycle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between mitosis and meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis vs meiosis",
                statement: "Identical diploid vs varied haploid.",
              },
            ],
            steps: [
              {
                reasoning: "Mitosis: 1 division → 2 identical diploid cells.",
                evidence: "mitosis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Meiosis: 2 divisions → 4 different haploid gametes.",
                evidence: "meiosis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mitosis for growth/repair; meiosis for reproduction.",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Mitosis = identical diploid; meiosis = varied haploid.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "bio9-u6-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What happens during each phase of interphase?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Interphase",
                statement: "G1 growth, S replication, G2 preparation.",
              },
            ],
            steps: [
              {
                reasoning: "G1: cell grows, normal metabolism.",
                evidence: "G1",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "S: DNA replicated → each chromosome has two sister chromatids.",
                evidence: "S",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "G2: cell grows more, prepares for mitosis.",
                evidence: "G2",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Interphase is ~90% of cell cycle — most time is preparation.",
                evidence: "90%",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "G1 growth → S replication → G2 preparation.",
            commonErrors: ["Saying interphase is 'resting'."],
          },
        },
        {
          id: "bio9-u6-cycle-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A skin cell divides to replace damaged tissue.",
          parts: [
            { label: "a", prompt: "Which type of division?", marks: 2 },
            { label: "b", prompt: "How many daughter cells?", marks: 1 },
            {
              label: "c",
              prompt: "What is their chromosome number?",
              marks: 2,
            },
            { label: "d", prompt: "Why is this type appropriate?", marks: 2 },
            {
              label: "e",
              prompt: "What would happen if meiosis occurred instead?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitosis for repair",
                statement:
                  "Mitosis produces identical cells for tissue maintenance.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Mitosis.", marks: 2, markCode: "AO1" },
              {
                part: "b",
                reasoning: "2 daughter cells.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Same as parent (diploid, 46 chromosomes in humans).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Replacement tissue must be identical to original — same function.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning:
                  "Gametes would form — wrong cell type, nonfunctional tissue.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Mitosis (b) 2 (c) Diploid 46 (d) Identical replacement (e) Gametes — wrong.",
            commonErrors: ["Choosing meiosis."],
          },
        },
      ],
    },
  ],
};

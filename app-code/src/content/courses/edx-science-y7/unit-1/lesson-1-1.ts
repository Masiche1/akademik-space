import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "esc7-u1-lesson-1-1",
  code: "1-1",
  title: "Cells and Microscopy",
  goal: "I CAN describe cell structure and explain how cells carry out life processes.",
  standards: ["Edexcel KS3 Science — Biology"],
  vocabulary: [
    {
      term: "Cell",
      definition:
        "The basic structural and functional unit of all living organisms.",
    },
    {
      term: "Nucleus",
      definition: "The control centre of the cell containing genetic material.",
    },
    {
      term: "Cytoplasm",
      definition: "The jelly-like substance where chemical reactions occur.",
    },
    {
      term: "Cell membrane",
      definition:
        "The thin boundary controlling what enters and leaves the cell.",
    },
  ],
  concepts: [
    {
      id: "esc7-u1-cell",
      title: "Cell Structure and Function",
      skill: "Identify cell parts and explain their roles in life processes.",
      lesson: {
        sections: [
          {
            heading: "Basic cell structure",
            body: "All cells share common features: **cell membrane** (controls entry/exit), **cytoplasm** (where reactions happen), **nucleus** (contains DNA, controls activities). Plant cells additionally have a **cell wall** (rigidity), **chloroplasts** (photosynthesis), and a large **vacuole** (storage).\n\n**Specialised cells**: red blood cells (carry oxygen, no nucleus), nerve cells (long fibres for signals), muscle cells (contract for movement), root hair cells (large surface area for absorption). Specialisation lets cells perform specific jobs efficiently.",
          },
          {
            heading: "Unicellular vs multicellular",
            body: "**Unicellular** organisms (bacteria, amoeba) are single cells doing all life processes themselves. **Multicellular** organisms (plants, animals, fungi) have cells specialised for different jobs, organised into tissues → organs → systems.\n\n**Levels of organisation**: cell → tissue (similar cells, e.g. muscle tissue) → organ (e.g. heart) → system (e.g. circulatory) → organism. Each level builds on the one below.",
          },
        ],
        keyFormulas: [
          {
            name: "Cell parts",
            statement:
              "Membrane=boundary, cytoplasm=reactions, nucleus=control, wall=rigidity (plants).",
          },
          {
            name: "Organisation levels",
            statement: "Cell → tissue → organ → system → organism.",
          },
        ],
        workedExample: {
          problem:
            "Why do plant cells have a cell wall but animal cells don't?",
          solution:
            "Cell wall provides rigidity and support — plants need structure without a skeleton; animals have skeletons instead.",
        },
      },
      questions: [
        {
          id: "esc7-u1-cell-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the function of the nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stores water" },
              {
                id: "b",
                text: "Contains genetic material and controls cell activities",
              },
              { id: "c", text: "Site of photosynthesis" },
              { id: "d", text: "Controls entry and exit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleus",
                statement: "Contains DNA; controls cell activities.",
              },
            ],
            steps: [
              {
                reasoning: "Nucleus = control centre with genetic material.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Contains genetic material, controls activities",
            commonErrors: ["Confusing with membrane."],
          },
        },
        {
          id: "esc7-u1-cell-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two structures found in plant cells but not animal cells, and state their functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plant cell structures",
                statement:
                  "Cell wall=rigidity; chloroplasts=photosynthesis; vacuole=storage.",
              },
            ],
            steps: [
              { reasoning: "Two structures named.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Functions correctly stated.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both plant-only structures identified.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "e.g. cell wall (rigidity/support) and chloroplasts (photosynthesis); also large vacuole (storage).",
            commonErrors: ["Naming animal structures.", "Missing functions."],
          },
        },
        {
          id: "esc7-u1-cell-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how cell specialisation benefits multicellular organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cell specialisation",
                statement:
                  "Specialised cells perform specific jobs more efficiently than generalist cells.",
              },
            ],
            steps: [
              {
                reasoning: "Each cell type optimised for its job.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Efficiency: no wasted structure/function.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Enables complex life processes.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Specialisation lets each cell type excel at its job — red blood cells carry oxygen, nerve cells transmit signals — enabling complex organisms.",
            commonErrors: ["Vague 'it's better'.", "No examples."],
          },
        },
        {
          id: "esc7-u1-cell-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A muscle cell and a red blood cell have very different structures.",
          parts: [
            {
              label: "a",
              prompt: "Explain why muscle cells contain many mitochondria.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why red blood cells lack a nucleus.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Relate both adaptations to their functions.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure-function relationship",
                statement:
                  "Cell structures are adapted to their specific jobs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Mitochondria release energy for contraction.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Contraction needs lots of energy.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) No nucleus = more space for haemoglobin.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) More haemoglobin = more oxygen carried.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Both adaptations match functions.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) mitochondria→energy for contraction (b) no nucleus→more haemoglobin→more oxygen (c) structure matches function",
            commonErrors: ["No function link.", "Missing mitochondria role."],
          },
        },
      ],
    },
    {
      id: "esc7-u1-classification",
      title: "Classification of Organisms",
      skill:
        "Classify organisms using observable features and understand taxonomic hierarchy.",
      lesson: {
        sections: [
          {
            heading: "Classification systems",
            body: "Organisms are classified into **kingdoms** (animals, plants, fungi, protists, bacteria) based on fundamental characteristics. Within kingdoms, further groups: **phylum → class → order → family → genus → species**.\n\n**Species** is the most specific level — organisms that can interbreed and produce fertile offspring. Scientific names use binomial nomenclature: genus + species (e.g. *Homo sapiens*), always italicised.",
          },
          {
            heading: "Classification keys",
            body: "**Dichotomous keys** classify organisms through paired statements: 'Has wings / Does not have wings' → follow the path. Keys use observable features: body covering, number of legs, habitat.\n\n**Why classify?** Naming hundreds of species requires order; classification reveals evolutionary relationships; helps scientists communicate unambiguously; aids conservation (identifying endangered species).",
          },
        ],
        keyFormulas: [
          {
            name: "Taxonomic hierarchy",
            statement:
              "Kingdom → phylum → class → order → family → genus → species.",
          },
          {
            name: "Binomial nomenclature",
            statement: "Genus + species, italicised (Homo sapiens).",
          },
        ],
        workedExample: {
          problem:
            "A key: 1a Has feathers → bird; 1b No feathers → 2. 2a Has fur → mammal; 2b Has scales → reptile. Classify a sparrow.",
          solution: "Sparrow has feathers → bird.",
        },
      },
      questions: [
        {
          id: "esc7-u1-classification-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the most specific level of classification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genus" },
              { id: "b", text: "Kingdom" },
              { id: "c", text: "Species" },
              { id: "d", text: "Family" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Species",
                statement: "Most specific classification level.",
              },
            ],
            steps: [
              {
                reasoning: "Species = most specific level.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Species",
            commonErrors: ["Confusing with genus."],
          },
        },
        {
          id: "esc7-u1-classification-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is a dichotomous key used to identify organisms?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dichotomous key",
                statement:
                  "Paired statements guide identification through observable features.",
              },
            ],
            steps: [
              {
                reasoning: "Start at first couplet.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Choose matching statement, follow to next.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Continue until identification reached.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Follow paired statements based on observable features until the organism is identified.",
            commonErrors: ["Guessing view.", "No process described."],
          },
        },
        {
          id: "esc7-u1-classification-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is binomial nomenclature important for scientists?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Binomial nomenclature",
                statement:
                  "Universal scientific naming prevents confusion across languages.",
              },
            ],
            steps: [
              {
                reasoning: "Universal — same name worldwide.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids confusion from common names.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows evolutionary relationships via genus.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Binomial names are universal — avoiding confusion from common names that vary by region/language.",
            commonErrors: [
              "Only 'it's scientific'.",
              "No reason for universality.",
            ],
          },
        },
        {
          id: "esc7-u1-classification-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Use this key: 1a Has six legs → insect; 1b Has eight legs → arachnid. 2a Body in three parts → insect; 2b Body in two parts → arachnid.",
          parts: [
            {
              label: "a",
              prompt: "Classify an ant (6 legs, 3 body parts).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Classify a spider (8 legs, 2 body parts).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why keys use observable features.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Key use",
                statement: "Match observable features through the key's path.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 legs → insect path; 3 parts → insect.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Ant correctly classified.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) 8 legs → arachnid path; 2 parts → arachnid.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Spider correctly classified.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Observable features are verifiable/repeatable.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) insect (b) arachnid (c) features are verifiable and don't require dissection",
            commonErrors: ["Wrong key path.", "No reason for observability."],
          },
        },
      ],
    },
  ],
};

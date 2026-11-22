import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "esc10-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Structure and Organisation",
  goal: "I CAN describe cell structure and relate structure to function in specialised cells.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Biology"],
  vocabulary: [
    {
      term: "Eukaryotic cell",
      definition:
        "Cell with membrane-bound nucleus and organelles — plants, animals, fungi.",
    },
    {
      term: "Prokaryotic cell",
      definition: "Cell without a nucleus — bacteria; DNA loose in cytoplasm.",
    },
    {
      term: "Organelle",
      definition:
        "Specialised structure inside a cell performing a specific function.",
    },
    {
      term: "Differentiation",
      definition:
        "Process where unspecialised cells become specialised for a job.",
    },
  ],
  concepts: [
    {
      id: "esc10-u1-cell-structure",
      title: "Cell Structure and Specialisation",
      skill:
        "Relate cell structures to their functions in plant, animal and bacterial cells.",
      lesson: {
        sections: [
          {
            heading: "Cell structures",
            body: "**Nucleus**: contains DNA, controls activities. **Cytoplasm**: site of chemical reactions. **Cell membrane**: controls what enters/leaves (selectively permeable). **Mitochondria**: release energy (respiration) — many in active cells. **Ribosomes**: protein synthesis. **Cell wall + chloroplasts + permanent vacuole**: plant-only — support, photosynthesis, storage. **Flagellum/cilia**: movement.\n\n**Bacterial cells**: no nucleus — DNA in nucleoid; cell wall; some have plasmids (extra DNA) and flagella. Much smaller and simpler than eukaryotic cells.",
          },
          {
            heading: "Specialisation",
            body: "Multicellular organisms have **differentiated** cells: red blood cells (no nucleus, biconcave — maximise oxygen carriage), nerve cells (long axons — transmit impulses), root hair cells (microvilli — huge surface area for absorption), sperm/egg (gametes).\n\nSpecialisation trades versatility for efficiency: each cell type is optimised for one job. Levels of organisation: cell → tissue → organ → system → organism.",
          },
        ],
        keyFormulas: [
          {
            name: "Key organelles",
            statement:
              "Nucleus=control, mitochondria=energy, ribosomes=protein, membrane=boundary.",
          },
          {
            name: "Specialisation",
            statement:
              "Structure adapted to function — efficiency over versatility.",
          },
        ],
        workedExample: {
          problem: "Why do muscle cells contain many mitochondria?",
          solution:
            "Muscle contraction needs lots of ATP energy — mitochondria release energy via respiration.",
        },
      },
      questions: [
        {
          id: "esc10-u1-cell-structure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which structure is found in plant cells but NOT animal cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell membrane" },
              { id: "b", text: "Mitochondria" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Cell wall" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plant vs animal cells",
                statement:
                  "Plant cells have cell wall, chloroplasts, permanent vacuole.",
              },
            ],
            steps: [
              {
                reasoning: "Cell wall is plant-only.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Cell wall",
            commonErrors: ["Choosing mitochondria — both have them."],
          },
        },
        {
          id: "esc10-u1-cell-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why bacterial cells are described as prokaryotic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prokaryotic",
                statement: "No membrane-bound nucleus; DNA in nucleoid region.",
              },
            ],
            steps: [
              { reasoning: "No nucleus present.", marks: 1, markCode: "AO1" },
              {
                reasoning: "DNA loose in cytoplasm/nucleoid.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Contrast with eukaryotic (nucleus).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Prokaryotic = no membrane-bound nucleus; bacterial DNA floats in nucleoid.",
            commonErrors: [
              "No nucleus mention missing.",
              "Confusing with virus.",
            ],
          },
        },
        {
          id: "esc10-u1-cell-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how red blood cell structure relates to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure-function",
                statement: "Cell adaptations optimised for specific jobs.",
              },
            ],
            steps: [
              {
                reasoning: "No nucleus → more room for haemoglobin.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Biconcave shape → larger surface area.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Flexible disc shape → squeeze through capillaries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Links to oxygen transport function.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "No nucleus + biconcave + flexible = maximum oxygen carriage and capillary passage.",
            commonErrors: ["Structure listed without function link."],
          },
        },
        {
          id: "esc10-u1-cell-structure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student claims: 'All cells need a nucleus to survive.'",
          parts: [
            {
              label: "a",
              prompt: "Evaluate this claim with two counter-examples.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain the role of the nucleus in eukaryotic cells.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nucleus necessity",
                statement:
                  "Bacteria lack nuclei; mammalian RBCs eject theirs — yet survive.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Bacteria have no nucleus but live.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Red blood cells lack nucleus.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Nucleus holds DNA/genetic material.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Controls cell activities/protein synthesis.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning:
                  "(b) Most eukaryotic cells need it for reproduction/growth.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Specialised cells exceptions exist.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) bacteria + RBCs lack nuclei (b) nucleus=DNA+control; exceptions exist",
            commonErrors: ["Absolute claim accepted.", "No counter-examples."],
          },
        },
      ],
    },
    {
      id: "esc10-u1-microscopy",
      title: "Microscopy and Magnification",
      skill:
        "Use a light microscope and calculate magnification from image and actual size.",
      lesson: {
        sections: [
          {
            heading: "Light microscopy",
            body: "Light microscopes magnify up to ~×1500 using lenses and visible light. **Preparing slides**: place specimen on slide, add stain (makes structures visible), lower coverslip avoiding bubbles. **Focusing**: coarse then fine adjustment; start low power, move to high power rotating nosepiece.\n\n**Limitations**: can't resolve objects smaller than ~200 nm — viruses, ribosomes and many organelles invisible. Electron microscopes (TEM/SEM) use electron beams → much higher resolution but require vacuum and can't view living cells directly.",
          },
          {
            heading: "Magnification calculations",
            body: "**Magnification = image size ÷ actual size**. Always convert to same units first: mm → μm (×1000) or μm → mm (÷1000). Image size and actual size must share units.\n\nExample: image 50 mm, actual 0.05 mm → magnification = 50 ÷ 0.05 = ×1000. Reverse: actual size = image size ÷ magnification. Exam questions typically give two values and ask for the third — watch unit consistency.",
          },
        ],
        keyFormulas: [
          {
            name: "Magnification",
            statement: "magnification = image size ÷ actual size (same units).",
          },
          {
            name: "Resolution limit",
            statement:
              "Light microscope ~200 nm; electron microscopes far higher.",
          },
        ],
        workedExample: {
          problem:
            "A cell image is 80 mm wide; actual cell is 0.04 mm. Calculate magnification.",
          solution: "80 ÷ 0.04 = ×2000.",
        },
      },
      questions: [
        {
          id: "esc10-u1-microscopy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the formula for magnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "image size × actual size" },
              { id: "b", text: "image size + actual size" },
              { id: "c", text: "image size ÷ actual size" },
              { id: "d", text: "actual size ÷ image size" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification",
                statement: "image size ÷ actual size.",
              },
            ],
            steps: [
              {
                reasoning: "Magnification = image ÷ actual.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** image size ÷ actual size",
            commonErrors: ["Inverted formula."],
          },
        },
        {
          id: "esc10-u1-microscopy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An image is 60 mm and the specimen is 0.02 mm. Calculate magnification.",
          response: {
            type: "numeric",
            parts: [{ label: "Magnification", answer: 3000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification",
                statement: "image ÷ actual with same units.",
              },
            ],
            steps: [
              {
                reasoning: "Both in mm — no conversion needed.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "60 ÷ 0.02 = 3000.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "×3000",
            commonErrors: ["Unit mismatch not handled.", "Wrong division."],
          },
        },
        {
          id: "esc10-u1-microscopy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't a light microscope be used to view viruses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resolution",
                statement:
                  "Light microscopes can't resolve below ~200 nm; viruses are smaller.",
              },
            ],
            steps: [
              {
                reasoning: "Resolution limit ~200 nm.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Viruses smaller than limit.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Electron microscopes needed instead.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Viruses are below the ~200 nm resolution limit of light microscopy — electron microscopes required.",
            commonErrors: ["Magnification vs resolution confused."],
          },
        },
        {
          id: "esc10-u1-microscopy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A pollen grain measures 0.1 mm. Under a microscope its image is 45 mm.",
          parts: [
            { label: "a", prompt: "Calculate the magnification.", marks: 3 },
            {
              label: "b",
              prompt:
                "The same microscope images a cell at ×600. If the image is 30 mm, find the actual cell size.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification",
                statement: "mag = image ÷ actual; actual = image ÷ mag.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 45 ÷ 0.1 = ×450.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct units used.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) actual = image ÷ magnification = 30 ÷ 600.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) = 0.05 mm.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(b) Convert to μm: ×1000 = 50 μm.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Unit conversion correct.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "(a) ×450 (b) 0.05 mm = 50 μm",
            commonErrors: ["mm/μm conversion missed.", "Formula inverted."],
          },
        },
      ],
    },
  ],
};

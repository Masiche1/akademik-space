import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cial-b-u1-lesson-1-3",
  code: "1-3",
  title: "Cell differentiation and organisation",
  goal: "I CAN explain how cells differentiate and how tissues, organs and systems are organised.",
  standards: ["9700 Unit 2: cells as the basis of life"],
  vocabulary: [
    {
      term: "Differentiation",
      definition:
        "Process by which unspecialised cells develop into specialised types.",
    },
    {
      term: "Stem cell",
      definition:
        "Unspecialised cell capable of dividing and differentiating into specialised cells.",
    },
    {
      term: "Tissue",
      definition: "Group of similar specialised cells performing a function.",
    },
    {
      term: "Organ",
      definition:
        "Structure of different tissues working together, e.g. heart, leaf.",
    },
    {
      term: "Organ system",
      definition: "Group of organs working together, e.g. digestive system.",
    },
    {
      term: "Totipotent",
      definition: "Cell able to differentiate into any cell type.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u1-differentiation",
      title: "Cell differentiation",
      skill: "Explain how cells specialise and why it matters.",
      lesson: {
        sections: [
          {
            heading: "From zygote to specialised cells",
            body: "A fertilised egg (zygote) is totipotent — it can become any cell. As it divides, cells differentiate: same DNA, different genes expressed. By adulthood, most cells are specialised and cannot revert (except stem cells).",
          },
          {
            heading: "Specialisation trade-offs",
            body: "Specialised cells lose general abilities: red blood cells lose nucleus and organelles to maximise haemoglobin; sperm cells have flagella and many mitochondria; xylem vessels lose cytoplasm to form hollow tubes. Specialisation trades flexibility for efficiency.",
          },
          {
            heading: "Stem cells",
            body: "Stem cells remain unspecialised and can divide into specialised cells. Embryonic stem cells are totipotent/pluripotent; adult stem cells (e.g. in bone marrow) are multipotent — limited range. Medical uses: treating leukaemia, repairing tissue.",
          },
        ],
        keyFormulas: [
          {
            name: "Differentiation",
            statement:
              "Same DNA+different gene expression=specialised cell types.",
          },
        ],
        workedExample: {
          problem: "Why do red blood cells lack a nucleus?",
          solution:
            "Removing the nucleus frees space for more haemoglobin — specialised for oxygen transport at cost of repair ability.",
        },
      },
      questions: [
        {
          id: "cial-b-u1-df-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cell differentiation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cells changing their DNA" },
              { id: "b", text: "Cells dying" },
              {
                id: "c",
                text: "Unspecialised cells developing specialised structures and functions",
              },
              { id: "d", text: "Cells dividing into two" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Differentiation",
                statement:
                  "Unspecialised→specialised via differential gene expression; DNA unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiation = specialisation, not DNA change.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Specialisation of unspecialised cells",
            commonErrors: ["Thinking DNA changes — it doesn't."],
          },
        },
        {
          id: "cial-b-u1-df-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of specialised cells and their adaptations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specialisation",
                statement: "Cell structure adapted to function.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two: RBC (no nucleus, haemoglobin), sperm (flagellum, mitochondria), xylem (hollow), nerve (long axon).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adaptation correctly linked to function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. RBC=no nucleus for haemoglobin; sperm=flagellum for swimming.",
            commonErrors: ["Naming cells without adaptations."],
          },
        },
        {
          id: "cial-b-u1-df-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why specialised cells cannot usually revert to unspecialised stem cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Differentiation irreversibility",
                statement:
                  "Gene expression is fixed; totipotency lost after differentiation.",
              },
            ],
            steps: [
              {
                reasoning: "DNA identical but only some genes expressed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expression pattern becomes locked in.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Some genes (e.g. for division) silenced.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gene expression patterns become fixed; totipotency is lost.",
            commonErrors: ["Saying DNA is lost or changed."],
          },
        },
        {
          id: "cial-b-u1-df-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cell differentiation.",
          parts: [
            { label: "a", prompt: "Define differentiation.", marks: 1 },
            {
              label: "b",
              prompt: "Two examples of specialised cells?",
              marks: 2,
            },
            { label: "c", prompt: "Why can't cells revert?", marks: 3 },
            {
              label: "d",
              prompt: "What is a stem cell? Give one use.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Differentiation",
                statement: "Specialisation+irreversibility+stem cells.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Unspecialised→specialised, same DNA.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Any two cells named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Adaptations linked.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Gene expression fixed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Totipotency lost.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Unspecialised, can differentiate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "One valid use (e.g. leukaemia).",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) specialisation (b) two cells (c) fixed expression (d) stem cell+use",
          },
        },
        {
          id: "cial-b-u1-df-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stem cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A dead cell" },
              { id: "b", text: "An unspecialised cell that can differentiate" },
              { id: "c", text: "A fully specialised cell" },
              { id: "d", text: "A cell with extra chromosomes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stem cell",
                statement:
                  "Unspecialised cell capable of dividing and differentiating.",
              },
            ],
            steps: [
              {
                reasoning: "Stem cells are unspecialised and can differentiate.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Unspecialised cell that can differentiate",
            commonErrors: ["Thinking stem cells are already specialised."],
          },
        },
        {
          id: "cial-b-u1-df-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell is totipotent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red blood cell" },
              { id: "b", text: "Sperm cell" },
              { id: "c", text: "Xylem vessel" },
              { id: "d", text: "Zygote" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Totipotent",
                statement: "Cell able to differentiate into any cell type.",
              },
            ],
            steps: [
              {
                reasoning: "The zygote can become any cell type.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Zygote",
            commonErrors: ["Choosing an adult specialised cell."],
          },
        },
        {
          id: "cial-b-u1-df-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do mature red blood cells lack a nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make more proteins" },
              { id: "b", text: "To divide faster" },
              { id: "c", text: "To maximise space for haemoglobin" },
              { id: "d", text: "To store more DNA" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RBC specialisation",
                statement:
                  "Losing the nucleus frees space for more haemoglobin.",
              },
            ],
            steps: [
              {
                reasoning: "No nucleus = more room for haemoglobin.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** To maximise space for haemoglobin",
            commonErrors: ["Saying it is a defect — it is an adaptation."],
          },
        },
        {
          id: "cial-b-u1-df-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between totipotent and multipotent stem cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Stem cell potency",
                statement:
                  "Totipotent = any cell type; multipotent = limited range of related types.",
              },
            ],
            steps: [
              {
                reasoning: "Totipotent cells can become any cell type (e.g. zygote).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multipotent cells limited to related types (e.g. bone marrow).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Totipotent=any type; multipotent=limited range.",
            commonErrors: ["Treating all stem cells as identical."],
          },
        },
        {
          id: "cial-b-u1-df-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tissue sample contains 400 specialised cells and 100 stem cells. Calculate the percentage of cells that are stem cells.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) $\\times$ 100.",
              },
            ],
            steps: [
              {
                reasoning: "Total $= 400 + 100 = 500$; fraction $= 100 / 500 = 0.2$.",
                working: "100 \\div 500 = 0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage $= 0.2 \\times 100 = 20$.",
                working: "0.2 \\times 100 = 20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20%",
            commonErrors: ["Dividing by 400 instead of 500."],
          },
        },
        {
          id: "cial-b-u1-df-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the trade-off involved in cell specialisation, using red blood cells as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specialisation trade-off",
                statement:
                  "Losing general structures increases efficiency for one function but loses flexibility.",
              },
            ],
            steps: [
              {
                reasoning: "RBC loses nucleus and most organelles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gain: more haemoglobin, better O$_2$ transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loss: cannot repair itself or divide.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Trade-off clearly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "RBCs sacrifice repair/division ability for maximum oxygen transport.",
            commonErrors: ["Describing benefits without the cost."],
          },
        },
        {
          id: "cial-b-u1-df-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how stem cells are used in medicine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stem cell therapy",
                statement:
                  "Stem cells differentiate into needed cell types to replace damaged tissue.",
              },
            ],
            steps: [
              {
                reasoning: "Stem cells can be grown and directed to differentiate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use: replace damaged cells e.g. in leukaemia/burns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use: bone marrow transplants for blood diseases.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Examples and mechanism correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stem cells differentiate to replace damaged tissue, e.g. leukaemia treatment.",
            commonErrors: ["Saying stem cells cannot be controlled."],
          },
        },
        {
          id: "cial-b-u1-df-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A specialised cell is drawn 60 mm long and represents a cell of actual length 30 $\\mu$m. Calculate the magnification of the drawing.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000, unit: "x" }],
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
                reasoning: "Convert image size: $60 \\text{ mm} = 60\\,000 \\mu\\text{m}$.",
                working: "60000 \\mu\\text{m}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Magnification $= 60000 / 30 = 2000$.",
                working: "60000 \\div 30 = 2000",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct magnification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000×",
            commonErrors: ["Not converting mm to $\\mu$m."],
          },
        },
        {
          id: "cial-b-u1-df-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which specialised cell has a flagellum for swimming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red blood cell" },
              { id: "b", text: "Xylem vessel" },
              { id: "c", text: "Palisade mesophyll cell" },
              { id: "d", text: "Sperm cell" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sperm cell",
                statement: "Flagellum for swimming; many mitochondria for energy.",
              },
            ],
            steps: [
              {
                reasoning: "Sperm cells swim using a flagellum.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Sperm cell",
            commonErrors: ["Confusing with ciliated cells."],
          },
        },
        {
          id: "cial-b-u1-df-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A tissue sample contains 500 cells of which 50 are stem cells. Calculate the percentage of stem cells.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) $\\times$ 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction $= 50 / 500 = 0.1$.",
                working: "50 \\div 500 = 0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage $= 0.1 \\times 100 = 10$.",
                working: "0.1 \\times 100 = 10",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10%",
            commonErrors: ["Dividing by 450 instead of 500."],
          },
        },
        {
          id: "cial-b-u1-df-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about differentiated cells is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can always revert to stem cells" },
              { id: "b", text: "They have the same DNA but express different genes" },
              { id: "c", text: "They have different DNA from stem cells" },
              { id: "d", text: "They contain no DNA at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Differentiation",
                statement: "Same DNA; different genes expressed.",
              },
            ],
            steps: [
              {
                reasoning: "DNA identical; gene expression differs.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Same DNA, different genes expressed",
            commonErrors: ["Thinking DNA differs between cell types."],
          },
        },
        {
          id: "cial-b-u1-df-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cell differentiation.",
          parts: [
            {
              label: "a",
              prompt: "Define cell differentiation.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain why specialised cells have the same DNA.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe one adaptation of red blood cells.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why stem cells are medically useful.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Differentiation",
                statement:
                  "Specialisation; same DNA; adaptations; stem cell uses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Unspecialised→specialised cells.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "All cells descend from the same zygote.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Only different genes are switched on.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "No nucleus — more haemoglobin space.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Biconcave shape increases surface area.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Can differentiate into needed cell types.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Replace damaged cells/tissue.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Treat diseases e.g. leukaemia, burns.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear explanation of use.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) specialisation (b) same genome, diff expression (c) no nucleus (d) replace damaged tissue",
          },
        },
      ],
    },
    {
      id: "cial-b-u1-organisation",
      title: "Levels of organisation",
      skill: "Describe tissues, organs and systems and their relationships.",
      lesson: {
        sections: [
          {
            heading: "The hierarchy",
            body: "Cells → tissues → organs → organ systems → organism. A tissue is similar specialised cells (e.g. muscle tissue); an organ is tissues working together (heart = muscle+nerve+epithelium); a system is organs cooperating (circulatory = heart+vessels).",
          },
          {
            heading: "Surface area to volume",
            body: "As organisms grow, surface area:volume ratio falls — diffusion can't supply the interior. Multicellularity solves this: folded surfaces (villi, alveoli), transport systems (blood, xylem) and specialised organs maintain exchange.",
          },
          {
            heading: "Plant organisation",
            body: "Plants: cells→tissues (palisade mesophyll, xylem)→organs (leaf, root)→systems (shoot, root). Leaves optimise photosynthesis: broad flat shape, palisade layer near top, stomata for gas exchange.",
          },
        ],
        keyFormulas: [
          {
            name: "Organisation",
            statement:
              "Cells→tissues→organs→systems→organism; SA:V falls with size.",
          },
        ],
        workedExample: {
          problem: "Why do large animals need transport systems?",
          solution:
            "SA:V falls with size — diffusion alone can't reach all cells; blood transports nutrients and wastes.",
        },
      },
      questions: [
        {
          id: "cial-b-u1-ol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tissue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organ system" },
              {
                id: "b",
                text: "A group of similar specialised cells performing a function",
              },
              { id: "c", text: "A single cell" },
              { id: "d", text: "A whole organ" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tissue",
                statement:
                  "Similar specialised cells performing a shared function.",
              },
            ],
            steps: [
              {
                reasoning: "Tissue = cell group, not organ.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Group of similar specialised cells",
            commonErrors: ["Confusing tissue with organ."],
          },
        },
        {
          id: "cial-b-u1-ol-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Arrange in order: organ, cell, organ system, tissue, organism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hierarchy",
                statement: "Cell→tissue→organ→system→organism.",
              },
            ],
            steps: [
              { reasoning: "Correct sequence.", marks: 1, markCode: "M" },
              { reasoning: "All five levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell→tissue→organ→organ system→organism.",
            commonErrors: ["Swapping organ and tissue."],
          },
        },
        {
          id: "cial-b-u1-ol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the relationship between surface area:volume ratio and the need for transport systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SA:V",
                statement:
                  "Ratio falls as size increases; diffusion insufficient — transport needed.",
              },
            ],
            steps: [
              {
                reasoning: "SA:V decreases with size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Diffusion distance increases — slow supply.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transport systems overcome this.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Falling SA:V requires transport systems for supply.",
            commonErrors: ["Thinking SA:V increases with size."],
          },
        },
        {
          id: "cial-b-u1-ol-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Levels of organisation.",
          parts: [
            { label: "a", prompt: "Define tissue.", marks: 1 },
            { label: "b", prompt: "Order the hierarchy.", marks: 2 },
            { label: "c", prompt: "Explain SA:V and transport.", marks: 3 },
            {
              label: "d",
              prompt: "Name one plant organ and its tissues.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organisation",
                statement: "Tissue+hierarchy+SA:V+plant example.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Similar specialised cells, shared function.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Cell→tissue→organ→system→organism.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "SA:V falls with size.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Diffusion insufficient.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Transport needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Organ named (leaf/root/stem).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Two tissues identified.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) cell group (b) hierarchy (c) SA:V→transport (d) leaf+palisade/xylem",
          },
        },
        {
          id: "cial-b-u1-ol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an organ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sperm cell" },
              { id: "b", text: "Xylem tissue" },
              { id: "c", text: "Epithelial tissue" },
              { id: "d", text: "The heart" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organ",
                statement: "Different tissues working together, e.g. heart.",
              },
            ],
            steps: [
              {
                reasoning: "Organ = tissues cooperating; heart = muscle+nerve+epithelium.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** The heart",
            commonErrors: ["Choosing a tissue instead of an organ."],
          },
        },
        {
          id: "cial-b-u1-ol-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why specialised cells in multicellular organisms are organised into tissues and organs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organisation",
                statement: "Cells group into tissues; tissues into organs for division of labour.",
              },
            ],
            steps: [
              {
                reasoning: "Single specialised cells cannot perform complex functions alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Similar cells group into tissues sharing a function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tissues combine into organs/systems — division of labour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cells group into tissues; tissues into organs — division of labour increases efficiency.",
            commonErrors: ["Describing levels without explaining the benefit."],
          },
        },
        {
          id: "cial-b-u1-ol-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cube-shaped cell has a surface area of 150 $\\mu$m$^2$ and a volume of 125 $\\mu$m$^3$. Calculate its surface area:volume ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SA:V",
                statement: "Surface area:volume ratio = surface area $\\div$ volume.",
              },
            ],
            steps: [
              {
                reasoning: "$150 \\div 125 = 1.2$.",
                working: "150 \\div 125 = 1.2",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "SA:V ratio $= 1.2:1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.2:1",
            commonErrors: ["Dividing volume by surface area instead."],
          },
        },
        {
          id: "cial-b-u1-ol-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about an organ system is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a group of organs working together" },
              { id: "b", text: "It is a single specialised cell" },
              { id: "c", text: "It is made of one type of tissue only" },
              { id: "d", text: "It is the smallest level of organisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organ system",
                statement: "Group of organs working together, e.g. circulatory system.",
              },
            ],
            steps: [
              {
                reasoning: "Organ system = organs cooperating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** A group of organs working together",
            commonErrors: ["Confusing organ system with tissue or organ."],
          },
        },
        {
          id: "cial-b-u1-ol-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how structures such as villi and alveoli are adaptations to a falling surface area:volume ratio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SA:V adaptations",
                statement:
                  "Falling SA:V limits exchange; folded surfaces increase SA.",
              },
            ],
            steps: [
              {
                reasoning: "SA:V falls as organism/organ grows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Large surface area needed for diffusion/exchange.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Villi/alveoli fold surface to increase SA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thin walls + capillaries maintain short diffusion distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Folded surfaces increase SA and thin walls shorten diffusion distance to compensate for low SA:V.",
            commonErrors: ["Listing features without linking to SA:V."],
          },
        },
        {
          id: "cial-b-u1-ol-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cube has sides of length 1 cm. Calculate its surface area:volume ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: ":1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cube SA:V",
                statement: "Cube SA $= 6s^2$; V $= s^3$; ratio $= 6/s$.",
              },
            ],
            steps: [
              {
                reasoning: "SA $= 6 \\times 1^2 = 6$ cm$^2$; V $= 1$ cm$^3$.",
                working: "6 \\div 1 = 6",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "SA:V $= 6:1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6:1",
            commonErrors: ["Forgetting there are 6 faces of a cube."],
          },
        },
        {
          id: "cial-b-u1-ol-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of organisation in a plant leaf?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organ system $\\rightarrow$ organ $\\rightarrow$ tissue $\\rightarrow$ cell" },
              { id: "b", text: "Cell $\\rightarrow$ tissue $\\rightarrow$ organ $\\rightarrow$ organ system" },
              { id: "c", text: "Tissue $\\rightarrow$ cell $\\rightarrow$ organ $\\rightarrow$ system" },
              { id: "d", text: "Organ $\\rightarrow$ tissue $\\rightarrow$ cell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hierarchy",
                statement: "Cell→tissue→organ→organ system→organism.",
              },
            ],
            steps: [
              {
                reasoning: "Hierarchy starts at cell and builds upward.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Cell→tissue→organ→organ system",
            commonErrors: ["Putting tissue before cell."],
          },
        },
        {
          id: "cial-b-u1-ol-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three plant tissues and state the function of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plant tissues",
                statement:
                  "Palisade mesophyll/photosynthesis; xylem/water transport; epidermis/protection; phloem/translocation; spongy mesophyll/gas exchange.",
              },
            ],
            steps: [
              {
                reasoning: "Three valid plant tissues named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Functions correctly linked to tissues.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All three answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. palisade mesophyll→photosynthesis; xylem→water transport; epidermis→protection.",
            commonErrors: ["Naming animal tissues in a plant question."],
          },
        },
        {
          id: "cial-b-u1-ol-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do large multicellular organisms need transport systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because diffusion alone cannot supply all cells quickly enough" },
              { id: "b", text: "To reduce the total number of cells" },
              { id: "c", text: "To increase the surface area:volume ratio" },
              { id: "d", text: "To make cells differentiate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transport systems",
                statement: "Falling SA:V → diffusion insufficient → transport needed.",
              },
            ],
            steps: [
              {
                reasoning: "SA:V falls with size; diffusion can't reach interior cells.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Diffusion alone cannot supply all cells",
            commonErrors: ["Thinking transport increases SA:V."],
          },
        },
        {
          id: "cial-b-u1-ol-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cube has sides of length 1 cm and a surface area:volume ratio of 6:1. A second cube has sides of length 2 cm. Calculate its surface area:volume ratio.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: ":1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cube SA:V",
                statement: "Cube SA $= 6s^2$; V $= s^3$; ratio $= 6/s$.",
              },
            ],
            steps: [
              {
                reasoning: "SA $= 6 \\times 2^2 = 24$ cm$^2$; V $= 2^3 = 8$ cm$^3$.",
                working: "24 \\div 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio $= 24 \\div 8 = 3$.",
                working: "24 \\div 8 = 3",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "SA:V $= 3:1$ — ratio falls as size increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3:1",
            commonErrors: ["Doubling the ratio instead of halving it."],
          },
        },
        {
          id: "cial-b-u1-ol-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims: 'Surface area always increases as an organism grows, so transport systems are unnecessary.' Evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "SA:V fallacy",
                statement:
                  "SA increases but volume increases faster, so SA:V falls.",
              },
            ],
            steps: [
              {
                reasoning: "Surface area does increase with size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Volume increases faster — SA:V falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Diffusion alone cannot supply the interior quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Claim rejected — transport systems are needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SA rises but SA:V falls; diffusion insufficient — transport systems required.",
            commonErrors: ["Agreeing that increasing SA alone solves supply."],
          },
        },
        {
          id: "cial-b-u1-ol-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which leaf feature is an adaptation for gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomata" },
              { id: "b", text: "Xylem vessels" },
              { id: "c", text: "Palisade mesophyll" },
              { id: "d", text: "Root hairs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stomata",
                statement: "Pores allowing gas exchange (CO$_2$ in, O$_2$/water vapour out).",
              },
            ],
            steps: [
              {
                reasoning: "Stomata are pores for gas exchange.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Stomata",
            commonErrors: ["Choosing a photosynthetic tissue instead."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u1-organisation-notes",
      title: "Cell differentiation and organisation — revision notes",
      summary:
        "Specialisation, stem cells, tissue-organ-system hierarchy and SA:V.",
      sections: [
        {
          heading: "Differentiation",
          body: "Same DNA, different genes expressed. Specialised cells trade flexibility for efficiency (RBC no nucleus). Gene expression becomes fixed — can't revert. Stem cells remain unspecialised.",
        },
        {
          heading: "Organisation",
          body: "Cells→tissues→organs→systems→organism. SA:V falls with size — transport systems (blood, xylem) needed for large organisms.",
        },
        {
          heading: "Exam checklist",
          body: "Can you name organelles and functions? Explain fluid mosaic? Describe osmosis in hypotonic/hypertonic? Trace protein secretion?",
        },
      ],
    },
  ],
};

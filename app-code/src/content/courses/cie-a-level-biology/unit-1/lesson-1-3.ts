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
              {
                id: "a",
                text: "Unspecialised cells developing specialised structures and functions",
              },
              { id: "b", text: "Cells dividing into two" },
              { id: "c", text: "Cells dying" },
              { id: "d", text: "Cells changing their DNA" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Specialisation of unspecialised cells",
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
              {
                id: "a",
                text: "A group of similar specialised cells performing a function",
              },
              { id: "b", text: "A single cell" },
              { id: "c", text: "A whole organ" },
              { id: "d", text: "An organ system" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Group of similar specialised cells",
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

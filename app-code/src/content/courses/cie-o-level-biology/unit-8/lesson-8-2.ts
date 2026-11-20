import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "olbio-u8-lesson-8-2",
  code: "8-2",
  title: "Human Reproduction",
  goal: "I CAN describe the human reproductive systems, the menstrual cycle, fertilisation, and pregnancy.",
  standards: ["5090 8.3"],
  vocabulary: [
    { term: "Testis", definition: "Male gonad producing sperm and testosterone." },
    { term: "Ovary", definition: "Female gonad producing eggs (ova) and oestrogen/progesterone." },
    { term: "Sperm", definition: "Male gamete; has flagellum for swimming." },
    { term: "Egg (ovum)", definition: "Female gamete; large with yolk-like cytoplasm." },
    { term: "Fertilisation", definition: "Fusion of sperm nucleus with egg nucleus forming a zygote." },
    { term: "Menstrual cycle", definition: "~28-day cycle of changes in uterus preparing for pregnancy." },
    { term: "Placenta", definition: "Organ exchanging materials between mother and fetus." },
    { term: "Implantation", definition: "Embedding of the embryo in the uterus lining." },
  ],
  concepts: [
    {
      id: "olbio-u8-reproductive-systems",
      title: "Reproductive systems",
      skill: "Describe the male and female reproductive systems and gametes.",
      lesson: {
        sections: [
          {
            heading: "Male system",
            body: "- **Testes**: produce sperm + testosterone.\n- **Sperm ducts**: carry sperm.\n- **Penis**: delivers sperm during intercourse.\n- Sperm: small, flagellum, acrosome enzymes.",
          },
          {
            heading: "Female system",
            body: "- **Ovaries**: produce eggs + oestrogen/progesterone.\n- **Oviducts (Fallopian tubes)**: transport egg; fertilisation site.\n- **Uterus**: where embryo develops.\n- **Cervix + vagina**: birth canal.\n- Egg: large, contains nutrients for early development.",
          },
          {
            heading: "Gametes",
            body: "Sperm: millions produced, tiny, mobile. Egg: one per cycle (usually), large, immobile, contains yolk.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Where does fertilisation usually occur?",
          solution: "In the oviduct (Fallopian tube) — sperm meets egg there after ovulation.",
        },
      },
      questions: [
        {
          id: "olbio-u8-reproductive-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ produces sperm in males?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testis" },
              { id: "b", text: "Ovary" },
              { id: "c", text: "Uterus" },
              { id: "d", text: "Penis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Testis", statement: "Produces sperm + testosterone." },
            ],
            steps: [
              { reasoning: "Match organ to function.", working: "\\text{testis} \\to \\text{sperm}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Testis",
            commonErrors: ["Choosing penis — that's for delivery, not production."],
          },
        },
        {
          id: "olbio-u8-reproductive-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the uterus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Uterus", statement: "Where embryo/fetus develops; thick muscular wall." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{embryo develops}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The uterus is where the embryo/fetus develops during pregnancy; its muscular wall contracts during birth.",
            commonErrors: ["Saying 'produces eggs' — that's ovaries."],
          },
        },
        {
          id: "olbio-u8-reproductive-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the structural differences between sperm and egg that suit their functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete adaptations", statement: "Sperm: small, flagellum, enzymes. Egg: large, nutrients, immobile." },
            ],
            steps: [
              { reasoning: "Sperm adaptation: flagellum for swimming.", working: "\\text{flagellum}", marks: 1, markCode: "M" },
              { reasoning: "Sperm adaptation: acrosome enzymes to penetrate.", working: "\\text{acrosome}", marks: 1, markCode: "M" },
              { reasoning: "Egg adaptation: large cytoplasm for nutrients.", working: "\\text{large cytoplasm}", marks: 1, markCode: "M" },
              { reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sperm are small with a flagellum for swimming and acrosome enzymes to penetrate the egg; the egg is large with nutrient-rich cytoplasm to nourish early development.",
            commonErrors: ["Only describing one gamete."],
          },
        },
        {
          id: "olbio-u8-reproductive-systems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the female reproductive system and the role of each part.",
          parts: [
            { label: "a", prompt: "Name and state the function of the ovaries.", marks: 2 },
            { label: "b", prompt: "Name and state the function of the oviducts.", marks: 2 },
            { label: "c", prompt: "Name and state the function of the uterus.", marks: 2 },
            { label: "d", prompt: "State where fertilisation occurs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Female system", statement: "Ovaries: eggs+oestrogen. Oviducts: transport/fertilisation. Uterus: development. Fertilisation in oviduct." },
            ],
            steps: [
              { part: "a", reasoning: "Ovaries: produce eggs + hormones.", working: "\\text{eggs + oestrogen}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State function.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oviducts: transport egg to uterus.", working: "\\text{transport}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Site of fertilisation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Uterus: embryo development.", working: "\\text{development}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Muscular wall for birth.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fertilisation in oviduct/Fallopian tube.", working: "\\text{oviduct}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sperm meets egg there.", working: "\\text{sperm + egg}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State location.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ovaries: eggs + oestrogen (b) oviducts: transport/fertilisation (c) uterus: development (d) oviduct",
            commonErrors: ["In (d) saying uterus — fertilisation happens BEFORE implantation in uterus."],
          },
        },
      ],
    },
    {
      id: "olbio-u8-menstrual-pregnancy",
      title: "Menstrual cycle and pregnancy",
      skill: "Describe the menstrual cycle, fertilisation, implantation and the role of the placenta.",
      lesson: {
        sections: [
          {
            heading: "Menstrual cycle (~28 days)",
            body: "1. **Menstruation** (days 1–5): lining shed if no pregnancy.\n2. **Repair** (days 6–13): uterus lining rebuilds; FSH stimulates egg development.\n3. **Ovulation** (~day 14): LH surge releases egg from ovary.\n4. **Luteal phase** (days 15–28): progesterone maintains lining; if no fertilisation, cycle repeats.",
          },
          {
            heading: "Fertilisation to implantation",
            body: "Sperm + egg in oviduct → **zygote** → cell division → **embryo** → travels to uterus → **implantation** in lining → placenta forms.",
          },
          {
            heading: "Placenta",
            body: "Embedded in uterus wall; exchanges materials between mother and fetus: O₂ and nutrients → fetus; CO₂ and wastes → mother. Also produces hormones (progesterone) maintaining pregnancy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the role of the placenta?",
          solution: "It exchanges respiratory gases, nutrients and wastes between mother and fetus without mixing their blood.",
        },
      },
      questions: [
        {
          id: "olbio-u8-menstrual-pregnancy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ovulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Release of an egg from the ovary" },
              { id: "b", text: "Shedding of uterus lining" },
              { id: "c", text: "Fertilisation of egg" },
              { id: "d", text: "Formation of placenta" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovulation", statement: "Egg released from ovary (~day 14)." },
            ],
            steps: [
              { reasoning: "Recall the event.", working: "\\text{egg released}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Release of an egg from the ovary",
            commonErrors: ["Choosing menstruation — that's lining shedding."],
          },
        },
        {
          id: "olbio-u8-menstrual-pregnancy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the placenta.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Placenta", statement: "Exchanges gases/nutrients/wastes between mother and fetus." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{exchange materials}", marks: 1, markCode: "M" },
              { reasoning: "Complete: O₂/nutrients in, wastes out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The placenta exchanges oxygen and nutrients from mother to fetus, and carbon dioxide/wastes from fetus to mother.",
            commonErrors: ["Saying bloods mix — they don't; exchange happens across placenta."],
          },
        },
        {
          id: "olbio-u8-menstrual-pregnancy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens during the luteal phase of the menstrual cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Luteal phase", statement: "Corpus luteum secretes progesterone maintaining uterus lining." },
            ],
            steps: [
              { reasoning: "After ovulation, corpus luteum forms.", working: "\\text{corpus luteum}", marks: 1, markCode: "M" },
              { reasoning: "Progesterone maintains/thickens lining.", working: "\\text{progesterone}", marks: 1, markCode: "M" },
              { reasoning: "Prepares uterus for possible implantation.", working: "\\text{prepare for pregnancy}", marks: 1, markCode: "M" },
              { reasoning: "If no pregnancy, progesterone falls → menstruation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "After ovulation the corpus luteum secretes progesterone, maintaining and thickening the uterus lining to prepare for possible implantation; without pregnancy, progesterone falls and menstruation occurs.",
            commonErrors: ["Saying ovulation happens in luteal phase — ovulation marks its start."],
          },
        },
        {
          id: "olbio-u8-menstrual-pregnancy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the events from fertilisation to implantation.",
          parts: [
            { label: "a", prompt: "State where fertilisation occurs.", marks: 1 },
            { label: "b", prompt: "Describe the formation of the zygote and embryo.", marks: 3 },
            { label: "c", prompt: "Describe the journey to the uterus.", marks: 2 },
            { label: "d", prompt: "Explain what implantation is and why it is needed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation to implantation", statement: "Oviduct → zygote → embryo → uterus → implant in lining." },
            ],
            steps: [
              { part: "a", reasoning: "In oviduct.", working: "\\text{oviduct}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sperm + egg nuclei fuse → zygote.", working: "\\text{zygote}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zygote divides → ball of cells (morula/blastocyst).", working: "\\text{cell division}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Becomes embryo.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Travels down oviduct to uterus.", working: "\\text{down oviduct}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Takes several days.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Embryo embeds in uterus lining.", working: "\\text{embed in lining}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Needed for placenta formation/nourishment.", working: "\\text{placenta}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Secure attachment for development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) oviduct (b) nuclei fuse→zygote→divides→embryo (c) travels to uterus (d) embeds in lining for placenta/nourishment",
            commonErrors: ["In (b) saying 'baby forms immediately' — it's a zygote then embryo."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u8-human-reproduction-notes",
      title: "Human reproduction — revision notes",
      summary: "Reproductive systems, menstrual cycle, fertilisation and placenta.",
      sections: [
        {
          heading: "Systems",
          body: "Male: testes (sperm+testosterone). Female: ovaries (eggs+oestrogen), oviducts (fertilisation site), uterus (development). Sperm small/mobile; egg large/immobile.",
        },
        {
          heading: "Cycle and pregnancy",
          body: "Menstrual cycle ~28 days: menstruation → repair → ovulation (~day 14) → luteal (progesterone). Fertilisation in oviduct → zygote → embryo → implantation → placenta exchanges materials.",
        },
        {
          heading: "Exam technique",
          body: "- Fertilisation = oviduct, NOT uterus.\n- Placenta: exchange without blood mixing.\n- Menstrual cycle: menstruation → repair → ovulation → luteal (progesterone).",
        },
      ],
    },
  ],
};

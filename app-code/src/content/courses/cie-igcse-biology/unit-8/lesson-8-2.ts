import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cieb-u8-lesson-8-2",
  code: "8-2",
  title: "Human Reproduction",
  goal: "I CAN describe the human reproductive systems, the menstrual cycle, fertilisation, and pregnancy.",
  standards: ["0653 8.3"],
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
      id: "cieb-u8-reproductive-systems",
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
          id: "cieb-u8-reproductive-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ produces sperm in males?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penis" },
              { id: "b", text: "Ovary" },
              { id: "c", text: "Uterus" },
              { id: "d", text: "Testis" },
            ],
            correctChoiceId: "d",
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
          id: "cieb-u8-reproductive-systems-q2",
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
          id: "cieb-u8-reproductive-systems-q3",
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
          id: "cieb-u8-reproductive-systems-q4",
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
        {
          id: "cieb-u8-reproductive-systems-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone is produced by the testes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Progesterone" },
              { id: "b", text: "Oestrogen" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Testosterone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Testes", statement: "Produce sperm and testosterone." },
            ],
            steps: [
              { reasoning: "Recall the hormone made by testes.", working: "\\text{testosterone}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Testosterone",
            commonErrors: ["Choosing oestrogen/progesterone — those are ovarian hormones."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does fertilisation usually occur in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vagina" },
              { id: "b", text: "Uterus" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Oviduct (Fallopian tube)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation site", statement: "Occurs in the oviduct before implantation." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{oviduct}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oviduct (Fallopian tube)",
            commonErrors: ["Choosing uterus — implantation happens there, fertilisation happens earlier in the oviduct."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sperm structure enables the sperm to swim towards the egg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Acrosome" },
              { id: "c", text: "Flagellum" },
              { id: "d", text: "Cell membrane" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sperm adaptations", statement: "Flagellum for swimming; acrosome enzymes for penetration." },
            ],
            steps: [
              { reasoning: "Match structure to function.", working: "\\text{flagellum} \\to \\text{swimming}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Flagellum",
            commonErrors: ["Choosing acrosome — that contains enzymes to penetrate the egg, not to swim."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following cells is haploid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sperm cell" },
              { id: "b", text: "Zygote" },
              { id: "c", text: "Skin cell" },
              { id: "d", text: "Liver cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Haploid", statement: "Gametes have one set of chromosomes (n)." },
            ],
            steps: [
              { reasoning: "Identify the gamete.", working: "\\text{sperm} = \\text{haploid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sperm cell",
            commonErrors: ["Choosing zygote — fertilisation restores the diploid number."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many chromosomes are present in a human sperm cell?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete chromosome number", statement: "Human gametes are haploid: n = 23." },
            ],
            steps: [
              { reasoning: "Gametes have half the body cell number.", working: "46 \\div 2 = 23", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23 chromosomes",
            commonErrors: ["Answering 46 — that's the diploid body cell number."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many chromosomes are present in a human zygote immediately after fertilisation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 46, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zygote chromosome number", statement: "Fertilisation combines two haploid nuclei → diploid 2n = 46." },
            ],
            steps: [
              { reasoning: "Sperm (23) + egg (23) combine.", working: "23 + 23 = 46", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46 chromosomes",
            commonErrors: ["Answering 23 — the zygote is diploid."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A species has a diploid chromosome number of 2n = 8. How many chromosomes are in its gametes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Haploid number", statement: "Gametes carry half the diploid number: n = 2n ÷ 2." },
            ],
            steps: [
              { reasoning: "Halve the diploid number.", working: "8 \\div 2 = 4", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 chromosomes",
            commonErrors: ["Answering 8 — gametes are haploid, not diploid."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many pairs of homologous chromosomes are found in a human body cell?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "pairs" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Homologous pairs", statement: "46 chromosomes form 23 homologous pairs (one from each parent)." },
            ],
            steps: [
              { reasoning: "46 chromosomes form pairs.", working: "46 \\div 2 = 23", marks: 1, markCode: "M" },
              { reasoning: "State the number of pairs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23 pairs",
            commonErrors: ["Answering 46 — that is the number of individual chromosomes, not pairs."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of the ovaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovaries", statement: "Produce eggs and the hormones oestrogen and progesterone." },
            ],
            steps: [
              { reasoning: "Give two functions.", working: "\\text{eggs + hormones}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The ovaries produce eggs (ova) and the hormones oestrogen and progesterone.",
            commonErrors: ["Saying ovaries store eggs long-term — they release roughly one per cycle."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about the human egg (ovum) is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is tiny and swims using a flagellum" },
              { id: "b", text: "Millions are produced every day" },
              { id: "c", text: "It is large and contains nutrients for early development" },
              { id: "d", text: "It is produced in the uterus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Egg adaptations", statement: "Large, immobile, nutrient-rich cytoplasm." },
            ],
            steps: [
              { reasoning: "Recall egg structure.", working: "\\text{large + nutrients}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is large and contains nutrients for early development",
            commonErrors: ["Describing sperm features — flagellum and small size belong to sperm."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure delivers sperm into the female reproductive tract during intercourse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ovary" },
              { id: "b", text: "Sperm duct" },
              { id: "c", text: "Penis" },
              { id: "d", text: "Testis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Penis", statement: "Delivers sperm during intercourse." },
            ],
            steps: [
              { reasoning: "Match function to organ.", working: "\\text{penis} \\to \\text{delivery}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Penis",
            commonErrors: ["Choosing sperm duct — it transports sperm but does not deliver them into the female."],
          },
        },
        {
          id: "cieb-u8-reproductive-systems-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the male and female reproductive systems.",
          parts: [
            { label: "a", prompt: "Name two male reproductive organs and state their functions.", marks: 3 },
            { label: "b", prompt: "Name two female reproductive organs and state their functions.", marks: 3 },
            { label: "c", prompt: "Compare the gametes produced by each sex.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Reproductive systems", statement: "Male: testes (sperm+testosterone), penis (delivery). Female: ovaries (eggs+hormones), uterus (development). Sperm small/mobile; egg large/immobile." },
            ],
            steps: [
              { part: "a", reasoning: "Testes: produce sperm + testosterone.", working: "\\text{testes}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Penis: delivers sperm.", working: "\\text{penis}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State functions clearly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ovaries: produce eggs + oestrogen/progesterone.", working: "\\text{ovaries}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Uterus: embryo develops.", working: "\\text{uterus}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State functions clearly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sperm: small, flagellum, millions produced.", working: "\\text{sperm: small, mobile}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Egg: large, nutrient-rich, immobile.", working: "\\text{egg: large}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) testes: sperm+testosterone; penis: delivery (b) ovaries: eggs+hormones; uterus: development (c) sperm small/mobile vs egg large/immobile",
            commonErrors: ["In (c) describing only one gamete — compare BOTH."],
          },
        },
      ],
    },
    {
      id: "cieb-u8-menstrual-pregnancy",
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
          id: "cieb-u8-menstrual-pregnancy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ovulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formation of placenta" },
              { id: "b", text: "Fertilisation of egg" },
              { id: "c", text: "Release of an egg from the ovary" },
              { id: "d", text: "Shedding of uterus lining" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u8-menstrual-pregnancy-q2",
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
          id: "cieb-u8-menstrual-pregnancy-q3",
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
          id: "cieb-u8-menstrual-pregnancy-q4",
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
        {
          id: "cieb-u8-menstrual-pregnancy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During which part of the menstrual cycle is the uterus lining shed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repair" },
              { id: "b", text: "Ovulation" },
              { id: "c", text: "Luteal phase" },
              { id: "d", text: "Menstruation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Menstruation", statement: "Days 1–5: uterus lining shed if no pregnancy." },
            ],
            steps: [
              { reasoning: "Recall the phase.", working: "\\text{menstruation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Menstruation",
            commonErrors: ["Choosing repair — that is when the lining is rebuilt, not shed."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone surge triggers ovulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "FSH" },
              { id: "c", text: "LH" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "LH surge", statement: "LH surge (~day 14) releases the egg from the ovary." },
            ],
            steps: [
              { reasoning: "Match hormone to event.", working: "\\text{LH} \\to \\text{ovulation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** LH",
            commonErrors: ["Choosing FSH — FSH stimulates egg development earlier in the cycle."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is implantation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shedding of the uterus lining" },
              { id: "b", text: "The embryo embedding in the lining of the uterus" },
              { id: "c", text: "The fusion of sperm and egg nuclei" },
              { id: "d", text: "The release of an egg from the ovary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Implantation", statement: "Embryo embeds in the uterus lining." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{embed in uterus lining}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The embryo embedding in the lining of the uterus",
            commonErrors: ["Choosing fertilisation — that happens in the oviduct before implantation."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the approximate length of the human menstrual cycle in days.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 28, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Menstrual cycle length", statement: "Approximately 28 days." },
            ],
            steps: [
              { reasoning: "Recall the cycle length.", working: "\\approx 28 \\text{ days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28 days",
            commonErrors: ["Answering 14 — that's roughly the day of ovulation, not the cycle length."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "On approximately which day of a 28-day menstrual cycle does ovulation occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 14, unit: "day" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovulation timing", statement: "Ovulation occurs around day 14 of a 28-day cycle." },
            ],
            steps: [
              { reasoning: "Recall the timing.", working: "\\approx \\text{day } 14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Day 14",
            commonErrors: ["Answering day 1 — that's when menstruation starts."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "For approximately how many days does menstruation typically last?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Menstruation duration", statement: "Lining is shed for about days 1–5." },
            ],
            steps: [
              { reasoning: "Recall the duration.", working: "\\text{days } 1\\text{–}5 \\to 5 \\text{ days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About 5 days",
            commonErrors: ["Answering 28 — that's the whole cycle, not menstruation."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a 28-day cycle, the luteal phase runs from day 15 to day 28. State its length in days.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 14, unit: "days" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Luteal phase", statement: "Days 15–28 of a 28-day cycle, maintained by progesterone." },
            ],
            steps: [
              { reasoning: "Count the days.", working: "28 - 15 + 1 = 14", marks: 1, markCode: "M" },
            ],
            finalAnswer: "14 days",
            commonErrors: ["Answering 13 — remember both day 15 and day 28 are included."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two changes that occur in the uterus lining during the repair phase of the menstrual cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Repair phase", statement: "Days 6–13: lining rebuilt and thickened; FSH stimulates egg development." },
            ],
            steps: [
              { reasoning: "Give two changes.", working: "\\text{lining rebuilt/thickened}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The uterus lining is rebuilt and thickened in preparation for a possible embryo, and FSH stimulates development of an egg in the ovary.",
            commonErrors: ["Saying ovulation happens in repair — ovulation marks the start of the luteal phase."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the roles of FSH and LH during the menstrual cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "FSH and LH", statement: "FSH stimulates egg development; LH surge triggers ovulation." },
            ],
            steps: [
              { reasoning: "FSH stimulates egg development in the ovary.", working: "\\text{FSH} \\to \\text{egg development}", marks: 1, markCode: "M" },
              { reasoning: "This happens during the repair phase.", working: "\\text{repair phase}", marks: 1, markCode: "M" },
              { reasoning: "LH surge triggers release of the egg (~day 14).", working: "\\text{LH surge} \\to \\text{ovulation}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "FSH stimulates the development of an egg in the ovary during the repair phase; the LH surge around day 14 triggers ovulation — the release of the egg.",
            commonErrors: ["Swapping the hormones — FSH develops the egg, LH releases it."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the placenta is essential for the developing fetus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Placenta function", statement: "Exchanges O₂/nutrients to fetus and CO₂/wastes to mother; produces pregnancy hormones." },
            ],
            steps: [
              { reasoning: "Supplies oxygen and nutrients to the fetus.", working: "\\text{O}_2 + \\text{nutrients} \\to \\text{fetus}", marks: 1, markCode: "M" },
              { reasoning: "Removes carbon dioxide and wastes.", working: "\\text{CO}_2 + \\text{wastes} \\to \\text{mother}", marks: 1, markCode: "M" },
              { reasoning: "Produces hormones such as progesterone maintaining pregnancy.", working: "\\text{progesterone}", marks: 1, markCode: "M" },
              { reasoning: "Conclude essential role.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The placenta is the exchange surface supplying oxygen and nutrients to the fetus, removing carbon dioxide and wastes, and producing hormones such as progesterone that maintain the pregnancy.",
            commonErrors: ["Saying maternal and fetal blood mix — they exchange across the placenta without mixing."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct sequence of events after fertilisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Implantation → zygote → embryo" },
              { id: "b", text: "Zygote → embryo → implantation" },
              { id: "c", text: "Embryo → zygote → placenta" },
              { id: "d", text: "Zygote → placenta → embryo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation sequence", statement: "Zygote → cell division → embryo → travels to uterus → implantation." },
            ],
            steps: [
              { reasoning: "Recall the order.", working: "\\text{zygote} \\to \\text{embryo} \\to \\text{implantation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Zygote → embryo → implantation",
            commonErrors: ["Putting implantation before embryo development — implantation is the last step."],
          },
        },
        {
          id: "cieb-u8-menstrual-pregnancy-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone maintains the uterus lining during pregnancy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Progesterone" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Progesterone", statement: "Maintains and thickens the uterus lining; secreted by corpus luteum and placenta." },
            ],
            steps: [
              { reasoning: "Match hormone to function.", working: "\\text{progesterone} \\to \\text{lining maintained}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Progesterone",
            commonErrors: ["Choosing oestrogen alone — progesterone is the key hormone for maintaining the lining."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u8-human-reproduction-notes",
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

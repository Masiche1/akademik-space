import type { Lesson } from "../../../types.ts";

export const lesson713: Lesson = {
  id: "cial-b-u7-lesson-7-3",
  code: "7-3",
  title: "Reproduction",
  goal: "I CAN describe asexual and sexual reproduction in animals and plants and the menstrual cycle.",
  standards: ["9700 13: reproduction"],
  vocabulary: [
    { term: "Asexual reproduction", definition: "One parent; offspring genetically identical (clones)." },
    { term: "Sexual reproduction", definition: "Two parents; gametes fuse → genetically varied offspring." },
    { term: "Fertilisation", definition: "Fusion of male and female gametes to form zygote." },
    { term: "Pollination", definition: "Transfer of pollen to stigma — self or cross." },
    { term: "Menstrual cycle", definition: "~28-day cycle of hormonal and uterine changes in humans." },
    { term: "Implantation", definition: "Embedding of blastocyst in uterine lining." },
  ],
  concepts: [
    {
      id: "cial-b-u7-repro-animal",
      title: "Animal reproduction",
      skill: "Describe sexual reproduction, gametes and the menstrual cycle.",
      lesson: {
        sections: [
          {
            heading: "Gametes and fertilisation",
            body: "Sexual reproduction: meiosis produces haploid gametes — sperm (male) and ovum (female). Fertilisation restores diploid zygote → embryo. Internal fertilisation (mammals) vs external (fish, amphibians). Asexual reproduction (budding, fission, parthenogenesis) gives clones — fast but no variation.",
          },
          {
            heading: "The menstrual cycle",
            body: "~28 days. Day 1: menstruation (uterine lining shed). FSH stimulates follicle → oestrogen → LH surge → ovulation (~day 14). Corpus luteum secretes progesterone → maintains lining. If no pregnancy: progesterone falls → menstruation. If fertilised: hCG maintains corpus luteum → implantation.",
          },
          {
            heading: "Pregnancy and birth",
            body: "Implantation ~day 7; placenta exchanges gases/nutrients/wastes between mother and fetus; umbilical cord links them. Parturition (birth) triggered by oxytocin/prostaglandins; lactation by prolactin/oxytocin.",
          },
        ],
        keyFormulas: [
          { name: "Cycle hormones", statement: "FSH→follicle, LH→ovulation, oestrogen/progesterone→lining" },
          { name: "Fertilisation", statement: "Sperm + ovum → diploid zygote" },
        ],
        workedExample: {
          problem: "Which hormone triggers ovulation and what does it do?",
          solution: "LH surge around day 14 triggers ovulation — follicle ruptures releasing ovum.",
        },
      },
      questions: [
        {
          id: "cial-b-u7-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between asexual and sexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asexual: one parent, clones; sexual: two parents, variation" },
              { id: "b", text: "Asexual is slower; sexual is faster" },
              { id: "c", text: "They are identical" },
              { id: "d", text: "Asexual needs gametes; sexual does not" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Reproduction", statement: "Asexual=clones; sexual=gametes+variation." }],
            steps: [{ reasoning: "Asexual one parent clones; sexual two parents variation.", marks: 1, markCode: "A" }],
            finalAnswer: "One parent clones vs two parents varied",
          },
        },
        {
          id: "cial-b-u7-ra-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which hormone triggers ovulation in the menstrual cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Menstrual cycle", statement: "LH surge → ovulation." }],
            steps: [
              { reasoning: "LH (luteinising hormone) surges around day 14.", marks: 1, markCode: "M" },
              { reasoning: "Surge causes follicle to rupture and release ovum.", marks: 1, markCode: "M" },
              { reasoning: "Correct hormone and role stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "LH surge → ovulation",
          },
        },
        {
          id: "cial-b-u7-ra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the menstrual cycle stops during pregnancy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pregnancy hormones", statement: "hCG maintains corpus luteum → progesterone stays high." }],
            steps: [
              { reasoning: "After fertilisation, embryo secretes hCG.", marks: 1, markCode: "M" },
              { reasoning: "hCG keeps corpus luteum active → progesterone maintained.", marks: 1, markCode: "M" },
              { reasoning: "High progesterone maintains uterine lining — no shedding.", marks: 1, markCode: "M" },
              { reasoning: "Without hCG, corpus luteum degenerates → menstruation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "hCG maintains progesterone → no menstruation",
          },
        },
        {
          id: "cial-b-u7-ra-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Animal reproduction.",
          parts: [
            { label: "a", prompt: "Distinguish asexual and sexual reproduction.", marks: 2 },
            { label: "b", prompt: "Name the hormones that trigger ovulation and maintain the uterine lining.", marks: 3 },
            { label: "c", prompt: "What is the role of the placenta?", marks: 2 },
            { label: "d", prompt: "Why does sexual reproduction produce more variation than asexual?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reproduction", statement: "Gametes+meiosis → variation; hormones control cycle." }],
            steps: [
              { part: "a", reasoning: "Asexual: one parent, clones; sexual: gametes, variation.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "LH triggers ovulation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Oestrogen and progesterone maintain lining.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exchanges gases, nutrients, wastes between mother and fetus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Does not mix blood — selective barrier.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Meiosis + random fertilisation shuffle alleles.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Each offspring genetically unique.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) clone vs varied (b) LH, oestrogen, progesterone (c) exchange barrier (d) meiosis+fertilisation",
          },
        },
      ],
    },
    {
      id: "cial-b-u7-repro-plant",
      title: "Plant reproduction",
      skill: "Describe flower structure, pollination, fertilisation and seed dispersal.",
      lesson: {
        sections: [
          {
            heading: "Flower structure",
            body: "Stamen (male): anther produces pollen. Carpel/pistil (female): stigma receives pollen → style → ovary containing ovules. Petals attract pollinators; sepals protect bud. Bisexual flowers have both; unisexual have one.",
          },
          {
            heading: "Pollination and fertilisation",
            body: "Pollination: pollen grain lands on stigma → pollen tube grows down style → sperm nuclei enter ovule. Double fertilisation: one sperm + ovum → zygote; second sperm + polar nuclei → endosperm (food store). Self-pollination vs cross-pollination (more variation).",
          },
          {
            heading: "Seed and fruit formation",
            body: "After fertilisation: ovule → seed (embryo + endosperm + seed coat); ovary → fruit (protects/disperses seeds). Germination needs water, oxygen, suitable temperature. Seed dispersal: wind (winged/dandelion), water, animals (fleshy fruit, hooks).",
          },
        ],
        keyFormulas: [
          { name: "Double fertilisation", statement: "Sperm+ovum→zygote; sperm+polar nuclei→endosperm" },
          { name: "Fruit/seed", statement: "Ovary→fruit; ovule→seed" },
        ],
        workedExample: {
          problem: "What structures become the seed and fruit after fertilisation?",
          solution: "Ovule → seed; ovary wall → fruit (pericarp).",
        },
      },
      questions: [
        {
          id: "cial-b-u7-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the flower produces pollen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anther" },
              { id: "b", text: "Stigma" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Petal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flower parts", statement: "Anther in stamen produces pollen." }],
            steps: [{ reasoning: "Anther produces pollen grains.", marks: 1, markCode: "A" }],
            finalAnswer: "Anther",
          },
        },
        {
          id: "cial-b-u7-rp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is double fertilisation in flowering plants?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Double fertilisation", statement: "Two sperm nuclei fertilise ovum and polar nuclei." }],
            steps: [
              { reasoning: "One sperm nucleus + ovum → diploid zygote.", marks: 1, markCode: "M" },
              { reasoning: "Second sperm + polar nuclei → triploid endosperm.", marks: 1, markCode: "M" },
              { reasoning: "Both events occur in the ovule — unique to flowering plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Zygote + endosperm formed",
          },
        },
        {
          id: "cial-b-u7-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two adaptations of flowers for wind pollination.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Pollination adaptations", statement: "Wind-pollinated: small petals, feathery stigma, light pollen." }],
            steps: [
              { reasoning: "Small or no petals — no need to attract animals.", marks: 1, markCode: "M" },
              { reasoning: "Feathery/bushy stigma with large surface area to catch pollen.", marks: 1, markCode: "M" },
              { reasoning: "Light, smooth pollen produced in large quantities.", marks: 1, markCode: "M" },
              { reasoning: "Two valid adaptations given.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Small petals + feathery stigma/light pollen",
          },
        },
        {
          id: "cial-b-u7-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Plant reproduction.",
          parts: [
            { label: "a", prompt: "Label the male and female parts of a flower.", marks: 2 },
            { label: "b", prompt: "What is double fertilisation?", marks: 3 },
            { label: "c", prompt: "What does the ovule develop into? What does the ovary develop into?", marks: 2 },
            { label: "d", prompt: "Give two methods of seed dispersal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant reproduction", statement: "Stamen male, carpel female; ovule→seed, ovary→fruit." }],
            steps: [
              { part: "a", reasoning: "Male: stamen (anther+filament); female: carpel (stigma+style+ovary).", marks: 2, markCode: "A" },
              { part: "b", reasoning: "One sperm + ovum → zygote.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second sperm + polar nuclei → endosperm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both in ovule — double fertilisation.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Ovule→seed; ovary→fruit.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Any two: wind, water, animals, explosive.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two valid methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stamen/carpel (b) zygote+endosperm (c) seed/fruit (d) wind/water/animals",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u7-reproduction-notes",
      title: "Reproduction — revision notes",
      summary: "Animal reproduction, menstrual cycle hormones and plant reproduction.",
      sections: [
        {
          heading: "Animals",
          body: "Sexual: meiosis → gametes → fertilisation → zygote. Asexual: clones, no variation. Menstrual cycle ~28 days: FSH→follicle, LH surge→ovulation (~day 14), oestrogen/progesterone maintain lining; hCG in pregnancy maintains corpus luteum.",
        },
        {
          heading: "Plants",
          body: "Stamen (anther→pollen) male; carpel (stigma→style→ovary) female. Pollination→pollen tube→double fertilisation (zygote + endosperm). Ovule→seed, ovary→fruit. Wind-pollinated: small petals, feathery stigma, light pollen.",
        },
        {
          heading: "Exam checklist",
          body: "For cycle questions sequence hormones in order. For plant questions distinguish self vs cross pollination — cross gives more variation.",
        },
      ],
    },
  ],
};

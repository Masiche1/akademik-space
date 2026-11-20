import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "olbio-u8-lesson-8-1",
  code: "8-1",
  title: "Asexual and Sexual Reproduction",
  goal: "I CAN compare asexual and sexual reproduction and describe flower structure, pollination and fertilisation in plants.",
  standards: ["5090 8.1", "5090 8.2"],
  vocabulary: [
    { term: "Asexual reproduction", definition: "Production of genetically identical offspring from one parent, without gametes." },
    { term: "Sexual reproduction", definition: "Production of offspring from fusion of two gametes; introduces variation." },
    { term: "Stamen", definition: "Male part of flower: anther (produces pollen) + filament." },
    { term: "Carpel", definition: "Female part of flower: stigma, style, ovary (contains ovules)." },
    { term: "Pollination", definition: "Transfer of pollen from anther to stigma." },
    { term: "Fertilisation", definition: "Fusion of male and female nuclei to form a zygote." },
    { term: "Self-pollination", definition: "Pollen transferred to stigma of same flower or same plant." },
    { term: "Cross-pollination", definition: "Pollen transferred to stigma of a different plant." },
  ],
  concepts: [
    {
      id: "olbio-u8-asexual-sexual",
      title: "Asexual vs sexual reproduction",
      skill: "Compare asexual and sexual reproduction and give examples of each.",
      lesson: {
        sections: [
          {
            heading: "Asexual reproduction",
            body: "- One parent, **no gametes**, **mitosis** only.\n- Offspring **genetically identical** (clones) — no variation.\n- Examples: binary fission (bacteria), budding (yeast), runners (strawberry), tubers (potato), cuttings.",
          },
          {
            heading: "Sexual reproduction",
            body: "- Two parents, **gametes** fuse (fertilisation).\n- Offspring **genetically different** — variation for natural selection.\n- Gametes produced by **meiosis** (half chromosome number).",
          },
          {
            heading: "Comparison table",
            body: "| Feature | Asexual | Sexual |\n|---|---|---|\n| Parents | 1 | 2 |\n| Gametes | no | yes |\n| Division | mitosis | meiosis + fertilisation |\n| Offspring | identical | varied |\n| Speed | fast | slower |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do farmers prefer asexual reproduction for some crops?",
          solution: "It produces identical offspring with desirable traits — no variation means predictable quality.",
        },
      },
      questions: [
        {
          id: "olbio-u8-asexual-sexual-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a feature of asexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Offspring are genetically identical" },
              { id: "b", text: "Requires two parents" },
              { id: "c", text: "Involves gametes" },
              { id: "d", text: "Produces variation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual", statement: "One parent, clones, no gametes, mitosis." },
            ],
            steps: [
              { reasoning: "Recall the feature.", working: "\\text{identical offspring}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Offspring are genetically identical",
            commonErrors: ["Choosing 'two parents' — that's sexual."],
          },
        },
        {
          id: "olbio-u8-asexual-sexual-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of asexual reproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual examples", statement: "Binary fission, budding, runners, tubers, cuttings." },
            ],
            steps: [
              { reasoning: "Give two examples.", working: "\\text{fission, budding, runners, tubers}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binary fission (bacteria), budding (yeast), runners (strawberry), tubers (potato), cuttings.",
            commonErrors: ["Giving 'fertilisation' — that's sexual."],
          },
        },
        {
          id: "olbio-u8-asexual-sexual-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sexual reproduction is important for species survival.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sexual advantage", statement: "Genetic variation allows adaptation and natural selection." },
            ],
            steps: [
              { reasoning: "Gametes fuse → new gene combinations.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { reasoning: "Variation allows some offspring to survive changes.", working: "\\text{survival advantage}", marks: 1, markCode: "M" },
              { reasoning: "Link to natural selection/evolution.", working: "\\text{selection}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: maintains adaptability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sexual reproduction produces genetically varied offspring; this variation allows natural selection to favour traits that help survival in changing environments.",
            commonErrors: ["Saying 'to make more offspring' — asexual is faster for that."],
          },
        },
        {
          id: "olbio-u8-asexual-sexual-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare asexual and sexual reproduction.",
          parts: [
            { label: "a", prompt: "State the number of parents and whether gametes are involved.", marks: 2 },
            { label: "b", prompt: "State the type of cell division in each.", marks: 2 },
            { label: "c", prompt: "Compare the genetic makeup of offspring.", marks: 2 },
            { label: "d", prompt: "Give one advantage of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reproduction comparison", statement: "Asexual: 1 parent, mitosis, clones. Sexual: 2 parents, meiosis+fertilisation, varied." },
            ],
            steps: [
              { part: "a", reasoning: "Asexual: 1 parent, no gametes.", working: "\\text{1 parent}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sexual: 2 parents, gametes.", working: "\\text{2 parents}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Asexual: mitosis.", working: "\\text{mitosis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sexual: meiosis for gametes.", working: "\\text{meiosis}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Asexual: identical.", working: "\\text{identical}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sexual: varied.", working: "\\text{varied}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Asexual advantage: fast, no mate needed.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sexual advantage: variation/adaptation.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State advantages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 vs 2 parents, no vs yes gametes (b) mitosis vs meiosis (c) identical vs varied (d) asexual fast, sexual variation",
            commonErrors: ["In (b) saying sexual uses only mitosis — gametes need meiosis."],
          },
        },
      ],
    },
    {
      id: "olbio-u8-flower",
      title: "Flower structure and fertilisation",
      skill: "Describe flower parts, pollination types, and the process of fertilisation in plants.",
      lesson: {
        sections: [
          {
            heading: "Flower structure",
            body: "- **Sepals**: protect bud.\n- **Petals**: attract pollinators.\n- **Stamen** (male): anther produces pollen, filament supports.\n- **Carpel** (female): stigma (receives pollen), style (tube), ovary (contains ovules).",
          },
          {
            heading: "Pollination",
            body: "- **Self**: same flower/plant — no variation but reliable.\n- **Cross**: different plant — variation but needs vector (wind/insects).\n- Adaptations: bright petals/scent (insect), feathery stigma/light pollen (wind).",
          },
          {
            heading: "Fertilisation",
            body: "Pollen lands on stigma → pollen tube grows down style → male nucleus fuses with female nucleus in ovule → **zygote** → seed. Ovary → fruit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the difference between pollination and fertilisation?",
          solution: "Pollination = transfer of pollen to stigma; fertilisation = fusion of male and female nuclei inside the ovule.",
        },
      },
      questions: [
        {
          id: "olbio-u8-flower-q1",
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
            principles: [
              { kind: "property", name: "Anther", statement: "Produces pollen (male gamete)." },
            ],
            steps: [
              { reasoning: "Match part to function.", working: "\\text{anther} \\to \\text{pollen}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Anther",
            commonErrors: ["Choosing stigma — that's where pollen LANDS."],
          },
        },
        {
          id: "olbio-u8-flower-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define pollination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pollination", statement: "Transfer of pollen from anther to stigma." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{anther} \\to \\text{stigma}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The transfer of pollen grains from the anther to the stigma of a flower.",
            commonErrors: ["Confusing with fertilisation — pollination precedes fertilisation."],
          },
        },
        {
          id: "olbio-u8-flower-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between self-pollination and cross-pollination and their advantages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pollination types", statement: "Self: reliable, no variation. Cross: variation, needs vector." },
            ],
            steps: [
              { reasoning: "Define self-pollination.", working: "\\text{same plant}", marks: 1, markCode: "M" },
              { reasoning: "Define cross-pollination.", working: "\\text{different plant}", marks: 1, markCode: "M" },
              { reasoning: "Advantage of self: reliable.", marks: 1, markCode: "M" },
              { reasoning: "Advantage of cross: variation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Self-pollination is within the same plant (reliable but no variation); cross-pollination is between different plants (variation but needs a vector).",
            commonErrors: ["Saying cross-pollination is 'better' without explaining why."],
          },
        },
        {
          id: "olbio-u8-flower-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the process of fertilisation in a flowering plant.",
          parts: [
            { label: "a", prompt: "State what pollination must occur first.", marks: 2 },
            { label: "b", prompt: "Describe the growth of the pollen tube.", marks: 3 },
            { label: "c", prompt: "Describe what happens when the pollen tube reaches the ovule.", marks: 2 },
            { label: "d", prompt: "State the fate of the ovary and ovule.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation", statement: "Pollen tube → ovule → nuclei fuse → zygote → seed; ovary → fruit." },
            ],
            steps: [
              { part: "a", reasoning: "Pollen must reach stigma (pollination).", working: "\\text{pollination first}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State prerequisite.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pollen grain germinates on stigma.", working: "\\text{germinates}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pollen tube grows down style to ovary.", working: "\\text{tube down style}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Carries male nuclei to ovule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Male nucleus fuses with female nucleus.", working: "\\text{nuclei fuse}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Forms zygote.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ovary → fruit; ovule → seed.", working: "\\text{fruit + seed}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pollination first (b) pollen tube grows down style (c) nuclei fuse → zygote (d) ovary→fruit, ovule→seed",
            commonErrors: ["In (b) saying pollen 'swims' — it grows a tube."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u8-reproduction-notes",
      title: "Reproduction — revision notes",
      summary: "Asexual vs sexual reproduction, flower structure, pollination and fertilisation.",
      sections: [
        {
          heading: "Reproduction types",
          body: "Asexual: 1 parent, mitosis, clones (fast, no variation). Sexual: 2 parents, meiosis + fertilisation, varied (adaptation).",
        },
        {
          heading: "Flower",
          body: "Stamen (anther+filament) = male; carpel (stigma+style+ovary) = female. Pollination: anther→stigma. Fertilisation: pollen tube → nuclei fuse → zygote → seed; ovary → fruit.",
        },
        {
          heading: "Exam technique",
          body: "- Pollination ≠ fertilisation: pollination is pollen transfer, fertilisation is nuclear fusion.\n- Self = reliable/no variation; cross = variation/needs vector.\n- Ovary → fruit; ovule → seed.",
        },
      ],
    },
  ],
};

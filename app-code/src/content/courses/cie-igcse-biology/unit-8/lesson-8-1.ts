import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cieb-u8-lesson-8-1",
  code: "8-1",
  title: "Asexual and Sexual Reproduction",
  goal: "I CAN compare asexual and sexual reproduction and describe flower structure, pollination and fertilisation in plants.",
  standards: ["0653 8.1", "0653 8.2"],
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
      id: "cieb-u8-asexual-sexual",
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
          id: "cieb-u8-asexual-sexual-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a feature of asexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Offspring are genetically identical" },
              { id: "b", text: "Involves gametes" },
              { id: "c", text: "Produces variation" },
              { id: "d", text: "Requires two parents" },
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
          id: "cieb-u8-asexual-sexual-q2",
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
          id: "cieb-u8-asexual-sexual-q3",
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
          id: "cieb-u8-asexual-sexual-q4",
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
        {
          id: "cieb-u8-asexual-sexual-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sexual reproduction involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No genetic variation" },
              { id: "b", text: "One parent only" },
              { id: "c", text: "Fusion of gametes from two parents" },
              { id: "d", text: "Only mitosis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sexual reproduction", statement: "Two parents, gametes fuse at fertilisation, offspring varied." },
            ],
            steps: [
              { reasoning: "Recall the key feature.", working: "\\text{gametes fuse}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fusion of gametes from two parents",
            commonErrors: ["Choosing 'one parent' — that's asexual."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Human body cells contain 46 chromosomes. How many chromosomes does a human gamete contain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete chromosome number", statement: "Gametes are haploid — half the chromosome number of body cells (produced by meiosis)." },
            ],
            steps: [
              { reasoning: "Halve the body cell number.", working: "46 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 23", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23 chromosomes",
            commonErrors: ["Giving 46 — gametes are haploid."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define asexual reproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Asexual reproduction", statement: "Production of genetically identical offspring from one parent without gametes." },
            ],
            steps: [
              { reasoning: "Give the definition.", working: "\\text{one parent, no gametes}", marks: 1, markCode: "M" },
              { reasoning: "Complete: identical offspring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Asexual reproduction is the production of genetically identical offspring from one parent, without gametes or fertilisation.",
            commonErrors: ["Mentioning gametes — asexual reproduction involves none."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Offspring produced by asexual reproduction are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always genetically different" },
              { id: "b", text: "Genetically identical to the parent" },
              { id: "c", text: "Slower to develop" },
              { id: "d", text: "Produced from fused gametes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual offspring", statement: "Offspring are clones — genetically identical to the parent." },
            ],
            steps: [
              { reasoning: "Recall the result.", working: "\\text{identical}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Genetically identical to the parent",
            commonErrors: ["Choosing 'different' — that's sexual reproduction."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bacterium divides by binary fission every 30 minutes. Starting with one bacterium, how many bacteria are present after 2 hours?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 16, unit: "bacteria" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Binary fission", statement: "Each division doubles the population: 1 → 2 → 4 → 8 → 16." },
            ],
            steps: [
              { reasoning: "Find number of divisions.", working: "120 \\text{ min} \\div 30 = 4 \\text{ divisions}", marks: 1, markCode: "M" },
              { reasoning: "Double for each division.", working: "2^4 = 16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16 bacteria",
            commonErrors: ["Adding instead of doubling — fission doubles each time."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why genetic variation is important for the survival of a species.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Variation and survival", statement: "Variation allows natural selection to favour traits suited to changing environments." },
            ],
            steps: [
              { reasoning: "Sexual reproduction produces varied offspring.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { reasoning: "Some individuals have advantageous traits.", working: "\\text{advantageous traits}", marks: 1, markCode: "M" },
              { reasoning: "These survive and reproduce better in changing conditions.", working: "\\text{natural selection}", marks: 1, markCode: "M" },
              { reasoning: "Species can adapt rather than all dying.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genetic variation means some offspring have traits better suited to changing environments; natural selection favours these individuals so the species can adapt and survive, whereas identical clones would all be equally vulnerable.",
            commonErrors: ["Saying variation is 'random and useless' — it provides material for selection."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of asexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Seed formation in flowers" },
              { id: "b", text: "Pollination" },
              { id: "c", text: "Fertilisation in animals" },
              { id: "d", text: "Binary fission in bacteria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual examples", statement: "Binary fission, budding, runners, tubers, cuttings are asexual." },
            ],
            steps: [
              { reasoning: "Identify the asexual method.", working: "\\text{binary fission}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Binary fission in bacteria",
            commonErrors: ["Choosing seed formation — seeds come from sexual reproduction in flowering plants."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one advantage and one disadvantage of asexual reproduction compared with sexual reproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual pros/cons", statement: "Advantage: fast, no mate needed, preserves good traits. Disadvantage: no variation → vulnerable to change/disease." },
            ],
            steps: [
              { reasoning: "Advantage: rapid population growth, no mate needed.", working: "\\text{fast, no mate}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: no genetic variation.", working: "\\text{no variation}", marks: 1, markCode: "M" },
              { reasoning: "All clones equally vulnerable to environmental change/disease.", working: "\\text{vulnerability}", marks: 1, markCode: "M" },
              { reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Asexual reproduction is fast and needs only one parent, preserving desirable traits; however, because all offspring are identical there is no variation, so the whole population is equally vulnerable if conditions change or disease strikes.",
            commonErrors: ["Listing only advantages — the question asks for both."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gametes are produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meiosis" },
              { id: "b", text: "Binary fission" },
              { id: "c", text: "Mitosis" },
              { id: "d", text: "Diffusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis", statement: "Meiosis produces haploid gametes with half the chromosome number." },
            ],
            steps: [
              { reasoning: "Recall the division type.", working: "\\text{meiosis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Meiosis",
            commonErrors: ["Choosing mitosis — that produces identical body cells, not gametes."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant species has 20 chromosomes in its body cells. How many chromosomes are in its gametes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Haploid gametes", statement: "Gametes have half the chromosome number of body cells." },
            ],
            steps: [
              { reasoning: "Halve the body cell number.", working: "20 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 chromosomes",
            commonErrors: ["Giving 20 — gametes are haploid."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare asexual and sexual reproduction.",
          parts: [
            { label: "a", prompt: "State the number of parents involved in each.", marks: 2 },
            { label: "b", prompt: "State whether gametes are involved in each.", marks: 2 },
            { label: "c", prompt: "Compare the genetic makeup of offspring.", marks: 2 },
            { label: "d", prompt: "Give one advantage of each type.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reproduction comparison", statement: "Asexual: 1 parent, mitosis, clones. Sexual: 2 parents, meiosis + fertilisation, varied." },
            ],
            steps: [
              { part: "a", reasoning: "Asexual: 1 parent. Sexual: 2 parents.", working: "\\text{1 vs 2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Asexual: no gametes. Sexual: gametes fuse.", working: "\\text{no vs yes gametes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Asexual offspring identical; sexual offspring varied.", working: "\\text{identical vs varied}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Asexual advantage: fast, no mate needed.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sexual advantage: variation/adaptation.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State advantages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 vs 2 parents (b) no vs yes gametes (c) identical vs varied offspring (d) asexual fast, sexual variation",
            commonErrors: ["In (b) saying sexual reproduction uses only mitosis — gametes need meiosis."],
          },
        },
        {
          id: "cieb-u8-asexual-sexual-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of reproduction produces genetically varied offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sexual reproduction" },
              { id: "b", text: "Budding" },
              { id: "c", text: "Asexual reproduction" },
              { id: "d", text: "Binary fission" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Variation source", statement: "Sexual reproduction (fusion of gametes) produces genetic variation." },
            ],
            steps: [
              { reasoning: "Recall which type varies.", working: "\\text{sexual} \\to \\text{variation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sexual reproduction",
            commonErrors: ["Choosing budding or fission — those produce clones."],
          },
        },
      ],
    },
    {
      id: "cieb-u8-flower",
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
          id: "cieb-u8-flower-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the flower produces pollen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anther" },
              { id: "b", text: "Ovary" },
              { id: "c", text: "Stigma" },
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
          id: "cieb-u8-flower-q2",
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
          id: "cieb-u8-flower-q3",
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
          id: "cieb-u8-flower-q4",
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
        {
          id: "cieb-u8-flower-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the flower receives pollen during pollination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anther" },
              { id: "b", text: "Sepal" },
              { id: "c", text: "Filament" },
              { id: "d", text: "Stigma" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stigma", statement: "The stigma is the sticky tip of the carpel that receives pollen." },
            ],
            steps: [
              { reasoning: "Match part to function.", working: "\\text{stigma receives}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stigma",
            commonErrors: ["Choosing anther — that's where pollen is produced."],
          },
        },
        {
          id: "cieb-u8-flower-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A flower has 3 carpels and each carpel contains 2 ovules. How many seeds can potentially form after fertilisation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "seeds" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovules to seeds", statement: "Each fertilised ovule develops into one seed." },
            ],
            steps: [
              { reasoning: "Multiply carpels by ovules each.", working: "3 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 seeds",
            commonErrors: ["Forgetting that each ovule becomes one seed."],
          },
        },
        {
          id: "cieb-u8-flower-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of petals in a flower.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Petals", statement: "Petals are often brightly coloured to attract pollinators." },
            ],
            steps: [
              { reasoning: "State the function.", working: "\\text{attract pollinators}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Petals attract pollinators (such as insects) to the flower, often by being brightly coloured.",
            commonErrors: ["Saying petals 'protect the bud' — that's the sepals' role."],
          },
        },
        {
          id: "cieb-u8-flower-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The male part of the flower is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carpel" },
              { id: "b", text: "Stigma" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Stamen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stamen", statement: "Stamen (anther + filament) is the male part producing pollen." },
            ],
            steps: [
              { reasoning: "Match part to sex.", working: "\\text{stamen} = \\text{male}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stamen",
            commonErrors: ["Choosing carpel — that's the female part."],
          },
        },
        {
          id: "cieb-u8-flower-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A stigma receives 100 pollen grains and 60% of them germinate to grow pollen tubes. How many pollen tubes form?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "pollen tubes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pollen germination", statement: "Only pollen grains that germinate grow a pollen tube." },
            ],
            steps: [
              { reasoning: "Apply the percentage.", working: "0.60 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 pollen tubes",
            commonErrors: ["Using 40% instead of 60%."],
          },
        },
        {
          id: "cieb-u8-flower-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how flowers are adapted for pollination by insects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Insect pollination adaptations", statement: "Bright petals, scent, nectar attract insects; sticky stigma traps pollen." },
            ],
            steps: [
              { reasoning: "Brightly coloured petals attract insects.", working: "\\text{bright petals}", marks: 1, markCode: "M" },
              { reasoning: "Scent and nectar reward/attract pollinators.", working: "\\text{scent + nectar}", marks: 1, markCode: "M" },
              { reasoning: "Sticky stigma traps pollen carried on the insect.", working: "\\text{sticky stigma}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: efficient cross-pollination.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insect-pollinated flowers have bright petals, scent and nectar to attract insects; the sticky stigma traps pollen grains carried on the insect's body, ensuring effective pollination.",
            commonErrors: ["Listing wind-pollination features (light pollen, feathery stigma) — wrong vector."],
          },
        },
        {
          id: "cieb-u8-flower-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The pollen tube carries:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food only" },
              { id: "b", text: "Water only" },
              { id: "c", text: "Male nuclei to the ovule" },
              { id: "d", text: "Female nuclei" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pollen tube", statement: "Pollen tube grows down the style carrying male nuclei to the ovule." },
            ],
            steps: [
              { reasoning: "Recall the cargo.", working: "\\text{male nuclei}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Male nuclei to the ovule",
            commonErrors: ["Choosing female nuclei — the tube delivers the MALE nuclei."],
          },
        },
        {
          id: "cieb-u8-flower-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between pollination and fertilisation and the order in which they occur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pollination vs fertilisation", statement: "Pollination = pollen transfer to stigma; fertilisation = fusion of nuclei in ovule. Pollination first." },
            ],
            steps: [
              { reasoning: "Pollination: pollen moves from anther to stigma.", working: "\\text{anther} \\to \\text{stigma}", marks: 1, markCode: "M" },
              { reasoning: "Fertilisation: male and female nuclei fuse in the ovule.", working: "\\text{nuclei fuse}", marks: 1, markCode: "M" },
              { reasoning: "Pollination must occur first.", working: "\\text{pollination first}", marks: 1, markCode: "M" },
              { reasoning: "Complete the distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollination is the transfer of pollen from anther to stigma and occurs first; fertilisation is the subsequent fusion of the male nucleus (delivered by the pollen tube) with the female nucleus inside the ovule.",
            commonErrors: ["Reversing the order — fertilisation cannot happen before pollination."],
          },
        },
        {
          id: "cieb-u8-flower-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After fertilisation, the ovule develops into a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fruit" },
              { id: "b", text: "Seed" },
              { id: "c", text: "Petal" },
              { id: "d", text: "Pollen grain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovule fate", statement: "Fertilised ovule → seed; ovary → fruit." },
            ],
            steps: [
              { reasoning: "Recall the fate.", working: "\\text{ovule} \\to \\text{seed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Seed",
            commonErrors: ["Choosing fruit — that's the ovary's fate."],
          },
        },
        {
          id: "cieb-u8-flower-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant produces 200 flowers and each flower produces an average of 50 seeds. Calculate the total number of seeds produced.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10000, unit: "seeds" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Seed production", statement: "Total seeds = number of flowers × seeds per flower." },
            ],
            steps: [
              { reasoning: "Multiply flowers by seeds per flower.", working: "200 \\times 50", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 10000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10000 seeds",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cieb-u8-flower-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the sequence of events from pollination to the formation of seeds and fruit.",
          parts: [
            { label: "a", prompt: "Describe what pollination is and where pollen must land.", marks: 2 },
            { label: "b", prompt: "Describe the growth of the pollen tube.", marks: 3 },
            { label: "c", prompt: "Describe what happens inside the ovule.", marks: 2 },
            { label: "d", prompt: "State the fate of the ovule and ovary.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation sequence", statement: "Pollination → pollen tube → nuclei fuse → zygote → seed; ovary → fruit." },
            ],
            steps: [
              { part: "a", reasoning: "Pollen transferred from anther to stigma.", working: "\\text{anther} \\to \\text{stigma}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State where pollen lands.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pollen grain germinates on the stigma.", working: "\\text{germinates}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pollen tube grows down through style to ovary.", working: "\\text{tube down style}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Tube carries male nuclei to ovule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Male nucleus fuses with female nucleus.", working: "\\text{nuclei fuse}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Forms a zygote.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ovule → seed; ovary → fruit.", working: "\\text{seed + fruit}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pollen anther→stigma (b) pollen tube grows down style carrying male nuclei (c) nuclei fuse → zygote (d) ovule→seed, ovary→fruit",
            commonErrors: ["In (b) saying pollen 'swims' — it grows a tube."],
          },
        },
        {
          id: "cieb-u8-flower-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature is an adaptation for wind pollination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brightly coloured flowers" },
              { id: "b", text: "Light pollen grains and a feathery stigma" },
              { id: "c", text: "Nectar production" },
              { id: "d", text: "Large scented petals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Wind pollination adaptations", statement: "Light pollen and feathery stigma catch wind-borne pollen." },
            ],
            steps: [
              { reasoning: "Match feature to vector.", working: "\\text{light pollen + feathery stigma}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Light pollen grains and a feathery stigma",
            commonErrors: ["Choosing scented petals — that's insect pollination."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u8-reproduction-notes",
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

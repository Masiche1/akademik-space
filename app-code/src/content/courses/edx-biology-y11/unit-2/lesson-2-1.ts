import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ebi11-u2-lesson-2-1",
  code: "2-1",
  title: "Reproduction in Plants and Humans",
  goal: "I CAN compare sexual and asexual reproduction, describe reproduction in flowering plants and explain human reproduction and the hormonal control of the menstrual cycle.",
  standards: ["4BI1 3.1", "4BI1 3.2", "4BI1 3.3", "4BI1 3.4", "4BI1 3.5", "4BI1 3.6", "4BI1 3.7", "4BI1 3.8"],
  vocabulary: [
    { term: "Gamete", definition: "A haploid sex cell (sperm, egg, pollen nucleus or ovule nucleus) that fuses with another gamete at fertilisation." },
    { term: "Pollination", definition: "The transfer of pollen from an anther to a stigma." },
    { term: "Fertilisation", definition: "The fusion of the nucleus of a male gamete with the nucleus of a female gamete to form a zygote." },
    { term: "Germination", definition: "The growth of a seed into a seedling, which needs water, oxygen and a suitable temperature." },
    { term: "Ovulation", definition: "The release of a mature egg from a follicle in the ovary." },
    { term: "Placenta", definition: "The organ in the uterus where substances are exchanged between the blood of the mother and the blood of the fetus." },
    { term: "Implantation", definition: "The embedding of the early embryo into the thickened lining of the uterus." },
  ],
  concepts: [
    {
      id: "ebi11-u2-reproduction-plants",
      title: "Sexual and asexual reproduction, flowering plants",
      skill: "Compare sexual and asexual reproduction, describe pollination, fertilisation and germination, and analyse germination data.",
      lesson: {
        sections: [
          {
            heading: "Sexual and asexual reproduction",
            body: "**Asexual reproduction** involves one parent and no gametes. The offspring are produced by mitosis, so they are genetically identical to the parent and to each other (a **clone**). It is fast, needs no mate, but gives no variation, so a whole population can be wiped out by one disease or change in the environment.\n\n**Sexual reproduction** involves two gametes fusing at fertilisation. The offspring inherit a mixture of alleles from both parents, so they show **variation**. This gives some individuals a better chance of surviving a change in the environment, but it is slower and needs a mate or pollinator. Examples of asexual reproduction include bacteria dividing, and plants making runners or bulbs.",
          },
          {
            heading: "Flowers and pollination",
            body: "The **anther** makes pollen (the male gametes). The **stigma** receives pollen, the **style** supports it, and the **ovary** contains the **ovules**, each holding a female gamete. **Pollination** is the transfer of pollen from an anther to a stigma.\n\n- **Insect-pollinated** flowers: large, brightly coloured petals, scent and nectar; sticky or spiky pollen; anthers and stigma inside the flower.\n- **Wind-pollinated** flowers: small, dull petals, no scent or nectar; very large amounts of light, smooth pollen; anthers hang outside the flower and feathery stigmas hang out to catch pollen.",
          },
          {
            heading: "Fertilisation, seeds and germination",
            body: "After pollination a **pollen tube** grows down through the style to the ovary and into an ovule. The nucleus of the male gamete passes down the tube and **fuses** with the nucleus of the female gamete in the ovule. This is **fertilisation**. The ovule develops into a seed and the ovary into a fruit.\n\nSeeds **germinate** when they have **water** (to activate enzymes and swell the seed), **oxygen** (for aerobic respiration to release energy) and a **suitable temperature** (for enzyme activity). Light is not needed until the leaves have grown. Until then the seedling uses food stored in the seed.",
          },
        ],
        keyFormulas: [
          { name: "Percentage germination", statement: "$\\text{percentage germination} = \\frac{\\text{number germinated}}{\\text{number sown}} \\times 100\\%$" },
          { name: "Asexual reproduction", statement: "One parent, mitosis, no gametes, genetically identical offspring (clones)" },
          { name: "Sexual reproduction", statement: "Fusion of gametes, offspring genetically different from each other and from the parents" },
          { name: "Seed germination needs", statement: "Water, oxygen, suitable temperature (not light)" },
        ],
        workedExample: {
          problem: "A gardener sows 80 seeds and 62 germinate. Calculate the percentage germination. Then explain why seeds in a waterlogged pot of cold soil germinate poorly.",
          solution: "Percentage germination $= \\frac{62}{80} \\times 100 = 77.5\\%$.\n\nIn waterlogged soil the air spaces are filled with water, so there is little oxygen for aerobic respiration, and in cold conditions enzymes work slowly. Less energy is released for growth, so fewer seeds germinate.",
        },
      },
      questions: [
        {
          id: "ebi11-u2-reproduction-plants-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about asexual reproduction is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It involves meiosis and fertilisation" },
              { id: "b", text: "It needs two parents and produces gametes" },
              { id: "c", text: "It produces offspring that show a lot of genetic variation" },
              { id: "d", text: "It involves one parent and produces genetically identical offspring" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Asexual reproduction", statement: "Reproduction involving one parent, with no fusion of gametes, producing offspring genetically identical to the parent." },
            ],
            steps: [
              { reasoning: "Asexual reproduction uses mitosis in one parent only, so offspring are clones.", working: "\\text{one parent, identical offspring}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Confusing asexual with sexual reproduction, which involves gametes and meiosis.", "Thinking clones show variation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi11-u2-reproduction-plants-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the features of an insect-pollinated flower with those of a wind-pollinated flower.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adaptation for pollination", statement: "Flower structure is adapted to the method of pollen transfer: insect flowers attract insects, wind flowers expose the anthers and stigma to the air." },
            ],
            steps: [
              { reasoning: "Petals: insect-pollinated flowers have large, brightly coloured, scented petals (with nectar); wind-pollinated flowers have small, dull petals and no scent or nectar.", marks: 1, markCode: "B" },
              { reasoning: "Pollen: insect-pollinated flowers make smaller amounts of sticky or spiky pollen; wind-pollinated flowers make large amounts of light, smooth pollen.", marks: 1, markCode: "B" },
              { reasoning: "Anthers and stigma: in insect-pollinated flowers they are inside the flower; in wind-pollinated flowers the anthers hang outside and the stigma is large and feathery, hanging outside.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Insect: large bright scented petals, sticky/spiky pollen, parts inside flower. Wind: small dull petals, large amounts of light smooth pollen, anthers and feathery stigma outside.",
            commonErrors: ["Only describing one type of flower, so no comparison is made.", "Saying wind-pollinated flowers have brightly coloured petals."],
            examinerNote: "Each mark needs a comparison or both flower types addressed (oe). Allow 'nectar' with 'attracts insects'. Ignore 'big' for petals unless compared.",
          },
        },
        {
          id: "ebi11-u2-reproduction-plants-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student sows 60 seeds at $25^\\circ\\text{C}$ and 51 germinate. She sows another 60 seeds at $10^\\circ\\text{C}$ and 21 germinate. Calculate the difference between the two percentage germination values. Give your answer in percentage points.",
          response: { type: "numeric", parts: [{ label: "Difference in percentage germination", answer: 50, unit: "percentage points" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage germination", statement: "$\\text{percentage germination} = \\frac{\\text{number germinated}}{\\text{number sown}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the percentage germination at each temperature.", working: "\\frac{51}{60} \\times 100 = 85\\%,\\quad \\frac{21}{60} \\times 100 = 35\\%", marks: 1, markCode: "M" },
              { reasoning: "Subtract the lower percentage from the higher percentage.", working: "85 - 35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "50\\text{ percentage points}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ percentage points",
            commonErrors: ["Subtracting the numbers of seeds (51 - 21 = 30) and not converting to percentages.", "Calculating the percentage change (a decrease of 59%) instead of the difference."],
            examinerNote: "M1 for either correct percentage. M1 for subtracting, allow ecf. A1 for 50. Allow $50\\%$.",
          },
        },
        {
          id: "ebi11-u2-reproduction-plants-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "A student studies reproduction in a flowering plant. She then investigates germination of seeds. She places 50 seeds in each of four tubes. Tube A has damp cotton wool and is kept at $20^\\circ\\text{C}$. Tube B has dry cotton wool at $20^\\circ\\text{C}$. Tube C has damp cotton wool at $4^\\circ\\text{C}$. Tube D has seeds in boiled, cooled water with a layer of oil on top, at $20^\\circ\\text{C}$. After one week she counts the seeds that have germinated.\n\n| Tube | Seeds germinated (out of 50) |\n| --- | --- |\n| A | 40 |\n| B | 0 |\n| C | 3 |\n| D | 0 |",
          parts: [
            { label: "a", prompt: "Name the part of a flower that produces pollen and the part that receives pollen.", marks: 2 },
            { label: "b", prompt: "Describe how fertilisation occurs in a flowering plant after pollen has landed on the stigma.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage of seeds that germinated in tube A.", marks: 2 },
            { label: "d", prompt: "Use the results to state three conditions needed for germination. For each, name the tube that provides the evidence.", marks: 3 },
            { label: "e", prompt: "Explain why only 3 seeds germinated in tube C.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation", statement: "Fusion of the nucleus of a male gamete with the nucleus of a female gamete to form a zygote." },
              { kind: "formula", name: "Percentage germination", statement: "$\\text{percentage} = \\frac{\\text{number germinated}}{\\text{number sown}} \\times 100\\%$" },
              { kind: "principle", name: "Germination conditions", statement: "Water, oxygen and a suitable temperature are needed for germination." },
            ],
            steps: [
              { part: "a", reasoning: "Pollen is produced in the anther.", working: "\\text{anther}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Pollen lands on the stigma.", working: "\\text{stigma}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A pollen tube grows down the style to the ovary and into an ovule.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The nucleus of the male gamete fuses with the nucleus of the female gamete (egg cell) in the ovule.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the number germinated by the number sown and multiply by 100.", working: "\\frac{40}{50} \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "80\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Water is needed: no germination in dry tube B.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A suitable (warm) temperature is needed: almost no germination in cold tube C.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Oxygen is needed: no germination in tube D where the oil and boiled water prevent oxygen entering.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "At $4^\\circ\\text{C}$ the enzymes involved in respiration and growth work very slowly.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So little energy is released by respiration, and few seeds can germinate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) anther; stigma (b) pollen tube grows to ovule, male nucleus fuses with female nucleus (c) $80\\%$ (d) water (B), warmth (C), oxygen (D) (e) enzymes slow at low temperature so little energy released",
            commonErrors: ["Writing that the seeds need light to germinate.", "Saying enzymes are 'killed' or denatured at $4^\\circ\\text{C}$. Low temperatures slow enzymes but do not denature them.", "Stating that pollination is the fusion of gametes."],
            examinerNote: "(a) Reject 'stamen' for anther unless 'anther' is clear. (b) Allow 'sperm nucleus' and 'egg nucleus'. Reject 'pollen fuses with egg'. (c) Allow 80. (d) Condition and tube must both be given for the mark, ignore 'tube A' as evidence. (e) Allow 'enzymes work slower' oe.",
          },
        },
      ],
    },
    {
      id: "ebi11-u2-human-reproduction",
      title: "Human reproduction and the menstrual cycle",
      skill: "Describe the human reproductive systems, fertilisation, the placenta and how hormones control the menstrual cycle.",
      lesson: {
        sections: [
          {
            heading: "Reproductive systems, fertilisation and pregnancy",
            body: "In males the **testes** make sperm and testosterone. Sperm travel along the **sperm duct**, mix with fluid from glands, and pass through the **urethra** in the penis. In females the **ovaries** release an egg each cycle into the **oviduct**, where fertilisation usually happens. The fertilised egg (zygote) divides to form an embryo, which travels to the **uterus** and **implants** in the thick lining.\n\nThe **placenta** has a large surface area and a rich blood supply. Oxygen and nutrients diffuse from the mother's blood to the fetus, and carbon dioxide and urea diffuse the other way. The blood of mother and fetus do **not** mix. The **amniotic fluid** inside the **amnion** protects the fetus from shocks.",
          },
          {
            heading: "Hormones and the menstrual cycle",
            body: "The cycle lasts about 28 days. Day 1 is the start of menstruation (the lining breaks down). Ovulation happens at about day 14.\n\n- **FSH** (from the pituitary gland) causes an egg to mature in a follicle and stimulates the ovary to secrete **oestrogen**.\n- **Oestrogen** (from the ovary) causes the repair and thickening of the uterus lining. High oestrogen stimulates a surge of **LH** and inhibits FSH.\n- **LH** (from the pituitary gland) causes **ovulation**.\n- **Progesterone** (from the empty follicle, the corpus luteum) maintains the thickened lining. If no embryo implants, progesterone falls and menstruation begins. In pregnancy, progesterone stays high.",
          },
          {
            heading: "Contraception",
            body: "The **combined pill** contains oestrogen and progesterone. These inhibit the release of FSH, so eggs do not mature and ovulation does not happen. Other methods include barrier methods (condoms), which also reduce the spread of sexually transmitted infections such as HIV, and surgical sterilisation. Fertility treatments use FSH and LH to stimulate ovulation.",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
          { name: "FSH", statement: "Pituitary hormone: egg maturation, stimulates oestrogen secretion" },
          { name: "LH", statement: "Pituitary hormone: causes ovulation (about day 14)" },
          { name: "Oestrogen and progesterone", statement: "Oestrogen repairs the lining; progesterone maintains it" },
        ],
        workedExample: {
          problem: "A fetus has a mass of 0.2 kg at 20 weeks. At birth its mass is 3.0 kg. Calculate the percentage increase in mass.",
          solution: "Increase $= 3.0 - 0.2 = 2.8\\text{ kg}$.\n\nPercentage increase $= \\frac{2.8}{0.2} \\times 100 = 1400\\%$.",
        },
      },
      questions: [
        {
          id: "ebi11-u2-human-reproduction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In humans, where does fertilisation usually take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vagina" },
              { id: "b", text: "Ovary" },
              { id: "c", text: "Oviduct" },
              { id: "d", text: "Uterus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fertilisation site", statement: "The egg is released into the oviduct, where it meets sperm and is fertilised." },
            ],
            steps: [
              { reasoning: "Sperm swim up through the uterus into the oviduct, where they meet the egg. The embryo then moves to the uterus to implant.", working: "\\text{oviduct}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oviduct",
            commonErrors: ["Choosing the uterus, where implantation and development happen.", "Choosing the ovary, where eggs are made and released."],
            examinerNote: "B1 for oviduct. Allow fallopian tube.",
          },
        },
        {
          id: "ebi11-u2-human-reproduction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the placenta allows the fetus to obtain oxygen and nutrients and to get rid of waste.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Substances move down a concentration gradient. A large surface area, thin barrier and rich blood supply make exchange rapid." },
            ],
            steps: [
              { reasoning: "The placenta has a large surface area and a good blood supply, with fetal and maternal blood close together but not mixing.", marks: 1, markCode: "B" },
              { reasoning: "Oxygen and nutrients (glucose, amino acids) diffuse from the mother's blood into the fetal blood.", marks: 1, markCode: "B" },
              { reasoning: "Carbon dioxide and urea diffuse from the fetal blood into the mother's blood to be removed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Large surface area, close blood vessels without mixing; oxygen and nutrients diffuse to the fetus; carbon dioxide and urea diffuse to the mother.",
            commonErrors: ["Saying the mother's blood flows directly into the fetus.", "Saying the fetus breathes or digests food itself."],
            examinerNote: "Allow 'villi' for large surface area. Reject 'the blood mixes'. Allow 'waste' in place of carbon dioxide or urea only once.",
          },
        },
        {
          id: "ebi11-u2-human-reproduction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the hormones FSH, oestrogen and LH bring about ovulation in the menstrual cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hormonal control of the cycle", statement: "FSH stimulates follicle development and oestrogen secretion; oestrogen stimulates an LH surge, and LH causes ovulation." },
            ],
            steps: [
              { reasoning: "FSH is released from the pituitary gland and causes an egg to mature in a follicle in the ovary.", marks: 1, markCode: "B" },
              { reasoning: "FSH stimulates the ovary to secrete oestrogen.", marks: 1, markCode: "B" },
              { reasoning: "The rising level of oestrogen stimulates the pituitary gland to release a surge of LH (and inhibits FSH).", marks: 1, markCode: "B" },
              { reasoning: "LH causes the mature egg to be released from the follicle (ovulation), at about day 14.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "FSH matures an egg and stimulates oestrogen; high oestrogen triggers an LH surge; LH causes ovulation.",
            commonErrors: ["Saying that oestrogen causes ovulation directly.", "Swapping the roles of FSH and LH.", "Saying that progesterone causes ovulation."],
            examinerNote: "Allow 'pituitary' for the source of FSH and LH. Reject 'FSH is made in the ovary'.",
          },
        },
        {
          id: "ebi11-u2-human-reproduction-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A woman has a regular 28-day menstrual cycle. Day 1 is the first day of menstruation. She is using the combined contraceptive pill.",
          parts: [
            { label: "a", prompt: "State the day of the cycle on which ovulation normally occurs.", marks: 1 },
            { label: "b", prompt: "Name the hormone that causes ovulation and the hormone that maintains the lining of the uterus.", marks: 2 },
            { label: "c", prompt: "Describe what happens to the lining of the uterus if an embryo implants, and explain why menstruation does not occur.", marks: 2 },
            { label: "d", prompt: "A fetus has a mass of 0.4 kg at 24 weeks. At birth its mass is 3.2 kg. Calculate the percentage increase in mass. Give your answer in $\\%$.", marks: 2 },
            { label: "e", prompt: "Explain how the combined contraceptive pill prevents pregnancy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hormonal control of the cycle", statement: "LH causes ovulation; progesterone maintains the uterus lining; high oestrogen and progesterone inhibit FSH." },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Ovulation occurs about halfway through a 28-day cycle.", working: "\\text{day } 14", marks: 1, markCode: "B" },
              { part: "b", reasoning: "LH (luteinising hormone) causes ovulation.", working: "\\text{LH}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Progesterone maintains the thickened lining.", working: "\\text{progesterone}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The embryo implants into the thick, blood-rich lining, which stays in place and is not shed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Progesterone stays at a high level (it does not fall), so the lining is maintained and menstruation does not happen.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Find the increase and divide by the original mass.", working: "\\frac{3.2 - 0.4}{0.4} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\frac{2.8}{0.4} \\times 100 = 700\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The pill contains oestrogen and progesterone, which keep these hormones at a high level.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "This inhibits the release of FSH from the pituitary gland.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So no eggs mature in the follicles and ovulation does not occur, so there is no egg to be fertilised.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Day 14 (b) LH; progesterone (c) embryo implants in lining; progesterone stays high so no menstruation (d) $700\\%$ (e) oestrogen and progesterone inhibit FSH, so no egg matures and no ovulation",
            commonErrors: ["Giving the answer to (d) as 2.8 kg (the increase) or dividing by 3.2 (giving 87.5%).", "Saying the pill kills sperm.", "Naming FSH as the hormone that causes ovulation."],
            examinerNote: "(a) Allow day 13 to day 15. (b) Allow 'luteinising hormone'. (d) Allow 700. (e) Allow 'thickens cervical mucus' as a creditworthy extra point only, not as a replacement for the FSH point.",
          },
        },
      ],
    },
  ],
};

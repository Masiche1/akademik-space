import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipub-u2-lesson-2-2",
  code: "2-2",
  title: "Inheritance and Genetic Variation",
  goal: "I CAN explain Mendelian inheritance, sex linkage and sources of genetic variation at Pre-U standard.",
  standards: ["Cambridge Pre-U Biology 9769", "Genetics: inheritance"],
  vocabulary: [
    { term: "Allele", definition: "Alternative form of a gene — dominant or recessive." },
    { term: "Genotype", definition: "Genetic make-up (e.g. Bb); phenotype is the expressed characteristic." },
    { term: "Homozygous", definition: "Two identical alleles (BB or bb); heterozygous = two different (Bb)." },
    { term: "Monohybrid cross", definition: "Cross tracking one gene — predicts offspring ratios (3:1 or 1:2:1)." },
    { term: "Sex linkage", definition: "Gene on X or Y chromosome — males more often affected (e.g. colour blindness)." },
    { term: "Codominance", definition: "Both alleles expressed in heterozygote — e.g. ABO blood groups." },
  ],
  concepts: [
    {
      id: "cipub-u2-s1-inheritance",
      title: "Inheritance patterns",
      skill: "Solve monohybrid/dihybrid crosses, explain sex linkage and codominance.",
      lesson: {
        sections: [
          {
            heading: "Mendelian genetics",
            body: "Genes exist as alleles on homologous chromosomes. Dominant alleles mask recessive ones in heterozygotes. **Monohybrid cross** Bb × Bb → genotypes 1BB : 2Bb : 1bb, phenotypes 3 dominant : 1 recessive. Punnett squares or probability trees predict ratios. **Dihybrid cross** (two genes) → 9:3:3:1 phenotypic ratio if unlinked (independent assortment). Test crosses determine unknown genotypes: cross with homozygous recessive reveals carrier status.",
          },
          {
            heading: "Extensions of Mendel",
            body: "**Codominance**: both alleles expressed — ABO blood groups (IA, IB codominant; i recessive → IAIB = AB blood). **Incomplete dominance**: heterozygote intermediate — e.g. snapdragon flower colour (red × white → pink). **Multiple alleles**: more than two alleles exist (ABO has three). **Sex linkage**: genes on X chromosome — males (XY) have only one X so recessive X-linked traits always express (e.g. haemophilia, red-green colour blindness). Y-linked traits pass father→son only.",
          },
          {
            heading: "Sources of variation",
            body: "Genetic variation arises from: **mutation** (ultimate source — new alleles), **meiosis** (independent assortment of chromosomes + crossing over during prophase I creates new allele combinations), **random fertilisation** (which sperm meets which egg). Continuous variation (height, mass) shows a range; discontinuous variation (blood group, eye colour) shows distinct categories. Environmental factors interact with genotype (phenotype = genotype + environment).",
          },
        ],
        keyFormulas: [
          {
            name: "Monohybrid ratio",
            statement: "$Bb \\times Bb \\rightarrow$ genotypes $1:2:1$, phenotypes $3:1$",
          },
          {
            name: "Dihybrid ratio",
            statement: "$AaBb \\times AaBb \\rightarrow$ phenotypes $9:3:3:1$",
          },
        ],
        workedExample: {
          problem: "A carrier mother (XᴴXʰ) and normal father (XᴴY) have a son. What is the probability he has haemophilia?",
          solution:
            "Son gets Y from father, X from mother: P(Xʰ from mother) = 1/2. So 50% chance the son is XʰY (affected).",
        },
      },
      questions: [
        {
          id: "cipub-u2-inh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a monohybrid cross Bb × Bb, what proportion of offspring are carriers (Bb)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "1/2" },
              { id: "c", text: "3/4" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Monohybrid cross",
                statement: "Bb × Bb → 1BB : 2Bb : 1bb.",
              },
            ],
            steps: [{ reasoning: "Carriers Bb = 2/4 = 1/2.", marks: 1, markCode: "A" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipub-u2-inh-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between codominance and incomplete dominance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Codominance vs incomplete dominance",
                statement: "Codominance: both alleles expressed (AB blood). Incomplete: intermediate phenotype (pink flowers).",
              },
            ],
            steps: [
              {
                reasoning: "Codominance: heterozygote shows both traits distinctly — e.g. IAIB = AB blood group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Incomplete dominance: heterozygote intermediate blend — e.g. red × white snapdragon → pink.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Both expressed vs intermediate blend.",
          },
        },
        {
          id: "cipub-u2-inh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why X-linked recessive disorders (e.g. haemophilia) are more common in males than females.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "X-linkage",
                statement: "Males are XY — one X means recessive alleles always express.",
              },
            ],
            steps: [
              {
                reasoning: "Gene is on X chromosome; males have only one X (hemizygous).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No second X allele to mask the recessive — any recessive X allele expresses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Females need two recessive alleles (XX) — rarer; carriers (XᴴXʰ) are unaffected.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Males hemizygous → recessive always expresses.",
          },
        },
        {
          id: "cipub-u2-inh-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe three mechanisms that generate genetic variation in offspring.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Variation sources",
                statement: "Mutation, meiosis (independent assortment + crossing over), random fertilisation.",
              },
            ],
            steps: [
              {
                reasoning: "Mutation: random changes in DNA create new alleles — ultimate source of variation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Meiosis: independent assortment shuffles chromosome combinations; crossing over swaps segments in prophase I.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Random fertilisation: any sperm can fuse with any egg — vast combination possibilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three produce unique genotypes → variation for natural selection to act on.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mutation + meiosis + random fertilisation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipub-u2-inheritance-notes",
      title: "Inheritance — revision notes",
      summary: "Mendelian ratios, codominance, sex linkage, variation sources.",
      sections: [
        {
          heading: "Key skills",
          body: "Draw Punnett squares or probability trees for crosses. For X-linked questions, track which parent contributes the X chromosome.",
        },
        {
          heading: "Exam tips",
          body: "Distinguish genotype from phenotype, homozygous from heterozygous. Codominance ≠ incomplete dominance — know the difference with examples.",
        },
      ],
    },
  ],
};

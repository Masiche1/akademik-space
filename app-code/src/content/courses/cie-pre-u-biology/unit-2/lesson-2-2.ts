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
              { id: "a", text: "1" },
              { id: "b", text: "3/4" },
              { id: "c", text: "1/2" },
              { id: "d", text: "1/4" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cipub-u2-inh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a monohybrid cross between two heterozygotes (Bb × Bb), what percentage of offspring show the dominant phenotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25%" },
              { id: "b", text: "75%" },
              { id: "c", text: "50%" },
              { id: "d", text: "100%" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Monohybrid ratio",
                statement: "$Bb \\times Bb \\rightarrow$ genotypes $1BB : 2Bb : 1bb$, phenotypes $3:1$.",
              },
            ],
            steps: [{ reasoning: "3 of the 4 genotype combinations (BB, Bb, Bb) show the dominant phenotype → 75%.", marks: 1, markCode: "A" }],
            finalAnswer: "(c) 75%",
          },
        },
        {
          id: "cipub-u2-inh-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A monohybrid cross between two heterozygotes produces 400 offspring. How many are expected to be homozygous recessive?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Monohybrid ratio",
                statement: "$Bb \\times Bb \\rightarrow$ genotypes $1:2:1$; homozygous recessive $bb = \\frac{1}{4}$ of offspring.",
              },
            ],
            steps: [
              {
                reasoning: "Homozygous recessive fraction is $\\frac{1}{4}$; $\\frac{1}{4} \\times 400 = 100$ offspring.",
                working: "\\frac{1}{4} \\times 400 = 100",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "100 offspring",
          },
        },
        {
          id: "cipub-u2-inh-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which blood group genotype is an example of codominance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$I^AI^A$" },
              { id: "b", text: "$ii$" },
              { id: "c", text: "$I^Ai$" },
              { id: "d", text: "$I^AI^B$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Codominance in ABO",
                statement: "$I^A$ and $I^B$ are codominant — the heterozygote $I^AI^B$ expresses both antigens, giving blood group AB.",
              },
            ],
            steps: [{ reasoning: "$I^AI^B$ expresses both $I^A$ and $I^B$ alleles equally — the codominant heterozygote.", marks: 1, markCode: "A" }],
            finalAnswer: "(c) $I^AI^B$",
          },
        },
        {
          id: "cipub-u2-inh-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pea plant shows the dominant phenotype for seed colour, but its genotype is unknown (could be YY or Yy). Describe how a test cross can determine which it is.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Test cross",
                statement: "Cross the dominant-phenotype individual with a homozygous recessive (yy) and examine offspring phenotypes.",
              },
            ],
            steps: [
              {
                reasoning: "Cross the unknown plant with a homozygous recessive individual (yy) so the recessive allele is always contributed by one parent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If all offspring show the dominant phenotype the parent was homozygous (YY); if about half show the recessive phenotype it was heterozygous (Yy).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Test cross with homozygous recessive reveals genotype from offspring ratio.",
          },
        },
        {
          id: "cipub-u2-inh-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mother is a carrier for haemophilia (XᴴXʰ) and the father is unaffected (XᴴY). For a randomly chosen child, calculate (a) the probability that a son is affected and (b) the probability that a daughter is affected.",
          response: {
            type: "numeric",
            parts: [
              { label: "P(affected son)", answer: 0.5 },
              { label: "P(affected daughter)", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "X-linked inheritance",
                statement: "Sons receive their only X from the mother; daughters receive one X from each parent — the father's normal Xᴴ masks the recessive allele.",
              },
            ],
            steps: [
              {
                reasoning: "A son gets Y from the father and one of the mother's two X chromosomes: $P(X^h) = \\frac{1}{2}$, so $P(\\text{affected son}) = 0.5$.",
                working: "P = \\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A daughter always receives the father's normal $X^H$, so she must be $X^HX^H$ or $X^HX^h$ — never affected: $P = 0$.",
                working: "P = 0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.5; (b) 0",
          },
        },
        {
          id: "cipub-u2-inh-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following genotypes is heterozygous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$bb$" },
              { id: "b", text: "$BB$" },
              { id: "c", text: "$b$" },
              { id: "d", text: "$Bb$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterozygous",
                statement: "Two different alleles of a gene on homologous chromosomes, e.g. $Bb$.",
              },
            ],
            steps: [{ reasoning: "$Bb$ carries two different alleles — it is heterozygous; $BB$ and $bb$ are homozygous.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) $Bb$",
          },
        },
        {
          id: "cipub-u2-inh-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two plants heterozygous for two unlinked genes ($AaBb$) are crossed. Explain why the offspring phenotypic ratio is $9:3:3:1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dihybrid ratio",
                statement: "$AaBb \\times AaBb \\rightarrow$ phenotypes $9:3:3:1$ when the two genes assort independently.",
              },
            ],
            steps: [
              {
                reasoning: "Because the genes are unlinked, each parent's alleles assort independently, producing four gamete types ($AB$, $Ab$, $aB$, $ab$) in equal proportions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Random fertilisation gives $4 \\times 4 = 16$ equally likely genotype combinations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Grouping by phenotype: 9 show both dominant traits, 3 show only A dominant, 3 show only B dominant, 1 shows both recessive — the $9:3:3:1$ ratio.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Independent assortment → 16 combinations → phenotypes $9:3:3:1$.",
          },
        },
        {
          id: "cipub-u2-inh-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a dihybrid cross between two double heterozygotes ($AaBb \\times AaBb$), what percentage of offspring show both dominant phenotypes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 56.25, unit: "%", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dihybrid ratio",
                statement: "$AaBb \\times AaBb \\rightarrow$ phenotypes $9:3:3:1$ out of 16 combinations.",
              },
            ],
            steps: [
              {
                reasoning: "Both dominant phenotypes correspond to the '9' class: $\\frac{9}{16} \\times 100 = 56.25\\%$.",
                working: "\\frac{9}{16} \\times 100 = 56.25\\%",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "56.25%",
          },
        },
        {
          id: "cipub-u2-inh-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A man with blood group A (genotype $I^Ai$) and a woman with blood group B (genotype $I^Bi$) have a child. What is the probability the child has blood group AB?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ABO codominance",
                statement: "$I^A$ and $I^B$ are codominant; $i$ is recessive — blood group AB requires genotype $I^AI^B$.",
              },
            ],
            steps: [
              {
                reasoning: "Each parent can pass $I^A$ or $i$ (man) and $I^B$ or $i$ (woman); only the $I^A \\times I^B$ combination gives AB: $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) $\\frac{1}{4}$",
          },
        },
        {
          id: "cipub-u2-inh-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways in which meiosis generates genetic variation in the gametes it produces.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meiotic variation",
                statement: "Independent assortment of chromosomes and crossing over between homologous chromatids create new allele combinations.",
              },
            ],
            steps: [
              {
                reasoning: "Independent assortment: homologous chromosome pairs orient randomly at metaphase I, so each gamete receives a different combination of maternal and paternal chromosomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Crossing over: non-sister chromatids of homologous pairs exchange segments during prophase I, producing chromosomes with new allele combinations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Together these mechanisms ensure almost every gamete has a unique genotype, maximising variation in offspring after fertilisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Independent assortment + crossing over in meiosis I.",
          },
        },
        {
          id: "cipub-u2-inh-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a cross between two heterozygotes ($Dd \\times Dd$) where $D$ is dominant, how many of 200 offspring are expected to show the dominant phenotype?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Monohybrid ratio",
                statement: "$Dd \\times Dd \\rightarrow$ phenotypes $3:1$; dominant phenotype $= \\frac{3}{4}$ of offspring.",
              },
            ],
            steps: [
              {
                reasoning: "Dominant phenotype fraction $= \\frac{3}{4}$; $\\frac{3}{4} \\times 200 = 150$ offspring.",
                working: "\\frac{3}{4} \\times 200 = 150",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "150 offspring",
          },
        },
        {
          id: "cipub-u2-inh-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "In snapdragons, crossing a pure red-flowered plant with a pure white-flowered plant produces pink-flowered offspring. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Codominance" },
              { id: "b", text: "Sex linkage" },
              { id: "c", text: "Incomplete dominance" },
              { id: "d", text: "Multiple alleles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete dominance",
                statement: "The heterozygote shows an intermediate phenotype blending both parental traits — red × white → pink.",
              },
            ],
            steps: [{ reasoning: "The heterozygote's pink flowers are an intermediate blend of red and white — incomplete dominance.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) Incomplete dominance",
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

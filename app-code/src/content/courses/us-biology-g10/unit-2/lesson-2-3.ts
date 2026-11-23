import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "bio10-u2-lesson-2-3",
  code: "2-3",
  title: "Mendelian Inheritance",
  goal: "I CAN apply Mendel's laws to predict offspring genotypes and phenotypes using Punnett squares and probability.",
  standards: ["HS-LS3-1", "HS-LS3-2", "HS-LS3-3"],
  vocabulary: [
    { term: "Allele", definition: "A variant form of a gene; e.g., B (brown eyes) vs b (blue eyes)." },
    { term: "Genotype", definition: "The genetic makeup (alleles) of an organism: BB, Bb, or bb." },
    { term: "Phenotype", definition: "The observable trait: brown eyes vs blue eyes." },
    { term: "Dominant allele", definition: "An allele expressed even when only one copy is present (capital letter)." },
    { term: "Recessive allele", definition: "An allele expressed only when two copies are present (lowercase letter)." },
    { term: "Homozygous", definition: "Having two identical alleles (BB or bb)." },
    { term: "Heterozygous", definition: "Having two different alleles (Bb)." },
  ],
  concepts: [
    {
      id: "bio10-u2-mendel-laws",
      title: "Mendel's laws",
      skill: "Apply the law of segregation and law of independent assortment to predict inheritance.",
      lesson: {
        sections: [
          {
            heading: "Law of segregation",
            body: "Mendel's first law: during gamete formation, the two alleles for a gene **separate** so each gamete gets one allele.\n\nFor a heterozygous parent (Bb), half the gametes get B and half get b.",
          },
          {
            heading: "Law of independent assortment",
            body: "Mendel's second law: alleles for different genes assort **independently** during gamete formation (when genes are on different chromosomes).\n\nA parent heterozygous for two genes (BbCc) produces 4 gamete types: BC, bc, Bc, bC in equal proportions.",
          },
          {
            heading: "Punnett squares",
            body: "Punnett squares predict offspring probabilities. For a monohybrid cross (Bb × Bb):\n\n- 1/4 BB, 1/2 Bb, 1/4 bb\n- Phenotype: 3/4 dominant, 1/4 recessive\n\nFor dihybrid cross (BbCc × BbCc): 9/16 dominant-dominant, 3/16, 3/16, 1/16 recessive-recessive.",
          },
        ],
        keyFormulas: [
          { name: "Monohybrid ratio", statement: "Bb × Bb → 1 BB : 2 Bb : 1 bb; phenotype 3:1" },
          { name: "Dihybrid ratio", statement: "BbCc × BbCc → 9:3:3:1 phenotype" },
        ],
        workedExample: {
          problem: "Two heterozygous parents (Bb) have a child. What is the probability the child has blue eyes (bb)?",
          solution: "Punnett square: BB, Bb, Bb, bb. Probability of bb = 1/4 = 25%.",
        },
      },
      questions: [
        {
          id: "bio10-u2-mendel-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a monohybrid cross Bb × Bb, what fraction of offspring are homozygous recessive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "1/2" },
              { id: "c", text: "3/4" },
              { id: "d", text: "1/1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Punnett square", statement: "Bb × Bb → BB, Bb, Bb, bb." }],
            steps: [{ reasoning: "bb (homozygous recessive) appears in 1 of 4 combinations = 1/4.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1/4",
            commonErrors: ["Confusing genotype with phenotype ratio."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "bio10-u2-mendel-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two brown-eyed parents (both Bb) have a child. What is the probability the child has blue eyes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Punnett square", statement: "Bb × Bb → 1/4 bb." }],
            steps: [
              { reasoning: "Both parents are heterozygous (Bb).", marks: 1, markCode: "B" },
              { reasoning: "Punnett: BB, Bb, Bb, bb — bb = blue eyes.", marks: 1, markCode: "M" },
              { reasoning: "Probability = 1/4 = 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4 (25%)",
            commonErrors: ["Thinking two brown-eyed parents can't have blue-eyed child."],
            examinerNote: "B1, M1, A1.",
          },
        },
        {
          id: "bio10-u2-mendel-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A dihybrid cross BbCc × BbCc produces offspring. What is the expected phenotypic ratio?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Independent assortment", statement: "Genes assort independently → 9:3:3:1 ratio." }],
            steps: [
              { reasoning: "Each gene follows 3:1 ratio independently.", marks: 1, markCode: "B" },
              { reasoning: "Combining: (3:1) × (3:1) = 9:3:3:1.", marks: 1, markCode: "M" },
              { reasoning: "Ratio: 9 dominant-dominant : 3 dom-recess : 3 recess-dom : 1 recess-recess.", marks: 1, markCode: "A" },
              { reasoning: "This assumes genes are on different chromosomes (independent assortment).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "9:3:3:1",
            commonErrors: ["Using 3:1 for both genes separately without combining."],
            examinerNote: "B1, M1, A1, R1.",
          },
        },
        {
          id: "bio10-u2-mendel-laws-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "In pea plants, round seeds (R) are dominant to wrinkled (r), and yellow seeds (Y) are dominant to green (y). A plant heterozygous for both traits is crossed with a plant homozygous recessive for both.",
          parts: [
            { label: "a", prompt: "Write the genotypes of both parents.", marks: 1 },
            { label: "b", prompt: "List all possible gametes from each parent.", marks: 3 },
            { label: "c", prompt: "Construct the Punnett square and give the phenotypic ratio of offspring.", marks: 4 },
            { label: "d", prompt: "What is this type of cross called and why is it useful?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Test cross", statement: "Heterozygote × homozygous recessive reveals hidden alleles." },
              { kind: "principle", name: "Independent assortment", statement: "Each gene segregates independently." },
            ],
            steps: [
              { reasoning: "Parent 1: RrYy (heterozygous both); Parent 2: rryy (homozygous recessive both).", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Parent 1 gametes: RY, Ry, rY, ry (4 types, equal probability).", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Parent 2 gametes: ry only.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Punnett square: RrYy (round yellow), Rryy (round green), rrYy (wrinkled yellow), rryy (wrinkled green).", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Phenotypic ratio: 1:1:1:1 — each of the four phenotypes appears once.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Each offspring genotype appears with probability 1/4 because all four gametes are equally likely.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "This is a test cross — crossing with homozygous recessive reveals the heterozygote's gamete types.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Each phenotype appears in equal proportion, confirming independent assortment.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) RrYy × rryy (b) RY,Ry,rY,ry × ry (c) 1:1:1:1 ratio (d) test cross reveals gametes.",
            commonErrors: ["Not listing all 4 gamete types.", "Wrong Punnett square setup."],
            examinerNote: "1+3+4+2 = 10. Part c has only 3 marks but needs 4 — fix below.",
          },
        },
      ],
    },
    {
      id: "bio10-u2-inheritance-patterns",
      title: "Inheritance patterns",
      skill: "Recognize dominant, recessive, codominant, incomplete dominance, sex-linked and polygenic inheritance.",
      lesson: {
        sections: [
          {
            heading: "Beyond simple dominance",
            body: "Mendel studied complete dominance, but other patterns exist:\n\n- **Incomplete dominance**: heterozygote shows intermediate phenotype (red × white snapdragon → pink)\n- **Codominance**: both alleles expressed (AB blood type shows both A and B antigens)\n- **Sex-linked**: genes on X or Y chromosome (color blindness, hemophilia — more common in males)\n- **Polygenic**: multiple genes affect one trait (skin color, height)",
          },
          {
            heading: "Sex-linked inheritance",
            body: "X-linked recessive disorders (color blindness, hemophilia) appear mostly in males because males have only one X chromosome — a single recessive allele is expressed. Females need two copies.",
          },
          {
            heading: "Predicting patterns",
            body: "The ratio reveals the pattern:\n- 3:1 → complete dominance\n- 1:2:1 → incomplete dominance or codominance\n- More complex ratios → sex-linked or polygenic",
          },
        ],
        keyFormulas: [
          { name: "Incomplete dominance", statement: "Rr → intermediate phenotype; ratio 1:2:1" },
          { name: "Codominance", statement: "IA IB → both antigens expressed" },
        ],
        workedExample: {
          problem: "A red-flowered plant (RR) is crossed with white-flowered (rr), producing pink F1. What is the F2 phenotype ratio?",
          solution: "Incomplete dominance: Rr = pink. F2 (Rr × Rr) → 1 red : 2 pink : 1 white.",
        },
      },
      questions: [
        {
          id: "bio10-u2-inheritance-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In incomplete dominance, what phenotype does the heterozygote show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dominant phenotype" },
              { id: "b", text: "Recessive phenotype" },
              { id: "c", text: "Intermediate/blended phenotype" },
              { id: "d", text: "No phenotype" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Incomplete dominance", statement: "Heterozygote shows intermediate trait." }],
            steps: [{ reasoning: "Heterozygote expresses a blend of both alleles' effects.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Intermediate phenotype",
            commonErrors: ["Confusing with codominance."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio10-u2-inheritance-patterns-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are X-linked recessive disorders more common in males than females?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Sex-linked", statement: "Males have one X; females have two X's." }],
            steps: [
              { reasoning: "Males have XY — only one X chromosome carrying the gene.", marks: 1, markCode: "B" },
              { reasoning: "One recessive allele on X is expressed (no second X to mask it).", marks: 1, markCode: "R" },
              { reasoning: "Females have XX — need two recessive alleles to express the disorder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Males express recessive X-linked traits with one allele; females need two.",
            commonErrors: ["Thinking females can't get X-linked disorders."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u2-inheritance-patterns-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant with genotype Rr (incomplete dominance) is self-pollinated. What are the F1 phenotypic ratios?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Incomplete dominance", statement: "Rr = intermediate; RR = dominant; rr = recessive." }],
            steps: [
              { reasoning: "Rr × Rr produces RR, Rr, Rr, rr.", marks: 1, markCode: "M" },
              { reasoning: "Phenotypes: RR = red, Rr = pink, rr = white.", marks: 1, markCode: "B" },
              { reasoning: "Ratio: 1 red : 2 pink : 1 white.", marks: 1, markCode: "A" },
              { reasoning: "This differs from complete dominance (3:1) because heterozygote is intermediate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "1:2:1 (red:pink:white)",
            commonErrors: ["Using 3:1 ratio for incomplete dominance."],
            examinerNote: "M1, B1, A1, R1.",
          },
        },
        {
          id: "bio10-u2-inheritance-patterns-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A woman is a carrier for hemophilia (X-linked recessive). Her partner does not have hemophilia.",
          parts: [
            { label: "a", prompt: "Write the genotypes of both parents.", marks: 2 },
            { label: "b", prompt: "List all possible offspring genotypes and probabilities.", marks: 4 },
            { label: "c", prompt: "What is the probability a son has hemophilia? A daughter?", marks: 2 },
            { label: "d", prompt: "Explain why daughters of carrier mothers are usually unaffected carriers.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "X-linked inheritance", statement: "Males XY, females XX; carrier females pass allele to 50% of sons." },
              { kind: "principle", name: "Punnett square", statement: "X^H X^h × X^H Y → daughters carriers, sons 50% affected." },
            ],
            steps: [
              { reasoning: "Mother: X^H X^h (carrier); Father: X^H Y (normal).", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Daughters: X^H X^H (normal) 1/4, X^H X^h (carrier) 1/4.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Sons: X^H Y (normal) 1/4, X^h Y (hemophilia) 1/4.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Each offspring type has 1/4 probability (or 1/2 for each sex).", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Answer format: genotypes with probabilities listed.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Son has hemophilia: 1/2 (50%) — gets Y from father and X^h from mother.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Daughter has hemophilia: 0% — needs X^h from both parents; father gives X^H.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Daughters get father's normal X^H, so even carriers (X^H X^h) are unaffected phenotypically.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "They can pass the recessive allele to their own sons.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) X^H X^h × X^H Y (b) daughters 1/2 normal, 1/2 carriers; sons 1/2 normal, 1/2 hemophilia (c) son 50%, daughter 0% (d) father's X masks mother's recessive allele.",
            commonErrors: ["Giving daughters hemophilia probability."],
            examinerNote: "2+4+2+2 = 10.",
          },
        },
      ],
    },
  ],
};

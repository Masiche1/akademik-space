import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "olbio-u9-lesson-9-2",
  code: "9-2",
  title: "Monohybrid Inheritance",
  goal: "I CAN use Punnett squares to predict monohybrid cross outcomes and interpret genotypes and phenotypes.",
  standards: ["5090 9.3"],
  vocabulary: [
    { term: "Genotype", definition: "The alleles an organism carries for a gene (e.g. TT, Tt, tt)." },
    { term: "Phenotype", definition: "The observable characteristic (e.g. tall, short)." },
    { term: "Homozygous", definition: "Two identical alleles (TT or tt)." },
    { term: "Heterozygous", definition: "Two different alleles (Tt)." },
    { term: "Dominant", definition: "Allele expressed even when paired with recessive (capital letter)." },
    { term: "Recessive", definition: "Allele only expressed when homozygous (lowercase letter)." },
    { term: "Punnett square", definition: "Grid showing possible offspring genotypes from a cross." },
    { term: "Monohybrid cross", definition: "Cross involving one gene/characteristic." },
  ],
  concepts: [
    {
      id: "olbio-u9-punnett",
      title: "Punnett squares and monohybrid crosses",
      skill: "Construct Punnett squares and predict genotype and phenotype ratios.",
      lesson: {
        sections: [
          {
            heading: "Key terms",
            body: "- **Genotype**: alleles present (TT, Tt, tt).\n- **Phenotype**: what you see (tall/short).\n- **Dominant** (capital): expressed if present.\n- **Recessive** (lowercase): only expressed if homozygous.",
          },
          {
            heading: "Example cross: Tt × Tt",
            body: "```\n    T    t\nT  TT   Tt\nT  TT   Tt\nt  Tt   tt\n```\n\nGenotype ratio: 1 TT : 2 Tt : 1 tt\nPhenotype ratio: 3 tall : 1 short (if T dominant)",
          },
          {
            heading: "Other crosses",
            body: "- **TT × tt**: all Tt → all tall (test cross).\n- **TT × Tt**: all tall (TT or Tt).\n- **Tt × tt**: 1 tall : 1 short.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Two heterozygous tall plants (Tt) are crossed. What proportion of offspring are short?",
          solution: "Punnett: TT, Tt, Tt, tt → 1/4 (25%) are tt = short.",
        },
      },
      questions: [
        {
          id: "olbio-u9-punnett-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the cross Tt × Tt, what is the phenotype ratio if T (tall) is dominant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 tall : 1 short" },
              { id: "b", text: "1 tall : 1 short" },
              { id: "c", text: "All tall" },
              { id: "d", text: "All short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt", statement: "Genotypes TT:Tt:tt = 1:2:1; phenotypes 3:1." },
            ],
            steps: [
              { reasoning: "Recall the ratio.", working: "\\text{3:1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 3 tall : 1 short",
            commonErrors: ["Choosing 1:1 — that's Tt × tt."],
          },
        },
        {
          id: "olbio-u9-punnett-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'heterozygous'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heterozygous", statement: "Two different alleles for a gene (e.g. Tt)." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{two different alleles}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An organism with two different alleles for a gene (e.g. Tt).",
            commonErrors: ["Saying 'two same alleles' — that's homozygous."],
          },
        },
        {
          id: "olbio-u9-punnett-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A tall plant (TT) is crossed with a short plant (tt). Predict the phenotype of all offspring.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "TT × tt", statement: "All offspring Tt → all tall (if T dominant)." },
            ],
            steps: [
              { reasoning: "Gametes: T from TT, t from tt.", working: "\\text{T and t}", marks: 1, markCode: "M" },
              { reasoning: "All offspring Tt.", working: "\\text{all Tt}", marks: 1, markCode: "M" },
              { reasoning: "T dominant → all tall.", working: "\\text{all tall}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All offspring are Tt (heterozygous) and therefore all tall — this is a test cross showing T is dominant.",
            commonErrors: ["Predicting 3:1 — that requires both parents heterozygous."],
          },
        },
        {
          id: "olbio-u9-punnett-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two plants heterozygous for height (Tt) are crossed.",
          parts: [
            { label: "a", prompt: "Draw a Punnett square for this cross.", marks: 3 },
            { label: "b", prompt: "State the genotype ratio of offspring.", marks: 2 },
            { label: "c", prompt: "State the phenotype ratio (T dominant).", marks: 2 },
            { label: "d", prompt: "If 100 offspring are produced, predict the numbers of each phenotype.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt", statement: "Genotypes 1TT:2Tt:1tt; phenotypes 3 tall:1 short." },
            ],
            steps: [
              { part: "a", reasoning: "Correct grid with T,t on axes.", working: "\\text{grid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fill in TT, Tt, Tt, tt.", working: "\\text{genotypes}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct layout.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Genotype ratio 1:2:1.", working: "\\text{1:2:1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State ratio.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Phenotype 3 tall : 1 short.", working: "\\text{3:1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State ratio.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "75 tall, 25 short.", working: "\\text{75:25}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State numbers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Punnett TT,Tt,Tt,tt (b) 1:2:1 (c) 3:1 (d) 75 tall, 25 short",
            commonErrors: ["In (d) forgetting phenotype ≠ genotype — 75 includes TT and Tt."],
          },
        },
      ],
    },
    {
      id: "olbio-u9-sex-determination",
      title: "Sex determination",
      skill: "Explain how sex is determined by X and Y chromosomes and predict sex ratios.",
      lesson: {
        sections: [
          {
            heading: "Sex chromosomes",
            body: "- Females: **XX** (produce only X eggs).\n- Males: **XY** (produce X or Y sperm).\n- Fertilisation: X egg + X sperm → female (XX); X egg + Y sperm → male (XY).",
          },
          {
            heading: "Punnett square",
            body: "```\n    X    Y\nX  XX   XY\nX  XX   XY\n```\n\nGenotype ratio: 1 XX : 1 XY\nPhenotype (sex) ratio: 1 female : 1 male",
          },
          {
            heading: "Key point",
            body: "The **father** determines the sex — his sperm carries either X or Y; the mother's egg always carries X.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A couple has two daughters. What is the probability their next child is a son?",
          solution: "Each pregnancy is independent: 1/2 (50%) chance of XY regardless of previous children.",
        },
      },
      questions: [
        {
          id: "olbio-u9-sex-determination-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which combination of sex chromosomes produces a male?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "XY" },
              { id: "b", text: "XX" },
              { id: "c", text: "YY" },
              { id: "d", text: "X only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex chromosomes", statement: "Male = XY; female = XX." },
            ],
            steps: [
              { reasoning: "Recall the combination.", working: "\\text{XY}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** XY",
            commonErrors: ["Choosing XX — that's female."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State which parent determines the sex of offspring and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "Father — his sperm carries X or Y; mother's egg always X." },
            ],
            steps: [
              { reasoning: "Identify parent.", working: "\\text{father}", marks: 1, markCode: "M" },
              { reasoning: "Explain: sperm X or Y.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The father — his sperm carries either X or Y chromosome, while the mother's egg always carries X.",
            commonErrors: ["Saying 'both parents equally' — only the father carries Y."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cross between a male (XY) and female (XX) produces offspring. Predict the sex ratio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "XY × XX → 1:1 male:female." },
            ],
            steps: [
              { reasoning: "Male gametes: X or Y.", working: "\\text{X or Y sperm}", marks: 1, markCode: "M" },
              { reasoning: "Female gamete: always X.", working: "\\text{X egg}", marks: 1, markCode: "M" },
              { reasoning: "Offspring: XX or XY → 1:1.", working: "\\text{1:1}", marks: 1, markCode: "M" },
              { reasoning: "Conclude sex ratio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 female : 1 male (1:1) — equal probability of XX and XY offspring.",
            commonErrors: ["Predicting 3:1 — sex is a single-gene trait with two outcomes."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how sex is determined in humans.",
          parts: [
            { label: "a", prompt: "State the sex chromosomes of males and females.", marks: 2 },
            { label: "b", prompt: "Describe the gametes produced by each sex.", marks: 3 },
            { label: "c", prompt: "Explain how fertilisation determines sex.", marks: 2 },
            { label: "d", prompt: "Predict the expected sex ratio and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "XX female, XY male; sperm X or Y; 1:1 ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Male XY, female XX.", working: "\\text{XY vs XX}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Males produce X and Y sperm.", working: "\\text{X or Y sperm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Females produce only X eggs.", working: "\\text{X egg only}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State gametes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "X sperm + X egg → female; Y sperm + X egg → male.", working: "\\text{XX vs XY}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete mechanism.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "1:1 ratio — equal chance of X or Y sperm.", working: "\\text{1:1}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State ratio and reason.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) XY male, XX female (b) X/Y sperm vs X egg (c) sperm type determines sex (d) 1:1 — random sperm",
            commonErrors: ["In (d) predicting unequal ratio — it's always ~50:50."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u9-inheritance-notes",
      title: "Monohybrid inheritance — revision notes",
      summary: "Genotype vs phenotype, Punnett squares, monohybrid crosses.",
      sections: [
        {
          heading: "Key terms",
          body: "Genotype = alleles (TT/Tt/tt); phenotype = observable. Dominant (capital) expressed if present; recessive only if homozygous. Homozygous = same alleles; heterozygous = different.",
        },
        {
          heading: "Standard crosses",
          body: "Tt×Tt → 1TT:2Tt:1tt genotype, 3:1 phenotype. TT×tt → all Tt (all dominant phenotype). Tt×tt → 1:1.",
        },
        {
          heading: "Exam technique",
          body: "- Always draw the Punnett square showing gametes on axes.\n- Genotype ratio ≠ phenotype ratio — count carefully.\n- Sex determination: female XX, male XY; father determines sex (X or Y sperm).",
        },
      ],
    },
  ],
};

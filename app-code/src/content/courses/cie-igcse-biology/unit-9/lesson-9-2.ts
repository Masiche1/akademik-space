import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cieb-u9-lesson-9-2",
  code: "9-2",
  title: "Monohybrid Inheritance",
  goal: "I CAN use Punnett squares to predict monohybrid cross outcomes and interpret genotypes and phenotypes.",
  standards: ["0653 9.3"],
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
      id: "cieb-u9-punnett",
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
          id: "cieb-u9-punnett-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the cross Tt × Tt, what is the phenotype ratio if T (tall) is dominant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All tall" },
              { id: "b", text: "1 tall : 1 short" },
              { id: "c", text: "3 tall : 1 short" },
              { id: "d", text: "All short" },
            ],
            correctChoiceId: "c",
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
          id: "cieb-u9-punnett-q2",
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
          id: "cieb-u9-punnett-q3",
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
          id: "cieb-u9-punnett-q4",
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
        {
          id: "cieb-u9-punnett-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a Tt × Tt cross, what is the genotype ratio of the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All Tt" },
              { id: "b", text: "1 TT : 1 tt" },
              { id: "c", text: "1 TT : 2 Tt : 1 tt" },
              { id: "d", text: "2 TT : 2 tt" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt genotypes", statement: "Offspring genotypes: TT, Tt, Tt, tt → 1:2:1." },
            ],
            steps: [
              { reasoning: "Recall the Punnett grid.", working: "\\text{1:2:1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1 TT : 2 Tt : 1 tt",
            commonErrors: ["Confusing genotype ratio with phenotype ratio."],
          },
        },
        {
          id: "cieb-u9-punnett-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'homozygous' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being tall" },
              { id: "b", text: "Producing gametes" },
              { id: "c", text: "Having two different alleles" },
              { id: "d", text: "Having two identical alleles for a gene" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homozygous", statement: "Two identical alleles (TT or tt)." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{same alleles}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Having two identical alleles for a gene",
            commonErrors: ["Confusing with heterozygous — that's two DIFFERENT alleles."],
          },
        },
        {
          id: "cieb-u9-punnett-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a Tt × tt cross (T dominant for tall), what is the phenotype ratio of the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 tall : 1 short" },
              { id: "b", text: "All short" },
              { id: "c", text: "All tall" },
              { id: "d", text: "3 tall : 1 short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × tt", statement: "Offspring Tt and tt → 1 tall : 1 short." },
            ],
            steps: [
              { reasoning: "Gametes: T,t × t,t → Tt, tt.", working: "\\text{1:1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1 tall : 1 short",
            commonErrors: ["Choosing 3:1 — that requires Tt × Tt."],
          },
        },
        {
          id: "cieb-u9-punnett-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which cross produces offspring that are ALL heterozygous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TT × tt" },
              { id: "b", text: "Tt × tt" },
              { id: "c", text: "Tt × Tt" },
              { id: "d", text: "tt × tt" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Test cross", statement: "TT × tt → all offspring Tt (heterozygous)." },
            ],
            steps: [
              { reasoning: "Gametes T and t combine → all Tt.", working: "\\text{all Tt}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** TT × tt",
            commonErrors: ["Choosing Tt × Tt — that gives 1:2:1 genotypes, not all heterozygous."],
          },
        },
        {
          id: "cieb-u9-punnett-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a Tt × Tt cross, what percentage of offspring are heterozygous (Tt)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt", statement: "Genotype ratio 1 TT : 2 Tt : 1 tt → 2/4 = 50% heterozygous." },
            ],
            steps: [
              { reasoning: "2 of 4 offspring are Tt.", working: "\\frac{2}{4} \\times 100 = 50\\%", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Answering 25% — that's the tt fraction."],
          },
        },
        {
          id: "cieb-u9-punnett-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of offspring in a Tt × Tt cross are short (tt)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt phenotypes", statement: "Only tt is short: 1 in 4 = 25%." },
            ],
            steps: [
              { reasoning: "1 of 4 offspring is tt.", working: "\\frac{1}{4} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Answering 75% — that is the tall fraction (3:1)."],
          },
        },
        {
          id: "cieb-u9-punnett-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 400 offspring are produced from a Tt × Tt cross, predict how many are tall (T dominant).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt", statement: "3/4 of offspring are tall." },
            ],
            steps: [
              { reasoning: "3/4 of 400 are tall.", working: "\\frac{3}{4} \\times 400 = 300", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300",
            commonErrors: ["Answering 100 — that's the short (tt) count."],
          },
        },
        {
          id: "cieb-u9-punnett-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many different types of gametes can an organism with genotype Tt produce?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "gamete types" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete types", statement: "Heterozygote Tt produces T and t gametes — 2 types." },
            ],
            steps: [
              { reasoning: "Each allele goes to a different gamete.", working: "\\text{T or t} \\to 2", marks: 1, markCode: "M" },
              { reasoning: "State the number of gamete types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 4 — only 2 gamete types exist for one gene."],
          },
        },
        {
          id: "cieb-u9-punnett-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'genotype' and 'phenotype'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genotype/phenotype", statement: "Genotype = alleles carried; phenotype = observable characteristic." },
            ],
            steps: [
              { reasoning: "Define genotype.", working: "\\text{genotype} = \\text{alleles}", marks: 1, markCode: "M" },
              { reasoning: "Define phenotype.", working: "\\text{phenotype} = \\text{observable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genotype is the combination of alleles an organism carries (e.g. Tt); phenotype is the observable characteristic produced (e.g. tall).",
            commonErrors: ["Reversing the terms — genotype is genetic makeup, phenotype is what you see."],
          },
        },
        {
          id: "cieb-u9-punnett-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a test cross is and predict the outcomes for a tall plant that is TT compared with one that is Tt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Test cross", statement: "Cross with homozygous recessive (tt) reveals the unknown genotype." },
            ],
            steps: [
              { reasoning: "Test cross = cross with homozygous recessive tt.", working: "\\times \\text{tt}", marks: 1, markCode: "M" },
              { reasoning: "TT × tt → all offspring Tt → all tall.", working: "\\text{all tall}", marks: 1, markCode: "M" },
              { reasoning: "Tt × tt → Tt and tt → 1 tall : 1 short.", working: "\\text{1:1}", marks: 1, markCode: "M" },
              { reasoning: "Conclude how genotype is revealed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A test cross uses a homozygous recessive (tt) parent. If the tall plant is TT, all offspring are Tt and tall; if it is Tt, offspring are 1 tall : 1 short — revealing the parent's genotype.",
            commonErrors: ["Crossing with another tall plant — must use homozygous recessive to reveal hidden alleles."],
          },
        },
        {
          id: "cieb-u9-punnett-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a Tt × Tt cross, what proportion of offspring have the genotype TT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All of them" },
              { id: "b", text: "1 in 2" },
              { id: "c", text: "3 in 4" },
              { id: "d", text: "1 in 4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt genotypes", statement: "Genotypes 1 TT : 2 Tt : 1 tt → TT is 1/4." },
            ],
            steps: [
              { reasoning: "Count TT in the Punnett grid.", working: "\\frac{1}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1 in 4",
            commonErrors: ["Choosing 1 in 2 — that would be TT + Tt combined if miscounted."],
          },
        },
        {
          id: "cieb-u9-punnett-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dominant allele is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only appears in gametes" },
              { id: "b", text: "Is expressed even when paired with a recessive allele" },
              { id: "c", text: "Is always lowercase" },
              { id: "d", text: "Is never expressed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dominant allele", statement: "Expressed even in heterozygotes; written with a capital letter." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{dominant} = \\text{expressed if present}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Is expressed even when paired with a recessive allele",
            commonErrors: ["Saying it's never expressed — dominant alleles are expressed whenever present."],
          },
        },
      ],
    },
    {
      id: "cieb-u9-sex-determination",
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
          id: "cieb-u9-sex-determination-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which combination of sex chromosomes produces a male?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X only" },
              { id: "b", text: "XX" },
              { id: "c", text: "YY" },
              { id: "d", text: "XY" },
            ],
            correctChoiceId: "d",
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
          id: "cieb-u9-sex-determination-q2",
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
          id: "cieb-u9-sex-determination-q3",
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
          id: "cieb-u9-sex-determination-q4",
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
        {
          id: "cieb-u9-sex-determination-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sex chromosomes does a human female have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "XY" },
              { id: "b", text: "YY" },
              { id: "c", text: "XO" },
              { id: "d", text: "XX" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex chromosomes", statement: "Female = XX; male = XY." },
            ],
            steps: [
              { reasoning: "Recall the combination.", working: "\\text{female} = \\text{XX}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** XX",
            commonErrors: ["Choosing XY — that's male."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sex chromosomes does a human male have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "XX" },
              { id: "b", text: "X only" },
              { id: "c", text: "YY" },
              { id: "d", text: "XY" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex chromosomes", statement: "Male = XY; female = XX." },
            ],
            steps: [
              { reasoning: "Recall the combination.", working: "\\text{male} = \\text{XY}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** XY",
            commonErrors: ["Choosing XX — that's female."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which parent's gamete determines the sex of the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mother — her egg carries X or Y" },
              { id: "b", text: "Both equally" },
              { id: "c", text: "The father — his sperm carries X or Y" },
              { id: "d", text: "Neither — it is random chance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "Father's sperm carries X or Y; mother's egg always carries X." },
            ],
            steps: [
              { reasoning: "Identify who carries Y.", working: "\\text{sperm: X or Y}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The father — his sperm carries X or Y",
            commonErrors: ["Choosing mother — her eggs only carry X."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a sperm carrying a Y chromosome fertilises an egg, the resulting child will be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Either — cannot predict" },
              { id: "b", text: "Female" },
              { id: "c", text: "Male" },
              { id: "d", text: "A carrier" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "X egg + Y sperm → XY → male." },
            ],
            steps: [
              { reasoning: "Combine gametes.", working: "\\text{X egg} + \\text{Y sperm} = \\text{XY} = \\text{male}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Male",
            commonErrors: ["Choosing female — XX requires an X-bearing sperm."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the probability that a randomly chosen newborn baby is male, as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "Equal chance of X or Y sperm → ~50% male." },
            ],
            steps: [
              { reasoning: "Recall the ratio.", working: "\\frac{1}{2} \\times 100 = 50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Answering 25% — sex is determined by one chromosome pair, not two."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 200 children are born, predict how many are expected to be male.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "children" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "1:1 male:female ratio → half of offspring are male." },
            ],
            steps: [
              { reasoning: "Half of 200 is male.", working: "200 \\div 2 = 100", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100",
            commonErrors: ["Answering 200 — only half are expected to be male."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "State the number of X chromosomes carried by a human egg cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1, unit: "X chromosome" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Female gamete", statement: "Eggs always carry a single X chromosome." },
            ],
            steps: [
              { reasoning: "Recall the egg's chromosome.", working: "\\text{egg: X}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 2 — eggs are haploid, carrying one sex chromosome."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A couple already has four daughters. State the expected number of sons among their next four children.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "sons" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination independence", statement: "Each pregnancy has an independent 1/2 chance of a son." },
            ],
            steps: [
              { reasoning: "Previous daughters do not affect odds.", working: "\\frac{1}{2} \\times 4 = 2", marks: 1, markCode: "M" },
              { reasoning: "State the expected number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 0 or 4 — past children do not change the 50:50 odds."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the gametes produced by males and by females in humans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex gametes", statement: "Males produce X- and Y-bearing sperm; females produce only X-bearing eggs." },
            ],
            steps: [
              { reasoning: "Male gametes.", working: "\\text{sperm: X or Y}", marks: 1, markCode: "M" },
              { reasoning: "Female gametes.", working: "\\text{egg: X only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Males produce sperm carrying either an X or a Y chromosome; females produce eggs that always carry an X chromosome.",
            commonErrors: ["Saying females produce Y eggs — only males carry the Y chromosome."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the sex of each child is independent of the sex of previous children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Independent assortment of sex", statement: "Each fertilisation is a new random event: 50% X sperm, 50% Y sperm." },
            ],
            steps: [
              { reasoning: "Each sperm has an independent 50% chance of X or Y.", working: "\\text{50\\% X, 50\\% Y}", marks: 1, markCode: "M" },
              { reasoning: "The mother's egg always carries X.", working: "\\text{egg: X}", marks: 1, markCode: "M" },
              { reasoning: "Previous children do not change the gamete probabilities.", working: "\\text{independent events}", marks: 1, markCode: "M" },
              { reasoning: "Conclude sex cannot be predicted from family history.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each fertilisation is an independent random event — the father's sperm has a 50% chance of carrying X or Y while the mother's egg always carries X, so previous children do not influence the sex of the next child.",
            commonErrors: ["Saying 'they've had 4 girls so a boy is due' — outcomes are independent."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which parent always contributes an X chromosome to the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mother" },
              { id: "b", text: "Neither parent" },
              { id: "c", text: "The father" },
              { id: "d", text: "Both parents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "Mother's egg always carries X; father's sperm carries X or Y." },
            ],
            steps: [
              { reasoning: "Recall who supplies X always.", working: "\\text{mother: X egg}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The mother",
            commonErrors: ["Choosing father — his sperm may carry X OR Y."],
          },
        },
        {
          id: "cieb-u9-sex-determination-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the expected sex ratio at birth in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All female" },
              { id: "b", text: "2 female : 1 male" },
              { id: "c", text: "1 female : 1 male" },
              { id: "d", text: "1 female : 2 male" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "Equal probability of X and Y sperm → 1:1 ratio." },
            ],
            steps: [
              { reasoning: "Recall the ratio.", working: "\\text{1:1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1 female : 1 male",
            commonErrors: ["Choosing an unequal ratio — it's always approximately 50:50."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u9-inheritance-notes",
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

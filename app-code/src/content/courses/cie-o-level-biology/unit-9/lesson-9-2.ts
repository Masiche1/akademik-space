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
              { id: "a", text: "All tall" },
              { id: "b", text: "All short" },
              { id: "c", text: "1 tall : 1 short" },
              { id: "d", text: "3 tall : 1 short" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt", statement: "Genotypes TT:Tt:tt = 1:2:1; phenotypes 3:1." },
            ],
            steps: [
              { reasoning: "Recall the ratio.", working: "\\text{3:1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 3 tall : 1 short",
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
        {
          id: "olbio-u9-punnett-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the cross Tt × tt, what is the expected phenotype ratio if T is dominant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All short" },
              { id: "b", text: "All tall" },
              { id: "c", text: "3 tall : 1 short" },
              { id: "d", text: "1 tall : 1 short" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × tt", statement: "Offspring are Tt or tt, giving a 1:1 phenotype ratio." },
            ],
            steps: [
              { reasoning: "Gametes T,t × t,t give Tt and tt equally.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 1 tall : 1 short",
            commonErrors: ["Choosing 3:1 — that requires Tt × Tt."],
          },
        },
        {
          id: "olbio-u9-punnett-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the cross TT × tt, what genotype will all offspring have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TT" },
              { id: "b", text: "TT and tt equally" },
              { id: "c", text: "Tt" },
              { id: "d", text: "tt" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "TT × tt", statement: "All offspring receive T from one parent and t from the other." },
            ],
            steps: [
              { reasoning: "Combine T gamete with t gamete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Tt",
            commonErrors: ["Choosing TT — the tt parent can only give t."],
          },
        },
        {
          id: "olbio-u9-punnett-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a phenotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A gamete produced by meiosis" },
              { id: "b", text: "The alleles an organism carries" },
              { id: "c", text: "The observable characteristic of an organism" },
              { id: "d", text: "A type of chromosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phenotype", statement: "The observable characteristic produced by the genotype." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The observable characteristic of an organism",
            commonErrors: ["Confusing phenotype with genotype."],
          },
        },
        {
          id: "olbio-u9-punnett-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For a recessive trait such as short height (tt), an organism showing the recessive phenotype must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heterozygous TT" },
              { id: "b", text: "Any genotype" },
              { id: "c", text: "Homozygous dominant TT" },
              { id: "d", text: "Homozygous recessive tt" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Recessive phenotype", statement: "A recessive trait is expressed only when homozygous recessive." },
            ],
            steps: [
              { reasoning: "Recessive alleles need two copies to show.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Homozygous recessive tt",
            commonErrors: ["Choosing heterozygous — the dominant allele would mask the trait."],
          },
        },
        {
          id: "olbio-u9-punnett-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a monohybrid cross?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cross between identical twins" },
              { id: "b", text: "A cross involving two genes" },
              { id: "c", text: "A cross involving one gene/characteristic" },
              { id: "d", text: "A cross used only in animals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monohybrid cross", statement: "A breeding cross tracking a single gene." },
            ],
            steps: [
              { reasoning: "Recall the term.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A cross involving one gene/characteristic",
            commonErrors: ["Choosing two genes — that would be a dihybrid cross."],
          },
        },
        {
          id: "olbio-u9-punnett-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two heterozygous tall plants (Tt) produce 400 offspring. Predict the number showing the short phenotype.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt phenotype", statement: "Short phenotype is tt, expected in 1/4 of offspring." },
            ],
            steps: [
              { reasoning: "Apply the 3:1 phenotype ratio.", working: "400 × 1/4 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 offspring",
            commonErrors: ["Using the genotype ratio — short phenotype equals tt only."],
          },
        },
        {
          id: "olbio-u9-punnett-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Tt plant is crossed with a tt plant and produces 200 offspring. Predict the number showing the tall phenotype.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × tt", statement: "Phenotype ratio is 1 tall : 1 short." },
            ],
            steps: [
              { reasoning: "Half the offspring are tall Tt.", working: "200 × 1/2 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 offspring",
            commonErrors: ["Using 3:1 — that is for Tt × Tt."],
          },
        },
        {
          id: "olbio-u9-punnett-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A TT plant is crossed with a tt plant and 160 offspring are produced. Predict how many show the tall phenotype.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 160, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "TT × tt", statement: "All offspring are Tt and therefore tall." },
            ],
            steps: [
              { reasoning: "All offspring show the dominant phenotype.", working: "160 × 1 = 160", marks: 1, markCode: "M" },
            ],
            finalAnswer: "160 offspring",
            commonErrors: ["Predicting only 75% tall — that assumes a heterozygous cross."],
          },
        },
        {
          id: "olbio-u9-punnett-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For a Tt × Tt cross, enter the expected percentage of offspring for TT (a), Tt (b) and tt (c) in that order.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25, unit: "%" },
              { label: "b", answer: 50, unit: "%" },
              { label: "c", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt genotypes", statement: "Genotypes are TT : Tt : tt = 1 : 2 : 1." },
            ],
            steps: [
              { reasoning: "Convert 1 part of 4 to a percentage.", working: "1/4 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "Convert 2 parts of 4 to a percentage.", working: "2/4 = 50\\%", marks: 1, markCode: "M" },
              { reasoning: "Assign TT = 25%, Tt = 50%, tt = 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "TT = 25%; Tt = 50%; tt = 25%",
            commonErrors: ["Giving a 3:1 phenotype answer instead of genotype percentages."],
          },
        },
        {
          id: "olbio-u9-punnett-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two heterozygous plants (Tt) produce 500 offspring. Enter the expected number of TT (a), Tt (b) and tt (c) in that order.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 125, unit: "offspring" },
              { label: "b", answer: 250, unit: "offspring" },
              { label: "c", answer: 125, unit: "offspring" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tt × Tt counts", statement: "Genotype ratio 1:2:1 applied to 500 offspring." },
            ],
            steps: [
              { reasoning: "TT is one quarter of offspring.", working: "500 × 1/4 = 125", marks: 1, markCode: "M" },
              { reasoning: "Tt is one half of offspring.", working: "500 × 1/2 = 250", marks: 1, markCode: "M" },
              { reasoning: "tt is one quarter of offspring.", working: "500 × 1/4 = 125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "TT = 125; Tt = 250; tt = 125",
            commonErrors: ["Using phenotype counts for genotype categories — Tt is not the same as tall."],
          },
        },
        {
          id: "olbio-u9-punnett-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a Tt × Tt cross, what proportion of offspring are heterozygous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1/4" },
              { id: "c", text: "3/4" },
              { id: "d", text: "All" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heterozygote frequency", statement: "Tt occurs in 2 of the 4 Punnett boxes." },
            ],
            steps: [
              { reasoning: "Two of four boxes are Tt.", working: "2/4 = 1/2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1/2",
            commonErrors: ["Choosing 3/4 — that is the dominant phenotype, not heterozygotes."],
          },
        },
        {
          id: "olbio-u9-punnett-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the genotype ratio and phenotype ratio can differ in a monohybrid cross.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Genotype vs phenotype", statement: "Dominant and heterozygous genotypes can give the same phenotype." },
            ],
            steps: [
              { reasoning: "Genotype ratio counts alleles directly.", working: "\\text{TT:Tt:tt}", marks: 1, markCode: "M" },
              { reasoning: "Phenotype ratio counts observable traits.", working: "\\text{tall/short}", marks: 1, markCode: "M" },
              { reasoning: "TT and Tt both show the dominant phenotype.", working: "\\text{dominant masks}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the ratios differ when alleles are dominant/recessive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genotype ratio counts each allele combination (TT, Tt, tt), while phenotype ratio counts visible traits; because both TT and Tt show the dominant phenotype, phenotypes collapse to 3:1 while genotypes remain 1:2:1.",
            commonErrors: ["Saying the ratios are always identical — they differ under dominance."],
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
              { id: "a", text: "X only" },
              { id: "b", text: "YY" },
              { id: "c", text: "XY" },
              { id: "d", text: "XX" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex chromosomes", statement: "Male = XY; female = XX." },
            ],
            steps: [
              { reasoning: "Recall the combination.", working: "\\text{XY}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** XY",
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
        {
          id: "olbio-u9-sex-determination-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What chromosome does the mother's egg always carry for sex determination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "X or Y" },
              { id: "c", text: "Y only" },
              { id: "d", text: "X only" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Female gamete", statement: "Females are XX and produce only X eggs." },
            ],
            steps: [
              { reasoning: "Recall female gamete content.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** X only",
            commonErrors: ["Choosing X or Y — that describes sperm, not eggs."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sex chromosomes can a father's sperm carry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "XX or XY pairs" },
              { id: "b", text: "X or Y" },
              { id: "c", text: "Y only" },
              { id: "d", text: "X only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Male gamete", statement: "Males are XY and produce X or Y sperm." },
            ],
            steps: [
              { reasoning: "Recall male gamete content.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** X or Y",
            commonErrors: ["Choosing X only — that is the egg."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which genotype produces a female offspring after fertilisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "XX" },
              { id: "b", text: "YY" },
              { id: "c", text: "XY" },
              { id: "d", text: "XO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex genotype", statement: "Female = XX; male = XY." },
            ],
            steps: [
              { reasoning: "Match genotype to sex.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** XX",
            commonErrors: ["Choosing XY — that is male."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A couple already has four daughters. What is the probability their fifth child is a son?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1" },
              { id: "c", text: "0" },
              { id: "d", text: "1/4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Independent events", statement: "Each fertilisation has an independent 1/2 chance of XY." },
            ],
            steps: [
              { reasoning: "Previous children do not change the probability.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1/2",
            commonErrors: ["Choosing 0 — the 'balancing' idea is a fallacy."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What determines the sex of a human offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The timing of ovulation" },
              { id: "b", text: "The number of chromosomes in the egg" },
              { id: "c", text: "The father's sperm" },
              { id: "d", text: "The mother's egg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "Sperm carrying X or Y decides XX female or XY male." },
            ],
            steps: [
              { reasoning: "Identify the deciding gamete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The father's sperm",
            commonErrors: ["Choosing the egg — eggs always carry X."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a large sample of 200 babies, enter the expected numbers of boys and girls.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100, unit: "boys" },
              { label: "b", answer: 100, unit: "girls" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "Expected sex ratio is 1 male : 1 female." },
            ],
            steps: [
              { reasoning: "Half the births are male.", working: "200 × 1/2 = 100", marks: 1, markCode: "M" },
              { reasoning: "The remainder are female.", working: "200 - 100 = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 boys; 100 girls",
            commonErrors: ["Assuming an unequal ratio — the expected ratio is 1:1."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 400 fertilisations, enter the expected numbers fertilised by X-carrying sperm and by Y-carrying sperm.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "fertilisations" },
              { label: "b", answer: 200, unit: "fertilisations" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sperm types", statement: "Sperm are produced equally as X and Y carriers." },
            ],
            steps: [
              { reasoning: "X sperm fertilise half the eggs.", working: "400 × 1/2 = 200", marks: 1, markCode: "M" },
              { reasoning: "Y sperm fertilise the other half.", working: "400 - 200 = 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 by X sperm; 200 by Y sperm",
            commonErrors: ["Counting eggs — the variable gamete is sperm."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Express the probability that a randomly selected newborn is male as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex probability", statement: "P(male) = 1/2 = 50%." },
            ],
            steps: [
              { reasoning: "Convert the probability to a percentage.", working: "1/2 × 100 = 50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Answering 1 — the question asks for a percentage."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the probability, as a percentage, that three consecutive children are all girls?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent probabilities", statement: "P(all girls) = (1/2)^3." },
            ],
            steps: [
              { reasoning: "Multiply the independent probabilities and convert to a percentage.", working: "(1/2)^3 × 100 = 12.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "12.5%",
            commonErrors: ["Using 1/2 instead of multiplying for three births."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hospital records 1000 births. Predict the expected number of boys.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 500, unit: "boys" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "Expected male births are half of all births." },
            ],
            steps: [
              { reasoning: "Apply the 1:1 sex ratio.", working: "1000 × 1/2 = 500", marks: 1, markCode: "M" },
            ],
            finalAnswer: "500 boys",
            commonErrors: ["Using 25% or 75% — sex is not a 3:1 trait."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If every sperm produced by a father carried a Y chromosome, what would be the sex of all his children with a normal mother?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All male" },
              { id: "b", text: "All female" },
              { id: "c", text: "Half male, half female" },
              { id: "d", text: "It would depend on the mother's chromosomes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex determination", statement: "Y sperm + X egg always gives XY male." },
            ],
            steps: [
              { reasoning: "Every fertilisation would be XY.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** All male",
            commonErrors: ["Thinking the mother can override the sperm's Y chromosome."],
          },
        },
        {
          id: "olbio-u9-sex-determination-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the sex ratio of human births is approximately 1:1.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex ratio", statement: "Males produce X and Y sperm equally; eggs are always X." },
            ],
            steps: [
              { reasoning: "Female produces only X eggs.", working: "\\text{X egg}", marks: 1, markCode: "M" },
              { reasoning: "Male produces equal numbers of X and Y sperm.", working: "\\text{X or Y sperm}", marks: 1, markCode: "M" },
              { reasoning: "Fertilisation gives XX female or XY male with equal probability.", working: "\\text{1:1}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the expected ratio is about 1 male : 1 female.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Because males produce X and Y sperm in equal numbers while eggs always carry X, fertilisation produces XX females and XY males with equal probability, giving an expected sex ratio of about 1:1.",
            commonErrors: ["Saying the ratio is fixed — it is a probability, not a guarantee."],
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

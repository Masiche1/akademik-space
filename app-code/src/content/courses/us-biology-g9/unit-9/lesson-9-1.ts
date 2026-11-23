import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "bio9-u9-lesson-9-1",
  code: "9-1",
  title: "Mendelian Inheritance",
  goal: "I CAN apply Punnett squares to predict offspring genotypes and phenotypes for monohybrid and dihybrid crosses.",
  standards: [
    "HS-LS3-1",
    "HS-LS3-2",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Mathematical and Computational Thinking",
  ],
  vocabulary: [
    { term: "Allele", definition: "Alternative version of a gene." },
    { term: "Genotype", definition: "Genetic makeup (allele combination)." },
    { term: "Phenotype", definition: "Observable trait." },
    { term: "Dominant", definition: "Allele expressed with one copy." },
    { term: "Recessive", definition: "Allele expressed only with two copies." },
    { term: "Homozygous", definition: "Two identical alleles (AA or aa)." },
    { term: "Heterozygous", definition: "Two different alleles (Aa)." },
    {
      term: "Punnett square",
      definition: "Grid predicting offspring genotypes.",
    },
  ],
  concepts: [
    {
      id: "bio9-u9-mendelian-basics",
      title: "Mendelian inheritance basics",
      skill:
        "Define key genetic terms and predict simple inheritance patterns.",
      lesson: {
        sections: [
          {
            heading: "Key terms",
            body: "- **Allele**: alternative version of gene (e.g., B or b).\n- **Genotype**: allele combination (BB, Bb, bb).\n- **Phenotype**: observable trait (brown eyes, blue eyes).\n- **Dominant**: expressed with one copy (B).\n- **Recessive**: needs two copies (bb).\n- **Homozygous**: BB or bb. **Heterozygous**: Bb.",
          },
          {
            heading: "Mendel's laws",
            body: "- **Law of segregation**: alleles separate during gamete formation.\n- **Law of independent assortment**: genes for different traits assort independently.",
          },
        ],
        keyFormulas: [
          {
            name: "Dominant",
            statement: "Expressed with one copy (Aa → dominant phenotype).",
          },
          {
            name: "Recessive",
            statement: "Needs two copies (aa → recessive phenotype).",
          },
          {
            name: "Monohybrid ratio",
            statement: "3:1 dominant:recessive phenotype.",
          },
        ],
        workedExample: {
          problem: "What phenotype does Bb show if B is dominant?",
          solution: "Dominant phenotype — B expressed even with one copy.",
        },
      },
      questions: [
        {
          id: "bio9-u9-mendel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a heterozygous genotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AA" },
              { id: "b", text: "Aa" },
              { id: "c", text: "aa" },
              { id: "d", text: "A only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterozygous",
                statement: "Two different alleles (Aa).",
              },
            ],
            steps: [
              {
                reasoning: "Heterozygous = two different alleles.",
                evidence: "Aa",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Aa.",
            commonErrors: ["Choosing (a): that's homozygous dominant."],
          },
        },
        {
          id: "bio9-u9-mendel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two heterozygous parents (Bb × Bb) have children. What's the phenotypic ratio?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Monohybrid ratio",
                statement: "3:1 dominant:recessive.",
              },
            ],
            steps: [
              {
                reasoning: "Punnett: BB, Bb, Bb, bb.",
                evidence: "genotypes",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phenotypes: 3 dominant, 1 recessive.",
                evidence: "phenotypes",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio = 3:1.",
                evidence: "3:1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3:1 dominant:recessive.",
            commonErrors: ["Counting genotypes not phenotypes."],
          },
        },
        {
          id: "bio9-u9-mendel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Mendel's law of segregation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Segregation",
                statement: "Alleles separate during gamete formation.",
              },
            ],
            steps: [
              {
                reasoning: "Each individual has two alleles for each gene.",
                evidence: "two alleles",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "During meiosis, alleles separate into different gametes.",
                evidence: "meiosis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each gamete gets one allele randomly.",
                evidence: "random",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "This explains 3:1 ratios in monohybrid crosses.",
                evidence: "3:1",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Alleles separate during gamete formation → random gamete combinations.",
            commonErrors: ["Not mentioning meiosis."],
          },
        },
        {
          id: "bio9-u9-mendel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A homozygous dominant parent (BB) crosses with heterozygous (Bb).",
          parts: [
            { label: "a", prompt: "Genotypes of parents?", marks: 1 },
            { label: "b", prompt: "Possible offspring genotypes?", marks: 3 },
            { label: "c", prompt: "Phenotypic ratio?", marks: 2 },
            { label: "d", prompt: "Probability of bb offspring?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Monohybrid cross",
                statement: "BB × Bb → all dominant.",
              },
            ],
            steps: [
              { part: "a", reasoning: "BB and Bb.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "BB or Bb (50% each).",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "All dominant phenotype.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "0% — bb impossible (no b allele in BB parent).",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) BB, Bb (b) BB or Bb (c) All dominant (d) 0%.",
            commonErrors: ["Thinking bb is possible."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-dihybrid",
      title: "Dihybrid Crosses",
      skill:
        "Apply Punnett squares to two-trait crosses and predict phenotypic ratios.",
      lesson: {
        sections: [
          {
            heading: "Dihybrid crosses",
            body: "**Dihybrid cross** tracks two traits simultaneously:\n\n- For YyRr × YyRr (both heterozygous): 16 possible combinations.\n- Phenotypic ratio: **9:3:3:1** (both dominant : dominant/recessive : recessive/dominant : both recessive).\n- Genotypic ratio: 1:2:1:2:4:2:1:2:1.",
          },
          {
            heading: "Independent assortment",
            body: "Mendel's law of independent assortment: genes for different traits assort independently during gamete formation. This assumes genes are on different chromosomes or far apart.",
          },
        ],
        keyFormulas: [
          {
            name: "Dihybrid ratio",
            statement: "9:3:3:1 phenotypic for two dominant traits.",
          },
          {
            name: "Independent assortment",
            statement: "Genes assort independently.",
          },
          {
            name: "16 combinations",
            statement: "4×4 Punnett square for dihybrid.",
          },
        ],
        workedExample: {
          problem: "YyRr × YyRr — what fraction shows both dominant traits?",
          solution: "9/16 — the 9 in the 9:3:3:1 ratio.",
        },
      },
      questions: [
        {
          id: "bio9-u9-dihybrid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a dihybrid cross?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One trait cross" },
              { id: "b", text: "Two trait cross" },
              { id: "c", text: "Three trait cross" },
              { id: "d", text: "Test cross" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dihybrid",
                statement: "Cross tracking two traits.",
              },
            ],
            steps: [
              {
                reasoning: "Dihybrid = two traits tracked simultaneously.",
                evidence: "two traits",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Two trait cross.",
            commonErrors: ["Choosing (a): that's monohybrid."],
          },
        },
        {
          id: "bio9-u9-dihybrid-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What's the phenotypic ratio for YyRr × YyRr?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dihybrid ratio",
                statement: "9:3:3:1.",
              },
            ],
            steps: [
              {
                reasoning:
                  "16 combinations → 9 both dominant, 3 dom/recess, 3 recess/dom, 1 both recessive.",
                evidence: "16",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio = 9:3:3:1.",
                evidence: "9:3:3:1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Assumes independent assortment.",
                evidence: "independent",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "9:3:3:1.",
            commonErrors: ["Using 3:1 ratio."],
          },
        },
        {
          id: "bio9-u9-dihybrid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What fraction of YyRr × YyRr offspring show both recessive traits?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dihybrid ratio",
                statement: "Both recessive = 1/16.",
              },
            ],
            steps: [
              {
                reasoning: "9:3:3:1 ratio → last term is both recessive.",
                evidence: "ratio",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both recessive = yyrr = 1/16.",
                evidence: "1/16",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Requires yy (1/4) AND rr (1/4) = 1/16.",
                evidence: "independent",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1/16 or 6.25%.",
                evidence: "answer",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1/16 (6.25%).",
            commonErrors: ["Getting 1/4 or 1/8."],
          },
        },
        {
          id: "bio9-u9-dihybrid-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two traits: seed color (Y=yellow, y=green) and shape (R=round, r=wrinkled).",
          parts: [
            { label: "a", prompt: "What does YyRr phenotype show?", marks: 2 },
            {
              label: "b",
              prompt: "Phenotypic ratio for YyRr × YyRr?",
              marks: 2,
            },
            { label: "c", prompt: "Fraction showing yellow round?", marks: 2 },
            {
              label: "d",
              prompt: "Fraction showing green wrinkled?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dihybrid",
                statement: "9:3:3:1 ratio.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Yellow round (both dominant).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "9:3:3:1 (YR : Ywr : yR : ywr).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "9/16 yellow round.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "1/16 green wrinkled.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Yellow round (b) 9:3:3:1 (c) 9/16 (d) 1/16.",
            commonErrors: ["Wrong ratio interpretation."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-non-mendelian",
      title: "Non-Mendelian Inheritance",
      skill:
        "Describe incomplete dominance, codominance, multiple alleles, sex-linked and polygenic inheritance.",
      lesson: {
        sections: [
          {
            heading: "Non-Mendelian patterns",
            body: "- **Incomplete dominance**: heterozygote shows intermediate phenotype (e.g., pink flowers from red × white).\n- **Codominance**: both alleles expressed (e.g., AB blood type).\n- **Multiple alleles**: more than two alleles exist (e.g., ABO blood: Iᴬ, Iᴮ, i).\n- **Sex-linked**: genes on X or Y chromosome (e.g., color blindness, hemophilia).\n- **Polygenic**: multiple genes affect one trait (e.g., height, skin color).",
          },
          {
            heading: "Key differences",
            body: "These patterns deviate from simple dominant/recessive:\n- Incomplete dominance: heterozygote ≠ either parent.\n- Codominance: both alleles visible.\n- Sex-linked: males affected more (one X).\n- Polygenic: continuous variation (bell curve).",
          },
        ],
        keyFormulas: [
          {
            name: "Incomplete dominance",
            statement: "Heterozygote = intermediate phenotype.",
          },
          { name: "Codominance", statement: "Both alleles expressed (AB)." },
          {
            name: "Sex-linked",
            statement: "On sex chromosomes; males more affected.",
          },
          {
            name: "Polygenic",
            statement: "Multiple genes → continuous variation.",
          },
        ],
        workedExample: {
          problem:
            "Red flower (RR) × white flower (rr) → all pink (Rr). What pattern?",
          solution:
            "Incomplete dominance — heterozygote shows intermediate phenotype.",
        },
      },
      questions: [
        {
          id: "bio9-u9-nonmendel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is incomplete dominance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both alleles expressed" },
              { id: "b", text: "Heterozygote shows intermediate phenotype" },
              { id: "c", text: "Multiple alleles" },
              { id: "d", text: "Sex-linked trait" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete dominance",
                statement: "Heterozygote = intermediate phenotype.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Incomplete dominance → heterozygote shows blend of both traits.",
                evidence: "intermediate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Heterozygote shows intermediate phenotype.",
            commonErrors: ["Choosing (a): that's codominance."],
          },
        },
        {
          id: "bio9-u9-nonmendel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between incomplete dominance and codominance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete vs codominance",
                statement: "Intermediate vs both expressed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Incomplete dominance: heterozygote shows intermediate (pink from red×white).",
                evidence: "incomplete",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Codominance: both alleles expressed (AB blood shows both A and B).",
                evidence: "codominance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Incomplete = blend; codominance = both visible.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Incomplete = intermediate; codominance = both expressed.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "bio9-u9-nonmendel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are X-linked disorders more common in males?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "X-linked",
                statement: "Males have one X; females have two.",
              },
            ],
            steps: [
              {
                reasoning: "Males: XY — one X chromosome.",
                evidence: "XY",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Females: XX — two X chromosomes.",
                evidence: "XX",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Male with recessive allele on X expresses it (no second X).",
                evidence: "male express",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Females need two recessive alleles (one on each X).",
                evidence: "female need two",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Males have one X; recessive allele expressed without compensation.",
            commonErrors: ["Saying males are more susceptible."],
          },
        },
        {
          id: "bio9-u9-nonmendel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "ABO blood groups have three alleles: Iᴬ, Iᴮ, i.",
          parts: [
            { label: "a", prompt: "What are the phenotypes?", marks: 2 },
            { label: "b", prompt: "What genotypes produce type AB?", marks: 2 },
            { label: "c", prompt: "What genotypes produce type O?", marks: 2 },
            { label: "d", prompt: "What inheritance pattern?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "ABO blood",
                statement: "Multiple alleles + codominance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A, B, AB, O.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "IᴬIᴮ only (codominant).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "ii only (recessive).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Multiple alleles + codominance (Iᴬ and Iᴮ codominant, i recessive).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) A,B,AB,O (b) IᴬIᴮ (c) ii (d) Multiple alleles + codominance.",
            commonErrors: ["Not knowing codominance."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-pedigrees",
      title: "Pedigrees and Population Genetics",
      skill: "Interpret pedigrees and apply Hardy-Weinberg equilibrium.",
      lesson: {
        sections: [
          {
            heading: "Pedigrees",
            body: "A **pedigree** tracks inheritance through family generations:\n\n- Squares = males, circles = females.\n- Filled = affected, empty = unaffected.\n- Lines connect parents to offspring.\n\nUsed to determine inheritance patterns (autosomal dominant/recessive, X-linked).",
          },
          {
            heading: "Hardy-Weinberg",
            body: "**Hardy-Weinberg equilibrium**: allele frequencies stay constant without evolution:\n\n$p + q = 1$ (allele frequencies)\n$p^2 + 2pq + q^2 = 1$ (genotype frequencies)\n\n$p$ = dominant allele freq, $q$ = recessive allele freq.\n\nDeviations indicate evolution (selection, drift, gene flow, mutation).",
          },
        ],
        keyFormulas: [
          { name: "Pedigree", statement: "Family tree tracking inheritance." },
          { name: "Hardy-Weinberg", statement: "$p+q=1$; $p^2+2pq+q^2=1$." },
          {
            name: "Equilibrium",
            statement: "Constant allele frequencies = no evolution.",
          },
        ],
        workedExample: {
          problem: "If 16% of population shows recessive trait (aa), what's q?",
          solution: "$q^2 = 0.16$ → $q = 0.4$; $p = 0.6$.",
        },
      },
      questions: [
        {
          id: "bio9-u9-pedigree-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a filled symbol in a pedigree represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unaffected individual" },
              { id: "b", text: "Affected individual" },
              { id: "c", text: "Carrier" },
              { id: "d", text: "Deceased" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pedigree symbols",
                statement: "Filled = affected; empty = unaffected.",
              },
            ],
            steps: [
              {
                reasoning: "Filled symbols represent affected individuals.",
                evidence: "filled",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Affected individual.",
            commonErrors: ["Choosing (a): that's empty symbol."],
          },
        },
        {
          id: "bio9-u9-pedigree-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "If 9% of population shows recessive trait, what's the recessive allele frequency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Hardy-Weinberg",
                statement: "$q^2$ = recessive phenotype frequency.",
              },
            ],
            steps: [
              {
                reasoning: "$q^2 = 0.09$.",
                evidence: "q²",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$q = \\sqrt{0.09} = 0.3$.",
                evidence: "q",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recessive allele frequency = 0.3 (30%).",
                evidence: "answer",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "q = 0.3 (30%).",
            commonErrors: ["Not taking square root."],
          },
        },
        {
          id: "bio9-u9-pedigree-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what Hardy-Weinberg equilibrium assumes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "HW assumptions",
                statement:
                  "No evolution: no selection, drift, gene flow, mutation.",
              },
            ],
            steps: [
              {
                reasoning: "No natural selection.",
                evidence: "no selection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No genetic drift (large population).",
                evidence: "no drift",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No gene flow (no migration).",
                evidence: "no gene flow",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No mutation; random mating.",
                evidence: "no mutation",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "No selection, drift, gene flow, mutation; random mating.",
            commonErrors: ["Missing an assumption."],
          },
        },
        {
          id: "bio9-u9-pedigree-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A pedigree shows an autosomal dominant disorder.",
          parts: [
            {
              label: "a",
              prompt: "What does autosomal dominant mean?",
              marks: 2,
            },
            { label: "b", prompt: "How would heterozygote appear?", marks: 2 },
            {
              label: "c",
              prompt: "Can two unaffected parents have affected child?",
              marks: 2,
            },
            { label: "d", prompt: "What pattern would you expect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Autosomal dominant",
                statement:
                  "One copy causes disorder; appears every generation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Gene on autosome; one copy causes disorder.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Heterozygote (Aa) shows disorder.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No — need at least one affected parent.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Affected every generation; both sexes equally.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Autosomal + dominant (b) Aa affected (c) No (d) Every generation.",
            commonErrors: ["Thinking recessive pattern."],
          },
        },
      ],
    },
  ],
};

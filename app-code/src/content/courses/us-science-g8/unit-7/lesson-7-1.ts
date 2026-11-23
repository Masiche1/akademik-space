import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "s8-u7-lesson-7-1",
  code: "7-1",
  title: "DNA and Genes",
  goal: "I CAN describe the structure of DNA, explain how genes code for traits, and relate DNA to inheritance.",
  standards: [
    "MS-LS3-1",
    "MS-LS3-2",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "DNA",
      definition:
        "Deoxyribonucleic acid — molecule that carries genetic instructions.",
    },
    {
      term: "Gene",
      definition: "Segment of DNA that codes for a specific trait or protein.",
    },
    {
      term: "Chromosome",
      definition: "Thread-like structure of DNA and protein; humans have 46.",
    },
    {
      term: "Nucleotide",
      definition: "Building block of DNA: sugar, phosphate, and base.",
    },
    { term: "Double helix", definition: "Twisted ladder structure of DNA." },
    {
      term: "Base pairing",
      definition: "A pairs with T; C pairs with G in DNA.",
    },
    {
      term: "Genome",
      definition: "Complete set of genetic material in an organism.",
    },
  ],
  concepts: [
    {
      id: "s8-u7-dna-structure",
      title: "DNA structure",
      skill: "Describe DNA's molecular structure and base pairing rules.",
      lesson: {
        sections: [
          {
            heading: "DNA structure",
            body: "DNA is a **double helix** — two strands twisted together like a ladder:\n\n- **Sugar-phosphate backbone**: forms the sides.\n- **Base pairs**: form the rungs; A-T and C-G pairings.\n- **Nucleotides**: sugar + phosphate + base (A, T, C, or G).\n\nThe double helix was discovered by Watson and Crick in 1953 using Rosalind Franklin's X-ray data.",
          },
          {
            heading: "DNA replication",
            body: "Before cell division, DNA **replicates** — each strand serves as a template for a new complementary strand. This ensures each daughter cell gets a complete copy of genetic information.",
          },
        ],
        keyFormulas: [
          {
            name: "DNA structure",
            statement: "Double helix; sugar-phosphate backbone; base pairs.",
          },
          { name: "Base pairing", statement: "A-T, C-G (Chargaff's rules)." },
          {
            name: "Replication",
            statement: "Each strand templates a new complementary strand.",
          },
        ],
        workedExample: {
          problem:
            "If a DNA strand has sequence ATCG, what is the complementary strand?",
          solution:
            "TACG — A pairs with T, T pairs with A, C pairs with G, G pairs with C.",
        },
      },
      questions: [
        {
          id: "s8-u7-dna-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the shape of DNA?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single strand" },
              { id: "b", text: "Double helix" },
              { id: "c", text: "Flat sheet" },
              { id: "d", text: "Sphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DNA structure",
                statement: "Double helix — two twisted strands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DNA is a double helix: two strands twisted together.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Double helix.",
            commonErrors: ["Choosing (a): DNA has two strands."],
          },
        },
        {
          id: "s8-u7-dna-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the base pairing rules in DNA?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Base pairing", statement: "A-T, C-G." },
            ],
            steps: [
              {
                reasoning: "Adenine (A) always pairs with Thymine (T).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Cytosine (C) always pairs with Guanine (G).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This complementary pairing ensures accurate replication.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "A-T and C-G.",
            commonErrors: ["Saying A pairs with C."],
          },
        },
        {
          id: "s8-u7-dna-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "If a DNA strand has 20% adenine, what percentage is thymine? Cytosine?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Chargaff's rules",
                statement: "%A = %T; %C = %G.",
              },
            ],
            steps: [
              {
                reasoning: "%A = %T, so thymine = 20%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remaining 60% is C+G; since %C = %G, each is 30%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thymine = 20%, cytosine = 30%.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: 20 + 20 + 30 + 30 = 100%.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Thymine = 20%, cytosine = 30%.",
            commonErrors: ["Not using complementary pairing."],
          },
        },
        {
          id: "s8-u7-dna-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the process of DNA replication.",
          parts: [
            {
              label: "a",
              prompt: "What happens to the double helix?",
              marks: 2,
            },
            { label: "b", prompt: "How are new strands formed?", marks: 2 },
            { label: "c", prompt: "Why is this important?", marks: 2 },
            {
              label: "d",
              prompt: "What happens if replication has errors?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "DNA replication",
                statement: "Each strand templates a new complementary strand.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Helicase enzyme unwinds the double helix.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Each original strand serves as template; new complementary strand added.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Ensures each daughter cell gets complete genetic copy.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Mutations — can cause genetic disorders or cancer.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Unwinds (b) Template + complementary (c) Complete copy for daughter cells (d) Mutations.",
            commonErrors: ["Not mentioning template strand."],
          },
        },
      ],
    },
    {
      id: "s8-u7-genes-traits",
      title: "Genes and Traits",
      skill: "Explain how genes code for traits and how variation arises.",
      lesson: {
        sections: [
          {
            heading: "From gene to trait",
            body: "Genes code for **proteins**, which determine traits. The process:\n\n1. **Transcription**: DNA → mRNA (in nucleus).\n2. **Translation**: mRNA → protein (at ribosome).\n3. Protein determines trait (e.g., eye color, enzyme function).",
          },
          {
            heading: "Alleles and variation",
            body: "**Alleles** are different versions of a gene. For example, the gene for eye color has alleles for brown, blue, green, etc.\n\n- **Homozygous**: two identical alleles (BB or bb).\n- **Heterozygous**: two different alleles (Bb).\n- **Dominant allele**: expressed even with one copy (B).\n- **Recessive allele**: only expressed with two copies (b).",
          },
        ],
        keyFormulas: [
          {
            name: "Gene → protein → trait",
            statement: "DNA codes for proteins that determine traits.",
          },
          { name: "Alleles", statement: "Different versions of a gene." },
          {
            name: "Dominant vs recessive",
            statement: "Dominant expressed with one copy; recessive needs two.",
          },
        ],
        workedExample: {
          problem: "What does it mean if someone is heterozygous for a trait?",
          solution:
            "They have two different alleles (e.g., Bb) — one dominant, one recessive.",
        },
      },
      questions: [
        {
          id: "s8-u7-genes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do genes code for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA" },
              { id: "b", text: "Proteins" },
              { id: "c", text: "Cells" },
              { id: "d", text: "Energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gene function",
                statement: "Genes code for proteins.",
              },
            ],
            steps: [
              {
                reasoning: "Genes code for proteins, which determine traits.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Proteins.",
            commonErrors: ["Choosing (a): genes are part of DNA."],
          },
        },
        {
          id: "s8-u7-genes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between homozygous and heterozygous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homozygous vs heterozygous",
                statement: "Same vs different alleles.",
              },
            ],
            steps: [
              {
                reasoning: "Homozygous: two identical alleles (BB or bb).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Heterozygous: two different alleles (Bb).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Heterozygous can be carrier of recessive trait.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Homozygous = same alleles; heterozygous = different alleles.",
            commonErrors: ["Confusing genotype with phenotype."],
          },
        },
        {
          id: "s8-u7-genes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how genetic variation arises in a population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Genetic variation",
                statement: "Arises from mutations, meiosis, fertilization.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutations: changes in DNA sequence create new alleles.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Meiosis: independent assortment and crossing over shuffle alleles.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Fertilization: random combination of gametes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This variation is raw material for evolution.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mutations, meiosis, fertilization create genetic variation.",
            commonErrors: ["Saying variation comes from environment."],
          },
        },
        {
          id: "s8-u7-genes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A brown-eyed parent (Bb) and a blue-eyed parent (bb) have children.",
          parts: [
            {
              label: "a",
              prompt: "What is the genotype of each parent?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What are the possible offspring genotypes?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What are the possible phenotypes?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What is the probability of a brown-eyed child?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mendelian inheritance",
                statement: "Bb × bb → 50% Bb (brown), 50% bb (blue).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Parent 1: Bb (heterozygous brown); Parent 2: bb (homozygous blue).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Possible: Bb or bb (each 50%).",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Bb = brown (dominant); bb = blue (recessive).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "50% probability of brown-eyed child.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Bb and bb (b) Bb or bb (c) Brown or blue (d) 50%.",
            commonErrors: ["Thinking blue eyes are dominant."],
          },
        },
      ],
    },
    {
      id: "s8-u7-inheritance",
      title: "Inheritance Patterns",
      skill:
        "Apply Punnett squares to predict offspring genotypes and phenotypes.",
      lesson: {
        sections: [
          {
            heading: "Punnett squares",
            body: "A **Punnett square** predicts offspring genotypes:\n\n- Write parent alleles on top and side.\n- Fill in combinations in the grid.\n- Read genotypes and phenotypes from the grid.",
          },
          {
            heading: "Probability",
            body: "Probability = number of favorable outcomes ÷ total outcomes.\n\n- Monohybrid cross (one trait): 3:1 phenotypic ratio for dominant-recessive.\n- Dihybrid cross (two traits): 9:3:3:1 ratio.",
          },
        ],
        keyFormulas: [
          {
            name: "Punnett square",
            statement: "Grid showing possible allele combinations.",
          },
          {
            name: "Monohybrid ratio",
            statement: "3:1 dominant:recessive phenotype.",
          },
          {
            name: "Dihybrid ratio",
            statement: "9:3:3:1 for two independent traits.",
          },
        ],
        workedExample: {
          problem:
            "Two heterozygous parents (Bb × Bb) have children. What's the probability of a recessive phenotype?",
          solution:
            "Punnett: BB, Bb, Bb, bb → 1/4 chance of bb (recessive phenotype).",
        },
      },
      questions: [
        {
          id: "s8-u7-punnett-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a Punnett square show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell division" },
              { id: "b", text: "Possible offspring genotypes" },
              { id: "c", text: "DNA structure" },
              { id: "d", text: "Protein synthesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Punnett square",
                statement: "Predicts offspring genotypes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Punnett squares predict possible genotypes and phenotypes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Possible offspring genotypes.",
            commonErrors: [
              "Choosing (a): Punnett squares don't show cell division.",
            ],
          },
        },
        {
          id: "s8-u7-punnett-q2",
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
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Phenotypes: 3 dominant (BB, Bb, Bb), 1 recessive (bb).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Ratio = 3:1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3:1 dominant:recessive.",
            commonErrors: ["Counting genotypes instead of phenotypes."],
          },
        },
        {
          id: "s8-u7-punnett-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A homozygous dominant parent (BB) crosses with a heterozygous parent (Bb). What are the offspring genotypes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Punnett square",
                statement: "BB × Bb → BB or Bb.",
              },
            ],
            steps: [
              {
                reasoning: "Punnett square: B×B=BB, B×b=Bb.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Possible genotypes: BB (50%) or Bb (50%).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All offspring have dominant phenotype.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "No recessive phenotype possible.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "BB or Bb (all dominant phenotype).",
            commonErrors: ["Thinking bb is possible."],
          },
        },
        {
          id: "s8-u7-punnett-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two traits: seed color (Y=yellow dominant, y=green) and seed shape (R=round dominant, r=wrinkled).",
          parts: [
            { label: "a", prompt: "What is a dihybrid cross?", marks: 2 },
            {
              label: "b",
              prompt: "What's the phenotypic ratio for YyRr × YyRr?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What fraction shows both dominant traits?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What fraction shows both recessive traits?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dihybrid ratio",
                statement: "9:3:3:1 for two independent traits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cross tracking two traits simultaneously.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "9:3:3:1 (both dominant : dominant color recessive shape : recessive color dominant shape : both recessive).",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "9/16 show both dominant traits.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "1/16 show both recessive traits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Two traits (b) 9:3:3:1 (c) 9/16 (d) 1/16.",
            commonErrors: ["Using monohybrid ratio."],
          },
        },
      ],
    },
  ],
};

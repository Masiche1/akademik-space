import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "s8-u7-lesson-7-2",
  code: "7-2",
  title: "Genetic Variation and Mutations",
  goal: "I CAN explain sources of genetic variation, describe mutations, and distinguish between inherited and acquired traits.",
  standards: [
    "MS-LS3-1",
    "MS-LS3-2",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    { term: "Mutation", definition: "Permanent change in DNA sequence." },
    {
      term: "SNP",
      definition: "Single nucleotide polymorphism — single base change.",
    },
    { term: "Insertion", definition: "Addition of nucleotide(s) to DNA." },
    { term: "Deletion", definition: "Removal of nucleotide(s) from DNA." },
    {
      term: "Substitution",
      definition: "Replacement of one nucleotide with another.",
    },
    {
      term: "Frameshift mutation",
      definition:
        "Insertion/deletion not divisible by 3, shifts reading frame.",
    },
    {
      term: "Inherited trait",
      definition: "Trait passed from parents to offspring via genes.",
    },
    {
      term: "Acquired trait",
      definition: "Trait developed during lifetime, not passed to offspring.",
    },
  ],
  concepts: [
    {
      id: "s8-u7-mutations",
      title: "Types of mutations",
      skill: "Classify mutations by type and describe their effects.",
      lesson: {
        sections: [
          {
            heading: "Point mutations",
            body: "**Point mutations** change a single nucleotide:\n\n- **Substitution**: one base replaced by another. Can be silent (no effect), missense (different amino acid), or nonsense (stop codon).\n- **Insertion**: extra base added.\n- **Deletion**: base removed.\n\nInsertions and deletions often cause **frameshift mutations** if not divisible by 3, completely changing the protein.",
          },
          {
            heading: "Mutation effects",
            body: "- **Beneficial**: rare, but can provide advantage (e.g., antibiotic resistance).\n- **Neutral**: no effect on function.\n- **Harmful**: cause genetic disorders (e.g., sickle cell anemia).\n\nMost mutations are neutral or harmful; beneficial ones are rare but drive evolution.",
          },
        ],
        keyFormulas: [
          {
            name: "Point mutations",
            statement:
              "Substitution, insertion, deletion — single nucleotide changes.",
          },
          {
            name: "Frameshift",
            statement:
              "Insertion/deletion not divisible by 3 shifts reading frame.",
          },
          {
            name: "Mutation effects",
            statement:
              "Beneficial (rare), neutral (common), harmful (disorders).",
          },
        ],
        workedExample: {
          problem:
            "A DNA sequence changes from ATG to ATA. What type of mutation is this?",
          solution: "Substitution — G replaced by A (third position).",
        },
      },
      questions: [
        {
          id: "s8-u7-mutations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a mutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell division" },
              { id: "b", text: "Permanent change in DNA" },
              { id: "c", text: "Protein folding" },
              { id: "d", text: "Environmental change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutation",
                statement: "Permanent change in DNA sequence.",
              },
            ],
            steps: [
              {
                reasoning: "Mutations are permanent changes to DNA sequence.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Permanent change in DNA.",
            commonErrors: ["Choosing (d): environment doesn't change DNA."],
          },
        },
        {
          id: "s8-u7-mutations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between substitution, insertion, and deletion mutations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutation types",
                statement:
                  "Substitution = replace; insertion = add; deletion = remove.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution: one base replaced by another.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Insertion: extra base(s) added.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Deletion: base(s) removed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Substitution = replace; insertion = add; deletion = remove.",
            commonErrors: ["Confusing insertion and deletion."],
          },
        },
        {
          id: "s8-u7-mutations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why frameshift mutations are often more harmful than point mutations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Frameshift",
                statement:
                  "Shifts reading frame → completely different protein.",
              },
            ],
            steps: [
              {
                reasoning: "DNA is read in codons of 3 bases.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Insertion/deletion of 1 or 2 bases shifts the reading frame.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This changes every subsequent codon → completely different protein.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Point mutations often affect only one amino acid.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Frameshift changes entire downstream protein sequence.",
            commonErrors: ["Saying all mutations are equally harmful."],
          },
        },
        {
          id: "s8-u7-mutations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A gene has sequence ATG-CCT-GAA-TAA. A deletion removes the second T.",
          parts: [
            {
              label: "a",
              prompt: "What is the original protein sequence?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What is the new sequence after deletion?",
              marks: 2,
            },
            { label: "c", prompt: "What type of mutation is this?", marks: 2 },
            { label: "d", prompt: "Why is this harmful?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Frameshift",
                statement: "Deletion of 1 base shifts reading frame.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "ATG-CCT-GAA-TAA → Met-Pro-Glu-Stop.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "ATG-CTG-AAT-AA → shifted reading frame.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Deletion of 1 base = frameshift mutation.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "All downstream codons changed → different protein → likely nonfunctional.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Met-Pro-Glu-Stop (b) ATG-CTG-AAT-AA (c) Frameshift (d) Completely different protein.",
            commonErrors: ["Not recognizing frameshift."],
          },
        },
      ],
    },
    {
      id: "s8-u7-variation",
      title: "Genetic Variation Sources",
      skill:
        "Identify sources of genetic variation and explain their role in populations.",
      lesson: {
        sections: [
          {
            heading: "Sources of variation",
            body: "Genetic variation in populations arises from:\n\n- **Mutations**: new alleles created.\n- **Meiosis**: independent assortment and crossing over shuffle existing alleles.\n- **Fertilization**: random combination of gametes.\n- **Gene flow**: movement of alleles between populations.\n- **Genetic drift**: random changes in allele frequencies.",
          },
          {
            heading: "Variation vs environment",
            body: "**Inherited traits** are determined by genes and passed to offspring.\n**Acquired traits** are developed during lifetime (e.g., muscle strength, scars) and NOT passed to offspring.\n\nOnly genetic variation provides raw material for evolution.",
          },
        ],
        keyFormulas: [
          {
            name: "Variation sources",
            statement: "Mutations, meiosis, fertilization, gene flow, drift.",
          },
          {
            name: "Inherited vs acquired",
            statement:
              "Inherited = genetic; acquired = environmental, not heritable.",
          },
          {
            name: "Variation for evolution",
            statement: "Only genetic variation drives natural selection.",
          },
        ],
        workedExample: {
          problem: "Is a scar an inherited trait?",
          solution:
            "No — scars are acquired (environmental), not determined by genes.",
        },
      },
      questions: [
        {
          id: "s8-u7-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a source of genetic variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diet" },
              { id: "b", text: "Mutations" },
              { id: "c", text: "Exercise" },
              { id: "d", text: "Sun exposure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Variation sources",
                statement: "Mutations create new genetic variation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutations, meiosis, fertilization create genetic variation; diet/exercise don't.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Mutations.",
            commonErrors: ["Choosing environmental factors."],
          },
        },
        {
          id: "s8-u7-variation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between inherited and acquired traits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inherited vs acquired",
                statement: "Inherited = genetic; acquired = environmental.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inherited: determined by genes, passed to offspring (eye color).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Acquired: developed during lifetime, not passed (muscle strength, scars).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Only inherited traits contribute to evolution.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Inherited = genetic; acquired = environmental, not heritable.",
            commonErrors: ["Thinking acquired traits are inherited."],
          },
        },
        {
          id: "s8-u7-variation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how crossing over during meiosis creates genetic variation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Crossing over",
                statement: "Homologous chromosomes exchange segments.",
              },
            ],
            steps: [
              {
                reasoning: "During meiosis, homologous chromosomes pair up.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Segments are exchanged (crossing over).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This creates new allele combinations not present in parents.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Increases genetic diversity in gametes.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Crossing over exchanges chromosome segments → new allele combinations.",
            commonErrors: ["Saying crossing over creates new alleles."],
          },
        },
        {
          id: "s8-u7-variation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A population of bacteria is exposed to antibiotic.",
          parts: [
            { label: "a", prompt: "What genetic variation exists?", marks: 2 },
            { label: "b", prompt: "How does natural selection act?", marks: 3 },
            {
              label: "c",
              prompt: "What happens to resistant bacteria?",
              marks: 2,
            },
            { label: "d", prompt: "Is this evolution? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Natural selection",
                statement: "Resistant bacteria survive and reproduce.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Some bacteria have resistance gene (random mutation).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Antibiotic kills susceptible bacteria; resistant survive.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Resistant bacteria reproduce → more resistant offspring.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Yes — allele frequency changes (resistance increases).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Resistance gene (b) Selection favors resistant (c) Resistant reproduce (d) Yes, evolution.",
            commonErrors: ["Saying antibiotic creates resistance."],
          },
        },
      ],
    },
    {
      id: "s8-u7-genetic-disorders",
      title: "Genetic Disorders",
      skill:
        "Describe common genetic disorders and their inheritance patterns.",
      lesson: {
        sections: [
          {
            heading: "Single-gene disorders",
            body: "**Autosomal dominant**: one copy of allele causes disorder (Huntington's, Marfan syndrome).\n**Autosomal recessive**: two copies needed (sickle cell anemia, cystic fibrosis, Tay-Sachs).\n**X-linked**: on X chromosome (color blindness, hemophilia).",
          },
          {
            heading: "Chromosomal disorders",
            body: "**Down syndrome**: extra chromosome 21 (trisomy 21).\n**Klinefelter syndrome**: XXY.\n**Turner syndrome**: XO (missing X).\n\nThese result from errors in meiosis (nondisjunction).",
          },
        ],
        keyFormulas: [
          {
            name: "Autosomal dominant",
            statement: "One copy causes disorder.",
          },
          {
            name: "Autosomal recessive",
            statement: "Two copies needed; carriers unaffected.",
          },
          {
            name: "X-linked",
            statement: "On X chromosome; more common in males.",
          },
          { name: "Chromosomal", statement: "Extra or missing chromosomes." },
        ],
        workedExample: {
          problem: "Why are X-linked disorders more common in males?",
          solution:
            "Males have one X (XY); one recessive allele on X is expressed. Females have two X (XX); need two recessive alleles.",
        },
      },
      questions: [
        {
          id: "s8-u7-disorders-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes Down syndrome?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Missing chromosome" },
              { id: "b", text: "Extra chromosome 21" },
              { id: "c", text: "Gene mutation" },
              { id: "d", text: "Viral infection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Down syndrome",
                statement: "Trisomy 21 — extra chromosome.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Down syndrome is caused by extra chromosome 21 (trisomy).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Extra chromosome 21.",
            commonErrors: ["Choosing (a): it's extra, not missing."],
          },
        },
        {
          id: "s8-u7-disorders-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between autosomal dominant and recessive disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant vs recessive",
                statement: "One copy vs two copies needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dominant: one copy of allele causes disorder (Huntington's).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Recessive: two copies needed (sickle cell, cystic fibrosis).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Recessive carriers are unaffected but can pass allele.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Dominant = one copy; recessive = two copies.",
            commonErrors: ["Confusing dominance with severity."],
          },
        },
        {
          id: "s8-u7-disorders-q3",
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
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Females: XX — two X chromosomes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Male with recessive allele on X expresses it (no second X to compensate).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Females need two recessive alleles (one on each X).",
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
          id: "s8-u7-disorders-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two carriers of sickle cell trait (heterozygous) have children.",
          parts: [
            {
              label: "a",
              prompt: "What is the genotype of parents?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What's the probability of a child with sickle cell disease?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What's the probability of a carrier child?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What's the probability of an unaffected non-carrier?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sickle cell inheritance",
                statement: "Aa × Aa → 25% AA, 50% Aa, 25% aa.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Both parents: Aa (heterozygous carriers).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "aa = sickle cell disease = 25%.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Aa = carrier = 50%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "AA = unaffected non-carrier = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Aa × Aa (b) 25% (c) 50% (d) 25%.",
            commonErrors: ["Thinking carriers have disease."],
          },
        },
      ],
    },
  ],
};

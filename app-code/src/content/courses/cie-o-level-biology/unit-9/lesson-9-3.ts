import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "olbio-u9-lesson-9-3",
  code: "9-3",
  title: "Inheritance Patterns and Mutation",
  goal: "I CAN describe codominance, incomplete dominance, sex-linked inheritance, and the causes and effects of mutation.",
  standards: ["5090 9.3"],
  vocabulary: [
    { term: "Codominance", definition: "Both alleles expressed equally in heterozygote (e.g. AB blood group)." },
    { term: "Incomplete dominance", definition: "Heterozygote shows intermediate phenotype (e.g. pink flowers from red × white)." },
    { term: "Sex-linked", definition: "Gene carried on sex chromosome (X or Y); e.g. colour blindness on X." },
    { term: "Mutation", definition: "Permanent change in DNA sequence." },
    { term: "Sickle cell anaemia", definition: "Genetic disorder from mutated haemoglobin gene; heterozygotes have malaria resistance." },
    { term: "Carrier", definition: "Heterozygote for a recessive disorder — doesn't show disease but can pass it on." },
    { term: "DNA replication", definition: "Process copying DNA before cell division using complementary base pairing." },
  ],
  concepts: [
    {
      id: "olbio-u9-inheritance-patterns",
      title: "Codominance and incomplete dominance",
      skill: "Describe codominance and incomplete dominance and predict offspring phenotypes.",
      lesson: {
        sections: [
          {
            heading: "Incomplete dominance",
            body: "Heterozygote shows **intermediate** phenotype — neither allele fully dominant.\n\nExample: red (RR) × white (rr) flowers → all pink (Rr). Cross Rr × Rr → 1 red : 2 pink : 1 white (1:2:1 phenotype ratio).",
          },
          {
            heading: "Codominance",
            body: "Both alleles **expressed equally** in heterozygote — no blending.\n\nExample: ABO blood groups — IA and IB codominant (AB shows both A and B antigens); IA/IB dominant over i (O).",
          },
          {
            heading: "Comparison",
            body: "| Feature | Incomplete dominance | Codominance |\n|---|---|---|\n| Heterozygote | intermediate/blended | both expressed fully |\n| Example | pink flowers | AB blood |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Red (RR) and white (rr) flowers cross. What are the F1 and F2 phenotypes if dominance is incomplete?",
          solution: "F1: all pink (Rr). F2 (Rr×Rr): 1 red : 2 pink : 1 white.",
        },
      },
      questions: [
        {
          id: "olbio-u9-inheritance-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In incomplete dominance, the heterozygote shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An intermediate/blended phenotype" },
              { id: "b", text: "Both alleles fully expressed" },
              { id: "c", text: "Only the dominant phenotype" },
              { id: "d", text: "No phenotype" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete dominance", statement: "Heterozygote = intermediate phenotype." },
            ],
            steps: [
              { reasoning: "Recall the pattern.", working: "\\text{intermediate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** An intermediate/blended phenotype",
            commonErrors: ["Confusing with codominance — that's both expressed fully."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish codominance from incomplete dominance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Codominance vs incomplete", statement: "Codominance: both alleles fully expressed. Incomplete: blended intermediate." },
            ],
            steps: [
              { reasoning: "Define codominance.", working: "\\text{both expressed}", marks: 1, markCode: "M" },
              { reasoning: "Define incomplete dominance.", working: "\\text{blended}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In codominance both alleles are fully expressed (e.g. AB blood); in incomplete dominance the heterozygote shows a blended intermediate phenotype (e.g. pink flowers).",
            commonErrors: ["Treating them as the same — they differ in whether alleles blend."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two pink flowers (Rr, incomplete dominance) are crossed. Predict the phenotypic ratio of offspring.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance cross", statement: "Rr × Rr → 1 RR : 2 Rr : 1 rr → 1:2:1 phenotypes." },
            ],
            steps: [
              { reasoning: "Gametes: R and r from each parent.", working: "\\text{R and r}", marks: 1, markCode: "M" },
              { reasoning: "Offspring: RR, Rr, Rr, rr.", working: "\\text{1:2:1 genotype}", marks: 1, markCode: "M" },
              { reasoning: "Phenotypes: red, pink, pink, white.", working: "\\text{1:2:1 phenotype}", marks: 1, markCode: "M" },
              { reasoning: "State ratio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 red : 2 pink : 1 white (1:2:1 phenotypic ratio).",
            commonErrors: ["Predicting 3:1 — incomplete dominance gives 1:2:1 because heterozygote differs from both homozygotes."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain codominance and incomplete dominance with examples.",
          parts: [
            { label: "a", prompt: "Define codominance and give an example.", marks: 3 },
            { label: "b", prompt: "Define incomplete dominance and give an example.", marks: 3 },
            { label: "c", prompt: "Explain how the heterozygote phenotype differs in each case.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inheritance patterns", statement: "Codominance: both expressed (AB blood). Incomplete: blended (pink flowers)." },
            ],
            steps: [
              { part: "a", reasoning: "Both alleles fully expressed.", working: "\\text{both expressed}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example: AB blood group.", working: "\\text{AB blood}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete definition.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heterozygote intermediate.", working: "\\text{intermediate}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: pink flowers.", working: "\\text{pink flowers}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete definition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Codominance: both traits visible.", working: "\\text{both visible}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Incomplete: blended/mixed trait.", working: "\\text{blended}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) codominance: both expressed, AB blood (b) incomplete: blended, pink flowers (c) both visible vs blended",
            commonErrors: ["Giving same example for both."],
          },
        },
      ],
    },
    {
      id: "olbio-u9-mutation-sexlinked",
      title: "Mutation, sex-linked inheritance and DNA replication",
      skill: "Describe mutation, sex-linked inheritance, and how DNA replicates.",
      lesson: {
        sections: [
          {
            heading: "Mutation",
            body: "Permanent change in DNA sequence — can be harmful, neutral or beneficial. Sources: errors in replication, mutagens (radiation, chemicals), viruses. Can be inherited if in gametes.",
          },
          {
            heading: "Sickle cell anaemia",
            body: "Mutated haemoglobin gene → abnormal haemoglobin → sickle-shaped RBCs → blocked capillaries. Heterozygotes (carriers) have **malaria resistance** — example of balanced polymorphism.",
          },
          {
            heading: "Sex-linked inheritance",
            body: "Genes on X chromosome (e.g. colour blindness, haemophilia). Males (XY) have only one X → more likely to show recessive X-linked disorders. Females need two copies.",
          },
          {
            heading: "DNA replication",
            body: "Before cell division: DNA unwinds → each strand serves as template → complementary bases added (A-T, C-G) → two identical DNA molecules. Semi-conservative.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are males more likely to show X-linked recessive disorders?",
          solution: "Males have only one X chromosome — a single recessive allele on it is expressed because there's no second X to mask it.",
        },
      },
      questions: [
        {
          id: "olbio-u9-mutation-sexlinked-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a mutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A permanent change in DNA sequence" },
              { id: "b", text: "A type of cell division" },
              { id: "c", text: "A form of reproduction" },
              { id: "d", text: "A protein structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mutation", statement: "Permanent DNA sequence change." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{DNA change}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A permanent change in DNA sequence",
            commonErrors: ["Choosing 'cell division' — mutation is a change, not a process."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are males more likely to show X-linked recessive disorders?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked inheritance", statement: "Males XY — one X only → recessive allele expressed." },
            ],
            steps: [
              { reasoning: "Males have one X chromosome.", working: "\\text{XY}", marks: 1, markCode: "M" },
              { reasoning: "No second X to mask recessive allele.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Males have only one X chromosome, so a single recessive allele on it is expressed without a second X to mask it — unlike females (XX) who need two copies.",
            commonErrors: ["Saying 'males are weaker' — it's the chromosome difference."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the advantage of being heterozygous for sickle cell anaemia in malaria regions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sickle cell", statement: "Heterozygotes resist malaria; homozygotes get anaemia." },
            ],
            steps: [
              { reasoning: "Heterozygote has one normal + one sickle allele.", working: "\\text{carrier}", marks: 1, markCode: "M" },
              { reasoning: "Resists malaria infection.", working: "\\text{malaria resistance}", marks: 1, markCode: "M" },
              { reasoning: "Survives better in malaria areas.", working: "\\text{survival advantage}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: balanced polymorphism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heterozygotes produce some normal and some sickle haemoglobin; the sickle cells resist malaria infection, giving carriers a survival advantage in malaria regions — a balanced polymorphism.",
            commonErrors: ["Saying 'they don't get sickle cell' — they can pass it to offspring."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe mutation and its consequences.",
          parts: [
            { label: "a", prompt: "Define mutation and state causes.", marks: 3 },
            { label: "b", prompt: "Explain how mutation can be inherited.", marks: 2 },
            { label: "c", prompt: "Describe the sickle cell anaemia example.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mutation", statement: "DNA change → protein change → possible disease/variation; inherited if in gametes." },
            ],
            steps: [
              { part: "a", reasoning: "Permanent DNA change.", working: "\\text{DNA change}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Causes: replication errors, mutagens.", working: "\\text{errors/mutagens}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete definition.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gamete mutations passed to offspring.", working: "\\text{gametes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Body cell mutations not inherited.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mutated haemoglobin gene.", working: "\\text{Hb gene}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sickle-shaped RBCs → blocked vessels.", working: "\\text{sickle cells}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Heterozygote advantage: malaria resistance.", working: "\\text{malaria}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) DNA change, errors/mutagens (b) gamete mutations inherited (c) sickle Hb → anaemia + malaria resistance",
            commonErrors: ["In (b) saying all mutations inherited — only gamete ones."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u9-inheritance-extended-notes",
      title: "Inheritance patterns and mutation — revision notes",
      summary: "Codominance, incomplete dominance, mutation, sex-linked inheritance.",
      sections: [
        {
          heading: "Patterns",
          body: "Incomplete dominance: heterozygote intermediate (pink flowers, 1:2:1). Codominance: both expressed (AB blood). Sex-linked: X chromosome disorders (colour blindness) — males more affected.",
        },
        {
          heading: "Mutation",
          body: "Permanent DNA change → protein change. Inherited only if in gametes. Sickle cell: heterozygote malaria resistance (balanced polymorphism).",
        },
        {
          heading: "Exam technique",
          body: "- Incomplete dominance: phenotype ratio = genotype ratio (1:2:1).\n- Codominance: heterozygote shows BOTH traits, not blended.",
        },
      ],
    },
  ],
};

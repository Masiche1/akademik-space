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
              { id: "a", text: "No phenotype" },
              { id: "b", text: "An intermediate/blended phenotype" },
              { id: "c", text: "Both alleles fully expressed" },
              { id: "d", text: "Only the dominant phenotype" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete dominance", statement: "Heterozygote = intermediate phenotype." },
            ],
            steps: [
              { reasoning: "Recall the pattern.", working: "\\text{intermediate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An intermediate/blended phenotype",
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
        {
          id: "olbio-u9-inheritance-patterns-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of codominance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pink flowers from red and white parents" },
              { id: "b", text: "AB blood group showing both A and B antigens" },
              { id: "c", text: "Tall plants from Tt parents" },
              { id: "d", text: "Colour blindness on the X chromosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Codominance", statement: "Both alleles are fully expressed, as in AB blood." },
            ],
            steps: [
              { reasoning: "Match the example to codominance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** AB blood group showing both A and B antigens",
            commonErrors: ["Choosing pink flowers — that is incomplete dominance."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of incomplete dominance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pink flowers from red and white parents" },
              { id: "b", text: "AB blood group" },
              { id: "c", text: "Sickle cell anaemia" },
              { id: "d", text: "Colour blindness" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance", statement: "Heterozygote shows an intermediate phenotype, e.g. pink flowers." },
            ],
            steps: [
              { reasoning: "Match the example to incomplete dominance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pink flowers from red and white parents",
            commonErrors: ["Choosing AB blood — that is codominance."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the cross Rr × Rr under incomplete dominance, what is the phenotypic ratio?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All the same" },
              { id: "b", text: "1:1" },
              { id: "c", text: "1:2:1" },
              { id: "d", text: "3:1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance ratio", statement: "Rr × Rr gives 1 red : 2 pink : 1 white." },
            ],
            steps: [
              { reasoning: "Genotype and phenotype ratios both become 1:2:1.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 1:2:1",
            commonErrors: ["Choosing 3:1 — that applies to complete dominance."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the ABO blood group system, which alleles are codominant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "IA and i" },
              { id: "b", text: "i and i" },
              { id: "c", text: "IA and IB" },
              { id: "d", text: "IB and i" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ABO alleles", statement: "IA and IB are codominant; both are dominant over i." },
            ],
            steps: [
              { reasoning: "Recall which alleles are codominant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** IA and IB",
            commonErrors: ["Choosing IA and i — i is recessive."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A red flower (RR) is crossed with a white flower (rr) under incomplete dominance. What is the phenotype of the F1 offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All pink" },
              { id: "b", text: "All white" },
              { id: "c", text: "Half red, half white" },
              { id: "d", text: "All red" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "F1 incomplete dominance", statement: "RR × rr gives all Rr, the intermediate pink phenotype." },
            ],
            steps: [
              { reasoning: "All offspring are heterozygous Rr.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** All pink",
            commonErrors: ["Choosing all red — incomplete dominance does not show the dominant phenotype in heterozygotes."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two pink flowers (Rr) under incomplete dominance produce 400 offspring. Predict the number showing the pink phenotype.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance ratio", statement: "Pink phenotype is Rr, expected in half of Rr × Rr offspring." },
            ],
            steps: [
              { reasoning: "Apply the 1:2:1 phenotype ratio.", working: "400 × 1/2 = 200", marks: 1, markCode: "M" },
            ],
            finalAnswer: "200 offspring",
            commonErrors: ["Using 1/4 — pink is the heterozygote, which occurs twice as often."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A red flower (RR) is crossed with a white flower (rr) and 300 offspring are produced. Predict the number showing the pink phenotype.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "RR × rr", statement: "All offspring are Rr and therefore pink." },
            ],
            steps: [
              { reasoning: "All offspring show the intermediate phenotype.", working: "300 × 1 = 300", marks: 1, markCode: "M" },
            ],
            finalAnswer: "300 offspring",
            commonErrors: ["Predicting a 1:2:1 ratio — that requires both parents heterozygous."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two pink flowers (Rr) under incomplete dominance produce 400 offspring. Enter the expected number of red (a), pink (b) and white (c) offspring in that order.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100, unit: "offspring" },
              { label: "b", answer: 200, unit: "offspring" },
              { label: "c", answer: 100, unit: "offspring" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance counts", statement: "Phenotype ratio 1 red : 2 pink : 1 white." },
            ],
            steps: [
              { reasoning: "Red is one quarter of offspring.", working: "400 × 1/4 = 100", marks: 1, markCode: "M" },
              { reasoning: "Pink is one half of offspring.", working: "400 × 1/2 = 200", marks: 1, markCode: "M" },
              { reasoning: "White is one quarter of offspring.", working: "400 × 1/4 = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 red; 200 pink; 100 white",
            commonErrors: ["Using a 3:1 dominance ratio instead of 1:2:1."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An AB blood-group parent (IAIB) is crossed with an O blood-group parent (ii). Enter the expected percentage of A (a), B (b), AB (c) and O (d) offspring phenotypes in that order.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, unit: "%" },
              { label: "b", answer: 50, unit: "%" },
              { label: "c", answer: 0, unit: "%" },
              { label: "d", answer: 0, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ABO cross", statement: "IAIB × ii gives IAi (A) and IBi (B) only." },
            ],
            steps: [
              { reasoning: "Gametes are IA and IB from the AB parent, i and i from O.", working: "IA, IB × i, i", marks: 1, markCode: "M" },
              { reasoning: "Offspring genotypes are IAi, IBi, IAi, IBi.", working: "\\text{A and B phenotypes}", marks: 1, markCode: "M" },
              { reasoning: "A phenotype = 50%; B phenotype = 50%.", working: "2/4 = 50\\%", marks: 1, markCode: "A" },
              { reasoning: "AB and O phenotypes are impossible.", working: "0\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = 50%; B = 50%; AB = 0%; O = 0%",
            commonErrors: ["Forgetting that i is recessive and cannot make AB or O here."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two pink flowers (Rr) under incomplete dominance produce 800 offspring. Enter the expected numbers of red (a) and white (b) offspring only, in that order.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "offspring" },
              { label: "b", answer: 200, unit: "offspring" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance counts", statement: "Red and white are each one quarter of offspring." },
            ],
            steps: [
              { reasoning: "Red phenotype is RR, one quarter of offspring.", working: "800 × 1/4 = 200", marks: 1, markCode: "M" },
              { reasoning: "White phenotype is rr, one quarter of offspring.", working: "800 × 1/4 = 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 red; 200 white",
            commonErrors: ["Including pink — the question asks for red and white only."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person with blood group AB has which genotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "IBIB" },
              { id: "b", text: "ii" },
              { id: "c", text: "IAIA" },
              { id: "d", text: "IAIB" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ABO genotype", statement: "AB phenotype requires both codominant alleles IA and IB." },
            ],
            steps: [
              { reasoning: "Both A and B antigens need IA and IB.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** IAIB",
            commonErrors: ["Choosing IAIA or IBIB — those give only A or only B."],
          },
        },
        {
          id: "olbio-u9-inheritance-patterns-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a Punnett square shows the difference between incomplete dominance and codominance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inheritance patterns", statement: "Incomplete dominance blends alleles; codominance expresses both fully." },
            ],
            steps: [
              { reasoning: "Incomplete dominance: heterozygote is intermediate.", working: "\\text{Rr = pink}", marks: 1, markCode: "M" },
              { reasoning: "Codominance: heterozygote shows both traits.", working: "\\text{IAIB = AB}", marks: 1, markCode: "M" },
              { reasoning: "Punnett boxes reveal whether Rr differs from RR and rr, or whether IAIB differs from both homozygotes.", working: "\\text{compare phenotypes}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the key test is the heterozygote phenotype.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A Punnett square reveals the heterozygote phenotype: under incomplete dominance Rr is a blended intermediate different from both homozygotes, while under codominance IAIB expresses both alleles fully, producing a phenotype distinct from either homozygote.",
            commonErrors: ["Saying both give the same heterozygote — one blends, the other expresses both."],
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
              { id: "b", text: "A form of reproduction" },
              { id: "c", text: "A type of cell division" },
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
        {
          id: "olbio-u9-mutation-sexlinked-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a possible cause of mutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both of the above" },
              { id: "b", text: "Exposure to mutagens such as radiation or chemicals" },
              { id: "c", text: "Errors in DNA replication" },
              { id: "d", text: "Only eating too much protein" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mutation causes", statement: "Replication errors and mutagens can change DNA sequence." },
            ],
            steps: [
              { reasoning: "Recall the sources of mutation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Both of the above",
            commonErrors: ["Choosing only one cause — both errors and mutagens are valid."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "When can a mutation be inherited by offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never" },
              { id: "b", text: "When it occurs in the liver" },
              { id: "c", text: "When it occurs in any body cell" },
              { id: "d", text: "When it occurs in a gamete" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inherited mutation", statement: "Only mutations in gametes are passed to offspring." },
            ],
            steps: [
              { reasoning: "Identify the inheritable cell type.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** When it occurs in a gamete",
            commonErrors: ["Choosing body cells — those mutations stay in the individual."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why can being heterozygous for sickle cell anaemia be advantageous in malaria regions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gives resistance to malaria infection" },
              { id: "b", text: "It completely prevents all disease" },
              { id: "c", text: "It removes the need for oxygen" },
              { id: "d", text: "It increases red blood cell production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sickle cell advantage", statement: "Carriers resist malaria, giving a survival advantage." },
            ],
            steps: [
              { reasoning: "Recall the balanced polymorphism advantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It gives resistance to malaria infection",
            commonErrors: ["Saying it prevents all disease — the advantage is specific to malaria."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are males more likely to show X-linked recessive disorders such as colour blindness?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have only one X chromosome, so a recessive allele is expressed" },
              { id: "b", text: "Their Y chromosome carries the disorder" },
              { id: "c", text: "They have two X chromosomes" },
              { id: "d", text: "They produce more gametes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked inheritance", statement: "Males are XY and have no second X to mask a recessive allele." },
            ],
            steps: [
              { reasoning: "Recall the chromosome basis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They have only one X chromosome, so a recessive allele is expressed",
            commonErrors: ["Choosing two X chromosomes — that describes females."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "During DNA replication, each new DNA molecule contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only RNA bases" },
              { id: "b", text: "No complementary bases" },
              { id: "c", text: "Two completely new strands" },
              { id: "d", text: "One original strand and one newly made strand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Semi-conservative replication", statement: "Each daughter DNA keeps one parental strand." },
            ],
            steps: [
              { reasoning: "Recall semi-conservative replication.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** One original strand and one newly made strand",
            commonErrors: ["Choosing two new strands — that would not be semi-conservative."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A carrier mother for an X-linked recessive disorder has 200 sons. Predict the number expected to show the disorder.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "sons" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked cross", statement: "Carrier mother × normal father gives 1/2 affected sons." },
            ],
            steps: [
              { reasoning: "Half the sons inherit the affected X.", working: "200 × 1/2 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 sons",
            commonErrors: ["Applying the probability to daughters — sons are the affected class here."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The same carrier mother and normal father have 200 daughters. Enter the expected numbers who are carriers and who show the disorder.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "daughters" },
              { label: "b", answer: 0, unit: "daughters" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked daughters", statement: "Daughters receive father's normal X and are carriers or normal, not affected." },
            ],
            steps: [
              { reasoning: "All daughters receive the father's normal X and one maternal X.", working: "\\text{carrier or normal}", marks: 1, markCode: "M" },
              { reasoning: "With a carrier mother, all daughters are carriers and none are affected.", working: "200 \\text{ carriers}, 0 \\text{ affected}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 carriers; 0 affected",
            commonErrors: ["Expecting affected daughters — they would need two affected X alleles."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An affected father (XcY) and a normal mother (XX) have children. Enter the expected percentage of affected sons and carrier daughters.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0, unit: "%" },
              { label: "b", answer: 100, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Affected father cross", statement: "Sons get Y from father and normal X from mother; daughters get affected X from father." },
            ],
            steps: [
              { reasoning: "Sons receive Y from father and normal X from mother, so none are affected.", working: "0\\% \\text{ affected sons}", marks: 1, markCode: "M" },
              { reasoning: "Daughters receive the affected X from father and normal X from mother, so all are carriers.", working: "100\\% \\text{ carriers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0% affected sons; 100% carrier daughters",
            commonErrors: ["Giving daughters the disorder — carrier females usually do not show recessive X-linked traits."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two carriers for sickle cell anaemia have 500 offspring. Predict the number expected to have sickle cell anaemia.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 125, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sickle cell cross", statement: "Two heterozygotes give 1/4 homozygous recessive affected offspring." },
            ],
            steps: [
              { reasoning: "Apply the 1:2:1 genotype ratio for an affected recessive.", working: "500 × 1/4 = 125", marks: 1, markCode: "M" },
            ],
            finalAnswer: "125 offspring",
            commonErrors: ["Counting carriers as affected — carriers are heterozygous."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the same sickle cell carrier cross producing 500 offspring, predict the number expected to be carriers.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 250, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carrier frequency", statement: "Heterozygous carriers are half of offspring in a carrier × carrier cross." },
            ],
            steps: [
              { reasoning: "Apply the heterozygote frequency of 1/2.", working: "500 × 1/2 = 250", marks: 1, markCode: "M" },
            ],
            finalAnswer: "250 carriers",
            commonErrors: ["Using 1/4 — that is the affected homozygous class."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a carrier for a recessive disorder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A homozygous dominant organism" },
              { id: "b", text: "A gamete with no chromosomes" },
              { id: "c", text: "A heterozygote who can pass on the recessive allele" },
              { id: "d", text: "An organism showing the disease" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrier", statement: "Heterozygote for a recessive disorder who does not show it." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A heterozygote who can pass on the recessive allele",
            commonErrors: ["Confusing carrier with affected individual."],
          },
        },
        {
          id: "olbio-u9-mutation-sexlinked-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA replication can lead to inherited variation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Replication and mutation", statement: "Errors during copying DNA can create new alleles passed to offspring." },
            ],
            steps: [
              { reasoning: "DNA unwinds and each strand acts as a template.", working: "\\text{template strands}", marks: 1, markCode: "M" },
              { reasoning: "Complementary bases are added to make two DNA molecules.", working: "\\text{A-T, C-G}", marks: 1, markCode: "M" },
              { reasoning: "Errors can change the base sequence, creating a mutation.", working: "\\text{mutation}", marks: 1, markCode: "M" },
              { reasoning: "If the mutation is in a gamete, it can be inherited.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "During replication each strand templates a new strand; copying errors can alter the DNA sequence to form a mutation, and if that mutation occurs in a gamete it can be passed to offspring as new inherited variation.",
            commonErrors: ["Saying all replication errors are harmful — mutations can be neutral or beneficial."],
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

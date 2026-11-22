import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cieb-u9-lesson-9-3",
  code: "9-3",
  title: "Inheritance Patterns and Mutation",
  goal: "I CAN describe codominance, incomplete dominance, sex-linked inheritance, and the causes and effects of mutation.",
  standards: ["0653 9.3"],
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
      id: "cieb-u9-inheritance-patterns",
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
          id: "cieb-u9-inheritance-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In incomplete dominance, the heterozygote shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No phenotype" },
              { id: "b", text: "Only the dominant phenotype" },
              { id: "c", text: "Both alleles fully expressed" },
              { id: "d", text: "An intermediate/blended phenotype" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete dominance", statement: "Heterozygote = intermediate phenotype." },
            ],
            steps: [
              { reasoning: "Recall the pattern.", working: "\\text{intermediate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** An intermediate/blended phenotype",
            commonErrors: ["Confusing with codominance — that's both expressed fully."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q2",
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
          id: "cieb-u9-inheritance-patterns-q3",
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
          id: "cieb-u9-inheritance-patterns-q4",
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
          id: "cieb-u9-inheritance-patterns-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In codominance, the heterozygote shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An intermediate blended phenotype" },
              { id: "b", text: "Both alleles fully expressed" },
              { id: "c", text: "Only the dominant phenotype" },
              { id: "d", text: "No phenotype at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codominance", statement: "Both alleles expressed equally in the heterozygote." },
            ],
            steps: [
              { reasoning: "Recall the pattern.", working: "\\text{both expressed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Both alleles fully expressed",
            commonErrors: ["Confusing with incomplete dominance — that's the blended phenotype."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Red (RR) and white (rr) flowers are crossed with incomplete dominance. The F1 offspring are all:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pink" },
              { id: "b", text: "Half red, half white" },
              { id: "c", text: "Red" },
              { id: "d", text: "White" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance F1", statement: "RR × rr → all Rr → all intermediate (pink)." },
            ],
            steps: [
              { reasoning: "All offspring are heterozygous Rr.", working: "\\text{all Rr} \\to \\text{pink}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pink",
            commonErrors: ["Choosing red — with incomplete dominance the heterozygote is intermediate, not dominant."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an Rr × Rr cross with incomplete dominance, what is the phenotypic ratio of the offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All pink" },
              { id: "b", text: "1 red : 1 white" },
              { id: "c", text: "1 red : 2 pink : 1 white" },
              { id: "d", text: "3 red : 1 white" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance cross", statement: "Genotypes 1 RR : 2 Rr : 1 rr → phenotypes 1:2:1." },
            ],
            steps: [
              { reasoning: "Each genotype gives a different phenotype.", working: "\\text{1:2:1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 1 red : 2 pink : 1 white",
            commonErrors: ["Choosing 3:1 — that's complete dominance, not incomplete."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of codominance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AB blood group where both A and B antigens are produced" },
              { id: "b", text: "Pink flowers from red × white" },
              { id: "c", text: "Tall plants from TT × tt" },
              { id: "d", text: "Carrier parents of a recessive disorder" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Codominance example", statement: "ABO blood group: IA and IB both expressed in AB individuals." },
            ],
            steps: [
              { reasoning: "Match example to pattern.", working: "\\text{AB blood}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** AB blood group where both A and B antigens are produced",
            commonErrors: ["Choosing pink flowers — that's incomplete dominance."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an Rr × Rr cross with incomplete dominance, what percentage of offspring are pink?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance cross", statement: "Phenotype ratio 1:2:1 → pink (Rr) is 2/4 = 50%." },
            ],
            steps: [
              { reasoning: "2 of 4 offspring are pink Rr.", working: "\\frac{2}{4} \\times 100 = 50\\%", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Answering 25% — that's each homozygote (red or white)."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of offspring in an Rr × Rr cross (incomplete dominance) are red?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance cross", statement: "Red = RR = 1/4 of offspring = 25%." },
            ],
            steps: [
              { reasoning: "Only RR is red: 1 of 4.", working: "\\frac{1}{4} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Answering 50% — that's the pink fraction."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 400 offspring are produced from an Rr × Rr cross (incomplete dominance), predict how many are expected to be white.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incomplete dominance cross", statement: "White = rr = 1/4 of offspring." },
            ],
            steps: [
              { reasoning: "1/4 of 400 is white.", working: "\\frac{1}{4} \\times 400 = 100", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100",
            commonErrors: ["Answering 200 — that's the pink fraction."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A person with blood group AB (genotype $IAIB$) has a child with a person of blood group O (genotype $ii$). What percentage of the children are expected to have blood group AB?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ABO codominance", statement: "IAIB × ii → IAi or IBi only; AB requires an IB allele from both parents." },
            ],
            steps: [
              { reasoning: "O parent can only pass i; AB parent passes IA or IB.", working: "\\text{IAi or IBi}", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0%",
            commonErrors: ["Answering 25% — that would require both parents to carry an IB allele."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one example of incomplete dominance and one example of codominance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Examples", statement: "Incomplete dominance: pink flowers. Codominance: AB blood group." },
            ],
            steps: [
              { reasoning: "Give one example of each.", working: "\\text{pink flowers; AB blood}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Incomplete dominance: red × white flowers producing pink offspring. Codominance: AB blood group where both A and B antigens are expressed.",
            commonErrors: ["Using the same example for both patterns."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between incomplete dominance and codominance in terms of the heterozygote phenotype.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Incomplete vs codominance", statement: "Incomplete: heterozygote is blended/intermediate. Codominance: heterozygote shows both alleles fully." },
            ],
            steps: [
              { reasoning: "Incomplete dominance: heterozygote shows intermediate/blended trait.", working: "\\text{blended}", marks: 1, markCode: "M" },
              { reasoning: "Neither allele is fully dominant.", working: "\\text{no dominance}", marks: 1, markCode: "M" },
              { reasoning: "Codominance: both alleles expressed equally and separately.", working: "\\text{both expressed}", marks: 1, markCode: "M" },
              { reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In incomplete dominance the heterozygote shows an intermediate blended phenotype (e.g. pink); in codominance both alleles are fully and separately expressed in the heterozygote (e.g. AB blood).",
            commonErrors: ["Saying codominance blends the traits — it shows BOTH fully, not a mixture."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person with blood group AB must have which genotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$ii$" },
              { id: "b", text: "$IAIA$" },
              { id: "c", text: "$IBIB$" },
              { id: "d", text: "$IAIB$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ABO blood groups", statement: "AB = IAIB codominant; A = IAIA or IAi; B = IBIB or IBi; O = ii." },
            ],
            steps: [
              { reasoning: "AB requires one IA and one IB allele.", working: "\\text{AB} = IAIB", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $IAIB$",
            commonErrors: ["Choosing $IAIA$ — that gives blood group A only."],
          },
        },
        {
          id: "cieb-u9-inheritance-patterns-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'codominant' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The alleles blend into an intermediate form" },
              { id: "b", text: "Both alleles are expressed equally in the heterozygote" },
              { id: "c", text: "Neither allele is expressed" },
              { id: "d", text: "Only one allele is passed to offspring" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Codominance", statement: "Both alleles fully expressed in heterozygote." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{both expressed}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Both alleles are expressed equally in the heterozygote",
            commonErrors: ["Choosing 'blend into intermediate' — that's incomplete dominance."],
          },
        },
      ],
    },
    {
      id: "cieb-u9-mutation-sexlinked",
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
          id: "cieb-u9-mutation-sexlinked-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a mutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A protein structure" },
              { id: "b", text: "A permanent change in DNA sequence" },
              { id: "c", text: "A type of cell division" },
              { id: "d", text: "A form of reproduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mutation", statement: "Permanent DNA sequence change." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{DNA change}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A permanent change in DNA sequence",
            commonErrors: ["Choosing 'cell division' — mutation is a change, not a process."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q2",
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
          id: "cieb-u9-mutation-sexlinked-q3",
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
          id: "cieb-u9-mutation-sexlinked-q4",
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
          id: "cieb-u9-mutation-sexlinked-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of a mutagen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose" },
              { id: "b", text: "UV radiation" },
              { id: "c", text: "Water" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mutagens", statement: "Agents causing mutations: radiation, chemicals, some viruses." },
            ],
            steps: [
              { reasoning: "Recall a mutagen.", working: "\\text{radiation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** UV radiation",
            commonErrors: ["Choosing a normal substance — mutagens damage DNA."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mutation can be inherited by offspring only if it occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A gamete" },
              { id: "b", text: "A liver cell" },
              { id: "c", text: "A skin cell" },
              { id: "d", text: "Any body cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inherited mutations", statement: "Only mutations in gametes are passed to offspring." },
            ],
            steps: [
              { reasoning: "Identify where mutations are heritable.", working: "\\text{gametes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A gamete",
            commonErrors: ["Choosing body cell — those mutations stay in that individual."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do heterozygotes for sickle cell anaemia have an advantage in malaria regions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are immune to all diseases" },
              { id: "b", text: "They produce more haemoglobin" },
              { id: "c", text: "Their blood cells resist malaria infection" },
              { id: "d", text: "They never get anaemia" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sickle cell advantage", statement: "Heterozygotes resist malaria — balanced polymorphism." },
            ],
            steps: [
              { reasoning: "Recall the advantage.", working: "\\text{malaria resistance}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Their blood cells resist malaria infection",
            commonErrors: ["Choosing 'never get anaemia' — heterozygotes can still pass the allele on."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "X-linked recessive disorders such as colour blindness are more common in males because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Y chromosome is larger" },
              { id: "b", text: "Males have only one X chromosome to mask the allele" },
              { id: "c", text: "Females cannot carry the allele" },
              { id: "d", text: "Males have two X chromosomes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked inheritance", statement: "Males (XY) express recessive X alleles with no second X to mask them." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{one X only}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Males have only one X chromosome to mask the allele",
            commonErrors: ["Choosing 'two X' — males are XY, not XX."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the number of X chromosomes in a human female.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "X chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sex chromosomes", statement: "Female = XX; male = XY." },
            ],
            steps: [
              { reasoning: "Recall female karyotype.", working: "\\text{XX}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — males have only one X."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A carrier mother (XcX) and a father with normal vision (XY) have a son. What is the probability (%) that the son is colour blind?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked cross", statement: "Carrier mother passes Xc or X with 50% chance; father gives Y to sons." },
            ],
            steps: [
              { reasoning: "Mother passes the recessive allele 50% of the time; father contributes Y.", working: "\\frac{1}{2} \\times 100 = 50\\%", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Answering 100% — the mother may pass the normal X."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the same cross (carrier mother XcX, normal father XY), what percentage of daughters are expected to be colour blind?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked cross", statement: "Father gives daughters his normal X, masking the mother's recessive allele." },
            ],
            steps: [
              { reasoning: "Daughters receive father's normal X plus mother's X — father contributes X not Y.", working: "\\text{father gives X}", marks: 1, markCode: "M" },
              { reasoning: "State the percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0%",
            commonErrors: ["Answering 50% — daughters get the father's normal X, so they are carriers at most."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A female needs two copies of a recessive X-linked allele to show the disorder. State the number of copies of the allele a female must carry to express it.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "copies" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "X-linked recessive", statement: "Females (XX) need two recessive alleles; males need only one." },
            ],
            steps: [
              { reasoning: "Recall the requirement.", working: "\\text{two copies}", marks: 1, markCode: "A" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — one copy only affects males."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two causes of mutation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mutation causes", statement: "Replication errors, mutagens (radiation/chemicals), viruses." },
            ],
            steps: [
              { reasoning: "Give two causes.", working: "\\text{errors, mutagens, viruses}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Errors during DNA replication, exposure to mutagens such as radiation or chemicals, and infection by some viruses.",
            commonErrors: ["Only listing 'radiation' — replication errors are the most common cause."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why DNA replication is described as 'semi-conservative'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Semi-conservative replication", statement: "Each new DNA molecule keeps one original strand and gains one new strand." },
            ],
            steps: [
              { reasoning: "Each parental strand acts as a template.", working: "\\text{template strands}", marks: 1, markCode: "M" },
              { reasoning: "Complementary bases are added (A-T, C-G).", working: "\\text{A-T, C-G}", marks: 1, markCode: "M" },
              { reasoning: "Each new DNA has one old + one new strand.", working: "\\text{1 old + 1 new}", marks: 1, markCode: "M" },
              { reasoning: "Conclude semi-conservative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each parental DNA strand serves as a template for a new complementary strand, so every resulting DNA molecule contains one original strand and one newly synthesised strand — half conserved, hence 'semi-conservative'.",
            commonErrors: ["Saying 'fully conservative' — each molecule keeps only ONE original strand."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What effect does the sickle cell mutation have on red blood cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They stop carrying oxygen" },
              { id: "b", text: "They turn into white blood cells" },
              { id: "c", text: "They become sickle-shaped and can block capillaries" },
              { id: "d", text: "They multiply uncontrollably" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sickle cell anaemia", statement: "Mutated haemoglobin → sickle-shaped RBCs → blocked capillaries." },
            ],
            steps: [
              { reasoning: "Recall the effect.", working: "\\text{sickle-shaped RBCs}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** They become sickle-shaped and can block capillaries",
            commonErrors: ["Choosing 'stop carrying oxygen' — they still carry some oxygen but deform."],
          },
        },
        {
          id: "cieb-u9-mutation-sexlinked-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'carrier' of a genetic disorder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Someone who is immune to disease" },
              { id: "b", text: "A heterozygote who does not show the disorder but can pass it on" },
              { id: "c", text: "A person with two dominant alleles" },
              { id: "d", text: "A gamete cell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrier", statement: "Heterozygote for recessive disorder — healthy but can transmit allele." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{heterozygote, unaffected}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A heterozygote who does not show the disorder but can pass it on",
            commonErrors: ["Choosing 'immune' — carriers are unaffected but NOT immune."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u9-inheritance-extended-notes",
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

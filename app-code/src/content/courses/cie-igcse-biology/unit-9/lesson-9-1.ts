import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cieb-u9-lesson-9-1",
  code: "9-1",
  title: "Chromosomes, Genes and Cell Division",
  goal: "I CAN describe chromosomes, genes and DNA, and compare mitosis and meiosis.",
  standards: ["0653 9.1", "0653 9.2"],
  vocabulary: [
    { term: "Chromosome", definition: "Thread-like structure of DNA and protein carrying genetic information." },
    { term: "Gene", definition: "Section of DNA coding for a specific protein/characteristic." },
    { term: "Allele", definition: "Different form of a gene (e.g. T or t for height)." },
    { term: "Diploid", definition: "Cell with two sets of chromosomes (2n); body cells." },
    { term: "Haploid", definition: "Cell with one set of chromosomes (n); gametes." },
    { term: "Mitosis", definition: "Cell division producing two genetically identical diploid daughter cells." },
    { term: "Meiosis", definition: "Cell division producing four genetically different haploid gametes." },
    { term: "Homologous chromosomes", definition: "Pair of chromosomes with same genes (one from each parent)." },
  ],
  concepts: [
    {
      id: "cieb-u9-chromosomes",
      title: "Chromosomes, genes and DNA",
      skill: "Describe the hierarchy of genetic material and chromosome number in humans.",
      lesson: {
        sections: [
          {
            heading: "Hierarchy",
            body: "**DNA** → genes (sections of DNA) → chromosomes (DNA + protein) → nucleus.\n\nA **gene** codes for a protein which determines a characteristic. **Alleles** are alternative forms of a gene.",
          },
          {
            heading: "Chromosome numbers",
            body: "- Human body cells: **46 chromosomes** (23 pairs) — diploid (2n).\n- Human gametes: **23 chromosomes** — haploid (n).\n- Homologous pairs: one from mother, one from father.",
          },
          {
            heading: "DNA structure",
            body: "Double helix; bases A-T and C-G pair up. Genes are specific sequences along the DNA molecule.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How many chromosomes are in a human egg cell?",
          solution: "23 — gametes are haploid (n), having half the chromosome number of body cells (2n = 46).",
        },
      },
      questions: [
        {
          id: "cieb-u9-chromosomes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a gene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A section of DNA coding for a protein" },
              { id: "b", text: "A type of cell" },
              { id: "c", text: "A gamete" },
              { id: "d", text: "A whole chromosome" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gene", statement: "Section of DNA coding for a specific protein." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{DNA section}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A section of DNA coding for a protein",
            commonErrors: ["Choosing chromosome — a chromosome contains MANY genes."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the chromosome number in human body cells and gametes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Chromosome number", statement: "Body cells: 46 (2n); gametes: 23 (n)." },
            ],
            steps: [
              { reasoning: "Give body cell number.", working: "\\text{46}", marks: 1, markCode: "M" },
              { reasoning: "Give gamete number.", working: "\\text{23}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Body cells have 46 chromosomes (diploid); gametes have 23 (haploid).",
            commonErrors: ["Reversing the numbers."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the relationship between DNA, genes and chromosomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Genetic hierarchy", statement: "DNA contains genes; chromosomes are DNA + protein carrying genes." },
            ],
            steps: [
              { reasoning: "DNA is the molecule.", working: "\\text{DNA}", marks: 1, markCode: "M" },
              { reasoning: "Genes are sections of DNA.", working: "\\text{genes in DNA}", marks: 1, markCode: "M" },
              { reasoning: "Chromosomes package DNA + protein.", working: "\\text{chromosome = DNA + protein}", marks: 1, markCode: "M" },
              { reasoning: "Conclude hierarchy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "DNA is the genetic molecule; genes are specific sections of DNA coding for proteins; chromosomes are structures of DNA and protein that carry many genes.",
            commonErrors: ["Saying 'gene = chromosome' — one chromosome has many genes."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the structure of DNA and explain how it relates to inheritance.",
          parts: [
            { label: "a", prompt: "Describe the structure of DNA.", marks: 3 },
            { label: "b", prompt: "State what a gene codes for.", marks: 2 },
            { label: "c", prompt: "Explain how genes are passed from parents to offspring.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA and inheritance", statement: "DNA double helix; genes → proteins → characteristics; gametes carry genes." },
            ],
            steps: [
              { part: "a", reasoning: "Double helix structure.", working: "\\text{double helix}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Base pairing A-T, C-G.", working: "\\text{base pairs}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gene codes for protein.", working: "\\text{protein}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Protein determines characteristic.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Genes on chromosomes in nucleus.", working: "\\text{chromosomes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gametes carry half chromosomes via meiosis.", working: "\\text{meiosis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fertilisation combines genes from both parents.", working: "\\text{fertilisation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) double helix, A-T/C-G pairing (b) protein→characteristic (c) chromosomes→gametes→fertilisation",
            commonErrors: ["In (a) describing RNA — it's DNA double helix."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many chromosomes are found in a human body cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "44" },
              { id: "b", text: "92" },
              { id: "c", text: "23" },
              { id: "d", text: "46" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Human chromosome number", statement: "Body cells are diploid: 46 chromosomes (23 pairs)." },
            ],
            steps: [
              { reasoning: "Recall the diploid number.", working: "\\text{2n} = 46", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 46",
            commonErrors: ["Choosing 23 — that's the haploid gamete number."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an allele?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A different form of a gene" },
              { id: "b", text: "A section of the cell membrane" },
              { id: "c", text: "A whole chromosome" },
              { id: "d", text: "A type of cell division" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Allele", statement: "Alternative form of a gene (e.g. T or t)." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{allele} = \\text{gene variant}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A different form of a gene",
            commonErrors: ["Choosing chromosome — a chromosome carries many genes, not one allele."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In DNA, which base pairs with adenine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytosine" },
              { id: "b", text: "Guanine" },
              { id: "c", text: "Uracil" },
              { id: "d", text: "Thymine" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA base pairing", statement: "A pairs with T; C pairs with G." },
            ],
            steps: [
              { reasoning: "Recall the pairing rule.", working: "\\text{A} \\leftrightarrow \\text{T}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Thymine",
            commonErrors: ["Choosing cytosine — C pairs with G, not A."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the number of chromosomes in a human sperm cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete chromosome number", statement: "Human gametes are haploid: n = 23." },
            ],
            steps: [
              { reasoning: "Recall the haploid number.", working: "\\text{n} = 23", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23",
            commonErrors: ["Answering 46 — that's the body cell number."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "State the number of homologous chromosome pairs in a human body cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "pairs" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Homologous pairs", statement: "46 chromosomes form 23 homologous pairs." },
            ],
            steps: [
              { reasoning: "46 chromosomes form pairs.", working: "46 \\div 2 = 23", marks: 1, markCode: "M" },
            ],
            finalAnswer: "23",
            commonErrors: ["Answering 46 — that's individual chromosomes, not pairs."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "State the number of chromosome sets in a diploid human cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "sets" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Diploid", statement: "Two sets of chromosomes (2n); one from each parent." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{diploid} = 2 \\text{ sets}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1 — that's haploid."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "State the number of chromosomes in a human zygote immediately after fertilisation.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 46, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zygote chromosome number", statement: "Fertilisation restores the diploid number: 46." },
            ],
            steps: [
              { reasoning: "Sperm + egg combine.", working: "23 + 23 = 46", marks: 1, markCode: "M" },
            ],
            finalAnswer: "46",
            commonErrors: ["Answering 23 — the zygote is diploid."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define the terms 'diploid' and 'haploid'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diploid/haploid", statement: "Diploid = two chromosome sets (body cells); haploid = one set (gametes)." },
            ],
            steps: [
              { reasoning: "Define diploid.", working: "\\text{diploid} = 2n", marks: 1, markCode: "M" },
              { reasoning: "Define haploid.", working: "\\text{haploid} = n", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diploid cells have two sets of chromosomes (body cells, 2n = 46); haploid cells have one set (gametes, n = 23).",
            commonErrors: ["Reversing the terms — diploid has MORE chromosomes."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gametes must contain half the chromosome number of body cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Why gametes are haploid", statement: "Fertilisation combines two gametes to restore the diploid number." },
            ],
            steps: [
              { reasoning: "Gametes are produced by meiosis with half the chromosomes.", working: "\\text{2n} \\to \\text{n}", marks: 1, markCode: "M" },
              { reasoning: "Each parent contributes half the chromosomes.", working: "\\text{each parent: half}", marks: 1, markCode: "M" },
              { reasoning: "Fertilisation restores 2n in the zygote.", working: "\\text{n + n = 2n}", marks: 1, markCode: "M" },
              { reasoning: "Conclude it prevents doubling each generation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gametes are haploid so that when sperm and egg fuse at fertilisation, the chromosome number is restored to diploid — otherwise it would double with every generation.",
            commonErrors: ["Only saying 'meiosis makes gametes' without the chromosome-number reason."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the base-pairing rules of DNA and explain their importance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA base pairing", statement: "A pairs with T, C pairs with G; enables accurate replication." },
            ],
            steps: [
              { reasoning: "State the pairing rule: A-T and C-G.", working: "\\text{A-T, C-G}", marks: 1, markCode: "M" },
              { reasoning: "Each strand acts as a template for the new strand.", working: "\\text{template strand}", marks: 1, markCode: "M" },
              { reasoning: "This allows accurate copying of DNA during replication.", working: "\\text{accurate replication}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In DNA, adenine pairs with thymine and cytosine pairs with guanine; because each strand is complementary to the other, each can act as a template so DNA can be copied accurately during replication.",
            commonErrors: ["Pairing A with G — correct pairs are A-T and C-G."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where are genes located in a eukaryotic cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the cytoplasm fluid" },
              { id: "b", text: "In the mitochondria only" },
              { id: "c", text: "In the cell membrane" },
              { id: "d", text: "On chromosomes in the nucleus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gene location", statement: "Genes are sections of DNA on chromosomes in the nucleus." },
            ],
            steps: [
              { reasoning: "Recall where genes are found.", working: "\\text{chromosomes in nucleus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** On chromosomes in the nucleus",
            commonErrors: ["Choosing cytoplasm — genes are on chromosomes inside the nucleus."],
          },
        },
        {
          id: "cieb-u9-chromosomes-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cells in humans are haploid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liver cells" },
              { id: "b", text: "Gametes (sperm and eggs)" },
              { id: "c", text: "Skin cells" },
              { id: "d", text: "Muscle cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Haploid cells", statement: "Gametes have one chromosome set (n = 23)." },
            ],
            steps: [
              { reasoning: "Identify haploid cells.", working: "\\text{gametes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gametes (sperm and eggs)",
            commonErrors: ["Choosing body cells — those are diploid."],
          },
        },
      ],
    },
    {
      id: "cieb-u9-mitosis-meiosis",
      title: "Mitosis and meiosis",
      skill: "Compare mitosis and meiosis and state their roles in growth and reproduction.",
      lesson: {
        sections: [
          {
            heading: "Mitosis",
            body: "- One division → **2 diploid daughter cells**.\n- **Genetically identical** to parent.\n- Used for: growth, repair, asexual reproduction.",
          },
          {
            heading: "Meiosis",
            body: "- Two divisions → **4 haploid gametes**.\n- **Genetically different** (crossing over + independent assortment).\n- Used for: sexual reproduction (sperm/egg).",
          },
          {
            heading: "Comparison table",
            body: "| Feature | Mitosis | Meiosis |\n|---|---|---|\n| Divisions | 1 | 2 |\n| Daughter cells | 2 diploid | 4 haploid |\n| Genetic makeup | identical | different |\n| Purpose | growth/repair | gametes |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why must gametes be haploid?",
          solution: "So fertilisation restores the diploid number — each parent contributes half the chromosomes.",
        },
      },
      questions: [
        {
          id: "cieb-u9-mitosis-meiosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process produces gametes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meiosis" },
              { id: "b", text: "Fertilisation" },
              { id: "c", text: "Pollination" },
              { id: "d", text: "Mitosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis", statement: "Produces haploid gametes." },
            ],
            steps: [
              { reasoning: "Match process to product.", working: "\\text{meiosis} \\to \\text{gametes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Meiosis",
            commonErrors: ["Choosing mitosis — that's for growth/repair."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between mitosis and meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis vs meiosis", statement: "Mitosis: 2 diploid identical. Meiosis: 4 haploid different." },
            ],
            steps: [
              { reasoning: "Give two differences.", working: "\\text{number, ploidy, variation}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis produces 2 diploid identical cells; meiosis produces 4 haploid genetically different cells.",
            commonErrors: ["Saying both produce identical cells."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why meiosis is necessary for sexual reproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis necessity", statement: "Halves chromosome number; creates genetic variation." },
            ],
            steps: [
              { reasoning: "Meiosis halves chromosome number.", working: "\\text{2n} \\to \\text{n}", marks: 1, markCode: "M" },
              { reasoning: "Gametes need half number for fertilisation.", working: "\\text{fertilisation restores}", marks: 1, markCode: "M" },
              { reasoning: "Crossing over/independent assortment → variation.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Meiosis halves the chromosome number so fertilisation can restore diploid, and creates genetic variation through crossing over and independent assortment.",
            commonErrors: ["Only mentioning 'makes gametes' without the chromosome-number reason."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare mitosis and meiosis.",
          parts: [
            { label: "a", prompt: "State the number of divisions and daughter cells.", marks: 2 },
            { label: "b", prompt: "Compare the chromosome number of daughter cells.", marks: 2 },
            { label: "c", prompt: "Compare genetic makeup of daughter cells.", marks: 2 },
            { label: "d", prompt: "State the role of each process.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis vs meiosis", statement: "Mitosis: growth/repair, identical diploid. Meiosis: gametes, varied haploid." },
            ],
            steps: [
              { part: "a", reasoning: "Mitosis: 1 division, 2 cells.", working: "\\text{1 div, 2 cells}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Meiosis: 2 divisions, 4 cells.", working: "\\text{2 div, 4 cells}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mitosis: diploid.", working: "\\text{diploid}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Meiosis: haploid.", working: "\\text{haploid}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mitosis: identical.", working: "\\text{identical}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Meiosis: different.", working: "\\text{different}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Mitosis: growth, repair, asexual.", working: "\\text{growth/repair}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Meiosis: gamete production.", working: "\\text{gametes}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State roles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1div/2cells vs 2div/4cells (b) diploid vs haploid (c) identical vs different (d) growth/repair vs gametes",
            commonErrors: ["In (c) saying meiosis produces identical cells — it produces varied gametes."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many daughter cells are produced by one mitotic division?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "4" },
              { id: "c", text: "2" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis", statement: "One division produces 2 diploid daughter cells." },
            ],
            steps: [
              { reasoning: "Recall the product.", working: "\\text{mitosis} \\to 2 \\text{ cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 2",
            commonErrors: ["Choosing 4 — that's meiosis."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many cell divisions occur during meiosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "2" },
              { id: "c", text: "1" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis", statement: "Two divisions produce 4 haploid gametes." },
            ],
            steps: [
              { reasoning: "Recall the divisions.", working: "\\text{meiosis} = 2 \\text{ divisions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2",
            commonErrors: ["Choosing 1 — that's mitosis."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process is used for growth, repair of damaged tissue and asexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fertilisation" },
              { id: "b", text: "Meiosis" },
              { id: "c", text: "Diffusion" },
              { id: "d", text: "Mitosis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis uses", statement: "Growth, repair, asexual reproduction." },
            ],
            steps: [
              { reasoning: "Match process to role.", working: "\\text{mitosis} \\to \\text{growth/repair}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Mitosis",
            commonErrors: ["Choosing meiosis — that produces gametes for sexual reproduction."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the number of daughter cells produced by meiosis.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "cells" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis product", statement: "Two divisions → 4 haploid gametes." },
            ],
            steps: [
              { reasoning: "Recall the number.", working: "\\text{4 gametes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 2 — that's mitosis."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A human body cell with 46 chromosomes undergoes mitosis. State the chromosome number in each daughter cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 46, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis chromosome number", statement: "Daughter cells are genetically identical — same chromosome number as parent." },
            ],
            steps: [
              { reasoning: "Mitosis copies chromosomes exactly.", working: "\\text{2n} \\to \\text{2n}", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46",
            commonErrors: ["Answering 23 — mitosis does not halve the chromosome number."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A human body cell with 46 chromosomes undergoes meiosis. State the chromosome number in each resulting gamete.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis chromosome number", statement: "Gametes are haploid: half the parent number." },
            ],
            steps: [
              { reasoning: "Halve the chromosome number.", working: "46 \\div 2 = 23", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23",
            commonErrors: ["Answering 46 — meiosis halves the chromosome number."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A diploid organism has 2n = 20 chromosomes. State the number of chromosomes in each gamete it produces.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Haploid number", statement: "Gametes carry half the diploid number: n = 2n ÷ 2." },
            ],
            steps: [
              { reasoning: "Halve the diploid number.", working: "20 \\div 2 = 10", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 20 — gametes are haploid."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two uses of mitosis in the human body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis uses", statement: "Growth, repair of damaged cells, asexual reproduction." },
            ],
            steps: [
              { reasoning: "Give two uses.", working: "\\text{growth, repair}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth of the body and repair/replacement of damaged or dead cells (also asexual reproduction).",
            commonErrors: ["Saying 'making gametes' — that's meiosis."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how meiosis creates genetic variation among gametes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis variation", statement: "Crossing over and independent assortment shuffle alleles; random fertilisation adds more." },
            ],
            steps: [
              { reasoning: "Crossing over swaps alleles between homologous chromosomes.", working: "\\text{crossing over}", marks: 1, markCode: "M" },
              { reasoning: "Independent assortment shuffles chromosome combinations.", working: "\\text{independent assortment}", marks: 1, markCode: "M" },
              { reasoning: "Random fertilisation combines gametes unpredictably.", working: "\\text{random fertilisation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude variation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "During meiosis, crossing over exchanges alleles between homologous chromosomes and independent assortment shuffles which chromosomes go into each gamete; random fertilisation then combines gametes — producing genetically different offspring.",
            commonErrors: ["Only mentioning 'gametes are different' without the mechanisms."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the chromosome number and genetic makeup of daughter cells produced by mitosis and meiosis from a diploid parent cell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Mitosis vs meiosis outcomes", statement: "Mitosis: diploid, identical. Meiosis: haploid, different." },
            ],
            steps: [
              { reasoning: "Mitosis daughter cells remain diploid (2n).", working: "\\text{mitosis: 2n}", marks: 1, markCode: "M" },
              { reasoning: "Meiosis gametes are haploid (n).", working: "\\text{meiosis: n}", marks: 1, markCode: "M" },
              { reasoning: "Mitosis cells are genetically identical to parent.", working: "\\text{identical}", marks: 1, markCode: "M" },
              { reasoning: "Meiosis cells are genetically different from each other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis produces 2 diploid daughter cells genetically identical to the parent; meiosis produces 4 haploid gametes that are genetically different from one another.",
            commonErrors: ["Saying meiosis produces diploid cells — gametes are haploid."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which cells are produced by meiosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stem cells" },
              { id: "b", text: "Haploid gametes" },
              { id: "c", text: "Diploid body cells" },
              { id: "d", text: "Identical daughter cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis product", statement: "Produces haploid, genetically varied gametes." },
            ],
            steps: [
              { reasoning: "Match product to process.", working: "\\text{meiosis} \\to \\text{haploid gametes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Haploid gametes",
            commonErrors: ["Choosing identical cells — meiosis produces varied gametes."],
          },
        },
        {
          id: "cieb-u9-mitosis-meiosis-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Are the daughter cells produced by mitosis genetically identical or genetically different from the parent cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Randomly different" },
              { id: "b", text: "Genetically different" },
              { id: "c", text: "Genetically identical" },
              { id: "d", text: "Half identical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis fidelity", statement: "Daughter cells are exact copies (clones) of the parent." },
            ],
            steps: [
              { reasoning: "Recall mitosis outcome.", working: "\\text{mitosis} \\to \\text{identical}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Genetically identical",
            commonErrors: ["Choosing 'different' — that's meiosis."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u9-inheritance-notes",
      title: "Chromosomes and cell division — revision notes",
      summary: "DNA/genes/chromosomes, mitosis vs meiosis.",
      sections: [
        {
          heading: "Genetic material",
          body: "DNA → genes (protein-coding sections) → chromosomes (DNA+protein). Humans: 46 body cells (2n), 23 gametes (n). Alleles = gene variants.",
        },
        {
          heading: "Cell division",
          body: "Mitosis: 1 division → 2 diploid identical cells (growth/repair). Meiosis: 2 divisions → 4 haploid varied gametes (sexual reproduction).",
        },
        {
          heading: "Exam technique",
          body: "- Meiosis halves chromosome number AND creates variation — both are exam points.\n- Mitosis = clones; meiosis = variety.\n- DNA double helix: A-T and C-G base pairs.",
        },
      ],
    },
  ],
};

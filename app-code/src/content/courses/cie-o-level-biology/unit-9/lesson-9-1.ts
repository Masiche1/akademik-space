import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "olbio-u9-lesson-9-1",
  code: "9-1",
  title: "Chromosomes, Genes and Cell Division",
  goal: "I CAN describe chromosomes, genes and DNA, and compare mitosis and meiosis.",
  standards: ["5090 9.1", "5090 9.2"],
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
      id: "olbio-u9-chromosomes",
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
          id: "olbio-u9-chromosomes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a gene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A whole chromosome" },
              { id: "b", text: "A type of cell" },
              { id: "c", text: "A gamete" },
              { id: "d", text: "A section of DNA coding for a protein" },
            ],
            correctChoiceId: "d",
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
          id: "olbio-u9-chromosomes-q2",
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
          id: "olbio-u9-chromosomes-q3",
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
          id: "olbio-u9-chromosomes-q4",
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
          id: "olbio-u9-chromosomes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sequence shows the correct hierarchy of genetic material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genes → DNA → chromosomes → cytoplasm" },
              { id: "b", text: "Chromosomes → genes → DNA → nucleus" },
              { id: "c", text: "DNA → genes → chromosomes → nucleus" },
              { id: "d", text: "Nucleus → chromosomes → DNA → genes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Genetic hierarchy", statement: "DNA contains genes; chromosomes package DNA and protein in the nucleus." },
            ],
            steps: [
              { reasoning: "Recall the order from smallest to largest packaging.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** DNA → genes → chromosomes → nucleus",
            commonErrors: ["Reversing DNA and chromosomes — DNA is inside chromosomes."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many chromosomes are found in a human gamete?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "46" },
              { id: "c", text: "23" },
              { id: "d", text: "92" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete chromosome number", statement: "Human gametes are haploid with 23 chromosomes." },
            ],
            steps: [
              { reasoning: "Gametes are haploid (n = 23).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 23",
            commonErrors: ["Choosing 46 — that is the diploid body-cell number."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is meant by a homologous pair of chromosomes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two chromatids joined at the centromere" },
              { id: "b", text: "Two sex chromosomes only" },
              { id: "c", text: "Two identical chromosomes from the same parent" },
              { id: "d", text: "One chromosome from each parent carrying the same genes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous pair", statement: "Matching chromosomes, one maternal and one paternal, with the same genes." },
            ],
            steps: [
              { reasoning: "Match the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One chromosome from each parent carrying the same genes",
            commonErrors: ["Confusing homologous pairs with sister chromatids."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In DNA, which base pairs with adenine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Uracil" },
              { id: "b", text: "Cytosine" },
              { id: "c", text: "Thymine" },
              { id: "d", text: "Guanine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA base pairing", statement: "A pairs with T and C pairs with G." },
            ],
            steps: [
              { reasoning: "Recall complementary base pairing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Thymine",
            commonErrors: ["Choosing uracil — that is RNA, not DNA."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes an allele?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An alternative form of a gene" },
              { id: "b", text: "A type of gamete" },
              { id: "c", text: "A section of cytoplasm" },
              { id: "d", text: "A whole chromosome" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Allele", statement: "Different forms of the same gene, such as T and t." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An alternative form of a gene",
            commonErrors: ["Confusing allele with gene — a gene has alleles."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the number of chromosomes in a human body cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 46, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Human chromosome number", statement: "Body cells are diploid with 46 chromosomes." },
            ],
            steps: [
              { reasoning: "Give the diploid number.", working: "\\text{46}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "46 chromosomes",
            commonErrors: ["Writing 23 — that is the haploid gamete number."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State the number of chromosomes in a human sperm or egg cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "chromosomes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Human gamete number", statement: "Gametes are haploid with 23 chromosomes." },
            ],
            steps: [
              { reasoning: "Give the haploid number.", working: "\\text{23}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "23 chromosomes",
            commonErrors: ["Writing 46 — gametes have half the body-cell number."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many homologous pairs are present in a human body cell?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23, unit: "pairs" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Homologous pairs", statement: "46 chromosomes form 23 homologous pairs." },
            ],
            steps: [
              { reasoning: "Divide the diploid number by two.", working: "46/2 = 23", marks: 1, markCode: "M" },
            ],
            finalAnswer: "23 pairs",
            commonErrors: ["Answering 46 — chromosomes, not pairs, are counted as 46."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A diploid species has 10 pairs of homologous chromosomes. Enter the haploid and diploid chromosome numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "chromosomes" },
              { label: "b", answer: 20, unit: "chromosomes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ploidy", statement: "Haploid = n; diploid = 2n." },
            ],
            steps: [
              { reasoning: "Haploid number is one set of chromosomes.", working: "n = 10", marks: 1, markCode: "M" },
              { reasoning: "Diploid number is two sets.", working: "2n = 20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Haploid = 10; diploid = 20",
            commonErrors: ["Doubling the haploid number incorrectly or reversing n and 2n."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "At fertilisation, how many chromosomes does each parent contribute to a human zygote?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 23, unit: "chromosomes" },
              { label: "b", answer: 23, unit: "chromosomes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation", statement: "Each haploid gamete contributes 23 chromosomes." },
            ],
            steps: [
              { reasoning: "Egg contributes one haploid set.", working: "\\text{egg} = 23", marks: 1, markCode: "M" },
              { reasoning: "Sperm contributes one haploid set.", working: "\\text{sperm} = 23", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mother contributes 23; father contributes 23",
            commonErrors: ["Saying one parent contributes 46 — gametes are haploid."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A diploid organism has 12 pairs of homologous chromosomes. How many chromosomes are in one of its gametes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "48" },
              { id: "b", text: "12" },
              { id: "c", text: "6" },
              { id: "d", text: "24" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Haploid number", statement: "Gametes contain one chromosome from each homologous pair." },
            ],
            steps: [
              { reasoning: "12 pairs give a haploid number of 12.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 12",
            commonErrors: ["Choosing 24 — that is the diploid body-cell number."],
          },
        },
        {
          id: "olbio-u9-chromosomes-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why homologous chromosomes are important in inheritance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Homologous chromosomes", statement: "They carry the same genes and allow alleles to be inherited in pairs." },
            ],
            steps: [
              { reasoning: "Homologous chromosomes carry the same genes.", working: "\\text{same genes}", marks: 1, markCode: "M" },
              { reasoning: "One member comes from each parent.", working: "\\text{maternal/paternal}", marks: 1, markCode: "M" },
              { reasoning: "They may carry different alleles for a gene.", working: "\\text{alleles}", marks: 1, markCode: "M" },
              { reasoning: "Conclude they enable variation and normal diploid inheritance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Homologous chromosomes carry the same genes, one inherited from each parent, and can hold different alleles — allowing variation while maintaining the diploid chromosome number.",
            commonErrors: ["Saying they are identical — they can carry different alleles."],
          },
        },
      ],
    },
    {
      id: "olbio-u9-mitosis-meiosis",
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
          id: "olbio-u9-mitosis-meiosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process produces gametes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fertilisation" },
              { id: "b", text: "Pollination" },
              { id: "c", text: "Meiosis" },
              { id: "d", text: "Mitosis" },
            ],
            correctChoiceId: "c",
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
          id: "olbio-u9-mitosis-meiosis-q2",
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
          id: "olbio-u9-mitosis-meiosis-q3",
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
          id: "olbio-u9-mitosis-meiosis-q4",
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
          id: "olbio-u9-mitosis-meiosis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process produces two genetically identical diploid daughter cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA replication" },
              { id: "b", text: "Meiosis" },
              { id: "c", text: "Fertilisation" },
              { id: "d", text: "Mitosis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis", statement: "One division gives two identical diploid cells." },
            ],
            steps: [
              { reasoning: "Match the product to the process.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mitosis",
            commonErrors: ["Choosing meiosis — it gives four varied haploid cells."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of meiosis in humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth and repair" },
              { id: "b", text: "Production of gametes for sexual reproduction" },
              { id: "c", text: "Increasing chromosome number" },
              { id: "d", text: "Replacing dead skin cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis role", statement: "Meiosis produces haploid gametes and genetic variation." },
            ],
            steps: [
              { reasoning: "Recall the role of meiosis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Production of gametes for sexual reproduction",
            commonErrors: ["Choosing growth/repair — that is mitosis."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process is used in asexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollination" },
              { id: "b", text: "Meiosis" },
              { id: "c", text: "Mitosis" },
              { id: "d", text: "Fertilisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual reproduction", statement: "Mitosis gives genetically identical offspring." },
            ],
            steps: [
              { reasoning: "Asexual offspring are clones from mitosis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mitosis",
            commonErrors: ["Choosing meiosis — that introduces variation for sexual reproduction."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a role of mitosis in the human body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth and repair of tissues" },
              { id: "b", text: "Creating genetic variation" },
              { id: "c", text: "Producing sperm" },
              { id: "d", text: "Producing eggs" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis role", statement: "Mitosis supports growth, repair and asexual reproduction." },
            ],
            steps: [
              { reasoning: "Identify a mitotic role.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Growth and repair of tissues",
            commonErrors: ["Choosing sperm/eggs — those come from meiosis."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about meiosis is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces two diploid identical cells" },
              { id: "b", text: "It occurs only in gametes after fertilisation" },
              { id: "c", text: "It keeps the chromosome number unchanged" },
              { id: "d", text: "It produces four haploid genetically different cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis product", statement: "Four haploid daughter cells with genetic variation." },
            ],
            steps: [
              { reasoning: "Recall the product of meiosis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It produces four haploid genetically different cells",
            commonErrors: ["Choosing identical cells — meiosis creates variation."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many daughter cells are produced by one mitotic division?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "cells" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis product", statement: "Mitosis produces two daughter cells." },
            ],
            steps: [
              { reasoning: "Recall the number of products.", working: "\\text{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 cells",
            commonErrors: ["Answering 4 — that is meiosis."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many gametes are produced from one cell undergoing meiosis?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "gametes" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Meiosis product", statement: "Meiosis produces four haploid gametes." },
            ],
            steps: [
              { reasoning: "Recall the number of products.", working: "\\text{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 gametes",
            commonErrors: ["Answering 2 — that is mitosis."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Enter the number of divisions in mitosis and in meiosis.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, unit: "division" },
              { label: "b", answer: 2, unit: "divisions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cell division", statement: "Mitosis = one division; meiosis = two divisions." },
            ],
            steps: [
              { reasoning: "Mitosis has one division.", working: "\\text{mitosis} = 1", marks: 1, markCode: "M" },
              { reasoning: "Meiosis has two divisions.", working: "\\text{meiosis} = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis = 1 division; meiosis = 2 divisions",
            commonErrors: ["Reversing the numbers."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A diploid cell has 20 chromosomes. Enter the chromosome number in its daughter cells after mitosis and in gametes after meiosis.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "chromosomes" },
              { label: "b", answer: 10, unit: "chromosomes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Chromosome number", statement: "Mitosis keeps 2n; meiosis halves to n." },
            ],
            steps: [
              { reasoning: "Mitosis maintains the diploid number.", working: "2n = 20", marks: 1, markCode: "M" },
              { reasoning: "Meiosis halves the chromosome number.", working: "n = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis daughters = 20; meiosis gametes = 10",
            commonErrors: ["Halving for mitosis — mitosis preserves chromosome number."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "If 200 cells each undergo one mitotic division, how many daughter cells are produced in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "cells" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell number", statement: "Daughter cells = parent cells × 2 for one mitotic division." },
            ],
            steps: [
              { reasoning: "Each of 200 cells produces 2 cells.", working: "200 × 2 = 400", marks: 1, markCode: "M" },
            ],
            finalAnswer: "400 cells",
            commonErrors: ["Answering 200 — mitosis doubles the cell number."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A human body cell has 46 chromosomes and undergoes mitosis. How many chromosomes are in each daughter cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "46" },
              { id: "b", text: "23" },
              { id: "c", text: "92" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis chromosome number", statement: "Daughter cells receive the same chromosome number as the parent." },
            ],
            steps: [
              { reasoning: "Mitosis preserves 2n = 46.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 46",
            commonErrors: ["Choosing 23 — that would be after meiosis."],
          },
        },
        {
          id: "olbio-u9-mitosis-meiosis-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why mitosis is needed for growth and repair.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitosis role", statement: "Mitosis produces identical diploid cells for tissue growth and replacement." },
            ],
            steps: [
              { reasoning: "Mitosis produces genetically identical daughter cells.", working: "\\text{identical cells}", marks: 1, markCode: "M" },
              { reasoning: "Identical cells can replace damaged tissue.", working: "\\text{repair}", marks: 1, markCode: "M" },
              { reasoning: "Daughter cells remain diploid, preserving chromosome number.", working: "2n \\to 2n", marks: 1, markCode: "M" },
              { reasoning: "Conclude it supports growth and repair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis produces genetically identical diploid daughter cells, so new cells can be added for growth and can replace damaged or dead cells during repair while keeping the chromosome number constant.",
            commonErrors: ["Saying mitosis creates variation — it produces clones."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u9-inheritance-notes",
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

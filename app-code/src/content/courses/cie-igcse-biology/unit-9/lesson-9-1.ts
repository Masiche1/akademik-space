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
              { id: "b", text: "A whole chromosome" },
              { id: "c", text: "A type of cell" },
              { id: "d", text: "A gamete" },
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
              { id: "b", text: "Mitosis" },
              { id: "c", text: "Fertilisation" },
              { id: "d", text: "Pollination" },
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

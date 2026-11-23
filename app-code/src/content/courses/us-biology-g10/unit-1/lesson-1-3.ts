import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "bio10-u1-lesson-1-3",
  code: "1-3",
  title: "Cell Division: Mitosis and Meiosis",
  goal: "I CAN describe the stages of mitosis and meiosis, compare their outcomes, and explain their roles in growth and reproduction.",
  standards: ["HS-LS1-4", "HS-LS3-1"],
  vocabulary: [
    { term: "Mitosis", definition: "Division of a eukaryotic cell nucleus producing two genetically identical daughter nuclei." },
    { term: "Meiosis", definition: "Two rounds of division producing four genetically different haploid cells (gametes)." },
    { term: "Chromosome", definition: "A structure of DNA and protein; humans have 46 (23 pairs)." },
    { term: "Chromatid", definition: "One of two identical copies of a duplicated chromosome joined at the centromere." },
    { term: "Homologous chromosomes", definition: "Chromosome pairs (one from each parent) carrying genes for the same traits." },
    { term: "Haploid", definition: "Cell with one set of chromosomes (n); gametes have n=23 in humans." },
    { term: "Diploid", definition: "Cell with two sets of chromosomes (2n); body cells have 2n=46 in humans." },
  ],
  concepts: [
    {
      id: "bio10-u1-mitosis",
      title: "Mitosis",
      skill: "Describe the phases of mitosis and explain how it produces identical daughter cells.",
      lesson: {
        sections: [
          {
            heading: "Purpose of mitosis",
            body: "Mitosis produces two genetically identical daughter cells for growth, repair and asexual reproduction. Before mitosis, DNA replicates so each chromosome has two sister chromatids.",
          },
          {
            heading: "Phases of mitosis",
            body: "- **Prophase**: chromosomes condense, nuclear envelope breaks down, spindle forms\n- **Metaphase**: chromosomes align at the cell's equator (metaphase plate)\n- **Anaphase**: sister chromatids separate and move to opposite poles\n- **Telophase**: chromosomes decondense, nuclear envelopes reform\n- **Cytokinesis**: cytoplasm divides, producing two daughter cells",
          },
          {
            heading: "Genetic identity",
            body: "Because sister chromatids are identical copies, mitosis produces daughter cells with the SAME genetic material as the parent. This maintains chromosome number (2n → 2n) and genetic consistency in body tissues.",
          },
        ],
        keyFormulas: [
          { name: "Mitosis result", statement: "2 diploid (2n) daughter cells, genetically identical" },
          { name: "Phases", statement: "PMAT: Prophase, Metaphase, Anaphase, Telophase" },
        ],
        workedExample: {
          problem: "A human skin cell (46 chromosomes) undergoes mitosis. How many chromosomes does each daughter cell have?",
          solution: "Each daughter cell has 46 chromosomes — mitosis maintains the diploid number. The 46 chromosomes each had 92 chromatids after replication, but chromatids separate into 46 chromosomes per cell.",
        },
      },
      questions: [
        {
          id: "bio10-u1-mitosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of mitosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce gametes" },
              { id: "b", text: "Produce genetically identical cells for growth and repair" },
              { id: "c", text: "Reduce chromosome number" },
              { id: "d", text: "Create genetic diversity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Mitosis", statement: "Produces identical diploid cells for growth/repair." }],
            steps: [{ reasoning: "Mitosis produces two identical daughter cells for growth and tissue repair.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Identical cells for growth/repair",
            commonErrors: ["Confusing mitosis with meiosis."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u1-mitosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "During which phase of mitosis do sister chromatids separate and move to opposite poles?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Anaphase", statement: "Sister chromatids separate in anaphase." }],
            steps: [
              { reasoning: "The phase is anaphase.", marks: 1, markCode: "B" },
              { reasoning: "Spindle fibers pull sister chromatids apart toward opposite poles.", marks: 1, markCode: "R" },
              { reasoning: "Each chromatid is now an independent chromosome.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anaphase — sister chromatids separate.",
            commonErrors: ["Confusing metaphase (alignment) with anaphase (separation)."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u1-mitosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why mitosis produces genetically identical cells while meiosis produces different ones.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mitosis", statement: "One division; sister chromatids are identical." },
              { kind: "principle", name: "Meiosis", statement: "Two divisions; crossing over and independent assortment create variation." },
            ],
            steps: [
              { reasoning: "Mitosis: DNA replicates once, then one division separates identical sister chromatids.", marks: 1, markCode: "R" },
              { reasoning: "No crossing over or independent assortment occurs between homologous chromosomes.", marks: 1, markCode: "B" },
              { reasoning: "Meiosis: crossing over in prophase I and random assortment in metaphase I shuffle alleles.", marks: 1, markCode: "B" },
              { reasoning: "Two divisions produce four haploid cells, each genetically unique.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis: identical chromatids, one division. Meiosis: crossing over + assortment, two divisions → variation.",
            commonErrors: ["Thinking DNA replication creates diversity."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u1-mitosis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A cell with 8 chromosomes undergoes mitosis, followed by cytokinesis.",
          parts: [
            { label: "a", prompt: "How many chromosomes does the cell have after DNA replication but before division?", marks: 2 },
            { label: "b", prompt: "How many chromosomes does each daughter cell have after mitosis and cytokinesis?", marks: 2 },
            { label: "c", prompt: "If the parent cell is diploid, what is its ploidy? What about the daughter cells?", marks: 2 },
            { label: "d", prompt: "Describe what happens to chromosomes during each phase (prophase through telophase).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "DNA replication", statement: "Each chromosome → two sister chromatids (still counted as one chromosome until separation)." },
              { kind: "principle", name: "Mitosis", statement: "Produces two identical diploid cells." },
            ],
            steps: [
              { reasoning: "After replication: still 8 chromosomes, but each has 2 sister chromatids (16 chromatids total).", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Each daughter cell has 8 chromosomes.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Parent is diploid (2n=8); daughters are also diploid (2n=8).", marks: 2, markCode: "A", part: "c" },
              { reasoning: "Prophase: chromosomes condense, nuclear envelope breaks down, spindle forms.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Metaphase: chromosomes align at metaphase plate.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Anaphase: sister chromatids separate to opposite poles.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Telophase: chromosomes decondense, nuclear envelopes reform; cytokinesis follows.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 8 chromosomes, 16 chromatids (b) 8 chromosomes each (c) all diploid (d) PMAT phases described.",
            commonErrors: ["Counting chromatids as chromosomes after replication."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u1-meiosis",
      title: "Meiosis and genetic variation",
      skill: "Describe meiosis I and II, explain sources of genetic variation, and compare meiosis to mitosis.",
      lesson: {
        sections: [
          {
            heading: "Meiosis overview",
            body: "Meiosis produces **gametes** (sperm and eggs) through two divisions:\n\n- **Meiosis I**: homologous chromosomes separate (reductional division) → 2 haploid cells\n- **Meiosis II**: sister chromatids separate (like mitosis) → 4 haploid cells\n\nResult: 4 genetically different haploid cells from one diploid parent.",
          },
          {
            heading: "Sources of variation",
            body: "1. **Crossing over**: homologous chromosomes exchange segments during prophase I, creating new allele combinations.\n2. **Independent assortment**: homologous pairs align randomly at metaphase I — 2^n possible combinations (n = chromosome pairs; humans: 2^23 ≈ 8 million).\n3. **Random fertilization**: which sperm fertilizes which egg adds more variation.",
          },
          {
            heading: "Meiosis vs mitosis",
            body: "| Feature | Mitosis | Meiosis |\n|---------|---------|---------|\n| Divisions | 1 | 2 |\n| Daughter cells | 2 diploid | 4 haploid |\n| Genetic result | Identical | Different |\n| Purpose | Growth/repair | Gamete production |\n| Crossing over | No | Yes (prophase I) |",
          },
        ],
        keyFormulas: [
          { name: "Meiosis result", statement: "4 haploid (n) genetically different cells" },
          { name: "Independent assortment", statement: "2^n possible gamete combinations" },
        ],
        workedExample: {
          problem: "Humans have 23 chromosome pairs. How many genetically different gametes can one person produce by independent assortment alone?",
          solution: "2^23 = 8,388,608 ≈ 8.4 million different gametes — before counting crossing over or random fertilization.",
        },
      },
      questions: [
        {
          id: "bio10-u1-meiosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the result of meiosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 identical diploid cells" },
              { id: "b", text: "4 different haploid cells" },
              { id: "c", text: "2 different diploid cells" },
              { id: "d", text: "4 identical haploid cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Meiosis", statement: "Produces 4 genetically different haploid gametes." }],
            steps: [{ reasoning: "Meiosis produces four haploid cells that are genetically different due to crossing over and independent assortment.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 4 different haploid cells",
            commonErrors: ["Confusing with mitosis result."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u1-meiosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the two main sources of genetic variation in meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crossing over", statement: "Homologous chromosomes exchange segments in prophase I." },
              { kind: "principle", name: "Independent assortment", statement: "Random alignment of homologous pairs in metaphase I." },
            ],
            steps: [
              { reasoning: "Crossing over: homologous chromosomes swap segments during prophase I.", marks: 1, markCode: "B" },
              { reasoning: "Independent assortment: homologous pairs align randomly at metaphase I.", marks: 1, markCode: "B" },
              { reasoning: "Both create new allele combinations on chromosomes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Crossing over and independent assortment.",
            commonErrors: ["Listing mutation as a meiosis-specific source."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u1-meiosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A species has 4 chromosome pairs (2n = 8). How many different gametes can be produced by independent assortment alone?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Independent assortment", statement: "$2^n$ where n = number of chromosome pairs." }],
            steps: [
              { reasoning: "n = 4 chromosome pairs.", marks: 1, markCode: "B" },
              { reasoning: "Number of gametes = $2^4 = 16$.", working: "2^4=16", marks: 1, markCode: "M" },
              { reasoning: "Answer: 16 different gametes.", marks: 1, markCode: "A" },
              { reasoning: "This doesn't include crossing over, which would increase diversity further.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "16 gametes (before crossing over).",
            commonErrors: ["Using 2n instead of n."],
            examinerNote: "B1, M1, A1, R1.",
          },
        },
        {
          id: "bio10-u1-meiosis-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare mitosis and meiosis in a table, then explain why both are necessary for sexual reproduction.",
          parts: [
            { label: "a", prompt: "Complete the comparison: number of divisions, daughter cells produced, ploidy of daughter cells, genetic similarity, crossing over.", marks: 5 },
            { label: "b", prompt: "Explain why meiosis is necessary before fertilization.", marks: 3 },
            { label: "c", prompt: "Explain why mitosis is still needed after fertilization.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mitosis vs meiosis", statement: "Mitosis: 1 division, 2 identical diploid; Meiosis: 2 divisions, 4 different haploid." },
              { kind: "principle", name: "Sexual reproduction", statement: "Meiosis makes gametes; fertilization restores diploid; mitosis makes body cells." },
            ],
            steps: [
              { reasoning: "Divisions: mitosis 1, meiosis 2.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Daughter cells: mitosis 2, meiosis 4.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Ploidy: mitosis diploid (2n), meiosis haploid (n).", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Genetic similarity: mitosis identical, meiosis different.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Crossing over: mitosis no, meiosis yes.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Meiosis halves chromosome number so fertilization restores 2n; without it, chromosome number would double each generation.", marks: 2, markCode: "R", part: "b" },
              { reasoning: "Meiosis also creates genetic variation in gametes.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "After fertilization, mitosis produces all body cells for growth and repair.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Mitosis maintains the diploid chromosome number in somatic cells.", marks: 1, markCode: "B", part: "c" },
            ],
            finalAnswer: "(a) table completed (b) meiosis halves chromosome number + creates variation (c) mitosis produces body cells.",
            commonErrors: ["Thinking fertilization alone restores chromosome number."],
            examinerNote: "5+3+2 = 10.",
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypb4-u1-lesson-1-3",
  code: "1-3",
  title: "Cell Division and Levels of Organization",
  goal: "I CAN describe mitosis and meiosis, explain the differences between them, and describe levels of biological organization.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Mitosis", definition: "Nuclear division producing two genetically identical diploid daughter cells; used for growth and repair." },
    { term: "Meiosis", definition: "Two-stage nuclear division producing four genetically different haploid gametes; used for sexual reproduction." },
    { term: "Chromosome", definition: "Condensed DNA structure carrying genes; humans have 46 (23 pairs)." },
    { term: "Diploid (2n)", definition: "Cell with two sets of chromosomes — all body cells." },
    { term: "Haploid (n)", definition: "Cell with one set of chromosomes — gametes (sperm/egg)." },
    { term: "Levels of organization", definition: "Cell → tissue → organ → organ system → organism." },
  ],
  concepts: [
    {
      id: "mypb4-u1-division",
      title: "Mitosis and meiosis",
      skill: "Distinguish mitosis and meiosis by process, products, and purpose.",
      lesson: {
        sections: [
          {
            heading: "Mitosis stages",
            body: "**Prophase**: chromosomes condense, nuclear envelope breaks down, spindle forms. **Metaphase**: chromosomes line up at equator. **Anaphase**: sister chromatids separate to opposite poles. **Telophase**: nuclear envelopes reform, cytokinesis divides cytoplasm → two identical diploid cells.",
          },
          {
            heading: "Meiosis",
            body: "Two divisions: **Meiosis I** separates homologous chromosome pairs (reduction division → haploid); **Meiosis II** separates sister chromatids. Crossing over in prophase I creates genetic variation. Result: 4 genetically different haploid gametes.",
          },
          {
            heading: "Key differences",
            body: "Mitosis: 1 division, 2 diploid identical cells, growth/repair. Meiosis: 2 divisions, 4 haploid varied cells, gamete production. Fertilization restores diploid number.",
          },
        ],
        keyFormulas: [
          { name: "Mitosis", statement: "1 division → 2 diploid identical cells" },
          { name: "Meiosis", statement: "2 divisions → 4 haploid varied gametes" },
          { name: "Chromosome number", statement: "Gametes n; body cells 2n; fertilization restores 2n" },
        ],
        workedExample: {
          problem: "A human cell (46 chromosomes) undergoes mitosis. How many chromosomes in each daughter cell?",
          solution: "46 — mitosis produces genetically identical diploid cells; chromosome number unchanged.",
        },
      },
      questions: [
        {
          id: "mypb4-u1-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of mitosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduction of chromosome number" },
              { id: "b", text: "Growth and repair of body tissues" },
              { id: "c", text: "Production of gametes" },
              { id: "d", text: "Genetic variation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitosis", statement: "Produces identical diploid cells for growth and repair." },
            ],
            steps: [
              { reasoning: "Mitosis creates identical cells for tissue growth and wound healing.", working: "\\text{growth/repair}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Growth and repair",
            commonErrors: ["Confusing with meiosis."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u1-div-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many daughter cells does meiosis produce and what is their chromosome number relative to the parent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 haploid cells (half the chromosomes)" },
              { id: "b", text: "2 diploid cells" },
              { id: "c", text: "2 haploid cells" },
              { id: "d", text: "4 diploid cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Meiosis", statement: "Two divisions → 4 haploid genetically varied gametes." },
            ],
            steps: [
              { reasoning: "Meiosis produces 4 haploid cells — half the chromosome number of parent.", working: "4\\text{ haploid}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "4\\text{ haploid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 haploid cells",
            commonErrors: ["Saying 2 cells like mitosis."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "During which stage of meiosis does crossing over occur, and what is its significance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anaphase II — separates chromatids" },
              { id: "b", text: "Telophase — reforms nuclei" },
              { id: "c", text: "Metaphase I — lines up chromosomes" },
              { id: "d", text: "Prophase I — exchanges genetic material between homologous chromosomes, increasing variation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crossing over", statement: "Occurs in prophase I; creates new allele combinations." },
            ],
            steps: [
              { reasoning: "Crossing over happens in prophase I of meiosis.", working: "\\text{prophase I}", marks: 1, markCode: "M" },
              { reasoning: "It swaps segments between homologous chromosomes → genetic variation.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { reasoning: "State significance.", working: "\\text{new combinations}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prophase I; increases genetic variation",
            commonErrors: ["Saying crossing over happens in mitosis."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A human body cell has 46 chromosomes.",
          parts: [
            { label: "a", prompt: "How many chromosomes in a sperm cell?", marks: 1 },
            { label: "b", prompt: "How many chromosomes in a fertilised egg (zygote)?", marks: 1 },
            { label: "c", prompt: "A skin cell undergoes mitosis. How many chromosomes in each daughter cell and how many divisions produce 8 cells?", marks: 3 },
            { label: "d", prompt: "Draw/describe the sequence of events in mitosis in order.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell division", statement: "Meiosis halves chromosome number; mitosis preserves it." },
            ],
            steps: [
              { part: "a", reasoning: "Sperm is haploid: 23 chromosomes.", working: "23", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zygote = sperm + egg = 23+23 = 46 chromosomes.", working: "46", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each daughter cell has 46 chromosomes (diploid maintained).", working: "46", marks: 1, markCode: "M" },
              { part: "c", reasoning: "To get 8 cells: 3 divisions ($2^3=8$).", working: "3\\text{ divisions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both answers.", working: "46,3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Prophase → metaphase → anaphase → telophase → cytokinesis.", working: "PMAT+C", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Key events: condensation, alignment, separation, division.", working: "\\text{stages}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete sequence in order.", working: "\\text{ordered}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 23 (b) 46 (c) 46 chromosomes; 3 divisions (d) prophase, metaphase, anaphase, telophase, cytokinesis",
            commonErrors: ["In (c), thinking mitosis halves chromosomes."],
            examinerNote: "A1 for (a), A1 for (b), M1 M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u1-div-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During which stage of mitosis do chromosomes line up at the equator of the cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anaphase" },
              { id: "b", text: "Prophase" },
              { id: "c", text: "Telophase" },
              { id: "d", text: "Metaphase" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitosis stages", statement: "Prophase: condense; metaphase: align at equator; anaphase: separate; telophase: reform nuclei." },
            ],
            steps: [
              { reasoning: "Alignment at the equator is the defining feature of metaphase.", working: "\\text{metaphase}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Metaphase",
            commonErrors: ["Confusing with anaphase when chromatids separate."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypb4-u1-div-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many nuclear divisions occur in meiosis, and what is produced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One division producing two diploid cells" },
              { id: "b", text: "Two divisions producing four haploid gametes" },
              { id: "c", text: "Two divisions producing two diploid cells" },
              { id: "d", text: "One division producing four haploid cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Meiosis", statement: "Two divisions (Meiosis I and II) → 4 genetically varied haploid gametes." },
            ],
            steps: [
              { reasoning: "Meiosis involves Meiosis I (homologous separation) and Meiosis II (chromatid separation).", working: "2\\text{ divisions}", marks: 1, markCode: "M" },
              { reasoning: "Result: four haploid cells.", working: "4\\text{ haploid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two divisions → four haploid gametes",
            commonErrors: ["Describing it like mitosis with one division."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is meiosis essential for sexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It repairs damaged DNA" },
              { id: "b", text: "It produces identical cells for growth" },
              { id: "c", text: "It increases chromosome number" },
              { id: "d", text: "It halves the chromosome number so fertilization restores it, and creates genetic variation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meiosis significance", statement: "Reduction division prevents chromosome doubling; crossing over + independent assortment create variation." },
            ],
            steps: [
              { reasoning: "Meiosis halves chromosome number — gametes are haploid.", working: "n", marks: 1, markCode: "M" },
              { reasoning: "Fertilization of two haploid gametes restores diploid number.", working: "2n", marks: 1, markCode: "M" },
              { reasoning: "Crossing over and random assortment produce varied gametes.", working: "\\text{variation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Halves chromosome number and creates genetic variation",
            commonErrors: ["Saying meiosis produces identical cells."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A body cell of a species has 20 chromosomes. (a) How many chromosomes will each daughter cell have after mitosis? (b) How many will each gamete have after meiosis?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chromosome number", statement: "Mitosis preserves 2n; meiosis produces n = half." },
            ],
            steps: [
              { reasoning: "Mitosis keeps chromosome number: 20.", working: "20", marks: 1, markCode: "M" },
              { reasoning: "Meiosis halves it: $20/2 = 10$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 20, b) 10",
            commonErrors: ["Halving the mitosis result."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A human body cell has 46 chromosomes. (a) How many chromosomes are in a sperm cell? (b) How many are in an egg cell? (c) How many are in the fertilised zygote?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 23 },
              { label: "b", answer: 23 },
              { label: "c", answer: 46 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Human chromosome numbers", statement: "Body cells 2n = 46; gametes n = 23; zygote 2n = 46." },
            ],
            steps: [
              { reasoning: "Sperm is haploid: $46/2 = 23$.", working: "23", marks: 1, markCode: "M" },
              { reasoning: "Egg is also haploid: 23.", working: "23", marks: 1, markCode: "M" },
              { reasoning: "Zygote $= 23 + 23 = 46$.", working: "46", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 23, b) 23, c) 46",
            commonErrors: ["Giving the zygote 23 chromosomes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A species has a diploid number of 48 chromosomes. (a) What is its haploid number? (b) How many gametes does one meiosis produce? (c) How many mitotic divisions are needed to produce 16 cells from one cell? (d) How many chromosomes will the zygote have after fertilization?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24 },
              { label: "b", answer: 4 },
              { label: "c", answer: 4 },
              { label: "d", answer: 48 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell division math", statement: "n = 2n/2; mitosis doubles cells each division ($2^d$); zygote restores 2n." },
            ],
            steps: [
              { reasoning: "Haploid $= 48/2 = 24$.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "Meiosis produces 4 gametes.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "$2^4 = 16$ → 4 mitotic divisions.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Zygote $= 24 + 24 = 48$.", working: "48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 24, b) 4, c) 4, d) 48",
            commonErrors: ["In (c), answering 16 divisions instead of 4."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are there in mitosis (prophase, metaphase, anaphase, telophase)?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitosis stages", statement: "PMAT: prophase, metaphase, anaphase, telophase = 4 stages." },
            ],
            steps: [
              { reasoning: "Four named stages before cytokinesis.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting cytokinesis as a fifth stage."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u1-div-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cell undergoes mitosis repeatedly. (a) How many daughter cells result from 3 successive mitotic divisions? (b) How many divisions are needed to produce 32 cells from one starting cell?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cell doubling", statement: "Each mitosis doubles cell number: $2^d$ cells after $d$ divisions." },
            ],
            steps: [
              { reasoning: "$2^3 = 8$ cells after 3 divisions.", working: "2^3=8", marks: 1, markCode: "M" },
              { reasoning: "$2^5 = 32$ → 5 divisions.", working: "2^5=32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 8, b) 5",
            commonErrors: ["Adding 2 cells per division instead of doubling."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A species has a diploid number of 14 chromosomes. (a) What is its haploid number? (b) How many gametes does one complete meiosis produce? (c) How many chromosomes will the zygote have after two gametes fuse?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 4 },
              { label: "c", answer: 14 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ploidy", statement: "Haploid = diploid/2; meiosis → 4 gametes; fertilization restores diploid." },
            ],
            steps: [
              { reasoning: "Haploid $= 14/2 = 7$.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "Meiosis produces 4 gametes.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Zygote $= 7 + 7 = 14$.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 7, b) 4, c) 14",
            commonErrors: ["In (c), giving 7 — forgetting two gametes fuse."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-div-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Describe the stages of mitosis in order.",
          parts: [
            { label: "a", prompt: "Name the first two stages.", marks: 1 },
            { label: "b", prompt: "Name the last two stages.", marks: 1 },
            { label: "c", prompt: "State what happens in metaphase.", marks: 1 },
            { label: "d", prompt: "State what happens in anaphase.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitosis stages", statement: "Prophase → metaphase → anaphase → telophase → cytokinesis." },
            ],
            steps: [
              { part: "a", reasoning: "Prophase, metaphase.", working: "PM", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Anaphase, telophase.", working: "AT", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chromosomes align at the equator.", working: "\\text{equator}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sister chromatids separate to opposite poles.", working: "\\text{separate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prophase, metaphase, anaphase, telophase; metaphase=align, anaphase=separate",
            commonErrors: ["Swapping anaphase and telophase events."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-div-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Compare mitosis and meiosis.",
          parts: [
            { label: "a", prompt: "Number of divisions", marks: 1 },
            { label: "b", prompt: "Number of daughter cells produced", marks: 1 },
            { label: "c", prompt: "Chromosome number of products (diploid/haploid)", marks: 1 },
            { label: "d", prompt: "Genetic similarity of products", marks: 1 },
            { label: "e", prompt: "Main purpose", marks: 1 },
            { label: "f", prompt: "Where it occurs in the body", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Mitosis vs meiosis", statement: "Mitosis: 1 division, 2 diploid identical cells, growth/repair; meiosis: 2 divisions, 4 haploid varied gametes." },
            ],
            steps: [
              { part: "a", reasoning: "Mitosis 1; meiosis 2.", working: "1\\text{ vs }2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mitosis 2; meiosis 4.", working: "2\\text{ vs }4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mitosis diploid; meiosis haploid.", working: "2n\\text{ vs }n", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Mitosis identical; meiosis varied.", working: "identical\\text{ vs varied}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Mitosis growth/repair; meiosis gametes.", working: "\\text{purpose}", marks: 1, markCode: "A" },
              { part: "f", reasoning: "Mitosis body cells; meiosis gonads/ovaries-testes.", working: "\\text{location}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mitosis: 1 div, 2 diploid identical, growth; meiosis: 2 div, 4 haploid varied, gametes",
            commonErrors: ["Confusing product numbers."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-div-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do two siblings produced by sexual reproduction differ genetically, even though they share the same parents?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environment changes chromosome number" },
              { id: "b", text: "Mitosis produces different cells each time" },
              { id: "c", text: "Gametes always have identical DNA" },
              { id: "d", text: "Meiosis creates varied gametes via crossing over and independent assortment; random fertilization adds further variation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genetic variation", statement: "Crossing over (prophase I), independent assortment, and random fertilization create unique gametes." },
            ],
            steps: [
              { reasoning: "Crossing over swaps segments between homologous chromosomes.", working: "\\text{crossing over}", marks: 1, markCode: "M" },
              { reasoning: "Independent assortment randomly distributes chromosomes to gametes.", working: "\\text{assortment}", marks: 1, markCode: "M" },
              { reasoning: "Each fertilization combines different gametes randomly.", working: "\\text{fertilization}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Meiosis variation + random fertilization",
            commonErrors: ["Attributing variation to mitosis."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u1-organization",
      title: "Levels of Organization",
      skill: "Describe the hierarchy from cells to organisms and explain how specialization enables complex life.",
      lesson: {
        sections: [
          {
            heading: "The hierarchy",
            body: "**Cell** (basic unit) → **Tissue** (group of similar cells, e.g. muscle tissue) → **Organ** (different tissues working together, e.g. heart) → **Organ system** (organs cooperating, e.g. circulatory system) → **Organism**.",
          },
          {
            heading: "Cell specialization",
            body: "All cells contain same DNA but express different genes → specialized structure/function. Examples: red blood cells (no nucleus, carry O₂), nerve cells (long axons), root hair cells (large surface area), xylem vessels (dead, hollow tubes).",
          },
          {
            heading: "Tissues and organs",
            body: "Four basic animal tissue types: epithelial (covering/lining), connective (support), muscle (contraction), nervous (coordination). Plant tissues: meristematic (growth), permanent (specialized). Organs combine tissues for specific functions.",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "Cell → tissue → organ → system → organism" },
          { name: "Specialization", statement: "Same DNA, different gene expression" },
          { name: "Tissue types", statement: "Epithelial, connective, muscle, nervous (animal)" },
        ],
        workedExample: {
          problem: "Trace the organization level of the heart.",
          solution: "Cardiac muscle cells → cardiac muscle tissue → heart (organ) → circulatory system → human organism.",
        },
      },
      questions: [
        {
          id: "mypb4-u1-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of biological organization?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell → organ → tissue → system → organism" },
              { id: "b", text: "Tissue → cell → organ → organism → system" },
              { id: "c", text: "Organ → tissue → cell → system → organism" },
              { id: "d", text: "Cell → tissue → organ → organ system → organism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hierarchy", statement: "Cells build up through tissues, organs, systems to organism." },
            ],
            steps: [
              { reasoning: "Standard order: cell, tissue, organ, system, organism.", working: "\\text{hierarchy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cell → organism",
            commonErrors: ["Reversing levels."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u1-org-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do red blood cells lack a nucleus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To reproduce faster" },
              { id: "b", text: "They are not living cells" },
              { id: "c", text: "To maximize space for haemoglobin to carry oxygen" },
              { id: "d", text: "To store more water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specialization", statement: "Losing nucleus frees space for haemoglobin → more O₂ transport." },
            ],
            steps: [
              { reasoning: "No nucleus = more room for haemoglobin = better oxygen carrying.", working: "\\text{haemoglobin}", marks: 1, markCode: "M" },
              { reasoning: "State the advantage.", working: "\\text{more O\\_2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maximizes haemoglobin/oxygen capacity",
            commonErrors: ["Saying RBCs don't need DNA at all."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How can all cells in your body have identical DNA yet perform different functions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different genes are expressed (turned on/off) in different cell types during development" },
              { id: "b", text: "Each cell type has different DNA" },
              { id: "c", text: "Environment changes DNA sequence" },
              { id: "d", text: "Mutations change DNA in each cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gene expression", statement: "All cells share genome; differential gene expression creates specialization." },
            ],
            steps: [
              { reasoning: "Same DNA genome in all cells (except gametes).", working: "\\text{same DNA}", marks: 1, markCode: "M" },
              { reasoning: "Different genes active → different proteins → different functions.", working: "\\text{gene expression}", marks: 1, markCode: "M" },
              { reasoning: "State the mechanism.", working: "\\text{differential expression}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Differential gene expression",
            commonErrors: ["Thinking DNA differs between cell types."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the human digestive system.",
          parts: [
            { label: "a", prompt: "Name three organs in the digestive system.", marks: 1 },
            { label: "b", prompt: "Explain how the stomach wall is adapted for its function.", marks: 3 },
            { label: "c", prompt: "Describe the tissue layers in the stomach wall.", marks: 2 },
            { label: "d", prompt: "Explain how cells → tissues → organ → system organization applies here.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Organ systems", statement: "Organs combine tissues; systems combine organs for whole-body function." },
            ],
            steps: [
              { part: "a", reasoning: "Stomach, small intestine, liver (also large intestine, oesophagus).", working: "\\text{organs}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Muscular walls churn food (mechanical digestion).", working: "\\text{muscle}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gastric glands secrete HCl and pepsin for chemical digestion.", working: "\\text{enzymes+HCl}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mucus lining protects wall from acid.", working: "\\text{mucus}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Epithelial lining (mucosa), muscle layers (movement), connective tissue (support), serosa (outer covering).", working: "\\text{4 layers}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Describe layers.", working: "\\text{tissues}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Epithelial+muscle+connective cells → tissues → stomach organ → digestive system → organism.", working: "\\text{hierarchy}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply levels correctly.", working: "\\text{organization}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stomach, intestine, liver (b) muscle churning, acid/enzymes, mucus protection (c) mucosa, muscle, connective, serosa (d) cell→tissue→organ→system",
            commonErrors: ["In (c), listing organelles instead of tissue types."],
            examinerNote: "A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u1-org-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the largest level in the biological organization hierarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organism" },
              { id: "b", text: "Cell" },
              { id: "c", text: "Organ" },
              { id: "d", text: "Organ system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hierarchy", statement: "Cell → tissue → organ → organ system → organism; organism is the whole." },
            ],
            steps: [
              { reasoning: "The organism is the complete living entity — the highest level.", working: "\\text{organism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Organism",
            commonErrors: ["Choosing organ system."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "mypb4-u1-org-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a tissue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single specialised cell" },
              { id: "b", text: "The basic unit of life" },
              { id: "c", text: "A group of similar cells performing a shared function" },
              { id: "d", text: "Different tissues working together" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue", statement: "Group of similar specialised cells working together, e.g. muscle tissue." },
            ],
            steps: [
              { reasoning: "Tissue = similar cells with shared function.", working: "\\text{similar cells}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{tissue}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group of similar cells with a shared function",
            commonErrors: ["Confusing tissue with organ."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "All cells in your body contain the same DNA, yet a nerve cell and a skin cell perform very different functions. Explain how this is possible.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each cell type has different DNA" },
              { id: "b", text: "The environment rewrites the DNA sequence" },
              { id: "c", text: "DNA mutates differently in each cell type" },
              { id: "d", text: "Different genes are switched on (expressed) in different cell types during development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Differential gene expression", statement: "Same genome; different genes active → different proteins → different functions." },
            ],
            steps: [
              { reasoning: "All body cells share the same genome.", working: "\\text{same DNA}", marks: 1, markCode: "M" },
              { reasoning: "Different genes expressed → different proteins made.", working: "\\text{gene expression}", marks: 1, markCode: "M" },
              { reasoning: "Different proteins → different cell structure and function.", working: "\\text{specialization}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Differential gene expression",
            commonErrors: ["Claiming DNA differs between cell types."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many basic tissue types are recognised in animals? (b) How many basic tissue types are recognised in plants?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue types", statement: "Animals: epithelial, connective, muscle, nervous (4); plants: meristematic and permanent (2)." },
            ],
            steps: [
              { reasoning: "Animal tissues = epithelial, connective, muscle, nervous = 4.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Plant tissues = meristematic + permanent = 2.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 4, b) 2",
            commonErrors: ["Listing organelles instead of tissue types for plants."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The hierarchy cell → tissue → organ → organ system → organism has 5 levels. (a) How many levels lie between 'cell' and 'organism' (exclusive)? (b) How many levels are there in total? (c) At which level does the heart belong?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organization levels", statement: "Tissue, organ, organ system lie between cell and organism; heart is an organ (level 3)." },
            ],
            steps: [
              { reasoning: "Between cell and organism: tissue, organ, organ system = 3.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Total levels = 5.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Heart = organ = level 3.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 5, c) organ (level 3)",
            commonErrors: ["In (a), counting cell and organism themselves."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A tissue sample contains 500 cells. 20% are epithelial cells, 30% are connective cells, and the rest are muscle cells. (a) How many epithelial cells are there? (b) How many connective cells? (c) How many muscle cells? (d) What percentage are muscle cells?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100 },
              { label: "b", answer: 150 },
              { label: "c", answer: 250 },
              { label: "d", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of sample", statement: "Count = percentage/100 x total; muscle % = 100 - 20 - 30." },
            ],
            steps: [
              { reasoning: "Epithelial $= 0.20 \\times 500 = 100$.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Connective $= 0.30 \\times 500 = 150$.", working: "150", marks: 1, markCode: "M" },
              { reasoning: "Muscle $= 500 - 100 - 150 = 250$.", working: "250", marks: 1, markCode: "M" },
              { reasoning: "Muscle % $= \\frac{250}{500} \\times 100 = 50\\%$.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 100, b) 150, c) 250, d) 50%",
            commonErrors: ["In (c), using 50% of 500 = 250 directly without checking."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many levels are there from cell to organism in the biological hierarchy?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hierarchy", statement: "Cell, tissue, organ, organ system, organism = 5 levels." },
            ],
            steps: [
              { reasoning: "Five named levels.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting 'population' or 'ecosystem' as body levels."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u1-org-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The stomach wall contains 4 main tissue layers. If each layer has equal thickness of 0.5 mm, (a) what is the total wall thickness? (b) How many layers does the stomach have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tissue layers", statement: "Stomach wall: mucosa, muscle, connective, serosa = 4 layers." },
            ],
            steps: [
              { reasoning: "Total $= 4 \\times 0.5 = 2$ mm.", working: "4\\times0.5=2", marks: 1, markCode: "M" },
              { reasoning: "Four layers.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2 mm, b) 4",
            commonErrors: ["Multiplying wrong number of layers."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A researcher counts cells in a tissue: 45% epithelial, 25% connective, 20% muscle, and the rest nervous. (a) What percentage are nervous cells? (b) In a sample of 2000 cells, how many are nervous? (c) How many are epithelial?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 200 },
              { label: "c", answer: 900 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage remainder", statement: "Remaining % = 100 - sum of known %; count = %/100 x total." },
            ],
            steps: [
              { reasoning: "Nervous $= 100 - 45 - 25 - 20 = 10\\%$.", working: "10\\%", marks: 1, markCode: "M" },
              { reasoning: "Nervous cells $= 0.10 \\times 2000 = 200$.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "Epithelial $= 0.45 \\times 2000 = 900$.", working: "900", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 10%, b) 200, c) 900",
            commonErrors: ["In (a), forgetting percentages must sum to 100."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-org-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define tissue, organ and organ system.",
          parts: [
            { label: "a", prompt: "Tissue", marks: 1 },
            { label: "b", prompt: "Organ", marks: 1 },
            { label: "c", prompt: "Organ system", marks: 1 },
            { label: "d", prompt: "Give one example of an organ.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organization levels", statement: "Tissue→organ→system build from cells upward." },
            ],
            steps: [
              { part: "a", reasoning: "Group of similar specialised cells.", working: "\\text{cells}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Different tissues working together for a function.", working: "\\text{tissues}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Organs cooperating for a body function.", working: "\\text{organs}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. heart, stomach, lung, kidney.", working: "\\text{heart}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tissue=similar cells; organ=tissues together; system=organs together; e.g. heart",
            commonErrors: ["Defining organ as a single cell type."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-org-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how cell specialization produces efficient organisms, using examples.",
          parts: [
            { label: "a", prompt: "Explain why specialization is efficient.", marks: 2 },
            { label: "b", prompt: "Describe the adaptation of a red blood cell.", marks: 2 },
            { label: "c", prompt: "Describe the adaptation of a root hair cell.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specialization", statement: "Cells differentiated for specific roles → division of labour → efficiency." },
            ],
            steps: [
              { part: "a", reasoning: "Each cell type optimised for one job — division of labour.", working: "\\text{division of labour}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More efficient than every cell doing everything.", working: "\\text{efficiency}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "No nucleus → more haemoglobin space → carries more O₂.", working: "\\text{haemoglobin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Biconcave shape increases surface area for gas exchange.", working: "\\text{biconcave}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Long extension increases surface area for absorbing water/minerals.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Thin wall → short diffusion distance to xylem.", working: "\\text{thin wall}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) division of labour (b) no nucleus+haemoglobin (c) large surface area+thin wall",
            commonErrors: ["Describing function without structural adaptation."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-org-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do xylem vessels lack living contents at maturity, and how does this help their function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Living cells would block the phloem" },
              { id: "b", text: "They need nuclei to transport water actively" },
              { id: "c", text: "They photosynthesise so need no contents" },
              { id: "d", text: "Dead hollow tubes offer no obstruction to water flow and lignified walls withstand transpiration pull" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Xylem adaptation", statement: "Hollow dead tubes + lignin = efficient, strong water conduction." },
            ],
            steps: [
              { reasoning: "Hollow tube with no cytoplasm → unobstructed water column.", working: "\\text{hollow}", marks: 1, markCode: "M" },
              { reasoning: "Lignified walls resist negative pressure of transpiration.", working: "\\text{lignin}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Hollow dead tubes for unobstructed flow",
            commonErrors: ["Thinking xylem transports sugars — that is phloem."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};

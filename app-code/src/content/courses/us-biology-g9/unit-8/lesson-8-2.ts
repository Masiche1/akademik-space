import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "bio9-u8-lesson-8-2",
  code: "8-2",
  title: "Mitosis and Meiosis",
  goal: "I CAN describe the stages of mitosis and meiosis, compare their outcomes, and explain genetic variation in meiosis.",
  standards: [
    "HS-LS1-4",
    "HS-LS1-5",
    "HS-LS3-1",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Mitosis",
      definition: "Nuclear division producing two identical diploid cells.",
    },
    {
      term: "Meiosis",
      definition: "Two rounds of division producing four haploid gametes.",
    },
    {
      term: "Prophase",
      definition:
        "Chromosomes condense; nuclear envelope breaks down; spindle forms.",
    },
    {
      term: "Metaphase",
      definition: "Chromosomes align at cell's equator (metaphase plate).",
    },
    {
      term: "Anaphase",
      definition: "Sister chromatids separate and move to opposite poles.",
    },
    {
      term: "Telophase",
      definition: "Nuclear envelopes reform; chromosomes decondense.",
    },
    {
      term: "Crossing over",
      definition:
        "Exchange of genetic material between homologous chromosomes in prophase I.",
    },
    {
      term: "Independent assortment",
      definition: "Random orientation of homologous pairs in metaphase I.",
    },
  ],
  concepts: [
    {
      id: "bio9-u8-mitosis-stages",
      title: "Mitosis stages",
      skill: "Describe the phases of mitosis and cytokinesis.",
      lesson: {
        sections: [
          {
            heading: "Mitotic phases",
            body: "**Mitosis** (PMAT):\n\n- **Prophase**: chromosomes condense, nuclear envelope breaks, spindle forms.\n- **Metaphase**: chromosomes align at metaphase plate.\n- **Anaphase**: sister chromatids separate → move to poles.\n- **Telophase**: nuclear envelopes reform; cytokinesis divides cytoplasm.\n\nResult: 2 identical diploid daughter cells.",
          },
          {
            heading: "Cytokinesis",
            body: "**Cytokinesis** divides the cytoplasm:\n- Animal cells: cleavage furrow pinches cell.\n- Plant cells: cell plate forms new wall.",
          },
        ],
        keyFormulas: [
          { name: "Mitosis", statement: "PMAT → 2 identical diploid cells." },
          { name: "Anaphase", statement: "Sister chromatids separate." },
          {
            name: "Cytokinesis",
            statement: "Cytoplasm divides after mitosis.",
          },
        ],
        workedExample: {
          problem:
            "A cell with 46 chromosomes undergoes mitosis. How many chromosomes in each daughter?",
          solution: "46 — mitosis preserves chromosome number.",
        },
      },
      questions: [
        {
          id: "bio9-u8-mitosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During which phase do sister chromatids separate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prophase" },
              { id: "b", text: "Metaphase" },
              { id: "c", text: "Anaphase" },
              { id: "d", text: "Telophase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Anaphase",
                statement: "Sister chromatids separate and move to poles.",
              },
            ],
            steps: [
              {
                reasoning: "Anaphase = chromatid separation.",
                evidence: "anaphase",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Anaphase.",
            commonErrors: ["Choosing (b): that's alignment."],
          },
        },
        {
          id: "bio9-u8-mitosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the four phases of mitosis in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitosis phases",
                statement: "Prophase → metaphase → anaphase → telophase.",
              },
            ],
            steps: [
              {
                reasoning: "Prophase: condensation.",
                evidence: "prophase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Metaphase: alignment.",
                evidence: "metaphase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Anaphase: separation; telophase: reformation.",
                evidence: "anaphase+telophase",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Prophase → metaphase → anaphase → telophase (PMAT).",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "bio9-u8-mitosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does mitosis maintain chromosome number?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitosis fidelity",
                statement:
                  "Sister chromatids are identical → same chromosome number.",
              },
            ],
            steps: [
              {
                reasoning:
                  "DNA replicated in S phase → sister chromatids identical.",
                evidence: "replication",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sister chromatids separate → each daughter gets one copy.",
                evidence: "separation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Result: diploid → diploid (46 → 46).",
                evidence: "46→46",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ensures genetic identity for growth and repair.",
                evidence: "identity",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Sister chromatids identical → daughters get same chromosome number.",
            commonErrors: ["Saying chromosome number halves."],
          },
        },
        {
          id: "bio9-u8-mitosis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cell has 8 chromosomes. Trace through mitosis.",
          parts: [
            { label: "a", prompt: "Chromosomes after S phase?", marks: 2 },
            { label: "b", prompt: "Chromosomes in each daughter?", marks: 2 },
            { label: "c", prompt: "How many daughter cells?", marks: 1 },
            { label: "d", prompt: "Are they genetically identical?", marks: 2 },
            { label: "e", prompt: "Ploidy?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitosis",
                statement: "8 → 16 chromatids → 2 cells × 8 chromosomes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "8 chromosomes → 16 sister chromatids after replication.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "8 chromosomes in each daughter.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "2 daughter cells.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Yes — sister chromatids identical.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Diploid (if parent was diploid).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 16 chromatids (b) 8 each (c) 2 (d) Yes (e) Diploid.",
            commonErrors: ["Counting chromatids as chromosomes."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-meiosis-stages",
      title: "Meiosis Stages",
      skill:
        "Describe the two divisions of meiosis and how they produce gametes.",
      lesson: {
        sections: [
          {
            heading: "Meiosis I vs II",
            body: "**Meiosis I** (reductional): homologous chromosomes separate → 2 haploid cells.\n\n- Prophase I: crossing over between homologs.\n- Metaphase I: homologous pairs align randomly.\n- Anaphase I: homologs separate (sister chromatids stay together).\n- Telophase I: 2 haploid cells.\n\n**Meiosis II** (equational): sister chromatids separate → 4 haploid gametes.",
          },
          {
            heading: "Key events",
            body: "- **Crossing over** (prophase I): genetic exchange between homologs.\n- **Independent assortment** (metaphase I): random alignment → $2^n$ combinations.\n- Result: 4 genetically different haploid gametes.",
          },
        ],
        keyFormulas: [
          {
            name: "Meiosis I",
            statement: "Homologous chromosomes separate → 2 haploid.",
          },
          {
            name: "Meiosis II",
            statement: "Sister chromatids separate → 4 haploid gametes.",
          },
          {
            name: "Crossing over",
            statement: "Prophase I — exchange between homologs.",
          },
          {
            name: "Independent assortment",
            statement: "Metaphase I — random alignment.",
          },
        ],
        workedExample: {
          problem:
            "A cell with 46 chromosomes undergoes meiosis. How many chromosomes in gametes?",
          solution: "23 — haploid gametes.",
        },
      },
      questions: [
        {
          id: "bio9-u8-meiosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is produced by meiosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 identical cells" },
              { id: "b", text: "4 different gametes" },
              { id: "c", text: "2 different cells" },
              { id: "d", text: "4 identical cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis",
                statement: "Produces 4 genetically different haploid gametes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meiosis → 4 haploid gametes with genetic variation.",
                evidence: "4 gametes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** 4 different gametes.",
            commonErrors: ["Choosing (a): that's mitosis."],
          },
        },
        {
          id: "bio9-u8-meiosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "When does crossing over occur?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Crossing over",
                statement:
                  "Prophase I — exchange between homologous chromosomes.",
              },
            ],
            steps: [
              {
                reasoning: "Occurs during prophase I of meiosis.",
                evidence: "prophase I",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Homologous chromosomes pair and exchange segments.",
                evidence: "exchange",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates new allele combinations → genetic diversity.",
                evidence: "diversity",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Prophase I — homologous chromosomes exchange segments.",
            commonErrors: ["Saying it happens in mitosis."],
          },
        },
        {
          id: "bio9-u8-meiosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between meiosis I and meiosis II.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Meiosis divisions",
                statement: "I = homologs separate; II = chromatids separate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meiosis I: homologous chromosomes separate → 2 haploid cells.",
                evidence: "I",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Meiosis II: sister chromatids separate → 4 haploid gametes.",
                evidence: "II",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Meiosis I is reductional; II is equational.",
                evidence: "reductional vs equational",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Crossing over only in meiosis I.",
                evidence: "crossing over I",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "I: homologs separate → 2 haploid; II: chromatids separate → 4 gametes.",
            commonErrors: ["Confusing what separates in each."],
          },
        },
        {
          id: "bio9-u8-meiosis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A human cell (46 chromosomes) undergoes meiosis.",
          parts: [
            { label: "a", prompt: "Chromosomes in gametes?", marks: 2 },
            { label: "b", prompt: "How many gametes?", marks: 1 },
            { label: "c", prompt: "What creates genetic variation?", marks: 3 },
            { label: "d", prompt: "Ploidy of gametes vs parent?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Meiosis",
                statement: "46 → 4 gametes × 23 chromosomes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "23 chromosomes (haploid).",
                marks: 2,
                markCode: "AO1",
              },
              { part: "b", reasoning: "4 gametes.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning:
                  "Crossing over + independent assortment → unique combinations.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Gametes haploid (n); parent diploid (2n).",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 23 (b) 4 (c) Crossing over + assortment (d) Haploid vs diploid.",
            commonErrors: ["Wrong chromosome number."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-meiosis-variation",
      title: "Genetic Variation in Meiosis",
      skill: "Explain how meiosis generates genetic diversity.",
      lesson: {
        sections: [
          {
            heading: "Sources of variation",
            body: "Meiosis creates variation through:\n\n- **Crossing over**: exchange between homologs (prophase I).\n- **Independent assortment**: random alignment of homologous pairs (metaphase I).\n- **Random fertilization**: which gametes combine is random.\n\nFor n chromosome pairs: $2^n$ possible gamete combinations from assortment alone.",
          },
          {
            heading: "Calculation",
            body: "Humans: $2^{23}$ ≈ 8 million possible gamete combinations — before crossing over and fertilization!\n\nThis explains why siblings (except identical twins) look different.",
          },
        ],
        keyFormulas: [
          {
            name: "Variation sources",
            statement:
              "Crossing over + independent assortment + random fertilization.",
          },
          {
            name: "Gamete combinations",
            statement: "$2^n$ where n = chromosome pairs.",
          },
          {
            name: "Human variation",
            statement: "$2^{23}$ ≈ 8 million gametes.",
          },
        ],
        workedExample: {
          problem: "How many gamete combinations for 4 chromosome pairs?",
          solution: "$2^4 = 16$ possible combinations.",
        },
      },
      questions: [
        {
          id: "bio9-u8-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is independent assortment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exchange of chromosome segments" },
              { id: "b", text: "Random alignment of homologous pairs" },
              { id: "c", text: "DNA replication" },
              { id: "d", text: "Cell division" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent assortment",
                statement:
                  "Random orientation of homologous pairs in metaphase I.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homologous pairs align randomly → different combinations.",
                evidence: "random alignment",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Random alignment of homologous pairs.",
            commonErrors: ["Choosing (a): that's crossing over."],
          },
        },
        {
          id: "bio9-u8-variation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many gamete combinations for 5 chromosome pairs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Independent assortment",
                statement: "$2^n$ combinations.",
              },
            ],
            steps: [
              {
                reasoning: "$2^n$ where n = 5.",
                evidence: "formula",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2^5 = 32$.",
                evidence: "32",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "32 possible gamete combinations.",
                evidence: "answer",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32 possible combinations.",
            commonErrors: ["Using wrong formula."],
          },
        },
        {
          id: "bio9-u8-variation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why identical twins look alike but fraternal twins don't.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Twin genetics",
                statement:
                  "Identical = same zygote; fraternal = different zygotes.",
              },
            ],
            steps: [
              {
                reasoning: "Identical twins: one zygote splits → same DNA.",
                evidence: "identical",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fraternal twins: two separate eggs fertilized → different DNA.",
                evidence: "fraternal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Different gametes → different allele combinations.",
                evidence: "alleles",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This is why fraternal twins look as different as siblings.",
                evidence: "siblings",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Identical = same zygote (same DNA); fraternal = different zygotes (different DNA).",
            commonErrors: ["Saying both come from same egg."],
          },
        },
        {
          id: "bio9-u8-variation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the three sources of genetic variation in meiosis.",
          parts: [
            { label: "a", prompt: "Crossing over?", marks: 2 },
            { label: "b", prompt: "Independent assortment?", marks: 2 },
            { label: "c", prompt: "Random fertilization?", marks: 2 },
            { label: "d", prompt: "Combined effect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Meiosis variation",
                statement: "Three mechanisms create genetic diversity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Homologous chromosomes exchange segments (prophase I).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Homologous pairs align randomly (metaphase I) → $2^n$ combos.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Random gamete combination at fertilization.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Combined → virtually unlimited genetic diversity.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Crossing over (b) Assortment (c) Fertilization (d) Unlimited diversity.",
            commonErrors: ["Missing one source."],
          },
        },
      ],
    },
    {
      id: "bio9-u8-cell-division-regulation",
      title: "Cell Division Regulation and Cancer",
      skill:
        "Explain cell cycle checkpoints, regulation, and how loss of control leads to cancer.",
      lesson: {
        sections: [
          {
            heading: "Cell cycle checkpoints",
            body: "Checkpoints ensure accurate division:\n\n- **G1 checkpoint**: is DNA intact? Should cell divide?\n- **G2 checkpoint**: is DNA fully replicated?\n- **Metaphase checkpoint**: are chromosomes properly attached to spindle?\n\n**Cyclins and CDKs** regulate progression; **p53** is a key checkpoint protein ('guardian of genome').",
          },
          {
            heading: "Cancer",
            body: "Cancer = uncontrolled cell division. Causes:\n- **Oncogenes**: mutated genes promoting division (accelerator stuck on).\n- **Tumor suppressors**: genes inhibiting division (brakes broken — e.g., p53, Rb).\n\nMultiple mutations needed; metastasis = spread to other tissues.",
          },
        ],
        keyFormulas: [
          {
            name: "Checkpoints",
            statement: "G1, G2, metaphase — quality control.",
          },
          {
            name: "Cyclins/CDKs",
            statement: "Regulate cell cycle progression.",
          },
          {
            name: "Cancer",
            statement:
              "Uncontrolled division from oncogene/tumor suppressor mutations.",
          },
        ],
        workedExample: {
          problem: "Why does p53 mutation increase cancer risk?",
          solution:
            "p53 is the 'guardian of the genome' — without it, damaged cells divide instead of dying.",
        },
      },
      questions: [
        {
          id: "bio9-u8-cancer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cancer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Normal cell division" },
              { id: "b", text: "Uncontrolled cell division" },
              { id: "c", text: "Cell death" },
              { id: "d", text: "DNA replication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cancer",
                statement: "Uncontrolled cell division forming tumors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cancer = loss of cell cycle control → abnormal growth.",
                evidence: "uncontrolled",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Uncontrolled cell division.",
            commonErrors: ["Choosing (c): apoptosis is programmed death."],
          },
        },
        {
          id: "bio9-u8-cancer-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between oncogenes and tumor suppressor genes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cancer genes",
                statement: "Oncogenes promote; suppressors inhibit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oncogenes: mutated versions of normal genes promoting division.",
                evidence: "oncogene",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tumor suppressors: normal genes inhibiting division (p53, Rb).",
                evidence: "suppressor",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Cancer needs oncogene activation + suppressor loss.",
                evidence: "both needed",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Oncogenes promote division; suppressors inhibit it.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "bio9-u8-cancer-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What are cell cycle checkpoints and why are they important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Checkpoints",
                statement: "Quality control ensuring accurate division.",
              },
            ],
            steps: [
              {
                reasoning: "G1: checks DNA integrity and cell size.",
                evidence: "G1",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "G2: checks replication complete.",
                evidence: "G2",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Metaphase: checks chromosome attachment.",
                evidence: "metaphase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Failure → mutations propagate → cancer.",
                evidence: "failure",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Checkpoints verify DNA integrity before division; failure → cancer.",
            commonErrors: ["Not listing all checkpoints."],
          },
        },
        {
          id: "bio9-u8-cancer-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how metastasis makes cancer dangerous.",
          parts: [
            { label: "a", prompt: "What is metastasis?", marks: 2 },
            { label: "b", prompt: "How does it occur?", marks: 3 },
            { label: "c", prompt: "Why is it dangerous?", marks: 2 },
            { label: "d", prompt: "What is staging?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Metastasis",
                statement: "Cancer spreading to distant sites.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cancer cells breaking away and spreading to other organs.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Cells invade blood/lymph → travel → colonize new sites.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Disrupts organ function; harder to treat; higher mortality.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Classifying cancer by size and spread (TNM system).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Spread to distant sites (b) Blood/lymph travel (c) Organ damage + hard to treat (d) TNM staging.",
            commonErrors: ["Saying cancer can't spread."],
          },
        },
      ],
    },
  ],
};

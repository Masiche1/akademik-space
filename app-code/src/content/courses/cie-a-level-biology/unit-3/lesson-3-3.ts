import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "cial-b-u3-lesson-3-3",
  code: "3-3",
  title: "Cell division: mitosis and meiosis",
  goal: "I CAN describe mitosis and meiosis and their roles in growth and reproduction.",
  standards: ["9700 Unit 6: cell division"],
  vocabulary: [
    {
      term: "Mitosis",
      definition:
        "Nuclear division producing two genetically identical diploid cells.",
    },
    {
      term: "Meiosis",
      definition:
        "Two divisions producing four genetically different haploid gametes.",
    },
    { term: "Diploid", definition: "Cell with two sets of chromosomes (2n)." },
    { term: "Haploid", definition: "Cell with one set of chromosomes (n)." },
    {
      term: "Crossing over",
      definition:
        "Exchange of genetic material between homologous chromosomes in meiosis I.",
    },
    {
      term: "Cytokinesis",
      definition: "Division of the cytoplasm after nuclear division.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u3-mitosis",
      title: "Mitosis",
      skill: "Describe the stages of mitosis and its purpose.",
      lesson: {
        sections: [
          {
            heading: "Purpose of mitosis",
            body: "Mitosis produces two genetically identical diploid daughter cells. Used for growth, repair and asexual reproduction. One DNA replication followed by one division.",
          },
          {
            heading: "Stages of mitosis",
            body: "Prophase: chromosomes condense, spindle forms. Metaphase: chromosomes align at equator. Anaphase: sister chromatids separate to opposite poles. Telophase: nuclear envelopes reform; cytokinesis follows.",
          },
          {
            heading: "Interphase before division",
            body: "Most of cell cycle is interphase: G1 (growth), S (DNA replication), G2 (preparation). Mitosis (M phase) is relatively short.",
          },
        ],
        keyFormulas: [
          {
            name: "Mitosis",
            statement:
              "Prophase→metaphase→anaphase→telophase; 2 identical diploid cells.",
          },
        ],
        workedExample: {
          problem:
            "How many chromosomes in daughter cells after mitosis of a diploid cell (2n=46)?",
          solution: "46 — mitosis preserves chromosome number.",
        },
      },
      questions: [
        {
          id: "cial-b-u3-mi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does mitosis produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two different cells" },
              { id: "b", text: "Four haploid cells" },
              { id: "c", text: "One cell with double chromosomes" },
              { id: "d", text: "Two genetically identical diploid cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis",
                statement: "Two identical diploid daughter cells.",
              },
            ],
            steps: [
              {
                reasoning: "Mitosis = identical diploid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Two identical diploid cells",
            commonErrors: ["Confusing with meiosis (haploid)."],
          },
        },
        {
          id: "cial-b-u3-mi-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the four stages of mitosis in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis stages",
                statement: "Prophase, metaphase, anaphase, telophase.",
              },
            ],
            steps: [
              {
                reasoning: "Any two in correct order.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All four correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prophase, metaphase, anaphase, telophase.",
            commonErrors: ["Wrong order or missing stage."],
          },
        },
        {
          id: "cial-b-u3-mi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What happens during metaphase of mitosis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphase",
                statement:
                  "Chromosomes align at equator; spindle fibres attach.",
              },
            ],
            steps: [
              {
                reasoning: "Chromosomes align at equator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Spindle fibres attach to centromeres.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Preparation for separation.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chromosomes align at equator; spindle fibres attach.",
            commonErrors: ["Confusing with anaphase (separation)."],
          },
        },
        {
          id: "cial-b-u3-mi-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mitosis.",
          parts: [
            { label: "a", prompt: "What does mitosis produce?", marks: 1 },
            { label: "b", prompt: "Name the four stages.", marks: 2 },
            { label: "c", prompt: "What happens in metaphase?", marks: 3 },
            { label: "d", prompt: "Why is mitosis important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis",
                statement: "Product+stages+metaphase+importance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two identical diploid cells.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Prophase, metaphase, anaphase, telophase.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Chromosomes align at equator.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Spindle fibres attach.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Growth.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Repair/replacement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Asexual reproduction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 identical diploid (b) PMAT (c) alignment+spindle (d) growth/repair/asexual",
          },
        },
        {
          id: "cial-b-u3-mi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes the products of mitosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four haploid cells" },
              { id: "b", text: "Two genetically identical diploid cells" },
              { id: "c", text: "Two haploid cells" },
              { id: "d", text: "One diploid and one haploid cell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis",
                statement: "Mitosis produces two genetically identical diploid daughter cells.",
              },
            ],
            steps: [
              { reasoning: "Mitosis preserves chromosome number and genetic identity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Two identical diploid cells",
            commonErrors: ["Confusing mitosis with meiosis."],
          },
        },
        {
          id: "cial-b-u3-mi-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens during prophase of mitosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear envelopes reform" },
              { id: "b", text: "Chromosomes condense and the spindle forms" },
              { id: "c", text: "Chromosomes align at the equator" },
              { id: "d", text: "Sister chromatids move apart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prophase",
                statement: "Prophase involves chromosome condensation and spindle formation.",
              },
            ],
            steps: [
              { reasoning: "Condensation and spindle formation define prophase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chromosomes condense; spindle forms",
            commonErrors: ["Confusing prophase with metaphase."],
          },
        },
        {
          id: "cial-b-u3-mi-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What separates during anaphase of mitosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosomes" },
              { id: "b", text: "Homologous chromosomes" },
              { id: "c", text: "Sister chromatids" },
              { id: "d", text: "Nuclear envelopes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaphase",
                statement: "In anaphase, sister chromatids are pulled to opposite poles.",
              },
            ],
            steps: [
              { reasoning: "Anaphase separates sister chromatids.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sister chromatids",
            commonErrors: ["Confusing anaphase with meiosis I."],
          },
        },
        {
          id: "cial-b-u3-mi-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which event follows telophase in a typical cell cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA replication" },
              { id: "b", text: "Independent assortment" },
              { id: "c", text: "Cytokinesis" },
              { id: "d", text: "Crossing over" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cytokinesis",
                statement: "Cytokinesis divides the cytoplasm after nuclear division.",
              },
            ],
            steps: [
              { reasoning: "Cytokinesis completes cell division.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cytokinesis",
            commonErrors: ["Confusing cytokinesis with mitosis stages."],
          },
        },
        {
          id: "cial-b-u3-mi-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phases make up interphase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "G1, S and G2" },
              { id: "b", text: "Cytokinesis only" },
              { id: "c", text: "Meiosis I and II" },
              { id: "d", text: "Prophase, metaphase, anaphase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interphase",
                statement: "Interphase includes G1 growth, S DNA replication and G2 preparation.",
              },
            ],
            steps: [
              { reasoning: "Interphase consists of G1, S and G2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** G1, S and G2",
            commonErrors: ["Including mitotic phases in interphase."],
          },
        },
        {
          id: "cial-b-u3-mi-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which process is a major use of mitosis in multicellular organisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crossing over" },
              { id: "b", text: "Reduction of chromosome number" },
              { id: "c", text: "Growth and repair of tissues" },
              { id: "d", text: "Formation of haploid gametes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Role of mitosis",
                statement: "Mitosis supports growth, repair and asexual reproduction.",
              },
            ],
            steps: [
              { reasoning: "Identical diploid cells are needed for tissue growth and repair.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Growth and repair",
            commonErrors: ["Confusing mitosis with meiosis."],
          },
        },
        {
          id: "cial-b-u3-mi-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A diploid human cell has $2n=46$ chromosomes. How many chromosomes are present in each daughter cell after mitosis?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 46 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis",
                statement: "Mitosis preserves the diploid chromosome number.",
              },
            ],
            steps: [
              { reasoning: "Each daughter cell receives the same chromosome complement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore each cell has 46 chromosomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46 chromosomes",
            commonErrors: ["Halving the chromosome number as in meiosis."],
          },
        },
        {
          id: "cial-b-u3-mi-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cell with 8 chromosomes undergoes mitosis. How many chromosomes are present in each of the two daughter cells?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis products",
                statement: "Mitosis produces two daughter cells with the same chromosome number as the parent.",
              },
            ],
            steps: [
              { reasoning: "Each daughter cell has 8 chromosomes.", marks: 1, markCode: "M" },
              { reasoning: "There are two daughter cells.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 chromosomes per cell; 2 cells",
            commonErrors: ["Answering 16 chromosomes per daughter cell."],
          },
        },
        {
          id: "cial-b-u3-mi-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many named stages are in the standard mitotic sequence PMAT?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis stages",
                statement: "Prophase, metaphase, anaphase and telophase are the four stages.",
              },
            ],
            steps: [
              { reasoning: "Count prophase, metaphase, anaphase and telophase.", marks: 1, markCode: "M" },
              { reasoning: "There are 4 stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 stages",
            commonErrors: ["Including interphase as a mitotic stage."],
          },
        },
        {
          id: "cial-b-u3-mi-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "After DNA replication, a cell contains 10 chromosomes, each consisting of two sister chromatids. How many chromatids are present?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sister chromatids",
                statement: "After replication each chromosome has two identical sister chromatids.",
              },
            ],
            steps: [
              { reasoning: "Ten replicated chromosomes each have two chromatids.", marks: 1, markCode: "M" },
              { reasoning: "$10 \\times 2 = 20$ chromatids.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 chromatids",
            commonErrors: ["Answering 10 by counting chromosomes only."],
          },
        },
        {
          id: "cial-b-u3-mi-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "One cell undergoes mitosis repeatedly for three generations. How many cells are produced after three rounds of mitosis?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cell doubling",
                statement: "Each mitotic division doubles cell number: $2^n$.",
              },
            ],
            steps: [
              { reasoning: "Three divisions double the cell number three times.", marks: 1, markCode: "M" },
              { reasoning: "$2^3=8$ cells.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 cells",
            commonErrors: ["Adding one cell per division instead of doubling."],
          },
        },
        {
          id: "cial-b-u3-mi-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why daughter cells produced by mitosis are genetically identical to the parent cell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mitosis fidelity",
                statement: "Sister chromatids are identical copies separated into daughter nuclei.",
              },
            ],
            steps: [
              { reasoning: "DNA is replicated before mitosis, producing identical sister chromatids.", marks: 1, markCode: "M" },
              { reasoning: "The spindle ensures each daughter nucleus receives the same chromosome set.", marks: 1, markCode: "M" },
              { reasoning: "Therefore both daughter cells have identical genetic material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identical chromatids are separated equally, producing genetically identical diploid cells.",
            commonErrors: ["Claiming mitosis creates variation."],
          },
        },
      ],
    },
    {
      id: "cial-b-u3-meiosis",
      title: "Meiosis",
      skill: "Describe meiosis and explain how it produces genetic variation.",
      lesson: {
        sections: [
          {
            heading: "Purpose of meiosis",
            body: "Meiosis produces four genetically different haploid gametes. Two divisions: meiosis I (homologous chromosomes separate) and meiosis II (sister chromatids separate). Crossing over and independent assortment create variation.",
          },
          {
            heading: "Meiosis I vs II",
            body: "Meiosis I: homologous pairs separate (reduction division — diploid to haploid). Meiosis II: sister chromatids separate (like mitosis). Result: 4 haploid cells, each genetically unique.",
          },
          {
            heading: "Sources of variation",
            body: "Crossing over: homologous chromosomes exchange segments in prophase I. Independent assortment: random orientation of chromosome pairs in metaphase I. Random fertilisation adds further variation.",
          },
        ],
        keyFormulas: [
          {
            name: "Meiosis",
            statement:
              "2 divisions→4 haploid cells; crossing over+independent assortment=variation.",
          },
        ],
        workedExample: {
          problem:
            "How many chromosomes in gametes from a diploid cell (2n=46)?",
          solution: "23 — meiosis halves chromosome number.",
        },
      },
      questions: [
        {
          id: "cial-b-u3-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does meiosis produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One haploid cell" },
              { id: "b", text: "Two identical diploid cells" },
              { id: "c", text: "Four genetically different haploid cells" },
              { id: "d", text: "Four identical cells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis",
                statement: "Four genetically different haploid gametes.",
              },
            ],
            steps: [
              {
                reasoning: "Meiosis = 4 haploid, different.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Four different haploid cells",
            commonErrors: ["Confusing with mitosis."],
          },
        },
        {
          id: "cial-b-u3-me-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is crossing over?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crossing over",
                statement:
                  "Exchange of genetic material between homologous chromosomes.",
              },
            ],
            steps: [
              {
                reasoning: "Homologous chromosomes exchange segments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates genetic variation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exchange of genetic material between homologous chromosomes.",
            commonErrors: ["Confusing with independent assortment."],
          },
        },
        {
          id: "cial-b-u3-me-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between meiosis I and meiosis II.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis stages",
                statement:
                  "I=homologous separate (reduction); II=sister chromatids separate.",
              },
            ],
            steps: [
              {
                reasoning: "Meiosis I: homologous pairs separate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Meiosis II: sister chromatids separate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "I is reduction (diploid→haploid); II like mitosis.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "I separates homologous pairs; II separates sister chromatids.",
            commonErrors: ["Saying both divisions are identical."],
          },
        },
        {
          id: "cial-b-u3-me-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Meiosis.",
          parts: [
            { label: "a", prompt: "What does meiosis produce?", marks: 1 },
            { label: "b", prompt: "What is crossing over?", marks: 2 },
            { label: "c", prompt: "Meiosis I vs II?", marks: 3 },
            {
              label: "d",
              prompt: "Name two sources of genetic variation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis",
                statement: "Product+crossing over+stages+variation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Four haploid different cells.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Homologous exchange segments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Creates variation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "I: homologous separate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "II: sister chromatids separate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reduction vs equational.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Crossing over named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Independent assortment named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 4 haploid (b) homologous exchange (c) I=homologous, II=chromatids (d) crossing over+independent assortment",
          },
        },
        {
          id: "cial-b-u3-me-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes the products of meiosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two identical diploid cells" },
              { id: "b", text: "Four identical diploid cells" },
              { id: "c", text: "One haploid cell" },
              { id: "d", text: "Four genetically different haploid cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis",
                statement: "Meiosis produces four genetically different haploid gametes.",
              },
            ],
            steps: [
              { reasoning: "Meiosis halves chromosome number and creates variation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Four different haploid cells",
            commonErrors: ["Confusing meiosis with mitosis."],
          },
        },
        {
          id: "cial-b-u3-me-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What separates during meiosis I?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sister chromatids only" },
              { id: "b", text: "Homologous chromosomes" },
              { id: "c", text: "Nuclear envelopes" },
              { id: "d", text: "Centrioles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis I",
                statement: "Meiosis I separates homologous chromosome pairs.",
              },
            ],
            steps: [
              { reasoning: "Homologous chromosomes separate in meiosis I.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Homologous chromosomes",
            commonErrors: ["Saying sister chromatids separate in meiosis I."],
          },
        },
        {
          id: "cial-b-u3-me-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What separates during meiosis II?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosomes" },
              { id: "b", text: "Cell membranes" },
              { id: "c", text: "Sister chromatids" },
              { id: "d", text: "Homologous chromosomes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis II",
                statement: "Meiosis II separates sister chromatids like mitosis.",
              },
            ],
            steps: [
              { reasoning: "Sister chromatids separate in meiosis II.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sister chromatids",
            commonErrors: ["Confusing meiosis I and II."],
          },
        },
        {
          id: "cial-b-u3-me-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "During which phase of meiosis does crossing over occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interphase" },
              { id: "b", text: "Prophase I" },
              { id: "c", text: "Telophase I only" },
              { id: "d", text: "Metaphase II" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crossing over",
                statement: "Crossing over occurs between homologous chromosomes in prophase I.",
              },
            ],
            steps: [
              { reasoning: "Crossing over is a prophase I event.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Prophase I",
            commonErrors: ["Placing crossing over in mitosis."],
          },
        },
        {
          id: "cial-b-u3-me-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Independent assortment occurs when homologous chromosome pairs align randomly during which phase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prophase II" },
              { id: "b", text: "Anaphase II" },
              { id: "c", text: "Telophase II" },
              { id: "d", text: "Metaphase I" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent assortment",
                statement: "Random orientation of chromosome pairs in metaphase I creates variation.",
              },
            ],
            steps: [
              { reasoning: "Independent assortment is associated with metaphase I alignment.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Metaphase I",
            commonErrors: ["Confusing it with crossing over."],
          },
        },
        {
          id: "cial-b-u3-me-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which process adds further genetic variation after gametes are formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitosis" },
              { id: "b", text: "DNA replication" },
              { id: "c", text: "Random fertilisation" },
              { id: "d", text: "Transcription" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic variation",
                statement: "Random fertilisation combines different gametes and adds variation.",
              },
            ],
            steps: [
              { reasoning: "Any sperm can fertilise any egg, increasing variation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Random fertilisation",
            commonErrors: ["Thinking meiosis alone determines all variation."],
          },
        },
        {
          id: "cial-b-u3-me-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A diploid cell has $2n=46$ chromosomes. How many chromosomes are present in each gamete produced by meiosis?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 23 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis",
                statement: "Meiosis halves the chromosome number to produce haploid gametes.",
              },
            ],
            steps: [
              { reasoning: "Meiosis reduces $2n$ to $n$.", marks: 1, markCode: "M" },
              { reasoning: "$46 \\div 2 = 23$ chromosomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23 chromosomes",
            commonErrors: ["Leaving the chromosome number at 46."],
          },
        },
        {
          id: "cial-b-u3-me-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many daughter cells are produced by one complete meiosis?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis products",
                statement: "Two divisions produce four haploid daughter cells.",
              },
            ],
            steps: [
              { reasoning: "Meiosis involves meiosis I and meiosis II.", marks: 1, markCode: "M" },
              { reasoning: "The result is 4 daughter cells.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 cells",
            commonErrors: ["Answering 2 as in mitosis."],
          },
        },
        {
          id: "cial-b-u3-me-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A diploid organism has 12 chromosomes in each body cell. How many chromosomes are present in each gamete?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haploid gamete",
                statement: "Gametes contain half the diploid chromosome number.",
              },
            ],
            steps: [
              { reasoning: "The diploid number is 12.", marks: 1, markCode: "M" },
              { reasoning: "$12 \\div 2 = 6$ chromosomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 chromosomes",
            commonErrors: ["Answering 12."],
          },
        },
        {
          id: "cial-b-u3-me-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A diploid cell has three pairs of homologous chromosomes. Assuming independent assortment only, how many possible chromosome combinations can be produced in gametes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Independent assortment",
                statement: "For $n$ chromosome pairs there are $2^n$ possible gamete combinations.",
              },
            ],
            steps: [
              { reasoning: "Each of 3 pairs can orient in two ways.", marks: 1, markCode: "M" },
              { reasoning: "$2^3=8$ combinations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 combinations",
            commonErrors: ["Adding pairs instead of using powers of two."],
          },
        },
        {
          id: "cial-b-u3-me-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many meiotic divisions are required to produce four haploid cells from one diploid cell?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis divisions",
                statement: "Meiosis consists of meiosis I and meiosis II.",
              },
            ],
            steps: [
              { reasoning: "Meiosis I and meiosis II are two divisions.", marks: 1, markCode: "M" },
              { reasoning: "The number is 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 divisions",
            commonErrors: ["Counting stages within each division."],
          },
        },
        {
          id: "cial-b-u3-me-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how crossing over and independent assortment produce genetic variation in gametes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sources of variation",
                statement: "Crossing over reshuffles alleles between homologous chromosomes; independent assortment randomises chromosome combinations.",
              },
            ],
            steps: [
              { reasoning: "Crossing over exchanges segments between homologous chromosomes in prophase I.", marks: 1, markCode: "M" },
              { reasoning: "Independent assortment randomly orients chromosome pairs in metaphase I.", marks: 1, markCode: "M" },
              { reasoning: "Together they produce gametes with different allele combinations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crossing over and independent assortment create different allele combinations in gametes.",
            commonErrors: ["Describing only one source of variation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u3-division-notes",
      title: "Cell division — revision notes",
      summary: "Mitosis and meiosis: stages, products and genetic variation.",
      sections: [
        {
          heading: "Mitosis",
          body: "Prophase→metaphase→anaphase→telophase. Produces 2 identical diploid cells. For growth, repair, asexual reproduction.",
        },
        {
          heading: "Meiosis",
          body: "Two divisions → 4 haploid gametes. Crossing over + independent assortment create variation. I = homologous separate; II = sister chromatids separate.",
        },
        {
          heading: "Exam checklist",
          body: "Can you compare mitosis/meiosis? Name stages? Explain variation sources? Calculate chromosome numbers?",
        },
      ],
    },
  ],
};

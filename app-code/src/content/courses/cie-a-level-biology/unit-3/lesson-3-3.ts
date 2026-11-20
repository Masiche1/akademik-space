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
              { id: "a", text: "Two genetically identical diploid cells" },
              { id: "b", text: "Four haploid cells" },
              { id: "c", text: "Two different cells" },
              { id: "d", text: "One cell with double chromosomes" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Four genetically different haploid cells" },
              { id: "b", text: "Two identical diploid cells" },
              { id: "c", text: "Four identical cells" },
              { id: "d", text: "One haploid cell" },
            ],
            correctChoiceId: "a",
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

import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "s8-u7-lesson-7-3",
  code: "7-3",
  title: "Meiosis and Sexual Reproduction",
  goal: "I CAN describe the stages of meiosis, explain how it produces genetic variation, and contrast it with mitosis.",
  standards: [
    "MS-LS3-1",
    "MS-LS3-2",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Meiosis",
      definition:
        "Cell division producing gametes (sex cells) with half the chromosomes.",
    },
    {
      term: "Mitosis",
      definition: "Cell division producing two identical diploid cells.",
    },
    {
      term: "Gamete",
      definition: "Sex cell (sperm or egg) with haploid chromosome number.",
    },
    { term: "Haploid", definition: "Cell with one set of chromosomes (n)." },
    { term: "Diploid", definition: "Cell with two sets of chromosomes (2n)." },
    {
      term: "Crossing over",
      definition:
        "Exchange of genetic material between homologous chromosomes.",
    },
    {
      term: "Independent assortment",
      definition: "Random alignment of homologous pairs during meiosis.",
    },
    {
      term: "Fertilization",
      definition: "Fusion of gametes to form a zygote.",
    },
  ],
  concepts: [
    {
      id: "s8-u7-meiosis-stages",
      title: "Meiosis stages",
      skill: "Describe the stages of meiosis and how they differ from mitosis.",
      lesson: {
        sections: [
          {
            heading: "Meiosis overview",
            body: "**Meiosis** is a two-stage cell division that produces **gametes** (sperm and egg):\n\n- **Meiosis I**: homologous chromosomes separate → 2 haploid cells.\n- **Meiosis II**: sister chromatids separate → 4 haploid gametes.\n\nHumans: 46 chromosomes → gametes have 23 chromosomes.",
          },
          {
            heading: "Key events",
            body: "- **Prophase I**: crossing over occurs between homologous chromosomes.\n- **Metaphase I**: homologous pairs align randomly (independent assortment).\n- **Anaphase I**: homologous chromosomes separate.\n- **Anaphase II**: sister chromatids separate.",
          },
        ],
        keyFormulas: [
          {
            name: "Meiosis",
            statement:
              "Two divisions: meiosis I (homologs) + meiosis II (chromatids).",
          },
          {
            name: "Gametes",
            statement: "Haploid (n) cells; humans have 23 chromosomes.",
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
          problem: "How many chromosomes does a human gamete have?",
          solution: "23 — half of the 46 in body cells (haploid).",
        },
      },
      questions: [
        {
          id: "s8-u7-meiosis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does meiosis produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Body cells" },
              { id: "b", text: "Gametes" },
              { id: "c", text: "Stem cells" },
              { id: "d", text: "Somatic cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis",
                statement: "Produces gametes (sex cells).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Meiosis produces gametes; mitosis produces body cells.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Gametes.",
            commonErrors: ["Choosing (a): that's mitosis."],
          },
        },
        {
          id: "s8-u7-meiosis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many chromosomes do human gametes have?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haploid",
                statement: "Gametes have half the chromosomes of body cells.",
              },
            ],
            steps: [
              {
                reasoning: "Body cells: 46 chromosomes (diploid).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Gametes: 23 chromosomes (haploid).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fertilization restores 46 (23 + 23).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "23 chromosomes (haploid).",
            commonErrors: ["Saying 46."],
          },
        },
        {
          id: "s8-u7-meiosis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between mitosis and meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis vs meiosis",
                statement:
                  "Mitosis = identical diploid; meiosis = varied haploid.",
              },
            ],
            steps: [
              {
                reasoning: "Mitosis: one division → 2 identical diploid cells.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Meiosis: two divisions → 4 different haploid gametes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Mitosis: no crossing over; meiosis: crossing over occurs.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Mitosis for growth/repair; meiosis for reproduction.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mitosis = identical diploid; meiosis = varied haploid.",
            commonErrors: ["Confusing the two processes."],
          },
        },
        {
          id: "s8-u7-meiosis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cell with 8 chromosomes undergoes meiosis.",
          parts: [
            {
              label: "a",
              prompt: "How many chromosomes in gametes?",
              marks: 2,
            },
            { label: "b", prompt: "How many gametes produced?", marks: 2 },
            { label: "c", prompt: "When does crossing over occur?", marks: 2 },
            {
              label: "d",
              prompt: "Why does meiosis create variation?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Meiosis",
                statement:
                  "Haploid gametes; crossing over + independent assortment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4 chromosomes (half of 8).",
                marks: 2,
                markCode: "M",
              },
              { part: "b", reasoning: "4 gametes.", marks: 2, markCode: "B" },
              { part: "c", reasoning: "Prophase I.", marks: 2, markCode: "B" },
              {
                part: "d",
                reasoning:
                  "Crossing over + independent assortment → new allele combinations.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 4 (b) 4 (c) Prophase I (d) New allele combinations.",
            commonErrors: ["Wrong chromosome number."],
          },
        },
      ],
    },
    {
      id: "s8-u7-meiosis-variation",
      title: "Genetic Variation in Meiosis",
      skill: "Explain how meiosis generates genetic diversity.",
      lesson: {
        sections: [
          {
            heading: "Sources of variation",
            body: "Meiosis creates genetic variation through:\n\n- **Crossing over**: homologous chromosomes exchange segments in prophase I.\n- **Independent assortment**: homologous pairs align randomly in metaphase I.\n- **Random fertilization**: which gametes combine is random.",
          },
          {
            heading: "Calculation",
            body: "For a species with n chromosome pairs, possible gamete combinations = $2^n$ (from independent assortment alone).\n\nHumans: $2^{23}$ ≈ 8 million possible gamete combinations — before crossing over and fertilization!",
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
          problem:
            "How many possible gamete combinations for 3 chromosome pairs?",
          solution: "$2^3 = 8$ possible combinations.",
        },
      },
      questions: [
        {
          id: "s8-u7-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is crossing over?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell division" },
              { id: "b", text: "Exchange of chromosome segments" },
              { id: "c", text: "DNA replication" },
              { id: "d", text: "Protein synthesis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crossing over",
                statement:
                  "Exchange of segments between homologous chromosomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Crossing over exchanges genetic material between homologous chromosomes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Exchange of chromosome segments.",
            commonErrors: ["Choosing (a): crossing over isn't cell division."],
          },
        },
        {
          id: "s8-u7-variation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many possible gamete combinations for 4 chromosome pairs?",
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
              { reasoning: "$2^n$ where n = 4.", marks: 1, markCode: "M" },
              { reasoning: "$2^4 = 16$.", marks: 1, markCode: "M" },
              {
                reasoning: "16 possible gamete combinations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 possible combinations.",
            commonErrors: ["Using wrong formula."],
          },
        },
        {
          id: "s8-u7-variation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how independent assortment creates genetic variation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Independent assortment",
                statement: "Homologous pairs align randomly.",
              },
            ],
            steps: [
              {
                reasoning: "Homologous pairs align randomly in metaphase I.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Each pair can orient in 2 ways (maternal or paternal first).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "For n pairs: $2^n$ possible combinations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This creates diverse gametes even without crossing over.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Random alignment → $2^n$ combinations → genetic diversity.",
            commonErrors: ["Saying all gametes are identical."],
          },
        },
        {
          id: "s8-u7-variation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Why do siblings (except identical twins) look different?",
          parts: [
            {
              label: "a",
              prompt: "What happens during gamete formation?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What happens during fertilization?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How many possible combinations for humans?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why are identical twins similar?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Genetic variation",
                statement: "Meiosis + fertilization → unique combinations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Crossing over + independent assortment create unique gametes.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Random fertilization combines different gametes.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$2^{23}$ ≈ 8 million gamete combinations.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Identical twins come from same zygote → same DNA.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Unique gametes (b) Random fertilization (c) ~8 million (d) Same zygote.",
            commonErrors: ["Not mentioning fertilization."],
          },
        },
      ],
    },
    {
      id: "s8-u7-fertilization",
      title: "Fertilization and Development",
      skill:
        "Describe fertilization, early development, and chromosome number changes.",
      lesson: {
        sections: [
          {
            heading: "Fertilization",
            body: "**Fertilization** is the fusion of sperm and egg gametes to form a **zygote**:\n\n- Sperm (n) + Egg (n) → Zygote (2n).\n- Restores diploid chromosome number.\n- Combines genetic material from two parents.",
          },
          {
            heading: "Early development",
            body: "After fertilization:\n\n- **Zygote**: single cell with 2n chromosomes.\n- **Cleavage**: rapid cell division → morula (ball of cells).\n- **Blastocyst**: hollow ball → implants in uterus.\n- **Gastrulation**: forms three germ layers (ectoderm, mesoderm, endoderm).",
          },
        ],
        keyFormulas: [
          {
            name: "Fertilization",
            statement: "Sperm (n) + Egg (n) → Zygote (2n).",
          },
          {
            name: "Zygote",
            statement: "Single diploid cell; start of new organism.",
          },
          {
            name: "Development",
            statement: "Zygote → morula → blastocyst → embryo.",
          },
        ],
        workedExample: {
          problem: "What is the chromosome number of a zygote?",
          solution: "46 (diploid) — 23 from sperm + 23 from egg.",
        },
      },
      questions: [
        {
          id: "s8-u7-fertilization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What forms when sperm and egg fuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gamete" },
              { id: "b", text: "Zygote" },
              { id: "c", text: "Embryo" },
              { id: "d", text: "Fetus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zygote",
                statement: "Fertilized egg — first cell of new organism.",
              },
            ],
            steps: [
              {
                reasoning: "Sperm + egg = zygote; embryo develops later.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Zygote.",
            commonErrors: ["Choosing (c): embryo develops from zygote."],
          },
        },
        {
          id: "s8-u7-fertilization-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the chromosome number of a zygote?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Zygote",
                statement: "Diploid (2n) — combines haploid gametes.",
              },
            ],
            steps: [
              {
                reasoning: "Sperm: 23 chromosomes (n).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Egg: 23 chromosomes (n).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Zygote: 46 chromosomes (2n).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "46 chromosomes (diploid).",
            commonErrors: ["Saying haploid."],
          },
        },
        {
          id: "s8-u7-fertilization-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the stages of early development after fertilization.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Early development",
                statement: "Zygote → morula → blastocyst → embryo.",
              },
            ],
            steps: [
              {
                reasoning: "Zygote: single diploid cell.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Cleavage: rapid divisions → morula (solid ball).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Blastocyst: hollow ball → implants in uterus.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Gastrulation: forms three germ layers → embryo.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Zygote → morula → blastocyst → embryo.",
            commonErrors: ["Skipping stages."],
          },
        },
        {
          id: "s8-u7-fertilization-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare fertilization in humans and plants.",
          parts: [
            { label: "a", prompt: "What gametes combine in each?", marks: 2 },
            { label: "b", prompt: "Where does fertilization occur?", marks: 2 },
            { label: "c", prompt: "What is the result?", marks: 2 },
            { label: "d", prompt: "How does development differ?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fertilization comparison",
                statement:
                  "Humans: internal; plants: can be internal/external.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Humans: sperm + egg. Plants: pollen + ovule.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Humans: inside female reproductive tract. Plants: in flower (angiosperms) or externally.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Both produce zygote → embryo → offspring.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Humans: embryo develops internally; plants: seed develops externally.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Sperm+egg vs pollen+ovule (b) Internal vs flower (c) Zygote (d) Internal vs seed.",
            commonErrors: ["Saying all plants fertilize internally."],
          },
        },
      ],
    },
  ],
};

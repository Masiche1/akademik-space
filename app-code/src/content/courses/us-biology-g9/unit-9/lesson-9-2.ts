import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "bio9-u9-lesson-9-2",
  code: "9-2",
  title: "Genetic Disorders and Testing",
  goal: "I CAN describe common genetic disorders, their inheritance patterns, and genetic testing methods.",
  standards: [
    "HS-LS3-1",
    "HS-LS3-2",
    "HS-LS1-1",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Genetic disorder",
      definition:
        "Condition caused by gene mutation or chromosomal abnormality.",
    },
    {
      term: "Sickle cell anemia",
      definition: "Recessive disorder causing misshapen red blood cells.",
    },
    {
      term: "Cystic fibrosis",
      definition: "Recessive disorder causing thick mucus in lungs/pancreas.",
    },
    {
      term: "Huntington's disease",
      definition: "Dominant disorder causing neurodegeneration.",
    },
    { term: "Down syndrome", definition: "Trisomy 21 — extra chromosome 21." },
    {
      term: "Carrier",
      definition:
        "Heterozygous individual with recessive allele but no symptoms.",
    },
    {
      term: "Genetic testing",
      definition: "Analysis of DNA to detect mutations or disorders.",
    },
  ],
  concepts: [
    {
      id: "bio9-u9-disorders-single-gene",
      title: "Single-gene disorders",
      skill: "Describe common single-gene disorders and their inheritance.",
      lesson: {
        sections: [
          {
            heading: "Autosomal recessive",
            body: "- **Sickle cell anemia**: mutation in hemoglobin gene → misshapen RBCs → poor O₂ delivery.\n- **Cystic fibrosis**: CFTR gene mutation → thick mucus → lung/pancreatic problems.\n- **Tay-Sachs**: missing enzyme → lipid buildup in neurons.\n\nRecessive: needs two copies; carriers unaffected.",
          },
          {
            heading: "Autosomal dominant",
            body: "- **Huntington's disease**: HTT gene mutation → neurodegeneration (appears ~30-50).\n- **Marfan syndrome**: connective tissue disorder.\n- **Achondroplasia**: dwarfism from FGFR3 mutation.\n\nDominant: one copy causes disorder; appears every generation.",
          },
        ],
        keyFormulas: [
          {
            name: "Recessive",
            statement: "Two copies needed; carriers unaffected.",
          },
          {
            name: "Dominant",
            statement: "One copy causes disorder; appears every generation.",
          },
          {
            name: "Carrier",
            statement: "Heterozygous with recessive allele, no symptoms.",
          },
        ],
        workedExample: {
          problem:
            "Two carriers of cystic fibrosis have children. What's the probability of an affected child?",
          solution: "25% — Aa × Aa → aa = 1/4.",
        },
      },
      questions: [
        {
          id: "bio9-u9-disorders-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes sickle cell anemia?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Viral infection" },
              { id: "b", text: "Hemoglobin gene mutation" },
              { id: "c", text: "Chromosomal deletion" },
              { id: "d", text: "Environmental factor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sickle cell",
                statement: "Hemoglobin mutation → misshapen RBCs.",
              },
            ],
            steps: [
              {
                reasoning: "Sickle cell = recessive hemoglobin gene mutation.",
                evidence: "hemoglobin",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Hemoglobin gene mutation.",
            commonErrors: ["Choosing (a): it's genetic, not infectious."],
          },
        },
        {
          id: "bio9-u9-disorders-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between autosomal dominant and recessive disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant vs recessive",
                statement: "One copy vs two copies needed.",
              },
            ],
            steps: [
              {
                reasoning: "Dominant: one copy causes disorder (Huntington's).",
                evidence: "dominant",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Recessive: two copies needed (sickle cell, cystic fibrosis).",
                evidence: "recessive",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Recessive carriers unaffected; dominant always affected.",
                evidence: "carriers",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Dominant = one copy; recessive = two copies.",
            commonErrors: ["Confusing dominance with severity."],
          },
        },
        {
          id: "bio9-u9-disorders-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does sickle cell anemia persist in populations despite being harmful?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sickle cell advantage",
                statement: "Carriers resistant to malaria.",
              },
            ],
            steps: [
              {
                reasoning: "Sickle cell is harmful in homozygotes (aa).",
                evidence: "harmful",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "But carriers (Aa) have resistance to malaria.",
                evidence: "malaria resistance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "In malaria regions, carrier advantage balances selection against aa.",
                evidence: "balance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Classic example of heterozygote advantage.",
                evidence: "heterozygote",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Carriers resistant to malaria → allele maintained by selection.",
            commonErrors: ["Not mentioning malaria resistance."],
          },
        },
        {
          id: "bio9-u9-disorders-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two parents are carriers for cystic fibrosis (Aa × Aa).",
          parts: [
            { label: "a", prompt: "Probability of affected child?", marks: 2 },
            { label: "b", prompt: "Probability of carrier child?", marks: 2 },
            {
              label: "c",
              prompt: "Probability of unaffected non-carrier?",
              marks: 2,
            },
            { label: "d", prompt: "What is a carrier?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Carrier cross",
                statement: "Aa × Aa → 25% aa, 50% Aa, 25% AA.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "aa = affected = 25%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Aa = carrier = 50%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "AA = unaffected non-carrier = 25%.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Heterozygote with recessive allele, no symptoms.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) 25% (b) 50% (c) 25% (d) Heterozygous unaffected.",
            commonErrors: ["Confusing carrier with affected."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-chromosomal",
      title: "Chromosomal Disorders",
      skill: "Describe chromosomal abnormalities and their effects.",
      lesson: {
        sections: [
          {
            heading: "Chromosomal disorders",
            body: "**Aneuploidy**: abnormal chromosome number.\n\n- **Trisomy 21** (Down syndrome): extra chromosome 21.\n- **Trisomy 18** (Edwards syndrome): severe developmental issues.\n- **Klinefelter syndrome**: XXY (male).\n- **Turner syndrome**: XO (female).\n\nCaused by **nondisjunction** during meiosis — chromosomes fail to separate.",
          },
          {
            heading: "Nondisjunction",
            body: "**Nondisjunction** = failure of homologous chromosomes or sister chromatids to separate during meiosis.\n\n- Results in gametes with extra or missing chromosomes.\n- Fertilization → zygote with abnormal chromosome number.\n- Most aneuploidies are lethal; trisomy 21 is survivable.",
          },
        ],
        keyFormulas: [
          { name: "Aneuploidy", statement: "Abnormal chromosome number." },
          {
            name: "Nondisjunction",
            statement: "Failure of chromosome separation in meiosis.",
          },
          {
            name: "Trisomy 21",
            statement: "Extra chromosome 21 → Down syndrome.",
          },
        ],
        workedExample: {
          problem: "What causes Down syndrome?",
          solution: "Trisomy 21 — extra chromosome 21 from nondisjunction.",
        },
      },
      questions: [
        {
          id: "bio9-u9-chromosomal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes Down syndrome?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gene mutation" },
              { id: "b", text: "Extra chromosome 21" },
              { id: "c", text: "Missing chromosome" },
              { id: "d", text: "Viral infection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Down syndrome",
                statement: "Trisomy 21 — extra chromosome.",
              },
            ],
            steps: [
              {
                reasoning: "Down syndrome = trisomy 21 (extra chromosome 21).",
                evidence: "trisomy 21",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Extra chromosome 21.",
            commonErrors: ["Choosing (c): it's extra, not missing."],
          },
        },
        {
          id: "bio9-u9-chromosomal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is nondisjunction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nondisjunction",
                statement: "Failure of chromosome separation in meiosis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homologous chromosomes or sister chromatids fail to separate.",
                evidence: "failure",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Occurs during meiosis I or II.",
                evidence: "meiosis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Results in gametes with extra or missing chromosomes.",
                evidence: "abnormal gametes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Failure of chromosome separation during meiosis.",
            commonErrors: ["Saying it happens in mitosis."],
          },
        },
        {
          id: "bio9-u9-chromosomal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is trisomy 21 survivable but trisomy 18 usually lethal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Chromosomal disorders",
                statement: "Severity depends on chromosome affected.",
              },
            ],
            steps: [
              {
                reasoning: "Chromosome 21 is small — fewer genes affected.",
                evidence: "chr 21 small",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Chromosome 18 is larger — more critical genes affected.",
                evidence: "chr 18 large",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Extra genetic material disrupts development more severely.",
                evidence: "disruption",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Most aneuploidies are lethal in utero.",
                evidence: "lethal",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Smaller chromosome = less genetic disruption = more survivable.",
            commonErrors: ["Not explaining size difference."],
          },
        },
        {
          id: "bio9-u9-chromosomal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare autosomal and sex chromosome disorders.",
          parts: [
            { label: "a", prompt: "Autosomal example?", marks: 2 },
            { label: "b", prompt: "Sex chromosome example?", marks: 2 },
            { label: "c", prompt: "Inheritance pattern difference?", marks: 2 },
            {
              label: "d",
              prompt: "Why do sex chromosome disorders differ?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Chromosome disorders",
                statement: "Autosomal vs sex chromosome abnormalities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Down syndrome (trisomy 21).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Klinefelter (XXY), Turner (XO).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Autosomal: both sexes equally; sex chromosome: sex-specific patterns.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Sex chromosome dosage compensation (X-inactivation) affects expression.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Down (b) Klinefelter/Turner (c) Equal vs sex-specific (d) X-inactivation.",
            commonErrors: ["Not noting sex-specific patterns."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-genetic-testing",
      title: "Genetic Testing",
      skill: "Describe genetic testing methods and their applications.",
      lesson: {
        sections: [
          {
            heading: "Testing methods",
            body: "- **Karyotyping**: visualizes chromosomes; detects aneuploidy/structural abnormalities.\n- **FISH**: fluorescent probes for specific DNA sequences.\n- **PCR-based tests**: amplify specific genes (e.g., CFTR for cystic fibrosis).\n- **Sequencing**: reads entire gene/genome (next-gen sequencing).",
          },
          {
            heading: "Applications",
            body: "- **Prenatal diagnosis**: amniocentesis, CVS for fetal testing.\n- **Carrier screening**: identify carriers before pregnancy.\n- **Predictive testing**: assess disease risk (e.g., BRCA for breast cancer).\n- **Forensics**: DNA fingerprinting.",
          },
        ],
        keyFormulas: [
          { name: "Karyotyping", statement: "Visual chromosome analysis." },
          {
            name: "Prenatal testing",
            statement: "Amniocentesis/CVS for fetal diagnosis.",
          },
          {
            name: "Carrier screening",
            statement: "Identify recessive carriers.",
          },
        ],
        workedExample: {
          problem: "How is Down syndrome diagnosed prenatally?",
          solution: "Amniocentesis or CVS → karyotyping shows trisomy 21.",
        },
      },
      questions: [
        {
          id: "bio9-u9-testing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is karyotyping?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA sequencing" },
              { id: "b", text: "Visualizing chromosomes" },
              { id: "c", text: "Protein analysis" },
              { id: "d", text: "Blood test" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Karyotyping",
                statement: "Visual analysis of chromosomes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Karyotyping = visualizing chromosome number/structure.",
                evidence: "visual",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Visualizing chromosomes.",
            commonErrors: ["Choosing (a): that's sequencing."],
          },
        },
        {
          id: "bio9-u9-testing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three genetic testing methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Testing methods",
                statement: "Karyotyping, PCR, sequencing.",
              },
            ],
            steps: [
              {
                reasoning: "Karyotyping: visual chromosome analysis.",
                evidence: "karyotyping",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "PCR-based: amplify specific genes.",
                evidence: "PCR",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sequencing: read entire gene/genome.",
                evidence: "sequencing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Karyotyping, PCR, sequencing.",
            commonErrors: ["Missing a method."],
          },
        },
        {
          id: "bio9-u9-testing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is carrier screening and why is it important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Carrier screening",
                statement: "Identifies recessive carriers before pregnancy.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies individuals carrying recessive alleles.",
                evidence: "carriers",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Carriers are unaffected but can pass allele to children.",
                evidence: "unaffected",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Couples can make informed reproductive decisions.",
                evidence: "decisions",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Especially important for disorders like cystic fibrosis, sickle cell.",
                evidence: "examples",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Identifies carriers → informed reproductive decisions.",
            commonErrors: ["Not explaining carrier concept."],
          },
        },
        {
          id: "bio9-u9-testing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A couple is concerned about genetic disorders.",
          parts: [
            { label: "a", prompt: "What testing options exist?", marks: 2 },
            { label: "b", prompt: "What is amniocentesis?", marks: 2 },
            { label: "c", prompt: "What is CVS?", marks: 2 },
            { label: "d", prompt: "What are the risks?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Prenatal testing",
                statement: "Amniocentesis and CVS for fetal diagnosis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Carrier screening, amniocentesis, CVS, non-invasive screening.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Amniotic fluid sample → fetal cell culture → karyotyping.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Chorionic villus sampling — placental tissue → earlier results.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Small miscarriage risk (~0.5-1%); earlier CVS slightly higher risk.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Screening+CVS+amnio (b) Amniotic fluid (c) Placental tissue (d) Miscarriage risk.",
            commonErrors: ["Not mentioning risks."],
          },
        },
      ],
    },
  ],
};

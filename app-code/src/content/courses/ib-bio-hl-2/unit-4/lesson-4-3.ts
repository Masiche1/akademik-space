import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "biohl-u4-lesson-4-3",
  code: "4-3",
  title: "Population Genetics: Hardy-Weinberg and Evolutionary Forces",
  goal: "I CAN apply the Hardy-Weinberg equation to calculate allele and genotype frequencies, and explain how selection, drift, gene flow and non-random mating change allele frequencies.",
  standards: ["Paper 1", "Paper 2", "Paper 3", "AHL D.2"],
  vocabulary: [
    {
      term: "Gene pool",
      definition:
        "The complete set of alleles present in a population at a given locus.",
    },
    {
      term: "Allele frequency",
      definition:
        "The proportion of a particular allele among all alleles at a locus in the gene pool, usually written $p$ or $q$.",
    },
    {
      term: "Hardy-Weinberg equilibrium",
      definition:
        "The state in which allele and genotype frequencies remain constant across generations in the absence of evolutionary forces.",
    },
    {
      term: "Genetic drift",
      definition:
        "Random change in allele frequencies due to sampling effects, strongest in small populations.",
    },
    {
      term: "Founder effect",
      definition:
        "Loss of genetic variation when a new population is established by a small number of colonists carrying only a subset of the original gene pool.",
    },
    {
      term: "Bottleneck effect",
      definition:
        "Sharp reduction in population size that removes alleles at random, reducing genetic diversity even if the population later recovers.",
    },
  ],
  concepts: [
    {
      id: "biohl-u4-hardy-weinberg",
      title: "The Hardy-Weinberg principle",
      skill:
        "State the assumptions of Hardy-Weinberg equilibrium and use $p^2 + 2pq + q^2 = 1$ to find allele and genotype frequencies.",
      lesson: {
        sections: [
          {
            heading: "The equation",
            body: "For a diploid locus with two alleles, let $p$ be the frequency of the dominant allele and $q$ the frequency of the recessive allele, so $p + q = 1$. Under random mating the genotype frequencies are $p^2$ (homozygous dominant), $2pq$ (heterozygous) and $q^2$ (homozygous recessive), giving **$p^2 + 2pq + q^2 = 1$**. Because $q^2$ is the frequency of the recessive homozygote — the only class directly observable for recessive traits — allele frequencies can be recovered from phenotype counts.",
          },
          {
            heading: "Assumptions of equilibrium",
            body: "Allele frequencies stay constant only if **all** of these hold: the population is very large (no drift), mating is random (no inbreeding or assortative mating), mutation rate is negligible, there is no migration (gene flow) and there is no natural selection. If any condition fails, frequencies change — which is exactly what makes the principle a useful null model for detecting evolution.",
          },
          {
            heading: "Why it matters",
            body: "Deviations from Hardy-Weinberg expectations signal that an evolutionary force is acting. For example, an excess of heterozygotes suggests heterozygote advantage or assortative mating, while a deficit of heterozygotes suggests inbreeding or the Wahlund effect (mixing of sub-populations). The equation also underlies carrier-frequency estimates used in genetic counselling.",
          },
        ],
        keyFormulas: [
          { name: "Allele frequencies", statement: "$p + q = 1$" },
          {
            name: "Genotype frequencies",
            statement:
              "$p^2 + 2pq + q^2 = 1$ with $AA = p^2$, $Aa = 2pq$, $aa = q^2$",
          },
          {
            name: "Recessive allele from phenotype",
            statement:
              "$q = \\sqrt{f_{aa}}$ where $f_{aa}$ is the recessive homozygote frequency",
          },
        ],
        workedExample: {
          problem:
            "In a population in Hardy-Weinberg equilibrium, $9\\%$ of individuals show a recessive disorder. Find the frequency of the recessive allele and the proportion of heterozygous carriers.",
          solution:
            "Recessive homozygotes $aa = q^2 = 0.09$, so $q = \\sqrt{0.09} = 0.30$ and $p = 0.70$. Carriers $Aa = 2pq = 2(0.70)(0.30) = 0.42$, so $42\\%$ of the population are carriers.",
        },
      },
      questions: [
        {
          id: "biohl-u4-hardy-weinberg-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population in Hardy-Weinberg equilibrium, the frequency of the recessive homozygote is $0.16$. What is the frequency of the dominant allele?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.84$" },
              { id: "b", text: "$0.16$" },
              { id: "c", text: "$0.40$" },
              { id: "d", text: "$0.60$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "$p^2 + 2pq + q^2 = 1$ with $p + q = 1$; $q^2$ is the recessive homozygote frequency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recessive homozygote frequency is $q^2 = 0.16$, so $q = \\sqrt{0.16} = 0.40$.",
                working: "q = 0.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then $p = 1 - q = 0.60$.",
                working: "p = 1 - 0.40 = 0.60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $0.60$",
            commonErrors: [
              "Answering $0.40$ — that is $q$, the recessive allele frequency, not $p$.",
              "Taking $p = \\sqrt{0.16}$ directly.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which condition would PREVENT a population from remaining in Hardy-Weinberg equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mutation rate is negligible" },
              { id: "b", text: "The population is very large" },
              {
                id: "c",
                text: "Individuals migrate between populations each generation",
              },
              { id: "d", text: "Mating occurs at random" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hardy-Weinberg assumptions",
                statement:
                  "Equilibrium requires: large population, random mating, no mutation, no migration (gene flow) and no selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall the five assumptions: large size, random mating, negligible mutation, no gene flow, no selection.",
                working: "\\text{five assumptions}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Migration introduces new alleles and removes others — gene flow changes allele frequencies.",
                working: "\\text{gene flow}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Options (a), (b) and (d) are all conditions that SUPPORT equilibrium; only migration disrupts it.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Individuals migrate between populations each generation",
            commonErrors: [
              "Misreading the stem — three options describe equilibrium conditions; only migration breaks them.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In a population in Hardy-Weinberg equilibrium for a two-allele locus, the frequency of the dominant allele $p = 0.6$ and the recessive allele $q = 0.4$. What proportion of the population are heterozygous carriers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.16$" },
              { id: "b", text: "$0.48$" },
              { id: "c", text: "$0.24$" },
              { id: "d", text: "$0.36$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Heterozygote frequency $= 2pq$; homozygote frequencies are $p^2$ and $q^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Heterozygotes correspond to genotype $Aa$ with frequency $2pq$.",
                working: "2pq",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $p = 0.6$ and $q = 0.4$.",
                working: "2(0.6)(0.4)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute: $2 \\times 0.6 \\times 0.4 = 0.48$.",
                working: "= 0.48",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (c) $0.48$ matches; $0.24$ would be $pq$ alone without the factor of 2.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $0.48$",
            commonErrors: [
              "Computing $pq = 0.24$ instead of $2pq$ — forgetting heterozygotes can form in two ways ($Ab$ and $aB$).",
            ],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Cystic fibrosis is caused by a recessive allele. In a large European population assumed to be in Hardy-Weinberg equilibrium, the frequency of affected individuals is $1\\%$. Genetic counsellors want carrier-frequency estimates for this population.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the frequency of the recessive allele in the population.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the frequency of heterozygous carriers in the population.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A second, smaller island population has $4\\%$ affected individuals. Calculate its recessive allele frequency and comment on the assumption of equilibrium.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate two reasons why a real population might deviate from Hardy-Weinberg frequencies for this locus, and what each deviation would imply.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "$p^2 + 2pq + q^2 = 1$; recessive homozygotes $aa = q^2$ are directly countable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Affected individuals are $aa = q^2 = 0.01$, so $q = \\sqrt{0.01} = 0.10$.",
                working: "q = \\sqrt{0.01} = 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "The recessive allele frequency is $0.10$ (10%).",
                working: "q = 0.10",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Carriers are heterozygotes $Aa = 2pq = 2(0.90)(0.10)$.",
                working: "2(0.9)(0.1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This gives $0.18$, so $18\\%$ of the population carry the allele.",
                working: "= 0.18",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For the island: $q^2 = 0.04$, so $q = \\sqrt{0.04} = 0.20$.",
                working: "q = \\sqrt{0.04} = 0.20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "A small island population may violate the large-population assumption (drift) and random mating (inbreeding) — deviations should be checked before trusting the estimate.",
                working: "\\text{drift/inbreeding risk}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Deviation example 1: non-random mating or inbreeding reduces heterozygotes below $2pq$; example 2: selection against affected individuals lowers $q$ over time.",
                working: "\\text{inbreeding, selection}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Each deviation signals the corresponding evolutionary force acting on the locus — the equation doubles as a diagnostic tool.",
                working: "\\text{diagnostic null model}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $q = 0.10$; (b) $18\\%$ carriers; (c) $q = 0.20$, but small island populations risk drift and inbreeding so equilibrium may not hold; (d) inbreeding reduces heterozygotes below $2pq$ and selection against affected individuals lowers $q$ — deviations reveal which forces are acting",
            commonErrors: [
              "Reporting $q = 0.01$ as the allele frequency — that is $q^2$; the square root must be taken.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 R1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population in Hardy-Weinberg equilibrium with allele frequencies $p$ and $q$, the frequency of heterozygotes is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$p^2 + q^2$" },
              { id: "b", text: "$pq$" },
              { id: "c", text: "$2p + 2q$" },
              { id: "d", text: "$2pq$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "$p^2 + 2pq + q^2 = 1$: homozygotes are $p^2$ and $q^2$, heterozygotes are $2pq$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Heterozygotes can form in two ways ($AB$ and $Ba$ arrangements), giving the factor of $2$.",
                working: "2pq",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The heterozygote frequency is therefore $2pq$ — option (b).",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $2pq$",
            commonErrors: [
              "Answering $pq$ — that omits the two ways a heterozygote can be formed.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the Hardy-Weinberg equation $p^2 + 2pq + q^2 = 1$, the term $q^2$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The frequency of heterozygotes" },
              { id: "b", text: "The frequency of the recessive allele" },
              { id: "c", text: "The frequency of the dominant allele" },
              { id: "d", text: "The frequency of recessive homozygotes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Genotype frequencies: $AA = p^2$, $Aa = 2pq$, $aa = q^2$; allele frequencies are $p$ and $q$ themselves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Squared terms correspond to homozygotes: $p^2$ for dominant homozygotes and $q^2$ for recessive homozygotes.",
                working: "q^2 = f_{aa}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The allele frequency itself is $q$, not $q^2$ — option (b) is correct.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The frequency of recessive homozygotes",
            commonErrors: [
              "Confusing $q$ with $q^2$ — $q$ is the allele frequency, $q^2$ is the recessive homozygote frequency.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A population shows significantly fewer heterozygotes than the Hardy-Weinberg prediction of $2pq$. Which explanation is most likely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heterozygote advantage increasing $2pq$" },
              { id: "b", text: "Gene flow making the population larger" },
              {
                id: "c",
                text: "Inbreeding or non-random mating reducing heterozygote frequency",
              },
              { id: "d", text: "Random mating with a very large population" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deviation from Hardy-Weinberg",
                statement:
                  "A deficit of heterozygotes signals non-random mating, inbreeding or the Wahlund effect (mixing of sub-populations).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fewer heterozygotes than $2pq$ means mating is not random — related individuals mate more often (inbreeding) or sub-populations with different allele frequencies are mixed (Wahlund effect).",
                working: "f_{Aa} < 2pq",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Heterozygote advantage would produce an excess, not a deficit; random mating in a large population would match $2pq$.",
                working: "\\text{deficit }\\Rightarrow\\text{ non-random}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (c) correctly identifies inbreeding/non-random mating as the cause.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Inbreeding or non-random mating reducing heterozygote frequency",
            commonErrors: [
              "Choosing heterozygote advantage — that produces MORE heterozygotes than $2pq$, not fewer.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population in Hardy-Weinberg equilibrium, the recessive allele frequency is $q = 0.25$. Calculate the frequency of heterozygotes and the frequency of the dominant allele $p$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Heterozygote frequency", answer: 0.375 },
              { label: "(b) Dominant allele frequency", answer: 0.75 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "$p + q = 1$ and heterozygote frequency $= 2pq$; with $q = 0.25$, $p = 0.75$.",
              },
            ],
            steps: [
              {
                reasoning: "First find $p = 1 - 0.25 = 0.75$.",
                working: "p = 0.75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Heterozygotes: $2pq = 2(0.75)(0.25) = 0.375$.",
                working: "2(0.75)(0.25) = 0.375",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.375$; (b) $0.75$",
            commonErrors: [
              "Computing $pq$ instead of $2pq$ for heterozygotes.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a population in Hardy-Weinberg equilibrium, $36\\%$ of individuals are homozygous dominant ($AA$) for a locus. Calculate the frequency of allele $A$, allele $a$, and heterozygous individuals.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Frequency of allele $A$", answer: 0.6 },
              { label: "(b) Frequency of allele $a$", answer: 0.4 },
              { label: "(c) Frequency of heterozygotes", answer: 0.48 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Dominant homozygote frequency $= p^2$; take the square root to recover $p$, then use $p + q = 1$ and $2pq$.",
              },
            ],
            steps: [
              {
                reasoning: "$p^2 = 0.36$, so $p = \\sqrt{0.36} = 0.60$.",
                working: "p = \\sqrt{0.36} = 0.60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$q = 1 - p = 0.40$.",
                working: "q = 0.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Heterozygotes: $2pq = 2(0.60)(0.40) = 0.48$.",
                working: "2(0.6)(0.4) = 0.48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.60$; (b) $0.40$; (c) $0.48$",
            commonErrors: [
              "Taking $p = 0.36$ directly — the square root must be taken because $p^2$ is the homozygote frequency.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Phenylketonuria (PKU) is caused by a recessive allele. In a large population in Hardy-Weinberg equilibrium, approximately $1$ in $10\\,000$ individuals is affected. Calculate the recessive allele frequency, the frequency of heterozygous carriers, and the expected number of carriers in a sample of $10\\,000$ people.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Recessive allele frequency", answer: 0.01 },
              { label: "(b) Carrier frequency", answer: 0.0198 },
              { label: "(c) Carriers per $10\\,000$ people", answer: 198 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Affected individuals are $aa = q^2$; with $q^2 = 1/10\\,000 = 0.0001$, $q = 0.01$ and carriers are $2pq = 2(0.99)(0.01) = 0.0198$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$q^2 = 1 / 10\\,000 = 0.0001$, so $q = \\sqrt{0.0001} = 0.01$.",
                working: "q = \\sqrt{0.0001} = 0.01",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carriers: $2pq = 2(0.99)(0.01) = 0.0198$.",
                working: "2(0.99)(0.01) = 0.0198",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In $10\\,000$ people, expected carriers $= 0.0198 \\times 10\\,000 = 198$ — far more than the single affected individual.",
                working: "0.0198 \\times 10\\,000 = 198",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The carrier pool is roughly $200$ times larger than the affected group, which is why screening targets carriers.",
                working: "\\text{carriers } \\gg \\text{affected}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.01$; (b) $0.0198$; (c) $198$ carriers",
            commonErrors: [
              "Reporting $q = 0.0001$ — that is $q^2$; the allele frequency is the square root.",
            ],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "For a rare recessive disorder, the number of heterozygous carriers in a population is typically much larger than the number of affected individuals. Why?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Heterozygotes have frequency $2pq$, which is much greater than $q^2$ when $q$ is small",
              },
              {
                id: "b",
                text: "Carriers have two copies of the recessive allele",
              },
              { id: "c", text: "Mutation only creates heterozygotes" },
              { id: "d", text: "Affected individuals do not reproduce" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Carrier frequency $2pq$ exceeds affected frequency $q^2$ whenever $q$ is small, because $2pq \\approx 2q$ while $q^2$ shrinks quadratically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For small $q$, $2pq \\approx 2q$ whereas $q^2$ becomes very small — carriers vastly outnumber affected individuals.",
                working: "2pq \\gg q^2 \\text{ for small } q",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Carriers have one copy of the allele and are phenotypically normal, so they persist and are counted as $Aa = 2pq$.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Heterozygotes have frequency $2pq$, which is much greater than $q^2$ when $q$ is small",
            commonErrors: [
              "Thinking carriers have two copies — carriers are heterozygous with one copy.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Two sub-populations with different allele frequencies are merged into one breeding population (the Wahlund effect). The combined allele frequency is $q = 0.30$, but the observed heterozygote frequency is only $0.30$, whereas Hardy-Weinberg predicts $2pq$. Calculate the expected heterozygote frequency, the observed frequency, and the deficit.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Expected heterozygote frequency $2pq$",
                answer: 0.42,
              },
              { label: "(b) Observed heterozygote frequency", answer: 0.3 },
              { label: "(c) Deficit", answer: 0.12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wahlund effect",
                statement:
                  "Mixing sub-populations with different allele frequencies produces a deficit of heterozygotes below $2pq$ because within-group mating dominates.",
              },
            ],
            steps: [
              {
                reasoning: "Expected: $2pq = 2(0.70)(0.30) = 0.42$.",
                working: "2(0.7)(0.3) = 0.42",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Observed $= 0.30$; deficit $= 0.42 - 0.30 = 0.12$.",
                working: "0.42 - 0.30 = 0.12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The deficit signals the Wahlund effect — the merged population is not randomly mating across the whole gene pool.",
                working: "\\text{Wahlund deficit}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.42$; (b) $0.30$; (c) $0.12$",
            commonErrors: [
              "Treating the merged population as a single random-mating unit — the deficit is the diagnostic signature of the Wahlund effect.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Phenylketonuria (PKU) is caused by a recessive allele. In a large European population assumed to be in Hardy-Weinberg equilibrium, about $1$ in $10\\,000$ newborns is affected. A regional health authority wants to estimate carrier frequency for a screening programme.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the frequency of the recessive PKU allele in the population.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the frequency of heterozygous carriers and express it as '1 in N' people.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A small island community reports $4$ affected births in $4\\,000$ newborns. Calculate its recessive allele frequency and comment on whether Hardy-Weinberg assumptions likely hold there.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate two factors that could make the mainland carrier estimate inaccurate for the island community.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "$p^2 + 2pq + q^2 = 1$; affected individuals are $aa = q^2$ and are directly countable.",
              },
              {
                kind: "principle",
                name: "Null model",
                statement:
                  "Hardy-Weinberg is a baseline: deviations reveal which evolutionary forces (drift, selection, non-random mating, gene flow) are acting.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Affected frequency $q^2 = 1/10\\,000 = 0.0001$, so $q = \\sqrt{0.0001} = 0.01$.",
                working: "q = \\sqrt{0.0001} = 0.01",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "The recessive allele frequency is $0.01$ (1%).",
                working: "q = 0.01",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Carriers: $2pq = 2(0.99)(0.01) = 0.0198$.",
                working: "2(0.99)(0.01) = 0.0198",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This is about $1$ in $50$ people ($1/0.0198 \\approx 50.5$) — roughly $198$ carriers per $10\\,000$.",
                working: "\\approx 1 \\text{ in } 50",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Island: $q^2 = 4/4\\,000 = 0.001$, so $q = \\sqrt{0.001} \\approx 0.0316$.",
                working: "q = \\sqrt{0.001} \\approx 0.0316",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "A small island community likely violates the large-population assumption (drift) and may have inbreeding — the estimate should be treated with caution.",
                working: "\\text{drift/inbreeding risk}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Factor 1: genetic drift in a small population changes allele frequencies randomly, so the mainland frequency may not apply.",
                working: "\\text{drift}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Factor 2: non-random mating or inbreeding in a closed community alters genotype frequencies; also different ancestry (founder effects) can give a different allele frequency entirely.",
                working: "\\text{inbreeding/founder}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $q = 0.01$; (b) carrier frequency $0.0198$, about $1$ in $50$ people; (c) island $q \\approx 0.032$, but small size means drift and inbreeding may violate equilibrium; (d) drift in small populations and non-random mating/founder effects can make the mainland estimate inaccurate for the island",
            commonErrors: [
              "Reporting $q = 0.0001$ as the allele frequency — that is $q^2$; take the square root.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 R1 (c), M1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population in Hardy-Weinberg equilibrium, the dominant allele frequency is $p = 0.90$ and the recessive allele frequency is $q = 0.10$. What is the frequency of recessive homozygotes?",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency of recessive homozygotes", answer: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hardy-Weinberg equation",
                statement:
                  "Recessive homozygote frequency $= q^2 = 0.10^2 = 0.01$.",
              },
            ],
            steps: [
              {
                reasoning: "Recessive homozygotes correspond to $aa = q^2$.",
                working: "q^2 = 0.10^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This gives $0.01$, or $1\\%$ of the population.",
                working: "= 0.01",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.01$ ($1\\%$)",
            commonErrors: [
              "Using $q = 0.10$ as the homozygote frequency — the genotype frequency is $q^2$.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A population is NOT in Hardy-Weinberg equilibrium. The observed genotype frequencies are $AA = 0.50$, $Aa = 0.30$, $aa = 0.20$. Calculate the observed allele frequency of $a$ in the gene pool, the observed frequency of $A$, and the frequency of $aa$ that Hardy-Weinberg equilibrium would predict for this allele frequency.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Observed frequency of allele $a$", answer: 0.35 },
              { label: "(b) Observed frequency of allele $A$", answer: 0.65 },
              {
                label: "(c) Predicted $aa$ frequency at equilibrium",
                answer: 0.1225,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allele frequency from genotypes",
                statement:
                  "Allele frequency $q = f_{aa} + \\tfrac{1}{2}f_{Aa}$ — count alleles, not individuals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frequency of $a$: $0.20 + \\tfrac{1}{2}(0.30) = 0.20 + 0.15 = 0.35$.",
                working: "q = 0.20 + 0.15 = 0.35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Frequency of $A$: $0.50 + \\tfrac{1}{2}(0.30) = 0.65$; check $0.35 + 0.65 = 1$.",
                working: "p = 0.65",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Predicted $aa$ at equilibrium: $q^2 = 0.35^2 = 0.1225$ — less than the observed $0.20$, confirming disequilibrium.",
                working: "0.35^2 = 0.1225",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.35$; (b) $0.65$; (c) $0.1225$",
            commonErrors: [
              "Using $f_{aa}$ alone as the allele frequency — heterozygotes carry one copy of each allele and must be counted at half weight.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-hardy-weinberg-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The Hardy-Weinberg principle is often described as a 'null model' of evolution.",
          parts: [
            {
              label: "a",
              prompt:
                "State the five conditions that must all hold for a population to remain in Hardy-Weinberg equilibrium.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why Hardy-Weinberg is called a null model and how it is used to detect evolution.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate two limitations of applying Hardy-Weinberg calculations to real populations.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hardy-Weinberg assumptions",
                statement:
                  "Equilibrium requires: very large population, random mating, negligible mutation, no migration and no selection.",
              },
              {
                kind: "principle",
                name: "Null model",
                statement:
                  "A null model describes what is expected when nothing is happening; deviations from it reveal which forces are acting.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The five conditions: large population size (no drift), random mating, negligible mutation rate, no gene flow/migration, and no natural selection.",
                working: "\\text{five assumptions}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "All five must hold simultaneously; if any fails, allele frequencies change.",
                working: "\\text{all required}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The equation predicts genotype frequencies when no evolutionary force acts — it is the 'nothing happening' baseline.",
                working: "\\text{baseline expectation}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Observed deviations from $p^2, 2pq, q^2$ signal which force is acting (e.g. heterozygote deficit implies non-random mating), making it a diagnostic tool.",
                working: "\\text{deviation = signal}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Limitation 1: real populations are never perfectly large, random-mating or migration-free, so exact equilibrium is an idealisation.",
                working: "\\text{idealisation}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Limitation 2: it assumes only two alleles and random mating; multiple alleles, selection and hidden population structure all violate the simple model — estimates of carrier frequency are approximations.",
                working: "\\text{two-allele assumption}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) large population, random mating, negligible mutation, no gene flow and no selection; (b) it is the 'no evolution' baseline — deviations reveal which force is acting; (c) real populations never meet all assumptions perfectly, and the two-allele random-mating model is a simplification, so results are estimates",
            commonErrors: [
              "Listing only some of the five assumptions — all five are required simultaneously.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), R1 A1 (c).",
          },
        },
      ],
    },
    {
      id: "biohl-u4-evolutionary-forces",
      title: "Evolutionary forces changing allele frequencies",
      skill:
        "Explain how natural selection, genetic drift, gene flow and non-random mating alter allele frequencies, and evaluate their relative importance.",
      lesson: {
        sections: [
          {
            heading: "Genetic drift and small populations",
            body: "**Genetic drift** is random fluctuation of allele frequencies caused by sampling in finite populations. Its strength is inversely proportional to population size: in small populations drift can fix or lose alleles within a few generations, while in large populations its effect is negligible. Two special cases matter: the **founder effect**, where a few colonists establish a population carrying only part of the ancestral gene pool, and the **bottleneck effect**, where a crash reduces diversity even if numbers later recover. Island species often show low diversity from founder effects.",
          },
          {
            heading: "Gene flow, mutation and non-random mating",
            body: "**Gene flow** (migration) homogenises populations by moving alleles between them; it can introduce adaptive alleles but also swamp locally adapted gene pools. **Mutation** is the ultimate source of new alleles but is a weak force per generation. **Non-random mating** — inbreeding or assortative mating — changes genotype frequencies (usually reducing heterozygotes) without necessarily changing allele frequencies.",
          },
          {
            heading: "Comparing the forces",
            body: "Selection is the only force that consistently improves adaptation; drift and gene flow are stochastic or homogenising. In large populations with gene flow, selection dominates; in small isolated populations drift can override selection. Evaluating which force dominates requires knowing population size, migration rate and selection strength — a recurring theme in conservation genetics.",
          },
        ],
        keyFormulas: [
          {
            name: "Drift strength",
            statement:
              "Inversely proportional to effective population size $N_e$; strongest when $N_e$ is small",
          },
          {
            name: "Founder effect",
            statement:
              "New population samples a subset of alleles; diversity reduced at founding",
          },
          {
            name: "Bottleneck effect",
            statement:
              "Population crash removes alleles at random; recovery does not restore lost variation",
          },
        ],
        workedExample: {
          problem:
            "A mainland bird population of one million loses genetic diversity when 20 individuals colonise a nearby island. Ten thousand years later the island population has recovered to 50 000 birds but remains less diverse than the mainland. Explain.",
          solution:
            "The 20 founders carried only a small sample of the mainland gene pool — a **founder effect**. Even though the population grew large, drift during the bottleneck and subsequent generations could not restore alleles that were never present, so diversity remains lower than on the mainland.",
        },
      },
      questions: [
        {
          id: "biohl-u4-evolutionary-forces-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In which situation would genetic drift have the strongest effect on allele frequencies?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A captive population of 500 with managed breeding",
              },
              {
                id: "b",
                text: "A population of 10 million with random mating",
              },
              {
                id: "c",
                text: "A large mainland population with high gene flow",
              },
              {
                id: "d",
                text: "A population of 50 individuals on an isolated island",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic drift",
                statement:
                  "Random allele-frequency change whose strength is inversely proportional to population size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drift is strongest in the smallest populations because sampling error is largest.",
                working: "\\text{small } N",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fifty isolated birds experience much stronger drift than millions or hundreds with gene flow.",
                working: "N = 50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** A population of 50 individuals on an isolated island",
            commonErrors: [
              "Choosing the largest population — drift weakens as $N$ grows.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A disease reduces a large deer population from 100 000 to 200 individuals. The population later recovers to 80 000 but has lost several alleles that were present before the crash. What is this an example of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gene flow" },
              { id: "b", text: "The founder effect" },
              { id: "c", text: "Directional selection" },
              { id: "d", text: "The bottleneck effect" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bottleneck effect",
                statement:
                  "A drastic population reduction removes alleles at random; recovery does not restore lost variation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The population crashed from 100 000 to 200 — a severe bottleneck.",
                working: "N: 100\\,000 \\to 200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recovery to 80 000 did not restore alleles lost during the crash — the signature of the bottleneck effect.",
                working: "\\text{diversity not restored}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Founder effect applies to new populations; here the same population shrank — bottleneck is correct.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The bottleneck effect",
            commonErrors: [
              "Confusing bottleneck with founder effect — founder applies when a new population is founded, bottleneck when an existing one crashes.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "On two islands separated by 50 km of ocean, populations of the same lizard species show different allele frequencies for a colour gene. Occasionally storms carry lizards between the islands. What is the most likely long-term effect of this occasional migration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Drift will eliminate all differences immediately",
              },
              {
                id: "b",
                text: "The populations will diverge faster because migration adds mutations",
              },
              {
                id: "c",
                text: "Gene flow will gradually make the allele frequencies more similar between the islands",
              },
              {
                id: "d",
                text: "The islands will instantly become separate species",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gene flow",
                statement:
                  "Migration moves alleles between populations, reducing genetic differentiation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Storm-carried lizards move alleles between the two populations — this is gene flow.",
                working: "\\text{migration}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each migrant introduces alleles from the other island, pulling the allele frequencies towards each other.",
                working: "\\text{frequencies converge}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The effect is gradual over many generations, not instant, and it opposes divergence rather than accelerating it.",
                working: "\\text{gradual homogenisation}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Option (b) correctly describes convergence of allele frequencies.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Gene flow will gradually make the allele frequencies more similar between the islands",
            commonErrors: [
              "Thinking migration speeds divergence — it does the opposite by mixing gene pools.",
            ],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two populations of the same freshwater fish species live in neighbouring lakes connected by a stream. Lake A is large with stable conditions; Lake B is small and its level fluctuates seasonally. Both populations are monitored for a neutral genetic marker.",
          parts: [
            {
              label: "a",
              prompt:
                "Predict which population will show greater random fluctuation in allele frequencies and justify your answer.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the connecting stream affects the genetic differentiation between the lakes.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A third lake is founded by just 15 fish escaping from Lake A during a flood. Predict the genetic consequences for the new population.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate which evolutionary force is likely to dominate in each lake and what this means for conservation of the species' genetic diversity.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drift versus gene flow",
                statement:
                  "Drift dominates in small isolated populations; gene flow homogenises connected populations; selection dominates when it is strong relative to drift.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lake B is smaller, so drift is stronger there — allele frequencies fluctuate more by chance.",
                working: "\\text{small } N \\Rightarrow \\text{strong drift}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Lake A's large stable population buffers drift; Lake B may also experience crashes amplifying drift.",
                working: "\\text{large } N \\text{ stable}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The stream allows fish (and gametes) to move between lakes — ongoing gene flow.",
                working: "\\text{stream = gene flow}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Gene flow reduces differentiation, keeping allele frequencies similar despite local differences.",
                working: "\\text{homogenisation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Fifteen founders carry only a sample of Lake A's alleles — a founder effect.",
                working: "\\text{founder effect}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The new lake starts with reduced diversity, and drift in a small population may fix or lose alleles further.",
                working: "\\text{reduced diversity}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Lake A: selection and low drift dominate; Lake B and the new lake: drift dominates — small populations lose diversity fastest.",
                working: "\\text{drift in small lakes}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Conservation implication: protect connectivity (gene flow) and large populations to maintain adaptive potential; small isolated populations need monitoring for inbreeding.",
                working: "\\text{conservation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Lake B — smaller size means stronger drift; (b) the stream provides gene flow, homogenising allele frequencies; (c) a founder effect reduces diversity at founding, then drift may fix alleles; (d) selection dominates in large Lake A while drift dominates in the small lakes — conservation should preserve connectivity and large population sizes",
            commonErrors: [
              "Assuming larger populations always have more diversity — bottlenecks can strip diversity even from once-large populations.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The founder effect occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Individuals migrate between two large populations each generation",
              },
              {
                id: "b",
                text: "A new population is established by a small number of colonists carrying only a subset of the ancestral gene pool",
              },
              {
                id: "c",
                text: "A large population crashes to a few individuals and then recovers",
              },
              {
                id: "d",
                text: "A mutation spreads through horizontal gene transfer",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Founder effect",
                statement:
                  "Loss of genetic variation when a new population is founded by a small sample of the original gene pool.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The key is a NEW population founded by FEW colonists — the founders carry only part of the ancestral variation.",
                working: "\\text{few founders}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (a) describes the bottleneck effect — a crash of an existing population, not founding of a new one.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** A new population is established by a small number of colonists carrying only a subset of the ancestral gene pool",
            commonErrors: [
              "Confusing founder with bottleneck effect — founder applies to new populations; bottleneck to crashes of existing ones.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Gene flow (migration) between populations tends to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have no effect on allele frequencies" },
              {
                id: "b",
                text: "Make allele frequencies in different populations more similar",
              },
              {
                id: "c",
                text: "Increase genetic differences between populations",
              },
              {
                id: "d",
                text: "Always increase genetic diversity within each population",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gene flow",
                statement:
                  "Migration moves alleles between populations, reducing genetic differentiation and homogenising allele frequencies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Migrants carry their alleles into the recipient population, pulling its frequencies towards the source population's.",
                working: "\\text{alleles move}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Over generations the two gene pools converge — differentiation decreases: option (b).",
                working: "\\text{frequencies converge}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Make allele frequencies in different populations more similar",
            commonErrors: [
              "Thinking migration speeds divergence — it does the opposite by mixing gene pools.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A small lizard population of $60$ individuals lives on an isolated island with no immigration. Over a few decades its genetic diversity declines noticeably even though the environment is stable and there is no obvious selection. What is the most likely cause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gene flow removing alleles" },
              {
                id: "b",
                text: "Genetic drift — random allele-frequency changes are strong in small populations",
              },
              { id: "c", text: "Directional selection against diversity" },
              { id: "d", text: "Mutation rates increasing on islands" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic drift",
                statement:
                  "Random sampling of alleles causes frequency changes whose strength is inversely proportional to population size — strongest in small isolated populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The population is small ($N = 60$) and isolated — conditions where drift dominates.",
                working: "N = 60,\\ \\text{isolated}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drift randomly fixes or loses alleles, reducing diversity without any selective pressure — consistent with the stable environment.",
                working: "\\text{random loss of alleles}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) is correct; selection, gene flow and mutation do not fit the described scenario.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Genetic drift — random allele-frequency changes are strong in small populations",
            commonErrors: [
              "Invoking selection — the environment is stable, so a non-selective random force (drift) is the better explanation.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A mainland population has allele $A$ at frequency $0.80$. Exactly $25$ individuals found a new island population. Calculate the expected number of copies of allele $A$ in the founders' gene pool, the total number of allele copies, and the expected frequency of $A$ if the founders are a random sample.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Expected copies of allele $A$", answer: 40 },
              { label: "(b) Total allele copies", answer: 50 },
              { label: "(c) Expected frequency of $A$", answer: 0.8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Founder sampling",
                statement:
                  "A diploid founder group of $N$ individuals carries $2N$ allele copies; expected copies of an allele $= 2Nq$.",
              },
            ],
            steps: [
              {
                reasoning: "Total allele copies: $2 \\times 25 = 50$.",
                working: "2 \\times 25 = 50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expected copies of $A$: $50 \\times 0.80 = 40$.",
                working: "50 \\times 0.80 = 40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Expected frequency: $40 / 50 = 0.80$ — the expectation matches the source, but actual founders may differ by chance (sampling error).",
                working: "\\frac{40}{50} = 0.80",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $40$ copies; (b) $50$ copies; (c) $0.80$",
            commonErrors: [
              "Using $25$ instead of $50$ allele copies — diploid founders carry two alleles each.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A deer population crashes from $50\\,000$ individuals to $500$ during a severe winter. By what factor did the population size decrease, and what percentage of the original population remains?",
          response: {
            type: "numeric",
            parts: [
              { label: "Decrease factor", answer: 100 },
              { label: "Percentage remaining", answer: 1, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bottleneck effect",
                statement:
                  "A drastic population reduction removes alleles at random; recovery does not restore lost variation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Factor: $50\\,000 / 500 = 100$; remaining percentage: $500 / 50\\,000 = 0.01 = 1\\%$.",
                working:
                  "\\frac{50\\,000}{500} = 100;\\ \\frac{500}{50\\,000} = 1\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A $99\\%$ reduction is a severe bottleneck that will strongly increase drift.",
                working: "\\text{bottleneck}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Factor of $100$; $1\\%$ remains",
            commonErrors: [
              "Reporting the percentage lost ($99\\%$) instead of the percentage remaining.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Two islands of equal size exchange migrants at a rate of $10\\%$ per generation. Population A has allele frequency $q = 0.60$ and population B has $q = 0.20$. Assuming each generation $10\\%$ of each population is replaced by migrants from the other, calculate the allele frequency in each population after one generation of migration.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) Allele frequency in A after migration",
                answer: 0.56,
              },
              {
                label: "(b) Allele frequency in B after migration",
                answer: 0.24,
              },
              {
                label: "(c) Difference between frequencies after migration",
                answer: 0.32,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gene flow",
                statement:
                  "Migration blends allele frequencies: each population's new frequency is a weighted average of its own and the migrant source.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Population A: $0.90(0.60) + 0.10(0.20) = 0.54 + 0.02 = 0.56$.",
                working: "0.9(0.6) + 0.1(0.2) = 0.56",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Population B: $0.90(0.20) + 0.10(0.60) = 0.18 + 0.06 = 0.24$.",
                working: "0.9(0.2) + 0.1(0.6) = 0.24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Difference: $0.56 - 0.24 = 0.32$ — gene flow has narrowed the gap from $0.40$.",
                working: "0.56 - 0.24 = 0.32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.56$; (b) $0.24$; (c) $0.32$",
            commonErrors: [
              "Averaging the two frequencies for both populations — each population keeps $90\\%$ of its own alleles and gains $10\\%$ migrants.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a population where individuals preferentially mate with partners of similar phenotype (assortative mating), which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Both allele and genotype frequencies are unaffected",
              },
              {
                id: "b",
                text: "Allele frequencies change but genotype frequencies stay the same",
              },
              {
                id: "c",
                text: "Genotype frequencies change — typically fewer heterozygotes — while allele frequencies may be unchanged",
              },
              { id: "d", text: "Only heterozygote frequency increases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-random mating",
                statement:
                  "Assortative mating and inbreeding alter genotype frequencies (usually reducing heterozygotes) without necessarily changing allele frequencies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mating like with like produces more homozygotes and fewer heterozygotes than random mating predicts.",
                working: "f_{Aa} < 2pq",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Because alleles are not created or destroyed, allele frequencies can remain the same even as genotype frequencies shift — option (b).",
                working: "\\text{genotype freqs change}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This violates the random-mating assumption of Hardy-Weinberg equilibrium.",
                working: "\\text{equilibrium broken}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Genotype frequencies change — typically fewer heterozygotes — while allele frequencies may be unchanged",
            commonErrors: [
              "Claiming allele frequencies must change — non-random mating redistributes genotypes but not the allele pool.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a small population, the frequency of a neutral allele fluctuates over four generations: $0.50$, $0.70$, $0.40$, $0.90$. Calculate the range of the fluctuation, the mean frequency across the four generations, and the largest single-generation change.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Range of fluctuation", answer: 0.5 },
              { label: "(b) Mean frequency", answer: 0.625 },
              { label: "(c) Largest single-generation change", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic drift",
                statement:
                  "Drift causes random allele-frequency fluctuations whose magnitude is largest in small populations.",
              },
            ],
            steps: [
              {
                reasoning: "Range: $0.90 - 0.40 = 0.50$.",
                working: "0.90 - 0.40 = 0.50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mean: $(0.50 + 0.70 + 0.40 + 0.90) / 4 = 2.50 / 4 = 0.625$.",
                working: "\\frac{2.50}{4} = 0.625",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Generation-to-generation changes: $+0.20$, $-0.30$, $+0.50$ — the largest is $0.50$ (from $0.40$ to $0.90$).",
                working: "\\max |\\Delta q| = 0.50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.50$; (b) $0.625$; (c) $0.50$",
            commonErrors: [
              "Computing range as $0.90 - 0.50$ — range uses the maximum and minimum values observed ($0.90$ and $0.40$).",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "An island fox population was founded by just $20$ individuals escaping from the mainland a century ago. The population has since grown to $500$ but shows much lower genetic diversity than mainland foxes, and some individuals show signs of inbreeding depression (reduced fitness from related matings).",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the founder effect in this scenario and why diversity remains low despite population growth.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how inbreeding and genetic drift act together in this small population.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest two management strategies a conservation programme could use to restore genetic diversity.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the trade-off between introducing mainland foxes (gene flow) and preserving the island population's unique local adaptation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Founder effect and drift",
                statement:
                  "Founders carry only a sample of alleles; in small populations drift then fixes or loses alleles, so growth does not restore lost variation.",
              },
              {
                kind: "principle",
                name: "Conservation genetics",
                statement:
                  "Gene flow can restore diversity but may swamp local adaptation — management requires balancing the two.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The $20$ founders carried only a subset of the mainland gene pool — alleles absent at founding can never reappear by drift alone.",
                working: "\\text{founder effect}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Population growth to $500$ increases size but cannot restore alleles that were never present — diversity stays low.",
                working: "\\text{lost alleles stay lost}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Inbreeding increases homozygosity, exposing recessive deleterious alleles and reducing fitness — the inbreeding depression observed.",
                working: "\\text{inbreeding depression}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Drift in the small population randomly changes allele frequencies each generation, compounding the diversity loss.",
                working: "\\text{drift + inbreeding}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Strategy 1: introduce a small number of mainland foxes to restore gene flow and new alleles.",
                working: "\\text{gene flow}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Strategy 2: manage breeding to minimise related matings, or maintain a large effective population size to slow further drift.",
                working: "\\text{managed breeding}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Introducing mainland foxes restores diversity but risks swamping locally adapted island alleles — a real trade-off.",
                working: "\\text{diversity vs adaptation}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Evaluation should weigh inbreeding depression risk against loss of local adaptation; often a small, controlled introduction is the compromise.",
                working: "\\text{controlled introgression}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) the 20 founders sampled only part of the gene pool, and growth cannot restore alleles never present; (b) inbreeding raises homozygosity causing depression while drift randomly loses alleles; (c) introduce mainland foxes for gene flow and manage breeding to reduce related matings; (d) gene flow restores diversity but may swamp local adaptation — a controlled small introduction balances both",
            commonErrors: [
              "Assuming population growth automatically restores diversity — only new alleles (via mutation or migration) can do that.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The mutation rate at a particular locus is $10^{-6}$ per generation, and a population contains $1\\,000\\,000$ individuals. Assuming each individual carries two copies of the locus, estimate the number of new mutant alleles appearing per generation and per $1000$ generations.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) New mutants per generation", answer: 2 },
              { label: "(b) New mutants per 1000 generations", answer: 2000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutation as a force",
                statement:
                  "Mutation is the ultimate source of new alleles but is weak per generation because rates are very low.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Allele copies per generation: $2 \\times 1\\,000\\,000 = 2\\,000\\,000$; new mutants $= 2\\,000\\,000 \\times 10^{-6} = 2$.",
                working: "2 \\times 10^6 \\times 10^{-6} = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Over $1000$ generations: $2 \\times 1000 = 2000$ new mutant alleles.",
                working: "2 \\times 1000 = 2000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2$ per generation; (b) $2000$ per 1000 generations",
            commonErrors: [
              "Using $1\\,000\\,000$ instead of $2\\,000\\,000$ allele copies — diploid individuals carry two copies.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Population A has allele frequency $q = 0.80$. Each generation, $5\\%$ of population B's individuals are migrants from A, while the resident B population has $q = 0.40$. Calculate the allele frequency in B after one generation of migration, the change from the original B frequency, and the contribution of migrant alleles.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) New allele frequency in B", answer: 0.42 },
              { label: "(b) Change in frequency", answer: 0.02 },
              { label: "(c) Migrant allele contribution", answer: 0.04 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gene flow",
                statement:
                  "New frequency $= (1 - m)q_{\\text{resident}} + m q_{\\text{migrant}}$, where $m$ is the migration rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New B frequency: $0.95(0.40) + 0.05(0.80) = 0.38 + 0.04 = 0.42$.",
                working: "0.95(0.4) + 0.05(0.8) = 0.42",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Change: $0.42 - 0.40 = +0.02$ — gene flow pulled B towards A.",
                working: "0.42 - 0.40 = 0.02",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Migrant contribution: $0.05 \\times 0.80 = 0.04$ of the new frequency comes directly from A's alleles.",
                working: "0.05 \\times 0.80 = 0.04",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.42$; (b) $+0.02$; (c) $0.04$",
            commonErrors: [
              "Using $q = 0.80$ for all of B — only $5\\%$ of B is replaced by migrants each generation.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u4-evolutionary-forces-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evolutionary biologists debate which force — natural selection, genetic drift or gene flow — is most important in shaping genetic diversity. Consider two scenarios: (1) a large continental population of millions of individuals with high migration between regions; (2) a small island population of $50$ individuals isolated for centuries.",
          parts: [
            {
              label: "a",
              prompt:
                "Predict which force dominates in each scenario and justify your answer.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the relative importance of drift and selection depends on population size.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe one situation in which gene flow could be more important than selection for maintaining diversity.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the claim that 'selection is the only force that matters in evolution'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forces compared",
                statement:
                  "Selection is adaptive and directional; drift is random and strongest in small populations; gene flow homogenises populations and can introduce or remove alleles.",
              },
              {
                kind: "principle",
                name: "Drift–selection balance",
                statement:
                  "Drift dominates when $N_e$ is small; selection dominates when it is strong relative to drift in large populations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Scenario 1: selection dominates — large size minimises drift and high migration homogenises, leaving selection as the main diversifying force locally.",
                working: "\\text{selection dominates}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Scenario 2: drift dominates — $N = 50$ makes sampling error large and isolation removes gene flow, so random changes overwhelm weak selection.",
                working: "\\text{drift dominates}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Drift strength is inversely proportional to effective population size; in large populations selection has time to act consistently before drift fixes alleles.",
                working: "\\text{drift }\\propto 1/N_e",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "In small populations drift can fix deleterious alleles or lose beneficial ones faster than selection can act — selection becomes inefficient.",
                working: "\\text{drift overrides}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Example: two diverged populations connected by migration — gene flow maintains shared polymorphism and prevents speciation, maintaining diversity that selection alone might eliminate.",
                working: "\\text{gene flow maintains diversity}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Gene flow can also introduce adaptive alleles (e.g. antibiotic resistance) between populations faster than mutation alone.",
                working: "\\text{introduces alleles}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The claim is wrong: drift clearly changes allele frequencies (bottlenecks, founder effects) and gene flow homogenises populations — both demonstrably shape diversity.",
                working: "\\text{drift + gene flow matter}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "However, only selection produces consistent adaptive change — drift and gene flow are random or homogenising — so a refined claim would be 'selection is the only adaptive force'.",
                working: "\\text{refined claim}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) selection dominates the large connected population; drift dominates the small isolated one; (b) drift weakens as $N_e$ grows, so selection dominates in large populations and drift can override it in small ones; (c) gene flow between diverged populations maintains shared polymorphism and can spread adaptive alleles; (d) the claim is too strong — drift and gene flow demonstrably change diversity, but only selection produces consistent adaptation",
            commonErrors: [
              "Saying selection is the only force that changes allele frequencies — drift and gene flow demonstrably do too.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
      ],
    },
  ],
};

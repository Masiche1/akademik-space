import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "biohl-u3-lesson-3-2",
  code: "3-2",
  title: "Population Genetics: Gene Pools and Hardy-Weinberg",
  goal: "I CAN define the gene pool and allele frequencies, and use the Hardy-Weinberg equilibrium to calculate genotype frequencies and detect evolutionary change.",
  standards: ["Paper 1", "Paper 2", "AHL F.1"],
  vocabulary: [
    { term: "Gene pool", definition: "The complete set of alleles present in the gametes of all individuals in a population." },
    { term: "Allele frequency", definition: "The proportion of all copies of a gene in a population that carry a particular allele; frequencies sum to 1." },
    { term: "Genotype frequency", definition: "The proportion of individuals in a population carrying a particular genotype (e.g. $AA$, $Aa$ or $aa$)." },
    { term: "Hardy-Weinberg equilibrium", definition: "The state in which allele and genotype frequencies remain constant between generations in the absence of evolutionary forces." },
    { term: "Random mating", definition: "Mating in which any individual can pair with any other, so allele combinations are formed by chance — a condition for Hardy-Weinberg equilibrium." },
    { term: "Microevolution", definition: "A change in allele frequencies within a population over time, driven by mutation, selection, drift, migration or non-random mating." },
  ],
  concepts: [
    {
      id: "biohl-u3-gene-pools",
      title: "Gene pools and allele frequencies",
      skill: "Define the gene pool and calculate allele and genotype frequencies from population counts.",
      lesson: {
        sections: [
          {
            heading: "The gene pool",
            body: "A population's gene pool is the total collection of alleles at every locus across all individuals. For a single gene with two alleles $A$ and $a$, let $p$ be the frequency of $A$ and $q$ the frequency of $a$; then $p + q = 1$. Because every individual carries two copies of each gene, counting alleles means counting both copies in heterozygotes.",
          },
          {
            heading: "Calculating frequencies",
            body: "If a population of $N$ individuals contains $n_{AA}$, $n_{Aa}$ and $n_{aa}$ individuals, then the frequency of allele $A$ is $p = \\frac{2n_{AA} + n_{Aa}}{2N}$ and $q = \\frac{2n_{aa} + n_{Aa}}{2N}$. Genotype frequencies are simply $n_{AA}/N$, $n_{Aa}/N$ and $n_{aa}/N$.",
          },
          {
            heading: "Why allele frequencies matter",
            body: "Allele frequencies describe the raw material available to evolution: natural selection, drift and other forces act by changing them. Two populations can have very different allele frequencies even for the same trait, and tracking frequencies across generations is how microevolution is measured. Because each individual contributes two gene copies, heterozygotes carry one copy of each allele and must be counted carefully in both numerator terms.",
          },
        ],
        keyFormulas: [
          { name: "Allele frequencies", statement: "$p + q = 1$, where $p$ is the frequency of allele $A$ and $q$ of allele $a$." },
          { name: "Allele count", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$; $q = \\frac{2n_{aa} + n_{Aa}}{2N}$ for a population of $N$ individuals." },
          { name: "Genotype frequencies", statement: "$f_{AA} = n_{AA}/N$, $f_{Aa} = n_{Aa}/N$, $f_{aa} = n_{aa}/N$." },
        ],
        workedExample: {
          problem: "In a population of 500 plants, 200 are $AA$, 200 are $Aa$ and 100 are $aa$. Calculate the frequency of allele $A$.",
          solution: "$p = \\frac{2(200) + 200}{2 \\times 500} = \\frac{600}{1000} = 0.6$.",
        },
      },
      questions: [
        {
          id: "biohl-u3-gene-pool-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population, the frequency of allele $A$ is $p = 0.35$. What is the frequency of allele $a$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.35$" },
              { id: "b", text: "$0.65$" },
              { id: "c", text: "$1.35$" },
              { id: "d", text: "$0.175$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequencies sum to 1", statement: "$p + q = 1$." },
            ],
            steps: [
              { reasoning: "The two allele frequencies must sum to 1.", working: "1 - 0.35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.65$",
            commonErrors: ["Answering 0.35 — frequencies must sum to 1."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A population of 800 individuals contains 320 $AA$, 400 $Aa$ and 80 $aa$ individuals. Calculate the frequency of allele $A$ in the gene pool.",
          response: { type: "numeric", parts: [{ label: "Frequency of allele $A$", answer: 0.65 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$." },
            ],
            steps: [
              { reasoning: "Count all copies of allele $A$: two in each $AA$ and one in each $Aa$.", working: "2(320) + 400", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total number of gene copies, $2N = 1600$.", working: "1040 \\div 1600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.65$",
            commonErrors: ["Counting each heterozygote as contributing 2 copies of $A$.", "Dividing by $N$ instead of $2N$."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In a population of 1 000 individuals, the frequency of allele $a$ is found to be $q = 0.4$. Without assuming Hardy-Weinberg equilibrium, state what additional information would be needed to calculate the frequency of heterozygotes, and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Allele vs genotype frequency", statement: "Allele frequencies alone do not determine genotype frequencies unless random mating (Hardy-Weinberg) is assumed." },
            ],
            steps: [
              { reasoning: "Knowing $q = 0.4$ gives $p = 0.6$ but not how alleles are distributed among individuals.", marks: 1, markCode: "R" },
              { reasoning: "The population could contain many heterozygotes or few; allele frequency does not distinguish these.", marks: 1, markCode: "R" },
              { reasoning: "One needs either direct genotype counts or a statement that random mating/HWE holds.", marks: 1, markCode: "M" },
              { reasoning: "Only then can $2pq$ be used for the heterozygote frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genotype counts or the assumption of random mating are needed; allele frequencies alone do not fix genotype frequencies.",
            commonErrors: ["Assuming $2pq$ always gives the heterozygote frequency without checking HWE conditions."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A population of 2 000 deer contains three genotypes at a locus: 800 are $AA$, 800 are $Aa$ and 400 are $aa$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of allele $A$ in the gene pool.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of allele $a$.", marks: 2 },
            { label: "c", prompt: "State the genotype frequency of heterozygotes.", marks: 2 },
            { label: "d", prompt: "Verify that your allele frequencies are consistent with $p + q = 1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$ and $q = \\frac{2n_{aa} + n_{Aa}}{2N}$." },
            ],
            steps: [
              { part: "a", reasoning: "Count copies of $A$: $2 \\times 800 + 800 = 2400$.", working: "2400 \\div 4000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "p = 0.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Count copies of $a$: $2 \\times 400 + 800 = 1600$.", working: "1600 \\div 4000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "q = 0.4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heterozygote frequency $= n_{Aa} / N$.", working: "800 \\div 2000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the two allele frequencies.", working: "0.6 + 0.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "They sum to 1, confirming consistency.", working: "1.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $p = 0.6$. (b) $q = 0.4$. (c) $0.4$. (d) $p + q = 1$ confirmed.",
            commonErrors: ["Using $N = 2000$ as denominator instead of $2N = 4000$ for allele counts.", "Counting heterozygotes as contributing 2 copies of each allele to the numerator for both $p$ and $q$ — each $Aa$ contributes 1 copy of each."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The gene pool of a population is best defined as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the chromosomes contained in one cell" },
              { id: "b", text: "only the alleles that produce visible phenotypes" },
              { id: "c", text: "the total set of alleles at all loci present in the gametes of all individuals in the population" },
              { id: "d", text: "all the genes carried by a single individual" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gene pool", statement: "The complete set of alleles at every locus across all individuals in a population." },
            ],
            steps: [
              { reasoning: "The gene pool is a population-level concept covering all alleles at all loci.", marks: 1, markCode: "M" },
              { reasoning: "It is not limited to one individual or one locus, and includes alleles regardless of phenotype.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The total set of alleles in the population's gametes",
            commonErrors: ["Defining the gene pool as the genes of one organism — it belongs to the whole population."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population, the frequency of allele $A$ is $p = 0.8$. What is the frequency of allele $a$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.64$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$0.2$" },
              { id: "d", text: "$0.8$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequencies sum to 1", statement: "$p + q = 1$." },
            ],
            steps: [
              { reasoning: "The two allele frequencies must sum to 1.", working: "1 - 0.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0.2$",
            commonErrors: ["Answering 0.8 — the frequencies of the two alleles must sum to 1."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When calculating the frequency of allele $A$ in a population, the numerator of $p = \\frac{2n_{AA} + n_{Aa}}{2N}$ counts",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "one copy of $A$ from every individual regardless of genotype" },
              { id: "b", text: "the number of $AA$ individuals only" },
              { id: "c", text: "two copies of $A$ from each $Aa$ individual" },
              { id: "d", text: "two copies of $A$ from each $AA$ individual and one copy from each $Aa$ individual" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$ counts every copy of allele $A$ in the population." },
            ],
            steps: [
              { reasoning: "Each $AA$ individual contributes two copies of $A$; each $Aa$ contributes exactly one.", marks: 1, markCode: "M" },
              { reasoning: "Heterozygotes must not be counted as two copies of $A$ — they also carry one $a$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $2n_{AA} + n_{Aa}$",
            commonErrors: ["Counting heterozygotes as contributing two copies of each allele."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population of $N$ individuals, the genotype frequency of heterozygotes $Aa$ is given by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2n_{Aa}}{N}$" },
              { id: "b", text: "$\\frac{n_{Aa}}{N}$" },
              { id: "c", text: "$\\frac{n_{Aa}}{2N}$" },
              { id: "d", text: "$\\frac{n_{AA}}{N}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Genotype frequency", statement: "Genotype frequencies are the proportion of individuals with that genotype: $n/N$." },
            ],
            steps: [
              { reasoning: "A genotype frequency counts individuals, not gene copies.", marks: 1, markCode: "M" },
              { reasoning: "So the heterozygote frequency is the number of $Aa$ individuals divided by the total number of individuals $N$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{n_{Aa}}{N}$",
            commonErrors: ["Using $2N$ as the denominator — that is for allele frequencies, not genotype frequencies."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A population of 400 plants contains 160 $AA$, 160 $Aa$ and 80 $aa$ individuals. Calculate the frequency of allele $A$ in the gene pool.",
          response: { type: "numeric", parts: [{ label: "Frequency of allele $A$", answer: 0.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$." },
            ],
            steps: [
              { reasoning: "Count all copies of allele $A$: two in each $AA$ and one in each $Aa$.", working: "2(160) + 160 = 480", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total number of gene copies, $2N = 800$.", working: "480 \\div 800", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Dividing by $N = 400$ instead of $2N = 800$.", "Counting each $Aa$ as two copies of $A$."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A population of 600 individuals contains 330 $AA$, 180 $Aa$ and 90 $aa$ individuals. Calculate the frequency of allele $a$ in the gene pool.",
          response: { type: "numeric", parts: [{ label: "Frequency of allele $a$", answer: 0.3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$q = \\frac{2n_{aa} + n_{Aa}}{2N}$." },
            ],
            steps: [
              { reasoning: "Count all copies of allele $a$: two in each $aa$ and one in each $Aa$.", working: "2(90) + 180 = 360", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total number of gene copies, $2N = 1200$.", working: "360 \\div 1200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.3$",
            commonErrors: ["Using the $AA$ count in the numerator for allele $a$."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A population of 1 000 individuals contains 250 $AA$, 500 $Aa$ and 250 $aa$ individuals. Calculate the frequency of allele $A$ and the genotype frequency of heterozygotes.",
          response: { type: "numeric", parts: [{ label: "Frequency of allele $A$", answer: 0.5 }, { label: "Heterozygote genotype frequency", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$." },
              { kind: "formula", name: "Genotype frequency", statement: "Heterozygote frequency $= n_{Aa}/N$." },
            ],
            steps: [
              { reasoning: "Count copies of allele $A$: $2(250) + 500 = 1000$.", working: "2(250) + 500", marks: 1, markCode: "M" },
              { reasoning: "Divide by $2N = 2000$ and evaluate.", working: "1000 \\div 2000 = 0.5", marks: 1, markCode: "A" },
              { reasoning: "Heterozygote genotype frequency $= n_{Aa}/N$.", working: "500 \\div 1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p = 0.5$; heterozygote frequency $= 0.5$",
            commonErrors: ["Using $2N$ as the denominator for the genotype frequency — genotype frequencies use $N$."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a population of 100 individuals, 40 are $AA$, 40 are $Aa$ and 20 are $aa$. Calculate the frequency of allele $A$ in the gene pool.",
          response: { type: "numeric", parts: [{ label: "Frequency of allele $A$", answer: 0.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$." },
            ],
            steps: [
              { reasoning: "Count copies of allele $A$: two in each $AA$ and one in each $Aa$.", working: "2(40) + 40 = 120", marks: 1, markCode: "M" },
              { reasoning: "Divide by $2N = 200$.", working: "120 \\div 200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Dividing by $N = 100$ instead of $2N = 200$."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why heterozygous individuals must be counted carefully when calculating allele frequencies in a population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gene copies", statement: "Every individual carries two copies of each gene, and a heterozygote carries one copy of each allele." },
            ],
            steps: [
              { reasoning: "Allele frequencies are calculated from gene copies, not individuals.", marks: 1, markCode: "M" },
              { reasoning: "An $AA$ individual contributes two copies of $A$ and zero of $a$.", marks: 1, markCode: "M" },
              { reasoning: "An $aa$ individual contributes zero copies of $A$ and two of $a$.", marks: 1, markCode: "M" },
              { reasoning: "An $Aa$ individual contributes exactly one copy of each allele — not two of either.", marks: 1, markCode: "M" },
              { reasoning: "Miscounting heterozygotes distorts both $p$ and $q$ and makes $p + q \\neq 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heterozygotes carry one copy of each allele, so each contributes once to both allele counts; miscounting them corrupts the frequencies.",
            commonErrors: ["Counting a heterozygote as two copies of both alleles."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Distinguish between allele frequency and genotype frequency, and explain why knowing the allele frequency of a gene does not necessarily determine the genotype frequencies in a population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Allele vs genotype frequency", statement: "Allele frequency is the proportion of gene copies carrying an allele; genotype frequency is the proportion of individuals with a genotype." },
            ],
            steps: [
              { reasoning: "Allele frequency counts gene copies in the whole gene pool.", marks: 1, markCode: "M" },
              { reasoning: "Genotype frequency counts individuals carrying a particular genotype, $n/N$.", marks: 1, markCode: "M" },
              { reasoning: "Allele frequency uses a denominator of $2N$ (two gene copies per individual); genotype frequency uses $N$.", marks: 1, markCode: "A" },
              { reasoning: "The same allele frequency can arise from many different genotype distributions.", marks: 1, markCode: "M" },
              { reasoning: "For example, $p$ and $q$ alone do not reveal how many heterozygotes exist without assuming random mating (Hardy-Weinberg).", marks: 1, markCode: "A" },
              { reasoning: "Only with the additional assumption of random union of gametes can $2pq$ predict the heterozygote frequency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Allele frequency is per gene copy; genotype frequency is per individual. Allele frequencies alone do not fix genotype frequencies unless random mating is assumed.",
            commonErrors: ["Using $2pq$ unconditionally without checking Hardy-Weinberg conditions."],
          },
        },
        {
          id: "biohl-u3-gene-pool-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A population of 2 000 insects contains three genotypes at a locus: 500 are $AA$, 1 000 are $Aa$ and 500 are $aa$.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of allele $A$ in the gene pool.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of allele $a$.", marks: 2 },
            { label: "c", prompt: "State the genotype frequency of heterozygotes.", marks: 2 },
            { label: "d", prompt: "Explain why allele frequencies are tracked across generations to study evolution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$p = \\frac{2n_{AA} + n_{Aa}}{2N}$ and $q = \\frac{2n_{aa} + n_{Aa}}{2N}$." },
              { kind: "formula", name: "Genotype frequency", statement: "Heterozygote frequency $= n_{Aa}/N$." },
            ],
            steps: [
              { part: "a", reasoning: "Count copies of $A$: $2(500) + 1000 = 2000$.", working: "2000 \\div 4000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "p = 0.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Count copies of $a$: $2(500) + 1000 = 2000$.", working: "2000 \\div 4000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "q = 0.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heterozygote frequency $= n_{Aa}/N$.", working: "1000 \\div 2000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evolutionary forces such as selection, drift and migration act by changing allele frequencies.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Tracking frequencies across generations therefore reveals whether microevolution is occurring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $p = 0.5$. (b) $q = 0.5$. (c) $0.5$. (d) Changes in allele frequencies measure microevolution.",
            commonErrors: ["Using $N = 2000$ instead of $2N = 4000$ for allele counts."],
          },
        },
      ],
    },
    {
      id: "biohl-u3-hardy-weinberg",
      title: "Hardy-Weinberg equilibrium",
      skill: "Apply the Hardy-Weinberg equation $p^2 + 2pq + q^2 = 1$ to predict genotype frequencies and identify deviations indicating evolution.",
      lesson: {
        sections: [
          {
            heading: "The equilibrium",
            body: "Under Hardy-Weinberg equilibrium, allele frequencies $p$ and $q$ stay constant and genotype frequencies are $p^2$ ($AA$), $2pq$ ($Aa$) and $q^2$ ($aa$). Equilibrium requires: no mutation, random mating, very large population size, no natural selection, no gene flow and no genetic drift. If observed genotype frequencies match these predictions across generations, the population is not evolving at that locus.",
          },
          {
            heading: "Using the equation",
            body: "From any one genotype frequency you can recover $p$ and $q$: e.g. if $q^2 = 0.16$ then $q = 0.4$ and $p = 0.6$, giving carrier frequency $2pq = 0.48$. Deviations from the expected ratios signal one of the evolutionary forces at work — for example an excess of homozygotes may indicate inbreeding (non-random mating).",
          },
          {
            heading: "Conditions and departures from equilibrium",
            body: "Hardy-Weinberg equilibrium is an idealised benchmark. Real populations depart from it through mutation, non-random mating, small population size (genetic drift), natural selection and gene flow. A useful application is detecting change: if genotype frequencies shift away from $p^2$, $2pq$, $q^2$ over generations, one or more of these forces is acting. Equilibrium is also assumed for a single locus with two alleles and random union of gametes.",
          },
        ],
        keyFormulas: [
          { name: "Hardy-Weinberg", statement: "$p^2 + 2pq + q^2 = 1$ with $p + q = 1$." },
          { name: "Genotype frequencies", statement: "$AA = p^2$, $Aa = 2pq$, $aa = q^2$." },
          { name: "Carrier frequency", statement: "For a recessive condition, carriers $= 2pq$ and affected $= q^2$." },
        ],
        workedExample: {
          problem: "In a population in Hardy-Weinberg equilibrium, the frequency of the recessive homozygote $aa$ is 0.09. Calculate the frequency of heterozygous carriers.",
          solution: "$q^2 = 0.09 \\Rightarrow q = 0.3$, so $p = 0.7$. Carriers $= 2pq = 2 \\times 0.7 \\times 0.3 = 0.42$.",
        },
      },
      questions: [
        {
          id: "biohl-u3-hw-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a population in Hardy-Weinberg equilibrium with $p = 0.6$ and $q = 0.4$, what is the expected frequency of heterozygotes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.48$" },
              { id: "b", text: "$0.24$" },
              { id: "c", text: "$0.16$" },
              { id: "d", text: "$0.36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "Heterozygote frequency $= 2pq$." },
            ],
            steps: [
              { reasoning: "Compute $2pq$ with $p=0.6$, $q=0.4$.", working: "2 \\times 0.6 \\times 0.4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.48$",
            commonErrors: ["Using $pq$ instead of $2pq$, giving 0.24."],
          },
        },
        {
          id: "biohl-u3-hw-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a population in Hardy-Weinberg equilibrium, the frequency of the recessive homozygote is $q^2 = 0.16$. Calculate the frequency of heterozygous carriers of the recessive allele.",
          response: { type: "numeric", parts: [{ label: "Carrier frequency", answer: 0.48 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$q = \\sqrt{q^2}$, $p = 1 - q$, carriers $= 2pq$." },
            ],
            steps: [
              { reasoning: "Take the square root to find $q$.", working: "q = \\sqrt{0.16} = 0.4", marks: 1, markCode: "M" },
              { reasoning: "Find $p$.", working: "p = 1 - 0.4 = 0.6", marks: 1, markCode: "M" },
              { reasoning: "Compute $2pq$.", working: "2 \\times 0.6 \\times 0.4 = 0.48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.48$",
            commonErrors: ["Using $q = 0.16$ directly instead of $\\sqrt{0.16}$."],
          },
        },
        {
          id: "biohl-u3-hw-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A population shows genotype frequencies of $AA = 0.49$, $Aa = 0.42$ and $aa = 0.09$ in one generation. Test whether these frequencies are consistent with Hardy-Weinberg equilibrium for allele frequencies $p = 0.7$, $q = 0.3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg predictions", statement: "Expected: $AA = p^2 = 0.49$, $Aa = 2pq = 0.42$, $aa = q^2 = 0.09$." },
            ],
            steps: [
              { reasoning: "Compute the expected genotype frequencies from $p = 0.7$, $q = 0.3$.", working: "p^2 = 0.49,\\ 2pq = 0.42,\\ q^2 = 0.09", marks: 1, markCode: "M" },
              { reasoning: "Compare each expected value with the observed frequency.", marks: 1, markCode: "A" },
              { reasoning: "All three match exactly.", marks: 1, markCode: "A" },
              { reasoning: "The population is consistent with Hardy-Weinberg equilibrium at this locus.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Yes — observed frequencies match $p^2$, $2pq$, $q^2$ exactly, so the population is in equilibrium.",
            commonErrors: ["Comparing allele frequencies rather than genotype frequencies to the predictions."],
          },
        },
        {
          id: "biohl-u3-hw-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A recessive genetic disease affects 1 in 10 000 individuals in a large population that is assumed to be in Hardy-Weinberg equilibrium.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the disease allele $a$ (i.e. $q$).", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of the dominant allele $A$ (i.e. $p$).", marks: 2 },
            { label: "c", prompt: "Calculate the frequency of heterozygous carriers in the population.", marks: 2 },
            { label: "d", prompt: "Explain why the carrier frequency is much higher than the disease frequency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$q^2 = $ disease frequency; carriers $= 2pq$." },
            ],
            steps: [
              { part: "a", reasoning: "Disease frequency $= q^2 = 1/10\\,000 = 0.0001$.", working: "q = \\sqrt{0.0001}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "q = 0.01", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract from 1.", working: "p = 1 - 0.01", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "p = 0.99", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Carriers $= 2pq$.", working: "2 \\times 0.99 \\times 0.01", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.0198 \\approx 2\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Heterozygotes carry one copy of $a$ but are phenotypically normal.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Because $2pq$ is roughly twice $q$ for small $q$, carriers vastly outnumber affected individuals.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $q = 0.01$. (b) $p = 0.99$. (c) $0.0198$ ($\\approx 2\\%$). (d) Carriers are phenotypically normal and $2pq \\gg q^2$ for rare alleles.",
            commonErrors: ["In (a), answering $q = 0.0001$ — that is $q^2$, not $q$.", "In (d), claiming carriers show the disease."],
            examinerNote: "Accept $0.0198$ or $1.98\\%$ for part (c).",
          },
        },
        {
          id: "biohl-u3-hw-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a condition required for a population to be in Hardy-Weinberg equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random mating" },
              { id: "b", text: "A high mutation rate at the locus" },
              { id: "c", text: "A very small population size" },
              { id: "d", text: "Strong natural selection against one genotype" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HWE conditions", statement: "Equilibrium requires no mutation, random mating, very large population, no selection, no gene flow and no drift." },
            ],
            steps: [
              { reasoning: "Random mating ensures gametes unite by chance so genotype frequencies follow $p^2$, $2pq$, $q^2$.", marks: 1, markCode: "M" },
              { reasoning: "Small size, selection, mutation and gene flow are all forces that drive the population away from equilibrium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Random mating",
            commonErrors: ["Choosing small population size — drift in small populations disrupts equilibrium."],
          },
        },
        {
          id: "biohl-u3-hw-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Under Hardy-Weinberg equilibrium, the term $p^2$ represents the frequency of",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the allele $A$ itself" },
              { id: "b", text: "the heterozygous genotype $Aa$" },
              { id: "c", text: "the homozygous dominant genotype $AA$" },
              { id: "d", text: "the homozygous recessive genotype $aa$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$AA = p^2$, $Aa = 2pq$, $aa = q^2$." },
            ],
            steps: [
              { reasoning: "Squaring $p$ gives the probability of two $A$ alleles uniting — the $AA$ genotype frequency.", marks: 1, markCode: "M" },
              { reasoning: "Heterozygotes are $2pq$ and homozygous recessives are $q^2$; the allele frequency of $A$ is $p$ itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Homozygous dominant $AA$",
            commonErrors: ["Confusing $p^2$ with $2pq$ — the heterozygote frequency has the factor of 2."],
          },
        },
        {
          id: "biohl-u3-hw-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the frequency of the homozygous recessive genotype is $q^2 = 0.04$ in a population in Hardy-Weinberg equilibrium, what is the value of $q$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.04$" },
              { id: "b", text: "$0.2$" },
              { id: "c", text: "$0.4$" },
              { id: "d", text: "$0.16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$q = \\sqrt{q^2}$." },
            ],
            steps: [
              { reasoning: "Take the square root of the recessive homozygote frequency.", working: "q = \\sqrt{0.04}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "q = 0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.2$",
            commonErrors: ["Answering 0.04 — that is $q^2$, not $q$."],
          },
        },
        {
          id: "biohl-u3-hw-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A population shows a higher frequency of homozygotes than predicted by Hardy-Weinberg equilibrium. This most likely indicates",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "complete absence of mutation" },
              { id: "b", text: "non-random mating, such as inbreeding or self-fertilisation" },
              { id: "c", text: "perfectly random mating" },
              { id: "d", text: "an infinitely large population size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Departure from equilibrium", statement: "Excess homozygotes signal non-random mating such as inbreeding." },
            ],
            steps: [
              { reasoning: "Random mating produces heterozygotes at frequency $2pq$; related individuals mating preferentially produce more homozygotes.", marks: 1, markCode: "M" },
              { reasoning: "The other options describe conditions that maintain, rather than disrupt, equilibrium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Non-random mating such as inbreeding",
            commonErrors: ["Attributing the deviation to random mating — random mating is a condition for equilibrium."],
          },
        },
        {
          id: "biohl-u3-hw-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a population in Hardy-Weinberg equilibrium, the frequency of allele $A$ is $p = 0.8$ and the frequency of allele $a$ is $q = 0.2$. Calculate the expected frequency of the homozygous dominant genotype $AA$.",
          response: { type: "numeric", parts: [{ label: "Frequency of $AA$", answer: 0.64 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$AA = p^2$." },
            ],
            steps: [
              { reasoning: "The $AA$ genotype frequency is $p^2$.", working: "0.8^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the square.", working: "0.64", marks: 1, markCode: "M" },
              { reasoning: "State the genotype frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.64$",
            commonErrors: ["Answering 0.8 — that is the allele frequency, not the genotype frequency $p^2$."],
          },
        },
        {
          id: "biohl-u3-hw-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A recessive genetic disease affects 1 in 2 500 individuals in a large population assumed to be in Hardy-Weinberg equilibrium. Calculate the frequency of the disease allele $q$ and the frequency of heterozygous carriers.",
          response: { type: "numeric", parts: [{ label: "Allele frequency $q$", answer: 0.02 }, { label: "Carrier frequency", answer: 0.0392 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$q^2 = $ disease frequency; carriers $= 2pq$ with $p = 1 - q$." },
            ],
            steps: [
              { reasoning: "Disease frequency $= q^2 = 1/2500 = 0.0004$.", working: "q = \\sqrt{0.0004}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $q$.", working: "q = 0.02", marks: 1, markCode: "A" },
              { reasoning: "Find $p$ and compute $2pq$.", working: "p = 0.98;\\ 2 \\times 0.98 \\times 0.02", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the carrier frequency.", working: "0.0392", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$q = 0.02$; carriers $= 0.0392$ ($\\approx 3.9\\%$)",
            commonErrors: ["Answering $q = 0.0004$ — that is $q^2$, not $q$."],
            examinerNote: "Accept $0.0392$ or $3.92\\%$ for the carrier frequency.",
          },
        },
        {
          id: "biohl-u3-hw-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "In a population in Hardy-Weinberg equilibrium, the frequency of the homozygous dominant genotype is $p^2 = 0.36$. Calculate the frequency of the homozygous recessive genotype $aa$.",
          response: { type: "numeric", parts: [{ label: "Frequency of $aa$", answer: 0.16 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$p = \\sqrt{p^2}$, $q = 1 - p$, $aa = q^2$." },
            ],
            steps: [
              { reasoning: "Find $p$ from $p^2 = 0.36$.", working: "p = \\sqrt{0.36} = 0.6", marks: 1, markCode: "M" },
              { reasoning: "Find $q$.", working: "q = 1 - 0.6 = 0.4", marks: 1, markCode: "M" },
              { reasoning: "Compute $aa = q^2$.", working: "0.4^2 = 0.16", marks: 1, markCode: "M" },
              { reasoning: "State the frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.16$",
            commonErrors: ["Using $q = 0.36$ instead of deriving it from $p$ — always check $p + q = 1$."],
          },
        },
        {
          id: "biohl-u3-hw-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A population of 2 000 individuals is in Hardy-Weinberg equilibrium with allele frequency $p = 0.7$. Calculate the expected number of individuals with the homozygous recessive genotype.",
          response: { type: "numeric", parts: [{ label: "Expected number of $aa$ individuals", answer: 180 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$aa = q^2$; number of individuals $=$ frequency $\\times N$." },
            ],
            steps: [
              { reasoning: "Find $q$.", working: "q = 1 - 0.7 = 0.3", marks: 1, markCode: "M" },
              { reasoning: "Compute the $aa$ frequency.", working: "q^2 = 0.3^2 = 0.09", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the population size.", working: "0.09 \\times 2000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "180", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$180$ individuals",
            commonErrors: ["Multiplying $q$ rather than $q^2$ by the population size."],
          },
        },
        {
          id: "biohl-u3-hw-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "State the five conditions that must be met for a population to remain in Hardy-Weinberg equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "HWE conditions", statement: "No mutation, random mating, very large population size, no natural selection, no gene flow." },
            ],
            steps: [
              { reasoning: "No mutation at the locus, so allele frequencies do not change.", marks: 1, markCode: "M" },
              { reasoning: "Random mating, so union of gametes is by chance.", marks: 1, markCode: "M" },
              { reasoning: "Very large population size, so genetic drift is negligible.", marks: 1, markCode: "M" },
              { reasoning: "No natural selection acting on the genotypes.", marks: 1, markCode: "M" },
              { reasoning: "No gene flow (migration) into or out of the population.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "No mutation, random mating, very large population, no natural selection, no gene flow.",
            commonErrors: ["Omitting gene flow or listing a force that disrupts equilibrium as a condition."],
          },
        },
        {
          id: "biohl-u3-hw-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how natural selection causes a population to depart from Hardy-Weinberg equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selection and equilibrium", statement: "Hardy-Weinberg equilibrium assumes no differential survival or reproduction among genotypes." },
            ],
            steps: [
              { reasoning: "In equilibrium all genotypes have equal fitness — survival and reproductive success do not depend on genotype.", marks: 1, markCode: "M" },
              { reasoning: "Natural selection makes some genotypes more fit than others.", marks: 1, markCode: "M" },
              { reasoning: "Fitter genotypes leave more offspring, so their alleles increase in frequency.", marks: 1, markCode: "M" },
              { reasoning: "Less fit genotypes and their alleles decrease in frequency.", marks: 1, markCode: "M" },
              { reasoning: "Because allele frequencies $p$ and $q$ change, the genotype frequencies $p^2$, $2pq$, $q^2$ no longer match the previous generation.", marks: 1, markCode: "A" },
              { reasoning: "This change in allele frequencies is microevolution — evidence the population is not in equilibrium.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Selection changes the relative fitness of genotypes, shifting allele frequencies away from the equilibrium values.",
            commonErrors: ["Claiming selection changes genotype frequencies without changing allele frequencies — allele frequencies necessarily change."],
          },
        },
        {
          id: "biohl-u3-hw-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A recessive disorder affects 1 in 4 000 individuals in a large population that is assumed to be in Hardy-Weinberg equilibrium.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the disease allele $q$.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of the dominant allele $p$.", marks: 2 },
            { label: "c", prompt: "Calculate the frequency of heterozygous carriers.", marks: 2 },
            { label: "d", prompt: "Calculate the expected number of carriers in a population of 1 000 000 people.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$q^2 = $ disease frequency; carriers $= 2pq$; number of carriers $=$ frequency $\\times N$." },
            ],
            steps: [
              { part: "a", reasoning: "Disease frequency $= q^2 = 1/4000 = 0.00025$.", working: "q = \\sqrt{0.00025}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "q = 0.015", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract from 1.", working: "p = 1 - 0.015 = 0.985", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Carriers $= 2pq$.", working: "2 \\times 0.985 \\times 0.015 = 0.02955", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.02955 \\approx 2.96\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply carrier frequency by population size.", working: "0.02955 \\times 1\\,000\\,000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "29\\,550", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $q = 0.015$. (b) $p = 0.985$. (c) $0.02955$ ($\\approx 2.96\\%$). (d) $29\\,550$ carriers.",
            commonErrors: ["In (a), answering $q = 0.00025$ — that is $q^2$, not $q$.", "In (d), using the disease frequency instead of the carrier frequency."],
            examinerNote: "Accept $29\\,550$ or approximately $29\\,600$ for part (d).",
          },
        },
      ],
    },
  ],
};

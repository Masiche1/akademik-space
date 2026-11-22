import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "bio9-u4-lesson-4-2",
  code: "4-2",
  title: "Mechanisms of Change",
  goal: "I CAN explain adaptation, speciation, genetic drift and gene flow, use the Hardy-Weinberg equations to calculate allele and genotype frequencies, and explain how antibiotic resistance evolves.",
  standards: ["HS-LS4-4", "HS-LS4-5", "HS-LS3-3", "SEP: Using Mathematics and Computational Thinking", "CCC: Cause and Effect"],
  vocabulary: [
    { term: "Adaptation", definition: "A heritable trait that increases an individual's chance of survival and reproduction in a particular environment." },
    { term: "Speciation", definition: "The formation of new species when populations become reproductively isolated and diverge." },
    { term: "Genetic drift", definition: "A random change in allele frequencies from one generation to the next, strongest in small populations." },
    { term: "Gene flow", definition: "The movement of alleles between populations when individuals migrate and breed." },
    { term: "Allele frequency", definition: "The proportion of all copies of a gene in a population that are a particular allele." },
    { term: "Hardy-Weinberg equilibrium", definition: "A condition in which allele and genotype frequencies stay constant from generation to generation because no evolutionary forces act." },
    { term: "Antibiotic resistance", definition: "The ability of bacteria to survive an antibiotic, caused by heritable mutations that are selected for when the antibiotic is used." },
  ],
  concepts: [
    {
      id: "bio9-u4-speciation-drift-flow",
      title: "Adaptation, speciation, drift and gene flow",
      skill: "Explain how adaptation, reproductive isolation, genetic drift and gene flow change populations and form new species.",
      lesson: {
        sections: [
          {
            heading: "Adaptation and speciation",
            body: "An **adaptation** is a heritable trait that has been favored by natural selection because it improves survival or reproduction in a given environment. Adaptations can be structural (a thick coat), behavioral (migration) or physiological (venom).\n\nA **species** is often defined as a group of organisms that can interbreed and produce fertile offspring. **Speciation** happens when populations become **reproductively isolated**:\n\n1. A population is split by a barrier (a mountain range, a river, an island). This is **geographic isolation**, and the process is **allopatric speciation**.\n2. Gene flow between the groups stops. Different environments favor different traits, and different mutations occur in each group.\n3. Over many generations the groups diverge so much that they can no longer interbreed successfully. Differences in mating time, courtship, or chromosomes keep them separate even if the barrier disappears.",
          },
          {
            heading: "Genetic drift",
            body: "**Genetic drift** is a change in allele frequencies caused by **chance** events, not by fitness. Drift is much stronger in **small** populations because random sampling of alleles has a bigger effect.\n\n- **Bottleneck effect**: a disaster sharply reduces a population. The survivors' alleles may not represent the original population, and some alleles can be lost.\n- **Founder effect**: a few individuals start a new population, carrying only a sample of the original alleles.\n\nDrift can make a harmful allele common or remove a useful one, and it reduces genetic variation.",
          },
          {
            heading: "Gene flow",
            body: "**Gene flow** is the movement of alleles between populations through migration and breeding. It makes populations **more similar** and adds new alleles to a population. Barriers that stop gene flow allow populations to diverge. Other sources of change are mutation, natural selection and non-random mating.",
          },
        ],
        keyFormulas: [
          { name: "Allele frequency", statement: "$\\dfrac{\\text{copies of the allele}}{\\text{total copies of the gene}}$, where each diploid individual has 2 copies" },
          { name: "Drift", statement: "Random change in allele frequency; strongest in small populations" },
          { name: "Gene flow", statement: "Migration and breeding moves alleles between populations and reduces differences" },
        ],
        workedExample: {
          problem: "A population of 50 diploid lizards has 40 copies of allele $R$ out of 100 gene copies. A storm leaves 5 survivors with 6 copies of $R$ out of 10 gene copies. Calculate the allele frequency before and after, and name the effect.",
          solution: "Before: $\\dfrac{40}{100}=0.40$. After: $\\dfrac{6}{10}=0.60$. The frequency changed by chance because the population shrank suddenly, which is the bottleneck effect (a form of genetic drift).",
        },
      },
      questions: [
        {
          id: "bio9-u4-speciation-drift-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A river changes course and splits a squirrel population into two groups that can no longer meet. Which term describes the main cause of the groups' later divergence into two species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individuals choosing to change their traits" },
              { id: "b", text: "Acquired traits being inherited" },
              { id: "c", text: "Geographic isolation stopping gene flow" },
              { id: "d", text: "Gene flow increasing between the groups" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Allopatric speciation", statement: "A physical barrier stops gene flow, so separated populations diverge." },
            ],
            steps: [
              { reasoning: "The river is a physical barrier. With no gene flow, mutations and selection act separately on each group, and they diverge.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Geographic isolation stopping gene flow.",
            commonErrors: ["Choosing (d): gene flow would keep the groups similar, not drive them apart."],
            examinerNote: "B1 for geographic isolation / no gene flow.",
          },
        },
        {
          id: "bio9-u4-speciation-drift-flow-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "A small population of 10 diploid snails has 6 copies of allele $b$ among its 20 gene copies. A flood kills most of the snails. The 4 survivors carry 1 copy of allele $b$ among their 8 gene copies.\n\nCalculate the frequency of allele $b$ before and after the flood.",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency of b before", answer: 0.3 },
              { label: "Frequency of b after", answer: 0.125, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequency", statement: "$\\dfrac{\\text{copies of the allele}}{\\text{total copies of the gene}}$" },
            ],
            steps: [
              { reasoning: "Divide copies of $b$ by total gene copies before the flood.", working: "\\frac{6}{20}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.3", marks: 1, markCode: "A" },
              { reasoning: "Divide copies of $b$ by total gene copies after the flood.", working: "\\frac{1}{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The frequency changed by chance (a bottleneck).", working: "0.125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Before: 0.3. After: 0.125.",
            commonErrors: ["Dividing by the number of snails (10 and 4) instead of the number of gene copies (20 and 8).", "Counting each snail as one allele copy."],
            examinerNote: "M1 6/20. A1 0.3. M1 1/8. A1 0.125 (allow 0.13 or 12.5%).",
          },
        },
        {
          id: "bio9-u4-speciation-drift-flow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two populations of the same plant species live on opposite sides of a mountain range. Pollen is rarely carried across the mountains.\n\nExplain why genetic drift has a greater effect on a small population than on a large population, and describe how reduced gene flow could eventually lead to speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Drift and population size", statement: "Chance events change allele frequencies more in small populations." },
              { kind: "principle", name: "Speciation", statement: "Without gene flow, populations accumulate different alleles and become reproductively isolated." },
            ],
            steps: [
              { reasoning: "In a small population, only a few individuals pass on alleles, so chance can greatly change allele frequencies; in a large population, chance effects average out.", marks: 1, markCode: "B" },
              { reasoning: "Without gene flow, each population gets no new alleles from the other, so they stop sharing alleles.", marks: 1, markCode: "B" },
              { reasoning: "Different mutations, drift and natural selection in different environments make the populations differ over generations.", marks: 1, markCode: "B" },
              { reasoning: "Eventually the differences prevent successful interbreeding (reproductive isolation), so they are separate species.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Chance has a bigger effect when few individuals reproduce; with no gene flow, mutation, drift and selection make populations diverge until they cannot interbreed.",
            commonErrors: ["Saying drift is caused by natural selection or fitness.", "Saying gene flow causes speciation."],
            examinerNote: "B1 small population, chance effect larger. B1 no / little gene flow. B1 independent changes by mutation / selection / drift. R1 reproductive isolation so cannot produce fertile offspring.",
          },
        },
        {
          id: "bio9-u4-speciation-drift-flow-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A founding group of 6 birds flies to a remote island. On the mainland, 30% of the gene copies for feather color are the allele $Y$ (yellow). In the founding group, 2 of the 12 gene copies are $Y$. Over many generations the island birds and mainland birds also come to differ in song and in breeding season.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of $Y$ in the founding group.", marks: 2 },
            { label: "b", prompt: "Name the effect that explains why the founding group's frequency differs from the mainland and state why this happens.", marks: 2 },
            { label: "c", prompt: "Explain how the island and mainland birds could become separate species.", marks: 3 },
            { label: "d", prompt: "State what would happen to the allele frequencies of the two populations if many birds started to migrate regularly between the island and the mainland.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Founder effect", statement: "A small founding group carries only a sample of the original population's alleles." },
              { kind: "principle", name: "Speciation", statement: "Reproductive isolation allows populations to diverge into separate species." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the copies of $Y$ by the total gene copies.", working: "\\frac{2}{12}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate (to 2 significant figures).", working: "0.17", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The founder effect (a type of genetic drift).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The few founders carry only a random sample of the mainland alleles, so their frequencies differ by chance.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The ocean stops gene flow, so the populations evolve independently.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Mutation, drift and different selection pressures cause them to diverge, for example in song and breeding season.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "These differences prevent interbreeding even if they meet, so they become reproductively isolated species.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Gene flow would make allele frequencies in the two populations more similar.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 0.17 (b) Founder effect: a small sample of alleles by chance (c) No gene flow; independent evolution; reproductive isolation (d) The frequencies would become more similar.",
            commonErrors: ["Dividing by 6 birds instead of 12 gene copies, giving 0.33.", "Saying the birds chose to change color."],
            examinerNote: "(a) Accept 1/6 or 0.167. (b) Allow 'genetic drift' for the first mark only if a small sample is explained. (d) Allow 'gene flow reduces differences'.",
          },
        },
      ],
    },
    {
      id: "bio9-u4-hardy-weinberg",
      title: "Hardy-Weinberg and antibiotic resistance",
      skill: "Use $p + q = 1$ and $p^2 + 2pq + q^2 = 1$ to calculate allele and genotype frequencies, and explain how antibiotic resistance evolves.",
      lesson: {
        sections: [
          {
            heading: "The Hardy-Weinberg equations",
            body: "For a gene with two alleles, let $p$ be the frequency of the dominant allele and $q$ the frequency of the recessive allele.\n\n$$p+q=1$$\n\n$$p^2+2pq+q^2=1$$\n\nHere $p^2$ is the frequency of the homozygous dominant genotype, $2pq$ the heterozygous genotype and $q^2$ the homozygous recessive genotype. The equations describe a population **not evolving** (equilibrium). This requires: a very large population, random mating, no mutation, no migration (gene flow) and no natural selection. Real populations rarely meet all five, so a **change** in allele frequencies from one generation to the next shows that evolution is occurring.",
          },
          {
            heading: "Solving problems",
            body: "Start from what you can observe. Recessive individuals show the recessive phenotype, and they are the only ones whose genotype is known, so their frequency equals $q^2$.\n\n1. Find $q^2$ (the proportion showing the recessive trait).\n2. Take the square root to get $q$.\n3. Find $p=1-q$.\n4. Calculate $2pq$ for carriers, or $p^2$ for homozygous dominant.\n5. Multiply a frequency by the population size to get a number of individuals.\n\nGive frequencies as decimals between 0 and 1 (or as percents if asked).",
          },
          {
            heading: "Antibiotic resistance",
            body: "Bacteria reproduce quickly, and mutations sometimes produce an allele that makes a bacterium resistant to an antibiotic. This is natural selection:\n\n- Variation: a few bacteria in a large population carry a resistance allele.\n- Selection: the antibiotic kills the susceptible bacteria, but resistant ones survive.\n- Inheritance: the survivors reproduce, and bacteria can also pass resistance genes to others.\n- Result: the **resistance allele frequency rises** in the population.\n\nThe antibiotic does not cause the mutation. It only selects for resistant bacteria that were already present. Misuse, such as not finishing a course or using antibiotics for viral infections, increases selection pressure.",
          },
        ],
        keyFormulas: [
          { name: "Allele frequencies", statement: "$p+q=1$" },
          { name: "Genotype frequencies", statement: "$p^2+2pq+q^2=1$" },
          { name: "Recessive phenotype", statement: "Frequency of recessive phenotype $=q^2$, so $q=\\sqrt{q^2}$" },
        ],
        workedExample: {
          problem: "In a population at Hardy-Weinberg equilibrium, 9% of the flowers are white (recessive, $aa$). Find $q$, $p$, and the percent of flowers that are heterozygous.",
          solution: "$q^2=0.09$, so $q=\\sqrt{0.09}=0.3$. Then $p=1-0.3=0.7$. Heterozygous frequency $=2pq=2\\times0.7\\times0.3=0.42$, so 42% of the flowers are heterozygous. Check: $p^2=0.49$, and $0.49+0.42+0.09=1$.",
        },
      },
      questions: [
        {
          id: "bio9-u4-hardy-weinberg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a population at Hardy-Weinberg equilibrium, the frequency of the recessive allele $q$ is 0.3. What is the frequency of the dominant allele $p$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.49" },
              { id: "b", text: "0.09" },
              { id: "c", text: "0.7" },
              { id: "d", text: "0.3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Allele frequencies", statement: "$p+q=1$" },
            ],
            steps: [
              { reasoning: "Rearrange $p+q=1$: $p=1-0.3=0.7$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 0.7",
            commonErrors: ["Choosing 0.09, which is $q^2$.", "Choosing 0.49, which is $p^2$."],
            examinerNote: "B1 for 0.7.",
          },
        },
        {
          id: "bio9-u4-hardy-weinberg-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "In a population at Hardy-Weinberg equilibrium, 4% of individuals show a recessive trait ($q^2=0.04$).\n\nCalculate $q$, $p$ and the frequency of heterozygous carriers ($2pq$).",
          response: {
            type: "numeric",
            parts: [
              { label: "q", answer: 0.2 },
              { label: "p", answer: 0.8 },
              { label: "2pq", answer: 0.32 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$p+q=1$ and $p^2+2pq+q^2=1$" },
            ],
            steps: [
              { reasoning: "Take the square root of $q^2$ to find $q$.", working: "q=\\sqrt{0.04}=0.2", marks: 1, markCode: "M" },
              { reasoning: "Use $p+q=1$.", working: "p=1-0.2=0.8", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $2pq$.", working: "2pq=2\\times0.8\\times0.2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2pq=0.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$q=0.2$, $p=0.8$, $2pq=0.32$ (32% carriers)",
            commonErrors: ["Using 0.04 as $q$ instead of its square root.", "Forgetting the factor of 2 in $2pq$, giving 0.16."],
            examinerNote: "M1 square root of 0.04. A1 0.2 and 0.8. M1 2 x 0.8 x 0.2. A1 0.32. Allow ecf.",
          },
        },
        {
          id: "bio9-u4-hardy-weinberg-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A recessive genetic condition affects 1 in 2500 people in a population assumed to be at Hardy-Weinberg equilibrium.\n\nCalculate the frequency of the recessive allele $q$, the frequency of carriers ($2pq$), and the expected number of carriers in a town of 10 000 people.",
          response: {
            type: "numeric",
            parts: [
              { label: "q", answer: 0.02 },
              { label: "2pq", answer: 0.0392, tolerance: 0.0005 },
              { label: "Carriers in 10 000 people", answer: 392, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$q^2=\\dfrac{1}{2500}=0.0004$, $p=1-q$, carriers $=2pq$" },
            ],
            steps: [
              { reasoning: "Convert 1 in 2500 to $q^2$, then take the square root.", working: "q^2=\\frac{1}{2500}=0.0004,\\ q=0.02", marks: 1, markCode: "M" },
              { reasoning: "Find $p$.", working: "p=1-0.02=0.98", marks: 1, markCode: "A" },
              { reasoning: "Calculate the carrier frequency.", working: "2pq=2\\times0.98\\times0.02=0.0392", marks: 1, markCode: "M" },
              { reasoning: "Evaluate carrier frequency as a number in the town.", working: "0.0392\\times10\\,000=392", marks: 1, markCode: "M" },
              { reasoning: "State the final answers.", working: "q=0.02,\\ 2pq=0.0392,\\ 392\\text{ people}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$q=0.02$, $2pq=0.0392$ (about 3.9%), about 392 carriers.",
            commonErrors: ["Using $q=1/2500$ directly.", "Approximating $p\\approx1$ so that $2pq\\approx2q=0.04$, giving about 400 carriers (close, but not exact)."],
            examinerNote: "M1 for $\\sqrt{0.0004}$ (oe). A1 for 0.02 and 0.98. M1 2pq substitution. M1 multiplying by 10 000. A1 for all correct answers. Allow 0.039 and 390.",
          },
        },
        {
          id: "bio9-u4-hardy-weinberg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A survey of 200 plants found 98 with genotype $AA$, 84 with $Aa$ and 18 with $aa$. Allele $A$ is dominant.",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the recessive allele $a$ by counting alleles.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of $A$ and use the Hardy-Weinberg equation to calculate the expected number of heterozygous plants in 200 plants.", marks: 3 },
            { label: "c", prompt: "State **two** conditions required for a population to remain in Hardy-Weinberg equilibrium.", marks: 2 },
            { label: "d", prompt: "Bacteria in a patient include a few with a resistance allele. Explain why treating the patient with an antibiotic increases the frequency of this allele.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hardy-Weinberg", statement: "$p+q=1$ and $p^2+2pq+q^2=1$" },
              { kind: "principle", name: "Natural selection", statement: "An antibiotic selects for resistant bacteria, which survive and reproduce." },
            ],
            steps: [
              { part: "a", reasoning: "Total gene copies $=2\\times200=400$. Copies of $a$ $=84+2\\times18=120$.", working: "\\frac{84+36}{400}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "q=\\frac{120}{400}=0.3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $p=1-q$.", working: "p=1-0.3=0.7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Calculate $2pq$ and multiply by 200.", working: "2\\times0.7\\times0.3\\times200", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. This matches the observed 84, so the population is in equilibrium.", working: "0.42\\times200=84", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any two: very large population; random mating; no mutation; no migration or gene flow; no natural selection.", marks: 2, markCode: "B" },
              { part: "d", reasoning: "The antibiotic kills susceptible bacteria, but resistant bacteria survive (selection pressure).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The survivors reproduce and pass on the resistance allele, so its frequency increases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 0.3 (b) $p=0.7$; expected heterozygotes $=84$ (c) Any two of: large population, random mating, no mutation, no migration, no selection (d) The antibiotic kills susceptible bacteria; resistant survivors reproduce and pass on the allele.",
            commonErrors: ["In (a) counting 84 + 18 = 102 alleles, forgetting that $aa$ plants have two copies.", "In (d) saying the antibiotic causes the mutation or that bacteria become resistant because they need to."],
            examinerNote: "(a) 120/400 oe. (b) Allow ecf from (a). (c) B1 each; reject 'no evolution'. (d) Reject 'bacteria adapt / build up immunity'.",
          },
        },
      ],
    },
  ],
};

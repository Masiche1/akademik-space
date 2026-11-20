import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "s8-u3-lesson-3-1",
  code: "3-1",
  title: "Heredity",
  goal: "I CAN explain how genes, mutations and proteins affect traits, and use Punnett squares to predict the probability of traits in offspring from sexual and asexual reproduction.",
  standards: ["MS-LS3-1", "MS-LS3-2", "SEP: Developing and Using Models", "SEP: Constructing Explanations"],
  vocabulary: [
    { term: "Gene", definition: "A segment of DNA on a chromosome that carries the instructions for making a protein." },
    { term: "Mutation", definition: "A change in the DNA sequence of a gene or chromosome." },
    { term: "Allele", definition: "One of the different versions of a gene." },
    { term: "Genotype", definition: "The combination of alleles an organism has for a trait, such as Tt." },
    { term: "Phenotype", definition: "The observable trait that results from a genotype, such as tall or short." },
    { term: "Dominant allele", definition: "An allele whose trait shows when at least one copy is present." },
    { term: "Heterozygous", definition: "Having two different alleles for a gene, such as Tt." },
  ],
  concepts: [
    {
      id: "s8-u3-genes-mutations",
      title: "Genes, mutations and proteins",
      skill: "Explain how genes code for proteins and how a mutation can change a protein and a trait.",
      lesson: {
        sections: [
          {
            heading: "Genes code for proteins",
            body: "Your cells contain **chromosomes** made of **DNA**. A **gene** is a section of DNA that carries the instructions for making one protein. The DNA code is written in four bases, and every group of three bases codes for one amino acid. Amino acids join in order to build a protein.\n\nProteins do most of the work in a cell. Some are enzymes, some give structure, and some carry substances. The proteins an organism makes determine many of its traits, such as eye color or how well it digests milk sugar.",
          },
          {
            heading: "Mutations",
            body: "A **mutation** is a change in the DNA. It may swap one base for another, add a base, or remove a base. A mutation can have different effects:\n\n- **Harmful:** the protein changes shape and cannot do its job (sickle cell disease comes from one base change).\n- **Beneficial:** the new protein helps the organism survive, for example resistance to a disease.\n- **Neutral:** the protein does not change or the change does not matter.\n\nOnly mutations in **sex cells** (eggs and sperm) can be passed on to offspring. A mutation in a body cell, such as a skin cell, affects only that cell and its descendants.",
          },
        ],
        keyFormulas: [
          { name: "Gene", statement: "A section of DNA that codes for one protein" },
          { name: "Genetic code", statement: "3 bases code for 1 amino acid" },
          { name: "Mutation", statement: "A change in DNA that may change a protein and so a trait" },
        ],
        workedExample: {
          problem: "A section of a gene is 90 bases long. How many amino acids does it code for?",
          solution: "Three bases code for one amino acid, so the number of amino acids is $90 \\div 3 = 30$ amino acids.",
        },
      },
      questions: [
        {
          id: "s8-u3-genes-mutations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes a gene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A whole chromosome made of many proteins" },
              { id: "b", text: "A section of DNA that carries instructions for making a protein" },
              { id: "c", text: "A protein that controls the cell" },
              { id: "d", text: "A structure in the cytoplasm that stores food" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gene", statement: "A gene is a section of DNA on a chromosome that codes for a protein." },
            ],
            steps: [
              { reasoning: "A gene is a segment of DNA containing the code for one protein.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A section of DNA that carries instructions for making a protein",
            commonErrors: ["Choosing (a): a chromosome contains many genes, and is made of DNA wrapped around proteins.", "Choosing (c): a gene is DNA, not a protein; it carries the instructions for a protein."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s8-u3-genes-mutations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A mutation changes one base in the DNA of a gene.\n\nDescribe how this change could lead to a different trait in the organism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gene to trait", statement: "DNA sequence determines the order of amino acids, which determines the protein, which affects the trait." },
            ],
            steps: [
              { reasoning: "The changed base can change the amino acid that the code specifies.", marks: 1, markCode: "B" },
              { reasoning: "A different amino acid can change the shape of the protein, so it works differently or not at all.", marks: 1, markCode: "B" },
              { reasoning: "The changed protein alters a structure or function in the cell, which can change the observable trait.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A base change can alter an amino acid, which changes the protein's shape and function, and this can change the trait.",
            commonErrors: ["Saying the mutation changes the protein directly without mentioning the DNA code or amino acids.", "Assuming every base change must change the trait; some mutations are neutral."],
            examinerNote: "B1 change in amino acid (oe). B1 change in protein shape / function. B1 effect on trait. Allow 'different protein is made'.",
          },
        },
        {
          id: "s8-u3-genes-mutations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims: \"Every mutation harms the organism.\"\n\nUse evidence and reasoning to evaluate this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Effects of mutations", statement: "Mutations can be harmful, beneficial or neutral depending on how they affect the protein and the environment." },
            ],
            steps: [
              { reasoning: "Claim: the statement is not correct, because mutations can have different effects.", marks: 1, markCode: "R" },
              { reasoning: "Evidence of a harmful mutation: one base change causes sickle cell disease by making a misshapen protein.", marks: 1, markCode: "B" },
              { reasoning: "Evidence of a neutral or beneficial mutation: a mutation that does not change the amino acid has no effect, or a mutation giving disease resistance helps survival.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: the effect depends on whether the protein changes and whether the new trait helps in that environment.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is false. Some mutations are harmful (sickle cell), but others are neutral or beneficial, depending on the protein and the environment.",
            commonErrors: ["Agreeing with the claim because mutations are 'mistakes'.", "Saying all mutations are beneficial."],
            examinerNote: "R1 for rejecting the claim. B1 harmful example. B1 neutral or beneficial example. R1 for linking effect to protein or environment.",
          },
        },
        {
          id: "s8-u3-genes-mutations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A gene in a human cell codes for a protein that is 120 amino acids long.",
          parts: [
            { label: "a", prompt: "State where in the cell genes are found.", marks: 1 },
            { label: "b", prompt: "Calculate the minimum number of bases in the coding part of this gene. Show your working.", marks: 2 },
            { label: "c", prompt: "A mutation occurs in a skin cell. A different mutation occurs in a sperm cell. Explain which mutation could be passed on to a child.", marks: 2 },
            { label: "d", prompt: "A scientist finds a mutation in the gene that changes one base, but the protein is made with exactly the same 120 amino acids. Construct an explanation of why the person's trait is unchanged.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genetic code", statement: "Three bases code for one amino acid." },
              { kind: "principle", name: "Inherited mutations", statement: "Only mutations in sex cells (eggs and sperm) can be passed to offspring." },
            ],
            steps: [
              { part: "a", reasoning: "Genes are sections of DNA on chromosomes in the nucleus.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Each amino acid needs 3 bases, so multiply the number of amino acids by 3.", working: "120\\times3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "360\\text{ bases}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The mutation in the sperm cell could be passed on, because sperm cells combine with an egg to form the child.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The skin cell mutation affects only that cell and its descendants and is not in the sex cells, so it is not passed on.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "More than one three-base group can code for the same amino acid, so the changed base can still code for the same amino acid.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So the order of amino acids and the protein are unchanged.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The protein works the same way, so the trait does not change (a neutral mutation).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) In the nucleus (on chromosomes) (b) 360 bases (c) The sperm cell mutation, because only sex cell mutations are inherited (d) The changed base still codes for the same amino acid, so the protein and trait are unchanged.",
            commonErrors: ["In (b) dividing 120 by 3 to get 40.", "In (c) saying both mutations are inherited because both are in the body."],
            examinerNote: "(a) Allow chromosomes. (b) Allow 360 as 'at least 360' oe. Allow ecf for (b) if 3 is used incorrectly with correct multiplication method. (d) Accept 'the code is redundant' oe.",
          },
        },
      ],
    },
    {
      id: "s8-u3-reproduction-punnett",
      title: "Sexual and asexual reproduction and Punnett squares",
      skill: "Compare sexual and asexual reproduction, and use Punnett squares to predict the probability of offspring traits.",
      lesson: {
        sections: [
          {
            heading: "Two types of reproduction",
            body: "In **asexual reproduction**, one parent produces offspring. The offspring are genetically identical to the parent (clones), unless a mutation occurs. Bacteria dividing and plants growing from cuttings are examples.\n\nIn **sexual reproduction**, two parents each contribute a sex cell. The offspring receive half of their genes from each parent, so they are genetically **different** from both parents and from each other. This **variation** gives a population a better chance of surviving a change in the environment.",
          },
          {
            heading: "Predicting traits with a Punnett square",
            body: "Each parent has two alleles for a gene and passes on one at random. A capital letter shows a **dominant** allele and a lowercase letter shows a **recessive** allele. An organism with a dominant allele (TT or Tt) shows the dominant trait. Only tt shows the recessive trait.\n\nA **Punnett square** lists the possible sex cells of each parent along the sides and shows the four equally likely offspring genotypes inside. For $\\text{Tt} \\times \\text{Tt}$ the offspring are TT, Tt, Tt and tt. That gives genotype ratio $1 : 2 : 1$ and phenotype ratio $3$ tall $: 1$ short, so the probability of a short offspring is $\\frac{1}{4}$, or $25\\%$.\n\nProbabilities describe chance for each offspring. Real results in a small number of offspring can differ from the prediction.",
          },
        ],
        keyFormulas: [
          { name: "Asexual reproduction", statement: "One parent, identical offspring" },
          { name: "Sexual reproduction", statement: "Two parents, offspring with a mix of both parents' genes" },
          { name: "Probability", statement: "$P = \\dfrac{\\text{number of squares with the outcome}}{\\text{total number of squares}}$" },
        ],
        workedExample: {
          problem: "In pea plants, tall (T) is dominant to short (t). A heterozygous tall plant is crossed with a short plant. What percent of the offspring are expected to be short?",
          solution: "The parents are Tt and tt. The sex cells of Tt are T and t. The sex cells of tt are t and t. The four squares are Tt, Tt, tt and tt. Two of four are short, so the probability is $\\frac{2}{4} = 50\\%$.",
        },
      },
      questions: [
        {
          id: "s8-u3-reproduction-punnett-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about asexual reproduction is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two parents each give half of the offspring's genes." },
              { id: "b", text: "The offspring show more variation than from sexual reproduction." },
              { id: "c", text: "One parent produces offspring that are genetically identical to it." },
              { id: "d", text: "Sex cells must join before the offspring forms." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Asexual reproduction", statement: "One parent produces genetically identical offspring without the joining of sex cells." },
            ],
            steps: [
              { reasoning: "Asexual reproduction involves a single parent and produces clones.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** One parent produces offspring that are genetically identical to it.",
            commonErrors: ["Choosing (a) or (d), which describe sexual reproduction.", "Choosing (b): asexual offspring show little variation."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "s8-u3-reproduction-punnett-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In pea plants, tall (T) is dominant to short (t). A heterozygous tall plant ($\\text{Tt}$) is crossed with a short plant ($\\text{tt}$).\n\nUse a Punnett square to calculate the percent of offspring expected to be short.",
          response: { type: "numeric", parts: [{ label: "Short offspring", answer: 50, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Segregation", statement: "Each parent passes on one of its two alleles at random, so each square of a Punnett square is equally likely." },
            ],
            steps: [
              { reasoning: "The Punnett square gives the offspring Tt, Tt, tt, tt. Two of the four squares are tt (short).", working: "P(\\text{short})=\\frac{2}{4}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percent.", working: "\\frac{2}{4}=0.5=50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Using the ratio 3 : 1 from the Tt x Tt cross, giving 25%.", "Saying all offspring are tall because the tall allele is dominant."],
            examinerNote: "M1 for 2 out of 4 or correct Punnett square. A1 for 50. Allow 1/2 or 0.5 oe.",
          },
        },
        {
          id: "s8-u3-reproduction-punnett-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two heterozygous tall pea plants ($\\text{Tt} \\times \\text{Tt}$) are crossed. They produce 200 seeds, and all 200 seeds grow into plants.\n\nCalculate the number of tall plants you would expect.",
          response: { type: "numeric", parts: [{ label: "Expected tall plants", answer: 150 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Segregation", statement: "Offspring genotypes from Tt x Tt are TT, Tt, Tt and tt, equally likely." },
              { kind: "formula", name: "Expected number", statement: "expected number = probability $\\times$ total number of offspring" },
            ],
            steps: [
              { reasoning: "Complete the Punnett square: TT, Tt, Tt, tt.", working: "\\text{TT},\\ \\text{Tt},\\ \\text{Tt},\\ \\text{tt}", marks: 1, markCode: "M" },
              { reasoning: "Three of the four squares contain at least one T, so they are tall.", working: "P(\\text{tall})=\\frac{3}{4}", marks: 1, markCode: "A" },
              { reasoning: "Multiply the probability by the number of plants.", working: "\\frac{3}{4}\\times200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 tall plants",
            commonErrors: ["Using 1/4 for tall, giving 50.", "Using 1/2, giving 100."],
            examinerNote: "M1 correct Punnett square. A1 3/4 or 75%. M1 200 x their probability. A1 150. Allow ecf from an incorrect probability.",
          },
        },
        {
          id: "s8-u3-reproduction-punnett-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "In mice, black fur (B) is dominant to white fur (b). Two black mice, both with the genotype $\\text{Bb}$, are crossed.",
          parts: [
            { label: "a", prompt: "State the genotype of a white mouse.", marks: 1 },
            { label: "b", prompt: "Complete a Punnett square for the cross and state the phenotype ratio of the offspring.", marks: 2 },
            { label: "c", prompt: "A black offspring is chosen at random. Calculate the probability that it is heterozygous ($\\text{Bb}$). Give your answer as a fraction.", marks: 2 },
            { label: "d", prompt: "A litter of 8 pups contains 4 white pups. The prediction is 2 white pups. Explain whether this result shows that the Punnett square is wrong.", marks: 3 },
            { label: "e", prompt: "Explain why offspring from sexual reproduction show more variation than offspring from asexual reproduction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Segregation", statement: "Each parent passes on one allele at random, so the four squares of a Punnett square are equally likely." },
              { kind: "principle", name: "Probability", statement: "Probability predicts chance for each offspring; actual results in small samples vary." },
            ],
            steps: [
              { part: "a", reasoning: "A recessive trait appears only when both alleles are recessive.", working: "\\text{bb}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The Punnett square gives BB, Bb, Bb and bb.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Three squares are black and one is white.", working: "3\\text{ black} : 1\\text{ white}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only black offspring are considered: there are 3 (BB, Bb, Bb), so the sample space is 3, not 4.", working: "\\text{3 black outcomes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two of these three are Bb.", working: "P=\\frac{2}{3}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No, the result does not show the prediction is wrong; probability describes chance, not a guaranteed result.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Each pup has a 1/4 chance of being white, independently of the others.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A small sample such as 8 pups often differs from the predicted number; larger samples come closer to the prediction.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Offspring receive a mix of genes from two parents, in a new combination each time.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Sex cells carry random alleles and fertilization is random, whereas asexual offspring copy one parent's genes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) bb (b) BB, Bb, Bb, bb; 3 black : 1 white (c) 2/3 (d) No, the prediction is a probability and a small sample can differ from it (e) Offspring get a random mix of genes from two parents; asexual offspring are clones of one parent.",
            commonErrors: ["In (c) answering 1/2 by counting the white square as part of the sample space.", "In (d) saying the mice must have different genotypes."],
            examinerNote: "(b) Allow 3:1 in either order if clearly labelled. (c) Allow 0.67 or 66.7% oe; M1 for denominator 3. (d) Allow 'chance' or 'random' for independence.",
          },
        },
      ],
    },
  ],
};

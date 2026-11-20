import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "esc9-u1-lesson-1-3",
  code: "1-3",
  title: "Inheritance and Variation",
  goal: "I CAN describe DNA, genes and chromosomes, explain the causes of variation, and use natural selection to explain evolution.",
  standards: ["KS3 Biology", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "DNA", definition: "Deoxyribonucleic acid, the molecule that carries genetic information. It has a double helix shape." },
    { term: "Gene", definition: "A short section of DNA that codes for a particular protein and so controls an inherited characteristic." },
    { term: "Chromosome", definition: "A long, coiled molecule of DNA, containing many genes, found in the nucleus of a cell." },
    { term: "Variation", definition: "The differences between individuals of the same species." },
    { term: "Mutation", definition: "A random change in the DNA of a gene or chromosome, which may produce a new characteristic." },
    { term: "Natural selection", definition: "The process by which individuals with characteristics best suited to their environment are more likely to survive, reproduce and pass on their genes." },
    { term: "Evolution", definition: "A change in the inherited characteristics of a population over many generations, through natural selection." },
  ],
  concepts: [
    {
      id: "esc9-u1-dna-genes-variation",
      title: "DNA, genes, chromosomes and variation",
      skill: "Describe the relationship between DNA, genes and chromosomes and classify variation as inherited, environmental or both.",
      lesson: {
        sections: [
          {
            heading: "DNA, genes and chromosomes",
            body: "Most cells have a **nucleus**. The nucleus contains **chromosomes**. Each chromosome is a long molecule of **DNA**, which is shaped like a twisted ladder called a **double helix**. A **gene** is a short section of a chromosome (a section of DNA) that codes for a particular protein, and so controls a characteristic such as blood group.\n\nHuman body cells have 46 chromosomes, arranged in 23 pairs. The sex cells, or **gametes** (sperm and egg), have half the number, 23. When a sperm fertilises an egg, the **zygote** has 46 chromosomes again, half from each parent. This is why offspring resemble both parents.",
          },
          {
            heading: "Types of variation",
            body: "Differences between individuals of a species are called **variation**.\n\n- **Inherited variation** is caused by genes passed from parents, for example eye colour, blood group and natural hair colour.\n- **Environmental variation** is caused by the surroundings or by lifestyle, for example a scar, the language you speak and a plant that grows tall in the light but short in the shade.\n- Many characteristics are affected by **both**, for example height, body mass and skin colour.\n\nIdentical twins have the same genes, so differences between them are caused by the environment.",
          },
          {
            heading: "Continuous and discontinuous variation",
            body: "**Continuous variation** shows a range of values, for example height. **Discontinuous variation** puts individuals into distinct groups with no in-between values, for example blood group. Data for continuous variation is often shown in a histogram or line graph, and data for discontinuous variation in a bar chart.",
          },
        ],
        keyFormulas: [
          { name: "Chromosome number", statement: "$\\text{gamete} = \\frac{\\text{body cell}}{2}$, and zygote = body cell number" },
          { name: "Gene", statement: "A section of DNA that codes for a protein" },
          { name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
        ],
        workedExample: {
          problem: "A pea plant has 14 chromosomes in each body cell. How many chromosomes are in one of its gametes?",
          solution: "Gametes have half the number of chromosomes of body cells: $14 \\div 2 = 7$ chromosomes.",
        },
      },
      questions: [
        {
          id: "esc9-u1-dna-genes-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a gene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A section of DNA that codes for a protein" },
              { id: "b", text: "A cell that contains a nucleus" },
              { id: "c", text: "A type of chromosome found only in gametes" },
              { id: "d", text: "A pair of chromosomes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gene", statement: "A gene is a short section of DNA that codes for a particular protein." },
            ],
            steps: [
              { reasoning: "Genes are sections of DNA, found on chromosomes, that carry the instructions for making proteins.", working: "\\text{a section of DNA that codes for a protein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A section of DNA that codes for a protein",
            commonErrors: ["Confusing a gene with a chromosome. A chromosome contains many genes.", "Thinking genes are only found in gametes."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "esc9-u1-dna-genes-variation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A dog has 78 chromosomes in each of its body cells. Calculate the number of chromosomes in one sperm cell from a male dog.",
          response: { type: "numeric", parts: [{ label: "Chromosomes in a sperm cell", answer: 39 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gametes", statement: "Gametes contain half the number of chromosomes of a body cell, so that fertilisation restores the full number." },
            ],
            steps: [
              { reasoning: "A gamete has half the chromosome number of a body cell.", working: "78 \\div 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "39", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$39$ chromosomes",
            commonErrors: ["Giving 78, thinking all cells have the same number.", "Giving 156 by doubling instead of halving."],
            examinerNote: "M1 for halving 78 (oe). A1 cao.",
          },
        },
        {
          id: "esc9-u1-dna-genes-variation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Identical twins have the same genes. At the age of 30, one twin is 4 kg heavier than the other. Explain how this difference can occur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Environmental variation", statement: "Characteristics such as body mass depend on genes and on the environment, such as diet and exercise." },
            ],
            steps: [
              { reasoning: "The twins have identical genes, so the difference cannot be caused by the genes.", marks: 1, markCode: "B" },
              { reasoning: "The difference must be caused by the environment, for example a different diet or amount of exercise.", marks: 1, markCode: "B" },
              { reasoning: "Body mass is affected by both inherited and environmental factors, so it can differ between twins who have the same genes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Same genes, so the difference is environmental (diet, exercise); body mass depends on both genes and environment.",
            commonErrors: ["Saying the twins must have different genes.", "Saying body mass is entirely inherited."],
            examinerNote: "Allow any sensible environmental factor such as lifestyle or illness. Do not allow 'mutation' unless the answer also relates it to the difference between twins.",
          },
        },
        {
          id: "esc9-u1-dna-genes-variation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A scientist grows five genetically identical bean seedlings from cuttings of one plant. She grows them all in the same type of compost but gives each a different amount of light. After four weeks she measures their heights.\n\n| Seedling | Hours of light per day | Height (cm) |\n| --- | --- | --- |\n| 1 | 4 | 12 |\n| 2 | 6 | 15 |\n| 3 | 8 | 14 |\n| 4 | 10 | 13 |\n| 5 | 12 | 16 |",
          parts: [
            { label: "a", prompt: "State where in an animal cell the chromosomes are found.", marks: 1 },
            { label: "b", prompt: "Describe the relationship between DNA, genes and chromosomes.", marks: 3 },
            { label: "c", prompt: "Calculate the mean height of the five seedlings, in cm.", marks: 2 },
            { label: "d", prompt: "The seedlings have different heights even though they are genetically identical. Explain why, and suggest one change that would improve the investigation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "DNA, genes and chromosomes", statement: "A chromosome is a long DNA molecule, and a gene is a section of that DNA coding for a protein." },
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
              { kind: "principle", name: "Environmental variation", statement: "Genetically identical organisms can differ because of differences in their environment." },
            ],
            steps: [
              { part: "a", reasoning: "Chromosomes are found in the nucleus.", working: "\\text{nucleus}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A chromosome is made of a long molecule of DNA.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A gene is a short section of DNA (found on a chromosome).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Each gene codes for a particular protein, which controls a characteristic; a chromosome contains many genes.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Add the heights and divide by five.", working: "\\frac{12 + 15 + 14 + 13 + 16}{5} = \\frac{70}{5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "14\\text{ cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The differences are caused by the environment (the different amounts of light), not by genes.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "An improvement: use more seedlings at each amount of light and calculate a mean; or repeat the investigation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Nucleus (b) Chromosome is DNA; gene is a section of DNA coding for a protein (c) $14\\text{ cm}$ (d) Environmental variation (light); repeat with more seedlings per light level.",
            commonErrors: ["Saying genes are made of chromosomes (it is the other way round).", "Adding the hours of light to the heights in the mean calculation."],
            examinerNote: "In (c) A1 for 14 with correct unit. In (d) allow 'use a larger number of plants' or 'repeat'. Allow 'different light levels affect growth' oe.",
          },
        },
      ],
    },
    {
      id: "esc9-u1-natural-selection-evolution",
      title: "Natural selection and evolution",
      skill: "Explain how natural selection leads to adaptation and evolution, using examples such as the peppered moth and antibiotic resistance.",
      lesson: {
        sections: [
          {
            heading: "Natural selection",
            body: "Charles Darwin explained evolution by **natural selection**. The key steps are:\n\n1. Individuals in a population show **variation**, because of differences in their genes, sometimes caused by **mutations**.\n2. More offspring are produced than can survive, so there is **competition** for food, mates and space.\n3. Individuals with characteristics that suit the environment are more likely to **survive and reproduce**.\n4. They pass on the **genes** for those characteristics to their offspring.\n5. Over many generations the proportion of individuals with the useful characteristic increases.\n\nThis is sometimes called 'survival of the fittest'. Individuals do not change during their lives to suit the environment: it is the **population** that changes.",
          },
          {
            heading: "Examples",
            body: "**Peppered moths.** Before the industrial revolution most peppered moths were pale, which camouflaged them on lichen-covered trees. In polluted areas soot darkened the trees, so dark moths were better camouflaged and birds ate more pale moths. Dark moths survived, reproduced and passed on their genes, so dark moths became more common.\n\n**Antibiotic resistance.** A mutation can make a bacterium resistant to an antibiotic. When the antibiotic is used, non-resistant bacteria are killed but resistant bacteria survive and reproduce, so the resistant strain spreads.",
          },
          {
            heading: "Evidence and extinction",
            body: "Evidence for evolution includes **fossils**, which show how organisms have changed over time, and observed changes in populations such as the peppered moth. A species becomes **extinct** if it cannot adapt quickly enough to changes such as a new predator, disease or climate change.",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "variation, competition, survival of the best adapted, reproduction, genes passed on" },
          { name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{whole}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "In a sample of 250 moths, 200 are dark. Calculate the percentage of the sample that is dark.",
          solution: "$\\frac{200}{250} \\times 100 = 80\\%$.",
        },
      },
      questions: [
        {
          id: "esc9-u1-natural-selection-evolution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which scientist proposed the theory of evolution by natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gregor Mendel" },
              { id: "b", text: "Charles Darwin" },
              { id: "c", text: "Louis Pasteur" },
              { id: "d", text: "Alexander Fleming" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural selection", statement: "The theory of evolution by natural selection was proposed by Charles Darwin (with Alfred Russel Wallace)." },
            ],
            steps: [
              { reasoning: "Darwin published On the Origin of Species in 1859, setting out evolution by natural selection.", working: "\\text{Charles Darwin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Charles Darwin",
            commonErrors: ["Choosing Mendel, who studied inheritance in pea plants but did not propose natural selection.", "Choosing Fleming, who discovered penicillin."],
            examinerNote: "B1 for Darwin.",
          },
        },
        {
          id: "esc9-u1-natural-selection-evolution-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scientist catches 400 peppered moths in a polluted city. 360 of the moths are dark. Calculate the percentage of the moths that are dark.",
          response: { type: "numeric", parts: [{ label: "Percentage dark", answer: 90, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{whole}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the number of dark moths by the total and multiply by 100.", working: "\\frac{360}{400} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "90\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\%$",
            commonErrors: ["Dividing by 360 or by the number of pale moths (40).", "Giving 0.9 without converting to a percentage."],
            examinerNote: "M1 for $\\frac{360}{400}$ (oe). A1 for 90. Allow 0.9 only if clearly labelled as 90%.",
          },
        },
        {
          id: "esc9-u1-natural-selection-evolution-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Some bacteria in a hospital are not killed by an antibiotic. Use natural selection to explain how a population of resistant bacteria can develop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Individuals with a useful characteristic survive and reproduce, passing on the gene for it, so it becomes more common." },
            ],
            steps: [
              { reasoning: "A random mutation in a bacterium produces a gene for resistance to the antibiotic (variation in the population).", marks: 1, markCode: "B" },
              { reasoning: "When the antibiotic is used, the non-resistant bacteria are killed.", marks: 1, markCode: "B" },
              { reasoning: "The resistant bacteria survive and reproduce, passing on the resistance gene.", marks: 1, markCode: "B" },
              { reasoning: "Over many generations the proportion of resistant bacteria increases until most of the population is resistant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Mutation gives resistance; antibiotic kills non-resistant bacteria; resistant survive, reproduce and pass on the gene; resistant population grows.",
            commonErrors: ["Saying the bacteria 'learn' or 'choose' to become resistant.", "Saying the antibiotic causes the mutation."],
            examinerNote: "Reject 'bacteria adapt to the antibiotic' without reference to survival and passing on genes. Allow 'immune' for resistant in the context of bacteria.",
          },
        },
        {
          id: "esc9-u1-natural-selection-evolution-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Before the industrial revolution, a survey of 200 peppered moths in a wood found 190 pale moths and 10 dark moths. After many years of industrial pollution, a similar survey of 200 moths found 40 pale moths and 160 dark moths. Pale moths are well camouflaged on clean, lichen-covered bark. Dark moths are well camouflaged on bark darkened by soot.",
          parts: [
            { label: "a", prompt: "Calculate the percentage of dark moths before the industrial revolution.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage of dark moths after many years of pollution.", marks: 1 },
            { label: "c", prompt: "Explain how natural selection caused the change in the percentage of dark moths.", marks: 3 },
            { label: "d", prompt: "Pollution laws later made the air cleaner and the bark lighter again. Predict what happened to the percentage of dark moths and explain your prediction.", marks: 2 },
            { label: "e", prompt: "Suggest how the scientist could test that birds eat more of the moths that are less well camouflaged.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{whole}} \\times 100\\%$" },
              { kind: "principle", name: "Natural selection", statement: "Individuals better adapted to their environment survive, reproduce and pass on their genes." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the number of dark moths by the total.", working: "\\frac{10}{200} \\times 100 = 5\\%", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the number of dark moths by the total.", working: "\\frac{160}{200} \\times 100 = 80\\%", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Soot darkened the trees, so dark moths were better camouflaged and birds ate more pale moths.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Dark moths were more likely to survive and reproduce.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "They passed on the gene for dark colour to their offspring, so dark moths became more common over generations.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The percentage of dark moths would decrease (and pale moths increase).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Pale moths are again better camouflaged on light bark, so they survive and reproduce more.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Release equal numbers of marked pale and dark moths onto light bark and onto dark bark (or place model or real moths on each background).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Record how many of each type are eaten or recaptured after a fixed time, and repeat to improve reliability.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $5\\%$ (b) $80\\%$ (c) Dark moths camouflaged, survive, reproduce, pass on gene (d) Fewer dark moths, as pale moths now camouflaged (e) Release marked moths on each background and compare numbers eaten, with repeats.",
            commonErrors: ["Saying the moths changed colour because of the pollution.", "Saying dark moths 'needed' to be dark.", "Dividing by the number of pale moths."],
            examinerNote: "In (c) all three points must refer to populations over generations; reject 'the moths adapted'. In (e) allow any valid method that compares predation on matching and non-matching backgrounds. Ignore any mention of ethics.",
          },
        },
      ],
    },
  ],
};

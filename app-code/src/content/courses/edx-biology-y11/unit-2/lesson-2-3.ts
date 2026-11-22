import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ebi11-u2-lesson-2-3",
  code: "2-3",
  title: "Variation, Mutation and Natural Selection",
  goal: "I CAN explain the causes of variation and mutation, and use natural selection to explain evolution, including antibiotic resistance in bacteria.",
  standards: ["4BI1 4.1", "4BI1 4.2", "4BI1 4.3", "4BI1 4.4", "4BI1 4.5", "4BI1 4.6", "4BI1 4.7", "4BI1 4.8", "4BI1 4.9"],
  vocabulary: [
    { term: "Variation", definition: "Differences between individuals of the same species, caused by genes, the environment or both." },
    { term: "Mutation", definition: "A random change in the base sequence of DNA, which may produce a new allele." },
    { term: "Natural selection", definition: "The process by which individuals with advantageous alleles survive and reproduce more, passing these alleles to the next generation." },
    { term: "Evolution", definition: "A change in the inherited characteristics of a population over many generations, which may lead to new species." },
    { term: "Continuous variation", definition: "Variation in which a characteristic can take any value in a range, e.g. height or mass. It is usually shown by a bell-shaped histogram." },
    { term: "Discontinuous variation", definition: "Variation in which there are distinct categories with no intermediate values, e.g. blood group." },
    { term: "Antibiotic resistance", definition: "The ability of bacteria to survive an antibiotic, usually because of a mutated allele." },
  ],
  concepts: [
    {
      id: "ebi11-u2-mutation-variation",
      title: "Mutation and variation",
      skill: "Distinguish continuous and discontinuous variation, explain genetic and environmental causes and describe the effects of mutation and radiation.",
      lesson: {
        sections: [
          {
            heading: "Causes of variation",
            body: "Variation can be caused by **genes** (different alleles inherited), by the **environment** (e.g. diet, sunlight, climate) or by both. Genetic variation comes from mutation, the random shuffling of chromosomes in meiosis, and the random fusion of gametes at fertilisation. Identical twins are genetically identical, so any differences between them are caused by the environment.\n\n**Discontinuous variation** gives distinct categories (e.g. blood groups A, B, AB, O) and is controlled by one or a few genes, with little effect from the environment. **Continuous variation** gives a smooth range of values (e.g. height, mass) and is controlled by many genes and the environment. Continuous data are shown on a histogram or line graph; discontinuous data on a bar chart.",
          },
          {
            heading: "Mutation",
            body: "A **mutation** is a random change in the base sequence of a gene. Most mutations have no effect or are harmful, because they may change the order of amino acids in a protein and so alter its shape (for example an enzyme no longer fits its substrate). A few are beneficial and give an advantage, e.g. bacteria that can survive an antibiotic. Mutations occur spontaneously, and the rate is increased by **ionising radiation** (X-rays, gamma rays, UV light) and some chemicals called **mutagens**, such as chemicals in tobacco smoke. Mutations that affect gametes can be passed to the offspring; those in body cells can cause cancer.",
          },
          {
            heading: "Examples: sickle cell anaemia",
            body: "In sickle cell anaemia a mutation changes the allele for haemoglobin. People with two copies (ss) have red blood cells that become sickle-shaped and block capillaries. People with one copy (Ss) are carriers, but they are also **resistant to malaria**. In areas where malaria is common, the Ss genotype has an advantage, so the sickle cell allele remains common in the population even though ss is harmful.",
          },
        ],
        keyFormulas: [
          { name: "Mean from a table", statement: "$\\text{mean} = \\frac{\\sum (\\text{value} \\times \\text{frequency})}{\\text{total frequency}}$" },
          { name: "Continuous variation", statement: "Range of values, many genes plus the environment, histogram or bell curve" },
          { name: "Discontinuous variation", statement: "Distinct categories, one or few genes, bar chart" },
          { name: "Mutation", statement: "Random change in DNA base sequence; rate increased by ionising radiation and mutagens" },
        ],
        workedExample: {
          problem: "A sample of 10 plants has heights (cm): 4 plants of 12 cm, 4 plants of 14 cm and 2 plants of 18 cm. Calculate the mean height.",
          solution: "Sum of heights $= 4 \\times 12 + 4 \\times 14 + 2 \\times 18 = 48 + 56 + 36 = 140\\text{ cm}$.\n\nMean $= \\frac{140}{10} = 14\\text{ cm}$.",
        },
      },
      questions: [
        {
          id: "ebi11-u2-mutation-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which characteristic shows discontinuous variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaf length" },
              { id: "b", text: "Body mass" },
              { id: "c", text: "Height" },
              { id: "d", text: "ABO blood group" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discontinuous variation", statement: "Variation with distinct categories and no intermediate values, controlled by one or few genes." },
            ],
            steps: [
              { reasoning: "Blood group falls into four separate categories (A, B, AB, O). Mass, height and length can take any value in a range.", working: "\\text{blood group}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** ABO blood group",
            commonErrors: ["Choosing height because people can be sorted into 'tall' and 'short', but height is a continuous measurement."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ebi11-u2-mutation-variation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population of 20 seedlings has the following heights: 5 seedlings of 8 cm, 10 seedlings of 10 cm and 5 seedlings of 12 cm. Calculate the mean height. Give your answer in cm.",
          response: { type: "numeric", parts: [{ label: "Mean height", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\sum (\\text{value} \\times \\text{frequency})}{\\text{total frequency}}$" },
            ],
            steps: [
              { reasoning: "Multiply each height by its frequency and add.", working: "5 \\times 8 + 10 \\times 10 + 5 \\times 12 = 40 + 100 + 60 = 200", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total number of seedlings.", working: "\\frac{200}{20}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "10\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\text{ cm}$",
            commonErrors: ["Averaging the three heights without using the frequencies, $\\frac{8 + 10 + 12}{3}$ (this happens to give 10 here, but fails with unequal frequencies).", "Dividing by 3 instead of 20."],
            examinerNote: "M1 for the sum of height $\\times$ frequency (200). M1 for dividing by 20. A1 cao.",
          },
        },
        {
          id: "ebi11-u2-mutation-variation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sickle cell anaemia is caused by a recessive allele. Explain why the sickle cell allele is common in parts of Africa where malaria is widespread, even though people with two copies of the allele (ss) often die young.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heterozygote advantage", statement: "Where heterozygous individuals have a selective advantage, a harmful recessive allele is maintained in the population." },
            ],
            steps: [
              { reasoning: "People who are heterozygous (Ss, carriers) do not suffer severe sickle cell anaemia.", marks: 1, markCode: "B" },
              { reasoning: "Heterozygous people are also resistant to malaria.", marks: 1, markCode: "B" },
              { reasoning: "In areas with malaria, heterozygous people are more likely to survive and reproduce than people with SS (who get malaria) or ss (who have sickle cell anaemia).", marks: 1, markCode: "B" },
              { reasoning: "So the sickle cell allele is passed on to the next generation and stays common in the population.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Carriers (Ss) are protected from malaria and do not have the disease, so they survive, reproduce and pass on the allele.",
            commonErrors: ["Saying that the allele mutated because of malaria.", "Saying that people with sickle cell anaemia are immune to malaria and do not die.", "Describing the allele as dominant."],
            examinerNote: "Allow 'resistance to malaria' for the second mark. Reject 'immune' for the malaria mark if it implies a vaccine or immune response.",
          },
        },
        {
          id: "ebi11-u2-mutation-variation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates variation in the length of ivy leaves from one plant. She measures 100 leaves and groups the results in a histogram, which is bell-shaped. The mean leaf length is 6.4 cm. She also compares leaf length between ivy plants growing in sunlight and in deep shade. Identical cuttings from the same parent plant are used.\n\n| Mean leaf length | Sunlight | Shade |\n| --- | --- | --- |\n| Leaf length (cm) | 5.8 | 8.2 |",
          parts: [
            { label: "a", prompt: "State the type of variation shown by leaf length.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage increase in mean leaf length from sunlight to shade. Give your answer to the nearest whole number, in $\\%$.", marks: 2 },
            { label: "c", prompt: "Explain why the difference between the two groups must be due to the environment and not the genes.", marks: 2 },
            { label: "d", prompt: "Name two variables that the student should control in the investigation.", marks: 2 },
            { label: "e", prompt: "Describe how a mutation can lead to a change in a characteristic of an organism.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
              { kind: "definition", name: "Mutation", statement: "A random change in the DNA base sequence of a gene." },
            ],
            steps: [
              { part: "a", reasoning: "Leaf length can take any value in a range and gives a bell-shaped histogram.", working: "\\text{continuous variation}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the change and divide by the original value (sunlight).", working: "\\frac{8.2 - 5.8}{5.8} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "\\frac{2.4}{5.8} \\times 100 = 41.37\\ldots \\approx 41\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The cuttings are from the same parent, so they are genetically identical (clones) with the same alleles.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The only difference is the light level, so the difference in leaf length is caused by the environment.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Any two control variables, e.g. temperature, water supply, mineral ions/soil type, age of the plant, which part of the leaf is measured.", marks: 2, markCode: "B" },
              { part: "e", reasoning: "A mutation changes the base sequence of a gene, so the order of amino acids in the protein changes.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The protein (e.g. an enzyme) has a different shape and function, which changes a characteristic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) continuous (b) $41\\%$ (c) clones, so only environment differs (d) e.g. temperature, water supply (e) base sequence changes, so amino acid order and protein shape change",
            commonErrors: ["Dividing by 8.2 (the shade value) to give 29%.", "Giving 2.4 as the answer, which is the change in cm.", "Stating that the difference is caused by 'adaptation' of the genes."],
            examinerNote: "(b) Allow 41 or 41.4. (d) 1 mark each, ignore 'light' because it is the independent variable. (c) Allow 'same genes' for genetically identical.",
          },
        },
      ],
    },
    {
      id: "ebi11-u2-natural-selection-resistance",
      title: "Natural selection and antibiotic resistance",
      skill: "Explain evolution by natural selection, interpret selection data and explain how antibiotic resistance develops.",
      lesson: {
        sections: [
          {
            heading: "Natural selection",
            body: "Charles Darwin proposed evolution by natural selection. The steps are:\n\n- individuals in a population show **variation**, because of differences in their alleles\n- more offspring are born than can survive, so there is **competition** for resources and a struggle for survival\n- individuals with advantageous alleles are better adapted, so they are more likely to **survive and reproduce** (survival of the fittest)\n- they pass the advantageous alleles to their offspring\n- over many generations the **frequency of the advantageous allele increases** in the population\n\nNatural selection can lead to new species. Species can become extinct if they cannot adapt to a change in conditions, such as new predators, new diseases, or loss of habitat.",
          },
          {
            heading: "Peppered moths and selection pressure",
            body: "In the peppered moth, dark and pale forms occur. Before the industrial revolution, most were pale and camouflaged on pale, lichen-covered trees. When soot darkened trees, pale moths were seen and eaten by birds, so dark moths survived and bred more. The proportion of dark moths rose. When air pollution was reduced, the pale form became common again. The birds are the **selection pressure**. Remember that individuals do not change: it is the **proportion of alleles in the population** that changes over generations.",
          },
          {
            heading: "Antibiotic resistance",
            body: "A random mutation in a bacterium can make it resistant to an antibiotic. When the antibiotic is used, non-resistant bacteria are killed, but resistant bacteria survive, reproduce (by binary fission, as often as every 20 minutes) and pass on the resistance allele. Soon the population is mostly resistant. This is natural selection. **MRSA** is a resistant strain of bacteria.\n\nTo slow the development of resistance: doctors should not prescribe antibiotics for viral infections or minor infections, patients must **complete the full course**, and the use of antibiotics in farming should be restricted. New antibiotics must be developed. Antibiotics do not work on viruses.",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "Variation $\\rightarrow$ competition $\\rightarrow$ survival of best adapted $\\rightarrow$ reproduction $\\rightarrow$ allele passed on $\\rightarrow$ allele frequency increases" },
          { name: "Bacterial population growth", statement: "$\\text{number after } n \\text{ divisions} = N_0 \\times 2^n$" },
          { name: "Percentage of a population", statement: "$\\text{percentage} = \\frac{\\text{number with characteristic}}{\\text{total number}} \\times 100\\%$" },
          { name: "Antibiotic resistance", statement: "Mutation $\\rightarrow$ antibiotic kills non-resistant bacteria $\\rightarrow$ resistant bacteria survive and reproduce" },
        ],
        workedExample: {
          problem: "One bacterium divides every 30 minutes. How many bacteria are there after 4 hours if none die?",
          solution: "In 4 hours there are $4 \\times 2 = 8$ divisions. Number of bacteria $= 1 \\times 2^8 = 256$.",
        },
      },
      questions: [
        {
          id: "ebi11-u2-natural-selection-resistance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Antibiotic-resistant bacteria become common in a hospital. Which statement explains this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bacteria choose to become resistant when exposed to antibiotics" },
              { id: "b", text: "Resistant bacteria survive antibiotics, reproduce and pass on the resistance allele" },
              { id: "c", text: "Individual bacteria gradually become used to the antibiotic" },
              { id: "d", text: "Antibiotics cause bacteria to mutate into resistant forms" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Individuals with an advantageous allele survive and reproduce, so the allele becomes more common." },
            ],
            steps: [
              { reasoning: "Mutations are random and occur before the antibiotic is used. The antibiotic only selects the resistant bacteria that already exist.", working: "\\text{selection of resistant bacteria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Choosing (b): antibiotics do not cause the mutation, they select resistant bacteria.", "Choosing (d): individual bacteria do not adapt during their lifetime."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ebi11-u2-natural-selection-resistance-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bacterium divides by binary fission every 20 minutes. Starting from one bacterium, calculate how many bacteria there are after 3 hours, assuming none die and the antibiotic is not used.",
          response: { type: "numeric", parts: [{ label: "Number of bacteria after 3 hours", answer: 512 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential growth", statement: "$\\text{number} = N_0 \\times 2^n$, where $n$ is the number of divisions" },
            ],
            steps: [
              { reasoning: "Convert 3 hours to minutes and divide by 20 minutes.", working: "\\frac{3 \\times 60}{20} = 9\\text{ divisions}", marks: 1, markCode: "M" },
              { reasoning: "The population doubles at each division.", working: "2^9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^9 = 512", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$512$ bacteria",
            commonErrors: ["Multiplying 9 by 2 to give 18.", "Using 3 divisions (one per hour) to give 8."],
            examinerNote: "M1 for 9 divisions. M1 for $2^9$ (or doubling 9 times). A1 for 512.",
          },
        },
        {
          id: "ebi11-u2-natural-selection-resistance-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a population of bacteria can become resistant to an antibiotic, and explain why patients are told to complete the full course of antibiotics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural selection", statement: "Advantageous alleles become more common because individuals with them survive and reproduce more." },
            ],
            steps: [
              { reasoning: "A random mutation in a bacterium produces an allele that gives resistance to the antibiotic.", marks: 1, markCode: "B" },
              { reasoning: "The antibiotic kills the non-resistant bacteria, but the resistant bacterium survives.", marks: 1, markCode: "B" },
              { reasoning: "The resistant bacteria reproduce and pass the allele to their offspring, so the population becomes mostly resistant.", marks: 1, markCode: "B" },
              { reasoning: "If the course is stopped early, some bacteria (possibly the more resistant ones) survive.", marks: 1, markCode: "B" },
              { reasoning: "These survivors reproduce and cause the infection to return, with a greater proportion that are resistant, so completing the course kills all the bacteria.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Mutation gives resistance; antibiotic selects resistant bacteria, which reproduce; a full course kills all bacteria so none survive to breed and spread resistance.",
            commonErrors: ["Saying that the bacteria 'learn' or 'adapt' to the antibiotic.", "Saying that the human body becomes resistant to antibiotics.", "Saying that antibiotics cause mutations."],
            examinerNote: "Reject 'bacteria become immune' unless the mutation and selection are described. Allow 'the antibiotic kills all the bacteria so none are left to become resistant' for the final mark.",
          },
        },
        {
          id: "ebi11-u2-natural-selection-resistance-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "In a woodland the peppered moth exists in a pale form and a dark form. A student collected data on the moths found on tree trunks in a polluted city woodland and a clean countryside woodland.\n\n| Woodland | Pale moths | Dark moths | Total |\n| --- | --- | --- | --- |\n| Polluted city | 24 | 96 | 120 |\n| Clean countryside | 150 | 50 | 200 |",
          parts: [
            { label: "a", prompt: "Calculate the percentage of dark moths in the polluted city woodland.", marks: 2 },
            { label: "b", prompt: "Calculate the ratio of pale moths to dark moths in the clean countryside woodland, in its simplest form.", marks: 2 },
            { label: "c", prompt: "Use ideas about natural selection to explain why most moths are dark in the polluted woodland.", marks: 4 },
            { label: "d", prompt: "Suggest one reason why the student's results may not be reliable, and one way of improving reliability.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{total}} \\times 100\\%$" },
              { kind: "principle", name: "Natural selection", statement: "Individuals with advantageous alleles survive, reproduce and pass on those alleles, so the allele frequency increases." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the number of dark moths by the total and multiply by 100.", working: "\\frac{96}{120} \\times 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "80\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write the ratio pale : dark using the numbers.", working: "150 : 50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide both by 50.", working: "3 : 1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "There is variation: moths have different alleles, giving pale or dark colour.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "In the polluted woodland the trunks are dark, so dark moths are camouflaged and pale moths are easily seen and eaten by predators (birds).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Dark moths survive and reproduce more, passing on the allele for dark colour to their offspring.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Over many generations the frequency of the dark allele increases, so most moths are dark.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A valid limitation, e.g. only one visit or a small sample, moths hidden by camouflage so pale moths are under-counted, or moths counted on different days.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A valid improvement, e.g. repeat on several days and calculate a mean, or use a larger sample or several sites.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $80\\%$ (b) $3:1$ (c) camouflaged dark moths survive, reproduce and pass on the allele; the allele becomes more common (d) e.g. small sample / repeat and take a mean",
            commonErrors: ["Writing the ratio as 50 : 150 (dark : pale), or as 3 : 4 using the total.", "Stating that the moths changed colour to match the trees.", "Dividing by the number of pale moths in part (a)."],
            examinerNote: "(a) Allow 80. (b) Reject 150:50 for A1 but allow M1; reject 1:3. (c) Reject 'moths adapted' or 'moths needed to change colour'. Allow 'selection pressure' for predation. (d) The improvement must match a limitation or be a valid general improvement.",
          },
        },
      ],
    },
  ],
};

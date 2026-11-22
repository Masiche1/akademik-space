import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "olbio-u10-lesson-10-1",
  code: "10-1",
  title: "Natural Selection and Evolution",
  goal: "I CAN explain natural selection, adaptation, and evidence for evolution.",
  standards: ["5090 10.1", "5090 10.2"],
  vocabulary: [
    { term: "Variation", definition: "Differences between individuals of a species." },
    { term: "Natural selection", definition: "Process where individuals best adapted survive and reproduce, passing on advantageous alleles." },
    { term: "Adaptation", definition: "Inherited feature that improves survival/reproduction in a given environment." },
    { term: "Speciation", definition: "Formation of new species when populations become isolated and evolve separately." },
    { term: "Selective breeding", definition: "Humans choosing which organisms reproduce to enhance desired traits." },
    { term: "Fossil", definition: "Preserved remains of ancient organisms; evidence of change over time." },
    { term: "Extinction", definition: "Permanent loss of a species." },
  ],
  concepts: [
    {
      id: "olbio-u10-natural-selection",
      title: "Natural selection",
      skill: "Explain natural selection, adaptation and speciation.",
      lesson: {
        sections: [
          {
            heading: "Mechanism",
            body: "1. **Variation** exists within a population (mutation, meiosis).\n2. **Selection pressure** (e.g. predators, climate) favours some variants.\n3. **Best adapted** survive and reproduce more.\n4. **Advantageous alleles** increase in frequency over generations.\n\nOver time the population becomes better adapted — evolution.",
          },
          {
            heading: "Adaptation examples",
            body: "- Camouflage (peppered moth)\n- Antibiotic resistance in bacteria\n- Darwin's finches (beak shapes for different foods)\n- Industrial melanism",
          },
          {
            heading: "Speciation",
            body: "When a population is split (geographic barrier), each group evolves differently. If they can no longer interbreed → new species.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how antibiotic resistance evolves in bacteria.",
          solution: "Random mutation gives some bacteria resistance; antibiotic kills susceptible ones; resistant survivors reproduce → resistance allele spreads.",
        },
      },
      questions: [
        {
          id: "olbio-u10-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection acts on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The environment becoming stronger" },
              { id: "b", text: "Individual organisms changing during their lifetime" },
              { id: "c", text: "Species deciding to adapt" },
              { id: "d", text: "Variation within a population" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Acts on existing variation in a population." },
            ],
            steps: [
              { reasoning: "Recall what selection acts on.", working: "\\text{variation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Variation within a population",
            commonErrors: ["Choosing 'individuals change' — acquired characteristics are NOT inherited (Lamarck's error)."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'adaptation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "Inherited feature improving survival/reproduction." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{inherited feature}", marks: 1, markCode: "M" },
              { reasoning: "Complete: survival/reproduction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An inherited feature that improves an organism's survival or reproduction in its environment.",
            commonErrors: ["Saying 'any useful feature' — must be inherited/genetic."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how antibiotic resistance evolves in a bacterial population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Antibiotic resistance", statement: "Random mutation → selection → resistant allele spreads." },
            ],
            steps: [
              { reasoning: "Mutation creates resistance in some bacteria.", working: "\\text{mutation}", marks: 1, markCode: "M" },
              { reasoning: "Antibiotic kills susceptible bacteria.", working: "\\text{selection pressure}", marks: 1, markCode: "M" },
              { reasoning: "Resistant bacteria survive and reproduce.", working: "\\text{survive/reproduce}", marks: 1, markCode: "M" },
              { reasoning: "Resistance allele increases in frequency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random mutation gives some bacteria antibiotic resistance; the antibiotic kills susceptible bacteria while resistant ones survive and reproduce, spreading the resistance allele.",
            commonErrors: ["Saying 'bacteria develop resistance to survive' — mutation is random, not directed."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain the process of natural selection using an example.",
          parts: [
            { label: "a", prompt: "State the four stages of natural selection.", marks: 4 },
            { label: "b", prompt: "Give one real example.", marks: 2 },
            { label: "c", prompt: "Explain how the example illustrates each stage.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Variation → selection pressure → differential survival → allele frequency change." },
            ],
            steps: [
              { part: "a", reasoning: "Variation exists.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Selection pressure.", working: "\\text{selection pressure}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Best adapted survive/reproduce.", working: "\\text{differential survival}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Allele frequency changes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Give example (peppered moth, finches, resistance).", working: "\\text{example}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Name it clearly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Variation: different beak shapes/colours.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Selection: environment favours one type.", working: "\\text{selection}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Result: advantageous type increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) variation→pressure→survival→allele change (b) e.g. peppered moth (c) illustrated stages",
            commonErrors: ["In (a) saying 'organisms try to adapt' — selection is passive, not goal-directed."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the first requirement for natural selection to occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variation within the population" },
              { id: "b", text: "Individuals changing during life" },
              { id: "c", text: "All individuals being identical" },
              { id: "d", text: "The environment choosing on purpose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Selection requires existing heritable variation." },
            ],
            steps: [
              { reasoning: "Recall the prerequisite for selection.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Variation within the population",
            commonErrors: ["Choosing 'individuals changing during life' — acquired changes are not inherited."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a sample of 400 peppered moths, 60 carry the dark-colour allele. Calculate the percentage carrying the allele.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole x 100." },
            ],
            steps: [
              { reasoning: "Divide the number carrying the allele by the sample size and multiply by 100.", working: "60/400 = 0.15", marks: 1, markCode: "M" },
            ],
            finalAnswer: "15%",
            commonErrors: ["Using 60/400 without multiplying by 100."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A random mutation gives some bacteria the ability to survive antibiotics. This mutation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proof that bacteria choose to adapt" },
              { id: "b", text: "Heritable variation that selection can act on" },
              { id: "c", text: "A response caused by the antibiotic" },
              { id: "d", text: "An acquired characteristic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mutation and selection", statement: "Mutations create variation before selection acts." },
            ],
            steps: [
              { reasoning: "Identify the role of the mutation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heritable variation that selection can act on",
            commonErrors: ["Saying the antibiotic caused the mutation — selection does not create the variation."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A farmer selects 20 parent plants from a field of 200 to produce the next generation. Calculate the percentage selected and the number rejected.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "%" },
              { label: "b", answer: 180, unit: "plants" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Selection calculation", statement: "Selected percentage = selected / total x 100." },
            ],
            steps: [
              { reasoning: "Calculate the selected percentage.", working: "20/200 = 0.10", marks: 1, markCode: "M" },
              { reasoning: "Calculate the rejected number.", working: "200 - 20 = 180", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10%; (b) 180 plants",
            commonErrors: ["Giving 20 as the rejected number instead of subtracting from 200."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sequence best summarises natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variation → selection pressure → differential survival → allele frequency change" },
              { id: "b", text: "Need → mutation → immediate adaptation" },
              { id: "c", text: "Population → all individuals identical" },
              { id: "d", text: "Predator → prey changes colour during life" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Variation is filtered by selection, changing allele frequencies." },
            ],
            steps: [
              { reasoning: "Recall the correct sequence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Variation → selection pressure → differential survival → allele frequency change",
            commonErrors: ["Choosing a directed sequence — selection does not make organisms change to fit."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In generation 1, 5% of a bacterial population is antibiotic resistant. After treatment, 40% are resistant. Calculate the percentage-point increase in resistance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 35, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage-point change", statement: "Change = final percentage - initial percentage." },
            ],
            steps: [
              { reasoning: "Subtract the initial percentage from the final percentage.", working: "40 - 5 = 35", marks: 1, markCode: "M" },
              { reasoning: "State the increase with correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35 percentage points",
            commonErrors: ["Calculating a percentage increase instead of percentage-point change."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how geographic isolation can lead to speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Speciation", statement: "Isolation → divergent selection → reproductive isolation → new species." },
            ],
            steps: [
              { reasoning: "A barrier separates the population.", marks: 1, markCode: "M" },
              { reasoning: "Different selection pressures cause divergence.", marks: 1, markCode: "M" },
              { reasoning: "Groups can no longer interbreed, forming new species.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A geographic barrier splits a population; each group experiences different selection pressures and evolves separately until they can no longer interbreed, producing new species.",
            commonErrors: ["Saying isolation alone creates species — divergence and reproductive isolation are also needed."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is NOT evidence that natural selection has occurred?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different survival rates between variants" },
              { id: "b", text: "A resistant allele becoming more common over generations" },
              { id: "c", text: "A population shifting towards a better-adapted phenotype" },
              { id: "d", text: "An individual building stronger muscles during its lifetime" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Selection evidence", statement: "Selection changes allele frequencies in populations, not acquired traits." },
            ],
            steps: [
              { reasoning: "Identify the option not inherited or population-level.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** An individual building stronger muscles during its lifetime",
            commonErrors: ["Choosing a population change — that is evidence for selection."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In biology, 'survival of the fittest' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every organism eventually adapts" },
              { id: "b", text: "The best-adapted variants survive and reproduce most" },
              { id: "c", text: "Predators always win" },
              { id: "d", text: "The strongest individual always survives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fitness", statement: "Reproductive success in a given environment." },
            ],
            steps: [
              { reasoning: "Recall the precise meaning of fitness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The best-adapted variants survive and reproduce most",
            commonErrors: ["Equating fitness with strength — fitness depends on reproduction and adaptation."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are characteristics acquired during an organism's lifetime usually not inherited?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always harmful" },
              { id: "b", text: "They do not change the alleles in reproductive cells" },
              { id: "c", text: "All organisms reproduce asexually" },
              { id: "d", text: "Natural selection removes them immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inheritance", statement: "Only genetic changes in gametes are inherited." },
            ],
            steps: [
              { reasoning: "Link inheritance to genes/alleles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They do not change the alleles in reproductive cells",
            commonErrors: ["Saying acquired traits are never useful — the point is they are not inherited."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a population of 250 finches, 50 have short beaks unsuitable for hard seeds. After a drought, the population falls to 200 and only 25 short-beaked finches remain. Calculate the percentage of short-beaked finches before and after the drought.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "%" },
              { label: "b", answer: 12.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole x 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage before the drought.", working: "50/250 = 0.20", marks: 1, markCode: "M" },
              { reasoning: "Calculate the percentage after the drought.", working: "25/200 = 0.125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20%; (b) 12.5%",
            commonErrors: ["Using the original population size for the after-drought percentage."],
          },
        },
        {
          id: "olbio-u10-natural-selection-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain, using a named example, how variation, selection pressure and reproduction can lead to evolution in a population.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution by selection", statement: "Heritable variation is filtered by selection, changing allele frequencies." },
            ],
            steps: [
              { reasoning: "Name a suitable example such as peppered moth or antibiotic-resistant bacteria.", marks: 1, markCode: "M" },
              { reasoning: "Describe the existing variation.", marks: 1, markCode: "M" },
              { reasoning: "Identify the selection pressure.", marks: 1, markCode: "M" },
              { reasoning: "Explain differential survival or reproduction.", marks: 1, markCode: "M" },
              { reasoning: "State the change in allele frequency.", marks: 1, markCode: "M" },
              { reasoning: "Conclude that the population has evolved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "For example, dark peppered moths varied from light ones; pollution darkened trees so predators took more light moths; dark moths survived and bred more; dark allele frequency rose — the population evolved.",
            commonErrors: ["Describing individual change rather than population-level allele frequency change."],
          },
        },
      ],
    },
    {
      id: "olbio-u10-evidence",
      title: "Evidence for evolution",
      skill: "Describe evidence for evolution: fossils, selective breeding, and homologous structures.",
      lesson: {
        sections: [
          {
            heading: "Fossils",
            body: "Preserved remains show organisms changed over millions of years. Transitional fossils show intermediate forms. Rock layers give relative dates; radioactive dating gives absolute ages.",
          },
          {
            heading: "Selective breeding",
            body: "Humans have produced dramatic changes in domestic animals/crops (dogs, wheat) — proves artificial selection can change species rapidly.",
          },
          {
            heading: "Other evidence",
            body: "- **Homologous structures**: similar anatomy (limb bones) → common ancestry.\n- **DNA similarities**: closely related species have similar DNA.\n- **Biogeography**: species on islands resemble nearest mainland species.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do fossils provide evidence for evolution?",
          solution: "They show a sequence of forms over geological time, with simpler/older forms differing from complex/recent ones — demonstrating change.",
        },
      },
      questions: [
        {
          id: "olbio-u10-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is evidence for evolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All organisms looking identical" },
              { id: "b", text: "Fossils showing change over time" },
              { id: "c", text: "Species never changing" },
              { id: "d", text: "Individual adaptation during life" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, selective breeding, homologous structures, DNA." },
            ],
            steps: [
              { reasoning: "Recall evidence type.", working: "\\text{fossils}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Fossils showing change over time",
            commonErrors: ["Choosing 'individual adaptation' — that's not inherited."],
          },
        },
        {
          id: "olbio-u10-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two pieces of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, selective breeding, homologous structures, DNA similarities." },
            ],
            steps: [
              { reasoning: "Give two types.", working: "\\text{fossils, breeding, homologous, DNA}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fossils showing change over time, selective breeding producing new varieties, homologous structures, or DNA similarities.",
            commonErrors: ["Listing 'organisms trying to adapt' — not evidence."],
          },
        },
        {
          id: "olbio-u10-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how selective breeding provides evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective breeding", statement: "Artificial selection mimics natural selection; produces rapid change." },
            ],
            steps: [
              { reasoning: "Humans select for desired traits.", working: "\\text{select desired traits}", marks: 1, markCode: "M" },
              { reasoning: "Over generations, traits become exaggerated.", working: "\\text{exaggerated traits}", marks: 1, markCode: "M" },
              { reasoning: "Same mechanism as natural selection but faster.", working: "\\text{same mechanism}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: proves selection can change populations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Selective breeding applies the same selection principle as natural selection but faster — humans choose which organisms reproduce, producing dramatic changes (e.g. dog breeds) that demonstrate evolution is possible.",
            commonErrors: ["Saying 'it's not natural so doesn't count' — it demonstrates the mechanism."],
          },
        },
        {
          id: "olbio-u10-evidence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe three types of evidence for evolution.",
          parts: [
            { label: "a", prompt: "Describe fossil evidence.", marks: 3 },
            { label: "b", prompt: "Describe selective breeding evidence.", marks: 3 },
            { label: "c", prompt: "Describe homologous structure evidence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, artificial selection, homologous/DNA evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Fossils in rock layers show sequence.", working: "\\text{rock layers}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Older = simpler, recent = complex.", working: "\\text{simple to complex}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Transitional forms exist.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Humans select desired traits.", working: "\\text{select traits}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rapid change over generations.", working: "\\text{rapid change}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shows selection mechanism works.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Similar bone structure in different species.", working: "\\text{similar bones}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Suggests common ancestor.", working: "\\text{common ancestor}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Despite different functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fossils in layers show change (b) selective breeding shows rapid change (c) homologous structures → common ancestor",
            commonErrors: ["In (c) describing analogous structures — those are similar function, different origin."],
          },
        },
        {
          id: "olbio-u10-evidence-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which provides direct evidence that species have changed over geological time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual animals growing larger" },
              { id: "b", text: "The number of living species today" },
              { id: "c", text: "Current geographical distribution only" },
              { id: "d", text: "Fossils in different rock layers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fossil evidence", statement: "Rock layers preserve a sequence of past forms." },
            ],
            steps: [
              { reasoning: "Recall the direct historical evidence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Fossils in different rock layers",
            commonErrors: ["Choosing present-day distribution — it supports but is less direct than fossils."],
          },
        },
        {
          id: "olbio-u10-evidence-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two fossils are dated 300 million and 150 million years old. Calculate the difference in age.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150, unit: "million years" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Age difference", statement: "Difference = older age - younger age." },
            ],
            steps: [
              { reasoning: "Subtract the younger age from the older age.", working: "300 - 150 = 150", marks: 1, markCode: "M" },
            ],
            finalAnswer: "150 million years",
            commonErrors: ["Adding the ages instead of subtracting."],
          },
        },
        {
          id: "olbio-u10-evidence-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Selective breeding is useful evidence for evolution because it shows that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only crops can evolve" },
              { id: "b", text: "Species cannot change naturally" },
              { id: "c", text: "All variation is caused by humans" },
              { id: "d", text: "Humans can rapidly change populations by selecting parents" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective breeding", statement: "Artificial selection produces rapid heritable change." },
            ],
            steps: [
              { reasoning: "Link selective breeding to the selection mechanism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Humans can rapidly change populations by selecting parents",
            commonErrors: ["Saying it proves only artificial evolution — it demonstrates the same mechanism."],
          },
        },
        {
          id: "olbio-u10-evidence-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A breeding programme starts with 100 puppies; 10 are selected for a desired trait. Five generations later, 40 offspring all show the trait. Calculate the percentage selected initially and the percentage of offspring showing the trait.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "%" },
              { label: "b", answer: 100, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole x 100." },
            ],
            steps: [
              { reasoning: "Calculate the initial selection percentage.", working: "10/100 = 0.10", marks: 1, markCode: "M" },
              { reasoning: "Calculate the final offspring percentage.", working: "40/40 = 1.00", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10%; (b) 100%",
            commonErrors: ["Using 40/100 for part (b) instead of the stated offspring group of 40."],
          },
        },
        {
          id: "olbio-u10-evidence-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homologous structures are evidence for evolution because they are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structures with the same function but different origins" },
              { id: "b", text: "Only ever found inside fossils" },
              { id: "c", text: "Similar in basic structure but may have different functions" },
              { id: "d", text: "Identical in every detail across all species" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous structures", statement: "Similar anatomy suggesting common ancestry despite different functions." },
            ],
            steps: [
              { reasoning: "Recall the defining feature of homologous structures.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Similar in basic structure but may have different functions",
            commonErrors: ["Choosing 'same function, different origins' — that describes analogous structures."],
          },
        },
        {
          id: "olbio-u10-evidence-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wheat breeding programme starts with 800 plants; 40 are selected to produce the next generation. Calculate the percentage selected and the number rejected.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "%" },
              { label: "b", answer: 760, unit: "plants" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Selection calculation", statement: "Selected percentage = selected / total x 100." },
            ],
            steps: [
              { reasoning: "Calculate the selected percentage.", working: "40/800 = 0.05", marks: 1, markCode: "M" },
              { reasoning: "Calculate the rejected number.", working: "800 - 40 = 760", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5%; (b) 760 plants",
            commonErrors: ["Giving 40 as the rejected number instead of subtracting from 800."],
          },
        },
        {
          id: "olbio-u10-evidence-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how fossils provide evidence that species have changed over geological time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fossil evidence", statement: "Rock layers preserve a sequence of forms from simple/old to complex/recent." },
            ],
            steps: [
              { reasoning: "Fossils are preserved in rock layers of different ages.", working: "\\text{rock layers}", marks: 1, markCode: "M" },
              { reasoning: "Older layers contain simpler/earlier forms.", working: "\\text{older = simpler}", marks: 1, markCode: "M" },
              { reasoning: "Younger layers contain more complex/recent forms.", working: "\\text{younger = complex}", marks: 1, markCode: "M" },
              { reasoning: "The sequence shows change over time — evidence for evolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fossils preserved in rock layers form a sequence: older layers hold simpler forms and younger layers hold more complex forms, showing that species have changed over geological time.",
            commonErrors: ["Saying fossils prove species are 'becoming better' — they show change, not progress towards a goal."],
          },
        },
        {
          id: "olbio-u10-evidence-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is NOT evidence for evolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An individual bird growing a stronger beak during its lifetime" },
              { id: "b", text: "Similar DNA sequences in closely related species" },
              { id: "c", text: "Similar limb bone structure in whales, bats and humans" },
              { id: "d", text: "A sequence of fossils in different rock layers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Evidence is population/species-level and heritable — acquired traits are not evidence." },
            ],
            steps: [
              { reasoning: "Identify the option that is neither heritable nor population-level.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** An individual bird growing a stronger beak during its lifetime",
            commonErrors: ["Choosing a population-level change — that IS evidence for evolution."],
          },
        },
        {
          id: "olbio-u10-evidence-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three fossils are dated 80, 200 and 350 million years old. Calculate the range of their ages.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 270, unit: "million years" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Range", statement: "Range = oldest age - youngest age." },
            ],
            steps: [
              { reasoning: "Subtract the youngest age from the oldest age.", working: "350 - 80 = 270", marks: 1, markCode: "M" },
              { reasoning: "State the answer with correct units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "270 million years",
            commonErrors: ["Adding the ages or subtracting in the wrong order."],
          },
        },
        {
          id: "olbio-u10-evidence-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how similarities in DNA between species provide evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "DNA evidence", statement: "Closely related species share more DNA because it is inherited from a common ancestor." },
            ],
            steps: [
              { reasoning: "DNA is passed from parents to offspring and changes by mutation.", working: "\\text{inherited DNA}", marks: 1, markCode: "M" },
              { reasoning: "Species descending from a common ancestor share similar DNA sequences.", working: "\\text{similar DNA}", marks: 1, markCode: "M" },
              { reasoning: "The more closely related the species, the more similar their DNA.", working: "\\text{related = similar}", marks: 1, markCode: "M" },
              { reasoning: "This supports common ancestry and evolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Species inherit DNA from ancestors; closely related species share more similar DNA sequences, while more distant relatives differ more, supporting descent from common ancestors.",
            commonErrors: ["Saying identical DNA proves species are the same — related species have similar, not identical, DNA."],
          },
        },
        {
          id: "olbio-u10-evidence-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A transitional fossil is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fossil showing intermediate features between two groups" },
              { id: "b", text: "The oldest known fossil of a species" },
              { id: "c", text: "A fossil formed during a volcanic eruption" },
              { id: "d", text: "A fossil found halfway between two continents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transitional fossil", statement: "Shows intermediate features linking ancestor and descendant groups." },
            ],
            steps: [
              { reasoning: "Recall the meaning of transitional.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A fossil showing intermediate features between two groups",
            commonErrors: ["Choosing 'oldest fossil' — transitional refers to intermediate form, not age."],
          },
        },
        {
          id: "olbio-u10-evidence-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A palaeontologist finds that whales, bats and humans all have limb bones arranged in the same basic pattern, although the limbs are used for swimming, flying and grasping.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Homologous structures", statement: "Same basic anatomy, different functions → common ancestor with divergent evolution." },
            ],
            steps: [
              { reasoning: "Identify the bones as homologous structures.", working: "\\text{homologous}", marks: 1, markCode: "M" },
              { reasoning: "Same basic plan despite different functions.", working: "\\text{same plan}", marks: 1, markCode: "M" },
              { reasoning: "Suggests inheritance from a common ancestor.", working: "\\text{common ancestor}", marks: 1, markCode: "M" },
              { reasoning: "Differences arose through divergent evolution/adaptation to different environments.", working: "\\text{divergent evolution}", marks: 1, markCode: "M" },
              { reasoning: "Conclude this is evidence for evolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The similar limb bones are homologous structures: the same basic plan adapted for different functions, indicating descent from a common ancestor — evidence for evolution.",
            commonErrors: ["Claiming the structures evolved separately because they look alike — convergence gives analogous, not homologous, structures."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u10-evolution-notes",
      title: "Natural selection and evidence — revision notes",
      summary: "Natural selection mechanism, adaptation, evidence for evolution.",
      sections: [
        {
          heading: "Natural selection",
          body: "Variation → selection pressure → best adapted survive/reproduce → advantageous alleles increase → evolution. Examples: antibiotic resistance, peppered moth, Darwin's finches.",
        },
        {
          heading: "Evidence",
          body: "Fossils (sequence in rock layers), selective breeding (rapid change), homologous structures (common ancestor), DNA similarities.",
        },
        {
          heading: "Exam technique",
          body: "- Selection acts on VARIATION, not on individuals changing.\n- Adaptation must be INHERITED.\n- Speciation: isolation → separate evolution → can't interbreed.",
        },
      ],
    },
  ],
};

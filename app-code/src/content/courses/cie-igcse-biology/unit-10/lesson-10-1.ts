import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "cieb-u10-lesson-10-1",
  code: "10-1",
  title: "Natural Selection and Evolution",
  goal: "I CAN explain natural selection, adaptation, and evidence for evolution.",
  standards: ["0653 10.1", "0653 10.2"],
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
      id: "cieb-u10-natural-selection",
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
          id: "cieb-u10-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection acts on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Variation within a population" },
              { id: "b", text: "Individual organisms changing during their lifetime" },
              { id: "c", text: "Species deciding to adapt" },
              { id: "d", text: "The environment becoming stronger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Natural selection", statement: "Acts on existing variation in a population." },
            ],
            steps: [
              { reasoning: "Recall what selection acts on.", working: "\\text{variation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Variation within a population",
            commonErrors: ["Choosing 'individuals change' — acquired characteristics are NOT inherited (Lamarck's error)."],
          },
        },
        {
          id: "cieb-u10-natural-selection-q2",
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
          id: "cieb-u10-natural-selection-q3",
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
          id: "cieb-u10-natural-selection-q4",
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
      ],
    },
    {
      id: "cieb-u10-evidence",
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
          id: "cieb-u10-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is evidence for evolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fossils showing change over time" },
              { id: "b", text: "All organisms looking identical" },
              { id: "c", text: "Species never changing" },
              { id: "d", text: "Individual adaptation during life" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Evolution evidence", statement: "Fossils, selective breeding, homologous structures, DNA." },
            ],
            steps: [
              { reasoning: "Recall evidence type.", working: "\\text{fossils}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fossils showing change over time",
            commonErrors: ["Choosing 'individual adaptation' — that's not inherited."],
          },
        },
        {
          id: "cieb-u10-evidence-q2",
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
          id: "cieb-u10-evidence-q3",
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
          id: "cieb-u10-evidence-q4",
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
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u10-evolution-notes",
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

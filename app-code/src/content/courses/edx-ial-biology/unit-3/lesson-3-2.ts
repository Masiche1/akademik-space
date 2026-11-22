import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edialbio-u3-lesson-3-2",
  code: "3-2",
  title: "Evolution by Natural Selection",
  goal: "I CAN explain natural selection, speciation and evidence for evolution.",
  standards: ["IB3 Biodiversity, evolution and disease", "Evolution"],
  vocabulary: [
    { term: "Natural selection", definition: "Differential survival/reproduction of individuals with advantageous traits." },
    { term: "Adaptation", definition: "Inherited feature improving survival/reproduction in environment." },
    { term: "Speciation", definition: "Formation of new species from existing ones." },
    { term: "Genetic drift", definition: "Random change in allele frequencies, important in small populations." },
  ],
  concepts: [
    {
      id: "edialbio-u3-selection",
      title: "Natural selection and adaptation",
      skill: "Explain how natural selection leads to adaptation and microevolution.",
      lesson: {
        sections: [
          {
            heading: "Mechanism",
            body: "1) Variation exists in populations (mutations, recombination). 2) Some variants better adapted → survive/reproduce more. 3) Advantageous alleles increase in frequency. 4) Over generations population changes. Classic example: Darwin's finches — beak shape adapted to food source.",
          },
          {
            heading: "Types of selection",
            body: "Directional: favours one extreme (peppered moth darkening). Stabilising: favours intermediate (human birth weight). Disruptive: favours both extremes. Artificial selection: humans select traits (crop breeding, dog breeds).",
          },
          {
            heading: "Evidence",
            body: "Fossil record (gradual change), comparative anatomy (homologous structures — same origin different function; analogous — same function different origin), embryology (shared development), molecular biology (DNA/protein similarity).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how antibiotic resistance evolves in bacteria.",
          solution: "Mutation creates resistant variant; antibiotic kills susceptible bacteria; resistant survive and reproduce; allele frequency rises → population becomes resistant.",
        },
      },
      questions: [
        {
          id: "edialbio-evo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection acts on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Populations over generations" },
              { id: "b", text: "Individual organisms directly" },
              { id: "c", text: "Species intentionally" },
              { id: "d", text: "Ecosystems" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural selection", statement: "Allele frequency changes in populations." }],
            steps: [{ reasoning: "Individuals don't evolve; populations do.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Populations",
          },
        },
        {
          id: "edialbio-evo-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "State the four steps of natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Natural selection", statement: "Variation→selection→inheritance→change." }],
            steps: [
              { reasoning: "Variation exists in population.", marks: 1, markCode: "A" },
              { reasoning: "Differential survival/reproduction (selection).", marks: 1, markCode: "A" },
              { reasoning: "Advantageous traits inherited by offspring.", marks: 1, markCode: "A" },
              { reasoning: "Allele frequencies change over generations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variation, selection, inheritance, change",
            commonErrors: ["Saying individuals evolve."],
          },
        },
        {
          id: "edialbio-evo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between homologous and analogous structures with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Homologous/analogous", statement: "Same origin vs same function." }],
            steps: [
              { reasoning: "Homologous: same evolutionary origin, different function (whale flipper, bat wing, human arm).", marks: 1, markCode: "M" },
              { reasoning: "Analogous: same function, different origin (insect wing, bird wing, bat wing).", marks: 1, markCode: "M" },
              { reasoning: "Homologous = evidence of common ancestry.", marks: 1, markCode: "A" },
              { reasoning: "Analogous = convergent evolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Homologous: same origin; analogous: convergent",
            commonErrors: ["Reversing examples."],
          },
        },
        {
          id: "edialbio-evo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe Darwin's theory of evolution by natural selection.",
          parts: [
            { label: "a", prompt: "Variation and inheritance.", marks: 3 },
            { label: "b", prompt: "Struggle for existence and selection.", marks: 4 },
            { label: "c", prompt: "Descent with modification.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Darwin", statement: "Variation + selection + inheritance = evolution." }],
            steps: [
              { part: "a", reasoning: "Individuals in population show variation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Variation is inherited (passed to offspring).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Variation arises randomly (Darwin didn't know genetics).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More offspring produced than can survive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Struggle for existence — competition for resources.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Those better adapted survive and reproduce more.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Less adapted eliminated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Over many generations advantageous traits accumulate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Populations change → descent with modification.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Can lead to new species.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Variation + selection + inheritance → descent with modification",
            commonErrors: ["Saying organisms try to adapt."],
          },
        },
      ],
    },
    {
      id: "edialbio-u3-speciation",
      title: "Speciation and genetic drift",
      skill: "Explain allopatric and sympatric speciation and the role of genetic drift.",
      lesson: {
        sections: [
          {
            heading: "Allopatric speciation",
            body: "Geographic barrier separates population → no gene flow → different selection pressures → populations diverge → reproductive isolation → new species. Example: Darwin's finches on Galápagos islands.",
          },
          {
            heading: "Sympatric speciation",
            body: "No geographic barrier — occurs in same area. Mechanisms: polyploidy (extra chromosome sets — common in plants), behavioural isolation (different mating calls/times), ecological niche specialisation.",
          },
          {
            heading: "Genetic drift",
            body: "Random change in allele frequencies due to chance events — bottleneck effect (population crash) and founder effect (small group establishes new population). More significant in small populations; can reduce genetic diversity.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain how a volcanic eruption could cause genetic drift.",
          solution: "Bottleneck: eruption kills most population → survivors' allele frequencies may differ from original → drift.",
        },
      },
      questions: [
        {
          id: "edialbio-spec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Allopatric speciation requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large population" },
              { id: "b", text: "Polyploidy" },
              { id: "c", text: "Different mating calls" },
              { id: "d", text: "Geographic isolation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allopatric", statement: "Geographic barrier separates." }],
            steps: [{ reasoning: "allo = other place.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Geographic isolation",
          },
        },
        {
          id: "edialbio-spec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the founder effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Founder effect", statement: "Small group → new population → allele frequencies change." }],
            steps: [
              { reasoning: "Small number of individuals colonise new area.", marks: 1, markCode: "M" },
              { reasoning: "Their allele frequencies may differ from source population.", marks: 1, markCode: "M" },
              { reasoning: "New population has reduced genetic diversity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Small founding group → different allele frequencies",
            commonErrors: ["Confusing with bottleneck."],
          },
        },
        {
          id: "edialbio-spec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how polyploidy can cause speciation in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Polyploidy", statement: "Extra chromosome sets → instant isolation." }],
            steps: [
              { reasoning: "Mutation produces gamete with extra chromosome set (e.g. 3n instead of 2n).", marks: 1, markCode: "M" },
              { reasoning: "When two polyploid gametes fuse → tetraploid (4n) offspring.", marks: 1, markCode: "M" },
              { reasoning: "Tetraploid can't breed with diploid parent (sterile offspring).", marks: 1, markCode: "A" },
              { reasoning: "Instant reproductive isolation → new species.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polyploid → can't interbreed with parent → instant speciation",
            commonErrors: ["Saying it needs geographic isolation."],
          },
        },
        {
          id: "edialbio-spec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare allopatric and sympatric speciation.",
          parts: [
            { label: "a", prompt: "Define each.", marks: 3 },
            { label: "b", prompt: "Give one mechanism/example for each.", marks: 4 },
            { label: "c", prompt: "State which is more common and why.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Allopatric vs sympatric", statement: "Geographic vs same-area." }],
            steps: [
              { part: "a", reasoning: "Allopatric: geographic barrier separates populations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sympatric: speciation without geographic isolation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both require reproductive isolation eventually.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Allopatric example: Darwin's finches on islands.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Allopatric mechanism: different selection → divergence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sympatric example: polyploid plants.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sympatric mechanism: instant isolation via chromosome doubling.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Allopatric more common in animals.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sympatric more common in plants (polyploidy).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Geographic isolation easier to achieve.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Allopatric: geographic; sympatric: same area (polyploidy)",
            commonErrors: ["Saying sympatric needs isolation."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ebi11-u4-lesson-4-3",
  code: "4-3",
  title: "Investigating Ecology and Evolution",
  goal: "I CAN study ecosystems, populations and evidence for evolution.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Population density",
      definition: "Number of individuals per unit area.",
    },
    {
      term: "Mark-release-recapture",
      definition: "Estimating population size by marking and recapturing.",
    },
    {
      term: "Natural selection",
      definition: "Survival of best-adapted individuals.",
    },
    {
      term: "Selective breeding",
      definition: "Humans choosing parents for desired traits.",
    },
  ],
  concepts: [
    {
      id: "ebi11-u4-population",
      title: "Estimating Populations",
      skill:
        "Use mark-release-recapture and quadrat methods to estimate populations.",
      lesson: {
        sections: [
          {
            heading: "Mark-release-recapture",
            body: "**Method**: capture sample → mark (non-harmful) → release → recapture after mixing time → count marked vs unmarked. **Lincoln Index**: N = (n1 × n2) ÷ m where n1 = first capture, n2 = second capture, m = marked recaptured.\n\n**Assumptions**: marked don't die/lose marks, population closed (no migration), mixing complete, marks don't affect survival. **Errors**: immigration/emigration, predation of marked, incomplete mixing.",
          },
          {
            heading: "Quadrats and transects",
            body: "**Quadrat**: count species in fixed area — calculate density. **Transect**: systematic sampling along line — shows distribution patterns. **Sample size**: enough to represent habitat — more quadrats = more reliable.\n\n**Biodiversity**: Simpson's index combines richness + evenness. **Comparisons**: same method both sites for fair comparison.",
          },
        ],
        keyFormulas: [
          {
            name: "Lincoln Index",
            statement:
              "N = (first capture × second capture) ÷ marked recaptured.",
          },
          {
            name: "Simpson's index",
            statement: "D = Σ(n/N)² — lower = more diverse.",
          },
        ],
        workedExample: {
          problem:
            "Capture 100, mark 20, release. Recapture 80, of which 10 marked. Population?",
          solution: "N = (100 × 80) ÷ 10 = 800.",
        },
      },
      questions: [
        {
          id: "ebi11-u4-population-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does mark-release-recapture estimate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birth rate" },
              { id: "b", text: "Population size" },
              { id: "c", text: "Species richness" },
              { id: "d", text: "Lifespan" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mark-release-recapture",
                statement: "Estimates population size.",
              },
            ],
            steps: [
              {
                reasoning: "Estimates population size.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Population size",
            commonErrors: ["Richness confused."],
          },
        },
        {
          id: "ebi11-u4-population-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two assumptions of mark-release-recapture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MRC assumptions",
                statement:
                  "Closed population, marks don't affect survival, complete mixing.",
              },
            ],
            steps: [
              {
                reasoning: "Population closed — no migration.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Marks don't affect survival/reproduction.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Complete mixing before recapture.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Closed population, marks harmless, complete mixing — any two.",
            commonErrors: [
              "Random sampling assumed.",
              "No assumptions listed.",
            ],
          },
        },
        {
          id: "ebi11-u4-population-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A marked fish population estimate is much higher than expected. Suggest two possible errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MRC errors",
                statement:
                  "Migration, predation, marking loss, incomplete mixing.",
              },
            ],
            steps: [
              {
                reasoning: "Immigration — new unmarked fish arrived.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Marked fish died — fewer recaptured → higher estimate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Marks lost — marked fish counted as unmarked.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Incomplete mixing — marked clustered.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Immigration, marked deaths/loss, incomplete mixing — any two.",
            commonErrors: ["Method perfect assumed.", "No specific errors."],
          },
        },
        {
          id: "ebi11-u4-population-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Establishing a population estimate for woodlice in a garden.",
          parts: [
            { label: "a", prompt: "Choose and justify a method.", marks: 3 },
            { label: "b", prompt: "Describe the procedure.", marks: 3 },
            { label: "c", prompt: "State one limitation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population estimation",
                statement: "Mark-release-recapture or quadrat density × area.",
              },
            ],
            steps: [
              {
                reasoning: "(a) MRC for mobile animals; quadrats for sessile.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Justify: woodlice mobile → MRC suitable.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning:
                  "(b) Capture, mark, release, wait, recapture, apply Lincoln Index.",
                marks: 3,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Woodlice hide — incomplete capture; marks may be lost.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) MRC for mobile woodlice (b) mark-release-recapture-Lincoln (c) hiding/mark loss",
            commonErrors: ["Wrong method.", "No limitation."],
          },
        },
      ],
    },
    {
      id: "ebi11-u4-evolution",
      title: "Investigating Evidence for Evolution",
      skill:
        "Study natural selection, selective breeding and evolutionary evidence.",
      lesson: {
        sections: [
          {
            heading: "Natural selection evidence",
            body: "**Peppered moths**: dark morphs increased during industrial revolution (soot-darkened trees) — predation by birds selected for camouflage. **Antibiotic resistance**: bacteria evolve resistance — natural selection in action. **Darwin's finches**: beak shapes adapted to food sources on Galápagos.\n\n**Fossils**: show gradual change over millions of years — transitional forms. **Comparative anatomy**: homologous structures (same bones, different function) suggest common ancestry. **DNA**: molecular evidence — similar genes = related species.",
          },
          {
            heading: "Selective breeding",
            body: "**Method**: choose parents with desired traits → offspring inherit → repeat over generations. **Examples**: dog breeds (size, coat), crop varieties (yield, disease resistance), livestock (milk production).\n\n**Advantages**: faster improvement, targeted traits. **Disadvantages**: reduced genetic diversity → vulnerability to disease, health problems from extreme traits (e.g., bulldog breathing). **Ethics**: animal welfare concerns.",
          },
        ],
        keyFormulas: [
          {
            name: "Natural selection",
            statement:
              "Variation → selection pressure → best adapted survive → pass traits on.",
          },
          {
            name: "Selective breeding",
            statement:
              "Humans choose parents for desired traits — faster than natural.",
          },
        ],
        workedExample: {
          problem:
            "Why did dark peppered moths increase during industrial revolution?",
          solution:
            "Soot darkened trees → dark moths camouflaged better → survived bird predation → population increased.",
        },
      },
      questions: [
        {
          id: "ebi11-u4-evolution-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random mutations" },
              { id: "b", text: "Species extinction" },
              { id: "c", text: "Humans choosing traits" },
              { id: "d", text: "Best-adapted survive and reproduce" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement: "Best-adapted individuals survive and pass traits.",
              },
            ],
            steps: [
              {
                reasoning: "Best-adapted survive/reproduce.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Best-adapted survive",
            commonErrors: ["Selective breeding confused."],
          },
        },
        {
          id: "ebi11-u4-evolution-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two pieces of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evolution evidence",
                statement: "Fossils, comparative anatomy, DNA similarities.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil record shows gradual change.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Homologous structures suggest common ancestry.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "DNA/molecular similarities confirm relationships.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Fossils, homologous structures, DNA similarities — any two.",
            commonErrors: ["Only fossils.", "No evidence types."],
          },
        },
        {
          id: "ebi11-u4-evolution-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why antibiotic resistance is an example of natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antibiotic resistance",
                statement:
                  "Resistant bacteria survive treatment → multiply → population resistant.",
              },
            ],
            steps: [
              {
                reasoning: "Random mutation creates resistance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Antibiotic kills susceptible, resistant survive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Resistant bacteria reproduce → population changes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Over time population becomes resistant.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Antibiotic selects for resistant bacteria — they survive and multiply → population evolves resistance.",
            commonErrors: ["Bacteria 'learn'.", "No selection mechanism."],
          },
        },
        {
          id: "ebi11-u4-evolution-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A farmer wants to breed chickens for higher egg production.",
          parts: [
            {
              label: "a",
              prompt: "Describe the selective breeding method.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give two advantages and two disadvantages.",
              marks: 3,
            },
            { label: "c", prompt: "Suggest one ethical concern.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Selective breeding",
                statement:
                  "Choose high producers as parents → repeat over generations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Identify high-producing hens, breed them.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Select offspring with best traits, repeat.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Over generations, trait improves.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Advantages: faster improvement, targeted traits.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Disadvantages: reduced diversity, health issues.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Two of each needed.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Animal welfare — extreme traits cause suffering.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) select high producers, repeat generations (b) faster/targeted vs diversity/health (c) welfare concerns",
            commonErrors: ["Natural selection confused.", "No ethics."],
          },
        },
      ],
    },
  ],
};

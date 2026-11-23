import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "s8-u8-lesson-8-3",
  code: "8-3",
  title: "Applied Evolution: Antibiotic Resistance and Conservation",
  goal: "I CAN explain antibiotic resistance as evolution in action and describe how conservation biology applies evolutionary principles.",
  standards: [
    "MS-LS4-4",
    "MS-LS4-6",
    "SEP: Engaging in Argument from Evidence",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Antibiotic resistance",
      definition: "Bacteria's ability to survive antibiotic treatment.",
    },
    {
      term: "Natural selection",
      definition: "Process driving resistance evolution.",
    },
    {
      term: "Conservation biology",
      definition:
        "Field protecting biodiversity using evolutionary principles.",
    },
    {
      term: "Genetic diversity",
      definition: "Variation in gene pool — critical for population survival.",
    },
    {
      term: "Inbreeding depression",
      definition: "Reduced fitness from breeding closely related individuals.",
    },
    {
      term: "Bottleneck effect",
      definition: "Population reduction → loss of genetic diversity.",
    },
    {
      term: "Founder effect",
      definition:
        "New population from few individuals → limited genetic diversity.",
    },
  ],
  concepts: [
    {
      id: "s8-u8-antibiotic-resistance",
      title: "Antibiotic resistance",
      skill: "Explain how antibiotic resistance evolves and its implications.",
      lesson: {
        sections: [
          {
            heading: "Resistance evolution",
            body: "Antibiotic resistance is natural selection in action:\n\n1. **Variation**: some bacteria have resistance genes (random mutation).\n2. **Selection pressure**: antibiotic kills susceptible bacteria.\n3. **Differential survival**: resistant bacteria survive.\n4. **Reproduction**: resistant bacteria multiply → resistance spreads.",
          },
          {
            heading: "Implications",
            body: "- Overuse of antibiotics accelerates resistance.\n- Resistant infections are harder to treat.\n- Need for new antibiotics and better stewardship.\n- Vaccines and hygiene reduce need for antibiotics.",
          },
        ],
        keyFormulas: [
          {
            name: "Resistance mechanism",
            statement: "Mutation → selection → survival → spread.",
          },
          {
            name: "Selection pressure",
            statement: "Antibiotic use favors resistant bacteria.",
          },
          {
            name: "Stewardship",
            statement: "Proper antibiotic use slows resistance.",
          },
        ],
        workedExample: {
          problem: "Why do doctors tell patients to finish antibiotic courses?",
          solution:
            "Incomplete courses leave resistant bacteria that can multiply.",
        },
      },
      questions: [
        {
          id: "s8-u8-resistance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is antibiotic resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bacteria becoming stronger" },
              { id: "b", text: "Bacteria surviving antibiotics" },
              { id: "c", text: "Antibiotics becoming weaker" },
              { id: "d", text: "Patient immunity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antibiotic resistance",
                statement:
                  "Bacteria's ability to survive antibiotic treatment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resistance = bacteria survive antibiotics that would normally kill them.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Bacteria surviving antibiotics.",
            commonErrors: ["Choosing (c): antibiotics don't change."],
          },
        },
        {
          id: "s8-u8-resistance-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how antibiotic resistance evolves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Resistance evolution",
                statement: "Natural selection favors resistant bacteria.",
              },
            ],
            steps: [
              {
                reasoning: "Random mutation creates resistance gene.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Antibiotic kills susceptible bacteria; resistant survive.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Resistant bacteria reproduce → resistance spreads.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mutation → antibiotic selection → resistant survive → spread.",
            commonErrors: ["Saying antibiotic creates resistance."],
          },
        },
        {
          id: "s8-u8-resistance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is overuse of antibiotics a problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Antibiotic stewardship",
                statement: "Overuse accelerates resistance evolution.",
              },
            ],
            steps: [
              {
                reasoning: "More antibiotic use = stronger selection pressure.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Resistant bacteria survive and multiply faster.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Infections become harder to treat.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Need new antibiotics → arms race.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Overuse → stronger selection → faster resistance evolution.",
            commonErrors: ["Saying antibiotics become ineffective."],
          },
        },
        {
          id: "s8-u8-resistance-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A patient stops taking antibiotics after 2 days instead of 10.",
          parts: [
            { label: "a", prompt: "What happens to bacteria?", marks: 3 },
            { label: "b", prompt: "Why is this dangerous?", marks: 2 },
            {
              label: "c",
              prompt: "How does this contribute to resistance?",
              marks: 2,
            },
            { label: "d", prompt: "What should patients do?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Antibiotic stewardship",
                statement: "Complete courses prevent resistance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Some bacteria killed; resistant ones survive and multiply.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Infection may return stronger; resistant bacteria spread.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Incomplete treatment selects for resistant bacteria.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Finish entire prescribed course.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Resistant survive (b) Return stronger (c) Selects for resistance (d) Finish course.",
            commonErrors: ["Saying it's safe to stop early."],
          },
        },
      ],
    },
    {
      id: "s8-u8-conservation",
      title: "Conservation Biology",
      skill:
        "Explain how conservation uses evolutionary principles to protect biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Genetic diversity",
            body: "**Genetic diversity** is critical for population survival:\n\n- More diversity = more adaptability to change.\n- Low diversity = higher extinction risk.\n- **Inbreeding depression**: reduced fitness from related breeding.\n- **Bottleneck effect**: population crash → lost diversity.",
          },
          {
            heading: "Conservation strategies",
            body: "- **Protected areas**: preserve habitats and gene pools.\n- **Captive breeding**: maintain genetic diversity in zoos.\n- **Corridors**: connect populations for gene flow.\n- **Reintroduction**: return species to wild.\n- **Genetic rescue**: introduce new individuals to increase diversity.",
          },
        ],
        keyFormulas: [
          {
            name: "Genetic diversity",
            statement: "More diversity = better adaptability.",
          },
          {
            name: "Bottleneck effect",
            statement: "Population reduction → lost diversity.",
          },
          {
            name: "Conservation strategies",
            statement: "Protected areas, captive breeding, corridors.",
          },
        ],
        workedExample: {
          problem: "Why do conservationists worry about small populations?",
          solution:
            "Small populations lose genetic diversity → less adaptability → higher extinction risk.",
        },
      },
      questions: [
        {
          id: "s8-u8-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is genetic diversity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of species" },
              { id: "b", text: "Variation in gene pool" },
              { id: "c", text: "Geographic spread" },
              { id: "d", text: "Population size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genetic diversity",
                statement: "Variation in alleles within a population.",
              },
            ],
            steps: [
              {
                reasoning: "Genetic diversity = variation in genes/alleles.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Variation in gene pool.",
            commonErrors: ["Choosing (a): that's species diversity."],
          },
        },
        {
          id: "s8-u8-conservation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is genetic diversity important for conservation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Genetic diversity",
                statement: "More diversity = better adaptability.",
              },
            ],
            steps: [
              {
                reasoning: "Diverse populations have more adaptive potential.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Low diversity = higher extinction risk.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Diversity allows populations to survive environmental changes.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "More diversity = better adaptability = lower extinction risk.",
            commonErrors: ["Saying diversity doesn't matter."],
          },
        },
        {
          id: "s8-u8-conservation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the bottleneck effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Bottleneck effect",
                statement: "Population crash → lost genetic diversity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Population dramatically reduced (disaster, overhunting).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Only survivors' genes are represented.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Genetic diversity permanently reduced.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Future populations less adaptable → higher extinction risk.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Population crash → lost diversity → less adaptable.",
            commonErrors: ["Not mentioning permanent loss."],
          },
        },
        {
          id: "s8-u8-conservation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A zoo population of 20 animals is threatened with extinction.",
          parts: [
            {
              label: "a",
              prompt: "What risks does this population face?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What conservation strategies could help?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why is genetic diversity important here?",
              marks: 1,
            },
            { label: "d", prompt: "What is 'genetic rescue'?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conservation",
                statement:
                  "Small populations lose diversity → extinction risk.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Inbreeding, low diversity, disease vulnerability, genetic drift.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Introduce new individuals, captive breeding, genetic rescue.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Diversity = adaptability = survival.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Introducing unrelated individuals to increase diversity.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Inbreeding + low diversity (b) New individuals + breeding (c) Adaptability (d) Genetic rescue.",
            commonErrors: ["Not mentioning genetic diversity."],
          },
        },
      ],
    },
    {
      id: "s8-u8-evolution-synthesis",
      title: "Evolution Synthesis",
      skill:
        "Integrate concepts of evolution, natural selection, and evidence into comprehensive understanding.",
      lesson: {
        sections: [
          {
            heading: "Evolution summary",
            body: "**Evolution** = change in allele frequencies over generations.\n\nKey mechanisms:\n- **Natural selection**: advantageous traits increase in frequency.\n- **Genetic drift**: random changes (especially in small populations).\n- **Gene flow**: movement of alleles between populations.\n- **Mutation**: source of new alleles.",
          },
          {
            heading: "Evidence synthesis",
            body: "Multiple lines of evidence support evolution:\n\n- Fossil record\n- Comparative anatomy\n- Embryology\n- Biogeography\n- Molecular biology\n\nThese independent lines all point to common ancestry and descent with modification.",
          },
        ],
        keyFormulas: [
          {
            name: "Evolution mechanisms",
            statement: "Selection + drift + gene flow + mutation.",
          },
          {
            name: "Evidence",
            statement: "Fossils + anatomy + embryology + biogeography + DNA.",
          },
          {
            name: "Descent with modification",
            statement: "Species change over time from common ancestors.",
          },
        ],
        workedExample: {
          problem: "Summarize how all evidence lines support evolution.",
          solution:
            "Fossils show transitions; anatomy shows homology; DNA shows relatedness — all consistent with common ancestry.",
        },
      },
      questions: [
        {
          id: "s8-u8-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual adaptation" },
              { id: "b", text: "Change in allele frequencies" },
              { id: "c", text: "Speciation only" },
              { id: "d", text: "Environmental change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evolution",
                statement: "Change in allele frequencies over generations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evolution = change in allele frequencies in populations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Change in allele frequencies.",
            commonErrors: ["Choosing (a): individuals don't evolve."],
          },
        },
        {
          id: "s8-u8-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the four mechanisms of evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evolution mechanisms",
                statement: "Selection, drift, gene flow, mutation.",
              },
            ],
            steps: [
              {
                reasoning: "Natural selection: advantageous traits increase.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Genetic drift: random changes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Gene flow + mutation: movement and new alleles.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Selection, drift, gene flow, mutation.",
            commonErrors: ["Missing a mechanism."],
          },
        },
        {
          id: "s8-u8-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how multiple lines of evidence strengthen the case for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evidence synthesis",
                statement: "Independent lines all support common ancestry.",
              },
            ],
            steps: [
              {
                reasoning: "Fossils show transitional forms over time.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Anatomy shows homologous structures across species.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "DNA shows genetic relatedness.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "All lines converge on same conclusion → strong support.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Multiple independent evidence lines all support evolution.",
            commonErrors: ["Saying one line is enough."],
          },
        },
        {
          id: "s8-u8-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an experiment to test whether a trait is an adaptation.",
          parts: [
            { label: "a", prompt: "What hypothesis would you test?", marks: 2 },
            { label: "b", prompt: "What would you measure?", marks: 3 },
            { label: "c", prompt: "How would you test it?", marks: 2 },
            {
              label: "d",
              prompt: "What results would support your hypothesis?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Experimental design",
                statement: "Test if trait increases fitness.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Hypothesis: trait X increases survival/reproduction in environment Y.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Measure survival rates, reproductive success, or competitive advantage.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Compare organisms with/without trait in same environment.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Higher fitness with trait = supports adaptation hypothesis.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Trait increases fitness (b) Survival/reproduction (c) Compare with/without (d) Higher fitness supports.",
            commonErrors: ["Not testing fitness."],
          },
        },
      ],
    },
  ],
};

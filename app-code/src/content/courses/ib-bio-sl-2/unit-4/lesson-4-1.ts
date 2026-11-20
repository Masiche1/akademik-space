import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "biosl-u4-lesson-4-1",
  code: "4-1",
  title: "Natural Selection and Evidence for Evolution",
  goal: "I CAN explain how natural selection changes populations over time and evaluate the fossil, anatomical, biochemical and biogeographical evidence for evolution.",
  standards: ["Topic A.5", "Topic A.5.1", "Paper 1", "Paper 2"],
  vocabulary: [
    {
      term: "Natural selection",
      definition:
        "The process by which individuals with advantageous inherited traits are more likely to survive and reproduce, so those traits become more common in a population.",
    },
    {
      term: "Selective pressure",
      definition:
        "Any environmental factor that affects the survival or reproduction of individuals, such as predation, disease or climate.",
    },
    {
      term: "Adaptation",
      definition:
        "An inherited feature that improves an organism's chance of survival and reproduction in its environment.",
    },
    {
      term: "Fitness",
      definition:
        "The reproductive success of an individual relative to others in the population; not physical strength.",
    },
    {
      term: "Homologous structures",
      definition:
        "Structures in different species that share a common evolutionary origin but may have different functions, e.g. the forelimbs of mammals.",
    },
    {
      term: "Convergent evolution",
      definition:
        "The independent evolution of similar features in unrelated species facing similar selection pressures, e.g. wings in birds and insects.",
    },
  ],
  concepts: [
    {
      id: "biosl-u4-natural-selection",
      title: "The mechanism of natural selection",
      skill:
        "Explain how variation, selection and differential reproduction change allele frequencies in a population.",
      lesson: {
        sections: [
          {
            heading: "Variation and heritability",
            body: "Evolution by natural selection requires three things. First, there must be **variation** in a heritable trait within a population — differences produced by mutation and sexual reproduction. Second, some variants must give a **selective advantage**, improving survival or reproduction in the current environment. Third, the advantage must be **inherited**, so offspring resemble their parents.",
          },
          {
            heading: "Differential survival and reproduction",
            body: "Organisms with advantageous variants leave more offspring, so their alleles increase in frequency over generations while less advantageous alleles decrease. The classic example is the **peppered moth**: before pollution most moths were pale and camouflaged on lichen-covered trees; after soot blackened the trees, darker moths were better camouflaged, were eaten less by birds, and increased from a minority to about 95% of the population. The selective pressure was predation by birds acting on moth colour against the background.",
          },
          {
            heading: "Artificial selection and limits",
            body: "Humans use the same process in **selective breeding**: choosing parents with desired traits produces new varieties of crops and livestock. Natural selection is not directional always — frequencies may fluctuate, and a trait that is advantageous today may become disadvantageous if the environment changes. Natural selection acts on the **phenotype**, but only changes in the **genotype** are inherited.",
          },
        ],
        keyFormulas: [
          {
            name: "Requirements for selection",
            statement:
              "Heritable variation + differential survival/reproduction + change in allele frequencies",
          },
          {
            name: "Fitness",
            statement:
              "Fitness = reproductive success relative to other individuals in the population",
          },
          {
            name: "Peppered moth shift",
            statement:
              "Dark morphs rose from a minority to about 95% of the population after industrial pollution darkened tree trunks",
          },
        ],
        workedExample: {
          problem:
            "In one generation a moth population changed from 800 pale and 200 dark moths to 100 pale and 900 dark moths. Calculate the percentage of dark moths before and after, and state the direction of the change.",
          solution:
            "Before: 200 of 1000 moths = 20% dark. After: 900 of 1000 moths = 90% dark. The frequency of the dark allele increased because dark moths survived predation better on soot-darkened trees.",
        },
      },
      questions: [
        {
          id: "biosl-u4-natural-selection-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In the peppered moth, the proportion of dark-coloured moths increased after industrial pollution blackened tree trunks. What was the main selective pressure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Predation by birds, which could see pale moths more easily on dark trees",
              },
              {
                id: "b",
                text: "Higher temperatures favouring darker pigments",
              },
              { id: "c", text: "The moths choosing darker mates" },
              { id: "d", text: "Reduced availability of lichen as food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selective pressure",
                statement:
                  "An environmental factor that affects survival or reproduction; here it was bird predation acting through camouflage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dark moths were camouflaged on soot-covered bark and survived better; pale moths were eaten more. The pressure is differential predation.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Predation by birds",
            commonErrors: [
              "Assuming the pollution itself selected the moths — it changed the environment, and predation did the selecting.",
            ],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "biosl-u4-natural-selection-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which set of conditions is essential for natural selection to occur in a population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A large population and a stable environment" },
              {
                id: "b",
                text: "Heritable variation in a trait, plus differential survival or reproduction of the variants",
              },
              { id: "c", text: "Mutation and migration only" },
              { id: "d", text: "Competition for mates only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement:
                  "Individuals with advantageous inherited traits leave more offspring, changing allele frequencies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Variation must be heritable so offspring resemble parents.",
                working: "variation must be heritable",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some variants must survive or reproduce better, otherwise frequencies cannot change.",
                working: "differential reproductive success",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Heritable variation plus differential survival or reproduction",
            commonErrors: [
              "Choosing large population size — selection can act on small populations too.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a population of 500 mice, the frequency of a fur-colour allele was 0.40 in year 1 and 0.62 in year 5 after a new predator that hunts by sight was introduced. Which statement best explains this observation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The allele mutated directly into a more common form",
              },
              {
                id: "b",
                text: "Natural selection favoured mice whose colour gave better camouflage, so the allele frequency rose",
              },
              {
                id: "c",
                text: "All mice changed colour during their lifetime",
              },
              { id: "d", text: "Gene flow must have introduced the allele" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evolution is a population change",
                statement:
                  "Evolution is a change in allele frequencies in a population over generations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The allele frequency increased from 0.40 to 0.62, which is a change in the gene pool — evidence of evolution.",
                working: "0.40 → 0.62",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A new selective pressure (predation) favoured better-camouflaged mice, so carriers of the advantageous allele reproduced more.",
                working: "predation selects camouflage",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Acquired characteristics (lifetime colour change) are not inherited, so option (c) cannot explain a population-level change.",
                working: "only inherited traits count",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Natural selection favoured better camouflage and raised the allele frequency",
            commonErrors: [
              "Believing individuals evolve during their lifetime.",
              "Confusing a change in phenotype with a change in allele frequency.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student studies peppered moths on trees in a polluted industrial area. In year 1 she counts 180 pale moths and 20 dark moths. In year 6, after pollution controls have lightened the bark, she counts 150 pale and 50 dark moths in the same area. Assume the total sampled each year represents the local population.",
          parts: [
            {
              label: "a",
              prompt: "State what is meant by the term natural selection.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use the data to calculate the percentage of dark moths in year 1 and in year 6.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the frequency of dark moths changed between the two years.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the student's conclusion that evolution has occurred in this population.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement:
                  "Differential survival and reproduction of individuals with advantageous heritable traits changes allele frequencies.",
              },
              {
                kind: "principle",
                name: "Evolution",
                statement:
                  "Evolution is a change in allele frequencies in a population over time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Individuals with advantageous heritable traits are more likely to survive and reproduce, passing those traits to offspring.",
                working: "survival + reproduction of the fittest variants",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "This changes the frequency of alleles in the population over generations.",
                working: "change in allele frequency",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Year 1: 20 dark out of 200 moths.",
                working: "20 / 200 × 100 = 10%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Year 6: 50 dark out of 200 moths.",
                working: "50 / 200 × 100 = 25%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "As bark lightened, pale moths were better camouflaged; birds ate dark moths preferentially, so dark alleles became rarer through differential survival and reproduction.",
                working: "camouflage → predation → allele frequency change",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The change must be inherited — moth colour is genetically determined in this scenario.",
                working: "heritable trait",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Supported: the proportion of the dark phenotype rose from 10% to 25%, indicating a change in the population's gene pool over six years.",
                working: "phenotype frequency changed",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Caveat: two counts cannot prove allele-frequency change — sampling error, migration or a small sample (200 moths) could distort the estimate; more data over more generations would strengthen the conclusion.",
                working: "sampling uncertainty",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Differential survival/reproduction of advantageous heritable traits, changing allele frequencies. (b) 10% dark in year 1; 25% in year 6. (c) Pale moths were better camouflaged on lightened bark, so dark moths suffered more predation. (d) Likely correct but limited by small sample size and only two time points.",
            commonErrors: [
              "Claiming individuals changed colour — evolution acts on populations.",
              "Ignoring sampling error when evaluating the conclusion.",
            ],
            examinerNote:
              "Award M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 R1 for (d). Accept 'evolution' evaluated either way if justified.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "For natural selection to produce evolutionary change in a population, a trait must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acquired by an organism during its lifetime" },
              {
                id: "b",
                text: "Determined by genes and passed on to offspring",
              },
              { id: "c", text: "Learned by imitation from other individuals" },
              { id: "d", text: "Caused only by the current environment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heritable variation",
                statement:
                  "Only genetically determined traits are inherited, so only they can respond to selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selection acts on phenotypes, but change persists only if the advantageous variant is heritable.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Genetically determined and inherited",
            commonErrors: [
              "Choosing acquired characteristics — these are not inherited and cannot drive evolution.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-natural-selection-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a population of 800 rabbits, the frequency of an allele for brown fur rose from 0.35 to 0.60 over ten generations after a new predator arrived. What does this demonstrate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Evolution, because the allele frequency in the population changed",
              },
              {
                id: "b",
                text: "All rabbits changed colour during their own lifetimes",
              },
              {
                id: "c",
                text: "The population remained genetically unchanged",
              },
              { id: "d", text: "Only mutation occurred, with no selection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evolution",
                statement:
                  "Evolution is a change in allele frequencies in a population over generations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The allele frequency rose from 0.35 to 0.60 — a change in the gene pool is evolution.",
                working: "0.35 \\to 0.60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The new predator acted as a selective pressure favouring brown-furred rabbits.",
                working: "predation selects fur colour",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Evolution via a change in allele frequency",
            commonErrors: [
              "Believing individuals evolve — the population's gene pool changed, not individual rabbits.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a sample of 1200 moths, 720 are pale and 480 are dark. Calculate the percentage of the sample that is dark-coloured.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage dark", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide the number of dark moths by the total sample.",
                working: "\\frac{480}{1200}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert the fraction to a percentage.",
                working: "0.4 \\times 100 = 40\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40%",
            commonErrors: [
              "Using 720 instead of 480 — the question asks for dark moths.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a population of 500 beetles, the genotype counts are 300 AA, 150 Aa and 50 aa. Calculate the frequency of allele A.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of A alleles", answer: 750 },
              { label: "Frequency of A", answer: 0.75 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Allele frequency",
                statement:
                  "$f = \\frac{\\text{copies of allele}}{\\text{total alleles}}$; heterozygotes carry one copy each.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Count A alleles: two per AA individual plus one per Aa.",
                working: "2 \\times 300 + 150 = 750",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total alleles = $2 \\times 500 = 1000$.",
                working: "2 \\times 500 = 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide copies by total alleles.",
                working: "\\frac{750}{1000} = 0.75",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f(A) = 0.75$",
            commonErrors: [
              "Counting AA individuals once instead of twice, or forgetting heterozygotes carry one A.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Before predation removes moths, a population contains 1600 light and 400 dark moths. After predation, 1100 light and 100 dark moths have been eaten. Calculate: (a) the percentage of dark moths before predation, (b) the percentage of dark moths among the survivors, and (c) the increase in dark-moth percentage.",
          response: {
            type: "numeric",
            parts: [
              { label: "Dark before predation (%)", answer: 20 },
              { label: "Dark among survivors (%)", answer: 37.5 },
              { label: "Increase (percentage points)", answer: 17.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Before: 400 dark out of 2000 total.",
                working: "\\frac{400}{2000} \\times 100 = 20\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Survivors: 500 light and 300 dark, total 800.",
                working:
                  "500 + 300 = 800; \\frac{300}{800} \\times 100 = 37.5\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increase = $37.5 - 20 = 17.5$ percentage points.",
                working: "37.5 - 20 = 17.5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The rise shows selection: predation removed light moths disproportionately, so dark moths became more frequent.",
                working: "differential predation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 20% (b) 37.5% (c) 17.5 percentage points",
            commonErrors: [
              "Using 1100/100 eaten instead of survivors for part (b).",
            ],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which statement correctly compares natural selection and artificial selection?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Artificial selection always produces new species",
              },
              {
                id: "b",
                text: "Both change allele frequencies, but artificial selection is directed by humans toward desired traits",
              },
              {
                id: "c",
                text: "Natural selection cannot change allele frequencies",
              },
              {
                id: "d",
                text: "Artificial selection can only act on wild populations",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Artificial selection",
                statement:
                  "Humans choose parents with desired traits, changing allele frequencies in domesticated populations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both processes rely on heritable variation and differential reproduction.",
                working: "same mechanism",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The difference is the source of the selective pressure: humans in artificial selection.",
                working: "human-chosen traits",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Both change allele frequencies; artificial selection is human-directed",
            commonErrors: [
              "Claiming artificial selection always creates species — it usually changes varieties, not species.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Of 1000 plants, 250 produce seeds before the first frost. Of these seed producers, 190 are the short variety and 60 are the tall variety. Calculate the percentage of seed producers that are short.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage short", answer: 76 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional percentage",
                statement:
                  "$\\% = \\frac{\\text{short producers}}{\\text{all producers}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify the relevant totals: 250 producers, of which 190 are short.",
                working: "250 \\text{ producers}; 190 \\text{ short}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Set up the ratio — the base is producers only, not all 1000 plants.",
                working: "\\frac{190}{250}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.76 \\times 100 = 76\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "76%",
            commonErrors: [
              "Dividing by 1000 instead of 250 — the question conditions on seed producers.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A farmer sprays an insecticide on his crop each season. At first almost all pests die, but after several years a large fraction of the pest population survives the same dose.",
          parts: [
            {
              label: "a",
              prompt:
                "State the three conditions required for evolution by natural selection.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how insecticide resistance spread through the pest population.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A student claims the pests 'adapted because they needed to survive'. Evaluate this claim.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement:
                  "Heritable variation plus differential survival/reproduction changes allele frequencies.",
              },
              {
                kind: "principle",
                name: "Selection is not need-driven",
                statement:
                  "Selection acts on existing variation; organisms do not generate advantageous traits in response to need.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Heritable variation in the population.",
                working: "variation is inherited",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Differential survival or reproduction of variants, changing allele frequencies.",
                working: "differential reproductive success",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A few pests already carried resistance alleles; the insecticide killed susceptible individuals.",
                working: "resistance alleles pre-exist",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Resistant survivors reproduced, so resistance alleles increased in frequency each season.",
                working: "allele frequency rises",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Incorrect framing: the pests did not 'need' or strive to resist — resistance arose from random mutation and was selected.",
                working: "no directed adaptation",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The Lamarckian idea that need produces the trait is wrong; selection only sorts existing heritable variation.",
                working: "selection acts on existing variation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Heritable variation, differential survival/reproduction, change in allele frequencies. (b) Resistant variants survived spraying and passed resistance alleles to offspring. (c) Wrong — selection acts on pre-existing variation, not on need.",
            commonErrors: [
              "Suggesting the insecticide caused the resistance mutation — it only selected for it.",
            ],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u4-natural-selection-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "In a study of peppered moths, a student records the following counts: in 1900, 620 pale and 80 dark moths were collected; in 1950, after a century of coal smoke, 120 pale and 580 dark moths were collected. Total sample size was 700 each year.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the percentage of dark moths in each year.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Describe the change in dark-moth frequency.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Explain the selective pressure responsible for the change.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether these data are sufficient evidence that evolution occurred.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
              {
                kind: "principle",
                name: "Evolution",
                statement:
                  "A change in allele frequencies in a population over generations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "1900: $\\frac{80}{700} \\times 100 = 11.4\\%$ dark.",
                working: "\\frac{80}{700} \\times 100 \\approx 11.4\\%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "1950: $\\frac{580}{700} \\times 100 = 82.9\\%$ dark.",
                working: "\\frac{580}{700} \\times 100 \\approx 82.9\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The proportion of dark moths rose from about 11% to about 83% — a large increase.",
                working: "11\\% \\to 83\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Bird predation acted on camouflage: soot-blackened bark favoured dark moths, so pale moths were eaten more.",
                working: "camouflage vs predation",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Dark-moth alleles therefore increased in frequency through differential survival and reproduction.",
                working: "selection changes allele frequency",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Consistent with evolution: phenotype frequencies changed dramatically over 50 years in a heritable trait.",
                working: "large heritable change",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "However two samples cannot prove allele-frequency change — sampling error, migration or local non-representativeness could contribute; repeated sampling strengthens the case.",
                working: "sampling uncertainty",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) About 11% in 1900; about 83% in 1950. (b) Dark frequency increased ~72 percentage points. (c) Bird predation favoured camouflaged dark moths on soot-darkened bark. (d) Strongly suggestive of evolution but limited by only two samples.",
            commonErrors: [
              "Claiming moths 'chose' to turn dark — selection changed the population's composition.",
              "Ignoring that phenotype counts are not direct allele counts.",
            ],
            examinerNote: "M1 A1 (a); A1 (b); M1 A1 (c); M1 A1 (d).",
          },
        },
        {
          id: "biosl-u4-natural-selection-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "An allele confers heat tolerance and is advantageous in a hot climate, but is disadvantageous in a cold climate. If temperatures fall sharply, what is the predicted effect on the allele's frequency?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It will continue to increase because alleles never lose advantage",
              },
              {
                id: "b",
                text: "It will decrease as the direction of selection reverses",
              },
              {
                id: "c",
                text: "It cannot change because selection always favours the same allele",
              },
              {
                id: "d",
                text: "It will instantly become fixed in the population",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environment-dependent selection",
                statement:
                  "Whether an allele is advantageous depends on the current environment; selection can reverse direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Advantage is environment-specific; cooling makes the heat-tolerance allele costly.",
                working: "advantage flips with environment",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Carriers reproduce less, so the allele frequency falls.",
                working: "frequency decreases",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The allele frequency will decrease",
            commonErrors: [
              "Assuming an advantageous allele stays advantageous regardless of environment.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The frequency of an allele in a population changed from 0.18 in one survey to 0.47 five years later. Calculate the change in allele frequency.",
          response: {
            type: "numeric",
            parts: [{ label: "Change in frequency", answer: 0.29 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Change in allele frequency",
                statement:
                  "$\\Delta f = f_{\\text{final}} - f_{\\text{initial}}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the initial frequency from the final frequency.",
                working: "0.47 - 0.18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The allele frequency increased by 0.29.",
                working: "\\Delta f = 0.29",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta f = +0.29$",
            commonErrors: [
              "Giving the final frequency 0.47 instead of the change.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-natural-selection-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT required for evolution by natural selection to occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heritable variation within the population" },
              {
                id: "b",
                text: "Differential survival or reproduction of variants",
              },
              { id: "c", text: "A very large population size" },
              { id: "d", text: "Reproduction that passes traits to offspring" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Requirements for selection",
                statement:
                  "Heritable variation plus differential reproductive success — population size is not a requirement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selection needs variation, inheritance and differential reproductive success.",
                working: "three requirements",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Small populations can evolve too — size affects drift, not the requirement for selection.",
                working: "size not required",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A very large population size",
            commonErrors: [
              "Confusing population size with a requirement — it influences the rate, not whether selection can occur.",
            ],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
    {
      id: "biosl-u4-evolution-evidence",
      title: "Evidence for evolution",
      skill:
        "Describe and evaluate fossil, anatomical, biochemical and biogeographical evidence for common ancestry.",
      lesson: {
        sections: [
          {
            heading: "The fossil record",
            body: "Fossils show organisms that lived in the past and, in **transitional forms**, how one group gave rise to another — for example fossil fish with features intermediate between fish and amphibians. The fossil record is incomplete because only a small fraction of organisms fossilise, but the sequence of fossils in different rock layers still supports change over time.",
          },
          {
            heading: "Comparative anatomy and biochemistry",
            body: "**Homologous structures** — such as the pentadactyl forelimb of humans, whales, bats and birds — have different functions but the same underlying bone plan, indicating descent from a common ancestor. **Analogous structures** (e.g. insect and bird wings) look similar but arose independently by convergent evolution. At the molecular level, similarities in DNA and protein sequences (e.g. haemoglobin) show how closely species are related.",
          },
          {
            heading: "Biogeography",
            body: "The distribution of species reflects evolutionary history: related species tend to occur in the same region, and island groups such as the Galápagos or Hawaii hold many **endemic** species that evolved in isolation. Continental drift explains why related marsupials are found in Australia and South America.",
          },
        ],
        keyFormulas: [
          {
            name: "Homologous vs analogous",
            statement:
              "Homologous = common ancestry, different function; analogous = different ancestry, similar function",
          },
          {
            name: "Evidence for evolution",
            statement:
              "Fossils + comparative anatomy + biochemistry + biogeography all point to common descent",
          },
          {
            name: "Endemic species",
            statement:
              "Species found naturally only in one place, often evolving in isolation on islands",
          },
        ],
        workedExample: {
          problem:
            "The forelimb bones of a human, a whale and a bat are arranged as humerus, radius, ulna, carpals and phalanges, yet each limb does a different job. Explain what this shows about evolution.",
          solution:
            "The shared bone plan is evidence of homologous structures inherited from a common ancestor. Different functions arose because natural selection modified the same basic structure for different uses.",
        },
      },
      questions: [
        {
          id: "biosl-u4-evolution-evidence-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The pentadactyl forelimb appears in humans, whales, bats and birds. What is the correct term for these structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Analogous structures" },
              { id: "b", text: "Homologous structures" },
              { id: "c", text: "Vestigial organs" },
              { id: "d", text: "Convergent features" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous structures",
                statement:
                  "Structures sharing a common evolutionary origin despite different functions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Same underlying bone plan from a common ancestor = homologous; analogous would mean independent origins.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Homologous structures",
            commonErrors: [
              "Confusing homologous (common ancestry) with analogous (common function by coincidence).",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which piece of evidence most directly documents evolutionary change over geological time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The similar DNA of closely related species" },
              {
                id: "b",
                text: "The sequence of fossils in successive rock layers, including transitional forms",
              },
              { id: "c", text: "The presence of endemic species on islands" },
              {
                id: "d",
                text: "The wings of birds and insects serving the same function",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fossil record",
                statement:
                  "Preserved remains showing organisms of the past and transitional forms linking groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fossils in dated rock layers give a historical sequence of life through time.",
                working: "rock layers = time sequence",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Transitional fossils show intermediates between major groups — direct evidence of descent with modification.",
                working: "transitional forms",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Fossils in successive rock layers",
            commonErrors: [
              "Choosing DNA similarity — strong evidence of relatedness but not a direct historical record.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Insect wings, bird wings and bat wings all produce flight but have completely different internal structures and develop from different embryonic tissues. What does this pattern illustrate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Homology, because all wings share a common ancestor",
              },
              {
                id: "b",
                text: "Convergent evolution, because similar structures arose independently under similar selection pressures",
              },
              { id: "c", text: "Artificial selection by humans" },
              { id: "d", text: "Lamarckian inheritance of acquired flight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergent evolution",
                statement:
                  "Independent evolution of similar features in unrelated lineages facing similar selection pressures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different embryonic origins rule out a shared ancestral wing — these are not homologous.",
                working: "different developmental origin",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flight was favoured in each lineage separately, so natural selection produced analogous wings independently.",
                working: "independent selection for flight",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is convergent evolution; the similar function does not imply common ancestry.",
                working: "convergent = analogous",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Convergent evolution producing analogous structures",
            commonErrors: ["Assuming similar function means common ancestry."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A biologist compares the forelimbs of five vertebrates. Each limb contains a single upper bone (humerus), two lower bones (radius and ulna), wrist bones and finger bones, but the limbs are used for flying (bat), swimming (whale), grasping (human), digging (mole) and walking (horse).",
          parts: [
            {
              label: "a",
              prompt:
                "Name the correct term for structures that share a common evolutionary origin but have different functions.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how this pattern of bones supports the theory of evolution by common descent.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Distinguish between homologous and analogous structures, giving one example of each.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate how convincing anatomical evidence is compared with DNA evidence for evolutionary relationships.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous structures",
                statement:
                  "Structures with a common evolutionary origin, modified by natural selection for different functions.",
              },
              {
                kind: "definition",
                name: "Analogous structures",
                statement:
                  "Structures with similar functions but different evolutionary origins, produced by convergent evolution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "State the term precisely.",
                working: "homologous structures",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Include the defining idea of common ancestry.",
                working: "common origin, different function",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The same bone plan in species with very different lifestyles implies inheritance from a shared ancestor rather than independent design.",
                working: "shared plan → common ancestor",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Natural selection then modified the structure for each environment, explaining the different functions.",
                working: "selection modifies the shared plan",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Homologous: common origin, different function (e.g. vertebrate forelimbs); analogous: similar function, different origin (e.g. bird and insect wings).",
                working: "two correct definitions",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "At least one correct example given for each type.",
                working: "examples",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Anatomical evidence can be misleading — convergence can mimic homology, and fossils are needed to establish the direction of change.",
                working: "anatomy limitations",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "DNA/protein sequences give a more direct measure of relatedness, but ideally the two lines of evidence should agree.",
                working: "molecular evidence corroborates",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Homologous structures. (b) Shared bone plan implies common ancestry modified by selection. (c) Homologous = common origin/different function; analogous = different origin/similar function. (d) Anatomy is suggestive but can be confounded by convergence; molecular evidence is generally stronger but the lines of evidence should be consistent.",
            commonErrors: [
              "Reversing homologous and analogous.",
              "Claiming DNA evidence is useless because it does not show fossils — the two are complementary.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept any valid pair of examples.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Why is the fossil record considered an incomplete record of past life?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Only a small fraction of organisms ever fossilise, and many fossils are later destroyed by geological processes",
              },
              {
                id: "b",
                text: "Fossils can only form during the last 100 years",
              },
              {
                id: "c",
                text: "Scientists have not yet discovered how to date fossils",
              },
              {
                id: "d",
                text: "All fossils are identical, so they carry no information",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fossil record",
                statement:
                  "Preserved remains of past organisms; incomplete because fossilisation is rare and fossils can be destroyed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fossilisation requires unusual conditions, so most organisms leave no trace; erosion and metamorphism destroy many of those that do.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** Only a small fraction of organisms fossilise and many fossils are destroyed",
            commonErrors: [
              "Assuming the fossil record is a complete catalogue of all species that ever lived.",
            ],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which pair of structures are analogous rather than homologous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The forelimbs of humans and bats" },
              { id: "b", text: "The wings of birds and insects" },
              { id: "c", text: "The pentadactyl limbs of whales and horses" },
              {
                id: "d",
                text: "Haemoglobin molecules in humans and chimpanzees",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Analogous structures",
                statement:
                  "Structures with similar functions but independent evolutionary origins, produced by convergent evolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bird and insect wings serve the same function but develop from different tissues and ancestors; the other options share common ancestry.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Wings of birds and insects",
            commonErrors: ["Confusing similar function with common ancestry."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Haemoglobin amino-acid sequences are nearly identical in humans and chimpanzees but differ substantially from those in fish. What does this pattern indicate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Humans and chimpanzees share a more recent common ancestor with each other than either does with fish",
              },
              { id: "b", text: "Haemoglobin is identical in all species" },
              { id: "c", text: "Fish haemoglobin is functionally superior" },
              {
                id: "d",
                text: "DNA and protein sequences cannot be used to study evolutionary relationships",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular evidence",
                statement:
                  "Greater similarity in DNA or protein sequences indicates a more recent common ancestor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Molecular sequences are inherited, so similarity reflects shared ancestry rather than function alone.",
                working: "sequence similarity → shared ancestry",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Humans and chimpanzees are nearly identical, so their common ancestor is more recent than the ancestor shared with fish.",
                working: "recent ancestor → close relative",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Humans and chimpanzees share a more recent common ancestor",
            commonErrors: [
              "Assuming identical proteins mean identical species — small sequence differences still accumulate over time.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two species of yeast have been compared at 150 amino-acid positions of a shared protein, and the sequences are identical at 144 positions. Calculate the percentage similarity between the two sequences.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage similarity", answer: 96 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sequence similarity",
                statement:
                  "$\\%\\ \\text{similarity} = \\frac{\\text{identical positions}}{\\text{total positions}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the ratio of identical to total positions.",
                working: "\\frac{144}{150}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.96 \\times 100 = 96\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "96%",
            commonErrors: [
              "Using the 6 differing positions instead of the 144 identical ones.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A geneticist compares 400 base pairs of a gene in three species. Species A and B differ at 12 positions, while species A and C differ at 100 positions. Calculate the percentage sequence similarity for each pair.",
          response: {
            type: "numeric",
            parts: [
              { label: "A-B similarity (%)", answer: 97 },
              { label: "A-C similarity (%)", answer: 75 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sequence similarity",
                statement:
                  "$\\%\\ \\text{similarity} = \\frac{\\text{identical bases}}{\\text{total bases}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "A and B differ at 12 of 400 positions, so they are identical at 388.",
                working: "400 - 12 = 388; \\frac{388}{400} \\times 100 = 97\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A and C differ at 100 of 400 positions, so they are identical at 300.",
                working:
                  "400 - 100 = 300; \\frac{300}{400} \\times 100 = 75\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The greater similarity of A and B indicates a closer evolutionary relationship.",
                working: "97\\% > 75\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A-B: 97%; A-C: 75%",
            commonErrors: [
              "Dividing the number of differences by the total and calling that the similarity — similarity uses identical positions.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a collection of 500 fossils from a single rock sequence, 45 show features intermediate between two major groups of organisms. Calculate the percentage of transitional fossils in the collection.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage transitional", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage frequency",
                statement:
                  "$\\% = \\frac{\\text{part}}{\\text{total}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up the ratio of transitional fossils to the whole collection.",
                working: "\\frac{45}{500}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.09 \\times 100 = 9\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9%",
            commonErrors: ["Dividing 500 by 45 instead of 45 by 500."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A survey of an island finds 80 species of reptiles, of which 60 are found naturally nowhere else on Earth. Calculate the percentage of reptile species on the island that are endemic.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage endemic", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endemic species",
                statement:
                  "A species found naturally only in one place, often having evolved in isolation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up the ratio of endemic species to total species.",
                working: "\\frac{60}{80}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.75 \\times 100 = 75\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75%",
            commonErrors: [
              "Using 80 as the numerator — the question asks for the endemic fraction.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Similar marsupial species occur in Australia and South America even though the continents are now separated by thousands of kilometres of ocean. Which explanation best fits this distribution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The marsupials recently swam across the ocean between the continents",
              },
              {
                id: "b",
                text: "The species share a common ancestor from before the continents separated, and related lineages survived on both",
              },
              {
                id: "c",
                text: "Humans transported marsupials between the continents",
              },
              {
                id: "d",
                text: "The marsupials evolved twice independently to look alike",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biogeography and continental drift",
                statement:
                  "The distribution of related species reflects history — populations separated by drifting continents retain shared ancestry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Continental drift separated populations that shared a common ancestor while the landmasses were joined.",
                working: "common ancestor before separation",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Surviving lineages on each continent explain why related species now occur on both sides of the ocean.",
                working: "related lineages on both continents",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is biogeographical evidence for common descent, not recent dispersal or independent origins.",
                working: "shared ancestry explains distribution",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Common ancestry before the continents separated",
            commonErrors: [
              "Assuming the species must have crossed the ocean recently — the pattern fits ancient vicariance.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student argues that 'evolution is only a theory, so there is no real evidence for it.' Using your knowledge of evolutionary evidence, write a response that evaluates this claim.",
          parts: [
            {
              label: "a",
              prompt:
                "State two types of evidence for evolution from different fields of biology.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how each type of evidence supports the idea of common ancestry.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate the student's claim that evolution is 'only a theory'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence for evolution",
                statement:
                  "Fossils, comparative anatomy, biochemistry and biogeography independently support descent with modification.",
              },
              {
                kind: "definition",
                name: "Scientific theory",
                statement:
                  "A well-supported explanation that accounts for a wide range of observations — not a guess.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any two valid types: fossil record, homologous/analogous structures, DNA/protein similarity, biogeography/endemic species.",
                working: "e.g. fossils + molecular evidence",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both types correctly named and drawn from different fields.",
                working: "two distinct fields",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Fossils show transitional forms and change over time; molecular sequences and homologous structures show shared ancestry quantitatively.",
                working: "each evidence type links to ancestry",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The independent lines of evidence converge on the same conclusion — common descent.",
                working: "convergent lines of evidence",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The claim misunderstands 'theory' — in science a theory is the highest level of explanation, supported by extensive evidence.",
                working: "theory = well-supported explanation",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evolution is supported by multiple independent evidence types, so the claim that there is 'no real evidence' is incorrect.",
                working: "claim rejected with justification",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) E.g. fossil record and molecular (DNA/protein) evidence. (b) Fossils show transitional change; molecular and anatomical similarities reveal shared ancestry. (c) Wrong — a scientific theory is strongly evidenced; evolution has multiple independent lines of support.",
            commonErrors: [
              "Repeating the student's wording without evaluating it.",
              "Listing evidence without explaining how it supports common ancestry.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 A1 (c). Accept any two valid evidence types in (a).",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Species P and Q share 18 of 20 examined anatomical traits, while species P and R share 11 of 20. Calculate the percentage of shared traits for each pair and state which pair is most closely related.",
          response: {
            type: "numeric",
            parts: [
              { label: "P-Q shared traits (%)", answer: 90 },
              { label: "P-R shared traits (%)", answer: 55 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trait similarity",
                statement:
                  "$\\% = \\frac{\\text{shared traits}}{\\text{total traits}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "P and Q share $\\frac{18}{20} \\times 100 = 90\\%$ of traits.",
                working: "\\frac{18}{20} \\times 100 = 90\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P and R share $\\frac{11}{20} \\times 100 = 55\\%$ of traits.",
                working: "\\frac{11}{20} \\times 100 = 55\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P and Q are most closely related because they share a higher percentage of traits (more recent common ancestor).",
                working: "90\\% > 55\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "P-Q: 90%; P-R: 55%; P and Q are most closely related",
            commonErrors: [
              "Comparing raw trait counts instead of percentages.",
              "Assuming the pair sharing fewer traits is more closely related.",
            ],
            examinerNote:
              "M1 M1 A1. Award A1 for naming P and Q as the closest pair in the final answer.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the significance of transitional fossils, such as fossil fish with features intermediate between fish and amphibians?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They prove that amphibians evolved directly from modern fish",
              },
              {
                id: "b",
                text: "They provide direct evidence of intermediate forms linking major groups, supporting descent with modification",
              },
              {
                id: "c",
                text: "They show that all species appeared at the same time",
              },
              {
                id: "d",
                text: "They demonstrate convergent evolution between unrelated groups",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transitional fossil",
                statement:
                  "A fossil showing features intermediate between ancestral and descendant groups, bridging major transitions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intermediate features record the stepwise accumulation of traits between groups — evidence of descent with modification.",
                working: "intermediate forms link groups",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They do not show sudden appearance or prove direct descent from a specific living species.",
                working: "gradual change, not sudden origin",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Direct evidence of intermediate forms supporting descent with modification",
            commonErrors: [
              "Reading 'intermediate' as 'direct ancestor of living species' rather than evidence of gradual transition.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u4-evolution-evidence-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A palaeontologist claims the fossil record alone is enough to prove evolution. A molecular biologist claims DNA evidence alone is enough. Evaluate both claims.",
          parts: [
            {
              label: "a",
              prompt:
                "State one strength and one limitation of the fossil record as evidence for evolution.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State one strength and one limitation of molecular (DNA or protein) evidence for evolution.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate which line of evidence is more convincing, and why.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fossil evidence",
                statement:
                  "Direct historical record of past organisms, including transitional forms, but preservation is rare.",
              },
              {
                kind: "principle",
                name: "Molecular evidence",
                statement:
                  "Quantitative measure of relatedness from inherited sequences, but does not show the historical sequence directly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Strength: fossils give a direct historical sequence with transitional forms showing change over time.",
                working: "direct historical record",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Limitation: the record is incomplete — most organisms never fossilise, so gaps exist.",
                working: "incomplete record",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Strength: DNA/protein similarity gives a quantitative, objective measure of relatedness across all species.",
                working: "quantitative relatedness",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Limitation: sequences alone do not show the order or timing of evolutionary events the way dated fossils can.",
                working: "no direct historical sequence",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Neither alone is fully convincing — each has gaps.",
                working: "both incomplete alone",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Molecular evidence is generally more reliable for measuring relatedness because it is not biased by rare preservation.",
                working: "molecular more reliable",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The strongest case comes from the two lines of evidence agreeing — fossils show the sequence, molecules confirm the relationships.",
                working: "convergent evidence",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Strength: direct historical record with transitional forms; limitation: incomplete preservation. (b) Strength: quantitative measure of relatedness; limitation: no direct historical sequence. (c) Neither alone is decisive; molecular evidence is more reliable for relatedness, and agreement between the lines is the strongest evidence.",
            commonErrors: [
              "Declaring one line of evidence 'proves' evolution without acknowledging its limitations.",
              "Confusing molecular similarity with proof of a specific ancestor-descendant pair.",
            ],
            examinerNote:
              "M1 A1 (a); M1 A1 (b); M1 M1 A1 (c). Accept well-argued evaluations awarding M1 for a balanced judgement.",
          },
        },
      ],
    },
  ],
};

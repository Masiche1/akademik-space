import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "s8-u8-lesson-8-1",
  code: "8-1",
  title: "Natural Selection and Adaptation",
  goal: "I CAN explain natural selection, describe adaptations, and predict how populations change over time.",
  standards: [
    "MS-LS4-4",
    "MS-LS4-6",
    "SEP: Constructing Explanations",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Natural selection",
      definition:
        "Process where organisms with advantageous traits survive and reproduce more.",
    },
    {
      term: "Adaptation",
      definition: "Inherited trait that increases survival and reproduction.",
    },
    {
      term: "Fitness",
      definition: "Ability to survive and reproduce in a given environment.",
    },
    {
      term: "Selective pressure",
      definition: "Environmental factor that favors certain traits.",
    },
    {
      term: "Camouflage",
      definition: "Adaptation that helps organisms blend into environment.",
    },
    {
      term: "Mimicry",
      definition: "Adaptation where organism resembles another species.",
    },
    {
      term: "Industrial melanism",
      definition: "Increase in dark-colored moths during industrial pollution.",
    },
  ],
  concepts: [
    {
      id: "s8-u8-natural-selection",
      title: "Natural selection mechanism",
      skill:
        "Explain the steps of natural selection and how populations evolve.",
      lesson: {
        sections: [
          {
            heading: "Natural selection steps",
            body: "**Natural selection** occurs when:\n\n1. **Variation**: population has genetic variation.\n2. **Selection pressure**: environment favors certain traits.\n3. **Differential survival**: individuals with advantageous traits survive/reproduce more.\n4. **Allele frequency change**: advantageous alleles become more common over generations.",
          },
          {
            heading: "Key points",
            body: "- Natural selection acts on **populations**, not individuals.\n- It doesn't 'try' to create perfect organisms — just better-adapted ones.\n- Selection pressure can change (e.g., climate change, new predators).\n- Evolution = change in allele frequencies over time.",
          },
        ],
        keyFormulas: [
          {
            name: "Natural selection",
            statement:
              "Variation → selection → differential survival → allele frequency change.",
          },
          {
            name: "Fitness",
            statement: "Reproductive success in a given environment.",
          },
          {
            name: "Evolution",
            statement: "Change in allele frequencies over generations.",
          },
        ],
        workedExample: {
          problem:
            "Describe how natural selection would act on moth color during industrialization.",
          solution:
            "Light moths on dark trees are eaten; dark moths survive → dark allele frequency increases.",
        },
      },
      questions: [
        {
          id: "s8-u8-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Survival of the fittest" },
              { id: "b", text: "Random change in DNA" },
              { id: "c", text: "Organisms adapting on purpose" },
              { id: "d", text: "Migration to new areas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement:
                  "Organisms with advantageous traits survive/reproduce more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural selection = differential survival based on traits.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Survival of the fittest.",
            commonErrors: ["Choosing (c): organisms don't adapt on purpose."],
          },
        },
        {
          id: "s8-u8-selection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the steps of natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Natural selection steps",
                statement: "Variation → selection → survival → allele change.",
              },
            ],
            steps: [
              {
                reasoning: "Variation exists in population.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Selection pressure favors certain traits.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Differential survival → allele frequencies change.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Variation → selection pressure → differential survival → allele frequency change.",
            commonErrors: ["Missing a step."],
          },
        },
        {
          id: "s8-u8-selection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why natural selection acts on populations, not individuals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Population selection",
                statement:
                  "Selection changes allele frequencies, not individuals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Individuals either survive or die — they don't evolve.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Populations change when allele frequencies shift over generations.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Natural selection favors traits that increase reproductive success.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Individuals can't 'adapt' during their lifetime — only populations evolve.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Individuals don't evolve; populations change allele frequencies over time.",
            commonErrors: ["Saying individuals evolve."],
          },
        },
        {
          id: "s8-u8-selection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A population of rabbits has fur color variation (brown vs white). Environment has brown soil.",
          parts: [
            { label: "a", prompt: "What is the selective pressure?", marks: 2 },
            {
              label: "b",
              prompt: "Which fur color is favored? Why?",
              marks: 3,
            },
            { label: "c", prompt: "What happens over generations?", marks: 2 },
            { label: "d", prompt: "Is this evolution? Explain.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Natural selection",
                statement: "Camouflage advantage → higher survival.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Predators hunting rabbits — visual detection.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Brown fur camouflages on brown soil → less predation.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Brown allele frequency increases; white decreases.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Yes — allele frequency changes = evolution.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Predation (b) Brown camouflages (c) Brown increases (d) Yes, evolution.",
            commonErrors: ["Saying white is favored."],
          },
        },
      ],
    },
    {
      id: "s8-u8-adaptations",
      title: "Adaptations and Camouflage",
      skill:
        "Identify different types of adaptations and explain their functions.",
      lesson: {
        sections: [
          {
            heading: "Types of adaptations",
            body: "**Structural adaptations**: physical features (beak shape, fur color, camouflage).\n**Behavioral adaptations**: actions (migration, hibernation, tool use).\n**Physiological adaptations**: internal processes (venom production, antifreeze proteins).",
          },
          {
            heading: "Camouflage and mimicry",
            body: "- **Camouflage**: blending into environment (chameleon, leaf insects).\n- **Mimicry**: resembling another species (harmless fly mimics wasp).\n- **Warning coloration**: bright colors signal danger (poison dart frog).\n- **Deimatic behavior**: startling displays to deter predators.",
          },
        ],
        keyFormulas: [
          {
            name: "Adaptation types",
            statement: "Structural, behavioral, physiological.",
          },
          { name: "Camouflage", statement: "Blending into environment." },
          { name: "Mimicry", statement: "Resembling another species." },
        ],
        workedExample: {
          problem: "Classify a bird's migration as an adaptation.",
          solution:
            "Behavioral adaptation — helps avoid harsh conditions and find food.",
        },
      },
      questions: [
        {
          id: "s8-u8-adaptations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Learned behavior" },
              { id: "b", text: "Inherited trait that increases fitness" },
              { id: "c", text: "Environmental change" },
              { id: "d", text: "Random mutation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation",
                statement:
                  "Inherited trait that increases survival/reproduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adaptations are inherited traits that increase fitness.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Inherited trait that increases fitness.",
            commonErrors: [
              "Choosing (a): adaptations are inherited, not learned.",
            ],
          },
        },
        {
          id: "s8-u8-adaptations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between structural and behavioral adaptations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation types",
                statement: "Structural = physical; behavioral = actions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Structural: physical features (beak shape, camouflage).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Behavioral: actions (migration, hibernation).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Both are inherited and increase fitness.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Structural = physical; behavioral = actions.",
            commonErrors: ["Confusing the two types."],
          },
        },
        {
          id: "s8-u8-adaptations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how industrial melanism demonstrates natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Industrial melanism",
                statement: "Dark moths survived on soot-covered trees.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Before industrialization: light moths common on light trees.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Pollution darkened trees; light moths became visible to predators.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Dark moths camouflaged better → survived/reproduced more.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Dark allele frequency increased — classic natural selection example.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Dark moths survived on dark trees → allele frequency shifted.",
            commonErrors: ["Saying moths changed color on purpose."],
          },
        },
        {
          id: "s8-u8-adaptations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare camouflage and mimicry.",
          parts: [
            { label: "a", prompt: "Define each term.", marks: 2 },
            { label: "b", prompt: "Give an example of each.", marks: 3 },
            { label: "c", prompt: "How does each help survival?", marks: 2 },
            {
              label: "d",
              prompt: "Can an organism use both? Explain.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Camouflage vs mimicry",
                statement: "Camouflage = blend in; mimicry = resemble another.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Camouflage: blend into environment; mimicry: resemble another species.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Camouflage: chameleon, leaf insect. Mimicry: harmless fly mimics wasp.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Camouflage: avoids detection. Mimicry: avoids predation by appearing dangerous.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Yes — some organisms both blend in and mimic.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Blend vs resemble (b) Chameleon vs fly-wasp (c) Avoid detection vs appear dangerous (d) Yes.",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
    {
      id: "s8-u8-evidence",
      title: "Evidence for Evolution",
      skill: "Identify and evaluate evidence supporting evolution.",
      lesson: {
        sections: [
          {
            heading: "Types of evidence",
            body: "**Fossil record**: shows transitional forms and extinction events.\n**Comparative anatomy**: homologous structures (same bones, different functions).\n**Embryology**: similar early development (gill slits, tails).\n**Biogeography**: species distribution matches evolutionary history.\n**Molecular biology**: DNA similarities show relatedness.",
          },
          {
            heading: "Homologous structures",
            body: "Homologous structures have same basic structure but different functions — evidence of common ancestry:\n\n- Human arm, bat wing, whale flipper, bird wing — all have same bone pattern.\n- This suggests they evolved from a common ancestor.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence types",
            statement: "Fossils, anatomy, embryology, biogeography, molecular.",
          },
          {
            name: "Homologous structures",
            statement: "Same structure, different function → common ancestry.",
          },
          {
            name: "Analogous structures",
            statement:
              "Same function, different structure → convergent evolution.",
          },
        ],
        workedExample: {
          problem: "Why are homologous structures evidence for evolution?",
          solution:
            "Same bone pattern in different species suggests common ancestor with that structure.",
        },
      },
      questions: [
        {
          id: "s8-u8-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are homologous structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same function, different structure" },
              { id: "b", text: "Same structure, different function" },
              { id: "c", text: "Identical structures" },
              { id: "d", text: "Vestigial organs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous",
                statement: "Same structure, different function.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homologous = same structure, different function (arm vs wing).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Same structure, different function.",
            commonErrors: ["Choosing (a): that's analogous."],
          },
        },
        {
          id: "s8-u8-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three types of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evolution evidence",
                statement: "Fossils, anatomy, DNA, embryology, biogeography.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil record: transitional forms.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Comparative anatomy: homologous structures.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Molecular biology: DNA similarities.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Fossils, anatomy, DNA (or embryology/biogeography).",
            commonErrors: ["Listing only one type."],
          },
        },
        {
          id: "s8-u8-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA evidence supports evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Molecular evidence",
                statement: "Similar DNA = common ancestry.",
              },
            ],
            steps: [
              {
                reasoning: "DNA sequences can be compared between species.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "More similar DNA = more recent common ancestor.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Humans share ~98% DNA with chimpanzees — close relatives.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Molecular clock estimates divergence times.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "DNA similarity shows relatedness and evolutionary history.",
            commonErrors: ["Saying DNA proves evolution directly."],
          },
        },
        {
          id: "s8-u8-evidence-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare homologous and analogous structures.",
          parts: [
            { label: "a", prompt: "Define each term.", marks: 2 },
            { label: "b", prompt: "Give an example of each.", marks: 3 },
            {
              label: "c",
              prompt: "What does each suggest about evolution?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Which is stronger evidence for common ancestry?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous vs analogous",
                statement:
                  "Homologous = common ancestry; analogous = convergent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Homologous: same structure, different function. Analogous: same function, different structure.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Homologous: human arm/bat wing. Analogous: bird wing/insect wing.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Homologous → common ancestry. Analogous → convergent evolution.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Homologous is stronger evidence for common ancestry.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Same structure vs same function (b) Arm/wing vs bird/insect wing (c) Common ancestry vs convergent (d) Homologous.",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
  ],
};

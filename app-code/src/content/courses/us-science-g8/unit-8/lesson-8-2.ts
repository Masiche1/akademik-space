import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "s8-u8-lesson-8-2",
  code: "8-2",
  title: "Speciation and Extinction",
  goal: "I CAN explain how new species form, describe types of extinction, and analyze extinction events in Earth's history.",
  standards: [
    "MS-LS4-1",
    "MS-LS4-2",
    "MS-LS4-3",
    "SEP: Constructing Explanations",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    { term: "Speciation", definition: "Formation of new species." },
    {
      term: "Allopatric speciation",
      definition: "Speciation due to geographic isolation.",
    },
    {
      term: "Sympatric speciation",
      definition: "Speciation without geographic isolation.",
    },
    {
      term: "Reproductive isolation",
      definition: "Barriers preventing interbreeding between populations.",
    },
    { term: "Extinction", definition: "Permanent loss of a species." },
    {
      term: "Background extinction",
      definition: "Normal rate of species loss over time.",
    },
    {
      term: "Mass extinction",
      definition: "Rapid loss of many species (>75% in short time).",
    },
    {
      term: "Endemic species",
      definition: "Species found only in one location.",
    },
  ],
  concepts: [
    {
      id: "s8-u8-speciation",
      title: "Speciation mechanisms",
      skill:
        "Explain how new species form through geographic and reproductive isolation.",
      lesson: {
        sections: [
          {
            heading: "Allopatric speciation",
            body: "**Allopatric speciation** occurs when geographic barriers (mountains, oceans, rivers) isolate populations:\n\n1. Population splits due to barrier.\n2. Each population evolves independently.\n3. Over time, genetic differences accumulate.\n4. Populations can no longer interbreed → new species.",
          },
          {
            heading: "Reproductive isolation",
            body: "Reproductive isolation prevents gene flow between populations:\n\n- **Prezygotic**: prevents fertilization (different mating times, incompatible gametes).\n- **Postzygotic**: prevents viable offspring (hybrid sterility, hybrid inviability).",
          },
        ],
        keyFormulas: [
          {
            name: "Allopatric speciation",
            statement:
              "Geographic isolation → independent evolution → new species.",
          },
          {
            name: "Reproductive isolation",
            statement: "Barriers prevent gene flow between populations.",
          },
          {
            name: "Endemic species",
            statement: "Found only in one location due to isolation.",
          },
        ],
        workedExample: {
          problem: "How did Darwin's finches diversify?",
          solution:
            "Geographic isolation on different islands → different beak adaptations → speciation.",
        },
      },
      questions: [
        {
          id: "s8-u8-speciation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is speciation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species extinction" },
              { id: "b", text: "Formation of new species" },
              { id: "c", text: "Migration" },
              { id: "d", text: "Adaptation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speciation",
                statement: "Formation of new species.",
              },
            ],
            steps: [
              {
                reasoning: "Speciation = formation of new species.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Formation of new species.",
            commonErrors: ["Choosing (a): extinction is opposite."],
          },
        },
        {
          id: "s8-u8-speciation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is allopatric speciation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allopatric",
                statement: "Speciation via geographic isolation.",
              },
            ],
            steps: [
              {
                reasoning: "Geographic barrier isolates population.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Each population evolves independently.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Genetic differences → reproductive isolation → new species.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Geographic isolation → independent evolution → new species.",
            commonErrors: ["Saying sympatric speciation."],
          },
        },
        {
          id: "s8-u8-speciation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how reproductive isolation leads to speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reproductive isolation",
                statement: "Prevents gene flow → genetic divergence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Barrier prevents interbreeding between populations.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Each population accumulates different mutations/alleles.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Eventually can't produce viable offspring → separate species.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This is the definition of speciation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Isolation → genetic divergence → cannot interbreed → new species.",
            commonErrors: ["Not mentioning gene flow."],
          },
        },
        {
          id: "s8-u8-speciation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Island A has birds with large beaks (cracking nuts). Island B has birds with small beaks (insect eating).",
          parts: [
            {
              label: "a",
              prompt: "How did these birds likely diverge?",
              marks: 3,
            },
            { label: "b", prompt: "What type of speciation?", marks: 2 },
            { label: "c", prompt: "What evidence supports this?", marks: 2 },
            {
              label: "d",
              prompt: "Are they separate species? Explain.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Adaptive radiation",
                statement: "Different islands → different adaptations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Geographic isolation → different food sources → different beak adaptations.",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Allopatric speciation (geographic isolation).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Beak differences + island isolation + possibly DNA evidence.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "If can't interbreed or produce viable offspring, yes.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Isolation + different food (b) Allopatric (c) Beak + DNA (d) If reproductively isolated.",
            commonErrors: ["Not mentioning geographic isolation."],
          },
        },
      ],
    },
    {
      id: "s8-u8-extinction",
      title: "Extinction and Mass Extinction Events",
      skill:
        "Describe extinction types, major extinction events, and their causes.",
      lesson: {
        sections: [
          {
            heading: "Extinction types",
            body: "**Background extinction**: normal rate (~1 species/million years).\n**Mass extinction**: rapid loss of >75% species in short time.\n\nMajor mass extinctions:\n- **Permian** (~252 mya): 96% species lost (largest).\n- **Cretaceous-Paleogene** (~66 mya): dinosaurs extinct (asteroid impact).\n- **Current**: many species threatened by human activity.",
          },
          {
            heading: "Causes",
            body: "Mass extinction causes:\n- **Asteroid impacts**: Cretaceous-Paleogene.\n- **Volcanic activity**: Permian (Siberian Traps).\n- **Climate change**: rapid temperature shifts.\n- **Human activity**: habitat destruction, overhunting, pollution, climate change.",
          },
        ],
        keyFormulas: [
          {
            name: "Background extinction",
            statement: "~1 species/million years.",
          },
          {
            name: "Mass extinction",
            statement: ">75% species loss in short time.",
          },
          {
            name: "Major events",
            statement:
              "Permian (largest), Cretaceous-Paleogene (dinosaurs), current.",
          },
        ],
        workedExample: {
          problem: "What caused the dinosaur extinction?",
          solution:
            "Asteroid impact ~66 mya — Cretaceous-Paleogene extinction event.",
        },
      },
      questions: [
        {
          id: "s8-u8-extinction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a mass extinction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loss of one species" },
              { id: "b", text: "Rapid loss of >75% species" },
              { id: "c", text: "Normal extinction rate" },
              { id: "d", text: "Migration of species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass extinction",
                statement: ">75% species loss in short time.",
              },
            ],
            steps: [
              {
                reasoning: "Mass extinction = rapid loss of most species.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Rapid loss of >75% species.",
            commonErrors: ["Choosing (a): that's background extinction."],
          },
        },
        {
          id: "s8-u8-extinction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the five major mass extinction events.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mass extinctions",
                statement:
                  "Ordovician, Devonian, Permian, Triassic, Cretaceous.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ordovician (~444 mya), Devonian (~372 mya), Permian (~252 mya), Triassic (~201 mya), Cretaceous (~66 mya).",
                marks: 3,
                markCode: "B",
              },
            ],
            finalAnswer: "Ordovician, Devonian, Permian, Triassic, Cretaceous.",
            commonErrors: ["Missing one or more."],
          },
        },
        {
          id: "s8-u8-extinction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Cretaceous-Paleogene extinction occurred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "K-Pg extinction",
                statement: "Asteroid impact → global catastrophe.",
              },
            ],
            steps: [
              {
                reasoning: "Asteroid ~10 km wide hit Earth ~66 mya.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Impact caused fires, tsunamis, debris blocking sunlight.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Photosynthesis stopped → food chains collapsed.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Dinosaurs and ~75% species extinct; mammals survived.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Asteroid impact → global catastrophe → mass extinction.",
            commonErrors: ["Not mentioning asteroid."],
          },
        },
        {
          id: "s8-u8-extinction-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare background and mass extinction.",
          parts: [
            { label: "a", prompt: "Define each term.", marks: 2 },
            { label: "b", prompt: "What are typical rates?", marks: 2 },
            { label: "c", prompt: "What causes each?", marks: 2 },
            {
              label: "d",
              prompt: "Is the current extinction event a mass extinction?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Extinction types",
                statement: "Background = normal; mass = catastrophic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Background: normal rate; mass: >75% loss in short time.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Background: ~1/million years; mass: hundreds in <1 million years.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Background: competition, predation; mass: asteroid, volcano, climate.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Yes — human-caused rates may qualify as 6th mass extinction.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Normal vs >75% (b) ~1/mya vs hundreds (c) Competition vs catastrophe (d) Yes, possibly.",
            commonErrors: ["Not recognizing current event."],
          },
        },
      ],
    },
    {
      id: "s8-u8-human-evolution",
      title: "Human Evolution",
      skill:
        "Describe major events in human evolution and evidence supporting it.",
      lesson: {
        sections: [
          {
            heading: "Human evolution timeline",
            body: "Key milestones:\n\n- **~6-7 mya**: split from chimpanzees (common ancestor).\n- **~4 mya**: Australopithecus (bipedal).\n- **~2.5 mya**: Homo habilis (stone tools).\n- **~1.8 mya**: Homo erectus (fire, migration).\n- **~300,000 ya**: Homo sapiens (modern humans).\n- **~50,000 ya**: Migration out of Africa.",
          },
          {
            heading: "Evidence",
            body: "- **Fossils**: transitional forms (Australopithecus, Homo erectus).\n- **DNA**: humans share ~98% with chimps.\n- **Anatomy**: bipedalism, brain size increase.\n- **Artifacts**: stone tools, fire use.",
          },
        ],
        keyFormulas: [
          {
            name: "Human evolution",
            statement:
              "Australopithecus → Homo habilis → H. erectus → H. sapiens.",
          },
          {
            name: "Evidence",
            statement: "Fossils + DNA + anatomy + artifacts.",
          },
          {
            name: "Bipedalism",
            statement: "Walking upright — key human trait.",
          },
        ],
        workedExample: {
          problem: "What is the closest living relative to humans?",
          solution:
            "Chimpanzees — share ~98% DNA and common ancestor ~6-7 mya.",
        },
      },
      questions: [
        {
          id: "s8-u8-human-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the closest living relative to humans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gorillas" },
              { id: "b", text: "Chimpanzees" },
              { id: "c", text: "Orangutans" },
              { id: "d", text: "Gibbons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Human relatives",
                statement: "Chimpanzees share ~98% DNA.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chimpanzees are closest living relatives (~98% DNA).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Chimpanzees.",
            commonErrors: ["Choosing gorillas."],
          },
        },
        {
          id: "s8-u8-human-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the major hominin species in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hominin timeline",
                statement:
                  "Australopithecus → H. habilis → H. erectus → H. sapiens.",
              },
            ],
            steps: [
              {
                reasoning: "Australopithecus (~4 mya) — bipedal.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Homo habilis (~2.5 mya) — tools.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Homo erectus (~1.8 mya) → Homo sapiens (~300k ya).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Australopithecus → H. habilis → H. erectus → H. sapiens.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "s8-u8-human-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how bipedalism was advantageous for early humans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Bipedalism",
                statement:
                  "Freed hands for tools; efficient long-distance walking.",
              },
            ],
            steps: [
              {
                reasoning: "Frees hands for carrying tools and food.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "More energy efficient for long-distance walking/running.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Better visibility over tall grass (predator detection).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Changed pelvis/spine structure → eventually enabled brain growth.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Frees hands, efficient locomotion, better visibility.",
            commonErrors: ["Saying it was for running fast."],
          },
        },
        {
          id: "s8-u8-human-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the evidence for human evolution.",
          parts: [
            { label: "a", prompt: "What fossil evidence exists?", marks: 2 },
            { label: "b", prompt: "What molecular evidence exists?", marks: 2 },
            {
              label: "c",
              prompt: "What anatomical evidence exists?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Is human evolution still occurring?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Human evolution evidence",
                statement: "Fossils + DNA + anatomy all support it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Transitional fossils: Australopithecus, H. erectus, H. neanderthalensis.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "DNA: ~98% with chimps; Neanderthal DNA in modern humans.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Bipedalism, brain size increase, reduced jaw muscles.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Yes — populations still evolve (e.g., lactose tolerance).",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Transitional fossils (b) DNA similarities (c) Bipedalism + brain (d) Yes, ongoing.",
            commonErrors: ["Saying evolution stopped."],
          },
        },
      ],
    },
  ],
};

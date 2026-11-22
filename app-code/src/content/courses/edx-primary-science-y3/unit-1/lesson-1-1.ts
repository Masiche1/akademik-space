import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "edps3-u1-lesson-1-1",
  code: "1-1",
  title: "Classifying Living Things",
  goal: "I CAN classify animals into vertebrates and invertebrates.",
  standards: ["Year 3 Science: Classification"],
  vocabulary: [
    { term: "Vertebrate", definition: "Animal with a backbone." },
    { term: "Invertebrate", definition: "Animal without a backbone." },
    { term: "Mammal", definition: "Warm-blooded, fur/hair, milk for babies." },
    { term: "Reptile", definition: "Scaly skin, lays eggs, cold-blooded." },
  ],
  concepts: [
    {
      id: "edps3-u1-vert",
      title: "Vertebrates and their groups",
      skill:
        "Classify vertebrates into mammals, birds, reptiles, amphibians and fish.",
      lesson: {
        sections: [
          {
            heading: "Vertebrates",
            body: "**Vertebrates** have backbones. Five groups: **mammals** (fur, milk — dogs, whales), **birds** (feathers, beaks, lay eggs — eagles), **reptiles** (scaly skin, cold-blooded — snakes, lizards), **amphibians** (moist skin, live in water then land — frogs), **fish** (gills, fins, scales — sharks).",
          },
          {
            heading: "Key features",
            body: "Mammals are warm-blooded and feed milk. Birds have feathers and hollow bones. Reptiles have dry scaly skin. Amphibians start life in water with gills. Fish breathe through gills.",
          },
        ],
        keyFormulas: [
          { name: "Vertebrate", statement: "Has a backbone" },
          { name: "Mammal", statement: "Fur + milk" },
          { name: "Bird", statement: "Feathers + beak" },
        ],
        workedExample: {
          problem: "Is a frog a reptile or amphibian?",
          solution:
            "Amphibian — moist skin, lives in water as tadpole then on land.",
        },
      },
      questions: [
        {
          id: "edps3-u1-ve-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What defines a vertebrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Has feathers" },
              { id: "b", text: "Lays eggs" },
              { id: "c", text: "Has fur" },
              { id: "d", text: "Has a backbone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vertebrate",
                statement: "Has a backbone.",
              },
            ],
            steps: [
              { reasoning: "Vertebrate = backbone.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Has a backbone",
            commonErrors: ["Wrong feature."],
          },
        },
        {
          id: "edps3-u1-ve-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which group do bats belong to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birds" },
              { id: "b", text: "Reptiles" },
              { id: "c", text: "Mammals" },
              { id: "d", text: "Amphibians" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mammals",
                statement: "Fur/hair + milk; bats fit.",
              },
            ],
            steps: [
              { reasoning: "Identify features.", marks: 1, markCode: "M" },
              { reasoning: "Answer: mammals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Mammals",
            commonErrors: ["Chosen as birds due to flying."],
          },
        },
        {
          id: "edps3-u1-ve-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one feature that distinguishes birds from mammals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Birds",
                statement: "Feathers, beaks, lay eggs.",
              },
            ],
            steps: [
              { reasoning: "Feature identified.", marks: 1, markCode: "A" },
              { reasoning: "Correct contrast.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Birds have feathers; mammals have fur and feed milk'",
            commonErrors: ["Feature not distinguishing."],
          },
        },
        {
          id: "edps3-u1-ve-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A whale lives in water and has flippers. Is it a fish? Justify your answer.",
          parts: [
            { label: "a", prompt: "Key features of whale", marks: 1 },
            { label: "b", prompt: "Compare with fish", marks: 1 },
            { label: "c", prompt: "Correct classification", marks: 1 },
            { label: "d", prompt: "Full justification", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Whales",
                statement: "Mammals — breathe air, feed milk, warm-blooded.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Features listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Fish compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Mammal identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "No — whale is a mammal: breathes air, feeds milk, warm-blooded, despite living in water",
            commonErrors: ["Classified as fish by habitat."],
          },
        },
      ],
    },
    {
      id: "edps3-u1-invert",
      title: "Invertebrates",
      skill: "Identify major invertebrate groups and their features.",
      lesson: {
        sections: [
          {
            heading: "Invertebrates",
            body: "**Invertebrates** have no backbone — the largest animal group. Main groups: **insects** (6 legs, 3 body parts — ants, butterflies), **arachnids** (8 legs — spiders), **crustaceans** (many legs, hard shell — crabs, prawns), **molluscs** (soft body — snails, slugs, octopus), **worms** (segmented — earthworms).",
          },
          {
            heading: "Counting legs",
            body: "Insects have exactly **6 legs** in 3 pairs; spiders have **8**; crabs have 10+; centipedes many. Body parts: insects have head/thorax/abdomen.",
          },
        ],
        keyFormulas: [
          { name: "Invertebrate", statement: "No backbone" },
          { name: "Insect", statement: "6 legs, 3 body parts" },
          { name: "Arachnid", statement: "8 legs" },
        ],
        workedExample: {
          problem: "Is a spider an insect?",
          solution: "No — spiders are arachnids with 8 legs; insects have 6.",
        },
      },
      questions: [
        {
          id: "edps3-u1-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many legs does an insect have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "10" },
              { id: "c", text: "8" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insects", statement: "6 legs." },
            ],
            steps: [
              { reasoning: "Insects = 6 legs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 6",
            commonErrors: ["Confused with spiders."],
          },
        },
        {
          id: "edps3-u1-in-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which group is a snail?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mollusc" },
              { id: "b", text: "Insect" },
              { id: "c", text: "Worm" },
              { id: "d", text: "Arachnid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molluscs",
                statement: "Soft body — snails, slugs.",
              },
            ],
            steps: [
              { reasoning: "Identify group.", marks: 1, markCode: "M" },
              { reasoning: "Answer: mollusc.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Mollusc",
            commonErrors: ["Wrong group."],
          },
        },
        {
          id: "edps3-u1-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can you tell an insect from a spider?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insect vs arachnid",
                statement: "6 vs 8 legs; 3 vs 2 body parts.",
              },
            ],
            steps: [
              { reasoning: "Legs compared.", marks: 1, markCode: "A" },
              { reasoning: "Body parts compared.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Insects have 6 legs and 3 body parts; spiders have 8 legs and 2 body parts",
            commonErrors: ["Incomplete comparison."],
          },
        },
        {
          id: "edps3-u1-in-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create a classification key to sort: ant, spider, crab, earthworm.",
          parts: [
            { label: "a", prompt: "First question", marks: 1 },
            { label: "b", prompt: "Second question", marks: 1 },
            { label: "c", prompt: "All four sorted", marks: 1 },
            { label: "d", prompt: "Logical key", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Classification key",
                statement: "Has backbone? Legs count? Body features?",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "First split valid.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Second split valid.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "All sorted.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Logical flow.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 1a legs>6? → crab; 1b 6 legs? → ant; 1c 8 legs? → spider; no legs → earthworm",
            commonErrors: ["Key doesn't sort all."],
          },
        },
      ],
    },
  ],
};

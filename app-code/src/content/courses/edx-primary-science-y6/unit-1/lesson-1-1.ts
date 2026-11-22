import type { Lesson } from "../../../types.ts";

export const lesson161: Lesson = {
  id: "edps6-u1-lesson-1-1",
  code: "1-1",
  title: "Classification and Adaptation",
  goal: "I CAN classify organisms and describe adaptations.",
  standards: ["Year 6 Science: Classification and adaptation"],
  vocabulary: [
    { term: "Vertebrate/invertebrate", definition: "Has/no backbone." },
    {
      term: "Mammal/bird/reptile/amphibian/fish",
      definition: "Five vertebrate groups.",
    },
    { term: "Adaptation", definition: "Inherited feature helping survival." },
    {
      term: "Camouflage/mimicry",
      definition: "Blending/hiding / copying harmful species.",
    },
  ],
  concepts: [
    {
      id: "edps6-u1-classification",
      title: "Classification groups",
      skill: "Classify animals into vertebrate groups and major invertebrates.",
      lesson: {
        sections: [
          {
            heading: "Vertebrates",
            body: "**Mammals** (fur/hair, milk, warm-blooded), **birds** (feathers, beaks, lay eggs), **reptiles** (scaly skin, cold-blooded), **amphibians** (moist skin, water+land), **fish** (gills, fins, scales).",
          },
          {
            heading: "Invertebrates",
            body: "**Insects** (6 legs, 3 body parts), **arachnids** (8 legs), **crustaceans** (hard shell, many legs), **molluscs** (soft body — snail, octopus), **worms** (segmented).",
          },
        ],
        keyFormulas: [
          { name: "Vertebrate", statement: "Has backbone" },
          { name: "Insect", statement: "6 legs, 3 parts" },
          { name: "Arachnid", statement: "8 legs" },
        ],
        workedExample: {
          problem: "Is a spider an insect?",
          solution: "No — arachnid with 8 legs; insects have 6.",
        },
      },
      questions: [
        {
          id: "edps6-u1-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many legs does an insect have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "4" },
              { id: "c", text: "10" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insect", statement: "6 legs." },
            ],
            steps: [{ reasoning: "Insects = 6.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 6",
            commonErrors: ["Confused with arachnid."],
          },
        },
        {
          id: "edps6-u1-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which group is a dolphin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mammal" },
              { id: "b", text: "Reptile" },
              { id: "c", text: "Amphibian" },
              { id: "d", text: "Fish" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mammals",
                statement: "Dolphins breathe air, feed milk.",
              },
            ],
            steps: [
              { reasoning: "Identify features.", marks: 1, markCode: "M" },
              { reasoning: "Answer: mammal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mammal",
            commonErrors: ["Chosen as fish."],
          },
        },
        {
          id: "edps6-u1-cl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish vertebrates from invertebrates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classification",
                statement: "Backbone vs no backbone.",
              },
            ],
            steps: [
              { reasoning: "Vertebrate defined.", marks: 1, markCode: "A" },
              { reasoning: "Invertebrate defined.", marks: 1, markCode: "A" },
              { reasoning: "Clear contrast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vertebrates have backbones; invertebrates don't",
            commonErrors: ["Incomplete contrast."],
          },
        },
        {
          id: "edps6-u1-cl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A platypus lays eggs but feeds milk. Which vertebrate group does it belong to and why?",
          parts: [
            { label: "a", prompt: "Key features", marks: 1 },
            { label: "b", prompt: "Group identified", marks: 1 },
            { label: "c", prompt: "Justification", marks: 1 },
            { label: "d", prompt: "Full answer", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mammals",
                statement: "Milk-feeding = mammal despite egg-laying.",
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
                reasoning: "Mammal identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Justified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Mammal — feeds milk to young (key mammal feature); egg-laying is unusual but doesn't change classification",
            commonErrors: ["Classified as reptile/bird."],
          },
        },
      ],
    },
    {
      id: "edps6-u1-adapt",
      title: "Adaptations and Evolution",
      skill: "Describe adaptations and natural selection in detail.",
      lesson: {
        sections: [
          {
            heading: "Adaptation types",
            body: "**Structural** (body features — thick fur, sharp teeth), **behavioural** (actions — migration, hibernation), **physiological** (internal — venom, antifreeze blood). Adaptations increase survival and reproduction.",
          },
          {
            heading: "Natural selection",
            body: "Variation → selection pressure → helpful traits survive → reproduce → trait frequency increases over generations = **evolution**. Not goal-directed — just survival of the fittest.",
          },
        ],
        keyFormulas: [
          { name: "Structural adaptation", statement: "Body feature" },
          { name: "Behavioural", statement: "Action" },
          { name: "Natural selection", statement: "Helpful traits increase" },
        ],
        workedExample: {
          problem:
            "Is a camel's hump structural, behavioural or physiological?",
          solution: "Structural — it's a body feature storing fat.",
        },
      },
      questions: [
        {
          id: "edps6-u1-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A food source" },
              { id: "b", text: "An inherited feature helping survival" },
              { id: "c", text: "A habitat" },
              { id: "d", text: "A learned behaviour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation",
                statement: "Inherited survival feature.",
              },
            ],
            steps: [
              { reasoning: "Adaptation defined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An inherited feature helping survival",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps6-u1-ad-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a behavioural adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Camouflage colour" },
              { id: "b", text: "Migration" },
              { id: "c", text: "Sharp claws" },
              { id: "d", text: "Thick fur" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Behavioural",
                statement: "Action — migration.",
              },
            ],
            steps: [
              { reasoning: "Identify behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Answer: migration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Migration",
            commonErrors: ["Structural chosen."],
          },
        },
        {
          id: "edps6-u1-ad-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain natural selection using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Natural selection",
                statement: "Variation+pressure→trait increase.",
              },
            ],
            steps: [
              { reasoning: "Variation described.", marks: 1, markCode: "A" },
              { reasoning: "Selection described.", marks: 1, markCode: "A" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Beetles vary in colour; predators see light ones; dark beetles survive and reproduce, becoming dominant'",
            commonErrors: ["No mechanism."],
          },
        },
        {
          id: "edps6-u1-ad-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why antibiotic resistance is a concern for humans.",
          parts: [
            { label: "a", prompt: "How resistance develops", marks: 1 },
            { label: "b", prompt: "Spread", marks: 1 },
            { label: "c", prompt: "Consequence", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antibiotic resistance",
                statement:
                  "Bacteria evolve resistance; infections harder to treat.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Development explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Spread explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Consequence stated.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Antibiotics kill susceptible bacteria; resistant survive and reproduce, spreading resistance — infections become harder to treat",
            commonErrors: ["No evolution link."],
          },
        },
      ],
    },
  ],
};

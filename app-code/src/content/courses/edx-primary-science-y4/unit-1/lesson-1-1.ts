import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "edps4-u1-lesson-1-1",
  code: "1-1",
  title: "Living Things: Classification and Life Cycles",
  goal: "I CAN classify animals in detail and describe more complex life cycles.",
  standards: ["Year 4 Science: Living things"],
  vocabulary: [
    {
      term: "Herbivore/carnivore/omnivore",
      definition: "Eats plants / meat / both.",
    },
    { term: "Scavenger", definition: "Eats dead/decaying matter." },
    { term: "Larva/nymph", definition: "Insect young stages." },
    { term: "Hibernation", definition: "Winter sleep to conserve energy." },
  ],
  concepts: [
    {
      id: "edps4-u1-diet",
      title: "Animal diets and feeding",
      skill: "Classify animals by diet: herbivore, carnivore, omnivore.",
      lesson: {
        sections: [
          {
            heading: "Diet types",
            body: "**Herbivores** eat only plants (rabbit, cow). **Carnivores** eat only meat (lion, shark). **Omnivores** eat both (human, bear, crow). **Scavengers** feed on dead matter (vulture, maggot).",
          },
          {
            heading: "Teeth for diet",
            body: "Herbivores have flat grinding teeth; carnivores have sharp tearing teeth; omnivores have a mix. Teeth shape matches diet.",
          },
        ],
        keyFormulas: [
          { name: "Herbivore", statement: "Plants only" },
          { name: "Carnivore", statement: "Meat only" },
          { name: "Omnivore", statement: "Plants + meat" },
        ],
        workedExample: {
          problem: "Is a panda a carnivore?",
          solution:
            "Omnivore — mainly eats bamboo (plant) but is a bear (mammal that can eat meat).",
        },
      },
      questions: [
        {
          id: "edps4-u1-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a herbivore eat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both" },
              { id: "b", text: "Only plants" },
              { id: "c", text: "Dead matter" },
              { id: "d", text: "Only meat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herbivore",
                statement: "Plants only.",
              },
            ],
            steps: [{ reasoning: "Herbivore diet.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Only plants",
            commonErrors: ["Wrong diet."],
          },
        },
        {
          id: "edps4-u1-di-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an omnivore?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bear" },
              { id: "b", text: "Eagle" },
              { id: "c", text: "Rabbit" },
              { id: "d", text: "Lion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Omnivore",
                statement: "Eats plants and meat — bear fits.",
              },
            ],
            steps: [
              { reasoning: "Identify omnivore.", marks: 1, markCode: "M" },
              { reasoning: "Answer: bear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Bear",
            commonErrors: ["Wrong animal."],
          },
        },
        {
          id: "edps4-u1-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do carnivore teeth differ from herbivore teeth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Teeth and diet",
                statement:
                  "Carnivores: sharp/pointed; herbivores: flat/grinding.",
              },
            ],
            steps: [
              {
                reasoning: "Carnivore teeth described.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Herbivore teeth described.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Link explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Carnivores have sharp teeth for tearing meat; herbivores have flat teeth for grinding plants",
            commonErrors: ["No diet link."],
          },
        },
        {
          id: "edps4-u1-di-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A new animal is found: it eats grass, insects and occasionally fish. Classify its diet and justify.",
          parts: [
            { label: "a", prompt: "What it eats", marks: 1 },
            { label: "b", prompt: "Diet category", marks: 1 },
            { label: "c", prompt: "Justification", marks: 1 },
            { label: "d", prompt: "Full answer", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Omnivore",
                statement: "Eats plants and animals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Foods listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Omnivore identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Justified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Omnivore — eats both plants (grass) and animals (insects, fish)",
            commonErrors: ["Wrong classification."],
          },
        },
      ],
    },
    {
      id: "edps4-u1-lifecycle",
      title: "More complex life cycles",
      skill: "Describe life cycles including insects, amphibians and plants.",
      lesson: {
        sections: [
          {
            heading: "Insect cycles",
            body: "**Complete metamorphosis**: egg → larva → pupa → adult (butterfly, beetle, mosquito). **Incomplete metamorphosis**: egg → nymph → adult (grasshopper, dragonfly) — nymph looks like small adult, grows by molting.",
          },
          {
            heading: "Plant and frog cycles",
            body: "Plants: seed → germination → seedling → mature → flower → pollination → seed/fruit. Frogs: egg → tadpole (gills, tail) → froglet (legs, loses tail) → adult.",
          },
        ],
        keyFormulas: [
          { name: "Complete metamorphosis", statement: "Egg→larva→pupa→adult" },
          { name: "Incomplete", statement: "Egg→nymph→adult" },
          { name: "Metamorphosis", statement: "Body form changes" },
        ],
        workedExample: {
          problem: "Does a grasshopper have a pupa stage?",
          solution: "No — incomplete metamorphosis: egg → nymph → adult.",
        },
      },
      questions: [
        {
          id: "edps4-u1-lc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which insect undergoes complete metamorphosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Butterfly" },
              { id: "b", text: "Dragonfly" },
              { id: "c", text: "Grasshopper" },
              { id: "d", text: "Aphid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complete metamorphosis",
                statement: "Butterfly has larva+pupa.",
              },
            ],
            steps: [
              {
                reasoning: "Identify complete cycle.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Butterfly",
            commonErrors: ["Wrong insect."],
          },
        },
        {
          id: "edps4-u1-lc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a nymph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adult insect" },
              { id: "b", text: "Insect pupa" },
              { id: "c", text: "Young insect resembling adult" },
              { id: "d", text: "Insect egg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nymph",
                statement: "Young insect like small adult.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: nymph.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Young insect resembling adult",
            commonErrors: ["Confused with larva."],
          },
        },
        {
          id: "edps4-u1-lc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare complete and incomplete metamorphosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metamorphosis",
                statement: "Complete=larva+pupa; incomplete=nymph only.",
              },
            ],
            steps: [
              { reasoning: "Complete described.", marks: 1, markCode: "A" },
              { reasoning: "Incomplete described.", marks: 1, markCode: "A" },
              { reasoning: "Difference clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Complete has larva→pupa→adult (big change); incomplete has nymph→adult (small change)",
            commonErrors: ["Incomplete comparison."],
          },
        },
        {
          id: "edps4-u1-lc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scientist finds an insect: egg → young looks like adult but smaller → adult. Name the type of metamorphosis and justify.",
          parts: [
            { label: "a", prompt: "Stages identified", marks: 1 },
            { label: "b", prompt: "Metamorphosis type", marks: 1 },
            { label: "c", prompt: "Justification", marks: 1 },
            { label: "d", prompt: "Full answer", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incomplete metamorphosis",
                statement: "No pupa; nymph resembles adult.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Stages listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Incomplete identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Justified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Incomplete metamorphosis — young (nymph) resembles adult, no pupa stage",
            commonErrors: ["Wrong type."],
          },
        },
      ],
    },
  ],
};

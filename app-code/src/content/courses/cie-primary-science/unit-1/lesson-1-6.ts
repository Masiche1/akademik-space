import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cips-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 2 — Animals and How They Live",
  goal: "I CAN describe what animals need and how they grow.",
  standards: ["Cambridge Primary Science 0097 Stage 2: animals",
  "Cambridge Primary Science 0097 framework substrands: 2Be, 2Bp"],
  stage: 2,
  vocabulary: [
    { term: "Pet", definition: "An animal kept at home for company, like a dog or cat." },
    { term: "Farm animal", definition: "An animal raised on a farm, like a cow, sheep or chicken." },
    { term: "Baby animal", definition: "The young of an animal — calf, chick, kitten." },
    { term: "Habitat", definition: "The place where an animal lives." },
    { term: "Diet", definition: "What an animal eats." },
  ],
  concepts: [
    {
      id: "cips-u1-s6-animals",
      title: "Animal needs and growth",
      skill: "Describe animal needs, babies and habitats at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "What animals need",
            body: "All animals need food, water, air and shelter. Different animals eat different foods — cats and dogs are carnivores (meat), rabbits and cows are herbivores (plants), and bears are omnivores (both). Each animal has a habitat suited to its needs: fish live in water, birds in nests, burrowing animals underground.",
          },
          {
            heading: "Animal babies and groups",
            body: "Animal babies have special names: puppies, kittens, calves, chicks, lambs. Most mammals are born live and fed milk; birds and reptiles lay eggs. Farm animals give us food — cows give milk and beef, sheep give wool, chickens give eggs.",
          },
        ],
        keyFormulas: [
          { name: "Animal needs", statement: "Food + water + air + shelter" },
          { name: "Diet types", statement: "Carnivore = meat; herbivore = plants; omnivore = both" },
        ],
        workedExample: {
          problem: "A rabbit lives in a burrow and eats grass. What type of diet is this?",
          solution: "Herbivore — rabbits eat only plants.",
        },
      },
      questions: [
        {
          id: "cips-u1-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT something all animals need?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Television" }, { id: "b", text: "Food" }, { id: "c", text: "Water" }, { id: "d", text: "Shelter" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Animal needs", statement: "Food, water, air, shelter." }],
            steps: [{ reasoning: "Animals don't need TVs — they need food/water/air/shelter.", marks: 1, markCode: "A" }],
            finalAnswer: "Television",
          },
        },
        {
          id: "cips-u1-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a baby cow called?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Baby animals", statement: "Calf = baby cow." }],
            steps: [
              { reasoning: "A baby cow is a calf.", marks: 1, markCode: "M" },
              { reasoning: "Answer: calf.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Calf",
          },
        },
        {
          id: "cips-u1-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bear eats fish, berries and honey. What type of diet does it have?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Omnivore", statement: "Eats both plants and meat." }],
            steps: [
              { reasoning: "Bears eat meat (fish) and plants (berries/honey).", marks: 1, markCode: "M" },
              { reasoning: "Both types ⇒ omnivore.", marks: 1, markCode: "M" },
              { reasoning: "Answer: omnivore.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Omnivore",
          },
        },
        {
          id: "cips-u1-an-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Name two farm animals and one product each gives us.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Farm animals", statement: "Cows→milk/beef; sheep→wool; chickens→eggs." }],
            steps: [
              { reasoning: "Two correct farm animals named.", marks: 1, markCode: "M" },
              { reasoning: "First product correct.", marks: 1, markCode: "M" },
              { reasoning: "Second product correct.", marks: 1, markCode: "M" },
              { reasoning: "Answer complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. cow→milk, sheep→wool",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-an-notes",
      title: "Animals — revision notes",
      summary: "Needs: food/water/air/shelter; carnivore/herbivore/omnivore; baby names; farm products.",
      sections: [
        { heading: "Needs", body: "Every animal needs food, water, air and shelter in its habitat." },
        { heading: "Diets", body: "Meat only = carnivore; plants only = herbivore; both = omnivore." },
      ],
    },
  ],
};

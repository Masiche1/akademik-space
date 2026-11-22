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
            { id: "a", text: "Shelter" },
            { id: "b", text: "Television" },
            { id: "c", text: "Water" },
            { id: "d", text: "Food" },
          ], correctChoiceId: "b" },
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
        {
          id: "cips-u1-an-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a baby chicken called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lamb" },
            { id: "b", text: "Chick" },
            { id: "c", text: "Puppy" },
            { id: "d", text: "Calf" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Baby animals", statement: "Chick = baby chicken." }],
            steps: [{ reasoning: "A baby chicken is a chick.", marks: 1, markCode: "A" }],
            finalAnswer: "Chick",
          },
        },
        {
          id: "cips-u1-an-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animal is a HERBIVORE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A shark" },
            { id: "b", text: "An eagle" },
            { id: "c", text: "A rabbit" },
            { id: "d", text: "A lion" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Herbivore", statement: "Eats plants only." }],
            steps: [{ reasoning: "Rabbits eat plants only — herbivore.", marks: 1, markCode: "A" }],
            finalAnswer: "A rabbit",
          },
        },
        {
          id: "cips-u1-an-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "All animals need food, water, air and which other thing?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1, unit: "thing (shelter)" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Animal needs", statement: "Food, water, air, shelter." }],
            steps: [{ reasoning: "Shelter is the fourth need.", marks: 1, markCode: "M" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cips-u1-an-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A zoo has 6 cows and 4 sheep. How many farm animals are there in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "animals" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Counting animals", statement: "Add groups for total." }],
            steps: [
              { reasoning: "$6 + 4 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total farm animals = 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u1-an-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which animal is a CARNIVORE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cow" },
            { id: "b", text: "A cat" },
            { id: "c", text: "A sheep" },
            { id: "d", text: "A horse" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Carnivore", statement: "Eats meat only." }],
            steps: [{ reasoning: "Cats eat meat — carnivore.", marks: 1, markCode: "A" }],
            finalAnswer: "A cat",
          },
        },
        {
          id: "cips-u1-an-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two baby animals and the adult they grow into.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Baby animals", statement: "Puppies→dogs, calves→cows, chicks→chickens." }],
            steps: [
              { reasoning: "First baby + adult pair (e.g. puppy→dog).", marks: 1, markCode: "M" },
              { reasoning: "Second baby + adult pair (e.g. calf→cow).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. puppy→dog, calf→cow",
          },
        },
        {
          id: "cips-u1-an-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pet dog needs food, water, air and shelter. Explain why each of these is important for the dog.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Animal needs", statement: "Food/water/air/shelter keep animals alive." }],
            steps: [
              { reasoning: "Food gives energy and keeps the dog healthy.", marks: 1, markCode: "M" },
              { reasoning: "Water keeps the body working; air is needed to breathe.", marks: 1, markCode: "M" },
              { reasoning: "Shelter protects the dog from weather and danger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Food=energy, water+air=survival, shelter=protection",
          },
        },
        {
          id: "cips-u1-an-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which animal lays eggs rather than giving birth to live young?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cow" },
            { id: "b", text: "A chicken" },
            { id: "c", text: "A cat" },
            { id: "d", text: "A dog" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Egg-laying", statement: "Birds and reptiles lay eggs." }],
            steps: [{ reasoning: "Chickens (birds) lay eggs; dogs, cats, cows are mammals.", marks: 1, markCode: "A" }],
            finalAnswer: "A chicken",
          },
        },
        {
          id: "cips-u1-an-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A farmer collects 12 eggs on Monday and 8 on Tuesday. How many eggs did she collect in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "eggs" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Farm products", statement: "Add eggs for total." }],
            steps: [
              { reasoning: "$12 + 8 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Total eggs = 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cips-u1-an-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a fish's habitat is water while a rabbit's is a burrow — link the habitat to the animal's needs.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Habitat", statement: "Natural home suited to the animal's needs." }],
            steps: [
              { reasoning: "Fish need water to breathe and live — water is their habitat.", marks: 1, markCode: "M" },
              { reasoning: "Rabbits need shelter and safety — a burrow provides it underground.", marks: 1, markCode: "M" },
              { reasoning: "Habitats suit each animal's needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitats match each animal's needs",
          },
        },
        {
          id: "cips-u1-an-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do most mammals feed their babies with?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Milk" },
            { id: "b", text: "Insects" },
            { id: "c", text: "Seeds" },
            { id: "d", text: "Nothing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mammals", statement: "Most mammals are born live and fed milk." }],
            steps: [{ reasoning: "Mammals feed babies milk.", marks: 1, markCode: "A" }],
            finalAnswer: "Milk",
          },
        },
        {
          id: "cips-u1-an-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name four things all animals need. (b) What is a carnivore, herbivore and omnivore? Give an example of each. (c) What is a baby cow and a baby chicken called? (d) Name two farm animals and a product from each. (e) How is a fish's habitat different from a rabbit's? (f) Do birds lay eggs or give birth to live young? (g) Why does a rabbit live in a burrow? (h) What do mammal mothers feed their babies?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Animals", statement: "Integrated Stage 2 animals answer." }],
            steps: [
              { reasoning: "(a) Food, water, air, shelter.", marks: 1, markCode: "M" },
              { reasoning: "(b) Carnivore=meat (cat), herbivore=plants (rabbit), omnivore=both (bear).", marks: 1, markCode: "M" },
              { reasoning: "(c) Calf and chick.", marks: 1, markCode: "M" },
              { reasoning: "(d) e.g. cow→milk, sheep→wool, chicken→eggs.", marks: 1, markCode: "M" },
              { reasoning: "(e) Fish live in water; rabbits in burrows on land.", marks: 1, markCode: "M" },
              { reasoning: "(f) Birds lay eggs.", marks: 1, markCode: "M" },
              { reasoning: "(g) Burrow gives shelter and safety underground.", marks: 1, markCode: "M" },
              { reasoning: "(h) Milk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Needs, diets, baby names, farm products, habitats, eggs, burrow, milk.",
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

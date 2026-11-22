import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "pypsc-u1-lesson-1-2",
  code: "1-2",
  title: "Life Cycles and Habitats",
  goal: "I CAN describe the life cycle of plants and animals and explain how living things adapt to their habitats.",
  standards: [
    "PYP Science: Living things",
    "PYP transdisciplinary theme: Who We Are",
    "PYP transdisciplinary theme: Sharing the Planet",
  ],
  vocabulary: [
    { term: "Life cycle", definition: "The stages a living thing goes through from birth/seed to adult and back to the start." },
    { term: "Larva", definition: "The young stage of some animals, like a caterpillar before it becomes a butterfly." },
    { term: "Pupa / Chrysalis", definition: "The stage where a caterpillar changes into a butterfly inside a protective case." },
    { term: "Habitat", definition: "The natural home of a living thing — where it finds food, water, shelter and space." },
    { term: "Adaptation", definition: "A feature that helps a living thing survive in its habitat, like a camel's hump or a fish's fins." },
    { term: "Germination", definition: "When a seed starts to grow into a plant." },
  ],
  concepts: [
    {
      id: "pypsc-u1l2-c1-life-cycles",
      title: "Life cycles",
      skill: "Describe and order the stages of plant and animal life cycles.",
      lesson: {
        sections: [
          {
            heading: "Animal life cycles",
            body: "Animals grow through stages. A **butterfly**: egg → **larva** (caterpillar) → **pupa** (chrysalis) → adult butterfly. A **frog**: egg → **tadpole** → froglet → adult frog. A **chicken**: egg → chick → adult hen/rooster. Some animals, like humans and dogs, are born looking like small versions of the adults — they just grow bigger.",
          },
          {
            heading: "Plant life cycles",
            body: "Plants start as **seeds**. With water, warmth and light the seed **germinates** — a root grows down and a shoot grows up. The plant grows leaves, then **flowers**, then makes new seeds. When seeds fall or are carried away, the cycle starts again. This is how plants make more plants.",
          },
        ],
        keyFormulas: [
          { name: "Butterfly cycle", statement: "Egg → Larva (caterpillar) → Pupa (chrysalis) → Adult" },
          { name: "Frog cycle", statement: "Egg → Tadpole → Froglet → Adult frog" },
          { name: "Plant cycle", statement: "Seed → Germination → Seedling → Adult plant → Flower → New seeds" },
        ],
        workedExample: {
          problem: "Put the butterfly life cycle in order: pupa, egg, adult, caterpillar.",
          solution: "Egg → caterpillar (larva) → pupa (chrysalis) → adult butterfly.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u1l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of a butterfly's life cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Caterpillar" },
              { id: "b", text: "Adult butterfly" },
              { id: "c", text: "Egg" },
              { id: "d", text: "Pupa" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Life cycle", statement: "Life cycles start with an egg or seed." },
            ],
            steps: [
              { reasoning: "The butterfly life cycle begins with an egg.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Egg",
            commonErrors: ["Choosing caterpillar — that is the second stage, the larva."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tadpole changes into a frog. What is this stage called, and what does the tadpole use to breathe and swim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metamorphosis", statement: "Tadpoles undergo metamorphosis — they change body shape as they grow." },
            ],
            steps: [
              { reasoning: "The stage is called a tadpole (the larva stage).", marks: 1, markCode: "M" },
              { reasoning: "Tadpoles use gills to breathe and a tail to swim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tadpole stage; gills for breathing, tail for swimming.",
            commonErrors: ["Saying tadpoles 'breathe air' — they use gills like fish."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Put these stages of a plant's life cycle in order: flowering, seed, germination, seedling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Plant life cycle order", statement: "Seed → germination → seedling → adult → flower → new seeds." },
            ],
            steps: [
              { reasoning: "The cycle starts with a seed.", marks: 1, markCode: "M" },
              { reasoning: "Then germination (sprouting), then seedling, then flowering.", marks: 1, markCode: "M" },
              { reasoning: "Correct order: seed, germination, seedling, flowering.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seed → germination → seedling → flowering",
            commonErrors: ["Putting flowering first — plants must grow before they can flower."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class observes a butterfly emerging from its chrysalis.",
          parts: [
            { label: "a", prompt: "List the four stages of the butterfly life cycle in order.", marks: 2 },
            { label: "b", prompt: "Which stage is the caterpillar? What does it do?", marks: 2 },
            { label: "c", prompt: "Why does the butterfly need to go through the chrysalis stage?", marks: 1 },
            { label: "d", prompt: "Compare this to a chicken's life cycle — what is similar and what is different?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metamorphosis", statement: "Complete metamorphosis (butterfly) changes body form; chickens grow directly." },
            ],
            steps: [
              { part: "a", reasoning: "Egg → larva (caterpillar) → pupa (chrysalis) → adult.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All four stages correct and ordered.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The caterpillar is the larva — it eats and grows.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It looks completely different from the adult butterfly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The chrysalis protects it while its body changes into an adult.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Similar: both start as eggs and become adults. Different: chicken grows directly (chick looks like hen); butterfly changes completely (metamorphosis).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear comparison made.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) egg→larva→pupa→adult (b) caterpillar eats/grows, looks different (c) protection during change (d) both eggs; chicken direct, butterfly metamorphosis",
            commonErrors: ["In (d), saying both 'change completely' — chicks look like small hens."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first stage of a plant's life cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flower" },
              { id: "b", text: "Seedling" },
              { id: "c", text: "Seed" },
              { id: "d", text: "Fruit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant life cycle", statement: "Plants start as seeds before germinating and growing." },
            ],
            steps: [
              { reasoning: "The plant life cycle begins with a seed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Seed",
            commonErrors: ["Choosing seedling — a seedling grows after the seed germinates."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many stages are in the butterfly life cycle: egg, larva, pupa and adult?",
          response: {
            type: "numeric",
            parts: [{ label: "Stages", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Butterfly cycle", statement: "Butterfly stages are egg, larva, pupa and adult." },
            ],
            steps: [
              { reasoning: "The stages are egg, larva, pupa and adult.", marks: 1, markCode: "M" },
              { reasoning: "There are four stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting the caterpillar and chrysalis as separate from larva and pupa — they are the same stages."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a tadpole changes into a frog using the idea of a life cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frog life cycle", statement: "Frogs change from egg to tadpole to froglet to adult through metamorphosis." },
            ],
            steps: [
              { reasoning: "The egg hatches into a tadpole, which grows legs and loses its tail.", marks: 1, markCode: "M" },
              { reasoning: "It becomes a froglet and then an adult frog, completing the cycle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Egg → tadpole → froglet → adult frog; the body changes as it grows.",
            commonErrors: ["Saying the tadpole becomes a different animal — it becomes a frog."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the caterpillar stage of a butterfly called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Larva" },
              { id: "b", text: "Pupa" },
              { id: "c", text: "Egg" },
              { id: "d", text: "Adult" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Larva", statement: "The larva is the young feeding stage, such as a caterpillar." },
            ],
            steps: [
              { reasoning: "A caterpillar is the larva stage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Larva",
            commonErrors: ["Choosing pupa — the chrysalis is the pupa stage after the caterpillar."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many stages are in the frog life cycle: egg, tadpole, froglet and adult?",
          response: {
            type: "numeric",
            parts: [{ label: "Stages", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frog life cycle", statement: "The frog cycle has four stages from egg to adult." },
            ],
            steps: [
              { reasoning: "The stages are egg, tadpole, froglet and adult.", marks: 1, markCode: "M" },
              { reasoning: "They are four stages in order.", marks: 1, markCode: "M" },
              { reasoning: "The count is four.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting tadpole and froglet as the same stage — they are different stages."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare the life cycle of a butterfly with the life cycle of a plant. What is similar and what is different?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Animal and plant cycles", statement: "Both start from a new living unit and end by making more; animals change body form while plants grow and flower." },
            ],
            steps: [
              { reasoning: "Both begin with an egg or seed and end by producing new life.", marks: 1, markCode: "M" },
              { reasoning: "The butterfly changes body form completely through larva and pupa.", marks: 1, markCode: "M" },
              { reasoning: "The plant grows from seed to seedling to adult and makes seeds through flowers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both repeat from egg/seed to new life; butterfly changes form, plant grows and flowers.",
            commonErrors: ["Saying plants have no cycle — seeds continue the plant life cycle."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a seed need to start germinating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only toys" },
              { id: "b", text: "Water, warmth and light" },
              { id: "c", text: "Only wind" },
              { id: "d", text: "Only darkness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Germination needs", statement: "Seeds need water, warmth and light to germinate." },
            ],
            steps: [
              { reasoning: "Water, warmth and light start germination.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water, warmth and light",
            commonErrors: ["Choosing only water — seeds also need warmth and light."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many plant life-cycle stages are listed here: seed, germination, seedling, flowering and new seeds?",
          response: {
            type: "numeric",
            parts: [{ label: "Stages", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant cycle stages", statement: "The listed stages run from seed to new seeds." },
            ],
            steps: [
              { reasoning: "Seed, germination, seedling, flowering and new seeds are listed.", marks: 1, markCode: "M" },
              { reasoning: "There are five stages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting that new seeds are part of the cycle — they start the next generation."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important that living things pass through a life cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose of life cycles", statement: "Life cycles allow living things to grow, reproduce and continue their kind." },
            ],
            steps: [
              { reasoning: "The cycle lets the organism grow from young to adult.", marks: 1, markCode: "M" },
              { reasoning: "Adults produce eggs or seeds so new living things can start.", marks: 1, markCode: "M" },
              { reasoning: "This keeps the species continuing generation after generation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Life cycles allow growth, reproduction and continuation of the species.",
            commonErrors: ["Saying life cycles are just for fun — they are needed for survival of the kind."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which order correctly shows a butterfly life cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Caterpillar, egg, adult, chrysalis" },
              { id: "b", text: "Adult, egg, caterpillar, chrysalis" },
              { id: "c", text: "Egg, caterpillar, chrysalis, adult" },
              { id: "d", text: "Egg, chrysalis, caterpillar, adult" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Butterfly order", statement: "Egg → larva/caterpillar → pupa/chrysalis → adult." },
            ],
            steps: [
              { reasoning: "The egg comes first, then caterpillar, then chrysalis, then adult.", marks: 1, markCode: "M" },
              { reasoning: "Only option a follows that order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Egg, caterpillar, chrysalis, adult",
            commonErrors: ["Putting chrysalis before caterpillar — the caterpillar becomes the chrysalis."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "If three butterflies each start their life cycle with one egg, how many eggs are needed in total?",
          response: {
            type: "numeric",
            parts: [{ label: "Eggs", answer: 3, tolerance: 0, unit: "eggs" }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Life cycle count", statement: "Each butterfly life cycle starts with one egg." },
            ],
            steps: [
              { reasoning: "One egg starts each butterfly cycle.", marks: 1, markCode: "M" },
              { reasoning: "Three butterflies need three eggs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 eggs",
            commonErrors: ["Multiplying by four stages — only one egg is needed per cycle."],
          },
        },
        {
          id: "pypsc-q-u1l2c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the main job of the pupa or chrysalis stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To fly to a new habitat" },
              { id: "b", text: "To lay eggs" },
              { id: "c", text: "To protect the body while it changes into an adult" },
              { id: "d", text: "To eat leaves quickly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pupa", statement: "The pupa is a protected stage where the body changes into the adult." },
            ],
            steps: [
              { reasoning: "The pupa protects the changing body until the adult emerges.", marks: 1, markCode: "M" },
              { reasoning: "Eating leaves is the caterpillar's job, not the pupa's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To protect the body while it changes into an adult",
            commonErrors: ["Choosing eating — the caterpillar eats; the pupa does not."],
          },
        },
      ],
    },
    {
      id: "pypsc-u1l2-c2-habitats-adaptations",
      title: "Habitats and adaptations",
      skill: "Describe habitats and explain how animals are adapted to live there.",
      lesson: {
        sections: [
          {
            heading: "What is a habitat?",
            body: "A **habitat** is a living thing's natural home — it provides **food**, **water**, **shelter** and **space**. A pond is the habitat of frogs and water beetles; a desert is the habitat of camels and cacti; a forest is the habitat of deer and owls. Each habitat suits different living things because of its conditions.",
          },
          {
            heading: "Adaptations",
            body: "An **adaptation** is a feature that helps a living thing survive in its habitat. A **camel's** hump stores fat for long journeys without water; **webbed feet** help ducks swim; a **polar bear's** thick fur keeps it warm; a **cactus** stores water in its thick stem. Adaptations develop over many generations to match the habitat's challenges.",
          },
        ],
        keyFormulas: [
          { name: "Habitat provides", statement: "Food + Water + Shelter + Space" },
          { name: "Adaptation examples", statement: "Camel hump = fat storage; webbed feet = swimming; thick fur = warmth" },
        ],
        workedExample: {
          problem: "Why do fish have fins and gills?",
          solution: "Fins help fish swim through water; gills let them breathe oxygen from water. These are adaptations to their aquatic habitat.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u1l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a habitat provide for a living thing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Toys and games" },
              { id: "b", text: "Only water" },
              { id: "c", text: "Only food" },
              { id: "d", text: "Food, water, shelter and space" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat", statement: "A habitat provides food, water, shelter and space." },
            ],
            steps: [
              { reasoning: "Habitats provide all four basic needs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Food, water, shelter and space",
            commonErrors: ["Choosing 'only food' — habitats provide more than just food."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A polar bear has thick white fur. What is this an example of, and what does it help the bear do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "Adaptations are features that help survival in a habitat." },
            ],
            steps: [
              { reasoning: "Thick fur is an adaptation to the cold Arctic habitat.", marks: 1, markCode: "M" },
              { reasoning: "It keeps the bear warm in freezing temperatures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An adaptation — thick fur keeps the bear warm in the cold.",
            commonErrors: ["Calling it 'fur' only — the question asks what it helps the bear do."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fish is taken out of water and placed on land. Predict what happens and explain why using habitat needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat mismatch", statement: "Animals are adapted to their habitat; wrong environment means they cannot survive." },
            ],
            steps: [
              { reasoning: "The fish will struggle or die — it cannot breathe air.", marks: 1, markCode: "M" },
              { reasoning: "Its gills are adapted to extract oxygen from water, not air.", marks: 1, markCode: "M" },
              { reasoning: "The land does not provide what the fish's body needs — wrong habitat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The fish struggles/dies — its gills need water, not air; land is the wrong habitat.",
            commonErrors: ["Saying 'fish cannot live anywhere but water' — some fish live in brackish water; the point is gills need water."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare three habitats: a pond, a desert, and a forest.",
          parts: [
            { label: "a", prompt: "Name two animals that live in a pond.", marks: 1 },
            { label: "b", prompt: "Name an adaptation a desert animal has.", marks: 2 },
            { label: "c", prompt: "Explain why a polar bear could not survive in a desert.", marks: 2 },
            { label: "d", prompt: "What do all three habitats provide for their living things?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat and adaptation", statement: "Each habitat has different conditions; animals are adapted to their own." },
            ],
            steps: [
              { part: "a", reasoning: "Frogs, fish, water beetles, ducks (any two).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "An adaptation, e.g. camel's hump stores fat/water, or thick skin reduces water loss.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This helps the animal survive hot, dry conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Polar bear is adapted for cold — thick fur, fat layer.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Desert heat would overheat it; its adaptations are wrong for the habitat.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "All provide food, water, shelter and space — the basic needs.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The type of food/water/shelter differs but the needs are the same.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) frogs/fish (b) hump/thick skin for dryness (c) wrong adaptations for heat (d) food/water/shelter/space",
            commonErrors: ["In (c), saying the bear 'would be too cold' — deserts are hot; the issue is overheating."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a habitat provide for a living thing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only air" },
              { id: "b", text: "Food, water, shelter and space" },
              { id: "c", text: "Only sunshine" },
              { id: "d", text: "Only toys" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat", statement: "A habitat provides food, water, shelter and space." },
            ],
            steps: [
              { reasoning: "A habitat supplies all four basic provisions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Food, water, shelter and space",
            commonErrors: ["Choosing only food — habitats provide more than one need."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many things does a habitat provide: food, water, shelter and space?",
          response: {
            type: "numeric",
            parts: [{ label: "Provisions", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat provisions", statement: "Habitats provide food, water, shelter and space." },
            ],
            steps: [
              { reasoning: "The provisions are food, water, shelter and space.", marks: 1, markCode: "M" },
              { reasoning: "There are four provisions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three — space is also provided by a habitat."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A duck has webbed feet. Explain how this adaptation helps it survive in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "Adaptations are features that help an animal survive in its habitat." },
            ],
            steps: [
              { reasoning: "Webbed feet are an adaptation for an aquatic habitat.", marks: 1, markCode: "M" },
              { reasoning: "They push more water, helping the duck swim and find food.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Webbed feet help the duck swim efficiently in water.",
            commonErrors: ["Saying webbed feet are for walking — they are mainly for swimming."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a camel's hump mainly help it survive in the desert?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helps it fly" },
              { id: "b", text: "Makes it see better" },
              { id: "c", text: "Stops all water loss" },
              { id: "d", text: "Stores fat for energy during long journeys without much food" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Camel adaptation", statement: "A camel's hump stores fat for long journeys in dry places." },
            ],
            steps: [
              { reasoning: "The hump stores fat energy for desert survival.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stores fat for energy during long journeys without much food",
            commonErrors: ["Thinking the hump stores water — it mainly stores fat."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many adaptations are described here: a camel's hump stores fat, a duck's webbed feet help it swim, and a cactus stores water in its stem?",
          response: {
            type: "numeric",
            parts: [{ label: "Adaptations", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptations", statement: "Hump, webbed feet and water-storing stem are all adaptations to habitats." },
            ],
            steps: [
              { reasoning: "The three described features are all adaptations.", marks: 1, markCode: "M" },
              { reasoning: "There are three adaptations described.", marks: 1, markCode: "M" },
              { reasoning: "Each helps survival in its habitat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting the animals instead of the adaptations — there are three features."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A desert lizard is moved to a cold Arctic habitat. Predict what might happen and explain using adaptations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat mismatch", statement: "Animals are adapted to their own habitat; a very different habitat can be harmful." },
            ],
            steps: [
              { reasoning: "The lizard is adapted to hot, dry desert conditions.", marks: 1, markCode: "M" },
              { reasoning: "The Arctic is cold and may not provide the food or conditions it needs.", marks: 1, markCode: "M" },
              { reasoning: "It would struggle or may not survive because its adaptations do not match the new habitat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It would struggle — desert adaptations do not suit cold Arctic conditions.",
            commonErrors: ["Saying it would instantly die — it would struggle because conditions do not match."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature best helps a duck swim in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sharp claws" },
              { id: "b", text: "A long tail" },
              { id: "c", text: "Webbed feet" },
              { id: "d", text: "Long ears" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Webbed feet", statement: "Webbed feet help ducks push through water while swimming." },
            ],
            steps: [
              { reasoning: "Webbed feet are adapted for swimming.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Webbed feet",
            commonErrors: ["Choosing sharp claws — claws help grip, not swim."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A habitat provides food, water, shelter and space. If food and water are already present, how many more basic provisions are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "More provisions", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Habitat provisions", statement: "Besides food and water, a habitat needs shelter and space." },
            ],
            steps: [
              { reasoning: "Shelter and space are the remaining provisions.", marks: 1, markCode: "M" },
              { reasoning: "Two more provisions are needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering four — food and water are already counted."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Design a good garden habitat for a small bird. Name what it needs and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Habitat design", statement: "A good habitat provides food, water, shelter and space suited to the animal." },
            ],
            steps: [
              { reasoning: "Food such as seeds or insects is provided.", marks: 1, markCode: "M" },
              { reasoning: "Water for drinking and shelter such as bushes or a nest box are provided.", marks: 1, markCode: "M" },
              { reasoning: "Space to fly and perch is available and safe from danger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Provide seeds/insects, water, bushes or nest box, and safe space to fly.",
            commonErrors: ["Giving only food — a habitat needs water, shelter and space too."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which observation best supports the idea that thick fur is an adaptation for cold habitats?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The animal looks fluffy" },
              { id: "b", text: "The animal has many colours" },
              { id: "c", text: "The animal eats only fish" },
              { id: "d", text: "The animal stays warm in freezing conditions because of its thick coat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adaptation evidence", statement: "A feature is an adaptation when it helps survival in the habitat." },
            ],
            steps: [
              { reasoning: "Staying warm in freezing conditions shows the fur helps survival.", marks: 1, markCode: "M" },
              { reasoning: "Looking fluffy alone does not prove it is useful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The animal stays warm in freezing conditions because of its thick coat",
            commonErrors: ["Choosing appearance — usefulness in the habitat is the evidence."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these are adaptations: thick fur for warmth, webbed feet for swimming, a favourite colour, and a long trunk for reaching food?",
          response: {
            type: "numeric",
            parts: [{ label: "Adaptations", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adaptation", statement: "Adaptations help survival; favourite colour is not necessarily one." },
            ],
            steps: [
              { reasoning: "Thick fur, webbed feet and long trunk help survival in habitats.", marks: 1, markCode: "M" },
              { reasoning: "A favourite colour is a preference, not a survival adaptation.", marks: 1, markCode: "M" },
              { reasoning: "Three adaptations are listed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting favourite colour — colour preference is not a habitat adaptation."],
          },
        },
        {
          id: "pypsc-q-u1l2c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does a fish struggle when it is out of water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its gills need water to get oxygen" },
              { id: "b", text: "Its fins cannot move on land" },
              { id: "c", text: "It cannot see on land" },
              { id: "d", text: "It has no bones" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aquatic adaptation", statement: "Fish gills are adapted to take oxygen from water, not air." },
            ],
            steps: [
              { reasoning: "Gills need water to extract oxygen.", marks: 1, markCode: "M" },
              { reasoning: "Out of water the fish cannot breathe properly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Its gills need water to get oxygen",
            commonErrors: ["Choosing fins — fins help movement, but gills are the breathing problem."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edps2-u1-lesson-1-1",
  code: "1-1",
  title: "Classifying Living Things",
  goal: "I CAN classify animals and plants into groups by their features.",
  standards: ["Year 2 Science: Living things"],
  vocabulary: [
    { term: "Classify", definition: "To sort things into groups by shared features." },
    { term: "Mammal", definition: "Animal that has fur/hair and feeds babies milk." },
    { term: "Bird", definition: "Animal with feathers, wings and beak that lays eggs." },
    { term: "Reptile", definition: "Cold-blooded animal with scales: snake, lizard, turtle." },
  ],
  concepts: [
    {
      id: "edps2-u1-classify",
      title: "Grouping animals",
      skill: "Classify animals by features like covering, birth and habitat.",
      lesson: {
        sections: [
          { heading: "Animal groups", body: "**Mammals**: fur/hair, feed milk (dog, whale, bat). **Birds**: feathers, wings, beak, lay eggs (eagle, penguin). **Reptiles**: scales, cold-blooded (snake, turtle). **Amphibians**: moist skin, live in water then land (frog). **Fish**: scales, gills, live in water." },
          { heading: "Key features", body: "We classify by: body covering (fur, feathers, scales), how they are born (live birth vs eggs), where they live (land, water, air), and what they eat." },
        ],
        keyFormulas: [
          { name: "Mammal", statement: "Fur + milk" },
          { name: "Bird", statement: "Feathers + beak + eggs" },
          { name: "Reptile/fish", statement: "Scales; cold-blooded / gills" },
        ],
        workedExample: {
          problem: "Is a penguin a bird or a mammal?",
          solution: "A bird — it has feathers, a beak and lays eggs, even though it can't fly.",
        },
      },
      questions: [
        {
          id: "edps2-u1-cl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which animal is a mammal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Eagle" }, { id: "b", text: "Dog" }, { id: "c", text: "Snake" }, { id: "d", text: "Frog" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Mammal", statement: "Fur + milk." }], steps: [{ reasoning: "Dog has fur and feeds milk.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Dog", commonErrors: ["Wrong group."] },
        },
        {
          id: "edps2-u1-cl-q2", difficulty: "core", totalMarks: 2,
          stem: "Which feature tells you an animal is a bird?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It has fur" }, { id: "b", text: "It has feathers and a beak" }, { id: "c", text: "It has scales" }, { id: "d", text: "It lives in water" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Bird features", statement: "Feathers + beak." }], steps: [
            { reasoning: "Identify bird feature.", marks: 1, markCode: "M" },
            { reasoning: "Answer: feathers/beak.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** It has feathers and a beak", commonErrors: ["Wrong feature."] },
        },
        {
          id: "edps2-u1-cl-q3", difficulty: "core", totalMarks: 3,
          stem: "Classify these as mammal, bird or reptile: whale, sparrow, crocodile.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Classification", statement: "whale=mammal; sparrow=bird; crocodile=reptile." }], steps: [
            { reasoning: "Whale = mammal.", marks: 1, markCode: "A" },
            { reasoning: "Sparrow = bird.", marks: 1, markCode: "A" },
            { reasoning: "Crocodile = reptile.", marks: 1, markCode: "A" },
          ], finalAnswer: "whale=mammal, sparrow=bird, crocodile=reptile", commonErrors: ["Wrong groups."] },
        },
        {
          id: "edps2-u1-cl-q4", difficulty: "challenge", totalMarks: 4,
          stem: "Sort these animals into two groups and justify: bat, eagle, dolphin, penguin.",
          parts: [
            { label: "a", prompt: "Group 1", marks: 1 },
            { label: "b", prompt: "Group 2", marks: 1 },
            { label: "c", prompt: "Criterion used", marks: 1 },
            { label: "d", prompt: "Justification", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Classification", statement: "Mammals (bat, dolphin) vs birds (eagle, penguin)." }], steps: [
            { part: "a", reasoning: "Mammals correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Birds correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Criterion identified.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Justified.", marks: 1, markCode: "R" },
          ], finalAnswer: "Mammals: bat, dolphin; birds: eagle, penguin — by body covering/birth", commonErrors: ["Wrong grouping or criterion."] },
        },
      ],
    },
    {
      id: "edps2-u1-cycle",
      title: "Life cycles",
      skill: "Describe life cycles of animals and plants.",
      lesson: {
        sections: [
          { heading: "Animal life cycles", body: "**Frog**: egg → tadpole → froglet → adult frog. **Butterfly**: egg → caterpillar → chrysalis → butterfly. **Bird**: egg → chick → adult." },
          { heading: "Plant life cycle", body: "**Seed** → germination → seedling → adult plant → flower → seeds → new plants. The cycle repeats." },
        ],
        keyFormulas: [
          { name: "Frog", statement: "Egg → tadpole → frog" },
          { name: "Butterfly", statement: "Egg → caterpillar → chrysalis → butterfly" },
          { name: "Plant", statement: "Seed → seedling → flower → seeds" },
        ],
        workedExample: {
          problem: "Order the frog life cycle.",
          solution: "Egg → tadpole → froglet → adult frog.",
        },
      },
      questions: [
        {
          id: "edps2-u1-lc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "What comes first in a butterfly's life cycle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Caterpillar" }, { id: "b", text: "Egg" }, { id: "c", text: "Chrysalis" }, { id: "d", text: "Butterfly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Life cycle", statement: "Egg first." }], steps: [{ reasoning: "Egg is first stage.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Egg", commonErrors: ["Wrong stage."] },
        },
        {
          id: "edps2-u1-lc-q2", difficulty: "core", totalMarks: 2,
          stem: "What does a tadpole turn into?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fish" }, { id: "b", text: "Frog" }, { id: "c", text: "Turtle" }, { id: "d", text: "Snake" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Frog cycle", statement: "Tadpole → frog." }], steps: [
            { reasoning: "Identify change.", marks: 1, markCode: "M" },
            { reasoning: "Answer: frog.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** Frog", commonErrors: ["Wrong animal."] },
        },
        {
          id: "edps2-u1-lc-q3", difficulty: "core", totalMarks: 3,
          stem: "Order the plant life cycle: flower, seed, seedling, adult plant.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Plant cycle", statement: "seed → seedling → adult → flower." }], steps: [
            { reasoning: "Seed first.", marks: 1, markCode: "A" },
            { reasoning: "Seedling next.", marks: 1, markCode: "A" },
            { reasoning: "Adult then flower.", marks: 1, markCode: "A" },
          ], finalAnswer: "seed → seedling → adult plant → flower", commonErrors: ["Wrong order."] },
        },
        {
          id: "edps2-u1-lc-q4", difficulty: "challenge", totalMarks: 4,
          stem: "Compare the frog and butterfly life cycles: what stage do they share?",
          parts: [
            { label: "a", prompt: "Frog stages", marks: 1 },
            { label: "b", prompt: "Butterfly stages", marks: 1 },
            { label: "c", prompt: "Shared stage", marks: 1 },
            { label: "d", prompt: "Difference noted", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Life cycles", statement: "Both start as eggs; different middle stages." }], steps: [
            { part: "a", reasoning: "Frog stages.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Butterfly stages.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Egg shared.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Difference noted.", marks: 1, markCode: "R" },
          ], finalAnswer: "Both start as eggs; frog has tadpole, butterfly has caterpillar/chrysalis", commonErrors: ["No comparison."] },
        },
      ],
    },
    {
      id: "edps2-u1-habitat",
      title: "Habitats and adaptation",
      skill: "Describe habitats and how animals are adapted to them.",
      lesson: {
        sections: [
          { heading: "Habitats", body: "**Forest**: trees, shade, many animals. **Desert**: hot, dry, few plants. **Ocean**: salty water, fish/corals. **Pond**: fresh water, frogs/insects. **Polar**: cold, ice, penguins/polar bears." },
          { heading: "Adaptations", body: "Animals are adapted to their habitat: camel has humps for fat storage in desert; penguin has feathers for warmth in cold; fish has gills for breathing underwater. Adaptations help survival." },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Natural home" },
          { name: "Adaptation", statement: "Feature helping survival" },
          { name: "Camouflage", statement: "Blending with surroundings" },
        ],
        workedExample: {
          problem: "How is a camel adapted to the desert?",
          solution: "Humps store fat for energy; wide feet for walking on sand; can go long without water.",
        },
      },
      questions: [
        {
          id: "edps2-u1-ha-q1", difficulty: "foundation", totalMarks: 1,
          stem: "What is a habitat?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cage" }, { id: "b", text: "An animal's natural home" }, { id: "c", text: "A zoo" }, { id: "d", text: "A food shop" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Habitat", statement: "Natural home." }], steps: [{ reasoning: "Habitat = natural home.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** An animal's natural home", commonErrors: ["Wrong definition."] },
        },
        {
          id: "edps2-u1-ha-q2", difficulty: "core", totalMarks: 2,
          stem: "How is a penguin adapted to cold?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It has humps" }, { id: "b", text: "Thick feathers and blubber" }, { id: "c", text: "It has gills" }, { id: "d", text: "It has scales" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Adaptation", statement: "Feathers + blubber = warmth." }], steps: [
            { reasoning: "Identify adaptation.", marks: 1, markCode: "M" },
            { reasoning: "Answer: feathers/blubber.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** Thick feathers and blubber", commonErrors: ["Wrong adaptation."] },
        },
        {
          id: "edps2-u1-ha-q3", difficulty: "core", totalMarks: 3,
          stem: "Name one adaptation of a fish for living in water.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Adaptation", statement: "Gills, fins, streamlined body." }], steps: [
            { reasoning: "Adaptation given.", marks: 1, markCode: "A" },
            { reasoning: "Correct for water.", marks: 1, markCode: "A" },
            { reasoning: "Clear.", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. 'Gills for breathing underwater'", commonErrors: ["Wrong adaptation."] },
        },
        {
          id: "edps2-u1-ha-q4", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how camouflage helps an animal survive, with an example.",
          parts: [
            { label: "a", prompt: "What camouflage is", marks: 1 },
            { label: "b", prompt: "How it helps", marks: 1 },
            { label: "c", prompt: "Example given", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Camouflage", statement: "Blending with surroundings; hides from predators/prey." }], steps: [
            { part: "a", reasoning: "Defined.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Benefit explained.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Example given.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Clear.", marks: 1, markCode: "R" },
          ], finalAnswer: "Camouflage blends animal with surroundings, hiding it from predators; e.g. chameleon changes colour", commonErrors: ["Incomplete or no example."] },
        },
      ],
    },
  ],
};

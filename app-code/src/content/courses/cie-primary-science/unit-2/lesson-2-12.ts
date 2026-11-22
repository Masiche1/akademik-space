import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cips-u2-lesson-2-12",
  code: "2-12",
  title: "Stage 4 — Plants: Growth, Reproduction and Habitats",
  goal: "I CAN describe how plants grow, reproduce and live in habitats.",
  standards: ["Cambridge Primary Science 0097 Stage 4: plants",
  "Cambridge Primary Science 0097 framework substrands: 4Bs, 4Be"],
  stage: 4,
  vocabulary: [
    { term: "Germination", definition: "Seed begins to grow." },
    { term: "Seed dispersal", definition: "Seeds spread to new places." },
    { term: "Pollination", definition: "Pollen transfer to the female part." },
    { term: "Habitat", definition: "The place where a plant or animal lives." },
    { term: "Adaptation", definition: "Feature helping an organism survive in its habitat." },
  ],
  concepts: [
    {
      id: "cips-u2-s12-plants",
      title: "Plant growth, reproduction and habitats",
      skill: "Describe plant life cycle, pollination and habitat adaptations at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Growth and reproduction",
            body: "Plants grow from seeds that germinate with water and warmth. Flowers reproduce the plant: pollen from male parts reaches the female part (pollination — by wind or insects), then fertilisation forms seeds. Seeds disperse by wind (dandelion), water (coconut), animals (sticky seeds) or explosion (squirting cucumber).",
          },
          {
            heading: "Habitats and adaptations",
            body: "Plants live in habitats suited to their needs — cacti in deserts store water in thick stems; water lilies float on ponds; ivy climbs walls. Adaptations like deep roots, waxy leaves or floating stems help plants survive their specific habitat's conditions.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "seed → germinate → grow → flower → pollinate → seed" },
          { name: "Dispersal", statement: "wind, water, animals, explosion" },
        ],
        workedExample: {
          problem: "How does a cactus survive in a desert?",
          solution: "Thick stem stores water; spines reduce water loss; shallow wide roots catch rain quickly.",
        },
      },
      questions: [
        {
          id: "cips-u2-pg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do seeds need to germinate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Soil only" },
            { id: "b", text: "Fertiliser" },
            { id: "c", text: "Water and warmth" },
            { id: "d", text: "Light only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germination", statement: "Needs water and warmth." }],
            steps: [{ reasoning: "Water + warmth start germination.", marks: 1, markCode: "A" }],
            finalAnswer: "Water and warmth",
          },
        },
        {
          id: "cips-u2-pg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways seeds are dispersed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dispersal", statement: "Wind, water, animals, explosion." }],
            steps: [
              { reasoning: "Any two correct methods.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. wind and water",
          },
        },
        {
          id: "cips-u2-pg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is pollination and why do some flowers have bright colours?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pollination", statement: "Pollen transfer; bright colours attract pollinators." }],
            steps: [
              { reasoning: "Pollination = pollen reaching female flower parts.", marks: 1, markCode: "M" },
              { reasoning: "Bright colours/scent attract insects.", marks: 1, markCode: "M" },
              { reasoning: "Insects carry pollen between flowers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollination transfers pollen; bright colours attract pollinating insects",
          },
        },
        {
          id: "cips-u2-pg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A water lily lives on a pond and a cactus lives in a desert. For each plant: (a) name one adaptation, (b) explain how it helps survival. Then compare why they can't swap habitats. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adaptations and habitats", statement: "Match features to habitat conditions." }],
            steps: [
              { reasoning: "Water lily: floating leaves/stems (stay on water).", marks: 1, markCode: "M" },
              { reasoning: "Explanation: can't survive out of water; floats to reach light.", marks: 1, markCode: "M" },
              { reasoning: "Cactus: thick water-storing stem/spines.", marks: 1, markCode: "M" },
              { reasoning: "Explanation: stores water, spines reduce loss in dry habitat.", marks: 1, markCode: "M" },
              { reasoning: "Swap fails: lily dries out on land; cactus rots in waterlogged soil.", marks: 1, markCode: "M" },
              { reasoning: "Habitat conditions differ — adaptations are specific.", marks: 1, markCode: "M" },
              { reasoning: "Comparison logically consistent.", marks: 1, markCode: "M" },
              { reasoning: "Both adaptations correctly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lily floats on water; cactus stores water — each adapted to its habitat",
          },
        },
        {
          id: "cips-u2-pg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ADAPTATION?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A new plant" },
            { id: "b", text: "A type of soil" },
            { id: "c", text: "A weather pattern" },
            { id: "d", text: "A feature helping an organism survive in its habitat" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adaptation", statement: "Feature helping survival in habitat." }],
            steps: [{ reasoning: "An adaptation is a survival feature.", marks: 1, markCode: "A" }],
            finalAnswer: "A survival feature for its habitat",
          },
        },
        {
          id: "cips-u2-pg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant lives in a desert?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Moss" },
            { id: "b", text: "Cactus" },
            { id: "c", text: "Water lily" },
            { id: "d", text: "Seaweed" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Habitat", statement: "Cacti live in deserts." }],
            steps: [{ reasoning: "Cacti are adapted to deserts.", marks: 1, markCode: "A" }],
            finalAnswer: "Cactus",
          },
        },
        {
          id: "cips-u2-pg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many seed dispersal methods are listed: wind, water, animals, explosion?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "methods" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Dispersal", statement: "Four main methods." }],
            steps: [{ reasoning: "There are 4 dispersal methods.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-pg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A garden has 10 seeds dispersed: 6 by wind and 4 by animals. How many seeds were dispersed by non-wind methods?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "seeds" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Seed dispersal", statement: "Non-wind = animals here." }],
            steps: [
              { reasoning: "4 seeds dispersed by animals.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-pg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which flower part produces pollen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The leaf" },
            { id: "b", text: "The carpel" },
            { id: "c", text: "The stamen" },
            { id: "d", text: "The petal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stamen", statement: "Male part with pollen." }],
            steps: [{ reasoning: "Stamens produce pollen.", marks: 1, markCode: "A" }],
            finalAnswer: "The stamen",
          },
        },
        {
          id: "cips-u2-pg-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two needs that seeds require to germinate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germination", statement: "Needs water and warmth." }],
            steps: [
              { reasoning: "Water.", marks: 1, markCode: "M" },
              { reasoning: "Warmth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water and warmth",
          },
        },
        {
          id: "cips-u2-pg-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a water lily cannot survive in a desert and a cactus cannot survive in a pond.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adaptations", statement: "Adaptations suit specific habitats." }],
            steps: [
              { reasoning: "Water lily is adapted to water — floats and needs moisture.", marks: 1, markCode: "M" },
              { reasoning: "In a desert it would dry out and die.", marks: 1, markCode: "M" },
              { reasoning: "Cactus stores water for dry conditions — in a pond it would rot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each is adapted only to its own habitat",
          },
        },
        {
          id: "cips-u2-pg-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How do coconut seeds travel to new islands?",
          response: { type: "mcq", choices: [
            { id: "a", text: "By water" },
            { id: "b", text: "They don't move" },
            { id: "c", text: "By wind" },
            { id: "d", text: "By birds only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dispersal", statement: "Coconuts float on water." }],
            steps: [{ reasoning: "Coconuts float and travel by water.", marks: 1, markCode: "A" }],
            finalAnswer: "By water",
          },
        },
        {
          id: "cips-u2-pg-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pollination study finds 15 flowers pollinated by insects and 10 by wind. How many more were pollinated by insects than by wind?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "flowers" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pollination", statement: "Subtract to compare." }],
            steps: [
              { reasoning: "$15 - 10 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "5 more by insects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u2-pg-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do desert plants like cacti have thick stems and spines?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adaptations", statement: "Features match desert conditions." }],
            steps: [
              { reasoning: "Thick stem stores water for dry periods.", marks: 1, markCode: "M" },
              { reasoning: "Spines reduce water loss and protect from animals.", marks: 1, markCode: "M" },
              { reasoning: "These adaptations suit the hot, dry desert.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Store water and reduce water loss in desert",
          },
        },
        {
          id: "cips-u2-pg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does pollination do for a plant?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It transfers pollen to the female part so seeds can form" },
            { id: "b", text: "It stops growth" },
            { id: "c", text: "It makes leaves fall" },
            { id: "d", text: "It waters the plant" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pollination", statement: "Pollen transfer enables fertilisation." }],
            steps: [{ reasoning: "Pollination transfers pollen so seeds can form.", marks: 1, markCode: "A" }],
            finalAnswer: "Transfers pollen for seed formation",
          },
        },
        {
          id: "cips-u2-pg-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) What do seeds need to germinate? (b) Name the four seed dispersal methods with one example each. (c) Define pollination and why bright flowers help. (d) What is an adaptation? (e) Give two cactus adaptations and explain each. (f) Give two water lily adaptations and explain each. (g) Why can't a cactus live in a pond? (h) Describe the plant life cycle from seed to new seeds.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plants, habitats, reproduction", statement: "Integrated Stage 4 plants answer." }],
            steps: [
              { reasoning: "(a) Water and warmth.", marks: 1, markCode: "M" },
              { reasoning: "(b) Wind (dandelion), water (coconut), animals (sticky), explosion (cucumber).", marks: 1, markCode: "M" },
              { reasoning: "(c) Pollen transfer; bright colours/scent attract pollinators.", marks: 1, markCode: "M" },
              { reasoning: "(d) Feature helping survival in its habitat.", marks: 1, markCode: "M" },
              { reasoning: "(e) Thick stem stores water; spines reduce loss/protect.", marks: 1, markCode: "M" },
              { reasoning: "(f) Floating leaves/stems stay on water; broad leaves catch light.", marks: 1, markCode: "M" },
              { reasoning: "(g) It is adapted to dry conditions — would rot in water.", marks: 1, markCode: "M" },
              { reasoning: "(h) Seed → germinate → grow → flower → pollinate → fertilise → seeds → disperse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Germination needs, dispersal methods, pollination/adaptations, cactus/lily features, habitat limits, life cycle.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-pg-notes",
      title: "Plants — notes",
      summary: "Germination needs water+warmth; dispersal by wind/water/animals; adaptations match habitat.",
      sections: [
        { heading: "Reproduction", body: "Pollination → fertilisation → seeds → dispersal → germination." },
        { heading: "Habitats", body: "Cactus stores water; lily floats; adaptations suit local conditions." },
      ],
    },
  ],
};

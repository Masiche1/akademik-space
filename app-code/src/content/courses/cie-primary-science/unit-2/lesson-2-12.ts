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
            { id: "a", text: "Light only" }, { id: "b", text: "Water and warmth" }, { id: "c", text: "Soil only" }, { id: "d", text: "Fertiliser" },
          ], correctChoiceId: "b" },
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

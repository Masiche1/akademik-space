import type { Lesson } from "../../../types.ts";

export const lesson219: Lesson = {
  id: "cips-u2-lesson-2-19",
  code: "2-19",
  title: "Stage 5 — Flowers, Adaptations and the Water Cycle",
  goal: "I CAN describe flower parts, animal adaptations and the water cycle.",
  standards: ["Cambridge Primary Science 0097 Stage 5: biology, ecosystems and Earth",
  "Cambridge Primary Science 0097 framework substrands: 5Bs, 5Be, 5ESc, 5TWSm, 5SIC"],
  stage: 5,
  vocabulary: [
    { term: "Sepal", definition: "Green leaf-like part protecting the flower bud." },
    { term: "Petal", definition: "Bright part attracting pollinators." },
    { term: "Adaptation", definition: "Feature helping survival in a habitat." },
    { term: "Water cycle", definition: "Continuous movement of water: evaporation, condensation, precipitation." },
    { term: "Precipitation", definition: "Water falling from clouds: rain, snow, hail." },
  ],
  concepts: [
    {
      id: "cips-u2-s19-flowers-water",
      title: "Flowers, adaptations and the water cycle",
      skill: "Identify flower parts and functions, describe adaptations and explain the water cycle at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Flowers and adaptations",
            body: "Flower parts: sepals protect the bud, petals attract pollinators, stamens produce pollen (male), pistil receives pollen (female). Adaptations help survival — polar bear's thick fur for cold, camel's hump storing fat for desert, fish's gills for breathing underwater, bird's wings for flight.",
          },
          {
            heading: "Water cycle",
            body: "The water cycle repeats continuously: evaporation (water heats and becomes vapour), condensation (vapour cools into clouds), precipitation (water falls as rain/snow), collection (water gathers in oceans, lakes, rivers). The same water has existed for billions of years — it just keeps cycling.",
          },
        ],
        keyFormulas: [
          { name: "Flower parts", statement: "sepals protect, petals attract, stamens male, pistil female" },
          { name: "Water cycle", statement: "evaporate → condense → precipitate → collect" },
        ],
        workedExample: {
          problem: "Trace the water cycle in order.",
          solution: "Evaporation → condensation → precipitation → collection → repeat.",
        },
      },
      questions: [
        {
          id: "cips-u2-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flower part attracts pollinators?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sepal" }, { id: "b", text: "Petal" }, { id: "c", text: "Stem" }, { id: "d", text: "Root" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Petals", statement: "Bright, attract pollinators." }],
            steps: [{ reasoning: "Petals are colourful to attract insects.", marks: 1, markCode: "A" }],
            finalAnswer: "Petal",
          },
        },
        {
          id: "cips-u2-fw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one adaptation that helps a polar bear survive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adaptation", statement: "Feature for survival." }],
            steps: [
              { reasoning: "Thick fur/white coat/blubber for cold.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. thick white fur for insulation",
          },
        },
        {
          id: "cips-u2-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is condensation in the water cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Condensation", statement: "Vapour → liquid droplets in clouds." }],
            steps: [
              { reasoning: "Water vapour cools and becomes droplets.", marks: 1, markCode: "M" },
              { reasoning: "Forms clouds.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vapour cooling into cloud droplets",
          },
        },
        {
          id: "cips-u2-fw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name the four main flower parts and one function each. (b) Explain how a cactus is adapted to deserts. (c) Describe the water cycle in order with all four stages. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Flowers, adaptations, water cycle", statement: "Parts + functions + cycle stages." }],
            steps: [
              { reasoning: "(a) Sepals protect bud; petals attract; stamens make pollen; pistil receives pollen.", marks: 1, markCode: "M" },
              { reasoning: "(b) Thick stem stores water; spines reduce loss; shallow roots catch rain.", marks: 1, markCode: "M" },
              { reasoning: "(c) Evaporation → condensation → precipitation → collection.", marks: 1, markCode: "M" },
              { reasoning: "(c) Cycle repeats continuously.", marks: 1, markCode: "M" },
              { reasoning: "Flower parts all correctly identified.", marks: 1, markCode: "M" },
              { reasoning: "Adaptation linked to desert conditions.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sepals/petals/stamens/pistil (b) water storage + spines (c) evaporate→condense→precipitate→collect",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-fw-notes",
      title: "Flowers and water cycle — notes",
      summary: "Sepals protect, petals attract, stamens male, pistil female; cycle: evaporate→condense→precipitate→collect.",
      sections: [
        { heading: "Plants", body: "Flower parts have specific roles; adaptations match habitat." },
        { heading: "Water", body: "Same water cycles forever through four stages." },
      ],
    },
  ],
};

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
            { id: "a", text: "Root" },
            { id: "b", text: "Stem" },
            { id: "c", text: "Petal" },
            { id: "d", text: "Sepal" },
          ], correctChoiceId: "c" },
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
        {
          id: "cips-u2-fw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flower part protects the bud before it opens?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Petal" },
            { id: "b", text: "Sepal" },
            { id: "c", text: "Pistil" },
            { id: "d", text: "Stamen" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sepals", statement: "Protect the flower bud." }],
            steps: [{ reasoning: "Sepals are green leaf-like parts protecting the bud.", marks: 1, markCode: "A" }],
            finalAnswer: "Sepal",
          },
        },
        {
          id: "cips-u2-fw-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flower part is the MALE part making pollen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stamen" },
            { id: "b", text: "Petal" },
            { id: "c", text: "Pistil" },
            { id: "d", text: "Sepal" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stamens", statement: "Male part making pollen." }],
            steps: [{ reasoning: "Stamens produce pollen.", marks: 1, markCode: "A" }],
            finalAnswer: "Stamen",
          },
        },
        {
          id: "cips-u2-fw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are in the water cycle: evaporation, condensation, precipitation, collection?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "stages" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Water cycle", statement: "Four stages." }],
            steps: [{ reasoning: "There are 4 stages.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-fw-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a flower study, 7 flowers are pollinated by insects and 5 by wind. What is the total number pollinated?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12, unit: "flowers" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pollination", statement: "Add pollinated flowers." }],
            steps: [
              { reasoning: "$7 + 5 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 12 flowers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cips-u2-fw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an ADAPTATION?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A soil type" },
            { id: "b", text: "A feature helping an organism survive in its habitat" },
            { id: "c", text: "A weather pattern" },
            { id: "d", text: "A type of flower" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adaptation", statement: "Survival feature." }],
            steps: [{ reasoning: "An adaptation is a feature that helps survival.", marks: 1, markCode: "A" }],
            finalAnswer: "A survival feature",
          },
        },
        {
          id: "cips-u2-fw-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one flower part that protects and one that attracts pollinators.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Flower parts", statement: "Sepals protect, petals attract." }],
            steps: [
              { reasoning: "Sepals protect the bud.", marks: 1, markCode: "M" },
              { reasoning: "Petals attract pollinators.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sepals protect; petals attract",
          },
        },
        {
          id: "cips-u2-fw-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens during evaporation in the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaporation", statement: "Water heats → vapour." }],
            steps: [
              { reasoning: "Sun heats water in oceans, lakes, rivers.", marks: 1, markCode: "M" },
              { reasoning: "Water changes to vapour and rises.", marks: 1, markCode: "M" },
              { reasoning: "This is evaporation — liquid to gas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water heats → becomes vapour → rises",
          },
        },
        {
          id: "cips-u2-fw-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is precipitation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Water falling from clouds as rain/snow/hail" },
            { id: "b", text: "Water rising as vapour" },
            { id: "c", text: "Water forming clouds" },
            { id: "d", text: "Water collecting in lakes" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Precipitation", statement: "Water falling from clouds." }],
            steps: [{ reasoning: "Precipitation is rain, snow or hail falling from clouds.", marks: 1, markCode: "A" }],
            finalAnswer: "Water falling from clouds",
          },
        },
        {
          id: "cips-u2-fw-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A water cycle diagram shows 3 clouds forming and 5 rain events. How many total water-cycle events are shown?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "events" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Water cycle", statement: "Add events." }],
            steps: [
              { reasoning: "$3 + 5 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 8 events.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cips-u2-fw-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a fish's gills are an adaptation for its habitat.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adaptations", statement: "Features match habitat needs." }],
            steps: [
              { reasoning: "Fish live underwater where oxygen is dissolved in water.", marks: 1, markCode: "M" },
              { reasoning: "Gills extract oxygen from water.", marks: 1, markCode: "M" },
              { reasoning: "This adaptation lets fish breathe underwater.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gills extract oxygen from water",
          },
        },
        {
          id: "cips-u2-fw-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which flower part receives pollen (the female part)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sepal" },
            { id: "b", text: "Petal" },
            { id: "c", text: "Stamen" },
            { id: "d", text: "Pistil" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pistil", statement: "Female part receiving pollen." }],
            steps: [{ reasoning: "The pistil receives pollen.", marks: 1, markCode: "A" }],
            finalAnswer: "Pistil",
          },
        },
        {
          id: "cips-u2-fw-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the four main flower parts and functions. (b) Name three animal adaptations and explain each. (c) Name the four water cycle stages in order. (d) Define precipitation. (e) What happens during condensation? (f) Why is the water cycle important? (g) How does a camel survive in a desert? (h) Explain why flowers have bright colours.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Flowers, adaptations, water cycle", statement: "Integrated Stage 5 answer." }],
            steps: [
              { reasoning: "(a) Sepals protect; petals attract; stamens male/pollen; pistil female/receives.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. polar bear fur=cold; camel hump=food store; fish gills=water breathing.", marks: 1, markCode: "M" },
              { reasoning: "(c) Evaporation → condensation → precipitation → collection.", marks: 1, markCode: "M" },
              { reasoning: "(d) Water falling from clouds.", marks: 1, markCode: "M" },
              { reasoning: "(e) Vapour cools into cloud droplets.", marks: 1, markCode: "M" },
              { reasoning: "(f) Recycles water — plants/animals need it.", marks: 1, markCode: "M" },
              { reasoning: "(g) Hump stores fat; can go long without water.", marks: 1, markCode: "M" },
              { reasoning: "(h) Attract pollinating insects/animals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flower parts, animal adaptations, water cycle stages, precipitation, condensation, cycle importance, camel, flower colours.",
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

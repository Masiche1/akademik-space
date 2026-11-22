import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cips-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 2 — Plants: What They Need and How They Grow",
  goal: "I CAN describe what plants need to grow and how they change.",
  standards: ["Cambridge Primary Science 0097 Stage 2: plants",
  "Cambridge Primary Science 0097 framework substrands: 2Bs"],
  stage: 2,
  vocabulary: [
    { term: "Seed", definition: "A tiny plant package that can grow into a new plant." },
    { term: "Germinate", definition: "When a seed starts to grow into a seedling." },
    { term: "Seedling", definition: "A young plant grown from a seed." },
    { term: "Roots", definition: "Parts under the ground that absorb water." },
    { term: "Leaves", definition: "Flat green parts that make food for the plant." },
  ],
  concepts: [
    {
      id: "cips-u1-s8-plants",
      title: "Plant needs and growth",
      skill: "Describe plant needs, germination and plant parts at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "What plants need",
            body: "Plants need light (sunlight), water, air and warmth to grow. Roots absorb water and hold the plant in soil; the stem carries water up; leaves make food using sunlight, water and air (photosynthesis). Without any one need, the plant cannot grow well.",
          },
          {
            heading: "From seed to plant",
            body: "A seed germinates when it has water and warmth — it first grows roots, then a shoot, then leaves. A young plant is called a seedling. As it grows it may flower and make new seeds, starting the cycle again.",
          },
        ],
        keyFormulas: [
          { name: "Plant needs", statement: "Light + water + air + warmth" },
          { name: "Growth", statement: "seed → germinate → seedling → adult plant → seeds" },
        ],
        workedExample: {
          problem: "What happens first when a seed germinates?",
          solution: "The root grows first, anchoring the seedling and absorbing water.",
        },
      },
      questions: [
        {
          id: "cips-u1-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these do plants NOT need to grow?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sunlight" },
            { id: "b", text: "Air" },
            { id: "c", text: "Water" },
            { id: "d", text: "Soil only" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant needs", statement: "Light, water, air, warmth." }],
            steps: [{ reasoning: "Plants need light/water/air/warmth — not soil specifically.", marks: 1, markCode: "A" }],
            finalAnswer: "Soil only",
          },
        },
        {
          id: "cips-u1-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a young plant grown from a seed called?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seedling", statement: "Young plant from a seed." }],
            steps: [
              { reasoning: "Seedling.", marks: 1, markCode: "M" },
              { reasoning: "Answer: seedling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seedling",
          },
        },
        {
          id: "cips-u1-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What job do roots do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Roots", statement: "Absorb water and anchor the plant." }],
            steps: [
              { reasoning: "Roots absorb water from soil.", marks: 1, markCode: "M" },
              { reasoning: "They also hold the plant upright.", marks: 1, markCode: "M" },
              { reasoning: "Answer complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Absorb water and anchor the plant",
          },
        },
        {
          id: "cips-u1-pl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two identical plants are grown — one in sunlight, one in a dark cupboard, both watered. Predict and explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fair comparison", statement: "Only light differs; predict effect." }],
            steps: [
              { reasoning: "Sunlight plant grows well; dark plant struggles.", marks: 1, markCode: "M" },
              { reasoning: "Plants need light to make food.", marks: 1, markCode: "M" },
              { reasoning: "Dark plant becomes pale/weak.", marks: 1, markCode: "M" },
              { reasoning: "Prediction linked to the missing need.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dark plant grows poorly — it lacks light for food-making",
          },
        },
        {
          id: "cips-u1-pl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a plant makes food using sunlight?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Roots" },
            { id: "b", text: "Stem only" },
            { id: "c", text: "Soil" },
            { id: "d", text: "Leaves" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Leaves", statement: "Make food using sunlight." }],
            steps: [{ reasoning: "Leaves make food for the plant.", marks: 1, markCode: "A" }],
            finalAnswer: "Leaves",
          },
        },
        {
          id: "cips-u1-pl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is it called when a seed starts to grow?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Germinating" },
            { id: "b", text: "Flowering" },
            { id: "c", text: "Sinking" },
            { id: "d", text: "Dissolving" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germinate", statement: "Seed starts to grow." }],
            steps: [{ reasoning: "Germination is when a seed starts to grow.", marks: 1, markCode: "A" }],
            finalAnswer: "Germinating",
          },
        },
        {
          id: "cips-u1-pl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main needs do plants have (light, water, air, warmth)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "needs" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant needs", statement: "Light, water, air, warmth." }],
            steps: [{ reasoning: "There are 4 needs.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u1-pl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gardener grows 5 bean seeds. 4 germinate and 1 does not. How many seeds germinated?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "seeds" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Germination", statement: "Count germinated seeds." }],
            steps: [
              { reasoning: "4 seeds germinated.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u1-pl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which part of the plant carries water up from the roots?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The stem" },
            { id: "b", text: "The seed" },
            { id: "c", text: "The flower" },
            { id: "d", text: "The soil" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stem", statement: "Carries water to leaves." }],
            steps: [{ reasoning: "The stem carries water up to the leaves.", marks: 1, markCode: "A" }],
            finalAnswer: "The stem",
          },
        },
        {
          id: "cips-u1-pl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things that happen when a seed germinates.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Germination", statement: "Root first, then shoot and leaves." }],
            steps: [
              { reasoning: "First: a root grows.", marks: 1, markCode: "M" },
              { reasoning: "Then: a shoot and leaves grow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Root grows, then shoot and leaves",
          },
        },
        {
          id: "cips-u1-pl-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what leaves do for a plant and what they need to do it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Photosynthesis", statement: "Leaves make food using sunlight, water, air." }],
            steps: [
              { reasoning: "Leaves make food for the plant.", marks: 1, markCode: "M" },
              { reasoning: "They use sunlight, water and air to do this.", marks: 1, markCode: "M" },
              { reasoning: "Without light the plant cannot make food and grows poorly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Leaves make food using sunlight, water and air",
          },
        },
        {
          id: "cips-u1-pl-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What do plants make in their flowers that can grow into new plants?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Water" },
            { id: "b", text: "Seeds" },
            { id: "c", text: "Roots" },
            { id: "d", text: "Soil" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Flowers", statement: "Flowers make seeds." }],
            steps: [{ reasoning: "Flowers make seeds which grow into new plants.", marks: 1, markCode: "A" }],
            finalAnswer: "Seeds",
          },
        },
        {
          id: "cips-u1-pl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a class experiment, 6 plants are given water daily and 2 are not. How many plants received water?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6, unit: "plants" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Plant experiments", statement: "Count plants given water." }],
            steps: [
              { reasoning: "6 plants were given water.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cips-u1-pl-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A plant in a dark room is given plenty of water but still dies. Explain why using what plants need.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant needs", statement: "Missing any need stops growth." }],
            steps: [
              { reasoning: "The plant has water but no light.", marks: 1, markCode: "M" },
              { reasoning: "Without light it cannot make food.", marks: 1, markCode: "M" },
              { reasoning: "It grows weak and dies — all needs must be met.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No light → no food → plant dies",
          },
        },
        {
          id: "cips-u1-pl-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a need of plants?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Air" },
            { id: "b", text: "Sugar from shops" },
            { id: "c", text: "Water" },
            { id: "d", text: "Light" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant needs", statement: "Plants make their own food." }],
            steps: [{ reasoning: "Plants make their own food — they don't need bought sugar.", marks: 1, markCode: "A" }],
            finalAnswer: "Sugar from shops",
          },
        },
        {
          id: "cips-u1-pl-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the four needs of plants. (b) What are roots and what do they do? (c) What does the stem do? (d) What do leaves do and what do they need? (e) What is a seedling? (f) Describe what happens when a seed germinates. (g) What do flowers produce? (h) Predict what happens to a plant with no water and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plant growth", statement: "Integrated Stage 2 plants answer." }],
            steps: [
              { reasoning: "(a) Light, water, air, warmth.", marks: 1, markCode: "M" },
              { reasoning: "(b) Roots absorb water and anchor the plant.", marks: 1, markCode: "M" },
              { reasoning: "(c) Stem carries water to leaves.", marks: 1, markCode: "M" },
              { reasoning: "(d) Leaves make food using sunlight, water, air.", marks: 1, markCode: "M" },
              { reasoning: "(e) A young plant grown from a seed.", marks: 1, markCode: "M" },
              { reasoning: "(f) Root grows first, then shoot and leaves.", marks: 1, markCode: "M" },
              { reasoning: "(g) Seeds.", marks: 1, markCode: "M" },
              { reasoning: "(h) Plant wilts and may die — cannot absorb water or make food.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Needs, roots, stem, leaves, seedling, germination, seeds, no-water prediction.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-pl-notes",
      title: "Plants — revision notes",
      summary: "Needs: light/water/air/warmth; seed→seedling→flower→seeds; roots absorb.",
      sections: [
        { heading: "Needs", body: "Missing any need (light, water, air, warmth) stops healthy growth." },
        { heading: "Growth", body: "Germination: root first, then shoot and leaves; flowers make seeds." },
      ],
    },
  ],
};

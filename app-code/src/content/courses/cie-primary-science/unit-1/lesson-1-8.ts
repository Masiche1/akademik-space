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
            { id: "a", text: "Sunlight" }, { id: "b", text: "Water" }, { id: "c", text: "Soil only" }, { id: "d", text: "Air" },
          ], correctChoiceId: "c" },
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

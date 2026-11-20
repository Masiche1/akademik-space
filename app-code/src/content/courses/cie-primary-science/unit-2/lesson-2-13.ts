import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cips-u2-lesson-2-13",
  code: "2-13",
  title: "Stage 5 — Light, Shadows and Seeing",
  goal: "I CAN explain how shadows form and how we see objects.",
  standards: ["Cambridge Primary Science 0097 Stage 5: light",
  "Cambridge Primary Science 0097 framework substrands: 5Ps"],
  stage: 5,
  vocabulary: [
    { term: "Light source", definition: "Object making its own light: sun, candle, torch." },
    { term: "Shadow", definition: "Dark area where light is blocked." },
    { term: "Opaque", definition: "Blocks all light: wood, metal." },
    { term: "Translucent", definition: "Scatters light: tracing paper, frosted glass." },
    { term: "Reflection", definition: "Light bouncing off a surface." },
  ],
  concepts: [
    {
      id: "cips-u2-s13-light",
      title: "Light, shadows and seeing",
      skill: "Explain shadow formation, light materials and how we see at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Light and shadows",
            body: "Light travels in straight lines from sources. Opaque objects block light completely → sharp shadows; translucent scatter it → fuzzy shadows; transparent let it through → no shadow. Shadow size and position change with the light's position — morning/evening sun makes long shadows, midday sun makes short ones.",
          },
          {
            heading: "How we see",
            body: "We see objects because light from a source reflects off them into our eyes. Light sources make their own light (sun, fire); non-sources reflect light (moon reflects sunlight). Mirrors reflect light — that's why we see ourselves. Light cannot travel around corners — it only goes straight.",
          },
        ],
        keyFormulas: [
          { name: "Shadow", statement: "opaque object + light = shadow; position changes with light" },
          { name: "Seeing", statement: "light reflects off object → enters eyes" },
        ],
        workedExample: {
          problem: "Why is your shadow longest at sunrise?",
          solution: "Sun is low on horizon → light hits at shallow angle → shadow stretches far.",
        },
      },
      questions: [
        {
          id: "cips-u2-lg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a light source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Moon" }, { id: "b", text: "Mirror" }, { id: "c", text: "Sun" }, { id: "d", text: "White wall" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light source", statement: "Makes own light." }],
            steps: [{ reasoning: "Sun makes its own light; others reflect.", marks: 1, markCode: "A" }],
            finalAnswer: "Sun",
          },
        },
        {
          id: "cips-u2-lg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between opaque and transparent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Opaque/transparent", statement: "Blocks vs passes light." }],
            steps: [
              { reasoning: "Opaque blocks all light; transparent lets it through.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opaque blocks light; transparent lets it through",
          },
        },
        {
          id: "cips-u2-lg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can we see a book on a desk?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflection and seeing", statement: "Light bounces off object into eyes." }],
            steps: [
              { reasoning: "Light from source hits the book.", marks: 1, markCode: "M" },
              { reasoning: "It reflects off the book's surface.", marks: 1, markCode: "M" },
              { reasoning: "Reflected light enters our eyes → we see it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light reflects off the book into our eyes",
          },
        },
        {
          id: "cips-u2-lg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Describe an investigation to show how shadow size changes during the day. Include: prediction, method, what you measure, and expected results at morning/midday/evening. Explain the science.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Investigating shadows", statement: "Measure shadow length at different times." }],
            steps: [
              { reasoning: "Prediction: shadow longest morning/evening, shortest midday.", marks: 1, markCode: "M" },
              { reasoning: "Method: same object, same spot, measure shadow at intervals.", marks: 1, markCode: "M" },
              { reasoning: "Measure shadow length with ruler/metre stick.", marks: 1, markCode: "M" },
              { reasoning: "Record times and lengths in table.", marks: 1, markCode: "M" },
              { reasoning: "Expected: long AM/PM, short at noon — sun angle changes.", marks: 1, markCode: "M" },
              { reasoning: "Explanation: low sun = shallow angle = long shadow.", marks: 1, markCode: "M" },
              { reasoning: "Fair test: only time of day changes.", marks: 1, markCode: "M" },
              { reasoning: "Results interpreted with scientific reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Measure shadow length through day; longest at low sun, shortest at midday",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-lg-notes",
      title: "Light and shadows — notes",
      summary: "Light travels straight; opaque blocks; we see via reflected light.",
      sections: [
        { heading: "Shadows", body: "Opaque = sharp shadow; position changes with sun angle." },
        { heading: "Seeing", body: "Light reflects off objects into eyes; sources make own light." },
      ],
    },
  ],
};

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
            { id: "a", text: "Mirror" },
            { id: "b", text: "White wall" },
            { id: "c", text: "Moon" },
            { id: "d", text: "Sun" },
          ], correctChoiceId: "d" },
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
        {
          id: "cips-u2-lg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material makes a FUZZY shadow (scatters light)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A mirror" },
            { id: "b", text: "Wood" },
            { id: "c", text: "Clear glass" },
            { id: "d", text: "Tracing paper" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Translucent", statement: "Scatters light." }],
            steps: [{ reasoning: "Tracing paper is translucent — fuzzy shadow.", marks: 1, markCode: "A" }],
            finalAnswer: "Tracing paper",
          },
        },
        {
          id: "cips-u2-lg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light travels in which path?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Straight lines" },
            { id: "b", text: "In circles" },
            { id: "c", text: "Random paths" },
            { id: "d", text: "Curved lines" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light", statement: "Travels in straight lines." }],
            steps: [{ reasoning: "Light travels in straight lines.", marks: 1, markCode: "A" }],
            finalAnswer: "Straight lines",
          },
        },
        {
          id: "cips-u2-lg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many ways can light interact with materials: blocked, scattered, passed through?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "ways" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Light and materials", statement: "Three interactions." }],
            steps: [{ reasoning: "Blocked, scattered, passed = 3 ways.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-lg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 5 materials for shadows: 3 make clear shadows and 2 make no shadow. How many are opaque?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow tests", statement: "Clear shadow = opaque." }],
            steps: [
              { reasoning: "3 materials make clear shadows.", marks: 1, markCode: "M" },
              { reasoning: "They are opaque → 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-lg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How do we see most objects?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Our eyes send out light" },
            { id: "b", text: "They are warm" },
            { id: "c", text: "Light reflects off them into our eyes" },
            { id: "d", text: "They make their own light" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seeing", statement: "Reflected light enters eyes." }],
            steps: [{ reasoning: "Light reflects off objects into our eyes.", marks: 1, markCode: "A" }],
            finalAnswer: "Light reflects off them into our eyes",
          },
        },
        {
          id: "cips-u2-lg-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two light sources and two objects that only reflect light.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Source vs reflector", statement: "Sources make light; others reflect." }],
            steps: [
              { reasoning: "Two sources (e.g. sun, candle).", marks: 1, markCode: "M" },
              { reasoning: "Two reflectors (e.g. moon, mirror).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. sun/candle; moon/mirror",
          },
        },
        {
          id: "cips-u2-lg-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the Moon looks bright at night even though it is not a light source.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflected light", statement: "Moon reflects sunlight." }],
            steps: [
              { reasoning: "The Moon does not make its own light.", marks: 1, markCode: "M" },
              { reasoning: "Sunlight hits the Moon and reflects toward Earth.", marks: 1, markCode: "M" },
              { reasoning: "We see that reflected light — it appears bright.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moon reflects sunlight toward Earth",
          },
        },
        {
          id: "cips-u2-lg-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Can light travel around a corner?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yes, always" },
            { id: "b", text: "Only through mirrors" },
            { id: "c", text: "No — light only travels in straight lines" },
            { id: "d", text: "Only at night" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light", statement: "Travels straight only." }],
            steps: [{ reasoning: "Light cannot bend around corners — it goes straight.", marks: 1, markCode: "A" }],
            finalAnswer: "No — light travels in straight lines",
          },
        },
        {
          id: "cips-u2-lg-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In shadow measurements, a stick's shadow is 20 cm at 9 am, 10 cm at noon and 25 cm at 5 pm. What is the total length of all three shadows?",
          response: { type: "numeric", parts: [{ label: "a", answer: 55, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow measurements", statement: "Add lengths for total." }],
            steps: [
              { reasoning: "$20 + 10 + 25 = 55$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 55 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "55",
          },
        },
        {
          id: "cips-u2-lg-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a mirror lets you see yourself.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflection", statement: "Light bounces off smooth surfaces." }],
            steps: [
              { reasoning: "Light from a source hits the mirror.", marks: 1, markCode: "M" },
              { reasoning: "The mirror reflects the light back toward you.", marks: 1, markCode: "M" },
              { reasoning: "The reflected light enters your eyes showing your image.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light reflects off the mirror into your eyes",
          },
        },
        {
          id: "cips-u2-lg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "When is a shadow SHORTEST?",
          response: { type: "mcq", choices: [
            { id: "a", text: "At midnight" },
            { id: "b", text: "At midday" },
            { id: "c", text: "At sunset" },
            { id: "d", text: "At sunrise" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow and sun angle", statement: "High sun = short shadow." }],
            steps: [{ reasoning: "Midday sun is high → shortest shadow.", marks: 1, markCode: "A" }],
            finalAnswer: "At midday",
          },
        },
        {
          id: "cips-u2-lg-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define light source and give two examples plus one non-source. (b) How does a shadow form? (c) Compare opaque, translucent and transparent materials with examples. (d) How do we see objects? (e) Why does the Moon look bright? (f) Why can't light go around corners? (g) When is a shadow longest and why? (h) Describe a fair test for shadow size at different times of day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Light and shadows", statement: "Integrated Stage 5 light answer." }],
            steps: [
              { reasoning: "(a) Makes own light; sun/candle; moon (reflects).", marks: 1, markCode: "M" },
              { reasoning: "(b) Opaque object blocks straight light.", marks: 1, markCode: "M" },
              { reasoning: "(c) Opaque=wood; translucent=tracing paper; transparent=glass.", marks: 1, markCode: "M" },
              { reasoning: "(d) Light reflects off object into eyes.", marks: 1, markCode: "M" },
              { reasoning: "(e) Reflects sunlight toward Earth.", marks: 1, markCode: "M" },
              { reasoning: "(f) Light travels in straight lines only.", marks: 1, markCode: "M" },
              { reasoning: "(g) Morning/evening — low sun, shallow angle.", marks: 1, markCode: "M" },
              { reasoning: "(h) Same object/spot; measure shadow at times; only time changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light sources, shadow formation, material types, seeing, Moon, straight light, longest shadow, fair test.",
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

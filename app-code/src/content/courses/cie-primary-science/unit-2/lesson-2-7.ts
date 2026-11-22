import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cips-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 4 — Light, Sound and Shadows",
  goal: "I CAN explain shadows, reflection and how sound travels.",
  standards: ["Cambridge Primary Science 0097 Stage 4: light and sound",
  "Cambridge Primary Science 0097 framework substrands: 4Ps"],
  stage: 4,
  vocabulary: [
    { term: "Shadow", definition: "The dark shape made when an object blocks light." },
    { term: "Opaque", definition: "Material that blocks light completely." },
    { term: "Transparent", definition: "Material that lets light pass through clearly." },
    { term: "Vibration", definition: "Fast back-and-forth movement that makes sound." },
    { term: "Pitch", definition: "How high or low a sound is." },
  ],
  concepts: [
    {
      id: "cips-u2-s7-light-sound",
      title: "Light, shadows and sound",
      skill: "Explain shadow formation, light materials and sound at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Light and shadows",
            body: "Light travels in straight lines from a source. When an opaque object blocks the light, a shadow forms on the surface behind it — the darker and closer the object to the light, the sharper the shadow. Transparent materials (glass) let light through; translucent (tracing paper) scatter it; opaque (wood) block it.",
          },
          {
            heading: "Sound",
            body: "Sound is made by vibrations — when something vibrates, it pushes air particles that carry the sound to our ears. Faster vibrations make higher-pitched sounds; slower make lower. Sound needs a medium (air, water, solids) to travel — it cannot travel through a vacuum.",
          },
        ],
        keyFormulas: [
          { name: "Shadow", statement: "opaque object + light source = shadow" },
          { name: "Sound", statement: "vibrations → air particles → ears" },
        ],
        workedExample: {
          problem: "Why does your shadow get longer in the evening?",
          solution: "The sun is lower, so light hits at a shallower angle, stretching the shadow.",
        },
      },
      questions: [
        {
          id: "cips-u2-sn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shadow forms when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "an object is heavy" },
            { id: "b", text: "it is nighttime" },
            { id: "c", text: "the sun goes down" },
            { id: "d", text: "light is blocked by an opaque object" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Shadow", statement: "Blocked light creates a shadow." }],
            steps: [{ reasoning: "Opaque object blocks light → shadow.", marks: 1, markCode: "A" }],
            finalAnswer: "Light blocked by opaque object",
          },
        },
        {
          id: "cips-u2-sn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes sound?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Vibration", statement: "Vibrating objects make sound." }],
            steps: [
              { reasoning: "Vibrations.", marks: 1, markCode: "M" },
              { reasoning: "Answer: vibrations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vibrations",
          },
        },
        {
          id: "cips-u2-sn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't you hear someone in a vacuum (empty space)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sound needs medium", statement: "No air/particles = no sound travel." }],
            steps: [
              { reasoning: "Sound travels through air/particles.", marks: 1, markCode: "M" },
              { reasoning: "Vacuum has no particles to carry sound.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the missing medium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No air/particles to carry the sound vibrations",
          },
        },
        {
          id: "cips-u2-sn-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A guitar string is plucked fast then slowly. How does the pitch change and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pitch and vibration", statement: "Faster vibration = higher pitch." }],
            steps: [
              { reasoning: "Fast pluck = faster vibration.", marks: 1, markCode: "M" },
              { reasoning: "Faster vibration = higher pitch.", marks: 1, markCode: "M" },
              { reasoning: "Slow pluck = lower pitch.", marks: 1, markCode: "M" },
              { reasoning: "Answer links vibration speed to pitch.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fast pluck = higher pitch; slow = lower pitch",
          },
        },
        {
          id: "cips-u2-sn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is TRANSPARENT?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wood" },
            { id: "b", text: "Glass" },
            { id: "c", text: "Metal" },
            { id: "d", text: "Brick" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transparent", statement: "Lets light through clearly." }],
            steps: [{ reasoning: "Glass is transparent; the others block light.", marks: 1, markCode: "A" }],
            finalAnswer: "Glass",
          },
        },
        {
          id: "cips-u2-sn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light travels in what path?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Straight lines" },
            { id: "b", text: "In circles" },
            { id: "c", text: "Randomly" },
            { id: "d", text: "Curved lines" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light", statement: "Travels in straight lines." }],
            steps: [{ reasoning: "Light travels in straight lines.", marks: 1, markCode: "A" }],
            finalAnswer: "Straight lines",
          },
        },
        {
          id: "cips-u2-sn-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many things does sound need to travel: a vibrating source and a medium?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "things" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sound", statement: "Needs vibration source + medium." }],
            steps: [{ reasoning: "Source and medium = 2 things.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-sn-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You make 4 shadow tests with different objects: 3 block light completely and 1 lets light through. How many objects are opaque?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow tests", statement: "Blocks light fully = opaque." }],
            steps: [
              { reasoning: "3 objects block light completely.", marks: 1, markCode: "M" },
              { reasoning: "They are opaque → 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-sn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gives a LOWER pitch?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Loud vibrations" },
            { id: "b", text: "No vibration" },
            { id: "c", text: "Fast vibrations" },
            { id: "d", text: "Slow vibrations" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pitch", statement: "Slower vibration = lower pitch." }],
            steps: [{ reasoning: "Slower vibrations give lower pitch.", marks: 1, markCode: "A" }],
            finalAnswer: "Slow vibrations",
          },
        },
        {
          id: "cips-u2-sn-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two materials that let light through (transparent or translucent).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transparent/translucent", statement: "Glass, clear plastic, tracing paper." }],
            steps: [
              { reasoning: "First (e.g. glass).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. clear plastic or tracing paper).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. glass and tracing paper",
          },
        },
        {
          id: "cips-u2-sn-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why your shadow is longest in the morning and evening but shortest at midday.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow and light angle", statement: "Low sun = long shadow." }],
            steps: [
              { reasoning: "Light travels in straight lines.", marks: 1, markCode: "M" },
              { reasoning: "Morning/evening sun is low → light hits at a shallow angle.", marks: 1, markCode: "M" },
              { reasoning: "Shallow angle stretches the shadow; midday sun is high → short shadow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low sun angle stretches shadows; high sun shortens them",
          },
        },
        {
          id: "cips-u2-sn-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Sound cannot travel through which of these?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Water" },
            { id: "b", text: "A wooden table" },
            { id: "c", text: "A vacuum" },
            { id: "d", text: "Air" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sound medium", statement: "Needs particles; vacuum has none." }],
            steps: [{ reasoning: "A vacuum has no particles to carry sound.", marks: 1, markCode: "A" }],
            finalAnswer: "A vacuum",
          },
        },
        {
          id: "cips-u2-sn-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 5 sound tests, 3 produced high pitch and 2 produced low pitch. How many tests produced low pitch?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "tests" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Sound tests", statement: "Count low pitch results." }],
            steps: [
              { reasoning: "2 tests produced low pitch.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-sn-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between opaque, transparent and translucent materials, with one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light materials", statement: "Opaque blocks; transparent passes; translucent scatters." }],
            steps: [
              { reasoning: "Opaque blocks all light — e.g. wood.", marks: 1, markCode: "M" },
              { reasoning: "Transparent lets light through clearly — e.g. glass.", marks: 1, markCode: "M" },
              { reasoning: "Translucent scatters light — e.g. tracing paper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Opaque=blocks (wood); transparent=clear (glass); translucent=scatters (tracing paper)",
          },
        },
        {
          id: "cips-u2-sn-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to a shadow when the object moves closer to the light source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It gets larger and sharper" },
            { id: "b", text: "It gets smaller" },
            { id: "c", text: "It disappears" },
            { id: "d", text: "It stays the same" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shadow", statement: "Closer to light = larger, sharper shadow." }],
            steps: [{ reasoning: "Closer to light → bigger, sharper shadow.", marks: 1, markCode: "A" }],
            finalAnswer: "It gets larger and sharper",
          },
        },
        {
          id: "cips-u2-sn-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) How does a shadow form? (b) Name three types of material by how they interact with light with examples. (c) What makes sound? (d) Why can't sound travel through a vacuum? (e) What happens to pitch when vibrations speed up? (f) Through what can sound travel? Name two. (g) Why is your shadow longer in the evening? (h) Describe how to make a higher-pitched sound on a ruler.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Light, sound, shadows", statement: "Integrated Stage 4 answer." }],
            steps: [
              { reasoning: "(a) Opaque object blocks straight-travelling light.", marks: 1, markCode: "M" },
              { reasoning: "(b) Opaque=wood; transparent=glass; translucent=tracing paper.", marks: 1, markCode: "M" },
              { reasoning: "(c) Vibrations push air particles to ears.", marks: 1, markCode: "M" },
              { reasoning: "(d) Vacuum has no particles to carry sound.", marks: 1, markCode: "M" },
              { reasoning: "(e) Pitch gets higher.", marks: 1, markCode: "M" },
              { reasoning: "(f) Air, water, solids.", marks: 1, markCode: "M" },
              { reasoning: "(g) Low evening sun hits at shallow angle → long shadow.", marks: 1, markCode: "M" },
              { reasoning: "(h) Pluck/flick the ruler faster or shorten the vibrating part.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shadow formation, light materials, vibration sound, vacuum, pitch, mediums, evening shadow, higher pitch.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-sn-notes",
      title: "Light and sound — revision notes",
      summary: "Shadow = blocked light; sound = vibrations; pitch ∝ vibration speed.",
      sections: [
        { heading: "Light", body: "Opaque blocks, transparent passes, translucent scatters; shadow from blocked light." },
        { heading: "Sound", body: "Vibrations carry through air/water/solids; faster = higher pitch." },
      ],
    },
  ],
};

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
            { id: "a", text: "light is blocked by an opaque object" }, { id: "b", text: "the sun goes down" }, { id: "c", text: "an object is heavy" }, { id: "d", text: "it is nighttime" },
          ], correctChoiceId: "a" },
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

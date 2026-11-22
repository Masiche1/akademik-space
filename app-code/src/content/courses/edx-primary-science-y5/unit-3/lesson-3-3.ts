import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "edps5-u3-lesson-3-3",
  code: "3-3",
  title: "Light, Sound and Earth & Space",
  goal: "I CAN describe light and sound behaviour and Earth's place in space.",
  standards: ["Year 5 Science: Light, sound and space"],
  vocabulary: [
    { term: "Luminous", definition: "Object producing its own light." },
    { term: "Umbra/penumbra", definition: "Full shadow / partial shadow." },
    { term: "Echo", definition: "Reflected sound heard again." },
    { term: "Solar eclipse", definition: "Moon blocks sunlight." },
  ],
  concepts: [
    {
      id: "edps5-u3-light",
      title: "Light properties",
      skill: "Describe light sources, shadows and reflection.",
      lesson: {
        sections: [
          {
            heading: "Light sources",
            body: "**Luminous** objects make own light (sun, stars, fire, bulbs). Non-luminous objects reflect light (moon, planets, most things). Light travels in straight lines at ~300,000 km/s — fastest known.",
          },
          {
            heading: "Shadows",
            body: "**Umbra** = total shadow (no light); **penumbra** = partial shadow (some light). Shadow size depends on light source size and distance. Eclipses: **solar** = moon blocks sun; **lunar** = Earth's shadow on moon.",
          },
        ],
        keyFormulas: [
          { name: "Luminous", statement: "Makes own light" },
          { name: "Umbra", statement: "Total shadow" },
          { name: "Penumbra", statement: "Partial shadow" },
        ],
        workedExample: {
          problem: "Why is the moon not luminous?",
          solution:
            "It only reflects sunlight — doesn't produce its own light.",
        },
      },
      questions: [
        {
          id: "edps5-u3-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a luminous object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sun" },
              { id: "b", text: "Earth" },
              { id: "c", text: "Book" },
              { id: "d", text: "Moon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Luminous",
                statement: "Makes own light.",
              },
            ],
            steps: [
              { reasoning: "Luminous = own light.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sun",
            commonErrors: ["Reflecting object chosen."],
          },
        },
        {
          id: "edps5-u3-li-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the umbra?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total shadow where no light reaches" },
              { id: "b", text: "A type of eclipse" },
              { id: "c", text: "Light source" },
              { id: "d", text: "Partial shadow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Umbra", statement: "Total shadow." },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: total shadow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Total shadow where no light reaches",
            commonErrors: ["Confused with penumbra."],
          },
        },
        {
          id: "edps5-u3-li-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between solar and lunar eclipses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eclipses",
                statement: "Solar=moon blocks sun; lunar=earth shadows moon.",
              },
            ],
            steps: [
              { reasoning: "Solar described.", marks: 1, markCode: "A" },
              { reasoning: "Lunar described.", marks: 1, markCode: "A" },
              { reasoning: "Distinguished.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Solar eclipse: Moon blocks Sun; lunar eclipse: Earth's shadow falls on Moon",
            commonErrors: ["Swapped."],
          },
        },
        {
          id: "edps5-u3-li-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why shadows are longer at sunrise and sunset than at midday.",
          parts: [
            { label: "a", prompt: "Sun position", marks: 1 },
            { label: "b", prompt: "Light angle", marks: 1 },
            { label: "c", prompt: "Shadow effect", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shadow length",
                statement: "Low sun = longer shadow.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Sun low.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Angle explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Effect linked.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Sun is lower at sunrise/sunset so light hits at shallow angle, stretching shadows longer",
            commonErrors: ["No angle link."],
          },
        },
      ],
    },
    {
      id: "edps5-u3-sound",
      title: "Sound and Hearing",
      skill: "Describe sound production, travel and hearing.",
      lesson: {
        sections: [
          {
            heading: "Sound production",
            body: "Sound = **vibrations** travelling through medium (air/water/solid). Pitch = frequency (high/low); volume = amplitude (loud/quiet). Sound can't travel through vacuum.",
          },
          {
            heading: "Hearing",
            body: "Ear: **outer ear** (collects), **middle ear** (ossicles amplify), **inner ear** (cochlea converts to nerve signals). **Echolocation** = animals (bats, dolphins) using echoes to navigate.",
          },
        ],
        keyFormulas: [
          { name: "Vibration", statement: "Sound source" },
          { name: "Pitch", statement: "Frequency high/low" },
          { name: "Volume", statement: "Amplitude loud/quiet" },
        ],
        workedExample: {
          problem: "Why can't we hear sound in space?",
          solution: "Space is vacuum — no medium for vibrations to travel.",
        },
      },
      questions: [
        {
          id: "edps5-u3-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What produces sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Heat" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Vibrations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sound", statement: "Vibrations." },
            ],
            steps: [
              { reasoning: "Sound = vibrations.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Vibrations",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps5-u3-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is echolocation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound recording" },
              { id: "b", text: "Hearing aids" },
              { id: "c", text: "Using echoes to navigate" },
              { id: "d", text: "Seeing in dark" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Echolocation",
                statement: "Echoes for navigation.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: echoes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Using echoes to navigate",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps5-u3-so-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how pitch and volume differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pitch vs volume",
                statement: "Frequency vs amplitude.",
              },
            ],
            steps: [
              { reasoning: "Pitch defined.", marks: 1, markCode: "A" },
              { reasoning: "Volume defined.", marks: 1, markCode: "A" },
              { reasoning: "Distinguished.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pitch = frequency (high/low); volume = amplitude (loud/quiet)",
            commonErrors: ["Swapped."],
          },
        },
        {
          id: "edps5-u3-so-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how sound travels from a drum to your ear.",
          parts: [
            { label: "a", prompt: "Source", marks: 1 },
            { label: "b", prompt: "Travel", marks: 1 },
            { label: "c", prompt: "Reception", marks: 1 },
            { label: "d", prompt: "Full description", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound travel",
                statement: "Vibrations through air to ear.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Drum vibrates.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Air carries.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ear detects.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Drum vibrates → vibrations travel through air as sound waves → ear detects and converts to nerve signals",
            commonErrors: ["Incomplete journey."],
          },
        },
      ],
    },
  ],
};

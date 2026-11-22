import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "edps6-u3-lesson-3-3",
  code: "3-3",
  title: "Light, Sound and Earth & Space",
  goal: "I CAN describe light, sound and Earth's place in space.",
  standards: ["Year 6 Science: Light, sound and space"],
  vocabulary: [
    { term: "Luminous/non-luminous", definition: "Makes/reflects light." },
    { term: "Refraction/reflection", definition: "Light bending/bouncing." },
    { term: "Eclipse", definition: "Shadow blocking light." },
    { term: "Planet/star", definition: "Orbits sun / produces light." },
  ],
  concepts: [
    {
      id: "edps6-u3-light",
      title: "Light properties",
      skill: "Describe light sources, reflection, refraction and shadows.",
      lesson: {
        sections: [
          {
            heading: "Light behaviour",
            body: "Light travels straight at ~300,000 km/s. **Luminous** objects make own light; **non-luminous** reflect. **Reflection** bounces off surfaces (mirrors); **refraction** bends entering new medium (glass, water).",
          },
          {
            heading: "Shadows and eclipses",
            body: "**Umbra** = total shadow; **penumbra** = partial. **Solar eclipse** = moon blocks sun; **lunar eclipse** = Earth's shadow on moon. Shadow size depends on light source size and distance.",
          },
        ],
        keyFormulas: [
          { name: "Luminous", statement: "Makes own light" },
          { name: "Refraction", statement: "Bends in new medium" },
          { name: "Umbra", statement: "Total shadow" },
        ],
        workedExample: {
          problem: "Why does a straw look bent in water?",
          solution: "Light refracts entering/leaving water, bending image.",
        },
      },
      questions: [
        {
          id: "edps6-u3-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a luminous object?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moon" },
              { id: "b", text: "Sun" },
              { id: "c", text: "Book" },
              { id: "d", text: "Earth" },
            ],
            correctChoiceId: "b",
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
            commonErrors: ["Reflecting object."],
          },
        },
        {
          id: "edps6-u3-li-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is refraction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light bending in new medium" },
              { id: "b", text: "Light absorbed" },
              { id: "c", text: "Light travelling straight" },
              { id: "d", text: "Light bouncing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Refraction", statement: "Bending." },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: bending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Light bending in new medium",
            commonErrors: ["Confused with reflection."],
          },
        },
        {
          id: "edps6-u3-li-q3",
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
          id: "edps6-u3-li-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why shadows are longer at sunrise/sunset than midday.",
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
              "Sun is lower at sunrise/sunset so light hits at shallow angle, stretching shadows",
            commonErrors: ["No angle link."],
          },
        },
      ],
    },
    {
      id: "edps6-u3-soundspace",
      title: "Sound and Space",
      skill: "Describe sound and Earth's place in the solar system.",
      lesson: {
        sections: [
          {
            heading: "Sound",
            body: "Sound = vibrations through medium (air/water/solid). **Pitch** = frequency (high/low); **volume** = amplitude (loud/quiet). Can't travel through vacuum. **Echo** = reflected sound; **echolocation** = animals using echoes.",
          },
          {
            heading: "Space",
            body: "Solar system: Sun + 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune). Earth 3rd — only known life. Moon orbits Earth → phases. Stars = distant suns; galaxies = groups of stars.",
          },
        ],
        keyFormulas: [
          { name: "Sound", statement: "Vibrations" },
          { name: "Pitch/volume", statement: "Frequency/amplitude" },
          { name: "Earth", statement: "3rd planet" },
        ],
        workedExample: {
          problem: "Why can't we hear sound in space?",
          solution: "Space is vacuum — no medium for vibrations.",
        },
      },
      questions: [
        {
          id: "edps6-u3-ss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What produces sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat" },
              { id: "b", text: "Light" },
              { id: "c", text: "Vibrations" },
              { id: "d", text: "Magnetism" },
            ],
            correctChoiceId: "c",
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
          id: "edps6-u3-ss-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which planet is Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2nd" },
              { id: "b", text: "4th" },
              { id: "c", text: "3rd" },
              { id: "d", text: "1st" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Earth", statement: "3rd planet." },
            ],
            steps: [
              { reasoning: "Recall position.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3rd.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 3rd",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edps6-u3-ss-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain pitch vs volume.",
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
          id: "edps6-u3-ss-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why we see different moon phases.",
          parts: [
            { label: "a", prompt: "Moon orbits", marks: 1 },
            { label: "b", prompt: "Sunlight angle", marks: 1 },
            { label: "c", prompt: "Phase change", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moon phases",
                statement: "Different lit side faces Earth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Orbit stated.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Sun angle.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Phases described.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "As Moon orbits Earth, we see different amounts of its sunlit side — new, crescent, quarter, gibbous, full",
            commonErrors: ["No orbit link."],
          },
        },
      ],
    },
  ],
};

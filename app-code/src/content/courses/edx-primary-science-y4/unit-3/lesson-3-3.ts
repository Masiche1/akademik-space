import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "edps4-u3-lesson-3-3",
  code: "3-3",
  title: "Light, Sound and Earth & Space",
  goal: "I CAN explain light behaviour and Earth's movements and moon phases.",
  standards: ["Year 4 Science: Light, sound and space"],
  vocabulary: [
    {
      term: "Refraction",
      definition: "Bending of light when it changes medium.",
    },
    { term: "Shadow", definition: "Dark area where light is blocked." },
    { term: "Translucent", definition: "Scatters light — fuzzy shadow." },
    { term: "Lunar phase", definition: "Shape of moon as seen from Earth." },
  ],
  concepts: [
    {
      id: "edps4-u3-light",
      title: "Light properties",
      skill: "Describe reflection, refraction, shadows and transparency.",
      lesson: {
        sections: [
          {
            heading: "Light behaviour",
            body: "Light travels in straight lines. **Opaque** objects block completely (sharp shadow); **transparent** let all through (no shadow); **translucent** scatter (fuzzy shadow). Light **reflects** off shiny surfaces (mirrors) and **refracts** (bends) when entering different materials (glass, water).",
          },
          {
            heading: "Light uses",
            body: "Mirrors reflect; lenses refract to focus light (glasses, cameras). Shadows change size/direction with light position — sundials use shadows to tell time.",
          },
        ],
        keyFormulas: [
          { name: "Opaque", statement: "Blocks light — sharp shadow" },
          { name: "Translucent", statement: "Scatters — fuzzy shadow" },
          { name: "Refraction", statement: "Light bends in new medium" },
        ],
        workedExample: {
          problem: "Why does a straw look bent in a glass of water?",
          solution:
            "Light refracts when passing from water to air, bending the image.",
        },
      },
      questions: [
        {
          id: "edps4-u3-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is refraction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light bouncing off" },
              { id: "b", text: "Light travelling straight" },
              { id: "c", text: "Light bending when changing medium" },
              { id: "d", text: "Light being absorbed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Refraction",
                statement: "Light bends.",
              },
            ],
            steps: [
              { reasoning: "Refraction = bending.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Light bending when changing medium",
            commonErrors: ["Confused with reflection."],
          },
        },
        {
          id: "edps4-u3-li-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which material gives a fuzzy shadow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clear glass" },
              { id: "b", text: "Wax paper" },
              { id: "c", text: "Metal" },
              { id: "d", text: "Wood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Translucent",
                statement: "Wax paper = translucent = fuzzy shadow.",
              },
            ],
            steps: [
              { reasoning: "Identify translucent.", marks: 1, markCode: "M" },
              { reasoning: "Answer: wax paper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Wax paper",
            commonErrors: ["Opaque chosen."],
          },
        },
        {
          id: "edps4-u3-li-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a straw looks bent in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Refraction",
                statement: "Light bends entering/leaving water.",
              },
            ],
            steps: [
              { reasoning: "Refraction identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Light refracts as it passes from water to air, bending the image of the straw",
            commonErrors: ["No refraction link."],
          },
        },
        {
          id: "edps4-u3-li-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test to compare shadow sizes at different times of day.",
          parts: [
            { label: "a", prompt: "What you keep same", marks: 1 },
            { label: "b", prompt: "What you measure", marks: 1 },
            { label: "c", prompt: "When you test", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fair test",
                statement: "Same object/surface; measure at different times.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controls listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Shadow measured.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Times specified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Prediction made.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Keep same object on same surface; measure shadow length morning/noon/evening; predict longest at sunrise/sunset",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
    {
      id: "edps4-u3-space",
      title: "Earth, Moon and Seasons",
      skill: "Explain Earth's movements, moon phases and seasons.",
      lesson: {
        sections: [
          {
            heading: "Earth's movements",
            body: "Earth **rotates** (24h) → day/night. Earth **revolves** (365 days) around Sun → with **tilted axis** → seasons. Different hemispheres get different seasons simultaneously.",
          },
          {
            heading: "Moon and seasons",
            body: "Moon orbits Earth (28 days) → **phases** (new→crescent→first quarter→gibbous→full). **Solstices** = longest/shortest days; **equinoxes** = equal day/night. Seasons change because Earth's tilt changes sunlight angle.",
          },
        ],
        keyFormulas: [
          { name: "Rotation", statement: "24h → day/night" },
          { name: "Revolution", statement: "365 days → seasons" },
          { name: "Tilted axis", statement: "Causes seasons" },
        ],
        workedExample: {
          problem: "Why do we have seasons?",
          solution:
            "Earth's tilted axis means different hemispheres get more direct sunlight at different times of year.",
        },
      },
      questions: [
        {
          id: "edps4-u3-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes seasons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon" },
              { id: "b", text: "Earth's tilted axis" },
              { id: "c", text: "Clouds" },
              { id: "d", text: "Earth's distance from Sun" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seasons",
                statement: "Tilted axis causes.",
              },
            ],
            steps: [
              { reasoning: "Tilt causes seasons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Earth's tilted axis",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps4-u3-sp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How long does Earth take to orbit the Sun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 hours" },
              { id: "b", text: "365 days" },
              { id: "c", text: "10 years" },
              { id: "d", text: "28 days" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Revolution",
                statement: "365 days = 1 year.",
              },
            ],
            steps: [
              { reasoning: "Recall orbit time.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 365 days.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 365 days",
            commonErrors: ["Wrong time."],
          },
        },
        {
          id: "edps4-u3-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the four main moon phases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moon phases",
                statement: "New, crescent, quarter, gibbous, full.",
              },
            ],
            steps: [
              { reasoning: "Phase 1-2.", marks: 1, markCode: "A" },
              { reasoning: "Phase 3-4.", marks: 1, markCode: "A" },
              { reasoning: "All named.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "New moon, crescent, first quarter, gibbous, full moon",
            commonErrors: ["Incomplete list."],
          },
        },
        {
          id: "edps4-u3-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why it's summer in one hemisphere and winter in the other at the same time.",
          parts: [
            { label: "a", prompt: "Earth's tilt", marks: 1 },
            { label: "b", prompt: "Sunlight angle", marks: 1 },
            { label: "c", prompt: "Hemisphere difference", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seasons",
                statement: "Tilt → different sunlight angles per hemisphere.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tilt described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sunlight angle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Hemisphere contrast.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Earth's tilted axis means one hemisphere gets more direct sunlight (summer) while the other gets less (winter)",
            commonErrors: ["No tilt link."],
          },
        },
      ],
    },
  ],
};

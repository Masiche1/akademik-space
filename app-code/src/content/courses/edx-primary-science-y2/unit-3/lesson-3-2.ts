import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "edps2-u3-lesson-3-2",
  code: "3-2",
  title: "Light, Shadows and Reflection",
  goal: "I CAN explain how shadows form and how light reflects.",
  standards: ["Year 2 Science: Light"],
  vocabulary: [
    {
      term: "Light source",
      definition: "Something that makes light: sun, lamp, candle.",
    },
    { term: "Shadow", definition: "Dark area where light is blocked." },
    { term: "Reflection", definition: "When light bounces off a surface." },
    {
      term: "Opaque/transparent",
      definition: "Blocks light / lets light through.",
    },
  ],
  concepts: [
    {
      id: "edps2-u3-light",
      title: "Light and shadows",
      skill: "Explain how shadows form and how materials affect light.",
      lesson: {
        sections: [
          {
            heading: "How shadows form",
            body: "A shadow forms when an **opaque** object blocks light from a source. The darker/closer the object to the light, the sharper the shadow. Transparent materials let light through (no shadow); translucent scatter it (fuzzy shadow).",
          },
          {
            heading: "Shadow changes",
            body: "Shadows change size and direction as the light source moves: the sun's shadows are longest at sunrise/sunset and shortest at midday. We can make shadow puppets by blocking light.",
          },
        ],
        keyFormulas: [
          { name: "Shadow", statement: "Light blocked by opaque object" },
          { name: "Opaque", statement: "Blocks light completely" },
          { name: "Translucent", statement: "Scatters light" },
        ],
        workedExample: {
          problem: "Why is your shadow longest in the morning?",
          solution:
            "Sun is low — light hits at an angle, making a long shadow.",
        },
      },
      questions: [
        {
          id: "edps2-u3-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What creates a shadow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Light blocked by an object" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Shadow",
                statement: "Blocked light.",
              },
            ],
            steps: [
              { reasoning: "Shadow = blocked light.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Light blocked by an object",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps2-u3-li-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which material would NOT create a shadow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Hand" },
              { id: "c", text: "Book" },
              { id: "d", text: "Clear glass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transparency",
                statement: "Clear glass lets light through.",
              },
            ],
            steps: [
              { reasoning: "Identify transparent.", marks: 1, markCode: "M" },
              { reasoning: "Answer: clear glass.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Clear glass",
            commonErrors: ["Choosing opaque."],
          },
        },
        {
          id: "edps2-u3-li-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are shadows longer in the morning than at midday?",
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
              {
                reasoning: "Sun position identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Effect explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sun is lower in the morning so light hits at an angle, stretching the shadow",
            commonErrors: ["No sun angle link."],
          },
        },
        {
          id: "edps2-u3-li-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an investigation: how does distance from a torch affect shadow size?",
          parts: [
            { label: "a", prompt: "What you keep the same", marks: 1 },
            { label: "b", prompt: "What you change", marks: 1 },
            { label: "c", prompt: "What you measure", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Investigation",
                statement:
                  "Same object/screen; change distance; measure shadow size.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controls identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Variable changed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Measurement described.",
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
              "Keep object/screen same; change torch distance; measure shadow size; predict closer = bigger",
            commonErrors: ["Unfair test or no prediction."],
          },
        },
      ],
    },
    {
      id: "edps2-u3-reflect",
      title: "Reflection",
      skill: "Understand how light reflects and how we see reflections.",
      lesson: {
        sections: [
          {
            heading: "How reflection works",
            body: "Light **bounces** off surfaces — this is reflection. **Shiny/ smooth** surfaces (mirror, still water, polished metal) reflect clearly; **rough/matte** surfaces scatter light (we see them but not a clear image).",
          },
          {
            heading: "Uses of reflection",
            body: "Mirrors let us see ourselves. Reflectors on bikes/cars make us visible. Periscopes use mirrors to see over obstacles. Water reflects the sky.",
          },
        ],
        keyFormulas: [
          { name: "Reflection", statement: "Light bounces off surface" },
          { name: "Shiny surface", statement: "Clear reflection" },
          { name: "Rough surface", statement: "Scattered reflection" },
        ],
        workedExample: {
          problem: "Why can't you see your reflection in a carpet?",
          solution:
            "Carpet is rough — it scatters light instead of reflecting it clearly.",
        },
      },
      questions: [
        {
          id: "edps2-u3-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light travelling through" },
              { id: "b", text: "Light disappearing" },
              { id: "c", text: "Light being absorbed" },
              { id: "d", text: "Light bouncing off a surface" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Light bounces.",
              },
            ],
            steps: [
              { reasoning: "Reflection = bounce.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Light bouncing off a surface",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps2-u3-re-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which surface gives the clearest reflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mirror" },
              { id: "b", text: "Carpet" },
              { id: "c", text: "Paper" },
              { id: "d", text: "Wood" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection",
                statement: "Smooth shiny = clear reflection.",
              },
            ],
            steps: [
              {
                reasoning: "Identify smooth surface.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: mirror.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Mirror",
            commonErrors: ["Choosing rough surface."],
          },
        },
        {
          id: "edps2-u3-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do cyclists wear reflective clothing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection uses",
                statement: "Reflects car headlights = visible.",
              },
            ],
            steps: [
              { reasoning: "Purpose identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reflective clothing bounces back car headlights so drivers can see them",
            commonErrors: ["Vague or wrong."],
          },
        },
        {
          id: "edps2-u3-re-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare reflection in a mirror vs a rough wall: what differs and why?",
          parts: [
            { label: "a", prompt: "Mirror result", marks: 1 },
            { label: "b", prompt: "Wall result", marks: 1 },
            { label: "c", prompt: "Why different", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection",
                statement: "Mirror=smooth=clear; wall=rough=scattered.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mirror clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Wall scattered.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Surface explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Mirror gives clear image (smooth); wall scatters light (rough) so no clear image",
            commonErrors: ["No surface link."],
          },
        },
      ],
    },
  ],
};

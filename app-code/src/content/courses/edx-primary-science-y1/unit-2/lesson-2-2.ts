import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "edps1-u2-lesson-2-2",
  code: "2-2",
  title: "Light and Sound",
  goal: "I CAN describe how light and sound travel and their effects.",
  standards: ["Year 1 Science: Light and sound"],
  vocabulary: [
    {
      term: "Light",
      definition:
        "What lets us see — comes from sources like the sun or lamps.",
    },
    { term: "Sound", definition: "What we hear — made by vibrations." },
    { term: "Source", definition: "Where light or sound comes from." },
    { term: "Vibrate", definition: "Move quickly back and forth." },
  ],
  concepts: [
    {
      id: "edps1-u2-light",
      title: "Light",
      skill: "Understand light sources and how we see.",
      lesson: {
        sections: [
          {
            heading: "Light sources",
            body: "Light comes from sources: **sun**, **lamps**, **candles**, **fireflies**, **stars**. Some things make their own light (natural sources); others reflect light (moon reflects sunlight).",
          },
          {
            heading: "Seeing things",
            body: "We see objects when light bounces off them into our eyes. In the dark, we can't see because there's no light. Shadows are made when light is blocked.",
          },
        ],
        keyFormulas: [
          { name: "Light source", statement: "Makes own light" },
          { name: "Reflect", statement: "Bounces light back" },
          { name: "Shadow", statement: "Dark area where light blocked" },
        ],
        workedExample: {
          problem: "Why can't we see in a dark room?",
          solution: "No light — light is needed to see objects.",
        },
      },
      questions: [
        {
          id: "edps1-u2-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a natural light source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lamp" },
              { id: "b", text: "Sun" },
              { id: "c", text: "Candle" },
              { id: "d", text: "Torch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light source",
                statement: "Sun is natural.",
              },
            ],
            steps: [
              { reasoning: "Sun = natural source.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sun",
            commonErrors: ["Choosing man-made."],
          },
        },
        {
          id: "edps1-u2-li-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does the moon look bright?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes its own light" },
              { id: "b", text: "It reflects sunlight" },
              { id: "c", text: "It's hot" },
              { id: "d", text: "It's close" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection",
                statement: "Moon reflects sunlight.",
              },
            ],
            steps: [
              { reasoning: "Reflection identified.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: reflects sunlight.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** It reflects sunlight",
            commonErrors: ["Thinking moon makes light."],
          },
        },
        {
          id: "edps1-u2-li-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a shadow?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shadows",
                statement: "Light blocked by an object.",
              },
            ],
            steps: [
              { reasoning: "Light source needed.", marks: 1, markCode: "M" },
              { reasoning: "Object blocks light.", marks: 1, markCode: "A" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light is blocked by an object, creating a dark area",
            commonErrors: ["No blocking explanation."],
          },
        },
        {
          id: "edps1-u2-li-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why we can see a red apple but not in complete darkness.",
          parts: [
            { label: "a", prompt: "Light needed", marks: 1 },
            { label: "b", prompt: "Reflection", marks: 1 },
            { label: "c", prompt: "Darkness effect", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seeing",
                statement:
                  "Light reflects off apple into eyes; darkness = no light.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Light required.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reflection occurs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Darkness blocks light.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Coherent explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Light reflects off the apple into our eyes; in darkness there's no light to reflect",
            commonErrors: ["Incomplete explanation."],
          },
        },
      ],
    },
    {
      id: "edps1-u2-sound",
      title: "Sound",
      skill: "Understand how sound is made and travels.",
      lesson: {
        sections: [
          {
            heading: "Making sound",
            body: "Sound is made when things **vibrate** (move back and forth quickly). Plucking a guitar string, hitting a drum, or speaking all make vibrations that we hear as sound.",
          },
          {
            heading: "Loud and quiet",
            body: "Louder sounds have bigger vibrations. We can make sounds louder by: hitting harder, using bigger objects, or amplifying. Sound travels through air, water and solids.",
          },
        ],
        keyFormulas: [
          { name: "Vibrate", statement: "Move back and forth" },
          { name: "Loud/quiet", statement: "Size of vibration" },
          { name: "Travels through", statement: "Air, water, solids" },
        ],
        workedExample: {
          problem: "Why does a drum make sound when hit?",
          solution: "Hitting makes the drum skin vibrate, creating sound.",
        },
      },
      questions: [
        {
          id: "edps1-u2-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes sound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Vibrations" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Colour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sound",
                statement: "Made by vibrations.",
              },
            ],
            steps: [
              { reasoning: "Vibrations = sound.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Vibrations",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps1-u2-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can you make a sound louder?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whisper" },
              { id: "b", text: "Hit harder or use bigger object" },
              { id: "c", text: "Cover ears" },
              { id: "d", text: "Move away" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loudness",
                statement: "Bigger vibrations = louder.",
              },
            ],
            steps: [
              { reasoning: "Identify method.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hit harder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hit harder or use bigger object",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps1-u2-so-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two materials sound can travel through.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound travel",
                statement: "Air, water, solids (wood, metal).",
              },
            ],
            steps: [
              { reasoning: "Material 1.", marks: 1, markCode: "A" },
              { reasoning: "Material 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Air; water'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u2-so-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why you can hear someone talking underwater but see less clearly.",
          parts: [
            { label: "a", prompt: "Sound travels through water", marks: 1 },
            {
              label: "b",
              prompt: "Light doesn't travel well through water",
              marks: 1,
            },
            { label: "c", prompt: "Comparison made", marks: 1 },
            { label: "d", prompt: "Clear explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound vs light",
                statement:
                  "Sound travels through water; light doesn't travel well.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sound travels.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Light doesn't.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Comparison clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Explained well.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Sound travels through water so we can hear; light doesn't travel well through water so we can't see clearly",
            commonErrors: ["Incomplete comparison."],
          },
        },
      ],
    },
  ],
};

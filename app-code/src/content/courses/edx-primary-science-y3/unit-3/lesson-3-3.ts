import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "edps3-u3-lesson-3-3",
  code: "3-3",
  title: "Sound and Earth & Space",
  goal: "I CAN describe sound properties and Earth's place in space.",
  standards: ["Year 3 Science: Sound and Earth/space"],
  vocabulary: [
    { term: "Pitch/volume", definition: "How high/low / how loud/quiet." },
    { term: "Vibrate", definition: "Move back and forth to make sound." },
    { term: "Day/night", definition: "Earth's rotation causing light/dark." },
    { term: "Orbit", definition: "Path of object around another in space." },
  ],
  concepts: [
    {
      id: "edps3-u3-sound",
      title: "Sound properties",
      skill: "Describe pitch, volume and how sound travels.",
      lesson: {
        sections: [
          {
            heading: "Pitch and volume",
            body: "**Pitch** = high/low (whistle vs drum). **Volume** = loud/quiet (shout vs whisper). Faster vibrations = higher pitch; bigger vibrations = louder volume.",
          },
          {
            heading: "Sound travel",
            body: "Sound needs a **medium** (air, water, solid) — it travels as vibrations. It can't travel through a vacuum (space). Sound reflects off surfaces creating echoes.",
          },
        ],
        keyFormulas: [
          { name: "Pitch", statement: "High/low" },
          { name: "Volume", statement: "Loud/quiet" },
          { name: "Medium", statement: "Air/water/solid needed" },
        ],
        workedExample: {
          problem: "Why can't we hear sound in space?",
          solution:
            "Space is a vacuum — no medium for sound to travel through.",
        },
      },
      questions: [
        {
          id: "edps3-u3-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pitch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How long" },
              { id: "b", text: "How fast" },
              { id: "c", text: "How loud" },
              { id: "d", text: "How high or low" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pitch", statement: "High/low." },
            ],
            steps: [
              { reasoning: "Pitch = high/low.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** How high or low",
            commonErrors: ["Confused with volume."],
          },
        },
        {
          id: "edps3-u3-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which has higher pitch: flute or tuba?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flute" },
              { id: "b", text: "Neither" },
              { id: "c", text: "Tuba" },
              { id: "d", text: "Both same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pitch",
                statement: "Flute = high pitch.",
              },
            ],
            steps: [
              { reasoning: "Identify high pitch.", marks: 1, markCode: "M" },
              { reasoning: "Answer: flute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Flute",
            commonErrors: ["Wrong instrument."],
          },
        },
        {
          id: "edps3-u3-so-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does sound need to travel?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound travel",
                statement: "Needs medium (air/water/solid).",
              },
            ],
            steps: [
              { reasoning: "Medium identified.", marks: 1, markCode: "M" },
              { reasoning: "Examples given.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A medium — air, water or solid — sound can't travel through a vacuum",
            commonErrors: ["No medium mentioned."],
          },
        },
        {
          id: "edps3-u3-so-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sound is different underwater vs in air.",
          parts: [
            { label: "a", prompt: "Sound needs medium", marks: 1 },
            { label: "b", prompt: "Water vs air", marks: 1 },
            { label: "c", prompt: "Speed difference", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound travel",
                statement: "Travels faster in water (denser medium).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Medium needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Media compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Speed explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Sound travels through both but faster in water because particles are closer together, transmitting vibrations better",
            commonErrors: ["No medium density link."],
          },
        },
      ],
    },
    {
      id: "edps3-u3-earth",
      title: "Earth and Space",
      skill: "Describe Earth's movements and position in the solar system.",
      lesson: {
        sections: [
          {
            heading: "Earth's movements",
            body: "Earth **rotates** (spins) on its axis → causes **day and night**. Earth **revolves** (orbits) the Sun → causes **seasons** (combined with tilted axis). Moon orbits Earth → causes **lunar phases**.",
          },
          {
            heading: "Solar system",
            body: "Sun at centre; 8 planets orbit it: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Earth is 3rd from Sun — the only known planet with life. Moon is Earth's natural satellite.",
          },
        ],
        keyFormulas: [
          { name: "Rotation", statement: "Spins → day/night" },
          { name: "Revolution", statement: "Orbits Sun → seasons" },
          { name: "Earth", statement: "3rd planet from Sun" },
        ],
        workedExample: {
          problem: "What causes day and night?",
          solution:
            "Earth's rotation — the side facing the Sun has day, the other night.",
        },
      },
      questions: [
        {
          id: "edps3-u3-ea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth rotating on its axis" },
              { id: "b", text: "Clouds" },
              { id: "c", text: "The Moon" },
              { id: "d", text: "Earth orbiting Sun" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Day/night",
                statement: "Caused by rotation.",
              },
            ],
            steps: [{ reasoning: "Rotation causes.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Earth rotating on its axis",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps3-u3-ea-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which planet is Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4th from Sun" },
              { id: "b", text: "1st from Sun" },
              { id: "c", text: "3rd from Sun" },
              { id: "d", text: "2nd from Sun" },
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
            finalAnswer: "**(c)** 3rd from Sun",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edps3-u3-ea-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the difference between rotation and revolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotation vs revolution",
                statement: "Spin on axis vs orbit Sun.",
              },
            ],
            steps: [
              { reasoning: "Rotation defined.", marks: 1, markCode: "A" },
              { reasoning: "Revolution defined.", marks: 1, markCode: "A" },
              { reasoning: "Distinguished.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rotation = Earth spins on its axis (day/night); revolution = Earth orbits the Sun (seasons)",
            commonErrors: ["Terms swapped."],
          },
        },
        {
          id: "edps3-u3-ea-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why we see different moon phases.",
          parts: [
            { label: "a", prompt: "Moon orbits Earth", marks: 1 },
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
                statement: "Different amounts of lit side face Earth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Orbit stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sun angle explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Phases described.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "As Moon orbits Earth, we see different amounts of its sunlit side — new, crescent, full, gibbous phases",
            commonErrors: ["No orbit/sunlight link."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "edps2-u3-lesson-3-3",
  code: "3-3",
  title: "Sound and Seasonal Change",
  goal: "I CAN describe sound properties and seasonal changes in the environment.",
  standards: ["Year 2 Science: Sound and seasons"],
  vocabulary: [
    { term: "Pitch", definition: "How high or low a sound is." },
    { term: "Volume", definition: "How loud or quiet a sound is." },
    {
      term: "Vibrate",
      definition: "Move back and forth quickly to make sound.",
    },
    {
      term: "Seasonal change",
      definition: "Changes that happen across the year.",
    },
  ],
  concepts: [
    {
      id: "edps2-u3-sound",
      title: "Sound properties",
      skill: "Describe pitch and volume of sounds.",
      lesson: {
        sections: [
          {
            heading: "Pitch and volume",
            body: "**Pitch** = how high or low a sound is (whistle = high, drum = low). **Volume** = how loud or quiet (shout = loud, whisper = quiet). Both come from vibrations.",
          },
          {
            heading: "Making sounds",
            body: "Sounds are made by vibrations. Faster vibrations = higher pitch. Bigger vibrations = louder volume. Sound travels through air, water and solids — it can't travel through a vacuum (empty space).",
          },
        ],
        keyFormulas: [
          { name: "Pitch", statement: "High/low sound" },
          { name: "Volume", statement: "Loud/quiet" },
          { name: "Vibrations", statement: "Faster = higher pitch" },
        ],
        workedExample: {
          problem: "Why does a tight guitar string make higher pitch?",
          solution: "Tight string vibrates faster = higher pitch.",
        },
      },
      questions: [
        {
          id: "edps2-u3-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pitch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How loud" },
              { id: "b", text: "How fast" },
              { id: "c", text: "How high or low" },
              { id: "d", text: "How long" },
            ],
            correctChoiceId: "c",
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
          id: "edps2-u3-so-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sound has higher pitch: whistle or drum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drum" },
              { id: "b", text: "Neither" },
              { id: "c", text: "Whistle" },
              { id: "d", text: "Both same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pitch",
                statement: "Whistle = high pitch.",
              },
            ],
            steps: [
              { reasoning: "Identify high pitch.", marks: 1, markCode: "M" },
              { reasoning: "Answer: whistle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whistle",
            commonErrors: ["Wrong sound."],
          },
        },
        {
          id: "edps2-u3-so-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a sound louder?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volume",
                statement: "Bigger vibrations = louder.",
              },
            ],
            steps: [
              { reasoning: "Cause identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bigger vibrations (hit harder, use bigger object) make louder sound",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps2-u3-so-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why you can't hear sound in space.",
          parts: [
            { label: "a", prompt: "What sound needs", marks: 1 },
            { label: "b", prompt: "Space condition", marks: 1 },
            { label: "c", prompt: "Result", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sound travel",
                statement: "Needs medium (air); space is vacuum.",
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
                reasoning: "Space = vacuum.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "No sound travels.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Sound needs a medium (air/water/solid) to travel; space is a vacuum so sound can't travel",
            commonErrors: ["No medium explanation."],
          },
        },
      ],
    },
    {
      id: "edps2-u3-season",
      title: "Seasonal change",
      skill: "Describe how the environment changes across seasons.",
      lesson: {
        sections: [
          {
            heading: "What changes",
            body: "**Temperature** (hot/cold), **daylight** (long/short days), **weather** (rain/snow/sun), **plants** (grow/dormant), **animals** (migrate/hibernate/thicker fur).",
          },
          {
            heading: "Adaptations to seasons",
            body: "Animals adapt: bears hibernate (sleep through winter), birds migrate (fly south), squirrels collect food, trees drop leaves. Humans adapt: wear different clothes, change activities.",
          },
        ],
        keyFormulas: [
          { name: "Temperature", statement: "Hot in summer, cold in winter" },
          { name: "Migration", statement: "Animals move for food/warmth" },
          { name: "Hibernation", statement: "Sleep through winter" },
        ],
        workedExample: {
          problem: "What do birds do in winter?",
          solution:
            "Many migrate to warmer places; some stay and grow thicker feathers.",
        },
      },
      questions: [
        {
          id: "edps2-u3-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is migration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing bigger" },
              { id: "b", text: "Sleeping through winter" },
              { id: "c", text: "Animals moving to warmer places" },
              { id: "d", text: "Changing colour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Migration",
                statement: "Move for warmth/food.",
              },
            ],
            steps: [
              { reasoning: "Migration = moving.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Animals moving to warmer places",
            commonErrors: ["Confused with hibernation."],
          },
        },
        {
          id: "edps2-u3-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do bears do in winter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hibernate" },
              { id: "b", text: "Migrate south" },
              { id: "c", text: "Grow feathers" },
              { id: "d", text: "Change colour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hibernation",
                statement: "Bears sleep through winter.",
              },
            ],
            steps: [
              { reasoning: "Identify behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hibernate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hibernate",
            commonErrors: ["Wrong behaviour."],
          },
        },
        {
          id: "edps2-u3-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ways humans adapt to winter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human adaptation",
                statement: "Warm clothes, heating, change activities.",
              },
            ],
            steps: [
              { reasoning: "Adaptation 1.", marks: 1, markCode: "A" },
              { reasoning: "Adaptation 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Wear warm clothes; stay indoors more'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps2-u3-se-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare how animals and plants respond to autumn.",
          parts: [
            { label: "a", prompt: "Animal response", marks: 1 },
            { label: "b", prompt: "Plant response", marks: 1 },
            { label: "c", prompt: "Similarity", marks: 1 },
            { label: "d", prompt: "Difference", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Seasonal change",
                statement:
                  "Animals migrate/hibernate; plants lose leaves/dormant.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Animal response.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Plant response.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Similarity noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Difference noted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Animals migrate/hibernate; plants lose leaves/rest; both conserve energy",
            commonErrors: ["Incomplete comparison."],
          },
        },
      ],
    },
  ],
};

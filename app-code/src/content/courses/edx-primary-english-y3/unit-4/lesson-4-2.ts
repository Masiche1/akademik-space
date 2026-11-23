import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe3-u4-lesson-4-2",
  code: "4-2",
  title: "Plays and Performance",
  goal: "I CAN understand playscripts and perform dialogue.",
  standards: ["Year 3 Speaking and Listening"],
  vocabulary: [
    {
      term: "Playscript",
      definition: "The written form of a play with stage directions.",
    },
    {
      term: "Stage direction",
      definition: "Instructions for actors: '(sighs)', '(enters left)'.",
    },
    { term: "Act", definition: "A major section of a play." },
    { term: "Scene", definition: "A smaller section within an act." },
  ],
  concepts: [
    {
      id: "edpe3-u4-playscript",
      title: "Reading playscripts",
      skill: "Read playscripts and understand stage directions.",
      lesson: {
        sections: [
          {
            heading: "Playscript features",
            body: "A playscript has character names, dialogue and stage directions in brackets or italics. Stage directions tell actors what to do: '(angrily)', '(walks to the door)', '(whispers)'. They are not spoken aloud.",
          },
          {
            heading: "Performing plays",
            body: "When performing, actors use voice (loud, quiet, angry), movement (walking, gesturing) and expression (facial expressions) to show the character's feelings. Good actors listen to each other and react naturally.",
          },
        ],
        keyFormulas: [
          { name: "Stage direction", statement: "(action) — not spoken" },
        ],
        workedExample: {
          problem:
            "Read: TOM: (sits down) I'm tired. What does '(sits down)' mean?",
          solution: "Tom sits down while speaking — it's a stage direction.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are stage directions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words actors speak" },
              { id: "b", text: "Instructions for actors" },
              { id: "c", text: "The title of a play" },
              { id: "d", text: "The ending of a play" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stage direction",
                statement: "Actor instructions.",
              },
            ],
            steps: [
              {
                reasoning: "Stage directions tell actors what to do.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Instructions for actors",
            commonErrors: ["Thinking they're spoken."],
          },
        },
        {
          id: "edpe3-u4-ps-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a playscript, what does '(whispers)' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak loudly" },
              { id: "b", text: "Speak quietly" },
              { id: "c", text: "Shout" },
              { id: "d", text: "Sing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stage directions",
                statement: "Whisper = quiet voice.",
              },
            ],
            steps: [
              {
                reasoning: "Whispering means speaking quietly.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Speak quietly",
            commonErrors: ["Wrong interpretation."],
          },
        },
        {
          id: "edpe3-u4-ps-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a short playscript exchange (4-6 lines) between two friends planning a game.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Playscript writing",
                statement: "Character names + dialogue + stage directions.",
              },
            ],
            steps: [
              {
                reasoning: "Character names in capitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dialogue with correct punctuation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stage directions included.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Short playscript exchange",
            commonErrors: ["No stage directions or names."],
          },
        },
        {
          id: "edpe3-u4-ps-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain three ways an actor can show a character is angry when performing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Performance",
                statement: "Voice, movement, expression.",
              },
            ],
            steps: [
              {
                reasoning: "Voice: loud, sharp tone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Movement: stamping feet, clenched fists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expression: angry face, furrowed brows.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Voice + movement + expression",
            commonErrors: ["Only one method."],
          },
        },
      ],
    },
    {
      id: "edpe3-u4-performance",
      title: "Performing poetry and plays",
      skill: "Perform with expression, voice and movement.",
      lesson: {
        sections: [
          {
            heading: "Voice and expression",
            body: "Performance means bringing words to life. Use your voice: loud for excitement, quiet for secrets, slow for sadness, fast for fear. Your face and body show feelings too — a smile, a frown, a slumped posture. Look at your audience and speak clearly.",
          },
          {
            heading: "Group performance",
            body: "In group performances, listen to each other. Take turns speaking. React to what others say — nod, laugh, look surprised. Work together so the performance flows naturally, like a real conversation.",
          },
        ],
        keyFormulas: [
          {
            name: "Performance",
            statement: "Voice + expression + movement + audience",
          },
        ],
        workedExample: {
          problem: "How should you perform 'I love you!' said with joy?",
          solution: "Smile, warm voice, maybe a hug gesture.",
        },
      },
      questions: [
        {
          id: "edpe3-u4-per-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'performance' mean in English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing a poem" },
              { id: "b", text: "Presenting words aloud with expression" },
              { id: "c", text: "Reading silently" },
              { id: "d", text: "Drawing a picture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Performance",
                statement: "Presenting aloud.",
              },
            ],
            steps: [
              {
                reasoning: "Performance = speaking/acting out.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Presenting aloud",
            commonErrors: ["Confusing with reading."],
          },
        },
        {
          id: "edpe3-u4-per-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How should you say 'I'm so excited!' during a performance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In a flat, quiet voice" },
              { id: "b", text: "With an excited, energetic voice" },
              { id: "c", text: "In a whisper" },
              { id: "d", text: "Very slowly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Performance",
                statement: "Match voice to feeling.",
              },
            ],
            steps: [
              {
                reasoning: "Excited words need excited voice.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Excited voice",
            commonErrors: ["Flat delivery."],
          },
        },
        {
          id: "edpe3-u4-per-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three tips for performing a poem to an audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Performance skills",
                statement: "Three valid tips.",
              },
            ],
            steps: [
              {
                reasoning: "Speak clearly and loudly enough.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use expression to show feelings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Look at the audience, not the floor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Clear voice + expression + eye contact",
            commonErrors: ["Generic or missing tips."],
          },
        },
        {
          id: "edpe3-u4-per-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is listening important during a group performance? Explain with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Group work",
                statement: "Listening enables natural response.",
              },
            ],
            steps: [
              {
                reasoning: "Listening lets you react to others' lines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: if partner says 'I'm leaving', you respond naturally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates realistic, flowing performance.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Listening enables natural reactions",
            commonErrors: ["No example given."],
          },
        },
      ],
    },
  ],
};

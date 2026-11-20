import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ciege-u3-lesson-3-3",
  code: "3-3",
  title: "Character and Dialogue",
  goal: "I CAN create believable characters and write effective dialogue.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: narrative"],
  vocabulary: [
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Dialogue", definition: "Speech between characters." },
    { term: "Characterisation", definition: "How a writer reveals character." },
    { term: "Protagonist", definition: "The main character." },
    { term: "Antagonist", definition: "The character who opposes the protagonist." },
  ],
  concepts: [
    {
      id: "ciege-u3-s3-character",
      title: "Creating characters",
      skill: "Develop characters through action, dialogue and detail.",
      lesson: {
        sections: [
          {
            heading: "Revealing character",
            body: "Show character through what they do, say and think — not just description. 'He counted his change twice before paying' reveals carefulness better than 'he was careful'.",
          },
          {
            heading: "Consistent characters",
            body: "Characters should act consistently with their established personality — unless the story shows them changing. Give each character a distinct voice in dialogue.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Show a character is brave without saying 'brave'.",
          solution: "'She stepped forward before anyone else, her voice steady though her hands shook.'",
        },
      },
      questions: [
        {
          id: "ciege-u3-s3-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the protagonist?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The villain" }, { id: "b", text: "The main character" }, { id: "c", text: "The narrator" }, { id: "d", text: "A minor character" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protagonist", statement: "Main character." }],
            steps: [
              { reasoning: "The protagonist is the main character.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Main character",
          },
        },
        {
          id: "ciege-u3-s3-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence showing a character is kind without using the word 'kind'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Character through action", statement: "Action reveals trait." }],
            steps: [
              { reasoning: "The sentence shows a kind action.", marks: 1, markCode: "AO2" },
              { reasoning: "It does not use 'kind'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One showing sentence",
          },
        },
        {
          id: "ciege-u3-s3-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences of dialogue between a parent and child about homework.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue", statement: "Two speakers, natural speech." }],
            steps: [
              { reasoning: "Speech in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "Two different speakers.", marks: 1, markCode: "AO2" },
              { reasoning: "Sounds natural and punctuated correctly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two lines of dialogue",
          },
        },
        {
          id: "ciege-u3-s3-ch-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a character using three details that reveal their personality.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Characterisation", statement: "Three revealing details." }],
            steps: [
              { reasoning: "Three distinct details (appearance, action, speech).", marks: 1, markCode: "AO2" },
              { reasoning: "Each detail suggests a personality trait.", marks: 1, markCode: "AO2" },
              { reasoning: "Complete sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three character details",
          },
        },
      ],
    },
    {
      id: "ciege-u3-s3-dialogue",
      title: "Writing dialogue",
      skill: "Write natural dialogue with correct punctuation and subtext.",
      lesson: {
        sections: [
          {
            heading: "Dialogue punctuation",
            body: "Speech goes in inverted commas. 'Come here,' she said. Each new speaker starts a new paragraph. The punctuation goes inside the quotes: 'I'm tired,' he said, not 'I'm tired', he said.",
          },
          {
            heading: "Subtext",
            body: "Good dialogue often means more than it says. 'Fine,' she said, slamming the door — the action reveals she's not fine. Show feelings through what characters do while speaking.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write dialogue where a character is hiding disappointment.",
          solution: "'That's great,' Tom said, staring at his shoes. 'Really great.'",
        },
      },
      questions: [
        {
          id: "ciege-u3-s3-dl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which dialogue is punctuated correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"Hello,\" she said." }, { id: "b", text: "\"Hello\", she said." }, { id: "c", text: "Hello, she said." }, { id: "d", text: "\"Hello\" she said." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Comma inside quotes." }],
            steps: [
              { reasoning: "Comma goes inside the inverted commas before 'she said'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "\"Hello,\" she said.",
          },
        },
        {
          id: "ciege-u3-s3-dl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is subtext in dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Subtext", statement: "Hidden meaning." }],
            steps: [
              { reasoning: "Subtext is what is meant but not said.", marks: 1, markCode: "AO2" },
              { reasoning: "Shown through actions or tone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hidden meaning in speech",
          },
        },
        {
          id: "ciege-u3-s3-dl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a line of dialogue where a character says one thing but means another.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Subtext", statement: "Surface vs meaning." }],
            steps: [
              { reasoning: "The spoken words contrast with the intended meaning.", marks: 1, markCode: "AO2" },
              { reasoning: "Context or action reveals the true meaning.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One subtext dialogue",
          },
        },
        {
          id: "ciege-u3-s3-dl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write three lines of dialogue between two characters arguing about something.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue writing", statement: "Three speakers' turns." }],
            steps: [
              { reasoning: "Each speaker has a distinct voice.", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue advances the argument.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct throughout.", marks: 1, markCode: "AO2" },
              { reasoning: "Sounds natural.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three lines of argument",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u3-s3-char-notes",
      title: "Character and dialogue — revision notes",
      summary: "Characterisation, showing traits, dialogue punctuation and subtext.",
      sections: [
        { heading: "Character", body: "Reveal through action, dialogue and detail — not labels. Keep characters consistent unless they change." },
        { heading: "Dialogue", body: "Inverted commas, new speaker = new paragraph. Use subtext — action reveals what speech hides." },
      ],
    },
  ],
};

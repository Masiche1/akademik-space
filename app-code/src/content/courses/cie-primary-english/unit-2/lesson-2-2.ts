import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipe-u2-lesson-2-2",
  code: "2-2",
  title: "Stage 5 — Narrative and Descriptive Writing",
  goal: "I CAN write a short narrative with description and dialogue.",
  standards: ["Cambridge Primary English 0058 Stage 5: writing",
  "Cambridge Primary English 0058 framework substrands: 5Wc, 5Ws, 5Wv"],
  stage: 5,
  vocabulary: [
    { term: "Narrative", definition: "A story with a beginning, middle and end." },
    { term: "Dialogue", definition: "Speech between characters, shown in inverted commas." },
    { term: "Adverb", definition: "A word that describes how an action happens, often ending in -ly." },
    { term: "Setting", definition: "Where and when the story happens." },
    { term: "Cliffhanger", definition: "A moment that makes the reader want to know what happens next." },
  ],
  concepts: [
    {
      id: "cipe-u2-s5-narrative",
      title: "Writing narratives",
      skill: "Plan and write short narratives at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Story structure",
            body: "A narrative needs a beginning (introduce characters and setting), a middle (the problem and events), and an end (the resolution).",
          },
          {
            heading: "Dialogue",
            body: "Use inverted commas for speech: 'Come here,' said Tom. Each new speaker starts a new line or paragraph.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a narrative about finding a lost cat.",
          solution: "Beginning: character hears about the lost cat. Middle: searches and finds clues. End: returns the cat to its owner.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s5-na-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a narrative?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Title, middle, end" }, { id: "b", text: "Beginning, middle, end" }, { id: "c", text: "Start, problem, title" }, { id: "d", text: "Characters, setting, title" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative structure", statement: "Beginning, middle and end." }],
            steps: [{ reasoning: "Every story has a beginning, middle and end.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Beginning, middle, end",
          },
        },
        {
          id: "cipe-u2-s5-na-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses dialogue correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Come here said Tom." }, { id: "b", text: "\"Come here,\" said Tom." }, { id: "c", text: "Come here. said Tom." }, { id: "d", text: "\"Come here said Tom.\"" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Speech goes in inverted commas." }],
            steps: [{ reasoning: "Speech needs inverted commas and a comma before the reporting clause.", marks: 1, markCode: "AO2" }],
            finalAnswer: "\"Come here,\" said Tom.",
          },
        },
        {
          id: "cipe-u2-s5-na-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the opening sentence of a story about a mysterious letter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Narrative opening", statement: "Hook the reader with character or setting." }],
            steps: [
              { reasoning: "The sentence introduces a character or setting.", marks: 1, markCode: "AO2" },
              { reasoning: "It hints at mystery or interest.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter and full stop correct.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One engaging opening sentence",
          },
        },
        {
          id: "cipe-u2-s5-na-q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write two sentences of dialogue between two characters meeting for the first time.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue writing", statement: "Use inverted commas and new speakers on new lines." }],
            steps: [
              { reasoning: "Speech is in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "Each speaker has a different line.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation inside and outside quotes is correct.", marks: 1, markCode: "AO2" },
              { reasoning: "The dialogue sounds natural.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two lines of dialogue",
          },
        },
      ],
    },
    {
      id: "cipe-u2-s5-description",
      title: "Descriptive writing",
      skill: "Use senses and varied sentences to describe at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "The five senses",
            body: "Describe what you see, hear, smell, taste and touch. 'The air smelled of rain' uses smell. 'The soup was warm' uses touch/temperature.",
          },
          {
            heading: "Varied sentences",
            body: "Do not start every sentence the same way. Use different sentence lengths and sentence starters like 'Suddenly', 'Meanwhile' and 'At last'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Describe a beach using two senses.",
          solution: "'The waves crashed loudly against the shore. The salty air filled my lungs.' — sound and smell.",
        },
      },
      questions: [
        {
          id: "cipe-u2-s5-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the sense of sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The flowers smelled sweet." }, { id: "b", text: "The thunder crashed loudly." }, { id: "c", text: "The soup was hot." }, { id: "d", text: "The blanket was soft." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory description", statement: "Use words for sight, sound, smell, taste, touch." }],
            steps: [{ reasoning: "'Thunder crashed loudly' describes a sound.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The thunder crashed loudly.",
          },
        },
        {
          id: "cipe-u2-s5-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence describing a rainy day using a describing word.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Descriptive writing", statement: "Use adjectives and senses." }],
            steps: [
              { reasoning: "The sentence describes the weather.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses a describing word like grey, cold, wet.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One descriptive sentence",
          },
        },
        {
          id: "cipe-u2-s5-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence describing what a crowded market smells and sounds like.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sensory description", statement: "Use smell and sound words." }],
            steps: [
              { reasoning: "The sentence describes smells or sounds.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses specific words like 'spices', 'noise', 'voices'.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One sensory sentence",
          },
        },
        {
          id: "cipe-u2-s5-de-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences describing a forest using different senses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sensory description", statement: "Two different senses used." }],
            steps: [
              { reasoning: "Each sentence uses a different sense.", marks: 1, markCode: "AO2" },
              { reasoning: "Describing words are used effectively.", marks: 1, markCode: "AO2" },
              { reasoning: "Both sentences are complete and punctuated.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two sensory sentences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-s5-narr-notes",
      title: "Stage 5 narrative and description — revision notes",
      summary: "Story structure, dialogue, sensory description, varied sentences.",
      sections: [
        { heading: "Narratives", body: "Plan beginning, middle and end. Use dialogue in inverted commas. Vary your sentence starters." },
        { heading: "Description", body: "Use all five senses. Be specific: 'the spicy smell of curry' is better than 'a nice smell'." },
      ],
    },
  ],
};

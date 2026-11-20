import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cipe-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 3 — Speaking, Listening and Early Writing",
  goal: "I CAN listen actively, speak clearly and write simple sentences.",
  standards: ["Cambridge Primary English 0058 Stage 3: speaking, listening and writing",
  "Cambridge Primary English 0058 framework substrands: 3SLm, 3SLs, 3SLg, 3Wc, 3SLr"],
  stage: 3,
  vocabulary: [
    { term: "Speaker", definition: "The person giving a talk or telling a story." },
    { term: "Listener", definition: "The person hearing and understanding." },
    { term: "Sentence", definition: "A group of words making complete sense." },
    { term: "Capital letter", definition: "Big letter used at the start of a sentence and for names." },
    { term: "Full stop", definition: "Dot marking the end of a sentence." },
  ],
  concepts: [
    {
      id: "cipe-u1-s4-speaking",
      title: "Speaking, listening and sentence writing",
      skill: "Use speaking and listening skills and write simple sentences at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Speaking and listening",
            body: "Good listeners look at the speaker, think about what is said, and ask questions to check understanding. Good speakers use a clear voice, face their audience and organise ideas into a beginning, middle and end.",
          },
          {
            heading: "Writing sentences",
            body: "A sentence starts with a capital letter, makes complete sense and ends with a full stop. Include who or what (subject) and what happens (verb): 'The dog ran.' Use describing words to make sentences more interesting: 'The little dog ran quickly.'",
          },
        ],
        keyFormulas: [
          { name: "Sentence", statement: "Capital letter + complete meaning + full stop" },
        ],
        workedExample: {
          problem: "Fix this sentence: 'my cat sat.'",
          solution: "'My cat sat.' — capital M for the start, full stop at the end.",
        },
      },
      questions: [
        {
          id: "cipe-u1-sl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a good listener do while someone is speaking?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Look at the speaker and think about the words" }, { id: "b", text: "Talk over them" }, { id: "c", text: "Look away and daydream" }, { id: "d", text: "Interrupt with own story" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Active listening", statement: "Attend, think, ask questions." }],
            steps: [{ reasoning: "Good listeners focus on the speaker.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Look and think",
          },
        },
        {
          id: "cipe-u1-sl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a complete sentence?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sentence", statement: "Complete meaning + punctuation." }],
            steps: [
              { reasoning: "'The bird flew.' is complete; 'Running fast.' is not.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'The bird flew.'",
          },
        },
        {
          id: "cipe-u1-sl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence about your favourite food, starting with a capital letter and ending with a full stop.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence writing", statement: "Capital + meaning + full stop." }],
            steps: [
              { reasoning: "Sentence has a subject and verb.", marks: 1, markCode: "AO1" },
              { reasoning: "Starts with capital, ends with full stop.", marks: 1, markCode: "AO1" },
              { reasoning: "Makes complete sense.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I like pizza.'",
          },
        },
        {
          id: "cipe-u1-sl-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this sentence by adding a describing word: 'The dog barked.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Description", statement: "Add adjectives for detail." }],
            steps: [
              { reasoning: "Add a describing word, e.g. 'The loud dog barked.'", marks: 1, markCode: "AO1" },
              { reasoning: "Keeps capital and full stop.", marks: 1, markCode: "AO1" },
              { reasoning: "Improved sentence given.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The loud dog barked.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-sl-notes",
      title: "Speaking, listening and writing — revision notes",
      summary: "Active listening; sentences need capital + meaning + full stop.",
      sections: [
        { heading: "Speaking/listening", body: "Look at speaker, think, ask questions. Speaker: clear voice, organised beginning-middle-end." },
        { heading: "Sentences", body: "Capital start, complete meaning, full stop end. Add describing words for interest." },
      ],
    },
  ],
};

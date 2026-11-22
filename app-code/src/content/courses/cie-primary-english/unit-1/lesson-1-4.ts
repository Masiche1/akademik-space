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
            { id: "a", text: "Look at the speaker and think about the words" },
            { id: "b", text: "Look away and daydream" },
            { id: "c", text: "Talk over them" },
            { id: "d", text: "Interrupt with own story" },
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
        {
          id: "cipe-u1-sl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A good speaker organises their ideas into what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the end" },
            { id: "b", text: "A beginning, middle and end" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "A jumbled mess" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Organised talk", statement: "Structure ideas clearly." }],
            steps: [{ reasoning: "Talks are organised into beginning, middle and end.", marks: 1, markCode: "AO2" }],
            finalAnswer: "A beginning, middle and end",
          },
        },
        {
          id: "cipe-u1-sl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Running in the park" },
            { id: "b", text: "Because it rained" },
            { id: "c", text: "She sings a song." },
            { id: "d", text: "Under the table" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sentence", statement: "Complete meaning + punctuation." }],
            steps: [{ reasoning: "Only 'She sings a song.' makes complete sense.", marks: 1, markCode: "AO1" }],
            finalAnswer: "She sings a song.",
          },
        },
        {
          id: "cipe-u1-sl-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the sentence 'The cat sat down'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "The-cat-sat-down = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u1-sl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many describing words are in 'The little brown dog barked'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Spotting adjectives", statement: "Describing words tell what something is like." }],
            steps: [
              { reasoning: "'little' and 'brown' describe the dog = 2.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u1-sl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How can a listener check they have understood a speaker?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ask a question about what was said" },
            { id: "b", text: "Close their eyes" },
            { id: "c", text: "Start a different topic" },
            { id: "d", text: "Leave the room" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Active listening", statement: "Ask questions to check understanding." }],
            steps: [{ reasoning: "Asking a question checks what was heard.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Ask a question",
          },
        },
        {
          id: "cipe-u1-sl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Fix this sentence: 'my dog ran'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital and full stop", statement: "Capital start; full stop end." }],
            steps: [
              { reasoning: "Add capital M.", marks: 1, markCode: "AO2" },
              { reasoning: "Add a full stop: 'My dog ran.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "My dog ran.",
          },
        },
        {
          id: "cipe-u1-sl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best way to start giving a talk?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Read a different story" },
            { id: "b", text: "Shout the last sentence first" },
            { id: "c", text: "Introduce what your talk is about" },
            { id: "d", text: "Say nothing" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Beginning a talk", statement: "Tell listeners what it is about." }],
            steps: [{ reasoning: "An introduction sets up the beginning of the talk.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Introduce what your talk is about",
          },
        },
        {
          id: "cipe-u1-sl-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences about your pet or a pet you know. Use a describing word in one of them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence writing", statement: "Complete sentences; adjectives add detail." }],
            steps: [
              { reasoning: "Two complete sentences with capitals and full stops.", marks: 1, markCode: "AO2" },
              { reasoning: "A describing word is used in one sentence.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'My dog is called Rex. He is a fluffy brown dog.'",
          },
        },
        {
          id: "cipe-u1-sl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sentences are in 'Stop. Wait. Go.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-sl-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should a speaker face their audience when talking?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To hide their face" },
            { id: "b", text: "So the audience can hear and see them clearly" },
            { id: "c", text: "So they can see the wall" },
            { id: "d", text: "It does not matter" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Delivery", statement: "Face the audience for clarity." }],
            steps: [{ reasoning: "Facing the audience helps listeners see and hear the speaker.", marks: 1, markCode: "AO3" }],
            finalAnswer: "So the audience can hear and see them clearly",
          },
        },
        {
          id: "cipe-u1-sl-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a short talk about your favourite animal. Give one idea for the beginning, one for the middle and one for the end.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Talk structure", statement: "Beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning introduces the talk.", marks: 1, markCode: "AO3" },
              { reasoning: "Middle gives details about the animal.", marks: 1, markCode: "AO3" },
              { reasoning: "End finishes clearly, e.g. a summary or closing line.", marks: 1, markCode: "AO3" },
              { reasoning: "Three parts form a sensible plan.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. Start: 'I will talk about my dog'; Middle: what he looks like and does; End: 'That is why I love Rex.'",
          },
        },
        {
          id: "cipe-u1-sl-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this sentence by adding a describing word, then explain why your version is better: 'The bird sang.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Description", statement: "Adjectives add detail and interest." }],
            steps: [
              { reasoning: "An improved sentence is given, e.g. 'The little bird sang a sweet song.'", marks: 1, markCode: "AO2" },
              { reasoning: "Describing word(s) added.", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation: it helps the reader picture the bird.", marks: 1, markCode: "AO3" },
              { reasoning: "Punctuation remains correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The little bird sang a sweet song.' — it paints a clearer picture.",
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

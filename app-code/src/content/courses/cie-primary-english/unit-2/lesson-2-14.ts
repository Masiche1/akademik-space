import type { Lesson } from "../../../types.ts";

export const lesson214: Lesson = {
  id: "cipe-u2-lesson-2-14",
  code: "2-14",
  title: "Stage 4 — Adverbs, Viewpoint and Playscripts",
  goal: "I CAN use adverbs, identify viewpoint and read playscript conventions.",
  standards: ["Cambridge Primary English 0058 Stage 4: grammar and reading",
  "Cambridge Primary English 0058 framework substrands: 4Rv, 4Ri, 4Rs, 4SLp"],
  stage: 4,
  vocabulary: [
    { term: "Adverb", definition: "Word describing how/when/where: quickly, yesterday, here." },
    { term: "Adverbial phrase", definition: "Group of words acting as adverb: 'in the morning'." },
    { term: "Viewpoint", definition: "Whose eyes we see the story through." },
    { term: "Playscript", definition: "Text written for performance with speaker names and stage directions." },
    { term: "Stage direction", definition: "Instructions for actors: '(waves hands)'." },
  ],
  concepts: [
    {
      id: "cipe-u2-s14-adverb-playscript",
      title: "Adverbs, viewpoint and playscripts",
      skill: "Use adverbs and adverbial phrases, identify narrative viewpoint and recognise playscript features at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Adverbs and viewpoint",
            body: "Adverbs describe verbs — how (quickly), when (yesterday), where (here). Many end in -ly: slowly, happily. Viewpoint is who tells the story: first person ('I'), third person ('he/she'), or a character's eyes. Identifying viewpoint helps you understand why events are described a certain way.",
          },
          {
            heading: "Playscripts",
            body: "Playscripts are written for performance: speaker names in capitals or bold, their lines underneath, and stage directions in brackets telling actors what to do. Unlike stories, playscripts show action through directions rather continuous description. They rely on dialogue to move the plot.",
          },
        ],
        keyFormulas: [
          { name: "Adverb", statement: "describes verb: how/when/where; often -ly" },
          { name: "Playscript", statement: "SPEAKER NAME + lines + (stage directions)" },
        ],
        workedExample: {
          problem: "In 'She walked quickly to the door', which word is the adverb?",
          solution: "'quickly' — describes how she walked.",
        },
      },
      questions: [
        {
          id: "cipe-u2-av-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is an adverb in 'He ran quickly home'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "home" },
            { id: "b", text: "He" },
            { id: "c", text: "quickly" },
            { id: "d", text: "ran" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adverb", statement: "Describes verb." }],
            steps: [{ reasoning: "'quickly' describes how he ran.", marks: 1, markCode: "AO2" }],
            finalAnswer: "quickly",
          },
        },
        {
          id: "cipe-u2-av-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a stage direction in a playscript?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stage direction", statement: "Actor instructions in brackets." }],
            steps: [
              { reasoning: "Tells actors what to do/say/how to move.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Instructions for actors in brackets",
          },
        },
        {
          id: "cipe-u2-av-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite using an adverb: 'She sang.' Make it more descriptive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Using adverbs", statement: "Add -ly adverb to strengthen." }],
            steps: [
              { reasoning: "Choose an adverb: beautifully, loudly, softly.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'She sang beautifully.'", marks: 1, markCode: "AO2" },
              { reasoning: "Adverb correctly placed.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'She sang beautifully.'",
          },
        },
        {
          id: "cipe-u2-av-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Underline the adverb: 'The dog barked loudly at the gate.' (b) What viewpoint is 'I walked to school and I was late' written from? (c) Write two stage directions for a scene where a character enters a dark room. Show thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Adverbs, viewpoint, playscripts", statement: "Identify + apply conventions." }],
            steps: [
              { reasoning: "(a) 'loudly' is the adverb.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) First person ('I').", marks: 1, markCode: "AO2" },
              { reasoning: "(c) e.g. '(tiptoes in)' '(looks around nervously)'.", marks: 1, markCode: "AO2" },
              { reasoning: "Directions in brackets, describing action.", marks: 1, markCode: "AO2" },
              { reasoning: "Suitable for dark room scene.", marks: 1, markCode: "AO3" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "AO1" },
              { reasoning: "All answers correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) loudly (b) first person (c) e.g. (tiptoes in) (looks around nervously)",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All parts correct with apt stage directions." },
              { level: "Level 2", marks: "4-6", descriptor: "Mostly correct; directions less specific." },
              { level: "Level 1", marks: "1-3", descriptor: "Partial answers; vague directions." },
            ],
          },
        },
        {
          id: "cipe-u2-av-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word tells you HOW an action happens?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yesterday" },
            { id: "b", text: "Big" },
            { id: "c", text: "Quickly" },
            { id: "d", text: "Here" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adverb", statement: "Describes how/when/where." }],
            steps: [{ reasoning: "'Quickly' answers how.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Quickly",
          },
        },
        {
          id: "cipe-u2-av-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a playscript, where do stage directions usually appear?",
          response: { type: "mcq", choices: [
            { id: "a", text: "In speech marks" },
            { id: "b", text: "In brackets" },
            { id: "c", text: "Nowhere" },
            { id: "d", text: "In bold only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stage direction", statement: "Actor instructions in brackets." }],
            steps: [{ reasoning: "Stage directions are written in brackets.", marks: 1, markCode: "AO1" }],
            finalAnswer: "In brackets",
          },
        },
        {
          id: "cipe-u2-av-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many types of adverb meaning are there: how, when, where? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adverbs", statement: "How, when, where." }],
            steps: [
              { reasoning: "Three types listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-av-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is written from FIRST person viewpoint?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They walked to the shop." },
            { id: "b", text: "She walked to the shop." },
            { id: "c", text: "He walked to the shop." },
            { id: "d", text: "I walked to the shop." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Viewpoint", statement: "Whose eyes the story is told through." }],
            steps: [{ reasoning: "'I' signals first-person viewpoint.", marks: 1, markCode: "AO1" }],
            finalAnswer: "I walked to the shop.",
          },
        },
        {
          id: "cipe-u2-av-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an adverbial phrase (group of words acting as an adverb)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "in the morning" },
            { id: "b", text: "run fast" },
            { id: "c", text: "the big dog" },
            { id: "d", text: "a red car" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adverbial phrase", statement: "Words acting as adverb: 'in the morning'." }],
            steps: [{ reasoning: "'in the morning' tells when — an adverbial phrase.", marks: 1, markCode: "AO2" }],
            finalAnswer: "in the morning",
          },
        },
        {
          id: "cipe-u2-av-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Add an adverb to this sentence: 'The bird sang.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Using adverbs", statement: "Adverbs strengthen verbs." }],
            steps: [
              { reasoning: "An adverb is added (e.g. 'loudly', 'sweetly').", marks: 1, markCode: "AO2" },
              { reasoning: "Sentence remains correct: 'The bird sang loudly.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The bird sang loudly.'",
          },
        },
        {
          id: "cipe-u2-av-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a playscript line for a character called LUCY who says 'I am lost.' Include a stage direction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Playscript format", statement: "SPEAKER NAME + line + (direction)." }],
            steps: [
              { reasoning: "Speaker name given as LUCY.", marks: 1, markCode: "AO2" },
              { reasoning: "Speech line written.", marks: 1, markCode: "AO2" },
              { reasoning: "Stage direction in brackets added.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. LUCY: (looking around) 'I am lost.'",
          },
        },
        {
          id: "cipe-u2-av-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'She walked slowly to the door'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "She-walked-slowly-to-the-door = 6 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipe-u2-av-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is identifying the viewpoint of a story important?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It tells you who is telling the story, which shapes how events are described" },
            { id: "b", text: "It tells you the genre" },
            { id: "c", text: "It tells you the price" },
            { id: "d", text: "It does not matter" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Viewpoint", statement: "Whose eyes the story is seen through." }],
            steps: [{ reasoning: "Viewpoint shapes what is described and how.", marks: 1, markCode: "AO3" }],
            finalAnswer: "It tells you who is telling the story",
          },
        },
        {
          id: "cipe-u2-av-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two stage directions for a playscript scene where a character waits nervously for exam results.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Stage directions", statement: "Bracketed actor instructions." }],
            steps: [
              { reasoning: "Two directions written in brackets.", marks: 1, markCode: "AO2" },
              { reasoning: "They show nervousness through action.", marks: 1, markCode: "AO2" },
              { reasoning: "Directions are specific and performable.", marks: 1, markCode: "AO3" },
              { reasoning: "Suitable for the exam-results scene.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. '(paces up and down)' '(checks the door nervously)'",
          },
        },
        {
          id: "cipe-u2-av-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite these sentences using adverbs: 'She spoke. He ran. They worked.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Using adverbs", statement: "Adverbs describe how actions happen." }],
            steps: [
              { reasoning: "Each verb is given an adverb.", marks: 1, markCode: "AO2" },
              { reasoning: "Adverbs are correctly placed.", marks: 1, markCode: "AO2" },
              { reasoning: "All three sentences rewritten.", marks: 1, markCode: "AO2" },
              { reasoning: "Adverbs are varied and appropriate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'She spoke quietly. He ran quickly. They worked hard.'",
          },
        },
        {
          id: "cipe-u2-av-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short playscript extract (4-5 lines) where two characters argue about whose turn it is to do the dishes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Playscript writing", statement: "Names + lines + directions." }],
            steps: [
              { reasoning: "Speaker names given for both characters.", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue shows the argument clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one stage direction included.", marks: 1, markCode: "AO2" },
              { reasoning: "Format matches playscript conventions.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. SAM: 'It's your turn to do the dishes!' (points) ANN: 'No, it's yours. You did them yesterday.' (crosses arms)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-av-notes",
      title: "Adverbs and playscripts — notes",
      summary: "Adverbs describe verbs (-ly); viewpoint = whose eyes; playscript = names + lines + (directions).",
      sections: [
        { heading: "Adverbs", body: "How/when/where; strengthen verbs with -ly adverbs." },
        { heading: "Playscripts", body: "Speaker names + dialogue + bracketed stage directions." },
      ],
    },
  ],
};

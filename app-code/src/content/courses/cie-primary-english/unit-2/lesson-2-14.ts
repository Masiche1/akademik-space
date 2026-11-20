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
            { id: "a", text: "ran" }, { id: "b", text: "quickly" }, { id: "c", text: "home" }, { id: "d", text: "He" },
          ], correctChoiceId: "b" },
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

import type { Lesson } from "../../../types.ts";

export const lesson218: Lesson = {
  id: "cipe-u2-lesson-2-18",
  code: "2-18",
  title: "Stage 5 — Speaking, Listening and Discussion",
  goal: "I CAN contribute to discussions, take different roles, respond to viewpoints and evaluate talk.",
  standards: ["Cambridge Primary English 0058 Stage 5: speaking and listening",
  "Cambridge Primary English 0058 framework substrands: 5SLm, 5SLs, 5SLg, 5SLp, 5SLr"],
  stage: 5,
  vocabulary: [
    { term: "Discussion", definition: "A structured talk where participants share and respond to ideas." },
    { term: "Viewpoint", definition: "Someone's opinion or perspective on an issue." },
    { term: "Role", definition: "A job someone takes in group work, e.g. chair, note-taker." },
    { term: "Register", definition: "The level of formality in language for a given audience." },
    { term: "Refine", definition: "Improve ideas through questioning and discussion." },
    { term: "Self-evaluation", definition: "Judging your own speaking or listening performance." },
  ],
  concepts: [
    {
      id: "cipe-u2-s18-discussion",
      title: "Discussion skills, roles and evaluation",
      skill: "Manage and contribute to group discussion, consider other viewpoints and evaluate performance at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Group work and discussion",
            body: "Take assigned roles (chair, note-taker, timekeeper) or offer to. Show consideration of other viewpoints — 'I see your point, but…' — rather than just asserting your own. Extend discussion by asking questions that refine ideas: 'What evidence supports that?' Take turns and build on what others say.",
          },
          {
            heading: "Making yourself understood and evaluating",
            body: "Adapt language to audience and purpose — formal register for a presentation, casual for friends. Structure information so listeners can follow. Afterwards evaluate: did everyone contribute? Were ideas refined? What would improve next time?",
          },
        ],
        keyFormulas: [
          { name: "Discussion", statement: "roles + turn-taking + building + refining questions" },
          { name: "Register", statement: "match formality to audience and purpose" },
        ],
        workedExample: {
          problem: "In a discussion about whether school days should be shorter, how do you show consideration of another viewpoint?",
          solution: "'I understand why shorter days would help some students concentrate, but I worry we would cover less work. Could we try it for one term and compare results?' — acknowledges, adds own view, proposes refining evidence.",
        },
      },
      questions: [
        {
          id: "cipe-u2-sl5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'taking turns' mean in a group discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Waiting for your chance to speak" }, { id: "b", text: "Speaking the loudest" }, { id: "c", text: "Interrupting politely" }, { id: "d", text: "Writing notes only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Turn-taking", statement: "Each person gets a chance to speak." }],
            steps: [{ reasoning: "Turn-taking = fair sharing of speaking time.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Waiting for your chance to speak",
          },
        },
        {
          id: "cipe-u2-sl5-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two roles someone might take in a group discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Roles", statement: "Assigned jobs in group work." }],
            steps: [
              { reasoning: "e.g. chair/person who leads.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. note-taker or timekeeper.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. chair, note-taker, timekeeper",
          },
        },
        {
          id: "cipe-u2-sl5-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A classmate says 'Video games are a waste of time.' Write a response that shows consideration of their viewpoint and extends the discussion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Consideration", statement: "Acknowledge viewpoint, then build." }],
            steps: [
              { reasoning: "Acknowledges the viewpoint without dismissing.", marks: 1, markCode: "AO2" },
              { reasoning: "Adds own perspective or refining question.", marks: 1, markCode: "AO2" },
              { reasoning: "Full sentence response.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'I see why you'd say that for some games, but some teach problem-solving — do you think all games are the same?'",
          },
        },
        {
          id: "cipe-u2-sl5-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Your group must present an argument for and against school uniforms. (a) Describe two ways to structure your contribution so listeners can follow. (b) Explain how you would show consideration of the opposing viewpoint. (c) Give an example question that would refine the discussion. (d) Describe how you would adapt your language when presenting to the head teacher vs your friends. (e) Write two sentences evaluating the discussion afterwards.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion and presentation", statement: "Structure, consideration, refining, register, evaluation." }],
            steps: [
              { reasoning: "(a) Two valid structures (signposting, for/against order, summary).", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Acknowledge opposing view before countering.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Refining question example.", marks: 1, markCode: "AO2" },
              { reasoning: "(d) Formal vs informal register described.", marks: 1, markCode: "AO3" },
              { reasoning: "(e) Two evaluative sentences.", marks: 2, markCode: "AO3" },
              { reasoning: "All parts covered with relevant detail.", marks: 1, markCode: "AO3" },
              { reasoning: "Accurate discussion vocabulary.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Structured talk, consideration, refining questions, register adaptation, self-evaluation.",
            levels: [
              { level: "3", marks: "7-8", descriptor: "All parts covered with precise, audience-aware detail." },
              { level: "2", marks: "4-6", descriptor: "Most parts covered; some detail; evaluation present." },
              { level: "1", marks: "1-3", descriptor: "Limited coverage; few valid points." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-sl5-notes",
      title: "Discussion — notes",
      summary: "Roles + turn-taking + consideration of viewpoints + refining questions + register + evaluation.",
      sections: [
        { heading: "Discussion", body: "Build on others' ideas; ask questions that refine rather than just assert." },
        { heading: "Register", body: "Formal for presentations, casual for friends — adapt to purpose." },
      ],
    },
  ],
};

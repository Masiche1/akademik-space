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
            { id: "a", text: "Speaking the loudest" },
            { id: "b", text: "Writing notes only" },
            { id: "c", text: "Waiting for your chance to speak" },
            { id: "d", text: "Interrupting politely" },
          ], correctChoiceId: "c" },
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
        {
          id: "cipe-u2-sl5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'role' in group discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of pen" },
            { id: "b", text: "A job someone takes, like chair or note-taker" },
            { id: "c", text: "A costume" },
            { id: "d", text: "A speaking voice" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Role", statement: "Assigned job in group work." }],
            steps: [{ reasoning: "Roles are jobs like chair, note-taker, timekeeper.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A job in group work",
          },
        },
        {
          id: "cipe-u2-sl5-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'register' in speaking?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Your handwriting" },
            { id: "b", text: "The level of formality in your language" },
            { id: "c", text: "The topic" },
            { id: "d", text: "The volume of your voice" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Register", statement: "Level of formality for an audience." }],
            steps: [{ reasoning: "Register = formal vs informal language.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The level of formality",
          },
        },
        {
          id: "cipe-u2-sl5-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many roles could a group assign: chair, note-taker, timekeeper? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Roles", statement: "Jobs in group work." }],
            steps: [
              { reasoning: "Three roles listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-sl5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the BEST way to disagree politely in a discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'I see your point, but I think…'" },
            { id: "b", text: "'Shut up.'" },
            { id: "c", text: "'That's wrong.'" },
            { id: "d", text: "Say nothing and leave" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Consideration", statement: "Acknowledge then counter." }],
            steps: [{ reasoning: "Acknowledging first shows respect.", marks: 1, markCode: "AO2" }],
            finalAnswer: "'I see your point, but I think…'",
          },
        },
        {
          id: "cipe-u2-sl5-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What kind of question helps 'refine' an idea in discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'Is it lunch yet?'" },
            { id: "b", text: "'What do you think?'" },
            { id: "c", text: "'What evidence supports that?'" },
            { id: "d", text: "'Who is next?'" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Refining questions", statement: "Questions that improve ideas." }],
            steps: [{ reasoning: "Asking for evidence deepens and tests ideas.", marks: 1, markCode: "AO2" }],
            finalAnswer: "'What evidence supports that?'",
          },
        },
        {
          id: "cipe-u2-sl5-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How would you adapt your language when speaking to the head teacher versus your friends? Give one difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Register", statement: "Match formality to audience." }],
            steps: [
              { reasoning: "More formal/polite with the head teacher.", marks: 1, markCode: "AO2" },
              { reasoning: "More casual with friends.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'formal words with head teacher, slang with friends'",
          },
        },
        {
          id: "cipe-u2-sl5-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one sentence that acknowledges someone else's viewpoint before giving your own in a discussion about homework.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Consideration", statement: "Acknowledge then add own view." }],
            steps: [
              { reasoning: "The other viewpoint is acknowledged.", marks: 1, markCode: "AO2" },
              { reasoning: "Own view is added politely.", marks: 1, markCode: "AO2" },
              { reasoning: "Full, polite sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I understand homework helps some students, but I think less frequent homework would be fairer.'",
          },
        },
        {
          id: "cipe-u2-sl5-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many things should a good discussion evaluation cover: contribution, listening, ideas refined? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Self-evaluation", statement: "Judge your own discussion." }],
            steps: [
              { reasoning: "Three areas listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-sl5-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the purpose of the 'chair' role in a group discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To write the report" },
            { id: "b", text: "To guide the discussion and keep it on track" },
            { id: "c", text: "To take the minutes only" },
            { id: "d", text: "To do all the talking" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Roles", statement: "Chair leads the discussion." }],
            steps: [{ reasoning: "The chair keeps the discussion organised and on topic.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To guide the discussion and keep it on track",
          },
        },
        {
          id: "cipe-u2-sl5-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences evaluating a group discussion your class had: one thing that went well and one thing that could improve.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Self-evaluation", statement: "Honest assessment of discussion." }],
            steps: [
              { reasoning: "A positive aspect is identified.", marks: 1, markCode: "AO3" },
              { reasoning: "An improvement is identified.", marks: 1, markCode: "AO3" },
              { reasoning: "Both are specific to the discussion.", marks: 1, markCode: "AO2" },
              { reasoning: "Two complete sentences.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Everyone took turns and ideas were shared. Next time we should ask more questions to test the ideas.'",
          },
        },
        {
          id: "cipe-u2-sl5-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan your contribution to a discussion on 'Should homework be abolished?': state your view, give one reason, and prepare one refining question.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discussion planning", statement: "View + reason + refining question." }],
            steps: [
              { reasoning: "A clear view is stated.", marks: 1, markCode: "AO3" },
              { reasoning: "A reason supports the view.", marks: 1, markCode: "AO3" },
              { reasoning: "A refining question is prepared.", marks: 1, markCode: "AO3" },
              { reasoning: "All three parts are relevant.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. View: homework should be reduced; Reason: students need rest; Question: 'What evidence shows homework improves results?'",
          },
        },
        {
          id: "cipe-u2-sl5-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short script of a discussion opening: a chair welcomes the group, states the topic and asks for the first viewpoint.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chairing discussion", statement: "Welcome, topic, invite views." }],
            steps: [
              { reasoning: "The chair welcomes the group.", marks: 1, markCode: "AO2" },
              { reasoning: "The topic is stated clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "A question invites the first viewpoint.", marks: 1, markCode: "AO2" },
              { reasoning: "Three complete, ordered sentences.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Welcome everyone. Today we discuss school uniforms. Who would like to share their first view?'",
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

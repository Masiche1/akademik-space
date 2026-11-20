import type { Lesson } from "../../../types.ts";

export const lesson219: Lesson = {
  id: "cipe-u2-lesson-2-19",
  code: "2-19",
  title: "Stage 6 — Speaking, Listening and Evaluation",
  goal: "I CAN lead and contribute to formal discussion, evaluate performances critically and adapt talk for purpose.",
  standards: ["Cambridge Primary English 0058 Stage 6: speaking and listening",
  "Cambridge Primary English 0058 framework substrands: 6SLm, 6SLs, 6SLp"],
  stage: 6,
  vocabulary: [
    { term: "Chair", definition: "The person who leads a meeting or discussion." },
    { term: "Critical evaluation", definition: "Judging strengths and weaknesses with reasons." },
    { term: "Register", definition: "Level of formality matched to audience and purpose." },
    { term: "Presentation", definition: "A structured talk delivered to an audience." },
    { term: "Consensus", definition: "General agreement reached through discussion." },
    { term: "Rhetorical device", definition: "A technique used to persuade, e.g. rhetorical question." },
  ],
  concepts: [
    {
      id: "cipe-u2-s19-formal-talk",
      title: "Formal discussion, performance and critical evaluation",
      skill: "Lead discussions, evaluate talk and performance, and adapt language for formal contexts at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Formal discussion and presentation",
            body: "In formal discussion, the chair keeps order, ensures everyone contributes and moves toward consensus. Speakers structure arguments, use evidence and adapt register — precise vocabulary for formal audiences, rhetorical questions for persuasion. Listen critically: evaluate the reasoning, not just the delivery.",
          },
          {
            heading: "Evaluation of performance",
            body: "Evaluate performances (presentations, drama, debates) against criteria: clarity, structure, use of evidence, audience awareness and persuasiveness. Give specific, reasoned feedback — 'the argument was clear but the evidence in paragraph 2 was vague' — not vague praise.",
          },
        ],
        keyFormulas: [
          { name: "Formal talk", statement: "structure + evidence + register + audience awareness" },
          { name: "Evaluation", statement: "criterion → observation → reasoned judgement" },
        ],
        workedExample: {
          problem: "A classmate presents an argument for longer lunch breaks. Evaluate their performance.",
          solution: "Strengths: clear structure, confident delivery, relevant example. Weakness: claims lacked evidence — 'students are hungry' needed data. Suggestion: add a statistic or quote. Overall: persuasive but could be more rigorous.",
        },
      },
      questions: [
        {
          id: "cipe-u2-sl6-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of a chair in a formal discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lead the discussion and keep order" }, { id: "b", text: "Only listen silently" }, { id: "c", text: "Write the final essay" }, { id: "d", text: "Decide the topic alone" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chair", statement: "Leads and manages discussion." }],
            steps: [{ reasoning: "Chair keeps order and guides the discussion.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Lead the discussion and keep order",
          },
        },
        {
          id: "cipe-u2-sl6-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two features of a well-structured formal presentation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Presentation structure", statement: "Organised, purposeful talk." }],
            steps: [
              { reasoning: "e.g. clear introduction of the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. logical order of points and a conclusion.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. introduction, logical order, conclusion",
          },
        },
        {
          id: "cipe-u2-sl6-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a critical evaluation of this claim made in a debate: 'Homework should be banned because students are tired.' Identify one strength and one weakness with reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Critical evaluation", statement: "Strength + weakness with reasons." }],
            steps: [
              { reasoning: "Strength: identifies a real concern (student wellbeing).", marks: 1, markCode: "AO3" },
              { reasoning: "Weakness: 'students are tired' is unsupported — needs evidence; also ignores benefits.", marks: 1, markCode: "AO3" },
              { reasoning: "Evaluation phrased as reasoned judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strength: valid concern; weakness: unsupported claim",
          },
        },
        {
          id: "cipe-u2-sl6-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "You are chairing a class debate on 'Should homework be abolished?' (a) Describe how you would open the debate. (b) Explain how you would ensure balanced contribution. (c) Give an example of a refining question you would ask. (d) Describe how the closing summary should be structured. (e) Write a brief critical evaluation of a speaker who said 'Homework is pointless because I dislike it.' (f) How would you adapt your language for a formal audience vs friends?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal discussion skills", statement: "Chairing, balancing, refining, summarising, evaluating, register." }],
            steps: [
              { reasoning: "(a) States topic, rules, invites opening statements.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Ensures both sides and quiet members contribute.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Refining question example.", marks: 1, markCode: "AO2" },
              { reasoning: "(d) Closing summary: key points each side + any consensus.", marks: 1, markCode: "AO3" },
              { reasoning: "(e) Evaluation: personal opinion ≠ argument; lacks evidence.", marks: 1, markCode: "AO3" },
              { reasoning: "(f) Formal vs informal register described.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts addressed with detail.", marks: 1, markCode: "AO3" },
              { reasoning: "Accurate formal-discussion vocabulary.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Chairing, balancing, refining, summary, critical evaluation, register adaptation.",
            levels: [
              { level: "3", marks: "7-8", descriptor: "All parts covered with precise, formal-register detail and reasoned evaluation." },
              { level: "2", marks: "4-6", descriptor: "Most parts covered; evaluation present but limited." },
              { level: "1", marks: "1-3", descriptor: "Limited coverage; few valid points." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-sl6-notes",
      title: "Formal talk — notes",
      summary: "Chair guides discussion to consensus. Evaluate performances against criteria. Match register to audience.",
      sections: [
        { heading: "Chairing", body: "Set rules, balance speakers, ask refining questions, summarise points." },
        { heading: "Evaluation", body: "Criterion → observation → reasoned judgement; be specific, not vague." },
      ],
    },
  ],
};

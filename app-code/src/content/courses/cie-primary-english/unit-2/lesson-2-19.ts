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
            { id: "a", text: "Decide the topic alone" },
            { id: "b", text: "Lead the discussion and keep order" },
            { id: "c", text: "Write the final essay" },
            { id: "d", text: "Only listen silently" },
          ], correctChoiceId: "b" },
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
        {
          id: "cipe-u2-sl6-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'consensus' mean in a discussion?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A vote to end early" },
            { id: "b", text: "Silence" },
            { id: "c", text: "General agreement reached through discussion" },
            { id: "d", text: "A disagreement" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Consensus", statement: "General agreement from discussion." }],
            steps: [{ reasoning: "Consensus = most people agree after talking it through.", marks: 1, markCode: "AO1" }],
            finalAnswer: "General agreement reached through discussion",
          },
        },
        {
          id: "cipe-u2-sl6-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'critical evaluation' of a performance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Saying it was great" },
            { id: "b", text: "Counting the audience" },
            { id: "c", text: "Clapping loudly" },
            { id: "d", text: "Judging strengths and weaknesses with reasons" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Critical evaluation", statement: "Strengths + weaknesses + reasons." }],
            steps: [{ reasoning: "Critical evaluation is reasoned judgement, not just praise.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Judging strengths and weaknesses with reasons",
          },
        },
        {
          id: "cipe-u2-sl6-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many criteria are used to evaluate a presentation: clarity, structure, evidence, audience awareness? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation criteria", statement: "Clarity, structure, evidence, audience awareness." }],
            steps: [
              { reasoning: "Four criteria listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipe-u2-sl6-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'rhetorical question' used for in a debate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To get the audience to think, not to be answered" },
            { id: "b", text: "To spell a word" },
            { id: "c", text: "To ask for homework" },
            { id: "d", text: "To end the debate" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical question", statement: "Persuasive device; not answered." }],
            steps: [{ reasoning: "A rhetorical question is posed for effect, not an answer.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To make the audience think",
          },
        },
        {
          id: "cipe-u2-sl6-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A speaker says 'Homework is pointless because I dislike it.' What is the main weakness?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The topic was wrong" },
            { id: "b", text: "The voice was too quiet" },
            { id: "c", text: "There was no weakness" },
            { id: "d", text: "Personal opinion is presented as an argument, with no evidence" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Critical evaluation", statement: "Evidence needed for arguments." }],
            steps: [{ reasoning: "Dislike is a feeling, not a reasoned argument.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Personal opinion without evidence",
          },
        },
        {
          id: "cipe-u2-sl6-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How would you adapt your language for a formal debate versus a chat with friends? Give one difference.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Register", statement: "Formal vs informal language." }],
            steps: [
              { reasoning: "More precise/polite vocabulary in formal debate.", marks: 1, markCode: "AO2" },
              { reasoning: "More casual/slang with friends.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'formal words and full sentences vs slang and short phrases'",
          },
        },
        {
          id: "cipe-u2-sl6-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one sentence of critical feedback for a presentation that had a good introduction but weak evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Feedback", statement: "Specific strength + weakness." }],
            steps: [
              { reasoning: "Strength identified (introduction).", marks: 1, markCode: "AO3" },
              { reasoning: "Weakness identified (weak evidence).", marks: 1, markCode: "AO3" },
              { reasoning: "Feedback is specific and constructive.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Your introduction was clear, but your main argument lacked evidence to support it.'",
          },
        },
        {
          id: "cipe-u2-sl6-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many parts should a chair's closing summary include: key points for each side and any consensus? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Summarising", statement: "Points for + points against + consensus." }],
            steps: [
              { reasoning: "Three parts listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-sl6-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is 'vague praise' like 'it was good' weak evaluation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is too long" },
            { id: "b", text: "It is always wrong" },
            { id: "c", text: "It gives no reasons or specific observations" },
            { id: "d", text: "It uses too many words" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation quality", statement: "Specific reasons needed." }],
            steps: [{ reasoning: "Good evaluation names criteria and gives reasons.", marks: 1, markCode: "AO3" }],
            finalAnswer: "It lacks reasons and specifics",
          },
        },
        {
          id: "cipe-u2-sl6-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a three-sentence evaluation of a class debate: one strength of the debate format, one weakness observed, and one suggestion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Criterion → observation → judgement." }],
            steps: [
              { reasoning: "A strength of the debate is identified.", marks: 1, markCode: "AO3" },
              { reasoning: "A weakness is identified.", marks: 1, markCode: "AO3" },
              { reasoning: "A suggestion for improvement is made.", marks: 1, markCode: "AO3" },
              { reasoning: "Three complete, reasoned sentences.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The debate gave everyone a voice. Some speakers repeated points. Next time we should set a time limit per speaker.'",
          },
        },
        {
          id: "cipe-u2-sl6-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "As chair of a debate on 'School uniforms', write your opening: welcome the group, state the topic, give the rules and invite the first viewpoint.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chairing", statement: "Welcome, topic, rules, invite views." }],
            steps: [
              { reasoning: "Welcome and topic stated.", marks: 1, markCode: "AO2" },
              { reasoning: "Rules given (turn-taking, respect).", marks: 1, markCode: "AO2" },
              { reasoning: "First viewpoint invited.", marks: 1, markCode: "AO2" },
              { reasoning: "Four ordered, formal sentences.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Welcome everyone. Today we debate school uniforms. Please take turns and listen respectfully. Who would like to open for the 'for' side?'",
          },
        },
        {
          id: "cipe-u2-sl6-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short debate point for 'Should schools start later?' Include a claim and one piece of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debate argument", statement: "Claim + evidence." }],
            steps: [
              { reasoning: "A clear claim is stated.", marks: 1, markCode: "AO3" },
              { reasoning: "Evidence supports the claim.", marks: 1, markCode: "AO3" },
              { reasoning: "Evidence is relevant and plausible.", marks: 1, markCode: "AO4" },
              { reasoning: "Two sentences, formal register.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Schools should start later because teenagers' body clocks shift in puberty, meaning early starts reduce alertness.'",
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

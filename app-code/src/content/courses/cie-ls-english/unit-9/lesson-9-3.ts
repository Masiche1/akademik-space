import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cile-u9-lesson-9-3",
  code: "9-3",
  title: "Integrated skills: reading, writing, speaking and listening together",
  goal: "I CAN use all four language skills together to analyse texts, respond appropriately and communicate effectively.",
  standards: ["0861 Integrated skills: reading, writing, speaking, listening"],
  vocabulary: [
    { term: "Integrated skills", definition: "Using reading, writing, speaking and listening together in real tasks." },
    { term: "Source use", definition: "Incorporating information from texts or speakers into your own response." },
    { term: "Paraphrase", definition: "Restating ideas in your own words — not copying." },
    { term: "Context", definition: "The situation, audience and purpose surrounding communication." },
    { term: "Register matching", definition: "Adjusting language to suit the channel — spoken vs written, formal vs informal." },
    { term: "Response", definition: "A considered reaction to a text or speaker — agreement, disagreement, extension." },
  ],
  concepts: [
    {
      id: "cile-u9-integrated-tasks",
      title: "Integrating the four skills",
      skill: "Combine reading, writing, speaking and listening in realistic tasks — analyse, respond, adapt.",
      lesson: {
        sections: [
          {
            heading: "How skills combine",
            body: "- **Read + write**: analyse a text, then write about it.\n- **Listen + write**: take notes from a speaker, then write a summary.\n- **Speak + listen**: discuss a topic, respond to others' points.\n- **Read + speak**: present your analysis of a text.\n\nReal communication almost always combines skills.",
          },
          {
            heading: "Adapting to context",
            body: "The same content requires different language depending on context:\n\n- **Formal report** vs **casual email** vs **spoken discussion** — same information, different register.\n\nAlways ask: Who is the audience? What is the purpose? What is the channel?",
          },
          {
            heading: "Using sources",
            body: "When responding to a text or speaker:\n\n- **Reference accurately**: 'The speaker argued that...' not 'They said...'\n- **Paraphrase**: restate in your own words, not copy.\n- **Evaluate**: agree, disagree or extend — don't just repeat.",
          },
        ],
        keyFormulas: [
          { name: "Integration formula", statement: "Context (who/why/channel) → adapt register → use sources accurately → respond with evaluation." },
        ],
        workedExample: {
          problem: "Read a newspaper article about school uniforms, then write a paragraph responding to it.",
          solution: "Read → identify main arguments → write response: 'The article claims uniforms improve equality, but this ignores bullying through other markers. However, it makes a valid point about reducing clothing competition.' — paraphrases, evaluates, extends.",
        },
      },
      questions: [
        {
          id: "cile-u9-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'register matching'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using the same language everywhere" },
              { id: "b", text: "Adjusting language to suit audience, purpose and channel" },
              { id: "c", text: "Memorising formal phrases" },
              { id: "d", text: "Speaking loudly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register matching", statement: "Adapting formality to context — audience, purpose, channel." },
            ],
            steps: [
              { reasoning: "Register = level of formality appropriate to context.", working: "\\text{formality}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Adjusting language to suit audience, purpose and channel",
            commonErrors: ["Choosing (a) — the opposite of register matching."],
          },
        },
        {
          id: "cile-u9-int-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you paraphrase rather than copy when responding to a text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paraphrasing", statement: "Shows understanding and avoids plagiarism — restate in your own words." },
            ],
            steps: [
              { reasoning: "Copying shows no understanding and risks plagiarism.", working: "\\text{understanding}", marks: 1, markCode: "AO2" },
              { reasoning: "Paraphrasing demonstrates comprehension and integrates the source into your own argument.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Paraphrasing shows you understand the source and avoids plagiarism — copying demonstrates neither comprehension nor original thinking.",
            commonErrors: ["Saying 'it is against the rules' — the issue is demonstrating understanding."],
          },
        },
        {
          id: "cile-u9-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You read an article arguing 'Social media is harmful to teenagers' and must write a response. Outline how you would integrate reading and writing skills.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Skill integration", statement: "Read for understanding → evaluate → write response with your own position." },
            ],
            steps: [
              { reasoning: "Reading: identify main argument and supporting evidence.", working: "\\text{analyze}", marks: 1, markCode: "AO2" },
              { reasoning: "Evaluate: agree/disagree with evidence — don't just repeat.", working: "\\text{evaluate}", marks: 1, markCode: "AO2" },
              { reasoning: "Write: structure response — acknowledge, counter, extend.", working: "\\text{structure}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: integrated response showing comprehension and original thought.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read to identify argument and evidence → evaluate with your own view → write structured response: 'The article claims X, but evidence suggests Y. However, it is true that...' — paraphrase, evaluate, extend.",
            commonErrors: ["Just summarising the article — a response must add your own evaluation."],
          },
        },
        {
          id: "cile-u9-int-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You have listened to a speaker present arguments on a topic and must respond.",
          parts: [
            { label: "a", prompt: "Summarise the speaker's main argument in two sentences.", marks: 2 },
            { label: "b", prompt: "Identify one point you agree with and explain why.", marks: 2 },
            { label: "c", prompt: "Identify one point you disagree with and refute it.", marks: 3 },
            { label: "d", prompt: "Explain how you used listening skills to prepare your response.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening-to-response", statement: "Summarise → evaluate → refute = informed response." },
            ],
            steps: [
              { part: "a", reasoning: "Summary is accurate and concise.", working: "\\text{summary}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Captures main argument.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Agreement point relevant.", working: "\\text{agree}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Explanation is clear.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Disagreement point identified.", working: "\\text{disagree}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Refutation is logical.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Counter-evidence or reasoning given.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Listening skills identified.", working: "\\text{listening}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Links to response quality.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) accurate summary (b) agreement + explanation (c) disagreement + refutation (d) listening skills explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Accurate summary.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Inaccurate.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Agreement explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Logical refutation.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Listening skills explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (c) disagreeing without evidence — refutation needs reasoning."],
          },
        },
      ],
    },
    {
      id: "cile-u9-exam-skills",
      title: "Exam and assessment skills",
      skill: "Apply integrated skills under exam conditions — time management, question analysis and structured responses.",
      lesson: {
        sections: [
          {
            heading: "Before the exam",
            body: "- **Know the format**: question types, timing, mark allocations.\n- **Practise timed writing**: simulate exam conditions.\n- **Review techniques**: note-taking, paragraphing, register.\n- **Prepare vocabulary**: key terms for analysis and discussion.",
          },
          {
            heading: "During the exam",
            body: "- **Read questions carefully**: underline key words — 'analyse', 'evaluate', 'compare'.\n- **Plan before writing**: 2 minutes planning saves 10 minutes rewriting.\n- **Manage time**: allocate per question based on marks.\n- **Check work**: leave 5 minutes to review.",
          },
          {
            heading: "Question analysis",
            body: "- **Command words**: 'describe' = what; 'explain' = why/how; 'analyse' = break down; 'evaluate' = judge.\n- **Mark allocation**: more marks = more detail expected.\n- **Source questions**: use the text provided — quote or paraphrase accurately.",
          },
        ],
        keyFormulas: [
          { name: "Exam strategy", statement: "Plan time → analyse question → structure answer → check work = exam success." },
        ],
        workedExample: {
          problem: "Question: 'Analyse how the writer creates tension in the opening paragraph.' (6 marks)",
          solution: "Analyse = break down techniques. Plan: identify 2-3 techniques (short sentences, pathetic fallacy, foreshadowing) → explain effect of each → link to tension. Allocate ~1 mark per technique identified + explanation.",
        },
      },
      questions: [
        {
          id: "cile-u9-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'analyse' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Describe what happens" },
              { id: "b", text: "Break down and examine how/why" },
              { id: "c", text: "Give your opinion" },
              { id: "d", text: "List facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Analyse", statement: "Break down into parts and examine relationships/effects." },
            ],
            steps: [
              { reasoning: "Analyse = examine components and how they work together.", working: "\\text{break down}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Break down and examine how/why",
            commonErrors: ["Choosing (a) — 'describe' is different from 'analyse'."],
          },
        },
        {
          id: "cile-u9-exam-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is planning before writing important in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Exam planning", statement: "2 minutes planning prevents rambling and ensures all parts are covered." },
            ],
            steps: [
              { reasoning: "Planning ensures you answer all parts of the question.", working: "\\text{coverage}", marks: 1, markCode: "AO2" },
              { reasoning: "Planning structures your answer — saves time and improves coherence.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Planning ensures complete coverage of all question parts and structures your answer logically — 2 minutes of planning saves time and prevents rambling.",
            commonErrors: ["Saying 'it wastes time' — planning saves time overall."],
          },
        },
        {
          id: "cile-u9-exam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A question asks 'Evaluate the effectiveness of the writer's argument' (8 marks). Outline your approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question strategy", statement: "Evaluate = judge effectiveness — need criteria and evidence." },
            ],
            steps: [
              { reasoning: "'Evaluate' requires judgement — is the argument effective?", working: "\\text{judge}", marks: 1, markCode: "AO2" },
              { reasoning: "Plan: identify argument's strengths and weaknesses with evidence.", marks: 1, markCode: "AO2" },
              { reasoning: "Use criteria: clarity, evidence, logical structure, audience awareness.", working: "\\text{criteria}", marks: 1, markCode: "AO2" },
              { reasoning: "Conclude with overall judgement — 'effective because...' or 'limited because...'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify the argument → assess against criteria (clarity, evidence, structure, audience) → judge effectiveness with evidence → conclude with overall verdict.",
            commonErrors: ["Just describing the argument — 'evaluate' requires judgement."],
          },
        },
        {
          id: "cile-u9-exam-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are preparing for an English exam.",
          parts: [
            { label: "a", prompt: "List three command words and their meanings.", marks: 3 },
            { label: "b", prompt: "Explain how mark allocation guides your answer length.", marks: 2 },
            { label: "c", prompt: "Describe your time management strategy for a 60-minute exam.", marks: 2 },
            { label: "d", prompt: "Explain why checking your work matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam preparation", statement: "Command words + mark awareness + time management + checking = exam readiness." },
            ],
            steps: [
              { part: "a", reasoning: "Three command words with accurate meanings.", working: "\\text{commands}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Meanings are precise.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Mark allocation linked to detail level.", working: "\\text{marks}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Explanation is clear.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Time strategy is realistic and specific.", working: "\\text{time}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Includes buffer time.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Checking benefits explained.", working: "\\text{check}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Specific errors mentioned.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) three command words + meanings (b) marks→detail explained (c) realistic time strategy (d) checking benefits",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Command words accurate.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Mark allocation explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Realistic time strategy.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Checking explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (c) allocating equal time to all questions regardless of marks."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u9-integrated-notes",
      title: "Integrated skills and exam strategy — revision notes",
      summary: "Combining the four skills, register matching, source use and exam technique.",
      sections: [
        {
          heading: "Integration",
          body: "Read+write, listen+write, speak+listen, read+speak — real tasks combine skills. Adapt register to audience/purpose/channel. Paraphrase sources; evaluate, don't just repeat.",
        },
        {
          heading: "Exam strategy",
          body: "Know command words (analyse, evaluate, describe). Plan before writing. Allocate time by marks. Check work. Read questions carefully — underline key words.",
        },
      ],
    },
  ],
};

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
              { id: "a", text: "Speaking loudly" },
              { id: "b", text: "Using the same language everywhere" },
              { id: "c", text: "Memorising formal phrases" },
              { id: "d", text: "Adjusting language to suit audience, purpose and channel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register matching", statement: "Adapting formality to context — audience, purpose, channel." },
            ],
            steps: [
              { reasoning: "Register = level of formality appropriate to context.", working: "\\text{formality}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Adjusting language to suit audience, purpose and channel",
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
        {
          id: "cile-u9-int-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'paraphrasing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising only the first sentence" },
              { id: "b", text: "Copying the source word-for-word" },
              { id: "c", text: "Restating an idea in your own words" },
              { id: "d", text: "Translating into another language" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paraphrase", statement: "Restate ideas in your own words — not copying." },
            ],
            steps: [
              { reasoning: "Paraphrasing keeps the meaning but changes the wording.", working: "\\text{own words}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Restating an idea in your own words",
            commonErrors: ["Choosing (a) — copying is the opposite of paraphrasing."],
          },
        },
        {
          id: "cile-u9-int-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What changes most when you adapt the same information for a casual email versus a formal report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The topic" },
              { id: "b", text: "Nothing — the words stay identical" },
              { id: "c", text: "The facts themselves" },
              { id: "d", text: "The register — level of formality" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register", statement: "Same content, different formality to suit audience and channel." },
            ],
            steps: [
              { reasoning: "Context changes the register — informal for email, formal for report.", working: "\\text{register}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** The register — level of formality",
            commonErrors: ["Choosing (d) — identical wording fails to adapt to context."],
          },
        },
        {
          id: "cile-u9-int-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'source use' mean in integrated tasks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring what the text says" },
              { id: "b", text: "Finding the cheapest books" },
              { id: "c", text: "Writing without any reference" },
              { id: "d", text: "Incorporating information from texts or speakers into your response" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Source use", statement: "Using information from texts or speakers accurately in your own response." },
            ],
            steps: [
              { reasoning: "Source use means referencing and building on given material.", working: "\\text{reference}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Incorporating information from texts or speakers into your response",
            commonErrors: ["Choosing (d) — integrated tasks require using the source."],
          },
        },
        {
          id: "cile-u9-int-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which approach best 'evaluates' a text you have read?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying the text's best sentence" },
              { id: "b", text: "Repeating the text's main points" },
              { id: "c", text: "Counting the paragraphs" },
              { id: "d", text: "Agreeing, disagreeing or extending with reasons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Judge the text — agree, disagree or extend, don't just repeat." },
            ],
            steps: [
              { reasoning: "Evaluation adds your own judgement to the source material.", working: "\\text{judge}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** Agreeing, disagreeing or extending with reasons",
            commonErrors: ["Choosing (a) — summarising is not evaluating."],
          },
        },
        {
          id: "cile-u9-int-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is 'The speaker argued that uniforms reduce bullying' better than 'They said uniforms reduce bullying'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It attributes the claim precisely to the speaker and frames it as an argument" },
              { id: "b", text: "It uses bigger words" },
              { id: "c", text: "It is shorter" },
              { id: "d", text: "There is no difference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Accurate referencing", statement: "Name the source and the speech act — argued, claimed, suggested." },
            ],
            steps: [
              { reasoning: "Precise attribution shows accurate listening/reading and analytical awareness.", working: "\\text{attribute}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** It attributes the claim precisely to the speaker and frames it as an argument",
            commonErrors: ["Choosing (d) — attribution quality matters in assessment."],
          },
        },
        {
          id: "cile-u9-int-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A written response task allows 150 words. Your summary takes 40 words. How many words remain for your evaluation and extension?",
          response: {
            type: "numeric",
            parts: [{ label: "remaining", answer: 110, unit: "words" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word budget", statement: "Remaining words = limit minus words already used." },
            ],
            steps: [
              { reasoning: "Total limit = 150 words; summary = 40.", working: "150-40", marks: 1, markCode: "AO2" },
              { reasoning: "Remaining = 150 - 40 = 110 words.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "110 words",
            commonErrors: ["Answering 150 — forgetting the summary already used 40."],
          },
        },
        {
          id: "cile-u9-int-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Before writing a response, you should ask three context questions: who is the audience, what is the purpose, and what is the channel. Give: (a) the number of context questions; (b) if a 30-minute exam has 5 integrated tasks of equal length, the minutes per task.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 6, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context and timing", statement: "Audience, purpose, channel guide register; time divides by task count." },
            ],
            steps: [
              { part: "a", reasoning: "Three context questions: who, why, channel.", working: "\\text{3}", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "30 / 5 = 6 minutes per task.", working: "30 \\div 5 = 6", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3 (b) 6 minutes",
            commonErrors: ["Forgetting equal-length assumption or miscounting context questions."],
          },
        },
        {
          id: "cile-u9-int-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A response to a speaker's talk is worth 8 marks: summary 2, point of agreement 2, point of disagreement with refutation 3, and explanation of listening skills used 1. Give: (a) the marks for the disagreement and refutation; (b) the combined marks for the summary and the listening-skills explanation.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mark awareness", statement: "Refutation usually earns more than identification — allocate effort accordingly." },
            ],
            steps: [
              { part: "a", reasoning: "Disagreement plus refutation carries 3 marks.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Summary plus skills = 2 + 1 = 3 marks.", working: "2+1=3", marks: 1, markCode: "AO2" },
              { reasoning: "Check: 2+2+3+1 = 8 — matches the total.", working: "2+2+3+1=8", marks: 1, markCode: "AO3" },
              { reasoning: "Refutation's 3 marks signal it needs developed reasoning.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3 (b) 3",
            commonErrors: ["Giving equal effort to each part despite different mark weights."],
          },
        },
        {
          id: "cile-u9-int-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "You have 45 minutes to plan and write a response. You spend 10 minutes planning and 25 minutes writing. How many minutes remain for checking your work?",
          response: {
            type: "numeric",
            parts: [{ label: "checking", answer: 10, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Reserve time for checking — never plan to use every minute writing." },
            ],
            steps: [
              { reasoning: "Time used = 10 + 25 = 35 minutes.", working: "10+25=35", marks: 1, markCode: "AO2" },
              { reasoning: "Remaining = 45 - 35 = 10 minutes.", working: "45-35=10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "10 minutes",
            commonErrors: ["Answering 0 — forgetting to reserve checking time."],
          },
        },
        {
          id: "cile-u9-int-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'They said uniforms reduce bullying' is weaker than 'The speaker argued that uniforms reduce bullying'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Attribution", statement: "Precise source and speech-act verbs show accurate comprehension." },
            ],
            steps: [
              { reasoning: "'They' is vague — who? 'Said' is weak — argued shows it is a claim needing evaluation.", working: "\\text{precision}", marks: 1, markCode: "AO2" },
              { reasoning: "Accurate attribution demonstrates careful listening/reading and analytical control.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'They said' is vague and weak; naming the speaker and using 'argued' attributes the claim precisely and frames it for evaluation.",
            commonErrors: ["Saying only 'it sounds better' — explain the attribution difference."],
          },
        },
        {
          id: "cile-u9-int-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Paraphrase this claim and weave it into your own sentence: 'Social media is harmful to teenagers.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paraphrase", statement: "Keep meaning, change wording, integrate grammatically." },
            ],
            steps: [
              { reasoning: "Paraphrase keeps the meaning: social media has negative effects on teenagers.", working: "\\text{meaning kept}", marks: 1, markCode: "AO2" },
              { reasoning: "Different wording: 'adverse impact', 'can damage', 'negative effects'.", marks: 1, markCode: "AO2" },
              { reasoning: "Integrated into a full sentence, e.g. 'The article claims that social media can have adverse effects on teenagers.'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Any accurate restatement integrated grammatically, e.g. 'The article argues that social media can damage teenagers' wellbeing.'",
            commonErrors: ["Copying the original words or changing the meaning."],
          },
        },
        {
          id: "cile-u9-int-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A classmate copies three sentences directly from an article into their response essay. Explain two problems with this and how they should fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Source integrity", statement: "Copying shows no understanding and risks plagiarism." },
            ],
            steps: [
              { reasoning: "Problem 1: copying demonstrates no comprehension of the source.", working: "\\text{understanding}", marks: 1, markCode: "AO2" },
              { reasoning: "Problem 2: unacknowledged copying is plagiarism — academically unacceptable.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix 1: paraphrase in their own words to show understanding.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix 2: add their own evaluation — agree, disagree or extend.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Copying shows no understanding and risks plagiarism; fix by paraphrasing and adding original evaluation.",
            commonErrors: ["Only citing the plagiarism risk — comprehension is equally important."],
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
              { id: "a", text: "List facts" },
              { id: "b", text: "Give your opinion" },
              { id: "c", text: "Break down and examine how/why" },
              { id: "d", text: "Describe what happens" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Analyse", statement: "Break down into parts and examine relationships/effects." },
            ],
            steps: [
              { reasoning: "Analyse = examine components and how they work together.", working: "\\text{break down}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Break down and examine how/why",
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
        {
          id: "cile-u9-exam-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'evaluate' require you to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judge effectiveness or value using criteria and evidence" },
              { id: "b", text: "Describe the features in detail" },
              { id: "c", text: "List the main points" },
              { id: "d", text: "Compare two texts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluate", statement: "Judge — needs criteria, evidence and a conclusion." },
            ],
            steps: [
              { reasoning: "Evaluate demands judgement, not just description or listing.", working: "\\text{judge}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Judge effectiveness or value using criteria and evidence",
            commonErrors: ["Choosing (a) — 'describe' is a different command word."],
          },
        },
        {
          id: "cile-u9-exam-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you underline when you first read an exam question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every word equally" },
              { id: "b", text: "Nothing — just start writing" },
              { id: "c", text: "The question number" },
              { id: "d", text: "The command words and key content words" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Question analysis", statement: "Underline key words — 'analyse', 'evaluate', 'compare'." },
            ],
            steps: [
              { reasoning: "Key words reveal what the question demands.", working: "\\text{keywords}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** The command words and key content words",
            commonErrors: ["Choosing (d) — skipping analysis leads to answering the wrong question."],
          },
        },
        {
          id: "cile-u9-exam-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How much time should you typically spend planning before writing an exam answer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exactly 10 minutes for every question" },
              { id: "b", text: "Half the exam time" },
              { id: "c", text: "About 2 minutes" },
              { id: "d", text: "None — start writing immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Planning", statement: "A few minutes of planning prevents rambling and saves rewriting time." },
            ],
            steps: [
              { reasoning: "Brief planning (around 2 minutes) is the recommended balance.", working: "\\text{2 min}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** About 2 minutes",
            commonErrors: ["Choosing (a) — unplanned answers ramble and miss parts."],
          },
        },
        {
          id: "cile-u9-exam-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you reserve the last few minutes of an exam to check your work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To catch spelling, punctuation and unanswered parts" },
              { id: "b", text: "It is required by the rules" },
              { id: "c", text: "To add more words to every answer" },
              { id: "d", text: "Checking never helps" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Checking", statement: "Review catches errors and ensures completeness." },
            ],
            steps: [
              { reasoning: "Checking catches avoidable errors and missed question parts.", working: "\\text{review}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** To catch spelling, punctuation and unanswered parts",
            commonErrors: ["Choosing (d) — checking reliably improves marks."],
          },
        },
        {
          id: "cile-u9-exam-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The command word 'compare' requires you to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give similarities AND differences" },
              { id: "b", text: "Choose the better one" },
              { id: "c", text: "Describe one item in detail" },
              { id: "d", text: "List similarities only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compare", statement: "Identify both similarities and differences." },
            ],
            steps: [
              { reasoning: "Compare covers both likeness and difference.", working: "\\text{similar + different}", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** Give similarities AND differences",
            commonErrors: ["Choosing (a) — similarities alone is incomplete."],
          },
        },
        {
          id: "cile-u9-exam-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 60-minute exam has 6 questions. You reserve 5 minutes at the end for checking. How many minutes remain for answering the questions?",
          response: {
            type: "numeric",
            parts: [{ label: "answering", answer: 55, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Answering time = total minus reserved checking time." },
            ],
            steps: [
              { reasoning: "Total = 60 minutes; checking reserve = 5.", working: "60-5", marks: 1, markCode: "AO2" },
              { reasoning: "Remaining = 60 - 5 = 55 minutes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "55 minutes",
            commonErrors: ["Answering 60 — forgetting the 5-minute reserve."],
          },
        },
        {
          id: "cile-u9-exam-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "An exam paper has 6 questions each worth 4 marks. Give: (a) the total marks on the paper; (b) the marks for a question worth twice as much as one standard question.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mark totals", statement: "Total marks = questions x marks each; double = 2 x standard." },
            ],
            steps: [
              { part: "a", reasoning: "Total = 6 x 4 = 24 marks.", working: "6 \\times 4 = 24", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Double = 2 x 4 = 8 marks.", working: "2 \\times 4 = 8", marks: 1, markCode: "AO2" },
              { reasoning: "Check: 6 x 4 = 24 confirms the total.", working: "check", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 24 (b) 8",
            commonErrors: ["Answering part (b) as 4 — 'twice' means double."],
          },
        },
        {
          id: "cile-u9-exam-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 45-minute writing task is planned as: 5 minutes planning, 30 minutes writing, and the rest checking. Give: (a) the writing time in minutes; (b) the checking time as a percentage of the total, to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "minutes" },
              { label: "b", answer: 22.2, unit: "%", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time allocation", statement: "Reserve checking time; calculate percentages as part over whole times 100." },
            ],
            steps: [
              { part: "a", reasoning: "Writing time = 30 minutes.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Checking = 45 - 5 - 30 = 10 minutes.", working: "45-5-30=10", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Percentage = 10/45 x 100 = 22.2%.", working: "10/45 \\times 100 = 22.2", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) 30 minutes (b) 22.2%",
            commonErrors: ["Forgetting to convert the fraction to a percentage."],
          },
        },
        {
          id: "cile-u9-exam-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The exam-skills lesson lists four command words to prepare: describe, explain, analyse and evaluate. How many command-word meanings should a student learn?",
          response: {
            type: "numeric",
            parts: [{ label: "command words", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Command words", statement: "Knowing what each command word demands prevents misreading questions." },
            ],
            steps: [
              { reasoning: "Count: describe, explain, analyse, evaluate.", working: "\\text{4}", marks: 1, markCode: "AO1" },
              { reasoning: "There are 4 command words listed.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — missing one of the four."],
          },
        },
        {
          id: "cile-u9-exam-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'analyse' is a more demanding command word than 'describe'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Command words", statement: "Analyse = break down and examine how/why; describe = state features." },
            ],
            steps: [
              { reasoning: "Describe only requires stating what is present; analyse requires breaking it into parts and examining effects.", working: "\\text{deeper}", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse answers need technique + effect chains — more developed responses earn more marks.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Analyse demands breaking a text into techniques and explaining their effects; describe only asks what is there — so analyse needs deeper, more developed answers.",
            commonErrors: ["Saying analyse is 'harder' without explaining the difference in demand."],
          },
        },
        {
          id: "cile-u9-exam-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A question asks: 'Evaluate the writer's use of imagery' (6 marks). Outline your answer plan in three steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question strategy", statement: "Evaluate = identify techniques, judge effectiveness, conclude." },
            ],
            steps: [
              { reasoning: "Step 1: identify 2-3 examples of imagery in the text.", working: "\\text{identify}", marks: 1, markCode: "AO2" },
              { reasoning: "Step 2: judge each — effect on reader, mood, character.", marks: 1, markCode: "AO2" },
              { reasoning: "Step 3: conclude with an overall judgement of effectiveness.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify imagery examples → evaluate each effect → conclude with overall judgement of effectiveness.",
            commonErrors: ["Planning only to describe the images — evaluation needs judgement."],
          },
        },
        {
          id: "cile-u9-exam-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "With 8 minutes left in an exam, you have two questions unanswered. Describe a sensible strategy for using the remaining time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Prioritise: answer what you can fully, then check." },
            ],
            steps: [
              { reasoning: "Choose the question you can answer most completely first.", working: "\\text{prioritise}", marks: 1, markCode: "AO2" },
              { reasoning: "Allocate roughly 3 minutes per question, leaving 2 for a quick check.", marks: 1, markCode: "AO2" },
              { reasoning: "If a question is too long, write a brief structured answer rather than nothing.", marks: 1, markCode: "AO2" },
              { reasoning: "Use final minutes to check spelling and that all parts are attempted.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Prioritise the easier/shorter question, write brief but structured answers to both, and reserve 2 minutes to check — never leave blanks.",
            commonErrors: ["Starting the hardest question first and leaving both blank."],
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

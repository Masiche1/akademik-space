import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mla4-u1-lesson-1-3",
  code: "1-3",
  title: "Listening to Speeches and Presentations",
  goal: "I CAN follow a formal speech or presentation, identify the speaker's purpose, key points and persuasive techniques.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Speech", definition: "A formal talk given to an audience." },
    { term: "Audience", definition: "The people listening to a speech or presentation." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Emotive language", definition: "Words chosen to trigger emotion: 'children', 'future', 'hope'." },
    { term: "Call to action", definition: "The speaker's request for the audience to do something." },
  ],
  concepts: [
    {
      id: "mla4-u1-speeches",
      title: "Understanding speeches and presentations",
      skill: "Identify a speaker's purpose, structure, persuasive techniques and call to action.",
      lesson: {
        sections: [
          {
            heading: "Purpose of a speech",
            body: "Speeches have purposes: **inform** (give facts), **persuade** (change minds), **entertain** (amuse), **inspire** (motivate). Identify the purpose early — it shapes everything else. A persuasive speech uses arguments and emotional language; an informative speech uses facts and clear structure.",
          },
          {
            heading: "Persuasive techniques",
            body: "Speakers persuade using: **rhetorical questions** ('How can we ignore this?'), **emotive language** ('our children', 'our future'), **repetition** ('We must act. We must change. We must...'), **statistics** ('80% of students...'), and **appeals to values** ('We believe in fairness'). Recognising these helps you evaluate the speech, not just follow it.",
          },
          {
            heading: "Structure of a speech",
            body: "Most speeches follow: **opening** (hook the audience: story, question, surprising fact), **main points** (2-4 arguments with examples), **closing** (summary + call to action: 'So I urge you to...'). Listen for signposts: 'First', 'Another reason', 'In conclusion', 'So what can we do?'",
          },
        ],
        keyFormulas: [
          { name: "Speech structure", statement: "Hook → main points (arguments) → summary + call to action" },
          { name: "Persuasion tools", statement: "Rhetorical questions + emotive words + repetition + statistics" },
        ],
        workedExample: {
          problem: "Speaker says: 'Every day, children go hungry. Is that acceptable? We must act now.' What technique and purpose?",
          solution: "Rhetorical question + emotive language ('children go hungry') + call to action — persuasive speech aiming to motivate change.",
        },
      },
      questions: [
        {
          id: "mla4-u1-speeches-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rhetorical question'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question asked for effect, not expecting an answer" },
              { id: "b", text: "A difficult question" },
              { id: "c", text: "A question expecting a yes/no answer" },
              { id: "d", text: "A question in a textbook" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "Asked for effect, not expecting an answer." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — rhetorical = for effect.", working: "for effect", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A question asked for effect, not expecting an answer",
            commonErrors: ["Thinking it needs an answer."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speeches-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speech Excerpt",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Our school garden is dying. Every week, more plants wither and die. We have the space, we have the students — we just need the will to act. So I ask you: will you join me in saving our garden?'",
          },
          stem: "What is the speaker's purpose? Name two persuasive techniques used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech analysis", statement: "Purpose = persuade/inspire; techniques = emotive language + rhetorical question + call to action." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — purpose: persuade/inspire action on the garden.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — technique 1: emotive 'dying/wither and die' + 'just need the will'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — technique 2: rhetorical question 'will you join me?' + call to action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Persuade/inspire; emotive language + rhetorical question/call to action.",
            commonErrors: ["Missing that it's persuasive, not informative."],
            examinerNote: "Purpose + two techniques needed.",
          },
        },
        {
          id: "mla4-u1-speeches-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Valedictorian Speech",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Four years ago, we arrived here as strangers. Today, we leave as friends. We have laughed together, struggled together, and grown together. The lessons we learned in these halls will stay with us long after the exams are forgotten. So as we close this chapter, let us carry forward the courage to learn, the kindness to help, and the determination to succeed.'",
          },
          stem: "What is the structure of this speech? Identify the opening, main message and closing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech structure", statement: "Opening (journey) → main message (lessons remain) → closing (call to carry forward)." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — opening: 'arrived as strangers... leave as friends' (journey metaphor).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — main message: lessons learned will remain after exams.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — closing: 'carry forward courage/kindness/determination' (call to action).", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — structure identified clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Opening: strangers→friends; message: lessons remain; closing: carry forward values.",
            commonErrors: ["Missing the metaphorical journey structure."],
            examinerNote: "All three parts needed.",
          },
        },
        {
          id: "mla4-u1-speeches-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Speech: Save Our Playground",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Good morning everyone. I'm here today to talk about our playground — or rather, what we don't have. Three years ago, the council promised us a new playground. Today, it is still a pile of rubble.\n\nWe were told it would be finished by September. September came and went. Now we are told 'next year'. Next year? We cannot wait forever.\n\nEvery day, students leave school with nowhere safe to play. Some go home early. Others crowd into the corridors. This is not good enough.\n\nSo I ask you: will you sign our petition? Will you come to the council meeting? Will you make your voice heard? Together, we can make them keep their promise.'",
          },
          stem: "Read the speech and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the speaker's main complaint?", marks: 1 },
            { label: "b", prompt: "What evidence does the speaker give that the promise was broken?", marks: 2 },
            { label: "c", prompt: "Name two persuasive techniques used.", marks: 2 },
            { label: "d", prompt: "What is the call to action?", marks: 1 },
            { label: "e", prompt: "Write one sentence about the speaker's tone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech analysis", statement: "Extract complaint, evidence, techniques, call to action, tone." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — council promised playground but it's still rubble.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — promised by September, still rubble; 'next year' delay.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — evidence of delay clearly given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — rhetorical questions ('will you sign...?'), repetition ('Next year?'), emotive language ('nowhere safe').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — two distinct techniques named.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A: Listening — sign petition, attend council meeting, make voice heard.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Criterion A: Listening — tone: urgent, frustrated, persuasive.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Criterion D: Writing — tone accurately described.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) broken playground promise (b) Sept deadline missed, 'next year' (c) rhetorical Qs + repetition (d) sign petition/attend meeting (e) urgent/persuasive.",
            commonErrors: ["Missing the rhetorical question technique."],
            examinerNote: "(c) needs two distinct named techniques.",
          },
        },
        {
          id: "mla4-u1-speeches-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'emotive language' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that trigger emotion, like 'children' or 'future'" },
              { id: "b", text: "The speaker's name" },
              { id: "c", text: "Words that are grammatically complex" },
              { id: "d", text: "Numbers and statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emotive language", statement: "Words chosen to trigger emotion." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — emotive words trigger feelings.", working: "emotion", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Words that trigger emotion, like 'children' or 'future'",
            commonErrors: ["Confusing emotive language with formal vocabulary."],
            examinerNote: "A1 for (a).",
          },
        },
        {
          id: "mla4-u1-speeches-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'call to action' in a speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The applause at the end" },
              { id: "b", text: "A list of statistics" },
              { id: "c", text: "The first sentence of the speech" },
              { id: "d", text: "The speaker's request for the audience to do something" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call to action", statement: "Request for audience to act." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — call to action asks the audience to do something.", working: "act", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The speaker's request for the audience to do something",
            commonErrors: ["Confusing it with the opening hook."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speeches-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Our school library needs more books. Right now, students must wait weeks to borrow popular titles. I ask you: will you support the new library fund?'",
          },
          stem: "What is the speaker's purpose and what technique is used at the end?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech purpose + technique", statement: "Identify persuade/inform + rhetorical features." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — purpose: persuade audience to support the fund.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — technique: rhetorical question 'will you support...?' + call to action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Persuade support; rhetorical question + call to action.",
            commonErrors: ["Missing the rhetorical question."],
            examinerNote: "Both needed.",
          },
        },
        {
          id: "mla4-u1-speeches-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'First, we will look at the problem. Second, we will discuss solutions. Finally, I will ask for your ideas.'",
          },
          stem: "How many main points does the speaker announce?",
          response: {
            type: "numeric",
            parts: [
              { label: "points", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure scanning", statement: "Count signposted main points." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — First, Second, Finally = 3 points.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Counting sentences instead of points."],
            examinerNote: "A1 for 3.",
          },
        },
        {
          id: "mla4-u1-speeches-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Every year, 8 million tonnes of plastic enter our oceans. Our children's future depends on the choices we make today. We must act — we must change — we must protect our planet.'",
          },
          stem: "Which persuasive techniques appear in this speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotive language, statistics and repetition" },
              { id: "b", text: "No persuasive techniques" },
              { id: "c", text: "Statistics and repetition only" },
              { id: "d", text: "Only personal stories" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique identification", statement: "Spot statistics, emotive words and repetition." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — '8 million tonnes' = statistics; 'children's future' = emotive; 'we must act/change/protect' = repetition.", working: "three techniques", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — all three correctly identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Emotive language, statistics and repetition",
            commonErrors: ["Missing one of the three techniques."],
            examinerNote: "A2 for (b).",
          },
        },
        {
          id: "mla4-u1-speeches-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'I want to tell you about my grandmother. She arrived here with nothing but a suitcase and a dream. Twenty years later, she runs her own business. Her story proves that hard work and courage can change everything.'",
          },
          stem: "Identify the speaker's main argument and the example used to support it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument + example", statement: "Track claim and supporting example." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — argument: hard work and courage change lives.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — example: grandmother's story (arrived with nothing, now runs business).", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — argument and example clearly linked.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Argument: hard work/courage pay off; example: grandmother's journey.",
            commonErrors: ["Summarising the story without the argument."],
            examinerNote: "Both argument and example needed.",
          },
        },
        {
          id: "mla4-u1-speeches-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Our school garden project needs volunteers. We need people to water plants every day and record growth. If you can give one hour a week, please sign up at the office.'",
          },
          stem: "What is the call to action and what does the speaker ask volunteers to do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Call to action extraction", statement: "Identify what the audience is asked to do." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — call to action: sign up at the office.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — tasks: water plants daily, record growth, one hour a week.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — both clearly stated.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Sign up; water plants, record growth, one hour weekly.",
            commonErrors: ["Missing the specific tasks."],
            examinerNote: "Call to action plus tasks needed.",
          },
        },
        {
          id: "mla4-u1-speeches-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is an example of a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'How can we ignore the danger facing our oceans?'" },
              { id: "b", text: "'Did you finish your homework?'" },
              { id: "c", text: "'How many students are in this class?'" },
              { id: "d", text: "'What time does the meeting start?'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "Asked for effect, not expecting an answer." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — option b is asked for effect, not information.", working: "effect", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 'How can we ignore the danger facing our oceans?'",
            commonErrors: ["Choosing genuine information-seeking questions."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speeches-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'I come before you today not to celebrate our successes, but to warn you about our failures. We have become comfortable. We have become careless. If we continue like this, we will lose everything we have built.'",
          },
          stem: "What is the overall tone of this speech opening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warning and urgent" },
              { id: "b", text: "Joyful and celebratory" },
              { id: "c", text: "Humorous and light" },
              { id: "d", text: "Calm and neutral" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone identification", statement: "Word choice reveals the speaker's attitude." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'warn', 'failures', 'lose everything' = urgent warning.", working: "warning", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — negative loaded language throughout.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Warning and urgent",
            commonErrors: ["Missing the negative shift ('not celebrate... but warn')."],
            examinerNote: "A2 for (b).",
          },
        },
        {
          id: "mla4-u1-speeches-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Good evening. Tonight I want to talk about something close to my heart: our town's library. Three years ago, the council promised to renovate it. Today, it remains closed. The roof leaks, the heating is broken, and thousands of books are stored in boxes. We were told 'next year' — twice. Our children deserve better. I urge you to sign the petition and demand action.'",
          },
          stem: "Analyse this speech: state its purpose, main argument and persuasive techniques used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech analysis", statement: "Purpose, argument and techniques." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — purpose: persuade action on library renovation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — argument: council broke promise; library neglected.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — techniques: emotive ('children deserve better'), repetition ('next year — twice'), call to action (sign petition).", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — analysis is complete and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Persuade library action; broken promise argument; emotive + repetition + call to action.",
            commonErrors: ["Missing that it is persuasive, not informative."],
            examinerNote: "Purpose, argument and at least two techniques needed.",
          },
        },
        {
          id: "mla4-u1-speeches-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Some say the new uniform policy is unfair. I ask you to consider: would you accept being told what to wear every day of your life?'",
          },
          stem: "What does 'I ask you to consider' suggest about the speaker's intent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker is trying to make the audience think and possibly agree" },
              { id: "b", text: "The speaker is ending the speech" },
              { id: "c", text: "The speaker wants to inform only" },
              { id: "d", text: "The speaker is asking for silence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Persuasive intent", statement: "Inviting consideration signals persuasion." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'consider' + rhetorical question aims to shift audience thinking.", working: "persuade", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The speaker is trying to make the audience think and possibly agree",
            commonErrors: ["Reading it as neutral information."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speeches-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Speech: Healthy School Canteen",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Good morning. I'm here to talk about our school canteen. Last year, it served chips and sugary drinks every day. This year, we have fresh fruit, salads and water. Sales of unhealthy items have dropped by 60%.\n\nSome students still want their old favourites back. I understand — change is hard. But our health matters more than temporary preferences.\n\nSo I ask you: will you choose the healthy option today?'",
          },
          stem: "Read the speech and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the speech mainly about?", marks: 1 },
            { label: "b", prompt: "Give two changes the canteen made.", marks: 2 },
            { label: "c", prompt: "Name two persuasive techniques used.", marks: 2 },
            { label: "d", prompt: "What is the call to action?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech analysis", statement: "Topic, changes, techniques, call to action." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — healthier school canteen.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — change 1: fresh fruit/salads/water replace chips/drinks.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — change 2: unhealthy sales dropped 60%.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — technique 1: statistics (60%).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — technique 2: emotive ('health matters') + rhetorical question/call to action.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A: Listening — 'choose the healthy option today'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) healthier canteen (b) new menu + sales drop (c) statistics + emotive/rhetorical (d) choose healthy option.",
            commonErrors: ["Missing the rhetorical question technique."],
            examinerNote: "(c) needs two distinct techniques.",
          },
        },
      ],
    },
    {
      id: "mla4-u1-speech-evaluation",
      title: "Evaluating speeches critically",
      skill: "Judge whether a speech is informative or persuasive, identify strengths and weaknesses, and explain the effect on the audience.",
      lesson: {
        sections: [
          {
            heading: "Inform vs persuade",
            body: "An **informative** speech gives facts and clear explanations. A **persuasive** speech tries to change what the audience thinks or does. Many speeches mix both. Ask: Is the speaker mainly explaining or mainly trying to convince?",
          },
          {
            heading: "Strengths and weaknesses",
            body: "Strong speeches have a clear purpose, organised points and relevant examples. Weaknesses may include unclear structure, unsupported claims or too much emotional language. Evaluate by asking whether the evidence matches the claim.",
          },
          {
            heading: "Audience effect",
            body: "Consider how the speech might affect listeners. Emotional language can motivate action but may also create unfair pressure. A good evaluation mentions both the intended effect and any possible criticism.",
          },
        ],
        keyFormulas: [
          { name: "Speech purpose", statement: "Inform / persuade / entertain / inspire" },
          { name: "Evaluation questions", statement: "Clear purpose? Organised points? Evidence? Audience effect?" },
        ],
        workedExample: {
          problem: "A speaker uses many statistics and clear examples but no emotional language. Is it persuasive or informative?",
          solution: "Probably informative — facts and examples dominate; persuasion would need stronger appeals or calls to action.",
        },
      },
      questions: [
        {
          id: "mla4-u1-speech-evaluation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main difference between an informative and a persuasive speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informative explains; persuasive tries to change minds or actions" },
              { id: "b", text: "Informative speeches are only for teachers" },
              { id: "c", text: "Persuasive speeches never use facts" },
              { id: "d", text: "Informative speeches are always shorter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Speech purpose", statement: "Informative explains; persuasive aims to change thinking or behaviour." }],
            steps: [{ reasoning: "Criterion A: Listening — informative explains, persuasive changes minds/actions.", working: "purpose", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Informative explains; persuasive tries to change minds or actions",
            commonErrors: ["Thinking persuasion cannot use facts."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speech Excerpt",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Our recycling rate rose from 30% to 45% last year. This happened because the school added more bins and taught students how to sort waste. We can improve further if every class takes responsibility.'",
          },
          stem: "Is this speech mainly informative or persuasive? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Purpose evaluation", statement: "Facts suggest informative; 'we can improve' adds mild persuasion." }],
            steps: [
              { reasoning: "Criterion A: Listening — mainly informative because it gives statistics and reasons.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — evidence: recycling rate rose from 30% to 45%.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'we can improve further' adds a persuasive suggestion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mainly informative: uses statistics and causes; mild persuasive suggestion at the end.",
            commonErrors: ["Ignoring the final persuasive phrase."],
            examinerNote: "Must justify with evidence.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Speech Evaluation",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Speaker: 'Phones are destroying education. Every student is addicted. Schools must ban them immediately or we will fail an entire generation.'",
          },
          stem: "Evaluate the speech's strengths and weaknesses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speech critique", statement: "Strengths: clear call; weaknesses: exaggeration and unsupported claims." }],
            steps: [
              { reasoning: "Criterion A: Listening — strength: clear call to action: ban phones.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — weakness 1: exaggeration 'destroying' and 'every student'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — weakness 2: no evidence or balanced view.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D: Writing — evaluation is balanced and specific.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Clear call to action, but weakened by exaggeration and lack of evidence.",
            commonErrors: ["Agreeing without evaluating evidence."],
            examinerNote: "Must identify both strength and weakness.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Speech Review",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Speaker: 'Good afternoon. Today I want to explain why our school should start a gardening club. First, gardening teaches responsibility. Second, it gives students fresh food. Third, it makes the school greener. Some people say it costs too much, but the benefits are clear. In conclusion, I hope you will support the gardening club.'",
          },
          stem: "Read the speech and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the speaker's purpose.", marks: 1 },
            { label: "b", prompt: "List two main points.", marks: 2 },
            { label: "c", prompt: "Identify one weakness in the argument.", marks: 2 },
            { label: "d", prompt: "Write a 40-60 word evaluation of the speech.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speech review", statement: "Purpose, points, weakness and evaluation." }],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — purpose: persuade audience to support gardening club.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — point 1: teaches responsibility.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — point 2: fresh food / greener school.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — weakness: 'benefits are clear' without evidence; cost concern dismissed too quickly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — weakness clearly identified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A: Listening — evaluation captures purpose and points.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion D: Writing — evaluation is clear, balanced and within range.", marks: 2, markCode: "D" },
            ],
            finalAnswer: "(a) persuade support (b) responsibility/fresh food/greener (c) weak evidence (d) balanced evaluation.",
            commonErrors: ["Ignoring the dismissed cost concern."],
            examinerNote: "(d) should evaluate, not just summarise.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a speech 'informative' rather than 'persuasive'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no structure" },
              { id: "b", text: "It mainly gives facts and explanations" },
              { id: "c", text: "It always uses emotional language" },
              { id: "d", text: "It uses only short sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informative speech", statement: "Gives facts and clear explanations." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — informative = facts and explanations.", working: "facts", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It mainly gives facts and explanations",
            commonErrors: ["Confusing informative with entertaining."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a strength of a well-organised speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has a clear purpose and organised points" },
              { id: "b", text: "It avoids giving examples" },
              { id: "c", text: "It jumps randomly between topics" },
              { id: "d", text: "It repeats the same sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Speech strength", statement: "Clear purpose + organised points = effective speech." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — clear purpose and organised points are strengths.", working: "organised", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It has a clear purpose and organised points",
            commonErrors: ["Choosing disorganised features."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'There are three reasons to recycle. First, it saves resources. Second, it reduces pollution. Third, it sets a good example for others.'",
          },
          stem: "Is this speech mainly informative or persuasive? Give one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose evaluation", statement: "Judge purpose from content and language." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — mainly informative: gives reasons/facts about recycling.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — no strong emotional appeal or call to action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informative — lists factual reasons without emotional pressure.",
            commonErrors: ["Calling any speech with opinions persuasive."],
            examinerNote: "Reason must be given.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'I will discuss two main points today: first, the benefits of exercise, and second, how to start.'",
          },
          stem: "How many main points does the speaker announce?",
          response: {
            type: "numeric",
            parts: [
              { label: "points", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure scanning", statement: "Count announced main points." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'two main points': benefits and how to start.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**2**",
            commonErrors: ["Counting 'first' and 'second' plus extra."],
            examinerNote: "A1 for 2.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Homework helps students learn. Studies show that regular practice improves memory. However, too much homework can cause stress, so balance is important.'",
          },
          stem: "What is a strength of this speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It acknowledges both benefits and drawbacks" },
              { id: "b", text: "It is very short" },
              { id: "c", text: "It ignores the negative side completely" },
              { id: "d", text: "It uses no evidence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech critique", statement: "Balanced treatment is a strength." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'however... stress... balance' shows balanced view.", working: "balanced", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — evidence ('studies show') supports the claim.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It acknowledges both benefits and drawbacks",
            commonErrors: ["Missing the balanced structure."],
            examinerNote: "A2 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Our school trip was amazing! The best ever! Everyone loved it! We must do it again next year!'",
          },
          stem: "Evaluate this speech: identify one strength and two weaknesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech critique", statement: "Weigh positives against unsupported claims." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — strength: positive, enthusiastic tone may engage audience.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — weakness 1: no evidence or specific details.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — weakness 2: exaggerated claims ('best ever') and repetition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enthusiastic tone; but no evidence, exaggeration and repetition weaken it.",
            commonErrors: ["Listing only praise or only criticism."],
            examinerNote: "One strength and two weaknesses needed.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'I want to explain how our recycling programme works. First, students separate paper and plastic. Second, the bins are collected every Friday. Third, the materials are sent to a local plant. In conclusion, recycling is simple when everyone participates.'",
          },
          stem: "Evaluate how clearly this speech explains the process. Suggest one improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech evaluation", statement: "Clear structure is a strength; suggest specific improvement." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — strength: clear step-by-step structure (First/Second/Third).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — weakness: lacks examples or data; no audience engagement.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D: Writing — improvement is specific, e.g. add an example or statistic.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Clear steps; improvement: add an example or statistic to make it concrete.",
            commonErrors: ["Vague improvement like 'make it better'."],
            examinerNote: "Improvement must be specific.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A speech uses statistics, clear examples and a balanced conclusion. What is its likely purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To inform the audience" },
              { id: "b", text: "To entertain the audience" },
              { id: "c", text: "To insult the audience" },
              { id: "d", text: "To avoid the topic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose from features", statement: "Facts + balance → informative purpose." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — statistics and balance suggest informing.", working: "inform", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To inform the audience",
            commonErrors: ["Confusing informative with persuasive."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Our fundraising event raised 5,000 dollars. However, the organisers admit that 2,000 dollars went to costs, so the net result was lower than hoped.'",
          },
          stem: "What does the speaker's willingness to mention the costs suggest about the speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The event was a failure" },
              { id: "b", text: "The speaker values honesty and accuracy" },
              { id: "c", text: "The speaker regrets participating" },
              { id: "d", text: "The speech is dishonest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Credibility inference", statement: "Admitting drawbacks builds trust." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — mentioning costs shows honesty.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — balanced reporting suggests credible speech.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The speaker values honesty and accuracy",
            commonErrors: ["Reading it as weakness rather than credibility."],
            examinerNote: "A2 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'Good morning. I want to tell you about our new science lab. It opened last month with modern equipment. Students can now do experiments that were impossible before. Attendance at science clubs has doubled. I encourage every student to try a club.'",
          },
          stem: "Evaluate this speech: is it mainly informative or persuasive? Give two reasons and one suggestion for improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose + evaluation", statement: "Judge purpose and suggest improvements." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — purpose: mostly informative with mild persuasion.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — reasons: gives facts (opened, equipment, attendance doubled).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'I encourage' adds a light persuasive element.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D: Writing — improvement specific, e.g. add examples of experiments or student quotes.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Informative with mild persuasion; facts dominate; add concrete examples.",
            commonErrors: ["Calling it purely persuasive or purely informative."],
            examinerNote: "Nuanced purpose + specific improvement needed.",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Speech Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "'I know some of you may not agree with me. That is fine. Let us look at the facts together.'",
          },
          stem: "What effect might 'That is fine' have on the audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the audience angry" },
              { id: "b", text: "It makes the speaker seem open-minded and respectful" },
              { id: "c", text: "It proves the speaker is wrong" },
              { id: "d", text: "It ends the speech" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience effect", statement: "Acknowledging disagreement can build rapport." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — accepting disagreement signals respect.", working: "respectful", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It makes the speaker seem open-minded and respectful",
            commonErrors: ["Reading 'That is fine' as dismissive."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla4-u1-speech-evaluation-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Speech Evaluation",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Speaker: 'Good afternoon. Today I will explain our school's new anti-bullying policy. First, it defines what counts as bullying. Second, it sets clear consequences. Third, it offers support for victims. Some students think the rules are too strict, but the policy was written with student input. In conclusion, this policy protects everyone.'",
          },
          stem: "Evaluate the speech and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the speaker's purpose.", marks: 1 },
            { label: "b", prompt: "List two main points of the policy.", marks: 2 },
            { label: "c", prompt: "Identify one strength and one weakness of the speech.", marks: 2 },
            { label: "d", prompt: "Write one sentence suggesting an improvement.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speech evaluation", statement: "Purpose, points, strengths/weaknesses, improvement." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — purpose: inform/explain the anti-bullying policy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — point 1: defines bullying; point 2: consequences/support.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — two distinct points given.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion A: Listening — strength: clear structure + student input mentioned.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — weakness: dismisses 'too strict' concern quickly.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion D: Writing — specific, relevant improvement.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) explain policy (b) defines/consequences (c) structure vs dismissed concern (d) improvement.",
            commonErrors: ["Missing the weakness about the dismissed concern."],
            examinerNote: "(c) needs one of each.",
          },
        },
      ],
    },
  ],
};

import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const TASK_LETTER: TextExtract = {
  title: "Model formal letter",
  author: "Written for Akademik Space",
  text: "14 Orchard Road\nBrampton\nBR4 2QT\n\n3 March 2027\n\nMrs J. Whitfield\nHeadteacher\nBrampton High School\nSchool Lane\nBrampton BR4 9XY\n\nDear Mrs Whitfield,\n\nI am writing to ask that the school consider introducing a recycling scheme for paper and plastic bottles. At present, the bins in every corridor are filled with items that could be reused.\n\nI believe that a scheme would benefit both the environment and the school's reputation. Many pupils already recycle at home and would welcome the opportunity to continue at school. I would be happy to organise a group of volunteers to run the scheme.\n\nI would be grateful for the chance to discuss this proposal with you at your convenience.\n\nYours sincerely,\n\nAmira Hassan\nYear 8",
};

const SPEECH_TASK: TextExtract = {
  title: "Model speech opening",
  author: "Written for Akademik Space",
  text: "Friends, classmates, teachers: how many of you walked past a bin full of plastic this morning and did nothing? I did. And that is exactly why I am standing here. If we want a cleaner school, a cleaner town and a cleaner future, then we must stop waiting for somebody else to act. Today, I will show you three simple steps that every one of us can take, starting right now.",
};

const LEVELS_15 = (part: string): MarkLevel[] => [
  { part, level: "Level 5", marks: "13-15", descriptor: "Assured, convincing writing; form, tone and register crafted precisely for audience and purpose; sophisticated structure." },
  { part, level: "Level 4", marks: "10-12", descriptor: "Thorough, well-chosen form, tone and register; controlled structure and effective ideas." },
  { part, level: "Level 3", marks: "7-9", descriptor: "Clear, appropriate form and register; ideas generally organised." },
  { part, level: "Level 2", marks: "4-6", descriptor: "Some awareness of form and audience; some organisation." },
  { part, level: "Level 1", marks: "1-3", descriptor: "Simple, limited writing with little awareness of form or audience." },
];

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant explanation with well-chosen references." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding with some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
];

export const lesson32: Lesson = {
  id: "el8-u3-lesson-3-2",
  code: "3-2",
  title: "Transactional Writing",
  goal: "I CAN write formal letters, articles and speeches in the right form, tone and register for a specific audience.",
  standards: ["KS3 Writing", "KS3 AO4", "KS3 AO5"],
  vocabulary: [
    { term: "Register", definition: "The level of formality of language, from casual to formal." },
    { term: "Transactional writing", definition: "Writing with a practical purpose, such as a letter, article or speech, aimed at a real audience." },
    { term: "Salutation", definition: "The greeting at the start of a letter, such as 'Dear Mrs Whitfield,'." },
    { term: "Headline", definition: "The title of an article, designed to attract attention." },
    { term: "Address the audience", definition: "To speak directly to the listeners or readers, using 'you' and 'we'." },
    { term: "Sign-off", definition: "The closing of a letter: 'Yours sincerely' if you know the name, 'Yours faithfully' if you do not." },
  ],
  concepts: [
    {
      id: "el8-u3-formal-letters",
      title: "Formal letters and register",
      skill: "Write a formal letter with the correct layout, formal vocabulary and a polite, purposeful tone.",
      lesson: {
        sections: [
          {
            heading: "Layout and conventions",
            body: "A formal letter has your address at the top right, the date, the recipient's name and address, a salutation ('Dear Mrs Whitfield,'), a clear opening that states your purpose, organised paragraphs, a polite closing and a sign-off. Use **Yours sincerely** when you have used a name and **Yours faithfully** after 'Dear Sir or Madam'.",
          },
          {
            heading: "Formal register",
            body: "Avoid contractions, slang and exclamation marks. Prefer 'I am writing to request' to 'I wanna ask'. Use polite modal verbs ('would', 'could'), precise vocabulary and a calm, respectful tone even when complaining. Support requests with reasons and offer solutions.",
          },
        ],
        keyFormulas: [
          { name: "Opening", statement: "'I am writing to...' states the purpose in the first sentence." },
          { name: "Closing", statement: "'I would be grateful for...' ends with a polite request for action." },
          { name: "Sign-off rule", statement: "Dear + name = Yours sincerely; Dear Sir or Madam = Yours faithfully." },
        ],
        workedExample: {
          problem: "Rewrite in a formal register: 'Hi, I really think the school needs more bins because the playground is a total mess!'",
          solution: "Dear Mrs Whitfield, I am writing to suggest that additional bins be installed in the playground, as litter is currently a significant problem. Note the changes: the informal greeting, the slang 'total mess' and the exclamation mark have been replaced by a formal salutation, precise vocabulary and a calm, polite request.",
        },
      },
      questions: [
        {
          id: "el8-u3-formal-letters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A letter begins 'Dear Mrs Whitfield,'. Which sign-off is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cheers" },
              { id: "b", text: "See you soon" },
              { id: "c", text: "Yours faithfully" },
              { id: "d", text: "Yours sincerely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Sign-off", statement: "Dear + name is closed with Yours sincerely." }],
            steps: [{ reasoning: "A named recipient needs 'Yours sincerely'.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** Yours sincerely.",
            commonErrors: ["Choosing 'Yours faithfully', which is for 'Dear Sir or Madam'."],
          },
        },
        {
          id: "el8-u3-formal-letters-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this sentence in a formal register: 'Your canteen food is rubbish and it costs loads, so you should sort it out!'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal register", statement: "No slang, contractions or exclamation marks; polite modal verbs." }],
            steps: [
              { reasoning: "Replaces slang ('rubbish', 'loads') with precise, formal vocabulary.", marks: 1, markCode: "AO4" },
              { reasoning: "Uses a polite construction such as 'I would be grateful if' or 'I suggest'.", marks: 1, markCode: "AO4" },
              { reasoning: "Removes the exclamation mark and keeps the sentence accurate.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "Model: 'I am concerned about the quality and cost of the canteen meals, and I would be grateful if the school could review them.'",
            commonErrors: ["Keeping 'you should' as a demand.", "Replacing only one informal word."],
          },
        },
        {
          id: "el8-u3-formal-letters-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: TASK_LETTER,
          stem: "How does the writer of this letter create a formal, polite and persuasive tone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal tone", statement: "Polite modal verbs, precise vocabulary and a reasoned argument." },
              { kind: "technique", name: "Persuasion", statement: "Reasons and an offer of help make a request more convincing." },
            ],
            steps: [
              { reasoning: "The opening states the purpose clearly and politely.", evidence: "I am writing to ask that the school consider", marks: 1, markCode: "AO2" },
              { reasoning: "She gives a reason supported by an observation.", evidence: "the bins in every corridor are filled with items that could be reused", marks: 1, markCode: "AO2" },
              { reasoning: "She offers practical help, which makes her proposal sound responsible.", evidence: "I would be happy to organise a group of volunteers", marks: 1, markCode: "AO2" },
              { reasoning: "The polite conditional closing invites a response.", evidence: "I would be grateful for the chance to discuss", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer opens with a clear, courteous purpose, 'I am writing to ask that...', supports it with a reason about the bins, offers practical help ('I would be happy to organise a group of volunteers'), and closes politely with 'I would be grateful'. This combination sounds respectful and reasonable.",
            commonErrors: ["Listing features of the letter without quoting.", "Ignoring the polite closing."],
          },
        },
        {
          id: "el8-u3-formal-letters-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts of this question about formal letters.",
          extract: TASK_LETTER,
          parts: [
            { label: "a", prompt: "Write down two features of layout that show this is a formal letter.", marks: 2 },
            { label: "b", prompt: "Identify two examples of formal vocabulary or phrasing.", marks: 4 },
            { label: "c", prompt: "Explain how the second paragraph builds a persuasive case.", marks: 6 },
            { label: "d", prompt: "Write a formal letter to the head of your local library asking them to open for longer in the evenings. Give reasons and offer a solution. Write about 200 words.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter layout", statement: "Addresses, date, salutation, sign-off." },
              { kind: "convention", name: "Formal register", statement: "Polite, precise language without slang." },
            ],
            steps: [
              { part: "a", reasoning: "Sender's address and date are at the top.", evidence: "14 Orchard Road", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The salutation and sign-off with a named recipient follow convention.", evidence: "Dear Mrs Whitfield", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Formal verb phrase stating purpose.", evidence: "I am writing to ask that", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Formal, polite conditional language.", evidence: "I would be grateful for the chance", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "She claims a double benefit, which appeals to the headteacher's priorities.", evidence: "benefit both the environment and the school's reputation", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "She uses the pupils' existing habits as evidence of demand.", evidence: "Many pupils already recycle at home", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "She offers to do the work, making the proposal practical.", evidence: "I would be happy to organise a group of volunteers", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Correct layout, formal tone and register throughout, and a clear purpose.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Reasons, evidence and a practical solution, in organised paragraphs.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Accurate spelling, punctuation and varied sentence structure.", marks: 5, markCode: "AO5" },
            ],
            levels: [...LEVELS_6("c"), ...LEVELS_15("d")],
            finalAnswer: "(a) Sender's address and date; salutation and sign-off. (b) 'I am writing to ask that...'; 'I would be grateful for the chance...'. (c) Double benefit, evidence of demand and a volunteer offer. (d) A letter with correct layout, a clear purpose in the first paragraph, two reasons, a practical suggestion such as a volunteer rota, a polite closing and 'Yours sincerely'.",
            commonErrors: ["Using 'Yours faithfully' with a named recipient.", "Contractions and slang in the response.", "No reasons for the request."],
            examinerNote: "Part (d): 10 marks for content and organisation (AO4) and 5 for technical accuracy (AO5).",
          },
        },
      ],
    },
    {
      id: "el8-u3-articles-speeches",
      title: "Articles and speeches",
      skill: "Write an article or speech with an engaging opening, rhetorical devices and a call to action.",
      lesson: {
        sections: [
          {
            heading: "Articles",
            body: "An article needs a **headline**, an engaging opening paragraph, paragraphs organised by idea, a lively but controlled voice and a memorable ending. Use facts, examples and a few devices such as rhetorical questions. Keep the tone suited to the audience: a school magazine can be friendly but should stay accurate.",
          },
          {
            heading: "Speeches",
            body: "A speech is written to be heard. Address the audience ('Friends, classmates...'), use the rule of three, repetition and direct questions, vary sentence length for rhythm and finish with a clear call to action. Signpost your points ('First... Second... Finally...') so listeners can follow.",
          },
        ],
        keyFormulas: [
          { name: "Article", statement: "Headline, hook, organised paragraphs, call to action or strong ending." },
          { name: "Speech", statement: "Address, hook, three points, repetition, call to action." },
          { name: "Signposting", statement: "Words such as 'first', 'next' and 'finally' that guide the audience." },
        ],
        workedExample: {
          problem: "Write the opening paragraph of a speech persuading pupils to walk to school.",
          solution: "Good morning, everyone. Who here sat in a traffic jam this morning, watching the clock tick and the exhaust fumes drift past the window? I did, and I decided that enough was enough. Walking costs nothing, clears the head and keeps our air clean. Today, I will give you three reasons to leave the car at home, and I promise that by the end, you will want to lace up your shoes.",
        },
      },
      questions: [
        {
          id: "el8-u3-articles-speeches-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the best opening for a school magazine article about the library?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The library has books." },
              { id: "b", text: "Have you ever lost an entire afternoon inside a book?" },
              { id: "c", text: "Hello, I am writing this now." },
              { id: "d", text: "This article is about the library." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Article hook", statement: "An engaging question or striking idea draws the reader in." }],
            steps: [{ reasoning: "The rhetorical question engages the reader and introduces the theme with personality.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** It uses a hook that involves the reader; the others are flat or state the obvious.",
            commonErrors: ["Choosing (b) because it sounds clear, when it does not engage."],
          },
        },
        {
          id: "el8-u3-articles-speeches-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SPEECH_TASK,
          stem: "Identify two techniques the speaker uses in this opening and explain the effect of one of them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetoric", statement: "Rhetorical question, rule of three, direct address." }],
            steps: [
              { reasoning: "Direct address includes the whole audience.", evidence: "Friends, classmates, teachers", marks: 1, markCode: "AO2" },
              { reasoning: "A rhetorical question engages and implicates the audience.", evidence: "how many of you walked past a bin full of plastic", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation: the rule of three, 'a cleaner school, a cleaner town and a cleaner future', builds a rhythm that grows in scale.", evidence: "a cleaner school, a cleaner town and a cleaner future", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Techniques: direct address ('Friends, classmates, teachers') and a rhetorical question. The rule of three 'a cleaner school, a cleaner town and a cleaner future' also builds rhythm and grows in scale, making the aim sound ambitious.",
            commonErrors: ["Naming techniques with no explanation of effect."],
          },
        },
        {
          id: "el8-u3-articles-speeches-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the opening paragraph of a speech persuading your year group to read for pleasure. Use direct address, a rhetorical question and the rule of three. Write about 100 words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech form", statement: "Address, hook, devices and clear purpose." },
              { kind: "technique", name: "Rhetorical devices", statement: "Rule of three and rhetorical questions create rhythm and involvement." },
            ],
            steps: [
              { reasoning: "Addresses the audience directly and states a clear purpose.", marks: 2, markCode: "AO4" },
              { reasoning: "Uses a rhetorical question and rule of three effectively.", marks: 3, markCode: "AO4" },
              { reasoning: "Appropriate, engaging tone with varied sentence lengths.", marks: 1, markCode: "AO4" },
              { reasoning: "Accurate spelling, punctuation and grammar.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Thorough, polished speech opening with well-chosen devices and accurate writing." },
              { level: "Level 3", marks: "5-6", descriptor: "Clear, appropriate opening with some effective devices." },
              { level: "Level 2", marks: "3-4", descriptor: "Some awareness of speech form; some devices." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited attempt." },
            ],
            finalAnswer: "Model: 'Year Eight, put your hands up if you have ever been so lost in a story that you forgot to eat lunch. I thought so. A good book can take you to the other side of the world, introduce you to heroes and villains, and teach you more about yourself than a hundred lessons. So today I want to persuade you to read, and I want to start right now.'",
            commonErrors: ["Writing an essay opening rather than something to be heard.", "Using no devices."],
          },
        },
        {
          id: "el8-u3-articles-speeches-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts of this question about the speech opening.",
          extract: SPEECH_TASK,
          parts: [
            { label: "a", prompt: "What does the speaker promise the audience at the end of the extract?", marks: 2 },
            { label: "b", prompt: "Why does the speaker admit 'I did'?", marks: 4 },
            { label: "c", prompt: "How does the speaker use language and structure to engage the audience?", marks: 6 },
            { label: "d", prompt: "Write a speech (about 200 words) to persuade your school to hold a charity day. Use at least three persuasive techniques and end with a call to action.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech", statement: "Hook, signposted points, call to action." },
              { kind: "technique", name: "Personal anecdote", statement: "Admitting a shared fault builds trust." },
            ],
            steps: [
              { part: "a", reasoning: "To show three simple steps.", evidence: "three simple steps", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Everyone can take them, starting immediately.", evidence: "starting right now", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It shows honesty and humility, which builds trust.", evidence: "I did.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It puts the speaker on the audience's level, making the message inclusive and justifying her purpose.", evidence: "that is exactly why I am standing here", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Direct address and a rhetorical question hook the audience immediately.", evidence: "Friends, classmates, teachers", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The rule of three raises the scale of ambition.", evidence: "a cleaner school, a cleaner town and a cleaner future", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Signposting and the imperative 'starting right now' create urgency and direction.", evidence: "Today, I will show you three simple steps", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Appropriate form, tone and audience awareness with a clear call to action.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "At least three persuasive techniques used effectively, with organised points.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Accurate, varied sentences, spelling and punctuation.", marks: 5, markCode: "AO5" },
            ],
            levels: [...LEVELS_6("c"), ...LEVELS_15("d")],
            finalAnswer: "(a) Three simple steps that everyone can take immediately. (b) It shows honesty, building trust and justifying why she speaks. (c) Direct address, a rhetorical question, the rule of three and signposting hook and direct the audience. (d) A speech with an address, anecdote, three signposted reasons, rhetorical devices and a final call to action such as 'Sign up today'.",
            commonErrors: ["No call to action.", "Listing facts with no rhetorical devices.", "Long sentences that are hard to say aloud."],
            examinerNote: "Part (d): 10 marks for content and organisation (AO4) and 5 for technical accuracy (AO5).",
          },
        },
      ],
    },
  ],
};

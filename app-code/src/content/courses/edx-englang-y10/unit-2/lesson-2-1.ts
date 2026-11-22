import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const LETTER: TextExtract = {
  title: "Letter to a Headteacher",
  author: "Written for Akademik Space",
  source: "Student model",
  text: "14 Orchard Close\nHartley\nHT4 2PL\n\n3 March\n\nDear Mrs Okafor,\n\nI am writing to request that the school library remains open until 5 pm on weekdays. At present it closes at 3.45 pm, which prevents many students, particularly those who travel by bus, from using its resources.\n\nFirst, a later closing time would help students who have no quiet space at home. Furthermore, it would give coursework the time and concentration it deserves. I would be happy to help with a volunteer rota.\n\nI hope you will consider this proposal and I look forward to hearing from you.\n\nYours sincerely,\nAmira Hassan (Year 10)",
};

const SPEECH: TextExtract = {
  title: "Assembly Speech",
  author: "Written for Akademik Space",
  source: "Student model",
  text: "Good morning, everyone. Look around you. Every person in this hall will, at some point this year, need a little help, and every person here has something to give. So why do we hesitate? A kind word costs nothing. A held door costs nothing. Today I am asking you to give three things: your time, your attention and your kindness. Together, we can make this school a place where nobody walks alone. Thank you.",
};

const TONE_EXTRACT: TextExtract = {
  title: "Two Openings",
  author: "Written for Akademik Space",
  source: "Student models",
  text: "OPENING A (to a headteacher): I am writing to express my concern about the proposed changes to the lunchtime timetable. I would be grateful if you would consider the points below.\n\nOPENING B (to a friend): Hey Jess! You'll never guess what the school's gone and done now. Honestly, the lunch changes are totally mad, and I reckon we should do something about it.",
};

const FORM_LEVELS: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, relevant use of the conventions of the form, with a consistent, appropriate tone and a clear sense of purpose." },
  { level: "Level 2", marks: "3-4", descriptor: "Some use of form conventions; tone is sometimes appropriate." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited form features; little sense of audience." },
];

const LONG_LEVELS = (part: string): MarkLevel[] => [
  { part, level: "Level 5", marks: "13-15", descriptor: "Perceptive, assured communication; convincing, sustained control of form, tone and register for audience and purpose." },
  { part, level: "Level 4", marks: "10-12", descriptor: "Thorough, effective communication; form, tone and register consistently appropriate." },
  { part, level: "Level 3", marks: "7-9", descriptor: "Clear communication; form, tone and register generally appropriate." },
  { part, level: "Level 2", marks: "4-6", descriptor: "Some communication; form, tone and register partly appropriate." },
  { part, level: "Level 1", marks: "1-3", descriptor: "Simple, limited communication; little control of form or register." },
];

export const lesson21: Lesson = {
  id: "el10-u2-lesson-2-1",
  code: "2-1",
  title: "Form, Tone and Register",
  goal: "I CAN use the conventions of letters, articles, speeches, reviews and reports, and adapt tone and register to an audience.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO4"],
  vocabulary: [
    { term: "Form", definition: "The type of text being written, such as a letter, article, speech, review or report." },
    { term: "Register", definition: "How formal or informal the language is, chosen to suit audience and purpose." },
    { term: "Tone", definition: "The writer's attitude as it comes across in the writing, such as serious, friendly or urgent." },
    { term: "Audience", definition: "The people the writing is intended for." },
    { term: "Formal", definition: "Polite, precise language, avoiding slang, contractions and abbreviations." },
    { term: "Direct address", definition: "Speaking straight to the reader or listener using ‘you’ or ‘we’." },
  ],
  concepts: [
    {
      id: "el10-u2-form-conventions",
      title: "Form conventions",
      skill: "Use the layout and features that identify a letter, article, speech, review or report.",
      lesson: {
        sections: [
          {
            heading: "Why form matters",
            body: "In Section B you must write in the form the task names. **AO4** rewards writing that is adapted to form, audience and purpose, so examiners look for conventions at once. Choose the form's features deliberately, and keep them consistent throughout.",
          },
          {
            heading: "Key conventions",
            body: "**Formal letter**: sender's address, date, ‘Dear Mrs Okafor’, clear opening purpose, organised paragraphs, ‘Yours sincerely’ if you know the name (‘Yours faithfully’ if you do not). **Article**: headline, possible subheading, engaging opening, short paragraphs, a strong ending. **Speech**: direct address, rhetorical devices, rhythm and a memorable close. **Review**: title, summary, opinion with evidence, rating or recommendation. **Report**: title, headings, objective tone, findings and recommendations.",
          },
          {
            heading: "Spotting conventions in a model",
            body: "In the model letter, the address and date appear at the top, the greeting is formal, the first paragraph states the purpose (‘I am writing to request...’), and the sign-off matches the greeting. Use such features as a checklist when you plan.",
          },
        ],
        keyFormulas: [
          { name: "Sign-offs", statement: "‘Dear Mrs Okafor’ ends ‘Yours sincerely’; ‘Dear Sir or Madam’ ends ‘Yours faithfully’." },
          { name: "Article", statement: "Headline, engaging opening, short paragraphs, direct address and a strong ending." },
          { name: "Speech", statement: "Greeting, direct address, rhetorical devices (triples, questions), memorable ending." },
          { name: "Report", statement: "Title, headings, objective tone, evidence and recommendations." },
        ],
        workedExample: {
          problem: "List three conventions that make the model text ‘Letter to a Headteacher’ a formal letter.",
          solution: "It begins with the sender's address and the date. It uses the formal greeting ‘Dear Mrs Okafor’ and states its purpose at once in ‘I am writing to request...’. It ends with ‘Yours sincerely’, which matches the named recipient. Each is a recognisable convention that tells the examiner the form has been chosen deliberately.",
        },
      },
      questions: [
        {
          id: "el10-u2-form-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LETTER,
          stem: "The letter begins ‘Dear Mrs Okafor’. How should it end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours faithfully" },
              { id: "b", text: "Yours sincerely" },
              { id: "c", text: "Cheers" },
              { id: "d", text: "Best wishes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal letter sign-off", statement: "Named recipient: ‘Yours sincerely’. Unknown recipient: ‘Yours faithfully’." }],
            steps: [{ reasoning: "A named recipient requires ‘Yours sincerely’.", evidence: "Yours sincerely", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** ‘Yours sincerely’ because the recipient is named.",
            commonErrors: ["Choosing ‘Yours faithfully’, which is for ‘Dear Sir or Madam’.", "Choosing informal endings in a formal letter."],
          },
        },
        {
          id: "el10-u2-form-conventions-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SPEECH,
          stem: "Identify three features of a speech in the extract and say what each is for.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech features", statement: "Direct address, triples and rhetorical questions engage a live audience." }],
            steps: [
              { reasoning: "Direct address and greeting engage listeners immediately.", evidence: "Good morning, everyone. Look around you.", marks: 1, markCode: "AO4" },
              { reasoning: "A rhetorical question makes listeners think.", evidence: "So why do we hesitate?", marks: 1, markCode: "AO4" },
              { reasoning: "A triple gives rhythm and emphasis.", evidence: "your time, your attention and your kindness", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Direct address engages the audience; a rhetorical question prompts reflection; a list of three gives rhythm and emphasis.",
            commonErrors: ["Naming features with no purpose.", "Choosing features of an article instead."],
          },
        },
        {
          id: "el10-u2-form-conventions-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the opening paragraph of a newspaper article for teenagers headed ‘Why Sleep Should Come First’. Include a headline and use at least two features of an article.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Article", statement: "Headline, engaging opening, short paragraphs and direct address." }],
            steps: [
              { reasoning: "A suitable headline or subheading is included.", marks: 1, markCode: "AO4" },
              { reasoning: "An engaging opening such as an anecdote, question or surprising fact.", marks: 2, markCode: "AO4" },
              { reasoning: "Appropriate tone for a teenage readership, with direct address.", marks: 2, markCode: "AO4" },
              { reasoning: "Controlled, accurate sentences.", marks: 1, markCode: "AO5" },
            ],
            levels: FORM_LEVELS,
            finalAnswer: "A headline followed by a short, engaging opening (for example a question to the reader), direct address, and an appropriately lively tone.",
            commonErrors: ["No headline.", "A formal letter tone in an article.", "A very long first paragraph."],
          },
        },
        {
          id: "el10-u2-form-conventions-q4",
          difficulty: "challenge",
          totalMarks: 22,
          extract: LETTER,
          stem: "Read the model letter and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "State two features of the layout of the letter that show it is formal.", marks: 2 },
            { label: "b", prompt: "Explain how the second paragraph is organised to make the request persuasive.", marks: 5 },
            { label: "c", prompt: "Write the opening two paragraphs of a formal letter to a local councillor asking for a skate park to be built in your town.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal letter", statement: "Address, date, formal greeting, purpose, paragraphs, matched sign-off." },
              { kind: "skill", name: "Organisation", statement: "Sequencing words and reasons help the reader follow the argument." },
            ],
            steps: [
              { part: "a", reasoning: "Sender's address and date at the top.", evidence: "14 Orchard Close", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Formal greeting and sign-off with name.", evidence: "Dear Mrs Okafor", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Sequencing word ‘First’ introduces the first reason.", evidence: "First, a later closing time", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "‘Furthermore’ adds a second reason, building the case.", evidence: "Furthermore, it would give coursework", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Each reason is linked to student needs, giving them weight.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Offering help shows reasonableness and makes the request more persuasive.", evidence: "I would be happy to help with a volunteer rota", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Form: address, date, greeting, purpose clear in the opening.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Formal tone and reasoned persuasion for a councillor.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Organisation, paragraphing and discourse markers.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accurate sentences, punctuation and spelling.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { part: "b", level: "Level 3", marks: "4-5", descriptor: "Clear, developed explanation of organisation, with well-chosen evidence." },
              { part: "b", level: "Level 2", marks: "2-3", descriptor: "Some explanation with some relevant references." },
              { part: "b", level: "Level 1", marks: "1", descriptor: "Simple, limited comment." },
              ...LONG_LEVELS("c"),
            ],
            finalAnswer: "(a) The address and date at the top; formal greeting and sign-off. (b) ‘First’ and ‘Furthermore’ sequence two reasons about student needs, and the offer of a rota shows reasonableness. (c) A formal letter with address, date, ‘Dear Councillor...’, a clear purpose and developed reasons in formal register.",
            commonErrors: ["Slang or contractions in a formal letter.", "No stated purpose in the first paragraph.", "Mismatched greeting and sign-off."],
          },
        },
      ],
    },
    {
      id: "el10-u2-tone-register",
      title: "Tone and register for audience",
      skill: "Match tone and register to audience and purpose, and keep them consistent.",
      lesson: {
        sections: [
          {
            heading: "Audience first",
            body: "Before writing, ask: who is reading, and what do I want them to do or feel? A headteacher expects **formal** language; a friend allows **informal** language; a teenage readership of a magazine might suit a **semi-formal**, lively tone. **AO4** rewards a tone that is secure and appropriate.",
          },
          {
            heading: "Controlling register",
            body: "Formal register uses full sentences, precise vocabulary, polite modal verbs (‘I would be grateful if...’) and avoids slang and contractions. Informal register uses contractions, colloquial words and exclamations. Compare ‘I am writing to express my concern’ with ‘You'll never guess what they've done’. Slipping between registers weakens a response.",
          },
          {
            heading: "Tone through word choice",
            body: "Tone also comes from vocabulary and sentence shape. Urgent tone: short sentences, imperatives. Reflective tone: longer sentences, softer verbs. Humorous tone: exaggeration and lively comparisons. Choose words that carry the tone you need.",
          },
        ],
        keyFormulas: [
          { name: "Formal", statement: "No slang or contractions; polite, precise phrasing: ‘I would be grateful if you would consider...’" },
          { name: "Informal", statement: "Contractions, colloquial words, friendly direct address." },
          { name: "Consistency", statement: "Keep one register throughout unless there is a clear reason to change." },
        ],
        workedExample: {
          problem: "Rewrite ‘The new lunch rules are totally mad and nobody likes them’ for a headteacher.",
          solution: "‘Many students feel that the new lunch arrangements are unreasonable and would welcome the opportunity to discuss them.’ Slang (‘totally mad’) becomes precise vocabulary (‘unreasonable’), the sweeping ‘nobody’ becomes the measured ‘many students’, and a polite offer to discuss replaces the complaint.",
        },
      },
      questions: [
        {
          id: "el10-u2-tone-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TONE_EXTRACT,
          stem: "Which word best describes the register of Opening A?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chatty" },
              { id: "b", text: "Aggressive" },
              { id: "c", text: "Humorous" },
              { id: "d", text: "Formal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal register", statement: "Polite, precise phrasing and no slang." }],
            steps: [{ reasoning: "‘I would be grateful if you would consider’ is polite and precise.", evidence: "I would be grateful if you would consider the points below", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(d)** Formal.",
            commonErrors: ["Choosing ‘aggressive’ because of the word ‘concern’.", "Confusing Opening A with Opening B."],
          },
        },
        {
          id: "el10-u2-tone-register-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite this sentence for a formal letter to a headteacher: ‘The canteen's rubbish and the queues are mental.’",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Register shift", statement: "Replace slang with precise, polite vocabulary." }],
            steps: [
              { reasoning: "Replaces slang words such as ‘rubbish’ and ‘mental’ with formal vocabulary such as ‘unsatisfactory’ and ‘excessively long’.", marks: 1, markCode: "AO4" },
              { reasoning: "Uses a complete, accurate formal sentence.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "The standard of the canteen is unsatisfactory and the queues are excessively long.",
            commonErrors: ["Keeping contractions or slang.", "Writing a rude but formal-sounding sentence."],
          },
        },
        {
          id: "el10-u2-tone-register-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: TONE_EXTRACT,
          stem: "Explain how the writer of each opening uses language to suit the audience. Refer to both openings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Register analysis", statement: "Link language choices to audience and purpose." }],
            steps: [
              { reasoning: "Opening A uses formal, polite phrasing for a headteacher.", evidence: "I would be grateful if you would", marks: 2, markCode: "AO4" },
              { reasoning: "Opening B uses contractions and colloquial words for a friend.", evidence: "You'll never guess", marks: 2, markCode: "AO4" },
              { reasoning: "Compares the effect: respect and seriousness versus closeness and informality.", evidence: "totally mad", marks: 2, markCode: "AO4" },
            ],
            levels: FORM_LEVELS,
            finalAnswer: "Opening A is formal and respectful, using polite modals; Opening B is informal and playful, using contractions and slang such as ‘totally mad’, which suits a friend.",
            commonErrors: ["Not mentioning the audience.", "Identifying only that one is ‘formal’ with no evidence."],
          },
        },
        {
          id: "el10-u2-tone-register-q4",
          difficulty: "challenge",
          totalMarks: 22,
          extract: TONE_EXTRACT,
          stem: "Use the two openings to answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two features of informal register in Opening B.", marks: 2 },
            { label: "b", prompt: "Rewrite Opening B as the opening of a formal email to the headteacher.", marks: 5 },
            { label: "c", prompt: "Write the opening of a magazine article for teenagers about the lunchtime changes. Use a lively but controlled tone.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Formal and informal registers use different vocabulary and sentence patterns." },
              { kind: "skill", name: "Audience awareness", statement: "Choose vocabulary and structures that suit readers and purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Contractions such as ‘You'll’.", evidence: "You'll never guess", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Colloquial words and exclamation: ‘totally mad’, ‘Hey Jess!’", evidence: "totally mad", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Appropriate formal greeting and purpose.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Slang replaced with precise vocabulary and no contractions.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Accurate punctuation and sentence structure.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Headline and engaging opening suited to teenagers.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Controlled, lively tone with direct address.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Varied vocabulary and sentence structures.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accurate spelling, punctuation and grammar.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { part: "b", level: "Level 3", marks: "4-5", descriptor: "Clear, consistent formal register with secure form features." },
              { part: "b", level: "Level 2", marks: "2-3", descriptor: "Some formal register; occasional slips." },
              { part: "b", level: "Level 1", marks: "1", descriptor: "Simple attempt, register inconsistent." },
              ...LONG_LEVELS("c"),
            ],
            finalAnswer: "(a) Contractions and slang. (b) ‘Dear Mrs Okafor, I am writing to express my concern about the recent lunchtime changes...’ (c) A headline and a lively but controlled opening that speaks directly to teenagers.",
            commonErrors: ["Mixing registers in (b).", "Very informal slang in (c) that loses control.", "No headline in (c)."],
          },
        },
      ],
    },
  ],
};

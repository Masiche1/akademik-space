import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mla3-u3-lesson-3-2",
  code: "3-2",
  title: "Register: Formal, Informal and Semi-Formal English",
  goal: "I CAN choose and use the correct register — formal, informal or semi-formal — for different audiences and purposes.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Register", definition: "The level of formality in language, chosen to fit the audience." },
    { term: "Formal", definition: "Polite, complete language for official or academic situations." },
    { term: "Informal", definition: "Casual language for friends and familiar situations." },
    { term: "Semi-formal", definition: "Middle ground — polite but not stiff, for clubs or acquaintances." },
    { term: "Audience", definition: "The person or people you are communicating with." },
  ],
  concepts: [
    {
      id: "mla3-u3-register-choices",
      title: "Choosing the right register",
      skill: "Match language formality to the audience and purpose of communication.",
      lesson: {
        sections: [
          {
            heading: "Three levels of register",
            body: "**Informal** (friends, texts): 'Hi! Can't make it, sorry!' — contractions, slang, casual. **Semi-formal** (club emails, acquaintances): 'Hello, I will not be able to attend...' — polite but not stiff. **Formal** (teachers, officials, exams): 'Dear Sir/Madam, I am writing to inform you...' — full forms, precise vocabulary, complete structure.",
          },
          {
            heading: "What changes with register?",
            body: "Formal English avoids contractions (use 'I am' not 'I'm'), uses full vocabulary ('request' not 'ask for'), longer sentences, and standard greetings/sign-offs ('Dear...Yours sincerely'). Informal English uses contractions, phrasal verbs, exclamations and casual sign-offs ('Bye', 'See ya'). The **content** stays the same — only the **style** changes.",
          },
          {
            heading: "Register in exams",
            body: "MYP writing tasks often specify the audience. A letter to a friend needs informal; a letter to a head teacher needs formal. Using the wrong register is a common error — it shows you did not understand the task's purpose. Always ask: 'Who will read this?' before choosing your language.",
          },
        ],
        keyFormulas: [
          { name: "Register scale", statement: "Informal (friends) → Semi-formal (acquaintances/clubs) → Formal (teachers/officials)" },
        ],
        workedExample: {
          problem: "You must write to your head teacher about a school trip problem. Which register?",
          solution: "Formal — head teacher is an authority figure; use 'Dear...', full forms, 'Yours sincerely'.",
        },
      },
      questions: [
        {
          id: "mla3-u3-register-choices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which greeting is most appropriate for a formal letter to a head teacher?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yo," },
              { id: "b", text: "Dear Head Teacher," },
              { id: "c", text: "Hey!" },
              { id: "d", text: "Hi there!" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal greetings", statement: "Formal letters use 'Dear [title/name],' not casual greetings." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Dear Head Teacher,' is the formal choice.", working: "Dear Head Teacher,", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Dear Head Teacher,",
            commonErrors: ["Using casual greetings for authority figures."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-register-choices-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Same Message, Different Register",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Version A (to friend): 'Hey! Can't make the party Saturday, sorry! Maybe next time?'\n\nVersion B (to organiser): 'Dear Ms Patel, I am afraid I will not be able to attend the party on Saturday due to a prior commitment. I apologise for any inconvenience. Yours sincerely, Alex.'",
          },
          stem: "What makes Version B more formal than Version A? List three differences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register features", statement: "Formal: full forms, precise words, complete sentences, formal greeting/sign-off." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — full forms ('I am afraid', 'will not') vs contractions ('can't').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — precise vocabulary ('prior commitment', 'inconvenience') vs casual ('sorry', 'maybe').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — formal greeting/sign-off ('Dear Ms Patel', 'Yours sincerely') vs ('Hey', none).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Full forms, precise vocabulary, formal greeting/sign-off.",
            commonErrors: ["Listing content differences instead of style differences."],
            examinerNote: "Three distinct register features needed.",
          },
        },
        {
          id: "mla3-u3-register-choices-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert this informal message to semi-formal English for a club email: 'Hey, I can't make the meeting tmrw, got stuff on. Sorry!'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register conversion", statement: "Semi-formal: polite full forms, no slang, but not overly stiff." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — greeting 'Hello' or 'Hi [name],' (not 'Hey').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — full forms: 'I will not be able to attend' instead of 'can't make'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — no slang ('tmrw', 'stuff on') — use 'tomorrow', 'a prior commitment'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — meaning preserved (absence + apology).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Hello, I am sorry but I will not be able to attend tomorrow's meeting due to a prior commitment. Kind regards, [name]'",
            commonErrors: ["Keeping abbreviations or slang."],
            examinerNote: "Must remove all informal features.",
          },
        },
        {
          id: "mla3-u3-register-choices-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the same message (apologising for missing an event) in three registers.",
          parts: [
            { label: "a", prompt: "Informal version for a close friend.", marks: 2 },
            { label: "b", prompt: "Semi-formal version for a club acquaintance.", marks: 3 },
            { label: "c", prompt: "Formal version for a teacher or official.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register spectrum", statement: "Same content, three different styles." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — informal uses contractions/slang appropriately.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — casual but correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — semi-formal polite but not stiff.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — full forms, appropriate greeting/sign-off.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — no slang or contractions.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — formal uses complete structure.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — 'Dear...Yours sincerely' + precise vocabulary.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — all three convey the same meaning.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Three register versions of the same apology.",
            commonErrors: ["Same register for all three.", "Formal version with contractions."],
            examinerNote: "Clear register contrast is essential.",
          },
        },
        {
          id: "mla3-u3-register-choices-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which register fits an email to a school club you just joined?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal — 'Dear Sir/Madam ... Yours faithfully'" },
              { id: "b", text: "Informal — 'Hey guys!!" },
              { id: "c", text: "Semi-formal — 'Hello, ... Kind regards'" },
              { id: "d", text: "Any register is fine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register scale", statement: "Clubs/acquaintances = semi-formal." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — clubs need polite but not stiff = semi-formal.", working: "semi-formal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Semi-formal — 'Hello, ... Kind regards'",
            commonErrors: ["Choosing informal for an organised group."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u3-register-choices-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which greeting fits a text message to a close friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours sincerely," },
              { id: "b", text: "Dear Friend," },
              { id: "c", text: "To whom it may concern," },
              { id: "d", text: "Hey!" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal greetings", statement: "Friends get 'Hey', 'Hi', casual openers." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hey!' is informal for friends.", working: "Hey!", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Hey!",
            commonErrors: ["Using formal greetings with friends."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u3-register-choices-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Three Messages",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "M1: 'Yo, u coming tonight?'\nM2: 'Hello, I would like to confirm my attendance at Friday's meeting. Kind regards.'\nM3: 'Hi Sam, are we still on for lunch? Let me know!'",
          },
          stem: "Which message is in SEMI-FORMAL register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "M1" },
              { id: "b", text: "All three" },
              { id: "c", text: "M2" },
              { id: "d", text: "M3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semi-formal features", statement: "Polite full forms + friendly but not stiff." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — M2 is polite and complete but not overly official.", working: "M2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** M2",
            commonErrors: ["Confusing M2 with fully formal."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-register-choices-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "When converting a message from informal to formal, what stays the SAME?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The meaning and content" },
              { id: "b", text: "The greeting" },
              { id: "c", text: "The slang words" },
              { id: "d", text: "The contractions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Register conversion", statement: "Content stays; style changes." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — meaning preserved; only style changes.", working: "meaning stays", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The meaning and content",
            commonErrors: ["Thinking the message must change meaning."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla3-u3-register-choices-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Register Mismatch",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Email to the head teacher: 'Hey! I can't make the meeting tmrw, got stuff on. Sorry! Bye, Alex'",
          },
          stem: "What is the problem with this email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too long" },
              { id: "b", text: "It uses too many full forms" },
              { id: "c", text: "It has no meaning" },
              { id: "d", text: "The register is wrong — too casual for a head teacher" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register mismatch", statement: "Authority figures need formal language." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Hey', 'can't', 'tmrw', 'Bye' too casual for head teacher.", working: "wrong register", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The register is wrong — too casual for a head teacher",
            commonErrors: ["Not connecting register to audience."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-register-choices-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Convert this to formal English: 'I'm gonna be late, sorry!'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I will be late, sorry!" },
              { id: "b", text: "I'm gonna be late, sorry!" },
              { id: "c", text: "I am afraid I will be delayed. I apologise for any inconvenience." },
              { id: "d", text: "Late sorry!" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal conversion", statement: "Full forms + polite phrasing replace slang." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — C removes all informal features.", working: "formal version", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** I am afraid I will be delayed. I apologise for any inconvenience.",
            commonErrors: ["Keeping 'sorry' or exclamation."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u3-register-choices-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Formal Features",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Dear Mr Jones, I am writing to confirm that I will attend the meeting on Monday at 14:00. I look forward to seeing you there. Yours sincerely, Kim.",
          },
          stem: "How many formal features can you identify in this message? (greeting, full forms, sign-off, precise time)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal features", statement: "Dear + title, full forms, precise details, Yours sincerely." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Dear Mr Jones, I am writing (full form), 14:00 (precise), Yours sincerely = 4.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting each sentence as a feature."],
            examinerNote: "Count distinct formal features.",
          },
        },
        {
          id: "mla3-u3-register-choices-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Informal Text",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Hey! Can't make it tmrw, got stuff on. Maybe next time? See ya!",
          },
          stem: "How many informal features appear? (greeting, abbreviations, slang, casual sign-off)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal features", statement: "Hey, can't, tmrw, stuff on, See ya = informal markers." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Hey', 'can't', 'tmrw'/'stuff on', 'See ya' = 4 informal features.", working: "4", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — no formal features present.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting 'Maybe' as informal — it is neutral."],
            examinerNote: "Count clear informal markers.",
          },
        },
        {
          id: "mla3-u3-register-choices-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a semi-formal greeting and sign-off you could use in an email to a club.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semi-formal markers", statement: "'Hello'/'Hi [name]' + 'Kind regards'/'Best wishes'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — semi-formal greeting used.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — semi-formal sign-off used.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hello,' + 'Kind regards,'",
            commonErrors: ["Using 'Hey' or 'Yours faithfully'."],
            examinerNote: "Must be middle register.",
          },
        },
        {
          id: "mla3-u3-register-choices-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert this informal message to semi-formal English for a club email: 'Hey, I can't make the meeting tmrw, got stuff on. Sorry!'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register conversion", statement: "Semi-formal: polite full forms, no slang, friendly but not stiff." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — greeting changed from 'Hey' to 'Hello'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — full forms replace 'can't', 'tmrw', 'stuff on'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — meaning preserved (absence + apology).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Hello, I am sorry but I will not be able to attend tomorrow's meeting due to a prior commitment. Kind regards, [name]'",
            commonErrors: ["Keeping abbreviations."],
            examinerNote: "All informal features removed.",
          },
        },
        {
          id: "mla3-u3-register-choices-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Exam Task",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Task: Write to the head teacher to complain about the school canteen food.",
          },
          stem: "Which register should you use and why? List three language features you would include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Register for purpose", statement: "Authority figure + complaint = formal register." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — formal register chosen (head teacher = authority).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — reason given (respect + appropriate for complaint).", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — three formal features listed (Dear, full forms, Yours sincerely).", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explanation clear and logical.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Formal — head teacher needs respect; features: Dear, full forms, Yours sincerely.",
            commonErrors: ["Choosing informal 'because it is easier'."],
            examinerNote: "Must justify + list features.",
          },
        },
        {
          id: "mla3-u3-register-choices-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the same message (you cannot attend a club event) in three registers.",
          parts: [
            { label: "a", prompt: "Informal version for a close friend.", marks: 2 },
            { label: "b", prompt: "Semi-formal version for a club acquaintance.", marks: 2 },
            { label: "c", prompt: "Formal version for the event organiser.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register spectrum", statement: "Same content, three different styles." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — informal uses contractions/slang.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — casual but correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — semi-formal polite but not stiff.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — full forms + appropriate greeting/sign-off.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — formal complete structure.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — Dear...Yours sincerely + precise vocabulary.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three register versions of the same message.",
            commonErrors: ["Same register for all three."],
            examinerNote: "Clear contrast essential.",
          },
        },
      ],
    },
    {
      id: "mla3-u3-intercultural-empathy",
      title: "Intercultural empathy and stereotypes",
      skill: "Recognise stereotypes, practise empathy and communicate respectfully across cultures.",
      lesson: {
        sections: [
          {
            heading: "What is a stereotype?",
            body: "A **stereotype** is a fixed, often wrong idea about a group: 'All British people love tea', 'All Americans are loud'. Stereotypes are dangerous because they replace real knowledge of individuals with a generalisation. Every person is different — culture is complex, not simple.",
          },
          {
            heading: "Empathy in communication",
            body: "**Empathy** means trying to understand how someone else feels. When communicating across cultures: listen before judging, ask questions instead of assuming, and remember that your own customs are not the only 'normal' ones. 'That's interesting — tell me more' is more empathetic than 'That's weird'.",
          },
          {
            heading: "Avoiding cultural mistakes",
            body: "Common mistakes: assuming everyone celebrates the same festivals, using gestures that mean different things in different cultures, or speaking loudly because you think English needs it. When unsure, **ask politely**: 'Is it OK to...?'. Most people appreciate the effort to be respectful.",
          },
        ],
        keyFormulas: [
          { name: "Empathy practices", statement: "Listen, ask politely, avoid assumptions, don't judge differences" },
        ],
        workedExample: {
          problem: "A classmate says 'All students from Japan are good at maths.' Is this a stereotype? Why?",
          solution: "Yes — it generalises a whole group. Some Japanese students may be good at maths, but not all, and individual ability varies.",
        },
      },
      questions: [
        {
          id: "mla3-u3-intercultural-empathy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stereotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A language learning method" },
              { id: "b", text: "A true fact about a culture" },
              { id: "c", text: "A type of festival" },
              { id: "d", text: "A fixed, often wrong generalisation about a group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype", statement: "A fixed generalisation about a group, often inaccurate." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — stereotype = fixed generalisation.", working: "fixed generalisation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A fixed, often wrong generalisation about a group",
            commonErrors: ["Thinking stereotypes are always accurate."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a stereotype and explain why it is wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Stereotype awareness", statement: "Stereotypes generalise groups; individuals vary." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — gives a real stereotype example.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explains it generalises and ignores individual differences.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, accurate explanation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'All British people love tea' — wrong because individuals vary; many don't drink tea.",
            commonErrors: ["Example that is actually true for everyone."],
            examinerNote: "Must show why the generalisation fails.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Meeting a New Student",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "A new student, Priya, joins your class from India. She wears a sari to school and brings vegetarian food for lunch. Some classmates stare and whisper. Priya looks uncomfortable.",
          },
          stem: "What is happening here, and what should you do? Explain using empathy and respect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural empathy", statement: "Differences are normal; staring/judging hurts; inclusion helps." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — classmates are reacting negatively to cultural differences.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — sit with Priya, be friendly, ask about her culture politely.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — explain that sari and vegetarian food are normal cultural practices.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, empathetic explanation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Classmates are judging differences; you should include Priya, ask politely, and explain these are normal customs.",
            commonErrors: ["Ignoring the situation or joining the whispers."],
            examinerNote: "Must include a concrete action + reason.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short 'Respect Guide' for new students about communicating across cultures.",
          parts: [
            { label: "a", prompt: "Write two things NOT to do (stereotyping, assuming).", marks: 2 },
            { label: "b", prompt: "Write three things TO do (listen, ask, include).", marks: 3 },
            { label: "c", prompt: "Write one sentence explaining why cultural differences should be respected.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural guide", statement: "Avoid stereotypes/assumptions; practise empathy and inclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two valid 'don'ts' (don't stereotype, don't assume).", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — clear, correct sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three valid 'do's' (listen, ask, include).", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — each advice item clear.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — sentence shows genuine understanding of respect.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — well-formed, accurate sentence.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — sentence is clear and appropriate for a guide.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 don'ts + 3 do's + 1 respect sentence.",
            commonErrors: ["Vague advice ('be nice') without specifics."],
            examinerNote: "Advice must be specific and intercultural.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a STEREOTYPE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He speaks three languages." },
              { id: "b", text: "My friend from Spain loves football." },
              { id: "c", text: "She eats rice for lunch." },
              { id: "d", text: "All Spanish people are lazy." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stereotype", statement: "Fixed generalisation about a whole group." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'All Spanish people are lazy' generalises a group.", working: "all Spanish people", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** All Spanish people are lazy.",
            commonErrors: ["Choosing a fact about one person."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'empathy' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trying to understand how someone else feels" },
              { id: "b", text: "Copying someone's culture" },
              { id: "c", text: "Agreeing with everyone" },
              { id: "d", text: "Judging other cultures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empathy", statement: "Understanding another person's feelings and perspective." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — empathy = understanding others' feelings.", working: "understand feelings", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Trying to understand how someone else feels",
            commonErrors: ["Confusing empathy with agreement."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A classmate wears traditional clothing to school. Which response shows EMPATHY?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Why do you dress like that?" },
              { id: "b", text: "You should dress normally." },
              { id: "c", text: "That's interesting — tell me more about it." },
              { id: "d", text: "That looks weird." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Empathetic responses", statement: "'That's interesting, tell me more' respects and learns." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — B shows curiosity and respect.", working: "tell me more", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** That's interesting — tell me more about it.",
            commonErrors: ["Choosing a judgemental response."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question is best when you are unsure about someone's cultural custom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You must change it." },
              { id: "b", text: "Why do you do it like that? (impatiently)" },
              { id: "c", text: "That's strange." },
              { id: "d", text: "Is it OK if I...?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Polite cultural questions", statement: "Ask politely: 'Is it OK to...?'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite permission question respects the custom.", working: "Is it OK if I...?", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(d)** Is it OK if I...?",
            commonErrors: ["Choosing a demanding or judgemental option."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Classroom Chat",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "Student: 'All kids from Japan are genius at maths, right?'",
          },
          stem: "What is wrong with this statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it is a fact" },
              { id: "b", text: "It is a stereotype — it generalises a whole group and ignores individual differences" },
              { id: "c", text: "It uses the wrong tense" },
              { id: "d", text: "It is too polite" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Stereotype recognition", statement: "'All [group] are...' generalises and stereotypes." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'All kids from Japan' is a generalisation.", working: "stereotype", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is a stereotype — it generalises a whole group and ignores individual differences",
            commonErrors: ["Not recognising 'all' as a generalisation marker."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the BEST way to learn about another culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume you already know" },
              { id: "b", text: "Ask people from that culture politely and listen" },
              { id: "c", text: "Judge by one example" },
              { id: "d", text: "Read stereotypes online" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Learning about cultures", statement: "Ask + listen beats assuming or judging." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — asking and listening gives real knowledge.", working: "ask + listen", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Ask people from that culture politely and listen",
            commonErrors: ["Choosing assumption over curiosity."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Generalisation Spotter",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "People say 'All British people drink tea'. Actually, many do not. Also, 'All Americans are loud' is not true for everyone. Culture is more complex than these ideas suggest.",
          },
          stem: "How many stereotypes are quoted in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stereotype counting", statement: "Each 'All [group]...' generalisation is a stereotype." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'All British people drink tea' + 'All Americans are loud' = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'Culture is complex' as a stereotype."],
            examinerNote: "Count quoted generalisations.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Respect Guide Draft",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Don't: don't stereotype people, don't assume everyone celebrates the same festivals. Do: listen carefully, ask polite questions, invite others to share their customs.",
          },
          stem: "How many 'don't' items are listed? How many 'do' items are listed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting advice", statement: "Count items under each heading." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Don't: stereotype + assume = 2.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Do: listen + ask + invite = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 don'ts; 3 do's.",
            commonErrors: ["Merging 'don't' items with 'do' items."],
            examinerNote: "Count per category.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain in one sentence what empathy means when talking to someone from another culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Empathy", statement: "Understanding and respecting the other person's feelings and customs." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — explains empathy correctly.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, correct sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Empathy means trying to understand how they feel and respecting their customs.'",
            commonErrors: ["Defining it as agreement or copying."],
            examinerNote: "Must relate to cultural context.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A classmate says 'Your food sounds weird.' How should you respond respectfully? Give two possible responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Respectful response", statement: "Correct 'weird' politely; share positively; invite curiosity." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite correction of 'weird'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — positive framing / invitation to try.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — both responses grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'It's not weird — it's just different! It's delicious. Would you like to try some?'",
            commonErrors: ["Agreeing it is weird or getting angry."],
            examinerNote: "Two distinct respectful responses.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Cultural Moment",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "During lunch, a new student won't eat the school food because it contains pork, which her religion forbids. Some students laugh and say she is 'fussy'. She looks upset.",
          },
          stem: "What is happening, and what should you do? Explain using empathy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural empathy", statement: "Dietary rules are religious/cultural; laughing hurts; inclusion helps." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — identifies the issue: religious dietary rule + students laughing.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — suggests action: sit with her, explain to others, don't laugh.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — explains why laughing is wrong (respect).", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, empathetic explanation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "She's following a religious rule; you should include her, stop the laughing, and explain it is normal.",
            commonErrors: ["Ignoring the situation."],
            examinerNote: "Must include action + reason.",
          },
        },
        {
          id: "mla3-u3-intercultural-empathy-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short 'Respect Guide' for new students about communicating across cultures.",
          parts: [
            { label: "a", prompt: "Write two things NOT to do (stereotyping, assuming).", marks: 2 },
            { label: "b", prompt: "Write three things TO do (listen, ask, include).", marks: 2 },
            { label: "c", prompt: "Write one sentence explaining why cultural differences should be respected.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural guide", statement: "Avoid stereotypes/assumptions; practise empathy and inclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two valid 'don'ts'.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — clear, correct sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three valid 'do's'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — each advice item clear.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — genuine understanding of respect.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — well-formed, appropriate sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 don'ts + 3 do's + 1 respect sentence.",
            commonErrors: ["Vague advice without specifics."],
            examinerNote: "Advice must be specific and intercultural.",
          },
        },
      ],
    },
  ],
};

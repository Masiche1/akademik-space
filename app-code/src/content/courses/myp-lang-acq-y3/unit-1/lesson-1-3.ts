import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mla3-u1-lesson-1-3",
  code: "1-3",
  title: "Inferring Tone and Attitude in Texts",
  goal: "I CAN identify the tone of a text (formal, informal, serious, humorous) and infer the writer's or speaker's attitude from word choice and structure.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Tone", definition: "The attitude or mood of a text — how it 'sounds' to the reader." },
    { term: "Formal", definition: "Serious, polite language used in official or academic situations." },
    { term: "Informal", definition: "Relaxed, casual language used with friends." },
    { term: "Sarcasm", definition: "Saying the opposite of what you mean, often to be funny or critical." },
    { term: "Emphasis", definition: "Words or punctuation that make something seem more important." },
  ],
  concepts: [
    {
      id: "mla3-u1-tone-formal-informal",
      title: "Formal versus informal tone",
      skill: "Distinguish formal and informal language and explain how word choice creates tone.",
      lesson: {
        sections: [
          {
            heading: "Two ends of the tone scale",
            body: "**Formal** English uses complete sentences, precise vocabulary and no contractions: 'I am writing to inform you that...'. **Informal** English uses contractions, slang and short forms: 'Hey! Just letting you know...'. The same message can be formal or informal depending on who you are writing to — a teacher or a friend.",
          },
          {
            heading: "Clues to tone",
            body: "Look for: **contractions** (don't, can't = informal), **slang** (gonna, awesome = informal), **greetings** ('Dear Sir' = formal; 'Hi' = informal), **punctuation** (exclamation marks and emojis = informal), and **sentence length** (long complex sentences = formal; short and direct = informal).",
          },
          {
            heading: "Why tone matters",
            body: "Tone affects how your message is received. 'Please submit your essay by Friday' (formal) suits a teacher; 'Send me your essay by Friday!' (informal) suits a friend. In exams, matching your tone to the task is part of doing the task well — a formal letter needs formal language.",
          },
        ],
        keyFormulas: [
          { name: "Tone clues", statement: "Contractions + slang + exclamation = informal; full forms + precise words + Dear Sir = formal" },
        ],
        workedExample: {
          problem: "Which is more formal: 'I am writing to request leave' or 'Hey, I need a day off'?",
          solution: "'I am writing to request leave' — full forms, no contractions, precise vocabulary = formal.",
        },
      },
      questions: [
        {
          id: "mla3-u1-tone-formal-informal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is more formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am writing to inform you..." },
              { id: "b", text: "Gonna see ya!" },
              { id: "c", text: "Hey, what's up?" },
              { id: "d", text: "Cool, innit?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal register", statement: "Full forms, precise vocabulary and complete sentences signal formal tone." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'I am writing to inform you' is formal; others are slang/informal.", working: "I am writing to inform you", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** I am writing to inform you...",
            commonErrors: ["Choosing slang because it sounds 'nicer'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Message A: 'Dear Mr Johnson, I am writing to request permission to leave early on Friday. Yours sincerely, Tom Baker.'\n\nMessage B: 'Hey Mr J! Can I bail early Friday? Cheers, Tom'",
          },
          stem: "Which message is formal and which is informal? Give one reason for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register markers", statement: "Dear Sir/Yours sincerely/full forms = formal; Hey/Cheers/slang = informal." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — A is formal: 'Dear Mr Johnson', 'Yours sincerely', full forms.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — B is informal: 'Hey', 'bail', 'Cheers', contractions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A = formal (Dear/Yours sincerely/full forms); B = informal (Hey/Cheers/slang).",
            commonErrors: ["Identifying tone without citing features."],
            examinerNote: "Reason must cite a language feature.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this informal message in formal English: 'Hey Sam, can't make it to your party Saturday, sorry! Maybe next time?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register conversion", statement: "Formal: Dear + full forms + polite phrasing + Yours sincerely." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — formal greeting 'Dear Sam,' or 'Dear Sam'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — full forms: 'I am unable to attend' / 'I will not be able to come'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — polite apology + sign-off.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — meaning preserved (can't attend + apology + future).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Dear Sam, I am sorry but I will not be able to attend your party on Saturday. Perhaps we can meet another time. Yours sincerely, [name]'",
            commonErrors: ["Keeping slang ('bail', 'gonna') in the formal version."],
            examinerNote: "Must genuinely change register, not just punctuation.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You need to write the same message to two different people.",
          parts: [
            { label: "a", prompt: "Write an informal version to a friend: you can't come to their party.", marks: 3 },
            { label: "b", prompt: "Write a formal version to the party organiser (a teacher).", marks: 3 },
            { label: "c", prompt: "Explain in two sentences what makes each version appropriate for its audience.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience-appropriate register", statement: "Friends get informal language; teachers/officials get formal language." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — informal version uses contractions/slang appropriately.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct informal grammar and punctuation.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — friendly tone.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — formal version uses full forms and polite phrasing.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct formal structure (Dear...Yours sincerely).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — no slang or contractions.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — explains register choice: friend vs teacher audience.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — explanation is clear and accurate.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Informal + formal versions + audience explanation.",
            commonErrors: ["Same register for both — no contrast.", "Formal version still containing slang."],
            examinerNote: "The contrast between versions is the key skill.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature most strongly signals INFORMAL English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Dear Sir'" },
              { id: "b", text: "Long complex sentences" },
              { id: "c", text: "Contractions like 'can't' and 'gonna'" },
              { id: "d", text: "'Yours sincerely'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone clues", statement: "Contractions, slang and exclamations signal informal register." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'can't'/'gonna' are informal markers.", working: "contractions + slang", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Contractions like 'can't' and 'gonna'",
            commonErrors: ["Choosing formal features."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which greeting would you use at the start of a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yo!" },
              { id: "b", text: "Dear Mr Smith," },
              { id: "c", text: "What's up?" },
              { id: "d", text: "Hey there!" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal greetings", statement: "Formal letters use 'Dear [title/name],'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Dear Mr Smith,' is the formal greeting.", working: "Dear Mr Smith,", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Dear Mr Smith,",
            commonErrors: ["Choosing casual greetings."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Notes",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Note A: 'Hi Jake, don't forget football practice tmrw at 4! Bring your kit.'\n\nNote B: 'Dear Mr Adams, I am writing to inform you that I will be unable to attend football practice tomorrow at 16:00 due to a medical appointment. Yours sincerely, Lee.'",
          },
          stem: "Which note is written in informal English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are informal" },
              { id: "b", text: "Note B" },
              { id: "c", text: "Neither is informal" },
              { id: "d", text: "Note A" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register markers", statement: "'Hi', 'don't', 'tmrw', 'kit' = informal; 'Dear', full forms, 'Yours sincerely' = formal." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Note A uses casual words and contractions.", working: "Note A", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Note A",
            commonErrors: ["Choosing Note B because it is longer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Register Match",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Message: 'Please be advised that the library will close early on Friday. Students are requested to return all books by 15:00.'",
          },
          stem: "This message is written in which register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal" },
              { id: "b", text: "Slang" },
              { id: "c", text: "Semi-formal" },
              { id: "d", text: "Informal" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal announcements", statement: "'Please be advised', 'are requested', precise times = formal." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — official phrasing and no contractions = formal.", working: "formal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Formal",
            commonErrors: ["Choosing semi-formal — this is an official notice."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Same Request, Two Ways",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Version 1: 'Can you send me the file when u get a sec?'\n\nVersion 2: 'Could you please send me the file at your earliest convenience?'",
          },
          stem: "Which version would you send to your teacher, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither — both are too formal" },
              { id: "b", text: "Version 1 — it is friendlier" },
              { id: "c", text: "Version 2 — it uses polite, full forms appropriate for a teacher" },
              { id: "d", text: "Either — they mean the same thing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience-appropriate register", statement: "Teachers need polite full forms; 'u' and 'sec' are too casual." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Version 2 is polite and complete; Version 1 uses texting abbreviations.", working: "Version 2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Version 2 — polite, full forms for a teacher",
            commonErrors: ["Saying meaning is the same — register still matters."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Work Emails",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Email A (to classmate): 'Hey, did u finish the chem homework? Send it over when u can!'\n\nEmail B (to teacher): 'Dear Ms Rao, I am writing to ask whether it would be possible to submit my chemistry homework tomorrow. I apologise for the delay. Yours sincerely, Dan.'",
          },
          stem: "List two features that make Email B formal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal email features", statement: "'Dear', full forms ('I am writing'), polite phrasing, 'Yours sincerely'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — feature 1: formal greeting 'Dear Ms Rao'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — feature 2: full forms and polite request / 'Yours sincerely'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'Dear Ms Rao' + 'I am writing to ask' + 'Yours sincerely'.",
            commonErrors: ["Listing content (homework) instead of style features."],
            examinerNote: "Two distinct formal features.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this informal sentence in formal English: 'Hey, I can't make the meeting tmrw, got stuff on.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register conversion", statement: "Remove slang, abbreviations and contractions; use full polite forms." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — formal greeting or polite opening.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — full forms replace 'can't', 'tmrw', 'stuff on'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I am sorry, but I will not be able to attend tomorrow's meeting due to a prior commitment.'",
            commonErrors: ["Keeping 'can't' or 'tmrw'."],
            examinerNote: "All informal features must go.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Here is a formal sentence: 'I am writing to request an extension for my essay.' Rewrite it informally for a friend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register conversion (reverse)", statement: "Informal: contractions, casual words, relaxed tone — meaning stays the same." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — casual phrasing introduced.", working: "Hey / sorry / can't", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — meaning preserved (requesting more time for essay).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — genuinely informal, not just shorter.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'Hey, can I have a few more days for my essay? Sorry!'",
            commonErrors: ["Keeping formal words like 'request an extension'."],
            examinerNote: "Must actually change register, not just shorten.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q13",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Message to Class",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Message from teacher: 'Dear students, I am writing to inform you that the school trip has been moved from Tuesday to Thursday. Please bring your permission forms on Thursday morning. Thank you for your cooperation. Yours sincerely, Mr Cole.'",
          },
          stem: "Rewrite this message informally for a class WhatsApp group.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal to informal", statement: "WhatsApp class group = casual: 'Hi everyone', contractions, relaxed tone." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — casual greeting ('Hi everyone' / 'Hey').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — key information kept: trip moved Tuesday→Thursday, bring forms.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — contractions/casual language used appropriately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — meaning preserved accurately.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'Hi everyone! The school trip is now on Thursday, not Tuesday. Don't forget your permission forms on Thursday morning. Thanks!'",
            commonErrors: ["Losing the Thursday change or the forms detail."],
            examinerNote: "Both facts must survive the rewrite.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain in your own words: why does the same message need different registers for different readers? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Register and audience", statement: "The reader decides the register — wrong register can seem rude or odd." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — explains register matches the relationship/audience.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — gives a concrete example (friend vs teacher).", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear and logical.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — accurate, well-formed sentences.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Register fits the reader: friends get casual language, teachers/officials get polite full forms; wrong register seems rude or cold.",
            commonErrors: ["Answering 'because it is a rule' without explaining why."],
            examinerNote: "Needs reasoning, not just a rule statement.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Spot the Register",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Line 1: 'Gonna be late, sorry!'\nLine 2: 'I will be approximately fifteen minutes late. I apologise for any inconvenience.'\nLine 3: 'be there in 5, k?'",
          },
          stem: "How many of the three lines are written informally?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register identification", statement: "Slang, contractions and abbreviations mark informal lines." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Line 1 ('Gonna', 'sorry!') and Line 3 ('5', 'k?') are informal; Line 2 is formal = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting Line 2 as informal because it is about lateness."],
            examinerNote: "Judge the language, not the message.",
          },
        },
        {
          id: "mla3-u1-tone-formal-informal-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a message about a cancelled sports day, then convert it to the other register.",
          parts: [
            { label: "a", prompt: "Write the informal version for friends.", marks: 2 },
            { label: "b", prompt: "Write the formal version for parents.", marks: 2 },
            { label: "c", prompt: "List three features you changed between the versions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register contrast", statement: "Same content, different style: casual vs polite full forms." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — informal uses contractions, casual words, friendly tone.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — message clear and correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — formal uses full forms, polite phrasing, appropriate greeting/sign-off.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — no slang or contractions remain.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — three real differences identified (greeting, contractions, sign-off etc.).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — differences accurately described.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Informal + formal versions + 3 feature changes.",
            commonErrors: ["Identical versions — no real register change."],
            examinerNote: "The contrast is the assessed skill.",
          },
        },
      ],
    },
    {
      id: "mla3-u1-tone-inference",
      title: "Inferring attitude and emphasis",
      skill: "Identify how emphasis, word choice and punctuation reveal a speaker's or writer's attitude.",
      lesson: {
        sections: [
          {
            heading: "Emphasis changes meaning",
            body: "The same words can mean different things with different emphasis: 'I **didn't** say he was wrong' (someone else did) vs 'I didn't say **he** was wrong' (someone else was wrong). Exclamation marks add strong feeling: 'What a goal!' = excitement. ALL CAPS or repeated letters ('soooo') show intensity in informal texts.",
          },
          {
            heading: "Reading attitude from choices",
            body: "A writer's attitude shows in word choice: 'The film was **entertaining**' (positive) vs 'The film was **predictable**' (negative). Strong adjectives (amazing, awful, brilliant, disgusting) reveal feeling. Neutral reporting uses facts: 'The film lasted two hours.'",
          },
          {
            heading: "Sarcasm and irony",
            body: "**Sarcasm** says the opposite of what is meant: 'Oh great, another rainy day' when you are unhappy about rain. It is hard to detect in writing — look for exaggeration, tone mismatch, or an obvious contradiction. If someone writes 'What a wonderful homework assignment!' after complaining, they probably mean the opposite.",
          },
        ],
        keyFormulas: [
          { name: "Attitude clues", statement: "Strong adjectives + exclamation + exaggeration = attitude; neutral facts = no attitude" },
        ],
        workedExample: {
          problem: "Text: 'Another assembly. How exciting.' — is the writer excited?",
          solution: "Probably not — 'How exciting' after 'another assembly' sounds sarcastic; the writer is likely bored.",
        },
      },
      questions: [
        {
          id: "mla3-u1-tone-inference-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an exclamation mark usually add to a sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong feeling or emphasis" },
              { id: "b", text: "A list" },
              { id: "c", text: "Neutral information" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exclamation marks", statement: "They add strong feeling or emphasis." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — exclamation = strong feeling.", working: "strong feeling", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Strong feeling or emphasis",
            commonErrors: ["Thinking it marks a question."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Reviews",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Review 1: 'The new restaurant was absolutely amazing! The food was delicious and the service was wonderful.'\n\nReview 2: 'The restaurant was OK. The food was fine but nothing special. We probably won't go back.'",
          },
          stem: "What is each reviewer's attitude? Use one adjective for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude from word choice", statement: "Strong positive adjectives = enthusiastic; 'OK/fine/nothing special' = unimpressed." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Review 1: very positive (amazing, delicious, wonderful).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Review 2: unimpressed/negative (OK, nothing special, won't return).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — one adjective given for each.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Review 1: enthusiastic/positive; Review 2: unimpressed/negative.",
            commonErrors: ["Missing the contrast between the two."],
            examinerNote: "Adjectives must reflect actual attitude.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read this sentence: 'What a brilliant idea — cancel the school trip because of a little rain.' What does the writer really think? Explain how you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sarcasm detection", statement: "Exaggeration + 'brilliant' after a negative event = sarcasm." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — writer probably thinks cancelling is a bad idea.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — clue 1: 'brilliant' is exaggerated praise.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — clue 2: 'a little rain' minimises the reason — dismissive tone.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — sarcasm identified and explained.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "They disagree with cancelling — 'brilliant' + 'a little rain' show sarcasm/criticism.",
            commonErrors: ["Taking 'brilliant' literally."],
            examinerNote: "Must identify sarcasm, not just opinion.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Text Messages",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Text 1: 'Are you coming to the match on Saturday? It's gonna be amazing!! Don't be late!!!'\n\nText 2: 'Dear Alex, I am writing to confirm that I will attend the football match on Saturday at 14:00. Kind regards, Sam.'",
          },
          stem: "Read the two texts and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify the tone of each text (informal/formal).", marks: 2 },
            { label: "b", prompt: "Give two language clues that show Text 1's tone.", marks: 2 },
            { label: "c", prompt: "Give two language clues that show Text 2's tone.", marks: 2 },
            { label: "d", prompt: "Rewrite Text 1 in formal English.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tone identification", statement: "Slang/exclamation = informal; full forms/precision = formal." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — Text 1 informal; Text 2 formal.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — both correctly identified.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — clues: 'gonna', 'amazing!!', 'Don't be late!!!' exclamation, slang.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two distinct informal features cited.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — clues: 'Dear Alex', 'I am writing to confirm', 'Kind regards', precise time.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — two distinct formal features cited.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — formal rewrite uses full forms and polite structure.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — no slang/exclamation marks remain.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Text 1 informal (gonna, !!), Text 2 formal (Dear, confirm, Kind regards) + formal rewrite.",
            commonErrors: ["Not citing specific features.", "Formal rewrite still containing slang."],
            examinerNote: "Clues must be quoted from the texts.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sarcasm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaking very quietly" },
              { id: "b", text: "Saying the opposite of what you mean, often to criticise" },
              { id: "c", text: "Saying exactly what you mean" },
              { id: "d", text: "Using very formal language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sarcasm", statement: "Saying the opposite of what is meant, often to be funny or critical." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sarcasm = opposite meaning.", working: "opposite of what you mean", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Saying the opposite of what you mean, often to criticise",
            commonErrors: ["Thinking sarcasm is just rudeness."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence shows a POSITIVE attitude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The film was boring and too long." },
              { id: "b", text: "The film was a waste of time." },
              { id: "c", text: "The film was OK, I suppose." },
              { id: "d", text: "The film was absolutely brilliant!" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Attitude adjectives", statement: "Strong positive adjectives like 'brilliant' signal positive attitude." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'absolutely brilliant' + exclamation = strong positive.", working: "brilliant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The film was absolutely brilliant!",
            commonErrors: ["Choosing 'OK' — that is neutral, not positive."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Holiday Review",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The hotel was clean but the staff were rude. The food was tasteless and the room was tiny. Honestly, I would not recommend this place to anyone.",
          },
          stem: "What is the reviewer's attitude towards the hotel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative" },
              { id: "b", text: "Very positive" },
              { id: "c", text: "Confused" },
              { id: "d", text: "Neutral" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude from word choice", statement: "'Rude', 'tasteless', 'tiny', 'would not recommend' = negative." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — multiple negative adjectives + 'would not recommend'.", working: "negative", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Negative",
            commonErrors: ["Missing 'clean' and thinking the review is positive."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two speakers say the same words — 'I didn't say he was wrong' — but stress different words (e.g. 'I DIDN'T say...' vs 'I didn't say HE...'). What does this show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emphasis changes which word is stressed, changing the meaning" },
              { id: "b", text: "One is formal and one informal" },
              { id: "c", text: "There is no difference" },
              { id: "d", text: "One is a question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Emphasis", statement: "Stressing different words changes what is meant." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'I DIDN'T say he was wrong' vs 'I didn't say HE was wrong' differ.", working: "emphasis changes meaning", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Emphasis changes which word is stressed, changing the meaning",
            commonErrors: ["Thinking the sentences are identical in speech."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Text Message",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Just saw the test results. What a surprise — I got top marks in the hardest subject! I'm so proud of myself.",
          },
          stem: "What is the writer's attitude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sarcastic" },
              { id: "b", text: "Bored" },
              { id: "c", text: "Proud and happy" },
              { id: "d", text: "Angry" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude inference", statement: "'Top marks', 'proud of myself' = positive." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — positive outcome + 'proud' = happy.", working: "proud and happy", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Proud and happy",
            commonErrors: ["Missing the positive words."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which word is most judgemental when describing someone's cooking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "hot" },
              { id: "b", text: "delicious" },
              { id: "c", text: "ready" },
              { id: "d", text: "disgusting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Judgemental words", statement: "Strong negative adjectives judge harshly." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'disgusting' is a harsh judgement.", working: "disgusting", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** disgusting",
            commonErrors: ["Choosing 'delicious' — positive but still evaluative, less harsh."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u1-tone-inference-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Match Report",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "What a game! The home team scored three goals in the last ten minutes. The crowd went wild! Everyone is talking about it!",
          },
          stem: "How many exclamation marks appear in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exclamation marks", statement: "They add strong feeling; count each one." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'What a game!', 'went wild!', 'talking about it!' = 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Missing the first '!' inside 'What a game!'."],
            examinerNote: "Count every exclamation mark.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Two Shorts",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Short 1: 'The new cafe is absolutely wonderful! The coffee is amazing and the staff are so friendly!'\n\nShort 2: 'The cafe was acceptable. Nothing special, but the prices are fair.'",
          },
          stem: "How many strongly positive words/phrases appear in Short 1? How many attitude words appear in Short 2?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting attitude words", statement: "Strong evaluative words reveal attitude; count them." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Short 1: 'absolutely wonderful', 'amazing', 'friendly' = 3 positive markers.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Short 2: 'acceptable', 'Nothing special', 'fair' = 3 attitude words.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 in Short 1; 3 in Short 2.",
            commonErrors: ["Counting 'the', 'and' or neutral nouns."],
            examinerNote: "Accept reasonable counts (2-4) if justified.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain in one sentence how you can tell whether a writer likes or dislikes something.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude detection", statement: "Word choice (adjectives, exclamation, exaggeration) reveals liking/disliking." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — identifies word choice / adjectives as the clue.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — clear, correct single sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'You can tell by the adjectives and words they choose — strong positive words mean they like it.'",
            commonErrors: ["Answering 'by reading carefully' without a method."],
            examinerNote: "Must name a real clue.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Comments",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Comment A: 'Best holiday ever! The beach was paradise and the food was delicious.'\n\nComment B: 'It was OK. The hotel was fine, I suppose, though the weather was a bit disappointing.'",
          },
          stem: "What is each commenter's attitude? Give one adjective for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude adjectives", statement: "Comment A enthusiastic; Comment B unimpressed/negative." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Comment A: enthusiastic (best ever, paradise, delicious).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Comment B: unimpressed (OK, fine, disappointing).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — one adjective given for each.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A: enthusiastic; B: unimpressed.",
            commonErrors: ["Missing the contrast."],
            examinerNote: "Adjectives must match the actual attitude.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read this sentence: 'Oh brilliant, another homework assignment on a Friday.' What does the writer really feel? Explain how you know, using two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sarcasm detection", statement: "Exaggerated praise + complaint context = sarcasm." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — writer is unhappy about Friday homework.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — clue 1: 'brilliant' is exaggerated praise.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — clue 2: 'another homework on Friday' shows complaint.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — sarcasm identified and explained.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "They dislike it — 'brilliant' is sarcastic given the complaint context.",
            commonErrors: ["Taking 'brilliant' literally."],
            examinerNote: "Two clues required.",
          },
        },
        {
          id: "mla3-u1-tone-inference-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two School Reports",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Report 1: 'I love my new school! The teachers are amazing, the lessons are interesting and I have made lots of new friends. Every day is exciting!'\n\nReport 2: 'The school is acceptable. Some lessons are OK but others are boring. I have a few friends, though the older students seem unfriendly.'",
          },
          stem: "Read the two reports and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify the attitude of each writer.", marks: 2 },
            { label: "b", prompt: "Give two positive language clues from Report 1.", marks: 2 },
            { label: "c", prompt: "Give two negative or neutral clues from Report 2.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Attitude analysis", statement: "Strong positive words vs lukewarm/negative words reveal attitudes." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — Report 1 positive; Report 2 neutral-to-negative.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — both correctly identified.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — clues: 'love', 'amazing', 'exciting', exclamation marks.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two distinct positive clues cited.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — clues: 'acceptable', 'boring', 'unfriendly'.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — two distinct lukewarm/negative clues cited.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Report 1: positive (love/amazing/exciting); Report 2: lukewarm (acceptable/boring/unfriendly).",
            commonErrors: ["Not citing specific words."],
            examinerNote: "Clues must come from the texts.",
          },
        },
      ],
    },
  ],
};

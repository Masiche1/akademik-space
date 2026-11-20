import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciege-u5-lesson-5-1",
  code: "5-1",
  title: "Formal and Informal Letters",
  goal: "I CAN write letters appropriate to their audience.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: letters"],
  vocabulary: [
    { term: "Formal letter", definition: "A letter using polite, respectful language for official purposes." },
    { term: "Informal letter", definition: "A letter to friends or family using relaxed language." },
    { term: "Salutation", definition: "The greeting at the start ('Dear Sir/Madam')." },
    { term: "Valediction", definition: "The closing ('Yours faithfully')." },
    { term: "Register", definition: "Level of formality." },
  ],
  concepts: [
    {
      id: "ciege-u5-s1-formal",
      title: "Formal letters",
      skill: "Write formal letters with correct structure at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Formal letter structure",
            body: "Sender's address → date → recipient's address → salutation ('Dear Sir/Madam') → purpose → body → closing ('Yours faithfully' if unnamed, 'Yours sincerely' if named) → name.",
          },
          {
            heading: "Formal language",
            body: "Use 'I am writing to...', 'I would be grateful if...', 'I look forward to your reply'. Avoid contractions, slang and emotive language.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a formal letter complaining about a service.",
          solution: "'Dear Sir/Madam, I am writing to express my dissatisfaction with... I would appreciate a prompt resolution.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s1-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct salutation for an unknown recipient?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dear John," }, { id: "b", text: "Dear Sir/Madam," }, { id: "c", text: "Hi there," }, { id: "d", text: "Hey," },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Salutation", statement: "Formal greeting." }],
            steps: [
              { reasoning: "Formal letters to unknown recipients use 'Dear Sir/Madam'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Dear Sir/Madam",
          },
        },
        {
          id: "ciege-u5-s1-fo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the correct closing for a formal letter to an unnamed recipient.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Valediction", statement: "Correct formal closing." }],
            steps: [
              { reasoning: "'Yours faithfully' for unnamed recipients.", marks: 1, markCode: "AO2" },
              { reasoning: "Or 'Yours sincerely' if named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Yours faithfully",
          },
        },
        {
          id: "ciege-u5-s1-fo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening sentence of a formal letter requesting information about a course.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal opening", statement: "Polite, clear purpose." }],
            steps: [
              { reasoning: "The sentence is formal and polite.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly states the request.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One formal opening",
          },
        },
        {
          id: "ciege-u5-s1-fo-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the closing paragraph of a formal letter thanking someone for their help.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal closing", statement: "Gratitude + forward look." }],
            steps: [
              { reasoning: "The paragraph expresses thanks.", marks: 1, markCode: "AO2" },
              { reasoning: "It could mention future contact.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register maintained.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal closing paragraph",
          },
        },
        {
          id: "ciege-u5-s1-fo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which valediction is correct for a formal letter to a named recipient?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yours faithfully," }, { id: "b", text: "Yours sincerely," }, { id: "c", text: "Best wishes," }, { id: "d", text: "Love from," },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Valediction", statement: "Named recipient → sincerely." }],
            steps: [
              { reasoning: "'Yours sincerely' is used when the recipient is named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Yours sincerely,",
          },
        },
        {
          id: "ciege-u5-s1-fo-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the date line for a formal letter, including where it appears in the letter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Date", statement: "Full date after sender's address." }],
            steps: [
              { reasoning: "The date is written in full (e.g. '12 March 2025').", marks: 1, markCode: "AO2" },
              { reasoning: "It appears after the sender's address and before the recipient's address.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 12 March 2025, placed after sender's address",
          },
        },
        {
          id: "ciege-u5-s1-fo-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a polite request sentence using 'I would be grateful if...'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Polite request", statement: "Formal, courteous phrasing." }],
            steps: [
              { reasoning: "The sentence uses 'I would be grateful if' or similar formal phrasing.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly states what is being requested.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One polite request sentence",
          },
        },
        {
          id: "ciege-u5-s1-fo-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence politely declining an invitation in a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Polite refusal", statement: "Decline courteously without offending." }],
            steps: [
              { reasoning: "The sentence politely declines the invitation.", marks: 1, markCode: "AO2" },
              { reasoning: "It may offer an alternative or thanks for the invitation.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register is maintained throughout.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One polite refusal sentence",
          },
        },
        {
          id: "ciege-u5-s1-fo-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening sentence of a formal letter applying for a part-time job.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Application opening", statement: "States purpose formally." }],
            steps: [
              { reasoning: "The sentence clearly states the purpose (application for the job).", marks: 1, markCode: "AO2" },
              { reasoning: "The register is formal and respectful.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One formal application opening",
          },
        },
        {
          id: "ciege-u5-s1-fo-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is INAPPROPRIATE in a formal letter?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I am writing to enquire about the course." }, { id: "b", text: "I look forward to your reply." }, { id: "c", text: "Gonna grab a cuppa soon lol" }, { id: "d", text: "I would appreciate your assistance." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Register", statement: "Formal letters avoid slang and contractions." }],
            steps: [
              { reasoning: "'Gonna' and 'lol' are informal slang unsuitable for formal correspondence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Gonna grab a cuppa soon lol",
          },
        },
        {
          id: "ciege-u5-s1-fo-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short formal paragraph (3-4 sentences) explaining why you are writing and what you want.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal paragraph", statement: "Clear purpose + polite request." }],
            steps: [
              { reasoning: "The paragraph states why the writer is writing.", marks: 1, markCode: "AO2" },
              { reasoning: "It makes the request or desired outcome clear.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register is maintained with no slang or contractions.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal paragraph stating purpose and request",
          },
        },
        {
          id: "ciege-u5-s1-fo-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the body paragraph of a formal complaint letter about a faulty product you bought.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Complaint letter", statement: "Facts + polite but firm tone." }],
            steps: [
              { reasoning: "The paragraph identifies the product and the problem clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "It states when and where it was purchased.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone is polite but firm, not aggressive.", marks: 1, markCode: "AO2" },
              { reasoning: "It states the desired outcome (refund, repair, replacement).", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal complaint body paragraph",
          },
        },
        {
          id: "ciege-u5-s1-fo-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a formal email to a university requesting a prospectus for a course.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal email", statement: "Subject + greeting + request + sign-off." }],
            steps: [
              { reasoning: "The email has a clear subject line.", marks: 1, markCode: "AO2" },
              { reasoning: "It includes a formal salutation such as 'Dear Sir/Madam'.", marks: 1, markCode: "AO2" },
              { reasoning: "The request is clearly stated and polite.", marks: 1, markCode: "AO2" },
              { reasoning: "It closes formally, e.g. 'Yours faithfully' plus name.", marks: 1, markCode: "AO2" },
              { reasoning: "Accuracy of punctuation and spelling is maintained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal request email",
          },
        },
        {
          id: "ciege-u5-s1-fo-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a complete formal letter of application for a voluntary position (approximately 100 words).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full formal letter", statement: "Correct structure + register + content." }],
            steps: [
              { reasoning: "Correct structure: addresses, date, salutation, body, closing, name.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register maintained throughout — no slang or contractions.", marks: 1, markCode: "AO2" },
              { reasoning: "Relevant content: skills, experience and interest are included.", marks: 1, markCode: "AO2" },
              { reasoning: "Body is organised into clear paragraphs.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct valediction for the recipient type.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Complete formal application letter",
          },
        },
        {
          id: "ciege-u5-s1-fo-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is more formal: 'I want' or 'I would like'? Write the more formal version in a complete sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Formality", statement: "'Would like' is more polite and formal." }],
            steps: [
              { reasoning: "'I would like' is chosen as the more formal option.", marks: 1, markCode: "AO2" },
              { reasoning: "A complete, punctuated sentence is written using it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. I would like to enquire about the course.",
          },
        },
        {
          id: "ciege-u5-s1-fo-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A formal letter addressed to 'Dr Patel' should close with which valediction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yours faithfully," }, { id: "b", text: "Yours sincerely," }, { id: "c", text: "Love from," }, { id: "d", text: "See you soon," },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Valediction", statement: "Named recipient → sincerely." }],
            steps: [
              { reasoning: "Dr Patel is named, so 'Yours sincerely' is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Yours sincerely,",
          },
        },
      ],
    },
    {
      id: "ciege-u5-s1-informal",
      title: "Informal letters and emails",
      skill: "Write friendly correspondence appropriately.",
      lesson: {
        sections: [
          {
            heading: "Informal structure",
            body: "Greeting ('Hi Sam,'), body, sign-off ('Best wishes' / 'Love from'). No need for addresses or formal closings. Language is relaxed but still clear.",
          },
          {
            heading: "Tone",
            body: "Informal doesn't mean careless — use contractions, direct address and personal voice, but keep it readable and appropriate. Avoid slang that might confuse.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of an email to a friend about a party.",
          solution: "'Hi Sam! Hope you're well. I'm writing to invite you to my birthday party next Saturday — it should be great!'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s1-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which greeting is appropriate for an informal email?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dear Sir/Madam," }, { id: "b", text: "Hi Sam," }, { id: "c", text: "To whom it may concern," }, { id: "d", text: "Greetings," },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Informal greeting", statement: "Friendly, personal." }],
            steps: [
              { reasoning: "'Hi Sam' is informal and friendly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hi Sam",
          },
        },
        {
          id: "ciege-u5-s1-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the opening of an informal email inviting a friend to a party.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal opening", statement: "Friendly, direct." }],
            steps: [
              { reasoning: "The opening is friendly.", marks: 1, markCode: "AO2" },
              { reasoning: "It states the purpose.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One informal opening",
          },
        },
        {
          id: "ciege-u5-s1-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence asking a friend for help with homework.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal request", statement: "Friendly, clear." }],
            steps: [
              { reasoning: "The sentence is friendly and informal.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly asks for help.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One informal request",
          },
        },
        {
          id: "ciege-u5-s1-in-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the closing of an informal email to a friend, including a sign-off.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal closing", statement: "Friendly sign-off." }],
            steps: [
              { reasoning: "The closing is warm and friendly.", marks: 1, markCode: "AO2" },
              { reasoning: "It includes a sign-off like 'Best wishes' or 'Love from'.", marks: 1, markCode: "AO2" },
              { reasoning: "The name is included.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Informal closing + sign-off",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u5-s1-letters-notes",
      title: "Formal and informal letters — revision notes",
      summary: "Letter structure, register, salutations and closings.",
      sections: [
        { heading: "Formal", body: "Addresses, 'Dear Sir/Madam', polite language, 'Yours faithfully/sincerely'. No contractions." },
        { heading: "Informal", body: "'Hi [name]', relaxed language, 'Best wishes/Love from'. Friendly but still clear." },
      ],
    },
  ],
};

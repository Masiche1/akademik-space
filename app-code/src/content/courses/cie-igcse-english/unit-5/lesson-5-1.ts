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
            { id: "a", text: "Dear Sir/Madam," },
            { id: "b", text: "Dear John," },
            { id: "c", text: "Hi there," },
            { id: "d", text: "Hey," },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Yours faithfully," },
            { id: "b", text: "Best wishes," },
            { id: "c", text: "Yours sincerely," },
            { id: "d", text: "Love from," },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Valediction", statement: "Named recipient → sincerely." }],
            steps: [
              { reasoning: "'Yours sincerely' is used when the recipient is named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Yours sincerely,",
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
            { id: "a", text: "I would appreciate your assistance." },
            { id: "b", text: "I am writing to enquire about the course." },
            { id: "c", text: "I look forward to your reply." },
            { id: "d", text: "Gonna grab a cuppa soon lol" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Register", statement: "Formal letters avoid slang and contractions." }],
            steps: [
              { reasoning: "'Gonna' and 'lol' are informal slang unsuitable for formal correspondence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** Gonna grab a cuppa soon lol",
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
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
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
            { id: "a", text: "See you soon," },
            { id: "b", text: "Love from," },
            { id: "c", text: "Yours sincerely," },
            { id: "d", text: "Yours faithfully," },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Valediction", statement: "Named recipient → sincerely." }],
            steps: [
              { reasoning: "Dr Patel is named, so 'Yours sincerely' is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Yours sincerely,",
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
            { id: "a", text: "To whom it may concern," },
            { id: "b", text: "Greetings," },
            { id: "c", text: "Dear Sir/Madam," },
            { id: "d", text: "Hi Sam," },
          ], correctChoiceId: "d" },
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
        {
          id: "ciege-u5-s1-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sign-off is appropriate for an informal email to a friend?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yours faithfully," },
            { id: "b", text: "Yours sincerely," },
            { id: "c", text: "Best wishes," },
            { id: "d", text: "To whom it may concern," },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Informal sign-off", statement: "Friendly closing." }],
            steps: [
              { reasoning: "'Best wishes' is warm and appropriate for informal correspondence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Best wishes",
          },
        },
        {
          id: "ciege-u5-s1-in-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the greeting and first line of an informal email to a friend telling them about your holiday.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal opening", statement: "Friendly, direct." }],
            steps: [
              { reasoning: "The greeting is friendly, e.g. 'Hi Sam,' or 'Dear Alex,'.", marks: 1, markCode: "AO2" },
              { reasoning: "The first line states the holiday topic.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Friendly greeting + holiday topic",
          },
        },
        {
          id: "ciege-u5-s1-in-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence sounds right in an informal email to a friend?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I am writing to inform you of my availability." },
            { id: "b", text: "I would be grateful if you could attend." },
            { id: "c", text: "Fancy meeting up this weekend?" },
            { id: "d", text: "Please find attached the requested document." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Informal register", statement: "Relaxed, direct language." }],
            steps: [
              { reasoning: "Only option b uses relaxed, conversational language suitable for a friend.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Fancy meeting up this weekend?",
          },
        },
        {
          id: "ciege-u5-s1-in-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence best invites a friend to the cinema?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is requested that you accompany me to a film." },
            { id: "b", text: "You are cordially invited to attend a cinematic exhibition." },
            { id: "c", text: "Attendance at the picture house is requested." },
            { id: "d", text: "Do you fancy the cinema on Saturday?" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal invitation", statement: "Friendly, clear ask." }],
            steps: [
              { reasoning: "Option b is friendly and clear; the others are too formal.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Do you fancy the cinema on Saturday?",
          },
        },
        {
          id: "ciege-u5-s1-in-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence apologising to a friend for missing their party.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal apology", statement: "Friendly, sincere." }],
            steps: [
              { reasoning: "The sentence clearly apologises.", marks: 1, markCode: "AO2" },
              { reasoning: "It may give a brief reason or acknowledge the friend's feelings.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone stays friendly and informal.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One apology sentence",
          },
        },
        {
          id: "ciege-u5-s1-in-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase is TOO formal for a text message to a friend?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Can't wait!" },
            { id: "b", text: "I am writing to request your presence" },
            { id: "c", text: "See you soon!" },
            { id: "d", text: "Let me know what you think." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Informal register", statement: "No stiff formal phrasing." }],
            steps: [
              { reasoning: "'I am writing to request your presence' is stiffly formal and unsuitable for a friend.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I am writing to request your presence",
          },
        },
        {
          id: "ciege-u5-s1-in-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the main paragraph of an informal email to a friend describing your weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal paragraph", statement: "Personal voice + clear detail." }],
            steps: [
              { reasoning: "The paragraph describes what happened over the weekend.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses a friendly, personal voice, e.g. contractions or direct address.", marks: 1, markCode: "AO2" },
              { reasoning: "The writing is clear and readable.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Informal paragraph describing the weekend",
          },
        },
        {
          id: "ciege-u5-s1-in-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the opening of an informal letter to your cousin asking about their new school.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal letter opening", statement: "Greeting + question." }],
            steps: [
              { reasoning: "The letter has a friendly greeting, e.g. 'Hi cousin!'.", marks: 1, markCode: "AO2" },
              { reasoning: "It clearly asks about the new school.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone is relaxed and personal.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Informal letter opening",
          },
        },
        {
          id: "ciege-u5-s1-in-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the best subject line for an informal email inviting a friend to a party?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Party this Saturday — you in?" },
            { id: "b", text: "Regarding the forthcoming gathering" },
            { id: "c", text: "Formal notification of social event" },
            { id: "d", text: "Event details enclosed" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Subject line", statement: "Short, clear, friendly." }],
            steps: [
              { reasoning: "Option b is short, clear and friendly — ideal for an informal invitation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Party this Saturday — you in?",
          },
        },
        {
          id: "ciege-u5-s1-in-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write an informal email (about 80-100 words) inviting a friend to stay with you for the weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Full informal email", statement: "Greeting + purpose + sign-off." }],
            steps: [
              { reasoning: "Includes a friendly greeting.", marks: 1, markCode: "AO2" },
              { reasoning: "Clearly invites the friend to stay, with when/where details.", marks: 1, markCode: "AO2" },
              { reasoning: "Maintains a relaxed, personal tone.", marks: 1, markCode: "AO2" },
              { reasoning: "Ends with an appropriate informal sign-off.", marks: 1, markCode: "AO2" },
              { reasoning: "Accuracy of punctuation and spelling is maintained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Full informal invitation email",
          },
        },
        {
          id: "ciege-u5-s1-in-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which closing is most appropriate for an informal email to a close friend?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To whom it may concern" },
            { id: "b", text: "Yours faithfully," },
            { id: "c", text: "I remain yours obediently" },
            { id: "d", text: "See you soon, Jess" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Informal closing", statement: "Warm, personal sign-off." }],
            steps: [
              { reasoning: "'See you soon, Jess' is warm, personal and informal.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "See you soon, Jess",
          },
        },
        {
          id: "ciege-u5-s1-in-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write an informal letter (about 100 words) to a friend recounting a recent trip you took.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Informal recount", statement: "Greeting + events + sign-off." }],
            steps: [
              { reasoning: "Includes a friendly greeting and informal sign-off.", marks: 1, markCode: "AO2" },
              { reasoning: "Recounts the trip's events in a clear order.", marks: 1, markCode: "AO2" },
              { reasoning: "Uses a personal voice, e.g. contractions and direct address.", marks: 1, markCode: "AO2" },
              { reasoning: "Includes engaging detail about the trip.", marks: 1, markCode: "AO2" },
              { reasoning: "The letter is organised into clear paragraphs.", marks: 1, markCode: "AO2" },
              { reasoning: "Accuracy of punctuation and spelling is maintained.", marks: 1, markCode: "AO2" },
            ],
                        levels: [
                        { level: "Level 3", marks: "4-6", descriptor: "Complete, accurate and well-crafted response." },
                        { level: "Level 2", marks: "2-3", descriptor: "Mostly secure with some weaknesses or thin development." },
                        { level: "Level 1", marks: "0-1", descriptor: "Limited creditable material." },
                        ],
            finalAnswer: "Full informal recount letter",
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

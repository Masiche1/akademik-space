import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cie-ol-el-lesson-3-2",
  code: "3-2",
  title: "Transactional writing",
  goal: "I CAN write formal letters, reports, emails and other transactional texts.",
  standards: ["1123 Writing: transactional"],
  vocabulary: [
    { term: "Transactional writing", definition: "Writing with practical purpose — letters, emails, reports." },
    { term: "Register", definition: "Level of formality appropriate to context." },
    { term: "Salutation", definition: "Greeting at start of letter/email." },
    { term: "Valediction", definition: "Closing phrase — 'Yours faithfully', 'Kind regards'." },
    { term: "Subject line", definition: "Brief summary of email content." },
    { term: "Tone", definition: "Attitude conveyed — formal, friendly, urgent." },
  ],
  concepts: [
    {
      id: "cie-ol-el-transactional",
      title: "Transactional writing",
      skill: "Write formal and informal transactional texts with appropriate register.",
      lesson: {
        sections: [
          {
            heading: "Formal letter format",
            body: "Sender's address → date → recipient's address → salutation ('Dear Sir/Madam') → body → valediction ('Yours faithfully') → signature → name.",
          },
          {
            heading: "Email format",
            body: "Subject line → greeting → body → closing → signature. More informal than letter but still structured.",
          },
          {
            heading: "Register",
            body: "Formal: official/business — 'Dear Sir', 'Yours faithfully'. Informal: friends — 'Hi', 'Cheers'. Match register to recipient.",
          },
        ],
        keyFormulas: [
          { name: "Transactional", statement: "Formal letter: address→date→recipient→salutation→body→valediction→signature." },
        ],
        workedExample: {
          problem: "Write a formal complaint letter.",
          solution: "Formal register, letter format, state problem clearly, request remedy, polite but firm.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'register' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Font size" },
              { id: "b", text: "Level of formality" },
              { id: "c", text: "Word count" },
              { id: "d", text: "Paper quality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Level of formality appropriate to context." },
            ],
            steps: [
              { reasoning: "Register = formality level.", working: "formality", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Level of formality",
            commonErrors: ["Choosing (b) — that's word count."],
          },
        },
        {
          id: "cie-ol-el-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two formal letter elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter elements", statement: "Salutation, valediction, addresses, signature." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Salutation, valediction, addresses, signature (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-trans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to choose formal vs informal register?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register choice", statement: "Recipient determines register — official=business, friends=casual." },
            ],
            steps: [
              { reasoning: "Official/business → formal register.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "Friends/family → informal register.", working: "informal", marks: 1, markCode: "AO2" },
              { reasoning: "Match language, greeting, closing to recipient.", working: "match", marks: 1, markCode: "AO2" },
              { reasoning: "Choice explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Official→formal; friends→informal; match language to recipient.",
            commonErrors: ["Same register for all — must adapt."],
          },
        },
        {
          id: "cie-ol-el-trans-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate transactional texts.",
          parts: [
            { label: "a", prompt: "Define register.", marks: 1 },
            { label: "b", prompt: "Describe formal letter format.", marks: 3 },
            { label: "c", prompt: "How to choose register?", marks: 2 },
            { label: "d", prompt: "Describe email format.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transactional writing", statement: "Register, letter format, email format." },
            ],
            steps: [
              { part: "a", reasoning: "Level of formality appropriate to context.", working: "register", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Sender's address→date→recipient→salutation→body→valediction→signature.", working: "letter", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Official→formal; friends→informal; match language.", working: "choice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Subject line→greeting→body→closing→signature.", working: "email", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) formality (b) letter format (c) recipient determines (d) email format",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete format.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete format.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Wrong register for recipient — formal for friends."],
          },
        },
        {
          id: "cie-ol-el-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'transactional' text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A drama script" },
              { id: "b", text: "A novel" },
              { id: "c", text: "A poem" },
              { id: "d", text: "Text for a practical purpose like letters or emails" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transactional text", statement: "Text written for a practical purpose." },
            ],
            steps: [
              { reasoning: "Transactional = practical purpose.", working: "purpose", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Text for a practical purpose like letters or emails",
            commonErrors: ["Choosing (b) — that's literary."],
          },
        },
        {
          id: "cie-ol-el-trans-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A formal letter has 5 required elements: sender's address, date, recipient's address, salutation, sign-off. A student writes a letter missing 2 of them. (a) How many elements are required? (b) How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter structure", statement: "All 5 elements required." },
            ],
            steps: [
              { reasoning: "5 elements are required.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "2 are missing.", working: "2 missing", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: ["Forgetting salutation or sign-off."],
          },
        },
        {
          id: "cie-ol-el-trans-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which salutation is appropriate for a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hiya" },
              { id: "b", text: "Hey mate" },
              { id: "c", text: "Yo" },
              { id: "d", text: "Dear Sir/Madam" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal salutation", statement: "Dear Sir/Madam or Dear [Name]." },
            ],
            steps: [
              { reasoning: "Formal = Dear Sir/Madam.", working: "dear", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Dear Sir/Madam",
            commonErrors: ["Choosing (b) — too informal."],
          },
        },
        {
          id: "cie-ol-el-trans-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two differences between formal and informal letters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter register", statement: "Formal uses polite language; informal uses contractions/slang." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "differences", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal vs informal language, contractions, salutation, tone (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-trans-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A letter has 3 paragraphs: opening, body and closing. (a) How many paragraphs are there? (b) If each paragraph averages 80 words and the letter is 240 words, how many words per paragraph on average? (c) How many total words does the letter have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 80, unit: "words" },
              { label: "c", answer: 240, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter word count", statement: "Count paragraphs and words." },
            ],
            steps: [
              { reasoning: "3 paragraphs are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "240 divided by 3 equals 80 words per paragraph.", working: "240 / 3 = 80", marks: 1, markCode: "AO2" },
              { reasoning: "240 total words are given.", working: "240", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 80 words; (c) 240 words",
            commonErrors: ["Not matching word count to paragraphs."],
          },
        },
        {
          id: "cie-ol-el-trans-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "An email needs which of these elements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Envelope" },
              { id: "b", text: "Postcode" },
              { id: "c", text: "Subject line" },
              { id: "d", text: "Stamp" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email format", statement: "Subject line required." },
            ],
            steps: [
              { reasoning: "Emails need subject lines.", working: "subject", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Subject line",
            commonErrors: ["Choosing (b) — that's for letters."],
          },
        },
        {
          id: "cie-ol-el-trans-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to structure a formal letter effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter structure", statement: "Addresses, date, salutation, body, sign-off." },
            ],
            steps: [
              { reasoning: "Include sender's and recipient's addresses.", working: "addresses", marks: 1, markCode: "AO2" },
              { reasoning: "Add date and formal salutation.", working: "date", marks: 1, markCode: "AO2" },
              { reasoning: "Clear body paragraphs and polite sign-off.", working: "body", marks: 1, markCode: "AO2" },
              { reasoning: "Structure explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Addresses→date→salutation→body→sign-off.",
            commonErrors: ["Missing addresses or sign-off."],
          },
        },
        {
          id: "cie-ol-el-trans-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which register is appropriate for a job application letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Casual" },
              { id: "b", text: "Informal" },
              { id: "c", text: "Formal" },
              { id: "d", text: "Slang" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register choice", statement: "Job applications require formal register." },
            ],
            steps: [
              { reasoning: "Job application = formal.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Formal",
            commonErrors: ["Choosing (b) — too casual for job application."],
          },
        },
        {
          id: "cie-ol-el-trans-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A letter needs 5 elements; a draft has only 3. How many are missing? (b) If the letter should be 300 words and is currently 200 words, how many more words are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 100, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter checking", statement: "Include all elements; meet word count." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missing elements.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "300 minus 200 equals 100 words needed.", working: "300 - 200 = 100", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 100 words",
            commonErrors: ["Not including all required elements."],
          },
        },
        {
          id: "cie-ol-el-trans-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply transactional writing skills.",
          parts: [
            { label: "a", prompt: "List the elements of a formal letter.", marks: 2 },
            { label: "b", prompt: "Describe formal vs informal register.", marks: 2 },
            { label: "c", prompt: "What makes a letter clear and effective?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transactional writing", statement: "Structure, register, clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Addresses, date, salutation, body, sign-off.", working: "elements", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All listed.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Formal uses polite language; informal uses contractions/slang.", working: "register", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear distinction.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Clear purpose, appropriate tone, correct format.", working: "clarity", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) elements (b) formal vs informal (c) purpose+tone+format",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All listed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Wrong register for the situation."],
          },
        },
        {
          id: "cie-ol-el-trans-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sign-off is appropriate for a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cheers" },
              { id: "b", text: "See ya" },
              { id: "c", text: "Bye" },
              { id: "d", text: "Yours faithfully" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal sign-off", statement: "Yours faithfully/sincerely." },
            ],
            steps: [
              { reasoning: "Yours faithfully is formal.", working: "faithfully", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Yours faithfully",
            commonErrors: ["Choosing (b) — too informal."],
          },
        },
        {
          id: "cie-ol-el-trans-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A formal letter needs 5 elements; if 4 are included, how many are missing? (b) If the letter is 250 words and should have 3 paragraphs, how many words per paragraph on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 83.3, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter checking", statement: "Check elements; calculate word distribution." },
            ],
            steps: [
              { reasoning: "5 minus 4 equals 1 missing element.", working: "5 - 4 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "250 divided by 3 equals 83.3 words per paragraph.", working: "250 / 3 = 83.3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 83.3 words",
            commonErrors: ["Not calculating averages correctly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-letter-types",
      title: "Letter and email types",
      skill: "Write different types of transactional correspondence.",
      lesson: {
        sections: [
          {
            heading: "Complaint letter",
            body: "State problem clearly → provide details → request remedy → polite but firm. Formal register.",
          },
          {
            heading: "Application letter",
            body: "Introduce self → state position → highlight qualifications → request opportunity → formal register.",
          },
          {
            heading: "Informal email",
            body: "Casual greeting → updates/news → personal touch → informal closing. Relaxed register.",
          },
        ],
        keyFormulas: [
          { name: "Letter types", statement: "Complaint: problem→details→remedy. Application: self→position→qualifications→request." },
        ],
        workedExample: {
          problem: "Write a job application letter.",
          solution: "Formal register, introduce self, state position, highlight relevant qualifications/experience, request opportunity.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-lt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a complaint letter include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem, details, remedy request" },
              { id: "b", text: "Only greeting" },
              { id: "c", text: "Only date" },
              { id: "d", text: "Only signature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complaint letter", statement: "Problem→details→remedy request." },
            ],
            steps: [
              { reasoning: "Problem, details, remedy.", working: "elements", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Problem, details, remedy request",
            commonErrors: ["Missing remedy request — key element."],
          },
        },
        {
          id: "cie-ol-el-lt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two letter types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter types", statement: "Complaint, application, invitation, thank-you, apology." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Complaint, application, invitation, thank-you, apology (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-lt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of an application letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application letter", statement: "Introduce→position→qualifications→request opportunity." },
            ],
            steps: [
              { reasoning: "Introduce self and purpose.", working: "introduce", marks: 1, markCode: "AO2" },
              { reasoning: "State position and highlight qualifications/experience.", working: "qualifications", marks: 1, markCode: "AO2" },
              { reasoning: "Request opportunity — formal closing.", working: "request", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduce→position→qualifications→request opportunity.",
            commonErrors: ["Missing qualifications — key selling point."],
          },
        },
        {
          id: "cie-ol-el-lt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate letter types.",
          parts: [
            { label: "a", prompt: "Name three letter types.", marks: 2 },
            { label: "b", prompt: "Describe complaint letter.", marks: 3 },
            { label: "c", prompt: "Describe application letter.", marks: 2 },
            { label: "d", prompt: "When to use informal email?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter types", statement: "Complaint, application, informal email." },
            ],
            steps: [
              { part: "a", reasoning: "Complaint, application, invitation, thank-you, apology.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Problem→details→remedy request→polite but firm.", working: "complaint", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Introduce→position→qualifications→request.", working: "application", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Friends/family — casual, personal, relaxed.", working: "informal", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) complaint structure (c) application structure (d) friends/family",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three+ types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Complaint too aggressive — must stay polite."],
          },
        },
        {
          id: "cie-ol-el-lt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of letter is most appropriate for writing to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal letter" },
              { id: "b", text: "Official letter" },
              { id: "c", text: "Formal complaint" },
              { id: "d", text: "Business letter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter type", statement: "Friends = informal." },
            ],
            steps: [
              { reasoning: "Friend = informal letter.", working: "informal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Informal letter",
            commonErrors: ["Choosing (b) — too formal for friend."],
          },
        },
        {
          id: "cie-ol-el-lt-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "There are 4 main letter types: formal, informal, semi-formal and business. A student must write 2 letters — one to a friend and one to a company. (a) How many letter types are listed? (b) How many letters must the student write?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter type counting", statement: "Count types and required letters." },
            ],
            steps: [
              { reasoning: "4 letter types are listed.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "2 letters must be written.", working: "2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4; (b) 2",
            commonErrors: ["Confusing letter types."],
          },
        },
        {
          id: "cie-ol-el-lt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A complaint letter should use which register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Slang" },
              { id: "d", text: "Casual" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complaint register", statement: "Complaints require formal register." },
            ],
            steps: [
              { reasoning: "Complaint = formal.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Formal",
            commonErrors: ["Choosing (b) — too casual."],
          },
        },
        {
          id: "cie-ol-el-lt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of an informal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal letter", statement: "Contractions, slang, personal tone, 'Dear [name]'." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "features", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Contractions, slang, personal tone, Dear [name] (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-lt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes 3 letters: 1 formal, 1 informal and 1 semi-formal. (a) How many letters are written? (b) How many are formal? (c) How many are non-formal?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 1 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter type counting", statement: "Count letters by type." },
            ],
            steps: [
              { reasoning: "3 letters are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "1 is formal.", working: "1 formal", marks: 1, markCode: "AO2" },
              { reasoning: "3 minus 1 equals 2 non-formal.", working: "3 - 1 = 2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 1; (c) 2",
            commonErrors: ["Confusing formal and semi-formal."],
          },
        },
        {
          id: "cie-ol-el-lt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which letter type uses 'Yours sincerely' as a sign-off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal letter" },
              { id: "b", text: "Formal letter" },
              { id: "c", text: "Text message" },
              { id: "d", text: "Postcard" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign-off by type", statement: "Formal uses Yours sincerely/faithfully." },
            ],
            steps: [
              { reasoning: "Yours sincerely = formal.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Formal letter",
            commonErrors: ["Choosing (b) — informal uses 'Love/Best wishes'."],
          },
        },
        {
          id: "cie-ol-el-lt-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to choose the right letter type for a situation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter selection", statement: "Consider audience, purpose, relationship." },
            ],
            steps: [
              { reasoning: "Identify the audience — friend vs stranger vs company.", working: "audience", marks: 1, markCode: "AO2" },
              { reasoning: "Determine the purpose — personal vs business vs complaint.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Match register to relationship and formality needed.", working: "register", marks: 1, markCode: "AO2" },
              { reasoning: "Selection explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Audience + purpose + relationship → choose type.",
            commonErrors: ["Wrong register for the audience."],
          },
        },
        {
          id: "cie-ol-el-lt-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a feature of a business letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reference number" },
              { id: "b", text: "Personal anecdotes" },
              { id: "c", text: "Slang" },
              { id: "d", text: "Emoticons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Business letter", statement: "Reference numbers, formal language, clear structure." },
            ],
            steps: [
              { reasoning: "Business letters use reference numbers.", working: "reference", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Reference number",
            commonErrors: ["Choosing (c) — emoticons are informal."],
          },
        },
        {
          id: "cie-ol-el-lt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A student needs to write 4 letters: 2 formal and 2 informal. How many are formal? (b) If each letter averages 200 words and there are 4 letters, what is the total word count?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 800, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter planning", statement: "Count letter types; calculate total words." },
            ],
            steps: [
              { reasoning: "2 letters are formal.", working: "2", marks: 1, markCode: "AO1" },
              { reasoning: "4 times 200 equals 800 words total.", working: "4 x 200 = 800", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 2; (b) 800 words",
            commonErrors: ["Forgetting to multiply by number of letters."],
          },
        },
        {
          id: "cie-ol-el-lt-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply letter type knowledge.",
          parts: [
            { label: "a", prompt: "Name the four letter types.", marks: 2 },
            { label: "b", prompt: "Describe features of informal letters.", marks: 2 },
            { label: "c", prompt: "When to use formal vs informal?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter types", statement: "Types, features, register choice." },
            ],
            steps: [
              { part: "a", reasoning: "Formal, informal, semi-formal, business.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All named.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Contractions, slang, personal tone, Dear [name].", working: "features", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple valid.", working: "multiple", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal for business/strangers; informal for friends/family.", working: "choice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) four types (b) informal features (c) formal vs informal choice",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All named.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Wrong register for the audience."],
          },
        },
        {
          id: "cie-ol-el-lt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which salutation is appropriate for an informal letter to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attention" },
              { id: "b", text: "Dear [name]" },
              { id: "c", text: "To whom it may concern" },
              { id: "d", text: "Dear Sir" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal salutation", statement: "Dear [name] or Hi [name]." },
            ],
            steps: [
              { reasoning: "Informal = Dear [name].", working: "dear name", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Dear [name]",
            commonErrors: ["Choosing (b) — that's formal."],
          },
        },
        {
          id: "cie-ol-el-lt-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A student writes 5 letters; 3 are informal. How many are formal? (b) If each letter averages 150 words and there are 5 letters, what is the total word count?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 750, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter counting", statement: "Count types; calculate total words." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 formal letters.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "5 times 150 equals 750 words total.", working: "5 x 150 = 750", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 750 words",
            commonErrors: ["Not subtracting correctly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-reports",
      title: "Report writing",
      skill: "Write structured reports for factual accounts.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "Title → introduction (purpose) → findings/method → conclusion → recommendations. Factual, objective.",
          },
          {
            heading: "Language features",
            body: "Formal register, passive voice ('was conducted'), technical terms, statistics, organised paragraphs.",
          },
          {
            heading: "Objectivity",
            body: "Reports state facts without personal opinion. Use evidence, data, observations — not feelings.",
          },
        ],
        keyFormulas: [
          { name: "Report writing", statement: "Title→intro→findings→conclusion→recommendations; factual, objective." },
        ],
        workedExample: {
          problem: "Write a report about school event.",
          solution: "Title, introduction, what happened, outcomes, conclusion — factual, structured, objective.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal opinion" },
              { id: "b", text: "Story format" },
              { id: "c", text: "Factual account" },
              { id: "d", text: "Poetic language" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Factual account of events/findings." },
            ],
            steps: [
              { reasoning: "Report = factual, objective.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Factual account",
            commonErrors: ["Choosing (b) — reports are objective."],
          },
        },
        {
          id: "cie-ol-el-rep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two report sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report sections", statement: "Introduction, findings/method, conclusion, recommendations." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "sections", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduction, findings/method, conclusion, recommendations (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the importance of objectivity in reports.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Objectivity", statement: "Reports state facts — no personal opinion; credibility depends on it." },
            ],
            steps: [
              { reasoning: "Objectivity makes report credible and trustworthy.", working: "credible", marks: 1, markCode: "AO2" },
              { reasoning: "Personal opinion would bias the findings.", working: "bias", marks: 1, markCode: "AO2" },
              { reasoning: "Readers rely on reports for facts — must be accurate.", working: "accurate", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Credibility, avoids bias, accuracy — essential for factual reports.",
            commonErrors: ["Including opinions — violates objectivity."],
          },
        },
        {
          id: "cie-ol-el-rep-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate reports.",
          parts: [
            { label: "a", prompt: "Define report.", marks: 1 },
            { label: "b", prompt: "Describe report structure.", marks: 3 },
            { label: "c", prompt: "Why objectivity matters.", marks: 2 },
            { label: "d", prompt: "Name language features.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report writing", statement: "Factual account, structure, objectivity, formal language." },
            ],
            steps: [
              { part: "a", reasoning: "Factual account of events/findings.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Title→intro→findings→conclusion→recommendations.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Credibility, avoids bias, accuracy.", working: "objectivity", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal register, passive voice, technical terms, statistics.", working: "features", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) factual account (b) structure (c) credibility (d) formal/passive/technical",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple features.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Including personal opinions — violates objectivity."],
          },
        },
        {
          id: "cie-ol-el-rep-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To tell a story" },
              { id: "b", text: "To entertain" },
              { id: "c", text: "To present factual information objectively" },
              { id: "d", text: "To persuade" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report purpose", statement: "Present facts objectively." },
            ],
            steps: [
              { reasoning: "Report = factual/objective.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** To present factual information objectively",
            commonErrors: ["Choosing (c) — that's persuasion."],
          },
        },
        {
          id: "cie-ol-el-rep-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A report has 4 main sections: title, introduction, findings and recommendations. A student writes a report missing 1 section. (a) How many sections are required? (b) How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report structure", statement: "All 4 sections required." },
            ],
            steps: [
              { reasoning: "4 sections are required.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "1 is missing.", working: "1 missing", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4; (b) 1",
            commonErrors: ["Forgetting recommendations."],
          },
        },
        {
          id: "cie-ol-el-rep-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which register is appropriate for a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Slang" },
              { id: "c", text: "Casual" },
              { id: "d", text: "Formal and objective" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report register", statement: "Formal and objective." },
            ],
            steps: [
              { reasoning: "Report = formal/objective.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Formal and objective",
            commonErrors: ["Choosing (b) — too casual."],
          },
        },
        {
          id: "cie-ol-el-rep-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of a well-written report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report features", statement: "Objective, factual, structured, clear headings." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "features", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Objective, factual, structured, clear headings (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-rep-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A report has 5 findings and 3 recommendations. (a) How many findings are there? (b) How many recommendations are there? (c) How many total points does the report make?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report counting", statement: "Count findings and recommendations." },
            ],
            steps: [
              { reasoning: "5 findings are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 recommendations are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "5 plus 3 equals 8 total points.", working: "5 + 3 = 8", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 3; (c) 8",
            commonErrors: ["Forgetting recommendations in total."],
          },
        },
        {
          id: "cie-ol-el-rep-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to present findings in a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual, objective statements" },
              { id: "b", text: "Slang" },
              { id: "c", text: "Emotional language" },
              { id: "d", text: "Personal opinions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report style", statement: "Factual and objective." },
            ],
            steps: [
              { reasoning: "Reports are factual/objective.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Factual, objective statements",
            commonErrors: ["Choosing (b) — emotion not appropriate."],
          },
        },
        {
          id: "cie-ol-el-rep-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to structure a report effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report structure", statement: "Title, introduction, findings, recommendations." },
            ],
            steps: [
              { reasoning: "Clear title and introduction stating purpose.", working: "title", marks: 1, markCode: "AO2" },
              { reasoning: "Findings presented factually and objectively.", working: "findings", marks: 1, markCode: "AO2" },
              { reasoning: "Recommendations based on findings.", working: "recommendations", marks: 1, markCode: "AO2" },
              { reasoning: "Structure explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Title→intro→findings→recommendations.",
            commonErrors: ["Missing recommendations — incomplete report."],
          },
        },
        {
          id: "cie-ol-el-rep-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a typical report section?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Findings" },
              { id: "b", text: "Dialogue between characters" },
              { id: "c", text: "Introduction" },
              { id: "d", text: "Recommendations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report sections", statement: "No dialogue — objective only." },
            ],
            steps: [
              { reasoning: "Dialogue is not a report section.", working: "dialogue", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Dialogue between characters",
            commonErrors: ["Choosing (b) — introduction is standard."],
          },
        },
        {
          id: "cie-ol-el-rep-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A report needs 4 sections; a draft has only 3. How many are missing? (b) If the report is 800 words and has 4 sections, how many words per section on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 200, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report checking", statement: "Check sections; calculate word distribution." },
            ],
            steps: [
              { reasoning: "4 minus 3 equals 1 missing section.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "800 divided by 4 equals 200 words per section.", working: "800 / 4 = 200", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 200 words",
            commonErrors: ["Not dividing evenly."],
          },
        },
        {
          id: "cie-ol-el-rep-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply report writing skills.",
          parts: [
            { label: "a", prompt: "List report sections.", marks: 2 },
            { label: "b", prompt: "Describe report register.", marks: 2 },
            { label: "c", prompt: "How to present findings?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report writing", statement: "Sections, register, findings." },
            ],
            steps: [
              { part: "a", reasoning: "Title, introduction, findings, recommendations.", working: "sections", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All listed.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Formal and objective.", working: "register", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Factual, objective statements; no opinion.", working: "findings", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) sections (b) formal+objective (c) factual+objective",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All listed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Including opinion — reports are objective."],
          },
        },
        {
          id: "cie-ol-el-rep-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should recommendations in a report be based on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal opinions" },
              { id: "b", text: "The findings" },
              { id: "c", text: "Random guesses" },
              { id: "d", text: "Other reports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recommendations", statement: "Based on findings." },
            ],
            steps: [
              { reasoning: "Recommendations follow findings.", working: "findings", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The findings",
            commonErrors: ["Choosing (b) — opinions not appropriate."],
          },
        },
        {
          id: "cie-ol-el-rep-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A report needs 4 sections; if 2 are written, how many are missing? (b) If the report is 600 words and has 3 findings and 2 recommendations, how many words per point on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 120, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report checking", statement: "Check sections; calculate word distribution." },
            ],
            steps: [
              { reasoning: "4 minus 2 equals 2 missing sections.", working: "4 - 2 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "600 divided by 5 points equals 120 words each.", working: "600 / 5 = 120", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 120 words",
            commonErrors: ["Not dividing by total points."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-articles",
      title: "Article and review writing",
      skill: "Write engaging articles and critical reviews.",
      lesson: {
        sections: [
          {
            heading: "Article structure",
            body: "Engaging headline → introduction (hook) → body (main points) → conclusion. Written for publication audience.",
          },
          {
            heading: "Review structure",
            body: "Title → brief introduction → detailed assessment → strengths/weaknesses → recommendation. Critical but fair.",
          },
          {
            heading: "Audience awareness",
            body: "Articles entertain and inform — use engaging language. Reviews evaluate critically — balanced judgement.",
          },
        ],
        keyFormulas: [
          { name: "Articles/reviews", statement: "Article: headline→hook→body→conclusion; review: assessment→strengths/weaknesses→recommendation." },
        ],
        workedExample: {
          problem: "Write a review of a film.",
          solution: "Title, brief intro, plot summary, assessment of acting/technique, strengths/weaknesses, recommendation.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of an article headline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "End the article" },
              { id: "b", text: "Grab attention" },
              { id: "c", text: "Give full summary" },
              { id: "d", text: "List sources" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline", statement: "Grabs attention — engages reader." },
            ],
            steps: [
              { reasoning: "Headline = attention grabber.", working: "attention", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Grab attention",
            commonErrors: ["Choosing (b) — that's summary, not headline."],
          },
        },
        {
          id: "cie-ol-el-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of reviews.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review types", statement: "Film, book, product, restaurant, performance." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Film, book, product, restaurant, performance (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-art-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a review be balanced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced review", statement: "Acknowledge strengths AND weaknesses — fair judgement." },
            ],
            steps: [
              { reasoning: "Identify strengths with examples.", working: "strengths", marks: 1, markCode: "AO2" },
              { reasoning: "Identify weaknesses with examples.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Weigh both to form fair judgement.", working: "judgement", marks: 1, markCode: "AO2" },
              { reasoning: "Balance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strengths+weaknesses with examples → fair judgement.",
            commonErrors: ["One-sided review — must be balanced."],
          },
        },
        {
          id: "cie-ol-el-art-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate articles/reviews.",
          parts: [
            { label: "a", prompt: "Describe article structure.", marks: 2 },
            { label: "b", prompt: "Describe review structure.", marks: 3 },
            { label: "c", prompt: "How to write engaging headline?", marks: 2 },
            { label: "d", prompt: "Why balance reviews?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Articles/reviews", statement: "Structure, headlines, balanced judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Headline→hook→body→conclusion.", working: "article", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Title→intro→assessment→strengths/weaknesses→recommendation.", working: "review", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Short, catchy, intriguing — grab attention.", working: "headline", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Fair judgement, credibility, reader trust.", working: "balance", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) article structure (b) review structure (c) catchy headline (d) fair judgement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["One-sided review — only praise or only criticism."],
          },
        },
        {
          id: "cie-ol-el-art-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a newspaper article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To write poetry" },
              { id: "b", text: "To entertain" },
              { id: "c", text: "To inform readers about an event or issue" },
              { id: "d", text: "To sell products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Article purpose", statement: "Inform readers about event/issue." },
            ],
            steps: [
              { reasoning: "Article = inform readers.", working: "inform", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** To inform readers about an event or issue",
            commonErrors: ["Choosing (b) — that's entertainment."],
          },
        },
        {
          id: "cie-ol-el-art-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A news article has 5 paragraphs: headline, introduction, body, quotes and conclusion. A student writes an article missing 2 paragraphs. (a) How many paragraphs are required? (b) How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article structure", statement: "All 5 elements required." },
            ],
            steps: [
              { reasoning: "5 elements are required.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "2 are missing.", working: "2 missing", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: ["Forgetting quotes or conclusion."],
          },
        },
        {
          id: "cie-ol-el-art-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'headline' in an article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title that grabs attention" },
              { id: "b", text: "A byline" },
              { id: "c", text: "The conclusion" },
              { id: "d", text: "A quote" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Headline", statement: "Title grabbing attention." },
            ],
            steps: [
              { reasoning: "Headline = attention-grabbing title.", working: "title", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The title that grabs attention",
            commonErrors: ["Choosing (c) — that's a quote."],
          },
        },
        {
          id: "cie-ol-el-art-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of articles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article types", statement: "News, feature, opinion, review." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "News, feature, opinion, review (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-art-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An article has 4 facts, 3 quotes and 2 statistics. (a) How many facts are given? (b) How many quotes are given? (c) How many pieces of evidence are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article counting", statement: "Count facts, quotes, statistics." },
            ],
            steps: [
              { reasoning: "4 facts are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 quotes are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 3 plus 2 equals 9 evidence pieces.", working: "4 + 3 + 2 = 9", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 9",
            commonErrors: ["Forgetting statistics in total."],
          },
        },
        {
          id: "cie-ol-el-art-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to write an article headline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long and boring" },
              { id: "b", text: "Vague and unclear" },
              { id: "c", text: "Technical jargon" },
              { id: "d", text: "Catchy and informative" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline writing", statement: "Catchy and informative." },
            ],
            steps: [
              { reasoning: "Headline should be catchy/informative.", working: "catchy", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Catchy and informative",
            commonErrors: ["Choosing (b) — boring headlines fail."],
          },
        },
        {
          id: "cie-ol-el-art-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to write an effective news article.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article writing", statement: "Headline, introduction, facts, quotes, conclusion." },
            ],
            steps: [
              { reasoning: "Write catchy, informative headline.", working: "headline", marks: 1, markCode: "AO2" },
              { reasoning: "Introduction states who/what/when/where/why.", working: "intro", marks: 1, markCode: "AO2" },
              { reasoning: "Body presents facts and quotes objectively.", working: "body", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion summarises key points.", working: "conclusion", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Headline→intro→facts+quotes→conclusion.",
            commonErrors: ["Missing facts or quotes — article lacks substance."],
          },
        },
        {
          id: "cie-ol-el-art-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'byline' in an article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The conclusion" },
              { id: "b", text: "The headline" },
              { id: "c", text: "The author's name" },
              { id: "d", text: "A quote" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Byline", statement: "Author's name." },
            ],
            steps: [
              { reasoning: "Byline = author name.", working: "author", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The author's name",
            commonErrors: ["Choosing (b) — that's headline."],
          },
        },
        {
          id: "cie-ol-el-art-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An article needs 5 elements; a draft has only 3. How many are missing? (b) If the article is 600 words and has 5 paragraphs, how many words per paragraph on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 120, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article checking", statement: "Check elements; calculate word distribution." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missing elements.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "600 divided by 5 equals 120 words per paragraph.", working: "600 / 5 = 120", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 120 words",
            commonErrors: ["Not dividing evenly."],
          },
        },
        {
          id: "cie-ol-el-art-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply article writing skills.",
          parts: [
            { label: "a", prompt: "List article elements.", marks: 2 },
            { label: "b", prompt: "Describe article types.", marks: 2 },
            { label: "c", prompt: "How to write a good headline?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article writing", statement: "Elements, types, headline." },
            ],
            steps: [
              { part: "a", reasoning: "Headline, intro, body, quotes, conclusion.", working: "elements", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All listed.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "News, feature, opinion, review — any two.", working: "types", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Catchy and informative.", working: "headline", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) elements (b) two types (c) catchy+informative",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "All listed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Boring or vague headlines."],
          },
        },
        {
          id: "cie-ol-el-art-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which register is appropriate for a news article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slang" },
              { id: "b", text: "Informal" },
              { id: "c", text: "Casual" },
              { id: "d", text: "Formal and objective" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article register", statement: "Formal and objective." },
            ],
            steps: [
              { reasoning: "News = formal/objective.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Formal and objective",
            commonErrors: ["Choosing (b) — too casual."],
          },
        },
        {
          id: "cie-ol-el-art-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) An article needs 5 elements; if 4 are included, how many are missing? (b) If the article is 500 words and has 5 paragraphs, how many words per paragraph on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 100, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article checking", statement: "Check elements; calculate word distribution." },
            ],
            steps: [
              { reasoning: "5 minus 4 equals 1 missing element.", working: "5 - 4 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "500 divided by 5 equals 100 words per paragraph.", working: "500 / 5 = 100", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 1; (b) 100 words",
            commonErrors: ["Not calculating averages correctly."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-transactional-notes",
      title: "Transactional writing — revision notes",
      summary: "Letters, emails, reports, articles, reviews.",
      sections: [
        {
          heading: "Formats",
          body: "Formal letter: address→date→recipient→salutation→body→valediction→signature. Email: subject→greeting→body→closing→signature. Report: factual, objective. Article: engaging. Review: balanced.",
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mla5-u2-lesson-2-3",
  code: "2-3",
  title: "Formal Correspondence and Intercultural Written Communication",
  goal: "I CAN write formal letters, emails and requests with appropriate register, clear purpose, cultural awareness and precise language.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Salutation", definition: "The greeting that opens a letter or email, such as 'Dear Ms Rahman'." },
    { term: "Register", definition: "The level of formality appropriate to the context and relationship." },
    { term: "Request", definition: "A polite but clear statement asking someone to do something." },
    { term: "Acknowledgement", definition: "A statement confirming receipt or understanding of information." },
    { term: "Closing", definition: "The courteous ending of a letter, such as 'Yours sincerely'." },
  ],
  concepts: [
    {
      id: "mla5-u2-formal-correspondence",
      title: "Formal letters and requests",
      skill: "Write formal correspondence with correct structure, tone, purpose and polite request language.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "A formal letter includes: **sender's address** (optional in email), **date**, **recipient's address**, **salutation**, **opening paragraph stating purpose**, **body paragraphs**, **closing paragraph**, **complimentary close** and **name**. The opening paragraph should state why you are writing in the first two sentences.",
          },
          {
            heading: "Polite requests",
            body: "Requests use modal verbs and softeners: 'I would be grateful if you could...', 'Would it be possible to...', 'I would appreciate your assistance with...'. Avoid demands ('You must send...') unless the context requires authority. State clearly what you need, by when, and why.",
          },
          {
            heading: "Tone and precision",
            body: "Formal correspondence balances politeness with clarity. Do not be so indirect that the request is unclear. Avoid slang, excessive exclamation marks and emotional language. Use 'please' strategically, not in every sentence. End with appreciation or a courteous offer to provide further information.",
          },
        ],
        keyFormulas: [
          { name: "Opening purpose", statement: "I am writing to / I am writing in response to / I would like to request" },
          { name: "Polite request", statement: "I would be grateful if / Would it be possible / I would appreciate" },
        ],
        workedExample: {
          problem: "Write an opening sentence requesting a reference letter.",
          solution: "'I am writing to request a reference letter for my university application, which is due on 15 March.'",
        },
      },
      questions: [
        {
          id: "mla5-u2-formal-correspondence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the opening paragraph of a formal letter do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tell a long personal story" },
              { id: "b", text: "State the purpose of writing clearly and early" },
              { id: "c", text: "Include every detail of the sender's life" },
              { id: "d", text: "Apologise for writing at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter opening", statement: "Purpose should be stated early and clearly." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — opening states purpose early.", working: "purpose", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** State the purpose of writing clearly and early",
            commonErrors: ["Burying the request until the end."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Email Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Hi Ms Lee,\n\nI was wondering if you might maybe be able to send me the reading list when you get a chance? No rush at all!\n\nThanks so much!\nSam",
          },
          stem: "Revise the email to make it more formal while remaining polite.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register revision", statement: "Formal register uses precise, courteous language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — salutation becomes 'Dear Ms Lee' or 'Dear Ms Lee,'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — request is clear: 'I would be grateful if you could send me the reading list.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — removes excessive informality ('maybe', 'no rush', 'so much').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Dear Ms Lee, I would be grateful if you could send me the reading list. Thank you for your time. Kind regards, Sam",
            commonErrors: ["Keeping slang or making request too vague."],
            examinerNote: "Must balance formality and clarity.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Formal Request",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "You need to email a local museum asking for permission to photograph an exhibition for a school project. The deadline is next Friday. You must be polite but clear.",
          },
          stem: "Write the email.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal email writing", statement: "Structure, polite request, clear purpose and deadline." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — salutation and opening identify sender and purpose.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — request is polite and specific: permission to photograph for school project.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — deadline and reason are clear.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — formal closing and accurate language throughout.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Formal email with salutation, purpose, polite request, deadline and courteous close.",
            commonErrors: ["Demanding permission rather than requesting it politely."],
            examinerNote: "Must include all required elements.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Intercultural Email Task",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You are emailing a partner school in another country to arrange a cultural exchange video call. You do not know their preferred level of formality. You should be respectful, clear and open to their norms.",
          },
          stem: "Write the email and explain your intercultural choices.",
          parts: [
            { label: "a", prompt: "Write the salutation and opening paragraph.", marks: 2 },
            { label: "b", prompt: "Write the main request paragraph.", marks: 3 },
            { label: "c", prompt: "Write the closing paragraph.", marks: 1 },
            { label: "d", prompt: "Explain two intercultural choices in your email.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural correspondence", statement: "Respectful, clear and adaptable register." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — salutation is respectful and not overly familiar.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — opening states purpose clearly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — request is polite and specific.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — offers flexibility about timing/format.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — language is clear and courteous.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — closing is warm but formal.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — explains cultural choice 1: respectful formality.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — explains cultural choice 2: flexibility or clarity.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) respectful opening (b) polite flexible request (c) courteous close (d) intercultural explanations.",
            commonErrors: ["Assuming one culture's email norms apply universally."],
            examinerNote: "(d) should show awareness of uncertainty and adaptability.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the opening paragraph of a formal letter do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tell a long personal story" },
              { id: "b", text: "State the purpose of writing within the first two sentences" },
              { id: "c", text: "Thank the recipient excessively" },
              { id: "d", text: "Repeat the address block" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter structure", statement: "Purpose is stated early and clearly." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — purpose belongs in the first two sentences.", working: "early purpose", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** State the purpose of writing within the first two sentences",
            commonErrors: ["Burying the request at the end."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is the most polite way to make a request?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Send me the file now." },
              { id: "b", text: "I would be grateful if you could send me the file." },
              { id: "c", text: "You need to send the file." },
              { id: "d", text: "File. Now." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "Modals and softeners make requests courteous." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'would be grateful if you could' is a standard polite request.", working: "polite modal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I would be grateful if you could send me the file.",
            commonErrors: ["Choosing direct demands."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Letter Excerpt",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "Dear Principal,\n\nThank you for your letter about the trip. I am writing in response to your questions about dates and costs.\n\nBest regards,\nA. Rahman",
          },
          stem: "Which standard letter element is missing from this excerpt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The salutation" },
              { id: "b", text: "The date" },
              { id: "c", text: "The recipient's address" },
              { id: "d", text: "The closing phrase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter elements", statement: "Date, addresses, salutation, body, close and name are standard." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — salutation, body and close are present; date is absent.", working: "date", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The date",
            commonErrors: ["Missing that 'Best regards' is the close, not the date."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Letter Excerpt",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "I would be grateful if you could send the documents. Would it be possible to extend the deadline? I would appreciate your assistance with this matter.",
          },
          stem: "How many politeness softeners or request phrases appear?",
          response: {
            type: "numeric",
            parts: [{ label: "Polite phrases", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Request softeners", statement: "'Would be grateful', 'Would it be possible', 'would appreciate' soften requests." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — three polite request phrases = 3.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'the' or 'you' instead of phrases."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this demand as a polite request: 'You must send me the results by Friday.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Request softening", statement: "Replace commands with modal-based polite requests." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes the command 'You must'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds a softener such as 'would be grateful if' or 'would it be possible'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — retains the deadline clearly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'I would be grateful if you could send me the results by Friday.'",
            commonErrors: ["Keeping 'must' or 'need to' without softening."],
            examinerNote: "Must remain polite while staying clear.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Letter Excerpt",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "Sentence A: 'I am writing to request an extension for the essay deadline.' Sentence B: 'Hey, need more time on the essay, thx.'",
          },
          stem: "Which sentence is inappropriate for a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sentence A" },
              { id: "b", text: "Sentence B" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register matching", statement: "Slang and abbreviations are inappropriate in formal correspondence." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hey', 'thx' and vague 'need' are informal.", working: "informal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Sentence B",
            commonErrors: ["Missing the slang markers."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Letter Excerpt",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "Dear Ms Chen,\n\nI am writing to apply for the scholarship programme. I would be grateful if you could send the application form. I have attached my transcript and would welcome the opportunity to discuss my application further.\n\nYours sincerely,\nJ. Okafor",
          },
          stem: "Evaluate the letter's structure, tone and clarity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter evaluation", statement: "Purpose, polite request, courteous close." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — structure: salutation, purpose, request, close, name present.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — purpose stated early: 'I am writing to apply'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — polite request 'would be grateful if you could'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — courteous offer 'welcome the opportunity to discuss'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Well-structured, polite and clear formal letter.",
            commonErrors: ["Missing the early purpose statement."],
            examinerNote: "Must assess structure, tone and clarity together.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q12",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Letter Elements",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "A complete formal letter contains: sender's address, date, recipient's address, salutation, opening with purpose, body, closing paragraph, complimentary close and name.",
          },
          stem: "How many standard elements does a complete formal letter contain?",
          response: {
            type: "numeric",
            parts: [{ label: "Elements", answer: 8 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter elements", statement: "The standard sequence of formal letter parts." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — count the listed elements: 8.", working: "8", marks: 1, markCode: "D" },
            ],
            finalAnswer: "8",
            commonErrors: ["Merging 'body' and 'closing paragraph' into one."],
            examinerNote: "Accept 8.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Request Grammar",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "Polite requests often use modal verbs such as 'would', 'could' and 'might' to soften the demand.",
          },
          stem: "How many modal verbs are named as request softeners?",
          response: {
            type: "numeric",
            parts: [{ label: "Modal verbs", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Modal softeners", statement: "Would/could/might make requests less direct." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'would', 'could', 'might' = 3.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'such as' as a verb."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which closing is most appropriate for a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Later!" },
              { id: "b", text: "Cheers, talk soon" },
              { id: "c", text: "Yours sincerely / Yours faithfully" },
              { id: "d", text: "Bye" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complimentary close", statement: "'Yours sincerely' or 'Yours faithfully' close formal letters." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — standard formal closes are 'Yours sincerely/faithfully'.", working: "formal close", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Yours sincerely / Yours faithfully",
            commonErrors: ["Choosing informal closings."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Letter Draft",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "Draft: 'Dear Sir, I am writing about the trip. Send me the cost breakdown ASAP because I need it for the budget meeting Thursday. Thanks.'",
          },
          stem: "Read the draft and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify two informal or abrupt features.", marks: 2 },
            { label: "b", prompt: "Rewrite the request politely.", marks: 2 },
            { label: "c", prompt: "State what additional element a complete letter would need.", marks: 2 },
            { label: "d", prompt: "Write a corrected opening paragraph (50-70 words).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter revision", statement: "Politeness, clarity and complete structure." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — informal feature 1: 'ASAP' and 'Thanks'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — informal feature 2: abrupt command 'Send me'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — polite rewrite uses 'would be grateful if you could'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — deadline retained clearly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — missing element identified, e.g., date or complimentary close.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — element is genuinely missing from the draft.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — corrected paragraph is formal and polite.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — within word range and states purpose clearly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) ASAP/Thanks; abrupt command (b) polite request (c) missing element (d) corrected paragraph.",
            commonErrors: ["Only fixing spelling, not tone."],
            examinerNote: "(d) must be a complete opening paragraph.",
          },
        },
        {
          id: "mla5-u2-formal-correspondence-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Letter Excerpt",
            author: "Written for Akademik Space",
            source: "Correspondence practice",
            text: "The writer uses 'please' only once, in 'Please find attached the form', rather than in every sentence.",
          },
          stem: "Why is strategic use of 'please' effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the letter longer" },
              { id: "b", text: "It preserves politeness without weakening clarity" },
              { id: "c", text: "It is required by law" },
              { id: "d", text: "It confuses the reader" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone balance", statement: "Politeness should support, not replace, clear requests." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — overusing 'please' weakens directness; strategic use stays clear.", working: "balance", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It preserves politeness without weakening clarity",
            commonErrors: ["Thinking more 'please' equals more politeness."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u2-intercultural-writing",
      title: "Audience and cultural adaptation",
      skill: "Adapt written communication for different audiences and cultural contexts while maintaining clarity and respect.",
      lesson: {
        sections: [
          {
            heading: "Audience awareness",
            body: "Effective writers adjust language to audience. A message to a teacher uses formal register and explicit politeness; a message to a friend uses informal tone and shared references. The goal is not to sound the same everywhere but to choose the register that fits the relationship and purpose.",
          },
          {
            heading: "Cultural adaptation",
            body: "Different cultures may expect different levels of directness, formality and personal information. In some contexts, requests should be softened further; in others, clarity is preferred. When unsure, use neutral polite language, avoid idioms, and check whether the recipient prefers email or another channel.",
          },
          {
            heading: "Avoiding miscommunication",
            body: "Idioms, humour and sarcasm often fail across cultures. Prefer literal, precise language. If humour is necessary, keep it gentle and explain context. For sensitive topics, acknowledge possible differences: 'I realise communication styles may differ; please let me know if anything is unclear.'",
          },
        ],
        keyFormulas: [
          { name: "Audience adaptation", statement: "Register + purpose + relationship = appropriate language" },
          { name: "Cultural safety", statement: "Literal language + polite check + no risky idiom/humour" },
        ],
        workedExample: {
          problem: "Rewrite 'Break a leg!' for a formal email to a partner school.",
          solution: "'We wish you every success with the presentation.'",
        },
      },
      questions: [
        {
          id: "mla5-u2-intercultural-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'audience awareness' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing for as many people as possible" },
              { id: "b", text: "Choosing language appropriate to the reader and purpose" },
              { id: "c", text: "Using the longest possible words" },
              { id: "d", text: "Avoiding all personal references" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience awareness", statement: "Adapting language to reader and purpose." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — audience awareness = appropriate language.", working: "appropriate", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Choosing language appropriate to the reader and purpose",
            commonErrors: ["Confusing audience awareness with length or complexity."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Message A (to friend): 'Hey! Can't wait for the trip. Let me know if you need anything.'\n\nMessage B (to exchange partner): 'Dear Ana, I am looking forward to our visit. Please inform me if you require any further information.'",
          },
          stem: "Explain how register changes between the two messages and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register adaptation", statement: "Friend = informal; partner = formal and explicit." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — Message A uses informal greeting and contractions.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Message B uses formal salutation and precise request.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — difference is justified by relationship and purpose.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A is informal for a friend; B is formal for an exchange partner due to relationship and purpose.",
            commonErrors: ["Describing difference without explaining audience."],
            examinerNote: "Must link register to audience.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Sensitive Message",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You must tell a partner school that your class cannot attend the proposed date because of a national holiday. You want to reschedule politely and show respect for their planning.",
          },
          stem: "Write the message and explain how you avoid sounding dismissive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sensitive intercultural writing", statement: "Explain constraint, apologise appropriately, offer alternative." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — clearly states reason: national holiday prevents attendance.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — apologises or expresses regret appropriately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — offers alternative date or asks for their availability.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — tone is respectful and not dismissive.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Message explains holiday constraint, expresses regret, proposes rescheduling and remains respectful.",
            commonErrors: ["Giving no reason or sounding entitled."],
            examinerNote: "Must balance honesty with courtesy.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Adaptation Task",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Original informal message: 'Hey, the project is a bit messy. Can you fix your part? Need it soon!'\n\nAudience options: (A) a close classmate; (B) a teacher coordinating the project.",
          },
          stem: "Rewrite the message for each audience and explain the changes.",
          parts: [
            { label: "a", prompt: "Rewrite for the close classmate.", marks: 2 },
            { label: "b", prompt: "Rewrite for the teacher.", marks: 3 },
            { label: "c", prompt: "Explain two differences in tone or register.", marks: 2 },
            { label: "d", prompt: "Explain why the teacher version avoids blame.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience-specific rewriting", statement: "Same content, different register and politeness." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — classmate version is informal but still clear.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — retains friendly tone and directness.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — teacher version is polite and precise.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — states issue and deadline without blame.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — formal salutation and courteous close.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains register difference.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains politeness/directness difference.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — avoids accusatory 'fix your part'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) informal classmate version (b) formal teacher version (c) register/politeness differences (d) blame avoided.",
            commonErrors: ["Using identical language for both audiences."],
            examinerNote: "Both versions must convey the same information.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'audience awareness' mean in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the same message to everyone" },
              { id: "b", text: "Adjusting language to the relationship, purpose and expectations of the reader" },
              { id: "c", text: "Using the longest possible sentences" },
              { id: "d", text: "Avoiding all politeness" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience awareness", statement: "Choose register that fits relationship, purpose and context." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — register adapts to audience.", working: "adaptation", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Adjusting language to the relationship, purpose and expectations of the reader",
            commonErrors: ["Using one register for all audiences."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should idioms be avoided in messages to people from different cultures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always grammatically incorrect" },
              { id: "b", text: "They often fail to translate and may confuse or offend" },
              { id: "c", text: "They make messages too short" },
              { id: "d", text: "They are too formal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural safety", statement: "Idioms and humour often fail across cultures; prefer literal language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — idioms rely on shared cultural knowledge.", working: "untranslatable", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** They often fail to translate and may confuse or offend",
            commonErrors: ["Assuming idioms are universally understood."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Message A (to a friend): 'Hey! Wanna grab lunch tmrw? The new cafe is lit.'\nMessage B (to a partner school): 'Dear colleagues, I would like to invite your students to our annual science fair on 20 May. I would be grateful for your response by 30 April.'",
          },
          stem: "Which message is appropriate for the partner school?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Message A" },
              { id: "b", text: "Message B" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register matching", statement: "Formal inter-school communication requires formal register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — B uses salutation, precise dates and polite request.", working: "formal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Message B",
            commonErrors: ["Thinking informal warmth suits all contexts."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Informal Message",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Message: 'Hey! Wanna grab lunch tmrw? The new cafe is lit, no cap.'",
          },
          stem: "How many informal markers appear in this message?",
          response: {
            type: "numeric",
            parts: [{ label: "Informal markers", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register identification", statement: "Slang, abbreviations and casual greetings mark informal register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hey', 'Wanna', 'tmrw', 'lit/no cap' = at least 4 informal markers.", working: "4", marks: 1, markCode: "D" },
            ],
            finalAnswer: "4",
            commonErrors: ["Missing 'tmrw' or 'lit'."],
            examinerNote: "Accept 4 or more.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Adapt this message for a formal email to a university admissions office: 'Hey, I need u to send me the application form asap.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register transformation", statement: "Replace slang and demands with formal polite language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — removes 'Hey', 'u', 'asap'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — uses formal greeting and 'I would be grateful if you could'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — states the request clearly and politely.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'Dear Admissions Office, I would be grateful if you could send me the application form at your earliest convenience.'",
            commonErrors: ["Keeping abbreviations while adding 'please'."],
            examinerNote: "Must transform register fully.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Draft for a partner school: 'We are absolutely thrilled to host you — break a leg at the presentation! Also, fingers crossed the weather behaves.'",
          },
          stem: "Which feature makes this draft risky for an intercultural audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too short" },
              { id: "b", text: "It uses idioms ('break a leg', 'fingers crossed') that may not translate" },
              { id: "c", text: "It is too formal" },
              { id: "d", text: "It contains no greeting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Avoiding risky idiom", statement: "Idioms rely on shared cultural knowledge and may confuse." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'break a leg' and 'fingers crossed' are culture-specific idioms.", working: "idioms", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It uses idioms ('break a leg', 'fingers crossed') that may not translate",
            commonErrors: ["Missing the idiomatic expressions."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Drafts",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Draft A to a local friend: 'Yo, the meeting got moved to Rm 4 — don't be late!' Draft B to a visiting teacher: 'Dear Ms Lopez, I am writing to inform you that the meeting has been rescheduled to Room 4 at 14:00. Please let me know if this causes any difficulty.'",
          },
          stem: "Analyse how each draft adapts to its audience and what Draft B adds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience adaptation", statement: "Register, detail and politeness adjust to relationship and context." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — Draft A: informal ('Yo', 'don't be late') suits a friend.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Draft B: salutation, precise time, polite check suits a visitor.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Draft B adds explicit time and an offer to help ('let me know').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — conclusion: adaptation is appropriate in both cases.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Both drafts fit their audiences; B adds precision, formality and a courteous check.",
            commonErrors: ["Claiming one draft is simply better without context."],
            examinerNote: "Must compare audience fit, not absolute quality.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q12",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Formal Version",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Formal version: 'I would be grateful if you could confirm receipt at your earliest convenience. Should any difficulties arise, please do not hesitate to contact me.'",
          },
          stem: "How many politeness or softening expressions appear in the formal version?",
          response: {
            type: "numeric",
            parts: [{ label: "Softening expressions", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Politeness counting", statement: "'Would be grateful', 'at your earliest convenience', 'do not hesitate' soften requests." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — count the three softening phrases.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'the' or 'please' alone."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Writing Principle",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Effective intercultural writers choose the register that fits the relationship and purpose.",
          },
          stem: "How many factors determine the appropriate register?",
          response: {
            type: "numeric",
            parts: [{ label: "Factors", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register selection", statement: "Relationship and purpose determine register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — relationship + purpose = 2 factors.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'writers' as a factor."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When you are unsure about a recipient's cultural expectations, what is the safest approach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use heavy slang to seem friendly" },
              { id: "b", text: "Use neutral polite language, avoid idioms, and offer to clarify" },
              { id: "c", text: "Send the message in your strongest language only" },
              { id: "d", text: "Assume all cultures share your norms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural safety", statement: "Neutral politeness plus an offer to clarify reduces miscommunication." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — neutral polite language is the lowest-risk option.", working: "neutral+clarify", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Use neutral polite language, avoid idioms, and offer to clarify",
            commonErrors: ["Choosing familiarity over safety."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Message to a classmate: 'dude the test got moved to friday, you in?'\n\nSame information to a teacher: 'Dear Mr Hale, I am writing to inform you that our test has been rescheduled to Friday. Please confirm whether you require any further information.'",
          },
          stem: "Read the two messages and complete the tasks.",
          parts: [
            { label: "a", prompt: "State the shared purpose of both messages.", marks: 1 },
            { label: "b", prompt: "Give two register differences between the messages.", marks: 2 },
            { label: "c", prompt: "Why is the teacher's version more appropriate for that audience?", marks: 2 },
            { label: "d", prompt: "Write a 60-80 word message to a partner school about the same change.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience adaptation", statement: "Same information, different register for different audiences." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — inform that the test moved to Friday.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — difference 1: informal slang vs formal salutation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — difference 2: casual 'you in?' vs polite offer of information.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — teacher version is precise, respectful and complete.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — matches the formal teacher-student relationship.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — message is formal, clear and culturally safe.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — includes greeting, purpose and courteous close.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — within word range and appropriate for partner school.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) test rescheduled to Friday (b) slang vs formal; casual vs courteous (c) fits formal relationship (d) appropriate partner-school message.",
            commonErrors: ["Using the classmate's casual tone for the teacher."],
            examinerNote: "(d) must match a formal intercultural audience.",
          },
        },
        {
          id: "mla5-u2-intercultural-writing-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Message Revision",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Original: 'Your presentation was a total disaster — like, nobody got it.' Revised: 'Thank you for your presentation. Some sections may have been unclear; I would welcome the opportunity to discuss them.'",
          },
          stem: "Why is the revised version more interculturally appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is shorter" },
              { id: "b", text: "It replaces harsh judgement with respectful, precise language" },
              { id: "c", text: "It uses more slang" },
              { id: "d", text: "It avoids giving any feedback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respectful feedback", statement: "Criticism should be precise and courteous, not emotive." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'disaster' becomes 'may have been unclear'; tone stays respectful.", working: "respectful", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It replaces harsh judgement with respectful, precise language",
            commonErrors: ["Thinking blunt honesty is always better."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
  ],
};

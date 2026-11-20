import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cile-u7-lesson-7-1",
  code: "7-1",
  title: "Transactional writing: formal and informal letters",
  goal: "I CAN write formal and informal letters appropriate to their purpose, audience and relationship.",
  standards: ["0861 Writing: transactional skills"],
  vocabulary: [
    { term: "Transactional writing", definition: "Writing with a practical purpose — letters, emails, reports, requests." },
    { term: "Formal letter", definition: "A letter to someone in authority or an unknown recipient — structured and polite." },
    { term: "Informal letter", definition: "A letter to friends or family — relaxed tone, personal content." },
    { term: "Register", definition: "The level of formality — formal for authority, informal for friends." },
    { term: "Salutation", definition: "The greeting — 'Dear Sir/Madam' (formal) or 'Dear Sam' (informal)." },
    { term: "Sign-off", definition: "The closing — 'Yours faithfully' (formal unknown) / 'Best wishes' (informal)." },
  ],
  concepts: [
    {
      id: "cile-u7-formal-informal",
      title: "Formal vs informal letters",
      skill: "Choose appropriate register, structure and conventions for formal and informal correspondence.",
      lesson: {
        sections: [
          {
            heading: "Formal letters",
            body: "- **Purpose**: complaints, requests, applications, official enquiries.\n- **Structure**: sender's address → date → recipient's address → salutation → body → sign-off.\n- **Register**: 'Dear Sir/Madam', 'I am writing to...', 'Yours faithfully'.\n- **Tone**: polite, respectful, objective.",
          },
          {
            heading: "Informal letters",
            body: "- **Purpose**: personal news, thanks, invitations, catching up.\n- **Structure**: less rigid — greeting, news, questions, sign-off.\n- **Register**: 'Dear Sam', 'How are you?', 'Best wishes', 'Love'.\n- **Tone**: warm, relaxed, personal — contractions fine.",
          },
          {
            heading: "Choosing the register",
            body: "Ask: Who is the recipient? What is our relationship? What is the purpose?\n\n- Head teacher, council, company → formal.\n- Friend, family, cousin → informal.\n- When in doubt, formal is safer.",
          },
        ],
        keyFormulas: [
          { name: "Register choice", statement: "Recipient + relationship + purpose = register. Authority/unknown → formal; friend/family → informal." },
        ],
        workedExample: {
          problem: "Letter to a friend vs letter to the head teacher about a broken window — what changes?",
          solution: "Friend: 'Hey, guess what — I broke a window!' Informal, contractions, personal. Head teacher: 'I am writing to report damage to the library window. It occurred on Tuesday at approximately 3pm. I apologise for the damage.' Formal, structured, accountable.",
        },
      },
      questions: [
        {
          id: "cile-u7-reg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which salutation is appropriate for a formal letter to an unknown recipient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dear Sam" },
              { id: "b", text: "Dear Sir/Madam" },
              { id: "c", text: "Hi there" },
              { id: "d", text: "Hey" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Salutation", statement: "Formal letters use 'Dear Sir/Madam' or 'Dear [Title]'." },
            ],
            steps: [
              { reasoning: "Unknown recipient requires formal salutation.", working: "\\text{'Dear Sir/Madam'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Dear Sir/Madam",
            commonErrors: ["Choosing (a) — 'Dear Sam' is informal."],
          },
        },
        {
          id: "cile-u7-reg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why register matters in letter writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Wrong register damages credibility — too casual seems rude, too formal seems distant." },
            ],
            steps: [
              { reasoning: "Wrong register damages the relationship or the message's effectiveness.", working: "\\text{credibility}", marks: 1, markCode: "AO2" },
              { reasoning: "Formal for authority shows respect; informal for friends shows warmth.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Register must match the relationship — too casual to authority seems rude, too formal to friends seems distant. Correct register shows social awareness and protects the message's effectiveness.",
            commonErrors: ["Saying 'it is a rule' — the reason is relational and rhetorical."],
          },
        },
        {
          id: "cile-u7-reg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this informal sentence for a formal letter: 'Hey, the computer in the library is busted again.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal register", statement: "Replace slang with precise, polite language." },
            ],
            steps: [
              { reasoning: "Problem: 'Hey' and 'busted' are informal.", working: "\\text{informal}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'I am writing to report that the library computer is not functioning.'", working: "\\text{formal}", marks: 1, markCode: "AO2" },
              { reasoning: "Add context: 'again' → 'for the second time this month'.", working: "\\text{context}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: formal, precise, accountable.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'I am writing to report that the library computer is not functioning. This is the second time this month that it has been out of service. I would appreciate your assistance in resolving this matter.'",
            commonErrors: ["Keeping 'busted' or 'Hey' — formal register requires complete replacement."],
          },
        },
        {
          id: "cile-u7-reg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You need to write two letters about the same issue: one to a friend, one to the head teacher.",
          parts: [
            { label: "a", prompt: "Choose a suitable issue.", marks: 1 },
            { label: "b", prompt: "Write the opening of the informal letter to a friend.", marks: 2 },
            { label: "c", prompt: "Write the opening of the formal letter to the head teacher.", marks: 3 },
            { label: "d", prompt: "Explain three differences in register, structure or tone.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register comparison", statement: "Same issue, different audience = different register, structure and tone." },
            ],
            steps: [
              { part: "a", reasoning: "Issue is suitable for both audiences.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Informal: relaxed greeting, personal tone, contractions.", working: "\\text{informal}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Sounds like a friend writing.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal: addresses, date, 'Dear Head Teacher', purpose-first.", working: "\\text{formal format}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Polite, structured, respectful.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Appropriate conventions.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Three differences identified.", working: "\\text{differences}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Differences accurately described.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Explanations link to audience.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) suitable issue (b) informal opening (c) formal opening (d) three register/structure/tone differences explained",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate informal opening.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong register.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Correct formal conventions.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Three clear differences explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) listing differences without explaining why they matter for the audience."],
          },
        },
      ],
    },
    {
      id: "cile-u7-emails-reports",
      title: "Emails and reports",
      skill: "Write effective emails and reports using appropriate conventions and structure.",
      lesson: {
        sections: [
          {
            heading: "Email conventions",
            body: "- **Subject line**: clear and specific — 'Request for library book renewal'.\n- **Greeting**: 'Dear Ms Khan' or 'Hello' — match the relationship.\n- **Body**: purpose first, then details, then request.\n- **Sign-off**: 'Kind regards' (formal) or 'Best' (semi-formal).",
          },
          {
            heading: "Report conventions",
            body: "- **Title**: states subject and purpose.\n- **Introduction**: why the report was written.\n- **Findings**: organised by headings — chronological, category, importance.\n- **Conclusion**: summary and recommendations.\n\nReports are factual, objective, third person — 'it was found that' not 'I think'.",
          },
        ],
        keyFormulas: [
          { name: "Email + report", statement: "Email: subject + greeting + purpose-first body + sign-off. Report: title + intro + headed findings + conclusion." },
        ],
        workedExample: {
          problem: "Email subject line: 'About the trip'. Improve it.",
          solution: "'Year 9 Trip to Science Museum — Permission Slip Required' — specific, actionable, includes deadline/context.",
        },
      },
      questions: [
        {
          id: "cile-u7-email-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most effective email subject line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hi" },
              { id: "b", text: "Question about homework" },
              { id: "c", text: "Urgent: Assignment deadline extension request — Science, due Friday" },
              { id: "d", text: "Stuff" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "Specific, actionable, includes context and deadline." },
            ],
            steps: [
              { reasoning: "(c) is specific, urgent, and actionable.", working: "\\text{specific/urgent}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Urgent: Assignment deadline extension request — Science, due Friday",
            commonErrors: ["Choosing (b) — too vague to act on."],
          },
        },
        {
          id: "cile-u7-email-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should the purpose of an email appear in the first paragraph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Purpose-first", statement: "Busy readers need the request immediately." },
            ],
            steps: [
              { reasoning: "Recipients skim — they need to know why you are writing instantly.", working: "\\text{skim}", marks: 1, markCode: "AO2" },
              { reasoning: "Burying the purpose risks the email being ignored.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Recipients skim emails — the purpose must be clear immediately so they can decide whether to act, respond or file it.",
            commonErrors: ["Saying 'it is polite' — the reason is reader efficiency."],
          },
        },
        {
          id: "cile-u7-email-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a report using 'I think' and 'in my opinion' throughout. Rewrite the approach for an objective report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Objective register", statement: "Reports use third person and factual language, not personal opinion." },
            ],
            steps: [
              { reasoning: "Problem: 'I think' is subjective — reports must be objective.", working: "\\text{'I think'}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'The findings suggest...' or 'It was observed that...'.", working: "\\text{objective}", marks: 1, markCode: "AO2" },
              { reasoning: "Present evidence, not opinion — let facts speak.", working: "\\text{evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: credible, professional, objective.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Replace 'I think' with 'The findings suggest', 'It was observed that', or 'The data indicates' — reports present evidence objectively, not personal opinion.",
            commonErrors: ["Replacing 'I think' with 'I believe' — still subjective."],
          },
        },
        {
          id: "cile-u7-email-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing an email to your teacher requesting an extension on an assignment.",
          parts: [
            { label: "a", prompt: "Write a subject line.", marks: 1 },
            { label: "b", prompt: "Write the opening including greeting and purpose.", marks: 2 },
            { label: "c", prompt: "Explain your reason clearly and politely.", marks: 3 },
            { label: "d", prompt: "State your request and proposed new deadline.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email conventions", statement: "Subject + greeting + purpose + reason + request + sign-off." },
            ],
            steps: [
              { part: "a", reasoning: "Subject is specific and actionable.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Greeting appropriate to teacher.", working: "\\text{greeting}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Purpose stated immediately.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Reason is clear and honest.", working: "\\text{reason}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Tone is polite and respectful.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "No excessive apology or justification.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Specific request with new deadline.", working: "\\text{request}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Professional sign-off.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Complete and courteous.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) specific subject (b) greeting + purpose (c) polite reason (d) specific request + deadline + sign-off",
            levels: [
              { level: "Level 1", marks: "1", descriptor: "Specific subject.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Greeting + purpose.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Polite, clear reason.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Specific request + deadline.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) over-apologising or making excuses — state the reason once, politely."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u7-transactional-notes",
      title: "Transactional writing — revision notes",
      summary: "Formal/informal letters, emails and reports — conventions and structure.",
      sections: [
        {
          heading: "Letters and emails",
          body: "Formal: addresses, date, salutation, purpose-first, evidence, sign-off. Informal: relaxed greeting, personal news, warm sign-off. Register must match relationship.",
        },
        {
          heading: "Reports",
          body: "Title, introduction, headed findings, conclusion. Objective third person — 'it was found that', not 'I think'.",
        },
        {
          heading: "Writing checklist",
          body: "Is the purpose clear early? Is the register appropriate? Are conventions followed? Is the request specific?",
        },
      ],
    },
  ],
};

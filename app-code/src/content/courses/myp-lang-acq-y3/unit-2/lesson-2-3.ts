import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mla3-u2-lesson-2-3",
  code: "2-3",
  title: "Writing Emails and Short Formal Messages",
  goal: "I CAN write clear informal and semi-formal emails with appropriate structure, register and detail.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Criterion B: Reading",
  ],
  vocabulary: [
    { term: "Email", definition: "An electronic message sent over the internet." },
    { term: "Subject line", definition: "The short title at the top telling what the email is about." },
    { term: "Register", definition: "The level of formality in language — informal for friends, formal for teachers." },
    { term: "Sign-off", definition: "The closing of an email: 'Best wishes', 'Kind regards', 'Bye'." },
    { term: "Request", definition: "Asking for something: 'Could you...', 'I would like...'." },
  ],
  concepts: [
    {
      id: "mla3-u2-emails-advanced",
      title: "Writing better emails",
      skill: "Write emails with clear purpose, appropriate register and complete information.",
      lesson: {
        sections: [
          {
            heading: "Email structure at MYP 3",
            body: "A good email has: **To** (recipient), **Subject** (clear topic), **Greeting** ('Dear...' / 'Hi...'), **Body** (paragraphs: reason, details, request), and **Sign-off** ('Best wishes', 'Kind regards', or 'Bye' for friends). The body should answer: Why am I writing? What do I need? What happens next?",
          },
          {
            heading: "Choosing your register",
            body: "Match your language to the reader: **friend** → 'Hi Sam, ... Bye, Tom' with contractions and casual words. **Teacher** → 'Dear Mr Smith, ... Yours sincerely' with full forms and polite requests. **Semi-formal** (club, organisation) → 'Hello, ... Kind regards'. Wrong register can make a good message seem rude or odd.",
          },
          {
            heading: "Making requests clearly",
            body: "Requests work best when they are specific: not 'Can you help me?' but 'Could you send me the notes from Monday's lesson by Wednesday?' Include: what you need, when you need it, and why if helpful. Polite request forms: 'Could you...', 'Would you mind...', 'I would be grateful if...'.",
          },
        ],
        keyFormulas: [
          { name: "Email structure", statement: "To + Subject + Greeting + Body (reason/details/request) + Sign-off" },
          { name: "Register choice", statement: "Friend: Hi/Bye + contractions | Teacher: Dear/Yours sincerely + full forms" },
        ],
        workedExample: {
          problem: "Write a subject line and greeting for an email to your teacher asking for extra help with maths.",
          solution: "Subject: Extra maths help / 'Dear Mr Jones,' — formal register for a teacher.",
        },
      },
      questions: [
        {
          id: "mla3-u2-emails-advanced-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sign-off is appropriate for an email to a teacher?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bye, Tom" },
              { id: "b", text: "TTYL" },
              { id: "c", text: "See ya!" },
              { id: "d", text: "Yours sincerely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email sign-offs", statement: "Formal emails use 'Yours sincerely' / 'Kind regards'; informal use 'Bye'/'See you'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Yours sincerely' is the formal sign-off.", working: "Yours sincerely", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Yours sincerely",
            commonErrors: ["Choosing informal sign-offs for a teacher."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a polite request for an email: ask a friend to send you their notes from a lesson you missed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "Could you...? / Would you mind...? + specific detail." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite request form used.", working: "Could you send me...", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — specifies what (notes) and when/why.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Could you send me your notes from Monday's lesson? I was absent.'",
            commonErrors: ["Vague request without details."],
            examinerNote: "Must be specific and polite.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Email Openings",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Email 1 (to friend): 'Hi Sam! Guess what — I won the art competition!!! You won't believe it!'\n\nEmail 2 (to teacher): 'Dear Mrs Lee, I am writing to inform you that I will be absent from school on Thursday due to a medical appointment. Yours sincerely, Alex.'",
          },
          stem: "Explain why each email uses its register — what would happen if you swapped them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register consequences", statement: "Wrong register makes messages inappropriate or rude." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Email 1 informal fits friend; excitement is appropriate.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Email 2 formal fits teacher; absence needs official tone.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explains the mismatch: slang to teacher seems rude; formal to friend seems cold.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, accurate explanation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Each register fits its audience; swapping would make messages inappropriate or rude.",
            commonErrors: ["Saying only 'they are different' without consequences."],
            examinerNote: "Must explain what happens if swapped.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a semi-formal email to the head of your school club asking to organise an event.",
          parts: [
            { label: "a", prompt: "Write To, Subject and greeting in semi-formal register.", marks: 2 },
            { label: "b", prompt: "Write the body: state your request, give two details (what/when), and ask a question.", marks: 4 },
            { label: "c", prompt: "End with a polite closing and sign-off.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semi-formal email", statement: "Polite but not stiff: clear request, details, question, appropriate sign-off." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — subject line clear; greeting appropriate ('Dear...' or 'Hello...').", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — semi-formal register (no slang, no full officialese).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — clear request stated.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — two details given (what event, when).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct question form.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — polite, clear language throughout.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — polite closing sentence.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — appropriate sign-off ('Kind regards', 'Best wishes').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "To/Subject/Greeting + request + 2 details + question + polite close + sign-off.",
            commonErrors: ["Too casual or too stiff register.", "Missing details of the request."],
            examinerNote: "Semi-formal = polite but not overly official.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of an email tells the reader what the message is about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The signature" },
              { id: "b", text: "The sign-off" },
              { id: "c", text: "The greeting" },
              { id: "d", text: "The subject line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subject line", statement: "Short title at the top telling what the email is about." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — subject line = topic of email.", working: "subject line", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** The subject line",
            commonErrors: ["Confusing greeting with subject."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sign-off is appropriate for an email to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours faithfully" },
              { id: "b", text: "To whom it may concern" },
              { id: "c", text: "Dear Sir" },
              { id: "d", text: "See you soon!" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign-off register", statement: "Friends get casual sign-offs; officials get formal ones." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'See you soon!' fits a friend.", working: "See you soon!", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** See you soon!",
            commonErrors: ["Choosing stiff formal sign-offs for friends."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the BEST subject line for an email asking your teacher for extra maths help?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "!!!" },
              { id: "b", text: "Extra maths help please" },
              { id: "c", text: "Question" },
              { id: "d", text: "hi" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject lines", statement: "Clear, specific subject tells the reader the topic." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Extra maths help please' is clear and specific.", working: "Extra maths help please", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Extra maths help please",
            commonErrors: ["Vague subjects like 'hi' or 'Question'."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which request is the most specific and effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Could you send me the notes from Monday's lesson by Wednesday? I was absent." },
              { id: "b", text: "Do something about it." },
              { id: "c", text: "I need stuff." },
              { id: "d", text: "Can you help me?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clear requests", statement: "Specific requests say what, when and why." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — B gives what (notes), when (Wednesday) and why (absent).", working: "specific request", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Could you send me the notes from Monday's lesson by Wednesday? I was absent.",
            commonErrors: ["Choosing vague requests."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Email to Fix",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Subject: party\n\nhi\n\ni cant come sat, sorry. maybe next time\n\nbye",
          },
          stem: "What is the main problem with this email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has too many questions" },
              { id: "b", text: "It lacks all structure and detail — no greeting, reason or clear purpose" },
              { id: "c", text: "It uses too many formal words" },
              { id: "d", text: "It is too long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email completeness", statement: "Good emails have greeting, purpose, details and sign-off." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — email is fragmentary: 'hi', 'i cant come', no structure.", working: "lacks structure/detail", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It lacks all structure and detail — no greeting, reason or clear purpose",
            commonErrors: ["Not noticing missing greeting/sign-off."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which email part should come FIRST after the subject line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The greeting" },
              { id: "b", text: "The sign-off" },
              { id: "c", text: "The request" },
              { id: "d", text: "Your name" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email structure", statement: "To + Subject + Greeting + Body + Sign-off." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — greeting opens the body.", working: "greeting", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** The greeting",
            commonErrors: ["Putting the request first."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Model Email",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Subject: Trip permission\n\nDear Mrs Hale,\n\nI am writing to ask for permission for my son to join the school trip to the museum on Friday. He is very excited about it. Could you please confirm the cost and whether he needs to bring anything?\n\nThank you for your time.\n\nKind regards,\nRavi",
          },
          stem: "How many paragraphs are in the body of this email?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email body structure", statement: "Body usually has reason/details paragraph + request/closing paragraph." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — body has two paragraphs: the request paragraph and 'Thank you for your time.'", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting greeting or sign-off as body paragraphs."],
            examinerNote: "Count body paragraphs only.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Request Email",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Dear Mr Smith, I am writing because I missed Monday's lesson and need the notes. Could you please send them to me by Wednesday? Also, is there a way to catch up on the practical work? Thank you. Yours sincerely, Ana.",
          },
          stem: "How many requests does Ana make? How many polite request forms does she use?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Request analysis", statement: "Each request asks for something; polite forms include 'Could you'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — requests: send notes + catch up on practical work = 2.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Could you please' = 1 polite form ('is there a way' is a question).", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 requests; 1 explicit polite form.",
            commonErrors: ["Counting 'Thank you' as a request."],
            examinerNote: "Requests ask for action/information.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a polite request sentence you could use in an email to a teacher.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "'Could you...', 'Would you mind...', 'I would be grateful if...'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite request form used.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — grammatically correct sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Could you please send me the homework list?'",
            commonErrors: ["Demanding tone instead of polite."],
            examinerNote: "Must be polite, not a command.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Incomplete Email",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Dear Club,\n\nI want to organise a quiz night. Please help.\n\nTom",
          },
          stem: "This email is missing key information. Rewrite it adding: the date, the venue, and a specific question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email completeness", statement: "Requests need what/when/where details." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — date added.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — venue added.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — specific question asked correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I would like to organise a quiz night on Friday 20 March in the school hall. Could you please confirm if the room is available?'",
            commonErrors: ["Adding details but no question."],
            examinerNote: "All three additions needed.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Email to Improve",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Subject: help\n\nHi,\n\nI need help with my project. It is due soon. Can you help?\n\nThanks,\nSam",
          },
          stem: "Improve this email by adding specific details and a clearer request.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email improvement", statement: "Add what the project is, when it is due, and exactly what help is needed." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — subject line improved (clearer topic).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — specific details added (project type, due date).", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — clearer, more specific request.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — email is now clearer and more complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Clearer subject + specific details + precise request.",
            commonErrors: ["Still vague — no specifics added."],
            examinerNote: "Must add real detail, not just length.",
          },
        },
        {
          id: "mla3-u2-emails-advanced-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a semi-formal email to the head of a school club.",
          parts: [
            { label: "a", prompt: "Write To, Subject and greeting in semi-formal register.", marks: 2 },
            { label: "b", prompt: "Write the body: your request, two details, and one question.", marks: 3 },
            { label: "c", prompt: "End with a polite closing and sign-off.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semi-formal email", statement: "Polite, clear, structured; not too casual or too stiff." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — subject + appropriate greeting.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — semi-formal register (no slang, not overly official).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — clear request stated.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — two details (what/when) given.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct question form.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — polite closing + sign-off ('Kind regards').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "To/Subject/Greeting + request + 2 details + question + closing + sign-off.",
            commonErrors: ["Too casual or too stiff.", "Missing details."],
            examinerNote: "Semi-formal balance is key.",
          },
        },
      ],
    },
    {
      id: "mla3-u2-editing",
      title: "Editing and improving your writing",
      skill: "Revise your own writing for content, organisation and accuracy using an editing checklist.",
      lesson: {
        sections: [
          {
            heading: "Editing vs proofreading",
            body: "**Editing** improves the content and organisation: Is the message clear? Does it answer the question? Is it well-structured? **Proofreading** fixes surface errors: spelling, punctuation, grammar. Do both — first edit for meaning, then proofread for errors.",
          },
          {
            heading: "The editing checklist",
            body: "Ask yourself: (1) Does it answer the question? (2) Is there a clear beginning, middle and end? (3) Are my ideas in a logical order? (4) Did I include all the required details? (5) Is my language appropriate for the audience? Then proofread: capitals, full stops, verb forms, spelling.",
          },
          {
            heading: "Common improvements",
            body: "Quick wins: replace 'very good' with a stronger word ('excellent'), join short choppy sentences with 'and/but/because', and add one specific detail to make it interesting. But only change what makes it better — do not add complexity for its own sake.",
          },
        ],
        keyFormulas: [
          { name: "Editing checklist", statement: "Answers question? → clear structure? → all details? → right register? → then proofread" },
        ],
        workedExample: {
          problem: "Draft: 'I went to the park. It was fun. I played.' How could you improve it?",
          solution: "Add detail and feelings: 'I went to the park with my friends. We played football and had a great time — it was so much fun!'",
        },
      },
      questions: [
        {
          id: "mla3-u2-editing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between editing and proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Editing is only for spelling" },
              { id: "b", text: "Editing improves content/organisation; proofreading fixes errors" },
              { id: "c", text: "They are the same thing" },
              { id: "d", text: "Proofreading is only for content" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Editing vs proofreading", statement: "Editing = content/structure; proofreading = surface errors." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — editing is deeper than proofreading.", working: "content vs errors", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Editing improves content/organisation; proofreading fixes errors",
            commonErrors: ["Thinking they are identical."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "List two questions from the editing checklist.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Editing checklist", statement: "Does it answer the question? Is it well-structured? Are details included?" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — first checklist question.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — second checklist question.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Does it answer the question?' + 'Is it well-structured?'",
            commonErrors: ["Listing proofreading items (spelling) instead of editing items."],
            examinerNote: "Any two editing questions accepted.",
          },
        },
        {
          id: "mla3-u2-editing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A Draft Email",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Hi, I can't come to the party. Sorry. Maybe next time. Bye, Sam",
          },
          stem: "This email is too short and unclear. Rewrite it with all the information a friend would need.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email improvement", statement: "Add greeting, reason, apology, alternative plan and sign-off." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — greeting 'Hi [name],' added.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — reason for absence + apology added.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — alternative plan or friendly close added.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — sign-off + name correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Hi Alex, I'm sorry but I can't come to your party on Saturday — I have a family event. Maybe we can meet another time! See you soon. — Sam'",
            commonErrors: ["Still too vague — no reason or alternative."],
            examinerNote: "Must add missing information, not just length.",
          },
        },
        {
          id: "mla3-u2-editing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short email, then edit and proofread it before submitting.",
          parts: [
            { label: "a", prompt: "Write a first draft (4-5 sentences) about a plan or invitation.", marks: 3 },
            { label: "b", prompt: "Apply the editing checklist — note two improvements you made.", marks: 2 },
            { label: "c", prompt: "Proofread for spelling, punctuation and grammar — write the final version.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing process", statement: "Draft → edit (content) → proofread (errors) → final." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — draft has clear purpose and content.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — draft is coherent and complete enough to edit.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — appropriate register chosen.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — two real improvements identified (not just 'fixed spelling').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — improvements make the email clearer/better.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — final version has fewer errors than draft.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — spelling, punctuation and grammar checked.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final email is clean and ready to send.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Draft + editing notes + improved final version.",
            commonErrors: ["Final identical to draft — no real editing.", "Only checking spelling, not content."],
            examinerNote: "Must show genuine improvement between draft and final.",
          },
        },
        {
          id: "mla3-u2-editing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the writing process, what should you do FIRST with your draft?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fix every spelling mistake" },
              { id: "b", text: "Add more words" },
              { id: "c", text: "Change the font" },
              { id: "d", text: "Edit for content and organisation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Writing process", statement: "Edit content first, then proofread surface errors." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — editing (content) comes before proofreading.", working: "edit content first", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Edit for content and organisation",
            commonErrors: ["Proofreading before editing."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an EDITING question rather than a proofreading question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Does the text answer the question?" },
              { id: "b", text: "Are there full stops?" },
              { id: "c", text: "Is the spelling correct?" },
              { id: "d", text: "Is 'receive' spelled right?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Editing vs proofreading", statement: "Editing asks about content/structure; proofreading asks about errors." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'answers the question' is about content = editing.", working: "content question", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Does the text answer the question?",
            commonErrors: ["Choosing a spelling/punctuation item."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best improvement for the phrase 'very good'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "really very good" },
              { id: "b", text: "good good" },
              { id: "c", text: "excellent" },
              { id: "d", text: "very very good" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word choice", statement: "Replace weak 'very + adjective' with a stronger single word." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'excellent' is stronger and more precise.", working: "excellent", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** excellent",
            commonErrors: ["Stacking intensifiers instead of improving the word."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which error would you fix during PROOFREADING?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The argument is unclear" },
              { id: "b", text: "recieve instead of receive" },
              { id: "c", text: "A key detail is missing" },
              { id: "d", text: "The order of ideas is illogical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proofreading", statement: "Proofreading fixes surface errors: spelling, punctuation, grammar." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'recieve' is a spelling error = proofreading.", working: "spelling error", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** recieve instead of receive",
            commonErrors: ["Choosing a content problem."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Draft Paragraph",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "I went to the park. It was fun. I played football. My friend came too. We ate sandwiches. It was nice.",
          },
          stem: "What is the main CONTENT problem with this paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a list of short facts with no detail or feeling" },
              { id: "b", text: "Spelling mistakes" },
              { id: "c", text: "Wrong tense" },
              { id: "d", text: "Too many commas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Content editing", statement: "Choppy sentences with no detail need expanding." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sentences are bare facts; no description or emotion.", working: "no detail/feeling", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is a list of short facts with no detail or feeling",
            commonErrors: ["Looking for surface errors instead of content."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You have written a first draft of an email. What is the BEST first editing step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change the greeting" },
              { id: "b", text: "Check every comma" },
              { id: "c", text: "Ask: does it answer the question and include everything needed?" },
              { id: "d", text: "Count the words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Editing checklist", statement: "First check content: answers question? complete? then details and register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — content check comes first in editing.", working: "content first", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Ask: does it answer the question and include everything needed?",
            commonErrors: ["Starting with punctuation."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-editing-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Error Hunt",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Me and my freind went too the park yesterday.",
          },
          stem: "How many errors are in this sentence? (grammar + spelling)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error identification", statement: "Me/my friend (pronoun), freind (spelling), too/to (word choice)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — errors: 'Me and' → 'My friend and I', 'freind' → 'friend', 'too' → 'to' = 3.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3",
            commonErrors: ["Missing 'too' vs 'to'."],
            examinerNote: "Count all error types.",
          },
        },
        {
          id: "mla3-u2-editing-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Checklist Check",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Draft: 'I will come to the party. It is on Saturday. Bring food if you want.'",
          },
          stem: "How many sentences does this draft have? How many details does it give about the party (day and food)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting in drafts", statement: "Count sentences and countable details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — three sentences: 'I will come', 'It is on Saturday', 'Bring food'.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — details: Saturday + bring food = 2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 sentences; 2 details.",
            commonErrors: ["Counting 'if you want' as a third detail."],
            examinerNote: "Count concrete details only.",
          },
        },
        {
          id: "mla3-u2-editing-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this sentence: 'Their going to the park.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "their/they're/there", statement: "'They're' = they are; 'their' = possession; 'there' = place." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'They're going to the park.'", working: "They're", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — full correct sentence with capital and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "They're going to the park.",
            commonErrors: ["Changing to 'There' or 'Their'."],
            examinerNote: "Must be 'They're'.",
          },
        },
        {
          id: "mla3-u2-editing-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Vague Sentence",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "It was good.",
          },
          stem: "Improve this sentence by adding detail and a feeling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adding detail", statement: "Replace vague 'good' with specific description." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence expanded with specifics.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — feeling or detail added.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — improvement is genuinely better, not just longer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'The birthday party was fantastic — we played games until midnight.'",
            commonErrors: ["Adding words without meaning."],
            examinerNote: "Must add real detail.",
          },
        },
        {
          id: "mla3-u2-editing-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Paragraph to Edit",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "Last weekend me and tom went to the beach. It was very good. We swimmed and we builded a sandcastle. It was fun.",
          },
          stem: "Edit this paragraph: fix errors AND improve weak parts. Write the corrected version.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Editing + proofreading", statement: "Fix grammar errors and improve weak wording." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'me and tom' → 'Tom and I'; 'swimmed' → 'swam'; 'builded' → 'built'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — capitals: 'Tom', 'The'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — 'very good' improved with a stronger word.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — final paragraph reads naturally and clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Last weekend, Tom and I went to the beach. It was fantastic. We swam and built a sandcastle.'",
            commonErrors: ["Fixing spelling but leaving weak 'very good'."],
            examinerNote: "Both errors and weak wording addressed.",
          },
        },
        {
          id: "mla3-u2-editing-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short paragraph, then edit and proofread it.",
          parts: [
            { label: "a", prompt: "Write a first draft (3-4 sentences) about a plan or event.", marks: 2 },
            { label: "b", prompt: "Apply the editing checklist — note two improvements.", marks: 2 },
            { label: "c", prompt: "Write the proofread final version.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing process", statement: "Draft → edit → proofread → final." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — draft has clear purpose.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — draft coherent enough to edit.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — two real content improvements noted.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — improvements make text clearer.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — final version has fewer errors.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final is clean and ready.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Draft + 2 editing notes + improved final.",
            commonErrors: ["Final identical to draft."],
            examinerNote: "Must show genuine improvement.",
          },
        },
      ],
    },
  ],
};

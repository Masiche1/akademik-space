import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "langb-u1-lesson-1-2",
  code: "1-2",
  title: "Text Types: Articles, Emails, Messages and Reports",
  goal: "I CAN identify the purpose, audience and conventions of articles, emails, messages and reports in a target language.",
  standards: ["Comprehension", "Reading", "Text types", "Language B SL"],
  vocabulary: [
    { term: "Article", definition: "A piece of writing in a newspaper, magazine or website informing or entertaining a general audience." },
    { term: "Headline", definition: "The title of an article, designed to attract attention and summarise the topic." },
    { term: "Byline", definition: "The line naming the author of an article or report." },
    { term: "Sign-off", definition: "The closing formula of a letter or email, e.g. 'Yours faithfully'." },
    { term: "Audience", definition: "The people a text is written for; it determines tone, vocabulary and detail." },
    { term: "Report", definition: "A factual text presenting information, often with headings, for a specific reader." },
  ],
  concepts: [
    {
      id: "langb-u1-articles-emails",
      title: "Articles and emails",
      skill: "Analyse the features of articles (headline, byline, paragraphs) and emails (greeting, subject, sign-off) and match them to their purpose.",
      lesson: {
        sections: [
          {
            heading: "Articles",
            body: "An **article** appears in a newspaper, magazine or website for a wide audience. It opens with a **headline** that hooks attention and often states the topic, followed by a **byline** naming the author. The body is organised into paragraphs: an introduction giving the gist, then facts, quotes and description. Articles may inform, persuade or entertain.",
          },
          {
            heading: "Emails",
            body: "An **email** is a direct message between known people or organisations. Its visible conventions are the **To/From/Subject** fields, a greeting ('Dear...'), the body, and a **sign-off** ('Best regards', 'Yours sincerely'). Tone depends on the relationship: formal with strangers or superiors, friendly with colleagues, casual with friends.",
          },
          {
            heading: "Reading each type strategically",
            body: "For an article, read the headline and first paragraph for the main news, then scan for quotes and facts. For an email, read the Subject line first to know the purpose, then the greeting to gauge formality, then the body for the request or information. In both cases, ask: Who is the audience and why was this written?",
          },
        ],
        keyFormulas: [
          { name: "Article anatomy", statement: "Headline -> byline -> intro (gist) -> facts/quotes/description" },
          { name: "Email anatomy", statement: "Subject -> greeting -> purpose + details -> sign-off" },
        ],
        workedExample: {
          problem: "An email's Subject line reads 'Question about Thursday's meeting'. What should you read first and why?",
          solution: "Read the Subject first: it tells you the purpose (a question) before the body. Then the greeting shows the register, and the body gives the actual question.",
        },
      },
      questions: [
        {
          id: "langb-u1-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an article, the 'byline' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The publication date" },
              { id: "b", text: "The main headline of the article" },
              { id: "c", text: "The first paragraph" },
              { id: "d", text: "The name of the article's author" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Byline", statement: "The line under the headline naming who wrote the article." },
            ],
            steps: [
              { reasoning: "A byline credits the author of the piece.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The name of the article's author",
            commonErrors: ["Confusing byline with headline."],
          },
        },
        {
          id: "langb-u1-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the typical structure of an email, naming its four main parts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email structure", statement: "Subject line, greeting, body, sign-off." },
            ],
            steps: [
              { reasoning: "Subject line: a short phrase summarising the email's purpose.", marks: 1, markCode: "M" },
              { reasoning: "Greeting: 'Dear...' or informal 'Hi...' matching the relationship.", marks: 1, markCode: "M" },
              { reasoning: "Body with the message, then a sign-off such as 'Best regards' or 'Yours sincerely'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subject line, greeting, body, sign-off.",
            commonErrors: ["Omitting the subject line or the sign-off."],
          },
        },
        {
          id: "langb-u1-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Local bakery wins national award",
            author: "Marta Reyes",
            source: "The City Gazette, written for Akademik Space",
            text: "The little bakery on Rose Street has beaten fifty other shops to win the national 'Best Small Business' award. Owner Ana Petrova said the win was 'completely unexpected'. The shop, which opened just three years ago, is famous for its sourdough bread and almond cakes. Local councillor David Chen presented the prize at a ceremony on Tuesday. 'This is a proud day for our town,' he said.",
          },
          stem: "Identify the text type and analyse how its features serve the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "News article features", statement: "Headline states the news; byline credits the journalist; quotes add human interest; short paragraphs aid scanning." },
            ],
            steps: [
              { reasoning: "Text type: a news article in a local newspaper.", marks: 1, markCode: "M" },
              { reasoning: "The headline 'Local bakery wins national award' gives the gist instantly.", marks: 1, markCode: "M" },
              { reasoning: "The byline (Marta Reyes) and quotes from the owner and councillor add authority and human interest.", marks: 1, markCode: "M" },
              { reasoning: "Short paragraphs and concrete details (street name, 'three years ago') serve a general reader scanning for the news.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "News article: headline delivers gist, byline credits author, quotes and concrete details engage a general audience.",
            commonErrors: ["Listing features without explaining their function for the reader."],
          },
        },
        {
          id: "langb-u1-q12",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Imagine you must write an email to your teacher requesting an extension on an assignment.",
          parts: [
            { label: "a", prompt: "Write an appropriate Subject line.", marks: 2 },
            { label: "b", prompt: "Describe the greeting and sign-off you would use, and why.", marks: 2 },
            { label: "c", prompt: "Explain how the body of the email should be organised to be effective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal email conventions", statement: "Clear subject, polite greeting/sign-off, purpose stated early, request justified, polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "Subject clearly states the purpose, e.g. 'Request for extension — [assignment name]'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subject is concise and informative.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Greeting like 'Dear Mr/Ms...' — formal because the teacher is an authority figure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sign-off 'Yours sincerely' or 'Kind regards' matching the formal register.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First sentence states the request directly — do not bury it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Then gives a brief reason and the new proposed deadline.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ends politely, e.g. thanking the teacher and offering to discuss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear subject naming the request. (b) Formal greeting and sign-off for authority. (c) Request first, reason and new date next, polite close.",
            commonErrors: ["Writing the request indirectly or using casual language with a teacher."],
          },
        },
        {
          id: "langb-u1-q49",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a newspaper article, what does the byline tell the reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The name of the journalist or author" },
              { id: "b", text: "The main argument" },
              { id: "c", text: "The section where it appears" },
              { id: "d", text: "The publication date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Byline", statement: "The byline credits the author of an article." },
            ],
            steps: [
              { reasoning: "A byline is the author credit line.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The name of the journalist or author",
            commonErrors: ["Confusing the byline with the headline or date line."],
          },
        },
        {
          id: "langb-u1-q50",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the usual function of an article's first paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To repeat the headline word for word" },
              { id: "b", text: "To give the author's personal opinion only" },
              { id: "c", text: "To list every source used" },
              { id: "d", text: "To introduce the topic and present the main news or idea" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article introduction", statement: "The opening paragraph frames the topic and often states the gist." },
            ],
            steps: [
              { reasoning: "News and feature articles orient the reader before details and quotes.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) describes this function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** To introduce the topic and present the main news or idea",
            commonErrors: ["Thinking the introduction is only background with no main idea."],
          },
        },
        {
          id: "langb-u1-q51",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which greeting is most appropriate for a formal email to an unknown adult?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yo," },
              { id: "b", text: "Dear Sir or Madam," },
              { id: "c", text: "Hey there!" },
              { id: "d", text: "What's up?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal greeting", statement: "Unknown adults or authority figures require respectful openings." },
            ],
            steps: [
              { reasoning: "'Dear Sir or Madam' is a standard formal greeting.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dear Sir or Madam,",
            commonErrors: ["Using slang because the email is short."],
          },
        },
        {
          id: "langb-u1-q52",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which sign-off best matches a formal email beginning 'Dear Ms Rahman'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours faithfully" },
              { id: "b", text: "Later!" },
              { id: "c", text: "TTYL" },
              { id: "d", text: "Cheers!" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign-off matching", statement: "Formal greetings pair with formal closings such as 'Yours faithfully' or 'Yours sincerely'." },
            ],
            steps: [
              { reasoning: "'Dear Ms Rahman' signals a formal named recipient.", marks: 1, markCode: "M" },
              { reasoning: "'Yours faithfully' or 'Yours sincerely' is the conventional closing.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Yours faithfully",
            commonErrors: ["Mixing informal abbreviations with a formal greeting."],
          },
        },
        {
          id: "langb-u1-q53",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the most efficient way to begin reading an email in an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read only the longest paragraph" },
              { id: "b", text: "Start at the sign-off and work backwards" },
              { id: "c", text: "Read the Subject, then the greeting, then scan the body for the request or information" },
              { id: "d", text: "Translate every line before answering" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email reading order", statement: "Subject gives purpose; greeting gives register; body gives content." },
            ],
            steps: [
              { reasoning: "The subject frames the purpose before detailed reading.", marks: 1, markCode: "M" },
              { reasoning: "The greeting helps gauge formality and relationship.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) follows this efficient order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Read the Subject, then the greeting, then scan the body for the request or information",
            commonErrors: ["Starting at the body without knowing the email's purpose."],
          },
        },
        {
          id: "langb-u1-q54",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feature would most clearly turn an article into an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding more descriptive paragraphs" },
              { id: "b", text: "Using a more exciting headline" },
              { id: "c", text: "Replacing the byline with a Subject, To/From fields and a sign-off" },
              { id: "d", text: "Including a quotation from a witness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article versus email", statement: "Email conventions are recipient fields, greeting and sign-off rather than public-facing headline/byline structure." },
            ],
            steps: [
              { reasoning: "Email identity is created by fields and personal framing.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) replaces article markers with email markers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Replacing the byline with a Subject, To/From fields and a sign-off",
            commonErrors: ["Thinking more detail alone changes the text type."],
          },
        },
        {
          id: "langb-u1-q55",
          difficulty: "core",
          totalMarks: 6,
          stem: "Analyse this article excerpt.",
          extract: {
            title: "Students plant community garden",
            author: "Nina Costa",
            source: "The School Herald, written for Akademik Space",
            text: "A group of Year 11 students has transformed an unused corner of the school field into a vegetable garden. The project began in March and now supplies herbs for the canteen kitchen. Student leader Maya Kim said the garden had taught the group 'to work as a team'. The school plans to add more beds next term.",
          },
          parts: [
            { label: "a", prompt: "Identify two article conventions in the text.", marks: 2 },
            { label: "b", prompt: "Explain the function of the quotation.", marks: 2 },
            { label: "c", prompt: "Describe the likely audience.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "News article features", statement: "Headline, byline, quotes and concise factual paragraphs serve a general reader." },
            ],
            steps: [
              { part: "a", reasoning: "Visible conventions include the headline and the byline 'Nina Costa'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Any two correct conventions are accepted.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The quotation adds a human voice and supports the claim about teamwork.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It makes the article more engaging and credible.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The audience is a general school or local readership.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The clear headline and accessible detail suit readers scanning for news.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Headline/byline; quote adds human interest and evidence; general school or community audience.",
            commonErrors: ["Describing it as a report because it gives facts, ignoring the journalistic headline/byline."],
          },
        },
        {
          id: "langb-u1-q56",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare how an article and an email would announce a cancelled concert.",
          parts: [
            { label: "a", prompt: "State the audience for each text.", marks: 2 },
            { label: "b", prompt: "Describe one structural difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Purpose shapes form", statement: "Public news uses article conventions; personal notification uses email conventions." },
            ],
            steps: [
              { part: "a", reasoning: "The article informs a broad public audience.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The email informs ticket holders or members directly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The article uses a headline, byline and news paragraphs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The email uses subject, greeting, direct message and sign-off.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This reflects public information versus direct communication.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Article: public audience, headline/byline/news paragraphs; email: direct audience, subject/greeting/sign-off.",
            commonErrors: ["Writing both as identical announcements without considering audience."],
          },
        },
        {
          id: "langb-u1-q57",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sign-off best matches a formal email to a university admissions office?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cheers!" },
              { id: "b", text: "Catch you later!" },
              { id: "c", text: "Yours sincerely" },
              { id: "d", text: "TTYL" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register matching", statement: "Formal relationships require formal greetings and sign-offs." },
            ],
            steps: [
              { reasoning: "An admissions office is an institution, so the register must be formal.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Yours sincerely",
            commonErrors: ["Using formal distance with friends or slang with institutions."],
          },
        },
        {
          id: "langb-u1-q58",
          difficulty: "core",
          totalMarks: 6,
          stem: "Plan an email to ask a teacher for feedback on a draft essay.",
          parts: [
            { label: "a", prompt: "Write a suitable Subject line.", marks: 2 },
            { label: "b", prompt: "Describe the opening sentence of the body.", marks: 2 },
            { label: "c", prompt: "Explain why politeness matters in this email.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Request email", statement: "Purpose-led subject, direct polite request and respectful close meet task requirements." },
            ],
            steps: [
              { part: "a", reasoning: "Subject names the request, e.g. 'Feedback request on essay draft'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It is concise and specific.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Open by greeting the teacher and stating the request directly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mention the draft or deadline briefly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The teacher has authority, so respectful language supports task fulfilment.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Politeness also makes the request more likely to receive help.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear feedback-request subject. (b) Polite greeting plus direct request and context. (c) Respect matches the authority relationship.",
            commonErrors: ["Making the request vague or demanding feedback without context."],
          },
        },
        {
          id: "langb-u1-q59",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A text begins: 'EDITOR'S NOTE: Local bakery wins award' followed by 'By R. Ahmed'.",
          parts: [
            { label: "a", prompt: "Identify the text type and two conventions.", marks: 3 },
            { label: "b", prompt: "Explain how the headline helps a reader decide whether to continue.", marks: 2 },
            { label: "c", prompt: "Describe what you would read next and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article navigation", statement: "Headlines and bylines orient readers before they invest reading time." },
            ],
            steps: [
              { part: "a", reasoning: "It is a news article.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conventions include the headline and byline.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Any additional correct feature such as short paragraphs is acceptable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The headline states the main news instantly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It lets the reader judge relevance before reading details.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read the first paragraph for the gist.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Then scan for quotes, facts or names needed for questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) News article with headline/byline. (b) Headline previews the news and topic. (c) Read intro for gist, then scan for details.",
            commonErrors: ["Reading every paragraph before knowing whether the article is relevant."],
          },
        },
        {
          id: "langb-u1-q60",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A message says: 'cant make it sry, exam tmrw. c u fri?'",
          parts: [
            { label: "a", prompt: "Identify the text type.", marks: 2 },
            { label: "b", prompt: "Name two informal features.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal message markers", statement: "Messages omit words, use abbreviations and assume shared context." },
            ],
            steps: [
              { part: "a", reasoning: "It is an informal message between people who know each other.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The casual wording and abbreviations confirm the type.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Features include 'cant', 'sry' and 'tmrw'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The omitted words show reliance on shared context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Informal message. (b) Abbreviations such as 'sry/tmrw' and omitted words.",
            commonErrors: ["Correcting the grammar mentally and missing the register signal."],
          },
        },
      ],
    },
    {
      id: "langb-u1-messages-reports",
      title: "Messages and reports",
      skill: "Distinguish informal messages from structured reports and describe how each adapts language to its audience.",
      lesson: {
        sections: [
          {
            heading: "Messages",
            body: "A **message** — text, chat, social media post or sticky note — is the most informal type. It is addressed to someone known, so it omits greetings and full sentences, uses abbreviations ('u', 'tmrw', 'c u'), emojis and fragments. Despite its informality it still has a purpose: confirm, invite, ask or inform — fast.",
          },
          {
            heading: "Reports",
            body: "A **report** presents information in a structured, objective way for a defined audience — a teacher, a manager, a community. It typically has a title, an introduction stating purpose, numbered sections with headings, facts and often data, and sometimes recommendations or a conclusion. Language is precise and impersonal.",
          },
          {
            heading: "Audience controls the language",
            body: "The same information changes completely by audience. A trip cancellation becomes a two-line text to a friend ('trip's off, sorry!') but a formal notice with dates, reasons and refund information for parents. In Language B you must infer the audience from the task prompt and choose conventions that match it.",
          },
        ],
        keyFormulas: [
          { name: "Message features", statement: "Known recipient -> abbreviations, fragments, emojis, minimal punctuation" },
          { name: "Report features", statement: "Title + intro + headed sections + facts/data + conclusion/recommendations" },
        ],
        workedExample: {
          problem: "Task: 'Write a message to a friend inviting them to a party.' What conventions apply?",
          solution: "Informal register: greeting optional ('Hey!'), direct invitation, key details (when/where), friendly close. No formal sign-off or full report structure needed.",
        },
      },
      questions: [
        {
          id: "langb-u1-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature is most typical of an informal text message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numbered section headings" },
              { id: "b", text: "Abbreviations and omitted words" },
              { id: "c", text: "Data tables" },
              { id: "d", text: "A formal sign-off" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal message features", statement: "Abbreviations, fragments and omissions signal informal register between known people." },
            ],
            steps: [
              { reasoning: "Informal messages rely on shared context, so words are shortened or dropped.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Abbreviations and omitted words",
            commonErrors: ["Assuming all texts must be grammatically complete."],
          },
        },
        {
          id: "langb-u1-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three structural features typical of a report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Title, introduction, headed sections, conclusion or recommendations." },
            ],
            steps: [
              { reasoning: "A title and/or introduction stating the report's purpose.", marks: 1, markCode: "M" },
              { reasoning: "Numbered or headed sections organising the information logically.", marks: 1, markCode: "M" },
              { reasoning: "A conclusion or recommendations summarising findings or proposing action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title/intro, headed sections, conclusion or recommendations.",
            commonErrors: ["Describing reports as essays — they are factual, not argumentative."],
          },
        },
        {
          id: "langb-u1-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Trip Report: Geography Field Day",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "INTRODUCTION\nThis report summarises the Year 10 geography field trip to the river valley on 12 May.\n\nFINDINGS\n1. Water quality: three of five sampling sites showed high turbidity after rain.\n2. Land use: the northern bank is mostly farmland; the southern bank has been built up.\n\nRECOMMENDATIONS\nFurther monitoring is advised, especially after heavy rainfall.",
          },
          stem: "Analyse how this report's structure and register suit its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report purpose", statement: "Objective information for a defined audience, organised for easy reference." },
            ],
            steps: [
              { reasoning: "Text type: a factual report for teachers or school management.", marks: 1, markCode: "M" },
              { reasoning: "Structure: introduction gives context; FINDINGS and RECOMMENDATIONS headings let readers jump to what they need.", marks: 1, markCode: "M" },
              { reasoning: "Numbered findings and precise terms ('turbidity', 'land use') keep the register objective and accurate.", marks: 1, markCode: "M" },
              { reasoning: "The recommendations section turns data into action — a report's typical function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Structured factual report: intro + headed findings + recommendations, objective register for a school audience.",
            commonErrors: ["Treating a report like a personal narrative or opinion piece."],
          },
        },
        {
          id: "langb-u1-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "The same event — 'the school canteen will close for repairs next week' — must be communicated to a friend and to all parents.",
          parts: [
            { label: "a", prompt: "Describe the message you would send your friend, including register features.", marks: 2 },
            { label: "b", prompt: "Describe the notice you would send parents, including structure.", marks: 2 },
            { label: "c", prompt: "Explain how audience changes the language in each case.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience-driven register", statement: "Friends get informal abbreviations; parents get formal notices with dates, reasons and alternatives." },
            ],
            steps: [
              { part: "a", reasoning: "Informal: 'Hey! canteen's closed next week for repairs — bring lunch or eat outside?' Abbreviations, no formal structure.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Register is casual and direct, appropriate for a friend.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formal notice: 'DEAR PARENTS' greeting, closure dates, reason, alternative arrangements, polite closing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete sentences and impersonal polite phrasing ('will be closed', 'we apologise').", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Friend shares context, so minimal detail and slang are acceptable.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Parents need complete information: exact dates, what happens to lunch payments, alternatives.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Matching register to audience is a core Language B skill in both comprehension and production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Informal abbreviations for a friend. (b) Formal notice with dates/reason/alternatives for parents. (c) Audience determines detail level and formality.",
            commonErrors: ["Sending parents an informal text-style message or giving a friend unnecessary formality."],
          },
        },
        {
          id: "langb-u1-q61",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do informal messages often use abbreviations such as 'u', 'tmrw' and 'c u'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show the sender does not know grammar" },
              { id: "b", text: "To make the message faster to write and read between known people" },
              { id: "c", text: "To make the message suitable for a formal report" },
              { id: "d", text: "To replace the need for any context" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message economy", statement: "Known recipients share context, so informal messages can be shortened." },
            ],
            steps: [
              { reasoning: "Abbreviations save time and reflect shared understanding.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) states this function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To make the message faster to write and read between known people",
            commonErrors: ["Treating abbreviations as errors rather than register choices."],
          },
        },
        {
          id: "langb-u1-q62",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should a report's introduction usually do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use slang to engage readers" },
              { id: "b", text: "Tell a personal story" },
              { id: "c", text: "List every recommendation immediately" },
              { id: "d", text: "State the report's purpose, scope and context" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report introduction", statement: "The introduction frames purpose and helps readers know what the report covers." },
            ],
            steps: [
              { reasoning: "A report must orient its defined audience.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) gives the correct function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** State the report's purpose, scope and context",
            commonErrors: ["Starting reports with narrative or opinion instead of purpose."],
          },
        },
        {
          id: "langb-u1-q63",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How does audience affect a report's level of detail?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Experts need more background; general readers need clearer explanations" },
              { id: "b", text: "All audiences need identical detail" },
              { id: "c", text: "Audience has no effect on reports" },
              { id: "d", text: "Friends need more data than managers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Audience and detail", statement: "Reports adjust explanation, terminology and emphasis for the reader's knowledge." },
            ],
            steps: [
              { reasoning: "A defined audience determines how much explanation is necessary.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) expresses this relationship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Experts need more background; general readers need clearer explanations",
            commonErrors: ["Writing one report for every possible audience."],
          },
        },
        {
          id: "langb-u1-q64",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which text is most likely to be a report rather than a message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'u coming tonight? bring snacks lol'" },
              { id: "b", text: "'see u at 6, dont be late!!'" },
              { id: "c", text: "'hey, can u send the file?'" },
              { id: "d", text: "A titled text with an introduction, headed findings and recommendations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report versus message", statement: "Reports have title, introduction, sections and objective information; messages are brief and informal." },
            ],
            steps: [
              { reasoning: "The structural markers in choice (b) identify a report.", marks: 1, markCode: "M" },
              { reasoning: "The other choices show abbreviations and direct personal messages.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A titled text with an introduction, headed findings and recommendations",
            commonErrors: ["Choosing a short direct text because it is also 'information'."],
          },
        },
        {
          id: "langb-u1-q65",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is 'we apologise for any inconvenience' suitable in a formal notice but not in a message to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Messages cannot contain polite words" },
              { id: "b", text: "Friends never apologise" },
              { id: "c", text: "It is grammatically incorrect in notices" },
              { id: "d", text: "It is too formal and impersonal for a friendly relationship" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register appropriateness", statement: "Formal politeness formulas suit official audiences but sound unnatural between friends." },
            ],
            steps: [
              { reasoning: "The phrase is a formal apology formula.", marks: 1, markCode: "M" },
              { reasoning: "Friends share context and expect casual language.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) explains the register mismatch.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It is too formal and impersonal for a friendly relationship",
            commonErrors: ["Thinking politeness is always appropriate regardless of relationship."],
          },
        },
        {
          id: "langb-u1-q66",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main purpose of recommendations in a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To turn findings into suggested actions" },
              { id: "b", text: "To repeat the introduction" },
              { id: "c", text: "To hide missing information" },
              { id: "d", text: "To entertain the reader" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report recommendations", statement: "Recommendations propose practical actions based on the report's findings." },
            ],
            steps: [
              { reasoning: "Reports often move from facts to possible action.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) states the purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To turn findings into suggested actions",
            commonErrors: ["Treating recommendations as optional decoration rather than a report function."],
          },
        },
        {
          id: "langb-u1-q67",
          difficulty: "core",
          totalMarks: 6,
          stem: "Analyse this message.",
          extract: {
            title: "Quick update",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "hey sam! exam moved to fri 10am. bring ur notes b4, i wanna go over the hard bits. txt me if ur stuck. c u then!!",
          },
          parts: [
            { label: "a", prompt: "Identify the text type and register.", marks: 2 },
            { label: "b", prompt: "Name two informal language features.", marks: 2 },
            { label: "c", prompt: "Explain why abbreviations are acceptable here.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal message analysis", statement: "Messages to friends rely on shared context and casual forms." },
            ],
            steps: [
              { part: "a", reasoning: "It is an informal message to a known person.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The register is casual and friendly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Features include 'hey', 'ur', 'b4', 'c u' and omitted punctuation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Any two correct features are accepted.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The sender and recipient share context, so shortened forms remain clear.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The purpose is quick coordination, not formal record.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informal message; features like 'ur/b4/c u'; abbreviations work because friends share context.",
            commonErrors: ["Calling the omissions mistakes instead of register features."],
          },
        },
        {
          id: "langb-u1-q68",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare a report and a message about a school sports day.",
          parts: [
            { label: "a", prompt: "State the purpose of each text.", marks: 2 },
            { label: "b", prompt: "Describe one structural difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Report versus message", statement: "Reports document facts for reference; messages coordinate or inform quickly." },
            ],
            steps: [
              { part: "a", reasoning: "The report documents events and outcomes objectively.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The message gives friends quick practical information.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The report uses headings, sections and possibly data.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The message uses fragments, abbreviations and no formal structure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This difference reflects formal reference versus informal coordination.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Report: objective record with sections; message: quick informal coordination with abbreviations.",
            commonErrors: ["Assuming both must be equally detailed."],
          },
        },
        {
          id: "langb-u1-q69",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which text type best fits the task 'Present survey results to the head teacher'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A personal diary entry" },
              { id: "b", text: "A social media post" },
              { id: "c", text: "A structured report" },
              { id: "d", text: "A casual text message" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Task-to-text matching", statement: "Audience and purpose determine whether a message or report is appropriate." },
            ],
            steps: [
              { reasoning: "Survey results for an authority figure need objective structure.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A structured report",
            commonErrors: ["Using a report for a friend or a message for survey results."],
          },
        },
        {
          id: "langb-u1-q70",
          difficulty: "core",
          totalMarks: 6,
          stem: "Plan a report to the school about litter in the playground.",
          parts: [
            { label: "a", prompt: "Describe the title and introduction.", marks: 2 },
            { label: "b", prompt: "Describe two possible section headings.", marks: 2 },
            { label: "c", prompt: "Explain why the register should be objective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report planning", statement: "Reports frame purpose, organise findings and use precise objective language." },
            ],
            steps: [
              { part: "a", reasoning: "Title states the topic, e.g. 'Playground litter survey'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Introduction states purpose, method and scope.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Possible headings include 'Findings' and 'Recommendations'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Any two clear objective headings are acceptable.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Objective language makes the report credible and useful for decision-makers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It avoids blame and focuses on evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear title plus purpose/method intro. (b) Headings such as findings/recommendations. (c) Objectivity supports credibility and action.",
            commonErrors: ["Writing the report as a personal complaint rather than evidence-based findings."],
          },
        },
        {
          id: "langb-u1-q71",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Rewrite the same information for two audiences.",
          extract: {
            title: "Information to communicate",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "The school photography club will meet in Room 12 instead of the library on Thursday at 4 p.m.",
          },
          parts: [
            { label: "a", prompt: "Write a message for a fellow club member.", marks: 3 },
            { label: "b", prompt: "Write a notice for all photography club members.", marks: 3 },
            { label: "c", prompt: "Explain the register difference.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience adaptation", statement: "The same facts require informal directness for a peer and formal clarity for a group notice." },
            ],
            steps: [
              { part: "a", reasoning: "Message gives room and time clearly but uses casual direct language.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It may use abbreviations or a friendly greeting.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It remains unambiguous about the change.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Notice uses complete polite sentences and all key details.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It includes room, day, time and club name clearly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It uses a formal but accessible tone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Peer message is informal and brief; group notice is clearer and more formal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Casual direct message. (b) Complete formal notice. (c) Register changes with audience while facts stay the same.",
            commonErrors: ["Changing the facts instead of only the register and structure."],
          },
        },
        {
          id: "langb-u1-q72",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate a student's report plan.",
          parts: [
            { label: "a", prompt: "Identify two strengths of using headings.", marks: 3 },
            { label: "b", prompt: "Explain why data should be presented clearly.", marks: 3 },
            { label: "c", prompt: "Suggest one improvement for a conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Effective report design", statement: "Headings, clear data and conclusions make reports usable for decision-making." },
            ],
            steps: [
              { part: "a", reasoning: "Headings organise information logically.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They let readers locate sections quickly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They show the report's structure at a glance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Clear data presentation makes comparisons and conclusions reliable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Labels and units prevent misunderstanding.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Readers can act on accurate evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A conclusion should summarise findings without introducing new opinions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It may end with a recommendation if the task requires one.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Headings organise, guide readers and show structure. (b) Clear data prevents error and supports decisions. (c) Conclusion should summarise findings and, if needed, recommend action.",
            commonErrors: ["Adding unsupported opinions in the conclusion."],
          },
        },
      ],
    },
  ],
};

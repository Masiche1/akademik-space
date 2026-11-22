import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "langb-u2-lesson-2-2",
  code: "2-2",
  title: "Register and Audience Awareness",
  goal: "I CAN adjust my writing register — formal, neutral or informal — to suit the audience and purpose of a task.",
  standards: ["Writing", "Register", "Audience awareness", "Language B SL"],
  vocabulary: [
    { term: "Register", definition: "The level of formality in language, ranging from formal to informal." },
    { term: "Formal register", definition: "Polite, complete and impersonal language used with authority figures or official audiences." },
    { term: "Informal register", definition: "Relaxed language with contractions, slang and personal tone used with friends." },
    { term: "Contraction", definition: "A shortened word form like 'don't', 'I'm', 'it's' — common in informal writing." },
    { term: "Impersonal construction", definition: "A structure avoiding 'I', e.g. 'It is recommended that...' or passive voice." },
    { term: "Tone", definition: "The attitude conveyed by word choice — polite, urgent, friendly, serious." },
  ],
  concepts: [
    {
      id: "langb-u2-register-scale",
      title: "The register scale",
      skill: "Identify and produce formal, neutral and informal language features for different audiences.",
      lesson: {
        sections: [
          {
            heading: "Three levels of formality",
            body: "**Formal** register: complete sentences, no contractions, impersonal constructions ('It is important to note'), precise vocabulary — used for officials, formal letters, reports. **Neutral**: everyday standard language — most school writing. **Informal**: contractions, slang, emojis, personal address — used with friends in messages and casual emails.",
          },
          {
            heading: "Markers of each register",
            body: "Formal markers: 'Dear Sir/Madam', 'Yours faithfully', 'I am writing to', 'should you require'. Informal markers: 'Hi', 'Hey', 'Cheers', 'u', 'lol', '!'. Neutral sits between: 'Hi' or 'Hello', 'Kind regards', complete but natural sentences.",
          },
          {
            heading: "Same meaning, different words",
            body: "Register often changes vocabulary, not just grammar: 'purchase' (formal) vs 'buy' (neutral) vs 'grab' (informal); 'assist' vs 'help' vs 'give a hand'; 'children' vs 'kids'. Choosing the wrong level for the audience is a common Language B writing error — a text to a friend written in report style fails the task.",
          },
        ],
        keyFormulas: [
          { name: "Register signals", statement: "Formal: no contractions, impersonal, precise. Informal: contractions, slang, personal." },
          { name: "Vocabulary shift", statement: "purchase/assist/children (formal) -> buy/help/kids (informal)" },
        ],
        workedExample: {
          problem: "Rewrite informally: 'I am writing to inform you that the meeting has been postponed.'",
          solution: "'Just a heads-up — the meeting's been pushed back.' Contractions, phrasal verb 'pushed back', casual opener.",
        },
      },
      questions: [
        {
          id: "langb-u2-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most strongly signals formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using emojis" },
              { id: "b", text: "Starting with 'Hey!'" },
              { id: "c", text: "Complete sentences with no contractions" },
              { id: "d", text: "Using contractions like 'don't'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal register markers", statement: "Complete sentences, no contractions, precise vocabulary signal formality." },
            ],
            steps: [
              { reasoning: "Formal writing avoids contractions and casual markers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Complete sentences with no contractions",
            commonErrors: ["Thinking formal means long or complicated sentences — it means complete and precise."],
          },
        },
        {
          id: "langb-u2-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three differences between formal and informal email openings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email register", statement: "Formal: 'Dear Sir/Madam' + 'Yours faithfully'. Informal: 'Hi/Hey' + 'Cheers/Bye'." },
            ],
            steps: [
              { reasoning: "Formal opens with title and surname ('Dear Mr Smith'); informal uses first name or 'Hi'.", marks: 1, markCode: "M" },
              { reasoning: "Formal may use 'Dear Sir/Madam' when name unknown; informal assumes shared context.", marks: 1, markCode: "M" },
              { reasoning: "Sign-offs differ: 'Yours faithfully/sincerely' (formal) vs 'Cheers/Best/Bye' (informal).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Greeting formality, use of names/titles, and sign-off choice.",
            commonErrors: ["Matching greeting and sign-off inconsistently (formal greeting, casual sign-off)."],
          },
        },
        {
          id: "langb-u2-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why register is part of 'task fulfilment' in IB Language B writing assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Register and assessment", statement: "The task prompt specifies audience/purpose; wrong register fails the communicative purpose." },
            ],
            steps: [
              { reasoning: "Every writing task names an audience and purpose — the text must achieve that communication.", marks: 1, markCode: "M" },
              { reasoning: "Register is the primary signal of audience awareness; mismatched register means the message fails its purpose.", marks: 1, markCode: "R" },
              { reasoning: "Examiners reward texts where conventions match the stated context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choosing register deliberately directly affects the task fulfilment criterion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Register signals audience fit; wrong register fails task fulfilment even if grammar is accurate.",
            commonErrors: ["Focusing only on grammar and ignoring contextual appropriateness."],
          },
        },
        {
          id: "langb-u2-q12",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Rewrite this message for two different audiences: 'The meeting is cancelled.'",
          parts: [
            { label: "a", prompt: "Write it as a text message to a close friend.", marks: 2 },
            { label: "b", prompt: "Write it as a formal notice to staff.", marks: 2 },
            { label: "c", prompt: "Explain the register changes you made between the two versions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register transformation", statement: "Same content, different form: informal abbreviations vs formal complete impersonal language." },
            ],
            steps: [
              { part: "a", reasoning: "Informal version uses casual opener, contractions, e.g. 'Hey! Meeting's cancelled, sorry!'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No formal greeting/sign-off; register is appropriately casual.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Formal version uses 'Dear all/staff', complete sentence, e.g. 'Please be advised that the meeting has been cancelled.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Polite impersonal phrasing and formal sign-off, e.g. 'Yours faithfully'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Identifies contraction vs full form ('cancelled' vs 'has been cancelled').", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Identifies casual greeting vs formal salutation and sign-off.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explains that audience determines every register choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Hey! Meeting's cancelled!' (b) Formal notice 'Dear all... has been cancelled... Yours faithfully'. (c) Contractions, greetings, sign-offs and impersonal phrasing all shift with audience.",
            commonErrors: ["Changing only the greeting but keeping the same body register."],
          },
        },
        {
          id: "langb-u2-q49",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sign-off is appropriate for a formal letter to a company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours faithfully" },
              { id: "b", text: "See ya" },
              { id: "c", text: "Lol, thanks" },
              { id: "d", text: "Cheers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal sign-offs", statement: "Formal letters close with 'Yours faithfully' or 'Yours sincerely'; informal messages use 'Cheers' or 'Bye'." },
            ],
            steps: [
              { reasoning: "A company is an official audience requiring a formal close.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Yours faithfully",
            commonErrors: ["Matching a formal greeting with a casual sign-off."],
          },
        },
        {
          id: "langb-u2-q50",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which greeting suits a text message to a close friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hi Sam!" },
              { id: "b", text: "Dear Sir" },
              { id: "c", text: "Dear Ms Jones" },
              { id: "d", text: "To whom it may concern" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal greetings", statement: "Friends and peers are addressed casually: 'Hi', 'Hey', first names." },
            ],
            steps: [
              { reasoning: "A close friend is an informal audience expecting a casual greeting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Hi Sam!",
            commonErrors: ["Using title-and-surname formality with someone you know well."],
          },
        },
        {
          id: "langb-u2-q51",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word is the most formal equivalent of 'buy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "purchase" },
              { id: "b", text: "grab" },
              { id: "c", text: "get" },
              { id: "d", text: "score" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register vocabulary", statement: "Formal register uses Latinate, precise words; informal register uses simple everyday words." },
            ],
            steps: [
              { reasoning: "'Purchase' is the formal Latinate equivalent of 'buy'; 'grab', 'get' and 'score' are informal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** purchase",
            commonErrors: ["Choosing a word that is merely different rather than more formal."],
          },
        },
        {
          id: "langb-u2-q52",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which feature most strongly signals an informal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contractions and slang" },
              { id: "b", text: "Impersonal constructions" },
              { id: "c", text: "A formal sign-off" },
              { id: "d", text: "Complete sentences with no contractions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal markers", statement: "Contractions, slang, abbreviations and personal address mark informal register." },
            ],
            steps: [
              { reasoning: "Contractions and slang are classic signals of casual, informal writing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Contractions and slang",
            commonErrors: ["Thinking long sentences signal informality — they do not."],
          },
        },
        {
          id: "langb-u2-q53",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which sentence is written in a neutral register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The event has been cancelled." },
              { id: "b", text: "Hey, the event's off lol" },
              { id: "c", text: "I am writing to inform you that the event has been cancelled." },
              { id: "d", text: "Kindly be advised that the aforesaid event stands cancelled." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutral register", statement: "Everyday standard language — complete but natural, between formal and informal." },
            ],
            steps: [
              { reasoning: "(a) and (d) are formal; (b) is informal; only (c) is plain standard English.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The event has been cancelled.",
            commonErrors: ["Assuming neutral means informal or that any complete sentence is neutral."],
          },
        },
        {
          id: "langb-u2-q54",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Rewrite this sentence in formal register: 'Hey, just letting you know the trip's been pushed back a week.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register transformation", statement: "Formal register removes casual openers, contractions and slang, using complete polite sentences." },
            ],
            steps: [
              { reasoning: "The casual greeting 'Hey' and filler 'just letting you know' are removed.", marks: 1, markCode: "M" },
              { reasoning: "Contractions expand to full forms: 'the trip has been postponed by one week'.", marks: 1, markCode: "M" },
              { reasoning: "Casual phrasing like 'just letting you know' is replaced by a direct, neutral statement.", marks: 1, markCode: "M" },
              { reasoning: "Result is a complete, polite, impersonal sentence such as 'I am writing to inform you that the trip has been postponed by one week.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'I am writing to inform you that the trip has been postponed by one week.'",
            commonErrors: ["Changing only the greeting while leaving contractions and slang in the body."],
          },
        },
        {
          id: "langb-u2-q55",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give three pairs of words that show the same meaning at different registers, and explain the pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Vocabulary register shift", statement: "Formal register favours Latinate, precise vocabulary; informal register favours simple everyday words." },
            ],
            steps: [
              { reasoning: "First pair, e.g. 'assist' (formal) and 'help' (informal/neutral).", marks: 1, markCode: "M" },
              { reasoning: "Second pair, e.g. 'purchase' and 'buy', or 'children' and 'kids'.", marks: 1, markCode: "M" },
              { reasoning: "Third pair, e.g. 'commence'/'begin' or 'request'/'ask for'.", marks: 1, markCode: "M" },
              { reasoning: "The pattern is explained: formal words tend to be longer and more Latinate; informal words are shorter and everyday.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. assist/help, purchase/buy, commence/begin — formal = Latinate precise, informal = simple everyday.",
            commonErrors: ["Listing pairs without explaining what makes one member more formal."],
          },
        },
        {
          id: "langb-u2-q56",
          difficulty: "core",
          totalMarks: 4,
          stem: "This email mixes registers: 'Dear Sir, I am writing to inform you that, lol, the meeting's off. Cheers, Tom.' Identify the register errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register consistency", statement: "Every element of a text — greeting, body, sign-off — must match one register." },
            ],
            steps: [
              { reasoning: "'lol' is slang and cannot appear in a formal letter.", marks: 1, markCode: "M" },
              { reasoning: "The contraction 'meeting's' should be expanded, e.g. 'the meeting has been cancelled'.", marks: 1, markCode: "M" },
              { reasoning: "The sign-off 'Cheers' is too casual for a letter opening 'Dear Sir' — use 'Yours faithfully' or 'Yours sincerely'.", marks: 1, markCode: "A" },
              { reasoning: "Greeting and sign-off mismatch is identified: formal opener with informal close.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Errors: 'lol', contraction 'meeting's', casual 'Cheers' sign-off — all clash with the formal 'Dear Sir' register.",
            commonErrors: ["Fixing the body but leaving the mismatched greeting/sign-off pair."],
          },
        },
        {
          id: "langb-u2-q57",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the message 'I can't come to the party' in three registers: formal, neutral and informal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Three-register production", statement: "The same content can be expressed formally, neutrally and informally while staying consistent within each." },
            ],
            steps: [
              { reasoning: "Formal version, e.g. 'I regret that I will be unable to attend the party.'", marks: 1, markCode: "M" },
              { reasoning: "Neutral version, e.g. 'I will not be able to come to the party.'", marks: 1, markCode: "M" },
              { reasoning: "Informal version, e.g. 'Sorry, can't make the party!'", marks: 1, markCode: "M" },
              { reasoning: "Each version is internally consistent — no formal phrases in the informal version or vice versa.", marks: 1, markCode: "A" },
              { reasoning: "The core message (cannot attend) is unchanged across all three.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal: 'I regret that I will be unable to attend the party.' Neutral: 'I will not be able to come to the party.' Informal: 'Sorry, can't make the party!'",
            commonErrors: ["Shifting only one feature per version so registers bleed into each other."],
          },
        },
        {
          id: "langb-u2-q58",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rewrite this informal note as a formal email to the school office: 'hey, cant make parents evening tues, my gran's ill, sorry!'",
          parts: [
            { label: "a", prompt: "Write an appropriate formal greeting and sign-off.", marks: 2 },
            { label: "b", prompt: "Rewrite the message body in complete, polite sentences.", marks: 2 },
            { label: "c", prompt: "Explain two register changes you made.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal email production", statement: "Formal email = formal greeting, complete polite body, formal sign-off." },
            ],
            steps: [
              { part: "a", reasoning: "Formal greeting such as 'Dear Sir/Madam' or 'Dear School Office'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Matching formal sign-off such as 'Yours faithfully' or 'Yours sincerely'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete sentences stating absence and reason politely, e.g. 'I am writing to inform you that I will be unable to attend Parents' Evening on Tuesday as my grandmother is ill.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Polite phrasing such as 'I would be grateful' or 'I apologise for any inconvenience' is included.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One change identified, e.g. contraction 'cant' expanded and slang removed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Second change identified, e.g. casual greeting/sign-off upgraded to formal equivalents.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Dear Sir/Madam' ... 'Yours faithfully'. (b) 'I am writing to inform you that I will be unable to attend Parents' Evening on Tuesday as my grandmother is ill.' (c) Contractions/slang removed; greeting and sign-off formalised.",
            commonErrors: ["Writing a formal body but keeping 'hey' or 'cheers'."],
          },
        },
        {
          id: "langb-u2-q59",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of an impersonal construction typical of formal writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You should check the plan." },
              { id: "b", text: "The plan is bad, trust me." },
              { id: "c", text: "It is recommended that the plan be reviewed." },
              { id: "d", text: "I think the plan is bad." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Impersonal construction", statement: "Formal writing avoids 'I' and 'you', using structures like 'It is recommended that...' or the passive." },
            ],
            steps: [
              { reasoning: "'It is recommended that...' avoids personal pronouns — a hallmark of formal register.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It is recommended that the plan be reviewed.",
            commonErrors: ["Confusing politeness with impersonality — formal does not always mean cold."],
          },
        },
        {
          id: "langb-u2-q60",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare these two versions of a request. Version A (to a friend): 'can u pick me up at 6?' Version B (to a teacher): 'Dear Ms Carter, I would be grateful if you could collect me from school at 6 p.m. Kind regards, Dan.'",
          parts: [
            { label: "a", prompt: "Rewrite Version A in formal register addressed to a teacher.", marks: 2 },
            { label: "b", prompt: "Identify three features that make Version B formal.", marks: 2 },
            { label: "c", prompt: "Explain why the same request needs different registers for different audiences.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register comparison", statement: "Audience determines every register choice: abbreviations, politeness phrasing, greetings and sign-offs." },
            ],
            steps: [
              { part: "a", reasoning: "Formal rewrite, e.g. 'Dear Ms Carter, could you please collect me from school at 6 p.m.? Kind regards, Dan.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No abbreviations or contractions; polite request form and formal greeting/sign-off used.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three features identified, e.g. 'Dear Ms Carter' title and surname, 'I would be grateful if you could', 'Kind regards' sign-off.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Features correctly categorised as formal register markers.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Audience determines the appropriate distance and politeness level.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "A teacher is an authority figure who requires formal, respectful language.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A friend is a peer who shares context, so casual abbreviated language is appropriate and friendly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Dear Ms Carter, could you please collect me from school at 6 p.m.? Kind regards, Dan.' (b) Title+surname greeting, 'I would be grateful', formal sign-off. (c) Register encodes social distance — authority vs peer.",
            commonErrors: ["Listing differences without explaining the audience relationship behind them."],
          },
        },
      ],
    },
    {
      id: "langb-u2-audience",
      title: "Audience awareness in writing",
      skill: "Infer the intended audience from a task and select vocabulary, detail level and tone accordingly.",
      lesson: {
        sections: [
          {
            heading: "Decoding the audience",
            body: "Every prompt hides an audience: 'Write an email to your friend' = informal, shared context, minimal explanation. 'Write a report for the headteacher' = formal, complete information, no assumed knowledge. 'Write a message to a penfriend abroad' = friendly but clear, since the penfriend lacks your context. Always identify audience before choosing language.",
          },
          {
            heading: "How audience changes content",
            body: "Audience affects **what** you say, not just **how**. A friend needs only 'can't make it, sorry'. Parents need the date, reason, refund arrangements and alternative. Experts need precise terms; beginners need explanation of jargon. Give each audience exactly the detail it needs — no more, no less.",
          },
          {
            heading: "Tone and politeness",
            body: "**Tone** is the attitude you convey. Requests need politeness scaled to status: 'Could you possibly...?' to a teacher; 'Can you...?' to a friend. In intercultural contexts, politeness conventions vary — what is normal in one culture may seem rude or overly distant in another. When unsure, choose polite and clear.",
          },
        ],
        keyFormulas: [
          { name: "Audience questions", statement: "Who reads this? What do they already know? What do they need to do?" },
          { name: "Detail rule", statement: "Give the audience exactly the information it needs — no assumed knowledge, no excess." },
        ],
        workedExample: {
          problem: "Task: 'Write a note to a classmate asking to borrow their notes.' What audience adjustments apply?",
          solution: "Classmate = peer: informal but clear. Can assume shared context (which class, why missed). Polite casual request: 'Hey, could I borrow your notes from Tuesday? I was off sick. Thanks!'",
        },
      },
      questions: [
        {
          id: "langb-u2-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A task says 'Write a formal letter to the mayor'. Who is the audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No one in particular" },
              { id: "b", text: "A general social media audience" },
              { id: "c", text: "A person in a position of authority" },
              { id: "d", text: "A close friend" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Audience from task", statement: "The mayor is an authority figure, requiring formal register." },
            ],
            steps: [
              { reasoning: "'Formal letter' + 'mayor' signals an official audience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A person in a position of authority",
            commonErrors: ["Ignoring the register clue ('formal') and focusing only on the addressee."],
          },
        },
        {
          id: "langb-u2-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three questions you should ask yourself to identify the audience of a writing task.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience analysis", statement: "Who, what they know, and what they must do with the text." },
            ],
            steps: [
              { reasoning: "Who exactly is the reader — friend, teacher, official, stranger?", marks: 1, markCode: "M" },
              { reasoning: "What do they already know, and what must I explain?", marks: 1, markCode: "M" },
              { reasoning: "What does the reader need to do or feel after reading — register and tone follow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Who reads it? What do they know? What must they do/feel?",
            commonErrors: ["Identifying only the addressee's name, not their knowledge or needs."],
          },
        },
        {
          id: "langb-u2-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two versions of one request",
            author: "Written for Akademik Space",
            source: "Audience practice",
            text: "Version A (to friend): 'Hey, you around tmrw? Need a hand moving boxes, pays in pizza.'\n\nVersion B (to landlord): 'Dear Mr Okafor, I am writing to request permission to store some boxes in the hallway on Saturday. I would be grateful for your confirmation. Yours sincerely, Ana Ruiz.'",
          },
          stem: "Compare how each version adapts to its audience and purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience adaptation", statement: "Same request, different register: casual peer vs formal authority." },
            ],
            steps: [
              { reasoning: "Version A addresses a friend: informal greeting, abbreviations, casual offer ('pays in pizza').", marks: 1, markCode: "M" },
              { reasoning: "Version B addresses a landlord: formal greeting, surname, complete polite sentences, sign-off.", marks: 1, markCode: "M" },
              { reasoning: "Content also differs: friend gets minimal context; landlord gets purpose stated formally and a request for confirmation.", marks: 1, markCode: "M" },
              { reasoning: "Both succeed because register and detail match their audiences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friend version: casual, abbreviated, minimal. Landlord version: formal, complete, polite. Both fit their audience.",
            commonErrors: ["Assuming only vocabulary changes — structure, greeting and detail level all change."],
          },
        },
        {
          id: "langb-u2-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Task: 'Write an email to a penfriend in another country explaining a festival in your town.'",
          parts: [
            { label: "a", prompt: "Describe the greeting, sign-off and general tone you would use.", marks: 2 },
            { label: "b", prompt: "Explain what level of detail about the festival is appropriate, and why.", marks: 2 },
            { label: "c", prompt: "Explain why assuming shared cultural knowledge would be a mistake here.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Penfriend audience", statement: "Friendly but unfamiliar: needs explanations of local customs; cannot assume shared knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Friendly informal-neutral register: 'Hi/Hello [name]', warm tone, casual sign-off like 'Best wishes' or 'See you soon'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tone is personal and enthusiastic but still clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Enough detail to picture the festival — what happens, when, why it matters — but not exhaustive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vivid description suits a personal letter; jargon and local shorthand are avoided.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A penfriend lacks your cultural context — references like 'the usual parade' mean nothing to them.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Intercultural communication requires making implicit knowledge explicit.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explaining customs also fulfils the Language B intercultural understanding criterion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Friendly greeting/sign-off, warm clear tone. (b) Enough vivid detail, no jargon. (c) Penfriend lacks shared cultural knowledge — explain customs explicitly.",
            commonErrors: ["Using inside references or local slang the penfriend cannot understand."],
          },
        },
        {
          id: "langb-u2-q61",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A task says 'Write an email to your headteacher about the canteen.' Who is the audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your friends" },
              { id: "b", text: "A person in a position of authority at school" },
              { id: "c", text: "No one in particular" },
              { id: "d", text: "The general public" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Audience from task", statement: "The headteacher is an authority figure, so the email needs a formal, respectful register." },
            ],
            steps: [
              { reasoning: "'Headteacher' signals a superior authority figure, not a peer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A person in a position of authority at school",
            commonErrors: ["Focusing only on the topic (canteen) rather than the addressee's status."],
          },
        },
        {
          id: "langb-u2-q62",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Besides word choice, what else does the audience of a writing task affect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The content and level of detail included" },
              { id: "b", text: "Only the font" },
              { id: "c", text: "Only the spelling" },
              { id: "d", text: "Nothing else" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Audience and content", statement: "Audience changes what you say — which details, explanations and background are needed — not just how you say it." },
            ],
            steps: [
              { reasoning: "Different audiences need different amounts and types of information.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The content and level of detail included",
            commonErrors: ["Assuming audience only affects vocabulary, not what information is given."],
          },
        },
        {
          id: "langb-u2-q63",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your penfriend in Japan has never heard of your local harvest festival. What should you do in your letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume they know what it is" },
              { id: "b", text: "Write only in slang" },
              { id: "c", text: "Skip the topic entirely" },
              { id: "d", text: "Explain the customs and traditions clearly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural audience", statement: "A penfriend lacks your cultural context, so implicit local knowledge must be made explicit." },
            ],
            steps: [
              { reasoning: "An unfamiliar reader needs explanations of customs they cannot be expected to know.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Explain the customs and traditions clearly",
            commonErrors: ["Assuming shared cultural knowledge with an international audience."],
          },
        },
        {
          id: "langb-u2-q64",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which request is appropriately polite for asking your principal for an extension on a deadline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Could I please have a short extension on the deadline?" },
              { id: "b", text: "Deadline extension. Now." },
              { id: "c", text: "You must extend my deadline." },
              { id: "d", text: "Give me more time." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Politeness and status", statement: "Requests to authority figures need softened, question-form phrasing; demands fail the task." },
            ],
            steps: [
              { reasoning: "A principal is an authority figure; the request must be polite and indirect.", marks: 1, markCode: "M" },
              { reasoning: "Only (c) uses a courteous question form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Could I please have a short extension on the deadline?",
            commonErrors: ["Using the same directness with authority figures as with friends."],
          },
        },
        {
          id: "langb-u2-q65",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might the same level of directness be acceptable in one culture but rude in another?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing is identical everywhere" },
              { id: "b", text: "It never differs between cultures" },
              { id: "c", text: "Audiences always prefer maximum formality" },
              { id: "d", text: "Politeness conventions vary across cultures" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural communication", statement: "Politeness norms differ across cultures; what is neutral in one may seem rude or cold in another." },
            ],
            steps: [
              { reasoning: "Directness norms are culturally relative, so the same wording can carry different politeness.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Politeness conventions vary across cultures",
            commonErrors: ["Assuming your own culture's politeness rules are universal."],
          },
        },
        {
          id: "langb-u2-q66",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A task asks you to 'write a message to your younger brother explaining why you cannot pick him up from school.' Describe three audience adjustments you would make.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience adjustment", statement: "Match register, language simplicity and detail level to who the reader is." },
            ],
            steps: [
              { reasoning: "Informal register with a familiar greeting, since he is a sibling.", marks: 1, markCode: "M" },
              { reasoning: "Simple, clear language and short sentences appropriate for a younger reader.", marks: 1, markCode: "M" },
              { reasoning: "Any slang, abbreviations or adult vocabulary are avoided.", marks: 1, markCode: "M" },
              { reasoning: "Give the reason briefly and any instruction he needs (e.g. 'get the bus instead'), without assuming adult knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informal register, simple clear language, brief reason plus any instructions needed.",
            commonErrors: ["Using adult vocabulary or assuming the younger reader shares your context."],
          },
        },
        {
          id: "langb-u2-q67",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the 'detail rule' for audience awareness, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail rule", statement: "Give the audience exactly the information it needs — no assumed knowledge, no excess." },
            ],
            steps: [
              { reasoning: "The rule: each audience needs a different amount and type of detail.", marks: 1, markCode: "M" },
              { reasoning: "Unfamiliar or official audiences need more explicit information; close peers need less.", marks: 1, markCode: "M" },
              { reasoning: "Example: a friend gets 'can't make it, sorry' while parents get the date, the reason and alternative arrangements.", marks: 1, markCode: "M" },
              { reasoning: "The example correctly applies different detail levels to different audiences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Give each audience exactly the detail it needs — e.g. minimal for a friend, full arrangements for parents.",
            commonErrors: ["Giving every audience the same amount of information regardless of need."],
          },
        },
        {
          id: "langb-u2-q68",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify the likely audience and required register for each task: (1) 'Write a letter to the mayor about litter in the park.' (2) 'Text your friend to arrange meeting at the cinema.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience inference", statement: "The addressee and text type in the prompt reveal the audience and register." },
            ],
            steps: [
              { reasoning: "Task 1: the mayor is a public authority figure — formal register, complete polite letter.", marks: 1, markCode: "M" },
              { reasoning: "Task 2: a friend via text — informal register, casual abbreviations acceptable.", marks: 1, markCode: "M" },
              { reasoning: "Justification uses the clues 'letter'/'mayor' for task 1 and 'text'/'friend' for task 2.", marks: 1, markCode: "M" },
              { reasoning: "Both audiences and registers are correctly matched to their tasks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(1) Mayor = authority, formal letter. (2) Friend = peer, informal text.",
            commonErrors: ["Identifying the topic instead of the addressee when inferring audience."],
          },
        },
        {
          id: "langb-u2-q69",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan an email to your headteacher requesting a change to the school lunch menu. List the audience decisions you would make before writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience planning", statement: "Decide register, greeting, politeness phrasing and required detail before writing." },
            ],
            steps: [
              { reasoning: "Audience = authority figure, so formal register throughout.", marks: 1, markCode: "M" },
              { reasoning: "Greeting 'Dear Ms/Dr [surname]' with matching sign-off 'Yours sincerely'.", marks: 1, markCode: "M" },
              { reasoning: "Polite request phrasing such as 'I am writing to suggest/request' rather than demands.", marks: 1, markCode: "M" },
              { reasoning: "Include the detail an authority needs: current problem, proposed change, benefit to students.", marks: 1, markCode: "M" },
              { reasoning: "Tone stays respectful and solution-focused — persuasive, not complaining.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal register, titled greeting, polite request phrasing, problem-change-benefit detail, respectful persuasive tone.",
            commonErrors: ["Writing a complaint tone instead of a constructive request to authority."],
          },
        },
        {
          id: "langb-u2-q70",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Task: 'Write a letter to the local newspaper about the problem of litter in your town.'",
          parts: [
            { label: "a", prompt: "Describe the register and tone you would use.", marks: 2 },
            { label: "b", prompt: "Explain what evidence or detail the newspaper's readers need.", marks: 2 },
            { label: "c", prompt: "Explain why you should not assume readers share your local knowledge.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Public audience", statement: "A newspaper letter reaches strangers: formal-polite register, persuasive tone, self-contained detail." },
            ],
            steps: [
              { part: "a", reasoning: "Formal-polite public register: complete sentences, no slang, respectful address.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tone is concerned and persuasive — presenting a problem and a call for action.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Specific evidence: locations, examples, scale of the litter problem.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A clear request or call to action for readers and authorities.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Readers include strangers who do not know your town's layout or habits.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Local context must be explained explicitly — 'the park' means nothing without naming it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Self-contained explanation makes the letter persuasive to a broad public audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Formal-polite, persuasive. (b) Specific locations/examples + call to action. (c) Strangers need the local context explained explicitly.",
            commonErrors: ["Using local shorthand like 'the usual spot by the bridge' that outsiders cannot decode."],
          },
        },
        {
          id: "langb-u2-q71",
          difficulty: "core",
          totalMarks: 2,
          stem: "An expert audience (for example a scientist) reading your text needs...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slang and abbreviations" },
              { id: "b", text: "Simplified explanations of everything" },
              { id: "c", text: "A very short text with no detail" },
              { id: "d", text: "Precise technical vocabulary and less basic explanation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Expert audience", statement: "Experts share your field's knowledge, so precise terminology is appropriate and over-explanation wastes their time." },
            ],
            steps: [
              { reasoning: "Experts already know the basics; precision and correct terminology serve them best.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Precise technical vocabulary and less basic explanation",
            commonErrors: ["Over-simplifying for an audience that already knows the field."],
          },
        },
        {
          id: "langb-u2-q72",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Task: 'Explain to a classmate why you were absent yesterday, and tell your parents the same news.' Plan both messages.",
          parts: [
            { label: "a", prompt: "Describe the message to your classmate: register, greeting, content.", marks: 2 },
            { label: "b", prompt: "Describe the message to your parents: register, greeting, content.", marks: 2 },
            { label: "c", prompt: "Explain how the audience changed what you included in each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dual-audience planning", statement: "Same news, different audiences: peers need brevity; parents may need fuller explanation and reassurance." },
            ],
            steps: [
              { part: "a", reasoning: "Informal register: 'Hey' greeting, brief casual reason.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shared school context is assumed — minimal explanation needed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Polite-neutral register: 'Hi Mum/Dad', fuller explanation of what happened.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "May include reassurance about missed work or when you'll be back.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The classmate already shares your context, so less detail is needed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Parents may worry, so the message adds reason and reassurance about schoolwork.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Audience determines both the register and the amount/type of detail included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Informal, brief, assumes shared context. (b) Polite-neutral, fuller reason + reassurance. (c) Audience changes both formality and the detail each reader needs.",
            commonErrors: ["Sending identical messages to both audiences regardless of their different needs."],
          },
        },
      ],
    },
  ],
};

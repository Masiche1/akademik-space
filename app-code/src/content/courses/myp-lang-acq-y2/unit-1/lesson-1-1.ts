import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mla2-u1-lesson-1-1",
  code: "1-1",
  title: "Listening to Announcements, Dialogues and Instructions",
  goal: "I CAN understand longer spoken English: announcements, short dialogues and multi-step instructions in familiar situations.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Announcement", definition: "A spoken message given to a group, often about a change or event." },
    { term: "Multi-step instruction", definition: "Directions with more than one action to do in order." },
    { term: "Speaker", definition: "The person who is talking in a recording or dialogue." },
    { term: "Key information", definition: "The most important facts in a talk: who, what, when, where." },
    { term: "Accent", definition: "The way a language sounds in a particular region or by a particular speaker." },
  ],
  concepts: [
    {
      id: "mla2-u1-announcements-dialogues",
      title: "Announcements and dialogues",
      skill: "Extract who, what, when and where from spoken announcements and simple dialogues.",
      lesson: {
        sections: [
          {
            heading: "Structure of an announcement",
            body: "Announcements usually follow a pattern: **greeting or attention-getter** ('Attention, please'), **the news** ('The library will close early today'), and **details or instructions** ('because of the storm; buses will leave at 3 p.m.'). Listen for the words **will, because, today, tomorrow** — they carry time and reason.",
          },
          {
            heading: "Following a dialogue",
            body: "In a dialogue two people exchange information. Listen for each speaker's **purpose**: who is asking, who is answering, and what each wants. Useful phrases: 'Can I help you?', 'I'd like...', 'How much is...?', 'See you then.' Knowing these chunks makes dialogues much easier to follow.",
          },
          {
            heading: "Different accents",
            body: "English is spoken with many **accents** — British, American, Australian and many more. Accents change pronunciation, not meaning. Do not worry if a speaker sounds different; focus on the **key words** and the situation. Listening to many speakers is the best training.",
          },
        ],
        keyFormulas: [
          { name: "Announcement pattern", statement: "Attention-getter + news + details/instructions" },
        ],
        workedExample: {
          problem: "You hear: 'Attention please. The school trip to the museum is on Friday, not Thursday. Meet at the front gate at nine.' What changed?",
          solution: "The trip moved from Thursday to Friday; students meet at the front gate at nine o'clock.",
        },
      },
      questions: [
        {
          id: "mla2-u1-announcements-dialogues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is usually the first part of a spoken announcement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A goodbye" },
              { id: "b", text: "An attention-getter like 'Attention, please'" },
              { id: "c", text: "A question" },
              { id: "d", text: "The details" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Announcement structure", statement: "Announcements open with an attention-getter before the news." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — announcements begin with 'Attention, please' or similar.", working: "attention-getter", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An attention-getter like 'Attention, please'",
            commonErrors: ["Thinking announcements start directly with details."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sports Day Announcement",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Good afternoon, everyone. Sports Day will be next Friday, 20 May, not this Friday. The event starts at ten o'clock in the morning. Students must wear their PE kit. Parents are welcome to watch from the stands. Thank you.",
          },
          stem: "Listen to the announcement and answer: (1) On which date is Sports Day? (2) What must students wear? (3) Who can watch?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Key information extraction", statement: "Dates, requirements and audiences are the key details in an announcement." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'next Friday, 20 May'.", working: "20 May", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'wear their PE kit'.", working: "PE kit", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'Parents are welcome to watch'.", working: "parents", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 May; PE kit; parents (from the stands).",
            commonErrors: ["Answering 'this Friday' — the announcement corrects it to next Friday.", "Missing that parents can watch."],
            examinerNote: "Date and audience both needed.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Phone Call at the Café",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Waiter: Good afternoon. Are you ready to order?\nCustomer: Yes, please. I'd like a sandwich and a glass of water.\nWaiter: Anything to drink with that?\nCustomer: Just water, thank you. And could we have the bill, please?\nWaiter: Of course. One moment.",
          },
          stem: "What does the customer order? What does 'And could we have the bill, please?' tell you about the situation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue inference", statement: "Polite request phrases reveal the customer's stage in the meal." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — customer orders 'a sandwich and a glass of water'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'the bill' means the check/payment.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — requesting the bill means the customer has finished eating.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear and complete.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A sandwich and water; asking for the bill means they have finished and want to pay.",
            commonErrors: ["Saying the customer wants a new drink — they asked for water only."],
            examinerNote: "Both parts of the question must be answered.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Library Announcement",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Attention, please. This is a message from the school library. The library will be closed on Monday for a staff meeting. On Tuesday it will open at nine o'clock, one hour later than usual. Students who need books for homework should ask their teachers for the weekend loan form. Thank you for your cooperation.",
          },
          stem: "Listen to the announcement and complete the tasks.",
          parts: [
            { label: "a", prompt: "Why is the library closed on Monday?", marks: 1 },
            { label: "b", prompt: "What time does the library open on Tuesday?", marks: 1 },
            { label: "c", prompt: "What should students do if they need books for homework?", marks: 2 },
            { label: "d", prompt: "Write a similar short announcement (3-4 sentences) for a change at your school, e.g. a sports day or holiday.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Announcement comprehension and production", statement: "Announcements give reason, change and instructions; produced announcements follow the same pattern." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'closed on Monday for a staff meeting'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — 'open at nine o'clock'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — 'ask their teachers for the weekend loan form'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — the instruction must include asking the teacher.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion C: Speaking — announcement has attention-getter, news and details.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct dates/times and future forms.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — clear instructions for the audience.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — appropriate formal announcement tone.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) staff meeting (b) nine o'clock (c) ask teacher for weekend loan form (d) a correct 3-4 sentence announcement.",
            commonErrors: ["Saying the library is closed all week.", "Announcement without a clear instruction."],
            examinerNote: "(d) must include who/what/when at minimum.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do announcements usually start with 'Attention, please'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To describe the weather" },
              { id: "b", text: "To get people's attention before the news" },
              { id: "c", text: "To ask the audience a question" },
              { id: "d", text: "To say goodbye to the audience" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Attention-getters", statement: "Announcements open with a phrase that gets the audience's attention." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Attention, please' alerts listeners before the news.", working: "attention-getter", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To get people's attention before the news",
            commonErrors: ["Thinking the greeting is just politeness with no function."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a shop dialogue, what does 'Can I help you?' usually tell you about the speaker?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker is leaving" },
              { id: "b", text: "The speaker works there and is offering a service" },
              { id: "c", text: "The speaker is angry" },
              { id: "d", text: "The speaker is the customer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Service phrases", statement: "'Can I help you?' is a standard phrase used by shop assistants and waiters." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — the phrase identifies the speaker as the service provider.", working: "shop assistant / waiter", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The speaker works there and is offering a service",
            commonErrors: ["Assigning the phrase to the customer."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A customer at a café says: 'I'd like a coffee and a sandwich, please.' What is the customer doing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ordering food and drink" },
              { id: "b", text: "Complaining about the food" },
              { id: "c", text: "Describing the menu" },
              { id: "d", text: "Asking for the bill" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ordering phrases", statement: "'I'd like...' signals that the speaker is ordering." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'I'd like a coffee and a sandwich' is an order.", working: "ordering", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ordering food and drink",
            commonErrors: ["Thinking 'I'd like' is a request for help or the bill."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Assembly Announcement",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Good morning, students. Today we have a special assembly at ten o'clock in the main hall. All students must come. After the assembly there will be a break with fruit and juice. The head teacher will talk about the school trip. Thank you for listening.",
          },
          stem: "Listen to the announcement and answer three questions: (1) When is the assembly? (2) Where is it? (3) What happens after the assembly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Key information extraction", statement: "When, where and sequence details are the key facts in an announcement." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'at ten o'clock'.", working: "ten o'clock", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'in the main hall'.", working: "the main hall", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'a break with fruit and juice'.", working: "a break with fruit and juice", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ten o'clock; the main hall; a break with fruit and juice.",
            commonErrors: ["Answering 'special' as the time.", "Missing the break detail."],
            examinerNote: "Each detail worth 1 mark.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Sports Day Update",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Sports Day is on Friday. It starts at nine in the morning. About two hundred students will take part. Parents can watch from the stands near the gate.",
          },
          stem: "Listen to the announcement and give two numbers: (a) the hour the event starts (b) approximately how many students take part.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in announcements", statement: "Times and quantities are key details to catch in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'starts at nine in the morning'.", working: "9", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'about two hundred students'.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 9 (b) 200",
            commonErrors: ["Writing 'nine' as a word — a number is needed.", "Missing 'about', which shows the number is approximate."],
            examinerNote: "Accept 9 for (a); 200 (or about 200) for (b).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Phone Call to a Hotel",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Receptionist: Good morning, Hill Hotel. How can I help you?\nGuest: Hello. I'd like to book a room for two nights, please.\nReceptionist: Certainly. For how many guests?\nGuest: Two adults. And is there a swimming pool?\nReceptionist: Yes, on the second floor. Your room will be ready at two o'clock.",
          },
          stem: "Explain what the guest wants and what important information the receptionist gives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue inference", statement: "Requests and answers reveal each speaker's purpose and the details exchanged." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — guest wants to book a room for two nights.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — there are two adults.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — there is a pool on the second floor; room ready at two.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — explanation is complete and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Guest books a room for two nights for two adults; receptionist confirms a pool on the second floor and says the room is ready at two o'clock.",
            commonErrors: ["Saying the guest wants a pool room — they only asked if there is one."],
            examinerNote: "Must cover both speakers' information.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Computer Room Announcement",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Attention, all students. The computer room will be closed this Friday afternoon for repairs. It will reopen on Monday morning. If you have unfinished work, save it before Friday. The IT teacher, Mr Ross, will be in Room 12 all day Friday to help. Thank you.",
          },
          stem: "Listen to the announcement and complete the tasks.",
          parts: [
            { label: "a", prompt: "Why is the computer room closing?", marks: 1 },
            { label: "b", prompt: "When will it reopen?", marks: 1 },
            { label: "c", prompt: "What should students do if they have unfinished work?", marks: 2 },
            { label: "d", prompt: "Where and when can students get help from Mr Ross?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Announcement comprehension", statement: "Announcements give reason, change, instructions and contact details." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'for repairs'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — 'reopen on Monday morning'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — 'save it before Friday'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — instruction is complete and accurate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A: Listening — 'Room 12 all day Friday'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A: Listening — both where and when given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) for repairs (b) Monday morning (c) save unfinished work before Friday (d) Room 12, all day Friday.",
            commonErrors: ["Saying it reopens 'on Monday' without the morning detail.", "Missing that help is in Room 12."],
            examinerNote: "Part (d) needs both place and time.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a market dialogue, a customer says: 'How much is this bag?' What does the customer want to know?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of the bag" },
              { id: "b", text: "The size of the bag" },
              { id: "c", text: "The price of the bag" },
              { id: "d", text: "Where the bag was made" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Shopping questions", statement: "'How much...?' asks about price." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'How much is...?' asks the price.", working: "the price", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The price of the bag",
            commonErrors: ["Confusing 'how much' with 'how many' (count) or 'how' (manner)."],
            examinerNote: "A1 for (c).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Lunch Time Notice",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "The school cafeteria will serve pizza on Wednesday and pasta on Thursday. Lunch starts at twelve thirty and ends at one fifteen. Students can pay by card at the till.",
          },
          stem: "Listen to the notice and give two numbers: (a) the hour lunch starts (b) how many special dishes are mentioned.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in notices", statement: "Times and counts are key details to catch in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'lunch starts at twelve thirty' → hour 12.", working: "12", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — pizza and pasta = two dishes.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 (b) 2",
            commonErrors: ["Answering 30 for (a) — the question asks for the hour only.", "Counting Wednesday and Thursday as dishes."],
            examinerNote: "(a) accept 12 (twelve thirty). (b) accept 2.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A speaker finishes an announcement with: 'See you at the front gate at nine.' What is this sentence doing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starting a new topic" },
              { id: "b", text: "Asking a question" },
              { id: "c", text: "Describing a person" },
              { id: "d", text: "Giving the final instruction of the announcement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Closing instructions", statement: "Announcements often end with final instructions such as meeting points and times." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'See you at...' is a closing instruction with place and time.", working: "final instruction", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Giving the final instruction of the announcement",
            commonErrors: ["Thinking it is only a goodbye with no information."],
            examinerNote: "A1 for (a).",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Museum Trip Announcement",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "The school trip to the museum is next Tuesday. It costs five pounds per student. Students should bring a packed lunch and a water bottle.",
          },
          stem: "How much does the museum trip cost per student? Give the number in pounds.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in announcements", statement: "Prices and quantities are key details to catch in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'costs five pounds per student'.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Writing 'five pounds' — a number is needed.", "Missing 'per student' and answering a different amount."],
            examinerNote: "Accept 5 only.",
          },
        },
        {
          id: "mla2-u1-announcements-dialogues-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short dialogue (4 lines) between a customer and a waiter ordering a meal in a restaurant.",
          parts: [
            { label: "a", prompt: "Write four lines: greeting, order, a question or extra request, and closing.", marks: 3 },
            { label: "b", prompt: "Use at least two polite ordering phrases such as 'I'd like...' or 'Could I have...'.", marks: 2 },
            { label: "c", prompt: "Check: correct capital letters, question marks and full stops, and natural dialogue order.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Restaurant dialogue", statement: "Service exchange = greeting + order + request + polite close, with correct punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four lines form a realistic restaurant exchange.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion B: Reading — order is logical (greeting → order → request → close).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — lines are clear and complete sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — at least two correct polite ordering phrases.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — phrases sound natural for a waiter/customer exchange.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — capitals and punctuation correct throughout.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed and errors fixed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final dialogue reads naturally end to end.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Four-line restaurant dialogue with polite phrases and correct punctuation.",
            commonErrors: ["Missing the greeting or closing.", "Statements where questions are needed."],
            examinerNote: "Must include an actual order with food/drink items.",
          },
        },
      ],
    },
    {
      id: "mla2-u1-instructions-listening",
      title: "Multi-step instructions",
      skill: "Follow instructions with several steps in the correct order.",
      lesson: {
        sections: [
          {
            heading: "Instructions come in sequences",
            body: "Real-life instructions rarely have one step. A recipe, a game rule or a teacher's direction has **steps in order**. Listen for sequence words: **first, then, next, after that, finally**. Write the steps down as numbers if you can — this turns a long instruction into a simple list.",
          },
          {
            heading: "Active listening techniques",
            body: "For longer listening: (1) Listen once for the **main idea** without trying to catch everything. (2) Listen again for **numbers, names and places**. (3) If an instruction has steps, mentally number them. (4) Predict what comes next from the situation — context helps you guess unknown words.",
          },
          {
            heading: "When you miss a step",
            body: "If you miss part of an instruction, do not stop listening — you may lose the rest. Note the part you missed and ask afterwards: 'Sorry, what was step two?' In exams and real life, partial understanding plus a polite question is better than silence.",
          },
        ],
        keyFormulas: [
          { name: "Sequence words", statement: "first → then → next → after that → finally" },
        ],
        workedExample: {
          problem: "Instruction: 'First, wash your hands. Then, put the flour in the bowl. Finally, mix everything together.' How many steps?",
          solution: "Three steps: wash hands → flour in bowl → mix.",
        },
      },
      questions: [
        {
          id: "mla2-u1-instructions-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word usually signals the LAST step of an instruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First" },
              { id: "b", text: "Finally" },
              { id: "c", text: "Because" },
              { id: "d", text: "Then" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence markers", statement: "'Finally' marks the last step of a sequence." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'finally' signals the end of instructions.", working: "finally", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Finally",
            commonErrors: ["Confusing 'then' (middle) with 'finally' (end)."],
            examinerNote: "A1 for (c).",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Making a Cup of Tea",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "To make a cup of tea, first boil some water. Then put a tea bag in your cup. After that, pour the hot water into the cup. Wait for three minutes. Finally, take out the tea bag and add milk if you like.",
          },
          stem: "Put these actions in the correct order: add milk, boil water, wait three minutes, put tea bag in cup, pour water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequencing instructions", statement: "Sequence words order the steps; the text gives them explicitly." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening/Reading — order: boil water → tea bag in cup → pour water → wait → add milk.", working: "1 boil, 2 bag, 3 pour, 4 wait, 5 milk", marks: 2, markCode: "A" },
              { reasoning: "Criterion D: Writing — the list is presented clearly and completely.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1. Boil water 2. Put tea bag in cup 3. Pour water 4. Wait three minutes 5. Add milk",
            commonErrors: ["Pouring water before the tea bag is in the cup.", "Adding milk before waiting."],
            examinerNote: "Order must match the text exactly.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Game Instructions",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "To play this game, you need two teams. First, each team chooses a leader. Then, the leaders think of a word. Next, the teams ask yes-or-no questions to guess the word. The first team to guess correctly wins. The game ends when one team has ten points.",
          },
          stem: "Explain the rules of this game in four steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rule summarising", statement: "Summarise instructions by selecting the main action of each step." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — step 1: two teams, each chooses a leader.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — steps 2-3: leaders choose a word; teams guess with yes/no questions.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — step 4: first team to guess correctly / ten points wins.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — rules are stated clearly and in order.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "1. Two teams choose leaders. 2. Leaders pick a word. 3. Teams ask yes/no questions to guess. 4. First team to guess / reach ten points wins.",
            commonErrors: ["Leaving out the winning condition.", "Mixing the order of steps."],
            examinerNote: "Four distinct steps needed.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write instructions for a simple task: making your favourite drink, or getting ready for school in the morning.",
          parts: [
            { label: "a", prompt: "Write four steps using first/then/next/finally.", marks: 3 },
            { label: "b", prompt: "Use the correct imperative form for every step (verb first).", marks: 2 },
            { label: "c", prompt: "Check your instructions by following them yourself — does each step make sense? Fix any problems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction writing", statement: "Imperatives + sequence markers + logical order." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four logical steps with sequence markers.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — each step is clear and follows logically.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — sequence words used correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — all steps are imperatives (verb first, no subject).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct punctuation (full stops/commas).", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — self-check confirms each step is followable.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — any unclear steps identified and rewritten.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — final version is a complete, usable set of instructions.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Four clear imperative steps with sequence markers, verified as followable.",
            commonErrors: ["Steps in statement form ('You boil water').", "Steps out of logical order."],
            examinerNote: "Must be genuinely followable instructions.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word usually signals the FIRST step of an instruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finally" },
              { id: "b", text: "Because" },
              { id: "c", text: "Then" },
              { id: "d", text: "First" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence markers", statement: "'First' signals the opening step of a sequence." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'first' marks the start of instructions.", working: "first", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** First",
            commonErrors: ["Confusing 'first' with 'finally'."],
            examinerNote: "A1 for (c).",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is it useful to write the steps of an instruction as numbers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It turns a long instruction into a simple ordered list" },
              { id: "b", text: "It removes the need to listen" },
              { id: "c", text: "It changes the meaning of the steps" },
              { id: "d", text: "It makes the instructions look longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Note-taking for instructions", statement: "Numbering steps makes a long instruction easier to follow." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — a numbered list preserves order and reduces memory load.", working: "ordered list", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It turns a long instruction into a simple ordered list",
            commonErrors: ["Thinking writing is only for the teacher."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the sentence 'First, wash your hands. Then, dry them. Finally, put on the gloves.', which word joins the middle step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finally" },
              { id: "b", text: "Then" },
              { id: "c", text: "First" },
              { id: "d", text: "Because" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence markers", statement: "'Then' is used for steps in the middle of a sequence." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'then' introduces the middle step 'dry them'.", working: "then", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Then",
            commonErrors: ["Picking 'finally' — that is the last step."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Making a Sandwich",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "First, take two slices of bread. Next, spread butter on one slice. Then, put cheese and tomato on the butter. After that, put the other slice on top. Finally, cut the sandwich in half.",
          },
          stem: "Listen to the instructions and answer: (1) What do you put on the butter? (2) What is the last step? (3) How many slices of bread do you need?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction comprehension", statement: "Details (items, order, quantities) are located in the sequence words." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'put cheese and tomato on the butter'.", working: "cheese and tomato", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'cut the sandwich in half'.", working: "cut the sandwich in half", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'take two slices of bread'.", working: "two", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cheese and tomato; cut it in half; two slices.",
            commonErrors: ["Answering 'butter' as what goes on the butter.", "Missing that two slices are needed."],
            examinerNote: "Each detail worth 1 mark.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Plant Watering Instructions",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "To water your plant correctly, first check the soil with your finger. If it is dry, pour water slowly into the pot. Wait ten minutes, then pour away any extra water. Do this once a week.",
          },
          stem: "Listen to the instructions and give two numbers: (a) how many minutes you wait (b) how many times per week you water the plant.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in instructions", statement: "Quantities and times are key details in spoken instructions." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'wait ten minutes'.", working: "10", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'once a week' = one time.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 (b) 1",
            commonErrors: ["Answering 7 for (b) — 'once a week' means one time per week."],
            examinerNote: "Accept 10 and 1.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Directions to the Library",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "To get to the library from the main gate, first walk straight ahead for two minutes. Then turn left at the cafeteria. After that, walk past the sports field and take the second right. The library is the big building on your left. It opens at nine o'clock.",
          },
          stem: "Describe the route to the library in order, using the direction words from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direction comprehension", statement: "Route instructions must be retold in order with correct turns and landmarks." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — walk straight ahead for two minutes.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — turn left at the cafeteria.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — past the sports field, second right, library on the left.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — route is described clearly and in order.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Straight ahead two minutes → left at cafeteria → past sports field → second right → library on the left.",
            commonErrors: ["Mixing up left and right.", "Missing the 'second right'."],
            examinerNote: "Order and direction words must be correct.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Science Experiment Steps",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "For the volcano experiment, first put two spoons of baking soda into the bottle. Next, add a few drops of food colouring. Then, carefully pour in the vinegar. Watch what happens — the mixture will foam and overflow. Finally, clean the bottle with warm water.",
          },
          stem: "Listen to the experiment instructions and complete the tasks.",
          parts: [
            { label: "a", prompt: "What goes into the bottle first, and how much?", marks: 2 },
            { label: "b", prompt: "What happens when you pour in the vinegar?", marks: 1 },
            { label: "c", prompt: "What is the last step?", marks: 1 },
            { label: "d", prompt: "Write the four main steps as a numbered list.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Procedure comprehension", statement: "Experiments give ordered steps with quantities and expected results." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'two spoons of baking soda'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A: Listening — it is the first step.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — 'foam and overflow'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — 'clean the bottle with warm water'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion D: Writing — four steps listed in correct order.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — steps are complete and clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) two spoons of baking soda (b) it foams and overflows (c) clean the bottle with warm water (d) four ordered steps.",
            commonErrors: ["Adding vinegar before baking soda — order matters.", "Missing the amount 'two spoons'."],
            examinerNote: "Part (d) must match the text order.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You miss step two of a spoken instruction. What is the best thing to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guess randomly and hope" },
              { id: "b", text: "Stop listening completely" },
              { id: "c", text: "Keep listening, then politely ask about the missed step afterwards" },
              { id: "d", text: "Write down every word you heard" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Coping with missed information", statement: "Continue listening, note the gap and ask afterwards." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — continuing preserves the remaining steps; a polite question fills the gap.", working: "keep listening + ask after", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Keep listening, then politely ask about the missed step afterwards",
            commonErrors: ["Stopping listening — you lose the rest of the instruction."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Game Instructions",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "To play this card game, you need four players and one pack of cards. First, shuffle the cards and deal five to each player. Then, players take turns to match the top card. The first player to get rid of all their cards wins. The game usually takes ten minutes.",
          },
          stem: "Listen to the instructions and give two numbers: (a) how many players are needed (b) how many minutes the game usually takes.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in instructions", statement: "Quantities and durations are key details in spoken instructions." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'you need four players'.", working: "4", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'usually takes ten minutes'.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) 10",
            commonErrors: ["Confusing 'five cards each' with the number of players."],
            examinerNote: "Accept 4 and 10.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An instruction says: 'After that, add the sugar.' What does 'after that' tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "This step happens at the same time" },
              { id: "b", text: "This step is the first one" },
              { id: "c", text: "This step happens after the previous one" },
              { id: "d", text: "This step is optional" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence markers", statement: "'After that' marks a step that follows the previous one." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'after that' shows the step comes next in order.", working: "after the previous step", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** This step happens after the previous one",
            commonErrors: ["Thinking 'after that' means 'at the same time'."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Board Game Setup",
            author: "Written for Akademik Space",
            source: "Instruction practice",
            text: "To set up the game, you need a board, four counters and one dice. Place the board in the middle of the table. Give each player one counter.",
          },
          stem: "How many counters does each player get? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in instructions", statement: "Quantities are key details in spoken instructions." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'give each player one counter'.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 4 — that is the total counters, not per player."],
            examinerNote: "Accept 1 only.",
          },
        },
        {
          id: "mla2-u1-instructions-listening-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write instructions for making a cup of hot chocolate (4 steps) for a classmate who has never made one.",
          parts: [
            { label: "a", prompt: "Write four steps in logical order using first, then, next and finally.", marks: 3 },
            { label: "b", prompt: "Use the imperative form (verb first, no subject) in every step.", marks: 2 },
            { label: "c", prompt: "Check: follow your own instructions — are the steps clear and in the right order? Fix any problems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction writing", statement: "Imperatives + sequence markers + logical order make followable instructions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four logical steps from start to finish.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — sequence markers used correctly.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — steps are clear and specific.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — all steps are imperatives (verb first).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct spelling of key verbs (pour, add, stir).", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — self-check confirms steps are followable.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — any unclear steps identified and rewritten.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — final version is complete and usable.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Four ordered imperative steps with sequence markers, checked for clarity.",
            commonErrors: ["Steps in statement form.", "Forgetting the final step (e.g. stir or drink)."],
            examinerNote: "Must be genuinely followable instructions.",
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "langab-u3-lesson-3-1",
  code: "3-1",
  title: "Listening for key information",
  goal: "I CAN listen to simple spoken texts and identify key information such as names, numbers, times and places.",
  standards: ["Listening", "Speaking", "Vocabulary"],
  vocabulary: [
    { term: "Listen", definition: "To pay attention to sounds or words." },
    { term: "Key information", definition: "The most important details in a text, such as names, times and places." },
    { term: "Spell", definition: "To say the letters of a word one by one." },
    { term: "Repeat", definition: "To say something again." },
    { term: "Number", definition: "A word or figure showing an amount." },
    { term: "Address", definition: "The details of where someone lives or where something is." },
  ],
  concepts: [
    {
      id: "langab-u3-listening-basics",
      title: "Basic listening skills",
      skill: "Listen for names, numbers and places in simple spoken texts.",
      lesson: {
        sections: [
          {
            heading: "What to listen for",
            body: "Before listening, decide what you need: a **name**, a **number**, a **time** or a **place**. These are the key details. In simple texts they are usually short and clear.",
          },
          {
            heading: "Numbers and spelling",
            body: "Names and addresses are often spelled letter by letter: \"My name is A-N-N-A.\" Write down numbers as you hear them. Practise counting aloud so numbers are easy to catch.",
          },
          {
            heading: "Checking understanding",
            body: "After listening, repeat the key information back: \"So your name is Anna and you live in Madrid, right?\" If something is unclear, say **Sorry?** or **Could you repeat the number, please?** Listening is active — expect to ask questions.",
          },
        ],
        keyFormulas: [
          { name: "Spelling names", statement: "My name is + letter by letter (S-A-R-A)." },
          { name: "Checking", statement: "So ... + key detail + right? (So you live in Madrid, right?)" },
        ],
        workedExample: {
          problem: "You hear: \"My phone number is five five two, nine zero one.\" Write it down.",
          solution: "552 901",
        },
      },
      questions: [
        {
          id: "langab-u3-l31q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you do BEFORE listening to a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decide what information you need" },
              { id: "b", text: "Close your eyes and sleep" },
              { id: "c", text: "Speak loudly" },
              { id: "d", text: "Write the answers first" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pre-listening", statement: "Knowing what to listen for makes listening easier." },
            ],
            steps: [
              { reasoning: "Deciding what information is needed helps focus listening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decide what information you need",
            commonErrors: ["Trying to understand every word instead of key details."],
          },
        },
        {
          id: "langab-u3-l31q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the numbers you hear (the teacher will read them): one, four, seven.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Number dictation", statement: "Write each number as digits as you hear it." },
            ],
            steps: [
              { reasoning: "One is written 1.", marks: 1, markCode: "M" },
              { reasoning: "Four is written 4.", marks: 1, markCode: "M" },
              { reasoning: "Seven is written 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1, 4, 7.",
            commonErrors: ["Writing the words instead of digits."],
          },
        },
        {
          id: "langab-u3-l31q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Listen to this message and fill in the missing details.",
          extract: {
            title: "Voicemail from a friend",
            author: "Written for Akademik Space",
            text: "Hi, it's Marco. Call me on my mobile: oh-seven-seven, oh-two-one, oh-nine-nine. I'm at home after four o'clock. See you!",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for details", statement: "Catch the phone number and the time from the message." },
            ],
            steps: [
              { reasoning: "The phone number is 077 021 99 (or 07702199).", marks: 2, markCode: "M" },
              { reasoning: "Marco is at home after four o'clock.", marks: 1, markCode: "M" },
              { reasoning: "Both details correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "07702199; after four o'clock.",
            commonErrors: ["Missing a digit in the phone number."],
          },
        },
        {
          id: "langab-u3-l31q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Take a message for your teacher from a caller.",
          parts: [
            { label: "a", prompt: "Write the caller's name.", marks: 1 },
            { label: "b", prompt: "Write the caller's phone number or email.", marks: 2 },
            { label: "c", prompt: "Write what the caller wants.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Message taking", statement: "A message records name, contact and reason clearly." },
            ],
            steps: [
              { part: "a", reasoning: "Name written correctly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contact detail complete and accurate.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Reason for calling stated clearly.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name. (b) Contact. (c) Reason.",
            commonErrors: ["Missing the contact detail or the reason."],
          },
        },
        {
          id: "langab-u3-l31q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A teacher says a name letter by letter: \"L-U-C-Y.\" What is the name?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Luckey" },
              { id: "b", text: "Lucie" },
              { id: "c", text: "Lucy" },
              { id: "d", text: "Lusey" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Spelling names", statement: "Join the letters you hear into a name." },
            ],
            steps: [
              { reasoning: "The letters L-U-C-Y spell Lucy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Lucy",
            commonErrors: ["Adding extra letters that were not heard."],
          },
        },
        {
          id: "langab-u3-l31q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the phrase \"Could you repeat the number, please?\" do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Says goodbye" },
              { id: "b", text: "Asks the speaker to say the number again" },
              { id: "c", text: "Gives a new number" },
              { id: "d", text: "Ends the conversation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking for repetition", statement: "Repeat requests help you catch key details." },
            ],
            steps: [
              { reasoning: "\"Repeat\" means say again.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Asks the speaker to say the number again",
            commonErrors: ["Thinking the phrase gives a number."],
          },
        },
        {
          id: "langab-u3-l31q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Listen to this message and choose the correct answer.",
          extract: {
            title: "A message from Sam",
            author: "Written for Akademik Space",
            text: "Hi, this is Sam. I live at number five, Green Street, and my class starts at eight thirty.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number five, Green Street" },
              { id: "b", text: "The class" },
              { id: "c", text: "Green Street" },
              { id: "d", text: "Eight thirty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for place", statement: "Catch both the number and the street name." },
            ],
            steps: [
              { reasoning: "Sam lives at number five on Green Street.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Number five, Green Street",
            commonErrors: ["Missing the house number."],
          },
        },
        {
          id: "langab-u3-l31q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Listen to this announcement and choose the correct answer.",
          extract: {
            title: "Group information",
            author: "Written for Akademik Space",
            text: "There are twelve students in our English group. Three of them are new this year.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three students" },
              { id: "b", text: "Twelve students" },
              { id: "c", text: "Fifteen students" },
              { id: "d", text: "Nine students" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for numbers", statement: "The question asks about the whole group, not the new students." },
            ],
            steps: [
              { reasoning: "The group has twelve students.", marks: 1, markCode: "M" },
              { reasoning: "Three is the number of new students, a different detail.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Twelve students",
            commonErrors: ["Answering with the number of new students instead of the total."],
          },
        },
        {
          id: "langab-u3-l31q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You did not hear a word clearly during a listening task. What is the best action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop listening" },
              { id: "b", text: "Guess and say nothing" },
              { id: "c", text: "Change the subject completely" },
              { id: "d", text: "Say \"Sorry?\" and ask the speaker to repeat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Active listening", statement: "Asking for repetition is part of good listening." },
            ],
            steps: [
              { reasoning: "Asking for repetition helps you catch the key detail.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Say \"Sorry?\" and ask the speaker to repeat",
            commonErrors: ["Guessing instead of checking."],
          },
        },
        {
          id: "langab-u3-l31q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Before a listening task, what is the most useful thing to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak first" },
              { id: "b", text: "Translate every word into your language" },
              { id: "c", text: "Decide which details you need to catch" },
              { id: "d", text: "Memorise the answers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pre-listening", statement: "Knowing what to listen for focuses attention." },
            ],
            steps: [
              { reasoning: "Deciding the needed details is the useful pre-listening step.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decide which details you need to catch",
            commonErrors: ["Trying to understand every single word."],
          },
        },
        {
          id: "langab-u3-l31q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "The teacher will read three words aloud. Write them down exactly as you hear them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dictation", statement: "Write each word exactly as heard." },
            ],
            steps: [
              { reasoning: "First word written correctly.", marks: 1, markCode: "M" },
              { reasoning: "Second word written correctly.", marks: 1, markCode: "M" },
              { reasoning: "Third word written correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The three words exactly as read aloud (e.g. school, seven, Sunday).",
            commonErrors: ["Writing similar but different words."],
          },
        },
        {
          id: "langab-u3-l31q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Listen to this voicemail and answer the questions.",
          extract: {
            title: "Voicemail from Ana",
            author: "Written for Akademik Space",
            text: "Hi, this is Ana. My new phone number is oh-one-two, five five five, eight eight zero. I'm free on Tuesday after school.",
          },
          parts: [
            { label: "a", prompt: "Write Ana's new phone number.", marks: 2 },
            { label: "b", prompt: "Write the day she is free.", marks: 1 },
            { label: "c", prompt: "Write when she is free.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Catching contact details", statement: "Numbers are given digit by digit — write each one." },
            ],
            steps: [
              { part: "a", reasoning: "Phone number 012 555 880 (or 012555880), all digits correct.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Tuesday.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "After school.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 012555880. (b) Tuesday. (c) After school.",
            commonErrors: ["Missing a digit in the phone number."],
          },
        },
        {
          id: "langab-u3-l31q17",
          difficulty: "core",
          totalMarks: 5,
          stem: "Take a message for your teacher from this caller.",
          extract: {
            title: "A phone call",
            author: "Written for Akademik Space",
            text: "Hello, this is Mr Jones from the sports club. Please tell Tom that the match is on Saturday at three p.m.",
          },
          parts: [
            { label: "a", prompt: "Write the caller's name.", marks: 1 },
            { label: "b", prompt: "Write who the message is for.", marks: 1 },
            { label: "c", prompt: "Write the message itself.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Message taking", statement: "Record who called, for whom, and what they want." },
            ],
            steps: [
              { part: "a", reasoning: "Caller is Mr Jones.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Message is for Tom.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Match on Saturday at three p.m. — event, day and time all included.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) Mr Jones. (b) Tom. (c) The match is on Saturday at three p.m.",
            commonErrors: ["Missing the day or the time of the match."],
          },
        },
        {
          id: "langab-u3-l31q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short voicemail message of your own.",
          parts: [
            { label: "a", prompt: "Greet the listener and say your name.", marks: 1 },
            { label: "b", prompt: "Give one phone number and one time or date.", marks: 2 },
            { label: "c", prompt: "Say goodbye or \"see you\".", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Voicemail format", statement: "Greeting + name + details + closing." },
            ],
            steps: [
              { part: "a", reasoning: "Greeting and name present, e.g. \"Hi, it's Maria.\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "One correct number format and one correct time or date.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A polite closing such as \"See you!\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hi, it's ... (b) number + time/date. (c) See you!",
            commonErrors: ["Forgetting the name or the closing."],
          },
        },
        {
          id: "langab-u3-l31q19",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Listen to this announcement and answer the questions.",
          extract: {
            title: "School trip update",
            author: "Written for Akademik Space",
            text: "Attention! The school trip to the museum is cancelled on Monday. The new date is Wednesday, the fourteenth of June. Students must meet at the main gate at eight fifteen.",
          },
          parts: [
            { label: "a", prompt: "What has changed about the trip?", marks: 2 },
            { label: "b", prompt: "Write the new date.", marks: 1 },
            { label: "c", prompt: "Write where students must meet and at what time.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for changes", statement: "Announcements often correct earlier information — catch the change first." },
            ],
            steps: [
              { part: "a", reasoning: "The trip is cancelled on Monday / moved to a new date.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Wednesday, the fourteenth of June.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Main gate at eight fifteen — place and time both correct.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Cancelled on Monday. (b) Wednesday 14 June. (c) Main gate, 8:15.",
            commonErrors: ["Missing that the Monday trip was cancelled."],
          },
        },
        {
          id: "langab-u3-l31q20",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Listen to this short message and complete the sentence.",
          extract: {
            title: "About a friend",
            author: "Written for Akademik Space",
            text: "Her name is Lena and she lives in Paris.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Key details", statement: "Catch the name and the place from a short text." },
            ],
            steps: [
              { reasoning: "Name is Lena.", marks: 1, markCode: "M" },
              { reasoning: "She lives in Paris.", marks: 1, markCode: "M" },
              { reasoning: "Both details correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Her name is Lena and she lives in Paris.",
            commonErrors: ["Mixing up the name and the place."],
          },
        },
      ],
    },
    {
      id: "langab-u3-listening-details",
      title: "Listening for details in context",
      skill: "Understand simple announcements and dialogues and pick out who, what, where and when.",
      lesson: {
        sections: [
          {
            heading: "Announcements",
            body: "Announcements give information to a group: \"The library closes at five today.\" \"Bus number twelve goes to the station.\" Listen for the main fact first, then any extra details like time or place.",
          },
          {
            heading: "Short dialogues",
            body: "In dialogues, two people exchange information. Identify **who** is speaking, **what** they want, and **where/when** it happens. Example: \"Are you free on Saturday?\" — \"Yes, after lunch.\"",
          },
          {
            heading: "Guessing meaning",
            body: "You do not need to understand every word. Use the words you know plus the situation to guess meaning. If a word is new, listen for the words around it — they often explain it.",
          },
        ],
        keyFormulas: [
          { name: "Announcement facts", statement: "What + where/when (The library closes at five)." },
          { name: "Dialogue clues", statement: "Who + wants what + when/where." },
        ],
        workedExample: {
          problem: "You hear: \"The train to Paris leaves from platform three.\" Where does it leave from?",
          solution: "Platform three.",
        },
      },
      questions: [
        {
          id: "langab-u3-l31q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a dialogue, who is usually speaking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two people taking turns" },
              { id: "b", text: "Nobody" },
              { id: "c", text: "A written narrator" },
              { id: "d", text: "Only one person" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dialogue", statement: "A dialogue is a conversation between two or more people." },
            ],
            steps: [
              { reasoning: "A dialogue has at least two speakers taking turns.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Two people taking turns",
            commonErrors: ["Thinking a dialogue is a monologue."],
          },
        },
        {
          id: "langab-u3-l31q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Listen and write: what time does the shop close? (Teacher reads: 'Our shop closes at nine o'clock.')",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Catching times", statement: "Write the time exactly as heard." },
            ],
            steps: [
              { reasoning: "The time is nine o'clock.", marks: 1, markCode: "M" },
              { reasoning: "Write it as 9:00 or nine o'clock.", marks: 1, markCode: "M" },
              { reasoning: "Answer matches the announcement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nine o'clock / 9:00.",
            commonErrors: ["Writing a different time."],
          },
        },
        {
          id: "langab-u3-l31q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read this announcement and answer the questions.",
          extract: {
            title: "School announcement",
            author: "Written for Akademik Space",
            text: "Attention students! The sports day is on Friday, not Thursday. It starts at nine o'clock in the morning. Please wear sports clothes.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Announcement comprehension", statement: "Find the day, the change and the time in the announcement." },
            ],
            steps: [
              { reasoning: "Sports day is on Friday (changed from Thursday).", marks: 1, markCode: "M" },
              { reasoning: "It starts at nine o'clock.", marks: 1, markCode: "M" },
              { reasoning: "Students must wear sports clothes.", marks: 1, markCode: "A" },
              { reasoning: "All three details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Friday; nine o'clock; wear sports clothes.",
            commonErrors: ["Missing that the day changed from Thursday."],
          },
        },
        {
          id: "langab-u3-l31q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short announcement for your class about an event.",
          parts: [
            { label: "a", prompt: "Name the event.", marks: 1 },
            { label: "b", prompt: "Give the day and time.", marks: 2 },
            { label: "c", prompt: "Give one instruction for students.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Announcements", statement: "An announcement gives the event, when, and what to do." },
            ],
            steps: [
              { part: "a", reasoning: "Event clearly named.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Day and time both correct.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One clear instruction.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Event. (b) Day + time. (c) Instruction.",
            commonErrors: ["Forgetting the time or the instruction."],
          },
        },
        {
          id: "langab-u3-l31q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an announcement, what should you listen for first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker's name" },
              { id: "b", text: "Every single word" },
              { id: "c", text: "The main fact" },
              { id: "d", text: "Background music" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea first", statement: "Catch the main fact, then the extra details." },
            ],
            steps: [
              { reasoning: "The main fact is the most important part of an announcement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The main fact",
            commonErrors: ["Trying to understand every word equally."],
          },
        },
        {
          id: "langab-u3-l31q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the sentence \"The train leaves from platform five,\" what is a platform?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A person who drives" },
              { id: "b", text: "A type of ticket" },
              { id: "c", text: "A time of day" },
              { id: "d", text: "A place where trains stop" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Platform", statement: "A platform is the place where passengers board trains." },
            ],
            steps: [
              { reasoning: "A platform is where trains stop and passengers board.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A place where trains stop",
            commonErrors: ["Confusing platform with timetable."],
          },
        },
        {
          id: "langab-u3-l31q23",
          difficulty: "core",
          totalMarks: 2,
          stem: "Listen to this dialogue and choose the correct answer.",
          extract: {
            title: "Making plans",
            author: "Written for Akademik Space",
            text: "A: Are you coming to the party on Friday?\nB: Yes, but only after seven.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the party" },
              { id: "b", text: "Friday afternoon" },
              { id: "c", text: "Never" },
              { id: "d", text: "After seven" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue details", statement: "B says yes but gives a time condition." },
            ],
            steps: [
              { reasoning: "B can come only after seven.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** After seven",
            commonErrors: ["Answering with the day instead of the time condition."],
          },
        },
        {
          id: "langab-u3-l31q24",
          difficulty: "core",
          totalMarks: 3,
          stem: "Listen to this announcement and choose the correct answer.",
          extract: {
            title: "Pool information",
            author: "Written for Akademik Space",
            text: "The swimming pool is closed on Mondays for cleaning. It opens at ten o'clock.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On Tuesdays" },
              { id: "b", text: "At ten o'clock" },
              { id: "c", text: "At weekends" },
              { id: "d", text: "On Mondays" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Catching details", statement: "The question asks for the day, not the opening time." },
            ],
            steps: [
              { reasoning: "The pool is closed on Mondays.", marks: 1, markCode: "M" },
              { reasoning: "Ten o'clock is when it opens, a different detail.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** On Mondays",
            commonErrors: ["Confusing the closing day with the opening time."],
          },
        },
        {
          id: "langab-u3-l31q25",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You hear: \"The meeting is moved from Room 4 to Room 9.\" Where is the meeting now?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Room 9" },
              { id: "b", text: "Outside" },
              { id: "c", text: "The hall" },
              { id: "d", text: "Room 4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Changes of plan", statement: "With \"moved from ... to ...\" the new place comes second." },
            ],
            steps: [
              { reasoning: "The meeting moved to Room 9; Room 4 is the old place.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Room 9",
            commonErrors: ["Choosing the old room number."],
          },
        },
        {
          id: "langab-u3-l31q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two or more people talking to each other" },
              { id: "b", text: "One person speaking alone" },
              { id: "c", text: "A written song" },
              { id: "d", text: "A formal letter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dialogue", statement: "A dialogue is a spoken exchange between speakers." },
            ],
            steps: [
              { reasoning: "A dialogue involves two or more speakers taking turns.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Two or more people talking to each other",
            commonErrors: ["Confusing a dialogue with a monologue."],
          },
        },
        {
          id: "langab-u3-l31q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Listen to this sentence and write down the place it mentions.",
          extract: {
            title: "Directions",
            author: "Written for Akademik Space",
            text: "The cinema is next to the bank, opposite the park.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for place", statement: "Pick out the place words from a sentence." },
            ],
            steps: [
              { reasoning: "The cinema is next to the bank.", marks: 1, markCode: "M" },
              { reasoning: "It is also opposite the park.", marks: 1, markCode: "M" },
              { reasoning: "Place correctly identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Next to the bank, opposite the park.",
            commonErrors: ["Missing one of the two place details."],
          },
        },
        {
          id: "langab-u3-l31q28",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read this short dialogue and answer the questions.",
          extract: {
            title: "Meeting up",
            author: "Written for Akademik Space",
            text: "A: Let's meet at the café at five.\nB: OK, see you there.",
          },
          parts: [
            { label: "a", prompt: "What are the two people planning to do?", marks: 1 },
            { label: "b", prompt: "Where will they meet?", marks: 1 },
            { label: "c", prompt: "When will they meet?", marks: 1 },
            { label: "d", prompt: "Write one full sentence about the plan.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Who, what, where, when", statement: "Identify the action and the details in a dialogue." },
            ],
            steps: [
              { part: "a", reasoning: "They are meeting / meeting up.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At the café.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At five (o'clock).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct full sentence, e.g. \"They will meet at the café at five.\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Meet. (b) Café. (c) Five. (d) They meet at the café at five.",
            commonErrors: ["Missing the time or the place."],
          },
        },
        {
          id: "langab-u3-l31q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Listen to this announcement and answer the questions.",
          extract: {
            title: "Bus information",
            author: "Written for Akademik Space",
            text: "Bus number seven to the airport leaves every hour from bay three.",
          },
          parts: [
            { label: "a", prompt: "Which bus is it?", marks: 1 },
            { label: "b", prompt: "Where is it going?", marks: 1 },
            { label: "c", prompt: "How often does it leave?", marks: 1 },
            { label: "d", prompt: "Where does it leave from?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Announcement facts", statement: "Number, destination, frequency and place are all key facts." },
            ],
            steps: [
              { part: "a", reasoning: "Bus number seven.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "To the airport.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Every hour.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "From bay three.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Number 7. (b) Airport. (c) Every hour. (d) Bay three.",
            commonErrors: ["Mixing up the destination and the departure point."],
          },
        },
        {
          id: "langab-u3-l31q30",
          difficulty: "core",
          totalMarks: 5,
          stem: "Read this sentence and answer the questions about the word \"starving.\"",
          extract: {
            title: "At lunchtime",
            author: "Written for Akademik Space",
            text: "I'm starving — let's eat now!",
          },
          parts: [
            { label: "a", prompt: "What does \"starving\" probably mean here?", marks: 2 },
            { label: "b", prompt: "What does the speaker want to do?", marks: 1 },
            { label: "c", prompt: "Which words in the sentence help you guess the meaning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Guessing meaning", statement: "Use the words around an unknown word to guess its meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Very hungry.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Eat now.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "\"let's eat now\" shows the person needs food.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Very hungry. (b) Eat. (c) \"let's eat now\" gives the clue.",
            commonErrors: ["Guessing without using the context words."],
          },
        },
        {
          id: "langab-u3-l31q31",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three key details you might hear in a school announcement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Announcement details", statement: "Announcements give facts: what, when, where, and what to do." },
            ],
            steps: [
              { reasoning: "Any three suitable details, e.g. a day, a time, a place.", marks: 2, markCode: "M" },
              { reasoning: "All three are realistic announcement details.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. the event name, the day, the time, the place, an instruction (any three).",
            commonErrors: ["Writing details that cannot appear in an announcement."],
          },
        },
        {
          id: "langab-u3-l31q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Listen to this announcement and answer the questions.",
          extract: {
            title: "Match update",
            author: "Written for Akademik Space",
            text: "The football match is not on Saturday. It is on Sunday at four o'clock instead. Bring your team shirt.",
          },
          parts: [
            { label: "a", prompt: "What has changed about the match?", marks: 2 },
            { label: "b", prompt: "Write the new day and time.", marks: 2 },
            { label: "c", prompt: "What must students bring?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for changes", statement: "Catch what was cancelled and the replacement details." },
            ],
            steps: [
              { part: "a", reasoning: "The match is no longer on Saturday — the day changed.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Sunday at four o'clock.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Their team shirt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Day changed. (b) Sunday, 4:00. (c) Team shirt.",
            commonErrors: ["Missing the change from Saturday to Sunday."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mla1-u1-lesson-1-1",
  code: "1-1",
  title: "Listening for Survival: Greetings, Announcements and Signs",
  goal: "I CAN understand simple spoken English such as greetings, classroom instructions and short announcements, and read basic signs and notices.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Announcement", definition: "A spoken or written message given to a group of people." },
    { term: "Instruction", definition: "A direction that tells you what to do, for example 'Open your books.'" },
    { term: "Sign", definition: "A short written notice that gives information or a rule." },
    { term: "Notice", definition: "An official short message posted for people to read." },
    { term: "Warning", definition: "A sign or message that tells you about danger." },
  ],
  concepts: [
    {
      id: "mla1-u1-greetings-instructions",
      title: "Greetings and classroom instructions",
      skill: "Understand simple spoken greetings, introductions and instructions in familiar situations.",
      lesson: {
        sections: [
          {
            heading: "Greetings you will hear every day",
            body: "English speakers greet each other with simple phrases: **'Good morning'**, **'Hello'**, **'Hi'**, **'How are you?'**, **'What's your name?'**. You can answer with short, friendly replies: 'I'm fine, thank you.' Learning these phrases helps you join in quickly. In school you will also hear **'Good afternoon'** and **'Goodbye'** or **'See you later'.**",
          },
          {
            heading: "Understanding instructions",
            body: "Teachers give simple instructions every day: 'Open your books', 'Sit down', 'Listen', 'Write your name', 'Put your hand up'. The most important words are usually the **action verbs** at the start of the sentence. If you miss a word, look at what your classmates do — or ask politely: **'Sorry, can you repeat that, please?'**",
          },
          {
            heading: "A four-step listening routine",
            body: "When you listen to English, try this routine: (1) Listen for the **main idea** — who is speaking and about what. (2) Listen for **key words** you already know. (3) Guess the meaning of new words from the situation. (4) Check your understanding by answering or doing what was asked.",
          },
        ],
        workedExample: {
          problem: "You hear: 'Good morning everyone. Today we are going to read a story. Please sit down and open your books.' What should you do?",
          solution: "The main message is a classroom instruction. The action verbs are 'sit down' and 'open your books' — so you should sit down and open your books.",
        },
      },
      questions: [
        {
          id: "mla1-u1-greetings-instructions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is the normal English greeting used in the morning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Goodbye" },
              { id: "b", text: "Good morning" },
              { id: "c", text: "Good night" },
              { id: "d", text: "See you" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "English greetings", statement: "'Good morning' is used until about midday; 'Good afternoon' follows." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — recognise the standard morning greeting.", working: "Good morning", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Good morning",
            commonErrors: ["Choosing 'Goodbye', which is a farewell, not a greeting."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two short answers you could give when a classmate asks you 'How are you?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Social responses", statement: "Short polite replies such as 'I'm fine, thank you' or 'Very well, thanks' answer 'How are you?'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — produce an appropriate short greeting reply.", working: "I'm fine, thank you.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — a second acceptable alternative reply.", working: "Very well, thanks. / I'm good, thanks.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "I'm fine, thank you. / Very well, thanks.",
            commonErrors: ["Answering in the first language only.", "Writing a long answer instead of a short polite reply."],
            examinerNote: "Accept any natural short reply, including 'Not bad, thanks.'",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Morning Announcement",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Good morning, everyone. Today is Monday. After break we have a special visitor from the school office. Please be in your classrooms at ten o'clock. Thank you.",
          },
          stem: "Listen to (or read) the announcement and answer: (1) What day is it today? (2) What will happen after break? (3) What time must students be in their classrooms?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for specific information", statement: "Key words like 'Monday', 'special visitor' and 'ten o'clock' carry the details." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — the announcement states 'Today is Monday'.", working: "Monday", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'we have a special visitor from the school office'.", working: "A special visitor comes.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'Please be in your classrooms at ten o'clock.'", working: "At ten o'clock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(1) Monday (2) a special visitor comes (3) at ten o'clock",
            commonErrors: ["Answering 'break' as the time instead of 'ten o'clock'.", "Missing that the visitor is from the school office."],
            examinerNote: "Accept '10:00' for the time.",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Teacher's Instructions",
            author: "Written for Akademik Space",
            source: "Listening comprehension practice",
            text: "Hello class. Today we are learning about animals. First, please look at the pictures on the board. Then, write three words about your favourite animal in your notebooks. After that, we will listen to a song. Don't talk — listen carefully, please.",
          },
          stem: "You heard the teacher's instructions. List the tasks in the correct order, and write one sentence to ask the teacher to repeat part of the instructions politely.",
          parts: [
            { label: "a", prompt: "Write the three tasks in order.", marks: 3 },
            { label: "b", prompt: "Write one polite sentence asking for a repetition.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequencing language", statement: "'First', 'then', 'after that' signal the order of instructions." },
              { kind: "convention", name: "Polite requests", statement: "Adding 'please' and 'can you' makes a request polite." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — the first instruction is 'look at the pictures on the board'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Second instruction: 'write three words about your favourite animal'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Third instruction: 'listen to a song' (do not talk).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion D: Writing — a polite request frame such as 'Sorry, can you repeat that, please?'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct sentence structure with capital letter and full stop.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — the sentence is a natural spoken-style request a learner can say aloud.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 1. Look at the pictures. 2. Write three words about your favourite animal. 3. Listen to a song. (b) Sorry, can you repeat that, please?",
            commonErrors: ["Putting 'listen to a song' before the writing task.", "Writing the request without 'please' or 'can you'."],
            examinerNote: "Any polite request is acceptable, e.g. 'Can you say that again, please?'",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is a farewell, not a greeting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hello" },
              { id: "b", text: "Goodbye" },
              { id: "c", text: "Hi" },
              { id: "d", text: "Good morning" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Greetings and farewells", statement: "Greetings open a conversation ('Hello', 'Good morning'); farewells close it ('Goodbye', 'See you later')." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Goodbye' ends a conversation; it is a farewell.", working: "Goodbye", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Goodbye",
            commonErrors: ["Choosing 'Good morning' — that is a greeting."],
            examinerNote: "A1 for (c).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the phrase 'See you later' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We will never meet again" },
              { id: "b", text: "I am late for class" },
              { id: "c", text: "Look at me, please" },
              { id: "d", text: "Goodbye — we will meet again" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Farewell phrases", statement: "'See you later' is an informal farewell meaning goodbye until the next meeting." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — recognise 'See you later' as a friendly goodbye.", working: "See you later = goodbye until we meet", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Goodbye — we will meet again",
            commonErrors: ["Thinking it is a greeting or an instruction."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q7",
          difficulty: "foundation",
          totalMarks: 3,
          extract: {
            title: "Museum Trip",
            author: "Written for Akademik Space",
            source: "Announcement practice",
            text: "Good morning, everyone. Our class is going to the museum on Friday 20 May. We will meet at the school gate at nine o'clock. Please bring one pencil case and two books. The trip costs twelve euros.",
          },
          stem: "Listen to (or read) the announcement and write the numbers you hear: the date, the meeting hour and the number of books.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Day of the month", answer: 20 },
              { label: "(b) Hour we meet", answer: 9 },
              { label: "(c) Number of books", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in announcements", statement: "Dates, times and quantities in announcements are usually the key details to catch." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'Friday 20 May' gives the date.", working: "20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — 'meet at the school gate at nine o'clock'.", working: "9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — 'bring one pencil case and two books'.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 (b) 9 (c) 2",
            commonErrors: ["Writing the month name instead of the date number.", "Writing numbers as words instead of digits."],
            examinerNote: "Accept digits or number words.",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two short instructions that a teacher might give at the start of an English lesson.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperative instructions", statement: "Classroom instructions are imperatives: verb first, no subject, e.g. 'Open your books.'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a plausible classroom instruction such as 'Sit down' or 'Listen'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — a second correct instruction with a capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Open your books.' / 'Sit down, please.'",
            commonErrors: ["Writing 'You open your books' — imperatives have no subject.", "Missing full stops."],
            examinerNote: "Any two correct classroom instructions accepted.",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "You hear a teacher say: 'Please stand up.' What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write your name" },
              { id: "b", text: "Sit down" },
              { id: "c", text: "Stand up" },
              { id: "d", text: "Open your book" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Action verbs in instructions", statement: "The action verb at the start of an instruction tells you what to do." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'stand up' is the action; you must stand up.", working: "stand up", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stand up",
            commonErrors: ["Choosing 'sit down' — the opposite action."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question should you ask if you do not understand what the teacher said?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How old are you?" },
              { id: "b", text: "What is your name?" },
              { id: "c", text: "Sorry, can you repeat that, please?" },
              { id: "d", text: "Where is the library?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Repair strategies", statement: "Polite repair phrases like 'Sorry, can you repeat that, please?' help you check understanding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — asking for repetition is the natural repair move.", working: "Sorry, can you repeat that, please?", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Sorry, can you repeat that, please?",
            commonErrors: ["Choosing an unrelated personal question."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Library Times",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The library is open from nine o'clock until four o'clock, Monday to Friday. It is closed at weekends. Students may borrow up to three books at one time.",
          },
          stem: "Write three numbers from the text: the opening hour, the closing hour and the maximum number of books.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Opening hour", answer: 9 },
              { label: "(b) Closing hour", answer: 4 },
              { label: "(c) Maximum books", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in notices", statement: "Times and quantities are the key numbers to extract from a notice." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'open from nine o'clock'.", working: "9", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'until four o'clock'.", working: "4", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'up to three books'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 9 (b) 4 (c) 3",
            commonErrors: ["Writing 'nine' and 'four' as words — digits are expected.", "Confusing opening and closing hours."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sports Day",
            author: "Written for Akademik Space",
            source: "Announcement practice",
            text: "Good afternoon. This is an announcement about Sports Day. Sports Day is on Thursday 24 May. All students must wear white T-shirts. The event starts at nine o'clock. Parents are welcome.",
          },
          stem: "Answer three questions about the announcement: On which day is Sports Day? What must students wear? What time does it start?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening for specific information", statement: "Key details in announcements answer who/what/when questions." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Sports Day is on Thursday 24 May.'", working: "Thursday 24 May", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'All students must wear white T-shirts.'", working: "white T-shirts", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'The event starts at nine o'clock.'", working: "nine o'clock", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thursday 24 May; white T-shirts; nine o'clock.",
            commonErrors: ["Answering 'May' without the day.", "Missing that students must wear white T-shirts."],
            examinerNote: "Accept '24 May' without 'Thursday'.",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A teacher says: 'Don't talk — listen carefully.' What does 'carefully' tell you about how to listen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listen after the lesson" },
              { id: "b", text: "Listen with attention and without mistakes" },
              { id: "c", text: "Listen only to the teacher's voice" },
              { id: "d", text: "Listen quickly and quietly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carefully", statement: "'Carefully' means with attention and without making mistakes." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'carefully' describes listening with attention.", working: "with attention", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Listen with attention and without mistakes",
            commonErrors: ["Choosing 'quickly' — carefully is about attention, not speed."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Classroom Instructions",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "First, finish your work. Then line up by the door. After that, wait for me quietly.",
          },
          stem: "Which word introduces the second action in order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Then" },
              { id: "b", text: "finish" },
              { id: "c", text: "door" },
              { id: "d", text: "First" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequencing language", statement: "'First' starts the order; 'then' introduces the next step; 'after that' the one after." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'First' is action one; 'Then' signals action two.", working: "Then", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Then",
            commonErrors: ["Choosing 'First' — that introduces the first action."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Asking for Help",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: Excuse me, where is the library?\nB: Go straight on and turn left. It is next to the gym.\nA: Thank you. Is it open now?\nB: Yes, until four o'clock.",
          },
          stem: "Answer the questions about the dialogue and write one more question speaker A could ask.",
          parts: [
            { label: "a", prompt: "Where is the library?", marks: 1 },
            { label: "b", prompt: "Until when is the library open?", marks: 1 },
            { label: "c", prompt: "Write one polite question A could ask next.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue comprehension", statement: "Each turn of a dialogue answers who/what/where questions." },
              { kind: "convention", name: "Question forms", statement: "Polite questions use correct word order and a question mark." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'It is next to the gym.'", working: "next to the gym", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — 'Yes, until four o'clock.'", working: "until four o'clock", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C: Speaking — a natural follow-up question such as 'What time does it close?'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct question word order and question mark.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) next to the gym (b) until four o'clock (c) e.g. 'What time does it close?'",
            commonErrors: ["Answering 'left' for the location — that is only part of the direction.", "Writing a statement instead of a question in (c)."],
            examinerNote: "(c) must fit the library context.",
          },
        },
        {
          id: "mla1-u1-greetings-instructions-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "School Trip Costs",
            author: "Written for Akademik Space",
            source: "Announcement practice",
            text: "The trip to the museum costs twelve euros for each student. There are twenty-four students in Year 1 and eighteen students in Year 2. All students are going.",
          },
          stem: "Write three numbers from the text: the cost per student, the number of Year 1 students and the total number of students going.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost per student (euros)", answer: 12, unit: "euros" },
              { label: "(b) Year 1 students", answer: 24 },
              { label: "(c) Total students going", answer: 42 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Finding totals means adding the numbers given for each group." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'costs twelve euros for each student'.", working: "12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — 'twenty-four students in Year 1'.", working: "24", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — add Year 1 and Year 2: 24 + 18.", working: "42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 (b) 24 (c) 42",
            commonErrors: ["Writing 'eighteen' for Year 1 — that is Year 2.", "Forgetting to add both year groups for (c)."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u1-signs-notices",
      title: "Reading signs, labels and notices",
      skill: "Understand short public texts such as signs, labels, notices and simple messages.",
      lesson: {
        sections: [
          {
            heading: "Signs and labels everywhere",
            body: "In English-speaking places you will see many short texts: **EXIT**, **OPEN**, **CLOSED**, **NO ENTRY**, **PUSH**, **PULL**, **DANGER**, **WARNING**. Signs use few words and often pictures, so they are easier to understand than long texts. Look for the **most important word** first — usually a verb or a noun.",
          },
          {
            heading: "Notices and messages",
            body: "A **notice** gives information to a group: 'Library closed on Monday', 'Lost: one red pencil case'. A **message** is for one person: 'Call me after school'. Read notices for **who**, **what** and **when**. Short messages often drop words — 'Back at 5' means 'I will be back at 5 o'clock'.",
          },
          {
            heading: "Reading strategy for short texts",
            body: "Use this three-step routine: (1) Look at the pictures and layout — they give clues. (2) Find the key word (OPEN/CLOSED, date, name). (3) Decide what the text wants you to know or do.",
          },
        ],
        keyFormulas: [
          { name: "Sign reading", statement: "Picture + key word = meaning" },
        ],
        workedExample: {
          problem: "A sign says 'SWIMMING POOL — NO RUNNING'. What does it mean?",
          solution: "The key words are 'swimming pool' and 'no running'. The sign means: do not run near or in the swimming pool.",
        },
      },
      questions: [
        {
          id: "mla1-u1-signs-notices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sign on a door says 'CLOSED'. What does it mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shop is far away" },
              { id: "b", text: "The door is open" },
              { id: "c", text: "You must push the door" },
              { id: "d", text: "You cannot go in now" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Public signs", statement: "'CLOSED' means the place is not open for use at that time." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'CLOSED' is the opposite of 'OPEN'; you cannot enter now.", working: "CLOSED = not open", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** You cannot go in now",
            commonErrors: ["Confusing 'CLOSED' with 'OPEN'."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "School Notice",
            author: "Written for Akademik Space",
            source: "Reading comprehension practice",
            text: "NOTICE\n\nThe school library will be CLOSED on Monday 12 May. Students can use the library again on Tuesday. Thank you for your patience.",
          },
          stem: "Read the notice and answer three questions: On which day is the library closed? When can students use it again? Who is the notice for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Notice comprehension", statement: "Notices answer who/what/when questions in very few words." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — closed on Monday 12 May.", working: "Monday 12 May", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — open again on Tuesday.", working: "Tuesday", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — the notice addresses students.", working: "Students", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Closed Monday 12 May; open again Tuesday; for students.",
            commonErrors: ["Answering '12 May' without the day.", "Saying 'teachers' — the notice says 'students'."],
            examinerNote: "Award each correct detail 1 mark.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Warning Sign",
            author: "Written for Akademik Space",
            source: "Reading comprehension practice",
            text: "DANGER!\n\nDEEP WATER.\nDO NOT SWIM HERE.\nAdults only.",
          },
          stem: "Explain what this sign tells you, using three pieces of information from it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Warning signs", statement: "Warning signs use DANGER/WARNING plus short commands like 'DO NOT...'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the water is deep ('DEEP WATER').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — you must not swim here ('DO NOT SWIM HERE').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — only adults may enter ('Adults only').", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The water is deep and dangerous; do not swim here; only adults are allowed.",
            commonErrors: ["Inventing information not on the sign.", "Missing 'Adults only'."],
            examinerNote: "Three correct details needed for full marks.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write three short public texts that you might see in an English-speaking school or town, and explain what each one tells people to do.",
          parts: [
            { label: "a", prompt: "Text 1: a sign or notice (write it in English).", marks: 2 },
            { label: "b", prompt: "Text 2: a second sign or notice.", marks: 2 },
            { label: "c", prompt: "For each text, say in one sentence what it tells people.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign conventions", statement: "Signs are short, use key words and often capital letters or imperatives." },
              { kind: "skill", name: "Audience and purpose", statement: "A sign for the public must be brief and clear." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — an authentic-looking sign, e.g. 'LIBRARY OPEN 8.00-16.00' or 'NO FOOD OR DRINK'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct spelling and capital letters.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — a second correct, different sign.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — accurate spelling and capitals.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading applied to own writing — correct explanation of text 1's message.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading applied to own writing — correct explanation of text 2's message.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — explanations are clear, complete sentences.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a)/(b) any correct short public signs; (c) accurate one-sentence explanations for each.",
            commonErrors: ["Writing long sentences instead of sign-style short text.", "Explanations that contradict the sign."],
            examinerNote: "Signs must be plausible public texts; accept any correct examples.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sign on a door says 'PUSH'. What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Open the window" },
              { id: "b", text: "Pull the door towards you" },
              { id: "c", text: "Wait outside" },
              { id: "d", text: "Push the door away from you" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Door signs", statement: "'PUSH' means push the door to open it; 'PULL' means pull it towards you." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'PUSH' is the instruction for opening the door.", working: "push the door", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Push the door away from you",
            commonErrors: ["Confusing PUSH with PULL."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A notice says 'Library closed on Monday.' On which day can you NOT use the library?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friday" },
              { id: "b", text: "Wednesday" },
              { id: "c", text: "Tuesday" },
              { id: "d", text: "Monday" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Closed notices", statement: "'Closed on...' tells you the day(s) the place is not open." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the library is closed on Monday.", working: "Monday", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Monday",
            commonErrors: ["Choosing a day that is not named in the notice."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Swimming Pool Prices",
            author: "Written for Akademik Space",
            source: "Sign reading practice",
            text: "SWIMMING POOL\nOpen daily 10.00 - 18.00\nAdults: 5 euros\nChildren: 2 euros",
          },
          stem: "Read the sign and write the two prices: the adult price and the child price.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Adult price (euros)", answer: 5, unit: "euros" },
              { label: "(b) Child price (euros)", answer: 2, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading signs with numbers", statement: "Prices and times on signs are found by matching the label to the number." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Adults: 5 euros'.", working: "5", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Children: 2 euros'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 5 (b) 2",
            commonErrors: ["Swapping the adult and child prices."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a short notice for your classroom door saying that the class is on a trip on Friday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Notice writing", statement: "A notice is short, clear and gives the who/what/when." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — notice says the class is on a trip on Friday.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — brief notice form with capital letters and a full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'NOTICE: Our class is on a trip on Friday.'",
            commonErrors: ["Writing a long paragraph instead of a short notice.", "Missing the day (when)."],
            examinerNote: "Any brief correct notice accepted.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sign shows a picture of a dog with a red circle and line through it. What does it most likely mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dogs must be on a lead" },
              { id: "b", text: "Dogs are welcome here" },
              { id: "c", text: "Buy dog food here" },
              { id: "d", text: "No dogs allowed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading signs with pictures", statement: "A red circle with a line through a picture means that thing is not allowed." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the crossed-out dog means dogs are not allowed.", working: "no dogs allowed", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** No dogs allowed",
            commonErrors: ["Thinking the picture invites dogs — the line means 'no'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word on a sign tells you there is danger?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PUSH" },
              { id: "b", text: "CLOSED" },
              { id: "c", text: "OPEN" },
              { id: "d", text: "DANGER" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Warning signs", statement: "Signs with DANGER or WARNING alert you to possible harm." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'DANGER' is the warning word.", working: "DANGER", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** DANGER",
            commonErrors: ["Choosing OPEN/CLOSED — those give information, not warnings."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Café Sign",
            author: "Written for Akademik Space",
            source: "Sign reading practice",
            text: "SUNNY CAFÉ\nOpen daily 08.00 - 20.00\nCoffee: 2 euros\nCake: 3 euros",
          },
          stem: "Read the sign and write: the closing time as a number, and the price of a cake.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Closing time", answer: 20 },
              { label: "(b) Cake price (euros)", answer: 3, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading signs with numbers", statement: "On a sign, match each label to its number or time." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — '08.00 - 20.00' gives opening and closing times; closing is 20.00.", working: "20", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Cake: 3 euros'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 20 (b) 3",
            commonErrors: ["Writing 8 for closing — that is the opening time.", "Writing the coffee price for cake."],
            examinerNote: "Accept 20.00 or 'eight in the evening'.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Lost Dog",
            author: "Written for Akademik Space",
            source: "Notice reading practice",
            text: "LOST!\nA small brown dog, called Max.\nHe ran away on Sunday.\nPlease call 555 1234 if you see him.\nReward: one chocolate bar.",
          },
          stem: "Answer three questions about the notice: What is the dog's name? What does the owner give as a reward? What should you do if you see the dog?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Notice comprehension", statement: "Notices give who/what/when plus an action the reader should take." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'called Max'.", working: "Max", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Reward: one chocolate bar.'", working: "one chocolate bar", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Please call 555 1234 if you see him.'", working: "call 555 1234", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Max; one chocolate bar; call 555 1234.",
            commonErrors: ["Answering 'brown' as the name — that is the colour.", "Missing the phone number action."],
            examinerNote: "The phone number must be correct: 555 1234.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A message says 'Back at 5.' What does '5' most probably mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Five o'clock" },
              { id: "b", text: "Page five" },
              { id: "c", text: "Five euros" },
              { id: "d", text: "Five people" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Short messages", statement: "Messages drop words; 'Back at 5' means 'back at 5 o'clock'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'at 5' refers to a time, so 5 o'clock.", working: "5 o'clock", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Five o'clock",
            commonErrors: ["Thinking it is money — 'at' signals a time."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Sign A says 'NO ENTRY — STAFF ONLY'. Sign B says 'PUSH'. Which sign tells you that only workers can enter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both signs" },
              { id: "b", text: "Sign B" },
              { id: "c", text: "Sign A" },
              { id: "d", text: "Neither sign" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Restriction signs", statement: "'NO ENTRY — STAFF ONLY' restricts entry to workers; 'STAFF' means workers." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'STAFF ONLY' means only staff/workers may enter.", working: "Sign A", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sign A",
            commonErrors: ["Choosing Sign B — 'PUSH' is about doors, not permission."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla1-u1-signs-notices-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "School Rules",
            author: "Written for Akademik Space",
            source: "Notice reading practice",
            text: "SCHOOL RULES\n1. Be kind to everyone.\n2. No running in the corridors.\n3. Wear your uniform.\n4. Listen to teachers.",
          },
          stem: "Read the rules and complete the tasks.",
          parts: [
            { label: "a", prompt: "How many rules are there? Write the number.", marks: 1 },
            { label: "b", prompt: "Write two rules about behaviour (not about clothes).", marks: 2 },
            { label: "c", prompt: "Write one sentence explaining why rules help a school.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applying rules", statement: "Rules tell people how to behave; explaining them shows understanding." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — four numbered rules.", working: "4", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two behaviour rules, e.g. 'Be kind to everyone' and 'Listen to teachers' (not 'wear your uniform').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both rules quoted or restated correctly.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C: Speaking — a sensible reason, e.g. 'Rules make everyone safe and the school pleasant.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 4 (b) e.g. 'Be kind to everyone' and 'Listen to teachers' (c) rules keep the school safe and pleasant.",
            commonErrors: ["Choosing 'wear your uniform' for (b) — that is about clothes.", "Answering 'no rules' for (a)."],
            examinerNote: "(b) must exclude the uniform rule.",
          },
        },
        {
          id: "mla1-u1-signs-notices-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Museum Ticket Prices",
            author: "Written for Akademik Space",
            source: "Sign reading practice",
            text: "MUSEUM TICKETS\nAdults: 8 euros\nChildren: 5 euros\nA family ticket for 2 adults and 3 children costs 31 euros.",
          },
          stem: "Write three numbers from the sign: the adult price, the child price and the family ticket price.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Adult price (euros)", answer: 8, unit: "euros" },
              { label: "(b) Child price (euros)", answer: 5, unit: "euros" },
              { label: "(c) Family ticket price (euros)", answer: 31, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading prices", statement: "Match each price label to its number; the family price is given directly." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Adults: 8 euros'.", working: "8", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Children: 5 euros'.", working: "5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'family ticket ... costs 31 euros'.", working: "31", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 8 (b) 5 (c) 31",
            commonErrors: ["Computing 2 x 8 + 3 x 5 = 31 is fine, but reading the given price directly is expected.", "Swapping adult and child prices."],
            examinerNote: "31 is stated on the sign; calculation not required.",
          },
        },
      ],
    },
  ],
};

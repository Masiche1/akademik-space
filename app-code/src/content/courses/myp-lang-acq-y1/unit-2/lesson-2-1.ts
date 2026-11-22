import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mla1-u2-lesson-2-1",
  code: "2-1",
  title: "Speaking: Greetings, Introductions and Simple Exchanges",
  goal: "I CAN greet people, introduce myself and others, and ask and answer simple questions in spoken English.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Introduction", definition: "The act of telling people your name and basic information when you meet them." },
    { term: "Greeting", definition: "A polite word or phrase used when meeting someone, such as 'Hello'." },
    { term: "Exchange", definition: "A short back-and-forth conversation, like asking and answering a question." },
    { term: "Pronunciation", definition: "The way words sound when you speak them." },
    { term: "Turn-taking", definition: "Taking your turn to speak and letting the other person speak too." },
  ],
  concepts: [
    {
      id: "mla1-u2-greetings-introductions",
      title: "Greetings and introductions",
      skill: "Greet people politely and introduce yourself using simple English.",
      lesson: {
        sections: [
          {
            heading: "Meeting someone new",
            body: "A simple introduction in English has three parts: **greet** ('Hello' / 'Hi'), **say your name** ('My name is...'), and **add a friendly detail** ('I'm ten years old' / 'I like football'). You can also ask the other person: 'What's your name?' and 'How old are you?'",
          },
          {
            heading: "Body language and politeness",
            body: "When you speak English, smile and look at the person. Speak **clearly and slowly** — it is better to speak slowly than too fast. Use polite words: 'please', 'thank you', 'excuse me'. In many English-speaking places, people shake hands when they meet for the first time.",
          },
          {
            heading: "A model introduction",
            body: "Practise this pattern: 'Hello, my name is Ana. I am from Brazil. I am ten years old. Nice to meet you.' The last phrase — **'Nice to meet you'** — is the friendly way to finish an introduction.",
          },
        ],
        keyFormulas: [
          { name: "Introduction pattern", statement: "Hello + My name is... + I am from... + Nice to meet you." },
        ],
        workedExample: {
          problem: "Introduce yourself in three sentences.",
          solution: "'Hello, my name is Tom. I am eleven years old. I am from Spain. Nice to meet you.'",
        },
      },
      questions: [
        {
          id: "mla1-u2-greetings-introductions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly introduces yourself?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I name am Tom." },
              { id: "b", text: "I am name Tom." },
              { id: "c", text: "My name is Tom." },
              { id: "d", text: "Name my is Tom." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Self-introduction", statement: "English uses 'My name is...' or 'I'm...' to introduce yourself." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'My name is Tom' is the correct word order.", working: "My name is Tom.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** My name is Tom.",
            commonErrors: ["Translating word order from the first language."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a two-sentence introduction of yourself to a new English-speaking classmate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction structure", statement: "Greeting/name + one personal detail, with correct word order and punctuation." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — includes name using 'My name is...' or 'I'm...'.", working: "My name is ...", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — second sentence adds a true personal detail with correct grammar and full stop.", working: "I am ... / I like ...", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hello, my name is Lee. I am ten years old.'",
            commonErrors: ["Writing only the name with no greeting or detail.", "Missing full stops or capitals."],
            examinerNote: "Content must be the student's own true information.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain three things that make a spoken introduction in English polite and friendly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Politeness conventions", statement: "Greetings, clear speech, smiling and polite phrases signal friendliness." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — use a proper greeting ('Hello'/'Hi') and finish with 'Nice to meet you'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — speak clearly and at a steady, not too fast, speed.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — use polite words like 'please'/'thank you' and friendly body language (smile, eye contact).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Greet properly, speak clearly and slowly, use polite phrases and friendly body language.",
            commonErrors: ["Listing only grammar points instead of spoken behaviour."],
            examinerNote: "Accept any three valid politeness features.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Imagine a new student joins your class. Help them introduce themselves.",
          parts: [
            { label: "a", prompt: "Write the three parts of a simple English introduction.", marks: 2 },
            { label: "b", prompt: "Write a model introduction for a student named Kim, aged 9, from Korea.", marks: 2 },
            { label: "c", prompt: "Write two questions the new student could ask a classmate.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Functional language", statement: "Introductions combine fixed phrases, personal details and follow-up questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — greeting + name + personal detail (e.g. age, country, likes).", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C: Speaking — optional friendly close such as 'Nice to meet you'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — model uses 'My name is Kim', 'I am nine years old', 'I am from Korea' correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct spelling, capitals and punctuation.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — two appropriate questions, e.g. 'What's your name?' / 'Where are you from?'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct question word order and question marks.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — questions are ones a new student would naturally ask.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) greet, name, detail (+ nice to meet you) (b) correct model introduction (c) two correct questions.",
            commonErrors: ["Writing questions with statement word order ('You are from where?')."],
            examinerNote: "Accept any correct questions about name, age, country or likes.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly says your name?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Name I Kim." },
              { id: "b", text: "I name Kim." },
              { id: "c", text: "Kim name my is." },
              { id: "d", text: "My name is Kim." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Self-introduction", statement: "'My name is...' is the fixed English pattern for saying your name." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'My name is Kim' is correct English word order.", working: "My name is Kim.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** My name is Kim.",
            commonErrors: ["Translating word order from the first language."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do you usually say at the end of an introduction to a new person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good night" },
              { id: "b", text: "Nice to meet you" },
              { id: "c", text: "I am hungry" },
              { id: "d", text: "Where is the toilet?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Closing an introduction", statement: "'Nice to meet you' is the friendly fixed phrase that closes an introduction." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Nice to meet you' is the standard closing.", working: "Nice to meet you", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Nice to meet you",
            commonErrors: ["Choosing a farewell or an unrelated request."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q7",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "A Quick Introduction",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: Hi, I'm Tom. I'm eleven years old.\nB: Hello Tom, nice to meet you.",
          },
          stem: "Read the introduction and write the number: how old is Tom?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Tom's age", answer: 11 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in introductions", statement: "Age is the key number in a self-introduction." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'I'm eleven years old.'", working: "11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 11",
            commonErrors: ["Writing 'eleven' as a word — a digit is expected."],
            examinerNote: "Accept 'eleven'.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a two-sentence introduction for a classmate named Ana who is from Spain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction structure", statement: "Greeting + name + one detail, with correct word order and punctuation." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'My name is Ana' or 'I'm Ana' used correctly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'I am from Spain' (or similar) with correct grammar and full stops.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hello, my name is Ana. I am from Spain.'",
            commonErrors: ["'I from Spain' — missing 'am'.", "Missing full stops."],
            examinerNote: "The name must be Ana and the country Spain.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a polite thing to do when you meet someone for the first time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Smile and speak clearly and slowly" },
              { id: "b", text: "Talk very fast" },
              { id: "c", text: "Shout your name" },
              { id: "d", text: "Look at your phone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite speaking", statement: "Smiling, eye contact and clear, steady speech make an introduction friendly." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite delivery = smile, clarity, steady speed.", working: "smile and speak clearly", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Smile and speak clearly and slowly",
            commonErrors: ["Choosing fast talking — it is harder to understand."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Someone says to you: 'Nice to meet you.' What is a natural reply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nice to meet you too" },
              { id: "b", text: "Goodbye forever" },
              { id: "c", text: "What is your favourite colour?" },
              { id: "d", text: "I don't know" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reciprocal phrases", statement: "'Nice to meet you too' returns the same polite phrase." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — returning 'Nice to meet you too' keeps the exchange friendly.", working: "Nice to meet you too", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Nice to meet you too",
            commonErrors: ["Choosing an unrelated question as the reply."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Meeting a New Student",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: How old are you?\nB: I'm twelve.\nA: Where are you from?\nB: I'm from Egypt. And you?\nA: I'm from Canada.",
          },
          stem: "Read the exchange and write two things: B's age, and how many questions A asked.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) B's age", answer: 12 },
              { label: "(b) Questions A asked", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in exchanges", statement: "Ages and counts of questions are details to catch in a dialogue." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'I'm twelve.'", working: "12", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — A asks 'How old are you?' and 'Where are you from?' — two questions.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 12 (b) 2",
            commonErrors: ["Counting B's questions too — only A's two questions count."],
            examinerNote: "Accept 'twelve'.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a short introduction (three sentences) for yourself to say to a new classmate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction pattern", statement: "Hello + My name is... + I am from/age... + Nice to meet you." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — greeting and name included, e.g. 'Hello, my name is...'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — two personal details with correct 'I am/I have got' structures.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct capitals, full stops and a polite close.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hello, my name is Lee. I am ten years old. I am from Korea. Nice to meet you.'",
            commonErrors: ["Only one sentence — three are required.", "Word-order errors like 'I from Korea am'."],
            examinerNote: "Content must be true personal information.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am from Spain." },
              { id: "b", text: "I from Spain am." },
              { id: "c", text: "Am I from Spain." },
              { id: "d", text: "From Spain I am." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word order", statement: "'I am from + place' is the correct statement order." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am from Spain' has correct word order.", working: "I am from Spain.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I am from Spain.",
            commonErrors: ["Choosing (d) — that is a question, not a statement."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "First Meeting",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: Hello, my name is Sara. I am from France.\nB: Hi Sara, I'm Jack. Nice to meet you.",
          },
          stem: "Which phrase does Jack use to finish his introduction politely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good night" },
              { id: "b", text: "See you never" },
              { id: "c", text: "I am from France" },
              { id: "d", text: "Nice to meet you" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Closing phrase", statement: "'Nice to meet you' politely closes an introduction." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Jack's last words are 'Nice to meet you.'", working: "Nice to meet you", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nice to meet you",
            commonErrors: ["Choosing Sara's line — the question is about Jack."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Help a new student introduce themselves to your class.",
          parts: [
            { label: "a", prompt: "Write the greeting and name part of the introduction.", marks: 1 },
            { label: "b", prompt: "Add two personal details: age and country.", marks: 2 },
            { label: "c", prompt: "Write a polite closing phrase.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction pattern", statement: "Greeting + name + details + 'Nice to meet you' forms a complete introduction." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'Hello, my name is...' or 'Hi, I'm...'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct 'I am ... years old' and 'I am from ...' sentences.", marks: 2, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — polite close such as 'Nice to meet you.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Hello, my name is Kim. I am nine years old. I am from Korea. Nice to meet you.'",
            commonErrors: ["Missing the closing phrase.", "Details that are not sentences."],
            examinerNote: "All parts must be correct English.",
          },
        },
        {
          id: "mla1-u2-greetings-introductions-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Year 1 Class",
            author: "Written for Akademik Space",
            source: "Speaking practice context",
            text: "There are twenty-eight students in Year 1. Fourteen are girls and fourteen are boys. Each student gives a thirty-second introduction to the class.",
          },
          stem: "Read the text and write three numbers: the total students, the number of girls and the seconds each introduction lasts.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total students", answer: 28 },
              { label: "(b) Girls", answer: 14 },
              { label: "(c) Seconds per introduction", answer: 30, unit: "seconds" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text answer how-many and how-long questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'twenty-eight students in Year 1'.", working: "28", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Fourteen are girls'.", working: "14", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'thirty-second introduction'.", working: "30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 28 (b) 14 (c) 30",
            commonErrors: ["Writing 14 for total — that is only the girls (or boys)."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u2-simple-exchanges",
      title: "Asking and answering simple questions",
      skill: "Use question words and short exchanges to get information and keep a simple conversation going.",
      lesson: {
        sections: [
          {
            heading: "Question words to learn first",
            body: "The most useful English question words are **who** (person), **what** (thing), **where** (place), **when** (time), **why** (reason) and **how** (manner). Also learn **yes/no questions** with 'do', 'does', 'is' and 'are': 'Do you like cats?', 'Are you ten?'",
          },
          {
            heading: "Keeping the conversation going",
            body: "A good speaker does not only answer — they **ask back**. After answering 'I'm fine', you can ask 'How are you?' After 'My name is Ana', ask 'What's your name?' Simple replies like 'Really?', 'That's nice', 'Me too' keep a conversation friendly.",
          },
          {
            heading: "Pronunciation tips for beginners",
            body: "Focus on these sounds that are new for many learners: **th** in 'thank you' and 'three', the short **i** in 'is' and 'it', and the final **s** sounds. Practise by copying a speaker slowly, then repeat. Record yourself and compare — your ear improves with practice.",
          },
        ],
        keyFormulas: [
          { name: "Question words", statement: "who = person, what = thing, where = place, when = time, why = reason, how = manner" },
          { name: "Yes/No questions", statement: "Do/Does + subject + verb? / Is/Are + subject + ...?" },
        ],
        workedExample: {
          problem: "Make a question for this answer: 'I am from Japan.'",
          solution: "Use 'where': 'Where are you from?' — the answer gives a place.",
        },
      },
      questions: [
        {
          id: "mla1-u2-simple-exchanges-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question word asks about a place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Why" },
              { id: "b", text: "Who" },
              { id: "c", text: "When" },
              { id: "d", text: "Where" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question words", statement: "'Where' asks about place or location." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'where' = place; 'when' = time; 'why' = reason.", working: "where", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** Where",
            commonErrors: ["Confusing 'where' with 'when'."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the correct question for this answer: 'Yes, I like football.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Yes/no questions", statement: "Yes/no questions use 'Do you like...?' / 'Are you...?' with question word order." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — correct question using 'Do you like...?'", working: "Do you like football?", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct capital letter and question mark.", working: "Do you like football?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Do you like football?",
            commonErrors: ["Writing 'You like football?' or 'Do you likes football?'"],
            examinerNote: "Accept 'Do you like football?' only; verb must be base form 'like'.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Meeting a Pen Friend",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "Sara: Hi! My name is Sara. I am from Canada.\nJack: Hello Sara! Nice to meet you. I am Jack, from England.\nSara: Where do you live, Jack?\nJack: I live in London. And you?\nSara: I live in Toronto. Do you like sport?\nJack: Yes, I play tennis. What about you?",
          },
          stem: "This is a short dialogue between two new friends. Answer: Where does Jack live? What sport does Jack play? Write one question Sara could ask next.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following exchanges", statement: "Answers to who/where/what questions can be found turn by turn." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Jack says 'I live in London.'", working: "London", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'I play tennis.'", working: "tennis", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — a natural follow-up question, e.g. 'Do you like tennis too?' / 'What is your favourite sport?'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — the question has correct word order and a question mark.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "London; tennis; e.g. 'What is your favourite sport?'",
            commonErrors: ["Answering 'Canada' for where Jack lives — that is Sara's country."],
            examinerNote: "Follow-up question must fit the conversation topic.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are at a school welcome party. Write a short conversation script.",
          parts: [
            { label: "a", prompt: "Write a greeting and introduction between two students (4 lines).", marks: 3 },
            { label: "b", prompt: "Include at least two questions in your dialogue.", marks: 2 },
            { label: "c", prompt: "End the dialogue politely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue conventions", statement: "Named speakers, turns, greetings, questions and polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two named speakers take turns with a greeting and introduction.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct 'My name is...' / 'I'm...' structures.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — speaker labels and punctuation are correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two questions asked naturally in the exchange.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — questions have correct word order and question marks.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — polite ending such as 'Nice to meet you' / 'See you later'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — final line is punctuated and spelled correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A 4+ line dialogue with named speakers, greeting, two questions and polite close.",
            commonErrors: ["No speaker labels — written as one paragraph.", "Statements used where questions are needed."],
            examinerNote: "Dialogue must be a real exchange between two people.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question word asks about a time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where" },
              { id: "b", text: "What" },
              { id: "c", text: "When" },
              { id: "d", text: "Who" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question words", statement: "'When' asks about time; 'where' about place; 'who' about a person." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'when' = time.", working: "When", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(d)** When",
            commonErrors: ["Confusing 'when' with 'where'."],
            examinerNote: "C1 for (d).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the question word 'how' ask about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A thing" },
              { id: "b", text: "A person" },
              { id: "c", text: "A place" },
              { id: "d", text: "The way something is done" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question words", statement: "'How' asks about manner — the way something happens: 'How do you go to school?'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'how' asks about the way/manner.", working: "the way something is done", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** The way something is done",
            commonErrors: ["Confusing 'how' with 'what'."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write the number of question words: who, what, where, when, why, how.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of question words", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question word set", statement: "The six core question words are who, what, where, when, why, how." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — count the six question words.", working: "6", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 6",
            commonErrors: ["Counting only the wh- words and forgetting 'how'."],
            examinerNote: "Answer is 6.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one yes/no question about football.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Yes/no questions", statement: "Yes/no questions use Do/Does + subject + base verb and end with a question mark." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a correct question such as 'Do you like football?'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — capital letter and question mark.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Do you like football?'",
            commonErrors: ["'You like football?' — missing 'Do'."],
            examinerNote: "Any correct yes/no question about football accepted.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question word asks about a person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where" },
              { id: "b", text: "What" },
              { id: "c", text: "Who" },
              { id: "d", text: "When" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question words", statement: "'Who' asks about a person." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'who' = person.", working: "Who", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Who",
            commonErrors: ["Choosing 'what' — that asks about things."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Someone answers 'I'm fine, thanks.' What can you naturally ask back?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How are you?" },
              { id: "b", text: "Where do you live?" },
              { id: "c", text: "How old are you?" },
              { id: "d", text: "What is your name?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Keeping conversation going", statement: "'How are you?' returns the same question and keeps the exchange friendly." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — asking back 'How are you?' continues the exchange.", working: "How are you?", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** How are you?",
            commonErrors: ["Choosing a question that does not fit the topic."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "About My Family",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: How old are you?\nB: I'm ten.\nA: And your sister?\nB: She's eight.",
          },
          stem: "Read the exchange and write two numbers: B's age, and B's sister's age.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) B's age", answer: 10 },
              { label: "(b) Sister's age", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in exchanges", statement: "Ages in a dialogue are key details to catch." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'I'm ten.'", working: "10", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'She's eight.'", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 10 (b) 8",
            commonErrors: ["Swapping the two ages."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a short exchange (four lines) between two students asking about hobbies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue conventions", statement: "Named speakers, turns, questions and answers about hobbies." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — two named speakers take turns about hobbies.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — at least one correct question with a question mark.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — answers use correct present simple ('I like...', 'I play...').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. A: 'Do you like sport?' B: 'Yes, I play football.' A: 'What about you?' B: 'I like swimming.'",
            commonErrors: ["No speaker labels — written as one paragraph."],
            examinerNote: "Must be a real two-way exchange about hobbies.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a correct question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You where live?" },
              { id: "b", text: "Where do you live?" },
              { id: "c", text: "Where you live?" },
              { id: "d", text: "Where live you?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question word order", statement: "Wh- questions use question word + do/does + subject + verb: 'Where do you live?'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Where do you live?' has correct question word order.", working: "Where do you live?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Where do you live?",
            commonErrors: ["Choosing a statement order with a question mark."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Favourite Subjects",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: What's your favourite subject?\nB: Science. I like experiments.\nA: Really? I prefer art.",
          },
          stem: "What is B's favourite subject?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sport" },
              { id: "b", text: "English" },
              { id: "c", text: "Science" },
              { id: "d", text: "Art" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following exchanges", statement: "Answers to 'What's your favourite...?' come right after the question." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — B answers 'Science.'", working: "Science", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Science",
            commonErrors: ["Choosing 'art' — that is A's preference."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write questions to interview a new classmate.",
          parts: [
            { label: "a", prompt: "Write three questions using question words (who, what, where, when, why or how).", marks: 2 },
            { label: "b", prompt: "Write two yes/no questions using 'Do you...?' or 'Are you...?'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question forms", statement: "Wh- questions: question word + do/does/is/are + subject; yes/no: Do/Does/Is/Are + subject." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three appropriate wh- questions, e.g. 'Where do you live?'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct word order and question marks on all three.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two appropriate yes/no questions, e.g. 'Do you like sport?'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct Do/Does/Is/Are forms and question marks.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three correct wh- questions + two correct yes/no questions.",
            commonErrors: ["Statement word order in questions.", "Using 'does' with 'you' — 'Do you...?'"],
            examinerNote: "Questions must suit interviewing a classmate.",
          },
        },
        {
          id: "mla1-u2-simple-exchanges-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Class Survey",
            author: "Written for Akademik Space",
            source: "Speaking practice script",
            text: "A: How many brothers have you got?\nB: Two brothers and one sister.\nA: Do you like sport?\nB: Yes, I play football and basketball.",
          },
          stem: "Read the exchange and write three numbers: brothers, sisters and sports B plays.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Brothers", answer: 2 },
              { label: "(b) Sisters", answer: 1 },
              { label: "(c) Sports played", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in exchanges", statement: "Quantities in an exchange answer how-many questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Two brothers'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'one sister'.", working: "1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'football and basketball' = two sports.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 1 (c) 2",
            commonErrors: ["Counting 'sport' itself as a sport — count the named sports."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
  ],
};

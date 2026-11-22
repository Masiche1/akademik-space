import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mla1-u1-lesson-1-3",
  code: "1-3",
  title: "Listening and Reading Longer Texts",
  goal: "I CAN understand a short dialogue or story heard or read in English, and identify the main idea and supporting details.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Dialogue", definition: "A conversation between two or more people in a story or play." },
    { term: "Main idea", definition: "What a text is mostly about — the most important message." },
    { term: "Detail", definition: "A smaller fact or example that supports the main idea." },
    { term: "Speaker", definition: "The person who says a line in a dialogue or talk." },
    { term: "Comprehension question", definition: "A question that checks whether you understood a text." },
  ],
  concepts: [
    {
      id: "mla1-u1-dialogue-listening",
      title: "Following a short dialogue",
      skill: "Understand who is speaking, what each person says and what the conversation is about.",
      lesson: {
        sections: [
          {
            heading: "Listening to conversations",
            body: "In a dialogue each person has a **turn** to speak. When you listen, first find out **who** is speaking and **where** they are (school, shop, home). Then listen for what each person **wants** — in most simple conversations someone asks for something or makes a plan.",
          },
          {
            heading: "Reading a dialogue on the page",
            body: "In writing, dialogues are shown with **names and punctuation**: **Mia:** 'Hello, how are you?' **Tom:** 'I'm fine, thanks.' The name before the colon tells you who is speaking. Read each turn slowly and ask yourself: what does this person want?",
          },
          {
            heading: "What is the conversation about?",
            body: "The **main idea** of a dialogue is usually one simple topic: shopping, homework, a party invitation, or asking for help. Once you know the topic, the details are easier to catch. Listen for key words like 'buy', 'party', 'homework' or 'help'.",
          },
        ],
        workedExample: {
          problem: "Dialogue: A: 'Can I help you?' B: 'Yes, I want to buy two tickets, please.' What does B want?",
          solution: "Person B wants to buy two tickets — they are a customer in a ticket office or similar place.",
        },
      },
      questions: [
        {
          id: "mla1-u1-dialogue-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a written dialogue, what tells you who is speaking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title at the top" },
              { id: "b", text: "The punctuation marks" },
              { id: "c", text: "The page number" },
              { id: "d", text: "The name before the speech" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue format", statement: "Each speaker's name is written before their words, often followed by a colon." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the speaker label/name identifies who is talking.", working: "name before the speech", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The name before the speech",
            commonErrors: ["Choosing punctuation — punctuation marks the speech, not the speaker."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "At the Shop",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Assistant: Hello! Can I help you?\nAnna: Yes, please. I want to buy a birthday card.\nAssistant: Of course. Here are the cards.\nAnna: This one is nice. How much is it?\nAssistant: It is five euros.\nAnna: Here you are.",
          },
          stem: "Read the dialogue. Answer: Who is Anna? What does she want to buy? How much does it cost?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue comprehension", statement: "Each turn answers who/what/where questions about the exchange." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Anna is a customer buying something.", working: "a customer / a shopper", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — she wants to buy a birthday card.", working: "a birthday card", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'It is five euros.'", working: "five euros", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Anna is a customer; she buys a birthday card; it costs five euros.",
            commonErrors: ["Saying the assistant buys the card — Anna is the buyer."],
            examinerNote: "Accept 'shopper' or 'customer' for Anna.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Planning a Party",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Ben: Hi Leo. Are you free on Saturday?\nLeo: Yes, I think so. Why?\nBen: I'm having a party at my house. Can you come?\nLeo: Oh, great! What time does it start?\nBen: At three o'clock. Please bring some music.\nLeo: No problem. See you on Saturday!",
          },
          stem: "What is the main idea of this dialogue? List two details that support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea and details", statement: "Main idea = what the conversation is about; details = the facts that support it." },
            ],
            steps: [
              { reasoning: "Criterion A/B: Comprehension — the dialogue is about a party invitation.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — detail: the party is at Ben's house on Saturday.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — detail: it starts at three o'clock and Leo should bring music.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — answer is expressed in a complete, clear sentence.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Ben invites Leo to his party on Saturday at three o'clock; Leo should bring music.",
            commonErrors: ["Answering only 'party' with no supporting details.", "Saying the party is at Leo's house — it is Ben's."],
            examinerNote: "Two correct details required for the full 4 marks.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Missing the Bus",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Mum: Ben, have you got your bus card?\nBen: No, I haven't. It is in my bag.\nMum: Well, you need it for the bus. Here, take some money just in case.\nBen: Thanks, Mum. The bus is at eight thirty, isn't it?\nMum: That's right. Don't be late!\nBen: I won't. Bye!",
          },
          stem: "Read the dialogue and complete the tasks.",
          parts: [
            { label: "a", prompt: "Where is Ben's bus card?", marks: 1 },
            { label: "b", prompt: "What does Mum give Ben, and why?", marks: 2 },
            { label: "c", prompt: "What time does the bus come?", marks: 1 },
            { label: "d", prompt: "Write a short dialogue (4-6 lines) between two friends planning to meet after school. Use at least three questions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue writing", statement: "Speaker names, punctuation and question marks organise a written dialogue." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'It is in my bag.'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — Mum gives him money ('take some money').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — because he needs the bus card / in case he needs it.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'The bus is at eight thirty.'", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — dialogue has two named speakers taking turns.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — at least three question sentences with correct question marks.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate simple present tense and punctuation throughout.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — the plan (meeting after school) is communicated clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) in his bag (b) money, in case he needs it (c) eight thirty (d) a correct 4-6 line dialogue with 3+ questions.",
            commonErrors: ["Writing the dialogue as a paragraph without speaker labels.", "Fewer than three questions in part (d)."],
            examinerNote: "(d) must be a real exchange — both speakers contribute.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a dialogue, what is a 'turn'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A page in the book" },
              { id: "b", text: "The end of the conversation" },
              { id: "c", text: "A kind of question" },
              { id: "d", text: "Each person's chance to speak" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "In a dialogue each speaker takes a turn; turn-taking is sharing the speaking time." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — a turn is one person's speaking time.", working: "each person's chance to speak", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Each person's chance to speak",
            commonErrors: ["Confusing a turn with a question."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read this dialogue: A: 'Can I help you?' B: 'Yes, I want a sandwich, please.' Where are the speakers most probably?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At a café or food shop" },
              { id: "b", text: "At a swimming pool" },
              { id: "c", text: "At a library" },
              { id: "d", text: "On a bus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Guessing the setting", statement: "Key words like 'sandwich' and 'Can I help you?' suggest a food place." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'sandwich' + 'Can I help you?' = food shop or café.", working: "café or food shop", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** At a café or food shop",
            commonErrors: ["Choosing the library — no books are mentioned."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Buying Tickets",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: How many tickets do you want?\nB: Two, please.\nA: That is six euros.\nB: Here you are.",
          },
          stem: "Read the dialogue and write two numbers: how many tickets, and how much they cost.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of tickets", answer: 2 },
              { label: "(b) Cost (euros)", answer: 6, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in dialogues", statement: "Quantities and prices in dialogues answer how-many and how-much questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Two, please.' answers 'How many tickets?'", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'That is six euros.'", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 6",
            commonErrors: ["Writing the answer to 'how many' as a word — digits expected."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two sentences a shop assistant might say to a customer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Service language", statement: "Shop assistants use polite offers and questions: 'Can I help you?', 'That is five euros.'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a natural assistant line such as 'Can I help you?' or 'Anything else?'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — a second correct line with a capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Can I help you?' / 'That is five euros.'",
            commonErrors: ["Writing a customer line instead of an assistant line."],
            examinerNote: "Any two correct assistant sentences accepted.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In this dialogue — Mia: 'Hello Tom.' Tom: 'Hi Mia, how are you?' — who speaks first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tom" },
              { id: "b", text: "Both at the same time" },
              { id: "c", text: "Nobody" },
              { id: "d", text: "Mia" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue format", statement: "The speaker label before each line shows who speaks and in what order." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the first label is 'Mia'.", working: "Mia", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Mia",
            commonErrors: ["Reading the dialogue backwards."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In most simple everyday dialogues, what does one speaker usually want?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To sleep" },
              { id: "b", text: "To sing a song" },
              { id: "c", text: "To buy something or make a plan" },
              { id: "d", text: "To tell a long story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Purpose of dialogues", statement: "Simple conversations usually have a purpose: shopping, planning, asking for help." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — identify what each speaker wants.", working: "buy something or make a plan", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To buy something or make a plan",
            commonErrors: ["Thinking dialogues are just for fun — they have a purpose."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Meeting Friends",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: What time is the football match?\nB: At three o'clock.\nA: Where is it?\nB: At the sports field. Bring two friends with you.",
          },
          stem: "Read the dialogue and write two numbers: the time of the match, and how many friends to bring.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Match time (hour)", answer: 3 },
              { label: "(b) Friends to bring", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in dialogues", statement: "Times and quantities in dialogues are key details." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'At three o'clock.'", working: "3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Bring two friends with you.'", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 2",
            commonErrors: ["Writing the place instead of the time for (a)."],
            examinerNote: "Accept 'three' as a word.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Feeling Ill",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Mum: You look ill, Ben.\nBen: I have got a headache.\nMum: Have you got a temperature?\nBen: No, I think I am just tired.",
          },
          stem: "Answer two questions about the dialogue: What is wrong with Ben? Does Ben have a temperature?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue comprehension", statement: "Answers come turn by turn; 'have got' expresses symptoms." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Ben has got a headache.", working: "a headache", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'No' to the temperature question; he thinks he is just tired.", working: "No — just tired", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — answers are clear, complete sentences.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Ben has got a headache; no, he does not have a temperature — he is just tired.",
            commonErrors: ["Saying Ben has a temperature — he answers 'No'."],
            examinerNote: "Both answers required.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Speaker A says: 'I'm having a party on Saturday. Can you come?' What does A want?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To invite someone to a party" },
              { id: "b", text: "To buy a ticket" },
              { id: "c", text: "To say goodbye" },
              { id: "d", text: "To ask the time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speaker's purpose", statement: "'Can you come?' after an invitation shows the speaker wants an answer about attending." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'I'm having a party... Can you come?' is an invitation.", working: "invite to a party", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To invite someone to a party",
            commonErrors: ["Choosing (d) — nothing here is a farewell."],
            examinerNote: "A1 for (a).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "After the Film",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: Did you enjoy the film?\nB: Yes, but it was too long.\nA: I liked the ending.",
          },
          stem: "How did B feel about the film?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loved every minute of it" },
              { id: "b", text: "Enjoyed it but thought it was too long" },
              { id: "c", text: "Did not see it" },
              { id: "d", text: "Hated it completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed feelings", statement: "'Yes, but...' shows a positive answer with a complaint." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Yes, but it was too long' = enjoyed it, but it was too long.", working: "enjoyed but too long", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Enjoyed it but thought it was too long",
            commonErrors: ["Ignoring 'but' and choosing the fully positive option."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Planning Sunday",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Sara: Are you free on Sunday?\nTom: Yes. What do you want to do?\nSara: How about the beach?\nTom: Great idea! What time?\nSara: At ten o'clock. Bring your towel.",
          },
          stem: "Answer the questions about the dialogue.",
          parts: [
            { label: "a", prompt: "On which day is the plan?", marks: 1 },
            { label: "b", prompt: "Where do they plan to go?", marks: 1 },
            { label: "c", prompt: "What time do they meet?", marks: 1 },
            { label: "d", prompt: "What should Tom bring?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue details", statement: "Each detail (day, place, time, item) is stated in one turn of the dialogue." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Are you free on Sunday?'", working: "Sunday", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'How about the beach?'", working: "the beach", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'At ten o'clock.'", working: "ten o'clock", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — 'Bring your towel.'", working: "a towel", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Sunday (b) the beach (c) ten o'clock (d) his towel",
            commonErrors: ["Answering 'the sea' — the text says 'the beach'."],
            examinerNote: "All four details must be correct.",
          },
        },
        {
          id: "mla1-u1-dialogue-listening-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Pizza Order",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: How many pizzas do you want?\nB: Three pizzas, please.\nA: Large or small?\nB: Two large and one small.\nA: That is twenty-one euros.",
          },
          stem: "Write three numbers from the dialogue: the total number of pizzas, the number of large pizzas and the total cost.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total pizzas", answer: 3 },
              { label: "(b) Large pizzas", answer: 2 },
              { label: "(c) Total cost (euros)", answer: 21, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in dialogues", statement: "Quantities and prices in a dialogue give exact numbers." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Three pizzas, please.'", working: "3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Two large and one small.'", working: "2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'That is twenty-one euros.'", working: "21", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 2 (c) 21",
            commonErrors: ["Writing 'one' for large — that is the small pizza."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u1-main-idea-details",
      title: "Main idea and details in short texts",
      skill: "Tell the difference between the main idea of a text and its supporting details.",
      lesson: {
        sections: [
          {
            heading: "Big idea versus small facts",
            body: "The **main idea** is what the whole text is about — like the title of a book. The **details** are the small facts that prove or explain it. In 'My cat is funny. It sleeps in boxes and steals socks', the main idea is that the cat is funny; 'sleeps in boxes' and 'steals socks' are details.",
          },
          {
            heading: "How to find the main idea",
            body: "Ask: 'If I tell a friend what this text is about in five words, what do I say?' Read the **first and last sentences** carefully — they often carry the main idea. Then check: do most sentences support that idea? If yes, you have found it.",
          },
          {
            heading: "Details are your evidence",
            body: "When you answer a question about a text, your answer should use the text's own details. If a question asks 'Why is the park popular?', look for sentences with numbers, names or examples — 'because it has a lake and a playground'. Evidence from the text makes your answer correct.",
          },
        ],
        keyFormulas: [
          { name: "Main idea test", statement: "One sentence for the whole text; most other sentences support it" },
        ],
        workedExample: {
          problem: "Text: 'Our school has a big garden. Students grow tomatoes and flowers there. The garden makes our school beautiful.' What is the main idea?",
          solution: "The school garden makes the school beautiful — the details (big garden, tomatoes, flowers) support this idea.",
        },
      },
      questions: [
        {
          id: "mla1-u1-main-idea-details-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'detail' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A small fact that supports the main idea" },
              { id: "b", text: "The main idea of the whole text" },
              { id: "c", text: "The title of the book" },
              { id: "d", text: "A question about the text" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Detail", statement: "A specific fact or example that supports the main idea." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — a detail supports the main idea; it is not the main idea itself.", working: "detail = small fact", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A small fact that supports the main idea",
            commonErrors: ["Confusing detail with main idea."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Our New Playground",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school has a new playground. It opened last week. There is a big slide, two swings and a sandbox. All the children love it. At break time it is always full of happy students.",
          },
          stem: "What is the main idea of this text? Give one detail that supports it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea extraction", statement: "The main idea summarises the whole text; details are the supporting facts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: the school has a new playground that children love.", working: "new playground / children love it", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — a supporting detail, e.g. 'big slide, swings, sandbox' or 'always full at break'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — idea and detail are expressed clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The school has a new playground children love; detail e.g. it has a slide, swings and sandbox.",
            commonErrors: ["Giving only a detail ('there is a slide') as the main idea."],
            examinerNote: "Main idea must cover the whole text.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Markets",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In my town there are two markets. The old market is small and quiet. It sells fruit and vegetables. The new market is big and busy. It sells clothes, toys and food from many countries. I like the new market because it has more things to buy.",
          },
          stem: "Compare the two markets. Write one sentence about the old market and one about the new market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparison from text", statement: "Comparing texts means stating how two things are different or similar using text details." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — old market: small, quiet, sells fruit and vegetables.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — new market: big, busy, sells clothes, toys and food from many countries.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — first sentence is grammatically correct.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — second sentence is grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Old market: small and quiet, sells fruit and vegetables. New market: big and busy, sells many kinds of goods.",
            commonErrors: ["Mixing up which market is which.", "Copying the whole text instead of comparing."],
            examinerNote: "Sentences must be the student's own but faithful to the text.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Recycling at School",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school started a recycling project in January. Every class has a blue box for paper and a green box for plastic. Once a week, students take the boxes to the big recycling point behind the gym. In six months, our school recycled 200 kilograms of paper and 80 kilograms of plastic. The head teacher says the project is a great success.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main idea of the text? Write one sentence.", marks: 2 },
            { label: "b", prompt: "Name the two colours of the recycling boxes and what each one is for.", marks: 2 },
            { label: "c", prompt: "How much paper did the school recycle?", marks: 1 },
            { label: "d", prompt: "Write two sentences telling a friend why recycling at school is important, using information from the text.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Text-based writing", statement: "Ideas for writing tasks come from text details, expressed in the student's own correct English." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — main idea: the school runs a successful recycling project.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion D: Writing — expressed in one complete sentence.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — blue box = paper, green box = plastic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both colours and materials correct.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 200 kilograms.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — two sentences giving reasons linked to the text.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — accurate simple present/past tense and vocabulary.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — punctuation and spelling mostly correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) The school has a successful recycling project. (b) blue = paper, green = plastic (c) 200 kilograms (d) two correct, text-linked sentences.",
            commonErrors: ["Swapping blue and green.", "Writing about recycling in general with no link to the text."],
            examinerNote: "(d) must reference the text (boxes, weights, success) to gain full marks.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main idea of a text is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A small fact in the middle" },
              { id: "b", text: "A question at the end" },
              { id: "c", text: "What the whole text is about" },
              { id: "d", text: "The title of the book" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "The main idea is what the whole text is mostly about — the most important message." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea = what the whole text is about.", working: "what the whole text is about", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** What the whole text is about",
            commonErrors: ["Confusing main idea with a detail."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read: 'I have got a dog. It is called Rex. Rex is very friendly.' Which sentence is a detail, not the main idea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is called Rex." },
              { id: "b", text: "Rex is very friendly." },
              { id: "c", text: "All of them are details" },
              { id: "d", text: "I have got a dog." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea vs detail", statement: "The main idea is the big point ('I have got a dog'); 'called Rex' is a supporting detail." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'It is called Rex' supports the main idea; it is a detail.", working: "It is called Rex.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is called Rex.",
            commonErrors: ["Choosing (a) — that is the main idea itself."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "My Town",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "My town has two parks and three schools. There is also a small hospital and a big library.",
          },
          stem: "Read the text and write two numbers: how many parks, and how many schools?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Parks", answer: 2 },
              { label: "(b) Schools", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in texts", statement: "Numbers pair with the noun that follows them." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two parks'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'three schools'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 3",
            commonErrors: ["Swapping parks and schools."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q8",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Our School Garden",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school garden has tomatoes and flowers. Students water the plants every day. The garden is very beautiful.",
          },
          stem: "Write the main idea of this text in one sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea extraction", statement: "The main idea covers the whole text, not just one detail." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: the school garden is beautiful/good (tomatoes, flowers, daily watering support it).", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — expressed in one complete sentence with a full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Our school garden is beautiful and well looked after.'",
            commonErrors: ["Giving only a detail like 'students water the plants'."],
            examinerNote: "Main idea must cover the whole text.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the sentence 'The park is popular because it has a lake and swings', what are 'a lake and swings'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main idea" },
              { id: "b", text: "Details that support the idea" },
              { id: "c", text: "Questions" },
              { id: "d", text: "The title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Details as evidence", statement: "Details are the facts that prove or explain the main idea." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'a lake and swings' are the reasons/details, not the main idea.", working: "details", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Details that support the idea",
            commonErrors: ["Choosing 'main idea' — the main idea is 'the park is popular'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question best helps you find the main idea of a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How many pages does it have?" },
              { id: "b", text: "What is this text mostly about?" },
              { id: "c", text: "Who wrote the book?" },
              { id: "d", text: "What colour is the cover?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea strategy", statement: "Asking 'what is this mostly about?' summarises the whole text in a few words." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'mostly about' asks for the whole-text idea.", working: "what is this text mostly about?", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** What is this text mostly about?",
            commonErrors: ["Choosing questions about surface features, not meaning."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Sports Day Results",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In the race, Kim came first, Ben came second and Ana came third. The race was one hundred metres long.",
          },
          stem: "Read the text and write two numbers/facts: the length of the race, and Ben's position.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Race length (metres)", answer: 100, unit: "metres" },
              { label: "(b) Ben's position", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Details in results", statement: "Results texts give positions and measurements as key details." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'one hundred metres long'.", working: "100", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Ben came second.'", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 100 (b) 2",
            commonErrors: ["Writing 1 for Ben — that is Kim."],
            examinerNote: "Accept 'second' written as a word? Numeric answer required: 2.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Rainy Sunday",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "It rained all day on Sunday. We could not play football in the park. Instead we stayed at home and played board games. It was still a fun day.",
          },
          stem: "Answer two questions about the text: What is the main idea? Give two details that support it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea and details", statement: "The main idea is the big point; details are the supporting facts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main idea: although it rained, Sunday was still fun.", working: "still a fun day", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — detail: they could not play football because of the rain.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — detail: they played board games at home instead.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It rained but Sunday was still fun; details: no football, played board games at home.",
            commonErrors: ["Main idea 'it rained' — that is only the setting, not the message."],
            examinerNote: "Details must come from the text.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A text says: 'Cats sleep a lot. They sleep about sixteen hours a day.' What is the main idea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cats sleep a lot" },
              { id: "b", text: "Sleep is always good" },
              { id: "c", text: "Sixteen is a number" },
              { id: "d", text: "Cats are animals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Main idea in short texts", statement: "The main idea covers all sentences; 'sixteen hours' is a supporting detail." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — both sentences support 'cats sleep a lot'.", working: "cats sleep a lot", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cats sleep a lot",
            commonErrors: ["Choosing a detail or a too-general option."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "From Seeds to Flowers",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "We planted seeds in April. We watered them every day. In June we had beautiful flowers.",
          },
          stem: "What happened between April and June?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It snowed every day" },
              { id: "b", text: "The seeds grew into flowers" },
              { id: "c", text: "We picked vegetables" },
              { id: "d", text: "The seeds disappeared" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence of events", statement: "Events connect across sentences: seeds planted -> watered -> flowers." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — planted seeds in April, flowers in June: the seeds grew.", working: "seeds grew into flowers", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The seeds grew into flowers",
            commonErrors: ["Choosing an event not in the text."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Seasons",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In summer it is hot and sunny. We swim in the sea. In winter it is cold and rainy. We stay at home and read books.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main idea? Write one sentence.", marks: 1 },
            { label: "b", prompt: "Write one detail about summer.", marks: 1 },
            { label: "c", prompt: "Write one detail about winter.", marks: 1 },
            { label: "d", prompt: "Write one sentence comparing summer and winter.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing details", statement: "The text compares two seasons; details for each side come straight from the text." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — main idea: summer and winter are different (activities and weather differ).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — summer detail: hot and sunny; swim in the sea.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — winter detail: cold and rainy; stay at home and read.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — comparison sentence such as 'Summer is hot and we swim, but winter is cold and we stay at home.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) summer and winter are different (b) hot/sunny, swim in the sea (c) cold/rainy, read at home (d) a correct comparison sentence.",
            commonErrors: ["Mixing up which detail belongs to which season."],
            examinerNote: "(d) must link both seasons in one sentence.",
          },
        },
        {
          id: "mla1-u1-main-idea-details-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Class Pet Survey",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "We asked twenty students about pets. Eight students have got a dog, five have got a cat and three have got a fish. The rest have no pet.",
          },
          stem: "Write three numbers from the text: how many students were asked, how many have got a cat, and how many have no pet.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Students asked", answer: 20 },
              { label: "(b) Students with a cat", answer: 5 },
              { label: "(c) Students with no pet", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "'The rest' = total minus those already counted: 20 - (8 + 5 + 3)." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'We asked twenty students.'", working: "20", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'five have got a cat'.", working: "5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — with pets: 8 + 5 + 3 = 16, so the rest = 20 - 16.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 20 (b) 5 (c) 4",
            commonErrors: ["Writing 'three' for (c) — that is the fish count.", "Forgetting to subtract all pet owners."],
            examinerNote: "(c) requires 20 - 16 = 4.",
          },
        },
      ],
    },
  ],
};

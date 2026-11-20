import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mla1-u3-lesson-3-3",
  code: "3-3",
  title: "Languages and Cultures Around Us",
  goal: "I CAN recognise greetings in other languages, respect cultural differences, and explain simple ways to communicate across cultures.",
  standards: [
    "MYP Language Acquisition",
    "Intercultural understanding",
    "Criterion C: Speaking",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Intercultural", definition: "Between different cultures — relating to more than one culture." },
    { term: "Culture", definition: "The customs, food, music, festivals and ways of life of a group of people." },
    { term: "Respect", definition: "To treat people and their customs as important and valuable." },
    { term: "Mother tongue", definition: "The first language a person learns as a baby." },
    { term: "Global", definition: "Relating to the whole world." },
  ],
  concepts: [
    {
      id: "mla1-u3-greetings-cultures",
      title: "Greetings around the world",
      skill: "Recognise that greetings differ across cultures and use a few simple greetings from other languages.",
      lesson: {
        sections: [
          {
            heading: "Same purpose, different words",
            body: "Every language has greetings, but the words are different. In Spanish people say **'Hola'**, in French **'Bonjour'**, in German **'Guten Tag'**, in Japanese **'Konnichiwa'**, in Mandarin Chinese **'Nǐ hǎo'**. All mean 'hello'. When you meet someone from another country, using their greeting — even just 'Hola!' — shows respect and friendliness.",
          },
          {
            heading: "Greetings carry culture",
            body: "The way people greet also differs: in some cultures people shake hands, in others they bow, and in some they kiss on the cheek. Some greetings depend on the time of day ('Good morning' vs 'Good evening'). These differences are not wrong — they are just **different**. Curiosity and respect help you learn them.",
          },
          {
            heading: "Why this matters for language learners",
            body: "As a language learner you are joining a new language community — and its culture. Understanding greetings is your first step into intercultural communication: noticing differences, asking politely about them, and never laughing at someone's custom because it is different from yours.",
          },
        ],
        keyFormulas: [
          { name: "Greeting map", statement: "English Hello | Spanish Hola | French Bonjour | German Guten Tag | Japanese Konnichiwa" },
        ],
        workedExample: {
          problem: "A new classmate says 'Bonjour' to you. What does it mean and how could you reply?",
          solution: "'Bonjour' is French for 'hello/good day'. You can reply 'Bonjour!' back, or say 'Hello!' — both are friendly.",
        },
      },
      questions: [
        {
          id: "mla1-u3-greetings-cultures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'Bonjour' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Goodbye" },
              { id: "b", text: "Hello / good day" },
              { id: "c", text: "Thank you" },
              { id: "d", text: "Good night" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "French greetings", statement: "'Bonjour' is the standard French daytime greeting meaning hello/good day." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — recognise 'Bonjour' as a greeting meaning hello.", working: "hello / good day", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Hello / good day",
            commonErrors: ["Confusing 'Bonjour' with a farewell."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the greeting 'hello' in two languages other than English.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Greetings across languages", statement: "Hola (Spanish), Bonjour (French), Konnichiwa (Japanese), Nǐ hǎo (Mandarin)." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — one correct non-English greeting with accurate spelling.", working: "Hola / Bonjour / Konnichiwa / Nǐ hǎo", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — a second correct greeting.", working: "...", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. Hola (Spanish), Bonjour (French)",
            commonErrors: ["Inventing words that are not real greetings."],
            examinerNote: "Any two real greetings accepted.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why it is respectful to learn a few greetings in another person's language, even if you cannot speak it well.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural respect", statement: "Using someone's greeting acknowledges their language and culture as valuable." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — greeting in someone's language shows interest in them and their culture.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — it makes the other person feel welcome and valued.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — clear, organised explanation in simple English.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — recognises that language and culture are connected.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It shows respect and interest in the person's language and culture, and makes them feel welcome.",
            commonErrors: ["Saying only 'it is polite' without explaining why."],
            examinerNote: "Must connect greeting to respect/feeling welcome.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class is preparing a 'Welcome to our school' poster for new students from many countries.",
          parts: [
            { label: "a", prompt: "Write 'Hello' in three different languages.", marks: 2 },
            { label: "b", prompt: "Write one sentence explaining why a school should welcome students from different cultures.", marks: 2 },
            { label: "c", prompt: "Write one rule for friendly behaviour towards a classmate who speaks a different language.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural welcome", statement: "Welcoming diversity means acknowledging languages and treating everyone with respect." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three correct greetings in different languages.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — spellings are accurate.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — reason mentions learning, friendship or respect.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — one complete, correct sentence.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — a sensible rule, e.g. 'Be patient and kind when someone is learning English.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — rule shows intercultural awareness, not just politeness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) three correct greetings (b) one correct sentence on welcoming diversity (c) one sensible intercultural rule.",
            commonErrors: ["Greetings that are not real words.", "Rule that is only 'be nice' with no intercultural link."],
            examinerNote: "(c) must relate to language/culture difference.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'Hola' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Goodbye" },
              { id: "b", text: "Hello (Spanish)" },
              { id: "c", text: "Thank you" },
              { id: "d", text: "Good night" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Spanish greetings", statement: "'Hola' is the standard Spanish greeting meaning hello." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Hola' = hello in Spanish.", working: "hello", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Hello (Spanish)",
            commonErrors: ["Confusing 'Hola' with a farewell."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a Japanese greeting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bonjour" },
              { id: "b", text: "Konnichiwa" },
              { id: "c", text: "Guten Tag" },
              { id: "d", text: "Hola" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Greetings map", statement: "Konnichiwa = Japanese; Bonjour = French; Guten Tag = German; Hola = Spanish." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Konnichiwa' is the Japanese greeting.", working: "Konnichiwa", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Konnichiwa",
            commonErrors: ["Mixing up languages in the greeting map."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many greetings are on our poster: Hello, Hola, Bonjour, Guten Tag, Konnichiwa? Write the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of greetings", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting greetings", statement: "Count each greeting in the list." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — five greetings are listed.", working: "5", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 5",
            commonErrors: ["Missing one greeting in the count."],
            examinerNote: "Answer is 5.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the word 'hello' in two languages other than English.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Greetings across languages", statement: "Hola (Spanish), Bonjour (French), Konnichiwa (Japanese), Nǐ hǎo (Mandarin)." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — one correct non-English greeting with accurate spelling.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — a second correct greeting.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. Hola (Spanish), Bonjour (French)",
            commonErrors: ["Inventing words that are not real greetings."],
            examinerNote: "Any two real greetings accepted.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it respectful to learn a few greetings in another person's language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows interest in them and their culture" },
              { id: "b", text: "It makes you speak faster" },
              { id: "c", text: "It is a rule in every country" },
              { id: "d", text: "It is only for teachers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural respect", statement: "Using someone's greeting acknowledges their language and culture as valuable." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a greeting shows interest and respect.", working: "shows interest in them and their culture", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** It shows interest in them and their culture",
            commonErrors: ["Thinking it is just a rule, not a sign of respect."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A classmate says 'Guten Tag' to you. What language is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spanish" },
              { id: "b", text: "French" },
              { id: "c", text: "German" },
              { id: "d", text: "Japanese" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Greeting map", statement: "Guten Tag = German greeting." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Guten Tag' is German.", working: "German", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** German",
            commonErrors: ["Confusing it with 'Bonjour' (French)."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "International Day",
            author: "Written for Akademik Space",
            source: "Intercultural context",
            text: "Our class has twenty-four students from eight different countries. Each country has one greeting on our poster.",
          },
          stem: "Read the text and write two numbers: how many students, and how many countries?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Students", answer: 24 },
              { label: "(b) Countries", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in intercultural texts", statement: "Quantities pair with their nouns." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'twenty-four students'.", working: "24", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'eight different countries'.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 24 (b) 8",
            commonErrors: ["Swapping students and countries."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why greetings are different in different languages, even though they all mean 'hello'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Language and culture", statement: "Languages developed separately, so the same purpose has different words." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — greetings differ because languages and cultures are different.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — recognises that language and culture are connected.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — clear, organised explanation in simple English.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Languages and cultures developed separately, so 'hello' has different words in different languages.",
            commonErrors: ["Saying 'one is wrong' — differences are normal."],
            examinerNote: "Must link words to culture, not just say 'they are different'.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is NOT a greeting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bonjour" },
              { id: "b", text: "Hola" },
              { id: "c", text: "Thank you" },
              { id: "d", text: "Konnichiwa" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Greeting recognition", statement: "Greetings open a meeting; 'thank you' is a different polite phrase." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Thank you' is not a greeting.", working: "Thank you", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** Thank you",
            commonErrors: ["Thinking all polite phrases are greetings."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Meeting at School",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "A: 'Bonjour!'\nB: 'Hello! Nice to meet you.'",
          },
          stem: "Which language did speaker A use for the greeting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spanish" },
              { id: "b", text: "French" },
              { id: "c", text: "German" },
              { id: "d", text: "English" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Greeting recognition", statement: "'Bonjour' is the French greeting." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Bonjour' = French.", working: "French", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** French",
            commonErrors: ["Choosing English — B replied in English, but A used French."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your class is preparing a 'Welcome to our school' poster for new students from many countries.",
          parts: [
            { label: "a", prompt: "Write 'Hello' in three different languages.", marks: 2 },
            { label: "b", prompt: "Write one sentence explaining why a school should welcome students from different cultures.", marks: 1 },
            { label: "c", prompt: "Write one rule for friendly behaviour towards a classmate who speaks a different language.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural welcome", statement: "Welcoming diversity means acknowledging languages and treating everyone with respect." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three correct greetings in different languages.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — spellings are accurate.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — reason mentions learning, friendship or respect.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — a sensible rule in correct English with intercultural awareness.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) three correct greetings (b) one correct sentence (c) one sensible intercultural rule.",
            commonErrors: ["Greetings that are not real words.", "Rule that is only 'be nice'."],
            examinerNote: "(c) must relate to language/culture difference.",
          },
        },
        {
          id: "mla1-u3-greetings-cultures-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Languages at Home",
            author: "Written for Akademik Space",
            source: "Intercultural context",
            text: "In our class of thirty students, ten speak Spanish at home, eight speak French at home and twelve speak English at home.",
          },
          stem: "Read the text and write three numbers: total students, students who speak Spanish and students who speak French.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total students", answer: 30 },
              { label: "(b) Spanish speakers", answer: 10 },
              { label: "(c) French speakers", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in intercultural texts", statement: "Quantities pair with the language they describe." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'thirty students'.", working: "30", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'ten speak Spanish'.", working: "10", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'eight speak French'.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 30 (b) 10 (c) 8",
            commonErrors: ["Confusing Spanish and French counts."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u3-respect-differences",
      title: "Respecting differences and communicating across cultures",
      skill: "Describe simple cultural differences and choose respectful ways to communicate.",
      lesson: {
        sections: [
          {
            heading: "Differences are normal",
            body: "People around the world eat different foods, celebrate different festivals, wear different clothes and greet in different ways. These differences are part of what makes the world interesting. When you notice a difference, the respectful response is **curiosity**, not judgement: 'That's interesting — tell me about it.'",
          },
          {
            heading: "Simple rules for communicating across cultures",
            body: "When speaking with someone from another culture: (1) **Speak slowly and clearly**, not loudly. (2) **Listen** — nodding shows you are paying attention. (3) **Ask politely** if you do not understand, rather than guessing. (4) **Be patient** — language learning takes time. (5) **Avoid jokes** that might not translate.",
          },
          {
            heading: "Your own culture too",
            body: "Intercultural understanding works both ways. Just as you learn about others, others may ask about **your** culture. Be ready to share simply: your food, your festivals, your school day. Sharing your culture — and listening to theirs — is the heart of intercultural communication.",
          },
        ],
        keyFormulas: [
          { name: "Respect checklist", statement: "Speak slowly, listen, ask politely, be patient, avoid risky jokes" },
        ],
        workedExample: {
          problem: "A classmate eats food you have never seen and asks 'What is it?' How do you respond respectfully?",
          solution: "'It looks interesting! Can you tell me about it?' — curious and kind, not judgemental.",
        },
      },
      questions: [
        {
          id: "mla1-u3-respect-differences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first reaction when you notice a cultural difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laugh at it" },
              { id: "b", text: "Be curious and ask politely" },
              { id: "c", text: "Say it is wrong" },
              { id: "d", text: "Ignore the person" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural attitude", statement: "Curiosity and polite questions show respect for differences." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — respectful response = curiosity + polite question.", working: "be curious and ask politely", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Be curious and ask politely",
            commonErrors: ["Choosing judgement ('it is wrong') — disrespectful."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three rules for communicating respectfully with someone who speaks English as a second language.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Communication rules", statement: "Speak slowly/clearly, listen, ask politely, be patient." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — speak slowly and clearly (not loudly).", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — listen patiently and ask politely if unclear.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — be patient; language learning takes time.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Speak slowly/clearly, listen patiently, ask politely, be patient.",
            commonErrors: ["Listing grammar rules instead of communication behaviour."],
            examinerNote: "Any three valid rules accepted.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A New Classmate",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "A new student, Yuki, joins your class from Japan. At lunch she sits alone and looks at her food quietly. Some classmates laugh because her lunch looks different. Yuki looks sad.",
          },
          stem: "What should you do, and why? Explain using two ideas from the lesson.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural action", statement: "Differences in food/customs are normal; curiosity and inclusion show respect." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — sit with Yuki and ask politely about her food/lunch.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — invite her to join the group.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — explains that different food is a cultural difference, not something to laugh at.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — explanation is clear and in correct English.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Sit with Yuki, ask about her lunch politely and include her — food differences are cultural, not funny.",
            commonErrors: ["Ignoring the situation or joining the laughter."],
            examinerNote: "Must include a concrete action plus a reason.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short 'Welcome' message for a new student arriving from another country.",
          parts: [
            { label: "a", prompt: "Write 3-4 sentences welcoming the student and mentioning one thing they might find different (food, language, school).", marks: 3 },
            { label: "b", prompt: "Give one piece of practical advice for the first week (e.g. where to ask for help).", marks: 2 },
            { label: "c", prompt: "End with a friendly question to start a conversation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Welcoming communication", statement: "A welcome message combines warmth, practical help and an invitation to talk." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — warm welcome mentioning a real possible difference.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar and punctuation in all sentences.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion B: Reading — difference mentioned accurately (not exaggerated or wrong).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — practical, useful advice for week one.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — advice written clearly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — friendly question that invites a reply.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — question has correct word order and question mark.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — tone is warm and welcoming throughout.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A warm 3-4 sentence welcome + practical advice + friendly closing question.",
            commonErrors: ["Listing differences in a negative way.", "Question that cannot be answered ('You are happy?')."],
            examinerNote: "Tone must be welcoming; content must be accurate and helpful.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first reaction when you notice a cultural difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laugh at it" },
              { id: "b", text: "Be curious and ask politely" },
              { id: "c", text: "Say it is wrong" },
              { id: "d", text: "Ignore the person" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural attitude", statement: "Curiosity and polite questions show respect for differences." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — respectful response = curiosity + polite question.", working: "be curious and ask politely", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Be curious and ask politely",
            commonErrors: ["Choosing judgement — disrespectful."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a respectful way to communicate with someone learning English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak very loudly and fast" },
              { id: "b", text: "Speak slowly and clearly" },
              { id: "c", text: "Use difficult words" },
              { id: "d", text: "Do not listen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Communication rules", statement: "Speak slowly and clearly — not loudly — so the listener can follow." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — slow, clear speech helps a learner understand.", working: "speak slowly and clearly", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Speak slowly and clearly",
            commonErrors: ["Thinking louder = clearer — it is not."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The respect checklist has five rules. Write the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of rules", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Respect checklist", statement: "Speak slowly, listen, ask politely, be patient, avoid risky jokes = 5 rules." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — count the five checklist items.", working: "5", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) 5",
            commonErrors: ["Missing one rule in the count."],
            examinerNote: "Answer is 5.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two rules for talking to someone who speaks English as a second language.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Communication rules", statement: "Speak slowly/clearly, listen patiently, ask politely, be patient." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — one correct rule, e.g. 'Speak slowly and clearly.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — a second correct rule, e.g. 'Be patient.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Speak slowly and clearly.' / 'Be patient.'",
            commonErrors: ["Listing grammar rules instead of communication behaviour."],
            examinerNote: "Any two valid rules accepted.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you not laugh at a classmate's custom or food that is different from yours?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Differences are normal and laughing is disrespectful" },
              { id: "b", text: "You might get in trouble" },
              { id: "c", text: "It is against the law" },
              { id: "d", text: "Food is never different" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Respect for differences", statement: "Different customs are normal; laughing at them shows disrespect." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — differences are normal; respect means not laughing.", working: "differences are normal", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** Differences are normal and laughing is disrespectful",
            commonErrors: ["Choosing a rule-based reason instead of respect."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A classmate does not understand what you said. What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say it louder and faster" },
              { id: "b", text: "Speak more slowly and use simpler words" },
              { id: "c", text: "Give up and walk away" },
              { id: "d", text: "Laugh at their English" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Communication rules", statement: "If someone does not understand, slow down and simplify — be patient." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — slower, simpler speech helps understanding.", working: "speak more slowly and use simpler words", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Speak more slowly and use simpler words",
            commonErrors: ["Thinking louder helps — clarity does."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "About Yuki",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "Yuki is from Japan. She has got two sisters and one brother. Her favourite food is sushi.",
          },
          stem: "Read the text and write two numbers: how many sisters, and how many brothers?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Sisters", answer: 2 },
              { label: "(b) Brothers", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in intercultural texts", statement: "Quantities pair with family nouns." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two sisters'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'one brother'.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 1",
            commonErrors: ["Swapping sisters and brothers."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences explaining how to be friendly to a new student from another country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural friendship", statement: "Friendliness = inclusion, patience and interest in the other person's culture." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — two concrete friendly actions, e.g. 'Sit with them at lunch.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — patience or interest shown, e.g. 'Speak slowly and ask about their country.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — both sentences grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Sit with them at lunch. Speak slowly and ask about their country.'",
            commonErrors: ["Only saying 'be nice' with no concrete action."],
            examinerNote: "Both sentences must show intercultural awareness.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which behaviour shows intercultural respect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laughing at different food" },
              { id: "b", text: "Asking politely about someone's culture" },
              { id: "c", text: "Ignoring new students" },
              { id: "d", text: "Speaking only in your language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural respect", statement: "Curiosity and polite questions show respect; judgement and ignoring do not." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite questions show respect.", working: "asking politely", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Asking politely about someone's culture",
            commonErrors: ["Choosing an action that excludes or mocks."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "At Lunch",
            author: "Written for Akademik Space",
            source: "Intercultural scenario",
            text: "A classmate, Omar, eats his lunch with his hands, as is normal in his country. Some students laugh. Omar looks uncomfortable.",
          },
          stem: "What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Join the laughter" },
              { id: "b", text: "Say it is rude" },
              { id: "c", text: "Treat it as normal and be friendly" },
              { id: "d", text: "Move to another table" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural action", statement: "Different customs are normal; treat them with respect and friendliness." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — respectful response: normal + friendly.", working: "treat it as normal and be friendly", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** Treat it as normal and be friendly",
            commonErrors: ["Choosing judgement or exclusion."],
            examinerNote: "C1 for (c).",
          },
        },
        {
          id: "mla1-u3-respect-differences-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write about communicating across cultures.",
          parts: [
            { label: "a", prompt: "Describe one cultural difference you have noticed (food, greeting, custom).", marks: 1 },
            { label: "b", prompt: "Give two respectful ways to respond to that difference.", marks: 2 },
            { label: "c", prompt: "Write one sentence about your own culture that you could share with a friend.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Intercultural communication", statement: "Differences are normal; respect = curiosity, patience and sharing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — one accurate, real cultural difference described.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C: Speaking — two respectful responses such as 'ask politely' and 'be patient'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — responses show intercultural awareness, not just politeness.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — one correct sentence sharing own culture.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) one difference (b) two respectful responses (c) one correct sharing sentence.",
            commonErrors: ["Describing a difference in a mocking way.", "Responses that are not respectful."],
            examinerNote: "Tone must be respectful throughout.",
          },
        },
        {
          id: "mla1-u3-respect-differences-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Languages at Home",
            author: "Written for Akademik Space",
            source: "Intercultural context",
            text: "In our class twenty-five students speak a different language at home. Fifteen speak Spanish, six speak French and four speak German.",
          },
          stem: "Read the text and write three numbers: total students, Spanish speakers and French speakers.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total students", answer: 25 },
              { label: "(b) Spanish speakers", answer: 15 },
              { label: "(c) French speakers", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in intercultural texts", statement: "Quantities pair with the language they describe." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'twenty-five students'.", working: "25", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Fifteen speak Spanish'.", working: "15", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'six speak French'.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 25 (b) 15 (c) 6",
            commonErrors: ["Confusing Spanish and French counts."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
  ],
};

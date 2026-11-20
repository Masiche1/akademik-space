import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "langab-u1-lesson-1-3",
  code: "1-3",
  title: "Asking and answering simple questions",
  goal: "I CAN ask and answer simple questions using what, where, when, who and yes/no questions.",
  standards: ["Speaking", "Listening", "Reading", "Writing"],
  vocabulary: [
    { term: "What", definition: "A question word used to ask about things or information." },
    { term: "Where", definition: "A question word used to ask about places." },
    { term: "When", definition: "A question word used to ask about time." },
    { term: "Who", definition: "A question word used to ask about people." },
    { term: "Question mark", definition: "The symbol ? placed at the end of a question." },
    { term: "Answer", definition: "What you say or write in reply to a question." },
  ],
  concepts: [
    {
      id: "langab-u1-question-words",
      title: "Question words and yes/no questions",
      skill: "Use what, where, when and who to ask for information and answer yes/no questions.",
      lesson: {
        sections: [
          {
            heading: "Question words",
            body: "Question words tell you what kind of answer you need. **What** asks about things: \"What is your name?\" **Where** asks about places: \"Where do you live?\" **When** asks about time: \"When is your birthday?\" **Who** asks about people: \"Who is your teacher?\"",
          },
          {
            heading: "Yes/no questions",
            body: "For yes/no questions, put **do** or **does** before the subject: \"Do you like music?\" Answer with **Yes, I do** or **No, I don't**. With the verb **to be** there is no do: \"Are you from Spain?\" -> \"Yes, I am.\" / \"No, I'm not.\"",
          },
          {
            heading: "Answering clearly",
            body: "Match your answer to the question word. A where question needs a place, a when question needs a time, a who question needs a person. Always end questions with a question mark and answers with a full stop.",
          },
        ],
        keyFormulas: [
          { name: "Question word order", statement: "Question word + auxiliary + subject + verb? (Where do you live?)" },
          { name: "Yes/no with do", statement: "Do you + verb? -> Yes, I do. / No, I don't." },
        ],
        workedExample: {
          problem: "Turn this into a question: You live in Paris.",
          solution: "Where do you live?",
        },
      },
      questions: [
        {
          id: "langab-u1-l13q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which question word asks about a place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What" },
              { id: "b", text: "When" },
              { id: "c", text: "Where" },
              { id: "d", text: "Who" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "Where asks about place; when about time; who about people; what about things." },
            ],
            steps: [
              { reasoning: "Where is the question word for places.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Where",
            commonErrors: ["Confusing where and when."],
          },
        },
        {
          id: "langab-u1-l13q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write questions for these answers: 1) I live in Madrid. 2) My birthday is in May. 3) My teacher is Ms Lopez.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming questions", statement: "Choose the question word that matches the type of answer." },
            ],
            steps: [
              { reasoning: "Madrid is a place, so use where: \"Where do you live?\"", marks: 1, markCode: "M" },
              { reasoning: "May is a time, so use when: \"When is your birthday?\"", marks: 1, markCode: "M" },
              { reasoning: "Ms Lopez is a person, so use who: \"Who is your teacher?\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Where do you live? / When is your birthday? / Who is your teacher?",
            commonErrors: ["Using what for every answer."],
          },
        },
        {
          id: "langab-u1-l13q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the interview and answer the questions.",
          extract: {
            title: "Interview with a new student",
            author: "Written for Akademik Space",
            text: "Reporter: What is your name?\nStudent: My name is Ana.\nReporter: Where are you from?\nStudent: I am from Mexico.\nReporter: Do you like school?\nStudent: Yes, I do.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview comprehension", statement: "Find each answer in the dialogue and give it in a full sentence." },
            ],
            steps: [
              { reasoning: "Ana's name is Ana — a simple fact question.", marks: 1, markCode: "M" },
              { reasoning: "She is from Mexico — a where question.", marks: 1, markCode: "M" },
              { reasoning: "She likes school — answer yes.", marks: 1, markCode: "A" },
              { reasoning: "All three answers are correct and complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ana; Mexico; yes, she does / yes.",
            commonErrors: ["Answering with single words when a full sentence is needed."],
          },
        },
        {
          id: "langab-u1-l13q4",
          difficulty: "core",
          totalMarks: 6,
          stem: "Write a short interview with a classmate about their free time.",
          parts: [
            { label: "a", prompt: "Write two questions using question words (what, where, when or who).", marks: 2 },
            { label: "b", prompt: "Write one yes/no question.", marks: 1 },
            { label: "c", prompt: "Write three possible answers your classmate could give.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview writing", statement: "Questions must match their answer type and use correct word order." },
            ],
            steps: [
              { part: "a", reasoning: "Two questions with correct question words and word order.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "One correct yes/no question with do/does or be.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Three answers that match the question types.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) Two wh- questions. (b) One yes/no question. (c) Three matching answers.",
            commonErrors: ["Answers that do not match the question word used."],
          },
        },
        {
          id: "langab-u1-l13q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which question word asks about time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What" },
              { id: "b", text: "Where" },
              { id: "c", text: "When" },
              { id: "d", text: "Who" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "When asks about time; where about place; who about people; what about things." },
            ],
            steps: [
              { reasoning: "When is the question word for time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** When",
            commonErrors: ["Confusing when and where."],
          },
        },
        {
          id: "langab-u1-l13q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which question asks about a person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is your name?" },
              { id: "b", text: "Where do you live?" },
              { id: "c", text: "Who is your teacher?" },
              { id: "d", text: "When is the party?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "Who asks about people." },
            ],
            steps: [
              { reasoning: "'Who is your teacher?' asks about a person.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Who is your teacher?",
            commonErrors: ["Using 'what' to ask about a person."],
          },
        },
        {
          id: "langab-u1-l13q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a question for each answer: 1) I am from France. 2) My birthday is in June. 3) I live in Paris.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forming questions", statement: "Choose the question word that matches the type of answer." },
            ],
            steps: [
              { reasoning: "France is a place, so: 'Where are you from?'", marks: 1, markCode: "M" },
              { reasoning: "June is a time, so: 'When is your birthday?'", marks: 1, markCode: "M" },
              { reasoning: "Paris is a place, so: 'Where do you live?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Where are you from? / When is your birthday? / Where do you live?",
            commonErrors: ["Using 'what' for every answer."],
          },
        },
        {
          id: "langab-u1-l13q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which question is correct English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where you live?" },
              { id: "b", text: "Where do you live?" },
              { id: "c", text: "Where does you live?" },
              { id: "d", text: "Where are you live?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question formation", statement: "With 'you' the question uses 'do': 'Where do you live?'" },
            ],
            steps: [
              { reasoning: "'You' takes 'do' in this question.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Where do you live?",
            commonErrors: ["Using 'does' with 'you'."],
          },
        },
        {
          id: "langab-u1-l13q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the interview and answer the three questions about it.",
          extract: {
            title: "New friend",
            author: "Written for Akademik Space",
            text: "A: What is your name?\nB: My name is Luca.\nA: Where are you from?\nB: I am from Italy.\nA: Do you like school?\nB: Yes, I do.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview comprehension", statement: "Find each answer in the dialogue and give it correctly." },
            ],
            steps: [
              { reasoning: "Luca's name is Luca.", marks: 1, markCode: "M" },
              { reasoning: "He is from Italy.", marks: 1, markCode: "M" },
              { reasoning: "He likes school — the answer is yes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Luca; Italy; yes.",
            commonErrors: ["Answering with single words where a sentence is expected."],
          },
        },
        {
          id: "langab-u1-l13q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the correct answer to 'Are you from Spain?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, I do." },
              { id: "b", text: "Yes, I am." },
              { id: "c", text: "Yes, I like." },
              { id: "d", text: "I am yes." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be-questions", statement: "Questions with 'are' are answered with 'Yes, I am' or 'No, I'm not' — no 'do'." },
            ],
            steps: [
              { reasoning: "'Are you ...?' uses 'am' in the answer.", marks: 1, markCode: "M" },
              { reasoning: "'Do' belongs to questions with 'do', not 'are'.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Yes, I am.",
            commonErrors: ["Adding 'do' — 'Yes, I do' is for 'do' questions only."],
          },
        },
        {
          id: "langab-u1-l13q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write interview questions for a 'getting to know you' game.",
          parts: [
            { label: "a", prompt: "Write two questions using what, where, when or who.", marks: 2 },
            { label: "b", prompt: "Write two yes/no questions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question writing", statement: "Wh- questions use question words; yes/no questions use do/does or be." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct wh- questions, e.g. 'What is your name?' and 'Where do you live?'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct yes/no questions, e.g. 'Do you like music?' and 'Are you from Spain?'", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) Two wh- questions. (b) Two yes/no questions.",
            commonErrors: ["Writing a wh- word question without correct word order."],
          },
        },
        {
          id: "langab-u1-l13q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which question matches the answer 'At three o'clock'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where is the party?" },
              { id: "b", text: "When is the party?" },
              { id: "c", text: "Who is at the party?" },
              { id: "d", text: "What is the party?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Matching answers", statement: "A time answer matches a 'when' question." },
            ],
            steps: [
              { reasoning: "'At three o'clock' is a time, so the question uses 'when'.", marks: 1, markCode: "M" },
              { reasoning: "Where asks place, who asks people, what asks things.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** When is the party?",
            commonErrors: ["Choosing 'where' because the answer begins with 'at'."],
          },
        },
        {
          id: "langab-u1-l13q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Complete this interview between a reporter and a new student.",
          parts: [
            { label: "a", prompt: "Write two questions using question words.", marks: 2 },
            { label: "b", prompt: "Write two matching answers in full sentences.", marks: 2 },
            { label: "c", prompt: "Write a polite closing for the interview.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview writing", statement: "Questions and answers must match, and the exchange ends politely." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct wh- questions, e.g. 'What is your name?' 'Where are you from?'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two full-sentence answers that match the questions.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Polite closing such as 'Thank you for your time.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two wh- questions. (b) Two matching answers. (c) Polite close.",
            commonErrors: ["Answers that do not match the question words."],
          },
        },
        {
          id: "langab-u1-l13q18",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which question is NOT correct English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is your name?" },
              { id: "b", text: "Where do you live?" },
              { id: "c", text: "When is your birthday?" },
              { id: "d", text: "Who are you from?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fixed phrases", statement: "Origin uses 'Where are you from?', not 'Who'." },
            ],
            steps: [
              { reasoning: "'Who are you from?' is wrong — origin uses 'where'.", marks: 1, markCode: "M" },
              { reasoning: "The other three questions are correct English.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Who are you from?",
            commonErrors: ["Thinking 'who' can ask about origin."],
          },
        },
        {
          id: "langab-u1-l13q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write four questions for a 'getting to know you' card game: two with question words and two yes/no questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question variety", statement: "A good set mixes wh- questions and yes/no questions with correct forms." },
            ],
            steps: [
              { reasoning: "Two correct wh- questions, e.g. 'What do you like?' 'When is your birthday?'", marks: 2, markCode: "M" },
              { reasoning: "Two correct yes/no questions, e.g. 'Do you like sport?' 'Are you from Spain?'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Two wh- questions and two yes/no questions, all correct.",
            commonErrors: ["Making yes/no questions with a wh- word, which changes the type."],
          },
        },
        {
          id: "langab-u1-l13q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a five-line dialogue: greeting, a wh- question, an answer, a yes/no question and a final answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structured dialogue", statement: "A dialogue alternates correctly between greetings, questions and answers." },
            ],
            steps: [
              { reasoning: "Line 1 is a greeting, e.g. 'Hello! How are you?'", marks: 1, markCode: "M" },
              { reasoning: "Line 2 is a correct wh- question.", marks: 1, markCode: "M" },
              { reasoning: "Line 3 answers it in a full sentence.", marks: 1, markCode: "M" },
              { reasoning: "Line 4 is a correct yes/no question.", marks: 1, markCode: "M" },
              { reasoning: "Line 5 answers it correctly and politely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A five-line exchange with greeting, wh- Q&A, yes/no Q&A.",
            commonErrors: ["Two questions in a row with no answer between them."],
          },
        },
      ],
    },
    {
      id: "langab-u1-answering",
      title: "Answering questions politely",
      skill: "Give clear, polite answers to questions and ask for repetition when needed.",
      lesson: {
        sections: [
          {
            heading: "Clear answers",
            body: "Answer in a full sentence whenever possible. If someone asks \"Where do you live?\" do not just say a city — say \"I live in Berlin.\" Speak clearly and at a natural speed. It is fine to pause before answering.",
          },
          {
            heading: "Asking for help",
            body: "If you do not understand, say **Sorry?** or **Could you repeat that, please?** or **What does ... mean?** This is normal and polite. Good listeners ask questions instead of guessing.",
          },
          {
            heading: "Polite responses",
            body: "Begin answers with polite phrases when suitable: \"Yes, I do.\" / \"No, I don't.\" Add **please** when asking: \"Could you say that again, please?\" End exchanges with **Thank you** and **You're welcome**.",
          },
        ],
        keyFormulas: [
          { name: "Asking for repetition", statement: "Sorry? / Could you repeat that, please? / What does X mean?" },
          { name: "Polite answering", statement: "Yes, I do. / No, I don't. + full sentence + Thank you." },
        ],
        workedExample: {
          problem: "Respond politely when you did not hear a question.",
          solution: "Sorry, could you repeat that, please?",
        },
      },
      questions: [
        {
          id: "langab-u1-l13q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should you say when you do not understand something?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guess the answer" },
              { id: "b", text: "Ask them to repeat, politely" },
              { id: "c", text: "Say nothing" },
              { id: "d", text: "Change the subject" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification strategies", statement: "Asking for repetition is polite and prevents misunderstandings." },
            ],
            steps: [
              { reasoning: "Politely asking for repetition is the correct strategy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ask them to repeat, politely",
            commonErrors: ["Guessing instead of asking for clarification."],
          },
        },
        {
          id: "langab-u1-l13q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Answer this yes/no question in two different ways: Do you like music?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Yes/no answers", statement: "Answer with Yes/No plus do/don't, then add a detail." },
            ],
            steps: [
              { reasoning: "Positive answer: \"Yes, I do. I like pop music.\"", marks: 1, markCode: "M" },
              { reasoning: "Negative answer: \"No, I don't. I like sport.\"", marks: 1, markCode: "M" },
              { reasoning: "Both answers use correct do-support and word order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, I do. ... / No, I don't. ...",
            commonErrors: ["Saying \"Yes, I like\" without do."],
          },
        },
        {
          id: "langab-u1-l13q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the dialogue and write what each person says next.",
          extract: {
            title: "At the cafe",
            author: "Written for Akademik Space",
            text: "Waiter: Hello! What would you like?\nYou: A coffee, please.\nWaiter: Anything else?\nYou: ...\nWaiter: Thank you!",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Service dialogues", statement: "Answer the question directly, keep it polite, and close with thanks." },
            ],
            steps: [
              { reasoning: "\"Anything else?\" needs a yes/no answer about more items.", marks: 1, markCode: "M" },
              { reasoning: "A correct answer: \"No, thank you.\" or \"Yes, a cake, please.\"", marks: 1, markCode: "M" },
              { reasoning: "Polite phrasing is used.", marks: 1, markCode: "A" },
              { reasoning: "The exchange ends naturally with thanks.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No, thank you. / Yes, a cake, please.",
            commonErrors: ["Forgetting to say thank you at the end."],
          },
        },
        {
          id: "langab-u1-l13q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a mini-dialogue of four lines about weekend plans.",
          parts: [
            { label: "a", prompt: "Line 1: Person A asks a question with a question word.", marks: 1 },
            { label: "b", prompt: "Line 2: Person B answers in a full sentence.", marks: 1 },
            { label: "c", prompt: "Line 3: Person B asks a yes/no question back.", marks: 1 },
            { label: "d", prompt: "Line 4: Person A answers and closes politely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mini-dialogue", statement: "A four-line exchange alternates question and answer with correct forms." },
            ],
            steps: [
              { part: "a", reasoning: "Correct wh- question, e.g. \"What are you doing at the weekend?\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Full-sentence answer, e.g. \"I am meeting my friends.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct yes/no question, e.g. \"Do you like sport?\"", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct answer plus polite closing.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Wh- question. (b) Full answer. (c) Yes/no question. (d) Answer + thanks.",
            commonErrors: ["Two questions in a row without an answer."],
          },
        },
        {
          id: "langab-u1-l13q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do you say when you do not hear a question clearly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I don't know." },
              { id: "b", text: "Sorry? Could you repeat that, please?" },
              { id: "c", text: "Goodbye." },
              { id: "d", text: "Thank you." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification strategies", statement: "Politely asking for repetition prevents misunderstandings." },
            ],
            steps: [
              { reasoning: "Asking politely for repetition is the correct strategy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sorry? Could you repeat that, please?",
            commonErrors: ["Guessing the answer instead of asking."],
          },
        },
        {
          id: "langab-u1-l13q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do you ask what a word means?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What does 'library' mean?" },
              { id: "b", text: "Where is library?" },
              { id: "c", text: "Who is library?" },
              { id: "d", text: "When is library?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Asking meanings", statement: "'What does ... mean?' asks for the meaning of a word." },
            ],
            steps: [
              { reasoning: "The fixed phrase 'What does X mean?' asks for meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** What does 'library' mean?",
            commonErrors: ["Using 'where' or 'who' for a word meaning."],
          },
        },
        {
          id: "langab-u1-l13q23",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write two polite ways to ask someone to repeat what they said.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Asking for repetition", statement: "Polite options include 'Sorry?' and 'Could you repeat that, please?'" },
            ],
            steps: [
              { reasoning: "First phrase, e.g. 'Sorry?' or 'Pardon?'", marks: 1, markCode: "M" },
              { reasoning: "Second phrase, e.g. 'Could you repeat that, please?'", marks: 1, markCode: "M" },
              { reasoning: "Both phrases are polite and correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sorry? / Could you repeat that, please?",
            commonErrors: ["Saying 'What?' loudly — that sounds rude."],
          },
        },
        {
          id: "langab-u1-l13q24",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which answer to 'Where do you live?' is a full sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Madrid." },
              { id: "b", text: "I live in Madrid." },
              { id: "c", text: "Spain." },
              { id: "d", text: "City." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Full-sentence answers", statement: "Answers should be complete sentences, not single words." },
            ],
            steps: [
              { reasoning: "'I live in Madrid.' is a complete sentence with subject and verb.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I live in Madrid.",
            commonErrors: ["Answering with only a place name."],
          },
        },
        {
          id: "langab-u1-l13q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the dialogue and complete B's last line politely.",
          extract: {
            title: "At the cafe",
            author: "Written for Akademik Space",
            text: "A: Do you like sport?\nB: No, I don't. I like music.\nA: Thank you for your time!\nB: ...",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Closing exchanges", statement: "A polite exchange ends with thanks and 'you're welcome'." },
            ],
            steps: [
              { reasoning: "B's answer earlier was polite and complete.", marks: 1, markCode: "M" },
              { reasoning: "The last line should reply to thanks, e.g. 'You're welcome!'", marks: 1, markCode: "M" },
              { reasoning: "The reply is polite and natural.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "You're welcome! (or 'Thank you too!')",
            commonErrors: ["Ending without replying to the thanks."],
          },
        },
        {
          id: "langab-u1-l13q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the most polite way to ask for something in a shop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give me that!" },
              { id: "b", text: "Can I have this, please?" },
              { id: "c", text: "I want it now!" },
              { id: "d", text: "Hurry up!" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "Requests are softened with 'can I ... please?'" },
            ],
            steps: [
              { reasoning: "'Can I have this, please?' is the polite request form.", marks: 1, markCode: "M" },
              { reasoning: "Commands like 'give me' and 'hurry up' are rude.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can I have this, please?",
            commonErrors: ["Using commands like 'give me' — they sound rude."],
          },
        },
        {
          id: "langab-u1-l13q27",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a polite three-line exchange at a cafe counter.",
          parts: [
            { label: "a", prompt: "Line 1: you order a drink with 'please'.", marks: 2 },
            { label: "b", prompt: "Line 2: the waiter asks 'Anything else?'", marks: 1 },
            { label: "c", prompt: "Line 3: you answer and thank the waiter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Service exchanges", statement: "Orders use 'please', answers are direct, and the exchange ends with thanks." },
            ],
            steps: [
              { part: "a", reasoning: "Order with 'please', e.g. 'A coffee, please.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Correct waiter line: 'Anything else?'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer such as 'No, thank you.' plus a polite closing.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Order + please. (b) Anything else? (c) No/yes + thank you.",
            commonErrors: ["Forgetting 'please' or the final thanks."],
          },
        },
        {
          id: "langab-u1-l13q28",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What does 'Could you repeat that, please?' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Please say it again" },
              { id: "b", text: "Thank you very much" },
              { id: "c", text: "I would like to order food" },
              { id: "d", text: "Goodbye, see you later" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite phrases", statement: "'Could you repeat that?' asks the speaker to say something again." },
            ],
            steps: [
              { reasoning: "The phrase asks for repetition.", marks: 1, markCode: "M" },
              { reasoning: "It does not thank, order food or say goodbye.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Please say it again",
            commonErrors: ["Confusing it with a thanking phrase."],
          },
        },
        {
          id: "langab-u1-l13q29",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a four-line role-play script about weekend plans.",
          parts: [
            { label: "a", prompt: "Person A asks a question with a question word.", marks: 1 },
            { label: "b", prompt: "Person B answers in a full sentence.", marks: 2 },
            { label: "c", prompt: "Person B asks a yes/no question back.", marks: 1 },
            { label: "d", prompt: "Person A answers and closes politely.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Role-play script", statement: "A script alternates correct questions and answers with a polite ending." },
            ],
            steps: [
              { part: "a", reasoning: "Correct wh- question, e.g. 'What are you doing at the weekend?'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Full-sentence answer, e.g. 'I am meeting my friends.'", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Correct yes/no question, e.g. 'Do you like sport?'", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct answer plus polite closing such as 'Thank you!'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Wh- Q. (b) Full answer. (c) Yes/no Q. (d) Answer + thanks.",
            commonErrors: ["Two questions without an answer in between."],
          },
        },
        {
          id: "langab-u1-l13q30",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write three things you can say when you do not understand, and one full-sentence answer to 'Where are you from?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Repair strategies", statement: "Good listeners use polite clarification phrases and full-sentence answers." },
            ],
            steps: [
              { reasoning: "Three correct clarification phrases, e.g. 'Sorry?', 'Could you repeat that, please?', 'What does ... mean?'", marks: 2, markCode: "M" },
              { reasoning: "Full-sentence answer, e.g. 'I am from ...'", marks: 1, markCode: "M" },
              { reasoning: "All phrases are polite and correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Three clarification phrases + 'I am from ...'.",
            commonErrors: ["Writing 'I from ...' without 'am'."],
          },
        },
        {
          id: "langab-u1-l13q31",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which exchange is the most polite?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'What is your name?' / 'Shut up.'" },
              { id: "b", text: "'Where do you live?' / 'I live in Paris. Thank you.'" },
              { id: "c", text: "'Do you like me?' / 'Go away.'" },
              { id: "d", text: "'How old are you?' / 'None of your business.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite exchanges", statement: "Polite exchanges use correct questions, full answers and thanks." },
            ],
            steps: [
              { reasoning: "Only choice (b) has a correct question, a full answer and a polite closing.", marks: 1, markCode: "M" },
              { reasoning: "The other exchanges contain rude or inappropriate answers.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'Where do you live?' / 'I live in Paris. Thank you.'",
            commonErrors: ["Choosing an exchange with rude answers."],
          },
        },
        {
          id: "langab-u1-l13q32",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a four-line dialogue where one person does not understand and politely asks for help.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification dialogue", statement: "A dialogue can include a polite request for repetition or meaning." },
            ],
            steps: [
              { reasoning: "Lines 1-2: a question and an answer.", marks: 1, markCode: "M" },
              { reasoning: "Line 3: a polite clarification phrase such as 'Sorry? Could you repeat that?'", marks: 1, markCode: "M" },
              { reasoning: "Line 4: the other person repeats or explains simply.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "A four-line exchange including a polite clarification.",
            commonErrors: ["Using an unclear or rude way to ask for repetition."],
          },
        },
      ],
    },
  ],
};

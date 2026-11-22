import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "langab-u1-lesson-1-1",
  code: "1-1",
  title: "Greetings, introductions and personal information",
  goal: "I CAN greet people, introduce myself and ask and answer basic questions about personal information.",
  standards: ["Speaking", "Listening", "Vocabulary"],
  vocabulary: [
    { term: "Hello", definition: "A friendly greeting used at any time of day." },
    { term: "Good morning", definition: "A greeting used before midday." },
    { term: "Name", definition: "What a person is called." },
    { term: "From", definition: "Shows where a person comes from or lives." },
    { term: "Nice to meet you", definition: "A polite phrase used when meeting someone for the first time." },
    { term: "Goodbye", definition: "A polite way to end a conversation." },
  ],
  concepts: [
    {
      id: "langab-u1-greetings",
      title: "Greetings and introductions",
      skill: "Greet people politely and give basic personal information in simple sentences.",
      lesson: {
        sections: [
          {
            heading: "Saying hello",
            body: "Begin every conversation politely. Use **Good morning** before midday, **Good afternoon** after midday, and **Hello** or **Hi** at any time. When you meet someone for the first time, say **Nice to meet you**.",
          },
          {
            heading: "Introducing yourself",
            body: "A simple introduction follows a pattern: greeting, name, where you are from, and a friendly closing. For example: \"Hello, my name is Ana. I am from Portugal. Nice to meet you.\" Use **I am** or **I'm** with your name.",
          },
          {
            heading: "Asking about others",
            body: "Ask simple questions to learn about the other person: **What is your name?** and **Where are you from?** Answer questions about yourself in the same way. Always smile and speak clearly.",
          },
        ],
        keyFormulas: [
          { name: "Self-introduction", statement: "Hello / Good morning + My name is ... + I am from ... + Nice to meet you." },
          { name: "Asking names", statement: "What is your name? -> My name is ..." },
        ],
        workedExample: {
          problem: "Write a short introduction for a classmate named Marco from Italy.",
          solution: "Good morning. My name is Marco and I am from Italy. Nice to meet you.",
        },
      },
      questions: [
        {
          id: "langab-u1-l11q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which greeting is most appropriate before 12 o'clock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good morning" },
              { id: "b", text: "Goodbye" },
              { id: "c", text: "Good evening only after 6 pm" },
              { id: "d", text: "Good night" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time greetings", statement: "Good morning is used before midday; good afternoon after midday." },
            ],
            steps: [
              { reasoning: "Good morning is the standard greeting before midday.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Good morning",
            commonErrors: ["Using good evening before 6 pm."],
          },
        },
        {
          id: "langab-u1-l11q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences introducing yourself: your name, where you are from, and one thing you like.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-introduction", statement: "A simple introduction gives name, origin and one personal detail in short sentences." },
            ],
            steps: [
              { reasoning: "First sentence gives the name, e.g. \"My name is ...\"", marks: 1, markCode: "M" },
              { reasoning: "Second sentence says where the student is from, e.g. \"I am from ...\"", marks: 1, markCode: "M" },
              { reasoning: "Third sentence adds a simple personal detail with correct word order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "My name is ... . I am from ... . I like ... .",
            commonErrors: ["Putting the verb in the wrong place, e.g. \"I from Spain am.\""],
          },
        },
        {
          id: "langab-u1-l11q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Complete this short dialogue between two students meeting for the first time.",
          extract: {
            title: "First day at school",
            author: "Written for Akademik Space",
            text: "A: Good morning! My name is Leo.\nB: Hello Leo. I am Sara.\nA: Where are you from?\nB: I am from Brazil. And you?",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue completion", statement: "Answers follow the pattern of the question and use correct simple present forms." },
            ],
            steps: [
              { reasoning: "Answer to \"Where are you from?\" must give a place, e.g. \"I am from ...\"", marks: 1, markCode: "M" },
              { reasoning: "Use \"I am from\" or \"I'm from\" correctly.", marks: 1, markCode: "A" },
              { reasoning: "The final line can add a friendly question back, e.g. \"Nice to meet you.\"", marks: 1, markCode: "R" },
              { reasoning: "Polite, friendly tone is kept throughout.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A: I am from Spain. Nice to meet you!",
            commonErrors: ["Answering with only a city name and no full sentence."],
          },
        },
        {
          id: "langab-u1-l11q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Plan a first conversation with a new classmate.",
          parts: [
            { label: "a", prompt: "Write a greeting and introduce yourself in two sentences.", marks: 2 },
            { label: "b", prompt: "Write one question you will ask your classmate.", marks: 1 },
            { label: "c", prompt: "Write how you will end the conversation politely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conversation planning", statement: "A short exchange needs a greeting, an introduction, a question and a polite ending." },
            ],
            steps: [
              { part: "a", reasoning: "Greeting plus name/origin in two correct sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A correct question such as \"What is your name?\" or \"Where are you from?\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A polite ending such as \"Nice to meet you\" or \"Goodbye\" or \"See you later.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ending is appropriate and friendly in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Greeting + introduction. (b) One simple question. (c) Polite closing.",
            commonErrors: ["Forgetting the polite ending of the conversation."],
          },
        },
        {
          id: "langab-u1-l11q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "It is 9 o'clock in the morning and you meet a friend. Which greeting is best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good evening" },
              { id: "b", text: "Goodbye" },
              { id: "c", text: "Good morning" },
              { id: "d", text: "Good night" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time greetings", statement: "Good morning is used before midday; good afternoon after midday; good evening later in the day." },
            ],
            steps: [
              { reasoning: "9 o'clock in the morning is before midday, so good morning is correct.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Good morning",
            commonErrors: ["Using good night, which is said when leaving at night."],
          },
        },
        {
          id: "langab-u1-l11q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence correctly introduces yourself?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Name my is Ana." },
              { id: "b", text: "My name is Ana and I am from Spain." },
              { id: "c", text: "I am Spain from." },
              { id: "d", text: "I from am Spain." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Introduction pattern", statement: "A self-introduction uses 'My name is ...' and 'I am from ...' in that order." },
            ],
            steps: [
              { reasoning: "Only choice (a) follows the correct pattern: name first, then origin.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** My name is Ana and I am from Spain.",
            commonErrors: ["Putting 'from' before 'am', e.g. 'I from Spain am.'"],
          },
        },
        {
          id: "langab-u1-l11q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a greeting and two sentences introducing yourself to a new student at school.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-introduction", statement: "A greeting plus a name sentence and an origin sentence form a basic introduction." },
            ],
            steps: [
              { reasoning: "A suitable greeting such as 'Hello' or 'Good morning.' is used.", marks: 1, markCode: "M" },
              { reasoning: "The name is given in a correct sentence, e.g. 'My name is ...'.", marks: 1, markCode: "M" },
              { reasoning: "The origin is given correctly, e.g. 'I am from ...', with correct word order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hello. My name is ... . I am from ... .",
            commonErrors: ["Writing a list of words instead of full sentences."],
          },
        },
        {
          id: "langab-u1-l11q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do you say when you meet someone for the first time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good luck" },
              { id: "b", text: "See you tomorrow" },
              { id: "c", text: "Nice to meet you" },
              { id: "d", text: "Good night" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "First meetings", statement: "'Nice to meet you' is the polite phrase used when meeting someone for the first time." },
            ],
            steps: [
              { reasoning: "'Nice to meet you' is the fixed friendly phrase for a first meeting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Nice to meet you",
            commonErrors: ["Using 'Goodbye', which ends a conversation rather than starting one."],
          },
        },
        {
          id: "langab-u1-l11q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the dialogue between two new classmates.",
          extract: {
            title: "New classmates",
            author: "Written for Akademik Space",
            text: "A: Good afternoon! My name is Kim.\nB: Hello Kim. I am Nora.\nA: Where are you from?\nB: ...\nA: ...",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue completion", statement: "Answers follow the question pattern and keep a friendly tone." },
            ],
            steps: [
              { reasoning: "B answers the where question with a place, e.g. 'I am from Korea.'", marks: 1, markCode: "M" },
              { reasoning: "B can add a friendly phrase, e.g. 'Nice to meet you.'", marks: 1, markCode: "A" },
              { reasoning: "A closes politely, e.g. 'Nice to meet you too.' or 'See you in class.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B: I am from Korea. Nice to meet you. / A: Nice to meet you too.",
            commonErrors: ["Answering with only a country name and no full sentence."],
          },
        },
        {
          id: "langab-u1-l11q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which question asks where someone is from?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How old are you?" },
              { id: "b", text: "What is your name?" },
              { id: "c", text: "Who is your teacher?" },
              { id: "d", text: "Where are you from?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "Where asks about place or origin; what asks about things; who asks about people." },
            ],
            steps: [
              { reasoning: "Origin is a place question, so 'Where are you from?' is correct.", marks: 1, markCode: "M" },
              { reasoning: "The other options ask about name, age or a person, not origin.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Where are you from?",
            commonErrors: ["Using 'What are you from?' — the fixed phrase uses 'Where'."],
          },
        },
        {
          id: "langab-u1-l11q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A new classmate says 'Nice to meet you.' What is a polite reply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Good night." },
              { id: "b", text: "Go away." },
              { id: "c", text: "I don't know." },
              { id: "d", text: "Nice to meet you too." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite replies", statement: "'Nice to meet you too' is the natural, polite answer to 'Nice to meet you.'" },
            ],
            steps: [
              { reasoning: "The reply returns the same friendly phrase with 'too'.", marks: 1, markCode: "M" },
              { reasoning: "The other options do not reply to the greeting politely.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Nice to meet you too.",
            commonErrors: ["Answering with a goodbye, which ends the exchange too early."],
          },
        },
        {
          id: "langab-u1-l11q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short introduction message for a new pen friend you will write to every week.",
          parts: [
            { label: "a", prompt: "Greet your pen friend and give your name.", marks: 2 },
            { label: "b", prompt: "Say where you are from.", marks: 1 },
            { label: "c", prompt: "End the message politely.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Written introduction", statement: "A short message needs a greeting, a name, an origin and a polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "Greeting plus name in correct sentences, e.g. 'Hello! My name is ...'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Origin given correctly, e.g. 'I am from ...'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Polite closing such as 'Nice to meet you' or 'See you soon.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Greeting + name. (b) Country. (c) Polite ending.",
            commonErrors: ["Leaving out the greeting or the polite ending."],
          },
        },
        {
          id: "langab-u1-l11q17",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which introduction is the most polite and complete?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hi. Marco." },
              { id: "b", text: "Goodbye, Marco." },
              { id: "c", text: "Good morning. My name is Marco. I am from Italy. Nice to meet you." },
              { id: "d", text: "I like pizza." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complete introductions", statement: "A complete polite introduction has a greeting, a name, an origin and a friendly closing." },
            ],
            steps: [
              { reasoning: "Choice (c) is the only option containing all four parts of a good introduction.", marks: 1, markCode: "M" },
              { reasoning: "The distractors are too short or use a goodbye instead of an introduction.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Good morning. My name is Marco. I am from Italy. Nice to meet you.",
            commonErrors: ["Choosing a greeting without any personal information."],
          },
        },
        {
          id: "langab-u1-l11q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan a first conversation with a student from another country who is visiting your school.",
          parts: [
            { label: "a", prompt: "Write a greeting and introduce yourself in two sentences.", marks: 2 },
            { label: "b", prompt: "Write two questions you will ask your visitor.", marks: 2 },
            { label: "c", prompt: "Write how you will end the conversation politely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conversation planning", statement: "A first exchange needs a greeting, an introduction, relevant questions and a polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "Greeting plus name and origin in two correct sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct questions such as 'What is your name?' and 'Where are you from?'", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A polite ending such as 'Nice to meet you' or 'See you later.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ending is appropriate and friendly for the visitor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Greeting + introduction. (b) Two questions. (c) Polite close.",
            commonErrors: ["Asking questions that need answers beyond beginner level."],
          },
        },
        {
          id: "langab-u1-l11q19",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a 'hello' card for a new student who has just arrived at your school.",
          parts: [
            { label: "a", prompt: "Greet the new student by name.", marks: 1 },
            { label: "b", prompt: "Introduce yourself with your name and country.", marks: 2 },
            { label: "c", prompt: "Say one thing you like and ask one question.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Welcome card", statement: "A welcome card combines a greeting, a self-introduction, one personal detail and a question." },
            ],
            steps: [
              { part: "a", reasoning: "A friendly greeting using the student's name or a general hello.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Name and country given in correct sentences, e.g. 'My name is ... I am from ...'", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct 'I like ...' sentence plus one correct question.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Greeting. (b) Name + country. (c) Like + question.",
            commonErrors: ["Writing only words without full sentences."],
          },
        },
        {
          id: "langab-u1-l11q20",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Complete the sentence: 'I ___ from Brazil.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Verb 'to be'", statement: "With 'I' we use 'am': 'I am from ...'." },
            ],
            steps: [
              { reasoning: "The correct word is 'am'.", marks: 1, markCode: "M" },
              { reasoning: "The full sentence is 'I am from Brazil.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I am from Brazil.",
            commonErrors: ["Writing 'I is from Brazil' — 'is' is not used with 'I'."],
          },
        },
      ],
    },
    {
      id: "langab-u1-personal-info",
      title: "Personal information",
      skill: "Ask and answer questions about age, where someone lives, what they do and what they like.",
      lesson: {
        sections: [
          {
            heading: "Questions with what, where, how old",
            body: "Useful question words: **What** for things (What is your name?), **Where** for places (Where do you live?), **How old** for age (How old are you?). Begin answers with **I am** for facts about yourself: \"I am twelve years old.\"",
          },
          {
            heading: "Likes and dislikes",
            body: "Use **I like** and **I don't like** followed by a noun or activity: \"I like music.\" / \"I don't like homework.\" Ask others with **Do you like ...?** Answer with **Yes, I do** or **No, I don't**.",
          },
          {
            heading: "Numbers for personal details",
            body: "Age needs numbers: one, two, ... twenty. Practise counting to twenty so you can answer \"How old are you?\" without hesitation. Phone numbers and addresses also use numbers, so counting aloud is a key skill.",
          },
        ],
        keyFormulas: [
          { name: "Asking personal questions", statement: "What is your name? / Where do you live? / How old are you? / Do you like ...?" },
          { name: "Answering about likes", statement: "Do you like music? -> Yes, I do. / No, I don't." },
        ],
        workedExample: {
          problem: "Answer the question: Do you like sport?",
          solution: "Yes, I do. I like football. (or) No, I don't. I like music.",
        },
      },
      questions: [
        {
          id: "langab-u1-l11q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do you ask someone their age?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How old are you?" },
              { id: "b", text: "Do you like school?" },
              { id: "c", text: "Where are you?" },
              { id: "d", text: "What is your name?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question words", statement: "How old asks about age; where asks about place; what asks about things." },
            ],
            steps: [
              { reasoning: "\"How old are you?\" is the fixed question for age.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** How old are you?",
            commonErrors: ["Using \"How are you?\" to ask age — that asks about health or feelings."],
          },
        },
        {
          id: "langab-u1-l11q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Answer these three questions about yourself in full sentences: What is your name? Where do you live? What do you like?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Full-sentence answers", statement: "Each answer should be a complete sentence beginning with I am, I live or I like." },
            ],
            steps: [
              { reasoning: "Question 1 (name): \"My name is ...\" or \"I am ...\"", marks: 1, markCode: "M" },
              { reasoning: "Question 2 (where you live): \"I live in ...\" or \"I am from ...\"", marks: 1, markCode: "M" },
              { reasoning: "Question 3 (one thing you like): \"I like ...\" with correct word order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Name, place and one like, each in a full sentence.",
          },
        },
        {
          id: "langab-u1-l11q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the note and answer the questions about it.",
          extract: {
            title: "About me",
            author: "Written for Akademik Space",
            text: "Hi! My name is Tom. I am thirteen years old. I live in London with my family. I like football and music. I don't like homework.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scanning a text", statement: "Find the exact detail in the text before writing the answer." },
            ],
            steps: [
              { reasoning: "Tom is thirteen — find the number in the text.", marks: 1, markCode: "M" },
              { reasoning: "He lives in London with his family.", marks: 1, markCode: "M" },
              { reasoning: "He likes football and music, but not homework.", marks: 1, markCode: "A" },
              { reasoning: "All three answers are taken directly and correctly from the text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Thirteen; London; football and music (not homework).",
            commonErrors: ["Copying words without answering in a full sentence."],
          },
        },
        {
          id: "langab-u1-l11q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short 'about me' card for a language exchange partner.",
          parts: [
            { label: "a", prompt: "Greet your partner and give your name and age.", marks: 2 },
            { label: "b", prompt: "Say where you live and one thing you like.", marks: 2 },
            { label: "c", prompt: "Ask your partner one question.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Personal card", statement: "A personal card combines greeting, facts about yourself and one question." },
            ],
            steps: [
              { part: "a", reasoning: "Greeting plus name and age in simple sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Where you live plus one like, both correct.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct question, e.g. \"Where are you from?\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hello + name + age. (b) Home town + one like. (c) One question.",
            commonErrors: ["Writing a list instead of sentences."],
          },
        },
        {
          id: "langab-u1-l11q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do you ask someone where they live?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is your name?" },
              { id: "b", text: "How old are you?" },
              { id: "c", text: "Where do you live?" },
              { id: "d", text: "Do you like school?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question words", statement: "Where asks about place; 'Where do you live?' asks about someone's home." },
            ],
            steps: [
              { reasoning: "'Where do you live?' is the fixed question for home.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Where do you live?",
            commonErrors: ["Confusing 'Where do you live?' (home) with 'Where are you from?' (origin)."],
          },
        },
        {
          id: "langab-u1-l11q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the correct answer to 'How old are you?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am twelve years old." },
              { id: "b", text: "I like music." },
              { id: "c", text: "I am from Spain." },
              { id: "d", text: "My name is Ana." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Age answers", statement: "Age is answered with 'I am ... years old' using a number." },
            ],
            steps: [
              { reasoning: "Only choice (b) gives an age with a number.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** I am twelve years old.",
            commonErrors: ["Answering with a country or a like instead of a number."],
          },
        },
        {
          id: "langab-u1-l11q23",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences about yourself: your name, your age and where you live.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Personal facts", statement: "Each personal fact is given in its own full sentence." },
            ],
            steps: [
              { reasoning: "Name given correctly, e.g. 'My name is ...' or 'I am ...'", marks: 1, markCode: "M" },
              { reasoning: "Age given correctly, e.g. 'I am ... years old.'", marks: 1, markCode: "M" },
              { reasoning: "Home given correctly, e.g. 'I live in ...'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Name + age + home, each in a full sentence.",
            commonErrors: ["Writing 'I live twelve years old' — mixing age and home."],
          },
        },
        {
          id: "langab-u1-l11q24",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the correct answer to 'Do you like music?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, I like." },
              { id: "b", text: "I do like yes." },
              { id: "c", text: "Yes, I do." },
              { id: "d", text: "Yes, I am." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Do-support answers", statement: "Questions with 'do' are answered with 'Yes, I do' or 'No, I don't'." },
            ],
            steps: [
              { reasoning: "'Do you like ...?' takes 'do' in the answer.", marks: 1, markCode: "M" },
              { reasoning: "'Yes, I am' would answer a 'be' question, not a 'do' question.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Yes, I do.",
            commonErrors: ["Answering 'Yes, I am' — 'am' belongs to 'be' questions only."],
          },
        },
        {
          id: "langab-u1-l11q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the note and answer the two questions about it.",
          extract: {
            title: "About my friend",
            author: "Written for Akademik Space",
            text: "This is my friend Ben. He is eleven years old. He lives in Rome. He likes computers and he doesn't like homework.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scanning a text", statement: "Find the exact detail in the text before writing the answer." },
            ],
            steps: [
              { reasoning: "Ben is eleven — the age is in the second sentence.", marks: 1, markCode: "M" },
              { reasoning: "He lives in Rome — the home is in the third sentence.", marks: 1, markCode: "M" },
              { reasoning: "He likes computers, not homework — found in the last sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Eleven; Rome; computers (not homework).",
            commonErrors: ["Giving Ben's age as the friend's age without checking the text."],
          },
        },
        {
          id: "langab-u1-l11q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which sentence about likes is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I football like." },
              { id: "b", text: "Football like I." },
              { id: "c", text: "I like football." },
              { id: "d", text: "Like I football." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word order with 'like'", statement: "In simple sentences the order is subject + verb + object: 'I like football.'" },
            ],
            steps: [
              { reasoning: "Only 'I like football.' follows subject-verb-object order.", marks: 1, markCode: "M" },
              { reasoning: "The other options put the verb or subject in the wrong place.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** I like football.",
            commonErrors: ["Putting the verb after the noun, as in many other languages."],
          },
        },
        {
          id: "langab-u1-l11q27",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short description of your best friend for a class 'about us' page.",
          parts: [
            { label: "a", prompt: "Give your friend's name and age.", marks: 2 },
            { label: "b", prompt: "Say where your friend lives.", marks: 1 },
            { label: "c", prompt: "Say one thing your friend likes.", marks: 1 },
            { label: "d", prompt: "End with one question for the reader.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Describing someone", statement: "A short description gives name, age, home, one like and can end with a question." },
            ],
            steps: [
              { part: "a", reasoning: "Name and age in correct sentences, e.g. 'Her name is ... She is ... years old.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Home given correctly, e.g. 'She lives in ...'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One correct like sentence, e.g. 'She likes ...'", marks: 1, markCode: "M" },
              { part: "d", reasoning: "One correct question, e.g. 'Do you like ...?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Name + age. (b) Home. (c) One like. (d) One question.",
            commonErrors: ["Using 'I' for the friend instead of 'he' or 'she'."],
          },
        },
        {
          id: "langab-u1-l11q28",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your teacher asks 'Where do you live?' Write a polite answer and add one more fact about yourself.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extending answers", statement: "A full answer gives the asked detail plus one extra personal fact." },
            ],
            steps: [
              { reasoning: "The home is answered in a full sentence, e.g. 'I live in ...'", marks: 1, markCode: "M" },
              { reasoning: "One extra correct fact is added, e.g. 'I am from ...' or 'I like ...'", marks: 1, markCode: "M" },
              { reasoning: "Both sentences use correct word order and 'I'.", marks: 1, markCode: "A" },
              { reasoning: "The tone is polite and appropriate for a teacher.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I live in ... . I am from ... . (or another correct fact.)",
            commonErrors: ["Answering with only a city name, e.g. 'Paris.'"],
          },
        },
        {
          id: "langab-u1-l11q29",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which question is correct English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where are you live?" },
              { id: "b", text: "Where you live?" },
              { id: "c", text: "Where do you live?" },
              { id: "d", text: "Where does you live?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question formation", statement: "With 'you' the question uses 'do': 'Where do you live?'" },
            ],
            steps: [
              { reasoning: "'You' takes 'do', not 'does' or 'are', in this question.", marks: 1, markCode: "M" },
              { reasoning: "'Does' is only for he, she or it; 'are' cannot be followed by 'live' here.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Where do you live?",
            commonErrors: ["Using 'does' with 'you' — 'does' is for he/she/it."],
          },
        },
        {
          id: "langab-u1-l11q30",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write your profile for the school website 'Meet our students' page.",
          parts: [
            { label: "a", prompt: "Greet readers and give your name.", marks: 2 },
            { label: "b", prompt: "Give your age and where you live.", marks: 2 },
            { label: "c", prompt: "Say two things you like.", marks: 1 },
            { label: "d", prompt: "Ask readers one question.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Profile writing", statement: "A profile combines greeting, personal facts, likes and a question in full sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Greeting plus name in correct sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Age and home both correct, e.g. 'I am ... years old. I live in ...'", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two correct like sentences, e.g. 'I like ... and I like ...'", marks: 1, markCode: "M" },
              { part: "d", reasoning: "One correct question, e.g. 'Do you like ...?'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Greeting + name. (b) Age + home. (c) Two likes. (d) One question.",
            commonErrors: ["Writing a bullet list instead of sentences."],
          },
        },
        {
          id: "langab-u1-l11q31",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Complete the sentence: 'I ___ like homework.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negative 'don't like'", statement: "To say you do not like something, use 'I don't like ...'." },
            ],
            steps: [
              { reasoning: "The correct word is 'don't'.", marks: 1, markCode: "M" },
              { reasoning: "The full sentence is 'I don't like homework.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I don't like homework.",
            commonErrors: ["Writing 'I not like' — English needs 'don't'."],
          },
        },
        {
          id: "langab-u1-l11q32",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite these words as three correct sentences about yourself: name / Ana / twelve / like / music / live / Madrid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence building", statement: "Words are arranged into subject-verb-object sentences using 'I am', 'I like' and 'I live'." },
            ],
            steps: [
              { reasoning: "Name sentence: 'My name is Ana.' or 'I am Ana.'", marks: 1, markCode: "M" },
              { reasoning: "Age sentence: 'I am twelve years old.'", marks: 1, markCode: "M" },
              { reasoning: "Like sentence: 'I like music.'", marks: 1, markCode: "M" },
              { reasoning: "Home sentence: 'I live in Madrid.' — all four sentences correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "My name is Ana. I am twelve years old. I like music. I live in Madrid.",
            commonErrors: ["Leaving out 'years old' after the number."],
          },
        },
      ],
    },
  ],
};

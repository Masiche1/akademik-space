import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "langab-u5-lesson-5-1",
  code: "5-1",
  title: "Writing short messages and emails",
  goal: "I CAN write short messages and emails for everyday situations with correct structure.",
  standards: ["Writing", "Vocabulary", "Reading"],
  vocabulary: [
    { term: "Message", definition: "A short written note to someone." },
    {
      term: "Email",
      definition: "An electronic message sent over the internet.",
    },
    {
      term: "Greeting",
      definition: "The opening words of a message, e.g. Hi or Dear.",
    },
    { term: "Subject", definition: "One line saying what the email is about." },
    {
      term: "Ending",
      definition: "The closing words, e.g. Thanks or See you.",
    },
    {
      term: "Informal",
      definition: "Friendly, relaxed writing used with friends and family.",
    },
  ],
  concepts: [
    {
      id: "langab-u5-messages",
      title: "Short messages",
      skill: "Write short messages with greeting, body and ending.",
      lesson: {
        sections: [
          {
            heading: "Message structure",
            body: "A message has three parts: **greeting** (Hi Sam, / Dear Mr Lee,), the **message** (what you want to say), and **ending** (Thanks, / See you, / Love,). Keep it short — two or three sentences are enough.",
          },
          {
            heading: "Common message situations",
            body: 'Use messages for: cannot come, asking a question, giving news, inviting someone. Examples: "Sorry, I can\'t come on Saturday." / "Are you free on Sunday?" / "My exam is on Monday."',
          },
          {
            heading: "Tone and style",
            body: "With friends use informal words: **Hi**, **Thanks**, **See you**, **Love**. With teachers or adults use **Dear**, **Best wishes**, **Thank you**. Match your tone to the person.",
          },
        ],
        keyFormulas: [
          { name: "Message parts", statement: "Greeting + message + ending." },
          {
            name: "Informal endings",
            statement: "Thanks / See you / Love / Best wishes.",
          },
        ],
        workedExample: {
          problem: "Write a message to a friend saying you are late.",
          solution: "Hi Ana, Sorry, I am late. See you soon! Tom",
        },
      },
      questions: [
        {
          id: "langab-u5-l51q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the correct order for a message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending + message + greeting" },
              { id: "b", text: "Greeting + message + ending" },
              { id: "c", text: "Message + greeting + ending" },
              { id: "d", text: "Ending + greeting + message" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Message order",
                statement: "Greeting first, message middle, ending last.",
              },
            ],
            steps: [
              {
                reasoning: "Greeting + message + ending is correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Greeting + message + ending",
            commonErrors: ["Putting the ending first."],
          },
        },
        {
          id: "langab-u5-l51q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a three-line message to a friend: you cannot come to their party.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Short message writing",
                statement: "Greeting + reason + ending.",
              },
            ],
            steps: [
              { reasoning: "Greeting line.", marks: 1, markCode: "M" },
              {
                reasoning: "Message line with the reason.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Polite ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hi ..., / Sorry, I can't come... / See you soon!",
            commonErrors: ["Missing the ending."],
          },
        },
        {
          id: "langab-u5-l51q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the message and answer the questions.",
          extract: {
            title: "Message from a friend",
            author: "Written for Akademik Space",
            text: "Hi Tom,\nSorry, I can't come to the cinema on Friday. I have to visit my grandmother.\nSee you on Saturday!\nLove,\nAnna",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Message comprehension",
                statement: "Find the greeting, the message and the ending.",
              },
            ],
            steps: [
              {
                reasoning: "Anna cannot come to the cinema on Friday.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The reason is visiting her grandmother.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "She suggests meeting on Saturday instead.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "Can't come Friday; visiting grandmother; meet Saturday.",
            commonErrors: ["Missing the alternative day."],
          },
        },
        {
          id: "langab-u5-l51q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a message inviting a friend to your birthday party.",
          parts: [
            {
              label: "a",
              prompt: "Greeting with the friend's name.",
              marks: 1,
            },
            { label: "b", prompt: "Message: what, when and where.", marks: 2 },
            { label: "c", prompt: "Ending asking them to reply.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Invitation message",
                statement: "Greeting + event details + reply request + ending.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greeting with name.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "What, when and where all given.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Ending asks for a reply, friendly tone.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Hi + name. (b) Event details. (c) Reply request.",
            commonErrors: ["No reply request or no ending."],
          },
        },
        {
          id: "langab-u5-l51q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which greeting is best for a short message to a close friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dear Sir or Madam" },
              { id: "b", text: "Hi Sam" },
              { id: "c", text: "To whom it may concern" },
              { id: "d", text: "Yours faithfully" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Greetings by relationship",
                statement: "Friends get Hi; formal contacts get Dear.",
              },
            ],
            steps: [
              {
                reasoning: "Friends use informal greetings like Hi.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Hi Sam",
            commonErrors: ["Using a formal greeting with a friend."],
          },
        },
        {
          id: "langab-u5-l51q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which ending is most suitable for a message to your teacher?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Love," },
              { id: "b", text: "See ya!" },
              { id: "c", text: "Best wishes," },
              { id: "d", text: "Bye bye" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Endings by relationship",
                statement:
                  "Teachers and adults get polite endings like Best wishes.",
              },
            ],
            steps: [
              {
                reasoning: "Best wishes is polite for a teacher.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Best wishes,",
            commonErrors: ["Using an informal ending with a teacher."],
          },
        },
        {
          id: "langab-u5-l51q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the message and choose the best answer. Message: 'Hi Lee, Sorry, I am sick today and cannot come to English class. I will do my homework tomorrow. See you soon! Max'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To invite Lee to a party" },
              {
                id: "b",
                text: "To say Max cannot come to class and give a reason",
              },
              { id: "c", text: "To ask for homework help" },
              { id: "d", text: "To say goodbye for the last time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Message purpose",
                statement: "Identify why the writer sent the message.",
              },
            ],
            steps: [
              {
                reasoning: "Max says he is sick and cannot come to class.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "He gives a reason and promises to do homework tomorrow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** To say Max cannot come to class and give a reason",
            commonErrors: ["Confusing the reason with the purpose."],
          },
        },
        {
          id: "langab-u5-l51q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which part is missing from this message? 'Sorry, I cannot come to the party on Saturday. See you soon!'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending" },
              { id: "b", text: "The greeting" },
              { id: "c", text: "The subject line" },
              { id: "d", text: "The signature only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Message parts",
                statement: "A message needs a greeting, a body and an ending.",
              },
            ],
            steps: [
              {
                reasoning: "The body and ending are present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "There is no Hi or Dear at the start.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The greeting",
            commonErrors: [
              "Thinking the signature is missing instead of the greeting.",
            ],
          },
        },
        {
          id: "langab-u5-l51q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "You are writing a message to your grandmother. Which tone is best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very formal office language" },
              { id: "b", text: "Friendly but polite" },
              { id: "c", text: "Slang and jokes only" },
              { id: "d", text: "No greeting at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Tone matching",
                statement:
                  "Match tone to the person: warm and polite for family.",
              },
            ],
            steps: [
              {
                reasoning: "Grandmothers need friendly, polite language.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Office language or slang would be wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Friendly but polite",
            commonErrors: ["Using slang with an older family member."],
          },
        },
        {
          id: "langab-u5-l51q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which is the best rewrite of 'Hi, cant come sat, busy' for a friend?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Dear Sir or Madam, I regret to inform you that I will be unable to attend.",
              },
              {
                id: "b",
                text: "Hi Sam, Sorry, I can't come on Saturday because I am busy. See you soon!",
              },
              { id: "c", text: "To whom it may concern." },
              { id: "d", text: "I am writing to confirm my attendance." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register control",
                statement:
                  "Keep informal tone for friends but use correct English.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The rewrite keeps Hi and See you but fixes spelling and grammar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Options (a), (c) and (d) are too formal for a friend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Hi Sam, Sorry, I can't come on Saturday because I am busy. See you soon!",
            commonErrors: ["Making the message too formal for a friend."],
          },
        },
        {
          id: "langab-u5-l51q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a short message to a friend asking if they are free on Sunday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Message structure",
                statement: "Greeting + clear question + friendly ending.",
              },
            ],
            steps: [
              {
                reasoning: "Greeting with the friend's name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A clear question about Sunday.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "A friendly ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hi ..., Are you free on Sunday? ..., See you!",
            commonErrors: ["Forgetting the question or the ending."],
          },
        },
        {
          id: "langab-u5-l51q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a short message to your sister telling her that your exam is on Monday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Giving news",
                statement: "Greeting + news sentence + friendly ending.",
              },
            ],
            steps: [
              { reasoning: "Greeting with name.", marks: 1, markCode: "M" },
              {
                reasoning: "Clear sentence giving the news about Monday.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Friendly ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hi ..., My exam is on Monday. ..., Love!",
            commonErrors: ["Not mentioning the day of the exam."],
          },
        },
        {
          id: "langab-u5-l51q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a message to your teacher saying you will be late tomorrow because the bus is late.",
          parts: [
            {
              label: "a",
              prompt: "A formal greeting with the teacher's title.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Two sentences giving the reason for being late.",
              marks: 2,
            },
            { label: "c", prompt: "A polite ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Message to a teacher",
                statement: "Formal greeting + reason + polite ending.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Dear Mr/Ms ... used.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two correct sentences explain the late bus.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Polite ending such as Thank you or Best wishes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dear + title. (b) Reason sentences. (c) Polite ending.",
            commonErrors: ["Using Hi or Love with a teacher."],
          },
        },
        {
          id: "langab-u5-l51q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite this message so it is suitable for a teacher: 'Hi, cant come fri, see u'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register change",
                statement: "Turn informal texting into correct polite English.",
              },
            ],
            steps: [
              {
                reasoning: "Formal greeting: Dear Mr/Ms ...",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Complete sentences: cannot come on Friday + reason.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "Polite ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dear ..., I cannot come on Friday because ... . Thank you / Best wishes.",
            commonErrors: ["Keeping slang like 'cant' or 'see u'."],
          },
        },
        {
          id: "langab-u5-l51q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a message apologising to a friend for being late to meet them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Apology message",
                statement: "Greeting + apology + reason + friendly ending.",
              },
            ],
            steps: [
              {
                reasoning: "Greeting with the friend's name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A clear apology for being late.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A reason or explanation.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "A friendly ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hi ..., Sorry I'm late because ... . See you soon!",
            commonErrors: ["No apology or no reason given."],
          },
        },
        {
          id: "langab-u5-l51q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a message to a classmate with two pieces of news: the school trip is on Friday, and you need to bring a permission form.",
          parts: [
            {
              label: "a",
              prompt: "Greeting and the first piece of news.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The second piece of news and the request to bring the form.",
              marks: 2,
            },
            { label: "c", prompt: "A friendly ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-news message",
                statement:
                  "Cover both pieces of news clearly in short sentences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greeting plus correct news about Friday.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct news about the form plus a clear request.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Friendly ending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Greeting + Friday news. (b) Form news + request. (c) Ending.",
            commonErrors: ["Only one piece of news included."],
          },
        },
      ],
    },
    {
      id: "langab-u5-emails",
      title: "Simple emails",
      skill: "Write simple emails with headers, greeting, body and ending.",
      lesson: {
        sections: [
          {
            heading: "Email structure",
            body: "An email has headers: **To**, **From**, **Subject**. Then the body: **greeting** (Dear ... / Hi ...), the **message**, and **ending** (Best wishes / Thank you). The subject tells the reader what the email is about.",
          },
          {
            heading: "Writing the body",
            body: 'Keep emails short: say why you write, give the information, ask any question, and end politely. Example: "Dear Mr Smith, Thank you for your email. I cannot come to the meeting on Monday because I am sick. I am sorry! Best wishes, Anna"',
          },
          {
            heading: "Formal vs informal",
            body: "Teachers, doctors and offices use **Dear Mr/Ms ...** and **Best wishes/Yours faithfully**. Friends use **Hi** and **Thanks/See you**. Match your style to the person you write to.",
          },
        ],
        keyFormulas: [
          {
            name: "Email parts",
            statement: "To / From / Subject / Greeting / Body / Ending.",
          },
          {
            name: "Subject lines",
            statement:
              "Short and clear: 'Meeting on Monday', 'Question about homework'.",
          },
        ],
        workedExample: {
          problem:
            "Write a subject line for an email about asking for help with homework.",
          solution: "Question about homework",
        },
      },
      questions: [
        {
          id: "langab-u5-l51q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the subject line of an email for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To say who sent it" },
              { id: "b", text: "To say what the email is about" },
              { id: "c", text: "To end the email" },
              { id: "d", text: "To greet the reader" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subject line",
                statement: "The subject tells what the email is about.",
              },
            ],
            steps: [
              {
                reasoning: "Subject = topic of the email.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** To say what the email is about",
            commonErrors: ["Writing a full sentence as the subject."],
          },
        },
        {
          id: "langab-u5-l51q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the three email header lines (To, From, Subject) for an email to your teacher about a school trip.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Email headers",
                statement: "To, From and Subject must all be present.",
              },
            ],
            steps: [
              { reasoning: "To: teacher's name.", marks: 1, markCode: "M" },
              { reasoning: "From: student's name.", marks: 1, markCode: "M" },
              {
                reasoning: "Subject: short topic about the trip.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "To: Mr/Ms ... / From: ... / Subject: School trip",
            commonErrors: ["Missing one of the three lines."],
          },
        },
        {
          id: "langab-u5-l51q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the email and answer the questions.",
          extract: {
            title: "Email from a language school",
            author: "Written for Akademik Space",
            text: "To: students\nFrom: Language School Office\nSubject: New course dates\nDear students,\nOur new course starts on Monday, the third of February. Classes are on Tuesday and Thursday at six o'clock.\nBest wishes,\nThe Language School",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Email comprehension",
                statement: "Read headers, find dates and times in the body.",
              },
            ],
            steps: [
              {
                reasoning: "The course starts Monday, the third of February.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Classes are Tuesday and Thursday.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Classes start at six o'clock.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Starts 3 Feb; Tue + Thu; 6 o'clock.",
            commonErrors: ["Missing a day or the time."],
          },
        },
        {
          id: "langab-u5-l51q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write an email to your teacher asking for extra homework help.",
          parts: [
            { label: "a", prompt: "Write To, From and Subject.", marks: 1 },
            {
              label: "b",
              prompt: "Greeting and one sentence saying why you write.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "One question and a polite ending.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Request email",
                statement:
                  "Headers + greeting + reason + question + polite ending.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "All three headers present.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Greeting plus clear reason.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Question plus polite ending.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Headers. (b) Greeting + reason. (c) Question + ending.",
            commonErrors: ["Forgetting the question or ending."],
          },
        },
        {
          id: "langab-u5-l51q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which email header tells the reader what the email is about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To" },
              { id: "b", text: "Subject" },
              { id: "c", text: "From" },
              { id: "d", text: "Date" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Email headers",
                statement: "Subject = topic; To = receiver; From = sender.",
              },
            ],
            steps: [
              {
                reasoning: "The subject line gives the topic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Subject",
            commonErrors: ["Confusing To with Subject."],
          },
        },
        {
          id: "langab-u5-l51q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the best subject line for an email asking your teacher a question about homework?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hi teacher" },
              { id: "b", text: "Homework" },
              { id: "c", text: "Question about my homework" },
              { id: "d", text: "I need help please please please" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Subject lines",
                statement: "Short, clear and specific.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The subject should be short and say exactly what the email is about.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Question about my homework",
            commonErrors: ["Writing a greeting or a long plea as the subject."],
          },
        },
        {
          id: "langab-u5-l51q23",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which ending is best for a formal email to a doctor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Love you!" },
              { id: "b", text: "See ya!" },
              { id: "c", text: "Yours faithfully" },
              { id: "d", text: "Cheers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal endings",
                statement: "Doctors and offices need polite formal endings.",
              },
            ],
            steps: [
              {
                reasoning: "A doctor is a formal contact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only Yours faithfully is formal and polite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Yours faithfully",
            commonErrors: ["Using informal endings with professionals."],
          },
        },
        {
          id: "langab-u5-l51q24",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the correct order for an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To/From/Subject, greeting, body, ending" },
              { id: "b", text: "Greeting, subject, body, ending" },
              { id: "c", text: "Body, greeting, subject, ending" },
              { id: "d", text: "Ending, body, greeting, subject" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Email structure",
                statement: "Headers first, then greeting, body and ending.",
              },
            ],
            steps: [
              {
                reasoning: "Headers come before everything else.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Greeting opens the body; ending closes it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** To/From/Subject, greeting, body, ending",
            commonErrors: ["Putting the greeting before the headers."],
          },
        },
        {
          id: "langab-u5-l51q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "You need to tell your whole class that the trip is cancelled. Which is the best choice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A note on the fridge" },
              { id: "b", text: "An email to the class" },
              { id: "c", text: "A shopping list" },
              { id: "d", text: "A form" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Choosing the document",
                statement: "Emails reach many people and suit announcements.",
              },
            ],
            steps: [
              {
                reasoning: "A class announcement needs to reach everyone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Email is the right tool; the others do not fit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** An email to the class",
            commonErrors: ["Choosing a private note for a group message."],
          },
        },
        {
          id: "langab-u5-l51q26",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which subject line is best for an email about a changed meeting time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meeting" },
              { id: "b", text: "Time" },
              { id: "c", text: "Meeting moved to Thursday at 3pm" },
              { id: "d", text: "Hello" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Effective subject lines",
                statement: "Specific subjects tell the reader the key news.",
              },
            ],
            steps: [
              {
                reasoning: "The subject should include the important change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "'Meeting' and 'Time' are too vague; 'Hello' says nothing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Meeting moved to Thursday at 3pm",
            commonErrors: ["Choosing a one-word subject that hides the news."],
          },
        },
        {
          id: "langab-u5-l51q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write a subject line and a greeting for an email to your school asking about the library opening time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Email opening",
                statement: "Subject = topic; greeting = polite opening.",
              },
            ],
            steps: [
              {
                reasoning: "Subject mentions the library or opening time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Greeting such as Dear Sir/Madam or Dear School.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct punctuation and format.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Subject: Library opening time / Dear Sir or Madam,",
            commonErrors: ["Writing a full sentence as the subject."],
          },
        },
        {
          id: "langab-u5-l51q28",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the To, From and Subject lines for an email to your doctor saying you are sick and cannot come to an appointment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Email headers",
                statement: "All three headers must be present and clear.",
              },
            ],
            steps: [
              {
                reasoning: "To: the doctor's name or surgery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "From: the student's name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subject mentions the missed appointment or sickness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "To: Dr ... / From: ... / Subject: Missed appointment",
            commonErrors: ["Missing the Subject line."],
          },
        },
        {
          id: "langab-u5-l51q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short email confirming that you will attend the sports day on Saturday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Confirmation email",
                statement: "Greeting + clear confirmation + polite ending.",
              },
            ],
            steps: [
              {
                reasoning: "Greeting and a sentence saying you will attend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Details: sports day on Saturday.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "Polite ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dear ..., I will attend the sports day on Saturday. ... Best wishes.",
            commonErrors: ["Not mentioning the day or event clearly."],
          },
        },
        {
          id: "langab-u5-l51q30",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write an email to the school office asking for your timetable.",
          parts: [
            { label: "a", prompt: "Write To, From and Subject.", marks: 1 },
            {
              label: "b",
              prompt: "Greeting and a polite request for the timetable.",
              marks: 2,
            },
            { label: "c", prompt: "A polite ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Request email",
                statement:
                  "Headers + greeting + clear request + polite ending.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "All three headers present.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Greeting plus a clear, polite request.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Polite ending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Headers. (b) Greeting + request. (c) Ending.",
            commonErrors: ["Request is unclear or too informal."],
          },
        },
        {
          id: "langab-u5-l51q31",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write an email to a friend telling them about your new hobby.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Informal email",
                statement:
                  "Subject + greeting + news + question + friendly ending.",
              },
            ],
            steps: [
              {
                reasoning: "Subject line and greeting present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two sentences about the new hobby.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "A question or invitation to reply.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Friendly informal ending.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Subject + greeting + hobby details + question + ending.",
            commonErrors: ["Too formal for a friend or no ending."],
          },
        },
        {
          id: "langab-u5-l51q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a formal email to a sports club asking to join their football team.",
          parts: [
            {
              label: "a",
              prompt: "Write To, From, Subject and a formal greeting.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Two sentences making the request and giving a reason.",
              marks: 2,
            },
            { label: "c", prompt: "A polite ending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal request email",
                statement:
                  "Headers + Dear ... + clear request + reason + formal ending.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "All headers plus Dear Sir/Madam or club name.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear request to join plus a reason.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Formal polite ending such as Yours faithfully.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Headers + formal greeting. (b) Request + reason. (c) Formal ending.",
            commonErrors: ["Informal greeting in a formal email."],
          },
        },
      ],
    },
  ],
};

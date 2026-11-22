import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "langab-u3-lesson-3-2",
  code: "3-2",
  title: "Responding appropriately in conversation",
  goal: "I CAN respond appropriately in simple conversations, showing interest and keeping the exchange polite.",
  standards: ["Speaking", "Listening", "Vocabulary"],
  vocabulary: [
    { term: "Conversation", definition: "A spoken exchange between two or more people." },
    { term: "Response", definition: "What you say back to someone." },
    { term: "Interesting", definition: "Something that holds your attention." },
    { term: "Really?", definition: "A short phrase showing surprise or interest." },
    { term: "I see", definition: "A phrase showing you understand what was said." },
    { term: "And you?", definition: "A phrase that turns a question back to the speaker." },
  ],
  concepts: [
    {
      id: "langab-u3-conversation-basics",
      title: "Keeping a conversation going",
      skill: "Use short reactions and follow-up questions to keep a simple conversation going.",
      lesson: {
        sections: [
          {
            heading: "Reactions",
            body: "Show you are listening with short reactions: **Really?**, **I see**, **That's interesting**, **Oh!**, **Wow!**. These words encourage the speaker to continue. Do not just say \"yes\" every time.",
          },
          {
            heading: "Follow-up questions",
            body: "Ask a question back to keep the conversation alive: \"Where do you live?\" -> \"I live in Berlin. And you?\" or \"What do you do at the weekend?\" Simple follow-ups show interest.",
          },
          {
            heading: "Turn-taking",
            body: "Conversation is a turn — speak, then listen. Do not interrupt. If you want to speak, wait for a pause or say **Excuse me**. It is normal to pause and think; good listeners give the speaker time.",
          },
        ],
        keyFormulas: [
          { name: "Reactions", statement: "Really? / I see / That's interesting / Wow!" },
          { name: "Turn-back", statement: "Statement + And you? / What about you?" },
        ],
        workedExample: {
          problem: "Your friend says: \"I went to the beach yesterday.\" Respond with a reaction and a question.",
          solution: "Really? Was it hot? / That's interesting. Did you swim?",
        },
      },
      questions: [
        {
          id: "langab-u3-l32q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Someone says \"I like football.\" Which response shows interest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Goodbye." },
              { id: "b", text: "OK." },
              { id: "c", text: "Really? Which team?" },
              { id: "d", text: "I don't know." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responsive listening", statement: "Reactions plus a follow-up question show real interest." },
            ],
            steps: [
              { reasoning: "\"Really? Which team?\" reacts and asks a follow-up.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Really? Which team?",
            commonErrors: ["Answering with a flat 'OK' and stopping."],
          },
        },
        {
          id: "langab-u3-l32q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three short reactions you can use in a conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conversation reactions", statement: "Short, natural phrases that show listening." },
            ],
            steps: [
              { reasoning: "Any three correct reactions, e.g. Really?, I see, That's interesting.", marks: 2, markCode: "M" },
              { reasoning: "All three are appropriate for conversation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Really? / I see / That's interesting / Wow! / Oh! (any three).",
            commonErrors: ["Using long formal phrases that do not sound natural."],
          },
        },
        {
          id: "langab-u3-l32q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the dialogue and write what Person B should say next (a reaction plus a question).",
          extract: {
            title: "Talking about holidays",
            author: "Written for Akademik Space",
            text: "A: I went to Spain in the summer.\nB: ...\nA: Yes, it was very hot and we went to the beach every day.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Follow-up in dialogue", statement: "A good response reacts to the news and asks something related." },
            ],
            steps: [
              { reasoning: "A reaction such as \"Really?\" or \"That's great!\"", marks: 1, markCode: "M" },
              { reasoning: "A related follow-up question, e.g. \"Did you like it?\" or \"Where in Spain?\"", marks: 1, markCode: "M" },
              { reasoning: "The response is natural and appropriate.", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation and tone.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Really? Did you like it? / Oh, that's great! Where did you go?",
            commonErrors: ["Changing the subject completely."],
          },
        },
        {
          id: "langab-u3-l32q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short conversation (six lines) about your favourite food.",
          parts: [
            { label: "a", prompt: "Lines 1-2: Person A says a fact, Person B reacts.", marks: 1 },
            { label: "b", prompt: "Lines 3-4: Person B asks a question, Person A answers.", marks: 2 },
            { label: "c", prompt: "Lines 5-6: Person A asks back, Person B answers and closes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Six-line conversation", statement: "Alternating statements, reactions and questions." },
            ],
            steps: [
              { part: "a", reasoning: "Fact plus a suitable reaction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Question and matching full-sentence answer.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Turn-back question, answer and polite close.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Fact + reaction. (b) Q + A. (c) Q + A + close.",
            commonErrors: ["Two questions in a row without answers."],
          },
        },
        {
          id: "langab-u3-l32q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which response best shows you are listening in a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Really? That's interesting.\"" },
              { id: "b", text: "\"OK.\"" },
              { id: "c", text: "\"Whatever.\"" },
              { id: "d", text: "Silence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reactions", statement: "Short reactions show interest and encourage the speaker." },
            ],
            steps: [
              { reasoning: "\"Really? That's interesting\" is a natural reaction showing interest.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"Really? That's interesting.\"",
            commonErrors: ["Giving flat responses like \"OK\" that end the exchange."],
          },
        },
        {
          id: "langab-u3-l32q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does \"And you?\" do in a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changes the subject" },
              { id: "b", text: "Ends the conversation" },
              { id: "c", text: "Says sorry" },
              { id: "d", text: "Asks the same question back to the speaker" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Turn-back questions", statement: "\"And you?\" returns the question to keep the conversation balanced." },
            ],
            steps: [
              { reasoning: "\"And you?\" asks the speaker the same question back.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Asks the same question back to the speaker",
            commonErrors: ["Thinking it ends the conversation."],
          },
        },
        {
          id: "langab-u3-l32q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Person A says: \"I love this song.\" Which response is best?",
          extract: {
            title: "Sharing music",
            author: "Written for Akademik Space",
            text: "A: I love this song.\nB: ...",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Really? What's it called?\"" },
              { id: "b", text: "\"Be quiet.\"" },
              { id: "c", text: "\"I see.\"" },
              { id: "d", text: "\"I don't care.\"" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Follow-up questions", statement: "A reaction plus a related question keeps the conversation going." },
            ],
            steps: [
              { reasoning: "\"Really? What's it called?\" reacts and asks a follow-up.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"Really? What's it called?\"",
            commonErrors: ["Choosing a flat or rude response."],
          },
        },
        {
          id: "langab-u3-l32q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read this dialogue. Person A interrupts Person B. What should Person A do instead?",
          extract: {
            title: "Bad turn-taking",
            author: "Written for Akademik Space",
            text: "B: Yesterday I went to the...\nA: Oh! I went there too! Last week I saw a...\nB: Sorry, you were saying?",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wait for a pause, then say \"Excuse me\"" },
              { id: "b", text: "Keep talking louder" },
              { id: "c", text: "Say nothing ever again" },
              { id: "d", text: "Leave the room" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Turn-taking", statement: "Wait for a pause and signal politely before speaking." },
            ],
            steps: [
              { reasoning: "A should wait for B to finish or pause.", marks: 1, markCode: "M" },
              { reasoning: "Saying \"Excuse me\" politely signals the wish to speak.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Wait for a pause, then say \"Excuse me\"",
            commonErrors: ["Interrupting because you are excited."],
          },
        },
        {
          id: "langab-u3-l32q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The conversation goes quiet and nobody speaks. What is a polite way to join in?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shout over everyone" },
              { id: "b", text: "Talk over the other people" },
              { id: "c", text: "Leave immediately" },
              { id: "d", text: "Wait for a pause, then ask a question" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Joining a conversation", statement: "A pause plus a question is the polite way in." },
            ],
            steps: [
              { reasoning: "Wait for a natural pause, then ask something relevant.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Wait for a pause, then ask a question",
            commonErrors: ["Forcing your way in by interrupting."],
          },
        },
        {
          id: "langab-u3-l32q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is a follow-up question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Where do you live?\"" },
              { id: "b", text: "\"I am fine.\"" },
              { id: "c", text: "\"It is Monday.\"" },
              { id: "d", text: "\"Goodbye.\"" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question forms", statement: "A follow-up question asks for more information." },
            ],
            steps: [
              { reasoning: "\"Where do you live?\" is a question that continues the exchange.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"Where do you live?\"",
            commonErrors: ["Choosing a statement instead of a question."],
          },
        },
        {
          id: "langab-u3-l32q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Your friend says: \"I have a new bicycle.\" Write a reaction and a follow-up question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reaction + question", statement: "Show interest, then ask something related." },
            ],
            steps: [
              { reasoning: "A suitable reaction, e.g. \"Really?\" or \"That's great!\"", marks: 1, markCode: "M" },
              { reasoning: "A related follow-up question, e.g. \"What colour is it?\"", marks: 1, markCode: "M" },
              { reasoning: "Both parts are natural and appropriate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Really? What colour is it? / That's great! Where did you get it?",
            commonErrors: ["Asking an unrelated question."],
          },
        },
        {
          id: "langab-u3-l32q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the dialogue and write what Person B should say next.",
          extract: {
            title: "Good news",
            author: "Written for Akademik Space",
            text: "A: I got top marks in the maths test!\nB: ...\nA: Yes, I studied every evening.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Responding to news", statement: "React to the good news, then ask a related question." },
            ],
            steps: [
              { reasoning: "A reaction such as \"Wow, congratulations!\" or \"Really? That's great!\"", marks: 1, markCode: "M" },
              { reasoning: "A related follow-up question, e.g. \"Did you revise a lot?\"", marks: 1, markCode: "M" },
              { reasoning: "The response is natural and appropriate.", marks: 1, markCode: "A" },
              { reasoning: "Correct punctuation and tone.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Wow, congratulations! Did you study a lot? / Really? That's great news!",
            commonErrors: ["Changing the subject or giving no reaction."],
          },
        },
        {
          id: "langab-u3-l32q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short dialogue (four lines) about the weather today.",
          parts: [
            { label: "a", prompt: "Line 1: Person A makes a statement about the weather.", marks: 1 },
            { label: "b", prompt: "Line 2: Person B reacts and asks a question.", marks: 1 },
            { label: "c", prompt: "Line 3: Person A answers the question.", marks: 1 },
            { label: "d", prompt: "Line 4: Person B closes politely.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mini dialogue", statement: "Statement + reaction/question + answer + close." },
            ],
            steps: [
              { part: "a", reasoning: "Clear weather statement, e.g. \"It's very hot today.\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reaction plus question, e.g. \"Really? Is it sunny too?\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Full-sentence answer, e.g. \"Yes, the sun is shining.\"", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Polite close, e.g. \"Thanks, see you.\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Weather statement. (b) Reaction + Q. (c) Answer. (d) Close.",
            commonErrors: ["Two questions in a row without answers."],
          },
        },
        {
          id: "langab-u3-l32q18",
          difficulty: "core",
          totalMarks: 5,
          stem: "Continue this conversation. Person A has just said: \"I went shopping yesterday.\"",
          extract: {
            title: "Continuing a conversation",
            author: "Written for Akademik Space",
            text: "A: I went shopping yesterday.\nB: ...\nA: ...\nB: ...",
          },
          parts: [
            { label: "a", prompt: "Write Person B's first line: a reaction.", marks: 1 },
            { label: "b", prompt: "Write Person B's first line: a follow-up question.", marks: 2 },
            { label: "c", prompt: "Write Person A's answer and Person B's reaction to finish.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustaining conversation", statement: "Reaction + question + answer + reaction keeps the exchange alive." },
            ],
            steps: [
              { part: "a", reasoning: "Suitable reaction, e.g. \"Oh, really?\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Related follow-up question, e.g. \"What did you buy?\"", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A's answer plus a closing reaction, e.g. \"...and B: That sounds nice.\"", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Reaction. (b) Follow-up Q. (c) Answer + reaction.",
            commonErrors: ["Asking a question that cannot be answered from context."],
          },
        },
        {
          id: "langab-u3-l32q19",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three short reactions you can use when someone shares good news.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Positive reactions", statement: "Short phrases that show happiness for the speaker." },
            ],
            steps: [
              { reasoning: "Any three suitable reactions, e.g. Congratulations!, That's great!, Wow!", marks: 2, markCode: "M" },
              { reasoning: "All three fit the good-news situation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Congratulations! / That's great! / Wow! / How wonderful! (any three).",
            commonErrors: ["Using reactions that show sadness or boredom."],
          },
        },
        {
          id: "langab-u3-l32q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a conversation (six lines) about a film you watched.",
          parts: [
            { label: "a", prompt: "Lines 1-2: Person A names the film, Person B reacts.", marks: 1 },
            { label: "b", prompt: "Lines 3-4: Person B asks a question, Person A answers.", marks: 2 },
            { label: "c", prompt: "Lines 5-6: Person A asks back, Person B answers and closes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Six-line conversation", statement: "Alternating statements, reactions and questions about a topic." },
            ],
            steps: [
              { part: "a", reasoning: "Film named plus suitable reaction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Question and matching full-sentence answer.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Turn-back question, answer and polite close.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Film + reaction. (b) Q + A. (c) Q + A + close.",
            commonErrors: ["Forgetting the turn-back question or the closing."],
          },
        },
      ],
    },
    {
      id: "langab-u3-polite-conversation",
      title: "Polite conversation habits",
      skill: "Use polite phrases, show respect and end conversations naturally.",
      lesson: {
        sections: [
          {
            heading: "Polite openers and closers",
            body: "Start conversations with a greeting: **Hello**, **Hi**, **Good morning**. End them politely: **Thanks for chatting**, **See you**, **Have a nice day**, **Goodbye**. Politeness makes conversations pleasant.",
          },
          {
            heading: "Showing respect",
            body: "Listen when others speak. Use **please** when asking: \"Could you tell me ...? please\" Say **thank you** when someone helps you. If you disagree, be gentle: \"I see, but I think ...\" rather than \"You're wrong\".",
          },
          {
            heading: "Ending naturally",
            body: "Do not just walk away. Give a signal: \"Well, I must go now.\" or \"It was nice talking to you.\" Then say goodbye. This is polite in every culture.",
          },
        ],
        keyFormulas: [
          { name: "Polite request", statement: "Could you + verb + please? (Could you help me, please?)" },
          { name: "Ending", statement: "I must go now / It was nice talking to you + Goodbye." },
        ],
        workedExample: {
          problem: "End a conversation politely after ten minutes.",
          solution: "Well, I must go now. It was nice talking to you. See you tomorrow!",
        },
      },
      questions: [
        {
          id: "langab-u3-l32q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a polite way to end a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say nothing" },
              { id: "b", text: "Say it was nice talking and goodbye" },
              { id: "c", text: "Just stop talking" },
              { id: "d", text: "Ask another long question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conversation endings", statement: "A polite ending signals the end and says goodbye." },
            ],
            steps: [
              { reasoning: "Saying it was nice plus goodbye is the polite ending.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Say it was nice talking and goodbye",
            commonErrors: ["Ending without any closing phrase."],
          },
        },
        {
          id: "langab-u3-l32q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three polite phrases you can use when asking for help.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite requests", statement: "Could you ... please? and Can you ... please? are polite forms." },
            ],
            steps: [
              { reasoning: "Three correct polite request phrases.", marks: 2, markCode: "M" },
              { reasoning: "All include please or polite form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Could you help me, please? / Can you repeat that, please? / Could you say that again?",
            commonErrors: ["Missing 'please' or using a command like 'Tell me'."],
          },
        },
        {
          id: "langab-u3-l32q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the dialogue and improve the rude parts.",
          extract: {
            title: "A rude exchange",
            author: "Written for Akademik Space",
            text: "A: Hey, give me your pen!\nB: What?\nA: I need it for the test.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite rewriting", statement: "Replace commands with polite requests and add thanks." },
            ],
            steps: [
              { reasoning: "Replace \"give me your pen\" with \"Could you lend me your pen, please?\"", marks: 1, markCode: "M" },
              { reasoning: "Replace \"What?\" with a polite response such as \"Yes, of course.\"", marks: 1, markCode: "M" },
              { reasoning: "Add a thanks at the end: \"Thank you very much.\"", marks: 1, markCode: "A" },
              { reasoning: "The whole exchange is now polite.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A: Could you lend me your pen, please? / B: Yes, of course. / A: Thank you very much.",
            commonErrors: ["Keeping the command form."],
          },
        },
        {
          id: "langab-u3-l32q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a polite conversation ending between two friends.",
          parts: [
            { label: "a", prompt: "Person A signals it is time to go.", marks: 1 },
            { label: "b", prompt: "Person B responds politely.", marks: 1 },
            { label: "c", prompt: "Both say goodbye and one adds a plan for next time.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Natural endings", statement: "Signal + response + goodbye + future plan." },
            ],
            steps: [
              { part: "a", reasoning: "A signals leaving, e.g. \"I must go now.\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "B responds politely, e.g. \"OK, see you.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Goodbye plus a next-time plan, e.g. \"See you on Monday!\"", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) Leaving signal. (b) Polite reply. (c) Goodbye + plan.",
            commonErrors: ["No plan for next time — conversation feels unfinished."],
          },
        },
        {
          id: "langab-u3-l32q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a polite way to start a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Nothing.\"" },
              { id: "b", text: "\"Give me your bag.\"" },
              { id: "c", text: "\"Good morning, how are you?\"" },
              { id: "d", text: "\"Shut up.\"" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite openers", statement: "Greetings plus a friendly question start conversations politely." },
            ],
            steps: [
              { reasoning: "\"Good morning, how are you?\" is a polite opener.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** \"Good morning, how are you?\"",
            commonErrors: ["Starting with a command or rude phrase."],
          },
        },
        {
          id: "langab-u3-l32q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which request is the most polite?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Could you give me some water, please?\"" },
              { id: "b", text: "\"I want water now.\"" },
              { id: "c", text: "\"Give me water.\"" },
              { id: "d", text: "\"Water!\"" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite requests", statement: "\"Could you ... please?\" is the most polite request form." },
            ],
            steps: [
              { reasoning: "\"Could you ... please?\" is polite and indirect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"Could you give me some water, please?\"",
            commonErrors: ["Using commands instead of requests."],
          },
        },
        {
          id: "langab-u3-l32q23",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the rude sentence and choose the most polite rewrite.",
          extract: {
            title: "Making it polite",
            author: "Written for Akademik Space",
            text: "\"Open the window!\"",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Could you open the window, please?\"" },
              { id: "b", text: "\"I want the window open.\"" },
              { id: "c", text: "\"Open it or else.\"" },
              { id: "d", text: "\"Window, go!\"" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite rewriting", statement: "Replace commands with \"Could you ... please?\"" },
            ],
            steps: [
              { reasoning: "The polite rewrite uses \"Could you ... please?\"", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"Could you open the window, please?\"",
            commonErrors: ["Keeping the command form."],
          },
        },
        {
          id: "langab-u3-l32q24",
          difficulty: "core",
          totalMarks: 3,
          stem: "You disagree with a classmate's opinion. Which response is polite?",
          extract: {
            title: "Disagreeing politely",
            author: "Written for Akademik Space",
            text: "A: I think maths is boring.\nB: ...",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"I see, but I think it's interesting.\"" },
              { id: "b", text: "\"Shut up.\"" },
              { id: "c", text: "\"Whatever you say.\"" },
              { id: "d", text: "\"You're wrong.\"" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gentle disagreement", statement: "Acknowledge first, then give your view." },
            ],
            steps: [
              { reasoning: "\"I see, but ...\" acknowledges the other view before disagreeing.", marks: 1, markCode: "M" },
              { reasoning: "It is gentle, not rude.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"I see, but I think it's interesting.\"",
            commonErrors: ["Saying \"You're wrong\" directly."],
          },
        },
        {
          id: "langab-u3-l32q25",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Someone carries your heavy books for you. What is the best response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Thanks a lot for your help.\"" },
              { id: "b", text: "Say nothing" },
              { id: "c", text: "Ask for more books" },
              { id: "d", text: "Walk away quickly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Thanking", statement: "Always thank someone who helps you." },
            ],
            steps: [
              { reasoning: "A clear thank-you is the polite response to help.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** \"Thanks a lot for your help.\"",
            commonErrors: ["Forgetting to say thank you."],
          },
        },
        {
          id: "langab-u3-l32q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase politely signals that you must leave?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"I'm bored.\"" },
              { id: "b", text: "\"Well, I must go now.\"" },
              { id: "c", text: "\"Bye bye forever.\"" },
              { id: "d", text: "\"This is stupid.\"" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ending signals", statement: "A leaving signal prepares the other person politely." },
            ],
            steps: [
              { reasoning: "\"I must go now\" is a polite signal to end.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"Well, I must go now.\"",
            commonErrors: ["Leaving without any signal."],
          },
        },
        {
          id: "langab-u3-l32q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three polite greetings or closers you can use in conversation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Greetings and closers", statement: "Hello, Good morning, See you and Have a nice day are polite." },
            ],
            steps: [
              { reasoning: "Any three correct phrases, e.g. Hello, See you, Have a nice day.", marks: 2, markCode: "M" },
              { reasoning: "All are suitable for conversation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hello / Good morning / Hi / See you / Have a nice day / Goodbye (any three).",
            commonErrors: ["Using rude or informal openers."],
          },
        },
        {
          id: "langab-u3-l32q28",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite these rude sentences politely.",
          extract: {
            title: "Rude to polite",
            author: "Written for Akademik Space",
            text: "1. \"Give me your book.\"\n2. \"What? I said give it!\"",
          },
          parts: [
            { label: "a", prompt: "Rewrite sentence 1 politely.", marks: 1 },
            { label: "b", prompt: "Rewrite sentence 2 politely.", marks: 1 },
            { label: "c", prompt: "Add a \"thank you\" for the other person to say at the end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite rewriting", statement: "Commands become \"Could you ... please?\" requests." },
            ],
            steps: [
              { part: "a", reasoning: "e.g. \"Could you give me your book, please?\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "e.g. \"Sorry, could you repeat that, please?\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A correct thank-you phrase, e.g. \"Thank you very much.\"", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Could you give me your book, please? (b) Could you repeat that, please? (c) Thank you very much.",
            commonErrors: ["Keeping the command form."],
          },
        },
        {
          id: "langab-u3-l32q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the dialogue. Person B is leaving. Complete the ending politely.",
          extract: {
            title: "Ending a chat",
            author: "Written for Akademik Space",
            text: "A: It's been nice talking to you.\nB: ...\nA: ...",
          },
          parts: [
            { label: "a", prompt: "Write Person B's reply.", marks: 1 },
            { label: "b", prompt: "Write Person A's goodbye.", marks: 1 },
            { label: "c", prompt: "Add a plan for next time from either speaker.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Natural endings", statement: "Reply + goodbye + next-time plan finishes politely." },
            ],
            steps: [
              { part: "a", reasoning: "Polite reply, e.g. \"Yes, me too.\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Goodbye phrase, e.g. \"See you!\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Next-time plan, e.g. \"See you on Monday!\"", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Me too / Same here. (b) See you! (c) See you Monday!",
            commonErrors: ["Ending with no goodbye or plan."],
          },
        },
        {
          id: "langab-u3-l32q30",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short polite conversation where two friends ask each other for help.",
          parts: [
            { label: "a", prompt: "Person A makes a polite request.", marks: 1 },
            { label: "b", prompt: "Person B agrees politely.", marks: 1 },
            { label: "c", prompt: "Person A thanks Person B.", marks: 1 },
            { label: "d", prompt: "Person B offers more help or closes politely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Request dialogue", statement: "Could you ... please? + agreement + thanks + offer." },
            ],
            steps: [
              { part: "a", reasoning: "Polite request with \"Could you ... please?\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Polite agreement, e.g. \"Yes, of course.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Thank-you phrase present.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Offer of help or polite close, correct sentences.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Could you ... please? (b) Yes, of course. (c) Thank you. (d) Offer/close.",
            commonErrors: ["Missing the thank-you or the polite close."],
          },
        },
        {
          id: "langab-u3-l32q31",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write two polite ways to ask someone to repeat what they said.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking for repetition", statement: "\"Sorry?\" and \"Could you repeat that, please?\" are polite." },
            ],
            steps: [
              { reasoning: "Two correct polite phrases.", marks: 2, markCode: "M" },
              { reasoning: "Both are suitable for conversation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sorry? / Could you repeat that, please? / Sorry, what did you say? (any two).",
            commonErrors: ["Using a rude or demanding tone."],
          },
        },
        {
          id: "langab-u3-l32q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a polite mini-conversation (four lines) where you gently disagree with a friend.",
          parts: [
            { label: "a", prompt: "Person A states an opinion.", marks: 1 },
            { label: "b", prompt: "Person B acknowledges it before disagreeing.", marks: 2 },
            { label: "c", prompt: "Person B gives a reason for their view.", marks: 1 },
            { label: "d", prompt: "Person A accepts the disagreement politely.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gentle disagreement", statement: "Acknowledge + disagree + reason + accept keeps it polite." },
            ],
            steps: [
              { part: "a", reasoning: "Clear opinion stated, e.g. \"I think summer is the best season.\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acknowledgement such as \"I see\" or \"That's true\" before disagreeing.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A simple reason given.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Polite acceptance, e.g. \"OK, fair enough.\"", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Opinion. (b) Acknowledge + disagree. (c) Reason. (d) Accept.",
            commonErrors: ["Saying \"You're wrong\" without acknowledgement."],
          },
        },
      ],
    },
  ],
};

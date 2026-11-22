import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mla3-u1-lesson-1-1",
  code: "1-1",
  title: "Understanding Interviews and Longer Dialogues",
  goal: "I CAN follow an interview or longer conversation and identify each speaker's opinions, reasons and key information.",
  standards: [
    "MYP Language Acquisition",
    "Criterion A: Listening",
    "Criterion B: Reading",
    "Intercultural understanding",
  ],
  vocabulary: [
    { term: "Interview", definition: "A conversation where one person asks questions and another answers, often for information or a show." },
    { term: "Speaker's opinion", definition: "What the person thinks or feels about a topic." },
    { term: "Turn-taking", definition: "The way speakers take turns to speak in a conversation." },
    { term: "Reason", definition: "The explanation for an opinion: 'because...', 'the reason is...'" },
    { term: "Follow-up question", definition: "A question that asks for more detail about an earlier answer." },
  ],
  concepts: [
    {
      id: "mla3-u1-interviews",
      title: "Listening to interviews",
      skill: "Identify who is speaking, what questions are asked, and what opinions are expressed.",
      lesson: {
        sections: [
          {
            heading: "How interviews work",
            body: "In an interview one person (the **interviewer**) asks questions and the other (the **interviewee**) answers. Listen for: the **topic** (what the interview is about), the **questions** (what the interviewer wants to know), and the **opinions** (what the interviewee thinks). Interviewees often give reasons: 'I think... because...'.",
          },
          {
            heading: "Spotting opinions in speech",
            body: "Spoken opinions often start with phrases: **'I think...'**, **'In my opinion...'**, **'I believe...'**, **'For me...'**, **'I don't think...'**. Facts sound different: 'The school has 500 students', 'It opened in 1998'. Learning to hear the difference helps you answer 'What does the speaker think?' questions.",
          },
          {
            heading: "Longer conversations",
            body: "Real conversations have several topics. Keep a mental map: Who? What? When? Where? Why? When the topic changes, listen for phrases like 'By the way...', 'Speaking of which...', 'Anyway...'. Don't panic if you miss a word — the next sentence often explains it.",
          },
        ],
        keyFormulas: [
          { name: "Opinion signals", statement: "I think / In my opinion / I believe / For me / I don't think" },
        ],
        workedExample: {
          problem: "Interview: Q: 'Do you like your school?' A: 'Yes, I think it's great because the teachers are kind.' What is the interviewee's opinion and reason?",
          solution: "Opinion: the school is great. Reason: the teachers are kind.",
        },
      },
      questions: [
        {
          id: "mla3-u1-interviews-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an interview, who asks the questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The interviewee" },
              { id: "b", text: "The audience" },
              { id: "c", text: "The narrator" },
              { id: "d", text: "The interviewer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interview roles", statement: "The interviewer asks; the interviewee answers." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — interviewer = questioner.", working: "interviewer", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The interviewer",
            commonErrors: ["Confusing interviewer and interviewee."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-interviews-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Interview with a Young Chef",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: What made you start cooking?\nMarco: My grandmother taught me when I was six. I loved watching her in the kitchen.\nInterviewer: What is your favourite dish to make?\nMarco: I think pasta is the best — it is simple but delicious. I make it almost every week.",
          },
          stem: "Answer: Why did Marco start cooking? What is his favourite dish and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview comprehension", statement: "Answers locate reasons and opinions in the interviewee's turns." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — grandmother taught him when he was six.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — favourite dish: pasta.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — reason: simple but delicious / makes it weekly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grandmother taught him at six; pasta — simple but delicious.",
            commonErrors: ["Saying he learned at school — it was his grandmother."],
            examinerNote: "Reason for pasta must be included.",
          },
        },
        {
          id: "mla3-u1-interviews-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Interview Snippet",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: Should students wear uniforms?\nStudent A: I think yes, because it stops people worrying about clothes.\nStudent B: I don't agree. In my opinion, students should choose their own clothes — it helps them express themselves.",
          },
          stem: "Compare the two students' opinions. Who agrees with uniforms and who disagrees? Give their reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing spoken opinions", statement: "Track each speaker's stance and reason separately." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Student A agrees: uniforms stop worrying about clothes.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Student B disagrees: students should choose clothes / express themselves.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — correctly contrasts the two stances.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — clear, organised comparison.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A: for uniforms (no clothes worry). B: against (self-expression).",
            commonErrors: ["Mixing up which student holds which opinion."],
            examinerNote: "Both opinions with reasons required.",
          },
        },
        {
          id: "mla3-u1-interviews-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Interview: Life as an Exchange Student",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: How was your first week in a new country?\nLena: It was exciting but also difficult. Everyone spoke so fast at first!\nInterviewer: What helped you most?\nLena: My host family was wonderful. They spoke slowly and corrected me kindly. Also, I joined the football team — sport is a universal language!\nInterviewer: What advice would you give to new students?\nLena: Don't be afraid to make mistakes. Everyone makes them. Just keep talking.",
          },
          stem: "Read the interview and complete the tasks.",
          parts: [
            { label: "a", prompt: "How did Lena feel in her first week?", marks: 1 },
            { label: "b", prompt: "Name two things that helped her.", marks: 2 },
            { label: "c", prompt: "What advice does she give new students?", marks: 1 },
            { label: "d", prompt: "Write three interview questions you would ask Lena about her experience.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview analysis + production", statement: "Extract feelings, help factors and advice; produce own questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — 'exciting but also difficult'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — host family + football team.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — both factors named.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — don't fear mistakes; keep talking.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion C: Speaking — three relevant interview questions.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct question word order and question marks.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — questions use appropriate wh-words (what/how/why).", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — questions would naturally continue the interview.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) exciting but difficult (b) host family, football team (c) don't fear mistakes, keep talking (d) three correct questions.",
            commonErrors: ["Questions that duplicate what she already answered."],
            examinerNote: "(d) questions must be new, not repeated from the text.",
          },
        },
        {
          id: "mla3-u1-interviews-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an interview, what does the interviewee do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writes the article" },
              { id: "b", text: "Answers the questions" },
              { id: "c", text: "Asks the questions" },
              { id: "d", text: "Introduces the programme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interview roles", statement: "The interviewee is the person being interviewed — they answer." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — the interviewee answers.", working: "answers", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Answers the questions",
            commonErrors: ["Confusing interviewer and interviewee again."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-interviews-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence expresses an opinion rather than a fact?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The match was on Saturday." },
              { id: "b", text: "I think homework helps students learn." },
              { id: "c", text: "The school has 400 students." },
              { id: "d", text: "Water boils at 100 degrees." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Opinion signals", statement: "'I think', 'In my opinion', 'I believe' introduce opinions." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'I think' signals an opinion; the others state facts.", working: "I think", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I think homework helps students learn.",
            commonErrors: ["Choosing a fact because it 'sounds important'."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-interviews-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An interviewer asks 'Why did you choose your job?' Which answer gives a reason?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, I did." },
              { id: "b", text: "Because I love helping people." },
              { id: "c", text: "At five o'clock." },
              { id: "d", text: "My job is fine." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Answering why-questions", statement: "'Why' questions need a reason — often introduced by 'because'." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Because...' directly answers 'Why'.", working: "Because I love helping people", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because I love helping people.",
            commonErrors: ["Choosing a time or yes/no answer."],
            examinerNote: "A1 for (a).",
          },
        },
        {
          id: "mla3-u1-interviews-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do interviewers often ask follow-up questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To change the subject" },
              { id: "b", text: "To finish the interview quickly" },
              { id: "c", text: "To get more detail about an earlier answer" },
              { id: "d", text: "To test the audience" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Follow-up question", statement: "A question asking for more detail about an earlier answer." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — follow-ups deepen an earlier answer.", working: "more detail", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To get more detail about an earlier answer",
            commonErrors: ["Thinking follow-ups change the topic."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-interviews-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Radio Interview",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: Are you happy with your school?\nTom: Mostly yes. I like my teachers, although the lunch is always cold.",
          },
          stem: "What does Tom think about the school lunch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is excellent" },
              { id: "b", text: "He never eats lunch" },
              { id: "c", text: "It is always cold" },
              { id: "d", text: "It is too expensive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail in interviews", statement: "Negative details often follow 'although' or 'but'." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'the lunch is always cold' is Tom's complaint.", working: "always cold", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It is always cold",
            commonErrors: ["Missing the 'although' contrast and choosing positive."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-interviews-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Short Interview",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: Where are you from?\nGuest: Brazil.\nInterviewer: What do you do?\nGuest: I am a musician.\nInterviewer: Why music?\nGuest: Because it makes me happy.",
          },
          stem: "How many questions does the interviewer ask?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting interview turns", statement: "Each interviewer turn is a question to count." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — count the interviewer turns: 'Where are you from?', 'What do you do?', 'Why music?'", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting the guest's answers as questions."],
            examinerNote: "Only interviewer questions count.",
          },
        },
        {
          id: "mla3-u1-interviews-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one interview question you could ask a friend about their favourite food.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Interview question form", statement: "Questions use correct word order and a question mark." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — question is about favourite food.", working: "What is your favourite food?", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct question form and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'What is your favourite food?'",
            commonErrors: ["Statement form instead of a question."],
            examinerNote: "Must be a genuine question.",
          },
        },
        {
          id: "mla3-u1-interviews-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Interview about a Book",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: Tell us about your new book.\nAuthor: It is a story about a boy who travels alone. I wrote it during the holidays.\nInterviewer: When will it be published?\nAuthor: Next month, I hope.",
          },
          stem: "Answer: What is the book about? When will it be published?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview detail", statement: "Extract the topic and the time detail from the answers." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — book topic: a boy who travels alone.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — publication: next month.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — both answers given clearly and concisely.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A boy who travels alone; next month.",
            commonErrors: ["Saying it was written last month — publication is next month."],
            examinerNote: "Both parts required.",
          },
        },
        {
          id: "mla3-u1-interviews-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read this answer from an interview: 'I have lived here for ten years because my parents moved here when I was young.' Write two follow-up questions an interviewer could ask.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Follow-up production", statement: "Good follow-ups ask about details in the answer: where parents moved from, whether she likes living here." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — first follow-up question relevant to the answer.", working: "Where did your parents move from?", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — second follow-up question relevant to the answer.", working: "Do you like living here?", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — both are grammatically correct questions.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Where did your parents move from?' / 'Do you like living here?'",
            commonErrors: ["Questions unrelated to the answer given."],
            examinerNote: "Follow-ups must connect to the detail.",
          },
        },
        {
          id: "mla3-u1-interviews-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Debate Interview",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: Should homework be banned?\nStudent A: Yes, students need free time to relax.\nStudent B: No, homework helps us practise what we learn.",
          },
          stem: "Compare the two students' opinions on homework. Give each one's view and reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing spoken opinions", statement: "Track each speaker's stance and reason separately." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Student A: ban homework; reason: free time to relax.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Student B: keep homework; reason: practise learning.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B: Reading — comparison clearly contrasts the two stances.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is balanced and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A: ban (free time); B: keep (practise).",
            commonErrors: ["Mixing up which student holds which view."],
            examinerNote: "Both views with reasons required.",
          },
        },
        {
          id: "mla3-u1-interviews-q15",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Quick Chat",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Sara: Did you finish the report?\nBen: Yes, I emailed it this morning. By the way, are we still meeting at six?\nSara: Yes, at the library. Anyway, did you see the game last night?",
          },
          stem: "How many different topics are discussed? How many speakers are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic tracking", statement: "Topic-shift phrases introduce new subjects to count." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — topics: the report, the meeting, the game = 3.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — speakers: Sara and Ben = 2.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 topics; 2 speakers.",
            commonErrors: ["Counting 'the report' and 'the game' as one topic."],
            examinerNote: "Each topic-shift adds a topic.",
          },
        },
        {
          id: "mla3-u1-interviews-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Interview at a Cafe",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Interviewer: Why did you open this cafe?\nOwner: I love coffee and wanted a place where people could meet. It opened last year.\nInterviewer: What is your favourite part of the job?\nOwner: I think meeting new customers is the best — everyone has an interesting story.",
          },
          stem: "Read the interview and complete the tasks.",
          parts: [
            { label: "a", prompt: "Why did the owner open the cafe?", marks: 1 },
            { label: "b", prompt: "Name two things she says about the job.", marks: 2 },
            { label: "c", prompt: "What is her favourite part and her reason?", marks: 1 },
            { label: "d", prompt: "Write two new interview questions for the owner.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interview analysis + production", statement: "Extract reasons and opinions; produce own questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — she loves coffee and wanted a meeting place.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — first detail: it opened last year / customers have interesting stories.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — second detail correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — favourite part: meeting customers; reason: interesting stories.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion C: Speaking — two relevant new interview questions.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct question forms and question marks.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) loves coffee + meeting place (b) opened last year / interesting stories (c) meeting customers — stories (d) two correct questions.",
            commonErrors: ["(d) questions that repeat what she already answered."],
            examinerNote: "(d) must be new questions, not repeats.",
          },
        },
      ],
    },
    {
      id: "mla3-u1-dialogues-talking",
      title: "Following natural conversations",
      skill: "Track topics and opinions in a natural dialogue with several speakers and topic changes.",
      lesson: {
        sections: [
          {
            heading: "Conversations change topic",
            body: "Real dialogues move between topics: 'Did you see the match?' ... 'Anyway, are you coming to the cinema on Friday?' Listen for **topic-shift phrases**: 'By the way', 'Speaking of which', 'Anyway', 'Oh, and...'. When you hear one, reset your listening — new information is coming.",
          },
          {
            heading: "Who says what?",
            body: "With three or more speakers, tracking gets harder. Use **names** (said often in conversation) and **pronouns** to follow who is speaking. If confused, focus on the **content words** (nouns, verbs) rather than every small word — the main ideas survive even when details are missed.",
          },
          {
            heading: "Responding appropriately",
            body: "In conversation, people respond to what was said, not just wait for their turn. Useful responses: 'Really?', 'That's interesting', 'I agree', 'Me too', 'How about you?', 'What do you think?'. These short phrases show you are following and keep the conversation alive.",
          },
        ],
        keyFormulas: [
          { name: "Topic shift", statement: "By the way / Speaking of which / Anyway / Oh, and..." },
          { name: "Responses", statement: "Really? / I agree / Me too / How about you?" },
        ],
        workedExample: {
          problem: "Speaker A: 'The test was hard.' Speaker B: 'Really? I thought it was easy.' What is Speaker B's opinion?",
          solution: "Speaker B disagrees — they thought the test was easy, opposite to A.",
        },
      },
      questions: [
        {
          id: "mla3-u1-dialogues-talking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase signals that a speaker is changing the topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By the way..." },
              { id: "b", text: "Because..." },
              { id: "c", text: "I think..." },
              { id: "d", text: "Yes, I did." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic-shift phrases", statement: "'By the way', 'Anyway', 'Speaking of which' introduce new topics." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'By the way' signals topic change.", working: "by the way", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** By the way...",
            commonErrors: ["Choosing an opinion phrase instead of a topic-shift phrase."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Chatting at Lunch",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Mia: Did you do the maths homework? It was hard!\nTom: Yeah, question 5 was impossible. By the way, are you coming to the cinema on Friday?\nMia: Definitely! What time does the film start?\nTom: At seven. I'll pick you up at six thirty.",
          },
          stem: "How many topics are discussed? List them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic tracking", statement: "Each topic-shift introduces a new subject to track." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — topic 1: maths homework (hard, question 5).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — topic 2: cinema plans on Friday.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — both topics identified distinctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two topics: maths homework and cinema plans.",
            commonErrors: ["Merging both topics into one."],
            examinerNote: "Two distinct topics required.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Planning a Trip",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Anna: I think we should visit the coast this summer.\nBen: I'm not sure. The mountains are more beautiful in my opinion.\nAnna: Really? But the coast has better beaches for swimming.\nBen: That's true. How about we go to the coast for a week and the mountains for a weekend?",
          },
          stem: "What are Anna's and Ben's initial opinions? How do they finally solve the disagreement?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion tracking + compromise", statement: "Each speaker holds a view; a compromise combines both." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Anna prefers the coast; Ben prefers the mountains.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Anna's reason: better beaches for swimming.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — compromise: coast for a week + mountains for a weekend.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — explanation of the resolution is clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Anna: coast; Ben: mountains. Compromise: visit both — coast a week, mountains a weekend.",
            commonErrors: ["Saying one person 'won' — they compromised."],
            examinerNote: "Must show both opinions AND the compromise.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Three Friends Plan a Hike",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Sara: Let's go hiking on Saturday! The weather will be perfect.\nLeo: I'm in, but only if we start early — it gets hot in the afternoon.\nSara: Good point. We could leave at seven. Nina, are you coming?\nNina: I'd love to, but I have a family lunch on Saturday. Can we do Sunday instead?\nSara: Sunday works for me. Leo?\nLeo: Sunday is fine too. Let's meet at the car park at eight.",
          },
          stem: "Read the dialogue and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main plan being made?", marks: 1 },
            { label: "b", prompt: "Why does Leo want to start early?", marks: 1 },
            { label: "c", prompt: "Why can't Nina come on Saturday? What day is finally chosen?", marks: 2 },
            { label: "d", prompt: "Write a 4-6 line dialogue where three friends plan something else (e.g. a study session or a trip). Include one problem and its solution.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Dialogue comprehension + production", statement: "Extract plan, reasons and changes; produce a plan dialogue with a problem/solution." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A: Listening — friends plan a hike on the weekend.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A: Listening — it gets hot in the afternoon.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — family lunch on Saturday; Sunday chosen.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A: Listening — both facts correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion C: Speaking — 4-6 line dialogue with named speakers taking turns.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — includes a problem and its solution.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — correct question forms and punctuation.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — sounds like a natural planning conversation.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) hike (b) afternoon heat (c) family lunch; Sunday (d) correct planning dialogue.",
            commonErrors: ["Missing the day change to Sunday.", "Dialogue without a problem/solution."],
            examinerNote: "(d) must contain both a problem and a resolution.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase shows agreement in a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whatever." },
              { id: "b", text: "Me too." },
              { id: "c", text: "I disagree completely." },
              { id: "d", text: "Never mind." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conversation responses", statement: "'Me too', 'I agree', 'Really?' respond to what was said." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Me too' agrees with the previous speaker.", working: "Me too", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Me too.",
            commonErrors: ["Choosing a dismissive phrase."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'turn-taking' mean in a conversation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ending the conversation politely" },
              { id: "b", text: "Speaking as loudly as possible" },
              { id: "c", text: "Taking turns to speak" },
              { id: "d", text: "Changing the topic quickly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turn-taking", statement: "Speakers alternate who speaks when." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — turn-taking = alternating speakers.", working: "turns to speak", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** Taking turns to speak",
            commonErrors: ["Confusing it with topic changes."],
            examinerNote: "C1 for (a).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Planning the Weekend",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Jo: Are you free on Saturday?\nKim: Yes, why?\nJo: I was thinking we could go to the new sports centre. What do you think?\nKim: Great idea! What time does it open?",
          },
          stem: "Who suggests going to the sports centre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither of them" },
              { id: "b", text: "Jo" },
              { id: "c", text: "Both of them" },
              { id: "d", text: "Kim" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speaker tracking", statement: "Names and pronouns show who says what." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Jo says 'we could go to the new sports centre'.", working: "Jo", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Jo",
            commonErrors: ["Attributing the suggestion to Kim, who only agrees."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "You miss a word while listening to a conversation. What is the best strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Focus on the content words and keep listening" },
              { id: "b", text: "Ask the speaker to repeat everything" },
              { id: "c", text: "Guess the topic and leave" },
              { id: "d", text: "Stop listening completely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening strategies", statement: "Content words carry the main ideas; small words can be missed safely." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — content words preserve the main ideas.", working: "content words", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Focus on the content words and keep listening",
            commonErrors: ["Thinking one missed word ruins comprehension."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Two Views on Phones",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Max: I think phones should be banned in class.\nRuby: I'm not sure I agree. In my opinion, they help us learn.",
          },
          stem: "What is Ruby's opinion about phones in class?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are too expensive." },
              { id: "b", text: "They help students learn." },
              { id: "c", text: "She has no opinion." },
              { id: "d", text: "They should be banned." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion tracking", statement: "Track each speaker's stance separately." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Ruby says phones 'help us learn'.", working: "help us learn", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They help students learn.",
            commonErrors: ["Attributing Max's view to Ruby."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Your friend says 'I think the test was easy.' Which response politely disagrees?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whatever." },
              { id: "b", text: "You're wrong." },
              { id: "c", text: "I see your point, but I found it difficult." },
              { id: "d", text: "Shut up." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite disagreement", statement: "'I see your point, but...' disagrees without being rude." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — polite disagreement keeps the conversation friendly.", working: "I see your point, but", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(c)** I see your point, but I found it difficult.",
            commonErrors: ["Choosing a rude or dismissive response."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Three Friends Chat",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Nina: Did anyone see the new film?\nOmar: Yes, I loved it!\nLena: I didn't — was it good?\nOmar: Really good. You should see it.",
          },
          stem: "How many speakers take part in this conversation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speaker counting", statement: "Each named speaker is one participant." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Nina, Omar and Lena = 3 speakers.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting turns instead of speakers."],
            examinerNote: "Omar speaks twice but counts once.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Busy Conversation",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: Did you do the homework? It was hard!\nB: Yeah, question 5 was impossible. By the way, are you coming to the cinema?\nA: Definitely! What time?\nB: At seven. Anyway, did you hear about the new teacher?",
          },
          stem: "How many topic-shift phrases appear? How many topics are discussed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic-shift phrases", statement: "'By the way' and 'Anyway' signal new topics." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'By the way' and 'Anyway' = 2 shift phrases.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — homework, cinema, new teacher = 3 topics.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 topic-shift phrases; 3 topics.",
            commonErrors: ["Counting 'Yeah' as a topic shift."],
            examinerNote: "Only recognised shift phrases count.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one phrase you could use to politely disagree with a friend's opinion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite disagreement", statement: "Acknowledge the other view, then give yours: 'I see your point, but...'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — phrase politely signals disagreement.", working: "I see your point, but...", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — phrase is grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I see your point, but...' / 'I'm not sure I agree...'",
            commonErrors: ["Rude phrases like 'You're wrong'."],
            examinerNote: "Must be polite, not just negative.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Deciding Where to Eat",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Priya: Let's eat at the new Italian restaurant tonight.\nSam: I'm not so sure — I heard the food is expensive.\nPriya: Really? For me, good food is worth the price. What about the Chinese place instead?\nSam: That's cheaper and I like it. Let's go there.",
          },
          stem: "What does each person think of the Italian restaurant? Where do they finally decide to eat?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion + resolution tracking", statement: "Track each speaker's view and the final decision." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Priya likes the Italian place; Sam thinks it is expensive.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — final decision: the Chinese restaurant (cheaper, Sam likes it).", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — both parts answered clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Priya: good food worth the price; Sam: too expensive. They choose the Chinese restaurant.",
            commonErrors: ["Missing the final decision change to Chinese."],
            examinerNote: "Must include the final choice.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Group Project Problem",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "Tom: We need to finish the poster by Friday, but I can't work on Saturday.\nAna: I can't either — I have football.\nBen: I can do Saturday morning, and I can do Sunday evening.\nTom: That works! Let's split it: I do the writing, you two do the pictures.",
          },
          stem: "What is the problem, how is it solved, and who does what?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Problem-solution tracking", statement: "Identify the problem, the compromise and the task split." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — problem: poster due Friday but Tom and Ana can't work Saturday.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — solution: Ben works Saturday morning and Sunday evening.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — task split: Tom writing; Ana and Ben pictures.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — all three parts explained clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Problem: Saturday clash. Solution: Ben + split tasks. Tom = writing; Ana/Ben = pictures.",
            commonErrors: ["Missing the task split detail."],
            examinerNote: "All three elements needed.",
          },
        },
        {
          id: "mla3-u1-dialogues-talking-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short dialogue where three friends plan a surprise party for a classmate.",
          parts: [
            { label: "a", prompt: "Write an opening where the plan is suggested.", marks: 1 },
            { label: "b", prompt: "Include one problem and its solution.", marks: 2 },
            { label: "c", prompt: "End with a clear final decision or arrangement.", marks: 1 },
            { label: "d", prompt: "Use natural responses like 'Really?', 'Me too', 'How about...?'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue production", statement: "Natural turn-taking, responses and a problem/solution structure." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear suggestion opens the dialogue.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — a real problem is raised.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — the problem is resolved.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B: Reading — dialogue ends with a clear decision.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — natural response phrases used.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct punctuation and turn format.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Dialogue with suggestion + problem + solution + decision + natural responses.",
            commonErrors: ["No problem/solution.", "Speakers talking at once."],
            examinerNote: "Must sound like a real conversation.",
          },
        },
      ],
    },
  ],
};

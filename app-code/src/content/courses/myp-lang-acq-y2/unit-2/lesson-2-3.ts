import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mla2-u2-lesson-2-3",
  code: "2-3",
  title: "Speaking and Writing About Plans and Past Events",
  goal: "I CAN talk and write about what I did (past simple) and what I am going to do (going to), using correct time expressions.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion D: Writing",
    "Criterion B: Reading",
  ],
  vocabulary: [
    { term: "Past simple", definition: "The tense for finished actions: 'I played football yesterday.'" },
    { term: "Going to", definition: "Used for plans and intentions: 'I am going to visit my grandma.'" },
    { term: "Yesterday", definition: "The day before today — used with past simple." },
    { term: "Tomorrow", definition: "The day after today — used with future plans." },
    { term: "Last week", definition: "The week before this one — used with past simple." },
  ],
  concepts: [
    {
      id: "mla2-u2-past-simple-speaking",
      title: "Talking about the past",
      skill: "Use the past simple to talk about what you did yesterday, last week or at the weekend.",
      lesson: {
        sections: [
          {
            heading: "Past simple for finished events",
            body: "The **past simple** tells about finished actions: 'I played football yesterday', 'We visited the museum last week'. Regular verbs add **-ed**: play → played, visit → visited. Irregular verbs change completely: go → went, eat → ate, see → saw, have → had. Time words: **yesterday, last night, last week, ago**.",
          },
          {
            heading: "Common irregular verbs",
            body: "Learn these early: **go → went**, **eat → ate**, **see → saw**, **have → had**, **do → did**, **come → came**, **get → got**, **make → made**, **take → took**, **buy → bought**. In questions and negatives use **did**: 'Did you go?', 'I didn't go' (the main verb goes back to base form!).",
          },
          {
            heading: "Speaking about your weekend",
            body: "To talk about your weekend: 'On Saturday I went to the park. I played football with my friends. In the evening we watched a film.' Sequence with 'first, then, after that'. This is one of the most useful speaking topics at this level.",
          },
        ],
        keyFormulas: [
          { name: "Past simple", statement: "Verb + ed (regular) / irregular form; did for questions; didn't for negatives" },
        ],
        workedExample: {
          problem: "Write about your last weekend in two sentences using past simple.",
          solution: "'On Saturday I went to the beach with my family. We ate ice cream and played in the sand.'",
        },
      },
      questions: [
        {
          id: "mla2-u2-past-simple-speaking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct past simple form of 'go'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "goed" },
              { id: "b", text: "went" },
              { id: "c", text: "gone" },
              { id: "d", text: "going" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular past forms", statement: "'Go' is irregular: go → went." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'go' past simple is 'went'.", working: "went", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** went",
            commonErrors: ["Choosing 'goed' — 'go' is irregular."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a question: 'you / go / to the park / yesterday?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past simple questions", statement: "Did + subject + base verb; main verb returns to base form." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Did you go to the park yesterday?'", working: "Did you go to the park yesterday?", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct punctuation and 'did' auxiliary.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Did you go to the park yesterday?",
            commonErrors: ["'Did you went' — main verb must be base form 'go'."],
            examinerNote: "Did + base verb is essential.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write about what you did last weekend in three sentences using past simple and time words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Past narrative", statement: "Past simple verbs + time expressions + sequence." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — three sentences about real weekend activities.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — past simple forms correct (regular -ed and irregulars).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — time words used (yesterday/last/on Saturday).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct punctuation and spelling.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three correct past-simple sentences about the weekend.",
            commonErrors: ["Mixing present and past ('I play... then I went').", "'I goed' errors."],
            examinerNote: "Must be consistently past tense.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write and then 'perform' a short talk about your last holiday or a special day.",
          parts: [
            { label: "a", prompt: "Write 4-5 sentences in past simple about what happened.", marks: 3 },
            { label: "b", prompt: "Use at least two irregular past verbs (went, ate, saw, had, etc.).", marks: 2 },
            { label: "c", prompt: "Check: all verbs in past form, correct irregulars, capitals and full stops.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past narrative accuracy", statement: "Consistent past simple, correct irregulars, time expressions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — 4-5 sentences telling a real event.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — all verbs in correct past form.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — clear sequence of events.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — at least two correct irregular past forms.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — irregulars spelled correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check for tense consistency completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version has correct capitals/full stops.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — reads like a natural spoken recount.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "4-5 sentence past recount + two irregulars + correct check.",
            commonErrors: ["Tense slips into present.", "Wrong irregular forms ('eated', 'goed')."],
            examinerNote: "Irregular verbs must be correct, not just present.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct past simple form of 'eat'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "eated" },
              { id: "b", text: "ate" },
              { id: "c", text: "eaten" },
              { id: "d", text: "eating" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular past forms", statement: "'Eat' is irregular: eat → ate." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — past simple of 'eat' is 'ate'.", working: "ate", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** ate",
            commonErrors: ["Choosing 'eated' — 'eat' is irregular."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the past simple?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I play football every day." },
              { id: "b", text: "I played football yesterday." },
              { id: "c", text: "I am playing football now." },
              { id: "d", text: "I will play football tomorrow." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past simple", statement: "Past simple = finished actions with -ed or irregular forms + past time words." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'played' + 'yesterday' = past simple.", working: "I played football yesterday.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I played football yesterday.",
            commonErrors: ["Choosing present or future forms."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Did you went to school?" },
              { id: "b", text: "Did you go to school?" },
              { id: "c", text: "Do you went to school?" },
              { id: "d", text: "You did go to school?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "did + base form", statement: "After 'did' the main verb returns to base form: 'Did you go?'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'did you go' uses base form correctly.", working: "Did you go to school?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Did you go to school?",
            commonErrors: ["'Did you went' — keeping the past form after did."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a sentence about something you saw yesterday, using the past simple of 'see'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular past", statement: "see → saw (irregular)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct past form 'saw'.", working: "saw", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete sentence with past time word.", working: "I saw ... yesterday.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I saw a great film yesterday.'",
            commonErrors: ["'I seed' or 'I sawed' — see is irregular."],
            examinerNote: "Both form and sentence needed.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Last Weekend",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Last weekend we visited my grandparents. On Saturday we stayed for three hours and had lunch together. On Sunday we walked in the park for one hour and then went home.",
          },
          stem: "Listen to the text and give two numbers: (a) how many hours they stayed on Saturday (b) how many hours they walked on Sunday.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Times and durations are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'stayed for three hours'.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'walked ... for one hour'.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) 1",
            commonErrors: ["Swapping Saturday and Sunday details."],
            examinerNote: "Accept 3 and 1.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A Special Day",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Last Saturday was my sister's birthday. I bought her a book and some flowers. We had a party at our house with cake and games. Everyone came — it was the best party ever!",
          },
          stem: "Listen to the text and answer three questions: What did the writer buy? Where was the party? How did the writer feel at the end?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Past narrative comprehension", statement: "Events, details and feelings are tracked through a past recount." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — bought a book and flowers.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — party at 'our house'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'best party ever' = very happy/proud.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — all three answers given clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A book and flowers; at their house; very happy ('best party ever').",
            commonErrors: ["Saying 'a cake' was bought — cake was at the party, not bought by writer."],
            examinerNote: "All three parts needed.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write about your last birthday or a special family day for a class 'Memory Book'.",
          parts: [
            { label: "a", prompt: "Write three sentences in past simple about what happened.", marks: 2 },
            { label: "b", prompt: "Use at least one irregular past verb (went, ate, saw, had, etc.).", marks: 2 },
            { label: "c", prompt: "Check: all verbs in past form, correct irregulars, capitals and full stops.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past narrative accuracy", statement: "Consistent past simple, correct irregulars, time expressions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three real sentences about the event.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — clear sequence of events.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — at least one correct irregular past form.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — irregular spelled correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check for tense consistency.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final version reads clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Three past-simple sentences + one irregular + correct check.",
            commonErrors: ["Tense slips into present.", "'eated'/'goed' errors."],
            examinerNote: "Irregular verbs must be correct.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which time expression is used with the past simple?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "tomorrow" },
              { id: "b", text: "yesterday" },
              { id: "c", text: "next week" },
              { id: "d", text: "every day" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past time words", statement: "Past simple pairs with yesterday, last night/week, ago." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'yesterday' is a past time marker.", working: "yesterday", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** yesterday",
            commonErrors: ["Choosing future or habitual time words."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The School Trip",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Last month our class went to the Science Museum. We arrived at ten o'clock and stayed for four hours. We saw a robot show and visited three exhibitions. It was a fantastic day!",
          },
          stem: "Listen to the text and give two numbers: (a) how many hours they stayed (b) how many exhibitions they visited.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Times and counts are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'stayed for four hours'.", working: "4", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'visited three exhibitions'.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) 3",
            commonErrors: ["Answering 10 — that is arrival time, not hours stayed."],
            examinerNote: "Accept 4 and 3.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct negative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I didn't went to the party." },
              { id: "b", text: "I didn't go to the party." },
              { id: "c", text: "I didn't goes to the party." },
              { id: "d", text: "I not went to the party." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "didn't + base form", statement: "After 'didn't' the verb returns to base form." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'didn't go' is correct.", working: "didn't go", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I didn't go to the party.",
            commonErrors: ["Keeping the past form after didn't."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Grandpa's Story",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Grandpa told us about his first job. He worked in a bakery for two years when he was young. Every morning he got up at four and baked bread for the whole town.",
          },
          stem: "For how many years did Grandpa work in the bakery? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Durations are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'for two years'.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 4 — that is his waking time."],
            examinerNote: "Accept 2 only.",
          },
        },
        {
          id: "mla2-u2-past-simple-speaking-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write and then 'perform' a short talk about something interesting that happened to you last month.",
          parts: [
            { label: "a", prompt: "Write four sentences in past simple about what happened.", marks: 2 },
            { label: "b", prompt: "Use at least two irregular past verbs and one time expression (last week/month, on Saturday).", marks: 2 },
            { label: "c", prompt: "Check: all verbs in past form, correct irregulars, capitals and full stops.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past recount accuracy", statement: "Consistent past simple + irregulars + time expressions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four real sentences telling an event.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — all verbs in past form.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two correct irregular past forms.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — time expression used correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check for tense consistency.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — capitals and full stops correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — reads like a natural spoken recount.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Four past-simple sentences + two irregulars + time expression + correct check.",
            commonErrors: ["Tense slips.", "Wrong irregulars."],
            examinerNote: "Irregular verbs must be correct.",
          },
        },
      ],
    },
    {
      id: "mla2-u2-going-to-plans",
      title: "Talking about plans with 'going to'",
      skill: "Use 'going to' to talk about plans and intentions for the future.",
      lesson: {
        sections: [
          {
            heading: "Plans with 'going to'",
            body: "Use **am/is/are going to + verb** for plans and intentions: 'I am going to visit my grandma on Sunday', 'We are going to play football tomorrow'. It is the most useful future form at MYP 2 — it talks about what you have already decided to do.",
          },
          {
            heading: "Going to vs will",
            body: "**Going to** = a plan or intention you already have ('I am going to study tonight'). **Will** = a quick decision or prediction ('I will help you' / 'It will rain'). At this level, use 'going to' for plans and 'will' for promises and predictions about weather.",
          },
          {
            heading: "Asking about plans",
            body: "Questions: 'What are you going to do at the weekend?', 'Are you going to come to my party?', 'Where are you going to go on holiday?'. Answers: 'I am going to...', 'We are going to...'. This is perfect for making weekend plans with friends.",
          },
        ],
        keyFormulas: [
          { name: "Going to", statement: "am/is/are going to + verb = plan/intention" },
          { name: "Will", statement: "will + verb = quick decision/prediction" },
        ],
        workedExample: {
          problem: "Talk about your plan for this evening.",
          solution: "'I am going to do my homework after dinner. Then I am going to watch a film.'",
        },
      },
      questions: [
        {
          id: "mla2-u2-going-to-plans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct sentence about a plan.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I going to visit my aunt." },
              { id: "b", text: "I am going to visit my aunt." },
              { id: "c", text: "I going to visited my aunt." },
              { id: "d", text: "I am going visit my aunt." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Going to form", statement: "am/is/are + going to + base verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am going to visit' is correct.", working: "I am going to visit", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I am going to visit my aunt.",
            commonErrors: ["Missing 'am' or adding '-ed' to the main verb."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence about your plan for tomorrow using 'going to'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Future plans", statement: "am/is/are going to + verb + time expression." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a real plan stated.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct going-to form and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I am going to play football tomorrow.'",
            commonErrors: ["'I going to play' — missing 'am'."],
            examinerNote: "Must use going to, not will, for a plan.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Look at these plans and write them correctly in English: (1) I / visit / my grandparents / on Sunday (2) We / play / football / at the weekend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Going to agreement", statement: "I/we → am/are going to; he/she/it → is going to." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am going to visit my grandparents on Sunday.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'We are going to play football at the weekend.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — both sentences preserve the original meaning.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — correct punctuation and spelling.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(1) I am going to visit my grandparents on Sunday. (2) We are going to play football at the weekend.",
            commonErrors: ["'I are going' or 'we is going' — wrong agreement."],
            examinerNote: "Both sentences required for full marks.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Make weekend plans with a partner — write the conversation.",
          parts: [
            { label: "a", prompt: "Write two questions asking about plans (e.g. 'What are you going to do...?').", marks: 2 },
            { label: "b", prompt: "Write two answers using 'going to' with correct agreement.", marks: 3 },
            { label: "c", prompt: "Add one suggestion for something to do together using 'Let's...' or 'Why don't we...?'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Making plans", statement: "Questions + going-to answers + suggestion phrases." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two correct going-to questions.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct question word order and question marks.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two answers with real plans.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — am/is/are agreement correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct punctuation.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — natural suggestion ('Let's play football' / 'Why don't we go...?').", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — suggestion grammatically correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — the exchange sounds like a real plan-making conversation.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2 questions + 2 going-to answers + 1 suggestion.",
            commonErrors: ["Questions without inversion ('You are going to...?')."],
            examinerNote: "Must read like a real conversation.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly talks about a plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I going to visit my grandma." },
              { id: "b", text: "I am going to visit my grandma." },
              { id: "c", text: "I going to visited my grandma." },
              { id: "d", text: "I am going visit my grandma." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Going to form", statement: "am/is/are + going to + base verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'am going to visit' is correct.", working: "I am going to visit", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I am going to visit my grandma.",
            commonErrors: ["Missing 'am' or adding -ed to the main verb."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between 'going to' and 'will' at this level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They mean exactly the same thing" },
              { id: "b", text: "'Going to' = a plan; 'will' = a quick decision or prediction" },
              { id: "c", text: "'Going to' is only for the past" },
              { id: "d", text: "'Will' is only for hobbies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Going to vs will", statement: "Going to = decided plan; will = quick decision/prediction." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — the two forms have different uses.", working: "plan vs decision/prediction", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'Going to' = a plan; 'will' = a quick decision or prediction",
            commonErrors: ["Thinking they are interchangeable at all times."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence has the correct 'going to' agreement for 'she'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She are going to study tonight." },
              { id: "b", text: "She is going to study tonight." },
              { id: "c", text: "She am going to study tonight." },
              { id: "d", text: "She going to study tonight." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Going to agreement", statement: "he/she/it → is going to; I → am; we/you/they → are." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she is going to' is correct.", working: "She is going to", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** She is going to study tonight.",
            commonErrors: ["'She are' — wrong agreement."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence about your plan for this weekend using 'going to'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Future plans", statement: "am/is/are going to + verb + time expression." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a real plan stated.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct going-to form and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I am going to visit my cousins at the weekend.'",
            commonErrors: ["'I going to visit' — missing 'am'."],
            examinerNote: "Must use going to for a plan.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Holiday Plans",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "This summer we are going to stay at home for two weeks. I am going to learn to surf at the beach club. My brother is going to play in a football tournament. We are all going to have a great time!",
          },
          stem: "Listen to the text and give two numbers: (a) how many weeks they will stay at home (b) how many people are mentioned with plans?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Quantities are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'two weeks'.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — writer + 'my brother' = two people with named plans.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 (b) 2",
            commonErrors: ["Answering 3 for (b) — only writer and brother have named plans."],
            examinerNote: "Accept 2 and 2 (writer + brother).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Weekend Plans Dialogue",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Mia: What are you going to do at the weekend?\nTom: I am going to visit my grandparents on Saturday. On Sunday I am going to play football with my team.\nMia: That sounds fun! I am going to stay home and do my homework on Saturday. On Sunday I am going to come to your match!",
          },
          stem: "Listen to the dialogue and explain what each person is going to do on Saturday and Sunday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Plans comprehension", statement: "Going-to statements for each day must be attributed to the right speaker." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Tom: grandparents Saturday, football Sunday.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Mia: homework Saturday, Tom's match Sunday.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — both days covered for both speakers.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — plans explained clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Tom: grandparents Sat, football Sun. Mia: homework Sat, Tom's match Sun.",
            commonErrors: ["Swapping the two speakers' plans."],
            examinerNote: "Speaker attribution must be correct.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short 'My Plans' poster text for your bedroom about what you are going to do this month.",
          parts: [
            { label: "a", prompt: "Write three sentences about your plans using 'going to'.", marks: 2 },
            { label: "b", prompt: "Use correct am/is/are agreement and at least one time expression.", marks: 2 },
            { label: "c", prompt: "Check: correct forms, capitals, full stops and spelling.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plans writing", statement: "going to + base verb + time expressions with correct agreement." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three real plans stated.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — 'going to' used in every sentence.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — am/is/are agreement correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — time expression used.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final version reads clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Three going-to sentences + correct agreement + time expression + check.",
            commonErrors: ["'I going to' missing 'am'.", "'I am going to visited' — past form used."],
            examinerNote: "All sentences must be future plans.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct question about plans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You are going to come?" },
              { id: "b", text: "Are you going to come?" },
              { id: "c", text: "Going to you come?" },
              { id: "d", text: "Are going you to come?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Going to questions", statement: "Questions invert: 'Are you going to...?'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'are you going to' is correct inversion.", working: "Are you going to come?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Are you going to come?",
            commonErrors: ["No inversion — statement order in a question."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "New Year Plans",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "This year I have three big plans. First, I am going to learn the piano — lessons start in January. Second, I am going to read twenty books. Third, I am going to run a fun run in May with my mum.",
          },
          stem: "Listen to the text and give two numbers: (a) how many plans are mentioned (b) how many books the writer wants to read.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Counts and quantities are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'three big plans'.", working: "3", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'twenty books'.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) 20",
            commonErrors: ["Counting January and May as separate plans."],
            examinerNote: "Accept 3 and 20.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase makes a good suggestion for doing something together?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am going to go alone." },
              { id: "b", text: "Let's play football together." },
              { id: "c", text: "You must do it yourself." },
              { id: "d", text: "Never mind, forget it." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Suggestions", statement: "'Let's + verb' suggests doing something together." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Let's play football together' is a natural suggestion.", working: "Let's + verb", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Let's play football together.",
            commonErrors: ["Choosing a phrase that does not invite togetherness."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "School Trip Plans",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Next month our class is going on a trip to the mountains. We are going to hike for two days and stay in a cabin. There will be ten students and two teachers.",
          },
          stem: "How many days will the students hike? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Durations are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'hike for two days'.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 10 or 2 teachers — question asks about hiking days."],
            examinerNote: "Accept 2 only.",
          },
        },
        {
          id: "mla2-u2-going-to-plans-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short dialogue making weekend plans with a friend (4 turns).",
          parts: [
            { label: "a", prompt: "Write two questions asking about plans using 'going to'.", marks: 2 },
            { label: "b", prompt: "Write two answers with 'going to' and correct agreement.", marks: 2 },
            { label: "c", prompt: "Add one suggestion using 'Let's...' or 'Why don't we...'.", marks: 1 },
            { label: "d", prompt: "Check: question inversion, agreement, punctuation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plan-making dialogue", statement: "Inverted questions + going-to answers + suggestion phrases." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two real plan questions.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct question inversion.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two answers with real plans.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — am/is/are agreement correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — natural suggestion phrase used.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion B: Reading — dialogue reads naturally.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 questions + 2 going-to answers + 1 suggestion + check.",
            commonErrors: ["Questions without inversion.", "'I are going' agreement errors."],
            examinerNote: "Must read like a real plan-making conversation.",
          },
        },
      ],
    },
  ],
};

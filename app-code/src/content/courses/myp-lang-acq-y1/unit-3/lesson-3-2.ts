import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mla1-u3-lesson-3-2",
  code: "3-2",
  title: "Grammar for Accuracy: Be, Have Got and Present Simple",
  goal: "I CAN use 'am/is/are', 'have got/has got' and the present simple correctly in speaking and writing.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Verb", definition: "A doing or being word: run, eat, is, have." },
    { term: "Subject-verb agreement", definition: "The verb changes to match the subject: 'I am' but 'she is'." },
    { term: "Present simple", definition: "The tense for habits and facts: 'I play football every day.'" },
    { term: "Third person -s", definition: "Verbs add -s with he/she/it: 'she plays', 'he watches'." },
    { term: "Auxiliary verb", definition: "A helping verb such as 'do' or 'does' used to make questions and negatives." },
  ],
  concepts: [
    {
      id: "mla1-u3-be-have-got",
      title: "Verb 'be' and 'have got'",
      skill: "Use am/is/are and have got/has got with correct subject agreement.",
      lesson: {
        sections: [
          {
            heading: "The verb 'be'",
            body: "'Be' is the most important verb: **am** with I, **is** with he/she/it, **are** with you/we/they. 'I am happy', 'She is a teacher', 'They are friends'. In questions, swap the order: 'Are you happy?', 'Is she a teacher?' In negatives add 'not': 'I am not', 'She is not (isn't)'.",
          },
          {
            heading: "'Have got' for possession",
            body: "Use **have got** for things you own or features you have: 'I have got a dog', 'She has got blue eyes'. Remember the -s: he/she/it **has** got. Negatives: 'I haven't got', 'She hasn't got'. In questions: 'Have you got...?', 'Has she got...?' 'Have got' is the everyday British English form.",
          },
          {
            heading: "Common agreement mistakes",
            body: "Beginners often write 'She are' or 'I has'. Check every sentence: look at the subject first — I → am/have; he/she/it → is/has; you/we/they → are/have. This one check fixes most beginner errors.",
          },
        ],
        keyFormulas: [
          { name: "Be agreement", statement: "I am / he, she, it is / you, we, they are" },
          { name: "Have got agreement", statement: "I/you/we/they have got / he, she, it has got" },
        ],
        workedExample: {
          problem: "Correct the sentence: 'My brother have got two cats.'",
          solution: "'My brother' = he → 'has got': 'My brother has got two cats.'",
        },
      },
      questions: [
        {
          id: "mla1-u3-be-have-got-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct verb: 'They ___ students.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are" },
              { id: "b", text: "has" },
              { id: "c", text: "am" },
              { id: "d", text: "is" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be agreement", statement: "'They' takes 'are'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — subject 'they' requires 'are'.", working: "are", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** are",
            commonErrors: ["Choosing 'is' — that is for he/she/it."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the correct form: 'She ___ got a new bike.' (have/has)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "have got agreement", statement: "He/she/it takes 'has got'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' → 'has got'.", working: "has", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — complete correct sentence 'She has got a new bike.'", working: "She has got a new bike.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "She has got a new bike.",
            commonErrors: ["'She have got' — missing the -s on has."],
            examinerNote: "Accept 'has' or full sentence.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Correct these two sentences and name the rule for each: (1) 'I is happy today.' (2) 'My friends has got a dog.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject-verb agreement", statement: "Verb form must match the subject: I am; he/she/it is/has; plural subjects are/have." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I is' → 'I am' (I takes am).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'friends has' → 'friends have' (plural subject).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — names the agreement rule correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(1) I am happy today. — 'I' takes 'am'. (2) My friends have got a dog. — plural takes 'have'.",
            commonErrors: ["Correcting without identifying the agreement rule."],
            examinerNote: "Both corrections and rule names needed.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write about your family using 'be' and 'have got' correctly.",
          parts: [
            { label: "a", prompt: "Write two sentences with 'be' (am/is/are) about family members.", marks: 2 },
            { label: "b", prompt: "Write two sentences with 'have got/has got' about possessions or features.", marks: 2 },
            { label: "c", prompt: "Write one question with 'Have you got...?' and one with 'Is/Are...?', then answer each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be and have got", statement: "Correct agreement: I am, he/she/it is/has, plural are/have." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two true sentences using correct be-forms.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — agreement correct in both (e.g. 'My sister is...', 'They are...').", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two true sentences using have/has got correctly.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — has/have agreement correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — correct question forms: 'Have you got...?' / 'Is/Are...?'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct question word order and question marks.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — answers match the questions grammatically.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Four correct statements + two correct Q&A pairs.",
            commonErrors: ["'Have you has got...?' — wrong auxiliary agreement.", "Statement word order in questions."],
            examinerNote: "Questions must invert correctly: 'Have you got...?' not 'You have got...?'.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct verb: 'I ___ happy today.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "am" },
              { id: "b", text: "is" },
              { id: "c", text: "are" },
              { id: "d", text: "has" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be agreement", statement: "'I' takes 'am'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am happy'.", working: "am", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** am",
            commonErrors: ["Choosing 'is' — that is for he/she/it."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct verb: 'She ___ got a new bike.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are" },
              { id: "b", text: "has" },
              { id: "c", text: "am" },
              { id: "d", text: "have" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have got agreement", statement: "He/she/it takes 'has got'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' -> 'has got'.", working: "has", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** has",
            commonErrors: ["Choosing 'have' — 'she' needs 'has'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many forms of the verb 'be' are used with I, he/she/it and you/we/they? Write the number (am, is, are).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of be forms", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be forms", statement: "English 'be' has three present forms: am, is, are." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — am, is, are = 3 forms.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 3",
            commonErrors: ["Counting 'be' itself as a fourth form."],
            examinerNote: "Answer is 3.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write two sentences about your family using 'is' or 'are'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be agreement", statement: "Correct be-form for the subject: I am, he/she/it is, plural are." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — two true sentences about family members.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct be-forms, capitals and full stops.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My sister is eight. They are happy.'",
            commonErrors: ["'My sister are' — singular needs 'is'."],
            examinerNote: "Both sentences must be correct.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They am friends." },
              { id: "b", text: "They is friends." },
              { id: "c", text: "They has friends." },
              { id: "d", text: "They are friends." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be agreement", statement: "'They' takes 'are'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'they' requires 'are'.", working: "They are friends.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** They are friends.",
            commonErrors: ["Choosing 'is' — that is for he/she/it."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct negative of 'She is happy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is she not happy is." },
              { id: "b", text: "She not is happy." },
              { id: "c", text: "She is not happy." },
              { id: "d", text: "She not happy." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be negatives", statement: "Negatives add 'not' after the verb: 'She is not happy' / 'isn't'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'is not' keeps correct order.", working: "She is not happy.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** She is not happy.",
            commonErrors: ["Putting 'not' before the verb."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "My Family",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I have got two sisters and one brother. My mum is a teacher. My dad has got a car.",
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
              { kind: "skill", name: "Numbers in family texts", statement: "Quantities pair with family nouns." },
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
          id: "mla1-u3-be-have-got-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct these sentences: (1) 'My brother have got two cats.' (2) 'She are my friend.' (3) 'They is happy today.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject-verb agreement", statement: "He/she/it -> is/has; I -> am/have; plural -> are/have." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'My brother has got two cats.' (he -> has).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'She is my friend.' (she -> is).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'They are happy today.' (they -> are).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(1) My brother has got two cats. (2) She is my friend. (3) They are happy today.",
            commonErrors: ["Only correcting some sentences.", "'childs'-style errors left in."],
            examinerNote: "Each correction earns 1 mark.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the question 'Are you happy?', what makes it a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ends with a full stop" },
              { id: "b", text: "It has no verb" },
              { id: "c", text: "It starts with 'Are' before the subject" },
              { id: "d", text: "It uses 'you'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be questions", statement: "Be-questions swap verb and subject: 'Are you...?' + question mark." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Are' comes before 'you' — inverted order.", working: "Are you...", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** It starts with 'Are' before the subject",
            commonErrors: ["Thinking the question mark alone makes it a question — word order matters."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Borrowing a Pen",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: Have you got a pen?\nB: Yes, I have. Here you are.\nA: Thank you.",
          },
          stem: "What does B mean when he says 'Yes, I have'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He lost his pen" },
              { id: "b", text: "He has a pen" },
              { id: "c", text: "He wants a pen" },
              { id: "d", text: "He is a pen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Short answers", statement: "'Yes, I have' answers 'Have you got...?' — it means he has one." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'Yes, I have' = yes, I have got a pen.", working: "he has a pen", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** He has a pen",
            commonErrors: ["Thinking B wants a pen — A asked the question."],
            examinerNote: "A1 for (a).",
          },
        },
        {
          id: "mla1-u3-be-have-got-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write about your family and possessions using 'be' and 'have got'.",
          parts: [
            { label: "a", prompt: "Write two sentences with 'be' (am/is/are).", marks: 1 },
            { label: "b", prompt: "Write two sentences with 'have got/has got'.", marks: 1 },
            { label: "c", prompt: "Write one question with 'Have you got...?' and one with 'Is/Are...?', then answer each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be and have got", statement: "Correct agreement: I am/have, he/she/it is/has, plural are/have." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — two correct be-sentences with right agreement.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two correct have/has got sentences.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — correct question forms 'Have you got...?' / 'Is/Are...?'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — correct word order, question marks and matching answers.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Two be-sentences + two have-got sentences + two correct Q&A pairs.",
            commonErrors: ["'Have you has got' — wrong auxiliary.", "Statement order in questions."],
            examinerNote: "All sentences must show correct agreement.",
          },
        },
        {
          id: "mla1-u3-be-have-got-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Our Pets",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I have got three pets: two cats and one dog. My sister has got one rabbit. We all love our pets.",
          },
          stem: "Read the text and write three numbers: cats, dogs and the sister's pets.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cats", answer: 2 },
              { label: "(b) Dogs", answer: 1 },
              { label: "(c) Sister's pets", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in pet texts", statement: "Quantities pair with their animals." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two cats'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'one dog'.", working: "1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'one rabbit'.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 1 (c) 1",
            commonErrors: ["Counting the rabbit as the speaker's pet — it is the sister's."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u3-present-simple",
      title: "Present simple for habits and facts",
      skill: "Use the present simple for routines, facts and likes, including the third-person -s.",
      lesson: {
        sections: [
          {
            heading: "When to use present simple",
            body: "Use the **present simple** for things that happen regularly or are always true: 'I get up at seven', 'She likes music', 'Water boils at 100 degrees'. Signal words: **every day, always, usually, sometimes, never**. It is the tense you will use most at MYP 1.",
          },
          {
            heading: "The -s rule",
            body: "With **he, she, it** the verb adds **-s** or **-es**: 'He plays', 'She watches', 'It rains'. With I/you/we/they the verb stays the same: 'They play'. In questions and negatives use **do/does**: 'Do you play?', 'She does not (doesn't) play'.",
          },
          {
            heading: "Likes and dislikes",
            body: "For hobbies and preferences use **like + -ing** or **like + noun**: 'I like swimming', 'She likes cats'. For strong feelings: 'I love...', 'I don't like...', 'I hate...'. Remember: 'she likes' but 'they like'.",
          },
        ],
        keyFormulas: [
          { name: "Present simple", statement: "Subject + verb(+s for he/she/it); do/does for questions and negatives" },
        ],
        workedExample: {
          problem: "Write about your morning routine in two sentences using 'every day'.",
          solution: "'I get up at seven every day. I have breakfast at half past seven.'",
        },
      },
      questions: [
        {
          id: "mla1-u3-present-simple-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She plays tennis every week." },
              { id: "b", text: "She playings tennis every week." },
              { id: "c", text: "She play tennis every week." },
              { id: "d", text: "She playing tennis every week." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Third person -s", statement: "He/she/it takes verb + s/es in present simple." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' requires 'plays' (verb + s).", working: "plays", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** She plays tennis every week.",
            commonErrors: ["Choosing (a) — forgetting the -s for 'she'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-present-simple-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a question: 'you / like / pizza?' (Do you like pizza?)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Do-questions", statement: "Present simple questions use Do/Does + subject + base verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Do you like pizza?' with correct order.", working: "Do you like pizza?", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — question mark at the end.", working: "?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Do you like pizza?",
            commonErrors: ["'You do like pizza?' — wrong question order."],
            examinerNote: "Accept the answer as a spoken question too.",
          },
        },
        {
          id: "mla1-u3-present-simple-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct these sentences and say why each was wrong: (1) 'He don't like milk.' (2) 'My sister watch TV every evening.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple negatives and -s", statement: "Negatives use don't/doesn't; he/she/it verbs take -s." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'He doesn't like milk' (he/she/it → doesn't).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'My sister watches TV' (verb + es after -ch).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains the doesn't rule for third person.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains the -es spelling rule.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(1) He doesn't like milk. — third person uses doesn't. (2) My sister watches TV — -ch takes -es.",
            commonErrors: ["'He don't' — mixing persons.", "'watchs' instead of 'watches'."],
            examinerNote: "Both corrections plus rule explanations needed for full marks.",
          },
        },
        {
          id: "mla1-u3-present-simple-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write about your typical school day in the present simple.",
          parts: [
            { label: "a", prompt: "Write four sentences about what you do every day (morning to afternoon).", marks: 3 },
            { label: "b", prompt: "Include at least two time/frequency words (every day, always, usually, sometimes, never).", marks: 2 },
            { label: "c", prompt: "Check the -s rule for any he/she/it sentences and correct all errors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple accuracy", statement: "Correct verb forms, -s for third person, frequency adverbs, punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four sentences describing a real daily routine in order.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct present simple verb forms throughout.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two frequency/time expressions used correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — expressions fit naturally in the sentences.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — self-check applied; third-person -s verified.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version has zero verb-agreement errors.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final text is understandable and coherent.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Four correct present-simple sentences with two frequency words and no agreement errors.",
            commonErrors: ["Missing -s on third-person verbs.", "Using past tense ('I went') instead of present simple."],
            examinerNote: "Routine must be plausible and consistently present tense.",
          },
        },
        {
          id: "mla1-u3-present-simple-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct verb: 'She ___ tennis every week.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "play" },
              { id: "b", text: "playing" },
              { id: "c", text: "plays" },
              { id: "d", text: "played" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Third person -s", statement: "He/she/it takes verb + s in present simple." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' requires 'plays'.", working: "plays", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** plays",
            commonErrors: ["Choosing 'play' — missing the -s for 'she'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-present-simple-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a signal for the present simple tense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tomorrow" },
              { id: "b", text: "Last week" },
              { id: "c", text: "Every day" },
              { id: "d", text: "Yesterday" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple signals", statement: "'Every day', 'always', 'usually', 'sometimes', 'never' signal present simple." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'every day' signals a routine in present simple.", working: "every day", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Every day",
            commonErrors: ["Choosing past/future time words."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-present-simple-q7",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "My Week",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I play football on Monday, Wednesday and Friday. I have swimming on Tuesday and Thursday.",
          },
          stem: "Read the text and write the number: how many days do you play football?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Football days", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting days", statement: "Count the named days for each activity." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — Monday, Wednesday, Friday = 3 days.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3",
            commonErrors: ["Counting swimming days too."],
            examinerNote: "Answer is 3.",
          },
        },
        {
          id: "mla1-u3-present-simple-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one sentence about what you do every morning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple routine", statement: "Routines use present simple: 'I get up at seven every day.'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a correct routine sentence.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I get up at seven every morning.'",
            commonErrors: ["Using past tense ('I got up') instead of present simple."],
            examinerNote: "Must describe a regular morning activity.",
          },
        },
        {
          id: "mla1-u3-present-simple-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She does play tennis?" },
              { id: "b", text: "Do she plays tennis?" },
              { id: "c", text: "She plays tennis?" },
              { id: "d", text: "Does she play tennis?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Does-questions", statement: "Third person questions use Does + subject + base verb: 'Does she play tennis?'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Does she play' is correct (does + base verb).", working: "Does she play tennis?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Does she play tennis?",
            commonErrors: ["Choosing (a) — a statement with a question mark is still wrong."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-present-simple-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct negative of 'He likes milk'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He don't like milk." },
              { id: "b", text: "He not like milk." },
              { id: "c", text: "He doesn't likes milk." },
              { id: "d", text: "He doesn't like milk." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple negatives", statement: "He/she/it -> doesn't + base verb: 'He doesn't like milk.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'he' takes 'doesn't' + base verb 'like'.", working: "He doesn't like milk.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** He doesn't like milk.",
            commonErrors: ["'doesn't likes' — double marking is wrong."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u3-present-simple-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "My Morning",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I get up at seven. I have breakfast at half past seven. I go to school at eight o'clock.",
          },
          stem: "Read the text and write two numbers: the hour I get up, and the hour school starts (when I go).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Get up hour", answer: 7 },
              { label: "(b) Go to school hour", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Times in routines", statement: "Routine times answer 'when' questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'get up at seven'.", working: "7", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'go to school at eight o'clock'.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 7 (b) 8",
            commonErrors: ["Writing 7.5 for (a) — half past is breakfast, not getting up."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u3-present-simple-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct these sentences: (1) 'He don't like milk.' (2) 'My sister watch TV every evening.' (3) 'They plays football on Saturdays.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple accuracy", statement: "Negatives use doesn't for he/she/it; -s only for he/she/it." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'He doesn't like milk.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'My sister watches TV' (-ch -> -es).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'They play football' (plural -> no -s).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(1) He doesn't like milk. (2) My sister watches TV. (3) They play football.",
            commonErrors: ["'watchs' instead of 'watches'; 'they plays' — plural needs base form."],
            examinerNote: "Each correction earns 1 mark.",
          },
        },
        {
          id: "mla1-u3-present-simple-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'She watches TV every evening', why does the verb end in '-es'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because 'she' is singular third person and 'watch' ends in -ch" },
              { id: "b", text: "Because 'evening' needs -es" },
              { id: "c", text: "Because TV is plural" },
              { id: "d", text: "There is no reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Third person -es", statement: "He/she/it verbs add -s, or -es after -s/-sh/-ch/-x: 'she watches'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' + 'watch' (-ch) -> 'watches'.", working: "she watches", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Because 'she' is singular third person and 'watch' ends in -ch",
            commonErrors: ["Thinking the -es comes from 'TV' or 'evening'."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla1-u3-present-simple-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Food Preferences",
            author: "Written for Akademik Space",
            source: "Dialogue practice",
            text: "A: Do you like pizza?\nB: Yes, but I prefer pasta.\nA: I like both.",
          },
          stem: "What does B prefer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "Pasta" },
              { id: "c", text: "Pizza" },
              { id: "d", text: "Both equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Preferences in dialogue", statement: "'Prefer' names the stronger choice." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'I prefer pasta.'", working: "pasta", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pasta",
            commonErrors: ["Choosing 'both' — that is A's answer."],
            examinerNote: "A1 for (b).",
          },
        },
        {
          id: "mla1-u3-present-simple-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write about your typical school day in the present simple.",
          parts: [
            { label: "a", prompt: "Write three sentences about what you do every day.", marks: 2 },
            { label: "b", prompt: "Include at least two frequency words (every day, always, usually, sometimes, never).", marks: 1 },
            { label: "c", prompt: "Check the -s rule for any he/she/it sentences and correct all errors.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present simple accuracy", statement: "Correct verb forms, -s for third person, frequency words, punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three sentences about a real daily routine.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct present simple verb forms.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two frequency/time expressions used correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check applied; final version has no agreement errors.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three correct present-simple sentences + two frequency words + no errors.",
            commonErrors: ["Missing -s on third-person verbs.", "Past tense instead of present."],
            examinerNote: "Routine must be plausible and consistently present tense.",
          },
        },
        {
          id: "mla1-u3-present-simple-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Weekly Schedule",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I have football on Monday and Thursday. I have swimming on Tuesday and Friday. I have music on Wednesday.",
          },
          stem: "Write three numbers from the text: football days, swimming days and music days.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Football days", answer: 2 },
              { label: "(b) Swimming days", answer: 2 },
              { label: "(c) Music days", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting schedule days", statement: "Count the named days for each activity." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — Monday and Thursday = 2.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — Tuesday and Friday = 2.", working: "2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — Wednesday only = 1.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 2 (c) 1",
            commonErrors: ["Counting Wednesday for football — it is music."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mla1-u2-lesson-2-2",
  code: "2-2",
  title: "Writing: Sentences, Descriptions and Simple Messages",
  goal: "I CAN write simple sentences with correct word order, describe things and people, and write short notes and messages.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion B: Reading",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Word order", definition: "The order in which words appear in a sentence — in English usually subject, verb, object." },
    { term: "Adjective", definition: "A describing word such as 'big', 'red' or 'happy'." },
    { term: "Note", definition: "A very short written message, often just a few words." },
    { term: "Message", definition: "A short written text to pass information to someone." },
    { term: "Capital letter", definition: "A large letter used at the start of a sentence, for names and for 'I'." },
  ],
  concepts: [
    {
      id: "mla1-u2-sentence-word-order",
      title: "Simple sentences and word order",
      skill: "Build correct simple sentences using subject-verb-object order and describing words.",
      lesson: {
        sections: [
          {
            heading: "English word order",
            body: "English sentences usually follow **Subject + Verb + Object**: 'The boy (S) kicks (V) the ball (O).' This is different from many languages, so practise checking the order every time you write. The describing word (adjective) usually goes **before** the noun: 'a red car', 'my big dog'.",
          },
          {
            heading: "Describing people and things",
            body: "Use **be** for describing: 'She is tall', 'The room is clean'. Use **have got** for possession and features: 'I have got two brothers', 'He has got blue eyes'. Adjectives can also come after 'look', 'feel', 'seem': 'You look happy.'",
          },
          {
            heading: "Capital letters and full stops",
            body: "Start every sentence with a **capital letter**, and end it with a **full stop** (.) or a **question mark** (?). Always write the word **I** with a capital letter, and capital letters for names: 'Tom', 'Monday', 'English'. These small rules make your writing look correct.",
          },
        ],
        keyFormulas: [
          { name: "Basic sentence", statement: "Subject + Verb + Object; adjective before noun" },
          { name: "Punctuation", statement: "Capital at the start; . for statements, ? for questions" },
        ],
        workedExample: {
          problem: "Put the words in order: 'dog / my / big / has / got / spots / black'",
          solution: "'My big dog has got black spots.' — subject 'my big dog', verb 'has got', object 'black spots'.",
        },
      },
      questions: [
        {
          id: "mla1-u2-sentence-word-order-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Put the words in the correct order: 'like / I / cats'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cats I like" },
              { id: "b", text: "I like cats" },
              { id: "c", text: "Cats like I" },
              { id: "d", text: "Like I cats" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word order", statement: "English statements follow subject-verb-object order." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I' is the subject, 'like' the verb, 'cats' the object.", working: "I like cats.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I like cats",
            commonErrors: ["Keeping the first-language word order."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence describing your pet or a favourite animal, using 'has got'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "have got", statement: "'Have got' expresses possession/features: subject + have/has got + noun/adjective." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct 'have/has got' structure.", working: "It has got ... / I have got ...", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct word order, capitals and full stop.", working: "... .", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My cat has got green eyes.'",
            commonErrors: ["Writing 'has got' with 'I' — 'I have got', not 'I has got'."],
            examinerNote: "Accept 'have' or 'has' matching the subject.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite these words as a correct sentence with good punctuation: 'park / the / to / goes / she / school / from'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence construction", statement: "Subject + verb + place; capital start and full stop end." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct order: 'She goes from school to the park' or 'She goes to the park from school'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — natural, idiomatic order preferred.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — capital 'S' and final full stop.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — the sentence is meaningful and uses all the words correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "She goes from school to the park. / She goes to the park from school.",
            commonErrors: ["'She goes the park to from school' — jumbled order.", "Forgetting the full stop."],
            examinerNote: "Either natural order accepted.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "My Grandmother",
            author: "Written for Akademik Space",
            source: "Writing prompt",
            text: "Help! These words are mixed up: 'kind / is / very / my / grandmother / and / helps / me'",
          },
          stem: "Use the words to write about your own family member, then correct two beginner mistakes.",
          parts: [
            { label: "a", prompt: "Order the given words into a correct sentence.", marks: 2 },
            { label: "b", prompt: "Write your own two-sentence description of a family member.", marks: 3 },
            { label: "c", prompt: "Write one common English beginner mistake and its correction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word order and punctuation", statement: "Subject-verb-object order, capital letters and full stops make correct sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'My grandmother is very kind and helps me.'", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct punctuation and capitals.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two sentences describing a real family member.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar, word order and vocabulary.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — each sentence ends with a full stop.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — identifies a real common error, e.g. 'She are happy' -> 'She is happy'.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — correction is accurate.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'My grandmother is very kind and helps me.' (b) two correct descriptive sentences (c) a correct error + correction.",
            commonErrors: ["'My grandmother very kind is' — adjective in wrong place.", "Correction that is also wrong."],
            examinerNote: "(b) must describe a real person; (c) error must be a genuine English error.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has correct word order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dog the fast runs." },
              { id: "b", text: "Runs the dog fast." },
              { id: "c", text: "Fast runs the dog." },
              { id: "d", text: "The dog runs fast." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word order", statement: "English statements follow subject-verb-object (plus describing words)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'The dog runs fast' is correct SVO order.", working: "The dog runs fast.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** The dog runs fast.",
            commonErrors: ["Choosing a jumbled first-language order."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does a describing word (adjective) usually go in English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Before the noun" },
              { id: "b", text: "After the noun" },
              { id: "c", text: "Before the verb only" },
              { id: "d", text: "At the end of the sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "Adjectives usually come before the noun: 'a red car', 'my big dog'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'red car' shows adjective before noun.", working: "before the noun", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Before the noun",
            commonErrors: ["Choosing 'after' — some languages put adjectives after nouns."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many words are in the sentence 'My dog is small'? Write the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of words", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word count", statement: "Count each separated word: My / dog / is / small = 4." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — count the four words.", working: "4", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 4",
            commonErrors: ["Counting 'is small' as one word."],
            examinerNote: "Answer is 4.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one sentence describing your school bag using 'has got'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "have got", statement: "'Has got/have got' expresses possession or features." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct 'has/have got' structure with the bag as subject.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct word order, capitals and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My school bag has got two pockets.'",
            commonErrors: ["'My school bag have got' — 'bag' is singular, needs 'has'."],
            examinerNote: "Accept any correct description.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She is tall." },
              { id: "b", text: "She be tall." },
              { id: "c", text: "She am tall." },
              { id: "d", text: "She are tall." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be agreement", statement: "'She' takes 'is': I am, he/she/it is, you/we/they are." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' requires 'is'.", working: "She is tall.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** She is tall.",
            commonErrors: ["Choosing 'are' or 'am' — wrong agreement."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is written correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Do You Like Cats?" },
              { id: "b", text: "Do you like cats?" },
              { id: "c", text: "Do you like cats." },
              { id: "d", text: "do you like cats" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question punctuation", statement: "Questions end with a question mark; only the first word and 'I' need capitals." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — question mark + capital 'D' + lowercase rest.", working: "Do you like cats?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Do you like cats?",
            commonErrors: ["Choosing (a) — a question needs '?', not '.'"],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "On My Desk",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "There are three pens on my desk. My pencil case has got two pencils and one ruler.",
          },
          stem: "Read the text and write two numbers: how many pens, and how many pencils?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Pens", answer: 3 },
              { label: "(b) Pencils", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities in a description answer how-many questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'three pens on my desk'.", working: "3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'two pencils'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 2",
            commonErrors: ["Writing 'one' — that is the ruler, not pencils."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these words in the correct order: 'big / has / my / dog / got / ears'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "have got word order", statement: "Subject + have/has got + describing word + noun: 'My dog has got big ears.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'My dog has got big ears.' — correct order.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'has got' agrees with singular 'dog'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — capital 'M' and final full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "My dog has got big ears.",
            commonErrors: ["'My dog have got' — singular subject needs 'has'."],
            examinerNote: "Only this order makes a correct sentence.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence has a capital-letter mistake?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cat sat." },
              { id: "b", text: "my dog is small." },
              { id: "c", text: "I like tea." },
              { id: "d", text: "My dog is small." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital letters", statement: "Every sentence starts with a capital letter; 'I' is always capital." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — (b) starts with lowercase 'my'.", working: "my -> My", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** my dog is small.",
            commonErrors: ["Missing that (b) needs a capital 'M'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Read: 'The happy boy plays football.' How many describing words are in the sentence? Write your answer as a choice.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adjective", statement: "An adjective describes a noun — here only 'happy' describes 'boy'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'happy' is the only describing word.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1",
            commonErrors: ["Counting 'plays' or 'football' as describing words."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write about your favourite animal or thing.",
          parts: [
            { label: "a", prompt: "Put these words in order: 'small / has / my / cat / got / eyes'", marks: 2 },
            { label: "b", prompt: "Write your own sentence describing something using an adjective before the noun.", marks: 1 },
            { label: "c", prompt: "Write one common beginner mistake and its correction.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence accuracy", statement: "Correct word order, adjective position, capitals and full stops." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'My cat has got small eyes.' — subject + has got + adjective + noun.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — capital 'M' and final full stop.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — a correct sentence with adjective before noun, e.g. 'I have got a small dog.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — a real error + correct fix, e.g. 'She are happy' -> 'She is happy'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'My cat has got small eyes.' (b) correct adjective sentence (c) correct error + fix.",
            commonErrors: ["Jumbled word order in (a).", "Error in (c) that is not a real English mistake."],
            examinerNote: "(a) must use 'has got' with the singular subject 'cat'.",
          },
        },
        {
          id: "mla1-u2-sentence-word-order-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "My Room",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "There are two windows and one door in my room. I have got three chairs and a big desk.",
          },
          stem: "Read the text and write three numbers: windows, doors and chairs.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Windows", answer: 2 },
              { label: "(b) Doors", answer: 1 },
              { label: "(c) Chairs", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities pair with their nouns." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two windows'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'one door'.", working: "1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'three chairs'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 1 (c) 3",
            commonErrors: ["Swapping windows and chairs."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
    {
      id: "mla1-u2-notes-messages",
      title: "Writing notes and messages",
      skill: "Write short, clear notes and messages for everyday situations.",
      lesson: {
        sections: [
          {
            heading: "What is a note?",
            body: "A **note** is very short — it tells someone one thing. 'Back at 5', 'Bring your book tomorrow', 'Phone me after school'. Notes can drop small words like 'I am' or 'I will', but the **meaning must be clear**. If the reader could misunderstand, add a word.",
          },
          {
            heading: "Messages to friends",
            body: "A **message** is a little longer than a note. It answers questions like: who is it for? what does it say? when? A message might be: 'Hi Tom, I can't come to the party on Saturday. Sorry! See you Monday. — Anna.' Messages often start 'Hi' or 'Dear' and end with a name or 'Bye'.",
          },
          {
            heading: "Check before you send",
            body: "Before finishing a note or message, ask: (1) Is it **short and clear**? (2) Did I say **who, what, when**? (3) Are capital letters and full stops correct? Even small texts need correct English — especially names and times.",
          },
        ],
        keyFormulas: [
          { name: "Note pattern", statement: "Who + what + when, as short as possible" },
        ],
        workedExample: {
          problem: "Write a note for your mum saying you will be home at four o'clock.",
          solution: "'Back at 4. — Sam' or 'Hi Mum, I'll be home at 4. Love, Sam.'",
        },
      },
      questions: [
        {
          id: "mla1-u2-notes-messages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best short note to leave for a friend who is not at home?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dear valued friend, I am writing to inform you that I visited your residence this afternoon." },
              { id: "b", text: "I went to your house and it was very nice there and I saw your dog which was big" },
              { id: "c", text: "Back at 5. — Jo" },
              { id: "d", text: "Hello" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Note conventions", statement: "Notes are short, clear and give who/what/when." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Back at 5. — Jo' is short, clear and signed.", working: "Back at 5. — Jo", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Back at 5. — Jo",
            commonErrors: ["Choosing the long formal option — wrong register for a note to a friend."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a one-line note telling your classmate to bring their English book to class tomorrow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Note essentials", statement: "A note says what is needed and when, as briefly as possible." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — note contains 'English book' and 'tomorrow'.", working: "Bring your English book tomorrow.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — brief note form with correct punctuation.", working: "Bring your English book tomorrow.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Bring your English book tomorrow.",
            commonErrors: ["Writing a full formal letter instead of a note.", "Missing 'tomorrow' (the when)."],
            examinerNote: "Accept any brief correct version, e.g. 'English book tmrw pls.'",
          },
        },
        {
          id: "mla1-u2-notes-messages-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'Back at 5' is a good note but 'I will be returning to this residence at seventeen hundred hours' is a bad note for a friend.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Register = choosing language to fit the audience and situation; notes to friends use informal short style." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Back at 5' is short, clear and natural for a friend.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — the long version uses formal words ('residence', 'seventeen hundred hours') that do not fit a friend.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — register matching shows awareness of audience.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — the reader understands a note faster when it is brief.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Short informal notes fit friends; long formal language is confusing and unnatural for a note.",
            commonErrors: ["Saying only 'the long one is too long' without mentioning register/audience."],
            examinerNote: "Must mention audience/appropriateness, not just length.",
          },
        },
        {
          id: "mla1-u2-notes-messages-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You cannot come to your friend's birthday party on Saturday. Write them a short message.",
          parts: [
            { label: "a", prompt: "Write the message (3-4 lines) starting with a greeting.", marks: 3 },
            { label: "b", prompt: "The message must say: you can't come, why (one reason), and an alternative plan.", marks: 2 },
            { label: "c", prompt: "Sign the message and end it politely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message structure", statement: "Greeting, message, reason, alternative, sign-off — informal but complete." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — greeting such as 'Hi Tom,' and 3-4 lines of message.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct sentence structures and punctuation.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion C: Speaking — the message sounds like a natural friend writing.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — all three pieces of information present: can't come, reason, alternative.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — information is clear and unambiguous.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — polite sign-off such as 'Sorry!' / 'See you soon!' / 'Love,'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — signature/name written correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A 3-4 line informal message with greeting, can't-come + reason + alternative, and sign-off + name.",
            commonErrors: ["Forgetting the reason or alternative.", "Using overly formal language for a friend."],
            examinerNote: "All three required pieces of information must appear.",
          },
        },
        {
          id: "mla1-u2-notes-messages-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'note' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A very long formal letter" },
              { id: "b", text: "A poem" },
              { id: "c", text: "A very short message with one piece of information" },
              { id: "d", text: "A list of questions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Note", statement: "A note is very short — it tells someone one thing quickly." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — a note is short and gives one piece of information.", working: "short message", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** A very short message with one piece of information",
            commonErrors: ["Thinking a note is a long formal text."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best short note to leave for a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I went to the shops and bought some things and it was nice" },
              { id: "b", text: "Out at 5. — Kim" },
              { id: "c", text: "To whom it may concern, please be advised that I departed your residence at approximately seventeen hundred hours." },
              { id: "d", text: "Hello" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Note conventions", statement: "Notes to friends are short, informal and signed." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Out at 5. — Kim' is short, clear and signed.", working: "Out at 5. — Kim", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Out at 5. — Kim",
            commonErrors: ["Choosing the long formal option — wrong register."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many words are in the note 'Back at 5.'? Write the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of words", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word count", statement: "Count each separated word: Back / at / 5 = 3." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — count the three words.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 3",
            commonErrors: ["Not counting the number '5' as a word."],
            examinerNote: "Answer is 3.",
          },
        },
        {
          id: "mla1-u2-notes-messages-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a one-line note for your mum saying you will be home at six o'clock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Note essentials", statement: "A note gives who/what/when as briefly as possible." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — note says home at six (the when).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — brief note form with correct punctuation, e.g. 'Back at 6. — Sam'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Back at 6. — Sam' or 'Hi Mum, home at 6.'",
            commonErrors: ["Writing a full letter instead of a note.", "Missing the time."],
            examinerNote: "Any brief correct note accepted.",
          },
        },
        {
          id: "mla1-u2-notes-messages-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A message to a friend usually starts with...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To whom it may concern" },
              { id: "b", text: "Dear Sir or Madam" },
              { id: "c", text: "NOTICE" },
              { id: "d", text: "Hi or Dear + the friend's name" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message openings", statement: "Friendly messages start 'Hi Tom,' or 'Dear Anna,' — informal greetings." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Hi/Dear + name' is the natural message opening.", working: "Hi / Dear + name", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(d)** Hi or Dear + the friend's name",
            commonErrors: ["Choosing formal business openings."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which opening is too formal for a note to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hi Tom," },
              { id: "b", text: "Hello," },
              { id: "c", text: "Dear Anna," },
              { id: "d", text: "I am writing to respectfully inform you that..." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Register means matching language to the audience; friends get informal greetings." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I am writing to respectfully inform you' is formal business English, not friend language.", working: "too formal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** I am writing to respectfully inform you that...",
            commonErrors: ["Thinking all greetings are equal — register matters."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q11",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Party Message",
            author: "Written for Akademik Space",
            source: "Message reading practice",
            text: "Hi Sam,\nMy birthday party is on Saturday at 3 o'clock. It is at my house. Please bring a gift — it costs 5 euros at the shop. Can you come?\nSee you Saturday!\n— Anna",
          },
          stem: "Read the message and write two numbers: the party time (hour) and the gift price.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Party time (hour)", answer: 3 },
              { label: "(b) Gift price (euros)", answer: 5, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in messages", statement: "Times and prices in messages are key details." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'at 3 o'clock'.", working: "3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'it costs 5 euros'.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 5",
            commonErrors: ["Writing the day instead of the hour for (a)."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u2-notes-messages-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a short message to a friend saying you cannot do your homework today because you are ill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message structure", statement: "Greeting + message + reason + friendly close + name." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — natural, friendly tone for a friend.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — all three pieces of information: can't do homework, reason (ill), addressed to friend.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — greeting/sign-off and correct punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hi Tom, I can't do my homework today — I am ill. Sorry! See you tomorrow. — Sam'",
            commonErrors: ["Missing the reason.", "Overly formal language."],
            examinerNote: "Must include can't + reason + sign-off.",
          },
        },
        {
          id: "mla1-u2-notes-messages-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which message is the clearest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saturday ill party" },
              { id: "b", text: "To the esteemed recipient: I regret to inform you of my inability to attend the scheduled gathering." },
              { id: "c", text: "hi tom cant come saterday sorry see u monday anna" },
              { id: "d", text: "Hi Tom, I can't come on Saturday because I am ill. Sorry! See you Monday. — Anna" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarity in messages", statement: "A clear message is short but complete: greeting, can't-come, reason, alternative, sign-off." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — (b) has greeting, reason, alternative and sign-off in correct English.", working: "Hi Tom... See you Monday. — Anna", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Hi Tom, I can't come on Saturday because I am ill. Sorry! See you Monday. — Anna",
            commonErrors: ["Choosing (a) — no punctuation or capitals makes it hard to read."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which note is better for a friend?\nNote A: 'Bring your English book tomorrow pls.'\nNote B: 'I am writing to respectfully request that you kindly bring your English textbook to class tomorrow.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Note B" },
              { id: "b", text: "Neither is good" },
              { id: "c", text: "Both are equal" },
              { id: "d", text: "Note A" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Notes to friends use short informal language; Note B is overly formal." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — Note A is short, clear and friendly; Note B is formal.", working: "Note A", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Note A",
            commonErrors: ["Thinking longer = better; register matters more."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You will be at your grandmother's house after school today. Write first a note, then a longer message.",
          parts: [
            { label: "a", prompt: "Write a one-line note for your mum (who/what/when).", marks: 2 },
            { label: "b", prompt: "Rewrite it as a fuller message of 2-3 sentences with a greeting and sign-off.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Note vs message", statement: "A note is one line; a message is 2-3 sentences with greeting and sign-off." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — note gives where/when, e.g. 'At Gran's after school — back at 6. — Sam'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — brief note form with correct punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — fuller message has a greeting and friendly sign-off.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar, word order and punctuation throughout.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) one-line note (b) 2-3 sentence message with greeting and sign-off.",
            commonErrors: ["Writing the same length for both — they must differ.", "Missing sign-off in (b)."],
            examinerNote: "(b) must be longer and friendlier than (a).",
          },
        },
        {
          id: "mla1-u2-notes-messages-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Party Details",
            author: "Written for Akademik Space",
            source: "Message reading practice",
            text: "The party is at 4 o'clock. Each pizza costs 6 euros. We need 3 pizzas for the class.",
          },
          stem: "Read the text and write three numbers: the party hour, the price of each pizza and the number of pizzas needed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Party hour", answer: 4 },
              { label: "(b) Price per pizza (euros)", answer: 6, unit: "euros" },
              { label: "(c) Pizzas needed", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in messages", statement: "Times, prices and quantities in a message are key details." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'at 4 o'clock'.", working: "4", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Each pizza costs 6 euros.'", working: "6", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'We need 3 pizzas'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 (b) 6 (c) 3",
            commonErrors: ["Confusing the price with the number of pizzas."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
  ],
};

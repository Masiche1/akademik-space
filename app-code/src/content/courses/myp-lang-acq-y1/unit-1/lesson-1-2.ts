import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mla1-u1-lesson-1-2",
  code: "1-2",
  title: "Reading Simple Texts: Words, Sentences and Short Stories",
  goal: "I CAN read high-frequency English words, simple sentences and very short stories, and find who, what and where in a text.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "High-frequency word", definition: "A word that appears very often in English, such as 'the', 'and', 'is', 'go' or 'like'." },
    { term: "Sentence", definition: "A group of words that expresses a complete idea and usually begins with a capital letter." },
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Setting", definition: "The place and time where a story happens." },
    { term: "Picture dictionary", definition: "A dictionary that shows a picture next to each word to help you remember it." },
  ],
  concepts: [
    {
      id: "mla1-u1-high-frequency-reading",
      title: "High-frequency words and simple sentences",
      skill: "Recognise and read the most common English words and simple sentence patterns.",
      lesson: {
        sections: [
          {
            heading: "Start with the words you see most",
            body: "A small number of words make up most of written English. The **100 most common words** — 'the', 'a', 'and', 'is', 'to', 'of', 'in', 'it', 'you', 'that' — appear on almost every page. Learn these first and reading becomes much easier. Then add words about your own life: family, school, food, colours and numbers.",
          },
          {
            heading: "Simple sentence patterns",
            body: "Beginner sentences usually follow one of three patterns: **Subject + verb** ('Dogs bark'), **Subject + verb + object** ('I like apples'), and questions with **do/does** or **is/are** ('Do you like tea?', 'Is she a teacher?'). Recognising these patterns helps you guess the meaning of new sentences.",
          },
          {
            heading: "Using a picture dictionary",
            body: "When you meet a new word, do not stop reading. First guess from the pictures and the other words. Then check a **picture dictionary** — it shows a picture next to the word, which helps you remember it. Write the new word and its picture word in your notebook.",
          },
        ],
        keyFormulas: [
          { name: "Sentence patterns", statement: "Subject + verb (+ object); Questions: Do/Does + subject + verb?" },
        ],
        workedExample: {
          problem: "Read this sentence: 'The cat is black.' What are the subject, verb and describing word?",
          solution: "Subject: 'The cat'. Verb: 'is'. Describing word: 'black'. The sentence means the cat has black colour.",
        },
      },
      questions: [
        {
          id: "mla1-u1-high-frequency-reading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is one of the 100 most common words in English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elephant" },
              { id: "b", text: "And" },
              { id: "c", text: "Yesterday" },
              { id: "d", text: "Beautiful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "High-frequency vocabulary", statement: "Words like 'the', 'and', 'is', 'you' appear most often in English texts." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'and' is a top-100 function word; the others are content words.", working: "and", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** And",
            commonErrors: ["Choosing a long or rare word instead of a function word."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "A Simple Sentence",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "My dog is small. It has brown fur and big ears. It likes to play in the garden.",
          },
          stem: "Read the text. Write down two describing words that tell us about the dog.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail recognition", statement: "Describing words (adjectives) appear next to nouns or after 'is/has'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'small' describes the dog.", working: "small", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — a second correct detail, e.g. 'brown', 'big' or 'likes'.", working: "brown / big / likes", marks: 1, markCode: "B" },
            ],
            finalAnswer: "small; brown / big",
            commonErrors: ["Writing 'dog' or 'garden' — nouns, not describing words."],
            examinerNote: "Accept any two correct describing words.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why it helps to learn the 100 most common English words before trying to read longer stories.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary strategy", statement: "High-frequency words carry sentence structure, so they unlock meaning quickly." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — these words appear in almost every sentence.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — knowing them helps you guess new words from context.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — they also help when you write your own sentences.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "They appear everywhere, so they unlock most sentences and help you guess unknown words.",
            commonErrors: ["Saying only 'because they are easy' without explaining frequency."],
            examinerNote: "Credit any answer linking frequency to comprehension.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Sam's Family",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "This is Sam. Sam is eight years old. He lives in a small house with his mother, his father and his little sister Ana. Ana is five. Sam likes football and swimming. His sister likes drawing pictures.",
          },
          stem: "Read the text about Sam's family and answer the questions.",
          parts: [
            { label: "a", prompt: "How old is Sam?", marks: 1 },
            { label: "b", prompt: "Name two things Sam likes.", marks: 2 },
            { label: "c", prompt: "Write one true sentence about Ana using the word 'likes'.", marks: 2 },
            { label: "d", prompt: "Write one true sentence about where Sam lives.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading for detail", statement: "Answers come directly from the text; written sentences must copy correct patterns." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Sam is eight years old.'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — football and swimming.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — both items given.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — e.g. 'Ana likes drawing pictures.' with correct subject-verb pattern.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — correct capital letter and full stop.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — e.g. 'Sam lives in a small house.' using 'lives in' correctly.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) eight (b) football and swimming (c) Ana likes drawing pictures. (d) Sam lives in a small house.",
            commonErrors: ["Giving 'five' for Sam — that is Ana's age.", "Writing 'Ana like drawing' instead of 'likes'."],
            examinerNote: "(c) and (d) must be true to the text.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sentence 'The cat is black', which word describes the cat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is" },
              { id: "b", text: "The" },
              { id: "c", text: "cat" },
              { id: "d", text: "black" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Describing word", statement: "An adjective tells us what something is like: 'black', 'big', 'happy'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'black' describes the cat's colour.", working: "black", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** black",
            commonErrors: ["Choosing 'cat' — that is the thing, not the description."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence follows the Subject + Verb + Object pattern?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Apples I like" },
              { id: "b", text: "Like I apples" },
              { id: "c", text: "I like apples" },
              { id: "d", text: "Apples like I" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence patterns", statement: "English statements follow Subject + Verb + Object: 'I (S) like (V) apples (O).'" },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'I like apples' has subject, verb, object in order.", working: "I like apples", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** I like apples",
            commonErrors: ["Keeping first-language word order like 'Apples I like'."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "My Family",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "I have got two brothers and one sister. We live in a house with three bedrooms.",
          },
          stem: "Read the text and write two numbers: how many brothers, and how many sisters?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Brothers", answer: 2 },
              { label: "(b) Sisters", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in texts", statement: "Numbers appear as words or digits; match them to the right noun." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'two brothers'.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'one sister'.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 1",
            commonErrors: ["Swapping brothers and sisters."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one simple sentence about your favourite food using 'I like'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Like + noun", statement: "'I like' + noun expresses a preference: 'I like pizza.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence uses 'I like' + a food with correct word order.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I like pizza.'",
            commonErrors: ["'I like am pizza' — adding an extra verb.", "Missing full stop."],
            examinerNote: "Content must be the student's true preference.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct question form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Like you tea?" },
              { id: "b", text: "You like tea?" },
              { id: "c", text: "Do you like tea?" },
              { id: "d", text: "You do like tea?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Do-questions", statement: "Yes/no questions use Do/Does + subject + base verb: 'Do you like tea?'" },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — recognise the correct question pattern.", working: "Do you like tea?", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Do you like tea?",
            commonErrors: ["Choosing a statement with a question mark — word order is still wrong."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "You meet a new word 'giraffe' in a story, and there is a picture next to it. What should you do first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip the whole page" },
              { id: "b", text: "Ask the teacher immediately" },
              { id: "c", text: "Guess the meaning from the picture and context" },
              { id: "d", text: "Stop and translate every word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Guessing from context", statement: "Pictures and surrounding words give clues to a new word's meaning." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — guess first, then check a dictionary.", working: "guess from context", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Guess the meaning from the picture and context",
            commonErrors: ["Stopping the whole reading to translate — breaks the flow."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Numbers Everywhere",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "There are five fingers on one hand. A week has seven days. A year has twelve months. I have got ten toes.",
          },
          stem: "Read the text and write three numbers: days in a week, months in a year and fingers on one hand.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Days in a week", answer: 7 },
              { label: "(b) Months in a year", answer: 12 },
              { label: "(c) Fingers on one hand", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers as words", statement: "Number words like 'seven', 'twelve', 'five' carry the values." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'A week has seven days.'", working: "7", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'A year has twelve months.'", working: "12", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'five fingers on one hand'.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 7 (b) 12 (c) 5",
            commonErrors: ["Writing 'ten' for fingers — that is toes."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write three sentences about yourself using 'I am', 'I have got' and 'I like'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Personal sentence patterns", statement: "'I am + adjective', 'I have got + noun', 'I like + noun/-ing' are core beginner patterns." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — a correct 'I am...' sentence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — a correct 'I have got...' sentence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — a correct 'I like...' sentence; all with capitals and full stops.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I am ten years old. I have got a dog. I like football.'",
            commonErrors: ["'I have got' missing 'got', or 'I am like' instead of 'I like'."],
            examinerNote: "All three patterns must appear correctly.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is written correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She is my friend." },
              { id: "b", text: "She are my friend." },
              { id: "c", text: "She be my friend." },
              { id: "d", text: "She am my friend." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Be agreement", statement: "'She' takes 'is': I am, he/she/it is, you/we/they are." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she' requires 'is'.", working: "She is", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** She is my friend.",
            commonErrors: ["Choosing 'are' or 'am' — wrong agreement for 'she'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Put these words in the correct order: 'yesterday / park / to / went / I / the'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Went I to the park yesterday" },
              { id: "b", text: "I the park yesterday went" },
              { id: "c", text: "I went to the park yesterday" },
              { id: "d", text: "Yesterday I park went the" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word order", statement: "English follows subject-verb-object; time words like 'yesterday' often go at the end." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I went to the park yesterday' is correct SVO order.", working: "I went to the park yesterday", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** I went to the park yesterday",
            commonErrors: ["Putting 'yesterday' in the middle — it sounds unnatural."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Ben's Day",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Ben gets up at seven. He has breakfast at half past seven. He walks to school. School starts at nine. He has lunch at twelve.",
          },
          stem: "Read about Ben's day and complete the tasks.",
          parts: [
            { label: "a", prompt: "What time does Ben get up?", marks: 1 },
            { label: "b", prompt: "How does Ben travel to school?", marks: 1 },
            { label: "c", prompt: "When does school start?", marks: 1 },
            { label: "d", prompt: "Put the day in order using 'First', 'Then' and 'At the end'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequencing a day", statement: "Times and sequence markers organise events in order." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Ben gets up at seven.'", working: "seven o'clock", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'He walks to school.'", working: "walks", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'School starts at nine.'", working: "nine o'clock", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — events in order with sequence markers, e.g. 'First he gets up... Then he walks to school... At the end he has lunch.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) at seven (b) he walks (c) at nine (d) ordered retelling with First/Then/At the end.",
            commonErrors: ["Answering 'half past seven' for getting up — that is breakfast."],
            examinerNote: "(d) must keep events in the text's order.",
          },
        },
        {
          id: "mla1-u1-high-frequency-reading-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Our Class",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "In our class there are twelve girls and fourteen boys. Five students have got a dog. Three students have got a cat. The rest have no pet.",
          },
          stem: "Write three numbers from the text: the total number of students, the number with a dog and the number with no pet.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total students", answer: 26 },
              { label: "(b) Students with a dog", answer: 5 },
              { label: "(c) Students with no pet", answer: 14 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Totals are found by adding; 'the rest' means what remains." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 12 girls + 14 boys = 26 students.", working: "26", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Five students have got a dog.'", working: "5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — students with pets: 5 + 3 = 8, so 'the rest' = 26 - 8.", working: "18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 26 (b) 5 (c) 18",
            commonErrors: ["Writing 3 for (c) — that is the number with a cat.", "Forgetting to subtract pet owners from the total."],
            examinerNote: "(c) requires 26 - (5 + 3) = 18.",
          },
        },
      ],
    },
    {
      id: "mla1-u1-short-stories",
      title: "Reading very short stories",
      skill: "Follow a simple story: identify characters, setting, what happens and how it ends.",
      lesson: {
        sections: [
          {
            heading: "The parts of a story",
            body: "Every story has basic parts you can look for: the **characters** (who), the **setting** (where and when), the **events** (what happens), and often a surprise at the end. Beginner stories use simple past tense: 'A cat walked into the kitchen. It was hungry.'",
          },
          {
            heading: "Reading a story in three passes",
            body: "Use three passes: (1) Read once quickly for the **main idea** — what is the story about? (2) Read again to find **who** and **where**. (3) Read once more to answer **what happens** and **how it ends**. Do not translate every word — let the story carry you.",
          },
          {
            heading: "Retelling a story simply",
            body: "To show you understood, retell the story in your own simple English: 'First... Then... At the end...'. Even three or four sentences is good comprehension practice.",
          },
        ],
        keyFormulas: [
          { name: "Story elements", statement: "Who (characters) + Where (setting) + What happens (events) + Ending" },
        ],
        workedExample: {
          problem: "Story: 'A little bird sat on a branch. It sang a beautiful song. A cat heard the song and ran to the tree.' What happens at the end?",
          solution: "A cat hears the bird's song and runs toward the tree — a moment of danger or surprise.",
        },
      },
      questions: [
        {
          id: "mla1-u1-short-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a story, what does the 'setting' tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How the story ends" },
              { id: "b", text: "How many pages the book has" },
              { id: "c", text: "Who the characters are" },
              { id: "d", text: "Where and when the story happens" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Setting", statement: "The place and time in which a story happens." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — setting = where/when; characters = who.", working: "setting = where and when", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Where and when the story happens",
            commonErrors: ["Confusing setting with characters."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Lost Ball",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Tom played football in the park. His ball went into the river. He was sad. Then a boy gave him a new ball. Tom was happy again.",
          },
          stem: "Read the story and answer: Who is the main character? Where does the story happen? What happens at the end?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension", statement: "Characters, setting and ending can each be located in the text." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the main character is Tom.", working: "Tom", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — setting is the park.", working: "the park", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — ending: a boy gives Tom a new ball and Tom is happy.", working: "He gets a new ball and is happy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Tom; the park; Tom receives a new ball and is happy.",
            commonErrors: ["Answering 'football' as the setting — it is the activity, not the place."],
            examinerNote: "Accept 'a boy' as the giver.",
          },
        },
        {
          id: "mla1-u1-short-stories-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Little Boat",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Mia had a small red boat. Every day she sailed it on the lake near her house. One day the wind was strong. The boat went far away. Mia was worried, but her father found it on the other side of the lake.",
          },
          stem: "Explain why Mia was worried, using information from the story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from text", statement: "Reasons can be inferred by linking events: boat far away + wind strong + worried." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the wind was strong and the boat went far away from Mia.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — a boat far away on a lake is dangerous or could be lost.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — so she was worried for the boat's safety.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The wind was strong and her boat went far away, so she feared it was lost or in danger.",
            commonErrors: ["Saying she was worried 'about the weather' without linking it to the boat."],
            examinerNote: "Must connect events, not just repeat 'she was worried'.",
          },
        },
        {
          id: "mla1-u1-short-stories-q4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "A Surprise for Mum",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "It was Saturday morning. Leo's mum was in the kitchen making breakfast. Leo had a secret. In his pocket was a small gift — a card he had made at school. He wanted to give it to her before she went to work. But the phone rang. It was Aunt Rosa. She was coming to visit! Leo put the card back in his pocket and went to the door.",
          },
          stem: "Read the story and complete the tasks.",
          parts: [
            { label: "a", prompt: "When does the story happen?", marks: 1 },
            { label: "b", prompt: "What is Leo's secret?", marks: 1 },
            { label: "c", prompt: "Why does Leo put the card back in his pocket?", marks: 2 },
            { label: "d", prompt: "Retell the story in three or four sentences using 'First', 'Then' and 'At the end'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retelling", statement: "A retelling keeps the main events in order using simple past tense." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'It was Saturday morning.'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — a card he made at school (a gift for his mum).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — Aunt Rosa is coming to visit, so Leo goes to the door.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — the phone call interrupts his plan to give the card.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — retelling in order: Leo makes/hides a card, wants to give it to mum, Aunt Rosa calls, Leo goes to the door.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — sequence markers 'First/Then/At the end' used.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — mostly accurate simple past tense and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Saturday morning (b) a card/gift he made for his mum (c) Aunt Rosa is coming, so he goes to the door (d) ordered retelling with sequence markers.",
            commonErrors: ["Retelling events out of order.", "Using present tense throughout."],
            examinerNote: "(d) requires 3-4 sentences covering main events.",
          },
        },
        {
          id: "mla1-u1-short-stories-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a story, who are the 'characters'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The people or animals in the story" },
              { id: "b", text: "The title of the book" },
              { id: "c", text: "The place where the story happens" },
              { id: "d", text: "The last sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Character", statement: "Characters are the people or animals who take part in a story." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — characters = who is in the story.", working: "people or animals", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The people or animals in the story",
            commonErrors: ["Confusing characters with the setting."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story says: 'A girl named Ana found a lost cat in the park.' Where does this part of the story happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At home" },
              { id: "b", text: "In the park" },
              { id: "c", text: "At school" },
              { id: "d", text: "In a shop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Finding the setting", statement: "The setting is the place named in the story — here, 'the park'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'in the park' gives the place.", working: "the park", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In the park",
            commonErrors: ["Choosing 'school' — that word is not in the story."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q7",
          difficulty: "foundation",
          totalMarks: 3,
          extract: {
            title: "The Race",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Ben ran the race in thirty seconds. Kim ran in twenty-five seconds. Ana ran in twenty-eight seconds. Kim was the fastest.",
          },
          stem: "Read the story and write three numbers: Ben's time, Kim's time and Ana's time (in seconds).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Ben's time", answer: 30, unit: "seconds" },
              { label: "(b) Kim's time", answer: 25, unit: "seconds" },
              { label: "(c) Ana's time", answer: 28, unit: "seconds" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in stories", statement: "Times and quantities in stories are key details to extract." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Ben ran the race in thirty seconds.'", working: "30", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'Kim ran in twenty-five seconds.'", working: "25", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'Ana ran in twenty-eight seconds.'", working: "28", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 30 (b) 25 (c) 28",
            commonErrors: ["Swapping Ana's and Ben's times."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-short-stories-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write one sentence about what happens at the end of your favourite story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identifying the ending", statement: "The ending is how the story finishes — the last events." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sentence correctly describes the story's ending.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — complete sentence with capital letter and full stop.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'At the end, the dragon saves the village.'",
            commonErrors: ["Describing the beginning instead of the ending."],
            examinerNote: "Ending must match the student's own favourite story.",
          },
        },
        {
          id: "mla1-u1-short-stories-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The dog barked loudly. It ran to the gate.' What does 'It' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog" },
              { id: "b", text: "Loudly" },
              { id: "c", text: "Barked" },
              { id: "d", text: "The gate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pronoun reference", statement: "'It' usually refers back to the subject of the previous sentence — the dog." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'It' = the dog, the subject of the first sentence.", working: "the dog", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The dog",
            commonErrors: ["Choosing 'the gate' — that is where the dog ran, not who 'it' is."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence best retells a story simply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story was about many interesting things" },
              { id: "b", text: "Then the hero did a thing and stuff happened" },
              { id: "c", text: "Once upon a time there was a very long and complicated tale" },
              { id: "d", text: "First the cat sat on the mat. Then the dog ran in." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retelling", statement: "A good retelling gives the main events in order with simple, correct sentences." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — (b) has ordered events in clear simple English.", working: "First... Then...", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** First the cat sat on the mat. Then the dog ran in.",
            commonErrors: ["Choosing a vague sentence with no real events."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Toy Shop",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Mia had ten coins. Each toy cost two coins. She bought three toys. She had four coins left.",
          },
          stem: "Read the story and write three numbers: how many coins Mia had, how many toys she bought and how many coins were left.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Coins Mia had", answer: 10 },
              { label: "(b) Toys she bought", answer: 3 },
              { label: "(c) Coins left", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in stories", statement: "Quantities in a story answer 'how many' questions." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Mia had ten coins.'", working: "10", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'She bought three toys.'", working: "3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'She had four coins left.'", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 10 (b) 3 (c) 4",
            commonErrors: ["Writing 'two' — that is the cost of each toy, not the coins left."],
            examinerNote: "Accept number words.",
          },
        },
        {
          id: "mla1-u1-short-stories-q12",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "A Sudden Storm",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "A bird sat on a wall. A big cat walked slowly towards it. The bird flew away quickly. The cat was hungry, but the bird was safe.",
          },
          stem: "Answer two questions about the story: What is the main event? Which character is in danger?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story events", statement: "The main event is what happens; characters in danger are those at risk in the story." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — main event: the cat walks towards the bird and the bird flies away.", working: "cat approaches, bird escapes", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — the bird is in danger from the hungry cat.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — answers are complete, clear sentences.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "The cat walks towards the bird and the bird flies away; the bird is in danger.",
            commonErrors: ["Saying the cat is in danger — the cat is the hunter, not the hunted."],
            examinerNote: "Main event must include both the threat and the escape.",
          },
        },
        {
          id: "mla1-u1-short-stories-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a story, what is the 'ending'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How the story finishes" },
              { id: "b", text: "The pictures" },
              { id: "c", text: "The first sentence" },
              { id: "d", text: "The middle part" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ending", statement: "The ending is the part where the story finishes — the final events." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — ending = how the story finishes.", working: "how the story finishes", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** How the story finishes",
            commonErrors: ["Confusing ending with beginning."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q14",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Max's Kite",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Max lost his kite in a tall tree. His friend helped him. They got it down with a long stick. Max was happy.",
          },
          stem: "How does the story end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Max loses his kite forever" },
              { id: "b", text: "Max goes home sad" },
              { id: "c", text: "The kite breaks in the tree" },
              { id: "d", text: "Max's friend helps him get the kite down" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story endings", statement: "The ending resolves the problem — here, the kite is rescued." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — the friend helps and they get the kite down; Max is happy.", working: "friend helps, kite saved", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Max's friend helps him get the kite down",
            commonErrors: ["Choosing (d) — 'sad' belongs to the middle, not the happy ending."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla1-u1-short-stories-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Helping in the Garden",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Every Saturday, Rina helps her grandmother in the garden. They plant flowers and grow vegetables. Last week they planted tomatoes. Now the plants are getting big.",
          },
          stem: "Read the story and complete the tasks.",
          parts: [
            { label: "a", prompt: "Who are the characters in the story?", marks: 1 },
            { label: "b", prompt: "What do Rina and her grandmother do every Saturday?", marks: 1 },
            { label: "c", prompt: "What did they plant last week?", marks: 1 },
            { label: "d", prompt: "Retell the story in three sentences using 'Every week', 'Last week' and 'Now'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension and retelling", statement: "Characters, routine events and recent events can each be found in the text." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — Rina and her grandmother.", working: "Rina and her grandmother", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'help her grandmother in the garden... plant flowers and grow vegetables.'", working: "garden work: flowers and vegetables", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'they planted tomatoes.'", working: "tomatoes", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion D: Writing — three sentences in time order using the given markers.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Rina and her grandmother (b) garden work — flowers and vegetables (c) tomatoes (d) ordered retelling.",
            commonErrors: ["Answering 'flowers' for (c) — that is the usual activity; tomatoes were planted last week."],
            examinerNote: "(d) must keep the time order: routine, last week, now.",
          },
        },
        {
          id: "mla1-u1-short-stories-q16",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Lemonade Stand",
            author: "Written for Akademik Space",
            source: "Story practice",
            text: "Sara made twenty cups of lemonade. She sold fifteen cups on Saturday and four cups on Sunday. Only one cup was left.",
          },
          stem: "Write three numbers from the story: how many cups Sara made, how many she sold on Saturday and how many were left.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cups made", answer: 20 },
              { label: "(b) Cups sold Saturday", answer: 15 },
              { label: "(c) Cups left", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in stories", statement: "Quantities answer how-many questions; 'left' means remaining." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'Sara made twenty cups of lemonade.'", working: "20", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'sold fifteen cups on Saturday'.", working: "15", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'Only one cup was left.' (20 - 15 - 4 = 1 confirms).", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 20 (b) 15 (c) 1",
            commonErrors: ["Writing 'four' for (c) — that is Sunday sales.", "Answering (c) as 19 — cups left means unsold, which is 1."],
            examinerNote: "Accept number words.",
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cipe-u1-lesson-1-12",
  code: "1-12",
  title: "Stage 1 — Books, Performance and the Alphabet",
  goal: "I CAN recognise book parts, recite the alphabet and perform short readings.",
  standards: ["Cambridge Primary English 0058 Stage 1: reading and speaking",
  "Cambridge Primary English 0058 framework substrands: 1Rs, 1Ra, 1SLp, 1Rv"],
  stage: 1,
  vocabulary: [
    { term: "Cover", definition: "Front of a book showing the title and picture." },
    { term: "Title", definition: "Name of the book or story." },
    { term: "Contents", definition: "List of chapters or sections inside a book." },
    { term: "Alphabet", definition: "The 26 letters in order: a b c … z." },
    { term: "Recite", definition: "Say aloud from memory, like a poem." },
  ],
  concepts: [
    {
      id: "cipe-u1-s12-books-perf",
      title: "Books, performance and the alphabet",
      skill: "Identify book parts, recite the alphabet and perform simple readings at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Parts of a book",
            body: "Every book has a cover (front with title and picture), a title (the book's name), and often contents (a list of what's inside). Fiction tells stories; non-fiction gives information. Different books look different depending on their purpose — a recipe book looks nothing like a storybook.",
          },
          {
            heading: "Alphabet and performance",
            body: "The alphabet is the 26 letters in order — recite it forwards and know where each letter sits. When reading aloud, pause at full stops and use expression for questions and excitement. Perform poems by keeping rhythm; join in role play by taking a character's voice.",
          },
        ],
        keyFormulas: [
          { name: "Book parts", statement: "cover, title, contents" },
          { name: "Alphabet", statement: "26 letters a–z in order" },
        ],
        workedExample: {
          problem: "Name three parts of a book.",
          solution: "Cover, title, contents.",
        },
      },
      questions: [
        {
          id: "cipe-u1-bp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the front cover of a book called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Contents" },
            { id: "b", text: "Title page" },
            { id: "c", text: "Index" },
            { id: "d", text: "Cover" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cover", statement: "Front of book." }],
            steps: [{ reasoning: "The front is the cover.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Cover",
          },
        },
        {
          id: "cipe-u1-bp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many letters are in the alphabet?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Alphabet", statement: "26 letters." }],
            steps: [
              { reasoning: "a–z = 26 letters.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 26.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "26",
          },
        },
        {
          id: "cipe-u1-bp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What should you do when reading aloud and you see a question mark?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Reading aloud", statement: "Use expression for punctuation." }],
            steps: [
              { reasoning: "Raise your voice slightly at the end.", marks: 1, markCode: "AO2" },
              { reasoning: "It shows the sentence is a question.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Use questioning tone/raise voice",
          },
        },
        {
          id: "cipe-u1-bp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name the three main parts of a book and what each shows. (b) Recite the alphabet — which letter comes after 'm'? (c) Explain two things you do when performing a poem aloud. Show thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Book knowledge and performance", statement: "Book parts + alphabet + expressive reading." }],
            steps: [
              { reasoning: "(a) Cover: front/title/picture; title: book's name; contents: list inside.", marks: 1, markCode: "AO2" },
              { reasoning: "(a) All three correctly identified.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) 'n' comes after 'm'.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Keep rhythm; use expression/voice changes.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Pause at punctuation; project voice clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "Performance skills explained sensibly.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "AO1" },
              { reasoning: "All answers correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) cover/title/contents (b) n (c) rhythm + expression, pause at punctuation",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All book parts, alphabet and performance points correct with reasons." },
              { level: "Level 2", marks: "4-6", descriptor: "Most points correct; limited explanation." },
              { level: "Level 1", marks: "1-3", descriptor: "Some correct answers; vague reasoning." },
            ],
          },
        },
        {
          id: "cipe-u1-bp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a book lists what is inside?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Back cover" },
            { id: "b", text: "Contents" },
            { id: "c", text: "Cover" },
            { id: "d", text: "Title" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Contents", statement: "List of what is inside the book." }],
            steps: [{ reasoning: "The contents page lists chapters or sections inside.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Contents",
          },
        },
        {
          id: "cipe-u1-bp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which letter comes straight after 't' in the alphabet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "v" },
            { id: "b", text: "u" },
            { id: "c", text: "s" },
            { id: "d", text: "r" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Alphabet order", statement: "Letters run a to z in order." }],
            steps: [{ reasoning: "After t comes u.", marks: 1, markCode: "AO1" }],
            finalAnswer: "u",
          },
        },
        {
          id: "cipe-u1-bp-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many letters are in the word 'alphabet'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Letter counting", statement: "Count each letter once." }],
            steps: [
              { reasoning: "a-l-p-h-a-b-e-t = 8 letters.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 8.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipe-u1-bp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many vowels (a, e, i, o, u) are in the English alphabet? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Vowels", statement: "a, e, i, o, u." }],
            steps: [
              { reasoning: "The vowels are a, e, i, o, u.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u1-bp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fiction book mainly contains what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Phone numbers" },
            { id: "b", text: "Facts and maps" },
            { id: "c", text: "Stories" },
            { id: "d", text: "Recipes only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fiction", statement: "Stories made up by an author." }],
            steps: [{ reasoning: "Fiction tells stories; non-fiction gives information.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Stories",
          },
        },
        {
          id: "cipe-u1-bp-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the title of your favourite book and say what it is about in one sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Book talk", statement: "Talk about books clearly." }],
            steps: [
              { reasoning: "The book's title is given correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "A sentence says what the book is about.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The Very Hungry Caterpillar is about a caterpillar that eats and becomes a butterfly.'",
          },
        },
        {
          id: "cipe-u1-bp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "When reading aloud, you should pause at which punctuation mark?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Full stop" },
            { id: "b", text: "Comma only" },
            { id: "c", text: "Bracket" },
            { id: "d", text: "Apostrophe" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Pausing at punctuation", statement: "Full stops signal pauses." }],
            steps: [{ reasoning: "Pause at full stops; question marks get a questioning voice.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Full stop",
          },
        },
        {
          id: "cipe-u1-bp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two things you do to perform a poem aloud with expression.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Poem performance", statement: "Rhythm, voice and pauses." }],
            steps: [
              { reasoning: "Keep the rhythm/beat of the poem.", marks: 1, markCode: "AO2" },
              { reasoning: "Use expression: louder/softer voice, different voices for characters.", marks: 1, markCode: "AO2" },
              { reasoning: "Pause at line ends and punctuation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Any two: keep rhythm; use expression; pause at punctuation; speak clearly",
          },
        },
        {
          id: "cipe-u1-bp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'The cat sat on the mat'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Each space-separated word counts." }],
            steps: [
              { reasoning: "The-cat-sat-on-the-mat = 6 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipe-u1-bp-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is most likely a non-fiction book?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A book of facts about dinosaurs" },
            { id: "b", text: "A story about a talking rabbit" },
            { id: "c", text: "A fairy tale" },
            { id: "d", text: "A made-up space adventure" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Non-fiction", statement: "True information about real things." }],
            steps: [{ reasoning: "Facts about real dinosaurs = non-fiction; the others are made-up stories.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A book of facts about dinosaurs",
          },
        },
        {
          id: "cipe-u1-bp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare a fiction book and a non-fiction book. Give two differences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fiction vs non-fiction", statement: "Stories vs real information." }],
            steps: [
              { reasoning: "Fiction tells made-up stories; non-fiction gives true facts.", marks: 1, markCode: "AO2" },
              { reasoning: "Fiction has characters and plots; non-fiction has facts, maps or instructions.", marks: 1, markCode: "AO2" },
              { reasoning: "Difference one stated clearly.", marks: 1, markCode: "AO2" },
              { reasoning: "Difference two stated clearly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. fiction = made-up story with characters; non-fiction = real facts/information",
          },
        },
        {
          id: "cipe-u1-bp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You are going to perform a short poem to the class. Plan three things you will do to make it a good performance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Performance planning", statement: "Plan voice, rhythm and body." }],
            steps: [
              { reasoning: "Use expression and change your voice for different parts.", marks: 1, markCode: "AO3" },
              { reasoning: "Keep the rhythm and pause at line ends.", marks: 1, markCode: "AO3" },
              { reasoning: "Speak loudly and clearly so everyone can hear.", marks: 1, markCode: "AO3" },
              { reasoning: "Three sensible, distinct performance choices.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. use expression; keep rhythm; speak loudly and clearly; face the audience",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-bp-notes",
      title: "Books and performance — notes",
      summary: "Cover/title/contents; 26 letters; pause at punctuation, use expression.",
      sections: [
        { heading: "Books", body: "Fiction = stories, non-fiction = information; parts help you navigate." },
        { heading: "Performance", body: "Read with rhythm and expression; 'm' is followed by 'n'." },
      ],
    },
  ],
};

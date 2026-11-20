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
            { id: "a", text: "Contents" }, { id: "b", text: "Cover" }, { id: "c", text: "Title page" }, { id: "d", text: "Index" },
          ], correctChoiceId: "b" },
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

import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cipe-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 2 — Tricky Words, Syllables and Punctuation",
  goal: "I CAN read tricky words, split syllables and use basic punctuation.",
  standards: ["Cambridge Primary English 0058 Stage 2: reading and writing",
  "Cambridge Primary English 0058 framework substrands: 2Rw, 2Ww, 2Wg"],
  stage: 2,
  vocabulary: [
    { term: "Tricky word", definition: "A word that cannot be sounded out easily and must be learned." },
    { term: "Syllable", definition: "A beat in a word; clap to find them." },
    { term: "Capital letter", definition: "Big letter used at the start of sentences and names." },
    { term: "Full stop", definition: "Mark . that ends a sentence." },
    { term: "Question mark", definition: "Mark ? that ends a question." },
  ],
  concepts: [
    {
      id: "cipe-u1-s5-tricky-punct",
      title: "Tricky words, syllables and punctuation",
      skill: "Recognise common tricky words, count syllables and punctuate simple sentences.",
      lesson: {
        sections: [
          {
            heading: "Tricky words",
            body: "Tricky words like 'the', 'said', 'was' and 'they' break the usual letter-sound rules, so they are learned by sight. Keep a list and practise reading them in sentences until they are automatic.",
          },
          {
            heading: "Syllables and punctuation",
            body: "Clap each beat of a word to count its syllables — 'but-ter-fly' has three. In writing, start every sentence with a capital letter and end it with a full stop; questions end with a question mark.",
          },
        ],
        keyFormulas: [
          { name: "Syllables", statement: "Clap each beat in the word" },
          { name: "Sentence", statement: "Capital start + full stop or question mark" },
        ],
        workedExample: {
          problem: "Add the missing punctuation: 'where is my hat'",
          solution: "It is a question: 'Where is my hat?' — capital W and question mark.",
        },
      },
      questions: [
        {
          id: "cipe-u1-tp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a tricky word?",
          response: { type: "mcq", choices: [
            { id: "a", text: "said" }, { id: "b", text: "cat" }, { id: "c", text: "run" }, { id: "d", text: "hop" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tricky word", statement: "Cannot be sounded out; learned by sight." }],
            steps: [{ reasoning: "'said' is a common tricky word.", marks: 1, markCode: "AO1" }],
            finalAnswer: "said",
          },
        },
        {
          id: "cipe-u1-tp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many syllables does 'banana' have? Clap it out.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Count the beats in the word." }],
            steps: [
              { reasoning: "ba-na-na — three beats.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3 syllables.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-tp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write this sentence correctly: 'my dog is called rex'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital letters and full stops", statement: "Start with capital; names need capitals; end with . or ?." }],
            steps: [
              { reasoning: "Start with capital M.", marks: 1, markCode: "AO2" },
              { reasoning: "Name 'Rex' needs a capital R.", marks: 1, markCode: "AO2" },
              { reasoning: "End with full stop: 'My dog is called Rex.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "My dog is called Rex.",
          },
        },
        {
          id: "cipe-u1-tp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Add a capital letter and the correct end mark: 'can i have a biscuit'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Question punctuation", statement: "Questions start with capital and end with ?" }],
            steps: [
              { reasoning: "It asks for something — it is a question.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital C at the start.", marks: 1, markCode: "AO2" },
              { reasoning: "Question mark at the end.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'Can I have a biscuit?'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Can I have a biscuit?",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-tp-notes",
      title: "Tricky words and punctuation — revision notes",
      summary: "Learn tricky words by sight; clap syllables; capital + end mark.",
      sections: [
        { heading: "Tricky words", body: "the, said, was, they, come — practise reading them in sentences." },
        { heading: "Punctuation", body: "Capital to start; full stop for statements; ? for questions." },
      ],
    },
  ],
};

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
            { id: "a", text: "cat" },
            { id: "b", text: "run" },
            { id: "c", text: "hop" },
            { id: "d", text: "said" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipe-u1-tp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a tricky word?",
          response: { type: "mcq", choices: [
            { id: "a", text: "was" },
            { id: "b", text: "cat" },
            { id: "c", text: "map" },
            { id: "d", text: "sit" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tricky word", statement: "Cannot be sounded out; learned by sight." }],
            steps: [{ reasoning: "'was' is a common tricky word.", marks: 1, markCode: "AO1" }],
            finalAnswer: "was",
          },
        },
        {
          id: "cipe-u1-tp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many syllables does the word 'cat' have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Count the beats in the word." }],
            steps: [{ reasoning: "cat = one beat.", marks: 1, markCode: "AO2" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cipe-u1-tp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many syllables does the word 'elephant' have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "3" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Clap each beat: el-e-phant." }],
            steps: [{ reasoning: "el-e-phant = 3 beats.", marks: 1, markCode: "AO2" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-tp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence needs a question mark at the end?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Where is my bag?" },
            { id: "b", text: "She is happy." },
            { id: "c", text: "I like cake." },
            { id: "d", text: "The dog ran." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Question mark", statement: "Questions end with ?." }],
            steps: [{ reasoning: "Only the question sentence ends with ?. ", marks: 1, markCode: "AO2" }],
            finalAnswer: "Where is my bag?",
          },
        },
        {
          id: "cipe-u1-tp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many syllables does 'computer' have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "4" },
            { id: "d", text: "2" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Clap each beat: com-pu-ter." }],
            steps: [{ reasoning: "com-pu-ter = 3 beats.", marks: 1, markCode: "AO2" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-tp-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Add the missing punctuation: 'where are you'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Question punctuation", statement: "Capital start + question mark." }],
            steps: [
              { reasoning: "It is a question — needs a question mark.", marks: 1, markCode: "AO2" },
              { reasoning: "'Where are you?' with capital W.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Where are you?",
          },
        },
        {
          id: "cipe-u1-tp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many syllables does 'hospital' have? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Clap each beat: hos-pi-tal." }],
            steps: [
              { reasoning: "hos-pi-tal = 3 beats.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-tp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write this sentence correctly: 'my friend sam is nice'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital letters and full stops", statement: "Start with capital; names need capitals; end with ." }],
            steps: [
              { reasoning: "Start with capital M.", marks: 1, markCode: "AO2" },
              { reasoning: "Name 'Sam' needs a capital S.", marks: 1, markCode: "AO2" },
              { reasoning: "End with full stop: 'My friend Sam is nice.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "My friend Sam is nice.",
          },
        },
        {
          id: "cipe-u1-tp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do we learn tricky words 'by sight'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because they are very long" },
            { id: "b", text: "Because they rhyme" },
            { id: "c", text: "Because they cannot be sounded out easily" },
            { id: "d", text: "Because they are numbers" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tricky word", statement: "Breaks letter-sound rules; learned by sight." }],
            steps: [{ reasoning: "Tricky words break the usual rules so they are memorised.", marks: 1, markCode: "AO2" }],
            finalAnswer: "They cannot be sounded out easily",
          },
        },
        {
          id: "cipe-u1-tp-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many syllables does 'hippopotamus' have? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Clap each beat: hip-po-po-ta-mus." }],
            steps: [
              { reasoning: "hip-po-po-ta-mus = 5 beats.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u1-tp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three sentences about your day. Use the tricky words 'the', 'was' and 'they' correctly, each ending with the right punctuation mark.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Tricky words and punctuation", statement: "Correct spelling of tricky words; capital + end mark." }],
            steps: [
              { reasoning: "Three complete sentences written.", marks: 1, markCode: "AO2" },
              { reasoning: "Tricky words 'the', 'was', 'they' spelled correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "Each sentence starts with a capital and ends with . or ?.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is otherwise accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The sun was hot. They played outside. Was it fun?'",
          },
        },
        {
          id: "cipe-u1-tp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how you would count the syllables in the word 'dinosaur', and give the answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllable counting", statement: "Clap each beat in the word." }],
            steps: [
              { reasoning: "Method explained: clap or say the word slowly, counting beats.", marks: 1, markCode: "AO2" },
              { reasoning: "di-no-saur = 3 beats.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3 syllables.", marks: 1, markCode: "AO1" },
              { reasoning: "Clear, complete explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Say it slowly and clap: di-no-saur = 3 syllables.",
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

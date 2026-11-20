import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipe-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 2 — Simple Sentences and Early Reading",
  goal: "I CAN read simple sentences and answer questions about them.",
  standards: ["Cambridge Primary English 0058 Stage 2: reading",
  "Cambridge Primary English 0058 framework substrands: 2Rw, 2Ri, 2Wg"],
  stage: 2,
  vocabulary: [
    { term: "Sentence", definition: "A group of words that makes sense and ends with a full stop." },
    { term: "Capital letter", definition: "The big letter used at the start of a sentence and for names." },
    { term: "Full stop", definition: "The punctuation mark . that ends a sentence." },
    { term: "Question", definition: "A sentence that asks something, ending with a question mark." },
    { term: "Comprehension", definition: "Understanding what you have read." },
  ],
  concepts: [
    {
      id: "cipe-u1-s2-sentences",
      title: "Building sentences",
      skill: "Write simple sentences with correct punctuation at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Sentence rules",
            body: "Every sentence starts with a capital letter and ends with a full stop, question mark or exclamation mark. A question ends with ? and shows someone is asking something.",
          },
          {
            heading: "Joining ideas",
            body: "Use words like and, but and because to join ideas. 'I like cats and dogs' joins two ideas with and.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Fix this sentence: 'the cat sat on the mat'",
          solution: "Add a capital letter and full stop: 'The cat sat on the mat.'",
        },
      },
      questions: [
        {
          id: "cipe-u1-s2-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is punctuated correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "the dog ran." }, { id: "b", text: "The dog ran." }, { id: "c", text: "The dog ran" }, { id: "d", text: "the dog ran?" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital letters and full stops", statement: "Sentences start with capitals and end with punctuation." }],
            steps: [{ reasoning: "Correct: capital T and full stop at end.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The dog ran.",
          },
        },
        {
          id: "cipe-u1-s2-se-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a question about your favourite food.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Question mark", statement: "Questions end with ?" }],
            steps: [
              { reasoning: "The sentence asks something.", marks: 1, markCode: "AO2" },
              { reasoning: "It starts with a capital letter and ends with ?", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. What is your favourite food?",
          },
        },
        {
          id: "cipe-u1-s2-se-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Join these sentences using 'and': 'I have a cat. I have a dog.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Joining sentences", statement: "Use conjunctions like and." }],
            steps: [
              { reasoning: "Combine with and: 'I have a cat and a dog.'", marks: 1, markCode: "AO2" },
              { reasoning: "Check punctuation: capital and full stop.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I have a cat and a dog.",
          },
        },
        {
          id: "cipe-u1-s2-se-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences about your pet (real or imaginary).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence writing", statement: "Full sentences with correct punctuation." }],
            steps: [
              { reasoning: "Each sentence has a capital letter and ends with a full stop.", marks: 1, markCode: "AO2" },
              { reasoning: "Sentences make sense and describe the pet.", marks: 1, markCode: "AO2" },
              { reasoning: "Spell key words correctly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two correct sentences",
          },
        },
      ],
    },
    {
      id: "cipe-u1-s2-reading",
      title: "Reading simple texts",
      skill: "Read simple texts and answer who, what, where questions at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Reading for meaning",
            body: "When you read, find who the story is about, what happens, and where it happens. Look for names and describing words.",
          },
          {
            heading: "Answering questions",
            body: "Who questions ask about people or animals. What questions ask about actions or things. Where questions ask about places.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'Tom has a red ball. He plays in the park.' Who has the ball?",
          solution: "Tom has the ball — the sentence says 'Tom has a red ball'.",
        },
      },
      questions: [
        {
          id: "cipe-u1-s2-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read: 'The cat sat on the mat.' What is the cat sitting on?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The floor" }, { id: "b", text: "The mat" }, { id: "c", text: "The chair" }, { id: "d", text: "The bed" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the answer in the text." }],
            steps: [{ reasoning: "The text says the cat sat on the mat.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The mat",
          },
        },
        {
          id: "cipe-u1-s2-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'Mia has two dogs. They are called Max and Bella.' How many dogs does Mia have?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the number in the text." }],
            steps: [
              { reasoning: "The text says 'two dogs'.", marks: 1, markCode: "AO1" },
              { reasoning: "Mia has 2 dogs.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Two dogs",
          },
        },
        {
          id: "cipe-u1-s2-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'Ben went to the beach with his family. They built a sandcastle and swam in the sea.' Where did Ben go?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the place in the text." }],
            steps: [
              { reasoning: "The text says Ben went to the beach.", marks: 1, markCode: "AO1" },
              { reasoning: "Quote or refer to 'the beach'.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: the beach.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The beach",
          },
        },
        {
          id: "cipe-u1-s2-re-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The birds flew south for winter.' Why did the birds fly south?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use clues in the text to understand why." }],
            steps: [
              { reasoning: "The text says 'for winter'.", marks: 1, markCode: "AO1" },
              { reasoning: "The birds flew south to find warmer weather for winter.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: for winter / to stay warm.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "For winter",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-s2-sent-notes",
      title: "Stage 2 sentences and reading — revision notes",
      summary: "Sentence punctuation, joining ideas, answering who/what/where questions.",
      sections: [
        { heading: "Sentences", body: "Start with a capital letter, end with the right punctuation. Use and, but, because to join ideas." },
        { heading: "Reading", body: "Who = person/animal, what = action/thing, where = place. Find the answer in the text first." },
      ],
    },
  ],
};

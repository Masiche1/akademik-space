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
            { id: "a", text: "The dog ran" },
            { id: "b", text: "The dog ran." },
            { id: "c", text: "the dog ran." },
            { id: "d", text: "the dog ran?" },
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
        {
          id: "cipe-u1-s2-se-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a question?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The hat is red." },
            { id: "b", text: "I have a hat." },
            { id: "c", text: "Where is my hat?" },
            { id: "d", text: "My hat is here." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Question", statement: "A sentence that asks something, ending with ?." }],
            steps: [{ reasoning: "Only option a asks something and ends with a question mark.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Where is my hat?",
          },
        },
        {
          id: "cipe-u1-s2-se-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word can join two ideas in a sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "big" },
            { id: "b", text: "ran" },
            { id: "c", text: "the" },
            { id: "d", text: "because" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conjunction", statement: "A joining word like and, but, because." }],
            steps: [{ reasoning: "Because joins ideas and gives a reason.", marks: 1, markCode: "AO2" }],
            finalAnswer: "because",
          },
        },
        {
          id: "cipe-u1-s2-se-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many capital letters are needed to fix this: 'the cat sat. the dog ran.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital letters", statement: "Every sentence starts with a capital." }],
            steps: [
              { reasoning: "'the cat sat' and 'the dog ran' each need a capital T.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u1-s2-se-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'I like cats and dogs'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "I-like-cats-and-dogs = 5 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u1-s2-se-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the best joining word: 'I wanted ice cream ___ it was too cold outside.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "the" },
            { id: "b", text: "very" },
            { id: "c", text: "but" },
            { id: "d", text: "and" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Joining words", statement: "Use but for a contrast." }],
            steps: [{ reasoning: "The second idea contrasts with the first, so 'but' fits.", marks: 1, markCode: "AO2" }],
            finalAnswer: "but",
          },
        },
        {
          id: "cipe-u1-s2-se-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Fix this sentence by adding the right punctuation: 'the bird flew'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Capital and full stop", statement: "Sentences start with a capital and end with a full stop." }],
            steps: [
              { reasoning: "Add a capital T.", marks: 1, markCode: "AO2" },
              { reasoning: "Add a full stop at the end.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The bird flew.",
          },
        },
        {
          id: "cipe-u1-s2-se-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because it rained" },
            { id: "b", text: "The dog ran fast." },
            { id: "c", text: "Running fast" },
            { id: "d", text: "Under the bed" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sentence", statement: "A group of words that makes sense and is complete." }],
            steps: [{ reasoning: "Only option b has a subject and a complete idea.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The dog ran fast.",
          },
        },
        {
          id: "cipe-u1-s2-se-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join these sentences using 'but': 'I wanted to play outside. It was raining.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Joining with but", statement: "Use but to show contrast." }],
            steps: [
              { reasoning: "Combine with but: 'I wanted to play outside but it was raining.'", marks: 1, markCode: "AO2" },
              { reasoning: "Comma before but is acceptable.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter and full stop correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I wanted to play outside, but it was raining.",
          },
        },
        {
          id: "cipe-u1-s2-se-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sentences are in 'Stop. Look. Listen.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-s2-se-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do we use the word 'because' in a sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To ask a question" },
            { id: "b", text: "To end a sentence" },
            { id: "c", text: "To name a person" },
            { id: "d", text: "To give a reason" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Because", statement: "Introduces a reason." }],
            steps: [{ reasoning: "Because explains why something happened.", marks: 1, markCode: "AO2" }],
            finalAnswer: "To give a reason",
          },
        },
        {
          id: "cipe-u1-s2-se-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three sentences about your morning. Join two of them using 'and', 'but' or 'because'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence writing", statement: "Complete sentences with joining words." }],
            steps: [
              { reasoning: "Three complete sentences written.", marks: 1, markCode: "AO2" },
              { reasoning: "At least two sentences are joined with and/but/because.", marks: 1, markCode: "AO2" },
              { reasoning: "All sentences start with capitals and end with full stops.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I woke up early. I had breakfast and drank juice. I ran to school because I was late.'",
          },
        },
        {
          id: "cipe-u1-s2-se-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write one question about your day and then write a sentence answering it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Questions and answers", statement: "Question ends with ?; answer is a sentence." }],
            steps: [
              { reasoning: "The question asks something and ends with ?. ", marks: 1, markCode: "AO2" },
              { reasoning: "The answer is a complete sentence that matches the question.", marks: 1, markCode: "AO2" },
              { reasoning: "Both start with capital letters; answer ends with a full stop.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Q: 'What did you do at playtime?' A: 'I played football with my friends.'",
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
            { id: "a", text: "The floor" },
            { id: "b", text: "The chair" },
            { id: "c", text: "The mat" },
            { id: "d", text: "The bed" },
          ], correctChoiceId: "c" },
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
        {
          id: "cipe-u1-s2-re-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'Who' question asks about what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A number" },
            { id: "b", text: "A person or animal" },
            { id: "c", text: "A colour" },
            { id: "d", text: "A place" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Question words", statement: "Who = person/animal." }],
            steps: [{ reasoning: "Who questions ask about people or animals.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A person or animal",
          },
        },
        {
          id: "cipe-u1-s2-re-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Read: 'The sun is hot.' What is hot?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The rain" },
            { id: "b", text: "The wind" },
            { id: "c", text: "The moon" },
            { id: "d", text: "The sun" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the answer in the text." }],
            steps: [{ reasoning: "The text says the sun is hot.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The sun",
          },
        },
        {
          id: "cipe-u1-s2-re-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'Sam has three pencils.' How many pencils does Sam have? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the number in the text." }],
            steps: [
              { reasoning: "The text says 'three pencils'.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-s2-re-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'We ate lunch at one o'clock.' How many words are in this sentence? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "We-ate-lunch-at-one-o'clock = 6 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipe-u1-s2-re-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The children played in the garden.' Where did the children play?",
          response: { type: "mcq", choices: [
            { id: "a", text: "In the garden" },
            { id: "b", text: "At school" },
            { id: "c", text: "In the park" },
            { id: "d", text: "In the house" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the place in the text." }],
            steps: [{ reasoning: "The text says they played in the garden.", marks: 1, markCode: "AO1" }],
            finalAnswer: "In the garden",
          },
        },
        {
          id: "cipe-u1-s2-re-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Read: 'Anna has a purple bike.' Who has the bike?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find the person in the text." }],
            steps: [
              { reasoning: "The text says Anna has the bike.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: Anna.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Anna",
          },
        },
        {
          id: "cipe-u1-s2-re-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which question asks about a place?",
          response: { type: "mcq", choices: [
            { id: "a", text: "What is your name?" },
            { id: "b", text: "When is lunch?" },
            { id: "c", text: "Who is your friend?" },
            { id: "d", text: "Where do you live?" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Question words", statement: "Where = place." }],
            steps: [{ reasoning: "Where asks about a place.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Where do you live?",
          },
        },
        {
          id: "cipe-u1-s2-re-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read: 'Jo went to the shop with Mum. She bought some bread and milk.' Answer: (a) Who went to the shop? (b) What did she buy?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find who and what in the text." }],
            steps: [
              { reasoning: "(a) Jo went to the shop with Mum.", marks: 1, markCode: "AO1" },
              { reasoning: "(b) She bought bread and milk.", marks: 1, markCode: "AO1" },
              { reasoning: "Both answers found in the text.", marks: 1, markCode: "AO2" },
              { reasoning: "Answers are complete sentences or clear phrases.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) Jo and Mum (b) bread and milk",
          },
        },
        {
          id: "cipe-u1-s2-re-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'The dog barked. The cat ran away. It hid under the bed.' How many sentences are there? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each full stop ends a sentence." }],
            steps: [
              { reasoning: "Three full stops = three sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-s2-re-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Read: 'Tom wore his coat because it was snowing.' Why did Tom wear his coat?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He lost it" },
            { id: "b", text: "It was sunny" },
            { id: "c", text: "It was snowing" },
            { id: "d", text: "He was hot" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Use the reason given in the text." }],
            steps: [{ reasoning: "The text says 'because it was snowing'.", marks: 1, markCode: "AO1" }],
            finalAnswer: "It was snowing",
          },
        },
        {
          id: "cipe-u1-s2-re-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'The farmers grew carrots and potatoes. They took them to the market on Saturday.' Answer three questions: Who are 'they'? What did the farmers grow? When did they go to the market?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Track who, what and when in the text." }],
            steps: [
              { reasoning: "They = the farmers.", marks: 1, markCode: "AO1" },
              { reasoning: "They grew carrots and potatoes.", marks: 1, markCode: "AO1" },
              { reasoning: "They went on Saturday.", marks: 1, markCode: "AO1" },
              { reasoning: "All three answers correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The farmers; carrots and potatoes; Saturday",
          },
        },
        {
          id: "cipe-u1-s2-re-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write your own two-sentence text about an animal, then write one question about it and answer it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Creating and reading text", statement: "Write text then ask and answer a question about it." }],
            steps: [
              { reasoning: "Two complete, punctuated sentences about an animal.", marks: 1, markCode: "AO2" },
              { reasoning: "A question about the text ending with ?. ", marks: 1, markCode: "AO2" },
              { reasoning: "An answer that can be found in the text.", marks: 1, markCode: "AO1" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'My rabbit is called Snowy. She has long ears. Q: What is the rabbit called? A: Snowy.'",
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

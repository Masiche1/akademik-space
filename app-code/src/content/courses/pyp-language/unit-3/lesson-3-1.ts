import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "pypl-u3-lesson-3-1",
  code: "3-1",
  title: "Sentences and Punctuation",
  goal: "I CAN write complete sentences with capitals and full stops, question marks and commas.",
  standards: [
    "PYP Language: Writing",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: Who We Are",
  ],
  vocabulary: [
    { term: "Sentence", definition: "A group of words that makes a complete thought, starting with a capital letter and ending with punctuation." },
    { term: "Capital letter", definition: "A big letter used at the start of a sentence and for names of people, places and days." },
    { term: "Full stop", definition: "The punctuation mark (.) that ends a telling sentence." },
    { term: "Question mark", definition: "The punctuation mark (?) that ends a question." },
    { term: "Comma", definition: "A small pause mark (, ) used in a list or to separate parts of a sentence." },
    { term: "Describing word", definition: "A word that tells more about a noun — an adjective like 'fluffy' or 'red'." },
  ],
  concepts: [
    {
      id: "pypl-u3l1-c1-sentences-capitals-stops",
      title: "Sentences, capitals and full stops",
      skill: "Write complete sentences that start with a capital letter and end with a full stop.",
      lesson: {
        sections: [
          {
            heading: "What makes a sentence",
            body: "A **sentence** tells one complete idea. Every sentence starts with a **capital letter** and ends with a **full stop** (for a telling sentence). 'The dog ran.' is a sentence. 'The dog ran to' is not — it is unfinished. A sentence needs a **who or what** (the dog) and something that happens (ran).",
          },
          {
            heading: "When capitals are needed",
            body: "Use a capital letter at the start of every sentence, for the **names** of people, places, days and months — 'Sam', 'London', 'Monday', 'May' — and for the word 'I'. Names always get capitals: 'my friend ana' should be 'my friend Ana'.",
          },
        ],
        keyFormulas: [
          { name: "Sentence rule", statement: "Capital letter + complete idea + full stop" },
        ],
        workedExample: {
          problem: "Fix this: 'my dog rex likes to play fetch'",
          solution: "'My dog Rex likes to play fetch.' — capital M for the start, capital R for the name Rex, full stop at the end.",
        },
      },
      questions: [
        {
          id: "pypl-q-u3l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a complete sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The big red ball" },
              { id: "b", text: "Running to the park" },
              { id: "c", text: "Because it was raining" },
              { id: "d", text: "The cat slept on the mat." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence", statement: "A sentence is a complete thought with a who/what and what happens, ending with punctuation." },
            ],
            steps: [
              { reasoning: "'The cat slept on the mat' has a who (cat) and what happens (slept) — complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The cat slept on the mat.",
            commonErrors: ["Choosing (b) — 'the big red ball' is a noun phrase, not a complete thought."],
          },
        },
        {
          id: "pypl-q-u3l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the sentence with the correct capital letters: 'on monday, sam and i went to london.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital letters", statement: "Capitals start sentences and name people, places, days, months and the word 'I'." },
            ],
            steps: [
              { reasoning: "'On' needs a capital at the start; 'Monday', 'Sam', 'I', 'London' are names needing capitals.", marks: 1, markCode: "M" },
              { reasoning: "Correct: 'On Monday, Sam and I went to London.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "On Monday, Sam and I went to London.",
            commonErrors: ["Capitalising 'and' or 'went' — only names and sentence starts get capitals."],
          },
        },
        {
          id: "pypl-q-u3l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes: 'the dog ran fast it jumped over the fence' as one sentence. Explain two mistakes and correct the writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence boundaries", statement: "Two complete ideas need two sentences — capital + full stop between them." },
            ],
            steps: [
              { reasoning: "Mistake 1: no capital letter at the start ('the' should be 'The').", marks: 1, markCode: "M" },
              { reasoning: "Mistake 2: two complete ideas ('the dog ran fast' and 'it jumped over the fence') are joined without a full stop.", marks: 1, markCode: "M" },
              { reasoning: "Correct: 'The dog ran fast. It jumped over the fence.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two sentences needed: 'The dog ran fast. It jumped over the fence.'",
            commonErrors: ["Adding a comma instead of a full stop — a comma cannot join two complete sentences."],
          },
        },
        {
          id: "pypl-q-u3l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Here is a messy piece of writing: 'on friday my friend zoe and i went to the park we played football then we had a picnic it was fun'",
          parts: [
            { label: "a", prompt: "Add capital letters where they are needed.", marks: 2 },
            { label: "b", prompt: "Split the writing into three sentences with full stops.", marks: 2 },
            { label: "c", prompt: "Write one describing word (adjective) you could add to make the picnic more interesting.", marks: 1 },
            { label: "d", prompt: "Explain why the original writing is hard to read.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capitalisation and sentence boundaries", statement: "Capitals mark sentence starts and names; full stops separate complete ideas." },
            ],
            steps: [
              { part: "a", reasoning: "Capitals for 'On', 'Friday', 'Zoe', 'I' (and each new sentence start).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All capitals placed correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three complete ideas split: went to park / played football / had picnic.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Full stops placed at sentence ends.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A describing word, e.g. 'delicious picnic' or 'sunny picnic'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It is one long run-on with no pauses — the reader cannot tell where one idea ends.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "No capitals or full stops means the ideas blur together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Capitals on On/Friday/Zoe/I. (b) Three sentences with full stops. (c) e.g. 'delicious'. (d) Run-on sentence, no pauses.",
            commonErrors: ["In (b), making more or fewer than three sentences — each full idea gets one."],
          },
        },
        {
          id: "pypl-q-u3l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Every sentence must start with...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A small letter" },
              { id: "b", text: "A number" },
              { id: "c", text: "A picture" },
              { id: "d", text: "A capital letter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence rule", statement: "Every sentence starts with a capital letter." },
            ],
            steps: [
              { reasoning: "Sentences always begin with a capital letter.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A capital letter",
            commonErrors: ["Choosing (a) — small letters never start a sentence."],
          },
        },
        {
          id: "pypl-q-u3l1c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three things need capital letters: the start of a sentence, names of people/places/days, and the word 'I'. How many things need capitals?",
          response: { type: "numeric", parts: [
            { label: "Capital uses", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital letters", statement: "Capitals start sentences and are used for names and the word 'I'." },
            ],
            steps: [
              { reasoning: "Count: sentence start, names, 'I' = 3 uses.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting that the word 'I' always needs a capital."],
          },
        },
        {
          id: "pypl-q-u3l1c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word needs a capital letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "london" },
              { id: "b", text: "dog" },
              { id: "c", text: "ran" },
              { id: "d", text: "the" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital letters", statement: "Names of places get capitals — 'london' should be 'London'." },
            ],
            steps: [
              { reasoning: "London is a place name and needs a capital; the other words are ordinary words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** london",
            commonErrors: ["Choosing 'dog' — ordinary nouns do not need capitals."],
          },
        },
        {
          id: "pypl-q-u3l1c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add the missing capital letters: 'my friend ben lives in paris.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital letters", statement: "Capitals start sentences and name people and places." },
            ],
            steps: [
              { reasoning: "'My' needs a capital at the start; 'Ben' and 'Paris' are names needing capitals.", marks: 1, markCode: "M" },
              { reasoning: "Correct: 'My friend Ben lives in Paris.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "My friend Ben lives in Paris.",
            commonErrors: ["Capitalising 'friend' or 'lives' — only names and the sentence start get capitals."],
          },
        },
        {
          id: "pypl-q-u3l1c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A piece of writing needs to be split into 3 sentences. How many full stops should it have?",
          response: { type: "numeric", parts: [
            { label: "Full stops", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Full stops", statement: "Each telling sentence ends with a full stop." },
            ],
            steps: [
              { reasoning: "3 sentences need 3 full stops.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting that every sentence gets its own full stop."],
          },
        },
        {
          id: "pypl-q-u3l1c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'the dog ran to' is not a complete sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence", statement: "A sentence needs a who/what and something that happens — a complete idea." },
            ],
            steps: [
              { reasoning: "'The dog ran to' has a who (the dog) and an action (ran), but 'to' leaves it unfinished.", marks: 1, markCode: "M" },
              { reasoning: "It does not say where the dog ran to, so the idea is incomplete.", marks: 1, markCode: "M" },
              { reasoning: "A complete sentence would be 'The dog ran to the park.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'The dog ran to' is unfinished — it does not say where; 'The dog ran to the park.' is complete.",
            commonErrors: ["Saying it is 'too short' — the problem is the incomplete idea, not length."],
          },
        },
        {
          id: "pypl-q-u3l1c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is written correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "my dog Rex likes to play." },
              { id: "b", text: "my dog rex likes to play." },
              { id: "c", text: "My dog Rex likes to play." },
              { id: "d", text: "My dog rex likes to play" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capitalisation and full stops", statement: "Sentence start and names get capitals; telling sentences end with a full stop." },
            ],
            steps: [
              { reasoning: "(b) has capital M for the start, capital R for the name Rex, and a full stop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** My dog Rex likes to play.",
            commonErrors: ["Choosing (d) — 'my' at the start needs a capital too."],
          },
        },
        {
          id: "pypl-q-u3l1c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes: 'we went to the beach it was sunny we built a sandcastle.' Fix the writing with capitals and full stops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence boundaries", statement: "Capitals start sentences; full stops end them; each complete idea is its own sentence." },
            ],
            steps: [
              { reasoning: "Add capitals: 'We' at the start, and capitals after each full stop.", marks: 1, markCode: "M" },
              { reasoning: "Split into three sentences: went to beach / was sunny / built sandcastle.", marks: 1, markCode: "M" },
              { reasoning: "Correct: 'We went to the beach. It was sunny. We built a sandcastle.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "We went to the beach. It was sunny. We built a sandcastle.",
            commonErrors: ["Adding a comma instead of a full stop — a comma cannot end a sentence."],
          },
        },
        {
          id: "pypl-q-u3l1c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sentence 'on monday i saw sam', how many words need a capital letter?",
          response: { type: "numeric", parts: [
            { label: "Words needing capitals", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capital letters", statement: "Capitals are needed for sentence starts, days and names." },
            ],
            steps: [
              { reasoning: "Count: 'On' (start), 'Monday' (day), 'I' (the word I), 'Sam' (name) = 4 words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting that the word 'I' always needs a capital."],
          },
        },
        {
          id: "pypl-q-u3l1c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What punctuation mark ends a telling sentence like 'The cat slept.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comma (, )" },
              { id: "b", text: "Exclamation mark only (!)" },
              { id: "c", text: "Full stop (.)" },
              { id: "d", text: "Question mark (?)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Full stop", statement: "A full stop ends a telling sentence." },
            ],
            steps: [
              { reasoning: "Telling sentences end with a full stop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Full stop (.)",
            commonErrors: ["Choosing '?' — that ends questions, not telling sentences."],
          },
        },
        {
          id: "pypl-q-u3l1c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which group of words is NOT a complete sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She reads every night." },
              { id: "b", text: "The birds sang." },
              { id: "c", text: "Running through the field" },
              { id: "d", text: "I like ice cream." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence", statement: "A sentence needs a who/what and something that happens — 'running through the field' has no who." },
            ],
            steps: [
              { reasoning: "'Running through the field' is incomplete — it does not say who is running.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Running through the field",
            commonErrors: ["Choosing a short sentence — short can still be complete; incomplete ideas are the problem."],
          },
        },
        {
          id: "pypl-q-u3l1c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Here is messy writing about a day out: 'on sunday me and my cousin went to the zoo we saw the lions then we ate lunch it was great'",
          parts: [
            { label: "a", prompt: "Add capital letters where needed.", marks: 2 },
            { label: "b", prompt: "Split the writing into four sentences with full stops.", marks: 2 },
            { label: "c", prompt: "Write one describing word you could add to 'lions' to make it more interesting.", marks: 1 },
            { label: "d", prompt: "Explain why the original writing is hard to read.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capitalisation and sentence boundaries", statement: "Capitals mark starts and names; full stops separate complete ideas." },
            ],
            steps: [
              { part: "a", reasoning: "Capitals for 'On', 'Sunday' and each new sentence start.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All capitals placed correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Four complete ideas split: went to zoo / saw lions / ate lunch / it was great.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Full stops placed at each sentence end.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A describing word, e.g. 'big lions' or 'lazy lions'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It is one long run-on with no pauses — ideas blur together.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Missing capitals and full stops make it hard for the reader.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Capitals on On/Sunday and each sentence start. (b) Four sentences with full stops. (c) e.g. 'big'. (d) Run-on, no pauses.",
            commonErrors: ["In (b), not splitting into exactly four sentences — each idea gets one."],
          },
        },
      ],
    },
    {
      id: "pypl-u3l1-c2-questions-commas",
      title: "Question marks, commas and describing words",
      skill: "Use question marks for questions, commas in lists, and describing words to make writing vivid.",
      lesson: {
        sections: [
          {
            heading: "Question marks and commas",
            body: "A sentence that asks something ends with a **question mark** (?) — 'Where is my hat?' A **comma** (, ) separates items in a list — 'I like apples, bananas and grapes.' It can also show a short pause: 'After lunch, we played outside.' Asking questions in your writing makes readers curious.",
          },
          {
            heading: "Describing words",
            body: "**Describing words** (adjectives) tell more about a noun: not just 'dog' but 'fluffy dog', not just 'cake' but 'delicious cake'. Good writers use them to paint pictures in the reader's mind. But do not pile up too many — one or two strong describing words are better than a long list.",
          },
        ],
        keyFormulas: [
          { name: "Punctuation quick guide", statement: "Question (?) for asking; comma (, ) for lists and short pauses; describing words add detail" },
        ],
        workedExample: {
          problem: "Fix this list sentence: 'I packed a hat a swimsuit and sunscreen for the beach'",
          solution: "'I packed a hat, a swimsuit and sunscreen for the beach.' — commas separate the three items in the list.",
        },
      },
      questions: [
        {
          id: "pypl-q-u3l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark ends a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question mark (?)" },
              { id: "b", text: "Comma (, )" },
              { id: "c", text: "Exclamation mark only (!)" },
              { id: "d", text: "Full stop (.)" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question mark", statement: "A question ends with a question mark." },
            ],
            steps: [
              { reasoning: "Questions end with (?).",
                marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Question mark (?)",
            commonErrors: ["Choosing full stop — that ends telling sentences, not questions."],
          },
        },
        {
          id: "pypl-q-u3l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add commas to make the list correct: 'For my birthday I got a book a kite and a puzzle.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas in lists", statement: "Commas separate items in a list." },
            ],
            steps: [
              { reasoning: "The list has three items: a book, a kite, a puzzle.", marks: 1, markCode: "M" },
              { reasoning: "Correct: 'For my birthday I got a book, a kite and a puzzle.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "For my birthday I got a book, a kite and a puzzle.",
            commonErrors: ["Putting a comma before 'and' — not needed for a short list of three."],
          },
        },
        {
          id: "pypl-q-u3l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "'The dog barked.' Rewrite this sentence twice, each time adding one different describing word to make it more interesting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Describing words", statement: "Adjectives add detail and make writing vivid; one or two strong words beat many weak ones." },
            ],
            steps: [
              { reasoning: "A describing word for 'dog', e.g. 'The little dog barked.'", marks: 1, markCode: "M" },
              { reasoning: "A different describing word, e.g. 'The noisy dog barked.' or 'The fluffy dog barked.'", marks: 1, markCode: "M" },
              { reasoning: "Each rewrite is a complete, correct sentence with the describing word in the right place.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two correct rewrites with different adjectives, e.g. 'The little dog barked.' / 'The noisy dog barked.'",
            commonErrors: ["Adding describing words that do not fit, e.g. 'The asleep dog barked.' — the word must make sense."],
          },
        },
        {
          id: "pypl-q-u3l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Here is a messy sign for a school fair: 'come to the school fair on saturday we have cake stalls games and a bouncy castle it starts at ten'",
          parts: [
            { label: "a", prompt: "Turn the sign into a question: 'When does the fair start?'", marks: 1 },
            { label: "b", prompt: "Rewrite the sign as two complete sentences with capitals and full stops.", marks: 2 },
            { label: "c", prompt: "Add commas to separate the list of activities.", marks: 2 },
            { label: "d", prompt: "Add one describing word to make the fair sound exciting.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign writing conventions", statement: "Signs use short sentences; questions need '?', lists need commas, names need capitals." },
            ],
            steps: [
              { part: "a", reasoning: "Correct question form with capital and question mark: 'When does the fair start?' (or 'What time does the fair start?')", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two complete sentences, e.g. 'Come to the school fair on Saturday. There are cake stalls, games and a bouncy castle.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Capitals and full stops all correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Commas separating cake stalls / games / bouncy castle.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Commas placed correctly in the list.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A describing word, e.g. 'exciting school fair' or 'fun bouncy castle'.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The word suits the fair and is placed correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'When does the fair start?' (b) Two punctuated sentences. (c) Commas in the list. (d) e.g. 'exciting'.",
            commonErrors: ["In (a), forgetting the question mark or capital — questions need both."],
          },
        },
        {
          id: "pypl-q-u3l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A comma is mainly used to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Separate items in a list" },
              { id: "b", text: "End a sentence" },
              { id: "c", text: "Start a new paragraph" },
              { id: "d", text: "Ask a question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas in lists", statement: "Commas separate items in a list and show short pauses." },
            ],
            steps: [
              { reasoning: "Commas separate list items like 'apples, bananas and grapes'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Separate items in a list",
            commonErrors: ["Choosing (a) — full stops end sentences; commas do not."],
          },
        },
        {
          id: "pypl-q-u3l1c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A list has three items: 'a hat, a swimsuit and sunscreen'. How many commas separate the list items?",
          response: { type: "numeric", parts: [
            { label: "Commas in the list", answer: 2 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas in lists", statement: "Commas go between list items; a short list of three usually needs two commas." },
            ],
            steps: [
              { reasoning: "'a hat, a swimsuit and sunscreen' has commas after 'hat' and 'swimsuit' = 2 commas.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 3 — there is no comma needed before 'and' in this short list."],
          },
        },
        {
          id: "pypl-q-u3l1c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence needs a question mark?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where is my hat?" },
              { id: "b", text: "The hat is on the chair." },
              { id: "c", text: "I have a hat." },
              { id: "d", text: "My hat is red." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question mark", statement: "A sentence that asks something ends with a question mark." },
            ],
            steps: [
              { reasoning: "'Where is my hat?' asks a question — it needs (?).",
                marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Where is my hat?",
            commonErrors: ["Choosing (b) — it is a telling sentence, not a question."],
          },
        },
        {
          id: "pypl-q-u3l1c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add commas to make the list correct: 'I packed a hat a towel and sunscreen for the beach.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas in lists", statement: "Commas separate the items in a list." },
            ],
            steps: [
              { reasoning: "The list has three items: a hat, a towel, sunscreen.", marks: 1, markCode: "M" },
              { reasoning: "Correct: 'I packed a hat, a towel and sunscreen for the beach.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "I packed a hat, a towel and sunscreen for the beach.",
            commonErrors: ["Adding a comma before 'for the beach' — commas only separate the list items."],
          },
        },
        {
          id: "pypl-q-u3l1c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sentence lists three things to pack: a hat, a towel and sunscreen. How many items are in the list?",
          response: { type: "numeric", parts: [
            { label: "Items in the list", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "context", name: "Lists", statement: "Each thing separated in a list is one item." },
            ],
            steps: [
              { reasoning: "Count: hat, towel, sunscreen = 3 items.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one item."],
          },
        },
        {
          id: "pypl-q-u3l1c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is it better to use one or two strong describing words instead of piling up many weak ones?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Describing words", statement: "A few strong adjectives paint a clearer picture than a long list of weak ones." },
            ],
            steps: [
              { reasoning: "Too many describing words make the sentence clumsy and hard to read.", marks: 1, markCode: "M" },
              { reasoning: "One or two strong words (e.g. 'fluffy dog') give a clear picture.", marks: 1, markCode: "M" },
              { reasoning: "Good writing uses describing words with care, not decoration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Few strong describing words are clearer and easier to read than many weak ones.",
            commonErrors: ["Saying more describing words is always better — too many weaken the writing."],
          },
        },
        {
          id: "pypl-q-u3l1c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which word is a describing word (adjective)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Run" },
              { id: "b", text: "The" },
              { id: "c", text: "Fluffy" },
              { id: "d", text: "Quickly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Describing word", statement: "A describing word (adjective) tells more about a noun — 'fluffy' describes a dog or cat." },
            ],
            steps: [
              { reasoning: "'Fluffy' describes a noun; the others are a verb, adverb or article.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Fluffy",
            commonErrors: ["Choosing 'quickly' — that describes how something happens (an adverb), not a noun."],
          },
        },
        {
          id: "pypl-q-u3l1c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rewrite 'The cake was nice.' twice, each time adding one different describing word to make it more interesting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Describing words", statement: "Adjectives add detail; each rewrite needs a complete, correct sentence." },
            ],
            steps: [
              { reasoning: "First rewrite with one describing word, e.g. 'The cake was delicious.'", marks: 1, markCode: "M" },
              { reasoning: "Second rewrite with a different describing word, e.g. 'The cake was fluffy.'", marks: 1, markCode: "M" },
              { reasoning: "Both rewrites are complete sentences with the word in the right place.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two correct rewrites with different adjectives, e.g. 'delicious' and 'fluffy'.",
            commonErrors: ["Adding describing words that do not fit, e.g. 'The cake was asleep.'"],
          },
        },
        {
          id: "pypl-q-u3l1c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three punctuation marks were named: question mark, comma and full stop. How many punctuation marks are there?",
          response: { type: "numeric", parts: [
            { label: "Punctuation marks", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Punctuation", statement: "Question marks, commas and full stops are key punctuation marks." },
            ],
            steps: [
              { reasoning: "Count: question mark, comma, full stop = 3 marks.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one mark such as the comma."],
          },
        },
        {
          id: "pypl-q-u3l1c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses a comma correctly to show a short pause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After lunch we played, outside." },
              { id: "b", text: "After lunch we, played outside." },
              { id: "c", text: "After, lunch we played outside." },
              { id: "d", text: "After lunch, we played outside." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas for pauses", statement: "A comma can show a short pause after an opening phrase like 'After lunch'." },
            ],
            steps: [
              { reasoning: "The comma after 'lunch' marks the pause between the opening phrase and the main sentence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** After lunch, we played outside.",
            commonErrors: ["Choosing (d) — the comma splits 'played outside' wrongly."],
          },
        },
        {
          id: "pypl-q-u3l1c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence is punctuated correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like apples bananas and grapes." },
              { id: "b", text: "I like apples, bananas and grapes." },
              { id: "c", text: "I like apples, bananas, and grapes." },
              { id: "d", text: "I like, apples bananas and grapes." },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas in lists", statement: "Commas separate list items; a short list of three needs two commas, not one before 'and'." },
            ],
            steps: [
              { reasoning: "(d) correctly separates apples / bananas / grapes with two commas; (b) adds an unnecessary comma before 'and'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** I like apples, bananas and grapes.",
            commonErrors: ["Choosing (b) — the comma before 'and' is not needed in a short list."],
          },
        },
        {
          id: "pypl-q-u3l1c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Here is a messy invitation: 'you are invited to my birthday party on saturday we will have cake games and a bouncy castle it starts at four oclock'",
          parts: [
            { label: "a", prompt: "Turn the invitation into a question about the start time.", marks: 1 },
            { label: "b", prompt: "Rewrite the invitation as two complete sentences with capitals and full stops.", marks: 2 },
            { label: "c", prompt: "Add commas to separate the list of activities.", marks: 2 },
            { label: "d", prompt: "Add one describing word to make the party sound exciting.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Invitation writing", statement: "Invitations use sentences, capitals, full stops, commas for lists and question marks for questions." },
            ],
            steps: [
              { part: "a", reasoning: "Correct question form, e.g. 'What time does the party start?' with capital and (?).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two complete sentences, e.g. 'You are invited to my birthday party on Saturday. We will have cake, games and a bouncy castle.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Capitals and full stops all correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Commas separating cake / games / bouncy castle.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Commas placed correctly in the list.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A describing word, e.g. 'exciting birthday party' or 'fun games'.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The word suits the party and is placed correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'What time does the party start?' (b) Two punctuated sentences. (c) Commas in the list. (d) e.g. 'exciting'.",
            commonErrors: ["In (a), forgetting the question mark or capital."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe2-u4-lesson-4-2",
  code: "4-2",
  title: "Grammar: Verbs, Tenses and Punctuation",
  goal: "I CAN use verbs correctly and punctuate sentences.",
  standards: ["Year 2 Grammar"],
  vocabulary: [
    { term: "Verb", definition: "A doing or being word: run, jump, is, was." },
    {
      term: "Tense",
      definition: "When something happens: past, present or future.",
    },
    {
      term: "Past tense",
      definition: "Something that already happened: 'I played'.",
    },
    {
      term: "Question mark",
      definition: "The ? symbol at the end of a question.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u4-verbs",
      title: "Verbs and tenses",
      skill: "Identify verbs and use past, present and future tense.",
      lesson: {
        sections: [
          {
            heading: "Verbs and tenses",
            body: "Verbs show actions or states. Tense tells when: past ('I played'), present ('I play'), future ('I will play'). Many verbs change form: play → played, go → went, run → ran. Irregular verbs don't follow the -ed rule.",
          },
          {
            heading: "Choosing the right tense",
            body: "Match the tense to the time. Yesterday = past: 'We visited grandma.' Now = present: 'We visit grandma.' Tomorrow = future: 'We will visit grandma.' Keep the tense consistent in a piece of writing.",
          },
        ],
        keyFormulas: [
          {
            name: "Tenses",
            statement:
              "Past = happened; Present = happening; Future = will happen",
          },
        ],
        workedExample: {
          problem: "Change to past tense: 'I walk to school.'",
          solution: "I walked to school.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-vb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a verb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Happy" },
              { id: "b", text: "Run" },
              { id: "c", text: "Quickly" },
              { id: "d", text: "The" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Verb",
                statement: "Doing or being word.",
              },
            ],
            steps: [
              {
                reasoning: "'run' is an action word.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** run",
            commonErrors: ["Picking an adjective."],
          },
        },
        {
          id: "edpe2-u4-vb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is in the past tense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I play football." },
              { id: "b", text: "I played football." },
              { id: "c", text: "I will play football." },
              { id: "d", text: "I am playing football." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tenses",
                statement: "Past = -ed or irregular form.",
              },
            ],
            steps: [
              { reasoning: "'played' is past tense.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** I played football.",
            commonErrors: ["Confusing present and past."],
          },
        },
        {
          id: "edpe2-u4-vb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Change to past tense: 'She goes to the park every day.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Past tense", statement: "goes → went." },
            ],
            steps: [
              {
                reasoning: "'goes' is present tense of 'go'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Past tense of 'go' is 'went'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "She went to the park every day.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "She went to the park every day.",
            commonErrors: ["Using 'goed'."],
          },
        },
        {
          id: "edpe2-u4-vb-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three sentences: one past, one present, one future about eating lunch.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tenses",
                statement: "Three correct tenses.",
              },
            ],
            steps: [
              {
                reasoning: "Past: 'I ate lunch at noon.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Present: 'I eat lunch at school.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Future: 'I will eat lunch soon.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Three tenses about lunch",
            commonErrors: ["Wrong tense forms."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-punct",
      title: "Punctuation",
      skill:
        "Use full stops, question marks, exclamation marks and commas correctly.",
      lesson: {
        sections: [
          {
            heading: "End punctuation",
            body: "Full stop (.) ends statements: 'The dog ran.' Question mark (?) ends questions: 'Where is the dog?' Exclamation mark (!) shows strong feeling: 'What a goal!' Commas (,) separate items in a list: 'I like apples, bananas and grapes.'",
          },
          {
            heading: "Comma in lists",
            body: "Use commas to separate items in a list: 'I packed a sandwich, an apple and a drink.' The word 'and' comes before the last item. Don't use a comma before 'and' in a simple list at Year 2 level.",
          },
        ],
        keyFormulas: [
          {
            name: "Punctuation",
            statement:
              ". = statement; ? = question; ! = strong feeling; , = list",
          },
        ],
        workedExample: {
          problem: "Add punctuation: 'what is your name'",
          solution: "What is your name?",
        },
      },
      questions: [
        {
          id: "edpe2-u4-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark ends a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full stop" },
              { id: "b", text: "Question mark" },
              { id: "c", text: "Exclamation mark" },
              { id: "d", text: "Comma" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Punctuation",
                statement: "? ends questions.",
              },
            ],
            steps: [
              {
                reasoning: "Question mark ends questions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Question mark",
            commonErrors: ["Wrong punctuation."],
          },
        },
        {
          id: "edpe2-u4-pu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Punctuate: 'i like swimming and running and cycling'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like swimming and running and cycling." },
              { id: "b", text: "I like swimming, running and cycling." },
              { id: "c", text: "i like swimming, running, and cycling?" },
              { id: "d", text: "I like swimming running and cycling!" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comma in lists",
                statement: "Commas separate list items.",
              },
            ],
            steps: [
              {
                reasoning: "Capital I, commas between items, full stop at end.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** I like swimming, running and cycling.",
            commonErrors: ["Missing commas or capital."],
          },
        },
        {
          id: "edpe2-u4-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add the right punctuation: 'what a wonderful day'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exclamation",
                statement: "Strong feeling = exclamation mark.",
              },
            ],
            steps: [
              {
                reasoning: "'What a wonderful day' shows strong feeling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add capital W and exclamation mark.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "What a wonderful day!", marks: 1, markCode: "A" },
            ],
            finalAnswer: "What a wonderful day!",
            commonErrors: ["Using full stop instead."],
          },
        },
        {
          id: "edpe2-u4-pu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Punctuate this list correctly: 'my bag has a pencil a ruler and a book'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comma in lists",
                statement: "Commas + capital + full stop.",
              },
            ],
            steps: [
              { reasoning: "Capital M at start.", marks: 1, markCode: "M" },
              {
                reasoning: "Commas between items: pencil, ruler and book.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Full stop at end: 'My bag has a pencil, a ruler and a book.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "My bag has a pencil, a ruler and a book.",
            commonErrors: ["Missing commas."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-nouns",
      title: "Nouns and adjectives",
      skill: "Identify nouns and use adjectives to describe.",
      lesson: {
        sections: [
          {
            heading: "Nouns",
            body: "Nouns name people, places, things or animals: 'teacher', 'London', 'book', 'dog'. Proper nouns (names) get capital letters: 'Sam', 'Tuesday', 'England'. Common nouns don't: 'boy', 'day', 'country'.",
          },
          {
            heading: "Adjectives",
            body: "Adjectives describe nouns: 'the big dog', 'a red car', 'my happy friend'. They usually come before the noun. Use interesting adjectives to make writing vivid: 'the enormous elephant' is better than 'the big elephant'.",
          },
        ],
        keyFormulas: [
          { name: "Noun", statement: "Names a person, place, thing or animal" },
          { name: "Adjective", statement: "Describes a noun" },
        ],
        workedExample: {
          problem: "Find the noun and adjective: 'The fluffy cat slept.'",
          solution: "Noun: cat. Adjective: fluffy.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-na-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a noun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Run" },
              { id: "b", text: "Teacher" },
              { id: "c", text: "Quickly" },
              { id: "d", text: "And" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Noun",
                statement: "Names a person/place/thing.",
              },
            ],
            steps: [
              {
                reasoning: "'teacher' names a person.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** teacher",
            commonErrors: ["Picking a verb."],
          },
        },
        {
          id: "edpe2-u4-na-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word is an adjective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Table" },
              { id: "b", text: "Brown" },
              { id: "c", text: "Under" },
              { id: "d", text: "Jump" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adjective",
                statement: "Describes a noun.",
              },
            ],
            steps: [
              {
                reasoning: "'brown' describes colour.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** brown",
            commonErrors: ["Confusing noun and adjective."],
          },
        },
        {
          id: "edpe2-u4-na-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add an adjective: 'The dog barked loudly.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Adjectives",
                statement: "Adjective before noun.",
              },
            ],
            steps: [
              {
                reasoning: "Choose a describing word: 'big', 'brown', 'loud'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The big dog barked loudly.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct placement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The big dog barked loudly.",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edpe2-u4-na-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a sentence with a proper noun and an adjective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nouns/adjectives",
                statement: "Proper noun + adjective.",
              },
            ],
            steps: [
              {
                reasoning: "Proper noun: name like 'Emma' or 'Paris'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adjective: 'happy', 'big', 'red'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sentence: 'Happy Emma ran to school.' or similar.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Sentence with proper noun + adjective",
            commonErrors: ["Missing one element."],
          },
        },
      ],
    },
    {
      id: "edpe2-u4-recount",
      title: "Writing a recount",
      skill: "Write a recount of an event in the past tense.",
      lesson: {
        sections: [
          {
            heading: "Recounts",
            body: "A recount tells what happened, usually in the past tense. It has a beginning (when/where), middle (what happened) and end (how it finished). Use time connectives: 'first', 'then', 'next', 'after that', 'finally'.",
          },
          {
            heading: "Time connectives",
            body: "Time connectives show order: 'First we arrived', 'Then we played', 'Next we ate lunch', 'Finally we went home'. They help the reader follow the sequence of events.",
          },
        ],
        keyFormulas: [
          {
            name: "Recount",
            statement: "Past tense + time order: first, then, next, finally",
          },
        ],
        workedExample: {
          problem: "Write the start of a recount about a school trip.",
          solution:
            "Last Friday, our class went to the museum. First we got on the bus.",
        },
      },
      questions: [
        {
          id: "edpe2-u4-rc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What tense does a recount usually use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Past" },
              { id: "b", text: "Present" },
              { id: "c", text: "Future" },
              { id: "d", text: "Any tense" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recounts",
                statement: "Past tense.",
              },
            ],
            steps: [
              {
                reasoning: "Recounts tell what already happened.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Past",
            commonErrors: ["Wrong tense."],
          },
        },
        {
          id: "edpe2-u4-rc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a time connective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because" },
              { id: "b", text: "Then" },
              { id: "c", text: "But" },
              { id: "d", text: "Or" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time connectives",
                statement: "Show order of events.",
              },
            ],
            steps: [
              {
                reasoning: "'then' shows what happened next.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** then",
            commonErrors: ["Confusing with joining words."],
          },
        },
        {
          id: "edpe2-u4-rc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the middle of a recount about a birthday party using two time connectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recount writing",
                statement: "Past tense + time connectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Events in past tense: 'we played games', 'we ate cake'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Time connectives: 'first', 'then', 'next'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct sequence and punctuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Middle of birthday recount with connectives",
            commonErrors: ["Wrong tense or no connectives."],
          },
        },
        {
          id: "edpe2-u4-rc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short recount (3-4 sentences) about a day at the park. Use past tense and time connectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recount writing",
                statement: "Complete recount with correct features.",
              },
            ],
            steps: [
              { reasoning: "Beginning: when/where.", marks: 1, markCode: "M" },
              {
                reasoning: "Middle: events with time connectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Past tense throughout, correct punctuation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete park recount",
            commonErrors: ["Present tense or no structure."],
          },
        },
      ],
    },
  ],
};

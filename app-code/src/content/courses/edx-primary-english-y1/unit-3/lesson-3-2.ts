import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edpe1-u3-lesson-3-2",
  code: "3-2",
  title: "Spelling and Handwriting",
  goal: "I CAN spell common words and form letters correctly.",
  standards: ["Year 1 Writing"],
  vocabulary: [
    { term: "Spelling", definition: "Writing words with the correct letters." },
    {
      term: "CVC spelling",
      definition: "Sounding out consonant-vowel-consonant words.",
    },
    {
      term: "Letter formation",
      definition: "The correct way to write each letter.",
    },
    {
      term: "Sight word",
      definition: "A word learned by memory: the, said, was.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u3-spelling",
      title: "Spelling words",
      skill: "Spell CVC and common sight words correctly.",
      lesson: {
        sections: [
          {
            heading: "Sound it out",
            body: "For CVC words, sound out each letter: c-a-t → cat. Say each sound, then write the letters. Check: does the word look right? cat, not kat or ct.",
          },
          {
            heading: "Sight words",
            body: "Some words can't be sounded out — learn them by sight: the, was, said, they, have, here. Practise writing them again and again until you remember.",
          },
        ],
        keyFormulas: [
          { name: "CVC spelling", statement: "Sound each letter: h-a-t → hat" },
          { name: "Sight words", statement: "Learn by memory: the, was, said" },
        ],
        workedExample: {
          problem: "Spell the word for a small furry pet that says meow.",
          solution: "cat — c-a-t.",
        },
      },
      questions: [
        {
          id: "edpe1-u3-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ct" },
              { id: "b", text: "cat" },
              { id: "c", text: "caat" },
              { id: "d", text: "kat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spelling",
                statement: "cat is correct CVC spelling.",
              },
            ],
            steps: [
              { reasoning: "c-a-t spells cat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** cat",
            commonErrors: ["Phonetic misspellings like 'kat'."],
          },
        },
        {
          id: "edpe1-u3-sp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word is spelled correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "thie" },
              { id: "b", text: "they" },
              { id: "c", text: "thay" },
              { id: "d", text: "thay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sight word",
                statement: "'they' is the correct spelling.",
              },
            ],
            steps: [
              {
                reasoning: "Check sight word spelling.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: they.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** they",
            commonErrors: ["Phonetic spelling 'thay'."],
          },
        },
        {
          id: "edpe1-u3-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sound out and spell: a round yellow fruit that monkeys like.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CVC spelling",
                statement: "banana or orange — context clue.",
              },
            ],
            steps: [
              { reasoning: "Identify the fruit.", marks: 1, markCode: "M" },
              { reasoning: "Spell it correctly.", marks: 1, markCode: "A" },
              { reasoning: "Correct spelling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "banana",
            commonErrors: ["Misspelling the word."],
          },
        },
        {
          id: "edpe1-u3-sp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the correct spelling of these sight words: was, said, have.",
          parts: [
            { label: "a", prompt: "Spell 'was'.", marks: 1 },
            { label: "b", prompt: "Spell 'said'.", marks: 1 },
            { label: "c", prompt: "Spell 'have'.", marks: 1 },
            { label: "d", prompt: "Use 'said' in a sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sight words",
                statement: "was, said, have — all correct.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "was spelled correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "said spelled correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "have spelled correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "'said' used correctly in sentence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "was, said, have; e.g. 'She said hello.'",
            commonErrors: ["Phonetic spellings like 'wos', 'sed'."],
          },
        },
      ],
    },
    {
      id: "edpe1-u3-handwriting",
      title: "Letter formation",
      skill: "Form letters correctly: size, position and joins.",
      lesson: {
        sections: [
          {
            heading: "Letter shapes",
            body: "Letters have correct shapes: 'a' is round with a stick, 'b' is a stick then a bump, 'd' is a bump then a stick. Write letters the right way up and the right size.",
          },
          {
            heading: "Size and spacing",
            body: "Keep letters the same height within words. Leave finger spaces between words. Letters sit on the line — descenders (g, j, p, y) go below.",
          },
        ],
        keyFormulas: [
          {
            name: "Letter formation",
            statement: "Correct shape, size and position",
          },
          {
            name: "Descenders",
            statement: "Letters going below the line: g, j, p, y",
          },
        ],
        workedExample: {
          problem: "Which letters go below the line?",
          solution: "g, j, p, y — they have descenders.",
        },
      },
      questions: [
        {
          id: "edpe1-u3-hw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which letter goes below the line when writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "t" },
              { id: "b", text: "a" },
              { id: "c", text: "g" },
              { id: "d", text: "m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Descender",
                statement: "g goes below the line.",
              },
            ],
            steps: [
              { reasoning: "g has a descender.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** g",
            commonErrors: ["Choosing 'a' — it sits on the line."],
          },
        },
        {
          id: "edpe1-u3-hw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do we leave finger spaces between words?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "So words don't run together and are easy to read",
              },
              { id: "b", text: "To make writing pretty" },
              { id: "c", text: "To save paper" },
              { id: "d", text: "No reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spacing",
                statement: "Spaces separate words for readability.",
              },
            ],
            steps: [
              {
                reasoning: "Understand purpose of spacing.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: readability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** So words don't run together",
            commonErrors: ["Not understanding purpose."],
          },
        },
        {
          id: "edpe1-u3-hw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the word 'dog' neatly. Check: correct letters, size and spacing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Handwriting",
                statement: "dog written clearly with correct letter formation.",
              },
            ],
            steps: [
              { reasoning: "Correct letters d-o-g.", marks: 1, markCode: "A" },
              {
                reasoning: "Letters consistent size.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Neat and readable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "dog",
            commonErrors: ["Reversed or malformed letters."],
          },
        },
        {
          id: "edpe1-u3-hw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write this sentence neatly: 'The big dog ran.'",
          parts: [
            { label: "a", prompt: "Capital letter at start?", marks: 1 },
            { label: "b", prompt: "Finger spaces between words?", marks: 1 },
            { label: "c", prompt: "Full stop at end?", marks: 1 },
            { label: "d", prompt: "Letters formed correctly?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Handwriting checklist",
                statement: "All four criteria met.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Capital T present.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Spaces between words.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Full stop present.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Letters correctly formed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The big dog ran.",
            commonErrors: ["Missing any checklist item."],
          },
        },
      ],
    },
  ],
};

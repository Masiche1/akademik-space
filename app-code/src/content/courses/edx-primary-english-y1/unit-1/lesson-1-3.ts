import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edpe1-u1-lesson-1-3",
  code: "1-3",
  title: "Initial Sounds and CVC Reading",
  goal: "I CAN identify initial sounds in words and read CVC words fluently.",
  standards: ["Year 1 Phonics"],
  vocabulary: [
    {
      term: "Initial sound",
      definition: "The first sound in a word: 'cat' starts with /c/.",
    },
    {
      term: "CVC word",
      definition: "Consonant-Vowel-Consonant: hat, dog, sun.",
    },
    {
      term: "Rhyme",
      definition: "Words ending with the same sound: cat, hat, mat.",
    },
    {
      term: "Fluency",
      definition: "Reading smoothly without stopping at each sound.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u1-initial",
      title: "Initial sounds",
      skill: "Identify the first sound in words.",
      lesson: {
        sections: [
          {
            heading: "First sounds",
            body: "Every word starts with a sound. 'Apple' starts with /a/, 'banana' with /b/, 'cup' with /c/. Say the word slowly and listen to the first sound. This helps us sort and read words.",
          },
          {
            heading: "Initial sound practice",
            body: "Play 'I spy': 'I spy something beginning with /b/' → banana, ball, book. Find objects around you and name their initial sound.",
          },
        ],
        keyFormulas: [
          {
            name: "Initial sound",
            statement: "First sound you hear in a word",
          },
          { name: "I spy", statement: "Game for practising initial sounds" },
        ],
        workedExample: {
          problem: "What is the initial sound of 'moon'?",
          solution: "/m/ — moon starts with the m sound.",
        },
      },
      questions: [
        {
          id: "edpe1-u1-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the initial sound of 'dog'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "/o/" },
              { id: "b", text: "/d/" },
              { id: "c", text: "/g/" },
              { id: "d", text: "/t/" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial sound",
                statement: "dog starts with /d/.",
              },
            ],
            steps: [
              { reasoning: "First sound is /d/.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** /d/",
            commonErrors: ["Choosing /o/ — that's the middle sound."],
          },
        },
        {
          id: "edpe1-u1-in-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word starts with the same sound as 'sun'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sock" },
              { id: "b", text: "pig" },
              { id: "c", text: "dog" },
              { id: "d", text: "cat" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial sounds",
                statement: "sun and sock both start /s/.",
              },
            ],
            steps: [
              { reasoning: "sun = /s/; sock = /s/.", marks: 1, markCode: "M" },
              { reasoning: "Answer: sock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** sock",
            commonErrors: ["Choosing 'cat' — starts /k/ not /s/."],
          },
        },
        {
          id: "edpe1-u1-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these words by initial sound: cat, cup, dog, den.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial sounds",
                statement: "cat/cup start /c/; dog/den start /d/.",
              },
            ],
            steps: [
              { reasoning: "Group by first sound.", marks: 1, markCode: "M" },
              { reasoning: "/c/: cat, cup.", marks: 1, markCode: "A" },
              { reasoning: "/d/: dog, den.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "/c/: cat, cup; /d/: dog, den",
            commonErrors: ["Grouping by last sound instead of first."],
          },
        },
        {
          id: "edpe1-u1-in-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the initial sound of each word: apple, ball, cat, dog.",
          parts: [
            { label: "a", prompt: "Initial sound of 'apple'?", marks: 1 },
            { label: "b", prompt: "Initial sound of 'ball'?", marks: 1 },
            { label: "c", prompt: "Initial sound of 'cat'?", marks: 1 },
            { label: "d", prompt: "Write the four sounds in order.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Initial sounds",
                statement: "/a/, /b/, /k/, /d/.",
              },
            ],
            steps: [
              { part: "a", reasoning: "apple → /a/.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "ball → /b/.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "cat → /k/ (c sounds like k).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Order: /a/ /b/ /k/ /d/.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "/a/, /b/, /k/, /d/",
            commonErrors: ["Saying letter names — use sounds."],
          },
        },
      ],
    },
    {
      id: "edpe1-u1-rhyming",
      title: "Rhyming words",
      skill: "Identify and generate rhyming words.",
      lesson: {
        sections: [
          {
            heading: "What is a rhyme?",
            body: "Rhyming words end with the same sound: cat, hat, mat, sat. They have different beginnings but the same ending sound. Rhymes make poems and songs fun!",
          },
          {
            heading: "Making rhymes",
            body: "To make a rhyme, keep the ending the same and change the beginning: cat → bat, rat, fat. Try rhyming with -at, -an, -in, -og word families.",
          },
        ],
        keyFormulas: [
          { name: "Rhyme", statement: "Same ending sound" },
          {
            name: "Word family",
            statement: "Words sharing the same rime: -at, -an, -in",
          },
        ],
        workedExample: {
          problem: "Give two words that rhyme with 'cat'.",
          solution: "hat, mat, sat, rat, fat — any two.",
        },
      },
      questions: [
        {
          id: "edpe1-u1-rh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word rhymes with 'cat'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dog" },
              { id: "b", text: "pig" },
              { id: "c", text: "hat" },
              { id: "d", text: "sun" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyme",
                statement: "cat and hat rhyme.",
              },
            ],
            steps: [
              { reasoning: "Same ending sound -at.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** hat",
            commonErrors: ["Choosing 'dog' — no shared ending."],
          },
        },
        {
          id: "edpe1-u1-rh-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word does NOT rhyme with 'bed'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fed" },
              { id: "b", text: "big" },
              { id: "c", text: "led" },
              { id: "d", text: "red" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyme",
                statement: "red/led/fed rhyme with bed; big doesn't.",
              },
            ],
            steps: [
              { reasoning: "Check ending sounds.", marks: 1, markCode: "M" },
              { reasoning: "Answer: big.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** big",
            commonErrors: [
              "Picking a rhyming word — question asks for non-rhyme.",
            ],
          },
        },
        {
          id: "edpe1-u1-rh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two words that rhyme with 'sun'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyming",
                statement: "fun, run, bun, gun — any two.",
              },
            ],
            steps: [
              {
                reasoning: "Identify -un ending words.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Two valid rhymes given.", marks: 1, markCode: "A" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "fun, run (or bun, gun)",
            commonErrors: ["Giving words that don't actually rhyme."],
          },
        },
        {
          id: "edpe1-u1-rh-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Complete this rhyme: 'The cat sat on a ___.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rhyme completion",
                statement: "Word rhymes with 'cat' and fits context.",
              },
            ],
            steps: [
              {
                reasoning: "Identify rhyme target (-at sound).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Word fits sentence meaning.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Rhymes with 'cat'.", marks: 1, markCode: "A" },
              { reasoning: "Makes sense.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "e.g. 'mat', 'hat', 'rat'",
            commonErrors: ["Word that doesn't rhyme or doesn't fit context."],
          },
        },
      ],
    },
  ],
};

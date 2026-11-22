import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edpe1-u3-lesson-3-1",
  code: "3-1",
  title: "Sentences: Capital Letters and Full Stops",
  goal: "I CAN write sentences starting with capital letters and ending with full stops.",
  standards: ["Year 1 Writing"],
  vocabulary: [
    {
      term: "Sentence",
      definition: "Words that make sense together and tell something complete.",
    },
    {
      term: "Capital letter",
      definition: "The big letter at the start of a sentence and for names.",
    },
    { term: "Full stop", definition: "The dot . at the end of a sentence." },
    { term: "Finger space", definition: "The gap between words when writing." },
  ],
  concepts: [
    {
      id: "edpe1-u3-sentences",
      title: "Writing sentences",
      skill: "Write complete sentences with correct punctuation.",
      lesson: {
        sections: [
          {
            heading: "What is a sentence?",
            body: "A sentence tells a complete idea: 'The cat sat.' Not a sentence: 'the cat sat on' — it's incomplete. Every sentence starts with a capital letter and ends with a full stop.",
          },
          {
            heading: "Capital letters and full stops",
            body: "Capital letters start sentences: 'The dog ran.' Full stops end them: 'I like milk.' Names also get capitals: 'Sam', 'London'. Practise writing sentences carefully.",
          },
        ],
        keyFormulas: [
          {
            name: "Sentence",
            statement: "Complete idea + capital start + full stop end",
          },
          { name: "Names", statement: "People and places get capital letters" },
        ],
        workedExample: {
          problem: "Fix this: 'the dog ran fast'",
          solution: "The dog ran fast.",
        },
      },
      questions: [
        {
          id: "edpe1-u3-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a complete sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cat sat." },
              { id: "b", text: "the cat" },
              { id: "c", text: "cat sat on" },
              { id: "d", text: "the big" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sentence",
                statement: "Complete idea with capital + full stop.",
              },
            ],
            steps: [
              {
                reasoning: "Only 'The cat sat.' is complete.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The cat sat.",
            commonErrors: ["Choosing incomplete phrases."],
          },
        },
        {
          id: "edpe1-u3-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add the missing capital letter: 'my dog is called rex.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital letters",
                statement: "My dog is called Rex.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence start needs capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Name 'Rex' also capitalised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "My dog is called Rex.",
            commonErrors: ["Missing capital on 'Rex' — it's a name."],
          },
        },
        {
          id: "edpe1-u3-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence about your pet. Include a capital letter and full stop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence writing",
                statement: "Complete sentence with correct punctuation.",
              },
            ],
            steps: [
              {
                reasoning: "Complete sentence written.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Starts with capital letter.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Ends with full stop.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'My cat likes milk.'",
            commonErrors: ["Missing punctuation or incomplete sentence."],
          },
        },
        {
          id: "edpe1-u3-se-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Fix these sentences: 'sam went to london. he saw big ben.'",
          parts: [
            { label: "a", prompt: "Fix the first sentence.", marks: 2 },
            { label: "b", prompt: "Fix the second sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital letters",
                statement: "Sam went to London. He saw Big Ben.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sam and London capitalised.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Full stop present.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "He capitalised; Big Ben capitalised.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Full stop present.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sam went to London. He saw Big Ben.",
            commonErrors: ["Missing capitals on names."],
          },
        },
      ],
    },
    {
      id: "edpe1-u3-joining",
      title: "Joining words and describing words",
      skill: "Use and, but, because and describing words in sentences.",
      lesson: {
        sections: [
          {
            heading: "Joining words",
            body: "Joining words connect ideas: 'I like cats **and** dogs.' 'I wanted to play **but** it rained.' 'I stayed inside **because** it was cold.' They make sentences more interesting.",
          },
          {
            heading: "Describing words",
            body: "Adjectives describe nouns: 'the **big** dog', 'a **red** ball', 'the **happy** child'. They tell us more about people, places and things.",
          },
        ],
        keyFormulas: [
          { name: "Joining words", statement: "and, but, because, or, so" },
          { name: "Adjective", statement: "Describing word: big, red, happy" },
        ],
        workedExample: {
          problem: "Add a describing word: 'The ___ cat sat.'",
          solution: "The fluffy/black/old cat sat.",
        },
      },
      questions: [
        {
          id: "edpe1-u3-jw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word joins two ideas? 'I like apples ___ I like bananas.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "and" },
              { id: "b", text: "is" },
              { id: "c", text: "a" },
              { id: "d", text: "the" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Joining word",
                statement: "'and' joins ideas.",
              },
            ],
            steps: [
              { reasoning: "and connects two likes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** and",
            commonErrors: ["Choosing 'the' — not a joining word."],
          },
        },
        {
          id: "edpe1-u3-jw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose the joining word: 'I wanted to play outside ___ it was raining.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "so" },
              { id: "b", text: "or" },
              { id: "c", text: "and" },
              { id: "d", text: "but" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Joining words",
                statement: "'but' shows contrast.",
              },
            ],
            steps: [
              {
                reasoning: "Contrast between wanting and rain.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: but.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** but",
            commonErrors: ["Choosing 'and' — doesn't show contrast."],
          },
        },
        {
          id: "edpe1-u3-jw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add a describing word to make this better: 'I saw a ___ bird.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjectives",
                statement: "Any sensible adjective: big, red, pretty.",
              },
            ],
            steps: [
              {
                reasoning: "Adjective inserted correctly.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Describes the bird.", marks: 1, markCode: "A" },
              {
                reasoning: "Sentence still makes sense.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. 'I saw a big red bird.'",
            commonErrors: ["Adding a non-describing word."],
          },
        },
        {
          id: "edpe1-u3-jw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this sentence using a joining word and a describing word: 'The dog barked.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sentence improvement",
                statement:
                  "e.g. 'The big dog barked loudly because it saw a cat.'",
              },
            ],
            steps: [
              { reasoning: "Describing word added.", marks: 1, markCode: "M" },
              {
                reasoning: "Joining word used correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sentence still makes sense.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Improvement clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'The big dog barked loudly because it saw a cat.'",
            commonErrors: ["Forcing words that don't fit."],
          },
        },
      ],
    },
  ],
};

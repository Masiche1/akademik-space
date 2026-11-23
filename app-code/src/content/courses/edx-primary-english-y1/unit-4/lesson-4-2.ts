import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpe1-u4-lesson-4-2",
  code: "4-2",
  title: "Joining Words and Describing Words",
  goal: "I CAN use joining words and describing words to make writing interesting.",
  standards: ["Year 1 Writing"],
  vocabulary: [
    {
      term: "Joining word",
      definition: "A word that joins ideas: and, but, or, so.",
    },
    {
      term: "Describing word",
      definition: "A word that tells what something is like.",
    },
    {
      term: "Adjective",
      definition: "A describing word like 'big', 'red', 'happy'.",
    },
    {
      term: "Expand a sentence",
      definition: "Make a sentence longer and more interesting.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u4-joining",
      title: "Joining words",
      skill: "Use and, but, or, so to join sentences and ideas.",
      lesson: {
        sections: [
          {
            heading: "Joining words",
            body: "Joining words connect ideas: 'and' adds, 'but' shows a difference, 'or' gives a choice, 'so' shows a result. 'I wanted ice cream but it was raining.' Joining words make writing flow better.",
          },
          {
            heading: "Joining sentences",
            body: "Two short sentences can be joined: 'The cat sat. The dog ran.' → 'The cat sat and the dog ran.' Use the right joining word for the meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Joining words",
            statement: "and = add; but = difference; or = choice; so = result",
          },
        ],
        workedExample: {
          problem: "Join: 'I like apples. I like pears.'",
          solution: "I like apples and I like pears.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-jw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which joining word shows a difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "and" },
              { id: "b", text: "but" },
              { id: "c", text: "so" },
              { id: "d", text: "or" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Joining words",
                statement: "but = difference.",
              },
            ],
            steps: [
              {
                reasoning: "'but' shows a difference or opposite.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** but",
            commonErrors: ["Confusing and and but."],
          },
        },
        {
          id: "edpe1-u4-jw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Join these: 'I wanted to play. It was raining.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I wanted to play and it was raining." },
              { id: "b", text: "I wanted to play but it was raining." },
              { id: "c", text: "I wanted to play or it was raining." },
              { id: "d", text: "I wanted to play so it was raining." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Joining sentences",
                statement: "but shows the difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wanting to play vs raining is a difference — use 'but'.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** but",
            commonErrors: ["Wrong joining word."],
          },
        },
        {
          id: "edpe1-u4-jw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join with 'so': 'It was cold. I wore my coat.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Joining sentences",
                statement: "It was cold so I wore my coat.",
              },
            ],
            steps: [
              { reasoning: "'so' shows a result.", marks: 1, markCode: "M" },
              {
                reasoning: "It was cold so I wore my coat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct joining word and order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It was cold so I wore my coat.",
            commonErrors: ["Wrong joining word."],
          },
        },
        {
          id: "edpe1-u4-jw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Join these three sentences using joining words: 'The sun was shining. We went to the park. We had fun.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Joining sentences",
                statement: "Joined with and/so.",
              },
            ],
            steps: [
              {
                reasoning: "The sun was shining and we went to the park.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "We went to the park and had fun.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Full joined sentence with correct punctuation.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The sun was shining and we went to the park and had fun.",
            commonErrors: ["Missing joining words."],
          },
        },
      ],
    },
    {
      id: "edpe1-u4-describing",
      title: "Describing words",
      skill: "Use adjectives to make sentences more interesting.",
      lesson: {
        sections: [
          {
            heading: "Describing words",
            body: "Describing words (adjectives) tell us more about nouns: 'the big dog', 'a red ball', 'the happy child'. They make writing more interesting and help the reader picture things.",
          },
          {
            heading: "Expanding sentences",
            body: "Add describing words to make sentences better: 'I saw a dog.' → 'I saw a big, brown dog.' 'She has a cat.' → 'She has a small, fluffy cat.' Choose words that fit the picture.",
          },
        ],
        keyFormulas: [
          {
            name: "Describing words",
            statement: "Tell what something is like: big, red, happy",
          },
        ],
        workedExample: {
          problem: "Expand: 'The bird flew.'",
          solution: "The small, blue bird flew high.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-dw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word describes 'dog'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Run" },
              { id: "b", text: "Big" },
              { id: "c", text: "And" },
              { id: "d", text: "The" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Describing word",
                statement: "Tells what something is like.",
              },
            ],
            steps: [
              {
                reasoning: "'big' describes the dog.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** big",
            commonErrors: ["Picking a verb or joining word."],
          },
        },
        {
          id: "edpe1-u4-dw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand: 'I have a cat.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have a cat and dog." },
              { id: "b", text: "I have a small, fluffy cat." },
              { id: "c", text: "I have a cat but it is black." },
              { id: "d", text: "I have a cat or a dog." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expanding sentences",
                statement: "Add describing words.",
              },
            ],
            steps: [
              {
                reasoning: "'small' and 'fluffy' describe the cat.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** small, fluffy cat",
            commonErrors: ["Adding joining words instead."],
          },
        },
        {
          id: "edpe1-u4-dw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add a describing word: 'The cake was tasty.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Describing words",
                statement: "Add adjective before noun.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choose a word that describes cake: 'delicious', 'big', 'chocolate'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The delicious cake was tasty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct placement and punctuation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The delicious cake was tasty.",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edpe1-u4-dw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand this sentence with two describing words: 'The girl walked to school.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Expanding sentences",
                statement: "Two adjectives added.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Choose describing words: 'tall', 'happy', 'quickly'→'quick'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The tall girl walked quickly to school.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two describing words used correctly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "The tall girl walked quickly to school.",
            commonErrors: ["Only one describing word."],
          },
        },
      ],
    },
    {
      id: "edpe1-u4-sentences",
      title: "Sentence variety",
      skill: "Write different types of sentences.",
      lesson: {
        sections: [
          {
            heading: "Types of sentences",
            body: "Statements tell something: 'The sky is blue.' Questions ask: 'What colour is the sky?' Commands tell someone to do something: 'Close the door.' Exclamations show strong feeling: 'What a lovely day!' Each ends with different punctuation.",
          },
          {
            heading: "Punctuation",
            body: "Full stop (.) ends statements. Question mark (?) ends questions. Exclamation mark (!) ends exclamations. Commands can end with a full stop or exclamation mark. Using the right punctuation shows the sentence type.",
          },
        ],
        keyFormulas: [
          {
            name: "Punctuation",
            statement: ". = statement; ? = question; ! = exclamation",
          },
        ],
        workedExample: {
          problem: "What punctuation ends: 'Where are you going?'",
          solution: "Question mark — it's a question.",
        },
      },
      questions: [
        {
          id: "edpe1-u4-sv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog ran." },
              { id: "b", text: "Where is the dog?" },
              { id: "c", text: "Sit down!" },
              { id: "d", text: "What a day." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sentence types",
                statement: "Questions ask something.",
              },
            ],
            steps: [
              {
                reasoning: "'Where is the dog?' asks a question.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Where is the dog?",
            commonErrors: ["Confusing statements and questions."],
          },
        },
        {
          id: "edpe1-u4-sv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which punctuation ends an exclamation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full stop" },
              { id: "b", text: "Question mark" },
              { id: "c", text: "Exclamation mark" },
              { id: "d", text: "Comma" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Punctuation",
                statement: "! ends exclamations.",
              },
            ],
            steps: [
              {
                reasoning: "Exclamation mark shows strong feeling.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Exclamation mark",
            commonErrors: ["Wrong punctuation."],
          },
        },
        {
          id: "edpe1-u4-sv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a command sentence about brushing teeth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Commands",
                statement: "Command tells someone to do something.",
              },
            ],
            steps: [
              {
                reasoning: "Command starts with a verb: 'Brush'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Brush your teeth twice a day.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct punctuation and meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Brush your teeth twice a day.",
            commonErrors: ["Not a command."],
          },
        },
        {
          id: "edpe1-u4-sv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write one statement, one question and one exclamation about a birthday party.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence types",
                statement: "Three types written.",
              },
            ],
            steps: [
              {
                reasoning: "Statement: 'The party was fun.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Question: 'Did you enjoy the cake?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exclamation: 'What a great party!'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Three sentence types about party",
            commonErrors: ["Missing a type."],
          },
        },
      ],
    },
  ],
};

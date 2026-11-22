import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe2-u1-lesson-1-3",
  code: "1-3",
  title: "Longer Words and Reading Fluency",
  goal: "I CAN read longer words by breaking them into syllables.",
  standards: ["Year 2 Reading"],
  vocabulary: [
    {
      term: "Syllable",
      definition:
        "A part of a word with one vowel sound: ba-na-na has 3 syllables.",
    },
    {
      term: "Fluency",
      definition: "Reading smoothly with expression and understanding.",
    },
    {
      term: "Chunk",
      definition: "A group of letters read together: 'ing', 'tion'.",
    },
    {
      term: "Expression",
      definition:
        "Reading with feeling — voice goes up for questions, down for statements.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u1-syllables",
      title: "Breaking words into syllables",
      skill: "Read longer words by splitting into syllables.",
      lesson: {
        sections: [
          {
            heading: "What is a syllable?",
            body: "A syllable is a 'beat' in a word. Clap as you say it: ba-NA-na (3 claps), dog (1 clap), ta-ble (2 claps). Each syllable usually has one vowel sound.",
          },
          {
            heading: "Reading long words",
            body: "Break into syllables: 'butterfly' = but-ter-fly. Read each part then blend: 'but' + 'ter' + 'fly' = butterfly. Look for known chunks like -ing, -ed, -tion.",
          },
        ],
        keyFormulas: [
          { name: "Syllable", statement: "One vowel sound = one beat" },
          { name: "Chunking", statement: "Split word, read parts, blend" },
        ],
        workedExample: {
          problem: "Break 'elephant' into syllables and read it.",
          solution: "el-e-phant → elephant.",
        },
      },
      questions: [
        {
          id: "edpe2-u1-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many syllables are in 'banana'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Syllable",
                statement: "ba-na-na = 3 syllables.",
              },
            ],
            steps: [{ reasoning: "Clap each beat.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 3",
            commonErrors: ["Counting letters not vowel sounds."],
          },
        },
        {
          id: "edpe2-u1-sy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Break 'butterfly' into syllables.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bu-tte-rfly" },
              { id: "b", text: "but-ter-fly" },
              { id: "c", text: "b-u-t-t-e-r-f-l-y" },
              { id: "d", text: "butt-er-fl-y" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Syllables",
                statement: "but-ter-fly = 3 syllables.",
              },
            ],
            steps: [
              { reasoning: "Identify vowel beats.", marks: 1, markCode: "M" },
              { reasoning: "Answer: but-ter-fly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** but-ter-fly",
            commonErrors: ["Splitting mid-vowel."],
          },
        },
        {
          id: "edpe2-u1-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read this long word by chunking: 'dinosaurs'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chunking",
                statement: "di-no-saur-ous or di-no-saurs.",
              },
            ],
            steps: [
              {
                reasoning: "Break into readable parts.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Blend to read word.", marks: 1, markCode: "A" },
              { reasoning: "Correct pronunciation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "dinosaurs (di-no-saur-ous)",
            commonErrors: ["Trying to sound out all letters at once."],
          },
        },
        {
          id: "edpe2-u1-sy-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these words by number of syllables: cat, table, elephant, run.",
          parts: [
            { label: "a", prompt: "1 syllable words?", marks: 1 },
            { label: "b", prompt: "2 syllable words?", marks: 1 },
            { label: "c", prompt: "3+ syllable words?", marks: 1 },
            { label: "d", prompt: "Which is longest and why?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Syllable counting",
                statement: "cat/run=1; table=2; elephant=3.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "cat, run = 1 syllable.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "table = 2 syllables.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "elephant = 3 syllables.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "elephant — most syllables.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "1: cat, run; 2: table; 3: elephant",
            commonErrors: ["Miscounting syllables."],
          },
        },
      ],
    },
    {
      id: "edpe2-u1-fluency",
      title: "Reading with expression",
      skill: "Read aloud with expression, pausing and phrasing.",
      lesson: {
        sections: [
          {
            heading: "Phrasing",
            body: "Good readers group words into phrases: 'The little dog / ran quickly / to the park.' Pause at commas and full stops. Don't stop at every word — read in chunks that make sense.",
          },
          {
            heading: "Expression",
            body: "Use your voice! Questions go up at the end: 'Where are you going?' Statements go down: 'I'm going home.' Excitement gets louder: 'Wow, what a big cake!' Match your voice to the feeling.",
          },
        ],
        keyFormulas: [
          { name: "Phrasing", statement: "Read in meaningful chunks" },
          {
            name: "Expression",
            statement: "Voice shows feeling and punctuation",
          },
        ],
        workedExample: {
          problem: "Read with expression: 'Stop! That is my toy!'",
          solution: "Say firmly and loudly — it's an exclamation.",
        },
      },
      questions: [
        {
          id: "edpe2-u1-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where should you pause when reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never pause" },
              { id: "b", text: "At commas and full stops" },
              { id: "c", text: "Only at the end" },
              { id: "d", text: "After every word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phrasing",
                statement: "Pause at punctuation.",
              },
            ],
            steps: [
              {
                reasoning: "Punctuation guides pauses.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** At commas and full stops",
            commonErrors: ["Pausing at every word — too choppy."],
          },
        },
        {
          id: "edpe2-u1-fl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should you read a question like 'Where are you going?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voice goes up at the end" },
              { id: "b", text: "Voice goes down" },
              { id: "c", text: "Very quietly" },
              { id: "d", text: "Same as a statement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expression",
                statement: "Questions rise at end.",
              },
            ],
            steps: [
              { reasoning: "Identify question mark.", marks: 1, markCode: "M" },
              { reasoning: "Answer: voice goes up.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Voice goes up",
            commonErrors: ["Reading like a statement."],
          },
        },
        {
          id: "edpe2-u1-fl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read this aloud in your head and decide how to say it: 'The baby is sleeping. Please be quiet.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expression",
                statement: "Quiet, gentle voice — baby sleeping.",
              },
            ],
            steps: [
              { reasoning: "Identify calm context.", marks: 1, markCode: "M" },
              { reasoning: "Appropriate quiet tone.", marks: 1, markCode: "A" },
              { reasoning: "Pauses at full stops.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quiet, gentle reading with pauses",
            commonErrors: ["Reading loudly — wrong for context."],
          },
        },
        {
          id: "edpe2-u1-fl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read these two sentences with different expression: 'What a beautiful day!' and 'The rain is heavy.'",
          parts: [
            { label: "a", prompt: "How do you read the first?", marks: 2 },
            { label: "b", prompt: "How do you read the second?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expression",
                statement: "Excited/upbeat vs calm/serious.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Excited, happy tone.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Exclamation = enthusiasm.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Calm, maybe serious tone.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Statement = neutral reading.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Excited vs calm",
            commonErrors: [
              "Same tone for both — ignoring punctuation meaning.",
            ],
          },
        },
      ],
    },
  ],
};

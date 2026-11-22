import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edpe3-u1-lesson-1-2",
  code: "1-2",
  title: "Compound Words and Word Families",
  goal: "I CAN identify compound words and related word families.",
  standards: ["Year 3 Phonics"],
  vocabulary: [
    {
      term: "Compound word",
      definition:
        "Two words joined to make a new word: sun+flower = sunflower.",
    },
    {
      term: "Word family",
      definition: "Words sharing the same root: teach, teacher, teaching.",
    },
    {
      term: "Synonym",
      definition: "A word with a similar meaning: happy/glad.",
    },
    {
      term: "Antonym",
      definition: "A word with the opposite meaning: hot/cold.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u1-compound",
      title: "Compound words",
      skill: "Identify and use compound words.",
      lesson: {
        sections: [
          {
            heading: "Two words, one meaning",
            body: "Compound words combine two words: **sun**+**flower** = sunflower, **bed**+**room** = bedroom, **foot**+**ball** = football, **rain**+**bow** = rainbow, **cup**+**cake** = cupcake. The meaning often relates to both parts.",
          },
          {
            heading: "Spotting them",
            body: "Look for words that can split into two real words: 'butterfly' → butter + fly, 'starfish' → star + fish. Some change spelling slightly: 'everyone' = every + one.",
          },
        ],
        keyFormulas: [
          { name: "Compound", statement: "word + word = new word" },
          {
            name: "Examples",
            statement: "sunflower, bedroom, football, rainbow",
          },
        ],
        workedExample: {
          problem: "Split 'toothbrush' into its two words.",
          solution: "tooth + brush.",
        },
      },
      questions: [
        {
          id: "edpe3-u1-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a compound word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sunflower" },
              { id: "b", text: "run" },
              { id: "c", text: "cat" },
              { id: "d", text: "big" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound word",
                statement: "sun+flower = sunflower.",
              },
            ],
            steps: [
              { reasoning: "Two words joined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** sunflower",
            commonErrors: ["Choosing a simple word."],
          },
        },
        {
          id: "edpe3-u1-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Split this compound word: 'rainbow'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rainb + ow" },
              { id: "b", text: "ra + inbow" },
              { id: "c", text: "rai + nbow" },
              { id: "d", text: "rain + bow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound words",
                statement: "rain + bow.",
              },
            ],
            steps: [
              {
                reasoning: "Identify two real words.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: rain + bow.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** rain + bow",
            commonErrors: ["Splitting mid-word incorrectly."],
          },
        },
        {
          id: "edpe3-u1-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make a compound word from: 'sun' and 'flower'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound words",
                statement: "sunflower.",
              },
            ],
            steps: [
              { reasoning: "Join two words.", marks: 1, markCode: "M" },
              { reasoning: "Correct spelling.", marks: 1, markCode: "A" },
              { reasoning: "Makes sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "sunflower",
            commonErrors: ["sun flower as two words."],
          },
        },
        {
          id: "edpe3-u1-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Split these compound words and explain what each part means: bedroom, football, butterfly.",
          parts: [
            { label: "a", prompt: "bedroom", marks: 1 },
            { label: "b", prompt: "football", marks: 1 },
            { label: "c", prompt: "butterfly", marks: 1 },
            { label: "d", prompt: "Why do compound words exist?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound words",
                statement: "bed+room, foot+ball, butter+fly; combine meanings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "bed + room = room for bed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "foot + ball = ball for feet.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "butter + fly = fly that likes butter.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Combines meanings efficiently.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "bed+room, foot+ball, butter+fly; combines meanings",
            commonErrors: ["Wrong splits or meanings."],
          },
        },
      ],
    },
    {
      id: "edpe3-u1-wordfamilies",
      title: "Word families and synonyms",
      skill: "Use word families, synonyms and antonyms.",
      lesson: {
        sections: [
          {
            heading: "Word families",
            body: "Words sharing a root: **teach** → teacher, teaching, teaches. **run** → runner, running, ran. **happy** → happiness, happily, unhappy. They share meaning but different uses.",
          },
          {
            heading: "Synonyms and antonyms",
            body: "**Synonyms** mean the same: happy/glad, big/large, fast/quick. **Antonyms** mean opposite: hot/cold, day/night, up/down. Using them makes writing more interesting.",
          },
        ],
        keyFormulas: [
          { name: "Word family", statement: "teach, teacher, teaching" },
          { name: "Synonym", statement: "Same meaning: happy/glad" },
          { name: "Antonym", statement: "Opposite: hot/cold" },
        ],
        workedExample: {
          problem: "Give a synonym and antonym for 'happy'.",
          solution: "Synonym: glad; Antonym: sad.",
        },
      },
      questions: [
        {
          id: "edpe3-u1-wf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is in the same family as 'teach'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "teacher" },
              { id: "b", text: "book" },
              { id: "c", text: "school" },
              { id: "d", text: "learn" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Word family",
                statement: "teacher shares root 'teach'.",
              },
            ],
            steps: [{ reasoning: "Same root word.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** teacher",
            commonErrors: ["Choosing related but different root."],
          },
        },
        {
          id: "edpe3-u1-wf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a synonym for 'big'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "little" },
              { id: "b", text: "small" },
              { id: "c", text: "tiny" },
              { id: "d", text: "large" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synonym",
                statement: "large = big.",
              },
            ],
            steps: [
              { reasoning: "Same meaning.", marks: 1, markCode: "M" },
              { reasoning: "Answer: large.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** large",
            commonErrors: ["Choosing antonym."],
          },
        },
        {
          id: "edpe3-u1-wf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an antonym for 'fast'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Antonym", statement: "slow." },
            ],
            steps: [
              { reasoning: "Identify opposite.", marks: 1, markCode: "M" },
              { reasoning: "slow given.", marks: 1, markCode: "A" },
              { reasoning: "Correct antonym.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "slow",
            commonErrors: ["Giving synonym instead."],
          },
        },
        {
          id: "edpe3-u1-wf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the word 'happy': give a synonym, an antonym, and two words in its family.",
          parts: [
            { label: "a", prompt: "Synonym", marks: 1 },
            { label: "b", prompt: "Antonym", marks: 1 },
            { label: "c", prompt: "Family word 1", marks: 1 },
            { label: "d", prompt: "Family word 2", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word relationships",
                statement: "glad/sad; happiness, happily.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Synonym given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Antonym given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Family word given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Second family word.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "glad; sad; happiness; happily",
            commonErrors: ["Wrong relationships."],
          },
        },
      ],
    },
  ],
};

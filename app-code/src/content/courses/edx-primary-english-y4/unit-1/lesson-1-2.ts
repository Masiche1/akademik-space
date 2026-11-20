import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edpe4-u1-lesson-1-2",
  code: "1-2",
  title: "Homophones and Commonly Misspelt Words",
  goal: "I CAN spell homophones and commonly misspelt words correctly.",
  standards: ["Year 4 Spelling"],
  vocabulary: [
    {
      term: "Homophone",
      definition:
        "Same sound, different meaning/spelling: their/there/they're.",
    },
    {
      term: "Homograph",
      definition:
        "Same spelling, different meaning: lead (metal) / lead (guide).",
    },
    {
      term: "Commonly misspelt",
      definition: "Words often spelled wrong: because, friend, Wednesday.",
    },
    {
      term: "Mnemonics",
      definition:
        "Memory tricks for spelling: 'because = Big Elephants Can Always Understand Small Elephants'.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u1-homophones",
      title: "Homophones",
      skill: "Choose correct homophones using context.",
      lesson: {
        sections: [
          {
            heading: "Tricky sets",
            body: "**their/there/they're**: belonging/place/they are. **to/too/two**: direction/also/number. **your/you're**: belonging/you are. **its/it's**: belonging/it is. **whose/who's**: belonging/who is.",
          },
          {
            heading: "Using context",
            body: "Ask: does it show belonging? (their, your, its) Or a place? (there) Or 'they are'? (they're) Read the whole sentence to decide.",
          },
        ],
        keyFormulas: [
          {
            name: "their/there/they're",
            statement: "belonging / place / they are",
          },
          { name: "your/you're", statement: "belonging / you are" },
          { name: "its/it's", statement: "belonging / it is" },
        ],
        workedExample: {
          problem: "Choose: '___ going to love this!' (they are)",
          solution: "They're — contraction of 'they are'.",
        },
      },
      questions: [
        {
          id: "edpe4-u1-ho-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose: 'The cat licked ___ paws.' (belonging)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "its" },
              { id: "b", text: "it's" },
              { id: "c", text: "its'" },
              { id: "d", text: "it is" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "its/it's",
                statement: "its = belonging.",
              },
            ],
            steps: [
              {
                reasoning: "Paws belong to cat → its.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** its",
            commonErrors: ["Using it's (it is) incorrectly."],
          },
        },
        {
          id: "edpe4-u1-ho-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose: '___ the best player on the team.' (you are)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your" },
              { id: "b", text: "You're" },
              { id: "c", text: "Yore" },
              { id: "d", text: "U're" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "your/you're",
                statement: "you're = you are.",
              },
            ],
            steps: [
              {
                reasoning: "'you are' needed → you're.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: you're.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** You're",
            commonErrors: ["Using 'your' for 'you are'."],
          },
        },
        {
          id: "edpe4-u1-ho-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the correct homophone in each: '___ going to the park' and 'This is ___ book.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homophones",
                statement: "They're/Your or You're/Its depending context.",
              },
            ],
            steps: [
              { reasoning: "First needs 'they are'.", marks: 1, markCode: "M" },
              {
                reasoning: "Second needs belonging 'your'.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They're; your",
            commonErrors: ["Swapping homophones."],
          },
        },
        {
          id: "edpe4-u1-ho-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences: one using 'their' correctly, one using 'there'.",
          parts: [
            { label: "a", prompt: "'their' sentence", marks: 2 },
            { label: "b", prompt: "'there' sentence", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homophones",
                statement: "Correct usage of both.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'their' shows belonging.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Sentence makes sense.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "'there' shows place.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sentence makes sense.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. 'Their dog is big.' / 'The shop is over there.'",
            commonErrors: ["Using interchangeably."],
          },
        },
      ],
    },
    {
      id: "edpe4-u1-misspelt",
      title: "Commonly misspelt words",
      skill: "Spell commonly confused words correctly.",
      lesson: {
        sections: [
          {
            heading: "Often wrong",
            body: "Words people often misspell: **because** (not becos), **friend** (ie not i), **said** (ai not a/e), **was** (not wos), **there/their** (i before e except after c), **definitely** (not definately), **separate** (not seperate).",
          },
          {
            heading: "Tricks",
            body: "Use mnemonics: 'Big Elephants Can Always Understand Small Elephants' = because. 'I before E except after C' = receive, believe, ceiling. Practise writing tricky words.",
          },
        ],
        keyFormulas: [
          {
            name: "because",
            statement: "Big Elephants Can Always Understand Small Elephants",
          },
          { name: "i before e", statement: "receive, believe, ceiling" },
          { name: "definitely", statement: "def-i-nitely" },
        ],
        workedExample: {
          problem: "Spell the word meaning 'certainly' (commonly misspelt).",
          solution: "definitely — has 'i' not 'a'.",
        },
      },
      questions: [
        {
          id: "edpe4-u1-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "definately" },
              { id: "b", text: "definitely" },
              { id: "c", text: "definitly" },
              { id: "d", text: "definitly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "definitely",
                statement: "definitely correct.",
              },
            ],
            steps: [{ reasoning: "i not a.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** definitely",
            commonErrors: ["definately — common error."],
          },
        },
        {
          id: "edpe4-u1-ms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "seperate" },
              { id: "b", text: "separate" },
              { id: "c", text: "seprate" },
              { id: "d", text: "separete" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "separate",
                statement: "separate correct.",
              },
            ],
            steps: [
              { reasoning: "a not e in middle.", marks: 1, markCode: "M" },
              { reasoning: "Answer: separate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** separate",
            commonErrors: ["seperate — common error."],
          },
        },
        {
          id: "edpe4-u1-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Spell these correctly: because, friend, Wednesday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Misspelt words",
                statement: "because, friend, Wednesday.",
              },
            ],
            steps: [
              { reasoning: "because correct.", marks: 1, markCode: "A" },
              { reasoning: "friend correct (ie).", marks: 1, markCode: "A" },
              { reasoning: "Wednesday correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "because, friend, Wednesday",
            commonErrors: ["Phonetic misspellings."],
          },
        },
        {
          id: "edpe4-u1-ms-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use mnemonics to remember: 'because' and 'receive'. Explain each.",
          parts: [
            { label: "a", prompt: "Mnemonic for 'because'", marks: 2 },
            { label: "b", prompt: "Mnemonic for 'receive'", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mnemonics",
                statement: "BECAUSE acronym; i before e except after c.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Big Elephants Can Always Understand Small Elephants.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Explained clearly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "i before e except after c → ei.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Applied correctly.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "BECAUSE acronym; i before e except after c",
            commonErrors: ["Wrong or no mnemonic."],
          },
        },
      ],
    },
  ],
};

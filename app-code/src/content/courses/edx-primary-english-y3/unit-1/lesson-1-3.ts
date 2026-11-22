import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edpe3-u1-lesson-1-3",
  code: "1-3",
  title: "Spelling Rules and Patterns",
  goal: "I CAN spell words using patterns and rules.",
  standards: ["Year 3 Spelling"],
  vocabulary: [
    {
      term: "Spelling rule",
      definition: "A pattern that helps spell words correctly.",
    },
    {
      term: "Silent letter",
      definition: "A letter not heard when speaking: knight, write.",
    },
    { term: "Plural", definition: "More than one: cat → cats, baby → babies." },
    {
      term: "Possessive",
      definition: "Shows belonging: Sam's, the girls' book.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u1-rules",
      title: "Spelling patterns",
      skill: "Apply spelling rules for plurals, silent letters and patterns.",
      lesson: {
        sections: [
          {
            heading: "Plural rules",
            body: "Most words add **-s**: cat → cats. Words ending in s, sh, ch, x add **-es**: bus → buses, church → churches. Words ending in consonant+y change y→i add -es: baby → babies. Some don't change: sheep, fish.",
          },
          {
            heading: "Silent letters and patterns",
            body: "Some letters are silent: **kn** (knee, knife), **wr** (write, wrong), **mb** (lamb, climb), **gh** (night, light). Patterns like 'i before e except after c' help: receive, believe.",
          },
        ],
        keyFormulas: [
          {
            name: "Plural -s/-es",
            statement: "cat→cats; bus→buses; baby→babies",
          },
          { name: "Silent letters", statement: "kn, wr, mb, gh" },
          { name: "i before e", statement: "receive, believe, ceiling" },
        ],
        workedExample: {
          problem: "Write the plural of 'church' and 'baby'.",
          solution: "churches, babies.",
        },
      },
      questions: [
        {
          id: "edpe3-u1-sr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the plural of 'church'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "churchies" },
              { id: "b", text: "churchs" },
              { id: "c", text: "churches" },
              { id: "d", text: "churches'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "rule", name: "Plural -es", statement: "ch → churches." },
            ],
            steps: [
              { reasoning: "ch ending adds -es.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** churches",
            commonErrors: ["churchs — missing e."],
          },
        },
        {
          id: "edpe3-u1-sr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word has a silent letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sun" },
              { id: "b", text: "dog" },
              { id: "c", text: "cat" },
              { id: "d", text: "knight" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Silent letter",
                statement: "knight has silent k.",
              },
            ],
            steps: [
              { reasoning: "kn- = silent k.", marks: 1, markCode: "M" },
              { reasoning: "Answer: knight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** knight",
            commonErrors: ["Not recognising silent letters."],
          },
        },
        {
          id: "edpe3-u1-sr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the plural of 'baby' and 'box'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "Plural rules",
                statement: "babies, boxes.",
              },
            ],
            steps: [
              { reasoning: "baby → y to i + es.", marks: 1, markCode: "M" },
              { reasoning: "box → x adds es.", marks: 1, markCode: "A" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "babies, boxes",
            commonErrors: ["babys, boxs — wrong rules."],
          },
        },
        {
          id: "edpe3-u1-sr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Spell these words correctly: the plural of 'dish', the silent-k word for a cutting tool, and 'receive'.",
          parts: [
            { label: "a", prompt: "plural of dish", marks: 1 },
            { label: "b", prompt: "cutting tool with silent k", marks: 1 },
            { label: "c", prompt: "receive", marks: 1 },
            {
              label: "d",
              prompt: "Explain 'i before e except after c'.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "Spelling",
                statement: "dishes; knife; receive; ie/ei pattern.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "dishes correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "knife correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "receive correct (ei after c).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Pattern explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "dishes; knife; receive; ie before e except after c",
            commonErrors: ["Wrong spellings or rule explanation."],
          },
        },
      ],
    },
    {
      id: "edpe3-u1-possessives",
      title: "Possessive apostrophes",
      skill: "Use apostrophes to show belonging.",
      lesson: {
        sections: [
          {
            heading: "One owner",
            body: "For one person/thing, add 's: **Sam's** book, **the dog's** bone, **James'** — wait, James ends in s so it's **James'** or **James's** (both acceptable). Most singular nouns: add 's.",
          },
          {
            heading: "More than one owner",
            body: "For plural owners, add apostrophe after s: **the girls'** bags, **the dogs'** leads, **my parents'** car. If plural doesn't end in s (children, men), add 's: **children's** toys.",
          },
        ],
        keyFormulas: [
          { name: "Singular", statement: "Sam's, dog's, cat's" },
          { name: "Plural", statement: "girls', dogs', children's" },
        ],
        workedExample: {
          problem: "Write the possessive: the book belonging to the girl.",
          solution: "the girl's book.",
        },
      },
      questions: [
        {
          id: "edpe3-u1-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shows belonging correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the dogs bone" },
              { id: "b", text: "the dog bone" },
              { id: "c", text: "the dogs' bone" },
              { id: "d", text: "the dog's bone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "Possessive",
                statement: "One dog → dog's.",
              },
            ],
            steps: [
              { reasoning: "Singular owner = 's.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the dog's bone",
            commonErrors: ["Missing apostrophe."],
          },
        },
        {
          id: "edpe3-u1-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is correct for multiple girls owning bags?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the girl's bag" },
              { id: "b", text: "the girl's bags" },
              { id: "c", text: "the girls bags" },
              { id: "d", text: "the girls' bags" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "Plural possessive",
                statement: "girls' = plural owners.",
              },
            ],
            steps: [
              {
                reasoning: "Plural ending s + apostrophe.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: girls'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** the girls' bags",
            commonErrors: [" girl's for plural."],
          },
        },
        {
          id: "edpe3-u1-ps-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the possessive form: the toys belonging to the children.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "Irregular plural",
                statement: "children's toys.",
              },
            ],
            steps: [
              {
                reasoning: "children is irregular plural.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add 's not just apostrophe.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Correct: children's.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "children's toys",
            commonErrors: ["childrens' — wrong."],
          },
        },
        {
          id: "edpe3-u1-ps-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write possessives for: one cat's whiskers, two dogs' leads, the boys' football.",
          parts: [
            { label: "a", prompt: "one cat", marks: 1 },
            { label: "b", prompt: "two dogs", marks: 1 },
            { label: "c", prompt: "boys (plural)", marks: 1 },
            { label: "d", prompt: "Explain the difference.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "rule",
                name: "Possessives",
                statement: "cat's, dogs', boys'.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "cat's whiskers.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "dogs' leads.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "boys' football.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Singular='s; plural='.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "cat's; dogs'; boys'",
            commonErrors: ["Wrong apostrophe position."],
          },
        },
      ],
    },
  ],
};

import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edpe5-u1-lesson-1-2",
  code: "1-2",
  title: "Prefixes, Suffixes and Word Building",
  goal: "I CAN use prefixes and suffixes to build and decode words.",
  standards: ["Year 5 Spelling"],
  vocabulary: [
    {
      term: "Prefix",
      definition: "Letters added to the start of a word to change meaning.",
    },
    { term: "Suffix", definition: "Letters added to the end of a word." },
    { term: "Root word", definition: "The base word before adding affixes." },
    { term: "Etymology", definition: "Word origin and history." },
  ],
  concepts: [
    {
      id: "edpe5-u1-prefixes",
      title: "Prefixes and suffixes",
      skill: "Apply prefixes and suffixes to build vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Key prefixes",
            body: "**un-** (not: unhappy), **re-** (again: rewrite), **dis-** (opposite: disagree), **mis-** (wrongly: misunderstand), **pre-** (before: preview), **sub-** (under: submarine), **inter-** (between: international).",
          },
          {
            heading: "Key suffixes",
            body: "**-tion/-sion** (noun: decision), **-able/-ible** (can be: readable), **-ful/-less** (full/without: hopeful, careless), **-ly** (adverb: quickly), **-ment** (noun: development), **-er/-or** (doer: teacher, actor).",
          },
        ],
        keyFormulas: [
          { name: "un-/re-/dis-", statement: "not / again / opposite" },
          { name: "-tion/-ment", statement: "Noun endings" },
          { name: "-ful/-less", statement: "full / without" },
        ],
        workedExample: {
          problem: "What does 'unhappiness' mean? Break it down.",
          solution:
            "un- (not) + happy + -ness (state) = state of not being happy.",
        },
      },
      questions: [
        {
          id: "edpe5-u1-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the prefix 'un-' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "not" },
              { id: "b", text: "before" },
              { id: "c", text: "wrongly" },
              { id: "d", text: "again" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "un-", statement: "Means 'not'." },
            ],
            steps: [{ reasoning: "un- = not.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** not",
            commonErrors: ["Wrong prefix meaning."],
          },
        },
        {
          id: "edpe5-u1-pf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 're-' mean in 'rewrite'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "not" },
              { id: "b", text: "under" },
              { id: "c", text: "before" },
              { id: "d", text: "again" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "re-", statement: "Means 'again'." },
            ],
            steps: [
              { reasoning: "re- = again.", marks: 1, markCode: "M" },
              { reasoning: "Answer: again.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** again",
            commonErrors: ["Wrong prefix meaning."],
          },
        },
        {
          id: "edpe5-u1-pf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Break down 'disagreement' and explain its meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word breakdown",
                statement:
                  "dis- (opposite) + agree + -ment = opposite of agreement.",
              },
            ],
            steps: [
              { reasoning: "Prefix identified.", marks: 1, markCode: "M" },
              {
                reasoning: "Root and suffix identified.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Meaning explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "dis- + agree + -ment = not agreeing",
            commonErrors: ["Wrong breakdown."],
          },
        },
        {
          id: "edpe5-u1-pf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create three new words using prefixes: sub-, inter-, pre-.",
          parts: [
            { label: "a", prompt: "sub- word", marks: 1 },
            { label: "b", prompt: "inter- word", marks: 1 },
            { label: "c", prompt: "pre- word", marks: 1 },
            { label: "d", prompt: "Meanings explained", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prefix creation",
                statement: "submarine, international, preview.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "sub- word created.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "inter- word created.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "pre- word created.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Meanings correct.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. submarine, international, preview",
            commonErrors: ["Wrong prefix use."],
          },
        },
      ],
    },
    {
      id: "edpe5-u1-etymology",
      title: "Word origins and Greek/Latin roots",
      skill: "Use Greek and Latin roots to decode complex vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Greek roots",
            body: "**phono** = sound (telephone, phonics), **graph** = write (paragraph, autograph), **bio** = life (biology, biography), **geo** = earth (geography, geology), **photo** = light (photograph, photosynthesis).",
          },
          {
            heading: "Latin roots",
            body: "**spect** = look (inspect, spectator), **port** = carry (transport, portable), **dict** = say (predict, dictionary), **scrib** = write (describe, manuscript), **ject** = throw (reject, project).",
          },
        ],
        keyFormulas: [
          { name: "phono/graph/bio", statement: "sound / write / life" },
          { name: "spect/port/dict", statement: "look / carry / say" },
          { name: "Roots", statement: "Unlock word meaning" },
        ],
        workedExample: {
          problem: "Decode 'photography' using roots.",
          solution: "photo (light) + graph (write) = writing with light.",
        },
      },
      questions: [
        {
          id: "edpe5-u1-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'bio' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sound" },
              { id: "b", text: "life" },
              { id: "c", text: "write" },
              { id: "d", text: "earth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "bio", statement: "Means 'life'." },
            ],
            steps: [{ reasoning: "bio = life.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** life",
            commonErrors: ["Wrong root."],
          },
        },
        {
          id: "edpe5-u1-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'spect' mean in 'inspect'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "look" },
              { id: "b", text: "carry" },
              { id: "c", text: "throw" },
              { id: "d", text: "say" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "spect", statement: "Means 'look'." },
            ],
            steps: [
              { reasoning: "spect = look.", marks: 1, markCode: "M" },
              { reasoning: "Answer: look.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** look",
            commonErrors: ["Wrong root."],
          },
        },
        {
          id: "edpe5-u1-et-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Decode 'transport' and explain its meaning using roots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Root decoding",
                statement: "trans (across) + port (carry) = carry across.",
              },
            ],
            steps: [
              { reasoning: "Roots identified.", marks: 1, markCode: "M" },
              { reasoning: "Meaning derived.", marks: 1, markCode: "A" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "trans + port = carry across = transport",
            commonErrors: ["Wrong roots or meaning."],
          },
        },
        {
          id: "edpe5-u1-et-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Decode these words using Greek/Latin roots: photograph, dictionary, spectator.",
          parts: [
            { label: "a", prompt: "photograph", marks: 1 },
            { label: "b", prompt: "dictionary", marks: 1 },
            { label: "c", prompt: "spectator", marks: 1 },
            {
              label: "d",
              prompt: "What do all roots have in common?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Root decoding",
                statement: "photo+graph=light writing; dict=say; spect=look.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "light + write = photo.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "dict = say → word book.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "spect = look → watcher.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Greek/Latin roots.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "light writing; word book; watcher; Greek/Latin roots",
            commonErrors: ["Not decoding roots."],
          },
        },
      ],
    },
  ],
};

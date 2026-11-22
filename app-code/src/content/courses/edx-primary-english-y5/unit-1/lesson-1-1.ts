import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edpe5-u1-lesson-1-1",
  code: "1-1",
  title: "Advanced Spelling and Word Choice",
  goal: "I CAN spell accurately and choose precise vocabulary.",
  standards: ["Year 5 Spelling"],
  vocabulary: [
    {
      term: "Homophone",
      definition: "Words that sound the same but differ in spelling/meaning.",
    },
    { term: "Synonym", definition: "A word with a similar meaning." },
    { term: "Antonym", definition: "A word with the opposite meaning." },
    { term: "Register", definition: "Level of formality in language." },
  ],
  concepts: [
    {
      id: "edpe5-u1-homophones",
      title: "Homophones and commonly misspelt words",
      skill: "Distinguish homophones and spell tricky words correctly.",
      lesson: {
        sections: [
          {
            heading: "Tricky homophones",
            body: "Year 5: **its/it's**, **their/there/they're**, **your/you're**, **affect/effect**, **accept/except**, **practice/practise** (UK). Learn the meaning first, then the spelling.",
          },
          {
            heading: "Memory tricks",
            body: "'I' before 'e' except after 'c' (receive, believe). Double the consonant before -ed/-ing for short vowel words (stopped, running). Mnemonics: 'there's a rat in separate'.",
          },
        ],
        keyFormulas: [
          { name: "its/it's", statement: "Possessive vs 'it is'" },
          { name: "affect/effect", statement: "Verb vs noun (usually)" },
          { name: "i before e", statement: "Except after c" },
        ],
        workedExample: {
          problem: "Choose: '___ raining, so ___ going home.' (it's/its)",
          solution: "'It's raining, so it's going home' — both mean 'it is'.",
        },
      },
      questions: [
        {
          id: "edpe5-u1-hp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "its' raining" },
              { id: "b", text: "it is raining" },
              { id: "c", text: "it's raining" },
              { id: "d", text: "its raining" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "its/it's",
                statement: "it's = it is.",
              },
            ],
            steps: [{ reasoning: "Needs 'it is'.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** it's raining",
            commonErrors: ["Confusing its/it's."],
          },
        },
        {
          id: "edpe5-u1-hp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog wagged it is tail." },
              { id: "b", text: "The dog wagged its tail." },
              { id: "c", text: "The dog wagged it's tail." },
              { id: "d", text: "The dog wagged theyre tail." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "its/it's",
                statement: "Possessive = its.",
              },
            ],
            steps: [
              { reasoning: "Possessive needed.", marks: 1, markCode: "M" },
              { reasoning: "Answer: its tail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** its tail",
            commonErrors: ["Using it's for possessive."],
          },
        },
        {
          id: "edpe5-u1-hp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the correct word: 'The weather will ___ our plans.' (affect/effect)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "affect/effect",
                statement: "affect = verb (influence).",
              },
            ],
            steps: [
              {
                reasoning: "Verb position identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "affect chosen.", marks: 1, markCode: "A" },
              { reasoning: "Correct spelling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "affect",
            commonErrors: ["Choosing effect for verb."],
          },
        },
        {
          id: "edpe5-u1-hp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Correct all errors: 'their going too the park because its raining but your invited.'",
          parts: [
            { label: "a", prompt: "their/they're/there", marks: 1 },
            { label: "b", prompt: "too/to", marks: 1 },
            { label: "c", prompt: "its/it's", marks: 1 },
            { label: "d", prompt: "your/you're", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homophones",
                statement: "they're=they are; to; it's=it is; you're=you are.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "they're going.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "to the park.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "it's raining.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "you're invited.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "They're going to the park because it's raining but you're invited.",
            commonErrors: ["Multiple homophone errors."],
          },
        },
      ],
    },
    {
      id: "edpe5-u1-vocab",
      title: "Precise vocabulary and synonyms",
      skill: "Choose precise words and use synonyms/antonyms effectively.",
      lesson: {
        sections: [
          {
            heading: "Precise words",
            body: "Replace vague words: 'walked' → 'strolled/marched/rushed'; 'said' → 'whispered/shouted/muttered'; 'nice' → 'delicious/beautiful/kind'. Precise words make writing vivid.",
          },
          {
            heading: "Synonyms and antonyms",
            body: "Synonyms: similar meaning (happy/joyful). Antonyms: opposites (hot/cold). Use a thesaurus but check the word fits the context — 'big' synonyms differ: vast, enormous, bulky.",
          },
        ],
        keyFormulas: [
          { name: "Synonym", statement: "Similar meaning" },
          { name: "Antonym", statement: "Opposite meaning" },
          { name: "Precise", statement: "Exact word for exact meaning" },
        ],
        workedExample: {
          problem: "Improve: 'The man said he was happy.'",
          solution: "'The elderly man beamed, announcing his delight.'",
        },
      },
      questions: [
        {
          id: "edpe5-u1-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a synonym for 'happy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "joyful" },
              { id: "b", text: "sad" },
              { id: "c", text: "angry" },
              { id: "d", text: "tired" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synonym",
                statement: "Similar meaning.",
              },
            ],
            steps: [{ reasoning: "joyful = happy.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** joyful",
            commonErrors: ["Choosing antonym."],
          },
        },
        {
          id: "edpe5-u1-sy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the antonym of 'ancient'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "modern" },
              { id: "b", text: "old" },
              { id: "c", text: "historic" },
              { id: "d", text: "antique" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Antonym", statement: "Opposite." },
            ],
            steps: [
              {
                reasoning: "modern = opposite of ancient.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: modern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** modern",
            commonErrors: ["Choosing synonym."],
          },
        },
        {
          id: "edpe5-u1-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give a more precise word for 'said' that shows whispering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Precise vocabulary",
                statement: "whispered/murmured.",
              },
            ],
            steps: [
              {
                reasoning: "Quiet speech word chosen.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Fits context.", marks: 1, markCode: "A" },
              { reasoning: "Spelled correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "whispered / murmured / breathed",
            commonErrors: ["Wrong register or spelling."],
          },
        },
        {
          id: "edpe5-u1-sy-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve: 'The food was good and the place was nice.' with precise vocabulary.",
          parts: [
            { label: "a", prompt: "Improve 'good' for food", marks: 1 },
            { label: "b", prompt: "Improve 'nice' for place", marks: 1 },
            { label: "c", prompt: "Add sensory detail", marks: 1 },
            { label: "d", prompt: "Write improved sentence", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Precise vocabulary",
                statement: "delicious; charming; sensory detail.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "delicious/scrumptious.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "charming/beautiful.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Detail added.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Full sentence.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'The food was delicious, and the charming café smelled of fresh coffee.'",
            commonErrors: ["Vague or inappropriate synonyms."],
          },
        },
      ],
    },
  ],
};

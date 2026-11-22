import type { Lesson } from "../../../types.ts";

export const lesson215: Lesson = {
  id: "cipe-u2-lesson-2-15",
  code: "2-15",
  title: "Stage 5 — Reported Speech, Modal Verbs and Figurative Language",
  goal: "I CAN convert direct to reported speech, use modal verbs and identify figurative language.",
  standards: ["Cambridge Primary English 0058 Stage 5: grammar and reading",
  "Cambridge Primary English 0058 framework substrands: 5Rg, 5Rv"],
  stage: 5,
  vocabulary: [
    { term: "Reported speech", definition: "Indirect speech: 'He said he was tired.'" },
    { term: "Modal verb", definition: "Verb showing possibility/permission: might, must, could, should." },
    { term: "Figurative language", definition: "Non-literal language: metaphor, personification, idiom." },
    { term: "Metaphor", definition: "Direct comparison: 'Time is a thief.'" },
    { term: "Personification", definition: "Giving human traits to objects: 'The wind whispered.'" },
  ],
  concepts: [
    {
      id: "cipe-u2-s15-reported-figurative",
      title: "Reported speech, modal verbs and figurative language",
      skill: "Convert speech to reported form, use modal verbs and recognise figurative techniques at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Reported speech and modals",
            body: "Reported speech changes pronouns and tense: 'I am tired,' said Tom → Tom said he was tired. Modal verbs express possibility or obligation: might (maybe), must (certainly), could (possible), should (advice), would (conditional). Choose the modal that matches the meaning.",
          },
          {
            heading: "Figurative language",
            body: "Metaphors compare directly without 'like': 'Her eyes were stars.' Personification gives human qualities to non-human things: 'The computer frowned.' Idioms are fixed phrases meaning something else: 'break a leg' = good luck. Recognising these adds depth to reading and writing.",
          },
        ],
        keyFormulas: [
          { name: "Reported speech", statement: "Direct → reported: tense shifts back, pronouns change" },
          { name: "Modals", statement: "might/must/could/should/would = possibility/obligation/advice" },
          { name: "Figurative", statement: "metaphor = direct compare; personification = human traits" },
        ],
        workedExample: {
          problem: "Report: 'I will come tomorrow,' said Ana.",
          solution: "Ana said she would come the next day.",
        },
      },
      questions: [
        {
          id: "cipe-u2-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Report this: 'I am happy,' said Ben.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ben said he is happy." },
            { id: "b", text: "Ben says he is happy." },
            { id: "c", text: "Ben said I am happy." },
            { id: "d", text: "Ben said he was happy." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Reported speech", statement: "Tense shifts back." }],
            steps: [{ reasoning: "'am' → 'was'; 'I' → 'he'.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Ben said he was happy.",
          },
        },
        {
          id: "cipe-u2-rf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which modal verb shows obligation?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Modal verbs", statement: "must = obligation." }],
            steps: [
              { reasoning: "'must' expresses requirement.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: must.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "must",
          },
        },
        {
          id: "cipe-u2-rf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the figurative language: 'The moon smiled down at us.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Personification", statement: "Human trait given to object." }],
            steps: [
              { reasoning: "Moon can't literally smile — human trait.", marks: 1, markCode: "AO2" },
              { reasoning: "It is personification.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Personification",
          },
        },
        {
          id: "cipe-u2-rf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Report: 'We are going to the park,' said the children. (b) Choose the right modal: 'You ___ wear a seatbelt — it's the law.' (must/might). (c) Explain the difference between a metaphor and personification with one example each. Show thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reported speech, modals, figurative language", statement: "Convert + choose + explain." }],
            steps: [
              { reasoning: "(a) The children said they were going to the park.", marks: 1, markCode: "AO2" },
              { reasoning: "(a) Tense and pronouns correctly shifted.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) 'must' — legal obligation.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Metaphor: 'Time is money' — direct comparison.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Personification: 'The car purred' — human trait.", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clearly explained.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "AO1" },
              { reasoning: "All answers correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) The children said they were going to the park (b) must (c) metaphor=direct compare, personification=human trait",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All conversions correct with clear explanations." },
              { level: "Level 2", marks: "4-6", descriptor: "Mostly correct; explanation partial." },
              { level: "Level 1", marks: "1-3", descriptor: "Some correct; limited explanation." },
            ],
          },
        },
        {
          id: "cipe-u2-rf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Report this: 'I like pizza,' said Mia.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mia said she liked pizza." },
            { id: "b", text: "Mia says she likes pizza." },
            { id: "c", text: "Mia said I like pizza." },
            { id: "d", text: "Mia said she like pizza." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Reported speech", statement: "Tense shifts back, pronouns change." }],
            steps: [{ reasoning: "'I like' → 'she liked'.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Mia said she liked pizza.",
          },
        },
        {
          id: "cipe-u2-rf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which modal verb shows possibility (maybe)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "should" },
            { id: "b", text: "might" },
            { id: "c", text: "must" },
            { id: "d", text: "will" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Modal verbs", statement: "might = possibility." }],
            steps: [{ reasoning: "'might' shows something may happen.", marks: 1, markCode: "AO1" }],
            finalAnswer: "might",
          },
        },
        {
          id: "cipe-u2-rf-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which figurative technique is 'The wind whispered through the trees'? Write the name.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Personification", statement: "Human traits given to non-human things." }],
            steps: [
              { reasoning: "Wind can't literally whisper — a human action.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: personification.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Personification",
          },
        },
        {
          id: "cipe-u2-rf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a metaphor?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The wind whispered" },
            { id: "b", text: "Life is a journey" },
            { id: "c", text: "She is as brave as a lion" },
            { id: "d", text: "Break a leg" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metaphor", statement: "Direct comparison without 'like'." }],
            steps: [{ reasoning: "'Life is a journey' compares directly.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Life is a journey",
          },
        },
        {
          id: "cipe-u2-rf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which modal verb shows advice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "must" },
            { id: "b", text: "should" },
            { id: "c", text: "could" },
            { id: "d", text: "might" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Modal verbs", statement: "should = advice." }],
            steps: [{ reasoning: "'should' gives advice or recommendation.", marks: 1, markCode: "AO1" }],
            finalAnswer: "should",
          },
        },
        {
          id: "cipe-u2-rf-q10",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Report this speech: 'I am going to the shops,' said Tom.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Reported speech", statement: "Tense shifts back; pronouns change." }],
            steps: [
              { reasoning: "'I am going' → 'he was going'.", marks: 1, markCode: "AO2" },
              { reasoning: "'to the shops' unchanged.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: Tom said he was going to the shops.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Tom said he was going to the shops.",
          },
        },
        {
          id: "cipe-u2-rf-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the right modal: 'You ___ finish your homework before playing.' (must/should/might)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Modal verbs", statement: "must/should = obligation/advice." }],
            steps: [
              { reasoning: "The context suggests a requirement or strong advice.", marks: 1, markCode: "AO2" },
              { reasoning: "'must' or 'should' both defensible; 'must' = rule.", marks: 1, markCode: "AO2" },
              { reasoning: "Sentence completed correctly.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'You must finish your homework before playing.'",
          },
        },
        {
          id: "cipe-u2-rf-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many figurative techniques are named in this list: metaphor, personification, idiom? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Figurative language", statement: "Non-literal language techniques." }],
            steps: [
              { reasoning: "Three techniques listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-rf-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does the idiom 'break a leg' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Good luck" },
            { id: "b", text: "To hurt your leg" },
            { id: "c", text: "To fall over" },
            { id: "d", text: "To run fast" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Idiom", statement: "Fixed phrase with non-literal meaning." }],
            steps: [{ reasoning: "'Break a leg' is said to wish someone good luck.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Good luck",
          },
        },
        {
          id: "cipe-u2-rf-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences using figurative language: one metaphor and one personification.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Figurative writing", statement: "Metaphor = direct compare; personification = human traits." }],
            steps: [
              { reasoning: "A metaphor is written (e.g. 'The classroom was a zoo.').", marks: 1, markCode: "AO2" },
              { reasoning: "A personification is written (e.g. 'The sun smiled.').", marks: 1, markCode: "AO2" },
              { reasoning: "Both are clearly figurative, not literal.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The classroom was a zoo.' (metaphor); 'The sun smiled down on us.' (personification)",
          },
        },
        {
          id: "cipe-u2-rf-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Report this dialogue: 'I will finish it tomorrow,' said Jo. 'I might help you,' said Max.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Reported speech", statement: "Tense back, pronouns change, modals adjust." }],
            steps: [
              { reasoning: "Jo said she would finish it the next day.", marks: 1, markCode: "AO2" },
              { reasoning: "Max said he might help her.", marks: 1, markCode: "AO2" },
              { reasoning: "Pronouns and time expressions changed correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "Both conversions accurate.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Jo said she would finish it the next day. Max said he might help her.",
          },
        },
        {
          id: "cipe-u2-rf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a paragraph (3-4 sentences) describing a storm using at least two different figurative techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Figurative description", statement: "Metaphor, personification, etc." }],
            steps: [
              { reasoning: "At least two figurative techniques used.", marks: 1, markCode: "AO2" },
              { reasoning: "The storm is described vividly.", marks: 1, markCode: "AO2" },
              { reasoning: "Sentences are complete and punctuated.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'The storm was a raging giant. Thunder roared like an angry lion. Rain hammered on the roof.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-rf-notes",
      title: "Reported speech and figurative language — notes",
      summary: "Report: tense back, pronouns change; modals = possibility/obligation; metaphor vs personification.",
      sections: [
        { heading: "Grammar", body: "'I am' → 'he was'; modals show how certain/required." },
        { heading: "Figurative", body: "Metaphor compares directly; personification gives human traits." },
      ],
    },
  ],
};

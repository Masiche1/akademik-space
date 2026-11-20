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
            { id: "a", text: "Ben said I am happy." }, { id: "b", text: "Ben said he was happy." }, { id: "c", text: "Ben says he is happy." }, { id: "d", text: "Ben said he is happy." },
          ], correctChoiceId: "b" },
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

import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "cipe-u1-lesson-1-10",
  code: "1-10",
  title: "Stage 2 — Word Families and Grammar Basics",
  goal: "I CAN use word families and spot nouns and verbs.",
  standards: ["Cambridge Primary English 0058 Stage 2: spelling and grammar",
  "Cambridge Primary English 0058 framework substrands: 2Ww, 2Wg"],
  stage: 2,
  vocabulary: [
    { term: "Word family", definition: "Words sharing a pattern, like cat, hat, mat, bat." },
    { term: "Noun", definition: "A naming word: person, place or thing." },
    { term: "Verb", definition: "A doing or being word: run, eat, is." },
    { term: "Plural", definition: "More than one — usually add s: cat → cats." },
    { term: "Sentence", definition: "Words that make complete sense together." },
  ],
  concepts: [
    {
      id: "cipe-u1-s10-wordfamily",
      title: "Word families and parts of speech",
      skill: "Use rhyming word families and identify nouns and verbs at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Word families",
            body: "Word families share spelling patterns — change the first letter to make new words: -at gives cat, hat, mat, sat, bat. Families like -an (can, man, fan), -it (sit, hit, bit), -op (hop, pop, top) make spelling easier: learn one pattern, spell many words.",
          },
          {
            heading: "Nouns and verbs",
            body: "Nouns name people, places, things or ideas — dog, school, happiness. Verbs show action or state — run, jump, think, is. Plurals add -s (cat → cats) or change spelling (baby → babies). Spot them by asking: does it name something, or does it do something?",
          },
        ],
        keyFormulas: [
          { name: "Word family", statement: "-at: cat, hat, mat, sat" },
          { name: "Noun/verb", statement: "noun = names; verb = action/being" },
        ],
        workedExample: {
          problem: "In 'The dog runs fast', which words are nouns and which is the verb?",
          solution: "Nouns: dog. Verb: runs (action).",
        },
      },
      questions: [
        {
          id: "cipe-u1-wf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word belongs to the -at family?",
          response: { type: "mcq", choices: [
            { id: "a", text: "dog" }, { id: "b", text: "hat" }, { id: "c", text: "sun" }, { id: "d", text: "tree" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Word family", statement: "Shared spelling pattern." }],
            steps: [{ reasoning: "'hat' rhymes with and spells like cat/mat/sat.", marks: 1, markCode: "AO1" }],
            finalAnswer: "hat",
          },
        },
        {
          id: "cipe-u1-wf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word is a verb in 'The bird sings loudly'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action word." }],
            steps: [
              { reasoning: "'sings' shows action.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: sings.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "sings",
          },
        },
        {
          id: "cipe-u1-wf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the plural of 'baby' and 'box'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Plurals", statement: "Usually add s; y→ies after consonant; x→es." }],
            steps: [
              { reasoning: "baby → babies (y→ies).", marks: 1, markCode: "AO2" },
              { reasoning: "box → boxes (add es).", marks: 1, markCode: "AO2" },
              { reasoning: "Both correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "babies, boxes",
          },
        },
        {
          id: "cipe-u1-wf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) List four words from the -op family. (b) In the sentence 'The children play in the park', underline the nouns and circle the verb — explain how you identified each. Show your thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word families and word classes", statement: "Pattern spelling + noun/verb identification." }],
            steps: [
              { reasoning: "(a) Any four of: hop, pop, top, mop, cop, shop (shop is -op ending).", marks: 1, markCode: "AO2" },
              { reasoning: "(a) All share -op spelling pattern.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Nouns: children, park (name people/place).", marks: 1, markCode: "AO2" },
              { reasoning: "(b) Verb: play (action word).", marks: 1, markCode: "AO2" },
              { reasoning: "'in' and 'the' are neither noun nor verb here.", marks: 1, markCode: "AO2" },
              { reasoning: "Test: nouns answer 'who/what?', verbs answer 'what doing?'.", marks: 1, markCode: "AO3" },
              { reasoning: "Reasoning clearly explained.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts answered correctly.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) hop, pop, top, mop; (b) nouns: children, park; verb: play",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All parts correct with clear reasoning and identification tests explained." },
              { level: "Level 2", marks: "4-6", descriptor: "Most parts correct; reasoning partly explained." },
              { level: "Level 1", marks: "1-3", descriptor: "Some correct answers; limited reasoning." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-wf-notes",
      title: "Word families and grammar — notes",
      summary: "-at/-an/-it families; noun = names, verb = action; plurals add s/es/ies.",
      sections: [
        { heading: "Word families", body: "Learn patterns (-at, -op, -an) to spell many words at once." },
        { heading: "Nouns/verbs", body: "Nouns name; verbs do. Plurals: cat→cats, baby→babies, box→boxes." },
      ],
    },
  ],
};

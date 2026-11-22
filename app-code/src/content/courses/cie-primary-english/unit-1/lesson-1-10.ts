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
            { id: "a", text: "sun" },
            { id: "b", text: "tree" },
            { id: "c", text: "dog" },
            { id: "d", text: "hat" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipe-u1-wf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word belongs to the -it family?",
          response: { type: "mcq", choices: [
            { id: "a", text: "sit" },
            { id: "b", text: "dog" },
            { id: "c", text: "run" },
            { id: "d", text: "cat" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Word family", statement: "Shared spelling pattern." }],
            steps: [{ reasoning: "'sit' rhymes with and spells like hit/bit/wit.", marks: 1, markCode: "AO1" }],
            finalAnswer: "sit",
          },
        },
        {
          id: "cipe-u1-wf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a noun in 'The girl eats an apple'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "eats" },
            { id: "b", text: "an" },
            { id: "c", text: "girl" },
            { id: "d", text: "the" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Noun", statement: "Names a person, place or thing." }],
            steps: [{ reasoning: "'girl' names a person.", marks: 1, markCode: "AO1" }],
            finalAnswer: "girl",
          },
        },
        {
          id: "cipe-u1-wf-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the plural of 'cat' and 'dish'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Plurals", statement: "Add s; add es after s, sh, ch, x." }],
            steps: [
              { reasoning: "cat → cats.", marks: 1, markCode: "AO2" },
              { reasoning: "dish → dishes (es after sh).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "cats, dishes",
          },
        },
        {
          id: "cipe-u1-wf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two words that rhyme with 'man'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word families", statement: "Same ending sound and spelling pattern." }],
            steps: [
              { reasoning: "e.g. can, fan, ran, van.", marks: 1, markCode: "AO2" },
              { reasoning: "Both are real words in the -an family.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. can and fan",
          },
        },
        {
          id: "cipe-u1-wf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is a verb in 'The fish swims fast'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "swims" },
            { id: "b", text: "fast" },
            { id: "c", text: "fish" },
            { id: "d", text: "the" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or being word." }],
            steps: [{ reasoning: "'swims' shows action.", marks: 1, markCode: "AO1" }],
            finalAnswer: "swims",
          },
        },
        {
          id: "cipe-u1-wf-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many syllables does 'butterfly' have? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Syllables", statement: "Count the beats." }],
            steps: [
              { reasoning: "but-ter-fly — three beats.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-wf-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the plural of 'baby', 'box' and 'church'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Plurals", statement: "s, es or ies depending on ending." }],
            steps: [
              { reasoning: "baby → babies.", marks: 1, markCode: "AO2" },
              { reasoning: "box → boxes; church → churches (es after x/ch).", marks: 1, markCode: "AO2" },
              { reasoning: "All three correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "babies, boxes, churches",
          },
        },
        {
          id: "cipe-u1-wf-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the sentence 'Mum cooks dinner in the kitchen', list the nouns and the verb, then explain how you knew.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word classes", statement: "Nouns name; verbs do." }],
            steps: [
              { reasoning: "Nouns: Mum, dinner, kitchen (names).", marks: 1, markCode: "AO2" },
              { reasoning: "Verb: cooks (action).", marks: 1, markCode: "AO2" },
              { reasoning: "Explanation: nouns answer who/what; verb answers what doing.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Nouns: Mum, dinner, kitchen; verb: cooks",
          },
        },
        {
          id: "cipe-u1-wf-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word belongs to the -op family?",
          response: { type: "mcq", choices: [
            { id: "a", text: "tin" },
            { id: "b", text: "top" },
            { id: "c", text: "ten" },
            { id: "d", text: "map" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Word family", statement: "Shared spelling pattern." }],
            steps: [{ reasoning: "'top' rhymes with and spells like hop/pop/mop.", marks: 1, markCode: "AO1" }],
            finalAnswer: "top",
          },
        },
        {
          id: "cipe-u1-wf-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "(a) Write a sentence using one word from the -an family. (b) Underline the noun and circle the verb. (c) Explain why you chose each word class.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word families and word classes", statement: "Use pattern words and identify classes." }],
            steps: [
              { reasoning: "Sentence uses an -an word like can, man, fan, ran.", marks: 1, markCode: "AO2" },
              { reasoning: "Noun and verb correctly identified.", marks: 1, markCode: "AO2" },
              { reasoning: "Sentence is complete with capital and full stop.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct explanation of word classes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The man can run.' noun: man; verb: can/run",
          },
        },
        {
          id: "cipe-u1-wf-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Change 'I have one cat' to talk about more than one cat.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Plural", statement: "Add s to make more than one." }],
            steps: [
              { reasoning: "cat → cats.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'I have two cats' or similar.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I have two cats.",
          },
        },
        {
          id: "cipe-u1-wf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short paragraph (three sentences) about your toys. Use at least one plural noun and identify the verbs by underlining them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Writing with grammar", statement: "Full sentences, plurals and verbs." }],
            steps: [
              { reasoning: "Three complete sentences about toys.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one correct plural used.", marks: 1, markCode: "AO2" },
              { reasoning: "Verbs correctly underlined.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letters and full stops correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three correct sentences with plural and verbs",
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

import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "cipe-u2-lesson-2-4",
  code: "2-4",
  title: "Stage 6 — Grammar, Punctuation and Spelling",
  goal: "I CAN use correct grammar, punctuation and spelling in my writing.",
  standards: ["Cambridge Primary English 0058 Stage 6: grammar, punctuation and spelling",
  "Cambridge Primary English 0058 framework substrands: 6Rg, 6Wg, 6Ww"],
  stage: 6,
  vocabulary: [
    { term: "Noun", definition: "Naming word: person, place or thing." },
    { term: "Verb", definition: "Doing or being word." },
    { term: "Adjective", definition: "Describing word." },
    { term: "Comma", definition: "Pause mark separating items or clauses." },
    { term: "Apostrophe", definition: "Mark showing possession or missing letters." },
  ],
  concepts: [
    {
      id: "cipe-u2-s4-grammar",
      title: "Grammar, punctuation and spelling at Stage 6",
      skill: "Apply word classes, punctuation and spelling rules in extended writing.",
      lesson: {
        sections: [
          {
            heading: "Word classes and agreement",
            body: "Nouns name, verbs act, adjectives describe, adverbs modify verbs. Verbs must agree with their subject: 'The dogs bark' but 'The dog barks'. Use the correct tense consistently and choose precise verbs and adjectives.",
          },
          {
            heading: "Punctuation and spelling",
            body: "Commas separate list items and clauses; apostrophes show possession ('the girl's book') or contraction ('don't'). Spell-check by sounding out, checking common patterns (i before e except after c), and learning tricky words by heart.",
          },
        ],
        keyFormulas: [
          { name: "Agreement", statement: "Verb matches subject number and tense" },
          { name: "Apostrophe", statement: "Possession or missing letters" },
        ],
        workedExample: {
          problem: "Correct the sentence: 'The dog run fast and its tail wag.'",
          solution: "'The dog runs fast and its tail wags.' — verb agreement fixed.",
        },
      },
      questions: [
        {
          id: "cipe-u2-gp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a verb?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Run" },
            { id: "b", text: "Beautiful" },
            { id: "c", text: "Table" },
            { id: "d", text: "Quickly" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Doing or being word." }],
            steps: [{ reasoning: "'Run' is an action; the others are adverb, adjective, noun.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Run",
          },
        },
        {
          id: "cipe-u2-gp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct word: 'The cat ___ on the mat.' (sat/sit)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tense agreement", statement: "Past context needs past tense." }],
            steps: [
              { reasoning: "'sat' is past tense matching 'on the mat' context.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: sat.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "sat",
          },
        },
        {
          id: "cipe-u2-gp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add the missing apostrophe: 'the girls book' (one girl owns it).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "Shows possession." }],
            steps: [
              { reasoning: "Singular possession: girl's.", marks: 1, markCode: "AO1" },
              { reasoning: "'the girl's book'.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct placement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "the girl's book",
          },
        },
        {
          id: "cipe-u2-gp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite with correct punctuation: 'we went to the park and we played football it was fun'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Punctuation", statement: "Capitals, full stops, commas for lists/clauses." }],
            steps: [
              { reasoning: "Capital W; split into sentences or use commas/and.", marks: 1, markCode: "AO1" },
              { reasoning: "e.g. 'We went to the park and we played football. It was fun.'", marks: 1, markCode: "AO1" },
              { reasoning: "All sentences end with full stops.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct punctuation throughout.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "We went to the park and we played football. It was fun.",
          },
        },
        {
          id: "cipe-u2-gp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is an adjective?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Loudly" },
            { id: "b", text: "Bright" },
            { id: "c", text: "Under" },
            { id: "d", text: "Sing" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "Describing word." }],
            steps: [{ reasoning: "'Bright' describes a noun.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Bright",
          },
        },
        {
          id: "cipe-u2-gp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct verb: 'The birds ___ in the sky.' (fly/flies)",
          response: { type: "mcq", choices: [
            { id: "a", text: "flew" },
            { id: "b", text: "fly" },
            { id: "c", text: "flies" },
            { id: "d", text: "flying" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Subject-verb agreement", statement: "Plural subject takes plural verb." }],
            steps: [{ reasoning: "'Birds' is plural, so 'fly' is correct.", marks: 1, markCode: "AO1" }],
            finalAnswer: "fly",
          },
        },
        {
          id: "cipe-u2-gp-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many commas are needed in the list 'I bought apples oranges and bananas'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas in lists", statement: "Separate each item." }],
            steps: [
              { reasoning: "Two commas separate three items: apples, oranges and bananas.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-gp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses an apostrophe correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dog's bowl is empty." },
            { id: "b", text: "The dogs' bowl is empty." },
            { id: "c", text: "The dogs bowl's empty." },
            { id: "d", text: "The dogs bowl is empty." },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "Shows possession: dog's = belonging to the dog." }],
            steps: [{ reasoning: "One dog owns the bowl: 'the dog's bowl'.", marks: 1, markCode: "AO2" }],
            finalAnswer: "The dog's bowl is empty.",
          },
        },
        {
          id: "cipe-u2-gp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many words are in the sentence 'The quick brown fox jumps'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "The-quick-brown-fox-jumps = 5 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u2-gp-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct the verb agreement: 'The boys is playing football.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Subject-verb agreement", statement: "Plural subject needs 'are'." }],
            steps: [
              { reasoning: "'Boys' is plural, so 'is' should be 'are'.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: 'The boys are playing football.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The boys are playing football.",
          },
        },
        {
          id: "cipe-u2-gp-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add the missing apostrophe for contraction: 'do not' → 'don't'. Write the full sentence: 'I do not know.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe for contraction", statement: "Shows missing letters." }],
            steps: [
              { reasoning: "'do not' becomes 'don't' — the apostrophe replaces the missing 'o'.", marks: 1, markCode: "AO1" },
              { reasoning: "Sentence: 'I don't know.'", marks: 1, markCode: "AO2" },
              { reasoning: "Capital and full stop correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I don't know.",
          },
        },
        {
          id: "cipe-u2-gp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fix the spelling and punctuation: 'we was at the beech yesterday'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Correct tense, spelling, capitals, full stop." }],
            steps: [
              { reasoning: "'was' should be 'were' (we were).", marks: 1, markCode: "AO1" },
              { reasoning: "'beech' should be 'beach'.", marks: 1, markCode: "AO1" },
              { reasoning: "'We were at the beach yesterday.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "We were at the beach yesterday.",
          },
        },
        {
          id: "cipe-u2-gp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the rule 'i before e except after c' used for?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Remembering the order of i and e in spellings like 'receive' and 'believe'" },
            { id: "b", text: "Choosing which verb to use" },
            { id: "c", text: "Punctuating sentences" },
            { id: "d", text: "Counting syllables" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Spelling rule", statement: "i before e except after c." }],
            steps: [{ reasoning: "The rule guides spellings like believe/receive.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Ordering i and e in spellings",
          },
        },
        {
          id: "cipe-u2-gp-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many commas are needed in this sentence with a list of four items: 'The bag held pens pencils rulers and books'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas in lists", statement: "Separate each item." }],
            steps: [
              { reasoning: "Four items need three commas.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-gp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Proofread this sentence and correct all errors: 'the childrens toys was on the floor'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Proofreading", statement: "Capital, agreement, possessive/plural, spelling." }],
            steps: [
              { reasoning: "Capital T at start.", marks: 1, markCode: "AO1" },
              { reasoning: "'childrens' → 'children's' (possession) or 'children' (plural).", marks: 1, markCode: "AO1" },
              { reasoning: "'was' → 'were' (plural subject).", marks: 1, markCode: "AO1" },
              { reasoning: "Full stop at end: 'The children's toys were on the floor.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The children's toys were on the floor.",
          },
        },
        {
          id: "cipe-u2-gp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three sentences about your weekend using at least one verb, one adjective and one adverb correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word classes", statement: "Use verb, adjective, adverb correctly." }],
            steps: [
              { reasoning: "Three complete, punctuated sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one verb used correctly.", marks: 1, markCode: "AO1" },
              { reasoning: "At least one adjective used correctly.", marks: 1, markCode: "AO1" },
              { reasoning: "At least one adverb used correctly.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'I played football happily. The pitch was muddy. We ran quickly to score.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-gp-notes",
      title: "Grammar, punctuation and spelling — revision notes",
      summary: "Word classes; agreement; apostrophes; commas.",
      sections: [
        { heading: "Grammar", body: "Noun/verb/adjective/adverb roles; verbs agree with subject; keep tense consistent." },
        { heading: "Punctuation", body: "Commas for lists and clauses; apostrophe for possession/contraction; proofread spelling." },
      ],
    },
  ],
};

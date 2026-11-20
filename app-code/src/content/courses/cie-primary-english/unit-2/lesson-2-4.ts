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
            { id: "a", text: "Quickly" }, { id: "b", text: "Beautiful" }, { id: "c", text: "Run" }, { id: "d", text: "Table" },
          ], correctChoiceId: "c" },
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

import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cipe-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Sentence Types, Conjunctions and Adjectives",
  goal: "I CAN write different sentence types using conjunctions and adjectives.",
  standards: ["Cambridge Primary English 0058 Stage 3: grammar and writing",
  "Cambridge Primary English 0058 framework substrands: 3Rg, 3Wg, 3Wv"],
  stage: 3,
  vocabulary: [
    { term: "Statement", definition: "A sentence that tells something." },
    { term: "Question", definition: "A sentence that asks something, ending with ?." },
    { term: "Exclamation", definition: "A sentence showing strong feeling, ending with !" },
    { term: "Conjunction", definition: "Joining word: and, but, because, so." },
    { term: "Adjective", definition: "Describing word: 'the fluffy cat'." },
  ],
  concepts: [
    {
      id: "cipe-u1-s9-sentences",
      title: "Sentence types and description",
      skill: "Write statements, questions and exclamations with conjunctions and adjectives at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Statements tell: 'The dog barked.' Questions ask: 'Did the dog bark?' Exclamations show feeling: 'What a loud bark!' Each has its own end mark: full stop, question mark, exclamation mark. Commands tell someone to do something: 'Sit down.'",
          },
          {
            heading: "Conjunctions and adjectives",
            body: "Conjunctions join ideas: and (adds), but (contrasts), because (reason), so (result), or (choice). Adjectives describe nouns — 'the tall, green tree'. Use them to make writing more interesting, but don't stack too many.",
          },
        ],
        keyFormulas: [
          { name: "End marks", statement: ". statement, ? question, ! exclamation" },
          { name: "Conjunctions", statement: "and, but, because, so, or" },
        ],
        workedExample: {
          problem: "Join these with a conjunction: 'I wanted ice cream. It was too cold.'",
          solution: "'I wanted ice cream, but it was too cold.' — 'but' shows the contrast.",
        },
      },
      questions: [
        {
          id: "cipe-u1-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which end mark does a question need?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Full stop" }, { id: "b", text: "Question mark" }, { id: "c", text: "Exclamation mark" }, { id: "d", text: "Comma" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Punctuation", statement: "Questions end with ?." }],
            steps: [{ reasoning: "Questions take ?." , marks: 1, markCode: "AO1" }],
            finalAnswer: "Question mark",
          },
        },
        {
          id: "cipe-u1-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word is a conjunction?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conjunction", statement: "Joins words or sentences." }],
            steps: [
              { reasoning: "and/but/because/so/or join ideas.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: e.g. 'but'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "and / but / because / so / or",
          },
        },
        {
          id: "cipe-u1-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join with the best conjunction: 'We stayed inside ___ it was raining.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Choosing conjunctions", statement: "Match joining word to the relationship." }],
            steps: [
              { reasoning: "Rain is the reason for staying inside.", marks: 1, markCode: "AO2" },
              { reasoning: "'because' shows reason.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: because.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "because",
          },
        },
        {
          id: "cipe-u1-sy-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Add an adjective to improve: 'I saw a dog.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Adjectives", statement: "Describing words make writing vivid." }],
            steps: [
              { reasoning: "Choose a describing word for the dog.", marks: 1, markCode: "AO2" },
              { reasoning: "Place it before the noun.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'I saw a fluffy dog.'", marks: 1, markCode: "AO2" },
              { reasoning: "Correct punctuation and grammar.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'I saw a fluffy dog.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-sy-notes",
      title: "Sentence types and description — revision notes",
      summary: "Statement/question/exclamation end marks; conjunctions join; adjectives describe.",
      sections: [
        { heading: "Sentence types", body: ". tells, ? asks, ! exclaims, command tells." },
        { heading: "Description", body: "Conjunctions: and/but/because/so/or; adjectives describe nouns." },
      ],
    },
  ],
};

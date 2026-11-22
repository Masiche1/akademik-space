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
            { id: "a", text: "Full stop" },
            { id: "b", text: "Question mark" },
            { id: "c", text: "Comma" },
            { id: "d", text: "Exclamation mark" },
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
        {
          id: "cipe-u1-sy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark ends an exclamation like 'What a goal!'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exclamation mark" },
            { id: "b", text: "Full stop" },
            { id: "c", text: "Comma" },
            { id: "d", text: "Question mark" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "End marks", statement: "Exclamations end with !." }],
            steps: [{ reasoning: "Strong feeling sentences end with !.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Exclamation mark",
          },
        },
        {
          id: "cipe-u1-sy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a conjunction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ran" },
            { id: "b", text: "the" },
            { id: "c", text: "but" },
            { id: "d", text: "happy" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conjunction", statement: "A joining word." }],
            steps: [{ reasoning: "'but' joins ideas.", marks: 1, markCode: "AO1" }],
            finalAnswer: "but",
          },
        },
        {
          id: "cipe-u1-sy-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The conjunctions are and, but, because, so and or. How many is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Conjunctions", statement: "Joining words." }],
            steps: [
              { reasoning: "and, but, because, so, or = 5.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipe-u1-sy-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many adjectives (describing words) are in 'the tall green tree'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Spotting adjectives", statement: "Describing words tell what something is like." }],
            steps: [
              { reasoning: "'tall' and 'green' describe the tree = 2.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u1-sy-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a question?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sit down now." },
            { id: "b", text: "What a win!" },
            { id: "c", text: "Did you win the game?" },
            { id: "d", text: "You won the game." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Question", statement: "A sentence that asks something, ending with ?." }],
            steps: [{ reasoning: "Only option b asks something and ends with ?.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Did you win the game?",
          },
        },
        {
          id: "cipe-u1-sy-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write an exclamation sentence about scoring a goal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Exclamation", statement: "Shows strong feeling; ends with !." }],
            steps: [
              { reasoning: "The sentence expresses strong feeling about a goal.", marks: 1, markCode: "AO2" },
              { reasoning: "Ends with ! and starts with a capital.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'What a great goal!'",
          },
        },
        {
          id: "cipe-u1-sy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the best conjunction: 'Would you like tea ___ juice?'",
          response: { type: "mcq", choices: [
            { id: "a", text: "but" },
            { id: "b", text: "because" },
            { id: "c", text: "or" },
            { id: "d", text: "so" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Choosing conjunctions", statement: "Match the joining word to the relationship." }],
            steps: [{ reasoning: "'or' shows a choice between tea and juice.", marks: 1, markCode: "AO2" }],
            finalAnswer: "or",
          },
        },
        {
          id: "cipe-u1-sy-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join these sentences using 'so': 'I was very tired. I went to bed early.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Joining with so", statement: "'so' shows a result." }],
            steps: [
              { reasoning: "Combine: 'I was very tired, so I went to bed early.'", marks: 1, markCode: "AO2" },
              { reasoning: "'so' correctly shows the result.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter and full stop correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I was very tired, so I went to bed early.",
          },
        },
        {
          id: "cipe-u1-sy-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many end marks are there for statements, questions and exclamations (full stop, question mark, exclamation mark)? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "End marks", statement: ". for statements, ? for questions, ! for exclamations." }],
            steps: [
              { reasoning: "Three end marks listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u1-sy-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between 'because' and 'so'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "because gives a reason; so shows a result" },
            { id: "b", text: "because asks a question" },
            { id: "c", text: "They are the same" },
            { id: "d", text: "so is a describing word" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conjunctions", statement: "Match joining word to the relationship." }],
            steps: [{ reasoning: "because = reason; so = result.", marks: 1, markCode: "AO2" }],
            finalAnswer: "because gives a reason; so shows a result",
          },
        },
        {
          id: "cipe-u1-sy-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three sentences about your day: one statement, one question and one exclamation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sentence types", statement: "Statement ., question ?, exclamation !." }],
            steps: [
              { reasoning: "A statement ending with a full stop.", marks: 1, markCode: "AO2" },
              { reasoning: "A question ending with ?.", marks: 1, markCode: "AO2" },
              { reasoning: "An exclamation ending with !.", marks: 1, markCode: "AO2" },
              { reasoning: "All start with capital letters and make sense.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I went to school. Did you have fun? What a great day!'",
          },
        },
        {
          id: "cipe-u1-sy-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Improve this sentence using an adjective and a conjunction: 'I like ice cream.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Description and joining", statement: "Adjectives describe; conjunctions join." }],
            steps: [
              { reasoning: "A describing word is added (e.g. 'delicious ice cream').", marks: 1, markCode: "AO2" },
              { reasoning: "A conjunction joins a second idea (e.g. 'and my sister does too').", marks: 1, markCode: "AO2" },
              { reasoning: "The full improved sentence is given.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'I like delicious ice cream and my sister does too.'",
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

import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "oles-u5-lesson-5-2",
  code: "5-2",
  title: "Common learner errors",
  goal: "I CAN recognise and correct typical ESL grammar mistakes.",
  standards: ["1120 Grammar: accuracy"],
  vocabulary: [
    { term: "Article", definition: "'a', 'an' or 'the' — words that introduce nouns." },
    { term: "Preposition", definition: "A word showing position or relation — in, on, at, for, to." },
    { term: "Countable noun", definition: "A noun you can count — book, apple, idea." },
    { term: "Uncountable noun", definition: "A noun you cannot count — water, advice, information." },
    { term: "Double negative", definition: "Two negatives in one sentence creating confusion — 'I don't know nothing'." },
  ],
  concepts: [
    {
      id: "oles-u5-articles",
      title: "Articles and nouns",
      skill: "Choose a/an/the correctly and handle countable vs uncountable nouns.",
      lesson: {
        sections: [
          { heading: "A, an, the", body: "'A/an' introduces something new or one of many: 'I saw a dog.' 'The' refers to something specific or already mentioned: 'The dog was brown.' Use 'an' before vowel sounds ('an hour'). No article for general plurals and uncountables: 'Dogs are loyal', 'Water is essential'." },
          { heading: "Countable vs uncountable", body: "Countable nouns take a/an and plurals: 'two books'. Uncountable nouns take no article in general and no plural: 'advice', 'information', 'furniture' — say 'some advice', 'a piece of advice', never 'advices' or 'informations'." },
        ],
        keyFormulas: [
          { name: "Articles", statement: "a/an = new/one; the = specific; none = general plural/uncountable." },
        ],
        workedExample: {
          problem: "Correct: 'She gave me an advice about my essay.'",
          solution: "'Advice' is uncountable → 'She gave me some advice about my essay' or 'a piece of advice'.",
        },
      },
      questions: [
        {
          id: "oles-u5-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which is correct? 'I need ___ advice.'",
          response: { type: "mcq", choices: [
            { id: "a", text: "some" }, { id: "b", text: "an" }, { id: "c", text: "a" }, { id: "d", text: "advices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Uncountable", statement: "Advice takes no article/plural." }], steps: [{ reasoning: "Advice is uncountable → 'some advice'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** some" },
        },
        {
          id: "oles-u5-ar-q2", difficulty: "core", totalMarks: 2,
          stem: "Choose: '___ hour' — a or an?",
          response: { type: "mcq", choices: [
            { id: "a", text: "an" }, { id: "b", text: "a" }, { id: "c", text: "the" }, { id: "d", text: "no article" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "An before vowels", statement: "Use 'an' before vowel sounds." }], steps: [
            { reasoning: "'Hour' starts with a vowel sound → 'an hour'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** an" },
        },
        {
          id: "oles-u5-ar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain when to use 'a/an' versus 'the'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Articles", statement: "a/an = new/one of many; the = specific." }], steps: [
            { reasoning: "'A/an' introduces something new or one of many.", marks: 1, markCode: "AO2" },
            { reasoning: "'The' refers to something specific or already mentioned.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: 'I saw a dog. The dog was brown.'", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "a/an = new or one of many; the = specific or known." },
        },
        {
          id: "oles-u5-ar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Articles and nouns review.",
          parts: [
            { label: "a", prompt: "When do you use 'a' vs 'an'?", marks: 2 },
            { label: "b", prompt: "What is an uncountable noun?", marks: 2 },
            { label: "c", prompt: "Give two uncountable nouns.", marks: 2 },
            { label: "d", prompt: "How do you quantify uncountables?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Articles/nouns", statement: "a/an by sound; uncountables take some/piece." }], steps: [
            { part: "a", reasoning: "'A' before consonant sounds, 'an' before vowel sounds.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct rule.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "A noun you cannot count — no plural form.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Any two: advice, information, water, furniture, homework.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Use 'some' or 'a piece of' — never a plural.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct quantifiers.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) sound rule (b) cannot count (c) two nouns (d) some/piece of",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
    {
      id: "oles-u5-prep",
      title: "Prepositions and common errors",
      skill: "Use correct prepositions and eliminate typical mistakes.",
      lesson: {
        sections: [
          { heading: "Fixed prepositions", body: "Many words take fixed prepositions: 'interested in', 'good at', 'afraid of', 'depend on', 'listen to', 'arrive at/in', 'married to', 'different from'. These must be memorised as chunks — they are the most common ESL error area." },
          { heading: "Other common errors", body: "Double negatives ('I don't know nothing' → 'I don't know anything'); 'much/many' with uncountables ('much water' not 'many waters'); 'since/for' time ('since 2010', 'for three years'); and 'say/tell' ('say something', 'tell someone')." },
        ],
        keyFormulas: [
          { name: "Fixed prepositions", statement: "interested in, good at, afraid of, depend on, listen to." },
        ],
        workedExample: {
          problem: "Correct: 'I am interesting in science.'",
          solution: "Adjective form needed: 'I am interested in science' — 'interesting' describes the thing, 'interested' describes the person.",
        },
      },
      questions: [
        {
          id: "oles-u5-pp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "'Interested ___ what?' — which preposition?",
          response: { type: "mcq", choices: [
            { id: "a", text: "in" }, { id: "b", text: "on" }, { id: "c", text: "at" }, { id: "d", text: "for" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Fixed preposition", statement: "interested in." }], steps: [{ reasoning: "'Interested' always takes 'in'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** in" },
        },
        {
          id: "oles-u5-pp-q2", difficulty: "core", totalMarks: 2,
          stem: "Correct the error: 'I don't know nothing about it.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Double negative", statement: "One negative only." }], steps: [
            { reasoning: "Double negative is incorrect → 'I don't know anything about it.'", marks: 1, markCode: "AO2" },
            { reasoning: "Corrected version given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "I don't know anything about it." },
        },
        {
          id: "oles-u5-pp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why 'I am interesting in maths' is wrong and how to fix it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "-ed/-ing adjectives", statement: "interested = feeling; interesting = causing." }], steps: [
            { reasoning: "'Interesting' describes things that cause interest.", marks: 1, markCode: "AO2" },
            { reasoning: "'Interested' describes the person who feels interest.", marks: 1, markCode: "AO2" },
            { reasoning: "Fix: 'I am interested in maths.'", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Use 'interested' for the person: 'I am interested in maths.'" },
        },
        {
          id: "oles-u5-pp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Prepositions and common errors review.",
          parts: [
            { label: "a", prompt: "What is a fixed preposition?", marks: 2 },
            { label: "b", prompt: "Give two examples.", marks: 2 },
            { label: "c", prompt: "Why are double negatives wrong?", marks: 2 },
            { label: "d", prompt: "How do you learn prepositions?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Prepositions", statement: "Fixed chunks; learn as units; one negative." }], steps: [
            { part: "a", reasoning: "A preposition that always follows a specific word.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two: interested in, good at, afraid of, depend on.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Two negatives create confusion and are ungrammatical in standard English.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Learn them in chunks with example sentences; practise in writing.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Effective method.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete advice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fixed partner (b) two examples (c) ungrammatical (d) learn as chunks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u5-5-2-notes", title: "Articles, prepositions, errors — notes", summary: "The highest-frequency ESL accuracy fixes.",
      sections: [
        { heading: "Articles", body: "a/an = new/one; the = specific; uncountables (advice, information) take 'some' or 'a piece of'." },
        { heading: "Prepositions", body: "interested in, good at, afraid of, depend on, listen to — learn as fixed chunks." },
      ] },
  ],
};

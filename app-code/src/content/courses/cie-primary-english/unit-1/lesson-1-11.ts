import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cipe-u1-lesson-1-11",
  code: "1-11",
  title: "Stage 3 — Commas, Apostrophes and Speech Marks",
  goal: "I CAN punctuate lists, contractions and speech correctly.",
  standards: ["Cambridge Primary English 0058 Stage 3: punctuation",
  "Cambridge Primary English 0058 framework substrands: 3Rg, 3Wg"],
  stage: 3,
  vocabulary: [
    { term: "Comma", definition: "Pause mark , used in lists and after openers." },
    { term: "Apostrophe", definition: "Mark ' showing missing letters or belonging." },
    { term: "Contraction", definition: "Two words joined with apostrophe: don't, can't." },
    { term: "Speech marks", definition: "' ' or \" \" showing spoken words." },
    { term: "Possession", definition: "Apostrophe showing ownership: Sam's bag." },
  ],
  concepts: [
    {
      id: "cipe-u1-s11-punctuation",
      title: "Commas, apostrophes and speech",
      skill: "Use commas in lists, apostrophes for contractions/possession and speech marks at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Commas and apostrophes",
            body: "Commas separate items in a list: 'I packed a hat, sunscreen and a towel.' Apostrophes do two jobs: contractions replace missing letters (do not → don't, can not → can't) and possession shows belonging (the dog's bone = bone of the dog).",
          },
          {
            heading: "Speech marks",
            body: "Speech marks show spoken words: 'Come here,' said Mum. The comma goes inside the speech marks before 'said'. New speaker = new line of speech. Punctuation for the quote stays inside the marks; punctuation for the sentence stays outside.",
          },
        ],
        keyFormulas: [
          { name: "Comma", statement: "Separates list items: a, b and c" },
          { name: "Apostrophe", statement: "don't (missing letter); dog's (belonging)" },
          { name: "Speech", statement: "'Words,' said Name." },
        ],
        workedExample: {
          problem: "Punctuate: 'i cant come said sam because im ill'",
          solution: "'I can't come,' said Sam, 'because I'm ill.'",
        },
      },
      questions: [
        {
          id: "cipe-u1-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does the comma go in a list?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only at the end" },
            { id: "b", text: "Between list items" },
            { id: "c", text: "Nowhere" },
            { id: "d", text: "After every word" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas in lists", statement: "Separate items." }],
            steps: [{ reasoning: "Commas go between items in a list.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Between list items",
          },
        },
        {
          id: "cipe-u1-pu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 'do not' as a contraction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Contractions", statement: "Apostrophe replaces missing letters." }],
            steps: [
              { reasoning: "do not → don't.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: don't.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "don't",
          },
        },
        {
          id: "cipe-u1-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add speech marks and punctuation: 'lets go to the park said ana'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech marks", statement: "Spoken words in marks; comma before 'said'." }],
            steps: [
              { reasoning: "Speech: 'Let's go to the park.'", marks: 1, markCode: "AO2" },
              { reasoning: "Tag: said Ana — comma inside marks.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'Let's go to the park,' said Ana.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Let's go to the park,' said Ana.",
          },
        },
        {
          id: "cipe-u1-pu-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Punctuate this fully: 'we need milk bread and eggs said dad and put commas and apostrophes where needed. Also write 'it is' and 'they are' as contractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Full punctuation", statement: "List commas, speech marks, contractions." }],
            steps: [
              { reasoning: "List needs commas: milk, bread and eggs.", marks: 1, markCode: "AO2" },
              { reasoning: "Speech marks around spoken words.", marks: 1, markCode: "AO2" },
              { reasoning: "Comma inside marks before 'said Dad'.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letters and full stops.", marks: 1, markCode: "AO2" },
              { reasoning: "it is → it's.", marks: 1, markCode: "AO2" },
              { reasoning: "they are → they're.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct contractions formed.", marks: 1, markCode: "AO2" },
              { reasoning: "Full answer: 'We need milk, bread and eggs,' said Dad. Contractions: it's, they're.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'We need milk, bread and eggs,' said Dad. it's; they're",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All punctuation, contractions and capitals correct with clear placement." },
              { level: "Level 2", marks: "4-6", descriptor: "Most marks correct; minor punctuation slips." },
              { level: "Level 1", marks: "1-3", descriptor: "Some correct contractions or punctuation; several errors." },
            ],
          },
        },
        {
          id: "cipe-u1-pu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses commas correctly in a list?",
          response: { type: "mcq", choices: [
            { id: "a", text: "I, like apples pears and bananas." },
            { id: "b", text: "I like apples pears, and bananas." },
            { id: "c", text: "I like, apples, and pears." },
            { id: "d", text: "I like apples, pears and bananas." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas in lists", statement: "Separate items." }],
            steps: [{ reasoning: "Commas separate list items: apples, pears and bananas.", marks: 1, markCode: "AO1" }],
            finalAnswer: "I like apples, pears and bananas.",
          },
        },
        {
          id: "cipe-u1-pu-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 'cannot' and 'will not' as contractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Contractions", statement: "Apostrophe replaces missing letters." }],
            steps: [
              { reasoning: "cannot → can't.", marks: 1, markCode: "AO2" },
              { reasoning: "will not → won't.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "can't, won't",
          },
        },
        {
          id: "cipe-u1-pu-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word shows possession in 'The dog's bone'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Possessive apostrophe", statement: "Shows belonging." }],
            steps: [
              { reasoning: "The apostrophe-s on 'dog' shows the bone belongs to the dog.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: dog's.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "dog's",
          },
        },
        {
          id: "cipe-u1-pu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does the comma go when a sentence has speech followed by 'said Mum'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No comma is needed" },
            { id: "b", text: "After 'said'" },
            { id: "c", text: "Outside the speech marks" },
            { id: "d", text: "Inside the speech marks, before the closing mark" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech punctuation", statement: "Comma goes inside the marks." }],
            steps: [{ reasoning: "The comma sits inside the speech marks: 'Words,' said Mum.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Inside the speech marks",
          },
        },
        {
          id: "cipe-u1-pu-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add the missing apostrophes: 'I cant find my brothers toy because its lost.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Contractions and possession", statement: "Apostrophes replace letters or show belonging." }],
            steps: [
              { reasoning: "cant → can't (contraction).", marks: 1, markCode: "AO2" },
              { reasoning: "brothers → brother's (possession).", marks: 1, markCode: "AO2" },
              { reasoning: "its → it's (it is).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "I can't find my brother's toy because it's lost.",
          },
        },
        {
          id: "cipe-u1-pu-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many commas are needed in this list: 'We bought pens pencils and rulers.'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas in lists", statement: "Separate items." }],
            steps: [
              { reasoning: "pens, pencils and rulers — commas between first two items.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2 commas.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u1-pu-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Punctuate this fully: 'dont touch the hot oven said gran and write 'we are' and 'I have' as contractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Full punctuation", statement: "Speech marks, contractions, capitals." }],
            steps: [
              { reasoning: "Speech marks around 'Don't touch the hot oven.'", marks: 1, markCode: "AO2" },
              { reasoning: "Comma inside marks before 'said Gran'.", marks: 1, markCode: "AO2" },
              { reasoning: "we are → we're; I have → I've.", marks: 1, markCode: "AO2" },
              { reasoning: "Capitals and full stops correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Don't touch the hot oven,' said Gran. we're; I've",
          },
        },
        {
          id: "cipe-u1-pu-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shows a contraction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "do not" },
            { id: "b", text: "don't" },
            { id: "c", text: "did not" },
            { id: "d", text: "does not" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Contraction", statement: "Two words joined with apostrophe." }],
            steps: [{ reasoning: "'don't' joins do + not with an apostrophe.", marks: 1, markCode: "AO1" }],
            finalAnswer: "don't",
          },
        },
        {
          id: "cipe-u1-pu-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write this sentence with correct speech punctuation: 'watch out for the dog cried tom'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech marks", statement: "Spoken words in marks; comma before 'cried Tom'." }],
            steps: [
              { reasoning: "Speech: 'Watch out for the dog.'", marks: 1, markCode: "AO2" },
              { reasoning: "Comma inside marks before tag 'cried Tom'.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'Watch out for the dog,' cried Tom.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Watch out for the dog,' cried Tom.",
          },
        },
        {
          id: "cipe-u1-pu-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between 'its' and 'it's', and use each in a sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "its vs it's", statement: "its = belonging; it's = it is." }],
            steps: [
              { reasoning: "'its' shows belonging, no apostrophe: the dog wagged its tail.", marks: 1, markCode: "AO2" },
              { reasoning: "'it's' means it is: it's raining.", marks: 1, markCode: "AO2" },
              { reasoning: "Both sentences complete and correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "its = belonging; it's = it is",
          },
        },
        {
          id: "cipe-u1-pu-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Add commas to this list: 'For lunch I had soup salad and bread.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Commas in lists", statement: "Separate items." }],
            steps: [
              { reasoning: "Commas between items: soup, salad and bread.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'For lunch I had soup, salad and bread.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "For lunch I had soup, salad and bread.",
          },
        },
        {
          id: "cipe-u1-pu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences of speech between two characters. Use speech marks, commas, contractions and correct punctuation throughout.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech writing", statement: "Marks, comma, contractions, capitals." }],
            steps: [
              { reasoning: "Two sentences of spoken words with speech marks.", marks: 1, markCode: "AO2" },
              { reasoning: "Comma inside marks before 'said' tags.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one contraction used correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letters and full stops correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two correctly punctuated speech sentences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u1-pu-notes",
      title: "Punctuation — revision notes",
      summary: "Commas in lists; ' for missing letters/belonging; ' ' for speech.",
      sections: [
        { heading: "Commas/apostrophes", body: "Lists: a, b and c. Contractions: don't, can't. Possession: dog's bone." },
        { heading: "Speech", body: "'Quote,' said Name. New speaker = new line; punctuation inside marks." },
      ],
    },
  ],
};

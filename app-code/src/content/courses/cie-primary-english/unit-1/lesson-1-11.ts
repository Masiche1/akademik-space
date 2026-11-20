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
            { id: "a", text: "After every word" }, { id: "b", text: "Between list items" }, { id: "c", text: "Only at the end" }, { id: "d", text: "Nowhere" },
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

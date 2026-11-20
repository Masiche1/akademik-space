import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cipe-u2-lesson-2-13",
  code: "2-13",
  title: "Stage 2 — Dictionaries, Comparatives and Direct Speech",
  goal: "I CAN use a dictionary, form comparatives and write simple direct speech.",
  standards: ["Cambridge Primary English 0058 Stage 2: vocabulary and writing",
  "Cambridge Primary English 0058 framework substrands: 2Rv, 2Wg, 2Wc"],
  stage: 2,
  vocabulary: [
    { term: "Dictionary", definition: "Book listing words alphabetically with meanings." },
    { term: "Alphabetical order", definition: "Words sorted a–z by first letters." },
    { term: "Comparative", definition: "Comparing two things: bigger, faster, happier." },
    { term: "Superlative", definition: "Comparing three or more: biggest, fastest." },
    { term: "Direct speech", definition: "Exact spoken words in speech marks." },
  ],
  concepts: [
    {
      id: "cipe-u2-s13-dict-comparative",
      title: "Dictionaries, comparatives and direct speech",
      skill: "Use dictionaries, form comparative adjectives and punctuate simple direct speech at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Dictionaries and comparatives",
            body: "Dictionaries list words alphabetically — find 'cat' before 'dog'. To compare two things, add -er (big → bigger, happy → happier with double p) or use 'more' for long words (more beautiful). Superlatives use -est or 'most': biggest, most beautiful.",
          },
          {
            heading: "Direct speech",
            body: "Direct speech quotes exact words: 'I am happy,' said Sam. Start each new speaker on a new line. The speech marks go around the spoken words only — the reporting clause ('said Sam') stays outside. Comma goes inside the speech marks before 'said'.",
          },
        ],
        keyFormulas: [
          { name: "Comparative", statement: "-er for short adjectives; more for long" },
          { name: "Speech", statement: "'Words,' said Name. New speaker = new line." },
        ],
        workedExample: {
          problem: "Make comparatives: big, happy, beautiful.",
          solution: "bigger, happier (double p), more beautiful.",
        },
      },
      questions: [
        {
          id: "cipe-u2-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a dictionary, which word comes first: 'apple' or 'banana'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "banana" }, { id: "b", text: "apple" }, { id: "c", text: "both same" }, { id: "d", text: "depends on size" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Alphabetical order", statement: "a before b." }],
            steps: [{ reasoning: "'apple' starts with a, 'banana' with b.", marks: 1, markCode: "AO2" }],
            finalAnswer: "apple",
          },
        },
        {
          id: "cipe-u2-dc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the comparative of 'tall'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comparatives", statement: "Add -er." }],
            steps: [
              { reasoning: "tall → taller.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: taller.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "taller",
          },
        },
        {
          id: "cipe-u2-dc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Punctuate: 'lets go home said mum'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Direct speech", statement: "Speech marks + comma inside." }],
            steps: [
              { reasoning: "Speech: 'Let's go home.'", marks: 1, markCode: "AO2" },
              { reasoning: "Tag: said Mum — comma inside marks.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'Let's go home,' said Mum.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Let's go home,' said Mum.",
          },
        },
        {
          id: "cipe-u2-dc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Which comes first in a dictionary: 'ship' or 'sheep'? (b) Write comparatives for 'fast', 'good' and 'expensive'. (c) Write this as direct speech: Tom said that he was tired. Show thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dictionary, comparatives, speech", statement: "Alphabetising + adjective forms + speech punctuation." }],
            steps: [
              { reasoning: "(a) 'sheep' before 'ship' (e before i).", marks: 1, markCode: "AO2" },
              { reasoning: "(b) fast → faster; good → better (irregular); expensive → more expensive.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) 'I am tired,' said Tom.", marks: 1, markCode: "AO2" },
              { reasoning: "Speech marks around exact words only.", marks: 1, markCode: "AO2" },
              { reasoning: "Comma inside marks before 'said'.", marks: 1, markCode: "AO2" },
              { reasoning: "Reasoning shown for each part.", marks: 1, markCode: "AO3" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "AO1" },
              { reasoning: "All answers correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) sheep (b) faster, better, more expensive (c) 'I am tired,' said Tom.",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All parts correct with clear reasoning." },
              { level: "Level 2", marks: "4-6", descriptor: "Most correct; minor slips." },
              { level: "Level 1", marks: "1-3", descriptor: "Some correct; limited reasoning." },
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-dc-notes",
      title: "Dictionaries and speech — notes",
      summary: "Dictionary = alphabetical; comparative -er/more; speech marks around exact words.",
      sections: [
        { heading: "Vocabulary", body: "Alphabetise by first letters; -er for short adjectives, more for long." },
        { heading: "Speech", body: "'Quote,' said Name. Comma inside marks; new speaker new line." },
      ],
    },
  ],
};

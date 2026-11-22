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
            { id: "a", text: "depends on size" },
            { id: "b", text: "apple" },
            { id: "c", text: "banana" },
            { id: "d", text: "both same" },
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
        {
          id: "cipe-u2-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a dictionary, which word comes first: 'cat' or 'dog'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both at once" },
            { id: "b", text: "It does not matter" },
            { id: "c", text: "dog" },
            { id: "d", text: "cat" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Alphabetical order", statement: "Words sorted a to z." }],
            steps: [{ reasoning: "'cat' starts with c, before d.", marks: 1, markCode: "AO2" }],
            finalAnswer: "cat",
          },
        },
        {
          id: "cipe-u2-dc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a dictionary give you for each word?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Its meaning and often its word class" },
            { id: "b", text: "Its price" },
            { id: "c", text: "A picture only" },
            { id: "d", text: "Its author" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dictionary", statement: "Words alphabetically with meanings." }],
            steps: [{ reasoning: "A dictionary gives meanings (and word classes).", marks: 1, markCode: "AO1" }],
            finalAnswer: "Its meaning and word class",
          },
        },
        {
          id: "cipe-u2-dc-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many comparatives are there in this list: 'bigger', 'fastest', 'happier'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Comparative vs superlative", statement: "Comparative compares two; superlative compares three+." }],
            steps: [
              { reasoning: "bigger and happier are comparatives; fastest is a superlative = 2.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-dc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which comparative is correct for a long adjective like 'expensive'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "more expensive" },
            { id: "b", text: "expensivest" },
            { id: "c", text: "most expensive" },
            { id: "d", text: "expensiver" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comparatives", statement: "-er for short, more for long adjectives." }],
            steps: [{ reasoning: "Long adjectives use 'more' for the comparative.", marks: 1, markCode: "AO2" }],
            finalAnswer: "more expensive",
          },
        },
        {
          id: "cipe-u2-dc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct superlative of 'big'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "bigger" },
            { id: "b", text: "biger" },
            { id: "c", text: "most big" },
            { id: "d", text: "biggest" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Superlatives", statement: "Add -est for three or more." }],
            steps: [{ reasoning: "big → biggest (double g + est).", marks: 1, markCode: "AO1" }],
            finalAnswer: "biggest",
          },
        },
        {
          id: "cipe-u2-dc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the comparative of 'small'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comparatives", statement: "Add -er." }],
            steps: [
              { reasoning: "small → smaller.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: smaller.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "smaller",
          },
        },
        {
          id: "cipe-u2-dc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write this as direct speech: 'Mum said that she was proud of me.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Direct speech", statement: "Exact words in speech marks." }],
            steps: [
              { reasoning: "Convert to exact spoken words: 'I am proud of you.'", marks: 1, markCode: "AO2" },
              { reasoning: "Speech marks around the words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 'I am proud of you,' said Mum.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'I am proud of you,' said Mum.",
          },
        },
        {
          id: "cipe-u2-dc-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many sentences are in this dialogue: \"'Hello,' said Jo. 'Hi,' said Max. 'How are you?'\"? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence counting", statement: "Each speech or tag counts." }],
            steps: [
              { reasoning: "Three sentences in the dialogue.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-dc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When do you use a superlative instead of a comparative?",
          response: { type: "mcq", choices: [
            { id: "a", text: "When spelling" },
            { id: "b", text: "When comparing three or more things" },
            { id: "c", text: "When comparing two things" },
            { id: "d", text: "Never" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Superlative", statement: "For three or more." }],
            steps: [{ reasoning: "Superlatives compare the most/least of three or more.", marks: 1, markCode: "AO1" }],
            finalAnswer: "When comparing three or more things",
          },
        },
        {
          id: "cipe-u2-dc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short dialogue between two friends planning a party. Use speech marks correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Direct speech", statement: "Speech marks + comma inside + new speaker new line." }],
            steps: [
              { reasoning: "Two speakers' lines written.", marks: 1, markCode: "AO2" },
              { reasoning: "Speech marks around exact words.", marks: 1, markCode: "AO2" },
              { reasoning: "Comma inside marks before 'said'.", marks: 1, markCode: "AO2" },
              { reasoning: "New speaker starts a new line.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. \"'Let's have a party on Saturday,' said Ana. 'Great idea,' said Ben. 'What food should we buy?'\"",
          },
        },
        {
          id: "cipe-u2-dc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write comparatives and superlatives for these adjectives: 'tall', 'good', 'beautiful' (one comparative and one superlative each).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comparatives and superlatives", statement: "-er/-est or more/most." }],
            steps: [
              { reasoning: "tall → taller, tallest.", marks: 1, markCode: "AO1" },
              { reasoning: "good → better, best (irregular).", marks: 1, markCode: "AO1" },
              { reasoning: "beautiful → more beautiful, most beautiful.", marks: 1, markCode: "AO1" },
              { reasoning: "All six forms correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "taller/tallest; better/best; more beautiful/most beautiful",
          },
        },
        {
          id: "cipe-u2-dc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a dictionary, 'grape' comes before 'graph'. Explain how you would find which of three words — 'apple', 'apricot', 'avocado' — comes second in alphabetical order.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Alphabetising", statement: "Compare letters left to right." }],
            steps: [
              { reasoning: "All start with 'ap' or 'av' — compare third letter.", marks: 1, markCode: "AO2" },
              { reasoning: "apple (p-p) vs apricot (p-r): 'apple' before 'apricot'.", marks: 1, markCode: "AO2" },
              { reasoning: "avocado starts with 'av', after 'ap'.", marks: 1, markCode: "AO2" },
              { reasoning: "Second word is 'apricot'.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "apricot (order: apple, apricot, avocado)",
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

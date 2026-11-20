import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciege-u6-lesson-6-1",
  code: "6-1",
  title: "Grammar and Punctuation Accuracy",
  goal: "I CAN identify and correct grammatical and punctuation errors.",
  standards: ["Cambridge IGCSE First Language English 0500: accuracy"],
  vocabulary: [
    { term: "Subject-verb agreement", definition: "The verb must match the subject in number." },
    { term: "Comma splice", definition: "Two complete sentences joined by only a comma." },
    { term: "Run-on", definition: "Two sentences joined without punctuation." },
    { term: "Modifier", definition: "A word or phrase describing another element." },
    { term: "Dangling modifier", definition: "A modifier that doesn't clearly attach to its subject." },
  ],
  concepts: [
    {
      id: "ciege-u6-s1-agreement",
      title: "Subject-verb agreement and sentence structure",
      skill: "Identify and correct common grammatical errors.",
      lesson: {
        sections: [
          {
            heading: "Agreement",
            body: "The verb must match the subject: 'The dogs bark' not 'The dogs barks'. Watch for phrases between subject and verb — 'The box of chocolates is' not 'are'.",
          },
          {
            heading: "Sentence fragments and run-ons",
            body: "Every sentence needs a subject and a verb. Fix run-ons with a full stop, semicolon, or conjunction: 'I ran; I was late' or 'I ran because I was late'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Correct: 'The team of players are winning.'",
          solution: "'The team of players is winning' — the subject is 'team' (singular), not 'players'.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s1-ag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has correct subject-verb agreement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dogs barks." }, { id: "b", text: "The dog bark." }, { id: "c", text: "The dogs bark." }, { id: "d", text: "The dog barks are." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Verb matches subject." }],
            steps: [
              { reasoning: "'Dogs' is plural, so 'bark' is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The dogs bark.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this sentence: 'The box of chocolates are empty.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Subject is 'box'." }],
            steps: [
              { reasoning: "The subject is 'box' (singular), not 'chocolates'.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The box of chocolates is empty.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The box of chocolates is empty.",
          },
        },
        {
          id: "ciege-u6-s1-ag-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct this run-on: 'I wanted to go but it rained we stayed home.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Run-on", statement: "Split into sentences." }],
            steps: [
              { reasoning: "Identify the two complete thoughts.", marks: 1, markCode: "AO2" },
              { reasoning: "Separate with a full stop or conjunction.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'I wanted to go but it rained. We stayed home.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Split into two sentences",
          },
        },
        {
          id: "ciege-u6-s1-ag-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct this comma splice: 'She was tired, she went to bed early.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Comma splice", statement: "Can't join sentences with comma alone." }],
            steps: [
              { reasoning: "Identify the comma splice.", marks: 1, markCode: "AO2" },
              { reasoning: "Replace comma with full stop or semicolon.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'She was tired. She went to bed early.' or 'She was tired; she went to bed early.'", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Full stop or semicolon",
          },
        },
      ],
    },
    {
      id: "ciege-u6-s1-punctuation",
      title: "Punctuation and modifiers",
      skill: "Use punctuation precisely and avoid dangling modifiers.",
      lesson: {
        sections: [
          {
            heading: "Punctuation rules",
            body: "Commas separate items in lists and clauses. Apostrophes show possession ('the dog's bone') or contraction ('don't'). Colons introduce lists or explanations; semicolons join related clauses.",
          },
          {
            heading: "Modifiers",
            body: "A modifier must clearly describe what it modifies. 'Walking to school, the rain started' is wrong — the rain isn't walking. Fix: 'Walking to school, I got caught in the rain.'",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Correct: 'Running late, the bus was missed.'",
          solution: "'Running late, I missed the bus.' — the modifier must attach to the person running.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s1-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses an apostrophe correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dogs bone." }, { id: "b", text: "The dog's bone." }, { id: "c", text: "The dogs' bone." }, { id: "d", text: "The dog bone." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Apostrophe", statement: "Shows possession." }],
            steps: [
              { reasoning: "'Dog's' shows the bone belongs to one dog.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The dog's bone.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct this dangling modifier: 'Walking to school, the rain started.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dangling modifier", statement: "Modifier must attach to subject." }],
            steps: [
              { reasoning: "The rain can't walk — the modifier is dangling.", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'Walking to school, I got caught in the rain.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Walking to school, I got caught in the rain.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Punctuate this list correctly: 'I need to buy milk bread and eggs.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "List punctuation", statement: "Commas between items." }],
            steps: [
              { reasoning: "Identify the list items.", marks: 1, markCode: "AO2" },
              { reasoning: "Add commas: 'I need to buy milk, bread and eggs.'", marks: 1, markCode: "AO2" },
              { reasoning: "Full stop at end.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "milk, bread and eggs.",
          },
        },
        {
          id: "ciege-u6-s1-pu-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct this sentence for both grammar and punctuation: 'the childs toys are messy they need tidying up'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Multiple errors", statement: "Fix all errors." }],
            steps: [
              { reasoning: "'Childs' → 'children's' (irregular plural).", marks: 1, markCode: "AO2" },
              { reasoning: "Capital letter at start.", marks: 1, markCode: "AO2" },
              { reasoning: "Split into two sentences or use conjunction.", marks: 1, markCode: "AO2" },
              { reasoning: "Correct: 'The children's toys are messy. They need tidying up.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The children's toys are messy. They need tidying up.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u6-s1-grammar-notes",
      title: "Grammar and punctuation — revision notes",
      summary: "Agreement, run-ons, comma splices, modifiers, apostrophes.",
      sections: [
        { heading: "Grammar", body: "Verb matches subject. Every sentence needs subject + verb. Watch for phrases between them." },
        { heading: "Punctuation", body: "No comma splices or run-ons. Apostrophes for possession. Modifiers must clearly attach to their subject." },
      ],
    },
  ],
};

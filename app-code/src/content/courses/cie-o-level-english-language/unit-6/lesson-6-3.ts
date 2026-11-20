import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cie-ol-el-lesson-6-3",
  code: "6-3",
  title: "Grammar and punctuation review",
  goal: "I CAN apply accurate grammar and punctuation in all writing.",
  standards: ["1123 Writing: grammar"],
  vocabulary: [
    { term: "Clause", definition: "Part of sentence with subject and verb." },
    { term: "Phrase", definition: "Group of words without subject-verb pair." },
    { term: "Fragment", definition: "Incomplete sentence." },
    { term: "Run-on", definition: "Two sentences joined without punctuation." },
    { term: "Comma splice", definition: "Two clauses joined by comma only." },
    { term: "Parallel structure", definition: "Consistent grammatical form in lists." },
  ],
  concepts: [
    {
      id: "cie-ol-el-grammar-review",
      title: "Grammar accuracy",
      skill: "Use correct grammar — sentence types, clauses, punctuation.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Simple (one clause), compound (two independent), complex (main+subordinate). Vary for effect.",
          },
          {
            heading: "Clauses and phrases",
            body: "Clause: has subject+verb. Phrase: no subject-verb pair. Fragments are incomplete — avoid.",
          },
          {
            heading: "Common errors",
            body: "Run-ons, comma splices, fragments, subject-verb disagreement, tense errors.",
          },
        ],
        keyFormulas: [
          { name: "Grammar", statement: "Clause=subject+verb; phrase=no subject-verb; avoid fragments/run-ons/comma splices." },
        ],
        workedExample: {
          problem: "Fix: 'I like apples oranges and bananas.'",
          solution: "I like apples, oranges and bananas. — commas needed in list.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'clause'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subject + verb" },
              { id: "b", text: "Group of words" },
              { id: "c", text: "Punctuation mark" },
              { id: "d", text: "Complete paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clause", statement: "Has subject and verb." },
            ],
            steps: [
              { reasoning: "Clause = subject+verb.", working: "subject+verb", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Subject + verb",
            commonErrors: ["Choosing (b) — that's phrase."],
          },
        },
        {
          id: "cie-ol-el-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common sentence errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Errors", statement: "Run-ons, comma splices, fragments, subject-verb disagreement." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "errors", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Run-ons, comma splices, fragments, subject-verb disagreement (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-gr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between run-on and comma splice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Errors", statement: "Run-on=no punctuation; comma splice=comma only." },
            ],
            steps: [
              { reasoning: "Run-on: two sentences joined with no punctuation.", working: "run-on", marks: 1, markCode: "AO2" },
              { reasoning: "Comma splice: two clauses joined by comma only.", working: "comma splice", marks: 1, markCode: "AO2" },
              { reasoning: "Both incorrect — need proper punctuation.", working: "incorrect", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Run-on=no punctuation; comma splice=comma only.",
            commonErrors: ["Confusing the two — key distinction."],
          },
        },
        {
          id: "cie-ol-el-gr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply grammar rules.",
          parts: [
            { label: "a", prompt: "Define clause and phrase.", marks: 2 },
            { label: "b", prompt: "Name sentence types.", marks: 2 },
            { label: "c", prompt: "Explain comma splice.", marks: 2 },
            { label: "d", prompt: "Name punctuation marks.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar", statement: "Clause/phrase, sentence types, punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Clause=subject+verb; phrase=no subject-verb.", working: "definitions", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simple, compound, complex.", working: "types", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Two clauses joined by comma only — incorrect.", working: "comma splice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Full stop, comma, colon, semicolon, dash, quotes, apostrophe.", working: "marks", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clause/phrase (b) sentence types (c) comma splice (d) punctuation",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three types.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple marks.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Comma splice — comma alone can't join clauses."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-punctuation-review",
      title: "Punctuation mastery",
      skill: "Use punctuation correctly for clarity and effect.",
      lesson: {
        sections: [
          {
            heading: "Basic punctuation",
            body: "Full stop (end), comma (pause/list), question mark, exclamation mark. Each has specific use.",
          },
          {
            heading: "Advanced punctuation",
            body: "Colon (introduces list/explanation), semicolon (links related clauses), dash (interruption/emphasis), brackets (additional info).",
          },
          {
            heading: "Apostrophes",
            body: "Contraction (don't, it's) and possession (John's, students'). Not for plurals.",
          },
        ],
        keyFormulas: [
          { name: "Punctuation", statement: "Full stop=end; comma=pause/list; colon=introduces; semicolon=links; apostrophe=contraction/possession." },
        ],
        workedExample: {
          problem: "When to use semicolon vs colon?",
          solution: "Semicolon links related independent clauses; colon introduces list/explanation.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main use of a colon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce list/explanation" },
              { id: "b", text: "End sentence" },
              { id: "c", text: "Pause briefly" },
              { id: "d", text: "Show possession" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Colon", statement: "Introduces list or explanation." },
            ],
            steps: [
              { reasoning: "Colon = introduces.", working: "introduces", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Introduce list/explanation",
            commonErrors: ["Choosing (b) — that's full stop."],
          },
        },
        {
          id: "cie-ol-el-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two uses of apostrophe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophe", statement: "Contraction (don't) and possession (John's)." },
            ],
            steps: [
              { reasoning: "Contraction and possession.", working: "uses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Contraction (don't) and possession (John's).",
            commonErrors: ["Using for plurals — incorrect."],
          },
        },
        {
          id: "cie-ol-el-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between semicolon and colon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation", statement: "Semicolon=links clauses; colon=introduces list/explanation." },
            ],
            steps: [
              { reasoning: "Semicolon joins two related independent clauses.", working: "semicolon", marks: 1, markCode: "AO2" },
              { reasoning: "Colon introduces what follows — list or explanation.", working: "colon", marks: 1, markCode: "AO2" },
              { reasoning: "Different functions — not interchangeable.", working: "different", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Semicolon=links clauses; colon=introduces list/explanation.",
            commonErrors: ["Using interchangeably — different functions."],
          },
        },
        {
          id: "cie-ol-el-pr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply punctuation rules.",
          parts: [
            { label: "a", prompt: "Name basic punctuation.", marks: 2 },
            { label: "b", prompt: "Name advanced punctuation.", marks: 3 },
            { label: "c", prompt: "Explain apostrophe uses.", marks: 2 },
            { label: "d", prompt: "When to use dash?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation", statement: "Basic/advanced marks, apostrophes, dashes." },
            ],
            steps: [
              { part: "a", reasoning: "Full stop, comma, question mark, exclamation mark.", working: "basic", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Colon, semicolon, dash, brackets, quotation marks.", working: "advanced", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contraction (don't) and possession (John's).", working: "apostrophe", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Both uses.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Interruption, emphasis, additional information.", working: "dash", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) basic (b) advanced (c) apostrophe uses (d) dash uses",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Multiple marks.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple marks.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Both uses.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Apostrophe for plural — only contraction/possession."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-vocabulary-review",
      title: "Vocabulary development",
      skill: "Expand and use vocabulary precisely.",
      lesson: {
        sections: [
          {
            heading: "Word choice",
            body: "Precise vocabulary conveys meaning clearly — 'walked' vs 'strode', 'said' vs 'whispered'.",
          },
          {
            heading: "Synonyms and connotation",
            body: "Synonyms have different connotations — 'slim' vs 'skinny', 'frugal' vs 'stingy'.",
          },
          {
            heading: "Avoiding repetition",
            body: "Use varied vocabulary instead of repeating — but maintain clarity.",
          },
        ],
        keyFormulas: [
          { name: "Vocabulary", statement: "Precise words; synonyms differ in connotation; vary vocabulary." },
        ],
        workedExample: {
          problem: "Improve: 'The man walked into the room and sat down.'",
          solution: "'The man strode into the room and sank into the chair.' — more precise, vivid.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-vr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'connotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Associated feelings" },
              { id: "b", text: "Spelling" },
              { id: "c", text: "Pronunciation" },
              { id: "d", text: "Word length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Associated feelings beyond literal meaning." },
            ],
            steps: [
              { reasoning: "Connotation = associated meaning.", working: "associated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Associated feelings",
            commonErrors: ["Choosing (b) — that's spelling."],
          },
        },
        {
          id: "cie-ol-el-vr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is precise vocabulary important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Precision", statement: "Conveys meaning clearly — avoids ambiguity." },
            ],
            steps: [
              { reasoning: "Precise words convey exact meaning.", working: "precise", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Conveys exact meaning clearly — avoids ambiguity.",
            commonErrors: ["Using complex words — precision matters."],
          },
        },
        {
          id: "cie-ol-el-vr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how synonyms differ in connotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connotation", statement: "Synonyms have different associations — 'slim' vs 'skinny'." },
            ],
            steps: [
              { reasoning: "'Slim' positive; 'skinny' negative — same meaning, different feeling.", working: "slim/skinny", marks: 1, markCode: "AO2" },
              { reasoning: "'Frugal' positive; 'stingy' negative.", working: "frugal/stingy", marks: 1, markCode: "AO2" },
              { reasoning: "Word choice affects tone and perception.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Connotation explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Synonyms differ in connotation — same meaning, different feeling.",
            commonErrors: ["Thinking synonyms interchangeable — connotation differs."],
          },
        },
        {
          id: "cie-ol-el-vr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply vocabulary skills.",
          parts: [
            { label: "a", prompt: "Define connotation.", marks: 1 },
            { label: "b", prompt: "Why precise vocabulary?", marks: 2 },
            { label: "c", prompt: "How synonyms differ?", marks: 3 },
            { label: "d", prompt: "How to avoid repetition?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary", statement: "Connotation, precision, synonyms, variety." },
            ],
            steps: [
              { part: "a", reasoning: "Associated feelings beyond literal meaning.", working: "connotation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Conveys exact meaning, avoids ambiguity.", working: "precision", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Same meaning, different connotations — positive/negative.", working: "synonyms", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Examples: slim/skinny, frugal/stingy.", working: "examples", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Use synonyms, vary sentence structure, maintain clarity.", working: "variety", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) associated meaning (b) precision (c) connotation differences (d) synonyms+variety",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Examples+explanation.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple methods.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Using complex words — precision and clarity matter."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-u6-grammar-notes",
      title: "Grammar and vocabulary — revision notes",
      summary: "Sentence types, punctuation, vocabulary precision.",
      sections: [
        {
          heading: "Grammar",
          body: "Clause=subject+verb; phrase=no subject-verb. Sentence types: simple/compound/complex. Errors: run-ons, comma splices, fragments.",
        },
        {
          heading: "Punctuation/Vocabulary",
          body: "Punctuation: full stop, comma, colon, semicolon, apostrophe. Vocabulary: precise words, connotation, synonyms, variety.",
        },
      ],
    },
  ],
};

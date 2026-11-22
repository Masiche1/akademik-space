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
              { id: "a", text: "Group of words" },
              { id: "b", text: "Complete paragraph" },
              { id: "c", text: "Punctuation mark" },
              { id: "d", text: "Subject + verb" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clause", statement: "Has subject and verb." },
            ],
            steps: [
              { reasoning: "Clause = subject+verb.", working: "subject+verb", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Subject + verb",
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
    {
      id: "cie-ol-el-gr-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What defines a clause?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "It has no verb" },
          { id: "b", text: "It has a subject and a verb" },
          { id: "c", text: "It is always short" },
          { id: "d", text: "It is a single word" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Clause", statement: "Has subject and verb." },
        ],
        steps: [
          { reasoning: "Clause = subject + verb.", working: "clause", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** It has a subject and a verb",
        commonErrors: ["Confusing clause with phrase."],
      },
    },
    {
      id: "cie-ol-el-gr-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is a phrase?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A complete sentence" },
          { id: "b", text: "A paragraph" },
          { id: "c", text: "A clause" },
          { id: "d", text: "A group of words without subject-verb pair" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Phrase", statement: "No subject-verb pair." },
        ],
        steps: [
          { reasoning: "Phrase lacks subject-verb.", working: "phrase", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** A group of words without subject-verb pair",
        commonErrors: ["Confusing phrase with clause."],
      },
    },
    {
      id: "cie-ol-el-gr-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "What is a run-on sentence?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A sentence with commas" },
          { id: "b", text: "A very long sentence" },
          { id: "c", text: "Two independent clauses joined without punctuation" },
          { id: "d", text: "A short sentence" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Run-on", statement: "Clauses joined without punctuation." },
        ],
        steps: [
          { reasoning: "Run-on = no punctuation between clauses.", working: "run-on", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** Two independent clauses joined without punctuation",
        commonErrors: ["Thinking length makes it a run-on."],
      },
    },
    {
      id: "cie-ol-el-gr-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is a comma splice?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A question" },
          { id: "b", text: "A sentence with no commas" },
          { id: "c", text: "A list" },
          { id: "d", text: "Two independent clauses joined by only a comma" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Comma splice", statement: "Clauses joined by comma only." },
        ],
        steps: [
          { reasoning: "Comma splice = comma only.", working: "splice", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Two independent clauses joined by only a comma",
        commonErrors: ["Confusing with correct comma use."],
      },
    },
    {
      id: "cie-ol-el-gr-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a sentence fragment?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A question" },
          { id: "b", text: "A very long sentence" },
          { id: "c", text: "An incomplete sentence missing subject or verb" },
          { id: "d", text: "A complete sentence" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Fragment", statement: "Incomplete — missing subject or verb." },
        ],
        steps: [
          { reasoning: "Fragment = incomplete sentence.", working: "fragment", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(c)** An incomplete sentence missing subject or verb",
        commonErrors: ["Thinking fragments are acceptable."],
      },
    },
    {
      id: "cie-ol-el-gr-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A paragraph has 8 sentences. A student writes 3 run-ons and 2 fragments. How many sentences are grammatically correct?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 3 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Errors", statement: "Run-ons and fragments are errors." },
        ],
        steps: [
          { reasoning: "8 - 3 - 2 = 3 correct sentences.", working: "8 - 3 - 2 = 3", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "3",
        commonErrors: ["Not subtracting all errors."],
      },
    },
    {
      id: "cie-ol-el-gr-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "An essay task requires at least 500 words. A draft is 420 words. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 80 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "500 - 420 = 80 words short.", working: "500 - 420 = 80", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "80",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-gr-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A text has 10 sentences. A student identifies 4 run-ons, 3 comma splices, and 2 fragments. How many error-free sentences remain?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Errors", statement: "Run-ons, comma splices, fragments." },
        ],
        steps: [
          { reasoning: "10 - 4 - 3 - 2 = 1 error-free sentence.", working: "10 - 4 - 3 - 2 = 1", marks: 1, markCode: "AO3" },
          { reasoning: "Only one sentence is correct.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Not counting all error types."],
      },
    },
    {
      id: "cie-ol-el-gr-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "An essay must be between 400 and 450 words. A draft is 430 words, and the student adds a 30-word introduction. How many words must the body lose to stay within the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 10 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count." },
        ],
        steps: [
          { reasoning: "430 + 30 = 460 words after introduction.", working: "430 + 30 = 460", marks: 1, markCode: "AO3" },
          { reasoning: "460 - 450 = 10 words over.", working: "460 - 450 = 10", marks: 2, markCode: "AO3" },
          { reasoning: "Body must lose 10 words.", working: "10", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "10",
        commonErrors: ["Forgetting introduction counts."],
      },
    },
    {
      id: "cie-ol-el-gr-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the difference between a clause and a phrase.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Grammar", statement: "Clause=subject+verb; phrase=no subject-verb." },
        ],
        steps: [
          { reasoning: "Clause has subject and verb.", working: "clause", marks: 1, markCode: "AO2" },
          { reasoning: "Phrase lacks subject-verb pair.", working: "phrase", marks: 1, markCode: "AO2" },
          { reasoning: "Clear distinction made.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Clause=subject+verb; phrase=no subject-verb.",
        commonErrors: ["Confusing the two."],
      },
    },
    {
      id: "cie-ol-el-gr-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain how to fix run-on sentences and comma splices.",
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Errors", statement: "Run-on=no punctuation; comma splice=comma only." },
        ],
        steps: [
          { reasoning: "Run-on: add period, semicolon, or conjunction.", working: "run-on", marks: 1, markCode: "AO2" },
          { reasoning: "Comma splice: add conjunction or change to period/semicolon.", working: "splice", marks: 1, markCode: "AO2" },
          { reasoning: "Both need proper punctuation between clauses.", working: "punctuation", marks: 1, markCode: "AO2" },
          { reasoning: "Clear explanation of fixes.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Run-on: add punctuation; comma splice: add conjunction or period.",
        commonErrors: ["Not knowing how to fix."],
      },
    },
    {
      id: "cie-ol-el-gr-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about grammar accuracy.",
      parts: [
        { label: "a", prompt: "Define clause.", marks: 2 },
        { label: "b", prompt: "Define phrase.", marks: 2 },
        { label: "c", prompt: "Name two sentence errors.", marks: 2 },
        { label: "d", prompt: "How to fix run-ons?", marks: 2 },
      ],
      response: {
        type: "open",
      },
      markscheme: {
        principles: [
          { kind: "skill", name: "Grammar", statement: "Clause, phrase, errors, fixes." },
        ],
        steps: [
          { part: "a", reasoning: "Has subject and verb.", working: "clause", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "No subject-verb pair.", working: "phrase", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Clear definition.", working: "clear", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Run-ons, comma splices, fragments.", working: "errors", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "Two valid errors.", working: "two", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Add period, semicolon, or conjunction.", working: "fix", marks: 1, markCode: "AO2" },
          { part: "d", reasoning: "Clear explanation.", working: "clear", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) subject+verb (b) no subject-verb (c) run-ons/splices (d) add punctuation",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Two errors.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
        ],
        commonErrors: ["Confusing clause and phrase."],
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
              { id: "a", text: "Show possession" },
              { id: "b", text: "Introduce list/explanation" },
              { id: "c", text: "End sentence" },
              { id: "d", text: "Pause briefly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Colon", statement: "Introduces list or explanation." },
            ],
            steps: [
              { reasoning: "Colon = introduces.", working: "introduces", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Introduce list/explanation",
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
        {
          id: "cie-ol-el-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main use of commas in a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To end sentences" },
              { id: "b", text: "To show possession" },
              { id: "c", text: "To separate items" },
              { id: "d", text: "To introduce explanations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Comma", statement: "Separates items in a list." },
            ],
            steps: [
              { reasoning: "Commas separate list items.", working: "list", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** To separate items",
            commonErrors: ["Using semicolons in simple lists."],
          },
        },
        {
          id: "cie-ol-el-pr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A semicolon is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Link two related independent clauses" },
              { id: "b", text: "Introduce a list" },
              { id: "c", text: "End a question" },
              { id: "d", text: "Show possession" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semicolon", statement: "Joins related independent clauses." },
            ],
            steps: [
              { reasoning: "Semicolon = clause link.", working: "clauses", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Link two related independent clauses",
            commonErrors: ["Confusing with colon — colon introduces."],
          },
        },
        {
          id: "cie-ol-el-pr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which use of the apostrophe is INCORRECT?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 1990's were great" },
              { id: "b", text: "The student's book" },
              { id: "c", text: "Don't go" },
              { id: "d", text: "James's car" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophe", statement: "Never for plurals — only contraction/possession." },
            ],
            steps: [
              { reasoning: "'1990s' is a plural — no apostrophe needed.", working: "plural", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** The 1990's were great",
            commonErrors: ["Using apostrophes for all plurals."],
          },
        },
        {
          id: "cie-ol-el-pr-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Brackets (parentheses) are used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add additional or explanatory information" },
              { id: "b", text: "End the sentence" },
              { id: "c", text: "Show strong emotion" },
              { id: "d", text: "Separate list items" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Brackets", statement: "Contain additional information." },
            ],
            steps: [
              { reasoning: "Brackets = supplementary info.", working: "info", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Add additional or explanatory information",
            commonErrors: ["Using brackets for essential information — use dashes."],
          },
        },
        {
          id: "cie-ol-el-pr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many basic punctuation marks are named (full stop, comma, question mark, exclamation mark)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Basic punctuation", statement: "Four basic marks." },
            ],
            steps: [
              { part: "a", reasoning: "Full stop, comma, question mark, exclamation = 4.", working: "4", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4",
            commonErrors: ["Including colon/semicolon as basic."],
          },
        },
        {
          id: "cie-ol-el-pr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) How many advanced punctuation marks are named (colon, semicolon, dash, brackets)? (b) How many uses does the apostrophe have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Advanced punctuation", statement: "4 advanced marks; 2 apostrophe uses." },
            ],
            steps: [
              { part: "a", reasoning: "Colon, semicolon, dash, brackets = 4.", working: "4", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Contraction and possession = 2.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 4 (b) 2",
            commonErrors: ["Counting quotation marks with the four advanced marks."],
          },
        },
        {
          id: "cie-ol-el-pr-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "(a) How many basic punctuation marks exist? (b) How many advanced punctuation marks are named? (c) How many apostrophe uses are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Punctuation counts", statement: "4 basic, 4 advanced, 2 apostrophe uses." },
            ],
            steps: [
              { part: "a", reasoning: "Full stop, comma, ?, ! = 4.", working: "4", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Colon, semicolon, dash, brackets = 4.", working: "4", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Contraction, possession = 2.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 4 (b) 4 (c) 2",
            commonErrors: ["Including quotation marks in advanced count."],
          },
        },
        {
          id: "cie-ol-el-pr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the quick rule for choosing between a semicolon and a colon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Semicolon vs colon", statement: "Semicolon joins; colon introduces." },
            ],
            steps: [
              { reasoning: "Semicolon links two related independent clauses.", working: "semicolon", marks: 1, markCode: "AO2" },
              { reasoning: "Colon introduces a list or explanation.", working: "colon", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Semicolon joins related clauses; colon introduces a list or explanation.",
            commonErrors: ["Using them interchangeably."],
          },
        },
        {
          id: "cie-ol-el-pr-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Correct the apostrophe errors: (a) 'Its raining.' (b) 'The students' books are heavy.' (c) 'The dog wagged it's tail.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophe rules", statement: "'Its'=possessive, 'it's'=contraction; plural possessive uses apostrophe after s." },
            ],
            steps: [
              { reasoning: "(a) 'Its' correct — no apostrophe for possessive.", working: "its", marks: 1, markCode: "AO2" },
              { reasoning: "(b) 'students'' correct — plural possessive.", working: "students'", marks: 1, markCode: "AO2" },
              { reasoning: "(c) 'its' correct — 'it's' means 'it is'.", working: "its2", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) Its raining. (b) The students' books are heavy. (c) The dog wagged its tail.",
            commonErrors: ["Confusing 'its' and 'it's' throughout."],
          },
        },
        {
          id: "cie-ol-el-pr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Punctuate this sentence correctly using at least three different marks: 'the meeting starts at nine bring your notes a laptop and a pen and be on time'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation application", statement: "Correct marks for clauses, lists, endings." },
            ],
            steps: [
              { reasoning: "Full stop to end the sentence.", working: "full stop", marks: 1, markCode: "AO2" },
              { reasoning: "Comma or colon to introduce the list.", working: "list punct", marks: 1, markCode: "AO2" },
              { reasoning: "Commas separating list items.", working: "commas", marks: 1, markCode: "AO2" },
              { reasoning: "Result is grammatically correct.", working: "correct", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'The meeting starts at nine: bring your notes, a laptop and a pen, and be on time.' (or equivalent)",
            commonErrors: ["Missing commas in the list."],
          },
        },
        {
          id: "cie-ol-el-pr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which mark introduces an explanation or list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colon" },
              { id: "b", text: "Question mark" },
              { id: "c", text: "Full stop" },
              { id: "d", text: "Comma" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Colon", statement: "Introduces list or explanation." },
            ],
            steps: [
              { reasoning: "Colon = introduces.", working: "colon", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Colon",
            commonErrors: ["Choosing comma — comma separates, colon introduces."],
          },
        },
        {
          id: "cie-ol-el-pr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Apply punctuation rules.",
          parts: [
            { label: "a", prompt: "Name four basic punctuation marks.", marks: 2 },
            { label: "b", prompt: "Name three advanced punctuation marks.", marks: 2 },
            { label: "c", prompt: "Give the two apostrophe uses.", marks: 2 },
            { label: "d", prompt: "When is a dash used?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation application", statement: "Basic/advanced marks, apostrophes, dashes." },
            ],
            steps: [
              { part: "a", reasoning: "Full stop, comma, question mark, exclamation mark.", working: "basic", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Four valid marks.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Colon, semicolon, dash, brackets.", working: "advanced", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid marks.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contraction (don't) and possession (John's).", working: "apostrophe", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Both uses.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Interruption, emphasis, additional information.", working: "dash", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Correct use described.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) four basic (b) three advanced (c) contraction+possession (d) interruption/emphasis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Four marks.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three marks.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Both uses.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Using apostrophe for plurals."],
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
              { id: "a", text: "Word length" },
              { id: "b", text: "Spelling" },
              { id: "c", text: "Associated feelings" },
              { id: "d", text: "Pronunciation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Associated feelings beyond literal meaning." },
            ],
            steps: [
              { reasoning: "Connotation = associated meaning.", working: "associated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Associated feelings",
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
        {
          id: "cie-ol-el-vr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Between 'slim' and 'skinny', which has a POSITIVE connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both positive" },
              { id: "b", text: "Skinny" },
              { id: "c", text: "Both negative" },
              { id: "d", text: "Slim" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Slim' positive; 'skinny' negative." },
            ],
            steps: [
              { reasoning: "'Slim' sounds complimentary; 'skinny' critical.", working: "slim", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Slim",
            commonErrors: ["Treating synonyms as identical in feeling."],
          },
        },
        {
          id: "cie-ol-el-vr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word most precisely replaces 'said' in 'she whispered the secret'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "announced" },
              { id: "b", text: "whispered" },
              { id: "c", text: "stated" },
              { id: "d", text: "declared" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precision", statement: "Exact word matches exact meaning." },
            ],
            steps: [
              { reasoning: "'Whispered' matches the quiet delivery.", working: "whispered", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** whispered",
            commonErrors: ["Choosing a louder, less precise verb."],
          },
        },
        {
          id: "cie-ol-el-vr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Between 'frugal' and 'stingy', which word criticises the person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Frugal" },
              { id: "c", text: "Stingy" },
              { id: "d", text: "Both praise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Frugal' positive; 'stingy' negative." },
            ],
            steps: [
              { reasoning: "'Stingy' implies unfair meanness.", working: "stingy", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Stingy",
            commonErrors: ["Missing the negative connotation."],
          },
        },
        {
          id: "cie-ol-el-vr-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST way to avoid repetitive vocabulary in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remove all adjectives" },
              { id: "b", text: "Use only long words" },
              { id: "c", text: "Repeat the same word everywhere" },
              { id: "d", text: "Use synonyms and vary sentence structure while keeping clarity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Avoiding repetition", statement: "Synonyms + varied structure + clarity." },
            ],
            steps: [
              { reasoning: "Variety must not sacrifice clarity.", working: "variety", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** Use synonyms and vary sentence structure while keeping clarity",
            commonErrors: ["Forcing obscure synonyms that confuse."],
          },
        },
        {
          id: "cie-ol-el-vr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many positive/negative synonym pairs are given in the lesson (slim/skinny, frugal/stingy)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Synonym pairs", statement: "Two pairs named." },
            ],
            steps: [
              { part: "a", reasoning: "Slim/skinny and frugal/stingy = 2.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting each word separately."],
          },
        },
        {
          id: "cie-ol-el-vr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) How many synonym pairs with different connotations are named? (b) How many methods are given for avoiding repetition?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Vocabulary counts", statement: "2 pairs; 3 methods." },
            ],
            steps: [
              { part: "a", reasoning: "Slim/skinny, frugal/stingy = 2.", working: "2", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Synonyms, varied structure, clarity = 3.", working: "3", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "(a) 2 (b) 3",
            commonErrors: ["Counting 'maintain clarity' as optional."],
          },
        },
        {
          id: "cie-ol-el-vr-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "(a) How many example synonym pairs show connotation differences? (b) How many methods avoid repetition while keeping clarity? (c) How many reasons make precise vocabulary important?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Vocabulary counts", statement: "2 pairs, 3 methods, 2 reasons." },
            ],
            steps: [
              { part: "a", reasoning: "Slim/skinny, frugal/stingy = 2.", working: "2", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Synonyms, sentence structure, clarity = 3.", working: "3", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Conveys exact meaning, avoids ambiguity = 2.", working: "2", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 2 (b) 3 (c) 2",
            commonErrors: ["Inconsistent counting of methods."],
          },
        },
        {
          id: "cie-ol-el-vr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is precise vocabulary better than using complex or long words?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precision", statement: "Exact meaning + clarity beat complexity." },
            ],
            steps: [
              { reasoning: "Precise words convey exact intended meaning.", working: "exact", marks: 1, markCode: "AO2" },
              { reasoning: "Complex words can confuse and obscure meaning.", working: "clarity", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Precision conveys exact meaning clearly; complexity can obscure it.",
            commonErrors: ["Equating long words with good writing."],
          },
        },
        {
          id: "cie-ol-el-vr-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Improve this repetitive sentence using varied vocabulary: 'The man walked into the room. The man sat down. The man looked around.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Varied vocabulary", statement: "Replace repetition with precise synonyms and varied structure." },
            ],
            steps: [
              { reasoning: "Replace repeated 'man' and 'walked' with varied, precise words.", working: "variety", marks: 1, markCode: "AO2" },
              { reasoning: "Use more vivid verbs (strode, sank, scanned).", working: "verbs", marks: 1, markCode: "AO2" },
              { reasoning: "Result keeps meaning while reducing repetition.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The man strode into the room, sank into a chair and scanned the walls.'",
            commonErrors: ["Changing words but losing clarity or meaning."],
          },
        },
        {
          id: "cie-ol-el-vr-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Choose the best word for each context and justify: (a) formal report: 'The company will ___ costs' (reduce/dwindle), (b) describing food: 'The soup was ___' (nice/tasty/delicious).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register-aware word choice", statement: "Word choice must match context and register." },
            ],
            steps: [
              { reasoning: "(a) 'reduce' suits formal register; 'dwindle' is intransitive/odd.", working: "reduce", marks: 1, markCode: "AO2" },
              { reasoning: "Justification links word to register.", working: "justify-a", marks: 1, markCode: "AO2" },
              { reasoning: "(b) 'delicious' most precise/vivid for food; 'nice' too vague.", working: "delicious", marks: 1, markCode: "AO2" },
              { reasoning: "Justification links precision to context.", working: "justify-b", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) reduce — formal register (b) delicious — most precise/vivid.",
            commonErrors: ["Choosing words without considering register."],
          },
        },
        {
          id: "cie-ol-el-vr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which word has a NEGATIVE connotation when describing a thin person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skinny" },
              { id: "b", text: "Slender" },
              { id: "c", text: "Slim" },
              { id: "d", text: "Trim" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Skinny' carries a negative judgement." },
            ],
            steps: [
              { reasoning: "Only 'skinny' sounds critical.", working: "skinny", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** Skinny",
            commonErrors: ["Thinking all thinness words are equal."],
          },
        },
        {
          id: "cie-ol-el-vr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Apply vocabulary development skills.",
          parts: [
            { label: "a", prompt: "Define 'connotation'.", marks: 1 },
            { label: "b", prompt: "Name two synonym pairs with different connotations.", marks: 2 },
            { label: "c", prompt: "Give two reasons precise vocabulary matters.", marks: 2 },
            { label: "d", prompt: "Give two methods to avoid repetition.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary application", statement: "Connotation, synonyms, precision, variety." },
            ],
            steps: [
              { part: "a", reasoning: "Associated feelings beyond literal meaning.", working: "def", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Slim/skinny, frugal/stingy.", working: "pairs", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Two valid pairs.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Conveys exact meaning, avoids ambiguity.", working: "reasons", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Both reasons given.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Use synonyms and vary sentence structure.", working: "methods", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Maintain clarity while varying.", working: "clarity", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Methods clearly explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) associated meaning (b) two pairs (c) two reasons (d) synonyms+variety+clarity",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two pairs.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One/none.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two reasons.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Methods clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Using synonyms without checking connotation."],
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
